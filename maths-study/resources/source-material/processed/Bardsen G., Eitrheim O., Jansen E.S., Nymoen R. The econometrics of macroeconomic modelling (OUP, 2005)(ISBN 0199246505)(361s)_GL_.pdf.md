---
normalized_id: shared-pdf-reference-bardsen-g-eitrheim-o-jansen-e-s-nymoen-r-the-econometrics-of-macroeconomic-modelling-oup-2005-isbn-0199246505-361s-gl
exam_code: SHARED
material_scope: bardsen g., eitrheim o., jansen e.s., nymoen r. the econometrics of macroeconomic modelling (oup, 2005)(isbn 0199246505)(361s)_gl_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Bardsen G., Eitrheim O., Jansen E.S., Nymoen R. The econometrics of macroeconomic modelling (OUP, 2005)(ISBN 0199246505)(361s)_GL_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-bardsen-g-eitrheim-o-jansen-e-s-nymoen-r-the-econometrics-of-macroeconomic-modelling-oup-2005-isbn-0199246505-361s-gl

the econometrics of macroeconomic modelling
Other Advanced Texts in Econometrics
ARCH: Selected Readings
Edited by Robert F. Engle
Asymptotic Theory for Integrated Processes
By H. Peter Boswijk
Bayesian Inference in Dynamic Econometric Models
By Luc Bauwens, Michel Lubrano, and Jean-François Richard
Co-integration, Error Correction, and the Econometric Analysis of Non-Stationary Data
By Anindya Banerjee, Juan J. Dolado, John W. Galbraith, and David Hendry
Dynamic Econometrics
By David F. Hendry
Finite Sample Econometrics
By Aman Ullah
Generalized Method of Moments
By Alastair Hall
Likelihood-Based Inference in Cointegrated Vector Autoregressive Models
By Søren Johansen
Long-Run Econometric Relationships: Readings in Cointegration
Edited by R. F. Engle and C. W. J. Granger
Micro-Econometrics for Policy, Program, and Treatment Eﬀect
By Myoung-jae Lee
Modelling Economic Series: Readings in Econometric Methodology
Edited by C. W. J. Granger
Modelling Non-Linear Economic Relationships
By Clive W. J. Granger and Timo Teräsvirta
Modelling Seasonality
Edited by S. Hylleberg
Non-Stationary Times Series Analysis and Cointegration
Edited by Colin P. Hargeaves
Outlier Robust Analysis of Economic Time Series
By André Lucas, Philip Hans Franses, and Dick van Dijk
Panel Data Econometrics
By Manuel Arellano
Periodicity and Stochastic Trends in Economic Time Series
By Philip Hans Franses
Progressive Modelling: Non-nested Testing and Encompassing
Edited by Massimiliano Marcellino and Grayham E. Mizon
Readings in Unobserved Components
Edited by Andrew Harvey and Tommaso Proietti
Stochastic Limit Theory: An Introduction for Econometricians
By James Davidson
Stochastic Volatility
Edited by Neil Shephard
Testing Exogeneity
Edited by Neil R. Ericsson and John S. Irons
The Econometrics of Macroeconomic Modelling
By Gunnar Bårdsen, Øyvind Eitrheim, Eilev S. Jansen, and Ragnar Nymoen
Time Series with Long Memory
Edited by Peter M. Robinson
Time-Series-Based Econometrics: Unit Roots and Co-integrations
By Michio Hatanaka
Workbook on Cointegration
By Peter Reinhard Hansen and Søren Johansen
  The Econometrics of
Macroeconomic Modelling

      GUNNAR BÅRDSEN
      ØYVIND EITRHEIM
       EILEV S. JANSEN
            AND
      RAGNAR NYMOEN




        1
                                3
                    Great Clarendon Street, Oxford ox2 6dp
      Oxford University Press is a department of the University of Oxford.
   It furthers the University’s objective of excellence in research, scholarship,
                    and education by publishing worldwide in
                            Oxford New York
           Auckland Cape Town Dar es Salaam Hong Kong Karachi
           Kuala Lumpur Madrid Melbourne Mexico City Nairobi
                    New Delhi Shanghai Taipei Toronto
                               With oﬃces in
        Argentina Austria Brazil Chile Czech Republic France Greece
        Guatemala Hungary Italy Japan Poland Portugal Singapore
         South Korea Switzerland Thailand Turkey Ukraine Vietnam
          Oxford is a registered trade mark of Oxford University Press
                    in the UK and in certain other countries
                        Published in the United States
                   by Oxford University Press Inc., New York

c Gunnar Bårdsen, Øyvind Eitrheim, Eilev S. Jansen, and Ragnar Nymoen 2005
               The moral rights of the authors have been asserted
                Database right Oxford University Press (maker)
                               First published 2005
        All rights reserved. No part of this publication may be reproduced,
    stored in a retrieval system, or transmitted, in any form or by any means,
        without the prior permission in writing of Oxford University Press,
  or as expressly permitted by law, or under terms agreed with the appropriate
       reprographics rights organization. Enquiries concerning reproduction
     outside the scope of the above should be sent to the Rights Department,
                    Oxford University Press, at the address above
         You must not circulate this book in any other binding or cover
           and you must impose this same condition on any acquirer
                British Library Cataloguing in Publication Data
                                 Data available
              Library of Congress Cataloging in Publication Data
                                Data available
         Typeset by Newgen Imaging Systems (P) Ltd., Chennai, India
                          Printed in Great Britain
                           on acid-free paper by
                         Biddles Ltd., King’s Lynn
                     ISBN 0-19-924649-1     978-0-19-9246496
                     ISBN 0-19-924650-5     978-0-19-9246502
                              3 5 7 9 10 8 6 4 2
E.S.J.: To Kristin
G.B.: To Tordis
R.N.: To Kjersti-Gro
Ø.E.: To Gro
This page intentionally left blank
                             Preface

At the European Meeting of the Econometric Society in Santiago de
Compostela in September 1999, Clive Granger asked if we would like to write
a book for the Advanced Texts in Econometrics series about the approach to
macroeconometric modelling we had adopted at the Research Department of
Norges Bank over the past 15 years. It has taken us 5 years to comply with his
request, and the result is found within these covers.
    This book is about building models by testing hypotheses of macroeconomic
theories–rather than by imposing theories untested. This is quite a crucial
distinction in macroeconometric model building. For an empirical model to be
useful, be it as a basis for economic policy decisions or for forecasting, it needs
to describe the relevant aspects of reality. Simpliﬁcation is the main virtue
of theoretical model building. In empirical modelling it might easily become
a vice. A theoretical model is often reduced to just those equations that are
required to make it work for the problem at hand. A good empirical model
should also be able to explain problems that might occur. Einstein’s advice that
‘everything should be as simple as possible . . . but no simpler’ is as relevant as
ever. If a model does not describe the data, it may just be too simple to be
used as a tool for macroeconomic decision making.
    The main target group for the book is researchers and practitioners of
macroeconomic model building in academia, private agencies and governmental
services. As a textbook it can be used in graduate courses on applied macro-
econometrics in general and—more speciﬁcally—in courses focusing on wage
and price formation in the open economy. In that context it is obvious that
a companion text on econometric methods and practice will be useful, and we
recommend Dynamic Econometrics by David F. Hendry (Hendry 1995a) and
Empirical Modeling of Economic Time Series by Neil R. Ericsson (Ericsson
2005) for this purpose.
    The work on the book has formed a joint research agenda for the authors
since its conception. Hence, we draw extensively on our published papers,
many of which was written with the demands of this book in mind: Section 1.4
and Chapter 2 are based on Jansen (2002); Sections 5.6 and 6.7.2 on Bårdsen
et al. (1998); Sections 6.1–6.3 on Kolsrud and Nymoen (1998) and Bårdsen and
Nymoen (2003); Section 6.8 on Holden and Nymoen (2002) and Nymoen and
Rødseth (2003); Chapter 7 on Bårdsen et al. (2004), Section 8.4 on Eitrheim
                                        vii
viii                                                                    Preface

(1998); Chapter 9 on Bårdsen et al. (2003); Section 11.2 on Eitrheim et al.
(1999, 2002a) and Section 11.3 on Bårdsen et al. (2002a).
    Also, we have used material from unpublished joint work with other authors.
In particular we would like to thank Q. Farooq Akram, Neil R. Ericsson and
Neva A. Kerbeshian for their permission to do so: Akram et al. (2003) underlies
Chapter 10 and we draw on Ericsson et al. (1997) in Section 4.4.
    The views are those of the authors and should not be interpreted to reﬂect
those of their respective institutions. Throughout the book our main econo-
metric tools have been the programs developed by Jurgen A. Doornik, David
F. Hendry and Hans-Martin Krolzig, i.e., the Oxmetrics package (provided by
Timberlake Consultants), in particular PcGive, PcFIML and PcGets. In Chap-
ter 7 and Sections 9.5 and 10.3 we have used Eviews (provided by Quantitative
Micro Software) and the simulations in Section 11.2.2 are carried out with
TROLL (provided by Intex Solutions).
    Data documentation, data series, programs and detailed information about
the software used are available from a homepage for the book:
       http://www.svt.ntnu.no/iso/macroectrics.
    We are indebted to many colleagues and friends for comments, discussions
and critisism to the various parts of the book. The editors of the series—Clive
W. J. Granger and Grayham E. Mizon—have given us advice and constant
encouragement. David F. Hendry and Bjørn E. Naug have read the entire
manuscript and given us extensive, constructive and very helpful comments.
In addition to those already acknowledged, grateful thanks goes to: Q. Farooq
Akram, Olav Bjerkholt, Neil R. Ericsson, Paul G. Fisher, Roger Hammersland,
Steinar Holden, Tore Anders Husebø, Kåre Johansen, Søren Johansen, Adrian
Pagan, Asbjørn Rødseth, Timo Teräsvirta, Anders Vredin, Kenneth F. Wallis,
and Fredrik Wulfsberg. Last, but not least, we are indebted to Jurgen A.
Doornik for his generosity with both time, patience, and eﬀort throughout the
project.
    While working on the book Gunnar Bårdsen has visited the School of
Economics and Finance, Queensland University of Technology (November
2000–January 2001) and Department of Economics, University of California
San Diego (March 2003), and Eilev S. Jansen has been a visitor at Department
of Economics, University of Oslo (August 2001–January 2003), DG Research,
European Central Bank, Frankfurt (February 2003–June 2003) and Department
of Economics, University of California San Diego (August 2003–July 2004).
The hospitality and excellent working conditions oﬀered at those institutions
are gratefully acknowledged.
    Finally, we are grateful to our respective employers—Norges Bank,
Norwegian University of Science and Technology, and University of Oslo—for
allocating resources and time for this project. That said, the time spent on the
book has often gone beyond normal hours, which is but one reason why this
book is dedicated to our wonderful and wise wives.
                                              Trondheim/Oslo, November 2004
        Gunnar Bårdsen, Øyvind Eitrheim, Eilev S. Jansen and Ragnar Nymoen
                        Contents

List of Figures                                         xv
List of Tables                                         xix
List of Abbreviations                                  xxi

1 Introduction                                          1
  1.1 The case for macroeconometric models              1
  1.2 Methodological issues (Chapter 2)                 4
  1.3 The supply-side and wage- and price-setting
       (Chapters 3–8)                                    7
  1.4 The transmission mechanism (Chapters 9 and 10)    11
  1.5 Forecast properties (Chapter 11)                  15

2 Methodological issues of large-scale macromodels     17
  2.1 Introduction: small vs. large models             17
  2.2 The roles of statistics and economic theory
      in macroeconometrics                              20
      2.2.1 The inﬂux of statistics into economics      20
      2.2.2 Role of economic theory in
              macroeconometrics                         22
  2.3 Identifying partial structure in submodels        24
      2.3.1 The theory of reduction                     24
      2.3.2 Congruence                                  26
  2.4 An example: modelling the household sector        29
      2.4.1 The aggregate consumption function          30
      2.4.2 Rival models                                31
  2.5 Is modelling subsystems and combining them to
      a global model a viable procedure?                32

3 Inﬂation in open economies: the main-course model    35
  3.1 Introduction                                     35
  3.2 Cointegration                                    37
      3.2.1 Causality                                  41

                                 ix
x                                                                     Contents

        3.2.2   Steady-state growth                                        42
        3.2.3   Early empiricism                                           42
        3.2.4   Summary                                                    43

4 The Phillips curve                                                       45
  4.1 Introduction                                                         45
      4.1.1 Lineages of the Phillips curve                                 46
  4.2 Cointegration, causality, and the Phillips curve natural rate        47
  4.3 Is the Phillips curve consistent with persistent
      changes in unemployment?                                             52
  4.4 Estimating the uncertainty of the Phillips curve NAIRU               54
  4.5 Inversion and the Lucas critique                                     56
      4.5.1 Inversion                                                      56
      4.5.2 Lucas critique                                                 57
      4.5.3 Model-based vs. data-based expectations                        59
      4.5.4 Testing the Lucas critique                                     61
  4.6 An empirical open economy Phillips curve system                      62
      4.6.1 Summary                                                        72

5 Wage bargaining and price-setting                                        73
  5.1 Introduction                                                         73
  5.2 Wage bargaining and monopolistic competition                         74
  5.3 The wage curve NAIRU                                                 78
  5.4 Cointegration and identiﬁcation                                      79
  5.5 Cointegration and Norwegian manufacturing wages                      82
  5.6 Aggregate wages and prices: UK quarterly data                        86
  5.7 Summary                                                              87

6 Wage–price dynamics                                                      89
  6.1 Introduction                                                         89
  6.2 Nominal rigidity and equilibrium correction                          90
  6.3 Stability and steady state                                           92
  6.4 The stable solution of the conditional wage–price system             95
      6.4.1 Cointegration, long-run multipliers,
              and the steady state                                         97
      6.4.2 Nominal rigidity despite dynamic homogeneity                   98
      6.4.3 An important unstable solution: the ‘no wedge’ case            99
      6.4.4 A main-course interpretation                                  100
  6.5 Comparison with the wage-curve NAIRU                                102
  6.6 Comparison with the wage Phillips curve NAIRU                       104
  6.7 Do estimated wage–price models support the NAIRU
      view of equilibrium unemployment?                                   105
      6.7.1 Empirical wage equations                                      105
Contents                                                      xi

       6.7.2  Aggregate wage–price dynamics in
              the United Kingdom                             107
   6.8 Econometric evaluation of Nordic structural
        employment estimates                                 108
        6.8.1 The NAWRU                                      109
        6.8.2 Do NAWRU ﬂuctuations match up with
              structural changes in wage formation?          111
        6.8.3 Summary of time varying NAIRUs in
              the Nordic countries                           116
   6.9 Beyond the natural rate doctrine:
        unemployment–inﬂation dynamics                       117
        6.9.1 A complete system                              117
        6.9.2 Wage–price dynamics: Norwegian manufacturing   119
   6.10 Summary                                              123

7 The New Keynesian Phillips curve                           127
  7.1 Introduction                                           127
  7.2 The NPCM deﬁned                                        129
  7.3 NPCM as a system                                       130
  7.4 Sensitivity analysis                                   134
  7.5 Testing the speciﬁcation                               136
      7.5.1 An encompassing representation                   136
      7.5.2 Testing against richer dynamics                  137
      7.5.3 Evaluation of the system                         139
      7.5.4 Testing the encompassing implications            141
      7.5.5 The NPCM in Norway                               144
  7.6 Conclusions                                            145

8 Money and inﬂation                                         147
  8.1 Introduction                                           147
  8.2 Models of money demand                                 148
      8.2.1 The velocity of circulation                      148
      8.2.2 Dynamic models                                   150
      8.2.3 Inverted money demand equations                  150
  8.3 Monetary analysis of Euro-area data                    151
      8.3.1 Money demand in the Euro area 1980–97            151
      8.3.2 Inversion may lead to forecast failure           152
  8.4 Monetary analysis of Norwegian data                    155
      8.4.1 Money demand in Norway—revised and
             extended data                                   155
      8.4.2 Monetary eﬀects in the inﬂation equation?        159
  8.5 Inﬂation models for the Euro area                      161
      8.5.1 The wage–price block of the Area Wide Model      162
      8.5.2 The Incomplete Competition Model                 163
xii                                                                    Contents

            8.5.3 The New Keynesian Phillips Curve Model                   163
            8.5.4 The P∗ -model of inﬂation                                164
      8.6   Empirical evidence from Euro-area data                         166
            8.6.1 The reduced form AWM inﬂation equation                   166
            8.6.2 The reduced form ICM inﬂation equation                   167
            8.6.3 The P∗ -model                                            169
            8.6.4 The New Keynesian Phillips curve                         174
            8.6.5 Evaluation of the inﬂation models’ properties            175
            8.6.6 Comparing the forecasting properties of
                  the models                                               178
            8.6.7 Summary of ﬁndings—Euro-area data                        181
      8.7   Empirical evidence for Norway                                  182
            8.7.1 The Incomplete Competition Model                         182
            8.7.2 The New Keynesian Phillips curve                         183
            8.7.3 Inﬂation equations derived from the P∗ -model            185
            8.7.4 Testing for neglected monetary eﬀects
                  on inﬂation                                              188
            8.7.5 Evaluation of inﬂation models’ properties                190
            8.7.6 Comparing the forecasting properties of the models       192
            8.7.7 Summary of the ﬁndings—Norway vs. Euro area              196

9     Transmission channels and model properties                           199
      9.1 Introduction                                                     199
      9.2 The wage–price model                                             202
          9.2.1 Modelling the steady state                                 202
          9.2.2 The dynamic wage–price model                               204
      9.3 Closing the model: marginal models for feedback variables        207
          9.3.1 The nominal exchange rate vt                               207
          9.3.2 Mainland GDP output yt                                     210
          9.3.3 Unemployment ut                                            210
          9.3.4 Productivity at                                            211
          9.3.5 Credit expansion crt                                       212
          9.3.6 Interest rates for government bonds RBOt and
                 bank loans RLt                                            213
      9.4 Testing exogeneity and invariance                                214
      9.5 Model performance                                                216
      9.6 Responses to a permanent shift in interest rates                 220
      9.7 Conclusions                                                      222

10 Evaluation of monetary policy rules                                     225
   10.1 Introduction                                                       225
   10.2 Four groups of interest rate rules                                 227
        10.2.1 Revisions of output data: a case for
               real-time variables?                                        229
Contents                                                           xiii

         10.2.2 Data input for interest rate rules                 230
         10.2.3 Ex post calculated interest rate rules             230
    10.3 Evaluation of interest rate rules                         231
         10.3.1 A new measure—RMSTEs                               231
         10.3.2 RMSTEs and their decomposition                     232
         10.3.3 Relative loss calculations                         237
         10.3.4 Welfare losses evaluated by response
                surface estimation                                 240
    10.4 Conclusions                                               243

11 Forecasting using econometric models                            245
   11.1 Introduction                                               245
   11.2 EqCMs vs. dVARs in macroeconometric forecasting            249
        11.2.1 Forecast errors of bivariate EqCMs and dVARs        250
        11.2.2 A large-scale EqCM model and four dVAR type
               forecasting systems based on diﬀerenced data        259
   11.3 Model speciﬁcation and forecast accuracy                   267
        11.3.1 Forecast errors of stylised inﬂation models         268
        11.3.2 Revisiting empirical models of Norwegian inﬂation   273
        11.3.3 Forecast comparisons                                276
   11.4 Summary and conclusions                                    279

Appendix                                                           281
   A.1 The Lucas critique                                          281
   A.2 Solving and estimating rational expectations models         282
       A.2.1 Repeated substitution                                 282
       A.2.2 Undetermined coeﬃcients                               285
       A.2.3 Factorization                                         288
       A.2.4 Estimation                                            290
       A.2.5 Does the MA(1) process prove that the forward
              solution applies?                                    292
   A.3 Calculation of interim multipliers in a linear dynamic
       model: a general exposition                                 292
       A.3.1 An example                                            295

Bibliography                                                       303

Author Index                                                       327

Subject Index                                                      333
This page intentionally left blank
                List of Figures


1.1    Interest rate channels in RIMINI                                  13
1.2    Exchange rate channels in RIMINI                                  14
3.1    The ‘wage corridor’ in the Norwegian model of inﬂation            39
4.1    Open economy Phillips curve dynamics and equilibrium              49
4.2    Recursive stability of ﬁnal open economy wage                     65
       Phillips curve model in equation (4.43)
4.3    Recursive instability of the inverted Phillips curve model        66
       (Lucas supply curve) in equation (4.43)
4.4    Sequence of estimated wage Phillips curve NAIRUs                  67
       (with ±2 estimated standard errors), and the actual rate of
       unemployment. Wald-type conﬁdence regions
4.5    Dynamic simulation of the Phillips curve model in Table 4.2.      71
       Panel (a–d) Actual and simulated values (dotted line).
       Panel (e–f): multipliers of a one point increase in the
       rate of unemployment
5.1    Role of the degree of wage responsiveness to unemployment        77
5.2    Norwegian manufacturing wages, recursive cointegration           85
       results 1981–98
5.3    United Kingdom quarterly aggregate wages and prices, recursive    88
       cointegration results
6.1    Real wage and unemployment determination.                        104
       Static and dynamic equilibrium
6.2.   Actual rates of unemployment (U ) and NAWRUs for                 110
       the four Nordic countries
6.3    Recursive stability of Nordic wage equations                     114
6.4.   Unemployment and the Average Wage-Share rates                    116
       of Unemployment (AWSU)
6.5    Recursive estimation of the ﬁnal EqCM wage equation              122
6.6    Dynamic simulation of the EqCM model in Table 6.3                124

                                    xv
xvi                                                            List of Figures

 7.1    Phase diagram for the system for the case of                      132
        bp1 < 1, bp2 < 0, and bx1 = 0
 7.2    Rolling coeﬃcients ±2 standard errors of the NPCM,                145
        estimated on Norwegian data ending in 1993(4)–2000(4)
 8.1    Estimation of money demand in the Euro area,                      153
        1985(4)–1997(2)
 8.2    Inverted money demand equation for the Euro area                  154
        1985(4)–1992(4)
 8.3    Post-sample forecast failure when the inverted                    155
        money demand equation for the Euro area is used to
        forecast inﬂation 1993(1) to 1998(4)
 8.4    Instabilities in the inverted money demand equation for the       155
        Euro area after 1993
 8.5    Money demand (1969(1) – 2001(1))—revised (solid line) and         157
        old (dotted line) observations of the percentage growth in
        M2 over four quarters
 8.6    Recursive estimates for the coeﬃcients of the (reduced form)      168
        AWM inﬂation equation
 8.7    Recursive coeﬃcient estimates of the reduced form ICM             169
 8.8    The M3 data series plotted against the shorter M3 series          170
        obtained from Gerlach and Svensson (2003), which in
        turn is based on data from Coenen and Vega (2001).
        Quarterly growth rate
 8.9    The upper graphs show the GDP deﬂator and                         170
        the equilibrium price level (p∗ ), whereas the lower graph is
        their diﬀerence, that is, the price gap, used in the P*-model
 8.10   The upper graphs show real money and the equilibrium              171
        real money, whereas the lower graph is their diﬀerence,
        that is, the real money gap, used in the P*-model
 8.11   The upper ﬁgure plots annual inﬂation against                     171
        two alternative measures of the reference path for inﬂation.
        The lower graphs show the corresponding
        D4pgap variables in the same cases
 8.12   The upper ﬁgure shows actual annual money growth                  172
        plotted against the alternative measures of the reference path
        for money growth. The lower graphs show the corresponding
        D4mgap variables in the same cases
 8.13   Recursive coeﬃcient estimates of the P*-model based on the        174
        broad information set
 8.14   Recursive coeﬃcient estimates of the hybrid NPC                   176
 8.15   Forecasts of quarterly inﬂation in the Euro area with             179
        ﬁve diﬀerent models: over the period 1995(4)–2000(3)
 8.16   Price and real money gaps. Norwegian data                         185
 8.17   Inﬂation objective and gap. Norwegian data                        186
List of Figures                                                               xvii

 8.18   Money growth objective and gap. Norwegian data                        187
 8.19   Forecasting annual CPI inﬂation in Norway, ∆4 pt , over               196
        the period 1991(1)–2000(4) using ﬁve diﬀerent models
 9.1    Model-based inﬂation forecasts                                        200
 9.2    Identiﬁed cointegration vectors. Recursively estimated                204
        parameters and the χ2 (8) test of the overidentifying
        restrictions of the long-run system in Table 9.1
 9.3    Recursive stability tests for the wage–price model                    206
 9.4    The equilibrium-correction terms of the exchange rate and             208
        the aggregate demand equations
 9.5    Marginal equations: recursive residuals and                           209
        ±2 standard errors (σ)
 9.6    Interest rate and exchange rate channels                              217
 9.7    Tracking performance under dynamic simulation                         218
        1984(1)–2001(1)
 9.8    Dynamic forecasts over 1999(1)–2001(1)                                220
 9.9    Accumulated responses of some important variables to a                221
        1 per cent permanent increase in the interest rate RSt
10.1    Old and revised data for output in the mainland economy and           230
        corresponding Taylor-rates, 1990(1)–2000(4)
10.2    Data series for the variables which are used in the                   231
        Taylor rules, ‘real time’-rules and open economy-rules
        respectively, over the period 1995(1)–2000(4)
10.3    Ex post calculations of the implied interest rates from               232
        diﬀerent interest rate rules over the period 1995(1)–2000(4)
10.4    Counterfactual simulations 1995(1)–2000(4) for each of the            236
        interest rate rules in Table 10.1. The variables are measured
        as deviations from the baseline scenario
10.5    Counterfactual simulations 1995(1)–2000(4). (a) Loss function         239
        evaluation based on relative sdev (relative to the baseline
        scenario). (b) Loss function evaluation based on relative
        RMSTE (relative to the baseline scenario)
10.6    The Taylor curve                                                      241
10.7    Estimated weights ω̃π , ω̃y , ω̃r as a function of λ, the weight of   243
        output growth in the loss function
11.1    The period 1992(1)–1994(4) forecasts and actual values for            263
        the interest rate level (RLB), housing price growth (∆4 ph),
        the rate of inﬂation (∆4 cpi), and the level of
        unemployment (UTOT)
11.2    The period 1993(1)–1994(4) forecasts and actual values for            264
        the interest rate level (RLB), housing price growth (∆4 ph),
        the rate of inﬂation (∆4 cpi), and the level of
        unemployment (UTOT)
xviii                                                          List of Figures

11.3    The period 1994(1)–1994(4) forecasts and actual values for        265
        the interest rate level (RLB), housing price growth (∆4 ph),
        the rate of inﬂation (∆4 cpi), and the level of
        unemployment (UTOT)
11.4    Recursive stability tests for the PCM                             275
11.5    The 8-step dynamic forecasts for the period 1995(1)–1996(4),      276
        with 95% prediction bands of the ICM
11.6    The 8-step dynamic forecasts for the period 1995(1)–1996(4),      277
        with 95% prediction bands of the PCM
11.7    Comparing the annual inﬂation forecasts of the two models         278
                 List of Tables

4.1   Conﬁdence intervals for the Norwegian wage                    68
      Phillips curve NAIRU
4.2   FIML results for a Norwegian Phillips curve model             70
5.1   Diagnostics for a ﬁrst-order conditional VAR for              83
      Norwegian manufacturing 1964–98
5.2   Cointegration analysis, Norwegian manufacturing wages         83
      1964–98
5.3   Cointegrating wage- and price-setting schedules in the        87
      United Kingdom
6.1   The model for the United Kingdom                             108
6.2   Nordic manufacturing wage equations                          112
6.3   FIML results for a model of Norwegian manufacturing wages,   121
      inﬂation, and total rate of unemployment
7.1   FIML results for the NPCM system for the Euro area           140
      1972(2)–1998(1)
7.2   FIML results for a conventional Phillips curve for           141
      the Euro area 1972(2)–1998(1)
8.1   Empirical model for ∆(m − p)t in the Euro area based on      152
      Coenen and Vega (2001)
8.2   Inverted model for ∆pt in the Euro area based on             154
      Coenen and Vega (2001)
8.3   Re-estimating the money demand model for Norway in           158
      Eitrheim (1998) on revised and extended data
      (seven years of new observations)
8.4   Improved model for annual money growth, ∆4 m, for Norway     159
8.5   The Mdlnv model of inﬂation, including variables             160
      (in levels) from the money demand relationship
8.6   Mis-speciﬁcation tests                                       176
8.7   Encompassing tests with AWM as incumbent model               177
8.8   Encompassing tests with ICM as incumbent model               177
8.9   Forecasting the quarterly rate of inﬂation. RMSFE            180
      and its decomposition: bias, standard deviations, and
      RMSFE of diﬀerent inﬂation models, relative to the AWM

                                  xix
xx                                                            List of Tables

 8.10   Forecast encompassing tests over 36 and 20 periods,             180
        ending in 2000(3)
 8.11   Forecast encompassing tests over 36 and 20 periods,             181
        ending in 2000(3)
 8.12   Annual CPI inﬂation in Norway ∆4 pt . The reduced               183
        form ICM model
 8.13   Estimation of the hybrid NPCM of inﬂation on                    184
        Norwegian data
 8.14   The P*-model for annual CPI inﬂation, ∆4 pt                     187
 8.15   The enhanced P*-model (P*enh) for annual CPI inﬂation, ∆4 pt    188
 8.16   Omitted variable test (OVT) for neglected monetary eﬀects       189
        on inﬂation in the ‘reduced form’ ICM price equation
 8.17   Mis-speciﬁcation tests                                          190
 8.18   Encompassing tests with ICM as incumbent model (M1 )            191
 8.19   Forecasting annual and quarterly rates of inﬂation. RMSFE       193
        and its decomposition. Bias, standard deviations, and RMSFE
        of diﬀerent inﬂation models, relative to the ICM
 8.20   Forecast encompassing tests based on forecasting annual         194
        inﬂation rates over 40, 24, and 12 periods ending in 2004(4).
        The ICM model is used as benchmark (M1 )
 8.21   Forecast encompassing tests based on forecasting quarterly      195
        inﬂation rates over 40, 24, and 12 periods ending in 2004(4).
        The ICM model is used as benchmark (M1 )
 9.1    The estimated steady-state equations                            203
 9.2    Diagnostics for the unrestricted I(0) wage–price                205
        system and the model
 9.3    Testing weak exogeneity                                         215
 9.4    Testing invariance                                              216
10.1    Interest rate rules used in the counterfactual simulations,     228
        as deﬁned in equation (10.1)
10.2    Counterfactual simulations 1995(1)–2000(4)                      234
10.3    Counterfactual simulations 1995(1)–2000(4). Loss function       238
        evaluation based on relative sdev (upper half) and relative
        RMSTE (lower half)–relative to the baseline scenario
11.1    The models used in the forecasts                                262
11 2    Results of 43 RMSFE forecast contests                           266
11.3    Diagnostic tests for the dynamic ICM                            274
11.4    Diagnostic tests for the PCM                                    274
    List of Abbreviations


2SLS    two-stage least squares
AR      autoregressive process
ARCH    autoregressive conditional heteroscedasticity
ARIMA   autoregressive integrated moving-average process
ARMA    autoregressive moving-average process
AWM     Area Wide Model
AWSU    average wage-share rate of unemployment
B&N     Brodin and Nymoen (1992)
CF      consumption function
CIRU    constant rate of inﬂation rate of unemployment
CPI     consumer price index
DGP     data generating process
DSGE    dynamic stochastic general equilibrium
dVAR    vector autoregressive model in diﬀerences
EE      Euler equation
EqCM    equilibrium-correction model
FIML    full information maximum likelihood
GDP     gross domestic product
GG      Galı́ and Gertler (1999)
GGL     Galı́, Gertler, and López-Salido (2001)
GMM     generalised method of moments
GUM     general unrestricted model
HP      Hodrick-Prescott (ﬁlter)
ICM     Incomplete Competition Model
LIML    limited information maximum liklihood
MMSFE   minimum mean squared forecast error
MSFE    mean squared forecast error
NAIRU   non-accelerating inﬂation rate of unemployment
NAWRU   non-accelerating wage rate of unemployment,

                                 xxi
xxii                                              List of Abbreviations

NPC     New Keynesian Phillips curve
NPCM    New Keynesian Phillips curve model
OLS     ordinary least squares
PCM     Phillips curve model
pGUM    parsimonious general unrestricted model
PPP     purchasing power parity
QNA     quarterly national accounts
RMSFE   root mean squared forecast error
RMSTE   root mean squared target error
sdev    standard deviaton
SEM     simultaneous equation model
VAR     vector autoregressive model
VEqCM   vector equilibrium-correction model
                                          1

                       Introduction

      Macroeconometric modelling is one of the ‘big’ projects in economics,
      dating back to Tinbergen and Frisch. This introductory chapter ﬁrst
      discusses the state of the project. We advocate the view that, despite some
      noteworthy setbacks, the development towards more widespread use of
      econometric models, is going to continue. However, models change as
      research progresses, as the economy develops, and as the demand and
      needs of model users change. We point to evidence of this kind of adapt-
      ive changes going on in current day macroeconometric models. We then
      discuss the aspects of the macroeconometric modelling project that we have
      contributed to in our own research, and where in the book the diﬀerent
      dimensions and issues are presented.



1.1      The case for macroeconometric models
Macroeconometric models, in many ways the ﬂagships of the economics profes-
sion in the 1960s, came under increasing attack from both theoretical economics
and practitioners in the late 1970s. The onslaught came on a wide front: lack of
microeconomic theoretical foundations, ad hoc modelling of expectations, lack
of identiﬁcation, neglect of dynamics and non-stationarity, and poor forecasting
properties. As a result, by the start of the 1990s, the status of macroeconomet-
ric models had declined markedly, and had fallen completely out of (and with!)
academic economics. Speciﬁcally, it has become increasingly rare that university
programmes in economics give courses in large-scale empirical macroeconomic
modelling.
    Nevertheless, unlike the dinosaurs which they often have been likened to,
macroeconometric models never completely disappeared from the scene. More-
over, if we use the term econometric model in a broad sense, it is fair to say
that such models continue to play a role in economic policy. Model building and
maintenance, and model based economic analyses, continue to be an important


                                          1
2                                                                   Introduction

part of many economists’ working week, either as a producer (e.g. member
of modelling staﬀ) or as a consumer (e.g. chief economists and consultants).
Thus, the discipline of macroeconometric modelling has been able to adapt
to changing demands, both with regards to what kind of problems users
expect that models can help them answer, and with regard to quality and
reliability.
    Consider, for example, the evolution of Norwegian macroeconometric
models (parallel developments no doubt have taken place in other countries):
the models of the 1960s were designed to meet the demands of govern-
ments which attempted to run the economy through regulated markets. Today’s
models have adapted to a situation with liberalised ﬁnancial and credit markets.
In fact, the process of deregulation has resulted in an increased demand for
econometric analysis and forecasting.
    The recent change in monetary policy towards inﬂation targeting provides
an example of how political and institutional changes might aﬀect econometric
modelling. The origins of inﬂation targeting seem to be found in the practical
and operational issues which the governments of small open economies found
themselves with after installing ﬂoating exchange rate regimes. As an altern-
ative to the targeting of monetary aggregates, several countries (New Zealand,
Canada, United Kingdom, and Sweden were ﬁrst) opted for inﬂation targeting,
using the interest rate as the policy instrument. In the literature which followed
in the wake of the change in central bank practice (see, for example, Svensson
2000), it was made clear that under inﬂation targeting, the central bank’s
conditional inﬂation forecast becomes the operational target of monetary policy.
At the back of the whole idea of inﬂation targeting is therefore the assumption
that the inﬂation forecast is signiﬁcantly aﬀected by adjustment of the interest
rate ‘today’. It follows that the monetary authority’s inﬂation forecasts have to
be rooted in a model (explicit or not) of the transmission mechanism between
the interest rate and inﬂation.
    This characterisation of inﬂation targeting leads to a set of interesting
questions, around which a lively debate evolves. For example: how should the
size and structure of the model be decided, and its parameters quantiﬁed,
that is, by theoretical design, by estimation using historical data or by some
method of calibration—or perhaps by emulating the views of the ‘monetary
policy committee’ (since at the end of the day the beliefs of the policy makers
matter). A second set of issues follows from having the forecasted rate of inﬂa-
tion (rather than the current or historical rate) as the target. As emphasised by,
for example, Clements and Hendry (1995b), modelling and forecasting are dis-
tinct processes (see also Chapter 11). In particular non-stationarities which are
not removed by diﬀerencing or cointegration impinge on macroeconomic data.
One consequence is that even well-speciﬁed policy models produce intermittent
forecast failure, by which we in this book mean a signiﬁcant deterioration in
forecast quality relative to within sample tracking performance (see Clements
and Hendry 1999b: ch. 2). Both theory and practical experience tell us that
1.1 The case for macroeconometric models                                        3

the source of forecast failure is usually to be found in shifts in the means of
equilibrium relationships and in the growth rates of exogenous variables. Neither
of these factors aﬀect a model’s usefulness in policy analysis, yet either of them
can destroy the model’s forecasts, unless the model user is able to correct them
(e.g. by intercept corrections).
    The integration of modelling, policy analysis, and forecasting in the
mandate given to an inﬂation targeting central bank raises some important
issues. For example, it must be decided to what extent the policy model should
aﬀect the forecasts, and how forecasts are best robustiﬁed in order to reduce
the hazards of forecast-based interest rate setting.
    Inﬂation targeting has already spurred a debate about the role of econo-
metric speciﬁcation and evaluation of models—that is, not only as an aid in
the preparation of inﬂation forecasts, but also as a way of testing, quantifying,
and elucidating the importance of transmission mechanisms in the inﬂationary
process. In this way, inﬂation targeting actually moves the discussion about
the quality and usefulness of econometric methodology and practice into the
limelight of the economic policy debate (see Bårdsen et al. 2003).
    However, even though a continued and even increasing demand for macro-
econometric analysis is encouraging for the activity of macroeconometric
modelling, it cannot survive as a discipline within economics unless the
models reﬂect the developments in academic research and teaching. But, also
in this respect macroeconometric modelling has fared much better than many
of its critics seem to acknowledge. Already by the end of the 1980s, European
macroeconometric models had a much better representation of price- and wage-
setting (i.e. the supply-side) than before. There was also marked improvement
in the modelling of the transmission mechanism between the real and ﬁnancial
sectors of the economy (see, for example, Wallis 1989). In the course of the
last 20 years of the last century macroeconometric models also took advantage
of the methodological and conceptual advances within time-series economet-
rics. Use of dynamic behavioural equations are now the rule rather than the
exception. Extensive testing of mis-speciﬁcation is usually performed. The dan-
gers of spurious regressions (see Granger and Newbold 1974) have been reduced
as a consequence of the adoption of new inference procedures for integrated
variables. No doubt, an important factor behind these advances has been the
development of (often research based) software packages for estimation, model
evaluation, and simulation.
    In an insightful paper about the trends and problems facing econometric
models, the Norwegian economist Leif Johansen stated that the trendlike
development in the direction of more widespread use of econometric models
will hardly be reversed completely (see Johansen 1982). But Johansen also
noted that both the models’ own conspicuous failures from time to time, and
certain political developments, will inﬂict breaks or temporary setbacks in the
trend. However, we think that we are in line with Johansen’s views when
we suggest that a close interchange between academic economics, theoretical
4                                                                   Introduction

econometrics, and software development are key elements that are neces-
sary to sustain macroeconomic modelling. The present volume is meant as a
contribution to macroeconomic modelling along these lines.
   Four themes in particular are emphasised in this book:

(1) methodological issues of macroeconometric models;
(2) the supply-side of macroeconometric models;
(3) the transmission mechanism;
(4) the forecasting properties of macroeconometric models.

   In the following, we review the main issues connected to these themes, and
explain where they are covered in the book.


1.2     Methodological issues (Chapter 2)
The speciﬁcation of a macroeconomic model rests in both economic theory
and the econometric analysis of historical data. Diﬀerent model builders place
diﬀerent weight on these two inputs to model speciﬁcation, which is one reason
why models diﬀer and controversies remain, cf. the report on macroeconomic
modelling and forecasting at the Bank of England (Pagan 2003).
    The balance between theoretical consistency and empirical relevance is
also of interest for model users, model owners, and research funding institutions.
In the case where the model is used in a policy context, model-users may have a
tendency to put relatively more weight on ‘closeness to theory’, on the grounds
that theory consistency ensures model properties (e.g. impulse responses of
dynamic multipliers) which are easy to understand and to communicate to the
general public. While a high degree of theory consistency is desirable in our
discipline, it does not by itself imply unique models. This is basically because,
in macroeconomics, no universally accepted theory exists. Thus, there is little
reason to renounce the requirement that empirical modelling and confrontation
of theories with the data are essential ingredients in the process of specifying
a serious macro model. In particular, care must be taken to avoid that theory
consistency is used rhetorically to impute speciﬁc and controversial properties
on the models that inﬂuence policy-making.
    Recently, Pagan (2003) claimed that ‘state of the art modelling’ in economics
would entail a dynamic stochastic general equilibrium (DSGE) model, since
that would continue the trend taken by macroeconomic modelling in academia
into the realm of policy-oriented modelling. However, despite its theory under-
pinnings, it is unclear if DSGE models have structural properties in the sense
of being invariant over time, across regimes and with respect to additional
information (e.g. the information embedded in existing studies, see Chapter 7).
    A failure on any of these three requirements means that the model is
non-structural according to the wider understanding of ‘structure’ adopted
1.2 Methodological issues                                                      5

in this book: a structural representation of an economy embodies not only
theory content, but explanatory power, stability, and robustness to regime
shifts (see Hendry (1995a) and Section 2.3.2 for an example). Since struc-
tural representation is a many-faceted model feature, it cannot be uniquely
identiﬁed with closeness to theory. Instead, theory-driven models are prone
to well-known econometric problems, which may signal mis-speciﬁcation with
damaging implications for policy recommendations (see Nymoen 2002).
    The approach advocated in this book is therefore a more balanced view.
Although theory is a necessary ingredient in the modelling process, empir-
ical determination is always needed to specify the ‘ﬁnal model’. Moreover,
as noted, since there are many diﬀerent theoretical approaches already avail-
able in macroeconomics, DSGE representing only one, there is always the
question about which theory to use. In our view, economists have been too
ready to accept theoretical elegance and rigour as a basis for macroeconomic
relationships, even though the underlying assumptions are unrealistic and
the representative agent a dubious construct at the macro level. Our approach
is instead to favour models that are based on realistic assumptions which are at
least consistent with such well-documented phenomena as, for example, invol-
untary unemployment, a non-unique ‘natural rate’, and the role of fairness in
wage-setting. Such theories belong to behavioural macroeconomics as deﬁned
by Akerlof (2002). In Chapters 3–7 of this book, one recurrent theme is to
gauge the credibility and usefulness of rival theories of wage- and price-setting
from that perspective.
    Many macroeconometric models are rather large systems of equations
constructed piece-by-piece, for example, equation-by-equation, or, at best,
sector-by-sector (the consumption expenditure system, the module for labour
demand, and investment, etc.). Thus, there is no way around the implication
that the models’ overall properties only can be known when the construc-
tion is complete. The literature on macroeconometric modelling has produced
methods of evaluation of the system of equations as a whole (see, for example,
Klein et al. 1999).
    Nevertheless, the piecewise construction of macroeconometric models is the
source of much of the criticism levied against them. First, the speciﬁcation
process may become ineﬃcient, as a seemingly valid single equation or module
may either lead to unexpected or unwanted model properties. This point is
related to the critique of structural econometric models in Sims (1980), where
the author argues that such models can only be identiﬁed if one imposes ‘incred-
ible’ identifying restrictions to the system of equations (see Section 2.2.2).
Second, the statistical assumptions underlying single equation analysis may
be invalidated when the equation is grafted into the full model. The most
common examples are probably that the single equation estimation method is
seen to become inconsistent with the statistical model implied by the full set
of equations, or that the equation is too simple in the light of the whole model
(e.g. omits a variable). These concerns are real, but they may also be seen as
6                                                                           Introduction

unavoidable costs of formulating models that go beyond a handful of equations,
and which must therefore be balanced against the beneﬁts of a more detailed
modelling of the functional relationships of the macro economy. Chapter 2 dis-
cusses operational strategies that promise to reduce the cost of piece-by-piece
model speciﬁcation.
     In Section 1.4, we brieﬂy outline the transmission mechanism as represented
in the medium scale macroeconometric model RIMINI (an acronym for a model
for the Real economy and Income accounts—a MINI version—see Section 1.4),1
which illustrates the complexity and interdependencies in a realistic macro-
econometric model and also why one has to make sense out of bits and pieces
rather than handling a complete model. The modelling of subsystems implies
making simpliﬁcations of the joint distribution of all observable variables in
the model through sequential conditioning and marginalisations, as discussed
in Section 2.3.
     The methodological approach of sequential subsector modelling is high-
lighted by means of two case studies. First, the strategy of sequential simpli-
ﬁcation is illustrated for the household sector in RIMINI, see Section 2.4.
The empirical consumption function we derive has been stable for more than
a decade. Thus, it is of particular interest to compare it with rival mod-
els in the literature, as we do in Section 2.4.2. Second, in Chapter 9 we
describe a stepwise procedure for modelling wages and prices. This is an exer-
cise that includes all ingredients regarded as important for establishing an
econometrically relevant submodel. In this case we are in fact entertaining
two models: one core model for wage and price determination, where we
condition on a number of explanatory variables and a second model, which
is a small aggregated econometric model for the entire economy. Although
diﬀerent, the embedding model shares many properties of the full RIMINI
model.
     The credentials of the core model within the embedding aggregated model
can be seen as indirect evidence for the validity of the assumptions underlying
the use of the core model as part of the larger model, that is, RIMINI. The
small econometric model is, however, a model of interest in its own right. First,
it is small enough to be estimated as a simultaneous system of equations, and
the size makes it suitable for model developments and experiments that are
cumbersome, time-consuming, and in some cases impossible to carry out with
the full-blown RIMINI model. When we analyse the transmission mechanism
in the context of econometric inﬂation targeting in Chapter 9 and evaluate
diﬀerent monetary policy rules in Chapter 10, this is done by means of the
small econometric model, cf. Section 9.5.


  1 RIMINI has been used by the Central Bank of Norway for more than a decade to make

forecasts for the Norwegian economy 4–8 quarters ahead as part of the Inﬂation report of the
Bank; see Olsen and Wulfsberg (2001).
1.3 The supply-side and wage- and price-setting                                  7


1.3     The supply-side and wage- and
        price-setting (Chapters 3–8)
In the course of the 1980s and 1990s the supply-side of macroeconometric
models received increased attention, correcting the earlier overemphasis on the
demand-side of the economy. Although there are many facets of the supply-side,
for example, price-setting, labour demand, and investment in ﬁxed capital and
R&D, the main theoretical and methodological developments and controversies
have focused on wage- and price-setting.
    Arguably, the most important conceptual development in this area has
been the Phillips curve—the relationship between the rate of change in money
wages and the rate of unemployment (Phillips 1958)—and the ‘natural rate of
unemployment’ hypothesis (Phelps 1967 and Friedman 1968). Heuristically, the
natural rate hypothesis says that there is only one unemployment rate that can
be reconciled with nominal stability of the economy (constant rates of wage and
price inﬂation). Moreover, the natural rate equilibrium is asymptotically stable.
Thus the natural rate hypothesis contradicted the demand-driven macroecono-
metric models of its day, which implied that the rate of unemployment could be
kept at any (low) level by means of ﬁscal policy. A step towards reconciliation of
the conﬂicting views was made with the discovery that a constant (‘structural’)
natural rate is not necessarily inconsistent with a demand driven (‘Keyne-
sian’) model. The trick was to introduce an ‘expectations augmented’ Phillips
curve relationship into an IS-LM type model. The modiﬁed model left consid-
erable scope for ﬁscal policy in the short run, but due to the Phillips curve,
a long-term natural rate property was implied (see, for example, Calmfors
1977).
    However, a weak point of the synthesis between the natural rate and the
Keynesian models was that the supply-side equilibrating mechanisms were
left unspeciﬁed and open to interpretation. Thus, new questions came to the
forefront, like: How constant is the natural rate? Is the concept inextricably
linked to the assumption of perfect competition, or is it robust to more real-
istic assumptions about market forms and ﬁrm behaviour, such as monopolistic
competition? And what is the impact of bargaining between trade unions and
confederations over wages and work conditions, which in some countries has
given rise to a high degree of centralisation and coordination in wage-setting?
Consequently, academic economists have discussed the theoretical foundations
and investigated the logical, theoretical, and empirical status of the natural rate
hypothesis, as for example in the contributions of Layard et al. (1991, 1994),
Cross (1988, 1995), Staiger et al. (1997), and Fair (2000).
    In the current literature, the term ‘Non-Accelerating Inﬂation Rate of
Unemployment’, or NAIRU, is used as a synonym to the ‘natural rate of unem-
ployment’. Historically, the need for a new term, that is, NAIRU, arose because
the macroeconomic rhetoric of the natural rate suggested inevitability, which is
8                                                                      Introduction

something of a straitjacket since the long-run rate of unemployment is almost
certainly conditioned by socioeconomic factors, policy and institutions (see
for example, Layard et al. 1991 ch. 1.3).2 The acronym   ... NAIRU itself is some-
thing of a misnomer...since, taken literally, it implies p ≤ 0 where p is the log of
the price level and p is the third derivative with respect to time. However, as
a synonym for the natural rate it implies p̈ = 0, which would be constant rate
of inﬂation rate of unemployment (CIRU). We follow established practice and
use the natural rate—NAIRU—terminology in the following.
    There is little doubt that the natural rate counts as one of the most inﬂuen-
tial conceptual developments in the history of macroeconomics. Governments
and international organisations customarily refer to NAIRU calculations in
their discussions of employment and inﬂation prospects,3 and the existence of
a NAIRU consistent with a vertical long-run Phillips curve is a main element
in the rhetoric of modern monetary policy (see for example, King 1998).
    The 1980s saw a marked change in the consensus view on the model suit-
able for deriving NAIRU measures. There was a shift away from a Phillips
curve framework that allowed estimation of a natural rate NAIRU from a single
equation for the rate of change of wages (or prices). The modern approach com-
bined a negative relationship between the level of the real wage and the rate
of unemployment, dubbed the wage curve by Blanchﬂower and Oswald (1994),
with an equation representing ﬁrms’ price-setting. The wage curve, originally
pioneered by Sargan (1964), is consistent with a wide range of economic the-
ories (see Blanchard and Katz 1997), but its original impact among European
economists was due to the explicit treatment of union behaviour and imper-
fectly competitive product markets, pioneered by Layard and Nickell (1986).
In the same decade, time-series econometrics constituted itself as a separate
branch of econometrics, with its own methodological issues, controversies and
solutions, as explained in Chapter 2.
    It is interesting to note how early new econometric methodologies were
applied to wage–price modelling, for example, equilibrium-correction modelling,
the Lucas critique, cointegration, and dynamic modelling. Thus, wage forma-
tion became an area where economic theory and econometric methodology
intermingled fruitfully. In this chapter, we draw on these developments when we
discuss how the diﬀerent theoretical models of wage formation and price-setting
can be estimated and evaluated empirically.
    The move from the Phillips curve to a wage curve in the 1980s was, however,
mainly a European phenomenon. The Phillips curve held its ground well in the
United States (see Fuhrer 1995, Gordon 1997, and Blanchard and Katz 1999).
But also in Europe the case has been reopened. For example, Manning (1993)

  2 Cross (1995, p. 184) notes that an immutable and unchangeable natural rate was not

implied by Friedman (1968).
  3 Elmeskov and MacFarland (1993), Scarpetta (1996), and OECD (1997b: ch. 1) contain

examples.
1.3 The supply-side and wage- and price-setting                                   9

showed that a Phillips curve speciﬁcation was consistent with union wage-
setting, and that the Layard–Nickell wage equation was not identiﬁable. In
academia, the Phillips curve has been revived and plays a proliﬁc role in New
Keynesian macroeconomics and in the modern theory of monetary policy (see
Svensson 2000). The deﬁning characteristics of the New Keynesian Phillips
curve (NPC) are strict microeconomic foundations together with rational
expectations of ‘forward’ variables (see Clarida et al. 1999, Galı́ and Gertler
1999, and Galı́ et al. 2001).
    There is a long list of issues connected to the idea of a supply-side deter-
mined NAIRU, for example, the existence and estimation of such an entity,
and its eventual correspondence to a steady-state solution of a larger system
explaining wages, prices as well as real output and labour demand and supply.
However, at an operational level, the NAIRU concept is model dependent.
Thus, the NAIRU issues cannot be seen as separated from the wider ques-
tion of choosing a framework for modelling wage, price, and unemployment
dynamics in open economies. In the following chapters we therefore give an
appraisal of what we see as the most important macroeconomic models in this
area. We cover more than 40 years of theoretical development, starting with
the Norwegian (aka Scandinavian) model of inﬂation of the early 1960s, fol-
lowed by the Phillips curve models of the 1970s and ending up with the modern
incomplete competition model and the NPC.
    In reviewing the sequence of models, we ﬁnd examples of newer theories that
generalise on the older models that they supplant, as one would hope in any
ﬁeld of knowledge. However, just as often new theories seem to arise and become
fashionable because they, by way of specialisation, provide a clear answer on
issues that older theories were vague on. The underlying process at work here
may be that as society evolves, new issues enter the agenda of politicians and
their economic advisers. For example, the Norwegian model of inﬂation, though
rich in insight about how the rate of inﬂation can be stabilised (i.e. p̈ = 0), does
not count the adjustment of the rate of unemployment to its natural rate as
even a necessary requirement for p̈ = 0. Clearly, this view is conditioned by
a socioeconomic situation in which ‘full employment’ with moderate inﬂation
was seen as attainable and almost a ‘natural’ situation. In comparison, both
the Phelps/Friedman Phillips curve model of the natural rate, and the Layard–
Nickell NAIRU model specialise their answers to the same question, and take
for granted that it is necessary for p̈ = 0 that unemployment equals a natural
rate or NAIRU which is entirely determined by long-run supply factors.
    Just as the Scandinavian model’s vagueness about the equilibrating role
of unemployment must be understood in a historical context, it is quite pos-
sible that the natural rate thesis is a product of socioeconomic developments.
However, while relativism is an interesting way of understanding the origin and
scope of macroeconomic theories, we do not share Dasgupta’s (1985) extreme
relativistic stance, that is, that successive theories belong to diﬀerent epochs,
each deﬁned by their answers to a new set of issues, and that one cannot
speak of progress in economics. On the contrary, our position is that the older
10                                                                  Introduction

models of wage–price inﬂation and unemployment often represent insights that
remain of interest today.
     Chapter 3 starts with a reconstruction of the Norwegian model of inﬂation,
in terms of modern econometric concepts of cointegration and causality. Today
this model, which stems back to the 1960s, is little known outside Norway. Yet,
in its reconstructed forms, it is almost a time traveller, and in many respects
resembles the modern theory of wage formation with unions and price-setting
ﬁrms. In its time, the Norwegian model of inﬂation was viewed as a contender
to the Phillips curve, and in retrospect it is easy to see that the Phillips curve
won. However, the Phillips curve and the Norwegian model are in fact not
mutually exclusive. A conventional open economy version of the Phillips curve
can be incorporated into the Norwegian model, and in Chapter 4 we approach
the Phillips curve from that perspective. However, the bulk of the chapter con-
cerns issues which are quite independent of the connection between the Phillips
curve and the Norwegian model of inﬂation. As perhaps the ultimate example
of a consensus model in economics, the Phillips curve also became a focal point
for developments in both economic theory and in econometrics. In particular
we focus on the development of the natural rate doctrine, and on economet-
ric advances and controversies related to the stability of the Phillips curve
(the origin of the Lucas critique).
     In Chapter 6 we present a unifying framework for all of the three
main models, the Norwegian model, the Phillips curve and the Layard–Nickell
wage curve model. In that chapter, we also discuss at some length the NAIRU
doctrine: is it a straitjacket for macroeconomic modelling, or an essential
ingredient? Is it a truism, or can it be tested? What can be put in its place
if it is rejected? We give answers to all these questions, and the thrust of the
argument represents an intellectual rationale for macroeconometric modelling
of larger systems of equations.
     An important underlying assumption of Chapters 3–6 is that inﬂation and
unemployment follow causal or future-independent processes (see Brockwell and
Davies 1991 ch. 3), meaning that the roots of the characteristic polynomials
of the diﬀerence equations are inside the unit circle. This means that all the
diﬀerent economic models can be represented within the framework of linear dif-
ference equations with constant parameters. Thus the econometric framework
is the vector autoregressive model (VAR), and identiﬁes systems of equations
that encompass the VAR (see Hendry and Mizon 1993, Bårdsen and Fisher
1999). Non-stationarity is assumed to be of a kind that can be modelled away
by diﬀerencing, by establishing cointegrating relationships, or by inclusion of
deterministic dummy variables in the non-homogeneous part of the diﬀerence
equations.
     In Chapter 7, we discuss the NPC of Galı́ and Gertler (1999), where the
stationary solution for the rate of inﬂation involves leads (rather than lags)
of the non-modelled variables. However, non-causal stationary solutions could
also exist for the ‘older’ price–wage models in Chapters 3–6 if they are speciﬁed
with ‘forward looking’ variables (see Wren-Lewis and Moghadam 1994). Thus,
1.4 The transmission mechanism                                                      11

the discussion of testing issues related to forward vs. backward looking models
in Chapter 7 is relevant for a wider class of forward-looking models, not just
the NPC.
    The role of money in the inﬂation process is an old issue in macroeconomics,
yet money plays no essential part in the models appearing up to and including
Chapter 7. This reﬂects how all models, despite the very notable diﬀerences
existing between them, conform to the same overall view of inﬂation: namely
that inﬂation is best understood as a complex socioeconomic phenomenon
reﬂecting imbalances in product and labour markets, and generally the level
of conﬂict in society. This is inconsistent with, for example, a simple quantity
theory of inﬂation, but arguably not with having excess demand for money as
a source of inﬂation pressure. Chapter 8 uses that perspective to investigate
the relationship between money demand and supply, and inﬂation.
    Econometric analysis of wage, price, and unemployment data serve to
substantiate the discussion in this part of the book. An annual data set for
Norway is used throughout Chapters 4–6 to illustrate the application of three
main models (Phillips curve, wage curve, and wage price dynamics) to
a common data set. But frequently we also present analysis of data from
the other Nordic countries, as well as of quarterly data from the United King-
dom, the Euro area, and Norway.


1.4     The transmission mechanism
        (Chapters 9 and 10)
All macroeconometric models contain a quantitative picture of how changes
in nominal variables bring about real eﬀects, the so-called transmission mech-
anism. Sometimes representations of the transmission mechanism are the main
objective of the whole modelling exercise, as when central banks seek to under-
stand (and to convey to the public) how changes in the nominal interest rate
aﬀect real variables like the GDP growth rate and the rate of unemployment,
and through them, the rate of inﬂation. Clearly, the wage and price submodel
is one key element in the model of the transmission mechanism.
    In modern economies, the transmission mechanism can be seen as a complex
system where diﬀerent groups of agents interact through markets which are
often strongly interlinked, and an attractive feature of a macroeconomic model
is that it represents the diﬀerent linkages in a consistent framework. As an
example, we take a closer look at the transmission mechanism of the medium
term macroeconomic model, RIMINI.
    By Norwegian standards, RIMINI is an aggregated macroeconometric
model.4 The core consists of some 30 important stochastic equations, and there
are about 100 exogenous variables which must be projected by the forecaster.
Such projections involve judgements, and they are best made manually based
      4 See Bjerkholt (1998) for an account of the Norwegian modelling tradition.
12                                                                  Introduction

on information from a wide set of sources. The model should be run repeatedly
to check for consistency between the exogenous assumptions and the results
before one arrives at a baseline forecast. In this way the model serves as a tool
taking account of international business cycle development, government policy,
and market information, for example, forward market interest rates.
    The RIMINI is a fairly closed model in the sense that the most important
variables for the Norwegian economy are determined by the model, while the
model conditions upon ‘outside’ variables like foreign prices and output and
domestic policy variables like interest rates and tax rates. The model distin-
guishes between ﬁve production sectors. The oil and shipping sectors are not
modelled econometrically, nor is the sector for agriculture, forestry, and ﬁshing.
The two main sectors for which there exist complete submodels are manufactur-
ing and construction (traded goods) and services and retail trade (non-traded
goods). There are reasons to expect important diﬀerences in, for instance, the
responses to changes in interest rates and exchange rates between traded and
non-traded goods.
    In RIMINI there are two main channels through which monetary policy
instruments aﬀect employment, output, and prices—the interest rate channel
and the exchange rate channel. For the ﬁrst channel—the eﬀect of the inter-
est rate—Figure 1.1 shows the roles of households and enterprises in RIMINI
and also the main interaction between the demand-side (upper shaded box)
and the supply-side (lower shaded box). The main point here is to illustrate
the complexity and interdependencies that are typical of macroeconometric
systems.
    Assuming ﬁxed exchange rates, an increase in the central bank interest
rate for loans to the banks (the signal rate) immediately aﬀects the money
market interest rate. The money market rate in turn feeds into the deposit and
lending rates of commercial and savings banks with a lag. Aggregate demand
is aﬀected through several mechanisms: there is a negative eﬀect on housing
prices (for a given stock of housing capital), which causes real household wealth
to decline, thus suppressing total consumer expenditure. Also, there are nega-
tive direct and indirect eﬀects on real investment in the traded and non-traded
sectors and on housing investment.
    CPI inﬂation is reduced after a lag, mainly through the eﬀects from changes
in aggregate demand on aggregate output and employment, but also from
changes in unit labour costs. Notably, productivity ﬁrst decreases and then
increases—due to temporary labour hoarding—to create a cyclical pattern in
the eﬀects of the change in the interest rate.
    An appreciation of the Krone has a more direct eﬀect on CPI inﬂation
compared to the interest rate. As illustrated by the upper left box in Figure 1.2,
it mainly works through reduced import prices with a lagged response which
entails a complete pass-through to import and export prices after about 2 years.
The model speciﬁcation is consistent with a constant markup on unit labour
costs in the long run. A currency appreciation has a negative eﬀect on the
1.4 The transmission mechanism                                                             13


                                   Money market rates (3-month
                                          Euro-NOK)



                                                                Nominal exchange rate
                 Bank deposit and
                                                               (see Figure 1.2, exchange
                   lending rates
                                                                     rate channel)




                  Households:                                        Enterprises:
              -disposable income                                    -income
                -wealth                                             -wealth
                -loans                                              -loans
              -housing prices                                       -stock prices
              -expectations                                         -expectations




                                                                       Business sector
          Private consumption            Housing investments
                                                                      fixed investments




             Productivity                    Production                 Employment




                            Output gap                                 Unemployment




                   Inflation                                   Wage-setting


Figure 1.1. Interest rate channels in RIMINI. Given constant exchange rates

demand for traded goods. The direct eﬀects are not of a large magnitude,
because there are small relative price elasticities in the export equations and
secondly because export prices (in local currency) adjust with a lag and tend
to restore the relative prices. However, there are also important feedback mech-
anisms as the decrease in the price level caused by the appreciation feeds back
into aggregate demand from domestic sectors.
    If we abandon the assumption of a ﬁxed exchange rate, an increase of
interest rates aﬀects the money market rate and this induces an appreciation
of the Krone. Hence, we obtain the combined eﬀect of an interest rate increase
14                                                                                 Introduction


                 Nominal exchange rate                      Oil price (in NOK)




                Exports and imports
                -prices                                      Current account
                -volumes




                                                                Business sector
              Private consumption     Housing investments
                                                               fixed investments




                 Productivity             Production             Employment




                            Output gap                          Unemployment




                       Inflation                        Wage-setting


Figure 1.2. Exchange rate channels in RIMINI. Given constant interest rates



through both channels and the exchange rate channel strengthens the eﬀect of
interest rate changes on the rate of inﬂation. This will be analysed further in
Section 9.5 in the context of the small macroeconometric model for Norway,
which, as we alluded to in Section 1.2, shares many properties of the full RIMINI
model.
    This brief presentation of the transmission mechanism of an operational
model also serves to demonstrate the complexity and interdependencies of an
operational macroeconometric model. Again, it is evident that such a model is
too big and complex to be formulated in one step, or to be estimated simultan-
eously. Thus, there is a need to deal with subsectors of the economy—that is, we
try to make sense out of bits and pieces rather than handling a complete model.
The modelling of subsystems implies making simpliﬁcations of the joint distri-
bution of all observable variables in the model through sequential conditioning
and marginalisations, as discussed in Section 2.3.
    The estimated model in Chapter 9 is based on the assumption that the
short-run interest rate is an exogenous policy variable, and the chapter high-
lights estimation results and model properties along with a discussion about the
1.5 Forecast properties                                                        15

model’s potential to address monetary policy issues which are at the forefront
of inﬂation targeting central banks. Inﬂation targeting means that the policy
instrument (the interest rate) is set with the aim of controlling the conditional
forecast of inﬂation 2–3 years ahead. In practice, this means that central bank
economists will need to form a clear opinion about how the inﬂation fore-
casts are aﬀected by diﬀerent future interest rate paths, which in turn amounts
to quantitative knowledge of the transmission mechanism in the new regime.
The main monetary policy channels in the small macroeconometric model are
discussed on the basis of an analysis of dynamic multipliers.
    In Chapter 10, we relax the assumption that the short-run interest rate
is exogenous. We evaluate the performance of diﬀerent types of reaction func-
tions or Taylor-type interest rate rules. We perform counterfactual simulations
over the period from 1995q1 to 2000q4. In addition to analysing the outcome
from employing standard Taylor-type rules, including rules with interest rate
smoothing, we also employ inter alia interest rate rules dubbed ‘real time’ rules
since they are based on variables less prone to measurement errors, and
‘open economy’ rules which allow for interest rate responses to exchange rate
misalignments. The performance of the employed rules is evaluated by standard
eﬃciency measures and by deriving the mean deviations from targets, which
may be of interest for policy makers, especially over short time horizons. We also
introduce the root mean squared target error (RMSTE), an analogue to the
well-known root mean squared forecast error. Finally we conduct simulation
experiments where we vary the weights in the interest rate rules as well as the
weights of the variables in the policy maker’s loss function. The results are sum-
marised by estimating response surfaces on the basis of the range of weights
considered in the simulations. We will assume that monetary policy rules aim at
stabilising inﬂation around the inﬂation target, and that the monetary author-
ities potentially put some weight also on the stabilisation of unemployment,
output, and interest rates. The performance of diﬀerent monetary policy rules
can then be evaluated on the basis of the monetary authorities’ loss function.

1.5     Forecast properties (Chapter 11)
When studies of macroeconometric models’ forecast performance started to
appear in the 1960s and 1970s, it was considered a surprise that they were
found to be outperformed by very simple forecasting mechanisms. As pointed
out by Granger and Newbold (1986), many theory-driven macro models largely
ignored dynamics and temporal properties of the data, so that it should not
come as a surprise why they produced suboptimal forecasts. Forecasting is a
time-oriented activity, and a procedure that pays only rudimentary attention
to temporal aspects is likely to lose out to rival procedures that put dynam-
ics in the foreground. Such competing procedures were developed and gained
ground in the 1970s in the form of Box–Jenkins time-series analysis and ARIMA
models.
16                                                                   Introduction

    As we alluded to in Section 1.1, macroeconometric modelling has progressed
in the last two decades through the adoption of new techniques and insights
from time-series econometrics, with more emphasis on dynamic speciﬁcation
and testing against mis-speciﬁcation. The dangers of spurious regressions have
been reduced as a consequence of the adoption of new inference procedures for
integrated variables. As a result, modern macroeconometric forecasting models
are less exposed to Granger and Newbold’s diagnosis.
    In particular, one might reasonably expect that equilibrium-correcting
models (EqCMs) will forecast better than models that only use diﬀerenced
data, so-called diﬀerenced vector autoregressions (dVARs) or other member of
pure time-series models. In fact, the typical case will be that the dVAR is mis-
speciﬁed relative to an econometrically speciﬁed EqCM, and dVAR forecasts
will therefore be suboptimal.
    However, as shown by the work of Michael Clements and David Hendry
in several books and papers, the expected favourable forecasting properties
of econometric models rest on the assumption of constant parameters in the
forecast period. This is of course an untenable basis for the theory and prac-
tice of economic forecasting. The frequent occurrences of structural changes
and regime shifts tilt the balance of the argument back in favour of dVARs.
One reason is if key parameters like, for example, the means of the cointegrating
relationships change after the forecast is made, then forecasts of the EqCM are
damaged while the dVAR forecasts are robust (since the aﬀected relationships
are omitted from the forecasting mechanism in the ﬁrst place). Hence, in prac-
tice, EqCM forecasts may turn out to be less accurate than forecasts derived
from a dVAR. Nevertheless, the EqCM may be the right model to use for
policy simulations (e.g. the analysis of the transmission mechanism). Speciﬁc-
ally, this is true if the source of forecast failure turns out to be location shifts
in, for example, the means of cointegration relationships or in autonomous
growth rates, rather than in the model’s ‘derivative’ coeﬃcients, which are the
parameters of interest in policy analysis. Theoretical and empirical research
indicate that this is a typical situation. Conversely, the ‘best model’ in terms of
economic interpretation and econometrics, may not be the best model for fore-
casts. In Chapter 11, we investigate the practical relevance of these theoretical
developments for forecasts of the Norwegian economy in the 1990s. The model
that takes the role of the EqCM is the RIMINI model mentioned earlier.
                                          2

      Methodological issues of
      large-scale macromodels

      The chapter focuses on methodology and describes the roles of statistics
      and of economic theory in macroeconomic modelling. Building on a long
      tradition, we suggest an approach to macroeconometric modelling which
      is based on fundamental statistical concepts like the joint distribution
      function of all observable variables. Users of macroeconomic models
      often demand a detailed description of the economy, and in order to
      accommodate that demand, realistic macroeconomic models invariably
      become too large to be speciﬁed simultaneously. The suggested methodology
      therefore relies on valid conditioning and marginalisation of the joint dis-
      tribution function in order to arrive at tractable subsystems, which can be
      analysed with statistical methods.



2.1      Introduction: small vs. large models
Macroeconometric modelling aims at explaining the empirical behaviour of an
actual economic system. Such models will be systems of inter-linked equations
estimated from time-series data using statistical or econometric techniques.
    A conceptual starting point is the idea of a general stochastic process that
has generated all data we observe for the economy, and that this process
can be summarised in terms of the joint probability distribution of random
observable variables in a stochastic equation system: see Section 2.3. For a
modern economy, the complexity of such a system, and of the corresponding
joint probability distribution, is evident. Nevertheless, it is always possible to
take a highly aggregated approach in order to represent the behaviour of a few
‘headline’ variables (e.g. inﬂation, GDP growth, unemployment) in a small-
scale model. If small enough, the estimation of such econometric models can be


                                          17
18                               Methodological issues of large-scale macromodels

based on formally established statistical theory (as with low-dimensional vector
autoregressive models [VARs]), where the statistical theory has recently been
extended to cointegrated variables.
    However, it takes surprisingly little in terms of user-instigated detailing
of model features—for example, more than one production sector, separate
modelling of consumption and investment—to render simultaneous modelling
of all equations impossible in practice. Hence, models that are used for analysing
the impact of the governmental budget on the economy are typically very large
systems of equations. Even in the cases where the model user from the outset
targets only one variable, as with the recently contrived inﬂation targeting,
policy choices are made against the backdrop of a broader analysis of the eﬀects
of the interest rate on the economy (the nominal and real exchange rates, output
growth, employment and unemployment, housing prices, credit growth, and
ﬁnancial stability). Thus, it has been a long-standing task of model builders
to establish good practice and to develop operational procedures for model
building which secures that the end product of piecewise modelling is tenable
and useful. Important contributions in the literature include Christ (1966),
Klein (1983), Fair (1984, 1994), Klein et al. (1999), and the surveys in Bodkin
et al. (1991) and Wallis (1994).
    In this book, we supplement the existing literature by suggesting the
following operational procedure1 :

1. By relevant choices of variables we deﬁne and analyse subsectors of the
   economy (by marginalisation).
2. By distinguishing between exogenous and endogenous variables we con-
   struct (by conditioning) relevant partial models, which we will call models
   of type A.
3. Finally, we need to combine these submodels in order to obtain a Model B
   for the entire economy.

    Our thesis is that, given that Model A is a part of Model B, it is possible
to learn about Model B from Model A. The alternative to this thesis amounts
to a kind of creationism,2 that is, unless of course macroeconometrics should
be restricted to aggregate models.
    Examples of properties that can be discovered using our procedure include
cointegration in Model B. This follows from a corollary of the theory of coin-
tegrated systems: any nonzero linear combination of cointegrating vectors is
also a cointegrating vector. In the simplest case, if there are two cointegrating
vectors in Model B, there always exists a linear combination of those coin-
tegrating vectors that ‘nets out’ one of the variables. Cointegration analysis

  1 See Jansen (2002), reply to Søren Johansen (Johansen 2002).
 2 Theory that attributes the origin of matter and species to a special creation (or act of

God), as opposed to the evolutionary theory of Darwin.
2.1 Small vs. large models                                                       19

of the subset of variables (i.e. Model A) excluding that variable will result in
a cointegrating vector corresponding to that linear combination. Thus, despite
being a property of Model B, cointegration analysis of the subsystem (Model A)
identiﬁes one cointegration vector. Whether that identiﬁcation is economically
meaningful or not remains in general an open issue, and any such claim must
be substantiated in each separate case. We provide several examples in this
book: in Section 2.4 we discuss the identiﬁcation of a consumption function
as a cointegrating relationship, and link that discussion to the concept of par-
tial structure. In Chapter 5, the identiﬁcation of cointegrating relationships
corresponding to price- and wage-setting is discussed in detail.
    Other important properties of the full model that can be tested from
subsystems include the existence of a natural rate of unemployment (see Chap-
ter 6), and the relevance of forward looking terms in wage- and price-setting
(see Chapter 7).
    Nevertheless, as pointed out by Johansen (2002), there is a Catch 22 to
the above procedure: a general theory for the three steps will contain criteria
and conditions which are formulated for the full system. However, sophist-
icated piecewise modelling can be seen as a sort of gradualism—seeking to
establish submodels that represent partial structure: that is, partial models
that are invariant to extensions of the sample period, to changes elsewhere in
the economy (e.g. due to regime shifts) and remain the same for extensions
of the information set. However, gradualism also implies a readiness to revise
a submodel. Revisions are sometimes triggered by forecast failure, but perhaps
less often than believed in academic circles: see Section 2.3.2. More mundane
reasons include data revisions and data extensions which allow more precise
and improved model speciﬁcations. The dialogue between model builders and
model users often result in revisions too. For example, experienced model users
are usually able to pinpoint unfortunate and unintended implications of a single
equation’s (or submodel) speciﬁcation on the properties of the full model.
    Obviously, gradualism does not preclude thorough testing of a submodel.
On the contrary, the ﬁrst two steps in the operational procedure above do
not require that we know the full model, and testing those conditions has
some intuitive appeal since real life provides ‘new evidence’ through the arrival
of new data and by ‘natural experiments’ through regime shifts like, for
example, changes in government or the ﬁnancial deregulation in many European
economies in the recent past. For the last of the three steps, we could in principle
think of the full model as the ultimate extension of the information set, and so
establishing structure or partial structure represents a way to meet Johansen’s
observation. In practice, we know that the full model is not attainable. What
we do then is to graft the sector model in simpliﬁed approximations of Model B,
and test the relevant exogeneity assumptions of the partial model within that
framework. To the extent that the likelihood function of the simpliﬁed Model B
is adequately representing or approximating the likelihood function of the full
Model B, there is no serious problem left. It is also possible to corroborate the
20                            Methodological issues of large-scale macromodels

entire procedure, since it is true that Model A can be tested and improved
gradually on new information, which is a way of gaining knowledge that paral-
lels modern Darwinism in the natural sciences. We develop these views further
in Section 2.5.
    A practical reason for focusing on submodels is that the modellers may
have good reasons to study some parts of the economy more carefully than other
parts. For a central bank that targets inﬂation, there is a strong case for getting
the model of the inﬂationary process right. This calls for careful modelling of the
wage and price formation conditional on institutional arrangements for the wage
bargain, the development in ﬁnancial markets, and the evolving real economy
in order to answer a number of important questions: Is there a natural rate
(of unemployment) that anchors unemployment as well as inﬂation? What is
the importance of expectations for inﬂation and how should they be modelled?
What is the role of money in the inﬂationary process?
    We ﬁnd that in order to answer such questions—and to probe the compet-
ing hypotheses regarding supply-side economics—a detailed modelling, drawing
on information speciﬁc to the economy under study—is necessary. Taking
account of the simultaneity is to a large extent a matter of estimation eﬃ-
ciency. If there is a tradeoﬀ between such eﬃciency and the issue of getting the
economic mechanisms right, the practitioners of macroeconometric modelling
should give priority to the latter.


2.2     The roles of statistics and economic theory
        in macroeconometrics
Macroeconometrics draws upon and combines two academic disciplines—
economics and statistics. There is hardly any doubt that statisticians have
had a decisive inﬂuence on quantitative economics in general and on modern
macroeconometric modelling in particular.

2.2.1     The inﬂux of statistics into economics
The history of macroeconomic modelling starts with the Dutch economist
Jan Tinbergen who built and estimated the ﬁrst macroeconometric models
in the mid-1930s (Tinbergen 1937). Tinbergen showed how one could build a
system of equations into an econometric model of the business cycle, using
economic theory to derive behaviourally motivated dynamic equations and
statistical methods (of that time) to test them against data. However, there
seems to be universal agreement that statistics entered the discipline of eco-
nomics and econometrics with the contributions of the Norwegian economist
Trygve Haavelmo in his treatise ‘The Probability Approach in Econometrics’
(Haavelmo 1944; see Royal Swedish Academy of Science 1990, Klein 1988, Mor-
gan 1990, or Hendry and Morgan 1995). Haavelmo was inspired by some of the
2.2 Roles of statistics and economic theory                                      21

greatest statisticians of that time. As Morgan (1990, p. 242) points out, he was
converted to the usefulness of probability ideas by Jerzy Neyman and he was
also inﬂuenced by Abraham Wald whom Haavelmo credited as the source of
his understanding of statistical theory.
    For our purpose, it is central to note that Haavelmo recognised and
explained in the context of an economic model, that the joint distribution
of all observable variables for the whole sample period provides the most gen-
eral framework for statistical inference (see Hendry et al. 1989). This applies
to speciﬁcation (op. cit., pp. 48–49), as well as identiﬁcation, estimation, and
hypothesis testing:
all come down to one and the same thing, namely to study the properties of the joint
probability distribution of random (observable) variables in a stochastic equation
system (Haavelmo 1944, p. 85).

    Haavelmo’s probabilistic revolution changed econometrics. His thoughts
were immediately adopted by Jacob Marschak—a Russian-born scientist who
had studied statistics with Slutsky—as the research agenda for the Cowles
Commision for the period 1943–47, in reconsidering Tinbergen’s work on busi-
ness cycles cited above. Marschak was joined by a group of statisticians,
mathematicians, and economists, including Haavelmo himself. Their work
was to set the standards for modern econometrics and found its way into the
textbooks of econometrics from Tintner (1952) and Klein (1953) onwards.
    The work of the Cowles Commision also laid the foundations for the devel-
opment of macroeconomic models and model building which grew into a large
industry in the United States in the next three decades (see Bodkin et al. 1991
and Wallis 1994). These models were mainly designed for short (and medium)
term forecasting, that is, modelling business cycles. The ﬁrst model (Klein 1950)
was made with the explicit aim of implementing Haavelmo’s ideas into Tinber-
gen’s modelling framework for the United States economy. Like Tinbergen’s
model, it was a small model and Klein put much weight on the modelling of
simultaneous equations. Later models became extremely large systems in which
more than 1000 equations were used to describe the behaviour of a modern
industrial economy. In such models, less care could be taken about each econo-
metric speciﬁcation, and simultaneity could not be treated in a satisfactory way.
The forecasting purpose of these models meant that they were evaluated on
their performance. When the models failed to forecast the eﬀects on the indus-
trial economies of the oil price shocks in 1973 and 1979, the macroeconomic
modelling industry lost much of its position, particularly in the United States.
    In the 1980s, macroeconometric models took advantage of the methodo-
logical and conceptual advances in time-series econometrics. Box and Jenkins
(1970) had provided and made popular a purely statistical tool for modelling
and forecasting univariate time-series. The second inﬂux of statistical method-
ology into econometrics has its roots in the study of the non-stationary nature of
economic data series. Clive Granger—with his background in statistics—has in
22                              Methodological issues of large-scale macromodels

a series of inﬂuential papers shown the importance of an econometric equation
being balanced. A stationary variable cannot be explained by a non-stationary
variable and vice versa (see, for example, Granger 1990). Moreover, the con-
cept of cointegration (see Granger 1981; Engle and Granger 1987, 1991)—that a
linear combination of two or more non-stationary variables can be stationary—
has proven useful and important in macroeconometric modelling. Within the
framework of a general VAR, the statistician Søren Johansen has provided (see
Johansen 1988, 1991, 1995b) the most widely used tools for testing for cointegra-
tion in a multivariate setting, drawing on the analytical framework of canonical
correlation and multivariate reduced rank regression in Anderson (1951).
    Also, there has been an increased attention attached to the role of eval-
uation in modern econometrics (see Granger 1990, 1999). The so-called LSE
methodology emphasises the importance of testing and evaluating econometric
models (see Hendry 1993a, 1995a, Mizon 1995, and Ericsson 2005). Interest-
ingly, Hendry et al. (1989) claim that many aspects of the Haavelmo research
agenda were ignored for a long time. For instance, the joint distribution function
for observable variables was recognised by the Cowles Commission as central
to solving problems of statistical inference, but the ideas did not inﬂuence
empirical modelling strategies for decades. By contrast, many developments in
econometrics after 1980 are in line with this and other aspects of Haavelmo’s
research programme. This is also true for the role of economic theory in
econometrics:
Theoretical models are necessary tools in our attempts to understand and ‘explain’
events in real life. (Haavelmo 1944, p. 1)
    But whatever ‘explanations’ we prefer, it is not to be forgotten that they are all
our own artiﬁcial inventions in a search for an understanding of real life; they are not
hidden truths to be ‘discovered’. (Haavelmo 1944, p. 3)

    With this starting point, one would not expect the facts or the observations
to agree with any precise statement derived from a theoretical model. Economic
theories must then be formulated as probabilistic statements and Haavelmo
viewed probability theory as indispensable in formalising the notion of models
being approximations to reality.

2.2.2      Role of economic theory in
           macroeconometrics
The Cowles Commission research agenda focused on simultaneous equation
models (SEMs) and put much weight on the issue of identiﬁcation. In dealing
with these issues, economic theory plays an important part. The prominent
representative of this tradition, Lawrence Klein, writes in a very readable survey
of the interaction between statistics and economics in the context of macro-
econometric modelling (Klein 1988) that the model building approach can be
contrasted to pure statistical analysis, which is empirical and not so closely
related to received economic theory as is model building.
2.2 Roles of statistics and economic theory                                         23

    Still, it is on this score the traditional macroeconomic model building has
come under attack (see Favero 2001). Whereas the LSE methodology largely
ascribes the failure of those early macroeconomic models to missing dynamics
or model mis-speciﬁcation (omitted energy price eﬀects), other critiques like
Robert Lucas and Christopher Sims have claimed that the cause is rather that
they had a weak theoretical basis. The Lucas critique (see, for example, Lucas
1976) claims that the failure of conditional models is caused by regime shifts,
as a result of policy changes and shifts in expectations. The critique carries over
to SEMs if expectations are non-modelled. On the other hand, Sims (1980)
argued that SEMs embodied ‘incredible’ identifying restrictions: the restric-
tions needed to claim exogeneity for certain variables would not be valid in an
environment where agents optimise intertemporally.
    Sims instead advocated the use of a low-order vector autoregression to ana-
lyse economic time-series. This approach appeared to have the advantage that
it did not depend on an ‘arbitrary’ division between exogenous and endogenous
variables and also did not require ‘incredible’ identifying restrictions. Instead
Sims introduced identifying restrictions on the error structure of the model,
and this approach has been criticised for being equally arbitrary. Later devel-
opments have led to structural VAR models in which cointegration deﬁnes
long-run relationships between non-stationary variables and where exogenous
variables are reintroduced (see Pesaran and Smith 1998 for a survey in which
they reanalyse an early model by King et al. 1991).3
    Ever since the Keynes–Tinbergen controversy (see Morgan 1990 and Hendry
and Morgan 1995), the role of theory in model speciﬁcation has represented a
major controversy in econometrics (cf. Granger 1990, 1999 for recent surveys).
At one end of the theory–empiricism line we have theory-driven models that
take the received theory for granted, and do not test it. Prominent examples
are the general equilibrium models, dubbed real business cycle models, that
have gained a dominating position in academia (see, for example, Kydland
and Prescott 1991). There is also a new breed of macroeconometric mod-
els which assume intertemporally optimising agents endowed with rational
forward-looking expectations, leading to a set of Euler equations (see Poloz
et al. 1994, Willman et al. 2000, Hunt et al. 2000, and Nilsson 2002 for models
from the central banks of Canada, Finland, New Zealand, and Sweden, respec-
tively). At another extreme we have data based VAR models which initially
were statistical devices that made only minimal use of economic theory. As
noted above, in the less extreme case of structural VARs, theory restrictions
can be imposed as testable cointegrating relationships in levels or they can be
imposed on the error structure of the model.
    The approach we are advocating has much in common with the LSE
methodology referred to above, and it focuses on evaluation as recommended

  3 Jacobson et al. (2001) use a structural VAR with emphasis on the common trends to

analyse the eﬀect of monetary policy under an inﬂation targeting regime in a small open
economy.
24                                 Methodological issues of large-scale macromodels

in Granger (1999). It represents a compromise between data based (purely stat-
istical) models and economic theory: on the one hand learning from the process
of trying to take serious account of the data, while on the other hand avoiding
making strong theoretical assumptions—needed to make theories ‘complete’—
which may not make much sense empirically, that is, that are not supported by
the data.4 Moreover, there are common-sense arguments in favour of not adopt-
ing a theory-driven model as a basis for policy decisions, which indeed aﬀect
reality, until it has gained convincing empirical support (see Granger 1992).


2.3       Identifying partial structure in submodels
Model builders often face demands from model users that are incompatible with
a 3–5 equations closed form model. Hence, modellers often ﬁnd themselves
dealing with submodels for the diﬀerent sectors of the economy. Thus it is
often useful to think in terms of a simpliﬁcation of the joint distribution of all
observable variables in the model through sequential factorisation, conditioning,
and marginalisations.


2.3.1       The theory of reduction
Consider the joint distribution of xt = (x1t , x2t , . . . , xnt ) , t = 1, . . . , T , and let
x1T = {xt }Tt=1 . Sequential factorisation means that we factorise the joint density
function Dx (x1T | x0 , λx ) into
                                                       
                                                       T
            Dx (x1T | x0 ; λx ) = Dx (x1 | x0 ; λx )         Dx (xt | x1t−1 , x0 ; λx ),   (2.1)
                                                       t=2

which is what Spanos (1989) named the Haavelmo distribution. It explains the
present xt as a function of the past x1t−1 , initial conditions x0 , and a time
invariant parameter vector λx . This is—by assumption—as close as we can get
to representing what Hendry (1995a) calls the data generating process (DGP),
which requires the error terms, εt = xt −E(xt | x1t−1 , x0 ; λx ), to be an innovation
process. The ensuing approach has been called ‘the theory of reduction’ as it
seeks to explain the origin of empirical models in terms of reduction operations
conducted implicitly on the DGP to induce the relevant empirical model (see
Hendry and Richard 1982, 1983).
  4 As is clear from the discussion above, econometric methodology lacks a consensus, and

thus the approach to econometric modelling we are advocating is controversal. Heckman
(1992) questions the success, but not the importance, of the probabilistic revolution of
Haavelmo. Also, Keuzenkamp and Magnus (1995) oﬀer a critique of the Neyman–Pearson
paradigm for hypothesis testing and they claim that econometrics has exerted little inﬂuence
on the beliefs of economists over the past 50 years; see also Summers (1991). For sceptical
accounts of the LSE methodology, see Hansen (1996) and Faust and Whiteman (1995, 1997),
to which Hendry (1997b) replies.
2.3 Identifying partial structure in submodels                                                   25

    The second step in data reduction is further conditioning and simpliﬁca-
tion. We consider the partitioning xt = (yt , zt ) and factorise the joint density
function into a conditional density function for yt | zt and a marginal density
function for zt :
   Dx (xt | x1t−1 , x0 ; λx ) = Dy|z (yt | zt , x1t−1 , x0 ; λy|z ) · Dz (zt | x1t−1 , x0 ; λz ).
                                                                                                (2.2)
   In practice we then simplify by using approximations by kth order Markov
processes and develop models for
                       Dx (xt | x1t−1 , x0 ; λx ) ≈ Dx (xt | xt−k
                                                              t−1 ; θx )                      (2.3)

                Dy|z (yt | zt , x1t−1 , x0 , λy|z ) ≈ Dy|z (yt | zt , xt−k
                                                                       t−1 ; θy|z )           (2.4)

for t > k. The validity of this reduction requires that the residuals remain
innovation processes.
    A general linear dynamic class of models with a ﬁnite number of lags which
is commonly used to model the n-dimensional process xt is the kth order VAR
with Gaussian error, that is,
                                             
                                             k
                                 xt = µ +          Πi xt−i + εt ,
                                             i=1

where εt is normal, independent and identically distributed, N.i.i.d. (0, Λε ).
A VAR model is also the starting point for analysing the cointegrating relation-
ships that may be identiﬁed in the xt -vector (see Johansen 1988, 1991, 1995b).
Economic theory helps in determining which information sets to study and in
interpreting the outcome of the analysis. In the following, we assume for sim-
plicity that the elements of xt are non-stationary I(1)-variables that become
stationary after being diﬀerenced once. Then, if there is cointegration, it is
shown in Engle and Granger (1987) that the VAR system always has a vector
equilibrium-correcting model (VEqCM) representation, which can be written
in diﬀerences and levels (disregarding the possible presence of deterministic
variables like trends) in the following way:
                                  
                                  k−1
                         ∆xt =          Ai ∆xt−i + α(β  xt−1 ) + εt ,                        (2.5)
                                  i=1

where α and β are n × r matrices of rank r (r < n) and (β  xt−1 ) comprises
r cointegrating I(0) relationships. Cointegrated processes are seen to deﬁne a
long-run equilibrium trajectory and departures from this induce ‘equilibrium
correction’ which moves the economy back towards its steady-state path. These
models are useful as they often lend themselves to an economic interpretation
of model properties and their long-run (steady-state) properties may be given
an interpretation as long-run equilibria between economic variables that are
26                            Methodological issues of large-scale macromodels

derived from economic theory. Theoretical consistency, that is, that the model
contains identiﬁable structures that are interpretable in the light of economic
theory, is but one criterion for a satisfactory representation of the economy.

2.3.2     Congruence
If one considers all the reduction operations involved in the process of going
from the hypothetical DGP to an empirical model, it is evident that any econo-
metric model is unlikely to coincide with the DGP. An econometric model may
however, possess certain desirable properties, which will render it a valid rep-
resentation of the DGP. According to the LSE methodology (see Mizon 1995
and Hendry 1995a), such a model should satisfy the following six criteria:

1. The model contains identiﬁable structures that are interpretable in the light
   of economic theory.
2. The errors should be homoscedastic innovations in order for the model to
   be a valid simpliﬁcation of the DGP.
3. The model must be data admissible on accurate observations.
4. The conditioning variables must be (at least) weakly exogenous for the
   parameters of interest in the model.
5. The parameters must be constant over time and remain invariant to certain
   classes of interventions (depending on the purpose for which the model is to
   be used).
6. The model should be able to encompass rival models. A model Mi encom-
   passes other models (Mj , j = i) if it can explain the results obtained by the
   other models.

    Models that satisfy the ﬁrst ﬁve criteria are said to be congruent, whereas
an encompassing congruent model satisﬁes all six. Below, we comment on each
of the requirements.
    Economic theory (item 1) is a main guidance in the formulation of econo-
metric models. Clear interpretation also helps communication of ideas and
results among researchers and it structures the debate about economic issues.
However, since economic theories are necessarily abstract and build on simpli-
fying assumptions, a direct translation of a theoretical relationship to an econo-
metric model will generally not lead to a satisfactory model. Notwithstanding
their structural interpretation, such models will lack structural properties.
    There is an important distinction between seeing theory as representing
the correct speciﬁcation (leaving parameter estimation to the econometrician),
and viewing theory as a guideline in the speciﬁcation of a model which also
accommodates institutional features, attempts to accommodate heterogeneity
among agents, addresses the temporal aspects for the data set and so on
(see, for example, Granger 1999). Likewise, there is a huge methodological
diﬀerence between a procedure of sequential simpliﬁcation while controlling
2.3 Identifying partial structure in submodels                                      27

for innovation errors as in Section 2.3.1 and the practice of adopting an
axiom of a priori correct speciﬁcation which by assumption implies white noise
errors.
    Homoscedastic innovation errors (item 2) mean that residuals cannot be
predicted from the model’s own information set. Hence they are relative to that
set. This is a property that follows logically from the reduction process and it
is a necessary requirement for the empirical model to be one that is derived
from the DGP. If the errors do not have this property, for example, if they are
not white noise, some regularity in the data has not yet been included in the
speciﬁcation.
    The requirement that the model must be data admissible (item 3) entails
that the model must not produce predictions that are not logically possible. For
example, if the data to be explained are proportions, the model should force
all outcomes into the zero to one range.
    Criterion 4 (weak exogeneity) holds if the parameters of interest are func-
tions of θy|z (see (2.4)), which vary independently of θx (see equation (2.3)
and Engle et al. 1983 for a formal deﬁnition). This property relates to estima-
tion eﬃciency: weak exogeneity of the conditioning variables zt is required for
estimation of the conditional model for yt without loss of information relative
to estimation of the joint model for yt and zt . In order to make conditional fore-
casts from the conditional model without loss of information, strong exogeneity
is required. This is deﬁned as the joint occurrence of weak exogeneity and
Granger noncausality, which is absence of feedback from yt to zt , that is x1t−1
in the marginal density function for zt , Dz (zt | x1t−1 , x0 ; λz ) in equation (2.2),
does not include lagged values of yt .
    Item 5 in the list is spelt out in greater detail in Hendry (1995a: pp. 33–4),
where he gives a formal and concise deﬁnition. He deﬁnes structure as the set of
basic permanent features of the economic mechanism. A vector of parameters
deﬁnes a structure if it is invariant and directly characterises the relations under
analysis, that is, it is not derived from more basic parameters. A parameter can
be structural only if it is

• constant and so is invariant to an extension of the sample period;
• unaltered by changes elsewhere in the economy and so is invariant to regime
  shifts, etc.;
• remains the same for extensions of the information set and so is invariant to
  adding more variables to the analysis.

    This invariance property is of particular importance for a progressive
research programme: ideally, empirical modelling is a cumulative process where
models continuously become overtaken by new and more useful ones. By useful,
we understand models that possess structural properties (items 1–5), in partic-
ular models that are relatively invariant to changes elsewhere in the economy,
that is, they contain autonomous parameters (see Frisch 1938, Haavelmo 1944,
28                                 Methodological issues of large-scale macromodels

Johansen 1977, and Aldrich 1989). Models with a high degree of autonomy
represent structure: they remain invariant to changes in economic policies and
other shocks to the economic system, as implied by the deﬁnition above.
    However, structure is partial in two respects: ﬁrst, autonomy is a relative
concept, since an econometric model cannot be invariant to every imaginable
shock; second, all parameters of an econometric model are unlikely to be equally
invariant. Parameters with the highest degree of autonomy represent partial
structure (see Hendry 1993b, 1995b). Examples are elements of the β-vector in
a cointegrating equation, which are often found to represent partial structure,
as documented by Ericsson and Irons (1994). Finally, even though submodels
are unlikely to contain partial structure to the same degree, it seems plausible
that very aggregated models are less autonomous than the submodels, simply
because the submodels can build on a richer information set.
    Data congruence, that is, ability to characterise the data, remains an essen-
tial quality of useful econometric models (see Granger 1999 and Hendry 2002).
In line with this, our research strategy is to check any hypothesised general
model which is chosen as the starting point of a speciﬁcation search for data
congruence, and to decide on a ﬁnal model after a general-to-speciﬁc (Gets)
speciﬁcation search. Due to recent advances in the theory and practice of data
based model building, we know that by using Gets algorithms, a researcher
stands a good chance of ﬁnding a close approximation to the data generating
process (see Hoover and Perez 1999 and Hendry and Krolzig 1999), and that
the danger of over-ﬁtting is in fact surprisingly low.5
    A congruent model is not necessarily a true model. Hendry (1995a: ch. 4)
shows that an innovation is relative to its information set but may be pre-
dictable from other information. Hence, a sequence of congruent models could
be developed and each of them encompassing all previous models. So satisfying
all six criteria provides a recipe for a progressive research strategy. Congruency
and its absence can be tested against available information, and hence, unlike
truth, it is an operational concept in an empirical science (see Bontemps and
Mizon 2003).
    Finally, it should be noted that a strategy that puts a lot of emphasis
on forecast behaviour, without a careful evaluation of the causes of forecast
failure ex post, runs a risk of discarding models that actually contain import-
ant elements of structure. Hence, for example, Doornik and Hendry (1997a)


  5 Naturally, with a very liberal speciﬁcation strategy, overﬁtting will result from Gets

modelling, but with ‘normal’ requirements of levels of signiﬁcance, robustness to sample
splits, etc., the chance of overﬁtting is small. Thus the documented performance of Gets
modelling now refutes the view that the axiom of correct speciﬁcation must be invoked in
applied econometrics (Leamer 1983). The real problem of empirical modelling may instead be
to keep or discover an economically important variable that has yet to manifest itself strongly
in the data (see Hendry and Krolzig 2001). Almost by implication, there is little evidence
that Gets leads to models that are prone to forecast failure: see Clements and Hendry (2002).
2.4 An example: modelling the household sector                                   29

and Clements and Hendry (1999a: ch.3) show that the main source of fore-
cast failure is deterministic shifts in means (e.g. the equilibrium savings rate),
and not shifts in such coeﬃcients (e.g. the propensity to consume) that are
of primary concern in policy analysis. Structural breaks are a main concern in
econometric modelling, but like any hypothesis of theory, the only way to judge
the quality of a hypothesised break is by confrontation with the evidence in the
data. Moreover, given that an encompassing approach is followed, a forecast
failure is not merely destructive but represents a potential for improvement,
since respeciﬁcation follows in its wake: see Section 2.4.2.


2.4     An example: modelling the
        household sector
The complete Haavelmo distribution function—for example, the joint distri-
bution (2.1) of all variables of the macro model—is not tractable and hence
not an operational starting point for empirical econometric analysis. In prac-
tice, we have to split the system into subsystems of variables and to analyse
each of them separately. Joint modelling is considered only within subsystems.
But by so doing, one risks ignoring possible inﬂuences across the subsystems.
This would translate into invalid conditioning (the weak exogeneity assumption
is not satisﬁed) and invalid marginalisation (by omitting relevant explanatory
variables from the analysis), which are known to imply ineﬃcient statistical
estimation and inference. The practical implementation of these principles is
shown in an example drawn from the modelling of the household sector of the
RIMINI model (see Chapter 1).
    The process of sequential decomposition into conditional and marginal
models is done repeatedly within the subsystems of RIMINI. In the household
sector subsystem, total consumer expenditure, cht , is modelled as a function of
real household disposable income, yht , and real household wealth, wht . (Here
and in the rest of the book, small letters denote logs of variables.) Total wealth
consists of the real value of the stock of housing capital plus net ﬁnancial wealth.
The volume of the residential housing stock is denoted Ht and the real housing
price is (PH )t /Pt , where Pt is the national accounts price deﬂator for total
consumption expenditure. The sum of net real ﬁnancial assets is equal to the
diﬀerence between real gross ﬁnancial assets and real loans (Mt − Lt ), yielding
                                                               
                                          P Ht
                 wht = ln WH t = ln              Ht−1 + Mt − Lt .
                                            Pt
   The joint distribution function for this subsystem can be written as (2.1)
with xt = (cht , yht , wht ). The conditional submodel for total real consumer
expenditure cht (Brodin and Nymoen 1992—B&N hereafter), is
                            Dc|y,w (cht | yht , wht ; λc ),
30                             Methodological issues of large-scale macromodels

relying on the corresponding conditional density function, (2.4), to be a
valid representation of the DGP. RIMINI contains submodels for yht and
for all individual components in wht . For example, the conditional submodel
for simultaneous determination of housing prices, pht , and real household
loans, lt , is
                       Dw|y (pht , lt | RLt , yht , ht−1 ; λw ),
where RLt denotes the interest rate on loans, and conditional submodels for
the net addition to housing capital stock ∆ht , and the price of new housing
capital, phnt
                  D∆h|· (∆ht | pht , phnt , RLt , yht , ht−1 ; λ∆h )

                       Dphn|· (phnt | pht , pjt , ht−1 ; λphn ),
where pjt is the deﬂator of gross investments in dwellings.


2.4.1     The aggregate consumption function
The model for aggregate consumption in B&N satisﬁes the criteria we listed in
Section 2.3. They provide a model in which cointegration analysis establishes
that the linear relationship

                      cht = constant + 0.56yht + 0.27wht ,                   (2.6)

is a cointegrating relationship and that the cointegration rank is one. Hence,
while the individual variables in (2.6) are assumed to be non-stationary and
integrated, the linear combination of the three variables is stationary with a
constant mean showing the discrepancy between consumption and its long-run
equilibrium level 0.56yht + 0.27wht . Moreover, income and wealth are weakly
exogenous for the cointegration parameters. Hence, the equilibrium correction
model for ∆cht satisﬁes the requirements of valid conditioning. Finally, the coin-
tegration parameters appears to be invariant. The estimated marginal models
for income and wealth show evidence of structural breaks. The joint occurrence
of a stable conditional model (the consumption function) and unstable marginal
models for the conditional variables is evidence of within sample invariance of
the coeﬃcients of the conditional model and hence super exogenous condi-
tional variables (income and wealth). The result of invariance is corroborated
by Jansen and Teräsvirta (1996), using an alternative method based on smooth
transition models.
    The empirical consumption function in B&N has proven to be relatively
stable for more than a decade, in particular this applies to the cointegration
part of the equation. Thus, it is of particular interest to compare it with rival
models in the literature.
2.4 An example: modelling the household sector                                   31

2.4.2     Rival models
Financial deregulation in the mid-1980s led to a strong rise in aggregate con-
sumption relative to income in several European countries. The pre-existing
empirical macroeconometric consumption functions in Norway, which typically
explained aggregate consumption by income, all broke down—that is, they
failed in forecasting, and failed to explain the data ex post.
    As stated in Eitrheim et al. (2002b), one view of this forecast failure is
that it provided direct evidence in favour of the rival rational expectations,
permanent income hypothesis: in response to ﬁnancial deregulation, consumers
revised their expected permanent income upward, thus creating a break in the
conditional relationship between consumption and income. The breakdown has
also been interpreted as a conﬁrmation of the relevance of the Lucas critique,
in that it was a shock to a non-modelled expectation process that caused the
structural break in the existing consumption functions.
    Eitrheim et al. (2002b) compare the merits of the two competing models:
the empirical consumption function (CF), conditioning on income in the long
run, and an Euler equation derived from a model for expectation formation.
We ﬁnd that while the conditional consumption function encompasses the Euler
equation (EE) on a sample from 1968(2) to 1984(4), both models fail to forecast
the annual consumption growth in the next years. In the paper, we derive the
theoretical properties of forecasts based on the two models. Assuming that the
EE is the true model and that the consumption function is a mis-speciﬁed
model, we show that both sets of forecasts are immune to a break (i.e. shift
in the equilibrium savings rate) that occurs after the forecast have been made.
Moreover, failure in ‘before break’ CF-forecasts is only (logically) possible if the
consumption function is the true model within the sample. Hence, the observed
forecast failure of the CF is corroborating evidence in favour of the conditional
consumption function for the period before the break occurred.
    However, a respeciﬁed consumption function—B&N of the previous
section—that introduced wealth as a new variable was successful in accounting
for the breakdown ex post, while retaining parameter constancy in the years of
ﬁnancial consolidation that followed after the initial plunge in the savings rate.
The respeciﬁed model was able to adequately account for the observed high
variability in the savings rate, whereas the earlier models failed to do so.
    B&N noted the implication that the respeciﬁcation explained why the Lucas
critique lacked power in this case: ﬁrst, while the observed breakdown of condi-
tional consumption functions in 1984–85 is consistent with the Lucas critique,
that interpretation is refuted by the ﬁnding of a conditional model with constant
parameters. Second, the invariance result shows that an Euler equation type
model (derived from, for example, the stochastic permanent income model)
cannot be an encompassing model. Even if the Euler approach is supported by
empirically constant parameters, such a ﬁnding cannot explain why a condi-
tional model is also stable. Third, ﬁnding that invariance holds, at least as an
32                                Methodological issues of large-scale macromodels

empirical approximation, yields an important basis for the use of the dynamic
consumption function in forecasting and policy analysis, the main practical
usages of empirical consumption functions.
    Eitrheim et al. (2002b) extend the data set by nine years of quarterly obser-
vations, that is, the sample is from 1968(3) to 1998(4). The national accounts
were heavily revised for that period. We also extended the wealth measure to
include non-liquid ﬁnancial assets. Still we ﬁnd that the main results of B&N
are conﬁrmed. Empirical support for one cointegrating vector between cht , yht ,
and wht , and valid conditioning in the consumption function is reconﬁrmed on
the new data. In fact, full information maximum likelihood estimation of a four
equation system explaining (the change in) cht , yht , wht , and (pht − pt ) yields
the same empirical results as estimation based on the conditional model. These
ﬁndings thus corroborate the validity of the conditional model of B&N.



2.5      Is modelling subsystems and combining
         them to a global model a viable procedure?
The traditional approach to building large-scale macroeconometric models has
been to estimate one equation (or submodel) at a time and collect the results in
the simultaneous setting. Most often this has been done without testing for the
adequacy of that procedure. The approach could, however, be defended from the
estimation point of view. By adopting limited information maximum likelihood
(LIML) methods, one could estimate the parameters of one equation, while
leaving the parameters of other equations unrestricted: see Anderson and Rubin
(1949)6 and Koopmans and Hood (1953).7 It has, however, also been argued
that the limited information methods were more robust against mis-speciﬁed
equations elsewhere in the system in cases where one had better theories or
more reliable information about a subset of variables than about the rest (cf.
Christ 1966, p. 539). Historically, there is little doubt that limited information
methods—like LIML—were adopted out of practical considerations, to avoid
the computational burden of full information methods—like full information
maximum likelihood (FIML). The problem of sorting out the properties of the
system that obtained when the bits and pieces were put together, remained
unsolved.
    That said, it is no doubt true that we run into uncharted territory when
we —after constructing relevant submodels by marginalisation and condition-
ing—combine the small models of subsectors to a large macroeconometric

  6 Interestingly, the papers that introduced the limited information methods also introduced

the ﬁrst tests of overidentifying restrictions in econometrics.
  7 Johansen (2002) has pointed out that LIML does not work with cointegrated systems,

where relaxing cross equation restrictions (implied by cointegration) changes the properties
of the system.
2.5 The viability of combining subsystems with global model                     33

model. As we alluded to in the Section 2.1, Johansen (2002) points out that a
general theory for the validity of the three steps will invariably contain criteria
and conditions which are formulated for the full system. The question thus is:
given that the full model is too large to be modelled simultaneously, is there a
way out?
    One solution might be to stay with very aggregated models that are small
enough to be analysed as a complete system. Such an approach will necessar-
ily leave out a number of economic mechanisms which we have found to be
important and relevant in order to describe the economy adequately.
    Our general approach can be seen as one of gradualism—seeking to establish
structure (or partial structure) in the submodels. In Section 2.3.2 we gave a
formal deﬁnition of partial structure as partial models that are (1) invariant
to extensions of the sample period; (2) invariant to changes elsewhere in the
economy (e.g. due to regime shifts); and (3) remains the same for extensions of
the information set.
    The ﬁrst two of these necessary conditions do not require that we know
the full model. The most common cause for them to be broken is that there
are important omitted explanatory variables. This is detectable within the
frame of the submodel once the correlation structure between included and
excluded variables changes.
    For the last of these conditions we can, at least in principle, think of the
full model as the ultimate extension of the information set, and so estab-
lishing structure or partial structure represents a way to break free of Søren
Johansen’s Catch 22. In practice, however, we know that the full model is
not attainable. Nevertheless, we note that the conditional consumption func-
tion of Section 2.4.2 is constant when the sample is extended with nine years
of additional quarterly observations; it remains unaltered through the period
of ﬁnancial deregulation and it also sustains the experiment of simultaneous
modelling of private consumption, household disposable income, household
wealth and real housing prices. We have thus found corroborating inductive
evidence for the conditional consumption function to represent partial struc-
ture. The simultaneous model is in this case hardly an ideal substitute for
a better model of the supply-side eﬀects that operate through the labour
market, nonetheless it oﬀers a safeguard against really big mistakes of the type
that causation ‘goes the other way’, for example, income is in fact equilibrium
correcting, not consumption.
    There may be an interesting diﬀerence in focus between statisticians and
macroeconomic modellers. A statistician may be concerned about the estima-
tion perspective, that is, the lack of eﬃciency by analysing a sequence of
submodels instead of a full model, whereas a macroeconomic modeller primar-
ily wants to avoid mis-speciﬁed relationships. The latter is due to pragmatic
real-world considerations as macroeconomic models are used as a basis for
policy-making. From that point of view it is important to model the net coeﬃ-
cients of all relevant explanatory variables by also conditioning on all relevant
34                            Methodological issues of large-scale macromodels

and applicable knowledge about institutional conditions in the society under
study. Relying on more aggregated speciﬁcations where gross coeﬃcients pick
up the combined eﬀects of the included explanatory variables and correlated
omitted variables may lead to misleading policy recommendations. Our conjec-
ture is that such biases are more harmful for policy makers than the simulta-
neity bias one may incur by combining submodels. Whether this holds true
or not is an interesting issue which is tempting to explore by means of Monte
Carlo simulations on particular model speciﬁcations.
    That said, it is of particular importance to get the long-run properties of
the submodel right. We know that once a cointegrating equation is found, it
is invariant to extensions of the information set. On the other hand, this is a
property that needs to be established in each case. We do not know what we
do not know. One line of investigation that may shed light on this is associated
with the notion of separation in cointegrated systems as described in Granger
and Haldrup (1997). Their idea is to decompose each variable into a persis-
tent (long-memory) component and a transitory (short-memory) component.
Within the framework of a vector equilibrium correcting model like (2.5), the
authors consider two subsystems, where the variables of one subsystem do not
enter the cointegrating equations of the other subsystem (cointegration sepa-
ration). Still, there may be short-term eﬀects of the variables in one subsystem
on the variables in the other and the cointegrating equations of one system may
also aﬀect the short-term development of the variables in the other. Absence of
both types of interaction is called complete separation while if only one of these
is present it is referred to as partial separation. These concepts are of course
closely related to strong and weak exogeneity of the variables in one subsystem
with respect to the parameters of the other. Both partially and completely sep-
arated submodels are testable hypotheses, which ought to be tested as part of
the cointegration analysis. Hecq et al. (2002) extend the results of Granger and
Haldrup (1997). The conclusion of Hecq et al. (2002) is, however, that testing
of separation requires that the full system is known, which is in line with Søren
Johansen’s observation earlier.
    In Chapter 9 we introduce a stepwise procedure for assessing the validity
of a submodel for wages and prices for the economy at large. A detailed and
carefully modelled core model for wage and price determination (a Model A of
Section 2.1) is supplemented with marginal models for the conditioning vari-
ables in the core model. The extended model is cruder and more aggregated
than the full Model B of Section 2.1. Notwithstanding this, it enables us to test
valid conditioning (weak exogeneity) as well as invariance (which together with
weak exogeneity deﬁnes super exogeneity) of the core model on criteria and con-
ditions formulated within the extended model. The approach features a number
of ingredients that are important for establishing an econometrically relevant
submodel, and—as in the case of the consumption function—this points to a
way to avoid the Catch 22 by establishing partial structure.
                                         3

 Inﬂation in open economies:
   the main-course model

      The chapter introduces Aukrust’s main-course model of wage- and price-
      setting. Our reconstruction of Aukrust’s model will use elements both
      from rational reconstructions, which present past ideas with the aid of
      present-day concepts and methods, and historical reconstructions, which
      understand older theories in the context of their own times. Our excursion
      into the history of macroeconomic thought is both traditional and plural-
      istic. The aim with the appraisal is to communicate the modernity of the
      set of testable hypotheses emerging from Aukrust’s model to interested
      practitioners.




3.1      Introduction
As noted in the introductory chapter, an important development of macro-
econometric models has been the representation of the supply side of the
economy, and wage–price dynamics in particular. This chapter and the next
three (Chapters 4–6) present four frameworks for wage–price modelling, which
all have played signiﬁcant roles in shaping macroeconometric models in Norway,
as well as in several other countries. We start in this chapter with a reconstruc-
tion of Aukrust’s main-course model of inﬂation, using the modern econometric
concepts of cointegration and causality. This rational reconstruction shows that,
despite originating back in the mid-1960s, the main-course model resembles
present day theories of wage formation with unions and price-setting ﬁrms,
and markup pricing by ﬁrms.
    In its time, the main-course model of inﬂation was viewed as a contender
to the Phillips curve, and in retrospect it is easy to see that the Phillips curve

                                         35
36                                                           Inﬂation in open economies

won. However, the Phillips curve and the main-course model are in fact not
mutually exclusive. A conventional open economy version of the Phillips curve
can be incorporated into the main-course model, and in Chapter 4, we approach
the Phillips curve from that perspective.
    The main-course model of inﬂation was formulated in the 1960s.1 It became
the framework for both medium-term forecasting and normative judgements
about ‘sustainable’ centrally negotiated wage growth in Norway.2 In this section
we show that Aukrust’s (1977) version of the model can be reconstructed as a
set of propositions about cointegration properties and causal mechanisms. The
reconstructed main-course model serves as a reference point for, and in some
respects also as a corrective to, the modern models of wage formation and
inﬂation in open economies, for example, the open economy Phillips curve and
the imperfect competition model of, for example, Layard and Nickell (1986:
Sections 4.2 and 5). It also motivates our generalisation of these models in
Section 6.9.2.
    Central to the model is the distinction between a sector where strong com-
petition makes it reasonable to model ﬁrms as price takers, and another sector
(producing non-traded goods) where ﬁrms set prices as markups on wage costs.
Following convention, we refer to the price taking sector as the exposed sector,
and the other as the sheltered sector. In equations (3.1)–(3.7), we,t denotes the
nominal wage in the exposed (e) industries in period t. Foreign prices in domes-
tic currency are denoted by pft , while qe,t and ae,t are the product price and
average labour productivity of the exposed sector. ws,t , qs,t , and as,t are the
corresponding variables of the sheltered (s) sector.3 All variables are measured



  1 In fact there were two models, a short-term multisector model and the long-term two

sector model that we reconstruct using modern terminology in this chapter. The models
were formulated in 1966 in two reports by a group of economists who were called upon
by the Norwegian government to provide background material for that year’s round of
negotiations on wages and agricultural prices. The group (Aukrust, Holte, and Stoltz) pro-
duced two reports. The second (dated 20 October 1966, see Aukrust 1977) contained the
long-term model that we refer to as the main-course model. Later, there were similar develop-
ments in, for example, Sweden (see Edgren et al. 1969) and the Netherlands (see Driehuis and
de Wolf 1976).
  In later usage the distinction between the short- and long-term models seems to have
become blurred, in what is often referred to as the Scandinavian model of inﬂation. Rødseth
(2000: ch. 7.6) contains an exposition and appraisal of the Scandinavian model in terms of
current macroeconomic theory. We acknowledge Aukrust’s clear exposition and distinction in
his 1977 paper, and use the name main-course model for the long-run version of his theoretical
framework.
  2 On the role of the main-course model in Norwegian economic planning, see

Bjerkholt (1998).
  3 In France, the distinction between sheltered and exposed industries became a feature of

models of economic planning in the 1960s, and quite independently of the development in
Norway. In Courbis (1974), the main-course theory is formulated in detail and illustrated
with data from French post-war experience (we are grateful to Odd Aukrust for pointing this
out to us).
3.2 Cointegration                                                                  37

in natural logarithms, so, for example, wi,t = log(Wi,t ) for the wage rates
(i = e, s).
                                    qe,t = pft + υ1,t ,                         (3.1)
                                    pft = gf + pft−1 + υ2,t ,                   (3.2)
                                   ae,t = gae + ae,t−1 + υ3,t ,                 (3.3)
                      we,t − qe,t − ae,t = me + υ4,t ,                          (3.4)
                                   ws,t = we,t + υ5,t ,                         (3.5)
                                   as,t = gas + as,t−1 + υ6,t ,                 (3.6)
                      ws,t − qs,t − as,t = ms + υ7,t .                          (3.7)
The parameters gi (i = f, ae , as ) are constant growth rates, while mi (i = e, s)
are means of the logarithms of the wage shares in the two industries.
    The seven stochastic processes υ1,t (i = 1, . . . , 7) play a key role in our
reconstruction of Aukrust’s theory. They represent separate ARMA processes.
The roots of the associated characteristic polynomials are assumed to lie on or
outside the unit circle. Hence, υ1,t (i = 1, . . . , 7) are causal ARMA processes,
cf. Brockwell and Davies (1991).
    Before we turn to the interpretation of the model, we follow convention
and deﬁne pt , the log of the consumer price index (CPI), as a weighted average
of qs,t and qe,t :
                     pt = φqs,t + (1 − φ)qe,t ,       0 < φ < 1,             (3.8)
where φ is a coeﬃcient that reﬂects the weight of non-traded goods in private
consumption.4


3.2      Cointegration
Equation (3.1) captures the price taking behaviour characterising the exposed
industries, and (3.2)–(3.3) deﬁne foreign prices of traded goods (pft ) and labour
productivity as random walks with drifts. Equation (3.4) serves a double func-
tion: ﬁrst, it deﬁnes the exposed sector wage share we,t − qe,t − ae,t as a
stationary variable since υ4,t on the right-hand side is I(0) by assumption;
second, since both qe,t and ae,t are I(1) variables, the nominal wage we,t is also
non-stationary I(1).
    The sum of the technology trend and the foreign prices plays an important
role in the theory since it traces out a central tendency or long-run sustainable
scope for wage growth. Aukrust (1977) refers to this as the main course for
wages in the exposed industries. Thus, for later use, we deﬁne the main-course
variable: mct = ae,t + qe,t . The essence of the statistical interpretation of
the theory is captured by the assumption that υ1,t is ARMA, and thus I(0).

  4 Note that, due to the log-form, φ = x /(1 − x ) where x is the share of non-traded
                                         s       s         s
goods in consumption.
38                                                       Inﬂation in open economies

It follows that we,t and mct are cointegrated, that the diﬀerence between we,t
and mct has a ﬁnite variance, and that deviations from the main course will
lead to equilibrium correction in we,t (see Nymoen 1989a and Rødseth and
Holden 1990).
    Hypothetically, if shocks were switched oﬀ from period 0 onwards, the wage
level would follow the deterministic function
E[we,t | mc0 ] = me + (gf + gae )t + mc0 ,        mc0 = pf0 + ae,0 ,
                                                                (t = 1, 2, . . .).
                                                                          (3.9)
The variance of we,t is unbounded, reﬂecting the stochastic trends in produc-
tivity and foreign prices, thus we,t ∼ I(1).
    In his 1977 paper, Aukrust identiﬁes the ‘controlling mechanism’ in
equation (3.4) as fundamental to his theory:
The proﬁtability of the E industries is a key factor in determining the wage level of
the E industries: mechanism are assumed to exist which ensure that the higher the
proﬁtability of the E industries, the higher their wage level; there will be a tendency
of wages in the E industries to adjust so as to leave actual proﬁts within the E
industries close to a ‘normal’ level (for which, however, there is no formal deﬁnition).
(Aukrust 1977, p. 113)

In our reconstruction of the theory, the normal rate of proﬁt is simply
1 − me . Aukrust also carefully states the long-term nature of his hypothesised
relationship:
The relationship between the ‘proﬁtability of E industries’ and the ‘wage level of E
industries’ that the model postulates, therefore, is certainly not a relation that holds
on a year-to-year basis. At best it is valid as a long-term tendency and even so only
with considerable slack. It is equally obvious, however, that the wage level in the E
industries is not completely free to assume any value irrespective of what happens
to proﬁts in these industries. Indeed, if the actual proﬁts in the E industries deviate
much from normal proﬁts, it must be expected that sooner or later forces will be set
in motion that will close the gap. (Aukrust 1977, pp. 114–15)

Aukrust goes on to specify ‘three corrective mechanisms’, namely wage negoti-
ations, market forces (wage drift, demand pressure) and economic policy. If we
in these quotations substitute ‘considerable slack’ with ‘υ1,t being autocorrel-
ated but I(0)’, and ‘adjustment’ and ‘corrective mechanism’ with ‘equilibrium
correction’, it is seen how well the concepts of cointegration and equilibrium
correction match the gist of Aukrust’s original formulation. Conversely, the
use of growth rates rather than levels, which became common in both text
book expositions of the theory and in econometric work claiming to test
it (see Section 3.2.3) misses the crucial point about a low frequency, long-
term relationship between foreign prices, productivity, and exposed sector
wage-setting.
    Aukrust coined the term ‘wage corridor’ to represent the development of
wages through time and used a graph similar to Figure 3.1 to illustrate his ideas.
The main course deﬁned by equation (3.9) is drawn as a straight line since
the wage is measured in logarithmic scale. The two dotted lines represent
3.2 Cointegration                                                                    39

                                              ‘Upper boundary’


                                                                    Main course


                    Log wage level


                                                                 ‘Lower boundary’




                                        0
                                                      Time

     Figure 3.1. The ‘wage corridor’ in the Norwegian model of inﬂation

what Aukrust called the ‘elastic borders of the wage corridor’. In economet-
ric terminology, the vertical distance between the lines represents a conﬁdence
interval, for example, E[wt |mc0 ] ± 2 standard errors, where the standard errors
are conditional on an initial value mc0 . The unconditional variance does not
exist, so the wage corridor widens up as we move away from mc0 .
    Equation (3.5) incorporates two other substantive hypotheses in the
Norwegian model of inﬂation: stationarity of the relative wage between the two
sectors (normalised to unity), and wage leadership of the exposed sector. Thus,
the sheltered sector is a wage follower, with exposed sector wage determinants
also in eﬀect shaping sheltered sector wage development.
    Equation (3.6) allows a separate trend in labour productivity in the
sheltered sector and equation (3.7) contains the stationarity hypothesis of the
sheltered sector wages share. Given the nature of wage-setting and the exogen-
ous technology trend, equation (3.7) implies that sheltered sector price-setters
mark up their prices on average variable costs. Thus sheltered sector price
formation adheres to so-called normal cost pricing.
    To summarise, the three cointegration propositions of the reconstructed
main-course model are:
               H1mc                  we,t − qe,t − ae,t = me + υ4,t , υ4,t ∼ I(0),
               H2mc                  we,t = ws,t + υ5,t , υ5,t ∼ I(0),
               H3mc                  ws,t − qs,t − as,t = ms + υ7,t , υ7,t ∼ I(0).
H1mc states that the exposed sector wage level cointegrates with the sectorial
price and productivity levels, with unit coeﬃcients and for a constant mean
of the wage share, me . However, the institutional arrangements surrounding
wage-setting change over time, so heuristically me may be time dependent.
For example, bargaining power and unemployment insurance systems are not
constant factors but evolve over time, sometimes abruptly too. In his 1977
paper, Aukrust himself noted that the assumption of a completely constant
mean wage share over long time spans was probably not tenable. However, no
internal inconsistency is caused by replacing the assumption of unconditionally
40                                                     Inﬂation in open economies

stationary wage shares with the weaker assumption of conditional stationarity.
Thus, we consider in the following an extended main-course model where the
mean of the wage share is a linear function of exogenous I(0) variables and of
deterministic terms.
    For example, a plausible generalisation of H1mc is represented by

           H1gmc    we,t − qe,t − ae,t = me,0 + βe,1 ut + βe,2 Dt + υ4,t ,


where ut is the log of the rate of unemployment and Dt is a dummy (vector)
that along with ut help explain shifts in the mean of the wage share, thus in
H1gmc , me,0 denotes the mean of the cointegration relationship, rather than of
the wage share itself. Consistency with the main-course theory requires that the
rate of unemployment is interpreted as I(0), but not necessarily stationary, since
ut may in turn be subject to changes in its mean, that is, structural breaks.
Graphically, the main course in Figure 3.1 is no longer necessarily a straight
unbroken line (unless the rate of unemployment and Dt stay constant for the
whole time period considered).
    Other candidate variables for inclusion in an extended main-course hypo-
thesis are the ratio between unemployment insurance payments and earnings
(the so-called replacement ratio) and variables that represent unemployment
composition eﬀects (unemployment duration, the share of labour market
programmes in total unemployment); see Nickell (1987), Calmfors and
Forslund (1991). In Section 3.5 we shall see that in this extended form, the
cointegration relationship implied by the main-course model is fully consistent
with modern wage bargaining theory.
    Following the inﬂuence of trade union and bargaining theory, it has also
become popular to estimate real-wage equations that include a so-called wedge
between real wages and the consumer real wage, that is, pt − qe,t in the present
framework. However, inclusion of a wedge variable in the cointegrating wage
equation of an exposed sector is inconsistent with the main-course hypothesis,
and ﬁnding such an eﬀect empirically may be regarded as evidence against
the framework. On the other hand, there is nothing in the main-course theory
that rules out substantive short-run inﬂuences of the CPI, that is, of ∆pt in
a dynamic wage equation. In Chapter 6 we analyse a model that contains this
form of realistic short-run dynamics.
    The other two cointegration propositions (H2mc and H3mc ) in Aukrust’s
model have not received nearly as much attention as H1mc in empirical research,
but exceptions include Rødseth and Holden (1990) and Nymoen (1991). In part,
this is due to lack of high quality wage and productivity data for the private
service and retail trade sectors. Another reason is that both economists and pol-
icy makers in the industrialised countries place most emphasis on understand-
ing and evaluating wage-setting in manufacturing, because of its continuing
importance for the overall economic performance.
3.2 Cointegration                                                                     41

3.2.1      Causality
The main-course model speciﬁes the following three hypothesis about causation:

                                 H4mc    mct → we,t ,
                                 H5mc    we,t → ws,t ,
                                 H6mc    ws,t → pt ,

where → denotes one-way causation. Causation may be contemporaneous or
of the Granger-causation type. In any case the deﬁning characteristic of the
main-course model is that there is no feedback between, for example, domestic
cost of living (pt ) and the wage level in the exposed sector. In his 1977 paper,
Aukrust sees the causation part of the theory (H4mc –H6mc ) as just as important
as the long-term ‘controlling mechanism’ (H1mc –H3mc ). If anything, Aukrust
seems to put extra emphasis on the causation part. For example, he argues
that exchange rates must be controlled and not ﬂoating, otherwise pft (foreign
prices denoted in domestic currency) is not a pure causal factor of the domestic
wage level in equation (3.2), but may itself reﬂect deviations from the main
course, thus

In a way, . . ., the basic idea of the Norwegian model is the ‘purchasing power doctrine’
in reverse: whereas the purchasing power doctrine assumes ﬂoating exchange rates
and explains exchange rates in terms of relative price trends at home and abroad, this
model assumes controlled exchange rates and international prices to explain trends in
the national price level. If exchange rates are ﬂoating, the Norwegian model does not
apply. (Aukrust 1977, p. 114)

From a modern viewpoint this seems to be unduly restrictive since the cointeg-
ration part of the model can be valid even if Aukrust’s one-way causality is
untenable. Consider for example, H1mc , the main-course proposition for the
exposed sector, which in modern econometric methodology implies rank reduc-
tion in the system made up of we,t , qe,t , and ae,t , but not necessarily one-way
causation. Today, we would regard it as both meaningful and signiﬁcant if an
econometric study showed that H1mc (or more realistically H1gmc ) constituted
a single cointegrating vector between the three I(1) variables {we,t , qe,t , ae,t },
even if qe,t and ae,t , not only we,t , contribute to the correction of deviations
from the main course. Clearly, we would no longer have a ‘wage model’ if
wt was found to be weakly exogenous with respect to the parameters of the
cointegrating vector, but that is a very special case, just as H4mc is a very
strict hypothesis. Between these polar points there are many constellations
with two-way causation that make sense in a dynamic wage–price model.
    In sum, although care must be taken when we attempt to estimate a
long-run wage equation with data from diﬀerent exchange rate regimes, it seems
unduly restrictive a priori to restrict the relevance of Aukrust’s model to a ﬁxed
exchange rate regime.
42                                                          Inﬂation in open economies

3.2.2        Steady-state growth
In a hypothetical steady-state situation, with all shocks represented by
(i = 1, 2, . . . , 7) switched oﬀ, the model can be written as a set of (deterministic)
equations between growth rates
                              ∆we,t = gf + gae ,                                     (3.10)
                              ∆ws,t = ∆we,t ,                                        (3.11)
                               ∆qs,t = ∆ws,t − gas ,                                 (3.12)
                                ∆pt = φgf + (1 − φ)∆qs,t .                           (3.13)
Most economist are familiar with this ‘growth rate’ version of the model, often
referred to as the ‘Scandinavian model of inﬂation’. The model can be solved
for the domestic rate of inﬂation:
                             ∆pt = gf + (1 − φ)(gae − gas ),
implying a famous result of the Scandinavian model, namely that a higher
productivity growth in the exposed sector ceteris paribus implies increased
domestic inﬂation.

3.2.3        Early empiricism
In the reconstruction of the model that we have undertaken above, no inconsist-
encies exist between Aukrust’s long-term model and the steady-state model in
growth-rate form. However, economists and econometricians have not always
been precise about the steady-state interpretation of the system (3.10)–(3.13).
For example, it seems to have inspired the use of diﬀerenced-data models
in empirical tests of the Scandinavian model—Nordhaus (1972) is an early
example.5
    With the beneﬁt of hindsight, it is clear that growth rate regressions
only superﬁcially capture Aukrust’s ideas about long-run relationships between
price and technology trends: by diﬀerencing, the long-run frequency is removed
from the data used in the estimation; see, for example, Nymoen (1990: ch. 1).
Consequently, the regression coeﬃcient of, for example, ∆ae,t in a model of
∆we,t does not represent the long-run elasticity of the wage with respect to pro-
ductivity. The longer the adjustment lags, the larger the bias caused by wrongly
identifying coeﬃcients on growth-rate variables with true long-run elasticities.
Since there are typically long adjustment lags in wage-setting, even studies
that use annual data typically ﬁnd very low coeﬃcients on the productivity
growth terms.
    The use of diﬀerenced data clearly reduced the chances of ﬁnding formal
evidence of the long-term propositions of Aukrust’s theory. However, at
the same time, the practice of diﬀerencing the data also meant that one
     5 See Hendry (1995a: ch. 7.4) on the role of diﬀerenced data models in econometrics.
3.2 Cointegration                                                             43

avoided the pitfall of spurious regressions (see Granger and Newbold 1974).
For example, using conventional tables to evaluate ‘t-values’ from levels regres-
sion, it would have been all too easy to ﬁnd support for a relationship
between the main course and the level of wages, even if no such relation-
ship existed. Statistically valid testing of the Norwegian model had to await
the arrival of cointegration methods and inference procedures for integrated
data (see Nymoen 1989a and Rødseth and Holden 1990). Our evaluation of
the validity of the extended main-course model for Norwegian manufactur-
ing is found in Section 5.5, where we estimate a cointegrating relationship for
Norwegian manufacturing wages, and in Section 6.9.2, where a dynamic model
is formulated.


3.2.4     Summary
Unlike the other approaches to modelling wages and prices that we dis-
cuss in the next chapters, Aukrust’s model (or the Scandinavian model for
that matter) is seldom cited in the current literature. There are two rea-
sons why this is unfortunate. First, Aukrust’s theory is a rare example of
a genuinely macroeconomic theory that deals with aggregates which have
precise and operational deﬁnitions. Moreover, Aukrust’s explanation of the
hypothesised behavioural relationships is ‘thick’, that is, he relies on a broad
set of formative forces which are not necessarily reducible to speciﬁc (‘thin’)
models of individual behaviour. Second, the Norwegian model of inﬂation sees
inﬂation as a many-faceted system property, thus avoiding the one-sidedness
of many more recent theories that seek to pinpoint one (or a few) factors
behind inﬂation (e.g. excess money supply, excess product demand, too low
unemployment, etc.).
    In the typology of Rorty (1984), our reconstruction of Aukrust’s model
has used elements both from rational reconstructions, which present past ideas
with the aid of present-day concepts and methods, and historical reconstruc-
tions, which understand older theories in the context of their own times.
Thus, our brief excursion into the history of macroeconomic thought is trad-
itional and pluralistic as advocated by Backhouse (1995: ch. 1). Appraisal in
terms of modern concepts hopefully communicates the set of testable hypoth-
eses emerging from Aukrust’s model to interested practitioners. On the other
hand, Aukrust’s taciturnity on the relationship between wage-setting and the
determination of long-run unemployment is clearly conditioned by the stable
situation of near full employment in the 1960s. In Chapter 4, we show how
a Phillips curve can be combined with Aukrust’s model so that unemployment
is endogenised. We will also show that later models of the bargaining type,
can be viewed as extensions (and new derivations) rather than contradictory
to Aukrust’s contribution.
This page intentionally left blank
                                          4

               The Phillips curve

      The Phillips curve ranges as the dominant approach to wage and price
      modelling in macroeconomics. In the United States, in particular, it
      retains its role as the operational framework for both inﬂation forecast-
      ing and for estimating the NAIRU. In this chapter, we will show that the
      Phillips curve is consistent with cointegration between prices, wages, and
      productivity, and a stationary rate of unemployment, and hence there is
      common ground between the Phillips curve and the Norwegian model of
      inﬂation of the previous chapter.



4.1      Introduction
The Norwegian model of inﬂation and the Phillips curve are rooted in the same
epoch of macroeconomics. But while Aukrust’s model dwindled away from the
academic scene, the Phillips curve literature ‘took oﬀ’ in the 1960s and achieved
immense impact over the next four decades. Section 4.1.1 records some of the
most noteworthy steps in the developments of the Phillips curve. In the 1970s,
the Phillips curve and Aukrust’s model were seen as alternative, representing
‘demand’ and ‘supply’ model of inﬂation respectively (see Frisch 1977). How-
ever, as pointed out by Aukrust (1977), the diﬀerence between viewing the
labour market as the important source of inﬂation and the Phillips curve’s
focus on product market, is more a matter of emphasis than of principle, since
both mechanisms may be operating together.1 In Section 4.2, we show formally
how the two approaches can be combined by letting the Phillips curve take the
role of a short-run relationship of nominal wage growth, while the main-course
thesis holds in the long run.
    This chapter also addresses issues which are central to modern applications
of the Phillips curve: its representation in a system of cointegrated variables;
                             1 See Aukrust (1977, p. 130).




                                          45
46                                                            The Phillips curve

consistency or otherwise with hysteresis and mean shifts in the rate of unem-
ployment (Section 4.3); the uncertainty of the estimated Phillips curve NAIRU
(Section 4.4); and the status of the inverted Phillips curve, that is, Lucas’s
supply curve (Section 4.5.2). Sections 4.1.1–4.5 cover these theoretical and
methodological issues while Section 4.6 shows their practical relevance in a
substantive application to the Norwegian Phillips curve.

4.1.1     Lineages of the Phillips curve
Following Phillips’ (1958) discovery of an empirical regularity between the rate
of unemployment and money wage inﬂation in the United Kingdom, the Phillips
curve was integrated in macroeconomics through a series of papers in the 1960s.
Samuelson and Solow (1960) interpreted it as a tradeoﬀ facing policy makers,
and Lipsey (1960) was the ﬁrst to estimate Phillips curves with multivariate
regression techniques. Lipsey interpreted the relationship from the perspective
of classical price dynamics, with the rate of unemployment acting as a proxy for
excess demand and friction in the labour market. Importantly, Lipsey included
consumer price growth as an explanatory variable in his regressions, and thus
formulated what has become known as the expectations augmented Phillips
curve. Subsequent developments include the distinction between the short-run
Phillips curve, where inﬂation deviates from expected inﬂation, and the long-
run Phillips curve, where inﬂation expectations are fulﬁlled. Finally, the concept
of a natural rate of unemployment was deﬁned as the steady-state rate of
unemployment corresponding to a vertical long-run curve (see Phelps 1968 and
Friedman 1968).
    The relationship between money wage growth and economic activity also
ﬁgures prominently in new classical macroeconomics; see, for example, Lucas
and Rapping (1969, 1970), Lucas (1972). However, in new classical economics
the causality in Phillips’ original model was reversed: if a correlation between
inﬂation and unemployment exists at all, the causality runs from inﬂation to
the level of activity and unemployment. Lucas’s and Rapping’s inversion is
based on the thesis that the level of prices is anchored in a quantity theory
relationship and an autonomous money stock. Price and wage growth is then
determined from outside the Phillips curve, so the correct formulation would
be to have the rate of unemployment on the left-hand side and the rate of wage
growth (and/or inﬂation) on the right-hand side.
    Lucas’s 1972 paper provides another famous derivation based on rational
expectations about uncertain relative product prices. If expectations are ful-
ﬁlled (on average), aggregate supply is unchanged from last period. However,
if there are price surprises, there is a departure from the long-term mean level
of output. Thus, we have the ‘surprise only’ supply relationship.
    The Lucas supply function is the counterpart to the vertical long-run curve
in Lipsey’s expectations augmented Phillips curve, but derived with the aid of
microeconomic theory and the rational expectations hypothesis. Moreover, for
4.2 Cointegration, causality, and the Phillips curve natural rate                           47

conventional speciﬁcations of aggregate demand (see, for example, Romer 1996:
ch. 6.4), the model implies a positive association between output and inﬂation,
or a negative relationship between the rate of unemployment and inﬂation.
Thus, there is also a new classical correspondence to the short-run Phillips
curve. However, the Lucas supply curve when applied to data and estimated by
ordinary least squares (OLS), does not represent a causal relationship that can
be exploited by economic policy makers. On the contrary, it will change when,
for example, the money supply is increased in order to stimulate output, in a
way that leaves the policy without an eﬀect on real output or unemployment.
This is the Lucas critique (Lucas 1976), which was formulated as a critique
of the Phillips curve inﬂation–unemployment tradeoﬀ, which ﬁgured in the
academic literature, as well as in the macroeconometric models of the 1970s (see
Wallis 1995). The force of the critique, however, stems from its generality: it is
potentially damaging for all conditional econometric models; see Section 4.5.
    The causality issue also crops up in connection with the latest versions of the
Phillips curve—the forward looking New Keynesian variety—which we return to
in Chapter 7.2 In the United States, an empirical Phillips curve version, dubbed
‘the triangle model of inﬂation’, has thrived in spite of the Lucas critique—see
Gordon (1983, 1997) and Staiger et al. (2001) for recent contributions. As we
will argue below, one explanation of the viability of the US Phillips curve is
that the shocks to the rate of unemployment have been of an altogether smaller
order of magnitude than in European countries.



4.2       Cointegration, causality, and the Phillips
          curve natural rate
As indicated earlier, there are many ways that a Phillips curve for an open econ-
omy can be derived from economic theory. Our appraisal of the Phillips curve in
this section builds on Calmfors (1977), who reconciled the Phillips curve with
the Scandinavian model of inﬂation. We want to go one step further, however,
and incorporate the Phillips curve in a framework that allows for integrated
wage and price series. Reconstructing the model in terms of cointegration and
causality reveals that the Phillips curve version of the main-course model forces
a particular equilibrium correction mechanism on the system. Thus, while it is
consistent with Aukrust’s main-course theory, the Phillips curve is also a spe-
cial model thereof, since it includes only one of the many wage stabilising
mechanisms discussed by Aukrust.

   2 The main current of theoretical work is deﬁnitively guided by the search for ‘microfounda-

tions for macro relationships’ and imposes an isomorphism between micro and macro. An
interesting alternative approach is represented by Ferri (2000) who derives the Phillips curve
as a system property.
48                                                                 The Phillips curve

   Without loss of generality we concentrate on the wage Phillips curve and
recall that, according to Aukrust’s theory, it is assumed that (using the same
symbols as in Chapter 3):

1. (we,t −qe,t −ae,t ) ∼ I(0) and ut ∼ I(0), possibly after removal of deterministic
   shifts in their means; and
2. the causal structure is ‘one way’ as represented by H4mc and H5mc in
   Chapter 3.

Consistency with the assumed cointegration and causality requires that there
exists an equilibrium-correction model (EqCM hereafter) for the nominal
wage rate in the exposed sector. Assuming ﬁrst-order dynamics for simplicity,
a Phillips curve EqCM system is deﬁned by the following two equations:

          ∆wt = βw0 − βw1 ut + βw2 ∆at + βw3 ∆qt + εw,t ,
                0 ≤ βw1 , 0 < βw2 < 1, 0 < βw3 < 1,                               (4.1)
          ∆ut = βu0 − βu1 ut−1 + βu2 (w − q − a)t−1 − βu3 zu,t + εu,t ,
                  0 < βu1 < 1,     βu2 > 0,    βu3 ≥ 0,                           (4.2)

where we have simpliﬁed the notation somewhat by dropping the ‘e’ subscript.3
∆ is the diﬀerence operator. εw,t and εu,t are innovations with respect to an
information set available in period t − 1, denoted It−1 .4 Equation (4.1) is the
short-run Phillips curve, while (4.2) represents the basic idea that proﬁtability
(in the e-sector) is a factor that explains changes in the economy-wide rate
of unemployment. zu,t represents (a vector of) other I(0) variables (and deter-
ministic terms) which ceteris paribus lower the rate of unemployment. zu,t will
typically include a measure of the growth rate of the domestic economy, and
possibly factors connected with the supply of labour. Insertion of (4.2) into
(4.1) is seen to give an explicit EqCM for wages.
    To establish the main-course rate of equilibrium unemployment, we
rewrite (4.1) as

                ∆wt = −βw1 (ut − ŭ) + βw2 ∆at + βw3 ∆qt + εw,t ,                 (4.3)

where
                                             βw0
                                      ŭ =                                        (4.4)
                                             βw1
is the rate of unemployment which does not put upward or downward pressure
on wage growth. Taking unconditional means, denoted by E, on both sides

 3 Alternatively, given H2
                        mc , ∆wt represents the average wage growth of the two sectors.
 4 The rate of unemployment enters linearly in many US studies; see, for example, Fuhrer

(1995). For most other datasets, however, a concave transform improves the ﬁt and the
stability of the relationship; see, for example, Nickell (1987) and Johansen (1995a).
4.2 Cointegration, causality, and the Phillips curve natural rate                       49

of (4.3) gives
       E[∆wt ] − gf − ga = −βw1 E[ut − ŭ] + (βw2 − 1)ga + (βw3 − 1)gf .
Using the assumption of a stationary wage share, the left-hand side is zero.
Thus, using ga and gf to denote the constant steady-state growth rates of
productivity and foreign prices, we obtain
                                                           
                                     βw2 − 1      βw3 − 1
               E[ut ] ≡ uphil = ŭ +         ga +         gf ,         (4.5)
                                       βw1         βw1
as the solution for the main-course equilibrium rate of unemployment which
we denote uphil . The long-run mean of the wage share is consequently
                                                      βu0   βu1 phil βu3
          E[wt − qt − at ] ≡ wshphil = −                  +     u   +     E[zu,t ].   (4.6)
                                                      βu2   βu2       βu2
Moreover, uphil and wshphil represent the unique and stable steady state of the
corresponding pair of deterministic diﬀerence equations.
    The well-known dynamics of the Phillips curve is illustrated in Figure 4.1.
Assume that the economy is initially running at a low level of unemployment,
that is, u0 in the ﬁgure. The short-run Phillips curve (4.1) determines the
rate of wage inﬂation ∆w0 . The wage share consistent with equation (4.2) is
above its long-run equilibrium, implying that unemployment starts to rise and
wage growth is reduced along the Phillips curve. The steep Phillips curve is
deﬁned for the case of ∆wt = ∆qt + ∆at . The slope of this curve is given by
−βw1 /(1 − βw3 ), and it has been dubbed the long-run Phillips curve in the
literature. The stable equilibrium is attained when wage growth is equal to the
steady-state growth of the main course, that is, gf + ga and the corresponding




                                          Long-run Phillips curve
                             ∆w0
             Wage growth




                           gf + ga




                                     u0   u phil
                                                   Log rate of unemployment

     Figure 4.1. Open economy Phillips curve dynamics and equilibrium
50                                                                The Phillips curve

level of unemployment is given by uphil . The issue about the slope of the long-
run Phillips curve is seen to hinge on the coeﬃcient βw3 , the elasticity of wage
growth with respect to the product price. In the ﬁgure, the long-run curve is
downward sloping, corresponding to βw3 < 1 which is conventionally referred
to as dynamic inhomogeneity in wage-setting. The converse, dynamic homo-
geneity, implies βw3 = 1 and a vertical Phillips curve. Subject to dynamic
homogeneity, the equilibrium rate uphil is independent of world inﬂation gf .
     The slope of the long-run Phillips curve represented one of the most debated
issues in macroeconomics in the 1970s and 1980s. One argument in favour of
a vertical long-run Phillips curve is that it is commonly observed that work-
ers are able to obtain full compensation for CPI-inﬂation. Hence βw3 = 1
is a reasonable restriction on the Phillips curve, at least if ∆qt is interpreted
as an expectations variable. The downward sloping long-run Phillips curve has
also been denounced on the grounds that it gives a too optimistic picture of
the powers of economic policy: namely that the government can permanently
reduce the level of unemployment below the natural rate by ‘ﬁxing’ a suit-
ably high level of inﬂation (see, for example, Romer 1996, ch. 5.5). In the
context of an open economy this discussion appears to be somewhat exagger-
ated, since a long-run tradeoﬀ between inﬂation and unemployment in any
case does not follow from the premise of a downward-sloping long-run curve.
Instead, as shown in Figure 4.1, the steady-state level of unemployment is deter-
mined by the rate of imported inﬂation gf and exogenous productivity growth,
ga . Neither of these are normally considered as instruments (or intermediate
targets) of economic policy.5
     In the real economy, cost-of-living considerations plays a signiﬁcant role in
wage-setting; see, for example, Carruth and Oswald (1989, ch. 3) for a review.
Thus, in applied econometric work, one usually includes current and lagged
CPI-inﬂation, reﬂecting the weight put on cost-of-living considerations in actual
wage bargaining situations. To represent that possibility, consider the following
system (4.7)–(4.9):

           ∆wt = β́w0 − β́w1 ut + β́w2 ∆at + β́w3 ∆qt + β́w4 ∆pt + έwt ,        (4.7)
           ∆ut = βu0 − βu1 ut−1 + βu2 (w − q − a)t−1 − βu3 zt + εut ,            (4.8)
           ∆pt = βp1 (∆wt − ∆at ) + βp2 ∆qt + εp,t .                             (4.9)
The ﬁrst equation augments (4.1) with the change in consumer prices ∆pt ,
with coeﬃcient 0 ≤ β́w4 ≤ 1. To distinguish formally between this equa-
tion and (4.1), we use an accent above the other coeﬃcients as well (and
above the disturbance term). The second equation is identical to the unemploy-
ment equation (4.2). The last stochastic price equation combines the stylised
deﬁnition of consumer prices in (3.8) with the twin assumption of stationarity

  5 To aﬀect uphil , policy needs to incur a higher or lower permanent rate of currency

depreciation.
4.2 Cointegration, causality, and the Phillips curve natural rate                       51

of the sheltered sector wages share and wage leadership of the exposed
sector.6
    Using (4.9) to eliminate ∆pt in (4.7) brings us back to (4.1), with coeﬃcients
and εwt suitably redeﬁned. Thus, the expression for the equilibrium rate uphil
in (4.5) applies as before. However, it is useful to express uphil in terms of the
coeﬃcients of the extended system (4.7)–(4.9):

                            β́w2 − 1          β́w3 + β́w4 (βp1 + βp2 ) − 1
             uphil = ŭ +              ga +                                  gf ,   (4.10)
                              β́w1                       β́w1

since there are now two homogeneity restrictions needed to ensure a vertical
long-run Phillips curve: namely β́w3 + β́w4 = 1 and βp1 + βp2 = 1.
    Compared to the implicit dynamics of Chapter 3, the open economy wage
Phillips curve system represents a full speciﬁcation of the dynamics of the
Norwegian model of inﬂation. Clearly, the dynamic properties of the model
apply to other versions of the Phillips curve as well. In particular, all Phillips
curve systems imply that the natural rate (or NAIRU) of unemployment is
a stable stationary solution. As a single equation, the Phillips curve equation
itself is dynamically unstable for a given rate of unemployment. Dynamic stabil-
ity of the wage share and the rate of unemployment hinges on the equilibrating
mechanism embedded in the equation for the rate of unemployment. In that
sense, a Phillips curve speciﬁcation of wage formation cannot logically accom-
modate an economic policy that targets the level of (the rate of) unemployment,
since only the natural rate of unemployment is consistent with a stable wage
share. Any other (targeted) level leads to an ever increasing or ever declining
wage share.
    The question about the dynamic stability of the natural rate (or NAIRU) is
of course of great interest, and cannot be addressed in the incomplete Phillips
curve system, that is, by estimating a single-equation Phillips curve model.
Nevertheless, as pointed out by Desai (1995), there is a long-standing practice
of basing the estimation of the NAIRU on the incomplete system. For United
States, the question of correspondence with a steady state may not be an issue:
Staiger et al. (1997) is an example of an important study that follows the trad-
ition of estimating only the Phillips curve (leaving the equilibrating mechanism,
for example, (4.2) implicit). For other countries, European in particular, where
the stationarity of the rate of unemployment is less obvious, the issue about
the correspondence between the estimated NAIRUs and the steady state is
a more pressing issue.
    In the following sections, we turn to two separate aspects of the Phillips
curve NAIRU. First, Section 4.3 discusses how much ﬂexibility and time

 6 Hence, the ﬁrst term in (4.9) reﬂects normal cost pricing in the sheltered sector. Also,

as a simpliﬁcation, we have imposed identical productivity growth in the two sectors,
∆ae,t = ∆as,t ≡ ∆at .
52                                                           The Phillips curve

dependency one can allow to enter into NAIRU estimates, while still claim-
ing consistency with the Phillips curve framework. Second, in Section 4.4 we
discuss the statistical problems of measuring the uncertainty of an estimated
time independent NAIRU.


4.3     Is the Phillips curve consistent with
        persistent changes in unemployment?
In the expressions for the main-course NAIRU (4.5) and (4.10), uphil depends
on parameters of the wage Phillips curve (4.1) and exogenous growth rates. The
coeﬃcients of the unemployment equation do not enter into the natural rate
NAIRU expression. In the other version of the Phillips curve, the expression
for the NAIRU depends on parameters of price-setting as well as wage-setting,
that is, the model is speciﬁed as a price Phillips curve rather than a wage
Phillips curve. But the NAIRU expression from a price Phillips curve remains
independent of parameters from equation (4.2) (or its counterpart in other
speciﬁcations).
    The fact that an important system property (the equilibrium of unem-
ployment) can be estimated from a single equation goes some way towards
explaining the popularity of the Phillips curve model. Nevertheless, results
based on analysis of the incomplete system gives limited information. In par-
ticular, a single-equation analysis gives insuﬃcient information of the dynamic
properties of the system. First, unless the Phillips curve is estimated jointly
with equation (4.2), dynamic stability cannot be tested, and the correspond-
ence between uphil and the steady state of the system cannot be asserted. Thus,
single equation estimates of the NAIRU are subject to the critique that the
correspondence principle may be violated (see Samuelson 1941). Second, even
if one is convinced a priori that uphil corresponds to the steady state of the
system, the speed of adjustment towards the steady state is clearly of interest
and requires estimation of equation (4.2) as well as of the Phillips curve (4.1).
    During the last 20–25 years of the previous century, European rates of
unemployment rose sharply and showed no sign of reverting to the levels of the
1960s and 1970s. Understanding the stubbornly high unemployment called for
models that (1) allow for long adjustments lags around a constant natural rate,
or (2) allow the equilibrium to change. A combination of the two is of course
also possible.
    Simply by virtue of being a dynamic system, the Phillips curve model
accommodates slow dynamics. In principle, the adjustment coeﬃcient βu1 in
the unemployment equation (4.2) can be arbitrarily small—as long as it is
not zero the uphil formally corresponds to the steady state of the system.
However, there is a question of how slow the speed of adjustment can be before
the concept of equilibrium becomes undermined ‘from within’. According to
the arguments of Phelps and Friedman, the natural rate ought to be quite
4.3 Is the Phillips curve consistent with persistent changes in unemployment? 53

stable, and it should be a strong attractor of the actual rate of unemployment
(see Phelps 1995). However, the experience of the 1980s and 1990s has taught us
that the natural rate is at best a weak attractor. There are important practical
aspects of this issue too: policy makers, pondering the prospects after a nega-
tive shock to the economy, will ﬁnd small comfort in learning that eventually
the rate of unemployment will return to its natural rate, but only after 40 years
or more! In Section 4.6 we show how this kind of internal inconsistency arises
in an otherwise quite respectable empirical version of the Phillips curve system
(4.1) and (4.2).
    Moreover, the Phillips curve framework oﬀers only limited scope for an eco-
nomic explanation of the regime shifts that sometimes occur in the mean of the
rate of unemployment. True, expression (4.10) contains a long-run Okun’s law
type relationship between the rate of unemployment and the rate of produc-
tivity growth. However, it seems somewhat incredible that changes in the real
growth rate ga alone should account for the sharp and persistent rises in the
rate of unemployment experienced in Europe. A nominal growth rate like gf
can of course undergo sharp and large rises, but for those changes to have an
impact on the equilibrium rate requires a downward sloping long-run Phillips
curve—which many macroeconomists will not accept.
    Thus, the Phillips curve is better adapted to a stable regime characterised
by a modest adjustment lag around a fairly stable mean rate of unemploy-
ment, than to the regime shift in European unemployment of the 1980s and
1990s. This is the background against which the appearance of new models
in the 1980s must be seen, that is, models that promised to be able to explain
the shifts in the equilibrium rate of unemployment (see Backhouse 2000), and
there is now a range of speciﬁcations of how the structural characteristics of
labour and commodity markets aﬀect the equilibrium paths of unemployment
(see Nickell 1993 for a survey and Chapter 5 of this book). Arguably how-
ever, none of the new models have reached the status of being an undisputed
consensus model that once was the role of the Phillips curve.
    So far we have discussed permanent changes in unemployment as being
due to large deterministic shifts that occur intermittently, in line with our
maintained view of the rate of unemployment as I(0) but subject to (infrequent)
structural breaks. An alternative view, which has become inﬂuential in the
United States, is the so-called time varying NAIRU: cf. Gordon (1997), Gruen
et al. (1999), and Staiger et al. (1997). The basic idea is that the NAIRU reacts
to small supply-side shocks that occur frequently. The following modiﬁcations
of equation (4.3) deﬁnes the time varying NAIRU

              ∆wt = −βw1 (ut − ŭt ) + βw2 ∆at + βw3 ∆qt + εwt ,          (4.11)
                 ŭt = ŭt−1 + εu,t .                                     (4.12)

The telling diﬀerence is that the natural rate ŭ is no longer a time-independent
parameter, but a stochastic parameter that follows the random walk (4.12),
54                                                                    The Phillips curve

and a disturbance εu,t which in this model represents small supply-side shocks.
When estimating this pair of equations (by the Kalman ﬁlter) the standard
error of εu,t typically is limited at the outset, otherwise ŭt will jump up and
down and soak up all the variation in ∆wt left unexplained by the conventional
explanatory variables. Hence, time varying NAIRU estimates tend to reﬂect
how much variability a researcher accepts and ﬁnds possible to communicate.
Logically, the methodology implies a unit root, both in the observed rate of
unemployment and in the NAIRU itself. Finally, the practical relevance of this
framework seems to be limited to the United States, where there are few big
and lasting shifts in the rate of unemployment.
    Related to the time varying NAIRU is the concept of hysteresis. Following
Blanchard and Summers (1986), economists have invoked the term unemploy-
ment ‘hysteresis’ for the case of a unit root in the rate of unemployment, in
which case the equilibrium rate might be said to become identical to the lagged
rate of unemployment. However, Røed (1994) instructively draws the distinc-
tion between genuine hysteresis as a non-linear and multiple equilibrium phe-
nomenon, and the linear property of a unit root. Moreover, Cross (1995) have
convincingly shown that ‘hysteresis’ is not actually hysteresis (in its true mean-
ing, as a non-linear phenomenon), and that proper hysteresis creates a time
path for unemployment which is inconsistent with the natural rate hypothesis.



4.4     Estimating the uncertainty of the Phillips
        curve NAIRU
This section describes three approaches for estimation of a ‘conﬁdence region’ of
a (time independent) Phillips curve NAIRU. As noted by Staiger et al. (1997)
the reason for the absence of conﬁdence intervals in most NAIRU calculations
has to do with the fact that the NAIRU (e.g. in (4.4)) is a non-linear func-
tion of the regression coeﬃcients. Nevertheless, three approaches can be used
to construct conﬁdence intervals for the NAIRU: the Wald, Fieller, and likeli-
hood ratio statistics.7 The Fieller and likelihood ratio forms appear preferable
because of their ﬁnite sample properties.
    The ﬁrst and most intuitive approach is based on the associated standard
error and t ratio for the estimated coeﬃcients, and thus corresponds to a Wald
statistic; see Wald (1943) and Silvey (1975, pp. 115–18). This method may be
characterised as follows. A wage Phillips curve is estimated in the form of (4.1)
in Section 4.2. In the case of full pass-through of productivity gains on wages,
and no ‘money illusion’, the Phillips curve NAIRU uphil is βw0 /βw1 , and its
estimated value µ̂u is β̂w0 /β̂w1 , where a circumﬂex denotes estimated values.


                    7 This section draws on Ericsson et al. (1997).
4.4 Estimating the uncertainty of the Phillips curve NAIRU                         55

As already noted, (4.1) is conveniently rewritten as:
                  ∆wt − ∆at − ∆qt = −βw1 (ut − uphil ) + εwt ,                 (4.13)
where uphil may be estimated directly by (say) non-linear least squares. The
result is numerically equivalent to the ratio β̂w0 /β̂w1 derived from the linear
estimates (β̂w0 , β̂w1 ) in (4.1). In either case, a standard error for µ̂phil can be
computed, from which conﬁdence intervals are directly obtained.
    More generally, a conﬁdence interval includes the unconstrained/most likely
estimate of uphil , which is β̂w0 /β̂w1 , and some region around that value.
Heuristically, the conﬁdence interval contains each value of the ratio that does
not violate the hypothesis
                                        βw0
                                HW :         = uphil
                                                  0                             (4.14)
                                        βw1
too strongly in the data. More formally, let FW (uphil         0 ) be the Wald-
based F -statistic for testing HW , and let Pr(·) be the probability of its
argument. Then, a conﬁdence interval of (1 − α)% is [uphil           phil
                                                              low , uhigh ] deﬁned by
          phil                phil     phil  phil
Pr(FW (u0 )) ≤ 1 − α for u0 ∈ [ulow , uhigh ].
    If βw1 , the elasticity of the rate of unemployment in the Phillips curve,
is precisely estimated, the Wald approach is usually quite satisfactory. Small
sample sizes clearly endanger estimation precision, but ‘how small is small’
depends on the amount of information ‘per observation’ and the eﬀective sample
size. However, if βw1 is imprecisely estimated (i.e. not very signiﬁcant statistic-
ally), this approach can be highly misleading. Speciﬁcally, the Wald approach
ignores how β̂w0 /β̂w1 behaves for values of β̂w1 relatively close to zero, where
‘relatively’ reﬂects the uncertainty in the estimate of βw1 . For European Phillips
curves, the βw1 estimates are typically insigniﬁcant statistically, so this concern
is germane to calculating Phillips curve natural rates for Europe. In essence,
the problem arises because µ̂u is a non-linear function of estimators (β̂w0 , β̂w1 )
that are (approximately) jointly normally distributed; see Gregory and Veall
(1985) for details.
    The second approach avoids this problem by transforming the non-linear
hypothesis (4.14) into a linear one, namely:
                            HF : βw0 − βw1 uphil
                                            0    = 0.                          (4.15)
This approach is due to Fieller (1954), so the hypothesis in (4.15) and cor-
responding F -statistic are denoted HF and FF (uphil  0 ). Because the hypothesis
(4.15) is linear in the parameters βw0 and βw1 , tests of this hypothesis are
typically well-behaved, even if β̂w1 is close to zero. Determination of conﬁdence
intervals is exactly as for the Wald approach, except that the F -statistic is
constructed for βw0 − βw1 uphil
                            0 . See Kendall and Stuart (1973, pp. 130–2) for a
summary.
    The third approach uses the likelihood ratio (LR) statistic (see Silvey
1975, pp. 108–12), to calculate the conﬁdence interval for the hypothesis HW .
56                                                                    The Phillips curve

That is, (4.13) is estimated both unrestrictedly and under the restriction HW ,
corresponding likelihoods (or residual sums of squares for single equations) are
obtained, and the conﬁdence interval is constructed from values of uphil      0    for
which the LR statistic is less than a given critical value.
    Three ﬁnal comments are in order. First, if the original model is linear in
its parameters, as in (4.1), then Fieller’s solution is numerically equivalent to
the LR one, giving the former a generic justiﬁcation. Second, if the estimated
Phillips curve does not display dynamic homogeneity, β̂w0 /β̂w1 is only a com-
ponent of the NAIRU estimate that would be consistent with the underlying
theory, cf. the general expression (4.10). This complicates the computation of
the NAIRU further, in that one should take into account the covariance of
                                               
terms like β̂w0 /β̂w1 , and (β̂w3 + β̂w4 − 1)/β̂w1 . However, unless the departure
from homogeneity is numerically large, [ulow , uphil
                                            phil
                                                   high ] may be representative of the
degree of uncertainty that is associated with the estimated Phillips curve natu-
ral rate. Third, identical statistical problems crop up in other areas of applied
macroeconomics too, for example, in the form of a ‘Monetary conditions index’;
see Eika et al. (1996).
    Section 4.6 contains an application of the Wald and Fieller/LR methods to
the Phillips curve NAIRU of the Norwegian economy.


4.5      Inversion and the Lucas critique
As pointed out by Desai (1984), the reversal of dependent and independent
variables represents a continuing controversy in the literature on inﬂation mod-
elling. Section 4.1.1 recounts how Lucas’s supply curve turns the causality of the
conventional Phillips curve on its head. Moreover, the Lucas critique states that
conditional Phillips curve models will experience structural breaks whenever
agents change their expectations, for example, following a change in economic
policy. In this section, we discuss both inversion and the Lucas critique, with
the aim of showing how the direction of the regression and the relevance of the
Lucas critique can be tested in practice.

4.5.1      Inversion
Under the assumption of super exogeneity,8 the results for a conditional econo-
metric model, for example, a conventional augmented Phillips curve, are not
invariant to a re-normalisation. One way to see this is to invoke the well-known
formula
                                  β̂ · β̂ ∗ = ryx
                                               2
                                                  ,                         (4.16)

  8 Super exogeneity is deﬁned as the joint occurrence of weak exogeneity of the explanatory

variables with respect to the parameters of interest and invariance of the parameters in
the conditional model with respect to changes in the marginal models for the explanatory
variables, see Engle et al. (1983).
4.5 Inversion and the Lucas critique                                          57


where ryx denotes the correlation coeﬃcient and β̂ is the estimated regression
coeﬃcient when y is the dependent variable and x is the regressor. β̂ ∗ is the
estimated coeﬃcient in the reverse regression. By deﬁnition, ‘regime shifts’
entail that correlation structures alter, hence ryx shifts. If, due to super
exogeneity, β̂ nevertheless is constant, then β̂ ∗ cannot be constant.
    Equation (4.16) applies more generally, with ryx interpreted as the par-
tial correlation coeﬃcient. Hence, if (for example) the Phillips curve (4.1) is
                                                                             ∗
estimated by OLS, then ﬁnding that β̂w1 is recursively stable entails that β̂w1
for the re-normalised equation (on the rate of unemployment) is recursively
unstable. Thus, ﬁnding a stable Phillips curve over a sample period that con-
tains changes in the (partial) correlations, refutes any claim that the model
has a Lucas supply curve interpretation. This simple procedure also applies to
estimation by instrumental variables (due to endogeneity of, for example, ∆qt
and/or ∆pt ) provided that the number of instrumental variables is lower than
the number of endogenous variables in the Phillips curve.


4.5.2     Lucas critique
Lucas’s 1976 thesis states that conditional econometric models will be prone
to instability and break down whenever non-modelled expectations change.
This section establishes the critique for a simple algebraic case. In the fol-
lowing section we discuss how the Lucas critique can be conﬁrmed or refuted
empirically.
   Without loss of generality, consider a single time-series variable yt , which
can be split into an explained part ytp , and an independent unexplained
part, y,t :
                                yt = ytp + y,t .                           (4.17)
Following Hendry (1995a: ch. 5.2) we think of ytp as a plan attributable to
agents, and y,t as the diﬀerence between the planned and actual outcome
of yt . Thus,
                              E[yt | ytp ] = ytp ,                   (4.18)
and   y,t is an innovation relative to the plan, hence

                                 E[ y,t | ytp ] = 0.                      (4.19)
Assume next that agents use an information set It−1 to form rational
expectations for a variable xt , that is,
                                xet = E[xt | It−1 ]                       (4.20)
and that expectations are connected to the plan
                                    ytp = βxet ,                          (4.21)
which is usually motivated by, or derived from, economic theory.
58                                                                     The Phillips curve

   By construction, E[ytp | It−1 ] = ytp , while we assume that           y,t in (4.17) is
an innovation
                               E[ y,t | It−1 ] = 0                                 (4.22)
and, therefore
                                  E[yt | It−1 ] = ytp .                            (4.23)
Initially, xet is assumed to follow a ﬁrst-order AR process (non-stationarity is
considered below):
                     xet = E[xt | It−1 ] = α1 xt−1 ,      |α1 | < 1.               (4.24)
Thus xt = xet + x,t , or:
                      xt = α1 xt−1 + x,t ,     E[ x,t | xt−1 ] = 0.                (4.25)
For simplicity, we assume that y,t and x,t are independent.
   Assume next that the single parameter of interest is β in equation (4.21).
The reduced form of yt follows from (4.17), (4.21), and (4.24):
                                yt = α1 βxt−1 + x,t ,                              (4.26)
where xt is weakly exogenous for ξ = α1 β, but the parameter of interest β is
not identiﬁable from (4.26) alone. Moreover the reduced form equation (4.26),
while allowing us to estimate ξ consistently in a state of nature characterised
by stationarity, is susceptible to the Lucas critique, since ξ is not invariant to
changes in the autoregressive parameter of the marginal model (4.24).
    In practice, the Lucas critique is usually aimed at ‘behavioural equations’
in simultaneous equations systems, for example,
                                    yt = βxt + ηt                                  (4.27)
with disturbance term:
                                  ηt = y,t − x,t β.                                (4.28)
It is straightforward (see Appendix A.1) to show that estimation of (4.27) by
OLS on a sample t = 1, 2, . . . , T , gives
                                  plim β̂OLS = α12 β,                              (4.29)
                                 T →∞

establishing that, ‘regressing yt on xt ’ does not represent the counterpart to
ytp = xet β in (4.21). Speciﬁcally, instead of β, we estimate α12 β, and changes
in the expectation parameter α1 damage the stability of the estimates, thus
conﬁrming the Lucas critique.
    However, the applicability of the critique rests on the assumptions made.
For example, if we change the assumption of |α1 | < 1 to α1 = 1, so that xt
has a unit root but is cointegrated with yt , the Lucas critique does not apply:
under cointegration, plimT →∞ β̂OLS = β, since the cointegration parameter is
unique and can be estimated consistently by OLS.
4.5 Inversion and the Lucas critique                                                   59

   As another example of the importance of the exact set of assumptions
made, consider replacing (4.21) with another economic theory, namely the
contingent plan
                                ytp = βxt .                        (4.30)
Equations (4.30) and (4.17) give
                                    yt = βxt + y,t ,                               (4.31)
where E[ y,t | xt ] = 0 ⇒ cov( y,t , xt ) = 0 and β can be estimated by OLS also
in the stationary case of |α1 | < 1.


4.5.3      Model-based vs. data-based expectations
Apparently, it is often forgotten that the ‘classical’ regression formulation in
(4.31) is consistent with the view that behaviour is driven by expectations,
albeit not by model-based or rational expectations with unknown parameters
that need to be estimated (unless they reside like memes in agents’ minds).
To establish the expectations interpretation of (4.31), replace (4.30) by
                                      ytp = βxet+1
and assume that agents solve ∆xet+1 = 0 to obtain xet+1 . Substitution of
xet+1 = xt , and using (4.17) for ytp gives (4.31).
    ∆xet+1 = 0, is an example of a univariate prediction rule without any para-
meters but which is instead based directly on data properties, hence they are
referred to as data-based expectations; see Hendry (1995b: ch. 6.2.3). Realis-
tically, agents might choose to use data-based predictors because of the cost of
information collection and processing associated with model-based predictors.
It is true that agents who rely on ∆xet+1 = 0 use a mis-speciﬁed model of
the x-process in (4.25), and thus their forecasts will not attain the minimum
mean square forecast error.9 Hence, in a stationary world there are gains from
estimating α1 in (4.25). However, in practice there is no guarantee that the
parameters of the x-process stay constant over the forecast horizon, and in
this non-stationary state of the world a model-based forecast cannot be ranked
as better than the forecast derived from the simple rule ∆xet+1 = 0. In fact,
depending on the dating of the regime shift relative to the ‘production’ of the
forecast, the data-based forecast will be better than the model-based forecast
in terms of bias.
    In order to see this, we introduce a growth term in (4.25), that is,
                    xt = α0 + α1 xt−1 + x,t ,     E[ x,t | xt−1 ] = 0              (4.32)
and assume that there is a shift in α0 (to α0∗ ) in period T + 1.
  9 This is the well-known theorem that the conditional mean of a correctly speciﬁed model

attains the minimum mean squared forecast error; see Granger and Newbold (1986: ch. 4),
Brockwell and Davies (1991: ch. 5.1), or Clements and Hendry (1998: ch. 2.7).
60                                                                  The Phillips curve

    We consider two agents, A and B, who forecast xT +1 . Agent A collects data
for a period t = 1, 2, 3, . . . , T and is able to discover the true values of {α0 , α1 }
over that period. However, because of the unpredictable shift α0 → α0∗ in period
T + 1, A’s forecast error will be
                            eA,T +1 = α0∗ − α0 + x,T +1 .                         (4.33)
Agent B, using the data-based forecast xT +1 = xT , will experience a forecast
error
                    eB,T +1 = α0∗ − (1 − α1 )xT + x,T +1 ,
which can be expressed as
                 eB,T +1 = α0∗ − α0 + (1 − α1 )(x0s − xT ) + x,T +1 ,             (4.34)
where   x0s denotes the (unconditional) mean of xT (i.e. for the pre-shift
intercept φ0 ), x0s = α0 /(1 − α1 ). Comparison of (4.33) and (4.34) shows that
the only diﬀerence between the two forecast errors is the term (1 − α1 )(xT − x0s )
in (4.34). Thus, both forecasts are damaged by a regime shift that occurs after
the forecast is made. The conditional means and variances of the two errors are
                   E[eA,T +1 | T ] = α0∗ − α0 ,                                   (4.35)
                   E[eB,T +1 | T ] = α0∗ − α0 + (1 − α1 )(x0s − xT ),             (4.36)
                 Var[eA,T +1 | T ] = Var[eB,T +1 | T ],                           (4.37)
establishing that in this example of a post-forecast regime-shift, there is no
ranking of the two forecasting methods in terms of the ﬁrst two moments of
the forecast error. The conditional forecast error variances are identical, and
the bias of the model-based forecast are not necessarily smaller than the bias
of the naive data-based predictor: assume, for example, that α0∗ > α0 —if at
the same time xT < x0s , the data-based bias can still be the smaller of the two.
Moreover, unconditionally, the two predictors have the same bias and variance:
                          E[eA,T +1 ] = E[eB,T +1 ] = α0∗ − α0 ,                  (4.38)
                        Var[eA,T +1 ] = Var[eB,T +1 ].                            (4.39)
    Next consider the forecasts made for period T + 2, conditional on T + 1,
as an example of a pre-forecast regime shift (α0 → α0∗ in period T + 1).
Unless A discovers the shift in α0 and successfully intercept-corrects the
forecast, his error-bias will once again be
                           E[eA,T +2 | T + 1] = [α0∗ − α0 ] .                     (4.40)
The bias of agent B’s forecast error on the other hand becomes
                      E[eB,T +2 | T + 1] = (1 − α1 )(x∗s − xT ),                  (4.41)
where x∗s denotes the post-regime shift unconditional mean of x, that is, x∗s =
α0∗ /(1 − α1 ). Clearly, the bias of the data-based predictor can easily be smaller
4.5 Inversion and the Lucas critique                                            61

than the bias of the model-based prediction error (but the opposite can of
course also be the case). However,
                             E[eA,T +2 ] = [α0∗ − α0 ],
                             E[eB,T +2 ] = 0,
and the unconditional forecast errors are always smallest for the data-based
prediction in this case of pre-forecast regime shift.
     The analysis generalises to the case of a unit root in the x-process, in fact
it is seen directly from the above that the data-based forecast errors have even
better properties for the case of α1 = 1, for example, E[eB,T +2 | T + 1] = 0
in (4.41). More generally, if xt is I(d), then solving ∆d xet+1 = 0 to obtain xet+1
will result in forecast with the same robustness with respect to regime shifts
as illustrated in our example; see Hendry (1995a, ch.6.2.3). This class of pre-
dictors belongs to forecasting models that are cast in terms of diﬀerences of
the original data, that is, diﬀerenced vector autoregressions, denoted dVARs.
They have a tradition in macroeconomics that goes back at least to the 1970s,
then in the form of Box–Jenkins time-series analysis and ARIMA models. A
common thread running through many published evaluations of forecasts, is
that the naive time-series forecasts are often superior to the forecasts of the
macroeconometric models under scrutiny (see, for example, Granger and New-
bold 1986, ch. 9.4). Why dVARs tend to do so well in forecast competitions is
now understood more fully, thanks to the work of, for example, Clements and
Hendry (1996, 1998, 1999a). In brief, the explanation is exactly along the lines
of our comparison of ‘naive’ and ‘sophisticated’ expectation formation above:
the dVAR provides robust forecasts of non-stationary time-series that are sub-
ject to intermittent regime shifts. To beat them, the user of an econometric
model must regularly take recourse to intercept corrections and other judge-
mental corrections (see Section 4.6). These issues are also discussed in further
detail in Chapter 11.


4.5.4     Testing the Lucas critique
While it is logically possible that conventional Phillips curves are ‘really’
Lucas supply functions in reverse, that claim can be tested for speciﬁc models.
Finding that the Phillips curve is stable over sample periods that included
regime shifts and changes in the correlation structures is suﬃcient for refuting
inversion. Likewise, the Lucas critique is a possibility theorem, not a truism
(see Ericsson and Irons 1995), and its assumptions have testable implications.
For example, the Lucas critique implies (1) that β̂OLS is non constant as α1
changes (inside the unit circle), and (2) that determinants of α1 (if identiﬁ-
able in practice) should aﬀect β̂OLS if included in the conditional model of yt .
Conversely, the Lucas critique is inconsistent with the joint ﬁnding of a sta-
ble conditional relationship and a regime shift occurring in the process which
62                                                            The Phillips curve

drives the explanatory variable; see Ericsson and Hendry (1999). Based on
this logic methods of testing the Lucas critique have been developed: see,
for example, Hendry (1988), Engle and Hendry (1993), and Favero and Hendry
(1992).
    Surveys of the empirical evidence for the Lucas critique are found in Ericsson
and Irons (1995) and Stanley (2000). Though very diﬀerent in methodology, the
two studies conclude in a similar fashion, namely that there is little ﬁrm evid-
ence supporting the empirical applicability of the Lucas critique. In Section 4.6
we review the applicability of the Lucas critique to the Norwegian Phillips
curve. As an alternative to rational expectations, we note as a possibility that
agents form expectations on the basis of observed properties of the data itself.
Interestingly, there is a close relationship between data-based forecasting rules
that agents may pick up, and the time-series models that have been successful
in macroeconomic forecasting.



4.6     An empirical open economy Phillips
        curve system
In this section, we ﬁrst specify and then evaluate an open economy Phillips
curve for the Norwegian manufacturing sector. We use an annual data set for
the period 1965–98, which is used again in later sections where competing
models are estimated. In the choice of explanatory variables and of data trans-
formations, we build on existing studies of the Phillips curve in Norway, cf.
Stølen (1990, l993). The variables are in log scale (unless otherwise stated) and
are deﬁned as follows:

wct = hourly wage cost in manufacturing;
  qt = index of producer prices (value added deﬂator);
  pt = the oﬃcial consumer price index (CPI);
  at = average labour productivity;
 tut = rate of total unemployment (i.e. unemployment includes participants
       in active labour market programmes);
rprt = the replacement ratio;
  ht = the length of the ‘normal’ working day in manufacturing;
 t1t = the manufacturing industry payroll tax-rate (not log).

    Equation (4.42) shows the estimation results of a manufacturing sector
Phillips curve which is as general as the number of observations allows.
Arguably the use of OLS estimation may be defended by invoking the main-
course theory (remembering that we model wages of an exposed industry),
but the main reason here is plain simplicity, and we return to the estimation
of the Phillips curve by system methods below.
4.6 An empirical open economy Phillips curve system                                          63

    The model is a straightforward application of the theoretical Phillips
curve in (4.1): we include two lags in ∆qt and ∆at , and, as discussed ear-
lier, it is a necessary concession to realism to also include a lag polynomial of
the consumer price inﬂation rate, ∆pt .10 We use only one lag of the unemploy-
ment rate, since previous work on this data set gives no indication of any need
to include a second lag of this variable.

      ∆wct − ∆pt−1 = − 0.0287 + 0.133∆pt − 0.716∆pt−1 − 0.287∆pt−2
                       (0.0192) (0.182)    (0.169)      (0.163)
                           + 0.0988∆at + 0.204∆at−1 − 0.00168∆at−2
                             (0.159)     (0.153)      (0.136)
                           + 0.189∆qt + 0.317∆qt−1 + 0.177∆qt−2 − 0.0156 tut
                             (0.0867)   (0.0901)     (0.0832)     (0.0128)
                           − 0.00558 tut−1 + 0.796∆t1t + 0.0464 rprt−1
                             (0.0162)        (0.531)     (0.0448)
                           − 0.467∆ht + 0.0293 i1967t − 0.0624IPt                       (4.42)
                             (0.269)    (0.0201)        (0.0146)

                            OLS, T = 34 (1965–98)
   σ̂ = 0.01302                       R2 = 0.92                  RSS = 0.002882
   FNull = 9.558[0.00]                FAR(1−2) = 1.01[0.386]
   FARCH(1−1) = 0.115[0.700]          χ2normality = 4.431[0.109]
   FChow(1982) = 2.512[0.4630]        FChow(1995) = 0.116[0.949]

     The last ﬁve explanatory variables in (4.42) represent two categories; these
are, ﬁrst, the theoretically motivated variables: the change in the payroll tax
rate (∆t1t ) and a measure of the generosity of the unemployment insurance
system (the replacement ratio, rprt−1 ); and second, variables that capture
the impact of changes in the institutional aspects of wage-setting in Norway.
As indicated by its name, i1967t is an impulse dummy and is 1 in 1967 and
zero elsewhere. It covers the potential impact of changes in legislation and indir-
ect taxation in connection with the build up of the national insurance system
in the late 1960s. ∆ht captures the short-run impact of income compensation
in connection with the reforms in the length of the working week in 1964, 1968,
and 1987 (see Nymoen 1989b). Finally, IPt is a composite dummy representing
a wage- and price-freeze in 1979 and centralised bargaining in 1988 and 1989:
it is 1 in 1979 and 0.5 in 1980, 1 again in 1988 and 0.5 in 1989—zero elsewhere.
The exact ‘weighting’ scheme is imported from Bårdsen and Nymoen (2003).11

 10 Below, and in the following, square brackets, [..], contain p-values whereas standard errors

are stated in parentheses, (..).
 11 The dummy variable IP is designed to capture the eﬀects of the wage-freeze in 1979 and
                             t
the wage-laws of 1988 and 1989. Similar dummies for incomes policy appear with signiﬁcant
64                                                                   The Phillips curve

     The left-hand side variable in (4.42) is ∆wct − ∆pt−1 , since our earlier
experience with this data set (see, for example, Bårdsen and Nymoen 2003, and
Section 6.9.2), shows that the lagged rate of inﬂation is an important predictor
of this year’s nominal wage increase. Note, however, that the transformation
on the left-hand side does not represent a restriction in (4.42) since ∆pt−1 is
also present on the right-hand side of the equation.
     The general model (4.42) contains coeﬃcient estimates together with con-
ventionally computed standard errors (in brackets). Below the equation we
report estimation statistics (T , number of observations; the residual sum
of squares, RSS; the residual standard error σ̂, R2 , and FNull the probab-
ility of observing an F value as large or larger as the one we observe,
given the null of ‘no relationship’), and a set of mis-speciﬁcation tests for
the general unrestricted model (GUM): F -distributed tests of residual auto-
correlation (FAR(1−2) ), heteroskedasticity (FHETx2 ), autoregressive conditional
heteroskedasticity (FARCH(1−1) ) and the Doornik and Hansen (1994) Chi-square
test of residual non-normality (χ2normality ). The last two diagnostics reported
are two tests of parameter constancy based on Chow (1960). The ﬁrst is a mid-
sample split (FChow(1982) ) and the second is an end-of-sample split (FChow(1995) ).
For each diagnostic test, the numbers in square brackets are p-values for the
respective null hypotheses; they show that none of the tests are signiﬁcant.
     Automatised general to speciﬁc model selection using PcGets (see Hendry
and Krolzig 2001), resulted in the Phillips curve in (4.43).
               
             ∆wct − ∆pt−1 = − 0.0683 − 0.743∆pt−1 + 0.203∆qt
                              (0.0139) (0.105)      (0.0851)
                                  + 0.29∆qt−1 − 0.0316 tut − 0.0647IPt              (4.43)
                                    (0.0851)    (0.00431)    (0.0103)

                                 OLS, T = 34 (1965–98)
     RSS = 0.005608               σ̂ = 0.01415              R2 = 0.84
     FGUM = 1.462[0.23]           FAR(1−2) = 3.49[0.05]     FHETx2 = 0.732[0.69]
     FARCH(1−1) = 0.157[0.90]     χ2normality = 4.907[0.09]
     FChow(1982) = 0.575[0.85]    FChow(1995) = 0.394[0.76]
    Whereas the GUM in (4.42) contains 16 explanatory variables, the ﬁnal
model (4.43) keeps only 5: the lagged rate of inﬂation, the current and lagged
changes in the product price index, the rate of unemployment, and the com-
posite incomes policy dummy. The test of the joint signiﬁcance of the 11
restrictions is reported as FGUM below the equation, with a p-value of 0.23,
showing that the increase in residual standard error from 1.3% to 1.4% is sta-
tistically insigniﬁcant. The diagnostic tests conﬁrm that the reduction process is
valid, that is, only the test of 2. Order autocorrelation is marginally signiﬁcant
at the 5% level.

coeﬃcients in earlier studies on both annual and quarterly data (see, for example, Johansen
1995a).
4.6 An empirical open economy Phillips curve system                                                                                                 65

 (a)         Intercept                         (b)         ∆pt–1                                    (c)           ∆qt
       0.5
                                                      0
                          +2                                                                              0.5
                                                                                         +2                                                      +2
       0.0                                                                                                                                        
                                                                                                                                                 −2
                          –2                        –1                                  −2               0.0

                   1980         1990   2000                      1980          1990          2000                       1980         1990         2000
 (d)         ∆qt                               (e)         tut                                      (f )          IPt
                                                     0.1
        1                                                                                             0.00
                                                                        +2                                                                       +2
                                       +2                                                          –0.05
                                                    0.0                                                                                           
        0                              –2                                                                                                       −2
                                                                        –2                         –0.10
                                                 –0.1

                   1980         1990   2000                      1980          1990          2000                       1980         1990         2000
 (g)                                           (h)         1% critical value                        (i)          1% critical value
  0.050                                              1.0                                                   1.0

  0.025                                +2 se
             1-step residuals
                                                            1 period ahead Chow statistics
  0.000                                              0.5                                                   0.5
                                                                                                                    Break-point Chow statistics
 –0.025                                –2 se

                   1980         1990   2000                      1980          1990          2000                       1980         1990         2000


       Figure 4.2. Recursive stability of ﬁnal open economy wage Phillips curve
                               model in equation (4.43)


    As discussed earlier, a key parameter of interest in the Phillips curve model
is the equilibrium rate of unemployment, that is, uphil in (4.10). Using the
coeﬃcient estimates in (4.43), and setting the growth rate of prices (gf ) and
productivity growth equal to their sample means of 0.06 and 0.027, we obtain
ûphil = 0.0305, which is nearly identical to the sample mean of the rate of
unemployment (0.0313).
    In this section and throughout the book, ﬁgures often appear as panels of
graphs, with each graph in a panel labelled sequentially by a suﬃx a,b,c, . . . ,
row by row. In Figure 4.2, the graphs numbered (a)–(f) show the recursively
estimated coeﬃcients in equation (4.43), together with ±2 estimated standard
errors over the period 1976–98 (denoted β and ±2σ in the graphs). The last
row with graphs in Figure 4.2 shows the sequence of 1-step residuals (with
±2 residual standard errors denoted ±2 se), the 1-step Chow statistics and
lastly the sequence of ‘break-point’ Chow statistics. Overall, the graphs show a
considerable degree of stability over the period 1976–98. However, Constant (a)
and the unemployment elasticity (e) are both imprecisely estimated on samples
that end before 1986, and there is also instability in the coeﬃcient estimates
(for Constant, there is a shift in sign from 1981 to 1982). These results will aﬀect
the natural rate estimate, since uphil depends on the ratio between Constant
and the unemployment elasticity, cf. equation (4.5).
    The period from 1984 to 1998 was a turbulent period for the Norwegian
economy, and the manufacturing industry in particular. The rate of unem-
ployment fell from 4.3% in 1984 to 2.6% in 1987, but already in 1989 it had
risen to 5.4% and reached an 8.2% peak in 1989, before falling back to 3% in
66                                                                                                                  The Phillips curve

(a)                                              (b)     ∆pt–1                                    (c)         ∆qt
           Intercept                               10                                                10
  –2                                   +2                                                                                                    +2
                                                  0                                                    5
                                       –2
  –3                                                                                                                                              
                                                                                      +2
                                                 –10                                                    0
  –4                                                                                                                                         –2
                                                 –20                                  –2           –5

          1980         1990             2000            1980           1990            2000                  1980            1990            2000
(d)                                              (e)                                              (f)
           ∆qt–1                                   10    ∆wct –∆pt–1                                    1     IPt
  10                                    +2
                                                    0
                                                                                                        0
      5                                                                                                                                      +2
                                                 –10
                                                                                       +2
                                                                                                   –1
      0                                –2       –20                                                                                          
                                                                                       –2                                                   –2
          1980         1990             2000            1980           1990            2000                 1980            1990            2000
(g)                                              (h)                                              (i)
  1.0                                             1.5
                                       +2 se
                                                                                                        3           Break point Chow statistics
  0.5                         1–step residuals                            1% critical value
                                                  1.0
                                                                 1 period ahead Chow statistics         2
  0.0
                                                  0.5                                                                        1% critical value
 –0.5                                                                                                   1
                                      –2 se

          1980         1990             2000            1980           1990             2000                1980            1990            2000


          Figure 4.3. Recursive instability of the inverted Phillips curve model
                        (Lucas supply curve) in equation (4.43)


1998.12 An aspect of this was a marked fall in manufacturing proﬁtability in
the late 1980s. Institutions also changed (see Barkbu et al. 2003), as Norway
(like Sweden) embarked upon less coordinated wage settlements in the begin-
ning of the 1980s. The decentralisation was reversed during the late 1980s. The
revitalisation of coordination in Norway has continued in the 1990s. However,
according to (4.43), the abundance of changes have had only limited impact on
wage-setting, that is, the eﬀect is limited to two shifts in the intercept in 1988
and 1989 as IPt then takes the value of 1 and 0.05 as explained above. The
stability of the slope coeﬃcients in Figure 4.2 over (say) the period 1984–98
therefore invalidates a Lucas supply curve interpretation of the estimated rela-
tionship in equation (4.43). On the contrary, given the stability of (4.43) and the
list of recorded changes, we are led to predict that the inverted regression will
be unstable over the 1980s and 1990s. Figure 4.3 conﬁrms this interpretation
of the evidence.
    Given the non-invertibility of the Phillips curve, we can investigate more
closely the stability of the implied estimate for the equilibrium rate of unem-
ployment. We simplify the Phillips curve (4.43) further by imposing dynamic
homogeneity (F (1, 28) = 4.71[0.04]), since under that restriction uphil is

  12 The numbers refer to the ‘total’ rate of unemployment, that is, including persons on

active labour market programmes.
4.6 An empirical open economy Phillips curve system                                  67

independent of the nominal growth rate (gf ). Non-linear estimation of the
Phillips curve (4.43), under the extra restriction that the elasticities of the
three price growth rates sum to zero, gives
 ∆wct − ∆pt−1 − 0.027 = − 0.668415∆pt−1 + 0.301663∆qt + 0.289924∆qt−1
                          (0.1077)        (0.07761)     (−)
                             −0.0266204 (tut − log(0.033)) − 0.072 IPt
                              (0.003936)          (0.00376)   (0.01047)
                                                                                  (4.44)

                            NLS, T = 34 (1965–98)
        RSS = 0.00655087875                       σ̂ = 0.0152957
        FAR(1−2) = 3.5071[0.0448]                 FHETx2 = 0.18178[0.9907]
        FARCH(1−1) = 0.021262[0.8852]             χ2normality = 0.85344[0.6526]
The left-hand side has been adjusted for mean productivity growth (0.027) and
the unemployment term has the interpretation: (tut − uphil ). Thus, the full
sample estimate obtained of uphil obtained from non-linear estimation is 0.033
with a signiﬁcant ‘t-value’ of 8.8. A short sample, like, for example, 1965–75
gives a very high, but also uncertain, uphil estimate. This is as one would expect
from Figure 4.2(a) and (e). However, once 1982 is included in the sample the
estimates stabilise, and Figure 4.4 shows the sequence of uphil estimates for
the remaining samples, together with ±2 estimated standard errors and the
actual unemployment rate for comparison. The ﬁgure shows that the estimated
equilibrium rate of unemployment is relatively stable, and that it appears to
be quite well determined. The years 1990 and 1991 are exceptions, where ûphil


          0.08
                    Actual rate of unemployment
          0.07

          0.06

          0.05

          0.04                                                       +2 se
                                                                      uphil
          0.03
                                                                      –2 se
          0.02

                     1985               1990             1995             2000

       Figure 4.4. Sequence of estimated wage Phillips curve NAIRUs
 (with ±2 estimated standard errors), and the actual rate of unemployment.
                       Wald-type conﬁdence regions
68                                                           The Phillips curve

                                 Table 4.1
     Conﬁdence intervals for the Norwegian wage Phillips curve NAIRU

                             NAIRU 95% conﬁdence interval for NAIRU
                                            Wald           Fieller and LR
     Full sample: 1965–98 0.0330 [0.0253 ; 0.0407]        [0.0258 ; 0.0460]
     Sub sample: 1965–91 0.0440 [0.0169 ; 0.0631]         [0.0255 ; 0.2600]
     Sub sample: 1965–87 0.0282 [0.0182 ; 0.0383]         [0.0210 ; 0.0775]

     Note: The Fieller method is applied to equation (4.43), with
     homogeneity imposed. The conﬁdence intervals derived from the
     Wald and LR statistics are based on equation (4.44).

increases to 0.033 and 0.040 from 0.028 in 1989. However, compared to con-
ﬁdence interval for 1989, the estimated NAIRU increased signiﬁcantly in 1991,
which represents an internal inconsistency since one of the assumptions of this
model is that uphil is a time invariant parameter.
    However, any judgement about the signiﬁcance of jumps and drift in the
estimated NAIRU assumes that the conﬁdence regions in Figure 4.4 are approx-
imately correct. As explained in Section 4.4, the conﬁdence intervals are based
on the Wald principle and may give a misleading impression of the uncertainty
of the estimated NAIRU. In Table 4.1 we therefore compare the Wald interval
with the Fieller (and Likelihood Ratio) conﬁdence interval. Over the full sample
the diﬀerence is not large, although the Wald method appears to underestimate
the interval by 0.5%.
    The two sub-samples end in 1987 (before the rise in unemployment), and in
1991 (when the rise is fully represented in the sample). On the 1965–87 sample,
the Wald method underestimates the width of the interval by more than 3%;
the upper limit being most aﬀected. Hypothetically therefore, a decision maker
who in 1987 was equipped with the Wald interval, might be excused for not
considering the possibility of a rise in the NAIRU to 4% over the next couple
of years. The Fieller method shows that such a development was in fact not
unlikely. Over the sample that ends in 1991, the Wald method underestimates
the uncertainty of the NAIRU even more dramatically; the Fieller method gives
an interval from 2.6% to 26%.
    A ﬁnal point of interest in Figure 4.4 is how few times the actual rate of
unemployment crosses the line for the estimated equilibrium rate. This sug-
gests very sluggish adjustment of actual unemployment to the purportedly
constant equilibrium rate. In order to investigate the dynamics formally, we
graft the Phillips curve equation (4.43) into a system that also contains the
rate of unemployment as an endogenous variable, that is, an empirical coun-
terpart to equation (4.2) in the theory of the main-course Phillips curve. As
noted, the endogeneity of the rate of unemployment is just an integral part of
the Phillips curve framework as the wage Phillips curve itself, since without the
4.6 An empirical open economy Phillips curve system                                        69

‘unemployment equation’ in place one cannot show that the equilibrium rate of
unemployment obtained from the Phillips curve corresponds to a steady state
of the system.
    In the following, we model a three equation system similar to the theoret-
ical setup in equations (4.7)–(4.9). The model explains the manufacturing sector
wage, consumer price inﬂation and the rate of unemployment, conditional on
incomes policy, average productivity and product price. In order to model ∆pt
and tut we also need a larger set of explanatory variables, namely the GDP
growth rate (∆ygdp,t ), and an import price index (pit ). In particular, the inclu-
sion of ∆ygdp,t in the conditioning information set is important for consistency
with our initial assumption about no unit roots in tut . It is shown by Nymoen
(2002) that (1) conventional Dickey–Fuller tests do not reject the null of a unit
root in the rate of unemployment, but (2) regressing tut on ∆ygdp,t−1 (which
in turn is not Granger caused by tut ) turns that around, and establishes that
tut is without a unit-root and non-stationary due to structural changes outside
the labour market.
    The ﬁrst equation in Table 4.2 shows the Phillips curve (4.43), this
time with full information maximum likelihood (FIML) coeﬃcient estimates.
There are only minor changes from the OLS results. The second equation mod-
els the change in the rate of unemployment, and corresponds to equation (4.2)
in the theoretical model in Section 4.2.13 The coeﬃcient of the lagged unem-
ployment rate is −0.147, and the t-value of −4.41 conﬁrms that tut can be
regarded as a I(0) series on the present information set, which includes ∆ygdp,t
and its lag as important conditioning variables (i.e. zt in (4.2)). In terms of eco-
nomic theory, ∆ygdp,t represents an Okun’s law type relationship. The elasticity
of the lagged wage share is positive which corresponds to the sign restriction
bu2 > 0 in equation (4.2). However, the estimate 0.65 is not signiﬁcantly diﬀer-
ent from zero, so it is arguable whether equilibrium correction is strong enough
to validate identiﬁcation between the estimated uphil and the true steady-state
unemployment rate. Moreover, the stability issue cannot be settled from inspec-
tion of the ﬁrst two equations alone, since the third equation shows that the
rate of CPI inﬂation is a function of both ut−1 and wct−1 −qt−1 −at−1 . However,
the characteristic roots of the companion matrix of the system
                               0.1381        0    0.1381
                               0.9404      0.1335 0.9498
                               0.9404     −0.1335 0.9498

show that the model is dynamically stable (i.e. has a unique stationary solution
for given initial conditions). That said, the large magnitude of the complex
root implies that adjustment speeds are low. Thus, after a shock to the system,

  13 Residual standard deviations and model diagnostics are reported at the end of the table.

Superscript v indicates that we report vector versions of the single equation mis-speciﬁcation
tests encountered above, see equation (4.42). The overidentiﬁcation χ2 is the test of the
model in Table 4.2 against its unrestricted reduced form, see Anderson and Rubin (1949,
1950), Koopmans et al. (1950), and Sargan (1988, pp. 125 ﬀ.).
70                                                           The Phillips curve

                                   Table 4.2
               FIML results for a Norwegian Phillips curve model
  ∆wct − ∆pt−1 = − 0.0627 − 0.7449∆pt−1 + 0.3367∆qt−1
                   (0.0146) (0.104)       (0.0826)
                      − 0.06265IPt + 0.234∆qt − 0.02874tut
                        (0.00994)    (0.0832)   (0.00449)

  ∆tut = − 0.1547tut−1 − 7.216∆ygdp,t − 1.055∆ygdp,t−1
           (0.0302)      (1.47)         (0.333)
            + 1.055(wc − q − a)t−1 + 0.366i1989t − 2.188∆2 pit
              (0.333)                (0.139)       (0.443)

     ∆pt = 0.06023 + 0.2038∆pt−1 − 0.009452tut−1 + 0.2096(wc − q − a)t−1
           (0.0203) (0.0992)       (0.00366)       (0.0564)
         + 0.2275∆2 pit − 0.05303i1979t + 0.04903 i1970t
           (0.0313)       (0.0116)        (0.0104)
  wct − qt − at ∼
                = wct−1 − qt−1 − at−1 + ∆wct − ∆at − ∆qt ;
  tu ≡ tut−1 + ∆tut ;

Note: The sample is 1964 to 1998, T = 35 observations
  σ̂∆w = 0.014586
  σ̂∆tu = 0.134979
  σ̂∆p = 0.0116689
    v
  FAR(1−2)    (18, 59) = 1.0260[0.4464]
    2,v
  χnormality (6) = 3.9186[0.6877]
  χ2overidentiﬁcation (36) = 65.533[0.002]

the rate of unemployment will take a long time before it eventually returns to
the natural rate, thus conﬁrming Figure 4.4.
    Figure 4.5 oﬀers visual inspection of some of the dynamic properties of the
model. The ﬁrst four graphs show the actual values of ∆pt , tut , ∆wct , and the
wage share wct − qt − at together with the results from dynamic simulation.
As could be expected, the ﬁts for the two growth rates are quite acceptable.
However, the ‘near unit root’ property of the system manifests itself in the
graphs for the level of the unemployment rate and for the wage share. In both
cases there are several consecutive years of under- or overprediction. The last
two displays contain the cumulated dynamic multipliers of tu and the wage
share resulting from a 0.01 point increase in the unemployment rate. As one
might expect from the characteristic roots, the stability property is hard to
gauge from the two responses. For practical purposes, it is as if the level of
unemployment and the wage share ‘never’ return to their initial values. Thus,
in the model in Table 4.2, the equilibrium correction is extremely weak.
4.6 An empirical open economy Phillips curve system                                                                71

(a)           ∆pt                                      (b)            tut
  0.10                                                       –3

  0.05                                                       –4

                    1970    1980       1990     2000              1970                  1980       1990       2000
(c)                                                    (d)
              ∆wct
   0.20                                                 –0.2 wct – at – qt
  0.15
  0.10                                                   –0.3
  0.05
                                                         –0.4
                    1970    1980       1990     2000                        1970        1980       1990       2000
(e)                                                     (f)
 0.050        tut : Cumulated multiplier                0.000               wct – at – qt : Cumulated multiplier
 0.025                                                 –0.005
 0.000                                                 –0.010
–0.025                                                 –0.015
          0           10       20          30                     0             10         20          30

      Figure 4.5. Dynamic simulation of the Phillips curve model in Table 4.2.
        Panels (a–d) Actual and simulated values (dotted line). Panels (e–f):
          multipliers of a one point increase in the rate of unemployment


    As discussed at the end of Section 4.2, the belief in the empirical basis of the
Phillips curve natural rate of unemployment was damaged by the remorseless
rise in European unemployment in the 1980s, and the ensuing discovery of great
instability of the estimated natural rates. Thus, Solow (1986), commenting on
the large within country variation between diﬀerent three-year sub-periods in
OECD estimates of the natural rate, concludes that
A natural rate that hops around from one triennium to another under the inﬂuence
of unspeciﬁed forces, including past unemployment, is not ‘natural’ at all. (Solow
1986, p. 33)

In that perspective, the variations in the Norwegian natural rate estimates
in Figure 4.4 are quite modest, and may pass as relatively acceptable as a
ﬁrst-order approximation of the attainable level of unemployment. However,
the econometric system showed that equilibrium correction is very weak. After
a shock to the system, the rate of unemployment is predicted to drift away
from the natural rate for a very long period of time. Hence, the natural rate
thesis of asymptotical stability is not validated.
   There are several responses to this result. First, one might try to patch
up the estimated unemployment equation, and try to ﬁnd ways to recover
72                                                                The Phillips curve

a stronger relationship between the real wage and the unemployment rate.
In the following we focus instead on the other end of the problem, namely
the Phillips curve itself. In Section 6.9.2 we show that when the Phillips curve
framework is replaced with a wage model that allows equilibrium correction
to any given rate of unemployment, rather than to the ‘natural rate’ only,
all the inconsistencies are resolved. However, that kind of wage equation is ﬁrst
anchored in the economic theory of Chapters 5 and 6.

4.6.1     Summary
The Phillips curve ranges as the dominant approach to wage and price
modelling in macroeconomics. In the United States, in particular, it retains
its role as the operational framework for both inﬂation forecasting and for
estimating of the NAIRU. In this chapter we have shown that the Phillips
curve is consistent with cointegration between prices, wages and productivity,
and a stationary rate of unemployment, and hence there is a common ground
between the Phillips curve and the Norwegian model of inﬂation of the previous
chapter. However, unlike the Norwegian model, the Phillips curve framework
speciﬁes a single equilibrating mechanism which supports cointegration—in the
simplest case with ﬁxed and exogenous labour supply, the equilibrium correc-
tion is due to a downward sloping labour demand schedule. The speciﬁcity
of the equilibrating mechanism of the Phillips curve is not always recognised.
In the context of macroeconomic models with a large number of equations,
it has the somewhat paradoxical implication that the stationary value of the
rate of unemployment can be estimated from a single equation.
    We have also argued that the Phillips curve framework is consistent with
a stable autoregressive process for the rate of unemployment, subject only to
a few regime shifts that can be identiﬁed with structural breaks in the operation
of labour markets. The development of European unemployment rates since the
early 1980s is diﬃcult to ﬁt into this framework, and model builders started
to look for alternative models. Interestingly, already in 1984 one review of the
United Kingdom macroeconomic models concluded that ‘developments in wage
equations have led to the virtual demise of the Phillips curve as the standard
wage relationship in macro models’.14 These developments are the themes of
the following two chapters.

                         14   See Wallis et al. (1984, p. 134).
                                         5

           Wage bargaining and
              price-setting

      In this chapter we go a step forward to compare both the main-course
      model and the Phillips curve by introducing the Layard–Nickell wage-
      curve model of incomplete competition. It marks a step forward in that
      it combines formal models of wage bargaining and models of monopolistic
      price-setting. Thus, compared to Aukrust’s model, the hypothesised wage
      and price cointegrating vectors are better founded in economic theory, and
      speciﬁc candidates for explanatory variables ﬂow naturally from the way
      the bargaining model is formulated. We will show that there are cases of
      substantive interest where the identiﬁcation problem pointed out by Man-
      ning (1993) are resolved, and we will show applications with empirically
      stable and interpretable wage and price curves.


5.1      Introduction
In the course of the 1980s interesting developments took place in macro-
economics. First, the macroeconomic implications of imperfect competition
with price-setting ﬁrms were developed in several papers and books; see, for
example, Bruno (1979), Bruno and Sachs (1984), Blanchard and Kiyotaki
(1987), and Blanchard and Fisher (1989: ch. 8). Second, the economic theory
of labour unions, pioneered by Dunlop (1944), was extended and formalised
in a game theoretic framework; see, for example, Nickell and Andrews (1983),
Hoel and Nymoen (1988). Models of European unemployment, that incorp-
orated elements from both these developments, appeared in Layard and Nickell
(1986), Carlin and Soskice (1990), Layard et al. (1991), and Lindbeck (1993).
The new standard model of European unemployment is incontestably linked to
Layard and Nickell and their co-authors. However, we follow established prac-
tice and refer to the framework as the Incomplete Competition Model (ICM),


                                         73
74                                               Wage bargaining and price-setting

or, interchangeably, as the wage curve framework (as opposed to the Phillips
curve model of the previous chapter). Incomplete competition is particularly
apt since the model’s deﬁning characteristic is the explicit assumption of imper-
fect competition in both product and labour markets, see; for example, Carlin
and Soskice (1990).1 The ICM was quickly incorporated into the supply side
of macroeconometric models (see Wallis 1993, 1995), and purged European
econometric models of the Phillips curve, at least until the arrival of the
New Keynesian Phillips curve late in the 1990s (see Chapter 7 in this book).
    Since the theory is cast in terms of levels variables, the ICM stands closer
to the main-course model than the Phillips curve tradition. On the other hand,
both the wage curve and the Phillips curve presume that it is the rate of unem-
ployment that reconciles the conﬂict between wage earners and ﬁrms. Both
models take the view that the equilibrium or steady-state rate of unemployment
is determined by a limited number of factors that reﬂect structural aspects such
as production technology, union preferences, and institutional factors (charac-
teristics of the bargaining system, the unemployment insurance system). Thus,
in both families of theories demand management and monetary policy have only
a short-term eﬀect on the rate of unemployment. In the (hypothetical) situation
when all shocks are switched oﬀ, the rate of unemployment returns to a unique
structural equilibrium rate, that is, the natural rate or the NAIRU. Thus, the
ICM is unmistakably a model of the natural rate both in its motivation and
in its implications: ‘In the long run, unemployment is determined entirely by
long-run supply factors and equals the NAIRU’ (Layard et al. 1994, p. 23).



5.2      Wage bargaining and monopolistic
         competition
There is a number of specialised models of ‘non-competitive’ wage-setting;
see, for example, Layard et al. (1991: ch. 7). Our aim in this section is to rep-
resent the common features of these approaches in a theoretical model of wage
bargaining and monopolistic competition, building on Rødseth (2000: ch. 5.9)
and Nymoen and Rødseth (2003). We start with the assumption of a large
number of ﬁrms, each facing downward-sloping demand functions. The ﬁrms
are price setters and equate marginal revenue to marginal costs. With labour
being the only variable factor of production (and constant returns to scale)
we obtain the following price-setting relationship:

                                        ElQ Y Wi
                                Qi =                ,
                                       ElQ Y − 1 Ai

  1 Nevertheless, the ICM acronym may be confusing—in particular if it is taken to imply

that the alternative model (the Phillips curve) contains perfect competition.
5.2 Wage bargaining and monopolistic competition                                 75

where Ai = Yi /Ni is average labour productivity, Yi is output, and Ni is labour
input. ElQ Y > 1 denotes the absolute value of the elasticity of demand facing
each ﬁrm i with respect to the ﬁrm’s own price. In general ElQ Y is a func-
tion of relative prices, which provides a rationale for inclusion of, for example,
the real exchange rate in aggregate price equations. However, it is a common
simpliﬁcation to assume that the elasticity is independent of other ﬁrms’ prices
and is identical for all ﬁrms. With constant returns technology aggregation
is no problem, but for simplicity we assume that average labour productivity
is the same for all ﬁrms and that the aggregate price equation is given by

                                      ElQ Y W
                               Q=                .                            (5.1)
                                     ElQ Y − 1 A

The expression for real proﬁts (π) is therefore
                                                   
                                W               W 1
                       π=Y −       N = 1−             Y.
                                 Q              QA

We assume that the wage W is settled by maximising the Nash product:

                                 (ν − ν0 )0 π 1−0 ,                           (5.2)

where ν denotes union utility and ν0 denotes the fall-back utility or reference
utility. The corresponding break-point utility for the ﬁrms has already been
set to zero in (5.2), but for unions the utility during a conﬂict (e.g. strike or
work-to-rule) is non-zero because of compensation from strike funds. Finally 0
represents the relative bargaining power of unions.
    Union utility depends on the consumer real wage of an employed worker and
the aggregate rate of unemployment, thus ν(W/P, U, Zν ) where P denotes the
consumer price index (CPI).2 The partial derivative with respect to wages is
                                                          
positive, and negative with respect to unemployment (νW      > 0 and νU ≤ 0). Zν
represents other factors in union preferences. The fall-back or reference utility of
the union depends on the overall real-wage level and the rate of unemployment,
hence ν0 = ν0 (W̄ /P, U ) where W̄ is the average level of nominal wages which
is one of the factors determining the size of strike funds. If the aggregate rate
of unemployment is high, strike funds may run low in which case the partial
                                                    
derivative of ν0 with respect to U is negative (ν0U     < 0). However, there are
other factors working in the other direction, for example, that the probability of
entering a labour market programme, which gives laid-oﬀ workers higher utility
                                                                               
than open unemployment, is positively related to U . Thus, the sign of ν0U        is
diﬃcult to determine from theory alone. However, we assume in the following
that νU − ν0U
             
                < 0.

                          2 We abstract from income taxes.
76                                              Wage bargaining and price-setting

   With these speciﬁcations of utility and break-points, the Nash product,
denoted N , can be written as
                                 0                1−0
                   W                 W̄            W 1
         N = ν        , U, Zν − ν0             1−          Y
                    P                 P            QA
or
                              0            1−0
                Wq               W̄             1
         N = ν     , U, Zν − ν0          1 − Wq    Y     ,
                Pq               P              A
where Wq = W/Q is the producer real wage and Pq = P/Q is the wedge
between the consumer and producer real wage. The ﬁrst-order condition for
a maximum is given by NWq = 0 or
                      
                     νW  (Wq /Pq , U, Zν )                       1/A
           0                                       = (1 − 0)             .    (5.3)
               ν(Wq /Pq , U, Zν ) − ν0 (W̄ /P, U )           (1 − Wq /A)
In a symmetric equilibrium, W = W̄ , leading to Wq /Pq = W̄ /P in
equation (5.3), and the aggregate bargained real wage Wqb is deﬁned
implicitly as
                         Wqb = F (Pq , A, 0, U ).              (5.4)
A log linearisation of (5.4), with subscript t for time period added, gives
                b
               wq,t = mb,t + ωpq,t −  ut ,      0 ≤ ω ≤ 1,      ≥ 0.        (5.5)
mb,t in (5.5) depends on A, 0, and Zν , and any one of these factors can of
course change over time.
    As noted above, the term pq,t = (p − q)t is referred to as the wedge between
the consumer real wage and the producer real wage. The role of the wedge as
a source of wage pressure is contested in the literature. In part, this is because
theory fails to produce general implications about the wedge coeﬃcient ω—it
can be shown to depend on the exact speciﬁcation of the utility functions ν
and ν0 (see, for example, Rødseth 2000: ch. 8.5 for an exposition). We follow
custom and restrict the elasticity ω of the wedge to be non-negative. The role
of the wedge may also depend on the level of aggregation of the analysis. In the
traded goods sector (‘exposed’ in the terminology of the main-course model of
Chapter 3) it may be reasonable to assume that ability to pay and proﬁtability
are the main long-term determinants of wages, hence ω = 0. However, in the
sheltered sector, negotiated wages may be linked to the general domestic price
level. Depending on the relative size of the two sectors, the implied weight
on the consumer price may then become relatively large in an aggregate wage
equation.
    Equation (5.5) is a general proposition about the bargaining outcome and
its determinants, and can serve as a starting point for describing wage forma-
tion in any sector or level of aggregation of the economy. In the rest of this
section we view equation (5.5) as a model of the aggregate wage in the economy,
5.2 Wage bargaining and monopolistic competition                              77

which gives the most direct route to the predicted equilibrium outcome for real
wages and for the rate of unemployment. However, in Section 5.4 we consider
another frequently made interpretation, namely that equation (5.5) applies to
the manufacturing sector.
    The impact of the rate of unemployment on the bargained wage is given
by the elasticity , which is a key parameter of interest in the wage curve
literature.  may vary between countries according to diﬀerent wage-setting
systems. For example, a high degree of coordination, especially on the employer
side, and centralisation of bargaining is expected to induce more responsiveness
to unemployment (a higher ) than uncoordinated systems that give little
incentives to solidarity in bargaining. At least this is the view expressed by
authors who build on multi-country regressions; see, for example, Alogoskouﬁs
and Manning (1988) and Layard et al. (1991: ch. 9). However, this view is
not always shared by economists with detailed knowledge of, for example, the
Swedish system of centralised bargaining (see Lindbeck 1993: ch. 8).
    Figure 5.1 also motivates why the magnitude of  plays such an important
role in the wage curve literature. The horizontal line in the ﬁgure is consist-
ent with the equation for price-setting in (5.1), under the assumption that
productivity is independent of unemployment (‘normal cost pricing’). The two
downward sloping lines labelled ‘low’ and ‘high’ (wage responsiveness), repres-
ent diﬀerent states of wage-setting, namely ‘low’ and ‘high’ . Point (i) in
the ﬁgure represents a situation in which ﬁrm’s wage-setting and the bargain-
ing outcome are consistent in both countries—we can think of this as a low
unemployment equilibrium. Next, assume that the two economies are hit by a
supply-side shock, that shifts the ﬁrm-side real wage down to the dotted line.
The Layard–Nickell model implies that the economy with the least real-wage
responsiveness  will experience the highest rise in the rate of unemployment,
(ii) in the ﬁgure, while the economy with more ﬂexible real wages ends up in
point (iii) in the ﬁgure.



                                       ‘High’

                                      ‘Low’
                   Log of real wage




                                                  i

                                                            ii
                                                  iii




                                                Log of rate of unemployment

   Figure 5.1. Role of the degree of wage responsiveness to unemployment
78                                              Wage bargaining and price-setting

    A slight generalisation of the price-setting equation (5.1) is to let the price
markup on average cost depend on demand relative to capacity. If we in addition
invoke an Okun’s law relationship to replace capacity utilisation with the rate
of unemployment, the real wage consistent with ﬁrms’ price-setting, wqf , can
be written in terms of log of the variables as
                           f
                          wq,t = mf,t + ϑut ,      ϑ ≥ 0.                      (5.6)
mf,t depends on the determinants of the product demand elasticity ElQ Y and
average labour productivity at .


5.3      The wage curve NAIRU
Without making further assumptions, and for a given rate of unemployment,
                           b                                     f
there is no reason why wq,t   in (5.5) should be equal to wq,t     in (5.6). However,
there are really two additional doctrines of the Layard–Nickell model. First, that
no equilibrium with a constant rate of inﬂation is possible without the condition
  b       f
wq,t = wq,t . Second, the adjustment of the rate of unemployment is the singular
equilibrating mechanism that brings about the necessary equalisation of the
competing claims.
    The heuristic explanation usually given is that excessive real wage claims
                                          b         f
on the part of the workers, that is, wq,t      > wq,t , result in increasing inﬂation
        2                      b        ∗
(e.g. ∆ pt > 0), while wq,t < wq,t goes together with falling inﬂation
(∆2 pt < 0). The only way of maintaining a steady state with constant inﬂa-
                                              b        f
tion is by securing that the condition wq,t      = wq,t   holds, and the function of
unemployment is to reconcile the claims, see Layard et al. (1994: ch. 3).
    Equations (5.5), (5.6), and wqb = wqf can be solved for the equilibrium real
wage (wq ), and for the rate of unemployment that reconciles the real wage
claims of the two sides of the bargain, the wage curve NAIRU, denoted ūw :
                                                     
                          mb − mf           ω
                  ūw
                    t =             +            p q,t ,      ω ≥ 0.            (5.7)
                          (ϑ + )      (ϑ + )
Thus, point (i) in Figure 5.1 is an example of wq = wqb = wqf and ut = uw ,
albeit for the case of normal cost pricing, that is, ϑ = 0. Likewise, the analysis
of a supply-side shock in the ﬁgure is easily conﬁrmed by taking the derivative
of uw with respect to mf .
    In the case of ω = 0, the expression for the wage curve NAIRU simpliﬁes to
                                  mb − mf
                          ūw =           ,      if ω = 0,                     (5.8)
                                  (ϑ + )
meaning that the equilibrium rate of unemployment depends only on such
factors that aﬀect wage- and price-settings, that is, supply-side factors. This
is the same type of result that we have seen for the Phillips curve under the
condition of dynamic homogeneity, see Section 4.2.
5.4 Cointegration and identiﬁcation                                                      79

   The deﬁnitional equation for the log of the CPI, pt is
                                 pt = φqt + (1 − φ)pit ,                              (5.9)
where pi denotes the log of the price of imports in domestic currency, and we
abstract from the indirect tax rate. Using (5.9), the wedge pq in equation (5.7)
can be expressed as
                              pq,t = (1 − φ)piq,t ,
where piq ≡ pi − q, denotes the real exchange rate. Thus it is seen that, for the
case of ω > 0, the model can alternatively be used to determine a real exchange
rate that equates the two real wage claims for a given level of unemployment;
see Carlin and Soskice (1990: ch. 11.2), Layard et al. (1991: ch. 8.5), and
Wright (1992). In other words, with ω > 0, the wage curve natural ūw is more
of an intermediate equilibrium which is not completely supply-side determined,
but depends on demand-side factors through the real exchange rate. To obtain
the long-run equilibrium, an extra constraint of balanced current account is
needed.3
    Earlier in this section we have seen that theory gives limited guidance to
whether the real-wage wedge aﬀects the bargained wage or not. The empirical
evidence is also inconclusive; see, for example, the survey by Bean (1994).
However, when it comes to short-run eﬀects of the wedge, or to components
of the wedge such as consumer price growth, there is little room for doubt:
dynamic wedge variables have to be taken into account. In Chapter 6 we present
a model that includes these dynamic eﬀects in full.
    At this stage, it is nevertheless worthwhile to foreshadow one result, namely
that the ‘no wedge’ condition, ω = 0, is not suﬃcient to ensure that ūw in
equation (5.7) corresponds to an asymptotically stable stationary solution of
a dynamic model of wage- and price-setting. Other and additional parameter
restrictions are required. This suggests that something quite important is lost
by the ICM’s focus on the static price and wage relationships, and in Chapter 6
we therefore graft these long-run relationships into a dynamic theory frame-
work. As a ﬁrst step in that direction, we next investigate the econometric
speciﬁcation of the wage curve model, building on the idea that the theoretical
wage- and price-setting schedules may correspond to cointegrating relationships
between observable variables.


5.4      Cointegration and identiﬁcation
In Chapter 3, we made the following assumptions about the time-series prop-
erties of the variables we introduced: nominal and real wages and productivity
  3 Rødseth (2000: ch. 8.5) contains a model with a richer representation of the demand side

than in the model by Layard et al. (1991). Rødseth shows that the long-run equilibrium must
satisfy both a zero private saving condition and the balanced current account condition.
80                                                    Wage bargaining and price-setting

are I(1), while, possibly after removal of deterministic shifts, the rate of unem-
ployment is without a unit root. A main concern is clearly how the theoretical
wage curve model can be reconciled with these properties of the data. In other
words: how should the long-run wage equation be speciﬁed to attain a true
cointegrating relationship for real wages, and to avoid the pitfall of spurious
regressions?
    As we have seen, according to the bargaining theory, the term mb,t in (5.5)
depends on average productivity, At .4 Having assumed ut ∼ I(0), and keeping
in mind the possibility that ω = 0, it is seen that it follows directly from cointeg-
ration that productivity has to be an important variable in the relationship. In
other words, a positive elasticity ElA Wq is required to balance the I(1) trend
in the product real wage on the left-hand side of the expression.
    Thus, the general long-run wage equation implied by the wage bargaining
approach becomes
      b
     wq,t = mb + ιat + ωpq,t −  ut ,           0 < ι ≤ 1,   0 ≤ ω ≤ 1,        ≥ 0,   (5.10)
        b
where wq,t ≡ wtb − qt denotes the ‘bargained real wage’ as before. The intercept
mb is redeﬁned without the productivity term, which is now singled out as
an I(1) variable on the left-hand side of the expression, and with the other
determinants assumed to be constant. Finally, deﬁning
                                 ecmb ,t = wq,t − wq,t
                                                   b
                                                       ∼ I(0)
allows us to write the hypothesised cointegrating wage equation as
                      wq,t = mb + ιat + ωpq,t −  ut + ecmb,t .                        (5.11)
Some writers prefer to include the reservation wage (the wage equivalent of
being unemployed) in (5.10). For example, from Blanchard and Katz (1999)
(but using our own notation to express their ideas):
         b
        wq,t = mb + ι at + (1 − ι )wtr + ωpq,t −  ut ,          0 < ι ≤ 1,         (5.12)
where wtr denotes the reservation wage. However, since real wages are integ-
rated, any meaningful operational measure of wtr must logically cointegrate
with wq,t directly. In fact, Blanchard and Katz hypothesise that wtr is a linear
function of the real wage and the level of productivity.5 Using that (second)
cointegrating relationship to substitute out wtr from (5.12) implies a relationship
which is observationally equivalent to (5.11).
    The cointegration relationship stemming from price-setting is anchored in
equation (5.6). In the same way as for wage-setting, it becomes important in

  4 Recall that we expressed the Nash-product as

                             ν  (W /P ,U,Z )                     1/A
                   0 ν(W /PW,U,Zq ) −q ν (Wν /P ,U ) = (1 − 0) (1 − W /A) ,
                         q   q      ν   0   q    q                   q

in (5.3).
  5 See their equation (4), which uses the lagged real wage, which cointegrates with current

real wage, on the right-hand side.
5.4 Cointegration and identiﬁcation                                              81

applied work to represent the productivity term explicitly in the relationship.
We therefore rewrite the long-term price-setting schedule as
                               f
                              wq,t = mf + at + ϑut ,                         (5.13)
where the composite term mf in (5.6) has been replaced by mf +at . Introducing
                  f
ecm f,t = wq,t − wq,t ∼ I(0), the second implied cointegration relationship
becomes
                        wq,t = mf + at + ϑut + ecmf,t .                  (5.14)
    While the two cointegrating relationships are not identiﬁed in general,
identifying restrictions can be shown to apply in speciﬁc situations that occur
frequently in applied work. From our own experience with modelling both dis-
aggregate and aggregate data, the following three ‘identiﬁcation schemes’ have
proven themselves useful:
    One cointegrating vector. In many applications, especially on sectorial data,
formal tests of cointegration support only one cointegration relationship, thus
either one of ecmb,t and ecmf,t is I(1), instead of both being I(0). In this case it
is usually possible to identify the single cointegrating equation economically by
restricting the coeﬃcients, and by testing the weak exogeneity of one or more
of the variables in the system.
    No wedge. Second, and still thinking in terms of a sectorial wage–price
system: assume that the price markup is not constant as assumed above, but
is a function of the relative price (via the price elasticity ). In this case, the
price equation (5.14) is augmented by the real exchange rate pt − pit . If we fur-
thermore assume that ω = 0 (no wedge in wage formation) and ϑ = 0 (normal
cost pricing), identiﬁcation of both long-run schedules is logically possible.
    Aggregate price–wage model. The third cointegrating identiﬁcation scheme
is suited for the case of aggregated wages and prices. The long-run model is
               wt = mb + (1 − ω)qt + ιat + ωpt −  ut + ecmb,t ,             (5.15)
               qt = −mf + wt − at − ϑut − ecmf,t ,                           (5.16)
               pt = φqt + (1 − φ)pit ,
solving out for producer prices qt then gives a model in wages wt and consumer
prices pt only,
                      1 − ω(1 − φ)
           wt = mb +               pt + ιat − ut
                           φ
                   (1 − ω)(1 − φ)
                 −                pit + ecmb,t                               (5.17)
                         φ
            pt = −φmf + φ(wt − at ) − φϑut + (1 − φ)pit − φecmf,t ,          (5.18)
that implicitly implies non-linear cross-equation restrictions in terms of φ.
By simply viewing (5.17) and (5.18) as a pair of simultaneous equations,
it is clear that the system is unidentiﬁed in general. However, if the high level of
aggregation means that ω can be set to unity (while retaining cointegration),
82                                               Wage bargaining and price-setting

and there is normal cost pricing in the aggregated price relationship, identi-
ﬁcation is again possible. Thus ω = 1 and ϑ = 0 represent one set of necessary
(order) restrictions for identiﬁcation in this case:

                wt = mb + pt + ιat − ut + ecmb,t ,                              (5.19)
                pt = −φmf + φ(wt − at ) + (1 − φ)pit − φecmf,t .                 (5.20)

    We next give examples of how the ﬁrst and third schemes can be used to
identify cointegrating relationships in Norwegian manufacturing and in a model
of aggregate United Kingdom wages and prices.



5.5      Cointegration and Norwegian
         manufacturing wages
We analyse the annual data set for Norwegian manufacturing that was used to
estimate a main-course Phillips curve in Section 4.6. We estimate a vector
autoregressive model (VAR), check for mis-speciﬁcation and then for coin-
tegration, and discuss identiﬁcation. Several of the variables were deﬁned in
Section 4.6.
    The endogenous variables in the VAR are all in log scale and are denoted as
follows: wct (wage cost per hour), qt (producer price index), at (average labour
productivity), tut (the total rate of unemployment, that is, including labour
market programmes), rprt (the replacement ratio), and we (the real-wage wedge
in manufacturing). The operational measure of the wedge is deﬁned as

                    wet = pt − qt + t1t + t2t ≡ pq,t + t1t + t2t ,

where t1 and t2 denote payroll and average income tax rates respectively. The
annual sample period is 1964–98, so there are only 36 observations of the
six variables. We estimate a ﬁrst-order VAR, extended by four conditioning
variables:

two dummies (i1967t and IPt );
the lagged inﬂation rate, ∆cpit−1 ;
the change in normal working hours, ∆ht ,

all of which were discussed in Section 4.6. Table 5.1 contains the residual
diagnostics for the VAR. To save space we have used ∗ to denote a statistic
which is signiﬁcant at the 10% level, and ∗∗ to denote signiﬁcance at the 5%
level. There are only two signiﬁcant mis-speciﬁcation tests and both indicate
heteroskedasticity in the residuals of the replacement ratio.6

  6 The statistics reported in the table are explained in Section 4.6, Table 4.2, and in

connection with equation (4.43).
5.5 Cointegration and Norwegian manufacturing wages                               83

                                   Table 5.1
               Diagnostics for a ﬁrst-order conditional VAR for
                     Norwegian manufacturing 1964–98
                         wc      q       a      tu      we      rpr     VAR
   FAR(1−2) (2, 22)     0.56   0.41    0.59     1.29    1.27    2.36
   χ2normality (2)      0.60   1.42    0.42     0.38    0.26    2.87
   FHETx2 (12, 11)      0.45   0.28    0.54     0.42    1.47    8.40∗
   FARCH(1−1) (1, 22)   0.16   1.12    0.44     0.10    2.51   13.4∗∗
   FvAR(1−2) (72, 43)                                                     1.518
   χ2,v
     normality (12)                                                       6.03
   χ2,v
     HETx2 (252)                                                        269.65

                                  Table 5.2
               Cointegration analysis, Norwegian manufacturing
                               wages 1964–98
                                                                      
               r          1             2        3        4    5    6
          Eigenvalue   0.92          0.59     0.54     0.29 0.16 0.01
                                                                      
           Max       72.49∗∗        25.64     22.5    10.12 4.98 0.31
               Tr      136∗∗         63.56    37.92    15.42 5.29 0.31
    The results of the cointegration analysis are shown in Table 5.2 which con-
tains the eigenvalues and associated maximum eigenvalue (Max) and trace (Tr)
statistics, which test the hypothesis of (r − 1) vs. r cointegration vectors, and r
vs. less than (r − 1) cointegrating vectors, respectively. These eigenvalue tests
are corrected for degree of freedom (see Doornik and Hendry 1997b), and give
formal evidence for one cointegrating relationship, namely
wct = mwc + 0.93qt + 1.20at − 0.0764tut + 0.0318wet + 0.11614rprt + ecmb,t ,
                                                                            (5.21)
when we normalise on wc, and let ecmb,t denote the I(0) equilibrium correc-
tion term.
    Equation (5.21) is unique, qua cointegrating relationship, but it can either
represent a wage equation or a long-run price-setting schedule. Both interpreta-
tions are consistent with ﬁnding long-run price homogeneity and a unit long-run
elasticity of labour productivity. The joint test of these two restrictions gives
χ2 (2) = 4.91[0.09], and a restricted cointegrating vector becomes
     wct − qt − at = mwc − 0.069tut + 0.075weq,t + 0.1644rprt + ecmb,t .
The real-wage wedge can be omitted from the relationship, and thus imposing
ω = 0, we obtain the ﬁnal estimated cointegration relationship as:
              wct − qt − at = mwc − 0.065tut + 0.184rprt + ecmb,t           (5.22)
84                                                  Wage bargaining and price-setting

and the test statistics for all three restrictions χ2 (3) = 5.6267[0.1313].
Equation (5.22) is the empirical counterpart to (5.11), with ω = 0 and
mb = mwc + 0.184rpr.
   In simpliﬁed form, the six variable I(0) system can be written as:
               −0.476(0.05) 
        ∆wct
      ∆qt        −0.017(0.121)
                                
      ∆at  −0.074(0.086)
                  
                                   
                                  · ecmb,t−1 + additional terms,
      ∆tut  =     0.800(0.787) 
                                                                      (5.23)
                                
      ∆wet  −0.309(0.168)
        ∆rprt       −0.006(0.177)
which shows that there is signiﬁcant evidence of equilibrium correction in
wage-setting.
    Interestingly, the real-wage wedge wet also appears to be endogenous.
However, since wet does not enter into the cointegration relationship, its endo-
geneity poses no problems for identiﬁcation. A set of suﬃcient restrictions that
establishes (5.22) as a long-run wage equation is given by the weak exogene-
ity of qt , at , ut , and rprt with respect to the parameters of the cointegrating
relationship (5.22). The test of the 4 restrictions gives χ2 (4) = 2.598[0.6272],
establishing that (5.22) has been identiﬁed as a long-run wage equation.
    Of particular interest is the signiﬁcance (or otherwise) of the adjustment
coeﬃcients of the product price index qt and average productivity at , since
the answer to that question relates to whether the causality thesis (H4mc )
of Aukrust’s main-course model in Section 3.2.1 applies to the Norwegian
manufacturing sector. Again, from (5.23) there is clear indication that the
ecmb,t−1 -coeﬃcients of ∆qt and ∆at are insigniﬁcant, and a test of their joint
insigniﬁcance gives χ2 (2) = 0.8315[0.6598]. Thus, we not only ﬁnd that the
cointegration equation takes the form of the extended main-course equation
discussed in Chapter 3, but also that deviations from the long-run relationship
seem to be corrected through wage adjustments and not through prices and
productivity.7
    Visual inspection of the strength of cointegration is oﬀered by Figure 5.2,
where panel (a) shows the sequence of (largest) eigenvalues over the period
1980–98. Although the canonical correlation drops somewhat during the 1980s,
it settles at a value close to 0.92 for the rest of the sample. Panels (b) and (c)
show that the elasticities of the rate of unemployment and of the replacement

  7 This result is the opposite of Rødseth and Holden (1990, p. 253), who found that deviation

from the main course is corrected by ∆mct deﬁned as ∆at + ∆qt . However, that result is
inﬂuenced by invalid conditioning, since their equation for ∆mct has not only ecmt−1 , but
also ∆wct on the right-hand side. Applying their procedure to our data gives their results:
for the sample period 1966–98, ecmt−1 obtains a ‘t-value’ of 2.94 and a (positive) coeﬃcient
of 0.71. However, when ∆wct is dropped from the right-hand side of the equation (thus
providing the relevant framework for testing) the ‘t-value’ of ecmt−1 for ∆at falls to 0.85.
5.5 Cointegration and Norwegian manufacturing wages                                                    85

(a) 0.98      Largest eigenvalue                 (b)          tut
                                                       0.08                                        +2

       0.96                                            0.07
                                                                                                   
                                                       0.06
       0.94
                                                       0.05                                        –2
       0.92
         1980        1985   1990   1995   2000           1980       1985         1990      1995    2000

(c)           rprt                               (d)                    statistics of overidentifying
                                                                           2
      –0.10                                            17.5            restrictions
                                          +2
      –0.15                                            15.0                    1% critical value

                                                      12.5
      –0.20
                                                       10.0
      –0.25                               –2           7.5
         1980        1985   1990   1995   2000           1980       1985          1990      1995   2000

  Figure 5.2. Norwegian manufacturing wages, recursive cointegration results
    1981–98: (a) Sequence of highest eigenvalue; (b) and (c) coeﬃcients of
 identiﬁed equation; (d) sequence of χ2 test of 7 overidentifying restrictions.


ratio are stable, and signiﬁcant when compared to the ±2 estimated standard
errors.8 Over the period 1964–98, the joint test of all the 7 restrictions yields
χ2 (7) = 8.2489[0.3112]. Figure 5.2 shows that we would have reached the same
conclusion about no rejection on samples that end in 1986 and later.
     The ﬁndings are interpretable in the light of the theories already discussed.
First, equation (5.22) conforms to an extended main-course proposition that we
discussed in Chapter 3: the wage share is stationary around a constant mean,
conditional on the rate of unemployment and the replacement ratio. However,
it is also consistent with the wage curve of Section 5.2. The elasticity of the
rate of unemployment is 0.065 which is somewhat lower than the 0.1 elasticity
which has come to be regarded as an empirical law following the comprehens-
ive empirical documentation in Blanchﬂower and Oswald (1994). Finally, the
exogeneity tests support the main-course model assumption about exogenous
productivity and product price trends, and that wages are correcting deviation
from the main course. The analysis also resolves the inconsistency that ham-
pered the empirical Phillips curve system in Section 4.6, namely that there was
little sign of an equilibrium correction which is necessary to keep the wage on
the main course. In the cointegration model, wages are adjusting towards the
main course, and the point where the Phillips curve goes wrong is exactly by
  8 Note that these estimates are conditioned by the restrictions on the loadings matrix

explained in the text and that the the signs of the coeﬃcients are reversed in the graphs.
86                                             Wage bargaining and price-setting

insisting that we should look to unemployment for provision of the equilibrating
mechanism. In Chapter 6 we develop the theoretical implication of this type
of dynamics further. Speciﬁcally, in Section 6.9.2, we incorporate the long-run
wage curve in (5.22) into a dynamic model of manufacturing wages and the
rate of unemployment in Norway.



5.6     Aggregate wages and prices:
        UK quarterly data
Bårdsen et al. (1998) present results of aggregate wage and price determination
in the United Kingdom, that can be used to illustrate the third identiﬁcation
scheme above. In the quarterly data set for the United Kingdom the wage vari-
able wt is average actual earnings. The price variable pt is the retail price index,
excluding mortgage interest payments and the Community Charge. In this ana-
lysis, mainland productivity at , import prices pit , and the unemployment rate
ut are initially treated as endogenous variables in the VAR, and the validity
of restrictions of weak exogeneity is tested. The variables that are treated as
non-modelled without testing are employers’ taxes t1t , indirect taxes t3t , and
a measure of the output gap gapt , approximated by mainland GDP-cycles esti-
mated by the Hodrick–Prescott (HP) ﬁlter. Finally, two dummies are included
to take account of income policy events.
    The equilibrium relationships presented by Bårdsen et al. (1998) are
shown in Table 5.3 (to simplify the table, the constants appearing in
equations (5.15)–(5.20) are omitted along with the residuals ecmb,t and ecmf,t ).
The ﬁrst panel simply records the two long-run relationships (5.17) and (5.18),
with the noted changes. Panel 2 records the unidentiﬁed cointegrating vectors,
using the Johansen procedure (residual diagnostics are given at the bottom
of the table). Panel 3 reports the estimated relationships after imposing weak
exogeneity restrictions for ut , at , and pit . The estimated β coeﬃcients do not
change much, and the reported test statistic χ2 (6) = 10.02[0.12] does not reject
the exogeneity restrictions. Panel 4 then applies the restrictions discussed in
Section 5.4—ω = 1 and ϑ = 0—hence the two estimated equations correspond
to the theoretical model (5.19) and (5.20). The impact of the identiﬁcation
procedure on the estimated β coeﬃcients is clearly visible. Panel 5 shows the
ﬁnal wage and price equations reported by Bårdsen et al. (1998), that is,
their equation (14a) and (14b). The recursive estimates of the cointegration
coeﬃcients (note the sign change in the graphs) together with conﬁdence inter-
vals and the sequence of tests of the overidentifying restrictions are shown in
Figure 5.3.
    The identifying restrictions are statistically acceptable on almost any sample
size, and the coeﬃcients of the two identiﬁed relationships are stable over the
same period. Bårdsen et al. (1998) perform an analysis of aggregate Norwegian
5.7 Summary                                                                     87

                                 Table 5.3
  Cointegrating wage- and price-setting schedules in the United Kingdom
Panel 1: The theoretical equilibrium
        1 − ω(1 − φ)                           (1 − ω)(1 − φ)       δ3 (1 − ω)
  wt =               pt + ιat − δ1 t1t − ut −                pit −            t3t
             φ                                       φ                   φ
               pt = φ(wt + t1t − at ) − φϑut + (1 − φ)pit + δ3 t3t
Panel 2: No restrictions
        w = 1.072p + 1.105a − 0.005u − 0.101pi − 0.892t1 − 0.395t3
        p = 0.235w + 0.356a − 0.215u + 0.627pi − 0.775t1 + 3.689t3
Panel 3: Weak exogeneity
        w = 1.103p + 1.059a − 0.005u − 0.139pi − 0.936t1 − 0.421t3
        p = 0.249w + 0.325a − 0.212u + 0.535pi − 0.933t1 + 3.796t3
                               χ2 (6) = 10.02[0.12]
Panel 4: Non-linear cross equation restrictions, weak exogeneity
           w = 0.99p + 1.00a − 0.05u − 0.01pi − 1.32t1 − 0.05t3
                         (0.10) (0.01) (0.03) (0.31)
                 p = 0.89w − 0.89a + 0.11pi + 0.89t1 + 0.61t3
                                         (0.02)          (0.15)
                              χ2 (10) = 15.45[0.12]
Panel 5: Simpliﬁed linear restrictions, weak exogeneity
                           w = p + a + 0.065u − t1
                                           (0.013)
                p = 0.89w − 0.89a + 0.11pi + 0.89t1 + 0.62t3
                                        (0.017)           (0.17)
                              χ2 (13) = 20.08[0.09]
Diagnostic tests for the unrestricted conditional subsystem
                              FvAR(1−5) = 0.95[0.61]
                          χ2,v
                           normality (10) = 19.844[0.03]
                       v
                      FHETx2 (360, 152) = 0.37[1.00]

Note: The sample is 1976(3) to 1993(1), 67 observations.


wages and prices, and show that the results are very similar for the two
economies.


5.7     Summary
The Layard–Nickell wage-curve model of incomplete competition marks a step
forward compared to both the Norwegian model and the Phillips curve, in
that it combines formal models of wage bargaining and models of monopolistic
price-setting. Thus, compared to Aukrust’s model, the hypothesised wage and
88                                               Wage bargaining and price-setting

(a)      ut                               (b)        pit
                                          –0.075
 0.10                                                                                             +2
                                    +2   –0.100
 0.08                                                                                               
                                          –0.125
                                    
 0.06                                                                                             –2
                                          –0.150
                                    –2
 0.04
      1985            1990                      1985                         1990
(c)                                       (d)
             t 3t
–0.25                               +2         24          2 statistics of overidentifying
                                                           restrictions
                                                                                      1% critical value
–0.50                                           22
                                    
–0.75
                                                20
                                    –2
–1.00
                                                18
      1985            1990                      1985                         1990

      Figure 5.3. United Kingdom quarterly aggregate wages and prices,
recursive cointegration results: (a)–(c) coeﬃcients of identiﬁed equations from
 Panel 5 in Table 5.3; (d) sequence of χ2 test of 7 overidentifying restrictions

price cointegrating vectors are better founded in economic theory, and speciﬁc
candidates for explanatory variables ﬂow naturally from the way the bargaining
model is formulated. We have shown that there are cases of substantive interest
where the identiﬁcation problem pointed out by Manning (1993) are resolved,
and have shown applications with empirically stable and interpretable wage
and price curves.
    As a model of equilibrium unemployment, the framework is incomplete since
only the cointegrating part of the dynamic system is considered. To evaluate
the natural rate implication of the theory, which after all is much of the ration-
ale for the whole framework, a broader setting is required. That also deﬁnes
the theme of the next chapter.
                                          6

           Wage–price dynamics

      This chapter discusses the modelling of the wage–price subsystem of the
      economy. We show that under relatively mild assumptions about price-
      and wage-setting behaviour, there exists a conditional steady state (for
      inﬂation and real wages) for any given long-run mean of the rate of unem-
      ployment. The view that asymptotic stability of inﬂation ‘requires’ that the
      rate of unemployment simultaneously converges to a NAIRU (which only
      depends on the properties of the wage and price equations) will be refuted
      both logically and empirically.




6.1      Introduction
The open economy Phillips curve and the Incomplete Competition Model
(ICM) appear to be positioned at opposite ends of a scale, with a simple
dynamic model at the one end, and an economically more advanced but essen-
tially static system at the other. In this section, we present a model of wage and
price dynamics that contains the Phillips curve and the wage curve as special
cases, building on the analyses in Kolsrud and Nymoen (1998) and Bårdsen
and Nymoen (2003).
    Section 6.2 presents the basic set of equations, and deﬁnes the concepts
of static and dynamic homogeneity and their relationships to nominal rigidity
and absence of neutrality to nominal shocks. Section 6.3 deﬁnes the asymptot-
ically stable solution of the system, and Section 6.4 discusses some important
economic implications of the conditional wage–price model as well as special
cases that are of substantive interest (e.g. the no wedge case, and a small
open economy interpretation, akin to the Norwegian model of inﬂation).
The comparison with the ICM is drawn in Section 6.5, while Section 6.6 covers
the Phillips curve case. Section 6.7 then gives an overview of the existing

                                          89
90                                                                 Wage–price dynamics

evidence in support of the restrictions that deﬁnes the two natural rate models.
Since we ﬁnd that the evidence of the respective NAIRU restrictions are at
best ﬂimsy, we expect that endeavours to estimate a time varying NAIRU run
the danger of misrepresenting time varying coeﬃcients of, for example, wage
equations as changes in structural features of the economy, and Section 6.8
substantiates that claim for the four main Nordic countries.
    In brief, the natural rate thesis that stability of inﬂation is tantamount to
having the rate of unemployment converging to a natural rate, is refuted both
theoretically and empirically in this chapter. Section 6.9 therefore sketches a
model of inﬂation and unemployment dynamics that is consistent with the
evidence and presents estimates of the system for the Norwegian data set that
is used throughout.



6.2      Nominal rigidity and equilibrium
         correction
The understanding that conﬂict is an important aspect to take into account
when modelling inﬂation in industrialised economies goes back at least to
Rowthorn (1977), and has appeared frequently in models of the wage–price
spiral; see, for example, Blanchard (1987).1 In Rowthorn’s formulation, a dis-
tinction is drawn between the negotiated proﬁt share and the target proﬁt
share. If these shares are identical, there is no conﬂict between the two levels
of decision-making (wage bargaining and ﬁrm’s unilateral pricing policy), and
no inﬂation impetus.2 But if they are diﬀerent, there is conﬂict and inﬂation
results as ﬁrms adjust prices unilaterally to adjust to their target. In the model
presented later, not only prices but also wages are allowed to change between
two (central) bargaining rounds. This adds realism to the model, since even in
countries like Norway and Sweden, with strong traditions for centralised wage
settlements, wage increases that are locally determined regularly end up with
accounting for a signiﬁcant share of the total annual wage growth (i.e. so-called
wage drift, see Rødseth and Holden 1990 and Holden 1990).
    The model is also closely related to Sargan (1964, 1980), in that the dif-
ference equations are written in equilibrium correction form, with nominal
wage and price changes reacting to past disequilibria in wage formation and
in price-setting. In correspondence with the previous chapter, we assume that
wages, prices, and productivity are I(1) variables, and that equations (5.11) and
(5.14) are two cointegrating relationships. Cointegration implies equilibrium

  1 Norwegian economists know such models as ‘Haavelmo’s conﬂict model of inﬂation’,

see Qvigstad (1975).
  2 Haavelmo formulated his model, perhaps less deliberately, in terms of two separate target

real wage rates for workers and ﬁrms (corresponding to wb and wf of Chapter 5), but the
implications for inﬂation are the same as in Rowthorn’s model.
6.2 Nominal rigidity and equilibrium correction                                   91

correction, so we specify the following equations for wage and price growth:
                 b
      ∆wt = θw (wq,t−1 − wq,t−1 ) + ψwp ∆pt + ψwq ∆qt − ϕut−1 + cw + εw,t ,
            0 ≤ ψwp + ψwq ≤ 1, ϕ ≥ 0, θw ≥ 0                                (6.1)
and
                  f
      ∆qt = −θq (wq,t−1 − wq,t−1 ) + ψqw ∆wt + ψqi ∆pit − ςut−1 + cq + εq,t ,
            0 ≤ ψqw + ψqi ≤ 1, 0 ≤ θq , ς ≥ 0,                                (6.2)
where εw,t and εq,t are assumed to be uncorrelated white noise processes. The
                 b           f
expressions for wq,t−1 and wq,t−1 were established in Chapter 5, and they are
repeated here for convenience:
       b
      wq,t = mb + ιat + ωpq,t −  ut ,       0 < ι ≤ 1,   0 ≤ ω ≤ 1,    ≥ 0,
       f
      wq,t = mf + at + ϑut ,                 ϑ ≥ 0,
that is, (5.10) for wage bargaining, and (5.13) based on modiﬁed nor-
mal cost pricing. In Rowthorn’s terminology, the negotiated proﬁt share is
                                                        f
(1 − wq,t
      b
          − at ), while the target proﬁt share is (1 − wq,t − at ).
   For the wage side of the inﬂation process, equations (5.10) and (6.1) yield
                ∆wt = kw + ψwp ∆pt + ψwq ∆qt − µw ut−1
                      + θw ωpq,t−1 − θw wq,t−1 + θw ιat−1 + εw,t ,              (6.3)
where kw = (cw + θw mb ). In equation (6.3), the coeﬃcient of the rate of
unemployment µw , is deﬁned by
      µw = θw        (when θw > 0)        or µw = ϕ      (when θw = 0),        (6.4)
which may seem cumbersome at ﬁrst sight, but is required to secure inter-
nal consistency: note that if the nominal wage rate is adjusting towards the
long-run wage curve, θw < 0, logic requires that the value of ϕ in (6.1) is
zero, since ut−1 is already contained in the equation, with coeﬃcient θw .
Conversely, if θw = 0, it is nevertheless possible that there is a wage Phillips
curve relationship, hence µw = ϕ ≥ 0 in this case. In equation (6.3), long-
run price homogeneity is ensured by the two lagged level terms—the wedge
pq,t−1 ≡ (p − q)t−1 and the real wage wq,t−1 ≡ (w − q)t−1 .
    For producer prices, equations (5.13) and (6.2) yield a dynamic equation of
the cost markup type:
   ∆qt = kq + ψqw ∆wt + ψqi ∆pit − µq ut−1 + θq wq,t−1 − θq at−1 + εq,t ,       (6.5)
where kq = (cq − θq mf ) and
                               µq = θq ϑ    or µq = ς.                          (6.6)
The deﬁnition of µq reﬂects exactly the same considerations as explained
above for wage-setting.
92                                                               Wage–price dynamics

    In terms of economic interpretation (6.3) and (6.5) are consistent with wage
and price staggering and lack of synchronisation among ﬁrms’ price-setting
(see, for example, Andersen 1994, ch. 7). An underlying assumption is that
ﬁrms preset nominal prices prior to the period and then within the period
meet the demand forthcoming at this price (which exceeds marginal costs,
as in Chapter 5). Clearly, the long-run price homogeneity embedded in (6.3)
is joined by long-run homogeneity with respect to wage costs in (6.5). Thus
we have overall long-term nominal homogeneity as a direct consequence of
specifying the cointegrating relationships in terms of relative prices.3
    In static models, nominal homogeneity is synonymous with neutrality of
output to changes in nominal variables since relative prices are unaﬀected (see
Andersen 1994). This property does not carry over to the dynamic wage and
price system, since relative prices (e.g. wq,t ) will be aﬀected for several periods
following a shift in, for example, the price of imports. In general, the model
implies nominal rigidity along with long-term nominal homogeneity. Thus, care
must also be taken when writing down the conditions that eventually remove
short-run nominal rigidity from the system. Speciﬁcally, the conditions for
‘dynamic homogeneity’, that is, ψwp + ψwq = 1 and ψqw + ψqi = 1, do not
eliminate nominal rigidity as an implied property; see Section 6.4.2. As will
become clear, there is a one-to-one relationship between nominal neutrality
and the natural rate property, and a set of suﬃcient conditions are given in
Section 6.5. First however, Section 6.3 deﬁnes the asymptotically stable solu-
tion of the system with long-term homogeneity (but without neutrality) and
Section 6.4 discusses some important implications.



6.3      Stability and steady state
We want to investigate the dynamics of the wage–price system consisting of
equations (6.3), (6.5), and the deﬁnitional equation
                       pt = φqt + (1 − φ)pit ,          0 < φ < 1.                 (6.7)
Following Kolsrud and Nymoen (1998), the model can be rewritten in terms of
the product real wage wq,t , and the real exchange rate
                                   piq,t = pit − qt .                              (6.8)
     In order to close the model, we make two additional assumptions:

1. ut follows a separate ARMA process with mean uss .
2. pit and at are random walks with drift.
  3 See Kolsrud and Nymoen (1998) for an explicit parameterisation with nominal variables

with long-run homogeneity imposed.
6.3 Stability and steady state                                                93

The NAIRU thesis states that the rate of unemployment has to be at an appro-
priate equilibrium level if the rate of inﬂation is to be stable. Assumption 1 is
made to investigate whether that thesis holds true for the present model: with
no feedback from wq,t and/or piq,t on the rate of unemployment there is no
way that ut can serve as an equilibrating mechanism. If a steady state exists in
spite of this, the NAIRU thesis is rejected, even though the model incorporates
both the ICM and the Phillips curve as special cases.
    Obviously, in a more comprehensive model of inﬂation we will relax assump-
tion 1 and treat ut as an endogenous variable, in the same manner as in the
Phillips curve case of Chapter 4. In the context of the imperfect competition
model, that step is postponed until Section 6.9. Assumption 2 eliminates stabil-
ising adjustments that might take place via the nominal exchange rate and/or
in productivity. In empirical work this amounts to the question of whether it is
valid to condition upon import prices (in domestic currency) and/or productiv-
ity. Section 5.5 gives an empirical example of such valid conditioning, since we
found weak exogeneity of productivity with respect to the identiﬁed long-run
wage curve.
    The reduced form equation for the product real wage wq,t is

           wq,t = δt + ξ∆pit + κwq,t−1 + λpiq,t−1 − ηut−1 + wq ,t ,
                  0 ≤ ξ ≤ 1, 0 ≤ κ ≤ 1, 0 ≤ λ,                              (6.9)

with disturbance term wq ,t , a linear combination of εw,t and εq,t , and
coeﬃcients which amalgamate the parameters of the structural equations:

            δt = [(cw + θw mb + θw ιat−1 )(1 − ψqw )
                  − (cq − θq mf − θq at−1 )(1 − ψwq − ψwp φ)]/χ,
             ξ = [ψwp (1 − ψqw )(1 − φ) − ψqi (1 − ψwq − ψwp φ)]/χ,
             λ = θw ω(1 − ψqw )(1 − φ)/χ,                                  (6.10)
             κ = 1 − [θw (1 − ψqw ) + θq (1 − ψwq − ψwp φ)]/χ,
             η = [µw (1 − ψqw ) − µq (1 − ψwq − ψwp φ)]/χ.

The denominator of the expressions in (6.10) is given by

                         χ = (1 − ψqw (ψwq + ψwp φ)).                      (6.11)

The corresponding reduced form equation for the real exchange rate piq,t can
be written as

          piq,t = −dt + e ∆pit − k wq,t−1 + l piq,t−1 + nut−1 + piq ,t ,
                  0 ≤ e ≤ 1, l ≤ 1, 0 ≤ n,                                 (6.12)
94                                                         Wage–price dynamics

where the parameters are given by

         dt = [(cq − θq mf − θq at−1 ) + (cw + θw mb + θw ιat−1 )ψqw ]/χ,
          e = 1 − [ψqw ψwp (1 − φ) − ψqi ]/χ,
         l = 1 − [ψqw θw ω(1 − φ)/χ] ,                                      (6.13)
         k = (θq − ψqw θw )/χ,
         n = (µw ψqw + µq )/χ.

Equations (6.9) and (6.12) constitute a system of ﬁrst-order diﬀerence equations
that determines the real wage wq,t and the real exchange rate piq,t at each point
in time. As usual in dynamic economics we consider the deterministic system,
corresponding to a hypothetical situation in which all shocks εw,t and εq,t (and
thus wq ,t and piq ,t ) are set equal to zero. Once we have obtained the solutions
for wq,t and piq,t , the time paths for ∆wt , ∆pt , and ∆qt can be found by
backward substitution.
    The roots of the characteristic equation of the system are given by

                           1                        
                      r=      (κ + l) ± (κ − l)2 − 4kλ ,                    (6.14)
                           2

hence the system has a unit root whenever kλ = 0 and either κ = 1 or l = 1.
Using (6.10) and (6.13), we conclude that the wage–price system has both its
roots inside the unit circle unless one or more of the following conditions hold:

                                            θw ω = 0,                       (6.15)
                                         θw = θq = 0,                       (6.16)
                            ψqw (1 − ψqw ) = θq = 0.                        (6.17)

Based on (6.15)–(6.17), we can formulate a set of suﬃcient conditions for stable
roots, namely

        θw > 0   and θq > 0        and      ω>0     and ψqw < 1.            (6.18)

The ﬁrst two conditions represent equilibrium correction of wages and prices
with respect to deviations from the wage curve and the long-run price-setting
schedule. The third condition states that there is a long-run wedge eﬀect in
wage-setting. Finally, a particular form of dynamic response is precluded by the
fourth condition: for stability, a one point increase in the rate of wage growth
must lead to less than one point increase in the rate of price growth. Note that
ψqw = 1 is diﬀerent from (and more restrictive than) dynamic homogeneity
in general, which would entail ψqw + ψqi = 1 and ψwp + ψwq = 1. Dynamic
homogeneity, in this usual sense, is consistent with a stable steady state.
6.4 Stable solution of wage–price system                                                  95


6.4      The stable solution of the conditional
         wage–price system
If the suﬃcient conditions in (6.18) hold, we obtain a dynamic equilibrium—
the ‘tug of war’ between workers and ﬁrms reaches a stalemate. The system is
stable in the sense that, if all stochastic shocks are switched-oﬀ, piq,t → piq,ss (t)
and wq,t → wq,ss (t), where piq,ss (t) and wq,ss (t) denote the deterministic
steady-state growth paths of the real exchange rate and the product real wage.
The steady-state growth paths are independent of the historically determined
initial conditions piq,0 and wq,0 but depend on the steady-state growth rate of
import prices (gpi ), of the mean of ut denoted uss , and of the expected time
path of productivity:
                wq,ss (t) = ξ 0 gpi + η 0 uss + ga (t − 1) − δ 0 ,                     (6.19)
                                                   1−ι
                piq,ss (t) = e0 gpi + n0 uss +             ga (t − 1) − d0 ,           (6.20)
                                                ω(1 − φ)
where ga is the drift parameter of productivity.4 The coeﬃcients of the two
steady-state paths in (6.19) and (6.20) are given by (6.21):
      ξ 0 = (1 − ψqw − ψqi )/θq ,
      η 0 = µq /θq ,
      δ 0 = (cq − θq mf )/θq + coeﬀ × ga ,
                                                                                       (6.21)
      e0 = [θq (1 − ψwq − ψwp ) + θw (1 − ψqw )]/θw θq ω(1 − φ),
      n0 = (θq µw + θw µq )/θw θq ω(1 − φ),
      d0 = [θq (cw + θw mb ) + θw (cq − θq mf )] /θw θq ω(1 − φ) + coeﬀ × ga .
One interesting aspect of equations (6.19) and (6.20) is that they represent
formalisations and generalisations of the main-course theory of Chapter 3. In
the current model, domestic ﬁrms adjust their prices in response to the evolu-
tion of domestic costs and foreign prices, they do not simply take world prices
as given. In other words, the one-way causation of Aukrust’s model has been
replaced by a wage–price spiral. The impact of this generalisation is clearly seen
in (6.19) which states that the trend growth of productivity ga (t − 1) traces
out a main course, not for the nominal wage level as in Figure 3.1, but for the
real wage level. It is also consistent with Aukrust’s ideas that the steady state
of the wage share: wsss (t) ≡ wq,s (t) − ass (t), is without trend, that is,
                                wsss = ξ 0 gpi + η 0 uss − δ 0                         (6.22)
but that it can change due to, for example, a deterministic shift in the long-run
mean of the rate of unemployment.

               4 Implicitly, the initial value a
                                                   0 of productivity is set to zero.
96                                                               Wage–price dynamics

    According to (6.20), the real exchange rate in general also depends
on the productivity trend. Thus, if ι < 1 in the long-run wage equation (5.10),
the model predicts continuing depreciation in real terms. Conversely, if ι = 1
the steady-state path of the real exchange rate is without a deterministic trend.
Note that Sections 5.5 and 5.6 showed results for two data sets, where ι = 1
appeared to be a valid parameter restriction.
    Along the steady-state growth path, with ∆uss = 0, the two rates of change
of real wages and the real exchange rate are given by:
                     ∆wq,ss = ∆wss − ∆qss = ga ,
                                               1−ι
                     ∆piq,ss = ∆piss − ∆qss =          ga .
                                              ω(1 − φ)
Using these two equations, together with (6.7)
                           ∆pss = φ∆qss + (1 − φ)gpi ,
we obtain
                           ∆wss = gpi + ga ,                                  (6.23)
                                           1−ι
                           ∆qss = gpi −           ga ,                        (6.24)
                                        ω(1 − φ)
                                         φ(1 − ι)
                           ∆pss = gpi −           ga .                        (6.25)
                                        ω(1 − φ)
It is interesting to note that equation (6.23) is fully consistent with the
Norwegian model of inﬂation of Section 3.2.2. However, the existence of a steady
state was merely postulated in that section. The present analysis improves on
that, since the steady state is derived from set of diﬀerence equations that
includes wage bargaining theory and equilibrium correction dynamics. Equa-
tions (6.24) and (6.25) show that the general solution implies a wedge between
domestic and foreign inﬂation. However, in the case of ι = 1 (wage earners
beneﬁt fully in the long term from productivity gains), we obtain the standard
open economy result that the steady-state rate of inﬂation is equal to the rate
of inﬂation abroad.
    What does the model tell us about the status of the NAIRU? A succinct
summary of the thesis is given by Layard et al. (1994):
‘Only if the real wage (W/P ) desired by wage-setters is the same as that desired
by price-setters will inﬂation be stable. And, the variable that brings about this
consistency is the level of unemployment.’5

   Compare this to the equilibrium consisting of ut = uss , and wq,ss and piq,ss
given by (6.19) and (6.20): clearly, inﬂation is stable, since (6.23)–(6.25) is
implied, even though uss is determined ‘from outside’, and is not determined
                    5 Layard et al. (1994, p. 18), authors’ italics.
6.4 Stable solution of wage–price system                                      97

by the wage- and price-setting equations of the model. Hence, the (emphasised)
second sentence in the quotation is not supported by the steady state. In other
words, it is not necessary that uss corresponds to ūw in equation (5.7) in Chap-
ter 5 for inﬂation to be stable. This contradiction of the quotation occurs in
spite of the model’s closeness to the ICM, that is, their wage- and price-setting
schedules appear crucially in our model as cointegration relationships.
    In Sections 6.5 and 6.6, we return to the NAIRU issue. We show there that
both the wage curve and Phillips curve versions of the NAIRU are special cases
of the model formulated above. But ﬁrst, we need to discuss several important
special cases of wage–price dynamics.


6.4.1     Cointegration, long-run multipliers,
          and the steady state
There is a correspondence between the elasticities in the equations that describe
the steady-state growth paths and the elasticities in the cointegrating relation-
ships (5.11) and (5.14). However, care must be taken when mapping from one
representation to the other. For example, since much applied work pays more
attention to wage-setting (the bargaining model) than to price-setting, it is
often implied that the coeﬃcient of unemployment in the estimated cointegrat-
ing wage equation also measures how much the steady-state growth path of
real wages changes as a result of a permanent shift in the rate of unemploy-
ment. In other words, the elasticity in the cointegrating equation is interpreted
as the long-run multiplier of real wages with respect to the rate of unemploy-
ment. However, from (6.19) the general result (from the stable case) is that the
long-run multiplier of the producer real wage wq is
                              ∂wq
                                  = η 0 = ϑ ≥ 0,
                              ∂u
that is, the elasticity of unemployment in the long-term price-setting equa-
tion (5.13), not the one in the wage curve (5.11).
    Moreover, long-run multipliers are not invariant to the choice of deﬂator.
Thus, if we instead consider the long-run multiplier of the consumer real wage
w − p, we obtain                                  
                       ∂(w − p)              1
                                 = ϑ 1−          −  ≤ 0.
                          ∂u                ω
Comparing the multipliers for the two deﬁnitions of the real wage, it is
evident that it is only the multiplier of the consumer real wage curve that
has the conventional negative sign. However, also ∂(w − p)/∂u is a function of
the elasticities from both cointegrating relationships (price and wage).
    The one-to-one correspondence between the long-run multiplier and the
unemployment elasticity in the ‘wage curve’ (5.11) requires additional assump-
tions. Consider, for example, the case of ω = 1 and ϑ = 0, that is, only costs
98                                                          Wage–price dynamics

of living (not product prices) play a role in wage bargaining, and domestic
ﬁrms practice normal cost pricing. As argued in Section 5.4, this corresponds
to the case of aggregate wage–price dynamics, and we obtain ∂wq /∂u = 0 and
∂(w − p)/∂u = −. Thus, the long-run multiplier of the consumer real wage
is identical to the elasticity of unemployment in the wage curve in this case.


6.4.2     Nominal rigidity despite dynamic homogeneity
At ﬁrst sight, one might suspect that the result that uss is undetermined by
the wage- and price-setting equations has to do with dynamic inhomogeneity,
or ‘monetary illusion’. For example, this is the case for the Phillips curve model
where the steady-state rate of unemployment corresponds to the natural rate
whenever the long-run Phillips curve is vertical, which in turn requires that
dynamic homogeneity is fulﬁlled. Matters are diﬀerent in the model in this
section, though. As explained above, the property of dynamic homogeneity
requires that we impose ψqw + ψqi = 1 in the equation representing price form-
ation, and ψwq + ψwp = 1 in the dynamic wage curve. It is seen directly from
(6.18) that the model is asymptotically stable even when made subject to these
two restrictions. Thus the equilibrium conditioned on a level of unemployment
uss determined outside the system, does not require dynamic inhomogeneity.
Put diﬀerently, the two restrictions, ψqw +ψqi = 1 and ψwq +ψwp = 1 (dynamic
homogeneity) do not remove nominal rigidity from the system.
    The stable solution even applies to the case of ψqw = 1 (ψqi = 0), in which
case the coeﬃcients of the reduced form equation for wq,t reduce to
                          δt = −(cq − θq mf − θq at−1 ),
                          ξ = 0,
                          λ = 0,                                              (6.26)
                          κ = 1 − θq ,
                          η = −µq ,
while the coeﬃcients (6.13) of the reduced form equation (6.12) for piq become
        d = [(cq − θq mf − θq at−1 ) + (cw + θw mb + ιat−1 )] /ψwp (1 − φ),
        e = 0,
        l = 1 − θw ω/ψwp ,                                                    (6.27)
        k = (θq − θw )/(ψwp (1 − φ)),
        n = (µw + µq )/(ψwp (1 − φ)).
   Since λ = 0 in (6.26), there is no eﬀect of the real exchange rate in the
reduced-form equation for real wages, hence the solution for real wages can be
obtained from equation (6.9) alone. Note also how all coeﬃcients of the real
wage equation (6.9) depend only on parameters from the ﬁrms’ price-setting,
whereas the competitiveness equation (6.12) still amalgamates parameters from
both sides of the wage bargain, as is seen from the coeﬃcients in (6.27).
6.4 Stable solution of wage–price system                                                        99

    The steady state is given by (6.19) and (6.20) as before. The expressions for
η 0 and n0 are unchanged, but ξ 0 = e0 = 0 as a result of dynamic homogeneity,
hence we obtain the expected result that the steady-state real exchange rate
and the real wage are both unaﬀected by the rate of international inﬂation.


6.4.3       An important unstable solution:
            the ‘no wedge’ case
Real-wage resistance is an inherent aspect of the stable solution, as θw ω = 0
is one of the conditions for the stability of the wage–price system, cf. equation
(6.15). However, as we have discussed earlier, the existence or otherwise of
wedge eﬀects remains unsettled, both theoretically and empirically, and it is of
interest to investigate the behaviour of the system in the absence of real wage
resistance, that is, θw ω = 0 due to ω = 0.
    Inspection of (6.9) and (6.12) shows that in this case, the system partitions
into a stable real wage equation

                          wq,t = δt + ξ∆pit + κwq,t−1 − ηut−1 ,                            (6.28)

and an unstable equation for the real exchange rate

                       ∆piq,t = −dt + e∆pit − kwq,t−1 + nut−1 .                            (6.29)

Thus, in the same way as in the stable case of ω > 0, the real wage follows
a stationary autoregressive process around the productivity trend which is
included in δt . However, from (6.29), the real exchange rate is seen to follow
a unit root process, albeit with wq,t−1 , ut−1 , and a (suppressed) disturbance
term as I(0) variables on the right-hand side.6
    The steady-state real-wage path is given by:
                                     δt      ξ             η
                    wq,ss (t) =          +        gpi −         uss .                      (6.30)
                                  (1 − κ) (1 − κ)       (1 − κ)
Unlike the real wage given by (6.19), the coeﬃcients of the long-run real
wage in (6.30) contain parameters from both sides of the bargain, not only
price-setting. The expression for the long-run multiplier with respect to the
unemployment rate, ∂wq,ss /∂uss , shows interesting diﬀerences from the stable
case in Section 6.4:
                ∂wq,ss    [θw (1 − ψqw ) − θq ϑ(1 − ψwq − ψwp φ)]
                       =−                                          .
                 ∂uss       [θw (1 − ψqw ) + θq (1 − ψwq − ψwp φ)]
The multiplier is now a weighted sum of the two coeﬃcients  (wage curve)
and ϑ (price-setting). With normal cost pricing ϑ = 0, the long-run multiplier
is seen to be negative.

  6 Of course, if there is a long-run eﬀect of competitiveness on prices, that is (5.6) is extended

by a competitiveness term, ω = 0 is not suﬃcient to produce an unstable solution.
100                                                             Wage–price dynamics

   The long-run elasticity of wq,ss with respect to productivity becomes
              ∂wq,ss   ι + (θq /θw )(1 − ψwq − ψwp φ)/(1 − ψqw )
                     =                                           .
               ∂a      1 + (θq /θw )(1 − ψwq − ψwp φ)/(1 − ψqw )
Hence, in the case of ι = 1 in the cointegrating wage equation, the long-run
multiplier implies that the product real-wage will increase by 1% as a result of
a 1% permanent increase in productivity. Thus, the steady-state wage share is
again without a deterministic trend.
    The steady-state rate of inﬂation in the no-wedge case is obtained by sub-
stituting the solution for the real wage (6.30) back into the two equilibrium
correction equations (6.3), imposing ω = 0, and (6.5), and then using the
deﬁnition of consumer prices in (5.9). The resulting steady-state rate of inﬂa-
tion can be shown to depend on the unemployment rate and on import price
growth, that is, ∆p = ∆pi in the equilibrium associated with the ‘no wedge’
case (ω = 0). Instead, the derived long-run Phillips curve is downward-sloping
provided that η > 0.
    Finally we note that, unlike the static wage curve of Chapter 5, the
‘no wedge’ restriction (ω = 0) in itself does not imply a supply-side deter-
mined equilibrium rate of unemployment.7 The restrictions that are suﬃcient
for the model to imply a purely supply-side determined equilibrium rate of
unemployment is considered in Section 6.5.


6.4.4     A main-course interpretation
In Chapter 3 we saw that an important assumption of Aukrust’s main-course
model is that the wage-share is I(0), and that causation is one way: it is only the
exposed sector wage that corrects deviations from the equilibrium wage share.
Moreover, as maintained throughout this chapter, the reconstructed Aukrust
model had productivity and the product price as exogenous I(1) processes.
    The following two equations, representing wage-setting in the exposed
sector, bring these ideas into our current model:
                 b
                wq,t = mb + at −  ut ,         0 < ι ≤ 1,      ≥ 0,        (6.31)
and
                    b
         ∆wt = θw (wq,t−1 − wq,t−1 ) + ψwp ∆pt + ψwq ∆qt + cw + εw,t ,
               0 ≤ ψwp + ψwq ≤ 1, θw ≥ 0.                                    (6.32)
In Section 3.2 we referred to (6.31) as the extended main-course hypothesis. It
is derived from (5.10) by setting ω = 0, since in Aukrust’s theory, there is no
role for long-run wedge eﬀects, and in the long run there is full pass-through
from productivity on wages, ι = 1. Equation (6.32) represents wage dynamics

                   7 See, for example, Layard et al. (1991, p. 391).
6.4 Stable solution of wage–price system                                      101

in the exposed industry and is derived from (6.1) by setting ϕ = 0 (since by
assumption θw > 0). Note that we include the rate of change in the consumer
price index (CPI) ∆pt , as an example of a factor that can cause wages to deviate
temporarily from the main course (i.e. domestic demand pressure, or a rise in
indirect taxation that lead to a sharp rise in the domestic costs of living).
    The remaining assumptions of the main-course theory, namely that the
sheltered industries are wage followers, and that prices are marked up on normal
costs, can be represented by using a more elaborate deﬁnition of the CPI than
in (6.7), namely

             ∆pt = φ1 ∆qt + φ2 (∆wt − ∆at ) + (1 − φ1 − φ2 )∆pit ,         (6.33)

where φ1 and φ2 are the weights of the products of the two domestic indus-
tries in the log of the CPI. The term φ2 ∆wt amalgamates two assumptions:
followership in the sheltered sector’s wage formation and normal cost pricing.
    The three equations (6.31)–(6.33) imply a stable diﬀerence equation for the
product real wage in the exposed industry. Equations (6.31) and (6.32) give

  ∆wt = kw + ψwp ∆pt + ψwq ∆qt − θw [wq,t−1 − at−1 + ut−1 ] + εw,t ,      (6.34)

and when (6.33) is used to substitute ∆pt , the equilibrium correction equation
for wq,t can be written as

              ∆wq,t = k̃w + (ψ̃wq − 1)∆qt + ψ̃wpi ∆pit − ψ̃wpa ∆at
                       − θ̃w [wq,t−1 − at−1 + ut−1 ] + ε̃w,t ,            (6.35)

with coeﬃcients

                      k̃w = kw /(1 − ψwp φ1 ),
                     ψ̃wq = (ψwq + ψwp φ1 )/(1 − ψwp φ1 ),
                    ψ̃wpi = ψwp φ2 /(1 − ψwp φ1 ),
                    ψ̃wpi = ψwp (1 − φ1 − φ2 )/(1 − ψwp φ1 ),
                      θ̃w = θw /(1 − ψwp φ1 ),

and disturbance ε̃w,t = εw,t /(1 − ψwp φ1 ).
    In the same manner as before, we deﬁne the steady state as a hypothetical
situation where all shocks have been switched oﬀ. From equation (6.35), and
assuming dynamic homogeneity for simplicity, the steady-state growth path
becomes
                   wq,ss (t) = k̃w,ss − uss + ga (t − 1) + a0 ,       (6.36)
where k̃w,ss = {k̃w +(ψwp φ2 −1)ga }/θ̃w . This steady-state solution contains the
same productivity trend as the unrestricted steady-state equation (6.19), but
there is a notable diﬀerence in that the long-run multiplier is −, the slope
coeﬃcient of the wage curve.
102                                                          Wage–price dynamics

  In Section 6.9.2 we estimate an empirical model for the Norwegian
manufacturing industry which corresponds closely to equations (6.31)–(6.33).



6.5     Comparison with the wage-curve NAIRU
In Chapter 5 we saw that the model with bargained wages and price-setting
ﬁrms deﬁned a certain level of unemployment denoted ūw at which the con-
ﬂicting real wage claims were reconciled. Moreover, if there is no wedge term
in wage-setting, theory implies that ūw depends only of factors in wage- and
price-setting.
    Recall ﬁrst that the two long-term relationships are

  wage-setting    wq,t = mb + ιat + ωpq,t −  ut + ecmb,t ,      E[ecmb,t ] = 0,
  price-setting   wq,t = mf + at + ϑut + ecmf,t ,                E[ecmf,t ] = 0.

The counterpart to ūw is derived by taking the (unconditional) expectation on
both sides of (5.11) and (5.14) and solving for the rate of unemployment:
              mb − mf     ι−1               ω
      ūw
        t =           +         E[at ] +         E[pq,t ],      ω ≥ 0.      (6.37)
              (ϑ + )   (ϑ + )          (ϑ + )
We add a time subscript to ūw , since the mean of productivity, a non-stationary
variable, enters on the right-hand side of the expression. Remember that at in
wage-setting is essential for the framework to accommodate the integration
properties of the wage and price data. However, in the case of ι = 1 (full pass
through of productivity on real wages) and ω = 0 (no wedge) the expression of
the wage curve NAIRU simpliﬁes to
                                         mb − mf
                                 ūw =           ,                          (6.38)
                                         (ϑ + )
which corresponds to the fundamental supply-side determined NAIRU of the
static incomplete competition model (see equation (5.8)).
    In Section 6.4 we established the general result that ut → uss = ūw , which
contradicts ICM though we build on the same long-run wage and price
equations. The diﬀerence is that we model the implied equilibrium correction
behaviour of wages and prices. Thus, there is in general no correspondence
between the wage curve NAIRU and the steady state of the wage–price
system (the correspondence principle of Samuelson (1941) appears to be
violated).
    Interestingly, elimination of ‘money illusion’, by imposing ψwp + ψwq = 1
(workers) and ψqw + ψqi = 1 (ﬁrms), is not enough to establish dynamic cor-
respondence between ūw and uss , see Section 6.4.2. Instead, to formulate a
6.5 Comparison with the wage-curve NAIRU                                                 103

dynamic model that captures the heuristic dynamics of the static wage curve
model, we invoke the following set of restrictions:

(1) Eliminate the wedge in the long-run wage equation, ω = 0, but maintain
    θw > 0.
(2) Impose short-run homogeneity of the particular form ψqw = ψwq = 1, and
    hence ψwp = ψqi = 0.

The implication of (1) and (2) is that (6.3) and (6.5) are two conﬂicting equa-
tions of the product real wage wq,t . Essentially, all nominal rigidity is eliminated
from the model. The assumption of an exogenously determined rate of unem-
ployment can no longer be reconciled with dynamic stability.8 Instead, we argue
(heuristically) that unemployment has to converge to the level necessary to rec-
oncile the ‘battle of markups’ incarnated in two conﬂicting real wage equations.
Formally, the system that determines the time paths of wq,t and ut becomes

             ∆wq,t = kw − θw ut−1 − θw wq,t−1 + θw ιat−1 + εw,t ,                   (6.39)
             ∆wq,t = −kq + θq ϑut−1 − θq wq,t−1 + θq at−1 + εq,t .                   (6.40)

Consistency with cointegration implies that θq and/or θw are strictly positive,
and the roots of (6.39) and (6.40) are therefore within the unit circle. Hence,
in a situation where all shocks are switched oﬀ, ut → ūw :
                                               θq − θw
                              uw = ūw +               ga ,                          (6.41)
                                               (ϑ + )
where the second term on the right-hand side reﬂects that the model
(6.39)–(6.40) is a dynamic generalisation of the conventional static ICM.
    Figure 6.1 illustrates the diﬀerent equilibria. The upward sloping line repre-
sents ﬁrms’ price-setting and the downward sloping line represents wage-setting
(they deﬁne a phase diagram). According to the wage curve model, the only
possible equilibrium is where the two line cross, hence the NAIRU ūw is
also the dynamic equilibrium. It is not surprising to ﬁnd that the natural
rate property is equivalent to having a wage–price system that is free of any
form of nominal rigidity, but the restrictions needed to secure nominal neut-
rality are seldom acknowledged: neither long-term nor dynamic homogeneity
are suﬃcient, instead the full set of restrictions in conditions (1) and (2) is
required. There is no logical or practical reason which forces these restrictions
on the dynamic wage–price system, and without them, a rate of unemployment
like uss is fully consistent with a steady-state rate growth of the real wage, and
a stationary wage share, cf. Section 6.4.

      8 The roots of the system (where u
                                           t is exogenous) are r1 = 1 − θq and r2 = 1.
104                                                                Wage–price dynamics




                                                         Price-setting



                     Real wage


                                                   Wage-setting


                                 uss    uw
                                 Log of rate of unemployment

           Figure 6.1. Real wage and unemployment determination.
                        Static and dynamic equilibrium


   On the other hand, there is nothing that says that (1) and (2)
cannot hold, and econometric speciﬁcation and testing of wage–price systems
should investigate that possibility.



6.6     Comparison with the wage Phillips curve
        NAIRU
In the case of no equilibrium correction in nominal wage-setting, θw = 0,
equation (6.1) simpliﬁes to
                ∆wt = cw + ψwp ∆pt + ψwq ∆qt − ϕut−1 + εw,t ,                   (6.42)
which is consistent with the short-run Phillips curve in equation (4.1) of
Chapter 4. From the stability analysis of Section 6.3, θw = 0 implies λ = 0
and κ = 0 in (6.9) and (6.12), and the solution of the system is qualitatively
identical to the ‘no wedge’ case: the real wage is stable around the productivity
trend, whereas the real exchange rate is unstable because of the unit root. Thus
there is a paradox in the sense that despite the open economy Phillips curve in
(6.42), there is no implied equilibrium rate of unemployment (uphil ) of the form
found in equation (4.10) in Chapter 4. However, it is clear that the Phillips curve
system involves an important extra assumption: foreign prices were assumed
to be taken as given by domestic producers, which in the present model trans-
lates into θq = ψqw = 0. Thus, restricting both wage- and price-setting by
imposing
                               θw = θq = ψqw = 0,
is seen to imply two unit roots, and the system is now cast in terms of the two
diﬀerence variables ∆wq,t and ∆piq,t . Consequently, neither the real wage level
6.7 Estimated wage–price models                                                        105

nor the real exchange rate are dynamically stable (even subtracting the pro-
ductivity trend). Heuristically, in order to re-establish a stable steady state
for the real wage, the assumption of a separate stationary model for ut must
be replaced by something like equation (4.2) in Chapter 4, that is, a separate
equation for the rate of unemployment.9



6.7      Do estimated wage–price models support
         the NAIRU view of equilibrium
         unemployment?
The analysis of this chapter has shown that there is no logical reason why
dynamic stability of real wages and inﬂation should imply or ‘require’ a
supply-side determined NAIRU. Conversely, by claiming that a derived (and
estimated) NAIRU from an incomplete system of equations corresponds to
the dynamic equilibrium level of unemployment in the economy, one invokes
restrictions on the (unspeciﬁed) wage–price dynamics that may or may not hold
empirically.
    As we have seen, there are necessary conditions for correspondence that
can be tested from wage equations alone. This is fortunate, since a range of
studies estimate wage models of the ICM type. Often the aim of the studies
have been to estimate the NAIRU, or at least to isolate its determinants. They
represent a body of research evidence that can be re-interpreted using our
framework. While not claiming to be complete, Section 6.7.1 aims to summarise
the evidence found in several econometric studies of (single-equation) wage
models. Section 6.7.2 then discusses in more detail the NAIRU implications of
a wage–price system estimated for United Kingdom aggregate data.


6.7.1      Empirical wage equations
Empirical models of Nordic manufacturing wage formation are reviewed and
updated in Nymoen and Rødseth (2003). Their results for Denmark, Finland,
Norway, and Sweden strongly reject the Phillips curve speciﬁcation. The
evidence against the Phillips curve hypothesis, θw = 0, is not conﬁned
to the Nordic countries; see, for example, Grubb (1986) and Drèze and
Bean (1990) who analyse manufacturing wages for a number of European
economies.

  9 Note that an identical line of reasoning starts from setting θ = 0 and leads to a price
                                                                  q
Phillips curve NAIRU. This seems to give rise to an issue about logical (and empirical)
indeterminacy of the NAIRU, but inﬂuential papers like Gordon (1997) are not concerned
with this, reporting instead diﬀerent NAIRU estimates for diﬀerent operational measures of
inﬂation.
106                                                                  Wage–price dynamics

    Turning to the bargaining model, the main idea is that the NAIRU can
be derived from the long-run real wage and price equations. If there is no wedge
term in the wage equation, the NAIRU is independent of the real exchange rate.
However, the above analysis shows that only subject to speciﬁc restrictions
does the wage curve NAIRU correspond to the steady state of the system. The
Nordic study by Nymoen and Rødseth (2003), while supporting that ω = 0,
implies strong rejection of the NAIRU restrictions on the dynamics. Results for
other European countries give the same impression: for example, 6 out of 10
country-studies surveyed by Drèze and Bean (1990) do not imply a wage curve
NAIRU, since they are not genuine product real wage equations: either there
is a wedge eﬀect in the levels part of the equation (ω > 0), or the authors fail
to impose ψwq = 1, ψwp = 0.10
    For the United Kingdom, there are several individual studies to choose
from, some of which include a signiﬁcant wedge eﬀect, that is, ω > 0 (see, for
example, Carruth and Oswald 1989 and Cromb 1993). In a comprehensive
econometric study of United Kingdom inﬂation, Rowlatt (1992) is able to
impose dynamic homogeneity, ψwp +ψwq = 1 in wage formation, but the NAIRU
restriction ψwq = 1 is not supported by the data.11 The work of Davies and
Schøtt-Jensen (1994) contains similar evidence for several EU countries. For
the majority of the data sets, consumer price growth is found to be important
alongside producer prices, and as we have shown this is suﬃcient to ques-
tion the logical validity of the claims made in the same study, namely that
a steady-state unemployment equilibrium is implied by the estimated real-wage
equations.
    OECD (1997b, table 1.A.1) contains detailed wage equation results for 21
countries. For 14 countries the reported speciﬁcation is of the wage-curve type
but the necessary restrictions derived above on the short-run dynamics are
rejected. Phillips curve speciﬁcations are reported for the other seven countries,
notably for the United States, which corroborate evidence in other studies; see
Blanchard and Katz (1997) for a discussion.
    This brief overview conﬁrms the impression that the evidence from
European data supports a wage curve rather than a Phillips curve speciﬁca-
tion. However, in the light of the model framework of this section, the estimated
wage curves do not support the identiﬁcation of the implied NAIRUs with the
equilibrium level of unemployment.

 10 From Drèze and Bean (1990, table 1.4), and the country papers in Drèze and Bean

(1990) we extract that the equations for Austria, Britain, and (at least for practical purposes)
Germany are ‘true’ product real-wage equations. The equation for France is of the Phillips-
curve type. For the other countries we have, using our own notation: Belgium and the
Netherlands: consumer real-wage equations, that is, ψwp = 1, ψwq = 0, and ω = 1. Denmark:
ω = 1, ψwp = 0.24, ψwq = 0.76. Italy: ω = 0, ψwp = 0.2(1 − φ), ψwq = 0.8(1 − φ).
United States: ω = 0.45(1 − φ), ψwq = 1, ψwp = 0. Spain: ω = 0.85 · 0.15, θw = 1, ψwp = ω,
ψwq = 1 − ω (the equation for Spain is static).
 11 See Rowlatt (1992: ch. 3.6).
6.7 Estimated wage–price models                                             107

6.7.2     Aggregate wage–price dynamics
          in the United Kingdom
In Section 5.6 we showed that, using aggregate wage and price data for the
period 1976(3)–1993(1), the following long-term wage and price equations were
identiﬁed (see Table 5.3).

            (1) w = p + a − t1 − 0.065u + constant;                       (6.43)
            (2) p = 0.89(w + t1 − a) + 0.11pi + 0.6t3 + constant.         (6.44)

Next, consider the model in Table 6.1 which is estimated by full information
maximum likelihod (FIML). Equations (6.43) and (6.44) are incorporated into
the dynamic model as equilibrium-correction terms, and their importance is
clearly shown. In addition to the equilibrium-correction term, wages are driven
by growth in consumer prices over the last two periods and by productiv-
ity gains. With an elasticity estimate of 0.66 and a standard error of 0.039,
short-run homogeneity is clearly rejected.
    The negative coeﬃcient estimated for the change in the indirect tax-rate
(∆t3t ) is surprising at ﬁrst sight. However, according to equation (6.44),
consumer prices respond when the tax rate is increased which in turn is passed
on to wages. Hence, the net eﬀect of a discretionary change in the indirect tax
rate on wages is estimated to be eﬀectively zero in the short run and positive
in the intermediate and long run. The eﬀect of an increase in the payroll tax
rate is to reduce earnings, both in the short- and long-run.
    According to the second equation in Table 6.1, prices respond sharply
(by 0.96%) to a 1 percentage change in wage costs. Hence short-run homogene-
ity is likely to hold for prices. In addition to wage increases and equilibrium-
correction behaviour, price inﬂation is seen to depend on the output gap,
as captured by the variable gap.
    Finally, note that the two dummy variables for incomes policy, BONUS
and IP4, are signiﬁcant in both equations, albeit with diﬀerent signs. Their
impact in the ﬁrst equation is evidence of incomes policy raising wages, and
their reversed signs in the price equation indicate that these eﬀects were not
completely anticipated by price-setters.
    The diagnostics reported at the bottom of Table 6.1 give evidence of a well-
determined model. In particular, the insigniﬁcance of the overidentiﬁcation χ2
statistic, shows that the model encompasses the implied unrestricted reduced
form—see Bårdsen et al. (1998) for evidence of recursive stability.
    The signiﬁcant equilibrium correction terms are consistent with previous
cointegration results, and are clear evidence against a Phillips curve NAIRU,
that is, θq > 0 and θw > 0 in the theory model. As for the wage curve NAIRU,
note that the model formulation implies ω = 1 in the theory model, rather
than ω = 0 which is one necessary requirement for correspondence between uw
108                                                      Wage–price dynamics

                                 Table 6.1
                     The model for the United Kingdom
The wage equation
 t = 0.187 ∆wt−1 + 0.332 (∆2 pt + ∆at ) − 0.341 ∆2 t1t
∆w
       (0.075)          (0.039)                        (0.100)
      − 0.162 ∆2 t3t − 0.156 (wt−2 − pt−2 − at−1 + t1t−2 + 0.065ut−1 )
        (0.064)         (0.023)
      + 0.494 + 0.013 BONUS t + 0.003 IP 4t
        (0.071) (0.003)                    (0.001)
                                  σ̂ = 0.45%
The price equation
 t = 0.963 ∆wt − 0.395 ∆at + 0.153 ∆(p + a)t−1
∆p
      (0.149)       (0.118)             (0.059)
      − 0.044 ∆ut−1 + 0.536 ∆t3t
        (0.019)          (0.092)
      − 0.480 [pt−1 − 0.89(w + t1 − a)t−2 − 0.11pit−2 − 0.6t3t−1 ]
        (0.047)
      + 0.238 gapt−1 − 1.330 − 0.019 BONUS t − 0.005 IP 4t
        (0.099)           (0.131) (0.005)                     (0.001)
                                  σ̂ = 0.71%
Diagnostic tests
                   χ2overidentiﬁcation (16) = 24.38[0.08]
                           FvAR(1−5) (20, 94) = 0.97[0.50]
                                  χ2,v
                                     normality (4) = 3.50[0.48]
                              FvHETx2 (84, 81) = 0.63[0.98]

Note: The sample is 1976(3)–1993(1), 67 observations. Estimation is by
FIML. Standard errors are in parentheses below the estimates. The symbol
σ̂ denotes the estimated percentage residual standard error. The p-values of
the diagnostic tests are in brackets.


and uss . In addition, although the estimates suggest that dynamic homogene-
ity can be imposed in the price equation, a similar restriction is statistically
rejected in the wage equation.


6.8     Econometric evaluation of Nordic
        structural employment estimates
While early models treated the NAIRU as a quasi ﬁxed parameter, cf. the open
economy Phillips curve NAIRU of Chapter 4, the ICM framework provides
the intellectual background for inclusion of a wider range of supply-side and
socioeconomic structural characteristics. Such factors vary over time and across
6.8 Nordic structural employment estimates                                     109

countries. There has been a large output of research that looks for the true struc-
tural sources of ﬂuctuations in the NAIRU. This includes the joint estimation
of wage- and price-equations (see Nickell 1993 and Bean 1994 for surveys), but
also reduced form estimation of unemployment equations with variables rep-
resenting structural characteristics as explanatory variables. However, despite
these eﬀorts, the hypothesis of shifts in structural characteristics have failed to
explain why the unemployment rates have risen permanently since the 1960s;
see Cross (1995), Backhouse (2000), and Cassino and Thornton (2002).
    An alternative approach to the estimation of the NAIRU is based on some
sort of ﬁltering technique, ranging from the simplest HP ﬁlter, to advanced
methods that model the natural rate and trend output jointly in a ‘stochastic
parameter’ framework estimated by the Kalman ﬁlter (see Apel and Jansson
1999 and Richardson et al. 2000). A common assumption of these studies is
that the (stochastic) NAIRU follows a random walk, that is, its mean does
not exist. As discussed in Section 4.3, in connection with the Phillips curve
NAIRU, this may represent an internal inconsistency, at least if the NAIRU is
to represent the mean rate of unemployment in a dynamically stable system.
However, proponents of the time varying NAIRU approach could claim that
they capture the essence of the natural rate dichotomy, since only supply-side
shocks (not nominal or demand shocks) are allowed to aﬀect the estimated
NAIRU process.
    In this section, we show that the idea of a time varying NAIRU can be
evaluated with conventional econometric methods.12 The basic insight is that
the amount of variation in the NAIRU ought to match up with the amount of
instability that one can identify in the underlying wage- and price-equations.
Because of its practical importance and its simplicity, we focus on OECD’s
‘NAWRU’ method.


6.8.1     The NAWRU
The NAWRU indicator has been used extensively by the OECD and others on
several important issues, including policy evaluation and estimation of potential
output and the structural budget balance; see Holden and Nymoen (2002) for
a discussion. Elmeskov and MacFarland (1993) and Elmeskov (1994) deﬁne the
non-accelerating wage rate of unemployment, NAWRU, in terms of a stylised
wage-pressure equation

                    ∆2 wt = −ct (Ut − UtNAWRU ),        ct > 0,             (6.45)

where U NAWRU is the NAWRU level of unemployment. In words, it is assumed
that wage inﬂation is aﬀected in a linear way by the diﬀerence between the
actual level of unemployment and the NAWRU. Equation (6.45) can either be

                  12 The analysis follows Holden and Nymoen (2002).
110                                                                Wage–price dynamics

seen as a vertical wage Phillips curve (dynamic homogeneity is imposed); or
as representing the heuristic dynamics of the wage curve model. The linear
functional form is not essential, but is used in exposition and in applications of
the method.
   Based on an assumption that UtNAWRU is unchanged between consecutive
observations, (6.45) is used to calculate the parameter ct , for each observation
separately
                               ct = −∆3 wt /∆Ut .                           (6.46)
Substituting the observation dependent parameter values ct back into (6.45)
the NAWRU is calculated as:
                          UtNAWRU = Ut − (∆Ut /∆3 wt )∆2 wt .                       (6.47)
    In all four Nordic countries, actual unemployment has risen since the
early 1970s, ﬁrst in Denmark, more recently in the other countries. The raw
NAWRU estimates as given by equation (6.47) are very volatile (see Holden and
Nymoen 2002, ﬁgure 2), and published NAWRUs are based on HP ﬁltering of
these raw NAWRU estimates. Figure 6.2 records the NAWRUs that are cited
in policy analysis discussions—see OECD Economic Surveys for Norway and
Sweden, OECD (1997a,b).


(a)                 Denmark                (b)                     Finland
                                             20

10              NAWRU
                                            15

                                            10
 5                                                                 U
                      U
                                                 5
                                                                                 NAWRU

      1960   1970      1980      1990                1960   1970       1980      1990

(c)                 Norway                 (d)                     Sweden
  6                                         10
                             NAWRU
                                            7.5                                NAWRU
 4
                                     U           5
                                                                                         U
 2
                                            2.5

      1960   1970      1980      1990                1960   1970        1980      1990

         Figure 6.2. Actual rates of unemployment (U ) and NAWRUs for
                             the four Nordic countries
6.8 Nordic structural employment estimates                                             111

    For all countries, the NAWRU estimates indicate a corresponding increase in
structural unemployment. Hence accepting this evidence at face value, one is led
to the conclusion that the rise in unemployment is associated with a structural
change in the labour market. However, Solow’s 1986 critique of natural rates
that ‘hops around from one triennium to another under the inﬂuence of unspec-
iﬁed forces . . . is not natural at all’, clearly applies to NAWRUs.13 Hence, in
the following we investigate whether the dramatic changes in Figure 6.2 can be
rationalised in a satisfactory way.


6.8.2       Do NAWRU ﬂuctuations match up with
            structural changes in wage formation?
We have estimated equilibrium correction wage equations:
                                                                
               ∆wct = β0 − β1 (wc − q − a)t−1 − β2 ut + βx Xt + εwt ,               (6.48)

which are similar to, for example, Nymoen (1989a). The results are for the
manufacturing sectors of each country, and draw on the analysis of Nymoen
and Rødseth (2003). For Norway, the variables have been deﬁned in earlier
sections (see Section 4.6), and the data set contains the same variables for the
other countries: wc = log of hourly wage cost in manufacturing; q = log of
the index of value added prices; a = log of value added labour productivity;
                                                         
u = log of the rate of unemployment.14 The terms βx Xt should be viewed
as composite, containing both growth rate variables, for example, the rates of
change in the CPI, and variables that capture the impact of changes in policy
or in the institutional set-up, as in equation (6.3) of the theoretical model.
Finally, ∆ is the diﬀerence operator and εwt is a disturbance term.
    Table 6.2 shows that wage growth in Norway is found to depend negat-
ively on the lagged wage share and of the level of open unemployment, and
positively on the replacement ratio variable, rprt−1 . The model is dynamically
homogeneous, since the elasticities of the changes in the consumer and prod-
uct price indices (∆pt and ∆qt ) sum to unity (a test of this restriction yields
F(1, 21) = 0.03, which is insigniﬁcant). Another empirically valid restriction
is that the elasticities of growth in product prices and productivity are equal.
Thus wage-setting adjusts to changes in value added, irrespective of whether the
change originates in price or in productivity. As discussed earlier (Section 4.6)
the hours-variable (∆ht ) picks up the direct wage compensation in connection
with reductions in the length of the working day.

  13 The full quotation is given in Section 4.6.
  14 Note that in the Norwegian Phillips curve of Section 4.6 and in Section 6.9.2, the log

of the total unemployment rate was used. In the cross-country results reported here we
chose to use open unemployment for all countries. However, as documented in Nymoen and
Rødseth (2003), the choice has little inﬂuence on the estimation results.
112                                                         Wage–price dynamics

                                    Table 6.2
                       Nordic manufacturing wage equations
Norway

∆(wc
    t − pt−1 ) = −0.0584 + 0.446 {0.5∆2 (q + a)t − ∆pt−1 } − 0.276 ∆ht
                 (0.007) (0.037)                             (0.01)
                 − 0.0286 ut + 0.109 ∆lmpt − 0.2183 (wct−1 − qt−1 − at−1 )
                  (0.0023)     (0.017)         (0.025)
                 + 0.075 rprt−1 + 0.039 i67t − 0.054 IP t
                  (0.013)         (0.007)       (0.005)
Method: OLS                     T = 31[1964–1994],      R2 = 0.98, σ̂ = 0.58%
tEqCM = −8.8                    Stabσ (1) = 0.07{0.5}   Stabβ,σ (9) = 1.24{2.54}
χ2normality (2) = 0.19[0.901]   FAR(1−1) = 2.03[0.17]   FHETx2 = 0.55[0.84]

Sweden

∆(w
   t − pt−1 ) = −0.157 + 0.360 {∆(q + a)t − ∆pt−1 } − 0.849 ∆ht−1
                (0.028) (0.066)                       (0.338)
                 − 0.042 ut−1 − 0.273 (wct−1 − qt−1 − at−1 )
                  (0.007)      (0.043)
Method: OLS                     T = 30[1964–1994],    R2 = 0.854, σ̂ = 1.49%
tEqCM = −6.4                    Stabσ (1) = 0.18{0.5} Stabβ,σ (6) = 0.71{1.7}
χ2normality (2) = 0.01[0.99]    FAR(1−1) = 0.04[0.84] FHETx2 = 0.43[0.87]

Finland
  
∆(wc − p)t = 0.110 + 0.111 rprt − 0.070 ∆tut − 0.008 ut−1
            (0.017) (0.015)        (0.009)    (0.003)
             − 0.146 (wct−1 − qt−2 − at−2 )
              (0.033)
Method: OLS                     T = 33[1962–1994],    R2 = 0.809, σ̂ = 1.17%
tEqCM = −4.49                   Stabσ (1) = 0.24{0.5} Stabβ,σ (6) = 0.76{1.7}
χ2normality (2) = 0.36[0.84]    FAR(1−1) = 0.57[0.46] FHETx2 = 0.50[0.84]

Denmark
  
∆(wc − p)t = −0.032 − 0.644 ∆2 ht + 0.428 ∆(q + a − p)t − 0.0322 ut−1
             (0.022) (0.231)        (0.097)               (0.006)
             − 0.336 (wct − qt − at−2 ) + 0.150 rprt−1
               (0.087)                   (0.058)
Method: OLS                     T = 27[1968–1994],    R2 = 0.85, σ̂ = 1.51%
tEqCM = −3.88                   Stabσ (1) = 0.29[0.5] Stab(β,σ) (7) = 0.86[1.9]
χ2normality (2) = 2.15[0.34]    FAR(1−1) = 3.53[0.08] FHETx2 (10, 10) = 0.79[0.64]
6.8 Nordic structural employment estimates                                              113

    The estimated coeﬃcient of the variable ∆lmpt indicates that the active use
of programmes in order to contain open unemployment reduces wage pressure—
lmp being the log of the share of open unemployment in total unemployment.15
Finally, there are two dummy variables in the Norwegian equation, already
explained in Section 4.6: IPt and i67t .
    Below the equation we report the estimation method (ordinary least squares,
OLS), the sample length T , the squared multiple correlation coeﬃcient R2 , and
the percentage residual standard error σ̂. tEqCM is the t-value of the coeﬃcient
of the lagged wage share and is used here as a direct test of the hypothesis
of no cointegration; see Kremers et al. (1992). Compared to the relevant crit-
ical values in MacKinnon (1991, table 1) tEqCM = −8.8 gives formal support
for cointegration between the wage-share, the rate of unemployment, and the
replacement ratio. This conclusion is supported by the results of multivariate
cointegration methods (see Bårdsen and Nymoen 2003).
    Together with the standard tests of ﬁt and of residual properties (deﬁned
in Section 4.6), we also report two of Hansen’s (1992) statistics of parameter
non-constancy: Stabσ (1) tests the stability of the residual standard error (σ)
individually. Stabβ,σ (10) tests the joint stability of σ and the set regression
coeﬃcients (β). The degrees of freedom are in parentheses, and, since the distri-
butions are non-standard, the 5% critical values are reported in curly brackets.
Neither of the statistics are signiﬁcant, which indicates that the empirical wage
equation is stable over the sample.
    The equation for the other countries in Table 6.2 have several features in
common with the Norwegian model: dynamic homogeneity, strong eﬀects of
consumer price growth, and of pay compensation for reductions of the length
of the working week.
    The Swedish equation contains only two levels variables, the rate of unem-
ployment and the wage share. Unlike Norway, there is no eﬀect of the
replacement ratio; adding rprt and rprt−1 to the equation yields F(2, 23) = 1.1,
with a p-value of 0.36, for the joint null hypothesis of both coeﬃcients being
equal to zero. The insigniﬁcance of Stabσ (1) and Stabσ,β (6) indicates that
the equation is stable over the sample period. We also tested the impact of
intervention dummies that have been designed to capture the potential eﬀects
of the following episodes of active incomes policy and exchange-rate regime
changes—see Calmfors and Forslund (1991) and Forslund and Risager (1994)
(i.e. a ‘Post devaluation dummy’: 1983–85; Incomes policy: 1974–76 and
1985; Devaluation/decentralised bargaining: 1983–90). None of the associ-
ated dummies came close to statistical signiﬁcance when added to the Swedish
equation in Table 6.2.
    The Danish and Finnish equations contain three levels variables; the
replacement ratio, the unemployment rate, and the lagged wage share. In the

  15 The appearance of this variable has to do with the use of the open rate of unemployment,

rather than the total rate.
114                                                                                                        Wage–price dynamics

Finnish model, the estimated coeﬃcient of the lagged rate of unemployment
is seen to be economically rather insigniﬁcant, while the change in the rate
of total unemployment (∆tut ) has a much stronger eﬀect. Both these features
are consistent with previous ﬁndings; cf. Calmfors and Nymoen (1990) and
Nymoen (1992).
    The four wage equations are thus seen to be congruent with the available
data evidence. We have also checked the robustness of the models, by testing
the signiﬁcance of potential ‘omitted variables’, for example, the levels and the
changes in the average income tax rates, and a composite ‘wedge’ term, without
ﬁnding any predictive power of these variables; see Holden and Nymoen (2002).
    Figure 6.3 conﬁrms the stability of the equations already suggested by the
insigniﬁcance of the Stabσ and Stabσ,β statistics. The ﬁrst column shows the
1-step residuals with ±2 residual standard errors, ±2se in the graphs. The
second column contains the estimated elasticities of the wage share, with ±2
estimated coeﬃcient standard errors, denoted β and ±2σ in the graphs. All
graphs show a high degree of stability, which stands in contrast to the instability
of the NAWRU estimates.
    The stability of the empirical wage equations does not preclude a shift in the
wage curve in the employment—real wage space, that is, if other explanatory


(a)                              Norway, 1-step residuals               (b)                  Norway, coefficient of lagged wage-share

  0.01                                                           +2se    –0.1
                     Residuals                                                                                                             +2
      0.0                                                                –0.2
                                                                                                                                           
 –0.01                                                           –2se    –0.3                                                             –2

               1980                 1985             1990       1995                  1980                 1985            1990            1995

(c)                              Sweden, 1-step residuals               (d)                  Sweden, coefficient of lagged wage -share
                                                                          0.5
 0.025                                                           +2se
                        Residuals                                         0.0
      0.0                                                                                                                                +2
                                                                                                                                            
                                                                –2se     –0.5                                                            –2
–.0250
       1975             1980             1985           1990    1995          1975             1980               1985       1990          1995

(e)                              Finland, 1-step residuals              (f)                  Finland, coefficient of lagged wage-share
 0.025                                                           +2se    0.0
                     Residuals                                                                                                             +2
                                                                                                                                            
      0.0                                                               –0.2                                                               –2
–0.025                                                           –2se   –0.4

              1975           1980           1985         1990   1995                 1975           1980            1985      1990         1995

(g)                            Denmark, 1-step residuals                (h)                 Denmark, coefficient of lagged wage-share
  0.05
                                                                 +2se         0                                                              +2
                        Residuals                                                                                                           
      0.0                                                               –0.5
                                                                                                                                         –2
                                                                –2se      –1

                      1980             1985            1990     1995                         1980            1985           1990           1995


                        Figure 6.3. Recursive stability of Nordic wage equations
6.8 Nordic structural employment estimates                                              115

variables have changed. The question is whether changes in the explanatory
variables of the wage equation amount to anything like the movement of the
NAWRUs. To investigate this, we construct a new variable, the Average Wage-
Share rate of Unemployment (AWSU). This variable is deﬁned as the rate of
unemployment that (according to our estimated wage equations) in each year
would have resulted in a constant wage-share in that year, if the actual lagged
wage share were equal to the sample mean.
   To clarify the calculation and interpretation of AWSU, consider a ‘repre-
sentative’ estimated wage equation

        ∆(wct − pt ) = β̂0 − β̂1 (wc − q − a) − β̂2 ut + β̂3 ∆(q + a − p)t            (6.49)
                                     
                                 + β̂x Xt ,

where (wc − q − a) is the sample mean of the wage share, and we recognise
dynamic price homogeneity, a wage scope variable with estimated elasticity β̂3
      
and β̂x Xt which contains other, country-speciﬁc eﬀects. Solving for ut with
∆(wc − q − a)t = 0 imposed yields
                                                                            
              β̂0       β̂1                    β̂3 − 1                     β̂x
       ut =         −         (wc − q − a) +             ∆(q − p + a)t +         Xt   (6.50)
              β̂2       β̂2                      β̂2                       β̂2

and the exponential of the left-hand side of (6.50) is the AWSU. In the calcu-
lations of the AWSU, actual values are used for all the variables appearing in
the estimated equations. Increased upward wage pressure (due to other factors
than lower unemployment and lower lagged wage share) leads to a rise in the
AWSU, because to keep the wage share constant the rate of unemployment
must be higher.
    The graphs of the AWSU for Denmark, Norway, and Sweden are displayed
in Figure 6.4. Finland is omitted, because the very low estimated coeﬃcient of
lagged unemployment implies that the mapping of wage pressure into unem-
ployment is of little informative value. In the case of Denmark, the increase in
the replacement ratio in the late 1960s explains the high AWSU estimates of
the 1970s. In the 1990s, a reversion of the replacement ratio, and high growth
in value added per man-hours, explain why AWSU falls below the actual rate
of unemployment. For Norway and Sweden the AWSUs show quite similar
developments: periods when consumer price growth is rapid relative to growth
in manufacturing value added per hour (the late 1970s and early 1980s), are
marked by an increase in the AWSU. In the case of Norway, the replacement
rate also contributes to the rise. However, the important overall conclusion
to draw from the graphs is that there is little correlation between wage pres-
sure (as measured by the AWSU) and unemployment; in particular the rise
in unemployment in the early 1990s cannot be explained by a rise in wage
pressure.
116                                                         Wage–price dynamics

(a)                                       Denmark

  10                                                           U
                           AWSU
      5


          1965      1970          1975      1980     1985          1990       1995
(b)                                       Norway
  10
  7.5                                               AWSU
                                                                          U
      5
  2.5

          1965      1970          1975      1980     1985          1990       1995
(c)                                       Sweden
  7.5
                                                                          U
      5                                  AWSU
  2.5

          1965      1970          1975      1980     1985       1990          1995

          Figure 6.4. Unemployment and the Average Wage-Share rates of
                  Unemployment (AWSU; see explanation in text)



6.8.3        Summary of time varying NAIRUs
             in the Nordic countries
In sum, for all three countries, we obtain stable empirical wage equations over
the period 1964–94 (Denmark 1968–94). Nor do we detect changes in explana-
tory variables in the wage-setting that can explain the rise in unemployment
(as indicated by absence of an increasing trend in the AWSU indicator in
Figure 6.4). The instability of the NAWRU estimate appears to be an arte-
fact of a mis-speciﬁed underlying wage equation, and is not due to instability
in the wage-setting itself. Note also that the conclusion is not speciﬁc to the
NAWRU but extends to other methods of estimating a time varying NAIRU:
as long as the premise of these estimations are that any signiﬁcant changes in
the NAIRU is due to changes in wage (or price) setting, they also have as a
common implication that the conditional wage equations in Table 6.2 should
be unstable. Since they are not, a class of models is seen to be inconsistent with
the evidence.
    The results bring us back to the main question: should empirical macroeco-
nomic modelling be based on the natural rate doctrine? The evidence presented
6.9 Beyond the natural rate doctrine                                             117

in this section more than suggests that there is a negative answer to this ques-
tion. Instead we might conclude that if the equilibrium level of unemployment
is going to be a strong attractor of actual unemployment, without displaying
incredible jumps or unreasonably strong drift, the dichotomy between struc-
tural supply-side factors and demand-side inﬂuences has to be given up. In the
next section, we outline a framework that goes beyond the natural rate model.


6.9      Beyond the natural rate doctrine:
         unemployment–inﬂation dynamics
In this section, we relax the assumption, made early in the section, of exo-
genously determined unemployment which, after all, was made for a speciﬁc
purpose, namely for showing that under reasonable assumptions about price-
and wage-setting, there exist a steady-state rate of inﬂation, and a steady-
state growth rate for real wages for a given long-run mean of the rate of
unemployment. Thus, the truism that a steady state requires that the rate
of unemployment simultaneously converges to the NAIRU has been refuted.
Moreover, we have investigated special cases where the natural doctrine rep-
resents the only logically possible equilibrium, and have discussed how the
empirical relevance of those special cases can be asserted.


6.9.1      A complete system
Equations (6.51)–(6.57) are a distilled version of an interdependent system
for real wages, the real exchange rate and unemployment that we expect to
encounter in practical situations.
        ∆wq,t = δt + ξ∆pit + (κ − 1)wq,t−1 + λpiq,t−1 − ηut−1 + εwq ,t ,       (6.51)
      ∆piq,t = −dt + e ∆pit − k wq,t−1 + (l − 1) piq,t−1 + nut−1 + εpiq ,t ,
                                                                               (6.52)
         ∆ut = βu0 − (1 − βu1 )ut−1 + βu2 wq,t−1 + βu3 at−1
                  + βu4 piq,t−1 − βu5 zut + εu,t ,                             (6.53)
         ∆pit = gpi + εpi,t ,                                                  (6.54)
         ∆qt = ∆pit − ∆piq,t ,                                                 (6.55)
         ∆wt = ∆wq,t + ∆qt ,                                                   (6.56)
         ∆pt = bp1 (∆wt − ∆at ) + bp2 ∆pit + εp,t .                            (6.57)
Equations (6.51) and (6.52) are identical to equations (6.9) and (6.12) of
Section 6.3, where the coeﬃcients were deﬁned. Note that the two intercepts
have time subscripts since they include the (exogenous) labour productivity at ,
cf. (6.10) and (6.13). The two equations are the reduced forms of the theoretical
118                                                                  Wage–price dynamics

model that combines wage bargaining and monopolistic price-setting with equi-
librium correction dynamics. Long-run dynamic homogeneity is incorporated,
but the system is characterised by nominal rigidity. Moreover, as explained
above, not even dynamic homogeneity in wage- and price-setting is in general
suﬃcient to remove nominal rigidity as a system property.
    A relationship equivalent to (6.53) was introduced already in Section 4.2,
in order to close the open economy Phillips curve model. However there are two
diﬀerences as a result of the more detailed modelling of wages and prices: ﬁrst,
since the real exchange rate is endogenous in the general model of wage price
dynamics, we now include piq,t−1 with non-negative coeﬃcient (βu,4 ≥ 0).16
Second, since we maintain the assumption about stationarity of the rate of
unemployment (in the absence of structural break), that is, |βu1 | < 1, we
include at−1 unrestricted, in order to balance the productivity eﬀects on real
wages and/or the real exchange rate. In the same way as in the section on
the Phillips curve system, zut represents a vector consisting of I(0) stochastic
variables, as well as deterministic explanatory variables.
    Equation (6.54) restates the assumption of random walk behaviour of import
prices made at the start of the section, and the following two equations are
deﬁnitions that back out the nominal growth rates of the product price and
nominal wage costs. The last equation of the system, (6.57), is a hybrid equation
for the rate of inﬂation that has normal cost pricing in the non-tradeables sector
built into it.17
    The essential diﬀerence from the wage–price model of Section 6.2 is of course
equation (6.53) for the rate of unemployment. Unless βu2 = βu3 = 0, the
stability analysis of Section 6.4 no longer applies, and it becomes impractical
to map the conditions for stable roots back to the parameters. However, for
estimated versions of (6.51)–(6.57) the stability or otherwise is checked from
the eigenvalues of the associated companion matrix (as demonstrated in the
next paragraph). Subject to stationarity, the steady-state solution is easily
obtained from (6.51)–(6.53) by setting ∆wq,t = ga , ∆piq,t = 0, ∆uss = 0,
and solving for wq,ss , piq,ss , and uss . In general, all three steady-state variables
become functions of the steady states of the variables in the vector zu,t , the
conditioning variables in the third unemployment equation, in particular
                                       uss = f (zu,ss ).
  Note that while the real wage is fundamentally inﬂuenced by productiv-
ity, ut ∼ I(0) implies that equilibrium unemployment uss is unaﬀected by
the level of productivity. Is this equilibrium rate of unemployment a ‘natural
rate’ ? If we think of the economic interpretation of (6.53) this seems unlikely:
equation (6.53) is a reduced form consisting of labour supply, and the labour
demand of private ﬁrms as well as of government employment. Thus, one can

  16 The other elasticities in (6.53) are also non-negative.
  17 This equation is similar to (4.9) in the Phillips curve chapter. The only diﬀerence is that

we now let import prices represent imported inﬂation.
6.9 Beyond the natural rate doctrine                                        119

think of several factors in zu,t that stem from domestic demand, as well as
from the foreign sector. At the end of the day, the justiﬁcation of the spe-
ciﬁc terms included in zu,ss and evaluation of the relative strength of demand-
and supply-side factors, must be made with reference to the institutional and
historical characteristics of the data.
    In the next section, we give an empirical example of (6.51)–(6.57), and
Chapters 9 and 10 present operational macroeconomic models with a core
wage–price model, and where (6.51) is replaced by a system of equations
describing output, domestic demand, and ﬁnancial markets.


6.9.2     Wage–price dynamics: Norwegian manufacturing
In this section, we return to the manufacturing data set of Section 4.6
(Phillips curve), and 5.5 (wage curve). In particular, we recapitulate the
cointegration analysis of Section 5.5:

1. A long-run wage equation for the Norwegian manufacturing industry:
               wct − qt − at = − 0.065 tut + 0.184 rprt + ecmw,t ,        (6.58)
                                (0.081)     (0.036)
   that is, equation (5.22). rprt is the log of the replacement ratio.
2. No wedge term in the wage curve cointegration relationship (i.e. ω = 0).
3. Nominal wages equilibrium correct, θw > 0.
4. Weak exogeneity of qt , at , tut , and rprt with respect to the parameters of
   the cointegration relationship.

   These results suggest a ‘main-course’ version of the system (6.51)–(6.57): as
shown in Section 6.4.4, the no-wedge restriction together with one-way causality
from product prices (qt ) and productivity (at ) on to wages imply a dynamic
wage equation of the form
     ∆wt = kw + ψwp ∆pt + ψwq ∆qt − θw [wq,t−1 − at−1 + ut−1 ] + εw,t ,
                                                                          (6.59)
(cf. equation (6.34)). The term in square brackets has its empirical counterpart
in ec mw,t .
    Given items 1–3, our theory implies that the real exchange rate is dynam-
ically unstable (even when we control for productivity). This has further
implications for the unemployment equation in the system: since there are
three I(1) variables on the right-hand side of (6.53), and two of them cointe-
grate (wq,t and at ), the principle of balanced equations implies that βu4 = 0.
However, the exogeneity of the rate of unemployment (item 4) does not neces-
sarily carry over from the analysis in Section 5.5, since zut in equation (6.53)
includes I(0) conditioning variables. From the empirical Phillips curve system
in Section 4.6, the main factor in zut is the GDP growth rate (∆ygdp,t−1 ).
120                                                        Wage–price dynamics

    We ﬁrst give the details of the econometric equilibrium-correction equation
for wages, and then give FIML estimation of the complete system, using a
slightly extended information set.
    Equation (6.60) gives the result of a wage generalised unrestricted model
(GUM) which uses ecmw,t deﬁned in item 1 as a lagged regressor.

   t = − 0.183 − 0.438 ecmt−1 + 0.136 ∆t1t + 0.0477 ∆pt
  ∆w
         (0.0349) (0.0795)         (0.387)      (0.116)
        + 0.401 ∆pt−1 + 0.0325 ∆pt−2 + 0.0858 ∆at + 0.0179 ∆at−1
          (0.115)       (0.114)         (0.102)     (0.0917)
        − 0.0141 ∆at−2 + 0.299 ∆qt + 0.0209 ∆qt−1 − 0.000985∆qt−2
          (0.0897)        (0.0632)     (0.0818)        (0.0665)
        − 0.738 ∆ht − 0.0106 ∆tut + 0.0305 i1967t − 0.0538 IP t
          (0.185)     (0.00843)       (0.0128)       (0.00789)
                                                                           (6.60)
                                  OLS, T = 34(1965–98)
      σ̂ = 0.008934                  R2 = 0.9714                RSS = 0.001437.
      FNull = (16, 17) = 17.48[0.00] FAR(1−2) = 4.0021[0.039]
      FARCH(1−1) = 1.2595[0.2783] χ2normality = 1.983[0.371]
      FChow(1982) = 0.568[0.7963]    FChow(1995) = 0.248[0.861]
It is interesting to compare equation (6.60) with the Phillips curve GUM for
the same data; cf. equation (4.42) of Section 4.6. In (6.60) we have omitted the
second lag of the price and productivity growth rates, and the levels of tut−1
and rprt−1 are contained in ecmw,t−1 , but in other respects the two GUMs are
identical. The residual standard error is down from 1.3% (Phillips curve) to
0.89% (wage curve). To a large extent the improved ﬁt is due to the inclusion
of ecmt−1 , reﬂecting that the Phillips curve restriction θw = 0 is ﬁrmly rejected
by the t-test.
    The mis-speciﬁcation tests show some indication of (negative) autoregressive
residual autocorrelation, which may suggest overﬁtting of the GUM, and which
no longer represents a problem in the ﬁnal model shown in equation (6.61):
        t = − 0.197 − 0.478 ecmw,t−1 + 0.413 ∆pt−1 + 0.333 ∆qt
       ∆w
              (0.0143) (0.0293)          (0.0535)      (0.0449)
             − 0.835 ∆ht + 0.0291 i1967t − 0.0582 IP t
               (0.129)     (0.00823)       (0.00561)
                                                                (6.61)
                             OLS, T = 34(1965–98)
RSS = 0.001695               σ̂ = 0.007922               R2 = 0.9663
FpGUM = 0.9402               FAR(1−2) = 0.857[0.44]      FHETx2 = 0.818[0.626].
FARCH(1−1) = 2.627[0.118]    χ2normality = 1.452[0.4838]
FChow(1982) = 0.954          FChow(1995) = 0.329[0.8044]
6.9 Beyond the natural rate doctrine                                          121

The estimated residual standard error is lower than in the GUM, and by
FpGUM , the ﬁnal model formally encompasses the GUM in equation (6.60).
The model in (6.61) shows close correspondence with the theoretical (6.32)
in Section 6.4.4, with θ̂w = 0.48 (tθ̂w = 16.3), and ψ̂wp + ψ̂wq = 0.75, which is
signiﬁcantly diﬀerent from one (F(1, 27) = 22.17[0.0001]).
    As already said, the highly signiﬁcant equilibrium-correction term is evid-
ence against the Phillips curve equation (4.43) in Section 4.6 as a congruent
model of manufacturing industry wage growth. One objection to this con-
clusion is that the Phillips curve is ruled out from the outset in the current
speciﬁcation search, that is, since it is not nested in the equilibrium–correction
models (EqCM–GUM). However, we can rectify that by ﬁrst forming the union
model of (6.61) and (4.43), and next do a speciﬁcation search from that starting
point. The results show that PcGets again picks equation (6.61), which thus
encompasses also the wage Phillips curve of Section 4.6.
    Figure 6.5 shows the stability of equation (6.61) over the period 1978–94.
All graphs show a high degree of stability. The two regressors (∆pt−1 and ∆qt )
that also appear in the Phillips curve speciﬁcation in Section 4.6 have much


                                 Table 6.3
   FIML results for a model of Norwegian manufacturing wages, inﬂation,
                      and total rate of unemployment
∆wct = − 0.1846 − 0.4351 ecmw,t−1 + 0.5104 ∆pt−1 + 0.2749 ∆qt
          (0.016) (0.0352)             (0.0606)      (0.0517)
        − 0.7122 ∆ht + 0.03173 i1967t − 0.05531 IP t + 0.2043 ∆ygdp,t−1
          (0.135)       (0.00873)         (0.00633)    (0.104)
∆tut = − 0.2319 tut−1 − 8.363 ∆ygdp,t−1 + 1.21 ecmw,t−1
         (0.0459)         (1.52)            (0.338)
       + 0.4679 i1989t − 2.025 ∆2 pit
         (0.148)         (0.468)
∆pt = 0.01185 + 0.1729 ∆wt − 0.1729∆at − 0.1729∆qt−1 + 0.3778 ∆pt−1
      (0.00419) (0.0442)          (—)           (—)         (0.0864)
      + 0.2214 ∆2 pit − 0.4682 ∆ht + 0.04144 i1970t
        (0.0325)         (0.174)       (0.0115)
      ecmw,t = ecmw,t−1 + ∆wct − ∆qt − ∆at + 0.065∆tut − 0.184∆rprt
                tut = tut−1 + ∆tut−1 ;

Note: The sample is 1964–98, T = 35 observations.
                   σ̂∆w = 0.00864946
                  σ̂∆tu = 0.130016
                    σ̂∆p = 0.0110348
   FvAR(1−2) (18, 59) = 0.65894[0.84]
         χ2,v
           normality (6) = 4.5824[0.60]
χ2overidentiﬁcation (32) = 47.755[0.04].
122                                                                                         Wage–price dynamics

(a) 0.0     Intercept                  (b)       ecmt–2                              (c)     ∆pt–1
                                       – 0.25                                        0.75
                                                                             +2
                                                                                                                           +2
                                       – 0.50                                       0.50                                   
  –0.2                                                                       –2
                                                                                     0.25                                  –2
                                       – 0.75
  –0.4                                                                               0.00
                  1980   1990   2000               1980      1990            2000               1980           1990       2000
(d)                                    (e)                                           (f)
                   ∆qt                       0   ∆ht                                 0.06     i1967t
                                 +2                                         +2                                           +2
      0.4                                                                    
                                         –1                                 –2     0.04
                                                                                                                            
                                 –2                                                 0.02
      0.2                                 –2
                                                                                                                           –2

                  1980   1990   2000               1980      1990            2000               1980           1990        2000
(g)                                    (h)                                           (i)
            IPt                                                                       1.0
                                        0.02                                  +2se                              1% critical value
 0.000
                                                          1-step residuals
–0.025
                                        0.00                                          0.5    1-step
                                +2                                                          Chow statistics
–0.050                                                                      –2se
                                –2    –0.02
                  1980   1990   2000               1980      1990            2000               1980           1990        2000


            Figure 6.5. Recursive estimation of the ﬁnal EqCM wage equation


narrower conﬁdence bands in this ﬁgure than in Figure 4.2. In sum, the single-
equation results are in line with earlier ‘equilibrium correction’ modelling of
Norwegian manufacturing wages; see, for example, Nymoen (1989a). In partic-
ular, Johansen (1995a) who analyses annual data, contains results that are in
agreement with our ﬁndings: he ﬁnds no evidence of a wedge eﬀect but reports
a strong wage response to consumer price growth as well as to changes in the
product price.
    Thus, the results imply that neither the Phillips curve, nor the wage-curve
NAIRU, represent valid models of the unemployment steady-state in Norway.
Instead, we expect that the unemployment equilibrium depends on forcing
variables in the unemployment equation of the larger system (6.51)–(6.57).
The estimated version of the model is shown in Table 6.3, with coeﬃcients
estimated by FIML.
    It is interesting to compare this model to the Phillips curve system in
Table 4.2 of Section 4.6. For that purpose we estimate the model on the sample
1964–98, although that means that compared to the single equation results for
wages just described, one year is added at the start of the sample. Another,
change from the single equation results is in Table 6.3: the wage equation in
augmented by ∆ygdp,t−1 , that is, the lagged GDP growth rate. This variable
was included in the information set because of its anticipated role the equa-
tion for unemployment. Finding it to be marginally signiﬁcant also in the wage
6.10 Summary                                                                             123

equation creates no inconsistencies, especially since it appears to be practically
orthogonal to the explanatory variables that were included in the information
set of the single equation PcGets modelling.
    The second equation in Table 6.3 is similar to (6.53) in the empirical Phillips
curve system estimated on this data set in Section 4.6. However, due to coin-
tegration, the feedback from wages on unemployment is captured by ecmw,t−1 ,
thus there are cross-equation restrictions between the parameters in the wage
and unemployment equations. The third equation in the table is consistent with
the theoretical inﬂation equation (6.33) derived in Section 6.4.4.18
    The model is completed by the two identities, ﬁrst for ecmw,t which incorp-
orates the cointegrating wage–curve relationship, and second, the identity for
the rate of unemployment. The three non-trivial roots of the characteristic
equation are
                           0.6839       0       0.6839
                           0.5969     0.1900 0.6264
                           0.5969 −0.1900 0.6264
that is, a complex pair, and a real root at 0.68. Hence the system is dynamically
stable, and compared to the Phillips curve version of the main-course model of
Section 4.6 the adjustment speed is quicker.
    Comparison of the two models is aided by comparing Figure 6.6 with
Figure 4.5 of Section 4.6. For each of the four endogenous variables shown
in Figure 6.6, the model solution (‘simulated’) is closer to the actual values
than in the corresponding Figure 4.5. The two last panels of Figure 6.6 show
the cumulated dynamic multiplier of a point increase in the rate of unemploy-
ment. The diﬀerence from Figure 4.5, where the steady state was not even
‘in sight’ within the 35 years simulation period, is striking. In Figure 6.6, 80%
of the long-run eﬀect is reached within four years, and the system is clearly
stabilising in the course of a 10-year simulation period.




6.10        Summary
This chapter has discussed the modelling of the wage–price subsystem of the
economy. We have shown that under relatively mild assumptions about price-
and wage-setting behaviour, there exists a conditional steady-state (for inﬂa-
tion, and real wages) for any given long-run mean of the rate of unemployment.
The view that asymptotic stability of inﬂation ‘requires’ that the rate of unem-
ployment simultaneously converges to a NAIRU (which only depends on the

  18 The inﬂation rate depends on ∆wc , a feature which is consistent with the result about
                                     t
an endogenous real-wage wedge in the cointegration analysis of Chapter 5, Section 5.5: pt −qt
was found to be endogenous, while the product price (qt ) was weakly exogenous.
124                                                                                    Wage–price dynamics

(a)        ∆pt                                         (b)            tut

0.10                                                         –3


0.05                                                         –4


                  1970        1980      1990   2000                          1970        1980          1990   2000
(c)                                                    (d)
0.20       ∆wct                                         –0.2          wct – at – qt

0.15
0.10                                                    –0.3

0.05
                                                        –0.4
                  1970        1980      1990   2000                          1970        1980          1990   2000
(e)                                                    (f)
0.04       tut : Cumulated multiplier                  0.000          wct – at – qt : Cumulated multiplier

0.03                                                  –0.001

                                                      –0.002
0.02
                                                      –0.003
       0            10          20       30    40                 0             10         20           30    40

            Figure 6.6. Dynamic simulation of the EqCM model in Table 6.3.
           Panels (a–d): actual and simulated values (dotted line). Panels (e–f):
             multipliers of a one point increase in the rate of unemployment


properties of the wage and price and equations) has been refuted both logically
and empirically. To avoid misinterpretations, it is worth restating that this
result in no way justiﬁes a return to demand driven macroeconomic models.
Instead, as sketched in the earlier section, we favour models where unemploy-
ment is determined jointly with real wages and the real exchange rate, and
this implies that wage- and price-equations are grafted into a bigger system
of equations which also includes equations representing the dynamics in other
parts of the economy. This is also the approach we pursue in the following
chapters. As we have seen, the natural rate models in the macroeconomic lit-
erature (Phillips curve and ICM) are special cases of the model framework
emerging from this section.
    The ﬁnding that long-run unemployment is left undetermined by the wage–
price sub-model is a strong rationale for building larger systems of equations,
even if the ﬁrst objective and primary concern is the analysis of wages, prices,
and inﬂation. Another thesis of this section is that stylised wage–price models
run the danger of imposing too much in the form of nominal neutrality
(absence of nominal rigidity) prior to the empirical investigation. Conversely,
no inconsistencies or overdetermination arise from enlarging the wage–price-
setting equations with a separate equation of the rate of unemployment into
6.10 Summary                                                               125

the system, where demand variables may enter. The enlarged model will have
a steady state (given some conditions that can be tested). The equilibrium rate
of unemployment implied by this type of model is not of the natural rate type,
since factors (in real growth rate form) from the demand side may have lasting
eﬀects. On the other hand, ‘money illusion’ is not implied, since the variables
conditioned upon when modelling the rate of unemployment are all deﬁned in
real terms.
This page intentionally left blank
                                           7

             The New Keynesian
               Phillips curve

      Hitherto, we have considered models that have a unique backward solu-
      tion, given a set of initial conditions. Even though individual variables
      may be dominated by unit roots, models deﬁned in terms of diﬀerences
      and cointegration relationships are also asymptotically stable. Models with
      forward-looking expectations are not contained by this framework. Recently
      a coherent theory of price-setting with rational expectations has gained in
      popularity. In this chapter, we give an appraisal of the New Keynesian
      Phillips curve model (hereafter NPCM) as an empirical model of inﬂa-
      tion. The favourable evidence for NPCMs on Euro-area data reported in
      earlier studies is illusive. The empirical support for the economic forcing
      variable is fragile, and little distinguishes the performance of the estimated
      NPCM from a pure time-series model of the inﬂation rate. The NPCM
      can be reinterpreted as a highly restricted (and therefore unlikely) equi-
      librium correction model. Using that framework, we construct tests based
      on variable addition and encompassing. The results show that economists
      should not accept the NPCM too readily, and that speciﬁc hypotheses about
      expectations terms are better handled as potential extensions of existing
      econometrically adequate models.



7.1      Introduction
The previous four chapters have analysed alternative models of wage–price
setting in small open economies. A common underlying assumption has been
that all processes are causal or future independent processes, that is, the
roots of the characteristic polynomials are on (unit roots) or inside the
unit circle. This means that the model can be solved uniquely from known initial
conditions. In this chapter, we turn to rational expectations models—systems

                                           127
128                                             The New Keynesian Phillips curve

where expected future values of endogenous variables enter as explanatory vari-
ables, in one or more equations. Rational expectations models yield diﬀerent
types of solutions than causal models. In principle, a solution depends on (all)
future values of the model’s disturbances. However, if some of the characteristic
roots have modulus less than unity while the others have modulus bigger than
unity, saddle-path solutions may exist. Saddle-path solutions are not asymp-
totically stable but depend on very speciﬁc initial conditions. Assume that the
system is initially in a stationary situation A. If a shock occurs that deﬁnes a
new stationary situation B, there are no stable dynamic trajectories starting
from A, due to the lack of asymptotic dynamic stability. The endogenous vari-
ables of a macroeconomic model can be classiﬁed as state or jump variables.
The time derivatives of state variables are always ﬁnite. In contrast, and as the
name suggests, jump variables can shift up or down to new levels quite instant-
aneously (exchange rates and other asset prices are common examples). Jump
variables play a key role in saddle-path equilibria. Essentially, if a shock occurs
in a stationary situation A, instability is avoided by one or more jump variables
jumping instantaneously to establish a new set of initial conditions that set the
dynamics on to the saddle path leading to the new stationary situation B.
Models with saddle-path solutions are important in academic macroeconomics,
as demonstrated by, for example, the monetary theory of the exchange rate and
Dornbusch’s (1976) overshooting model. Whether saddle-path equilibria have
a role in econometric models of inﬂation is a separate issue, which we address
by considering the New Keynesian Phillips curve.
    The New Keynesian Phillips Curve Model (NPCM) is aspiring to become the
new consensus theory of inﬂation in modern monetary economics. This position
is due to its stringent theoretical derivation, as laid out in Clarida et al. (1999),
Svensson (2000), and Woodford (2003: ch. 3). In addition, empirical evidence is
accumulating rapidly. For example, the recent studies of Galı́ and Gertler (1999)
and Galı́ et al. (2001), hereafter GG and GGL, claim to have found considerable
empirical support for the NPCM—using European as well as United States
data. Moreover, Batini et al. (2000) derives an open economy NPCM which
they have on United Kingdom data with supportive results for the speciﬁcation.
In this chapter, we re-analyse the data used in two of these studies, namely
GGL and the study by Batini et al. (2000). The results show that the empirical
relevance of the NPCM on these data sets is very weak. We reach this surprising
conclusion by applying encompassing tests, where the NPCM is tested against
earlier econometric inﬂation models, as opposed to the corroborative approach
of the NPCM papers. In addition we also examine the relevance of the NPCM
for Norwegian inﬂation.1
    The structure of the chapter is as follows. After deﬁning the model in
Section 7.2, we investigate the dynamic properties of the NPCM in Section 7.3.
This entails not only the NPCM equation, but also speciﬁcation of a process

                 1 This chapter draws on Bårdsen et al. (2002b, 2004).
7.2 The NPCM deﬁned                                                                    129

for the forcing variable. Given that a system of linear diﬀerence equations is
the right framework for theoretical discussions about stability and the type
of solution (forward or backward), it follows that the practice of deciding on
these issues on the basis of single equation estimation is not robust to exten-
sions of the information set. For example, a forward solution may suggest itself
from estimation of the NPCM equation alone, while system estimation may
show that the forcing variable is endogenous, giving rise to a diﬀerent set of
characteristic roots and potentially giving support to a backward solution.
    Section 7.4 discusses estimation issues of the NPCM, using Euro-area
data for illustration. After conducting a sensitivity analysis of estimates of
the model under the assumption of correct speciﬁcation, we apply several
methods for testing and evaluating the speciﬁcation in Section 7.5. We con-
clude that the speciﬁcation is not robust. In particular, building on the insight
from Section 7.3, we show that it is useful to extend the evaluation from the
single equation NPCM to a system consisting of the rate of inﬂation and the
forcing variable.
    Another strategy of model evaluation is to consider competing theories,
resulting in alternative model speciﬁcations. For example, there are several
studies that have found support for incomplete competition models, giving rise
to systems with cointegrating relationships between wages, prices, unemploy-
ment, and productivity, as well a certain ordering of causality. In Section 7.5.4
we show that these existing results can be used to test the encompassing
implications of the NPCM. This approach is applied to the open economy
version of the NPCM of Batini et al. (2000). Finally we add to the existing
evidence by evaluating the NPCM on Norwegian data and testing the encom-
passing implications. Appendix A.2 provides the necessary background material
on solution and estimation of rational expectations models.


7.2     The NPCM deﬁned
Let pt be the log of a price level index. The NPCM states that inﬂation, deﬁned
as ∆pt ≡ pt − pt−1 , is explained by Et ∆pt+1 , expected inﬂation one period
ahead conditional upon information available at time t, and excess demand or
marginal costs xt (e.g. output gap, the unemployment rate, or the wage share
in logs):
                         ∆pt = bp1 Et ∆pt+1 + bp2 xt + εpt ,               (7.1)
where εpt is a stochastic error term. Roberts (1995) shows that several New
Keynesian models with rational expectations have (7.1) as a common repres-
entation—including the models of staggered contracts developed by Taylor
(1979b, 1980)2 and Calvo (1983), and the quadratic price adjustment cost model
of Rotemberg (1982). GG gives a formulation of the NPCM in line with Calvo’s
 2 The overlapping wage contract model of sticky prices is also attributed to Phelps (1978).
130                                             The New Keynesian Phillips curve

work: they assume that a ﬁrm takes account of the expected future path of
nominal marginal costs when setting its price, given the likelihood that its price
may remain ﬁxed for multiple periods. This leads to a version of the inﬂation
equation (7.1), where the forcing variable xt is the representative ﬁrm’s real
marginal costs (measured as deviations from its steady-state value). They argue
that the wage share (the labour income share) wst is a plausible indicator for
the average real marginal costs, which they use in the empirical analysis. The
alternative, hybrid version of the NPCM that uses both Et ∆pt+1 and lagged
inﬂation as explanatory variables is also discussed later.


7.3     NPCM as a system
Equation (7.1) is incomplete as a model for inﬂation, since the status of xt is left
unspeciﬁed. On the one hand, the use of the term forcing variable, suggests
exogeneity, whereas the custom of instrumenting the variable in estimation is
germane to endogeneity. In order to make progress, we therefore consider the
following completing system of stochastic linear diﬀerence equations3
              ∆pt = bp1 ∆pt+1 + bp2 xt + εpt − bp1 ηt+1 ,                     (7.2)
               xt = bx1 ∆pt−1 + bx2 xt−1 + εxt ,     0 ≤ |bx2 | < 1.          (7.3)
The ﬁrst equation is adapted from (7.1), utilising that Et ∆pt+1 = ∆pt+1 −ηt+1 ,
where ηt+1 is the expectation error. Equation (7.3) captures that there may
be feedback from inﬂation on the forcing variable xt (output-gap, the rate of
unemployment or the wage share) in which case bx1 = 0.
    In order to discuss the dynamic properties of this system, re-arrange (7.2)
to yield
                              1         bp2        1
                   ∆pt+1 =       ∆pt −      xt −      εpt + ηt+1          (7.4)
                             bp1        bp1       bp1
and substitute xt with the right-hand side of equation (7.3). The characteristic
polynomial for the system (7.3) and (7.4) is
                                        
                                 1               1
                 p(λ) = λ2 −        + bx2 λ +       [bp2 bx1 + bx2 ].     (7.5)
                                bp1             bp1
If neither of the two roots is on the unit circle, unique asymptotically stationary
solutions exist. They may be either causal solutions (functions of past values
of the disturbances and of initial conditions) or future dependent solutions
(functions of future values of the disturbances and of terminal conditions), see
Brockwell and Davies (1991: ch. 3) and Gourieroux and Monfort (1997: ch. 12).
    The future dependent solution is a hallmark of the NPC. Consider for
example the case of bx1 = 0, so that xt is a strongly exogenous forcing variable
in the NPCM. This restriction gives the two roots λ1 = b−1      p1 and λ2 = bx2 .

                  3 Constant terms are omitted for ease of exposition.
7.3 NPCM as a system                                                                          131

Given the restriction on bx2 in (7.3), the second root is always less than one,
meaning that xt is a causal process that can be determined from the backward
solution. However, since λ1 = b−1   p1 there are three possibilities for ∆pt : (1)
No stationary solution: bp1 = 1; (2) A causal solution: bp1 > 1; (3) A future
dependent solution: bp1 < 1. If bx1 = 0, a stationary solution may exist even
in the case of bp1 = 1. This is due to the multiplicative term bp2 bx1 in (7.5).
The economic interpretation of the term is the possibility of stabilising inter-
action between price-setting and product (or labour) markets—as in the case
of a conventional Phillips curve.
    As a numerical example, consider the set of coeﬃcient values: bp1 = 1,
bp2 = 0.05, bx2 = 0.7, and bx1 = 0.2, corresponding to xt (interpreted as the
output-gap) inﬂuencing ∆pt positively, and the lagged rate of inﬂation having
a positive coeﬃcient in the equation for xt . The roots of (7.5) are in this case
{0.96, 0.74}, so there is a causal solution. However, if bx1 < 0, there is a future
dependent solution since then the largest root is greater than one.
    Finding that the existence and nature of a stationary solution is a system
property is of course trivial. Nevertheless, many empirical studies only model
the Phillips curve, leaving the xt part of the system implicit. This is unfor-
tunate, since the same studies often invoke a solution of the well-known
form4                                          
                                       bp2
                           ∆pt =                  xt + εpt .                   (7.6)
                                    1 − bp1 bx2
Clearly, (7.6) hinges on bp1 bx2 < 1 which involves the coeﬃcient bx2 of the xt
process.
    If we consider the rate of inﬂation to be a jump variable, there may be
a saddle-path equilibrium as suggested by the phase diagram in Figure 7.1.
The drawing is based on bp2 < 0, so we now interpret xt as the rate of unem-
ployment. The line representing combinations of ∆pt and xt consistent with
∆2 pt = 0 is downward sloping. The set of pairs {∆pt , xt } consistent with
∆xt = 0 are represented by the thick vertical line (this is due to bx1 = 0 as
above). Point a is a stationary situation, but it is not asymptotically stable.
Suppose that there is a rise in x represented by a rightward shift in the vertical
curve, which is drawn with a thinner line. The arrows show a potential unstable
trajectory towards the north-east away from the initial equilibrium. However,
if we consider ∆pt to be a jump variable and xt as state variable, the rate of
inﬂation may jump to a point such as b and thereafter move gradually along
the saddle path connecting b and the new stationary state c.
    The jump behaviour implied by models with forward expected inﬂation is at
odds with observed behaviour of inﬂation. This has led several authors to sug-
gest a ‘hybrid’ model, by heuristically assuming the existence of both forward-
and backward-looking agents; see, for example, Fuhrer and Moore (1995). Also
Chadha et al. (1992) suggest a form of wage-setting behaviour that would
     4 That is, subject to the transversality condition lim                n+1 ∆p
                                                              n→∞ (bp1 )         t+n+1 = 0.
132                                             The New Keynesian Phillips curve




                                        a

                      ∆p
                                        b
                                                     c




                                            x

  Figure 7.1. Phase diagram for the system for the case of bp1 < 1, bp2 < 0,
                                and bx1 = 0

lead to some inﬂation stickiness and to inﬂation being a weighted average of
both past inﬂation and expected future inﬂation. Fuhrer (1997) examines such
a model empirically and ﬁnds that future prices are empirically unimportant
in explaining price and inﬂation behaviour compared to past prices.
    In the same spirit as these authors, and with particular reference to the
empirical assessment in Fuhrer (1997), GG also derive a hybrid Phillips curve
that allows a subset of ﬁrms to have a backward-looking rule to set prices.
The hybrid model contains the wage share as the driving variable and thus nests
their version of the NPCM as a special case. This amounts to the speciﬁcation
                 ∆pt = bfp1 Et ∆pt+1 + bbp1 ∆pt−1 + bp2 xt + εpt .                  (7.7)
    Galı́ and Gertler (1999) estimate (7.7) for the United States in several vari-
ants—using diﬀerent inﬂation measures, diﬀerent normalisation rules for the
GMM estimation, including additional lags of inﬂations in the equation and
splitting the sample. Their results are robust—marginal costs have a signiﬁ-
cant impact on short-run inﬂation dynamics and forward-looking behaviour is
always found to be important.
    In the same manner as above, equation (8.13) can be written as
                       1         bbp1             bp2            1
            ∆pt+1 =    f
                         ∆pt −          ∆pt−1 −          xt −          εpt + ηt+1   (7.8)
                      bp1        bfp1             bfp1          bfp1
and combined with (7.3). The characteristic polynomial of the hybrid system is
                         
                  1               1                         bbp1
    p(λ) = λ − f + bx2 λ2 + f bbp1 + bp2 bx1 + bx2 λ − f bx2 .
            3
                                                                         (7.9)
                 bp1             bp1                          bp1
Using the typical results for the expectation and backward-looking parameters,
bfp1 = 0.25, bbp1 = 0.75, together with the assumption of an exogenous xt
7.3 NPCM as a system                                                                        133

process with autoregressive parameter 0.7, we obtain the roots {3.0, 1.0, 0.7}.5
Thus, there is no asymptotically stable stationary solution for the rate of
inﬂation in this case.
   This seems to be a common result for the hybrid model as several authors
choose to impose the restriction
                                       bfp1 + bbp1 = 1,                                   (7.10)
which forces a unit root upon the system. To see this, note ﬁrst that a 1–1
reparameterisation of (7.8) gives
                              
                  1     bbp1          bbp1      bp2      1
     ∆ pt+1 = f − f − 1 ∆pt + f ∆2 pt − f xt − f εpt + ηt+1 ,
       2
                 bp1    bp1           bp1       bp1     bp1

so that if (7.10) holds, (7.8) reduces to

                             (1 − bfp1 )              bp2            1
                ∆2 pt+1 =                  ∆ 2 pt −          xt −          εpt + ηt+1 .   (7.11)
                                bfp1                  bfp1          bfp1

Hence, the homogeneity restriction (7.10) turns the hybrid model into a model
of the change in inﬂation. Equation (7.11) is an example of a model that is cast
in the diﬀerence of the original variable, a so-called diﬀerenced autoregressive
model (dVAR), only modiﬁed by the driving variable xt . Consequently, it rep-
resents a generalisation of the random walk model of inﬂation that was implied
by setting bfp1 = 1 in the original NPCM. The result in (7.11) will prove import-
ant in understanding the behaviour of the NPCM in terms of goodness of ﬁt,
see later.
    If the process xt is strongly exogenous, the NPCM in (7.11) can be con-
sidered on its own. In that case (7.11) has no stationary solution for the
rate of inﬂation. A necessary requirement is that there are equilibrating mech-
anisms elsewhere in the system, speciﬁcally in the process governing xt (e.g. the
wage share). This requirement parallels the case of dynamic homogeneity in
the backward-looking Phillips curve (i.e. a vertical long-run Phillips curve).
In the present context, the message is that statements about the stationarity
of the rate of inﬂation, and the nature of the solution (backward or forward)
requires an analysis of the system.
    The empirical results of GG and GGL diﬀer from other studies in two
respects. First, bfp1 is estimated in the region (0.65, 0.85) whereas bbp1 is one third
of bfp1 or less. Second, GG and GGL succeed in estimating the hybrid model
without imposing (7.10). GGL (their table 2) report the estimates {0.69, 0.27}
and {0.88, 0.025} for two diﬀerent estimation techniques. The corresponding
roots are {1.09, 0.70, 0.37} and {1.11, 0.70, 0.03}, illustrating that as long as
the sum of the weights is less than one the future dependent solution prevails.

     5 The full set of coeﬃcient values are: b         f           b
                                              x1 = 0, bp1 = 0.25, bp1 = 0.75, bx2 = 0.7.
134                                              The New Keynesian Phillips curve


7.4     Sensitivity analysis
In the following, we will focus on the results in GGL for the Euro area. Our
replication of their estimates is given in (7.12), using the same set of instru-
ments: ﬁve lags of inﬂation, and two lags of the wage share, detrended output,
and wage inﬂation.

        ∆pt = 0.681 ∆pt+1 + 0.281 ∆pt−1 + 0.019 wst + 0.063                   (7.12)
             (0.073)       (0.072)       (0.027)     (0.069)

                      GMM, T = 107 (1971(3) to 1998(1))
                      χ2J (8) = 8.01[0.43],

where χ2J (·) is Hansen’s (1982) J-test of overidentifying restrictions. The role
of the wage share (as a proxy for real marginal costs) is a deﬁnable trait of
the NPCM, yet the empirical relevance of wst is not apparent in (7.12): it is
statistically insigniﬁcant. Note also that the sum of the coeﬃcients of the two
inﬂation terms is 0.96. Taken together, the insigniﬁcance of wst and the near
unit-root, imply that (7.12) is almost indistinguishable from a pure time-series
model, a dVAR.6 On the other hand, the formal signiﬁcance of the forward
term, and the insigniﬁcance of the J-statistic corroborate the NPCM. The mer-
its of the J-statistic are discussed in Section 7.5: in the rest of this section we
conduct a sensitivity analysis with regards to GMM estimation methodology.
    The results in (7.12) were obtained by a GMM procedure which computes
the weighting matrix once. When instead we iterate over both coeﬃcients and
weighting matrix, with ﬁxed bandwidth,7 we obtain

        ∆pt = 0.731 ∆pt+1 + 0.340 ∆pt−1 − 0.042 wst − 0.102                   (7.13)
             (0.052)       (0.069)       (0.029)     (0.070)

                      GMM, T = 107 (1971(3) to 1998(1))
                      χ2J (8) = 7.34[0.50].

As before, there is clear indication of a unit root (the sum of the two inﬂation
coeﬃcients is now slightly above one). The wage share coeﬃcient is wrongly
signed, but it is still insigniﬁcantly diﬀerent from zero, though.
    Next, we investigate the robustness with regard to the choice of instru-
ments. We use an alternative output-gap measure (emugapt ), which is a simple
transformation of the one deﬁned in Fagan et al. (2001) as real output rela-
tive to potential output, measured by a constant-return-to-scale Cobb–Douglas
production function with neutral technical progress. We also omit the two lags

              6 See Bårdsen et al. (2002b) for a more detailed discussion.
              7 We used the default GMM implementation in Eviews 4.
7.4 Sensitivity analysis                                                              135

of wage growth. Apart from yet another sign-change in the ws coeﬃcient, the
results respond little to these changes in the set of instruments:
              ∆pt = 0.60 ∆pt+1 + 0.35 ∆pt−1 + 0.03 wst + 0.08                       (7.14)
                   (0.06)       (0.06)       (0.03)     (0.06)

                       GMM, T = 107 (1972(4) to 1997(4))
                       χ2J (6) = 6.74[0.35].
Finally, we investigate the robustness with respect to estimation method. Since
the NPCM is a linear model, the only real advantage of choosing GMM
as opposed to 2SLS as estimation method is the potential necessity to cor-
rect for autocorrelated residuals. Autocorrelation is in line with the rational
expectations hypothesis, implied by replacing Et ∆pt+1 with ∆pt+1 in estima-
tion—see Blake (1991) and Appendix A.2—but it may also be a symptom of
mis-speciﬁcation, as discussed in Nymoen (2002). As shown below, the esti-
mates are robust with respect to estimation method, even though the standard
errors are doubled, since the model suﬀers from severe autocorrelation:
              ∆pt = 0.66 ∆pt+1 + 0.28 ∆pt−1 + 0.07 wst + 0.10                       (7.15)
                   (0.14)       (0.12)       (0.09)     (0.12)

                       2SLS, T = 104 (1972(2) to 1998(1))
           σ̂IV = 0.28                         RSS = 7.66
           FAR(1–1) (1, 99) = 166.93[0.00]     FAR(2–2) (1, 99) = 4.73[0.03]
           FARCH(1–4) (4, 92) = 2.47[0.05]     χ2normality (2) = 1.59[0.45]
           FHETxi xj (9, 90) = 2.34[0.02]      χ2ival (6) = 11.88[0.06]
           Firel (9, 94) = 70.76[0.00].
The p-value of the Sargan speciﬁcation test, χ2ival , is 0.06, and indicates
that (7.15) could be mis-speciﬁed, since some of the instruments could be
potential regressors. The Firel is the F -statistic from the ﬁrst stage regression of
∆pt+1 against the instrument set and indicates no ‘weak instruments’ problem,
although it is only strictly valid in the case of one endogenous regressor—see
Stock et al. (2002).8
    We conclude from the range of estimates that the signiﬁcance of the wage
share is fragile and that its formal statistical signiﬁcance depends on the exact
implementation of the estimation method used. The coeﬃcient of the forward
variable on the other hand is pervasive and will be a focal point of the following
analysis. Residual autocorrelation is another robust feature, as also noted by
GGL. But more work is needed before we can judge whether autocorrelation
really corroborates the theory, which is GGL’s view, or whether it is a sign of
econometric mis-speciﬁcation.

  8 The rule of thumb is a value bigger than 10 in the case of one endogenous regressor.
136                                                The New Keynesian Phillips curve


7.5       Testing the speciﬁcation
The main tools of evaluation of models like the NPCM have been the GMM test
of validity of overidentifying restrictions (i.e. the χ2J -test earlier) and measures
and graphs of goodness-of-ﬁt.9 Neither of these tests is easy to interpret. First,
the χ2J may have low power. Second, the estimation results reported by GG and
GGL yield values of bfp1 + bbp1 close to 1 while the coeﬃcient of the wage share is
numerically small. This means that the apparently good ﬁt is in fact no better
(or worse) than a model in the double diﬀerences (e.g. a random walk); see
Bårdsen et al. (2002b). There is thus a need for other evaluation methods, and
in the rest of this chapter we test the NPCM speciﬁcation against alternative
models of the inﬂation process.


7.5.1       An encompassing representation
The main alternatives to the NPCM as models of inﬂation are the Standard
Phillips Curve Model (PCM) and the Incomplete Competition Model (ICM).
They will therefore be important in suggesting ways of evaluating the NPCM
from an encompassing perspective. To illustrate the main diﬀerences between
alternative speciﬁcations, consider the following stylised framework—see also
Bårdsen et al. (2002a). Let w be wages and p consumer prices; with a as
productivity, the wage share ws is given as real unit labour costs: ws = ulc −
p = w−a−p; u is the unemployment rate, and gap the output gap, all measured
in logs. We abstract from other forcing variables, like open economy aspects.
A model of the wage–price process general enough for the present purpose then
takes the form

                          ∆w = α∆pe − βws − γu,
                          ∆p = δ∆pe + ζ∆w + ηws + ϑgap,

where ∆pe is expected inﬂation, and the dynamics are to be speciﬁed separately
for each model. Although the structure is very simple, the diﬀerent models drop
out as non-nested special cases:

1. The NPCM is given as

                           ∆pt = δ1f ∆pet+1 + δ1b ∆pt−1 + η1 wst ,

   where the expectations term ∆pet+1 is assumed to obey rational expectations.

  9 For example, in the Abstract of GGL the authors state that ‘the NPC ﬁts Euro data

very well, possibly better than United States data’. Also Galı́ (2003), responding to critical
assessments of the NPCM, states that ‘it appears to ﬁt the data much better than had been
concluded by the earlier literature’.
7.5 Testing the speciﬁcation                                                 137

2. The PCM is—Aukrust (1977), Calmfors (1977), Nymoen (1990), Blanchard
   and Katz (1997):
                               ∆wt = α2 ∆pt − γ2 ut
                               ∆pt = ζ2 ∆wt + ϑ2 gap t .
3. The ICM on equilibrium correction form—Sargan (1964), Layard et al. (1991),
   Bårdsen et al. (1998), and Kolsrud and Nymoen (1998):
                ∆wt = α3 ∆pt − β3 (ws − γ2 u)t−1
                ∆pt = ζ3 ∆wt − δ1b [ p − η3 (ws + p)]t−1 + ϑ3 gap t−1 .
Of course, there exist a host of other, more elaborate, models—a notable omis-
sion being non-linear PCMs. However, the purpose here is to highlight that
discrimination between the models is possible through testable restrictions.
The diﬀerence between the two Phillips curve models is that the NPCM has
forward-looking expectations and has real unit labour costs, rather than the
output gap of the PCM. In the present framework, the ICM diﬀers mainly
from the NPCM in the treatment of expectations and from the PCM in the
latter’s exclusion of equilibrium correction mechanisms that are derived from
conﬂict models of inﬂation; see Rowthorn (1977), Sargan (1980), Kolsrud and
Nymoen (1998), Bårdsen and Nymoen (2003) and Chapter 6. To see this,
note that the NPCM can, trivially, be reparameterised as a forward-looking
equilibrium-correction model (EqCM) with long-run coeﬃcient restricted
to unity:
         ∆pt = δ1f ∆pet+1 + η1 ∆wst + δ1b ∆pt−1 − η1 [ p − 1(ws + p)]t−1 .
The models listed in 1–3 are identiﬁed, in principle, but it is an open question
whether data and methodology are able to discriminate between them on a
given data set. We therefore test the various identifying restrictions. This will
involve testing against

• richer dynamics
• system representations
• encompassing restrictions.

We next demonstrate these three approaches in practice.


7.5.2     Testing against richer dynamics
In the case of the NPCM, the speciﬁcation of the econometric model used for
testing a substantive hypothesis—forward and lagged endogenous variable—
incorporates the alternative hypothesis associated with a mis-speciﬁcation test
(i.e. of residual autocorrelation). Seeing residual correlation as corroborating
the theory that agents are acting in accordance with NPCM is invoking a very
138                                                   The New Keynesian Phillips curve

strong ceteris paribus clause. Realistically, the underlying cause of the residual
correlation may of course be quite diﬀerent, for example, omitted variables,
wrong functional form or, in this case, a certain form of over-diﬀerencing.
In fact, likely directions for respeciﬁcation are suggested by pre-existing results
from several decades of empirical modelling of inﬂation dynamics. For example,
variables representing capacity utilisation (output-gap and/or unemployment)
have a natural role in inﬂation models: we use the alternative output-gap
measure (emugapt ). Additional lags in the rate of inﬂation are also obvious can-
didates. As a direct test of this respeciﬁcation, we move the lagged output-gap
(emugapt−1 ) and the fourth lag of inﬂation (∆pt−4 ) from the list of instruments
used for estimation of (7.14), and include them as explanatory variables in the
equation. The results (using 2SLS) are:
                ∆pt = 0.07 ∆pt+1 + 0.14 wst + 0.44 ∆pt−1
                     (0.28)       (0.09)     (0.14)
                      + 0.18 ∆pt−4 + 0.12 emugap t−1 + 0.53                              (7.16)
                        (0.09)        (0.05)             (0.30)
                         2SLS, T = 104 (1972(2) to 1998(1))
           σ̂IV = 0.28                              RSS = 7.52
           FAR(1–1) (1, 97) = 2.33[0.13]            FAR(2−2) (1, 97) = 2.80[0.10]
           FARCH(1–4) (4, 90) = 0.80[0.53]          χ2normality (2) = 1.75[0.42]
           FHETxi xj (20, 77) = 1.26[0.23]          χ2ival (4) = 4.52[0.34].

When compared to (7.14) and (7.15), four results stand out:

1. The estimated coeﬃcient of the forward term ∆pt+1 is reduced by a factor
   of 10, and becomes insigniﬁcant.
2. The diagnostic tests indicate no residual autocorrelation or hetero-
   skedasticity.
3. The p-value of the Sargan speciﬁcation test, χ2ival , is 0.34, and is evidence that
   (7.16) eﬀectively represents the predictive power that the set of instruments
   has about ∆pt .10
4. If the residual autocorrelations of the NPCMs above are induced by the
   forward solution and ‘errors in variables’, there should be a similar auto-
   correlation process in the residuals of (7.16). Since there is no detectable
   residual autocorrelation, that interpretation is refuted, supporting instead
   that the hybrid NPCM is mis-speciﬁed.

Finally, after deleting ∆pt+1 from the equation, the model’s interpretation is
clear, namely as a conventional dynamic price-setting equation. Indeed, using
the framework of Section 7.5.1, the model is seen to correspond to the ICM price
equation, with δ1f = 0 (and extended with ∆pt−4 and emugapt−1 as explanatory
 10 The full set of instruments is: ws
                                         t−1 , wst−2 , ∆pt−2 , ∆pt−3 , ∆pt−5 , and emugapt−2 .
7.5 Testing the speciﬁcation                                                   139

variables). We are therefore eﬀectively back to a conventional dynamic markup
equation.
    In sum, we ﬁnd that signiﬁcance testing of the forward term does not sup-
port the NPCM for the Euro data. This conclusion is based on the premise that
the equation with the forward coeﬃcient is tested within a statistically adequate
model, which entails thorough mis-speciﬁcation testing of the theoretically
postulated NPCM, and possible respeciﬁcation before the test of the forward
coeﬃcient is performed. Our results are in accord with Rudd and Whelan
(2004), who show that the tests of forward-looking behaviour which Galı́ and
Gertler (1999) and Galı́ et al. (2001) rely on, have very low power against
alternative, but non-nested, backward-looking speciﬁcations, and demonstrate
that results previously interpreted as evidence for the New Keynesian model
are also consistent with a backward-looking Phillips curve. Rudd and Whelan
develop alternative, more powerful tests, which exhibit a very limited role for
forward-looking expectations. A complementary interpretation follows from a
point made by Mavroeidis (2002), namely that the hybrid NPCM suﬀers from
underidentiﬁcation, and that in empirical applications identiﬁcation is achieved
by conﬁning important explanatory variables to the set of instruments, with
mis-speciﬁcation as a result.

7.5.3     Evaluation of the system
The nature of the solution for the rate of inﬂation is a system property, as noted
in Section 7.3. Hence, unless one is willing to accept at face value that an oper-
ational deﬁnition of the forcing variable is strongly exogenous, the ‘structural’
NPCM should be evaluated within a system that also includes the forcing
variable as a modelled variable.
    For that purpose, Table 7.1 shows an estimated system for Euro-area inﬂa-
tion, with a separate equation (the second in the table) for treating the wage
share (the forcing variable) as an endogenous variable. Note that the hybrid
NPCM equation (ﬁrst in the table) is similar to (7.14), and thus captures the
gist of the results in GGL. This is hardly surprising, since only the estimation
method (full information maximum likelihood—FIML in Table 7.1) separates
the two NPCMs.
    An important feature of the estimated equation for the wage share wst
is the two lags of the rate of inﬂation, which both are highly signiﬁcant. The
likelihood-ratio test of joint signiﬁcance gives χ2 (2) = 24.31[0.00], meaning that
there is clear formal evidence against the strong exogeneity of the wage share.
One further implication of this result is that a closed form solution for the rate
of inﬂation cannot be derived from the structural NPCM alone.
    The roots of the system in Table 7.1 are all less than one (not shown in
the table) in modulus and therefore corroborate a forward solution. However,
according to the results in the table, the implied driving variable is emugapt ,
rather than wst which is endogenous, and the weights of the present value
140                                          The New Keynesian Phillips curve

                                   Table 7.1
                  FIML results for the NPCM system for the
                         Euro area 1972(2)–1998(1)

          ∆pt = 0.7696∆pt+1 + 0.2048∆pt−1 + 0.0323 wst
                (0.154)        (0.131)        (0.0930)
                 + 0.0444
                   (0.1284)
           wst = 0.8584 wst−1 + 0.0443 ∆pt−2 + 0.0918 ∆pt−5
                (0.0296)        (0.0220)         (0.0223)
                 + 0.0272 emugap t−2 − 0.2137
                   (0.0067)             (0.0447)
         ∆pt+1 = 0.5100 wst−1 + 0.4153 ∆pt−1 + 0.1814 emugap t−1
                (0.0988)        (0.0907)         (0.0305)
                 + 0.9843
                   (0.1555)

      Note: The sample is 1972(2) to 1998(1), T = 104.
                                σ̂∆pt = 0.290186
                                 σ̂ws = 0.074904
                                 σ̂∆pet+1 = 0.325495
                      FvAR(1–5) (45, 247) = 37.100[0.0000]∗∗
                       FvHETx2 (108, 442) = 0.94319[0.6375]
                     FvHETxi xj (324, 247) = 1.1347[0.1473]
                            χ2,v
                             normality (6) = 9.4249[0.1511]




calculation of emugapt have to be obtained from the full system. The stat-
istics at the bottom of the table show that the system of equations has clear
deﬁciencies as a statistical model, cf. the massive residual autocorrelation
detected by FvAR(1–5) . Further investigation indicates that this problem is in
part due to the wage share residuals and is not easily remedied on the present
information set. However, from Section 7.5.2 we already know that another
source of vector autocorrelation is the NPCM itself, and moreover that this
mis-speciﬁcation by and large disappears if we instead adopt equation (7.16)
as our inﬂation equation.
    It lies close at hand therefore to suggest another system where we utilise
the second equation in Table 7.1, and the conventional price equation that
is obtained by omitting the insigniﬁcant forward term from equation (7.16).
Table 7.2 shows the results of this potentially useful model. No mis-speciﬁcation
is detected, and the coeﬃcients appear to be well determined. In terms of
economic interpretation the models resemble an albeit ‘watered down’ version
7.5 Testing the speciﬁcation                                                  141

                                  Table 7.2
            FIML results for a conventional Phillips curve for the
                        Euro area 1972(2)–1998(1)

             ∆pt = 0.2866 wst + 0.4476 ∆pt−1 + 0.1958∆pt−4
                  (0.1202)      (0.0868)        (0.091)
                   + 0.1383 emugap t−1 + 0.6158
                     (0.0259)             (0.1823)
             wst = 0.8629 wst−1 + 0.0485 ∆pt−2 + 0.0838 ∆pt−5
                  (0.0298)        (0.0222)         (0.0225)
                   + 0.0267 emugap t−2 − 0.2077
                     (0.0068)             (0.0450)

      Note: The sample is 1972(2) to 1998(1), T = 104.
                                 σ̂∆pt = 0.284687
                                  σ̂ws = 0.075274
                       FvAR(1–5) (20, 176) = 1.4669[0.0983]
                        FvHETx2 (54, 233) = 0.88563[0.6970]
                      v
                     FHETxi xj (162, 126) = 1.1123[0.2664]
                              χ2,v
                                 normality (4) = 2.9188[0.5715]
                      2
                     χoveridentiﬁcation (10) = 10.709[0.3807]

of the modern conﬂict model of inﬂation and one interesting route for further
work lies in that direction. That would entail an extension of the information set
to include open economy aspects and indicators of institutional developments
and of historical events. The inclusion of such features in the information set
will also help in stabilising the system.11


7.5.4     Testing the encompassing implications
So far the NPCM has mainly been used to describe the inﬂationary process
in studies concerning the United States economy or for aggregated Euro data.
Heuristically, we can augment the basic model with import price growth and
other open economy features, and test the signiﬁcance of the forward inﬂa-
tion rate within such an extended NPCM. Recently, Batini et al. (2000) have
derived an open economy NPCM from ﬁrst principles, and estimated the
model on United Kingdom economy data. Once we consider the NPCM for
individual European economies, there are new possibilities for testing—since
pre-existing results should, in principle, be explained by the new model (the
NPCM). Speciﬁcally, and as discussed in earlier chapters, in the United King-
dom there exist models of inﬂation that build on a diﬀerent framework than the
                       11 The largest root in Table 7.2 is 0.98.
142                                             The New Keynesian Phillips curve

NPCM, namely wage bargaining and cointegration; see, for example, Nickell
and Andrews (1983), Hoel and Nymoen (1988), Nymoen (1989a), and Blan-
chard and Katz (1999). Since the underlying theoretical assumptions are quite
diﬀerent, the existing empirical models deﬁne an information set that is wider
than the set of instruments that are typically employed in the estimation of
NPCMs. In particular, the existing studies claim to have found cointegrating
relationships between levels of wages, prices, and productivity. These rela-
tionships constitute evidence that can be used to test the implications of the
NPCM.
    Speciﬁcally, the following procedure is followed12 :

1. Assume that there exists a set of variables z = [z1 z2 ], where the sub-set z1
   is suﬃcient for identiﬁcation of the maintained NPCM model. The variables
   in z2 are deﬁned by the empirical ﬁndings of existing studies.
2. Using z1 as instruments, estimate the augmented model
               ∆pt = bfp1 Et ∆pt+1 + bbp1 ∆pt−1 + bp2 xt + · · · + z2,t bp4
   under the assumption of rational expectations about forward prices.
3. Under the hypothesis that the NPCM is the correct model, bp4 = 0 is
   implied. Thus, non-rejection of the null hypothesis of bp4 = 0, corroborates
   the feed-forward Phillips curve. In the case of the other outcome: non-
   rejection of bfp1 = 0, while bp4 = 0 is rejected statistically, the encompassing
   implication of the NPCM is refuted.

The procedure is clearly related to signiﬁcance testing of the forward term,
but there are also notable diﬀerences. As mentioned above, the motivation of
the test is that of testing the implication of the rational expectations hypo-
thesis; see Hendry and Neale (1988), Favero and Hendry (1992), and Ericsson
and Irons (1995). Thus, we utilise that under the assumption that the NPCM
is the correct model, consistent estimation of bfp1 can be based on z1 , and
supplementing the set of instruments by z2 should not signiﬁcantly change
the estimated bfp1 .
    In terms of practical implementation, we take advantage of the existing
results on wage and price modelling using cointegration analysis which read-
ily imply z2 -variables in the form of linear combinations of levels variables.
In other words they represent ‘unused’ identifying instruments that go beyond
information sets used in the Phillips curve estimation. Importantly, if agents
are rational, the extension of the information set should not take away the
signiﬁcance of ∆pt+1 in the NPCM, and bp4 = 0.
    As mentioned earlier, Batini et al. (2000) derive an open economy NPCM
consistent with optimising behaviour, thus extending the intellectual rationale
of the original NPCM. They allow for employment adjustment costs, hence
both future and current employment growth is included (∆nt+1 and ∆nt ), and

  12 David F. Hendry suggested this test procedure to us. Bjørn E. Naug pointed out to us

that a similar procedure is suggested in Hendry and Neale (1988).
7.5 Testing the speciﬁcation                                                                143

propose to let the equilibrium markup on prices depend on the degree of foreign
competition, com. In their estimated equations, they also include a term for
the relative price of imports, denoted rpi and oil prices oil. The wage share
variable used is the adjusted share preferred by Batini et al. (2000). Equation
(7.17) is our attempt to replicate their results, with GMM estimation using
their data.13
           ∆pt = − 0.56 + 0.33 ∆pt+1 + 0.32 ∆pt−1 + 0.07 gap t
                  (0.20) (0.09)         (0.04)         (0.06)
                 + 0.02 com t + 0.13 wst − 0.004 rpi t − 0.02 ∆oil t
                   (0.01)      (0.05)      (0.01)        (0.003)
                 − 0.79 ∆nt+1 + 1.03 ∆nt                                                 (7.17)
                   (0.42)       (0.39)

                GMM, T = 107 (1972(3) to 1999(1)), σ̂ = 0.0099
                χ2J (31) = 24.92[0.77], Firel (40, 66) = 8.29[0.00].
The terms in the second line represent small open economy features that we
noted above. The estimated coeﬃcients are in accordance with the results that
Batini et al. (2000) report. However, the Firel , which still is the F -statistic from
the ﬁrst stage ordinary least squares (OLS) regression of ∆pt+1 against the
instrument set, indicates that their model might have a potential problem of
weak instruments.
    In Section 5.6 we saw how Bårdsen et al. (1998) estimate a simultaneous
cointegrating wage–price model for the United Kingdom (see also Bårdsen and
Fisher 1999). Their two equilibrium-correction terms are deviations from a long-
run wage-curve and an open economy price markup (see Panel 5 of Table 5.3):
                 ecmwt = (w − p − a + τ 1 + 0.065u)t ,                                   (7.18)
                 ecmpt = (p − 0.6τ 3 − 0.89(w + τ 1 − a) − 0.11pi)t ,                    (7.19)
where a denotes average labour productivity, τ 1 is the payroll tax rate, u is the
unemployment rate and pi is the price index of imports. The ﬁrst instrument,
ecmwt , is an extended wage share variable which we expect to be a better
instrument than wst , since it includes the unemployment rate as implied by,
for example, bargaining models of wage-setting (see the encompassing repre-
sentation of Section 7.5.1). The second instrument, ecmpt , is an open economy
version of the long-run price markup of the stylised ICM in Section 7.5.1.14
  13 Although we use the same set of instruments as Batini et al. (2000), we are unable to

replicate their table 7b, column (b). Inﬂation is the ﬁrst diﬀerence of log of the gross value
added deﬂator. The gap variable is formed using the Hodrick–Prescott (HP) trend; see Batini
et al. (2000) (footnote to tables 7a and 7b) for more details.
  14 Inﬂation ∆p in equation (7.17) is for the gross value added price deﬂator, while the
                   t
price variable in the study by Bårdsen et al. (1998) is the retail price index pct . However, if
the long-run properties giving rise to the ecms are correct, the choice of price index should
not matter. We therefore construct the two ecms in terms of the GDP deﬂator, pt , used by
Batini et al. (2000).
144                                              The New Keynesian Phillips curve

    Equation (7.20) shows the results, for the available sample 1976(2)–1996(1),
of adding ecmwt−1 and ecmpt−1 to the NPCM model (7.17):
      ∆pt = − 1.51 + 0.03 ∆pt+1 + 0.24 ∆pt−1 − 0.02 gap t + 0.008 com t
             (0.44) (0.13)          (0.08)         (0.11)     (0.019)
            + 0.13 wst − 0.01 rpi t − 0.003 ∆oil t + 0.11 ∆nt+1
              (0.07)    (0.03)        (0.004)        (0.27)
              + 0.87 ∆nt − 0.35 ecmwt−1 − 0.61 ecmpt−1                              (7.20)
               (0.19)     (0.10)         (0.12)

                GMM, T = 80 (1976(2) to 1996(1)),            σ̂ = 0.0083
                χ2J (31) = 14.39[0.99],    Firel (42, 37) = 4.28[0.000].
The forward term ∆pt+1 is no longer signiﬁcant, whereas the ecm-terms, which
ought to be of no importance if the NPCM is the correct model, are both
strongly signiﬁcant.15
    In the same vein, note that our test of GGL’s Phillips curve for the Euro
area in Section 7.5.2 can be interpreted as a test of the implications of rational
expectations. There z2 was simply made up of ∆pt−4 and emugapt−1 which
modelling experience tells us are predictors of future inﬂation. Thus, from
rational expectations their coeﬃcients should be insigniﬁcant when ∆pt+1
is included in the model (and there are good, overidentifying instruments).
Above, we observed the converse, namely ∆pt−4 and emugapt−1 are statist-
ically and numerically signiﬁcant, while the estimated coeﬃcient of ∆pt+1 was
close to zero.


7.5.5      The NPCM in Norway
Consider the NPCM (with forward term only) estimated on quarterly
Norwegian data16 :
         ∆pt = 1.06 ∆pt+1 + 0.01 wst + 0.04 ∆pit + dummies                          (7.21)
              (0.11)       (0.02)     (0.02)

                                 χ2J (10) = 11.93[0.29].
The closed economy speciﬁcation has been augmented heuristically with import
price growth (∆pit ) and dummies for seasonal eﬀects as well as special events
in the economy described in Bårdsen et al. (2002b). Estimation is by GMM
for the period 1972(4)–2001(1). The instruments used (i.e. the variables in z1 )
are lagged wage growth (∆wt−1 , ∆wt−2 ), lagged inﬂation (∆pt−1 , ∆pt−2 ), lags
of level and change in unemployment (ut−1 , ∆ut−1 , ∆ut−2 ), and changes in

  15 The conclusion is unaltered when the two instruments are deﬁned in terms of pc , as in
                                                                                   t
the original speciﬁcation of Bårdsen et al. (1998).
  16 Inﬂation is measured by the oﬃcial consumer price index (CPI).
7.6 Conclusions                                                                          145

(a) 0.25                                         (b) 1.2
                                   
   0.20                            –2               1.0
                                   +2
   0.15                                              0.8

   0.10                                              0.6

   0.05                                              0.4                           –2
                                                                                   +2
   0.00                                              0.2                           

  –0.05                                              0.0
            1994 1995 1996 1997 1998 1999 2000             1994 1995 1996 1997 1998 1999 2000

 Figure 7.2. Rolling coeﬃcients ±2 standard errors of the NPCM, estimated
    on Norwegian data ending in 1993(4)–2000(4). Graph (a) shows the
       coeﬃcient of wst and graph (b) shows the coeﬃcient of ∆pt+1 .

energy prices (∆pet , ∆pet−1 ), the short term interest rate (∆RLt , ∆RLt−1 ),
and the length of the working day (∆ht ).
    The coeﬃcient estimates are similar to GG. Strictly speaking, the coeﬃcient
of E[∆pt+1 | It ] suggests that a backward solution is appropriate. But more
importantly the estimated NPCM once more appears to be a modiﬁed random
walk model. We also checked the stability of the key parameters of the model
by rolling regressions with a ﬁxed window of 85 observations. Figure 7.2 shows
that the sample dependency is quite pronounced in the case of Norway.
    Next, we deﬁne an equilibrium correction term from the results in Bårdsen
et al. (2003) and use that variable as the additional instrument, z2,t :
                  ecmpt = pt − 0.6(wt − at + τ 1t ) − 0.4pit + 0.5τ 3t .
The results, using GMM, are
           ∆pt = −0.02 ∆pt+1 + 0.04 wst − 0.06 ∆pit − 0.10 ecmpt−1
                 (0.125)      (0.025)    (0.017)     (0.020)
                  + dummies
                                   χ2J (10) = 12.78[0.24],
showing that the implication of the NPCM is refuted by the ﬁnding of (1)
a highly signiﬁcant (price) equilibrium correction term deﬁned by an existing
study, and (2) the change in the estimated coeﬃcient of ∆pt+1 , from 1.06 and
statistical signiﬁcance, to −0.02 and no statistical signiﬁcance.


7.6         Conclusions
Earlier researchers of the NPCM have concluded that the NPCM represents
valuable insight into the driving forces of inﬂation dynamics. Our evaluation
gives completely diﬀerent results. In particular we show that by including
146                                         The New Keynesian Phillips curve

variables from the list of instruments as explanatory variables, a statistically
adequate model for the Euro area is obtained. In this respeciﬁed model, the for-
ward term vanishes, and the Euro area ‘inﬂation equation’ can be reinterpreted
as a conventional price markup equation. Encompassing implies that a model
should be able to explain the results of alternative speciﬁcations. In many
countries, empirical inﬂation dynamics is a well researched area, so studies
exist that any new model should be evaluated against. Applying the encom-
passing principle to the NPCM models of United Kingdom inﬂation as well
as Norwegian inﬂation, leaves no room for the NPCM. The conclusion is that
economists should not accept the NPCM too readily.
    On the constructive side, our analysis shows that the NPCM can be seen
as an equilibrium-correction model augmented by a forward term. This means
that although our conclusion refutes the NPCM hypothesis as presently imple-
mented, this does not preclude that forward expectations terms could be found
to play a role in explaining inﬂation dynamics within statistically well-speciﬁed
models, using the procedures for testing forward terms.
                                        8

            Money and inﬂation

      The role of money in the inﬂation process is an old issue in macro-
      economics, yet money plays no essential part in the models appearing
      up to and including Chapter 7 of the book. In this chapter, we explore
      the relevance of monetary aggregates as explanatory variables for inﬂa-
      tion. First, we derive money demand functions for the Euro area and
      for Norway, and investigate whether these functions can be interpreted
      as inverted inﬂation equations. Second, we make a survey of inﬂation
      models that have been used in the recent past to analyse Euro area data.
      Moreover, we evaluate the models’ statistical properties and make fore-
      cast comparisons. Finally, we make a similar evaluation and comparison
      of Norwegian inﬂation models. The P ∗ -model, which emphasises disequi-
      libria of monetary aggregates as the main driving force behind inﬂation,
      plays an important part in both cases. For the case of Norway, we also
      test an inﬂation equation—derived as the reduced form of the dynamic
      Incomplete Competition Model —for neglected monetary eﬀects.



8.1      Introduction
The monetarist view of inﬂation—that inﬂation is always and everywhere
a monetary phenomenon (Friedman 1963, p. 17)—runs contrary to the inﬂa-
tion models we have considered in the preceding chapters. Despite the notable
diﬀerences that exist between them, they all reﬂect the view that inﬂation is
best understood as reﬂecting imbalances in product and labour markets. This
view is inconsistent with a simple quantity theory of inﬂation, but not with
having excess demand for money as a source of inﬂation pressure.
    In Section 8.2, we review brieﬂy some results from the theory of money
demand and show that this theory forms the basis for empirically stable
money demand functions for the Euro area (Section 8.3) as well as for
Norway (Section 8.4). Using criteria formulated by Hendry and Ericsson (1991),


                                        147
148                                                                  Money and inﬂation

we evaluate the claim that these stable money demand functions in reality are
inverted inﬂation equations.
    In Section 8.5, we survey models of inﬂation which have been recently
used in the literature to explain Euro-area inﬂation. A reduced-form inﬂation
equation, derived from the wage–price block of the macroeconometric model
area wide model (AWM) of the European Central Bank, forms a baseline for
comparing competing models of inﬂation. The P∗ -model of inﬂation suggested
in Hallman et al. (1991) is one serious contender. The P∗ -model speciﬁes a direct
eﬀect from the lagged price gap, deﬁned as the lagged price level minus the long-
run equilibrium price level which is implied by a long-run quantity equation.
Trecroci and Vega (2002) and Gerlach and Svensson (2003) ﬁnd support for
this model formulation on Euro-area data, as do Tödter and Reimers (1994)
on German data.1 The above models are estimated and evaluated against each
other within a common framework in Section 8.6, along with a hybrid New Key-
nesian Phillips curve model and the inﬂation equation derived from a version
of the Incomplete Competition Model (ICM).
    In Section 8.7, we present a reduced-form representation of the ICM inﬂation
model for Norway, which (much in the same way as the AWM inﬂation model for
the Euro-area data) forms a benchmark against which we evaluate several vari-
ants of the P∗ -model, a hybrid Phillips curve and the inverted money demand
inﬂation equation of Section 8.4. The focus remains on monetary aggregates:
in Section 8.7.4 we test the robustness of the ICM inﬂation model for neglected
monetary eﬀects based on a sequence of omitted variable tests. Section 8.7.7
concludes and compares the ﬁndings on the two data sets.


8.2       Models of money demand
8.2.1       The velocity of circulation
Models of the velocity of circulation are derived from the ‘equation of exchange’
identity often associated with the quantity theory of money (Fisher 1911) which
on logarithmic form can be written:
                                    mt + vt = pt + yt ,                                 (8.1)
where mt is money supply, vt is money velocity, yt is a scaling variable (e.g. real
output), and pt is the price level. We deﬁne the inverse velocity of money as
mt − yt − pt = −vt (small letters denote variables in logarithms). A simple
  1 In other studies, such direct eﬀects from money aggregates (or measures derived from

them) are rejected, cf. for example, de Grauwe and Polan (2001) who argue that the seemingly
strong link between inﬂation and the growth rate of money is almost wholly due to the
presence of high (or hyper-) inﬂation countries in the sample. Similarly, Estrella and Mishkin
(1997) reject the idea that broad money is useful as an information variable and provide
a good signal of the stance of monetary policy, based on their analysis of United States and
German data.
8.2 Models of money demand                                                       149

theory of money demand is obtained by adding the assumption that the velocity
is constant, implying that the corresponding long-run money demand relation-
ship is a linear function of the scaling variable yt , and the price level pt . The
stochastic speciﬁcation can be written as:
                              mt − yt − pt = γ0 + εt                           (8.2)
assuming that E[εt |It−1 ] = 0 on some appropriate information set It−1 . The
price homogeneity restriction in (8.2) implies that real money, (mt −pt ), will be
determined by the scaling variable, yt , which has a unit elasticity. The constancy
of γ0 is, however, pervasively rejected in the empirical literature, cf. for example,
Rasche (1987) who discusses the trending behaviour of velocity vt . Bordo and
Jonung (1990) and Siklos (1993) analyse the properties of the velocity in a ‘100
years perspective’ and they explain the changes in velocity over this period
by institutional changes, comparing evidence from several countries. Klovland
(1983) has analysed the demand for money in Norway during the period from
1867 to 1980, and he argues along similar lines that institutional and structural
factors such as the expansion of the banking sector and the increased degree of
ﬁnancial sophistication seems to be linked with the variations in velocity across
this period.
    Bomhoﬀ (1991) has proposed a model where the inverse velocity is time
dependent, that is, −vt = γt , and he applies the Kalman ﬁlter to model the
velocity changes as a function of a shift parameter, a deterministic trend, and
some relevant interest rate variable Rt , with the additional assumption that
there are stochastic shocks in the shift and trend parameters. This allows for
a very ﬂexible time-series representation of velocity, which can be shown to
incorporate the class of equilibrium-correction models which we will discuss
later. A maintained hypothesis in the velocity models is that the long-run
income elasticity is one. This hypothesis has been challenged from a theor-
etical perspective, for example, in ‘inventory models’ (Baumol 1952; Tobin
1956) and in ‘buﬀer stock models’ (Miller and Orr 1966; Akerlof 1979). The
empirical evidence is such that this issue remains an open empirical question.
A commonly used generalisation of the velocity model yields a money demand
function of the following type:
                             mt = fm (pt , yt , Rt , ∆pt ),                    (8.3)
where the model is augmented with the overall inﬂation rate ∆pt , which meas-
ures the return to holding goods, and the yields on ﬁnancial assets, represented
by a vector of interest rates, Rt .
    The choice of explanatory variables in equations like (8.3) varies a great
deal between diﬀerent theoretical and empirical studies. A typical mainstream
relationship, which is often found in empirical studies of long-run real money
balances, is the following semi-logarithmic speciﬁcation:
                 mt − pt = γy yt + γR Rt + γ∆p ∆pt + constant.                 (8.4)
150                                                                 Money and inﬂation

8.2.2     Dynamic models
The equilibrium-correction model provides a ﬂexible dynamic speciﬁcation for
the money demand function. This entails explicit and separate modelling of the
short-run dynamic speciﬁcation and the long-run cointegrating relationship for
mt , which allows us to distinguish between shocks which will only cause tem-
porary eﬀects on money holdings and shocks with persistent long-run eﬀects.
Furthermore, the economic variables which exert the strongest short-run eﬀects
in money holdings, say, in the ﬁrst quarters following the shock, need not be
the same as the variables which drive money holdings in the long run. This is
consistent with the models of Miller and Orr (1966) and Akerlof (1979), who
study optimal inventories when changes in the cash balances are stochastic,
leading to (s, S) target/threshold models. In these models, the short-run elasti-
city with respect to income and interest rates can be negligible as long as targets
and thresholds remain constant, while the long-run elasticities follow from the
long-run cointegrating relationship.
    A simple equilibrium correction speciﬁcation for mt using the vector zt as
explanatory variables is
                 
                 q−1                
                                    q−1
        ∆mt =          δi ∆mt−i +         γi ∆zt−i + αm (mt−1 − β  zt−1 ) + εt ,   (8.5)
                 i=1                i=0
           εt ∼ i.i.d.(0, σ 2 ).
The parameter αm captures a feedback eﬀect on the change in money hold-
ings, ∆mt , from the lagged deviation from the long-run target money holdings,
(m − m∗ )t−1 . The target m∗t is deﬁned as a linear function of the forcing vari-
ables zt , that is, as m∗t = β  zt . Compared to a partial adjustment model,
the equilibrium-correction model allows for richer dynamics in terms of more
ﬂexible dynamic responses in money balances to shocks in the forcing variables.
    Equation (8.5) can be obtained from an unrestricted Autoregressive
Distributed Lag model in the levels of the variables by imposing the appro-
priate set of equilibrium-correction restrictions. The duality between equi-
librium correction and cointegration (Engle and Granger 1987) makes the
equilibrium-correction speciﬁcation (8.5) an attractive choice for the modelling
of non-stationary time-series, for example, variables which are I(1). If the forcing
variables zt are weakly exogenous with respect to the parameters in the money
demand equation, there will be no loss of information in modelling the change
in money holdings ∆mt in the context of a conditional single-equation model
like (8.5).


8.2.3     Inverted money demand equations
In reviewing the lineages of the Phillips curve in Chapter 4, we saw that the
relationship between wage growth and the level of economic activity (or unem-
ployment) has a prominent position in the new classical macroeconomics
8.3 Monetary analysis of Euro-area data                                            151

literature; see, for example, Lucas and Rapping (1969, 1970) and Lucas (1972).
Two issues were in focus. First, according to this literature, the causality of
Phillips’ original model is reversed: if a correlation between inﬂation and unem-
ployment exists at all, the causality runs from inﬂation to the level of activity
and unemployment. Since price and wage growth are then determined from out-
side the Phillips curve, the rate of unemployment would typically be explained
by the rate of wage growth (and/or inﬂation). Second, given this inversion of
the Phillips curve, the determination of the price level in Lucas and Rapping’s
model is based on a quantity theory relationship, where they condition on an
exogenous or autonomously determined money stock.
    Later we investigate the relationship between money and inﬂation from this
monetarist perspective. Obviously, a causal relationship between money and
inﬂation can be analysed from several angles. The most direct approach would
be to model inﬂation as a function of some monetary aggregates. However, we
shall ﬁrst look to estimated versions of the money demand functions we intro-
duced earlier, in order to see if they can be interpreted as inverted equations
for price growth. This amounts to inverting the money demand relationship to
obtain a relationship for price growth in the same way as the Phillips curve was
inverted to explain unemployment earlier.
    In their study of money demand in the United Kingdom and the United
States, Hendry and Ericsson (1991) estimate a money demand relationship
for the United Kingdom under the assumption that it represents a condi-
tional model for money growth with output, prices, and interest rates as the
main explanatory factors. The model is well speciﬁed with stable parameters.
Inversion of this model to an inﬂation equation yields a non-constant repres-
entation, with several signs of model mis-speciﬁcation. Noting that the price
level pt is included among the explanatory variables in zt , Hendry and Ericsson
(1991) estimate an inverted money demand relationship of the type

  ∆pt = β̂0 ∆mt + β̂1 ∆mt−1 + ξˆ0 ∆zt + ξˆ1 ∆zt−1 + κ̂m (mt−1 − β  zt−1 ) + ε̂t .
                                                                                 (8.6)

In the following section we repeat this exercise: ﬁrst, on data for the Euro area
and second, on data for Norway.



8.3     Monetary analysis of Euro-area data
8.3.1     Money demand in the Euro area 1980–97
In this section, we establish that money demand in the Euro area can be mod-
elled with a simple equilibrium correction model. We base the empirical results
on the work by Coenen and Vega (2001) who estimate the aggregate demand
for broad money in the Euro area. In Table 8.1 we report a model which is
a close approximation to their preferred speciﬁcation for the quarterly growth
152                                                             Money and inﬂation

                                Table 8.1
          Empirical model for ∆(m − p)t in the Euro area based on
                         Coenen and Vega (2001)

                                          ∆RSt + ∆RSt−1
 ∆(m − p)t = −0.74 + 0.08∆∆yt + 0.19
             (0.067) (0.040)       (0.074)       2
                                   ∆pant + ∆pant−1
              − 0.36∆RLt−1 − 0.53                  − 0.01 dum86t
              (0.08)       (0.050)         2       (0.002)
               − 0.14 [(m − p) − 1.140y + 1.462∆pan + 0.820(RL − RS)]t−2
               (0.012)
          σ̂ = 0.23%

Diagnostic tests
                           FAR (5, 55)        = 0.97[0.44]
                           FARCH (4, 52) = 0.29[0.89]
                           χ2normality (2)    = 0.82[0.66]
                           FHETx2 (12, 47) = 0.65[0.79]
                           FHETxi xj (24, 35) = 0.59[0.91]
                           FRESET (1, 59) = 0.16[0.69]

Note: The sample is 1980(4)–1997(2), quarterly data.

rate in aggregated real broad (M 3) money holdings, ∆(m − p)t , over the ori-
ginal sample period 1980(4)–1997(2). We condition on the estimated long-run
real money demand relationship (8.7) in Coenen and Vega (2001):
             (m − p)t = 1.14yt − 1.462∆pan − 0.820(RL − RS)t ,               (8.7)
where (m − p)t denotes (log of) real M 3 money holdings, yt is (log of) real
GDP, RSt is the short interest rate, RLt is the long interest rate, and ∆pant
denotes the annualised quarterly change in the GDP deﬂator.2
   The money demand relationship for the Euro area appears to be fairly well
speciﬁed with stable parameters as indicated by the plot of recursive residuals
and Chow tests in Figure 8.1. The question is: can this model be turned into
a model of inﬂation by inversion?

8.3.2     Inversion may lead to forecast failure
Assuming that the monetary authorities can control the stock of money
balances in the economy, it would be appealing if one could obtain
a model of inﬂation from the established money demand relationship above.
We follow Hendry and Ericsson (1991) and invert the empirical money demand
relationship in Table 8.1 to a model for quarterly inﬂation ∆pt . Since the model
                    2 The Euro-area data are seasonally adjusted.
8.3 Monetary analysis of Euro-area data                                               153


                                   Res1Step    1.00
 0.0050
                                               0.75      1up Chow statistics
 0.0025                                                  1%
 0.0000                                        0.50
–0.0025                                        0.25
–0.0050                                        0.00
     1985             1990         1995           1985           1990          1995

   1.00                                        1.00
   0.75      Ndn Chow statistics                         Nup Chow statistics
                                               0.75
             1%                                          1%
   0.50
                                               0.50
   0.25
                                               0.25

     1985             1990         1995          1985            1990          1995

            Figure 8.1. Estimation of money demand in the Euro area,
               1985(4)–1997(2)—recursive residuals and Chow tests


in Table 8.1 explains quarterly changes in real money holdings, we can simply
move ∆mt to the right-hand side of the equation and re-estimate the rela-
tionship over the selected period 1980(1)–1992(4), saving 20 observations for
post-sample forecasts.
    Recalling the empirical ﬁndings of Hendry and Ericsson (1991) and the fact
that we started out with a money demand relationship with stable parameters
over this period, one might expect to see a badly speciﬁed inﬂation relationship
with massive evidence of model mis-speciﬁcation including clear evidence of
parameter non-constancy—at least enough to indicate that there is little to
learn about the inﬂation process from this relationship.
    The results in Table 8.2 are surprising: it turns out that the inverted rela-
tionship is fairly stable over the selected sample period as well, and it is well
speciﬁed according to the tests reported in the table. Figure 8.2 shows that
the inﬂation model has stable parameters and, except in one quarter (1987(2)),
recursive Chow tests indicate that the model is reasonably constant. So, the
non-invertibility of the money demand relationship reported in Hendry and
Ericsson (1991) does not seem to apply for the Euro area in this period. The
model has signiﬁcantly positive eﬀects on inﬂation from real money growth
and from changes in output growth, ∆∆yt . Also, lagged changes in long-term
interest rates have a positive eﬀect on inﬂation, while changes in short interest
rates have a negative impact.
    The picture changes completely when we test the model outside the selected
sample: Figure 8.3 shows one-step forecasts from this model over the period
from 1993(1) to 1998(4). The model seems to provide a textbook illustration of
forecast failure.3 The forecast failure is caused by parameter instability which

                     3 See Clements and Hendry (1998) and Chapter 11.
154                                                              Money and inﬂation

                                 Table 8.2
 Inverted model for ∆pt in the Euro area based on Coenen and Vega (2001)

       t = 0.96 + 0.46∆mt + 0.003 ∆∆yt − 0.17 ∆RSt + ∆RSt−1
      ∆p
           (0.059) (0.074)     (0.031)      (0.060)       2
                                   ∆pant + ∆pant−1
            + 0.30∆RLt−1 + 0.46                     + 0.004 ∆dum86t
              (0.073)      (0.039)        2          (0.002)
              + 0.17[(m − p) − 1.140y + 1.462∆pan + 0.820(RL − RS)]t−2
                 (0.011)
         σ̂ = 0.16%

Diagnostic tests
                            FAR(1−4) (4, 37) = 1.02[0.41]
                            FARCH(1−4) (4, 33) = 0.39[0.81]
                            χ2normality (2)    = 0.53[0.77]
                            FHETx2 (14, 26)    = 1.12[0.38]
                            FRESET (1, 40)     = 5.96[0.02]∗

Note: The sample is 1980(4)–1992(4), quarterly data.

                                             1.25
      0.002           Res1-step              1.00
                                                                        1up Chow statistics
                                             0.75
      0.000                                                             1%
                                             0.50
  –0.002                                     0.25

         1985            1990                  1985                 1990

        1.0                                  1.00
                       Ndn Chow statistics             Nup Chow statistics
        0.8                                  0.75      1%
                       1%
        0.6                                  0.50

                                             0.25
        0.4

         1985            1990                  1985                 1990

          Figure 8.2. Inverted money demand equation for the Euro area
              1985(4)–1992(4)—recursive residuals and Chow tests

takes the form of a structural break as the Euro-area inﬂation rate starts to fall
in the early 1990s. This is demonstrated by the plots of recursive residuals and
Chow tests in Figure 8.4 which are obtained when we re-estimate the model over
the entire sample until 1997(2). The sample evidence for the entire period thus
shows that while we ﬁnd a constant empirical relationship for money conditional
on prices, the inverse relationship is all but stable and we have established non-
invertibility. Hence, as pointed out in Hoover (1991), these results indicate that
8.4 Monetary analysis of Norwegian data                                                              155

  0.0200
                                                                                        Forecasts
  0.0175                                                                                Dp

  0.0150

  0.0125

  0.0100

  0.0075

  0.0050

             1992      1993       1994       1995          1996        1997       1998          1999

 Figure 8.3. Post-sample forecast failure when the inverted money demand
 equation for the Euro area is used to forecast inﬂation 1993(1) to 1998(4)


               Res1Step                                           1up Chow statistics
   0.0025                                            1.5
                                                                  1%
   0.0000                                            1.0
  –0.0025                                            0.5
  –0.0050
        1985          1990            1995            1985              1990             1995

                                                    1.00
      1.5
                                                    0.75
      1.0
                                                    0.50
      0.5       Ndn Chow statistics                 0.25                       Nup Chow statistics
                1%                                                             1%
        1985          1990            1995            1985              1990             1995

   Figure 8.4. Instabilities in the inverted money demand equation for the
         Euro area after 1993—recursive residuals and Chow tests

causality runs from prices to money rather than from money to prices also in
the case of the Euro area.


8.4         Monetary analysis of Norwegian data
8.4.1        Money demand in Norway—revised
             and extended data
The demand for broad money in Norway has previously been analysed by
Eitrheim (1998) using seasonally unadjusted data from 1969(1) to 1993(4).
In that study a cointegrating relationship for money was derived jointly with
156                                                               Money and inﬂation

cointegrating relationships for wages and consumer prices, and the analysis
showed that in the long run, real money balances adjust dynamically to
absorb shocks in the real GDP level and the relative price of ﬁnancial assets
(the yield spread) and the relative price of goods (the own real interest rate).
In the short run, money balances were also aﬀected by shocks in the exchange
rate and private wealth. Evidence for prices being weakly exogenous was also
found with respect to the parameters in the money demand relationship, which
by implication support the interpretation that it is money holdings that adjust
endogenously to changes in the forcing variables in the long run.
    In the empirical models in this section we condition on the long-run
cointegrating relationship for money balances found in Eitrheim (1998).
Assuming homogeneity of degree one in the price level, this relationship can be
formulated as:

            mt − pt = βy yt + βrbt (RBt − RTt ) + βrtd4p (RTt − ∆4 pt ),

where yt is (log of) real output (GDP), pt is the consumer price index, hence
∆4 pt is the annual rate of headline inﬂation, RBt is the yield on assets outside
money (government bonds with six years maturity), and RTt is the own interest
rate on money (the time deposits rate). The yield spread (RBt −RTt ) represents
the nominal opportunity cost of holding money relative to other ﬁnancial assets,
while the ‘own real interest rate’ (RTt − ∆4 pt ) can be interpreted as a measure
of the return on money relative to consumer goods.
    This long-run equation is grafted into a simpliﬁed equilibrium correction
model for quarterly money growth with only one lag, which means that (8.5)
can be written

       ∆mt = δ1 ∆mt−1 + γ0 ∆zt + γ1 ∆zt−1 + αm (mt−1 − β  zt−1 ) + εt ,
          εt ∼ i.i.d.(0, σ 2 ).                                                    (8.8)

   Note that since ∆4 mt = ∆mt + ∆3 mt−1 we arrive at a relationship for
annual money growth ∆4 mt by adding ∆3 mt−1 to both sides of (8.8). If the
coeﬃcient on ∆3 mt−1 is close to one, the annual representation is a simple
isomorphic transformation of a similar quarterly model.

    Re-estimating a money demand model for Norway Compared to
Eitrheim (1998), we report results for seven years of new observations. Also,
since then, Norwegian National Accounts data for the entire sample period have
been substantially revised in order to comply with new international standards,
and there has been a major revision in the Monetary Statistics data for broad
money holdings.4 One of the changes in the new deﬁnition of broad money is

  4 Concepts and deﬁnitions used by Norges Bank to compile Monetary Statistics are now

in line with the guidelines in the Monetary and Financial Statistics Manual (MFSM) of the
International Monetary Fund (IMF).
8.4 Monetary analysis of Norwegian data                                       157


                                                           D4m2_Revised
      0.150                                                D4m2_OldQNA


      0.125


      0.100


      0.075


      0.050


      0.025

         1965    1970     1975    1980     1985    1990    1995     2000

      Figure 8.5. Money demand (1969(1)–2001(1))—revised (solid line)
      and old (dotted line) observations of the percentage growth in M 2
                              over four quarters

that unused overdraft facilities and building loans are now excluded. Figure 8.5
shows the revised data along with the data which were analysed in Eitrheim
(1998). Despite the exclusion of unused overdraft facilities and building loans,
it does not seem that the pattern of annual growth rates in the monetary
aggregate has been signiﬁcantly altered.
    Table 8.3 shows the results from re-estimating the model speciﬁcation in
Eitrheim (1998). Despite the revisions of the data for the money and output
variables, the old relationship seems to hold up reasonably well on the extended
data set. In the short run, money growth is inﬂuenced by shocks to the exchange
rate (et is (log of) the nominal exchange rate of Norwegian Kroner) and by
changes in nominal household wealth (wht ). We have also included a dummy
variable for the release of tax-exempted savings deposits, M 2D914 = 1 in
1991(4) else 0, as well as a variable, S4t ∗ ∆4 RTt , which is intended to pick up
the eﬀect from changes in accrued interest earnings, which are capitalised at
the end of each year.
    Some of the coeﬃcients lose their previous signiﬁcance, but the re-estimated
model passes all mis-speciﬁcation tests reported in Table 8.3. The estimated σ̂ is
1.13% compared with 0.93% in Eitrheim (1998), so the data ﬁt has deteriorated.
From recursive plots (not reported here) of the parameter estimates of the
short-run eﬀect from shocks in exchange rates (∆∆et ), it is possible to trace
instabilities which may be linked to changes occurring in the exchange rate
system in Norway after 1997. After leaving a ﬁxed exchange rate system in 1992
in favour of a managed ﬂoat, the Norwegian Krone has seen several episodes
with more or less free ﬂoat following speculative attacks, notably in 1997 and
1998. It is not surprising if the currency substitution eﬀect on money holdings
did change on those occasions.
158                                                                  Money and inﬂation

                                 Table 8.3
 Re-estimating the money demand model for Norway in Eitrheim (1998) on
        revised and extended data (seven years of new observations)

  
  ∆ 4 mt = −0.0449(∆∆et−1 + ∆∆et−3 ) + 0.1383 ∆wht−2 + 1.0825 ∆3 mt−1
           (0.0446)                   (0.0393)        (0.1296)
             + 0.0257 (∆mt−1 + ∆mt−3 ) − 0.3107 (∆mt−2 − ∆mt−4 )
              (0.1701)                 (0.0769)
             − 0.1026 (mt−1 − pt−1 − 0.8yt−1 + 2.25(RB − RM)t−1
             (0.0197)
             − (RM − ∆4 p)t−1 ) + 0.0278 M 2D914t + 0.1505 S4 ∗ ∆4 RTt
                                 (0.0120)          (0.1623)
            + 0.0186 (S1t + S3t ) − 0.3756
               (0.0037)           (0.0718)
       σ̂ = 1.13%

Diagnostic tests
                           FAR(1−5) (5, 114) = 1.0610[0.3858]
                           FARCH(1−4) (4, 111) = 1.7918[0.1355]
                           χ2normality (2)     = 0.5735[0.7507]
                           FHETx2 (16, 102)    = 1.4379[0.1391]
                           FRESET (1, 118)     = 0.6260[0.4304]

Note: The sample is 1969(1)–2001(1), quarterly data.
Long run: mt = pt + 0.8yt − 2.25(RB − RM)t + (RM − ∆4 p)t + ecmmdt .


    An improved model for the period 1969(1)–2001(1) It turns out
to be possible to achieve a slight improvement on the re-estimated model in
Table 8.3. Table 8.4 shows a model where the short-run dynamics are simpli-
ﬁed. We have introduced a step dummy Sdum97Q1 to pick up a permanent
shift as of 1997(1) in the coeﬃcient for exchange rate shocks. Finally, based on
experiments with single equation models with unrestricted variables in levels,
we have simpliﬁed the long-run relationship for money omitting the real inter-
est rate (RM − ∆4 p)t , but keeping the yield spread (RB − RM)t . Insigniﬁcant
parameters on the revised and extended dataset are omitted from the model.
The estimated σ̂ for the improved model is 1.09%. We have also compared
parameter constancy forecast tests for the re-estimated and improved money
demand models over the period 1995(1) to 2001(1).5 The tests for forecast
stability in the re-estimated model are, χ2forecast (25) = 63.211[0.0000]∗∗ and
Fchow (25, 94) = 1.9332[0.0123]∗ while the corresponding values in the improved

  5 We started the forecast comparison in 1995(1) since the old national accounts data end

in 1994(4). The sample period in Eitrheim (1998) ends in 1994(4), but the qualitative results
would be the same if we start the forecasting exercise in 1994(1).
8.4 Monetary analysis of Norwegian data                                               159

                                Table 8.4
        Improved model for annual money growth, ∆4 m, for Norway

    
    ∆ 4 mt = −0.0800(∆∆et−1 + ∆∆et−3 )
             (0.0489)
              + 0.1493 Sdum97Q1(∆∆et−1 + ∆∆et−3 ) + 0.1145 ∆wht−2
                (0.0886)                           (0.0367)
              + 1.1134 ∆3 mt−1 − 0.3235 (∆mt−2 − ∆mt−4 )
                 (0.0394)      (0.0464)
              −0.1084 (mt−1 − pt−1 − 0.9yt−1 + 2.5(RBt−1 − RMt−1 ))
              (0.0186)
              + 0.0300 M 2D914t + 0.0175 (S1t + S3t ) − 0.5272
                 (0.0111)          (0.0021)           (0.0898)
         σ̂ = 1.09%

Diagnostic tests
                         FAR(1−5) (5, 115) = 0.7026[0.6226]
                         FARCH(1−4) (4, 112) = 0.5574[0.6940]
                         χ2 normality (2)    = 2.4736[0.2903]
                         FHETx2 (14, 105)    = 1.6997[0.0664]
                         FRESET (1, 119)     = 0.2022[0.6538]

Note: The sample is 1969(1)–2001(1), quarterly data.
Long run: mt = pt + 0.9yt − 2.5(RB − RM)t + ecmmdt .

model are χ2forecast (25) = 36.293[0.0673] and Fchow (25, 95) = 1.3452[0.1547].6
Hence, the parameter forecast stability has been improved in the revised money
demand model in Table 8.4. In Sections 8.7.3 and 8.7.4, we use the equilibrium
correction term, ecmmdt , of Table 8.4 to test for neglected monetary eﬀects in
models explaining inﬂation in Norway.


8.4.2     Monetary eﬀects in the inﬂation equation?
We ﬁnd no eﬀect of inﬂation in the money demand equations for Norway.
Hence it does not make sense to interpret the money demand functions as
inverted inﬂation equations. We have, however, experimented with a model
where we consider money in real terms (mt − pt ), the real interest rate on
money and the yield spread as potential explanatory variables for inﬂation.
These are the variables that enter the cointegrating relationship of the money
demand equation in Eitrheim (1998), cf. Table 8.3.
   This gives us a model which has several aspects in common with the inverted
money demand relationship for the Euro area in Section 8.3.2. In addition to
     6 Test statistics marked ∗ and ∗∗ indicate signiﬁcance at the 5% and 1% level.
160                                                         Money and inﬂation

                                  Table 8.5
        The MdInv model of inﬂation, including variables (in levels) from
                     the money demand relationship


∆ 4 pt = 1.1021 ∆3 pt−1 + 0.2211 ∆pt−2 + 0.0436 ∆pet
        (0.0350)         (0.0696)       (0.0109)
           + 0.0587 ∆yt−2 + 0.0272 ∆wht−3 −0.0208 (mt−1 − pt−1 )
              (0.0115)       (0.0170)       (0.0103)
           + 0.0155 yt−1 − 0.0099 (RTt−1 − ∆4 pt−1 ) − 0.0262 (RBt−1 − RMt−1 )
              (0.0097)   (0.0202)                    (0.0422)
           − 0.0120 P dumt − 0.0586
            (0.0010)       (0.0577)
      σ̂ = 0.45%

Diagnostics tests
                       FAR(1−5) (5, 113) = 1.6482[0.1530]
                       FARCH(1−4) (4, 110) = 1.2934[0.2771]
                       χ2 normality (2)    = 7.3731[0.0251]∗
                       FHETx2 (20, 97)     = 2.6762[0.0007]∗∗
                       FHETxi xj (65, 52)  = 1.5171[0.0606]
                       FRESET (1, 117)     = 7.6875[0.0065]∗∗

Note: The sample is 1969(1)–2001(1), quarterly data.

the monetary variables we have included short-run eﬀects of changes in energy
prices ∆pet , changes in output, and a composite dummy variable P dumt which
inter alia captures the eﬀect of income policies in the late 1970s and 1980s. Even
though the model ﬁts the data reasonably well with an estimated standard error
of σ̂ = 0.45%, the model does nonetheless fail in several of the mis-speciﬁcation
tests, reported in Table 8.5. The model captures the persistence in inﬂation
through the included lags in price growth, and the eﬀects from ∆pet and P dumt
are reasonable, but the eﬀects from the included monetary variables are more
diﬃcult to interpret. First, the results in Table 8.5 indicate that the eﬀect
on inﬂation of the real interest rate is insigniﬁcant. Assuming that the real
interest rate is stationary, it is the other monetary variables from the long-run
cointegrating relationship (i.e. the money demand equation in Eitrheim (1998))
that represent an excess money eﬀect on inﬂation. A priori one would expect
a positive rather than a negative eﬀect from these variables on inﬂation.
    Second, as will be clear when we present the forecasting properties of this
relationship along with other inﬂation models for the Norwegian economy, that
this model—which we have dubbed MdInv—suﬀers from severe parameter non-
constancies in the early 1980s and around 1994. This is a likely explanation why
the model—when estimated on data up to 1990(4)—badly mispredicts inﬂation
8.5 Inﬂation models for the Euro area                                                    161

over the period 1991(1)–2000(4) (see Section 8.7.6). Thus, we conclude as we
did for the Euro-area data: if we try to construct an inverted money demand
relationship for Norway, forming an inﬂation equation based on the information
set used in the money demand models in the preceding section, we ﬁnd evidence
of severe parameter non-constancy and resulting forecast failure.



8.5       Inﬂation models for the Euro area
In Section 8.3 we found that an inverted money demand function did not pro-
vide a sound basis for explaining inﬂation in the Euro area. Still, there may be
a case for models of inﬂation that conceive of inﬂation primarily as a monetary
phenomenon. In this section, we compare and evaluate four inﬂation models
which have been used to analyse data for the Euro area. These include the
P∗ -model, which relates the steady-state of the price level to the quantity theory
of money, a hybrid New Keynesian Phillips curve model (NPCM) of inﬂation
(see Chapter 7) and two reduced form inﬂation equations: one derived from the
dynamic version of the Incomplete Competition Model (ICM) we developed in
Chapters 5 and 6, and the other from the wage–price block of the AWM of the
European Central Bank.
    Many researchers addressing inﬂation in the Euro area have opted for
approaches like the P∗ -model or the NPCM, which either amounts to modelling
inﬂation as a single equation or as part of very small systems. By contrast, the
price block of the AWM, as described in Fagan et al. (2001), is deﬁned within
a full-blown macroeconometric model for the Euro area, even though the equa-
tions for wage growth and inﬂation are estimated by single equation methods.
Moreover, the AWM is providing the most commonly used data set for the
Euro area, and hence it is an obvious benchmark and point of reference for the
comparison.7
    In the following we shall give an outline of the wage–price block of the AWM
(Section 8.5.1), brief reminders of the ICM (Section 8.5.2) and the NPCM
(Section 8.5.3) which are described elsewhere in this book and, ﬁnally, a more
detailed presentation of the P∗ -model (Section 8.5.4).

  7 The aggregated data underlying AWM are constructed by using a set of ﬁxed purchasing

power parity (PPP) exchange rates between the national currencies, calculated for the year
1995, to convert all series to a common currency (i.e. Euro). An alternative aggregation
method has been suggested by Beyer et al. (2001) (see also Beyer et al. (2000)). They
argue that aggregation across individual countries is problematic because of past exchange
rate changes. Hence, a more appropriate method, which aggregates exactly when exchange
rates are ﬁxed, consists in aggregating weighted within-country growth rates to obtain euro-
zone growth rates and cumulating this euro-zone growth rate to obtain aggregated levels.
The aggregate of the implicit deﬂator price index coincides with the implicit deﬂator obtained
from the aggregated nominal and real data.
162                                                          Money and inﬂation

8.5.1     The wage–price block of the Area Wide Model
The unique feature of the AWM is that it treats the Euro area as a single econ-
omy. Since the Euro was introduced only on 1 January 1999 and the information
set underlying the estimation of the model—as documented in Fagan et al.
(2001)—is a constructed data set covering the period 1970(1)–1998(4), the
counterfactual nature of this modelling exercise is evident.
     The AWM is used for forecasting purposes and the model has been speciﬁed
to ensure that a set of structural economic relationships holds in the long run.
It is constrained to be consistent with the neoclassical steady-state in which the
long-run output is determined via a production function by exogenous techno-
logical progress and the available factors of production, where the growth rate
of labour force is exogenous. Money is neutral in the long run and the model’s
long-run properties is further pinned down by an exogenous NAIRU.
     Our focus is on the modelling of inﬂation, which is modelled jointly with
wage growth in the AWM. Whereas the long-run equilibria are largely deter-
mined by a priori considerations through the output production function and
the exogenous growth rates in factor productivity, the labour force and the
NAIRU, the short run is modelled empirically as (single equation) equilibrium-
correction models. The empirical models are re-estimated in Jansen (2004) on
an extended data set (1970(1)–2000(4)) and the results do not deviate much
from those in Fagan et al. (2001); see appendix B in Jansen (2004).
     Wages are modelled as a Phillips curve in levels, with wage growth depend-
ing on the change in productivity, current, and lagged inﬂation—in terms of
the consumption deﬂator pt —and the deviation of the unemployment ut from
its NAIRU level ut , that is, (ut − ūt ) deﬁnes the equilibrium-correction term,
ecmwtAWM . Inﬂation and productivity growth enter with unit coeﬃcients, so the
equation is expressed with the change in the wage share ∆wst , which equals
the change in real unit labour cost, ∆ulct − ∆pt , as left-hand side variable.
ulct is nominal unit labour cost and, as before, natural logarithms of variables
are denoted by lower-case symbols.
     The output price or GDP at factor costs, qt , is a function of trend unit
labour costs, ulct , both in the long run (levels) and the short run (changes).
The equilibrium-correction term equals (qt −(ulct −(1−β))), where (1−β) is the
elasticity of labour in the output production function, thus linking the long-run
real equilibrium to the theoretical steady-state. The markup is also inﬂuenced
by an output gap and import price inﬂation (∆pit ) has short-run eﬀects on
∆qt . Finally, consumer price inﬂation (i.e. the consumption deﬂator) ∆pt is
determined by the GDP deﬂator at market prices, and import prices, both in
the short run and in the long run (with estimated weights equal to 0.94 and 0.06,
respectively). There is also a small eﬀect of world market raw materials prices
in this equation. Noting that the GDP deﬂator at market prices by deﬁnition
equals GDP at factor prices corrected for the rate of indirect taxation (qt + tt ),
we ﬁnd by substituting for qt that the equilibrium correction term for ∆pt can
8.5 Inﬂation models for the Euro area                                        163

be written as
          ecmpAWM
              t   = pt + 0.59 · 0.94 − 0.94ulct − 0.06pit − 0.94tt .        (8.9)

8.5.2     The Incomplete Competition Model
The dynamic version of the ICM is presented in Chapters 5 and 6 and an
example of empirical estimation is discussed in greater detail within the frame-
work of a small econometric model for Norway in Chapter 9 (Section 9.2).
We shall therefore be brief in the outline of the ICM for the Euro area; details
are given in Jansen (2004).
    The econometric approach follows a stepwise procedure, where the outcome
can be seen as a product of interpretation and formal testing: we ﬁrst consider
an information set of wages, prices, and an appropriate selection of conditioning
variables like the output gap, unemployment, productivity, import prices, etc.
It turns out that the data rejects the long-run restrictions from theory in this
case. Only when we model the long-run steady-state equations with prices and
unit labour costs as the endogenous variables do we ﬁnd empirical support
for the theory restrictions. The ﬁnal outcome is steady-state equations of the
following restricted form:
                        ulct = pt − ut ,                                 (8.10)
                          pt = (1 − φ)ulct + φpit + t3t ,                 (8.11)
where t3t is indirect taxes. We note that only two parameters,  and φ, enter
unrestrictedly in (8.10) and (8.11).

8.5.3     The New Keynesian Phillips Curve Model
Recall the deﬁnition in Chapter 7: the NPCM states that inﬂation is explained
by expected inﬂation one period ahead E(∆pt+1 | It ), and excess demand or
marginal costs xt (e.g. the output gap, the unemployment rate, or the wage
share in logs):
                        ∆pt = bp1 E(∆pt+1 | It ) + bp2 xt .            (8.12)
   The ‘hybrid’ NPCM, which heuristically assumes the existence of both
forward- and backward-looking agents and obtains if a subset of ﬁrms has
a backward-looking rule to set prices, nests (8.12) as a special case. This
amounts to the speciﬁcation
                 ∆pt = bfp1 E(∆pt+1 | It ) + bbp1 ∆pt−1 + bp2 xt .        (8.13)
    Our analysis in Chapter 7 leads to a rejection of the NPCM as an empir-
ical model of inﬂation for the Euro area and we conclude that the profession
should not accept the NPCM too readily. Still, the model maintains a dominant
position in modern monetary economics and it is widely used in analyses of
Euro-area data.
164                                                              Money and inﬂation

    With reference to the original contributions by Galı́ and Gertler (1999)
and Galı́ et al. (2001), Smets and Wouters (2003) estimate a New Keynesian
Phillips curve as part of a stochastic dynamic general equilibrium model for the
Euro area. The inﬂation equation is estimated as part of a simultaneous system
with nine endogenous variables in a Bayesian framework using Markov-chain
Monte Carlo methods, and the authors ﬁnd parameter estimates which are
in line with Galı́ et al. (2001) for a hybrid version of the New Keynesian
Phillips curve (with weights 0.72 and 0.28 on forward and lagged inﬂation,
respectively).
    Also, Coenen and Wieland (2002) investigate whether the observed inﬂation
dynamics in the Euro area (as well as in the United States and Japan) are
consistent with microfoundations in the form of staggered nominal contracts
and rational expectations. On Euro-area data, they ﬁnd that the ﬁxed period
staggered contract model of Taylor outperforms the New Keynesian Phillips
curve speciﬁcation based on Calvo-style random duration contracts and they
claim support for the hypothesis of rational expectations.8


8.5.4       The P∗ -model of inﬂation
In the P∗ -model (Hallman et al. 1991) the long-run equilibrium price level
is deﬁned as the price level that would result with the current money stock,
mt , provided that output was at its potential (equilibrium level), yt∗ , and that
velocity, vt = pt + yt − mt , was at its equilibrium level vt∗ :

                                 p∗t ≡ mt + vt∗ − yt∗ .                           (8.14)

      The postulated inﬂation model is given by

               ∆pt = E(∆pt | It−1 ) + αp (pt−1 − p∗t−1 ) + βz zt + εt ,           (8.15)

where the main explanatory factors behind inﬂation are inﬂation expectations,
E(∆pt | It−1 ), the price gap, (pt−1 − p∗t−1 ), and other variables denoted zt .
Note that if we replace the price gap in (8.15) with the output gap, we obtain
the NPCM (8.12) discussed in the previous section with the expectations term
backdated one period.
    In order to calculate the price gap one needs to approximate the two equi-
libria for output, yt∗ , and velocity, vt∗ , respectively. The price gap, (pt − p∗t ), is
obtained by subtracting pt from both sides of (8.14) and applying the identity
vt ≡ pt + yt − mt . It follows that the price gap is decomposed into the velocity

  8 Coenen and Wieland adopt a system approach, namely an indirect inference method

due to Smith (1993), which amounts to ﬁtting a constrained VAR in inﬂation, the output
gap and real wages, using the Kalman ﬁlter to estimate the structural parameters such
that the correlation structure matches those of an unconstrained VAR in inﬂation and the
output gap.
8.5 Inﬂation models for the Euro area                                           165

gap, (vt − vt∗ ), minus the output gap, (yt − yt∗ ):
                        (pt − p∗t ) = (vt − vt∗ ) − (yt − yt∗ ).             (8.16)
The P∗ -model can alternatively be expressed in terms of the real money gap,
rmt − rm∗t , where rm∗t = mt − p∗t . The inverse relationship holds trivially
between the real money gap and price gap, that is, (rmt − rm∗t ) = −(pt − p∗ ),
and thus the P∗ -model predicts that there is a direct eﬀect on inﬂation from the
lagged real money gap (rm − rm∗ )t−1 . Moreover, in the P∗ -model, ﬂuctuations
in the price level around its equilibrium, p∗t , are primarily driven by ﬂuctuations
in velocity and output.
    Another deﬁning characteristic of recent studies adopting the P∗ -model is
that inﬂation is assumed to be inﬂuenced by ∆4 pgapt , which is the change
in the diﬀerence between the actual inﬂation ∆4 pt and a reference or target
path ∆4 p̃t , and also by an analogous variable for money growth, ∆4 mgapt .
The reference path for money growth ∆4 m        t is calculated in a similar way as
suggested in Gerlach and Svensson (2003), referred to below. If we know the
inﬂation target (or reference path for inﬂation in the case when no explicit
target exists), we can calculate the corresponding reference path for money
growth as follows (see Boﬁnger 2000):
                         ∆4 m̃t = ∆4 p̃t + ∆4 yt∗ − ∆4 vt∗ .                 (8.17)
    In our empirical estimates of the P∗ -model below we have simply let the
reference value for inﬂation, ∆4 p̃t , vary with the actual level of smoothed inﬂa-
tion and ∆4 pgapt is deﬁned accordingly. The heuristic interpretation is that
the monetary authorities changed the reference path according to the actual
behaviour, adapting to the many shocks to inﬂation in this period and we
calculate ∆4 pt with a Hodrick–Prescott (HP) ﬁlter9 with a large value of the
parameter which penalises non-smoothness, that is, we set λ = 6400 to avoid
volatility in ∆4 p̃t . Likewise, we apply the HP-ﬁlter to derive measures for the
equilibrium paths for output, yt∗ , and velocity, vt∗ , and in doing so, we use
λ = 1600 to smooth output series yt∗ and λ = 400 to smooth velocity vt∗ .
∆4 m̃t follows from (8.17), as does ∆4 mgapt .
    Gerlach and Svensson (2003) estimate a variant of the P∗ -model (8.15), and
they ﬁnd empirical support for the P∗ -model on aggregated data for the Euro
area. In this study Gerlach and Svensson introduce and estimate a measure for
the inﬂation target in the Euro area as a gradual adjustment to the (implicit)
inﬂation target of the Bundesbank, and they interpret the gradual adjustment
as a way of capturing a monetary policy convergence process in the Euro area
throughout their estimation period (1980(1)–2001(2)).
    Gerlach and Svensson (2003) ﬁnd a signiﬁcant eﬀect of the energy com-
ponent of consumer price index on inﬂation measured by the total consumer
price index, and when they include the output gap in (8.15), in addition to the
                         9 See Hodrick and Prescott (1997).
166                                                               Money and inﬂation

real money gap, both gaps come out equally signiﬁcant, indicating that each is
an important determinant of future price changes. By contrast, they ﬁnd that
the Eurosystem’s money-growth indicator, deﬁned as the gap between current
M 3 growth and its reference value, has little predictive power beyond that of
the output gap and the real money gap.
    Trecroci and Vega (2002) re-estimate the AWM equation for the GDP
deﬂator at factor prices for the period 1980(4)–1997(4), and they ﬁnd that
(an earlier version of) the Gerlach and Svensson P∗ equation (without the
output gap) outperforms the AWM price equation (for qt ) in out of sample fore-
casts for the period 1992(1)–1997(4) at horizons ranging from 1 to 8 periods
ahead.10 Likewise, Nicoletti Altimari (2001) ﬁnds support for the idea that
monetary aggregates contain substantial information about future price devel-
opments in the Euro area and that the forecasting performance of models with
money-based indicators improves as the forecast horizon is broadened.


8.6      Empirical evidence from Euro-area data
In this section, we present estimated reduced form versions of the AWM and
ICM inﬂation equations in order to evaluate the models and to compare fore-
casts based on these equations with forecasts from the inﬂation models referred
to in Section 8.5, that is, the P∗ -model and the NPCM. The models are estim-
ated on a common sample covering 1972(4)–2000(3), and they are presented
in turn below, whereas data sources and variable deﬁnitions are found in
Jansen (2004).

8.6.1      The reduced form AWM inﬂation equation
We establish the reduced form inﬂation equation from the AWM by combining
the wage and price equations of the AWM (see appendix B of Jansen 2004).
The reduced form of the equation is modelled from general to speciﬁc: we start
out with a fairly general information set which includes the variables of the
wage and price block of the AWM: three lags of inﬂation, ∆pt , as well as of
changes in trend unit labour costs, ∆ulct , and two lags of the changes in: the
wage share, ∆wst , the world commodity price index, ∆prawt ; the GDP deﬂator
at factor prices, ∆qt , unemployment, ∆ut , productivity, ∆at , import prices,
∆pit , and indirect taxes, ∆t3t . The output gap is included with lagged level
(gapt−1 ) and change (∆gapt−1 ). The dummies from the wage and price block of
AWM, ∆I82.1, ∆I82.1, I92.4, I77.4 I78.1, I81.1, and ∆I84.2,11 are included
and a set of centred seasonal dummies (to mop up remaining seasonality in
 10 Trecroci and Vega estimate the P∗ -model within a small VAR, which previously has been

analysed in Coenen and Vega (2001).
 11 The ﬁrst three are signiﬁcant in all estimated equations reported below, the last two

which originate in the AWM wage equation are always insigniﬁcant.
8.6 Empirical evidence from Euro-area data                                   167

the data, if any). Finally, we include into the reduced form information set
two equilibrium-correction terms from the structural price and wage equations,
ecmpAWM
     t     and ecmwtAWM , deﬁned in Section 8.5.1.
   The parsimonious reduced form AWM inﬂation equation becomes:

          t = 0.077 + 0.19 ∆pt−3 + 0.08 ∆ulct−1 + 0.34 ∆qt−1
          ∆p
              (0.017) (0.06)         (0.05)        (0.08)
               − 0.07 ∆at−2 + 0.07 ∆pit−1 + 0.82 ∆t3t−1
                 (0.04)       (0.01)        (0.28)
                   − 0.051 ecmpAWM t−1 −    0.01 ecmwt−1 AWM
                                                              + dummies
                        (0.011)           (0.0015)
             σ = 0.00188                                                  (8.18)
                                   1972(4)–2000(3)
          FAR(1−5) (5, 94) = 0.41[0.84] FARCH(1−4) (4, 91) = 0.43[0.78]
          χ2 normality (2) = 1.01[0.60]    FHETx2 (23, 75) = 1.35[0.17]
          FRESET (1, 98) = 0.06[0.80]

    All restrictions imposed on the general model leading to (8.18), are accepted
by the data, both sequentially and when tested together. We note that the
eﬀects of the explanatory variables are much in line with the structural
equations reported in appendix B in Jansen (2004) and that both equilibrium-
correction terms are highly signiﬁcant. If we deduct the respective means of
the equilibrium-correction terms on the right-hand side, the constant term
reduces to 0.5%, which is signiﬁcantly diﬀerent from zero with a t-value of
5.36. The ﬁt is poorer than for the structural inﬂation equation, which is
mainly due to the exclusion of contemporary variables in the reduced form.
If we include contemporary values of ∆pit , ∆at , and ∆praw
                                                         t , the standard error
of the equation improves by 30% and a value close to the estimated σ of the
inﬂation equation in appendix B in Jansen (2004) obtains. Figure 8.6 contains
recursive estimates of the model’s coeﬃcients. We note that there is a slight
instability in the adjustment speed for the two equilibrium terms in the period
1994–96.


8.6.2     The reduced form ICM inﬂation equation
We derive a reduced form inﬂation equation for the ICM much in the same vein
as for the AWM. The information set for this model is given by all variables
included in the estimation of the price–unit labour cost system in Jansen (2004).
The information set diﬀers from that of the AWM on the following points: lags
of changes in unit labour costs, ∆ulct , are used instead of lags of changes
in trend unit labour costs; the changes in the wage share, ∆wst , the world
commodity price index, ∆praw  t , and the GDP deﬂator at factor prices, ∆qt ,
are not included; and the equilibrium-correction terms are those of the ICM,
168                                                                      Money and inﬂation


 0.4            Dp_3 × +/–2SE                Dult_1 × +/–2SE              DwMpMpr_1 × +/–2SE
                                   0.2                            –0.1
 0.2                               0.1                            –0.2
                                   0.0                            –0.3
 0.0

         1990            2000             1990           2000               1990            2000

 0.6            Dq_1 × +/–2SE      0.1       Dpr_2 × +/–2SE      0.100     Dpb_1 × +/–2SE

 0.4                               0.0                           0.075

                                  –0.1                           0.050
 0.2
                                  –0.2                           0.025
         1990            2000             1990           2000               1990            2000

           Dt3a_1 × +/–2SE        0.00    Ecmp_1 × +/–2SE       –0.005      Ecmw_1 × +/–2SE
   2
                                 –0.05                          –0.010
   1

   0                             –0.10                          –0.015

         1990            2000             1990           2000               1990            2000

  Figure 8.6. Recursive estimates for the coeﬃcients of the (reduced form)
                          AWM inﬂation equation

ecmpICM
     t    and ecmulcICMt  , which are derived from the estimated steady-state
equations (cf. (8.10) and (8.11)).
                                ulc = p − 0.11 u
                                          (0.02)
                                  p = 0.91ulc + 0.09 pi + t3.
                                                 (0.03)
   After imposing valid restrictions on the general model, the ﬁnal reduced
form ICM inﬂation equation becomes:
          t = 0.014 + 0.41 ∆pt−1 + 0.16 ∆pt−2 + 0.03 ∆pit−1
          ∆p
              (0.006) (0.10)        (0.08)      (0.01)
               + 0.06 gapt−1 + 0.14 ∆gapt−1
                 (0.02)       (0.04)
                    − 0.078 ecmpICMt−1 − 0.031 ecmulct−1 + dummies
                                                        ICM
                       (0.016)           (0.007)
             σ = 0.00205                                                                    (8.19)
                                  1972(4)–2000(3)
         FAR(1−5) (5, 96) = 0.62[0.68] FARCH(1−4) (4, 93) = 0.18[0.95]
         χ2 normality (2) = 0.16[0.92]    FHETx2 (20, 80) = 0.64[0.87]
         FRESET (1, 100) = 2.98[0.09]

   We observe that the reduced form inﬂation equation of the ICM is vari-
ance encompassed by the corresponding AWM equation. Again, all restriction
8.6 Empirical evidence from Euro-area data                                                     169

                     Dpb × ± 2SE                                                 Gap_1 × ± 2SE
 0.10                                             0.15

                                                  0.10
 0.08
                                                  0.05
 0.06

         1985        1990          1995   2000           1985      1990       1995           2000


–0.05            EcmpICM_1 × ± 2SE               –0.02          EcmulcICM_1 × ± 2SE

–0.10
                                                 –0.04
–0.15


         1985        1990          1995   2000           1985      1990       1995           2000

                                                    2
 0.20            D4p_1 × ± 2SE                                             DDt3a_1 × ± 2SE

 0.15                                               1

 0.10
                                                    0
         1985        1990          1995   2000           1985      1990       1995           2000

        Figure 8.7. Recursive coeﬃcient estimates of the reduced form ICM

imposed on the general model to obtain (8.19) are accepted by the data, both
sequentially and when tested together. The reduced form inﬂation equation
picks up the combined eﬀects from the price and the unit labour cost structural
equations, the latter is seen through the signiﬁcant eﬀects of ∆pt−1 , gapt−1 ,
and the equilibrium-correction term ecmulcICMt−1 in (8.19). Both equilibrium-
correction terms are highly signiﬁcant. If we deduct the respective means of
the equilibrium-correction terms on the right-hand side, the constant term
reduces to 0.6%, which is signiﬁcantly diﬀerent from zero with a t-value
of 4.68. Figure 8.7 contains recursive estimates of the coeﬃcients in (8.19).
We note that the speed of adjustment towards the steady-state for the two
equilibrium-correction terms is more stable than in the case of AWM.

8.6.3           The P∗ -model
The estimation of the P∗ -model in Section 8.5.4 requires additional data relative
to the AWM data set. We have used a data series for broad money (M 3)
obtained from Gerlach and Svensson (2003) and Coenen and Vega (2001),
which is shown in Figure 8.8.12 It also requires transforms of the original data:
Figures 8.9 and 8.10 show the price gap (p − p∗ )t and the real money gap
  12 The   series is extended with data from an internal ECB data series for M 3
(M.U2.M3B0.ST.SA) which matches the data of Gerlach and Svensson (2003) with two
exceptions, as is seen from Figure 8.8.
170                                                                     Money and inﬂation



        0.04



        0.03



        0.02



        0.01           Dm3_ECBdatabase
                       Dm3_Coenen–Vega/Gerlach–Svensson

               1970       1975     1980     1985     1990        1995      2000

    Figure 8.8. The M 3 data series plotted against the shorter M 3 series
 obtained from Gerlach and Svensson (2003), which in turn is based on data
            from Coenen and Vega (2001). Quarterly growth rate


            0



           -1                                                                     Py
                                                                                  Pystar
                1970       1975     1980      1985        1990      1995      2000

        0.025
                                                                                  Pygap

        0.000


       -0.025

                1970       1975     1980      1985        1990      1995      2000

 Figure 8.9. The upper graphs show the GDP deﬂator and the equilibrium
price level (p∗ ), whereas the lower graph is their diﬀerence, that is, the price
                           gap, used in the P∗ -model

(rm−rm∗ )t along with the corresponding level series. As noted in Section 8.5.4
we have applied HP-ﬁlters to derive measures for yt∗ and vt∗ .13 Then p∗t can be
calculated from (8.14), as well as the price and real money gaps.
    The reference path for inﬂation is trend inﬂation from a smoothed HP ﬁlter,
as described in Section 8.5.4. In Figure 8.11 we have plotted trend inﬂation
together with an alternative which is the same series with the reference path
 13 We use λ = 1600 to smooth the output series y ∗ and λ = 400 to smooth the velocity v ∗ .
                                                 t                                      t
8.6 Empirical evidence from Euro-area data                                        171

         0.25         Rm
                      Rmstar

         0.00


        –0.25
            1980               1985         1990          1995          2000

         0.01         Rmgap

         0.00

        –0.01


           1980                1985         1990          1995          2000

 Figure 8.10. The upper graphs show real money and the equilibrium real
 money, whereas the lower graph is their diﬀerence, that is, the real money
                       gap, used in the P∗ -model

                                                                 D4p
                                                                 Obj1D4p
                                                                 Obj2D4p
        0.10

        0.05


               1970    1975       1980   1985      1990   1995   2000      2005

                                                                 D4pgap1
       0.025                                                     D4pgap2

       0.000


               1970    1975       1980   1985      1990   1995   2000      2005

       Figure 8.11. The upper ﬁgure plots annual inﬂation against two
    alternative measures of the reference path for inﬂation. The solid line
  shows the HP trend of inﬂation and the dotted line shows the case where
    the Gerlach–Svensson target variable is substituted for the HP trend
        for the subsample 1985(1)–2000(2). The lower graphs show the
               corresponding D4pgap variables in the same cases

for the price (target) variable of Gerlach and Svensson (2003) substituted in
for the period 1985(1)–2000(2). It is seen that the alternative reference path
series share a common pattern with the series we have used. Figure 8.12 shows
the corresponding graphs for the reference path of money growth.
172                                                                 Money and inﬂation


          0.15                                                      D4m
                                                                    Obj1D4m
                                                                    Obj2D4m
          0.10


          0.05

                 1970    1975      1980      1985       1990      1995        2000

                                                                           D4pgap1
          0.02
                                                                           D4pgap2

          0.00


         –0.02
                 1970    1975      1980      1985       1990      1995        2000

  Figure 8.12. The upper ﬁgure shows actual annual money growth plotted
  against the alternative measures of the reference path for money growth.
  The solid line is the reference path derived from the HP trend of inﬂation
    and the dotted line is the alternative, which is derived from inﬂation
  reference path with the Gerlach–Svensson target variable substituted for
  the HP trend for the subsample 1985(1)–2000(2). The lower graphs show
            the corresponding D4mgap variables in the same cases


   The P∗ -model is estimated in two versions: one version is related to the
standard formulation of the P∗ -model as discussed in Section 8.5.4, in which
inﬂation is explained by the real money gap (rm − rm∗ ) and the diﬀerences
between actual price and money growth from their reference (target) paths,
∆4 pgapt and ∆4 mgapt .14
   In order to retain comparability across the inﬂation models, we diﬀer from
previous studies by using the private consumption deﬂator rather than, for
example, the GDP deﬂator of Trecroci and Vega (2002) or a consumer prices
index like the one constructed by Gerlach and Svensson (2003). We also include
four lags of inﬂation, two lags of output growth, ∆yt , and an interest rate
spread gap sgapt (deﬁned as the deviations of the actual spread from a HP
trend spread). The other version, P∗ enhanced, is modelled general to speciﬁc,
where the general speciﬁcation is based on the information set of AWM with
(rm − rm∗ )t , ∆4 pgapt , ∆4 mgapt , and sgapt substituted for the equilibrium-
correction terms ecmpAWM
                       t     and ecmwtAWM .

  14 We have considered two alternative reference paths for inﬂation: it is either trend

inﬂation from a smoothed HP ﬁlter, or as the same series with the reference path for the
price (target) variable of Gerlach and Svensson (2003) substituted in for the period 1985(1)–
2000(2). It is seen that the alternative reference path series share a common pattern. Here
we report results based on the ﬁrst alternative.
8.6 Empirical evidence from Euro-area data                                     173

   After we have imposed valid restrictions, the ﬁrst version based on the
narrower information set becomes:
         t = − 0.0015 + 0.60 ∆pt−1 + 0.24 ∆pt−2 + 0.19 ∆pt−4
         ∆p
               (0.0005) (0.08)         (0.09)       (0.07)
              + 0.18 ∆yt−1 − 0.05 ∆4 pgapt−1 − 0.04 ∆4 mgapt−1
                (0.04)      (0.02)            (0.03)
                  + 0.09 (rm − rm∗ )t−1 − 0.0006 sgapt−1 + dummies
                       (0.03)                (0.0003)
            σ = 0.00211                                                      (8.20)
                                   1972(4)–2000(3)
         FAR(1−5) (5, 95) = 0.52[0.76]     FARCH(1−4) (4, 92) = 0.68[0.61]
         χ2 normality (2) = 0.42[0.81]     FHETx2 (21, 78) = 0.81[0.70]
         FRESET (1, 99) = 7.27[0.008∗∗ ]

    We ﬁnd that money growth deviation from target ∆4 mgapt−1 is insigniﬁcant
which is in line with results reported in Gerlach and Svensson (2003). The
other explanatory variables speciﬁc to the P∗ -model comes out signiﬁcant and
with expected signs. The model shows signs of mis-speciﬁcation through the
signiﬁcant RESET-test.
    The enhanced P∗ -model—based on the broader information set—is
given by:
    t = − 0.0004 + 0.27 ∆pt−3 + 0.15 ∆ulct−1 + 0.49 ∆qt−1
    ∆p
          (0.0005) (0.07)        (0.04)         (0.06)
         + 0.10 ∆at−1 − 0.12 ∆at−2 + 1.08 ∆t3t−1 − 0.03 ∆4 pgapt−1
           (0.04)      (0.04)        (0.27)        (0.02)
           − 0.04 ∆4 mgapt−1 + 0.11 (rm − rm∗ )t−1 + dummies
               (0.025)                 (0.02)
       σ = 0.00190                                                           (8.21)
                                  1972(4)–2000(3)
         FAR(1−5) (5, 93) = 0.65[0.66] FARCH(1−4) (4, 90) = 0.74[0.56]
         χ2 normality (2) = 3.83[0.15]     FHETx2 (25, 72) = 0.76[0.77]
         FRESET (1, 97) = 0.01[0.93]

    The model reduction is supported by the data, and the enhanced P∗ is well
speciﬁed according to the standard diagnostics reported. We ﬁnd the P∗ -model
based on the broader information set variance encompasses the P∗ -model
derived from the narrower set of variables, with a reduction of the estimated
σ of equation (8.21) of 10% compared with the estimated σ of equation (8.20).
    A striking feature of the enhanced P∗ -model is that the short-run explan-
atory variables in the ﬁrst two lines are nearly identical to its counterpart in
the AWM reduced form inﬂation equation (∆at−1 substituting for ∆pit−1 ) with
coeﬃcients of the same order of magnitude. The real money gap (rm − rm∗ )t−1
is highly signiﬁcant, whereas sgapt drops out. Also, the P∗ -speciﬁc explanatory
174                                                                   Money and inﬂation

                  Dp_3 × +/–2SE             Dp_2 × +/–2SE               Dp_1 × +/–2SE
 0.50                              0.3                          0.6
 0.25                              0.2                          0.4
 0.00
                                   0.1                          0.2
           1990           2000           1990          2000              1990           2000

  0.3        Dpr_1×+/–2SE                 Dpr_2 × +/–2SE                     Dpb_1 × +/–2SE
                                   0.0                        0.100
  0.2
                                  –0.1                        0.075
  0.1
                                  –0.2                        0.050
  0.0
           1990           2000           1990          2000              1990           2000
              Dt3a_1 × +/–2SE            D4mgap1_1 × +/–2SE     0.1      D4pgap1_1 × +/–2SE
   2                               0.0
                                                                0.0
   1                              –0.1
                                                               –0.1
           1990           2000           1990          2000              1990           2000

            Rmgap_1 × +/–2SE
 0.20
 0.15
 0.10
 0.05
           1990           2000

        Figure 8.13. Recursive coeﬃcient estimates of the P∗ -model based
                          on the broad information set

variables, ∆4 pgapt−1 and ∆4 mgapt−1 —the deviations from target—are
insigniﬁcant at the 5% level, but are retained to represent the P∗ mechanisms.
    Figure 8.13 shows that the coeﬃcient estimates of the enhanced P∗ -model
are recursively stable.


8.6.4       The New Keynesian Phillips curve
We estimate a hybrid NPCM as described in Section 8.5.3 (cf. Chapter 7 for
further details). Using the instruments of Galı́ et al. (2001)15 —ﬁve lags of inﬂa-
tion, ∆pt , and two lags in the wage share, wst , and output gap (gap)—we
are able to replicate the results for the hybrid model in Chapter 7, which in
turn are representative for the empirical results reported in Galı́ et al. (2001).
We have chosen to estimate a small simultaneous model where the inﬂation
lead ∆pt+1 and the wage share wst are speciﬁed as functions of the instruments

  15 Rudd and Whelan (2004) show that including ∆p
                                                        t−1 among the instruments leads to
an upward bias in the coeﬃcient of the forward variable; see also Roberts (2001). We have,
however, maintained the use of the Galı́ et al. (2001) instruments simply to get as close as
possible to the estimation procedure adopted by the ‘proprietors’ of the NPCM in the same
way as we have tried to do in the cases of AWM price block and the P∗ -model earlier.
8.6 Empirical evidence from Euro-area data                                            175

and full information maximum likelihood estimation16 then yields the following
inﬂation equation:
        t = − 0.0008 + 0.72 ∆pt+1 + 0.31 ∆pt−1 + 0.002 + dummies
        ∆p
              (0.006) (0.07)        (0.07)       (0.008)
          σ = 0.00232                                                              (8.22)
                                    1972(4)–2000(3)
         Single equation diagnostics
           FAR(1−5) (5, 96) = 4.55[0.001∗∗ ] FARCH(1−4) (4, 97) = 0.87[0.48]
           χ2 normality (2) = 5.16[0.08]     FHETx2 (18, 86) = 1.56[0.09]
         Systems diagnostics
           FvAR(1−5) (45, 262) = 9.45[0.000∗∗ ]
           χ2,v normality (6) = 8.64[0.19]
           F2HETx2 (108, 471) = 1.38[0.01∗ ]
    In (8.22) we have augmented the NPCM equation with the signiﬁcant dum-
mies from the other models. Increasing the information set by adding more
instruments does not change the estimates for the NPCM equation. The dum-
mies reduce the estimated σ for the NPCM by 10%, but this is still 10–20%
higher than the other three model classes. The highly signiﬁcant FvAR(1−5) -test
in (8.22) is not only due to ﬁrst-order autocorrelation (which is consistent with
the New Keynesian Phillips curve theory17 ), but reﬂects also higher order auto-
correlation. Figure 8.14 underscores that the coeﬃcients of the forward and the
backward terms of the NPCM are recursively stable, as is also the wage share
coeﬃcient at a zero value.


8.6.5      Evaluation of the inﬂation models’ properties
In this section, we summarise the statistical properties of the diﬀerent inﬂa-
tion models, in order to make more formal comparisons. In Table 8.6 we have
collected the p-values for the mis-speciﬁcation tests for residual autocorrela-
tion, autoregressive conditional heteroskedasticity, non-normality, and wrong
functional form. With the exception of the normality tests which are χ2 (2),
we report F -versions of all tests, as in the previous sections. We also report k,
the number of estimated coeﬃcients, and σ∆p %, the estimated standard error.
    One way of condensing this information is to perform encompassing tests.18
In Table 8.7 we consider AWM as the incumbent model, the one we want to
  16 Our estimation method thus diﬀers from those in Chapter 7, where we estimate the

hybrid model using generalised method of moments (GMM) as well as by two-stage least
squares. Note that we in Chapter 7, like Galı́ et al. (2001), use the GDP deﬂator while in
this section the inﬂation variable is the consumption deﬂator.
  17 First-order autocorrelation may also have other causes, as pointed out Chapter 7.
  18 For an introduction to the encompassing principle, see Mizon and Richard (1986) and

Hendry and Richard (1989).
176                                                                         Money and inﬂation

   1.5
                  Dplead × +/-2SE                                      Ws × +/-2SE
                                                     0.05
   1.0


   0.5                                               0.00



           1985             1990          1995                1985            1990          1995

  0.75                                              0.050
                      Dp_1 × +/-2SE                                     Constant × +/-2SE

  0.50                                              0.025

  0.25                                              0.000

  0.00                                             –0.025

           1985             1990          1995                1985            1990          1995

  Figure 8.14. Recursive coeﬃcient estimates of the hybrid New Keynesian
         Phillips curve model (estimated by instrumental variables)
                                            Table 8.6
                                      Mis-speciﬁcation tests
  ∆p model        k      σ∆p
                          %                                p-values

                                   FAR(1–5)      FARCH(1–5)   χ2normality    FHETx2    FRESET

  AWM          13        0.19         0.84         0.78         0.60          0.17    0.80
  ICM          11        0.21         0.68         0.95         0.92          0.87    0.09
  P∗           12        0.21         0.76         0.61         0.81          0.70    0.008∗∗
  P∗ enh       14        0.19         0.66         0.56         0.15          0.77    0.93
  NPCM          7        0.23         0.00∗∗       0.48         0.08          0.01∗


compare with its competitors, while ICM has this role in Table 8.8. In these
tables, we show the p-values for alternative encompassing tests. In the case of
the ﬁrst table, the statistic FEnc,1 tests the AWM against each of the three
alternatives19 using joint F -tests for parsimonious encompassing of each of the
two models in question against their minimal nesting model. The adjacent test,
FEnc,2 , is based on pairs of model residuals from the AWM (M1 ) and from each
of the alternative inﬂation models Mj . In each case, we regress ε̂1,t against the
diﬀerence between the residuals of model j and model 1 respectively, ε̂jt − ε̂1t .
Under the null hypothesis that model M1 , the AWM, encompasses model Mj ,
the coeﬃcient of this diﬀerence has zero expectation. The hypothesis that model
           19 For technical reasons the NPCM was not included in these tests.
8.6 Empirical evidence from Euro-area data                                                  177

                                         Table 8.7
                  Encompassing tests with AWM as incumbent model

∆p        k    σ∆p
                 % FEnc GUM (j, 83)      p-values for two types of encompassing tests
model
                       j     p-value                FEnc,1                    FEnc,2
                                        M1 vs. Mj Mj vs. M1 M1 vs. Mj Mj vs. M1

AWM       13   0.19    16    0.08
ICM       11   0.21    18    0.00∗∗         0.75             0.006∗∗   0.24            0.00∗∗
P∗        12   0.21    17    0.00∗∗         0.06             0.00∗∗    0.03∗           0.00∗∗
P∗ enh    14   0.19    15    0.04∗          0.11             0.04∗     0.009∗∗         0.005∗∗
NPCM       7   0.23    22    0.00∗∗


                                         Table 8.8
                  Encompassing tests with ICM as incumbent model

∆p        k    σ∆p
                 % FEnc GUM (j, 83)      p-values for two types of encompassing tests
model
                       j     p-value                FEnc,1                    FEnc,2
                                        M1 vs. Mj Mj vs. M1 M1 vs. Mj Mj vs. M1
                                  ∗∗
ICM       11   0.21    18    0.00
AWM       13   0.19    16    0.08         0.006∗∗            0.75      0.00∗∗          0.24
P∗        12   0.21    17    0.00∗∗       0.002∗∗            0.000∗∗   0.017∗          0.001∗∗
P∗ enh    14   0.19    15    0.04∗        0.003∗∗            0.26      0.000∗∗         0.013∗
NPCM       7   0.23    22    0.00∗∗


Mj encompasses M1 is tested by running the regression of the residuals from
model Mj , ε̂j,t , on the same diﬀerence (with changed sign). The simple F-test
of the hypothesis that the diﬀerence has no (linear) eﬀect is reported in the
table. Following Mizon and Richard (1986) and Hendry and Richard (1989),
a congruent encompassing model can account for the results obtained by rival
models, and hence encompassing tests form a richer basis for model comparison
than ordinary goodness-of-ﬁt measures.
    Tables 8.7 and 8.8 show results from the two encompassing tests explained
above, and in addition we report a test for parsimonious encompassing. We
have embraced all ﬁve models in forming their minimal nesting model, and
report p-values of FEncGum tests in the fourth column of the two tables.20 We
see that only the AWM parsimoniously encompasses the general unrestricted

  20 It should be noted that the encompassing tests F
                                                       EncGum , reported in Tables 8.7 and 8.8,
are based on two-stage least squares estimation of the NPCM. This gives estimates of the
inﬂation equation that are close to, but not identical to, those in equation (8.22), since full
information maximum likelihood (FIML) takes account of the covariance structure of the
system. In order to form the minimal nesting model it was necessary to estimate the NPCM
on a single equation form to make it comparable with the other (single equation) models.
178                                                                Money and inﬂation

model (GUM21 ). For all the other models we reject the corresponding set of
restrictions relative to the GUM (at the 5% level). In some cases, neither of the
pair of models encompasses the other. When both tests lead to rejection this is
prima facie evidence that both models are mis-speciﬁed; see Ericsson (1992).

8.6.6      Comparing the forecasting properties
           of the models
Figure 8.15 shows graphs of 20 quarters of one-step ahead forecasts with +/−
two forecast errors to indicate the forecast uncertainty for the ﬁve models we
have estimated. It is diﬃcult to tell from the diagrams by means of ‘eyeball’
econometrics whether there are any diﬀerences between them. So there is a
need for formal tests: Table 8.9 provides a summary of the forecasting prop-
erties of the diﬀerent inﬂation models as it reports root mean squared forecast
errors (RMSFEs) along with their decomposition into forecast error bias and
standard errors. The models are re-estimated on a sample up to the start of the
forecasting horizon, and then used to forecast quarterly inﬂation until 2000(3).
Two horizons are considered: a 36-period horizon starting in 1991(4), and a
20-period horizon starting in 1995(4). The ﬁrst three lines of Table 8.9 show
the RMSFE of inﬂation from the AWM, and its decomposition into mean fore-
casting bias and standard deviation sdev. The other rows of the table shows
the same three components of the RMSFE-decomposition for each of the other
inﬂation models, measured relative to the results for the AWM, such that,
for example, a number greater than one indicates that the model has a larger
RMSFE than the AWM. For one-step forecasts 20 quarters ahead, we ﬁnd
that all competing models beat the AWM on the RMSFE—and bias—criteria,
whereas AWM is superior according to sdev.
    Tables 8.10 and 8.11 show the results from forecast encompassing tests,
regressing the forecast errors of model 1, ε̂1t , against the diﬀerence between
the forecast errors of model j and model 1 respectively, ε̂jt − ε̂1t .22 Under the
null that there is no explanatory power in model j beyond what is already
reﬂected in model 1, the expected regression coeﬃcient is zero. In the tables we
report p-values when we run the forecast encompassing test in both directions.
The AWM is used as benchmark (model 1) in Table 8.10 and the table contains
evidence that AWM forecast encompasses three out of four competitors over
20 quarters (and the fourth—the P∗ -model enhanced—comes close to being
encompassed at the 5% level), while the reverse is not true. Over 36 quarters
there is clear evidence that the AWM forecast encompasses the NPCM, but is
  21 Strictly speaking, the generic GUM is the union of all information sets we have used

to create the general models in Sections 8.6.1–8.6.4. In the minimal nesting (parsimonious)
GUM, we have left out all variables that are not appearing in any of the ﬁve ﬁnal equations
and it is more precise to call this a pGUM.
  22 Again, the forecast encompassing tests are based on two-stage least squares estimates

of the NPCM.
8.6 Empirical evidence from Euro-area data                                                     179

(a) 0.010                                         (b)
                                                         0.010
   0.008
                                                         0.008

   0.006                                                 0.006

   0.004                                                 0.004

   0.002                                                 0.002

                                                         0.000
   0.000
                                                        –0.002
            1995 1996 1997 1998 1999 2000 2001                   1995 1996 1997 1998 1999 2000 2001
                             AWM                                                  ICM
                  1-step Forecasts AWM Dp                                1-step Forecasts (ICM) Dp

(c) 0.010                                         (d) 0.010

   0.008                                                 0.008

   0.006                                                 0.006

   0.004                                                 0.004

   0.002                                                 0.002
   0.000                                                 0.000
  –0.002                                                –0.002

             1995 1996 1997 1998 1999 2000 2001                  1995 1996 1997 1998 1999 2000 2001
                           Pstar model                                   Enhanced Pstar model
                  Pstar 1-step Forecasts Dp                               1-step Forecasts    Dp

                         (e) 0.0125

                            0.0100

                            0.0075

                            0.0050

                            0.0025

                            0.0000

                           –0.0025

                                      1995 1996 1997 1998 1999 2000 2001
                                                NPCM model
                                           NPC 1 step Forecasts Dp

   Figure 8.15. Forecasts of quarterly inﬂation in the Euro area with ﬁve
     diﬀerent models: over the period 1995(4)–2000(3). The models are:
 (a) the AWM; (b) the ICM; (c) the P∗ -model; (d) the enhanced P∗ -model;
            and (e) the NPCM. The bars show 2× forecast errors
180                                                                Money and inﬂation

                                       Table 8.9
              Forecasting the quarterly rate of inﬂation. RMSFE and its
              decomposition: bias, standard deviations, and RMSFE of
                   diﬀerent inﬂation models, relative to the AWM

         ∆4 p model                                                
                                                       Forecasting ∆p
                                           1991(4)–2000(3)       1995(4)–2000(3)
         AWM                RMSFE               0.0022               0.0021
                            Bias                0.0011               0.0016
                            sdev                0.0019               0.0014
         ICM                Rel. RMSFE          1.08                 0.82
                            Rel. bias           1.28                 0.42
                            Rel. sdev           1.01                 1.14
         P∗                 Rel. RMSFE          0.92                 0.88
                            Rel. bias           0.55                 0.38
                            Rel. sdev           1.02                 1.26
         P∗ enh             Rel. RMSFE          0.76                 0.73
                            Rel. bias           0.09                 0.13
                            Rel. sdev           0.88                 1.10
         NPCM               Rel. RMSFE          1.11                 0.73
                            Rel. bias           0.20                 0.06
                            Rel. sdev           1.29                 1.12


                                         Table 8.10
        Forecast encompassing tests over 36 and 20 periods, ending in 2000(3)

Model     k     σ∆p
                  % FEnc GUM (j, 63)       Forecast encompassing tests: p-values
                        j     p-value      1991(4)–2000(3)           1995(4)–2000(3)
                                         M1 vs. Mj Mj vs. M1 M1 vs. Mj Mj vs. M1

AWM       13     0.19   16     0.08
ICM       11     0.21   18     0.00∗∗     0.08          0.06         0.96      0.03∗
P∗        12     0.12   17     0.00∗∗     0.04∗         0.02∗        0.38      0.003∗∗
P∗ enh    14     0.19   15     0.04∗      0.002∗∗       0.42         0.88      0.067
NPCM       7     0.23   22     0.00∗∗     0.21          0.00∗∗       0.35      0.03∗

The AWM is used as benchmark.

itself overwhelmingly forecast encompassed by the enhanced P∗ -model (based
on the same broad information set).
    In Table 8.11 the ICM is used as benchmark (model 1). The ICM is not fore-
cast encompassing any competitor over 20 quarters, but is, as noted above, itself
forecast encompassed by the AWM. Over 36 quarters ICM forecast encompasses
8.6 Empirical evidence from Euro-area data                                                181

                                         Table 8.11
        Forecast encompassing tests over 36 and 20 periods, ending in 2000(3)

Model     k    σ∆p
                 % FEnc GUM (j, 63)          Forecast encompassing tests: p-values
                       j     p-value        1991(4)–2000(3)             1995(4)–2000(3)
                                        M1 vs. Mj Mj vs. M1 M1 vs. Mj Mj vs. M1
                                  ∗∗
ICM       11   0.21    18    0.00
AWM       13   0.19    16    0.08         0.06           0.08          0.03∗          0.96
P∗        12   0.12    17    0.00∗∗       0.11           0.06          0.87           0.06
P∗ enh    14   0.19    15    0.04∗        0.001∗∗        0.18          0.09           0.22
NPCM       7   0.23    22    0.00∗∗       0.64           0.00∗∗        0.10           0.17

The ICM is used as benchmark.

the NPCM, and—like the AWM—it is forecast encompassed by the enhanced
version of the P∗ -model.
   An important caveat applies to the results in this section. In interpreting the
favourable results for the P∗ -model it should be borne in mind that the forecasts
made for the P∗ -speciﬁcations are greatly helped by the two-sided ﬁlters used
to deﬁne the equilibrium values for, say rm∗ , as described in Section 8.5.4.23


8.6.7         Summary of ﬁndings—Euro-area data
The model comparisons in this section do not allow us to draw decisive
conclusions. Some caveats no doubt apply: the presumptions of a clearly
deﬁned monetary policy for the economy under study, which are underlying
the P∗ -model as it is laid out in Gerlach and Svensson (2003), is not favoured
by adopting an observation period which starts nearly 30 years before the intro-
duction of the Euro.24 Likewise, the ICM—with its focus on the labour market
inﬂux on inﬂation—is probably a better model description of the national
economies than for the Euro area.
    That said—from the model evaluation and the forecast comparisons—some
comparative advantages seem to emerge in favour of the (reduced form) AWM
inﬂation equation: it is the only model that encompasses a GUM and it
forecast encompasses the competitors when tested on 20 quarters of one-step
ahead forecasts. The P∗ -model—based on the extended (AWM) information
set—forecast encompasses the other models based on 36 quarters of one-step
forecasts. In that context the NPCM appears to be a particularly poor model.
  23 A more realistic approach would have been to let the estimates of the equilibrium values

be derived from some backward-looking ﬁlter. Such a procedure would better capture the
relevant information available to the forecaster when forecasts are made.
  24 This point is, however, not relevant to the P∗ -model in its original tapping (see Hallman

et al. 1991), where weight is put on the quantity equation and the stability of the money
demand function. Fagan and Henry (1998) suggest that money demand may be more stable
at the aggregated Euro-area level than at the national levels.
182                                                               Money and inﬂation

   The results of the forecast competition are in accordance with the model
evaluation in the preceding sections. The ICM is likely to suﬀer in fore-
casting due to recursive instability in the long-run coeﬃcients (table 2 in
Jansen 2004) as well as in the short-run coeﬃcients (Figure 8.7). Generally,
we ﬁnd that the models that are derived from the wider information sets
(AWM and P∗ enhanced) do better in forecasting than those based on
a narrower information set, mainly prescribed by theory, like the P∗ -model
proper and the NPCM.


8.7      Empirical evidence for Norway
In this and the following sections, we compare an inﬂation equation which
is a reduced form of the dynamic ICM for Norway with variants of the
P∗ -model and the hybrid NPCM, as deﬁned in Section 8.5. We also include
in this comparison the inverted money demand function MdInv of Section 8.4.2
and we show that models based on the P∗ -formulation are more successful than
the alternatives in capturing eﬀects on inﬂation from monetary aggregates.
The models are estimated on a common sample covering 1969(1)–2001(1), and
they are presented in turn below, whereas data sources and variable deﬁnitions
are found in Eitrheim (2003).


8.7.1      The Incomplete Competition Model
The dynamic version of the ICM is the main model in this book to explain
the formation of wages and prices in the Norwegian economy. In Chapter 9, we
follow a stepwise procedure to estimate this model, as described for the Euro
area in Section 8.5. In the case of Norway the long-run restrictions from theory
are supported by the data when we consider an information set of wages (wt )
and consumer prices (pt ) and the conditioning variables, output growth (∆yt ),
unemployment (ut ), productivity (at ), import prices (pit ), payroll taxes (t1t ),
and indirect taxes (t3t ).
    Empirical results for the simultaneous wage–price sub-system are presented
in Section 9.2.2.25 This wage–price model is an updated version of the core
model reported in Bårdsen et al. (2003), and FIML-results for the dynamic
wage and price equations are reported in (9.5)–(9.6). The estimated long-run
equations are:
                  ecmw = w − p − a + 0.11u
                   ecmp = p − 0.73(w + t1 − a) + 0.27pi + 0.5t3.
   These equations are embedded in the model as equilibrium-correction terms.
For the purpose of comparing the ICM with the alternative inﬂation models in

  25 The ﬁnal inﬂation equation also includes short-run eﬀects of changes in the length of

the working day (∆ht ) and seasonal dummies.
8.7 Empirical evidence for Norway                                                     183

                               Table 8.12
    Annual CPI inﬂation in Norway, ∆4 pt . The reduced form ICM model
  
  ∆ 4 pt = 0.0419 ∆3 wt−1 − 0.0667 ∆wt−2 + 1.0296 ∆3 pt−1 + 0.1308 ∆pt−2
            (0.0173)         (0.0260)        (0.0304)       (0.0570)
            + 0.0662 ∆2 yt−1 + 0.0235 ∆pit − 0.0595 EqCPt−1
              (0.0136)         (0.0098)     (0.0064)
            − 0.0185 EqCWt−1 + 0.0416 ∆pet − 0.0355 ∆4 at − 0.0930 ∆ht
              (0.0096)            (0.0088)      (0.0154)    (0.0540)
            − 0.0106 P dumt − 0.0025 W dumt − 0.0066 CS1t − 0.0146
              (0.0007)        (0.0011)          (0.0016)     (0.0073)
       σ̂ = 0.35%
Diagnostic tests
                           FAR(1-5) (5, 109) = 0.6800[0.6395]
                         FARCH(1-4) (4, 106) = 0.2676[0.8982]
                             χ2 normality (2) = 4.7510[0.0930]
                            FHETx2 (27, 86) = 1.3303[0.1620]
                           FRESET (1, 113) = 0.0165[0.8979]

Note: The sample is 1969(1)–2001(1), quarterly data.

this chapter we derive a reduced form representation of the simultaneous wage–
price sub-system. This reduced form version is modelled general to speciﬁc with
PcGets—see Hendry and Krolzig (2001)—starting out with a general model
with 34 variables from which the reduced form of the wage–price sub-system
in equations (9.5)–(9.6) is one among many potential model simpliﬁcations.
In order to further challenge the ICM reported in Section 9.2.2, we also included
a wide set of variables from the previous sections: (lags in) household wealth,
variables which capture exchange rate changes, and a measure of excess money
derived from the long-run money demand relationship.
    None of the ‘outside’ variables were found to be signiﬁcant in the sim-
pliﬁed relationship suggested by the Gets procedure.26 On the other hand,
according to Table 8.12, all key variables in the reduced form representation of
(9.5)–(9.6) turn out to be signiﬁcant, including both the equilibrium correcting
terms above. The reported ICM in Table 8.12 is well speciﬁed according to the
reported mis-speciﬁcation tests.


8.7.2      The New Keynesian Phillips curve
In Chapter 7, Section 7.5.5, we considered the pure version of the NPCM
for Norway (see Equation (7.21)). The model was estimated by GMM over
the period 1972(4)–2001(1). The instruments used were lagged wage growth
(∆wt−1 , ∆wt−2 ), lagged inﬂation (∆pt−1 , ∆pt−2 ), lags of the level and change
  26 In Section 8.7.4 we corroborate this ﬁnding using formal tests of neglected monetary

eﬀects in the ICM, and in Section 8.7.5 we report similar ﬁndings from encompassing tests.
184                                                            Money and inﬂation

in unemployment (ut−1 , ∆ut−1 , ∆ut−2 ), and changes in energy prices (∆pet ,
∆pet−1 ), the short-term interest rate (∆RLt , ∆RLt−1 ) and the change in the
length of the working day (∆ht ). In this chapter we focus on the hybrid version
of the NPCM. We use the same set of instruments, except that the ﬁrst lag of
inﬂation ∆pt−1 now enters as a regressor.
    The results, using both GMM and 2SLS as estimation methods, are given in
Table 8.13. First, using GMM, expected inﬂation becomes insigniﬁcant when
adding lagged inﬂation. This is in stark contrast to the results of the pure
NPCM of equation (7.21) in Chapter 7. Second, the sum of the coeﬃcients is
notably lower than the results for the Euro area. Third, when 2SLS is used,
the Sargan speciﬁcation test χ2ival (6) = 48.14[0.00] indicates a mis-speciﬁed
model.


                                 Table 8.13
       Estimation of the hybrid NPCM of inﬂation on Norwegian data
 GMM results
     t = 0.2263 ∆pt+1 + 0.3960 ∆pt−1 + 0.0794 wst − 0.0512
    ∆p
           (0.1437)       (0.1005)      (0.0175)      (0.0111)
            − 0.0823 ∆pmt − 0.0137 P dumt + 0.0005 S1t + 0.0024 S2t
              (0.0110)       (0.0017)       (0.0014)     (0.0015)
            + 0.0030 S3t
              (0.0020)
      σ̂ = 0.70%
Diagnostic tests
                               χ2J (11) = 11.12[0.43]
 2SLS results
          t = 0.5392 ∆pt+1 + 0.1701 ∆pt−1 + 0.0438 wst − 0.0242
         ∆p
              (0.1637)       (0.1192)       (0.0175)     (0.0110)
               + 0.0131 ∆pmt − 0.0162 P dumt + 0.0070 S1t
                 (0.0182)       (0.0020)        (0.0016)
               + 0.0066 S2t + 0.0076 S3t
                 (0.0021)    (0.0024)
            σ̂ = 0.54%
Diagnostic tests
                                    χ2ival (6) = 48.14[0.00]
                            FAR(1-5) (5, 99) = 14.18[0.00]
                          FARCH(1-4) (4, 96) = 1.17[0.33]
                             χ2 normality (2) = 1.40[0.50]
                            FHETx2 (13, 90) = 1.89[0.04]

Note: The sample is 1972(4)–2000(4), quarterly data.
8.7 Empirical evidence for Norway                                                    185

8.7.3      Inﬂation equations derived from the P∗ -model
The P∗ -model is presented in Section 8.5.4. The basic variables of the model
are calculated in much the same way for Norway as for the Euro area in the
previous section. Figure 8.16 shows the price gap (p − p∗ )t and the real money
gap (rm − rm∗ )t along with the corresponding level series using Norwegian
data. The price gap is obtained from equation (8.16) after ﬁrst applying the
HP ﬁlter to calculate equilibria for output (y ∗ ) and velocity (vt∗ ), respectively.
As for the Euro area we have used λ = 1600 to smooth the output series yt∗
and λ = 400 to smooth velocity vt∗ . Then p∗t can be calculated from (8.14), as
well as the price- and real money gaps. It is easily seen from the ﬁgure that
(p − p∗ )t = −(rm − rm∗ )t .
    The reference path for money growth ∆4 m       t is calculated in a similar way as
in Section 8.5.4. Recall that if we know ∆4 pt , the inﬂation target (or reference
path for inﬂation in the case when no explicit target exist), we can use equation
(8.17), that is, ∆4 m   t = ∆4 pt + ∆4 yt∗ − ∆4 vt∗ , to calculate the corresponding
reference path for money growth. The equilibrium paths for output, yt∗ , and
velocity, vt∗ , are deﬁned above (calculated by the HP-ﬁlter). We let the reference
value for inﬂation vary with the actual level of smoothed inﬂation for the larger
part of the sample period, from 1969(1) to 1995(4). The heuristic interpretation
is that the monetary authorities changed the reference path according to the
actual behaviour, adapting to the many shocks to inﬂation in this period and
we calculate the reference value of inﬂation with a HP-ﬁlter with a large value
of the parameter which penalises non-smoothness, that is, we set λ = 6400 to
avoid volatility in ∆4 pt . For the period from 1996(1) to 2001(1) (end of sample)



     0.0                                        6.5

    –0.5
                                                6.0
    –1.0
                                    p           5.5                           rm
    –1.5
                                    pstar                                     rmstar

            1970    1980    1990    2000              1970    1980    1990    2000

                                              0.075
   0.050                            pgap                                     rmgap
                                              0.050
   0.025
                                              0.025
   0.000
                                              0.000
  –0.025
                                            –0.025
  –0.050
                                            –0.050
            1970    1980    1990    2000              1970    1980    1990    2000

           Figure 8.16. Price and real money gaps. Norwegian data.
186                                                         Money and inﬂation

                                                                 D4p
                                                                 objD4p
          0.10


          0.05


             1965   1970    1975    1980   1985    1990   1995     2000

         0.050                                                   D4pgap
         0.025
         0.000
        –0.025
        –0.050
             1965   1970    1975    1980   1985    1990   1995     2000

          Figure 8.17. Inﬂation objective and gap. Norwegian data.

we have set the reference value to 2% which is consistent with the actual level
of inﬂation in this period as well as corresponding to the upper limit of inﬂation
in the Euro area in this period. Although Norway formally followed a managed
ﬂoat exchange rate regime in this period, there were substantial deviations from
the target exchange rate level in this period, and towards the end of the century
the monetary policy regime in Norway was for all practical purposes equival-
ent to an inﬂation targeting regime with a target geared towards the Euro-area
inﬂation target (Figure 8.17). Finally we deﬁne ∆4 pgapt as the change in the
diﬀerence between the actual inﬂation ∆4 pt and the reference path ∆4 pt , and
∆4 mgapt is deﬁned accordingly as ∆4 mt − ∆4 m     t.
    The basic version of the P∗ -model for Norway corresponds to the model
we have reported in Section 8.6.3 for the Euro area. In addition to the poten-
tial eﬀect from the real money gap (rm − rm∗ )t−1 , we have also included
lagged values of the reference money growth gap indicator, ∆4 mgapt−1 (see
Figure 8.18), the deviation from the reference value of inﬂation (inﬂation gap
for short), ∆4 pgapt−1 , and the yield spread deviation from its trend value,
RBRM gapt−1 . We also follow Gerlach and Svensson (2003) in including vari-
ables which account for temporary shocks to inﬂation from changes in energy
prices, ∆pet , and output growth, ∆yt . Moreover, we augment the equation with
the change in household wealth (∆wht ) and the dummies W dumt and P dumt .
As shown in Table 8.14 changes in energy prices and output growth come out
as signiﬁcant explanatory factors, while the empirical support is less convinc-
ing for the gap variables. Only the real money gap, (rm − rm∗ )t−1 , and the
inﬂation gap, ∆4 pgapt−1 , are signiﬁcant at the 10% level. The real money gap
has a positive eﬀect, and the inﬂation gap a negative eﬀect on inﬂation. When
we include the gap variables in this model one at a time, only the real money
gap and the inﬂation gap come out as signiﬁcant at the 5% level. The reported
8.7 Empirical evidence for Norway                                           187


          0.15                                                    D4m
                                                                  objD4m

          0.10

          0.05

            1965     1970    1975   1980    1985    1990   1995      2000

         0.050
                                                                  D4mgap
         0.025
         0.000
        –0.025
        –0.050
            1965     1970    1975   1980    1985    1990   1995      2000

       Figure 8.18. Money growth objective and gap. Norwegian data.

                                    Table 8.14
                   The P∗ -model for annual CPI inﬂation, ∆4 pt


∆ 4 pt = + 1.2763 ∆3 pt−1 + 0.0436 ∆pet + 0.0481 ∆yt−2 + 0.0303 ∆wht−3
           (0.0191)        (0.0107)      (0.0109)         (0.0173)
         − 0.0824 ∆4 pgapt−1 + 0.0491 rmgapt−1 + 0.0217 gdpgapt−1
          (0.0323)             (0.0292)           (0.0474)
         − 0.0024 ∆4 mgapt−1 − 0.0202 RBRMgapt−1 − 0.0116 P dumt + 0.0006
          (0.0271)            (0.0548)              (0.0010)       (0.0010)
    σ̂ = 0.46%
Diagnostic tests
                        FAR(1−5) (5, 113) = 2.1491[0.0647]
                      FARCH(1−4) (4, 110) = 2.3686[0.0570]
                           χ2 normality (2) = 4.9067[0.0860]
                          FHETx2 (20, 97) = 3.7178[0.0000]∗∗
                         FHETxi xj (65, 52) = 1.7848[0.0160]∗
                         FRESET (1, 117) = 5.5016[0.0207]∗

Note: The sample is 1969(1)–2001(1), quarterly data.

mis-speciﬁcation tests indicate that the model only barely passes the tests for
residual autocorrelation, ARCH and normality tests at a 5% signiﬁcance level,
but fails to meet the tests of zero heteroskedasticity and the RESET test of
functional form. The ﬁndings that the money growth indicator ∆4 mgapt−1 is
insigniﬁcant whereas the real money gap, (rm − rm∗ )t−1 , picks up a signiﬁcant
eﬀect are in line with our results for the Euro area as well as those found in
Gerlach and Svensson (2003).
188                                                            Money and inﬂation

                                 Table 8.15
        The enhanced P∗ -model (P∗ enh) for annual CPI inﬂation, ∆4 pt

      
      ∆ 4 pt = + 1.0653 ∆3 pt−1 + 0.2606 ∆pt−2 + 0.0496 ∆pet
                (0.0259)         (0.0552)       (0.0087)
               + 0.0302 ∆2 ywt−1 − 0.0574∆yt−1 + 0.0650 ∆mt
                 (0.0133)         (0.0137)       (0.0252)
              − 0.0647 (mt−1 − pt−1 − 0.9yt−1 + 2.5(RBt−1 − RMt−1 ))
              (0.0112)
              + 0.1234 rmgapt−1 + 0.1373 RBRMgapt−1 + 0.0024 CS2
                (0.0178)            (0.0496)              (0.0012)
              −0.0121P dumt − 0.0033 W dumt − 0.3113
              (0.0007)       (0.0012)         (0.0536)
         σ̂ = 0.35%
Diagnostics
                        FAR(1−5) (5, 111) = 1.2569[0.2877]
                      FARCH(1−4) (4, 108) = 0.7746[0.5441]
                           χ2 normality (2) = 1.8738[0.3918]
                          FHETx2 (23, 92) = 1.6716[0.0452]∗
                         FHETxi xj (82, 33) = 0.6567[0.9353]
                         FRESET (1, 115) = 0.6076[0.4373]

Note: The sample is 1969(1)–2001(1), quarterly data.

     As for the Euro area, we have tried to improve on the P∗ -model by including
a wider set of variables from the other inﬂation models. Most importantly, we
have lifted the equilibrium-correction term ecmmd from the (improved) money
demand function in Section 8.4.1 (see Table 8.4) into the P∗ -model. The model
is derived general to speciﬁc using the liberal PcGets modelling strategy and
it is seen from Table 8.15 that this model which we have dubbed the enhanced
P∗ -model (P∗ -enhanced for short) improves strongly on the previous P∗ -model:
the model ﬁts the data better, and the estimated standard error is reduced from
σ̂ = 0.46% in Table 8.14 to σ̂ = 0.35%. The model is also well designed and
with the exception of the FHETx2 -test it passes all the reported mis-speciﬁcation
tests.


8.7.4     Testing for neglected monetary eﬀects
          on inﬂation
The ICM equation for aggregate consumer price inﬂation in Table 8.12 contains
three key sources of inﬂation impulses to a small open economy: imported
inﬂation including currency depreciation (a pass-through eﬀect), domestic
cost pressure (unit labour costs), and excess demand in the product market.
Monetary shocks or ﬁnancial market shocks may of course generate inﬂation
8.7 Empirical evidence for Norway                                                189

impulses in situations where they aﬀect one or more of the variables associ-
ated with these inﬂation channels. In this section, we will investigate another
possibility, namely that shocks in monetary or ﬁnancial variables have direct
eﬀects on inﬂation which have been neglected in the ICM. Results for Denmark
in Juselius (1992) indicate that ‘monetary variables’ are important explan-
atory variables in an empirical model for Danish inﬂation and that they have
clearly signiﬁcant direct eﬀects. In the following, we test the robustness of
the ICM inﬂation equation in Table 8.12 with respect to neglected monetary
eﬀects on inﬂation, simply by subjecting this equation to a sequence of omitted
variables tests. In turn we test the signiﬁcance of current and lagged money
growth (∆mt , . . . , ∆mt−4 ), real interest rate (RT−∆4 p)t−1 , interest rate spread
(RB − RT)t−1 , the lagged equilibrium correction term from the broad money
demand equation ecmmdt−1 , credit gap (cr − cr∗ )t−1 , and all gap variables
from the P∗ -models above (ygapt−1 , ∆4 mgapt−1 , ∆4 pgapt−1 , RBRTgapt−1 ,
rmgapt−1 ).
    The results in Table 8.16 show that neither of these variables are signiﬁ-
cant when they are added to the ICM price equation. The same results hold
for these variables irrespective of whether we test their signiﬁcance simul-
taneously or include the variables one at a time. The lagged equilibrium
correction term for broad money, ecmmdt−1 , is clearly insigniﬁcant when it
is added to the price equation. This is an important result, since it provides
corroborative evidence that prices are weakly exogenous for the parameters
in the long-run money demand relationship. This is a plausible ﬁnding from
a theoretical point of view, and it is also in line with empirical evidence
found in a series of previous studies, including Hoover (1991), Bårdsen (1992),


                                  Table 8.16
         Omitted variable tests (OVT) for neglected monetary eﬀects
           on inﬂation in the ‘reduced form’ ICM price equation
            Money growth, Interest rates, excess money and credit
        ∆m, . . . , ∆mt−4                FOVT (5,109) = 0.2284[0.9494]
        (RT − ∆4 p)t−1                   FOVT (1,113) = 0.0328[0.8565]
        (RB − RT)t−1                     FOVT (1,113) = 0.3075[0.5803]
        (m − m∗ )t−1                     FOVT (1,113) = 0.1302[0.7189]
        (cr − cr∗ )t−1                   FOVT (1,113) = 0.5173[0.4735]
                 ‘Gap’ variables from the P-star model
        gdpgapt−1                        FOVT (1,113) = 0.4476[0.5049]
        ∆4 mgapt−1                       FOVT (1,113) = 1.5663[0.2133]
        ∆4 pgapt−1                       FOVT (1,113) = 0.0114[0.9152]
        RBRMgapt−1                       FOVT (1,113) = 0.1164[0.7336]
        rmgapt−1                         FOVT (1,113) = 2.0426[0.1557]
        Joint all ﬁve above              FOVT (5,109) = 0.4685[0.7990]
190                                                           Money and inﬂation

Hendry and Ericsson (1991), Engle and Hendry (1993), and Hendry and
Mizon (1993).


8.7.5      Evaluation of inﬂation models’ properties
The models above are estimated both for annual inﬂation (∆4 pt ) and quarterly
inﬂation (∆pt ) for all the inﬂation models, except for the NPCM where the
forward-looking term on the right-hand makes the quarterly model the obvi-
ous choice. As with the Euro-area data, we shall seek to evaluate the diﬀerent
inﬂation models by comparing some of their statistical properties. In Table 8.17
we report p-values for mis-speciﬁcation tests for residual autocorrelation, auto-
regressive conditional heteroskedasticity, non-normality and wrong functional
form. With the exception of the normality tests which are χ2 (2), we have
reported F -versions of all tests.
    None of the models reported in the upper part of Table 8.17 fails on the
FAR(1−5) or FARCH(1−5) tests, hence there seems to be no serial correlation nor
ARCH in the model residuals, but we see that the MdInv and the P∗ -model fail
either on the FHETx2 test and/or the FRESET test for wrong functional form. The
results for the NPCM reported at the bottom of Table 8.17 indicate strong serial
correlation, but as we have seen in Chapter 7, models with forward-looking
expectational terms have moving average residuals under the null hypothesis
that they are correctly speciﬁed. The ﬁt of the other models vary within the
range of σ̂ = 0.35% for the ICM and the enhanced P∗ -model to σ̂ = 0.46% for
the P∗ -model.
    In Table 8.18 we show p-values for the encompassing tests we employed on
the Euro-area data in Section 8.7.5. Recall that the statistics FEnc,1 tests the
ICM against each of the six alternatives using a joint F -test for parsimonious
encompassing of each of the two models in question against their minimal nest-
ing model. The adjacent test, FEnc,2 is based on pairs of model residuals from


                                  Table 8.17
                             Mis-speciﬁcation tests
  ∆4 p model    k   σ∆
                      4p
                         %                       p-values
                             FAR(1−5) FARCH(1−5) χ2normality    FHETx2   FRESET

  ICM          15    0.35      0.64       0.90        0.09      0.16     0.90
  MdInv        11    0.45      0.15       0.28        0.03∗     0.00∗∗   0.01∗∗
  P∗           11    0.46      0.07       0.06        0.09      0.00∗∗   0.02∗
  P∗ enh       13    0.35      0.29       0.54        0.39      0.05∗    0.44
  ∆p model      k    %
                    σ∆p      FAR(1−5) FARCH(1−4) χ2normality    FHETx2

  NPCM          9    0.54     0.00∗∗      0.33        0.50      0.04∗
8.7 Empirical evidence for Norway                                                            191

                                         Table 8.18
               Encompassing tests with ICM as incumbent model (M1 )

∆4 p       k σ∆
               4p
                  % FEnc GUM (j, 63)      p-values for two types of encompassing tests
model
                        j    p-value                FEnc,1                     FEnc,2
                                        M1 vs. Mj Mj vs. M1 M1 vs. Mj Mj vs. M1

ICM       15    0.35   51    0.67
MdInv     11    0.45   55    0.00∗∗        0.38              0.00∗∗   0.50              0.00∗∗
P∗        11    0.46   55    0.00∗∗        0.35              0.00∗∗   0.39              0.00∗∗
P∗ enh    13    0.35   51    0.70          0.00∗∗            0.01∗∗   0.00∗∗            0.00∗∗
∆p         k   σ∆p
                %
model

NPCM 9          0.54   57     0.00∗∗                                  0.27              0.00∗∗




the ICM (M1 ) and from each of the alternative inﬂation models Mj . In each
case we regress ε̂1,t against the diﬀerence between the forecast errors of model
j and model 1 respectively, ε̂jt − ε̂1t . Under the null hypothesis that model M1 ,
the ICM, encompasses model Mj , the coeﬃcient of this diﬀerence should be
expected to be zero and vice versa for the opposite hypothesis that model Mj
encompasses M1 .
    We see from Table 8.18 that the ICM outperforms most of the alternative
models on the basis of the encompassing tests. We have formed a minimal
nesting model for all the models, and report p-values of FEncGum tests against
the minimal nesting model in the fourth column of the table. We see that the
ICM and the enhanced P∗ -model parsimoniously encompasses the GUM. For
the MdInv and the P∗ -model, that is, the models where we have added a set
of variables from the ‘monetary’ information set, we obtain outright rejection
of the corresponding set of restrictions relative to the GUM.27 Also for the
NPCM we clearly reject these restrictions.28 Looking to the other tests, FEnc,1
and FEnc,2 , we ﬁnd that for the ICM and the enhanced P∗ -model, neither model
encompasses the other. The tests show that the ICM clearly encompasses the
other three models.

  27 It should be noted that the encompassing tests F
                                                     EncGum , reported in Table 8.18, are based
on two-stage least squares estimation of the NPCM. In order to form the minimal nesting
model it was necessary to estimate NPCM on a single equation form to make it comparable
to the other (single equation) models.
  28 Strictly speaking, the generic GUM is the union of all information sets we have used

to create the general models in Sections 8.7.1–8.7.3. In the minimal nesting (parsimonious)
GUM we have left out all variables that are not appearing in any of the ﬁve ﬁnal equations
and it is more precise to call this a pGUM.
192                                                                  Money and inﬂation

8.7.6       Comparing the forecasting properties
            of the models
Table 8.19 provides a summary of the forecasting properties of the inﬂa-
tion models. We report results for forecasting exercises where the models are
re-estimated on a sample up to the start of the forecasting horizon, and then
used to forecast quarterly and annual inﬂation until 2000(4). Three diﬀerent
horizons are considered: a 40-period horizon with forecasts starting in 1991(1),
a 24-period horizon with forecasts starting in 1995(1) and a 12-period horizon
with forecasts starting in 1999(1).29 The ﬁrst three lines of Table 8.19 show the
RMSFE of inﬂation from the ICM, and its decomposition into mean forecasting
bias and standard deviation sdev. The other rows of the table shows the same
three components of the RMSFE-decomposition for each of the other inﬂation
models, measured relative to the results for the ICM, such that, for example,
a number greater than one indicates that the model has a larger RMSFE than
the ICM. For the forecast error bias we see that since the ICM has a very low
bias on the 40-period forecast horizon, the relative values for the other models
take on quite large values. Take the MdInv-model as an example: this performs
poorly on this long period, in part because of parameter instabilities shortly
after the start of the forecast period. Again, this can be interpreted as a result
from forecast breakdown, and this is conﬁrmed by the relative bias (Rel. bias) of
the MdInv-model, which is around 15 for quarterly inﬂation and 187 for annual
inﬂation on the 40 period forecast horizon. The MdInv-model does much better
relative to the ICM on the two shorter forecasting horizons, which is consistent
with better parameter constancy over these horizons.
    Table 8.20 shows the results from forecast encompassing tests, regressing
the forecast errors of model 1, ε̂1t , against the diﬀerence between the forecast
errors of model 2 and model 1 respectively, ε̂2t − ε̂1t . Under the null that
there is no explanatory power in model 2 beyond what is already reﬂected in
model 1, the expected regression coeﬃcient is zero. In the table, we report p-
values when we run the forecast encompassing test in both directions. The table
shows that whereas the forecast encompassing tests are unable to discriminate
eﬀectively between the competing models on the longest horizon, there is a clear
tendency toward ICM encompassing the competitors on the shorter forecast
horizons. These conclusions are conﬁrmed and reinforced in the Table 8.21
which summarises the performance of the models of quarterly inﬂation, which
allows us also to include the NPCM in the contest. In this case the ICM is

   29 From the previous sections we have seen that many of the models automatically provide

forecasts of annual inﬂation since ∆4 pt is the left-hand side variable. In all models of this
type we have included ∆3 pt−1 unrestrictedly as a right-hand side variable. If the coeﬃcient
of ∆3 pt−1 is close to one, the annual representation is a simple isomorphic transformation
of a similar quarterly model. The NPCM is only estimated with quarterly inﬂation, ∆pt , as
left-hand side variable. Thus, for the purpose of model comparison we have re-estimated all
models with ∆pt as left-hand side variable.
                                                 Table 8.19
Forecasting annual and quarterly rates of inﬂation. RMSFE and its decomposition. Bias, standard deviations,
                       and RMSFE of diﬀerent inﬂation models, relative to the ICM

∆4 p model                                           
                                         Forecasting ∆p                                        
                                                                                   Forecasting ∆ 4p

                           91(1)–00(4)    95(1)–00(4)     98(1)–00(4)   91(1)–00(4)   95(1)–00(4)     98(1)–00(4)
ICM          RMSFE            0.0024         0.0025         0.0026        0.0024        0.0024          0.0025
             Bias             0.0004         0.0015         0.0017        0.0001        0.0014          0.0017
             sdev             0.0024         0.0020         0.0020        0.0024        0.0020          0.0019
MdInv        Rel. RMSFE        1.45           1.16           1.22           1.25         0.98            1.03
             Rel. bias        15.25           1.14           0.60         187.45         1.76            0.22
             Rel. sdev         1.66           2.26           1.93           2.48         1.15            1.28
P∗           Rel. RMSFE        5.07           4.97           4.04           1.92         1.25            1.14
             Rel. bias        30.09           7.90           5.90          43.33         0.82            0.06
             Rel. sdev         1.52           1.88           1.98           1.14         1.40            1.52
P∗ enh       Rel. RMSFE        1.19           1.28           1.06           1.00         1.13            0.98
             Rel. bias         4.62           1.45           0.55          15.23         1.21            0.32
             Rel. sdev         0.94           1.18           1.30           0.84         1.09            1.28
NPCM         Rel. RMSFE        3.15           2.52           2.73           3.17         2.64            2.84
             Rel. bias         9.84           1.58           2.62          42.80         1.61            2.53
             Rel. sdev         2.14           2.56           2.46           2.11         2.62            2.67
                                                 Table 8.20
              Forecast encompassing tests based on forecasting annual inﬂation rates over 40, 24,
                and 12 periods ending in 2000(4). The ICM model is used as benchmark (M1 )

Model    k σ∆
             4p
                % FEnc GUM (j, 63)                    Forecast encompassing tests: p-values

                      j    p-value      1991(1)–2000(4)          1995(1)–2000(4)         1998(1)–2000(4)
                                     M1 vs. Mj Mj vs. M1 M1 vs. Mj Mj vs. M1 M1 vs. Mj Mj vs. M1
ICM      15    0.35   51   0.67
MdInv    11    0.45   55   0.00∗∗      0.02∗        0.00∗∗      0.18        0.00∗∗       0.72       0.00∗
P∗       11    0.46   55   0.00∗∗      0.02∗∗       0.00∗∗      0.09        0.00∗∗       0.91       0.00∗∗
P∗ enh   13    0.35   51   0.70        0.00∗∗       0.06∗∗      0.01∗       0.00∗∗       0.29       0.04∗
NPCM      9                            0.40         0.00∗∗      0.45        0.00∗∗       0.66       0.00∗∗
                                                   Table 8.21
              Forecast encompassing tests based on forecasting quarterly inﬂation rates over 40, 24,
                 and 12 periods ending in 2000(4). The ICM model is used as benchmark (M1 )

Model    k      σ∆p
                 %        FEnc GUM (j, 63)                 Forecast encompassing tests: p-values

                           j    p-value         1991(1)–2000(4)        1995(1)–2000(4)         1998(1)–2000(4)
                                              M1 vs. Mj Mj vs. M1 M1 vs. Mj Mj vs. M1 M1 vs. Mj Mj vs. M1
ICM      15      0.33     52     0.64
MdInv    11      0.47     56     0.00∗∗        0.02∗      0.00∗∗      0.14        0.00∗∗       0.84      0.00∗
P∗       11      0.77     56     0.00∗∗        0.35       0.00∗∗      0.14        0.00∗∗       0.46      0.00∗∗
P∗ enh   13      0.36     52     0.51          0.00∗∗     0.01∗∗      0.01∗       0.00∗∗       0.26      0.01∗
NPCM      9      0.54     57     0.00∗∗        0.78       0.00∗∗      0.39        0.00∗∗       0.64      0.00∗∗
196                                                                                        Money and inﬂation

   (a) 0.045                 Forecasts                        (b)                   Forecasts
                             D4p                                     0.06           D4p
         0.040
         0.035                                                       0.05
         0.030
         0.025                                                       0.04
         0.020
         0.015                                                       0.03
         0.010
                                                                     0.02
         0.005
         0.000                                                       0.01
                 90 91 92 93 94 95 96 97 98 99 00 01                        90 91 92 93 94 95 96 97 98 99 00 01
                                 ICM                                                       MdInv
   (c)                     Forecasts                          (d) 0.050                  Forecasts
          0.05             D4p                                      0.045                D4p
                                                                    0.040
          0.04                                                      0.035
                                                                    0.030
          0.03                                                      0.025
                                                                    0.020
          0.02
                                                                    0.015
          0.01                                                      0.010
                                                                    0.005
          0.00                                                      0.000
                 90 91 92 93 94 95 96 97 98 99 00 01                        90 91 92 93 94 95 96 97 98 99 00 01
                               P* model                                                 P*–enh model

                                 (e) 0.06               1-step Forecasts
                                                        D4p
                                       0.05
                                       0.04
                                       0.03
                                       0.02
                                       0.01
                                       0.00
                                              90 91 92 93 94 95 96 97 98 99 00 01
                                                          Hybrid NPCM


  Figure 8.19. Forecasting annual CPI inﬂation in Norway, ∆4 pt , over the
 period 1991(1)–2000(4) using ﬁve diﬀerent models. The models are: (a) the
 ICM; (b) the MdInv model; (c) the P∗ -model; (d) the enhanced P∗ -model;
        and (e) the hybrid NPCM. The bars show 2× forecast errors

encompassing the NPCM on all horizons, and it is also encompassing the P∗ -
model on the longest horizon, from 1991(1) to 2000(4).30


8.7.7            Summary of the ﬁndings—Norway vs. Euro area
The overall conclusion from the comparisons of inﬂation models for the
Norwegian economy is that monetary measures do not play an important part
in explaining and/or predicting Norwegian inﬂation. The preferred speciﬁca-
tions of money demand do not include inﬂation as a signiﬁcant explanatory

  30 The caveat mentioned in Section 8.6.6 of the P∗ -model being greatly helped by the use

of two-sided HP-ﬁlters is also relevant for the case of Norway.
8.7 Empirical evidence for Norway                                                    197

variable and hence the money demand equation cannot be interpreted as an
inverted inﬂation equation. An attempt to model an inﬂation equation as an
inverted money demand function shows clear signs of mis-speciﬁcation and the
MdInv model is demonstrated to be inferior to all other competitors based on
in-sample evaluations as well as in forecasting (Figure 8.19). Also the P∗ -model,
which embody several aggregates which monetarist theorists predict would
explain inﬂation, fails to do so. Only when we augment the P∗ -model with
the equilibrium-correction term for broad money, ecmmdt−1 , does the model
(P∗ -enhanced) appear to perform adequately in explaining and predicting the
inﬂation series.
    It is shown elsewhere in this book that the ICM gives a data congruent
representation of Norwegian wage–price formation. In this chapter, it transpires
that a reduced form representation of the ICM seems to perform better than
the rival models it is compared to based on in-sample evaluations as well as
forecasting. Moreover, there are no signs of the neglected monetary eﬀects in
the reduced form ICM inﬂation equation. In conclusion, the support for the
ICM inﬂation model is much stronger in the case of the small open economy
Norway, than in the case of a large aggregated economy, as is the Euro area.
The AWM reduced form inﬂation equation emerges as the strongest contender
amongst the Euro-area inﬂation equations and the enhanced P∗ -model is almost
equally good.31


  31 Recall the caveat in Section 8.6.6—that the P∗ -model is unduly helped by the use of

two-sided ﬁlters—which further strengthens the case for the AWM.
This page intentionally left blank
                                        9

   Transmission channels and
       model properties

      In this chapter, we develop an econometric model for forecasting of
      inﬂation in Norway, an economy that recently opted for inﬂation tar-
      geting. We illustrate the estimation methodology advocated earlier, by
      estimating and evaluating a model of prices, wages, output, unem-
      ployment, the exchange rate, and interest rates on government bonds
      and bank loans. The model is built up sequentially. We partition the
      simultaneous distribution function into a small model of wages and
      prices, and several marginal models for the rest of the economy.
      The choice of model framework for the wage and price model follows
      from the analysis in earlier chapters. We use the model to analyse the
      transmission mechanism and to address monetary policy issues related to
      inﬂation targeting.



9.1      Introduction
On 29 March 2001 Norway adopted inﬂation targeting. Rather than stabilising
the exchange rate by pegging the Norwegian Krone to the Euro (or previously
a basket of foreign currencies) the central bank became committed to an inﬂa-
tion target of 2.5%. This was in line with an international trend, as countries like
Canada, New Zealand, Sweden, and the United Kingdom had already changed
their monetary policy towards an explicit inﬂation target; cf. Bernanke et al.
(1999).
    Research on monetary policy has focused on the conditional inﬂation
forecast as the operational target for monetary policy, yet the literature is
dominated by either theoretical or calibrated models—examples are Ball (1999),
Batini and Haldane (1999), Røisland and Torvik (2004), Walsh (1999),
Svensson (2000), Woodford (2000, 2003) and Holden (2003). True to the


                                        199
200                                           Transmission channels and model properties

approach taken in this book we will argue that econometric evaluation of models
is useful, not only as an aid in the preparation of inﬂation forecasts, but also
as a way of testing, quantifying, and elucidating the importance of transmis-
sion mechanisms in the inﬂationary process. In this way, inﬂation targeting
moves the quality of econometric methodology and practice into the limelight
of the economic policy debate.
     Inﬂation is a many-faceted phenomenon in open economies, and models
that include only a few dimensions, for example, the output gap and expecta-
tions of the future rate of inﬂation, are likely to fail in characterising the data
adequately, as demonstrated in Chapter 7. Econometric work that views inﬂa-
tion as resulting from disequilibria in many markets fares much better (see
Hendry 2001b and Juselius 1992). Our starting point is therefore that, at a min-
imum, foreign and domestic aspects of inﬂation have to be modelled jointly, and
that the inﬂationary impetus from the labour market—the battle of markups
between unions and monopolistic ﬁrms—needs to be represented, for example,
as in the Incomplete Competition Model (ICM) which also stands out as the
preferred model in Chapter 8.
     The approach taken in this chapter to construct a small model of inﬂation
is illustrated in Figure 9.1.
     The focus is on the simultaneous wage–price model Dy (yt | zt , Yt−1 , Zt−1 ),
where yt = [wt pt ] , the vector zt contains all conditioning variables, and (Yt−1 ,
Zt−1 ) collects all lagged values of yt and zt . The variables in zt are partitioned
into [z1,t z2,t z3,t ] , where z1,t denote feedback variables, z2,t are non-modelled
variables, and z3,t are monetary policy instruments. Lagged values are partitioned
correspondingly, Zt−1 = (Z1,t−1 , Z2,t−1 , Z3,t−1 ).



                           Non-modelled                                        = Regime may
                           variables                                           affect
                                 z2,t                                          relationship




                                              z1,t   Wage–price
          Feedback
          variables                                  model
                                                                                    Inflation
           Dz1(z1,tz2,t, z3,t, Yt–1, Zt–1)          yt = [wt pt]⬘                  forecast
                                              Yt–1
                                                     Dy = (ytzt,Yt–1, Zt–1)


                             Policy
                             instruments
                                  z3,t


                       Figure 9.1. Model-based inﬂation forecasts
9.1 Introduction                                                                       201

     The feedback variables z1,t include unemployment, output, productivity,
and import prices.1 Figure 9.1 indicates that the marginal models, Dz1 (z1,t |
z2,t , z3,t , Yt−1 , Zt−1 ), are not only functions of lagged wages and prices, but
may also depend on both the non-modelled explanatory variables z2,t and on
the policy variables z3,t . The feedback variables are treated as weakly exogenous
variables in the wage–price model. This is a testable property that we address
in Section 9.4 after modelling the feedback relationships.
     The conditional non-modelled variables z2,t consist of domestic tax-rates
and world prices. The crucial question for the policy instruments z3,t is whether
there exists a single reaction function for the interest rate. Norway was pegging
its exchange rate to diﬀerent currency baskets throughout the sample period,
which is 1972(4)–2001(1).2 For a substantial part of this time period the coun-
try saw frequent devaluations, particularly in the 1980s. Finding an empirically
constant reaction function from inﬂation forecasts to interest rates is there-
fore a non-starter. Hence, we treat the short-run interest rate as a strongly
exogenous policy variable, meaning that there is no reaction function in the
model linking the inﬂation forecast to the interest rate.3 The important mon-
etary feedback variable is the exchange rate, determining import prices for
given foreign prices. The exchange rate depends on inﬂation, the short-run
interest rate and foreign variables.4
     Section 9.2 sets out the core model of inﬂation as a wage–price system,
conditional on output, productivity, unemployment, and the exchange rate.
After evaluating steady-state properties, we derive a dynamic model for wage
and price growth. We enlarge this core model to include relationships for out-
put, productivity, unemployment, and exchange rates in Section 9.3, and the
exogeneity assumptions underlying such a modelling strategy are examined
in Section 9.4. Equipped with the core model and the marginal models we
next establish a small econometric model. Despite aggregation of aggregate
demand, it is seen that the simultaneous model captures essential features of
the transmission mechanisms in the inﬂationary process for the small open
economy. It provides a testing bed for the impact of policy changes on the
economy. In particular, it highlights the behaviour of exchange rates, which
is central to the conduct of monetary policy in small open economies. The
exchange rate behaviour is characterized by a data-consistent empirical model


  1 We model the mainland economy only, although the oil sector accounts for close to 20

per cent of total GDP. The oil activities, including the huge oil investments, are driven by
factors that are exogenous to the mainland economy, which we have chosen to focus on.
  2 In other words, a formal inﬂation target was introduced at the end of the last quarter

included in the sample.
  3 In Chapter 10 we analyse the performance of diﬀerent monetary reaction functions.
  4 A precursor to the model can be found in Bårdsen et al. (2003). Other comparable

econometric studies are Sgherri and Wallis (1999), Jacobson et al. (2001), and Haldane and
Salmon (1995)—albeit with diﬀerent approaches and focus.
202                                 Transmission channels and model properties

with short-run interest rate and inﬂation eﬀects, and convergence towards
purchasing power parity (PPP) in the long run.
   Section 9.5 contains a discussion of the main monetary policy channels in the
model, that is, both the interest rate and the exchange rate channels. We also
evaluate the properties of the model for inﬂation forecasting, while we study the
eﬀects of an exogenous change in the interest rate in Section 9.6. In Section 9.7
we sum up our experiences so far.



9.2     The wage–price model
We ﬁrst model the long-run equilibrium equations for wages and prices
based on the framework of Chapter 5. As we established in Section 5.4 the
long-run equations of that model can be derived as a particular identiﬁca-
tion scheme for the cointegrating equations; see (5.19)–(5.20). Second, we
incorporate those long-run equations as equilibrium correcting terms in a
dynamic two-equation simultaneous core model for (changes in) wages and
prices.



9.2.1     Modelling the steady state
From equations (5.19)–(5.20), the variables that contain the long-run real wage
claims equations are collected in the vector [wt pt at pit ut ] . The wage variable
wt is average hourly wages in the mainland economy, excluding the oil produc-
ing sector and international shipping. The productivity variable at is deﬁned
accordingly—as mainland economy value added per man hour at factor costs.
The price index pt is the oﬃcial consumer price index. Import prices pit are
measured as the deﬂator of total imports. The unemployment variable ut is the
rate of open unemployment, excluding labour market programmes.
    In addition to the variables in the wage-claims part of the system, we include
(as non-modelled and without testing) the payroll-tax t1t , indirect taxes t3t ,
energy prices pet , and output yt —the changes in which represent changes in
the output gap, if total capacity follows a trend. Institutional variables are
also included. Wage compensation for reductions in the length of the work-
ing day is captured by changes in the length of the working day ∆ht —see
Nymoen (1989b). The intervention variables W dumt and P dumt are used to
capture the impact of incomes policies and direct price controls. This system,
where wages and prices enter with three lags and the other main variables enter
with one or two lags, is estimated over 1972(4)–2001(1).
    We impose restrictions on the steady-state equations (5.19)–(5.20), by
assuming no wedge and normal cost pricing. We also ﬁnd empirical support that
changes in indirect taxes are oﬀ-set in long-run inﬂation with a factor of 50%.
9.2 The wage–price model                                                             203

                                    Table 9.1
                       The estimated steady-state equations
                    The estimated steady-state equations (9.1)–(9.2)
                                  w = p + a − 0.11u
                                               (0.01)
                                   p = 0.73(w + t1 − a) + 0.27pi + 0.5t3
                                                           (0.08)
                                 Cointegrated system
   46 parameters                     wt                pt               System
   χ2normality (2)               4.21[0.12]        2.48[0.29]
   FHETx2 (22, 83)               1.01[0.46]        1.28[0.21]
   χ2overidentiﬁcation (8)                                            13.21[0.10]
   χ2normality (4)                                                     5.14[0.27]
    v
   FHETx2 (66, 138)                                                    0.88[0.72]

Note: Reference: see Table 9.2. The numbers in [..] are p-values.
The sample is 1972(4)–2001(1), 114 observations.


We end up with a restricted form where only ϑ and φ enter unrestrictedly:

                      w = p + a − ϑu,                                              (9.1)
                      p = (1 − φ)(w − a + t1) + φpi + 0.5t3,                       (9.2)

with estimation results in Table 9.1.
    The results are qualitatively the same as the results for Norway in Bårdsen
et al. (1998) for a sample covering 1966(4)–1993(1) and the near identical
results in Bårdsen et al. (2003), where the sample covers 1966(4)–1996(4).5
Figure 9.2 records the stability over the period 1984(1)–2001(1) of the coef-
ﬁcient estimates in Table 9.1 with ±2 standard errors (±2se in the graphs),
together with the tests of constant cointegrating vectors over the sample. We
note that the eight overidentifying long-run restrictions are accepted by the data
at all sample sizes. The estimated wage responsiveness to the rate of unemploy-
ment is approximately 0.1, which is close to the ﬁnding of Johansen (1995a)
for manufacturing wages. This estimated elasticity is numerically large enough
to represent a channel for economic policy on inﬂation.
    On the basis of Table 9.1 we conclude that the steady-state solution of our
system can be represented as

                        w = p + a − 0.1u,                                          (9.3)
                        p = 0.7(w + t1 − a) + 0.3pi + 0.5t3.                       (9.4)

   5 Compared to the previous ﬁndings, the weight on productivity and tax corrected wages

is increased and the eﬀect of indirect taxes reduced in the price equation.
204                                 Transmission channels and model properties


                                                                  q ± 2 s.e
  0.10

  0.05
               1985             1990              1995                             2000
  0.25
                                                                  f ± 2 s.e
  0.00
  –0.25
  –0.50
               1985             1990              1995                             2000
                                                         x2overidentification(8)       1% crit
      20
      15
      10

               1985             1990              1995                             2000

      Figure 9.2. Identiﬁed cointegration vectors. Recursively estimated
    parameters (elasticity of unemployment in the wage equation and the
elasticity of the import price in the price equation) and the χ2 (8) test of the
        overidentifying restrictions of the long-run system in Table 9.1



9.2.2        The dynamic wage–price model
When modelling the short-run relationships we impose the estimated steady
state from (9.3) to (9.4) on a subsystem for {∆wt , ∆pt } conditional on {∆at ,
∆yt , ∆ut−1 , ∆pit , ∆t1t , ∆t3t } with all variables entering with two additional
lags. In addition to energy prices ∆pet , we augment the system with {∆ht ,
W dumt , P dumt } to capture short-run eﬀects. Seasonalt is a centred seasonal
dummy. The diagnostics of the unrestricted I(0) system are reported in the
upper part of Table 9.2.
    The short-run model is derived general to speciﬁc by deleting insigniﬁ-
cant terms, establishing a parsimonious statistical representation of the data
in I(0)-space, following Hendry and Mizon (1993) and is found below:

      t = −0.124 + 0.809 ∆pt − 0.511 ∆ht + 0.081 ∆at
      ∆w
           (0.017) (0.109)     (0.123)     (0.017)
                − 0.163 (wt−1 − pt−1 − at−1 + 0.1ut−2 ) + 0.024 Seasonalt−2
                 (0.021)                                 (0.002)
                − 0.020 W dumt + 0.023 P dumt                                              (9.5)
                 (0.003)        (0.004)
           σ = 0.0089.
9.2 The wage–price model                                                       205

                                   Table 9.2
               Diagnostics for the unrestricted I(0) wage–price
                            system and the model
                              Unrestricted I(0) system
               52 parameters
               FvAR (1 − 5) (20, 154)                  0.68[0.85]
                 2,v
               χnormality (4)                          4.39[0.36]
               FvHETx2 (141, 114)                      0.81[0.88]

                                          Final model
               19 parameters
               χ2overidentiﬁcation (33)                 33.72[0.43]
               FvAR(1−5) (20, 188)                      1.45[0.10]
               χ2,v
                 normality (4)                          6.82[0.15]
               FvHETx2 (141, 165)                       1.23[0.10]

               Note: References: overidentiﬁcation test
               (Anderson and Rubin 1949, 1950; Koopmans et
               al. 1950; Sargan 1988), AR-test (Godfrey 1978;
               Doornik 1996), Normality test (Doornik and
               Hansen 1994), and Heteroskedasticity test
               (White 1980; Doornik 1996). The numbers in [..]
               are p-values.
               The sample is 1972(4)–2001(1), 114 observations.

   t = 0.006 + 0.141 ∆wt + 0.100 ∆wt−1 + 0.165 ∆pt−2 − 0.015 ∆at
   ∆p
        (0.001) (0.026)       (0.021)         (0.048)          (0.006)
         + 0.028 ∆yt−1 + 0.046 ∆yt−2 + 0.026 ∆pit + 0.042 ∆pet
           (0.012)       (0.012)        (0.008)        (0.007)
         − 0.055 (pt−3 − 0.7(wt−2 + t1t−1 − at−1 ) − 0.3pit−1 − 0.5t3t−1 )
           (0.006)
         − 0.013 P dumt                                                       (9.6)
            (0.001)
     σ = 0.0031

     T = 1972(4)–2001(1) = 114.
    The lower part of Table 9.2 contains diagnostics for the ﬁnal model. In
particular, we note the insigniﬁcance of χ2overidentiﬁcation (33), which shows that
the model reduction restrictions are supported by the data.
    The wage growth equation implies that a one percentage point increase
in the rate of inﬂation raises wage growth by 0.8 percentage point. The
discretionary variables for incomes policies (Wdumt ) and for price controls
(P dumt ) are also signiﬁcant. Hence, discretionary policies have clearly
206                                  Transmission channels and model properties

succeeded in aﬀecting consumer real wage growth over the sample period.
The equilibrium-correction term is highly signiﬁcant, as expected. Finally, the
change in normal working-time ∆ht enters the wage equation with a negative
coeﬃcient, as expected. In addition to equilibrium-correction and the dummies
representing incomes policy, price inﬂation is signiﬁcantly inﬂuenced by wage
growth and output growth (the output gap), together with eﬀects from import
prices and energy prices—as predicted by the theoretical model.
    The question whether wage–price systems like ours imply a NAIRU prop-
erty hinges on the detailed restrictions on the short-run dynamics. A necessary
condition for a NAIRU is that wage growth is homogenous with respect to the
change in producer prices, ∆qt . Using, ∆pt ≡ (1 − φ)∆qt + φ∆pit , and since
∆pit does not enter the wage equation, it is clear that a homogeneity restriction
does not hold in the wage growth equation (9.5): using the maintained value
of φ = 0.3 from (9.4) the implied wage elasticity with respect to the change
in producer prices, ∆qt is 0.56. The wage equation therefore implies that we
do not have a NAIRU model. Hence, the conventional Phillips curve NAIRU,
for example, does not correspond to the eventual steady-state rate of unem-
ployment implied by the larger model obtained by grafting the wage and price
equations in a larger system of equations.
    The model has constant parameters, as shown in Figure 9.3, which contains
the one-step residuals and recursive Chow-tests for the model. Finally, the lower
left panel of Figure 9.3 shows that the model parsimoniously encompasses the


                               rDw                                      rDp
                                           0.010
 0.02
                                           0.005

 0.00                                      0.000

                                          –0.005
–0.02
                                          –0.010
        1985    1990    1995     2000              1985   1990   1995         2000
                                            1.00
  45                           5% crit                               5%
                               LR(33)       0.75                     Nup Chow
                                                                     statistics
  40
                                            0.50

  35
                                            0.25

  30
        1985    1990    1995     2000              1985   1990   1995         2000

  Figure 9.3. Recursive stability tests for the wage–price model. The upper
panels show recursive residuals for the model. The lower panels show recursive
          encompassing tests (left) and recursive Chow tests (right)
9.3 Closing the model: marginal models for feedback variables               207

system at every sample size. As noted in the introduction, improperly modelled
expectations in the dynamic simultaneous equations model could cause the
model’s parameters to change when policies change, generating misleading
policy simulations, as emphasised by Lucas (1976). However, as Figure 9.3
shows, there is no evidence of any mis-speciﬁed expectations mechanisms.


9.3     Closing the model: marginal models for
        feedback variables
We have established a wage–price model conditional upon the exchange rate
vt (which works through pit ), GDP mainland output yt , the rate of unemploy-
ment ut , and average labour productivity at . In this section, we enlarge the
model to include relationships for these four variables and functions for real
credit crt , and two interest rates: for government bonds RBOt and for bank
loans RLt . This serves three purposes: ﬁrst, all of these variables are aﬀected
by the monetary policy instrument (represented in the model by the money
market interest rate) and are therefore channels for monetary instruments to
inﬂuence inﬂation; second, none of these variables are likely to be strongly
exogenous. For example, import prices depend by deﬁnition on the nominal
exchange rate. Below we report a model that links the exchange rate to the
lagged real exchange rate, which in turn depends on the domestic price level;
third, we make use of the marginal models to test the exogeneity assump-
tions that underlie the estimation strategy of the wage–price model as well as
conditions for valid use of the full model for policy simulations.6


9.3.1     The nominal exchange rate v t
The nominal exchange rate aﬀects wages and prices via import prices pit .
Let pft be an index of import prices in foreign currencies. Then, as a ﬁrst
step in the completion of the model, we make use of the identity
                                  pit = vt + pft
and attempt to model the (log) of the trade weighted exchange rate index
vt . In doing so, we follow Akram (2004), who models the exchange rate
as equilibrium-correcting to the real exchange rate, which means that it is
determined by PPP in steady state,
                             ecmv,t = vt + pwt − pt ,
where pwt is the log of a trade-weighted index of foreign consumer prices.
Figure 9.4 shows the time-series properties of ecmv,t , together with the cor-
responding term ecmy,t from the aggregate demand equation developed later.

            6 The marginal models reported below are estimated with OLS.
208                                  Transmission channels and model properties

                  ecmv
       0.10

       0.05

       0.00

      –0.05

      –0.10
         1965     1970     1975    1980     1985    1990     1995   2000
                 ecmy
       6.80

       6.75

       6.70

       6.65


         1965     1970     1975    1980     1985    1990     1995   2000

 Figure 9.4. The equilibrium-correction terms of the exchange rate and the
                        aggregate demand equations

The graphs of the ecms indicate stationary behaviour, corresponding to short-
run deviations from steady state.
   The resulting model is given as
   ∆vt = − 0.35 ∆RSt − 0.41 sRISKt + 0.15 (s · ∆(euro/dollar))t
          (0.08)      (0.19)        (0.04)
              − 0.13 ∆oilSTt −0.06 (v + pw − p)t−2 + 0.04 Vdumt + 0.02
               (0.03)        (0.03)                      (0.004) (0.01)
                                                                      (9.7)
                       T = 1972(4)–2001(1) = 114
                                              σ̂ = 1.24%
                              FAR(1–5) (5, 102) = 1.76[0.13]
                                χ2normality (2) = 5.64[0.06]
                             FHETx2 (12, 94) = 0.55[0.88].
(Reference: see Table 9.2. The numbers in [..] are p-values.)
    Akram (2004) documents signiﬁcant non-linear eﬀects of the USD
price of North Sea oil on the Norwegian exchange rate. Our model is built
along the same lines and therefore features non-linear eﬀects from oil prices
(oilt ) in the form of a smooth transition function (see Teräsvirta 1998),
                    ∆oilSTt = ∆oilt /{1 + exp[4(oilt − 14.47)]}.
The implication is that an oil price below 14 USD triggers depreciation of the
krone.
9.3 Closing the model: marginal models for feedback variables                          209

    As for the other right-hand side variables, the ﬁrst term implies that there
is a negative (appreciation) eﬀect of an increase in the money market interest
rate ∆RSt . The variable sRISKt captures deviations from uncovered interest
rate parity (see Rødseth 2000, p.15) after 1998(4):
          sRISKt = RSt−1 − RWt − (∆vt−1 − 0.8vt−1 )               for t > 1998(4)
          sRISKt = 0.0394                                         for t  1998(4),
where RWt is the three months Euro money market rate and (∆vt−1 − 0.8vt−1 )
is the expected change in the nominal exhange rate, E(∆vt ). The term (s ·
∆(euro/dollar))t reﬂects the fact that we are modelling the trade-weighted
exchange rate, which is inﬂuenced by the changes in the relative value of United
States dollar to Euro (Ecu). This eﬀect is relevant for the period after the
abolition of currency controls in Norway in 1990(2), which is why we multiply
with a step dummy, st , that is 0 before 1990(3) and 1 after.
    Finally, there is a composite dummy
  Vdumt = [−2 × i73q1 + i78q1 + i82q3 + i86q3 + 0.7i86q4 − 0.1s86q4 01q4
               − i97q1 + i97q2]t
to take account of devaluation events. Figure 9.5 shows the sequence of 1-step
residuals for the estimated ∆vt equation, together with similar graphs for the
following three marginal models reported.


           Exchange rate                    0.03   Mainland GDP
                                   +2s                                          +2s
   0.02                                     0.02
                                            0.01
   0.00                                     0.00
                                           –0.01
  –0.02                            –2s     –0.02
                                                                                –2s
            1985     1990   1995   2000            1985       1990       1995       2000

           Unemployment                    0.050   Productivity
                                   +2s
    0.1                                                                         +2s
                                           0.025

    0.0
                                           0.000

   –0.1                            –2s    –0.025                                –2s
            1985     1990   1995   2000            1985       1990       1995       2000

Figure 9.5. Marginal equations: recursive residuals and ±2 standard errors (σ)
210                               Transmission channels and model properties

9.3.2     Mainland GDP output y t
The model for ∆yt is adapted from the ‘AD’ equation in Bårdsen and
Klovland (2000). The growth in output ∆yt is in the short run a function
of public demand ∆gt , and growth in private demand—represented by growth
in real private credit ∆crt . Moreover, there is an eﬀect from the change in the
real exchange rate in the period after the deregulation of currency controls in
Norway in 1990(2).
      ∆yt = 1.16 − 0.39 ∆yt−1 + 0.29 ∆gt + 0.49 ∆crt−1
           (0.30) (0.07)         (0.06)      (0.12)
            − 0.17 ecmy,t + 0.41 (s · ∆(v + pw − p))t−2 + 0.07 Ydumt
              (0.05)       (0.12)                         (0.01)
            − 0.06 Seasonalt−1 − 0.07 Seasonalt−2 − 0.03 Seasonalt−3
              (0.003)             (0.005)             (0.004)
                                                                           (9.8)

                      T = 1972(4)–2001(1) = 114
                                          σ̂ = 1.21%
                             FAR(1–5) (5, 99) = 0.84[0.53]
                               χ2 normality (2) = 0.78[0.67]
                             FHETx2 (14, 89) = 0.48[0.94].
(Reference: see Table 9.2. The numbers in [..] are p-values.)
    The equilibrium-correction mechanism of aggregate demand, denoted ecmy,t
is deﬁned as:
           ecmy,t = yt−1 − 0.5ywt−1 − 0.5gt−1 + 0.3(RL − 4∆p)t−1 ,
where the long-run steady-state is determined by real public consumption
expenditure (gt ), real foreign demand, which is proxied by the weighted GDP
for trading partners (ywt ), and the real interest rate on bank loans rate
(RL − 4∆p)t , where RLt is the nominal bank loan rate. The estimated adjust-
ment coeﬃcient of −0.17, suggests a moderate reaction to shocks to demand.
The estimated equation also includes a constant and three seasonal dummies
and in addition the dummy Ydumt = [i75q2]t is required to whiten the
residuals.


9.3.3     Unemployment ut
The dynamics of unemployment ∆ut display strong hysteresis eﬀects, with
very sluggish own dynamics. Also aggregate demand shocks ∆4 yt and changes
in the real wage ∆(w − p)t have signiﬁcant short-run eﬀects. Moreover, there
are signiﬁcant eﬀects of change in foreign demand ∆yw, and the share of the
9.3 Closing the model: marginal models for feedback variables                 211

workforce between 16 and 49 years old N16–49,t .

  ∆ut = − 1.23 + 0.34 ∆ut−1 − 0.06 ut−1 − 1.83 ∆4 yt
         (0.49) (0.07)       (0.02)      (0.29)
          + 1.30 ∆(w − p)t−1 −2.63∆ywt−2 +1.78 N16−49,t + 0.22 Udumt
           (0.52)            (1.03)      (0.71)          (0.04)
          + 0.41 Seasonalt−1 + 0.10 Seasonalt−2 + 0.29 Seasonalt−3
           (0.03)              (0.02)            (0.02)
          − 6.46 chSeasonalt−1 − 7.55 chSeasonalt−2 − 4.34 chSeasonalt−3 .
           (0.49)                (0.34)               (0.39)
                                                                       (9.9)

                      T = 1972(4)–2001(1) = 114
                                           σ̂ = 5.97%
                            FAR(1-5) (5, 95) = 0.69[0.63]
                               χ2normality (2) = 1.91[0.38]
                            FHETx2 (23, 76) = 2.21[0.005].
(Reference: see Table 9.2. The numbers in [..] are p-values.)

   There are two sets of seasonals in this equation. chSeasonalt is designed to
capture a gradual change in seasonal pattern over the period:

                                           1
                  chSeasonalt =                          Seasonalt .
                                  1 + e0.5+0.35·Trendt

    Moreover, a composite dummy variable Udumt = [i75q1 + i75q2 − i87q2]t
is required to whiten the residuals.
    Summing up, the unemployment equation in essence captures Okun’s law.
An asymptotically stable solution of the model would imply ū = const+f (∆y),
so there is a one-to-one relationship linking the equilibria for output growth and
unemployment.



9.3.4     Productivity at
Productivity growth ∆at is basically modelled as a moving average with
declining weights

           ∆at = 0.73 − 0.76 ∆at−1 − 0.79 ∆at−2 − 0.48 ∆at−3
                (0.15) (0.05)         (0.05)      (0.10)
                 − 0.18 ecma,t − 0.06 Adumt + 0.08 Seasonalt−3             (9.10)
                   (0.04)       (0.02)       (0.01)
212                                Transmission channels and model properties

                       T = 1972(4)–2001(1) = 114
                                         σ̂ = 1.52%
                             FAR(1–5) (5, 102) = 0.17[0.97]
                               χ2 normality (2) = 1.23[0.54]
                             FHETx2 (10, 96) = 0.74[0.69].
(Reference: see Table 9.2. The numbers in [..] are p-values.)
In the longer run the development is inﬂuenced by the real wage, by unem-
ployment and by technical progress—proxied by a linear trend—as expressed
by the equilibrium correction mechanism
             ecma,t = at−4 − 0.3(w − p)t−1 − 0.06ut−3 − .002Trend t .
The dummy Adumt = [i86q2]t picks up the eﬀect of a lock-out in 1986(2) and
helps whiten the residuals.

9.3.5       Credit expansion cr t
The growth rate of real credit demand, ∆crt , is sluggish, and it is also aﬀected
in the short run by income eﬀects. In addition the equation contains a step
dummy st for the abolition of currency controls (which again takes the value 1
after 1990(3) and (0) before) and a composite dummy variable
           CRdumt = [0.5i85q3 + i85q4 + 0.5i86q1 + i87q1 + P dum]t
to account for the deregulation of ﬁnancial markets.
      ∆crt = − 0.26 + 0.17 ∆crt−1 + 0.42 ∆crt−2 + 0.10 ∆yt
              (0.05) (0.06)        (0.06)        (0.02)
             − 0.27 ∆RLt−1 − 0.026 ecmcr,t + 0.015 CRdumt − 0.006 st (9.11)
              (0.12)        (0.005)         (0.002)        (0.002)

                       T = 1972(4)–2001(1) = 114
                                            σ̂ = 0.61%
                            FAR(1-5) (5, 101) = 0.52[0.75]
                                χ2normality (2) = 0.06[0.97]
                             FHETx2 (13, 92) = 0.94[0.51].
(Reference: see Table 9.2. The numbers in [..] are p-values.)
    The long-run properties are those of a standard demand function—with an
elasticity of 2 with respect to income and a negative eﬀect from opportunity
costs, as measured by the diﬀerence between bank loan rates RL and bond
rates RBO
                ecmcr,t = crt−3 − 2yt−1 + 2.5(RLt−1 − RBOt−1 ).
9.3 Closing the model: marginal models for feedback variables               213

9.3.6     Interest rates for government bonds RBOt and
          bank loans RLt
Finally, the model consists of two interest rate equations. Before the deregula-
tion, so st = 0, changes in the bond rate RBOt are an autoregressive process,
corrected for politically induced changes modelled by a composite dummy.
           ∆RBOt = 0.12 ∆RBOt−1 + 0.30 s∆RSt + 0.95 s∆RWt
                  (0.04)         (0.03)       (0.07)
                      − 0.02 s · ecmRBO,t−1 + 0.011 RBOdumt               (9.12)
                       (0.01)                (0.001)

                      T = 1972(4)–2001(1) = 114
                                           σ̂ = 0.18%
                           FAR(1–5) (5, 104) = 0.83[0.53]
                                χ2normality (2) = 0.46[0.80]
                              FHETx2 (10, 98) = 1.61[0.11]
(Reference: see Table 9.2. The numbers in [..] are p-values.)
where
         RBOdumt = [i74q2 + 0.9i77q4 − 0.6i78q1 + 0.6i79q4 + i80q1
                    + i81q1 + i82q1 + 0.5i86q1 − 1.2i89q1]t .
   After the deregulation, the bond rate reacts to the changes in the money-
market rate s∆RSt as well as the foreign rate s∆RWt , with the long-run eﬀects
represented by the equilibrium-correcting term:
                 ecmRBO,t−1 = (RBO − 0.6RS − 0.75RW)t−1 .
The equation for changes in the bank loan rate ∆RLt is determined in the
short run by changes in the bond rate, with additional eﬀects from changes in
the money-market rate s∆RSt after the deregulation.
   ∆RLt = − 0.0007 + 0.09 ∆RLt−1 + 0.37 s∆RSt + 0.11 ∆RBOt−1
           (0.0002) (0.03)        (0.03)       (0.035)
            − 0.29 s · ecmRL,t−1 + 0.001 s66t + 0.012 RLdumt              (9.13)
             (0.03)               (0.0003)     (0.001)

                      T = 1972(4)–2001(1) = 114
                                           σ̂ = 0.15%
                           FAR(1–5) (5, 102) = 1.01[0.42]
                               χ2 normality (2) = 1.04[0.59]
                             FHETx2 (11, 95) = 0.89[0.55].
(Reference: see Table 9.2. The numbers in [..] are p-values.)
214                                  Transmission channels and model properties

   Again a rather elaborated composite dummy is needed in order to obtain
white noise residuals
       RLdumt = [i78q1 + 0.5i80q3 + 0.75i81q2 + 0.5i86q1 − 86q2
                    + 0.75i86q4 − 0.5i89q1 − 89q3 − 0.67i92q4 + 2i98q3]t .
   In the long run, the pass-through of eﬀects from both the money-market
rate and the bond rate are considerably higher:
                    ecmRL,t−1 = (RL − 0.8RS − 0.5RBO)t−1 .


9.4      Testing exogeneity and invariance
Following Engle et al. (1983), the concepts of weak exogeneity and parameter
invariance refer to diﬀerent aspects of ‘exogeneity’, namely the question of valid
conditioning in the context of estimation, and valid policy analysis, respectively.
In terms of the ‘road-map’ of Figure 9.1, weak exogeneity of the conditional
variables for the parameters of the wage–price model Dy (yt | zt , Yt−1 , Zt−1 )
implies that these parameters are free to vary with respect to the parameters
of the marginal models for output, productivity, unemployment, and exchange
rates Dz1 (z1t | z2t , z3t , Yt−1 , Zt−1 ). Below we repeat the examination of these
issues as in Bårdsen et al. (2003): we follow Johansen (1992) and concentrate
the testing to the parameters of the cointegration vectors of the wage–price
model. Valid policy analysis involves as a necessary condition that the coeﬃ-
cients of the wage–price model are invariant to the interventions occurring in
the marginal models. Such invariance, together with weak exogeneity (if that
holds), implies super exogeneity.
    Following Johansen (1992), weak exogeneity of z1,t with respect to the
cointegration parameters requires that the equilibrium-correction terms for
wages and prices do not enter the marginal models of the conditioning levels
variables. Table 9.3 shows the results of testing weak exogeneity of productivity,
unemployment, and import prices7 within the marginal system.
    We observe that the weak exogeneity assumptions do not hold (at the 5%
critical level) for import prices with respect to the long-run parameters, whereas
those assumptions appear to be tenable for productivity and unemployment.
Looking at the detailed results, we observe that it is the equilibrium correction
term for the price equation ecmp,t that is signiﬁcant for import prices (through
the exchange rate equation). This means that the estimation of the long-run
equations is slightly ineﬃcient, whereas the ﬁnding of the two long-run rela-
tionships (9.3)–(9.4) is likely to be a robust result due to the superconsistency
of the cointegrating equations.

  7 In eﬀect we model the exchange rate, treating foreign prices as being determined by

factors that are a priori unrelated to domestic conditions.
9.4 Testing exogeneity and invariance                                                    215

                                       Table 9.3
                                Testing weak exogeneity
                                        ecmw,t and ecmp,t
                            ∆pit        F(2, 105) = 3.67[0.03]
                            ∆ut         F(2, 98) = 1.11[0.33]
                            ∆at         F(2, 105) = 2.45[0.09]


    To test for parameter invariance, we need the interventions occurring in
the parameterisations of Dz1 (z1t | z2t , z3t , Yt−1 , Zt−1 ). Consider therefore
the following stacked form of the estimated single equation marginal models
(9.7)–(9.13) in Section 9.3:
                      
                   ∆Z
   ∆z1,t = A(L)              + B · EqCM(Zt−1 ) + C · Xt + D · INTt + εz1,t .
                   ∆Y t−1
                                                                                      (9.14)
    The matrix B contains the coeﬃcients of the equilibrium correction terms
(if any) in the marginal models (with the loadings along the diagonal). The
matrix C contains the coeﬃcients of the maintained exogenous variables Xt
in the marginal models for z1,t . Intervention variables aﬀecting the mean of
the variables under investigation—signiﬁcant dummies and non-linear terms—
are collected in the INTt matrix, with coeﬃcients D. By deﬁnition, the
elements in INTt are included because they pick up linear as well as non-linear
features of z1,t that are left unexplained by the information set underlying the
wage–price model.8
    To test for parameter invariance in the wage–price model, we test for the
signiﬁcance of all the intervention variables from all the marginal models (9.7)–
(9.13) in Section 9.3.9 The results from adding the set of intervention variables
to the wage–price model (9.5)–(9.6) are reported in Table 9.4.
    The intervention variables are jointly insigniﬁcant in the wage–price sys-
tem (with p-value = 0.32) as is seen from Table 9.4. As a speciﬁcation test, this
yields support to the empirical model in (9.5)–(9.6). However, we ﬁnd that three
terms in the price equation are signiﬁcant—the oil-price term and the dummies
from the output and productivity equations. Hence, the support for super exo-
geneity for the conditioning variables on our sample from 1972(4)–2001(1) is
weaker than in Bårdsen et al. (2003) on a sample period 1966(4)–1996(4).
  8 The idea to ﬁrst let the marginal models include non-linear terms in order to obtain

stability and second to use them as a convenient alternative against which to test invariance
in the conditional model, was ﬁrst proposed by Jansen and Teräsvirta (1996).
  9 There is no marginal model for the impact of import prices ∆pi . Instead, we have
                                                                         t
assumed full and immediate pass-through of the exchange rate, imposing ∆pit = ∆vt + ∆pwt
on the model. We therefore use the intervention variables of ∆vt to test for invariance of the
parameters of ∆pit .
216                                  Transmission channels and model properties

                                     Table 9.4
                                 Testing invariance
       ∆wt = · · · + 0.005 Ydumt + 0.003 Udumt − 0.009 CRdumt
                    (0.011)        (0.007)         (0.007)
             − 0.027 ∆oilt × oilSTt − 0.043 s∆(euro/dollar)t − 0.003 st
                 (0.027)                (0.033)               (0.003)
             − 0.003 Vdumt + 0.007 Adumt + 0.001 RBOdumt
                 (0.003)        (0.013)         (0.004)
             + 0.047 s∆RSt − 0.426 s∆RWt + 0.0003 RLdumt
                 (0.139)       (0.385)          (0.0128)

      ∆pt = · · · − 0.008 Ydumt + 0.0026 Udumt − 0.0003 CRdumt
                    (0.004)       (0.0023)          (0.0021)
             + 0.022 ∆oilt × oilSTt − 0.0014 s∆(euro/dollar)t + 0.0014 st
                 (0.011)               (0.0115)                (0.0012)
             + 0.0014 Vdumt + 0.0087 Adumt − 0.0012 RBOdumt
                 (0.0011)       (0.0044)          (0.0014)
             − 0.015 s∆RSt + 0.100 s∆RWt + 0.0002 RLdumt
                 (0.049)       (0.133)          (0.0012)

      Note: Testing the invariance with respect to all interventions:
      χ2 (24) = 26.75[0.32].


    In the same vein, we have also augmented the wage–price model (9.5)–(9.6)
with all equilibrium correction terms in the marginal models (9.7)–(9.13):
ecmv,t , ecmy,t , ecmu,t , ecma,t , ecmcr,t , ecmRBO,t , ecmRL,t . They are individu-
ally and jointly insigniﬁcant, with a joint test statistic of χ2 (14) = 6.82[0.94],
providing additional support to the wage–price model speciﬁcation.


9.5        Model performance
The model (9.5)–(9.13) is a small econometric model for Norway, which is
characterised by the inclusion of labour market eﬀects in addition to eﬀects of
aggregated demand and the exchange rate. The motivation for the extended
model is given in the preceding chapters: in order to capture the eﬀects of
monetary policy in general and on inﬂation in particular, it is essential to
include the workings of the labour market.
    Figure 9.6 gives an overview of the transmission mechanism in the model,
focusing on the relationship between interest rates and inﬂation. The most
direct eﬀect on inﬂation from a rise in the interest rate is an exchange rate
appreciation which feeds into lower consumer price inﬂation with a time lag.
This delayed ‘pass-through’ of exchange rates into consumer price inﬂation is
well known in empirical work and reﬂects inter alia that price setters may
ﬁnd it diﬃcult to distinguish between permanent and temporary shocks to the
9.5 Model performance                                                         217


                                 Money market rate
                                      RSH


                                                     Loan rate and
           Exchange rate                             Bond rate
                V
                                                       RL, RBO



                           Aggregated demand                         Credit
                                   Y                                   cr




                                                    Unemployment
                                                         u




                                 Price- and wage-
                                     inflation
                                  ∆w        ∆p


             Figure 9.6. Interest rate and exchange rate channels


exchange rate. Other interest rate eﬀects work through their eﬀects on aggregate
demand which in turn aﬀect output growth and the rate of unemployment. Both
indicators aﬀect domestic wage and price growth and hence inﬂation.
    There is a link between Figure 9.6 and Figures 1.1 and 1.2. The small econo-
metric model we are studying here captures the eﬀect of Figure 1.1 through the
aggregate demand channel and of Figure 1.2 through the exchange rate channel.
    In order to take account of all implied feedback links, the model is completed
with the necessary set of identities for the equilibrium-correction terms, real
wages, the real exchange rate, the real bond rate, and so forth. With these
new equations in place it is possible to estimate the model simultaneously with
full information maximum likelihood (FIML). Doing so does not change the
coeﬃcient estimates of the model much.
    As it stands, the system is fundamentally driven by the following exogenous
variables:

• real world trade (weighted GDP for trading partners), ywt , and real public
  expenditure (gt )
• nominal foreign prices pwt measured as a trade-weighted index of foreign
  consumer prices
• the price of Brent Blend in USD (oilt )
218                                                          Transmission channels and model properties

                                  Inflation                                                     Real wages
 0.12                                                               180
 0.10                                                               170
 0.08                                                               160
 0.06
                                                                    150
 0.04
 0.02                                                               140
 0.00                                                               130
–0.02                                                               120
        84   86     88       90      92       94   96   98     00          84   86     88      90   92    94     96     98   00
                    Actual           INF (Baseline mean)                              Actual        WP (Baseline mean)

                             Exchange rate                                                  Real exchange rate
 1.10                                                                1.4
 1.05                                                                1.3
 1.00                                                                1.2
 0.95                                                                1.1
 0.90                                                                1.0
 0.85                                                                0.9
 0.80                                                                0.8
        84   86     88       90      92       94   96   98     00          84   86     88      90   92    94     96     98   00
                  Actual          CPIVAL (Baseline mean)                              Actual        REX (Baseline mean)

                           Unemployment rate                                         Real interest rate on bank loans
 0.10                                                               0.16
 0.08                                                               0.12
 0.06
                                                                    0.08
 0.04
 0.02                                                               0.04
 0.00                                                               0.00
        84   86     88       90      92       94   96   98     00          84   86     88      90   92    94     96     98   00

                  Actual          UR2 (Baseline mean)                                 Actual        RRL (Baseline mean)


Figure 9.7. Tracking performance under dynamic simulation 1984(1)–2001(1):
 CPI annual inﬂation, real wages, loan rate, the nominal and real exchange
  rate, unemployment rate and real interest rate on bank loans. The dotted
                      lines are 95% conﬁdence intervals


• the monetary policy instrument, that is the short-term interest rate,
  represented through the money market interest rate (RSt ).10

    Figure 9.7 shows the tracking performance of the model when we simu-
late from 1984(1) to 2001(1). The variables (listed row-wise from upper left to
bottom right) are annual headline CPI inﬂation ((Pt /Pt−4 ) − 1), the real wage
level (Wt /Pt ), the nominal and real exchange rate Vt and Vt (P Wt /Pt ), respect-
ively, unemployment rate (Ut ) and real interest rate on bank loans (RL−4∆p)t .
The dotted lines are 95% conﬁdence intervals. The model tracks headline CPI
inﬂation fairly well over the period, but it should be noted that dummies are
used to represent active price- and wage-policies during some periods in the
1970s and 1980s.
  10 This is a convenient model simpliﬁcation, implicitly treating the money market rate as

if there is an instant pass-through of a change in the signal rate of the central bank.
9.5 Model performance                                                        219

    Figure 9.8 shows the model’s forecasting properties for the period 1999(1)–
2001(1). The variables (listed row-wise from upper left to bottom right) are
quarterly wage inﬂation, ∆wt , quarterly headline CPI inﬂation, ∆pt , deviation
from PPP, [v − (p − pw)]t , quarterly import price inﬂation, ∆pit , annual head-
line CPI inﬂation, ∆4 pt , unemployment, ut , mainland output, yt , annual output
growth, ∆4 yt , and the nominal exchange rate, vt . The model parameters are
estimated on a sample that ends in 1998(4). These dynamic forecast are con-
ditional on the actual values of the non-modelled variables (ex post forecasts).
However, the model has a high degree of endogeneity as all important variables
describing the domestic economy are explained within the model. The model
exhibits good forecasting properties and the quarterly inﬂation rate ∆pt is in
particular accurately forecasted. However, there is a slight overprediction in
each quarter, and when we look to the annual inﬂation ∆4 pt the eﬀect accumu-
lates over the period. The same is the case for annualised output growth ∆4 yt
over the last 4 quarters (i.e. in 2000). The predicted nominal exchange rate is
constant and tends not to capture the observed changes in vt .
    Figure 9.8 also contains the 95% prediction intervals in the form of ±2
standard errors, as a direct measure of the uncertainty of the forecasts. The
prediction intervals for the annual rate of inﬂation are far from negligible and
are growing with the length of the forecast horizon.
    However, forecast uncertainty appears to be much smaller than similar
results for the United Kingdom: Haldane and Salmon (1995) estimate one
standard error in the range of 3 to 4 12 percentage points, while Figure 9.8
implies a standard error of 1.0 percentage points 4-periods ahead, and 1.2
percentage points 8-periods ahead. One possible explanation of this marked
diﬀerences is that Figure 9.8 understates the uncertainty, since the forecast is
based on the actual short-term interest rate, while Haldane and Salmon (1995)
include a policy rule for interest rate.
    In Bårdsen et al. (2003) an attempt is made to control for this diﬀerence.
To make their estimate of inﬂation uncertainty—which is nearly of the same
order of magnitude as the estimated uncertainty in Figure 9.8—comparable to
Haldane and Salmon (1995), they calculated new forecasts for a model that
includes an equation for the short-term interest rate as a function of the lagged
rates of domestic and foreign annual inﬂation, of nominal exchange rate depre-
ciation, and of the lagged output gap. The results showed a systematic bias in
the inﬂation forecast, due to a marked bias in the forecasted interest rate, but
the eﬀect on forecast uncertainty was very small. Hence it appears that the
diﬀerence in forecast uncertainty stems from the other equations in the mod-
els, not the interest rate policy rule. For example, Haldane and Salmon (1995)
use a Phillips curve equation for the wage growth, and the other equations in
their model are also in diﬀerences, implying non-cointegration in both labour
and product markets. In contrast, Bårdsen et al. (1998) (see Section 6.7.2) ﬁnd
that a core wage–price model with equilibrium-correction terms give very simi-
lar results for Norway and the United Kingdom. Hence it is clearly possible that
220                                  Transmission channels and model properties

   0.050                      0.03                       0.05

   0.025                      0.02                       0.00

                              0.01                      –0.05
   0.000
                              0.00                      –0.10
                  2000                      2000                      2000
            Forecasts    ∆w           Forecasts    ∆p           Forecasts
                                                                ∆[v–(p–pw)]

   0.075                                                 –3.0
                              0.06
   0.050
                                                         –3.5
   0.025                      0.04
                                                         –4.0
   0.000
                              0.02

                  2000                      2000                      2000
            Forecasts  ∆ pi           Forecasts  ∆4 p           Forecasts  ∆u

   12.30                      0.10                       0.10

   12.25                                                 0.05
                              0.05
   12.20
                                                         0.00
                              0.00
   12.15
                                                        –0.05
                  2000                      2000                     2000
             Forecasts y              Forecasts  ∆4 y           Forecasts    v

Figure 9.8. Dynamic forecasts over 1999(1)–2001(1): from top left to bottom
  right: quarterly wage inﬂation, ∆w, quarterly headline CPI inﬂation, ∆p,
  deviation from PPP, [v − (p − pw)], quarterly import price inﬂation, ∆pi,
 annual headline CPI inﬂation, ∆4 p, unemployment, u, mainland output, y,
annual output growth, ∆4 y, and the nominal exchange rate, v. The bars show
                   prediction intervals (±2 standard errors)

a large fraction of the inﬂation forecast uncertainty in Haldane and Salmon’s
study is a result of model mis-speciﬁcation.


9.6        Responses to a permanent shift
           in interest rates
In this section, we discuss the dynamic properties of the full model. In the
simulations of the eﬀects of an increase in the interest rate below we have not
9.6 Responses to a permanent shift in interest rates                                                                                          221

               Deviation in annual inflation                     Relative deviation in real wages             Relative deviation in exchange rate
 0.0005                                               0.001                                          0.000
 0.0000                                               0.000                                         –0.004
–0.0005
                                                     –0.001                                         –0.008
–0.0010
                                                     –0.002                                         –0.012
–0.0015
                                                     –0.003                                         –0.016
–0.0020
–0.0025                                              –0.004                                         –0.020

–0.0030                                              –0.005                                         –0.024
          1994 1995 1996 1997 1998 1999 2000                  1994 1995 1996 1997 1998 1999 2000             1994 1995 1996 1997 1998 1999 2000

          Relative deviation in real exchange rate             Relative deviation in mainland GDP                Deviation in unemployment
  0.005                                               0.000                                          0.004
                                                     –0.001
  0.000                                                                                              0.003
                                                     –0.002
 –0.005                                              –0.003
                                                                                                     0.002
                                                     –0.004
 –0.010
                                                     –0.005
                                                                                                     0.001
 –0.015                                              –0.006
                                                     –0.007                                          0.000
 –0.020
                                                     –0.008
 –0.025                                              –0.009                                         –0.001
          1994 1995 1996 1997 1998 1999 2000                  1994 1995 1996 1997 1998 1999 2000             1994 1995 1996 1997 1998 1999 2000


  Figure 9.9. Accumulated responses of some important variables to a 1 per
               cent permanent increase in the interest rate RSt

incorporated the non-linear eﬀect in the unemployment equation. Hence the
results should be interpreted as showing the impact of monetary policy when
the initial level of unemployment is so far away from the threshold value that
the non-linear eﬀect will not be triggered by the change in policy.
    Figure 9.9 shows the simulated responses to a permanent rise in the interest
rate RSt by 100 basis points, that is, by 0.01, as of 1994(1). This experiment is
stylised in the sense that it is illuminating the dynamic properties of the model
rather than representing a realistic monetary policy scenario. Notwithstanding
this, we ﬁnd that a permanent increase in the signal rate by 1 percentage point
causes a maximal reduction in annual inﬂation of about 0.2% after three years.
    Next, in Kolsrud and Nymoen (1998) it is shown that a main property of the
competing claims model is that the system determining (w − p)t and (pi − p)t
is dynamically stable. However, that prediction applied to the conditional sub-
system, a priori we have no way of telling whether the same property holds for
the full model, where we have taken account of the endogeneity of unemploy-
ment, productivity, the nominal exchange rate, and the output gap (via the
model of GDP output). However, the upper middle and lower left graphs show
that the eﬀects of the shock on the real wage growth, ∆(w − p)t , and on the
change in the real exchange rate, ∆(pi − p)t , disappear completely in the course
of the 24 quarters covered by the graph, which constitute direct evidence that
stability holds also for the full system. The permanent rate of appreciation is
closely linked to the development of the real exchange rate (v − p + pw)t : the
increase in RSt initially appreciates the krone, both in nominal and real terms.
222                                Transmission channels and model properties

After a couple of periods, however, the reduction in ∆pt pushes the real
exchange rate back up, towards equilibrium. Because of the PPP mechanism
in the nominal exchange rate equation, the new equilibrium features nomi-
nal appreciation of the krone, as ∆vt equilibrium corrects. This highlights the
important role of nominal exchange rate determination—a diﬀerent model, for
example, one where ∆vt is not reacting to deviations from interest rate par-
ity, would produce diﬀerent responses. The two remaining graphs depict the
response of the real economy. As real interest rates increase, aggregate demand
falls and the unemployment rate ut increases, which dampens wages and prices.



9.7     Conclusions
The discussion in this chapter is aimed at several ends. First, as macroeconomic
models typically are built up of submodels or modules for diﬀerent parts of
the economy, we have emulated this procedure in the construction of a small
econometric model for Norway. Second, the chapter highlights the potential
usefulness of such a model for the conduct of monetary policy. More speciﬁcally,
we have argued that the success of inﬂation targeting on the basis of conditional
forecasts rests on the econometric properties of the model being used.
    Inﬂation targeting means that the policy instrument (‘the interest rate’) is
set with the aim of controlling the conditional forecast of inﬂation 2–3 years
ahead. In practice, this means that central bank economists will need to form
a clear opinion about (and be able to explain) how the inﬂation forecasts are
aﬀected by diﬀerent future interest rate paths, which in turn amounts to quant-
itative knowledge of the transmission mechanism in the new regime. In this
chapter, we show how econometrics can play a role in this process, as well
as in an established regime of operational inﬂation targeting. In the form-
ative period, the econometric approach will at least provide a safeguard against
‘wishful thinking’ among central bank economists, for example, that formally
introducing an inﬂation target has ‘changed everything’ including the strength
of the relationship between changes in interest rates and the overall price level.
True, opting for inﬂation targeting is an important event in the economy, but
one should take care not to overestimate its impact on the behavioural equations
of a macroeconomic model that has given a realistic picture of the strength of
the transmission mechanism over a sample that includes other, maybe equally
substantive, changes in economic policy. Arguably, it may be a more robust
procedure to regard at least the main part of the transmission mechanism
as unaﬀected initially, and to take a practical view on the forecasting issue,
that is using the model estimated on pre-inﬂation targeting data, and taking
a practical approach to the forecasting issue, that is, using judgement and
intercept corrections. Moreover, as experience with inﬂation targeting grows,
and new data accumulate, the constancy of the model parameters becomes an
9.7 Conclusions                                                               223

obvious hypothesis to test, leading to even more information about how the
economy operates under the new monetary policy regime.
    We have presented a macroeconomic model for Norway, that we view both
as a tool of monetary policy, and as providing a testing bed for the impact of the
policy change on the economy. Conceptually, we partition the (big) simultane-
ous distribution function of prices, wages, output, interest rates, the exchange
rate, foreign prices, and unemployment, etc. into a (much smaller) simultaneous
model of wage and price-setting, and several implied marginal models of the
rest of the macroeconomy. The partitioning, and the implied emphasis on the
modelling of a wage-and-price block, is anything but ‘theory-free’, but reﬂect
our view that inﬂation in Norway is rooted in this part of the economy. More-
over, previous studies—as laid out in this book—have established a certain
level of consensus about how wage and price-setting can be modelled econo-
metrically, and about how, for example, wages react to shocks to the rate of
unemployment and how prices are inﬂuenced by the output gap. Thus, there
is pre-existing knowledge that seems valuable to embed in the more complete
model of the transmission mechanism required for inﬂation targeting.
    In the previous study, Bårdsen et al. (2003), based on data for the period
1966(4)–1996(4), valid conditioning of the wage–price model was established
through the estimation and testing of the marginal models for the feedback
variables, and—with one exception—they found support for super exogeneity of
these variables with respect to the parameters in the core model. These results
does not completely carry over to our current re-estimation of the core model on
a dataset covering the period 1972(4)–2001(1). While the core model sustains
broad speciﬁcation tests, weak exogeneity no longer holds for the exchange
rate with respect to the long-run parameters of the wage–price model. This
implies a loss of estimation eﬃciency, which is only eliminated by simultaneous
estimation of the core model together with the marginal models.
    When we bring together the core model with the marginal models to the
small econometric model for Norway, we show that the model can be used to
forecast inﬂation. As regards the eﬀects of monetary policy on inﬂation target-
ing, simulations indicate that inﬂation can be aﬀected by changing the short-run
interest rate. A 1 percentage point permanent increase in the interest rate leads
to 0.2 percentage point reduction in the annual rate of inﬂation. Bearing in mind
that a main channel is through output growth and the level of unemployment,
it is shown in Bårdsen et al. (2003) that interest rates can be used to coun-
teract shocks to GDP output. Inﬂation impulses elsewhere in the system, for
example, in wage-setting (e.g. permanently increased wage claims), can prove
to be diﬃcult to curb by anything but huge increases in the interest rate.
    Thus we conclude that econometric inﬂation targeting is feasible, and
we suggest it should be regarded as a possible route for inﬂation targeters,
alongside other approaches of modern open-economy macroeconomics.
This page intentionally left blank
                                       10

       Evaluation of monetary
            policy rules

     We now relax the assumption of an exogenous interest rate in order to
     focus on monetary policy rules. We evaluate the performance of diﬀerent
     types of reaction functions or interest rate rules using the small econo-
     metric model we developed in Chapter 9. In addition to the standard
     eﬃciency measures, we look at the mean deviations from targets, which
     may be of particular interest to policy makers. Speciﬁcally, we introduce
     the root mean squared target error (RMSTE), which is an analogue to the
     well known root mean squared forecast error. Throughout we assume that
     the monetary policy rules aim at stabilising inﬂation around an inﬂa-
     tion target and that the monetary authorities also put some weight on
     stabilising unemployment, output, and interest rates. Finally we conduct
     simulation experiments where we vary the weights in the interest rate rules
     as well as the weights of other variables in the loss function of a policy
     maker. The results are summarised by estimating response surfaces on the
     basis of the whole range of weights considered in the simulations.



10.1      Introduction
Taking full account of inﬂation targeting entails that we supplement our model
description of the economy with a monetary rule in terms of an interest rate
reaction function for the central bank. The monetary rule can be forecast-based
or focused on contemporary values of the target variables in the reaction func-
tion. We have chosen to analyse the latter alternative, although our discussion
below is related to Levin et al. (2003), who consider (optimised) forecast-based
interest rate rules which they derive for several diﬀerent models assuming that
the preference function of the central bank depends on the variances of inﬂation
and the output gap.


                                        225
226                                               Evaluation of monetary policy rules

    In this chapter, we evaluate a diﬀerent, and also wider, set of interest rate
rules, using the model of Chapter 9.1 First, the choice of preference function
of Levin et al. (2003) reﬂects what seems to be a consensus view, namely that
inﬂation and output gap stabilisation are the main monetary policy objectives
of a central bank. While we do not dispute the relevance of this view, there are
several arguments for looking at output growth rather than the output gap.
In addition to the inherent possibility of measurement error in the output gap,
as emphasised by Orphanides (2003), there are also theoretical reasons why
output growth might be a sensible objective. Walsh (2003) argues that changes
in the output gap—growth in demand relative to growth in potential output—
can lead to better outcomes of monetary policy than using the output gap.
He demonstrates that such a ‘speed limit policy’ can induce inertia that dom-
inates monetary policy based on inﬂation targeting and the output gap—except
when inﬂation expectations are primarily backward-looking.2 A policy rule
with output growth and inﬂation is therefore used as a baseline. Second, rules
based on diﬀerent criteria are considered: those include criteria like simplicity,
smoothness or gradualism, and fresh information, which all are considered to
be important by policy makers. Finally, we also follow the common practice
of central banks to adopt inﬂation measures that captures underlying inﬂation
rather than the headline consumer price index (CPI) inﬂation.3
    More speciﬁcally, the interest rate rules we evaluate are based on

• output growth and inﬂation—as a baseline
• interest rate smoothing
• open economy information: exchange rates
• real-time information on the state of the economy: unemployment, wage
  growth, and credit growth.4

    The third item is particularly relevant to the small open economy—and that
perspective has not previously been emphasised either in the theoretical or the
empirical literature.
    The diﬀerent interest rules are presented in Section 10.2. Section 10.3 gives
an overview of the basis of three diﬀerent sets of evaluation criteria. We evalu-
ate the rules along the dimensions ﬁt, relative losses, and optimality, all derived
from the counterfactual simulations. The ﬁt is evaluated on standard eﬃciency
measures as well as using a new measure called root mean squared target errors

  1 This chapter draws on Akram et al. (2003).
   2 Walsh’s results are based on simulations from a calibrated stylised New-Keynesian model.

The forecasting properties of the New Keynesian Phillips curve are compared with those of
alternative inﬂation models (on data for Norway and for the Euro area) in Chapter 8.
   3 The model of Chapter 9 is therefore supplemented with a technical equation linking

headline inﬂation (∆pt ) and underlying inﬂation (∆put ), which is the inﬂation measure
entering the reaction functions of this chapter. ∆put measures inﬂation net of changes in
energy prices and indirect taxes.
   4 These are ‘real-time’ variables in the sense that reliable current-quarter information is

either available or arrives with only a short time lag; see Orphanides (2001).
10.2 Four groups of interest rate rules                                                         227

(RMSTEs), which takes into account both the bias (i.e. the average deviation
from target) and the variability of selected report variables, such as alternative
measures of inﬂation (e.g. headline CPI inﬂation, underlying inﬂation), and
output growth etc. Relative losses summarise the performance of any given
rule relative to a benchmark rule as we vary the monetary authorities’ weight
on output variability and interest rate variability. Finally, in Section 10.3.4
we trace out optimal rules using an estimated response surface based on
counterfactual simulations over a grid range of weights in the instrument rule
and with varying parameters in the loss function.



10.2         Four groups of interest rate rules
The rules we consider are of the type

               RSt = ωr RSt−1 + (1 − ωr )(π ∗ + RR∗ ) + ωπ (π̂t+θ − π ∗ )
                           
                     + ωy (∆            ∗
                             4 y t+κ − g ) + ωreal zreal,t + ωopen zopen,t ,
                                              y

where RSt denotes the short-term nominal interest rate, RR∗t is the equilibrium
real interest rate, π̂t+θ is a model-based forecast of inﬂation (i.e. ∆4 pu) θ periods
ahead, π ∗ is the inﬂation target for ∆4 put , ∆  4 y t+κ is a model-based forecast
                                         ∗
of output growth κ periods ahead, gy is the target output growth rate, zreal,t
denote real-time variables and zopen,t denotes open economy variables (typically
the real exchange rate). When the target horizons θ and κ are set to zero, the
rules are based on contemporary values of output and inﬂation. In Section 10.3.4
the optimality of the diﬀerent rules are evaluated in terms of welfare losses based
on minimising the loss function

                                  £(λ) = V [πt ] + λV [∆4 yt ],

where V [·] denotes the unconditional variance and πt is the inﬂation measure, in
our case ∆4 put . A large number of possible variations over this theme obtains by
combining diﬀerent rules and loss functions, cf. the survey in Taylor (1999).5
The interest rate rules we consider are speciﬁed in Table 10.1 and they fall

  5 A recent example is Levin et al. (2003). In their study of the United States economy they

consider (optimised) forecast-based interest rate rules of the type
                                                                                gap
             RSt = ωr RSt−1 + (1 − ωr )(RR∗t + π̂t+θ ) + ωp (π̂t − π ∗ ) + ωy ŷt+κ ,
        gap
where ŷt+κ is a model-based forecast of the output level κ periods ahead and all other symbols
are as deﬁned in the main text.
   For any given values of (RR∗ , π ∗ ) each rule is fully described by the triplet (ωr , ωp , ωy ),
and Levin et al. (2003) derive the parameters of such interest rate rules for ﬁve diﬀerent
models under the assumption that the Central Bank’s preference function is given by
       £(λ) = V [πt ] + λV [ytgap ],                             2
                                        subject to V [∆RSt ] ≤ σ̄∆RS ,    λ ∈ (0, 1/3, 1, 3).
This loss function is then minimised subject to an upper bound on the volatility of the interest
        2
rate, σ̄∆rs .
228                                                 Evaluation of monetary policy rules

                                     Table 10.1
            Interest rate rules used in the counterfactual simulations,
                           as deﬁned in equation (10.1)

Variables                    RSt−1         ∆4 put ∆4 yt       vrt       u       ∆4 w ∆4 cr
                            ∗          ∗        ∗
Target/trigger             π + RR           π           gy∗   vr   ∗
                                                                        u   ∗     ∗
                                                                                 gw      ∗
                                                                                        gcr
Trigger value                   0.06       0.025      0.025    0       0.04     0.045   0.05
Weights                         ωr          ωπ         ωy     ωvr       ωu       ωw     ωcr
  Flexible           FLX                    1.5        0.5
  Strict             ST                     1.5
  Smoothing          SM         0.75        1.5        0.5
  Real exchange      RX                     1.5        0.5    0.33
   rate
  Unemployment       UR                     1.5                        −1.00
  Wage growth        WF                     1.5                                 1.00
  Credit growth      CR                     1.5                                         0.20

 RSt = ωr RSt−1 + (1 − ωr )(π ∗ + RR∗ ) + ωπ (∆4 put − π ∗ ) + ωy (∆4 yt − gy∗ )
        + ωvr (vrt − vr∗ ) + ωu (ut − u∗ ) + ωw (∆4 wt − gw
                                                          ∗                    ∗
                                                            ) + ωcr (∆4 crt − gcr ).

into four categories. The ﬁrst category has two members: (1) a variant of the
standard Taylor rule for a closed economy (‘ﬂexible’ rule) where interest rates
respond to inﬂation and output (FLX in the table), and (2) a strict inﬂation
targeting rule where all weight is put on inﬂation (ST). The next class of rules
introduces interest rate smoothing (‘smoothing’ rule), where we also include the
lagged interest rate (SM), and the third category contains an ‘open economy’
rule, in which the interest rate responds to the real exchange rate, vrt (RX).
Similar rules have previously been used in, for example, Ball (1999) and Batini
et al. (2001). The fourth category includes real-time variables, where we use
unemployment (UR), wage growth (WF), and credit growth (CR) as alternative
indicators for the state of the real economy. The motivation for using real-
time variables is well known. As discussed in the introduction, the output gap
is vulnerable to severe measurement problems, partly due to a lack of con-
sensus about how to measure potential output, motivating our choice of output
growth, following Walsh (2003). However, another source of uncertainty is data
revisions. In practice, statistical revisions of output would also render output
growth subject to this source of uncertainty, so using output growth rates does
not necessarily remove the measurement problem in real time. The alternative
‘real-time’ interest rate rules use variables, observed with greater timeliness,
which are less vulnerable to later data revisions.
    The ﬁrst lines of Table 10.1 contain the diﬀerent variables (x, say), their
associated target parameters (h∗ ) and the assumptions about the target
10.2 Four groups of interest rate rules                                                 229

parameter’s trigger values. Each rule correspond to a line in Table 10.1 and
the weights attached to the diﬀerent variables are shown in the columns.6 In
Table 10.1 gw and gcr are the target growth rates for wages and credit.
    All the interest rate rules considered can be written as a special case of
equation (10.1). The ﬁrst line in equation (10.1) deﬁnes the standard FLX and
SM rules. The second line deﬁnes the rule which responds directly to the real
exchange rate (rule RX). And ﬁnally, in line three, we include the diﬀerent
‘real-time’ variables which are potential candidates to replace output growth
in the interest rate rule—registered unemployment (UR), annual wage growth
(WF), or annual credit growth (CR)—cf. Table 10.1.

  RSt = ωr RSt−1 + (1 − ωr )(π ∗ + RR∗ ) + ωπ (∆4 put − π ∗ ) + ωy (∆4 yt − gy∗ )
        + ωvr (vrt − vr∗ )
        + ωu (ut − u∗ ) + ωw (∆4 wt − gw
                                       ∗                     ∗
                                         ) + ωcr (∆4 crt − gcr )           (10.1)

    In order to facilitate the comparison between the diﬀerent interest rate rules
we maintain the weights on inﬂation (ωπ = 1.5) and output growth (ωy = 0.5)
in all rules where applicable in Table 10.1. Note that these values alone deﬁne
the interest rate rule denoted FLX. Hence, the FLX rule serves as a benchmark
for comparison with all other rules in Table 10.1.


10.2.1       Revisions of output data: a case for
             real-time variables?
A ﬁrst version of the quarterly national accounts (QNA) data is published by
Statistics Norway shortly after the end of each quarter, based on a limited
information set. As more information accrues, the data are revised and the
ﬁnal ﬁgures appear with a 18-months lag. Often there are substantial discrep-
ancies between the ﬁrst and the ﬁnal quarterly data. The Norwegian QNA
show that on average for the period 1995–99 growth in GDP for Mainland
Norway was revised up by almost 1 percentage point per year, and, for
example, the output growth for 1999 was adjusted from 1.1% to 2.7%. In
Figure 10.1(a) we plot the growth rates for output according to the two
sources together. The graphs reveal substantial revisions of output growth in the
Norwegian mainland economy. The estimated change in interest rates accord-
ing to the standard Taylor rule in Table 10.1 (FLX) is shown in Figure 10.1(b).
Since the data revisions alone may induce up to 50 basis points change in the
interest rate, there is a clear case for using interest rate rules with real-time
variables.

  6 For the real exchange rate vr the trigger value of the target is 0. Hence (vr − vr ∗ ) is

equivalent to deviations from purchasing power parity (PPP), (v + pw − p), cf. Section 9.3.1.
230                                                 Evaluation of monetary policy rules


      (a)           MA(∆4ytold)               (b)           FLXtold
            0.06                                    0.065
                    MA(∆4ytnew)                             FLXtnew
            0.05                                    0.060
            0.04                                    0.055
            0.03
                                                    0.050
            0.02
                                                    0.045
            0.01
                                                    0.040
              1995 1996 1997 1998 1999 2000            1995 1996 1997 1998 1999 2000

 Figure 10.1. Old and revised data for output in the mainland economy and
  corresponding Taylor-rates, 1990(1)–2000(4). (a) Old and revised data for
  output growth in the Norwegian mainland economy, ﬁve quarters centred
   moving average. (b) Standard Taylor-rule interest rates from using ﬁve
 quarters centred moving averages of old and revised data for output growth

10.2.2             Data input for interest rate rules
Figure 10.2 shows the variation in the variables we use in the diﬀerent
interest rate rules over the period 1995(1) to 2000(4). Underlying inﬂation
∆4 put is headline inﬂation corrected for changes in excise duties and energy
prices, and is clearly less volatile than headline CPI inﬂation during the 1990s,
cf. Figure 10.2(a). Output growth picked up towards the end of the 1990s,
and during 1997–98 we see from Figure 10.2(b) that the four-quarter output
growth rate shifts rather abruptly. Figure 10.2(c) shows the development in
three variables used in the ‘real-time’ rules, that is, the rate of unemployment,
ut , annual wage growth, ∆4 wt , and annual growth in nominal domestic credit
∆4 ncrt . The potential volatility in the interest rate implied by a real-time rule
based on wage growth can be anticipated by the hike in wages in 1998. Finally,
Figure 10.2(d) shows the deviations from PPP, vt − (pt − pwt ), which we use
in the ‘open economy’ interest rate rules.


10.2.3             Ex post calculated interest rate rules
To get a feel for the properties and implications of the diﬀerent monetary policy
rules in Table 10.1, we have calculated ex post interest rates corresponding to
the diﬀerent rules, by inserting the actual outcomes of the variables into the
various versions of equation (10.1). The results are shown in the four charts in
Figure 10.3. The upper left panel shows the realised interest rate together with
the implied interest rate of following the ﬂexible rule FLX. Following the rule
would have meant a much higher interest rate during 1997, as a consequence
of the spurt in output growth, shown in Figure 10.2(b). The strict rule ST
of the upper right panel is basically reﬂecting the development of underly-
ing inﬂation of Figure 10.2(a), while the smoothing rule SM appears more
10.3 Evaluation of interest rate rules                                                                 231

(a) 0.045                                             (b)
                 ∆4pt    ∆4put                               0.08      ∆4yt
    0.040                                                    0.07
      0.035                                                  0.06
                                                             0.05
      0.030
                                                             0.04
      0.025                                                  0.03
      0.020                                                  0.02
                                                             0.01
      0.015
                                                             0.00
      0.010                                                 –0.01
          1995   1996   1997     1998   1999   2000             1995   1996    1997   1998   1999   2000

(c)    0.08                                           (d) 0.04
                 ∆4wt   ∆4ncrt     ut                                  vt–(pt–pwt)
       0.07                                               0.03
                                                          0.02
       0.06                                               0.01
       0.05                                               0.00
                                                         –0.01
       0.04                                              –0.02
                                                         –0.03
       0.03                                              –0.04
       0.02                                              –0.05
         1995    1996   1997     1998   1999   2000            1995    1996    1997   1998   1999   2000

 Figure 10.2. Data series for the variables which are used in the Taylor rules,
    ‘real time’-rules and open economy-rules respectively, over the period
  1995(1)–2000(4). (a) Taylor rules: headline inﬂation, ∆4 pt , and underlying
inﬂation, ∆4 put . (b) Taylor rules: output growth, ∆4 yt . (c) ‘Real time’ rules:
unemployment, ut , wage growth, ∆4 wt , and credit growth ∆4 ncrt . (d) Open
             economy rules: deviations from PPP, vt − (pt − pwt )

volatile, again reﬂecting the output growth volatility—even though the rule
implies considerable interest rate smoothing. Of the real-time rules, unemploy-
ment and credit growth appear the smoothest, while the wage growth rule WF
would imply a very contractive response to the wage hikes. Finally, the real
exchange rate rule RX implies quite volatile interest rate responses. Of course,
these responses are only indicatory, as there is no feedback onto the variables
entering the diﬀerent rules. In later sections of this chapter we will investi-
gate the properties of these rules in counterfactual model simulations, where
we allow the economy to react to changes in monetary policy according to the
prescribed interest rate rules, and the changed outcome for the set of variables
in each rule will feed back and change the interest rate according to the rule.


10.3             Evaluation of interest rate rules
10.3.1            A new measure—RMSTEs
Since we set the monetary policy instrument RSt in order to make a target
variable xt stay close to its target level x∗ , it makes sense to evaluate the rules
according to how well they achieve their objective. In the theoretical literature,
232                                                Evaluation of monetary policy rules

  0.100     rs     FLX                           0.100     ST     SM

  0.075                                          0.075


  0.050                                          0.050


  0.025                                          0.025
     1995   1996    1997   1998   1999   2000       1995   1996   1997   1998   1999   2000

  0.100     RX     UR                            0.100
                                                           WF     CR

  0.075                                          0.075


  0.050                                          0.050


  0.025                                          0.025
     1995   1996    1997   1998   1999   2000       1995   1996   1997   1998   1999   2000

 Figure 10.3. Ex post calculations of the implied interest rates from diﬀerent
             interest rate rules over the period 1995(1)–2000(4).


however, policy evaluation is often based on the unconditional variance of xt ,
denoted V [x]. An alternative measure which puts an equally large weight on
the bias of the outcome, that is, on how close the expected value of xt is to
the target x∗ , is the RMSTE. Since the bias could diﬀer considerably between
diﬀerent monetary policy rules, it is of interest to investigate its eﬀect in small
samples. If we estimate the expected level E[x] by its sample mean x̄, the
measure can be written as
                          
                                                  "
                             1
                                T
            RMSTE(x) =    !        (xt − x ) = V
                                           ∗ 2         [x] + (x̄ − x∗ )2 ,
                            T t=1

which is the form we will adopt in the following sections.


10.3.2           RMSTEs and their decomposition
Table 10.2 shows the results from a series of counterfactual model simulations.
For each interest rate rule we show the bias, standard deviation, and RMSTE
measured relative to a baseline scenario. The baseline is the results we obtain
for the variables from a model simulation where the interest rate is kept equal
to actual sample values.7
  7 In the baseline simulation the model residuals have been calibrated such that the actual

values of the data are reproduced exactly when we simulate the model with historical values
for the short-run interest rate, RSt . For each of counterfactual simulations with the diﬀerent
10.3 Evaluation of interest rate rules                                                   233

    Flexible and strict rules The least volatile development in interest rates
is seen to follow from the strict targeting rule (ST). The sharp rise in output
growth in 1997 is reﬂected in the volatility of the interest rates implied by the
ﬂexible rule (FLX) and the smoothing rule (SM). The FLX rule puts three times
more weight on inﬂation than on output growth. Table 10.2 shows that the FLX
rule gives a slightly more expansive monetary policy compared with the baseline
over the period 1995(1)–2000(4): a lower interest rate and weaker exchange rate
give rise to somewhat higher output growth (relative bias greater than one) and
higher inﬂation growth (relative bias less than one). The explanation is that
while average output growth in the baseline scenario is higher than the target
growth of 2.5%, average headline and underlying inﬂation is lower. Thus the
relative bias from a more expansionary monetary policy will become larger than
one for output growth (moving output growth further away from the target)
and smaller than one for inﬂation (moving inﬂation closer to the target). The
relative variability of underlying inﬂation and output growth is 11% lower than
in the baseline, while interest rates and exchange rates show greater variability.
    The strict targeting rule ST leads to less variability in interest rates since
the weight on output growth is reduced to zero. The exchange rate is somewhat
weaker. This contributes to reducing the bias in underlying inﬂation compared
to the FLX scenario.


   Smoothing Giving the lagged interest rate in the (smoothing) rule SM a
positive weight ωr = 0.75, gives rise to a considerably more expansionary mon-
etary policy. This reduces the bias for underlying inﬂation and gives a negative
bias for headline inﬂation, which means that inﬂation on average is above the
target of 2.5% in the SM scenario.


    Open economy rules The RX rule puts some weight on the real exchange
rate, vrt , such that a weaker real exchange rate leads to a tightening of monetary
policy. In addition to its direct contractionary eﬀect, the increase in interest
rates also partly counteracts the weakening of the exchange rate and dampen
the expansionary eﬀects initially working through the exchange rate channel.
In our simulation the RX scenario leads on average to a less expansionary
monetary policy than the baseline scenario, and a relative bias larger than one
for headline as well as underlying inﬂation. The exchange rate is more stable
exchange rate (less variability in vt ) at a cost of higher variability in interest
rate changes.


interest rate rules we maintain these add factors over the simulation period. Thus, we isolate
the partial eﬀect from changing the interest rate rule while maintaining a meaningful com-
parison with the historical sample values. In the counterfactual simulation we also make the
usual assumption that the models’ parameters are invariant to the proposed changes in the
interest rate rule across the period from 1995(1) to 2000(4).
234                                                  Evaluation of monetary policy rules

                                    Table 10.2
                    Counterfactual simulations 1995(1)–2000(4)
                                     Simstart 1995(1), evaluation over 1995(1)–2000(4)

                             ∆4 pt     ∆4 put   ∆ 4 yt   ut    ∆4 crt   vt     ∆RSt      RSt

Policy rule     Target/       0.025      0.025 0.025     0.040 0.050     0       0       0.06
                trigger
Baseline        Mean         0.023  0.019 0.027  0.032 0.074 0.013              0.000  0.055
 (no rule)      bias        −0.002 −0.006 0.002 −0.008 0.024 0.013              0.000 −0.005
                sdev         0.006  0.005 0.023  0.009 0.023 0.017              0.007  0.013
                RMSTE        0.007  0.008 0.023  0.012 0.033 0.022              0.007  0.014
Flexible rule   Mean          0.023      0.019 0.028     0.032 0.075 0.016 −0.001        0.052
  FLX           Rel. bias     0.94       0.99   1.24     1.03  1.03 1.19 −2.13           1.63
                Rel. sdev     1.06       0.89 0.83       0.95  1.02 1.35    1.86         0.76
                Rel.          1.05       0.95 0.83       0.99  1.03 1.30    1.86         0.91
                 RMSTE
Strict rule     Mean          0.024      0.020 0.027     0.032 0.076 0.017 0.000         0.052
  ST            Rel. bias     0.80       0.95   1.21     1.04  1.06 1.28 −0.72           1.78
                Rel. sdev     1.01       0.90   0.91     0.95  0.96 1.22   0.76          0.52
                Rel.          0.99       0.93   0.91     0.99  1.01 1.25   0.76          0.78
                 RMSTE
Smoothing       Mean          0.025      0.021 0.028     0.031 0.081 0.028 −0.001        0.042
  rule SM       Rel. bias     0.04       0.75   1.63     1.14  1.26 2.08 −3.70           3.88
                Rel. sdev     1.02       0.88   0.83     0.93  1.12 1.38    1.46         1.12
                Rel.          0.99       0.81   0.84     1.03  1.19 1.68    1.47         1.69
                 RMSTE
Real exchange   Mean          0.023      0.019 0.027     0.032 0.074 0.014 0.000         0.054
  rate RX       Rel. bias     1.05       1.02   1.13     1.01  1.00 1.05 −1.61           1.24
                Rel. sdev     1.06       0.92   0.85     0.97  1.02 1.20   2.13          0.87
                Rel.          1.06       0.97   0.85     0.99  1.01 1.15   2.13          0.92
                 RMSTE
Unemployment Mean             0.022      0.018 0.026     0.033 0.069 0.006      0.000 0.062
 UR          Rel. bias        1.75       1.20   0.62     0.93  0.80 0.46        1.06 −0.34
             Rel. sdev        0.97       0.75   0.90     0.91  0.87 1.17        0.93  0.80
             Rel.             1.05       1.02   0.90     0.91  0.83 0.97        0.93  0.76
              RMSTE
Wage growth     Mean          0.023      0.019 0.027     0.032 0.073 0.012      0.000    0.057
 WF             Rel. bias     1.26       1.07   1.01     0.99  0.94 0.89        0.01     0.73
                Rel. sdev     1.06       0.85   0.90     0.93  1.03 1.27        2.09     1.08
                Rel.          1.07       0.98   0.90     0.96  0.99 1.15        2.09     1.05
                 RMSTE
Credit growth   Mean          0.023      0.019 0.027     0.032 0.073 0.012 0.000         0.056
  CR            Rel. bias     1.19       1.05   0.94     1.00  0.96 0.94 −0.60           0.94
                Rel. sdev     1.03       0.83   0.84     0.93  0.96 1.32   1.92          0.86
                Rel.          1.05       0.96   0.84     0.96  0.96 1.19   1.92          0.87
                 RMSTE

Note: RMSTE and its decomposition in bias, standard deviations and RMSTE of the
diﬀerent interest rate rules, relative to the baseline scenario (with interest rates kept equal
to actual sample values).
10.3 Evaluation of interest rate rules                                       235

    Real-time interest rate rules When the interest rate rule responds to
changes in unemployment we observe an early contraction of monetary pol-
icy compared with the FLX rule. This is due to the fact that in the model
the unemployment rate follows Okun’s law when demand changes, and thus
shows substantial persistence. Hence we observe a gradual tightening of mon-
etary policy under the UR scenario over the simulation period as unemployment
falls under the trigger level (of 4%) and on average we observe that this rule
has the highest average interest rate level across all alternatives. This runs
together with the lowest relative bias in output growth and unemployment
and the highest relative bias in inﬂation. In the two alternative real-time rules
the interest rate responds to wage growth ∆4 wt (WF rule) and credit growth
∆4 crt (CR rule), respectively. The WF rule gives rise to more volatile inter-
est rates than the FLX rule and also to a slightly more contractive monetary
policy over the simulation period. The observed volatility in inﬂation is, how-
ever, at the same level as for the FLX rule. The credit growth based rule CR
shares many of the characteristics observed for the ﬂexible rule FLX, except
that the interest rate is higher in particular towards the end of the simulation
period.

    Comparing the rules The main features of the counterfactual simula-
tions can be seen in Figure 10.4. For each monetary policy rule the ﬁgure shows
the deviations from the baseline scenario (with ‘exogenous’ short-term interest
rates). Figure 10.4 shows that most of the rules give a more expansive monetary
policy with lower interest rates in the ﬁrst two years, compared with the base-
line scenario. The initial easing averages around 2 percentage points (pp) and
it is followed by a tightening of more than 3 pp. It is hard to evaluate details
on the individual rules from the ﬁgure although we see that the smoothing rule
SM appears to give rise to the most expansionary monetary policy over the
simulation period.
    When we evaluate the implications for inﬂation, output and unemployment,
we see from Figure 10.4 that the SM scenario and the UR scenario form the
boundaries of a corridor for the relative responses for each rule compared with
the data. For inﬂation the width of this corridor is about plus/minus 0.5 pp
relative to actual inﬂation. Output growth deviates from actual growth with
about plus/minus 2 pp, and unemployment deviates from actual with about
plus/minus 0.7 pp. The width of the corridor would be considerably smaller
if we take out the SM scenario. Note, however, that the parameters in the
monetary policy rules were chosen to illustrate some main features of each
rule, and are not necessarily optimising the rule.
    It is also of interest to compare the counterfactual simulations with the
actual data as shown in Figure 10.2. Output growth increases sharply during
1997 to levels above their assumed steady-state growth rate of 2.5%, and this
is a driving force behind the tightening of monetary policy during 1997 and
1998 in the counterfactual simulations in Figure 10.4, where interest rates
236                                               Evaluation of monetary policy rules

  0.04 Interest rate                           0.006 Underlying inflation
  0.03                                         0.004
  0.02
  0.01                                         0.002
  0.00                                         0.000
 –0.01                                        –0.002
 –0.02
 –0.03                                        –0.004
 –0.04                                        –0.006
     1995 1996 1997    1998   1999    2000         1995       1996   1997   1998      1999   2000

 0.016 Output growth                              0.03   Nominal credit growth
 0.012
                                                  0.02
 0.008
 0.004                                            0.01
 0.000
                                                  0.00
–0.004
–0.008                                         –0.01
–0.012
                                               –0.02
–0.016
–0.020                                         –0.03
     1995 1996 1997    1998   1999    2000         1995       1996   1997   1998      1999   2000

  0.05 Exchange rate                            0.04 Real exchange rate
  0.04                                          0.03
  0.03                                          0.02
  0.02                                          0.01
  0.01
                                                0.00
  0.00
 –0.01                                         –0.01
 –0.02                                         –0.02
 –0.03                                         –0.03
 –0.04                                         –0.04
     1995 1996 1997    1998   1999    2000         1995 1996 1997 1998                1999   2000

             FLX        ST           UR      WF          SM          RX          CR

   Figure 10.4. Counterfactual simulations 1995(1)–2000(4) for each of the
  interest rate rules in Table 10.1. The variables are measured as deviations
                           from the baseline scenario


on average rise towards a peak level of 8%. Interestingly, as can be seen
from Figure 10.3, there was a marked tightening of actual monetary policy,
but this happened one year later when interest rates were increased sharply
under the ﬁxed exchange rate regime in an attempt to resist speculative
attacks at the Norwegian krone. The actual monetary policy was eased later
in 1998 and at this point we note in Figure 10.4 that there are consi-
derable diﬀerences between the interest rates implied by the diﬀerent interest
rate rules. This motivates us to make a further assessments of the rules by
turning to their implications for the variables in the monetary authorities’
loss function.
10.3 Evaluation of interest rate rules                                         237

10.3.3      Relative loss calculations
So far we have summarised the counterfactual results through the eﬀects on
the mean and variability of a number of key variables. In the following we will
investigate how the interest rate rules in Table 10.1 perform when we select
diﬀerent weights λ, φ in the monetary authorities’ loss function. We write the
loss function as a linear combination of the unconditional variances of output
growth ∆4 yt and underlying inﬂation, ∆4 put , with a possible extension in terms
of the variance of interest rate changes ∆RSt .
                 £(λ, φ) = V [∆4 put ] + λV [∆4 yt ] + φV [∆RSt ].          (10.2)
    In Table 10.3 we report the square root of the loss according to
equation (10.2) for diﬀerent values of central bank preference parameters
(i.e. the weights λ and φ). The loss calculations reported in the upper part
of Table 10.3 are calculated on the basis of the pure measures of volatility
(sdev’s). The lower part of Table 10.3 reports similar loss calculations based on
the RMSTEs. The ﬁrst column in the table shows the results from the ﬂexible
rule FLX relative to the baseline scenario where we assume that interest rates
are kept at their historical values.
    Let us ﬁrst consider losses based on sdev’s for the FLX rule. When we assume
that the central bank pays no regard to interest rate variability (i.e. when φ = 0)
we ﬁnd that the loss is reduced by 11–17% under the FLX rule depending on λ.
This is because both underlying inﬂation and output growth show less variabil-
ity under the FLX rule (cf. columns two and three in Table 10.2) compared to
under the baseline alternative. The loss reduction grows larger with increased
weight λ on output. If λ is set to 0 the loss reductions is 11%, whereas λ = 2,
leads to a loss reduction. This is because the FLX rule gives rise to a larger
relative reduction in variability for output than for underlying inﬂation. As
we increase the weight φ on interest rate variability from 0 to 1, we ﬁnd that
relative losses increase from 0.89 to 1.62 when λ = 0, since the variability in
interest rate changes is 86% higher under the FLX rule compared with the base-
line. As more weight is put on the variability of output, the partial eﬀect from
interest rate variability counts less and we ﬁnd that when λ = 2, relative losses
only increase from 0.83 to 0.91 as we increase φ from 0 to 1. We ﬁnd qualita-
tively similar results when we apply RMSTEs but since the bias for underlying
inﬂation is relatively larger compared with that for output growth, we ﬁnd the
largest diﬀerences between losses based on RMSTE compared with those based
on sdev for small values of λ.
    The strict rule ST puts zero weight on output growth and gives rise to con-
siderably less variation in interest rate changes compared with the FLX rule and
also compared with the baseline scenario. This puts the ST rule at an advant-
age as we increase the weight on interest rate variability φ from 0 to 1. When
we span the relative loss measures in 3-dimensional plots in Figures 10.5(a) and
(b) we note that the ST rule in both cases gives rise to a relatively ﬂat surface
238                                           Evaluation of monetary policy rules

                                   Table 10.3
 Counterfactual simulations 1995(1)–2000(4). Loss function evaluation based
 on relative sdev (upper half) and relative RMSTE (lower half)—relative to
          the baseline scenario (actual observations of interest rates)
Central Bank       FLX         ST      SM         RX         UR    WF       CR
preferences

λ      φ

Loss based on relative sdev
0      0            0.894     0.895   0.876      0.915    0.752    0.851   0.834
0      0.1          1.125     0.873   1.003      1.218    0.785    1.167   1.104
0      0.5          1.475     0.829   1.212      1.654    0.846    1.612   1.495
0      1.0          1.617     0.807   1.301      1.828    0.873    1.788   1.652
0.5    0           0.836      0.908   0.836      0.856    0.885    0.891   0.835
0.5    0.1         0.867      0.906   0.852      0.898    0.885    0.928   0.868
0.5    0.5         0.972      0.896   0.908      1.034    0.888    1.054   0.981
0.5    1.0         1.073      0.886   0.965      1.162    0.891    1.173   1.088
1      0           0.833      0.909   0.834      0.853    0.891    0.893   0.835
1      0.1         0.850      0.908   0.842      0.876    0.891    0.913   0.853
1      0.5         0.910      0.903   0.874      0.955    0.892    0.985   0.918
1      1.0         0.975      0.897   0.910      1.039    0.894    1.062   0.987
2      0           0.832      0.909   0.832      0.852    0.894    0.894   0.835
2      0.1         0.840      0.909   0.837      0.863    0.894    0.904   0.844
2      0.5         0.873      0.906   0.854      0.907    0.894    0.943   0.879
2      1.0         0.911      0.903   0.874      0.956    0.895    0.988   0.919

Loss based on relative RMSTE
0      0            0.946  0.926      0.807      0.972    1.024    0.979   0.961
0      0.1          1.057  0.913      0.883      1.120    1.016    1.120   1.078
0      0.5          1.312  0.877      1.061      1.447    0.993    1.433   1.346
0      1.0          1.465  0.850      1.171      1.638    0.977    1.617   1.505
0.5    0           0.856      0.915   0.835      0.876    0.920    0.912   0.860
0.5    0.1         0.883      0.913   0.849      0.912    0.920    0.944   0.889
0.5    0.5         0.975      0.904   0.901      1.033    0.920    1.055   0.987
0.5    1.0         1.066      0.894   0.953      1.150    0.921    1.163   1.084
1      0           0.846      0.914   0.837      0.866    0.909    0.905   0.849
1      0.1         0.861      0.913   0.845      0.886    0.909    0.923   0.866
1      0.5         0.917      0.908   0.875      0.960    0.910    0.990   0.925
1      1.0         0.978      0.902   0.909      1.038    0.910    1.062   0.990
2      0           0.840      0.913   0.839      0.860    0.902    0.901   0.843
2      0.1         0.849      0.913   0.843      0.870    0.902    0.910   0.852
2      0.5         0.880      0.910   0.859      0.912    0.903    0.948   0.885
2      1.0         0.916      0.907   0.879      0.959    0.903    0.990   0.924

£(λ, θ) = m[∆4 put ] + λm[∆4 yt ] + φm[∆RSt ]
             for λ ∈ (0, 0.5, 1, 2), φ ∈ (0, 0.1, 0.5, 1),    m = (sdev, RMSTE).
10.3 Evaluation of interest rate rules                                        239

    (a)
          1.0 1.5




                                               1.0 1.5
           FLX




                                                 ST
                2                        1.0         2                  1.0
                     1        0.5                         1     0.5
                                                              
          1.0 1.5




                                               1.0 1.5
            SM




                                                 RX
                2                        1.0         2                  1.0
                     1        0.5                         1     0.5
                                                              
          1.0 1.5




                                               1.0 1.5
                                                 WF
            UR




                2                        1.0         2                  1.0
                     1        0.5                         1     0.5
                                                              
          1.0 1.5
            CR




                2                        1.0
                     1        0.5
                              

    (b)
          1.0 1.5




                                               1.0 1.5
            FLX




                                                  ST




                2                        1.0         2                  1.0
                     1        0.5                         1     0.5
                                                              
          1.0 1.5




                                               1.0 1.5
            SM




                                                 RX




                2                        1.0         2                  1.0
                     1        0.5                         1     0.5
                                                              
          1.0 1.5




                                               1.0 1.5
                                                 WF
            UR




                2                        1.0         2                  1.0
                     1        0.5                         1     0.5
                                                              
          1.0 1.5
            CR




                2                        1.0
                     1        0.5
                              

 Figure 10.5. Counterfactual simulations 1995(1)–2000(4). (a) Loss function
    evaluation based on relative sdev (relative to the baseline scenario).
   (b) Loss function evaluation based on relative RMSTE (relative to the
                             baseline scenario).
                   £(λ, φ) = m[πt ] + λm[∆yt ] + φm[∆rt ]
                                 for λ ∈ (0, 0.5, 1, 2), φ ∈ (0, 0.1, 0.5, 1),
                                    m = (sdev, RMSTE).
240                                         Evaluation of monetary policy rules

compared with the other rules, which means that relative losses by adopting
this rule are constant across values assigned to the central bank preferences
parameters.
    The smoothing rule SM gives rise to a more expansive monetary policy,
with higher output growth and inﬂation. This entails an increase in the bias of
output growth and a decrease in the bias for inﬂation, which we would expect to
give diﬀerent results depending on whether we calculate losses based on sdev’s
or RMSTEs. As we increase φ the relative loss increases less sharply than the
FLX rule due to the smaller volatility in interest rate changes under smoothing.
Figures 10.5(a) and (b) show that SM does well compared to many of the other
rules although the surface is far from being as ﬂat as, for example, the strict
ST rule.
    The real exchange rate based RX rule gives increased interest rate volatility,
and as we increase φ this translates into the largest relative loss compared
with the other rules. The RX rule gives a slightly more contractive monetary
policy compared with FLX, and the relative loss increases for all values of λ (no
matter which measure we base the loss calculations on). The RX stands out in
Figures 10.5(a) and (b) showing the largest relative loss as we increase φ from
0 to 1. For large values of λ this ‘open economy’ rule performs as well as or
even better than many of the other rules.
    Finally, we compare the results for the ‘real-time’ rules where output growth
is replaced by either unemployment, wage growth, or credit growth. The unem-
ployment based rule, UR, shows a remarkably ﬂat surface in Figures 10.5(a)
and (b). This is due to the fact that interest rate volatility is almost as low
as in the case with the strict rule ST. The UR rule gives rise to the most
contractionary monetary policy, and this is why that rule has a markedly dif-
ferent impact depending on whether the loss function is based on sdev’s or
RMSTEs. This is mainly due to the increase in the inﬂation bias under a more
contractionary monetary policy.
    When we use wage growth or credit growth as basis for the ‘real-time’ rule
we ﬁnd higher interest rate volatility and this translates into a rising surface in
Figures 10.5(a) and (b) as we increase φ from 0 to 1. Again these rules are
(on average) more contractionary than the FLX rule and the increase in the
inﬂation bias makes these rules score less well with the RMSTE based losses.
For large values of λ or for small values of φ the WF and CR rules stand out as
superior to the other rules.

10.3.4      Welfare losses evaluated by response
            surface estimation
Taylor (1979a) argues that the tradeoﬀ between inﬂation variability and out-
put variability can be illustrated by the convex relationship in Figure 10.6.
In point A monetary policy is used actively in order to keep inﬂation close to
its target, at the expense of somewhat larger variability in output. Point C
10.3 Evaluation of interest rate rules                                                     241


                          y




                                      A


                                           B

                                                    C




                                                                 

                               Figure 10.6. The Taylor curve

illustrates a situation in which monetary policy responds less actively to keep
the variability of inﬂation low, and we have smaller output variability and
larger inﬂation variability. Point B illustrates a situation with a ﬂexible inﬂation
target, and we obtain a compromise between the two other points. The down-
ward sloping curve illustrates a frontier along which the variability of output can
only be brought down at the cost of increasing the variability of inﬂation. The
preferred allocation along the Taylor curve depend on the monetary authorities’
loss function. It is, however, pointed out, for example, in Chatterjee (2002),
that the Taylor curve in itself does not resolve the decision problem on which
monetary policy should be adopted, and that further analysis on the welfare
consequences for households of diﬀerent combinations of variability of inﬂation
and unemployment rates along the Taylor curve is required.
    In the following, we will investigate how diﬀerent interest rate rules behave
under diﬀerent choices of weights (ωπ , ωy , ωr ), and under diﬀerent weights λ in
the monetary authorities’ loss function, which we assume can be written as a
linear combination of the unconditional variances of output growth ∆4 yt and
underlying inﬂation, ∆4 put .
                               £(λ) = V [∆4 put ] + λV [∆4 yt ].
    For given levels of target inﬂation, π ∗ , target output growth rate gy∗
and equilibrium real interest rate RR∗ , the interest rate reaction function is
described by the triplet (ωπ , ωy , ωr ).8 We have designed a simulation experi-
ment in order to uncover the properties of diﬀerent interest rate rules across
a range of diﬀerent values of these coeﬃcients. The experiment constitutes
a simple grid search across Ωp × Ωy × Ωr under diﬀerent interest rate rules.

  8 It follows that the experiment is particularly relevant for the ﬁrst three types of rules in

Table 10.1 (FLX, ST, and SM).
242                                              Evaluation of monetary policy rules

For each simulation the variance of underlying inﬂation, V [∆4 put ], and output
growth, V [∆4 yt ] is calculated over the period 1995(1)–2000(4).
    To summarise the diﬀerent outcomes we have used the loss function
£(λ) = V [∆4 put ] + λV [∆4 yt ] for λ ∈ (0, . . . , 4) (11 diﬀerent values).
    The inﬂation coeﬃcient is varied across ωπ ∈ (0, 0.5, . . . , 4)(⇒ 9 values), the
output growth coeﬃcient is varied across ωy ∈ (0, 0.5, . . . , 4)(⇒ 9 values), and
the smoothing coeﬃcient is varied across ωr ∈ (0, 0.1, . . . , 1)(⇒ 11 values). This
makes a total of 9 × 9 × 11 = 891 simulations and 9801 loss evaluations for each
type of rule/horizon.
    In order to analyse such large amounts of data we need some eﬃcient way to
obtain a data reduction. We suggest to analyse the performance of the diﬀerent
interest rate rules by estimating a response surface for the loss function £(λ)
across diﬀerent weights of the loss function λ ∈ (0, 0.1, . . . , 1).
    We consider a second-order Taylor expansion around some values ω̄π , ω̄y , ω̄r ,
and we have chosen the standard Taylor rule (0.5, 0.5, 0) as our preferred choice.

       £(λ) ≃ α0 + α1 ωπ + α2 ωy + α3 ωr + β12 ωπ ωy + β13 ωπ ωr + β23 ωy ωr
                   + β1 ωπ2 + β2 ωy2 + β3 ωr2 + error
                    ωπ = ωπ − ω̄π , ωy = ωy − ω̄y ,       ωr = ωr − ω̄r .

    α’s and β’s are estimated by OLS for each choice of weights in the loss
function λ ∈ (0, 0.1, . . . , 1). We minimise the estimated approximation to this
loss function with respect to the three weights (ωπ , ωy , ωr ), and apply the ﬁrst-
order conditions to solve for these weights as functions of λ in the loss function,
as linear combinations of the estimated α’s and β’s.
                 ∂£(λ)
                         =0
                  ∂ωp                                         
                                   −2β̂1 −β̂12 −β̂13     ωπ        α̂1
                 ∂£(λ)
      Min £(λ) ⇒         = 0 ⇒  −β̂12 −2β̂2 −β̂23   ωy  = α̂2 
           ω      ∂ωy                                      
                                   −β̂13 −β̂23 −2β̂3 λ ωr λ        α̂3 λ
                 ∂£(λ)
                         =0
                  ∂ωr
                                                    −1  
                  ω̃π        ω̄π       −2β̂1 −β̂12 −β̂13      α̂1
               ⇒  ω̃y  =  ω̄y  +  −β̂12 −2β̂2 −β̂23  α̂2 
                   ω̃r λ     ω̄r       −β̂13 −β̂23 −2β̂3 λ α̂3 λ

    The optimal reaction function according to this minimisation is shown in
Figure 10.7, where the optimal weights ω̃π , ω̃y , ω̃r are plotted as function of
the relative weight λ assigned to output variability in the loss function. The
main ﬁndings are that there is a tradeoﬀ between variability in inﬂation and
variability in output, irrespective of the degree of smoothing. The inﬂation coef-
ﬁcient drops as we increase the output growth weight λ. Interest rate smoothing
increases variability in the inﬂation rate without any substantial reduction in
10.4 Conclusions                                                                                  243

     4.0

     3.5
                                                                                 Output
     3.0

     2.5

     2.0
                         Inflation
     1.5

     1.0
                                                                      Lagged interest rate
     0.5


           0.00 0.25 0.50 0.75 1.00 1.25 1.50 1.75 2.00 2.25 2.50 2.75 3.00 3.25 3.50 3.75 4.00

 Figure 10.7. Estimated weights ω̃π , ω̃y , ω̃r as a function of λ, the weight of
 output growth in the loss function. The weights are based on an estimated
      response surface for a Taylor approximation of the loss function.
            £(λ) = V [∆4 put ] + λV [∆4 yt ],       for λ ∈ (0, . . . , 4)


output variability. This may explain the relatively low weight on interest rate
smoothing suggested by the plot of the smoothing coeﬃcient as a function of λ.



10.4         Conclusions
The results from the counterfactual simulations indicate that a standard Taylor
rule does quite well, across diﬀerent values of the central bank preference para-
meters in a loss function, even in the case of a small open economy like Norway.
‘Open economy’ rules that respond to exchange rate misalignments, are shown
to perform slightly worse than the Taylor rule. These rules contribute towards
lower exchange rate variability without increasing interest rate variability, but
at a cost of raising the variability in other target variables like headline and
underlying inﬂation, output growth, and unemployment. Rules which respond
to volatile variables like output growth produce higher interest rate volatility
as a consequence. The counterfactual simulations illustrate substantial dif-
ferences in the bias across the diﬀerent interest rate rules, which are picked
up by the RMSTE. The derivation of weights in the interest rate rules from
estimated response surfaces indicate a tradeoﬀ between variability in inﬂation
and variability in output, irrespective of the degree of interest rate smoothing.
In contrast with many other studies, interest rate smoothing seems to increase
244                                         Evaluation of monetary policy rules

variability in the inﬂation rate without any substantial reduction in output vari-
ability. We conclude from this observation that statements about the optimal
degree of interest rate smoothing appear to be non-robust or—to put it dif-
ferently—that they are model dependent. In a situation with such conﬂicting
evidence, the central bank should evaluate the empirical relevance and realism
in the underlying models and base its decisions on the one with the highest
degree of congruence.
                                        11

             Forecasting using
            econometric models

     The non-stationary nature of many economic time series has a bearing on
     virtually all aspects of econometrics, including forecasting. Recent devel-
     opments in forecasting theory have taken this into account, and provide
     a framework for understanding typical ﬁndings in forecast evaluations:
     for example, why certain types of models are more prone to forecast fail-
     ure than others. In this chapter we discuss the sources of forecast failure
     most likely to occur in practice, and we compare the forecasts of a large
     econometric forecasting model with the forecasts stemming from simpler
     forecasting systems, such as dVARs. The large scale model holds its ground
     in our experiment, but the theoretical discussion about vulnerability to
     deterministic shifts is very relevant for our understanding of the instances
     where a dVAR does better. We also analyse the theoretical and empirical
     forecast properties of two wage–price models that have appeared earlier
     in the book: the dynamic incomplete competition model (ICM) and the
     Phillips curve, PCM. The analysis shows that although the PCM shares
     some of the robustness of dVARs, it also embodies equilibrium correc-
     tion, in the form of natural rate dynamics. Since that form of correction
     mechanism is rejected empirically, the PCM forecasts are harmed both
     by excessive uncertainty (from its dVAR aspect), and by their econo-
     metric mis-speciﬁcation of the equilibrium-correction mechanism in wage
     formation.


11.1      Introduction
Economic forecasts are statements about the future which are generated with a
range of methods, ranging from wholly informal (‘gut feeling’) to sophisticated
statistical techniques and the use of econometric models. However, professional
forecasters never stick to only one method of forecasting, so formal and informal


                                         245
246                                       Forecasting using econometric models

forecasting methods both have an impact on the ﬁnal (published) forecast.
The use of judgemental correction of forecasts from econometric models is one
example.
     It is fair to say that the combined use of diﬀerent forecasting methods
reﬂects how practitioners have discovered that there is no undisputed and over-
all ‘best’ way of constructing forecasts. A related observation, brought into the
literature already in Bates and Granger (1969), is that a combination of fore-
casts of an economic variable often turn out to be more accurate than the
individual projections that are combined together.
     Nevertheless, intercept correction and pooling are still looked upon with
suspicion in wide circles. Hence, being open-minded about intercept correction
often has a cost in terms of credibility loss. For example, the forecaster will
often ﬁnd herself accused of an inconsistency (i.e. ‘if you believe in the model,
why do you overrule its forecasts?’), or the model can be denounced on the logic
that ‘if intercept correction is needed, why use a model in the ﬁrst place?’.
     It is probable that such reactions are based on an unrealistic description
of the forecasting situation, namely that the econometric model in question is
correctly speciﬁed simpliﬁcation of the data generation process, which in turn
is assumed to be without regime shifts in the forecasting period. Realistically
however, there is genuine uncertainty about how good a model is, even within
the sample. Moreover, since the economy is evolving, we can take it for granted
that the data generation process will change in the forecast period, causing any
model of it to become mis-speciﬁed over that period, and this is eventually the
main problem in economic forecasting. The inevitable conclusion is that there
is no way of knowing ex ante the degree of mis-speciﬁcation of an econometric
model over the forecast period. The implication is that all measures of forecast
uncertainty based on within-sample model ﬁt are underestimating the true fore-
cast uncertainty. Sometimes, when regimes shifts aﬀect parameters like growth
rates and the means and coeﬃcients of cointegration relationships, one is going
to experience forecast failure, that is, ex post forecast errors are systematically
larger than indicated by within-sample ﬁt.
     On the basis of a realistic description of the forecasting problem it thus
becomes clear that intercept corrections have a pivotal role in robustifying the
forecasts from econometric models, when the forecaster has other information
which indicate that structural changes are ‘immanent’; see Hendry (2001a).
Moreover, correcting a model’s forecast through intercept correction does not
incriminate the use of that model for policy analysis. That issue hinges more
precisely on which parameters of the model are aﬀected by the regime shift.
Clearly, if the regime shift entails signiﬁcant changes in the parameters that
determine the (dynamic) multipliers, then the continued use of the model is
untenable. However, if it is the intercepts and long-run means of cointegrating
relationships which are aﬀected by a regime shift, the model may still be valid
for policy analysis, in spite of forecast failure. Clements and Hendry (1999a)
provide a comprehensive exposition of the theory of forecasting non-stationary
11.1 Introduction                                                               247

time-series under realistic assumptions about regime shifts, and Hendry and
Mizon (2000) speciﬁcally discuss the consequences of forecast failure for policy
analysis. Ericsson and Hendry (2001) is a non-technical presentation of recent
developments in economic forecasting theory and practice.
    A simple example may be helpful in deﬁning the main issues at stake. Let
M1 in equation (11.1) represent a model of the rate of inﬂation πt (i.e. denoted
∆pt in the earlier chapters). In equation (11.1) µ denotes the unconditional
mean of the rate of inﬂation, while zt denotes an exogenous variable, whose
change aﬀects the rate of inﬂation with semi-elasticity given by γ (hence γ is
the derivative coeﬃcient of this model). Assume next that M1 corresponds to
the data generation process over the sample period t = 1, 2, . . . , T , hence as in
earlier chapters, εt denote a white noise innovation (with respect to πt−1 and
∆zt ), and follows a normal distribution with zero mean and constant variance.

                    M1:   ∆πt = δ − α(πt−1 − µ) + γ∆zt + εt .                (11.1)

By deﬁnition, any alternative model is mis-speciﬁed over the sample period.
M2 in equation (11.2) is an example of a simple model in diﬀerenced form,
a dVAR, often used as a benchmark in forecast comparisons since it produces
the naive forecasts that tomorrow’s rate of inﬂation is identical to today’s rate.
The M2-disturbance is clearly not an innovation, but is instead given by the
equation below M2.

                 M2: ∆∆πt = νt ,                                             (11.2)
                       νt = −α∆πt−1 + γ∆2 zt + εt − εt−1 .

As noted above, M2 is by deﬁnition inferior to M1 when viewed as an alternative
model of the rate of inﬂation. However, our concern now is a diﬀerent one: if
we use M1 and M2 to forecast inﬂation over H periods T + 1, T + 2, . . . , T + H,
which set of forecasts is the best or most accurate? In other words: which
of M1 and M2 provides the best forecast mechanism? It is perhaps surpris-
ing that the answer depends on which other additional assumptions we make
about the forecasting situation. Take for instance the exogenous variable zt in
(11.1): only if the forecasting agency also controls the process governing this
variable in the forecast period can we assume that the conditional inﬂation
forecast based on M1 is based on the correct sequence of exogenous variables
(zT +1 , zT +2 , . . . , zT +H ). Thus, as is well documented, errors in the projec-
tions of the exogenous variables are important contributors to forecast errors.
Nevertheless, for the purpose of example, we shall assume that the future z’s
are correctly forecasted. Another simplifying assumption is to abstract from
estimation uncertainty, that is, we evaluate the properties of forecasting mech-
anism M1 as if the coeﬃcients δ, α, and γ are known coeﬃcients. Intuitively,
given the ﬁrst assumption that M1 corresponds to the data generating process,
the assumption about no parameter uncertainty is of second- or third-order
importance.
248                                        Forecasting using econometric models

    Given this description of the forecasting situation, we can concentrate on
the impact of deterministic non-stationarities, or structural change, on the
forecasts of M1 and M2. Assume ﬁrst that there is no structural change. In
this case, M1 delivers the predictor with the minimum mean squared fore-
cast error (MMSFE): see, for example, Clements and Hendry (1998: ch. 2.7).
Evidently, the imputed forecast errors from M2, and hence the conventional
95% predictions intervals, are too large (notably by 100% for the T +1 forecast).
    However, if there is a structural change in the long-run mean of the rate of
inﬂation, µ, it is no longer obvious that M1 is the winning forecasting mech-
anism. Exactly when µ shifts to its new value, µ∗ , before or after the preparation
of the forecast in period T , is important, as shown by the biases of the two 1-step
ahead forecasts:
E[πT +1 − π̂M1,T +1 | IT ] = α(µ − µ∗ ),              if µ → µ∗ (no matter when)
E[πT +1 − π̂M2,T +1 | IT ] = −α∆πT + γ∆2 zT +1,       if µ → µ∗ , before T
E[πT +1 − π̂M2,T +1 | IT ] = α(µ − µ∗ ),              if µ → µ∗ , after T
demonstrating that

• The forecast mechanism corresponding to M2 ‘error corrects’ to the structural
  change occurring before the forecast period. Hence, M2 post-break forecasts
  are robust.
• M1 produces forecast failure, also when M2-forecasts do not break down,
  that is, M1 post-break forecasts are not robust.
• Both forecasts are damaged if the regime shift occurs after the forecast is
  made (i.e. in the forecast period). In fact, M1 and M2 share a common bias
  in this pre-break case (see ﬁrst and third line).

Thus, apart from the special case where the econometric model corresponds
to the true mechanism in the forecast period, it is impossible to prove that it
provides the best forecasting mechanism, establishing the role of supplementary
forecasting mechanisms in economic forecasting. Moreover, in this example,
forecast failure of M1 is due to a change in a parameter which does not aﬀect the
dynamic multipliers (the relevant parameters being α and γ in this example).
Thus, forecast failure per se does not entail that the model is invalid for policy
analysis.
    M1-regime shifts that occur prior to the forecast period are detectable,
in principle, and the forecaster therefore has an opportunity to avoid forecast
failure by intercept correction. In comparison, it is seen that the simple forecast
mechanism M2 has built in intercept correction: its forecast is back on track
in the ﬁrst period after the break. Intriguingly, M2 has this capability almost
by virtue of being a wrong model of the economy.
    In the rest of this chapter, we investigate the relevance of these insights
for macroeconometric forecasting. Section 11.2 contains a broader discussion of
11.2 EqCMs vs. dVARs                                                        249

the relative merits of equilibrium-correction models (EqCMs) and diﬀerenced
VARs (dVARs) in macroeconometric forecasting. This is done by ﬁrst giving an
extended algebraic example, in Section 11.2.1. In Section 11.2.2, we turn to the
theory’s practical relevance for understanding the forecasts of the Norwegian
economy in the 1990s. The model that takes the role of the EqCM is the
macroeconometric model RIMINI. The rival forecasting systems are dVARs
derived from the full scale model as well as univariate autoregressive models.
    So far we have discussed forecasting mechanisms as if the choice of fore-
casting method is clear-cut and between using a statistical model, M2, and a
well-deﬁned econometric model, M1. In practice, the forecaster has not one but
many econometric models to choose from. In earlier chapters of this book, we
have seen that diﬀerent dynamic model speciﬁcations can be compatible with
the same theoretical framework. We showed, for example, that the open econ-
omy Phillips curve model with a constant NAIRU, can be seen as an EqCM
version of a bargaining model (see Chapter 4), but also that there was an
alternative EqCM which did not imply a supply-side natural rate (in Chapter 6
we referred to it as the dynamic incomplete competition model). In Section 11.3
we discuss the forecasting properties of the two contending speciﬁcations of
inﬂation, theoretically and empirically.


11.2      EqCMs vs. dVARs in macroeconometric
          forecasting
The development of macroeconometric models in the course of the 1980s and
1990s, with more emphasis on dynamic speciﬁcation and on model evaluation,
meant that the models became less exposed to the critique against earlier
generations of models, namely that models that largely ignore dynamics and
temporal properties of the data, will necessarily produce suboptimal forecasts;
see, for example, Granger and Newbold (1986: ch. 6). At the same time, other
model features also changed in response to developments in the real econ-
omy, for example, the more detailed and careful modelling of the supply-side
factors and the transmission mechanism between the real and ﬁnancial sectors
of the economy; see Wallis (1989) for an overview. Given these developments,
macroeconomic model builders and forecasters may be justiﬁed in claiming that
modern models of the EqCM type, would forecast better than models that only
use diﬀerenced data, dVARs. Forecast competitions between models of these
two types have been reported in Eitrheim et al. (1999, 2002a). This chapter
draws on these results, and extends the horse race competition between the
diﬀerent inﬂation models reported in Chapter 8 (Section 8.7.6).
    As noted above, Michael Clements and David Hendry have re-examined
several issues in macroeconometric forecasting, including the relative merits of
dVARs and EqCMs (see, for example, Clements and Hendry 1995a,b, 1996,
1998). Assuming constant parameters in the forecast period, the dVAR is
250                                       Forecasting using econometric models

mis-speciﬁed relative to a correctly speciﬁed EqCM, and dVAR forecasts will
therefore be suboptimal. However, if parameters change after the forecast is
made, then the EqCM is also mis-speciﬁed in the forecast period. Clements
and Hendry have shown that forecasts from a dVAR are robust with respect to
certain classes of parameter changes. Hence, in practice, EqCM forecasts may
turn out to be less accurate than forecasts derived from a dVAR. Put diﬀer-
ently, the ‘best model’ in terms of economic interpretation and econometrics,
may not be the best model for forecasts. At ﬁrst sight, this is paradoxical,
since any dVAR can be viewed as a special case of an EqCM, since it imposes
additional unit root restrictions on the system. However, if the parameters of
the levels variables that are excluded from the dVAR change in the forecast
period, this in turn makes also the EqCM mis-speciﬁed. Hence, the outcome of
a horse race is no longer given, since both forecasting models are mis-speciﬁed
relative to the generating mechanism that prevails in the period we are trying
to forecast.


11.2.1      Forecast errors of bivariate EqCMs and dVARs
In this section, we illustrate how the forecast errors of an EqCM and the
corresponding dVAR are aﬀected diﬀerently by structural breaks. Practical
forecasting models are typically open systems, with exogenous variables.
Although the model that we study in this section is of the simple kind, its
properties will prove helpful in interpreting the forecasts errors of the large
systems in Section 11.2.3.

    A simple DGP This book has taken as a premise that macroeconomic
time-series can be usefully viewed as integrated of order one, I(1), and that
they also frequently include deterministic terms allowing for a linear trend. The
following simple bivariate system (a ﬁrst-order VAR) can serve as an example:

                       yt = κ + λ1 yt−1 + λ2 xt−1 + ey,t ,                (11.3)
                       xt = ϕ + xt−1 + ex,t ,                             (11.4)

where the disturbances ey,t and ex,t have a jointly normal distribution. Their
variances are σy2 and σx2 respectively, and the correlation coeﬃcient is denoted
by ρy,x . The openness of practical forecasting models is captured by xt which is
(strongly) exogenous. xt is integrated of order one, denoted I(1), and contains
a linear deterministic trend if ϕ = 0. We will assume that (11.3) and (11.4)
constitute a small cointegrated system such that yt is also I(1) but cointegrated
with xt . This entails that 0 < λ1 < 1 and λ2 = 0. With a change in notation,
the DGP can be written as

              ∆yt = −α[yt−1 − βxt−1 − ζ] + ey,t ,       0 < α < 1,        (11.5)
              ∆xt = ϕ + ex,t ,                                            (11.6)
11.2 EqCMs vs. dVARs                                                         251

where α = (1 − λ1 ), β = λ2 /α, and ζ = κ/α. In equation (11.5), α is
the equilibrium-correction coeﬃcient and β is the derivative coeﬃcient of the
cointegrating relationship.
    The system can be re-written in ‘model form’ as a conditional equilibrium-
correcting model for yt and a marginal model for xt .
                ∆yt = γ + π∆xt − α[yt−1 − βxt−1 − ζ] + εy,t ,             (11.7)
                ∆xt = ϕ + ex,t ,                                          (11.8)
where
                                          σy
                                   π = ρy,x  ,
                                          σx
                                   γ = −ϕπ,
                               εy,t = ey,t − πex,t
from the properties of the bivariate normal distribution.
   We deﬁne two parameters, µ and η, such that E[yt − βxt ] = µ and
E[∆yt ] = η. By taking expectations in (11.6) we see that E[∆xt ] = ϕ. Similarly,
by taking expectations in (11.5) and substituting for these deﬁnitions, noting
that η = βϕ, we ﬁnd the following relationship between these parameters:
                                   βϕ = α(ζ − µ).                         (11.9)
Solving with respect to µ yields
                                       βϕ     κ − βϕ
                            µ=ζ−           =         .                    (11.10)
                                        α        α
In the case when ϕ = 0, both series contain a deterministic trend which stems
from the xt -process and conversely, if ϕ = 0 there is no deterministic growth
in either of the variables. In the latter case we see from (11.10) that µ = ζ.
    The case with a linear deterministic trend is relevant for many variables of
interest for forecasters. In the empirical part of this chapter, Section 11.2.3,
we will show examples of both cases. Typical examples of exogenous variables
associated with positive drift are indicators of foreign demand, foreign price
indices, and average labour productivity, while the zero drift assumption is
the most appealing one for variables like, for example, oil prices and monetary
policy instruments, that is, money market interest rates and exchange rates.

    EqCM and dVAR models of the DGP The purpose of this section is
to trace the impact of parameter changes in the DGP on the forecasts of two
models of the DGP. First, the equilibrium correction model, EqCM, which coin-
cides with the DGP within sample, that is, there is no initial mis-speciﬁcation,
and second, the dVAR.
    The EqCM is made up of equations (11.7) and (11.8). Equation (11.7) is
the conditional model of yt (see, for example, Hendry 1995a: ch. 7), which
has many counterparts in practical forecasting models, following the impact
252                                        Forecasting using econometric models

of econometric methodology and cointegration theory on applied work. Equa-
tion (11.8) is the marginal equation for the explanatory variable xt . The dVAR
model of yt and xt (wrongly) imposes one restriction, namely that α = 0, hence
the dVAR model consists of

                             ∆yt = γ + π∆xt + y,t ,                         (11.11)
                             ∆xt = ϕ + ex,t .                               (11.12)

Note that the error process in the dVAR model, y,t (=εy,t −α[yt−1 −βxt−1 −ζ]),
will in general be autocorrelated provided there is some autocorrelation in the
omitted disequilibrium term (for 0 < α < 1).
    We further assume that


• parameters are known;
• in the forecasts, ∆xT +j = ϕ (j = 1, . . . , h);
• forecasts for the periods T + 1, T + 2, . . . , T + h, are made in period T .


The ﬁrst assumption abstracts from small sample biases in the EqCM and
inconsistently estimated parameters in the dVAR case. The second assump-
tion rules out one source of forecast failure that is probably an important one
in practice, namely that non-modelled or exogenous variables are poorly fore-
casted. In our framework systematic forecast errors in ∆xT +j are tantamount
to a change in ϕ.
    Although all other coeﬃcients may change in the forecast period, the most
relevant coeﬃcients in our context are α, β, and ζ, that is, the coeﬃcients that
are present in the EqCM but not in the dVAR. Among these, we concentrate on
α and ζ, since β represents partial structure by virtue of being a cointegration
parameter; see Doornik and Hendry (1997b) and Hendry (1998) for an analysis
of the importance and detectability of shifts.
    In the following two sections we derive the biases for the forecasts of EqCM
and dVAR, when both models are mis-speciﬁed in the forecast period. We dis-
tinguish between the case where the parameter change occurs after the forecast
is made (post-forecast break) and a shift that takes place before the forecast
period (pre-forecast break).


   Parameter change after the forecast is prepared               We ﬁrst
assume that the intercept ζ in (11.5) changes from its initial level to a
new level, that is, ζ → ζ ∗ , after the forecast is made in period T .
Since we maintain a constant α in this section, the shift in ζ is funda-
mentally the product of a change in κ, the intercept in equation (11.3).
In equilibrium correction form, the DGP in the forecast period is
11.2 EqCMs vs. dVARs                                                         253

therefore

       ∆yT +h = γ + π∆xT +h − α[yT +h−1 − βxT +h−1 − ζ ∗ ] + εy,T +h ,
       ∆xT +h = ϕ + ex,T +h ,

where h = 1, . . . , H. The 1-period forecast errors for the EqCM and the dVAR
models can be written:

              yT +1 − ŷT +1,EqCM = −α[ζ − ζ ∗ ] + ey,T +1 ,             (11.13)
                                                        ∗
              yT +1 − ŷT +1,dVAR = −α[yT − βxT − ζ ] + ey,T +1 .        (11.14)

In the following, we focus on the bias of the forecast errors. The 1-step biases
are deﬁned by the conditional expectation (on IT ) of the forecast errors and
are denoted bias T +1,EqCM and bias T +1,dVAR respectively:

                     bias T +1,EqCM = −α[ζ − ζ ∗ ],                      (11.15)
                                                            ∗
                      bias T +1,dVAR = −α[yT − βxT − ζ ].                (11.16)

Let x◦t , denote the steady-state values of the xt -process. The corresponding
steady-state values of the yt -process, denoted yt◦ , are then given by

                                 yt◦ = µ + βx◦t .                        (11.17)

Using this deﬁnition and (11.15), the dVAR forecast error (11.16) can be
rewritten as
                                                                   
                                                     βϕ
    bias T +1,dVAR = −α (yT − yT◦ ) − β(xT − x◦T ) −    + (ζ − ζ ∗ )
                                                      α
                                                       
                                                     βϕ
                   = −α (yT − yT◦ ) − β(xT − x◦T ) −      + bias T +1,EqCM .
                                                      α
                                                                         (11.18)

Note that both EqCM and dVAR forecasts are harmed by the parameter shift
from ζ to ζ ∗ ; see Clements and Hendry (1996). Assuming that the initial values’
deviations from steady state are negligible, that is, xT ≈ x◦T and yT ≈ yT◦ , we
can simplify the expression into

                     bias T +1,dVAR = βϕ + bias T +1,EqCM .              (11.19)

The two models’ 1-step forecast error biases are identical if yT equals its
long-run mean ȳT . An example of such a case will be ordinary least squares
(OLS)-estimated unrestricted dVAR (see Clements and Hendry 1998: ch. 5.4).
254                                           Forecasting using econometric models

   For comparison we also write down the biases of the 2-period forecast errors
(maintaining the steady-state assumption).


   bias T +2,EqCM = −αδ(1) [ζ − ζ ∗ ],                                 (11.20)
                                                                            
                                                             βϕ
   bias T +2,dVAR = βϕα − αδ(1) (yT − yT◦ ) − β(xT − x◦T ) −    + (ζ − ζ ∗ )
                                                              α
                                                                       (11.21)
                  ≈ βϕ(α + δ(1) ) + bias T +2,EqCM
                  = 2βϕ + bias T +2,EqCM ,


where δ(1) = 1 + (1 − α).
  More generally, for h-period forecasts we obtain the following expressions


          bias T +h,EqCM = −αδ(h−1) [ζ − ζ ∗ ],                            (11.22)
          bias T +h,dVAR = βϕ(αψ(h−2) − δ(h−1) ) − αδ(h−1) [(yT − yT◦ )
                            − β(xT − x◦T ) + (ζ − ζ ∗ )]                   (11.23)


for forecast horizons h = 2, 3, . . . , where δh−1 and ψh−2 are given by


                               
                               h−1
                δ(h−1) = 1 +         (1 − α)j ,       δ(0) = 1             (11.24)
                               j=1
                       = 1 + (1 − α)δ(h−2) ,
                               
                               h−2
                ψ(h−2) = 1 +         δ(j) ,       ψ(0) = 1,   ψ(−1) = 0    (11.25)
                               j=1
                       = (h − 1) + (1 − α)ψ(h−3)


and we have again used (11.17). As the forecast horizon h increases to inﬁnity,
δ(h−1) → 1/α, hence the EqCM-bias approaches asymptotically the size of the
shift itself, that is, bias T +h,EqCM → ζ ∗ − ζ.
    Assuming that xT ≈ x◦T and yT ≈ yT◦ , we can simplify the expression and
the dVAR forecast errors are seen to contain a bias term that is due to the
growth in xt and which is not present in the EqCM forecast bias, cf. the term
βϕ(αψ(h−2) +δ(h−1) ) in (11.23). We can simplify this expression, since the term
in square brackets containing the recursive formulae δ(h−1) and ψ(h−2) can be
rewritten as [αψ(h−2) + δ(h−1) ] = h, and we end up with a simple linear trend
in the h-step ahead dVAR forecast error bias in the case when ϕ = 0, thus
11.2 EqCMs vs. dVARs                                                                     255

generalising the 1-step and 2-step results1 :

  bias T +h,dVAR = βϕh − αδ(h−1) [(yT − yT◦ ) − β(xT − x◦T )] + bias T +h,EqCM .
                                                                                     (11.26)

We note furthermore that the two models’ forecast error biases are identical if
there is no autonomous growth in xt (ϕ = 0), and yT and xT equal their steady-
state values. In the case with positive deterministic growth in xt (ϕ > 0), while
maintaining the steady-state assumption, the dVAR bias will dominate the
EqCM bias in the long run due to the trend term in the dVAR bias.



    Change in the equilibrium-correction coeﬃcient α Next, we con-
sider the situation where the adjustment coeﬃcient α changes to a new value,
α∗ , after the forecast for T +1, T +2, . . . , T +h have been prepared. Conditional
on IT , the 1-step biases for the two models’ forecasts are:

                     bias T +1,EqCM = −(α∗ − α)[yT − βxT − ζ],                       (11.27)
                     bias T +1,dVAR = −α∗ [yT − βxT − ζ].                            (11.28)

Using the steady-state expression (11.17), we obtain
                                                                     
                                   ∗          ◦             ◦      βϕ
          bias T +1,EqCM = −(α − α) (yT − yT ) − β(xT − xT ) −          , (11.29)
                                                                    α
                                                              
                                                            βϕ
          bias T +1,dVAR = −α∗ (yT − yT◦ ) − β(xT − x◦T ) −      .        (11.30)
                                                             α

   In general, the EqCM bias is proportional to the size of the shift, while the
dVAR bias is proportional to the magnitude of the level of the new equilibrium-
correction coeﬃcient itself. Assuming that xT ≈ x◦T and yT ≈ yT◦ , we can
simplify the expression into

                         bias T +1,dVAR = βϕ + bias T +1,EqCM .                      (11.31)

Hence, the diﬀerence between the dVAR and EqCM 1-step forecast error biases
is identical to (11.19). For the multi-period forecasts, the EqCM and dVAR


  1 From the deﬁnition of ψ
                                (h−2) in (11.25) it follows that ψ(h−3) = ψ(h−2) − δ(h−2) .
Inserting this in the recursive formula for ψ(h−3) and rearranging terms yields αψ(h−2) =
(h − 1) − (1 − α)δ(h−2) . Finally, when we add δ(h−1) on both sides of this equality and apply
the recursive formula for δ(h−1) in (11.25), the expression simpliﬁes to (h − 1) + 1 = h.
256                                            Forecasting using econometric models

forecast error biases are
       bias T +h,EqCM = βϕ(α∗ ψ(h−2)
                                 ∗
                                     − αψ(h−2) ) − (α∗ δ(h−1)
                                                        ∗
                                                               − αδ(h−1) )
                                                         
                                                       βϕ
                        × (yT − yT◦ ) − β(xT − x◦T ) −       ,            (11.32)
                                                        α
       bias T +h,dVAR = βϕα∗ ψ(h−2)
                                ∗
                                                                   
                            ∗ ∗            ◦               ◦     βϕ
                        − α δ(h−1) (yT − yT ) − β(xT − xT ) −             (11.33)
                                                                  α
h = 2, 3, . . . , where yT◦ is deﬁned in (11.17), δ(h−1) in (11.24), ψ(h−2) in (11.25).
 ∗                ∗
δ(h−1) and ψ(h−2)      are given by

                               
                               h−1
                  ∗
                 δ(h−1) =1+          (1 − α∗ )j ,     ∗
                                                     δ(0) = 1,
                               j=1

                               
                               h−2
                 ∗                    ∗          ∗           ∗
                ψ(h−2) =1+           δ(j) ,     ψ(0) = 1,   ψ(−1) = 0.
                               j=1

To facilitate comparison we again assume that xT ≈ x◦T and yT ≈ yT◦ , and insert
(11.33) in (11.32). Using a similar manipulation as when deriving (11.26), we
arrive at the following bias T +h,dVAR -expression:
                      bias T +h,dVAR = βϕh + bias T +h,EqCM .
We see that under the simplifying steady-state assumption, the diﬀerence
between dVAR and EqCM h-step forecast error biases is identical to (11.26).
Hence there will be a linear trend in the diﬀerence between the dVAR and
EqCM forecast error biases due to the mis-representation of the growth in xt
in the dVAR.

    Parameter change before the forecast is made               This situation is
illustrated by considering how the forecasts for T + 2, T + 3, . . . , T + h + 1
are updated conditional on outcomes for period T + 1. Remember that the
shift ζ → ζ ∗ ﬁrst aﬀects outcomes in period T + 1. When the forecasts for
T + 2, T + 3, . . . are updated in period T + 1, information about parameter
non-constancies will therefore be reﬂected in the starting value yT +1 .

    Change in the intercept ζ            Given that ζ changes to ζ ∗ in period
T + 1, the (updated) forecast for yT +2 , conditional on yT +1 yields the following
forecast error biases for the EqCM and dVAR models:
                bias T +2,EqCM | IT +1 = −α[(ζ − ζ ∗ )],                       (11.34)
                 bias T +2,dVAR | IT +1 = −α[yT +1 − βxT +1 − ζ ∗ ].           (11.35)
Equation (11.34) shows that the EqCM forecast error is aﬀected by the para-
meter change in exactly the same manner as before, cf. (11.15), despite the fact
11.2 EqCMs vs. dVARs                                                             257

that in this case the eﬀect of the shift is incorporated in the initial value yT +1 .
Manifestly, the EqCM forecasts do not correct to events that have occurred
prior to the preparation of the forecast. Indeed, unless the forecasters detect the
parameter change and take appropriate action by (manual) intercept correction,
the eﬀect of a parameter shift prior to the forecast period will bias the forecasts
‘forever’. The situation is diﬀerent for the dVAR.
    Using the fact that

                               yT◦ +1 = µ∗ + βx◦T +1 ,

where
                                               βϕ
                                  µ∗ = ζ ∗ +      .                          (11.36)
                                                α
Equation (11.35) can be expressed as
                                                                         
                                         ◦                   ◦        βϕ
   bias T +2,dVAR | IT +1 = −α (yT +1 − yT +1 ) − β(xT +1 − xT +1 ) −
                                                                       α
                          ≈ βϕ                                           (11.37)
under the steady-state assumption. We see that if there is no deterministic
growth in the DGP, that is, ϕ = 0, the dVAR will be immune with respect to
the parameter change. In this important sense, there is an element of inherent
‘intercept correction’ built into the dVAR forecasts, while the parameter change
that occurred before the start of the forecast period will produce a bias in the
1-step EqCM forecast. A non-zero drift in the xt -process will, however, produce
a bias in the 1-step dVAR forecast as well, and the relative forecast accuracy
between the dVAR model and the EqCM will depend on the size of the drift
relative to the size of the shift.
    The expression for the h-period forecast biases, conditional on IT +1 , takes
the form:
 bias T +(h+1),EqCM | IT +1 = −αδ(h−1) [ζ − ζ ∗ ]                          (11.38)
 bias T +(h+1),dVAR | IT +1 = βϕh − αδ(h−1) [(yT +1 − yT◦ +1 ) − β(xT +1 − x◦T +1 )]
                                                                           (11.39)
for h = 1, 2, . . .. This shows that the EqCM forecast remains biased also for long
forecast horizons. The forecast does ‘equilibrium correct’, but unfortunately
towards the old (and irrelevant) ‘equilibrium’. For really long (inﬁnite) forecast
horizons the EqCM bias approaches the size of the shift [(ζ ∗ − ζ)] just as in the
case where the parameter changed before the preparation of the forecast and
therefore was undetectable.
    For the dVAR forecast there is once again a trend in the bias term that is
due to the growth in xt . In the case with no deterministic growth in the DGP,
the dVAR forecasts are unbiased for all h.
258                                        Forecasting using econometric models

    Change in the equilibrium-correction coeﬃcient α Just as with
the long-run mean, the EqCM forecast do not adjust automatically when the
change α → α∗ occurs prior to the preparation of the forecasts (in period T +1).
The biases for period T + 2, conditional on IT +1 , take the form
                                                                                
                                                                              βϕ
  bias T +2,EqCM |IT +1 = −(α∗ − α) (yT +1 − yT◦ +1 ) − β(xT +1 − x◦T +1 ) −
                                                                               α
                                                                             (11.40)
                                                                          
                                                                       βϕ
  bias T +2,dVAR |IT +1 = −α∗ (yT +1 − yT◦ +1 ) − β(xT +1 − x◦T +1 ) −
                                                                        α
                                                                             (11.41)
where we have used (11.17).
   So neither of the two forecasts ‘intercept correct’ automatically to parameter
changes occurring prior to the preparation of the forecast. For that reason,
the 1-step biases are functionally similar to the formulae for the case where
α change to α∗ after the forecast has been prepared. The generalisation to
multi-step forecast error biases is similar to previous derivations.

    Estimated parameters In practice both EqCM and the dVAR forecast-
ing models use estimated parameters. Since the dVAR is mis-speciﬁed relative
to the DGP (and the EqCM), estimates of the parameters of (11.11) will in
general be inconsistent. Ignoring estimated parameter uncertainty, the dVAR
model will be
                            ∆yt = γ ∗ + π ∗ ∆xt + ∗y,t ,                    (11.42)
                            ∆xt = ϕ + ex,t ,                                (11.43)
where γ ∗ and π ∗ denote the probability limits of the parameter estimates. In
the forecast period γ ∗ + π ∗ ∆xT +h = g = 0, hence the dVAR forecast of yT +h
will include an additional deterministic trend (due to estimation bias) which
does not necessarily correspond to the trend in the DGP (which is inherited
from the xt -process).
    The parameter bias may be small numerically (e.g. if diﬀerenced terms
are close to orthogonal to the omitted equilibrium correction term), but can
nonetheless accumulate to a dominating linear trend in the dVAR forecast
error bias.
    One of the dVAR-type models we consider in the empirical section,
denoted dRIM, is a counterpart to (11.42). The empirical section shows
examples of how dVAR-type models can be successfully robustiﬁed against
trend-misrepresentation.

   Discussion Although we have looked at the simplest of forecasting
systems, the results have several traits that one might expect to be able to
11.2 EqCMs vs. dVARs                                                                   259

recover from the forecast errors of full sized macroeconomic models that we
consider in Section 11.2.2.
    The analysis above shows that neither the EqCM nor the dVAR protect
against post-forecast breaks. In the case we have focused upon, where the dVAR
model excludes growth when it is present in the DGP, the dVAR forecast error
biases contain a trend component. Even in this case, depending on initial condi-
tions, the dVAR may compete favourably with the EqCM over forecast horizons
of moderate length.
    We have seen that the dVAR does oﬀer protection against pre-forecast
shifts in the long-run mean, which reiterates a main point made by Hendry
and Clements. While the dVAR automatically intercept corrects to the pre-
forecast break, the EqCM will deliver inferior forecasts unless model users
are able to detect the break and correct the forecast by intercept correction.
Experience tells us that this is not always achieved in practice: in a large
model, a structural break in one or more equations might pass unnoticed, or
it might be (mis)interpreted as ‘temporary’ or as only seemingly a breakdown
because the data available for model evaluation are preliminary and susceptible
to future revision.2
    One suggestion is that the relative merits of EqCMs and dVARs for
forecasting depends on

• the ‘mix’ of pre- and post-forecast parameter changes
• the length of the forecast horizon.

   In the next section we use this perspective to interpret the forecast outcomes
from a large-scale model of the Norwegian economy.


11.2.2       A large-scale EqCM model and four dVAR type
             forecasting systems based on diﬀerenced data
Section 11.2.1 brought out that even for very simple systems, it is in general
diﬃcult to predict which version of the model is going to have the smallest
forecast error, the EqCM or the dVAR. While the forecast errors of the dVAR
are robust to changes in the adjustment coeﬃcient α and the long-run mean ζ,
the dVAR forecast error may still turn out to be larger than the EqCM forecast
error. Typically, this is the case if the parameter change (included in the EqCM)
is small relative to the contribution of the equilibrium-correcting term (which
is omitted in the dVAR) at the start of the forecast period.
  2 The underprediction of consumption expenditures in Norway during the mid-1980s,

which marred Norwegian forecasters for several consecutive forecasting rounds at that
time, is a relevant example; see Brodin and Nymoen (1989, 1992). Eitrheim et al.
(2002b) give a detailed analysis of the breakdown and reconstruction of the Norwegian con-
sumption function that took place in the wake of these forecast failures, and show that what
happened can be explained in the light of forecasting theory, see Section 2.4.2.
260                                             Forecasting using econometric models

    In the following, we generate multi-period forecasts from the econometric
model RIMINI, and compare these to the forecasts from models based on dif-
ferenced data. In order to provide some background to those simulations, this
section ﬁrst describes the main features of the incumbent EqCM and then
explains how we have designed the dVAR forecasting systems.

   The incumbent EqCM model—eRIM The quarterly macroecono-
metric model RIMINI has 205 equations3 which can be divided into three
categories:

• 146 deﬁnitional equations, for example, national accounting identities,
  composition of the work-force, etc;
• 33 estimated ‘technical’ equations, for example, price indices with diﬀerent
  base years and equations that serve special reporting purposes (with no
  feedback to the rest of the model);
• 26 estimated stochastic equations, representing economic behaviour.

The two ﬁrst groups of equations are identical in RIMINI and the dVAR
versions of the model. It is the speciﬁcations of the 26 econometric equa-
tions that distinguish the models. Together they contain putative quantitative
knowledge about behaviour relating to aggregate outcomes, for example,
consumption, savings, and household wealth; labour demand and unemploy-
ment; wage and price interactions (inﬂation); capital formation; foreign trade.
Seasonally unadjusted data are used for the estimation of the equations.
To a large extent, macroeconomic interdependencies are contained in the
dynamics of the model. For example, prices and wages are Granger-causing
output, trade and employment and likewise the level of the real activity feeds
back on to wage-price inﬂation. The model is an open system: examples of
important non-modelled variables are the level of economic activity by trading
partners, as well as inﬂation and wage-costs in those countries. Indicators of
economic policy (the level of government expenditure, the short-term interest
rate, and the exchange rate), are also non-modelled and the forecasts are there-
fore conditional on a particular scenario for these variables. In the following,
we refer to the incumbent version of RIMINI as eRIM.

   Two full scale dVAR models—dRIM and dRIMc Because all the
stochastic equations in RIMINI are in equilibrium correction form, a simple
dVAR version of the model, dRIM, can be obtained by omitting the equilibrium
correcting terms from the equation and re-estimating the coeﬃcients of the
remaining (diﬀerenced variables). Omission of signiﬁcant equilibrium-correcting
   3 See Section 1.4, in this application we have used Version 2.9 of the model. A large share

of the 205 endogenous variables are accounting identities or technical relationships creating
links between variables; see Eitrheim and Nymoen (1991) for a brief documentation of an
earlier version of the model.
11.2 EqCMs vs. dVARs                                                           261

terms means that the resulting diﬀerenced equations become mis-speciﬁed, with
autocorrelated and heteroskedastic residuals. From one perspective, this is not
a big problem: the main thrust of the theoretical discussion is that the dVAR
is indeed mis-speciﬁed within sample, cf. that the error-term y,t in the dVAR
equation (11.11) is autocorrelated provided that there is some autocorrelation
in the disequilibrium term in (11.7). The dVAR might still forecast better than
the EqCM, if the coeﬃcients relating to the equilibrium-correcting terms change
in the forecast period. That said, having a mis-speciﬁed dVAR does put that
model at a disadvantage compared to the EqCM. Section 11.2.1 suggests that
simply omitting the levels term while retaining the intercept may seriously
damage the dVAR forecasts. Hence we decided to re-model all the aﬀected
equations, in terms of diﬀerences alone, in order to make the residuals of the
dVAR-equations empirically white noise. The intercept was only retained for
levels variables. This constitutes the backbone of the dRIMc model.

    Two univariate models—dAR and dARr All three model versions con-
sidered so far are ‘system of equations’ forecasting models. For comparison,
we have also prepared single equation forecasts for each variable. The ﬁrst
set of single equation forecasts is dubbed dAR, and is based on unrestricted
estimation of AR(4) models. Finally, we generate forecasts from a completely
restricted fourth-order autoregressive model, hence forecasts are generated from
∆4 ∆ ln Xt = 0, for a variable Xt that is among the endogenous variables in the
original model. This set of forecasts is called dARr, where the r is a reminder
that the forecasts are based on (heavily) restricted AR(4) processes. Both dAR
and dARr are speciﬁed without drift terms, hence their forecasts are protected
against trend-misrepresentation. Thus, we will compare forecast errors from
ﬁve forecasting systems.
    Table 11.1 summarises the ﬁve models in terms of the incumbent ‘baseline’
EqCM model and the four ‘rival’ dVAR type models.

    Relative forecast performance 1992(1)–1994(4) All models that
enter this exercise were estimated on a sample ending in 1991(4). The period
1992(1)–1994(4) is used for forecast comparisons. That period saw the start
of a marked upswing in the Norwegian economy. Hence, several of the
model-endogenous variables change substantially over the 12 quarter forecast
period.
    In this paragraph, we ﬁrst use graphs to illustrate how the eRIM forecast
the interest rate level (RLB), housing price growth (∆4 ph), the rate of inﬂation
(∆4 cpi), and the level of unemployment (UTOT) compared to the four dVARs:
dRIM, dRIMc, dAR, and dARr. We evaluate three dynamic forecasts, distin-
guished by the start period: the ﬁrst forecast is for the whole 12 quarter horizon,
so the ﬁrst period being forecasted is 1992(1). The second simulation starts in
1993(1) and the third in 1994(1). Furthermore, all forecasts are conditional on
the actual values of the models’ exogenous variables and the initial conditions,
262                                      Forecasting using econometric models

                                 Table 11.1
                       The models used in the forecasts
Model     Name     Description
Baseline eRIM      26 Behavioural equations, equilibrium-correcting equations
                   33 + 146 Technical and deﬁnitional equations
1. Rival dRIM  26 Behavioural equations, re-estimated after omitting
                level terms
               33 + 146 Technical and deﬁnitional equations
2. Rival dRIMc 26 Behavioural equations, remodelled without
                levels-information
               33 + 146 Technical and deﬁnitional equations
3. Rival dAR   71 equations modelled as 4.order AR models
4. Rival dARr      71 equations modelled as restricted 4.order AR models


which of course change accordingly when we initialise the forecasts in diﬀerent
start periods.
    The results are summarised in Figures 11.1–11.3. Figure 11.1 shows actual
and forecasted values from the 12-quarter dynamic simulation. Looking at the
graph for the interest rate ﬁrst, the poor forecast from the dRIM model is
immediately evident. Remember that this model was set up by deleting all the
levels term in the individual EqCM equations, and then re-estimating these
mis-speciﬁed equations on the same sample as in eRIM. Hence, dRIM imposes
a large number of units roots while retaining the intercepts, and there is no
attempt to patch-up the resulting mis-speciﬁcation. Not surprisingly, dRIM is
a clear loser on all the four variables in Figure 11.1. This turns out to be a
typical result, it is very seldom that a variable is forecasted more accurately
with dRIM than with dRIMc, the re-modelled dVAR version of eRIM.
    Turning to dRIMc vs. eRIM, one sees that for the 12-quarter dynamic fore-
casts in Figure 11.1, the incumbent equilibrium-correcting model seems to
outperform dRIMc for interest rates, growth in housing prices, and the inﬂation
rate. However, dRIMc beats the EqCM when it comes to forecasting the rate
of unemployment.
    One might wonder how it is possible for dRIMc to be accurate about unem-
ployment in spite of the poor inﬂation forecasts. The explanation is found by
considering eRIM, where the level of unemployment aﬀects inﬂation, but where
there is very little feedback from inﬂation per se on economic activity. In eRIM,
the level of unemployment only reacts to inﬂation to the extent that inﬂation
accrues to changes in level variables, such as the eﬀective real exchange rates
or real household wealth. Hence, if eRIM generated inﬂation forecast errors of
the same size that we observe for dRIMc, that would be quite damaging for the
unemployment forecasts of that model as well. However, this mechanism is not
11.2 EqCMs vs. dVARs                                                                                   263

          Interest rate level, %                            House price growth rate
                                                    0.25
  15.0                                                                                          eRIM
                                                                                                  actual
                                          dAR       0.00                                          dRIMc
                                          dRIM                                                dAR, dARr
  12.5                                    dARr     –0.25

                                          dRIMc    –0.50
  10.0
                                          eRIM     –0.75
                                          actual                                                dRIM

         1992         1993         1994   1995             1992       1993            1994          1995

          Consumer price growth rate                        Unemployment rate                       dARr
                                          dRIM                                                      dAR
                                                   0.100
 0.075
                                                                                               dRIMc
                                          dRIMc                                                   actual
 0.050                                             0.075                                          eRIM
                                          dAR
                                                                                             dRIM
                                           dARr    0.050
 0.025                                     eRIM
                                          actual

         1992         1993         1994   1995             1992        1993           1994          1995

 Figure 11.1. The period 1992(1)–1994(4) forecasts and actual values for the
 interest rate level (RLB), housing price growth (∆4 ph), the rate of inﬂation
               (∆4 cpi), and the level of unemployment (UTOT)

present in dRIMc, since all levels terms have been omitted. Hence, the unem-
ployment forecasts of the dVAR versions of RIMINI are eﬀectively insulated
from the errors in the inﬂation forecast. In fact, the ﬁgures conﬁrm the empirical
relevance of Hendry’s (1997a) claim that when the data generating mechanism
is unknown and non-constant, models with less causal content (dRIMc) may
still outperform the model that contains a closer representation of the underly-
ing mechanism (eRIM). The univariate forecasts, dAR and dARr, are also way
oﬀ the mark for the interest rate and for the unemployment rate. However,
the forecast rule ∆4 ∆cpit = 0, in dARc, predicts a constant inﬂation rate that
yields a quite good forecast for inﬂation in this period; see Figure 11.1.
     Figure 11.2 shows the dynamics forecast for the same selection of variables,
but now the ﬁrst forecast period is 1993(1). For the interest rate, the ranking
of dRIMc and eRIM forecasts is reversed from Figure 11.1: dRIMc is spot on for
most of the forecast-horizon, while eRIM consistently overpredicts. Evidently,
dRIMc uses the information embodied in the actual development in 1992 much
more eﬃciently than eRIM. The result is a good example of the intercept-
correction provided by diﬀerencing. Equations (11.34) and (11.35) show that if
the parameters of the EqCM change prior to the start of the forecast (i.e. in
1992 in the present case), then the dVAR might constitute the better fore-
casting model. Since the loan interest rate is a major explanatory variable
for housing price growth (in both eRIM and dRIMc), it is not surprising that
264                                            Forecasting using econometric models

        Interest level, %                             Housing price growth rate
 15.0                                dAR
                                                                                  eRIM
                                     dARr                                                actual
                                                                       dRIMc
                                     dRIM      0.00                                      dAR
 12.5                                                                                    dARr
                                              –0.25
 10.0                       eRIM
                                              –0.50
                   dRIMc             actual                                              dRIM
        1993                1994       1995           1993           1994                 1995

        Consumer price growth rate                    Unemployment rate
 0.08                                 dRIM                                                 dAR
                                               0.10                                        dARr
 0.06                                dRIMc

                                      dAR      0.08                                        actual
 0.04                                                                  dRIMc
                                      eRIM                                                 dRIM
                                      dARr                                                 dRIM
 0.02                                actual    0.06


        1993                1994       1995           1993            1994                  1995

 Figure 11.2. The period 1993(1)–1994(4) forecasts and actual values for the
 interest rate level (RLB), housing price growth (∆4 ph), the rate of inﬂation
               (∆4 cpi), and the level of unemployment (UTOT)

the housing price forecasts of the dRIMc are much better than in Figure 11.1.
That said, we note that, with the exception of 1993(4) and 1994(2), eRIM
forecasts housing prices better than dRIMc, which is evidence of countervail-
ing forces in the forecasts for housing prices. The impression of the inﬂation
forecasts are virtually the same as in the previous ﬁgure, while the graph of
actual and forecasted unemployment shows that eRIM wins on this forecast
horizon.
    The 4-period forecasts are shown in Figure 11.3, where simulation starts in
1994(1). Interestingly, also the eRIM interest rate forecasts have now adjusted.
This indicates that the parameter instability that damaged the forecasts that
started in 1993(1) turned out to be a transitory shift. dRIMc now outperforms
the housing price forecasts of eRIM. The improved accuracy of dARr as the
forecast period is moved forward in time is very clear. It is only for the interest
rate that the dARr is still very badly oﬀ target. The explanation is probably
that using ∆4 ∆xt = 0 to generate forecasts works reasonably well for series
with a clear seasonal pattern, but not for interest rates. This is supported by
noting the better interest rate forecast of dAR, the unrestricted AR(4) model.
    The relative accuracy of the eRIM forecasts, might be conﬁned to the four
variables covered by Figures 11.1–11.3. In Eitrheim et al. (1999) we therefore
compare the forecasting properties of the ﬁve diﬀerent models on a larger
11.2 EqCMs vs. dVARs                                                                                    265

          Interest rate level, %                             House price growth rate
                                       dRIM
     9                                  dRIMc                                        eRIM
                                        eRIM          0.1                                 dAR
     8                                 actual                            dARr            actual
                                                                                   dRIMc
     7                                 dAR
                                                      0.0
     6
                                                     –0.1
     5
     4                                 dARr                                               dRIM
                                                     –0.2
             1994                            1995              1994                            1995

          Consumer price growth rate                          Unemployment rate
                                        dRIM          0.10
   0.06
                                                                                           dARr
                                                      0.09                                  dAR
                                        dRIMc
   0.04                                                                                eRIM
                                                      0.08                                 actual
                                        dAR
                                        eRIM                                               dRIMc
   0.02                                dARr           0.07
                                       actual
                                                                                           dRIM
             1994                             1995               1994                            1995

 Figure 11.3. The period 1994(1)–1994(4) forecasts and actual values for the
 interest rate level (RLB), housing price growth (∆4 ph), the rate of inﬂation
               (∆4 cpi), and the level of unemployment (UTOT)


(sub)set of 43 macroeconomic variables). The list includes most of the vari-
ables that are regularly forecasted, such as GDP growth, the trade balance,
wages, and productivity.
   Eitrheim et al. (1999) follow convention and use the empirical root mean
square forecast errors (RMSFE). The theoretical rationale for RMSFE is the
mean squared forecast error (MSFE)
                            MSFEmod = E[yT +h − ŷT +h,mod | IT ]2 ,

where ŷT +h,mod = E[yT +h | IT ] and mod is either dVAR or EqCM. The MSFE
can be rewritten as
                         MSFEmod = bias 2T +1,mod + Var[yT +h | IT ].

   Conditional on the same information set IT , the model with the largest
squared bias has also the highest MSFE, and consequently the highest squared
RMSFE.4
  4 Abstracting from the problem that the information sets diﬀer across the models consid-

ered, and apart from the fact that we use the empirical RMSFE (rather than the theoretical),
ranking of the models according to RMSFE is the same as ranking by the squared bias. For a
more comprehensive analysis of the use of RMSFEs for model comparisons and the potential
pitfalls involved, see for example, Ericsson (1992), Clements and Hendry (1993).
266                                       Forecasting using econometric models

    Table 11.2 shows the placements of the ﬁve models in the 43 horse races.
The incumbent model has the lowest RMSFE for 24 out of the 43 variables,
and also has 13 second places. Hence eRIM comes out best or second best for
86% of the horse races, and seems to be a clear winner on this score. The
two ‘diﬀerence’ versions of the large econometric model (dRIMc and dRIM)
have very diﬀerent fates. dRIMc, the version where each behavioural equation
is carefully re-modelled in terms of diﬀerences is a clear second best, while
dRIM is just as clear a loser, with 27 bottom positions. Comparing the two sets
of univariate forecasts, it seems like the restricted version (∆4 ∆xt ) behaves
better than the unrestricted AR model. Finding that the very simple forecasting
rule in dARr outperforms the full model in 6 instances (and is runner-up in
another 8), in itself suggests that it can be useful as a baseline and yardstick
for the model-based forecasts.


                                  Table 11.2
                    Results of 43 RMSFE forecast contests
               Place #    eRIM    dRIMc     dRIM    dAR    dARr
               (a) 12 period forecasts, 1992(1)–1994(4)
               1           24       13        1      1        6
               2           13       11        4      5        8
               3            2        6        5      7       13
               4            2       12        6     15       10
               5            2        1       27      7        6
               (b) 4 period forecasts, 1992(1)–1992(4)
               1             7        8      10      6       12
               2           17       13        3      4        6
               3           13         7       8     10        7
               4             3      11        2     17        9
               5             3        4      20      6        9
               (c) 4 period forecasts, 1993(1)–1993(4)
               1           17         9       7      1       11
               2           16       13        7      2        3
               3             3      12       11     12        5
               4             3        9       2     17       12
               5             4        0      16     11       12
               (d) 4 period forecasts, 1994(1)—1994(4)
               1           13         4       5     5        16
               2           11       17        1     9         6
               3             7        8      11     9         7
               4             7        8      13     9         6
               5             5        6      13    11         8
11.3 Model speciﬁcation and forecast accuracy                                   267

    Parts (b)–(d) in Table 11.2 collect the results of three 4-quarter forecast
contests. Interestingly, several facets of the picture drawn from the 12-quarter
forecasts and the graphs in Figures 11.1–11.3 appear to be modiﬁed. Although
the incumbent eRIM model collects a majority of ﬁrst and second places, it is
beaten by the double diﬀerence model ∆4 ∆xt = 0, dARr, in terms of ﬁrst places
in two of the three contests. This shows that the impression from the ‘headline’
graphs, namely that dARr works much better for the 1994(1)–1994(4) forecast,
than for the forecast that starts in 1992, carries over to the larger set of vari-
ables covered by Table 11.2. In this way, our result shows in practice what the
theoretical discussion foreshadowed, namely that forecasting systems that are
blatantly mis-speciﬁed econometrically, nevertheless can forecast better than
the econometric model with a higher causal content.
    The results seem to corroborate the analytical results above. For short
forecast horizons like, for example, 4-quarters, simple univariate dARr mod-
els oﬀer much more protection against pre-forecast breaks compared with the
other models, and their forecast errors are also insulated from forecast errors
elsewhere in a larger system. However, the dARr model seems to lose this
advantage relative to the other models as we increase the forecast horizon.
The autonomous growth bias in dVAR type models tend to multiply as we
increase the forecast horizon, causing the forecast error variance to ‘explode’.
Over long forecast horizons we would then typically see huge dVAR biases rel-
ative to the EqCM forecast bias. Finally, neither of the models protect against
breaks that occur after the forecast is made.


11.3      Model speciﬁcation and forecast accuracy
Forecasters and policy decision-makers often have to choose a model to use
from a whole range of diﬀerent models, all claiming to represent the economy
(or the part of it that is the focal point of the forecasting exercise). The current
range of wage and price models that can be used for inﬂation forecasting pro-
vides an example. As we have discussed earlier, in Chapter 9, inﬂation targeting
implies that the central bank’s conditional forecast 1–2 years ahead becomes
the intermediate target of monetary policy. Consequently, there is a strong
linkage between model choice, forecasting, and policy analysis in this case.
    The statistical foundation for a conditional forecast as an operational target
is that forecasts calculated as the conditional mean are unbiased and no other
predictor (conditional on the same information set) has smaller MSFE, provided
the ﬁrst two moments exist. However, as discussed earlier in this chapter, the
practical relevance of the result is reduced by the implicit assumption that the
model corresponds to the data generating process (DGP), and that the DGP
is constant over the forecast horizon. Credible forecasting methods must take
into account that neither condition is likely to be fulﬁlled in reality. However,
the speciﬁc inﬂation models have one important trait in common: they explain
inﬂation—a growth rate—by not only other growth rates but also cointegrating
combinations of levels variables. Thus, they are explicitly or implicitly EqCMs.
268                                      Forecasting using econometric models

    Implications for inﬂation models’ forecasting properties between models
with and without equilibrium-correcting mechanisms have been analysed in
Bårdsen et al. (2002a). This chapter draws on their results, and extends the
analysis of diﬀerent inﬂation models reported in earlier chapters. Speciﬁcally,
we consider the two most popular inﬂation models, namely Phillips curves and
dynamic wage curve speciﬁcations (or dynamic ICMs). These models were dealt
with extensively in Chapters 4–6. The standard Phillips Curve Model (denoted
PCM), is formally an EqCM, the cointegrating term being the output gap or,
alternatively, the diﬀerence between the rate of unemployment and the natural
rate, that is, ut − uphil in the notation of Chapter 4. An alternative to the
PCM, consistent with the concept of a wage curve, was discussed extensively
in Chapters 5 and 6, where it was dubbed the Imperfect Competition Model
(ICM) because of the role played by bargaining and of imperfect competition.
Since wage-curve models are EqCM speciﬁcations, they are vulnerable to regime
shifts, for example, changes in equilibrium means.
    The existing empirical evidence is mixed. Although varieties of Phillips
curves appear to hold their ground when tested on United States data—see
Fuhrer (1995), Gordon (1997), Blanchard and Katz (1999), Galı́ and Gertler
(1999)—studies from Europe usually conclude that ICMs are preferable, see,
for example, Drèze and Bean (1990, table 1.4), Wallis (1993), OECD (1997b,
table 1.A.1), and Nymoen and Rødseth (2003). In Chapters 4 and 6 we pre-
sented both models (PCM and ICM) for Norway. In those models, and unlike
most of the papers cited above, which focus only on wage formation or inﬂation,
the rate of unemployment was modelled as part of the system. It transpired that
the speed of adjustment in the PCM was so slow that little practical relevance
could be attached to the formal dynamic stability of the PCM. No such incon-
sistency existed for the ICM, where the adjustment speed was fast, supporting
strong dynamic stability.
    Inﬂation targeting central banks seem to prefer the PCM, because it repres-
ents the consensus model, and it provides a simple way of incorporating the
thesis about no long-run tradeoﬀ between inﬂation and the activity level, which
is seen as the backbone of inﬂation targeting (see, for example, King 1998).
    In Section 11.3.1, we discuss the algebra of inﬂation forecasts based on the
competing models. Section 11.3.3 evaluates the forecasting properties of the
two models for Norwegian inﬂation.

11.3.1     Forecast errors of stylised inﬂation models
We formulate a simple DGP to investigate the theoretical forecasting
capabilities of the ICM and the PCM, thus providing a background for the
interpretation of the actual forecast errors in Section 11.3.3. The variable
symbols take the same meaning as in the earlier chapters on wage–price mod-
elling (see Chapter 6), hence (in logs) wt is the wage rate, pt is the consumer
price index, pit denotes import prices, and ut is the rate of unemployment.
11.3 Model speciﬁcation and forecast accuracy                                          269

    In order to obtain an analytically tractable distillation of the models,
we introduce simplifying assumptions. For example, we retain only one
cointegrating relationship, the ‘wage-curve’, and we also abstract from
productivity.5 Thus (11.44) is a simpliﬁed version of the dynamic wage equation
of Chapter 6:
  ∆(w − p)t = κ − πw [(w − p)t−1 + λut−1 − µ] + w,t ,                πw > 0,    λ > 0.
                                                                       (11.44)
The wage-curve is the term in square brackets. The parameter µ
denotes the mean of the long-run relationship for real wages, that is,
E[(w − p)t−1 − λut−1 − µ] = 0. Since we abstract from the cointegration rela-
tionship for consumer prices, the simultaneous equation representation of the
inﬂation equation is simply that ∆pt is a linear function of ∆pit and ∆wt , and
the reduced form equation for ∆pt is:
            ∆pt = φp + ϕpi ∆pit − πp [(w − p)t−1 + λut−1 − µ] + p,t ,
                    ϕpi ≥ 0,    πp ≥ 0.                                           (11.45)
Multi-step (dynamic) forecasts of the rate of inﬂation require that also import
price growth and the rate of unemployment are forecasted. In order to simplify
as much as possible, we let ∆pit and ut follow exogenous stationary processes:
                      ∆pit = φpi + pi,t ,                                         (11.46)
                       ∆ut = φu − πu ut−1 + u,t ,          πu > 0.                (11.47)
IT denotes the information set available in period T . The four disturbances
( w,t , p,t , pi,t , u,t ) are innovations relative to IT , with contemporaneous
covariance matrix Ω. Thus, the system (11.44)–(11.47) represents a simple DGP
for inﬂation, the real wage, import price growth, and the rate of unemployment.
The forecasting rule
       T +h = E[∆pT +h | IT ] = a0 + a1 δpi + a2 E[(w − p)T +h−1 | IT ]
      ∆p
                                 + a3 E[uT +h−1 | IT ],     h = 1, 2, . . . , H
                                                                                  (11.48)
with coeﬃcients
                                    a0 = φp + πp µ,
                                    a1 = ϕpi ,
                                    a2 = −πp ,
                                    a3 = −πp λ
is the minimum MSFE predictor of ∆pT +h , by virtue of being the conditional
expectation.
  5 Compared to the algebraic sections of Chapter 6, we omit productivity. Naturally, it is

included as a non-modelled explanatory variable in the empirical models.
270                                          Forecasting using econometric models

    First, we abstract from estimation uncertainty and assume that the param-
eters are known. The dynamic ICM forecast errors have the following means
and variances:
                    T +h,ICM | IT ] = 0,
        E[∆pT +h − ∆p                                                                (11.49)
                                                            
                                                            h−1
                    T +h,ICM | IT ] = σp2 + σpi
      Var[∆pT +h − ∆p                         2
                                                 + a22            (1 − πw )2(h−1−i) σw
                                                                                     2

                                                            i=1
                                                           
                                                           h−1
                                         + a22 (πw λ)2           (1 − πw )2(h−1−i)
                                                           i=1
                                             
                                             i
                                         ×         (1 − πu )2(i−j) σu2
                                             j=1

                                                 
                                                 h−1
                                         + a23         (1 − πu )2(h−1−i) σu2 .       (11.50)
                                                 i=1

The ﬁrst two terms on the right-hand side of (11.50) are due to p,T +h and
 pi,T +h . The other terms on the right-hand side of (11.50) are only relevant for
h = 2, 3, 4, . . . , H. The third and fourth terms stem from (w − p)T +h−1 —it is
a composite of both wage and unemployment innovation variances. The last
line contains the direct eﬀect of Var[uT +h−1 ] on the variance of the inﬂation
forecast. In addition, oﬀ-diagonal terms in Ω might enter.
    We next consider the case where a forecaster imposes the PCM restriction
πw = 0 (implying πp = 0 as well). The ‘Phillips curve’ inﬂation equation is
then given by:
                       ∆pt = ã0 + ã1 ∆pit + ã3 ut−1 + ˜p,t ,                      (11.51)
with
 ã0 = a0 + a2 λE[ut−1 ] + a2 µ and     ˜p,t = p,t + a2 [(w − p)t−1 − λut−1 − µ].
This deﬁnition ensures a zero-mean disturbance E[˜p,t | IT ] = 0. Note also that
Var[˜p,t | It−1 ] = σp2 , that is, the same innovation variance as in the ICM-case.
The PCM forecast rule becomes
           T +h,PCM = E[∆pT +h,PCM | IT ] = ã0 + ã1 δpi + ã4 ûT +h−1 .
          ∆p
The mean and variance of the 1-step forecast error are
                       T +1,PCM | IT ] = (a1 − ã1 )δpb + uT (a3 − ã3 )uT
          E[∆pT +1 − ∆p
                                           + a2 {(w − p)T − λE[ut ] − µ},
                      
         Var[∆pT +1 − ∆pT +1,PCM | IT ] = σp2 + σpi
                                                 2
                                                    .
The 1-step ahead prediction error variance conditional on IT is identical to the
ICM-case. However, there is a bias in the 1-step PCM forecast arising from
two sources: ﬁrst, omitted variables bias implies that a1 = ã1 and/or a3 = ã3 ,
11.3 Model speciﬁcation and forecast accuracy                                        271

in general. Second,
                             (w − p)T − λE[ut ] − µ = 0
unless (w − p)T = E[(w − p)t ], that is, the initial real wage is equal to the
long-run mean of the real-wage process.
   For dynamic h period ahead forecasts, the PCM prediction error becomes
             T +h,PCM = (a1 − ã1 )δpb + (a3 − ã3 )ûT +h−1
   ∆pT +h − ∆p
                                      
                                      h−1
                               + a3         (1 − πu )h−1−i u,T +i + pi,T +h + p,T +h
                                      i=1
                               + a2 (w − p)T +h−1 − a2 (λE[ut ] − µ).
Taking expectation and variance of this expression gives:
               T +h,PCM | IT ] = (a1 − ã1 )δpi + (a4 − ã4 )ûT +h−1
   E[∆pT +h − ∆p
                                  + a2 {E[(w − p)T +h−1 | IT ] − λE[ut ] − µ},
                                                T +h,ICM | IT ],
 Var[∆pT +h − ∆pT +h,PCM | IT ] = Var[∆pT +h − ∆p
                                      for h = 2, 3, . . . , H.
Hence systematic forecast error is again due to omitted variables bias and the
fact that the conditional mean of real wages h − 1 periods ahead, departs from
its (unconditional) long-run mean. However, for long forecast horizons, large H,
the bias expression can be simpliﬁed to become
          E[∆pT +H − ∆p T +H,PCM | IT ] ≈ (a1 − ã1 )δpi + (a4 − ã4 ) ϕu
                                                                         πu
since the conditional forecast of the real wage and of the rate of unemployment
approach their respective long-run means.
    Thus far we have considered a constant parameter framework: the param-
eters of the model in equations (11.44)–(11.47) remain constant not only in the
sample period (t = 1, . . . , T ) but also in the forecast period (t = T + 1, . . . , T +
h). However, as discussed, a primary source of forecast failure is structural
breaks, especially shifts in the long-run means of cointegrating relationships
and in parameters of steady-state trend growth. Moreover, given the occurrence
of deterministic shifts, it no longer follows that the ‘best’ econometric model
over the sample period also gives rise to the minimum MSFE; see, for example,
Section 11.2.
    That a tradeoﬀ between close modelling and robustness in forecasting also
applies to wage–price dynamics is illustrated by the following example: assume
that the long-run mean µ of the wage-equation changes from its initial level to
a new level, that is, µ → µ∗ , before the forecast is made in period T , but that
the change is undetected by the forecaster. There is now a bias in the (1-step)
ICM real-wage forecast:
                           
          E[(w − p)T +1 − (w − p)T +1,ICM | IT ] = −πw [µ − µ∗ ],                (11.52)
which in turn produces a non-zero mean in the period 2 inﬂation forecast error:
                              T +2,ICM | IT ] = −a2 πw [µ − µ∗ ].
                  E[∆pT +2 − ∆p                                                  (11.53)
272                                       Forecasting using econometric models

The PCM-forecast on the other hand, is insulated from the parameter change
in wage formation, since (w  − p)T +h−1 does not enter the predictor—the fore-
cast error is unchanged from the constant parameter case. Consequently, both
sets of forecasts for ∆pT +2+h are biased, but for diﬀerent reasons, and there
is no logical reason why the PCM forecast could not outperform the ICM
forecast on a comparison of biases. In terms of forecast properties, the PCM,
despite the inclusion of the rate of unemployment, behaves as if it was a dVAR,
since there is no feedback from wages and inﬂation to the rate of unemployment
in the example DGP.
    Finally, consider the consequences of using estimated parameters in the two
forecasting models. This does not change the results about the forecast biases.
However, the conclusion about the equality of forecast error variances of the
ICM and PCM is changed. Speciﬁcally, with estimated parameters, the two
models do not share the same underlying innovation errors. In order to see
this, consider again the case where the ICM corresponds to the DGP. Then
a user of a PCM does not know the true composition of the disturbance ˜p,t
in (11.51), and the estimated PCM will have an estimated residual variance
that is larger than its ICM counterpart, since it is inﬂuenced by the omitted
wage-curve term. In turn, the PCM prediction errors will overstate the degree
of uncertainty in inﬂation forecasting. We may write this as

                    Var[˜p,t | IT , PCM] > Var[ p,t | IT , ICM]

to make explicit that the conditioning is with respect to the two models (the
DGP being unknown). From equation (11.51) it is seen that the size of the dif-
ference between the two models’ residual variances depends on (1) the strength
of equilibrium correction and (2) the variance of the long-run wage curve.
    The main results of this section can be summarised in three points:

1. With constant parameters in the DGP, forecasting using the PCM will bias
   the forecasts and overstate the degree of uncertainty (i.e. if the PCM involves
   invalid parameter restrictions relative to the DGP).
2. PCM forecasts are however robust to changes in means of (omitted) long-run
   relationships.
3. Thus PCM shares some of the robustness of dVARs, but also some of their
   drawbacks (speciﬁcally, excess inﬂation uncertainty).

    In sum, the outcome of a forecast comparison is not a given thing, since
in practice we must allow for the possibility that both forecasting models are
mis-speciﬁed relative to the generating mechanism that prevails in the period
we are trying to forecast. A priori we cannot tell which of the two models will
forecast best. Hence, there is a case for comparing the two models’ forecasts
directly, even though the econometric evidence presented in earlier chapters
has gone in favour of the ICM as the best model.
11.3 Model speciﬁcation and forecast accuracy                                          273

11.3.2       Revisiting empirical models of Norwegian
             inﬂation
The deﬁnitions of the variables are in line with those we presented for the ICM
in Chapter 9, but the sample is diﬀerent and covers the period 1966(4)–1996(4).
The wage variable wt is average hourly wages in the mainland economy, exclud-
ing the North Sea oil-producing sector and international shipping. The produc-
tivity variable at is deﬁned accordingly. The price index pt is measured by the
oﬃcial consumer price index. The import prices index pit is a weighted average
of import price indices from trading countries. The unemployment variable ut is
deﬁned as a ‘total’ unemployment rate, including labour market programmes.
The tax-rates t1t and t3t are rates of payroll tax and indirect tax, respectively.6
    The output gap variable gapt is measured as deviations from the trend
obtained by the Hodrick–Prescott (HP) ﬁlter. The other non-modelled variables
contain ﬁrst the length of the working day ∆ht , which captures wage com-
pensation for reductions in the length of the working day—see Nymoen (1989b).
Second, incomes policies and direct price controls have been in operation on
several occasions in the sample period; see, for example, Bowitz and Cappelen
(2001). The intervention variables W dum and P dum, and one impulse dummy
i80q2, are used to capture the impact of these policies. Finally, i70q1 is
a VAT dummy.

   The dynamic ICM As in the earlier chapters we have two simultaneous
equations for ∆wt and ∆pt , with separate and identiﬁed equilibrium correction
equations terms. Estimation is by full information maximum likelihood (FIML),
and the coeﬃcients and diagnostics of the ﬁnal ICM for our current sample are
shown in (11.54) and in Table 11.3.

 t = ∆pt − 0.4 × 0.36∆pit − ∆t1t−2 − 0.36 ∆t3t−2 − 0.3 ∆ht
∆w
                                         (0.08)        (0.11)
        − (0.08)[wt−2 − pt−2 − at−1 + 0.1ut−2 ] + dummies
          (0.01)
σ̂∆w = 1.02%
 t = 0.12 (∆wt + ∆t1t−2 ) + 0.05 gap t−1 + 0.4 × 0.07∆pit − 0.07 ∆t3t−2
 ∆p
       (0.05)                   (0.02)                        (0.03)
       − 0.08 [pt−3 − 0.6(wt−1 − at−1 + t1t−1 ) − 0.4pit−1 + t3t−3 ] + dummies
          (0.01)
σ̂∆p = 0.41%.                                                            (11.54)

   6 An income tax rate could appear as well. It is omitted from the empirical model, since

it is insigniﬁcant. This is in accordance with previous studies of aggregate wage formation,
see, for example, Calmfors and Nymoen (1990) and Nymoen and Rødseth (2003), where no
convincing evidence of important eﬀects from the average income tax rate on wage growth
could be found.
274                                             Forecasting using econometric models

                                      Table 11.3
                        Diagnostic tests for the dynamic ICMa
                                             σ̂∆w = 1.02%
                                              σ̂∆p = 0.41%
                    Correlation of residuals = −0.4
                           χ2overidentiﬁcation (9) = 9.23[0.42]
                            FvAR(1-5) (20, 176) = 1.02[0.31]
                                   χ2,v
                                     normality (4) = 6.23[0.18]
                             v
                           FHETx2 (102, 186) = 0.88[0.76]
               a
                   The sample is 1966(4)–1994(4), 113 observations.



                                       Table 11.4
                             Diagnostic tests for the PCMb
                                            σ̂∆w = 1.07%
                                             σ̂∆p = 0.47%
                    Correlation of residuals = −0.6
                         χ2overidentiﬁcation (16) = 25.13[0.07]
                            FvAR(1-5) (20, 176) = 1.02[0.44]
                                  χ2,v
                                    normality (4) = 6.23[0.18]
                             v
                           FHETx2 (102, 257) = 0.81[0.84]
               b
                   The sample is 1967(1)–1994(4), 112 observations.



    The PCM When estimating a PCM, we start out from the same informa-
tion set as for the ICM, but with more lags in the dynamics, to make sure we
end up with a data-congruent speciﬁcation. This is to secure that the forecast
comparison below is not harmed by econometric mis-speciﬁcation. It is not
implied that the resulting model, given in (11.55), would be seen as the preferred
choice if one started out (possibly from another information set) with the aim
of ﬁnding the best PCM, also in terms of economic interpretation.7 As the
diagnostic tests in Table 11.4 show, the model encompasses its reduced form
and shows no sign of mis-speciﬁcation. The estimated standard errors, however,
are for both equations higher than the corresponding ones found in the ICM.


  7 Dynamic price homogeneity in the wage Phillips curve cannot be rejected statistically,

and is therefore imposed.
11.3 Model speciﬁcation and forecast accuracy                                                                  275

 (a)        1-step residuals of wage equation              (b)          1-step residuals of price equation
                                                   +2s
  0.02                                                                                                       +2s
                                                                 0.01


  0.00                                                           0.00


 –0.02                                                       –0.01
                                                  –2s                                                        –2s
       1975      1980      1985        1990        1995            1975      1980      1985      1990        1995
 (c)        Test of overidentifying restrictions           (d)          Forecast Chow tests for the model
                                                                 1.00
                           Sequence of overidentifying
                           test statistics                                5% significance level critical value
       30
                                5% significance level
                                                                 0.75
                                critical value

       25                                                        0.50
                                                                          Sequence of Chow statistics
                                                                 0.25
       1975      1980      1985        1990         1995           1975      1980      1985      1990        1995

                    Figure 11.4. Recursive stability tests for the PCM


 t = 1.11 ∆pt − 0.11∆pit − 0.65 ∆t1t − 0.41 ∆t1t−2 − 0.01 ∆ut−3
∆w
        (0.04)                 (0.22)       (0.21)          (0.005)
         − 0.006 ut−1 − 0.16 ∆t3t−1 − 0.34 ∆t3t−2 − 0.30 ∆ht + dummies
           (0.001)      (0.09)         (0.09)          (0.11)
σ̂∆w = 1.07%
 t = 0.14 ∆wt + 0.07 ∆wt−3 + 0.17 ∆pt−1 + 0.27 ∆pt−2 + 0.05 ∆pit
 ∆p
        (0.03)      (0.02)         (0.05)         (0.05)         (0.02)
         − 0.03∆at−1 + 0.05 gapt−1 + dummies
          (0.006)      (0.01)
 σ̂∆p = 0.47%.                                                        (11.55)


    Parameter constancy of the PCM is demonstrated graphically in
Figure 11.4. The two 1-step residuals with their ±2 estimated residual standard
errors (±2σ in the graphs) are in the upper panels, while the lower right panel
shows the sequence of recursive forecast Chow tests together with their one-oﬀ
5% critical level. The lower left panel shows that the model encompasses the
unrestricted reduced form as the sample size increases (i.e. the end point of the
graph corresponds to Overidentiﬁcation χ2 (16) in Table 11.4).
    Hence, using these conventional design criteria, the PCM seems passable,
and it is attractive as a forecasting model since it is simpler than the ICM.
276                                         Forecasting using econometric models

11.3.3          Forecast comparisons
Both models condition upon the rate of unemployment ut , average labour
productivity at , import prices pit , and GDP mainland output yt . In order
to investigate the dynamic forecasting properties we enlarge both models with
relationships for these four variables, in the same manner as in Chapter 9.
    Figure 11.5 illustrates how the ICM-based model forecast the growth rates of
wages and prices, ∆wt and ∆pt . It is also instructive to consider the forecasts for
the change in the real wage ∆(w−p)t and the annual rate of inﬂation, ∆4 pt . The
forecast period is from 1995(1) to 1996(4). The model parameters are estimated
on a sample which ends in 1994(4). These dynamic forecasts are conditional
on the actual values of the non-modelled variables (ex post forecasts). The
quarterly inﬂation rate ∆pt only has one signiﬁcant bias, in 1996(1). In that
quarter there was a reduction in the excises on cars that explains around 40%
of this particular overprediction. In the graphs of the annual rate of inﬂation
∆4 pt this eﬀect is naturally somewhat mitigated. The quarterly change in the
wage rate ∆wt is very accurately forecasted, so the only forecast error of any
importance for the change in real wages ∆(w − p)t also occurs in 1996(1). The
forecasts for the rate of unemployment are very accurate for the ﬁrst 5 quarters,
but the reduction in unemployment in the last 3 quarters does not appear to
be predictable with the aid of this model.


        ∆wt                                          ∆pt
0.050

                                             0.01
0.025

                                             0.00
0.000

                                            –0.01
        1995         1996          1997               1995       1996          1997

        ∆4pt                                         ∆(w – p)t
 0.04                                        0.050
 0.03
                                             0.025
 0.02
 0.01
                                             0.000
 0.00

–0.01                                       –0.025
         1995         1996          1997              1995       1996          1997

                                   Actual       Forecast

  Figure 11.5. The 8-step dynamic forecasts for the period 1995(1)–1996(4),
                   with 95% prediction bands of the ICM
11.3 Model speciﬁcation and forecast accuracy                                       277

        ∆wt                                               ∆pt
                                                   0.02
 0.04

 0.02                                              0.01


 0.00                                              0.00

–0.02
        1995            1996          1997                 1995       1996         1997

        ∆4pt                                              ∆(w – p)t

0.050
                                                  0.025

0.025
                                                  0.000

0.000
                                               –0.025

         1995            1996          1997                1995       1996         1997

                                      Actual         Forecast

  Figure 11.6. The 8-step dynamic forecasts for the period 1995(1)–1996(4),
                   with 95% prediction bands of the PCM


    Figure 11.5 also contains the 95% prediction intervals in the form of ±2
standard errors, as a direct measure of the uncertainty of the forecasts. The
prediction intervals for the annual rate of inﬂation are far from negligible and
are growing with the length of the forecast horizon.
    Next, Figure 11.6 illustrates how the model based on the Phillips curve
forecast the same variables over the same period from 1995(1) to 1996(4).
For most variables the diﬀerences are negligible. For the quarterly inﬂation
rate ∆pt in particular, the Phillips curve speciﬁcation seems to be no worse
than the ICM as regards the point forecasts, although the prediction inter-
vals are somewhat wider, due to the larger residual variances in wage- and
price-setting.
    However, in the graphs of the annual rate of inﬂation ∆4 pt there is after all a
clear diﬀerence between the predictions on this one-oﬀ comparison. ∆4 p̂T +h,mod
is simply a 4-quarter moving average of the quarterly rates, and the same is
true for the prediction errors, thus
                                            
                                            3
               ∆4 pT +h − ∆4 p̂T +h,mod =         (∆pT +h−i − ∆p̂T +h−i,mod ),
                                            i=0
                 mod = ICM, PCM.                                                 (11.56)
278                                          Forecasting using econometric models

Until 1995(4) there is zero bias in ∆4 p̂T +h,PCM because all the preceding
quarterly forecasts are so accurate. However, ∆4 p̂T +h,PCM becomes biased
from 1996(1) and onwards because, after the overprediction of the quarterly
rate in 1996(1), there is no compensating underprediction later in 1996. The
ICM forecasts on the other hand achieve exactly that correction, and do not
systematically overpredict inﬂation.
   For the annualised inﬂation rate the uncertainty increases quite rapidly for
both models, but markedly more so for the Phillips curve forecast. Indeed,
by the end of the two-year period, the forecast uncertainty of the Phillips
curve is about twice as big as the dynamic ICM. This eﬀect is clearly seen
when the annual inﬂation forecasts from the two models are shown in the
same graph (Figure 11.7). The dotted lines denote the point forecasts and
the 95% prediction bands of the dynamic ICM, while the solid lines depict
the corresponding results from the forecasts of the Phillips curve speciﬁcation.
At each point of the forecast the uncertainty of the Phillips curve is bigger
than for the ICM. Indeed, while the ICM has a standard error of 0.9 percent-
age points 4 periods ahead, and 1.2 percentage points 8 periods ahead, the
Phillips curve standard errors are 1.6 and 2 percentage points, respectively.
Considering equation (11.56) it transpires that the explanation is not only that
each Var[∆pT +h − ∆p̂T +h,PCM ] > Var[∆pT +h − ∆p̂T +h,ICM ], but also that the
PCM quarterly prediction errors are more strongly positively autocorrelated
than the ICM counterparts.


                D4p
        0.06    Dynamic ICM
                Philips curve model
        0.05

        0.04

        0.03

        0.02

        0.01

        0.00

       –0.01

               1994                   1995         1996            1997

  Figure 11.7. Comparing the annual inﬂation forecasts of the two models.
 The thin line is actual annual inﬂation in Norway. The dashed lines denote
 the point forecasts and the 95% prediction error bands of the ICM model,
   while the solid lines depict the corresponding results from the forecasts
                             of the PCM in (11.55)
11.4 Summary and conclusions                                                  279


11.4      Summary and conclusions
The dominance of EqCMs over systems consisting of relationships between
diﬀerenced variables (dVARs) relies on the assumption that the EqCM model
coincides with the underlying data generating mechanism. However, that
assumption is too strong to form the basis of practical forecasting. First, para-
meter non-constancies, somewhere in the system, are almost certain to arise in
the forecast period. The example in Section 11.2.1 demonstrated how allowance
for non-constancies in the intercept of the cointegrating relations, or in the
adjustment coeﬃcients, make it impossible to assert the dominance of the
EqCM over a dVAR. Second, the forecasts of a simple EqCM were shown
to be incapable of correcting for parameter changes that happen prior to the
start of the forecast, whereas the dVAR is capable of utilising the information
about the parameter shift embodied in the initial conditions. Third, operational
macroeconometric models that are used for forecasting are bound to be mis-
speciﬁed to some degree, for example, because of limited information in the
data set, measurement problems or simply too little resources going into data
and model quality control. Together, mis-speciﬁcation and structural breaks,
open the possibility that models with less causal content may turn out as the
winner in a forecasting contest.
    To illustrate the empirical relevance of these claims, we considered a model
that has been used for forecasting the Norwegian economy. Forecasts for the
period 1992(1)–1994(4) were calculated both for the incumbent EqCM ver-
sion of the RIMINI model and the dVAR version of that model. Although the
large-scale model holds its ground in this experiment, several of the theoretical
points that have been made about the dVAR approach seem to have consid-
erable practical relevance. We have seen demonstrated the automatic intercept
correction of the dVAR forecasts (parameter change prior to forecast), and
there were instances when the lower causal-content of the dVAR insulated fore-
cast errors in one part of that system from contaminating the forecasts of other
variables. Similarly, the large-scale EqCMs and its dVAR counterparts oﬀer
less protection against wrong inputs (of the exogenous variables) provided by
the forecaster than the more ‘naive’ models. The overall impression is that the
automatic intercept correction of the dVAR systems is most helpful for short
forecast horizons. For longer horizons, the bias in the dVAR forecasts that are
due to mis-speciﬁcation tends to dominate, and the EqCM model performs
relatively better.
    Given that operational EqCMs are multi-purpose models that are used both
for policy analysis and forecasting, while the dVAR is only suitable for forecast-
ing, one would perhaps be reluctant to give up the EqCM, even in a situation
where its forecasts are consistently less accurate than dVAR forecast. We do
not ﬁnd evidence of such dominance, overall the EqCM forecasts stand up well
compared to the dVAR forecasts in this ‘one-oﬀ’ experiment. Moreover, in an
280                                      Forecasting using econometric models

actual forecasting situation, intercept corrections are used to correct EqCM
forecast for parameter changes occurring before the start of the forecast. From
the viewpoint of practical forecast preparation, one interesting development
would be to automatise intercept correction based on simple dVAR forecast,
or through diﬀerencing the EqCM term in order to insulate against a shift in
the mean.
    The strong linkage between forecasting and policy analysis makes the role
of econometric models more important than ever. Policy makers face a menu
of diﬀerent models and an explicit inﬂation target implies that the central
bank’s conditional forecast 1–2 years ahead becomes the operational target of
monetary policy. The presence of non-stationary data and frequent structural
breaks makes inevitable a tradeoﬀ between the gain and importance of correct
structural modelling and their cost in terms of forecasting robustness. We have
explored the importance of this tradeoﬀ for inﬂation forecasting.
    Speciﬁcally, we considered the two popular inﬂation models, namely Phillips
curves and wage curve speciﬁcations. We establish that Phillips curve forecasts
are robust to types of structural breaks that harm the wage-curve forecasts,
but exaggerate forecast uncertainty in periods with no breaks. Moreover, omit-
ted relevant equilibrium correction terms induce omitted variables bias in the
usual way. Conversely, for the wage curve model, the potential biases in after-
break forecast errors can be remedied by intercept corrections. As a conclusion,
using a well-speciﬁed model of wage-price dynamics oﬀers the best prospect of
successful inﬂation forecasting.
                              Appendix

A.1        The Lucas critique
This appendix gives a proof of (4.29):

                                    plim β̂OLS = α12 β,
                                   T →∞

in Chapter 4, Section 4.5.
   Since plimT →∞ β̂OLS is equal to the true regression coeﬃcient between yt
and xt , we express the regression coeﬃcient in terms of the parameters of the
expectations model. To simplify, we assume that {yt , xt } are independently
normally distributed:
     #                                 2        
     yt ##            0 α1 β     yt−1         σy    0
           I   ∼N                       ,                , |α1 | < 1.   (A.1)
     xt # t−1         0 α1       xt−1          0 σ 2x
From (4.27), the conditional expectation of yt is:
                              E[yt | xt ] = xt β + E[ηt | xt ],                  (A.2)
and, from (4.28):
               E[ηt | xt ] = E[ y,t | xt ] − βE[ x,t | xt ] = −βE[ x,t | xt ].   (A.3)
Due to normality, E[ x,t | xt ] is given by the linear regression
                                 E[ x,t | xt ] = δ0 + δ1 xt ,                    (A.4)
implying
                        E[ x,t xt ]   E[ x,t (α1 xt−1 + x,t )]    σ 2x
                 δ1 =               =                          =          .      (A.5)
                         Var[xt ]              Var[xt ]          Var[xt ]
Since Var[zt ] = σ 2x /(1 − α12 ), we obtain

                                      δ1 = (1 − α12 ),                           (A.6)
which gives:
                               E[ηt | xt ] = −β(1 − α12 )xt ,                    (A.7)

                                            281
282                                                                  Appendix

since δ0 = 0. Finally, using (A.7) in (A.2) yields the regression

                               E[yt | xt ] = α12 βxt ,                   (A.8)

and hence the true regression coeﬃcient which is estimated consistently by
β̂OLS is α12 β (not β).


A.2      Solving and estimating rational
         expectations models
To make the exposition self-contained, this appendix illustrates solution and
estimation of simple models with forward looking variables—the illustration
being the hybrid ‘New Keynesian Phillips curve’. Finally, we comment on a
problem with observational equivalence, or lack of identiﬁcation within this
class of models.
    A suﬃciently rich data generating process (DGP) to illustrate the tech-
niques are

                 ∆pt = bfp1 Et ∆pt+1 + bbp1 ∆pt−1 + bp2 xt + εpt ,       (A.9)
                   xt = bx xt−1 + εxt ,                                 (A.10)

where all coeﬃcients are assumed to be between zero and one. All of the
techniques rely on the law of iterated expectations,

                       Et Et+k xt+j = Et xt+j ,          k < j,

saying that your average revision of expectations, given more information, will
be zero.


A.2.1      Repeated substitution
This method is the brute force solution, and therefore cumbersome. But since
it is also instructive to see exactly what goes on, we begin with this method.
     We start by using a trick to get rid of the lagged dependent variable,
following Pesaran (1987, pp. 108–109), by implicitly deﬁning πt as

                              ∆pt = πt + α∆pt−1 ,                       (A.11)

where α will turn out to be the backward stable root of the process of ∆pt .
   We take expectations one period ahead

                     Et ∆pt+1 = Et πt+1 + αEt ∆pt ,
                     Et ∆pt+1 = Et πt+1 + απt + α2 ∆pt−1 .
Appendix                                                                              283

      Next, we substitute for Et ∆pt+1 into original model:
                       $                             %
     πt + α∆pt−1 = bfp1 Et πt+1 + απt + αt−1
                                           2
                                              ∆pt−1 + bbp1 ∆pt−1 + bp2 xt + εpt

                     &           '                   & f                '
                         bfp1                         bp1 α2 − α + bbp1
              πt =                 Et πt+1 +                                ∆pt−1
                      1 − bfp1 α                    1 − bfp1 α
                       &            '      &            '
                             bp2                1
                     +                xt +                εt .
                         1 − bfp1 α          1 − bfp1 α
The parameter α is deﬁned by
                                     bfp1 α2 − α + bbp1 = 0
or
                                             1            bbp1
                                 α2 −         f
                                                α+                =0                (A.12)
                                             bp1          bfp1
with the solutions                                 "
                                            1±        1 − 4bfp1 bbp1
                                α1
                                         =                              .           (A.13)
                                α2                     2bfp1
The model will typically have a saddle-point behaviour with one root bigger
than one and one smaller than one in absolute value. In the following we will
use the backward stable solution, deﬁned by:
                       #           "                 #
                       #         −   1 − 4bfp1 bbp1 ##
                       #       1
                       #α1 =                         # < 1.
                       #                             #
                       #             2bfp1           #

In passing it might be noted that the restriction bbp1 = 1 − bfp1 often imposed in
the literature implies the roots

                                              1 − bfp1
                                     α1 =                   ≤ 1,
                                                   bfp1
                                     α2 = 1.
as given in (A.13) as before. We choose |α1 | < 1 in the following.
    So we now have a pure forward-looking model
            &             '           &             '      &             '
                 bfp1                      bp2                   1
       πt =                 Et πt+1 +                 xt +                 εpt .
              1 − bfp1 α1               1 − bfp1 α1          1 − bfp1 α1
Finally, using the relationship
                                                            1
                                         α1 + α2 =
                                                           bfp1
284                                                                                                 Appendix

between the roots,1 so:
                                          1 − bfp1 α1 = bfp1 α2 ,                                     (A.14)
the model becomes
                                                 &             '          &             '
                              1                         bp2                       1
                   πt =                Et πt+1 +                     xt +                     εpt     (A.15)
                              α2                       bfp1 α2                  bfp1 α2
                   πt = γEt πt+1 + δxt + vpt .                                                        (A.16)
   Following Davidson (2000, pp. 109–110), we now derive the solution in two
steps:

1. Find Et πt+1 .
2. Solve for πt .

      Find E t π t+1       Deﬁne the expectations errors as:
                                        ηt+1 = πt+1 − Et πt+1 .                                       (A.17)
We start by reducing the model to a single equation:
                       πt = γπt+1 + δbx xt−1 + δεxt + vpt − γηt+1 .
Solving forwards then produces:
       πt = γ(γπt+2 + δbx xt + δεxt+1 + vpt+1 − γηt+2 )
             + δbx xt−1 + δεxt + vpt − γηt+1
          = (δbx xt−1 + δεxt + vpt − γηt+1 )
             + γ(δbx xt + δεxt+1 + vpt+1 − γηt+2 ) + (γ)2 πt+2
            n
          =    (γ)j (δbx xt+j−1 + δεxt+j + vpt+j − γηt+j+1 ) + (γ)n+1 πt+n+1 .
            j=0

By imposing the transversality condition:
                                         lim (γ)n+1 πt+n+1 = 0
                                        n→∞

and then taking expectations conditional at time t, we get the ‘discounted
solution’:
                   ∞
                   
       Et πt+1 =         (γ)j (δbx Et xt+j + δEt εxt+j+1 + Et vpt+j+1 − γEt ηt+j+2 )
                   j=0
                   ∞
              =          (γ)j (δbx Et xt+j ).
                   j=0

                            1 See, for example, Chiang (1984, p. 506).
Appendix                                                                                 285

   However, we know the process for the forcing variable, so:
                  Et−1 xt = bx xt−1 ,
                    Et xt = xt ,
                  Et xt+1 = bx xt ,
                  Et xt+2 = Et (Et+1 xt+2 ) = Et bx xt+1 = b2x xt ,
                  Et xt+j = bxj xt .
We can therefore substitute in:
                                           ∞
                                           
                            Et πt+1 =            (γ)j (δbx bxj xt )
                                           j=0
                                                 ∞
                                                 
                                       = δbx           (γbx )j xt
                                                 j=0
                                                         
                                                 δbx
                                       =                      xt
                                               1 − γbx
and substitute back the expectation into the original equation:
                         πt = γEt πt+1 + δxt + vpt
                                        
                                    δbx
                            =γ             xt + δxt + vpt .
                                 1 − γbx

    Solve for π t     Finally, using (A.11) and (A.16) we get the complete
solution:
                     &          '&                                 '
                         bfp1          (bp2 /bfp1 α2 )bx
 ∆pt − α1 ∆pt−1 =                                              xt
                     bfp1 α2        1 − (bfp1 /bfp1 α2 )bx
                      &           '         &          '
                           bp2                    1
                   +                 xt +                εpt
                         bfp1 α2               bfp1 α2
                    &                           '       &          '       &         '
                      1              bp2 bx                    bp2                 1
                 =                                   xt +               xt +             εpt ,
                     α2        bfp1 (α2 − bx )               bfp1 α2           bfp1 α2
                                   &                    '        &         '
                                             bp2                      1
             ∆pt = α1 ∆pt−1 +                             xt +               εpt .      (A.18)
                                      bfp1 (α2 − bx )              bfp1 α2


A.2.2      Undetermined coeﬃcients
This method is more practical. It consists of the following steps:

1. Make a guess at the solution.
2. Derive the expectations variable.
286                                                                                                   Appendix

3. Substitute back into the guessing solution.
4. Match coeﬃcients.

   We will ﬁrst use the technique, following the excellent exposition of
Blanchard and Fisher (1989: ch. 5), to derive the solution conditional upon
the expected path of the forcing variable, as in Galı́ et al. (2001), so we will
ignore any information about the process of the forcing variable.
   In the following we will deﬁne

                                     zt = bp2 xt + εpt .

Since the solution must depend on the future, a guess would be that the solution
will consist of the lagged dependent variable and the expected values of the
forcing value:
                                          ∞
                                          
                         ∆pt = α∆pt−1 +       βi Et zt+i .               (A.19)
                                                         i=0

We now take the expectation of the solution of the next period, using the law
of iterated expectations, to ﬁnd the expected outcome
                                                         ∞
                                                         
                          Et ∆pt+1 = α∆pt +                       βi Et zt+1+i ,
                                                         i=0

which we substitute in the guessing solution
            &           ∞
                                      '
          f
                       
  ∆pt = bp1 α∆pt +        βi Et zt+1+i + bbp1 ∆pt−1 + zt ,
                              i=0
          &               '             &                     '          ∞
                                                                               &               '
                bbp1                               1                               βi bfp1
  ∆pt =                       ∆pt−1 +                             zt +                             Et zt+1+i .
              1 − αbfp1                     1 − αbfp1                    i=0       1 − αbfp1
                                                                                                         (A.20)

   Finally, the undetermined coeﬃcients are now found by matching the
coeﬃcients of the variables between (A.19) and (A.20).
   We start by matching the coeﬃcients of ∆pt−1 :

                                                       bbp1
                                        α=                        .
                                                 1 − αbfp1

This gives, as above, the second-order polynomial in α:

                                             1            bbp1
                                    α2 −           α+              =0
                                            bfp1          bfp1

with the solutions given in (A.13).
Appendix                                                                           287

    Using α1 , we may now match the remaining undetermined coeﬃcients of
Et zt+i , giving

                                                         1
                         zt :         β0 =                        ,
                                                1 − bfp1 α1
                                                     bfp1
                         Et zt+1 : β1 =                           β0 ,
                                                1 − bfp1 α1
                                                     bfp1
                         Et zt+i :    βi =                    βi−1 ,
                                                1 − bfp1 α1

so, using (A.14), the coeﬃcients can therefore be written as

                                                 1
                       zt :          β0 =                ,
                                            bfp1 α2
                                            &                '          
                                                     1            1
                       Et zt+1 : β1 =                                        ,
                                                bfp1 α2           α2
                                            &                '        i
                                                     1            1
                       Et zt+i :     βi =                                    ,
                                                bfp1 α2           α2

declining as time move forwards.
   Substituting back for
                                   zt = bp2 xt + εpt ,

the solution can therefore be written
                       &         ' ∞             &         '
                            bp2    1 i                 1
     ∆pt = α1 ∆pt−1 +                    Et xt+i +             εpt ,             (A.21)
                          bfp1 α2 i=0 α2             bfp1 α2

which is the same as in Galı́ et al. (2001), except the error term which they
ignore.
    To derive the complete solution, we need to substitute in for the forcing
process xt . We can either do this already in the guessing solution, or by sub-
stituting in for the expected terms Et xt+i . Here we choose the latter solution.
The expectations, conditional on information at time t, are:

                   Et xt = xt ,
                 Et xt+1 = bx xt ,
                 Et xt+2 = Et (Et+1 xt+2 ) = Et bx xt+1 = b2x xt ,
                 Et xt+j = bxj xt ,
288                                                                   Appendix

where we again have used the law of iterated expectations. So the solution
becomes
                        &         ' ∞               &           '
                            bp2      bx i                  1
       ∆pt = α1 ∆pt−1 +                         xt +                  εpt
                          bfp1 α2 i=0 α2                 bfp1 α2
                        &         '                        &           '
                            bp2             1                       1
       ∆pt = α1 ∆pt−1 +                               xt +                 εpt
                          bfp1 α2    1 − (bx /α2 )              bfp1 α2
                        &                '      &         '
                                bp2                  1
       ∆pt = α1 ∆pt−1 +                    xt +               εpt ,
                          bfp1(α2 − bx )          bfp1 α2

as in (A.18).


A.2.3      Factorization
Finally, we shall take a look at this very elegant method introduced by Sargent.
It consists of the following steps:

1. Write the model in terms of lead- and lag-polynomials in expectations.
2. Factor the polynomials, into one-order polynomials, deriving the roots.
3. Invert the factored one-order polynomials into the directions of converging
   forward polynomials of expectations.

   Again, we use the simplifying deﬁnition

                                  zt = bp2 xt + εpt ,

so the model is again

                        ∆pt = bfp1 Et ∆pt+1 + bbp1 ∆pt−1 + zt .

Note that the forward, or lead, operator, F , and lag operator, L, only work on
the variables and not expectations, so:

                                   LEt zt = Et zt−1
                                   F Et zt = Et zt+1
                                     L−1 = F.

The model can then be written in terms of expectations as:

                −bfp1 Et ∆pt+1 + Et ∆pt − bbp1 Et ∆pt−1 = Et zt ,

and using the lead- and lag-operators:

                         (−bfp1 F + 1 − bbp1 L)Et ∆pt = Et zt ,
Appendix                                                                     289

or, as a second-order polynomial in the lead operator:
                    &      '                     &       '
                        1        bbp1                  1
                 F −
                  2
                              F + f LEt ∆pt = −              E t zt .
                       bfp1      bp1                  bfp1

The polynomial in brackets is exactly the same as the one in (A.12), so we
know it can be factored into the roots (A.13):
                                          &       '
                                               1
        [(F − α1 ) (F − α2 )] LEt ∆pt = −           E t zt
                                             bfp1
                                          &                  '
                                                    1
                    (F − α1 ) LEt ∆pt = −                       E t zt
                                             bfp1 (F − α2 )
                                        &                  '
                                                  1
                       (1 − α1 L) ∆pt =                      E t zt
                                          bfp1 (α2 − F )
                                        &         '                   
                                             1               1
                       (1 − α1 L) ∆pt =                                  E t zt .
                                          bfp1 α2      1 − (1/α2 )F
                                           (∞
   However, we know that (1/1−(1/α2 )F ) = i=0 (1/α2 )i F i , since |1/α2 | < 1,
so we can write down the solution immediately:
                         &        ' ∞                 &         '
                             bp2    1 i                     1
        ∆pt = α1 ∆pt−1 +                      Et xt+i +             εpt ,
                           bfp1 α2 i=0 α2                 bfp1 α2
where we have also substituted back for zt .
  To derive the complete solution, we have to solve for
                             ∞      i
                                   1
                                         Et xt+i
                             i=0
                                   α2

given
                                (1 − bx L)xt = εxt .
We can now appeal to the results of Sargent (1987, p. 304) that work as follows.
If the model can be written in the form
                          yt = λEt yt+1 + xt a(L)xt + et ,
                                   r
                        a(L) = 1 −     aj Lj
                                       j=1

with the partial solution
                                       ∞
                                               i
                              yt = ζ         (λ) Et xt+i ,
                                       i=0
290                                                                          Appendix

then the complete solution
                                    yt = ζg(L)xt
is determined by
                         1 − λa(λ)−1 a(L)L−1
                 g(L) =
                              1 − λL−1
                                                     
                                     
                                     r−1   r
                       = a(λ)−1 1 +         λk−j ak  Lj  .
                                        j=1    k=j+1

In our case
                                             bp2
                                       ζ=    f
                                                   ,
                                            bp1 α2
                                           1
                                      λ=     ,
                                          α2
                                   a(L) = 1 − bx L,

so g(L) will have the form

                                g(L) = (1 − a1 λ)−1
                                             1
                                     =                .
                                       1 − bx (1/α2 )
The solution therefore becomes
                         &         '                       &          '
                              1               1                    1
      ∆pt − α1 ∆pt−1 =                                  xt +              εpt
                           bfp1 α2    1 − bx (1/α2 )           bfp1 α2
                                     &                  '      &          '
                                               bp2                   1
                  ∆pt = α1 ∆pt−1 +                        xt +              εpt ,
                                        bfp1 (α2 − bx )           bfp1 α2

as before.


A.2.4        Estimation
Remember that the model is

                   ∆pt = bfp1 Et ∆pt+1 + bbp1 ∆pt−1 + bp2 xt + εpt ,

which can be rewritten as

                              π = γEt πt+1 + δxt + vpt .

The model is usually estimated by means of instrumental variables, using the
‘errors in variables’ method (evm)—where expected values are replaced by
Appendix                                                                                 291

actual values and the expectational errors:

                            πt = γπt+1 + δxt + vpt − γηt+1 .                           (A.22)

The implications of estimating the model by means of the ‘errors in variables’
method is to induce moving average errors. Following Blake (1991), this can
be readily seen using the expectational errors as follows.

1. Lead (A.15) one period and subtract the expectation to ﬁnd the RE error:

             ηt+1 = γEt πt+2 + δxt+1 + vpt+1 − Et πt+1
                                                                 
                           δbx                                δbx
                  =γ               xt+1 + δxt+1 + vpt+1 −             xt
                        1 − γbx                             1 − γbx
                              
                          δ
                  =              (xt+1 − bx xt ) + vpt+1
                      1 − γbx
                              
                          δ
                  =              εxt+1 + vpt+1
                      1 − γbx

2. Substitute into (A.22):
                                                                        
                                                                 γδ
                 πt = γπt+1 + δxt + vpt − γvpt+1 −                           εxt+1 .
                                                               1 − γbx

3. Finally, re-express in terms of original variables, again using ∆pt = πt +
   α∆pt−1 :
                                                        &          '       &         '
                         1                                     bp2                1
   ∆pt − α1 ∆pt−1 =             (∆pt+1 − α1 ∆pt ) +                     xt +             εpt
                         α2                                  bfp1 α2           bfp1 α2
                           &               '             &                         '
                             1          1                     (1/α2 )(bp2 /bfp1 α2 )
                       −                       εpt+1 −                                 εxt+1 ,
                            α2       bfp1 α2                       1 − (1/α2 )bx
          &        ' &          '                &          '                &        '
              1            1       f                  1         b                 1
     ∆pt f          = f           bp1 ∆pt+1 +                 bp1 ∆pt−1 + f             bp2 xt
            bp1 α2      bp1 α2                      α2 bfp1                    bp1 α2
                          &         '         &          ' 
                                1                   1            1
                       +      f
                                       εpt −      f
                                                                      εpt+1
                            bp1 α2              bp1 α2          α2
                          &         '                     
                                1            bp2 /α2
                       −                                      εxt+1 ,
                            bfp1 α2       1 − (1/α2 )bx
                 ∆pt = bfp1 ∆pt+1 + bbp1 ∆pt−1 + bp2 xt + εpt
                                                  
                             1                 bp2
                        −         εpt+1 −               εxt+1 ,
                             α2              α2 − bx
292                                                                     Appendix

   where we have exploited the two well-known relationships between the roots:
                                                 1
                                    α1 + α2 =          ,
                                                bfp1
                                                bbp1
                                      α1 α2 =          .
                                                bfp1

  So even though the original model has white noise errors, the estimated
model will have ﬁrst-order moving average errors.


A.2.5      Does the MA(1) process prove that the forward
           solution applies?
Assume that the true model is

                      ∆pt = bp1 ∆pt−1 + εpt ,              |bp1 | < 1

and the the following model is estimated by means of instrumental variables

                             ∆pt = bfp1 ∆pt+1 + εfpt .

What are the properties of εfpt ?

                             εfpt = ∆pt − bfp1 ∆pt+1 .

Assume, as is common in the literature, that we ﬁnd that bfp1 ≈ 1. Then

                      εfpt ≈ ∆pt − ∆pt+1 = −∆2 pt+1
                          = −[εpt+1 + (bp1 − 1)εpt + · · · ].

So we get a model with a moving average residual, but this time the reason is
not forward-looking behaviour but mis-speciﬁcation.



A.3      Calculation of interim multipliers in a
         linear dynamic model: a general exposition
Interim multipliers provide a simple yet powerful way to describe the dynamic
properties of a dynamic model. We follow Lütkepohl (1991) and derive the
dynamic multipliers in a simultaneous system of n linear dynamic equations
with n endogenous variables yt and m exogenous variables xt . The structural
Appendix                                                                              293

form of the model is given by:

                                   
                                   q                  
                                                      q
                        Γ0 yt =          Γi yt−i +          Di xt−i +εt .         (A.23)
                                   i=1                i=0

   To investigate the dynamic properties of the model it will be more
convenient to work with the reduced form of the model:

                                 
                                 q                 
                                                   q
                          yt =         Ai yt−i +          Bi xt−i +ut             (A.24)
                                 i=1                i=0


deﬁning the n × n matrices Ai = Γ−1        0 Γi , i = 1, . . . , q, and the n × m matrices
Bi = Γ−10  D i , i = 0, . . . , q. The reduced form residuals are given by ut = Γ−1 0 εt .
   It is also useful to deﬁne the autoregressive ﬁnal form of the model as:
                                                                   −1
                         yt = A(L)−1 B(L)xt + A(L)                      ut        (A.25)
                             = D(L)xt + vt ,

where the polynomials are

                          A(L) = I − A1 L − · · · − Aq Lq ,
                          B(L) = B0 + B1 L + · · · + Bq Lq ,

and the ﬁnal form coeﬃcients are given by the (inﬁnite) rational lag polynomial

                      D(L) = A(L)−1 B(L)
                              = D0 +D1 L + · · · + Dj Lj + · · · .

   To obtain a simple expression for the interim multipliers it is useful to
rewrite the reduced form representation of the model in its companion form as:

                                 Zt = ΦZt−1 + Ψxt +Ut                             (A.26)

forming stacked (n + m)q × 1 vectors with new variables

                       Zt = (yt , . . . , yt−q+1 , xt , . . . , xt−q+1 )

and
                                                             
                                    Ut = (ut , 0, . . . , 0)

and deﬁning a selection matrix

                   Jn×(n+m)q = (In , 0n , . . . , 0n |0n,m , . . . , 0n,m ).
294                                                                      Appendix

The matrices Φ(n+m)q×(n+m)q and Ψ(n+m)q×m are formed by stacking the
(reduced form) coefficient matrices Ai , Bi for ∀i in the following way:
                                                                         
        A1     ···     Aq−1 Aq B1 · · · Bq−1 Bq                          B0
      In                0n   0n 0n               0n    0n             0n 
                                                                         
              ..         .     .     .    ..       .     .            .. 
                 .       ..    ..    ..      .     ..    ..           . 
                                                                         
      0n      ···       In   0n 0n · · ·         0n    0n             0n 
 Φ=                                                          , Ψ=      
                                   0m · · · 0m         0m   
                                                                            
                                                                        Im 
            0                      I            0      0              0  
             mq×nq                   m              m      m          m 
                                          .       .       .           . 
                                            ..    ..      ..          .. 
                                    0m · · ·     Im     0m               0m
                                                                             (A.27)

    The eigenvalues (characteristic roots) of the system matrix Φ are useful to
summarise the characteristics of the dynamic behaviour of the complete system,
like whether it will generate ‘oscillations’ as in the case when there is (at least)
one pair of complex conjugate roots, or ‘exploding’ behaviour when (at least)
one root has modulus greater than 1.
    A diﬀerent way to address the dynamic properties is to calculate the ‘interim
multipliers’ of the model, which has the additional advantage that they can be
easily graphed.
    Successive substitution of Zt in equation (A.26) yields:

                     Zt = ΦZt−1 +Ψxt +Ut                                     (A.28)
                                       
                                       i−1                  
                                                            i−1
                        = Φi Zt−i +          Φj Ψxt−j +           Ut−j
                                       j=0                  j=0
                        ⇓
                            ∞
                                                ∞
                                                 
                     yt =         JΦj Ψxt−j +          JΦj J ut−j ,         (A.29)
                            j=0                  j=0

since Φi is assumed to disappear as i grows suﬃciently large. The dynamic
multipliers Dj and the interim multipliers Mi can be obtained from (A.29) as
the partial derivatives Dj = ∂yt /∂xt−j and their cumulated sums

                                    
                                    i            i
                                                      ∂yt
                            Mi =          Dj =             ,
                                    j=0          j=0
                                                     ∂xt−j


                                                             ) i by inserting
respectively. We obtain estimates of the multipliers D̂i and M
estimates of the parameters in (A.24) into the companion form mat-
rices Φ̂ and Ψ̂.
                          D̂i = JΦ̂i Ψ̂, i = 0, . . .                 (A.30)
Appendix                                                                             295

                                                                         ) i:
and the interim multipliers are defined in terms of their cumulated sums M

                             
                             i
                      )i =
                      M            D̂j                                            (A.31)
                             j=0

                               
                               i
                          =J         Φ̂j Ψ̂
                               j=0

                          = J(I + Φ̂ + Φ̂2 + · · · + Φ̂i )Ψ̂.

   The long-run multipliers are given by
                                ∞
                                
                        )∞ =
                        M                D̂j = J(I − Φ̂)−1 Ψ̂                     (A.32)
                                j=0
                                          −1
                               
                             = A(1)            
                                               B(1).



A.3.1      An example
As an example, and in the process of illustrating diﬀerent techniques, we will
work out the dynamic properties of the wage–price model of Section 9.2.2. This
involves evaluating the stability of the model, and the long-run and dynamic
multipliers. Disregarding taxes and short-run eﬀects, the systematic part of
the model is on matrix form:
                                                  
   1      −0.81 ∆w           0 0 ∆w             0   0    ∆w
                        =
 −0.14      1     ∆p t      0.1 0 ∆p t−1 0 0.16 ∆p t−2
                                                       
                                                  ∆a                       
                                 0.082 0      0              −0.16     0
                           +                         ∆u +
                                −0.015 0 0.026                   0     −0.055
                                                    ∆pi t
                                                                 
                                                                  w
                                                              p
                                   1     −1 −1 0.1L        0  
                           ×                                       a
                                −0.7L 1L 0.72
                                                     0    −0.3 u
                                                                    

                                                                  pi t−1


    Steady-state properties from cointegration                  The long-run elasticities
of the model are, from the cointegration analysis:

                           w = p + a − 0.1u
                           p = 0.7(w − a) + 0.3pi,
296                                                                    Appendix

so the long-run multipliers of the system should be easily obtained by solving
for wages and prices. For wages:
                            w = 0.7(w − a) + 0.3p + a − 0.1u
                    w(1 − 0.7) = −0.7a + 0.3pi + a − 0.1u
                                 0.3    0.1
                            w=       a−     u + pi
                                 0.3    0.3
                            w = a − 0.33u + pi.
Then for prices:
                           p = 0.7(w − a) + 0.3pi
                             = 0.7(−0.33u + pi) + 0.3pi
                           p = −0.23u + pi.
So the reduced form long-run multipliers of wages and prices with respect to
the exogenous variables are
                                w = a − 0.33u + pi
                                p = −0.23u + pi.
Note that the long-run multipliers of the real wage are given from the wage
curve alone
                             w − p = a − 0.1u.
   Imposing long-run properties of exogenous variables

• ∆a = ga
• ∆u = 0
• ∆pi = gpi

gives the long-run multipliers for inﬂation
                               π = gp = ∆p = gpi .
      Finally, the steady-state growth path of the nominal system is
                                  gw = ga + gpi
                                   gp = gpi .

    Dynamic properties from diﬀerence equations Now, let us try to see
if this holds for the dynamic system. Intuitively, the same steady state—and
therefore the same multipliers—should be obtained if no invalid restrictions are
imposed.
    For the dynamic analysis of the system below, following Wallis (1977),
it will be more convenient to work with the model in lag-polynomial form
Appendix                                                                      297


Ã(L)yt = B̃(L)xt . This is easily achieved with the steps:
                                            
                    1            −0.81      ∆w
                                                  =
             −0.14 − 0.1L 1 − 0.16L2 ∆p t
                                           
                                     ∆a                         
                   0.082 0        0     ∆u  + −0.16         0
                  −0.015 0 0.026                     0      −0.055
                                         ∆pi t
                                                               
                                                                w
                                                            p
                          L       −L −L 0.1L       2
                                                        0      
                    ×                                         a
                       −0.7L2 L3 0.7L           0     −0.3L  u
                                                                  

                                                                pi t
or:
                                                                 
                  1 − 1L                    −0.81 + 0.81L          w
                                                                       =
      −0.14 − 0.1L − (−0.14 − 0.1L)L 1 − 0.16L2 − (1 − 0.16L2 )L p t
                                                  
                                               a
            0.082 − 0.082L 0         0           u
           −0.015 + 0.015L 0 0.026 − 0.026L
                                                  pi t
                                                                      
                                                                       w
                                                                      
                −0.16L     0.16L     0.16L      −0.016L2       0     p
           +                                                          a 
               0.0385L2 −0.055L3 −0.0385L           0      0.0165L  u
                                                                         

                                                                      pi t
and collecting terms:
                                                          
                1 − 0.84L              −0.81 + 0.65L        w
                                                                  =
        −0.14 + 0.04L + 0.0615L2 1 − 0.16L2 − 1L + 0.215L3 p t
      *                         +,                        -* +, -
                                    Ã(L)                              yt
                                                                 
                                                              a
                  0.082 + 0.078L  −0.016L2            0         u
                 −0.015 − 0.0235L     0        0.026 − 0.0095L
               *                    +,                         - pi t
                                     B̃(L)
                                                                * +, -
                                                                  xt

   Checking stability For the system to be stable, the autoregressive part
needs to have all roots outside the unit circle.
   The autoregressive polynomial is
                                                                  
                        1 − 0.84L                −0.81 + 0.65L
    Ã(L) =                                                          ,
               −0.14 + 0.04L + 0.0615L2 1 − 0.16L2 − 1L + 0.215L3
with determinant:
          |Ã(L)| = 0.8866 − 1.7166L + 0.703815L2 + 0.309425L3 − 0.1806L4 .
298                                                                     Appendix

The model is stable if all the roots of
         0.8866 − 1.7166z + 0.703815z 2 + 0.309425z 3 − 0.1806z 4 = 0
are outside the unit circle. Here the polynomial can be factored (approx-
imately) as
−0.1806(z + 2.26942781)(z − 1.03041478)(z − 1.19380201)(z − 1.75852774) = 0
so the roots are                            
                               
                                −2.26942781 
                                             
                                            
                                  1.03041478
                                               .
                               
                                 1.19380201
                                            
                                  1.75852774
   So all roots of |Ã(z)| = 0 are outside the unit circle. Also, in this case, the
roots are real, so the adjustment from a shock back towards steady state will
be monotonic and non-cyclical.

  Deriving the long-run multipliers—the hard way Next the long-run
multipliers are Ã−1 (1)B̃(1). Here Ã(1) is given as:
                                                               
                              1 − 0.84             −0.81 + 0.65
            Ã(1) =
                      −0.14 + 0.04 + 0.0615 1 − 0.16 − 1 + 0.215
                                      
                        0.16     −0.16
                  =                      ,
                      −0.0385 0.055
while
                                                                  
                       0.082 + 0.078   −0.016          0
             B̃(1) =
                      −0.015 − 0.0235     0      0.026 − 0.0095
                                              
                        0.16    −0.016     0
                   =
                      −0.0385      0    0.0165
giving the long-run multipliers
                                     −1                                  
                          0.16  −0.16        0.16   −0.016            0
      Ã−1 (1)B̃(1) =
                       −0.0385 0.055        −0.0385   0            0.0165
                                     
                        1.0 −0.33 1.0
                    =
                         0 −0.23 1.0
or                                                   
                                                 a
                            w   1.0   −0.33    1.0  
                              =                      u ,
                            p    0    −0.23    1.0
                                                     pi
which corresponds to the long-run multipliers derived directly from the
cointegration analysis.
Appendix                                                                   299

    So the cointegration relationships is therefore the steady-state of the
dynamic system; it ties down the long-run solution of the dynamic system,
and the comparative static properties—the long-run multipliers. In fact, this
is nothing else than Samuelson’s correspondence principle in disguise.

   Deriving the long-run multipliers—the easy way To show that coin-
tegration is nothing but steady-state with growing variables is just ﬁnding the
long-run multipliers as in Bårdsen (1989), but now for systems. The reduced
form of the model is:
                                                   
            ∆w         0.09 0 ∆w             0 0.146 ∆w
                  =                      +
             ∆p t     0.113 0 ∆p t−1         0 0.18     ∆p t−2
                                                             
                                                            w
                                          ∆a              p
                          0.079 0 0.024                     
                     +                        ∆u  + Π(L)  a
                                                                 
                         −0.004 0 0.029                     
                                              ∆pi t           u
                                                              pi t−1

with the cointegration part alone:
                                                                   
                                                                    w
                                                               p
    −0.18 + 0.035L 0.18 − 0.05L2         0.145    −0.018L 0.015  a
                                                                      
                                                                          ,
    −0.025 + 0.042L 0.025 − 0.06L2       −0.017   −0.0025L 0.018  
                                                                  
                                                                      
  *                            +,                               -   u
                                  Π(L)                             pi t−1

or when evaluated at the same date, so in steady-state:
                                                           
                                                            w
                                                        p
                −0.145  0.13       0.145    −0.018 0.015 a
                                                              
                 0.017 −0.035      −0.017   −0.0025 0.018  
                                                          
                                                            u
                                                           pi t

      The long-run multipliers are therefore simply:
                                                                 
                         −1                                a
           w   −0.145  0.13       0.145           −0.018 0.015  
             =                                                   u
           p    0.017 −0.035      −0.017          −0.0025 0.018
                                                                 pi
                             
                         a
           w   −1 0.33 −1  
             =               u ,
           p   −0 0.23 −1
                             pi

as before.
300                                                                           Appendix

   Dynamic multipliers             The dynamic multipliers of the model are given as
                                                                  
                                            δ (L) δ12 (L) δ13 (L)
                    Ã−1 (L)B̃(L) = D(L) = 11                        ,
                                            δ21 (L) δ22 (L) δ23 (L)

while the interim multipliers are the sums of the dynamic multipliers.
   The simplest solution is to match coeﬃcients of B̃(L) = Ã(L)D(L) for
powers of L and solve for δ(L).
   Let us assume we are only interested in the ﬁrst three dynamic and interim
multipliers of productivity on wages:

                             δ11 (L) = δ11,0 + δ11,1 L + δ11,2 L2 .                (A.33)

   The inverse autoregressive matrix polynomials are of course the product of
the inverse of the determinant and the adjoint
                                                                                 −1
           −1                   1 − 0.84L                −0.81 + 0.65L
      Ã        (L) =
                       −0.14 + 0.04L + 0.0615L2 1 − 0.16L2 − 1L + 0.215L3
                                          1
                    =
                      0.89 − 1.72L + 0.7L2 + 0.31L3 − 0.18L4
                                                                
                          1 − 0.16L2 − L + 0.215L3 0.81 − 0.65L
                      ×                                            .
                           0.14 − 0.04L − 0.0615L2    1 − 0.84L

The matrix of distributed lag-polynomials was
                                                                           
                    0.082 + 0.078L   −0.016L2                       0
        B̃(L) =                                                               .
                  −0.015 − 0.0235L        0                  0.026 − 0.0095L

Therefore
                                  
          δ11 (L) δ12 (L) δ13 (L)
D(L) =
          δ21 (L) δ22 (L) δ23 (L)
                              1
     =
        0.89 − 1.72L + 0.7L2 + 0.31L3 − 0.18L4
                                                      
             1 − L − 0.16L2 + 0.215L3 0.81 − 0.65L
        ×
               0.14 − 0.04L − 0.0615L2      1 − 0.84L
                                                              
                0.082 + 0.078L     −0.016L 2
                                                      0
        ×
              −0.015 − 0.0235L         0       0.026 − 0.0095L
                              1
     =
        0.89 − 1.72L + 0.7L2 + 0.31L3 − 0.18L4
                                                                             
              (0.07 − 0.01L − 0.08L2 (−0.02L2 + 0.02L3           (0.02 − 0.02L
             +0.01L + 0.02L )
                       3         4
                                          +0.003L − 0.003L ) +0.006L ) 
                                                  4          5             2
        ×  (−0.004 − 0.003L
                                                                              .
                                         (−0.002L2 + 0.0006L3 (0.03 − 0.03L
                +0.01L2 − 0.005L3 )       +0.001L4 )              +0.008L2 )
Appendix                                                                       301

    So to ﬁnd the dynamic multipliers of wages with respect to productivity
δ11,i , for period i = 0, 1, 2, we have to solve
0.07 − 0.013L − 0.076L2 + 0.005L3 + 0.02L4
   = (0.89 − 1.72L + 0.7L2 + 0.31L3 − 0.18L4 )(δ11,0 + δ11,1 L + δ11,2 L2 )
   = 0.89δ11,0 + (0.89δ11,1 − 1.72δ11,0 )L + (0.89δ11,2 − 1.72δ11,1 + 0.70δ11,0 )L2
     + (−1.72δ11,2 + 0.70δ11,1 + 0.31δ11,0 )L3
     + (0.70δ11,2 + 0.31δ11,1 − 0.18δ11,0 )L4
     + (0.31δ11,2 − 0.18δ11,1 )L5 − 0.18δ11,2 L6
for the δ’s by evaluating the polynomials for powers of L:
                               0.07
           L = 0:      δ11,0 =      = 0.079,
                               0.89
                               1.72δ11,0 − 0.013
           L = 1:      δ11,1 =                   = 0.138,
                                     0.89
                               1.72δ11,1 − 0.70δ11,0 − 0.076
           L = 2:      δ11,2 =                               = 0.119.
                                           0.89
This page intentionally left blank
                    Bibliography

Akerlof, G. A. (1979). Irving Fisher on his head: The consequences of
    constant target-threshold monitoring of money holdings. Quarterly Journal
    of Economics, 93, 169–188.
Akerlof, G. A. (2002). Behavioural macroeconomics and macroeconomic
    behaviour. American Economic Review , 92(3), 411–433.
Akram, Q. F. (2004). Oil prices and exchange rates: Norwegian evidence.
    Econometrics Journal, 7, 476–504.
Akram, Q. F., G. Bårdsen, Ø. Eitrheim, and E. S. Jansen (2003). Interest rate
    rules in a macroeconometric of a small open economy. Unpublished paper,
    presented at ESEM03 in Stockholm 20–24 August 2003, Norges Bank.
Aldrich, J. (1989). Autonomy. Oxford Economic Papers, 41, 15–34.
Alogoskouﬁs, G. S. and A. Manning (1988). On the persistence of unemploy-
    ment. Economic Policy.
Andersen, T. M. (1994). Price Rigidity. Causes and Macroeconomic
   Implications. Clarendon Press, Oxford.
Anderson, T. W. (1951). Estimating linear restrictions on regression coeﬃcients
   for multivariate normal distributions. Annals of Mathematical Statistics,
   22, 327–351.
Anderson, T. W. and H. Rubin (1949). Estimation of the parameters of a
   single equation in a complete system of stochastic equations. Annals of
   Mathematical Statistics, 20, 46–63.
Anderson, T. W. and H. Rubin (1950). The asymptotic properties of estimates
   of the parameters of a single equation in a complete system of stochastic
   equations. Annals of Mathematical Statistics, 21, 570–582.
Apel, M. and P. Jansson (1999). System estimates of potential output and the
    NAIRU. Empirical Economics, 24, 373–388.


                                     303
304                                                                Bibliography

Aukrust, O. (1977). Inﬂation in the open economy. A Norwegian model.
   In L. B. Klein and W. S. Sâlant (eds.), World Wide Inﬂation. Theory
   and Recent Experience, pp. 107–153. Brookings, Washington DC.
Backhouse, R. E. (1995). Interpreting Macroeconomics. Explorations in the
    History of Macroeconomic Thought. Routledge, London and New York.
Backhouse, R. E. (2000). Theory, evidence and the labour market.
    In R. E. Backhouse and A. Salanti (eds.), Macroeconomics and the Real
    World. Volume 2: Keynesian Economics, Unemployment and Policy,
    chap. 7A, pp. 145–155. Oxford University Press, Oxford.
Ball, L. (1999). Policy rules for open economies. In J. B. Taylor (ed.), Monetary
     Policy Rules, A National Bureau of Economic Research Conference Report,
     chap. 3, pp. 127–144. University of Chicago Press, Chicago.
Bårdsen, G. (1989). Estimation of long-run coeﬃcients in error-correction
     models. Oxford Bulletin of Economics and Statistics, 51, 345–350.
Bårdsen, G. (1992). Dynamic modelling of the demand for narrow money in
     Norway. Journal of Policy Modelling, 14, 363–393.
Bårdsen, G. and P. G. Fisher (1999). Economic theory and econometric
     dynamics in modelling wages and prices in the United Kingdom. Empirical
     Economics, 24(3), 483–507.
Bårdsen, G., P. G. Fisher, and R. Nymoen (1998). Business cycles: Real
     facts or fallacies? In S. Strøm (ed.), Econometrics and Economic Theory
     in the 20th Century: The Ragnar Frisch Centennial Symposium, no. 32 in
     Econometric Society Monograph Series, chap. 16, pp. 499–527. Cambridge
     University Press, Cambridge.
Bårdsen, G., E. S. Jansen, and R. Nymoen (2002a). Model speciﬁcation and
     inﬂation forecast uncertainty. Annales d’Économie et de Statistique, 67/68,
     495–517.
Bårdsen, G., E. S. Jansen, and R. Nymoen (2002b). Testing the New Keynesian
     Phillips curve. Working paper ano 2002/5. Research Department, Norges
     Bank (Central Bank of Norway).
Bårdsen, G., E. S. Jansen, and R. Nymoen (2003). Econometric inﬂation
     targeting. Econometrics Journal , 6, 429–460.
Bårdsen, G., E. S. Jansen, and R. Nymoen (2004). Econometric evaluation
     of the New Keynesian Phillips curve. Oxford Bulletin of Economics and
     Statistics, 66, 611–686 (supplement).
Bårdsen, G. and J. T. Klovland (2000). Shaken or stirred? Financial deregula-
     tion and the monetary transmission mechanism in Norway. Scandinavian
     Journal of Economics, 102(4), 563–583.
Bibliography                                                               305

Bårdsen, G. and R. Nymoen (2003). Testing steady-state implica-
     tions for the NAIRU. Review of Economics and Statistics, 85,
     1070–1075.
Barkbu, B. B., R. Nymoen, and K. Røed (2003). Wage coordination and unem-
    ployment dynamics in Norway and Sweden. Journal of Socio-Economics,
    32, 37–58.
Bates, J. M. and C. W. J. Granger (1969). The combination of forecasts.
    Operations Research Quarterly, 20, 451–468.
Batini, N. and A. G. Haldane (1999). Forward-looking rules for monetary
    policy. In J. B. Taylor (ed.), Monetary Policy Rules, A National Bureau of
    Economic Research Conference Report, chap. 4, pp. 157–192. University
    of Chicago Press, Chicago.
Batini, N., R. Harrison, and S. P. Millard (2001). Monetary policy rules for an
    open economy. Working paper 149, London: Bank of England.
Batini, N., B. Jackson, and S. Nickell (2000). Inﬂation dynamics and the
    labour share in the UK. Discussion Paper 2, External MPC Unit, Bank of
    England.
Baumol, W. J. (1952). The transaction demand for cash: An inventory theoretic
   approach. Quarterly Journal of Economics, 66, 545–556.
Bean, C. R. (1994). European unemployment: A survey. Journal of Economic
    Literature, XXXII, 573–619.
Bernanke, B. S., T. Laubach, F. S. Mishkin, and A. S. Posen (1999).
    Inﬂation Targeting: Lessons from International Experience. Princeton
    University Press, Princeton, NJ.
Beyer, A., J. A. Doornik, and D. F. Hendry (2000). Reconstructing
    aggregate Euro-zone data. Journal of Common Market Studies, 38,
    613–624.
Beyer, A., J. A. Doornik, and D. F. Hendry (2001). Constructing historical
    Euro-zone data. Economic Journal , 111, F102–F121.
Bjerkholt, O. (1998). Interaction between model builders and policy makers in
    the Norwegian tradition. Economic Modelling, 15, 317–339.
Blake, D. (1991). The estimation of rational expectations models: A survey.
    Journal of Economic Studies, 18(3), 31–70.
Blanchard, O. J. (1987). The wage price spiral. Quarterly Journal of
    Economics, 101, 543–565.
Blanchard, O. J. and S. Fisher (1989). Lectures on Macroeconomics. The MIT
    Press, Cambridge, MA.
306                                                              Bibliography

Blanchard, O. J. and L. Katz (1997). What we know and do not know about
    the natural rate of unemployment. Journal of Economic Perspectives, 11,
    51–72.
Blanchard, O. J. and L. Katz (1999). Wage dynamics: Reconciling theory and
    evidence. American Economic Review , 89, 69–74.
Blanchard, O. J. and N. Kiyotaki (1987). Monopolistic competition and the
    eﬀects of aggregate demand. American Economic Review , 77, 647–666.
Blanchard, O. J. and L. H. Summers (1986). Hysteresis and the European
    unemployment problem. NBER Macroeconomics Manual , 1, 15–78.
Blanchﬂower, D. G. and A. J. Oswald (1994). The Wage Curve. The MIT Press,
    Cambridge, MA.
Bodkin, R. G., L. R. Klein, and K. Marwah (1991). A History of Macroecono-
   metric Model-Building. Edward Elgar, Aldershot.
Boﬁnger, P. (2000). Inﬂation targeting: Much ado about nothing new. Working
   paper, University of Würzburg.
Bomhoﬀ, E. J. (1991). Stability of velocity in the major industrial countries.
   IMF Staﬀ Papers, 38, 626–642.
Bontemps, C. and G. E. Mizon (2003). Congruence and encompassing. In
    B. P. Stigum (ed.), Econometrics and the Philosophy of Economics,
    chap. 15, pp. 354–378. Princeton University Press, Princeton, NJ.
Bordo, M. D. and L. Jonung (1990). The long-run behaviour of velocity:
    The institutional approach revisited. Journal of Policy Modelling, 12,
    165–197.
Bowitz, E. and Å. Cappelen (2001). Modelling incomes policies: some
   Norwegian experiences 1973–1993. Economic Modelling, 18, 349–379.
Box, G. E. P. and G. M. Jenkins (1970). Time Series Analysis, Forecasting and
    Control . Holden Day, San Francisco, CA.
Brockwell, P. J. and R. A. Davies (1991). Time Series: Theory and Methods,
    2nd edn. Springer, New York.
Brodin, P. A. and R. Nymoen (1989). The consumption function in Norway.
    Breakdown and reconstruction. Working paper 1989/7, Oslo: Norges Bank.
Brodin, P. A. and R. Nymoen (1992). Wealth eﬀects and exogeneity: The
    Norwegian consumption function 1966(1)–1989(4). Oxford Bulletin of
    Economics and Statistics, 54, 431–454.
Bruno, M. (1979). Price and output adjustment: Micro foundations and macro
    theory. Journal of Monetary Economics, 5, 187–212.
Bibliography                                                              307

Bruno, M. and J. Sachs (1984). Economics of World Wide Stagﬂation.
    Blackwell, Oxford.
Calmfors, L. (1977). Inﬂation in Sweden. In L. B. Klein and W. S. Sâlant
    (eds.), World Wide Inﬂation. Theory and Recent Experience. Brookings,
    Washington DC.
Calmfors, L. and A. Forslund (1991). Real-wage determination and labour
    market policies: The Swedish experience. The Economic Journal , 101,
    1130–1148.
Calmfors, L. and R. Nymoen (1990). Nordic employment. Economic Policy,
    5(11), 397–448.
Calvo, G. A. (1983). Staggered prices in a utility maximizing framework.
    Journal of Monetary Economics, 12, 383–398.
Carlin, W. and D. Soskice (1990). Macroeconomics and the Wage Bargain.
    Oxford University Press, Oxford.
Carruth, A. A. and A. J. Oswald (1989). Pay Determination and Industrial
    Prosperity. Oxford University Press, Oxford.
Cassino, V. and R. Thornton (2002). Do changes in structural factors explain
    movements in the equilibrium rate of unemployment? Working paper 153,
    Bank of England.
Chadha, B., P. R. Masson, and G. Meredith (1992). Models of inﬂation and
   the costs of disinﬂation. IMF Staﬀ Papers, 39, 395–431.
Chatterjee, S. (2002). The Taylor curve and the unemployment–inﬂation
    tradeoﬀ. Business Review Q3 2002, Federal Reserve Bank of Philadelphia.
Chiang, A. C. (1984). Fundamental Methods of Mathematical Economics,
    3rd edn. McGraw-Hill.
Chow, G. C. (1960). Tests of equality between sets of coeﬃcients in two linear
   regressions. Econometrica, 28, 591–605.
Christ, C. F. (1966). Econometric Models and Methods. John Wiley, New York.
Clarida, R., J. Galı́, and M. Gertler (1999). The science of monetary policy:
    A New Keynesian perspective. Journal of Economic Literature, 37(4),
    1661–1707.
Clements, M. P. and D. F. Hendry (1993). On the limitations of comparing
    mean squared forecasts errors. Journal of Forecasting, 12, 669–676 (with
    discussion).
Clements, M. P. and D. F. Hendry (1995a). Forecasting in cointegrating
    systems. Journal of Applied Econometrics, 10, 127–147.
308                                                              Bibliography

Clements, M. P. and D. F. Hendry (1995b). Macro-economic forecasting and
    modelling. The Economic Journal , 105, 1001–1013.
Clements, M. P. and D. F. Hendry (1996). Intercept corrections and structural
    breaks. Journal of Applied Econometrics, 11, 475–494.
Clements, M. P. and D. F. Hendry (1998). Forecasting Economic Time Series.
    Cambridge University Press, Cambridge.
Clements, M. P. and D. F. Hendry (1999a). Forecasting Non-stationary
    Economic Time Series. The MIT Press, Cambridge, MA.
Clements, M. P. and D. F. Hendry (1999b). Some methodological implications
    of forecast failure. Working paper, Institute of Economics and Statistics,
    University of Oxford.
Clements, M. P. and D. F. Hendry (2002). Modelling methodology and forecast
    failure. Econometrics Journal , 5, 319–344.
Coenen, G. and J. L. Vega (2001). The demand for M3 in the Euro area. Journal
    of Applied Econometrics, 16, 727–748.
Coenen, G. and V. Wieland (2002). Inﬂation dynamics and international
    linkages: A model of the United States, the Euro area and Japan. Working
    paper 181, European Central Bank.
Courbis, R. (1974). Liason internationale des prix et inﬂation importé.
    Economie Appliquée, 27, 205–220.
Cromb, R. (1993). A survey of recent econometric work on the NAIRU. Journal
   of Economic Studies, 20(1/2), 27–51.
Cross, R. (ed.) (1988). Unemployment, Hysteresis and the Natural Rate
    Hypothesis. Basil Blackwell, Oxford.
Cross, R. (ed.) (1995). The Natural Rate of Unemployment. Reﬂections on 25
    Years of the Hypothesis. Cambridge University Press, Cambridge.
Dasgupta, A. K. (1985). Epochs of Economic Theory. Blackwell, Oxford.
Davidson, J. (2000). Econometric Theory. Blackwell, Oxford.
Davies, E. P. and L. Schøtt-Jensen (1994). Wage and price dynamics in
    EU-Countries: Preliminary empirical estimates. European Monetary
    Institute.
de Grauwe, P. and M. Polan (2001). Is inﬂation always and every-
   where a monetary phenomenon. CEPR Discussion paper 2841, Centre for
   Economic Policy Research.
Desai, M. (1984). Wages, prices and unemployment a quarter of a century after
    the Phillips curve. In D. F. Hendry and K. F. Wallis (eds.), Econometrics
    and Quantitative Economics, chap. 9, pp. 253–273. Blackwell, Oxford.
Bibliography                                                                309

Desai, M. (1995). The Natural Rate of Unemployment: A Fundamentalist
    Keynesian View , chap. 16, pp. 346–361. Cambridge University Press.
Doornik, J. A. (1996). Testing vector autocorrelation and heteroscedasticity
    in dynamic models. Working paper, Nuﬃeld College, University of
    Oxford.
Doornik, J. A. and H. Hansen (1994). A practical test of multivariate normality.
    Unpublished paper, Nuﬃeld College, University of Oxford.
Doornik, J. A. and D. F. Hendry (1997a). The implications for econometric
    modelling of forecast failure. Scottish Journal of Political Economy, 44,
    437–461.
Doornik, J. A. and D. F. Hendry (1997b). Modelling Dynamic Systems Using
    PcFiml 9 for Windows. International Thomson Publishing, London.
Dornbusch, R. (1976). Expectations and exchange rate dynamics. Journal of
    Political Economy, 84, 1161–1176.
Drèze, J. and C. R. Bean (eds.) (1990). Europe’s Unemployment Problem;
     Introduction and Synthesis. MIT Press, Cambridge.
Driehuis, W. and P. de Wolf (1976). A sectoral wage and price model for the
    Netherlands’ economy. In H. Frisch (ed.), Inﬂation in Small Countries,
    pp. 283–339. Springer-Verlag, New York.
Dunlop, J. T. (1944). Wage Determination under Trade Unions. Reprints of
   Economic Classic, 1966. Augustus M. Kelley Publishers, New York.
Edgren, G., K.-O. Faxén, and C.-E. Odhner (1969). Wages, growth and
    distribution of income. Swedish Journal of Economics, 71, 133–160.
Eika, K. H., N. R. Ericsson, and R. Nymoen (1996). Hazards in implementing
    a monetary conditions index. Oxford Bulletin of Economics and Statistics,
    58(4), 765–790.
Eitrheim, Ø. (1998). The demand for broad money in Norway, 1969–1993.
    Empirical Economics, 23, 339–354.
Eitrheim, Ø. (2003). Testing the role of money in the inﬂation process. Unpub-
    lished paper, presented at EEA03 in Stockholm 20–24 August 2003,
    Norges Bank.
Eitrheim, Ø., T. A. Husebø, and R. Nymoen (1999). Equilibrium-correction
    versus diﬀerencing in macroeconomic forecasting. Economic Modelling, 16,
    515–544.
Eitrheim, Ø., T. A. Husebø, and R. Nymoen (2002a). Empirical comparisons
    of models’ forecast accuracy. In M. P. Clements and D. F. Hendry (eds.),
    A Companion to Economic Forecasting, chap. 16, pp. 354–385. Blackwell,
    Oxford.
310                                                              Bibliography

Eitrheim, Ø., E. S. Jansen, and R. Nymoen (2002b). Progress from forecast
    failure: The Norwegian consumption function. Econometrics Journal , 5,
    40–64.
Eitrheim, Ø. and R. Nymoen (1991). Real wages in a multisectoral model of
    the Norwegian economy. Economic Modelling, 8(1), 63–82.
Elmeskov, J. (1994). Nordic unemployment in a European perspective. Swedish
   Economic Policy Review , 1(1–2 Autumn 1994), 27–70.
Elmeskov, J. and M. MacFarland (1993). Unemployment persistence. OECD
   Economic Studies, no. 21, 59–88.
Engle, R. F. and C. W. J. Granger (1987). Co-integration and error correction:
    Representation, estimation and testing. Econometrica, 55, 251–276.
Engle, R. F. and C. W. J. Granger (eds.) (1991). Long-Run Economic
    Relationships. Readings in Cointegration. Oxford University Press, Oxford.
Engle, R. F. and D. F. Hendry (1993). Testing super exogeneity and invariance
    in regression models. Journal of Econometrics, 56, 119–139.
Engle, R. F., D. F. Hendry, and J.-F. Richard (1983). Exogeneity. Economet-
    rica, 51, 277–304.
Ericsson, N. R. (1992). Parameter constancy, mean square forecast errors,
     and measuring forecast performance: An exposition, extensions and
     illustration. Journal of Policy Modelling, 14, 465–495.
Ericsson, N. R. (2005). Empirical Modeling of Economic Time Series. Oxford
     University Press, Oxford (forthcoming).
Ericsson, N. R. and D. Hendry (1999). Encompassing and rational expectations:
     How sequential corroboration can imply refutation. Empirical Economics,
     24(1), 1–21.
Ericsson, N. R. and D. F. Hendry (eds.) (2001). Understanding Economic
     Forecasts. MIT Press, Cambridge, MA and London, England.
Ericsson, N. R. and J. S. Irons (eds.) (1994). Testing Exogeneity. Oxford
     University Press, Oxford.
Ericsson, N. R. and J. S. Irons (1995). The Lucas critique in practice:
     Theory without measurement. In K. D. Hoover (ed.), Macroeconometrics:
     Developments, Tensions and Prospects, chap. 8, pp. 263–312. Kluwer
     Academic Publishers, Dortrecht.
Ericsson, N. R., E. S. Jansen, N. A. Kerbeshian, and R. Nymoen (1997). Under-
     standing a Monetary Conditions Index. Paper presented at the European
     Meeting of the Econometric Society in Toulouse, 1997.
Bibliography                                                                 311

Estrella, A. and F. S. Mishkin (1997). Is there a role for monetary aggregates
    in the conduct of monetary policy? Journal of Monetary Economics, 40,
    279–304.
Fagan, G. and J. Henry (1998). Long run money demand in the EU: Evidence
    for area-wide aggregates. Empirical Economics, 23, 483–506.
Fagan, G., J. Henry, and R. Mestre (2001). An area-wide model (AWM) for
    the Euro area. Working paper 42, European Central Bank.
Fair, R. C. (1984). Speciﬁcation, Estimation, and Analysis of Macroeconometric
     Models. Harvard University Press, Cambridge, MA.
Fair, R. C. (1994). Testing Macroeconometric Models. Harvard University
     Press, Cambrigde, MA.
Fair, R. C. (2000). Testing the NAIRU model for the United States. Review of
     Economics and Statistics, LXXXII, 64–71.
Faust, J. and C. H. Whiteman (1995). Commentary (on Grayham E. Mizon’s
    Progressive modelling of macroeconomic time series: The LSE methodo-
    logy). In K. D. Hoover (ed.), Macroeconometrics: Developments, Tensions
    and Prospects, pp. 171–180. Kluwer Academic Publishers, Dortrecht.
Faust, J. and C. H. Whiteman (1997). General-to-speciﬁc procedures for ﬁtting
    a data-admissible, theory-inspired, congruent, parsimonious, weakly-
    exogenous, identiﬁed, structural model to the DGP. Carnegie-Rochester
    Conference Series on Economic Policy, 47, 121–162.
Favero, C. A. (2001). Applied Macroeconometrics. Oxford University Press,
    Oxford.
Favero, C. A. and D. F. Hendry (1992). Testing the Lucas critique: A review.
    Econometric Reviews, 11, 265–306.
Ferri, P. (2000). Wage dynamics and the Phillips curve. In R. E. Backhouse
     and A. Salanti (eds.), Macroeconomics and the Real World. Volume 2:
     Keynesian Economics, Unemployment and Policy, chap. 5, pp. 97–111.
     Oxford University Press, Oxford.
Fieller, E. C. (1954). Some problems in interval estimation. Journal of the Royal
     Statistical Society, Series B, 16(2), 175–185.
Fisher, I. (1911). The Purchasing Power of Money. MacMillan, New York.
Forslund, A. and O. Risager (1994). Wages in Sweden. New and Old Results.
     Memo 1994–22, University of Aarhus, Institute of Economics.
Friedman, M. (1963). Inﬂation, Causes and Consequences. Asia Publishing
     House, Bombay.
312                                                                 Bibliography

Friedman, M. (1968). The role of monetary policy. American Economic Review ,
     58(1), 1–17.
Frisch, H. (1977). The Scandinavian model of inﬂation. A generalization and
     empirical evidence. Atlantic Economic Journal , 5, 1–14.
Frisch, R. (1938). Statistical versus theoretical relationships in economic macro-
     dynamics. Memorandum, League of Nations. Reprinted in Autonomy of
     Economic Relationships, Memorandum 6. November 1948, Universitetets
     Socialøkonomiske Institutt, Oslo.
Fuhrer, J. C. (1995). The Phillips curve is alive and well. New England
    Economic Review , March/April, 41–56.
Fuhrer, J. C. (1997). The (un)importance of forward-looking behavior
    in price speciﬁcations. Journal of Money, Credit and Banking, 29,
    338–350.
Fuhrer, J. C. and G. A. Moore (1995). Inﬂation persistence. Quarterly Journal
    of Economics, 110, 127–159.
Galı́, J. (2003). New perspectives on monetary policy, inﬂation, and the busi-
      ness cycle. In M. Dewatripont, L. P. Hansen, and S. J. Turnovsky (eds.),
      Advances in Economics and Econometrics. Theory and Applications. Eight
      World Congress, Volume III , chap. 5, pp. 151–197. Cambridge University
      Press, Cambridge.
Galı́, J. and M. Gertler (1999). Inﬂation dynamics: A structural econometric
      analysis. Journal of Monetary Economics, 44(2), 233–258.
Galı́, J., M. Gertler, and J. D. López-Salido (2001). European inﬂation
      dynamics. European Economic Review , 45, 1237–1270.
Gerlach, S. and L. E. O. Svensson (2003). Money and inﬂation in the Euro
    area: A case for monetary indicators? Journal of Monetary Economics,
    50, 1649–1672.
Godfrey, L. G. (1978). Testing for higher order serial correlation when
   the regressors include lagged dependent variables. Econometrica, 46,
   1303–1313.
Gordon, R. J. (1983). ‘Credibility’ vs. ‘mainstream’: Two views of the
    inﬂation process. In W. D. Nordhaus (ed.), Inﬂation: Prospects and Reme-
    dies, Alternatives for the 1980s, pp. 25–39. Center for National Policy,
    Washington.
Gordon, R. J. (1997). The time-varying NAIRU and its implications for
    economic policy. Journal of Economic Perspectives, 11(1), 11–32.
Bibliography                                                                 313

Gourieroux, C. and A. Monfort (1997). Time Series and Dynamic Models.
   Cambridge University Press, Cambridge, New York.
Granger, C. W. J. (1981). Some properties of time series data and their
    use in econometric model speciﬁcation. Journal of Econometrics, 16,
    121–130.
Granger, C. W. J. (1990). General introduction: Where are the controversies in
    econometric methodology? In C. W. J. Granger (ed.), Modelling Economic
    Series. Readings in Econometric Methodology, pp. 1–23. Oxford University
    Press, Oxford.
Granger, C. W. J. (1992). Fellow’s opinion: Evaluating economic theory.
    Journal of Econometrics, 51, 3–5.
Granger, C. W. J. (1999). Empirical Modeling in Economics. Speciﬁcation and
    Evaluation. Cambridge University Press, Cambridge.
Granger, C. W. J. and N. Haldrup (1997). Separation in cointegrated systems
    and persistent-transitory decompositions. Oxford Bulletin of Economics
    and Statistics, 59, 449–463.
Granger, C. W. J. and P. Newbold (1974). Spurious regressions in econometrics.
    Journal of Econometrics, 2, 111–120.
Granger, C. W. J. and P. Newbold (1986). Forecasting Economic Time Series.
    Academic Press, San Diego.
Gregory, A. M. and M. R. Veall (1985). Formulating Wald tests of nonlinear
    restrictions. Econometrica, 53(6), 1465–1468.
Grubb, D. (1986). Topics in the OECD Phillips curve. Economic Journal ,
   96, 55–79.
Gruen, D., A. Pagan, and C. Thompson (1999). The Phillips curve in Australia.
    Journal of Monetary Economics, 44, 223–258.
Haavelmo, T. (1944). The probability approach in econometrics. Econometrica,
    12, 1–118 (Supplement).
Haldane, A. G. and C. K. Salmon (1995). Three issues on inﬂation targets. In
    A. G. Haldane (ed.), Targeting Inﬂation, pp. 170–201. Bank of England,
    London.
Hallman, J. J., R. D. Porter, and D. H. Small (1991). Is the price level tied to
    the M2 monetary aggregate in the long run? American Economic Review ,
    81, 841–858.
Hansen, B. E. (1992). Testing for parameter instability in linear models. Journal
   of Policy Modelling, 14, 517–533.
314                                                             Bibliography

Hansen, B. E. (1996). Methodology: Alchemy or science. Economic Journal ,
   106, 1398–1431.
Hansen, L. P. (1982). Large sample properties of generalized method of
   moments estimators. Econometrica, 50, 1029–1054.
Heckman, J. J. (1992). Haavelmo and the birth of modern econometrics:
    A review of the history of econometric ideas by Mary Morgan. Journal
    of Economic Literature, 30, 876–886.
Hecq, A., F. C. Palm, and J.-P. Urbain (2002). Separation, weak exogen-
    eity, and P-T decomposition in cointegrated VAR systems with common
    features. Econometric Reviews, 21, 273–307.
Hendry, D. F. (1988). The encompassing implications of feedback versus
   feedforward mechanisms in econometrics. Oxford Economic Papers, 40,
   132–149.
Hendry, D. F. (1993a). Econometrics. Alchemy or Science? Blackwell, Oxford.
Hendry, D. F. (1993b). The Roles of Economic Theory and Econometrics in
   Time Series Economics. Paper presented at the European Meeting of the
   Econometric Society in Uppsala, 1993.
Hendry, D. F. (1995a). Dynamic Econometrics. Oxford University Press,
   Oxford.
Hendry, D. F. (1995b). Econometrics and business cycle empirics. The Economic
   Journal , 105, 1622–1636.
Hendry, D. F. (1997a). The econometrics of macro-economic forecasting.
   Economic Journal , 107, 1330–1357.
Hendry, D. F. (1997b): On congruent econometric relations: A com-
   ment. Carnegie-Rochester Conference Series on Public Policy, 47,
   163–190.
Hendry, D. F. (1998). Structural breaks in economic forecasting. Mimeo Nuﬃeld
   College, Oxford.
Hendry, D. F. (2001a). How economists forecast. In N. R. Ericsson and
   D. F. Hendry (eds.), Understanding Economic Forecasts, chap. 2,
   pp. 15–41. The MIT Press, Cambridge, MA.
Hendry, D. F. (2001b). Modelling UK inﬂation, 1875–1991. Journal of Applied
   Econometrics, 16, 255–275.
Hendry, D. F. (2002). Applied econometrics without sinning. Journal of
   Economic Surveys, 16, 591–614.
Bibliography                                                              315

Hendry, D. F. and N. R. Ericsson (1991). Modeling the demand for narrow
   money in the United Kingdom and the United States. European Economic
   Review , 35, 833–886.
Hendry, D. F. and H.-M. Krolzig (1999). Improving on ‘Data Mining
   Reconsidered’ by K. D. Hoover and S. J. Perez. Econometrics Journal ,
   2, 41–58.
Hendry, D. F. and H.-M. Krolzig (2001). Automatic Econometric Model
   Selection Using PcGets. Timberlake Consultants Ltd, London.
Hendry, D. F. and G. E. Mizon (1993). Evaluating dynamic econometric models
   by encompassing the VAR. In P. C. B. Phillips (ed.), Models, Meth-
   ods and Applications of Econometrics, chap. 18, pp. 272–300. Blackwell,
   Oxford.
Hendry, D. F. and G. E. Mizon (2000). Reformulating empirical macroe-
   conometric modelling. Oxford Review of Economic Policy, 16(4),
   138–157.
Hendry, D. F. and M. S. Morgan (1995). The Foundations of Econometric
   Analysis. Cambridge University Press, Cambridge.
Hendry, D. F. and A. Neale (1988). Interpreting long-run equilibrium solu-
   tions in conventional macro models: A comment. Economic Journal , 98,
   809–817.
Hendry, D. F. and J. F. Richard (1982). On the formulation of empirical models
   in dynamic econometrics. Journal of Econometrics, 20, 3–33.
Hendry, D. F. and J. F. Richard (1983). The econometric analysis of economic
   time series. International Statistical Review , 51, 111–163.
Hendry, D. F. and J. F. Richard (1989). Recent developments in the theory
   of encompassing. In B. Cornet and H. Tulkens (eds.), Contributions to
   Operations Research and Econometrics. The XXth Anniversary of CORE,
   chap. 12, pp. 393–440. MIT Press, Cambridge, MA.
Hendry, D. F., A. Spanos, and N. R. Ericsson (1989). The contributions to
   econometrics in Trygve Haavelmo’s The probability approach in econo-
   metrics. Sosialøkonomen, 43(11), 12–17.
Hodrick, R. J. and E. C. Prescott (1997). Postwar U.S. business cycles:
   An empirical investigation. Journal of Money, Credit and Banking, 29,
   1–16.
Hoel, M. and R. Nymoen (1988). Wage formation in Norwegian manufacturing.
    An empirical application of a theoretical bargaining model. European
    Economic Review , 32, 977–997.
316                                                              Bibliography

Holden, S. (1990). Wage drift in Norway: A bargaining approach. In
    L. Calmfors (ed.), Wage Formation and Macroeconomic Policy in the
    Nordic Countries, chap. 7. Oxford University Press, Oxford. (With
    comment by T. Eriksson and P. Skedinger.)
Holden, S. (2003). Wage setting under diﬀerent monetary regimes. Economica,
    70, 251–266.
Holden, S. and R. Nymoen (2002). Measuring structural unemployment:
    NAWRU estimates in the Nordic countries. The Scandinavian Journal of
    Economics, 104(1), 87–104.
Hoover, K. D. (1991). The causal directions between money and prices. Journal
   of Monetary Economics, 27, 381–423.
Hoover, K. D. and S. J. Perez (1999). Data mining reconsidered: Encompassing
   and the general-to-speciﬁc approach to speciﬁcation search. Econometrics
   Journal , 2, 1–25.
Hunt, B., D. Rose, and A. Scott (2000). The core model of the Reserve Bank
   of New Zealand’s Forecasting and Policy System. Economic Modelling, 17,
   247–274.
Jacobson, T., P. Jansson, A. Vredin, and A. Warne (2001). Monetary policy
    analysis and inﬂation targeting in a small open economy: A VAR approach.
    Journal of Applied Econometrics, 16, 487–520.
Jansen, E. S. (2002). Statistical issues in macroeconomic modelling (with
    discussion). Scandinavian Journal of Statistics, 29, 193–217.
Jansen, E. S. (2004). Modelling inﬂation in the Euro area. Working paper 322,
    European Central Bank.
Jansen, E. S. and T. Teräsvirta (1996). Testing parameter constancy and super
    exogeneity in econometric equations. Oxford Bulletin of Economics and
    Statistics, 58, 735–763.
Johansen, K. (1995a). Norwegian wage curves. Oxford Bulletin of Economics
    and Statistics, 57, 229–247.
Johansen, L. (1977). Lectures on Macroeconomic Planning. Volume 1. General
    Aspects. North-Holland, Amsterdam.
Johansen, L. (1982). Econometric models and economic planning and policy.
    Some trends and developments. In M. Hazewinkel and A. H. G. Rinnooy
    Kan (eds.), Current Developments in the Interface: Economics, Economet-
    rics, Mathematics, chap. 5, pp. 91–122. D. Reidel Publishing Company,
    Dordrecht.
Johansen, S. (1988). Statistical analysis of cointegration vectors. Journal of
    Economic Dynamics and Control , 12, 231–254.
Bibliography                                                                317

Johansen, S. (1991). Estimation and testing of cointegrating vectors in Gaussian
    vector autoregressive models. Econometrica, 59, 1551–1580.
Johansen, S. (1992). Cointegration in partial systems and the eﬃciency of
    single-equation analysis. Journal of Econometrics, 52, 389–402.
Johansen, S. (1995b). Likelihood-Based Inference in Cointegrated Vector
    Autoregressive Models. Oxford University Press, Oxford.
Johansen, S. (2002). Discussion (of E. S. Jansen: Statistical issues
    in macroeconomic modeling). Scandinavian Journal of Statistics, 29,
    213–216.
Juselius, K. (1992). Domestic and foreign eﬀects on prices in an open economy:
    The case of Denmark. Journal of Policy Modeling, 14, 401–428.
Kendall, M. G. and A. Stuart (1973). The Advanced Theory of Statistics:
   Volume 2, Inference and Relationship, 3rd edn. Charles Griﬃn and
   Company, London.
Keuzenkamp, H. A. and J. R. Magnus (1995). On tests and signiﬁcance in
   econometrics. Journal of Econometrics, 67, 5–24.
King, M. (1998). The Employment Policy Institute’s Fourth Annual Lecture:
    Lessons from the UK labour market. BIS Review 103, Bank for Interna-
    tional Settlement.
King, R. G., C. I. Plosser, J. H. Stock, and M. W. Watson (1991).
    Stochastic trends and economic ﬂuctuations. American Economic Review ,
    81, 819–840.
Klein, L. R. (1950). Economic Fluctuations in the United States 1921–1941 .
    Cowles Commission Monograph 11. Wiley, New York.
Klein, L. R. (1953). A Textbook of Econometrics. Row, Peterson & Co,
    Evanston, IL.
Klein, L. R. (1983). Lectures in Econometrics. North-Holland, Amsterdam.
Klein, L. R. (1988). The statistical approach to economics. Journal of
    Econometrics, 37, 7–26.
Klein, L. R., A. Welfe, and W. Welfe (1999). Principles of Macroeconometric
    Modeling. North-Holland, Amsterdam.
Klovland, J. T. (1983). The demand for money in the secular perspec-
    tive: The case of Norway, 1867–1980. European Economic Review , 22,
    193–218.
Kolsrud, D. and R. Nymoen (1998). Unemployment and the open economy
    wage–price spiral. Journal of Economic Studies, 25, 450–467.
318                                                               Bibliography

Koopmans, T. C. and W. C. Hood (1953). The estimation of simultaneous linear
   economic relationships. In W. C. Hood and T. C. Koopmans (eds.), Stud-
   ies in Econometric Method . Cowles Commission Monograph 14, chap. 6,
   pp. 112–199. Wiley, New York.
Koopmans, T. C., H. Rubin, and R. B. Leibnik (1950). Measuring the equation
   systems of dynamic economics. In T. C. Koopmans (ed.), Statistical Infer-
   ence in Dynamic Economic Models. Cowles Commission Monograph 10,
   chap. 2, pp. 53–237. Wiley, New York.
Kremers, J. J. M., N. R. Ericsson, and J. J. Dolado (1992). The power
   of cointegration tests. Oxford Bulletin of Economics and Statistics, 54,
   325–348.
Kydland, F. E. and E. C. Prescott (1991). The econometrics of the general equi-
   librium approach to business cycles. Scandinavian Journal of Economics,
   93, 161–178.
Layard, R. and S. Nickell (1986). Unemployment in Britain. Economica, 53,
    121–166 (Special issue).
Layard, R., S. Nickell, and R. Jackman (1991). Unemployment. Oxford
    University Press, Oxford.
Layard, R., S. Nickell, and R. Jackman (1994). The Unemployment Crises.
    Oxford University Press, Oxford.
Leamer, E. E. (1983). Lets take the ‘Con’ out of econometrics. American
    Economic Review , 73, 31–43.
Levin, A., V. Wieland, and J. C. Williams (2003). The performance of forecast-
    based monetary policy rules under model uncertainty. American Economic
    Review , 93(3), 622–645.
Lindbeck, A. (1993). Unemployment and Macroeconomics. The MIT Press,
    Cambridge, MA.
Lipsey, R. G. (1960). The relationship between unemployment and the rate
    of change in money wages in the United Kingdom 1862–1957: A further
    analysis. Economica, 27, 1–31.
Lucas, R. E., Jr. (1972). Expectations and the neutrality of money. Journal of
    Economic Theory, 4, 103–124.
Lucas, R. E., Jr. (1976). Econometric policy evaluation: A critique. Carnegie-
    Rochester Conference Series on Public Policy, 1, 19–46.
Lucas, R. E., Jr. and L. A. Rapping (1969). Real wages, employment and
    inﬂation. Journal of Political Economy, 77, 721–754.
Bibliography                                                                319

Lucas, R. E., Jr. and L. A. Rapping (1970). Price expectations and the
    Phillips curve. American Economic Review , 59, 342–349.
Lütkepohl, H., Berlin. (1991). Introduction to Multiple Time Series Analysis.
     Springer-Verlag, Berlin.
MacKinnon, J. G. (1991). Critical values for cointegration tests. In R. F. Engle
   and C. W. J. Granger (eds.), Long-Run Economic Relationships: Readings
   in Cointegration, chap. 13, pp. 267–276. Oxford University Press, Oxford.
Manning, A. (1993). Wage bargaining and the Phillips curve: The identiﬁcation
   and speciﬁcation of aggregate wage equations. The Economic Journal , 103,
   98–117.
Mavroeidis, S. (2002). Econometric Issues in Forward-Looking Monetary
   Models. Ph.D. thesis, Nuﬃeld College, Oxford University.
Miller, M. H. and D. Orr (1966). A model of the demand for money by ﬁrms.
     Quarterly Journal of Economics, 80, 413–434.
Mizon, G. M. (1995). Progressive modelling of macroeconomic time series: The
    LSE methodology. In K. D. Hoover (ed.), Macroeconometrics: Develop-
    ments, Tensions and Prospects, chap. 4, pp. 107–170. Kluwer Academic
    Publishers, Dortrecht.
Mizon, G. M. and J. F. Richard (1986). The encompassing principle and
    its application to testing non-nested hypotheses. Econometrica, 54,
    657–678.
Morgan, M. S. (1990). The History of Econometric Ideas. Cambridge University
   Press, Cambridge.
Nickell, S. (1987). Why is wage inﬂation in Britain so high? Oxford Bulletin of
    Economics and Statistics, 49, 103–128.
Nickell, S. (1993). Unemployment: A survey. Economic Journal , 100(401), 391–
    439.
Nickell, S. J. and M. J. Andrews (1983). Unions, real-wages and employment
    in Britain 1951–79. Oxford Economic Papers (Supplement), 35, 183–206.
Nicoletti Altimari, S. (2001). Does money lead inﬂation in the Euro area?
    Working paper 63, European Central Bank.
Nilsson, C. (2002). Rixmod—The Riksbank’s macroeconomic model for mon-
     etary policy analysis. Sveriges Riksbank Economic Review , 2002(2), 46–71.
Nordhaus, W. D. (1972). The world wide wage explosion. Brookings Papers on
    Economic Activity, 2, 431–464.
320                                                              Bibliography

Nymoen, R. (1989a). Modelling wages in the small open economy: An error-
   correction model of Norwegian manufacturing wages. Oxford Bulletin of
   Economics and Statistics, 51, 239–258.
Nymoen, R. (1989b). Wages and the length of the working day. An empirical test
   based on Norwegian quarterly manufacturing data. Scandinavian Journal
   of Economics, 91, 599–612.
Nymoen, R. (1990). Empirical Modelling of Wage–Price Inﬂation and Employ-
   ment Using Norwegian Quarterly Data. Ph.D. thesis, University of Oslo.
Nymoen, R. (1991). A small linear model of wage- and price-inﬂation
   in the Norwegian economy. Journal of Applied Econometrics, 6,
   255–269.
Nymoen, R. (1992). Finnish manufacturing wages 1960–1987:      Real-
   wage ﬂexibility and hysteresis. Journal of Policy Modelling, 14,
   429–451.
Nymoen, R. (2002). Faulty watch towers—‘Structural’ models in Norwegian
   monetary policy analysis. Unpublished manuscript, University of Oslo.
Nymoen, R. and A. Rødseth (2003). Explaining unemployment: Some lessons
   from Nordic wage formation. Labor Economics, 10, 1–29.
OECD (1997a). Economic Survey for Norway. OECD, Paris.
OECD (1997b). Employment Outlook . July 1997. OECD, Paris.
Olsen, K. and F. Wulfsberg (2001). The role of assessments and judgement
    in the macroeconomic model RIMINI. Economic Bulletin (Norges Bank),
    72, 55–64.
Orphanides, A. (2001). Monetary policy rules based on real-time data.
   American Economic Review , 91, 964–985.
Orphanides, A. (2003). The quest for prosperity without inﬂation. Journal of
   Monetary Economics, 50, 663–693.
Pagan, A. (2003). Report on modelling and forecasting at the Bank of England.
    Bank of England Quarterly Bulletin (Spring), 1–29.
Pesaran, M. H. (1987). The Limits to Rational Expectations. Blackwell, Oxford.
Pesaran, M. H. and R. P. Smith (1998). Structural analysis of cointegrating
    VARs. Journal of Economic Surveys, 12, 471–505.
Phelps, E. S. (1967). Phillips curves, expectations and inﬂation, and optimal
    unemployment over time. Economica, 34, 254–281.
Phelps, E. S. (1968). Money–wage dynamics and labour market equilibrium.
    Journal of Political Economy, 76, 678–711.
Bibliography                                                               321

Phelps, E. S. (1978). Disinﬂation without recession: Adaptive guideposts and
    monetary policy. Weltwirtschaftliches Archiv , 100, 239–265.
Phelps, E. S. (1995). The origins and further developments of the natural rate
    of unemployment. In R. Cross (ed.), The Natural Rate of Unemployment.
    Reﬂections on 25 Years of the Hypothesis, chap. 2, pp. 15–31. Cambridge
    University Press, Cambridge.
Phillips, A. W. (1958). The Relation between Unemployment and the Rate
     of Change of Money Wage Rates in the United Kingdom, 1861–1957.
     Economica, 25, 283–299.
Poloz, S., D. Rose, and R. Tetlow (1994). The Bank of Canada’s New Quarterly
    Projection Model (QPM): An introduction—Le Nouveau Modèle Trimes-
    teriel de Prévision (MTP) de la Banque Du Canada: Un Aperçu. Bank of
    Canada Review—Revue de la Banque du Canada, 1994 (Autumn), 23–28.
Qvigstad, J. F. (1975). Noen emner fra inﬂasjonsteorien (Topics from the theory
    of inﬂation). Memorandum 13.2.1975, Institute of Economics University of
    Oslo. Notes from Professor Haavelmo’s lectures spring 1974.
Rasche, R. H. (1987). M1-velocity and money-demand functions: Do sta-
    ble relationships exist? Carnegie-Rochester Conference Series on Public
    Policy, 27, 9–88.
Richardson, P., L. Boone, L. Giorno, C. Meacci, M. Rae, and D. Turner (2000).
    The concept, policy use and measurement of structural unemployment:
    Estimating a time varying NAIRU across 21 OECD countries. Economics
    Department Working paper 250, OECD.
Roberts, J. M. (1995). New Keynesian economics and the Phillips curve.
   Journal of Money, Credit and Banking, 27, 975–984.
Roberts, J. M. (2001). How well does the New Keynesian sticky-price model ﬁt
   the data? Finance and Economics Discussion Series 13, Federal Reserve
   Board of Governors.
Rødseth, A. (2000). Open Economy Macroeconomics. Cambridge University
    Press, Cambridge.
Rødseth, A. and S. Holden (1990). Wage formation in Norway. In L. Calmfors
    (ed.), Wage Formation and Macroeconomic Policy in the Nordic Coun-
    tries, chap. 5, pp. 237–280. Oxford University Press, Oxford.
Røed, K. (1994). Hysteresis versus persistence: Does it make any diﬀerence?
    Unpublished paper, Economics Department, University of Oslo.

Røisland, Ø. and R. Torvik (2004). Exchange Rate versus Inﬂation Targeting:
    A Theory of Output Fluctuations in Traded and Non-Traded Sectors.
    Journal of International Trade and Economic Development, 13, 265–285.
322                                                                Bibliography

Romer, D. (1996). Advanced Macroeconomics. McGraw-Hill, New York.
Rorty, R. (1984). The histography of philosophy: Four genres. In R. Rorty,
    J. B. Schneewind, and Q. Skinner (eds.), Philosophy in History, chap. 3,
    pp. 49–75. Cambridge University Press, Cambridge.
Rotemberg, J. J. (1982). Sticky prices in the United States. Journal of Political
    Economy, 90, 1187–1211.
Rowlatt, P. A. (1992). Inﬂation. Chapman and Hall, London.
Rowthorn, R. E. (1977). Conﬂict, inﬂation and money. Cambridge Journal of
   Economics, 1, 215–239.
Royal Swedish Academy of Science (1990). The Nobel Memorial Prize in
    Economics. Press release from the Royal Swedish Academy of Sciences.
    Scandinavian Journal of Economics, 92, 11–15.
Rudd, J. and K. Whelan (2004). New tests of the New Keynesian Phillips curve.
   Journal of Monetary Economics (forthcoming).
Samuelson, P. A. (1941). The stability of equilibrium: Comparative statics and
   dynamics. Econometrica, 9, 97–120.
Samuelson, P. A. and R. M. Solow (1960). Analytical aspects of anti inﬂation
   policy. American Economic Review , 50, 177–194.
Sargan, J. D. (1964). Wages and prices in the United Kingdom: A study of
    econometric methodology. In P. E. Hart, G. Mills, and J. K. Whitaker
    (eds.), Econometric Analysis for National Economic Planning, pp. 25–63.
    Butterworth Co., London.
Sargan, J. D. (1980). A model of wage–price inﬂation. Review of Economic
    Studies, 47, 113–135.
Sargan, J. D. (1988). Lectures on Advanced Econometric Theory. Blackwell,
    Oxford.
Sargent, T. J. (1987). Macroeconomic Theory, 2nd edn. Academic Press,
    Orlando.
Scarpetta, S. (1996). Assessing the role of labour markets policies and institu-
    tional settings on unemployment: A cross-country study. OECD Economic
    Studies, no. 26, 43–98.
Sgherri, S. and K. F. Wallis (1999). Policy Analysis with Macroeconometric
    Models: Inﬂation Targetry in a Small Structural Model. Unpublished
    manuscript, Department of Economics, University of Warwick.
Siklos, P. L. (1993). Income velocity and institutional change: Some new time
     series evidence, 1870–1986. Journal of Money, Credit and Banking, 25,
     377–392.
Bibliography                                                              323

Silvey, S. D. (1975). Statistical Inference. Chapman and Hall, London.
Sims, C. A. (1980). Macroeconomics and reality. Econometrica, 48, 1–48.
Smets, F. and R. Wouters (2003). An estimated dynamic stochastic general
   equilibrium model of the Euro area. Journal of the European Economic
   Association, 1, 1123–1175.
Smith, A. A. (1993). Estimating nonlinear time-series models using simu-
    lated vector autoregressions. Journal of Applied Econometrics, 8, S63–S84.
    (Special issue: Econometric inference using simulation techniques.)
Solow, R. M. (1986). Unemployment: Getting the questions right. Economica,
    53, S23–S34 (Special Issue).
Spanos, A. (1989). On rereading Haavelmo: A retrospective view of econometric
    modeling. Econometric Theory, 5, 405–429.
Staiger, D., J. H. Stock, and M. W. Watson (1997). The NAIRU, unemployment
     and monetary policy. Journal of Economic Perspectives, 11, 33–49.
Staiger, D., J. H. Stock, and M. W. Watson (2001). Prices, wages and the U.S.
     NAIRU in the 1990s. In A. B. Kruger and R. M. Solow (eds.), The Roaring
     Nineties, chap. 1, pp. 3–60. Russell Sage Foundation, New York.
Stanley, T. D. (2000). An empirical critique of the Lucas critique. Journal of
    Socio-Economics, 29, 91–107.
Stock, J. H., J. H. Wright, and M. Yogo (2002). A survey of weak instru-
    ments and weak identiﬁcation in generalized method of moments. Journal
    of Business and Economic Statistics, 20(4), 518–529.
Stølen, N. M. (1990). Is there a Nairu in Norway. Working paper 56, Central
     Bureau of Statistics.
Stølen, N. M. (1993). Wage Formation and the Macroeconometric Functioning
     of the Norwegian Labour Market. Ph.D. thesis, University of Oslo.
Summers, L. H. (1991). The scientiﬁc illusions in empirical macroeconomics.
   Scandinavian Journal of Economics, 93, 129–148.
Svensson, L. E. O. (2000). Open economy inﬂation targeting. Journal of
    International Economics, 50, 155–183.
Taylor, J. B. (1979a). Estimation and control of a macroeconomic model with
    rational expectations. Econometrica, 47, 1267–1286.
Taylor, J. B. (1979b). Staggered wage setting in a macro model. American
    Economic Review , 69, 108–113.
Taylor, J. B. (1980). Aggregate dynamics and staggered contracts. Journal of
    Political Economy, 88, 1–23.
324                                                                Bibliography

Taylor, J. B. (1999). Introduction. In J. B. Taylor (ed.), Monetary Policy Rules,
    A National Bureau of Economic Research Conference Report, pp. 1–14.
    University of Chicago Press, Chicago.
Teräsvirta, T. (1998). Modelling economic relationships with smooth trans-
     ition regressions. In A. Ullah and D. E. Giles (eds.), Handbook of Applied
     Economic Statistics, chap. 15, pp. 507–552. Marcel Dekker, Inc., New York.
Tinbergen, J. (1937). An Econometric Approach to Business Cycle Problems.
    Hermann & Cie, Paris.
Tintner, G. (1952). Econometrics. Wiley, New York.
Tobin, J. (1956). The interest-elasticity of transaction demand for cash. Review
    of Economics and Statistics, 38, 241–247.
Tödter, K.-H. and H.-E. Reimers (1994). P-Star as a link between money and
     prices in Germany. Weltwirtschaftliches Archiv , 130, 273–289.
Trecroci, C. and J. L. Vega (2002). The information content of M3 for future
    inﬂation. Weltwirtschaftliches Archiv , 138, 22–53.
Wald, A. (1943). Tests of statistical hypotheses concerning several parameters
   when the number of observations is large. Transactions of the American
   Mathematical Society, 54, 426–482.
Wallis, K. F. (1977). Multiple time series analysis and the ﬁnal form of
    econometric models. Econometrica, 45, 1481–1497.
Wallis, K. F. (1989). Macroeconomic forecasting. A survey. Economic Journal ,
    99, 28–61.
Wallis, K. F. (1993). On macroeconomic policy and macroeconometric models.
    The Economic Record , 69, 113–130.
Wallis, K. F. (1994). Introduction. In K. F. Wallis (ed.), Macroeconometric
    Modelling, Volume 2. Edward Elgar, Aldershot.
Wallis, K. F. (1995). Large-scale macroeconometric modeling. In M. H. Pesaran
    and M. R. Wickens (eds.), Handbook of Applied Econometrics. Volume I:
    Macroeconomics, chap. 6, pp. 312–355. Blackwell, Oxford.
Wallis, K. F., M. J. Andrews, D. N. F. Bell, P. G. Fisher, and J. D. Whitley
    (1984). Models of the UK Economy. A Review by the ESRC Macroeconomic
    Modelling Bureau. Oxford University Press, Oxford.
Walsh, C. E. (1999). Monetary policy trade-oﬀs in the open economy.
    Unpublished.
Walsh, C. E. (2003). Speed limit policies: The output gap and optimal
    monetary policy. American Economic Review , 93(1), 265–278.
Bibliography                                                             325

White, H. (1980). A heteroskedasticity-consistent covariance matrix estimator
   and a direct test of heteroskedasticity. Econometrica, 48, 817–838.
Willman, A., M. Kortelainen, H.-L. Männistö, and M. Tujula (2000). The BOF5
    macroeconomic model of Finland, structure and dynamic microfounda-
    tions. Economic Modelling, 17, 275–303.
Woodford, M. (2000). Pitfalls of forward-looking monetary policy. American
   Economic Review , 90, 100–104.
Woodford, M. (2003). Interest and Prices. Foundations of a Theory of Monetary
   Policy. Princeton University Press, Princeton, NJ.
Wren-Lewis, S. and R. Moghadam (1994). Are wages forward looking? Oxford
   Economic Papers, 46, 403–424.
Wright, S. (1992). Equilibrium real-exchange rates. The Manchester School ,
    LX, 63–84.
This page intentionally left blank
                       Author Index


Subscripts

a - the reference is abbreviated (e.g. GG for Galı́ and Gertler (1999) in
    Chapter 7)
n - the reference is in a footnote
c - the reference is to a co-author of a paper with more than two authors
   (e.g. Wallis et. al. (1984))
c,n - the reference is to a co-author of a paper with more than two authors
      occuring in a footnote


Akerlof, G. A. 5, 149, 150, 303                     Baumol, W. J. 149, 305
Akram, Q. F. 207, 208, 226n, 303                    Bean, C. R. 79, 105, 106, 106n, 109, 268,
Aldrich, J. 28, 303                                        305, 309
Alogoskouﬁs, G. S. 77, 303                          Bell, D. N. F. 72c,n, 324
Andersen, T. M. 92, 303                             Bernanke, B. S. 199, 305
Anderson, T. W. 22, 32, 69n, 205n, 303              Beyer, A. 161n, 305
Andrews, M. J. 73, 142, 319, 324                    Bjerkholt, O. 11n, 36n, 305
Apel, M. 109, 303                                   Blake, D. 135, 291, 305
Aukrust, O. 35, 36, 36n, 37, 38, 39, 40,            Blanchard, O. J. 8, 54, 73, 80, 90, 106,
       41, 42, 43, 45, 45n, 47, 48, 73, 84,                137, 142, 268, 286, 305, 306
       87, 95, 100, 137, 304                        Blanchﬂower, D. G. 8, 85, 306
                                                    Bodkin, R. G. 18, 21, 306
Backhouse, R. E. 43, 53, 109, 304, 311              Boﬁnger, P. 165, 306
Ball, L. 199, 228, 304                              Bomhoﬀ, E. J. 149, 306
Bårdsen, G. 3, 10, 63, 64, 86, 89, 107,            Bontemps, C. 28, 306
       113, 128n, 134n, 136, 137, 143,              Boone, L. 109c, 321
       143n, 144, 144n, 145, 182, 189,              Bordo, M. D. 149, 306
       201n, 203, 210, 214, 215, 219, 223,          Bowitz, E. 273, 306
       226c,n, 268, 299, 303, 304, 305              Box, G. E. P. 21, 306
Barkbu, B. B. 66, 305                               Brockwell, P. J. 10, 37, 59n, 130, 306
Bates, J. M. 246, 305                               Brodin, P. A. 29, 29a, 30a, 31a, 32a,
Batini, N. 128, 129, 141, 142, 143, 143n,                  259n, 306
       199, 228, 305                                Bruno, M. 73, 306, 307


                                              327
328                                                                     Author Index

Calmfors, L. 7, 40, 47, 113, 114, 137,        Fagan, G. 134, 161, 162, 181n, 311
       273n, 307, 316, 321                    Fair, R. C. 7, 18, 311
Calvo, G. A. 129, 307                         Faust, J. 24n, 311
Cappelen, Å. 273, 306                        Favero, C. A. 23, 62, 142, 311
Carlin, W. 73, 74, 79, 307                    Faxén, K.-O. 36c,n, 309
Carruth, A. A. 50, 106, 307                   Ferri, P. 47n, 311
Cassino, V. 109, 307                          Fieller, E. C. 55, 56, 311
Chadha, B. 131, 307                           Fisher, I. 148, 303, 311
Chatterjee, S. 241, 307                       Fisher, P. G. 10, 72c,n, 86c, 107c, 137c,
Chiang, A. C. 284n, 307                               143, 143c, 143c,n, 144c,n, 203c,
Chow, G. C. 64, 307                                   219c, 304, 324
Christ, C. F. 18, 32, 307                     Fisher, S. 73, 286, 305
Clarida, R. 9, 128, 307                       Forslund, A. 40, 113, 307, 311
Clements, M. P. 2, 16, 28n, 29, 59n, 61,      Friedman, M. 7, 8n, 9, 46, 52, 147, 311,
       153n, 246 ,248 , 249, 250, 253,                312
       259, 265n, 307, 308, 309               Frisch, H. 45, 309, 312
Coenen, G. 151, 152, 154, 164, 164n,
                                              Frisch, R. 1, 27, 304, 312
       166n, 169, 170, 308
                                              Fuhrer, J. C. 8, 48, 131, 132, 268, 312
Cornet, B. 315
Courbis, R. 36n, 308
Cromb, R. 106, 308                            Galı́, J. 9c, 9, 10, 128, 128a, 128c, 129a,
Cross, R. 7, 8n, 54, 109, 308, 321                    132, 132a, 133a, 134a, 135a, 136a,
                                                      139, 144a, 145a, 164, 174, 174n,
Dasgupta, A. K. 9, 308                                175n, 268, 286, 287, 307, 312
Davidson, J. 284, 308                         Gerlach, S. 148, 165, 166, 169, 169n, 170,
Davies, E. P. 10, 37, 59n, 130, 308                   171, 172, 172n, 173, 181, 186,
Davies, R. A. 106, 306                                187, 312
de Grauwe, P. 148n, 308                       Gertler, M. 9c, 9, 10, 128, 128a, 128c,
deWolf, P. 36n, 309                                   129a, 132, 132a, 133a, 134a, 135a,
Desai, M. 51, 56, 308, 309                            136a, 139, 144a, 145a, 164, 164c,
Dewatripont, M. 312                                   174c, 174c,n, 175c,n, 268, 286c,
Dolado, J. J. 113c, 318                               287c, 307, 312
Doornik, J. A. 28 , 64, 83, 161c,n, 205n,     Giles, D. E. 324
        252, 305,309                          Giorno, L. 109c, 321
Drèze, J. 105, 106, 106n, 268, 309           Godfrey, L. G. 205n, 312
Driehuis, W. 36n, 309                         Gordon, R. J. 8, 47, 53, 105n, 268, 312
Dunlop, J. T. 73, 309                         Gourieroux, C. 130, 313
                                              Granger, C. W. J. 3, 15, 16, 21, 22, 23,
Edgren, G. 36n, 309                                   24, 25, 26, 28, 34, 43, 59n, 61,
Eika, K. H. 56, 309                                   150, 246, 249, 305, 310, 313, 319
Eitrheim, Ø. 31, 32, 155, 156, 157, 158,      Gregory, A. M. 55, 313
       158n, 159, 160, 182, 226c,n, 249,      Grubb, D. 105, 313
       259n, 260n, 264, 265, 303, 309, 310    Gruen, D. 53, 313
Elmeskov, J. 8n, 109, 310
Engle, R. F. 22, 25, 27, 56n, 62, 150, 190,
       214, 310, 319                          Haavelmo, T. 20, 21, 22, 24n, 27, 90n,
Ericsson, N. R. 21c, 22, 28, 54n, 56c, 61,          313, 314, 315, 321, 323
       62, 113c, 142, 147, 151, 152, 153,     Haldane, A. G. 199, 201n, 219, 220,
       178, 190, 247, 265n, 309, 310, 314,          305, 313
       315, 318                               Haldrup, N. 34, 313
Eriksson, T. 316                              Hallman, J. J. 148, 164, 181n, 313
Estrella, A. 148n, 311                        Hansen, B. E. 24n, 113, 313, 314
Author Index                                                                         329

Hansen, H. 64, 205n, 309                      Kerbeshian, N. A. 54c,n, 310
Hansen, L. P. 134, 312, 314                   Keuzenkamp, H. A. 24n, 317
Harrison, R. 228c, 305                        Keynes, J. M. 23
Hart, P. E. 322                               King, M. 8, 268, 317
Hazewinkel, M. 316                            King, R. G. 23, 317
Heckman, J. J. 24n, 314                       Kiyotaki, N. 73, 306
Hecq, A. 34, 314                              Klein, L. B. 304, 307
Hendry, D. F. 2, 5, 10, 16, 20, 21, 22, 23,   Klein, L. R. 5, 18, 18c, 20, 21, 21c, 22,
       24, 24n, 26, 27, 27c, 28, 28n, 29,            306, 317
       42n, 56c,n, 57, 59, 59n, 61, 62, 64,   Klovland, J. T. 149, 210, 304, 317
       83, 142, 142n, 147, 151, 152, 153,     Kolsrud, D. 89, 92, 92n, 137, 221, 317
       153n, 161c,n, 175n, 177, 183, 190,     Koopmans, T. C. 32, 69n, 205n, 318
       200, 204, 214c, 246, 247, 248, 249,    Kortelainen, M. 23c, 325
       250, 251, 252, 253, 259, 263, 265n,    Kremers, J. J. M. 113, 318
       305, 307, 308, 309, 310, 311, 314,     Krolzig, H.-M. 28, 28n, 64, 183, 315
       315                                    Krueger, A. B. 323
Henry, J. 131c, 161c, 162c, 181n, 311         Kydland, F. E. 23, 318
Hodrick, R. J. 165n, 315
Hoel, M. 73, 142, 315                         Laubach, T. 199c, 305
Holden, S. 38, 40, 43, 84n, 90, 109, 109n,    Layard, R. 7, 8, 36, 73, 74, 77, 78, 79,
       110, 114, 199, 316, 321                       79n, 96, 96n, 100n, 137, 318
Hood, W. C. 32, 318                           Leamer, E. E. 28n, 318
Hoover, K. D. 28, 154, 189, 310, 311,         Leibnik, R. B. 69c,n, 205c,n, 318
       314, 315, 316, 319                     Levin, A. 225, 226, 227n, 318
Hunt, B. 23, 316                              Lindbeck, A. 73, 77, 318
Husebø, T. A. 249c, 264c, 265c, 309           Lipsey, R. G. 46, 318
                                              López-Salido, J. D. 9c, 128a, 128c, 133a,
Irons, J. S. 28, 61, 62, 142, 310                    134a, 135a, 136a, 136a,n, 139,
                                                     139a, 144a, 164c, 174c, 174c,n,
Jackman, R. 7c, 8c, 73c, 74c, 77c, 78c,              175c,n, 286c, 287c, 312
       79c, 79c,n, 96c, 96c,n, 100c,n,        Lucas, R. E., Jr. 23, 46, 47, 57, 151,
       137c, 318                                     207, 318, 319
Jackson, B. 128c, 129c, 141c, 142c, 143c,     Lütkepohl, H. 292, 319
       143c,n, 305
Jacobson, T. 23n, 201n, 316                   MacFarland, M. 8n, 109, 310
Jansen, E. S. 3c, 18n, 30, 31c, 32c, 54c,n,   MacKinnon, J. G. 113, 319
       128c,n, 134c,n, 136c, 144c, 145c,      Magnus, J. R. 24n,317
       162, 163, 166, 167, 182, 182c,         Manning, A. 8, 73, 77, 88, 303, 319
       201c,n, 203c, 214c, 215c, 215n,        Männistö, H.-L. 23c, 325
       219c, 223c, 226c,n, 259c,n, 268c,      Marschak, J. 21
       303, 304, 310, 316, 317                Marwah, K. 18c, 21c, 306
Jansson, P. 23c,n, 201c,n, 316                Masson, P. R. 131c, 307
Jenkins, G. M. 21, 306                        Mavroeidis, S. 139, 319
Johansen, K. 48n, 64n, 122, 203, 316          Meredith, G. 131c, 307
Johansen, L. 3, 28, 316                       Mestre, R. 131c, 161c, 162c, 311
Johansen, S. 18n, 19, 22, 25, 32n, 33, 34,    Meacci, C. 109c, 321
       64n, 122, 214, 316, 317                Millard, S. P. 228c, 305
Jonung, L. 149, 306                           Miller, M. H. 149, 150, 319
Juselius, K. 189, 200, 317                    Mills, G. 322
                                              Mishkin, F. S. 148n, 199c, 305, 311
Katz, L. 8, 80, 106, 137, 142, 268, 306       Mizon, G. M. 10, 22, 26, 28, 175n, 177,
Kendall, M. G. 55, 317                               190, 204, 247, 306, 311, 315, 319
330                                                                      Author Index

Moghadam, R. 10, 325                          Qvigstad, J. F. 90n, 321
Monfort, A. 130, 313
Moore, G. A. 131, 312                         Rae, M. 109c, 321
Morgan, M. S. 20, 21, 23, 314, 315, 319       Rapping, L. A. 46, 151, 318, 319
                                              Rasche, R. H. 149, 321
Naug, B. E. 142n                              Reimers, H.-E. 148, 324
Neale, A. 142, 142n, 315                      Richard, J.-F. 24, 27c, 56c,n, 175n, 177,
Newbold, P. 3, 15, 16, 43, 59n, 61,                  214c, 310, 315, 319
       249, 313                               Richardson, P. 109, 321
Neyman, J. 21                                 Rinnooy Kan, A. H. G. 316
Nickell, S. 7c, 8, 8c, 36, 40, 48n, 53, 73,   Risager, O. 113, 311
       73c, 74c, 77c, 78c, 79c, 79c,n, 96c,   Roberts, J. M. 129, 174n, 321
       96c,n, 100c,n, 109, 128c, 129c,        Rødseth, A. 36n, 38, 40, 43, 74, 76, 79n,
       137c, 142, 142c, 143c, 143c,n, 305,           84n, 90, 105, 106, 111, 111n, 209,
       318, 319                                      268, 273n, 320, 321
Nicoletti Altimari, S. 166, 319               Røed, K. 54, 66c, 305, 321
Nilsson, C. 23, 319                           Røisland, Ø. 199, 321
Nordhaus, W. D. 42, 312, 319                  Romer, D. 47, 50, 322
Nymoen, R. 3c, 5, 8c, 29, 29a, 30a, 31a,      Rorty, R. 43, 322
       31c, 32a, 32c, 38, 40, 42, 43,         Rose, D. 23c, 316, 321
       54c,n, 56c, 63, 64, 66c, 69, 73, 74,   Rotemberg, J. J. 129, 322
       89, 92, 92n, 105, 106, 107c, 109,      Rowlatt, P. A. 106, 106n, 322
       109n,110, 111, 111n,113, 114, 122,     Rowthorn, R. E. 90, 90n, 91, 137, 322
       128c,n, 134c,n, 135, 136c, 137,        Rubin, H. 32, 69c, 69c,n, 205c,n,
       137c, 142, 143c, 143c,n, 144c,                205n, 303, 318
       144c,n, 145c, 182c, 201c,n, 202,       Rudd, J. 139, 174n, 322
       203c, 214c, 215c, 219c, 221, 223c,
       249c, 259n, 259c,n, 260n, 264c,        Sachs, J. 73, 307
       265c, 268, 268c, 273, 273n, 304,       Sâlant, W. S. 304, 307
       305, 306, 307, 309, 310, 315, 316,     Salanti, A. 304, 311
       317, 320                               Salmon, C. K. 201n, 219, 220, 313
                                              Samuelson, P. A. 46, 52, 102, 299, 322
                                              Sargan, J. D. 8, 69n, 90, 137, 205n, 322
Odhner, C.-E. 36c,n, 309
                                              Sargent, T. J. 288, 289, 322
Olsen, K. 6n, 320
                                              Scarpetta, S. 8n, 322
Orphanides, A. 226, 226n, 320
                                              Schneewind, J. B. 322
Orr, D. 149, 150, 319
                                              Schøtt-Jensen, L. 106, 308
Oswald, A. J. 8, 50, 85, 106, 306, 307
                                              Scott, A. 23c, 316
                                              Sgherri, S. 201n, 322
Pagan, A. 4, 53c, 313, 320                    Siklos, P. L. 149, 322
Palm, F. C. 34c, 314                          Silvey, S. D. 54, 55, 323
Perez, S. J. 28, 315, 316                     Sims, C. A. 5, 23, 323
Pesaran, M. H. 23, 282, 320                   Skedinger, P. 316
Phelps, E. S. 7, 46, 52, 53, 129n, 320, 321   Skinner, Q. 322
Phillips, A. W. 7, 46, 321                    Slutsky, E. 21
Phillips, P. C. B. 315                        Small, D. H. 148c, 164c, 181c,n, 313
Plosser, C. I. 23c, 317                       Smets, F. 164, 323
Polan, M. 148n, 308                           Smith, A. A. 164n, 323
Poloz, S. 23, 321                             Smith, R. P. 23, 320
Porter, R. D. 148c, 164c, 181c,n, 313         Solow, R. M. 46, 71, 111, 322, 323
Posen, A. S. 199c, 305                        Soskice, D. 73, 74, 79, 307
Prescott, E. C. 23, 165n, 315, 318            Spanos, A. 21c, 24, 315, 323
Author Index                                                                      331

Staiger, D. 7, 47, 51, 53, 54, 323          Veall, M. R. 55, 313
Stanley, T. D. 62, 323                      Vega, J. L. 148, 151, 152, 154, 166, 166n,
Stigum, B. P. 306                                  169, 170, 172, 308, 324
Stock, J. H. 7c, 23c, 47c, 51c, 53c, 54c,   Vredin, A. 23c,n, 201c,n, 316
       135, 317, 323
Stølen, N. M. 62, 323
Strøm, S. 304                               Wald, A. 21, 54, 55, 56, 313, 324
Stuart, A. 55, 317                          Wallis, K. F. 3, 18, 21, 47, 72n, 74, 201n,
Summers, L. H. 24n, 54, 306, 323                   249, 268, 296, 309, 322, 324
Svensson, L. E. O. 2, 9, 128, 148, 165,     Walsh, C. E. 199, 226, 226n, 228, 324
       166, 169, 169n, 170, 171, 172,       Warne, A. 23c,n, 201c,n, 316
       172n, 173, 181, 186, 187, 199,       Watson, M. W. 7c, 23c, 47c, 51c, 53c,
       312, 323                                    54c, 317, 323
                                            Welfe, A. 5c, 18c, 317
Taylor, J. B. 129, 164, 227, 240, 304,      Welfe, W. 5c, 18c, 317
       305, 323, 324                        Whelan, K. 139, 174n, 322
Teräsvirta, T. 30, 208, 215n, 316, 324     Whitaker, J. K. 322
Tetlow, R. 23c, 321                         White, H. 205n, 325
Thompson, C. 53c, 313                       Whiteman, C. H. 24n, 311
Thornton, R. 109, 307                       Whitley, J. D. 72c, 324
Tinbergen, J. 1, 20, 21, 23, 324            Wieland, V. 164, 164n, 225c, 226c,
Tintner, G. 21, 324                                227c,n, 308, 318
Tobin, J. 149, 324                          Williams, J. C. 225c, 226c, 227c,n, 318
Tödter, K.-H. 148, 324                     Willman, A. 23, 325
Torvik, R. 199, 321                         Woodford, M. 128, 199, 325
Trecroci, C. 148, 166, 166n, 172, 324       Wouters, R. 164, 323
Tujula, M. 23c, 325                         Wren-Lewis, S. 10, 325
Tulkens, H. 315                             Wright, J. H. 135c, 323
Turner, D. 109c, 321                        Wright, S. 79, 325
Turnovsky, S. J. 312                        Wulfsberg, F. 6n, 320

Ullah, A. 324
Urbain, J.-P. 34c, 314                      Yogo, M. 135c, 323
This page intentionally left blank
                      Subject Index
2SLS, 135, 138, 175, 177, 178, 184, 191             — vector, 18, 19, 32, 41, 73, 81, 83,
                                                         86, 88, 203
Aggregation, 75, 76, 81, 161n, 201                  Separation in — systems, 34
ARCH, 63, 64, 67, 83, 120, 135, 138, 152,         Companion matrix, 69, 118, 294
      154, 158–160, 167, 168, 173, 175,           Conditional
      176, 183, 184, 187, 188, 190                  — expectation, 253, 269, 281
Area Wide Model (AWM), 148, 161–163,                — model, 23, 27, 30–32, 56, 61, 151,
      166, 167, 168, 169, 172–182, 197                   215, 251
Autocorrelation, 64, 120, 135, 137, 138,          Congruency, 26–29, 114, 121, 177, 197,
      140, 175, 187, 190, 252, 261                       244, 274
Autonomous, 16, 27, 28, 46, 255, 267              constant rate of inﬂation rate of
Autoregressive                                      unemployment (CIRU), 8
  — conditional heteroscedasticity, see           Consumer price index (CPI), 12, 37, 40,
      ARCH                                               44, 50, 62, 69, 75, 79, 101, 111,
  — distributed lag (ADL), 150                           144, 156, 165, 183, 187, 188, 196,
  — integrated moving average                            202, 218, 219, 220, 226, 227, 230,
      (ARIMA), 15, 61                                    268, 273
  — model, 249, 261                               Consumption, 5, 6, 18, 19, 29–32, 33, 37,
  — process, 72, 99, 213                                 162, 172, 210, 259, 260
Average wage-share rate of                          — function, 19, 30–34, 259
      unemployment (AWSU), 115–116                Contingent plan, 59
                                                  Convergence, 165, 202
                                                  Correlation, 22, 33, 46, 57, 61, 84, 113,
Battle of markups, 103, 200                              115, 137, 138, 151, 164, 190, 274
Behavioural                                         — coeﬃcient, 57, 250
  — equation, 3, 58, 222, 255, 262, 266             Squared multiple —, 113
  — relationship, 43                              Correspondence principle, 52, 102, 299
Bivariate                                         CPI, see Consumer price index (CPI)
  — normal distribution, 251                      Cross-equation restriction, 32, 81, 87, 123
  — system, 250
Business cycle, 12, 20, 21, 23                    Data
                                                    — admissible, 26, 27
Causality, 10, 35, 41, 46, 47–52, 56, 84,           — generating process (DGP), 24–28,
      119, 129, 151, 155                                30, 152, 246, 247, 250, 251, 252,
  Granger non-, 27, 69                                  257, 258, 259, 263, 267, 268, 269,
Cointegrating                                           272, 282
  — relationship, 10, 16, 19, 23, 25, 30,           — revision, 19, 228, 229
      43, 79–82, 83, 84, 90, 92, 97, 123,         Deterministic
      129, 142, 155, 156, 159, 160, 236,            — shifts, 29, 48, 53, 80, 95, 245, 271
      240, 258, 260, 268                            — terms, 40, 48, 250


                                            333
334                                                                   Subject Index

Diagnostic test, 64, 87, 108, 138, 152,        — test, 128, 175, 176, 177, 178, 180,
       154, 158, 159, 183, 184, 187, 274            181, 190–192, 194, 195
Dickey-Fuller, 69                            Endogenous variable, 18, 23, 57, 68, 82,
Diﬀerenced vector autoregressive                    86, 93, 123, 128, 137, 139, 163,
       model (dVAR), 16, 61, 133, 134,              164, 249, 261, 292
       245–267, 272, 279, 280                Equilibrium-correction mechanism
Diﬀerencing, 2, 10, 42, 263, 280                    (EqCM), 8, 16, 25, 47, 48, 69, 84,
Distributed lag, 300                                121, 122, 124, 137, 146, 210, 212,
Dummy variable, 10, 63, 107, 113, 157,              213, 215, 245, 249–263, 265, 267,
       160, 211, 212, Also see Seasonal             268, 271, 279, 280
  Impulse dummy, 63, 273                     Errors in variables, 138, 290, 291
  Step dummy, 158, 209, 212                  Estimation uncertainty, 247, 270
Dynamic                                      Euler equation, 23, 31
  — analysis, 296                            Evaluation
  — forecasting, 219, 220, 261, 262, 269,      Forecast —, 61, 245–280
       276–278                                 Model —, 3, 129, 136, 175–178, 181,
  — model, 8, 43, 79, 86, 89, 103, 107,             182, 190, 191, 200, 249, 259
       150, 201, 249, 292                      Policy —, 109, 225–244
  — multiplier, 4, 15, 70, 123, 246, 248,    Exogeneity, 19, 23, 57, 85, 119, 130, 201,
       292–301                                      207, 214
  — simulation, 70, 71, 124, 218, 262          Strong —, 27, 29, 139, 250
  — speciﬁcation, 16, 150, 249                 Super —, 34, 56, 57, 214, 215, 223
Dynamic stochastic general equilibrium         Weak —, 27, 29, 34, 56, 81, 84, 86, 87,
       (DSGE), 4                                    93, 119, 214, 223
                                             Exogenous variable, 3, 11, 18, 23, 201,
Econometric inﬂation targeting, 6,                  215, 217, 247, 250, 251, 252, 261,
      199–224                                       279, 292, 296
Econometric models, 1, 3, 16, 17, 20, 22,    Expectations, 1, 7, 9, 13, 20, 23, 31, 46,
      26, 28, 47, 57, 61, 74, 128, 245,             50, 56–62, 127, 128, 130, 132, 136,
      246, 248, 249, 260, 266, 267, 271             137, 164, 200, 207, 226, 281
  Role of —, 3, 280                            Forward-looking —, 23, 127, 137, 139,
  Sims critique, 5, 23                              146, 190
Economic                                       Rational —, 9, 31, 44, 46, 57, 59, 62,
  — forecasting, 16, 245–280                        123, 127, 128, 129, 135, 136, 142,
  — interpretation, 16, 25, 92, 118, 131,           144, 164, 282–292
      140, 250, 274                          Expenditure, 5, 12, 29, 210, 217, 260
  — policy, 1, 3, 38, 47, 50, 51, 56, 200,
      203, 222, 260
  — system, 17, 28                           Factorization, 288–290
  — theory, 4, 8, 10, 17, 20, 22, 23, 24,    Feedback, 13, 27, 41, 93, 123, 130, 150,
      25, 26, 47, 57, 59, 69, 72, 73, 88             200, 201, 207–214, 217, 223, 231,
Eﬃciency, 15, 20, 27, 33, 223, 226                   260, 262, 272
Eigenvalue, 83–85, 294                       Fieller statistics, 54–56, 68
Empirical model, 24–27, 102, 105, 127,       Financial markets, 20
      142, 152, 156, 163, 189, 201, 215,       Deregulation of —, 212
      273                                    Finite sample, 54
Employment, 8, 9, 12, 13, 14, 18, 43, 45,    Forecast
      114, 118, 142, 260                       — accuracy, 257, 267–278
Encompassing, 26, 28, 29, 31, 127, 128,        — comparisons, 147, 158, 181, 247,
      129, 136, 137, 141, 142, 146,                  261, 272, 274, 276–278
      175–178, 180, 190, Also see              — encompassing, 178, 180, 181, 192,
      Parsimonious encompassing                      194, 195
Subject Index                                                                       335

  — error, 15, 59–61, 178, 179, 191, 192,        — dynamics, 117–123, 132, 138, 145,
        196, 225, 246, 247, 248, 250–259,              146, 164
        261, 262, 265, 267, 268–272, 276,        — targeting, 2, 3, 6, 15, 18, 23, 186,
        279, 280                                       199, 200, 222, 223, 225, 226, 267,
  — error variance, 60, 267, 272                       268
  — failure, 2, 3, 16, 19, 28, 29, 31,              — regime, 23, 186
        152–155, 161, 245–248, 252, 259,            — rule, 228
        271                                      — uncertainty, 219, 272
Full information maximum likelihood            Information set, 19, 25–28, 33, 34, 48,
        (FIML), 32, 69, 70, 107, 108, 120,             57, 69, 120, 122, 123, 129, 140,
        121, 122, 139, 140, 141, 175, 177,             141, 142, 149, 161, 162, 163, 166,
        182, 217, 273                                  167, 172–175, 178, 180, 181, 182,
Functional form, 110, 138, 175, 187, 190               191, 215, 229, 265, 267, 269, 274
                                                 Causal content, 263, 267, 279
                                                 Rival models, 6, 26, 30, 31–32, 177, 197
General model, 28, 64, 118, 167, 168,
                                               Initial values, 70, 253, 257
      169, 178, 183, 191
                                               Innovation, 24–28, 48, 57, 58, 247, 269,
General unrestricted model (GUM), 64,
                                                       270, 272
      120, 121, 177–181, 191, 194, 195
                                               Instrument, 2, 12, 15, 50, 134, 135, 138,
General-to-speciﬁc, 28, 64, 166, 172, 183,
                                                       139, 142–146, 174, 175, 183, 184,
      188, 204
                                                       200, 201, 207, 218, 222, 227, 231,
Generalized method of moments
                                                       251
      (GMM), 132, 134–136, 143–145,
                                               Instrumental variables (IV), 57, 176,
      175, 183, 184
                                                       290, 292
Goodness-of-ﬁt, 133, 136, 177
                                               Intercept correction, 3, 60, 61, 222, 246,
                                                       248, 257, 259, 263, 279, 280
Haavelmo, 20–22, 24, 27, 29, 90                Interest rate, 2, 11–15, 18, 30, 145, 149,
  — distribution, 24, 29                               150, 151, 152, 153, 156, 158–160,
Heteroskedasticity, 64, 82, 138, 175, 187,             172, 184, 189, 200, 201, 202, 207,
      190, 205, Also see ARCH                          209–210, 213–214, 216–244, 251,
  — test, 205                                          260–265
Hodrick-Prescott ﬁlter, 86, 109, 110, 143,       — rule, 15, 225–244
      165, 170–172, 185, 196, 273              Invariance, 27, 30, 31, 34, 56, 214–216


Identiﬁcation, 1, 19, 21, 22, 69, 73,          Kalman ﬁlter, 54, 109, 149, 164
       79–82, 84, 86, 88, 106, 139, 142,       Klein model I, 21, 22
       202, 282
Identifying restrictions, 5, 23, 32, 81, 86,   Labour, 12, 74, 75, 130, 136, 158, 162,
       137, 142                                      188
Identities, 123, 217, 260                        — demand, 5, 7, 9, 72, 118, 260
Imperfect competition, 8, 36, 73, 74, 93,        — force, 162
       268                                       — market, 33, 45, 46, 53, 69, 71, 72,
Income policy, 63, 64, 69, 86, 107, 113,             74, 111, 131, 147, 181, 200, 216,
       160, 206                                      219
Incomplete competition model (ICM), 9,             — programmes, 40, 62, 63, 66, 75,
       73, 74, 79, 86, 87, 89, 93, 97, 102,          82, 202, 273
       103, 105, 108, 124, 129, 136–138,         — productivity, 36, 37, 39, 62, 72, 75,
       143, 147, 148, 161, 163, 166–169,             78, 82, 83, 111, 117, 143, 207, 251,
       176–177, 179–183, 188–197, 200,               276
       245, 249, 268, 270–278                    — supply, 9, 48, 72, 118
Inference, 3, 16, 21, 22, 29, 43, 164            — unions, 73
Inﬂation                                       Lag polynomial, 63, 288, 293, 296, 300
336                                                                  Subject Index

Layard-Nickell model, 9, 10, 73, 77–79,      — speciﬁcation, 4, 6, 12, 19, 23, 34,
       87, 96                                     129, 157, 216, 249, 267
Loss function, 15, 225, 227, 236–243        Modelling, 1–6, 8–10, 11, 14, 16, 17–22,
LSE methodology, 22–24, 26                        24, 27, 29, 32, 33, 35, 43, 56, 72,
Lucas                                             81, 90, 116, 118, 122, 123, 125,
  — critique, 8, 10, 23, 31, 47, 56–62,           138, 142, 144, 150, 161, 162, 201,
       281                                        202, 204, 209, 223, 249, 268, 271,
  — supply curve, 47, 57, 66                      280
                                             — strategy, 188, 201
                                            Moments, 60, 267
Macroeconometric, 3, 12, 18, 20, 22, 31,    Monetary
      248, 249                               — aggregates, 2, 147, 148, 151, 157
 — model, 1–7, 11, 14, 15, 16, 17,           — policy, 2, 6, 8, 9, 12, 15, 23, 74, 148,
      20–23, 32–33, 35, 47, 61, 74, 148,          165, 181, 186, 199, 200, 201, 202,
      161, 238, 249, 260, 279                     207, 216, 218, 221–223, 226,
Main-course, 37, 38, 40, 41, 43, 45, 47,          230–233, 235, 236, 240, 241, 251,
      48, 49, 52, 84, 85, 95, 100, 101,           267, 280
      119                                    — rule, 225
 — Phillips curve, 68, 82                   Money demand, 11, 147–161, 181, 182,
 — model, 35, 36, 39, 40, 41, 43, 47, 73,         183, 188, 189, 196, 197
      74, 76, 84, 100, 123                  Monte Carlo, 34, 164
Marginal model, 29, 30, 34, 58, 201, 207,   Moving average, 190, 211, 230, 277,
      209, 214, 215, 216, 223, 251                291–292
Market forces, 38                           Multiplier, 4, 15, 70, 97–101, 123, 246,
Market prices, 162                                248, 292–296, 298–301
Matrix, 25, 69, 118, 134, 215, 269, 293,
      294, 295, 300                         Natural rate
 — polynomial, 300                            — NAIRU, 7, 8, 51, 52, 162, 249
Maximum likelihood, see Full                  — dichotomy, 106
      information maximum likelihood          — doctrine, 10, 116
      (FIML)                                  — equilibrium, 7
Mean squared forecast error (MSFE),           — hypothesis, 7, 54
      265, 267, 269, 271                      — model, 90, 117, 124
Measurement error, 226                      New Keynesian Phillips curve, 9, 74,
Method of moments, see Generalized                 127–146, 148, 161, 163, 164,
      method of moments (GMM)                      174–176, 183, 226, 282
Microeconomic                               Nominal rigidity, 89, 90, 92, 98, 103, 118,
 — foundation, 1, 9                                124
 — theory, 46                               Non-accelerating inﬂation rate of
Minimum mean squared forecast error                unemployment (NAIRU), 7–10,
      (MMSFE), 59, 248                             46, 51–54, 56, 67, 68, 72, 74, 78,
Mis-speciﬁcation, 16, 64, 82, 120, 135,            89, 90, 93, 96, 97, 102–109, 116,
      137, 139, 140, 151, 153, 157, 160,           117, 122, 123, 162, 206, 249
      173, 175, 176, 183, 187, 188, 190,    Non-accelerating wage rate of
      197, 220, 246, 251, 262, 274, 279,           unemployment (NAWRU), 109,
      292,                                         110, 111, 114, 115, 116
      Also see Diagnostic test              Non-linear, 54, 55, 67, 81, 87, 137, 208,
Model                                              215, 221
 — formulation, 107, 148                    Non-nested, 136, 139
 — mis-speciﬁcation, 23, 151, 153, 220      Non-stationarity, 1, 10, 58
 — reduction, 173, 205                        Parameter non-constancy, 113, 153,
 — selection, 64                                   160, 161, 256, 279
Subject Index                                                                      337

  Structural breaks, 29, 30, 40, 53, 56,    Policy
      72, 250, 271, 279, 280, Also see        — analysis, 3, 16, 29, 32, 110, 214,
      regime shifts                                246, 247, 248, 267, 279, 280
  Unit roots, 54, 58, 61, 69, 70, 80, 94,     — instrument, 2, 12, 15, 200, 201, 207,
      99, 104, 127, 133, 134, 250                  218, 222, 231, 251
Normal distribution, 247, 250, 251            — maker, 2, 15, 34, 40, 46, 47, 53,
Normality                                          226, 280
  — test, 175, 187, 190, 205                  — variables, 12, 201
Normalisation, 132                          Polynomial, 10, 37, 63, 127, 130, 132,
Norwegian model of inﬂation, 9, 10, 39,            286, 288, 289, 293, 296, 297, 298,
      41, 43, 45, 51, 72, 89, 96 Also see          300, 301
      Scandinavian model of inﬂation        Prediction interval, 219, 220, 277
                                            Price homogeneity, 83, 91, 92, 115, 149
                                            Price-setting, 5, 8, 10, 19, 35, 52, 71–74,
Observational equivalence, 282
                                                   77–81, 83, 87, 90, 92, 94, 97–99,
Omitted variables, 34, 114, 138
                                                   102–104, 118, 131, 138, 223, 277
  — bias, 270, 271, 280
                                            Pricing policy, 90
  — test, 148, 189
                                            Product market, 8, 45, 131, 147, 188, 219
Open systems, 250, 260
                                            Purchasing power parity (PPP), 161,
Order of magnitude, 47, 173, 219                   202, 207, 219, 222, 230
Ordinary least squares (OLS), 47, 113,
      143, 242, 253
Orthogonal, 123, 258                        Random walk, 37, 53, 92, 109, 118, 133,
Output gap, 86, 107, 129, 130, 131, 134,           136, 145
      136–138, 162–166, 174, 200, 202,      Real time rules, 15, 230, 231, 235, 240
      206, 219, 221, 223, 226, 228, 268,    Reduced
      273                                     — form estimation, 109
Overﬁtting, 28, 120                           — rank regression, 22
Overidentifying                             Reduction, 24–27, 41, 64, 111, 113, 173,
  — instruments, 144                               202, 205, 221, 222, 223, 237, 242,
  — restrictions, 85, 86, 88, 134, 136,            244, 273, 276
      203                                   Regime shifts, 16, 19, 23, 27, 33, 53, 57,
                                                   59–61, 72, 246–248, 268
                                            Regression coeﬃcients, 42, 54, 57, 113,
Parameter                                          178, 192, 281, 282
  — constancy, 31, 64, 113, 158, 192, 275   Relative loss, 226, 227, 237, 240
  — instability, 153, 264                   Reliability
  — invariance, 214, 215                      Estimated coeﬃcients, 54, 57, 65,
  — of interest, 16, 26, 27, 58, 65, 77            113–115, 138, 143, 144, 145
  — uncertainty, 247, 258                   Research
Parsimonious encompassing, 176, 177,          — agenda, 21, 22
        190                                   — programme, 22, 27
Partial                                       — strategy, 28
  — adjustment, 150                                Also see Modelling Strategy
  — correlation, 57                         RESET, 152, 154, 158–160, 167, 168,
  — structure, 19, 24–29, 33, 34, 252              173, 176, 183, 187, 188, 190,
PcGets, 64, 121, 123, 183, 188                     Also see Diagnostic test
Phillips curve                              Residual
  Inverted —, 46, 66                          — autocorrelation, 64, 120, 135, 137,
  — model, 9, 51, 52, 56, 65, 74, 118,             138, 175, 187, 190
        136, 137, 249, 268                    — diagnostics, 82, 86
  US —, 47                                    — sum of squares, 64
  Vertical long-run —, 8, 50, 51, 133       Response surface, 15, 225, 227, 240–243
338                                                                      Subject Index

RIMINI, 6, 11–16, 29, 30, 249, 259–267,        Taylor rule, 228–231, 242
      279                                      Theory of reduction, 24
Root mean squared forecast error               Transmission mechanism, 2–4, 6, 11,
      (RMSFE), 15, 178, 180, 192, 193,                14–16, 200, 201, 216, 222, 223, 249
      265, 266                                 Trend
Root mean squared target error                   Common —, 23
      (RMSTE), 15, 227, 231–240, 243             Linear —, 250, 254, 256, 258
                                                 Stochastic —, 38
Savings rate, 29, 31
Scandinavian model of inﬂation, 9, 36,         Uncertainty, 46, 52, 54–56, 68, 178, 219,
        42, 43, 47, Also see Norwegian                220, 228, 246, 247, 258, 270, 272,
        model of inﬂation                             277, 278, 280
Seasonal, 211, 264                             Unconditional
Sequential                                      — expectation, 102
  — factorisation, 24                           — mean, 48, 60, 247
  — simpliﬁcation, 26                           — variance, 39, 227, 232, 237, 241
Serial correlation, see Autocorrelation        Unemployment
Signiﬁcance level, 187                          Equilibrium —, 48, 87, 105, 118
Simulation, 3, 15, 16, 220, 223–227,            Long run —, 74
        231–235, 241–243, 260–264               Natural rate of —, 7, 8, 19, 20, 46, 50,
Simultaneous equations, 21, 22, 58, 81,               51, 71
        199–224, 262, 273                       Open —, 75, 111, 113
Single equation, 5, 8, 19, 51, 52, 129,        Unit labour costs, 12, 136, 137, 162, 163,
        150, 162, 215, 261, 284                       166, 167, 169, 188
Solution, 49, 95–101, 118, 123, 129–133,       Unrestricted
        138, 139, 145, 203, 211, 282–290,       — reduced form, 107, 141, 275
        292, 299, 300                           — variables, 158
  Stationary —, 10, 51, 69, 79, 130, 131,
        133
                                               Vector autoregression (VAR), 10, 16, 18,
Speciﬁcation test, 135, 138, 184, 215
                                                      22, 23, 25, 60, 61, 82, 83, 86, 164,
Stability, 51, 52, 57, 58, 65, 66, 69, 70,
                                                      166, 250, 265, 270, 271, 272,
        71, 90, 92–105, 128, 158, 221, 268,
                                                      278, 281
        295, 297, 298
                                               Volatility, 165, 185, 227, 230, 231, 233,
Staggered contract model, 164
                                                      235, 237, 240, 243
Stationarity, 39, 40, 50, 51, 58, 118, 133
Steady state, 25, 42, 46, 49, 50–52, 69,
        74, 78, 92–105, 118, 130, 161–163,     Wage
        202, 203, 253–257, 295–299              — bargaining, 40, 50, 73–88, 90, 91,
Stochastic                                           96, 97, 98, 118, 142
  — equation, 11, 17, 21, 260                   — curve, 8, 10, 11, 74, 77, 78, 79, 80,
  — process, 37                                      85, 86, 91, 93, 94, 97–103, 106,
  — variable, 118                                    107, 110, 114, 119, 120, 122, 268,
Structural                                           269, 272, 280
  — change, 16, 69, 111, 246–248                — formation, 8, 10, 35, 36, 51, 76, 81,
  — unemployment, 111                                90, 101, 105, 106, 111, 268, 272,
Sub-system, 6, 14, 19, 29, 34, 87, 123,              273
        204, 221                                — inﬂation, 46, 49, 109, 134, 219, 220
Supply-side, 7, 9, 12, 20, 33, 53, 54, 77,     Wage–price dynamics, 11, 118
        78, 79, 100, 105, 108, 109, 119, 249   Wald statistics, 54, 55
  — determined NAIRU, 9, 102, 105              White noise, 27, 91, 214, 247, 261, 292



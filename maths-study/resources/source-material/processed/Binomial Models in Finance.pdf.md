---
normalized_id: shared-pdf-reference-binomial-models-in-finance
exam_code: SHARED
material_scope: binomial models in finance.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Binomial Models in Finance.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-binomial-models-in-finance

Springer Finance



Editorial Board
M. Avellaneda
G. Barone-Adesi
M. Broadie
M.H.A. Davis
E. Derman
C. Klüppelberg
E. Kopp
W. Schachermayer
Springer Finance

Springer Finance is a programme of books aimed at students,
academics and practitioners working on increasingly technical
approaches to the analysis of financial markets. It aims to cover a
variety of topics, not only mathematical finance but foreign
exchanges, term structure, risk management, portfolio theory, equity
derivatives, and financial economics.

M. Ammann, Credit Risk Valuation: Methods, Models, and Application (2001)
K. Back, A Course in Derivative Securities: Introduction to Theory and Computation
(2005)
E. Barucci, Financial Markets Theory. Equilibrium, Efficiency and Information (2003)
T.R. Bielecki and M. Rutkowski, Credit Risk: Modeling, Valuation and Hedging (2002)
N.H. Bingham and R. Kiesel, Risk-Neutral Valuation: Pricing and Hedging of Financial
Derivatives (1998, 2nd ed. 2004)
D. Brigo and F. Mercurio, Interest Rate Models: Theory and Practice (2001)
R. Buff, Uncertain Volatility Models-Theory and Application (2002)
R.A. Dana and M. Jeanblanc, Financial Markets in Continuous Time (2002)
G. Deboeck and T. Kohonen (Editors), Visual Explorations in Finance with Self-
Organizing Maps (1998)
R.J. Elliott and P.E. Kopp, Mathematics of Financial Markets (1999, 2nd ed. 2005)
H. Geman, D. Madan, S. R. Pliska and T. Vorst (Editors), Mathematical Finance-
Bachelier Congress 2000 (2001)
M. Gundlach, F. Lehrbass (Editors), CreditRisk+ in the Banking Industry (2004)
B.P. Kellerhals, Asset Pricing (2004)
Y.-K. Kwok, Mathematical Models of Financial Derivatives (1998)
M. Külpmann, Irrational Exuberance Reconsidered (2004)
P. Malliavin and A. Thalmaier, Stochastic Calculus of Variations in Mathematical
Finance (2005)
A. Meucci, Risk and Asset Allocation (2005)
A. Pelsser, Efficient Methods for Valuing Interest Rate Derivatives (2000)
J.-L. Prigent, Weak Convergence of Financial Markets (2003)
B. Schmid, Credit Risk Pricing Models (2004)
S.E. Shreve, Stochastic Calculus for Finance I (2004)
S.E. Shreve, Stochastic Calculus for Finance II (2004)
M. Yor, Exponential Functionals of Brownian Motion and Related Processes (2001)
R. Zagst, Interest-Rate Management (2002)
Y.-L. Zhu, X. Wu, I.-L. Chern, Derivative Securities and Difference Methods (2004)
A. Ziegler, Incomplete Information and Heterogeneous Beliefs in Continuous-time
Finance (2003)
A. Ziegler, A Game Theory Analysis of Options (2004)
John van der Hoek and Robert J. Elliott




Binomial Models
in Finance
With 3 Figures and 25 Tables
John van der Hoek                                   Robert J. Elliott
Discipline of Applied Mathematics                   Haskayne School of Business
University of Adelaide                              Scurfield Hall
Adelaide S.A. 5005 Australia                        University of Calgary
e-mail: john.vanderhoek@adelaide.edu.au             2500 University Drive NW
                                                    Calgary, Alberta, Canada T2N 1N4
                                                    e-mail:relliott@ucalgary.ca




Mathematics Subject Classification (2000): 91B28, 60H30

Library of Congress Control Number: 2005934996

ISBN-10 0-387-25898-1
ISBN-13 978-0-387-25898-0

Printed on acid-free paper.

© 2006 Springer Science+Business Media, Inc.
All rights reserved. This work may not be translated or copied in whole or in part without the written
permission of the publisher (Springer Science+Business Media, Inc., 233 Spring Street, New York, NY
10013, USA), except for brief excerpts in connection with reviews or scholarly analysis. Use in con-
nection with any form of information storage and retrieval, electronic adaptation, computer software,
or by similar or dissimilar methodology now known or hereafter developed is forbidden.
The use in this publication of trade names, trademarks, service marks, and similar terms, even if they
are not identified as such, is not to be taken as an expression of opinion as to whether or not they are
subject to proprietary rights.

Printed in the United States of America.      (MVY)

9 8 7 6 5 4 3 2 1

springeronline.com
Acknowledgements




The authors wish to thank the Social Sciences and Humanities Research Coun-
cil of Canada for its support. Robert Elliott gratefully thanks RBC Finan-
cial Group for supporting his professorship. John van der Hoek thanks the
Haskayne Business School for their hospitality during visits to the Univer-
sity of Calgary to discuss the contents of this book. Similarly Robert Elliott
wishes to thank the University of Adelaide. Both authors wish to thank var-
ious students who have provided comments and feedback when this material
was taught in Adelaide, Calgary and St John’s. The authors’ thanks are also
due to Andrew Royal for help with typing and formatting.
Preface




This book describes the modelling of prices of ﬁnancial assets in a simple dis-
crete time, discrete state, binomial framework. By avoiding the mathematical
technicalities of continuous time ﬁnance we hope we have made the material
accessible to a wide audience. Some of the developments and formulae appear
here for the ﬁrst time in book form.
We hope our book will appeal to various audiences. These include MBA stu-
dents, upper level undergraduate students, beginning doctoral students, quan-
titative analysts at a basic level and senior executives who seek material on
new developments in ﬁnance at an accessible level.
The basic building block in our book is the one-step binomial model where
a known price today can take one of two possible values at a future time,
which might, for example, be tomorrow, or next month, or next year. In
this simple situation “risk neutral pricing” can be deﬁned and the model can
be applied to price forward contracts, exchange rate contracts and interest
rate derivatives. In a few places we discuss multinomial models to explain
the notions of incomplete markets and how pricing can be viewed in such a
context, where unique prices are no longer available.
The simple one-period framework can then be extended to multi-period mod-
els. The Cox-Ross-Rubinstein approximation to the Black Scholes option pric-
ing formula is an immediate consequence. American, barrier and exotic op-
tions can all be discussed and priced using binomial models. More precise
modelling issues such as implied volatility trees and implied binomial trees
are treated, as well as interest rate models like those due to Ho and Lee; and
Black, Derman and Toy.
The book closes with a novel discussion of real options. In that chapter we
present some new ideas for pricing options on non-tradeable assets where
the standard methods from ﬁnancial options no longer apply. These methods
provide an integration of ﬁnancial and actuarial pricing techniques.
VIII   Preface

Practical applications of the ideas and problems can be implemented using
a simple spreadsheet program such as Excel. Many practical suggestions for
implementing and calibrating the models discussed appear here for the ﬁrst
time in book form.
Contents




1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   1
    1.1 No Arbitrage and Its Consequences . . . . . . . . . . . . . . . . . . . . . . . .                        1
    1.2 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11

2   The Binomial Model for Stock Options . . . . . . . . . . . . . . . . . . . . 13
    2.1 The Basic Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
    2.2 Why Is π Called a Risk Neutral Probability? . . . . . . . . . . . . . . . . 21
    2.3 More on Arbitrage . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
    2.4 The Model of Cox-Ross-Rubinstein . . . . . . . . . . . . . . . . . . . . . . . . 25
    2.5 Call-Put Parity Formula . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27
    2.6 Non Arbitrage Inequalities . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
    2.7 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34

3   The Binomial Model for Other Contracts . . . . . . . . . . . . . . . . . . 41
    3.1 Forward Contracts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41
    3.2 Contingent Premium Options . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
    3.3 Exchange Rates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45
    3.4 Interest Rate Derivatives . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55
    3.5 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61

4   Multiperiod Binomial Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
    4.1 The Labelling of the Nodes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
    4.2 The Labelling of the Processes . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65
    4.3 Generalized Quantities . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66
X       Contents

    4.4 Generalized Backward Induction Pricing Formula . . . . . . . . . . . . 67
    4.5 Pricing European Style Contingent Claims . . . . . . . . . . . . . . . . . . 68
    4.6 The CRR Multiperiod Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
    4.7 Jamshidian’s Forward Induction Formula . . . . . . . . . . . . . . . . . . . 69
    4.8 Application to CRR Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71
    4.9 The CRR Option Pricing Formula . . . . . . . . . . . . . . . . . . . . . . . . . 73
    4.10 Discussion of the CRR Formula . . . . . . . . . . . . . . . . . . . . . . . . . . . 75
    4.11 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78

5   Hedging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
    5.1 Hedging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
    5.2 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88

6   Forward and Futures Contracts . . . . . . . . . . . . . . . . . . . . . . . . . . . . 89
    6.1 The Forward Contract . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 89
    6.2 The Futures Contract . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 90
    6.3 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 96

7   American and Exotic Option Pricing . . . . . . . . . . . . . . . . . . . . . . 97
    7.1 American Style Options . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97
    7.2 Barrier Options . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 99
    7.3 Examples of the Application of Barrier Options . . . . . . . . . . . . . 102
    7.4 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 106

8   Path-Dependent Options . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109
    8.1 Notation for Non-Recombing Trees . . . . . . . . . . . . . . . . . . . . . . . . 109
    8.2 Asian Options . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110
    8.3 Floating Strike Options . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112
    8.4 Lookback Options . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113
    8.5 More on Average Rate Options . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114
    8.6 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118
                                                                                             Contents             XI

9     The Greeks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
      9.1 The Delta (∆) of an Option . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121
      9.2 The Gamma (Γ ) of an Option . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123
      9.3 The Theta (Θ) of an Option . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 124
      9.4 The Vega (κ) of an Option . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125
      9.5 The Rho (ρ) of an Option . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125
      9.6 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 126

10 Dividends . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 127
      10.1 Some Basic Results about Forwards . . . . . . . . . . . . . . . . . . . . . . . . 128
      10.2 Dividends as Percentage of Spot Price . . . . . . . . . . . . . . . . . . . . . . 129
      10.3 Binomial Trees with Known Dollar Dividends . . . . . . . . . . . . . . . 132
      10.4 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 134

11 Implied Volatility Trees . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
      11.1 The Recursive Calculation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 136
      11.2 The Inputs V put and V call . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138
      11.3 A Simple Smile Example . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141
      11.4 In General . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144
      11.5 The Barle and Cakici Approach . . . . . . . . . . . . . . . . . . . . . . . . . . . 145
      11.6 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 149

12 Implied Binomial Trees . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153
      12.1 The Inputs . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153
      12.2 Time T Risk-Neutral Probabilities . . . . . . . . . . . . . . . . . . . . . . . . . 154
      12.3 Constructing the Binomial Tree . . . . . . . . . . . . . . . . . . . . . . . . . . . 155
      12.4 A Basic Theorem and Applications . . . . . . . . . . . . . . . . . . . . . . . . 158
      12.5 Choosing Time T Data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 161
      12.6 Some Proofs and Discussion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 164
      12.7 Jackwerth’s Extension . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 168
      12.8 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 170
XII       Contents

13 Interest Rate Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 171
      13.1 P (0, T ) from Treasury Data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 172
      13.2 P (0, T ) from Bank Data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 174
      13.3 The Ho and Lee Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 184
      13.4 The Pedersen, Shiu and Thorlacius Model . . . . . . . . . . . . . . . . . . 189
      13.5 The Morgan and Neave Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . 191
      13.6 The Black, Derman and Toy Model . . . . . . . . . . . . . . . . . . . . . . . . 193
      13.7 Defaultable Bonds . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 205
      13.8 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 205

14 Real Options . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 209
      14.1 Examples . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 210
      14.2 Options on Non-Tradeable Assets . . . . . . . . . . . . . . . . . . . . . . . . . . 214
      14.3 Correlation with Tradeable Assets . . . . . . . . . . . . . . . . . . . . . . . . . 229
      14.4 Approximate Methods . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 233
      14.5 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 235

A     The Binomial Distribution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 237
      A.1 Bernoulli Random Variables . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 237
      A.2 Bernoulli Trials . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 239
      A.3 Binomial Distribution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 239
      A.4 Central Limit Theorem (CLT) . . . . . . . . . . . . . . . . . . . . . . . . . . . . 243
      A.5 Berry-Esséen Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 245
      A.6 Complementary Binomials and Normals . . . . . . . . . . . . . . . . . . . . 246
      A.7 CRR and the Black and Scholes Formula . . . . . . . . . . . . . . . . . . . 247

B     An Application of Linear Programming . . . . . . . . . . . . . . . . . . . . 249
      B.1 Incomplete Markets . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 250
      B.2 Solutions to Incomplete Markets . . . . . . . . . . . . . . . . . . . . . . . . . . . 251
      B.3 The Duality Theorem of Linear Programming . . . . . . . . . . . . . . . 253
      B.4 The First Fundamental Theorem of Finance . . . . . . . . . . . . . . . . 257
      B.5 The Duality Theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 261
      B.6 The Second Fundamental Theorem of Finance . . . . . . . . . . . . . . 264
      B.7 Transaction Costs . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 266
                                                                                                   Contents           XIII

C      Volatility Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 269
       C.1 Historical Volatility Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 270
       C.2 Implied Volatility Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 272
       C.3 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 278

D      Existence of a Solution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 279
       D.1 Farkas’ Lemma . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 279
       D.2 An Application to the Problem . . . . . . . . . . . . . . . . . . . . . . . . . . . . 281

E      Some Generalizations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 285
       E.1 Preliminary Observations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 285
       E.2 Solution to System in van der Hoek’s Method . . . . . . . . . . . . . . . 287
       E.3 Exercises . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 288

F      Yield Curves and Splines . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 289
       F.1 An Alternative representation of Function (F.1) . . . . . . . . . . . . . 290
       F.2 Imposing Smoothness . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 291
       F.3 Unknown Coeﬃcients . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 291
       F.4 Observations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 292
       F.5 Determination of Unknown Coeﬃcients . . . . . . . . . . . . . . . . . . . . 293
       F.6 Forward Interest Rates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 295
       F.7 Yield Curve . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 296
       F.8 Other Issues . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 296

References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 297

Index . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 301
1

Introduction




1.1 No Arbitrage and Its Consequences

The prices we shall model will include prices of underlying assets and prices
of derivative assets (sometimes called contingent claims).
Underlying assets include commodities, (oil, gas, gold, wheat,...), stocks,
currencies, bonds and so on. Derivative assets are ﬁnancial investments
(or contracts) whose prices depend on other underlying assets.
Given a model for the underlying asset prices we shall deduce prices for deriva-
tive assets. We shall model prices in various markets, equities (stocks), for-
eign exchange (FX). More advanced topics we shall discuss include incomplete
markets, transaction costs, credit risk, default risk and real options.
As Newtonian mechanics is based on axioms known as Newton’s laws of mo-
tion, derivative pricing is usually based on the axiom that there is no ar-
bitrage opportunity, or as it is sometimes colloquially expressed, no free
lunch.
There is only one current state of the world, which is known to us. However,
a future state at time T is unknown; it may be one of many possible states.
An arbitrage opportunity is a little more complicated than saying we can start
now with nothing and end up with a positive amount. This would, presumably,
mean we end up with a positive amount in all possible states at the future
time. In Chapter 2, we shall meet two forms of arbitrage opportunities. For
the moment we shall discuss one of these which we shall later refer to as a
“type two arbitrage opportunity”.

Deﬁnition 1.1 (Arbitrage Opportunity). More precisely, an arbitrage op-
portunity is an asset (or a portfolio of assets) whose value today is zero and
whose value in all possible states at the future time is never negative, but in
some state at the future time the asset has a strictly positive value.
2      1 Introduction

In notation, suppose W (0) is the value of an asset (or portfolio) today and
W (T, ω) is its value at the future time T when the state of the world is ω.
Then an arbitrage opportunity is some ﬁnancial asset W such that


                               W (0) = 0
                            W (T, ω) ≥ 0 for all states ω
                        and W (T, ω) > 0 for some state ω

Our fundamental axiom is then:

Axiom 1 There are no such arbitrage opportunities.

A consequence of this axiom is the following basic result:

Theorem 1.2 (Law of One Price). Suppose there are two assets A and B
with prices at time 0 P0 (A) ≥ 0, P0 (B) ≥ 0. Supposing at some time T ≥ 0
the prices of A and B are equal in all states of the world:

                                PT (A) = PT (B).

Then
                                P0 (A) = P0 (B).

Proof. We shall show that otherwise there exists an arbitrage. Without loss of
generality, suppose that P0 (A) > P0 (B). We construct the following portfolio
at time 0. Starting with $0:

                We borrow and sell A. This realizes P0 (A)
                We buy B; this costs               −P0 (B)

So this gives a positive amount P0 (A) − P0 (B), which we can keep, or even
invest. Note this strategy requires no initial investment. At time T we clear
our books by:

                Buying and returning A. This costs −PT (A)
                Selling B, giving                   PT (B)
                Net cost is                          $0

However, we still have the positive amount P0 (A) − P0 (B), and so we have
exhibited an arbitrage opportunity. Our axiom rules these out, so we must
have P0 (A) = P0 (B).                                                   2
                                 1.1 No Arbitrage and Its Consequences       3

In this proof we have assumed there are no transaction costs in carrying out
the trades required, and that the assets involved can be bought and sold at
any time at will. The imposition and relaxing of such assumptions are part of
ﬁnancial modelling.
We shall use the one price result to determine a rational price for derivative
assets.
As our ﬁrst example of a derivative contract, let us introduce a forward
contract. A forward contract is an agreement (a contract) to buy or sell a
speciﬁed quantity of some underlying asset at a speciﬁed price, with delivery
at a speciﬁed time and place.
The buyer in any contract is said to take the long position. The seller in any
contract is said to take the short position.
The speciﬁed delivery price is agreed upon by the two parties at the time
the contract is made. It is such that the (initial) cost to both parties in the
contract is 0.
Most banks have a forward desk. It will give quotes on, say, the exchange
rate between the Canadian dollar and U.S. dollar.

Example 1.3. U.S.$/C$

                              SPOT      0.7540
                        60 DAY FORWARD 0.7510
                        90 DAY FORWARD 0.7495
                        180 DAY FORWARD 0.7485

Forward contracts can be used for hedging and speculation.
Hedging
Suppose a U.S. company knows it must pay a C$1 million in 90 days’ time.
At no cost it can enter into a forward contract with the bank to pay

                                U.S.$749, 500.

This amount is agreed upon today and ﬁxed. Similarly, if the U.S. company
knows it will receive C$1 million in 90 days, it can enter into a short forward
contract with the bank to sell C$1 million in 90 days for

                                U.S.$749, 500.

Speculation
An investor who thinks the C$ will increase against the US.$ would take a
long position in the forward contract agreeing to buy C$1 million for
4      1 Introduction

                                 U.S.$749, 500

in 90 days’ time.
Suppose the U.S.$/C$ exchange rate in 90 days is, in fact, 0.7595. Then the
investor makes a proﬁt of

                     106 × (0.7595 − 0.7495) = U.S.$10, 000.

Of course, forward contracts are binding and if, in fact, the U.S.$/C$ ex-
change rate in 90 days is 0.7395 then the investor must still buy the C$1
million for U.S.$749, 500.
However, the market price of C$1 million is only U.S.$739, 500, and so the
investor realizes a loss of U.S.$10, 000.

Let us write S0 for the price of the underlying asset today and ST for the
price of the asset at time T . Write K for the agreed price. The proﬁt for a
long position is then ST − K, a diagram of which is shown in Figure 1.1.




                Proﬁt



                     0
                                       K                          ST

                    Loss


                    −K




                Fig. 1.1. The payoﬀ of a long forward contract.



The proﬁt for a short position in a forward contract is K − ST , a diagram of
which is shown in Figure 1.2.
Either the long or short party will lose on a forward contract. This problem
is managed by futures contracts in which the diﬀerence between the agreed
                                  1.1 No Arbitrage and Its Consequences       5


                  K


                Proﬁt



                   0
                                      K                            ST

                 Loss




                Fig. 1.2. The payoﬀ of a short forward contract.



price and the spot price is adjusted daily. Futures contracts will be discussed
in a later chapter.
In contrast to forward contracts which are binding, we wish to introduce
options.

Deﬁnition 1.4 (Options). A call option is the right, but not the obligation,
to buy some asset for a speciﬁed price on or before a certain date.
A put option is the right, but not the obligation, to sell some asset for a
speciﬁed price on or before a certain date.

Remark 1.5. Unlike the forward contract, an option is not binding. The holder
is not obliged to buy or sell. This, of course, gives rise to the term ‘option’.
Call and put options can be European or American. This has nothing to do
with the geographical location. European options can be exercised only on a
certain date, the exercise date. American options can be exercised any time
between now and a future date T (the expiration time). T may be +∞, in
which case the option is called perpetual.

To be speciﬁc we shall consider how call and put options are reported in the
ﬁnancial press.

Example 1.6. Consider Table 1.1 for Listed Option Quotations in the Wall
Street Journal of July 23, 2003. These are examples of options written on
6      1 Introduction

                     Table 1.1. Listed Option Quotations
                                  -CALL-     -PUT-
               OPTION STRIKE EXP VOL LAST VOL LAST
                 AMR 11.0    Aug 3235 0.60 422 0.90
               AOL TW 15.0   Aug 8152 2.00 494 0.20
                  16.85 16.0 Aug 3317 1.20 721 0.45
                  16.85 17.5 Aug 6580 0.45 1390 1.20



common stock or shares. Consider the table and the entries for AOL TW
(America Online/Time Warner). The entry of $16.85 under AOL TW gives
the closing price on Tuesday, July 22, 2003, of AOL TW stock. Note that for
the ﬁrst entry AMR (American Airlines), only one option and put was traded.
The AMR entry is given on one line and its closing price of $10.70 is omitted.
The second column gives the strike, or exercise, price of the option. The ﬁrst
option for AOL has a strike price of $15, the line below refers to a strike of
$16 and the third line for AOL refers to a strike of $17.50.
The third column refers to the expiry month. Stock options expire on the
third Friday of their expiry month.
Of the last four columns, the ﬁrst two refer to call options and the ﬁnal two
to put options. The VOL entry gives the number of CALL or PUT options
sold. The LAST entry gives the closing price of the option. For example, the
closing price of an AOL August call with strike price $15 was $2; the closing
price of an AOL August put with strike price $15 was $0.20.

Of course, the price of a stock may vary throughout a day. What is taken as
the representative price of a stock for a particular day is a matter of choice.
This book will not deal with intraday modelling of price movements.
However, Reuter Screens, and the like, present data on prices on an almost
continuous basis.
We shall shortly write down models for the evolution of stock prices. S will
be the underlying process for the options here. S will just be called the
underlying.
To be deﬁnite let us write

                              S = {S(t) | t ≥ 0}

for the price process of this stock (the stock price process).
                                  1.1 No Arbitrage and Its Consequences       7

Call Options
In order to specify a call option contract, we need three things:

 1. an expiry date, T (also called the maturity date);
 2. a strike price, K (or also called the exercise price);
 3. a style (European, American or even Bermudan, etc).

Let us discuss the AUG 2003 AOL Call options, for example the AOL/AUG/
15.00/CALL. This means that the strike price is $15.00. We will write K =
$15.00. The expiry date is August 2003. As we are dealing with an exchange
traded option (ETO) on the New York Stock Exchange (NYSE), this
will mean: 10:59 pm Eastern Time on the Saturday following the third Friday
of the expiration month. An investor holding the option has until 4:30 pm on
that Friday to instruct his or her broker to exercise the option. The broker
then has until 10:59 pm the following day to complete the paperwork eﬀecting
that transaction. In 2003, the August contract expired on August 15, the third
Friday of August.
Time is measured in years or fractions of years. In 2003, there were 24 calendar
                                                                  24
days from July 22 to expiry, (22 July to 15 August); this is 365      = 0.06575
years. This is the way we shall calculate time. Another system is to use trading
days, of which there are about 250 in a year. As there are 18 trading days from
                                            18
22 July until 15 August, we would get 250      = 0.072 years. There is another
convention that there are 360 days in a year. This is common in the United
States.
The holder of a call option owns a contract which gives him/her
the (legal) right (but not the obligation) to buy the stock at any
time up to and including the expiry date for the strike (or exercise)
price.
This is an example of an American (style) call option. An American style
option is one that can be exercised at any time up to and including the expiry
date. On the other hand, as we have noted, a European style option is one
that can be exercised only on the expiry date. Mid-Atlantic or Bermuda
style options are ones that are halfway between American and European
style options. For example we could require that the option only be exercised
on a Thursday.
Usually, one enters a call option contract by the payment of a fee, which is
called the option price, the call price or the call premium. However, it is
possible to vary the style of payment—pay along the way until expiry, pay at
expiry and so on. It is one of the goals of this book to determine the rational
price, or premium, for a call option. This leads us to the area of option
pricing.
If you are long in an American call (that is, you own the call option), then
at any time prior to the expiry date, you can do one of three things:
8      1 Introduction

 1. sell the call to someone else;
 2. exercise the call option—that is, purchase the underlying stock for the
    agreed strike price K;
 3. do nothing.

If you own a European style call option, only choices 1. and 3. are possible as
the option can be exercised only at the expiry date.
In this book we shall provide option pricing formulas, but the market also
provides option prices, (determined in the exchange by an auction process).
Hopefully, the theoretical and the market valuations will agree, at least to a
good approximation.
Some Basic Notions
For most ﬁnancial assets there is a selling (asking) price and a buying (bid)
price. Why is the selling (asking) price always greater than the buying (bid)
price? If the bid price were greater than or equal than the asking price, the
market would clear all mutually desirable trades until the asking price were
strictly greater than the bid price.
We shall usually make the simplifying assumption that there is one price for
both sellers and buyers at any one time. This also means that we shall ignore
transaction costs. This is one of the reasons for bid-ask spreads. At a later
stage we shall address the issue of bid-ask spreads.
What is the value of the call option at expiry? Let T be the expiry time. Then
for 0 ≤ t ≤ T , let C(t) be the value of the call option at time t. We claim that

                  C(T ) = max{0, S(T ) − K} = (S(T ) − K)+                  (1.1)

where for any number a, a+ = max{0, a}. To see this we can consider three
cases: (1) S(T ) > K; (2) S(T ) = K; (3) S(T ) < K. In the ﬁrst situation,
we could exercise the option, purchasing the stock for $K and then selling
the stock at the market price $S(T ) to realize a proﬁt of $(S(T ) − K). This,
of course, assumes no transaction costs that would reduce this proﬁt. In the
second and third cases we would not exercise the option, but let it lapse, as
it would be cheaper to buy the stock at the market price.
Let us also note that for an American style call option

                           CA (t) ≥ (S(t) − K)+ ≥ 0                         (1.2)

where we write CA (t) for the American option price.
The reason for (1.2) is clear: If we exercise the option and S(t) > K then the
exercise value is (S(t) − K)+ ; if we do not exercise, this may be because the
value of holding the option is greater than the present exercise value.
                                 1.1 No Arbitrage and Its Consequences       9

The value C(T ) at expiry is uncertain when viewed from the present, because
S(T ) is uncertain. However, we shall determine C(0) and C(t) for 0 ≤ t ≤ T .
A call option is an example of a derivative (or derived asset) because
its value is dependent on (is contingent on) the value of an underlying asset
(or price process) in this case a stock price process S. So derivative equals
derived asset equals contingent claim. An option is called an asset as it
is something that can be bought and sold.
Why is there a market for call options? This is an important question as
there may be no potential buyers and sellers. This question, of course, applies
to any asset. For this discussion let us focus on the simpler European call
option.
Let us ﬁrst note that there are basically three types of players in ﬁnancial
markets:

1. speculators (or risk takers, investors, and so on);
2. hedgers (or risk avertors);
3. arbitrageurs (looking for mispriced assets).

For the meantime let us focus on 1. and 2. When we have discussed derivative
pricing, we shall discuss possible strategies (arbitrage opportunities) when
mispricing occurs. The existence of arbitrageurs keeps prices at fair values.
Later on we shall consider other ﬁnancial products from the point of view of
1., 2. or 3.
In each of 1. and 2., the market players will take a view about the future.
For example, 1. may assume that prices of a stock will go up. Such a player
is said to be bullish (as opposed to being bearish). Once a view has been
taken, then a ﬁnancial product can be used to proﬁt from this view if it
is realized.
Buying a call option (taking a call, being long in a call). Suppose S
refers to AOL stock. Here are two strategies that give rise to the purchase of
call options.

1. Leverage is a speculator’s strategy. At present (22 July 2003, say), S(0) =
   $16.85, and we suppose that on the 15 August 2003 (the expiry date of
   the AUG2003 option), that S(T ) = $18.00. Suppose that you have $1685
   at your disposal, a convenient amount.
   You could buy 100 shares @ $16.85, and if your view is realized on 15
   August 2003, you could make a proﬁt of 100 × ($18.00 − $16.85) = $115
                             115
   which is a 6.82% proﬁt ( 1685 × 100 = 6.82%). Suppose now that the view
   was not realized and that the stock price fell to $15.00. Then you would
   suﬀer a loss of $185 = 100 × ($16.85 − $15.00) or 10.98% in percentage
   terms.
10      1 Introduction

     An alternative to buying stock is to obtain leverage using options. Instead,
     consider buying 1000 AOL/AUG/16.00/CALL options at $1.20 each (a
     convenient approximation). We shall ignore transaction costs, and the
     question of whether there are 1000 options available to be purchased. If the
     view is realized on 15 August 2003, then you have $1000×(18.00−16.00) =
     $2000, which gives a proﬁt of $(2000 − 1200) = $800 (equal to 66.67% in
     percentage terms). If your view was not realized and the stock price fell to
     $15.00, then you would have $0, and so you have a 100% loss. Therefore,
     options magnify or leverage proﬁts if views are realized, but on the
     downside you can lose all you put down (but no more).
     With some exotic options it is possible to obtain higher leverage. How-
     ever, we would have to purchase these products over the counter (OTC)
     rather than through an exchange. Note that speculators are using out of
     the money call options to obtain leverage. Also, note that on 22 July
     2003 in-the-money calls with K = 15.00 or 16.00 had volumes 8152 and
     3317 respectively; out-of-the-money calls with K = 17.50 had a volume of
     6580.
2. Hedging is a risk avertor strategy. A risk avertor will buy options now to
   lock in a ﬁxed future price, at which he has the option to buy a share, no
   matter what actually happens to the stock price. Suppose that on 22 July
   2003 you decided that you wished to buy AOL shares on 15 August 2003
   for $17.00, but you are worried that the share price may rise to $18.00. You
   could then buy AOL/AUG/17.00/CALL options. If the fear were realized,
   you would only need to pay $17.00 for each share. Of course, if the share
   price fell to $15.00, then you would not exercise the option but buy the
   shares in the market for this lower price. The payment of the premiums
   for these call options can be regarded as an insurance payment against
   the possible rise in price of the stock price. This strategy usually uses
   ATM call options, that is, at the money call options with K = S(0).

Selling a call option (writing a call, being short in a call). “Selling
calls” is also called “writing calls” as the seller of a call option writes the
contract. The opposite of a writer is a taker (the buyer). There are several
strategies that give rise to writing call options.

1. Income generation. If you own shares, you can write call options on
   these stocks to generate extra income from holding the shares by way of
   collecting premiums. It is like an extra dividend on the shares. If you do
   this, you must be prepared to sell the shares, or be able to sell the
   shares, if the call options are exercised against you. Most call writers who
   adopt this strategy actually hope that the calls will not be exercised.
   In order to have some guarantee of this the calls should be out of the
   money call options. This strategy is often called the buy and write
   strategy, and is widely used by investment houses.
                                                          1.2 Exercises     11

   This strategy uses the covered call, whereas if you write call options on
   stock that you do not own, you are said to be writing a naked call. This
   latter strategy is used by some speculators. However, it is dangerous in
   that if the call is exercised, the writer of the call will have to buy the
   stock at market price and deliver it at a possibly lower price, so incurring
   a possible loss.
2. Insurance. If you have the view that share prices will fall, you may be
   interested in selling call options to generate income that will compensate
   you for the falling share prices. However, there is only limited protection
   from this strategy. You would use out-of-the-money call options and be
   protected from a loss down to S(0) − C(0), which could be rather limited.
   Of course, here put options are a more natural instrument for insurance.
   Buying a put with a strike of $K ensures one can always sell the under-
   lying for $K. This provides a minimum value for one’s holdings in the
   underlying.

In Summary
Let us note in summary that both buyers and sellers of calls are mainly
interested in out-of-the-money calls. This is just as well, for if the buyers
wanted in-the-money call options and the sellers only provided out-of-the-
money call options, there would not be a market!
We could have carried out a similar discussion for put options. These are
contracts structured just as calls, but the holder of a put has the right but
not the obligation to sell the stock at the strike price at (or before) the
expiry date. Of course, there are European style puts, American style puts,
and Bermudan puts, and so on.

Remark 1.7. Because most traded options are of American style, and because
many of these are out-of-the-money options, they are rarely exercised early.



1.2 Exercises

Exercise 1.8. We have provided motivation for the buying and selling of call
options and we have noted that, in general, the needs of buyers and sellers
can be matched. Carry out a similar discussion for put options.
2

The Binomial Model for Stock Options




2.1 The Basic Model

We now discuss a simple one-step binomial model in which we can de-
termine the rational price today for a call option. In this model we have two
times, which we will call t = 0 and t = 1 for convenience. The time t = 0
denotes the present time and t = 1 denotes some future time. Viewed from
t = 0, there are two states of the world at t = 1. For convenience they will
be called the upstate (written ↑) and the downstate (written ↓). There is
no special meaning to be attached to these states. It does not necessarily
mean that a stock price has a low price in the downstate and a higher value
in the upstate, although this will sometimes be the case. The term binomial
is used because there are two states at t = 1.
In our model there are two tradeable assets; eventually there will be other
derived assets:

 1. a risky asset (e.g. a stock);
 2. a riskless asset.

By a tradeable asset we shall mean an asset that can be bought or sold on
demand at any time in any quantity. They are the typical assets used in the
construction of portfolios. In Chapter 14 on real options we shall note some
problems with this concept.
We assume for each asset that its buying and selling prices are equal.
The risky asset.
At t = 0, the risky asset S will have the known value S(0) (often non-negative).
At t = 1, the risky asset has two distinct possible values (hence its value is
uncertain or risky), which we will call S(1, ↑) and S(1, ↓). We simply require
14       2 The Binomial Model for Stock Options

that S(1, ↑) = S(1, ↓), but without loss of generality (wlog), we may assume
that S(1, ↑) > S(1, ↓).
The riskless asset
At t = 0, the riskless asset B will have value B(0) = 1.
At t = 1, the riskless asset has the same value (hence riskless) in both states
at t = 1, so we write B(1, ↑) = B(1, ↓) ≡ R = 1 + r. Usually R ≥ 1 and so
r ≥ 0, which we can call interest, is non-negative. It represents the amount
earned on $1.
It is easy to show that if S(1, ↑) = S(1, ↓) there is an arbitrage, unless
S(1, ↑) = S(1, ↓) = (1 + r)S(0).
We also assume that

                          S(1, ↓) < RS(0) < S(1, ↑).                      (2.1)

We shall see the importance of inequality (2.1) below.

Example 2.1. Here S(0) = 5, S(1, ↑) = 20                  40
                                        3 and S(1, ↓) = 9 . B(0) = 1 and
                        10         1
B(1, ↑) = B(1, ↓) = R = 9 . So r = 9 and (2.1) clearly holds.

Suppose X(1) is any claim that will be paid at time t = 1. In our model X(1)
can take one of two values: X(1, ↑) or X(1, ↓). We shall determine X(0), the
premium or price of X at time t = 0.
Often the values of X(1) are uncertain because X(1) = f (S(1)) (a function
of S) and S(1) is uncertain. As X is an asset whose value depends on S, it
is a derived asset written on S, or a derivative on S. X is also called a
derivative or a contingent claim.

Example 2.2. When we write X(1) = [S(1) − K]+ we mean


                          X(1, ↑) = [S(1, ↑) − K]+
                          X(1, ↓) = [S(1, ↓) − K]+ .

Assuming we have a model for S, we can ﬁnd X(0) in terms of this information.
This could be called relative pricing. It presents a diﬀerent methodology
than, (though often equivalent to) what the economists call equilibrium
pricing, for example.
There are two steps to relative pricing.
Step 1
Find H0 and H1 so that
                                                      2.1 The Basic Model      15

                            X(1) = H0 B(1) + H1 S(1).                        (2.2)

Both sides here are random quantities and (2.2) means


                         X(1, ↑) = H0 R + H1 S(1, ↑)                        (2.3a)
                         X(1, ↓) = H0 R + H1 S(1, ↓).                       (2.3b)

The interpretation is as follows: H0 represents the number of dollars held at
t = 0, and H1 the number of stocks held at t = 0. At t = 1, the level of
holdings does not change, but the underlying assets do change in value to
give H0 B(1) + H1 S(1).
Solving (2.3a) and (2.3b) gives

                                    X(1, ↑) − X(1, ↓)
                             H1 =                                            (2.4)
                                    S(1, ↑) − S(1, ↓)

and


                            X(1, ↑) − H1 S(1, ↑)
                    H0 =
                                     R
                            X(1, ↑) − X(1,↑)−X(1,↓)
                                       S(1,↑)−S(1,↓) S(1, ↑)
                        =
                                         R
                          S(1, ↑)X(1, ↓) − S(1, ↓)X(1, ↑)
                        =                                 .                  (2.5)
                                R [S(1, ↑) − S(1, ↓)]

Note: It is rather crucial that S(1, ↑) = S(1, ↓).

Example 2.3 (continuation of Example ( 2.1)). If X(1, ↑) = 7 and X(1, ↓) = 2,
then equations (2.3a) and (2.3b) become


                                      10      20
                               7 = H0    + H1
                                       9      3
                                      10      40
                               2 = H0    + H1 ,
                                       9      9

giving H0 = −7.2 and H1 = 2.25.

Remark 2.4. We should now take a little time to interpret the situation where
H0 or H1 is negative.
In the previous example, H0 = −7.2 means we borrowed 7.2 and t = 0 and
we have a liability (a negative amount) of H0 R = −8 at t = 1.
16       2 The Binomial Model for Stock Options

Suppose instead that X(1, ↑) = 2 and X(1, ↓) = 7, then H0 = 15.3 and
H1 = −2.25 < 0. Now H1 = −2.25 means we shorted (borrowed) 2.25 stocks
at t = 0 and we have a liability at t = 1 as we must return the value of the
stock at t = 1. This value will depend on whether we are in ↑ or ↓. By the
way, we must also assume that we have a divisible market, which is one
in which any (real) number of stocks can be bought and sold. If we think of
stocks in lots of 1000 shares, then 2.25 is really 2250 shares. This is how we
could interpret these “fractional shares”.

Short sell means “borrow and sell what you do not own”.
There are basically two ways of raising cash: Borrow money at interest (from
a bank, say) or short sell an asset. In the former case, you must repay the
loan with interest at a future date and in the second case, you must buy back
the asset later and return it to its owner.
In an analogous way there are two ways of devolving yourself of cash. You can
put money in a bank to earn interest, or you can buy an asset. In the former
case you can remove the money later with any interest it has earned, and in
the latter case you can sell the asset (at a proﬁt or loss) at a future date.
Step 2
Using the one price theorem, which is a consequence of the no arbitrage
axiom, we must have

                            X(0) = H0 + H1 S(0).                          (2.6)

Remark 2.5. This equation is true because the claim X and the portfolio
H0 B + H1 S have the same value in both possible states of the world at t = 1.
In this situation, X(0) represents outﬂow of cash at t = 0. If X(0) > 0, then
X(0) represents the amount to be paid at t = 0 for the asset with payoﬀ X(1)
at t = 1. If X(0) < 0, then −X(0) represents an amount received at t = 0 for
the asset with payoﬀ X(1) at t = 1.

We shall review for this call option why X(0) must equal H0 + H1 S0 . First
assume (if possible) that

                            X(0) < H0 + H1 S(0).                          (2.7)

In fact let us use the numbers from the previous example. Thus (2.7) is

                          2.25S(0) − 7.2 − X(0) > 0                       (2.8)

We now perform the following trades at t=0.
Short sell 2.25 shares of stock, put 7.2 in the bank, buy one asset.
                                                    2.1 The Basic Model       17

Equation (2.8) gives the strategy to adopt. If a quantity is a positive value
of assets such as 2.25S(0), this suggests one should short sell the assets; if
a quantity is a negative value of assets (that is, −X(0)), this suggests one
should purchase the assets. A positive number alone indicates a borrowing
and a negative number, −7.2, an investment of cash in a bank.
In fact
                         2.25S(0) − (7.2 + X(0)) > 0

where 2.25S(0) is income, 7.2+X(0) payouts. Note that because this diﬀerence
is positive you have a proﬁt from this trading at t = 0. Put this proﬁt in your
pocket—and do not touch it (at least for the time being).
Note the following: You did not need any of your own money to carry out
this trade. The short sale of the borrowed stock was enough to ﬁnance the
investment of 7.2 and the purchase of X for X(0), and there was money left
over.
The consequence at t=1.
There are two cases:
In ↑
Sell X for X(1, ↑) = 7, remove the money from the bank with interest
7.2R = 8. This results in 15 (dollars), which can be used to fund the re-
purchase (and return) of the 2.25S(1, ↑) = 15. There are no further liabilities.
Thus, there are no unfunded liabilities at t=1.
In ↓
Sell X for X(1, ↓) = 2, remove the money from the bank with interest
7.2R = 8. This results in 10 (dollars), which can be used to fund the re-
purchase (and return) of the 2.25S(1, ↓) = 10. There are again no further
liabilities. Thus again there are no unfunded liabilities at t = 1.
In summary, we have made a proﬁt at t = 0 and have no unfunded liabilities at
t = 1. This is making money by taking no risks—by not using your own money.
This is an example of an arbitrage opportunity which our fundamental axiom
rules out. In eﬃcient markets one assumes that arbitrage opportunities do not
exist, and so we have a contradiction to (2.8). In practice, arbitrage opportu-
nities may exist for brief moments, but, due to the presence of arbitrageurs,
the markets quickly adjust prices to eliminate these arbitrage opportunities.
At least that is the theory.
After this discussion we see that (2.7) cannot hold (at least not in the example,
but also more generally). Therefore,

                             X(0) ≥ H0 + H1 S(0).

Assume now, if possible, that
18      2 The Binomial Model for Stock Options


                             X(0) > H0 + H1 S(0).                           (2.9)

In the example, this would mean

                          X(0) + 7.2 − 2.25S(0) > 0.                      (2.10)

We now perform the following trades at t=0.
Short sell the asset, borrow 7.2 and buy 2.25 stock.
This yields a positive proﬁt at t = 0 which is placed deep in your pocket until
after t = 1. In other words raising funds from the short sale and borrowings
is more than enough to cover the cost of 2.25 shares.
The consequence at t=1.
There are two cases:
In ↑
Sell the shares for 2.25S(1, ↑) = 15.00, repay the loan with interest 7.2R = 8,
purchase the asset for 7 and return to the (rightful) owner. Everything bal-
ances out. Thus, there are no unfunded liabilities at t=1.
In ↓
Sell the shares for 2.25S(1, ↓) = 10.00, repay the loan with interest 7.2R = 8,
purchase the asset for 2 and return to the (rightful) owner. Everything bal-
ances out. Thus, there are no unfunded liabilities at t=1.
In summary, we have again made a proﬁt at t = 0 and have no unfunded
liabilities at t = 1. This is again an arbitrage opportunity. Therefore, (2.9) is
false as well. We then conclude the result claimed in (2.6) must hold.
Let us now substitute (2.4) and (2.5) into (2.6). Then


     X(0) = H0 + H1 S(0)
                                                                   
              S(1, ↑)X(1, ↓) − S(1, ↓)X(1, ↑)       X(1, ↑) − X(1, ↓)
          =                                      +                      S(0)
                    R (S(1, ↑) − S(1, ↓))           S(1, ↑) − S(1, ↓)
            X(1, ↑) [RS(0) − S(1, ↓)] + X(1, ↓) [S(1, ↑) − RS(0)]
          =
                              R [S(1, ↑) − S(1, ↓)]
            1
          = [πX(1, ↑) + (1 − π)X(1, ↓)]
            R

where


                                  RS(0) − S(1, ↓)
                             π=                     >0                    (2.11)
                                  S(1, ↑) − S(1, ↓)
                                                          2.1 The Basic Model      19

                                    S(1, ↑) − RS(0)
                         1−π =                        > 0.
                                    S(1, ↑) − S(1, ↓)

Here 0 < π < 1 follows from the assumption of the model (2.1).
Therefore,

                                 πX(1, ↑) + (1 − π)X(1, ↓)
                      X(0) =                               .                    (2.12)
                                             R
This is the general pricing formula for a contingent claim option in a
one-step binomial model.
It was derived by using two ideas:

 1. replicating portfolios (step 1);
 2. there are no arbitrage opportunities (vital for the step 2 argument).

This method is called relative pricing because relative to the given inputs
S(0), S(1, ↑), S(1, ↓), B(0), B(1, ↑) and B(1, ↓) we can price other assets. We
simply calculate π as in (2.11) and then use (2.12). Let us note that even
though S was thought of as being a stock, it could have stood for any risky
asset at all.
The numbers π and 1 − π are called the risk neutral probabilities of states
↑ and ↓, respectively. We shall see why this name is used.
We can write (2.12) as
                                                   
                                               X(1)
                               X(0) = Eπ              ,                         (2.13)
                                               B(1)

which is the risk neutral expectation of X(1)
                                         B(1) . It stands for


                              X(1, ↑)           X(1, ↓)
                          π           + (1 − π)         .
                              B(1, ↑)           B(1, ↓)

This is the same as the right hand side of (2.12).

Remark 2.6. It can be shown that there is no arbitrage possible in our binomial
model if and only if (iﬀ) a formula of the type (2.13) holds with 0 < π < 1.

Remark 2.7. The author that is credited with the ﬁrst use of binomial option
pricing is Sharpe in 1978 [70, pages 366–373]. He argues as follows: First select
h so that
                   hS(1, ↑) − X(1, ↑) = hS(1, ↓) − X(1, ↓) .
Set this common value equal to
20      2 The Binomial Model for Stock Options

                                   R(hS(0) − X(0)).
This again leads to equation (2.12).
In 1979 Rendleman and Bartter [63] gave a similar argument. First select α
so that
                S(1, ↑) + αX(1, ↑) = S(1, ↓) + αX(1, ↓)
and set this common value to
                                  R(S(0) + αX(0)).
This (normally) again leads to equation (2.12). We say this because a choice
of α may not always exist. For the Sharpe approach, a choice of h can always
be made.
Exercise 2.8. Verify the claims made in this remark.
Not all models that one could write down are arbitrage free.
Example 2.9 (Continuation of Example 2.1).
Simply make the change S(1, ↓) = 17 3 . Starting with nothing, choose H0 = −5
(borrow 5 stocks), H1 = 1 (buy one stock). Then H0 + H1 S(0) = 0. At t = 1,
our position will be X(1) ≡ −5R + S(1) (meaning sell the stock and repay the
loan). This is 10                     1
                9 in the upstate and 9 in the down state. So with no start-up
capital we have generated a proﬁt (in both states) by simply trading. This is
an arbitrage opportunity. Note that condition (2.1) is violated here.
Example 2.10 (On why 0 < π < 1 should hold). As in equation (2.11)

                                      RS(0) − S(1, ↓)
                                π=                      .
                                      S(1, ↑) − S(1, ↓)
We assumed in inequality (2.1) that 0 < S(1, ↓) < RS(0) < S(1, ↑). So, for
example,

                      0 < RS(0) − S(1, ↓) < S(1, ↑) − S(1, ↓)
and the result that (2.1) implies that 0 < π < 1 follows. If we choose X
with X(1, ↑) = 1 and X(1, ↓) = 0, then X(0) > 0 to exclude arbitrage. Then
(2.12) implies that π > 0. A similar argument using X with X(1, ↑) = 0 and
X(1, ↓) = 1 leads to 1 − π > 0. So the absence of arbitrage opportunities leads
to 0 < π < 1.
Notation
It is often useful to use the following notation when x = (x1 , x2 , . . . , xn ) ∈ Rn :

 1. x ≥ 0 if xi ≥ 0 for each i = 1, 2, . . . , n.
 2. x > 0 if x ≥ 0 and xi > 0 for at least one i.
 3. x     0 if xi > 0 for each i = 1, 2, . . . , n.
                         2.2 Why Is π Called a Risk Neutral Probability?      21

2.2 Why Is π Called a Risk Neutral Probability?

This discussion will take place within the one-step binomial asset pricing
model.
Some of the steps here will be left to the reader as exercises.
For any 0 ≤ p ≤ 1, let Ep [X(1)] be deﬁned by

                     Ep [X(1)] = pX(1, ↑) + (1 − p)X(1, ↓).                (2.14)

Here p could represent a (subjective) probability (viewed from t = 0) that the
upstate (↑) will occur at t = 1. Let X be a (tradeable) asset whose value at
t = 0 is X(0) and whose values at t = 1 are X(1, ↑) and X(1, ↓), depending
on whether the upstate or downstate occurs at t = 1. From (2.12),

                   1                              1
         X(0) =      [πX(1, ↑) + (1 − π)X(1, ↓)] ≡ Eπ [X(1)] .             (2.15)
                   R                              R
For the asset X we can deﬁne the return rX by

                                      X(1) − X(0)
                              rX =                ,                        (2.16)
                                         X(0)

which is shorthand for
                                    X(1, ↑) − X(0)
                           rX (↑) =
                                         X(0)
                                    X(1, ↓) − X(0)
                           rX (↓) =                .
                                         X(0)

Lemma 2.11. For any 0 ≤ p, q ≤ 1 suppose there are associated probabilities.
Then
                                                                    
                                                   X(1, ↑) − X(1, ↓)
               Ep [rX ] − Eq [rX ] = (p − q)                           .   (2.17)
                                                         X(0)

Proof. Exercise.                                                               2

Remark 2.12.
                              Eπ [rX ] = r ≡ R − 1                         (2.18)

Proof. Exercise.                                                               2
22     2 The Binomial Model for Stock Options

Corollary 2.13.
                                                           
                                         X(1, ↑) − X(1, ↓)
                Ep [rX ] − r = (p − π)                                            (2.19)
                                                X(0)
                                                               
                                              X(1, ↑) − X(1, ↓)
                Ep [rX ] − rX (↑) = (p − 1)                                       (2.20)
                                                    X(0)
                                                         
                                        X(1, ↑) − X(1, ↓)
                Ep [rX ] − rX (↓) = p                                             (2.21)
                                              X(0)

Proof. For (2.19), use (2.18) and q = π in (2.17). For (2.20), use q = 1 in
(2.17). For (2.21), use q = 0 in (2.17).                                 2

Deﬁnition 2.14. Given probability p, let X and Y be two (tradeable) assets.
Their values at t = 0 are X(0), Y (0). At t = 1 in the ↑ state (resp., ↓ state)
                                                                           p
their values are X(1, ↑), Y (1, ↑) (resp., X(1, ↓), Y (1, ↓)). Then deﬁne VX,Y by


                   p
                  VX,Y = Covp (rX , rY )
                       ≡ Ep [(Ep [rX ] − rX ) (Ep [rY ] − rY )]                   (2.22)
                       = Ep [rX rY ] − Ep [rX ] Ep [rY ]                          (2.23)

Lemma 2.15.
                                                                           
        p                X(1, ↑) − X(1, ↓)              Y (1, ↑) − Y (1, ↓)
       VX,Y   = p(1 − p)                                                          (2.24)
                               X(0)                            Y (0)

Proof. Use (2.22), (2.14) together with (2.20) and (2.21). We leave the details
as an exercise.                                                              2

Corollary 2.16. The variance of X is then
                                                                    2
                  2    p                         X(1, ↑) − X(1, ↓)
                 σX ≡ VX,X = p(1 − p)                                     .       (2.25)
                                                       X(0)

Let us now assume (wlog) that Ep [rX ] ≥ r. With this assumption we have
the following lemma.

Lemma 2.17. Suppose that 0 < p < 1. Then

                                         |p − π|
                         Ep [rX ] − r =           σX                             (2.26)
                                          p(1 − p)

Proof. This follows from (2.19) and (2.25) and the assumption.
                          2.2 Why Is π Called a Risk Neutral Probability?        23

Remark 2.18. Equation (2.26) says something about the expected return from
asset X in terms of its volatility (variance). We say that an asset is riskier
when it has a higher volatility (and hence a higher value of σX ). By (2.26), if
the volatility is zero, then the expected return is just r (the risk free interest),
but when the volatility is non-zero we have a higher expected return. This
result ﬁts well with reality—if you want a higher expected return you must
take on more risk. However, there is one situation where this does not hold.
This is when p = π. In this case your expected return is always r no matter
what risk. If your (subjective) probabilities about events at t = 1 coincide
with π, then you are insensitive to risk, or what is the same thing, you are
risk-neutral. So π is the upstate probability of a risk neutral person.

Remark 2.19. Equation (2.15) is the usual pricing equation for an asset X,
expressing X(0) in terms of the future values of X via the risk neutral prob-
ability π. We can also express X(0) via the subjective probability p. In fact
suppose the assumption before Lemma 2.17 holds, and

                                       |p − π|
                               Λ(p) =           .
                                        p(1 − p)

Then by a simple rearrangement

                                        Ep [X(1)]
                             X(0) =                ,                         (2.27)
                                       R + Λ(p) σX

so the discounting must be risk adjusted if you use subjective probabilities.
Note that Λ(π) = 0.
Another rearrangement starts with

                        Ep [rX ] − r = βX,Y [Ep [rY ] − r] .                 (2.28)

Here

                                            p
                                           VX,Y
                                  βX,Y =    p     ,
                                           VY,Y

which is a regression coeﬃcient for the returns of X onto those of Y . This
quantity is called a beta in ﬁnancial circles, and betas are often published
information. It is often the case that betas do not change too quickly from
time to time. The identity (2.28) follows from (2.19) applied to both X and
Y together with (2.24) and (2.25). It is necessary to consider p = π and
p = π separately to avoid dividing 0 by 0, which is even invalid in ﬁnance!
Equation (2.28) looks very much like the CAPM formula (CAPM = Capital
24     2 The Binomial Model for Stock Options

Asset Pricing Model), widely used in ﬁnance despite its restricted validity. It
is valid in our simple model! Equation (2.28) can be arranged to give

                                     Ep [X(1)]
                       X(0) =                           ,                (2.29)
                                R + βX,Y [Ep [rY ] − r]
which is a relative pricing formula using subjective probabilities. Given in-
formation about Y you can price X provided you also know the correlations
between the returns on X and Y (which one sometimes assumes are relatively
constant). It is because of the arrangement (2.29) that (2.28) is termed CAPM
(read as CAP M ). In practice Y is often related to some index.


2.3 More on Arbitrage

There are two forms of arbitrage opportunities. We suppose neither type
exists in eﬃcient markets. If they did exist they would exist only temporarily.
An arbitrageur is someone who looks out for such opportunities and exploits
them when they do exist.
The type one arbitrage opportunity arose in the proof of equation (2.6) in
the last section. Indeed, if equation (2.6) did not hold we were able to make
a proﬁt at t = 0 without any unfunded liabilities at t = 1. Here one ends up
with a proﬁt at t = 1 in all states of the world.
The type two arbitrage opportunity arose in Examples 2.9 and 2.10. This is
the situation where you start with nothing at t = 0, you have no liabilities at
t = 1, but in one or more states of the world you can make a positive proﬁt.
We now give some more examples:

Example 2.20 (Refer to Example 2.1). Here we exhibit a type two arbitrage.
We choose S as in Example 2.1, but suppose

                                                            4
                  B(0) = 1 and B(1, ↑) = B(1, ↓) = R =        .
                                                            3
Note that condition (2.1) is violated.
Choose H0 = 5 and H1 = −1, then H0 + H1 S(0) = 0.
At t = 0 we short sell one stock and invest the proceeds in a bank.
At t = 1 in ↑ our position is H0 R + H1 S(1, ↑) = 0; in other words our
investment gives rise to 5 × 43 = 20
                                   3 , which is enough to cover the repurchase
of stock at 20
             3 , which is then returned to its owner.
At t = 1 in ↓ our position is H0 R + H1 S(1, ↑) = 20     9 ; in other words our
investment gives rise to 5 × 43 = 20
                                   3 , which  is enough to  cover the repurchase
of stock at 40
             9 , which is then returned to its  owner, and  with 20
                                                                  9 to spare.
                                  2.4 The Model of Cox-Ross-Rubinstein        25

Remark 2.21. Type two non-arbitrage was also used in Example 2.10.

Exercise 2.22 (A Variant of the One Price Theorem). Let X and Y
be two assets (or portfolios of assets). Prove

 1. if X(1) > Y (1), then X(0) > Y (0);
 2. if X(1) = Y (1), then X(0) = Y (0).

Remark 2.23. X(1) > Y (1) has the meaning of the notation on page 20. That
is: X(1) ≥ Y (1) in all states of the world at t = 1, and strict inequality
holds in at least one state of the world. [It is possible we are thinking beyond
binomial models here.]
In fact, if 1. does not hold, we can obtain a type two arbitrage by short selling
X and buying Y ; if 2. does not hold, we obtain a type one arbitrage. The
principle is this: (short) sell high, buy low.



2.4 The Model of Cox-Ross-Rubinstein

We shall now describe the Cox-Ross-Rubinstein model and we shall write
CRR for Cox-Ross-Rubinstein. See [18].
The following notation will be used:


                                  S(0) = S > 0
                                S(1, ↑) = uS
                                S(1, ↓) = dS,

where, as in equation (2.1),

                                0 < d < R < u.

Then
                            RS(0) − S(1, ↓)     R−d
                          π=                  =                           (2.30)
                            S(1, ↑) − S(1, ↓)   u−d
                            S(1, ↑) − RS(0)     u−R
                      1−π =                   =                           (2.31)
                            S(1, ↑) − S(1, ↓)   u−d

and
                                                    
                          1 R−d           u−R
                 X(0) =         X(1, ↑) +     X(1, ↓) .                   (2.32)
                          R u−d           u−d
26        2 The Binomial Model for Stock Options

Example 2.24 (European call option). Here X(1) = (S(1) − K)+ .
Assume S(1, ↓) < K < S(1, ↑), then


                      X(1, ↑) = (S(1, ↑) − K)+ = uS − K
                      X(1, ↓) = (S(1, ↓) − K)+ = 0



and so


                                  π (uS − K)
                            X(0) =
                                       R
                                     πu   K 
                                 =S       −      π.                     (2.33)
                                      R      R

Remark 2.25. For those familiar with the Black and Scholes formula for pricing
call options,

                       C(0) = S(0)N (d1 ) − Ke−rT N (d2 ),              (2.34)

we note an obvious similarity. Here N has the deﬁnition
                                          x
                                   1               1   2
                          N (x) ≡ √             e− 2 y dy.              (2.35)
                                    2π     −∞

We shall meet these ideas again later. The expressions for d1 and d2 are given
in Chapter 4.

Continuing, we note that

                                       πu
                                  0<      < 1.                          (2.36)
                                       R
In fact
                                          
                         πu          R−d       u   1− R d
                      0<    =                    =        <1
                         R           u−d       R   1 − ud

as R < u implies 1 − R
                     d
                       < 1 − ud .
If K ≤ S(1, ↓), then X(1) = S(1) − K and so
                                             2.5 Call-Put Parity Formula      27

                       π(S(1, ↑) − K) + (1 − π)(S(1, ↓) − K)
               X(0) =
                                         R
                       πS(1, ↑) − +(1 − π)S(1, ↓) K
                     =                           −
                                   R                R
                              K
                     = S(0) − .
                              R

If K ≥ S(1, ↑), then X(1) = 0 and so X(0) = 0.

Example 2.26. Consider the claim X(1) = (K − S(1))+ . This is a European
put option in the binomial model. Assume S(1, ↓) < K < S(1, ↑); then


                     X(1, ↑) = (K − S(1, ↑))+ = 0
                     X(1, ↓) = (K − S(1, ↓))+ = K − dS

and so
                           (1 − π) (K − dS)
                    X(0) =
                             R                      
                            K                 (1 − π)d
                         =      (1 − π) − S              .                 (2.37)
                            R                    R

Remark 2.27. As mentioned before, π is called a risk-neutral probability
(of being in state ↑). It is characterized by

                               πS(1, ↑) + (1 − π)S(1, ↓)
                      S(0) =                             .
                                           R
This says that under π, the expected discounted value of S(1) is S(0).



2.5 Call-Put Parity Formula

This is also called put-call parity. It applies to European style call and
put options.
There are several model-independent formulae in ﬁnance. Clearly, such
formulae are very important. We shall meet a number of them. The most well
known one is the call-put parity formula, which states:

                                                  K
                          C(0) − P (0) = S(0) −     ,                      (2.38)
                                                  R
at least in the present framework. We shall discuss generalizations later.
28     2 The Binomial Model for Stock Options

The calls and puts in this formula are assumed to have the same strike price
K and the same time to expiry (maturity).
CRR Model-Dependent Proof
Suppose that S(1, ↓) < K < S(1, ↑). Then with S = S(0) and (2.33) and
(2.37),


                          π
                  C(0) =    [uS − K]
                          R
                          1−π
                  P (0) =       [K − dS]
                            R
                          π             1−π
           C(0) − P (0) = [uS − K] −         [K − dS]
                          R              R
                          π(uS) + (1 − π)(dS) πK + (1 − π)K
                        =                     −
                                   R                  R
                                 K
                        = S(0) −
                                 R

            R = P V (K) ≡ P V0 (K), the present value at t = 0 of K at t = 1
By the way, K
(PV = Present Value).
Model-Independent Proof. Model-independent relations are very impor-
tant.
We again have two times: now (t = 0), and expiry date (t = T ). Assume (if
possible) that

                     C(0) − P (0) − S(0) + P V (K) > 0.                 (2.39)

We shall show there is type one arbitrage. At t = 0, we short sell a call
option, buy a put option, buy one stock, borrow P V (K). The short sale and
the borrowing is enough to cover the put options and stock price, and there
is cash left over (by (2.39)), which we pocket.
At expiry (t = T ), we cash settle the call, realize value of the put, sell the
stock, repay the loan. The net of all these transactions is

              −(S(T ) − K)+ + (K − S(T ))+ + S(T ) − K = 0.             (2.40)

The person who let you borrow the call only needs the cash value ((S(T ) −
K)+ ) of the call at expiry (called cash settling). The assets (put and stock),
are just enough to cover the liabilities of the call and loan repayment.
One can demonstrate (2.40) by looking at the two cases: S(T ) > K and
S(T ) ≤ K. In the ﬁrst case:
                                           2.6 Non Arbitrage Inequalities      29

−(S(T ) − K)+ + (K − S(T ))+ + S(T ) − K = −(S(T ) − K) + 0 + S(T ) − K = 0

and in the latter


−(S(T ) − K)+ + (K − S(T ))+ + S(T ) − K = 0 + (K − S(T )) + S(T ) − K = 0.

The other case of (2.39),

                      C(0) − P (0) − S(0) + P V (K) < 0,

is treated in a similar way. First write this as

                     −C(0) + P (0) + S(0) − P V (K) > 0.                    (2.41)

At t = 0, buy a call option, short sell a put option, short sell a stock and
invest P V (K). The two short sales are enough to cover the call options and
the investment amount. Further, there is cash left over (by (2.41)), which we
pocket.
At expiry (t = T ), we realize value of the call, cash settle the put, buy a stock
and return, realize the investment K. The net cost of all these transactions is

                (S(T ) − K)+ − (K − S(T ))+ − S(T ) + K = 0                 (2.42)

as before.
In both cases, we can pocket a proﬁt at t = 0 and have no unfunded liabilities
at expiry. These are type one arbitrages. These ﬁnancial contradictions show
the call-put parity equality must hold. [A reason to prefer the term call-put
parity is because it could also be read “call minus put” which is the left hand
side of the call-put parity formula. It reminds us which way they are around!].



2.6 Non Arbitrage Inequalities

In the section above we saw the ﬁrst of these: the call-put parity formula. This
was proved in the CRR one-step model and then we gave a model independent
proof. It is the fact that it has a model independent proof which makes it a
fundamental result. However, note that the call-put parity formula holds for
European options. It does not hold for the American style counterparts.
We now investigate other results for which there are model-independent
proofs. Consequently, we are no more in the simple two-state, one-period
model.
30     2 The Binomial Model for Stock Options

Example 2.28 (Lower bounds for European calls).
Let 0 ≤ t < T . Let C(t) be the value at t of a European call option that
expires at time T , whose strike price is K. We also write P Vt (K) for the value
at time t of K at time T . This amount could be found by some discounting
formula whose precise details do not matter here—as long as interest rates
are not random. Then

                                                 +
                         C(t) ≥ [S(t) − P Vt (K)]                         (2.43)
                              = max [0, S(t) − P Vt (K)] .                (2.44)

Proof. Clearly C(t) ≥ 0 as C(T ) = (S(T ) − K)+ ≥ 0. [See Exercise (2.22)] So
we only need to show

                             C(t) ≥ S(t) − P Vt (K).                      (2.45)
Suppose to the contrary that

                             C(t) < S(t) − P Vt (K),
which is the same as

                           S(t) − P Vt (K) − C(t) > 0.                    (2.46)
If (2.46) were the case, we show how to create an arbitrage.
At time t we short sell one stock, invest P Vt (K) in a bank, buy a call option,
(expiring at T with strike price K). The short sale is enough to cover the
purchases and (2.46) says there is a positive amount left over for the pocket.
At time T , the expiry date of the call option, we buy a stock and return it,
realize the value of the call, realize the value of the investment in the bank,
(take the K out of bank). The net proceeds are given by the left hand side of

                         −S(T ) + (S(T ) − K)+ + K ≥ 0.                   (2.47)
This implies that there are no unfunded liabilities at time T . To show (2.47)
we consider two cases: S(T ) > K and S(T ) ≤ K. For the former

        −S(T ) + (S(T ) − K)+ + K = −S(T ) + (S(T ) − K) + K = 0
and in the latter case

             −S(T ) + (S(T ) − K)+ + K = −S(T ) + 0 + K ≥ 0.
Therefore arbitrage has been established. This is a ﬁnancial contradiction and
so (2.45) and hence (2.43) and (2.44) hold.                                  2
                                           2.6 Non Arbitrage Inequalities      31

Example 2.29 (American call options). It is not optimal to exercise an Amer-
ican call option before expiry if the underlying stock does not pay dividends
during the life of the option. In fact, at any time t prior to expiry,

                             CA (t) > (S(t) − K)+ .                         (2.48)

In other words, before expiry, an American call option is always worth
(strictly) more than its exercise value. For this we require positive interest
rates.

Proof. First note that

                                 CA (t) ≥ CE (t).                           (2.49)

That is, an American call option is always worth at least the same as the Eu-
ropean counterpart. After all the American call option oﬀers all the privileges
of the European call option and other beneﬁts besides—the right to exercise
the call before expiry, for example. One can also argue more rigorously: As-
sume that (2.49) is not true for some time t prior to expiry and construct an
arbitrage opportunity. Suppose at time t it is true that CE (t) − CA (t) > 0.
At time t short sell the European call and purchase an American call (with
the same speciﬁcations of strike price and exercise price). Pocket the proﬁt.
As you own the American call option you decide when to exercise it. Decide
not to exercise it early. At expiry the realized value of the American Call
Option is (S(T ) − K)+ , which is just the same as the value of the European
call option. So this realized value can be used to cash settle the European call
option at time T .
This argument is included to show how non arbitrage arguments can be used
to derive ﬁnancial conclusions.
Suppose now that S(t) > K. Then, as interest rates are positive,

                         S(t) − P Vt (K) > S(t) − K > 0.                    (2.50)

So (using Example 2.28)


                      CA (t) ≥ CE (t)
                              ≥ S(t) − P Vt (K)
                              > S(t) − K = (S(t) − K)+ .

Thus, (2.48) holds if S(t) > K.
Suppose now that S(t) ≤ K; then (S(t) − K)+ = 0. But CA (t) > 0 for t < T ,
so again (2.48) holds if S(t) ≤ K.                                      2
32      2 The Binomial Model for Stock Options

Remark 2.30. 1. One consequence of this example is the following: If a stock
   does not pay a dividend during the life of an option, then the American
   call options and the European call option have the same value. As divi-
   dends are usually paid twice a year, there will be many short term call
   options (90-day options) for which this condition applies. The ﬁnancial
   press usually advertises when dividends are paid, and sometimes predicts
   when the next dividends will be paid based on what happened the year
   before.
 2. The corresponding result does not hold for American and European put
    options. Always before expiry at t < T

                                 PA (t) > PE (t),                       (2.51)

     where we have assumed that the two puts are the same in every other
     respect. The diﬀerence

                            e(t) ≡ PA (t) − PE (t) > 0                  (2.52)

     is called the early-exercise premium. This is the extra amount one
     pays for an American put to have the right to exercise it early.

Example 2.31 (Estimate interest from option prices). For European calls and
puts, the call-put parity formula can be rearranged to yield

                                       K
                          R=                       .                    (2.53)
                               S(0) + P (0) − C(0)

For American puts and calls we have

                      CA (0) − PA (0) ≤ S(0) − P V (K)                  (2.54)

when dividends are not paid during the life of the options. This can be deduced
from the call-put parity formula for European options and using CA (0) =
CE (0) and PA (0) ≥ PE (0).

Proof. Exercise.                                                             2

Under these circumstances (regarding dividends) we have

                                       K
                         R≥                          .                  (2.55)
                              S(0) + PA (0) − CA (0)

We should be able to check this holds from data in the ﬁnancial press (other-
wise there are arbitrage opportunities)
                                               2.6 Non Arbitrage Inequalities      33

Example 2.32 (An AOL example). Time t = 0 is 22 July 2003 (the previous
trading day).
S(0) = $16.85, K = $16.00, C(0) = $1.20, P (0) = $0.45. Then the right hand
side of (2.55) is

                               16.00
                                            = 0.9937.                (2.56)
                        16.85 + 0.45 − 1.20
The interest rate at the time was around 1.00%, so there is no violation of
(2.55).

Remark 2.33. We have seen that an American call and a European call have
the same value when there are no dividends paid on the underlying stock. Un-
der these circumstances we saw that it is not optimal to exercise an American
call option early, as it is more proﬁtable to sell the option than to exercise
it. So the early exercise feature under these circumstances provides no extra
value. We shall discuss later what happens when there are dividend payments.

Example 2.34 (Call options are decreasing functions of their time to expira-
tion). Suppose there are two calls which are identical except they have diﬀerent
expiration times T1 and T2 , with T1 > T2 . “Now” is time t. Their times to
expiration are τ1 and τ2 with τi = Ti − t, i = 1, 2, so τ1 > τ2 . The values of
these calls at time t are C τi (t), for i = 1, 2. We claim

                                   C τ1 (t) ≥ C τ2 (t)                          (2.57)
for 0 ≤ t ≤ T2 . (After T2 the call with shorter time to expiry ceases to exist
so (2.57) is either obvious or does not mean much, depending how you view
things.) To prove (2.57) assume (if possible) that

                                 C τ2 (t) − C τ1 (t) > 0
for some 0 ≤ t ≤ T2 . This leads to an arbitrage opportunity as follows. At t,
short the τ2 call and purchase the τ1 call. Pocket the proﬁt. At time T2 , the
value V (T2 ) of the position is


                   V (T2 ) = −(S(T2 ) − K)+ + C τ1 (T2 )
                          ≥ −(S(T2 ) − K)+ + (S(T2 ) − K)+
                          = 0,

where we have used Example 2.28. So at time T2 we have no unfunded liabili-
ties if we sell the longer-dated call and cash settle the shorter-dated one at this
time. So we now have a type one arbitrage opportunity. This is a (ﬁnancial)
contradiction, and so our claim holds.

Many more relations can be deduced in this model-independent way.
34     2 The Binomial Model for Stock Options

2.7 Exercises

Exercise 2.35. This exercise refers to Example 2.24. What are the reasons
that market players will buy and sell put options. Are buyers and sellers
matched?

Exercise 2.36. In Example 2.2 show that 0 ≤ H1 ≤ 1.

Exercise 2.37. Prove the identities (2.17), (2.18), (2.26), (2.27) and (2.28)
in Section 2.2.

Exercise 2.38. This exercise refers to Example 3.1. How can you decide
whether a futures trader is a speculator or a hedger? Explain the market
for futures/forwards.

Exercise 2.39. Let S = {S(t) | t ≥ 0} be the price process of some stock
(e.g., AOL shares). Let C(t) denote the value at time t of a (European) call
option written on S with maturity date T and exercise price K. Then C(T ) =
max[0, S(T )−K]. Draw a graph, plotting C(T ) versus S(T ). This is called the
payoﬀ graph for the this call option. The proﬁt graph is the plot of C(T )−C(0)
versus S(T ). Draw the proﬁt graph. For what values of S(T ) will the proﬁt
be positive ? (This proﬁt ignores the time value of money.)

Exercise 2.40. Repeat Exercise 2.39 but for the (European) put option. The
diﬀerence between a put and a call is that with the put you have the right to
sell rather than the right to buy. If P (t) is the value of this put with strike
price K and expiry date T , explain why P (T ) = max[0, K − S(T )]. Plot P (T )
versus S(T ), and P (T ) − P (0) versus S(T ). If you want to take a numerical
example, choose the AOL/AUG03/16.00/PUT with P (0) = 0.45USD. For
what values of S(T ) will the proﬁt be positive? Explain why the holding of a
put option on S is like holding an insurance policy over S.

Exercise 2.41. The current price of a certain stock is $94 and 3-month call
options with a strike price of $95 currently sell for $4.70. An investor who feels
that the stock price will increase is trying to decide between buying 100 shares
and buying 2000 call options (20 contracts). Both strategies would involve an
investment of $9,400. What advice would you give the investor? How high
does the stock price have to rise for the option strategy to be more proﬁtable?

Exercise 2.42. Suppose two banks XYZ and ABC are equally rated (as re-
gards risk). Suppose that XYZ oﬀers and charges customers 4% interest on
deposits or loans, while ABC oﬀers and charges 6% interest. Seeing this sit-
uation, how could you make a riskless proﬁt without using any of your own
money? You should provide an explicit strategy for achieving this, and explain
any problems you might have carrying it out in practice. If the two banks were
not equally rated, what possible reason could you give for the diﬀerence in
interest rates?
                                                                  2.7 Exercises   35

Exercise 2.43. Suppose IBM pays a dividend D on their shares S at time τ .
Show that S(τ +) = S(τ −) − D. Actually, to be precise, τ should be what is
called the ex-dividend date. You should again argue your solution from the
assumption of no arbitrage. S(τ +) means the value of S just after τ , and
S(τ −) the value just before.

Exercise 2.44. Let Ci for i = 1, 2, 3 be European call options all expiring at
T with strike prices Ki , for i = 1, 2, 3 all written on the same stock S. The
butterﬂy spread is the combination C1 − 2C2 + C3 with K2 = 12 (K1 + K3 ).
Graph C(T ) against S(T ). Show that C2 (0) < 12 (C1 (0) + C3 (0)). Discuss
which assumptions you make.

Exercise 2.45. We established call-put parity formula holds for European
call and put options:

                         C(0) − P (0) = S(0) − P V (K),

where P V (K) = K/R. With the choices S(0) = $10.50, K = $10.00, C(0) =
$3.00, P (0) = $1.00 and R = 1.0043, show that the call-put parity formula is
violated. Show how to create an arbitrage opportunity of at least $1000. You
must not use any of your own money to fund this arbitrage opportunity.

Exercise 2.46. Read Linear Regression in the Appendix to Exercise 2.47,
which can be studied together with this exercise.
Consider the data in Table 2.1 for XYZ/AUG03/CALLs. Suppose the spot
price of the XYZ shares is S = $16.96. (Not all strike prices are used here.)


               Table 2.1. XYZ/AUG03/CALL for Exercise 2.46
                                   1    2     3     4     5 Sum
                          ni     171 316 475 802 594 n =
                             ni
                       ωi = n                                 1
                          xi    17.50 18.00 18.50 19.00 19.50
                          yi     0.36 0.19 0.12 0.06 0.06



We had N = 5, the x values represent strike prices, and the y values represent
(ask) call prices. The n values are for open interest, which gives the number
of contracts presently held with a particular strike price. We plot call prices
against strike prices and seek the least squares ﬁt line. Find its slope m and
intercept c. Using the equations

                         πuS                π           R − πu
                   c=              m=−             d=          ,
                          R                 R            1−π
estimate π, u and d.
36     2 The Binomial Model for Stock Options

Use these values to compute the value of the XYZ/AUG02/17.00/PUT and
compare your answer with the market value 0.55 CAD (ask).
These XYZ options are really American options, but as they are rarely exer-
cised (why?) they price like European options. The value of R is to be taken
as 1.0042.

Exercise 2.47. Consider the one-step binomial model with stock prices hav-
ing d = 1/u. We can price ATM calls by

                              π           π
                         c=     (uS − K) = (u − 1)S.
                              R           R
This leads to

                                       1 + Rx
                                 u=            ,
                                      R(1 − x)

where x = c/S. So u can be calculated √for a range of ATM calls by this
formula. The CRR paper uses u = exp(σ ∆t) where σ is the volatility and
∆t is the time interval between
                          √        t = 0 and t = 1, which we will take as
31/365 = 0.08493 and so ∆t ≈ 0.291431. It may therefore be of interest to
plot ln u versus σ, get the line of best ﬁt, and see if the estimated slope is
about 0.29143. This is what you are now asked to do. Here are some “data”
for various AUG03 calls. Use R = 1.0042 as before.

                  Table 2.2. ATM Call Prices for Exercise 2.47
                     Company S ATM Call Price σ
                       ABC 16.96  0.6800     0.2685
                       DEF   9.18 0.3567     0.3614
                       HIJ  29.10 0.9780     0.2345
                      KLM 31.00   1.0400     0.2841
                       NOP   8.46 0.6800     0.6765


In making your line of least squares ﬁt, use wi = 1/5 = 0.2 for i = 1, 2, 3, 4, 5.
Also observe that you should use the zero intercept form of linear regression
here.

Appendix to Exercises 2.46 and 2.47
Linear Regression
We are given data points {(xi , yi ) | i = 1, 2, . . . , N } and we want to place a
line of best ﬁt through them. The model will be

                                yi = mxi + c + i                            (2.58)
                                                                 2.7 Exercises      37

for each i = 1, 2, . . . , N . Here   i denotes an error for each i.

The least squares ﬁt line is that line (or choice of m, c) so that

                                              N
                                                    2
                                                    i                            (2.59)
                                            i=1

is minimal.
In ﬁnance we may have ni measurements all at (xi , yi ) and ni may not be
the same for each i. For example we could plot call prices versus strike prices
from NYSE data. For the ni we could use the open interest or the volume of
trade.
In either case let us put

                               M = n 1 + n2 + . . . + nN

and set

                                                    ni
                                         wi ≡          ,
                                                    M
which gives the proportion of measurements at (xi , yi ). We could then mini-
mize

                                          N
                                               wi 2i .                           (2.60)
                                         i=1

Setting derivatives of this expression with respect to m and c, both to zero
yields the estimates for m and c which are

                                              xy − x y
                                      m=                                         (2.61)
                                               x2 − x2
and

                                       c = y − mx.                               (2.62)

Here we are using


                                              N
                                       y=           wi yi
                                              i=1
38        2 The Binomial Model for Stock Options
                                           N
                                  x=             wi xi
                                           i=1
                                           N
                                 xy =            wi xi yi
                                           i=1
                                           N
                                 x2 =            wi x2i .
                                           i=1


If N > 1, then x2 = x2 , so we never divide by zero! In fact


                                     N
                         x2 − x2 =         wi (xi − x)2
                                     i=1
                                     N
                       xy − x y =          wi (xi − x)(yi − y),
                                     i=1


so we can solve for m and hence for c.

Example 2.48 (linear regression). Consider some XYZ call option prices. Sup-
pose N = 5; x1 = 10.50, x2 = 11.00, x3 = 11.50, x4 = 12.00, x5 = 12.50 and
y1 = 1.36, y2 = 0.95, y3 = 0.62, y4 = 0.38, y5 = 0.20 (we are using the selling
prices). We could weight by open interest (open interest is the number of
contracts in a particular class of options), and suppose n1 = 56, n2 = 662,
                                                               56         662
n3 = 941, n4 = 969, n5 = 268. Then M = 2896 and so w1 = 2896      , w2 = 2896 ,
       941        969         268
w3 = 2896 , w4 = 2896 , w5 = 2896 . Then


        56 × 10.50 + 662 × 11.00 + 941 × 11.50 + 969 × 12.00 + 268 × 12.50
     x=
                                       2896
      = 11.62620856

        56 × 1.36 + 662 × 0.95 + 941 × 0.62 + 969 × 0.38 + 268 × 0.20
     y=
                                    2896
      = 0.590573204

        56 × 10.502 + 662 × 11.002 + . . . + 969 × 12.002 + 268 × 12.502
 x2 =
                                    2896
      = 135.4054731

        56 × 1.36 × 10.50 + 662 × 0.95 × 11.00 + . . . + 268 × 0.20 × 12.50
 xy =
                                      2896
      = 6.73879489
                                                                  2.7 Exercises      39


         xy − xy
  m=
       x2 − x2
       6.73879489 − 11.62620856 × 0.590573204
     =
             135.4054731 − 11.626208562
       −0.127772349
     =               = −0.539698557
        0.23674762

   c = y − mx = 0.590573204 + 0.539698557 × 11.62620856
     = 6.865221193.

We shall see later some interpretation of these estimates of m and c. If you
know some statistics about the errors, then you can discuss the conﬁdence
intervals of the estimators of m and c given in formulae (2.61) and (2.62).
Many of these calculations can be easily carried out in MS-EXCEL.
Zero-Intercept Linear Regression
The model will now be

                                       yi = mxi + i                               (2.63)

for each i = 1, 2, . . . , N . Here   i denotes an error for each i.

The (weighted) least squares ﬁt line is that line (or choice of m) making

                                          N
                                                wi 2i                             (2.64)
                                          i=1

minimal. Setting the derivative of this expression with respect to m to zero
gives:

                                                 xy
                                         m=                                       (2.65)
                                                  x2
with the same notation as above.

Exercise 2.49. Show that the value of a call can never be less than the value
of an otherwise identical call with a higher strike price; that is,

                           C(K1 ) ≥ C(K2 )         if K2 > K1 ,

and furthermore

                    K2 − K1 ≥ C(K1 ) − C(K2 )           if K2 > K1 .
3

The Binomial Model for Other Contracts




We now discuss the simple one-step binomial model applied to other ﬁ-
nancial contracts.



3.1 Forward Contracts

We discuss two related contracts: the forward contract and the futures con-
tract. The latter is traded on a futures exchange, (e.g. the CBOE), the former
between two parties. We shall discuss the futures contract later.

Deﬁnition 3.1 (Forward Contract). A (long/short) forward contract is an
agreement to buy or sell an asset (S, say) at some future time (T , say) for an
agreed price (F , say). There are no payments made initially (at time t = 0),
and the price F is called the delivery price.

Therefore, a long forward contract is a binding agreement to buy, while a
short forward contract is a binding agreement to sell. The word “binding”
distinguishes this contract from the option contracts.
The payoﬀ of a long forward contract is then S(T ) − F . (Buy at F and
sell at S(T )). This payoﬀ may be positive, negative or zero depending on the
state of the world at time T . No payments are made initially, at t = 0, as the
present value of the forward contract is zero. (We ignore transaction costs.)
The agreed price F is called the forward price. The rational value of F can
be shown, in a model-dependent way or in a model-independent way, to be
F = S(0)R. In the previous chapter we talked about t = 1 without specifying
units of time. In this context T denotes the time interval between t = 0 and
t = 1, and R is the value at T of 1 at the present time.
42     3 The Binomial Model for Other Contracts

Proof (Model-Dependent). Consider the one-step binomial asset pricing model.
Suppose at time T , S(T ) equals either S(T, ↑) or S(T, ↓). The time t = 0 value
of the forward contract is zero, so


                   1
               0=    [π (S(T, ↑) − F ) + (1 − π) (S(T, ↓) − F )]
                   R
                   1                                F
                 = [πS(T, ↑) + (1 − π)S(T, ↓)] −
                   R                                R
                          F
                 = S(0) − .
                          R

That is

               F = S(0)R .

                                                                             2

Proof (Model-Independent). Assume (if possible) that

                                F − S(0)R > 0.

At time t = 0, borrow S(0) in cash, buy one stock, enter a (short) forward
contract to sell the stock for F at time T . There is a net cost of $0 at time
t = 0.
At expiry T , sell the stock for F and repay the loan with interest: S(0)R.
The net position is F − S(0)R > 0, which is a clear proﬁt. So, with no net
outlay at time t = 0, one can generate a positive proﬁt at time T . This is an
arbitrage, which violates our basic axiom.
Assume now (if possible) that

                                S(0)R − F > 0.

A similar argument works.
At time t = 0, short sell one stock, invest the amount raised, S(0), in a bank,
enter a forward contract to buy a stock at time T for F . There is a net cost
of $0 at time t = 0.
At expiry T , buy a stock for F and return it. The stock purchase is funded
from the investment S(0)R. The net position is S(0)R − F > 0, which is
a clear proﬁt. Again with no net outlay at time t = 0, one can generate a
positive proﬁt at time T . This is an arbitrage and a violation of the axiom.2
                                       3.2 Contingent Premium Options        43

Remark 3.2. We should discuss the market for forward contracts. Why do
players enter these contracts? There are again diﬀerent reasons depending on
whether a player is a speculator, a hedger or an arbitrageur.
Forward and futures are particularly important for commodities.
For a farmer, only September wheat prices may be important, for that is the
time that the crop is ready for harvest and sale. It is at this time that a
food company must buy (durum) wheat for pasta manufacture. Farmers and
a company could enter into forward contracts. The farmers could agree to sell
a given number of bushels of a particular grade of wheat to the company for
an agreed price. From the farmer’s point of view the income from the wheat
sales will be known ahead of the harvest. From the company’s point of view
the cost of wheat input into the pasta production will be known ahead of
time. The forward contract has taken the uncertainty out of the income for
the farmer and the uncertainty out of the input costs for the company.
At expiry T of the forward contract either party could be worse oﬀ compared
with not having a forward contract. Suppose that S(T ) > F . Then the farmer
must sell the wheat for F and not for the higher price S(T ), and so suﬀer
a relative loss. In this case the company will have a relative gain (paying
F rather than S(T )). However this is not the point. By entering a forward
contract, one gives up the possibility of gain to obtain a certain outcome.
This situation is not without risks, however. If there is a poor harvest (a
drought, for example), then the farmer may not be able to deliver the agreed
amount. In that case, the farmer must go to the market to buy the shortfall
(at price S(T )) and deliver it to the company for F . Because of this, the
farmer would probably only forward sell 70% (say) of the wheat crop this
way. Another risk could be that the grade of the wheat harvested is not up
to the quality agreed in the forward contract. Again the farmer may suﬀer a
loss in order to honor the forward contract.

A more complete discussion of forwards and futures is given in Duﬃe [26] and
in many other books.



3.2 Contingent Premium Options

The put and call options we have described so far are called (plain) vanilla
options. The opposite of vanilla is exotic. However, some derivatives which
were once called exotic are now regarded as vanilla. This applies to the barrier
options and the Asian or average rate options.
The contingent premium option is a pay-later option. Let us describe the
European call contingent premium option. It is the same as the vanilla Eu-
ropean call except that the premium is not paid up front (at t = 0) but at
expiry, and then only if the option expires in the money.
44      3 The Binomial Model for Other Contracts

We shall price this option in the one-step binomial asset pricing model. Write
X for the price of the European call contingent premium Option. Let α be
the contingent premium. Then X(0) = 0, as nothing is paid at time t = 0.
Assume S(1, ↓) < K < S(1, ↑).
At expiry (t = 1), the payoﬀ is


                          X(1, ↑) = S(1, ↑) − K − α
                          X(1, ↓) = 0.

Then


                            1
                 0 = X(0) =   [πX(1, ↑) + (1 − π)X(1, ↓)]
                            R
                            1                  π
                           = π [S(1, ↑) − K] − α
                            R                  R
so

                                       R
                                  α=     C(0),
                                       π
where

                                    π
                           C(0) =     [S(1, ↑) − K]
                                    R
is the price of the vanilla call. Now, as R ≥ 1 and 0 < π < 1, we see α > C(0),
as you might have expected.
Another variant could be the following. Pay 50% of the premium at t = 0
and 50% at expiry (t = 1) provided that one is in the money. Then the
premium α is determined from

                              α         π α
                                = C(0) − ·
                              2         R 2
or
                                        π −1
                      α = 2 · C(0) · 1 +       > C(0).
                                         R
                                                     3.3 Exchange Rates     45

3.3 Exchange Rates

Let X denote an exchange rate. We shall now discuss the USD/CAD exchange
rates, though any other example will do.
Let X(t) denote the value at time t of 1 USD expressed in CAD (or the
domestic currency). This is called the direct (or American), way of quoting
an exchange rate and is the one that will be used in this book. It is certainly
the natural way to quote exchange rates. We ask for the value in CAD of one
US dollar just as we ask for the value in CAD (domestic currency) of a kilo
of tomatoes.
For historical reasons (see Bretton-Woods Agreement) the market quotes
some rates in an inverse (European) way. So we have that 1 CAD = 0.72
                                                            1
USD (inverse, market convention) is equivalent to 1 USD = 0.72 = 1.389 CAD
(the direct value), which we call X(0), say.
We now describe the pricing formula in a one-step binomial world.
Suppose that at time t = 1, X can take one of two values, X(1, ↑) > X(1, ↓).
There will also be two interest rates, domestic (d = domestic = Canadian),

               Bd (0) = 1,   Bd (1, ↑) = Bd (1, ↓) = Rd = 1 + rd ,

and foreign, (f = foreign = USA)

              Bf (0) = 1,    Bf (1, ↑) = Bf (1, ↓) = Rf = 1 + rf .

We wish to price a foreign exchange (FX) contingent claim W . In other words,
given W (1) in CAD, ﬁnd W (0) in CAD.
We again will use replication and non arbitrage concepts.
We take H0 CAD and H1 USD. So this portfolio has value (in CAD),

                                 H0 + H1 X(0)                             (3.1)

at time t = 0. At time t = 1, this portfolio is worth (in CAD),

                             H0 Rd + H1 Rf X(1).

We choose H0 and H1 so that

                        W (1) = H0 Rd + H1 Rf X(1).                       (3.2)

This is the same as the two equations:
46     3 The Binomial Model for Other Contracts

                      W (1, ↑) = H0 Rd + H1 Rf X(1, ↑)                  (3.3a)
                      W (1, ↓) = H0 Rd + H1 Rf X(1, ↓)                  (3.3b)

and if X(1, ↑) = X(1, ↓), we have a unique solution for H0 and H1 :


                         1 W (1, ↑) − W (1, ↓)
                 H1 =
                        Rf X(1, ↑) − X(1, ↓)
                        1 X(1, ↑)W (1, ↓) − X(1, ↓)W (1, ↑)
                 H0 =                                       .
                        Rd       X(1, ↑) − X(1, ↓)

This leads to

                            1
                  W (0) =      [πW (1, ↑) + (1 − π)W (1, ↓)]                (3.4)
                            Rd
with

                                    Rf X(0) − X(1, ↓)
                                    Rd
                             π =                                            (3.5)
                                    X(1, ↑) − X(1, ↓)
                                   X(1, ↑) − R
                                             Rd
                                                X(0)
                        1−π =                 f
                                                        .                   (3.6)
                                   X(1, ↑) − X(1, ↓)

Consequently for, 0 < π < 1, our exchange rate model must satisfy

                                    Rd
                        X(1, ↓) <      X(0) < X(1, ↑)                       (3.7)
                                    Rf

as we assumed that X(1, ↓) < X(1, ↑).

Deﬁnition 3.3 (Arrow-Debreu Securities). These are contingent claims
which equal 1 in a single future state and are 0 otherwise.

Let W ↑ and W ↓ be the (two) Arrow-Debreu securities deﬁned by

                     W ↑ : W ↑ (1, ↑) = 1,   W ↑ (1, ↓) = 0             (3.8a)
                        ↓    ↓                   ↓
                     W : W (1, ↑) = 0,       W (1, ↓) = 1.              (3.8b)

Write W ↑ (0) (resp., W ↓ (0)) for the Arrow-Debreu prices at time t = 0.
Then a general claim W can be written

                  W (1) = W (1, ↑)W ↑ (1) + W (1, ↓)W ↓ (1).
                                                    3.3 Exchange Rates      47

This implies by Theorem 1.2 that

                  W (0) = W (1, ↑)W ↑ (0) + W (1, ↓)W ↓ (0),

which will be the same as equation (3.4), as we shall see.
Of course, type 2 non arbitrage implies W ↑ (0) > 0 and W ↓ (0) > 0. W ↑ (0)
and W ↓ (0) are called state prices. Arrow-Debreu securities act as a basis for
the payoﬀs of any other security at t = 1.
For W ↑ :


                          1 = H0 Rd + H1 Rf X(1, ↑)
                          0 = H0 Rd + H1 Rf X(1, ↓)

implies


                                  −X(1, ↓)
                        H0 =
                             Rd [X(1, ↑) − X(1, ↓)]
                                       1
                        H1 =                        ,
                             Rf [X(1, ↑) − X(1, ↓)]

so

                      W ↑ (0) = H0 + H1 X(0)
                                − R1d X(1, ↑) + R1f X(0)
                              =
                                  [X(1, ↑) − X(1, ↓)]
                                1 Rf X(0) − X(1, ↓)
                                    Rd
                              =
                                Rd X(1, ↑) − X(1, ↓)
                                π
                              =    .
                                Rd

As X(1, ↓) < X(1, ↑) we must also have R
                                       Rd
                                        f
                                          X(0) > X(1, ↓).
For W ↓ , we proceed in the same way:


                          0 = H0 Rd + H1 Rf X(1, ↑)
                          1 = H0 Rd + H1 Rf X(1, ↓)

implies
48     3 The Binomial Model for Other Contracts

                                  X(1, ↑)
                       H0 =
                            Rd [X(1, ↑) − X(1, ↓)]
                                     −1
                       H1 =                        ,
                            Rf [X(1, ↑) − X(1, ↓)]
so


                      W ↓ (0) = H0 + H1 X(0)
                                 1            1
                                Rd X(1, ↑) − Rf X(0)
                              =
                                 [X(1, ↑) − X(1, ↓)]
                                 1 X(1, ↑) − Rf X(0)
                                             Rd
                              =
                                Rd X(1, ↑) − X(1, ↓)
                                1−π
                              =     .
                                 Rd

As X(1, ↓) < X(1, ↑) we must also have R
                                       Rd
                                        f
                                          X(0) < X(1, ↑).
We now discuss an exchange rate contingent claim using the CRR notation.
With
                              X(1, ↑) = uX(0)
                              X(1, ↓) = dX(0)

we must have

                                       Rd
                              0<d<        < u.
                                       Rf
Then


                                       Rf − d
                                       Rd
                                  π=
                                       u−d
and
                                       u− R
                                          Rd
                              1−π =        f
                                                .
                                       u−d
Remark 3.4. In the ﬁnancial press some exchange rates are quoted in the Euro-
pean way and some in the American way. This can be confusing. The best way
to resolve this is to obtain a list world value of the US dollar which writes
1 USD in terms of all the world currencies. This is published each Monday in
the Wall Street Journal. Then all confusion can be removed. The web page
www.oanda.com/converter/classic has details for 164 currencies from about
1990 to the present.
                                                        3.3 Exchange Rates      49

Examples of FX Derivatives

Example 3.5 (European call options).
We will discuss options on the USD.
These are traded over the counter (OTC) and on some exchanges (for
example, on the Philadelphia Stock Exchange see http://www.phlx.com; see
also Hull [37]).
We wish to discuss a contract that gives the holder the right (but not the
obligation) to buy F USD at a ﬁxed exchange rate K at time T . We need to
specify the amount (face value) F , the exchange rate K and the expiry date
T . At time T , the value C(T ) of this call option is given by

                                F [X(T ) − K] if X(T ) > K
                    C(T ) =
                                0             if X(T ) ≤ K,

where X(T ) is the (directly quoted) USD/CAD exchange rate at time T . If
X(T ) > K we can buy F USD for F · K CAD, and we can sell the F USD
for F · X(T ) CAD, making a proﬁt of F · X(T ) − F · K = F [X(T ) − K]. If
X(T ) ≤ K we let the option lapse, as it is cheaper to buy the USD in the
market at rate X(T ).
We can also write

                                                  +
                           C(T ) = F [X(T ) − K] .                            (3.9)

It is convenient to use face value for the call, F = 1. The premium of this call
option is then multiplied by the face value to obtain the price of calls with
various face values F . When F = 1, the price is often quoted as a percentage
of the face value. So if the quote is 5% and the face value is 100,000 USD,
then the premium is 0.05 × 100, 000 = 5000 CAD (note the change in units).
In the one-step binomial asset pricing model we obtain

                                    π
                          C(0) =       [uX(0) − K] F.                        (3.10)
                                    Rd
Here we have used the CRR notation and we have assumed that

                              X(1, ↓) < K < X(1, ↑) .

Note that the value of this call depends on the following inputs: u, d, Rd , Rf ,
K, F , X(0).

Example 3.6 (An application of an FX call option). Suppose a Canadian com-
pany, ABC Inc., puts in a bid F for a USD denominated asset, (for example,
a warehouse to hold exports before sales to the US market), and the success
50     3 The Binomial Model for Other Contracts

or failure of the bid will not be known until time T . As of now, you will not
know the CAD amount that will have to be paid (it will be the uncertain
amount F · X(T )). To cap costs, ABC can buy a European (style) call option
with strike rate K and face value F to expire at time T . Then you need to
pay at most F · K CAD, as you will exercise the call at T if X(T ) > K to
buy the F USD for F · K CAD.

Example 3.7 (European put option). This is just the same as the European
Call Option except that the right to buy is replace by the right to sell. The
value P (T ) of the put at expiry T is given by

                                                  +
                           P (T ) = F [K − X(T )] ,                       (3.11)

where (again) the face value is F and the strike rate is K. If K > X(T ) you
can buy F USD for F · X(T ) and exercise the put to sell the F USD for F · K
to yield a proﬁt F [K − X(T )]. If, on the other hand, K ≤ X(T ), then let the
option lapse, and sell the F USD at the higher market rate X(T ).

Example 3.8 (An application of an FX put option). A Canadian export com-
pany, EXP Inc., sells goods in the United States. Every time EXP issues bills
for the export goods, it can take up to 3 months to receive payment (e.g.,
100 million USD). For 3 months time EXP will not know the CAD value of
the payments. To overcome this currency-risk problem, EXP could take out
a 3-month put option on 100 million USD (= F ) at exchange rate K (with
premium passed onto the clients, no doubt!). Then EXP will be guaranteed
at least 100 · K million CAD for the exports.

Example 3.9 (Forward exchange rate contract). Again we have long and short
contract, depending on whether one is buying or selling.
If you hold a long forward exchange rate contract, then you have the
obligation to buy a speciﬁed amount F USD at a speciﬁed exchange rate
K at time T , no matter what the actual exchange rate is at time T. No
payment is made initially, and the proﬁt at time T is F [X(T ) − K], which
can be negative. If the present value of this proﬁt is zero, then K is called the
T-forward exchange rate. The time t = 0 value of the forward contract is
0 so this forward rate K is given by

                                      Rd
                                K=       X(0).                            (3.12)
                                      Rf

Both model-dependent and model-independent proofs can be given for (3.12).

Proof (For the one-step binomial asset pricing model). Using equation (3.4),
we have
                                                      3.3 Exchange Rates      51



            1
        0=     [π(F · X(1, ↑) − F · K) + (1 − π)(F · X(1, ↓) − F · K)]
           Rd
            1                                    K
         =     [πX(1, ↑) + (1 − π)X(1, ↓)] · F −     ·F
           R                                     Rd
           d           
            X(0)      K
         =        −       · F.
              Rf     Rd

Here we used the identity

                           Rd
                    X(0)      = πX(1, ↑) + (1 − π)X(1, ↓)                  (3.13)
                           Rf
since

                                          Rf X(0) − X(1, ↓)    X(1, ↑)
                                          Rd

         πX(1, ↑) + (1 − π)X(1, ↓) =
                                                X(1, ↑) − X(1, ↓)
                                         X(1, ↑) − R
                                                   Rd
                                                    f
                                                      X(0) X(1, ↓)
                                     +
                                           X(1, ↑) − X(1, ↓)
                                       Rd
                                     =    X(0)
                                       Rf

as required.                                                                   2

Remark 3.10. Formula (3.12) is called the exchange rate (covered) inter-
est rate parity formula. Often one sets


                                  Rd = erd ∆t
                                  Rf = erf ∆t

where ∆t is the time interval (measured in years) from t = 0 to t = 1 (T = 1).
In that case

                             K = e(rd −rf )∆t X(0).                        (3.14)
There are many academic articles discussing or testing the validity of this
formula. For example, consult Anthony [2] and Jacque [40].
If rd > rf , then we might expect the exchange rate to increase (the CAD
becomes weaker with respect to USD). If this did not happen, then a U.S.-
based investor could borrow USD in the U.S. at interest rate rf , buy CAD and
invest in CAD at interest rate rd , convert back, and obtain a riskless proﬁt.
The (covered) interest rate parity formula shows a relationship between
exchange rates and interest rates in the two countries.
52     3 The Binomial Model for Other Contracts

Proof (A model-independent proof ).
                                   Rd
(a) Suppose (if possible) that K > Rf
                                      X(0), where K is the T-forward rate.
At time t = 0, borrow X(0)/Rf CAD, put 1/Rf USD (equal in value to
X(0)/Rf CAD) in a U.S. bank. Enter a T -forward contract to sell 1 USD for
K CAD at time T . The net position is

                      X(0)    1
                           −    · X(0) + 0 = 0 CAD.
                       Rf    Rf

At time t = T , repay the loan, realize 1 USD in your U.S. bank account, use
the forward contract to convert to K CAD. The net position is

                              X(0)
                          −        · Rd + K > 0 CAD
                              Rf

and so we have a certain proﬁt at time t = T with no net outlay at time t = 0.
This is an arbitrage opportunity in contradiction to the axiom.
              Rd
(b) Also, K < Rf
                 X(0) leads to a similar contradiction.
At time t = 0, borrow 1/Rf USD, convert to CAD and invest in a Canadian
bank. Enter a T -forward contract to buy 1 USD for K CAD at time T . The
net position is

                         X(0)    1
                     −        +    · X(0) + 0 = 0 CAD.
                          Rf    Rf

At time t = T , realise the bank investment, buy 1 USD for K CAD by exer-
cising the forward contract, repay the USD loan. The net position is

                           X(0)
                                · Rd − K > 0 CAD.
                            Rf

Again there is a certain proﬁt at time t = T with no net outlay at time t = 0.
This is again an arbitrage opportunity in contradiction to the axiom.       2
Thus we have proved that the assumption of non arbitrage (together with
other assumptions about no transaction costs, etc.) implies the (covered)
interest rate parity formula.

Remark 3.11. Later we shall treat exchange rate futures contracts. For
this we will need to introduce the concept of a margin account.

Example 3.12 (Calls in CAD equal puts in USD). Suppose you have a Euro-
pean call option to buy F USD using exchange rate K at time T . Then you
                                                     3.3 Exchange Rates       53

have the right to give up F · K in exchange for F USD. This is the view from
Canada.
From the U.S. point of view, this is giving up F · K CAD for F USD, so we
hold a European put option. In addition from the U.S. point of view the face
value is F · K CAD, and the strike rate is 1/K.
Let us set T = 1 and analyze this situation with the one-step binomial asset
pricing model.
From Canada
From above,


                                    πd
                           C(0) =      [uX(0) − K] · F
                                    Rd

with

                                     Rf − d
                                     Rd
                            πd =              .
                                     u−d

From United States
We need to develop the U.S.-based one-step binomial asset pricing formula.
Now all is denominated in USD, which is regarded as the domestic currency.
Let Y (t) = 1/X(t); then

                Y (1, ↑) = u Y (0)
                Y (1, ↓) = d Y (0)
                           1
                       u=
                           u
                           1
                       d=
                           d
                           Rf
                               −d
                     πf = Rd
                            u−d
                                                              
                 W (0) = 1 πf W                        (1, ↓)
                                    (1, ↑) + (1 − πf )W                  (3.15)
                           Rf

and everything is expressed in USD. So W  (0) is the value in USD of an asset
                                            (1, ↓) in ↓.
whose values at t = 1 are W (1, ↑) in ↑ and W
From the U.S. point of view the call was a put: the right to sell F · K CAD,
which is foreign currency from the U.S. point of view, for F (that is, to receive
                                1
F USD). The exchange rate is K     from the U.S. point of view. This is a put.
So
54        3 The Binomial Model for Other Contracts

                                                        +
                           (1) = F · K         1
                          W                       − Y (1)                    (3.16)
                                                K
                                        +
which is the same as F [X(1) − K]           expressed in USD. In fact it is easy to
show that

                                    +                         +
                     F [X(1) − K]                     1
                                        =F ·K           − Y (1) .
                         X(1)                         K

Then


                        (0) = P (0)
                       W
                                                      
                               πf            1
                             =     ·F ·K ·     − uY (0) .
                               Rf            K

                                                         1
We have assumed that X(1, ↓) < K < X(1, ↑) so Y (1, ↑) < K < Y (1, ↓). Note
that Y (1, ↑) < Y (1, ↓).
We now claim that
                                   
             πf           1                   πd
                ·F ·K ·     − uY (0) · X(0) =    [uX(0) − K] · F.
             Rf           K                   Rd

Both sides of this equation are denominated in CAD. Now

                                
          πf           1                   πf
             ·F ·K ·     − uY (0) · X(0) =    · F · [X(0) − uK]
          Rf           K                   Rf
                                           πf 1
                                         =    · · F · [uX(0) − K] .
                                           Rf u

We need only show that

                                     πf   πd
                                        =    .                               (3.17)
                                    uRf   Rd

In fact


                                  −1
                                R
                                f
                         πf              1
                            = R1d 1d ·
                               u − d
                        uRf            uRf
                              dRf − Rd     ud      1
                            =           ·      ·
                                Rd · d    d − u u · Rf
                                                  3.4 Interest Rate Derivatives      55

                                dRf − Rd 1    1
                           =            ·   ·
                                  d−u     Rf Rd
                                Rf − d
                                Rd
                                             1
                           =             ·
                             u−d             Rd
                             πd
                           =    ,
                             Rd

so

                                             Rf
                                πf = u ·        · πd                              (3.18)
                                             Rd
and also

                                         Rf
                         1 − πf = d ·       · (1 − πd ).                          (3.19)
                                         Rd
An interesting observation is


                             πd
                     C(0) =     [uX(0) − K] · F
                             Rd
                                                
                                  X(0)        K
                           = πf ·      − πd ·      · F,                           (3.20)
                                   Rf         Rd

and because the call (from Canada) is equivalent to a put (from U.S.) the
contract is also called USD PUT/CAD CALL to indicate that the contract
can be viewed either way (and priced in either country).



3.4 Interest Rate Derivatives

Along with FX-derivatives, interest rate derivatives are the most com-
monly traded. Together they make up probably more than 85% of all deriva-
tives traded.
An important function that we shall use is

                                    P (t, T ),

which indicates the value at time t of 1 CAD at expiry time T . If there are
two or more currencies then we write

                                   P d (t, T )
56      3 The Binomial Model for Other Contracts

for domestic and

                                            P f (t, T )                                (3.21)

for foreign (or P f1 (t, T ), P f2 (t, T ), . . ., if necessary). The quantity P (t, T ) will
be (usually) unknown until time t. It is the value at time t of a zero-coupon
bond expiring at time T with (face) value 1 USD.
P (t, T ) is a very important function and can be used to compute the present
values of known future cash ﬂows. For example, if there are known (they
are not random) cash ﬂows

                                   C1 , C2 , C2 , . . . , Cm

at future times t1 < t2 < t3 < . . . < tm , then the present (time t = 0) value
of these cash ﬂows is

         m
              Ci P (0, ti ) ≡ C1 P (0, t1 ) + C2 P (0, t2 ) + . . . + Cm P (0, tm ).
        i=1

We now discuss a binomial asset pricing model for interest rates.
Consider two times t = 0 and t = 1.
For various times T ≥ 2, there is a zero-coupon bond whose value at time
t = 0 is P (0, T ). At the future time t = 1 in the binomial model there are two
states of the world, ↑ and ↓. P (t, T ) will be uncertain and we suppose it can
have two values,

                              P (1, T, ↑)     and P (1, T, ↓).

Recall that B(0) = 1 and

                                                              1
                           B(1, ↑) = B(1, ↓) = R =                  .
                                                           P (0, 1)

The risk-neutral probabilities are


                                      P (0, T )R − P (1, T, ↓)
                                π =                                                 (3.22a)
                                      P (1, T, ↑) − P (1, T, ↓)
                                      P (1, T, ↑) − P (0, T )R
                            1−π =                               ,                   (3.22b)
                                      P (1, T, ↑) − P (1, T, ↓)

and the one-step binomial asset pricing model gives
                                                3.4 Interest Rate Derivatives      57


                               1
                    W (0) =      [πW (1, ↑) + (1 − π)W (1, ↓)]                  (3.23)
                               R
as the present value of any interest rate contingent claim W .
In particular for any other T ≥ 2 we have

                               1
                 P (0, T ) =     [πP (1, T, ↑) + (1 − π)P (1, T, ↓)]
                               R
which implies by rearrangement that, as in (3.22a),

                                 P (0, T )R − P (1, T, ↓)
                          π=                               .
                                 P (1, T, ↑) − P (1, T, ↓)

This says that under no arbitrage, the deﬁnition of π in (3.22a) above, is
independent of T . In other words, we must obtain the same value of π in
(3.22a) no matter which value of T ≥ 2 we choose.
This observation implies restrictions on the possible interest rate models in
this framework. Consider quantities R, R(1, ↑), and R(1, ↓) deﬁned as follows.
If we invest (in a bank, under interest) $1 at time t = 0 then we will have $R
at time t = 1. Likewise, if we invest $1 at time t = 1 in ↑ then we will have
$R(1, ↑) at time t = 2. If we invest $1 at time t = 1 in ↓ then we will have
$R(1, ↓) at time t = 2.
Consequently,


                                    1
                       P (0, 1) =                                               (3.24)
                                    R
                                                     
                                    1   π      1−π
                       P (0, 2) =            +          .                       (3.25)
                                    R R(1, ↑) R(1, ↓)

This implies that, if we are given R and π, then we cannot select R(1, ↑) and
R(1, ↓) in an arbitrary way, but there are still inﬁnitely many choices in (3.25)
for R(1, ↑) and R(1, ↓) under this restriction.
We now describe some choices.
Choice 1 (Ho and Lee)
Given π and k we assume that R(1, ↑) = kR(1, ↓), then

                                                    
                                1   π       (1 − π)k
                     P (0, 2) =           +
                                R R(1, ↑)    R(1, ↑)
                                1                  1
                              = [π + (1 − π)k] ·         ,
                                R                R(1, ↑)
58     3 The Binomial Model for Other Contracts

from which we solve for R(1, ↑) and then R(1, ↓) = k1 R(1, ↑).
If we write


                                      R = 1 + r(0)
                                 R(1, ↑) = 1 + r(1, ↑)
                                 R(1, ↓) = 1 + r(1, ↓)

then we can deduce relationships between interest rates r(1, ↑) and r(1, ↓).
Some references for this model are Panjer et al. [59], Ho and Lee [33] and
Pedersen et al. [60].
Choice 2 (Black, Derman and Toy)
Given π and σ(1) > 1, we assume that

                               r(1, ↑) = σ(1)r(1, ↓).

We then solve for r(1, ↓) in
                                                           
                              1       π           1−π
                 P (0, 2) =                    +
                              R 1 + σ(1)r(1, ↓) 1 + r(1, ↓)

and set r(1, ↑) = σ(1)r(1, ↓).
References for this model include Panjer [59] and Black, Derman and Toy [7].

Remark 3.13. In Choice 1, the Ho and Lee model, k is a measure of volatility
(spread) of the interest rates. The larger the value of k the larger the diﬀerence
between R(1, ↑) and R(1, ↓) and, hence, the larger the diﬀerence between
r(1, ↑) and r(1, ↓). The same comment can be made about σ(1) in Choice 2.

Example 3.14 (Ho and Lee).
Given P (0, 1) = 0.95, P (0, 2) = 0.90, π = 0.5, k = 1.04, then


                          1
                    R=        = 1.05263...
                         0.95
                 r(0) = R − 1 = 0.05263... = 5.263%
                         π + (1 − π)k
               R(1, ↑) =               = 1.07666...
                          R · P (0, 2)
               r(1, ↑) = R(1, ↑) − 1 = 0.07666... = 7.666...%
                         R(1, ↑)
               R(1, ↓) =         = 1.035256...
                          1.04
               r(1, ↓) = R(1, ↓) − 1 = 0.035256... = 3.5256...%.
                                                3.4 Interest Rate Derivatives      59

Example 3.15 (Black, Derman and Toy). Given P (0, 1) = 0.95, P (0, 2) = 0.90,
π = 0.5, σ(1) = 1.1, we solve
                                                                
                                         0.5          0.5
                  0.90 = 0.95                     +                             (3.26)
                                    1 + 1.1r(1, ↓) 1 + r(1, ↓)

to give


               r(1, ↓) = 0.05292... = 5.292..%
               r(1, ↑) = σ(1)r(1, d) = 0.058212... = 5.8212...%.

Here equation (3.26) can be solved for r(1, ↓) in various ways: solution of
quadratic formula, interval division method, Newton-Raphson method, etc.

Example 3.16 (Forward contracts). Consider a long forward contract agreeing
to buy a zero-coupon bond with maturity T at time t = 1 for $K CAD. (We
assume that T ≥ 2). If this contract is entered by no payment of premium,
then the present value of this contract is zero. Therefore, the rational price is

                                         P (0, T )
                                    K=             .                            (3.27)
                                         P (0, 1)

This result can be shown in any model, so again this result is model-
independent.

Proof ( of equation 3.27). (a) Assume (if possible) that

                                P (0, T )
                                          − K > 0.                              (3.28)
                                P (0, 1)

At t = 0, short sell one T-zero, invest K · P (0, 1) in a bank (or equivalently,
buy K 1-zeros), enter a long forward to buy a T-zero at t = 1 for K CAD.
The net proceeds at t = 0 are P (0, T ) − K · P (0, 1) + 0 > 0 by (3.28). Pocket
this proﬁt.
At time t = 1, use the forward contract to purchase the zero-coupon bond
and return it; this is funded from the investment K. There are no unfunded
liabilities at time t = 1, so we have created an arbitrage. This shows that
(3.28) must be false.
(b) Assume (if possible) that

                                       P (0, T )
                                K−               > 0.                           (3.29)
                                       P (0, 1)
60     3 The Binomial Model for Other Contracts

At t = 0, borrow K · P (0, 1), (or short sell K 1-zeros), purchase one T-zero,
enter a short forward contract to sell one T-zero at time t = 1 for K CAD.
The net proceeds at t = 0 are −P (0, T ) + K · P (0, 1) + 0 > 0 by (3.29). Pocket
this proﬁt.
At time t = 1, use the forward contract to sell the T-zero for $K, use this to
repay the loan $K. There are no unfunded liabilities at time t = 1, so we have
created an arbitrage. This shows that (3.29) must be false.
From (a) and (b), we have established the result.                                2

Example 3.17 (European options). Consider the option to purchase a T -zero
at time t = 1 for $K, where T ≥ 2. The value at time t = 1 is

                                                     +
                            C(1) = (P (1, T ) − K) ,

and if P (1, T, ↑) < K < P (1, T, ↓), then the value is given as

                                  1−π
                         C(0) =       [P (1, T, ↓) − K]
                                   R
in the one-step binomial asset pricing model. Recall that there is an inverse
relationship between bond prices and interest rates.
Likewise the corresponding European put option has present value

                                    π
                          P (0) =     [K − P (1, T, ↑)] .
                                    R
Combining these call and put formulae:

                                          K
             C(0) − P (0) = P (0, T ) −     = P (0, T ) − KP (0, 1).        (3.30)
                                          R
This equation can also be proved using a model-independent argument. Here
are some of the details. If

                   C(0) − P (0) − P (0, T ) + K · P (0, 1) > 0,             (3.31)

then at time t = 0, short sell one call, buy a put, buy a T -zero, borrow
K · P (0, 1) (short sell K 1-zeros). Pocket the net proﬁt.
At time t = 1, cash settle the call, realize the value of the put, sell the T-zero,
repay the loan. The net of all of this is

                            +                    +
           − (P (1, T ) − K) + (K − P (1, T )) + P (1, T ) − K = 0,

which can be seen by considering P (1, T ) > K and P (1, T ) ≤ K.
The reverse inequality in (3.31) can be established by a similar argument.
                                                               3.5 Exercises   61

Example 3.18 (Numerical example). Let us suppose that r(0) = 3%, r(1, ↑) =
4%, r(1, ↓) = 2%. Let us suppose that time interval from t = 0 to t = 1 is one
           1
month or 12  years. We also know that P (0, 2) = 0.9950, K = 0.997. We wish
to ﬁnd C(0) if

                                                     +
                            C(1) = (P (1, 2) − K) .

Now


                               0.03                    1
                    R = 1+           = 1.0025 =
                                12                  P (0, 1)
                              1
            P (1, 2, ↑) =            = 0.99667774 . . .
                          1 + 0.04
                                12
                              1
            P (1, 2, ↓) =            = 0.99833610 . . .
                          1 + 0.02
                                12
                          P (0, 2)R − P (1, 2, ↓)
                      π=                             = 0.511712131 . . .
                          P (1, 2, ↑) − P (1, 2, ↓)
                            0,                   in ↑
                 C(1) =
                            0.001336106 . . . , in ↓
                          1−π
                 C(0) =          [P (1, 2, ↓) − K]
                            R
                        = 0.0006507777 . . .
                       = 0.065%
                       = 6.5 basis points.

If the face value were $1000 then K = $997 and the value of the (call) option
would be $0.00065 × 1000 = $0.65 = 65 cents.

Remark 3.19. We shall return to interest rate concepts after we have discussed
multi-period models.
Let us note an interesting diﬀerence between stock prices and interest rates. If
we know a stock price at t = 0, then we cannot know its price with certainty
at t = 1, but if we invest $1 at t = 0 then we know the value of this investment
at t = 1 (though at t = 0 we will not know its value at t = 2). We sometimes
say that interest rates are predictable processes: The interest payable at time
t is known at time t − 1.


3.5 Exercises

Exercise 3.20. Suppose we have a market with two tradeable assets (as in
the basic model of the previous chapter). For the risky asset we have S̃ with
62      3 The Binomial Model for Other Contracts

S̃(0) = 0, S̃(1, ↑) > 0 and S̃(1, ↓) < 0. The riskless asset is the same as before.
Now derive again (2.12) but using S̃ in place of S. Give an example for S̃.

Exercise 3.21 (Forward contract). Recall that a forward contract is an
agreement to buy or sell an asset at a certain future time for a certain price (the
delivery price). At the time the contract is entered into, the delivery price is
chosen so that the value of the forward contract to both parties is zero. This
means it costs nothing to take either a long or short position in a forward
contract. If you hold the long position with the obligation to buy S at time
T with delivery price K, draw a graph of your proﬁt at time T . Explain how
a forward contract can be used for either speculation or hedging. If you are
bullish about S, you could take long positions in either call options or forward
contracts. Discuss the similarities and diﬀerences, including a discussion of
diﬀerences in risks taken with these two strategies.

Exercise 3.22. Consider again the one-period binomial asset pricing model.
For a stock, let us write S(0) = S, S(1, ↑) = S(↑) and S(1, ↓) = S(↓). (Assume
here that S(↑) > S(↓)). Let F be the t = 1 forward price of the stock. Let C
be the (t = 0) value of the ATM call on the stock. Let (as usual) R be the
value in CAD at t = 1 of 1 CAD at t = 0. Show the following:

 1. S(↓) < F < S(↑)
 2. RC < F < RC + S
 3. Given the relationships

                              S 2 = S(↑)S(↓)
                               F = πS(↑) + (1 − π)S(↓)
                                    π
                               C = (S(↑) − S)
                                    R
     ﬁnd π, S(↑) and S(↓) in terms of S, R, F, C. Hint: Show that

                                          S[R C + S]
                                 S(↑) =                                     (3.32)
                                           F −R C
     and that the right hand side of (3.32) exceeds F . This leads to an alter-
     native calibration of the the binomial asset pricing model.

Remark 3.23. This is the basis of an idea used by Derman and Kani of
Goldman-Sachs (NY) in 1994 [24]. The idea is that S, R, F, C are market
information that will allow us to compute the possible values S(↑) and S(↓).

Exercise 3.24. Study Examples 3.5–3.8.
                                                              3.5 Exercises      63

For Exercises 3.25 and 3.26 you should use the following informa-
tion.
The two currency problems below are modelled in a one-step binomial asset
pricing model.
X(0), X(1, ↑) and X(1, ↓) will refer to USD/CAD exchange rates (directly
quoted), and J(0), J(1, ↑) and J(1, ↓) will refer to JPY/CAD exchange rates
(directly quoted). JPY is the abbreviation for the Japanese yen.
Write Rd (resp., Ra , Rj ), for the values at t = 1 in CAD (resp., USD, JPY),
of one CAD (USD, JPY). The 30-day annual interest rates for the various
currencies are 5.12%, 5.74% and 0.65%, respectively. So Rd = 1 + 0.051212  ≈
1.004267, Ra ≈ 1.004783 and Rj ≈ 1.000542.
Suppose X(0) and J(0) were 1.2195 (about 82 cents), and 0.011377 (about
88 JPY to CAD). Take X(1, ↓) = 1.2821 and J(1, ↓) = 0.012599. We shall
take X(1, ↑) = 1.1905, which corresponds to 84 cents. We shall also use the
notation


X(1, ↑) = ua X(0), X(1, ↓) = da X(0), J(1, ↑) = uj J(0), J(1, ↓) = dj J(0).

Exercise 3.25 (Call-put parity for currency options). Let P (0) (resp.,
C(0)) be the present (t = 0) value of a put (call) option to sell (resp., buy)
1 USD for K CAD (exchange rate K) at time t = 1. If the current exchange
rate is X(0), show that

                                           X(0)   K
                        C(0) − P (0) =          −    .                        (3.33)
                                            Ra    Rd
You can use either a model-independent argument or the appropriate pricing
formulae from the one-step binomial asset pricing model.
Find the value (at t = 0) of the call option to buy 1 USD at time t = 1 for
1.2195 CAD. For this you will need the appropriate pricing formula

                                πf (1, ↑) + (1 − π)f (1, ↓)
                      f (0) =                                                 (3.34)
                                            Rd
where

                                      Rd
                                         − da
                             π ≡ πa = Ra      .                               (3.35)
                                      ua − da

Use equation (3.34) to price the corresponding put option to sell 1 USD at
time t = 1 for 1.2195 CAD. When you have done this, verify the formula
(3.33).
64      3 The Binomial Model for Other Contracts

Exercise 3.26. 1. Let πa (the American π) be given by (3.35), and πj (the
   Japanese π) be given the same formula but with all a replaced by j. Deﬁne
   the two Arrow-Debreu securities for the up and down states at t = 1. Give
   the price at t = 0 of the up Arrow-Debreu security using (a) the American
   exchange rates and (b) the Japanese exchange rates. Deduce that πa = πj .
 2. Use 1. to show that J(↑) ≈ 0.011111.
 3. Use (assume valid) the interest parity formula to compute the t = 1
    forward exchange rates for USD/CAD, JPY/CAD and USD/JPY.
 4. Canadian Corporation (CC) owns factories in both Japan and in the
    United States. Today (t = 0) the treasurer of CC goes to merchant bank
    XYZ to buy an option giving her the right to sell 10 million JPY for
    93,688 USD at t = 1. By this she hopes to transfer cash from Japanese
    operations to the U.S. at about the forward rate. Show that the value of
    this option at t = 1 is (in CAD)
                                                       +
                       [−10, 000, 000J(1) + 93, 688X(1)] .

     Find the value of this option in CAD at t = 0.
4

Multiperiod Binomial Models




There are basically two types of trees that we shall consider:

•   recombining trees, and
•   non-recombining trees.

The latter will be used when we discuss path-dependent options. For now
we shall consider only recombining trees, though the general methodology will
be the same for both.



4.1 The Labelling of the Nodes

Each node in the tree has a label (n, j). The label n stands for time n =
0, 1, 2, 3, . . ., and j numbers the states j = 0, 1, 2, . . . , n. At times t = n there
are thus n + 1 states. If you are at node (n, j) at time t = n then at time
t = n + 1 one may be in either (n + 1, j + 1) or (n + 1, j).
Here we have generalized the one-step model notation. If we are at time t = 0
in (0, 0) then at time t = 1 we can be in (1, ↑) or (1, ↓), which we now label
as (1, 1) or (1, 0). From the point of view of node (n, j), node (n + 1, j + 1) is
↑ and (n + 1, j) is ↓.
An interpretation of node (n, j) is the following. We are at time t = n and
we moved there with j up-movements to get to this node. With recombining
trees, there are many ways to reach node (n, j).



4.2 The Labelling of the Processes

In state (n, j) the stock price, exchange rate, etc. will be denoted by S(n, j),
X(n, j) and so on.
66      4 Multiperiod Binomial Models
      (n)
By Pj (T ) we will mean the value at time t = n in state j of $1 at time
t = T + n (T periods after t = n).
Let R(n, j) ≡ 1 + r(n, j) be the value at time t = n + 1 of $1 invested in a
bank at time t = n in (n, j) and held until time t = n + 1. The quantity r(n, j)
is the interest that can be received at time t = n + 1 starting at time t = n in
(n, j).
We shall also let λ(n, j) denote the value at time t = 0 of the Arrow-Debreu
security that pays $1 at time t = n in state j and $0 (zero) at time t = n in
any other state.
For m ≤ n we shall later also use the notation A(m, i, n, j) to denote the value
at time t = m in state i of the (Arrow-Debreu) security that pays at time
t = n, $1 in state j and nothing in the other states at t = n. Of course, this
notation generalizes λ and clearly λ(n, j) = A(0, 0, n, j).



4.3 Generalized Quantities

For Stocks
We deﬁne


                                       S(n + 1, j + 1)
                           u(n, j) =                                         (4.1a)
                                          S(n, j)
                                       S(n + 1, j)
                           d(n, j) =                                         (4.1b)
                                        S(n, j)
                                       R(n, j) − d(n, j)
                           π(n, j) =                     .                   (4.1c)
                                       u(n, j) − d(n, j)

To avoid arbitrage, restrictions must be placed on the multiperiod model. This
requires that

                                 0 < π(n, j) < 1

hold for all (n, j). Thus, restrictions on R(n, j), u(n, j) and d(n, j) are required
by (4.1c), or equivalently on the S(n, j).
For Currencies
Similar multiperiod quantities can be written for currencies, where we use X
in place of S and the deﬁnition of π(n, j) involves a Rd (n, j) and an Rf (n, j),
so
                     4.4 Generalized Backward Induction Pricing Formula        67

                                       X(n + 1, j + 1)
                           u(n, j) =                                       (4.2a)
                                          X(n, j)
                                       X(n + 1, j)
                           d(n, j) =                                       (4.2b)
                                        X(n, j)
                                       Rd (n,j)
                                       Rf (n,j) − d(n, j)
                           π(n, j) =                        .              (4.2c)
                                       u(n, j) − d(n, j)

Again restrictions must apply so that 0 < π(n, j) < 1.
For Bonds
We may choose (any) T ≥ 2 and deﬁne

                               Pjn (T ) · R(n, j) − Pjn+1 (T − 1)
                   π(n, j) =                                                 (4.3)
                                 n+1
                                Pj+1 (T − 1) − Pjn+1 (T − 1)

which is a generalization of (3.22a). Again, restrictions must apply so that
0 < π(n, j) < 1.



4.4 Generalized Backward Induction Pricing Formula

In any application (with the appropriate deﬁnitions of π) we have the back-
ward induction pricing formula.


                  1
   W (n, j) =           [π(n, j)W (n + 1, j + 1) + (1 − π(n, j))W (n + 1, j)] .
                R(n, j)
                                                                             (4.4)
Also note the formula

                                       N
                         W (0, 0) =         λ(N, j)W (N, j).                 (4.5)
                                      j=0

This expresses the value of W at time t = 0 in terms of the possible values
of W at time t = N . Later we shall give Jamshidian’s forward induction
formula [41] for the computation of the values of λ(n, j). Of course λ(1, 0) =
W ↓ (0) and λ(1, 1) = W ↑ (0), which we used earlier.
68     4 Multiperiod Binomial Models

4.5 Pricing European Style Contingent Claims

In this case the

                         W (N, j) for j = 0, 1, 2, . . . , N

are given for some future time N . For example, in the case of the European
call stock option expiring at time t = N with strike price K, we have

                                          +
             W (N, j) = [S(N, j) − K]          for j = 0, 1, 2, . . . , N.

We can now use the backward induction formula (4.4) to compute W (n, j) for
each n < N and j = 0, 1, 2, . . . , n. In particular we can ﬁnd W (0, 0).



4.6 The CRR Multiperiod Model

The CRR model is basically the simplest constant model. Here we assume
that there are real numbers

                                 0 < d < R < u.

For all (n, j) we assume


                              u(n, j) = u                                    (4.6a)
                             d(n, j) = d                                     (4.6b)
                             R(n, j) = R                                     (4.6c)
                                               R−d
                              π(n, j) = π =        .                         (4.6d)
                                               u−d

With S(0, 0) = S

                     S(n, j) = S(0, 0)uj dn−j ≡ Suj dn−j

and

                        1
           W (n, j) =     [πW (n + 1, j + 1) + (1 − π)W (n + 1, j)] .
                        R
This recursion has an explicit solution,
                                    4.7 Jamshidian’s Forward Induction Formula         69
                                            N
                                     1
                      W (0, 0) =                ClN π l (1 − π)N −l W (N, l).        (4.7)
                                    RN
                                         l=0

For some intermediate time n, 0 ≤ n ≤ N ,

                                      N −n
                                1
              W (n, j) =                     ClN −n π l (1 − π)N −n−l W (N, j + l)   (4.8)
                              RN −n
                                      l=0

for j = 0, 1, 2, . . . , n.
Here,

                     k!       k(k − 1)(k − 2) · · · (k − l + 1)
         Clk ≡              =                                   for 0 ≤ l ≤ k,
                 l!(k − l)!     l(l − 1)(l − 2) · · · 3 · 2 · 1
is one of the binomial coeﬃcients. There are various proofs of (4.7) and (4.8).
The CRR paper gives the usual one, which we now illustrate with N = 2.
There is also a modern proof using Jamshidian’s forward induction.
For the CRR proof


                      π            (1 − π)
        W (1, 1) =      W (2, 2) +         W (2, 1)
                      R               R
                      π            (1 − π)
        W (1, 0) =      W (2, 1) +         W (2, 0)
                      R               R
                     π            (1 − π)
        W (0, 0) =     W (1, 1) +         W (1, 0)
                     R              R                
                     π π              (1 − π)
                   =       W (2, 2) +         W (2, 1)
                     R R                  R
                                                             
                       (1 − π) π              (1 − π)
                     +             W (2, 1) +         W (2, 0)
                          R      R               R
                      1                                                   
                   = 2 π 2 W (2, 2) + 2π(1 − π)W (2, 1) + (1 − π)2 W (2, 0)
                     R
and so on. One can use the principle of mathematical induction to es-
tablish the general result (4.8).



4.7 Jamshidian’s Forward Induction Formula

Recall λ(n, j) is the value at t = 0 of the Arrow-Debreu security that pays $1 at
t = n in state j and $0 in any other state. We now obtain a forward induction
formula to compute λ(n, j) for each (n, j), the so called state prices.
70     4 Multiperiod Binomial Models

We start with

                                      λ(0, 0) = 1.                          (4.9)

For convenience we set λ(n, j) = 0 whenever j < 0 or j > n.
Then


             1 − π(n − 1, j)               π(n − 1, j − 1)
 λ(n, j) =                   λ(n − 1, j) +                 λ(n − 1, j − 1) (4.10)
               R(n − 1, j)                 R(n − 1, j − 1)

since the Arrow-Debreu security that pays $1 at (n, j) is the same as (see
(4.4)) the security that has payoﬀ at t = n − 1
                                   ⎧
                                   ⎪
                                   ⎪ 0                if k > j
                                   ⎪
                                   ⎪   −     −
                                   ⎪
                                   ⎪ 1   π(n    1, j)
                                   ⎨                  if k = j
                    W (n − 1, k) =     R(n − 1, j)                        (4.11)
                                   ⎪
                                   ⎪ π(n − 1, j − 1)
                                   ⎪
                                   ⎪                  if k = j − 1
                                   ⎪
                                   ⎪ R(n − 1, j − 1)
                                   ⎩
                                     0                if k < j − 1.

in the case that 1 ≤ j ≤ n − 1. The result now follows from (4.5) with the
choice N = n − 1.
In the case j = 0 we replace (4.11) by
                                    ⎧
                                    ⎨0               if k > 0
                      W (n − 1, k) = 1 − π(n − 1, 0)                      (4.12)
                                    ⎩                if k = 0.
                                       R(n − 1, 0)

In the case j = n we replace (4.11) by
                                  ⎧
                                  ⎨ π(n − 1, n − 1)
                                                    if k = n − 1
                    W (n − 1, k) = R(n − 1, n − 1)                        (4.13)
                                  ⎩
                                    0               if k < n.

and use (4.5) as before with N = n − 1.

Remark 4.1. Another proof makes use of the observation that
             n
W (0, 0) =         λ(n, j)W (n, j)
             j=0
             n−1
        =          λ(n − 1, k)W (n − 1, k)
             k=0
                                             4.8 Application to CRR Model      71
            n−1
                  λ(n − 1, k)
        =                     [π(n − 1, k)W (n, k + 1)+(1 − π(n − 1, k)W (n, k)] .
                  R(n − 1, k)
            k=0

We now compare the coeﬃcient of W (n, j) in the ﬁrst and last lines.



4.8 Application to CRR Model

The Jamshidian forward induction formula is (with λ(0, 0) = 1 and π = R−d
                                                                      u−d )


              ⎧π
              ⎪
              ⎪    λ(n − 1, n − 1)                    if j = n
              ⎪
              ⎪ R
              ⎪
              ⎪
              ⎪
              ⎨1−π                  π
    λ(n, j) =         λ(n − 1, j) +   λ(n − 1, j − 1) if 1 ≤ j < n          (4.14)
              ⎪
              ⎪   R                 R
              ⎪
              ⎪
              ⎪
              ⎪
              ⎪
              ⎩ 1 − π λ(n − 1, 0)                     if j = 0.
                  R

We now ﬁnd the solution of (4.14). It is provided by the following lemma.

Lemma 4.2.
                          λ(n, j) = Cjn π j (1 − π)n−j R−n ,                (4.15)
               n!
where Cjn = j!(n−j)! is the binomial coeﬃcient. (For a discussion of binomial
coeﬃcients see Appendix A).

Proof. We shall prove (4.15) by the principle of mathematical induction. The
formula (4.15) clearly holds when n = 0 (and j = 0).
Now assume that (4.15) holds when n = k ≥ 0 and for j = 0, 1, 2, . . . , k.
Now let n = k + 1 and 1 ≤ j ≤ k; then


                               1−π               π
                  λ(k + 1, j) =      λ(k, j) +      λ(k, j − 1)
                                 R              R        
                               1 − π Cjk π j (1 − π)k−j
                             =
                                 R             Rk
                                                               
                                   π Cj−1k
                                             π j−1 (1 − π)k−j+1
                                 +
                                   R                Rk
                                k        
                                       k
                             = Cj + Cj−1    π j (1 − π)k−j+1 R−k−1
                             = Cjk+1 π j (1 − π)k−j+1 R−k−1 .
72      4 Multiperiod Binomial Models

So (4.15) also holds for n = k + 1 and j = 1, 2, 3, . . . , k. We must check it
holds when j = 0 and j = k + 1. In fact


                                       1−π
                      λ(k + 1, 0) =           λ(k, 0)
                                         R
                                       1−π k
                                     =        C0 (1 − π)k R−k
                                         R
                                     = C0k+1 (1 − π)k+1 R−k−1

since C0k+1 = C0k = 1. Also


                                               π
                       λ(k + 1, k + 1) =         λ(k, k)
                                               R
                                               π k k −k
                                             = Ck π R
                                               R
                                                 k+1 k+1 −k−1
                                             = Ck+1 π    R

       k+1
since Ck+1 = Ckk = 1.
In summary, (4.15) holds for n = 0 and for n = k + 1 whenever it holds for
n = k ≥ 0. The principle of mathematical induction then implies that it holds
for all integers n = 0, 1, 2, . . ..                                       2

Corollary 4.3. In the CRR model we have
                                      N
                                1
                  W (0, 0) =                ClN π l (1 − π)N −l W (N, l).   (4.16)
                               RN
                                      l=0


Proof. We use

                                            N
                           W (0, 0) =             λ(N, l)W (N, l)
                                            l=0

and the formula for λ(N, l) = ClN π l (1 − π)N −l R−N .

Corollary 4.4. In the CRR model we have

                             N −n
                       1
        W (n, j) =                  ClN −n π l (1 − π)N −n−l W (N, j + l)   (4.17)
                     RN −n
                             l=0

for 0 ≤ n ≤ N and j = 0, 1, 2, . . . , n.
                                         4.9 The CRR Option Pricing Formula      73

Proof. We can simply apply Corollary 4.3 by looking at the tree with vertices
(n, j), (N, j), (N, N ), and think of (n, j) as (0, 0) and have an N − n step tree.
More formally, let M = N − n and V (k, l) ≡ W (k + n, l + j), then V satisﬁes
the backwardization formula (4.4), and hence from Corollary 4.5,

                                          M
                           V (0, 0) =           λ(M, l)V (M, l)
                                          l=0

and this is just (4.16).



4.9 The CRR Option Pricing Formula

We now use this theory to write down the European call price in the multi-
period CRR model. Recall

                                        +               +
                 C(N, l) = [S(N, l) − K] = Sul dN −l − K

with S = S(0, 0). We assume SdN < K < SuN and leave the other cases to
the remarks below. Then


                            1
                                N
                                                                       +
             C(0, 0) =                ClN π l (1 − π)N −l Sul dN −l − K
                           RN
                                l=0

                            1
                                N
                                                                      
                     =                ClN π l (1 − π)N −l Sul dN −l − K ,
                           RN
                                l=a


where a is the (unique) least integer so that


                           l ≥ a implies Sul dN −l > K
                           l < a implies Sul dN −l ≤ K.

As
                                                       u l
                                Sul dN −l = SdN
                                                       d
with ud > 1, so Sul dN −l is an increasing function of l. Therefore, a exists.
We can write
74      4 Multiperiod Binomial Models

                                                       K
                             C(0, 0) = SJ1 −              J2
                                                       RN
where


                                  N
                            1
                    J1 =                ClN π l (1 − π)N −l ul dN −l
                           RN
                                 l=a
                           N            πu l  (1 − π)d N −l
                       =         ClN
                                         R              R
                           l=a


and

                                    N
                           J2 =          ClN π l (1 − π)N −l .
                                  l=a

Note that

                                 πu (1 − π)d
                                   +         =1
                                 R     R
so we can write

                             πu                          (1 − π)d
                      π =      ,          1 − π =               .     (4.18)
                             R                              R
It is now convenient to make a deﬁnition.

Deﬁnition 4.5. For 0 < p < 1, set

                                          n
                       Φ[a; n, p] =            Cln pl (1 − p)n−l        (4.19)
                                         l=a


Remark 4.6. Φ[a; n, p] is called the complementary binomial distribution
function. We have


                     Φ[0; n, p] = 1                                     (4.20)
                                             a−1
                     Φ[a; n, p] = 1 −               Cln pl (1 − p)n−l
                                              l=0
                                  ≡ 1 − Fn (a),                         (4.21)
                                    4.10 Discussion of the CRR Formula      75

where Fn is called the binomial distribution function.
Toss a (biased) coin n times. If the probability of a head is p, and the prob-
ability of a tail is 1 − p, then the probability that the number of heads in n
tosses is less than a is given by Fn (a).

Theorem 4.7.

                  C(0, 0) = SΦ[a; N, π  ] − KR−N Φ[a; N, π]             (4.22)

where a is the least integer with S(N, a) > K, π  = πu
                                                     R .


Remark 4.8. Formula (4.22) is the CRR formula for value of a European call
option.
If K ≥ SuN then C(0, 0) = 0.
If K ≤ SdN then C(0, 0) = S − KR−N , as C(N, l) ≡ S(N, l) − K for all l.



4.10 Discussion of the CRR Formula

Point 1
We can also price the European put options via the call-put parity formula
for European options or in a direct way. In fact

                  P (0, 0) = KR−N Ψ [a; N, π] − SΨ [a; N, π  ]          (4.23)

where

                          Ψ [a; N, p] ≡ 1 − Φ[a; N, p].                  (4.24)

Point 2—What is π  ?
Recall the formulae (4.18) for π  and 1 − π  . These can be compared with
the formulae (3.18) and (3.19) in Section 3.3 where we discussed change of
numeraires (when using either CAD or USD as the domestic currency) in
exchange rate models. In fact if Rf = 1, then formulas (3.18) and (3.19) are
exactly the same as (4.18). If π is the risk-neutral probability (of upstate)
when CAD is the numeraire, π  is the risk-neutral probability (of upstate)
when stock price is the numeraire. The proof is exactly the same as in the
exchange rate example.
For completeness we write out some details.
In the one-step binomial model let B     = S ≡ 1 and S = B . Then the stock
                                             S              S
becomes the riskless asset, and the riskless asset becomes risky.
76     4 Multiperiod Binomial Models


B(0)         ↑) = 1, B(1,
     = 1, B(1,         ↓) = 1. Thus R = 1. S(0)
                                                    1
                                                  = S(0)    ↑) =
                                                         , S(1,
R
u S(0) ≡ u 
         S(0),  ↓) = S(0)
                S(1,   R 
                           d≡ dS(0).
                                
So under this numeraire, the risk-neutral (up-) probability is


                                − d
                               R
                         =
                         π
                                − d
                               u
                             1− R
                           = R dR
                             u − d
                                  
                             u R−d    u
                           =         = π = π
                             R u−d    R

and also

                                   d
                         1−π
                           =        (1 − π) = 1 − π 
                                   R
as claimed.
In the multistep binomial model, B(n, j) = Rn , and with stock price as
numeraire we have B(n,                 j) = B(n,j) ≡ Rn , and again
                   j) = S(n,j) ≡ 1, S(n,
                          S(n,j)                   S(n,j) S(n,j)
                           (n, j) ≡ π  for all (n, j).
with the CRR model we have π
Point 3—What is Φ[a; N, π]?
If we deﬁne

                                     
                 P π S(N ) = Sul dN −l = ClN π l (1 − π)N −l

then

                         Φ[a; N, π] = P π [S(N ) > K]

and

                                          
                       Φ[a; N, π  ] = P π [S(N ) > K] .

Point 4—Black and Scholes Formula
Let us make the deﬁnitions


                                      T
                               ∆t =
                                      N
                                        4.10 Discussion of the CRR Formula      77

                                R = exp(r∆t)

                                         √
                                u = exp(σ ∆t)

                                          √
                                d = exp(−σ ∆t)

where r is the risk-free interest rate that applies over the interval [0, T ] for
continuous compounding. (If interest r is accumulated over a year and the
interest is added and compounded every n-th part of the year then $1 becomes
$(1 + nr )n . In the limit this is er , and over a time period T , $1 “continuously
compounded” becomes $erT . ) The constant σ > 0 is called the volatility.
We then let N → ∞ in the CRR model. It can then be shown that

                       C(0, 0) → SN (d1 ) − Ke−rT N (d2 )                    (4.25)

where
                                             x
                                   1                  1   2
                          N (x) = √                e− 2 y dy
                                    2π        −∞

and


                         e−rT = R−N
                                        S
                                   ln         + (r + 12 σ 2 )T
                            d1 =        K
                                                √
                                              σ T
                                        S
                                   ln   + (r − 12 σ 2 )T
                            d2 =        K
                                          √
                                        σ T
                                       √
                               = d1 − σ T .

A proof of this is given in the CRR paper, but we give an alternative proof
in Appendix A on The Binomial Distribution, where we use the Berry-
Esséen Theorem.
For large N


                              Φ[a; N, π  ] ≈ N (d1 )
                              Φ[a; N, π] ≈ N (d2 ).
78     4 Multiperiod Binomial Models

Remark 4.9. The Black and Scholes formula, or perhaps better, the Black,
Scholes and Merton formula, was presented in Black and Scholes [8] and Mer-
ton [53] using continuous time stochastic calculus methods. F. Black died in
1995, but M. Scholes and R. Merton received the Nobel Prize for Economics
in 1997 for this work. In the 1970s, economists were not conversant with the
mathematical tools used, so Cox, Ross and Rubinstein, wrote the paper [18]
in which they rederived the Black and Scholes formula as a limit from the bi-
nomial model. The CRR paper is one of the most cited papers in the ﬁnance
literature.


4.11 Exercises

Exercise 4.10. Show how formulae (4.7) and (4.8) follow from (4.4).

Exercises 4.11–4.14 use the data: S(0, 0) = 90, r = 8%, T = 1, N = 10,
∆t = 0.1, and various choices for σ.

Exercise 4.11. Produce a spreadsheet to price the American put option with
strike price K = 100. The answer should be $3.08 (to the nearest cent). Now
modify inputs for S, r, K = 90 and produce a modiﬁed spreadsheet. Now
compute the value of this same American put option when σ = 20%, 25%,
and ﬁnd the value of σ correct to four signiﬁcant ﬁgures so that the price of
the American put option is $5.00.
Calculate the European put option for the same data and various choices of σ.
Also compute the early exercise premia in these cases (the diﬀerence between
the American put value and the European put value).

Exercise 4.12 (The chooser option). This is also called the As You
Like It option. The chooser option is discussed in Hull, [37] pages 461–2.
Consider European call and put options both expiring at T = 1. A chooser
option involves three dates, t = 0, t = S, and t = T > S. At t = 0 you
purchase the chooser option which gives you the right to either a European
put option or a European call option at t = S, both of which expire (with
the same strike price) at t = T . To value the chooser option, we ﬁrst compute
P (S, j) and C(S, j), the put and call prices at t = S, then set W (S, j) =
max [P (S, j), C(S, j)]. Then compute W (0, 0) by usual backwardization. Use
the same data as above with K = 90 and S = 0.5 (n = 5) and σ = 20% to
evaluate the chooser option.

Remark 4.13 (The chooser option). You may be interested in a chooser option
if a signiﬁcant event (company takeover, etc.) were to occur at t = S. You
may wish to have either the option to sell your stock at T for K if events
are bad, or buy at T for K if events are good. Zhang [79] has the whole of
Chapter 23 on the chooser option for those who wish to read more.
                                                           4.11 Exercises       79

Exercise 4.14 (Option on an option). Let us study the call option on
a call option, although there are obviously many other combinations. These
come under the title of compound options and were ﬁrst studied by Geske
[31]. We again need three dates as in (4.12). Suppose C(T ) = (S(T ) − K)+ , or
in binomial tree notation C(N, j) = (S(N, j)−K)+ . We then compute C(S, j)
for each j = 0, 1, 2, . . . , S, and set W (S, j) = (C(S, j) − L)+ . Now compute
W (0, 0), by the usual backwardization. Evaluate this compound option with
S = 0.5 (n = 5) and T = 1 (n = 10) with the data above. Let K = 90 and
L = 4.5 and ﬁnd W (0, 0). Use σ = 20%.
Hint: Think of a way of doing both (4.12) and (4.14) with the same spread-
sheet.

Remark 4.15 (Compound options). A good application of compound options
is described in Hull [37] on page 443. He observes:

    The equity in a levered ﬁrm can be viewed as a call option on the
    value of the ﬁrm. To see this, suppose that the value of the ﬁrm is
    V and the face value of the outstanding debt is A. Suppose that all
    the debt matures at a single time, T ∗ . If V < A at time T ∗ , the value
    of equity at this time is zero because all the company’s assets go to
    the bondholders. If V > A at T ∗ , the value of the equity at this time
    is V − A. Thus, the equity in the ﬁrm is a European call option on
    V with maturity T ∗ and exercise price A. An option on a stock of
    the ﬁrm that expires prior to T ∗ can be regarded as an option on an
    option on V .

Exercise 4.16 (The binary option). The binary call option is a European
style option with payoﬀ at expiry W (N, j) = B > 0 when S(N, j) > K and
nothing otherwise. The binary put option has payoﬀ at expiry W (N, j) = B >
0 when S(N, j) < K and nothing otherwise. Find the values of these options
for various choices on K and B. Express the binary put option value in terms
of the binary call option value.

Exercise 4.17 (Forward start option). A forward start call option is one
that is paid for today and expires at t = N . The strike price is not known until
some future time t = M < N . In fact the strike price K = S(M, j) if state
j occurs at t = M . With the data used in Exercises 4.11 –4.14, and M = 3,
determine the value of the forward start call option. What is the connection
between the value of this option and a corresponding forward start put option?

Remark 4.18. The design of exotic options is only limited by one’s imagina-
tion. Ravindran in [21, pages 81–169] devotes a large chapter to many exotic
options and their applications and discusses how binomial methods can be
used to estimate their values. Zhang [79] is another compendium of exotic
80     4 Multiperiod Binomial Models

options. As the demand is there, new ﬁnancial products are designed. Such
products are also engineered so that their present values can be estimated
and (importantly) the product can be hedged (see Chapter 5).
5

Hedging




5.1 Hedging

Just as important as pricing is hedging. Some would say that hedging is
even more important. Hedging is a general strategy, independent of any model.
However, in this book we discuss hedging in our binomial framework.
If I sell you a European call option on asset S with strike price K and expiry
T , then I should have the value (S(T ) − K)+ in place at time T . If you wish
to exercise the option, (when S(T ) > K), then I could buy a stock (for S(T )),
and sell it to you for K as agreed. I would suﬀer a loss S(T ) − K, but in the
binomial model this is compensated for by my hedge which also has value
(S(T ) − K)+ = S(T ) − K at expiry.
We now show how to hedge, or replicate, a claim. We start with an amount
of cash. In each time period (see below) we divide our wealth between an
investment in a bank, with interest, and the purchase of S. This portfolio can
be adjusted at each time, without the addition of extra cash or the removal of
any cash, but at expiry T, it must have value equal to the claim. We are then
said to have hedged, or replicated, the claim. The initial cost of the hedge
must be the present value of the claim. The process of hedging in this way is
also called self-ﬁnancing dynamic hedging.
We now provide some details, and give some examples. The time steps will be
denoted by n, 0 ≤ n ≤ N , so that N corresponds to the expiration time T .
Suppose that the general contingent claim that we are trying to hedge is
denoted by W , and that W (n, j) is its value at (n, j). In fact the values of
W (n, j) can be obtained from the values of W (N, .) by the backward recursion
formula (4.4).
We now write down generalizations of H0 and H1 which we introduced in
Section 2.3, [see equation (2.2)]. We deﬁne H0 (n, j) and H1 (n, j) for each
(n, j) so that
82      5 Hedging



         W (n + 1, j + 1) = H0 (n, j)R(n, j) + H1 (n, j)S(n + 1, j + 1)       (5.1)

               W (n + 1, j) = H0 (n, j)R(n, j) + H1 (n, j)S(n + 1, j).        (5.2)

In fact, (5.1) generalizes (2.6), (5.2) generalizes (2.3a) and (5.2) generalizes
(2.3b). We then have from (5.1) and (5.2) the formulae


                                  W (n + 1, j + 1) − W (n + 1, j)
                    H1 (n, j) =                                               (5.3)
                                  S(n + 1, j + 1) − S(n + 1, j)

                    H0 (n, j) = W (n, j) − H1 (n, j)S(n, j).                  (5.4)

Thus, at node (n, j) you can hold W (with value at (n, j) of W (n, j)), or
equivalently H0 (n, j) dollars and H1 (n, j) units of S.
The quantity H1 (n, j) is called the hedge ratio; formula (5.3) may suggest
this name.
Observe that


         W (n + 1, j + 1) − H1 (n, j)S(n + 1, j + 1) = H0 (n, j)R(n, j)       (5.5)


                  W (n + 1, j) − H1 (n, j)S(n + 1, j) = H0 (n, j)R(n, j).     (5.6)

In other words the portfolio

                         W (n + 1, ·) − H1 (n, j)S(n + 1, ·)

is riskless, (that is, it has the same value at both (n + 1, j + 1) and (n + 1, j)).
Alternately, we can regard H1 (n, j) as indicating the level of exposure of
W with respect to S at (n, j).
Also note that


     W (n, j) = H0 (n, j) + H1 (n, j)S(n, j)                                (5.7)
              = H0 (n − 1, j − 1)R(n − 1, j − 1) + H1 (n − 1, j − 1)S(n, j)
                                                                            (5.8)
              = H0 (n − 1, j)R(n − 1, j) + H1 (n − 1, j)S(n, j).            (5.9)

This implies
                                                                  5.1 Hedging   83



                  [H1 (n, j) − H1 (n − 1, j − 1)] S(n, j)
                  = − [H0 (n, j) − H0 (n − 1, j − 1)R(n − 1, j − 1)] ,

so increasing our holding of stock (H1 (n, j) > H1 (n − 1, j − 1)) must be
accompanied by a reduction of our cash position, and vice versa.
The conditions (5.7)–(5.9) are termed self-ﬁnancing, that is, we reduce our
cash position by purchasing shares, and we increase our cash position by
selling shares.

Example 5.1 (CRR model). Suppose


                                     S(0) = S = 80
                                            u = 1.5
                                             d = 0.5
                                             R = 1.1
                                            N =3
                                            K = 80

Let W be a European call option with strike price 80 expiring at t = 3. Thus


                           π = 0.6

and

                                0.6                    0.4
                   W (n, j) =       W (n + 1, j + 1) +     W (n + 1, j)
                                1.1                    1.1

for j = 1, 2, . . . , n.
The values of S(n, j), W (n, j), H0 (n, j), H1 (n, j) are given in Table 5.1.
The details were found using MS-EXCEL, but can be computed using other
spreadsheet programmes. There are four rows in this table. They correspond
to j = 0, j = 1, j = 2 and j = 3, reading down the table. The values in the
ﬁnal column can be entered and the earlier columns completed using (4.4),
(5.3) and (5.4). We show how to use the calculations.
Suppose that the market price of the call were $36.00 (rather than $34.0796
as in the model). Here is how one can make an arbitrage proﬁt under the
assumption that the model is correct.
84     5 Hedging

                   Table 5.1. Hedge ratios using MS-EXCEL.
                      n=        0        1        2 3
                       S       80       40       20 10
                      W 34.0796 2.9752            0 0
                      H1 0.7190 0.1364            0
                      H0 -23.4410 -2.4793         0
                       S               120       60 30
                      W            60.4959 5.4545 0
                      H1            0.8485 0.1667
                      H0          -41.3223 -4.5455
                       S                        180 90
                      W                    107.2727 10
                      H1                          1
                      H0                   -72.7273
                       S                            270
                      W                             190
                      H1
                      H0


At t=0
Short sell the call, borrow $23.4410 (H0 (0, 0) = −23.4410), buy 0.7190 stock
(H1 (0, 0) = 0.7190). This realizes a proﬁt $1.9204, which we pocket.
We will assume the scenario (0, 0) → (1, 1) → (2, 1) → (3, 2).
At t=1
We are now in state (n, j) = (1, 1).
Repay the loan (-$23.4410 × 1.1 = −$25.7851), borrow $41.3223 (H0 (1, 1) =
−41.3223), sell 0.7190 stock (+$120 × 0.7190 = $86.28), buy 0.8485 stock
(−$120 × 0.8485 = −$101.82) and −25.7851 + 41.3223 + 86.28 − 101.82 =
−0.0028 (actually a more accurate calculation gives 0). So these trades repre-
sent no net inﬂow or outﬂow of money. That is, our portfolio is self-ﬁnancing.
In fact the net transactions are:
Increase the debt to $41.3223 by borrowing $15.5372 more.
Increase the stockholding to 0.8485, which costs 0.1295×$120 = $15.54. (This
would be $15.5372 with a more accurate calculation). So again the total net
transaction is $0.
At t=2
We are now in state (n, j) = (2, 1).
Repay the loan (-$41.3223 × 1.1 = −$45.45453), borrow $4.5455 (H0 (2, 1) =
−4.5455), sell 0.8485 stock (+$60×0.8485 = $50.91), buy 0.1667 stock (−$60×
0.1667 = −$10.002) to get −45.45453 + 4.5455 + 50.91 − 10.002 = −0.00103
                                                             5.1 Hedging      85

(actually a more accurate calculation gives 0). So these trades represent no
net inﬂow or out ﬂow of money. This is again self-ﬁnancing.
Actually the net transactions are:
Decrease debt to $4.5455 by repaying $40.90903.
Decrease stockholding to 0.1667, which gives 0.6818 × $60 = $40.908. This
should be $40.90903 with a more accurate calculation. So again the total net
transaction is $0.
At t=3
We are now in state (3, 2).
Repay the loan (-$4.5455 × 1.1 = −$5.00005), sell 0.1667 stock (+$90 ×
0.1667 = $15.003) netting $10.00295 (actually, a more accurate calculation
gives $10). This is the same as the value of the call in (3, 2). As the call
is short held, we may now cash settle this call. We now have no unfunded
liabilities at expiry.
In summary, we pocketed $1.92 at time t = 0, and by these trades we were
able to meet all our liabilities at t = 3. Thus, we have an arbitrage. In a
multiperiod model we need to trade periodically as we have illustrated.
We could also consider other scenarios like: (0, 0) → (1, 0) → (2, 1) → (3, 1).

Remark 5.2. If you write a call, then you collect W (0, 0) at time 0 and initiate
the hedging procedure just described. At expiry you produce a payoﬀ of the
call and can meet the claim (against you). This is called hedging. All this
works under the proviso that the model is correct. Inaccuracies due to a wrong
model are called “model risk”!
The book by Natenburg [57] is particularly good in describing similar hedg-
ing methods to lock in arbitrage opportunities. This book is popular with
practitioners, particularly with market makers.
86     5 Hedging

Summary of Three Cases


              Table 5.2. Case 1: (0, 0) → (1, 1) → (2, 1) → (3, 2).
               Stock Position             Cash Positions (in $)
              Short sell the call                         36.00
                          Pocket                           1.92
                           Bank                           34.08

                           t=0                               34.08

              H1 (0, 0) = 0.7190
                    S(0, 0) = 80
                      out $57.52                            (57.52)
                                                            (23.44)

                           t=1                              (25.78)

              H1 (1, 1) = 0.8485
               ∆H = −0.1295
                  S(1, 1) = 120
                      out $15.54                            (15.54)
                                                            (41.32)

                           t=2                              (45.46)

              H1 (2, 1) = 0.1667
               ∆H = −0.6816
                    S(2, 1) = 60
                        in $40.91                             40.91
                                                             (4.55)

                           t=3                               (5.00)

                 H1 (3, 2) = 0.0
                ∆H = −0.1667
                  S(3, 2) = 90
                      in $15.00                              15.00
                                                             10.00


Some explanations (Table 5.2):
 For case 1: At t = 0, 57.52 = 0.7190 × 80; we write “out” to indicate a
cost (outﬂow of funds) and “in” to indicate receipts (in ﬂow of funds) to cash
position; at t = 1, 15.54 = 0.1295 × 120, 25.78 = 23.44 × 1.1 (as R = 1.1),
and so on. At time t = 3 we have a liability of $10.00 (the value at (3, 2) of
the call option (which we short sold), but we have now cash assets to match
                                                              5.1 Hedging   87

this. So we have no unfunded liabilities at t = 3. At t = 3 we set H1 equal to
0, as we sell our shares at t = 3.


              Table 5.3. Case 2: (0, 0) → (1, 0) → (2, 1) → (3, 1).
               Stock Position             Cash Positions (in $)
              Short sell the call                         36.00
                          Pocket                           1.92
                           Bank                           34.08

                           t=0                               34.08

              H1 (0, 0) = 0.7190
                    S(0, 0) = 80
                      out $57.52                            (57.52)
                                                            (23.44)

                           t=1                              (25.78)

              H1 (1, 0) = 0.1364
               ∆H = −0.5826
                    S(1, 0) = 40
                        in $23.30                             23.30
                                                             (2.48)

                           t=2                               (2.73)

              H1 (2, 1) = 0.1667
                  ∆H = 0.0303
                    S(2, 1) = 60
                       out $1.82                             (1.82)
                                                             (4.55)

                           t=3                               (5.00)

                 H1 (3, 1) = 0.0
                ∆H = −0.1667
                  S(3, 1) = 30
                        in $5.00                               5.00
                                                             (0.00)


Some explanations (Table 5.3):
For case 2: At time t = 3 we have no liability (the value at (3, 2) of the
call option (which we short sold) is $0). So we have no unfunded liabilities at
t = 3.
88     5 Hedging

              Table 5.4. Case 3: (0, 0) → (1, 1) → (2, 2) → (3, 3).
               Stock Position             Cash Positions (in $)
              Short sell the call                         36.00
                          Pocket                           1.92
                           Bank                           34.08

                            t=0                              34.08

              H1 (0, 0) = 0.7190
                    S(0, 0) = 80
                      out $57.52                             -57.52
                                                             -23.44

                            t=1                              -25.78

              H1 (1, 1) = 0.8485
                  ∆H = 0.1295
                  S(1, 1) = 120
                      out $15.54                             -15.54
                                                             -41.32

                            t=2                              -45.46

                   H1 (2, 2) = 1.0
                   ∆H = 0.1515
                   S(2, 2) = 180
                       out $27.27                            -27.27
                                                             -72.73

                            t=3                              -80.00

                   H1 (3, 3) = 0.0
                    ∆H = −1.0
                   S(3, 3) = 270
                       in $270.00                           270.00
                                                            190.00


Some explanations (Table 5.4):
For case 3: At time t = 3 we have a liability—the value at (3, 2) of the call
option (which we short sold) of $190.00. So we have no unfunded liabilities at
t = 3.


5.2 Exercises
Exercise 5.3. Produce the spreadsheet for Example 5.1.
6

Forward and Futures Contracts




6.1 The Forward Contract

We now consider the forward contract in the multistep binomial model. A for-
ward contract involves two dates, t = 0 and t = N , say. The forward contract
is initiated at t = 0. A long forward contract is an agreement (obligation) to
purchase an asset (a stock, say), at t = N for an agreed price F . We write
F = F (0, 0) to emphasize the fact that F is agreed at t = 0. At (N, j) the
(long) forward contract is worth S(N, j) − F (0, 0). The value of this at t = 0
is S(0, 0) − F (0, 0)P (0, N ). This should have a value at (0, 0) of 0 for a fair
value of F (0, 0). Thus,

                                           S(0, 0)
                              F (0, 0) =             .                      (6.1)
                                           P (0, N )

The value V at (n, j) of the (long) forward contract initiated at time 0 with
maturity N is

                                           S(0, 0) n
                   V (n, j) = S(n, j) −             P (N − n).              (6.2)
                                           P (0, N ) j

In general, if F (n, j) is the t = N forward price of S initiated at (n, j), then

                                            S(n, j)
                             F (n, j) =               .                     (6.3)
                                          Pjn (N − n)

Note that V (n, j) is not zero in general for 0 < n < N .

Remark 6.1. A forward contract is a binding agreement. However the short
side bears risk of default. The person who has agreed to buy at t = N
may not honour the contract, not turning up at maturity. However, the long
90     6 Forward and Futures Contracts

side could then be subject to litigation, credit devaluation and so on. The
short side could be left holding a stock for which he was promised $60, but for
which the market price has fallen to $40. We could be more dramatic. Jones
has agreed to buy 50 hogs from Farmer Bill on a certain Friday, but Jones
does not turn up. What is Farmer Bill to do?
Note that F (N, j) = S(N, j) for all 0 ≤ j ≤ N .



6.2 The Futures Contract

These contracts are traded on exchanges and, as we shall see, solve the problem
of default risk discussed under forward contracts.
Futures contracts are similar to forward contracts in that they are agreements
to buy/sell an asset (stock) at a future date t = N for an agreed price, which
we shall call G(0, 0).
Futures contracts are standardized by futures exchanges (e.g., CBOE), and
always involve margin accounts.
Margin Accounts
Each exchange has its own rules.
Each of the two counterparties opens a margin account with the exchange.
To some extent a margin account is like any other bank account that earns
interest, but it must contain a minimum amount. Further, the clearing house
of the exchange must have access to it, in the sense that it can add and remove
amounts from it on a daily basis, as we shall explain. When the amount in the
margin account gets too low, a margin call is put out, asking that the margin
account be topped up. If the call is not answered, the contract is closed out.
For the meantime we shall assume that no margin calls are necessary (which
is equivalent to all margin calls being answered).
Let us consider the long side initiated by company XYZ. Suppose XYZ opens
a margin account with initial amount M (0, 0). The exchange will specify the
minimum amount that should be placed in this margin account. This could
depend on the size of the contract.
Let G(n, j) denote the futures price at (n, j) for implementation at t = N . Of
course, G(N, j) = S(N, j) for each j = 0, 1, . . . , N . We now wish to determine
G(n, j) for each n < N, j = 0, 1, . . . , n, and in particular we want to ﬁnd
G(0, 0).
Let M (n, j) be the amount in the margin account at (n, j).
In the same way there will be a short side held by company ABC. With
exchange traded futures XYZ and ABC will not necessarily be known to each
other. This will not matter as we shall see. Let us denote the margin account
of ABC with the letter L and the amount in it at (n, j) by L(n, j).
                                               6.2 The Futures Contract       91

In the multistep binomial model, the dynamics of the margin account M are
given by


       M (n + 1, j + 1) = M (n, j)R(n, j) + [G(n + 1, j + 1) − G(n, j)]     (6.4)

           M (n + 1, j) = M (n, j)R(n, j) + [G(n + 1, j) − G(n, j)] ,       (6.5)

and for L, on the short side


        L(n + 1, j + 1) = L(n, j)R(n, j) − [G(n + 1, j + 1) − G(n, j)]      (6.6)

            L(n + 1, j) = L(n, j)R(n, j) − [G(n + 1, j) − G(n, j)] .        (6.7)

This means that between t = n and t = n+1 the margin account earns interest
M (n, j) → M (n, j)R(n, j) = M (n, j)[1 + r(n, j)]. Further, if the futures price
G rises, then the increase is added to M and removed from L, and vice versa
if the futures price drops. The clearing house does the adding and removal of
amounts.
This process of adjusting the margin accounts in this way is called marking to
market. The procedure of collecting and pairing variations in margin accounts
is called resettlement. A good reference for futures markets is Duﬃe [26].
Computing Futures Prices
Let π(n, j) be the risk-neutral up probability (see Chapter 4 ). Then using
risk-neutral pricing


                π(n, j)                    1 − π(n, j)
     M (n, j) =         M (n + 1, j + 1) +             M (n + 1, j)
                R(n, j)                      R(n, j)
                π(n, j)
              =         [M (n, j)R(n, j) + (G(n + 1, j + 1) − G(n, j))]
                R(n, j)
                  1 − π(n, j)
                +             [M (n, j)R(n, j) + (G(n + 1, j) − G(n, j))]
                    R(n, j)
                           π(n, j)
              = M (n, j) +         [G(n + 1, j + 1) − G(n, j)]
                           R(n, j)
                  1 − π(n, j)
                +             [G(n + 1, j) − G(n, j)] .
                    R(n, j)

This implies that
92     6 Forward and Futures Contracts

       G(n, j) = π(n, j)G(n + 1, j + 1) + (1 − π(n, j))G(n + 1, j)          (6.8)

with

       G(N, j) = S(N, j),        0 ≤ j ≤ N.                                 (6.9)

This backwardization formula allows us to calculate the futures price at all
nodes (n, j).

Remark 6.2. In general futures prices are not equal to forward prices, as the
following example shows.

Example 6.3 (Futures and forward prices are not equal in general). Consider
a binomial model with N = 3.
The S and R values are as follows:
S(0, 0) = 100, S(1, 0) = 87, S(1, 1) = 115, S(2, 0) = 75, S(2, 1) = 100,
S(2, 2) = 133, S(3, 0) = 65, S(3, 1) = 87, S(3, 2) = 115 and S(3, 3) = 152.
R(0, 0) = 1.0250, R(1, 0) = 1.0300, R(1, 1) = 1.0200, R(2, 0) = 1.0350,
R(2, 1) = 1.0250 and R(2, 2) = 1.0100.
We then calculate

                      S(n, j)R(n, j) − S(n + 1, j)
          π(n, j) =
                      S(n + 1, j + 1) − S(n + 1, j)

         P (n, j) ≡ Pjn (N − n)
                      π(n, j)                    1 − π(n, j)
                 =            P (n + 1, j + 1) +             P (n + 1, j)
                      R(n, j)                      R(n, j)
                      S(n, j)
         F (n, j) =
                      P (n, j)

         F (N, j) = S(N, j)


         G(n, j) = π(n, j)G(n + 1, j + 1) + (1 − π(n, j))G(n + 1, j)


         G(N, j) = S(N, j).

The calculations show that


                                  F (0, 0) = $107.36
                                  G(0, 0) = $107.12.

This diﬀerence is not due to arithmetic errors.
                                                 6.2 The Futures Contract       93

Value in the Margin Account at Expiry
We now compute the values of M (N, j) and L(N, j).
Equations (6.4), (6.5), (6.6) and (6.7) can be rewritten:


  M (n + 1, j + 1) − M (n, j) = M (n, j)r(n, j) + [G(n + 1, j + 1) − G(n, j)]


      M (n + 1, j) − M (n, j) = M (n, j)r(n, j) + [G(n + 1, j) − G(n, j)]

and


   L(n + 1, j + 1) − L(n, j) = L(n, j)r(n, j) − [G(n + 1, j + 1) − G(n, j)]

       L(n + 1, j) − L(n, j) = L(n, j)r(n, j) − [G(n + 1, j) − G(n, j)]

Example 6.4. Let us assume that the we have the scenario (0, 0) → (1, 0) →
(2, 1) → (3, 1). Then


             M (1, 0) − M (0, 0) = M (0, 0)r(0, 0) + G(1, 0) − G(0, 0)
             M (2, 1) − M (1, 0) = M (1, 0)r(1, 0) + G(2, 1) − G(1, 0)
             M (3, 1) − M (2, 1) = M (2, 1)r(2, 1) + G(3, 1) − G(2, 1),

and now add, giving:


M (3, 1) − M (0, 0)
         = M (0, 0)r(0, 0)+M (1, 0)r(1, 0)+M (2, 1)r(2, 1)+[G(3, 1) − G(0, 0)]
         = M (0, 0)r(0, 0)+M (1, 0)r(1, 0)+M (2, 1)r(2, 1)+[S(3, 1) − G(0, 0)].

Therefore,


              M (3, 1) = M (0, 0) + M (0, 0)r(0, 0) + M (1, 0)r(1, 0)
                       + M (2, 1)r(2, 1) + [S(3, 1) − G(0, 0)]

Thus, the value M (3, 1) is the original amount in the margin account plus
interest earned plus the futures account cash settled.
If you wish to take delivery of the underlying then: buy the underlying for
S(3, 1) and use the cash S(3, 1) − G(0, 0) from the futures to convert (reduce
?) the payment to S(3, 1) − [S(3, 1) − G(0, 0)] = G(0, 0).
94     6 Forward and Futures Contracts

In a similar way for the same scenario,


               L(3, 1) = L(0, 0) + L(0, 0)r(0, 0) + L(1, 0)r(1, 0)
                       + L(2, 1)r(2, 1) + (G(0, 0) − S(3, 1)) .

Using M (0, 0) = 200 and the data in Example 6.3, we get M (1, 0) = $190.03,
M (2, 1) = $206.08, M (3, 1) = $223.73 = 200 + 200 × 0.025 + 190.03 × 0.03 +
206.08 × 0.025 + [115 − 107.12].
Let us note that the value of M (3, 1) depends on the path that led to (3,1).
For example, if we had the scenario (0, 0) → (1, 1) → (2, 0) → (3, 1), then
M (3, 1) = $222.34.

Value in Margin Account Before Expiry
As above we have

              M (n, j) = M (0, 0) + Interest + [G(n, j) − G(0, 0)]

and

               L(n, j) = L(0, 0) + Interest − [G(n, j) − G(0, 0)].

Analysis of a Default
Suppose that the long side defaults at (n, j).
We shall ﬁrst analyse the long side. The default could have occurred because
M (n, j) ≤ 0 (or below some small positive value). Then XYZ would have
received a margin call. Let us assume that XYZ ignored this call. In that case
the futures contract is closed out. If M (n, j) < 0, then XYZ will receive a bill
for the debt −M (n, j) (which is probably a small amount).
Now consider the short side. At (n, j), the amount that ABC has in the margin
account is L(n, j). ABC can now enter a futures contract expiring still at t = N
with another counterparty. In fact, the clearing house will arrange this new
contract. In fact, ABC may not even know that a default has occurred. As a
consequence


             L(N, k) = L(n, j) + Interest − [S(N, k) − G(n, j)]
                     = L(0, 0) + Interest − [G(n, j) − G(0, 0)]
                        + Interest − [S(N, k) − G(n, j)]
                      = L(0, 0) + Interest − [S(N, k) − G(0, 0)]
                      = L(0, 0) + Interest + G(0, 0) − S(N, k)
                                                 6.2 The Futures Contract      95

Here Interest denotes interest to (n, j) and Interest denotes interest from
(n, j) to (N, k). This is the same value in the margin account as would have
been there had no default occurred.
We see that the invention of marking to market and margin accounts, has
“solved” the problem of defaults in forward contracts. In fact, marking to
market is a common feature of many ﬁnancial markets as a guarantee
against default by either party. This arrangement is regarded as one of the
great ﬁnancial innovations of the twentieth century.
When Are Futures and Forward Prices Are Equal?
We saw in Example 6.3 that futures prices and forward prices are not equal
in general. In this example R(n, j) and r(n, j) were state-dependent, which
means that interest rates were not deterministic.

Theorem 6.5. If interest rates are deterministic, then F (n, j) = G(n, j) for
all (n, j).

Remark 6.6. We say that interest rates are deterministic if R(n, j) and r(n, j)
for each n do not depend on j. In that case we will write R(n) rather than
R(n, j), and r(n) in place of r(n, j).

Proof. Let us note that

                          F (N, j) = G(N, j) = S(N, j)                      (6.10)

for j = 0, 1, . . . , N . We only need to show that when interest rates are de-
terministic F and G satisfy the same backwardization equation. We noted
that

                                            S(n, j)
                             F (n, j) =
                                          Pjn (N − n)

where Pjn (N − n) is the value at (n, j) of $1 at time t = N , so

                                 1      1            1
                Pjn (N − n) =       ·         ···          .
                                R(n) R(n + 1)     R(N − 1)

Then


   F (n, j) = R(n)R(n + 1) . . . R(N − 1)S(n, j)
            = R(n)R(n + 1) . . . R(N − 1)
                                                                         
                   1
              ×        [π(n, j)S(n + 1, j + 1) + (1 − π(n, j))S(n + 1, j)]
                  R(n)
96        6 Forward and Futures Contracts

             = R(n + 1) . . . R(N − 1)
                                                                 
               × π(n, j)S(n + 1, j + 1) + (1 − π(n, j))S(n + 1, j)

             = π(n, j)F (n + 1, j + 1) + (1 − π(n, j))F (n + 1, j).     (6.11)

That is

      F (n, j) = π(n, j)F (n + 1, j + 1) + (1 − π(n, j))F (n + 1, j),   (6.12)

which is the same backward recursion formula as (6.8) for G. From (6.10), we
conclude that F (n, j) = G(n, j) for all n < N and j = 0, 1, . . . , n.    2



6.3 Exercises

Exercise 6.7. Show that the values obtained for F (0, 0) and G(0, 0) in Ex-
ample 6.3 are correct. Produce a spreadsheet calculation.

Exercise 6.8. If N = 2 and

                    (R(1, 1) − R(1, 0)) (S(1, 1) − S(1, 0)) > 0

show that G(0, 0) > F (0, 0). Can you make a generalization to N > 2?

Exercise 6.9. If F (0, 0) > G(0, 0), is it possible to make an arbitrage proﬁt
by taking a long position in the futures contract and a short position in the
forward contract?
7

American and Exotic Option Pricing




7.1 American Style Options

We shall now exhibit one of the ﬂexible aspects of the binomial pricing
methodology, the pricing of American style options.
Recall that an American style option is one that can be exercised at any
time up to and including the expiry date. These are the kind of option most
frequently traded on stock exchanges.
Because of the results in Section 2.6, we shall focus on the American put op-
tion. When a stock pays dividends, it is often optimal to exercise the American
call option early. We defer discussion of this situation until we have discussed
the payment of dividends.
At any time prior to expiry, an American style option can be (a) exercised;
(b) sold; (c) held. This implies that if V represents the value of an American
put option (with strike price K), then

                            V (n, j) ≥ (K − S(n, j))+ .

We can compute V by a simple modiﬁcation of the backwardization formula.
At node (n, j) we ﬁrst calculate

                      π(n, j)V (n + 1, j + 1) + (1 − π(n, j))V (n + 1, j)
         W (n, j) =
                                            R(n, j)

and compare W (n, j) with (K − S(n, j))+ . If W (n, j) > (K − S(n, j))+ , then
we do not exercise the option as it is more proﬁtable to hold the option than
to exercise it. On the other hand, if W (n, j) ≤ (K − S(n, j))+ , then we should
exercise the option. It follows then that
98     7 American and Exotic Option Pricing

                  V (n, j) = max[(K − S(n, j))+ , W (n, j)].

Therefore, the algorithm becomes


        V (N, j) = (K − S(N, j))+                                          (7.1)

                     π(n, j)V (n + 1, j + 1) + (1 − π(n, j))V (n + 1, j)
        W (n, j) =                                                         (7.2)
                                           R(n, j)

         V (n, j) = max[(K − S(n, j))+ , W (n, j)]                         (7.3)


         P (0, 0) = V (0, 0)                                               (7.4)

with (7.3) being the new feature.

Example 7.1. Let us compute the American put option with data as in Ex-
ample 5.1 where we calculated the European call price $34.0796.
We see that the European put is worth $14.18 and the American put is worth
$18.51. The diﬀerence $4.33 = $(18.51 – 14.18) is called the early-exercise
premium.
It can also be noted that since the American put is worth more than the
European put, there must have been times and corresponding states where it
was optimal to exercise the American put option early. In fact these occur at
(1,0), (2,0) and (2,1).

Example 7.2 (10-step example).
We again use a CRR model, as in Section 4.10,Point 4, with σ = 15%, r =
10%, S(0, 0) = 100, K = 100, T = 1, N = 10.
Then


                             1
                      ∆t =     = 0.1
                            10     √
                        u = exp(+σ ∆t) = 1.048577166
                                   √
                        d = exp(−σ ∆t) = 0.953673256
                       R = exp(+r∆t) = 1.010050167
                       π = 0.594042026

The American put price is 3.0762. The reader should carry out these calcu-
lations on a spreadsheet and determine the early exercise nodes. One should
                                                      7.2 Barrier Options      99

note the property: if it is optimal to exercise early at (n, j) then it is also
optimal to exercise early at (n, k) with k < j (for n < 10).
The nodes (2,0), (3,0), (4,1), (5,1), (6,2), (7,2), (8,3) and (9,4) constitute the
early exercise frontier.



7.2 Barrier Options

These are European style options.
There are basically two types of barrier options:

 1. Knock-out options
     These options cease to exist when a barrier is struck by the underlying
    price. There are four examples: down-and-out calls and puts, up-and-out
    calls and puts.
 2. Knock-in options
    These options come to existence when a barrier is struck by the underly-
    ing price. There are four examples: down-and-in calls and puts, up-and-in
    calls and puts.

While barrier options may once have been regarded as exotic options, they
are now rather commonplace. They are not traded on exchanges but in the
over the counter (OTC) market. Barrier options often involve currencies
and are issued by banks who have the technology to price and hedge them.
Barrier options were introduced because plain vanilla options are often too ex-
pensive and features of the vanilla options may not match client requirements.
This will be apparent in the examples below. In fact most exotic options and
various investment products are introduced because there is a demand for
such products. You will recall our earlier discussion on the reason why there
is a market for call options. There is no point introducing a brown bear
option if there are no buyers or sellers.

Example 7.3 (Down and out call option). A Canadian company ABC is to pay
1 million USD for some imports in 3 months time, and ABC is concerned that
the exchange rate will go down. We are talking here of the exchange rate that
is usually quoted on the news—the indirect quote. This means that the CAD
value of the import will rise. What is ABC to do? There are various solutions.
ABC could purchase a European call option with face value 1 million USD
and a strike price K = 1.39 (this is the direct quote corresponding to about
72 cents). If the CAD goes down (that is, the direct quote goes up) we are
guaranteed that ABC has to pay at most 1,390,000 CAD for the imports.
However, the premium for this call option may be too large. ABC
thus looks for a cheaper way to obtain a similar protection.
100    7 American and Exotic Option Pricing

ABC could instead purchase a down-and-out call option. This is the same
as above but with a knockout barrier B = 1.35, say. This corresponds to the
market quote of 74 cents. If the CAD rose to 74 cents, then the option ceases
to exist. This is the same as saying in direct terms: When the exchange rate
goes down to 1.35, the option ceases to exist. After the knockout, the option
no longer exists, and so there is no longer any protection against a falling
dollar (in market terms). ABC will have to take the chance that if the CAD
rose to 74 cents then it will not fall below 72 cents afterwards. It should be
clear that, as the barrier option oﬀers less protection than the plain vanilla
call option, that the barrier option should be cheaper.

Let us discuss some terminology.
Customization. Barrier options are customized to the user so that they
better fulﬁll the user’s needs. For example, you wish to forgo insurance when
you do not think it will be needed. Perhaps insurance companies could oﬀer
cheaper insurance with a product that oﬀers no insurance against ﬁres in
winter nor against ﬂoods in summer.
Barrier Monitoring. This is a new feature of barrier options. The question
to be answered is this: How does one determine that the barrier has
been crossed? End-of-day monitoring would mean that the barrier is deemed
to have been crossed if it is crossed at the end of a trading day. There is also
continuous monitoring, but this may be diﬃcult to implement. The type of
monitoring will have an eﬀect on the barrier option price. However, we leave
this subject to the interested reader. In our binomial models, we shall monitor
at nodes in the tree.
Speciﬁcations. For a barrier option we need to specify which of the eight
types it is, the strike price, the barrier, the expiry date and, if needed, the
face value.
Many banks oﬀer barrier options and employ quants to price them. You need
to be good at computer programming to do this.

Example 7.4 (Up-and-out call option). This example uses the CRR model for
a stock price.
Let S(0, 0) = 100, K = 80, σ = 0.20, T = 1, N = 4, r = 0.05; then


                          T
                     ∆t =    = 0.25
                          N    √
                      u = exp(σ ∆t) = 1.105170918...
                                 √
                      d = exp(−σ ∆t) = 0.904837418...
                      R = exp(r∆t) = 1.012578452...
                          R−d
                      π=        = 0.537808372...
                          u−d
                                                     7.2 Barrier Options     101

The barrier will be set at B = 120. When the stock price reaches this level,
the call option ceases to exist.
The valuation of the barrier option is the same as for the plain vanilla option
except for some modiﬁcations. Let V denote the value of this option. Then

                              S(N, j) − K)+ if S(N, j) < B
                 V (N, j) =
                              0             if S(N, j) ≥ B.

We now locate the barrier nodes. For each n these are the nodes (n, j) with
smallest j such that S(n, j) ≥ B. The value 0 is given to such barrier nodes.
We then use the backwardization formula to ﬁnd all other values of V (n, j),
where S(n, j) < B.
Thus, V (4, j) = (S(4, j) − 80)+ and V (4, 3) = V (4, 4) = 0 as S(4, 3) = 122 >
120 and S(4, 4) = 149 > 120. The only barrier node is (2,2) and we set
V (2, 2) = 0. We eventually obtain V (0, 0) = $6.26. If there were no barrier
then the call option would cost $24.64. So you can see the savings involved.
The algorithm can be summarized as follows:


                                                      
         V (N, j) = IF S(N, j) < B, (S(N, j) − K)+ , 0

                    π(n, j)V (n + 1, j + 1) + (1 − π(n, j))V (n + 1, j)
         W (n, j) =
                                          R(n, j)
                                               
         V (n, j) = IF S(n, j) < B, W (n, j), 0 ,


where IF (P, A, B) means: if P is true take value A, else B.
These are formulae used (in the spreadsheet, say) to compute the barrier
option prices.

Example 7.5 (Up and in call option). You may be an investor/speculator
and you think that stock prices will rise from S(0, 0) = $100. That is, you
are bullish. One possible strategy could be to buy a call option with strike
K = 95, say. We have already talked about leverage in an earlier lecture. It is
however cheaper to buy a knock-in call option, (an up-and-in call option).
This option does not come into existence until the stock price rises to a barrier
level, which we shall set at B = 120. It goes without saying that the premium
for this barrier option will be less than that of the vanilla option. Cheaper
options can provide greater leverage!
Let us price this option using the same data as in Example 7.4 above.
Again let V denote the value of this option.
102    7 American and Exotic Option Pricing

We ﬁrst ﬁnd the value of V at the barrier nodes (the ones on or just above
the barrier). At these nodes the call option is calculated as it is for the vanilla
call option. Thus V (2, 2) = $29.49. At expiry we set V (4, j) = 0 if S(4, j) < B.
We then calculate V (n, j) for all nodes below the barrier in the usual way once
the boundary node values have been assigned.
It is useful therefore to compute the vanilla call option price, C, as well as the
knock-in call price.
If we let C be the vanilla call price, then


         C(N, j) = (S(N, j) − K)+
                   π(n, j)C(n + 1, j + 1) + (1 − π(n, j))C(n + 1, j)
         C(n, j) =                                                   ,
                                        R(n, j)

from which V can be calculated thus:


         V (N, j) = IF (S(N, j) < B, 0, C(N, j))

                      π(n, j)V (n + 1, j + 1) + (1 − π(n, j))V (n + 1, j)
         W (n, j) =
                                            R(n, j)

          V (n, j) = IF (S(n, j) < B, W (n, j), C(n, j)) .

These formulae were used to compute this option. The vanilla option price
was $13.51, while the knock-in option cost $12.03.

These two examples show the techniques that can be used to price barriers.
Some tricks can be employed. For example it is easy to see that a knock-in
plus a knock-out is the same as a vanilla option. In fact if in Example 7.3
we had used K = 80 as in Example 7.2 then the knock-in call would cost
$18.21 and now we see that $18.21 plus $6.26 equals $24.46 as we claimed.
The reader may wish to check these calculations.



7.3 Examples of the Application of Barrier Options

The purpose of this section is to give you several more applications of barrier
options. Read through these examples. Do not be too concerned if the various
exchange rates are not the current rates. We wish to concentrate on ideas
here, not give ﬁnancial advice.
                      7.3 Examples of the Application of Barrier Options      103

Example 7.6 (Down-and-out call). Consider a U.S. company that must make a
payment in 51 days time of 200 million Euros. The company is concerned that
the Euro may appreciate against the U.S. dollar over this period. To insure
against this risk, the company could purchase an ordinary foreign currency
European call option, allowing it to purchase Euros at a stated price. Over the
next 51 days, it is possible that the Euro depreciates against the dollar. If this
happens the company may feel it no longer wants the insurance provided by
an ordinary call option. What should the company consider instead? Discuss
how it works.
Discussion
Suppose the current USD/Euro exchange rate is about 1.09, so 200 million
Euros is about 218 million USD. You are concerned that the Euro may appre-
ciate against the USD. If it went up to 1.11 your bill in 51 days time would
increase by 4 million USD. There are various ways of dealing with future
uncertainty.

 1. Do nothing and pay the 200 million Euros in USD at the going exchange
    rate.
 2. Enter a forward contract to pay the 200 million Euros in USD at the
    forward exchange rate. You will then know what you must pay in 51 days.
 3. Purchase a European call option on 200 million Euros with strike price
    1.09 (ATM), expiring in 51 days. You then pay a premium (the cost of the
    option) and at expiry this call is worth 200(X(51) − 1.09)+ million USD.
    Here, X(51) denotes for convenience the USD/Euro exchange rate in 51
    days. You therefore have the right to purchase the 200 million Euros for
    1.09 USD per Euro. Thus, the most you have to pay is 200 × 1.09 = 218
    million USD. However the premium may be too large for you to consider
    this possibility.
 4. Purchase a European call option on 200 million Euros with strike price
    1.09 (ATM), expiring in 51 days but with knock-out (down-and-out) at
    1.06, say. This means that if the USD/Euro exchange rate falls to 1.06,
    the call option ceases to exist. This option will be cheaper than the one
    in 3. If you set the barrier at 1.07 it will be cheaper still. You will have
    to make a choice of where to set it. This will depend on the premium you
    are prepared to pay and the risks you are prepared to take. The gamble
    you take with this barrier option is this: If the exchange rate falls to 1.06,
    the exchange rate will not then rise above 1.09. You will have to decide
    (based on advice) whether this is a reasonable gamble.

Example 7.7 (Down-and-in put). Consider now a company that expects to
receive a payment of 200 million Euros in 47 days time. The company is con-
cerned that the Euro may depreciate against the dollar. One way of insurance
would be for the company to purchase a put option on the Euro. Suppose the
104    7 American and Exotic Option Pricing

Euro has been appreciating against the dollar and the company expects this
general trend to continue. Can the company do better than the vanilla put?
Discuss how it works.
Discussion
In this case you are to receive 100 million Euros in 47 days time. This will
be about 218 million USD. In this case you do not mind if the Euro rises. If
it rose to 1.11 you would get an extra 4 million USD. However, you are now
concerned that the Euro will fall in value. If it fell to say 1.07, you would
be 6 million USD worse oﬀ. We could repeat the discussion of Example 7.6,
but in summary, we could now consider buying a down-and-in European put
option with strike at 1.09, expiring in 47 days time, with a barrier at 1.06.
This means that the put will not exist until the exchange rate actually falls
to 1.06. You are supposing this is not going to happen, but you do not want
to take chances in case it does. The lower you set the barrier, the cheaper the
put option is going to be. So if the exchange rate falls to 1.06 you will get
at least 212 million USD. If it does not reach the barrier you may get only a
little more than 212 million USD.

Example 7.8 (Up-and-out put). Consider a U.S. company that is receiving
a payment of 100 million Japanese yen in 30 days time. The current spot
exchange rate is $0.0085 per yen. The company faces the risk that the yen will
depreciate against the dollar. Suppose the yen has been appreciating against
the dollar, and the company feels that if the spot exchange rate reaches the
level $0.0090 per yen, its risk exposure will be negligible. The company decides
to buy an up-and-out put option, the upper barrier being $0.0090 per yen.
Discuss this product. What is the situation if the barrier is/is not crossed?
Discussion
The domestic market is now U.S. Let us suppose the JPY/USD exchange rate
is about 0.0085 USD/JPY. So the 100 million JPY is about 8,500,000 USD. If
the exchange rate goes down, the USD company will lose value. For example
if the exchange rate falls to 0.0080 USD/JPY the loss would be 50,000 USD.
Buying an up-and out put with barrier at 0.0090 USD/JPY means that the
put option ceases to exist once the exchange rate rises to this level. If this
put option has strike rate 0.0085 USD/JPY, then the U.S. company will get
at least 850,000 USD provided the exchange rate did not go above 0.0090
USD/JPY, and takes a gamble that the exchange rate will not fall below
0.0085 USD/JPY if at some time it rises to 0.0090 USD/JPY. By taking this
(slight) gamble, the U.S. Company is able to buy a much cheaper protection
against a falling USD/JPY exchange rate.

Example 7.9 (Up-and-in call). Consider a U.S. company that must pay the
principal of 50 million Euros on a Eurobond that matures in 76 days time.
The company is concerned that the Euro may appreciate against the dol-
lar. However the company has observed that the Euro has been depreciating
                        7.3 Examples of the Application of Barrier Options    105

against the dollar, and it expects this decline to continue over the near term.
If the company’s expectations are correct, there would be no need for the
company to buy insurance against the appreciation of the Euro. Why could
the company solve its problem with the purchase of an up-and-in call option?
Discussion
At the moment 1 USD is about 1.09 Euros. If this is the case then the directly
quoted rate for the Euro would be about 0.92. Thus 50 million Euros is about
46 million USD. If the Euro/USD rose to say 0.95, then you would need to pay
an extra 1.5 million USD. If the company expects the Euro/USD exchange
rate to fall, there is no need for insurance. The company could consider buying
an ATM European call (strike rate 0.97) on the 50 million Euros, expiring in
76 days, with a barrier at 0.99, say. If the Euro/USD exchange rate continues
to fall, the the call option will not knock in. However, if the exchange rate
were to rise above 0.99 then it knocks in and you will have to pay at most
48.5 million USD. However, if the barrier is not reached, you will pay at most
49.5 million USD (when the exchange rate rises to just below 0.99 but the
barrier is never breached). That is the risk that is being taken by purchasing
the cheaper option.

Example 7.10 (Up-and-out call). Consider a modiﬁcation of the example of
the knock-out call (up-and-out call). Suppose that the value of the up-and-out
call is $X. The additional feature to be considered here is this. If the option
knocks out, you get your money back (the $X). What should be the value of
X?
Discussion
Please refer to the Example 7.4.
Let V (n, j) be the value of this option in state (n, j). Without the rebate we
used V (4, 0) = 0, V (4, 1) = 1.87, V (4, 2) = 20, V (4, 3) = 0, V (2, 2) = 0,
together with

                      1
      V (n, j) =          [0.5378V (n + 1, j + 1) + 0.4622V (n + 1, j)]      (7.5)
                   1.0125
to compute V (0, 0) = 6.26. (In fact V (3, 2) = 9.1299, V (3, 1) = 11.4769,
V (3, 0) = 0.9933, V (2, 1) = 10.0885, V (2, 0) = 6.5495, V (1, 1) = 4.6054,
V (1, 0) = 8.3484, V (0, 0) = 6.2572).
So far, these were the details provided in Section 7.2.
Let W (n, j) also satisfy (7.5), but W (4, 0) = W (4, 1) = W (4, 2) = 0,
W (4, 3) = 1, W (2, 2) = 1. Then with π = 0.5378, W (3, 0) = W (3, 1) = 0,
            π                                    π2                    π3
W (3, 2) = R  . Then W (2, 0) = 0 and W (2, 1) = R 2 . Then W (1, 0) = R3 ,
                        2
           π
W (1, 1) = R + (1−π)π
                 R3   , and so
106      7 American and Exotic Option Pricing

                              π2   (1 − π)π 3   (1 − π)π 3
                 W (0, 0) =      +            +
                              R2      R4           R4

                         = 0.2821 + 0.0684 + 0.0684 = 0.4189.

So we have two expressions for the option with rebate:

                              X = 6.2572 + 0.4189X,                           (7.6)

which implies that X = 10.7679. We can modify the analysis. Suppose you
are granted α% of the premium as rebate when the option knocks out, then
equation (7.6) becomes

                              X = 6.2572 + 0.4189αX                           (7.7)

and so

                                        6.2572
                                X=               .                            (7.8)
                                     1 − 0.4189α
W (0, 0) is the present value of a 1 rebate at each barrier node.



7.4 Exercises

Exercise 7.11. Verify the results in Example 7.1 and study the early exercise
possibilities.

Exercise 7.12. Verify the results in Example 7.2 and study early exercise.
This needs a ten-step binomial tree.

Exercise 7.13. For the CRR binomial model for S, let V (n, j) be the value
of the American put option at time n in state j. It expires at t = N and the
strike price is K. Show the following results.

(a) V (n, j) ≥ V (n + 1, j) + S(n + 1, j) − S(n, j).
(b) V (n, k) ≥ V (n, j) + S(n, j) − S(n, k) for k > j.
(c) If there is no early exercise at (n + 1, j), then there is no early exercise at
    (n, j).
(d) If there is no early exercise at (n, j), then there is no early exercise at
    (n, k) for k > j.
(e) If early exercise occurs at (n, j), then it will also occur at (n, k) for k < j.
                                                             7.4 Exercises       107

(f) If early exercise occurs at (n, j), then it will also occur at (n + 1, j).

As a hint, show that (a) and (b) hold for n = N − 1 and n = N , respectively.
Then use the backwardization formula for American put option valuation to
obtain these inequalities for the smaller values of n.

Exercise 7.14. Verify the results in Example 7.4.

Exercise 7.15. Verify the results in Example 7.5.

Exercise 7.16. Study Section 7.3 and verify the results in Example 7.10.

Exercise 7.17 (The booster option). The booster option has two barri-
ers, called L and H (for Low and High). The booster option pays the holder
an amount that is proportional to the time that the stock price (say) stays
between the barriers. For simplicity, let us suppose that when the barrier H
is reached at t = n, then the booster ceases to exist and the holder is paid $n.
The same would apply to the lower barrier L. If we let W denote the value
of the booster, then W (N, j) = N if L < S(N, j) < H, we set W (n, j) = n if
either S(n, j) ≥ H or S(n, j) ≤ L. All other values of W are found by back-
wardization. Find W (0, 0) for the data above for σ = 15%, 20%, 25%, 30%.
Comment on your answers. Can you give an explanation, and a possible ap-
plication for a booster option. Use L = 85 and H = 115

Remark 7.18 (The booster option). The booster option and its evaluation in
the Black and Scholes framework is given in Chesney and Loubergé [12] and
also in Dana and Jeanblanc [20].

Exercise 7.19 (Partial barrier option). Consider Example 7.4. Repeat
this example, but make the assumption that knock-out can only occur at
t = 0.75 and t = 1. What is the new value of this barrier option.
8

Path-Dependent Options




We now show how to modify our binomial tree methods to deal with path
dependent options. We shall illustrate the ideas with Asian options (also
called Average Rate Options or just AROs for short), and the lookback
options. These are the most common examples.
These examples need to be analyzed using non-recombining binomial
trees. This will mean that at time t = n there will be 2n states of the world
as opposed to n + 1 states with recombining trees. It is known that 2n > n + 1.
This causes problems as the number of states is growing exponentially. There
are special techniques to help with this problem which, a good practitioner
must know about, but a discussion of them is beyond the scope of this book.
We shall conﬁne our examples to ones with small n (say n is 4 or 5). Those
who wish to explore this important issue further should look at J. Hull and
A. White [36]. A brief outline of their technique is also in Hull’s book [37] in
the section on “Path-Dependent Derivatives” and in this chapter in section
8.5.



8.1 Notation for Non-Recombing Trees

We shall label the nodes of the tree as (n, j), but j will be written in base 2.
(You may see now what you could do with trinomial trees).
So we have (0, 0), (1, 00), (1, 01), (2, 000), (2, 001), (2, 010), (2, 011) and so on.
What is nice about this notation is that with (2, 010) we can work out the past
history: Start at 0, then up (1), then down (0). Also note that 0 = 0002 , 1 =
0012 , 2 = 0102 , 3 = 0112 , and so on, where the suﬃx 2 means a positive integer
M is written in base 2 as M = (ap ap−1 . . . a0 ) = ap 2p + ap−1 2p−1 + · · · + a0 20 .
With this notation, if we are at (n, j) at time t = n, then at time t = n + 1 we
are either at (n + 1, j1) (up) or at (n + 1, j0) (down). We remark that there
110    8 Path-Dependent Options

are 2n states at time t = n, as there are 2n such state labels each having
n + 1 digits.
With this notion all our earlier formulas do not change much. In fact


                      S(n + 1, j1)
          u(n, j) =                                                           (8.1)
                        S(n, j)
                      S(n + 1, j0)
          d(n, j) =                                                           (8.2)
                        S(n, j)
                      R(n, j) − d(n, j)
          π(n, j) =                                                           (8.3)
                      u(n, j) − d(n, j)
                      π(n, j)W (n + 1, j1) + (1 − π(n, j))W (n + 1, j0)
         W (n, j) =                                                           (8.4)
                                           R(n, j)

where (8.4) would be suitably modiﬁed for American style options.



8.2 Asian Options

For the European call Asian option, the payoﬀ at expiry is given by

                           W (N, j) = (A(N, j) − K)+                          (8.5)

and for the European put Asian option, the payoﬀ at expiry is given by

                          W (N, j) = (K − A(N, j))+ .                         (8.6)

Here A(N, j) is the average value of S over the time from t = 0 to t = N .
This average will depend on the path that was followed from (0, 0) to (N, j).
Hence the payoﬀ in (8.5) is path-dependent.
We can write

                  S(0, 0) + S(1, j1 ) + . . . + S(n, jn ) + . . . + S(N, j)
      A(N, j) =                                                               (8.7)
                                           N +1
for any admissible path through the tree

               (0, 0) → (1, j1 ) → . . . → (n, jn ) → . . . → (N, j).

With the notation of the previous section, the state label jn is obtained from
the state label of (N, j) by truncation to the ﬁrst n + 1 digits.
                                                          8.2 Asian Options   111

These average values can also be calculated recursively (by forward induction)
as follows:


                          A(0, 0) = S(0, 0)
                                   n · A(n − 1, j) + S(n, j1)
                        A(n, j1) =
                                             n+1
                                   n · A(n − 1, j) + S(n, j0)
                        A(n, j0) =                            .
                                             n+1

Application
We now illustrate the application of the Asian option.
Suppose a Canadian company MML imports one million USD worth of wid-
gets at the end of March, June, September and December each year. The
exchange rates are X(0.25), X(0.50), X(0.75) and X(1.00), so the annual bill
is

              1000000(X(0.25) + X(0.50) + X(0.75) + X(1.00))

CAD. If X(0.25) = 1/0.68, X(0.50) = 1/ 0.73, X(0.75)= 1/0.71 and X(1.00)
= 1/ 0.72, then the total bill is 5,637,790 CAD, which corresponds to an
average exchange rate of 1.4090 cents (direct) or 0.7095 cents (indirect). MML
may be happy with that. If however the (direct) exchange rate rose, then the
bill may become unacceptable. Suppose that MML will accept an average
exchange rate of 1.4925 (direct) (0.67 indirect) implying an annual bill of
about 5,970,149 CAD, but no more; then MML could take out an European
call Asian option with strike price 1.4925 and face value 4 million USD. The
payoﬀ of this option is

                                                                     +
                        X(0.25) + X(0.50) + X(0.75) + X(1.00)
    4, 000, 000 ×                                             − 1.4925   .
                                          4

MML is, by this amount refunded (by the Merchant Bank, say) for any annual
expense over 5,970,149 CAD.
An alternative would be for MML to take out four call options expiring at
t = 0.25, t = 0.50, t = 0.75, t = 1.00, each with face value one million USD
and strike price K = 1.4925. It can be shown that the sum of the value of these
four calls is greater than the cost of the Asian or average rate option. Roughly
speaking this is because the average of the four rates is less volatile than each
of the separate exchange rates. Another possibility would be for MML to take
out one call with face value 4 million USD, strike price K = 1.4925 with
expiry at t = 1. This also is more expensive than the ARO, as we shall see.
112     8 Path-Dependent Options

Example 8.1. A spread-sheet can be used for the valuation of an average op-
tion.
The input data were S(0, 0) = 100, r = 5%, σ = 20%, T = 1, N = 4, and the
prices for S evolve as in the CRR tree. The price of the Asian call is $5.6661,
and the price of the corresponding vanilla call is $9.0469, which is nearly twice
the price. There is also a call-put parity formula for Asian options:

                Asian Call(0) − Asian Put(0) = S(0) − P V0 (K),             (8.8)

which is very similar to the formula for the vanilla options. The Asian Put
price with the same data was $0.7891 as compared with $4.1698 for the vanilla
put option.

Variants
Many variants can be made for the payoﬀ of the Asian option. Here are some:



8.3 Floating Strike Options


                       W (N, j) = (A(N, j) − S(N, j))+                      (8.9)
                       W (N, j) = (S(N, j) − A(N, j))+ .                  (8.10)

We could also replace A by alternative deﬁnitions. Here are examples that
have been used:


                S(k, jk ) + S(k + 1, jk+1 ) + . . . + S(N, j)
      A(N, j) =                                                            (8.11)
                                N −k+1
                S(N, j) + S(N − 1, jN −1 ) + . . . + S(N − k + 1, jN −k+1 )
      A(N, j) =                                                            (8.12)
                                                                            .
                                              k

In (8.12) the usual S in the payoﬀ of a call is replaced by the average of
the last k prices. This might be suitable for use in the commodity or energy
area. Most of the applications seem to be in the currency area where S is
really an exchange rate rather than a stock price. There are also American
style versions here. There are also many ways of taking averages (arithmetic,
geometric, harmonic, etc).
                                                    8.4 Lookback Options     113

8.4 Lookback Options

There are two types. The payoﬀ of the put is

                        W (N, j) = M (N, j) − S(N, j)                      (8.13)

where

          M (N, j) ≡ M (N, jN ) = max{S(n, jn ) : n = 0, 1, . . . , N }.

Note that this path-dependant payoﬀ can never be negative. This is a very
desirable option to hold, but it is expensive.
Note the forward recursion for computing the maximum process M


                     M (0, 0) = S(0, 0)
                   M (n, j1) = max[M (n − 1, j), S(n, j1)]
                   M (n, j0) = max[M (n − 1, j), S(n, j0)],



which was used for the example below.
The payoﬀ of the call is

                        W (N, j) = S(N, j) − m(N, j),                      (8.14)

where

           m(N, j) ≡ m(N, jN ) = min{S(n, jn ) : n = 0, 1, . . . , N }.

So we note that payoﬀ can never be negative. This is also a very desirable
option to hold, but it is expensive.
Note the forward recursion for computing the minimum process m


                     m(0, 0) = S(0, 0)
                    m(n, j1) = min[m(n − 1, j), S(n, j1)]
                    m(n, j0) = min[m(n − 1, j), S(n, j0)],



which is used for the example below.
114    8 Path-Dependent Options

Applications
Lookback options are used to obtain the best prices to buy or sell assets. If
you own a stock plus the lookback put, then on the sale of the stock at t = N
you obtain M (N, j) in state j, the best price over the life of the stock. Owning
a lookback call allows you to buy a stock at t = N at m(N, j) in state j at
time t = N , the best deal.
Some investment houses oﬀer products which try to attract customers by
having aspects of the lookback options.
Variants
There are many variants. Here are some other payoﬀs:


                         W (N, j) = (M (N, j) − K)+                       (8.15)
                         W (N, j) = (K − m(N, j))+ ,                      (8.16)

where (8.15) refers to the extrema lookback call option and (8.16) the
extrema lookback put option.

Example 8.2. The ﬁrst example is the pricing of the the lookback put with the
same inputs as Example 8.1. The price is $9.6589 (compared with $4.1698 for
a put with strike 100).

Example 8.3. The second example is the pricing of the the lookback call with
the same inputs as Example 8.1. The price is $13.7582 (compared with $9.0469
for a call with strike 100).

Some references dealing with Exotics include R. Jarrow (ed), [42], R. Jarrow
and S. Turnbull, [43] and P. G. Zhang [79].



8.5 More on Average Rate Options

We have already discussed these options under path-dependent options.
We also provided an application of these options and some variants. These
options need to be priced with non-recombining tree binomial models.
This may work well when there are few time steps in the tree, but are less
practical when the number of time steps are large, as there will be 2N terminal
nodes in an N -step tree.
In this section we shall discuss an algorithm devised by John Hull and Alan
White for obtaining approximate pricing while still using recombining trees.
The technique that we will describe can be used for many path-dependent
                                       8.5 More on Average Rate Options        115

options. The key reference for this method was given earlier in the ﬁrst section
of this chapter.
We shall focus our discussion on the example given in Section 8.2, which was
the European call Asian option with ﬁxed strike price.
The Hull and White Method
Step 1
At each node (n, j) we compute four numbers,

                 A1 (n, j) < A2 (n, j) < A3 (n, j) < A4 (n, j)               (8.17)

deﬁned as follows. A1 (n, j) represents the smallest value of the average of
“stock” prices along any path from (0, 0) to (n, j). In a similar way A4 (n, j)
represents the largest value of the average of “stock” prices along any path
from (0, 0) to (n, j). The other values A2 (n, j) and A3 (n, j) are chosen so
that the four numbers in (8.17) are equally spaced. We can now write down
recurrence relations for these quantities.


                A1 (0, 0) = A2 (0, 0) = A3 (0, 0) = A4 (0, 0) = S(0, 0),
                              1                                   
            A1 (n + 1, 0) =         (n + 1)A1 (n, 0) + S(n + 1, 0) ,
                            n+2
          1                   1                                        
         A (n + 1, j + 1) =         (n + 1)A1 (n, j) + S(n + 1, j + 1)
                            n+2
                                  for j = 0, . . . , n,
          4                   1                                         
         A (n + 1, n + 1) =         (n + 1)A4 (n, n) + S(n + 1, n + 1) ,
                            n+2
                              1                                   
            A4 (n + 1, j) =         (n + 1)A4 (n, j) + S(n + 1, j)
                            n+2
                                  for j = 0, . . . , n,
                            1                                  
            A2 (n + 1, j) =    2 · A1 (n + 1, j) + A4 (n + 1, j)
                            3
                                  for j = 0, 1, . . . , n + 1,
                              
                            1 1                                 
            A3 (n + 1, j) =    A (n + 1, j) + 2 · A4 (n + 1, j)
                            3
                                  for j = 0, 1, . . . , n + 1.

We illustrate this with a CRR tree.
                                                                   T
Example 8.4. We choose S(0, 0) = 100, σ = 0.2, T = 0.5, N = 5, ∆ = N ,
         √
u = exp(σ ∆), d = 1/u.
We note that A1 (n, n) = A4 (n, n) and A1 (n, 0) = A4 (n, 0) since there is only
one path (0, 0) → (n, n) and only one path (0, 0) → (n, 0). We could use this
to simplify the algorithm a little.
116      8 Path-Dependent Options

Step 2
We now compute the values of

                                +
      C i (N, j) = Ai (N, j) − K        for i = 1, 2, 3, 4 and j = 0, 1, . . . , N.

We shall select K = 100.
Step 3
We now begin the backwardization. Let us show how to compute C i (n, j) for
i = 1, 2, 3, 4.
Compute ﬁrst


                         1                                     
                M (↑) =       (n + 1)Ai (n, j) + S(n + 1, j + 1)
                        n+2
                                                           
                      ∈ A1 (n + 1, j + 1), A4 (n + 1, j + 1) .

Look at C 2 (4, 2), then


             1 2                 
      M (↑) =  5A (4, 2) + S(5, 3)
             6
             1
            = [5 × 98.5509 + 106.5288] = 99.8806 ∈ [97.0649, 101.4277].
             6

Continuing, we express

            M (↑) = λAk (n + 1, j + 1) + (1 − λ)Ak+1 (n + 1, j + 1)

with 0 ≤ λ ≤ 1 whenever

                                                              
                 M (↑) ∈ Ak (n + 1, j + 1), Ak+1 (n + 1, j + 1) .
                                           
For C 2 (4, 2), M (↑) ∈ A1 (5, 3), A2 (5, 3) , so we solve


M (↑) = 99.8806 = λA1 (5, 3) + (1 − λ)A2 (5, 3) = λ97.0649 + (1 − λ)101.4277

for λ. This gives λ = 0.3546. We then set


                C 2 (4, 2)(↑) = λC 1 (5, 3) + (1 − λ)C 2 (5, 3)
                              = 0.3546 × 0.0000 + 0.6454 × 1.4277
                                            8.5 More on Average Rate Options      117

                                = 0.9214.

In general,

                                 Ak+1 (n + 1, j + 1) − M (↑)
                      λ=
                           Ak+1 (n + 1, j + 1) − Ak (n + 1, j + 1)

and


           C i (n, j)(↑) = λC k (n + 1, j + 1) + (1 − λ)C k+1 (n + 1, j + 1)
                        = C k+1 (n + 1, j + 1)
                                                                     
                         + λ C k (n + 1, j + 1) − C k+1 (n + 1, j + 1) .

We now compute C i (n, j)(↓) in a similar manner:


                              1                                  
                     M (↓) =        (n + 1)Ai (n, j) + S(n + 1, j)
                             n+2
                                                          
                           ∈ Al (n + 1, j), Al+1 (n + 1, j)

and write

                  M (↓) = λAl (n + 1, j) + (1 − λ)Al+1 (n + 1, j),

that is,

                                   Al+1 (n + 1, j) − M (↓)
                           λ=
                                Al+1 (n + 1, j) − Al (n + 1, j)

and then set


       C i (n, j)(↓) = λC l (n + 1, j) + (1 − λ)C l+1 (n + 1, j)
                                                                            
                     = C l+1 (n + 1, j) + λ C l (n + 1, j) − C l+1 (n + 1, j) .

Now


                 1 2                 
           M (↓) = 5A (4, 2) + S(5, 2)
                 6
                 1
                = [5 × 98.5509 + 93.8713] = 97.7710 ∈ [95.2115, 99.3068]
                 6
118     8 Path-Dependent Options



         M (↓) = λ95.2115 + (1 − λ)99.3068
             λ = 0.3750


  C 2 (4, 2)(↓) = λC 2 (5, 2) + (1 − λ)C 3 (5, 2)
                = 0.3750 × 0.0000 + 0.6250 × 0.0000 = 0.0000

Continuing we then set

                        1                                                      
       C i (n, j) =            π(n, j)C i (n, j)(↑) + (1 − π(n, j))C i (n, j)(↓) .
                      R(n, j)

Then


        π(n, j) ≡ π = 0.0.5238
        R(n, j) ≡ R = 1.0050
                       1
       C 2 (4, 2) =        [0.0.5238 × 0.9214 + 0.4762 × 0.0000] = 0.4802.
                    1.0050

This procedure is repeated to compute C i (n, j) for all choices of i, n, j.
The ﬁnal answer by this method is $4.58. We would not expect this answer to
be very accurate as we did not use many steps. At least we have demonstrated
a recombining tree method for estimating the value of an average rate option.
Because N is not large in this calculation we could also calculate the value of
the average rate put option by this method. With the same data the answer
is $3.82, which also would not be an accurate answer.
As there are no analytic solutions available for average rate option prices,
there are no analytic values with which to compare these answers.



8.6 Exercises

Exercise 8.5. Verify the results in Example 8.1.

Exercise 8.6. Verify the results in Examples 8.2 and 8.3.

Exercise 8.7. Implement Example 8.4.
                                                          8.6 Exercises    119

Exercise 8.8 (Ladder options). This is a European style path-dependent
option determine by a ﬁnite number of ladder levels

                             L1 < L2 < ... < Lk .

To determine its payoﬀ W (N, j) at t = N , we ﬁrst compute the maximum
process value M (N, j) deﬁned in Section 8.4. If M (N, j) < L1 , then

                      W (N, j) = max (S(N, j) − K, 0) ,

but if Ln ≤ M (N, j) < Ln+1 , then

                 W (N, j) = max (S(N, j) − K, Ln − K, 0) .

The reader is referred to Ravindran [21, pages 106–108] or Street [74] for more
details of this product. Using the data from Exercise 8.4 and various choices
for the ladder, obtain values for the ladder option.
9

The Greeks




One of the important things that a quant must do besides valuing options
and knowing how to hedge them is to calculate the sensitivities of the values
with respect to inputs. These sensitivities are given Greek letters, and so are
called Greeks.
We shall now discuss these in turn and indicate how they are calculated with
both the Black and Scholes (BS) formula and with the binomial tree models.



9.1 The Delta (∆) of an Option

The Delta of an option is the rate of change of the option’s value with
respect to the underlying. For the call in BS this is

                                        ∂C
                              ∆C =         = N (d1 )                        (9.1)
                                        ∂S
and

                                      ∂P
                            ∆P =         = N (d1 ) − 1                      (9.2)
                                      ∂S
Let us note that for the call the Delta lies in (0,1) while for the put the Delta
lies in (-1,0).
Recall the following approximation

                                     f (x + h) − f (x − h)
                         f  (x) ≈                         ,                (9.3)
                                              2h
which we shall use often. In fact, by Taylor’s theorem
122    9 The Greeks

                                            h2       h3
              f (x + h) ≈ f (x) + hf  (x) +    f (x) + f  (x)
                                            2          6
                                              2          3
                                            h          h
              f (x − h) ≈ f (x) − hf  (x) + f  (x) − f  (x).
                                            2          6

Now subtract and divide by 2h. This gives

                   f (x + h) − f (x − h)            h2
                                         ≈ f  (x) + f  (x),
                            2h                      6
which establishes (9.3).
In Example 7.2 the BS Deltas are 0.7709 and -0.2291.
                                                                √
Consider a 10-step binomial tree with S(0, 0) = 100, u = exp(σ ∆t), d = 1/u,
σ = 0.15, R = exp(r∆t) with r = 0.10 and K = 100. These are values about
which sensitivities will be calculated. For these choices the values of the call
and puts expiring at T = 1 = 10∆t are 11.51 and 1.99, respectively.
We then compute the call and put option prices at S = 101 and S = 99,
subtract answers and divide by 2, using (9.3), to give approximate values
∆c = (12.367−10.833)/2 = 0.7670 and ∆p = (1.8512−2.3165)/2 = −0.23265.
Some authors introduce two previous times. Then the present is really time
n = 2. Write C(0) = C(2, 1) with S(2, 1) = 100, and C(0) = C(2, 0) with
S(2, 0) = 100d = 95.37, and C(0) = C(2, 2) with S(2, 2) = 100u = 104.86.

Remark 9.1. In order to show (9.1) it is useful to note the identity

                           SN  (d1 ) = Ke−rT N  (d2 )                     (9.4)

with

                                        1   1 2
                             N  (x) = √ e− 2 x .                           (9.5)
                                        2π

Let us note that the hedge ratio is

                   C(1, 1) − C(1, 0)   14.579 − 7.2968
            H1 =                     =                 = 0.7671,            (9.6)
                   S(1, 1) − S(1, 0)   104.86 − 95.367

which is the same as the Delta. In fact, in continuous hedging the option delta
gives the hedge ratio, or the exposure of the option to the underlying. The
Delta is then termed a hedge parameter.
N. Chriss [14] pages 133–140 says that for binomial trees the Delta should be
calculated as in (9.6) so that it agrees with the binomial hedge ratio. Hull [37]
calculates this via
                                           9.2 The Gamma (Γ ) of an Option     123


                                     C(u2 S) − C(d2 S)
                            ∆C ≈                       ,                      (9.7)
                                        u2 S − d2 S
which gives the value 0.7718. This is very close to the BS value. There is
a corresponding formula for the Delta of the put. This is supported by an
article by A. Pelsser and T. Vorst, [61]. What one does depends on whether
one wants to use the Delta as a sensitivity measure or as a hedge ratio.



9.2 The Gamma (Γ ) of an Option

The Gamma is the rate of change of Delta with respect to the un-
derlying. So for calls

                                  ∂∆C   ∂2C    n(d1 )
                         ΓC =         =      =   √                            (9.8)
                                   ∂S   ∂S 2   Sσ T
and for puts, the same answer

                                  ∂∆P   ∂2P    n(d1 )
                         ΓP =         =      =   √ .                          (9.9)
                                   ∂S   ∂S 2   Sσ T
Here, n(x) ≡ N  (x).
For the example the values are 0.0202 in both cases. For the binomial tree we
can use the approximation

                                 f (x − h) − 2f (x) + f (x + h)
                    f  (x) ≈                                  .            (9.10)
                                              h2
In fact, by Taylor’s theorem (approximation)

             f (x − h) − 2f (x) + f (x + h)            h2 (4)
                                            ≈ f    (x) +    f (x),
                          h2                             24
from which (9.10) follows.
Applying this approximation to the binomial tree, using h = 1,

                        12.317 − 2 × 11.507 + 10.833
                 ΓC ≈                                = 0.186.
                                     12
This is not close to 0.0202 and so indicates that one must be very careful.
A.Pelsser and T. Vorst [ibid.] show that a good approximation for Gamma is
124    9 The Greeks
                                                       
               2          C(u2 S) − C(S) C(S) − C(d2 S)
       ΓC ≈ 2         ×                 −                               (9.11)
           u S − d2 S        u2 S − S       S − d2 S

and in the example this approximation gives 0.01957, which is much closer to
the BS value of 0.0202. We have written C(S) to mean the call price when
the present (stock) price is S, etc.
Chriss [ibid., pages 175–178], gives the formula

                              C(2,2)−C(2,1)   C(2,1)−C(2,0)
                              S(2,2)−S(2,1) − S(2,1)−S(2,0)
                       ΓC ≈                                             (9.12)
                                    S(1, 1) − S(1, 0)

and a similar formula for puts. This gives 0.02336.
Delta can be regarded as the hedge ratio. So the Gamma gives the rate at
which this hedge ratio is changing with changing values of the underlyings. It
is also an important tool in hedging.



9.3 The Theta (Θ) of an Option

In the Black and Scholes case we have for calls


                         ∂C      ∂C
                    ΘC =     =−
                         ∂t      ∂T
                           S(0)n(d1 )σ
                        =−     √       − rKe−rT N (d2 )                 (9.13)
                              2 T

and for puts

                              S(0)n(d1 )σ
                   ΘP = −         √       + rKe−rT N (−d2 ).            (9.14)
                                 2 T
The values in Example 7.2 are -8.8143 and 0.2341.
Chriss [ibid., pages 308–312] indicates that for the binomial tree we can use

                                   C(2, 1) − C(0, 0)
                           ΘC =                      .                  (9.15)
                                         2∆t
In the example these are (9.6943 − 11.50712726)/0.2 = −9.064 and 0.07515.
It can be shown that

                               1
                   Θ + rS(0)∆ + σ 2 S(0)2 Γ − rC(0) = 0,                (9.16)
                               2
                                            9.5 The Rho (ρ) of an Option     125

so we have another formula for Θ from this by rearrangement. Actually (9.16)
is the (continuous time) Black and Scholes partial diﬀerential equation (PDE)
for option pricing. This could be written more precisely. Solve the boundary
value problem for u = u(t, x):

                                      1
             ut (t, x) + rxux (t, x) + σ 2 uxx (t, x) − ru(t, x) = 0
                                      2
for x > 0 and t > 0 and with ﬁnal condition u(T, x) = (x − K)+ . Then the
(call) option price at time t is given by C(t) = u(t, S(t)).



9.4 The Vega (κ) of an Option

Vega is not a Greek letter. Kappa (κ) (a Greek letter) was previously used
in place of vega. Anyway, vega is the rate of change of the option price
with respect to σ.
For the BS model we have for the call and put option

                                   ∂C       √
                      κC = κ P =      = S(0) T n(d1 ).                     (9.17)
                                   ∂σ
In the example κC = κP = 30.30143. For the binomial model we could use
the approximation

                        C(0.16) − C(0.14)
                                          = 29.3788.
                              0.02


9.5 The Rho (ρ) of an Option

The rho (ρ) is the rate of change of the option price with respect to
interest rates.
For the BS call option price

                                ∂C
                         ρC =      = KT e−rT N (d2 )                       (9.18)
                                ∂r
and for the put

                               ∂P
                      ρP =        = −KT e−rT N (−d2 ).                     (9.19)
                               ∂r
These give values 65.4164 and -25.0673 respectively. For the binomial model
we could use the approximation
126    9 The Greeks


                             C(0.11) − C(0.09)
                      ρC ≈                     = 66.7966
                                   0.02
and

                          P (0.11) − P (0.09)
                   ρP ≈                       = −23.6887,
                                 0.02
which is an approximation of the same order as the BS values.

Remark 9.2. While these Greeks have been presented for European calls and
puts, they can be computed for any derivative product.



9.6 Exercises

Exercise 9.3. Produce a spreadsheet to implement the results on page 121
and to evaluate the Black and Scholes Greeks.

Exercise 9.4 (The Greeks). With the data S(0, 0) = 90, r = 8%, T = 1,
N = 10, ∆t = 0.1 and σ = 22%, construct the 10-step tree to compute
European call and put prices. You would use the spreadsheet to compute the
call and obtain the put prices using call-put parity.
Now use your spreadsheet to obtain CRR estimates for the Greeks: Delta (∆),
Gamma (Γ ), rho (ρ), vega; compare them with the corresponding BS values.
Compute also the BS value for Theta (Θ) and show that

                                   1 2
              Θ + r · S(0) · ∆ +     · σ · S(0)2 · Γ − rC(0) = 0
                                   2
10

Dividends




In this chapter we shall discuss the modelling of a dividend paying stock. It
will be good to recall some basic deﬁnitions about dividends.
When dividends are paid there are three important dates. These are te <
tc < tp . Here tp − tc is about two weeks, tc − te about seven days. These
three dates relate to shares traded on a stock exchange (e.g., NYSE). On date
tp , the dividend cheques are sent out. On tc the corporation (attached to the
shares) closes the books, deciding who is entitled to dividend payment, namely
shareholders on the company register at that time. For shares traded on a
stock exchange there is the third date (not all shares are publicly listed), te
called the ex-dividend date. This means the following: if you own the share
just before te you are entitled to the dividend, and if you sell the shares just
after te you will still get the dividend but the buyer will not. At ex-dividend
dates there should be a share price drop equal to the dividend amount (or
close to that amount). Perhaps you should look for this in the ﬁnancial press
(ex-dividend dates are usually provided).
If the drop did not occur, you could buy the shares just before te and sell
them just after te , at about the same price. This deal would entitle you to the
dividends, giving an arbitrage proﬁt.
With this preamble, we shall simplify a little. Each time t = k will be regarded
as an ex-dividend date at which the dividend will be denoted by Dk . Of course,
if there are no dividends paid at time t = k, then we can accommodate this by
setting Dk = 0. We shall see that the dividends are sometimes state-dependent
as in Section 10.1, where the dividends are a percentage of the spot price; or
state-independent when the dividends may be announced ahead of time of
payment. Much of the discussion below can be generalized in various ways.
Our discussion will be close to that given in Chriss [14]. There is also fur-
ther discussion in Hull [ [37], pages 398–401] and in Chapter 5 of Cox and
Rubinstein [19].
We begin with some observations about forward prices.
128    10 Dividends

10.1 Some Basic Results about Forwards

Lemma 10.1. Let f (n, j) be the forward price negotiated at time t = n in
state j to buy asset S at time t = n + 1. Then p(n, j) is the risk-neutral
up-probability if and only if

       f (n, j) = p(n, j)S(n + 1, j + 1) + (1 − p(n, j))S(n + 1, j).          (10.1)

Proof. We use the usual notation.
The result is necessary since if π is the risk neutral up probability:


      π(n, j)                                1 − π(n, j)
 0=           [S(n + 1, j + 1) − f (n, j)] +             [S(n + 1, j) − f (n, j)] .
      R(n, j)                                  R(n, j)

For the converse, we hedge the (n + 1, j + 1) upstate Arrow-Debreu security
using cash and long forward contracts. That is, we seek H0 (n, j) and H1 (n, j)
so that


          1 = H0 (n, j)R(n, j) + H1 (n, j) [S(n + 1, j + 1) − f (n, j)]       (10.2)

          0 = H0 (n, j)R(n, j) + H1 (n, j) [S(n + 1, j) − f (n, j)] .         (10.3)

Multiply (10.2) by S(n + 1, j) − f (n, j) and (10.3) by S(n + 1, j + 1) − f (n, j)
and subtracting the results leads to

                               f (n, j) − S(n + 1, j)           p(n, j)
         H0 (n, j) =                                          =
                       R(n, j)(S(n + 1, j + 1) − S(n + 1, j))   R(n, j)

by equation (10.1). But the present value of the portfolio which hedged the
Arrow-Debreu security is H0 since the present value of a forward contract is
0. However,

                                              π(n, j)
                                H0 (n, j) =
                                              R(n, j)

and the result p(n, j) = π(n, j) follows.                                         2

Lemma 10.2.
                        f (k, j) = S(k, j) · R(k, j) − Dk+1 .                 (10.4)
                                  10.2 Dividends as Percentage of Spot Price      129

Proof. This follows from (10.1) and


            π(k, j)                             1 − π(k, j)
S(k, j) =           [S(k + 1, j + 1) + Dk+1 ] +             [S(k + 1, j) + Dk+1 ] .
            R(k, j)                               R(k, j)

                                                                                    2



10.2 Dividends as Percentage of Spot Price

This means the dividends are state-dependent so the dividend paid at (k, j)
is D(k, j) = δ(k)S(k, j). Suppose δ(k) = δ (a constant). Sometimes we shall
write 1 + δ = exp(q∆t). We have in this case

      f (n, j) = (1 − δ(n + 1))S(n, j)R(n, j) ≡ (1 − δ)S(n, j)R(n, j).          (10.5)

This follows as


                      π(n, j)
                0=            [(1 − δ)u(n, j)S(n, j) − f (n, j)]
                      R(n, j)
                       1 − π(n, j)
                     +             [(1 − δ)d(n, j)S(n, j) − f (n, j)]
                         R(n, j)

and


                   π(n, j)
       S(n, j) =           [(1 − δ)u(n, j)S(n, j) + δu(n, j)S(n, j)]
                   R(n, j)
                      1 − π(n, j)
                    +             [(1 − δ)d(n, j)S(n, j) + δd(n, j)S(n, j)] .
                        R(n, j)

                                                                 j n−j
              √ model with cum-dividend prices S(n, j) = S(0, 0)u d
Consider the CRR                                                       .
Here u = exp(σ ∆t) = 1/d, R = exp(r∆t), π = (R − d)/(u − d).
Then the ex-dividend prices form a recombining tree of prices. These ex-
dividend prices are

                  S̃(n, j) = S(0, 0)(1 − δ(1)) . . . (1 − δ(n))uj dn−j ,

(where some of the δ(k) could be 0). By (10.5), π is the risk-neutral up prob-
ability for the ex-dividend tree as well.
We suppose the ex-dividend price is modelled by S̃:
130    10 Dividends


                   S̃(n, j) = S(0, 0)(1 − δ(1)) . . . (1 − δ(n))uj dn−j      (10.6)

as given above. In order to price on this tree of prices, we need to compute
π(n, j) for each (n, j). Here we use Lemma 10.1. Let

                                                 R−d
                                 π(n, j) = π =       ,                       (10.7)
                                                 u−d
where we have assumed a CRR model. Then we claim


 π S̃(n + 1, j + 1) + (1 − π)S̃(n + 1, j) = (1 − δ(n + 1))S̃(n, j)R(n, j). (10.8)

From (10.5), π in (10.7) is the risk-neutral probability that we should use in
the backwardization formula.
To establish (10.8), we note that the left hand side is

                                                                              
 S(0, 0)     (1 − δ(1)) · · · (1 − δ(n + 1)) πuj+1 dn+1−j−1 + (1 − π)uj dn+1−j
           = S(0, 0)(1 − δ(1)) · · · (1 − δ(n + 1))uj dn−j [πu + (1 − π)d]
           = S(0, 0)(1 − δ(1)) · · · (1 − δ(n + 1))uj dn−j R
           ≡ S̃(n, j)(1 − δ(n + 1))R(n, j),

as required.

Example 10.3. Consider a three-step CRR binomial tree with u = 1.5, d = 0.5,
R = 1.1, π = 0.6, δ(1) = 0.05, δ(2) = 0, δ(3) = 0.06. The European call
option for K = 60 is $36.00 while the American call price is $37.43. So early
exercise must be optimal. Early exercise is suggested at (2, 2). Early exercise
for American call options usually occurs just before the ex-dividend, if at all.
This can be seen easily with examples.

Remark 10.4. Let V (n, j) denote the value at (n, j) of an American style call
option written on a dividend paying stock S. Let S̃ denote the ex-dividend
price process of S. Then
                π(n, j)V (n + 1, j + 1) + (1 − π(n, j))V (n + 1, j)
 V (n, j) ≥
                                      R(n, j)
                π(n, j)[S̃(n + 1, j + 1) − K]+ + (1 − π(n, j))[S̃(n + 1, j) − K]+
            ≥
                                               R(n, j)
                                                                         +
                  π(n, j)S̃(n + 1, j + 1) + (1 − π(n, j))S̃(n + 1, j) − K
            ≥
                                           R(n, j)
                                 10.2 Dividends as Percentage of Spot Price   131
                             +
            [f (n, j) − K]
           =
                 R(n, j)
                                                      +
                                               K
           = S̃(n, j) − δ(n + 1)S̃(n, j) −
                                             R(n, j)
                         +
           > S̃(n, j) − K

if δ(n + 1) = 0 and R(n, j) > 1.
This shows that early exercise can occur at t = n in some state only when
δ(n + 1) > 0.

Example 10.5. In this example we show even more clearly that it is some-
times optimal to early-exercise an American call option. Consider a one-step
binomial model.


                             S̃(1, 1) = Su(1 − δ)
                             S̃(1, 0) = Sd(1 − δ)
                                        R−d
                                    π=
                                        u−d
                             C(1, 1) = [Su(1 − δ) − K]+
                             C(1, 0) = [Sd(1 − δ) − K]+ .

Suppose now that Sd(1 − δ) > K; then


                           π                   1−π
               CE (0, 0) =   [Su(1 − δ) − K] +     [Sd(1 − δ) − K]
                          R                     R
                                      K
                        = (1 − δ)S − .
                                      R

So CE (0, 0) < S − K provides that S is large enough. In fact if S is such that

                                                 
                                                1
                                     δS > K 1 −     ,
                                                R

that is,

                              d(1 − δ)S > K,

this implies that the call would be exercised at t = 0.
132    10 Dividends

10.3 Binomial Trees with Known Dollar Dividends

It is no longer so easy to form a recombining tree of ex-dividend prices. How-
ever we may proceed as follows in the CRR framework.
Set


                              D1  D2  D3
                         D0 =    + 2 + 3 + ...
                              R   R   R
                              D2  D3  D4
                         D1 =    + 2 + 3 + ...
                              R   R   R
                              D3  D4  D5
                         D2 =    + 2 + 3 + ...
                              R   R   R

and so on. These quantities Dk represent the value at t = k of future dividends.
Deﬁne

                    S̃(n, j) = (S(0, 0) − D0 ) uj dn−j + Dn .

Then


                                          S̃(0, 0) = S(0, 0)
          π S̃(n + 1, j + 1) + (1 − π)S̃(n + 1, j) = RS̃(n, j) − Dn+1 .

By Lemma 10.2, the tree of prices S̃ behaves like ex-dividend prices and π
is the risk-neutral up probability at each node. Thus, we have a recombining
tree model for “lumpy dividends”.
We suppose the ex-dividend price is modelled by S̃:

                    S̃(n, j) = (S(0, 0) − D0 ) uj dn−j + Dn .              (10.9)

The motivation behind this modelling is that we consider the present value
S(0, 0) of a stock as composed of two parts: (a) D0 —the present value of future
(known) dividends, (b) S(0, 0) − D0 —the rest, which evolves in a “random
way”. Again we set

                                             R−d
                             π(n, j) = π =       ,                        (10.10)
                                             u−d
where we have assumed a CRR model. We now claim with this choice of
π(n, j) that
                        10.3 Binomial Trees with Known Dollar Dividends      133

   π S̃(n + 1, j + 1) + (1 − π)S̃(n + 1, j) = S̃(n, j)R(n, j) − Dn+1 ,    (10.11)

and so, from equation (10.4) and Lemma 10.1, the π in (10.10) is the correct
choice to use in the backwardization formula.
In fact the left hand side of (10.11) is

                                                      
               π (S(0, 0) − D0 ) uj+1 dn+1−j−1 + Dn+1
                                                            
                  + (1 − π) (S(0, 0) − D0 ) uj dn+1−j + Dn+1
                  = (S(0, 0) − D0 ) uj dn−j [πu + (1 − π)d] + Dn+1
                  = (S(0, 0) − D0 ) uj dn−j R + Dn+1
                                    
                  = R S̃(n, j) − Dn + Dn+1
                  = RS̃(n, j) + Dn+1 − RDn
                  = RS̃(n, j) − Dn+1 ,

as required.

Remark 10.6. For convenience we have written S(n, j) for the stock price when
there are no dividends and S̃(n, j) for the ex-dividend stock price when there
are dividends. When there are no dividends, the formulas for S and S̃ clearly
coincide.
A reason for the model (10.9) is to ensure recombining trees for the “lumpy
dividends”. See also Hull [ibid., pages 402–405].

Example 10.7. We price an American call option on such a dividend-paying
stock.
Suppose there are inputs S(0, 0) = 100, D1 = 0, D2 = 1, D3 = 0 and D4 = 0.
                                             √
Thus, with ∆t = 1, R = exp(0.01), u = exp(σ δt) = exp(0.15), d = 1/u.


                                 D2
                            D0 =    = 0.81873075
                                 R2
                                 D2
                            D1 =    = 0.90483742
                                  R
                            D2 = 0
                            D3 = 0
                            D4 = 0.

The American call price is $45.67. In this case notice that the European
and American call prices are the same, and there is no early exercise. With
134      10 Dividends

an American put option, there are always situations where it is optimal to
exercise early; with the American call, as here, there may not be optimal
choices to exercise early.

Example 10.8. We can rework this same example, Example 10.7, with inputs
D1 = 0, D2 = 10, D3 = 0 and D4 = 10. Then the American and European
call prices diﬀer with K = 80. They are now $32.72 and $31.76, respectively.
There should be an early exercise at time n = 3 in states j = 2 and j = 3. It
is known that an early exercise in American call options occurs just before an
ex-dividend date (if at all). Further discussion of early exercise of American
calls can be found in Hull [[37], page 254], Cox and Rubinstein, [[19], pages
236–245] and Jarrow and Turnbull [[43], Section 7.2]. A summary from the
last reference:

      The exercise of an American call option is optimal if and only if the
      dividend is large enough to replace the interest lost on the strike price
      K and the loss of the time value of the call. If the dividend is small,
      and the time to maturity is large, then early exercise will be unlikely

We do not digress to prove these claims, but note that in this last modiﬁcation
we can choose larger dividends to force an early exercise.

Remark 10.9. Let V (n, j) denote again the value at (n, j) of an American style
call option written of a dividend-paying stock S. Let S̃ denote the ex-dividend
price process of S. Then
                                                      +
                                             Dn+1 + K
                       V (n, j) ≥ S̃(n, j) −
                                               R(n, j)
                                              +
                                > S̃(n, j) − K

if Dn+1 = 0 and R(n, j) > 1.
This shows that early exercise can occur at t = n in some state only when
Dn+1 > 0.


10.4 Exercises

Exercise 10.10. Verify the results in Example 10.3.

Exercise 10.11. Establish the results in Remark 10.4.

Exercise 10.12. Verify the results in Example 10.7.

Exercise 10.13. Verify the results in Example 10.8.

Exercise 10.14. Establish the results in Remark 10.9.
11

Implied Volatility Trees




The references for this chapter are the articles: Derman and Kani [24], Chriss
[13] and Barle and Cakici [3]. The ﬁrst two papers are brought together in
Chapter 9 of Chriss [14].
There are, unfortunately, problems with the Black and Scholes option pricing
formula and with the basic CRR formula, which is an approximation to the
Black and Scholes formula. These problems arise because market data do not
support the constant volatility (σ) assumption. [See Appendix C that follows.]
Therefore, the Black and Scholes model does not reproduce the prices that
we see in the ﬁnancial press.
Both implied volatility trees (this chapter) and implied binomial trees (in
the next chapter) are binomial trees that are constructed to price options
consistently so they reproduce observed market prices for the options.
In the ﬁrst instance we shall focus on European put and call market prices.
There are two main applications for such constructions:

 1. They can be used to compute hedge ratios and the various Greeks.
 2. They can be used to estimate the cost of nonstandard/exotic options writ-
    ten on the same underlying, together with their hedge ratios and Greeks.

The ﬁrst sections deal with the original Derman and Kani constructions and
the last section with the variation by Barle and Cakici. In both approaches
the implied volatility structure is assumed. We shall use the Black and Sc-
holes implied volatility, but a CRR implied volatility could also be used. In a
sense, implied volatilities are just an alternative to quoting call or put prices.
We transform from one to the other with the Black and Scholes formula. In
practice the market provides only a ﬁnite number of option prices, and hence
a ﬁnite number of implied volatility values (for various strike prices and times
to maturity). An implied volatility surface is then constructed by interpolat-
ing or extrapolating from this ﬁnite number of values. Any call and put prices
136     11 Implied Volatility Trees

can be calculated using the appropriate implied volatility from this surface. In
Section 11.3 we specify an explicit surface. In what follows we shall, therefore,
assume that various call and put prices with diﬀerent strike prices and times
to maturity are known.



11.1 The Recursive Calculation

We shall present a forward recursive construction of S(n, j) starting from an
S(0, 0).
We shall assume that we have the following input data at time t = n − 1:

 1. S(n − 1, j) for j = 0, 1, 2, . . . , n − 1.
 2. V put (n − 1, j), which is the value at (n − 1, j) of a put option expiring at
    t = n with strike price K = S(n − 1, j) for j = 0, 1, 2, . . . , n − 1.
 3. V call (n − 1, j), which is the value at (n − 1, j) of a call option expiring at
    t = n with strike price K = S(n − 1, j) for j = 0, 1, 2, . . . , n − 1.
 4. R(n − 1, j) for j = 0, 1, 2, . . . , n − 1. This could be calculated from R(n −
    1, j) = exp(r(n−1)∆tn ) where ∆tn is the time interval (in years) between
    (n − 1)th and nth steps of the tree. Here r(n − 1) is an interest rate given
    as a % per annum. These values could also come from an interest model
    and could be state-dependent in general.
 5. λ(n − 1, j) for j = 0, 1, 2, . . . , n − 1, the Arrow-Debreu prices.

In Section 11.2 we discuss how to compute these inputs. We now show how
to compute the values for S(n, j) for j = 0, 1, 2, . . . , n. There are three cases.
Case 1
Suppose we are at node (n−1, j) and we know S(n, j +1) and we seek S(n, j).
Put for convenience K = S(n − 1, j). Then

                                1
       V put (n − 1, j) =               (1 − π(n − 1, j)) [K − S(n, j)] .    (11.1)
                            R(n − 1, j)

Now we use

                                       S(n, j + 1) − R(n − 1, j)K
                  1 − π(n − 1, j) =                               .          (11.2)
                                          S(n, j + 1) − S(n, j)

We can substitute (11.2) into (11.1) and rearrange the equation to solve for
S(n, j). This is
                                             11.1 The Recursive Calculation        137

                                                       S(n,j+1)
                   V put (n − 1, j)S(n, j + 1) + K K − R(n−1,j)
       S(n, j) =                                    S(n,j+1)
                                                                        ,     (11.3)
                             V put (n − 1, j) + K − R(n−1,j)

or, recalling K = S(n − 1, j),


                                                                     S(n,j+1)
             V put (n − 1, j)S(n, j + 1) + S(n − 1, j) S(n − 1, j) − R(n−1,j)
 S(n, j) =                                                   S(n,j+1)
                                                                                    .
                            V put (n − 1, j) + S(n − 1, j) − R(n−1,j)
                                                                              (11.4)
Case 2
Now suppose that we are at node (n − 1, j) and we know S(n, j) and we seek
S(n, j + 1). Let use set for convenience K = S(n − 1, j). Then

                                1
      V call (n − 1, j) =               π(n − 1, j) [S(n, j + 1) − K] .       (11.5)
                            R(n − 1, j)
Now we use

                                      R(n − 1, j)K − S(n, j)
                     π(n − 1, j) =                           .                (11.6)
                                       S(n, j + 1) − S(n, j)

We can substitute (11.6) into (11.5) and rearrange the equation to solve for
S(n, j + 1). This is

                                                       S(n,j)
                       V call (n − 1, j)S(n, j) + K   R(n−1,j) − K
       S(n, j + 1) =                                S(n,j)
                                                                        ,     (11.7)
                               V call (n − 1, j) + R(n−1,j) −K

or, recalling K = S(n − 1, j),


                                                           S(n,j)
                 V call (n − 1, j)S(n, j) + S(n − 1, j)   R(n−1,j) − S(n − 1, j)
 S(n, j + 1) =                                    S(n,j)
                                                                                    .
                             V call (n − 1, j) + R(n−1,j) − S(n − 1, j)
                                                                              (11.8)
Case 3
Suppose that we are at node (n − 1, j) and we know neither S(n, j) nor
S(n, j + 1). Let use set for convenience K = S(n − 1, j) and R = R(n − 1, j).
There are various approaches here. We shall choose the E. Derman and I.
Kani method. This is presented in [24].
Let S(n, j + 1) = Ku and S(n, j) = Kd where ud = 1. Then
138     11 Implied Volatility Trees
                                                        
                                 1   S(n, j + 1) − KR
          V   put
                    (n − 1, j) =                           [K − S(n, j)]
                                 R S(n, j + 1) − S(n, j)
                                         
                                 1 u−R
                               =            [1 − d] K
                                 R u−d
                                                 
                                 1 u−R            1
                               =              1 −     K
                                 R u − u1         u
                                         
                                 1 u−R
                               =             [u − 1] K
                                 R u2 − 1
                                         
                                 1 u−R
                               =            K,
                                 R u+1

which can be rearranged to

                                   K + V put (n − 1, j)
                                u= K                    .
                                   R −V
                                         put (n − 1, j)


Therefore,

                                S(n − 1, j) + V put (n − 1, j)
                           u=       S(n−1,j)
                                                                   .        (11.9)
                                    R(n−1,j) − V
                                                 put (n − 1, j)


Write


                             S(n, j + 1) = S(n − 1, j) · u                 (11.10)
                                                         1
                                S(n, j) = S(n − 1, j) · .                  (11.11)
                                                         u

We see which case applies in any situation.



11.2 The Inputs V put and V call

               (n,K)        (n,K)               (n,K)      (n,K)
The inputs PE      = PE     (0, 0) and CE     = CE     (0, 0) will stand for the
present (n = 0) value of puts and calls expiring at t = n with strike price K.
We shall assume for the moment that we have these values.
We calculate the value for Vput (n − 1, j).
We set K = S(n − 1, j). For k < j and use Lemmas 10.1 and 10.2 from
Chapter 10:
                                                         11.2 The Inputs V put and V call       139



           (n,K)                         1       
          PE       (n − 1, k) =                   π(n − 1, k)(K − S(n, k + 1))
                                     R(n − 1, k)
                                                                                    
                                                     +(1 − π(n − 1, k))(K − S(n, k))
                                         1
                                =                [K − S(n − 1, k)R(n − 1, k) + Dn ] ,
                                     R(n − 1, k)

where Dn = 0 if t = n is not an ex-dividend date. Let us note that the right
hand side of


      (n,K)                         1
     PE        (n − 1, k) =                 [K − S(n − 1, k)R(n − 1, k) + Dn ]              (11.12)
                                R(n − 1, k)

involves known quantities. (This is even the case if we have a stochastic interest
rate model.) We also have


                                 (n,K)
                                PE       (n − 1, k) = 0 if k > j                            (11.13)
                                 (n,K)
                                PE     (n − 1, j) = V put (n − 1, j).                       (11.14)

Now bring in the Arrow-Debreu prices:


                        j
          (n,K)                              (n,K)
       PE          =         λ(n − 1, k)PE           (n − 1, k)
                       k=0
                       j−1
                                             (n,K)
                   =         λ(n − 1, k)PE           (n − 1, k) + λ(n − 1, j)V put (n − 1, j)
                       k=0
                   = ΣP (n − 1, j) + λ(n − 1, j)V put (n − 1, j).

Here


                       j−1                                                              
                                                 1
ΣP (n−1, j) =                λ(n−1, k)                   [K − S(n − 1, k)R(n − 1, k)+Dn ] ,
                                             R(n − 1, k)
                       k=0
                                                                                    (11.15)
so

                                                 (n,S(n−1,j))
                                               PE              − ΣP (n − 1, j)
                       V put (n − 1, j) =                                      .            (11.16)
                                                           λ(n − 1, j)
140        11 Implied Volatility Trees

The calculation of the value for Vcall (n − 1, j).
This proceeds in an analogous way. Set K = S(n − 1, j). For k > j and using
Lemmas 10.1 and 10.2 from Chapter 10,


           (n,K)                     1       
       CE          (n − 1, k) =               π(n − 1, k)(S(n, k + 1) − K)
                                 R(n − 1, k)
                                                                             
                                             + (1 − π(n − 1, k))(S(n, k) − K)
                                     1
                               =             [S(n − 1, k)R(n − 1, k) − Dn − K] ,
                                 R(n − 1, k)

or


      (n,K)                       1
     CE       (n − 1, k) =                [S(n − 1, k)R(n − 1, k) − Dn − K]            (11.17)
                              R(n − 1, k)
      (n,K)
     CE       (n − 1, k) = 0        if k < j                                           (11.18)
      (n,K)
     PE       (n − 1, j) = V put (n − 1, j).                                           (11.19)

We now use the Arrow-Debreu securities so that:


                    n−1
       (n,K)                          (n,K)
      CE       =          λ(n − 1, k)CE       (n − 1, k)
                    k=j
                     n−1
                                          (n,K)
               =            λ(n − 1, k)CE         (n − 1, k) + λ(n − 1, j)V call (n − 1, j)
                    k=j+1

               = ΣC (n − 1, j) + λ(n − 1, j)V call (n − 1, j).

Then

                                              (n,S(n−1,j))
                                            CE             − ΣC (n − 1, j)
                      V call (n − 1, j) =                                              (11.20)
                                                       λ(n − 1, j)

where


                      n−1                                                       
                                           1
ΣC (n−1, j) =                λ(n−1, k)             [S(n − 1, k)R(n − 1, k)−Dn −K] .
                                       R(n − 1, k)
                     k=j+1
                                                                                       (11.21)
                                                11.3 A Simple Smile Example   141

11.3 A Simple Smile Example

This is Example 1 from Chriss [ibid., page 391]. We talk about implied volatil-
ity smiles because the function expressing implied volatility in terms of the
strike price is U-shaped, like a smile.
Suppose there are inputs


                S(0, 0) = 100
                   ∆tn = 1 year for all n
                  r(n) = 0.05 for all n
                R(n, j) = exp(0.05) = 1.051271096 for all n, j
                          ⎧ K
                          ⎨ − 20 + 20 if K ≤ 110
                  σimp =
                          ⎩ K
                            − 10 + 25.5 if K ≥ 110.

                                                  (n,K)
This last statement means that if we want PE     we use the Black and Scholes
formula with T = n, σ = σimp , r = 0.05, and a similar statement for calls.
In Chriss’s example, the CRR option pricing formula is used, rather than
Black and Scholes. For simplicity we shall use the Black and Scholes formula
throughout.
Thus,


                    (1,100)
                  PE          = 4.8649 with σ = 0.15


                   λ(0, 0) = 1

                                    (1,100)
                                  PE
               V put (0, 0) =             = 4.8649
                                  λ(0, 0)

                                  S(0, 0) + V put (0, 0)
                         u=       S(0,0)
                                  R(0,0) − V
                                             put (0, 0)

                                    100 + 4.8649
                              =     100            = 1.161834
                                  1.05127 − 4.8649

                   S(1, 1) = S(0, 0)u = 116.1834

                                  S(0, 0)
                   S(1, 0) =              = 86.0708
                                    u
142    11 Implied Volatility Trees

                                  R(0, 0)S(0, 0) − S(1, 0)
                      π(0.0) =                             = 0.6328
                                     S(1, 1) − S(1, 0)
                                  π(0, 0)
                      λ(1, 1) =           = 0.6020
                                  R(0, 0)
                                  1 − π(0, 0)
                      λ(1.0) =                = 0.3493.
                                    R(0, 0)

We are now ready to move to time t = 2.
We have already found λ(1, j), j = 0, 1.
           2,S(1,0)          2,S(1,1)
We need PE         and CE      . These are computed using the Black and
Scholes formula with r = 0.05, T = 2 and σ = 15.70% when K = S(1, 0) =
88.1344, σ = 13.88% when K = S(1, 1) = 113.4629. This gives


                                  2,S(1,0)
                              PE             = 1.5860149

                                  2,S(1,1)
                              PE             = 9.32615591

                                  2,S(1,0)
                              CE             = 21.838626

                                  2,S(1,1)
                              CE             = 6.6606311.

We set S(2, 1) = 100. In fact we shall set S(4, 2) = S(6, 3) = · · · = 100. Of
course, this is not the only choice. Suppose [see (11.15) and (11.21)]


           ΣP (1, 0) = 0
                       λ(1, 0)
           ΣP (1, 1) =         [S(1, 1) − S(1, 0)R(1, 0)] = 6.1969
                       R(1, 0)
           ΣC (1, 1) = 0
                       λ(1, 1)
           ΣC (1, 0) =         [S(1, 1)R(1, 1) − S(1, 0)] = 16.8406.
                       R(1, 1)

Then


                                     2,S(1,0)
                                  PE           − ΣP (1, 0)
                V put (1, 0) =                             = 5.0661
                                             λ(1, 0)
                                     2,S(1,1)
                                  PE           − ΣP (1, 1)
                V put (1, 1) =                             = 4.9034
                                             λ(1, 1)
                                                   11.3 A Simple Smile Example       143
                                      2,S(1,0)
                                     CE      − ΣC (1, 0)
                   V call (1, 0) =                       = 15.9650
                                           λ(1, 0)
                                      2,S(1,1)
                                     CE      − ΣC (1, 1)
                   V call (1, 1) =                       = 10.4370.
                                           λ(1, 1)

Actually, not all these calculations are needed.
So, by (11.4) and (11.8),


                                                          S(2,1)
                  V put (1, 0)S(2, 1) + S(1, 0) S(1, 0) − R(1,0)
      S(2, 0) =                                     S(2,1)
                                                                       = 56.8625
                           V put (1, 0) + S(1, 0) − R(1,0)

and

                                                    S(2,1)
                  V call (1, 1)S(2, 1) + S(1, 1)    R(1,1) − S(1, 1)
      S(2, 2) =                            S(2,1)
                                                                       = 131.2428.
                           V call (1, 1) + R(1,1) − S(1, 1)

We can then calculate


                         R(1, 0)S(1, 0) − S(2, 0)
            π(1, 0) =                             = 0.8296
                            S(2, 1) − S(2, 0)
                         R(1, 1)S(1, 1) − S(2, 1)
            π(1, 1) =                             = 0.6171
                            S(2, 2) − S(2, 1)
                         1 − π(1, 0)
            λ(2, 0) =                λ(1, 0) = 0.0507
                           R(1, 0
                         1 − π(1, 1)           π(1, 0)
            λ(2, 1) =                λ(1, 1) +         λ(1, 0) = 0.4794
                           R(1, 1)             R(1, 0)
                         π(1, 1)
            λ(2, 2) =            λ(1, 1) = 0.3746.
                         R(1, 1)

We have used here the forward recurrence relations of Jamshidian to compute
the Arrow-Debreu prices.
We may now proceed to time t = 3.
This proceeds in the same way except for the computation of the central
S(3, 1) and S(3, 2). These are computed by (11.9)–(11.11).
144    11 Implied Volatility Trees

                                        S(2, 1) + V put (2, 1)
                                  u=    S(2,1)
                                        R(2,1) − V
                                                   put (2, 1)

                                                 put
                                         100 + V (2, 1)
                                    =    100
                                        R(2,1) − V
                                                   put (2, 1)


                          S(3, 2) = S(2, 1) · u = 100u

                                                 1   100
                          S(3, 1) = S(2, 1) ·      =     .
                                                 u    u

For this we need V put (2, 1):


                               PE3,100 − ΣP (2, 1)
              V put (2, 1) =
                                     λ(2, 1)

                  PE3,100 = 4.19851762        using σ = 0.15

                           λ(2, 0)
               ΣP (2, 1) =         [S(2, 1) − S(2, 0)R(2, 0)]
                           R(2, 0)
                           λ(2, 0)
                         =         [100 − S(2, 0)R(2, 0)] = 1.9398
                           R(2, 0)

              V put (2, 1) = 4.7106


                       u = 1.151269614

                 S(3, 2) = 115.1269


                 S(3, 1) = 86.8606,

and now we proceed as before. Further steps are left to the reader.



11.4 In General

This procedure will work whenever we know σimp (n, K), which will allow us
to calculate PEn,K and CE
                        n,K
                            for various choices of (n, K) (given r, S(0, 0)).
These could be calculated by the CRR formula or from the Black and Scholes
formula. It depends on the meaning of σimp that is being used. In the example
                                        11.5 The Barle and Cakici Approach      145

above, σimp (n, K) did not depend on n. Sometimes we may wish to allow
dependence on n as options become volatile near expiry date.
In practice σimp (n, K) is only known for a discrete number of choices (n, K).
In that case we can construct an implied volatility surface σimp (n, K)
by extrapolation and interpolation. Chriss [[14], pages 405–408] has a short
section on bilinear interpolation of implied volatilities.

Remark 11.1. Sometimes we may meet problems. At each construction we
need to test that the formulae give

                S(n, j) < S(n − 1, j)R(n − 1, j) < S(n, j + 1).              (11.22)

There is nothing in the procedure that we have described that guarantees this.
We would expect (11.22) always holds if there are no arbitrage opportunities
in the market prices. Sometimes there may be (small) arbitrage opportunities
that cannot be exploited, and this may imply that (11.22) is violated. If this
is the case, then Derman and Kani suggest the choices:

 1. If S(n, j + 1) is known and S(n, j) > S(n − 1, j)R(n − 1, j), replace S(n, j)
    from the procedure by

                                      S(n, j + 1)S(n − 1, j − 1)
                       S  (n, j) =                              .           (11.23)
                                              S(n − 1, j)

 2. If S(n, j) is known and S(n, j + 1) < S(n − 1, j)R(n − 1, j), replace
    S(n, j + 1) from the procedure by

                                          S(n, j)S(n − 1, j + 1)
                       S  (n, j + 1) =                          .           (11.24)
                                                S(n − 1, j)

Of course 1. arises when using Case 1 and 2. arises when using Case 2.
The rationale for this modiﬁcation is given in Derman and Kani [24, page 9]
and in Chriss [14, pages 379–384]. We hope you will not meet these problems.
When we use these modiﬁcations we must also not use the oﬀending market
        (n,S(n−1,j))       (n,S(n−1,j))
prices PE            and CE             , respectively.



11.5 The Barle and Cakici Approach

Barle and Cakici [3] claimed that the Derman and Kani approach which we
have presented can generate negative risk-neutral probabilities as we have de-
scribed in Section 11.4. In fact, such negative probabilities will arise whenever
146     11 Implied Volatility Trees

                                  S(n, i) > f (n, i)                      (11.25)

or

                                  f (n, i) > S(n, i + 1)                  (11.26)

for some node (n, i) [see Section 10.1]. We will describe the Barle and Cakici
approach, but we will use our notation.
For (constant) interest rate r and dividend rate q we can set

        f (n, i) = S(n, i) exp[(r − q)∆t]                                 (11.27)
                 = π(n, i)S(n + 1, i + 1) + (1 − π(n, i))S(n + 1, i)      (11.28)

for one period forward prices [see Section 10.1]. For simplicity of presentation
we set q = 0 and write R = exp[r∆t]. We also use the notation
                                        n
                                                                 +
                        C(K, n) =           λ(n, i) [S(n, i) − K]         (11.29)
                                      i=0

for the price of the call option that expires at t = n and the strike price is K.
                                                                     n,K
P (K, n) for puts is deﬁned in a similar way. Clearly C(K, n) ≡ CE       (0, 0) of
previous sections. We again construct {S(n, j), π(n, j)} by forward induction.
We shall assume that that we have the following input data at t = n − 1:

 1. S(n − 1, j) for j = 0, 1, 2, . . . , n − 1.
 2. C(f (n − 1, i), n) for i = 0, 1, 2, . . . , n − 1.
 3. R(n − 1, j) = R for j = 0, 1, 2, . . . , n − 1.
 4. λ(n − 1, j) for j = 0, 1, 2, . . . , n − 1.

Remark 11.2. We let the reader explore the use of a more general term struc-
ture for the interest rates as we did in earlier sections.

We seek now S(n, j) with

                     f (n − 1, j) < S(n, j + 1) < f (n − 1, j + 1)        (11.30)

for j = 0, 1, 2, ..., n − 1, and then

                                            f (n − 1, j) − S(n, j)
                         π(n − 1, j) =                                    (11.31)
                                            S(n, j + 1) − S(n, j)

satisﬁes 0 < π(n − 1, j) < 1 for j = 0, 1, 2, ..., n − 1.
Let us note that
                                              11.5 The Barle and Cakici Approach           147



                              n
   C(f (n − 1, i), n) =            λ(n, j) [S(n, j) − f (n − 1, i)]
                          j=i+1
                                  n−1
                          1
                      =           λ(n − 1, j) [f (n − 1, j) − f (n − 1, i)]
                          R j=i+1
                              1
                          +     λ(n − 1, i)π(n − 1, i) [S(n, i + 1) − f (n − 1, i)] .
                              R
                                                                               (11.32)

Here and below we do not give as much detail as in earlier sections. We
challenge the reader to ﬁll in the details.
Deﬁne


                                               n−1
∆c (n − 1, i) = RC(f (n − 1, i), n) −                 λ(n − 1, j) [f (n − 1, j) − f (n − 1, i)]
                                              j=i+1
                                                                                      (11.33)
which is a known value at t = n − 1.
Then by (11.31)

 ∆c (n − 1, i) = λ(n − 1, i)π(n − 1, i) [S(n, i + 1) − f (n − 1, i)]
                                                     
                               f (n − 1, i) − S(n, i)
               = λ(n − 1, i)                            [S(n, i + 1) − f (n − 1, i)] ,
                               S(n, i + 1) − S(n, i)
                                                                              (11.34)

which can be rearranged to express S(n, i + 1) in terms of S(n, i):

                                              ∆ci Si − λi [fi − Si ]fi
                       S(n, i + 1) =                                                  (11.35)
                                                ∆ci − λi [fi − Si ]

where

                                        ∆ci ≡ ∆c (n − 1, i)
                                        Si ≡ S(n, i)
                                         fi ≡ f (n − 1, i)
                                        λi ≡ λ(n − 1, i).

In a similar way we can use equation (11.34) to express S(n, i) in terms of
S(n, i + 1):
148      11 Implied Volatility Trees

                                        λi [Si+1 − fi ]fi − ∆ci Si+1
                        S(n, i) =                                                 (11.36)
                                            λi [Si+1 − fi ] − ∆ci
with
                                      Si+1 ≡ S(n, i + 1).

Starting with the value of S at a central node at t = n we can calculate the
upper and lower values of S on the tree at t = n by using equations (11.35)
and (11.36).
If n is even we set

                                            n
                                     S(n,     ) = S(0, 0)Rn .                     (11.37)
                                            2
but if n is odd, we shall require that

                          S(n, i)S(n, i + 1) = f (n − 1, i)2                      (11.38)

with i = (n−1)
           2 . This leads to

                                                                           
                                    λ(n − 1, i)f (n − 1, i) − ∆c (n − 1, i)
       S(n, i) = f (n − 1, i)                                                 .   (11.39)
                                    λ(n − 1, i)f (n − 1, i) + ∆c (n − 1, i)

Let us note that f (n − 1, i) < f (n − 1, i + 1) for each i = 0, 1, 2, ..., n − 2, since
we can assume S(n − 1, i) < S(n − 1, i + 1) for all these i, and equation (11.28)
holds.
If the calculations do not yield

                    f (n − 1, i) < S(n, i + 1) < f (n − 1, i + 1),

then instead set

                                       1
                  S(n, i + 1) =          [f (n − 1, i) + f (n − 1, i + 1)] ,
                                       2
if S(n, n) ≤ f (n − 1, n − 1), set S(n, n) = 2f (n − 1, n − 1) − S(n, n − 1) and
if S(n, 0) ≥ f (n − 1, 0), set S(n, 0) = 2f (n − 1, 0) − S(n, 1).
Once S(n, j) have been constructed so that (11.30) holds, we can ﬁnd
π(n − 1, j) from (11.31) and hence, λ(n, j), from the forward induction for-
mula (4.10); f (n, j) is computed from (11.27); and the C(f (n, i), n + 1) are
calculated as described in section 11.4 from a given implied volatility surface.
                                                              11.6 Exercises   149

11.6 Exercises

Exercise 11.3. Implement the example in Section 11.3.

Exercise 11.4 (Implied volatility). Produce a spreadsheet that will pro-
vide Black and Scholes prices for European call and put Options. Your spread-
sheet should have clearly labelled cells for inputs S(0), K, r, T and σ, as well
as out puts d1 , d2 , N (d1 ), N (d2 ) together with C(0) and P (0) the European
call and put prices. Let us now consider the following data from the AFR of
Monday, July 29, 2002 for September Telstra call and put options. The spot
prices was $4.75. What is the expiry date of the September options? Calculate
in years, the time from July 29 to the expiry of the September options. Use
one year equals 365 days and r = 4.92% per annum as the interest rate for
about 60 days (this was the 60-day BBSW rate supplied by ANZ Bank). The
call option data is shown in Tables 11.1 and 11.2.


      Table 11.1. Call price and implied volatility data for Exercise 11.4.
                      K     Call price-ask Implied volatility-ask
                    4.00         0.78               na
                    4.25         0.54               na
                    4.50         0.33              14.59
                    4.75         0.16              16.01
                    5.00         0.06              16.78
                    5.25         0.02              18.07
                    5.50         0.01              22.15
                    5.75         0.01              22.71




       Table 11.2. Put price and implied volatility data for Exercise 11.4.
                       K    Put price-ask Implied volatility-ask
                     4.00       0.02              32.07
                     4.25       0.04              28.69
                     4.50       0.09              28.47
                     4.75        0.2              27.79
                     5.00       0.38              32.99
                     5.25       0.59              37.81
                     5.50       0.83               na
                     5.75       1.07               na
                     6.00       1.32               na
                     6.25       1.57               na


Now do the following:
150     11 Implied Volatility Trees

 1. Calculate the early-exercise premium for each of the above put options.
    What do you need to assume?
 2. For each call and put, compute the Black and Scholes Implied Volatil-
    ity for the options, and compare your answers with those quoted.
 3. Plot σ versus K for the calls and puts. Suppose that you wish to estimate
    the value of a call with K = 4.60. What value of σ would you use in
    the Black and Scholes formula to compute the call price? What is your
    estimate for this call price?

Remark 11.5 (Interpolation method). Here is a useful interpolation method.
Let x1 < x2 < x3 < x4 and let y1 , y2 , y3 , y4 be arbitrary. Then the cubic
polynomial that passes through (x1 , y1 ), (x2 , y2 ), (x3 , y3 ) and (x4 , y4 ) is given
by


             (x − x2 )(x − x3 )(x − x4 )         (x − x1 )(x − x3 )(x − x4 )
 f (x) =                                  y1 +                                 y2
           (x1 − x2 )(x1 − x3 )(x1 − x4 )       (x2 − x1 )(x2 − x3 )(x2 − x4 )
                (x − x1 )(x − x2 )(x − x4 )         (x − x1 )(x − x2 )(x − x3 )
           +                                 y3 +                                 y4
              (x3 − x1 )(x3 − x2 )(x3 − x4 )      (x4 − x1 )(x4 − x2 )(x4 − x3 )

and we use this formula to compute the interpolation for x2 < x < x3 .

Exercise 11.6. Construct a four-step implied volatility tree (n = 0, 1, 2, 3, 4)
for the inputs S(0, 0) = 90, r = 5%, ∆t = 1, and we have a (time-independent)
implied volatility surface function (a smile)
                                                      2
                                                    K
                       σimp (n, K) = 0.15 + 0.1 1 −
                                                    90

Exercise 11.7. Show that equation (11.31) implies 0 < π(n − 1, j) < 1 for
j = 0, 1, 2, ..., n − 1.

Exercise 11.8. Use the forward induction formula for state prices (see Sec-
tion section 8.7) and the formula (10.1) to show that equation (11.32) holds.

Exercise 11.9. Show that equations (11.32) and (11.33) imply equation
(11.34).

Exercise 11.10. Show that equations (11.35) and (11.36) hold.

Exercise 11.11. Show that
                                          n
                            RS(0, 0) =         λ(n, j)f (n, j)                  (11.40)
                                         j=0

holds for any n.
                                                                 11.6 Exercises      151

Exercise 11.12. Show that

    C(f (n − 1, i), n) − P (f (n − 1, i), n) = S(0, 0) − R−n f (n − 1, i)         (11.41)

holds for any n and i.

Exercise 11.13. Let

           ∆p (n − 1, i) =RP (f (n − 1, i), n)
                               i−1
                           −         λ(n − 1, j) [f (n − 1, i) − f (n − 1, j)]
                               j=0

and show that ∆p (n − 1, i) = ∆c (n − 1, i) for all i = 0, 1, 2, ..., n − 1.
12

Implied Binomial Trees




The basic references here are Rubinstein [65] and [66]. The latter was reprinted
in Jarrow [42]. We shall also provide an extension of the implied binomial tree
method by Jackwerth [39]. There are several other extensions that we do not
treat, for example, Brown and Toft [10] and Lim and Zhi [46].
The goal here is to produce a binomial (recombining) tree model for a “stock”
(or currency, etc.), which will produce prices for some options that agree with
market observed prices. Once obtained, the applications are similar to those
described in Chapter 11. Once we have completed our discussion we may wish
to compare our results with the Derman and Kani approach of the previous
chapter.



12.1 The Inputs

The inputs for this construction are the following:
S, the present value of the “stock” price.
An expiry date T . We will write T = N · ∆t, where N will be speciﬁed
below.
Interest rates. Rubinstein assumes constant interest rates so that (in our
notation) R(n, j) = R = exp(r · ∆t) for all (n, j). It will be obvious from the
procedure that the method can be generalized to the case R(n, j) = R(n) =
exp(r(n) · ∆t) for all (n, j) for a given set of values for r(n), n = 0, 1, 2, ....
Dividends. Lumpy or continuous dividends can be incorporated, but we shall
not discuss dividends in these notes. The case of continuous (proportional),
dividends can be more easily incorporated by replacing R(n, j) above with
R(n, j) = R(n) = exp((r(n) − δ(n)) · ∆t), for suitable δ(n). If the “stock”
is a currency (exchange rate), then r(n) = rd (n), the domestic interest rate,
154    12 Implied Binomial Trees

and δ(n) = rf (n), the foreign interest rate. Even though this case is easy to
incorporate, we shall leave details to the reader.
The possible stock values at time T will be S(N, j), for j = 0, 1, 2, .., N .
There are various way these can be chosen. We shall describe two methods:
Rubinstein’s 1994 and van der Hoek’s 1998.
European call market prices. These all have expiry at time T . Their
present values will be denoted by C̃i and will correspond to strike prices Ki for
i = 1, 2, 3, . . . , m. These will be known market prices, and we shall construct
the binomial tree so that the “theoretical” values from our model (Ci ) give
these market values: Ci = C̃i . Rubinstein relaxes this to the requirement
that Cib ≤ Ci ≤ Cia , where C a and C b are (market) bid and ask prices for
calls. He then also relaxes S(0, 0) = S to S b ≤ S(0, 0) ≤ S b . While these
features can be included we shall require that S(0, 0) = S and Ci = C̃i .



12.2 Time T Risk-Neutral Probabilities

Once the tree has been constructed we shall show


                           N
        S = S(0, 0) =           λ(N, j)S(N, j)                                  (12.1)
                          j=0


and
                    N
                                                 +
       C̃i = Ci =         λ(N, j) [S(N, j) − Ki ]    for i = 1, 2, . . . , m.   (12.2)
                    j=0


We shall need to compute the values for λ(N, j), or equivalently Qj , where

                                       Qj
                           λ(N, j) =      ,   j = 0, 1, . . . N.                (12.3)
                                       RN
Here Qj > 0 and Q0 + Q1 + . . . + QN = 1. The Qj will be called the time
T risk-neutral probabilities. We shall give methods for their computation
below. For now we assume that we know {S(N, j), Qj } for j = 0, 1, . . . , N .
In summary we seek Qj > 0, j = 0, 1, . . . , N so that


                           N
                    1=          Qj                                              (12.4)
                          j=0
                                        12.3 Constructing the Binomial Tree           155
                        N
             RN · S =         Qj S(N, j)                                            (12.5)
                        j=0
                        N
                                                   +
            R · C̃i =
              N
                              Qj [S(N, j) − Ki ]        for i = 1, 2, . . . , m.    (12.6)
                        j=0


Remark 12.1. An interesting issue is whether there exist choices of S(N, j)
and Qj for j = 0, 1, 2, . . . , N so that (12.4), (12.5), (12.6) hold. If N ≥ m this
is possible (as we shall see).



12.3 Constructing the Binomial Tree

We now describe the As Simple as One, Two, Three construction. We
deﬁne q(n, j) as the risk-neutral probability of a path ending at (n, j) at time
t = n. We have the recurrence


                     q(n + 1, j + 1) = q(n, j) · π(n, j)                            (12.7)

                         q(n + 1, j) = q(n, j) · [1 − π(n, j)]                      (12.8)


                         q(n + 1, 0) = q(n, 0) · [1 − π(n, 0)].                     (12.9)

We assume that q(n, j) is independent of the path that leads from (0, 0) to
                      n!
(n, j). With Cjn = j!(n−j)! , deﬁne

                                Q(n, j) = Cjn · q(n, j).                           (12.10)

This gives the risk-neutral probability of ending in state j at time t = n.
Recall that in our recombining binomial tree there are Cjn paths leading (0, 0)
to (n, j), each with the same risk-neutral probability q(n, j). Then

                     Q(N, j) = Qj       for j = 0, 1, 2, . . . , N.                (12.11)

So

                                  Qj
                     q(N, j) =             for j = 0, 1, 2, . . . , N.             (12.12)
                                  CjN

Now by (12.7) and (12.8) we backwardize
156     12 Implied Binomial Trees


                       q(n, j) = q(n + 1, j + 1) + q(n + 1, j)           (12.13)

so we compute

                    q(n + 1, j + 1)         q(n + 1, j + 1)
        π(n, j) =                   =                                    (12.14)
                        q(n, j)       q(n + 1, j + 1) + q(n + 1, j)

and

                   π(n, j)S(n + 1, j + 1) + (1 − π(n, j))S(n + 1, j)
       S(n, j) =                                                     .   (12.15)
                                           R
Here here we could have used R(n) in place of R.
One, Two, Three refers to equations (12.13), (12.14), (12.15).

Example 12.2. This is part of an example from Rubinstein.
N = 3 and S = 100. S(3, 0) = 78.27, S(3, 1) = 92.16, S(3, 2) = 108.51,
S(3, 3) = 127.76. Q0 = 0.10, Q1 = 0.40, Q2 = 0.30, Q3 = 0.20,
Note that (12.5) holds.

                              Qj S(3, j) = 102.796 = 100 · R3
                         j

implies R = 1.009234462... Actually R will be chosen rather than calculated.
Then


                                         Q0    Q0
                             q(3, 0) =       =    = 0.1000
                                         C03   1
                                         Q1    Q1
                             q(3, 1) =       =    = 0.1333
                                         C13   3
                                         Q2    Q2
                             q(3, 2) =       =    = 0.1000
                                         C23   3
                                         Q3    Q3
                             q(3, 3) =       =    = 0.2000.
                                         C33   1

We shall perform all calculations to four decimal places. Then


                        q(2, 0) = q(3, 0) + q(3, 1) = 0.2333
                                       12.3 Constructing the Binomial Tree   157

                       q(2, 1) = q(3, 1) + q(3, 2) = 0.2333

                       q(2, 2) = q(3, 2) + q(3, 3) = 0.3333

and (for interest)


                          Q(2, 0) = 1 · q(3, 0) = 0.2333


                          Q(2, 1) = 2 · q(3, 1) = 0.4666

                          Q(2, 2) = 1 · q(3, 2) = 0.3333,

which sum to 1. Then


                                     q(3, 1)
                           π(2, 0) =         = 0.5714
                                     q(2, 0)
                                     q(3, 2)
                           π(2, 1) =         = 0.4286
                                     q(2, 1)
                                     q(3, 3)
                           π(2, 2) =         = 0.6667.
                                     q(2, 2)

Further


                      π(2, 0)S(3, 1) + (1 − π(2, 0))S(3, 0)
          S(2, 0) =                                         = 85.4184
                                        R
                      π(2, 1)S(3, 2) + (1 − π(2, 1))S(3, 1)
          S(2, 1) =                                         = 98.2598
                                        R
                      π(2, 2)S(3, 3) + (1 − π(2, 2))S(3, 2)
          S(2, 2) =                                         = 120.2330.
                                        R

So that completes steps One, Two, Three for t = 2. Now


                       q(1, 0) = q(2, 0) + q(2, 1) = 0.4667
                       q(1, 1) = q(2, 1) + q(2, 2) = 0.5333,

and for interest,
158    12 Implied Binomial Trees



                           Q(1, 0) = 1 · q(1, 0) = 0.4667
                           Q(1, 1) = 1 · q(1, 1) = 0.5333,

whose sum is 1. Then


                                       q(2, 1)
                             π(1, 0) =         = 0.5000
                                       q(1, 0)
                                       q(2, 2)
                             π(1, 1) =         = 0.5625
                                       q(1, 1)

and


                       π(1, 0)S(2, 1) + (1 − π(1, 0))S(2, 0)
          S(1, 0) =                                          = 90.9987
                                         R
                       π(1, 1)S(2, 2) + (1 − π(1, 1))S(2, 1)
          S(1, 1) =                                          = 109.6076
                                         R

So that completes steps One, Two, Three for t = 1. Finally,


           q(0, 0) = q(1, 1) + q(1, 0) = 1.0000

          Q(0, 0) = 1 · q(0, 0) = 1.0000

                       q(1, 1)
          π(0, 0) =            = 0.5333
                       q(0, 0)
                       π(0, 0)S(1, 1) + (1 − π(0, 0))S(1, 0)
          S(0, 0) =                                          = 100.0000
                                         R

and we are complete. Note that π(n, j) is not constant as in the CRR model.



12.4 A Basic Theorem and Applications

Theorem 12.3. Suppose that

                   π(n, j)V (n + 1, j + 1) + (1 − π(n, j))V (n + 1, j)
      V (n, j) =                                                          (12.16)
                                            R
                                       12.4 A Basic Theorem and Applications       159

for all (n, j). Then

                                          n
                                                         V (n, j)
                                J(n) ≡         Q(n, j)                          (12.17)
                                         j=0
                                                           Rn

is independent of n. Recall that here

                                   Q(n, j) = Cjn · q(n, j).                     (12.18)

Proof. Write

                                                  V (n, j)
                                     Z(n, j) =
                                                    Rn
then

       Z(n, j) = π(n, j)Z(n + 1, j + 1) + (1 − π(n, j))Z(n + 1, j).             (12.19)

Therefore,


             n
  J(n) =          Q(n, j)Z(n, j)
            j=0
             n
        =         Q(n, j) [π(n, j)Z(n + 1, j + 1) + (1 − π(n, j))Z(n + 1, j)]
            j=0
             n
        =         Cjn · q(n, j) [π(n, j)Z(n + 1, j + 1) + (1 − π(n, j))Z(n + 1, j)]
            j=0
             n
        =         Cjn [q(n + 1, j + 1)Z(n + 1, j + 1) + q(n + 1, j)Z(n + 1, j)]
            j=0

        = q(n + 1, n + 1)Z(n + 1, n + 1)
                 n−1
            +          Cjn q(n + 1, j + 1)Z(n + 1, j + 1)
                 j=0
                  n
            +          Cjn q(n + 1, j)Z(n + 1, j) + q(n + 1, 0)Z(n + 1, 0)
                 j=1

        = q(n + 1, n + 1)Z(n + 1, n + 1)
                  n
                        n    n
                                  
            +           Cj + Cj−1   q(n + 1, j)Z(n + 1, j) + q(n + 1, 0)Z(n + 1, 0)
                 j=1
160      12 Implied Binomial Trees
             n+1
         =         Cjn+1 q(n + 1, j)Z(n + 1, j)
             j=0
             n+1
         =         Q(n + 1, j)Z(n + 1, j)
             j=0

         =J(n + 1).

Here we used

                                   Cjn+1 = Cjn + Cj−1
                                                  n
                                                      .

Thus

                                     J(n) = J(n + 1)

for any n, and so the theorem has been proved.                                 2

Remark 12.4. Equation (12.19) implies that {Z(n, ·)} is a martingale process.
Such processes have constant means. This is what the theorem states.

Example 12.5. Use V (n, j) = Rn . Then (12.16) holds trivially. Thus, J(N ) =
J(n) for any n < N . But J(N ) = Q0 + Q1 + . . . + QN = 1, so J(n) = 1 for
all n < N , that is,

                                      n
                                           Q(n, j) = 1.                   (12.20)
                                     j=0


Example 12.6. Use V (n, j) = S(n, j), then (12.16) holds, so again J(0) =
J(N ) implies


                           N                              N
                                          S(N, j)   1
      Q(0, 0)S(0, 0) =          Q(N, j)      N
                                                  = N    Qj S(N, j) = S   (12.21)
                          j=0
                                           R       R j=0


by (12.5) and so by Example 12.5, (with n = 0), S(0, 0) = S.

Example 12.7. Use V (n, j) = Ci (n, j), which is the value of the European call
option priced by the constructed tree with strike price Ki . As this satisﬁes
(12.16), J(0) = J(N ) implies
                                                          12.5 Choosing Time T Data        161
                                            N
                                                            V (N, j)
                 Q(0, 0)Ci (0, 0) =               Q(N, j)
                                            j=0
                                                              RN
                                            N
                                                       [S(N, j) − Ki ]+
                                        =         Qj                    = C̃i ,       (12.22)
                                            j=0
                                                             RN


so by Example 12.5 (with n = 0), Ci (0, 0) = C̃i .

Remark 12.8. What these three examples show is that if we construct the
binomial tree as described, then the model will satisfy (12.1) and (12.2). This
means also that this tree produces the market values for the various call
options.



12.5 Choosing Time T Data

We now address the question of choosing S(N, j) and Qj so that equations
(12.4), (12.5) and (12.6) hold.
Rubinstein’s 1994 Method
Construct a CRR tree with S(0, 0) = S and N ≥ m suﬃciently large. Then
set

                                 S(N, j) = S(0, 0)uj dN −j

and let

                                 Qj = CjN π j (1 − π)N −j

where π = (R − d)/(u − d). Rubinstein then solves the quadratic linear
programming problem.
Find Qj ≥ 0 : j = 0, 1, 2, . . . , N with

                             N
                                                  2
                                       Qj − Qj         = minimum                     (12.23)
                            j=0


subject to (12.4), (12.5) and (12.6), which we state again:


                       N
                 1=         Qj                                                    (12.4)
                      j=0
162     12 Implied Binomial Trees
                         N
      exp(rT ) · S =           Qj S(N, j)                                      (12.5)
                         j=0
                         N
                                                +
      exp(rT ) · C̃i =         Qj [S(N, j) − Ki ]   for i = 1, 2, . . . , m.   (12.6)
                         j=0


There are various standard routines for solving such problems.

Remark 12.9. Are there feasible solutions? That is, are there Qj ≥ 0 which
satisfy (12.4),(12.5),(12.6). The answer is “yes” if we assume that there are no
arbitrage prices amongst the market prices, the inputs. This is not a trivial
result. The details are provided in Appendix D.
If the problem is feasible, then there will be an optimal solution as the mini-
mization is of a continuous function over a bounded and closed set.
We may not be able to guarantee Qj > 0 for all j for the optimal solution.
If it turns out that for the optimal solution (which is unique—hence we can
say “the”) has Qj1 = 0, then we can drop S(N, j1) and reduce N to N − 1
and change ∆t to NN−1 · ∆t so R is replaced by exp(r NT−1 ). We may need to
repeat this argument a number of times. Clearly not all the Qj = 0, so this
culling must eventually stop.
Rubinstein [63] discusses other objective functions in place of the one in
(12.23).

van der Hoek’s 1998 Method
We select the S(N, j) in such a way that a solution for the Qj can be written
down explicitly. For simplicity we shall assume that the strike prices are
equally spaced, but this can be relaxed. However, the formulae are then a
little more complicated [see Appendix E]. In practice the market prices are
usually given with equally spaced strike prices. Let ∆ = Ki − Ki−1 for each
i = 2, 3, . . . , m. Some alternative choices are given later.
Set N = m − 1, as we shall see. ρ = exp(r · T ) or P (0, T )−1 .
Choose Qj as follows:


                   ρ                       
              Qj =     C̃j−1 − 2C̃j + C̃j+1           for j = 2, 3, . . . , m − 1   (12.24)
                  ∆
             Qj = 0 for j = 1, m                                                    (12.25)
                   ρ                
           Qm+1 =    · C̃m−1 − C̃m                                                  (12.26)
                  ∆
                             m+1
              Q0 = 1 −             Qj .                                             (12.27)
                             j=1
                                                12.5 Choosing Time T Data      163

Choose Sj as follows:


                                                       −C̃1
                                     S − C̃1 + K1 · C̃2∆
                          S0 = ρ ·                                          (12.28)
                                                    −C̃1
                                         1 + ρ · C̃2∆
                          Sj = K j     for j = 1, 2, . . . , m              (12.29)
                                      C̃m
                        Sm+1 = ρ ·        + Sm .                            (12.30)
                                     Qm+1

Example 12.10. To see how this works we consider a numerical example with
S = 20.14 and an expiry date of 30 days. Suppose ρ = 1.0043. The call prices
are C(18.00) = 2.27, C(19.00) = 1.35, C(20.00) = 0.63, C(21.00) = 0.22.
Thus ∆ = 1.
We then calculate by the above formulae the values of Qj and Sj as seen in
Table 12.1.

                        Table 12.1. Values of Qj and Sj .
                                j       S      Q
                                0    17.3009 0.0760
                                1    18.0000 0.0000
                                2    19.0000 0.2009
                                3    20.0000 0.3113
                                4    21.0000 0.0000
                                5    21.5366 0.4118



We leave it to the reader to verify this is a solution. Of course we have rounded
oﬀ our answers to four decimal places. In this example m = 4, as we had 4
option prices. We note that there are 4 nonzero values of Qj here. So we
choose N = 3, then we set S(3, j) and q(3, j) as in Table 12.2.


                    Table 12.2. Values of S(3, j) and q(3, j).
                                j    S(3, j) q(3, j)
                                0    17.3009 0.0760
                                1    19.0000 0.0670
                                2    20.0000 0.1038
                                3    21.5366 0.4118



We can then proceed to the One, Two, Three algorithm to obtain
164    12 Implied Binomial Trees

                          Table 12.3. Table of π, q.
                              j     π(2, j) q(2, j)
                              0     0.4682 0.1430
                              1     0.6078 0.1707
                              2     0.7987 0.5155


                          Table 12.4. Table of π, q.
                               j    π(1, j) q(1, j
                               0    0.5442 0.3137
                               1    0.7512 0.6863


                          Table 12.5. Table of π, q.
                              j     π(0, j) q(0, j)
                              0     0.6863 1.0000




Now we can build the tree to get
                                ⎧
                                ⎨ 18.0706 for j = 0
                       S(2, j) = 19.5798 for j = 1
                                ⎩
                                  21.1969 for j = 2.
Then
                                    18.8649 for j = 0
                        S(1, j) =
                                    20.7649 for j = 1.
and
                              S(0, 0) = 20.1400.



12.6 Some Proofs and Discussion

In general a butterﬂy spread is obtained by buying calls with strikes X1 and
X3 > X1 , and selling two calls with strike X2 = (X1 + X3 )/2.
We note that Qj > 0 for j = 2, 3, . . . , m − 1 because C̃j−1 − 2C̃j + C̃j+1 is
then the price of a butterﬂy spread.
Also Qm+1 > 0 as C̃m < C̃m−1 , for we have assumed that K1 < K2 < . . . < Km .
Furthermore,
                                          12.6 Some Proofs and Discussion      165
                        m+1
                                      ρ
                               Qj =     · (C̃1 − C̃2 ) > 0
                         j=1
                                      ∆

and


                               ρ
                       Q0 = 1 −  · (C̃1 − C̃2 )
                               ∆
                               ρ
                          > 1 − P V (K2 − K1 ) = 0.
                               ∆

Therefore, Q0 > 0
One can show that if K2 > K1 then C(K1 ) − C(K2 ) < P V (K2 − K1 ). In fact,
suppose the reverse holds, viz., C(K1 ) − C(K2 ) ≥ P V (K2 − K1 ). Then short
the K1 call, buy the K2 call and invest P V (K2 − K1 ). At expiry date of the
calls, the value of this portfolio is


           V (T ) = −(S(T ) − K1 )+ + (S(T ) − K2 )+ + (K2 − K1 )
                    ⎧
                    ⎨ K2 − K1 > 0 if S(T ) < K1
                  = K2 − S(T ) > 0 if K1 ≤ S(T ) < K2
                    ⎩
                      0              if S(T ) ≥ K2 ,

which gives a type 2 arbitrage opportunity. This again is where we use the
assumption that there are no arbitrage opportunities in our models.
We have thus shown that Qj > 0 for j = 0, 2, 3, . . . , m − 1, m + 1 and their
sum is 1.
We now establish


                                  m+1
                          ρS =          Qj Sj                               (12.31)
                                  j=0


and
                                  m+1
                                                     +
                         ρC̃i =         Qj [Sj − Ki ] .                     (12.32)
                                  j=0
166       12 Implied Binomial Trees

In fact

  m+1
                    ρ     
                        m−1                     
          Qj Sj =           C̃j−1 − 2C̃j + C̃j+1 Kj
  j=0
                    ∆ j=2
                                                                          
                             ρ                                 C̃2 − C̃1
                    + ρC̃m +     C̃m−1 − C̃m Km + ρ S − C̃1 + K1
                             ∆                                       ∆
                        m−2
                    ρ
               =          C̃j [Kj+1 − 2Kj + Kj−1 ]
                    ∆ j=3
                     ρ
                    +  [C̃1 K2 + C̃2 K3 + C̃m Km−1 + C̃m−1 Km−2 − 2C̃2 K2
                    ∆
                 −2C̃m−1 Km−1 ] + ρC̃m
                                                                     
                     ρ                                    C̃2 − C̃1
                 +       C̃m−1 − C̃m Km + ρ S − C̃1 + K1
                    ∆                                           ∆
                  ρ
               = [C1 K2 + C̃2 K3 + C̃m Km−1 + C̃m−1 Km−2 − 2C̃2 K2
                 ∆
                 −2C̃m−1 Km−1 ] + ρC̃m
                                                                     
                     ρ                                    C̃2 − C̃1
                 +       C̃m−1 − C̃m Km + ρ S − C̃1 + K1
                    ∆                                           ∆
                         ρ                      ρ
               = ρS + C̃1 [K2 − ∆ − K1 ] + C̃2 [K3 − 2K2 + K1 ]
                        ∆                      ∆
                    ρ                                ρ
                 + C̃m−1 [Km−2 − 2Km + Km ] + C̃m [Km−1 − ∆ − Km ]
                    ∆                               ∆
               = ρS

as required. Also, for i = 1,

                    m+1                     m+1
                                     +
                          Qj [Sj − K1 ] =          Qj [Sj − K1 ]
                    j=0                      j=1
                                         = ρS − Q0 S0 − K1 [1 − Q0 ]
                                         = ρC̃1 .

We used S0 ≤ K1 (since C1 ≥ S − Kρ1 ) and

                                                                  
                                                  C̃2 − C̃1
                           Q0 S0 = ρ S − C̃1 + K1
                                                      ∆
                                           C̃2 − C̃1
                              Q0 = 1 + ρ             .
                                               ∆
                                               12.6 Some Proofs and Discussion   167

For i > 1,


 m+1                       m+1
                      +
        Qj [Sj − Ki ] =           Qj [Sj − Ki ]
  j=0                     j=i+1
        m−1
                                                             
                                              C̃m
   =            Qj [Kj − Ki ] + Qm+1       ρ      + Km − Ki
        j=i+1
                                             Qm+1
        m−1
                                           ρ
   =            Qj [Kj − Ki ] + ρC̃m +       [C̃m−1 − C̃m ][Km − Ki ]
        j=i+1
                                           ∆
            m−2                            m−1
        ρ                          ρ
   =          C̃j [Kj+1 − Ki ] − 2         C̃j [Kj − Ki ]
        ∆ j=i                      ∆ j=i+1
                  m
            ρ                                ρ
        +           C̃j [Kj−1 − Ki ] + ρC̃m + [C̃m−1 − C̃m ][Km − Ki ]
            ∆ j=i+2                          ∆
            m−2
     ρ                                  ρ
   =          C̃j [Kj+1 − 2Kj + Kj−1 ] + [C̃i ∆ + C̃i+1 2∆ − 2C̃i+1 ∆]
    ∆ j=i+2                             ∆
        ρ                                                              
    +       −2C̃m−1 [Km−1 − Ki ] + C̃m−1 [Km−2 − Ki ] + C̃m [Km−1 − Ki ]
       ∆
                 ρ
    + ρC̃m + [C̃m−1 − C̃m ][Km − Ki ]
                ∆
            ρ                                   ρ
   =ρC̃i + C̃m−1 [−2Km−1 + Km−2 + Km ] + C̃m [Km−1 + ∆ − Km ]
           ∆                                    ∆
   =ρC̃i ,

as required.
This shows that van der Hoek’s 1998 recipe works.

Example 12.11. Consider S = 100, σ = 0.20, T = 1, r = 0.05 and calcu-
late Black and Scholes call prices for K = 75 + 5m for m = 0, 1, . . . , 10.
Then C(75) = 28.9744, C(80) = 24.5888, C(85) = 20.4693, C(90) = 16.6994,
C(95) = 13.3465, C(100) = 10.4506, C(105) = 8.0214, C(110) = 6.0401,
C(115) = 4.4666, C(120) = 3.2475, C(125) = 2.3243.
In Table 12.6, Q(10, j) and S(10, j) are calculated from van der Hoek’s
1998 algorithm. We then calculate q(10, j) = Q(10,j)
                                                 Cj10
                                                       and we are ready to
start the One, Two, Three algorithm.
                                               √
CRR − S(10, j) = 100uj d10−j where u = exp(σ ∆t) and d = 1/u. We note
that the CRR prices are more widespread ([53, 188]) than from van der
Hoek’s 1998 algorithm ([70, 137]).
168     12 Implied Binomial Trees

                     Table 12.6. One, Two, Three algorithm.
            j    Q(10, j    S(10, j )   q(10, j   CRR − S(10, j) BS–Prob
           0     0.0779      70.7289    0.0779      53.1286       0.0795
           1     0.0559      80.0000    0.0056      60.2924       0.0559
           2     0.0735      85.0000    0.0016      68.4222       0.0732
           3     0.0876      90.0000    0.0007      77.6482       0.0872
           4     0.0961      95.0000    0.0005      88.1182       0.0956
           5     0.0981     100.0000    0.0004      100.0000      0.0976
           6     0.0942     105.0000    0.0004      113.4839      0.0938
           7     0.0857     110.0000    0.0007      128.7860      0.0855
           8     0.0745     115.0000    0.0017      146.1515      0.0744
           9     0.0622     120.0000    0.0062      165.8584      0.0622
           10    0.1941     137.5879    0.1942      188.2227      0.1951


The column BS–Prob lists the Black and Scholes risk-neutral probabilities
that S(T ) ∈ [K − 0.5∆, K + 0.5∆]. We use the fact

                           Prn (S(T ) > K) = N (d2 (K)),                   (12.33)

from which we get the approximations


Prn (S(T ) ∈ [K − 0.5∆, K + 0.5∆]) = N (d2 (K − 0.5∆)) − N (d2 (K + 0.5∆))
                                     1
                                   ≈ [N (d2 (K − ∆)) − N (d2 (K + ∆))]
                                     2

for K = Kj with j = 1, 2, . . . , 11. Further,


                                                  1
 Prn (S(T ) ∈ [K1 − 0.5∆, K1 + 0.5∆]) ≈ 1 −         [N (d2 (K)) + N (d2 (K + ∆))]
                                                  2
                                             1
Prn (S(T ) ∈ [K12 − 0.5∆, K1 + 0.5∆]) ≈        [N (d2 (K)) + N (d2 (K − ∆))]
                                             2

We note that BS − P rob(10, j) ≈ Q(10, j) for each j. The resulting tree in
this example can be used to price American and exotic derivatives under the
Black and Scholes model for the evolution of “stock” prices.



12.7 Jackwerth’s Extension

The procedure that we have described constructs a binomial tree that prices a
number of European call options with the same expiry consistent with market
prices. It is possible to modify this construction to consistently make the
                                                   12.7 Jackwerth’s Extension      169

tree price some other options (American style options, options with diﬀerent
maturities, path dependent options, etc). Jackwerth [39] showed how to do
this with his generalized binomial trees.
Let us ﬁrst review some earlier calculations. By (12.10) and (12.13)


   Q(n, j) = Cjn q(n, j)
           = Cjn [q(n + 1, j) + q(n + 1, j + 1)]
                                                 
               n Q(n + 1, j)      Q(n + 1, j + 1)
           = Cj                +
                      Cjn+1               n+1
                                       Cj+1
           = ω(n + 1, j + 1)Q(n + 1, j + 1) + (1 − ω(n + 1, j))Q(n + 1, j)
                                                                      (12.34)

where ω(n, j) ≡ nj , as can be easily checked.
This suggests a way for generalization

                                                            
                   j+1                                     j
 Q(n, j) = W                 Q(n+1, j+1)+ 1 − W                      Q(n+1, j) (12.35)
                   n+1                                    n+1

where W is any function that satisﬁes

                             W (0) = 0                                          (12.36)
                             W (1) = 1                                          (12.37)
                         0 < W (θ) < 1,      for 0 < θ < 1.                     (12.38)

In the earlier sections we used W (θ) ≡ θ, but we could choose W to be
piecewise linear—for example:
                         
                           cθ                 if 0 ≤ θ ≤ 12
                 W (θ) =                                        (12.39)
                           (2 − c)θ + (c − 1) if 12 ≤ θ ≤ 1,

with 0 < c < 2, which is to be chosen (convex for 0 < c < 1 and concave
for 1 < c < 2). Other forms can be chosen: piecewise linear functions with
several kinks, quadratic functions, S-shaped functions, an so on (see [46] for
example). With a choice of weight function W , equation (12.35) deﬁnes the
backward recurrence for Q(n, j), where Q(N, j) are still deﬁned as before. We
then deﬁne
                                            
                                       j+1       Q(n + 1, j + 1)
                    π(n, j) ≡ W                                  .              (12.40)
                                       n+1          Q(n, j)
170    12 Implied Binomial Trees

This generalizes the case where W (θ) ≡ θ and Q(n, j) = Cjn q(n, j) above.
Given S(N, j), this allows us to determine S(n, j) for each 0 ≤ n < N and
j = 0, 1, 2, ..., n − 1.
In fact Theorem 12.3 will still hold using (12.35) and (12.40) as deﬁning
Q(n, j) and π(n, j).
The tree constructed by this modiﬁcation is still consistent with (12.4)–(12.6).
The free parameter c in this example can be chosen so that the tree correctly
prices a further derivative to market values. Whether such a value of 0 < c < 2
can always be found for the piecewise linear function in (12.39) is a question
that is left to the reader. If not, other choices for W could be considered.
The only restrictions on W are those in (12.36)–(12.38), and in particular
(12.38) ensures that Q(n, j) > 0 for all (n, j).
If we need to build a tree to correctly price an additional k ≥ 1 derivatives
consistently to market values, we could start with choosing a piecewise linear
W with k kinks.



12.8 Exercises

Exercise 12.12. Implement Example 12.10 on a spreadsheet.

Exercise 12.13. Implement Example 12.2.

Exercise 12.14. Construct a four-step implied binomial tree (n = 0, 1, 2, 3, 4)
for the inputs S(0, 0) = 95, r = 5%, ∆t = 0.25. We are given the following
ﬁve European call prices for options expiring at T = 1: C(90) = $18.14,
C(95) = $15.04, C(100) = $12.33, C(105) = $10.00, C(110) = $8.02. [Here,
C(K) stands for the European call price expiring at T = 1 with strike price
K.]

Exercise 12.15. Show that Theorem 12.3 still holds when π(n, j) is deﬁned
via (12.40) for any choice of W that satisﬁes (12.36)–(12.38).
13

Interest Rate Models




We continue from the introduction made in Section 3.4 and construct multi-
period models based on available market data. The resulting model can be
used for interest rate derivative valuation and extended into other binomial
models where we wish to perform pricing under stochastic interest rates.
The diﬃculty with interest rate modelling is the fact that there are many
diﬀerent interest rates. In Section 3.4 we introduced P (t, T ), the value at time
t of 1 CAD (or one unit of domestic currency, say) at time T . Let us say this
in another way: It is the value at time t of a (ﬁxed income) security that pays
1 CAD at time T (under all conditions, or states of the world). The value of
the ﬁxed income security is known at expiry (T ), but its values are uncertain
at times between the present (t, say) and expiry. If one owns such a security,
we rely on the counterparty to pay us 1 CAD at time T without fail. Here
is the problem. Not all counterparties are equally reliable, (or what is called
creditworthy). For a counterparty with high credit rating, as determined by a
credit rating agency like Standard and Poors, we would expect a larger value
for each P (t, T ). There is now a large and growing literature on credit risk
and credit derivatives.
Interest rate modelling can be speciﬁed by modelling various variables.

 1. P (t, T ).
 2. y(t, T ) the yield to maturity deﬁned through

                         P (t, T ) = exp (−y(t, T ) · (T − t))
                                         1
                         y(t, T ) = −       ln P (t, T ).
                                       T −t

 3. f (t, T ) the forward rate deﬁned in continuous time through
                                                      
                                                  T
                         P (t, T ) = exp −            f (t, u)du
                                              t
172    13 Interest Rate Models

                                          ∂
                         f (t, T ) = −      ln P (t, T ).
                                         ∂T

 4. r(t) ≡ f (t, t) the spot rate (instantaneous or overnight rate) and
                                                         
                                              T          
                                                         
                       P (t, T ) = E exp −      r(u)du  Ft .
                                                t


where Ft ≡ σ{r(u) | 0 ≤ u ≤ t} represents the past history on the spot rates
up to the time t (see [29] for more details of this concept).
We can, in principle, start with any of these notions and derive the others.
Observed market data are obviously most closely connected with the quantity
P (t, T ). The modern Heath-Jarrow-Morton framework (or HJM) begins
with a model for f (t, T ). The Ho and Lee model is probably the simplest
model of this kind and we shall describe it below.
We shall ultimately be interested in determining values for R(n, j) = 1 +
r(n, j) and π(n, j) for various nodes in our tree models, for then we can price
contingent claims. As a by-product we can then compute values of P (t, T ) for
various values of (t, T ).
One of the ﬁrst inputs that we need from the market are the values of P (0, T ),
ideally for all T. There are various approaches depending on the data used.



13.1 P (0, T ) from Treasury Data

Consider the ﬁrst example.

Example 13.1. ([11]) We have three coupon bonds with expiry T = 1, 2, 3 with
face value $100 paying coupons once a year (starting in one year’s time). Their
coupon rates and prices are 6% and $99.07, 7% and $100, 8% and $102.62,
respectively. We can then determine P (0, 1), P (0, 2) and P (0, 3) by solving


                   99.07 = 106P (0, 1)
                     100 = 7P (0, 1) + 107P (0, 2)                        (13.1)
                  102.62 = 8P (0, 1) + 8P (0, 2) + 108P (0, 3)

yielding P (0, 1) = 0.9346, P (0, 2) = 0.8735 and P (0, 3) = 0.8162.

Unfortunately, life is not so simple.
Treasury notes/bills have maturities T < 1. In the USA they have face
value $100 and are classiﬁed as discount securities. If we have a 90-day bill
with 8% discount rate then its price would be
                                            13.1 P (0, T ) from Treasury Data     173

                                               
                                         1
                             98 = 100 1 − × 0.08
                                         4

so we could deduce that P (0, 0.25) = 0.98. See Hull [ibid., section 4.4] for
further discussion.
There are coupon bonds with coupons paid (usually) each 6 months and often
at some standard proportion of the face value (like 6% or 8%). Instead of
quoting prices of such bonds, their yields to maturity are often quoted, from
which their price can be calculated. Vice versa, the yield to maturity can
be uniquely determined from a bond’s price. We give these details later. Let
us assume that a bond that expires at Tn has coupon payments of C at
T1 , T2 , . . . , Tn . It has present value

                              n
                       P =         C P (0, Ti ) + F P (0, Tn )                  (13.2)
                             i=1

where F is the face value of the bond, and C is a given percentage (as speciﬁed
in Federal Reserve documentation) of F .
Let us return to Example 13.1. Suppose that instead of the data about the
3-year bond we have a 4-year bond with value $105 and coupon rate 9%. Then
we need to solve:


             99.07 = 106P (0, 1)
               100 = 7P (0, 1) + 107P (0, 2)                                    (13.3)
               105 = 9P (0, 1) + 9P (0, 2) + 9P (0, 3) + 109P (0, 4),

but now we can no longer determine (uniquely) the value of P (0, 3) and
P (0, 4). We can proceed in various ways.
We could assume an analytic form for P (0, t) like

                    P (0, t) = m(t) = a0 + b0 t + c0 t2 + d0 t3                 (13.4)

with a0 = 1 as P (0, 0) = 1. The equations (13.3) can then be used to com-
pute a0 , b0 , c0 , d0 , and then we obtain other values of P (0, t). Let us note a
couple of things. We cannot calculate values of P (0, t) for t greater than the
maturity of the bond with longest duration. We know that P (0, t) should be a
strictly decreasing function of t; it could happen that solving for the unknown
constants in (13.4) leads to a contradiction of this fact.
We could decide to be parsimonious and select a simpler form for P (0, t), like
174     13 Interest Rate Models

                         P (0, t) = m(t) = 1 + b0 t + c0 t2                   (13.5)

but then (13.3) is overdetermined for (13.5). We could instead seek b0 and c0
to minimize

                                         3
                                   J=         wi 2i                           (13.6)
                                        i=1

where w1 , w2 , w3 are positive weights summing to 1, and


                 1 = 99.07 − 106m(1)

                 2 = 100 − 7m(1) + 107m(2)

                 3 = 105 − 9m(1) + 9m(2) + 9m(3) + 109m(4).


We might even even impose an additional constraint on the parameters so that
m (t) ≤ 0 for 0 ≤ t ≤ 4 (b0 ≤ 0 and b0 + 8c0 ≤ 0). These type of curve-ﬁtting
issues also arise in various applications in statistics.
If we have bonds out to a long time horizon, like 10 or more years, we could also
consider ﬁtting cubic splines in much the same way as we have just described.
This means taking

                                                       k
                m(t) = a0 + b0 t + c0 t2 + d0 t3 +          Fj (t − tj )3+    (13.7)
                                                      j=1


for “knots” t1 , t2 , . . . , tk . We now need to ﬁnd (k +3) unknowns (recall a0 = 1)
to ﬁt the bond data exactly or with a weighted least squares method. Usually
only a few knots are used, placing most in the near time zone [0,2], where
most of the “action” is.
Some references to these methods include McCulloch [52] and Litzenberger
and Rolfo [47]. See also Appendix F. It seems that many practitioners calculate
the treasury’s discount curve as a spread to the discount curve from BBSW
data, which we describe in the next section.



13.2 P (0, T ) from Bank Data

We are now talking about the AA market. This is what we shall call the
market that quotes the bank bill swap rates, which are only approximately
AA in credit rating. We no longer have bonds, but the banks use what are
called bank bill swap (BBSW) rates. We now present some of these details.
                                               13.2 P (0, T ) from Bank Data      175

Swap Rates
The variable rate that applies between times t and t + δ will be rt (or more
precisely, rt,t+δ ). This rate will be known with certainty at time t. Investing
$1 at time t will yield 1 + rt δ at time t + δ. Now as

                              (1 + rt δ)P (t, t + δ) = 1                        (13.8)

we have
                                                      
                                      1       1
                        rt ≡ rt,t+δ =                −1 .                       (13.9)
                                      δ P (t, t + δ)

Consider now a swap performed at time t + δ. A payer-swap is one in which
a ﬁxed rate is paid and a ﬂoating/variable rate is received. A receiver-swap
has the reverse cash ﬂow. If the face value (or principle) is F and the ﬁxed
rate is κ, then the net ﬂow is

                                F · rt · δ − F · κ · δ.                        (13.10)

This can also be written as


                F · (rt − κ) · δ = F · (1 + rt δ) − F · (1 + κδ)
                                             1
                                 =F·                − F · (1 + κδ).
                                       P (t, t + δ)

This has present value (at time 0) given by


            P V = F · P (0, t) − F · (1 + κδ) · P (0, t + δ)
                = F · [P (0, t) − P (0, t + δ)] − F · κ · δ · P (0, t + δ).    (13.11)

Now consider a (payer-) swap where interest is exchanged at times δ, 2δ . . . , nδ.
The present value of all these cash ﬂows together is (using (13.11) repeatedly):


  P V = F · [P (0, 0) − P (0, δ)] − F · κ · δ · P (0, δ)
        + F · [P (0, δ) − P (0, 2δ)] − F · κ · δ · P (0, 2δ)
        + F · [P (0, 2δ) − P (0, 3δ)] − F · κ · δ · P (0, 3δ)
        +···
        + F · [P (0, (n − 1)δ) − P (0, nδ)] − F · κ · δ · P (0, nδ)
176    13 Interest Rate Models

       = F · [1 − P (0, nδ)] − F · κ · δ · [P (0, δ) + P (0, 2δ) + . . . + P (0, nδ)].
                                                                                 (13.12)

The choice of κ, the swap rate, is made so that the expression in (13.12) is 0.
Thus, we obtain the basic formula for κ:
                                                              
                     1             1 − P (0, nδ)
                  κ=                                             .             (13.13)
                     δ P (0, δ + P (0, 2δ) + . . . + P (0, nδ)

For semiannual swaps, δ = 0.5, and for quarterly swaps, δ = 0.25. We shall
write κ(nQ) for the n-year quarterly swap rate, and κ(nS) for the n-year
semiannual swap rate.
Computing P(0, t) from Market Data
The AA market provides BBSW (bank bill swap rates) for 30, 60, 90, 120,
                                         1    30    2            6
150 and 180 days. Then P (0, t) for t = 12 = 360 , 12 , . . . , 12 are given by the
simple discounting formula. For example,

                                             3          1
                      P (0, 0.25) = P (0,      )=      90                      (13.14)
                                            12    1 + 360 · i90

where i90 is the 90-day BBSW interest rate. Data and calculations are pro-
vided for an example with rates (quoted as percents) as of closing for a date
in 2002: 4.870, 4.910, 4.925, 4.910, 4.940, 4.950, and the overnight rate was
4.750.
The AA market provides 1Q, 2Q, 3Q (Q for quarterly) swap rates and 4S, 5S,
7S, 10S, 15S and 20S (S for semiannual) swap rates. Examples of such data
provided on the same date were 5.000, 5.125, 5.415 and 5.580, 5.680, 5.855,
6.010, 6.110, 6.160. Such data are provided by Reuters (for example).
Practitioners like to use semiannual swap rates and they often use the ap-
proximation
                                  4          2
                             κ(nQ)        κ(nS)
                          1+         ≈ 1+
                               4            2
or
                                                  2      
                                           κ(nQ)
                         κ(nS) = 2      1+               −1                    (13.15)
                                             4

when quarterly swap data are given (1Q, 2Q, 3Q). The output from (13.15) is
illustrated in Table 13.1.
Whether (13.15) is a good approximation can only be tested in any particular
interest rate model. It seems to work well in the Hull-White one-factor interest
                                                   13.2 P (0, T ) from Bank Data        177

                         Table 13.1. Discounting functions.
        Data 8/12/2002
                                               P(0,t)      z           a   b     c
            overnight 4.750                         1
       BBSW        30 4.870                    0.9960
                   60 4.910                    0.9919
                   90 4.925                    0.9878
                  120 4.910                    0.9839
                  150 4.940                    0.9798
                  180 4.950                    0.9758
                                 (approx)
      SWAPS         1Q 5.000 1S     5.031 0.9515 0.97423 0.97605 0.0245 -0.95029
                                          0.9270
                    2Q 5.125 2S     5.158 0.9031 0.97045 0.92772 0.0246 -0.89758
                                          0.8764
                    3Q 5.415 3S     5.452 0.8764 0.95575 0.90086 0.0245 -0.84626
                                          0.8376
                    4S 5.580 4S     5.580 0.8006 0.97018 0.82329 0.0227 -0.79698
                                          0.7767
                    5S 5.680 5S     5.680 0.7535
                    7S 5.855 7S     5.855
                   10S 6.010 10S    6.010
                   15S 6.110 15S    6.110
                   20S 6.160 20S    6.160



rate model—this is an example of an interest rate model with explicit formulas
for zero-coupon bond prices.
With this approximation the approximate values for κ(1S), κ(2S) and κ(3S)
are 5.041, 5.272 and 5.487 respectively.
Given κ(1S) (or rather its approximation) and P (0, 0.5) we can compute
P (0, 1) from
                                                        
                                       1 − P (0, 1)
                         κ(1S) = 2                         .
                                   P (0, 0.5) + P (0, 1)

This gives

                                          1 − κ(1S)
                                                2   · P (0, 0.5)
                             P (0, 1) =                            .                 (13.16)
                                               1 + κ(1S)
                                                     2

We now compute P (0, 1.5) and P (0, 2). Recall
                                                                          
                                             1 − P (0, 2)
             κ(2S) = 2                                                       ,
                             P (0, 0.5) + P (0, 1) + P (0, 1.5) + P (0, 2)

which is one equation for two unknowns P (0, 1.5) and P (0, 2). The way that
practitioners deal with this is to assume that for some (forward) rate y we
have
178       13 Interest Rate Models
                                                           
                                                       1
                           P (0, 1.5) = P (0, 1) ·
                                                     1 + y2
                                                           2
                                                       1
                             P (0, 2) = P (0, 1) ·             .
                                                     1 + y2

Setting

                                                1
                                        z=
                                              1 + y2

we have a quadratic equation for z:

                                    az 2 + bz + c = 0.                       (13.17)

Here

                                                   
                                             κ(2S)
                        a = P (0, 1) · 1 +
                                                2
                                               
                                         κ(2S)
                        b = P (0, 1) ·
                                           2
                            κ(2S)
                        c=          · [P (0, 0.5) + P (0, 1)] − 1
                               2

We then set

                                P (0, 1.5) = z · P (0, 1)
                                  P (0, 2) = z 2 · P (0, 1),

where
                                            √
                                     −b +     b2 − 4 · a · c
                               z=                            .
                                              2·a
This procedure can be generalized when values of κ(nS) are given. In fact, if

                    P (0, 0.5), P (0, 1), P (0, 1.5), . . . , P (0, n − 1)

are known, then we can compute (estimate) P (0, n− 12 ) and P (0, n) as follows.
Regard y as a forward rate applying over [n − 1, n] and suppose z is deﬁned
as above. Using the formula for κ(nS) we have

                                    az 2 + bz + c = 0,                       (13.18)
                                               13.2 P (0, T ) from Bank Data      179

where

                                          
                                     κ(nS)
           a = P (0, n − 1) · 1 +
                                       2
                                      
                                κ(nS)
           b = P (0, n − 1) ·
                                   2
               κ(nS)
           c=          · [P (0, 0.5) + P (0, 1) + . . . + P (0, n − 1)] − 1
                  2
                  κ(nS)
             =                [1 − P (0, n − 1)] − 1.
               κ((n − 1)S)

Then set


                                    1
                         P (0, n − ) = z · P (0, n − 1)
                                    2
                              P (0, n) = z 2 · P (0, n − 1)

where as before
                                         √
                                  −b +    b2 − 4 · a · c
                            z=                           .
                                          2·a
We can now give values for P (0, t) for t = 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5. These
are 0.9514, 0.9428, 0.9259, 0.9175, 0.9010, 0.8923, 0.8750, 0.8665 and 0.8497.
It is a good exercise to check these computations.
These calculations give values for a period of 5 years. As we do not have
values for κ(6S), κ(8S), κ(9S), κ(11S) and so on, we need to use further
approximations to compute further values of P (0, t) as above. We shall not go
into the details of this here. We could generalize the procedure above, but we
do not get a quadratic equation for z in that case. However, a simple approach
could be obtained by assuming that the longer term rates are “ﬂat” and we
obtain the “missing” swap rates by interpolation. Thus, we could approximate


                                1          1
                         κ(6S) =  · κ(5S) + · κ(7S)
                                2          2
                                2          1
                         κ(8S) = · κ(7S) + · κ(10S)                            (13.19)
                                3          3

and so forth, and then use the “quadratic” algorithm as above.
Once we have the values of P (0, t) for t a multiple of a half-year, we obtain
other values by interpolation.
180     13 Interest Rate Models

Computing P(0, T) from Market Data—A Second Version
This is another version used by practitioners. Some treasurers use a simpler
approach than the “quadratic method” just described. The procedure is the
same as just described for computing κ(nS) for integer values of n. The new
feature of this method is to set

                  κ((n + 0.5)S) = 0.5(κ(nS) + κ((n + 1)S)).            (13.20)

Once these values are known, we can calculate P (0, n+0.5) in terms of P (0, n)
whenever n is a multiple of 0.5. We use
                            ⎡                                    ⎤
                           ⎢          1 − P (0, n + 0.5)         ⎥
         κ((n + 0.5)S) = 2 ⎢
                           ⎣
                                                                 ⎥.
                                                                 ⎦     (13.21)
                                2(1 − P (0, n))
                                                + P (0, n + 0.5)
                                    κ(nS)

This can be arranged to give

                                    −1                                
                       κ((n + 0.5)S)         κ((n + 0.5)S)
  P (0, n + 0.5) = 1 +                    1−               (1 − P (0, n))
                             2                  κ(nS)
                                                                     (13.22)
which is simple recursive relation.

Remark 13.2. As a by-product, note that the following must hold:

                                                κ(nS)
                        κ((n + 0.5)S) <                    .           (13.23)
                                              1 − P (0, n)

Interpolation of P(0, T)
Suppose that we know P (0, T1 ) and P (0, T2 ), and we wish to estimate a value
for P (0, T ), where T1 < T < T2 . The following estimate is frequently used:

                       P (0, T ) = P (0, T1 )1−α P (0, T2 )α           (13.24)

where

                                        T − T1
                                   α=           .                      (13.25)
                                        T2 − T1
This is motivated, rather than proved, as follows. Write

                        P (0, T2 ) = P (0, T1 )e−r̄(T2 −T1 ) .         (13.26)
                                               13.2 P (0, T ) from Bank Data              181

This deﬁnes a “forward” rate r̄ for the period [T1 , T2 ]. We then make the
approximation

                          P (0, T ) = P (0, T1 )e−r̄(T −T1 )                           (13.27)

and so


                                                         TT −T
                                                              −T
                                                                 1
                                          P (0, T2 )        2    1
                   P (0, T ) = P (0, T1 )
                                          P (0, T1 )
                                             T −T1                   T −T1
                            = P (0, T1 )1− T2 −T1 P (0, T2 ) T2 −T1 ,

as claimed. These interpolated values of P (0, t) can be used to discount certain
cash ﬂows that fall on dates which are not integer multiples of 0.5 years ahead.
Other Discount Curves
We can now compute P̃ (0, t) for less creditworthy entities. We then have
P̃ (0, t) < P (0, t) for each t, but of course P̃ (0, 0) = P (0, 0) = 1. If we are
considering the AA curve, then what we will say still applies, but we will see
that P̃ (0, t) > P (0, t) if P (0, t) stands for AA values. In fact we will consider
this last situation using hypothetical government (or semigovernment) bond
data. We ﬁrst use market data to compute the discount functions from the
AA (say) data as explained above.
Since the credit rating of the government is greater than AA we will expect
P̃ (0, t) > P (0, t), as we have already noted. Suppose we have data for two
government bonds. One expires on 15 August 2005 and pays a coupon semi-
annually at a rate of c1 = 6.5% per annum. This means that if the face value
of this bond were $100 you would receive a coupon payment of (100×0.065)/2
= $3.75 every six months. Rather than quoting the value of this bond, it is
usual (as we mentioned earlier) to quote the yield (to maturity), which we
will call y1 %. The value of this bond (per face value 1) is given by (see [71])

                                                
        c1    1        1                   1             1
 M S1 =         y1 +    y1 2 + . . . +      y1 m1 +              (13.28)
        2 (1 + 2 ) (1 + 2 )            (1 + 2 )     (1 + y21 )m1

where c1 = 0.065, m1 = 6 is the number of coupons paid, y1 = 0.0537. The
answer is MS1 = $1.0309. It is well known that the expression for MS1 can
be simpliﬁed (using properties of geometric series) to
                                                    
                      c1        y1           −m1                     y1      −m1
               M S1 =     1− 1+                          + 1+                      .   (13.29)
                      y1        2                                    2
182    13 Interest Rate Models

Suppose a second government bond matures on 15 October 2007. The coupon
rate c2 = 0.075 or 7.5% again with semi-annual payments. The ﬁrst coupon
after 15 August 2002 will be on 15 October 2002 and every six months after
that until expiry. Let τ be the time to the ﬁrst coupon payment after 15
August 2002. Thus τ = 1/6. In this case y2 = 0.05615 and m2 = 11, and after
some computations,

                                                   
        c2    y2       1−2τ          y2       −m2              y2   −m2 +1−2τ
 M S2 =    1+                  1− 1+                    + 1+                    . (13.30)
        y2    2                      2                         2

One could interpret this formula and discuss how it could be obtained from
an expression like (13.29). Note that in the case τ = 0.5, then (13.29) and
(13.30) agree. In any case the given data gives M S2 = $1.1084. We shall now
assume that

                      P (0, t) − x1 t                 if 0 ≤ t ≤ t1
        P̃ (0, t) =                                                              (13.31)
                      P (0, t) − x1 t1 − x2 (t − t2 ) if t1 ≤ t ≤ t2 .

where t1 = 0.5m1 , the time to expiry of the ﬁrst bond, and t2 = τ +0.5(m2 −1)
the time to expiry of the second bond. We now compute x1 and x2 so that

                 
              c1
       M S1 =     P̃ (0, 0.5) + P̃ (0, 1) + · · ·
              2
                                     
                   +P̃ (0, 0.5m1 ) + P̃ (0, 0.5m1 )                    (13.32)
                 
              c2
       M S2 =     P̃ (0, τ ) + P̃ (0, τ + 0.5) + · · ·
              2
                                                  
                   + P̃ (0, τ + 0.5(m2 − 1)) + P̃ (0, τ + 0.5(m2 − 1)).(13.33)


The answers are x1 = −0.00095 and x2 = 0.00011. This leads us to P̃ (0.t) >
P (0, t) as we expected.
Once we have then computed the values of P̃ (0, t) we can calculate the ad-
justed swap rates:
                              ⎡                                      ⎤
                            ⎢        1 − P̃ (0.n + 0.5)         ⎥
                            ⎢                                   ⎥
         κ̃((n + 0.5)S) = 2 ⎢                                   ⎥                (13.34)
                            ⎣ 2(1 − P̃ (0.n))                   ⎦
                                              + P̃ (0, n + 0.5)
                                  κ̃(nS)
                                                 13.2 P (0, T ) from Bank Data      183

for n = 0, 0.5, 1, 1.5, . . . using P̃ (0, 0) = 1. This recurrence is again easy to
implement, and the spread κ(nS) − κ̃(nS) can be calculated. In this example
the spread ranged between 7.5 and 11 basis points (1 basis point is 0.01%).
This describes an actual method used by practitioners 1 . It is tractable, that
is, easy to implement.
As we said, one can always study speciﬁc interest rate models and decide
whether these approximations are in fact accurate.
Nelson-Siegel Type Approach
This approach was introduced by Nelson and Siegel [58]. See also de la
Grandville [23].
To explain, we introduce forward rates f (0, u) by
                                                     
                                          T
                       P (0, T ) = exp −    f (0, u) du .                        (13.35)
                                             0

Nelson and Siegel assume that

                          f (0, u) = a + be−αu + cue−αu

for some choices of (a, b, c, α). In that case
                                                             
                P (0, T ) = exp −A − B · T − (A + C · T )e−αT                    (13.36)

where

                             b   c                           c
                       A=      + 2        B=a          C=      .
                             α α                             α
We could also set f (0, 0) = a+b to be equal to overnight rate (at call). In that
case there are only three parameters b, c, α. Write θ = (b, c, α). Also θ1 ≡ b,
etc. The equation for κ(nS) can be written

               κ(nS)
                     [P (0, 0.5) + . . . + P (0, n)] − 1 + P (0, n) = 0,
                 2
and if we substitute (13.35) we get an equation of the form

                                      Φ(θ) = 0.

In fact, we would have a number of such equations
1
    The authors would like to acknowledge Bob Arnold of SAFA (South Australian
    Government Financing Authority) for providing the ideas used here to compute
    P (0, t) from BBSW data.
184    13 Interest Rate Models


                          Φj (θ) = 0,      j = 1, 2, . . . , m            (13.37)

and we may choose θ to minimize a weighted square sum

                                          m
                              J(θ) ≡            wj Φj (θ)2
                                          j=1

where all the wj are positive and sum to 1. After all, it may not be possible
to ﬁnd a solution for all the equations in (13.37). We could then select θ so
that

                            ∂J(θ)
                                  = 0,          i = 1, 2, 3,
                             ∂θi
three equations in three unknowns. This is not trivial to solve and requires
some numerical analysis and a computer algorithm.
Other families similar to the Nelson-Siegel family could be used. In fact there is
much interest in the so-called consistent families (consistent with particular
interest rate models). See Bjork and Christensen [6]. The following family is
consistent with the so-called Hull-White interest rate model:

                           f (0, u) = ae−αu + be−2αu

for which
                                                              
                             1          −αT      b −2αT       b
             P (0, T ) = exp         ae         + e     − (a + ) .
                             α                   2            2
We could also use other families, such as the cubic splines that we have already
discussed. Whatever choices are made, computer numerics are now involved.



13.3 The Ho and Lee Model

The basic references are three papers by Ho and Lee: [33], [34], [35] and one
by Pederson, Shiu and Thorlacius [60].
We refer to the notation in Chapter 4. By (3.27)

                                            Pjn (T + 1)
                              Fjn (T ) =                                  (13.38)
                                              Pjn (1)

is a 1-forward price of a T-zero when in state (n, j). This motivates the fol-
lowing assumptions:
                                                         13.3 The Ho and Lee Model      185

Assumption 1
There exist (perturbation) functions h(T ) > 1 > h∗ (T ) so that


                                n+1
                                              Pjn (T + 1)
                               Pj+1 (T ) =                h(T )                      (13.39)
                                                Pjn (1)
                                              Pjn (T + 1) ∗
                               Pjn+1 (T ) =              h (T ).                     (13.40)
                                                Pjn (1)

Note


                           1
                                 = R(n, j) = 1 + r(n, j)
                         Pjn (1)
                                    ∗
                           h(0) = h (0) = 1
                                     Pjn (T + 1)R(n, j) − Pjn+1 (T )
                     π(n, j) =             n+1
                                          Pj+1 (T ) − Pjn+1 (T )
                                       1 − h∗ (T )
                                 =                   ,
                                     h(T ) − h∗ (T )

and for all (n, j, T )

                         π(n, j)h(T ) + (1 − π(n, j))h∗ (T ) = 1.                    (13.41)

Assumption 2
Bond prices are path-independent. This means that the Ho and Lee Model has
a recombining tree model. This means that moving (n, j) → (n + 1, j + 1) →
(n + 2, j + 1) leads to the same value as (n, j) → (n + 1, j) → (n + 2, j + 1).
This is equivalent to

                            h(T + 1)h∗ (T )   h∗ (T + 1)h(T )
                                            =                                        (13.42)
                                h(1)               h∗ (1)
for all T.
Assumption 3
π(n, j) = π is independent of (n, j).

Lemma 13.3.
                                                  1
                                   h(T ) =                                           (13.43)
                                            π + (1 − π)δ T
                                                 δT
                                  h∗ (T ) =                                          (13.44)
                                            π + (1 − π)δ T
186     13 Interest Rate Models

Proof. Set y(T ) = h(T )−1 and show that

                               y(T + 1) = γ + δy(T )                        (13.45)

where


                                 π(h(1) − 1)
                            γ=               = (1 − δ)π                     (13.46)
                                 (1 − π)h(1)
                                  1 − πh(1)
                            δ=                                              (13.47)
                                 (1 − π)h(1)

and (13.45) has solution

                                  y(T ) = A + Bδ T                          (13.48)

where


                                    A = γ + δA
                                    1 = A + B.

Show that A = π and B = 1 − π to complete the proof.                             2

Remark 13.4. The Ho and Lee model is a two-parameter model and is com-
pletely speciﬁed by values for P (0, n) for various n, and the values of π and
δ < 1.

We shall now write P (n) for P (0, n).

Lemma 13.5.
                       P (n + 1)
          Pjn (1) =              h(n)δ n−j                                  (13.49)
                         P (n)
                       P (n + T ) h(T )h(T + 1) · · · h(T + n − 1) (n−j)T
          Pjn (T ) =                                              δ         (13.50)
                         P (n)         h(0)h(1) · · · h(n − 1)

Proof. An exercise for the reader.                                               2

Remark 13.6. We require that 0 < δ < 1. This will imply that h(T ) > 1 for
all T (and h∗ (T ) < 1 for all T ).
                                                       13.3 The Ho and Lee Model      187

One of the problems with the Ho and Lee model is this: Unless π and δ
are chosen carefully some of the r(n, j) can be negative. In fact an example
was given by Ritchken and Boenawan [64]. If P (1) = 0.9091, P (2) = 0.8417,
π = 0.4 and δ = 0.8, then r(1, 1) < 0. Ritchken and Boenawan also give
conditions to ensure that r(n, j) ≥ 0 for all (n, j). In fact r(n, j) ≥ 0 if and
only if Pjn (1) ≤ 1. This holds if P (n + 1)h(n) ≤ P (n) for all n. This can be
achieved by selecting δ ≥ δ1 where

                                                ⎡                ⎤ n1
                                                    P (n+1)
                                                     P (n) − π
                           δ1 =       max       ⎣                ⎦ .               (13.51)
                                  1≤n≤T −1            1−π

As P (n + 1) < P (n) for all n, δ1 < 1, we can choose δ1 ≤ δ < 1.
We can now select the (π, δ) to satisfy the Ritchken and Boenawan condition
and to minimize

                                  M                      2
                                        wi C̃i − Ci (π, δ)
                                  i=1

where C̃i for i = 1, 2, . . . , M are market prices of M interest rate derivatives
whose Ho and Lee values for parameters (π, δ) are Ci (π, δ) for i = 1, 2, . . . , M .
Of course, w1 , w2 , . . . , wM are some weights.
This shows one possible way to overcome one of the disadvantages of the Ho
and Lee model—negative interest rates. Other weaknesses are: bond yields all
have the same volatility; there is no mean reversion in interest rates. These
are disadvantages when the market data do not have these properties.
Pricing Contingent Claims with Ho and Lee
There are two approaches for European claims:
First approach
Given V (N, j) for j = 0, 1, 2, . . . , N ,

        V (n, j) = Pjn (1) [πV (n + 1, j + 1) + (1 − π)V (n + 1, j)]               (13.52)

using results from Lemma 13.5. This approach can readily be adapted to
American claims, and so forth.
Second approach
Evaluate
                                            N
                            V (0, 0) =           λ(N, j)V (N, j)                   (13.53)
                                           j=0

using Arrow-Debreu prices (or state prices). These can be calculated as fol-
lows:
188    13 Interest Rate Models

Lemma 13.7.
                                  P (n)π j (1 − π)n−j ψ(j, n − j)
                      λ(n, j) =      $n                                           (13.54)
                                       k=1 [π + (1 − π)δ
                                                         n−k ]



where ψ(k, m) is calculated from


                   ψ(k, m) = δ m ψ(k − 1, m) + δ m−1 ψ(k, m − 1)                  (13.55)
                                  m(m−1)
                   ψ(0, m) = δ      2                                             (13.56)
                    ψ(k, 0) = 1                                                   (13.57)

for k ≥ 0, m ≥ 1 in ( 13.55) and ( 13.56).

Proof. This is left as an exercise, but it follows from the Jamshidian forward
induction formula for λ(n, j). In fact, assume that (13.54) holds for n = k and
j = 0, 1, 2, ..., n and show the same holds for n = k +1 and j = 0, 1, 2, ..., n+1.
Use separate arguments for j = 0, 1 ≤ j ≤ n and j = n + 1 separately. In fact
the special cases are

             λ(n, n) = π n P (n)h(0)h(1) . . . h(n − 1)
                                                                     n(n−1)
                λ(n, 0) = (1 − π)n P (n)h(0)h(1) . . . h(n − 1)δ        2     .

                                                                                       2
                                                
Example 13.8. Let V (N, j) = max PjN (T ) − K, 0 . Then we can generalize
the CRR formula for European calls (4.20) starting with

                                      N
                                                                
                        V (0, 0) =          λ(N, j) PjN (T ) − K
                                     j=j∗

where j∗ is the integer part of
                                                                    
             1         1 P (N + T ) h(T )h(T + 1) · · · h(T + N − 1)
      N+          ln     ·         ·                                   .
           T ln δ      K   P (N )        h(0)h(1) · · · h(N − 1)

Example 13.9. Futures prices can also be computed. For example, with G(N, j)
equal to PjN (T ) we have

                 G(n, j) = πG(n + 1, j + 1) + (1 − π)G(n + 1, j).

This leads to
                               13.4 The Pedersen, Shiu and Thorlacius Model            189



                                          N
                   GN = G(0, 0) =               CjN π j (1 − π)N −j PjN (T )
                                          j=0
                                      P (N + T )
                                    =             Φ [π, δ; N, N + T ]
                                         P (N )
                                    = F (0, 0)Φ [π, δ; N, N + T ] .

Exercise 13.10. 1. Find Φ and show that it is an increasing function of δ.
 2. Write down an expression for h(T ) − h∗ (T ) in terms of π and δ, and show
    that this is a decreasing function of δ. Thus smaller choices of δ imply
    greater volatility.
 3. Show that 1 + r(n, j + 1) = δ [1 + r(n, j)] and conclude that this leads to
    the same interpretation.



13.4 The Pedersen, Shiu and Thorlacius Model

There are several generalizations of the Ho and Lee model. The most cited
is due to Pedersen, Shiu and Thorlacius [60]. In our notation they assume in
place of Assumption 3 of Section 13.3 that

                                      π(n, j) = π(n)                                (13.58)
for all j = 0, 1, 2, . . . , n and that
                                   n
                                  Pi+1 (1) = Pin (1)c(n)                            (13.59)

for all i = 0, 1, 2, . . . , n − 1, for suitable functions π and c.

Remark 13.11. In the Ho and Lee model, π(n) ≡ π and c(n) ≡ 1δ are indepen-
dent of n.

Using
                                                                  
                              n+1
      Pjn (T ) = Pjn (1) π(n)Pj+1 (T − 1) + (1 − π(n))Pjn+1 (T − 1)                 (13.60)

and
                  Pjn (1) = Pin (1)c(n)j−i         for i, j = 0, 1, 2, . . . , n,   (13.61)
we can obtain
                                    T +n−1
                                      %
                       Pjn (T ) =             g(k, T + n − 1)Pjk (1),               (13.62)
                                     k=n
190     13 Interest Rate Models

where

                 g(j, s) = 1 − π(j) + π(j)c(j + 1)c(j + 2) . . . c(s)

for j < s, and

                 g(s, s) = 1,

and

                    Pin (1) = c(n)i P0n (1)
                                                  $n−2
                                P (n + 1)          k=0 g(k, n − 1)
                            =             c(n)i    $ n−1           .     (13.63)
                                  P (n)              k=0 g(k, n)


Remark 13.12. With the Ho and Lee model
                                                              1
                     g(j, s) = 1 − π + πδ −(s−j) =
                                                         h∗ (s − j)

with h∗ as in (13.44), and (13.49) can be rederived.

By making restrictions on {c(1), c(2), . . .}, there will not be any negative in-
terest rates, nor very high interest rates in this model.
In fact, given {M (1), M (2), . . .} a sequence of real numbers all greater than
1, we can guarantee that

        P (n + 1)    1                  1       P (n + 1)
                  ·       ≤ Pin (1) =         ≤           · M (n).       (13.64)
          P (n)     M (n)             R(n, i)     P (n)

This can be achieved (see [60]) by requiring that
                                 1
                                      ≤ c(n)n ≤ M (n).                   (13.65)
                                M (n)

Example 13.13. Jensen [44] indicated that the choices

                 π(n) = π a constant
                                    n1                     1
                            P (n)                    P (n + 1) n
                 c(n) = ϑ                + (1 − ϑ)               ,
                          P (n + 1)                    P (n)

where 0 < ϑ < 1, choices avoid negative interest rates.

The numbers M (n) should be chosen so that the right end term of (13.64) is
less than 1 (to avoid negative interest rates) and the left end term of (13.64)
is not too small (to avoid unrealistically high interest rates).
                                           13.5 The Morgan and Neave Model      191

Furthermore, in this model
                              n−1                        ⎡T +n−1     ⎤i
                     P (T + n) %         g(k, n − 1)       ⎣
                                                              %
        Pin (T ) =                                                 c(j)⎦ .   (13.66)
                      P (n)            g(k, T + n − 1)       j=n
                                k=0


We also obtain the generalizations


                  Pin (T + 1)
       Pin+1 (T ) =           h(n, T )                                       (13.67)
                    Pin (1)
        n+1       P n (T + 1) ∗
       Pi+1 (T ) = i n        h (n, T )                                      (13.68)
                    Pi (1)

with

                           1
        h(n, T ) =                                                           (13.69)
                    g(n, T + n − 1)
       h∗ (n, T ) = c(n + 1)c(n + 2) . . . c(T + n − 1)g(n, T + n − 1).      (13.70)

Remark 13.14.
(a) We note that Pin (T ) does not depend on {π(k) ; κ ≥ n}.
(b) The structure of this model is similar to the Ho and Lee model, but there
are many more parameters {c(n)} and {π(n)}.
(c) We could now proceed to ﬁnd state (Arrow-Debreu) prices as in Section
13.3 and evaluate some basic contingent claims.



13.5 The Morgan and Neave Model

This model has appeared in the actuarial literature [55] and is quite tractable
but is a one-parameter model. This parameter will be denoted by u > 1.
For n = 0, 1, 2, . . . set

                                   P (n)       P (0, n)
                        R(n) =             ≡              >1                 (13.71)
                                 P (n + 1)   P (0, n + 1)

and deﬁne for j = 0, 1, 2, . . . , n

                               R(n, j) = R(n) un−2j .                        (13.72)

We note that
                         R(n, j + 1) = u−2 R(n, j) < R(n, j).
192     13 Interest Rate Models

Morgan and Neave assume that π(n, j) = π(n) are independent of j. This
forces
                                     1
                         π(n) =                                (13.73)
                                1 + u2n+1
to hold for all n, and

                                   n
                                  Pj+1 (T ) = u2T Pjn (T )                  (13.74)
for all (n, j) and T .
We can further show that
                     1                      
     P0n (T + 1) = n      π(n)u2T + (1 − π(n) P0n+1 (T ),                   (13.75)
                  u R(n)
which leads to
                         % 
                       T +n−1
                                 π(k)u2(T +n−1−k) + (1 − π(k))
                                                                    
          P0n (T ) =                                                        (13.76)
                                            uk R(k)
                         k=n

and then
                                 % 
                               T +n−1
                                        π(k)u2(T +n−1−k) + (1 − π(k))
                                                                      
          Pjn (T ) = u2T j                                              ,   (13.77)
                                                   uk R(k)
                                k=n

which follows from (13.74) and (13.76).

Remark 13.15. In order that interest rates do not become negative we require
that R(n, j) ≥ 1. But R(n, n) = R(n)u−n so u must be selected so that
R(n)u−n ≥ 1 for 0 ≤ n ≤ N , say. In the Ho and Lee model we had R(n, j+1) =
δR(n, j) (see Example 13.1), so there are some similarities, but this model does
not have constant π(n, j). However, there are some other similarities.

                          n+1
                                         Pjn (T + 1)
                         Pj+1 (T ) =                 h(n, T )               (13.78)
                                           Pjn (1)

with
                                                 u2T
                           h(n, T ) =                         ,
                                         π(n)u2T + (1 − π(n))
and
                                         Pjn (T + 1) ∗
                         Pjn+1 (T ) =               h (n, T )               (13.79)
                                           Pjn (1)

with
                                                    1
                          h∗ (n, T ) =                          ,
                                         π(n)u2T + (1 − π(n))
                                   13.6 The Black, Derman and Toy Model            193

clearly bear a similarity to the Ho and Lee model. There are generalizations
in Hurlimann [38].



13.6 The Black, Derman and Toy Model

Another classic binomial model is the one due to Black, Derman and Toy [7].
They assume that


                                         1
                              π(n, j) ≡                                        (13.80)
                                         2
                               r(n, j) = r(n, 0)σ(n)j ,                        (13.81)

where σ(n) for n = 1, 2, . . ., are speciﬁed constants (usually greater than
1). We shall see that the BDT model, as it is called, can be calibrated to be
consistent with observed values of P (0, n) for various n, and that interest rates
r(n, j) are all positive. There are more parameters in this model than in the Ho
and Lee model, so it is possible in BDT to also calibrate observed volatilities
(or other quantities like cap prices). For a comprehensive comparison of these
two models, consult Panjer et al. [59]. In particular, look at Chapter 7. We
note that Sandmann and Sondermann [67], [68] produced independently a
similar model at about the same time. We will also comment on a related
model of Morgan and Neave [55], which has been discussed in the actuarial
journals (see also [38]).
The First Calibration of the BDT Model
We assume that we are given the values of P (0, n) and σ(n) for n =
1, 2, 3, . . . , N . We wish to compute r(n, 0) for n = 0, 1, 2, . . . N − 1, and hence
all interest rates by (13.81).
Using Arrow-Debreu prices,


                                          k
                       P (0, k + 1) =          λ(k, j)Pjn (1)
                                         j=0
                                          k
                                               λ(k, j)
                                     =
                                         j=0
                                             1 + r(k, j)
                                          k
                                                  λ(k, j)
                                     =                        .                (13.82)
                                         j=0
                                             1 + r(k, 0)σ(k)j

We can now calibrate
194    13 Interest Rate Models


                                              1
                             r(0, 0) =              −1                   (13.83)
                                           P (0, 1)

and suppose that r(n, 0) and λ(n, j) are known for n = 0, 1, 2, . . . , k − 1. We
are then able to calculate λ(k, j) from
                                                        
                   1   λ(k − 1, j)     λ(k − 1, j − 1)
         λ(k, j) =                  +                      .             (13.84)
                   2 1 + r(k − 1, j) 1 + r(k − 1, j − 1)

Here we use the usual conventions that λ(n, j) = 0 if j > n or j < 0. Thus,
the only unknown in (13.82) is r(k, 0).
Let us note that (13.82) uniquely determines r(k, 0) > 0. In fact if we put
r(k, 0) = 0 in the right hand side of (13.82), we obtain P (0, k), which we may
assume is greater than P (0, k + 1). If we put r(k, 0) = ∞, then the right hand
side of (13.82) is 0, which we can assume is less than P (0, k + 1). By the
intermediate value theorem, a choice of r(k, 0) > 0 exists for which (13.82)
holds. It is unique as the right hand side of (13.82) is a strictly decreasing
function of r(k, 0) since each λ(k, j) > 0.
We then repeat the arguments with k replaced by k + 1.
There are various ways of obtaining a solution of f (x) = 0 where

                                               k
                                                    λ(k, j)
                     f (x) ≡ P (0, k + 1) −                  .           (13.85)
                                              j=0
                                                  1 + xσ(k)j

(a) Interval Bisection Method.
Let x1 = 0, then f (0) = P (0, k + 1) − P (0, k) < 0 as we have observed. Let
x2 = 1 = 100%. We can suppose that f (1) > 0. Let x3 = 0.5 (x1 + x2 ), and
compute f (x3 ). If f (x3 ) < 0 then replace x1 by x3 , while if f (x3 ) > 0 then
replace x2 by x3 . Then repeat for as long as you please until the x-values are
close enough together (or the f values are suﬃciently small). This method is
good when you cannot use the Newton-Raphson method either because the
derivative of f is not available, or it is too complicated to compute.
(b) Newton-Raphson Method.
The formula for the derivative of f is

                                       k
                                           λ(k, j)σ(k)j
                          f  (x) =                      .               (13.86)
                                      j=0
                                          (1 + xσ(k)j )2

Let x0 = 0.5, say. Then recursively compute
                                     13.6 The Black, Derman and Toy Model      195

                                                  f (xn )
                                 xn+1 = xn −                .               (13.87)
                                                  f  (xn )

Very few iterations are required to ﬁnd a good approximate solution.
(c) The Secant Method.
This is similar to the Newton-Raphson method, but we need two starting
values, as in (a) where f (0) < 0 and f (1) > 0, and the derivative of f is
replaced by the slope of the line joining (x1 , f (x1 )) and (x2 , f (x2 )). Then

                                            x2 − x1
                         x3 = x2 −                        f (x2 ).          (13.88)
                                        f (x2 ) − f (x1 )

Then repeat, replacing x1 by x2 and x2 by x3 .
Volatility Speciﬁcation
There are two ways to specify volatilities: absolute volatility and propor-
tional volatility. The convention in the markets is to use the latter, but you
should always ask to make sure. Even though interest rates do not seem to
change much, market people talk about 10–20% volatilities!!
Let us consider interest rates. In the multiperiod binomial model from state
(n, i) where interest rate is currently r(n, j) in one period, it could become
r(n + 1, j + 1) or r(n + 1, j) with probabilities q and 1 − q, say. Then the
absolute volatility is the standard deviation

                  &
                                          2                           2
   AVol(n, j) =    q (r(n + 1, j + 1) − r) + (1 − q) (r(n + 1, j) − r)      (13.89)

where

                   r = q · r(n + 1, j + 1) + (1 − q) · r(n + 1, j).         (13.90)

Therefore,
                         
          AVol(n, j) =       q(1 − q) · |r(n + 1, j + 1) − r(n + 1, j)|     (13.91)

or, if q = 12 ,

                                  1
                  AVol(n, j) =      · |r(n + 1, j + 1) − r(n + 1, j)|,      (13.92)
                                  2
which is half an absolute spread of the interest rates at t = n + 1.
In a similar way we can deﬁne proportional volatility as the standard
deviation of the logs of the interest rates
196      13 Interest Rate Models
                     &
                                                    2                            2
      PVol(n, j) =       q (ln r(n + 1, j + 1) − ρ) + (1 − q) (ln r(n + 1, j) − ρ)
                                                                                (13.93)
where

                ρ = q · ln r(n + 1, j + 1) + (1 − q) · ln r(n + 1, j)          (13.94)

and so

                           
            PVol(n, j) =     q(1 − q)| ln r(n + 1, j + 1) − ln r(n + 1, j)|
                           
                          = q(1 − q) · | ln σ(n + 1)|,                         (13.95)

which is independent of j if the up and down factors are independent of the
state.
When q = 12 , we have a nice interpretation of the ln σ(n + 1) as twice the
proportional volatility of the one-period interest rate when viewed from t = n,
which we shall write as σr (n + 1). So with this interpretation

                                  σ(n) = exp(2 · σr (n))                       (13.96)

for each n.
It was a starting point in Sandmann and Sondermann [67] to write this as

                           r(n, j) = r(n, j + 1)g(σr (n), q(n))

with
                                                        
                                                σ
                           g(σ, q) = exp                    >1
                                              q(1 − q)

where they allowed q = q(n). They note that g has a minimum value when
q = 12 . They assume then that q(n) has the same value for all n as in a BDT
model. The reader is referred to their paper for extensive discussions.
Let us ﬁnally note an approximate relationship between two volatilities. From
(13.92)


                                1
                AVol(n, j) =      · r(n + 1, j) · |σ(n + 1) − 1|
                                2
                                1
                               = · r(n + 1, j) · (exp(2 · σr (n)) − 1)
                                2
                                1
                               ≈ · r(n + 1, j) · (2 · σr (n))
                                2
                                        13.6 The Black, Derman and Toy Model      197

                              = r(n + 1, j) · σr (n)
                              = r(n + 1, j) · PVol(n, j).                      (13.97)

That is, the absolute volatility is equal to the proportional volatility times
the current level of the rates. This means that PVol can be much higher than
AVol. If interest rates are about 6% and AVol is 1%, then the PVol would be
about 17%, by (13.97). It should be clear that the BDT model ﬁts well with
the market understanding of volatility.
We shall also be interested in yield volatilities.
Yields Y (0, T ) and Y (n, j, T ) are deﬁned by

                                                           −T
                               P (0, T ) = [1 + Y (0, T )]                     (13.98)

and

                               (n)                           −T
                             Pj (T ) = [1 + Y (n, j, T )]         .            (13.99)

Now specifying P (0, n) is the same as specifying the yield Y (0, n). In place of
using σ(n) values we can start with yield volatilities

                         σy (1), σy (2), σy (3), . . . , σy (N − 1),       (13.100)

which we now clarify. As above, this is the same as requiring that

              Y (1, 1, n − 1) = Y (1, 0, n − 1) · exp (2 · σy (n))         (13.101)

where
                                                              
                                        1      Y (1, 1, n − 1)
                             σy (n) =     ln                     .         (13.102)
                                        2      Y (1, 0, n − 1)

Let us write v(n) = exp (2 · σy (n)) from now on, for short.
A Second Calibration of BDT Model
Suppose we are now given the values of P (0, n) and v(n) for values of n =
1, 2, 3, . . . , N − 1. We must now solve for r(n, 0) and σ(n).
Step 1.
        (1)            (1)
Find P1 (k) and P0 (k) using the values of P (0, k + 1) and v(k). As above


                      0.5                      
                                  (1)      (1)
  P (0, k + 1) =                 P0 (k) + P1 (k)
                   1 + r(0, 0)
198    13 Interest Rate Models
                                                                            
                    0.5              1                       1
               =                                +                              ,
                 1 + r(0, 0) (1 + Y (1, 0, k))k   (1 + v(k + 1)Y (1, 0, k))k

which is an equation in one unknown Y (1, 0, k). This equation can be solved
by one of the methods described in Section 13.6. Once obtained, we have


                        (1)            1
                      P0 (k) =                                           (13.103)
                               (1 + Y (1, 0, k))k
                       (1)                  1
                      P1 (k) =                            .              (13.104)
                               (1 + v(k + 1)Y (1, 0, k))k
                                                                         (13.105)

Step 2.
We now solve


                                    k−1
                              (1)           λ0 (k, j)
                        P0 (k) =                                         (13.106)
                                    j=0
                                        1 + r(k, 0)σ(k)j
                                     k
                         (1)                λ1 (k, j)
                        P1 (k) =                         ,               (13.107)
                                    j=1
                                        1 + r(k, 0)σ(k)j


where λ0 (k, j) ≡ A(1, 0, k, j) is the value at (1, 0) of the time k Arrow-Debreu
security that pays $1 in state j. Likewise λ1 (k, j) ≡ A(1, 1, k, j) is the value
at (1, 1) of the time k Arrow-Debreu security that pays $1 in state j. The
recursive formulas for λ0 (k, j) and λ1 (k, j) are, like (13.84),

                                  0                         
                               1   λ (k, j)   λ0 (k, j − 1)
               λ0 (k + 1, j) =              +                            (13.108)
                               2 1 + r(k, j) 1 + r(k, j − 1)
                                  1                         
                               1   λ (k, j)   λ1 (k, j − 1)
               λ1 (k + 1, j) =              +                  .         (13.109)
                               2 1 + r(k, j) 1 + r(k, j − 1)

We deﬁne F and G by


                                             k−1
                                    (1)          λ0 (k, j)
                       F (x, y) = P0 (k) −                               (13.110)
                                             j=0
                                                 1 + xy j
                                              k
                                    (1)          λ1 (k, j)
                       G(x, y) = P1 (k) −                  ,             (13.111)
                                             j=1
                                                 1 + xy j
                                   13.6 The Black, Derman and Toy Model   199

and we wish to solve


                                    F (x, y) = 0                      (13.112)
                                    G(x, y) = 0                       (13.113)

for x = r(k, 0) and y = σ(k).
For this the 2-dimensional Newton-Raphson method works. Let (xn , yn ) be
the nth approximation. We choose (xn+1 , yn+1 ) so that


                 0 = F n + (xn+1 − xn )Fxn + (yn+1 − yn )Fyn          (13.114)
                 0 = Gn + (xn+1 − xn )Gnx + (yn+1 − yn )Gny           (13.115)

where


                                F n ≡ F (xn , yn )
                                Gn ≡ G(xn , yn )
                                      ∂F
                                Fxn ≡    (xn , yn )
                                      ∂x

and so forth. The right hand side of (13.114) and (13.115) are approximations
for F (xn+1 , yn+1 ) and G(xn+1 , yn+1 ), respectively.
The solution of (13.114) and (13.115) is


                                     1  n n            
                       xn+1 = xn −      Gy F − Fyn Gn                 (13.116)
                                    ∆n
                                     1
                       yn+1 = yn − n [Fxn Gn − Gnx F n ]              (13.117)
                                    ∆
                        ∆n = Fxn Gny − Fyn Gnx .                      (13.118)

It can be shown that ∆n is never 0 when xn = 0 and yn = 0.

Remark 13.16. We can show that for xn = x > 0 and yn = y > 0,
                       k
                   x         λ0 (n, j) λ1 (n, i)
           ∆n =                                      y i+j (i − j)    (13.119)
                   y i,j=1 (1 + xy j )2 (1 + xy i )2
                   x         (i − j) y i+j
               =                                  Θn                  (13.120)
                   y i>j (1 + xy j )2 (1 + xy i )2 i,j
200       13 Interest Rate Models

with

              n
             Θi,j ≡ λ0 (n, j)λ1 (n, i) − λ0 (n, i)λ1 (n, j) > 0           (13.121)

for n ≥ i > j ≥ 0, which shows that ∆n > 0 for all x, y > 0 and n ≥ 1.
We can further show that if xn > 0 and yn > 1 in (13.116) and (13.117), then
xn+1 > 0 and yn+1 > 1.

Explicit formulae can be written down for Fx , Fy , Gx and Gy using (13.110)
and (13.111). For example,

                                           k−1
                                               λ0 (k, j)y j
                             Fx (x, y) =                    .             (13.122)
                                           j=0
                                               (1 + xy j )2

A starting value (x0 , y0 ) = (0.10, 1.50) will usually work.

Remark 13.17. The book by Panjer et al. [57, pages 342–344] also describes
how to calibrate BDT using cap prices.

Example 13.18. This uses the data from the original BDT paper, but we
present the details diﬀerently.


                             Table 13.2. BDT example.
                   Maturity t Yield Y (0, 0, t) Yield Volatility σy (t)
                      1            10.00                 20
                      2            11.00                 19
                      3            12.00                 18
                      4            12.50                 17
                      5            13.00                 16


From Table 13.2, P (0, n) = 100[1 + Y (0, 0, n)]−n , which can be calculated for
n = 1, 2, 3, 4, 5. Then r(0, 0) = 0.10.
Finding r(1, 1) and r(1, 0).
In fact


                                  r(1, 1) = Y (1, 1, 1)
                                  r(1, 0) = Y (1, 0, 1)

so
                                        13.6 The Black, Derman and Toy Model   201

                         r(1, 1) = r(1, 0) · exp(2σy (2))
                                   = r(1, 0) · exp(0.38)
                                   = 1.462284598 × r(1, 0).

Then solve the system


                                50                          50
        P (0, 2) =                             +
                     [1 + r(0, 0)][1 + r(1, 1)] (1 + r(0, 0))(1 + r(1, 0))

        P (0, 2) = [1 + 0.11]−2 = 0.811622433

                               50                 50
         0.8116 =                          +
                     1.1(1 + 1.4622r(1, 0)) 1.1(1 + r(1, 0))

which gives r(1, 0) = 0.0979. Then r(1, 1) = 1.4622 and r(1, 0) = 0.1432.
Finding r(2, 2) , r(2, 1) and r(2, 0).
This is trickier. For this try:


                                   u(n) = Y (1, 1, n)
                                   v(n) = Y (1, 0, n).

Then

                         u(n) = v(n) · exp(2 · σy (n + 1))

thus

                  u(2) = v(2) · exp(0.36) = 1.433329415 · v(2).

Also


                                  (1)            100
                              P1 (n) =                    2
                                             (1 + u(n))
                                  (1)            100
                              P0 (n) =                   2.
                                             (1 + v(n))

Then
202    13 Interest Rate Models

                                        1    (1)           (1)
                                            P1 (n) + 12 P0 (n)
                     P (0, n + 1) = 2
                                               1 + r(0, 0)

and

                                                    100
                    P (0, n + 1) =                               n+1 .
                                       (1 + Y (0, 0, n + 1))

In this case this gives the equation for v(2),
                                                          
                 1      1          50              50
                     =                       +               ,
               1.123   1.1 (1 + 1.4333v(2))2   (1 + v(2))2

which is readily solved, giving v(2) = 0.10755311, and so u(2) = 0.15415903.
We then have


                              (1)
                            P1 (2) = 75.0703931
                              (1)
                            P0 (2) = 81.5212593.

This procedure is quite general for ﬁnding u(n) and v(n) and then the values
    (1)          (1)
of P1 (n) and P0 (n) with no additional complications.
Recall that r(n, j) = r(n, 0) · σ(n)j so we can write down two equations for
r(n, 0) and σ(n).


                                               n
                                 (1)                   A(1, 1, n, k)
           φ(r(n, 0), σ(n)) ≡ P1 (n) −                                  =0
                                                    1 + r(n, 0) · σ(n)k
                                              k=0
                                               n
                                 (1)                   A(1, 0, n, k)
           ψ(r(n, 0), σ(n)) ≡ P0 (n) −                                  = 0.
                                                    1 + r(n, 0) · σ(n)k
                                              k=0


These are equivalent to one equation

                  [φ(r(n, 0), σ(n))]2 + [ψ(r(n, 0), σ(n))]2 = 0

which can be solved by SOLVER in MS-EXCEL. Doing this with n = 2 we
are solving


                                               2
                                 (1)                   A(1, 1, 2, k)
            φ(r(2, 0), σ(2)) ≡ P1 (2) −                                 =0
                                                    1 + r(2, 0) · σ(2)k
                                              k=0
                                   13.6 The Black, Derman and Toy Model            203
                                                    2
                                   (1)                     A(1, 0, 2, k)
          ψ(r(2, 0), σ(2)) ≡ P0 (2) −                                       = 0,
                                                        1 + r(2, 0) · σ(2)k
                                                k=0


where


                                A(1, 1, 2, 0) = 0
                                A(1, 1, 2, 1) = 0.4504
                                A(1, 1, 2, 2) = 0.4504
                                A(1, 0, 2, 0) = 0.4587
                                A(1, 0, 2, 1) = 0.4587
                                A(1, 0, 2, 2) = 0

as above. As SOLVER may not be able to handle this too well, one probably
has to obtain the result via a 2-dimensional Newton-Raphson method, which
we have described.
One can also try the approximate method due to Bjerksund and Stensland
[5]:
                                         ⎡    (1)
                                                               ⎤
                                             P1 (n−1)
                                                          −1
                                   ⎢            (1)
                                              P1 (n)           ⎥
                            σ(n) ≈ ⎣          (1)              ⎦
                                             P0 (n−1)
                                                (1)       −1
                                              P0 (n)

with
                                            −n                      
                                1 + σ(n)                  P (0, n)
                r(n, 0) ≈                                            −1 .
                                   2                    P (0, n + 1)

Applying this with n = 2 and using


                      (1)        100
                    P1 (1) =               = 90.0901
                             (1 + r(1, 1))
                     (1)         100
                    P0 (1) =               = 91.7431
                             (1 + r(1, 0))
                      (1)
                    P1 (2) = 75.0703931
                      (1)
                    P0 (2) = 81.5212593

gives
204    13 Interest Rate Models
                         ⎡    (1)
                                        ⎤
                             P1 (1)
                         ⎢ (1)    − 1 ⎥  90.0901          
                         ⎢ P1 (2)      ⎥
                  σ(2) ≈ ⎢             ⎥ = 75.0703931 − 1
                         ⎢ (1)         ⎥      91.7431
                         ⎣ P0 (1)      ⎦    81.5212593 − 1
                             (1)
                                  −  1
                           P0 (2)
                         0.200074973
                       =              = 1.595638617,
                          0.12438865

and

                             −2          
                   1 + σ(2)      P (0, 2)
         r(2, 0) ≈                        −1
                      2          P (0, 3)
                                                
                                  0.811622433
                = 0.593706136 ×               − 1 = 0.083279801.
                                  0.711780247

Then


                               r(2, 0) ≈ 0.08328
                               r(2, 1) ≈ 0.13288
                               r(2, 2) ≈ 0.21204,

which is reasonably close to the BDT values, and could be used as a starting
value for a more accurate algorithm like the Newton-Raphson method.
Applying SOLVER as described above gives r(2, 0) = 0.09700444 and σ(2) =
1.60060528. This yields


                               r(2, 0) ≈ 0.09700
                               r(2, 1) ≈ 0.15526
                               r(2, 2) ≈ 0.24852.

It is interesting to note that if one repeats the calculations, one ends up with
                           (1)                     (1)
P (0, 3) = 71.1772, and P1 (2) = 75.0692 and P0 (2) = 81.52078. Therefore,
one still gets a good agreement for yields and volatilities. The Bjerksund and
Stensland approximation does not do so well. It seems therefore that solving
for r(n, 0) and σ(n) can be rather delicate. Therefore, as noted, the values
obtained could be used as starting values for a Newton-Raphson method.
                                                           13.8 Exercises     205

13.7 Defaultable Bonds

We present here a simple model based on the ideas of Merton [54]. Let V (n, j)
represent the value of a corporation at time t = n in state j. At t = 0 it is
funded from equity S(0, 0) and debt B(0, 0) as

                          V (0, 0) = S(0, 0) + B(0, 0).                  (13.123)

The debt becomes due at t = N . This means that B must be repaid by the ﬁrm
at t = N , with no repayments before this date. This is ﬁne if V (N, j) ≥ B, but
the debt-holders will only receive V (N, j) if V (N, j) < B. The debt-holders
therefore receive
                         B̃(N, j) = min [V (N, j), B]                   (13.124)
at t = N . The present value of B̃(N, ·) is

                              B(0, 0) = B P̃ (0, N ).                    (13.125)

It is not hard to show that P̃ (0, N ) < P (0, N ) whenever there is a possibility
that V (N, j) < B in some state j. In that case the corporation raised a loan
with defaultable debt.
At expiration of the debt t = N the surplus S(N, j) = max[V (N, j) − B, 0]
belongs to the shareholders, and S(0, 0) is the present value of this shareholder
value. We came across this concept in Chapter 4 with Remark 4.15 about
compound options.
Given a binomial tree with values {V (n, j), π(n, j)} we can now ﬁnd the value
of corresponding defaultable zero-coupon bonds.



13.8 Exercises

Exercise 13.19. Compute b0 , c0 and d0 in equation (13.18) and discuss the
graph of m(t) that results.

Exercise 13.20. Solve the optimization problem in equation (13.6) using
equal weights.

Exercise 13.21. Check the values of κ(1S), κ(2S) and κ(3S) in equation
(13.16).

Exercise 13.22. Check the values of P (0, t) for t = 1(0.5)5 in equation
(13.18). [That is, we let t take values from 1 to 5 in steps of 0.5.]

Exercise 13.23. Interpret formula (13.30).
206    13 Interest Rate Models

Exercise 13.24. Verify the values for x1 and x2 in equation (13.33).

Exercise 13.25. Give a full proof of Lemma 13.3. It is also possible to write
                                           ∗
                                             (T )
down and solve a recurrence relation for hh(T  ) .


Exercise 13.26. Give a full proof of Lemma 13.5. We note that (13.49) is a
special case of (13.50). As a hint assume that (13.50) holds for n = k and for
all T ≥ 1, and show that result holds for n = k + 1 and all T ≥ 1 using

                                      Pjk (T + 1)
                       Pjk+1 (T ) =                 h(T )δ T .
                                        Pjk (1)

Exercise 13.27. Verify the Ritchken and Boenawan condition (13.5).

Exercise 13.28. Verify (13.51).

Exercise 13.29. Give a full proof for Lemma 13.7. Show one computes the
values of f (k, m) using the “boundary” values.

Exercise 13.30. Study Example 13.8.

Exercise 13.31. Study Example 13.9.

Exercise 13.32. Verify formula (13.62). As a hint, perform a mathematical
induction argument with respect to T . In other words assume the formula
holds for T and all (n, j) and show that the formula is again true for T
replaced by T + 1 and all (n, j). The case T = 1 is dealt with separately.

Exercise 13.33. Verify the formulae (13.66)–(13.70).

Exercise 13.34. Find formulae for λ(n, j) in the Pedersen, Shiu and Tho-
raclius model, and ﬁnd expressions for European call prices, European put
prices and futures prices analogous to those obtain above in Section 13.3 for
the Ho and Lee model.

Exercise 13.35. Verify the claims of Jensen’s Example 13.13.

Exercise 13.36. Verify the claims of the Morgan and Neave model. To show
that π(n) has the form in (13.73) start by ﬁnding π(1) and π(2). Formula
(13.74) can be shown by doing mathematical induction with respect to T and
using the equation
                                                                    
                                      n+1
          Pjn (T + 1) = Pjn (1) π(n)Pj+1  (T ) + (1 − π(n))Pjn+1 (T )
                                                     
                      = Pjn (1) π(n)u2T + (1 − π(n)) Pjn+1 (T ).
                                                        13.8 Exercises     207

Exercise 13.37. Find a formula for λ(n, j) in the Morgan and Neave model.
Show that
                          1               1      1           1
    λ(n, j) =                          ·     ·       ···          Qn (u)
                R(0)R(1) · · · R(n − 1) 1 + u 1 + u3     1 + u2n−1 j

where Qnj (u) is a polynomial in u of degree less than or equal to n2 and with
coeﬃcients 0 or 1. Can you ﬁnd Qnj (u) explicitly?

Exercise 13.38. This is a diﬃcult exercise. Use the Jamshidian induction
formula to show that ∆n = 0 when xn and yn are nonzero. [As a hint, study
Remark 13.16. The key equation there (13.121) can be proved by mathemat-
ical induction together with (13.108) and (13.109).]

Exercise 13.39. Show that the ﬁnal claim in Remark 13.16 holds.

Exercise 13.40 (Discount functions).
You are given the following annual interest rate data (obtained from Bloom-
berg for 19 August 2002):


                                overnight 4.75%
                                  30 day 4.90%
                                       60 4.95%
                                       90 4.98%
                                      120 5.00%
                                      150 5.00%
                                      180 5.02%




and the swap rates

                                   1Q 5.100%
                                   2Q 5.357%
                                   3Q 5.525%
                                   4S 5.695%
                                   5S 5.790%
                                   7S 5.965%
                                  10S 6.125%
                                  15S 6.225%
                                  20S 6.280%




 1. Compute estimates for P (0, t) for t ≤ 20.
208    13 Interest Rate Models

 2. With this discount curve, is the following transaction proﬁtable as of now
    (19 August 2002). You borrow (receive) $100,000 on 19 October 2003 and
    repay $110,000 on 19 June 2005.
 3. With the values for P (0, 1), P (0, 3) and P (0, 5) from 1. ﬁnd the cubic
    spline to ﬁt these values to estimate m(t) = P (0, t) for t ≤ 5, and compare
    the values of P (0, 2), P (0, 4) from this spline with the values obtained in
    1.
14

Real Options




Since the early 1990s this area has received much attention as a new approach
to capital investment decisions by ﬁrms. A standard book on this subject is
Dixit and Pindyck [25]. Since then many books and articles devoted to real
options have been published. A more recent book by Trigeorgis [75] gives a
good review of issues and techniques. The reviews of these two books are
given by Schwartz [69] and Sick [72], respectively. They provide interesting
discussions about real options by two exponents of the theory.
Here are some quotes from the second book:

     It is now widely recognized that traditional discounted cash ﬂow
     (DCF) approaches to appraisal of capital-investment projects, such
     as the standard net-present-value (NPV) rule, cannot properly cap-
     ture management’s ﬂexibility to adapt and revise later decisions in
     response to unexpected developments [page 1].

And again

     An options approach to capital budgeting has the potential to concep-
     tualize and quantify the value of options from active management and
     strategic interactions....Many of these real options (e.g., to defer, con-
     tract, shut down, or abandon a capital investment) occur naturally;
     others may be planned and built in at extra cost from the outset (e.g.,
     to expand capacity or build growth options, to default when invest-
     ment is staged sequentially, or to switch between alternative inputs or
     outputs) [page 4].

Further references for our approach of valuing options may be found in Musiela
and Zariphopoulou [56], and Henderson [32], Davis [22], Smith and Nau [73],
Elliott and van der Hoek [28], [27].
210       14 Real Options

14.1 Examples

We shall now discuss a number of examples from the book by Trigeorgis.
We have cited where they are discussed in greater detail, but we have used
notation consistent with this book.

Example 14.1. [75, page 5] Suppose a company wishes to value an opportunity
to invest in a project (such as a research and development eﬀort to discover a
new drug). One year later the project will generate expected cash ﬂows of $180
million under good conditions (V (1, 1) = V (1, ↑) = 180, say), or $60 million
under bad conditions (V (1, 0) = V (1, ↓) = 60). There is equal probability of
each outcome. The project’s cash ﬂows have an expected rate of return (or
risk adjusted discount rate) of k = 20%, while the risk-free interest rate is
r = 8%. Then we can compute


            0.5 × V (1, ↑) + 0.5 × V (1, ↓)   0.5 × 180 + 0.5 × 60
  V (0) =                                   =                      = 100 (14.1)
                         1+k                        1 + 0.20

in millions of dollars. Here we are using equation (2.27) of Chapter 2. We can
now determine the value of π using


                              π × V (1, ↑) + (1 − π) × V (1, ↓)
                    V (0) =                                     ,
                                            1+r

that is

                              π × 180 + (1 − π) × 60
                      100 =                          ,
                                     1 + 0.08

giving π = 0.4.
Suppose the government of the day, wishing to support the project, oﬀers a
guarantee (or insurance policy) to buy the entire output for $180 million if
the bad conditions occur. The government’s guarantee is like a put option
giving the company the right to sell the project’s value to the government for
a guaranteed amount of $180 million. What is the value of this guarantee (put
option)?
The traditional DCF (discounted cash ﬂow) method would value the project
without guarantee as above at $100 million, and for the value of the project
with guarantee V ∗ (0) as

                              0.5 × 180 + 0.5 × (60 + 120)
                  V ∗ (0) =                                = 150
                                        1 + 0.20
                                                           14.1 Examples     211

in million of dollars. So the value of the put option provided by the guarantee
would be estimated as (an abandonment put) AP :

                    AP = V ∗ (0) − V (0) = 150 − 100 = 50

million of dollars. This traditional valuation assumes that the payoﬀ of the
put option (the guarantee) has the same risk and can be discounted at the
same rate as that for the naked project (without the guarantee), that is

                                0.5 × 0 + 0.5 × 120
                       AP =                         = 50
                                     1 + 0.20
as above. This traditional DCF calculation, however, is completely wrong,
since the ﬂexibility to abandon the project for a guaranteed price would alter
the project’s risk and its discount rate. The correct value of V ∗ is in fact

                           0.5 × 180 + 0.5 × (60 + 120)
               V ∗ (0) =                                = 166.67,          (14.2)
                                     1 + 0.08
and hence, the correct value of AP is

                AP = V ∗ (0) − V (0) = 166.67 − 100 = 66.67.               (14.3)

This can also be found using risk-neutral probabilities:

                              0.4 × 0 + 0.6 × 120
                     AP =                         = 66.67.                 (14.4)
                                   1 + 0.08

Example 14.2 (Option to defer investment). Instead of investing I(0) now in
a project with present value of future cash ﬂows V (0) (for which N P V =
V (0) − I(0) could be negative), a company could have an option to invest I(1)
at t = 1. The company would make only the investment at t = 1 provided
V (1) > I(1) and not proceed otherwise. Thus the proﬁt at t = 1 will be E(1) =
(V (1) − I(1))+ , the payoﬀ is like a call option with strike price I(1). Here,
V (1) represents the value at t = 1 of the future cash ﬂows of the project. The
net present value of the project with the option is max[V (0) − I(0), E(0)] ≥ 0.
In fact a company may be involved in a large development which must go
through various stages, and the option to defer could apply to any stage of
operations, where each stage may involve further investments.

Example 14.3 (Option to default on planned cost). As suggested above pro-
jects do not involve a single up-front payment; rather investments are made
in stages. Investments could be deferred, or the project could be abandoned
if conditions are not favorable.
212    14 Real Options

Suppose that there will be installments in a project, with I(0) invested at
t = 0 and I(1) invested at t = 1. Then management will pay the installment
at t = 1, provided the project value V (1) at t = 1 exceeds this installment,
otherwise the installment will not be paid and the project defaults. The value
of the project at t = 1 is then E(1) = (V (1) − I(1))+ , and then the net
present value of the project is E(0) − I(0) where I(0) is the outlay at t = 0. If
abandonment did not occur at t = 1 it could occur at future times in the life
of the project. Having this option to default can make an otherwise nonviable
project into a viable one. Note that

                   E(0) − I(0) > P V0 (V (1) − I(1)) − I(0)
                               = V (0) − P V0 (I(1)) − I(0).

Example 14.4 (Option to expand or the growth option). If conditions are fa-
vorable a company may at time t = 1, say, or at some other time, invest an
amount IE and expand operations by α%. The value of this position at t = 1
is then

                                         α                
                   E(1) = max V (1)(1 +      ) − IE , V (1)
                                         100
                                                  +                       (14.5)
                                   α
                        = V (1) +     V (1) − IE     .
                                  100

The present value of this project is now E(0) − I(0) > V (0) − I(0). Again,
this added ﬂexibility may make a nonviable project into a viable one.

Example 14.5 (Option to contract). If market conditions become weaker, a
company may wish to have the option to scale down operations. Let us suppose
that decisions are again made at t = 1. Either an outlay of I(1) is made for
the project whose value at t = 1 is V (1), or a reduced amount J(1) is invested,
(saving I ∗ (1) = I(1) − J(1)), and the project is scaled down by ρ%. The value
E(1) at t = 1 with these choices, is then

                                              ρ               
              E(1) = max V (1) − I(1), (1 −       )V (1) − J(1)
                                              100
                                                         +                (14.6)
                                               ρ
                   = V (1) − I(1) + I ∗ (1) −      V (1) .
                                              100

Again E(0) − I(0) > V (0) − P V0 (I(1)) − I(0), so the added ﬂexibility adds
value.

Example 14.6 (Option to temporarily shut down operations).
Suppose that a project in a previous example had a 30% cash payout, so the
cash revenues C in a particular year amount to 30% of the project’s value.
                                                           14.1 Examples      213

Thus C(1) = 0.30V (1). So V (1) = C(1) plus the the t = 1 value of cash ﬂows
after t = 1. Each year management pays ﬁxed costs (F C) plus variable costs
(V C), but the latter only if V C < C(1) (at time t = 1, say). If V C ≥ C(1)
then operations are shut down for the next period. So, if C(1) > V C, E(1) =
V (1) − V C − F C, and if C(1) ≤ V C, then E(1) = V (1) − C(1) − F C. In
summary


             E(1) = max [V (1) − V C − F C, V (1) − C(1) − F C]
                                                                           (14.7)
                   = V (1) − F C − min [V C, C(1)] .

Therefore, the net present value of the project is E(0) − I(0). As E(1) >
V (1) − V C − F C with this option, we have a greater net present value.

Example 14.7 (Option to abandon for salvage value). At any time a company
has the choice to continue with a project or abandon the company with some
salvage value A. The salvage value could be time- and state-dependent. It is
possible also to regard the salvage value as the value of an alternative project,
in which case we talk about abandoning the project and switching to another
project.
Assuming a decision is made at time t = 1 say, then

                                                                 +
              E(1) = max [V (1), A(1)] = V (1) + [A(1) − V (1)]

and so the net present value of the project is E(0) − I(0) if there is a cost
of I(0) at t = 0, as usual. As E(1) > V (1), the abandonment option has
added value to the project. (Usually this is a perpetual option. This raises
an interesting question: How do we value a perpetual option in a binomial
model?)

Remark 14.8. We have just given some illustrations of the ideas behind real
option valuation. Of course, these possibilities and others can be used in var-
ious combinations.
We have expressed the various options so that the underlying asset is V , the
value of the project without options. If V were the price process of a tradeable
asset then we could price these real options like any other ﬁnancial option,
perhaps using a binomial model for V . However, this is usually not the case.
How to proceed is the subject of ongoing research, and you will see articles
with titles like “The Valuation of Options on Non-Traded Assets” devoted to
this topic. In a binomial framework, one assumption that is sometimes used is
the following: Assume that there is some tradeable asset S whose value S(0) is
known, and for which the values S(1, ↑) = S(1, ↓) are known. Here (1, ↑) and
(1, ↓) are states where V (1) takes values V (1, ↑) and V (1, ↓). Then the pricing
works as if V were a tradeable asset. This is because V (1) = x(1 + r) + yS(1)
214    14 Real Options

implies that a(1+r)+bV (1) can be synthesized from (a+bx)(1+r)+(by)S(1).
Trigeorgis calls S a twin security, but we have not required S and V to be
perfectly correlated (V (1) = kS(1)). Without the concept of twin securities,
researchers can use the concept of certainty equivalence from the actuarial
sciences or indiﬀerence pricing to construct prices of real options.



14.2 Options on Non-Tradeable Assets

We have assumed in our derivative pricing that the payoﬀ can be replicated in
terms of an underlying tradeable asset. There are many examples where this
is not the case, and there is active research at present to deal with such situa-
tions. There are now hedgeable and non-hedgeable risks. The hedgeable
risks can be priced as we have described. The non-hedgeable risks are often
priced using the concept of certainty equivalence or using indiﬀerence pricing.
The concept of certainty equivalence is well known in the actuarial sciences.
We shall employ indiﬀerence pricing in this section.
At time t = 1 we consider four states, ω1 , ω2 , ω3 , ω4 . Suppose there is a
tradeable asset (a stock) denoted by S. Suppose S(ω1 ) = S(ω2 ) = S(1, ↑) and
S(ω3 ) = S(ω4 ) = S(1, ↓). We shall also assume there is cash which we can
invest under interest.
Starting with wealth x at t = 0 we can invest in stock and cash so that

                               x = H0 + H1 S(0).                          (14.8)

At time t = 1, we shall have

             X(1) = H0 R + H1 S(1) = xR + H1 (S(1) − RS(0)).              (14.9)

How should an investor choose H1 (and hence H0 )?
An investor may have a utility function U and select risky investments using
the expected utility criterion as discussed in the book by von Neumann and
Morgenstern [77]. According to this criterion, an investment X is preferred to
Y if and only if E[U (X)] > E[U (Y )]. Typically U will be an increasing and
concave function. The latter condition is equivalent to the condition that an
investor will always prefer E[X] to X for any risk X. We said “may have a
utility function” because all we really require is that our investor have a way
of making choices over uncertain outcomes; utility functions are useful in this
respect, but not the only way to model choices.
An investor will then choose H1 to maximize

                         E[U (xR + H1 (S(1) − RS(0)))].                  (14.10)
                                    14.2 Options on Non-Tradeable Assets       215

We shall determine this choice, called H1∗ , and V (x) the resulting maximum
expected utility.
We give (real world) probabilities to the four states p1 , p2 , p3 , p4 . We shall
also write p(↑) = p1 + p2 and p(↓) = p3 + p4 = 1 − p(↑). We shall also take
(for simplicity)

                               U (x) = − exp(−γx)                           (14.11)

for some γ > 0. Then U is (strictly) increasing and (strictly) concave.
The expression in (14.10) becomes


                   p(↑) [− exp(−γ(xR + H1 (S(1, ↑) − RS(0)))]
                + p(↓) [− exp(−γ(xR + H1 (S(1, ↓) − RS(0)))]

and setting the derivative of this expression to zero yields the unique value

                                                                 
                 1                   −1     p(↓)(S(1, ↓) − RS(0))
          H1∗ = − (S(1, ↑) − S(1, ↓)) ln −
                γ                           p(↑)(S(1, ↑) − RS(0))
                                                        
                1                   −1    p(↓) · (1 − π)
             = − (S(1, ↑) − S(1, ↓)) ln                    .
                γ                            p(↑) · π

No arbitrage assumptions require that (S(1, ↑) − S(0))(S(1, ↓) − S(0)) < 0, so
there is no problem taking logarithms above. Let us assume that

                             S(1, ↓) < S(0) < S(1, ↑).

Substituting H1∗ back into (14.10) gives


  V (x)
                                         1−π                    π 
                           RS(0)−S(1, ↓)            S(1, ↑)−RS(0)
   = −p(↑)π p(↓)1−π                               +                        e−γxR
                           S(1, ↑)−RS(0)            RS(0)−S(1, ↓)
                    p(↑)π p(↓)1−π
   = − exp(−γxR)                   .
                    π π (1 − π)1−π
                                                                            (14.12)

Note that H1∗ does not depend on initial wealth x. The number π is, as usual,

                                   RS(0) − S(1, ↓)
                              π=                     .
                                   S(1, ↑) − S(1, ↓)
216    14 Real Options

Now consider a general claim G with values g1 , g2 , g3 , g4 in the four states. If
g1 = g2 and g3 = g4 , then G is an attainable claim, which can be replicated
by cash and S. Otherwise we may suppose that

                             G(1)i = gi = G(Y (ωi ))                       (14.13)

for some (possibly) non-tradeable asset Y . Now write

                       VG (x) = max E[U (X(1) − G(1))],                    (14.14)
                                  H1

where we note that V (x) = V0 (x). Actuarial science deﬁnes the indiﬀerence
price for G to be that value ν so that

                               V (x) = VG (x + ν).                         (14.15)

What this means is this: we are indiﬀerent to the two situations, (1) we have
nothing to do with G, and (2) for a liability of G(1) at time t = 1, we are
happy to have extra wealth ν at t = 0. Hence the term “indiﬀerence” price.
Strictly speaking we have deﬁned the indiﬀerence asking price, νa , rather
than the indiﬀerence bid price, νb , which could be deﬁned by setting V (x) =
V−G (x − νb ) in an analogous way.
We would now like to calculate the value of ν and check that it agrees with
what we already know in the case that G is attainable.
We can calculate the optimal H1∗∗ in (14.14). It is calculated like the H1∗
above. In fact, now


                  1                     −1
         H1∗∗ = − (S(1, ↑) − S(1, ↓))
                  γ
                                                                      
                       (RS(0) − S(1, ↓))(p1 exp(γg1 ) + p2 exp(γg2 ))
                × ln
                       (S(1, ↑) − RS(0))((p3 exp(γg3 ) + p4 exp(γg4 ))
                  1                     −1
              = − (S(1, ↑) − S(1, ↓))
                  γ
                                                              
                       (1 − π) · (p1 exp(γg1 ) + p2 exp(γg2 ))
                × ln                                             .
                          π · ((p3 exp(γg3 ) + p4 exp(γg4 ))

Substitute this into (14.15) to get


        VG (x) = − exp(−γxR)E[exp(−γH1∗∗ (S(1) − RS(0)) + γG(1)]
                               (p1 exp(γg1 ) + p2 exp(γg2 ))π
               = − exp(−γx)
                                             ππ
                                         14.2 Options on Non-Tradeable Assets      217

                          (p3 exp(γg3 ) + p4 exp(γg4 ))1−π
                      ×                                    .
                                    (1 − π)1−π

Note that this agrees with (14.12) when G = 0. If we now apply condition
(14.15), we obtain

                                                         
                   1         p1 exp(γg1 ) + p2 exp(γg2 )
       νa (G) =        π ln
                  γR                    p1 + p2
                                                                   
                                         p3 exp(γg3 ) + p4 exp(γg4 ) 
                          + (1 − π) ln
                                                  p3 + p4
                   1 
             =         πEp [exp(γG(1))| S(1) = S(1, ↑)]
                  γR
                                                                  
                          + (1 − π)Ep [exp(γG(1))| S(1) = S(1, ↓)] .            (14.16)

Similarly we can show

                     
                   1
    νb (G) = −        πEp [exp(−γG(1))| S(1) = S(1, ↑)]
                  γR
                                                                   
                          + (1 − π)Ep [exp(−γG(1))| S(1) = S(1, ↓)]             (14.17)


These formulae can be summarized even further. Let


                       p1                                  p2
          q1 = π                               q2 = π                           (14.18)
                    p1 + p2                             p1 + p2
                             p3                                  p4
          q3 = (1 − π)                         q4 = (1 − π)           .         (14.19)
                          p3 + p4                             p3 + p4

Then
                                                                    
                                          1
                  νa = νa (G) = Eq          ln Eq [exp(γG(1)) | S(1)]
                                         γR

an expectation conditioned on the value of S(1), and
                                                                    
                                         1
             νb = νb (G) = −Eq             ln Eq [exp(−γG(1)) | S(1)] .
                                        γR

Note the following:
1. If g1 = g2 = g(↑) and g3 = g4 = g(↓), then
218    14 Real Options
                                                
                   πg(↑) + (1 − π)g(↓)      G(1)
         νa = νb =                     =E          ≡ π(G),                (14.20)
                            R                R
                                                                                    
                                                                              S(1)
the risk-neutral price, as we already know. In particular S(0) = Eq            R         .
2. If G = G1 + G2 where G1 is attainable and G2 is not (necessarily) attain-
able, then
                                  1
                          νa (G) =  Eq [G1 ] + νa (G2 )                   (14.21)
                                  R
                                  1
                          νb (G) = Eq [G1 ] + νb (G2 ).                   (14.22)
                                  R

3. A more risk-averse person has a larger value of γ. νa is an increasing function
of γ, while νb is decreasing in γ. (In fact the νb can be obtained from νa by
replacing γ by −γ.)
4. We have the approximation
                      1 '           γ                       (
             νa (G) ≈    Eq [G(1)] + Eq [Varq [G(1) | S(1)]]              (14.23)
                      R             2
                      1 '           γ                       (
             νb (G) ≈    Eq [G(1)] − Eq [Varq [G(1) | S(1)]] .            (14.24)
                      R             2

5. We have the identity
                                              ∂νa
                               H1∗∗ = H1∗ +
                                              ∂S0
where the dependence of νa on S(0) is through π. (See the deﬁnition of π.) If
we deﬁne
                                 ∂νa
                     L(1) = νa +      (S(1) − RS(0))                 (14.25)
                                 ∂S0
then
                   Ep [U (L(1) − G(1))] = Ep [U (0)] = U (0),             (14.26)
so we are indiﬀerent between L(1) − G(1) and 0.

Example 14.9. S(0) = 20, S(1, ↑) = 25, S(1, ↓) = 16. Thus π = 4/9.
Part (a).
p1 = p2 = p3 = p4 = 0.25, g1 = g3 = 8, g2 = g4 = 6. Then

                                               
                        1     1
                   νa =   ln (exp(6γ) + exp(8γ))
                        γ     2
                                                 
                          1     1
                   νb = − ln (exp(−6γ) + exp(−8γ)) .
                          γ     2
                                  14.2 Options on Non-Tradeable Assets      219

For γ = 1, 2, 3 the values are νa = 7.4334, 7.6625, 7.7698 and νb = 6.5662,
6.3375, 6.2302, so the spread widens with increasing risk aversion. The ap-
proximations hold for small values of γ.
These values of νa and νb do not depend on S at all, as it is clear that the
risk G(1) is independent of S(1). It is also easy to check that


                          Ep [U (νa − G(1))] = U (0)
                          Ep [U (G(1) − νb )] = U (0).

Also L(1, ↑) = L(1, ↓) = νa in this case, as ∂S(0)
                                              ∂νa
                                                   = 0.
Part (b).
We now change the p probabilities, leaving all else unchanged. Suppose p1 =
0.375, p2 = 0.125, p3 = 0.2 and p4 = 0.3, so now there is some correlation
between G and S. When S goes up, G is more likely to go up than down; and if
S goes down, G is more likely to go down. For γ = 1, 2, 3 the answers are νa =
7.4854, 7.6904, 7.7885 and νb = 6.7005, 6.4347, 6.2986, respectively. The values
    ∂νa
of ∂S(0) are 0.05421, 0.03376, 0.02317, respectively. Note the dependence on
risk aversion. In the case γ = 1, L(1, ↑) = 7.75644 and L(1, ↓) = 7.26853, and
(14.26) can be veriﬁed easily. Similarly for γ = 2, 3.
Part (c).
Consider another change of the p probabilities, leaving all else unchanged.
Suppose p1 = 0.375, p2 = 0.125, p3 = 0.3 and p4 = 0.2, so now there is
less correlation between G and S. For γ = 1, 2, 3 the answers respectively are
νa = 7.46560, 7.7989, 7.8632 and νb = 6.8711, 6.5431, 6.3733. The respective
            ∂νa
values of ∂S(0)  are 0.02010, 0.01206, 0.00823. Note the dependence on risk
aversion. In the case γ = 1, L(1, ↑) = 7.75644 and L(1, ↓) = 7.57556, and
(14.25) can be veriﬁed easily. Similarly this is the case for γ = 2, 3.
Part (d).
Consider another change of the p probabilities, leaving all else unchanged.
Suppose p1 = 0.3125, p2 = 0.375, p3 = 0.3 and p4 = 0.2, so now there is
negative correlation between G and S. For γ = 1, 2, 3 the respective answers
are νa = 7.2995, 7.5653, 7.7014 and νb = 6.51461, 6.3096, 6.2115. The values of
 ∂νa
∂S(0) are –0.06901, –0.04634, –0.03221. Note the dependence on risk aversion.
In the case γ = 1, L(1, ↑) = 6.95446 and L(1, ↓) = 7.57556, and (14.25) can
be veriﬁed easily. Similarly this is the case for γ = 2, 3.

For more general utility functions, explicit formulae are often not available.
However properties 1. and 2. still hold, as do the following:
6. If G1 ≤ G2 then ν(G1 ) ≤ ν(G2 ) where ν = νa or νb .
7. For any G1 , G2 and 0 ≤ α ≤ 1,
220      14 Real Options

                 ν(αG1 + (1 − α)G2 ) ≥ αν(G1 ) + (1 − α)ν(G2 )          (14.27)

where ν = νa or νb . This says that ν(G), which is, in general, nonlinear in G,
is concave in G.
8. In place of property 4. we have the more general approximation,
                                      1
                           νb (G) ≈     [πGu + (1 − π)Gd ]              (14.28)
                                      R
with
                                      Γ (x)
      Gu = Ep [G | S(1) = S(1, ↑)] −        varp [G | S(1) = S(1, ↑)]   (14.29)
                                        2
                                      Γ (x)
       Gd = Ep [G | S(1) = S(1, ↓)] −       varp [G | S(1) = S(1, ↓)]   (14.30)
                                        2
and
                                           u (xR)
                               Γ (x) = −            >0                  (14.31)
                                           u (xR)
and analogous approximations for νa (G) are the same except that Γ (x) is
replaced with −Γ (x). The proofs are given in [27]. In fact
                                        p1 G 1 + p2 G 2
              Ep [G | S(1) = S(1, ↑)] =                                 (14.32)
                                           p1 + p2
                                        p3 G 3 + p4 G 4
             Ep [G | S(1) = S(1, ↓)] =                                  (14.33)
                                           p3 + p4
                                           p1 p2              2
            varp [G | S(1) = S(1, ↑)] =             [G1 − G2 ]          (14.34)
                                        (p1 + p2 )2
                                           p3 p4              2
            varp [G | S(1) = S(1, ↓)] =             [G3 − G4 ] .        (14.35)
                                        (p3 + p4 )2

9. If H + and H − are the payoﬀs of attainable claims with

                                  H− ≤ G ≤ H+

then with π(H − ) and π(H + ) their risk-neutral prices

                       π(H − ) ≤ νb (G) ≤ νa (G) ≤ π(H + ).             (14.36)

This shows that νa (G) and νb (G) are non-arbitrage prices. (See Appendix B.)
The ideas we have presented in this one-period scenario can be generalized
by using more than one (risky) tradeable asset, but we must the resort to
numerical methods or approximations in order to compute νa or νb (see [27]
for details).
If we do not use any tradeable assets except cash in our analysis, then we
compute νa (G) from
                                   14.2 Options on Non-Tradeable Assets      221

                  Ep [u(xR)] = Ep [u((x + νa (G))R − G(1))]               (14.37)

and with (14.11), we obtain
                                   1
                       νa (G) =      ln Ep [exp(γG(1))]                   (14.38)
                                  γR
and similarly
                                   1
                     νb (G) = −      ln Ep [exp(−γG(1))] ,                (14.39)
                                  γR
which is pricing by what actuaries call certainty equivalence. This leads to
approximations
                            1             γ           
                   νa (G) ≈     Ep [G(1)] + varp [G(1)]                   (14.40)
                            R              2
                            1             γ           
                   νb (G) ≈     Ep [G(1)] − varp [G(1)] .                 (14.41)
                            R              2

Actuaries often use νa to price life insurance claims that are not hedgeable by
ﬁnancial instruments (see [30], Chapter 5). This indicates that indiﬀerence
pricing provides a convenient bridge between this certainty equivalence
pricing and the risk-neutral pricing for hedgeable claims.
One of the problems with this indiﬀerence pricing methodology is the need
to specify the utility function u, on which the indiﬀerence price depends. If
we use exponential utilities, and we know that Y (0) = νa (Y (1)) and G is
expressed as in (14.13), then using (14.16) with G = Y , we can compute γ
and then use this γ to compute νa (G) from G(1). An analogous calculation
could be used if Y (0) = νb (Y (1)). We could also work with general utilities
and the approximate formula (14.28) to determine Γ (x). Of course νa and
νb are not market prices, but indiﬀerence prices considered from the point of
view of an agent with utility function u.

Example 14.10. As an application of these ideas, let Y (0) represent the present
value of a ﬁrm with value Y (1) at t = 1. Y (0) could represent the bid indif-
ference price of the (not publicly listed) ﬁrm from the point of view of the
CEO of the ﬁrm: Y (0) = νb (Y (1)). This same CEO may wish the value of
the ﬁrm if it he/she an embedded option to liquidate for M the ﬁrm at t = 1.
Then take G(1) = max[Y (1), M ] and we ask for G(0) = νb (G(1)).

Example 14.11. On the other hand, electricity is an example of a non-tradeable
asset that must be bought at the ask-price of the generators. Here forward
contracts are derivative contracts (exchange pool prices for ﬁxed prices over
some period of time) with zero present ask-price. These are ideas yet to be
explored thoroughly.
222     14 Real Options

Example 14.12. This is a binomial version of Example 14.10 when cash is the
only tradeable asset. Let us assume that V is a price process of some not-
necessarily traded security. For example, V could be the value of a non-listed
ﬁrm, the value of some major project and so on. Clearly, V will depend on
time. We also allow in particular V to represent the value that the CEO
assigns to the ﬁrm or project. It is not necessarily a market price, but no
doubt (and we will not be tempted to digress here), this value will also be
aﬀected by changes in the ﬁnancial markets (for example, the mining stock
sector index).
Let V (n, j) denote the value of V at time t = n in state j (j = 0, 1, 2, . . . , n).
From state (n, j) we can move “up” to (n + 1, j + 1) or “down” to (n + 1, j).
There does not have to be any up/down meaning associated with these moves.
These up and down movements will occur with (real world) probabilities
{p(n, j), 1 − p(n, j)}. Let us assume (for simplicity) that the CEO has ex-
ponential utility (which could be time- and state-dependent). Then (14.39)
translates to


                        1   
        V (n, j) = −      ln p(n, j) exp(−γV (n + 1, j + 1))
                       γR
                                                                
                             + (1 − p(n, j)) exp(−γV (n + 1, j)) ,           (14.42)

where γ = γ(n, j) and R = R(n, j) in general. We will take R(n, j) = 1 +
rf ∆t, where rf is the risk-free interest rate. If the project provides handouts
(dividends), then the handouts at t = n + 1 must be added to the V (n + 1, ·)
in the right hand side of (14.42) since the value at t = n is the present value
of the ﬁrm/project at t = n + 1 together with these handouts. If we have a
model for V we still need to determine the γ and the probabilities. In the
binomial models there is some hope with this parsimonious utility function.
Often a value k of WACC (weighted average cost of capital) can be provided.
If this is quoted continuously (as in [17, page 127], for example), then we have

 V (n, j) exp(k∆t) = p(n, j)V (n + 1, j + 1) + (1 − p(n, j))V (n + 1, j) (14.43)

or
                               V (n, j) exp(k∆t) − V (n + 1, j)
                   p(n, j) =                                    ,            (14.44)
                                V (n + 1, j + 1) − V (n + 1, j)
so with p(n, j) determined, we can back out the γ(n, j) > 0 from (14.43)
uniquely, and infer the CEO’s “local” risk-aversion parameter (as γ can be
called). This can even be simpliﬁed further if we take

                             V (n, j) = V (0, 0)uj dn−j                      (14.45)
                                                                         √
as in the Cox-Ross-Rubinstein (CRR) model, where u = exp(σ ∆t) and
d = 1/u. In that case
                                     14.2 Options on Non-Tradeable Assets      223

                                        exp(k∆t) − d
                            p(n, j) =                ,                      (14.46)
                                            u−d
which is the same for all (n, j). However, the values of γ(n, j) are not the same
for all (n, j).
To see this consider the example from [17]. Let V (0, 0) = V = 1000, use a
CRR tree with u = 1.06184 (as ∆t = 0.25, it seems they used a value of
σ = 12%), n = 0, 1, 2. With k = 15% and rf = 5%, p(n, j) = 0.80323 for all
(n, j), R = 1 + 0.05 × 0.25 = 1.0125. We can now back out the risk-aversion
factors γ(0, 0) = 0.0169258, γ(1, 0) = 0.0179724 and γ(1, 1) = 0.0159400.

There are authors who consider the underlying asset as though it were trade-
able. In Copeland and Antikarov [17] this is called the MAD approach.
MAD is an acronym for Market Asset Disclaimer which refers to the as-
sumption: “we are willing to make the assumption that the present value of
the cash ﬂows of the project without ﬂexibility (i.e., the traditional NPV) is
the best unbiased estimate value of the project were it a traded asset”. This
leads to the following valuation procedure:
Let
                                V (n, j)R(n, j) − V (n + 1, j)
                    q(n, j) =                                   ,           (14.47)
                                V (n + 1, j + 1) − V (n + 1, j)
then
                    q(n, j)G(n + 1, j) + (1 − q(n, j))G(n + 1, j)
        G(n, j) =                                                           (14.48)
                                       R(n, j)

is the valuation formula for a claim on V , say. We now compare the approaches.

Example 14.13 (Abandonment option).
(a) the MAD approach.
We ﬁnd A(n, j), n = 0, 1, ..., N ; j = 0, 1, .., n with N = 2, X = 900, so that

             A(N, j) = max [V (N, j), X]
                       1
             Z(n, j) = [qA(n + 1, j + 1) + (1 − q)A(n + 1, j)]
                       R
             A(n, j) = max [Z(n, j), X] .

Here and in the next three examples {q, 1 − q} = {0.58910, 0.41090}.
This approach yields A(0, 0) = 1002.155, and so the value of the embedded
option to abandon at 900 is Ã(0, 0) = A(0, 0) − V (0, 0) = 2.155. We give the
intermediate values in the table.
(b) The indiﬀerence pricing (IP) approach.
We now use the recursion
224    14 Real Options

  A(N, j) = max [V (N, j), X]
                   1                                                        
  Z(n, j) = −             ln p e−γ(n,j)A(n+1,j+1) + (1 − p) e−γ(n,j)A(n+1,j)
              γ(n, j) · R
  A(n, j) = max [Z(n, j), X] ,

where the γ(n, j) values are as in the example above. We now obtain A(0, 0) =
1005.066 and Ã(0, 0) = A(0, 0) − V (0, 0) = 5.066.
The CEO ascribes higher value to the embedded abandonment option in this
second approach. The MAD approach is linear in payoﬀs, and Copeland and
Antikarov also value the abandonment put separately and again obtain the
value 2.155. However, if this were done with the second method, the abandon-
ment put by itself is worth only 0.4427. It seems that the correct way to value
an embedded real option is to determine the additional value that is added
to a project by this option, as we have described. This idea can also used by
a CEO to value another company—to decide the value that is added to his
company as a result of a takeover.


                   Table 14.1. Abandonment option values.
                                n=0     n=1     n=2
                       j=0 MAD 1002.16 947.07 900.00
                            IP 1005.07 949.83 900.00
                       j=1 MAD         1061.84 1000.00
                            IP         1061.84 1000.00
                       j=2 MAD                 1127.50
                            IP                 1127.50




Example 14.14 (Option to contract (shrink to α%)).
(a) the MAD approach.
We ﬁnd Sh(n, j), n = 0, 1, . . . , N ; j = 0, 1, . . . , n, with N = 2, L = 450,
α = 0.50, so that


           Sh(N, j) = max [V (N, j), αV (N, j) + L]
                      1
            Z(n, j) = [qSh(n + 1, j + 1) + (1 − q)Sh(n + 1, j)]
                      R
           Sh(n, j) = max [Z(n, j), αV (n, j) + L] ,

which yields Sh(0, 0) = 1001.08, and so the value of the embedded option to
                    ˜
abandon at 900 is Sh(0,   0) = Sh(0, 0) − V (0, 0) = 1.08. We give the interme-
diate values in the table.
                                  14.2 Options on Non-Tradeable Assets      225

(b) the indiﬀerence pricing approach.
We now use the recursion

 Sh(N, j) = max [V (N, j), αV (N, j) + L]
                   1                                                        
  Z(n, j) = −             ln pe−γ(n,j)Sh(n+1,j+1) + (1 − p)e−γ(n,j)Sh(n+1,j)
              γ(n, j) · R
 Sh(n, j) = max [Z(n, j), αV (n, j) + L] ,

where the γ(n, j) values are again as in the example above. We now obtain
                        ˜
Sh(0, 0) = 1002.62 and Sh(0, 0) = Sh(0, 0) − V (0, 0) = 2.62.
The CEO ascribes again a higher value to the embedded contraction option
in this second approach.


                    Table 14.2. Option to contract values.
                                n=0     n=1     n=2
                       j=0 MAD 1001.08 944.42 893.46
                            IP 1002.62 945.88 893.46
                       j=1 MAD         1061.84 1000.00
                            IP         1061.84 1000.00
                       j=2 MAD                 1127.50
                            IP                 1127.50




Example 14.15 (Option to Expand (by β%)).
(a) the MAD approach.
We ﬁnd E(n, j), n = 0, 1, . . . , N ; j = 0, 1, . . . , n, with N = 2, M = 100,
β = 0.10 so that

             E(N, j) = max [V (N, j), (1 + β)V (N, j) − M ]
                       1
             Z(n, j) = [qE(n + 1, j + 1) + (1 − q)E(n + 1, j)]
                       R
             E(n, j) = max [Z(n, j), (1 + β)V (n, j) − M ] ,

which yields E(0, 0) = 1004.32, and so the value of the embedded expansion
option is Ẽ(0, 0) = E(0, 0) − V (0, 0) = 4.32. We give the intermediate values
in the table.
(b) the indiﬀerence pricing approach.
We now use the recursion


  E(N, j) = max [V (N, j), (1 + β)V (N, j) − M ]
226       14 Real Options

                      1                                                      
      Z(n, j) = −            ln pe−γ(n,j)E(n+1,j+1) + (1 − p)e−γ(n,j)E(n+1,j)
                 γ(n, j) · R
      E(n, j) = max [Z(n, j), (1 + β)V (n, j) − M ] ,

where the γ(n, j) values are again as in the example above. We now obtain
E(0, 0) = 1002.06 and Ẽ(0, 0) = E(0, 0) − V (0, 0) = 2.606.
The CEO ascribes again a lower value to the embedded expansion option in
this second approach. As compared with the abandonment and contraction
options, the expansion option is riskier (has a more volatile payoﬀ) and this
is penalized more heavily in the second method than in the MAD approach.
An alternate interpretation comes from the observation that the expansion
option is positively correlated with V (when V increases the expansion option
is more valuable, and conversely) while the other two options (abandonment,
contraction) are negatively correlated with V (when V decreases in value,
these options become more valuable). The expansion option has a speculative
character, while the abandonment and contraction options have the character
of hedging risks.


                       Table 14.3. Option to expand values.
                                  n=0     n=1     n=2
                         j=0 MAD 1004.32 941.76 886.91
                              IP 1002.62 941.76 886.91
                         j=1 MAD         1069.26 1000.00
                              IP         1068.02 1000.00
                         j=2 MAD                 1140.26
                              IP                 1140.26




Example 14.16 (Compound option (all together)).
(a) the MAD approach.
We ﬁnd C(n, j), n = 0, 1, . . . , N ; j = 0, 1, . . . , n, with N = 2, X = 900,
α = 0.59, L = 450, M = 100, β = 0.10 so that

         C(N, j) = max [V (N, j), X, αV (N, j) + L, (1 + β)V (N, j) − M ]
                   1
         Z(n, j) = [qC(n + 1, j + 1) + (1 − q)C(n + 1, j)]
                   R
         C(n, j) = max [Z(n, j), X, αV (n, j) + L, (1 + β)V (n, j) − M ] ,

which yields C(0, 0) = 1006.47, and so the value of the compound option is
C̃(0, 0) = C(0, 0) − V (0, 0) = 6.47. We give the intermediate values in Table
14.4.
                                    14.2 Options on Non-Tradeable Assets        227

(b) the indiﬀerence pricing approach.
We now use the recursion

  C(N, j) = max [V (N, j), X, αV (N, j) + L, (1 + β)V (N, j) − M ]
                   1                                                      
  Z(n, j) = −             ln pe−γ(n,j)C(n+1,j+1) + (1 − p)e−γ(n,j)C(n+1,j)
              γ(n, j) · R
  C(n, j) = max [Z(n, j), X, αV (n, j) + L, (1 + β)V (n, j) − M ] ,

where the γ(n, j) values are again as in the example above. We now obtain
C(0, 0) = 1007.31 and C̃(0, 0) = C(0, 0) − V (0, 0) = 7.316.
The CEO ascribes again a higher value to the embedded compound option in
this second approach.


                      Table 14.4. Compound option values.
                                 n=0     n=1     n=2
                        j=0 MAD 1006.47 947.07 900.00
                             IP 1007.31 949.83 900.00
                        j=1 MAD         1069.26 1000.00
                             IP         1068.02 1000.00
                        j=2 MAD                 1140.26
                             IP                 1140.26




Remark 14.17. (a) These CRR type examples could be easily extended to more
periods. For the second approach extra values of γ(n, j) are needed. These are
easily calculated. (b) Because the approaches give diﬀerent valuations, they
no doubt (but not in the examples provided here) lead to diﬀerent decisions
to exercise the embedded real options.

Example 14.18. We consider a two-time model with four states at t = 1. These
will be labelled (1, j) for j = 1, 2, 3, 4 and occur with (real world) probabilities
p1 , p2 , p3 , p4 , respectively. We have three assets: cash, a ﬁnancial asset (S)
and a non-tradeable asset (Y ). We have S(1, 1) = S(1, 2) = d · S and S(1, 3) =
S(1, 4) = u · S with S(0, 0) = S. We set q = (R−d) (u−d) . We will use exponential
utility with risk-aversion parameter γ. Then νb (Y ) can be computed as follows
(see 14.16):


               1
       ν(Y ) =    [qYu + (1 − q)Yd ]                                        (14.49)
               R                                               
                 1      p1 exp(−γY (1, 1)) + p2 exp(−γY (1, 2))
          Yd = − ln                                                         (14.50)
                 γ                      p1 + p2
228    14 Real Options
                                                            
               1     p3 exp(−γY (1, 3)) + p4 exp(−γY (1, 4))
         Yu = − ln                                                       (14.51)
               γ                     p3 + p4

we can think of Yu and Yd as relative certainty equivalences and Y → Ỹ =
(Yu , Yd ) maps Y in some sense onto the attainable claims in the ﬁnancial
market sense; and νb (Y ) = π(Ỹ ). Y can be regarded as a tradeable asset
when Y (1, 1) = Y (1, 2), and Y (1, 3) = Y (1, 4), for then it can be repli-
cated exactly by a portfolio of tradeable ﬁnancial assets (cash and S). For
our model we will assume that S, Y are completely speciﬁed (we know val-
ues for S(0, 0), Y (0, 0) = νb (Y ) and S(1, j), Y (1, j) for j = 1, 2, 3, 4 with
S(1, 1) = S(1, 2), S(1, 3) = S(1, 4) and the real world probabilities pj for
state j at t = 1). We could have in mind that S is some market index and
Y is V the value process of a ﬁrm or project. We could calibrate this model
in terms of expected returns on S, correlations between S and V and WACC
values as described in Example 14.43 or by some other method as we shall see
below. It is assumed that γ can be inferred.
Next we consider a contingent claim (derivative) written on Y , which we call
G, and we could assume that

                              G(1, j) = g(Y (1, j))                      (14.52)

for some function g (for example, g(x) = max[0, x − K]), j = 1, 2, 3, 4. We
then seek νb (G), the indiﬀerence bid price of G. In fact,


              1
      νb (G) =   [qGu + (1 − q)Gd ]                                      (14.53)
              R                                            
                1     p1 exp(−γG(1, 1)) + p2 exp(−γG(1, 2))
         Gd = − ln                                                       (14.54)
                γ                    p1 + p2
                                                           
                1     p3 exp(−γG(1, 3)) + p4 exp(−γG(1, 4))
         Gu = − ln                                            .          (14.55)
                γ                    p3 + p4

We shall not continue here with this example except to point out an interesting
consequence of this theory. We can write

                               G = G(1) + G(2)                           (14.56)
        (1)      (1)
where Gu = Gd and G(2) can be replicated in the ﬁnancial markets. Then
G(1) is valued as the actuaries do it (discount certainty equivalents) and G(2)
is valued according to ﬁnancial principles (using risk-neutral expectations):

                                    1 (1)
                           ν(G) =    G + π(G(2) ).                       (14.57)
                                    R u
                                   14.3 Correlation with Tradeable Assets    229

In fact we can choose H0 and H1 so that


                     c = H0 · R + H1 · S(1, j)       j = 1, 2
                     0 = H0 · R + H1 · S(1, j)       j = 3, 4

where c = Gd − Gu . Then the choices

                       G(2) (1, j) ≡ H0 · R + H1 · S(1, j)
                       G(1) (1, j) ≡ G(1, j) − G(2) (1, j)

                                        (1)   (1)
satisfy these requirements with Gu = Gd = Gu . Equation (14.57) then
gives additional structure to this pricing methodology.

Remark 14.19. We can do explicit pricing in this four-state model also using
power utilities where we refer to [27]. In fact it could be argued that this is a
better class of utility functions to use. With exponential utilities the pricing
is independent of the wealth of the CEO. This would suggest that a small
company will value a project the same way a large company does as their
attitude to risk is not dependent on the level of their other assets. This is not
the case with power utilities. However, the use of power utilities does not lead
to simple closed-form expressions, but good approximations are available (in
[27, equation (52)]). We present some of these details below.



14.3 Correlation with Tradeable Assets

We present here some ideas on the calibration of Example 14.18
Let us assume that u > d (without loss of generality), and deﬁne


                                     S(1, j) − S(0, 0)
                          rS (1, j) =
                                          S(0, 0)
                                     Y (1, j) − Y (0, 0)
                         rY (1, j) =
                                           Y (0, 0)

and suppose


                            E[rS ] = exp(µ∆t) − 1
                            E[rY ] = exp(k∆t) − 1
230     14 Real Options

and ρ is the correlation of rS and rY . Then


                          S = E[S] = S(0, 0) exp(µ∆t)
                          Y = E[Y ] = Y (0, 0) exp(k∆t).

Let
                                p3 Y (1, 3) + p4 Y (1, 4)
                           Yu =
                                          p3 + p4
                                p 1 Y (1, 1) + p2 Y (1, 2)
                           Yd =                            ,
                                          p1 + p2

and let θ = Y u − Y d . Given the value of θ we can compute p1 , p2 , p3 , p4 by


                                pd                             
                  p1 =                      Y − Y (1, 2) − pu θ
                       Y (1, 1) − Y (1, 2)
                                pd                             
                  p2 =                      Y − Y (1, 1) − pu θ
                       Y (1, 2) − Y (1, 1)
                               pu                              
                  p3 =                      Y − Y (1, 4) + pd θ
                       Y (1, 3) − Y (1, 4)
                               pu                              
                  p4 =                      Y − Y (1, 3) + pd θ ,
                       Y (1, 4) − Y (1, 3)

where
                                         exp(µ∆t) − d
                          pu = p 3 + p4 =
                                             u−d
                                         u − exp(µ∆t)
                          pd = p1 + p2 =              ,
                                             u−d

and θ solves the equation
                                                    
                 cov[S(1), Y (1)] = ρ       var(S(1)) var(Y (1)),

which implies
                              pu pd θ2 = ρ2 (A + Bθ),                      (14.58)

where

      A = pu (Y − Y (1, 3))(Y (1, 4) − Y ) + pd (Y − Y (1, 1))(Y (1, 2) − Y )

      B = pu pd (Y (1, 4) + Y (1, 3) − Y (1, 2) − Y (1, 1)),
                                 14.3 Correlation with Tradeable Assets    231

and we assume A > 0. Without going into detail, it is clear that S and Y
cannot be speciﬁed arbitrarily without introducing arbitrage opportunities
(the return on Y cannot be arbitrarily high compared with that of S). The
equation (14.58) has two solutions. We take the positive root when ρ > 0 and
the negative root when ρ < 0. Of course, not all choices of ρ are consistent.
The formulas for p1 , p2 , p3 p4 must yield positive values.

Example 14.20. We make a minor modiﬁcation to the Copeland and Antikarov
example already discussed. We consider a one-period model with Y (0, 0) =
1000, k = 0.15, Y (1, 2) = Y (1, 4) = 1061.84, Y (1, 1) = Y (1, 3) = 941.76 as
before. S(0, 0) = 100, S(1, 1) = S(1, 2) = 90.48, S(1, 3) = S(1, 4) = 110.52,
which corresponds to volatility of 20% over the time ∆t = 0.25. We take
µ = 0.08. We then have the values Y = 1038.21, S = 102.02, pu = 0.5759, pd =
0.4241, R = 1.0125 (as before), qu = 0.5374, qd = 0.4626, A = 2278.53, B = 0.
We shall price the one-period abandonment option, which pays G(1, j) =
max[X, Y (1, j)] where X is the abandonment value.
case(i) ρ = 0.40.
Then θ = 38.6344, γ(0, 0) = 0.02013, p1 = 0.1620, p2 = 0.2621, p3 = 0.0347,
p4 = 0.5411.
Using the MAD methodology of Copeland and Antikarov ignores the ﬁnancial
asset. Assuming complete markets with X = 1000, MAD would obtain the
present value of Y with abandonment as 1023.63 for G(0, 0).
In our approach we do not assume the market is complete and obtain 1029.97.
We note that ρ = 0.60 gives negative probabilities without changing the pos-
sible values that Y can take.
case (ii) ρ = 0.
Then θ = 0, γ(0, 0) = 0.01693, p1 = 0.0835, p2 = 0.3407, p3 = 0.1133,
p4 = 0.4626.
Using the MAD methodology of Copeland and Antikarov gives the same re-
sults as before as it ignores the correlation between S and Y . In our approach
we do not assume the market is complete and obtain 1030.63.
case (iii) ρ = −0.40.
Then θ = −38.6344, γ(0, 0) = 0.02804, p1 = 0.0049, p2 = 0.4193, p3 = 0.1919,
p4 = 0.3840.
Using the MAD methodology gives the same results as before.
In our approach we obtain 1030.13. We note that ρ = −0.55 gives negative
probabilities without changing the possible values that Y can take.

Remark 14.21. We note that the risk-aversion parameter changes with the
correlation because we do not change the possible outcomes for S and Y , so
232    14 Real Options

diﬀerent risk aversions are implied by diﬀerent views on correlations. These
then impact on the valuation of the project with abandonment.
We remark that the calculations above were performed with MS-EXCEL and
can be extended to multiperiod examples. The number of scenarios at n = 1
was 4; at n = k it is (1 + k)2 , but the computations are similar.

Generalizations
The construction we have just given extends to many periods. We choose
Y (1, 2) = Y (1, 4) and Y (1, 1) = Y (1, 3), then

                                              12
                                      A
                                 θ=ρ
                                     pu pd

and we compute probabilities p1 , p2 , p3 , p4 as above.
We then compute γ = γ(0, 0). In moving to t = 2 we have four simi-
lar constructions with (S(0, √ 0), Y (0, 0) replaced√by, for example, (ue S(0, 0),
ν Y (0, 0)), with u = exp(σS ∆t), ν = exp(σY ∆t) and e, f ∈ {−1, 1}. The
  f

probabilities will be the same as above, but the new risk-aversion parameter
will be ν −f γ for each choice of f . We can now construct the model for (S, Y )
in MS-EXCEL and price claims on it. This was done with the example for the
abandonment for X = 900 American option.
Copeland and Antikarov obtain 1002.15 and exercise (abandonment) will only
occur at t = 2 when Y has its smallest value. For our approach we get diﬀerent
values for the project with embedded option depending on the correlation ρ.
These are 1004.73 (ρ = 0.4), 1004.93 (ρ = 0.2), 1005.06 (ρ = 0), 1005.14 (ρ =
-0.2), 1004.61 (ρ = -0.4). The exercise occurs in the same states as in Copeland
and Antikarov.
A similar set of comparisons can readily be performed for other choices of
abandonment level X. When we consider abandonment at t = 1 or t = 2
with X = 1105, diﬀerent decisions result. Copeland and Antikarov would give
abandonment at t = 1 in each state, while in our approach (with ρ = 0.4)
abandonment is optimal in only one of the possible states (when Y is lowest).
This suggests that the diﬀerent methodologies can lead to diﬀerent optimal
decisions by our CEO.

Remark 14.22. As remarked earlier a study of this example with power utilities
will result in diﬀerent pricing depending on the level of assets of the CEO, and
consequent diﬀerent decisions. The Copeland and Antikarov approach does
not result in diﬀerent valuations and decisions when risk aversions change,
correlations with ﬁnancial markets change and when level of wealth of the
company in which a project is considered changes. The indiﬀerence approach
can capture these diﬀerent aspects.
                                                       14.4 Approximate Methods   233

14.4 Approximate Methods

For general utilities, some approximations are given in [27].
These are good approximations when the time step is not too large. Using the
notation and model of Section 14.3 above:

                                         1
                             ν b (G) ≈     [qu Gu + qd Gd ] ,
                                         R
where in place of (14.54) and (14.55)

                                           1 u (θd0 )
                            Gd = G d +                  vard (G)
                                           2 u (θd0 )


                                           1 u (θu0 )
                            Gu = Gu +                   varu (G)
                                           2 u (θu0 )

                                    p 1 G 1 + p2 G 2
                            Gd =
                                        p1 + p2

                                    p 3 G 3 + p4 G 4
                            Gu =
                                        p3 + p4

                                    S(1, 1) − RS(0, 0)
                             qd =
                                     S(1, 1) − S(1, 0)


                                    RS(0, 0) − S(1, 0)
                             qu =                      = 1 − qd
                                     S(1, 1) − S(1, 0)

and
                                    p 1 p2
                      vard (G) =           (G1 − G2 )2
                                     p2d

                                    p 3 p4
                      varu (G) =           (G3 − G4 )2 ,
                                     p2u

where (θd0 , θu0 ) are the optimal solution of
                                                         
                               max pd u(θd0 ) + pu u(θu0 )
                                 1  0            
                                    qd θd + qu θu0 = x
                                R
234      14 Real Options

The proofs of the ﬁrst approximation are given in [27, equation (34)]. The
second approximation is [ibid., (56)]:

                           u (θd0 )  u (θ0 ) u (xR)
                                0    ≈  0d ≈           .
                           u (θd )     u (θd )   u (xR)
We will now write
                                          u (xR)
                                  Γ =−             >0
                                          u (xR)
and so

                                                             
         1               1    p1 p2        2    p3 p4        2
νb (G) ≈    qd G + qu G − Γ qd 2 (G1 − G2 ) + qu 2 (G3 − G4 )
                d      u
                                                                  .
         R               2     pd                pu
                                                          (14.59)
Let us note that when u(x) = − exp(−γx), then Γ = γ and when u(x) = α1 xα
then Γ = 1−α xR . When we ignore the ﬁnancial asset (and we only have two
states at t = 1) then the formula further simpliﬁes to (as now p1 + p2 = 1):
                                                           
                      1                 1
           νb (G) ≈      p1 G1 + p2 G2 − Γ p1 p2 (G1 − G2 )2 .                 (14.60)
                      R                 2
If we now require that νb (Y (1, ·)) = Y (0, 0) = Y we infer that
                                                        
                                  2 qd Y d + qu Y u − RY
                 Γ =                                                     ,   (14.61)
                         qd pp1 2p2 (Y1 − Y2 )2 + qu pp32p4 (Y3 − Y4 )2
                              d                        u


where we wrote Yj = Y (1, j) for brevity.
We also note that when Y at t = 0 and t = 1 are scaled as Y → βY , then Γ
scales as Γ → Γβ . This is quite useful in the multiperiod models as indicated
in the previous section. (The pi do not change under this scaling.)
We also note that if a CEO approximately prices a project as the (risk-free)
discounted (real world) expected payoﬀ, then the CEO is assuming something
like 14.60 with Γ ≈ 0. This would be the case when γ ≈ 0 with exponential
utilities, α ≈ 1 with power utilities, or x (wealth of CEO’s company) is large
(with power utilities). Using 14.59 or 14.60 we do not have to be concerned
which utility our CEO was using.
We now give some results using this approximate theory which is very easy
to implement in MS-EXCEL. We give results for the abandonment option (as
above) and give a table of comparisons. We use X = 900 as in Copeland and
Antikarov, we use varying correlations (ρ) and MAD indicates the results from
[17], Exp are the results from section 14.3, and Approx the results obtained
from using the approximate theory of this section. These are the abbreviations
used in Table 14.5.
                                                        14.5 Exercises    235

                   Table 14.5. Approximate option values.
                          ρ MAD         Exp Approx
                         -0.4 1002.15 1004.61 1004.85
                         -0.2 1002.15 1005.14 1004.77
                         0.0 1002.15 1005.06 1004.68
                         0.2 1002.15 1004.93 1004.60
                         0.4 1002.15 1004.73 1004.51



Remark 14.23. 1. As in Example 14.18 it can be shown that any payoﬀ G
can be written as G = G(1) + G(2) with G(2) attainable (that is, G(2) (1, 1) =
                                                  (1)  (1)
G(2) (1, 2), and G(2) (1, 3) = G(2) (1, 4)), and Gd = Gu (notation as above),
and then, (like (14.57)),

                                       (1)
                                      Gu
                          ν b (G) =      + π(G(2) ).
                                       R

In fact, this decomposition is not unique. However if we set G(2) (1, 3) =
                                                            (1)   (1)
G(2) (1, 4) = Gu and G(2) (1, 1) = G(2) (1, 2) = Gd , then Gd = Gu = 0,
                   (2)
and so νb (G) = π(G ).
2. Clearly the approximate scheme works well and is very easy to implement.
Obviously it can be applied to many other more interesting examples.
3. With this approximation this model is almost as easy to apply as the
standard binomial model.



14.5 Exercises

Exercise 14.24. A project is modelled by a four-step (year) CRR tree with
V (0, 0) = $1000, u = 1.06184, d = 1/u, R = 1 + 0.05 in each period. For
simplicity you may assume the existence of a “twin security”. See also pages
129-139 of Copeland and Antikarov [17].

 1. The project can be abandoned at any time for $900. Determine the value
    of this abandonment option.
 2. It is possible to shrink (contract) operations by 50% at any time by sell-
    ing oﬀ equipment (say) for $450. (An alternative could be to scale down
    operations and sublease plant equipment for $450.) Find the value of this
    option.
 3. At times t = 1 and t = 2 it is possible for an extra $100 to expand
    operations by 10%. Find the value of this option.
236    14 Real Options

 4. What is the value of the option to do any of the actions described in 1.,
    2. and 3.?

Exercise 14.25. Use the same data as in Exercise 14.24: S(0, 0) = $90, r =
8%, T = 1, N = 10, ∆t = 0.10 and σ = 10%. Assume two dividends of $4 are
paid. Suppose t = 0.4 (n = 4) and t = 0.9 (n = 9) are the ex-dividend dates.
Compute the European and American call prices for expiry at T and strike
prices K = 30, K = 100. When should there be early exercise? Discuss.
A

The Binomial Distribution




The complementary binomial distribution function arises naturally in
the CRR version of the multistep binomial pricing model when we price call
options. This appendix provides some background for these ideas.



A.1 Bernoulli Random Variables

A random variable X is said to be a Bernoulli random variable if it takes
one of the values 1 and 0 with probabilities p (of “success”) and 1 − p (of
“failure”) respectively. We write


                            P r [X = 1] = p
                            P r [X = 0] = 1 − p.

The expected (average) value of X is given by

                E[X] = 1 × P r [X = 1] + 0 × P r [X = 0] = p.        (A.1)

As

              E[X 2 ] = 12 × P r [X = 1] + 02 × P r [X = 0] = p,

the variance is given by


          Var[X] = E[(X − E[X])2 ]
                 = (1 − p)2 × P r [X = 1] + (0 − p)2 × P r [X = 0]
238    A The Binomial Distribution

                    = (1 − p)2 × p + p2 × (1 − p) = p(1 − p).

That is, in summary

                      Var[X] = E[X 2 ] − E[X]2 = p(1 − p).              (A.2)

In general


  E[g(X)] = g(1) × P r [X = 1] + g(0) × P r [X = 0] = pg(1) + (1 − p)g(0).

We shall also write

                                     X ∼ B(p)

to indicate that X is a Bernoulli random variable with parameter p (indicating
the probability of “success”).

Remark A.1. Let Y be deﬁned by

                                Y ≡ b + (a − b)X

where X ∼ B(p); then Y takes values a and b with respective probabilities p
and 1 − p. We also have

             E[Y ] = ap + b(1 − p)   and Var[Y ] = (a − b)2 p(1 − p).

Remark A.2. Let X ∼ B(p) then
                                    ⎧
                                    ⎨1     if x ≥ 1
                       P r [X ≤ x] = 1 − p if 0 ≤ x < 1
                                    ⎩
                                      0    if x < 0.

is the distribution function of X.

Applications

• Consider a coin toss. If heads H comes up, put X = 1 and if tails T
  comes up, put X = 0. Then X ∼ B(0.5), unless the coin is biased (e.g., a
  two-headed coin!).
• Consider a student writing an examination, and put X = 1 if the student
  passes, and X = 0 if the student fails. Then X ∼ B(p), where p is the
  probability that the student will pass (a success).
                                                    A.3 Binomial Distribution   239

•   Throw a die. If 5 or 6 comes up, put X = 1 and if 1, 2, 3 or 4 comes up
    put X = 0. Then X ∼ B( 13 ).
•   Perform a test on a piece of machinery (e.g., test whether a motor is
    working). Put X = 1 if the test is successful (the motor works) and X = 0
    if not. Then X ∼ B(p), where p is the probability that the motor works.



A.2 Bernoulli Trials

We say that a sequence of random variables

                            X1 , X2 , X3 , . . . Xn , . . .

is a sequence of Bernoulli trials if these random variables are independent
and all the terms are Bernoulli random variables with the same parameter.
That is, for some 0 < p < 1

                                   Xn ∼ B(p)

for all n.

Example A.3. (a) Consider a sequence of coin tossings. Put Xn = 1 if H came
up on the nth toss, and Xn = 0 if T came up.
(b) Consider a class of identical (similar, at least) students. They all write
examinations independently (no copying). Set Xn = 1 if the nth student
passes, and Xn = 0 if the nth student fails.



A.3 Binomial Distribution

How to Count
Before discussing repeated Bernoulli trials, we shall discuss binomial coef-
ﬁcients. Combinatorial probabilities are related to the number of possible
outcomes of a random experiment.
Suppose there are 2 ways of driving from A to B, and 3 ways of driving from
B to C. The number of ways of driving from A to C via B is then 6.
This is a special case of the result that if there are p ways of performing
operation (1) and q ways of performing operation (2), and the trials are inde-
pendent, then there are pq ways of performing operation (1) followed by (2).
This is an example of the multiplication principle.
240     A The Binomial Distribution

Suppose now we have k boxes labelled with the numbers 1, 2, . . . , k and n ≥ k
distinct balls labelled 1, 2, . . . , n. In how may ways can we put k of the n balls
into the k distinct boxes?
Consider box 1. We have n labelled balls, so box 1 can be ﬁlled in n ways.
Consider then box 2. Having ﬁlled box 1, there are now (n−1) balls remaining,
so box 2 can be ﬁlled in (n − 1) ways. Therefore, box 1 and box 2 can be ﬁlled
in n(n − 1) ways.
There will be (n − 2) remaining balls to ﬁll box 3 giving n(n − 1)(n − 2) ways
to ﬁll the ﬁrst 3 boxes. Continuing, there are n(n − 1)(n − 2) . . . (n − k + 1)
ways to ﬁll the k boxes.
Recall for any positive integer n that n! = n(n − 1) · · · 3 · 2 · 1. Also, by
convention 0! = 1.
Therefore, the number of ways of selecting k balls from n balls, when the
order of selection is important, (because the boxes in which the balls are
placed are numbered), is

                                                             n!
                      n(n − 1) · · · (n − k + 1) =                 .
                                                          (n − k)!

We wish to determine the number of ways of selecting k balls from n balls
when the order of selection is not important. Write Ckn (read: “n choose
k”), for this number.
Now the solution to the problem of ﬁlling k numbered boxes from the n
numbered balls could be obtained by the two following operations:

 1. First choose any k balls from the n.
 2. Then ﬁll the k labelled boxes with the k chosen balls.

Step 1. can be done in Ckn ways (the number we wish to ﬁnd). Step 2. can be
done in k! ways. Therefore, step 1. followed by step 2. can be done in Ckn · k!
                                                      n!
ways. However, this must equal our ﬁrst answer of (n−k)!  . Therefore,

                                              n!
                                 Ckn =               .
                                          k!(n − k)!

Sums of Bernoulli Random Variables
Let

                              X1 , X2 , X3 , . . . Xn , . . .

be a sequence of Bernoulli trials with Xn ∼ B(p) for each n. Put
                                                      A.3 Binomial Distribution    241

                          Sn = X 1 + X 2 + X 3 + . . . + X n .
Then the value of Sn is the number of outcomes of 1 in the ﬁrst n trials. It
is clear that Sn could take any of the values 0, 1, 2, . . . , n, depending on how
many successes there are. We are interested in the quantity

                                     P r [Sn = j] ,
the probability that we have j successes in n trials. In fact

                           P r [Sn = j] = Cjn pj (1 − p)n−j                       (A.3)
as there are

                           n!       n(n − 1)(n − 2) . . . (n − j + 1)
               Cjn =              =
                       j!(n − j)!                 j!
ways of selecting j successes from n, and each way occurs with probability
pj (1 − p)n−j . We assumed that the trials are independent, and so we can
multiply probabilities.
A random variable Z that takes the values 0, 1, 2, . . . , n with probabilities
given by

                           P r [Z = j] = Cjn pj (1 − p)n−j
is said to be a binomial random variable with parameters n and p, and we
shall write Z ∼ B(n, p). So Sn ∼ B(n, p). Many writers also use the notation

                            b(k; n, p) ≡ Cjn pj (1 − p)n−j ,
where the left is shorthand for the right (there are no subscripts, superscripts—
8 characters versus 13).
We now calculate means and variances.


                       E[Sn ] = E[X1 ] + E[X2 ] + . . . + E[Xn ]
                             = p + p + ··· + p
                             = np

and


               Var[Sn ] = Var[X1 ] + Var[X2 ] + . . . + Var[Xn ]
                           = p(1 − p) + p(1 − p) + . . . + p(1 − p)
                           = np(1 − p)
242    A The Binomial Distribution

Example A.4. Here is an interesting example of how the binomial distribution
can be used. It is an electricity supply problem. Suppose that there are n =
10 workers who wish to use electrical power intermittently. We are interested in
estimating the total load to be expected. For a coarse approximation, imagine
that at any given time each worker has a probability p of requiring one unit
of power. If they work independently, the probability of exactly k workers
requiring (a unit amount of) power should be b(k; n, p) with n = 10. If, on
the average, a worker uses (a unit amount of) power 12 minutes per hour, we
should put p = 0.2 = ( 1260 . The probability of seven or more workers requiring
(a unit amount of) power at the same time is then

       b(7; 10, 0.2) + b(8; 10, 0.2) + . . . + b(10; 10, 0.2) = 0.0008643584.

In other words, if the supply is adjusted to six power units (available at any
time), an overload has the probability of 0.00086 . . . meaning that it should
be expected for about one minute in 1157 (1/1157 = 0.000864304), that is,
for about one minute in 24 hours (24 × 60 = 1440 minutes).

This example showed an interest in

                                   10
                                        b(j; 10, 0.2),
                                  j=7

or in general

                           n
                                b(j; n, p) = P r [Sn ≥ a] .                     (A.4)
                          j=a

This is an expression deﬁning the complementary binomial distribution
function, and we write the right hand side of (A.4) as

                                     Φ (a; n, p) .

It is sometimes useful to allow noninteger values of a in (A.4). For example,
note that for a = 5.7, P r[Sn ≥ 5.7] = P r[Sn ≥ 6]. Hence

                            Φ (5.7; n, p) = Φ (6; n, p)

because j ≥ 5.7 is the same as j ≥ 6. If a ≥ 0 is not an integer, the sum in
(A.4) is taken from 1 + a, 1 plus the integer part of a (the ﬂoor function of
a). We can write for any a

                        P r [Sn > a] = Φ (1 + a; n, p) .                      (A.5)
                                       A.4 Central Limit Theorem (CLT)        243

For example, if a = 5.7 then j > 5.7 iﬀ j ≥ 6 = 5.7 + 1 = 5 + 1. If a is not
an integer

                P r [Sn > a] = P r [Sn ≥ a] = Φ (1 + a; n, p) .

However, if a is an integer, then

                    P r [Sn ≥ a] = P r [Sn > a] + b(a; n, p).

This means that there is a jump in the function

                                 a → Φ (a; n, p)

at each integer. Also, if a is not an integer,


                          P r [Sn < a] = P r [Sn ≤ a]
                                           [a]
                                       =         b(j; n, p)
                                           j=0
                                       = 1 − Φ(a; n, p)
                                       = Ψ (a; n, p).

Ψ (a; n, p) is called the binomial distribution function with parameters n
and p.



A.4 Central Limit Theorem (CLT)

Let X1 , X2 , . . . , Xn , . . . be a sequence of independent but identically dis-
tributed random variables. We focus on the case Xn ∼ B(p) for each n ≥ 1.
                                                 2
Suppose that E[Xn ] = µ and Var[X        n ] = σ for each n ≥ 1. If Xn ∼ B(p) for
each n ≥ 1, then µ = p and σ = p(1 − p), as we saw in Section A.1. Let

                           Sn = X 1 + X 2 + . . . + X n

and

                                     Sn − E[Sn ]
                               Sn∗ =            .
                                       Var[Sn ]

Then E[Sn∗ ] = 0 and Var[Sn∗ ] = 1. Write
244    A The Binomial Distribution


                              Gn (x) = P r [Sn∗ ≤ x] ,

which is the same as
                                                   
                   Gn (x) = P r Sn ≤ np + x np(1 − p)

in our application. As usual, write
                                            x
                                  1                 1   2
                         N (x) = √               e− 2 u du.
                                   2π       −∞

This is the normal distribution function. The values of N (x) are tabulated
in many books (statistics texts, ﬁnance texts, and so on), but are given with
greatest accuracy in books like Abramowitz and Stegun, [1] which give values
to 15 decimal places. There are also analytic approximations like the following,
which can be incorporated in computer programs:
                                                       
                         1 − n(x) a1 k + a2 k 2 + a3 k 3 if x ≥ 0
              N (x) ≈
                         1 − N (−x)                       if x < 0.

Here

                                   1
                         k=            ,    α = 0.33267
                                1 + αx

            a1 = 0.4361836,     a2 = −0.1201676,            a3 = 0.9372980

                                             
                                 1        1 2
                         n(x) = √    exp − x .
                                  2π      2

This approximation is accurate to about 4 decimal places, (with a maximum
error bound of 0.0002). For more accurate expressions (e.g., to 7 decimal
places), see Abramowitz and Stegun’s book.
The central limit theorem (CLT ) says that as n → ∞

                                 Gn (x) → N (x)

for each real x. Of course this means that
                                           
                    P r Sn ≤ np + x np(1 − p) ≈ N (x)

or
                                                       A.5 Berry-Esséen Theorem    245

                                                                 
                                                      x − np
                     P r [Sn ≤ x] ≈ N                                .            (A.6)
                                                      np(1 − p)

In fact the approximation
                                                                 
                                                  x + 1 − np
                         P r [Sn ≤ x] ≈ N          2                              (A.7)
                                                    np(1 − p)

is quite accurate when min[np, n(1 − p)] > 10 (if p = 0.2, this means n > 50).

Example A.5. Let us calculate

                                              6
                          Ψ (6; 10, 0.2) =         b(j; 10, 0.2)
                                             j=0

using (A.6). Now

                                                
                                 6 − 10 × 0.2
         Ψ (6; 10, 0.2) ≈ N     √
                                  10 × 0.2 × 0.8
                                     
                                 4
                         =N √
                                  1.6
                         = N (3.16227766)
                                       0.01227766
                         ≈ N (3.15) +              [N (3.20) − N (3.15)]
                                          0.05
                         = 0.9991836477 + 0.2455532 × 0.000129215
                         = 0.999215376.

So P r [S10 ≥ 7] ≈ 0.00078462, which agrees reasonably well with 0.00086435.
The choice n = 10 is a little small. Traditional practice says we need n to be
about 30 or more.



A.5 Berry-Esséen Theorem

This theorem says something about the diﬀerence between Gn (x) and N (x)
deﬁned above. In fact Berry (1941) and Esséen (1945) (see Chung [15])
showed that

                                                       E(|X1 − µ|3 )
                   sup |Gn (x) − N (x)| ≤ C                 √                      (A.8)
                     x                                    σ3 n
246      A The Binomial Distribution

for all n. This means that the diﬀerence magnitude |Gn (x) − N (x)| is less
than the right hand side in (A.8) for all x. In fact Berry and Esséen gave
C = 334 , but a more precise argument gives C ≈ 0.7975, and it can be shown
                           1
than in general C ≥ (2π)− 2 .
                                                       
For the case where Xn ∼ B(p) for all n, µ = p and σ = p(1 − p), and


      E(|X1 − µ|3) ) = p|1 − p|3 + (1 − p)|0 − p|3 = p(1 − p)[p2 + (1 − p)2 ].

Therefore,

                          E(|X1 − µ|3) )   p2 + (1 − p)2
                                         =                                  (A.9)
                              σ3              p(1 − p)

so that for all x

                                               p2 + (1 − p)2 1
                    |P r [Sn∗ ≤ x] − N (x)| ≤ C            √ .            (A.10)
                                                  p(1 − p)    n

We should note that (A.10) will be useful for studying n → ∞, but it is not
a good error estimate. With p = 0.2, n = 10, C = 0.7975 the right hand side
of (A.10) is about 0.43, but we know the error is much less.



A.6 Complementary Binomials and Normals

Let us suppose that x is not an integer (as will be the case in practice). Then


                     Φ(x; n, p) = 1 − Ψ (x; n, p)
                                = 1 − P r [Sn ≤ x]
                                                                
                                                     x − np
                               = 1 − P r Sn∗ ≤                      ;
                                                     np(1 − p)

and so

                                                  
                                       np − x     
                                                  
                   Φ(x; n, p) − N (             )
                                       np(1 − p) 
                                                           
                                                np − x     
                                                           
                 = 1 − Ψ (x; n, p) − [1 − N (           )]
                                                np(1 − p) 
                             A.7 CRR and the Black and Scholes Formula      247
                                                 
                                       np − x    
                                                 
                 = Ψ (x; n, p) − N (           )
                                       np(1 − p) 
                                                    
                                         np − x     
                                                    
                 = P r [Sn ≤ x] − N (             )
                                         np(1 − p) 
                                                              
                                  x − np              np − x    
                          ∗                                     
                 = P r Sn ≤                 − N(             )
                                 np(1 − p)            np(1 − p) 
                   p2 + (1 − p)2 1
                 ≤C            √ .
                      p(1 − p)    n

That is,
                                        
                              np − x        p2 + (1 − p)2 1
                                        
           Φ(x; n, p) − N (           ) ≤ C            √ .           (A.11)
                              np(1 − p)        p(1 − p)    n

It is this estimate that we can use to show that the CRR model price for
a call option (say) converges to the corresponding Black and Scholes pricing
formula.


A.7 CRR and the Black and Scholes Formula

By the Berry-Esséen Theorem,
                                         
                              Np − a         p2 + (1 − p)2 1
                                         
           Φ(a; N, p) − N (            ) ≤ C            √            (A.12)
                              N p(1 − p)        p(1 − p)    N

and p also depends on N as
                                             √
                            exp(r∆t) − exp(−σ ∆t)
                       p=        √             √
                          exp(+σ ∆t) − exp(−σ ∆t)
           T
where ∆t = N . Using Taylor approximations (and order notation),


                             r − 12 σ 2 √     1    √
                        π=                ∆t + + o( ∆t)                  (A.13)
                                2σ            2
                                  1 2√             √
                             r +    σ         1
                        π =      2
                                          ∆t + + o( ∆t)                  (A.14)
                                2σ            2
for large N , so π, π  → 0.5 as N → ∞. Thus, the right hand side of (A.12)
tends to zero as N → ∞. In the CRR application for pricing European calls
we use
248    A The Binomial Distribution


                                           √
              S ) − N ln(d)
          ln( K               ln( K
                                  S ) + N σ ∆t   ln( K )√    N
       a≈           u       =          √       =    √S    N + . (A.15)
                ln( d )             2σ ∆t        2σ T        2

Then

                                         1    2   √ √   ln( K ) √   
                                      r− 2 σ
             Nπ − a
                                  N
                                  2 +   2σ          T N − 2σ√ST N + N2
                         ≈                         √ &1 1
             N π(1 − π)                              N 2·2
                            r − 12 σ 2 √     ln( S )
                          =              T + √K
                                 σ            σ T
                                           1 2
                                                
                            ln( K ) + r − 2 σ T
                                 S
                          =             √
                                      σ T
                          = d2 .

Therefore,

                                  φ(a; N, π) → N (d2 )

as N → ∞. In precisely the same way

                                  φ(a; N, π  ) → N (d1 )

as N → ∞, where
                                                   
                                    S
                                ln( K ) + r + 12 σ 2 T
                           d1 =            √           .
                                         σ T
In conclusion


                 C(0, 0) = SΦ(a; N, π  ) − KR−N Φ(a; N, π)
                           → SN (d1 ) − Ke−rT N (d2 )                      (A.16)

as N → ∞. Consequently,

                      C(0) = SN (d1 ) − Ke−rT N (d2 ),                     (A.17)

which is the Black and Scholes formula.
B

An Application of Linear Programming




One of the advantages of considering binomial models is that they provide
a complete model for assets. This means that all payoﬀs can be hedged and
priced in the way we have described. One could ask: Why not consider trino-
mial models? In this appendix we show that we can no longer obtain unique
prices for contingent claims, but we can obtain a bid-ask spread. Prices
falling within this spread are consistent with no-arbitrage, but prices falling
outside this spread lead to arbitrage opportunities. In this situation we can
no longer talk about replication, but we can still obtain what are called su-
perreplication and subreplication. We shall use linear programming to
study these situations.
Let us consider a market in which we have a stock and a bank account at
times t = 0 and t = 1. At time t = 1 there are now three, (or more!), states
of the world, which we label ↑, → and ↓. We will write S(0) = S and we have
the prices S(1, ↑) = uS, S(1, →) = mS, S(1, ↓) = dS at time t = 1. We will
also assume that $1 (or one unit of local currency) will be worth $R in all
states at t = 1. That is, it is a riskless asset.
Consider a (European) call option written on this stock with strike price K
expiring at t = 1. We seek its present value C(0) given its value at t = 1,
which is (in terms of the stock price):

                                               +
                            C(1) = [S(1) − K] ,

which is really three equations


                                                   +
                          C(1, ↑) = [S(1, ↑) − K]
                                                  +
                         C(1, →) = [S(1, →) − K]
                                                 +
                          C(1, ↓) = [S(1, ↓) − K] .
250    B An Application of Linear Programming

If we try our replicating portfolio method we would seek numbers x, y so that

                                                               +
                       x · S(1, ↑) + y · R = [S(1, ↑) − K]
                                                               +
                      x · S(1, →) + y · R = [S(1, →) − K]
                                                               +
                       x · S(1, ↓) + y · R = [S(1, ↓) − K] .

This is the same as

                                                       +
                         x · u · S + y · R = [u · S − K]
                                                           +
                        x · m · S + y · R = [m · S − K]
                                                       +
                         x · d · S + y · R = [d · S − K] .

Once x and y have been obtained (if they exist), then

                              C(0) = x · S(0) + y.
However, a system of three equations in two unknowns does not always have a
solution. In fact, we can give an example to show this. Suppose that S(0) = 80
and we have the prices S(1, ↑) = 85, S(1, →) = 80, S(1, ↓) = 75, R = 1.01,
and K = 78. The three equations are now


                              85 · x + 1.01 · y = 7
                              80 · x + 1.01 · y = 2
                              75 · x + 1.01 · y = 0.

It is easy to see that the unique solution of the ﬁrst two equations does not
solve the third.


B.1 Incomplete Markets

In the above example we see that the risky asset (the stock) and the riskless
asset (cash, bank account) do not span all possible assets. We say that our
market model of the two assets is therefore incomplete. Binomial models are
always complete. This explains their popularity. Assets that can be replicated
are called attainable claims. In incomplete markets, the attainable claims
are priced in the usual way and have a unique price. For nonattainable claims
(such as the call option in the example above) there is not a unique price but a
range of (non arbitrage) prices. This explains in part the existence of bid-ask
spreads for prices of many assets. Only theoretical models that approximate
reality are ever complete, so bid-ask spreads are a fact of life. We consider
two ways of dealing with incomplete markets.
                                    B.2 Solutions to Incomplete Markets    251

B.2 Solutions to Incomplete Markets

There are various approaches to incomplete markets. Here are two of them.
(a) Complete the Market
Add some extra tradeable assets into the market model for which you know
the present value. The extra tradeable assets must be such that no arbitrage
occurs. An example of this could be to add in some options on the underlying
stock and to use its market value. Suppose you knew that the price of a K = 80
call was $2, then we could use this as a third asset and complete the market.
We can now price the K = 78 call as follows. Consider a portfolio with x
stock, $y in cash and z of the K = 80 calls. We then solve (the replicating
equations)


                         85 · x + 1.01 · y + 5 · z = 7
                         80 · x + 1.01 · y + 0 · z = 2
                         75 · x + 1.01 · y + 0 · z = 0.

Solving gives x = 0.4, y = −29.7029703 . . ., z = 0.6. The K = 78 call value is
then the value at t = 0 of this portfolio:

                80 · x + 1 · y + 2 · z = $3.4970297 . . . = $3.50

to the nearest cent.
(b) Superreplication
Let us look at matters from the call writer’s perspective. At time t = 1 he has
a liability of (7, 2, 0), depending on which of the three states occurs. So she
must consider a portfolio that covers her liabilities, viz.,


                             85 · x + 1.01 · y ≥ 7
                             80 · x + 1.01 · y ≥ 2                        (B.1)
                             75 · x + 1.01 · y ≥ 0,

for which the writer’s cost at t = 0 will be 80 · x + y. The writer will choose
x, y to solve (B.1) and to minimize 80 · x + y, else another person could write
the same call at a cheaper price. Therefore, consider the linear programming
problem:


                             min [80 · x + y]
                              x,y
252     B An Application of Linear Programming

such that

                               85 · x + y · 1.01 ≥ 7
                               80 · x + y · 1.01 ≥ 2                           (B.2)
                               75 · x + y · 1.01 ≥ 0.

Call the minimum C ∗ , and suppose this minimum is attained at x∗ , y ∗ .
We now ﬁnd x∗ , y∗ and C∗ .
Let us note that the linear programme (B.2) is feasible. We can take x = 1
and y = 0. This choice satisﬁes the constraints (B.1).
The optimal solution can be found graphically (in this case) or by a num-
ber of computer packages which have optimization routines. In MS-EXCEL,
SOLVER can be used. Thus


                       x∗ = 0.7
                       y ∗ = −51.9802
                       C ∗ = 0.7 × 80 + −51.9802 = $4.02.

C∗ and non arbitrage.
If this call were found to be selling in the market at a price C > C ∗ , then
there would be an arbitrage opportunity. This is because C > C ∗ is the same
as

                               C − x∗ · S − y ∗ > 0.                           (B.3)

At t = 0 short sell the call, buy x∗ stock, borrow −y ∗ cash.
At t = 1 (the expiry date) cash settle the call, sell the stock, pay back the
loan. This gives a net position

                   −(S(1) − K)+ + x∗ · S(1) + 1.01 · y ∗ ≥ 0.                  (B.4)

(recall y ∗ < 0). The inequality (B.4) follows because (x∗ , y ∗ ) satisﬁes the three
inequalities in (B.2). Therefore, there is an arbitrage opportunity. There is a
positive proﬁt at t = 0 and no unfunded liabilities at t = 1.

Remark B.1. The writer (seller) of a call is interested in the superreplication
problem. He needs to satisfy (B.1) in the cheapest way, so that no other writer
of calls can undercut this price. We obtain C ∗ , the asking price—the smallest
price at which the writer can sell.
                       B.3 The Duality Theorem of Linear Programming         253

(c) Subreplication
We can also look at the buyer’s perspective. Let x∗ , y∗ and C∗ solve the linear
programming problem:


                             max [80 · x + y]
                              x,y
                              85 · x + y · 1.01 ≤ 7
                              80 · x + y · 1.01 ≤ 2                        (B.5)
                              75 · x + y · 1.01 ≤ 0.

A buyer will not wish to pay more than C∗ for the call because at such a price
one of the constraints in (B.5) would be violated, and it would be better to
buy the portfolio than to buy the call.
If the price of a call is C < C∗ , we can also generate an arbitrage starting
with

                             80 · x∗ + y∗ − C > 0

and argue as above. The details are left to the reader.

Remark B.2. The bid-ask spread has been calculated. It is [C∗ , C ∗ ]. Bid-ask
spreads can also occur in binomial models if we put constraints on the possible
values of a hedge ratio (for example) or if we put restrictions on the dates when
we can adjust the hedge, (as we described in Section 5. It is easy to adapt the
ideas of this appendix to study these situations.
If we do not have a complete market, no arbitrage conditions put restric-
tions on the possible range of prices (the bid-ask spread). Other conditions
or assumptions can be used to narrow this spread. One such condition is the
assumption that “good deals” are not possible, or at least such deals disap-
pear very quickly. This conditions puts restrictions on how large the ratio of
the expected excess return over the volatility of a return can be. (The excess
asset return is the diﬀerence between an asset return and the risk-free interest
rate.)



B.3 The Duality Theorem of Linear Programming

Here is a statement of the Kuhn-Tucker theorem:

Theorem B.3 (The Kuhn-Tucker Theorem). Let x∗ ∈ Rn be a solution
of the optimisation problem:
254     B An Application of Linear Programming



                                          max f (x)
                                              x
                    subject to            gi (x) ≤ 0,          i = 1, 2, . . . , m.

Here f, gi (i = 1, 2, . . .) are suﬃciently smooth functions.
Then there exists λ∗ ∈ Rm so that (x∗ , λ∗ ) satisfy:
                  )m
    ∂f
 1. ∂xj
        (x∗ ) +          ∗ ∂gi   ∗
                    i=1 λi ∂xj (x ) = 0

 2. λ∗i ≤ 0, i = 1, . . . , m
 3. gi (x∗ ) ≤ 0, i = 1, . . . , m
 4. λ∗i gi (x∗ ) = 0, i = 1, . . . , m.

Assuming Theorem B.3 is true, we now give a proof of the following result.

Corollary B.4. Suppose f is concave and the gi are convex, i = 1, 2, . . . , m.
Then if (x∗ , λ∗ ) satisﬁes conditions 1.–4. of Theorem B.3, then x∗ solves the
maximization problem of f (x) subject to the given conditions.

Proof. Let x satisfy gi (x) ≤ 0, i = 1, . . . , m. Then


                                          n
                                                             ∂f ∗
                  f (x) ≤ f (x∗ ) +           (xj − x∗j )        (x )
                                      j=1
                                                             ∂xj

because f is concave. Then the right expression is

                                          n
                                                             m                   
                                ∗                                      ∂gi ∗
                        = f (x ) −            (xj − x∗j )          λ∗i     (x )
                                      j=1                      i=1
                                                                       ∂xj
                                                  ⎛                               ⎞
                                          m             n
                                                                          ∂gi ∗ ⎠
                        = f (x∗ ) −           λ∗i ⎝         (xj − x∗j )       (x ) .
                                      i=1             j=1
                                                                          ∂xj


However, as each gi is convex,

                                                  n
                                                                      ∂gi ∗
                        gi (x) ≥ gi (x∗ ) +             (xj − x∗j )       (x ).
                                                  j=1
                                                                      ∂xj

Then −λ∗i ≥ 0 gives
                          B.3 The Duality Theorem of Linear Programming              255
                                              n
                    f (x) ≤ f (x∗ ) −              λ∗i [gi (x) − gi (x∗ )]
                                           i=1
                                            n
                          = f (x∗ ) −              λ∗i gi (x)      by (4)
                                           i=1
                          ≤ f (x∗ )        by (2) and gi (x) ≤ 0               ∀i.

Therefore x∗ is optimal.                                                              2

Application 1 Suppose b ∈ Rn and A is an m × n matrix. We characterize
the solution of the linear programming problem:


                                min bT x
                                  x
                             x ∈ Rn , Ax ≥ c,                c ∈ Rm .

Let us assume that this linear programming (LP) problem has a solution x∗ .
For this it suﬃces to show feasibility (there is an x ∈ Rn with Ax ≥ c) and
boundedness (there is an m > −∞ such that for all x with Ax ≥ c, bT x ≥ m).
Applying the Kuhn-Tucker theorem to


                                      n
                       f (x) = −           bj xj
                                    j=1
                                          n
                       gi (x) = ci −              Aij xj ,      i = 1, . . . , m
                                          j=1


we have that there is a λ∗ ∈ Rm so that:
            )m     ∗
1. −bj +      i=1 λi [−Aij ] = 0,
2. λ∗ ≤ 0, i = 1, . . . , m,
3. Ax∗ ≥ c,
            )n
4. λ∗i [ci − j=1 Aij x∗j ] = 0, i = 1, . . . , m.

Let y ∗ = −λ∗ . Then y ∗ ∈ Rm and

1. AT y∗ = b,
2. y∗ ≥ 0,
3. Ax∗ ≥ c,
             )n
4. yi∗ [ci − j=1 Aij x∗j ] = 0, i = 1, . . . , m.
256    B An Application of Linear Programming

4. is called the complementary slackness condition.

Theorem B.5 (Duality Theorem). Consider the dual linear programme
                                     max cT y
                                        y

                             subject to     AT y = b
                                 and           y ≥ 0.


Then

 1. y∗ is a solution to the dual LP,
 2. bT x∗ = cT y∗

Proof. 2. follows from 1.-4. of Application 1, for if we sum equations 1. − 4.
over i, then

                    cT y∗ = y∗T Ax∗ = (AT y∗ )T x∗ = bT x∗ .

To prove 1., let Ay = b, y ≥ 0. Then


                         cT (y∗ − y) = cT y∗ − cT y
                                    ≥ cT y∗ − [Ax∗ ]T y
                                    = cT y∗ − (x∗ )T Ay
                                    = cT y∗ − (x∗ )T b
                                    = cT y∗ − bT x∗
                                    =0        by 2.

Therefore y∗ is optimal.                                                            2

Corollary B.6. Suppose now that there exists y0                0 (that is, y0i > 0 for
all i > 0) with AT y0 = b. Then

                    cT y∗ = sup{cT y|       AT y = b, y        0}.

Proof. Clearly cT y∗ ≥ sup{cT y| AT y = b, y            0}.
Consider   such that 0 < ≤ 1. Then y = (1 − )y ∗ + y0                0 for all such .
Then

               y = (1 − )cT y∗ + cT y0 → cT y∗           as    → 0+ .
Hence, equality holds.                                                              2
                         B.4 The First Fundamental Theorem of Finance          257

Example B.7 (Superreplication). Write
                         ⎡                                    ⎤
                        R S1 (1, ω1 ) . . . . . . SN (1, ω1 )
                      ⎢ R S1 (1, ω2 ) . . . . . . SN (1, ω2 ) ⎥
                    A=⎢
                      ⎣...
                                                              ⎥
                                                              ⎦
                              ...     ... ...         ...
                        R S1 (1, ωm ) . . . . . . SN (1, ωm )
                                           ⎡ ⎤                  ⎡  ⎤
                ⎡          ⎤             H0                   1
                 c(1, ω1 )             ⎢ H1 ⎥             ⎢ S1 (0) ⎥
            c = ⎣ ... ⎦              x=⎢     ⎥
                                       ⎣ ... ⎦          b=⎢
                                                          ⎣ ... ⎦.
                                                                   ⎥
                 c(1, ωm )
                                         HN                 SN (0)

We seek x∗ ∈ RN +1 so that Ax∗ ≥ c and bT x∗ is minimal.

                    bT x∗ = sup{cT y∗ | AT y = b, y             0}.
                                                                              π
As there is no arbitrage, there is a y         0 with AT y0 = b. In fact y0 = R for
some risk-neutral probability π.
Write P for the set of risk-neutral probabilities. Then
                                         m
                                                         .
                                       1
                    bT x∗ = sup              πi c(1, ωi ) = C ∗ .
                             π∈P       R i=1

In the same way
                                           m
                                                           .
                                         1
                        C∗ = inf               πi c(1, ωi ) .
                               π∈P       R i=1



B.4 The First Fundamental Theorem of Finance

We shall work in the one time step binomial model where S(0) becomes either
S(1, ↑) or S(1, ↓) at time 1 and $1 becomes $R.

Remark B.8. This argument can be easily generalized to N + 1 assets (1 risk-
less, N risky, say), and the two states at time t = 1 replaced by K states
with little change. We would then be working in at most N + 1-dimensional
subspace of RK+1

Let                ⎧⎛                   ⎞               ⎫
                   ⎨ −H0 − H1 S(0)                      ⎬
                M = ⎝ H0 R + H1 S(1, ↑) ⎠ ; H0 , H1 ∈ R
                   ⎩                                    ⎭
                      H0 R + H1 S(1, ↓)
258   B An Application of Linear Programming

                         ⎧⎛ ⎞                       ⎫
                         ⎨ x1                       ⎬
                      K = ⎝ x2 ⎠ ; x1 , x2 , x3 ≥ 0
                         ⎩                          ⎭
                            x3

and
                     ⎧⎛ ⎞                         ⎫
                     ⎨ x1                         ⎬
                 K1 = ⎝ x2 ⎠ ∈ K; x1 + x2 + x3 = 1 .
                     ⎩                            ⎭
                        x3

Then no arbitrage is equivalent to K ∩ M = {0}. This may be represented
graphically as in Figure B.1.




                                                  K
                   K1




                        0



                                                  M




              Fig. B.1. Representation of a ﬁnite state market.




Lemma B.9. Assume K ∩ M = {0}. Let a ∈ K1 , m ∈ M so that

                a − m = inf{x − y |    x ∈ M, y ∈ K1 }

and let p = a − m. Clearly, p > 0. Then p ⊥ M.
                          B.4 The First Fundamental Theorem of Finance           259

Proof. Let x ∈ M and set

                                                 2
                       f ( ) = a − (m + x) ,         ∈ R.

Then f ( ) has a minimum at        = 0, so f  (0) = 0. That is

                                    2                             2
                 f ( ) = a − m − 2 a − m, x + 2 x .

So f  (0) = 0 implies p, x = a − m, x = 0.

                                                                                  2

Lemma B.10. p          0 (that is, all components of p are strictly positive).

Proof. Let e ∈ K1 , 0 ≤ ≤ 1, and write

                                                        2
                          g( ) =  e + (1 − )a − m .

Clearly, e + (1 − )a ∈ K1 whenever 0 ≤ ≤ 1. So g has a minimum on [0, 1]
when = 0, which implies g  (0) ≥ 0.
Now

                               2                                  2
                   g( ) = p − 2 e − a, p + 2 e − a

and g  (0) ≥ 0 implies e − a, p ≥ 0 and so


                          e, p ≥ a, p                                   (B.6)
                                 = a − m + m, p                           (B.7)
                                        2
                                   = p + m, p                           (B.8)
                                        2
                                   = p                                    (B.9)
                                   > 0 by Lemma B.9.                       (B.10)

Putting e = (1, 0, 0), (0, 1, 0), (0, 0, 1), we obtain p1 , p2 , p3 > 0. (In fact,
        2
pi ≥ p for i = 1, 2, 3).

Lemma B.11. Let π1 = Rp2       Rp3
                     p1 , π2 = p1 . Then

 1. π1 > 0, π2 > 0,
 2. π1 + π2 = 1, and
 3. RS(0) = π1 S(1, ↑) + π2 S(1, ↓).
260    B An Application of Linear Programming

Proof. p ⊥ (−1, R, R) ∈ M (with H0 = 1, H1 = 0) implies that

                                p1 = R[p2 + p1 ],

from which we claim that 2. and 3. follow. To prove 3.,

             p ⊥ (−S(0), S(1, ↑), S(1, ↓)) ∈ M,     (H0 = 1, H1 = 0),

implies that

                        p1 S(0) = p2 S(1, ↑) + p3 S(1, ↓).

This gives


                               Rp2             Rp3
                      RS(0) =       S(1, ↑) +      S(1, ↓)
                                p1              p1
                             = π1 S(1, ↑) + π2 S(1, ↓).

                                                                               2
We have shown that no arbitrage implies there exists (π1 , π2 ), called risk-
neutral probabilities, so that


                         π1 > 0, π2 > 0,
                         π1 + π2 = 1, and                                 (B.11)
                         RS(0) = π1 S(1, ↑) + π2 S(1, ↓).

The converse also holds, for (R, π1 , π2 ) ⊥ M and (R, π1 , π2 ) · y > 0 for all
y ∈ K ∼ {0} implies that K ∩ M = {0}.
This equivalence is the ﬁrst fundamental theorem of ﬁnance.

Corollary B.12. In a binomial model there is no arbitrage if and only if

                           S(1, ↓) < RS(0) < S(1, ↑).                     (B.12)

(We assume here S(1, ↓) < S(1, ↑).)

Proof. There is no arbitrage if and only if there exists (π1 , π2 ) so that Equa-
tions (B.11) holds. This is the case if and only if inequality B.12) holds. In
fact (B.11) implies
                                                 B.5 The Duality Theorem     261

               S(0)R = π1 S(1, ↑) + π2 S(1, ↓)
                       = S(1, ↑) + π2 (S(1, ↓) − S(1, ↑) < S(1, ↑)

and


              S(0)R = π1 (S(1, ↑) − S(1, ↓)) + S(1, ↓) > S(1, ↓) .

Conversely, (B.12) implies


                                  S(0)R − S(1, ↓)
                             π1 =                   >0
                                  S(1, ↑) − S(1, ↓)
                                  S(1, ↑) − S(0)R
                         1 − π1 =                   >0
                                  S(1, ↑) − S(1, ↓)

with π1 , π2 satisfying (B.11).



B.5 The Duality Theorem

Super- and Subreplication provide the motivation for using the duality
theory of linear programming. We shall now illustrate this in a three-state
model.
Recall
                  ⎧                                           ⎫
                  ⎨               H0 R + H1 S(1, ↑) ≥ C(1, ↑) ⎬
                                 
      C ∗ = inf    H0 + H1 S(0)  H0 R + H1 S(1, →) ≥ C(1, →)             (B.13)
           H0 ,H1 ⎩               H0 R + H1 S(1, ↓) ≥ C(1, ↓) ⎭

and
                    ⎧                                           ⎫
                    ⎨               H0 R + H1 S(1, ↑) ≤ C(1, ↑) ⎬
                                   
         C∗ = inf    H0 + H1 S(0)  H0 R + H1 S(1, →) ≤ C(1, →) .
             H0 ,H1 ⎩               H0 R + H1 S(1, ↓) ≤ C(1, ↓) ⎭

Remark B.13. The linear program in model (B.13) is feasible for we can choose
H1 = 0 and H0 R ≥ max{C(1, ↑), C(1, →), C(1, ↓)}. If the market does not
have a riskless asset, but one with positive value in each state at t = 1, the
LP is still feasible.
262     B An Application of Linear Programming

Remark B.14. The assumption of no arbitrage implies H0 +H1 S(0) is bounded
below. In fact no arbitrage implies there exists (π1 , π2 , π3 ) 0 with π1 + π2 +
π3 = 1 and

                  π1 S(1, ↑) + π2 S(1, →) + π3 S(1, ↓) = RS(0).

Therefore, multiplying the equations by πi , i = 1, 2, 3 and summing gives


            H0 R + H1 RS(0) ≥ π1 C(1, ↑) + π2 C(1, →) + π3 C(1, ↓)
                            ≥ min [C(1, ↑), C(1, →), C(1, ↓)] ,

independently of (π1 , π2 , π3 ). Hence, the claim follows.

Remark B.15. Remarks B.13 and B.14 imply that C ∗ (and C∗ ) exist.

Write
                         ⎡          ⎤                   ⎡      ⎤
                          R S(1, ↑)                    C(1, ↑)
                    A = ⎣ R S(1, →) ⎦            c = ⎣ C(1, →) ⎦
                          R S(1, ↓)                    C(1, ↓)

and
                                                          
                                   H0                    1
                          x=                   b=              .
                                   H1                   S(0)

Then

                                            2 T         3
                          C ∗ = inf          b x |Ax ≥ c .                (B.14)
                                   H0 ,H1


Remark B.16. It should be clear that we could discuss this analysis for N + 1
assets (1 riskless, N risky assets) and for K states at t = 1.
In that case, A will be a K × (N + 1) matrix, etc. . .

Let P be the set of all risk-neutral probabilities. Then π ∈ P if and only if
π   0 and AT π = Rb. If there is no arbitrage, then P =  ∅.
Duality
An introduction to linear programming can be obtained from Chvátal’s
book [16]. The dual linear programming problem for
                                                B.5 The Duality Theorem   263

                                      inf x bT x
                           (P )
                                             Ax ≥ c
is                                 ⎧
                                   ⎨ maxy cT y
                          (D)            AT y = b
                                   ⎩
                                             y  0.

Since (P ) is feasible, (D) is bounded; since (P ) is bounded, (D) is feasible
and so (D) has an optimal solution y∗ . Further

                                  bT x∗ = cT y∗ ,

where x∗ is an optimal solution of (P ). This follows from the Kuhn-Tucker
theorem and is referred to as the Duality theorem of linear programming.
By no arbitrage, there exists y0        0 with AT y0 = b, for we can choose
     π
y0 = R with π ∈ P.

Remark B.17. In most of the examples that we have discussed we made one
of the assets riskless. This ensures that the linear programme in B.13 are
feasible.

Example B.18. Consider now an example of a market determined by two risky
assets S1 and S2 with data


           S1 (0) = 0, S1 (1, ↑) = 1, S1 (1, →) = −1, S1 (1, ↓) = 0
           S2 (0) = 1, S2 (1, ↑) = 1, S1 2(1, →) = −1, S2 (1, ↓) = 3

A claim C is attainable in this market if and only if C(1, ↑) + C(1, →) = 0.
So C deﬁned by

                   C(1, ↑) = 1, C(1, →) = 1, C(1, ↓) = 0

is not attainable. Furthermore it is easy to show that there is no H1 and H2 ,
so that (three inequalities)

                        H1 S1 (1) + H2 S2 (1) ≥ C(1) .

This means that C cannot be had at any price. One can see that the
existence of the riskless asset (cash) guarantees the old adage “everything
has a price”.
264    B An Application of Linear Programming

B.6 The Second Fundamental Theorem of Finance

This theorem says that in a market with no arbitrage, the market is complete
if and only if P contains just one element.
In the example above (which can be easily generalized to N + 1 assets and
K states, say), let us write that if π 1 and π 2 ∈ P, then there is a claim C
so that C ∗ = C∗ (so the market is incomplete). In fact, if πj1 < πj2 , C(1, j) =
1, C(1, i) = 0, i = j, then

                                                           .
                                           1
                         C∗ = inf                  πi C(1, i)
                                 π∈P       R   i
                              1 1
                             ≤  π
                              R j
                              1
                             < πj2
                              R                            .
                                           1
                             ≤ sup                 πi C(1, i)
                                 π∈P       R   i
                             = C ∗.

Suppose that P is a singleton, then C ∗ = C∗ for every claim C. Suppose C is
not attainable. Without loss of generality we may assume H∗ is the optimal
solution for C ∗ , i.e.,


                  C ∗ = bT H∗ ,
                 AH∗ ≥ c and (AH∗ )j > C(1, j) for some j.

Then if π ∈ P,


                              π T AH∗ > π T C.

Therefore

                          (AT π)T H∗ > CT π

so

                              RbT H∗ > CT π

and
                       B.6 The Second Fundamental Theorem of Finance          265

                                         1 T
                               bT H∗ >     C π ≥ C∗
                                         R
or

                                   C ∗ > C∗ ,

a contradiction.
Attainable Claims
A claim C is attainable if and only if C∗ = C ∗ which occurs if and only if cT π
is independent of π for π ∈ P (see Pliska, [62]).
The following example shows how one can identify attainable claims.
Suppose

                        S(1, ↑) = 120      C(1, ↑) = C1


                       S(1, →) = 110       C(1, →) = C2


                         S(1, ↓) = 90      C(1, ↓) = C3


                           S(0) = 100       R = 1.05

(π1 , π2 , π3 ) is a risk-neutral probability if πi > 0, π1 + π2 + π3 = 1 and
12π1 + 11π2 + 9π3 = 10.5. These can be parameterized as
          ⎧                  ⎛ ⎞ ⎛         ⎞     ⎛ 1⎞          ⎫
          ⎨                                       −2
                                                              1⎬
                               π1       2
                                                       1
       P = (π1 , π2 , π3 ) | ⎝ π2 ⎠ = ⎝ −3 ⎠ t + ⎝ 23 ⎠ < t <    .
          ⎩                                            4      2⎭
                               π3       1          0

C is attainable if and only if C1 π1 + C2 π2 + C3 π3 is independent of t. That is,

                                             1    3
                      (2C1 − 3C2 + C3 )t + (− C1 + C2 )
                                             2    2
is independent of t, so we require 2C1 − 3C2 + C3 = 0.
If 2C1 − 3C2 + C3 > 0, then

                                                         
                     1 1                        1    3
               C∗ =       (2C1 − 3C2 + C3 ) + (− C1 + C2 )
                     R 2                        2    2
                                      
                      1     1
                   =          C1 + 2C3
                     1.05 2
266    B An Application of Linear Programming
                                                        
                    1 1                        1    3
               C∗ =      (2C1 − 3C2 + C3 ) + (− C1 + C2 )
                    R 4                        2    2
                                   
                     1     3     1
                  =          C2 + C3 .
                    1.05 4       2

This example is typical of how C ∗ and C∗ can be computed.

Remark B.19. The existence of the riskless asset is tacitly assumed. Recall
Example B.18. P consists of all (p1 , p2 , p3 ) 0 so that


                RS1 (0) = p1 S1 (1, ↑) + p2 S1 (1, →) + p3 S1 (1, ↓)
                RS2 (0) = p1 S2 (1, ↑) + p2 S2 (1, →) + p3 S2 (1, ↓)
                       1 = p1 + p2 + p3 .

This system has a unique solution: p1 = p2 = p3 = 13 and R = 1, but
the market is incomplete as we have seen. The reader is also referred to [59,
chapter 5], for further discussion.



B.7 Transaction Costs

Example B.20. Boyle and Tan [9] discuss a three-time example of option hedg-
ing with proportional transaction costs. In our notation we have t = 0, 1, 2.
If we wish to calculate the ask price for a claim that pays C(2, j) at time
t = 2 in state j, we should solve the following programming problem: Find
the minimum value of

                            H0 (0, 0) + H1 (0, 0)S(0, 0)

subject to constraints

      H0 (0, 0)R + H1 (0, 0)S(1, j) ≥ H0 (1, j) + H1 (1, j)S(1, j) + T (1, j)


                 H0 (1, j)R + H1 (1, j)S(2, j + 1) ≥ C(2, j + 1)


                      H0 (1, j)R + H1 (1, j)S(2, j) ≥ C(2, j)

for j = 0, 1, where

                      T (1, j) = k|H1 (1, j) − H1 (0, 0)|S(1, j)
                                                   B.7 Transaction Costs      267

are proportional transaction costs, and k ≥ 0 indicates the level of transaction
costs.
There are 6 constraint equations here. The diﬃculty is how to deal with
the |H1 (1, j) − H1 (0, 0)| term. This nonlinear programming problem can be
converted into a mixed integer linear programming problem (but with 8 rather
than 6 variables). This is achieved as follows.
Write H1 (1, j) − H1 (0, 0) = yj − zj where yj ≥ 0, zj ≥ 0 and yj · zj = 0.
Then |H1 (1, j) − H1 (0, 0)| = yj + zj for j = 0, 1. We now obtain a set of linear
constraints by using these new variables, but introduce two new nonlinear
constraints, y0 · z0 = 0 and y1 · z1 = 0.
These last two constraints can be converted into EITHER/OR constraints
(see [78, pages 477–480]), for yj · zj = 0 is the same as EITHER yj = 0 OR
zj = 0. These can be treated through introducing integer constraints. These
nonlinear programming problems are then solvable with computer packages
that handle mixed integer linear programming problems. CPLEX is a well
known example of a computer package that meets these needs. Clearly these
ideas can be extended to more complicated examples, and CPLEX can handle
such problems with thousands of variables.
C

Volatility Estimation




One of the most important variables in option pricing is the volatility of the
‘underlying’ (as we call the underlying asset). In fact it is important because it
is this factor that usually most eﬀects an option price. Practitioners sometimes
quote the volatility of an underlying rather than quoting the price of an option.
This gives rise to the term “trading volatility”. The book by Natenberg [57]
is very popular with practitioners and includes a discussion of volatility.
In order to determine the volatility of an underlying, one should have a model
for the underlying. Perhaps this is one of the most important tasks in ﬁnance—
producing and calibrating models for price processes (asset prices, exchange
rates, interest rates, and so on). There are many such models now avail-
able. One likes to be parsimonious, selecting the simplest model which will
reproduce “stylized facts” observed in “the market.” There are continuous
time models, discrete time models—like the binomial tree models, time series
models—like ARCH, GARCH, EGARCH and so on. In this book we have
concentrated on binomial tree models. These can be calibrated, and relatively
easy algorithms are available for pricing quite complicated derivative assets.
In this section we shall use the model for an underlying (asset) developed
by Black and Scholes to obtain their famous European call and put option
pricing formulae. We shall calibrate the volatility for this model. This is also
the calibration we needed for using the CRR model.
Assume that the underlying asset price S satisﬁes
                                 
                       S(tj+1 )                             
              ln                      = µ(tj+1 − tj ) + σ    tj+1 − tj · j+1       (C.1)
                        S(tj )
where 0 = t0 < t1 < t2 , . . ., and the random variables            j are all independent
and identically distributed N (0, 1).
There are basically two approaches to estimating volatility:

 1. historical volatility estimation;
270    C Volatility Estimation

2. implicit or implied volatility estimation.



C.1 Historical Volatility Estimation

In order to estimate the expected return µ and the volatility σ, we assume
that we have equally spaced measurements of S. That is, (tj+1 − tj ) = ∆t for
each j. These could be daily stock prices, which we will denote by

                                   S0 , S1 , S2 , S3 , . . . , SN .        (C.2)

We then take natural logarithms of ratios of consecutive terms. Put Yi =
ln SSi−1
      i
         to obtain

                                    Y1 , Y2 , Y3 , . . . , YN .            (C.3)

We can then estimate µ∆t by

                                                     N
                                                1
                                         µ̂ =         Yi                   (C.4)
                                                N i=1

and σ 2 ∆t by


                                                N
                                      1                 2
                          σ̂ 2 =              (Yi − µ̂)                    (C.5)
                                    N − 1 i=1
                                                N
                                      1           N
                             =               Y2−      µ̂2 .                (C.6)
                                    N − 1 i=1 i  N −1

We note that N − 1 is used rather than N . This gives the well known unbiased
estimator for σ 2 ∆t. Equation (C.6) follows from (C.4), and may simplify the
calculation of σ̂ 2 .
We now provide an example. This is taken from Hull [37, page 234].

Example C.1. From Table C.1, we compute

                     20                              20
                           Yi = 0.09531,                   Yi2 = 0.00333
                    i=1                              i=1

and hence the estimations (using (C.4) and (C.6)):
                                       C.1 Historical Volatility Estimation    271

                          Table C.1. Daily stock returns
                    Day     Stock Price SSi−1
                                           i
                                                Daily return Yi
                     0        20.000
                     1        20.125   1.006250    0.006231
                     2        19.875   0.987578   -0.012500
                     3        20.000   1.006289    0.006270
                     4        20.500   1.025000    0.024693
                     5        20.250   0.987805   -0.012270
                     6        20.875   1.030864    0.030397
                     7        20.875   1.000000    0.000000
                     8        20.875   1.000000    0.000000
                     9        20.750   0.994012   -0.006010
                    10        20.750   1.000000    0.000000
                    11        21.000   1.012048    0.011976
                    12        21.250   1.011905    0.011834
                    13        20.875   0.982353   -0.017800
                    14        20.875   1,000000    0.000000
                    15        21.250   1.017964    0.017805
                    16        21.375   1.005882    0.005865
                    17        21.375   1.000000    0.000000
                    18        21.250   0.994152   -0.005870
                    19        21.750   1.023529    0.023257
                    20        22.000   1.011494    0.011429



                       µ̂ = 0.00476,    σ̂ 2 = 0.000151357

or σ̂ = 0.00123. We are not so concerned about µ̂ as this does not enter option
pricing. But σ̂ is an estimator for σ 2 ∆t, or the daily volatility. We must decide
how time is measured. If time is measured in trading days, and we assume
(as does Hull) that there are 252 trading days per year, then ∆t = 1/252
and that the data give an √ estimate for the volatility per annum (annualized
volatility) of 0.00123 × 252 = 0.195. The estimated volatility is 19.5% per
annum. (The standard error of this estimate is √0.195  2×20
                                                            or 3.1% per annum.)

Remark C.2. 1. What is the daily price? Hull in the example considers the
   closing stock price on each trading day. Are there other choices? After all,
   much activity occurs each trading day. Probably our decision of what to
   do with the estimates will dictate what choices we make.
 2. Are there problems counting Friday to Monday as one day?
 3. Is it reasonable to assume the volatility is the same over the whole week.
    If we were to take just Wednesday to Tuesday ratios for the Yi , would we
    get a diﬀerent answer?
 4. If we have used trading days to measure time here, then when we use the
    historical volatility to price an option by the Black and Scholes formula we
272      C Volatility Estimation

      should also measure time in trading days. (This should make us conscious
      of how data are collected and how estimations are made.)
 5. As to the number of trading days, this may vary from country to country.
    Some take 260. Perhaps it should be approximately 365 − 2 × 52 = 261.
 6. We have assumed here and below that the stock is a non dividend-paying
    stock. Modiﬁcations can be made for dividends —see Hull [ibid., page
    235]. Of course, this approach can be used to estimate the volatility of
    other processes, which are assumed to evolve like those in Table C.1, for
    example exchange rates, interest rates, and so on. However, for other ex-
    amples diﬀerent models to C.1 may be required to capture market features
    (stylized facts).



C.2 Implied Volatility Estimation

Implied volatility is calculated in a diﬀerent way. We still assume the model
in C.1, and we assume that the Black and Scholes formula for a European call
(put) option is correct. For the European call option with time to expiry T ,
and strike (or exercise) price K, this is

                             C = SN (d1 ) − Ke−rT N (d2 )                    (C.7)

where
                             S              
                        ln         + r + 12 σ 2 T                   √
                 d1 =        K
                                     √            ,     d2 = d 1 − σ T ,     (C.8)
                                    σ T
where S is the current stock price, r is the risk-free interest rate appropriate to
the tenor (duration) of the option, σ the volatility. Of course N (x) is the usual
standard normal distribution function whose values are widely tabulated. Of
the inputs into (C.7) S, K, r, T are given, but not σ. The implied volatility
is that value of σ so that for a given choice of S, K, r, T , the formula (C.7)
produces the call value quoted in the market. Let us now see some ways for
calculating this implied volatility. Let us assume that S, K, r, T are given and
that

                     f (σ) ≡ SN (d1 ) − Ke−rT N (d2 ) − Cm .                 (C.9)

Here Cm denotes the market price of the call option for the choice S, K, r, T .
We now seek σ = σimp so that

                                       f (σimp ) = 0.                       (C.10)
                                        C.2 Implied Volatility Estimation     273

We now describe two standard (popular) methods for solving equation (C.10).
Newton-Raphson Method
This is an iterative method, which usually converges very quickly. We describe
how to go from an estimate σn to σn+1 . Of course we assume f (σn ) = 0, else
there is not much point proceeding to next iteration, as we already have
computed σimp . For σn+1 , we take

                                           f (σn )
                             σn+1 = σn −             .                      (C.11)
                                           f  (σn )

There are several ways to see why (C.11) is a good approximation. The usual
explanation is the following. Look at the graph of the function y = f (σ). We
can see that this function f is an increasing function of σ. In fact
                                          √
                      f  (σ) = V (σ) = Sσ T N  (d1 ) > 0                  (C.12)

where

                                     1     1
                          N  (x) = √ exp(− x2 ),                           (C.13)
                                     2π    2

which is easily computed. Here, let V stand for vega which is the derivative
of the call price with respect to the volatility (the Greek letter kappa (κ) is
also used). Continuing, draw a tangent to the graph of y = f (σ) at the point
(σn , f (σn )). This has equation

                         y = f (σn ) + V (σn )(σ − σn ).                    (C.14)

Now compute where this tangent line intersects the σ-axis. Thus

                         0 = f (σn ) + V (σn )(σ − σn ),                    (C.15)

and you will obtain

                                          f (σn )
                               σ = σn −                                     (C.16)
                                          V (σn )

as the value of σn+1 . This is just another way of writing (C.11). By drawing
a graph, you can see why σn+1 is a better estimate for σimp than is σn . From
a computational point of view, it would be good to program
                                                        √         the functions
C = C(σ) ≡ SN (d1 ) − Ke−rT N (d2 ) and V (σ) ≡ Sσ T N  (d1 ) with input
parameters S, K, r, T . Here is a sample computation which is taken from Chriss
[14, page 339].
274    C Volatility Estimation

Example C.3. Input data is S = $100, K = $100, T = 2 years, r = 3%,
the market price of the European call option is Cm = $8.61. We begin with
an initial guess of σ1 = 20%. We know this is a reasonable value from past
experience. We then compute C(σ1 ) = $14.0721 using the Black and Scholes
formula, and so f (σ1 ) = C(σ1 ) − Cm = 14.0721 − 8.61 = 5.4621. Next we
compute the Black and Scholes Vega, V (σ1 ) = 53.0007, and now σ2 ,

                               f (σ1 )           5.4621
                  σ2 = σ 1 −           = 0.20 −         = 0.0969,
                               V (σ1 )          53.0007

so the next estimate of volatility is 9.69%.
We proceed to the next iteration. With σ2 = 9.69, C(σ2 ) = 8.7144, V (σ2 ) =
49.6346, f (σ2 ) = V (σ2 ) − Cm = 0.1044, and so

                           f (σ2 )             0.1044
               σ3 = σ2 −           = 0.0969 −         = 0.0948
                           V (σ2 )            49.6346

which is 9.48%.
Since C(σ3 ) = C(0.0948) = 8.6103 we could decide to stop now and conclude
that a satisfactory estimate for σimp = 9.48%.

The Method of Bisections
This method is also iterative and may produce a value of the implied volatility
in more steps than the Newton-Raphson method, but it has the advantage
that we do not need an explicit formula for C(σ) or its derivative as in the
above method.
We start out with an initial guess for the implied volatility, which we will call
σ0 , and the compute f (σ0 ) = C(σ0 ) − Cm . If f (σ0 ) > 0, then we can conclude
from the above discussion that σ0 > σimp . We now need to ﬁnd another guess
that makes f lower. Set σ1 to σ0 reduced by 50%, that is,
                                        1
                               σ1 = σ0 − σ0 = 0.5σ0
                                        2
We then compute f (σ1 ) as before. If f (σ1 ) > 0, then we again conclude that
σ1 > σimp , and we again reduce σ1 by 50% of the earlier change:

                                          1
                               σ2 = σ1 − σ0 .
                                          4
On the other hand if f (σ1 ) < 0 then we conclude that σ1 < σimp , and we
increase σ1 by 50% of the earlier change:
                                            1
                                   σ2 = σ1 + σ0 .
                                            4
                                       C.2 Implied Volatility Estimation      275

We then iterate these steps. We compute σk from σk−1 as follows:
                           ⎧
                           ⎨ σk−1 − σ2k0 if f (σk−1 ) > 0
                     σk =                                                   (C.17)
                           ⎩
                             σk−1 + σ2k0 if f (σk−1 ) < 0.

It should be clear that with each step the estimates of the σimp are getting
closer and closer. If we require an accuracy of for σimp , then we continue
the iterations until
                                    σ0
                                        <
                                    2k
or                                       
                                     ln σ0
                                 k>          .                        (C.18)
                                       ln(2)
If we took σ0 = 20%, and = 0.01%, then (C.18) means k > 10.97, that is,
we need at least 11 steps. We now present a sample calculation (see Chriss
[ibid., page 333]).

Example C.4. The data are the same as in the previous example using the
Newton-Raphson method. We start with σ0 = 0.20 as before and choose
  = 0.0001. Since the option’s actual volatility is not greater than 20% (check
that f (0.20) > 0), we deﬁne σ1 by
                                     1
                            σ1 = σ0 − σ0 = 0.10.
                                     2
Now f (σ1 ) = 8.87 − 8.61 > 0, so σ1 is still too large. Now select σ2 by
                           1           1
                  σ2 = σ1 − σ0 = 0.10 − × 0.20 = 0.05,
                           4           2
and now f (σ2 ) = 6.58 − 8.61 < 0, which means that σ2 is too small. Now
select σ3 by
                           1            1
                 σ3 = σ2 + σ0 = 0.05 + × 0.20 = 0.075,
                           8            8
and now f (σ3 ) = 7.66 − 8.61 < 0, which means that σ3 is too small. Now
select σ4 by
                            1              1
               σ4 = σ3 +      σ0 = 0.075 +    × 0.20 = 0.0875,
                           16              16
and now f (σ4 ) = 8.25 − 8.61 < 0, which means that σ4 is too small. Now
select σ5 by

                         1               1
               σ5 = σ4 +   σ0 = 0.0875 +    × 0.20 = 0.0938,          (∗)
                        32               32
and now f (σ5 ) = 8.56 − 8.61 < 0, which means that σ5 is too small. Now
select σ6 by
276    C Volatility Estimation

                           1               1
              σ6 = σ5 +      σ0 = 0.0938 +    × 0.20 = 0.0969,
                          64               64
and now f (σ6 ) = 8.71−8.61 > 0, which means that σ6 is too large. Now select
σ7 by
                         1                 1
              σ7 = σ6 −     σ0 = 0.0969 −     × 0.20 = 0.0953,
                        128               128
and now f (σ7 ) = 8.64−8.61 > 0, which means that σ7 is too large. Now select
σ8 by
                         1                 1
              σ8 = σ7 −     σ0 = 0.0953 −     × 0.20 = 0.0945,
                        256               256
and now f (σ8 ) = 8.60 − 8.61 < 0, which means that σ8 is too small. Now
select σ9 by
                          1                 1
             σ9 = σ8 +       σ0 = 0.0945 +     × 0.20 = 0.0949,
                         512               512
and now f (σ9 ) = 8.62−8.61 > 0, which means that σ8 is too large. Now select
σ10 by
                          1                   1
            σ10 = σ9 −       σ0 = 0.0949 −       × 0.20 = 0.0947,
                        1024                1024
and now σ11 −σ10 will be less than 0.0001 and so σimp = 9.47% to the required
accuracy. Let us note that in (∗) we did not carry accuracy greater than that
required in the ﬁnal answer. This approach is taken in all further steps.
We summarize the calculations in Table C.2.

                         Table C.2. Bisection method.
                          Step i     σi     C(σi )
                            1      10.00%   $8.87
                            2      5.00%    $6.58
                            3      7.50%    $7.66
                            4      8.75%    $8.25
                            5      9.38%    $8.56
                            6      9.69%    $8.71
                            7      9.53%    $8.64
                            8      9.45%    $8.60
                            9      9.49%    $8.62
                            10     9.47%    $8.61



We now make some remarks that apply to both methods.

Remark C.5. 1. Of course both approaches could be applied more generally.
   But for the Newton-Raphson method, we need an option pricing formula
   or an algorithm for computing C = C(σ) and its derivative V (σ). In the
                                      C.2 Implied Volatility Estimation    277

  method of bisections we do not need the derivative at all. This approach
  will be convenient if we are trying to “back-out” implied volatilities from
  American option prices, for example.
2. What we have calculated above is the Black and Scholes implied volatility,
   but we could also consider computing the CRR implied volatility, when
   the market prices could be American option prices. Then we must use the
   method of bisections to calculate the implied volatilities.
3. We have demonstrated the method using market European call option
   prices. We can clearly do the same from European put prices or com-
   binations of these. We could also use market prices of spreads (spread
   options are priced as the diﬀerence of two option prices) in the same way
   to compute an implied volatility. This is sometimes done by practitioners.
4. If model (C.1) is valid then the implied volatility calculated in either way
   just described should give the same answer for any choice of S, K, r, T
   provided we use the corresponding market price. It is well known that
   this is not the case. This would seem to throw some doubt on the validity
   of model (C.1).
5. If we keep S, r, T ﬁxed and compute σimp for various values of strike K,
   we can get diﬀerent answers. This gives rise to the phenomenon called
   “volatility smiles”. We may see this in Table (C.3)


                Table C.3. Call prices and implied volatility.
                   K       Call price-ask Implied volatility-ask
                  17.00         3.27              71.70
                  17.50         2.75              62.50
                  18.00         2.27              55.20
                  18.50         1.79              47.90
                  19.00         1.35              41.70
                  19.50         0.95              36.20
                  20.00         0.63              32.40
                  20.50         0.38              29.20
                  21.00         0.22              27.60
                  21.50         0.12              26.50
                  22.00         0.07              26.60


6. You may say that this example does not exhibit a smile. Usually the lowest
   value of implied volatilities occurs for the ATM (at-the-money) options.
7. Here is a piece of anecdotal information. Implied volatility estimation
   should be the same if we use market put prices or market call prices.
   However, practitioners use out-of-the-money option prices to estimate im-
   plied volatilities. So in the example they may use puts to estimate implied
   volatilities when K < $20.14 and calls when K > $20.14. Why do you
   think this is done?
278    C Volatility Estimation

 8. What is to be done? The famous book by Cox and Rubinstein [19] has a
    chapter called “How to Use the Black and Scholes Formula”. They describe
    various ways of taking weighted averages of various answers for implied
    volatility to obtain a value of the volatility that is appropriate for the
    stock in hand. This number is then used to price options or to generate
    quotes on options that are not currently being traded, or to price various
    exotic options on the same stock, which are not traded in the exchanges.
 9. Another way around this problem is to plot σimp versus K and determine
    a smooth curve that goes through these points. For example, some prac-
    titioners might use a spline function to ﬁt these data points. Then, for
    pricing other options (nonmarket choices of K), use this graph to deter-
    mine a suitable choice of volatility.
10. Another issue is the following. Which is the best to use—historical volatil-
    ity estimates or implied volatility estimates? There is quite some debate
    about this. It is also possible that these estimates could be quite diﬀerent.
    After all, the historical volatility uses historical data, whereas the implied
    volatility uses market information about future volatilities. So perhaps the
    implied volatilities are more appropriate. However, consider how market
    prices of options are determined. These are no doubt based on past history
    as well as on present assessment of the future based on recent history. (We
    are excluding inside information about the future here.) Perhaps implied
    volatilities are just another type of “historical” volatility estimation. This
    raises the interesting issue of price formation in markets (price discovery).
11. Suppose now that we keep S, K, r ﬁxed, and calculate σimp for various
    values of T . If model (C.1) is correct then again we should always get the
    same answer. However, we often obtain diﬀerent answers. This means that
    the (annualized) volatilities for diﬀerent times to expiry are not the same.
    For example, option prices imply greater volatility close to the expiry of
    an option. We can then talk about the term structure of volatility, just as
    we talk about the term structure of interest rates. This is another active
    area of research.

Further references for calculating implied volatility include Beckers [4], May-
hew [49] and Latane and Rendleman [45].



C.3 Exercises

Exercise C.6. Implement Example C.3.

Exercise C.7. Implement Example C.4.
D

Existence of a Solution




In this note we discuss the existence of a solution to the system


                         N
                 1=            Qj                                             (D.1)
                         j=0
                         N
              ρ·S =            Qj S(N, j)                                     (D.2)
                         j=0
                         N
                                                +
             ρ · C̃i =         Qj [S(N, j) − Ki ]   for i = 1, 2, . . . , m   (D.3)
                         j=0


with Qj ≥ 0 for all j = 0, 1, 2, . . . , N and ρ = exp(rT ). We shall show that
(D.1), (D.2), (D.3) has a nonnegative solution for Q0 , Q1 , . . . , QN if and only
if there are no arbitrage opportunities in the market of the stock and the
various options whose prices appear in these formulae. In order to show this
we need Farkas’ lemma (1902). (Farkas’ name is pronounced in the Hungarian
manner as “Farkash”).



D.1 Farkas’ Lemma

This famous result has many applications in optimization theory and else-
where.

Lemma D.1 (Farkas). Let A be an m × n matrix and b ∈ Rm . Then the
system
280    D Existence of a Solution

                             Ax = b       x ∈ Rn       x ≥ 01                        (D.4)
has a solution x if and only if the system

                            w A ≤ 0     w ∈ Rm        w b > 0                      (D.5)

has no solution w.2

Proof. (a) Let us assume (D.4) has a solution x ≥ 0. Assume also, if possible,
that (D.5) has a solution w. Then

                                 0 ≥ w Ax = w b > 0

which is a contradiction. And so (D.5) cannot have a solution.
(b) Let us assume that (D.4) does not have a solution, and let us show that
(D.5) then has a solution.
Let
                S = {y ∈ Rm |y = Ax with x ∈ Rn and x ≥ 0}.
Then S is a closed convex subset of Rm and b ∈ S.
Let y ∗ be the point in S which is closest to b. Then 3

                                 b − y ∗ , y ∗ − y ≥ 0                             (D.6)

for all y ∈ S. To see why this is true, set


              ψ(t) = b − (ty + (1 − t)y ∗ )2
                   = (b − y ∗ ) + t(y ∗ − y)2
                    = b − y ∗ 2 + 2tb − y ∗ , y ∗ − y + t2 y ∗ − y2

for 0 ≤ t ≤ 1. Then from the deﬁnition of y ∗ , ψ has a minimum at t = 0, and
so ψ  (0) ≥ 0, from which (D.6) follows.
Let w = b − y ∗ = 0. We claim that this choice satisﬁes (D.5).
In fact, using 0 ∈ S in (D.6),


                      w b = b − y ∗ , b
                           = b − y ∗ , b − y ∗  + b − y ∗ , y ∗ 
1
  x = (x1 , x2 , . . . , xn ) ≥ 0 means xi ≥ 0 for all i = 1, 2, . . . , n.
2
  w denotes the transpose of the vector w.
3
  If x, y ∈ Rn , say, then x, y = x1 y1 + x2 y2 + . . . + xn yn , the scalar (dot) product
  of x and y.
                                                D.2 An Application to the Problem     281

                               ≥ b − y ∗ , b − y ∗  = b − y ∗ 2 > 0

Also rearranging (D.6) gives

                                  b − y ∗ , y ≤ b − y ∗ , y ∗                   (D.7)

for all y ∈ S. This is the same as

                                      w Ax ≤ b − y ∗ , y ∗                       (D.8)

for all x ∈ Rn with x ≥ 0. Now choose x = nei (integer n times the unit
vector ei 4 ). Then

                                       1           1
                          (w A)i =      w A(nei ) ≤ b − y ∗ , y ∗ ,              (D.9)
                                       n            n
and letting n → +∞, (D.9) implies that

                                           (w A)i ≤ 0.

As this can be applied with any i = 1, 2, . . . , n, each component of w A is less
than or equal to zero, which is the same as saying w A ≤ 0. We have then
shown that w deﬁned above satisﬁes (D.5). We have thus established that if
(D.5) has no solution, then (D.4) must have a solution (for if not . . . ).      2



D.2 An Application to the Problem

We apply Farkas’ lemma with

            ⎛                                                       ⎞
                  1                1        ...           1
        ⎜ (S(N, 0) − K1 )+ (S(N, 2) − K1 )+ . . . (S(N, N ) − K1 )+ ⎟
        ⎜                                                           ⎟
        ⎜ (S(N, 0) − K2 )+ (S(N, 2) − K2 )+ . . . (S(N, N ) − K2 )+ ⎟
        ⎜                                                           ⎟
        ⎜         ·                ·                      ·         ⎟
        ⎜
      A=⎜                                                           ⎟
                  ·                ·                      ·         ⎟
        ⎜                                                           ⎟
        ⎜         ·                ·                      ·         ⎟
        ⎜                                                           ⎟
        ⎝ (S(N, 0) − Km )+ (S(N, 2) − Km )+ . . . (S(N, N ) − Km )+ ⎠
              S(N, 0)          S(N, 2)      ...       S(N, N )

and


4
    ei = (0, 0, .., 1, . . . , 0) with 1 in the ith spot.
282     D Existence of a Solution
                          ⎛    ⎞                 ⎛    ⎞
                            1                    Q0
                        ⎜ ρC̃1 ⎟              ⎜ Q1 ⎟
                        ⎜      ⎟              ⎜       ⎟
                        ⎜ ρC̃2 ⎟              ⎜ Q2 ⎟
                        ⎜      ⎟              ⎜       ⎟
                        ⎜ · ⎟                 ⎜ · ⎟
                        ⎜
                      b=⎜      ⎟              ⎜
                                            x=⎜       ⎟.
                               ⎟                      ⎟
                        ⎜ · ⎟                 ⎜ · ⎟
                        ⎜ · ⎟                 ⎜ · ⎟
                        ⎜      ⎟              ⎜       ⎟
                        ⎝ ρC̃m ⎠              ⎝ QN −1 ⎠
                              ρS                 QN

Then (12.4), (12.5), (12.6) is the same as Ax = b with these choices.
Here A is an (m + 2) × (N + 1) matrix. Let us suppose that w =
(w0 , w1 , w2 , . . . , wm , wm+1 ) satisﬁes (D.5). Then this means that (on dividing
the right inequality in (D.5) by ρ)
                   
                   1
             w0       + w1 C̃1 + w2 C̃2 + . . . + wm C̃m + wm+1 S > 0
                   ρ

and


 w0 + w1 (S(N, 0) − K1 )+ + . . . + wm (S(N, 0) − Km )+ + wm+1 S(N, 0) ≤ 0
 w0 + w1 (S(N, 1) − K1 )+ + . . . + wm (S(N, 1) − Km )+ + wm+1 S(N, 1) ≤ 0
                                 ..
                                  .
w0 + w1 (S(N, N ) − K1 )+ + . . . + wm (S(N, N ) − Km )+ + wm+1 S(N, N ) ≤ 0

We now perform the trades: If w0 > 0, borrow ρ1 from the bank, if w0 < 0,
invest ρ1 in a bank; otherwise do nothing.
If for 1 ≤ i ≤ m we have wi > 0, short sell the call with strike price Ki , while
if wi < 0, buy the call with strike price Ki ; otherwise do nothing.
If we have wm+1 > 0, short sell the stock, while if wm+1 < 0, buy the stock;
otherwise do nothing.
The result of constructing this portfolio is that at time t = 0 (now) we have
a proﬁt
                
                1
            w0     + w1 C̃1 + w2 C̃2 + . . . + wm C̃m + wm+1 S > 0,
                ρ

and at t = N we have


 −w0 − w1 (S(N, ·) − K1 )+ − . . . − wm (S(N, ·) − Km )+ − wm+1 S(N, ·) ≥ 0.
                                       D.2 An Application to the Problem        283

This says that we have no unfunded liabilities at t = N in any state j =
0, 1, 2, . . . , N . We thus have a (type 1) arbitrage opportunity. We thus conclude
that if there is a solution to (D.5) then we have an arbitrage opportunity.
The outcome of all of this is the fact that (12.4)–(12.6) has a solution for
Qj ≥ 0 for j = 0, 1, 2, . . . , M iﬀ there are no arbitrage opportunities.
E

Some Generalizations




This note gives a generalization to some material in Section 12.5 of van
der Hoek’s 1998 Method. A key component was to ﬁnd Qj ≥ 0 : j =
0, 1, 2, . . . , N satisfying the system:


                            N
                     1=           Qj                                                 (E.1)
                            j=0
                            N
          exp(rT ) · S =          Qj S(N, j)                                         (E.2)
                            j=0
                            N
                                                      +
         exp(rT ) · C̃i =         Qj [S(N, j) − Ki ]      for i = 1, 2, . . . , m.   (E.3)
                            j=0


We select the S(N, j) in such a way that a solution for the Qj can be written
down explicitly. In other words the S(N, j) and Qj are selected together.



E.1 Preliminary Observations

Lemma E.1. Let f ∈ C 2 [0, ∞) and have compact support. Then
                                                ∞
                 f (x) = f (0) + xf  (0) +          f  (y)(x − y)+ dy             (E.4)
                                               0

for all x ≥ 0.

Proof. This follows from simple integration by parts.                                   2
286    E Some Generalizations

Lemma E.2. Let f be piecewise linear on [0, ∞). Then

                          f (x) = f (0) +          αi (x − xi )+ ,        (E.5)
                                             i≥0


where 0 = x0 < x1 < x2 < . . . are the knots (kink points) of f , and αi =
mi − mi−1 , where f  (x) = mi on (xi , xi+1 ) for each i ≥ 1 and α0 = m0 .

Proof. Both sides of (E.5) are piecewise linear, and it is easy to see that the
two sides have the same value at x = 0 and the same slopes in each interval
(xi , xi+1 ) with the choice suggested for the αi .

Example E.3. Let 0 < K1 < K2 < K3 . Let


                     1                       K3 − K1
        f (x) =           (x − K1 )+ −                       (x − K2 )+
                  K2 − K1               (K3 − K2 )(K2 − K1 )
                       1
                  +          (x − K3 )+ .                                 (E.6)
                    K3 − K2

Then f is piecewise linear and
                                       ⎧
                                       ⎨0       if x ≤ K1
                                f (x) = 1       if x = K2
                                       ⎩
                                         0      if x ≥ K3 .

the payoﬀ of a (call) butterﬂy spread.

Example E.4. With the special case K2 − K1 = K3 − K2 = ∆ we obtain the
representation

                        1                                        
             f (x) =        (x − K1 )+ − 2(x − K2 )+ + (x − K1 )+
                        ∆
for
                                ⎧
                                ⎪
                                ⎪ 0                 if x ≤ K1
                                ⎪
                                ⎪
                                ⎪
                                ⎪
                                ⎪
                                ⎪
                                ⎨ 1 (x − K1 )
                                  ∆                 if x ∈ [K1 , K2 ]
                      f (x) =
                                ⎪
                                ⎪  1
                                ⎪
                                ⎪
                                ⎪ ∆ (K3 − x)        if x ∈ [K2 , K3 ]
                                ⎪
                                ⎪
                                ⎪
                                ⎩
                                  0                 if x ≥ K3 .
                         E.2 Solution to System in van der Hoek’s Method     287

E.2 Solution to System in van der Hoek’s Method

We introduce some notation.
We assume K1 < K2 < . . . . < Km . C̃j is the (market) price of a European
call option expiring at time T with strike price Kj . N = m − 1, as we shall
see.

                          ρ = exp(r · T )       or P (0, T )−1

We ﬁrst write the choices for Qj : For j = 2, 3, . . . , m − 1,

                                                                              
                 1                 Kj+1 − Kj−1                  1
Qj = ρ                 Cj−1 −                          Cj +           Cj+1
             Kj − Kj−1        (Kj+1 − Kj )(Kj − Kj−1 )      Kj+1 − Kj
   >0
                                                                            (E.7)

by Example E.3, and


                          Qj = 0  if j = 1, m                               (E.8)
                                  ρ
                       Qm+1 =            [Cm−1 − Cm ]                       (E.9)
                              Km − Km−1
                                        m+1
                          Q0 = 1 −            Qj .                         (E.10)
                                        j=1


The choices of Sj are

                                                    C̃1 −C̃2
                                                                 
                                        S − C̃1 − K1 K 2 −K1
                           S0 = ρ                                          (E.11)
                                                   C̃1 −C̃2
                                              1 − ρK 2 −K1

                           Sj = K j           if j = 1, 2, . . . , m       (E.12)
                                     C̃m
                        Sm+1 = ρ         + Sm .                            (E.13)
                                    Qm+1

Remark E.5. The choices made for Qj in (E.7) are unique, but there are other
possible choices for Q0 and Qm+1 with (E.8). This needs some exploration.
For example if Kj takes the form b · aj , then we might also like to have
Q0 ≈ Qm+1 .

We can now establish the following facts, which follow if there are no arbitrage
opportunities in the market containing cash, the asset, and the m European
call options.
288      E Some Generalizations

1. For j = 0, 2, 3, . . . , m − 1, m + 1, Qj > 0.
      For j = 2, 3, . . . , m − 1, this is true because Qj /ρ is the price of a (call)
      butterﬂy spread, which must be positive. Qm+1 > 0 as C̃m−1 > C̃m , and

                                            ρ              
                            Q0 = 1 −               C̃1 − C̃2 > 0,
                                         K2 − K1
      as it is ρ times the present value of and asset with pay-oﬀ
                                   ⎧
                                   ⎨1             if 0 ≤ S(T ) ≤ K1
                                    K2 −S(T )
                     f (S(T )) =                  if K1 ≤ S(T ) ≤ K2
                                   ⎩ K2 −K1
                                     0            if S(T ) ≥ K2 .

      This is because Lemma E.1 implies that


                               1                        1
          f (S(T )) = 1 −           (S(T ) − K1 )+ +         (S(T ) − K2 )+ ,
                            K2 − K1                  K2 − K1

      and hence, assuming no arbitrage,

                            1    1             1
                              −       C̃1 +         C̃2 > 0.
                            ρ K2 − K1       K2 − K1

2. It is now not diﬃcult to show that (E.2) and (E.3) hold. For (E.3) we
   need to use C̃1 ≥ S − Kρ1 , which implies that K1 ≥ S0 . Equation (E.3) is
   proved for i = 1 and then for i > 1.



E.3 Exercises

Exercise E.6. Use lemma (E.1) and (E.2) to explain how one can price a
general European Contingent Claim in terms of the prices of European Call
options. How could you use these ideas to obtain approximate pricing.
F

Yield Curves and Splines




In this appendix we discuss the approximation of yield curves by cubic splines.
As in [48], let m(t), 0 ≤ t ≤ T be the discount function of [0, T ]. It describes
the present (t = 0) value of $1 repayable in t years (if that is the unit of time).
We shall seek an approximation of m on [0, T ] as a cubic spline. A cubic spline
is a continuously diﬀerential piecewise cubic function, that is,

                  m(t) = ai + bi t + ci t2 + di t3 ,         ti ≤ t ≤ ti+1 ,            (F.1)

for i = 0, 1, 2, . . . , k where 0 = t0 < t1 < . . . < tk < tk+1 = T .
The choice of ti , i = 1, 2, . . . , k is up to the user. It is clear that one does
not want too many knots ti . In order to keep things simple one could take
            i
ti = k+1        T , that is equal-spaced, but this is not the best thing to do. If you
expect the discount curve to have more curvature in [0, T /2] than in [T /2, T ],
then it may be advisable to have more knots in [0, T /2]. Let us assume that
t1 , t2 , . . . , tk are chosen and ﬁxed throughout the discussion.
Some notation: If a function h is given as
                                       
                                        f (t),      t < t1
                                h(t) =
                                        g(t),       t > t1

and f, g are suﬃciently smooth, then h(t1 +), h (t1 +), h (t1 +) stand for re-
spectively g(t1 ), g  (t1 ), g  (t1 ), and h(t1 −), h (t1 −), h (t1 −) stand for f (t1 ),
f  (t1 ), f  (t1 ). In order that m be a cubic spline we need

     m(ti +) = m(ti −),        m (ti +) = m (ti −),     m (ti +) = m (ti −)       (F.2)

for i = 1, 2, . . . , k. This is equivalent to

             ai−1 + bi−1 ti + ci−1 t2i + di−1 t3i = ai + bi ti + ci t2i + di t3i        (F.3)
290     F Yield Curves and Splines

                     bi−1 + 2ci−1 ti + 3di−1 t2i = bi + 2ci ti + 3di t2i              (F.4)
                                2ci−1 + 6di−1 ti = 2ci + 6di ti                       (F.5)

for i = 1, 2, . . . , k. As (F.3)–(F.5) are awkward to deal with, Litzenberger and
Rolfo [48] proposed ﬁrst to write m is a diﬀerent way.



F.1 An Alternative representation of Function (F.1)

By (F.1) on [t1 , t2 ],

                             m(t) = a1 + b1 t + c1 t2 + d1 t3 .                       (F.6)

We wish to write it as

 m(t) = a0 +b0 t+c0 t2 +d0 t3 +A1 +B1 (t−t1 )+C1 (t−t1 )2 +F1 (t−t1 )3 . (F.7)

In fact if a0 , b0 , c0 , d0 are known, then we can obtain a1 , b1 , c1 , d1 from
A1 , B1 , C1 , F1 and vice versa. Let us equate powers of t in (F.6) and (F.7).
Then

                          a1 = a0 + A1 − B1 t1 + C1 t21 − F1 t31
                          b1 = b0 + B1 − 2C1 t1 + 3F1 t21
                          c1 = c0 + C1 − 3F1 t1
                          d 1 = d 0 + F1 ,

which expresses a1 , b1 , c1 , d1 in terms of A1 , B1 , C1 , F1 . Solving back, it
is not hard to show that

             F1 = d1 − d0
             C1 = c1 − c0 + 3F1 t1
                 = c1 − c0 + 3(d1 − d0 )t1
             B1 = (b1 − b0 ) + 2C1 t1 − 3F1 t21
                 = (b1 − b0 ) + 2(c1 − c0 )t1 + 3(d1 − d0 )t21
             A1 = (a1 − a0 ) + B1 t1 − C1 t21 + F1 t31
                 = (a1 − a0 ) + (b1 − b0 )t1 + (c1 − c0 )t21 + (d1 − d0 )t31

after doing a little algebra, and this expresses A1 , B1 , C1 , F1 in terms of
a1 , b1 , c1 , d1 . So on [t0 , t1 ] we can write


m(t) = a0 + b0 t + c0 t2 + d0 t3 + [A1 + B1 (t − t1 ) + C1 (t − t1 )2 + F1 (t − t1 )3 ]D1 (t)
                                                         F.3 Unknown Coeﬃcients        291

where D1 (t) = 0 for t < t1 and = 1 for t ≥ t1 .
We can repeat this argument, but instead of using [t0 , t1 ] and [t1 , t2 ] we use
[ti−1 , ti ] and [ti , ti+1 ] for each i, and on [ti , ti+1 ], m(t) can be written


 ai−1 + Bi−1 t + ci−1 t2 + di−1 t3 + Ai + Bi (t − ti ) + Ci (t − ti )2 + Fi (t − ti )3

as an alternative to ai + bi t + ci t2 + di t3 . Again we can express Ai , Bi , Ci , Fi
in terms of ai , bi , ci , di and vice versa. So on [0, T ]
      m(t) = a0 + b0 t + c0 t2 + d0 t3
                     k
                                                                           
                +          Aj + Bj (t − tj ) + Cj (t − tj )2 + Fj (t − tj )3 Dj (t)
                    j=1

where Dj (t) = 0 for t < tj and Dj (t) = 1 for t ≥ tj .


F.2 Imposing Smoothness

It is not diﬃcult to show from (F.3)–(F.5) that
                                 m(tj +) − m(tj −) = Aj
                                m (tj +) − m (tj −) = Bj
                              m (tj +) − m (tj −) = 2Cj

for j = 1, 2, . . . , k. So if (F.2) holds then this is equivalent to Aj = Bj = Cj =
0, j = 1, 2, . . . , k. We are left with
                                                         k
             m(t) = a0 + b0 t + c0 t2 + d0 t3 +              Fj (t − tj )3 Dj (t),    (F.8)
                                                       j=1

for which (F.2) holds automatically.


F.3 Unknown Coeﬃcients

We must now determine (k + 4) unknowns
                            a0 , b0 , c0 , d0 , F1 , F2 , . . . , Fk                  (F.9)

Now since m(0) = 1, a0 = 1, so we are left with (k + 3) unknowns. These
must be obtained from observations.

Remark F.1. We have used piecewise cubics. Piecewise functions of other types
can be used. If we use polynomials we get more general splines. Fong and
Vasicek [76] used piecewise exponentials.
292     F Yield Curves and Splines

F.4 Observations

We assume that the market provides us with bond prices. However, other
instruments could also be used as in [48]. If a bond expires at Tn and pays
coupon C at T1 , T2 , . . . , Tn , then the present value of this bond is
                                          n
                                   P =         Cm(Ti ) + F m(Tn ),                                     (F.10)
                                         i=1

where F is the face value of the bond. We do not assume T1 , T2 , . . . , Tn are
equally spaced, but in most cases they are. Of course there need be no con-
nection between the Tj and the tj .
We will have diﬀerent choices of {C, F, T1 , T2 , . . . , Tn , n} for diﬀerent bonds.
We now substitute (F.8) into (F.10) to get

                      ⎡                                                                         ⎤
               n                                                  k
        P =         C ⎣1 + b0 Ti + c0 Ti2 + d0 Ti3 +                      Fj (Ti − tj )3 Dj (Ti )⎦
              i=1                                              j=1
                     ⎡                                                                           ⎤
                                                                  k
              + F ⎣1 + b0 Tn + c0 Tn2 + d0 Tn3 +                          Fj (Tn − tj )3 Dj (Tn )⎦ .
                                                               j=1


We have assumed that Tn ≤ T . So
                           n                                     
         P = [n · C + F ] + b0 C                     Ti + F T n
                                               i=1
                            n
                                                                    n
                                                                                         
               + c0 C              Ti2 + F Tn2       + d0 C                Ti3 + F Tn3                 (F.11)
                             i=1                                  i=1
                     k
                                   n
                                                                                                
               +          Fj C           Dj (Ti )(Ti − tj )3 + F Dj (Tn )(Tn − tj )3
                    j=1            i=1


We can write (F.11) as
                                                                      k
                              y = b0 ξ + c0 η + d0 ζ +                     Fj zj                       (F.12)
                                                                  j=1


where

                    y = P − nC − F
                             n
                    ξ=C            Ti + F T n
                             i=1
                                        F.5 Determination of Unknown Coeﬃcients                         293
                              n
                 η=C              Ti2 + F Tn2                                                         (F.13)
                            i=1
                             n
                 ζ=C              Ti3 + F Tn3
                            i=1
                             n
                zj = C            Dj (Ti )(Ti − tj )3 + F Di (Tn )(Tn − tj )3
                            i=1


which are computable for each bond that we observe in terms of C, F, T1 , T2 ,
. . . , Tn .



F.5 Determination of Unknown Coeﬃcients

We determine the unknown coeﬃcients b0 , c0 , d0 , F1 , F2 , . . . , Fk by linear re-
gression. Suppose we have the price of N bonds from the market. For each we
calculate the quantities in equation (F.13)

                                    y l , ξ l , η l , ζ l , z1l , z2l , . . . , zkl

for l = 1, 2, · · · , N . To simplify notation let us write

               xl = (xl1 , xl2 , . . . , xlM ) ≡ (y l , ξ l , η l , ζ l , z1l , z2l , . . . , zkl )

where M = k + 3, and α = (α1 , α2 , ..., αM ) ≡ (b0 , c0 , d0 , F1 , F2 , ..., Fk ); then
(F.12) is

                                        M
                              yl =            αj xlj ,        l = 1, 2, . . . , N
                                       j=1

ideally! We choose α to minimize

                                          N
                                                                  M
                                                                                  2
                                  J=            wl y −    l
                                                                        αr xlr                        (F.14)
                                         l=1                     r=1

                                     )N
where wl > 0 for l = 1, 2, ..., N and l=1 wl = 1. For a least squares approxi-
mation we would normally set wl = 1/N for all l, but we have the ﬂexibility
to give more weight to certain data. To ﬁnd α̂ optimal, we solve:

                                  ∂J
                                      = 0,               j = 1, 2, . . . , M                          (F.15)
                                  ∂αj
294     F Yield Curves and Splines

which is the same as

              N
                              M
                                               
         −2         wl y −l
                                     αˆr xlr       xlj = 0,       for j = 1, 2, . . . , M                (F.16)
              i=1              r=1
or
                               M           N                      N
                                     αˆr           wl xlr xlj =          wl y l xlj                      (F.17)
                              r=1          l=1                    l=1

for j = 1, 2, . . . , M . This is a matrix equation for α̂ which is

                                                    V α̂ = β                                             (F.18)

                                                      )N         l l
with β = (β1 , β2 , . . . , βM ) and βj =                l=1 wl y xj and V               = (Vij ), and

                                                       N
                                           Vij =            wl xli xlj                                   (F.19)
                                                      l=1

We need to show that V is invertible. In fact if V is positive deﬁnite, then
V is invertible. This will be the case if

                               ξT V ξ ≥ 0             for any ξ ∈ RM

and ξ T V ξ = 0 implies ξ = 0. But

                                M                           N
                                                                      M                2
                    ξT V ξ =           Vij ξi ξj =               wl            ξi xli        ≥0
                               i,j=1                       l=1           i=1

                              )M
and ξ T V ξ = 0 implies                    l
                                   i=1 ξi xi = 0 for l = 1, 2, . . . , N which implies
)M                                  1    2
   i=1 ξi xi = 0 where xi = (xi , xi , . . . , xi ) ∈ R . This will imply that ξi = 0
                                                N       N

for all i if the xi , i = 1, 2, . . . , M are linearly independent. This implies that
we need M ≤ N . So we need at least M bond prices, that is at least k + 3
bond prices to determine the unknowns. However it could happen that with
N ≥ k + 3 that the xi are still linearly dependent (in which case V is not
invertible), but if the N bond prices contain N “independent” pieces of infor-
mation this is not likely. In any case once we choose N ≥ k + 3 bond prices
we need to check that V has an inverse, else we have to get some extra bond
prices.
We next outline some computation details.
                                                    F.6 Forward Interest Rates     295
                                ⎡ 1 2              ⎤
                                 ξ ξ      ... ξ N
                                ⎢η 1 η 2 . . . η N ⎥
                                ⎢ 1 2              ⎥
                                ⎢ζ ζ             N⎥
                                ⎢ 1 2 . . .N ζ ⎥
                            Φ = ⎢z z . . . z       ⎥
                                ⎢ 1 1         1    ⎥
                                ⎢ .. ..         .. ⎥
                                ⎣. .             . ⎦
                                    zk1 zk2   ...   zkN
                            Λ = diagonal [w1 , w2 , . . . , wN ]                 (F.20)
                                          T
                            V =ΦΛΦ
                                                     T
                           β = [β1 , β2 , . . . , βM ]
                               ⎡ ⎤
                                 b0
                               ⎢ c0 ⎥
                               ⎢ ⎥
                               ⎢ d0 ⎥
                        −1     ⎢ ⎥
                       V β = ⎢ F1 ⎥                                              (F.21)
                               ⎢ ⎥
                               ⎢ .. ⎥
                               ⎣ . ⎦
                                 Fk

We can then (if we wish) calculate the ai , bi , ci , di in equation (F.1) as
follows:
                       ai = ai−1 − Fi t3i
                       bi = bi−1 + 3Fi t2i
                       ci = ci−1 − 3Fi ti
                       di = di−1 + Fi
                       a0 = 1    and b0 , c0 , d0        from (F.21)

J.H. McCulloch [50] mentions that we do not have bond prices for each of the
N bonds, but rather bid- and ask-spreads, (see [50, pages 20–21] ).


F.6 Forward Interest Rates

If f (t) is the instantaneous forward interest rate, then
                                        t          
                           m(t) = exp −       f (s)ds ,                          (F.22)
                                                0

which implies that
                                               m (t)
                                   f (t) = −          ,                          (F.23)
                                               m(t)
from which                                                 2
                                                              
                                         2b i ci t + 3d i t
                          fˆ(t) = −                                              (F.24)
                                    [ai + bi t + ci t2 + di t3 ]
when ti ≤ t ≤ ti+1 .
296     F Yield Curves and Splines

F.7 Yield Curve

If y(t) is the yield for the period [0, t] then

                                m(t) = exp [−ty(t)]                    (F.25)

so
                                       1
                               y(t) = − loge [m(t)]                    (F.26)
                                       t
so
                               1                              
                      ŷ(t) = − loge ai + bi t + ci t2 + di t3         (F.27)
                               t
for ti ≤ t ≤ ti+1 .



F.8 Other Issues

1. Given the error in spline approximation to the discount curve, we can
compute the error for the forward interest rates and the yield curve. This
analysis is discussed in McCulloch [50].
2. In choosing the size of k (the number of “knots”) we need to take into
account the following. If k is too small, we cannot get a good ﬁt. If k is too
                                                                            1
close to N there are problems alluded to above. McCulloch suggests k ≈ N 2 .
3. The appropriate estimation depends on the observables. We have assumed
one price for N diﬀerent bonds. McCulloch has spreads on N diﬀerent bonds,
and so the analysis diﬀers a little from that given above.
4. Other features can be incorporated. McCulloch [51] discusses tax-adjusted
yield curves and Litzenberger and Rolfo [48] also discuss tax eﬀects on gov-
ernment bonds.
References




 1. M. Abramowitz and I.A. Stegun, Handbook of Mathematical Functions with
    Formulas, Graphs, and Mathematical Tables, Dover, New York, 1965.
 2. S. Anthony, Foreign Exchange in Practice: The New Environment, Palgrave
    Macmillan, New York, 2002.
 3. S. Barle and N. Cakici, Growing a Smiling Tree, The Journal of Financial En-
    gineering 7 (1998), no. 2, 127–146.
 4. S. Beckers, Standard Deviations Implied in Option Prices as Predictors of Future
    Stock Price Variability, Journal of Banking and Finance 5 (1981), 363–381.
 5. P. Bjerksund and G. Stensland, Implementing the Black-Derman-Toy Interest
    Rate Model, Journal of Fixed Income 6 (1996), no. 2, 67–75.
 6. T. Bjork and B.J.Christensen, Interest Rate Dynamics and Consistent Forward
    Rate Curves, Mathematical Finance 9 (1999), 323–348.
 7. F. Black, E. Derman, and W. Toy, A One Factor Model of Interest Rates and its
    Application to Treasury Bond Options, Financial Analysts Journal 46 (1990),
    33–39.
 8. F. Black and M. Scholes, The Pricing of Options and Corporate Liabilities,
    Journal of Political Economy 81 (1973), 637–654.
 9. P. Boyle and K. S. Tan, Lure of the Linear, Risk 7 (1994), 43–46.
10. G. Brown and K. J. Toft, Constructing Binomial Trees from Multiple Implied
    Probability Distributions, The Journal of Derivatives 7 (1999), no. 2, 83–100.
11. Ren-Raw Chen, Understanding and Managing Interest Risks, World Scientiﬁc
    Pub Co Inc, Singapore, 1996.
12. M. Chesney and H. Loubergé, Les Options de Change, Presses Universitaires de
    France, Paris, 1992.
13. N. Chriss, Transatlantic Trees, RISK Magazine (1996).
14. N. A. Chriss, Black Scholes and Beyond: Option Pricing Models, McGraw-Hill,
    New York, 1996.
15. Kai Lai Chung, A Course in Probability Theory, 3rd ed., Academic Press, San
    Diego, USA, 2001.
16. Vašek Chvátal, Linear Programming, W.H.Freeman and Co., New York, 1983.
17. T. E. Copeland and V. Antikarov, Real Options: A Practitioner’s Guide, 1st
    ed., Thomson Texere, New York, Feb. 2001.
18. J. C. Cox, S. A. Ross, and M. Rubinstein, Option Pricing: A Simpliﬁed Ap-
    proach, Journal of Financial Economics 7 (1979), no. 3, 229–263.
298     References

19. J. C. Cox and M. Rubinstein, Options Markets, Prentice Hall, Englewood Cliﬀs,
    NJ, 1985.
20. R-A. Dana and M. Jeanblanc, Financial Markets in Continuous Time, Springer
    Finance, New York, 2003.
21. R. E. Dattatreya and K. Hotta, Advanced Interest Rate and Currency Swaps,
    Irwin Professional Publishing, Burr Ridge, IL, 1993.
22. M. H. A. Davis, Optimal Hedging with Basis Risk, Working Paper (2000).
23. O. de la Grandville, Bond Pricing and Portfolio Analysis, MIT Press, Boston,
    MA, 2001.
24. E. Derman and I. Kani, Volatility Smile and Its Implied Tree, (1994).
25. A. K. Dixit and R. S. Pindyck, Investment under Uncertainty, Princeton Uni-
    versity Press, Princeton, NJ, 1994, Reviewed by E. Schwartz in the Journal of
    Finance 49 (1994), 1924-1926.
26. D. Duﬃe, Futures Markets, Prentice Hall, Upper Saddle River, NJ, 1989.
27. R. Elliott and J. van der Hoek, Pricing Non-Tradeable Assets: Duality Methods,
    in R. Carmona (ed) “Indiﬀerence Pricing” Princeton University Press 2005.
28.         , Pricing Claims on Non Tradeable Assets, Contemporary Mathematics
    351 (2004), 103–114.
29. R. J. Elliott and P. E. Kopp, Mathematics of Financial Markets, 2nd ed.,
    Springer Verlag, New York, 2004.
30. H. U. Gerber and W. Neuhaus, Life Insurance Mathematics, 3rd ed., Springer
    Verlag, New York, 1997.
31. R. Geske, The Valuation of Compound Options, Journal of ﬁnancial economics
    7 (1979), 63–81.
32. V. Henderson, Valuation of Claims on Non-Traded Assets using Utility Maxi-
    mization, EFMA 2001 Lugano Meetings, May 2001.
33. T. S. Y. Ho and S. Lee, Term Structure Movements and Pricing Interest Rate
    Contingent Claims, Journal of Finance 41 (1986), no. 5, 1011–1029.
34.         , Duration, Futures Pricing and Immunization with Interest Rate Fu-
    tures, Working Paper 41 (1988).
35.         , Interest Rate Futures Options and Interest Rate Options, The Financial
    Review 25 (1990), 345–370.
36. J. Hull and A. White, Eﬃcient Procedures for valuing European and American
    Path-Dependent Options, Journal of Derivatives Fall (1993), 21–31.
37. J. C. Hull, Options, futures and Other Derivatives, 5th ed., Prentice Hall, Lon-
    don, 2003.
38. W. Hurlimann, On Binomial Models of the Term Structure of Interest Rates,
    Proceedings of the 5th AFIR International Colloquium, Brussels 1995, 833–858.
39. J. C. Jackwerth, Generalized Binomial Trees, The Journal of Derivatives 5
    (1997), no. 2, 7–17.
40. L. L. Jacque, Management and Control of Foreign Exchange Risk, Kluwer, 1996.
41. F. Jamshidian, Forward Induction and Construction of Yield Curve Diﬀusion
    Models, The Journal of Fixed Income (1991), 62–74.
42. R. Jarrow (ed.), Over the Rainbow : Development in Exotic Options and Com-
    plex Swaps, Risk Publications, London, UK, 1995.
43. R. Jarrow and M. Turnbull, Derivative Securities, 2nd ed., South-Western Pub-
    lishing, Philadelphia, PA, 2000.
44. B. A. Jensen, Binomial Models for the Term Structure of Interest, (2000).
45. H. A. Latane and R. J. Rendleman, Standard Deviations of Stock Price Ratios
    Implied in Option Prices, The Journal of Finance 31 (1976), no. 2, 369–381.
                                                                 References     299

46. K. G. Lim and D. Zhi, Pricing Options Using Implied Trees: Evidence from
    FTSE-100 Options, The Journal of Futures Markets 22 (2002), no. 7, 601–626.
47. R. H. Litzenberger and J. Rolfo, An International Study of Tax Eﬀects on Gov-
    ernment Bonds, The Journal of Finance 39 (1984), no. 1, 1–22.
48.         , An International Study of Tax Eﬀect on Government Bonds, The Jour-
    nal of Finance 39 (1993), no. 1, 1–22.
49. S. Mayhew, Implied Volatility - Literature Survey, Financial Analyst Journal
    (1995), 8–20.
50. J. H. McCulloch, Measuring the Term Structure of Interest Rates, Journal of
    Business 44 (1971), no. 1, 19–31.
51.         , On Tax Adjusted Yield Curves, The Journal of Finance 30 (1975),
    811–830.
52.         , The Tax-Adjusted Yield Curve, Journal of Finance 30 (1975), no. 3,
    811–830.
53. R. Merton, The Theory of Rational Option Pricing, Bell Journal of Economics
    and Management Sciences 4 (1973), 141–183.
54. R. C. Merton, On the Pricing of Corporate Debt: The Risk Structure of Interest
    Rates, Journal of Finance 2 (1974), 449–470.
55. I. G. Morgan and E. H. Neave, A Discrete Time Model for Pricing Treasury
    Bills, Forward, and Futures Contracts, Astin Bulletin 23 (1993), no. 1, 3–22.
56. M. Musiela and T. Zariphopoulou, A Valuation Algorithm for Incomplete Mar-
    kets, Conference of Bachelier Society of Finance, Crete, 2002.
57. S. Natenberg, Option Volatility and Pricing, 2nd ed., Irwin, 1994.
58. C. R. Nelson and A. F. Siegel, Parsimonious Modeling of Yield Curves, Journal
    of Business 60 (1987), no. 4, 473–489.
59. H. H. Panjer (ed.), Financial Economics: with Applications to Investments, In-
    surance, and Pensions, Society of Actuaries Foundation, 1999.
60. H. Pedersen, E. Shiu, and A. Thorlacius, Arbitrage-Free Pricing of Interest Rate
    Contingent Claims, Transactions of the Society of Actuaries 41 (1990), 231–279.
61. A. Pelsser and T. Vorst, The Binomial Model and the Greeks, Journal of Deriva-
    tives 1 (1994), no. 3, 45–49.
62. S. Pliska, Introduction to Mathematical Finance: Discrete Time Models, Black-
    well, Oxford, U.K., Malden, MA., 1997.
63. Jr. R. J. Rendleman and B. J. Bartter, Two-State Option Pricing, The Journal
    of Finance 34 (1979), no. 5, 1093–1110.
64. P. Ritchken and K. Boenawan, On Arbitrage-Free Pricing of Interest Rate Con-
    tingent Claims, Journal of Finance 45 (1990), no. 1, 259–264.
65. M. Rubinstein, Implied Binomial Trees, The Journal of Finance 49 (1994), no. 3,
    771–818, Papers and Proceedings Fifty-Fourth Annual Meeting of the American
    Finance Association, Boston, Massachusetts, January 3-5.
66.         , As Simple as One, Two, Three, RISK (1995).
67. K. Sandmann and D. Sondermann, A Term Structure Model and the Pricing of
    Interest Rate Derivatives, Universitaet Bonn: Discussion Paper B-180 (1991).
68.         , A Term Structure Model and the Pricing of Interest Rate Derivatives,
    The Review of Futures Markets 12 (1993), no. 2, 391–423.
69. E. Schwartz, Book Review: Investment Under Uncertainty, Journal of Finance
    49 (1994), no. 5, 1924–1926.
70. W. E. Sharpe, Investments, Prentice-Hall Inc., Englewood Cliﬀs, N.J., 1978.
71. M. Sherris, Money and Capital Markets: Pricing Yields and Analysis, 2nd ed.,
    Allen and Unwin Pty Ltd, 1997.
300    References

72. G. Sick, Book Review: Real Options (Book) by L. Trigeorgis, Journal of Finance
    51 (1996), no. 5, 1974–1977.
73. J. E. Smith and R. F. Nau, Valuing Risky Projects: Option Pricing Theory and
    Decision Analysis, Management Science 41 (1995), no. 5, 795–816.
74. A. Street, Stuck up a Ladder, Risk (1992).
75. L. Trigeorgis, Real Options: Managerial Flexibility and Strategy in Resource
    Allocation, MIT Press, 1996, Reviewed by G. Sick in the 51 (1996), 1974-1977.
76. O. A. Vasicek and H. G. Fong, Term Structure Modeling using Exponential
    Splines, Proceedings of American Finance Association Meeting, December 1981.
77. J. von Neumann and O. Morgenstern, The Theory of Games and Economic
    Behaviour, 1947.
78. W. L. Winston, Operations research - applications and algorithms, 3 ed.,
    Duxbury Press, Belmont, California, 1994.
79. P. G. Zhang, Exotic Options: A Guide to Second Generation Options, World
    Scientiﬁc Publishing, Singapore, 1997.
Index




AA market, 176                             complementary, 74, 237
abandonment, 235                         bisection method, 194, 274
arbitrage, 1                             Black and Scholes formula, 26
  type one, 24                           Black and Scholes formula, 76
  type two, 24                           Black, Derman and Toy model, 58, 193
Arrow-Debreu security, 46                Bob Arnold, 183
attainable claims, 250                   bond
                                           zero-coupon/T-zero, 56
backward induction pricing formula, 67   bonds
bank bill swap rate (BBSW), 176            defaultable, 205
Barle and Cakici approach, 145           Bretton-Woods agreement, 45
barrier option, 99                       butterﬂy spread, 286
  barrier monitoring, 100
  customization, 100                     CAD, 45
  down-and-in put, 103                   call-put parity, 27
  down-and-out call, 103                 capital asset pricing model, 24
  knock-in, 99                           certainty equivalence, 214
  knock-out, 99                          clearing house, 90
  speciﬁcations, 100                     complete the market, 251
  up-and-in, 101                         compound options, 79
  up-and-in call, 104                    Copeland and Antikarov, 223
  up-and-out, 100                        Cox-Ross-Rubinstein
  up-and-out call, 105                      model, 25
BBSW, 176                                   model with dividends, 129
Bernoulli trials, 237                       multiperiod model, 68
Berry - Esséen Theorem, 245                option pricing formula, 73
Berry-Esséen Theorem, 77                creditworthy, 171, 181
beta, 23                                 cubic splines, 289
bid-ask spreads, 250
binomial asset pricing model, 13         delta, 121
  multiperiod, 65, 76                    derived asset, 14
  one step, 21                           Derman-Kani method, 137
  one-step, 75                           divisible market, 16
binomial distribution function, 75       duality theorem, 256, 261
302     Index

early-exercise premium, 32, 98         Kuhn-Tucker theorem, 253
electricity supply problem, 242
ex-dividend date, 127                  law of one price, 2
exchange rates, 45                     linear regression, 36
   direct/American quotation, 45
   futures contract, 52                MAD, 223
   inverse/European quotation, 45      margin account, 52, 90
exercise date, 5                       margin call, 90
expected utility, 214                  market players
expiration date, 5                      arbitrageurs, 9
                                        hedgers, 9
Farkas’ lemma, 279                      speculators, 9
ﬁrst fundamental theorem of ﬁnance,    marking to market, 91
      257                              martingale, 160
forward                                model-independent formulae, 27
  contract, 3, 41, 89                  Morgan and Neave model, 191
  exchange rate contract, 50
  price, 41                            Nelson-Siegel approach, 183
  rate, 171                            Newton-Raphson method, 194, 273
futures contract, 4, 90                nonrecombining binomial tree, 109
  default, 94                          normal distribution function, 244
  equivalence with forward price, 95
                                       one, two, three algorithm, 155
gamma, 123                             option, 5
generalized binomial trees, 168          American, 5, 97
Greeks, 126                              American call, 31
                                         American put, 32
Heath-Jarrow-Morton framework, 172       Asian/average rate, 109
hedge ratio, 82                          Bermuda, 7
hedging, 81                              binary, 79
Ho and Lee model, 57, 172, 184           booster, 107
Hull and White method, 115               call, 5
Hull-White interest rate model, 184      chooser/as you like it, 78
                                         compound, 79
implied binomial tree, 153               contingent premium/pay later, 43
implied volatility surface, 145          European, 5
implied volatility trees, 135            exchange traded, 7
in-the-money, 10                         exotic, 43
indiﬀerence price, 216                   ﬂoating strike, 112
   asking, 216                           forward start, 79
   bid, 216                              ladder, 119
interest rate, 14                        lookback, 113
   derivative, 55                        lower bounds, 30
   parity (covered), 51                  partial barrier, 107
interpolation, 150                       perpetual, 5
                                         put, 5
Jackwerth’s Extension, 168               real, 210, 235
Jamshidian’s forward induction           strike, 7
  formula, 67, 69                        style, 7
                                                                Index    303

  vanilla/plain, 43                    secant method, 195
over the counter/OTC, 49               second fundamental theorem
                                          of ﬁnance, 264
payer-swap, 175                        self-ﬁnancing, 81
Pedersen, Shiu and Thorlacius model,   short selling, 16
     189                               splines, 289
present value, 56                      spot rate, 172
put-call parity, 27                    state price, 47, 69
                                       subreplication, 249
quadratic linear programming, 161
                                       superreplication, 249
real options, 209                      swap rate, 175
   growth/to expand, 212
   to abandon, 213, 223                T-forward exchange rate, 50
   to contract, 212, 224               theta, 124
   to default, 211                     tradeable asset, 13
   to defer, 211                       transaction costs, 266
   to expand, 225, 226
   to shut down, 212                   underlying, 6
receiver-swap, 175                     USD, 45
relative pricing, 14, 19
replicating portfolio, 19              van der Hoek’s 1998 method, 162, 285
resettlement, 91                       vega, 125, 273
return, 21                             volatility
rho, 125                                 absolute and proportional, 195
risk avertors, 9                         estimation, 269
risk-adjusted, 23                        historical, 270
risk-neutral, 23                         implied, 272
   expectation, 19                       smile, 150
   probability, 19, 21
Rubinstein’s 1994 method, 161          yield to maturity, 171



---
normalized_id: shared-pdf-reference-copula-methods-in-finance
exam_code: SHARED
material_scope: copula methods in finance.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Copula Methods in Finance.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-copula-methods-in-finance

Copula Methods in Finance
Wiley Finance Series

Investment Risk Management
   Yen Yee Chong
Understanding International Bank Risk
   Andrew Fight
Global Credit Management: An Executive Summary
   Ron Wells
Currency Overlay
   Neil Record
Fixed Income Strategy: A Practitioners Guide to Riding the Curve
   Tamara Mast Henderson
Active Investment Management
   Charles Jackson
Option Theory
   Peter James
The Simple Rules of Risk: Revisiting the Art of Risk Management
   Erik Banks
Capital Asset Investment: Strategy, Tactics and Tools
   Anthony F. Herbst
Brand Assets
   Tony Tollington
Swaps and other Derivatives
   Richard Flavell
Currency Strategy: A Practitioner’s Guide to Currency Trading, Hedging and Forecasting
   Callum Henderson
The Investor’s Guide to Economic Fundamentals
   John Calverley
Measuring Market Risk
   Kevin Dowd
An Introduction to Market Risk Management
   Kevin Dowd
Behavioural Finance
   James Montier
Asset Management: Equities Demystiﬁed
   Shanta Acharya
An Introduction to Capital Markets: Products, Strategies, Participants
   Andrew M. Chisholm
Hedge Funds: Myths and Limits
   François-Serge Lhabitant
The Manager’s Concise Guide to Risk
   Jihad S. Nader
Securities Operations: A Guide to Trade and Position Management
   Michael Simmons
Modeling, Measuring and Hedging Operational Risk
   Marcelo Cruz
Monte Carlo Methods in Finance
   Peter Jäckel
Building and Using Dynamic Interest Rate Models
   Ken Kortanek and Vladimir Medvedev
Structured Equity Derivatives: The Deﬁnitive Guide to Exotic Options and Structured Notes
   Harry Kat
Advanced Modelling in Finance Using Excel and VBA
   Mary Jackson and Mike Staunton
Operational Risk: Measurement and Modelling
   Jack King
Advanced Credit Risk Analysis: Financial Approaches and Mathematical Models to Assess, Price and Manage Credit Risk
   Didier Cossin and Hugues Pirotte
Risk Management and Analysis vol. 1: Measuring and Modelling Financial Risk
   Carol Alexander (ed.)
Risk Management and Analysis vol. 2: New Markets and Products
   Carol Alexander (ed.)
Copula Methods in Finance



     Umberto Cherubini
       Elisa Luciano
            and
      Walter Vecchiato
Copyright 
          c 2004              John Wiley & Sons Ltd, The Atrium, Southern Gate, Chichester,
                              West Sussex PO19 8SQ, England

                              Telephone (+44) 1243 779777

Email (for orders and customer service enquiries): cs-books@wiley.co.uk
Visit our Home Page on www.wileyeurope.com or www.wiley.com

All Rights Reserved. No part of this publication may be reproduced, stored in a retrieval system or transmitted in
any form or by any means, electronic, mechanical, photocopying, recording, scanning or otherwise, except under
the terms of the Copyright, Designs and Patents Act 1988 or under the terms of a licence issued by the
Copyright Licensing Agency Ltd, 90 Tottenham Court Road, London W1T 4LP, UK, without the permission in
writing of the Publisher. Requests to the Publisher should be addressed to the Permissions Department, John
Wiley & Sons Ltd, The Atrium, Southern Gate, Chichester, West Sussex PO19 8SQ, England, or emailed to
permreq@wiley.co.uk, or faxed to (+44) 1243 770620.

This publication is designed to provide accurate and authoritative information in regard to the subject matter
covered. It is sold on the understanding that the Publisher is not engaged in rendering professional services. If
professional advice or other expert assistance is required, the services of a competent professional should be
sought.

Other Wiley Editorial Ofﬁces

John Wiley & Sons Inc., 111 River Street, Hoboken, NJ 07030, USA

Jossey-Bass, 989 Market Street, San Francisco, CA 94103-1741, USA

Wiley-VCH Verlag GmbH, Boschstr. 12, D-69469 Weinheim, Germany

John Wiley & Sons Australia Ltd, 33 Park Road, Milton, Queensland 4064, Australia

John Wiley & Sons (Asia) Pte Ltd, 2 Clementi Loop #02-01, Jin Xing Distripark, Singapore 129809

John Wiley & Sons Canada Ltd, 22 Worcester Road, Etobicoke, Ontario, Canada M9W 1L1

Wiley also publishes its books in a variety of electronic formats. Some content that appears
in print may not be available in electronic books.



Library of Congress Cataloging-in-Publication Data

Cherubini, Umberto.
 Copula methods in ﬁnance / Umberto Cherubini, Elisa Luciano, and Walter Vecchiato.
    p. cm.
 ISBN 0-470-86344-7 (alk. paper)
 1. Finance–Mathematical models. I. Luciano, Elisa. II. Vecchiato, Walter. III. Title.

 HG106.C49 2004
 332 .01 519535 – dc22
                                                                                2004002624

British Library Cataloguing in Publication Data

A catalogue record for this book is available from the British Library

ISBN 0-470-86344-7

Typeset in 10/12pt Times by Laserwords Private Limited, Chennai, India
Printed and bound in Great Britain by TJ International, Padstow, Cornwall, UK
This book is printed on acid-free paper responsibly manufactured from sustainable forestry
in which at least two trees are planted for each one used for paper production.
                                     Contents


Preface                                                                    xi

List of Common Symbols and Notations                                       xv

1 Derivatives Pricing, Hedging and Risk Management: The State of the Art   1
   1.1    Introduction                                                      1
   1.2    Derivative pricing basics: the binomial model                     2
          1.2.1 Replicating portfolios                                      3
          1.2.2 No-arbitrage and the risk-neutral probability measure       3
          1.2.3 No-arbitrage and the objective probability measure          4
          1.2.4 Discounting under different probability measures            5
          1.2.5 Multiple states of the world                                6
   1.3    The Black–Scholes model                                           7
          1.3.1 Ito’s lemma                                                 8
          1.3.2 Girsanov theorem                                            9
          1.3.3 The martingale property                                    11
          1.3.4 Digital options                                            12
   1.4    Interest rate derivatives                                        13
          1.4.1 Afﬁne factor models                                        13
          1.4.2 Forward martingale measure                                 15
          1.4.3 LIBOR market model                                         16
   1.5    Smile and term structure effects of volatility                   18
          1.5.1 Stochastic volatility models                               18
          1.5.2 Local volatility models                                    19
          1.5.3 Implied probability                                        20
   1.6    Incomplete markets                                               21
          1.6.1 Back to utility theory                                     22
          1.6.2 Super-hedging strategies                                   23
   1.7    Credit risk                                                      27
          1.7.1 Structural models                                          28
          1.7.2 Reduced form models                                        31
          1.7.3 Implied default probabilities                              33
vi                                                                                  Contents

           1.7.4 Counterparty risk                                                       36
     1.8   Copula methods in ﬁnance: a primer                                            37
           1.8.1 Joint probabilities, marginal probabilities and copula functions        38
           1.8.2 Copula functions duality                                                39
           1.8.3 Examples of copula functions                                            39
           1.8.4 Copula functions and market comovements                                 41
           1.8.5 Tail dependence                                                         42
           1.8.6 Equity-linked products                                                  43
           1.8.7 Credit-linked products                                                  44

2 Bivariate Copula Functions                                                             49
     2.1   Deﬁnition and properties                                                      49
     2.2   Fréchet bounds and concordance order                                         52
     2.3   Sklar’s theorem and the probabilistic interpretation of copulas               56
           2.3.1 Sklar’s theorem                                                         56
           2.3.2 The subcopula in Sklar’s theorem                                        59
           2.3.3 Modeling consequences                                                   60
           2.3.4 Sklar’s theorem in ﬁnancial applications: toward a
                   non-Black–Scholes world                                               61
     2.4   Copulas as dependence functions: basic facts                                  70
           2.4.1 Independence                                                            70
           2.4.2 Comonotonicity                                                          70
           2.4.3 Monotone transforms and copula invariance                               72
           2.4.4 An application: VaR trade-off                                           73
     2.5   Survival copula and joint survival function                                   75
           2.5.1 An application: default probability with exogenous shocks               78
     2.6   Density and canonical representation                                          81
     2.7   Bounds for the distribution functions of sum of r.v.s                         84
           2.7.1 An application: VaR bounds                                              85
     2.8   Appendix                                                                      87

3 Market Comovements and Copula Families                                                 95
     3.1   Measures of association                                                       95
           3.1.1 Concordance                                                             95
           3.1.2 Kendall’s τ                                                             97
           3.1.3 Spearman’s ρS                                                          100
           3.1.4 Linear correlation                                                     103
           3.1.5 Tail dependence                                                        108
           3.1.6 Positive quadrant dependency                                           110
     3.2   Parametric families of bivariate copulas                                     112
           3.2.1 The bivariate Gaussian copula                                          112
           3.2.2 The bivariate Student’s t copula                                       116
           3.2.3 The Fréchet family                                                    118
           3.2.4 Archimedean copulas                                                    120
           3.2.5 The Marshall–Olkin copula                                              128
Contents                                                                                  vii

4 Multivariate Copulas                                                                   129
   4.1     Deﬁnition and basic properties                                                129
   4.2     Fréchet bounds and concordance order: the multidimensional case              133
   4.3     Sklar’s theorem and the basic probabilistic interpretation: the multidimen-
           sional case                                                                   135
           4.3.1 Modeling consequences                                                   138
   4.4     Survival copula and joint survival function                                   140
   4.5     Density and canonical representation of a multidimensional copula             144
   4.6     Bounds for distribution functions of sums of n random variables               145
   4.7     Multivariate dependence                                                       146
   4.8     Parametric families of n-dimensional copulas                                  147
           4.8.1 The multivariate Gaussian copula                                        147
           4.8.2 The multivariate Student’s t copula                                     148
           4.8.3 The multivariate dispersion copula                                      149
           4.8.4 Archimedean copulas                                                     149

5 Estimation and Calibration from Market Data                                            153
   5.1     Statistical inference for copulas                                             153
   5.2     Exact maximum likelihood method                                               154
           5.2.1 Examples                                                                155
   5.3     IFM method                                                                    156
           5.3.1 Application: estimation of the parametric copula for market data        158
   5.4     CML method                                                                    160
           5.4.1 Application: estimation of the correlation matrix for a Gaussian
                    copula                                                               160
   5.5     Non-parametric estimation                                                     161
           5.5.1 The empirical copula                                                    161
           5.5.2 Kernel copula                                                           162
   5.6     Calibration method by using sample dependence measures                        172
   5.7     Application                                                                   174
   5.8     Evaluation criteria for copulas                                               176
   5.9     Conditional copula                                                            177
           5.9.1 Application to an equity portfolio                                      178

6 Simulation of Market Scenarios                                                         181
   6.1     Monte Carlo application with copulas                                          181
   6.2     Simulation methods for elliptical copulas                                     181
   6.3     Conditional sampling                                                          182
           6.3.1 Clayton n-copula                                                        184
           6.3.2 Gumbel n-copula                                                         185
           6.3.3 Frank n-copula                                                          186
   6.4     Marshall and Olkin’s method                                                   188
   6.5     Examples of simulations                                                       191

7 Credit Risk Applications                                                               195
   7.1     Credit derivatives                                                            195
viii                                                                                  Contents

       7.2   Overview of some credit derivatives products                                 196
             7.2.1 Credit default swap                                                    196
             7.2.2 Basket default swap                                                    198
             7.2.3 Other credit derivatives products                                      199
             7.2.4 Collateralized debt obligation (CDO)                                   199
       7.3   Copula approach                                                              202
             7.3.1 Review of single survival time modeling and calibration                202
             7.3.2 Multiple survival times: modeling                                      203
             7.3.3 Multiple defaults: calibration                                         205
             7.3.4 Loss distribution and the pricing of CDOs                              206
             7.3.5 Loss distribution and the pricing of homogeneous basket default
                    swaps                                                                 208
       7.4   Application: pricing and risk monitoring a CDO                               210
             7.4.1 Dow Jones EuroStoxx50 CDO                                              210
             7.4.2 Application: basket default swap                                       210
             7.4.3 Empirical application for the EuroStoxx50 CDO                          212
             7.4.4 EuroStoxx50 pricing and risk monitoring                                216
             7.4.5 Pricing and risk monitoring of the basket default swaps                221
       7.5   Technical appendix                                                           225
             7.5.1 Derivation of a multivariate Clayton copula density                    225
             7.5.2 Derivation of a 4-variate Frank copula density                         226
             7.5.3 Correlated default times                                               227
             7.5.4 Variance–covariance robust estimation                                  228
             7.5.5 Interest rates and foreign exchange rates in the analysis              229

8 Option Pricing with Copulas                                                             231
       8.1   Introduction                                                                 231
       8.2   Pricing bivariate options in complete markets                                232
             8.2.1 Copula pricing kernels                                                 232
             8.2.2 Alternative pricing techniques                                         235
       8.3   Pricing bivariate options in incomplete markets                              239
             8.3.1 Fréchet pricing: super-replication in two dimensions                  240
             8.3.2 Copula pricing kernel                                                  241
       8.4   Pricing vulnerable options                                                   243
             8.4.1 Vulnerable digital options                                             244
             8.4.2 Pricing vulnerable call options                                        246
             8.4.3 Pricing vulnerable put options                                         248
             8.4.4 Pricing vulnerable options in practice                                 250
       8.5   Pricing rainbow two-color options                                            253
             8.5.1 Call option on the minimum of two assets                               254
             8.5.2 Call option on the maximum of two assets                               257
             8.5.3 Put option on the maximum of two assets                                258
             8.5.4 Put option on the minimum of two assets                                261
             8.5.5 Option to exchange                                                     262
             8.5.6 Pricing and hedging rainbows with smiles: Everest notes                263
       8.6   Pricing barrier options                                                      267
             8.6.1 Pricing call barrier options with copulas: the general framework       268
Contents                                                              ix

           8.6.2 Pricing put barrier option: the general framework   270
           8.6.3 Specifying the trigger event                        272
           8.6.4 Calibrating the dependence structure                276
           8.6.5 The reﬂection copula                                276
   8.7     Pricing multivariate options: Monte Carlo methods         278
           8.7.1 Application: basket option                          279

Bibliography                                                         281

Index                                                                289
                                        Preface

Copula functions represent a methodology which has recently become the most signiﬁcant
new tool to handle in a ﬂexible way the comovement between markets, risk factors and
other relevant variables studied in ﬁnance. While the tool is borrowed from the theory
of statistics, it has been gathering more and more popularity both among academics and
practitioners in the ﬁeld of ﬁnance principally because of the huge increase of volatility and
erratic behavior of ﬁnancial markets. These new developments have caused standard tools of
ﬁnancial mathematics, such as the Black and Scholes formula, to become suddenly obsolete.
The reason has to be traced back to the overwhelming evidence of non-normality of the
probability distribution of ﬁnancial assets returns, which has become popular well beyond
the academia and in the dealing rooms. Maybe for this reason, and these new environments,
non-normality has been described using curious terms such as the “smile effect”, which
traders now commonly use to deﬁne strategies, and the “fat-tails” problem, which is the
major topic of debate among risk managers and regulators. The result is that nowadays no
one would dare to address any ﬁnancial or statistical problem connected to ﬁnancial markets
without taking care of the issue of departures from normality.
   For one-dimensional problems many effective answers have been given, both in the ﬁeld
of pricing and risk measurement, even though no model has emerged as the heir of the
traditional standard models of the Gaussian world.
   On top of that, people in the ﬁeld have now begun to realize that abandoning the normality
assumption for multidimensional problems was a much more involved issue. The multidi-
mensional extension of the techniques devised at the univariate level has also grown all the
more as a necessity in the market practice. On the one hand, the massive use of derivatives
in asset management, in particular from hedge funds, has made the non-normality of returns
an investment tool, rather than a mere statistical problem: using non-linear derivatives any
hedge fund can design an appropriate probability distribution for any market. As a counter-
part, it has the problem of determining the joint probability distribution of those exposures
to such markets and risk factors. On the other hand, the need to reach effective diversiﬁ-
cation has led to new investment products, bound to exploit the credit risk features of the
assets. It is particularly for the evaluation of these new products, such as securitized assets
(asset-backed securities, such as CDO and the like) and basket credit derivatives (nth to
default options) that the need to account for comovement among non-normally distributed
variables has become an unavoidable task.
   Copula functions have been ﬁrst applied to the solution of these problems, and have
been later applied to the multidimensional non-normality problem throughout all the ﬁelds
xii                                                                                     Preface

in mathematical ﬁnance. In fact, the use of copula functions enables the task of specify-
ing the marginal distributions to be decoupled from the dependence structure of variables.
This allows us to exploit univariate techniques at the ﬁrst step, and is directly linked to
non-parametric dependence measures at the second step. This avoids the ﬂaws of linear
correlation that have, by now, become well known.
   This book is an introduction to the use of copula functions from the viewpoint of mathe-
matical ﬁnance applications. Our method intends to explain copulas by means of applications
to major topics such as asset pricing, risk management and credit risk analysis. Our target
is to enable the readers to devise their own applications, following the strategies illustrated
throughout the book. In the text we concentrate all the information concerning mathematics,
statistics and ﬁnance that one needs to build an application to a ﬁnancial problem. Examples
of applications include the pricing of multivariate derivatives and exotic contracts (basket,
rainbow, barrier options and so on), as well as risk-management applications. Beyond that,
references to ﬁnancial topics and market data are pervasively present throughout the book,
to make the mathematical and statistical concepts, and particularly the estimation issues,
easier for the reader to grasp.
   The audience target of our work consists of academics and practitioners who are eager
to master and construct copula applications to ﬁnancial problems. For this applied focus,
this book is, to the best of our knowledge, the ﬁrst initiative in the market. Of course, the
novelty of the topic and the growing number of research papers on the subject presented at
ﬁnance conferences all over the world allows us to predict that our book will not remain the
only one for too long, and that, on the contrary, this topic will be one of the major issues
to be studied in the mathematical ﬁnance ﬁeld in the near future.

Outline of the book

Chapter 1 reviews the state of the art in asset pricing and risk management, going over the
major frontier issues and providing justiﬁcations for introducing copula functions.
   Chapter 2 introduces the reader to the bivariate copula case. It presents the mathemat-
ical and probabilistic background on which the applications are built and gives some ﬁrst
examples in ﬁnance.
   Chapter 3 discusses the ﬂaws of linear correlation and highlights how copula functions,
along with non-parametric association measures, may provide a much more ﬂexible way to
represent market comovements.
   Chapter 4 extends the technical tools to a multivariate setting. Readers who are not already
familiar with copulas are advised to skip this chapter at ﬁrst reading (or to read it at their
own risk!).
   Chapter 5 explains the statistical inference for copulas. It covers both methodological
aspects and applications from market data, such as calibration of actual risk factors comove-
ments and VaR measurement. Here the readers can ﬁnd details on the classical estimation
methods as well as on most recent approaches, such as the conditional copula.
   Chapter 6 is devoted to an exhaustive account of simulation algorithms for a large class
of multivariate copulas. It is enhanced by ﬁnancial examples.
   Chapter 7 presents credit risk applications, besides giving a brief introduction to credit
derivative markets and instruments. It applies copulas to the pricing of complex credit
structures such as basket default swaps and CDOs. It is shown how to calibrate the pricing
Preface                                                                                  xiii

model to market data. Its sensitivity with respect to the copula choice is accounted for in
concrete examples.
  Chapter 8 covers option pricing applications. Starting from the bivariate pricing kernel,
copulas are used to evaluate counterparty risk in derivative transactions and bivariate rain-
bow options, such as options to exchange. We also show how the barrier option pricing
problem can be cast in a bivariate setting and can be represented in terms of copulas.
Finally, the estimation and simulation techniques presented in Chapters 5 and 6 are put at
work to solve the evaluation problem of a multivariate basket option.
                             1
          Derivatives Pricing, Hedging and Risk
                      Management:
                   The State of the Art

                               1.1   INTRODUCTION
The purpose of this chapter is to give a brief review of the basic concepts used in ﬁnance
for the purpose of pricing contingent claims. As our book is focusing on the use of copula
functions in ﬁnancial applications, most of the content of this chapter should be considered
as a prerequisite to the book. Readers who are not familiar with the concepts exposed
here are referred for a detailed treatment to standard textbooks on the subject. Here our
purpose is mainly to describe the basic tools that represent the state of the art of ﬁnance,
as well as general problems, and to provide a brief, mainly non-technical, introduction to
copula functions and the reason why they may be so useful in ﬁnancial applications. It
is particularly important that we address three hot issues in ﬁnance. The ﬁrst is the non-
normality of returns, which makes the standard Black and Scholes option pricing approach
obsolete. The second is the incomplete market issue, which introduces a new dimension
to the asset pricing problem – that of the choice of the right pricing kernel both in asset
pricing and risk management. The third is credit risk, which has seen a huge development
of products and techniques in asset pricing.
   This discussion would naturally lead to a ﬁrst understanding of how copula functions can
be used to tackle some of these issues. Asset pricing and risk evaluation techniques rely
heavily on tools borrowed from probability theory. The prices of derivative products may be
written, at least in the standard complete market setting, as the discounted expected values
of their future pay-offs under a speciﬁc probability measure derived from non-arbitrage
arguments. The risk of a position is instead evaluated by studying the negative tail of the
probability distribution of proﬁt and loss. Since copula functions provide a useful way to
represent multivariate probability distributions, it is no surprise that they may be of great
assistance in ﬁnancial applications. More than this, one can even wonder why it is only
recently that they have been discovered and massively applied in ﬁnance. The answer has
to do with the main developments of market dynamics and ﬁnancial products over the last
decade of the past century.
   The main change that has been responsible for the discovery of copula methods in ﬁnance
has to do with the standard hypothesis assumed for the stochastic dynamics of the rates of
returns on ﬁnancial products. Until the 1987 crash, a normal distribution for these returns
was held as a reasonable guess. This concept represented a basic pillar on which most of
modern ﬁnance theory has been built. In the ﬁeld of pricing, this assumption corresponds
to the standard Black and Scholes approach to contingent claim evaluation. In risk manage-
ment, assuming normality leads to the standard parametric approach to risk measurement
that has been diffused by J.P. Morgan under the trading mark of RiskMetrics since 1994,
and is still in use in many ﬁnancial institutions: due to the assumption of normality, the
2                                                                      Copula Methods in Finance

approach only relies on volatilities and correlations among the returns on the assets in the
portfolio. Unfortunately, the assumption of normally distributed returns has been severely
challenged by the data and the reality of the markets. On one hand, even evidence on the
returns of standard ﬁnancial products such as stocks and bonds can be easily proved to
be at odds with this assumption. On the other hand, ﬁnancial innovation has spurred the
development of products that are speciﬁcally targeted to provide non-normal returns. Plain
vanilla options are only the most trivial example of this trend, and the development of the
structured ﬁnance business has made the presence of non-linear products, both plain vanilla
and exotic, a pervasive phenomenon in bank balance sheets. This trend has even more been
fueled by the pervasive growth in the market for credit derivatives and credit-linked prod-
ucts, whose returns are inherently non-Gaussian. Moreover, the task to exploit the beneﬁts
of diversiﬁcation has caused both equity-linked and credit-linked products to be typically
referred to baskets of stocks or credit exposures. As we will see throughout this book, tack-
ling these issues of non-normality and non-linearity in products and portfolios composed
by many assets would be a hopeless task without the use of copula functions.

    1.2 DERIVATIVE PRICING BASICS: THE BINOMIAL MODEL
Here we give a brief description of the basic pillar behind pricing techniques, that is the
use of risk-neutral probability measures to evaluate contingent claims, versus the objective
measure observed from the time series of market data. We will see that the existence of
such risk measures is directly linked to the basic pricing principle used in modern ﬁnance to
evaluate ﬁnancial products. This requirement imposes that prices must ensure that arbitrage
gains, also called “free lunches”, cannot be obtained by trading the securities in the market.
An arbitrage deal is a trading strategy yielding positive returns at no risk. Intuitively, the
idea is that if we can set up two positions or trading strategies giving identical pay-offs at
some future date, they must also have the same value prior to that date, otherwise one could
exploit arbitrage proﬁts by buying the cheaper and selling the more expensive before that
date, and unwinding the deal as soon as they are worth the same. Ruling out arbitrage gains
then imposes a relationship among the prices of the ﬁnancial assets involved in the trading
strategies. These are called “fair” or “arbitrage-free” prices. It is also worth noting that these
prices are not based on any assumption concerning utility maximizing behavior of the agents
or equilibrium of the capital markets. The only requirement concerning utility is that traders
“prefer more to less”, so that they would be ready to exploit whatever arbitrage opportunity
was available in the market. In this section we show what the no-arbitrage principle implies
for the risk-neutral measure and the objective measure in a discrete setting, before extending
it to a continuous time model.
   The main results of modern asset pricing theory, as well as some of its major problems,
can be presented in a very simple form in a binomial model. For the sake of simplicity,
assume that the market is open on two dates, t and T , and that the information structure
of the economy is such that, at the future time T , only two states of the world {H, L} are
possible. A risky asset is traded on the market at the current time t for a price equal to S (t),
while at time T the price is represented by a random variable taking values {S (H ) , S (L)}
in the two states of the world. A risk-free asset gives instead a value equal to 1 unit of
currency at time T no matter which state of the world occurs: we assume that the price at
time t of the risk-free asset is equal to B. Our problem is to price another risky asset taking
Derivatives Pricing, Hedging and Risk Management                                            3

values {G (H ) , G (L)} at time T . As we said before, the price g (t) must be consistent with
the prices S (t) and B observed on the market.

1.2.1 Replicating portfolios

In order to check for arbitrage opportunities, assume that we construct a position in g
units of the risky security S (t) and g units of the risk-free asset in such a way that at
time T

                                 g S (H ) + g = G (H )
                                  g S (L) + g = G (L)

So, the portfolio has the same value of asset G at time T . We say that it is the “replicating
portfolio” of asset G. Obviously we have

                                    G (H ) − G (L)
                             g =
                                    S (H ) − S (L)
                                    G (L) S (H ) − G (H ) S (L)
                             g =
                                          S (H ) − S (L)

1.2.2 No-arbitrage and the risk-neutral probability measure
If we substitute g and g in the no-arbitrage equation

                                  g (t) = g S (t) + Bg

we may rewrite the price, after naive algebraic manipulation, as

                           g (t) = B [QG (H ) + (1 − Q) G (L)]

with

                                         S (t) /B − S (L)
                                    Q≡
                                          S (H ) − S (L)

  Notice that we have

                                                   S (t)
                           0 < Q < 1 ⇔ S (L) <           < S (H )
                                                    B

  It is straightforward to check that if the inequality does not hold there are arbitrage
opportunities: in fact, if, for example, S (t) /B ⩽ S (L) one could exploit a free-lunch by
borrowing and buying the asset. So, in the absence of arbitrage opportunities it follows that
0 < Q < 1, and Q is a probability measure. We may then write the no-arbitrage price as

                                    g (t) = BEQ [G (T )]
4                                                                                    Copula Methods in Finance

   In order to rule out arbitrage, then, the above relationship must hold for all the contingent
claims and the ﬁnancial products in the economy. In fact, even for the risky asset S we
must have

                                             S (t) = BEQ [S (T )]

  Notice that the probability measure Q was recovered from the no-arbitrage requirement
only. To understand the nature of this measure, it is sufﬁcient to compute the expected rate
of return of the different assets under this probability. We have that
                                                       
                           G (T )               S (T )         1
                     EQ           − 1 = EQ             −1 = −1≡i
                            g (t)               S (t)          B

where i is the interest rate earned on the risk-free asset for an investment horizon from t
to T . So, under the measure Q all of the risky assets in the economy are expected to yield
the same return as the risk-free asset. For this reason such a measure is called risk-neutral
probability.
   Alternatively, the measure can be characterized in a more technical sense in the following
way. Let us assume that we measure each risky asset in the economy using the risk-free
asset as numeraire. Recalling that the value of the riskless asset is B at time t and 1 at time
T , we have
                                                 
                             g (t)         G (T )
                                   = EQ             = EQ [G (T )]
                            B (t)          B (T )

A process endowed with this property (i.e. z (t) = EQ (z (T ))) is called a martingale. For
this reason, the measure Q is also called an equivalent martingale measure (EMM).1

1.2.3 No-arbitrage and the objective probability measure
For comparison with the results above, it may be useful to address the question of which
constraints are imposed by the no-arbitrage requirements on expected returns under the
objective probability measure. The answer to this question may be found in the well-known
arbitrage pricing theory (APT). Deﬁne the rates of return of an investment on assets S and
g over the horizon from t to T as

                                          G (T )                     S (T )
                                   ig ≡          −1           iS ≡          −1
                                          g (t)                      S (t)

and the rate of return on the risk-free asset as i ≡ 1/B − 1.
  The rate of returns on the risky assets are assumed to be driven by a linear data-generating
process

                                    ig = ag + bg f            iS = aS + bS f

where the risk factor f is taken with zero mean and unit variance with no loss of generality.

1 The term equivalent is a technical requirement referring to the fact that the risk-neutral measure and the objective
measure must agree on the same subset of zero measure events.
Derivatives Pricing, Hedging and Risk Management                                             5
                                     
   Of course this implies ag = E ig and aS = E (iS ). Notice that the expectation is now
taken under the original probability measure associated with the data-generating process
of the returns. We deﬁne this measure P . Under the same measure, of course, bg and bS
represent the standard deviations of the returns. Following a standard no-arbitrage argument
we may build a zero volatility portfolio from the two risky assets and equate its return to
that of the risk-free asset. This yields
                                      aS − i   ag − i
                                             =        =λ
                                        bS       bg

where λ is a parameter, which may be constant, time-varying or even stochastic, but has
to be the same for all the assets. This relationship, that avoids arbitrage gains, could be
rewritten as
                                                   
                         E (iS ) = i + λbS      E ig = i + λbg

   In words, the expected rate of return of each and every risky asset under the objective
measure must be equal to the risk-free rate of return plus a risk premium. The risk premium
is the product of the volatility of the risky asset times the market price of risk parameter λ.
Notice that in order to prevent arbitrage gains the key requirement is that the market price
of risk must be the same for all of the risky assets in the economy.

1.2.4 Discounting under different probability measures
The no-arbitrage requirement implies different restrictions under the objective probability
measures. The relationship between the two measures can get involved in more complex
pricing models, depending on the structure imposed on the dynamics of the market price
of risk. To understand what is going on, however, it may be instructive to recover this
relationship in a binomial setting. Assuming that P is the objective measure, one can easily
prove that
                                              
                                   Q = P − λ P (1 − P )

and the risk-neutral measure Q is obtained by shifting probability from state H to state L.
   To get an intuitive assessment of the relationship between the two measures, one could
say that under risk-neutral valuation the probability is adjusted for risk in such a way as
to guarantee that all of the assets are expected to yield the risk-free rate; on the contrary,
under the objective risk-neutral measure the expected rate of return is adjusted to account
for risk. In both cases, the amount of adjustment is determined by the market price of risk
parameter λ.
   To avoid mistakes in the evaluation of uncertain cash ﬂows, it is essential to take into
consideration the kind of probability measure under which one is working. In fact, the
discount factor applied to expected cash ﬂows must be adjusted for risk if the expectation
is computed under the objective measure, while it must be the risk-free discount factor if
the expectation is taken under the risk-neutral probability. Indeed, one can also check that
                                       E [G (T )]   EQ [G (T )]
                            g (t) =               =
                                      1 + i + λbg     1+i
6                                                                       Copula Methods in Finance

and using the wrong interest rate to discount the expected cash ﬂow would get the wrong
evaluation.


1.2.5 Multiple states of the world

Consider the case in which three scenarios are possible at time T , say {S (H H ) , S (H L),
S (LL)}. The crucial, albeit obvious, thing to notice is that it is not possible to replicate an
asset by a portfolio of only two other assets. To continue with the example above, whatever
amount g of the asset S we choose, and whatever the position of g in the risk-free asset,
we are not able to perfectly replicate the pay-off of the contract g in all the three states
of the world: whatever replicating portfolio was used would lead to some hedging error.
Technically, we say that contract g is not attainable and we have an incomplete market
problem. The discussion of this problem has been at the center of the analysis of modern
ﬁnance theory for some years, and will be tackled in more detail below. Here we want to
stress in which way the model above can be extended to this multiple scenario setting. There
are basically two ways to do so. The ﬁrst is to assume that there is a third asset, whose
pay-off is independent of the ﬁrst two, so that a replicating portfolio can be constructed
using three assets instead of two. For an inﬁnitely large number of scenarios, an inﬁnitely
large set of independent assets is needed to ensure perfect hedging. The second way to go
is to assume that the market for the underlying opens at some intermediate time τ prior to
T and the underlying on that date may take values {S (H ) , S (L)}. If this is the case, one
could use the following strategy:

• Evaluate g (τ ) under both scenarios {S (H ) , S (L)}, yielding {g (H ) , g (L)}: this will result
  in the computation of the risk-neutral probabilities {Q (H ) , Q (L)} and the replicating
  portfolios consisting of {g (H ), g (L)} units of the underlying and {g (H ) , g (L)}
  units of the risk-free asset.
• Evaluate g (t) as a derivative product giving a pay-off {g (H ) , g (L)} at time τ , depending
  on the state of the world: this will result in a risk-neutral probability Q, and a replicating
  portfolio with g units of the underlying and g units of the risk-free asset.

The result is that the value of the product will be again set equal to its replicating portfolio

                                     g (t) = g S (t) + Bg

but at time τ it will be rebalanced, depending on the price observed for the underlying
asset. We will then have

                              g (H ) = g (H ) S (H ) + Bg (H )
                              g (L) = g (L) S (L) + Bg (L)

and both the position on the underlying asset and the risk-free asset will be changed fol-
lowing the change of the underlying price. We see that even though we have three possible
scenarios, we can replicate the product g by a replicating portfolio of only two assets, thanks
to the possibility of changing it at an intermediate date. We say that we follow a dynamic
replication trading strategy, opposed to the static replication portfolio of the simple example
Derivatives Pricing, Hedging and Risk Management                                             7

above. The replication trading strategy has a peculiar feature: the value of the replicating
portfolio set up at t and re-evaluated using the prices of time τ is, in any circumstances,
equal to that of the new replicating portfolio which will be set up at time τ . We have in
fact that
                   g S (H ) + g = g (H ) = g (H ) S (H ) + Bg (H )
                   g S (L) + g = g (L) = g (L) S (L) + Bg (L)

This means that once the replicating portfolio is set up at time t, no further expense or
withdrawal will be required to rebalance it, and the sums to be paid to buy more of an
asset will be exactly those made available by the selling of the other. For this reason the
replicating portfolio is called self-ﬁnancing.

                    1.3    THE BLACK–SCHOLES MODEL
Let us think of a multiperiod binomial model, with a time difference between one date and
the following equal to h. The gain or loss on an investment on asset S over every period
will be given by

                                S (t + h) − S (t) = iS (t) S (t)

  Now assume that the rates of return are serially uncorrelated and normally distributed as

                                     iS (t) = µ∗ + σ ∗ ε (t)

with µ∗ and σ ∗ constant parameters and ε (t) ∼ N (0, 1), i.e. a series of uncorrelated stan-
dard normal variables. Substituting in the dynamics of S we get

                          S (t + h) − S (t) = µ∗ S (t) + σ ∗ S (t) ε (t)

  Taking the limit for h that tends to zero, we may write the stochastic dynamics of S in
continuous time as

                              dS (t) = µS (t) dt + σ S (t) dz (t)

   The stochastic process is called geometric brownian motion, and it is a speciﬁc case of a
diffusive process. z (t) is a Wiener process, deﬁned by dz (t) ∼ N (0, dt) and the terms µS (t)
and σ S (t) are known as the drift and diffusion of the process. Intuitively, they represent
the expected value and the volatility (standard deviation) of instantaneous changes of S (t).
   Technically, a stochastic process in continuous time S (t) , t ⩽ T , is deﬁned with respect
to a ﬁltered probability space {, t , P }, where t = σ (S(u), u ⩽ t) is the smallest σ -ﬁeld
containing sets of the form {a ⩽ S(u) ⩽ b}, 0 ⩽ u ⩽ t: more intuitively, t represents the
amount of information available at time t.
   The increasing σ -ﬁelds {t } form a so-called ﬁltration F :

                                     0 ⊂ 1 ⊂ · · · ⊂ T

Not only is the ﬁltration increasing, but 0 also contains all the events with zero measure;
and these are typically referred to as “the usual assumptions”. The increasing property
8                                                                     Copula Methods in Finance

corresponds to the fact that, at least in ﬁnancial applications, the amount of information is
continuously increasing as time elapses.
   A variable observed at time t is said to be measurable with respect to t if the set of
events, such that the random variable belongs to a Borel set on the line, is contained in
t , for every Borel set: in other words, t contains all the amount of information needed
to recover the value of the variable at time t. If a process S (t) is measurable with respect
to t for all t ⩾ 0, it is said to be adapted with respect to t . At time t, the values of a
variable at any time τ > t can instead be characterized only in terms of the last object, i.e.
the probability measure P , conditional on the information set t .
   In this setting, a diffusive process is deﬁned, assuming that the limit of the ﬁrst and
second moments of S (t + h) − S (t) exist and are ﬁnite, and that ﬁnite jumps have zero
probability in the limit. Technically,

                          1
                       lim  E [S (t + h) − S (t) | S (t) = S] = µ (S, t)
                      h→0 h
                       1                                   
                   lim E [S (t + h) − S (t)]2 | S (t) = S = σ 2 (S, t)
                   h→0 h

and
                           1
                     lim       Pr (|S (t + h) − S (t)| > ε | S (t) = S) = 0
                     h→0 h

  Of course the moments in the equations above are tacitly assumed to exist. For further and
detailed discussion of the matter, the reader is referred to standard textbooks on stochastic
processes (see, for example, Karlin & Taylor, 1981).

1.3.1 Ito’s lemma

A paramount result that is used again and again in ﬁnancial applications is Ito’s lemma.
Say y (t) is a diffusive stochastic process

                                    dy (t) = µy dt + σy dz (t)

and f (y, t) is a function differentiable twice in the ﬁrst argument and once in the second.
Then f also follows a diffusive process

                                  df (y, t) = µf dt + σf dz (t)

with drift and diffusion terms given by

                                        ∂f   ∂f      1 ∂ 2f 2
                                 µf =      +    µy +       σ
                                        ∂t   ∂y      2 ∂y 2 y
                                        ∂f
                                 σf =      σy
                                        ∂y
Derivatives Pricing, Hedging and Risk Management                                             9

Example 1.1 Notice that, given

                              dS (t) = µS (t) dt + σ S (t) dz (t)

we can set f (S, t) = ln S (t) to obtain

                             d ln S (t) = (µ − 12 σ 2 ) dt + σ dz (t)

  If µ and σ are constant parameters, it is easy to obtain

                ln S (τ ) | t ∼ N (ln S (t) + (µ − 12 σ 2 ) (τ − t) , σ 2 (τ − t))

where N (m, s) is the normal distribution with mean m and variance s. Then, Pr (S (τ ) | t )
is described by the lognormal distribution.

  It is worth stressing that the geometric brownian motion assumption used in the
Black–Scholes model implies that the log-returns on the asset S are normally distributed,
and this is the same as saying that their volatility is assumed to be constant.


1.3.2 Girsanov theorem

A second technique that is mandatory to know for the application of diffusive processes
to ﬁnancial problems is the result known as the Girsanov theorem (or Cameron–Martin–
Girsanov theorem). The main idea is that given a Wiener process z (t) deﬁned under the
ﬁltration {, t , P } we may construct another process 
                                                        z (t) which is a Wiener process under
another probability space {, t , Q}. Of course, the latter process will have a drift under
the original measure P . Under such measure it will be in fact

                                         z (t) = dz (t) + γ dt
                                        d

for γ deterministic or stochastic and satisfying regularity conditions. In plain words, chang-
ing the probability measure is the same as changing the drift of the process.
   The application of this principle to our problem is straightforward. Assume there is an
opportunity to invest in a money market mutual fund yielding a constant instantaneous risk-
free yield equal to r. In other words, let us assume that the dynamics of the investment in
the risk-free asset is

                                           dB (t) = rB (t)

where the constant r is also called the interest rate intensity (r ≡ ln (1 + i)). We saw before
that under the objective measure P the no-arbitrage requirement implies
                                            
                                      dS (t)
                              E                = µ dt = (r + λσ ) dt
                                       S (t)
10                                                                         Copula Methods in Finance

where λ is the market price of risk. Substituting in the process followed by S (t) we have

                            dS (t) = (r + λσ ) S (t) dt + σ S (t) dz (t)
                                    = S (t) (r dt + σ (dz (t) + λ dt))
                                    = S (t) (r dt + σ d
                                                       z (t))

       z (t) = dz (t) + λ dt is a Wiener process under some new measure Q. Under such
where d
a measure, the dynamics of the underlying is then

                                  dS (t) = rS (t) dt + σ S (t) d
                                                                z (t)

meaning that the instantaneous expected rate of the return on asset S (t) is equal to the
instantaneous yield on the risk-free asset
                                                 
                                           dS (t)
                                    EQ              = r dt
                                            S (t)

i.e. that Q is the so-called risk-neutral measure. It is easy to check that the same holds
for any derivative written on S (t). Deﬁne g (S, t) the price of a derivative contract giving
pay-off G (S (T ) , T ). Indeed, using Ito’s lemma we have

                               dg (t) = µg g (t) dt + σg g (t) dz (t)

with
                                ∂g   ∂g                   1 ∂ 2g 2
                         µg g =    +    (r + λσ ) S (t) +        σ (t) S 2
                                ∂t   ∂S                   2 ∂S 2
                                ∂g
                         σg g =    σ
                                ∂S
     Notice that under the original measure we then have
                                                              
                            ∂g    ∂g          1 ∂ 2g 2                ∂g
                 dg (t) =      +     µS (t) +        σ (t) S 2
                                                                 dt +    σ dz (t)
                            ∂t    ∂S          2 ∂S 2                  ∂S

However, the no-arbitrage requirement implies

                         ∂g   ∂g                   1 ∂ 2g 2                 ∂g
                µg g =      +    (r + λσ ) S (t) +        σ (t) S 2 = rg + λ σ
                         ∂t   ∂S                   2 ∂S 2                   ∂S
so it follows that
                              ∂g   ∂g          1 ∂ 2g 2
                                 +    rS (t) +        σ (t) S 2 = rg
                              ∂t   ∂S          2 ∂S 2
  This is the fundamental partial differential equation (PDE) of the Black–Scholes model.
Notice that by substituting this result into the risk-neutral dynamics of g under measure Q
we get
                                                      ∂g
                               dg (t) = rg (t) dt +      σ d
                                                            z (t)
                                                      ∂S
Derivatives Pricing, Hedging and Risk Management                                            11

and the product g is expected to yield the instantaneous risk-free rate. We reach the con-
clusion that under the risk-neutral measure Q
                                                      
                                  dS (t)          dg (t)
                            EQ             = EQ            = r dt
                                   S (t)          g (t)

that is, all the risky assets are assumed to yield the instantaneous risk-free rate.

1.3.3 The martingale property
The price of any contingent claim g can be recovered solving the fundamental PDE. An
alternative way is to exploit the martingale property embedded in the measure Q. Deﬁne Z as
the value of a product expressed using the riskless money market account as the numeraire,
i.e. Z (t) ≡ g (t) /B (t). Given the dynamics of the risky asset under the risk-neutral measure
Q we have that

                               dS (t) = rS (t) dt + σ S (t) d
                                                             z (t)
                               dB (t) = rB (t) dt

and it is easy to check that

                                    dZ (t) = σ Z (t) d
                                                      z (t)

  The process Z (t) then follows a martingale, so that EQ (Z (T )) = Z (t). This directly
provides us with a pricing formula. In fact we have
                               g (S, t)                        G (S, T )
                     Z (t) =            = EQ (Z (T )) = EQ
                                B (t)                           B (T )

Considering that B (T ) is a deterministic function, we have
                         B (t)
            g (S, t) =          EQ (G (S, T )) = exp (−r (T − t)) EQ (G (S, T ))
                         B (T )
   The price of a contingent claim is obtained by taking the relevant expectation under the
risk-neutral measure and discounting it back to the current time t. Under the assumption of
log-normal distribution of the future price of the underlying asset S, we may recover for
instance the basic Black–Scholes formula for a plain vanilla call option

               CALL(S, t; K, T ) = S (t)     (d1 ) − exp [−r (T − t)] K (d2 )
                                                               
                                     ln (S (t) /K) + r + σ 2 /2 (T − t)
                                d1 =                 √
                                                   σ T −t
                                             √
                                d2 = d1 − σ T − t

where    (x) is the standard normal distribution function evaluated at x
                                             x       2
                                       1                u
                                (x) =           exp −       du
                                      2π −∞             2
12                                                                            Copula Methods in Finance

The formula for the put option is, instead,

               PUT(S, t; K, T ) = −S (t)     (−d1 ) + exp [−r (T − t)] K           (−d2 )

   Notice that a long position in a call option corresponds to a long position in the underlying
and a debt position, while a long position in a put option corresponds to a short position in
the underlying and an investment in the risk-free asset. As S (t) tends to inﬁnity, the value
of a call tends to that of a long position in a forward and the value of the put tends to zero;
as S (t) tends to zero, the value of the put tends to the value of a short position in a forward
and the price of the call option tends to zero.
   The sensitivity of the option price with respect to the underlying is called delta () and
is equal to (d1 ) for the call option and (d1 ) − 1 for the put. The sensitivity of the
delta with respect to the underlying is called gamma ( ), and that of the option price with
respect to time is called theta ( ). These derivatives, called the greek letters, can be used
to approximate, in general, the value of any derivative contract by a Taylor expansion as

                  g (S (t + h) , t + h) ≃ g (S (t) , t) + g (S (t + h) − S (t))
                                           + 12   g (S (t + h) − S (t))
                                                                          2
                                                                              +   gh

Notice that the greek letters are linked one to the others by the fundamental PDE ruling
out arbitrage. Indeed, this condition can be rewritten as

                             g + g rS (t) + 2     gσ
                                             1          2 (t) S 2 − rg = 0



1.3.4 Digital options
A way to understand the probabilistic meaning of the Black–Scholes formula is to compute
the price of digital options. Digital options pay a ﬁxed sum or a unit of the underlying if
the underlying asset is above some strike level at the exercise date. Digital options, which
pay a ﬁxed sum, are called cash-or-nothing (CoN) options, while those paying the asset are
called asset-or-nothing (AoN) options. Under the log-normal assumption of the conditional
distribution of the underlying held under the Black–Scholes model, we easily obtain

                          CoN(S, t; K, T ) = exp [−r (T − t)]           (d2 )

     The asset-or-nothing price can be recovered by arbitrage observing that at time T

     CALL(S, T ; K, T ) + K CoN(S, T ; K, T ) = 1{S(T )>K} S (T ) = AoN(S, T ; K, T )

where 1{S(T )>K} is the indicator function assigning 1 to the case S (T ) > K. So, to avoid
arbitrage we must have

                                AoN(S, t; K, T ) = S (t)        (d1 )

  Beyond the formulas deriving from the Black–Scholes model, it is important to stress
that this result – that a call option is the sum of a long position in a digital asset-or-nothing
option and a short position in K cash-or-nothing options – remains true for all the option
Derivatives Pricing, Hedging and Risk Management                                            13

pricing models. In fact, this result directly stems from the no-arbitrage requirement imposed
in the asset pricing model. The same holds for the result (which may be easily veriﬁed) that
                                 ∂CALL(S, t; K, T )
             − exp [r (T − t)]                      =      (d2 ) = Pr (S (T ) > K)
                                      ∂K
where the probability is computed under measure Q. From the derivative of the call option
with respect to the strike price we can then recover the risk-neutral probability of the
underlying asset.

                    1.4 INTEREST RATE DERIVATIVES
The valuation of derivatives written on ﬁxed income products or interest rates is more
involved than the standard Black–Scholes model described above, even though all models
are based on the same principles and techniques of arbitrage-free valuation presented above.
The reason for this greater complexity is that the underlying asset of these products is the
curve representing the discounting factors of future cash-ﬂows as a function of maturity T .
The discount factor D(t, T ) of a unit cash-ﬂow due at maturity T , evaluated at current time
t, can be represented as

                             D (t, T ) = exp [−r (t, T ) (T − t)]

where r (t, T ) is the continuously compounded spot rate or yield to maturity. Alternatively,
the discount factor can be characterized in terms of forward rates, as
                                                T             
                              D (t, T ) = exp −    f (t, u) du
                                                   t

Term structure pricing models are based on stochastic representations of the spot or forward
yield curve.

1.4.1 Afﬁne factor models
The classical approach to interest rate modeling is based on the assumption that the stochastic
dynamics of the curve can be represented by the dynamics of some risk factors. The yield
curve is then recovered endogenously from their dynamics. The most famous models are
due to Vasicek (1977) and Cox, Ingersoll and Ross (1985). They use a single risk factor,
which is chosen to be the intercept of the yield curve – that is, the instantaneous interest
rate. While this rate was assumed to be constant under the Black–Scholes framework, now
it is assumed to vary stochastically over time, so that the value of a European contingent
claim g, paying G(T ) at time T , is generalized to
                                             T                     
                       g (t) = EQ exp −          r (u) du G (T ) | t
                                             t

where the expectation is again taken under the risk-neutral measure Q. Notice that for the
discount factor D (t, T ) we have the pay-off D (T , T ) = 1, so that
                                                 T           
                         D (t, T ) = EQ exp −         r (u) du t
                                                       t
14                                                                     Copula Methods in Finance

   We observe that even if the pay-off is deterministic, the discount factor is stochastic, and
it is a function of the instantaneous interest rate r(t). Let us assume that the dynamics of
r(t) under the risk-neutral measure is described by the diffusion process

                                     dr (t) = µr dt + σr d
                                                          z (t)

and let us write the dynamics of the discount factor, under the same measure Q, as

                      dD (t, T ) = r (t) D (t, T ) dt + σT D (t, T ) d
                                                                      z (t)

where σT is the volatility of instantaneous percentage changes of the discount factor. Apply-
ing Ito’s lemma we have

                                    ∂D (t, T )      ∂D (t, T ) 1 2 ∂ 2 D (t, T )
                r (t) D (t, T ) =              + µr           + σr
                                       ∂t             ∂r       2        ∂r 2

which is a partial differential equation ruling out arbitrage opportunities.
  It may be proved that in the particular case in which

                                           µr = α + βr
                                           σr2 = γ + ζ r

that is, in the case in which both the drift and the instantaneous variance are linear in the
risk factor, the solution is

                        D (t, T ) = exp [A (T − t) − M (T − t) r (t)]

   These models are called afﬁne factor models, because interest rates are afﬁne functions
of the risk factor.
   The general shape of the instantaneous drift used in one-factor afﬁne models is µr =
k (θ − r), so that the interest rate is recalled toward a long run equilibrium level θ : this
feature of the model is called mean reversion. Setting ζ = 0 and γ > 0 then leads to the
Vasicek model, in which the conditional distribution of the instantaneous interest rate is
normal. Alternatively, assuming ζ > 0 and γ = 0 then leads to the famous Cox, Ingersoll
and Ross model: the stochastic process followed by the instantaneous interest rate is a square
root process, and the conditional distribution is non-central chi-square. The case in which
ζ > 0 and γ > 0 is a more general process studied in Pearson and Sun (1994). Finally, the
afﬁne factor model result was proved in full generality with an extension to an arbitrary
number of risk factors by Dufﬁe and Kan (1996).
   Looking at the solution for the discount factor D (t, T ), it is clear that the function
M (T − t) is particularly relevant, because it represents its sensitivity to the risk factor r(t).
In fact, using Ito’s lemma we may write the dynamics of D (t, T ) under the risk-neutral
measure as

                dD (t, T ) = r (t) D (t, T ) dt + σT M (T − t) D (t, T ) d
                                                                          z (t)
Derivatives Pricing, Hedging and Risk Management                                            15

1.4.2 Forward martingale measure
Consider now the problem of pricing a contingent claim whose pay-off is a function of the
interest rate. Remember that, differently from the Black–Scholes framework, the discount
factor to be applied to the contingent claim is now stochastic and, if the underlying is an
interest rate sensitive product, it is not independent from the pay-off. The consequence is
that the discount factor and the expected pay-off under the risk-neutral measure cannot be
factorized. To make a simple example, consider a call option written on a zero coupon bond
maturing at time T , for strike K and exercise time τ . We have:
                                                τ                                    
     CALL (D (t, T ) , t; τ, K) = EQ exp −          r (u) du max [D (τ, T ) − K, 0]| t
                                                  t
                                                    τ                      
                               = EQ exp −                 r (u) du       t
                                                  t
                                  EQ [max [D (τ, T ) − K, 0]| t ]

and the price cannot be expressed as the product of the discount factor D (t, τ ) and the
expected pay-off. Factorization can, however, be achieved through a suitable change of
measure.
   Consider the discount factors evaluated at time t for one unit of currency to be received at
time τ and T respectively, with τ < T . Their dynamics under the risk-neutral measure are

                     dD (t, T ) = r (t) D (t, T ) dt + σT D (t, T ) d
                                                                     z (t)
                      dD (t, τ ) = r (t) D (t, τ ) dt + στ D (t, τ ) d
                                                                      z (t)

   We can deﬁne D (t, τ, T ) as the forward price set at time t for an investment starting
at time τ and yielding one unit of currency at time T . A standard no-arbitrage argument
yields
                                                      D (t, T )
                                    D (t, τ, T ) =
                                                      D (t, τ )
  The dynamics of the forward price can be recovered by using Ito’s division rule.

Remark 1.1 [Ito’s division rule] Assume two diffusive processes X (t) and Y (t) follow-
ing the dynamics
                          dX (t) = µX X (t) dt + σX X (t) dz (t)
                           dY (t) = µY Y (t) dt + σY Y (t) dz (t)

Then, the process F (t) ≡ X (t) /Y (t) follows the dynamics

                           dF (t) = µF F (t) dt + σF F (t) dz (t)

with
                                   σF = σX − σY
                                   µF = µX − µY − σ F σ Y
16                                                                         Copula Methods in Finance

     Applying this result to our problem yields immediately

                  dD (t, τ, T ) = −σF στ D (t, τ, T ) dt + σF D (t, τ, T ) d
                                                                            z (t)
                            σF = σT − στ

  We may now use the Girsanov theorem to recover a new measure Qτ under which
dz = d
      z − στ dt is a Wiener process. We have then

                                dD (t, τ, T ) = σF D (t, τ, T ) dz (t)

and the forward price is a martingale. Under such a measure, the forward price of any future
contract is equal to the expected spot value. We have

                D (t, τ, T ) = EQτ [(D (τ, τ, T )) | t ] = EQτ [(D (τ, T )) | t ]

and the measure Qτ is called the forward martingale measure. This result, which was ﬁrst
introduced by Geman (1989) and Jamshidian (1989), is very useful to price interest rate
derivatives. In fact, consider a derivative contract g, written on D (t, T ), promising the
pay-off G (D (τ, T ) , τ ) at time τ . As g (t) /D (t, τ ) is a martingale, we have immediately

                    g (D (t, τ, T ) , t) = P (t, τ ) EQτ [G (D (τ, T ) , τ ) | t ]

and the factorization of the discount factor and expected pay-off is now correct.
   To conclude, the cookbook recipe emerging from the forward martingale approach is that
the forward price must be considered as the underlying asset of the derivative contract,
instead of the spot.

1.4.3 LIBOR market model
While the standard classical interest rate pricing models are based on the dynamics of
instantaneous spot and forward rates, the market practice is to refer to observed interest
rates for investment over discrete time periods. In particular, the reference rate mostly used
for short-term investments and indexed products is the 3-month LIBOR rate. Moreover,
under market conventions, interest rates for investments below the one-year horizon are
computed under simple compounding. So, the LIBOR interest rate for investment from t to
T is deﬁned as
                                                1        1
                                L (t, T ) =                     −1
                                              T −t    D (t, T )

The corresponding forward rate is deﬁned as

                                 1          1              1             D (t, τ )
              L (t, τ, T ) =                        −1 =                           −1
                               T −τ    D (t, τ, T )      T −τ            D (t, T )

     Notice that, under the forward martingale measure QT , we have immediately

                  L (t, τ, T ) = EQT [L (τ, τ, T ) | t ] = EQT [L (τ, T ) | t ]
Derivatives Pricing, Hedging and Risk Management                                                      17

The price of a ﬂoater, i.e. a bond whose coupon stream is indexed to the LIBOR, is then
evaluated as
                                        N
                                        
             FLOATER(t, tN ) =                 δi EQ [D(t, tj )L(tj −1 , tj ) | t ] + P (t, tN )
                                        j =1

                                        N
                                        
                                    =          δi D(t, tj )EQtj [L(tj −1 , tj ) | t ] + P (t, tN )
                                        j =1

                                        N
                                        
                                    =          D(t, tj )δi L(t, tj −1 , tj ) + P (t, tN )
                                        j =1

where the set {t, t1 , t2 , . . . , tN } contains the dates at which a coupon is reset and the previous
one is paid and δj = tj − tj −1 . Consider now a stream of call options written on the index
rate for each coupon period. This product is called a cap, and the price is obtained, assuming
a strike rate LCAP , from
                                 N
                                 
            CAP(t, t1 , tN ) =          δi EQ [D(t, tj ) max(L(tj −1 , tj ) − LCAP ), 0 | t ]
                                 j =2

                                 N
                                 
                             =          δi D(t, tj )EQtj [max(L(tj −1 , tj ) − LCAP ), 0 | t ]
                                 j =2

and each call option is called caplet. By the same token, a stream of put options are called
ﬂoor, and are evaluated as
                             N
                             
      FLOOR(t, t1 , tN ) =          δ2 D(t, tj )EQtj [max(LFLOOR − L(tj −1 , tj )), 0 | t ]
                             j =1

where LFLOOR is the strike rate. The names cap and ﬂoor derive from the results, which
may be easily veriﬁed

                  L(tj , tj −1 ) − CAPLET(tj , tj −1 ) = min(L(tj −1 , tj ), LCAP )
               L(tj , tj −1 ) + FLOORLET(tj , tj −1 ) = max(L(tj −1 , tj ), LFLOOR )

   Setting a cap and a ﬂoor amounts to building a collar, that is a band in which the coupon
is allowed to ﬂoat according to the interest rate. The price of each caplet and ﬂoorlet can
then be computed under the corresponding forward measure. Under the assumption that each
forward rate is log-normally distributed, we may again recover a pricing formula largely
used in the market, known as Black’s formula.

        CAPLET(t; tj , tj −1 ) = D(t, tj )EQtj [max(L(tj −1 , tj ) − LCAP ), 0 | t ]
                                 = D(t, tj ){EQtj [L(tj −1 , tj ) | t ]N (d1 ) − LCAP N (d2 )}
                                 = D(t, tj )L(t, tj −1 , tj )N (d1 ) − D(t, tj )LCAP N (d2 )
18                                                                      Copula Methods in Finance

                                 ln(L(t, tj −1 , tj )/LCAP ) + σj2 (tj − t)
                            d1 =                     √
                                                 σj tj − t
                                         
                            d2 = d1 − σj tj − t
                                                                                            
where σj is the instantaneous volatility of the logarithm of the forward rate L t, tj −1 , tj .
  The ﬂoorlet price is obtained by using the corresponding put option formula

      FLOORLET(t; tj , tj −1 ) = −D(t, tj )L(t, tj −1 , tj )N (−d1 ) + D(t, tj )LCAP N (−d2 )
                                 ln(L(t, tj −1 , tj )/LFLOOR ) + σj2 (tj − t)
                            d1 =                      √
                                                   σj tj − t
                                         
                            d2 = d1 − σj tj − t


1.5     SMILE AND TERM STRUCTURE EFFECTS OF VOLATILITY
The Black–Scholes model, which, as we saw, can be applied to the pricing of contingent
claims on several markets, has been severely challenged by the data. The contradiction
emerges from a look at the market quotes of options and a comparison with the implied
information, that is, with the dynamics of the underlying that would make these prices
consistent. In the Black–Scholes setting, this information is collected in the same parameter,
volatility, which is assumed to be constant both across time and different states of the world.
This parameter, called implied volatility, represents a sufﬁcient statistic for the risk-neutral
probability in the Black–Scholes setting: the instantaneous rate of returns on the assets are
in fact assumed normal and with ﬁrst moments equal to the risk-free rate. Contrary to this
assumption, implied volatility is typically different both across different strike prices and
different maturities. The ﬁrst evidence is called the smile effect and the second is called the
volatility term structure.
   Non-constant implied volatility can be traced back to market imperfections or it may
actually imply that the stochastic process assumed for the underlying asset is not borne out
by the data, namely that the rate of return on the assets is not normally distributed. The
latter interpretation is indeed supported by a long history of evidence on non-normality of
returns on almost every market. This raises the question of which model to adopt to get a
better ﬁt of the risk-neutral distribution and market data.

1.5.1 Stochastic volatility models
A ﬁrst approach is to model volatility as a second risk factor affecting the price of the
derivative contract. This implies two aspects, which may make the model involved. The
ﬁrst is the dependence structure between volatility and the underlying. The second is that
the risk factor represented by volatility must be provided with a market price, something
that makes the model harder to calibrate.
  A model that is particularly easy to handle, and reminds us of the Hull and White (1987)
model, could be based on the assumption that volatility risk is not priced in the market,
and volatility is orthogonal to the price of the underlying. The idea is that conditional on a
given volatility parameter taking value s, the stochastic process followed by the underlying
asset follows a geometric brownian motion. The conditional value of the call would then
Derivatives Pricing, Hedging and Risk Management                                              19

yield the standard Black–Scholes solution. As volatility is stochastic and is not known at
the time of evaluation, the option is priced by integrating the Black–Scholes formula times
the volatility density across its whole support. Analytically, the pricing formula for a call
option yields, for example,
                                        ∞
   CALL (S(t), t, σ (t); K, T ) =           CALLBS (S, t; σ (t) = s, K, T ) qσ (s | t ) ds
                                    0

where CALLBS denotes the Black–Scholes formula for call options and qσ (s | t ) repre-
sents the volatility conditional density.
  Extensions of this model account for a dependence structure between volatility and the
underlying asset. A good example could be to model instantaneous variance as a square
root process, to exploit its property to be deﬁned on the non-negative support only and
the possibility, for some parameter conﬁgurations, of making zero volatility an inaccessible
barrier. Indeed, this idea is used both in Heston (1993) and in Longstaff and Schwartz
(1992) for interest rate derivatives.

1.5.2 Local volatility models
A different idea is to make the representation of the diffusive process more general by
modeling volatility as a function of the underlying asset and time. We have then, under the
risk-neutral measure

                          dS (t) = rS (t) dt + σ (S, t) S (t) d
                                                               z (t)

The function σ (S, t) is called the local volatility surface and should then be calibrated in
such a way as to produce the smile and volatility term structure effects actually observed
on the market. A long-dated proposal is represented by the so-called constant elasticity of
variance (CEV) models, in which

                             dS (t) = rS (t) dt + σ S (t)α d
                                                            z (t)

   Alternative local volatility speciﬁcations were proposed to comply with techniques that are
commonly used by practitioners in the market to ﬁt the smile. An idea is to resort to the so-
called mixture of log-normal or shifted log-normal distributions. Intuitively, this approach
leads to closed form valuations. For example, assuming that the risk-neutral probability
distribution Q is represented by a linear combination of n log-normal distributions Qj
                                                n
                                                                        
                         Q (S (T ) | t ) =            λj Qj Xj (T ) | t
                                                j =1

where Xj are latent random variables drawn from log-normal distributions Qj , correspond-
ing to geometric brownian motions with volatility σj . It may be checked that the price of
a call option in this model can be recovered as
                                                 n
                                                                             
                   CALL (S(t), t; K, T ) =              λj CALLBS Xj , t; K, T
                                                 j =1
20                                                                   Copula Methods in Finance

  Brigo and Mercurio (2001) provide the corresponding local volatility speciﬁcation corre-
sponding to this model, obtaining
                                   
                                    n
                                    j =1 σj2 λj qj (Xj (T ) | t )
                dS(t) = rS(t) dt +  n                             S(t) d
                                                                          z(t)
                                        j =1 λj qj (Xj (T ) | t )

                     
where qj Xj (T ) | t are the densities corresponding to the distribution functions Qj .
Once the mixture weights λj are recovered from observed plain vanilla option prices,
the corresponding dynamics of the underlying asset under the risk-neutral measure can
be simulated in order to price exotic products.


1.5.3 Implied probability
A different idea is to use non-parametric techniques to extract general information con-
cerning the risk-neutral probability distribution and dynamics implied by observed options
market quotes. The concept was ﬁrst suggested by Breeden and Litzenberger (1978) and
pushes forward the usual implied volatility idea commonly used in the Black–Scholes
framework. This is the approach that we will use in this book.
   The basic concepts stem from the martingale representation of option prices. Take, for
example, a call option

              CALL (S, t; K, T ) = exp [−r (T − t)] EQ [max (S (T ) − K, 0)]

By computing the derivative of the pricing function with respect to the strike K we easily
obtain
                ∂CALL (S, t; K, T )
                                    = − exp [−r (T − t)] (1 − Q (K | t ))
                      ∂K
where Q(K | t ) is the conditional distribution function under the risk-neutral measure.
Deﬁning
                             Q (K | t ) ≡ 1 − Q (K | t )

that is, the probability corresponding to the complementary event Pr (S (T ) > K), we may
rewrite
                                                     ∂CALL (S, t; K, T )
                     Q (K | t ) = − exp [r (T − t)]
                                                           ∂K
  So, the risk-neutral probability of exercise of the call option is recovered from the forward
value of the derivative of the call option, apart from a change of sign. The result can be
immediately veriﬁed in the Black–Scholes model, where we easily compute Q (K | t ) =
N (d2 (K)).

Remark 1.2 Notice that by integrating the relationship above from K to inﬁnity, the price
of the call option can also be written as
                                                            ∞
                 CALL (S, t; K, T ) = exp [−r (T − t)]          Q (u | t ) du
                                                           K
Derivatives Pricing, Hedging and Risk Management                                              21

where we remark that the cumulative probability, rather than the density, appears in the
integrand. As we will see, this pricing representation will be used again and again throughout
this book.

   Symmetric results hold for put prices which, in the martingale representation, are writ-
ten as

               PUT (S, t; K, T ) = exp [−r (T − t)] EQ [max (K − S (T ) , 0)]

  Computing the derivative with respect to the strike and reordering terms we have

                                                       ∂PUT (S, t; K, T )
                       Q (K | t ) = exp [r (T − t)]
                                                             ∂K
that is, the implied risk-neutral distribution. Again, we may check that, under the standard
Black–Scholes setting, we obtain

                        Q (K | t ) = N (−d2 (K)) = 1 − N (d2 (K))

Furthermore, integrating from zero to K we have
                                                                K
                   PUT (S, t; K, T ) = exp [−r (T − t)]             Q (u | t ) du
                                                            0

Finally, notice that the density function can be obtained from the second derivatives of the
put and call prices. We have

                            ∂Q (K | t )                   ∂ 2 PUT (S, t; K, T )
            q (K | t ) ≡                = exp [r (T − t)]
                                ∂K                                 ∂K 2
                              ∂Q (K | t )                   ∂ 2 CALL (S, t; K, T )
            q (K | t ) ≡ −                = exp [r (T − t)]
                                  ∂K                                 ∂K 2
    The strength of these results stems from the fact that they directly rely on the no-arbitrage
requirement imposed by the martingale relationship. In this sense, they are far more general
than the assumptions underlying the Black–Scholes setting. Indeed, if the assumptions
behind the Black–Scholes model were borne out by the data, the results above would be of
little use, as all the information sufﬁcient to characterize the risk-neutral distribution would
be represented by the volatility implied by the prices. If the price distribution is not log-
normal, these results are instead extremely useful, enabling one to extract the risk-neutral
probability distribution, rather that its moments, directly from the option prices.

                         1.6 INCOMPLETE MARKETS
The most recent challenge to the standard derivative pricing model, and to its basic structure,
is represented by the incomplete market problem. A brief look over the strategy used to
recover the fair price of a derivative contract shows that a crucial role is played by the
assumption that the future value of each ﬁnancial product can be exactly replicated by
some trading strategy. Technically, we say that each product is attainable and the market is
22                                                                      Copula Methods in Finance

complete. In other words, every contingent claim is endowed with a perfect hedge. Both in
the binomial and in the continuous time model we see that it is this assumption that leads
to two strong results. The ﬁrst is a unique risk-neutral measure and, through that, a unique
price for each and every asset in the economy. The second is that this price is obtained with
no reference to any preference structure of the agents in the market, apart from the very
weak (and realistic) requirement that they “prefer more to less”.
   Unfortunately, the completeness assumption has been ﬁercely challenged by the market.
Every trader has always been well aware that no perfect hedge exists, but the structure of
derivatives markets nowadays has made consideration of this piece of truth unavoidable.
Structured ﬁnance has brought about a huge proliferation of customized and exotic products.
Hedge funds manufacture and manage derivatives on exotic markets and illiquid products
to earn money from their misalignment: think particularly of long–short and relative value
hedge fund strategies. Credit derivatives markets have been created to trade protection on
loans, bonds, or mortgage portfolios. All of this has been shifting the core of the derivatives
market away from the traditional underlying assets traded on the organized markets, such as
stocks and government bonds, toward contingent claims written on illiquid assets. The effect
has been to make the problem of ﬁnding a perfect hedge an impossible task for most of the
derivative pricing applications, and the assumption of complete markets an unacceptable
approximation. The hot topic in derivative pricing is then which hedge to choose, facing
the reality that no hedging strategy can be considered completely safe.

1.6.1 Back to utility theory

The main effect of accounting for market incompleteness has been to bring utility theory
back in derivative pricing techniques. Intuitively, if no perfect hedge exists, every replication
strategy is a lottery, and selecting one amounts to deﬁning a preference ranking among
them, which is the main subject of utility theory. In a sense, the ironic fate of ﬁnance is
that the market incompleteness problem is bringing it back from a preference-free paradigm
to a use of utility theory very similar to early portfolio theory applications: this trend is
clearly witnessed by terms such as “minimum variance hedging” (Follmer & Schweitzer,
1991). Of course, we know that the minimum variance principle is based on restrictive
assumptions concerning both the preference structure and the distributional properties of
the hedging error. One extension is to use more general expected utility representations,
such as exponential or power preferences, to select a speciﬁc hedging strategy and the
corresponding martingale measure (Frittelli, 2000).
   A question that could also be useful to debate, even though it is well beyond the scope
of this book, is whether the axiomatic structure leading to the standard expected utility
framework is ﬂexible enough and appropriate to be applied to the hedging error problem.
More precisely, it is well known that standard expected utility results rest on the so-called
independence axiom, which has been debated and criticized in decision theory for decades,
and which seems particularly relevant to the problem at hand. To explain the problem in
plain words, consider you prefer hedging strategy A to another denoted B (A B). The
independence axiom reads that you will also prefer αA + (1 − α) C to αB + (1 − α) C
for every α ∈ [0, 1], and for whatever strategy C. This is the crucial point: the preference
structure between two hedging strategies is preserved under a mixture with any other third
strategy, and if this is not true the expected utility results do not carry over. It is not difﬁcult
to argue that this assumption may be too restrictive, if, for example, one considers a hedging
Derivatives Pricing, Hedging and Risk Management                                           23

strategy C counter-monotone to B and orthogonal to A. Indeed, most of the developments
in decision theory were motivated by the need to account for the possibility of hedging
relationships among strategies, that are not allowed for under the standard expected utility
framework. The solutions proposed are typically the restriction of the independence axiom
to a subset of the available strategies. Among them, an interesting choice is to restrict C
to the set of so-called constant acts, which in our application means a strategy yielding
a risk-free return. This was proposed by Gilboa and Schmeidler (1989) and leads to a
decision strategy called Maximin Expected Utility (MMEU). In intuitive terms, this strategy
can be described as one taking into account the worst possible probability scenario for every
possible event. As we are going to see in the following paragraph, this worst probability
scenario corresponds to what in the mathematics of incomplete market pricing are called
super-replication or super-hedging strategies.

1.6.2 Super-hedging strategies
Here we follow Cherubini (1997) and Cherubini and Della Lunga (2001) in order to provide
a general formal representation of the incomplete market problem, i.e. the problem of pricing
a contingent claim on an asset that cannot be exactly replicated. In this setting, a general
contingent claim g(S, t) with pay-off G(S, T ), can be priced computing
                                                                         
                  g (S, t) = exp [−r (T − t)] EQ G (S, T ) ; Q ∈ ℘ | t

where EQ represents the expectation with respect to a conditional risk-neutral measure Q.
Here and in the following we focus on the ﬁnancial meaning of the issue and assume that
the technical conditions required to ensure that the problem is well-deﬁned are met (the
readers are referred to Delbaen & Schachermayer, 1994, for details). The set ℘ contains
the risk-neutral measures and describes the information available on the underlying asset.
If it is very precise, and the set ℘ contains a single probability measure, we are in the
standard complete market pricing setting tackled above. In the case in which we do not
have precise information – for example, because of limited liquidity of the underlying – we
have the problem of choosing a single probability measure, or a pricing strategy. Therefore,
in order to price the contingent claim g in this incomplete market setting, we have to deﬁne:
(i) the set of probability measures ℘ and (ii) a set of rules describing a strategy to select
the appropriate measure and price. As discussed above, one could resort to expected utility
to give a preference rank for the probabilities in the set, picking out the optimal one. As
an alternative, or prior to that, one could instead rely on some more conservative strategy,
selecting a range of prices: the bounds of this range would yield the highest and lowest price
consistent with the no-arbitrage assumption, and the replicating strategies corresponding to
these bounds are known as super-replicating portfolios. In this case we have
                                                                          
               g − (S, t) = exp [−r (T − t)] inf EQ G (S, T ) ; Q ∈ ℘ | t
                                                                           
               g + (S, t) = exp [−r (T − t)] sup EQ G (S, T ) ; Q ∈ ℘ | t

More explicitly, the lower bound is called the buyer price of the derivative contract g, while
the upper bound is denoted the seller price. The idea is that if the price were lower than
the buyer price, one could buy the contingent claim and go short a replicating portfolio
ending up with an arbitrage gain. Conversely, if the price were higher than the maximum,
24                                                                        Copula Methods in Finance

one could short the asset and buy a replicating portfolio earning a safe return. Depending
on the deﬁnition of the set of probability measures, one is then allowed to recover different
values for long and short positions. Notice that this does not hold for models that address
the incomplete market pricing problem in a standard expected utility setting, in which the
selected measure yields the same value for long and short positions.

Uncertain probability model

The most radical way to address the problem of super-replication is to take the worst possible
probability scenario for every event. To take the simplest case, that of a call digital option
paying one unit of currency at time T if the underlying asset is greater than or equal to K,
we have
                                                                     
       DC − (S, t) = exp [−r (T − t)] inf EQ 1S(T )⩾K ; Q ∈ ℘ | t
                                                                              −
                    = exp [−r (T − t)] inf Q (K) ; Q ∈ ℘ | t ≡ B (t, T ) Q
                                                                      
       DC + (S, t) = exp [−r (T − t)] sup EQ 1S(T )⩾K ; Q ∈ ℘ | t
                                                                                  +
                    = exp [−r (T − t)] sup EQ Q (K) ; Q ∈ ℘ | t ≡ B (t, T ) Q

where we recall the deﬁnition Q (K) ≡ 1 − Q (K) and where the subscripts ‘+’ and ‘−’
stand for the upper and lower value of Q (K).
   Having deﬁned the pricing bounds for the digital option, which represents the pricing ker-
nel of any contingent claim written on asset S, we may proceed to obtain pricing bounds for
call and put options using the integral representations recovered in section 1.5.3. Remember
in fact that the price of a European call option C under the martingale measure Q may be
written in very general terms as
                                                                ∞
                   CALL (S, t; K, T ) = exp [−r (T − t)]             Q (u | t ) du
                                                            K

We know that if the kernel were the log-normal distribution, the equation would yield the
Black–Scholes formula. Here we want instead to use the formula to recover the pricing
bounds for the option. The buyer price is then obtained by solving the problem
                                                                    ∞
                                                                         −
                    CALL− (S, t; K, T ) = exp [−r (T − t)]              Q (u) du
                                                                    K

     By the same token, the seller price is obtained from
                                                                    ∞
                                                                         +
                    CALL+ (S, t; K, T ) = exp [−r (T − t)]              Q (u) du
                                                                    K

and represents the corresponding upper bound for the value of the call option in the most
general setting.
  The same could be done for the European put option with the same strike and maturity.
In this case we would have
                                                                K
                    PUT (S, t; K, T ) = exp [−r (T − t)]            Q (u | t ) du
                                                            0
Derivatives Pricing, Hedging and Risk Management                                               25

for any conditional measure Q ∈ ℘ and the pricing bounds would be

                                                                K
                 PUT− (S, t; K, T ) = exp [−r (T − t)]              Q− (u | t ) du
                                                            0
                                                                K
                 PUT+ (S, t; K, T ) = exp [−r (T − t)]              Q+ (u | t ) du
                                                            0

where Q− (u) and Q+ (u) have the obvious meanings of the lower and upper bound of the
probability distribution for every u. Notice that whatever pricing kernel, Q in the ℘ set
has to be a probability measure, so it follows that Q (u) + Q (u) = 1. This implies that we
must have
                                                  +
                                     Q− (u) + Q (u) = 1
                                                  −
                                     Q+ (u) + Q (u) = 1

  In the case of incomplete markets, in which the set ℘ is not a singleton, we have Q− (u) <
Q+ (u), which implies

                                −                        
                      Q− (u) + Q (u) = Q− (u) + 1 − Q+ (u) < 1

and the measure Q− is sub-additive. In the same way, it is straightforward to check that

                                                  +
                                     Q+ (u) + Q (u) > 1

and the measure Q+ is super-additive.
   So, if we describe the probability set as above, the result is that the buyer and seller prices
are integrals with respect to non-additive measures, technically known as capacities. The
integrals deﬁned above are well deﬁned even for non-additive measures, in which case they
are known in the literature as Choquet integrals. This integral is in fact widely used in the
modern decision theory trying to amend the standard expected utility framework: lotteries
are ranked using capacities instead of probability measures and expected values are deﬁned
in terms of Choquet integrals rather than Lebesgue integrals, as is usual in the standard
expected utility framework.

Example 1.2 [Fuzzy measure model ] A particular parametric form of the approach above
was proposed by Cherubini (1997) and Cherubini and Della Lunga (2001). The idea is
drawn from fuzzy measure theory: the parametric form suggested is called Sugeno fuzzy
measure. Given a probability distribution Q and a parameter λ ∈ + , deﬁne

                       −          1 − Q (u)           +          1 − Q (u)
                     Q (u) =                       Q (u) =
                                 1 + λQ (u)                     1 + λ∗ Q (u)

with
                                                   λ
                                         λ∗ = −
                                                  1+λ
26                                                                   Copula Methods in Finance

                                                    −                               +
  It may be easily checked that the measure Q is sub-additive, and Q is the dual
super-additive measure in the sense described above.
  The pricing bounds for call options are then recovered as discussed above based on any
choice of the reference probability distribution Q. If the pricing kernel is chosen to be
log-normal, we obtain
                                                           ∞         (u)
              CALL− (S, t; K, T ) = exp [−r (T − t)]                        du
                                                          d2 1 + λ (−u)
                                                           ∞      (u)
              CALL+ (S, t; K, T ) = exp [−r (T − t)]                           du
                                                          d2   1 + λ∗   (−u)

  Notice that in the case λ = λ∗ = 0 the model yields the Black–Scholes formula. For any
value λ > 0, the model yields buyer and seller prices. The discount (premium) applied to
buyer (seller) prices is higher the more the option is out-of-the-money.


Uncertain volatility model
An alternative strategy to address the incomplete market problem would be to deﬁne a set
of risk-neutral dynamics of the underlying asset, rather than the set of risk-neutral measures.
A typical example is to assume that the volatility parameter is not known exactly, and is
considered to be included in a given interval. Assume further that the stochastic process
followed by the underlying asset is a geometric brownian motion. Under any risk-neutral
measure Q we have

                               dS (t) = rS (t) dt + σ S (t) d
                                                             z
                                     
and we assume that σ ∈ σ − , σ + . This model is called the uncertain volatility model
(UVM) and is due to Avellaneda, Levy and Paràs (1995) and Avellaneda and Paràs (1996).
   Working through the solution as in the standard Black–Scholes framework, assume to
build a dynamic hedged portfolio. Notice that if we knew the exact value of the σ parameter,
the delta hedging strategy could be designed precisely, enabling perfect replication of the
contingent claim. Unfortunately, we are only allowed to know the interval in which the true
volatility value is likely to be located, and we are not aware of any probability distribution
about it. Assume that we take a conservative strategy designing the hedging policy under
the worst possible volatility scenario. Avellaneda, Levy and Paràs (1995) show that this
leads to the pricing formula
                                          2 +
                        ∂g  1             ∂ g        ∂g
                           + σ 2 S 2 (t)        + rS    − rg = 0
                        ∂t  2             ∂S 2       ∂S

with                          2 +  −                          
                              ∂ g    σ          (∂ 2 g/∂S 2 ) > 0
                                   =
                              ∂S 2   σ+         (∂ 2 g/∂S 2 ) < 0

Notice that the partial differential equation is a modiﬁed non-linear version of the Black–
Scholes no-arbitrage condition. The non-linearity is given by the fact that the multiplicative
Derivatives Pricing, Hedging and Risk Management                                              27

term of the second partial derivative is a function of the sign of the second partial derivative.
This equation was denoted the BSB (Black, Scholes & Barenblatt) fundamental equation.
The solution has to be carried out numerically except in trivial cases in which it may be
proved that the solution is globally convex or concave, when it obviously delivers the same
results as the standard Black–Scholes model. Notice also that in this approach, as in the
previous uncertain probability model, the result yields different values for long and short
positions.

                                  1.7 CREDIT RISK
The recent developments of the market have brought about a large increase of credit risk
exposures and products. On the one hand, this has been due to the massive shift of the
investment practices from standard stocks and bonds products toward the so-called alterna-
tive investments. This shift has been motivated both by the quest for portfolio diversiﬁcation
and the research of higher returns in a low interest rate period. Moreover, another face of
credit risk has become increasingly relevant along with the progressive shift from the clas-
sical standard intermediation business toward structured ﬁnance products, and the need to
resort to over-the-counter (OTC) transactions to hedge the corresponding exposure. Con-
trary to what happens in derivatives transactions operated in futures-style organized markets,
OTC deals involve some credit risk, as the counterparty in the contract may default by the
time it has to honor its obligations. The credit-risk feature involved in derivative con-
tracts is known as counterparty risk, and has been getting all the more relevant in the risk
management debate.
   A very general way to represent the pay-off of a defaultable contingent claim – that is,
a contract in which the counterparty may go bankrupt – is

                                G (S, T ) [1 − 1{DEF} (T )LGD]

where 1{DEF} is the indicator function denoting the default of the counterparty by time T
and LGD is the loss given default ﬁgure, also deﬁned as LGD ≡ 1 − RR, that is one minus
the recovery rate. In very general terms, the value of the contract at time t is computed
under the risk-neutral measure as
                               T                                    
                  EQ exp −         r (u) du G (S, T ) [1 − 1{DEF} LGD]
                                  t

   Notice that there are three risk factors involved in this representation: (i) market risk due
to ﬂuctuations of the underlying asset S; (ii) interest rate risk due to changes in the discount
factor; and (iii) credit risk due to the event of default of the counterparty. We will see that
evaluating defaultable contingent claims in this framework crucially involves the evaluation
of the dependence structure among the sources of risk involved. Fortunately, we know that
one of the sources may be made orthogonal by the change in measure corresponding to the
bond numeraire (forward martingale measure). In this case we have

                          D (t, T ) EQT [G (S, T ) [1 − 1{DEF} LGD]]

and the credit risk problem is intrinsically bivariate, involving the dependence structure
between the underlying dynamics and default of the counterparty.
28                                                                      Copula Methods in Finance

   The standard credit risk problem that we are used to think of is only the simplest case in
this general representation. Setting in fact G (S, T ) = 1 we have the standard defaultable
bond pricing problem. In the discussion below, we will ﬁrst address this topic, before
extending it to the case in which the defaultable security is a derivative contract. Dealing
with the simplest case will enable us to stress that credit risk itself is similar to an exposure in
the derivative market. Curiously enough, it can be seen as a position in an option, following
the so-called structural approach, or as a position with the same features as an interest rate
derivative, according the so-called reduced form approach.

1.7.1 Structural models

Structural models draw the main idea from the pioneering paper by Merton (1974). Assume
that an entrepreneur is funding a project whose value is V (t) with debt issued in the form
of a zero coupon bond with a face value of DD. The debt is reimbursed at time T . If at
that date the value of the asset side of the ﬁrm is high enough to cover the value of debt,
the nominal value is repaid and equityholders get the remaining value. If instead the value
of the ﬁrm is not sufﬁcient to repay the debt, it is assumed that the debtholders take over
the ﬁrm at no cost, and stockholders get zero (a feature called limited liability). The pay-off
value of debt at maturity is then min(DD, V (T )), while the value of equity is what is left
after bondholders have been repaid (we say stockholders are residual claimants).

                                 C (T ) = max(V (T ) − DD, 0)

  The value of equity capital is then the value of a call option written on the asset value
of the ﬁrm for a strike equal to the face value of the debt. Notice that the value of debt at
the same date can be decomposed alternatively as

                          DD (T ) = V (T ) − max(V (T ) − DD, 0)

or
                           DD (T ) = DD − max(DD − V (T ) , 0)

  The latter representation is particularly instructive. The value of defaultable debt is the
same as that of default-free debt plus a short position in a put option written on the asset
value of the ﬁrm for a strike equal to the face value of debt. Notice that if put–call parity
holds we have

               V (T ) = max(V (T ) − DD, 0) + DD − max(DD − V (T ) , 0)

and the value of the ﬁrm is equal to the value of equity, the call option, plus the value of
debt, in turn decomposed into default-free debt minus a put option. This result is known
in the corporate ﬁnance literature as the Modigliani–Miller theorem. Let us remark that it
is not a simple accounting identity, but rather a separation result: it means that the value
of the asset side of a ﬁrm is invariant under different funding policies; to put it another
way, following an increase in the amount of nominal debt its value increases exactly by the
same amount as the decrease in the value of equity. It is well known that this is only true
under very restrictive assumptions, such as the absence of taxes and bankruptcy costs, or
Derivatives Pricing, Hedging and Risk Management                                               29

agency costs. Accounting for all of these effects would imply a break-up of the relationship
above, and the choice of the amount of debt would have a feedback effect on the output of
the ﬁrm.
   Apart from such possible complications, it is clear that option theory could be applied to
recover both the value of debt and equity, and to decompose debt into the default-free part
and the credit risk premium.
   Assume that the asset side of the ﬁrm V (t) follows a geometric brownian motion, so
that under the risk-neutral measure we have

                           dV (t) = rV (t) dt + σV V (t) d
                                                          z (t)

Then, the standard Black–Scholes formula can be applied to yield the value of equity C

                    C (t) = V (t)      (d1 ) − exp (−r (T − t)) DD   (d2 )
                            ln(V (t) /DD) + (r + σV2 /2) (T − t)
                       d1 =               √
                                        σV T − t
                                    √
                       d2 = d1 − σV T − t

and the value of debt DD is recovered as

                DD(t) = V (t) − [V (t) (d1 ) − exp(−r(T − t))DD (d2 )]
                       =      (−d1 )V (t) + exp(−r(T − t))DD (d2 )

  Notice that, by adding and subtracting exp (−r (T − t)) DD we can rewrite the value as
                                                                                          
  DD (t) = exp (−r (T − t)) DD − −V (t)            (−d1 ) + exp (−r (T − t)) DD   (−d2 )


and we recognize the short position in the put option representing credit risk.
   The result could be rewritten by deﬁning the underlying asset of the option in percentage
terms, rather than in money amounts. For this reason, we introduce

                                        exp (−r (T − t)) DD
                                 d=
                                                V (t)

which is called by Merton quasi-debt-to-ﬁrm-value ratio or quasi-leverage. The quasi term
is motivated by the fact that the debt is discounted using the risk-free rate rather than the
defaultable discount factor. We have
                                                                           
                                                      1
             DD (t) = exp (−r (T − t)) DD 1 − −           (−d1 ) + (−d2 )
                                                      d

                                     ln (1/d) + σV2 /2 (T − t)
                                d1 =           √
                                            σV T − t
                                             √
                                d2 = d1 − σV T − t
30                                                                   Copula Methods in Finance

 Remembering that the probability of exercise of a put option is equal to             (−d2 ), a
modern way to rewrite the formula above would be
                                                                    
                                                            1 (−d1 )
          DD (t) = exp (−r (T − t)) DD 1 − (−d2 ) 1 −
                                                            d (−d2 )
                     = exp (−r (T − t)) DD {1 − Dp ∗ LGD}
where Dp stands for default probability and LGD is the loss given default ﬁgure in this
model.
                                     Dp =     (−d2 )
                                                 1     (−d1 )
                                   LGD = 1 −
                                                 d     (−d2 )
  Notice that both the default probability and the loss given default are dependent on the
quasi leverage d.
  Finally, in order to account for different maturities, credit risk can be represented in terms
of credit spreads as
                                                                        
                                                               1 (−d1 )
                                       ln 1 − (−d2 ) 1 −
                                                               d (−d2 )
                   r ∗ (t, T ) − r = −
                                                      T −t
                                       ln {1 − Dp ∗ LGD}
                                   =−
                                              T −t
where r ∗ (t, T ) is the yield to maturity of the defaultable bond.
   While the original model is based on very restrictive assumptions, some extensions have
been proposed to make it more realistic. In particular, the extension to defaultable coupon
bond debt was handled in Geske (1977), while the possibility of default events prior to
maturity as well as the effects of debt seniority structures was tackled in Black and Cox
(1976). Finally, the effects of bankruptcy costs, strategic debt servicing behavior and absolute
priority violations were taken into account in Anderson and Sundaresan (1996) and Madan
and Unal (2000).
   Structural models represent a particularly elegant approach to defaultable bond evaluation
and convey the main idea that credit risk basically amounts to a short position in an option.
Unfortunately, the hypothesis that both the recovery rate and default probability depend
on the same state variable, i.e. the value of the ﬁrm, may represent a serious drawback to
the ﬂexibility of the model, overlooking other events that may trigger default. As a result,
the credit spreads that are generated by this model consistently with reasonable values of
asset volatility turn out to be much smaller than those actually observed on the market.
Furthermore, the fact that the value of the asset is modeled as a diffusive process observed
in continuous time gives a typical hump-shaped credit spread curve (in the usual case with
d < 1) with zero intercept: technically speaking this is due to the fact that default is a
predictable event with respect to the information set available at any time t. Three different
ways have been suggested to solve this problem: the ﬁrst is to include a jump in the process
followed by the value of assets (Zhou, 1996); the second is to assume that the value of
the underlying is not observable in continuous time (Dufﬁe & Lando, 2001); the third is
to assume that the default barrier is not observed at any time t (the CreditGrades approach
followed by Finger et al., 2002).
Derivatives Pricing, Hedging and Risk Management                                           31

1.7.2 Reduced form models
A more radical approach to yield a ﬂexible parametric representation for the credit spreads
observed in the market is to model default probability and loss given default separately. By
contrast with structural models, this approach is called the reduced form.
   Assuming the recovery rate to be exogenously given, the most straightforward idea is
to model the default event as a Poisson process. We know that the probability distribution
of this process is indexed by a parameter called intensity (or hazard rate): for this reason,
these models are also called intensity based. If γ is the intensity of the Poisson process
representing default, the probability that this event will not occur by time T is described by
the function
                                                               
                              Pr (τ > T ) = exp −γ (T − t)

where we assume τ > t, that is, the ﬁrm is not in default as of time t. Assume that under
the risk-neutral measure Q we have
                                                                   
                     EQ [1 − 1DEF ] ≡ Pr (τ > T ) = exp −γ (T − t)

and that the default event is independent of interest rate ﬂuctuations. Furthermore, let us
assume that the recovery rate RR is equal to zero, so that the whole principal is lost in case
of default. Under these assumptions, the price of a defaultable zero-coupon bond maturing
at time T is simply

                      DD (t, T ; RR = 0) = D (t, T ) EQ [1 − 1DEF ]
                                                                   
                                         = D (t, T ) exp −γ (T − t)

and the credit spread is obtained as

                                        ln DD (t, T ; RR = 0)         ln D (t, T )
  r ∗ (t, T ; RR = 0) − r (t, T ) ≡ −                           − −                  =γ
                                               T −t                      T −t

  In this special case the credit spread curve is ﬂat and equal to the intensity ﬁgure of the
default process.
  In the more general case of a positive recovery rate RR ≡ 1 − LGD, assumed to be
non-stochastic, we have instead

           DD (t, T ; RR) = D (t, T ) EQ [1 − 1DEF LGD]
                           = D (t, T ) EQ [(1 − 1DEF ) + RR1DEF ]
                                                                    
                           = D (t, T ) RR + (1 − RR) EQ [(1 − 1DEF )]
                           = D (t, T ) RR + (1 − RR) D (t, T ) EQ [(1 − 1DEF )]
                           = D (t, T ) RR + (1 − RR) DD (t, T ; RR = 0)

   So, the value of the defaultable bond is recovered as a portfolio of an investment in
the default-free bond, and one in a defaultable bond with the same default probability and
recovery rate zero.
32                                                                          Copula Methods in Finance

     In terms of credit spreads we have

                                                     ln{RR + (1 − RR) exp[−γ (T − t)]}
               r ∗ (t, T ; RR) − r(t, T ) = −
                                                                   T −t
   Notice that in this case the term structure of the credit spreads is not ﬂat, even though
the intensity is still assumed constant.
   A natural extension of the model is to assume the intensity to be stochastic. In this case,
the default event is said to follow what is called a Cox process. The survival probability of
the obligor beyond time T is determined as
                                                              T          
                 EQ [1 − 1DEF ] ≡ Pr (τ > T ) = EQ exp −          γ (u) du
                                                                       t

  It is easy to see that, from a mathematical point of view, the framework is much the
same as that of interest rate models. These techniques can then be directly applied to the
evaluation of credit spreads.

Afﬁne intensity

As an example, assume that the instantaneous intensity γ (t) follows a diffusive process
dynamics under the risk neutral measure Q

                                 dγ (t) = k (γ − γ (t)) dt + σ γ α d
                                                                    w

     For α = 0,1 we know that the model is afﬁne and we know that the solution to
                                                    T          
                      EQ [1 − 1DEF ] = EQ exp −         γ (u) du
                                                                 t

is
                               T              
                                                                                      
              EQ exp −               γ (u) du        = exp A (T − t) + M (T − t) γ (t)
                             t

     The value of a defaultable discount bond is then

          DD(t, T ; RR) = D(t, T )RR + (1 − RR)DD(t, T ; RR = 0)
                         = D(t, T ){RR + (1 − RR) exp[A(T − t) + M(T − t)γ (t)]}

  Notice that using the framework of the forward martingale measure we can easily extend
the analysis to the case of correlation between interest rate and credit risk. In fact, we leave
the reader to check that the dynamics of the default intensity under such measure, which
we denoted QT , is
                                                        
                      dγ (t) = k (γ − γ (t)) − σT σ γ α dt + σ γ α dw∗
Derivatives Pricing, Hedging and Risk Management                                               33

where we recall that σT is the instantaneous volatility of the default free zero-coupon bond
with maturity T . Using the dynamics above one can compute or simulate the price from
                                                                       T          
  DD (t, T ; RR) = D (t, T ) RR + (1 − RR) D (t, T ) EQT exp −             γ (u) du
                                                                          t

   A ﬁnal comment is in order concerning the recovery rate. Extensions of the model refer
to a stochastic recovery rate. Of course, the extension is immediate as long as one is willing
to assume that the recovery rate is independent of the default intensity and interest rate. In
this case the expected value is simply substituted for the deterministic value assumed in the
analysis above. Obviously, as the support of the recovery rate is in the unit interval, one
has to choose a suitable probability distribution, which typically is the Beta. Accounting for
recovery risk, however, has not been investigated in depth.
   Finally, consider that the choice of the amount with respect to which the recovery rate
is computed may be relevant for the analysis. There are three possible choices. The ﬁrst is
to measure recovery rate with respect to the nominal value of the principal, as supposed in
Jarrow and Turnbull (1995) and Hull and White (1995). The second choice is to compute
it with respect to the market value of debt right before default, as in Dufﬁe and Singleton
(1998). The last one, which is much more common in practice, is to compute it with respect
to principal plus accrued interest. Notice that with the last choice, we get the unfortunate
result that the value of a coupon bond cannot be decomposed into a stream of defaultable
zero-coupon bonds, and the analysis may turn out to be much more involved.

1.7.3 Implied default probabilities
A look at the models above shows that credit risk is evaluated drawing information from
different markets, in particular the equity market, for structural models, and the corporate
bond market, for reduced form models. Nowadays more information is implied in other
markets, such as the credit derivatives markets. A question is how to extract and combine
information from all of these markets to determine the implied risk-neutral default proba-
bility concerning a particular obligor. Here we give a brief account of the different choices
available.

Stock markets

A ﬁrst choice, implicit in structural models, is to draw information from the equity market.
Taking the standard Merton model we have that

                     C (t) = V (t)    (d1 ) − exp (−r (T − t)) DD      (d2 )

where C (t) is the value of equity. As we know, this is a standard application of the
Black–Scholes formula, and we are interested in recovering the probability of exercise
  (d2 ). Let us remark that this probability is referred to the event that the option representing
equity ends up in the money, so that the company does not default. Default probability is then
1 − (d2 ) = (−d2 ). The main difference with respect to the Black–Scholes framework
34                                                                  Copula Methods in Finance

is that in this case not only the volatility of the underlying asset σV , but also its current
value V (t), cannot be observed on the market. What we observe instead is the value of
equity C (t). Some other piece of information is needed to close the model. A possible
solution is to resort to some estimate of the volatility of equity, σC , which can be obtained
from the historical time series of prices or from the options traded on the stock. From Ito’s
lemma, we know that volatility of equity must satisfy

                                                        V (t)
                                    σC = σV     (d1 )
                                                        C (t)

This equation, along with the Black–Scholes formula above, constitutes a non-linear system
of two equations in two unknowns that can be solved to yield the values of V (t) and σC
implied by market prices. The default probability is then recovered, under the risk-neutral
measure, as
                                                                   
                                  ln V (T ) /DD + r − σV2 /2 (T − t)
                   (−d2 ) =     −                 √
                                               σV T − t

   The default probability under the objective measure can be recovered by simply substi-
tuting the actual drift µV of the asset value of the ﬁrm. The latter can be estimated either
from historical data or by resorting to the no-arbitrage relationship µV = r + λσV , where
λ is the market price of risk.
   The solution described above is used in the very well known application of structural
models employed by KMV, a ﬁrm specialized in supplying default probability estimates
about many companies across the world, and recently purchased by Moody’s. We know
that a serious ﬂaw of the Merton approach is that it underestimates the default probability.
The key KMV idea is to apply the argument of the default probability function, which they
denote distance to default
                                                        
                           ln V (T ) /DD + µV − σV2 /2 (T − t)
                         −                   √
                                          σV T − t
to ﬁt the empirical distribution of actual historical defaults.

Example 1.3 Based on Standard and Poor’s statistics for the year 2001, the leverage
ﬁgures of AA and BBB industrial companies were equal to 26.4% and 41%. Using these
ﬁgures, an interest rate equal to 4% and a volatility of the asset side equal to 25% for
both ﬁrms, we compute a risk-neutral default probability over ﬁve years equal to 0.69%
and 4.71% respectively. Assuming a market price of risk equal to 6%, the corresponding
objective probabilities are 0.29% and 2.42% for the AA and the BBB ﬁrm.

Corporate bond markets

Reduced form models suggest that the information about default is in the observed prices
of corporate bonds. Given the zero-coupon-bond yield curve of debt issues from a single
obligor, and given a recovery rate ﬁgure RR we know that

               DD (t, T ; RR) = D (t, T ) RR + (1 − RR) DD (t, T ; RR = 0)
Derivatives Pricing, Hedging and Risk Management                                               35

Furthermore, we know that the value of the zero-coupon with recovery rate zero implied in
this price is

                            DD (t, T ; RR = 0) = D (t, T ) Pr (τ > T )

where again we assume that interest rate risk and default risk are orthogonal. The implied
survival probability is then obtained from defaultable and non-defaultable bond prices as
                                           DD (t, T ; RR) /D (t, T ) − RR
                           Pr (τ > T ) =
                                                       1 − RR
   Alternatively, a common practice in the market is to refer to asset swap spreads as
representative of the credit spread of a speciﬁc issue. To get the main idea behind this
practice, consider a defaultable coupon bond issued at par with coupon equal to r ∗ . We
know that if the bond issued were default-free, it could be swapped at the swap rate SR. We
remind the reader that the swap rate is deﬁned as the coupon that equals the value of the
ﬁxed leg to that of the ﬂoating one in a plain vanilla swap. So, the defaultable cash ﬂow r ∗
can be swapped against a stream of ﬂoating payments plus a spread equal to the difference
between the coupon and the swap rate. The advantage of using the asset swap spread is
that it conveys information on the riskiness of the individual bond, rather than a whole
set of bonds issued by the same entity, while the main ﬂaw is that it may represent other
sources of risk, beyond that of default, linked to speciﬁc features of the issue, particularly its
liquidity. Furthermore, by its very nature it is not well suited to represent the term structure
of default risk and credit spreads. Typically, then, the asset swap spread is used to represent
a ﬂat credit spread and default intensity curve.

Credit default swap markets

The process of ﬁnancial innovation that has characterized the recent development credit
market has offered new tools to extract market information on the default risk of the main
obligors. Credit derivative products, which are used to transfer credit risk among ﬁnancial
institutions, represent a natural source of information concerning the default risk. In particu-
lar, credit default swaps represent a very liquid market to extract such information. A credit
default swap is a contract in which one counterparty buys protection from the other against
default of a speciﬁc obligor, commonly denoted name. The buyer of protection promises
periodic payments of a ﬁxed coupon until the end of the contract or default of the name.
The seller of protection agrees to refund the loss on the assets of a name if default occurs,
either by buying its obligations at par (physical settlement) or by cash refund of the loss on
them (cash settlement). As in a standard swap, its value at origin is zero.
   Assuming, for the sake of simplicity, that no payment is made in case of default for the
coupon period in which the credit event occurs, the credit default swap coupon for maturity
tN is deﬁned from
                    N
                     −1                                       N
                                                                −1
                                                        
              LGD          D (t, ti ) Q (ti ) − Q (ti+1 ) = cN      D (t, ti ) Q (ti+1 )
                    i=1                                          i=1

where cN are the credit default swap spreads observed on the market, Q (ti ) is the survival
probability of the obligor beyond time ti and the loss given default ﬁgure is supposed to be
36                                                                            Copula Methods in Finance

non-stochastic. Notice that the term structure of survival probabilities can be recovered by
means of a bootstrap algorithm. The credit default swap rates are sorted from short to long
maturities. Then, for maturity t1 we have
                                                          LGD
                                           Q (t1 ) =
                                                       c1 + LGD
and for any other maturity tN , N ⩾ 2, one can compute

                                              N −1
                          cN −1 − cN                                          LGD
        Q (tN ) =                           D (t, ti ) Q (ti ) + Q (tN −1 )
                    D (t, tN ) (cN + LGD)                                   cN + LGD
                                                 i=1

  Alternatively, one can assume that the coupon of the period in which the underlying credit
defaults is paid at the end of the period. In this case, the credit default swap is deﬁned as
                        N
                         −1                                       N
                                                                    −1
                                                            
                LGD            D (t, ti ) Q (ti ) − Q (ti+1 ) = cN      D (t, ti ) Q (ti )
                        i=1                                          i=1

     The bootstrap procedure now yields
                                                             c1
                                            Q (t1 ) = 1 −
                                                            LGD
and

                         cN −1 − cN 
                                           N −1                              cN 
            Q (tN ) =                  D (t, ti ) Q (ti−1 ) + Q (tN −1 ) 1 −
                        D (t, tN ) LGD                                       LGD
                                           i=1


1.7.4 Counterparty risk
Credit risk is not only a feature of standard corporate or defaultable bonds. It is also an
element that should be taken into account in the evaluation of any contractual exposure to
a counterparty. Derivative contracts may generate such credit risk exposures, particularly
in transactions on the OTC market, that, as we have noticed above, represent the main
development of the derivative industry.
   The pay-off of a defaultable, or as termed in the literature, vulnerable derivative, is
deﬁned as

                                      G (S, T ) [1 − 1DEF (T ) LGD]

  Of course the dependence structure between the pay-off and the default event may be
particularly relevant, and will be the object of some of the applications presented in this
book. However, even assuming independence of the two risk factors, some important effects
of counterparty risk on the evaluation of derivative contracts can be noticed.
  The ﬁrst, obvious, point is that accounting for counterparty risk leads to a discount in the
value of the derivative, with respect to its default-free value. Even under independence, the
value of the derivative contract is obtained under the risk-neutral valuation measure as

             D (t, T ) EQ [G (S, T )] − D (t, T ) EQ [G (S, T )] EQ [1DEF (T ) LGD]
Derivatives Pricing, Hedging and Risk Management                                            37

that is, the value of the default-free derivative minus the product of such value times the
default probability and the loss given default ﬁgure.
  Both the approaches described above to represent credit risk can be exploited to evaluate
the discount to be applied to a derivative contract in order to account for counterparty risk.
So, under a structural model one could have
                                                                       
                                                               1 (−d1 )
                  D (t, T ) EQ [G (S, T )] 1 − (−d2 ) 1 −
                                                               d (−d2 )

while an intensity based model would yield
                                                                        
                 D (t, T ) EQ [G (S, T )] 1 − (1 − exp (−γ (T − t))) LGD

   The second point to realize is that even though market and credit risk are orthogonal,
they must be handled jointly in practice. If one overlooks counterparty risk in evaluating a
vulnerable derivative, one obtains the wrong price and the wrong hedging policy, ending
up with an undesired market risk.
   The third point to notice is that counterparty risk generally turns linear derivatives into
non-linear ones. To make the point clear, consider the simplest example of a linear vulnerable
derivative, i.e. forward contract. Assume that counterparty A is long in the contract, and
counterparty B is short. The delivery price is the forward price F : we remind the reader that
the forward price is the delivery value that equals to zero the value of a forward contract at
the origin. Assume now that the two counterparties have default probabilities QA (T ) and
QB (T ) and zero recovery rates, and that the time of default is independent of the underlying
asset of the forward contract. Notice that the default risk of counterparty A is relevant only
if the contract ends up in the money for counterparty B, that is, if S (T ) < F , while default
of counterparty B is relevant only if the long counterparty ends up with a gain, that is, if
S (T ) > F . The value of the forward contract is then
                                                                     
     EQ (S (T ) − F ) 1{S(T )>F } QB (T ) + EQ (S (T ) − F ) 1{S(T )<F } QA (T )

where we remind that QA (T ) and QB (T ) are the survival probabilities beyond time T .
Notice that linearity of the product is broken unless QA (T ) = QB (T ). Even in the latter
case, the delta of the contract would not be equal to 1, but would rather be equal to the
survival probability of the two counterparties.

          1.8 COPULA METHODS IN FINANCE: A PRIMER
Up to this point, we have seen that the three main frontier problems in derivative pricing
are the departure from normality, emerging from the smile effect, market incompleteness,
corresponding to hedging error, and credit risk, linked to the bivariate relationship in OTC
transactions. Copula functions may be of great help to address these problems. As we will
see, the main advantage of copula functions is that they enable us to tackle the problem
of speciﬁcation of marginal univariate distributions separately from the speciﬁcation of
market comovement and dependence. Technically, we will see in Chapter 3 that the term
“dependence” is not rigorously correct, because, strictly speaking, dependence is a concept
limited to positive comovement of a set of variables. However, we will stick to the term
38                                                                    Copula Methods in Finance

“dependence” throughout most of this book because it is largely diffused both among prac-
titioners in the ﬁnancial markets and academics in statistics and ﬁnance. We will instead
insist again and again on the distinction between the concept of dependence, deﬁned in this
broad sense, and the concept of linear correlation, which is used by quantitative analysts
in most of the ﬁnancial institutions in the world. In fact, we will show that the concept of
dependence embedded in copula functions is much more general than the standard linear
correlation concept, and it is able to capture non-linear relationships among the markets.

1.8.1 Joint probabilities, marginal probabilities and copula functions

To give an intuitive grasp of the use of copula functions in ﬁnance, consider a very simple
product, a bivariate digital option. This option pays one unit of currency if two stocks or
indexes are above or below a pair of strike price levels. Options like these are very often
used in structured ﬁnance, particularly index-linked products: examples are digital bivariate
notes and, more recently, Altiplano notes.
  As an example, assume a product written on the Nikkei 225 and S&P 500 indexes which
pays, at some exercise date T , one unit if both are lower than some given levels KNKY and
KSP . According to the basic pricing principles reviewed in this chapter, the price of this
digital put option in a complete market setting is

                           DP = exp [−r (T − t)] Q (KNKY , KSP )

where Q (KNKY , KSP ) is the joint risk-neutral probability that both the Japanese and US
market indexes are below the corresponding strike prices.
   How can we recover a price consistent with market quotes? The ﬁrst requirement that
may come to mind is to ensure that the price is consistent with the market prices for plain
vanilla options on each of the two indexes. Say, for example, we can recover, using some
of the models or techniques described in this chapter, the risk-neutral probability QNKY that
the Nikkei index at time T will be below the level KNKY . We can do the same with the
S&P 500 index, recovering probability QSP . In ﬁnancial terms, we are asking what is the
forward price of univariate digital options with strikes KNKY and KSP ; in statistical terms,
what we are estimating from market data are the marginal risk-neutral distributions of the
Nikkei and the S&P indexes.
   In order to compare the price of our bivariate product with that of the univariate ones, it
would be great if we could write the price as

     DP = exp [−r (T − t)] Q (KNKY , KSP ) = exp [−r (T − t)] C (QNKY , QSP )

with C (x, y) a bivariate function.
   Without getting involved in heavy mathematics, we can also discover the general require-
ments that the function C (x, y) must satisfy in order to be able to represent a joint
probability distribution. Beyond the basic requirement that the output of the function must be
in the unit interval, as it must represent a probability, three requirements immediately come
to mind. The ﬁrst: if one of the two events has zero probability, the joint probability that both
events occur must also be zero. So, if one of the arguments of C (x, y) is equal to 0 the func-
tion must return 0. On the contrary, if one event will occur for sure, the joint probability that
both the events will take place corresponds to the probability that the second event will be
Derivatives Pricing, Hedging and Risk Management                                               39

observed. This leads to the second technical requirement that if one of the arguments C (x, y)
is equal to 1 the function must yield the other argument. Finally, it is intuitive to require that
if the probabilities of both the events increase, the joint probability should also increase,
and for sure it cannot be expected to decrease. Technically, this implies a third requirement
for the function C (x, y), that must be increasing in the two arguments (2-increasing is
approximately the correct term: you will learn more on this in Chapter 2). We have just
described the three requirements that enable us to deﬁne C (x, y) as a copula function.
   If we go back to our pricing problem, that’s where copula functions come in: they enable
us to express a joint probability distribution as a function of the marginal ones. So, the
bivariate product is priced consistently with information stemming from the univariate ones.
Beyond the intuitive discussion provided here, this opportunity rests on a fundamental ﬁnd-
ing, known as Sklar’s theorem. This result states that any joint probability distribution can
be written in terms of a copula function taking the marginal distributions as arguments and
that, conversely, any copula function taking univariate probability distributions as arguments
yields a joint distribution.

1.8.2 Copula functions duality
Consider now a bivariate digital call option. Differently from the digital put option, it pays
one unit of currency if both the Nikkei 225 and the S&P 500 indexes are above the strike
levels KNKY and KSP . The relevant probability in this case is

                           DC = exp [−r (T − t)] Q (KNKY , KSP )

  Analogously to the approach above, the copula function method enables us to recover a
copula function C(v, z) such that

                       DC = exp [−r (T − t)] Q (KNKY , KSP )
                           = exp [−r (T − t)] C[Q (KNKY ) , Q (KSP )]

  The new copula function C(v, z) is known as survival copula. Readers will learn from
the mathematical treatment in Chapter 2 that the survival copula is related to the copula
function by the relationship

   C[Q (KNKY ) , Q (KSP )] = 1 − Q (KNKY ) − Q (KSP ) + C[Q (KNKY ) , Q (KSP )]

Readers can also check, as will be discussed in detail in Chapter 8, that the relationship
above corresponds to a requirement to rule out arbitrage opportunities.

1.8.3 Examples of copula functions
Let us start with the simplest example of a copula function. This obviously corresponds
to the simplest hypothesis corresponding to the comovements of the Japanese and the US
markets. Assume, to keep things simple, that the two markets are independent. In this case
we know from basic statistics that the joint probability corresponds to the product of the
marginal probabilities, and we have

           DP = exp [−r (T − t)] Q (KNKY , KSP ) = exp [−r (T − t)] QNKY QSP
40                                                                     Copula Methods in Finance

So, C (x, y) = xy, also known as the product copula, is the ﬁrst function we are able to
build and use to price our bivariate option.
   The next question is what would happen if the two markets were perfectly positively or
negatively correlated. The answer to this question requires us to draw from more advanced
statistics, referring to the so-called Fréchet bounds. The joint probability is constrained
within the bounds

             max (QNKY + QSP − 1, 0) ⩽ Q (KNKY , KSP ) ⩽ min (QNKY , QSP )

Moreover, the upper bound corresponds to the case of perfect positive dependence between
the two markets and the lower bound represents perfect negative dependence. We can
therefore check the impact of perfect positive dependence on the value of the bivariate
product by computing

     DP = exp [−r (T − t)] Q (KNKY , KSP ) = exp [−r (T − t)] min (QNKY , QSP )

So, C (x, y) = min (x, y) is another copula function, known as the maximum copula. The
minimum copula will instead correspond to the case of perfect negative dependence and to
the Fréchet lower bound C (x, y) = max (x + y − 1, 0) yielding

                      DP = exp [−r (T − t)] Q (KNKY , KSP )
                          = exp [−r (T − t)] max (QNKY + QSP − 1, 0)

  We have then recovered copula functions corresponding to the extreme cases of indepen-
dence and perfect dependence. Moving one step forward, we could try to build a copula
function accounting for imperfect dependence between the two markets. The ﬁrst idea would
be to try a linear combination of the three cases above, obtaining

         C (QNKY , QSP ) = β max (QNKY + QSP − 1, 0) + (1 − α − β) QNKY QSP
                              + α min (QNKY , QSP )

with 0 ⩽ α, β ⩽ 1 and α + β = 1. Copula functions obtained in this way deﬁne the so-called
Fréchet family of copula functions.
   Other ways of obtaining copula functions are more involved and less intuitive. For
example, consider taking a function ϕ (.) satisfying some technical conditions that will
be discussed in more detail throughout the book. If we deﬁne

                       C (QNKY , QSP ) = ϕ [−1] [ϕ (QNKY ) + ϕ (QSP )]

we obtain copula functions. Copulas constructed in this way are called Archimedean copulas
and are largely used in actuarial science.
   As a ﬁnal idea, one could try to generalize and make more ﬂexible the standard setting
under which most of the results in ﬁnance were obtained under the Black–Scholes theory.
This corresponds to normal distribution of the returns, which in this case is extended to mul-
tivariate normality. From this perspective, a particularly useful result is that the joint standard
Derivatives Pricing, Hedging and Risk Management                                            41

normal distribution computed in the inverse of the arguments satisﬁes the requirements of
a copula function. We may then price our bivariate claim using
                                                       −1              −1
                   DP = exp[−r(T − t)] [                    (QNKY ),        (QSP ); ρ]

where (x, y; ρ) is the standard bivariate normal distribution with correlation parameter
ρ. This example is particularly useful to highlight the main advantage from the use of
copula functions. Notice in fact that in this way we may preserve the dependence structure
typical of a multivariate normal distribution by modifying only the marginal distributions,
which may be allowed to display skewness and fat-tails behavior consistently with the data
observed from the market.

1.8.4 Copula functions and market comovements
As we have already seen from the examples, copula functions provide a way to represent the
dependence structure between markets and risk factors, while preserving the speciﬁcation of
the marginal distribution of each and every one of them. Representing market comovements
in a world in which the marginal distribution of returns is not normal raises problems that
may be new for many scholars and practitioners in ﬁnance.
   The main result is that linear correlation, which represents the standard tool used in the
dealing rooms and risk management units to measure the comovement of markets may turn
out to be a ﬂawed instrument in the presence of a non-normal return. Linear correlation
between the rate of returns rNKY and rSP in our two markets may be written as
                                   cov (rNKY , rSP )
           corr (rNKY , rSP ) =
                                      σNKY σSP
                                         1         ∞    ∞
                               =                             [Q (x, y) − QNKY QSP ] dx dy
                                   σNKY σSP       −∞ −∞

where σNKY and σSP represent volatilities. Notice that the correlation depends on the
marginal distributions of the returns. The maximum value it can achieve can be computed
by substituting the upper Fréchet bound in the formula

            corrmax (rNKY , rSP )
                          1          ∞       ∞
                  =                              [min (QNKY , QSP ) − QNKY QSP ] dx dy
                      σNKY σSP      −∞ −∞

and the value corresponding to perfect negative correlation is obtained by substituting the
lower bound

       corrmin (rNKY , rSP )
                      1        ∞      ∞
             =                            [max (QNKY + QSP − 1, 0) − QNKY QSP ] dx dy
                 σNKY σSP      −∞ −∞

  Of course everyone would expect these formulas to yield corrmax = 1 and corrmin = −1.
The news is that this is not true in general. Of course, that is what we are used to expect in
42                                                                                 Copula Methods in Finance

a world of normal returns. The result would also hold in the more general case of elliptic
distributions, but not for other arbitrary choices. Looking at the problem from a different
viewpoint, correlation is an effective way to represent comovements between variables if
they are linked by linear relationships, but it may be severely ﬂawed in the presence of non-
linear links. Readers may check this in the simple case of a variable z normally distributed
and z2 which is obviously perfectly correlated with the ﬁrst one, but has a chi-squared
distribution.
   So, using linear correlation to measure the comovements of markets in the presence of
non-linear relationships may be misleading because it may not cover the whole range from
−1 to +1 even though two markets are moved by the same factor, and so are perfectly
dependent.
   The alternative offered by statistics to this shortcoming is the use of non-parametric
dependence measures, such as Spearman’s ρS and Kendall’s τ . The non-parametric feature
of these measures means that they do not depend on the marginal probability distributions.
It does not come as a surprise, then, that these measures are directly linked to the copula
function. In particular, it may be proved that the following relationships hold
                                              1           1
                            ρS = 12                           C (u, v) dudv − 3
                                          0           0
                                          1           1
                             τ =4                         C (u, v) dC (u, v) − 1
                                      0           0

   Notice that the speciﬁc shape of the marginal probability distributions does not enter these
relationships. Furthermore, it may be proved that substituting the maximum and minimum
copulas in these equations gives values of 1 and −1 respectively. Differently from the linear
correlation measure, then, if the two variables (markets in our case) are perfectly dependent
we expect to observe ﬁgures equal to 1 for Spearman’s ρS and Kendall’s τ , while a score
−1 corresponds to perfect negative dependence.
   The relationship between non-parametric dependence measures and copula functions can
also be applied to recover a ﬁrst calibration technique of the copula function itself. In
some cases the relationship between these non-parametric statistics and the parameters of
the copula function may also be particularly easy. One of the easiest, that we report as
an example, is the relationship between the copula functions of the Fréchet family and
Spearman’s ρS . We have in fact

                                                  ρS = α − β

where the parameters α, β are reported in the deﬁnition of the Fréchet family given above.

1.8.5 Tail dependence
The departure from normality in a multivariate system and the need to represent the comove-
ment of markets as closely as possible raises a second dimension of the problem. We know
that non-normality at the univariate level is associated with skewness and leptokurtosis
phenomena, and what is known as the fat-tail problem. In a multivariate setting, the fat-
tail problem can be referred both to the marginal univariate distributions or to the joint
Derivatives Pricing, Hedging and Risk Management                                          43

probability of large market movements. This concept is called tail dependence. Intuitively,
we may conceive markets in which the marginal distributions are endowed with fat tails,
but extreme market movements are orthogonal, or cases in which the returns on each market
are normally distributed, but large market movements are likely to occur together. The use
of copula functions enables us to model these two features, fat tails and tail dependence,
separately.
   To represent tail dependence we consider the likelihood that one event with probability
lower than v occurs in the ﬁrst variable, given that an event with probability lower than
v occurs in the second one. Concretely, we ask which is the probability to observe, for
example, a crash with probability lower than v = 1% in the Nikkei 225 index, given that a
crash with probability lower than 1% has occurred in the S&P 500 index. We have

                             λ (v) ≡ Pr(QNKY ⩽ v | QSP ⩽ v)
                                      Pr(QNKY ⩽ v, QSP ⩽ v)
                                  =
                                           Pr(QSP ⩽ v)
                                      C (v, v)
                                  =
                                         v
  If we compute this dependence measure far in the lower tail, that is, for very small values
of v, we obtain the so-called tail index, in particular the lower tail index

                                                   C (v, v)
                                    λL ≡ lim
                                          v→0+        v

  It may be easily veriﬁed that the tail index is zero for the product copula and 1 for the
maximum copula. Along the same lines, one can also recover the tail dependence for the
upper tail index. Analogously, using the duality among copulas described above, we have

                                              Pr(QNKY > v, QSP > v)
                     λU = lim λv ≡ lim
                           v→1−        v→1−           Pr(QSP > v)
                                  1 − 2v + C (v, v)
                         = lim
                           v→1−         1−v

and this represents the probability that price booms may occur at the same time in the US
and Japanese markets.

1.8.6 Equity-linked products
Here we give a brief preview of applications to equity-linked products, beyond the simple
multivariate digital options seen above. Consider a simple case of a rainbow option, such
as, for example, a call option on the minimum between two assets. These derivatives are
largely used in structured ﬁnance. An example is a class of products, known as Everest
notes, whose coupon at the given time T is determined by computing, for example,
                                                                      
                                            SNKY (T ) SSP (T )
                  coupon (T ) = max min               ,          − 1, 0
                                            SNKY (0) SSP (0)
44                                                                    Copula Methods in Finance

where SNKY and SSP are the values of the Nikkei 225 and the S&P 500 indexes and time
0 is the initial date of the contract. At any time 0 < t < T , the value of the coupon will
be computed as a call option with strike on the minimum between two assets whose initial
value was 1. The strike price is set equal to 1. We will see in Chapter 8 that the price
of options like these can be computed using copula functions. Here we just convey the
intuition by working the argument backward. Assume that you have a price function for the
rainbow option above

         CALL [sNKY (t) , sSP (t) ; K, T ]
               = exp [−r (T − t)] EQ [max (min (sNKY (T ) , sSP (T )) − K, 0) | t ]

where we have simpliﬁed the notation deﬁning sNKY (t) and sSP (t), the values of the indexes
rescaled with respect to their levels at time 0. Of course in our case we also have K = 1.
Applying what we know about implied risk-neutral probability we have

       Pr (min (sNKY (T ) , sSP (T )) > 1 | t ) = Pr (sNKY (T ) > 1, sSP (T ) > 1 | t )
                                                = Q (1, 1 | t )
                                                                      ∂CALL
                                                = − exp [r (T − t)]
                                                                        ∂K
Using copula functions we obtain

                                                                      ∂CALL
         Q (1, 1 | t ) = C QNKY (1) , QSP (1) | t = − exp [r (T − t)]
                                                                          ∂K
By integrating from the strike K = 1 to inﬁnity we have
                                                    ∞                           
          CALL (sNKY (t) , sSP (t) ; K, T ) =           C QNKY (η) , QSP (η) | t dη
                                                1

and the call option is written in terms of copula functions. Much more about applications
and cases like these and techniques by which closed form solutions may also be recovered
is reported in Chapter 8.


1.8.7 Credit-linked products

The vast majority of copula function applications have been devoted to credit risk and
products whose pay-off depends on the performance of a basket of obligations from several
obligors (names). In order to illustrate the main choices involved, we describe the application
to a standard problem, that is the pricing of a ﬁrst-to-default swap. This product is a credit
derivative, just like the credit default swap described above, with the difference that the
counterparty offering protection pays a sum, for example a ﬁxed amount, at the ﬁrst event
of default out of a basket of credit exposures.
   To see how the pricing problem of a ﬁrst-to-default derivative leads to the use of copula
functions consider a product that pays one unit of currency if at least one out of two
credit exposures defaults by time T . It is clear that the risk-neutral probability of paying
Derivatives Pricing, Hedging and Risk Management                                          45

the protection is equal to that of the complement to the event that a credit exposure goes
bankrupt – that is, the case that both names will survive beyond time T . Formally,

                  FTD = exp [−r (T − t)] [1 − Pr (τ1 > T , τ2 > T | t )]

where FTD denotes ﬁrst-to-default, τi , i = 1, 2 denote the default times of the two names.
It is then immediate to write the price in terms of copula functions
                                                                   
                 FTD = exp [−r (T − t)] 1 − C Q1 (T ) , Q2 (T ) | t

  Using the duality relationship between a copula function and its survival copula we obtain

         FTD = exp [−r (T − t)] [Q1 (T ) + Q2 (T ) − C (Q1 (T ) , Q2 (T ) | t )]

and the value of the product is negatively affected by the dependence between the defaults
of the two names. This diversiﬁcation effect may be appraised computing the case of perfect
positive dependence

       FTDmax = exp [−r (T − t)] [Q1 (T ) + Q2 (T ) − min (Q1 (T ) , Q2 (T ) | t )]
                = exp [−r (T − t)] [max (Q1 (T ) , Q2 (T ) | t )]

and that corresponding to independence

           FTD⊥ = exp [−r (T − t)] [Q1 (T ) + Q2 (T ) − Q1 (T ) Q2 (T ) | t ]
                                                                   
                = exp [−r (T − t)] Q1 (T ) + Q1 (T ) Q2 (T ) , | t

   So, as the value of the copula function increases with dependence, the value of the
ﬁrst-to-default product decreases.
   Of course one could consider reconducting the analysis to the multivariate normal dis-
tribution, by using structural models to specify the marginal distributions and the Gaussian
copula to represent dependence
                                                 −1                 −1
             C (Q1 (T ) , Q2 (T ) | t ) =   [        (Q1 (T )) ,        (Q2 (T )) ; ρ]

where −1 (Qi (T )), i = 1, 2 denote the inverse of marginal default probabilities consistent
with both the leverage ﬁgures of the names and volatilities of their assets, while ρ is the
correlation between the assets. In this approach, which is used for example in CreditMetrics,
the correlation ﬁgure is recovered either from equity correlation or by resorting to the
analysis of industrial sector comovements.

Example 1.4 Consider a ﬁrst-to-default option written on a basket of two names, rated AA
and BBB. Under the contract, the counterparty selling protection will pay 1 million euros
if one of the names defaults over a 5-year period. We saw in a previous example that the
leverage ﬁgures of AA and BBB industrial companies were equal to 26.4% and 41%. Under
the risk-neutral probability measure, assuming the risk-free rate ﬂat at 4% and a volatility
of the asset side equal to 25% for both the ﬁrms, we obtained 0.69% and 4.71% default
46                                                                             Copula Methods in Finance

probabilities respectively. The maximum value of the ﬁrst-to-default can be immediately
computed as

                    FTDmax = 1 000 000 exp [−0.04(5)] [0.0471] = 38 562

     If one assumes independence between the two credit risks, we obtain instead

            FTD⊥ = 1 000 000 exp [−0.04(5)] [0.0069 + 0.9931(0.0471)] = 43 945

   Finally, assuming a Gaussian copula with an asset correlation equal to 20%, the value
“in fashion” in the market at the time we are writing, we obtain a joint default probability
of 0.088636%. The price of the ﬁrst-to-default swap is then

       FTD = 1 000 000 exp [−0.04(5)] [0.0471 + 0.0069 − 0.00088636] = 43 486

Besides this case, it is easy to see why copula functions may be particularly useful in
this case. If, for example, we choose to model the distribution of the time to default as
in reduced form models, rather than the structure of the ﬁrm as in structural models, it is
clear that the assumption of normality can no longer be preserved. In this case the marginal
distributions are obviously non-Gaussian since they are referred to default times and are
naturally deﬁned on a non-negative support. Nevertheless, we may conceive applications
that may involve features from both structural and reduced form models. For example, the
joint default probability may be speciﬁed by using a reduced form model for the marginals
and the structural model for the dependence structure. We may write
                                    −1                                  −1
 C(Q1 (T ), Q2 (T ) | t ) =    [        (1 − exp(−γ1 (T − t))),             (1 − exp(−γ2 (T − t))); ρ]

where γi , i = 1, 2 denote the default intensities of the two names and now, differently
from the fully structural model quoted above, ρ is correlation between the default times.
Notice that in this way we may mix information stemming from different sources, such as
equity market for the speciﬁcation of the dependence structure, and corporate bond or credit
default bond markets for the marginal distributions. We now give a simple example of this
ﬂexibility, but, again, this has to be taken only as an appetizer to invite readers to get into
the details of the matter, which will be covered in the rest of the book.

Example 1.5 Consider a 5-year ﬁrst-to-default option written on a basket of two names,
namely Deutsche Telecom and Dresdner Bank. The nominal value is 1 million euros. The
information we have is that the default probability of DT, bootstrapped from a credit default
swap, is 12.32%. As for Dresdner, we know that the asset swap spread for a 5-year bond
is 75 bp. This allows us to compute a default probability of [1 − exp(−0.0075(5))] =
3.6806%. We assume that the correlation between the default times is 50% and that the
copula is Gaussian. So, we ﬁrst compute −1 (12.32%) = −1.15926. Analogously, we have
for Dresdner −1 (3.6806%) = −1.788967169. The joint default probability is computed
from
                                                −1                 −1
          C (Q1 (T ) , Q2 (T ) | t ) =     (        (3.6806%) ,        (12.32%) ; 50%)
                                     =      (−1.788967169, −1.15926; 50%) = 1.729%
Derivatives Pricing, Hedging and Risk Management                                       47

  The price of the ﬁrst-to-default is then

      FTD = 1 000 000 exp [−0.04(5)] [0.03606 + 0.1232 − 0.01729] = 116 240

  Notice that the value obtained is very close to the case of perfect default dependence,
which would obviously cost 123 200, and the basket of names of the ﬁrst-to-default in this
example is deﬁnitely undiversiﬁed.
                                      2
                          Bivariate Copula Functions

This chapter introduces the notion of a copula function and its probabilistic interpretation,
which allows us to consider it a “dependence function” (Deheuvels, 1978). It also examines
the survival copula and density notions, together with the canonical representation and,
lastly, the use of copulas in setting probability bounds for sums of random variables. It
collects a number of ﬁnancial applications, which will be further developed in the following
chapters. The examples are mainly intended to make the reader aware of the usefulness of
copulas in extending ﬁnancial modeling beyond the Black–Scholes world. All the proofs
are in the Appendix (see page 87).
   We take for granted that the reader is familiar with the notions of the (right continuous)
joint distribution function (or joint cumulative distribution function or joint c.d.f.)
F (x, y) of a couple of random variables (r.v.s) X and Y , as well as with their marginal
distribution functions (or d.f.s or margins) Fi (t), i = 1, 2. We deﬁne the generalized
inverse of a distribution function as1

                                Fi−1 (t) = inf {u : Fi (u) ⩾ t, 0 < t < 1}


                        2.1 DEFINITION AND PROPERTIES
The section is organized as follows: ﬁrst we present subcopulas, provide an example and list
a number of subcopula properties. Then we deﬁne copulas, as introduced by Sklar2 (1959)
and link them to distributions of uniform random variates.
   To start with, we need the notions of groundedness and the 2-increasing property, which
allow copulas to respect the distribution function properties.

Deﬁnition 2.1 Let us consider two non-empty subsets A1 and A2 of ∗ and a function
G : A1 × A2 → . Denote with ai the least element of Ai , i = 1, 2. The function G is
named grounded if, for every (v, z) of A1 × A2 ,

                                         G(a1 , z) = 0 = G(v, a2 )


1 Evidently, this notion reduces to the usual inverse function one if F is increasing.
                                                                       i
2 Copulas were introduced by Sklar (1959): important developments in the theory are due to Schweizer and Sklar
(1974, 1983), who studied them in the context of probabilistic metric spaces, and to Schweizer and Wolff (1981).
Independent, early work is due also to Hoeffding (1940), Kimeldorf and Sampson (1975), Deheuvels (1978, 1979).
Related problems, such as the characterization of the Fréchet class or the deﬁnition of measures of dependence,
date back to the 1950s (see, respectively, Fréchet (1951) and Rényi (1959)): they were later related with and
merged in the theory of copulas, as we will illustrate in the text. For “a historical overview and rather personal
account” see Schweizer (1991).
50                                                                             Copula Methods in Finance

Deﬁnition 2.2 G : A1 × A2 →  is called 2-increasing if for every rectangle [v1 , v2 ] ×
[z1 , z2 ] whose vertices lie in A1 × A2 , such that v1 ⩽ v2 , z1 ⩽ z2

                       G(v2 , z2 ) − G(v2 , z1 ) − G(v1 , z2 ) + G(v1 , z1 ) ⩾ 0                       (2.1)

   The l.h.s. of (2.1) measures the mass or area, according to the function G, of the rectangle
[v1 , v2 ] × [z1 , z2 ]. Then, 2-increasing functions assign non-negative mass to every rectangle
in their domain.
   The above deﬁnitions allow us to deﬁne subcopulas.

Deﬁnition 2.3 A two-dimensional subcopula C is a real function deﬁned on A × B, where
A and B are non-empty subsets of I = [0, 1], containing both 0 and 1:

                                            C :A×B →

 (i) grounded (C(v, 0) = C(0, z) = 0)
(ii) such that

                                        C(v, 1) = v,         C(1, z) = z

      for every (v, z) of A × B
(iii) 2-increasing

Example 2.1 Set A = B = I and consider the function C(v, z) = max(v + z − 1, 0).
Since max(z − 1, 0) = max(v − 1, 0) = 0, C is grounded. Property (ii) is satisﬁed, since
max(z, 0) = z, max(v, 0) = v. C is also 2-increasing, since z1 ⩽ z2 implies

                           max(v2 + z1 − 1, 0) − max(v1 + z1 − 1, 0)
                           ⩽ max(v2 + z2 − 1, 0) − max(v1 + z2 − 1, 0)                                 (2.2)

Rearranging we get (2.1). The function max(v + z − 1, 0) on I 2 is therefore a subcopula.

Remark 2.1 The above
                        function is still a subcopula if, instead of setting A = B = I , one
sets A = B = {0} ∪ 12 , 1 .

As a general rule, the 2-increasing property neither implies nor is implied by the non-
decreasing property in each argument3 : however, 2-increasing functions which are also
grounded, such as subcopulas, are non-decreasing in each place.

Theorem 2.1 A function G(v, z) : A1 × A2 →  grounded and 2-increasing is non-de-
creasing in both v and z.

It follows from properties (i), (ii) of the subcopula deﬁnition, together with Theorem 2.1,
that:

3 Examples of 2-increasing functions which are not non-decreasing in each argument (and vice versa) are given
for instance by Schweizer and Sklar (1983, section 6.1).
Bivariate Copula Functions                                                                                  51

Corollary 2.1 For every (v, z) of A × B

                                              0 ⩽ C(v, z) ⩽ 1

  Another property of subcopulas is (uniform) continuity, which in turn will prove to be
useful for the so-called section (and differentiability) properties.

Theorem 2.2 C is uniformly continuous on A × B.

   Indeed, as a consequence of Theorems 2.1 and 2.2 we get

Corollary 2.2 For a given subcopula, the functions W and V deﬁned – for k ∈ B, K ∈
A – as follows:

                                             Wk (x) = C(x, k)
                                             VK (x) = C(K, x)

are non-decreasing and uniformly continuous.

These functions are called, respectively, the horizontal and vertical sections of the subcop-
ula C. The section properties entail the following.

Theorem 2.3 In the interior of A × B, both partial derivatives of the C function, ∂C/∂v,
∂C/∂z, exist almost everywhere and take values in I .

Example 2.2 The partial derivatives of the subcopula in Example 2.1 exist whenever
v + z − 1 = 0, i.e. z = 1 − v. Since max(v + z − 1, 0) = v + z − 1 whenever z > 1 − v,
they are
                                                
                                      ∂C   ∂C     0 z<1−v
                                         =    =
                                      ∂v   ∂z     1 z>1−v

Having given the deﬁnition of the two-dimensional subcopula and its main properties, we
are now in a position to deﬁne two-dimensional copulas.4

Deﬁnition 2.4 (Sklar, 1959)          A two-dimensional copula C is a two-dimensional subcopula
with A = B = I .

The subcopula of Example 2.1 is actually a copula.
  First of all, let us notice that, from the deﬁnition, copulas are joint distribution functions
of standard uniform random variates:

                                     C(v, z) = Pr(U1 ⩽ v, U2 ⩽ z)

4 In the rest of the chapter we will omit the term “two-dimensional” while referring to subcopulas and copulas,
since the deﬁnition of n-dimensional subcopulas and copulas is deferred until Chapter 4.
52                                                                  Copula Methods in Finance

The following probabilities of uniform variates can then be written via copulas:

                   Pr(U1 ⩽ v, U2 > z) = v − C(v, z)
                   Pr(U1 > v, U2 ⩽ z) = z − C(v, z)
                  Pr(U1 ⩽ v | U2 ⩽ z) = C(v, z)/z
                                         v − C(v, z)
                  Pr(U1 ⩽ v | U2 > z) =
                                            1−z
                                                C(v, z + z) − C(v, z)   ∂C(v, z)
     C1|2 (v, z) ≡ Pr(U1 ⩽ v | U2 = z) = lim                           =
                                         z→0+           z                ∂z
                                         ∂C(v, z)
     C2|1 (v, z) ≡ Pr(U2 ⩽ z | U1 = v) =
                                            ∂v

Second, we know from elementary probability theory that the probability-integral trans-
forms of the r.v.s X and Y , X → F1 (X), Y → F2 (Y ), are distributed as standard uniform
Ui , i = 1, 2:
                              F1 (X) ∼ U1 ,  F2 (Y ) ∼ U2

Analogously, the transforms according to Fi−1 of standard uniforms are distributed according
to Fi :
                                      Fi−1 (Ui ) ∼ Fi

Since copulas are joint distribution functions of standard uniforms, a copula computed at
F1 (x), F2 (y) gives a joint distribution function at (x, y):

                  C(F1 (x), F2 (y)) = Pr (U1 ⩽ F1 (x), U2 ⩽ F2 (y))
                                                                       
                                    = Pr F1−1 (U1 ) ⩽ x, F2−1 (U2 ) ⩽ y

                                   = Pr (X ⩽ x, Y ⩽ y)
                                   = F (x, y)                                           (2.3)

This anticipates part of the link between distribution functions and copulas, which will be
the content of Sklar’s theorem. Before studying the latter, let us introduce the bounds for
copulas, analogous to the Fréchet bounds for distribution functions.


      2.2 FRÉCHET BOUNDS AND CONCORDANCE ORDER
It is straightforward to demonstrate that subcopulas are bounded:

Theorem 2.4 Subcopulas satisfy the following inequality:

                         max(v + z − 1, 0) ⩽ C(v, z) ⩽ min(v, z)                        (2.4)

for every point (v, z) ∈ A × B.
Bivariate Copula Functions                                                                  53




                                                            1
         1
                                                         0.75
      0.75
                                                           0.5
       0.5

      0.25             1                                  0.25
               0.67
           0.33
        0.0                                                0.0
            0                                               0 0.33
                0.33   0.67                                          0.67 1
                                 1



                      Figure 2.1 Minimum (left) and maximum (right) copulas



   When (v, z) ∈ I 2 , so that C becomes a copula, the bounds in (2.4) are copulas too: in the
remainder of the section we will consider this case. The lower bound is denoted by C − , and
called the minimum copula; the upper bound is denoted by C + , and called the maximum
copula. They are represented in Figure 2.1.
   From Theorem 2.4 and continuity it follows that the graph of each copula is “a continuous
surface over the unit square that contains the skew quadrilateral whose vertices are (0, 0, 0),
(1, 0, 0), (1, 1, 1) and (0, 1, 0). This surface is bounded below by the two triangles that
together make up the surface of C − and above by the two triangles that make up the surface
of C + ” (Schweizer, 1991), as in Figure 2.2.
   Theorem 2.4 has consequences on the so-called level curves of the copula C(v, z), i.e.
the set of points of I 2 such that C(v, z) = K, with K constant:
                                                                     
                                         (v, z) ∈ I 2 : C(v, z) = K

The level curves of the minimum and maximum copulas are

                              {(v, z) : max(v + z − 1, 0) = K},           K∈I
                                                                                          (2.5)
                                         {(v, z) : min(v, z) = K},        K∈I

They are represented in the plane (v, z) respectively by segments parallel to the line z = −v,
and kinked lines (see Figure 2.3).
   It follows from the previous theorem that, for ﬁxed K, the level curve of each C
stays in the triangle formed by the level sets (2.5). As K increases, the triangle is shifted
upwards.
   We will see below that level curves play an important role in ﬁnancial applications of
copulas, both for the simple evaluation of relationships between ﬁnancial asset returns and
for value-at-risk trade-off assessment.
   The existence of the lower and upper bounds also suggests the following deﬁnition of
concordance order:
54                                                                           Copula Methods in Finance




                                       0.8

                                       0.6

                                       0.4

                                        0.2
                                         0     0
                                         0           0.2
                                                           0.4
                                                                 0.6
                                   0.2                                 0.8


                                 0.4

                             0.6

                           0.8




       Figure 2.2 The pyramid is the region in which the copula graph is always included




           Figure 2.3 Level curves of the minimum (left) and maximum (right) copulas


Deﬁnition 2.5 The copula C1 is smaller than the copula C2 − written as C1 ≺ C2 − iff

                                              C1 (v, z) ⩽ C2 (v, z)

for every (v, z) ∈ I 2 .
Bivariate Copula Functions                                                                  55




               1

            0.75

             0.5

             0.25
                             0.67
              0.0 0.33
                0
               0.33
                  0.67
                         1


                      Figure 2.4 The product copula and its level curves


The order so deﬁned is only partial, since not all copulas can be compared. In order to present
some examples of concordance order, let us also deﬁne the product copula, represented in
Figure 2.4, as
                                        C ⊥ (v, z) = vz


Example 2.3 One can easily verify that any convex linear combination of C − and C + is
a copula. Consider, for instance, the case

                                            C = 13 C − + 23 C +

It is possible to ﬁnd points in I 2 where C ⩾ C ⊥ , as well as points where C < C ⊥ , so that
the two are not comparable. In particular

                                3 max(v + z − 1, 0) + 3 min(vz) > vz
                                1                     2


when v = z = 12 , while the opposite inequality holds for v = 14 , z = 34 .

   We will encounter one-parameter families of copulas – to be deﬁned exactly below – which
are totally ordered. The order will depend on the value of the parameter: in particular, a
family will be positively (negatively) ordered iff, denoting with Cα and Cβ the copulas with
parameter values α and β respectively, Cα (v, z) ≺ Cβ (v, z) whenever α ⩽ β (α ⩾ β). For
positively (negatively) ordered families, the level curves of Cα stay above those of Cβ .

Example 2.4 One can easily demonstrate – using the deﬁnition – that, for every p ∈ I

                                      C(v, z) = pC − + (1 − p)C ⊥

is a copula. Since C − ≺ C ⊥ , for p1 ⩾ p2 we have

                                    (p1 − p2 ) C − − (p1 − p2 )C ⊥ ⩽ 0
56                                                                     Copula Methods in Finance

Rearranging:
                        p1 C − + (1 − p1 )C ⊥ ⩽ p2 C − + (1 − p2 )C ⊥

which shows that the copula family under examination is negatively ordered with respect
to the constant p.

        2.3 SKLAR’S THEOREM AND THE PROBABILISTIC
                INTERPRETATION OF COPULAS
The point of departure for ﬁnancial applications of copulas is their probabilistic interpreta-
tion, i.e. the relationship between copulas and distribution functions of r.v.s. This relationship
is essentially contained in Sklar’s theorem, which says that not only are copulas joint dis-
tribution functions, as argued in (2.3), but the converse also holds true: joint distribution
functions can be rewritten in terms of the marginals and a (unique) subcopula, which in
turn can be extended (not uniquely, in general) to a copula. Therefore, “much of the study
of joint distribution functions can be reduced to the study of copulas” (Schweizer, 1991).
   The presentation is organized as follows: in section 2.3.1 we state Sklar’s theorem. In
section 2.3.2 we present a corollary of Sklar’s theorem, which permits us to reconstruct
the subcopula mentioned in the theorem. In section 2.3.3 we comment on the modeling
ﬂexibility given by the theorem. Section 2.3.4 provides some ﬁnancial applications.

2.3.1 Sklar’s theorem
Consider a probability space (, , P ), with  a non-empty set,           a sigma algebra on
 and P a probability measure on . Let X and Y be two (Borel-measurable) r.v.s on
(, , P ) with values in ∗ , the extended real line. Let also F , F1 and F2 be their joint
and marginal distribution functions. As usual, the r.v.s are said to be continuous when their
d.f.s are.

Theorem 2.5 (Sklar, 1959) Let F1 (x), F2 (y) be (given) marginal distribution functions.
Then, for every (x, y) ∈ ∗2 :

 (i) if C is any subcopula whose domain contains Ran F1 × Ran F2 ,

                                          C(F1 (x), F2 (y))

     is a joint distribution function with margins F1 (x), F2 (y);
(ii) conversely, if F (x, y) is a joint distribution function with margins F1 (x), F2 (y), there
     exists a unique subcopula C, with domain Ran F1 × Ran F2 , such that

                                     F (x, y) = C(F1 (x), F2 (y))                           (2.6)

     If F1 (x), F2 (y) are continuous, the subcopula is a copula; if not, there exists a copula
     C such that
                                         C(v, z) = C(v, z)

     for every (v, z) ∈ Ran F1 × Ran F2 .
Bivariate Copula Functions                                                                   57

Example 2.5 Consider the copula in Example 2.1, deﬁned on Ran F1 × Ran F2 . The
function
                  C(F1 (x), F2 (y)) = max(F1 (x) + F2 (y) − 1, 0)

is a joint distribution function if F1 and F2 are marginal, since:

 (i) it is deﬁned for every (x, y) ∈ ∗2
(ii) it is 2-increasing:

                 max(F1 (x2 ) + F2 (y2 ) − 1, 0) − max(F1 (x2 ) + F2 (y1 ) − 1, 0)
                 − max(F1 (x1 ) + F2 (y2 ) − 1, 0) + max(F1 (x1 ) + F2 (y1 ) − 1, 0) ⩾ 0

(iii) it is grounded:

                                  max(F1 (−∞) + F2 (y) − 1, 0) = 0
                                  max(F1 (x) + F2 (−∞) − 1, 0) = 0

(iv) it gives:

                               C(F1 (+∞), F2 (+∞)) = max(1, 1) = 1

(v) it is right continuous, since F1 and F2 are. Its margins are

                             C(F1 (x), F2 (+∞)) = max(F1 (x), 0) = F1 (x)
                             C(F1 (+∞), F2 (y)) = max(F2 (y), 0) = F2 (y)

     This veriﬁes part (i) of the theorem. As for part (ii), consider for instance two standard
     uniform r.v.s:
                                          
                                           0         x<0
                                 F1 (x) =     x       0⩽x⩽1
                                          
                                              1       x>1

     and analogously for y. Suppose that their joint distribution function for inf(x, y) > 0 is

                              F (x, y) = max(inf(x, 1) + inf(y, 1) − 1, 0)                 (2.7)

     and 0 otherwise. Since F1 and F2 are continuous, there exists a unique copula C such
     that

                                      F (x, y) = C(F1 (x), F2 (y))

     This is exactly the copula of Example 2.1.

   If F1 (x), F2 (y) are not continuous, uniqueness of the copula C, which extends the sub-
copula C, is not guaranteed. If, for instance, Ran F1 × Ran F2 is a singleton, every copula
that has the same value as C at that point satisﬁes the theorem. We can also provide the
following example.
58                                                                           Copula Methods in Finance

Example 2.6 Let us consider the following distributions:

                                    0                                  x or y < 0
                   F (x, y) =
                                    2 (inf(x, 1) + inf(y, 1))          0 ⩽ x, y ⩽ 1
                                    1
                                
                                 0                                    x<0
                     F1 (x) =       2 (x + 1)
                                    1
                                                                       0⩽x⩽1
                                
                                  1                                    x>1
                                
                                 0                                    y<0
                     F2 (y) =       2 (y + 1)
                                    1
                                                                       0⩽y⩽1
                                
                                    1                                  y>1

For them, the subcopula
                        of Remark 2.1 satisﬁes the second part of Sklar’s theorem on
A = B = {0} ∪ 12 , 1 , as one can easily verify from the fact that for 12 ⩽ x, y ⩽ 1,


       F (x, y) = 12 (x + y) = max( 12 (x + 1) + 12 (y + 1) − 1, 0) = C(F1 (x), F2 (y))

This subcopula can be extended to I 2 either using the copula of Example 2.1, or the fol-
lowing one, suggested by Deheuvels (1978):
                               
                                2v(z − 2 )             0 ⩽ v ⩽ 12 , 12 ⩽ z ⩽ 1
                                         1

                     C(v, z) =   2z(v − 12 )            2 ⩽ v ⩽ 1, 0 ⩽ z ⩽ 2
                                                        1                     1
                               
                                 0                      v ⩽ 12 , z ⩽ 12

Non-uniqueness arises
                   from the fact that Y and X are not continuous and Ran F1 (x) =
Ran F2 (y) = {0} ∪ 2 ; 1 .
                   1



     According to Sklar’s theorem, while writing

                                        F (x, y) = C(F1 (x), F2 (y))

one splits the joint probability into the marginals and a copula, so that the latter only
represents the “association” between X and Y . Copulas separate marginal behavior, as
represented by the Fi , from the association: at the opposite, the two cannot be disentangled
in the usual representation of joint probabilities via distribution functions. For this reason,
copulas are called also dependence functions (Deheuvels, 1978). We refer to the possibility
of writing the joint cumulative probability in terms of the marginal ones as the probabilistic
interpretation of copulas.

Remark 2.2 Evidently, Sklar’s theorem entails:

          Pr(X ⩽ x, Y > y) = F1 (x) − C(F1 (x) , F2 (y))
          Pr(X > x, Y ⩽ y) = F2 (y) − C(F1 (x) , F2 (y))
Bivariate Copula Functions                                                                  59

       Pr(X ⩽ x | Y ⩽ y) = C(F1 (x) , F2 (y))/F2 (y)
       Pr(X ⩽ x | Y > y) = F1 (x) − C(F1 (x) , F2 (y))/(1 − F2 (y))
                                                       ∂C(v, z)
       Pr(X ⩽ x | Y = y) = C1|2 (F1 (x) , F2 (y)) =             v = F1 (x), z = F2 (y)
                                                         ∂z

   As a consequence of Sklar’s theorem, the minimum and maximum copulas C − , C +
are named respectively the Fréchet lower and upper bounds: using Sklar’s result, the
inequality C − ⩽ C ⩽ C + can be rewritten as

                max(F1 (x) + F2 (y) − 1, 0) ⩽ F (x, y) ⩽ min(F1 (x), F2 (y))              (2.8)

which is the well-known Fréchet–Hoeffding inequality for distribution functions.

2.3.2 The subcopula in Sklar’s theorem
It follows as a corollary of Sklar’s theorem that the subcopula that allows the representation
(2.6) can be reconstructed from the margins and the joint distribution by inversion. Using
the generalized inverse concept, we can state that

Corollary 2.3 Under the hypotheses of part (ii) of Sklar’s theorem the (unique) subcopula
C: Ran F1 × Ran F2 → I such that

                                 F (x, y) = C(F1 (x), F2 (y))

for every (x, y) in ∗2 is
                                                             
                               C(v, z) = F F1−1 (v), F2−1 (z)

Evidently, if Ran F1 = Ran F2 = I , the previous subcopula is a copula.

Example 2.7 Suppose, in part (ii) of Sklar’s theorem, that X and Y are exponential random
variables

                                  F1 (x) = 1 − exp(−λ1 x)
                                  F2 (y) = 1 − exp(−λ2 y)

for x > 0, y > 0, λ1 , λ2 > 0. Suppose also that their joint distribution is

                      F (x, y) = max(1 − exp(−λ1 x) − exp(−λ2 y), 0)                      (2.9)

Then, since
                                  F1−1 (v) = − ln(1 − v)/λ1                              (2.10)

and an analogous expression holds for z, the copula C such that

                 C (F1 (x), F2 (y)) = C (1 − exp(−λ1 x), 1 − exp(−λ2 y))
                                   = max(1 − exp(−λ1 x) − exp(−λ2 y), 0)
60                                                                    Copula Methods in Finance

is                           
          F F1−1 (v), F2−1 (z) = F (− ln(1 − v)/λ1 , − ln(1 − z)/λ2 )

                                  = max (1 − exp(ln(1 − v)) − exp (ln (1 − z)) , 0)
                                  = max(v + z − 1, 0)

i.e. the copula of Example 2.1.

  Corollary 2.3 states that the construction via Sklar’s theorem exhausts the so-called
Fréchet class, i.e. the class of joint distribution functions which have F1 and F2 as margins
(Fréchet, 1935, 1951; Hoeffding, 1940).

2.3.3 Modeling consequences

The separation between marginal distributions and dependence explains the modeling ﬂexi-
bility given by copulas, which has a number of theoretical and practical applications. Before
explaining them, let us introduce the following remark.

Remark 2.3 In Examples 2.5 and 2.7 above, the association between the r.v.s X and Y
was encapsulated in the copula C(v, z) = max(v + z − 1, 0). As argued in Chapter 1 and
in section 2.4.2 below, this copula represents perfect negative dependence. The marginal
behavior was uniform in Example 2.5, exponential in Example 2.7: as a consequence, in the
two examples the same copula gave different joint distributions, (2.7) and (2.9) respectively.

   The ﬁrst part of Sklar’s theorem allows us to construct bivariate distributions in a straight-
forward, ﬂexible way: simply “plug” a couple of univariate margins into a function which
satisﬁes the subcopula deﬁnition. This contrasts with the “traditional” way to construct mul-
tivariate distributions, which suffers from the restriction that the margins are usually of the
same type, i.e. the corresponding random variables are a linear afﬁne transform of each
other. With the copula construction we are allowed to start from marginals of different
types.

Example 2.8 Using the product copula and the marginal of X of Example 2.5, i.e. expo-
nential, assume Y to be a (central) Student r.v., with υ degrees of freedom (d.o.f.). Formally,
this means that:

                                        y                  − υ+1
                                        ((υ + 1)/2)     s2     2
                   F2 (y) = tυ (y) =    √             1+           ds
                                     −∞   π υ (υ/2)     υ

where  is the usual Euler function. Then the joint distribution function, according to Sklar’s
theorem, is:

                                             y                 − υ+1
                                            ((υ + 1)/2)     s2     2
              F (x, y) = [1 − exp(λ1 x)]    √             1+           ds
                                         −∞   π υ (υ/2)     υ
Bivariate Copula Functions                                                                   61

Consider now, with the same marginals, the following function, which, as the readers can
check, satisﬁes the copula deﬁnition5 :

                                                     vz1−r , v ⩽ z
                                      C̊(v, z) =
                                                     v 1−r z, v > z

Then Sklar’s theorem allows us to state that also C̊(F1 (x), F2 (y)) is a distribution function:
                                 
                                 y ((υ+1)/2)           − υ+1 1−r
             
                                                         s2      2
                   1 − exp(λ1 x)     −∞ π υ(υ/2) 1 + υ
                                         √                            ds     , (x, y) ∈ A
 F̊ (x, y) =                                                  
             
                               1−r  y ((υ+1)/2)          2 − 2
                                                                    υ+1
                  1 − exp(λ1 x)           √            1+ s            ds, (x, y) ∈ /A
                                                −∞   π υ(υ/2)        υ



where the region A is deﬁned by
                                                                           
                                            y                    − υ+1
                       1                     ((υ + 1)/2)     s2     2
                x ⩽ − ln 1 −                  √             1+           ds 
                       λ1                  −∞   π υ (υ/2)     υ

We have been able, through copulas, to construct joint distributions for X and Y , even
if they had marginals of different types. These distribution functions encapsulate different
assumptions on the dependence between X and Y : in particular, the former, F , represents
independence, since it is the product of the marginals, while the latter, F̊ , does not, unless
r = 0.

   In the previous example, we could continue to generate joint distribution functions from
the given marginals as long as we could produce copula functions, even though we started
from marginals of different types. A fortiori, the result would have obtained with marginals
of the same type.
   When modeling from the theoretical point of view then, copulas allow a double “inﬁnity”
of degrees of freedom, or ﬂexibility:

 (i) deﬁne the appropriate marginals and
(ii) choose the appropriate copula.

This ﬂexibility holds also when modeling from the practical (or estimation) point of view,
since the separation between marginal distributions and dependence suggests that we should
decompose any estimation problem into two steps: the ﬁrst for the marginals and the second
for the copula. We will return to this issue in Chapter 5.

2.3.4 Sklar’s theorem in ﬁnancial applications: toward a non-Black–Scholes world
This section presents some applications of Sklar’s theorem, as well as of the other copula
properties listed above, to option pricing and credit risk evaluation: by so doing, it devel-
ops the examples in the primer of Chapter 1. It also provides an example in market risk
evaluation.
5 It is the so-called Cuadras–Augé one.
62                                                                    Copula Methods in Finance

Bivariate digital option pricing

Let us consider two (univariate) put digital options, which pay 1 unit of account iff the
underlying asset is at or below the strike at maturity T . Suppose that the riskless interest
rate is zero. If we denote by X and Y the prices of the underlyings at maturity, and by K and
k their strikes, it is known from martingale pricing theory that (in a complete, arbitrage-free
market) the option prices are:

                                     Pr (X ⩽ K) = F1 (K)
                                      Pr (Y ⩽ k) = F2 (k)

The so-called bivariate put digital option, which pays one unit of account iff both X and Y
are at or below the strike, has price

                                Pr (X ⩽ K, Y ⩽ k) = F (K, k)

According to Sklar’s theorem, it is always possible to represent this price in terms of the
single digital prices:
                              F (K, k) = C(F1 (K), F2 (k))

and the representation is unique on Ran F1 × Ran F2 . It is unique tout court if X and Y
are continuous.
   If the riskless interest rate is different from zero, then the price at 0 is B(0, T )C(F1 (K),
F2 (k)) where B(0, T ) is the discount factor from T to 0, so that C(F1 (K), F2 (k)) is the
forward price.
   Assume now that X and Y are log-normally       distributed,
                                                                 with log returns, ln(X/X0 ) and
ln(Y/Y0 ), normal with mean r − 12 σX2 T , r − 12 σY2 T and variance σX2 T , σY2 T respec-
tively, as in the (risk-neutralized) Black–Scholes model. We have
                                                                  
                                           ln (X0 /K) + r − 12 σX2 T
        Pr (X ⩽ K) = F1 (K) = −                         √               ≡ (−d2X (K))
                                                      σX T
                                                                 
                                           ln (Y0 /k) + r − 12 σY2 T
           Pr (Y ⩽ k) = F2 (k) = −                     √              ≡ (−d2Y (k))
                                                     σY T

and therefore

     Pr (X ⩽ K, Y ⩽ k) = F (K, k) = C (F1 (K), F2 (k)) = C ( (−d2X (K)),          (−d2Y (k)))

Suppose, for instance, that K = 2, k = 12 , X0 = Y0 = 1, r − 12 σX2 = r − 12 σY2 = 0, σX =
σY = 0.2, T = 5, so that

                          −d2X (K) = 1.55,         −d2Y (k) = −1.55

Then the forward bivariate digital price is

                  F (2, 12 ) = C ( (1.55),    (−1.55)) = C(0.9394, 0.0606)
Bivariate Copula Functions                                                                   63

If in addition we assume C = C − , then the forward price becomes

       max ( (1.55) +        (−1.55) − 1, 0) = max(0.9394 + 0.0606 − 1, 0) = 0

If instead we assume C = C + , we obtain

                min( (1.55), (−1.55)) = min(0.9394, 0.0606) = 0.0606

and it follows from the Fréchet inequality that

                                 0 ⩽ C(0.9394, 0.0606) ⩽ 0.0606

In particular, if we assume independence between the two returns, we have argued in
Chapter 1 and will see below that C = C ⊥ . The forward digital price is

                                      (1.55) (−1.55) = 0.0569

   However, the natural extension of the Black–Scholes model
                                                                 to
                                                                   a bivariate
                                                                               setting
                                                                                       consists
in assuming jointly normal returns. In we assume that ln X /X 0 and ln Y /Y 0 are not only
marginally, but also jointly normally distributed, with correlation coefﬁcient ρ, Corollary 2.3
permits us to state that their copula is the so-called Gaussian one, deﬁned as:

                        −1 (v)     −1 (z)
                                                          !                  "
                                                1          2ρsω − s 2 − ω2
      C (v, z) =
        Ga
                                                       exp                     dsdω
                     −∞          −∞         2π 1 − ρ 2       2 1 − ρ2

Using the copula framework, the no-arbitrage forward price of the bivariate digital option is

  Pr (X ⩽ K, Y ⩽ k) = F (K, k) = C Ga ( (−d2X (K)), (−d2Y (k)))
                                                           !                 "
                         −d2X (K)  −d2Y (k)    1             2ρsw − s 2 − w2
                    =                                  exp                   dsdw
                       −∞         −∞        2π 1 − ρ 2         2 1 − ρ2

If K = 2, k = 12 , as previously assumed, and ρ = 20%, the price turns out to be
                                                    !                "
               1.55   −1.55          1         0.4sw − s 2 − w2
  F 2, 12 =                        √         exp                       dsdw = 0.886
                −∞      −∞       2π 1 − 0.22        2 1 − 0.22

   If, in the previous case, we use a copula other than the Gaussian one, this means that, via
copulas, we are extending bivariate ﬁnancial modeling beyond Black–Scholes. Consider, for
instance, two stock indices, DAX 30 and FTSE 100. Assume that they are marginally normal.
Using a daily time series from January 2, 1999, to March 27, 2000, one can argue that
their (daily) variances are respectively σX2 = 0.0147 and σY2 = 0.01197, while, considering
the riskless rate on the euro zone, µX = r − 12 σX2 = 0.0013 and µY = r − 12 σY2 = 0.0004.
64                                                                                Copula Methods in Finance

Cherubini and Luciano (2002a) argue that for these indices the “best ﬁt” copula, starting
from a selection of three, is the so-called Frank copula6 :
                                                                            
                                    1        (exp (−αv) − 1) (exp (−αz) − 1)
                   C A (v, z) = −     ln 1 +                                                         (2.11)
                                    α                 exp (−α) − 1

Under this copula, the no-arbitrage forward price of the bivariate digital option is

Pr (X ⩽ K, Y ⩽ k) = F (K, k) = C A ( (−d2X (K)), (−d2Y (k)))
                                                                              #
                       1          exp (−α (−d2X (K)) − 1) exp (−α (−d2Y (k)) − 1)
                  = − ln 1 +
                      α                            exp (−α) − 1


If K = 2, k = 12 , X0 = Y0 = 1, T = 5 and, as turns out from the estimates in Cherubini
and Luciano (2002a), α = 4.469, the price becomes
                                                                     
                                         exp (−4.469 (−d2X (2)) − 1)
                                   
                                   
                                                                     
                                                                        
                                                                        
                              1         × exp (−4.469 (−d2Y (1/2)) − 1) 
              F (2, 2 ) = −
                    1
                                 ln 1 +
                            4.469             exp (−4.469) − 1        
                                                                        
                                   
                                                                       
                                                                        

                        = 0.0231

The copula approach then has allowed us, starting from marginally normal returns (with no
joint behavior hypothesis) to obtain bounds for the bivariate digital price, then (under joint
normality) to reconstruct the Black–Scholes price, and ﬁnally to price the derivative under
the “best ﬁt” dependence function choice.

Credit risk evaluation

We have seen in Chapter 1 that, in Merton’s (1974) structural approach to credit risk, a ﬁrm
defaults if its asset value falls below the debt at maturity of the latter, T . Denote with V
and W the asset values at debt maturity of two ﬁrms and assume        them to be
                                                                                  log-normal:
                                                                                            
ln (V /V0 ) and ln (W/W0 ) are normal, with risk neutral means r − σV2 /2 T , r − σW   2 /2 T

and variances σV2 T , σW2 T respectively. Then, the probability that each ﬁrm defaults at time

T , if DV (DW ) ∈  is its debt, is
                                   !                           "
                                      ln (V0 /DV ) + r − σV2 /2 T
            Pr (V ⩽ DV ) =          −               √              ≡ (−d2V (V0 ))
                                                 σV T
                                   !                            "
                                      ln (W0 /DW ) + r − σW 2 /2 T
           Pr (W ⩽ DW ) =           −               √               ≡ (−d2W (W0 ))
                                                  σW T

6 Please note that in the original paper the current assumption on the marginals is abandoned.
Bivariate Copula Functions                                                                                  65

and the risk-neutral joint default probability Pr (V ⩽ DV , W ⩽ DW ) can always be written,
according to Sklar’s theorem, as

                                  C ( (−d2V (V0 )) ,        (−d2W (W0 )))

Suppose, for instance, that the two ﬁrms have debts equal to DV = 0.5, DW = 0.7, and V0 =
W0 = 1, µV = µW = 0, σV = σW = 0.2, T = 5, so that −d2V (V0 ) = −1.55, −d2W (W0 ) =
−0.797. Then

                         (−d2V (V0 )) = 0.0606,              (−d2V (W0 )) = 0.2126

and the joint default probability is

                             Pr (V ⩽ 0.5, W ⩽ 0.7) = C(0.0606, 0.2126)

If C = C − , then the probability becomes 0; if C = C + , then it is 0.0606. As an immediate
application of Fréchet inequality, no matter which is the dependence function chosen, the
joint default probability always stays between the C − and C + values:

                                    0 ⩽ C(0.0606, 0.2126) ⩽ 0.0606

In particular, if C = C ⊥ , then it is 0.0129.
   If the returns on the two ﬁrms are jointly normal at T , in addition to being marginally
normal, we are again in the Black–Scholes framework. The joint default probability at time
T , since the copula for the ﬁrms’ values and returns is the same,7 is the Gaussian one:

  H (DV , DW ) = Pr (V ⩽ DV , W ⩽ DW ) = C Ga ( (−d2V (V0 )) ,                      (−d2W (W0 )))

Suppose, for instance, that the asset returns have a correlation coefﬁcient 12 , while the
outstanding debts are 0.5 and 0.7, as above: the joint default probability is
                                                       !               "
                    −1.55   −0.0797       1              sw − s 2 − w2
   H (0.5, 0.7) =                      √          exp                dsdw = 0.0069
                   −∞      −∞       2π 1 − 0.52           2 1 − 0.52


   The extension of the Black–Scholes framework in the default context could proceed
along the same lines of the bivariate option example: assume a copula different from the
Gaussian one, even if the marginals are Gaussians.
   In order to make the reader aware of the full ﬂexibility of copulas however, let us explore
a totally different way to obtain joint default probabilities via copulas. In contrast with the
Merton’s case, let us consider historical default probabilities, following Luciano and Marena
(2003).
   As is well known, rating agencies provide tables (see Table 2.1), such as those of S&P,
reported below, which give the marginal default probabilities Fi (t) for different maturities
and depending on the rating of the issuer:

7 The result is straightforward in the example, when one switches from returns to values, and will be proved in
general for increasing transforms in section 2.4.3 below.
66                                                                           Copula Methods in Finance

                    Table 2.1 Historically observed default probabilities, source:
                    S&P, 2000

                                                          Rating

                    Maturity          AAA            AA            A         BBB

                     1               0.00%         0.01%       0.04%         0.22%
                     2               0.00%         0.04%       0.11%         0.50%
                     3               0.03%         0.09%       0.19%         0.79%
                     4               0.06%         0.16%       0.32%         1.30%
                     5               0.10%         0.25%       0.49%         1.80%
                     7               0.26%         0.53%       0.83%         2.73%
                     8               0.40%         0.63%       1.01%         3.10%
                     9               0.45%         0.70%       1.21%         3.39%
                    10               0.51%         0.79%       1.41%         3.68%
                    15               0.51%         1.07%       1.83%         4.48%


  We can immediately use these marginal default probabilities in a copula representation
of the joint default probability

                                 Pr(T1 ⩽ t, T2 ⩽ t) = C(F1 (t), F2 (t))

  Consider, for instance, an AAA and a simple A obligor, and focus attention on the
maturities t = 1, 5, 10, 15:

                                       F (1, 1) = C(0%, 0.04%)
                                       F (5, 5) = C(0.1%, 0.49%)
                                    F (10, 10) = C(0.51%, 1.41%)
                                    F (15, 15) = C(0.51%, 1.83%)

   For each speciﬁc copula choice, we can easily evaluate the joint default probability, by
simple substitution.
   Also, by choosing a single-parameter copula, such as the Gaussian or Frank deﬁned above,
we can study the behavior of the joint probability with respect to the parameter choice: since
the copula represents dependence, its parameter, in analogy with the Gaussian case, must
give a measure of how much the random variables in the copula (the times to default,
here) “move together”.8 Let us denote as d(F1 (t), F2 (t), α) the joint default probability as
a function of the parameter value:

                               d(F1 (t), F2 (t), α) = C(F1 (t), F2 (t); α)

and consider a Frank copula.
  When α, the association parameter, varies from 1 to 25, we get the increasing behavior
of the joint default probabilities illustrated in Figure 2.5.

8 This concept will be clariﬁed and made exact in Chapter 3.
Bivariate Copula Functions                                                                      67

                                         3.10−4



                   d(.00,.0004, a)
                                         2.10−4
                   d(.001,.0049, a)

                   d(.0051,.00141, a)
                                         1.10−4
                   d(.0051.,.00183, a)


                                                    0
                                                        0   10           20        30
                                                                     a

Figure 2.5 Joint default probabilities between an AAA and an A obligor, as a function of dependence
(a = α in the text), over 1, 5, 10, 15 years (lines from bottom to top), Frank copula



                                        0.004




                   d(.00,.0022, a)

                   d(.001,.018, a)
                                        0.002
                   d(.0051,.00368, a)

                   d(.0051.,.0448, a)



                                           0
                                                0           10                20
                                                                 a

Figure 2.6 Joint default probabilities between an AAA and a BBB obligor, as a function of depen-
dence (a = α in the text), over 1, 5, 10, 15 years (lines from bottom to top), Frank copula



   Figure 2.6 presents analogous results, for an AAA and a BBB obligor.
   A comparison between the two ﬁgures permits us to verify that the increase of the
probabilities is much less pronounced in the second case than in the ﬁrst: the greater the
rating class distance between the counterparties, the less increase we notice in the joint
default probability. This happens homogeneously across maturities.
   In the bivariate option example the use of copulas permitted us to abandon the Black–
Scholes assumption and to adopt the “best ﬁt” model for joint behavior. Here, even without
aiming at best ﬁtting the joint model (due to the generality of the marginals), we obtained
a sensitivity analysis with respect to the copula parameter, which, as claimed above, must
represent the “dependence” between the underlying random variables. This will be the object
of Chapter 3.
68                                                                   Copula Methods in Finance

VaR computation

Copulas have been applied to the measurement of market risk, in particular to the assessment
of the Value at Risk (VaR) of a portfolio. Let us recall that, for a given conﬁdence level θ ,
VaR is the level under which returns will fall only with probability θ . If we denote as Z
the portfolio return over a given horizon T , VaR is the threshold such that:

                                      Pr(Z ⩽ VaRZ ) = θ

Equivalently, using the distribution function of Z, H(z), VaR can be deﬁned as the solution
z∗ of the equation H(z∗ ) = θ . In turn, the distribution function H can be written via copulas,
as follows. Consider a portfolio of two assets. Let X and Y be their continuous returns,
over a common horizon T , and let β ∈ (0, 1) be the weight of X. The portfolio return is
Z = βX + (1 − β) Y , with distribution function

                  H(z) = Pr(Z ⩽ z) = Pr(βX + (1 − β) Y ⩽ z)
                            +∞                         
                                       1    1−β
                        =        Pr X ⩽ z −     y, Y = y f2 (y)dy
                                       β     β
                            −∞
                            +∞                           
                                         1    1−β
                        =        C1|2 F1   z−     y , F2 (y) f2 (y)dy                    (2.12)
                                         β     β
                            −∞

where the conditional probability assessment via C1|2 , introduced in Remark 2.2, has been
used.
  Suppose, as in Luciano and Marena (2003), that the returns on two assets X and Y have
been estimated to be distributed according to a Student’s t, with 5 and 6 d.o.f. respectively.
Formally, we have

                                     x                 −3
                                        (3)         u2
                         F1 (x) =          √    1+          du
                                  −∞ (5/2) 5π       5
                                   y                −7/2
                                      (7/2)      u2
                         F2 (y) =        √     1+          du
                                  −∞ (3) 6π      6

where  is the usual Euler function.
   Assume that the Frank copula represents their association, and let α = −3, so as to
consider a case of negative “dependence” between the two assets, which hedge each other.
   By letting the allocation weight vary from 10% to 90%, and considering both the level
of conﬁdence (loc) 95% and the 99% one, formula (2.12) gives the values at risk shown in
Table 2.2.
   Three facts are evident from Table 2.2: ﬁrst, as usual, diversiﬁcation pays, since when
the allocation weight gets closer to 50% the VaR decreases, for given level of conﬁdence;
second, due to the fat-tailed nature of the returns, the VaR increases substantially with
the loc, for given allocation weight; third, for symmetric weights (for instance β = 10%,
1 − β = 90% and β = 90%, 1 − β = 10%), the VaR is greater when β increases, since X is
riskier than Y (the variance of a Student’s t is υ/(υ − 2), where υ is the number of d.o.f.).
Bivariate Copula Functions                                                                                  69

               Table 2.2 VaR for the bivariate portfolio of page 68, as a function of β and
               the loc, Students’s t marginals, Frank copula

               β              10%            25%             50%            75%          90%

               loc 95%       −1.670         −1.332         −1.093         −1.379          −1.735
               loc 99%       −2.726         −2.197         −1.792         −2.344          −2.917


           Table 2.3 VaR for the bivariate portfolio of page 68, as a function of β and the
           loc, normal marginals, Frank copula

           β                 10%            25%            50%            75%            90%

           loc 95%         −1.735         −1.373         −1.105          −1.453         −1.835
           loc 99%         −2.459         −1.983         −1.622          −2.093         −2.599


           Table 2.4 VaR for the bivariate portfolio of page 68, as a function of β and the
           loc, Students’s t marginals, product copula

           β                 10%            25%            50%            75%            90%

           loc 95%         −1.757         −1.549         −1.422          −1.590         −1.818
           loc 99%         −2.823         −2.451         −2.217          −2.587         −3.011


   The copula approach then allows us to compute the VaRs for a portfolio with a non-
normal joint distribution, and to study its sensitivity with respect to the portfolio mix. We
could also study the sensitivity with respect to the copula parameter, as we did in the credit
risk case.
   Moreover, the copula approach has still its double “inﬁnity” of d.o.f. to be exploited: it
permits us either (i) to change the marginals while keeping the copula ﬁxed or (ii) to change
the copula while keeping the marginals ﬁxed.
   In the ﬁrst case, suppose you want to eliminate the fat-tails effect of the Student’s t, and
consider the returns as being normal, with zero mean and the same standard deviations as
above (1.291 for X and 1.225 for Y ). The VaRs are shown in Table 2.3.
   At the loc 99%, the VaR values for each allocation weight are smaller in absolute value
than in Table 2.2, since we no longer have fat tails. However, for the very nature of the
tails, this effect shows up only at the higher quantile.
   In the second case, keep the marginals ﬁxed (Student’s t) and assume independence
between the returns, i.e. a product copula.9 We get Table 2.4.
   As expected, the VaR values for each couple loc–allocation weight are greater (in absolute
value) than in Table 2.2, since the two assets no longer hedge.
   To conclude, the copula approach to VaR permits us to avoid the usual assumption of
marginal and joint normality. For the marginals, one can indeed use in (2.12) any choice
of F1 , F2 , so as to take into account, as above, fat tails. For the copula, functions with

9 As we will argue in Chapter 3, the Frank copula also degenerates into the product one when the parameter goes
to zero.
70                                                                    Copula Methods in Finance

so-called upper (or lower) tail dependency (see the next chapter) have been suggested. The
very powerfulness of the copula approach, however, consists in separating the marginal
and dependence effects, as the example, as well as the previous pricing and credit risk
ones, shows.

     2.4   COPULAS AS DEPENDENCE FUNCTIONS: BASIC FACTS
Since copulas are dependence functions, they permit us to characterize independence and
perfect dependence in a straightforward way. Since they separate the marginal behavior
from dependence itself, they turn out to be invariant w.r.t. increasing the transform of the
(continuous) r.v.s X and Y . Let us analyze these features separately.
   In order not to be obliged to distinguish the (unique) copula of X and Y on Ran F1 ×
Ran F2 from its (non-unique) extension to the whole of I 2 , in this section we assume that
X and Y are continuous random variates.

2.4.1 Independence
Recall that X and Y are independent r.v.s iff F (x, y) = F1 (x)F2 (y). It is evident that Sklar’s
theorem entails

Corollary 2.4 The r.v.s X and Y are independent iff they have the product copula C ⊥ .

2.4.2 Comonotonicity
Two r.v.s are comonotone or countermonotone – and therefore perfectly dependent – iff
their copula is respectively the upper and lower Fréchet bound. To make this statement
precise, let us recall the following.

Deﬁnition 2.6 The set A ⊂ ∗2 is said to be comonotic iff, for any (x1 , y1 ), (x2 , y2 ) in
A, either

                                  x1 ⩽ y1              x1 ⩾ y1
                                               or
                                  x2 ⩽ y2              x2 ⩾ y2

Deﬁnition 2.7 A random vector (X, Y ) is comonotonic or perfectly positively dependent
iff there exists a comonotonic set A ⊂ ∗2 such that

                                     Pr((X, Y ) ∈ A) = 1

  Loosely said, a couple of comonotonic random variates has outcomes that are ordered
componentwise: realizations for which X is higher, have Y higher too. The comonotonic
property can be characterized in a number of equivalent ways, as the following theorem,
which appears up to point 5 also in Dhaene et al. (2002), shows:

Theorem 2.6 A random vector (X, Y ), with marginal distribution functions F1 , F2 and
joint distribution F (x, y) is comonotonic iff one of the following (equivalent) statements
holds:
Bivariate Copula Functions                                                                    71

(1) (X, Y ) has comonotonic support
(2) (Hoeffding, 1940; Fréchet, 1951) for every (x, y) ∈ ∗2

                                   F (x, y) = min(F1 (x), F2 (y))

(3) C(v, z) = C + (v, z)
(4) (Hoeffding, 1940; Fréchet, 1951) (X, Y ) is distributed as (F1−1 (U ), F2−1 (U )), where U
    is a standard uniform random variate
(5) (X, Y ) is distributed as (F1−1 (F2 (Y )), F2−1 (F1 (X)))

It follows that

Corollary 2.5 If F1 = F2 , then X and Y are comonotonic iff they are equal a.s.

A symmetric deﬁnition for countermonotonic or perfectly negatively dependent random
variates can be given as:

Deﬁnition 2.8 The set A ⊂ ∗2 is said to be countermonotonic iff, for any (x1 , y1 ), (x2 , y2 )
in A, either

                                  x1 ⩽ y1              x1 ⩾ y1
                                               or
                                  x2 ⩾ y2              x2 ⩽ y2

Deﬁnition 2.9 A random vector (X, Y ) is countermonotonic or perfectly negatively
dependent iff there exists a countermonotonic set A ⊂ ∗2 such that

                                     Pr((X, Y ) ∈ A) = 1

The following theorem can be easily demonstrated.

Theorem 2.7 A random vector (X, Y ), with marginal distribution functions F1 , F2 and
joint distribution F (x, y) is countermonotonic iff one of the following (equivalent) state-
ments holds:

(1) (X, Y ) has countermonotonic support
(2) (Hoeffding, 1940; Fréchet, 1951) for every (x, y) ∈ ∗2

                              F (x, y) = max(F1 (x) + F2 (y) − 1, 0)

(3) C(v, z) = C − (v, z)
(4) (Hoeffding, 1940; Fréchet, 1951) (X, Y ) is distributed as (F1−1 (U ), 1 − F2−1 (U )), where
    U is a standard uniform random variate
(5) (X, Y ) is distributed as (F1−1 (1 − F2 (Y )), F2−1 (1 − F1 (X)))

Example 2.9 The r.v.s in Example 2.7 have the C − copula: the previous theorem entails
that Y = F2−1 (1 − F1 ) a.s.
  Recalling that X and Y are exponential, with the inverse (2.10), we have

                                Y = − ln(1 − exp (−λ1 X))/λ2
72                                                                         Copula Methods in Finance

2.4.3 Monotone transforms and copula invariance
Copulas of increasing or decreasing transforms of (continuous) r.v.s are easily written
in terms of the copula of X and Y : in particular, copulas are invariant w.r.t. increasing
transforms.
   Let αi : ∗ → , i = 1, 2, be two functions, increasing a.s. It is known from elementary
probability theory that the margins of the r.v.s α1 (X), α2 (Y ) are transformations of the
corresponding Fi , i.e.
                                                                
                        α1 (X) ∼ F1 α1−1 , α2 (Y ) ∼ F2 α2−1
                                
Let us denote the margins Fi αi−1 as Hi . The following theorem holds:

Theorem 2.8 (Schweizer & Wolff, 1976, 1981) Let X, Y be continuous random variables
with marginal distribution functions F1 , F2 and copula C. If α1 , α2 are two transformations,
         (a.s.), ther.v.s α1 (X), α2 (Y ), which have marginal distribution functions H1 =
increasing
F1 α1−1 , H2 = F2 α2−1 and joint one H

                             H (u, t) = Pr(α1 (X) ⩽ u, α2 (Y ) ⩽ t)

have copula C too:

                                   H (u, t) = C(H1 (u), H2 (t))

Loosely speaking, copulas are invariant w.r.t. increasing transformations, even though the
latter act differently on X and Y (α1 = α2 ).

Example 2.10 Consider two standard normals X and Y and let their dependence be repre-
sented by the Gaussian copula. If we consider now the increasing transforms U = exp(X),
T = exp(Y ), which we know to be log-normally distributed, we can state, according to
Theorem 2.8, that they still have the Gaussian copula. Therefore, their joint distribution
function is

                  H (u, t) = C Ga (H1 (u), H2 (t)) = C Ga ( (ln u), (ln t))

Conversely, if one starts with X and Y log-normally distributed, so that U = ln X and
T = ln Y are standard normal, and assumes the Gaussian copula for X and Y , then the joint
distribution of U and T , according to Theorem 2.8, is

                     H (u, t) = C Ga (Ḣ1 (u), Ḣ2 (t)) = C Ga (  (eu ),  (et ))

where  is the log-normal distribution function with parameters (0, 1), and Ḣ1 and Ḣ2 are
the margins of U and T .

  Analogously, one could demonstrate that for α1 increasing a.s. and α2 decreasing a.s.,
ceteris paribus,

                           H (u, t) = H1 (u) − C(H1 (u), 1 − H2 (t))
Bivariate Copula Functions                                                                    73

For α1 decreasing and α2 increasing (both a.s.)

                             H (u, t) = H2 (t) − C(1 − H1 (u), H2 (t))

while for both α1 and α2 decreasing (both a.s.)

                 H (u, t) = H1 (u) + H2 (t) − 1 + C(1 − H1 (u), 1 − H2 (t))               (2.13)

From the behavior of the copula w.r.t. increasing or decreasing transforms, and in particular
from the fact that “the copula is invariant while the margins can be changed at will”, a
number of theoretical and applicative consequences follow.
   From the theoretical point of view, it follows that “any functional or ‘property’ of the joint
distribution function of (two) r.v.s that is invariant under strictly increasing transformations
of the r.v.s is a functional or ‘property’ of their copula (and independent of the individual
distributions . . .). Thus . . . it is natural to use any measure of distance between surfaces
as a measure of dependence for pairs of r.v.s” (Schweizer & Sklar, 1983): this is the
core of the deﬁnition of concordance between r.v.s, which we will discuss in the next
chapter.
   From the point of view of applications, the comonotonicity property, together with invari-
ance, allows us to fully exploit the copula tool to enlarge ﬁnancial modeling. An example
is presented in the next section.

2.4.4 An application: VaR trade-off
Let us introduce an example in which the copula technique itself suggests an economic
evaluation, the trade-off between values at risk.
  Let us consider, as in Cherubini and Luciano (2001), the returns on two stock indices,
namely the FTSE 100 and the S&P 100. Starting from their daily closing prices from
January 3, 1995 to April 20, 2000, compute the empirical marginal distributions of their
log returns X and Y , i.e. their cumulated frequencies. Let us denote them as F1 (xi ), F2 (yi ),
i = 1, 2, . . . , n respectively.
  As a ﬁrst step, determine the level curves of the two indices, returns, using the minimum,
product and maximum copula. Recalling the deﬁnition, they are respectively the loci of
points
                             {(v, z) : max(v + z − 1, 0) = K} , K ∈ I
                                           {(v, z) : vz = K} ,   K∈I
                                    {(v, z) : min(v, z) = K} ,   K∈I

As the readers learned from Theorems 2.6 and 2.7, the ﬁrst copula – and then the ﬁrst
level curves – apply if (and only if) the returns on the FTSE and S&P are countermono-
tonic, the second if (and only) they are independent, the third if (and only if) they are
comonotonic.
   Cherubini and Luciano (2001) also computed some level curve values using the Clayton
copula, deﬁned as                                       −1/α 
                        C C (v, z) = max v −α + z−α − 1        ,0                  (2.14)
74                                                                        Copula Methods in Finance

They adopted the parameter value α = 12 , since this was demonstrated to be the “best ﬁt”
one. Under the Clayton choice, with parameter value 12 , the level curves have equation:

                        {(v, z) : (v −1/2 + z−1/2 − 1)−2 = K},        K∈I

   As a second step, use the empirical marginals in order to reconstruct the return values
corresponding to the (v, z) couples of each curve, by (generalized) inversion: F1−1 (v) =
infi {xi : F1 (xi ) ⩾ v}, and analogously for Y . By so doing, one obtains the probability level
curves
                           {(x, y) : F (x, y) = C(F1 (x), F2 (y)) = K%}

For a given value of the FTSE return (on the abscissa axis), the latter represent the return
on the S&P which gives a joint distribution value of K%, i.e. such that the joint probability
of occurrence of smaller or equal returns is K%.
  Figure 2.7 presents the level curves of the minimum, product, maximum and ﬁtted Clayton
copulas for K = 1%, i.e. it represents the couples

                        {(x, y) : max(F1 (x) + F2 (y) − 1, 0) = 1%}
                        {(x, y) : F1 (x)F2 (y) = 1%}
                        {(x, y) : min(F1 (x), F2 (y)) = 1%}
                        {(x, y) : (F1 (x)−1/2 + F2 (y)−1/2 − 1)−2 = 1%}


                                        0.07

                                        0.06

                                        0.05

                                        0.04

                                        0.03
                                                                       Fitted
                                        0.02                           Perf.Corr+
                                                                       Perf.Corr−
                                        0.01                           Independence

                                           0
      −0.04     −0.03    −0.02    −0.01      0       0.01     0.02      0.03     0.04     0.05
                                       −0.01

                                       −0.02

                                       −0.03

                                       −0.04

Figure 2.7 Level curves for returns on FTSE and S&P 100, corresponding to the (ﬁtted) Clayton
copula, the maximum one (perfect positive correlation), the minimum one (perfect negative correlation)
and the product (independence) one
Bivariate Copula Functions                                                                   75

The top right line in the ﬁgure corresponds to the countermonotonic case, while the bottom
left line corresponds to the comonotonic one: evidently, it is higher in the countermonotonic
than in the comonotonic case, since in the former the two indices are perfect hedges, but
in the second not at all. The independence case is between the two, and to the right of the
ﬁtted one, since, as we remarked above, positively ordered families (such as the Clayton)
have level curves that shift upwards as the parameter decreases.
   Using these curves, we can answer the following question: which are the levels x and y
(respectively) of the DAX and FTSE returns, to be interpreted as (percentage) VaRs, that
will be trespassed only with (joint) probability 1%? The level curves of the previous ﬁgure
give these thresholds for the two assets, and therefore represent the VaR trade-off between
the British and USA markets. As Cherubini and Luciano (2001) remark, “the closer the
trade-off line to the lower region of the triangle, the higher the ‘correlation’ between losses:
in this case, the joint probability cannot be affected by moving capital from one desk to
another. On the contrary, if the trade-off line is close to the upper region of the triangle,
we have negative dependence, and the losses of the two business units tend to offset each
other. Finally, if the trade-off schedule is close to the independence line, trading-off capital
from one desk to another is made possible by diversiﬁcation. The case of our application
is (. . .) close to the independence schedule.”


   2.5    SURVIVAL COPULA AND JOINT SURVIVAL FUNCTION
This section introduces the notions of survival copula and joint survival function, it discusses
the relationships between them and applies them to the evaluation of the distribution func-
tions of maxima and minima of two r.v.s. A ﬁnancial application follows. Let us introduce
the following deﬁnition.

Deﬁnition 2.10 The survival copula associated with the copula C, is

                             C(v, z) = v + z − 1 + C(1 − v, 1 − z)

It is easy to verify that C has the copula properties. Once computed in (1 − v, 1 − z), it
represents the probability that two standard uniform variates with copula C be greater than
v, z respectively, since

           C(1 − v, 1 − z) = 1 − v + 1 − z − 1 + C(v, z)
                 = 1 − Pr(U1 ⩽ v) + 1 − Pr(U2 ⩽ z) − 1 + Pr(U1 ⩽ v, U2 ⩽ z)
                 = Pr(U1 > v) + Pr(U2 > z) − 1 + Pr(U1 ⩽ v, U2 ⩽ z)
                 = Pr(U1 > v, U2 > z)

Since C is a copula, it stays within the Fréchet bounds:

                                        C− ≺ C ≺ C+

In addition, it can be easily veriﬁed that in the minimum, product and maximum case,
copulas and survival copulas coincide:
                               −            ⊥               +
                             C = C−,      C = C⊥,        C = C+
76                                                                       Copula Methods in Finance

  Sklar’s theorem can be restated in terms of survival copula: to this end, given the random
variables X and Y , let us consider

                                  F (x, y) = Pr(X > x, Y > y)                                 (2.15)

and denote as F i the complement to one of Fi . Notice that, as is known from elementary
probability, F can be written in terms of F as 1 − F1 (x) − F2 (y) + F (x, y). It follows that:

                F (x, y) = F 1 (x) + F 2 (y) − 1 + C(1 − F 1 (x) , 1 − F 2 (y))               (2.16)

   Sklar’s theorem guarantees the existence of a subcopula, the survival one, unique on
Ran F 1 × Ran F 2 , such that the probability (2.15) can be represented in terms of F 1 (x),
F 2 (y) , i.e. F (x, y) = C(F 1 (x), F 2 (y)). Before introducing it, let us notice that in the Actu-
arial (reliability theory) ﬁeld F 1 (x) is named the marginal survival probability or survival
function of X: it represents the probability of survivalship of the agent (respectively, com-
ponent) of age X beyond x. Since the probability (2.15) represents the joint survival
probability or survival function of X and Y respectively beyond time x and y, the copula
which represents it in terms of the marginal survival probabilities or survival distribution
functions of the two agents or components separately, F 1 (x) and F 2 (y), is named survival
copula. With this terminology, we have:

Theorem 2.9 Let F 1 (x), F 2 (y) be (given) marginal survival functions. Then, for every
(x, y) ∈ ∗2 :

(i) if C is any subcopula whose domain contains Ran F 1 × Ran F 2 ,

                                           C(F 1 (x), F 2 (y))

     is a joint survival function with margins F 1 (x), F 2 (y);
(ii) conversely, if F (x, y) is a joint survival function with margins F 1 (x), F 2 (y), there
     exists a unique subcopula C, with domain Ran F 1 × Ran F 2 , such that

                                     F (x, y) = C(F 1 (x), F 2 (y))                           (2.17)

     If F1 (x), F2 (y) are continuous, the subcopula is a copula; if not, there exists a copula
     C such that

                                           C(v, z) = C(v, z)

     for every (v, z) ∈ Ran F 1 × Ran F 2 .

Remark 2.4 By comparing Deﬁnition 2.10 and formula (2.13) one can notice that the
joint distribution function of two decreasing transforms of given r.v.s is represented through
their survival copula.
Bivariate Copula Functions                                                                                    77

   It is also possible to express, via survival copula, the conditional probability

                                              1 − v − z + C(v, z)   C(1 − v, 1 − z)
                Pr(U1 > v | U2 > z) =                             =
                                                     1−z                1−z
and therefore
                                                          C(F 1 (x) , F 2 (y))
                              Pr(X > x | Y > y) =
                                                                    F 2 (y)
It is customary to distinguish the survival copula from the joint survival function for uniform
variates:

Deﬁnition 2.11 The joint survival or survival function for (standard) uniform variates
U1 , U2 with copula C, denoted as C  /, represents, if evaluated at (v, z), the joint probability
that (U1 , U2 ) be greater than v and z respectively:

                                     C
                                     /(v, z) = Pr(U1 > v, U2 > z)                                        (2.18)

   It follows from the deﬁnition that

                          C
                          /(v, z) = 1 − v − z + C(v, z) = C(1 − v, 1 − z)
Comparing (2.18) and (2.16), it can easily be argued that, in terms of joint survival function
for uniform variates, the survival probability F (x, y) can be written as

                                      F (x, y) = C
                                                 /(F1 (x) , F2 (y))
Deﬁnition 2.12 Together with the survival copula, we deﬁne also the co-copula

                                    C ∗ (v, z) = 1 − C(1 − v, 1 − z)

and the dual of the copula

                                        C̃(v, z) = v + z − C(v, z)

Remark 2.5 Both the co-copula and the dual are not copulas10 , since the former fails
to have property (i) in the subcopula deﬁnition, while the latter fails to be 2-increasing
10 As concerns the co-copula, one can notice that C ∗∗ = C and that the co-copulas of the Fréchet bounds and the
product copula are respectively

                                             C −∗ = min(v + z, 1)

                                             C ⊥∗ = v + z − vz

                                             C +∗ = max(v, z)

As concerns the dual, it coincides with the co-copula in the bounds and product case. In addition, every dual
copula satisﬁes the following inequality:

                                               C̃ + ≺ C̃ ⊥ ≺ C̃ −

since C1 ≺ C2 implies C̃1  C̃2 and vice versa.
78                                                                  Copula Methods in Finance

(see Schweizer and Sklar, 1983, lemma 6.4.2). However, they represent respectively the
probability that either X > x or Y > y, and the probability that either X ⩽ x or Y ⩽ y:

                     Pr(X > x or Y > y) = C ∗ (1 − F1 (x), 1 − F2 (y))                  (2.19)
                     Pr(X ⩽ x or Y ⩽ y) = C̃(F1 (x), F2 (y))                            (2.20)

In addition, they have the following property, which will be used in Chapter 8: the dual of
the survival copula is the co-copula. Substituting for the deﬁnition in fact it is easy to show
that
                         
                         C (v, z) = 1 − C(1 − v, 1 − z) = C ∗ (v, z)

Example 2.11 Consider two independent r.v.s, with copula C(v, z) = vz. It follows that

                                   / = (1 − v) (1 − z)
                                   C
                                  C ∗ = z + v − vz = 1 − C
                                                         /
                                   C̃ = z + v − vz

from which it is evident, as mentioned above, that C ∗ = C̃.

There are several concepts that may be expressed in terms of copulas, survival copulas and
survival functions for uniform variates. For example, the c.d.f. for minima or maxima of
two random variables is easily expressed in terms of copula.
  In fact, denote m = min(X, Y ) and M = max(X, Y ). Let Fm and FM be the d.f.s of the
minimum and maximum respectively.
  We have, for maxima:

                   FM (a) = Pr(M ⩽ a) = Pr(X ⩽ a, Y ⩽ a) = F (a, a) =
                         = C(F1 (a), F2 (a))

and, for minima:
                             Fm (a) = Pr(m ⩽ a) = 1 − Pr(m > a)
                                   = 1 − Pr(X > a, Y > a)
                                   =1−C
                                      /(F1 (a), F2 (a)) =
                                   = 1 − C(F 1 (a), F 2 (a))

where, clearly, the point a has to be well chosen in the Ran F1 , Ran F2 .

2.5.1 An application: default probability with exogenous shocks

Consider the survivalship of two ﬁrms, whose default or survival time is denoted as X and
Y , and let them be subject to three shocks, two idiosyncratic ones and the latter common
to both ﬁrms. Let us assume that the shocks follow three independent Poisson processes
Bivariate Copula Functions                                                                 79

with parameters λ1 , λ2 and λ12 , where the index denotes the ﬁrm/s on which the shock
has effect: this means that the times of occurrence of the shocks, denoted respectively as
Z1 , Z2 , Z12 , are independent and exponential, with parameters λ1 , λ2 and λ12 respectively.
Their distribution functions, denoted as G1 , G2 , G12 , are:

                                  G1 (z1 ) = 1 − exp (−λ1 z1 )
                                  G2 (z2 ) = 1 − exp (−λ2 z2 )
                                G12 (z12 ) = 1 − exp (−λ12 z12 )

If the shocks ever occur, the corresponding ﬁrm defaults, so that

                          X = min(Z1 , Z12 ),      Y = min(Z2 , Z12 )

The probability that X survives beyond x, F 1 (x), is

                         F 1 (x) = Pr(X > x) = Pr(Z1 > x, Z12 > x)
                               = G1 (x)G12 (x) = exp(−(λ1 + λ12 )x)                    (2.21)

Analogously for Y :

                                 F 2 (y) = exp(−(λ2 + λ12 )y)                          (2.22)

The probability that both survive beyond x and y respectively, F (x, y), is

         F (x, y) = Pr(X > x, Y > y) = Pr(min(Z1 , Z12 ) > x, min(Z2 , Z12 ) > y)
                  = Pr(Z1 > x) Pr(Z2 > y) Pr(Z12 > max(x, y))
                  = exp (−λ1 x) exp (−λ2 y) exp (−λ12 max(x, y))
                  = exp(−(λ1 + λ12 )x − (λ2 + λ12 )y + λ12 min(x, y))                  (2.23)

Substituting for (2.21) and (2.22) we get

                      F (x, y) = F 1 (x)F 2 (y) min(exp(λ12 x), exp(λ12 y))

In turn, having deﬁned

                                       λ12                  λ12
                              m=             ,     n=
                                    λ1 + λ12             λ2 + λ12

we recognize that

                      exp(λ12 x) = F 1 (x)−m ,     exp(λ12 y) = F 2 (y)−n
80                                                                                  Copula Methods in Finance

so that the survival probability is
                                                        −m          −n 
                    F (x, y) = F 1 (x)F 2 (y) min F 1 (x)     , F 2 (y)
                                                1−m                   1−n 
                             = min F 2 (y) F 1 (x)         , F 1 (x) F 2 (y)                           (2.24)

It is easy to verify that this joint survival probability can be written in terms of the one of
X and Y , F (x, y) = C(F 1 (x) , F 2 (y)), using the following survival copula, named after
Marshall and Olkin (1967a, b):

                      MO                                            v 1−m z,        v m ⩾ zn
                  C        (v, z) = min(v 1−m z, vz1−n ) =
                                                                    vz1−n ,         v m < zn

     The joint survival probability beyond time t for instance is:
                                      MO
                      F (t, t) = C      (F 1 (t), F 2 (t))
                                                       1−m               1−n 
                                  = min F 2 (t) F 1 (t)        , F 1 (t) F 2 (t)                       (2.25)

and the corresponding default probability is:
                                                MO
                   Pr(X ⩽ t, Y ⩽ t) = C              (F 1 (t), F 2 (t)) − 1 + F1 (t) + F2 (t)

Suppose for instance that the two ﬁrms belong to the chemical and food sector respectively,
and that the three shocks are, respectively, of the chemical sector, the food one, and of the
economy as a whole. Let the expected time of occurrence of the three shocks be respectively
2, 1 and 4 years, which implies11 λ1 = 0.5, λ2 = 1, λ12 = 0.25. It follows that the survival
probability of the two ﬁrms beyond x and y respectively is

                                F 1 (x) = exp(−(λ1 + λ12 )x) = exp(−0.75x)
                                F 2 (y) = exp(−1.25y)                                                  (2.26)

while their joint survival probability, according to the Marshall–Olkin model, is
      MO                               '                                          (
  C        (F 1 (x), F 2 (y)) = min         exp(−1.25y) exp(−0.5x) , exp(−0.75x) exp(−y)
                                      exp(−1.25y − 0.5x), x ⩽ y
                                =
                                      exp(−0.75x − y),    x>y

since m = 1/3, n = 1/5. The joint survival probability beyond x = y = t = 3 years for
instance is
                           MO
                      C         (F 1 (3), F 2 (3)) = exp(3 (−1.25 − 0.5)) = 0.5248%


11 For an exponential r.v. the expected value is the reciprocal of the intensity.
Bivariate Copula Functions                                                                   81

         2.6 DENSITY AND CANONICAL REPRESENTATION
This section introduces the notion of density and canonical representation of a copula,
together with those of its absolutely continuous and singular components.
Copulas, similarly to distribution functions, admit the notion of density:

Deﬁnition 2.13 The density c(v, z) associated to a copula C(v, z) is

                                                     ∂ 2 C(v, z)
                                     c(v, z) =
                                                         ∂v∂z

Theorem 2.10 The density exists a.e. in the interior of I 2 and is non-negative.

Example 2.12 The density of the Gaussian copula is
                                !                                 "
                     1            ζ12 + ζ22   2ρζ1 ζ2 − ζ12 − ζ22
                           exp              +                                           (2.27)
                   1 − ρ2             2          2 1 − ρ2

where ζ1 :=    −1 (v), ζ :=    −1 (z). This is represented, for ρ = 0.5, in Figure 2.8.
                        2

   The density can be used in order to deﬁne the absolutely continuous component and the
singular component of C, denoted as AC and SC , as follows (Nelsen, 1999):
                                                 v       z ∂ 2 C(u, t)
                              AC (v, z) =                                dudt
                                             0       0       ∂u∂t
                              SC (v, z) = C(v, z) − AC (v, z)

In turn, a copula for which C = AC on I 2 is called absolutely continuous, while it is called
singular if C = SC on I 2 . In the latter case c = 0 a.e. A copula that is neither absolutely




                                         0


                       Figure 2.8 The Gaussian copula density, ρ = 0.5
82                                                                                                Copula Methods in Finance

continuous nor singular, C = AC + SC , is said to have an absolutely continuous and a
singular component.
   Non-negativity of the density permits us to ascertain the 2-increasing property in a
straightforward way, if C is absolutely continuous:

Example 2.13 Suppose that we want to verify that the function
                      −1 (v)           −1 (z)
                                                                                !                     "
                                                             1 2ρsw − s 2 − w2
       h(v, z) :=                                          exp                                          dsdw
                    −∞         −∞               2π 1 − ρ 2       2 1 − ρ2

is actually a copula. It is easy to check that

  (i) h(0, z) = h(v, 0) = 0
 (ii) h(1, z) = z, h(v, 1) = v
(iii) C = AC , ∂ ∂v∂z
                  2 h(v,z)
                           ⩾ 0 : h is absolutely continuous, with non-negative mixed second
      partial derivative, which means that it is 2-increasing
(iv) Dom h = I 2

It follows that h is a copula.

Each copula induces a probability measure on I 2 , which is nothing other than the C-mass
of section 2.1, deﬁnition 2.2. The C-measure of the absolute component is AC (1, 1), while
the one of the singular component is SC (1, 1).

Example 2.14 The product copula C ⊥ = vz is absolutely continuous, since for every
(v, z) ∈ I 2
                                   v        z ∂ 2 ut                        v       z
                    AC =                                 dudt =                         dudt = vz = C ⊥
                               0        0     ∂u∂t                      0       0

The Fréchet upper bound C + is singular, since for every (u, t)

                                                        ∂ 2 C + (u, t)
                                                                       =0
                                                            ∂u∂t

Consequently

                                                    v        z ∂ 2C+
                               AC =                                     dudt = 0 = C +
                                                0        0       ∂u∂t

Analogously for the Fréchet lower bound.
  To end up with, consider the Marshall–Olkin copula of section 2.5.1. It is shown in
Nelsen (1999) that, since

                                   ∂ 2 C MO (u, t)                u−m , um ⩾ t n
                                        ∂u∂t                      t −n , um < t n
Bivariate Copula Functions                                                                                  83

then

                                     AC = C MO − µ min(v m , zn )1/µ

where
                                                          mn
                                               µ≡
                                                       m + n − mn

It follows that

                                   SC = C − AC = µ min(v m , zn )1/µ

The Marshall–Olkin copula has then both an absolutely continuous and a singular compo-
nent. The C-measure of the former is

                        AC (1, 1) = C MO (1, 1) − µ min(1, 1)1/µ = 1 − µ

while that of the latter is µ.

   Notice that for continuous random vectors, the copula density is related to the density of
the distribution F , denoted as f . More precisely, it is equal to the ratio of the joint density
f to the product of the marginal densities fi , i = 1, 2:

                                                                    f (x, y)
                                      c(F1 (x), F2 (y)) =                                              (2.28)
                                                                  f1 (x)f2 (y)

since by Sklar’s theorem the following canonical representation holds12 :

                                 f (x, y) = c(F1 (x), F2 (y))f1 (x)f2 (y)                              (2.29)

  In the continuous random vector case, the density of the survival distribution, F (x, y),
coincides with the distribution function one, f (x, y). Indeed, the survival copula density,
deﬁned as

                                                             ∂ 2 C(v, z)
                                              c(v, z) =
                                                                 ∂v∂z

12 In fact, remembering that the probability integral transforms are uniform (U = F (X) and U = F (Y )), we
                                                                               1   1          2     2
have X = F1−1 (U1 ) and Y = F2−1 (U2 ). Since for continuous random variates these transformations are strictly
increasing and continuous
                                                                                             
                                                                            ∂X/∂U1   ∂X/∂U2
                      c (u1 , u2 ) = f (F1−1 (u1 ), F2−1 (u2 )) · det
                                                                            ∂Y/∂U1   ∂Y/∂U2

                                        f (F1−1 (u1 ), F2−1 (u2 ))
                                 =
                                     f1 (F1−1 (u1 )) · f2 (F2−1 (u2 ))

From the above expression it is clear also that the copula density takes value equal to 1 everywhere when the
original r.v.s are independent.
84                                                                  Copula Methods in Finance

exists a.e. and is such that c(v, z) = c(1 − v, 1 − z). It is related to the density of the
survival distribution F , f , by the relationship

                       f (x, y) = c(1 − F1 (x), 1 − F2 (y))f1 (x)f2 (y)

so that

                        c(F1 (x), F2 (y)) = c(1 − F1 (x), 1 − F2 (y))

The canonical representation is very useful when, for a given multivariate distribution and
given marginals, one wants to know the copula that “couples” those marginals. Consider,
for instance, the following example.

Example 2.15 Let X and Y be standard Gaussian, with standard normal joint distribu-
tion. Let their correlation coefﬁcient be ρ. We want to know which copula “couples” their
marginal distributions.
   We know that the density of the joint distribution is
                                              !                  "
                                   1            2ρst − s 2 − t 2
                                          exp              
                              2π 1 − ρ 2          2 1 − ρ2

Using (2.28) one gets the copula density (2.27) and, consequently, the Gaussian copula.

The canonical representation will play also a fundamental role in the estimation procedures
for copulas, treated in Chapter 5.

          2.7 BOUNDS FOR THE DISTRIBUTION FUNCTIONS
                       OF SUM OF R.V.S
A question that is connected to the copula deﬁnition and appears frequently in ﬁnancial
applications is the evaluation of bounds for the distribution function of the sum of two r.v.s.
  More precisely, let X and Y be r.v.s with distribution functions F1 and F2 , and denote
with FS the distribution function of their sum. We want to ﬁnd distribution functions FL
and FM such that, for every s ∈ ∗

                                     FL (s) = inf FS (s)                                (2.30)
                                               F ∈F

                                     FM (s) = sup FS (s)                                (2.31)
                                               F ∈F

where F is the Fréchet class which has F1 and F2 as marginals.
   The question, posed by Kolmogorov, has been addressed in Moynihan, Schweizer and
Sklar (1978), Frank, Nelsen and Schweizer (1987) and Makarov (1981). It is solved by the
distribution functions

     FL (s) = sup max {F1 (x) + F2 (s − x) − 1, 0} = sup C − (F1 (x), F2 (s − x))       (2.32)
              x∈∗                                      x∈∗

     FM (s) = inf∗ min {F1 (x) + F2 (s − x), 1}                                         (2.33)
              x∈
Bivariate Copula Functions                                                                85

The bounds are the best possible in the sense of stochastic dominance, as argued by Frank,
Nelsen and Schweizer (1987). For a.s. positive random variables, they can be improved
only if there exists a copula C− , smaller than the copula of X and Y , different from the
minimum copula:
                                      C− ≺ C ≺ C

   Explicit, analytical representations for the bounds exist when X and Y belong to the same
“family”, such as the normal, uniform, Cauchy, (even shifted) exponential or – under some
restrictions on the parameters – (even shifted) Pareto.

Example 2.16 For the exponential family

                             F1 (x) = 1 − exp(−λ1 x),           λ1 > 0                (2.34)
                             F2 (y) = 1 − exp(−λ2 y),           λ2 > 0                (2.35)

Frank, Nelsen and Schweizer (1987) compute the bounds as follows:
                                                                     
                                  λ1 λ2          λ1 + λ2          λ1 + λ2
             FL (s) = 1 − exp −            s−               log
                                λ1 + λ2             λ1 λ2          λ1 λ2
                                                     
                           1            1
                        − log (λ1 ) −      log (λ2 )
                           λ1           λ2
              FM (s) = 1 − exp (−s min(λ1 , λ2 ))

   Apart from these analytical cases, Williamson and Downs (1990) give numerical algo-
rithms for the computation of (2.32) and (2.33). The algorithms provide the value at the
point u of the generalized inverse of FL and FM , FL−1 (u) and FM
                                                                −1
                                                                   (u), as follows:
                                                                 
                       FL−1 (u) = inf F1−1 (t) + F2−1 (u − t + 1)
                                  t∈[u,1]
                                                                         
                         −1
                        FM  (u) = sup           F1−1 (t) + F2−1 (u − t)
                                  t∈[0,u]


2.7.1 An application: VaR bounds
As we showed above, copulas have been applied to the measurement of market risk, in
particular to the assessment of the Value at Risk (VaR) of a portfolio. Suppose that we have
estimated the marginal distribution of two assets in a portfolio and want to “know” the
portfolio VaR without introducing any assumption on their copula. It follows from (2.30),
(2.31), i.e. from the fact that FL (s) ⩽ FS (s) ⩽ FM (s) for every s, that for any conﬁdence
level θ

                             VaRM (θ ) ⩽ VaRS (θ ) ⩽ VaRL (θ )                        (2.36)

where VaRM and VaRL are the VaRs corresponding to the distributions FM and FL . The
latter distributions then provide respectively a lower and an upper bound for the VaR: the
lower bound in particular is interesting, from the point of view of risk management, since it
is the “worst possible outcome”, with the given level of conﬁdence. Opposite to intuition,
86                                                                         Copula Methods in Finance


        1   MIB MIB     MIB MIB MIB DAX DAX DAX DAX UKX UKX UKX                   SPX SPX CAC
            DAX UKX     SPX CAC NKY UKX SPX CAC NKY SPX CAC NKY                   CAC NKY NKY
      0.5

        0
     –0.5

       –1

     –1.5

       –2

     –2.5

       –3

     –3.5

       –4

Figure 2.9 VaR bounds at the 95% level of conﬁdence for equally weighted portfolios of couples of
selected stock indices. The ﬁrst line represents the bounds obtained from the empirical quantiles while
the second and third lines represent the bounds from EVT estimated quantiles and from Student’s t
estimated quantiles respectively


     Table 2.5 Comparison between the expected number of exceedances (1st row) and the actual
     ones (2nd to 5th column) for couples of selected stock indices, together with their p-values

                              Var at 95% level                        Var at 99% level

                           E                  E                    E                  E
                      Lower Bound         Normal VaR          Lower Bound         Normal VaR

     Expected                        35                                       7

     MIB-DAX                28                  65                  4                   30
                          (0.11)              (0.00)              (0.12)              (0.00)
     MIB-UKX                31                  56                  9                   29
                          (0.24)              (0.00)              (0.23)              (0.00)
     MIB-SPX                18                  58                  5                   23
                          (0.00)              (0.00)              (0.22)              (0.00)
     MIB-CAC                26                  61                  7                   25
                          (0.06)              (0.00)              (0.49)              (0.00)
     DAX-UKX                32                  62                  8                   33
                          (0.29)              (0.00)              (0.36)              (0.00)
     DAX-SPX                21                  62                  6                   28
                          (0.01)              (0.00)              (0.35)              (0.00)
     DAX-CAC                31                  64                  6                   35
                          (0.24)              (0.00)              (0.35)              (0.00)
     UKX-SPX                27                  57                  6                   30
                          (0.08)              (0.00)              (0.35)              (0.00)
     UKX-CAC                31                  60                  10                  30
                          (0.24)              (0.00)              (0.13)              (0.00)
     SPX-CAC                23                  56                  6                   28
                          (0.02)              (0.00)              (0.35)              (0.00)
Bivariate Copula Functions                                                                   87

the lower bound VaRM does not correspond to the maximum copula, i.e. to the case in
which portfolio returns are comonotone, even if no hedging is possible in this case.
   The following numerical example is provided in Luciano and Marena (2002a,b): they con-
sider the time series of daily closing prices of MIB 30, DAX, UKX, SPX, CAC, NKY, from
December 30, 1994, to April 20, 2000. They compute the marginal empirical distributions
and ﬁt to the data both an Extreme Value Theory distribution13 and a Student’s t distribution.
For each couple of indices, and assuming an equally weighted portfolio, S = 0.5X + 0.5Y ,
they evaluate the 95% daily VaR bounds corresponding to the three different choices for
the marginals, using the numerical procedure in Williamson and Downs (1990). The results
are collected in Figure 2.9.
   They also compare the appropriateness of the lower bound with respect to that of the
VaR obtained under the so-called normal approach, i.e. assuming both the marginal and
joint return distribution to be normal (by estimating the mean, variances and covariances
of the indices). In order to assess the appropriateness, they perform backtesting of the
VaR, both at the 95% and 99% loc. In turn, backtesting consists in computing the number
of loss exceedances with respect to the VaR and in comparing it with its expectation: a
number of actual exceedances smaller than the expected one signals an overconservative
VaR, while a number greater than the expected one signals an overoptimistic VaR. The
results of the comparison are presented in Table 2.5 and show that the lower bound is not
as overconservative as one could fear, while the normal VaR is excessively overoptimistic.

                                          2.8 APPENDIX
This appendix collects the proofs of the theorems in this chapter (as for corollaries, only
the corollary to Sklar’s theorem is demonstrated).

Proof of Theorem 2.1 We demonstrate the property with reference to the ﬁrst argument,
v. More precisely, we show that v1 ⩽ v2 implies G(v1 , x) ⩽ G(v2 , x) for every x in A2 .
   From (2.1), the 2-increasing property of G, rearranging, gives

                         G (v2 , z1 ) − G (v1 , z1 ) ⩽ G (v2 , z2 ) − G (v1 , z2 )

for every z2 ⩾ z1 , i.e. the difference G(v2 , x) − G(v1 , x) is a non-decreasing function of x.
In particular,

                           G(v2 , a2 ) − G(v1 , a2 ) ⩽ G(v2 , x) − G(v1 , x)             (2.37)

for every x ⩾ a2 . Since G(v1 , a2 ) = G(v2 , a2 ) = 0, one gets G(v1 , x) ⩽ G(v2 , x) for every
x in A2 , as needed.                                                                          

Proof of Theorem 2.2 We demonstrate that for every couple of points (v1 , z1 ), (v2 , z2 )
in A × B, with v1  v2 , z1  z2

                          |C (v2 , z2 ) − C (v1 , z1 )| ⩽ |v2 − v1 | + |z2 − z1 |        (2.38)

13 See, for instance, Embrechts, Klüppenberg and Mikosch (1997).
88                                                                              Copula Methods in Finance

  Starting from the difference on the l.h.s., subtracting and adding C (v1 , z2 ), and applying
a basic property of absolute values, we have:

     |C (v2 , z2 ) − C (v1 , z1 )| ⩽ |C (v2 , z2 ) − C (v1 , z2 )| + |C (v1 , z2 ) − C (v1 , z1 )|   (2.39)

If v1 ⩽ v2 , it follows from Theorem 2.1 that C (v2 , z2 ) − C (v1 , z2 ) ⩾ 0, and from the 2-
increasing property, applied to the rectangle [v1 , v2 ] × [z2 , 1], that

                         C (v2 , 1) − C (v2 , z2 ) − C (v1 , 1) + C (v1 , z2 ) ⩾ 0

i.e.14

                     C (v2 , z2 ) − C (v1 , z2 ) ⩽ C (v2 , 1) − C (v1 , 1) = v2 − v1

For the same reasons, when v1 > v2 , we have

                     C (v2 , z2 ) − C (v1 , z2 ) ⩽ 0
                     C (v2 , z2 ) − C (v1 , z2 ) ⩾ C (v2 , 1) − C (v1 , 1) = v2 − v1

Putting together the two cases:

                                 |C (v2 , z2 ) − C (v1 , z2 )| ⩽ |v2 − v1 |

An analogous reasoning yields

                                 |C (v1 , z2 ) − C (v1 , z1 )| ⩽ |z2 − z1 |

Substituting in (2.39) one gets (2.38).                                                                   

Proof of Theorem 2.3 Existence follows from the fact that

                            ∂C(x, k)                       ∂C(K,x)
                                     = Wk (x),                    = VK (x)
                              ∂v                             ∂z

In turn, the sections are differentiables almost everywhere because they are monotone
(non-decreasing). As for the values taken by the partial derivatives, consider ∂C/∂v. The
incremental ratio of W at x is

                           Wk (x + h) − Wk (x)   C(x + h, k) − C(x, k)
                                               =
                                    h                      h

which, by uniform continuity, is not greater than one in absolute value. It follows that
Wk (x) ⩽ 1. In addition, Wk (x) ⩾ 0 by monotonicity: as a consequence, Wk (x) ∈ I . 

14 As in the proof of Theorem 2.1, we are using the fact that, when v ⩽ v , C (v , z ) − C (v , z ) is a non-
                                                                     1   2      2 2          1 2
decreasing function of z2 .
Bivariate Copula Functions                                                                    89

Proof of Theorem 2.4 L.h.s.: from the 2-increasing property, C(v2 , z2 ) − C(v2 , z1 ) −
C(v1 , z2 ) + C(v1 , z1 ) ⩾ 0, choosing v2 = z2 = 1, we get 1 − C(1, z1 ) − C(v1 , 1) +
C(v1 , z1 ) ⩾ 0, or 1 − z1 − v1 ⩾ −C(v1 , z1 ), which, being valid for every (v1 , z1 ) in A × B,
can be rewritten as C(v, z) ⩾ v + z − 1. Since at the same time Corollary 2.1 holds, we have
the l.h.s. of the inequality. R.h.s.: it follows from property (ii) of the subcopula deﬁnition
and Theorem 2.1, as applied to both arguments of C.                                            

Proof of Theorem 2.5 (Sklar’s Theorem) We present a (partial) proof, following
Schweizer and Sklar (1983). The proof is partial since we do not demonstrate an extension
lemma, which is used in it.
  An inequality for distribution functions involving their margins is used in the proof
of Sklar’s theorem. It is the second of the following lemmas, that concern grounded, 2-
increasing functions with margins. The margins in turn are deﬁned as follows:

Deﬁnition 2.14 The margins of a function G: A1 × A2 →  are the functions G1 (x):
A1 → , deﬁned as

                                         G1 (x) = G(x, a 2 )

and G2 (y): A2 → , deﬁned as

                                         G2 (y) = G(a 1 , y)

where a i is the maximal element of Ai .

  Evidently, marginal distribution functions of r.v.s are margins according to the previous
deﬁnition.
  Lemmas 2.1 and 2.2 apply.

Lemma 2.1 A function G: A1 × A2 →  grounded, 2-increasing, with margins G1 and
G2 , is such that

                        |G (v2 , z) − G (v1 , z)| ⩽ |G1 (v2 ) − G1 (v1 )|

for every couple of points (v2 , z), (v1 , z) belonging to Dom G,

                        |G (v, z2 ) − G (v, z1 )| ⩽ |G2 (z2 ) − G2 (z1 )|

for every couple of points (v, z2 ), (v, z1 ) belonging to Dom G.

Proof of Lemma 2.1 Consider ﬁrst the case v2 > v1 . Apply the 2-increasing property to
the rectangle [v1 , v2 ] × [z, a 2 ]

                     G (v2 , a 2 ) − G (v1 , a 2 ) − G(v2 , z) + G(v1 , z) ⩾ 0

By the deﬁnition of marginals, G (v2 , a 2 ) = G1 (v2 ) and G (v1 , a 2 ) = G1 (v1 ) and the pre-
vious inequality can be transformed into

                             G (v2 , z) − G (v1 , z) ⩽ G1 (v2 ) − G1 (v1 )
90                                                                          Copula Methods in Finance

In turn, by the non-decreasing property of G and G1 , this is equivalent to

                          |G (v2 , z) − G (v1 , z)| ⩽ |G1 (v2 ) − G1 (v1 )|

If v2 < v1 , the 2-increasing property entails

                            G (v1 , z) − G (v2 , z) ⩽ G1 (v2 ) − G1 (v1 )

or

                          |G (v2 , z) − G (v1 , z)| ⩽ |G1 (v2 ) − G1 (v1 )|

The two cases together give the ﬁrst statement in the lemma. Analogously for the second
assertion.                                                                           

Lemma 2.2 For the function G of the previous lemma,

             |G(v1 , z1 ) − G(v2 , z2 )| ⩽ |G1 (v1 ) − G1 (v2 )| + |G2 (z1 ) − G2 (z2 )|

for every (v1 , z1 ), (v2 , z2 ) ∈ Dom G.

Proof of Lemma 2.2        It is sufﬁcient to apply the previous lemma twice:

        |G(v2 , z2 ) − G(v1 , z1 )| ⩽ |G(v2 , z2 ) − G(v2 , z1 )| + |G(v2 , z1 ) − G(v1 , z1 )|
                                   ⩽ |G1 (v1 ) − G1 (v2 )| + |G2 (z1 ) − G2 (z2 )|
                                                                                                   

Using the previous lemmas, we can proceed to the proof of Sklar’s theorem.

Proof of part (i)   Let us demonstrate that, if Ran F1 ⊂ A, Ran F2 ⊂ B, the function F (x, y)
deﬁned by

                                    F (x, y) = C(F1 (x), F2 (y))

• is a joint distribution function
• has margins F1 , F2

As for the ﬁrst assertion, let us check that

(1) Dom F = ∗2
(2) F is 2-increasing
(3) F is grounded
(4) F (+∞, +∞) = 1
Bivariate Copula Functions                                                                    91

  Point (1) follows from the fact that Dom Fi = ∗ , i = 1, 2; Ran F1 ⊂ A; Ran F2 ⊂ B.
  Point (2) follows from the fact that C is 2-increasing, F1 and F2 are non-decreasing.
  Point (3) is a consequence of the fact that

                                  F (−∞, y) = C(0, F2 (y)) = 0
                                  F (x, −∞) = C(F1 (x), 0) = 0

which in turn depends on F1 and F2 being marginal distribution functions and C being
grounded.
   Point (4) depends on property (ii) in the subcopula deﬁnition, which entails F (+∞, +∞) =
C(1, 1) = 1.
   As for the second assertion, let us check that the ﬁrst margin of F , F (x, +∞), is actually
the marginal distribution function F1 (x): since F (x, +∞) = C(F1 (x), 1) and property (ii)
in the subcopula deﬁnition holds, F (x, +∞) = F1 (x). Analogously for the second margin.

Proof of part (ii) This requires the following lemma, which guarantees that every subcop-
ula can be extended to a copula. The proof is in Schweizer and Sklar (1974).

Lemma 2.3 (Sklar, 1973) Given any subcopula, there exists a copula C such that

                                         C(v, z) = C(v, z)

for every (v, z) ∈ Dom C.

  Given the lemma, we can now proceed to:

Proof of part (ii) Consider a joint distribution function F (x, y) with margins F1 and F2
and two points (x1 , y1 ), (x2 , y2 ) ∈ ∗2 . Suppose that

                             F1 (x1 ) = F1 (x2 ),      F2 (y1 ) = F2 (y2 )

Then F (x, y) has the same value at the points (x1 , y1 ), (x2 , y2 ), since, by Lemma 2.2,

        |F (x1 , y1 ) − F (x2 , y2 )| ⩽ |F1 (x1 ) − F1 (x2 )| + |F2 (y1 ) − F2 (y2 )| = 0

Then, for every point (x, y), the value of F depends on F1 (x), F2 (y) only: otherwise stated,
there is a unique function C, with Dom C = Ran F1 × Ran F2 , such that

                                    F (x, y) = C(F1 (x), F2 (y))

The function under examination is a subcopula, since, on Ran F1 × Ran F2 ,

 (i) it is grounded:

                        C(0, F2 (y)) = C(F1 (−∞), F2 (y)) = F (−∞, y) = 0
                        C(F1 (x), 0) = C(F1 (x), F2 (−∞)) = F (x, −∞) = 0
92                                                                      Copula Methods in Finance

(ii) it has margins that are the identity function:

                        C(1, F2 (y)) = C(F1 (+∞), F2 (y)) = F (+∞, y) = F2 (y)
                        C(F1 (x), 1) = C(F1 (x), F2 (+∞)) = F (x, +∞) = F1 (x)

(iii) it is 2-increasing, as a consequence of the analogous property of distribution functions.

  If F1 (x), F2 (y) are continuous, Dom C = I 2 and the subcopula is a copula. Otherwise,
Sklar’s lemma applies.                                                                 

Proof of Corollary 2.3 Consider the subcopula in part (ii) of Sklar’s theorem and denote
the value of F1 (x) as v, and the value of F2 (y) as z. Since F1 and F2 are margins of a
distribution function, they are marginal distribution functions and therefore admit generalized
inverses: x = F1−1 (v), y = F2−1 (z). Then
                                                               
                                F (x, y) = F F1−1 (v), F2−1 (z)

                                 C(F1 (x), F2 (y)) = C(v, z)

Substituting into (2.6) we obtain the statement of the corollary.                              

Proof of Theorem 2.6 (1) → (2) Notice that

                            Pr(X ⩽ x, Y ⩽ y) = Pr((X, Y ) ∈ A1 ∩ A2 )                      (2.40)

where

                                    A1 : = {(s, t) ∈ A : s ⩽ x}
                                    A2 : = {(s, t) ∈ A : t ⩽ y}

The comonotonicity property of the support entails that either A1 ⊂ A2 , so that A1 ∩ A2 =
A1 and the probability in (2.40) is F1 (x), or A1 ⊃ A2 , so that A1 ∩ A2 = A2 and the
probability in (2.40) is F2 (y). In the ﬁrst case F1 (x) ⩽ F2 (y), in the second the opposite
inequality holds. Property (2) follows.
  (2) → (3) From Sklar’s theorem.
  (3) → (4) We want to show that

                         F (x, y) = C(F1 (x), F2 (y)) = min(F1 (x), F2 (y))

implies

                            F (x, y) = Pr(F1−1 (U ) ⩽ x, F2−1 (U ) ⩽ y)

The latter in fact is

                 Pr(U ⩽ F1 (x), U ⩽ F2 (y)) = Pr(U ⩽ min(F1 (x), F2 (y)))
                                                = min(F1 (x), F2 (y))
Bivariate Copula Functions                                                                    93

  (4) → (5) Since X = F1−1 (U ), U = F1 (X). Substituting into Y = F2−1 (U ), we have
Y = F2−1 (F1 (X)). Conversely, since Y = F2−1 (U ), U = F2 (Y ) and X = F1−1 (F2 (X)).
  (5) → (1) The set of possible outcomes, under (6), is
                                                           
                                (x, F2−1 (F1 (x))) : x ∈ ∗

Since both F1 and F2 are marginal distributions, they are non-decreasing: as a consequence,
both the above set and the couple (X, Y ) are comonotonic.                               

An analogous technique applies to the proof of Theorem 2.7.

Proof of Theorem 2.8         Denote with C̆ the copula of α1 (X), α2 (Y ). We are going to show
that

                                        C̆(v, z) = C(v, z)

for every (v, z) in ∗2 . For ﬁxed (v, z), take (x, y) such that v = F1 (x), z = F2 (y). Then

        C(v, z) = C(F1 (x), F2 (y))
                = F (x, y) = Pr (X ⩽ x, Y ⩽ y)
                = Pr (α1 (X) ⩽ α1 (x) , α2 (Y ) ⩽ α2 (y)) = H (α1 (x) , α2 (y))
                = C̆ (H1 (α1 (x)) , H2 (α2 (y))) = C̆ (F1 (x), F2 (y)) = C̆(v, z)

This, together with surjectivity of F1 , F2 , which in turn follows from their continuity, proves
the theorem.                                                                                   

  The proof of Theorem 2.9 is analogous to the proof of Sklar’s theorem.
  The proof of Theorem 2.10 requires the following lemma:

Lemma 2.4      The functions
                             ∂C(v, z)                 ∂C(v, z)
                                      : I → I,                 :I →I
                               ∂v                       ∂z
are non-decreasing a.e. in the interior of I .

Proof of Lemma 2.4 The derivatives exist by Theorem 2.3; their non-decreasing behavior
follows from the fact, exploited above, that, if v1 ⩽ v2 , C (v2 , z) − C (v1 , z) is a non-
decreasing function of z. This means that
                                     ∂ (C (v2 , z) − C (v1 , z))
                                                 ∂z
is non-negative a.e., i.e. ∂C (v2 , z) /∂z ⩾ C (v1 , z) /∂z when v1 ⩽ v2 , or ∂C/∂z is non-
decreasing a.e. in v (symmetrically for z).                                              

Proof of Theorem 2.10 Since non-decreasing functions such as ∂C/∂v and ∂C/∂z are
differentiable a.e., the density exists. Since the partial derivatives are non-decreasing,
c ⩾ 0.                                                                                  
                       3
      Market Comovements and Copula Families

This chapter discusses ﬁrst the relationships between copula functions and association
measures for couples of random variates, i.e. for ﬁnancial applications, market indicators
such as prices or returns. It then presents some well-known parametric families (or classes)
of copula functions, for which the parameter value is directly related to one or more asso-
ciation measures. Due to their utility for ﬁnancial applications – to be fully discussed after
the estimation problem has been addressed (Chapter 5) – we present the following copula
families: the Gaussian, the Student’s t, the Fréchet, the Archimedean, the Marshall–Olkin.

                     3.1 MEASURES OF ASSOCIATION
Generally speaking, the random variates X and Y are said to be associated when they are
not independent according to the characterization in section 2.4 of Chapter 2. However,
there are a number of concepts of association. In the sequel, we will present some of these
concepts, namely:

• concordance (as distinct from dependence), linear correlation, tail dependence, positive
  quadrant dependency

and some measures associated with them:

• Kendall’s tau, Spearman’s rho, the linear correlation coefﬁcient, the indices of tail depen-
  dency.

All these measures are related to copulas since, in coupling a joint distribution function
with its marginals, the copula “captures certain . . . aspects of the relationship between the
variates, from which it follows that (. . .) dependence concepts are properties of the copula”
(Nelsen, 1991). As mentioned above, the same applies because of copula invariance with
respect to increasing transformations.
   From now on we will assume that X and Y are continuous.

3.1.1 Concordance

Concordance concepts, loosely speaking, aim at capturing the fact that the probability of
having “large” (or “small”) values of both X and Y is high, while the probability of having
“large” values of X together with “small” values of Y – or vice versa – is low.
   Geometrically, it looks at the probability mass associated with the upper and lower quad-
rants, as opposite to the one associated with the rest of the plane (x, y).
   Formally, a measure of concordance between the r.v.s X and Y , with copula C, may be
denoted by MX,Y or MC . It is characterized by the following set of axiomatic properties
(Scarsini, 1984):
96                                                                             Copula Methods in Finance

Deﬁnition 3.1 MX,Y = MC is a measure of concordance between the r.v.s X and Y – with
copula C – iff

  (i) it is deﬁned for every pair of r.v.s (completeness)
 (ii) it is a relative (or normalized) measure: MX,Y ∈ [−1, 1]
(iii) it is symmetric: MX,Y = MY,X
(iv) if X and Y are independent, then MX,Y = 0
 (v) M−X,Y = MX,−Y = −MY,X
(vi) it converges when the copula (pointwise)1 does: if {(Xn , Yn )} is a sequence of contin-
      uous r.v.s with copula Cn , and

                              lim Cn (v, z) = C(v, z) for every (v, z) ∈ I 2
                            n→+∞

       then
                                               lim MXn ,Yn = MX,Y
                                             n→+∞

(vii) it respects concordance order: if C1 ≺ C2 , then MC1 ⩽ MC2

This deﬁnition implies invariance with respect to increasing transformations and the exis-
tence of bounds for M in correspondence to comonotonicity and countermonotonicity.

Theorem 3.1 If αi , i = 1, 2, are a.s. increasing functions on Ran Fi , then MX,Y =
Mα1 (X),α2 (Y ) .

Theorem 3.2 If X and Y are comonotone, MX,Y = 1; if they are countermonotone,
MX,Y = −1.

Scarsini (1984) also proved that the following representation holds:
                                                                                    
Theorem 3.3 Given a bounded, weakly monotone, odd function f , with Dom f = − 12 , 12 ,
then                     
                       k       f (v − 12 )f (z − 12 ) dC(v, z)                    (3.1)
                                        I2
                
where k −1 =     I f
                       2 (u − 1 ) du, is a concordance measure.
                              2

  By specifying the function f , some very well-known measures of concordance can be
obtained. For f (u) = u one obtains Spearman’s ρS , deﬁned in the sequel; for f (u) = sgn (u)
Blomqvist’s β, which is deﬁned as

                                             q = 4C( 12 , 12 ) − 1                                     (3.2)

Other popular concordance measures cannot be obtained from the above representation: this
is the case of Kendall’s τ , which will be discussed in the next section, or Gini’s coefﬁcient

1 Please note that for bivariate copula functions, pointwise and uniform convergence coincide, due to uniform
continuity.
Market Comovements and Copula Families                                                                           97

γ , deﬁned as
                                      
                             γ =2               (|v + z − 1| − |v − z|) dC(v, z)                              (3.3)
                                           I2

It is interesting to notice that concordance measures have two features:

• Independency is a sufﬁcient, but not a necessary condition for them to be equal to zero.
• They are distinct from dependence measures, as deﬁned by Rényi (1959). Opposite to
  the former, the latter assume their minimum value when X and Y are independent, not
  when they are countermonotonic.

3.1.2 Kendall’s τ

In this section we deﬁne Kendall’s coefﬁcient, ﬁrst introduced – according to Nelsen (1991) –
by Fechner around 1900, and rediscovered by Kendall (1938). We then interpret it, remark that
it is a normalized expected value and give an alternative method to compute it for absolutely
continuous copulas. Examples of computation, together with a discussion and some examples
of estimation, conclude the section.

Deﬁnition 3.2 Kendall’s tau for the r.v.s X and Y with copula C, denoted as τ or τC , is:
                                            
                                    τ =4                C(v, z) dC(v, z) − 1                                  (3.4)
                                                   I2

   One can demonstrate that it measures the difference between the probability of con-
cordance and the one of discordance for two independent random vectors, (X1 , Y1 ) and
(X2 , Y2 ), each with the same joint distribution function F and copula C. The vectors are
said to be concordant if X1 > X2 whenever Y1 > Y2 , and X1 < X2 whenever Y1 < Y2 ; and
discordant in the opposite case.2 We have

Theorem 3.4 Given (X1 , Y1 ) and (X2 , Y2 ) i.i.d. with copula C,

                τ = Pr((X1 − X2 )(Y1 − Y2 ) > 0) − Pr((X1 − X2 )(Y1 − Y2 ) < 0)                               (3.5)

   We refer the reader to Scarsini (1984) for a proof of the fact that Kendall’s τ satisﬁes
axioms (i) to (vii) for a concordance measure. We stress only the fact that −1 ⩽ τ ⩽ 1, and
if we consider continuous random variables, the lower bound applies to countermonotonic
r.v.s only, while the upper one applies to comonotonic ones only:

                                            τ = −1 iff C = C −
                                            τ =1   iff C = C +

2 In turn, the idea of using the concordance and discordance probabilities comes from the fact that probabilities of
events involving only inequality relationships between two random variables are invariant with respect to increasing
transformations. Measures based on these probabilities are then expected to satisfy axiom (vii) in the deﬁnition of
measures of concordance.
98                                                                    Copula Methods in Finance

Remark 3.1 One can also couple Theorem 3.2 with the fact that the double integral in
the deﬁnition of τ is the expected value of the function C(U1 , U2 ), where both U1 and U2
are standard uniform and have joint distribution C:

                                   τ = 4E [C(U1 , U2 )] − 1

It follows that

                                −1 ⩽ 4E [C(U1 , U2 )] − 1 ⩽ 1

i.e. that Kendall’s coefﬁcient is a normalized expected value.

When the copula is absolutely continuous, the differential

                                                ∂ 2C
                                      dC =           dv dz
                                                ∂v∂z

can be substituted into the deﬁnition of τ (equation 3.4), in order to compute it. However,
when C has both an absolutely continuous and a singular component, or is singular, the
following theorem holds.

Theorem 3.5 Kendall’s τ can be computed as:
                               
                                      ∂C(v, z) ∂C(v, z)
                     τ =1−4                             dv dz                             (3.6)
                                  I 2   ∂v       ∂z

     The equivalence of (3.4) and (3.6) follows from the following lemma (Nelsen, 1991):

Lemma 3.1 If C is a copula
                                   
                                                    ∂C(v, z) ∂C(v, z)
                  C(v, z) dC(v, z) +                                  dv dz = 12
                     I2                          I2   ∂v       ∂z

Example 3.1 Consider the product copula, for which we know from Example 2.14 that

                                          ∂ 2C⊥
                                                =1
                                          ∂v ∂z

It follows, according to the deﬁnition, that
                                       
                              τC ⊥ = 4       vz dv dz − 1 = 0
                                            I2

Example 3.2 Consider the Marshall–Olkin copula deﬁned in section 2.5.1, which is not
absolutely continuous. Its partial derivatives exist whenever v m = zn and
                                                
                  ∂C MO (v, z) ∂C MO (v, z)         (1 − m)v 1−2m z, v m ⩾ zn
                                            =
                      ∂v           ∂z               (1 − n)vz1−2n , v m < zn
Market Comovements and Copula Families                                                   99

Therefore, one can compute
                      
                                     ∂C(v, z) ∂C(v, z)
                                                       dv dz = 14 (1 − µ)
                                I2     ∂v       ∂z

and

                                               τC MO = µ

which is the measure of the copula singular component.

It is easy to demonstrate, using (3.6), that

Theorem 3.6 The Kendall’s τ of a copula and of its associated survival copula coincide:

                                                   τC = τC

  In order to estimate τ from a random sample of n pairs

                                                   (Xi , Yi )

i = 1, . . . , n, having deﬁned the indicator variables

                                     Aij ≡ sgn (Xi − Xj )(Yi − Yj )

as in Gibbons (1992), one can notice that

   E(Aij ) = (+1) Pr((Xi − Xj )(Yi − Yj ) > 0) + (−1) Pr((Xi − Xj )(Yi − Yj ) < 0) = τ

It follows that an unbiased estimator of Kendall’s coefﬁcient is the so-called Kendall’s
sample τ :

                                                      n
                                             2
                                                      Aij                             (3.7)
                                          n(n − 1)
                                                       i=1 j >i

The estimator can be demonstrated to be consistent too.

An application: Kendall’s tau estimation for some ﬁnancial indices and an FX rate
Let us consider3 the time series of ﬁve assets, namely two stock indices (DAX 30 and S&P
500), two bond indices (the 10-year total return index for the German bond market and
the corresponding index for the US market, GER10y and USA10y respectively) and one
exchange rate, the DEM/USD. Namely, let us consider the weekly average data on their
returns from January 1992 to June 2001, for a total of n = 248 observations. These data,
which will be discussed and further used in Chapter 5 in order to illustrate the estimation
methods for copulas, permit us to estimate Kendall’s coefﬁcient between the corresponding
indices, using (3.7). The values obtained are given in Table 3.1.
3 See Cazzulani, Meneguzzo and Vecchiato (2001).
100                                                                            Copula Methods in Finance

      Table 3.1   Sample Kendall’s tau for selected assets, 01/92 to 06/01, weekly (average) data

                       DAX 30            S&P 500         GER10y           USA10y       DEM/USD

      DAX 30
      S&P 500            0.44
      GER10y             0.13             0.12
      USA10y             0.03             0.14             0.35
      DEM/USD            0.22             0.13             0.05           −0.11


3.1.3    Spearman’s ρS
In this section we deﬁne the Spearman coefﬁcient, ﬁrst proposed – according to Nelsen
(1991) – in 1904. In analogy with what we did with Kendall’s τ , we interpret the coefﬁcient,
remark that it is a normalized expected value and that it represents rank correlation. Examples
of computation, together with a discussion and some examples of estimation, follow. A
comment on the relationship between Kendall’s τ and Spearman’s ρS concludes the section.

Deﬁnition 3.3 Spearman’s rho for r.v.s X and Y with copula C – denoted as ρS or
ρSC – is:
                                               
             ρS = 12      C(v, z) dv dz − 3 = 12    vz dC(v, z) − 3        (3.8)
                                  I2                                I2

   This measure also exploits probabilities of concordance and discordance. It starts from
three couples of i.i.d. random vectors, namely (X1 , Y1 ), (X2 , Y2 ) and (X3 , Y3 ), with copula
C. It is a multiple (because of normalization) of the difference between the probability of
concordance and discordance for the vectors (X1 , Y1 ), (X2 , Y3 ), the latter being made up of
independent r.v.s. Therefore, in the ρS case the probabilities of concordance and discordance
are measured w.r.t. the independence case. We have:

Theorem 3.7 Given (X1 , Y1 ), (X2 , Y2 ), (X3 , Y3 ), i.i.d. with copula C, then

           ρS = 3 [Pr ((X1 − X2 ) (Y1 − Y3 ) > 0) − Pr ((X1 − X2 ) (Y1 − Y3 ) < 0)]                (3.9)

  Substituting in the ﬁrst deﬁnition, one can also write
                                      
                            ρSC = 12        [C(v, z) − vz] dv dz
                                                  I2

Remark 3.2 Since the integral transforms U1 = F1 (X), U2 = F2 (Y ) are standard uniform,
with joint distribution function C, the integral in the second form of Spearman’s ρS Deﬁ-
nition 3.3 is E [U1 U2 ]. As a consequence

                                                             E [U1 U2 ] − 14
                                ρS = 12E [U1 U2 ] − 3 =
                                                                 1/12

Since 12 and 12
              1
                are the mean and variance of standard uniforms, it follows that
                                                cov (F1 (X), F2 (Y ))
                                       ρS = √                                                     (3.10)
                                                var(F1 (X))var(F2 (Y ))
Market Comovements and Copula Families                                                   101

We will deﬁne below such a ratio as the linear correlation coefﬁcient between F1 (X) and
F2 (Y ): Spearman’s ρS is therefore the rank correlation, in the sense of correlation of the
integral transforms, of X and Y.

  Also for Spearman’s ρS one could demonstrate that it satisﬁes the deﬁnition of concor-
dance measure and that it reaches its bounds iff X and Y are respectively countermonotonic
and comonotonic continuous random variates:
                                  ρS = −1          iff C = C −
                                  ρS = 1           iff C = C +

As for computation, both the ﬁrst and second formulas in Deﬁnition 3.3 can be fruitfully
applied.

Example 3.3 Using the ﬁrst or the second part of the deﬁnition, it is straightforward to
show that Spearman’s rho for the product copula is equal to zero:
                                      
                          ρSC ⊥ = 12        vz dv dz − 3 = 0
                                              I2

Example 3.4 In the Marshall–Olkin case, since
                    
                                               1    m+n
                           C MO (v, z) dv dz =
                        I2                     2 2m + 2n − mn
we have
                                                  mn
                                 ρSC MO = 3
                                              2m + 2n − mn
It is easy to demonstrate, using the deﬁnition, that

Theorem 3.8 Spearman’s ρS of a copula and its associated copula coincide:

                                         ρSC = ρSC

  As far as estimation is concerned (see Gibbons, 1992), starting from a random sample of
n pairs

                                          (Xi , Yi )

i = 1, . . . , n, and recalling that ρS is the rank correlation, according to (3.10), one can
switch to the ranks of the sample variates:

                             Ri ≡ rank(Xi ),          Si ≡ rank(Yi )

where the ranking has to be done in ascending order. By so doing, the following Spearman’s
sample ρS can be obtained:
                                   n
                                         (Ri − R)(Si − S)
                              i=1              n
                                  n
                                  i=1 (Ri − R)    i=1 (Si − S)
                                               2               2
102                                                                        Copula Methods in Finance

Taking into consideration the fact that the ranks of n data are the ﬁrst n integer numbers,
the above expression simpliﬁes into either
                                          n
                                            i=1 (Ri − R)(Si − S)
                                     12
                                                 n(n2 − 1)
or
                                                 n
                                                  i=1 (Ri − Si )
                                                                   2
                                          1−6                                                  (3.11)
                                                   n(n2 − 1)

which has to be slightly modiﬁed, in applications, in order to take into account tied obser-
vations. The sample version of ρS so obtained is an unbiased estimator of the population
one.

An application: Spearman’s rho estimation for some ﬁnancial indices and an FX rate
Using the same data as in the application of section 3.1.2, together with expression (3.11),
the values for the rank correlation coefﬁcient between the ﬁnancial assets under examination,
over the years 1992–2001, were obtained (see Table 3.2).

      Table 3.2   Sample Spearman’s rho for selected assets, 01/92 to 06/01, weekly (average) data

                       DAX 30           S&P 500        GER10y          USA10y      DEM/USD

      DAX 30              −
      S&P 500            0.67              −
      GER10y             0.20             0.18            −
      USA10y             0.04             0.13           0.49           −
      DEM/USD            0.31             0.19           0.06          −0.22             −



                                    1




                                    0




                                   −1
                                     −1                  0                 1
                                                         t

            Figure 3.1 Spearman’s ρS , as a function of Kendall’s τ , for a given copula
Market Comovements and Copula Families                                                      103

  Finally, one could wonder whether there exists a functional relationship between Kendall’s
τ and Spearman’s ρS . Durbin and Stuart (1951) showed that (see Figure 3.1) for a given
association between X and Y , i.e. for a given copula:

                                   2 τ − 2 ⩽ ρS ⩽ 2 + τ − 2 τ            τ ⩾0
                                   3      1           1        1 2

                                   − 12 + τ + 12 τ 2 ⩽ ρS ⩽ 32 τ + 12    τ <0


3.1.4 Linear correlation

For r.v.s belonging to L2 , concordance – in its loose signiﬁcance – should be captured also
by covariance. Since covariance is not a normalized or relative measure, however, the so-
called Pearson product-moment or linear correlation coefﬁcient has been introduced. We
deﬁne it, show that it satisﬁes some of the axioms for a measure of concordance, and list
ﬁve of its properties, which entail that it does not satisfy the remaining axioms. Last, we
mention the estimation procedure and give an example.
  In order to deﬁne linear correlation, let us denote by var(X) the variance of the r.v. X,
and recall that a non-degenerate random variable has non-null variance.

Deﬁnition 3.4 For non-degenerate r.v.s X and Y belonging to L2 , the linear correlation
coefﬁcient ρXY is

                                                    cov(X, Y )
                                            ρXY = √
                                                   var(X)var(Y )

Theorem 3.9 The linear correlation coefﬁcient satisﬁes axioms (i) to (v) and (vii) of the
concordance measure deﬁnition.

   Proof : It is evident that, if we exclude degenerate r.v.s, the linear correlation coefﬁcient
satisﬁes (i).                                              √
   Axiom (ii) follows from the fact that |cov(X, Y )| ⩽ var(X)var(Y ), while axiom (iii)
depends on the symmetry of covariance, cov(X, Y ) = cov(Y, X).
   Property (iv) follows from the fact that independence between X and Y implies cov(X, Y )
= 0.
   Property (v) is a consequence of the fact that if Y = aX + b a.s., with a ∈ \ {0}, b ∈ ,
then |ρXY | = 1 and vice versa.4
   As concerns property (vii), one needs Hoeffding’s (1940) expression for covariance:
                                            
                         cov(X, Y ) =                (F (x, y) − F1 (x)F2 (y)) dx dy     (3.12)
                                                 D

where D = Dom F1 × Dom F2 .

4 Since r 2 = {var(Y ) − min                       2
                               a,b E[(Y − (aX + b)) ]}/var(Y ).
104                                                                        Copula Methods in Finance

  It follows from this and the Fréchet inequality that, if C1 ≺ C2 , and we denote as ρ1 and
ρ2 the corresponding linear correlations, then from
                    
                             (C1 (F1 (x), F2 (y)) − F1 (x)F2 (y)) dx dy
                         D
                                
                            ⩽            (C2 (F1 (x), F2 (y)) − F1 (x)F2 (y)) dx dy
                                     D

it follows that ρ1 ⩽ ρ2 .                                                                         

  Nonetheless, the correlation coefﬁcient does not satisfy axiom (vi) and therefore is not
a measure of concordance. It satisﬁes instead the following properties, which entail that it
violates Theorems 3.1 and 3.2.
Property 1 ρXY is invariant under linear increasing transformations, not under (non-linear)
increasing transformations.
  Proof : In order to prove the ﬁrst fact, consider that
                  ρaX+b,cY +d = sgn(ac)ρXY             for a, c ∈   \ {0} , b, d ∈
Linear increasing transforms produce sgn(ac) = 1 and ρaX+b,cY +d = ρXY .                          
   In order to show that ρXY is not invariant under increasing, non-linear transforms, consider
the following example:
Example 3.5 Start from two r.v.s X and Y jointly distributed as a bivariate standard
normal, with correlation coefﬁcient ρXY , and take their transforms according to the distri-
bution function of the standard normal , (X) and (Y ). Computing the linear correlation
coefﬁcient between (X) and (Y ) one gets
                                              6          ρXY
                                     ρ(X),(Y ) =
                                                arcsin                               (3.13)
                                              π           2
In spite of reaching its bounds when X and Y are linear transformations of each other, ρXY
does not necessarily reach its bounds when X and Y are comonotonic or countermonotonic,
without being linearly related. Formally, it has the following property:
Property 2    ρXY is bounded
                                              ρl ⩽ ρXY ⩽ ρu
where the bounds ρl and ρu are deﬁned as
                             −
                           D C (F1 (x), F2 (y)) − F1 (x)F2 (y) dx dy
              ρl =                                                                         (3.14)
                      DomF1 (x − EX) dF1 (x) DomF2 (y − EY ) dF2 (y)
                                     2                           2

                                +
                              D C (F1 (x), F2 (y)) − F1 (x)F2 (y)
              ρu =                                                                         (3.15)
                      DomF1 (x − EX) dF1 (x) DomF2 (y − EY ) dF2 (y)
                                     2                           2


and are attained respectively when X and Y are countermonotonic and comonotonic.
Market Comovements and Copula Families                                                     105

  Proof : The bounds for ρXY can be obtained from Hoeffding’s (1940) expression for
covariance, (3.12) above, together with the Fréchet inequality:
                
                      C − (F1 (x), F2 (y)) − F1 (x)F2 (y) dx dy ⩽ cov(X, Y )
                    D
                               
                cov(X, Y ) ⩽            C + (F1 (x), F2 (y)) − F1 (x)F2 (y) dx dy
                                    D
Dividing by the square root of the variances, the bounds are obtained. It is evident that they
are attained when C = C − and C = C + respectively.                                         
Property 3 ρXY for comonotone (countermonotone) random variables can be different
from 1 (−1).
  Proof : In order to show this, let us consider an example of comonotonicity, for which
the linear correlation coefﬁcient is bounded away from 1. Before doing that, remark however
that the bounds in Property 2 depend on margins. The dependence of the bounds for ρXY
on margins can a priori prevent the coefﬁcient from being equal to 1 in absolute value for
any pair of comonotone or countermonotone r.v.s.                                         
  As for the example, consider the following, due to Wang (1998):
Example 3.6 Let X and Y be two log-normal r.v.s, with parameters
                                    (µX , σX ) ,      (µY , σY )
respectively. Computing αl and αu gives respectively:
                                          exp (−σX σY ) − 1
                         ρl =                                     ⩽0
                                    exp σX2 − 1 exp σY2 − 1
                                          exp (σX σY ) − 1
                         ρu =                                     ⩾0
                                    exp σX2 − 1 exp σY2 − 1

As argued by Georges et al. (2001), the lower bound tends to −1 when max(σX , σY ) → 0,
while the upper bound is equal to 1 iff σX = σY . When the two variances are different,
the interval [ρl , ρu ] is different from [−1, +1]. Even worse, it may happen that the interval
[ρl , ρu ] is very “small”, since
                                           lim         ρl = 0
                                     max(σX ,σY )→∞
                                                                                        (3.16)
                                           lim         ρu = 0
                                        |σX −σY |→∞

Example 3.7 To get a feeling of the phenomenon, consider for instance σX = 0.4, σY =
0.6. In this case we get ρl = −0.45, ρu = 0.57. In addition, Figure 3.2 shows the whole
behavior of the bounds, keeping σX ﬁxed at the chosen value, 0.4, and letting σY change.


An application: Stock indices correlation bounds
As an application of the linear correlation bounds concept, consider the following one,
presented in Cherubini and Luciano (2002a). We want to determine the correlation bounds
106                                                                            Copula Methods in Finance

             0.8


             0.6


             0.4


             0.2
                                                                                         lower bound
                                                                                         upper bound
              0
                   0.6        0.5         0.4         0.3        0.2         0.1

        −0.2


        −0.4


        −0.6

Figure 3.2 Bounds for linear correlation as a function of Y ’s volatility, volatility of X = 0.4,
log-normal case



for the risk-neutral 3-month distributions of four stock indices, namely MIB 30, S&P 500,
FTSE, DAX, using the time series of daily closing prices, from January 2, 1999 to March
27, 2000.
   We ﬁrst estimate the risk-neutral marginal distribution of each index using the European
calls closing prices, as given by Bloomberg on March 27, 2000, for contracts with June
expiration and different strikes. In doing this, we follow the approach in Shimko (1993),
which exploits the seminal idea in Breeden and Litzenberger (1978), of reconstructing the
distribution function of an underlying from the derivative of its European call price with
respect to the strike.5 If S is the underlying, with risk-neutral distribution FS∗ , B(0, t) is
the zero-coupon bond value for maturity t, C(K, t) is the value of the call option on S
with strike K and maturity t, it has been known since Breeden and Litzenberger (1978)
that
                                                       1 ∂C(K, t)
                                    FS∗ (K) = 1 +
                                                     B(0, t) ∂K

Shimko superimposed on this idea the assumption of (conditionally) log-normal underly-
ings, where the conditioning is done with respect to the volatility, and of quadratic (implied)
volatility function, σ (K) = A0 + A1 K + A2 K 2 . By so doing he obtained the following
risk-neutral distribution function FS of the underlying S:
                                                √
                         FS (s) = 1 + sφ(D2 (s)) t(A1 + 2A2 s) − (D2 (s))                             (3.17)

                                          ln(S (0) /B(0, t)s) 1       √
                              D2 (s) =               √       − 2 σ (s) t
                                                σ (s) t

5 The estimation technique for the marginals can be changed without modifying the bounds’ existence and inter-
pretation.
Market Comovements and Copula Families                                                        107

where φ(·) and (·) are respectively the density and the distribution of the standard normal,
S (0) is the current value of the underlying, less the discounted dividends. We exploit his
idea by ﬁrst estimating the coefﬁcients A0 , A1 , A2 so as to minimize the squared differences
between actual and theoretical implied volatility, σ (K), on March 28. In order to obtain the
whole indices’ distributions (3.17) we then use, together with the coefﬁcients so obtained,
data on dividends and 3-month zero-coupon bond values from the same data source, in the
same day. Finally, using the four marginals so obtained, we numerically compute the lower
and upper Fréchet bounds for the joint distributions, C − and C + evaluated at the marginal
distribution values. Substituting them in (3.14) and (3.15) we recover the correlation bounds
ρl and ρu in Figure 3.2.
   As the readers can notice, these bounds are always of opposite sign but, at least for
the ﬁrst three pairs of indices, they are far from −1 and 1 respectively. The economic
lesson we learn from the example is that for the Italian stock market, in the period under
consideration, estimated correlation ﬁgures greater than (approximately) 0.7 in absolute
value were inconsistent with the volatility smile. At the same time, estimated values close
to (but smaller than) 0.7 were already very close to the maximum theoretical value: they
had to be considered very high indeed, while usually a correlation close to 0.7 is not read
as being very strong.
   Recalling Theorems 2.6 and 2.7, we can state that, when ρ = ρl , one index is a decreasing
function of the other, while when ρ = ρu it is an increasing one, and the transformation
functions are given in the aforementioned theorems. Applying and plotting them, for the
case X = DAX, Y = FTSE, we obtain the relationships between the two indices shown in
Figure 3.4, assuming extreme correlation between them.

Property 4    ρXY = 0 does not imply independence between X and Y , unless the latter are
Gaussian.

  Proof : If X and Y are Gaussian, ρXY = 0 implies F (x, y) = F1 (x)F2 (y). This can be
checked by substituting ρXY = 0 in the Gaussian expression for the joint distribution: as




                 Figure 3.3   Linear correlation bounds for selected stock indices

                    1.104
                                                                1.104



       lowerF(DAX) 5000
                                                  upperF(DAX) 5000



                        0
                                 5000     1.104                     0
                                                                              5000    1.104
                                   DAX
                                                                                DAX

Figure 3.4   FTSE as a function of DAX, in the extreme correlation cases, lower F(DAX) & upper
F(DAX)
108                                                                        Copula Methods in Finance

usual, it is sufﬁcient to prove the result for standardized normal variates. With ρXY = 0,
the distribution of two standard jointly normal variables becomes
                                   x  y             2       
                                              1       −s − t 2
                       F (x, y) =                exp             ds dt
                                   −∞ −∞ 2π               2
Since the marginal ones are Fi = , it is easy to see that F (x, y) = F1 (x)F2 (y).
  The same fact, that ρXY = 0 implies F (x, y) = F1 (x)F2 (y), cannot be demonstrated in
general: at the opposite, there are counterexamples, such as the one in the next property, in
which, in spite of having ρXY = 0, one variable is a.s. a function of the other.           
Property 5       ρXY = 0 does not mean that one r.v. cannot be almost surely a function of
the other.
  Proof : Nelsen (1999) deﬁnes the following copula
                            
                                  v       0 ⩽ v ⩽ z/2 ⩽ 12
                  C(v, z) =       z/2      0 ⩽ z/2 ⩽ v ⩽ 1 − z/2
                            
                              v + z − 1 12 ⩽ 1 − z/2 ⩽ v ⩽ 1
Given this copula, cov(U1 , U2 ) = 0, but
                                    Pr (U2 = 1 − |2U1 − 1|) = 1
The r.v.s U1 and U2 are uncorrelated, but one is a.s. a function of the other.                        
An application: Linear correlation estimation for some ﬁnancial indices and an FX rate

Using the same data as in the application of section 3.1.2, the values in Table 3.3 were
obtained for the correlation coefﬁcient between the ﬁnancial assets under examination over
the years 1992–2001.


      Table 3.3 Sample Pearson’s linear correlation coefﬁcient for selected assets, 01/92 to 06/01,
      weekly (average) data

                       DAX 30         S&P 500         GER10y         USA10y         DEM/USD

      DAX 30             −
      S&P 500            0.67             −
      GER10y             0.18            0.13            −
      USA10y            −0.02            0.13           0.50           −
      DEM/USD            0.30            0.14           0.06          −0.21               −



3.1.5 Tail dependence
Loosely said, bivariate tail dependence looks at concordance in the tail, or extreme, values
of X and Y . Geometrically, it concentrates on the upper and lower quadrant tails of the
joint distribution function.
   Formally, having deﬁned the joint survival function for uniform variates, C/, we have the
following:
Market Comovements and Copula Families                                                     109

Deﬁnition 3.5 Let
                                            C
                                            /(v, v) = λU
                                      lim
                                     v→1−   1−v
exist ﬁnite. C is said to have upper tail dependence iff λU ∈ (0, 1], no upper tail dependence
iff λU = 0. Analogously, let
                                            C(v, v)
                                      lim           = λL
                                     v→0+     v
exist ﬁnite. C is said to have lower tail dependence iff λL ∈ (0, 1], no lower tail dependence
iff λL = 0.

  In order to capture the correspondence between these deﬁnitions and the intuition above,
recall that

                               C
                               /(v, v) = Pr (U1 > v, U2 > v)
so that the ratio C
                  /(v, v)/(1 − v) is the following conditional probability:
                    /(v, v) = Pr (U1 > v | U2 > v) = Pr (U2 > v | U1 > v)
                    C
                    1−v
Therefore

                λU = lim Pr (U1 > v | U2 > v) = lim Pr (U2 > v | U1 > v)
                      v→1−                          v→1−

and similarly for λL .
   The value λU represents the limit of the conditional probability that the distribution func-
tion of X exceeds the threshold v, given that the corresponding function for Y does, when
v tends to one (and therefore the r.v.s assume extreme or upper tail values). Analogously
for λL .

Example 3.8 The copula pC + + (1 − p)C ⊥ has both upper and lower tail dependency,
since in the upper tail

                         C
                         /(v, v) = 1 − 2v + p min(v, v) + (1 − p)v2
                         1−v                    1−v
                                    1 − (2 − p) v + (1 − p)v 2
                                =
                                              1−v
and therefore
                                                C
                                                /(v, v) = p
                                    λU = lim
                                         v→1−   1−v
In the lower tail
                             C(v, v)   p min(v, v) + (1 − p)v 2
                                     =
                               v                  v
110                                                                   Copula Methods in Finance

and therefore
                                                      C(v, v)
                                       λL = lim               =p
                                              v→0+      v

The tail dependence and its coefﬁcients in turn come from the fact that C + presents tail
dependency, with both upper and lower index 1, while C ⊥ (as well as C − ) has neither
lower nor upper tail dependency.

  We can also introduce the coefﬁcients of tail dependency for the survival copula C:

                                            1 − 2v + C(v, v)
                                      lim                    = λU
                                     v→1−        1−v
                                                       C(v, v)
                                                lim            = λL
                                               v→0+      v

if these limits are ﬁnite. The following property holds trivially:

Theorem 3.10 If C is the survival copula associated with C, then

                                               λU = λL
                                                λL = λU

  Proof :

                                  1 − 2v + C(v, v)       C(1 − v, 1 − v)
                           lim                     = lim
                       v→1−            1−v          v→1−     1−v

implies λU = λL . Symmetrically

                                  C(v, v)       2v − 1 + C(1 − v, 1 − v)
                           lim            = lim
                           v→0+     v      v→0+            v
                                                1 − 2w + C(w, w)
                                          = lim
                                           w→1−       1−w

gives λL = λU .                                                                              

3.1.6 Positive quadrant dependency
The concept of positive quadrant dependency (PQD), due to Lehmann (1966), can be
expressed in terms of copulas as follows.

Deﬁnition 3.6 The r.v.s X and Y are positive quadrant dependent iff

                                              C(v, z) ⩾ vz

for every (v, z) ∈ I 2 .
Market Comovements and Copula Families                                                    111

Alternatively, using the concordance order between copulas, X and Y are PQD iff their
copula is greater than that of the product:

                                          C    C⊥

Example 3.9 R.v.s with the copula pC + + (1 − p)C ⊥ , p ∈ I, are PQD, since

                                         C+     C⊥

implies

                                 pC + + (1 − p)C ⊥      C⊥

On the other hand, r.v.s with the copula pC − + (1 − p)C ⊥ , p ∈ I, are not PQD, since

                                         C− ≺ C⊥

implies

                                 pC − + (1 − p)C ⊥ ≺ C ⊥

In terms of distribution functions, PQD can be formalized as
                                                                     ∗2
                      F (x, y) ⩾ F1 (x)F2 (y) for every (x, y) ∈

the joint probability at each point must be not smaller than the independence one.
   PQD implies the non-negativity of Kendall’s τ, Spearman’s ρS and of the linear cor-
relation coefﬁcient, since independent random variates, for which C = C ⊥ , make these
coefﬁcients equal to zero, and the coefﬁcients themselves respect concordance order.
   By applying Bayes’ rule the PQD inequality may be rewritten as:

                              Pr(X ⩽ x|Y ⩽ y) ⩾ Pr(X ⩽ x)                              (3.18)

   Hence, Lehmann’s PQD condition may be strengthened by requiring the conditional
probability to be a non-increasing function of y. This implies that the probability that the
return Xt takes a small value does not increase as the value taken by the other return Yt
increases. This corresponds to a particular monotonicity in the tails.
   Analogously, we say that a random variable X is left tail decreasing in Y , denoted by
LTD(X|Y ), if

               Pr(X ⩽ x|Y ⩽ y) is a non-decreasing function of y for all x

  This, in turn, is equivalent to the condition that, for all v in [0, 1], C(v, z)/z is a non-
decreasing function in z, or:

                           ∂C(v, z)   C(v, z)
                                    ⩽             for almost all z                     (3.19)
                             ∂z         z
112                                                                    Copula Methods in Finance

      3.2 PARAMETRIC FAMILIES OF BIVARIATE COPULAS
In this section we are going to present several families or classes of copulas. We will call
comprehensive (Devroye, 1986) a copula family which encompasses the minimum, product
and maximum one.
   For each family, we give the copula deﬁnition and write down the density and condi-
tional distribution via copula. We then discuss the concordance order and comprehensiveness
properties of the family. Each family is characterized by a parameter or a vector of param-
eters. Whenever possible, the relationship between this parameter(s) and the measures of
concordance or tail dependence deﬁned above is clariﬁed.


3.2.1 The bivariate Gaussian copula

Deﬁnition 3.7 The Gaussian copula is deﬁned as follows:


                             C Ga (v, z) = ρXY −1 (v), −1 (z)


where ρXY is the joint distribution function of a bi-dimensional standard normal vec-
tor, with linear correlation coefﬁcient ρXY ,  is the standard normal distribution function.
Therefore


              ρXY −1 (v), −1 (z)
                   −1 (v)  −1 (z)                                         
                                              1          2rXY st − s 2 − t 2
              =                                     exp                           ds dt   (3.20)
                   −∞        −∞         2π 1 − ρXY
                                                2          2 1 − ρXY2




   Since it is parametrized by the linear correlation coefﬁcient, we can also write CρGa . We
have proved that it is actually a copula in Chapter 2 and we represent it and its level curves
in Figure 3.5.
   The following representation has been demonstrated by Roncalli (2002) to be equivalent
to (3.20):
                                                                    
                                         v       −1          −1
                                                 (z) − ρXY  (t) 
                        C Ga (v, z) =                              dt                  (3.21)
                                         0               1 − ρXY
                                                              2



   In order to appreciate the effect of different correlation coefﬁcients on the copula values,
let us consider random samples from the Gaussian copula (Figure 3.6): the closer the samples
are to a straight line (the main diagonal or the secondary one) the higher is (in absolute
value) the correlation coefﬁcient. The sign of the coefﬁcient determines the diagonal on
which the samples concentrate.
   The density of C Ga has been calculated in Chapter 2. By integrating the density, since
the copula is absolutely continuous, the following, equivalent expression for the copula can
Market Comovements and Copula Families                                                                    113




                                       1




                                   0.5




                                       0




                                   Figure 3.5 The Gaussian copula, ρ = 0.5

       1                                                       1




     0.5                                                     0.5




       0                                                       0
           0                      0.5                    1         0            0.5                   1

Figure 3.6          Random samples of (v, z) couples from a Gaussian copula, ρ = 0.5 (right) and ρ = −0.5
(left)

be obtained:
                              v z                                                      
                                              1           2rXY xy − x 2 − y 2   x2 + y2
       C (v, z) =
               Ga
                                                     exp                     +               ds dt
                              0    0        1 − ρXY
                                                 2           2 1 − ρXY
                                                                     2             2

where x = −1 (s), y = −1 (t).
  As for the conditional distribution via copula, from expression (3.21) one obtains:
                                                             
                                                         −1 (z) − ρ    −1
                                                                 XY  (v) 
                                  C2|1
                                   Ga
                                       (v, z) =                          
                                                                 1 − ρXY
                                                                      2


  The reason why we start by analyzing this copula is that it may generate the Gaussian
bivariate joint distribution function. Speciﬁcally, we have the following:

Proposition 3.1 The Gaussian copula generates the joint normal standard distribution func-
tion – via Sklar’s theorem – iff the margins are standard normal.
114                                                                    Copula Methods in Finance

  Proof : Consider that

                               x  y                                             
                                                1            2rXY st − s 2 − t 2
       C (F1 (x), F2 (y)) =
         Ga
                                                        exp                           ds dt
                                −∞ −∞ 2π      1 − ρXY
                                                   2           2 1 − ρXY2




iff −1 (F1 (x)) = x and −1 (F2 (y)) = y, that is to say, iff F1 = F2 = .                    

   For any other marginal choice, the Gaussian copula does not give a standard jointly normal
vector. In order to have a visual representation of the phenomenon, and more generally of
the effect of “coupling” the same copula with different marginals, let us consider the joint
density functions in the following ﬁgures, obtained coupling the Gaussian copula with
standard Gaussian margins (above) and with three Student’s t d.o.f. (below); let us consider
both the case ρ = 0.2 (in Figure 3.7) and ρ = 0.9 (in Figure 3.8).




               0.15


                0.1

               0.05




                0.1


               0.05




Figure 3.7 Density and level curves of the distribution obtained coupling the Gaussian copula with
standard normal marginals (top) and 3-d.o.f. Student ones (bottom), ρ = 0.2
Market Comovements and Copula Families                                                        115




                0.2



                0.1




               0.15

                0.1

               0.05




Figure 3.8 Density and level curves of the distribution obtained coupling the Gaussian copula with
standard normal marginals (top) and 3-d.o.f. Student ones (bottom), ρ = 0.9

   As expected, both in the positive and in the negative correlation cases, the same copula,
together with different marginals, presents a different joint behavior, here synthesized by
the density. In the speciﬁc case, the effect of marginal Student distributions is that of
increasing the tail probabilities. In general, Figures 3.7 and 3.8 provide examples of the
modeling ﬂexibility obtained using copula functions instead of joint distribution functions:
analogous effects could also be obtained by substituting different types of marginals in the
other copulas. We will omit the corresponding diagrams in the next sections, but we strongly
invite the readers to perform the substitutions and obtain the corresponding graphs.
   As a consequence of the fact that it is parametrized by the linear correlation coefﬁcient,
which respects concordance order, the Gaussian copula is positively ordered with respect
to the parameter:

                           Cρ=−1
                            Ga
                                 ≺ Cρ<0
                                    Ga
                                        ≺ Cρ=0
                                           Ga
                                               ≺ Cρ>0
                                                  Ga
                                                      ≺ Cρ=1
                                                         Ga


Also, it is comprehensive: one in fact can verify that

                              Cρ=−1
                               Ga
                                    = C−       and Cρ=1
                                                    Ga
                                                        = C+
116                                                                                Copula Methods in Finance

              Ga = C ⊥ . As for the measures of dependence, one can show, using the
In addition, Cρ=0
deﬁnition of Kendall’s τ and Spearman’s ρS , that

                                       2                             6        ρ
                                τ=       arcsin ρ        and ρS =      arcsin
                                       π                             π        2
  As for other types of dependence, it can be shown that Gaussian copulas have neither
upper nor lower tail dependence, unless ρ = 1:
                                          
                                            0 iff ρ < 1
                             λU = λL =
                                            1 iff ρ = 1

They present PQD if ρ ⩾ 0.

3.2.2 The bivariate Student’s t copula
Let tυ : → be the (central) univariate Student’s t distribution function, with υ degrees
of freedom (d.o.f.)6 :
                                        x                 − υ+1
                                        ((υ + 1)/2))     s2     2
                           tυ (x) =    √              1+           ds
                                    −∞   π υ (υ/2)       υ

where    is the usual Euler function. Let ρ ∈ I and tρ,υ the bivariate distribution corre-
sponding to tυ :

                               x  y                                               − υ+2
                                                     1          s 2 + t 2 − 2ρst           2
             tρ,υ (x, y) =                                  1+                                ds dt
                                −∞     −∞ 2π 1 − ρ 2               υ 1 − ρ2

Deﬁnition 3.8 The bivariate Student’s copula, Tρ,υ , is deﬁned as

          Tρ,υ (v, z) = tρ,υ tυ−1 (v), tυ−1 (z)

                            tυ−1 (v)  tυ−1 (z)                                        − υ+2
                                                         1          s 2 + t 2 − 2ρst           2
                       =                                        1+                                ds dt
                            −∞         −∞          2π 1 − ρ 2          υ 1 − ρ2

When the number of degrees of freedom diverges, the copula converges to the Gaussian one.
For a limited number of degrees of freedom, however, the behavior of the two copulas is
quite different, as the readers can appreciate comparing Figure 3.9, which presents random
extractions from a 3-d.o.f. Student’s copula, with the corresponding picture for the Gaussian
copula (Figure 3.6). It is easy to remark that the Student copula presents more observations
in the tails than the Gaussian one. Please notice also that this effect precedes the one
exempliﬁed by Figures 3.7 and 3.8, in which the different joint behavior was obtained – with
the same copula – by changing the marginals. In concrete applications, both the copula and
the marginal choice will be allowed, in sequential order.

6 All odd moments of the distribution are zero due to symmetry; while the second moment exists if υ > 2 and it
is equal to υ/(υ − 2); the fourth moment exists if υ > 4 and its kurtosis is given by 3 (υ − 2) / (υ − 4).
Market Comovements and Copula Families                                                                117

        1                                                      1




      0.5                                                     0.5




        0                                                      0
            0                   0.5                       1         0             0.5             1

Figure 3.9 Random samples of (v, z) couples from a Student copula, ρ = 0.5 (right) and ρ = −0.5
(left), υ = 3



                  1

                0.75

                 0.5
                                                                                   200
                0.25

                   0                      1                                        100        1
                                                               1
                            1
                                                                                    0

            Figure 3.10 The Student copula (left) and its density (right), ρ = 0.5, υ = 3

  The Student’s copula density is:
                                                                                     −(υ+2)/2
                                                                    ς12 +ς22 −2ρς1 ς2
                                          υ+2             υ    1 + υ 1−ρ 2
                                      1    2              2              (      )
                 cυ,ρ
                  S
                      (v, z) = ρ − 2                                            −(υ+2)/2
                                               υ+1
                                                      2
                                                                 2           ς2
                                                2                       1 + υj
                                                                        j =1

where ς1 = tυ−1 (v), ς2 = tυ−1 (z), and the copula itself is absolutely continuous.
  Since, as recalled by Roncalli (2002), given a couple of r.v.s (X, Y ), jointly distributed
as a Student’s t, the conditional distribution of
                                      
                                         υ + 1 Y − ρx
                                                
                                        υ + x2 1 − ρ2

given X = x, is a Student’s t with υ + 1 degrees of freedom, the conditional distribution
via copula C2|1υ,ρ
            S      (v, z) is
                                                                                        
                                                          υ+1      tυ−1 (z) − ρtυ−1 (v)
                       C2|1υ,ρ
                        S
                               (v, z) = tυ+1                             
                                                     υ + tυ−1 (v)2         1 − ρ2
118                                                                        Copula Methods in Finance

It follows that an equivalent expression for the bivariate Student’s copula is
                               v                                     
                                             υ + 1 tυ−1 (z) − ρtυ−1 (s)
                Tρ,υ (v, z) =     tυ+1                                    ds
                               0          υ + tυ−1 (s)2      1 − ρ2

If υ > 2, each margin admits a (ﬁnite) variance, υ/(υ − 2), and ρXY can be interpreted as a
linear correlation coefﬁcient. The Student’s copula is positively ordered w.r.t. ρ, for given
degrees of freedom. It also reaches the lower and upper bound, since
                                          S
                                         Cυ,−1 = C−           S
                                                         and Cυ,1 = C+

               S = C ⊥ for ﬁnite υ.
Nonetheless, Cυ,0
  As for tail dependency, for ﬁnite υ
                                                     
                                                         >0   iff ρ > −1
                                         λU = λL =
                                                          0   iff ρ = 1

3.2.3 The Fréchet family
Deﬁnition 3.9 Fréchet (1958) introduced the following two-parameter copula family
(Figure 3.11):

                  C F (v, z) = p max(v + z − 1, 0) + (1 − p − q)vz + q min(v, z)
                                 = pC − + (1 − p − q)C ⊥ + qC +

where p, q ∈ I, p + q ⩽ 1.

  The Fréchet copula density is

                                              C F (v, z) = 1 − p − q

It follows that this copula has an absolutely continuous and a singular component, if at least
one between p and q is positive.




            1

           0.8

           0.6

           0.4

           0.2
                                   0.8    1
            0.0
            0.00.4
                   0.6   0.8 1




                 Figure 3.11 The Fréchet copula and its level curves, p = 0.2, q = 0.5
Market Comovements and Copula Families                                                          119

  As for the conditional probability via copula, one can easily verify that
                        
                        
                         p + (1 − p − q)z + q        v + z − 1 > 0, v < z
                        
                          p + (1 − p − q)z            v + z − 1 > 0, v > z
          C2|1 (v, z) =
            F
                        
                         (1 − p − q)z                v + z − 1 < 0, v > z
                        
                          (1 − p − q)z + q            v + z − 1 < 0, v < z

The Fréchet class is positively ordered with respect to q and negatively ordered with respect
to p.
   The class is comprehensive, since for p = 1, q = 0 it gives the Fréchet lower bound
C − , for p = 0, q = 1 it gives the upper, C + , for p = q = 0 it collapses into the product
copula C ⊥ .
   The relationship between the parameters of the Fréchet class and the concordance mea-
sures introduced above is (Nelsen, 1991):

                                        (q − p) (2 + p + q)
                                      τ=
                                                 3
                                   ρS = q − p

which implies
                                        √
                              ρS ⩽ −1 + 1 + 3τ
                           τ ⩽√                            when τ ⩾ 0
                           1 − 1 − 3τ ⩽ ρS ⩽ τ             when τ < 0

These bounds are stricter than those holding in general between τ and ρS .
  In Figure 3.12 we depict the relationship between τ and ρS for the Fréchet family, together
with the general one, already presented in Figure 3.1.
  The Fréchet family reduces to the so-called mixture copula (Li, 2000), when either p or
q are set to zero. In the former case, introduced by Konijn (1959), and presented as family
B11 in Joe (1997)

                  CqM (v, z) = (1 − q)vz + q min(v, z) = (1 − q)C ⊥ + qC +


                                  1




                                  0




                                 −1
                                   −1                0                  1
                                                     t

Figure 3.12 Spearman’s ρS , as a function of Kendall’s τ , for a given copula (external lines) and a
given Spearman’s copula (internal lines)
120                                                                            Copula Methods in Finance

while in the second

              CpM (v, z) = (1 − p)vz + p max(v + z − 1, 0) = (1 − p)C ⊥ + pC −

Opposite to C F , CqM and CpM are not comprehensive. Nonetheless, the former includes the
product and upper bound copula, respectively when q = 0 and q = 1. The latter includes
the product and lower bound copula, respectively when p = 0 and p = 1.
  As for the relationship between the parameters of the mixture copulas and the concordance
measures, it is sufﬁcient to substitute for p = 0 or q = 0 in the previous relationship: for
positive dependence (p = 0) we have

                                            q (2 + q)
                                      τ=                   and ρS = q
                                                3
and therefore
                                      2 + ρS                       √
                             τ = ρS               and ρS = −1 +         1 + 3τ
                                         3
For negative dependence instead (q = 0)

                                           p (2 + p)
                                   τ =−                    and ρS = −p
                                               3
so that
                                        2 − ρS                    √
                              τ = ρS               and ρS = 1 −       1 − 3τ
                                           3
The relationship between τ and ρS , which is “narrowed” in the Fréchet family, reduces to
a single value in the mixture family. In addition, the mixture copula reaches both the upper
bound for ρS in the Fréchet copula in the positive case, and the lower bound in the negative
case.
   As for tail dependency, it is easy to show that for positive dependence7

                                                 λU = λL = q

so that the mixture copula presents tail dependence when q > 0. Symmetrically, it can be
shown that for negative dependence

                                                 λU = λL = 0

so that the mixture copula presents no tail dependence in the presence of negative depen-
dence.

3.2.4 Archimedean copulas
The class of Archimedean copulas has been named by Ling (1965), but it was recognized
by Schweizer and Sklar (1961) in the study of t-norms. Before being introduced in Finance,

7 See Example 3.8, where the notation was slightly different.
Market Comovements and Copula Families                                                    121

Archimedean copulas have been applied in the Actuarial ﬁeld: the idea arose indirectly in
Clayton (1978) and was developed in Oakes (1982), Cook and Johnson (1981). A survey
of Actuarial applications is in Frees and Valdez (1998).
   We divide the discussion of Archimedean copulas in three subsections: the ﬁrst introduces
them and their main properties, the second discusses dependence, the third presents different
one-parameter families of Archimedean copulas. In the case of Archimedean copulas in fact,
it is customary to use the term “class” for all of them, and to reserve “families” for some
particular subclasses.

Deﬁnition and basic properties
Archimedean copulas may be constructed using a function φ : I → ∗+ , continuous, de-
creasing, convex and such that φ(1) = 0. Such a function φ is called a generator. It is called
a strict generator whenever φ(0) = +∞. The behavior of the φ function is exempliﬁed in
Figure 3.13.
   The pseudo-inverse of φ must also be deﬁned, as follows:
                                             
                                                 φ −1 (v) 0 ⩽ v ⩽ φ(0)
                         φ   [−1]
                                     (v) =
                                                    0     φ(0) ⩽ v ⩽ +∞

This pseudo-inverse is such that, by composition with the generator, it gives the identity,
as ordinary inverses do for functions with domain and range :

                                 φ [−1] (φ (v)) = v     for every v ∈ I

In addition, it coincides with the usual inverse if φ is a strict generator.

Deﬁnition 3.10 Given a generator and its pseudo-inverse, an Archimedean copula C A is
generated as follows:

                                     C A (v, z) = φ [−1] (φ(v) + φ(z))                 (3.22)

If the generator is strict, the copula is said to be a strict Archimedean copula.

Let us recall the deﬁnition of Laplace transform:

                          15


                          10


                             5




                                 0           0.5       1       1.5        2

                     Figure 3.13 Generator of the Gumbel copula, α = 1.5
122                                                                               Copula Methods in Finance

Deﬁnition 3.11 The Laplace transform of a positive random variable γ , with distribution
function Fγ , is deﬁned as:
                                             +∞
                          τ (s) = Eγ e−sγ =       e−st dFγ (t)                    (3.23)
                                                            0

  It is easy to show that the inverse of Laplace transforms gives strict generators: in order to
generate Archimedean copulas then it is sufﬁcient to start from the class of such transforms.
  Archimedean copulas are easily veriﬁed to be symmetric, in the sense that

                             C A (v, z) = C A (z, v) for every (v, z) ∈ I 2

They are also associative8 , i.e.

                  C A (C A (v, z), u) = C A (v, C A (z, u)) for every (v, z, u) ∈ I 3

since both sides of the previous equality reduce to φ [−1] (φ(v) + φ(z) + φ(u)) .
   In addition, their level curves can be easily identiﬁed, since the condition

                                       {(v, z) ∈ I 2 : C(v, z) = K}

in the Archimedean case becomes

                                  {(v, z) ∈ I 2 : φ(v) + φ(z) = φ(K)}

Therefore, for K > 0 the level curves consist of the couples

                 {(v, z) ∈ I 2 : z = φ [−1] (φ(K) − φ(v)) = φ −1 (φ(K) − φ(v))}

where we substituted the ordinary inverse for the pseudo one since φ(K) − φ(v) ∈ [0, φ(0)).
  For K = 0, the level curve can actually be a whole region in I 2 , consisting of the so-called
zero curve itself

                  {(v, z) ∈ I 2 : z = φ [−1] (φ(0) − φ(v)) = φ −1 (φ(0) − φ(v))}

and the so-called zero set of C, which is the region of I 2 between the axes of the Cartesian
plane and the zero curve.

The following theorem is proved in Nelsen (1999):

Theorem 3.11 The level curves of an Archimedean copula (the zero curve included) are
convex.

The density of Archimedean copulas is
                                                 −φ (C(v, z))φ (v)φ (z)
                                  C A (v, z) =                                                            (3.24)
                                                       (φ (C(v, z)))3

8 This justiﬁes the relationship with t-norms: bi-dimensional copulas in fact are t-norms iff they are associative
(see Schweizer, 1991). A further discussion of associative functions, copulas and t-norms is in Schweizer and
Sklar (1983).
Market Comovements and Copula Families                                                 123

Dependency
Archimedean copulas are easily related to measures of association.
  Genest and MacKay (1986) demonstrated that Kendall’s τ is given by
                                        
                                            φ(v)
                                 τ =4             dv + 1                             (3.25)
                                          I φ (v)

where φ (v) exists a.e., since the generator is convex. This makes Archimedean copulas
easily amenable to estimation, as we will see in Chapter 5. Furthermore, conditions on the
generators of two Archimedean copulas φ1 and φ2 can be given, which guarantee that the
corresponding copulas are ordered in the same way as their association parameters (Genest
& MacKay, 1986). If one denotes by Ci the copula corresponding to φi , i = 1, 2, then

                                   C1 ≺ C2 ↔ τC1 ⩽ τC2                               (3.26)

or, equivalently,

                                C1 ≺ C2 ↔ ρSC1 ⩽ ρSC2                                (3.27)

Otherwise stated, the order between copulas is “measured” by either the Kendall or the
Spearman association parameter. This is another “nice” feature of Archimedean copulas. As
for tail dependency, the following result is demonstrated in Joe (1997):

Theorem 3.12 Let ϕ be a strict generator such that ϕ −1 belongs to the class of Laplace
transforms of a.s. strictly positive r.v.s. If ϕ (0) is ﬁnite and different from zero, then

                               C(v, z) = ϕ −1 (φ(v) + φ(z))

does not have upper tail dependency. If instead C has upper tail dependency, then 1/ϕ (0) =
−∞ and the coefﬁcient of upper tail dependency is

                                                  ϕ (s)
                                 λU = 2 − 2 lim
                                             s→0+ ϕ (2s)

The coefﬁcient of lower tail dependency is

                                                  ϕ (s)
                                   λL = 2 lim
                                           s→+∞ ϕ (2s)

   As for PQD, the relationship between this notion of dependency and Archimedean copulas
relies on the following notion:

Deﬁnition 3.12 A function h(t) : → is said to be completely monotone on the interval
J if it belongs to C ∞ and if in the interior of J derivatives alternate in sign:

                                   dn h(t)
                           (−1)n           ⩾ 0,   n = 0, 1, 2, ...
                                    dt n
  Notice that in particular such a function is non-negative (h ⩾ 0) and non-increasing
(h ⩽ 0). Given the notion of complete monotonocity, we have the following:
124                                                                     Copula Methods in Finance

Theorem 3.13 If the inverse of a strict generator is completely monotone, then the corre-
sponding copula entails PQD:

                                    ϕ −1 (φ(v) + φ(z)) ⩾ vz

One-parameter Archimedean copulas
Among Archimedean copulas, we are going to consider in particular the one-parameter
ones, which are constructed using a generator ϕα (t), indexed by the (real) parameter α. By
choosing the generator, one obtains a subclass or family of Archimedean copulas. Table 3.4
describes some well-known families and their generators (for a more exhaustive list see
Nelsen, 1999).
   The Gumbel family has been introduced by Gumbel (1960). Since it has been discussed
in Hougaard (1986), it is also known as the Gumbel–Hougaard family. Another important
reference is Hutchinson and Lai (1990). It gives the product copula if α = 1 and the upper
Fréchet bound min(v, z) for α → +∞. Figure 3.14 presents its behavior and some of its
level curves in correspondence to α = 1.5.
   The Clayton family was ﬁrst proposed by Clayton (1978), and studied by Oakes (1982,
1986), Cox and Oakes (1984), Cook and Johnson (1981, 1986). It is comprehensive and
gives the product copula if α = 0, the lower Fréchet bound max(v + z − 1, 0) when α = −1,
and the upper one for α → +∞. Figure 3.15 presents its behavior and some of its level
curves in correspondence to α = 6.
   To end up with, the Frank family, which appeared in Frank (1979), is discussed at length
in Genest (1987). It reduces to the product copula if α = 0, and reaches the lower and upper
Fréchet bounds for α → −∞ and α → +∞, respectively. It is the only family for which
both C and C / are associative. Figure 3.16 presents its behavior and some of its level curves
in correspondence to α = 0.5.
   The densities of the previous copulas, obtained via (3.24), are represented in Figure 3.17.
   As for the relationship between the parameters of Archimedean copulas and measures of
concordance, using formula (3.25) we get the results collected in Table 3.5 (see, e.g. Frees
& Valdez, 1998).

                               Table 3.4 Some Archimedean copulas

                   Gumbel (1960)
                     φα (t)             (− ln t)α
                     range for α        [1, +∞)
                     C(v, z)            exp{−[(− ln v)α + (− ln z)α ]1/α }
                   Clayton (1978)
                     φα (t)              1 −α − 1)
                                         α (t
                     range for α        [−1, 0) ∪ (0, +∞)
                     C(v, z)            max[(v −α + z−α − 1)−1/α , 0]
                   Frank (1979)
                                            exp(−αt)−1
                     φα (t)             −ln exp(−α)−1
                     range for α        (−∞, 0) ∪ (0, +∞)
                                                      (exp(−αv)−1)(exp(−αz)−1)
                     C(v, z)            − α1 ln 1 +          exp(−α)−1
Market Comovements and Copula Families                                           125




             1

          0.75

           0.5

          0.25

            0.0
              0
                  0.5        1



                  Figure 3.14 The Gumbel copula and its level curves, α = 1.5




            1

           0.8

           0.6

           0.4

           0.2

            0.0
            0.00.2
                 0.40.6
                          0.8 1




                    Figure 3.15 The Clayton copula and its level curves, α = 6




             1


          0.75


            0.5


          0.25


            0.0
            0.0
               0.33
                   0.67 1




                     Figure 3.16 The Frank copula and its level curves, α = 12
126                                                                                        Copula Methods in Finance




      100                                             40
                                                                                      10
                                                      30
        50                                            20                               5
      1                                               10                             1
      0.5                                    1                                       0.5
            0            0.5         1           0.5 0            0.5        1             0        0.5      1


Figure 3.17 Densities of the Gumbel (α = 2, left), the Clayton (α = 6, center) and the Frank
(α = 14.14, right) copulas. All the parameters correspond to a Kendall’s τ = 0.75


                         Table 3.5       Association measures for some Archimedean copulas

                Family                        Kendall’s τ                        Spearman’s ρS

                Gumbel (1960)             1 − α −1                      no closed form
                Clayton (1978)            α/(α + 2)       !             complicated expression  !
                Frank (1979)              1 + 4 D1 (α) − 1 /α           1 − 12 D2 (−α) − D1 (−α) /α



  In Table 3.5 the concordance measures of the Frank copula require the computation of
the so-called “Debye” functions, deﬁned as
                                                       α
                                                 k              tk
                                 Dk (α) =                              dt,       k = 1, 2
                                                 αk    0    exp(t) − 1

For these functions, it follows from basic calculus that

                                                                         kα
                                             Dk (−α) = Dk (α) +
                                                                        k+1

Table 3.5 allows us to remark that, with the exception of Spearman’s ρS for the Gumbel
case, the computation of the copula parameter from the association one is elementary and
the relationship between the two is one-to-one.

An application: An Archimedean copula for international stock indices
Using the time series presented on page 105, whose size is reported in Figure 3.18, we
estimated both Kendall’s τ and Spearman’s ρS , according to the methodology explained
in the corresponding sections. The relationships between the copula parameter and the
association measures in Table 3.5 then permitted us to compute the α value assuming a
Gumbel, Clayton and Frank copula.
   Once endowed with the parameter value, we are able to compute any joint probability
between the stock indices: if for instance we consider the DAX–FTSE case and the Frank
copula, we obtain the joint distribution and level curves shown in Figure 3.19.
Market Comovements and Copula Families                                                                     127




Figure 3.18 Estimated Kendall’s τ , Spearman’s ρS and α for MIB 30, S&P 500, FTSE, DAX,
1/2/99–3/27/00


                                                  0.1   0.2   0.3 0.4 0.5 0.6 0.7 0.8 0.9

             0.8

             0.6

             0.4                                                                              0.8
                                                                                      0.7
                                                  0.1   0.2     0.3 0.4 0.5 0.6
             0.2
                                                                                               0.5
                                                                                        0.4
                                                                                0.3                  0.3
                                                                       0.2
                                                                                              0.2
                                                          0.1

                                                                               0.1




                   Figure 3.19 Joint distribution and level curves, DAX–FTSE

   When, in particular, the relationship is monotonic, the family can be ordered not only
according to the dependence parameter, as in (3.26) or (3.27) above, but also according
to the α parameter: if the relationship is increasing, as in the Gumbel, Clayton and Frank
cases, the following rule applies:

                                    C 1 ≺ C 2 ↔ α1 ⩽ α2

where αi is the parameter corresponding to the copula Ci .
  It follows that the Gumbel family can represent independence and “positive” dependence
only, since the lower and upper bound for its parameter correspond to the product copula
and the upper Fréchet bound. On the other hand, the Frank and Clayton family both cover
the whole range of dependence.
  As for tail dependency, applying Theorem 3.12 one can show that the Gumbel family
has upper tail dependency, with

                                        λU = 2 − 21/α

The Clayton family has lower tail dependency for α > 0, since

                                         λL = 2−1/α

The Frank family has neither lower nor upper tail dependency.
  The remarks on Table 3.5, together with the fact that the Frank and Clayton are com-
prehensive, so that they allow the maximum range of dependence, explain the relative
popularity of the one-parameter families in the applied literature on copulas.
128                                                                               Copula Methods in Finance




              1

            0.8
                                                                                         2
            0.6

             0.4
                                                                                         1.5
             0.2

             0.0                                                                                 1
             0.00.2                                                                      1
                  0.40.6
                        0.8 1
                                                                1                            0



      Figure 3.20 The Marshall–Olkin copula (left) and its density (right), m = 0.2, n = 0.3

3.2.5 The Marshall–Olkin copula
Deﬁnition 3.13 The Marshall–Olkin family (Marshall & Olkin, 1967a, b) is characterized
by two parameters, m and n, belonging to I. It is deﬁned as follows:
                                                    1−m
                                                      v    z, v m ⩾ zn
              C (v, z) = min(v
                MO                1−m
                                      z, vz ) =
                                           1−n
                                                                                (3.28)
                                                      vz , v m < zn
                                                        1−n


  The copula density is
                                                    
                                                        (1 − m) v −m , v m > zn
                                C   MO
                                         (v, z) =
                                                        (1 − n)z−n ,   v m < zn

and the copula itself has both an absolutely continuous and a singular component, whose
mass is along the line v m = zn , in I 2 . Both the copula and its density are represented in
Figure 3.20.
  As for the conditional probability via copula, one can easily verify that
                                       
                                           (1 − m) v −m z, v m > zn
                        C2|1
                          MO
                             (v, z) =
                                           z1−n ,          v m < zn

The family is positively ordered w.r.t. each parameter. It can be noticed that when either
m or n is set to zero, the product copula is obtained; when both parameters are equal to
1, the Marshall–Olkin copula gives the upper Fréchet bound. Therefore, this copula is not
comprehensive.
   As for its relationship with measures of concordance, we have (Nelsen, 1999):

                                       mn                                3mn
                           τ=                            and ρS =
                                    m − mn + n                       2m + 2n − mn
This class of copulas presents upper tail dependency, with coefﬁcient

                                                    λU = min(m, n)
                                       4
                             Multivariate Copulas

This chapter extends the results of Chapter 2 to the multidimensional case. For the sake of
simplicity, we will omit the proofs, when the corresponding ones have been given in the
previous chapter.

                4.1 DEFINITION AND BASIC PROPERTIES
In the n-dimensional case, n > 2, the notions of groundedness and the n-increasing property
are straightforward extensions of the deﬁnitions for the 2-dimensional case.

  Let us recall that we denote vectors with bold letters: u = (u1 , u2 , . . . , un ).

Deﬁnition 4.1 Let the function G : ∗n →  have a domain Dom G = A1 × A2 × · · · ×
An , where the non-empty sets Ai have a least element ai . The function G is said to be
grounded iff it is null for every v ∈ Dom G, with at least one index k such that vk = ak :

                      G (v) = G(v1 , v2 , . . . , vk−1 , ak , vk+1 , . . . , vn ) = 0

  Let also the n-box A be deﬁned as

                         A = [u11 , u12 ] × [u21 , u22 ] × · · · × [un1 , un2 ]

with ui1 ⩽ ui2 , i = 1, 2, . . . , n. An n-box is then the Cartesian product of n closed intervals.
  Let us denote with w any vertex of A and with ver(A) the set of all vertices of A:
w ∈ ver(A) iff its ith component wi , i = 1, 2, . . . , n, is either equal to ui1 or to ui2 . Consider
the product
                                      n
                                      
                                            sgn(2wi − ui1 − ui2 )
                                      i=1

Since each factor in the product is −1 if wi = ui1 < ui2 , is equal to zero if wi = ui1 = ui2 ,
and is +1 if wi = ui2 > ui1 ,
                             
n                            −1 if ui1 = ui2 , ∀i,  {i : wi = ui2 } = 2m + 1
    sgn(2wi − ui1 − ui2 ) =       0 if ∃ i : ui1 = ui2                                m∈N
                             
i=1                             +1 if ui1 = ui2 , ∀i,  {i : wi = ui1 } = 2m


If ver(A) ⊂ Dom G, deﬁne the G-volume of A as the sum
                                              n
                                               
                                        G(w)         sgn(2wi − ui1 − ui2 )                      (4.1)
                             w∈ver(A)          i=1
130                                                                                              Copula Methods in Finance

As in the bi-dimensional case, the sum (4.1) measures the mass or volume, according to the
function G, of the n-box A.
  We are now ready to deﬁne an n-increasing function:

Deﬁnition 4.2 The function G : A1 × A2 × · · · × An →  is said to be n-increasing if
the G-volume of A is non-negative for every n-box A for which ver(A) ⊂ Dom G:

                                                     n
                                                      
                                             G(w)           sgn(2wi − ui1 − ui2 ) ⩾ 0
                                 w∈ver(A)             i=1

Grounded, n-increasing functions are non-decreasing with respect to all entries:

Theorem 4.1 A function G : A1 × A2 × · · · × An →  grounded and n-increasing is non-
decreasing in each argument.

  Proof : We are going to demonstrate that, if (u1 , u2 , . . . , ui−1 , x, ui+1 , . . . , un ) ∈
Dom G, (u1 , u2 , . . . , ui−1 , y, ui+1 , . . . , un ) ∈ Dom G and x ⩽ y, then

      G(u1 , u2 , . . . , ui−1 , x, ui+1 , . . . , un ) ⩽ G(u1 , u2 , . . . , ui−1 , y, ui+1 , . . . , un )                 (4.2)

Consider the n-box
                                                                    
   A = [a1 , u1 ] × [a2 , u2 ] × · · · × ai−1 , ui−1 × x, y × ai+1 , ui+1 × · · · × [an , un ]


Since G is grounded, the G-volume of A is

      G(u1 , u2 , . . . , ui−1 , y, ui+1 , . . . , un ) − G(u1 , u2 , . . . , ui−1 , x, ui+1 , . . . , un )

Since it is n-increasing, the volume is non-negative, i.e. (4.2) holds.                                                       

In order to characterize the copula, we use the notion of margins:

Deﬁnition 4.3 The k-dimensional margins of the function G : A1 × A2 × · · · × An → ,
for 1 ⩽ k ⩽ n, k ∈ N , if each Ai is non-empty, are the functions Ci1 i2 ...ik (ui1 , ui2 , . . . , uik ) :
Ai1 × Ai2 × · · · × Aik →  deﬁned by

            Gi1 i2 ...ik (ui1 , ui2 , . . . , uik ) = G(a 1 , a 2 , . . . , ui1 , . . . , ui2 , . . . , uik . . . , a n )   (4.3)

where i1 i2 . . . ik is any selection of k indices (also non-consecutive) among the original n
indices. In particular, we have:

Deﬁnition 4.4 The ith one-dimensional margin of the function G : A1 × A2 × · · · × An →
, if each Ai is non-empty and we denote with a i its maximal element, is the function
Gi (u) : Ai →  deﬁned by

                               Gi (u) = G(a 1 , a 2 , . . . , a i−1 , u, a i+1 , . . . , a n )
Multivariate Copulas                                                                           131

A grounded, n-increasing function with one-dimensional margins satisﬁes the following
lemmas, which are used in the proof of the multidimensional version of Sklar’s theorem:

Lemma 4.1 A function G : A1 × A2 × · · · × An →  grounded, n-increasing, with one-
dimensional margins, is such that
                     
              G uy − G ux ⩽ Gi (y) − Gi (x) for every 1 ⩽ i ⩽ n,                         x<y

and

                         uy = (u1 , u2 , . . . , ui−1 , y, ui+1 , . . . , un ) ∈ Dom G
                         ux = (u1 , u2 , . . . , ui−1 , x, ui+1 , . . . , un ) ∈ Dom G

Lemma 4.2        For the function G of the previous lemma,
                                                        n
                                                        
                               |G(u) − G(u̇)| ⩽               |Gi (ui ) − Gi (u̇i )|
                                                        i=1

for every u = (u1 , u2 , . . . , un ) , u̇ = (u̇1 , u̇2 , . . . , u̇n ) ∈ Dom G.

  Given this terminology, the deﬁnition of n-dimensional subcopula and n-dimensional
copula (from now on subcopula and copula respectively) is:

Deﬁnition 4.5 An n-dimensional subcopula is a function C : A1 × A2 × · · · × An → ,
where, for each i, Ai ⊂ I and contains at least 0 and 1, such that

  (i) C is grounded
 (ii) its one-dimensional margins are the identity function on I : Ci (u) = u, i = 1, 2, . . . , n
(iii) C is n-increasing

An n-dimensional subcopula for which Ai = I for every i is a copula C.

It follows from this deﬁnition that

Theorem 4.2 For n > 2, 1 < k < n, the k-dimensional margins of C are k-dimensional
copulas.

   Proof :    We demonstrate that, when Ai = I for every i, the function

                                  Ci1 i2 ... ik (ui1 , ui2 , . . . , uik ) : I k → 

deﬁned according to (4.3) is

  (i) grounded
 (ii) such that Ci (u) = u, i = i1 , i2 , . . . , ik
(iii) k-increasing
132                                                                                          Copula Methods in Finance

   As for (i), groundedness, with at least one index ij such that uij = aij , we have

 Ci1 i2 ...ik (ui1 , ui2 , . . . , uik ) = C(a 1 , a 2 , . . . , ui1 , . . . , uij −1 , aij , uij +1 , . . . , uik , a n ) = 0
                           
since the vector a 1 , a 2 , . . . , ui1 , . . . , uij −1 , aij , uij +1 , . . . , uik , a n has the feature of v in
Deﬁnition 4.1.
   As for (ii), it comes from the fact that one-dimensional margins for C are also one-
dimensional margins for its k-dimensional margins.
   Property (iii), k-increasingness is a consequence of the fact that the Ci1 i2 ... ik -volume of
each k-box
                                                                                                
                                      ui1 1 , u i1 2 × ui2 1 , u i2 2 × · · · × u ik 1 , u ik 2

is the C-column of the n-box
                                                                            
     [a 1 , a 1 ] × · · · × ui1 1 , ui1 2 × ui2 1 , ui2 2 × · · · × uik 1 , uik 2 × · · · × [a n , a n ]

which is non-negative because of n-increasingness.                                                                         

Example 4.1 It is easy to verify that the function

                                           C(u) = min(u1 , u2 , . . . , un )

is an n-dimensional copula:

  (i) min (u1 , u2 , . . . , ui−1 , 0, ui+1 , . . . , un ) = 0, i = 1, 2, . . . , n
 (ii) min (1, 1, . . . , ui , . . . , 1) = ui , i = 1, 2, . . . , n
                                             n
(iii)         min(w1 , w2 , . . . , wn )          sgn(2wi − ui1 − ui2 ) ⩾ 0
      w∈ver(A)                                  i=1

With the same technique we can verify that its margins are copulas, since for every k

                            Ci1 i2 ... ik (ui1 , ui2 , . . . , uik ) = min(ui1 , ui2 , . . . , uik )

As in the bi-dimensional case, from the characterization of C it follows that

• it is non-decreasing in each argument (Theorem 4.1)
• Ran C = I (by (i)), C(v) = 0 if there exists an index i such that ui = 0; by (ii), if we
  denote by ei the vector that has all entries equal to zero, apart from the ith, which is equal
  to 1, C(v + ei ) = 1. The two features, together with the fact that C is non-decreasing in
  each component, give the assertion about Ran C
• it is uniformly continuous (as a straightforward consequence of Lemma 4.2 above):
                                                                     n
                                                                     
                                           |C(u) − C(u̇)| ⩽                |ui − u̇i |
                                                                     i=1

   for every u, u̇ ∈ I n
• it has mixed kth-order partial derivatives a.s., 1⩽ k ⩽ n, and
                                                          ∂ k C(u)
                                               0⩽                       ⩽1
                                                      ∂u1 ∂u2 . . . ∂uk
Multivariate Copulas                                                                                           133

Example 4.2 For the copula in the previous example

• x ⩽ y implies min(u1 , u2 , . . . , ui−1 , x, ui+1 , . . . , un ) ⩽ min(u1 , u2 , . . . , ui−1 , y, ui+1 ,
  . . . , un )
• 0 ⩽ min(u1 , u2 , . . . , un ) ⩽ 1:
                                                                                    n
                                                                                    
                   |min(u1 , u2 , . . . , un ) − min(u̇1 , u̇2 , . . . , u̇n )| ⩽         |ui − u̇i |
                                                                                    i=1

• the partial derivatives are
                            ∂C(u)            1 if ui = min(u1 , u2 , . . . , un )
                                  =
                             ∂ui             0 otherwise

  and
                                          ∂ k C(u)
                                                        = 0 for k ⩾ 2
                                      ∂u1 ∂u2 . . . ∂uk

        4.2 FRÉCHET BOUNDS AND CONCORDANCE ORDER:
                 THE MULTIDIMENSIONAL CASE
It is straightforward to demonstrate that

Theorem 4.3 Every copula satisﬁes the following inequality:

                max(u1 + u2 + · · · + un − 1, 0) ⩽ C(u) ⩽ min(u1 , u2 , . . . , un )

for every u ∈ I n .

   The upper bound still satisﬁes the deﬁnition of copula, and is denoted with C + (the
maximum copula). However, as ﬁrst noted by Féron (1956), the lower bound never satisﬁes
the deﬁnition of copula for n > 2. This can be seen from the following:
                                                                                               n
Example 4.3 (Schweizer & Sklar, 1983) Consider the n-cube                             2, 1
                                                                                      1
                                                                                                   and compute its
volume according to the lower copula bound:

  max (1 + 1 + · · · + 1 − n + 1, 0 − n) − n max( 12 + 1 + · · · + 1 − n + 1, 0)
                                           
                                         + n2 max( 12 + 12 + 1 + · · · + 1 − n + 1, 0) + . . .
                                                 + max( 12 + 12 + · · · + 12 − n + 1, 0)
                                                 = 1 − n/2 + 0 + · · · + 0

Since for n > 2 the volume is negative (n > 2 ⇔ 1 − n/2 < 0), the lower bound cannot be
a copula.

Nonetheless, the bound is the best possible: pointwise there always exists a copula that takes
its value. Therefore, the latter copula is parametrized using the point for which it coincides
with the Fréchet lower bound:
134                                                                             Copula Methods in Finance

Theorem 4.4 (Sklar, 1998) When n > 2, for every u ∈ I n there exists a copula Cu such
that

                                Cu (u) = max(u1 + u2 + · · · + un − 1, 0)

    Proof : See Nelsen (1999).                                                                            

The notion of order for n-dimensional copulas requires the introduction of the survival
function for n-dimensional vectors of uniform variates, which will be discussed further
in section 4.4:

Deﬁnition 4.6 The joint survival function for the vector (U1 , U2 , . . . , Un ) of (standard)
uniform r.v.s with copula C, denoted as C        /, represents, when evaluated at (u1 , u2 , . . . , un),
the joint probability that (U1 , U2 , . . . , Un ) be greater than u1 , u2 , . . . , un :

                      C
                      /(u1 , u2 , . . . , un) = Pr[U1 > u1 , U2 > u2 , . . . , Un > un ]
The following deﬁnition of concordance order between copulas can then be introduced:

Deﬁnition 4.7 The copula C1 is smaller than the copula C2 (written as C1 ≺ C2 ) iff

                                                 C1 (u) ⩽ C2 (u)
                                                 C
                                                 /1 (u) ⩽ C/2 (u)
for every u ∈ I n .

The order so deﬁned is only partial, as in the bi-dimensional case.1

Example 4.4 We want to determine whether every three-dimensional copula is smaller
than the maximum one, i.e. whether

                                                     C ≺ C+

for n = 3. Since Theorem 4.3 guarantees that, at any point in I 3 , C(u) ⩽ C + (u), we are
left with testing whether C/(u) ⩽ C/+ (u). We will show in Example 4.5 below that when
n = 3 the survival function is

                  /(u1, u2 , u3 ) = 1 − u1 − u2 − u3 + C12 (u1 , u2 ) + C13 (u1 , u3 )
                  C
                                        + C23 (u2 , u3 ) − C(u1 , u2 , u3 )
                               +
                /(u) ⩽ C/ (u) iff
It follows that C

    1 − u1 − u2 − u3 + C12 (u1 , u2 ) + C13 (u1 , u3 ) + C23 (u2 , u3 ) − C(u1 , u2 , u3 )
          ⩽ 1 − u1 − u2 − u3 + min(u1 , u2 ) + min(u1 , u3 ) + min(u2 , u3 ) − min(u1 , u2 , u3 )

1 In the bi-dimensional case, the deﬁnition was reduced to the ﬁrst inequality, since C (v, z) ⩽ C (v, z) iff
                                                                                       1          2
/           /                              /
C1 (v, z) ⩽ C2 (v, z) (due to the fact that C1 (v, z) = 1 − v − z + C(v, z)).
Multivariate Copulas                                                                               135

Since the two-dimensional margins are copulas, Cij (ui , uj ) ⩽ min(ui , uj ) for any choice
of indices; however, also

                                 C(u1 , u2 , u3 ) ⩽ min(u1 , u2 , u3 )

                                        +
and we cannot state that C
                         / (u) ⩽ C/ (u).
   4.3 SKLAR’S THEOREM AND THE BASIC PROBABILISTIC
      INTERPRETATION: THE MULTIDIMENSIONAL CASE
In order to introduce Sklar’s theorem, we take it for granted that the readers are familiar
with the notion of n-dimensional joint distribution functions (or n-dimensional distribu-
tion functions or joint distribution functions) for r.v.s, whose one-dimensional margins are
marginal distribution functions.
   The following generalization to the n-dimensional case of Sklar’s theorem guarantees
that not only every subcopula is a joint distribution function, if its arguments are marginal
distribution functions, but that the converse holds too. Every joint distribution function can
be represented as a (unique) subcopula, which in turn can be extended (not uniquely, in
general) to a copula. If the marginals are continuous, the extension is unique.

Theorem 4.5 Let F1 (x1 ), F2 (x2 ), . . . , Fn (xn ) be (given) marginal distribution functions.
Then, for every x = (x1 , x2 , . . . , xn ) ∈ ∗n :

 (i) If C is any subcopula whose domain contains Ran F1 × Ran F2 × · · · × Ran Fn ,

                                     C(F1 (x1 ), F2 (x2 ), . . . , Fn (xn ))

     is a joint distribution function with margins F1 (x1 ), F2 (x2 ), . . . , Fn (xn ).
(ii) Conversely, if F is a joint distribution function with margins

                                       F1 (x1 ), F2 (x2 ), . . . , Fn (xn )

     there exists a unique subcopula C, with domain Ran F1 × Ran F2 × · · · × Ran Fn ,
     such that

                                F (x) = C(F1 (x1 ), F2 (x2 ), . . . , Fn (xn ))                  (4.4)

If F1 (x1 ), F2 (x2 ), . . . , Fn (xn ) are continuous, the subcopula is a copula; if not, there exists
a copula C such that

                             C(u1 , u2 , . . . , un ) = C(u1 , u2 , . . . , un )

for every (u1 , u2 , . . . , un ) ∈ Ran F1 × Ran F2 × · · · × Ran Fn .

The proof of the theorem in the n-dimensional case without the extension lemma is in
Schweizer and Sklar (1983). The complete proof, i.e. with the extension lemma, was given
independently by Moore and Spruill (1975), Deheuvels (1978) and Sklar (1996).
136                                                                                Copula Methods in Finance

  The following corollary holds:

Corollary 4.1 Under the hypotheses of part (ii) of Sklar’s theorem, the (unique) subcopula
C: Ran F1 × Ran F2 × · · · × Ran Fn → I such that
                             F (x) = C(F1 (x1 ), F2 (x2 ), . . . , Fn (xn ))

for every x in ∗n is

                          C(u) = F (F1−1 (u1 ), F2−1 (u2 ), . . . , Fn−1 (un ))

   Otherwise stated, Corollary 4.1 states that the construction via Sklar’s theorem exhausts the
so-called Fréchet class, i.e. the class of joint distribution functions that have F1 , F2 , . . . , Fn
as margins.
   As in the bi-dimensional case, Sklar’s theorem guarantees that the cumulative joint prob-
ability can be written (via an eventually non-unique copula) as a function of the cumulative
marginal ones and vice versa
                             F (x) = C(F1 (x1 ), F2 (x2 ), . . . , Fn (xn ))

We say that the r.v.s in X have the copula C or that the latter is the copula of X. When
needed, we denote the copula of X = [X1 X2 . . . Xn ] also as CX or CX1 X2 ...Xn . Also in the
multidimensional case the possibility of writing the joint cumulative probability in terms
of the marginal ones, i.e. the basic probabilistic interpretation of copulas, and the fact
that multidimensional copulas are dependence functions, opens the way to a number of
ﬁnancial applications.

An application: Digital options with n underlyings

The copula application to bivariate option pricing in Chapter 2 can be extended to the
n-dimensional case, as follows. Consider an n-variate bearish digital option, written on
n underlyings, X1 , . . . , Xn , with strikes k1 , . . . , kn and expiration T . Under complete,
arbitrage-free markets its forward price is the risk-neutral probability
                          Pr(X1 ⩽ k1 , . . . , Xn ⩽ kn ) = F (k1 , . . . , kn )

According to the multivariate version of Sklar’s theorem, it is always possible to represent
this price in terms of the single digital prices, through a copula, unique on ni=1 Ran Fi :

                            F (k1 , . . . , kn ) = C(F1 (k1 ), . . . , Fn (kn ))

where the distribution functions Fi are those of the single underlyings Xi . If the latter have
normal log returns, no matter how we want to model their dependency, we have in particular
                     F (k1 , . . . , kn ) = C((−d21 (k1 )), . . . , (−d2n (kn )))                    (4.5)

where
                                    
                                  ln Xi,0 /ki + µXi T                                  σX2 i
                   −d2i (ki ) = −           √         ,                µXi = r −
                                        σ Xi T                                          2
and r is the (instantaneous) riskless rate, assumed constant.
Multivariate Copulas                                                                                            137

The basic probabilistic interpretation has at least two important consequences, which we are
going to discuss in the rest of the section:

(1) r.v.s are independent iff on ni=1 Ran Fi their copula is the product one;
(2) the copulas of a.s. increasing or decreasing transforms of continuous r.v.s are easily
    written in terms of the copula of X and Y : in particular, copulas are invariant w.r.t.
    increasing transforms.

As for the characterization of independence via copulas, recall that the r.v.s in the vector X
are independent iff F (x) = F1 (x1 )F2 (x2 ) . . . Fn (xn ), and deﬁne the product copula as

                                             C ⊥ (u) = u1 u2 . . . un

It is evident that Sklar’s theorem entails

Corollary 4.2 The r.v.s in X are independent iff they have the product copula on
ni=1 Ran Fi .

As for the copulas of increasing or decreasing transforms of continuous r.v.s, the following
theorem holds:

Theorem 4.6 (Schweizer & Wolff, 1976, 1981) Let the r.v.s in X be continuous with cop-
ula C. If α1 , α2 , . . . , αn are a.s. increasing transformations on αi : Ran Fi → ∗ , the r.v.s
α1 (X1 ), α2 (X2 ), . . . , αn (Xn ) – with marginals

                        H1 = F1 (α1−1 ), H2 = F2 (α2−1 ), . . . , Hn = Fn (αn−1 )

and joint distribution H – have copula C too:

                              Cα1 (X1 ),α2 (X2 ), ... ,αn (Xn ) (u) = CX1 X2 ...Xn (u)

for every u ∈ I n or, equivalently:

                               H (u) = C(H1 (u1 ), H2 (u2 ), . . . , Hn (un ))

   Copulas are then invariant w.r.t. increasing transformations, even though the latter act
differently on the components of X.
   Analogously, one could demonstrate that

Corollary 4.3 Under the hypotheses of Theorem 4.6, if α1 is a.s. decreasing and α2 , . . . , αn
are a.s. increasing
         Cα1 (X1 ),α2 (X2 ),...,αn (Xn ) (u) = Cα2 (X2 ),...,αn (Xn ) (u2 , u3 , . . . , un )
                                                − CX1 ,α2 (X2 ),...,αn (Xn ) (1 − u1 , u2 , u3 , . . . , un )

or, in terms of distribution functions:
               H (u) = Cα2 (X2 ),...,αn (Xn ) (H2 (u2 ), . . . , Hn (un ))
                          − CX1 ,α2 (X2 ),...,αn (Xn ) (1 − H1 (u1 ), H2 (u2 ), . . . , Hn (un ))
138                                                                                       Copula Methods in Finance

where

                                          Cα2 (X2 ),...,αn (Xn ) : I n−1 → I

is the copula of α2 (X2 ), . . . , αn (Xn ) (and consequently of X2 . . . Xn ), while

                                                 CX1 ,α2 (X2 ),...,αn (Xn )

is the copula of X1 , α2 (X2 ), . . . , αn (Xn ) (and consequently of X1 X2 . . . Xn ):

                    Cα2 (X2 ),...,αn (Xn ) (u2 , u3 , . . . , un ) = CX2 ,...,Xn (u2 , u3 , . . . , un )
                                 CX1 ,α2 (X2 ),...,αn (Xn ) (u) = CX1 X2 ...Xn (u)

  For the three-dimensional case, for instance, we have, for α1 decreasing and α2 , α3
increasing

      Cα1 (X1 ),α2 (X2 ),α3 (X3 ) (u) = Cα2 (X2 ),α3 (X3 ) (u2 , u3 ) − CX1 ,α2 (X2 ),α3 (X3 ) (1 − u1 , u2 , u3 )
                                     = CX2 ,X3 (u2 , u3 ) − CX1 X2 ,X3 (1 − u1 , u2 , u3 )

Using recursively the corollary above, one can obtain the copula for the case in which two
of the n functions αi are decreasing, three are, and so on.
   To conclude this section on the relationship between copula functions and r.v.s, let us
notice that, as in the bi-dimensional case, multivariate copulas can be easily seen to be
distribution functions of vectors of standard uniform random variables: for every u ∈ I n

                                     C(u) = Pr(U1 ⩽ u1 , . . . , Un ⩽ un )

The following remark extends to the multidimensional case:

Remark 4.1 The copula of the vector X is the joint distribution function of the probability-
integral transforms of the functions Fi :

                    Pr (F1 (X1 ) ⩽ u1 , F2 (X2 ) ⩽ u2 , . . . , Fn (Xn ) ⩽ un )
                                                                                    
                    = Pr X1 ⩽ F1−1 (u1 ) , X2 ⩽ F2−1 (u2 ), . . . , Xn ⩽ Fn−1 (un )
                                                                              
                    = C F1 F1−1 (u1 ) , F2 F2−1 (u2 ) , . . . , Fn Fn−1 (un )

                    = C(u1 , u2 , . . . , un )

4.3.1 Modeling consequences
In this section we revisit some examples of Chapter 2, in order to highlight that also in the
multidimensional case the modeling consequence of the copula adoption is that of enlarging
the pricing and risk evaluation possibilities beyond the Black–Scholes world.

An application: Digital options with log-normal underlyings

Let us consider the pricing of digital options with n underlyings on page 136, when the
corresponding returns are assumed to be not only marginally normal, but also jointly normal,
Multivariate Copulas                                                                                           139

i.e. in the Black–Scholes world. In this case the joint risk-neutral distribution of the returns
can be written via the Gaussian copula with Gaussian marginals, as in the bivariate case
(see also section 8.1 below). The Gaussian copula in turn is deﬁned as
                                                                                 
          CRGa (u) = R −1 (u1 ), −1 (u2 ), . . . , −1 (un )
                          −1 (u1 )            −1 (un )                               
                                                                    1             1 T −1
                     =                   ...                       n     1
                                                                           exp  −   x R  x  dx1 . . . dxn
                           −∞                   −∞           (2π ) 2 |R| 2        2

where R is the multivariate Gaussian distribution function with correlation matrix R. It
follows from Theorem 4.6 that the price can be written in copula terms using the Gaussian
copula too. More precisely, let the log returns of the underlyings, ln Xi /Xi,0 , be normal
with risk-neutral mean µXi = r − 12 σX2 i and variance σX2 i per unit of time, so that the
so-called standardized returns from 0 to T ,
                                                       
                                                     ln Xi /Xi,0 − µXi T
                                               Xi =            √
                                                            σ Xi T

are standard normal. Assume them to be also jointly normal. Then the joint risk-neutral
distribution of the underlyings, F , can be written as:

                                      F (x1 , . . . , xn ) = CRGa ((x1 ), . . . , (xn ))

According to (4.5), the forward price of the n-variate bearish digital option is then:
                                 −d21           −d2n                                       
                                                                1                     T
       F (k1 , . . . kn ) =               ...                   n       1
                                                                            exp − 12 x R −1 x dx1 . . . dxn   (4.6)
                                 −∞              −∞       (2π ) |R|
                                                                2       2



where
                                                            
                                                          ln ki /Xi,0 − µXi T
                                      −d2i = −d2i (ki ) =            √
                                                                 σ Xi T

  Suppose instead that the copula of the underlyings (or the returns) is a Student’s T copula,
an assumption that, as we will discuss in Chapter 5, seems much more appropriate in the
ﬁnancial domain. The Student’s copula will be deﬁned below to be

TR,υ (u1 , u2 , . . . , un )
                                                               
                                                          υ +n         1
     tυ−1 (u1 )  tυ−1 (u2 )          tυ−1 (un )                |R|− 2          υ+n
                                                            2               1 T −1 − 2
=                               ...                         υ       n
                                                                          1+ x R x
                                                                            υ
                                                                                        dx1 dx2 . . . dxn
      −∞          −∞                    −∞                     (υπ ) 2
                                                            2

where υ is, as usual, the number of degrees of freedom. Maintaining the marginal normality
assumption on standardized returns, it follows from (4.5) that the digital option forward
140                                                                                           Copula Methods in Finance

price is
                                     tυ−1 ((−d21 ))  tυ−1 ((−d22 ))          tυ−1 ((−d2n ))
           F (k1 , . . . , kn ) =                                         ...
                                     −∞                −∞                        −υ
                                               
                                         υ+n         1
                                               |R|− 2          υ+n
                                          2              1 T −1 − 2
                                          υ       n
                                                       1+ x R x
                                                         υ
                                                                     dx1 dx2 . . . dxn
                                             (υπ ) 2
                                          2
   Let us consider the following three assets: the DAX 30 index, the DEM/USD exchange
rate and the 10-year total return index for the German bond market (GER10y). In the next
chapter we will use weekly (average) data from January 1992 to June 2001, for a total of
248 observations, in order to ﬁt a Gaussian copula to them. By so doing, we will obtain the
following correlation matrix:

                                                    DAX 30        DEM/USD                 GER10y

                      R = DAX 30                    1
                          DEM/USD                   0.3035        1
                          GER10y                    0.1998        0.0551                  1

Suppose that you want to price an at-the-money digital option on them, with one week to
expiration. Using the same dataset, the initial levels of the three indices, and therefore
the option strikes, were respectively X1,0 = k1 = 1603.620, X2,0 = k2 = 1.547, X3,0 =
k3 = 7.37%. Consider also that the estimated standard deviations, over the same period,
are σX1 = 3.56%, σX2 = 2.04%, σX3 = 0.90%, while the riskless rate is r = 3%, so that
µX1 = 2.94%, µX2 = 2.98%, µX3 = 2.996% and
                     µX1
       −d21 = −           = −0.8249,                 −d22 = −1.4604,                      −d23 = −3.3289
                     σ X1

Using formula (4.6) we obtain the following price:
             −0.8249  −1.46049  −3.3289
                                                             1                        T
                                                             3    1
                                                                      exp(− 12 x R −1 x) dx1 dx2 dx3              (4.7)
              −∞           −∞              −∞         (2π ) |R|
                                                             2    2



   4.4 SURVIVAL COPULA AND JOINT SURVIVAL FUNCTION
This section introduces the notion of survival copula and recalls the joint survival function
(for standard uniform r.v.s) copula given above. It discusses the relationships between them
and applies them to the evaluation of the distribution functions of maxima and minima of
n > 2 r.v.s.
   Let us consider the probability:

                             F (x) = Pr(X1 > x1 , X2 > x2 , . . . , Xn > xn )                                     (4.8)

As in the bi-dimensional case, this probability is called the joint survival probability
or survival function of the n agents or components Xi , while the marginal survival
Multivariate Copulas                                                                                      141

probabilities or survival functions are:

                                          F i (xi ) = Pr(Xi > xi )

   The copula that represents the joint survival probability in terms of the survival probabili-
ties of the n agents or components Xi separately is named the survival copula. The existence
of the latter is guaranteed by the survival version of Sklar’s theorem, which guarantees that
there is a copula C, unique on Ran F 1 × Ran F 2 × · · · × Ran F n , such that

                             F (x) = C(F 1 (x1 ) , F 2 (x2 ) , . . . , F n (xn ))                        (4.9)

Uniqueness tout court holds if the marginal survival probabilities are continuous. We are
then allowed to introduce the following:

Deﬁnition 4.8 The survival copula of the r.v.s X1 , X2, . . . , Xn is the copula C, unique on
Ran F1 × Ran F2 × · · · × Ran Fn , such that

                             F (x) = C(F 1 (x1 ) , F 2 (x2 ) , . . . , F n (xn ))                    (4.10)

   Also in the multidimensional case it is customary to distinguish the survival copula from
the joint survival or survival function of n uniform variates, deﬁned above. In terms of
the latter, the probability F (x) is simply

                               F (x) = C
                                       /(F1 (x) , F2 (x2 ) , . . . , Fn (xn ))
Recalling that the probability integral transforms are uniformly distributed, and denoting
with Ui the nth transform:

                                               Ui = Fi (Xi )

one can also write Fi (xi ) = ui and 1 − F i (xi ) = ui ; with this notation, it is very easy to
ﬁnd the relationship between the survival copula and the survival function for uniform
variates. Since both can express the joint survival probability, F (x), respectively as

                                  C(F 1 (x1 ) , F 2 (x2 ) , . . . , F n (xn ))

and

                                    /(F1 (x) , F2 (x2 ) , . . . , Fn(xn ))
                                    C

we have
      −
      C(F 1 (x1 ), F 2 (x2 ), . . . , F n (xn )) = C
                                                   /(F1 (x) , F2 (x2 ) , . . . , Fn(xn ))
                                               / (1 − F 1 (x1 ), 1 − F 2 (x2 ), . . . , 1 − F n (xn ))
                                              =C

                                                 −
It follows that the relationship between C and C
                                               / is
                        −
                       C(u1 , u2 , . . . , un ) = C
                                                  /(1 − u1 , 1 − u2 , . . . , 1 − un )
142                                                                              Copula Methods in Finance

   We are also interested in the relationship between the survival copula and the copula,
since, differently from the bi-dimensional case, in the multidimensional one we do not deﬁne
the former using the latter. Georges et al. (2001), adapting a result proved by Feller (1968),
demonstrate the following theorems, which give the survival copula in terms of the copula
and vice versa:
                                             −
Theorem 4.7 The survival copula C can be written in terms of the corresponding copula
C as follows:
                    −
                    C(u1 , u2 , . . . , un ) = C
                                               /(1 − u1 , 1 − u2 , . . . , 1 − un )
                                               n                                    
                                             =      (−1)i                     C(1 − w)
                                                             w(u)∈Z(n−i,n,1)
                                                 i=0
                                                 n
where Z(n − i, n, 1) is the set of the            i    possible vectors with n − i components equal to
1, i equal to ui , and

                                     1 − w ≡ (1 − w1 , . . . , 1 − wn )

Symmetrically, the copula C can be written in terms of the corresponding survival copula
−
C as follows:
                                                 n 
                                                                                        
                    C(u1 , u2 , . . . , un ) =       (−1)i                     C(1 − w)
                                                             w(u)∈Z(n−i,n,1)
                                                 i=0

Example 4.5 In the three-dimensional case, for instance, the previous theorem allows us,
for a given copula, to obtain ﬁrst the survival function and then the survival copula, as
follows: we have the following representation for the survival function
                            3 
                                                               
       C                        (−1)i                        C(w)
       /(u1, u2 , u3 ) =                   w(u)∈Z(3−i,3,1)
                            i=0

                         = C(1, 1, 1) − C(u1 , 1, 1) − C(1, u2 , 1) − C(1, 1, u3 )
                            + C(u1 , u2 , 1) + C(u1 , 1, u3 ) + C(1, u2 , u3 ) − C(u1 , u2 , u3 )

Exploiting the uniform margins property this becomes

                    C
                    /(u1 , u2 , u3) = 1 − u1 − u2 − u3 + C12 (u1 , u2 )
                                     + C13 (u1 , u3 ) + C23 (u2 , u3 ) − C(u1 , u2 , u3 )

where Cij , i = 1, 2, j = 2, 3, are the two-dimensional margins of the copula. It follows that
the survival copula is
                −
                C(u1 , u2 , u3 ) = C
                                   /(1 − u1 , 1 − u2 , 1 − u3 )
                                   = −2 + u1 + u2 + u3 + C12 (1 − u1 , 1 − u2 )
Multivariate Copulas                                                                          143

                                   + C13 (1 − u1 , 1 − u3 ) + C23 (1 − u2 , 1 − u3 )
                                   − C(1 − u1 , 1 − u2 , 1 − u3 )
   To conclude our discussion of the survival copula, we mention the following theorem,
which gives – in terms of the copula of a random vector – the survival copula of certain
transforms of its components. The theorem can be very useful for simulation issues.

Theorem 4.8 Let X1 , X2 , . . . , Xn be n r.v.s with continuous c.d.f.s F1 , F2 , . . . , Fn and
copula C. We consider n continuous c.d.f.s G1 , G2 , . . . , Gn and we denote by Tj the r.v.
Tj = G−1 j (1 − Fj (Xj )). Then, the margins and the copula of the random vector (T1 , T2 , . . .,
Tn ) are respectively G1 , G2 , . . . , Gn and the survival copula C of C.

  Proof :   To prove that the margins are G1 , G2 , . . . , Gn is very simple since:
                            (−1)
       Pr(Tj ⩽ tj ) = Pr(Gj        (1 − Fj (Xj )) ⩽ tj )
                    = 1 − Pr(1 − Fj (Xj ) ⩾ Gj (tj )) = 1 − Pr(Fj (Xj ) ⩽ 1 − Gj (tj ))
                                                 
                    = 1 − Fj Fj(−1) 1 − Gj (tj ) = Gj (tj )

   As for the copula, the fact that the copula of the random vector (T1 , T2 , . . . , Tn ) is C
depends on the theorem of Schweizer and Wolff (1976, 1981), because G−1 j and 1 − Fj are
respectively increasing and decreasing functions.
                                                                                               

  As in the bi-dimensional case, distribution functions (d.f.s) for minima or maxima of n
random variables are easily expressed in terms of their copula, survival copula or survival
function. In fact, let us denote with m the minimum between the given r.v.s:

                                     m = min(X1 , X2 , . . . , Xn )

and with M their maximum:

                                    M = max(X1 , X2 , . . . , Xn )

Let Fm and FM be the d.f.s of the minimum and maximum respectively. We have
     for maxima:

      FM (a) = Pr(M ⩽ a) = Pr(X1 ⩽ a, X2 ⩽ a, . . . , Xn ⩽ a) = F (a, a, . . . , a) =
              = C(F1 (a), F2 (a), . . . , Fn (a))

     for minima:

                       Fm (a) = Pr(m ⩽ a) = 1 − Pr(m > a)
                               = 1 − Pr(X1 > a, X2 > a, . . . , Xn > a)
                               =1−C
                                  /(F1 (a), F2 (a), . . . , Fn (a)) =
                               = 1 − C(F 1 (a), F 2 (a), . . . , F n (a))
144                                                                                         Copula Methods in Finance

This method may be extended to any order statistics involving the r.v.s X1 , X2 , . . . , Xn
(Theorem 23 of Georges et al., 2001).

         4.5     DENSITY AND CANONICAL REPRESENTATION
                   OF A MULTIDIMENSIONAL COPULA
This section introduces the notions of density and canonical representation of a copula,
together with those of the absolutely continuous and singular components.

Deﬁnition 4.9 The density c(u1 , u2 , . . . , un ) associated to a copula C(u1 , u2 , . . . , un ) is

                                                             ∂ n C(u1 , u2 , . . . , un )
                              c(u1 , u2 , . . . , un ) =
                                                                  ∂u1 . . . ∂un

  It exists a.e. in I n , as noticed at the end of section 4.1.
  The density can be used to deﬁne the absolutely continuous and singular components of
C, denoted as AC and SC , as follows:
                                         u1  u2      un n
                                                          ∂ C(s1 , s2 , . . . , sn )
           AC (u1 , u2 , . . . , un ) =           ...                                ds1 . . . dsn
                                         0    0        0     ∂s1 . . . ∂sn
            SC (u1 , u2 , . . . , un ) = C(u1 , u2 , . . . , un ) − AC (u1 , u2 , . . . , un )

In turn, a copula for which C = AC on I n is called absolutely continuous, while it is
called singular if C = SC on I n . It has both an absolutely continuous and a singular
component if it belongs to neither the ﬁrst nor the second class.
  Each copula induces a probability measure on I n , which is no other than the C-volume of
section 4.1. The C-measure of the absolute component is AC (1), while that of the singular
component is SC (1).

Example 4.6 The product copula C ⊥ = u1 u2 u3 is absolutely continuous, since

                                                       ∂ 3 s1 s2 s3
                                                                    =1
                                                      ∂s1 ∂s2 ∂s3

and for every (u1 , u2 , u3 ) ∈ I 3
                            u1  u2  u3
                                                   ∂ 3 s1 s2 s3
                   AC =                                         ds1 ds2 ds3 = u1 u2 u3 = C ⊥
                             0        0       0   ∂s1 ∂s2 ∂s3

The Fréchet upper bound C + is singular, since a.e.

                            ∂ 3 C + (u1 , u2 , u3 )   ∂ 3 min(u1 , u2 , u3 )
                                                    =                        =0
                                ∂u1 ∂u2 ∂u3               ∂u1 ∂u2 ∂u3

Consequently
                                  u1  u2  u3
                                                          ∂ 3C +
                       AC =                                         ds1 ds2 ds3 = 0 = C +
                                  0       0       0     ∂s1 ∂s2 ∂s3
Multivariate Copulas                                                                                       145

  Finally, notice that for continuous random variables, the copula density is related to the
density of the distribution F , denoted as f , by the canonical representation:
                                                                                       n
                                                                                       
               f (x1 , x2 , . . . , xn ) = c(F1 (x1 ), F2 (x2 ), . . . , Fn (xn )) ·          fj (xj )
                                                                                       j =1

where
                                                    ∂ n (C(F1 (x1 ), F2 (x2 ), . . . , Fn (xn )))
        c(F1 (x1 ), F2 (x2 ), . . . , Fn (xn )) =
                                                         ∂F1 (x1 )∂F2 (x2 ) . . . ∂Fn (xn )

and fj are the densities of the marginals

                                                          dFj (xj )
                                            fj (xj ) =
                                                            dxj

   Also in the n-dimensional case the copula density is therefore equal to the ratio of the
joint density f and the product of all marginal densities fj . From this expression it is clear
also that the copula density takes a value equal to 1 everywhere when the original r.v.s are
independent.
   The canonical representation is very useful in statistical estimation, in order to have a
ﬂexible representation for joint densities (mostly other than Gaussian, in ﬁnancial applica-
tions), and in order to determine the copula, if one knows the joint and marginal distribution:
see Chapter 5.

 4.6 BOUNDS FOR DISTRIBUTION FUNCTIONS OF SUMS OF n
                 RANDOM VARIABLES
The matter of the distribution function of the sum of r.v.s can be addressed in the multivariate
case as well.
  In the present setting, it has the following formulation: given n r.v.s with distribution
functions Fi , i = 1, 2, . . . , n, and having denoted with FS the distribution function of their
sum, ﬁnd distribution functions FL and FU such that, for every s ∈ ∗

                                            FL (s) = inf FS (s)                                          (4.11)
                                                        F ∈F

                                           FU (s) = sup FS (s)                                           (4.12)
                                                        F ∈F

where F is the Fréchet class which has Fi , i = 1, 2, . . . , n as marginals, deﬁned as in the
bi-dimensional case.

Theorem 4.9 If one denotes with 1 the n-dimensional vector whose components are all
equal to 1, and deﬁnes as T (s) the set of vectors such that the sum of their components is
equal to 1:
                                                              
                                       T (s) = t ∈ n : t1 = s
146                                                                      Copula Methods in Finance

            MIB     MIB      MIB        MIB    MIB        MIB      MIB       MIB   MIB     MIB
 1.5        DAX     DAX      DAX        DAX    UKX        UKX      UKX       SPX   SPX     CAC
   1        UKX     SPX      CAC        NKY    SPX        CAC      NKY       CAC   NKY     NKY
 0.5
   0
−0.5
  −1
−1.5
  −2
−2.5
  −3
−3.5

Figure 4.1 VaR bounds at the 95% level of conﬁdence for equally weighted portfolios of three stock
indices, the empirical quantiles


then the stochastic bounds on FS are

                                               n                        
                                               
                        FL (s) = sup max             Fi (ti ) − (n − 1), 0                  (4.13)
                                   t∈T (s)      1
                                               n              
                                               
                        FU (s) = inf min            Fi (ti ), 1                             (4.14)
                                   t∈T (s)
                                                1


   As in the bi-dimensional case, apart from very special cases, the bounds do not have a
closed form expression: however, Frank, Nelsen and Schweizer (1987) notice that they can
be computed iteratively. The same iterative procedure can be adopted with the numerical
algorithms of Williamson and Downs (1990).

An application: VaR bounds, Luciano & Marena, 2002a

The computation of the VaR bounds in Chapter 2 can be extended to larger portfolios.
Luciano and Marena start by considering equally weighted portfolios of three assets, using
the same data as in the three-dimensional case and adopting the numerical computation
device in Williamson and Downs (1990). Figure 4.1 presents the portfolio VaR bounds,
corresponding to Figure 2.9 in Chapter 2.

                     4.7    MULTIVARIATE DEPENDENCE
Some of the copula properties related to dependence measures may be extended to the
multivariate case. For example, in three or more dimensions we have orthants as the gen-
eralization of quadrants: the extension of quadrant dependence is therefore the following
orthant dependence concept.

Deﬁnition 4.10 [Positively orthant dependence] Let X = (X1 , X2 , . . . , Xn ) be an n-di-
mensional random vector.
Multivariate Copulas                                                                             147

(1) X is said to be positively lower orthant dependent (PLOD) if for all (x1 , x2 , . . . , xn )
    in n ,
                                                               n
                                                               
                   Pr (X1 ⩽ x1 , X2 ⩽ x2 , . . . , Xn ⩽ xn ) ⩾   Pr (Xi ⩽ xi )
                                                                    i=1

    i.e. C  C ⊥ .
(2) X is said to be positively upper orthant dependent (PUOD) if for all (x1 , x2 , . . . , xn ) in
    n ,
                                                                n
                                                                
                    Pr (X1 > x1 , X2 > x2 , . . . , Xn > xn ) ⩾   Pr (Xi > xi )
                                                                    i=1

    i.e. C  C ⊥ .
         /
(3) X is said to be positively orthant dependent (POD) if for all (x1 , x2 , . . . , xn ) in n it is
    both PLOD and PUOD.2
Negative lower orthant dependence (NLOD), negative upper orthant dependence (NUOD),
and negative orthant dependence (NOD) are deﬁned analogously by reversing the sense of
the previous inequalities.
   Many of the measures of concordance have a multivariate version. In general, however,
each bivariate concordance and association measure has several multidimensional versions
(see Joe, 1990, 1997; Wolff, 1981; Brindley & Thompson, 1972 and Block & Ting, 1981,
for a further discussion of multivariate dependence concepts).

  4.8    PARAMETRIC FAMILIES OF n-DIMENSIONAL COPULAS
4.8.1 The multivariate Gaussian copula
Deﬁnition 4.11 [Multivariate Gaussian copula (MGC)] Let R be a symmetric, positive
                                               T
deﬁnite matrix with diag(R) = (1, 1, . . . , 1) and R the standardized multivariate normal
distribution with correlation matrix R. The MGC is deﬁned as follows:
                                                                           
                     CRGa (u) = R −1 (u1 ), −1 (u2 ), . . . , −1 (un )

where −1 , as usual, is the inverse of the standard univariate normal distribution function .
As in the bivariate case, the Gaussian copula generates the standard Gaussian joint distri-
bution function, whenever the margins are standard normal.
Proposition 4.1 The Gaussian copula generates the standard joint normal distribution func-
tion – via Sklar’s theorem – iff the margins are standard normal.
  From the deﬁnition of the Gaussian copula we can easily determine the corresponding
density. Using the canonical representation, we have:
                                         
                  1              1 T −1
                  n     1
                          exp  −   x R  x    = cR Ga
                                                     ((x1 ), (x2 ), . . . , (xn ))
            (2π ) 2 |R| 2        2
                                                 n                        
                                                        1             1
                                              ×        √ exp − xj2
                                                        2π            2
                                                        j =1

2 Since in the bi-dimensional case PLOD and PUOD coincide, we introduced PQD only.
148                                                                                       Copula Methods in Finance

where |R| is the determinant of R. We deduce that:
                                                                                      
                                                                        1      1 T −1
                                                                n     1
                                                                        exp  −   x R  x
                                                          (2π ) 2 |R| 2        2
                   cR
                    Ga
                       ((x1 ), (x2 ), . . . , (xn )) =     n                   
                                                                    1           1
                                                                    √ exp − xj2
                                                                     2π          2
                                                            j =1

Let uj = (xj ), so that xj = −1 (uj ). The density can be rewritten as follows:
                                                                          
                                                  1          1 T −1
                  cR
                   Ga
                      (u1 , u2 , . . . , un ) =     1
                                                      exp  −   ς (R − I )ς
                                                |R| 2        2
                                                T
where ς = −1 (u1 ), −1 (u2 ), . . . , −1 (un ) .

4.8.2 The multivariate Student’s t copula
Deﬁnition 4.12 [Multivariate Student’s t copula (MTC)] Let R be a symmetric, positive
                                                     T
deﬁnite matrix with diag(R) = (1, 1, . . . , 1) and tR,υ the standardized multivariate Stu-
dent’s t distribution with correlation matrix R and υ degrees of freedom, i.e.
                                     x1  x2      xn
     tR,υ (x1 , x2 , . . . , xn ) =           ...
                                              −∞ −∞              −∞
                                                            
                               υ+n         1
                                     |R|− 2          υ+n
                                 2             1 T −1 − 2
                        ×       υ       n
                                             1+ x R x
                                               υ
                                                           dx1 dx2 . . . dxn
                                   (υπ ) 2
                                 2
The MTC is then deﬁned as follows:
                       TR,υ (u1 , u2 , . . . , un ) = tR,υ (tυ−1 (u1 ), tυ−1 (u2 ), . . . , tυ−1 (un ))
                                                                
                                                           υ+n          1
       tυ−1 (u1 )  tυ−1 (u2 )          tυ−1 (un )               |R|− 2             υ+n
                                                            2                  1 T −1 − 2
=                                 ...                       υ             1 +   x R x      dx1 dx2 . . . dxn
       −∞           −∞                   −∞
                                                                      n
                                                                (υπ ) 2        υ
                                                            2

where tυ−1 is the inverse of the univariate c.d.f. of Student’s t with υ degrees of freedom.
  Using the canonical representation, it turns out that the copula density for the MTC is:
                                                            n                  υ+n
                                           υ+n           υ              1 T −1 − 2
                                                                     1+ ς R ς
                                            2                          υ
                                       1
   cR,υ (u1 , u2 , . . . , un ) = |R|− 2          2 
                                            υ         υ+1           n
                                                                                 − υ+1
                                                                             ςj2     2
                                            2            2                1+
                                                                               υ
                                                                                          j =1



where ςj = tυ−1 (uj ).
Multivariate Copulas                                                                                149

4.8.3 The multivariate dispersion copula
                                                                                                T
Deﬁnition 4.13 [Multivariate dispersion copula (MDC)] Let µ = (µ1 , µ2 , . . . , µn ) be a
                                                T
position parameter, σ 2 = σ12 , σ22 , . . . , σn2 a dispersion parameter and R a correlation
matrix. We say that X ∼ MDC(µ, σ 2 , R) if
                                                            n                     
                               1             1 T −1
        f (y; µ, σ 2 , R) =      1
                                   exp   −     ς (R  − I )ς       f j yj ; µ j , σ 2
                                                                                   j
                            |R| 2            2
                                                             j =1

where
                                                   
                         ςj = −1 Fj yj ; µj , σj2      for j = 1, 2, . . . , n and
                                              
                           ∂Fj yj ; µj , σj2                                               
        fj   yj ; µj , σj2 =                       for every set of c.d.f. Fj yj ; µj , σj2
                                   ∂yj
Example 4.7 Just for a simple application of this deﬁnition, we can construct the MDC
assuming Weibull margins. In such a case we have:
                                                 α
                                      αx α−1        x
                              f (x) =        exp −
                                        β           β
so we obtain the MDC density:
                                                      
                                                        n α x αj −1
                                                                        αj 
                             1            1 T −1           j j            xj
   f (x1 , x2 , . . . , xn ) =       exp − ς (R − I )ς              exp −
                                   1
                               |R| 2      2                 βj            βj
                                                                 j =1

where
                                                               α     
                                           −1
                                                                xj j
                                  ςj =             1 − exp −
                                                                βj

4.8.4 Archimedean copulas
As in the bi-dimensional case, let us consider a generator function. Assume directly a strict
generator:

                                       ϕ(u) : [0, 1] → [0, ∞]

continuous and strictly decreasing. Deﬁne its inverse as in Chapter 2.

The following theorem can be proved:

Theorem 4.10 (Kimberling, 1974) Let ϕ be a generator. The function C : [0, 1]n → [0, 1]
deﬁned by

                    C(u1 , u2 , . . . , un ) = ϕ −1 (ϕ(u1 ) + ϕ(u2 ) + · · · + ϕ(un ))

is a copula iff ϕ −1 is completely monotonic on [0, ∞].
150                                                                               Copula Methods in Finance

As a consequence of the previous theorem, we can give the following:

Deﬁnition 4.14 Let ϕ be a strict generator, with ϕ −1 completely monotonic on [0, ∞].
Then an n-variate Archimedean copula is the function

                     C(u1 , u2 , . . . , un ) = ϕ −1 (ϕ(u1 ) + ϕ(u2 ) + · · · + ϕ(un ))

As in the bi-dimensional case, an important source of generators for Archimedean n-copulas
consists of the inverses of the Laplace transforms of c.d.f.s, as proved by the following
theorem:

Theorem 4.11 (Feller, 1971) A function ϕ on [0, ∞] is the Laplace transform of a c.d.f.
F if and only if ϕ is completely monotonic and ϕ (0) = 1.

It is fairly simple to generate multivariate Archimedean copulas according to the previous
deﬁnition: however, they have the limit that there are only one or two parameters to capture
the dependence structure.3

Gumbel n-copula
                                                                                       1
The generator is given by ϕ(u) = (− ln(u))α , hence ϕ −1 (t) = exp(−t α ); it is completely
monotonic if α > 1. The Gumbel n-copula is therefore:
                                                           !1 
                                             n
                                                            α
             C(u1 , u2 , . . . , un ) = exp −   (− ln ui )α      with α > 1          (4.15)
                                                              
                                                       i=1


Clayton n-copula

The generator is given by ϕ(u) = u−α − 1, hence ϕ −1 (t) = (t + 1)− α ; it is completely
                                                                                       1


monotonic if α > 0. The Clayton n-copula is therefore:

                                                 n
                                                                     !− 1
                                                                        α
                    C(u1 , u2 , . . . , un ) =         u−α
                                                        i −n+1                  with α > 0           (4.16)
                                                 i=1


Frank n-copula
The generator is given by
                                                                       
                                                exp (−αu) − 1
                                      ϕ(u) = ln
                                                 exp (−α) − 1
hence
                                                  1 
                                   ϕ −1 (t) = −     ln 1 + et (e−α − 1)
                                                  α

3 A more general deﬁnition, overcoming this restriction, could also be given.
Multivariate Copulas                                                                 151

  it is completely monotonic if α > 0. The Frank n-copula is given by:
                                       n              
                                          −αu       
                                  
                                           e    i −1 
                                  
                                                      
                                                       
                               1       i=1
   C(u1 , u2 , . . . , un ) = − ln 1 +                    with α > 0 when n ⩾ 3   (4.17)
                               α       e−α − 1
                                                   n−1 
                                                       
                                  
                                                      
                                                       
                                                      
                         5
    Estimation and Calibration from Market Data

            5.1    STATISTICAL INFERENCE FOR COPULAS
From a statistical point of view, a copula function is basically a very simple expression of
a multivariate model and, as for most multivariate statistical models, much of the classical
statistical inference theory is not applicable. The only theory that can be applied is the
asymptotic maximum likelihood estimation (MLE). In addition, there are other possible
ad hoc estimation methods that were proposed for overwhelming the hard computational
efforts to get exact MLEs. These methods share, and also mix, concepts from non-parametric
statistical inference and simulation techniques.
   This section is devoted to statistical inference theory applied to copula models. We ﬁrst
describe the Exact Maximum Likelihood Estimator and introduce some deviations from
that. Now, we would like to observe that every estimation method that we are going to
describe often requires a numerical optimization of the objective function, because a copula
is intrinsically a multivariate model and its likelihood involves mixed derivatives.
   Copulas represent a powerful tool for tackling the problem of how to describe a joint
distribution because, as evidenced in Chapter 2, they let the researcher deal separately with
the needs of marginal and joint distribution modeling. Thus, one can choose for each data
series the marginal distribution that best ﬁts the sample, and afterwards put everything
together using a copula function with some desirable properties. A potential problem comes
from the simple fact that the number of combinations that can be made has virtually no
limit, and one can easily get lost looking for the best combination of the marginals and
the copula. This is why we will present some non-parametric methods to model both the
margins and the copula. It is required that they have enough data since every non-parametric
method performs much better when data are not scarce, and the main advantage is to let
the dataset express the copula without any subjective choice.
   In this chapter we will focus on continuous random variables. It should be noted that the
assumption of continuity is not always required, but it simpliﬁes some of the presentation.
As in the previous chapters, we will denote throughout the cumulative distribution function
(or c.d.f.) of a random variable (or r.v.) using an uppercase letter, and the corresponding
probability density function (or p.d.f.) using a lowercase letter. We will still consider all
r.v.s to be distributed in the extended real line.
   When we extend this framework in a time series context, especially when we present some
empirical application to ﬁnancial time series, we will consider a strictly stationary stochastic
process {Yt , t ∈ Z} taking values in R n and assume that our data consist in a realization of
n-dimensional real vectors {Yt , t = 1, 2, . . . , T }. These data, for example, may correspond
to observed returns of n ﬁnancial assets, say stock indexes, at different dates.
   We denote by f (y), F (y), respectively, the (joint) p.d.f. and the (joint) c.d.f. of Yt =
(Y1t , Y2t , . . . , Ynt ) at point y = (y1 , y2 , . . . , yn ) .
   The marginal (univariate) p.d.f. and c.d.f. of each element Yj t at point yj with j =
1, 2, . . . ., n will be denoted by fj (yj ) and Fj (yj ), respectively.
   In the following we will consider the case where the marginals Fj are continuous.
154                                                                                   Copula Methods in Finance

           5.2 EXACT MAXIMUM LIKELIHOOD METHOD
Before introducing this important estimation method it is worth recalling the following
canonical representation presented in Chapter 4:
                                                                                      n
                                                                                      
              f (x1 , x2 , . . . , xn ) = c(F1 (x1 ), F2 (x2 ), . . . , Fn (xn )) ·          fj (xj )     (5.1)
                                                                                      j =1

where
                                                       ∂ n (C(F1 (x1 ), F2 (x2 ), . . . , Fn (xn )))
           c(F1 (x1 ), F2 (x2 ), . . . , Fn (xn )) =                                                      (5.2)
                                                            ∂F1 (x1 )∂F2 (x2 ) . . . ∂Fn (xn )

is the nth mixed partial derivative of the copula C, c is the copula density and f is the
standard univariate probability density function.
   This canonical representation for the multivariate density function permits us to say that,
in general, a statistical modeling problem for copulas could be decomposed into two steps:

• identiﬁcation of the marginal distributions;
• deﬁnition of the appropriate copula function.

This is an important point, to begin with, for estimation issues as we will see below.
  Let ℵ = {x1t , x2t , . . . , xnt }Tt=1 be the sample data matrix. Thus, the expression for the
log-likelihood function is

                       T
                                                                              T 
                                                                                n
             l(θ ) =         ln c(F1 (x1t ), F2 (x2t ), . . . , Fn (xnt )) +              ln fj (xj t )   (5.3)
                       t=1                                                     t=1 j =1

where θ is the set of all parameters of both the marginals and the copula.
  Hence, given a set of marginal p.d.f.s and a copula the previous log-likelihood may be
written, and by maximization we obtain the maximum likelihood estimator:

                                             θ̂ MLE = max l(θ )                                           (5.4)
                                                        θ∈

   Throughout this section, we assume that the usual regularity conditions (see Serﬂing,
1980 and Shao, 1999) for asymptotic maximum likelihood theory hold for the multivari-
ate model (i.e. the copula) as well as for all of its margins (i.e. the univariate p.d.f.s).
Under these regularity conditions the maximum likelihood estimator exists and it is con-
sistent and asymptotically efﬁcient; also, it veriﬁes the property of asymptotically normal,
and we have:
                            √
                              T (θ̂ MLE − θ 0 ) → N (0, −1 (θ 0 ))                     (5.5)

with  (θ 0 ) the usual Fisher’s information matrix and θ 0 the usual true value.
Estimation and Calibration from Market Data                                                                              155

  The covariance matrix of θ̂ MLE (Fisher’s information matrix) may be estimated by the
inverse of the negative Hessian matrix of the likelihood function.

5.2.1 Examples
Example 5.1 [Multivariate Gaussian copula] Let R be a symmetric, positive deﬁnite mat-
rix with diag(R) = (1, 1, . . . , 1) , R the standardized multivariate normal distribution with
correlation matrix R and let  denote the c.d.f. of a standard Gaussian or normal variable.
The MGC, as deﬁned in the previous chapter, is as follows:

                C(u1 , u2 , . . . , un ; R) = R (−1 (u1 ), −1 (u2 ), . . . , −1 (un ))                           (5.6)

with density:

         1                                                                                  n 
                                                                                                                    
         n      1
                  exp(− 12 x R −1 x) = c((x1 ), (x2 ), . . . , (xn )) ·                       √1 exp(− 1 x 2 )
                                                                                                           2 j
                                                                                                   2π
   (2π ) 2 |R| 2                                                                           j =1
                                                                                                                     (5.7)

  We deduce that:
                                                                       1
                                                                       n        1
                                                                                     exp(− 12 x R −1 x)
                                                       (2π ) 2 |R| 2
                   c((x1 ), (x2 ), . . . , (xn )) =     n                                                       (5.8)
                                                                 1         √        exp(− 12 xj2 )
                                                                                2π
                                                                     j =1


  Let uj = (xj ), so xj = −1 (uj ) and we can rewrite as follows:

                                                       1
                         c(u1 , u2 , . . . , un ) =         1
                                                                exp(− 12 ς  (R −1 − I )ς )                          (5.9)
                                                      |R|   2

                                                       
where ς = −1 (u1 ), −1 (u2 ), . . . , −1 (un ) .
   In this case, let ℵ = {x1t , x2t , . . . , xnt }Tt=1 be the sample data matrix, and the expression
for the log-likelihood function is:

                                                                 T
                                          T          1   −1
                             l(θ ) = −      ln |R| −    ς t (R − I )ς t                                         (5.10)
                                          2          2
                                                                t=1

                                                                                           
where θ is the set of all parameters: R and ς t = −1 (u1t ), −1 (u2t ), . . . , −1 (unt ) .
  The MLE of R is given by (refer to Magnus & Neudecker, 1980):

                                                                 T
                                                   1 
                                           R̂MLE =   ςtςt                                                       (5.11)
                                                   T
                                                                t=1
156                                                                                              Copula Methods in Finance

Example 5.2 [Multivariate dispersion copula with Weibull margins]             As recalled     in Chap-
ter 4, let µ = (µ1 , µ2 , . . . , µn ) be a position parameter, σ 2 = σ12 , σ22 , . . . , σn2 a disper-
sion parameter and R a correlation matrix.
   We say that X ∼ MDC(µ, σ 2 , R) if

                                                  1                                    
                                                                                       n
                f (y; µ, σ 2 , R) =                   1
                                                          exp(− 12 ς  (R −1 − I )ς)          fj (yj ; µj , σj2 )   (5.12)
                                             |R|      2                                j =1

where

                           ςj = −1 (Fj (yj ; µj , σj2 ))                 for j = 1, 2, . . . , n

and

                                   ∂Fj (yj ; µj , σj2 )                                                    
         fj (yj ; µj , σj2 ) =                                     for every set of c.d.f. Fj yj ; µj , σj2
                                                 ∂yj

  Assuming Weibull margins, we saw in Chapter 4 that we obtain the MDC density:

                                                                           n α x j     α −1          αj
                                  1                                          j j                     xj
  f (x1 , x2 , . . . , xn ) =           exp(− 12 ς  (R −1 − I )ς )                             exp −               (5.13)
                                |R| 2
                                      1
                                                                                    βj                βj
                                                                           j =1

                                                 αj
                                             x
where ςj = −1 1 − exp − βjj                                  .
  In this case the log-likelihood function may be easily derived:
                                                           α −1     αj 
                           T                   T 
                                                 n      αj xj tj
               T         1   −1                                     xj t
 l(R, α, β) = − ln |R| −     ς t (R − I )ς t +     ln           exp −      
               2         2                                 βj          βj
                                          t=1                               t=1 j =1
                                                                                                                    (5.14)
                                             αj
                                         x
with ςj t = −1 1 − exp − βjjt                            .
  This log-likelihood function has to be maximized with respect to all parameters (R, α,
β) by using a numerical optimization method.

                                                 5.3 IFM METHOD
The maximum likelihood method, previously shown, could be very computationally inten-
sive, especially in the case of a high dimension, because it is necessary to estimate jointly
the parameters of the marginal distributions and the parameters of the dependence structure
represented by the copula. But, if the readers look more closely at the log-likelihood func-
tion, they will note that it is composed by two positive terms: one term involving the copula
density and its parameters, and one term involving the margins and all parameters of the
copula density. For that reason, Joe and Xu (1996) proposed that these set of parameters
should be estimated in two steps:
Estimation and Calibration from Market Data                                                             157

1. As a ﬁrst step, they estimate the margins’ parameters θ 1 by performing the estimation
   of the univariate marginal distributions:

                                                    T 
                                                     n
                             θ̂ 1 = ArgMaxθ 1                   ln fj (xj t ; θ 1 )                   (5.15)
                                                     t=1 j =1


2. As a second step, given θ̂ 1 , they perform the estimation of the copula parameter θ 2 :

                                   T
                                   
                θ̂ 2 = ArgMaxθ 2         ln c(F1 (x1t ), F2 (x2t ), . . . , Fn (xnt ); θ 2 , θ̂ 1 )   (5.16)
                                   t=1

This method is called inference for the margins or IFM. The IFM estimator is deﬁned as
the vector:
                                                             
                                         θ̂ IFM = θ̂ 1 , θ̂ 2                                         (5.17)

   We call l the entire log-likelihood function, lj the log-likelihood of the j th marginal, and
lc the log-likelihood for the copula itself. Hence, the IFM estimator is the solution of:

                                ∂l1 ∂l2         ∂ln ∂lc
                                   ,     ,...,     ,                     = 0                         (5.18)
                               ∂θ11 ∂θ12       ∂θ1n ∂θ 2

while the MLE comes from solving

                                ∂l   ∂l         ∂l   ∂l
                                   ,     ,...,     ,                     = 0                         (5.19)
                               ∂θ11 ∂θ12       ∂θ1n ∂θ 2

so, the equivalence of the two estimators, in general, does not hold.
   The readers can note that for MGC with correlation matrix R and univariate N (µj , σj2 )
margins, the two estimators coincide.
   It is simple to see that the IFM estimator provides a good starting point for obtaining an
exact MLE.
   Since it is computationally easier to obtain the IFM estimator than the MLE, it is worth
addressing a question about the IFM asymptotic efﬁciency compared with the MLE. Thus,
one has to compare the asymptotic covariance matrix of the two estimators.
   The IFM theory is a special case of using a set of appropriate inference equations to
estimate a vector of parameters. In this case each equation is a score function (i.e. its left
side is the partial derivative of the log-likelihood of each marginal density).
   Joe (1997) proves that, like the MLE, the IFM estimator veriﬁes, under regular conditions,
the property of asymptotic normality, and we have:
                           √                               
                            T θ̂ IFM − θ 0 → N 0, Ģ−1 (θ 0 )                                         (5.20)

with Ģ (θ 0 ) the Godambe information matrix.
158                                                                              Copula Methods in Finance

  Thus, if we deﬁne a score function
                                                                             
                                           ∂l1 ∂l2         ∂ln ∂lc
                               s(θ) =         ,     ,...,     ,
                                          ∂θ11 ∂θ12       ∂θ1n ∂θ 2

splitting the log-likelihood in two parts l1 , l2 , . . . , ln for each margin and lc for the copula,
the Godambe information matrix takes the following form:

                                         Ģ (θ 0 ) = D −1 V (D −1 )                                  (5.21)

with
                                             
                                ∂s(θ)                                 
                            D=E                    and V = E s(θ)s(θ)
                                 ∂θ

    The estimation of this covariance matrix requires us to compute many derivatives. Joe
(1997) then suggests the use of the jacknife method or other bootstrap methods to estimate
it. In a time series context, it may be useful to adopt a block-bootstrap, especially when the
time series in hand show a low autocorrelation (see Efron & Tibshirani, 1993 and Shao &
Tu, 1995, for a deeper and more formal explanation of these concepts).
    Joe (1997) points out that the IFM method is highly efﬁcient compared with the ML
method. It is worth noting that the IFM method may be viewed as a special case of the
generalized method of moments (GMM) with an identity weight matrix (Davidson & Mac-
Kinnon, 1993).

5.3.1 Application: estimation of the parametric copula for market data
In this section we present an empirical application1 of parametric copula modeling to the
following ﬁve assets: DAX 30 index, S&P 500 index, 10-year total return index for the US
bond market, 10-year total return index for the German bond market, and the DEM/USD
exchange rate.
   We use weekly (average) data from January 1992 to June 2001; in total we have a
sample of 248 observations. Table 5.1 reports some descriptive statistics for each weekly
return series. JB is the Jarque–Bera Gaussianity test statistic.

                                                  Table 5.1

                           Dax30            S&P500            Ger10y        USA10y           DEM/$

       Mean                 0.53             0.43              0.30          0.27              0.16
       Std                  3.56             2.68              0.90          1.04              2.04
       Skew                −0.40            −0.45             −0.55         −0.18              0.13
       Kurtosis             3.22             4.00              3.44          2.75              3.38
       JB Statistics        0.0288           0.0000            0.0007        0.3879            0.3204


1 This example is borrowed from Cazzulani, Meneguzzo and Vecchiato (2001). The data have already been used
in the previous chapters in order to compute some concordance measures. In the following, this example will be
extended for further comments and more detailed discussions.
Estimation and Calibration from Market Data                                                          159

  Results for the mean and standard deviations are reported in the table in percentage
points. The Jarque–Bera test is the best-known normality test. Our strategy will be to
model the joint dependence using a Frank copula because it is a simple Archimedean
copula and, in the bivariate case, allows for both positive and negative dependence. As for
the marginal behavior, we can consider the use of a Student t in order to capture a high
kurtosis. Unfortunately the Student t is a symmetric distribution and it would fail to capture
the negative skewness. At ﬁrst sight, it may seem more appropriate then to use a non-central
Student t, so that we can allow for a negative skewness. We present its p.d.f. below:
                                          ∞
                (υ)υ/2 exp −δ 2 /2               υ +i+1        xδ i       2     i/2
   f (x) =                                ·                                             (5.22)
             (υ/2)π 1/2 (υ + x 2 )(υ+1)/2             2          i!      υ + x2
                                               i=0

where is the Euler function.
   We, indeed, choose to adopt a non-central t density for a more general setting due to
asymmetry and kurtosis sample characteristics.
   Here δ is the non-centrality parameter, which can range between −∞ and +∞; and υ is
the usual parameter for the degrees of freedom. It is worth noting that a Student t distribution
converges to the standard normal distribution when the degrees of freedom tend to inﬁnity. We
standardize our returns so that they have zero mean and unit standard deviation. We then ﬁt a
normal distribution, a Student’s t and a non-central t distribution to these normalized data.
   Table 5.2 gives the parameter estimates for the margins via MLE, ﬁrst considering a non-
central t and then considering a (central) standard t. All estimates, except δ, are statistically
signiﬁcant.
   As can be seen in the table, the difference in the estimated degrees of freedom is small
due to almost zero estimates for the non-centrality parameter. All degrees of freedom imply
a marginal behavior close to normal.
   We now turn our attention to the copula modeling, and, following the IFM estimation
technique, we have estimated the relevant parameters for the marginal distributions (refer
to Table 5.2), and we now estimate the Frank copula via maximum likelihood.
   The optimization problem is as follows:
                      T
                                                                                             
        max L(α) =          2 log 1 − e−α − (1 − e−α(x1t ,υ1 ,δ1 ) )(1 − e−α(x2t ,υ2 ,δ2 ) )
          α
                      t=1

                      − log(α(1 − e−α )) − α [(x1t , υ1 , δ1 ) + (x2t , υ2 , δ2 )]               (5.23)

                      Table 5.2     Marginal estimation – standardized returns

                   DAX           S&P 500         GER10y          USA10y          DEM/USD

                                             NC Student t

              υ    78.10            20.10            44.79         300.00             41.01
              δ     0.00             0.01             0.00           0.00             −0.01

                                               Student t

              υ    78.79            20.23            45.40         300.00              41.06
160                                                                                  Copula Methods in Finance

                  Table 5.3     Estimated α for the Frank copula with NC-t marginals

                       DAX 30          S&P 500             GER10y             USA10y             DEM/USD

      DAX 30              −
      S&P 500            5.12             −
      GER10y             1.17            1.03                 −
      USA10y             0.23            1.32                3.72               −
      DEM/USD            2.05            1.28                0.44              −1.10                   −


where x1t and x2t are the returns on the ﬁrst and second asset considered, α is the copula
parameter,  is the non-central t c.d.f., υ1 , υ2 , δ1 , δ2 are respectively the degrees of freedom
and non-centrality parameters for the two marginal distributions.
  We report, in Table 5.3, the MLE estimates for the α parameter for the Frank copula. We
draw the readers’ attention to the substantial stability of these estimates between central and
non-central Student t distributions. All estimates are statistically signiﬁcant.

                                     5.4 CML METHOD
We wish to remark that the copula parameters may be estimated without specifying the
marginals. In fact, another estimation method consists in transforming the sample data
{x1t , x2t , . . . , xnt }Tt=1 into uniform variates {u1t , u2t , . . . , unt }Tt=1 and then estimating the
copula parameters. This method may be described as follows:

1. First estimate the marginals using the empirical distributions (without assumptions on
   the parametric form for each of them), i.e. F̂i (xit ) with i = 1, . . . , n.
2. Estimate via MLE the copula parameters
                                        T
                                        
                     θˆ2 = ArgMaxθ 2          ln c(F̂1 (x1t ), F̂2 (x2t ), . . . , F̂n (xnt ); θ 2 )       (5.24)
                                        t=1

This method is called the Canonical Maximum Likelihood or CML. In this case, the CML
estimator could be viewed as an MLE, given the observed margins.

5.4.1 Application: estimation of the correlation matrix for a Gaussian copula
Using the dataset of the previous example, we wish to estimate the correlation matrix
parameter of the Gaussian copula (MGC) with the CML method. We proceed as follows.

1. Transform the original data into Gaussian data:
     (i) estimate the empirical distribution functions (uniform transformation) using order
         statistics;
    (ii) generate Gaussian values by applying the inverse of the normal distribution to the
         empirical distribution functions.
2. Compute the correlation matrix of the transformed data.

  The estimated correlation matrix is shown in Table 5.4.
Estimation and Calibration from Market Data                                                                        161

                  Table 5.4        Estimated correlation matrix via CML method for MGC

                         DAX 30            DEM/USD                    GER10y           S&P 500     USA10y

    DAX 30                1
    DEM/USD               0.3035              1
    GER10y                0.1998              0.0551                   1
    S&P 500               0.6494              0.1501                   0.1941          1
    USA10y                0.0019             −0.2144                   0.4850          0.1585            1


                        5.5        NON-PARAMETRIC ESTIMATION
In this section we no longer assume a particular parametric copula. Our interest is in
modeling the dependence structure with consistency to ﬁnd, for example, an appropriate
non-parametric method to estimate the copula form that is going to converge (in a certain
formal probabilistic sense) to the underlying dependence structure.

5.5.1 The empirical copula
Here we present the notion of the empirical copula introduced by Deheuvels (1979, 1981).
  Let Xt = (X1t , X2t , . . . , Xnt ) ∈ n be an i.i.d. sequence with (continuous) c.d.f. F and
(continuous) margins Fj . Let {x1(t) , x2(t) , . . . , xn(t) } be the order statistic and let {r1(t) , r2(t) , . . . ,
                                                                                                        (r t )
rn(t) } be the rank statistic of the sample, which are linked by the relationship xn n = xnt ,
t = 1, 2, . . . , T .

Deﬁnition 5.1 [Deheuvels’ empirical copula] The empirical copula deﬁned on the lattice
                                                                         
                        t1 t2       tn
                  =       , ,...,       : 1 ⩽ j ⩽ n, tj = 0, 1, . . . , T      (5.25)
                        T T         T
is the following function:

                                                                  1   t      
                                                                       T     n
                                    t1 t2     tn
                              Ĉ      , ,...,                 =       1 rj ⩽ tj                                  (5.26)
                                    T T       T                   T
                                                                      t=1 j =1

where 1 is the indicator function that takes value equal to 1 when its argument condition is
satisﬁed.
   Deheuvels (1978, 1981) proves that the empirical copula converges uniformly to the
underlying copula.

  The analog of the Radon–Nikodym density for the empirical copula is the following
empirical copula frequency, as deﬁned by Nelsen (1999):

                 t1 t2     tn             
                                          2 
                                            2                 
                                                              2            n
            ĉ     , ,...,            =                 ...           (−1)   j =1 ij
                 T T       T
                                          i1 =1 i2 =1         in =1

                                                   t1 − i1 + 1 t2 − i2 + 1       tn − in + 1
                                          × Ĉ                ,            ,...,                                 (5.27)
                                                        T           T                 T
162                                                                                          Copula Methods in Finance

  Nelsen (1999) notes that the concept of empirical copula permits us to deﬁne the sample
version of many dependence measures and, also, the sample version of other concepts
expressed in terms of copulas. Besides that, empirical copulas may also be used to construct
non-parametric tests for independence (Deheuvels, 1981).

Polynomial approximation for copula

It is possible to use certain polynomial approximations that lead to a stronger convergence
than uniform convergence in order to estimate the underlying dependence structure. For
example, by using the Bernstein polynomial

                                                             n i
                                     Bi,n (x) =                x (1 − x)n−i                                               (5.28)
                                                             i

we can deﬁne a Bernstein copula as follows:
                                         n 
                                          n                 n
                                                             
       BT (C)(u1 , u2 , . . . , un ) =                 ...           Bt1 ,T (u1 ) · Bt2 ,T (u2 ) · · · · · Btn ,T (un )
                                         t1 =1 t2 =1         tn =1

                                                   t1 t2     tn
                                         × Ĉ        , ,...,                                                              (5.29)
                                                   T T       T

The Bernstein copula uniformly converges to the underlying copula (refer to Li et al., 1997).

5.5.2 Kernel copula
In statistics a lot of non-parametric estimation methods are based on a kernel structure (see
Hardle, 1990, for a further explanation). Kernel means a functional form, usually chosen
for its smooth properties, that is used as the building block to get the desired estimator.
   Scaillet (2000) proposes a kernel-based approach to apply to a copula setup, that has
the advantage of providing a smooth differentiable estimate of the copula function without
assuming any particular parametric a priori on the dependence structure between marginals.
The approach is developed in the context of multivariate stationary processes satisfying
strong mixing conditions (see Serﬂing, 1980 and Shao, 1999). Once estimates of copulas
(and their derivatives) are available, other concepts expressed in terms of copulas may be
empirically analyzed. The most important point is the need for differentiability that dictates
the choice of a kernel approach.
   Non-parametric estimators of copulas may also lead to testing procedures for inde-
pendence between margins in the same spirit as kernel-based methods to test for serial
dependence for a univariate stationary time series (see Tjostheim, 1996).
   Estimating a copula is indeed estimating values taken by a c.d.f. at m distinct points in
  n by the formula:


                   C(u1 , u2 , . . . , un ) = F (F1−1 (u1 ), F2−1 (u2 ), . . . , Fn−1 (un ))                              (5.30)

where F1−1 , F2−1 , . . . , Fn−1 are quasi-inverses of F1 , F2 , . . . , Fn .
Estimation and Calibration from Market Data                                                            163

   For given uij ∈ (0, 1) , i = 1, 2, . . . , m; j = 1, 2, . . . , n, we assume that the c.d.f. Fj of
Yj t is such that equation Fj (y) = uij admits a unique solution denoted by ξij . As commonly
known, kernels are real bounded and symmetric functions kij (x) on such that
                   
                       kij (x) dx = 1,          i = 1, 2, . . . , m;          j = 1, 2, . . . , n    (5.31)

and
                                         n
                                                     xj
                           Ki (x; h) =          kij           ,     i = 1, 2, . . . , m              (5.32)
                                                      hj
                                         j =1


where the bandwidth h is a diagonal matrix with elements {hj }j =1,2,...,n and determinant
|h|, while the individual bandwidth hj are positive functions of T such that

                                               1
                                     |h| +         → 0 as T → ∞                                      (5.33)
                                             T |h|

  The p.d.f. of Yj t at yij , i.e. fj (yij ), will be estimated by

                                                      T
                                             1                   yij − Yj t
                               fˆj yij =           kij                                               (5.34)
                                              T hj                      hj
                                                      t=1

while the joint p.d.f. of Yt at yi = (yi1 , yi2 , . . . , yin ) will be estimated by

                                T                                         T    n
                             1                       1                               yij − Yj t
              fˆ (yi ) =         Ki (yi − Yt ; h) =        kij                                       (5.35)
                           T |h|                    T |h|                                   hj
                               t=1                                    t=1 j =1


  Hence, the estimator of the c.d.f. of Yj t at distinct points yij is obtained as
                                                       yij
                                          
                                      Fˆj yij =               fˆj (x) dx                             (5.36)
                                                       −∞

while estimators of the c.d.f. of Yt at yi = (yi1 , yi2 , . . . , yin ) will be obtained as
                                             yi1  yi2            yin
                               F̂ (yi ) =                   ...           fˆ(x) dx                   (5.37)
                                             −∞       −∞           −∞
                                                      2
  If a single Gaussian kernel kij (x) = ϕ(x) = √1 exp − x2 is adopted, we get
                                                              2π

                                                       T
                                               1    yij − Yj t
                               Fˆj yij =                                                            (5.38)
                                                T hj       hj
                                                      t=1
164                                                                                     Copula Methods in Finance

and
                                                           T    n
                                                   1    yij − Yj t
                                  F̂ (yj ) =                                                               (5.39)
                                                 T |h|        hj
                                                           t=1 j =1


where ϕ and  denote, respectively, the p.d.f. and c.d.f. of a standard Gaussian variable.
  In order to estimate the copula at distinct points ui , i = 1, 2, . . . , m with uij < ulj for
i < l, we use a “plug-in” method as follows:
                                                                
                                                   Ĉ(ui ) = F̂ ξˆi                                         (5.40)

where                                                                                               
            ξ̂i = ξ̂i1 , ξ̂i2 , ξ̂i3 , . . . , ξ̂in        and ξ̂ij = infy∈         y : Fˆj (y) ⩾ uij

   The estimate ξ̂ij corresponds to a kernel estimate of the quantile of Yj t with probability
level uij .
   Scaillet (2000), following Robinson (1983), derives the asymptotic distribution (asymp-
totic normality), under regularity conditions, for these kernel estimators, and also derives
the asymptotic distribution of kernel estimators of some bivariate dependence measures.
   Indeed, Kendall’s τ , Spearman’s ρ, Gini’s γ , Blomqvist’s β have been written in copula
terms in Chapter 3. Also Schweitzer–Wolff’s σ and Hoeffding’s φ may be expressed in
terms of copula as follows:
                                         
                             σ = 12                |C(u1 , u2 ) − u1 u2 | du1 du2                           (5.41)
                                              I2
                                             
                             φ = 3 10                    (C(u1 , u2 ) − u1 u2 )2 du1 du2                    (5.42)
                                                   I2


   Other dependence concepts may also be expressed in terms of copula: as we saw in
Chapter 3, positive quadrant dependency, the left tail decreasing property and upper tail
dependency.
   Once a copula is empirically estimated, it is easy to compute the kernel counterpart of
all of these dependence measures, and all other properties may be checked at least locally.
   Scaillet (2000) proves, under regular conditions (Robinson, 1983), that kernel estimators
of Spearman’s rho, Gini’s gamma and Blomqvist’s beta are asymptotically independent
standard normal random variables.
   Finally, we note that this non-parametric method may be combined with other parametric
methods for estimating a copula and margins (commonly known as mixed estimators).


Application to equity market data
We are going to use this approach to estimate the copula using the previous sample dataset.
Our ﬁnding is that this approach provides a better ﬁt to the data and is also more ﬂexible.
Estimation and Calibration from Market Data                                                    165

                                        Contours of Estimated Copula - 1% 5% 25% 50% 75% 80%


                                 3

                                 2
              10-Year US Bond



                                 1

                                 0

                                −1

                                −2


                                  −12 −10       −8   −6   −4    −2   0    2    4    6    8
                                                               S&P 500

    Figure 5.1 Contours for the non-parametric copula (contours of S&P 500–US bond 10y)


                                        Contours of Estimated Copula - 1% 5% 25% 50% 75% 80%

                                10


                                 5


                                 0
              DAX




                                 −5


                                −10


                                      −12 −10   −8   −6   −4    −2   0    2    4     6    8
                                                               S&P 500

        Figure 5.2 Contours for the non-parametric copula (contours of S&P 500–DAX)

The kernel approach requires a long series of data but it permits a more efﬁcient estimate
of the copula structure implied by the sample observations.
   Figures 5.1 and 5.2 show the level curves from a copula estimated non-parametrically. It
can be seen that while the estimated dependence between the two equity indexes is fairly
regular, the dependence between total return on bonds and stock index is more irregular. An
interesting point to be noted is that the normal distribution approximates well the middle of
the distribution but performs very poorly on the tails; this point may be seen by looking at
the lower contour and its irregular form.
166                                                                                 Copula Methods in Finance

                 Table 5.5       Spearman’s rho calculated using non-parametric copula

                       DAX 30            S&P 500         GER10y              USA10y         DEM/USD

      DAX 30               −
      S&P 500             0.54              −
      GER10y              0.14             0.11             −
      USA10y              0.02             0.16            0.43                 −
      DEM/USD             0.26             0.17            0.01                −0.15             −



   In Table 5.5 we compute Spearman’s rho implied by the non-parametric estimated copula.
Readers will note that there are very small differences between the implied measures and
their sample counterparts.2
   In the following we report the graphs for the estimation of the PQD measures, the implied
c.d.f.s for maximum and minimum, and also some other results such as the left tail decreasing
property described in Chapter 3 (Figures 5.3–5.6). We also present the trace of a copula,
deﬁned as a function C(u, u) = h(u) of a single variable u ∈ [0, 1].
   We note that, at ﬁrst sight, the form of each copula may seem similar, but the readers
should observe that each copula extends to different interval values for each axis. So, a
given region in the plane has different probability induced by each estimated kernel copula,
though their form is similar.
   The same argument applies to all other diagrams.
   We also report a trace of the non-parametric estimate for a copula for a trivariate case
(S&P 500, 10-year US bond and 10-year German bond) whose values are reported in
Figure 5.7.

Application to value at risk for an asset portfolio

Given these preliminary results we move on to estimate the value at risk, given a conﬁdence
level θ , for a portfolio of n assets. For instance, we consider a portfolio of two assets. Let
x1 and x2 be their respective returns, and β ∈ (0, 1) the allocation weight, so the portfolio
return is given by zt = βx1t + (1 − β) x2t where, omitting the subscript t,

        F (x1 , x2 ) = Pr(X1 ⩽ x1 , X2 ⩽ x2 )
                    = Pr(F1 (X1 ) ⩽ F1 (x1 ) , F2 (X2 ) ⩽ F2 (x2 )) = C(F1 (x1 ) , F2 (x2 ))

and by derivation, we express in term of p.d.f.s:

                                                                      
                                                                      2
                             f (x1 , x2 ) = c(F1 (x1 ), F2 (x2 )) ·          fj (xj )
                                                                      j =1


where c is the copula-density and f is the standard univariate probability density function.

2 We discuss the sample dependence measure in the next section by introducing another useful estimation method.
Estimation and Calibration from Market Data                                                                                                                            167

                                                           Estimated Copula
                                                                                                                     1
                                                                                                                    0.9
                                   1                                                                                0.8

                                  0.8                                                                               0.7
 C(F1(y1),F2(y2))




                                                                                                                    0.6




                                                                                                          C (u,u)
                                  0.6
                                                                                                                    0.5
                                  0.4
                                                                                                                    0.4
                                  0.2                                                                               0.3

                                   0                                                                                0.2
                                  10
                                                                                                                    0.1
                                         0                                                       10
                                                                                           5                         0
                                                                                    0
                                                   −10                      −5                                            0   0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9      1
                                                                    −10
                                              y2         −20 −15                                                                                  u
                                                                              y1
                                                                                                      (a) Trace C (u, u)

                                                     Positive Quadrant Dependence
                                                                                                                     1
                                                                                                                    0.9
 C(F1(y1),F2(y2))-(F1(y1)F2(y2)




                                   0.1                                                                              0.8

                                  0.08                                                                              0.7
                                                                                                                    0.6
                                                                                                          FMIN(a)




                                  0.06
                                                                                                                    0.5
                                  0.04
                                                                                                                    0.4
                                  0.02                                                                              0.3
                                    0                                                                               0.2
                                   10
                                                                                                 10                 0.1
                                         0                                                 5
                                                                                    0                                0
                                                   −10                      −5                                       −12 −10       −8   −6   −4       −2   0   2   4   6
                                                                     −10
                                                          −20 −15                                                                                 a

                                                                                                      (b) Distribution of min

                                                    Left Tail Dependence of Y1 in Y2
                                                                                                                     1
                                                                                                                    0.9
                                  0.8
 C(u1,u2)/u2-dC(u1,u2)/du2




                                                                                                                    0.8
                                                                                                                    0.7
                                  0.6
                                                                                                                    0.6
                                                                                                          FMAX(a)




                                  0.4                                                                               0.5
                                                                                                                    0.4
                                  0.2
                                                                                                                    0.3

                                   0                                                                                0.2
                                   1                                                                                0.1
                                                                                                 1
                                                                                           0.8                       0
                                             0.5                                    0.6
                                                                              0.4                                    −12 −10       −8   −6   −4       −2   0   2   4   6
                                                                      0.2                                                                         a
                                              u2            0   0
                                                                              u1
                                                                                                      (c) Distribution of max


                                                         Figure 5.3         Estimated kernel copula for DAX and SPX

                                                          Measure of association implied by the copula

                                                          Spearman’s Rho                Blomqvist’s Beta                      Gini’s Gamma
                                                          0.5396                        0.3737                                0.4324
168                                                                                                                                             Copula Methods in Finance

                                                          Estimated Copula
                                                                                                                             1
                                                                                                                            0.9
                                    1                                                                                       0.8
                                  0.8                                                                                       0.7
 C(F1(y1),F2(y2))




                                                                                                                            0.6
                                  0.6




                                                                                                               C (u,u)
                                                                                                                            0.5
                                  0.4
                                                                                                                            0.4
                                  0.2                                                                                       0.3
                                    0                                                                                       0.2
                                    4
                                                                                                                            0.1
                                         2                                                            10
                                             0                                              5                                0
                                                                                   0
                                                    −2                      −5                                                    0   0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9      1
                                                                    −10
                                             y2           −4 −15                                                                                       u
                                                                             y1
                                                                                                           (a) Trace C (u, u)

                                                   Positive Quadrant Dependence
                                                                                                                             1

                                                                                                                            0.9
 C(F1(y1),F2(y2))-(F1(y1)F2(y2)




                                  0.06                                                                                      0.8
                                                                                                                            0.7
                                  0.04
                                                                                                                  FMIN(a)


                                                                                                                            0.6
                                  0.02
                                                                                                                            0.5
                                     0                                                                                      0.4

                                                                                                                            0.3
                                  −0.0
                                     4                                                                                      0.2
                                         2                                                            10
                                              0                                             5                               0.1
                                                                                   0
                                                    −2                      −5                                                −2.5 −2 −1.5 −1 −0.5    0    0.5   1   1.5   2   2.5
                                                                    −10                                                                               a
                                              y2          −4 −15
                                                                             y1
                                                                                                           (b) Distribution of min

                                                   Left Tail Dependence of Y1 in Y2
                                                                                                                            0.8

                                                                                                                            0.7
                                   0.5
 C(u1,u2)/u2-dC(u1,u2)/du2




                                                                                                                            0.6
                                    0
                                                                                                                            0.5
                                                                                                               FMAX(a)




                                  −0.5
                                                                                                                            0.4
                                   −1
                                                                                                                            0.3
                                  −1.5
                                                                                                                            0.2
                                   −2
                                    1                                                                                       0.1
                                                                                                       1
                                             0.5                                                0.8                          0
                                                                                      0.6
                                                                             0.4                                             −2.5 −2 −1.5 −1 −0.5      0   0.5   1   1.5   2   2.5
                                                                      0.2
                                                            0   0                                                                                      a
                                              u2                             u1

                                                                                                           (c) Distribution of max


                                                 Figure 5.4 Estimated kernel copula for SPX and 10-year US bonds

                                                          Measure of association implied by the copula

                                                          Spearman’s Rho               Blomqvist’s Beta                               Gini’s Gamma
                                                          0.1595                       0.1711                                         0.1517
Estimation and Calibration from Market Data                                                                                                                                169

                                                          Estimated Copula
                                                                                                                         1
                                                                                                                        0.9
                                    1                                                                                   0.8
                                  0.8                                                                                   0.7
 C(F1(y1),F2(y2))




                                                                                                                        0.6
                                  0.6




                                                                                                              C (u,u)
                                                                                                                        0.5
                                  0.4
                                                                                                                        0.4
                                  0.2                                                                                   0.3
                                    0                                                                                   0.2
                                    4                                                                                   0.1
                                         2                                                            4
                                              0                                             2                            0
                                                                                  0                                           0    0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9      1
                                                    −2                −2
                                                          −4 −4                                                                                        u
                                             y2                              y1
                                                                                                          (a) Trace C (u, u)

                                                   Positive Quadrant Dependence
                                                                                                                         1
                                                                                                                        0.9
 C(F1(y1),F2(y2))-(F1(y1)F2(y2)




                                   0.1                                                                                  0.8
                                  0.08                                                                                  0.7
                                                                                                                        0.6
                                                                                                              FMIN(a)




                                  0.06
                                                                                                                        0.5
                                  0.04
                                                                                                                        0.4
                                  0.02                                                                                  0.3
                                     0                                                                                  0.2
                                     4
                                         2                                                            4                 0.1
                                              0                                             2                            0
                                                    −2                            0                                           −2    −1.5   −1   −0.5   0   0.5   1   1.5    2
                                                                      −2
                                              y2          −4 −4                                                                                        a
                                                                             y1
                                                                                                          (b) Distribution of min

                                                   Left Tail Dependence of Y1 in Y2
                                                                                                                        0.9

                                                                                                                        0.8
                                   0.5
 C(u1,u2)/u2-dC(u1,u2)/du2




                                                                                                                        0.7
                                    0                                                                                   0.6
                                                                                                              FMAX(a)




                                  −0.5                                                                                  0.5

                                   −1                                                                                   0.4

                                  −1.5                                                                                  0.3

                                                                                                                        0.2
                                   −2
                                    1                                                                                   0.1
                                                                                                      1
                                             0.5                                                0.8                      0
                                                                                      0.6                                 −2        −1.5   −1   −0.5   0   0.5   1   1.5    2
                                                                             0.4
                                                                     0.2                                                                               a
                                              u2            0   0            u1

                                                                                                          (c) Distribution of max


                                     Figure 5.5 Estimated kernel copula for 10-year German bonds and 10-year US bonds

                                                         Measure of association implied by the copula

                                                         Spearman’s Rho                Blomqvist’s Beta                            Gini’s Gamma
                                                         0.4304                        0.3402                                      0.3692
170                                                                                                                                                 Copula Methods in Finance

                                                             Estimated Copula
                                                                                                                               1
                                                                                                                              0.9
                                    1                                                                                         0.8

                                   0.8                                                                                        0.7
 C(F1(y1),F2(y2))




                                                                                                                  C (u,u)
                                                                                                                              0.6
                                   0.6
                                                                                                                              0.5
                                   0.4                                                                                        0.4
                                   0.2                                                                                        0.3

                                    0                                                                                         0.2
                                   10                                                                                         0.1
                                          0                                                              10
                                                                                               5                               0
                                                −10                                  0                                              0    0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9     1
                                                                        −5
                                                            −20 −10                                                                                          u
                                              y2                                y1
                                                                                                              (a) Trace C (u, u)

                                                     Positive Quadrant Dependence
                                                                                                                                1

                                                                                                                              0.9
 C(F1(y1),F2(y2))-(F1(y1)F2(y2)




                                   0.05                                                                                       0.8
                                   0.04                                                                                       0.7
                                   0.03
                                                                                                                    FMIN(a)


                                                                                                                              0.6
                                   0.02
                                                                                                                              0.5
                                   0.01
                                                                                                                              0.4
                                     0
                                                                                                                              0.3
                                  −0.01
                                    10                                                                                        0.2
                                          0                                                              10
                                                                                               5                              0.1
                                                    −10                              0                                           −4       −3   −2   −1   0       1   2   3   4   5
                                                                        −5
                                               y2           −20 −10                                                                                          a
                                                                                y1
                                                                                                              (b) Distribution of min

                                                     Left Tail Dependence of Y1 in Y2
                                                                                                                              0.9

                                                                                                                              0.8
                                   0.4
 C(u1,u2)/u2-dC(u1,u2)/du2




                                                                                                                              0.7
                                                                                                                              0.6
                                   0.2
                                                                                                                   FMAX(a)




                                                                                                                              0.5
                                     0
                                                                                                                              0.4

                                  −0.2                                                                                        0.3

                                                                                                                              0.2
                                  −0.4
                                     1                                                                                        0.1
                                                                                                          1
                                                                                                   0.8                          0
                                              0.5                                        0.6                                        −4    −3   −2   −1   0       1   2   3   4   5
                                                                                0.4
                                                                        0.2                                                                                  a
                                               u2             0   0
                                                                                u1
                                                                                                              (c) Distribution of max


                                                          Figure 5.6    Estimated kernel copula for DEM/USD and SPX

                                                             Measure of association implied by the copula

                                                             Spearman’s Rho               Blomqvist’s Beta                               Gini’s Gamma
                                                             0.1692                       0.1470                                         0.1606
Estimation and Calibration from Market Data                                                           171

                    spx10   usbond10   ger10                 spx10   usbond10   ger10
                      u1       u2        u3    C(u1,u2,u3)     u1       u2        u3    C(u1,u2,u3)
                     0.01     0.01      0.01     0.0000       0.51     0.51      0.51     0.1619
                     0.02     0.02      0.02     0.0000       0.52     0.52      0.52     0.1715
                     0.03     0.03      0.03     0.0000       0.53     0.53      0.53     0.1834
                     0.04     0.04      0.04     0.0001       0.54     0.54      0.54     0.1895
                     0.05     0.05      0.05     0.0002       0.55     0.55      0.55     0.1984
                     0.06     0.06      0.06     0.0004       0.56     0.56      0.56     0.2067
                     0.07     0.07      0.07     0.0006       0.57     0.57      0.57     0.2181
                     0.08     0.08      0.08     0.0009       0.58     0.58      0.58     0.2284
                     0.09     0.09      0.09     0.0016       0.59     0.59      0.59     0.2358
                     0.10     0.10      0.10     0.0019       0.60     0.60      0.60     0.2477
                     0.11     0.11      0.11     0.0022       0.61     0.61      0.61     0.2578
                     0.12     0.12      0.12     0.0028       0.62     0.62      0.62     0.2681
                     0.13     0.13      0.13     0.0039       0.63     0.63      0.63     0.2785
                     0.14     0.14      0.14     0.0044       0.64     0.64      0.64     0.2933
                     0.15     0.15      0.15     0.0056       0.65     0.65      0.65     0.3039
                     0.16     0.16      0.16     0.0067       0.66     0.66      0.66     0.3186
                     0.17     0.17      0.17     0.0084       0.67     0.67      0.67     0.3287
                     0.18     0.18      0.18     0.0099       0.68     0.68      0.68     0.3469
                     0.19     0.19      0.19     0.0112       0.69     0.69      0.69     0.3553
                     0.20     0.20      0.20     0.0142       0.70     0.70      0.70     0.3699
                     0.21     0.21      0.21     0.0146       0.71     0.71      0.71     0.3884
                     0.22     0.22      0.22     0.0178       0.72     0.72      0.72     0.3970
                     0.23     0.23      0.23     0.0189       0.73     0.73      0.73     0.4098
                     0.24     0.24      0.24     0.0218       0.74     0.74      0.74     0.4283
                     0.25     0.25      0.25     0.0239       0.75     0.75      0.75     0.4486
                     0.26     0.26      0.26     0.0267       0.76     0.76      0.76     0.4575
                     0.27     0.27      0.27     0.0299       0.77     0.77      0.77     0.4818
                     0.28     0.28      0.28     0.0339       0.78     0.78      0.78     0.4979
                     0.29     0.29      0.29     0.0368       0.79     0.79      0.79     0.5134
                     0.30     0.30      0.30     0.0406       0.80     0.80      0.80     0.5284
                     0.31     0.31      0.31     0.0440       0.81     0.81      0.81     0.5523
                     0.32     0.32      0.32     0.0473       0.82     0.82      0.82     0.5774
                     0.33     0.33      0.33     0.0516       0.83     0.83      0.83     0.5908
                     0.34     0.34      0.34     0.0568       0.84     0.84      0.84     0.6032
                     0.35     0.35      0.35     0.0614       0.85     0.85      0.85     0.6228
                     0.36     0.36      0.36     0.0657       0.86     0.86      0.86     0.6569
                     0.37     0.37      0.37     0.0728       0.87     0.87      0.87     0.6740
                     0.38     0.38      0.38     0.0766       0.88     0.88      0.88     0.6938
                     0.39     0.39      0.39     0.0797       0.89     0.89      0.89     0.7167
                     0.40     0.40      0.40     0.0878       0.90     0.90      0.90     0.7425
                     0.41     0.41      0.41     0.0921       0.91     0.91      0.91     0.7680
                     0.42     0.42      0.42     0.1002       0.92     0.92      0.92     0.7919
                     0.43     0.43      0.43     0.1036       0.93     0.93      0.93     0.8180
                     0.44     0.44      0.44     0.1125       0.94     0.94      0.94     0.8505
                     0.45     0.45      0.45     0.1190       0.95     0.95      0.95     0.8669
                     0.46     0.46      0.46     0.1236       0.96     0.96      0.96     0.9064
                     0.47     0.47      0.47     0.1309       0.97     0.97      0.97     0.9226
                     0.48     0.48      0.48     0.1456       0.98     0.98      0.98     0.9462
                     0.49     0.49      0.49     0.1464       0.99     0.99      0.99     0.9872
                     0.50     0.50      0.50     0.1538


               Figure 5.7 Trace of the non-parametric copula for a trivariate case


  Hence, the c.d.f. for the portfolio return Z is given by:


          H(z) = Pr (Z ⩽ z) = Pr(βX1 + (1 − β) X2 ⩽ z)
                     +∞  1 z− 1−β x2                                  
                             β    β
                                        c(F1 (x1 ), F2 (x2 ))f1 (x1 ) dx1 f2 (x2 ) dx2
                      −∞           −∞


which is equivalent to the expression in section 2.5 of Chapter 2.
   As recalled there, the VaR for the portfolio, at a conﬁdence level θ ∈ (0, 1) and for a
given weight β ∈ (0, 1), is the solution z∗ of the equation H(z∗ ) = θ . This result may be
extended straight to an n-variate case with the constraint that the n weights sum to 1.
   We calculate the VaR both using the standard assumption that returns are distributed
jointly as a normal and returns are jointly distributed as implied by our non-parametrically
estimated copula.
   We ﬁrst estimate the copula using 250 days and with the same sample we estimate the
VarCov matrix needed to calculate the normal VaR. From the copula we calculate the VaR.
We then repeat the operation rolling the sample.
172                                                               Copula Methods in Finance

          2.5
                                                                       Copula
            2                                                          Normal
                                                                       Ptf return

          1.5


            1


          0.5


            0


         −0.5


           −1


         −1.5


           −2
                0   100   200   300    400   500    600   700    800      900       1000

Figure 5.8 VaR with copulas (VaR at 99% for portfolio composed of 30% S&P 500, 70% US
bond 10y)

   We decided to use daily data because, to give to this exercise reasonable reliability, we
need to perform the calculations on many samples. Using daily data we have a total of 1000
subsamples from August 18, 1997 to June 15, 2001.
   Some graphical results are displayed in Figures 5.8, 5.9 and 5.10. It can be seen from
these diagrams that the VaR calculated from the copula is able to capture the tail fatness
and other non-normality features found in the data and, as expected, is overperformed with
respect to the standard normal VaR.
   The results we found point in the direction that, as we add in the portfolio more of the
leptokurtotic asset and as we require a greater conﬁdence level, the VaR based on the copula
function performs better than the one calculated under normality.

          5.6       CALIBRATION METHOD BY USING SAMPLE
                         DEPENDENCE MEASURES
We introduce an idea pointed out by Genest and MacKay (1986) to calibrate an Archimedean
copula, i.e. how to estimate the parameter α once a particular Archimedean copula has been
chosen. This method is very simple compared with the previous ones, but it is limited to a
bivariate setting because it makes inference on the dependence structure of the multivariate
model from a chosen dependence coefﬁcient.
   First, sum up all sample information in the consistent estimator of Kendall’s τ obtained
from the two series S1t and S2t with t = 1, . . . , T as follows:
                                2                              
                      τ̂ =               sgn S1i − S1j S2i − S2j                      (5.43)
                            T (T − 1)
                                      i<j

where the sign function is deﬁned as in the list of symbols.
Estimation and Calibration from Market Data                                                 173

         3
                                                                        Copula
                                                                        Normal
         2                                                              Ptf return



         1



         0



        −1



        −2



        −3



        −4
             0       100   200    300   400    500   600    700   800      900       1000

Figure 5.9       VaR with copulas (VaR at 99% for portfolio composed of 50% S&P 500, 50% US
bond 10y)


         4
                                                                        Copula
         3                                                              Normal
                                                                        Ptf return
         2

         1

         0

        −1

        −2

        −3

        −4

        −5

        −6
             0       100   200    300   400    500   600    700   800      900       1000

Figure 5.10 VaR with copulas (VaR at 99% for portfolio composed of 80% S&P 500, 20% US
bond 10y)
174                                                                             Copula Methods in Finance

   Since we are considering a one-parameter family of Archimedean copulas, we use the
relationship between α and τ in order to infer an estimate for the copula parameter α.
We also can check for different Archimedean copulas how each of them ﬁts the data by
comparison with the empirical copula. This ﬁtting test is performed through an (unobserved)
auxiliary variable, W = F (S1 , S2 ), where F is the (unknown) joint distribution function of
the two variables S1 and S2 . We use the following algorithm based on Genest and Rivest
(1993) (also described by Frees & Valdez, 1998):

• Denote by K(w) the distribution of W , K(w) : [0, 1] → [0, 1] and that for Archimedean
  copulas whose generator is indicated by ψα

                                                               1
                                     K(w) = w −                                                        (5.44)
                                                       (∂ ln ψα (w))/∂w

  hence, for each one-parameter Archimedean copula, construct an estimate of K substi-
  tuting the estimate, previously obtained, for α.
• Deﬁne
                                            
                              Card S1j , S2j : S1j < S1i , S2j < S2i
                        Zi =                                                    (5.45)
                                                T −1

  and construct an empirical version of K(w) as:
                                                     T
                                                        i=1 1(w − Zi )
                                        KT (w) =                                                       (5.46)
                                                              T

  where 1 is the commonly known indicator function.
• Finally, compare KT and Kα̂ (w) graphically and via mean-square error.3

   This method is simple to use and very easy to perform. Its main disadvantage is that it
sums up all data information in the empirical, though consistent, estimator of the chosen
association measure. Obviously, besides neglecting all other potential sources of statistical
information that come from the data, it is strongly dependent on the particular associative
measure chosen.
   This method may be considered an estimation criteria based on sample dependence mea-
sures.

                                       5.7 APPLICATION
Now we want to compare the empirical estimates of some dependence measures for the
ﬁve series considered in our dataset. The readers should refer to Gibbons (1992) Chap. 12
for a formal deﬁnition and a more extensive explanation of measures of association for
bivariate samples (sample estimates, large sample distribution, important relation between
these measures, etc.); and to Chap. 13 for an extension in multiple classiﬁcation.

3 This method has been extended to the n-variate case for Archimedean copulas by Barbe et al. (1996), Frees and
Valdez (1998) as reported by Durrleman, Nikeghbali and Roncalli (2000a).
Estimation and Calibration from Market Data                                                    175

                                  Table 5.6 Sample Spearman’s rho

                       DAX 30          S&P 500      GER10y        USA10y       DEM/USD

    DAX 30                −
    S&P 500              0.67              −
    GER10y               0.20             0.18         −
    USA10y               0.04             0.13        0.49           −
    DEM/USD              0.31             0.19        0.06          −0.22            −


        Table 5.7    Spearman’s rho calculated from Frank copula with NC Student t margins

                       DAX 30          S&P 500      GER10y        USA10y       DEM/USD

    DAX 30                 −
    S&P 500               0.60             −
    GER10y                0.09            0.07          −
    USA10y               −0.08            0.12         0.46          −
    DEM/USD               0.24            0.11        −0.04         −0.08            −


  Using the same data as in the previous examples (sections 3.1 and 5.2.1), we compute
the sample Spearman’s rho, and obtain the values given in Table 5.6. We also report in
Table 5.7 the same index based on the estimated α from the Frank copula function. More
precisely the relation that we use is
                                                        
                                     12
                             ρS =       D2 (−α) − D1 (−α) − 1                    (5.47)
                                      α

where D denotes the Debye function.4 Rho depends, via a one-to-one relationship, on the
Frank copula parameter α that we estimated via maximum likelihood. The copula is ﬁtted
for each pair of assets and the rho coefﬁcient is then calculated. Most of the time this
measure is quite close to the sample counterparty, but there are two notable exceptions: the
correlation between the DAX index and the 10-year US bond is estimated to be negative
when the copula is used, while the sample counterparty is (slightly) positive. The same can
be said of the correlation between the 10-year German bond and the exchange rate.
   Like above, we report in Table 5.8 some results obtained for Kendall’s tau. Also, Kendall’s
tau (Table 5.9) is linked to α from the Frank copula, as recalled in Chapter 3:

                                            4
                                      τ=      {1 − D1 (−α)} − 1                              (5.48)
                                            α
  In this case the estimated τ coefﬁcient is closer to its sample counterparty than previously
happened for Spearman’s rho.
  For the sake of completeness we also report the Pearson’s correlation matrix in Table 5.10.
The readers may note that this “correlation matrix” is very close to that estimated via the
CML method, assuming a Gaussian copula.

4 The Debye functions are deﬁned in Chapter 3.
176                                                                    Copula Methods in Finance

                                Table 5.8 Sample Kendall’s tau

                   DAX 30         S&P 500        GER10y        USA10y         DEM/USD

      DAX 30          −
      S&P 500        0.44            −
      GER10y         0.13           0.12            −
      USA10y         0.03           0.14           0.35             −
      DEM/$          0.22           0.13           0.05            −0.11            −


                    Table 5.9 Kendall’s tau implied by α from Frank copula

                    DAX 30         S&P 500        GER10y           USA10y      DEM/USD

      DAX 30           −
      S&P 500         0.47            −
      GER10y          0.13           0.12            −
      USA10y          0.03           0.15           0.38            −
      DEM/USD         0.23           0.14           0.05           −0.13             −


                                Table 5.10   Pearson correlation

                    DAX 30         S&P 500        GER10y           USA10y      DEM/USD

      DAX 30             −
      S&P 500           0.67          −
      GER10y            0.18         0.13            −
      USA10y           −0.02         0.13           0.50            −
      DEM/USD           0.30         0.14           0.06           −0.21             −



                5.8 EVALUATION CRITERIA FOR COPULAS
Modeling a copula function means modeling both marginals and the joint distribution.
Hence, measures of goodness of ﬁt are important for evaluating the ﬁt of a proposed copula
and for testing the speciﬁcation of the marginal distributions. As discussed above, the copula
evaluation is a special case of the more general issue of evaluating multivariate density
models. For such a problem, some methods have been proposed in the literature, and no
single method has emerged as best (see Diebold et al., 1998, 1999).
   This evaluation issue may be split into two distinct problems. First, one should evaluate
the goodness of ﬁt for each margin and then the overall goodness of ﬁt given by the copula.
The former problem may be easily faced by using the probability integral transform, thus,
it has been shown that for the time series framework the sequence of probability integral
transforms of the data will be i.i.d. Uniform (0, 1) if the sequence of densities is correct.
It is worth noting that instead of testing, for each margin, whether its probability integral
transform series {ut }Tt=1 be i.i.d. Uniform (0, 1), it is equivalently possible to test that the
                                     T
transformed series zt = −1 (ut ) t=1 be i.i.d. Normal (0, 1). The latter procedure is the
most used in practice due to the large number of tests of normality available. Diebold et al.
Estimation and Calibration from Market Data                                                                      177

(1998, 1999) propose some tests to check the independence of the transformed series by
using the Kolmogorov–Smirnov test (see Shao, 1999, for the theory underlying this test)
and other ad hoc tests by using their ﬁrst moments. Diebold, Hahn and Tay (1999) extend
the results of Diebold, Gunther and Tay (1998) to the evaluation of bivariate density models
by testing the conditional c.d.f.s of X and Y .
   As pointed out by the same authors, the issue to evaluate the joint c.d.f., such as the
copula ﬁtting, is much more difﬁcult.
   Patton (2001) proposes, for a bivariate case, an extension of the “Hit” regression of
Christoffersen (1998) and Engle and Manganelli (1999) for evaluating interval forecasts,
such as VaR forecasts (for an empirical application and a discussion about such statisti-
cal tests refer to Meneguzzo & Vecchiato, 2000). Brieﬂy, the author builds up a test by
decomposing the density model into a set of region models (interval models in the basic
univariate case), each of which should be correctly speciﬁed under the null hypothesis that
the entire multivariate density is correctly speciﬁed. The evaluation problem is so recon-
ducted to test whether the model is adequately speciﬁed in each of the regions individually
via tests of each binomial hypothesis (i.e. each hit or indicator function is a Bernoulli r.v.).
Patton (2001) uses logistic regression, which yields more efﬁcient parameter estimates, to
test equivalent null hypothesis i.i.d. Bernoulli or Multinomial r.v.s. Following his method
it is possible to build up a family of tests to evaluate if the model is correctly speciﬁed in
a set of regions where it is deﬁned.

                               5.9      CONDITIONAL COPULA
In econometric theory much attention has been reserved to conditional distribution modeling,
i.e. conditional to all past information. This is mainly due to forecasting and ﬁtting purposes
(see Davidson & MacKinnon, 1993, for a further explanation).
   For the bivariate case, Patton (2001) extends the standard deﬁnition of copula to the
conditional case. Thus, he introduces the copula theory to model the time-varying conditional
dependence. His interest consists in taking into account the well-known heteroskedastic
pattern, widely reported in the ﬁnancial literature, for the volatility of any ﬁnancial return
time series (see Engle, 1996, for an excellent survey). Further, there are many situations
where the entire conditional joint density is required, such as the pricing of ﬁnancial options
with multiple underlying assets (see Rosemberg, 2000), or in the calculation of portfolio
VaR, as previously discussed (also refer to Hull & White, 1998).
   The extension to the conditional copula consists in expressing the Sklar’s theorem for
conditional c.d.f., i.e. conditional to a sigma algebra  generated by all past information.
For example, in a time series context

 t = σ {x1t−1 , x2t−1 , . . . , xnt−1 , x1t−2 , x2t−2 , . . . , xnt−2 , . . . .}       for t = 1, . . . , T (5.49)

represents the past information up to time t. Hence, Sklar’s theorem may be extended as
follows:

   Ft (x1t , x2t , . . . , xnt | t ) = Ct (F1t (x1t | t ), F2t (x2t | t ), . . . , Fnt (xnt | t ) | t )   (5.50)

where Ct has to be a copula function at all times t.
   It is worth noting that the joint distribution of (X1t , X2t , . . . , Xnt ) may differ from the
joint distribution of (X1t−1 , X2t−1 , . . . , Xnt−1 ), and so on. Thus a sample data matrix ℵ =
178                                                                    Copula Methods in Finance

{x1t , x2t , . . . , xnt }Tt=1 may not represent T observations of the same joint distribution, but
T observations from T different joint distributions. Besides that, note that the conditioning
set for each marginal and for the conditional copula is the same; hence, each transformed
variable must be independent of the information in the conditioning set of its marginal
distribution. This condition allows us to build statistical tests.
   Obviously, without assuming some functional structure it is impossible to estimate the
form of each joint distribution. So, for example, one is forced to assume that the distributions
remain constant over time, while some of their parameters vary according to some ﬁnite
difference equation.
   Patton (2001), in modeling the marginal distributions, assumes that the conditional means
evolve according to an autoregressive process, and that the conditional variances evolve
according to a GARCH(1, 1) process.
   Similarly the evolution of Ct has to be assumed. Its possible paths may be the degenerate
case (i.e. it does not vary at all), the time-varying parameters case (i.e. the functional form of
the conditional copula is ﬁxed, but its parameters evolve through time), or the complete time-
varying structure (i.e. time variation involves changes in both the form of the conditional
copula and its parameters). Nelsen (1999) shows that any convex linear combination of
copulas is also a copula, and so a time-varying functional form for the conditional copula
could be set to a convex sum (even with time-varying weights) of various types of copulas
(even time-varying parameter copulas, as previously deﬁned).

5.9.1 Application to an equity portfolio

We consider two sets of equity daily (last) price data (General Motors and IBM). In spec-
ifying the model for the bivariate density of the General Motors and the IBM stocks it is
necessary to specify three models: two models for the marginal distributions of each stock
and one model for the conditional copula.
   The model that we choose for the marginal distributions is a GARCH(1, 1) with normal
innovations, because it is the most frequently used model in the literature of applied ﬁnancial
econometrics (refer to Engle, 1996, for a survey) and is deﬁned as:

                                  Xt = εt                                                   (5.51)
                                  hxt = ωx + βx hxt−1 + αx εt−1
                                                            2
                                                                                            (5.52)
                                    εt
                                   ! x  N (0, 1)                                           (5.53)
                                     ht

where Xt represents the log-difference of the stock price.
   In our particular case it happens that we only need univariate models for the two marginal
distributions due to the fact that no lags of the other variables appear in the regression. This
will not always be so.
   In Tables 5.11 and 5.12 we present the results we have obtained using the GARCH(1, 1)
model.
   After having estimated the marginal distributions it is necessary to deﬁne the copula
function in order to obtain the joint distribution of the two stocks. In this example we
consider the Gaussian copula. We also assume that the correlation parameter of the copula,
Estimation and Calibration from Market Data                                                       179

                          Table 5.11      Results for the marginal distributions

                            IBM stock                   ωx                 βx          αx

                                                     0.0000             0.9302         0.0613
                         Standard error              0.0000             0.0000         0.0000
                  Robust standard error∗             0.0000             0.0001         0.0001
                  ∗ Quasi-likelihood standard errors which are robust to some forms of
                  mis-speciﬁcation (refer to White, 1984).


                                               Table 5.12

                          GM Stock              ωx                 βx             αx

                                               0.0000             0.9134         0.0611
                             std. error        0.0000             0.0000         0.0000
                      robust std. error        0.0000             0.0001         0.0001



                                                     Rho

                1.2

                 1

                0.8

                0.6

                0.4

                0.2

                 0


             Figure 5.11 Time-varying conditional correlation in the normal copula

                                    Results for the Gaussian copula

                                    ωρ            βρ                  αρ
                                 0.010731      −2.090770           −0.043261


ρ, varies according to the following evolution equation:
                                                                       
                                               p
                                             1
                ρt =  ωρ + βρ ρt−1 + αρ         −1 (ut−j )−1 (vt−j )                       (5.54)
                                             p
                                                           j =1

                                                                                                   −x
where (x) is the modiﬁed logistic (also known as hyperbolic tangent) function 1−e
                                                                               1+e−x
necessary to keep ρt belonging to the interval (−1, 1).
180                                                                Copula Methods in Finance

  The regression (5.53) includes the term ρt−1 in order to capture the persistence in the
dependence parameter, and the average sum
                                   p
                                1  −1
                                    (ut−j )−1 (vt−j )
                                p
                                  j =1

in order to capture any variation in dependence.
   We choose to allow a time-varying correlation coefﬁcient, instead of a constant one, for
a more general setting.
   In this empirical application, according to the data we are analyzing, we set p equal to 1
in the equation (5.54) and we report the results for the Gaussian copula below Figure 5.11
and in Figure 5.11 for the time varying correlation.
   All estimates are statistically signiﬁcant.
                               6
                 Simulation of Market Scenarios

        6.1 MONTE CARLO APPLICATION WITH COPULAS
Simulation is a widely used tool for generating draws from a lot of stochastic models. In
the following we describe some useful techniques in order to generate random scenarios
from the copula set up. We start with the elliptical copulas – the Gaussian and Student t
copulas – where the simulations are obtained easily even if their copula is not in closed form.
As for other copulas, like the Archimedean ones, we describe the conditional method. This
method may be applied for every chosen copula. Besides that, for some Archimedean copu-
las, a simple method proposed by Marshall and Olkin (1998) allows us to get simulations
easily. We offer some illustrative examples.
   Generally, once a copula has been decided upon, we may draw multivariate random
samples.

    6.2 SIMULATION METHODS FOR ELLIPTICAL COPULAS
Our attention is dedicated to the Gaussian and T copula because they are the most widely
known and applied copulas to Empirical Finance. As we have seen previously, the form of
their copula is not closed and easy to write down, but the simulation draws are very easy
to obtain.
   We provide the following algorithm in order to generate random variates from the Gaus-
sian n-copula CRN :

• Find the Cholesky decomposition A of R
• Simulate n independent random variates z = (z1 , z2 , . . . , zn ) from N (0, 1)
• Set x = Az
• Set ui = (xi ) with i = 1, 2, . . . , n and where  denotes the univariate standard normal
  distribution function
• (u1 , . . . , un ) = (F1 (t1 ), . . . , Fn (tn )) where Fi denotes the ith margin

  The Student T copula is also easy to simulate. We provide the following algorithm in
order to generate random variates from the n-copula TR,υ :

• Find the Cholesky decomposition A of R
• Simulate n i.i.d. z = (z1 , z2 , . . . , zn ) from N (0, 1)
• Simulate a random variate s from χυ2 independent of z
• Set y = √    Az
• Set x = (υ/s)y
• Set ui = Tυ (xi ) with i = 1, 2, . . . , n and where Tυ denotes the univariate Student t dis-
  tribution function
• (u1 , . . . , un ) = (F1 (t1 ), . . . , Fn (tn )) where Fi denotes the ith margin
182                                                                               Copula Methods in Finance

                             6.3      CONDITIONAL SAMPLING
A general method to simulate draws from a chosen copula is formulated by using a con-
ditional approach (conditional sampling). Just to explain this concept in a simple way, let
us assume a bivariate copula in which all of its parameters are known (ﬁxed or estimated
with some statistical methods). The task is to generate pairs (u, v) of observations of [0, 1]
uniformly distributed r.v.s U and V whose joint distribution function is C. To reach this
goal we will use the conditional distribution

                                         cu (v) = Pr(V ⩽ v|U = u)                                     (6.1)

for the r.v. V at a given value u of U .
   Basically, we know that

                                                    C(u + u, v) − C (u, v)   ∂C
      cu (v) = Pr(F2 ⩽ v|F1 = u) = lim                                      =    = Cu (v)             (6.2)
                                            u→0            u                ∂u
where Cu (v) is the partial derivative of the copula. We know that cu (v) is a non-decreasing
function and exists for almost all v ∈ [0, 1].
  With this result at hand, we generate the desired pair (u, v) in the following way:

• Generate two independent uniform r.v.s (u, w) ∈ [0, 1]. u is the ﬁrst draw we are looking
  for.
• Compute the (quasi-)inverse function of cu (v). This will depend on the parameters of the
  copula and on u, which can be seen, in this context, as an additional parameter of cu (v).
  Set v = cu−1 (w) to obtain the second desired draw.1

The general procedure in a multivariate setting is as follows:

• Deﬁne Ci = C(F1 , F2 , . . . , Fi , 1, 1, . . . , 1) for i = 2, 3, . . . , n.
• Draw F1 from the uniform distribution U (0, 1).
• Next, draw F2 from C2 (F2 |F1 ).
• More generally, draw Fn from Cn (Fn |F1 , . . . , Fn−1 ).

Putting it differently, let us consider the general setting for an n-copula C = C(u1 , u2 , . . . , un )
and let Ck (u1 , u2 , . . . , uk , 1, . . . , 1) for k = 2, . . . , n − 1 denote the k-dimensional margins
of C, with C1 (u1 ) = u1 and Cn (u1 , u2 , . . . , un ) = C(u1 , u2 , . . . , un ).
   Since U1 , U2 , . . . , Un have joint distribution function C, then the conditional distribution
of Uk , given the values of U1 , . . . , Uk−1 , is given by

               Ck (uk |u1 , . . . , uk−1 ) = Pr(Uk ⩽ uk |U1 = u1 , . . . , Uk−1 = uk−1 )
                                                 [∂ k−1 Ck (u1 , . . . , uk )]/[∂u1 . . . ∂uk−1 ]
                                          =                                                           (6.3)
                                              [∂ k−1 Ck−1 (u1 , . . . , uk−1 )]/[∂u1 . . . ∂uk−1 ]

with k = 2, . . . , n. Obviously we assume that both the numerator and the denominator exist
and that the denominator is not zero. Hence the algorithm may be rewritten as:

1 Nelsen (1999, p. 35) calls this function the quasi-inverse of c .
                                                                 u
Simulation of Market Scenarios                                                                              183

• Simulate a random variate u1 from U (0, 1)
• Simulate a random variate u2 from C2 (·|u1 )
• ...
• Simulate a random variate un from Cn (·|u1 , . . . , un−1 )

   In order to simulate a value uk from Ck (·|u1 , . . . , uk−1 ) one has to draw v from U (0, 1)
from which uk = Ck−1 (v|u1 , . . . , uk−1 ) can be obtained through the equation v =
Ck (uk |u1 , . . . , uk−1 ) by numerical rootﬁnding.2
   The conditional approach is very elegant but it may not be possible to calculate the
inverse function analytically. In this case one has to use a numerical algorithm to determine
the desired draw. Obviously, this procedure may be computationally intensive.
   In the case of Archimedean copulas this method may be rewritten as the following theorem
states.

Theorem 6.1 Let C (u1 , u2 , . . . , un ) = ϕ −1 (ϕ (u1 ) + ϕ (u2 ) + · · · + ϕ (un )) be an Archi-
medean n-variate copula with generator ϕ (·), then for k = 2, . . . , n

                                               ϕ −1(k−1) (ϕ (u1 ) + ϕ (u2 ) + · · · + ϕ (uk ))
              Ck (uk |u1 , . . . , uk−1 ) =                                                                (6.4)
                                              ϕ −1(k−1) (ϕ (u1 ) + ϕ (u2 ) + · · · + ϕ (uk−1 ))

  Proof :     Since by deﬁnition ϕ(1) = 0 then, for k = 2, . . . , n − 1,

  Ck (u1 , . . . , uk ) = C(u1 , . . . , uk , 1, . . . , 1) = ϕ −1 (ϕ (u1 ) + ϕ (u2 ) + · · · + ϕ (uk ))   (6.5)

Besides C1 (u1 ) = ϕ −1 (ϕ(u1 )) = u1 and

     Cn (u1 , . . . , un ) = C (u1 , u2 , . . . , un ) = ϕ −1 (ϕ (u1 ) + ϕ (u2 ) + · · · + ϕ (un ))        (6.6)

Moreover

                                                 [∂ k−1 Ck (u1 , . . . , uk )]/[∂u1 . . . ∂uk−1 ]
              Ck (uk |u1 , . . . , uk−1 ) =                                                                (6.7)
                                              [∂ k−1 Ck−1 (u1 , . . . , uk−1 )]/[∂u1 . . . ∂uk−1 ]

and by derivation we have

 ∂ k−1 Ck−1 (u1 , . . . , uk )   ∂ k−1 ϕ −1 (ϕ (u1 ) + ϕ (u2 ) + · · · + ϕ (uk−1 ))
                               =
      ∂u1 . . . ∂uk−1                            ∂u1 . . . ∂uk−1
                                                                                          k−1
                                                                                          
                                   −1(k−1)
                                                                                                       
                              =ϕ              (ϕ (u1 ) + ϕ (u2 ) + · · · + ϕ (uk−1 )) ·          ϕ (1) uj (6.8)
                                                                                          j =1


2 For a detailed description of simulation procedures, see Genest (1987), Genest and Rivest (1993), Lee (1993),
Frees and Valdez (1998), Marshall and Olkin (1988), and Embrechts, Lindskog and McNeil (2001).
184                                                                              Copula Methods in Finance

and

      ∂ k−1 Ck (u1 , . . . , uk )   ∂ k−1 ϕ −1 (ϕ (u1 ) + ϕ (u2 ) + · · · + ϕ (uk ))
                                  =
          ∂u1 . . . ∂uk−1                           ∂u1 . . . ∂uk−1
                                                                                       k−1
                                                                                                   
                               = ϕ −1(k−1) (ϕ (u1 ) + ϕ (u2 ) + · · · + ϕ (uk )) ·            ϕ (1) uj (6.9)
                                                                                       j =1

hence we obtain the following result

                                                              ϕ −1(k−1) (ck )
                             Ck (uk |u1 , . . . , uk−1 ) =                                            (6.10)
                                                             ϕ −1(k−1) (ck−1 )
             k
where ck =      j =1 ϕ(uj ) and with k = 2, . . . , n.                                                    

  Now we would like to apply this important result to the most used Archimedean copulas.
We present, in full detail, the particular cases for the Frank copula and for the Clayton
copula, because they are the most frequently used and best known Archimedean copulas in
empirical applications.


6.3.1 Clayton n-copula
                                                                                       1
The generator is given by ϕ(u) = u−α − 1, hence ϕ −1 (t) = (t + 1)− α . The Clayton n-
copula, also known as Cook and Johnson’s (1981) family, is given by:
                                                 n                 − 1
                                                                       α
                   C(u1 , u2 , . . . , un ) =          u−α
                                                        i −n+1              with α > 0                (6.11)
                                                 i=1


  Let us compute the derivatives of the function ϕ −1 (t). We have

                           1         1                    1 α+1            1
           ϕ −1(1) (t) = − (t + 1)− α −1 , ϕ −1(2) =              (t + 1)− α −2 , . . . ,
                           α                              α α
                               (α + 1) (α + 2) · · · · · (α + k − 1)          1
           ϕ −1(k) (t) = (−1)k                   k
                                                                     (t + 1)− α −k                    (6.12)
                                               α
  Hence, by applying the previous theorem, the following algorithm generates a random
variate (u1 , u2 , . . . , un ) from the Clayton copula:

• Simulate n independent random variables (v1 , v2 , . . . , vn ) from U (0, 1)
• Set u1 = v1
• Set v2 = C2 (u2 |v1 ), hence

                  ϕ −1(1) (c2 )
           v2 =                 with c1 = ϕ(u1 ) = u−α
                                                    1 − 1 and c2 = ϕ (u1 ) + ϕ (u2 )
                  ϕ −1(1) (c1)
               = u−α   −α
                  1 + u2 − 2
Simulation of Market Scenarios                                                                       185

  so
                                                                − α1 −1
                                              u−α   −α
                                               1 + u2 − 1
                                   v2 =
                                                   u−α
                                                    1

  Finally
                                                                      − α1
                                                   − α
                                 u2 =     v1−α    v2 α+1 − 1    +1                                 (6.13)

• Set
                                                                                        − α1 −2
                                    ϕ −1(2) (c3 )             u−α   −α   −α
                                                               1 + u2 + u3 − 2
            v3 = C3 (u3 |u1 , u2 ) = −1(2)        =
                                    ϕ       (c2 )               u−α   −α
                                                                 1 + u2 − 1

  and solve it in u3
• ...
• Solve in un the equation
                                                                            − α1 −n+1
                                 u−α   −α           −α
                                  1 + u2 + · · · + un − n + 1
                      vn =
                                 u−α   −α           −α
                                  1 + u2 + · · · + un−1 − n + 2

  so we have:
                                                                                          1
                  −α                                  α          −α
         un =     u1 + u−α           −α             α(1−n)−1
                        2 + · · · + un−1 − n + 2 · vn        −1 +1                                 (6.14)


6.3.2 Gumbel n-copula
                                                                                     1
The generator is given by ϕ(u) = (− ln(u))α , hence ϕ −1 (t) = exp(−t α ). The Gumbel n-
copula is given by:
                                                           1
                                             n              α
             C(u1 , u2 , . . . , un ) = exp −    (− ln ui )α     with α > 1       (6.15)
                                                              
                                                   i=1

             1
  Let w = t α → t = w α , so we have
                                                         ∂w  1 1      1
                   ϕ −1 (w) = exp(−w)            and        = t α −1 = w 1−α
                                                         ∂t  α        α
  Hence we have
                                   ∂ϕ −1 ∂w       1
                   ϕ −1(1) (t) =            = −e−w w 1−α and
                                    ∂w ∂t         α
                                   ∂ϕ −1(1) ∂w   1
                   ϕ −1(2) (t) =               = 2 e−w w1−2α (w − 1 + α)
                                     ∂w ∂t      α
and so on. Unfortunately this is not a recursive formula.
186                                                                           Copula Methods in Finance

  The following algorithm generates a random variate (u1 , u2 , . . . , un ) from the Gumbel
copula:

• Simulate n independent random variables (v1 , v2 , . . . , vn ) from U (0, 1)
• Set u1 = v1
• Set v2 = C2 (u2 |v1 ), hence

                               ϕ −1(1) (c2 )
                        v2 =                 with c1 = ϕ(u1 ) = (− ln(u1 ))α
                               ϕ −1(1) (c1)
  and

                       c2 = ϕ (u1 ) + ϕ (u2 ) = (− ln(u1 ))α + (− ln(u2 ))α

  This equation has to be solved with respect to u2 .
• Set
                                                              ϕ −1(2) (c3 )
                                   v3 = C3 (u3 |u1 , u2 ) =
                                                              ϕ −1(2) (c2 )
  and solve it in u3
• ...

6.3.3 Frank n-copula
                                                          
                                              exp(−αu)−1
The generator is given by ϕ(u) = ln            exp(−α)−1    , hence

                                               1                    
                               ϕ −1 (t) = −      ln 1 + et (e−α − 1)
                                               α
The Frank n-copula is given by:
                                    n  −αu         
                                                 i −1
                              1       i=1 e
  C(u1 , u2 , . . . , un ) = − ln 1 +          n−1     with α > 0 when n ⩾ 3                   (6.16)
                              α         e−α − 1
We will soon see why higher dimensions allow only positive dependence (α > 0).
                                                             et (e−α −1)
 As for derivatives of ϕ −1 (t), we have ϕ −1(1) (t) = − α1 1+e  t (e−α −1) .
              t   −α
           e (e −1)
  Let w = 1+e t (e−α −1) so we have


                       ∂w                                                  1
                          = −w(w − 1)              and      ϕ −1(1) (t) = − w
                       ∂t                                                  α
Hence,
                              ∂  −1(1)      ∂  −1(1)  ∂w  1
              ϕ −1(2) (t) =      ϕ     (t) =     ϕ           = w(w − 1)
                              ∂t             ∂w           ∂t  α
analogously
                                    ∂  −1(2)  ∂w    1
                   ϕ −1(3) (t) =       ϕ           = − w(w − 1)(2w − 1)
                                   ∂w           ∂t    α
Simulation of Market Scenarios                                                                                     187

In general we obtain:

                                              1
                               ϕ −1(1) (t) = − g1 (w)            where g1 (w) = w                               (6.17)
                                              α

and

                                    1                                            (1)
                 ϕ −1(k) (t) = (−1)k gk (w)              where gk (w) = w(w − 1)gk−1 (w)                        (6.18)
                                    α

        (1)
with gk−1   (w) = ∂g∂w
                     k−1
                         and k ⩾ 2.
   In such a way one can proceed to higher order derivatives.3
   Finally, we give the following algorithm in order to generate a random variate (u1 , u2 , . . . ,
un ) from the Frank copula:

• Simulate n independent random variables (v1 , v2 , . . . , vn ) from U (0, 1)
• Set u1 = v1
• Set v2 = C2 (u2 |v1 ) hence

                             ϕ −1(1) (c2 )                                    exp (−αu1 ) − 1
                     v2 =                     with c1 = ϕ(u1 ) = ln
                             ϕ −1(1) (c1)                                      exp (−α) − 1

   and

                                                       (exp (−αu1 ) − 1) (exp (−αu2 ) − 1)
                  c2 = ϕ (u1 ) + ϕ (u2 ) = ln
                                                                    (exp (−α) − 1)2

   Hence

                                                   exp (−αu2 ) − 1
                   v2 = e−αu1
                                  exp (−α) − 1 + (exp (−αu1 ) − 1) (exp (−αu2 ) − 1)

   has to be solved with respect to u2 . We obtain:
                                                             
                                      1          v2 1 − e−α
                                u2 = − ln 1 +  −αu                                                            (6.19)
                                      α      v2 e 1 − 1 − e−αu1


3 From these expressions it is also possible to see that the Kimberling theorem may be invoked for higher dimensions
if and only if α > 0 in order to have a generator completely monotone. This means that the generators suitable for
extension to arbitrary dimensions of Archimedean 2-copulas correspond to copulas that can model only positive
dependence. In fact the readers may note that gk is a polynomial of degree k with the leading term of positive
sign. For w < 0 (hence α > 0) the polynomials are positive for even k and negative for odd k. When α < 0, then
0 < w < 1, and it is easily veriﬁed that ϕ −1(3) (t) fails to be negative for all t.
   Alternatively refer to Schweizer and Sklar (1983), Chap. 6, where it is proven that the inverse of a strict generator
of an Archimedean n-copula C is completely monotone, then C > , where  is the product (or independent)
n-copula.
188                                                                           Copula Methods in Finance

• Set

                             ϕ −1(2) (c3 )                     (exp (−αu1 ) − 1) (exp (−αu2 ) − 1)
  v3 = C3 (u3 |u1 , u2 ) =                   with c2 = ln
                             ϕ −1(2) (c2 )                                (exp (−α) − 1)2

  and

                          (exp (−αu1 ) − 1) (exp (−αu2 ) − 1) (exp (−αu3 ) − 1)
               c3 = ln
                                                 (exp (−α) − 1)3

  Hence,

                 v3 = (e−α − 1)[(e−α − 1) + (e−αu1 − 1)(e−αu2 − 1)]2
                                                 e−αu3 − 1
                         ×                                                                       (6.20)
                             [(e−α − 1)2 + (e−αu1 − 1)(e−αu2 − 1)(e−αu3 − 1)]2

  We obtain a polynomial equation of order 2 in the variable x = e−αu3 − 1 that has to be
  solved with respect to u3
• And so on, obtaining each variate uk involves solving a polynomial equation of degree
  k − 1.


                 6.4 MARSHALL AND OLKIN’S METHOD
We present a simulation algorithm proposed by Marshall and Olkin (1988) for the compound
construction of copulas. This is a construction method of copulas involving the Laplace
transform and its inverse function. Recall that the Laplace transform of a positive random
variable γ is deﬁned by:
                                                        +∞
                              τ (s) = Eγ (e−sγ ) =            e−st dFγ (t)                       (6.21)
                                                        0

where Fγ is the distribution function of γ . This is also the moment generating function
evaluated at −s; thus, knowledge of τ (s) determines the distribution. Laplace transforms
have well-deﬁned inverses. We saw that the inverse function τ −1 serves as the generator
for an Archimedean copula.
   Marshall and Olkin’s (1988) method for constructing copulas may be described as follows.
Suppose that Xi is a r.v. whose conditional, given a positive latent variable γi , distribu-
tion function is speciﬁed by Hi (x|γi ) = Hi (x)γi , where Hi (.) is some baseline distribution
function, for i = 1, 2, . . . , n.
   Marshall and Olkin (1988) considered multivariate distribution functions of the form:
                                                                                        
                F (x1 , x2 , . . . , xn ) = E K(H1 (x)γ1 , H2 (x)γ2 , . . . , Hn (x)γn )         (6.22)

where K is a c.d.f. with uniform marginals, and the expectation is taken over γ1 , γ2 , . . . , γn .
Simulation of Market Scenarios                                                                      189

    As a special case, we consider all latent variables equal to one another so that γ1 = γ2 =
· · · = γn = γ and use c.d.f.s corresponding to independent marginals. Marshall and Olkin
(1988) show that:

        F (x1 , x2 , . . . , xn ) = E(H1 (x)γ1 · H2 (x)γ2 · · · · · Hn (x)γn )
                              = τ (τ −1 (F1 (x1 )) + τ −1 (F2 (x2 )) + · · · + τ −1 (Fn (xn )))   (6.23)

where Fi is the ith marginal c.d.f. of the joint c.d.f. F , and τ (.) is the Laplace transform
of γ .

Generating outcomes from a compound copula

To generate X1 , X2 , . . . , Xn having a distribution (6.23), Frees and Valdez (1998) propose
the following algorithm:

• Generate a (latent) r.v. γ having Laplace transform τ
• Independently of the previous step, generate U1 , U2 , . . . , Un independent Uniform (0, 1)
  r.v.s
• For k = 1, 2, . . . , n, calculate Xk = Fk−1 (Uk∗ ) where

                                                         1
                                          Uk∗ = τ −        ln Uk                                  (6.24)
                                                         γ

   This algorithm is straightforward for most copulas of interest that are generated by the
compounding method. It can easily be implemented for high dimension. The only disadvan-
tage is that it is necessary to simulate an additional r.v., γ . Needless to say, this additional
variable is not always easy to simulate.
   For example, if we recall that a generator for a strict Archimedean copula is the Laplace
transform of some positive random variable, we may see that for the Clayton copula γ is a
Gamma(1, 1/α) r.v., that is very easy to simulate; for the Gumbel copula γ is a (1/α)-stable
r.v.; and for the Frank copula γ is a logarithmic series r.v. deﬁned on all natural numbers
(see Marshall & Olkin, 1988). In the last case the simulation with this technique is not easy,
and the conditional sampling should be preferred.
   We report on how to obtain draws by using this method for the Clayton and the Gumbel
copula, alternatively, to the conditional sampling technique previously discussed.

Clayton case
                                                                                                   1
• Generate a r.v. γ Gamma(1, 1/α) (hence, γ has Laplace transform τ (s) = (1 + s)− α )
• Independently of the previous step, generate U1 , U2 , . . . , Un independent Uniform (0, 1)
  r.v.s
• For k = 1, 2, . . . , n calculate Xk = Fk−1 (Uk∗ ) where

                                                         1
                                          Uk∗ = τ −        ln Uk
                                                         γ
190                                                                                 Copula Methods in Finance

Gumbel case

• Generate a r.v. γ Stable(1, 0, 0) with parameter 1/α (hence, γ has Laplace transform
                   1
  τ (s) = exp{−s α })4 ;
• Independently of the previous step, generate U1 , U2 , . . . , Un independent Uniform (0, 1)
  r.v.s
• For k = 1, 2, . . . , n calculate Xk = Fk−1 (Uk∗ ) where
                                                             1
                                              Uk∗ = τ −        ln Uk
                                                             γ
A common procedure to obtain a draw from a Stable(1, 0, 0) with parameter β r.v. is based
on the following result (Samorodnitsky & Taqqu, 1995, p. 42):
                              
• Let υ be uniform on − π2 , π2 and let ξ be exponential with mean 1 independently drawn.
  Then
                                                              1−β
                                 sin (βυ)      cos ((1 − β) υ) β
                           κ=              ·                                        (6.25)
                                         1
                                 (cos υ) β            ξ

   is Stable(1, 0, 0) with parameter β.
   In Figure 6.1 we present an example of 10 000 simulated draws, following the above
algorithms, from a Gumbel copula with α = 2. As can be seen, there is evidence of upper
tail dependence.

                                              Gumbel Copula alpha = 2

                   1

                  0.8

                  0.6
             u3




                  0.4

                  0.2

                   0
                   1
                    0.8
                        0.6
                             0.4
                        u2
                               0.2                                                             0.9   1
                                                                                   0.7   0.8
                                                                       0.5   0.6
                                     0                    0.3   0.4
                                              0.1   0.2
                                         0                            u1

                                     Figure 6.1 Gumbel copula with α = 2

4 For a detailed description of stable r.v.s and their properties we refer readers to the excellent book of Samorod-
nitsky and Taqqu (1995).
Simulation of Market Scenarios                                                                    191

                               6.5 EXAMPLES OF SIMULATIONS
In this section we apply the previous algorithms to simulate some trivariate copulas. In
Figure 6.2 we show the simulated Student t copula with 4 d.o.f. and correlation matrix given
by daily equity series. We used daily returns series for ABN Amro, Bayer AG, Renault SA
(January 2, 2001–July 30, 2002) having estimated their robust positive deﬁnite correlation
matrix (by means of the Spearman’s rho ρS ), a univariate t-GARCH(1, 1) process for each
series, and the T copula d.o.f. is found statistically signiﬁcant around 4.
   Using the conditional sampling technique, we simulate the trivariate Clayton and Frank
copula with different values for the α parameter for the same data set. This parameter was
estimated via the IFM technique, equal respectively to 0.53 for the Clayton copula and 1.61
for the Frank copula.
   We remark that the α parameter in the Archimedean copulas is the only driver of
the dependence. Indeed, we show in Figures 6.3–6.8 how different values for α induce
stronger dependence. It can be seen from these ﬁgures that, in the Clayton copula, the
lower tail dependence is much stronger than in the Frank copula, where there is no tail
dependence.



                               Student Copula simulated u1, u2, u3 with d.f. = 4

                    1

                   0.8


                   0.6
         Renault




                   0.4


                   0.2


                    0
                   1


                         0.5
           Bayer

                                                                                   0.8     1
                                 0                         0.4      0.6
                                     0         0.2
                                                              ABN Amro

  Figure 6.2         Scatter plot Student t copula with 4 d.o.f. for ABN Amro, Bayer AG, Renault SA
192                                                                             Copula Methods in Finance

                              Clayton Copula simulated u1, u2, u3 with alfa = 0.53

                   1


                  0.8
      Renault




                  0.6


                  0.4


                  0.2

                   0

                   1

              0.5
      Bayer AG
                                                                                              1
                                    0                                  0.6            0.8
                                                      0.2     0.4
                                        0
                                                                 ABN Amro

                                   Figure 6.3    Clayton copula with α = 0.53


                                Clayton Copula simulated u1, u2, u3 with alfa = 5
                    1

                  0.8


                  0.6
        Renault




                  0.4

                  0.2


                    0
                   1


                        0.5
       Bayer


                               0                                                     0.8     1
                                                0.2         0.4       0.6
                                   0
                                                               ABN Amro

                                    Figure 6.4 Clayton copula with α = 5
Simulation of Market Scenarios                                                                          193

                                         Clayton Copula simulated u1, u2, u3 with alfa = 15
                             1


                        0.8


                        0.6
             Renault




                        0.4


                        0.2


                          0
                         1


                 0.5
             Bayer

                                 0                                                              1
                                     0             0.2          0.4         0.6         0.8
                                                                      ABN Amro

                                             Figure 6.5 Clayton copula with α = 15


                                     Frank Copula simulated u1, u2, u3 with alfa = 1.61
                        1


                       0.8


                       0.6
           Renault




                       0.4


                       0.2


                        0
                       1


                         0.5
          Bayer

                                 0                                                        0.8       1
                                         0           0.2         0.4             0.6
                                                                      ABN Amro

                                             Figure 6.6    Frank copula with α = 1.61
194                                                                                   Copula Methods in Finance


                        1                   Frank Copula simulated u1, u2, u3 with alfa = 5


                    0.8


                    0.6
          Renault




                    0.4


                    0.2


                        0
                    1

                    0.5
      Bayer

                            0
                                    0            0.2          0.4       0.6               0.8      1
                                                                 ABN Amro

                                            Figure 6.7 Frank copula with α = 5



                        1                     Frank simulated u1, u2, u3 with alfa = 15


                    0.8


                    0.6
        Renault




                    0.4


                    0.2


                        0
                    1


                    0.5
      Bayer


                                0
                                                               0.4          0.6           0.8      1
                                        0         0.2
                                                                  ABN Amro

                                            Figure 6.8 Frank copula with α = 15
                                      7
                           Credit Risk Applications

                               7.1 CREDIT DERIVATIVES
Credit derivatives are ﬁnancial contracts that allow the transfer of credit risk from one
market participant to another. In such a way, they facilitate greater efﬁciency in the pricing
and distribution of credit risk among ﬁnancial market participants.
   Credit derivatives attracted attention through the use of credit default swaps in the early
1990s. Credit default swaps – the basic credit derivatives products – allow banks to hedge
their credit risk associated with their loan and interest rate derivatives books without selling
or otherwise transferring the underlying asset.
   In recent years credit derivatives have become the main tool for transferring and hedging
risk. The credit derivatives market has grown rapidly both in volume and in the type of
instruments it offers. Innovations in this market have been growing at an unprecedented
rate, and will likely persist in the near future.
   Credit derivatives have experienced a lot of applications, ranging from hedging default
risk, freeing up credit lines, reducing the regulatory capital requirements, to hedging dynamic
credit exposure driven by market variables and diversifying ﬁnancial portfolios by gaining
access to otherwise unavailable credits.
   As evidence of the huge growth of this market, the outstanding balance of credit deriva-
tives contracts has increased from an estimated USD 50 billion in 1996 to almost USD 500
billion at the end of 2000. Volumes are continuing to grow: according to the latest survey
by Risk magazine (Patel, 2003), the volume of the credit derivatives market has reached an
outstanding notional of more than USD 2 trillion in February 2003. An extensive discussion
of the credit derivatives market and the evolution of the market can be found in the J. P.
Morgan “Guide to credit derivatives” (2000) and in Davies, Hewer and Rivett (2001).
   The market is also developing outside the United States. According to a survey by the
British Bankers’ Association (BBA), the global credit derivatives market is estimated to
be at least twice as large as the US market. The exact size of the global credit derivatives
markets, however, is difﬁcult to estimate, given the potential for overcounting when contracts
involve more than one counterparty, and also that notional amounts outstanding considerably
overstate the net exposure associated with those contracts.
   Nowadays many new ﬁnancial securities are being developed. Among the most com-
plicated of these instruments are the multiple underlying ones. These are instruments with
pay-offs that are contingent on the default realization in a portfolio of obligors. Default risk
at the level of an individual security has been extensively modeled using both the structural
and the reduced form approach.1 However, default risk at the portfolio level is not as well
understood. Default dependencies among many obligors in a large portfolio play a crucial
role in the quantiﬁcation of a portfolio’s credit risk exposure for the effects caused by

1 See the structural models of Merton (1974), Geske (1977), Leland (1994), Longstaff and Schwartz (1995), and
the reduced form models of Dufﬁe and Singleton (1999), Madan and Unal (1999), among others. We refer the
reader also to Arvanitis and Gregory (2001) for an extensive survey of credit risk.
196                                                                   Copula Methods in Finance

simultaneous defaults and by the joint dependency between them. This dependency may be
due to both macroeconomic (the overall economy) and microeconomic (sectoral and even
ﬁrm speciﬁc) aspects. These latter factors are referred to in the literature as credit contagion.
As reported in Jarrow and Yu (2001) there has been evidence of credit contagion in the
recent ﬁnancial crisis in East Asia and in the USA where the downfall of a small number
of ﬁrms had an economy-wide impact.
   Recently the credit derivatives market offers more and more innovative products. From the
simple single name credit default swaps, the market has proposed total return swaps, credit-
linked notes, credit spread options, and multiple underlying products. This last category
contains probably the most complex products to price and hedge, because their structure
is linked to a portfolio of underlying credits and, hence, their pay-offs depend on the joint
behavior of the underlying securities. Typical multiple underlying products are basket default
swaps (BDSs) and collateralized debt obligations (CDOs).
   The main users of credit derivatives are large ﬁnancial institutions and banks, followed by
securities ﬁrms and insurance companies. While banks and securities ﬁrms act both as sellers
and buyers of protection, insurance companies, which have reportedly increased their market
participation substantially in recent years, are primarily protection sellers, presumably using
their expertise at evaluating risk. Corporate ﬁrms have increasingly come to the market, but
primarily to buy protection to hedge their exposure in vendor ﬁnancial deals. Hedge funds
are also relatively active participants, arbitraging perceived mispricing between the cash and
derivatives markets, and thus participating on both sides. Other participants include pension
funds and mutual funds, although their participation in the market is very limited.

 7.2 OVERVIEW OF SOME CREDIT DERIVATIVES PRODUCTS
We give an overview of some credit derivatives products. We refer interested readers to the
recent guide provided by Davies, Hewer and Rivett (2001).


7.2.1 Credit default swap
A credit default swap is a bilateral contract where one counterparty buys default protection
with respect to a reference entity. The contract has a given maturity, but will terminate early
if the credit event occurs. In this contract one party, the protection seller, receives a premium
(expressed in basis points per annum on the notional amount and received every quarter)
from another party, the protection buyer, who will receive a payment upon the occurrence
of the credit event in respect of the reference entity. The protection seller is buying credit
risk while the protection buyer is selling credit risk. Since no asset is transferred, there is
no need to fund the position.
   A speciﬁc asset (i.e. bond or loan) may be cited for determining the occurrence of the
credit event and payment upon default. If this is not so, there will be a deliverable option
for the protection buyer in case of default. This is the main difference between a credit
default swap and an asset default swap: in the latter case a speciﬁc asset has to be speciﬁed
and in the former case there is the so-called deliverable option.
   Normally, the default payment is given by the notional amount minus the recovery amount
(net loss).
   This contract allows a credit risky asset to be transformed into a credit risk-free asset by
purchasing default protection referenced to this credit.
Credit Risk Applications                                                                                  197

   Usually, there are two methods of settlement: physical delivery and cash settlement. With
physical delivery, the protection buyer delivers the defaulted asset in return for a payment
equal to the notional value of that asset. With cash settlement, the protection seller pays the
protection buyer an amount that is equal to the difference between the notional amount and
the price of the defaulted reference asset. The recovery rate is commonly determined by a
dealer survey.
   In a digital binary default swap, the default payment is equal to a prespeciﬁed notional,
irrespective of the recovery value.
   The credit event, which triggers the payment of the amount due to the protection seller
from the protection buyer, is deﬁned in the documentation. The potential credit events are
usually based on those speciﬁed in the new 2003 ISDA Credit Derivatives Deﬁnitions: i.e.
bankruptcy, failure to pay (principal or interest), obligation default, obligation acceleration,
repudiation/moratorium, and restructuring.
   The most common methodology for the valuation of a credit default swap may be found
in Arvanitis and Gregory (2001) Chap. 5 and in the excellent survey of Roncalli (2003).
   Let us indicate the default time with the greek letter τ . S(t) represents the survival
function at time t

                              F (t) = S(t) = Pr(τ > t) = E [1 {τ > t}]

where F (t) is the c.d.f. of τ .
   For the sake of completeness, when we need to refer to an origin time t0 we will indicate
with S(t0 , t) = Pr (τ > t|τ > t0 ) = St0 (t) the survival function between (t0 , t).
   The protection buyer pays the premium (ﬁxed) leg to the protection seller who will pay
the default (ﬂoating) leg in the case of default. The premium leg is expressed as a margin
on the notional amount of the contract. Let t1 , t2 , . . . , tM be the payment dates for the
premium leg. Since the margin is not paid after default, the present value of the premium
leg is given by2
                                
                     PL(t) =           W · N (tm − tm−1 ) · E[B(t, tm ) · 1{τ > tm }]
                               tm ⩾t

where T = tM is the maturity of the credit default swap, W is the premium (also called
the margin or the annuity), N is the notional amount of the contract, B(t, tm ) indicates the
discount factor between (t, tm ) , m = 2, . . . , M.
   The present value of the default leg is given by

                       DL(t) = N · E [(1 − R (θ, τ )) · B(t, τ ) · 1 {τ ⩽ T }]

where R(θ, τ ) indicates the recovery value, which may depend on default time τ and some
other parameters θ related to both macroeconomic (the entire economy) and microeco-
nomic (ﬁrm/business speciﬁc) factors. We assume independency between default times and
recovery rates.
  In the following we suppose that the recovery value is independent of the default time.3

2 This expression is justiﬁed under a t -survival measure P as deﬁned in Schönbucher (2000).
                                       m                   m
3 Generally the mark to market procedures used by many large banks ﬁx the recovery value to 30% for accounting
evaluations.
198                                                                         Copula Methods in Finance

  We may express the present value of the credit default swap as the difference between
the two legs. Hence, the fair (premium) spread is given by

                                      (1 − R) · E [B(t, τ ) · 1 {τ ⩽ T }]
                       W= 
                                      (tm − tm−1 ) · B(t, tm ) · E [1 {τ > tm }]
                              tm ⩾t


   In the real activity, traders know the market quote of the premium for each tradable
reference entity. Hence, the mark to market evaluation of a credit default swap may be
obtained through a bootstrapping procedure in order to get the survival probabilities at each
payment date (or analogously constant-wise hazard rates) implied by the market spread
curve for that reference entity.


7.2.2 Basket default swap

A basket default swap is a contract similar to a credit default swap, except that it is indexed
to a basket of reference entities rather than a single reference asset. This contract will
provide default protection on a number of entities in the basket of credits (typically from
three to ﬁve names). Typically it is as follows.

• First to default: offers protection against the ﬁrst default only (i.e. the contract triggers at
  the ﬁrst default occurrence)
• Second to default: offers protection against the second to default only
• First k out of n to default: offers protection against the ﬁrst k defaults
• Last j out of n to default: offers protection against the last j defaults

   In the particular case of a ﬁrst-to-default basket (1st to Def), it is the ﬁrst credit in a basket
of reference obligors whose default triggers a payment to the protection buyer. As in the
case of a (single name) default swap, this payment may be cash settled. More commonly,
it will involve physical delivery of the defaulted asset in return for a payment of the par
amount in cash.
   In return for protection against the 1st to Def, the protection buyer pays a basket spread
to the protection seller as a set of regular accruing cash ﬂows. As with a default swap, these
payments terminate following the ﬁrst credit event.
   Similarly other credit products may be deﬁned such as a second-to-default basket which
triggers a credit event after two or more obligors have defaulted, and so on from the
nth-to-default basket until the last-to-default basket.
   Basket trades can permit substitutions whereby the reference obligations in the basket are
not ﬁxed and can be swapped in and out by the protection buyer. Normally, the protection
buyer is only permitted to switch similar assets thereby maintaining, for example, a portfolio-
weighted rating, industry or geographical concentration limits. Besides, there are usually
some constraints on that if any default occurs.
   This characteristic is usually pertained to the so-called percentage loss or ﬁrst (or second,
and so on) loss. In these cases the exposure is to a percentage of the notional amount of
the underlying pool of reference obligations or up to a pre-agreed set amount, after which
the contract will terminate.
Credit Risk Applications                                                                     199

7.2.3 Other credit derivatives products

A credit spread option has a strike price based on a credit spread above the risk-free rate.
The option will be exercised if the credit spread of the underlying reference entity moves
above or below this strike spread, depending on whether the contract is a put or a call option
respectively. Credit spread options are not commonly traded and are privately negotiated.
   In a step-up credit default swap, the premium paid by the protection buyer to the protection
seller increases after an agreed term. At the step-up date, the protection buyer has the option
of terminating the contract. If the contract is not terminated at the step-up date, the premium
paid to the protection seller is increased signiﬁcantly. These types of transactions have been
used to reduce capital charges.
   A total return swap, also known as the total rate of return swap, is an agreement under
which one party (“the total return payer”) transfers the economic risks and rewards associated
with an underlying asset to another counterparty (“the total return receiver”). The transfer
of risks and rewards is effected by way of an exchange of cash ﬂows pertaining to any
change in the value and any income derived from the underlying asset (i.e. the total return).
   All total return swap contracts are over-the-counter contracts and currently there are no
standard contractual deﬁnitions speciﬁc to the product.
   In contrast to a credit default swap, a total return swap transfers both the credit risk and
the market risk associated with an underlying asset. The economic effect for a total return
receiver is the same as that derived from owning the asset.
   A credit linked note is an instrument under which one party (“the issuer”) issues a note
to another party (“the investor”) in return for consideration equal to the principal value
(assuming that the note is issued at par) of the note. The coupon and the redemption of the
note are linked both to the credit quality of the issuer and to an obligation (“the reference
obligation”) of a third party (“the reference entity”).
   Credit linked notes are often listed on a stock exchange. The issuer of a credit linked note
is equivalent to the protection buyer in a fully funded credit default swap. The investor in
a credit linked note is equivalent to the protection seller.

7.2.4 Collateralized debt obligation (CDO)

At a very simple level, a collateralized debt obligation (CDO) is a security backed by a
pool of assets (loans, bonds, credit default swaps, etc.) which are packaged together as a
portfolio and then tranched.
   A CDO comprises a pool of underlying instruments (called collateral ) against which
notes of debt are issued with varying cash ﬂow priority. These notes vary in credit quality
depending on the subordination level. At inception when each note is issued, it usually
receives a rating from an independent agency (Moody’s, S&P, Fitch, etc.). The collateral of
a CDO is typically a portfolio of corporate bonds (or sovereign bonds, emerging markets
bonds as well) or bank loans or other types of ﬁnancial facilities (residential or commercial
mortgages, leasing, lending, revolving facilities, even other credit derivatives, etc.).
   In such a way, CDOs create a customized asset class by allowing various investors to
share the risk and return of an underlying pool of debt obligations. Hence, a CDO consists
of a set of assets (its collateral portfolio) and a set of liabilities (the issued notes).
   A CDO cash ﬂow structure allocates interest income and principal repayment from a col-
lateral pool of different debt instruments to a prioritized collection of securities notes, which
200                                                                            Copula Methods in Finance

are commonly called tranches. A standard prioritizing structure is a simple subordination,
i.e. senior CDO notes are paid before mezzanine and lower subordinated notes are paid,
with any residual cash ﬂow, to an equity piece. The tranches are ordered so that losses
in interest or principal of the collateral are absorbed ﬁrst by the lowest level tranche and
then in order to the next tranche, and so on. The lowest tranche is the riskiest one, and
because it has to respond immediately to the incurred losses it is called the equity tranche.
The mechanism for distributing the losses to the various tranches is called the waterfall.
Losses occur when there is a certain kind of credit event, explicitly deﬁned in the offering
circular. A credit event is usually either a default of the collateral, or a failure to pay off
the collateral or other speciﬁed event according to the latest ISDA agreements.4 In either
case, the market value of the collateral drops; and, consequently, the issued related notes
are usually hit by a credit downgrade and by a market value slump.
   Obviously, credit events are not independent, and their number is uncertain too. Clearly,
a diversiﬁcation helps to manage investors’ risk and return proﬁle, and an investor in a
particular tranche would like to know the probability distribution of losses to the underly-
ing pool of debt. The probability distribution depends on both the probability of a credit
event and on the relationship between two or more credit events (the relationship between
the default behavior of different obligors is called hidden linkage). Hence, the underlying
dependence structure is fundamental for any quantitative analysis on potential losses.
   In the ﬁnancial markets there are many kinds of CDOs. The most well-known types of
CDO are the cash ﬂow CDOs, the market-value CDOs and the synthetic CDOs.
   A cash ﬂow CDO is one for which the collateral portfolio is not subject to active trading
by the CDO manager. The uncertainty concerning the interest and principal repayments is
determined by the number and timing of the collateral assets that default. Losses due to
defaults are the main source of risk.
   A market-value CDO is one in which the CDO tranches receive payments based essen-
tially on the mark to market return of the collateral pool, as determined largely by the
trading performance of the CDO manager. A potential investor needs to evaluate the ability
of the manager and his or her institutional structure.
   A synthetic CDO is one whose notes are synthetic, so the collateral portfolio is created
synthetically (i.e. it is not held by the structure but remains in the originator’s book). Each
note pays a ﬁxed spread (commonly, in these structures, the spread is a ﬁxed premium
added to a predetermined market ﬂoating rate, i.e. LIBOR rate).
   Synthetic CDOs are very common in the so-called SuperSenior transactions. In this case
the higher protected tranche in the reference CDO (called SuperSenior because its credit
quality has to be higher than Aaa at inception) is the reference entity in a credit default
swap contract. In this contract one counterparty buys default protection with respect to this
SuperSenior tranche. The contract has a given maturity, but, obviously, it will terminate
early if the credit event occurs. The protection seller receives a premium (expressed in basis
points per annum on the notional amount) from the protection buyer that will receive a
payment upon the occurrence of the credit event in respect of the reference entity, i.e. the
SuperSenior tranche in the CDO structure. Normally, the default payment is given by the
notional amount minus the recovery amount (net loss). Since no asset is transferred, there
is no need to fund the position. For this reason these transactions are unfunded.

4 We refer readers to the J. P. Morgan “Guide to credit derivatives” (2000), and to O’Kane (2001) and Davies,
Hewer and Rivett (2001) for an extensive discussion of these concepts.
Credit Risk Applications                                                                                      201

   We are interested here in synthetic or cash ﬂow CDOs, thus avoiding an analysis of the
trading behavior of CDO managers, because, otherwise, the analysis would take into account
microeconomic utility functions and invoke other concepts from Game Theory.
   Basket default swaps (BDSs) and CDOs are essentially default correlation products; hence,
the main aspect for pricing and risk monitoring is to model the joint default dependency.
The modeling of dependent defaults is difﬁcult because there is very little historical data
available about joint defaults and because the prices of these instruments are not quoted
(i.e. there are usually no reliable quotes in the market). Therefore, the models cannot be
calibrated, neither to defaults nor to prices.
   Dufﬁe and Garleanu (2001) address the risk analysis and market valuation of CDOs in a
jump-diffusion setting for correlated default intensities. They capture the default dependence
by assuming that each intensity process is given by the sum of two afﬁne processes. One
process models the common aspect of different obligors, and the other concerns the idiosyn-
cratic default risk speciﬁc to each obligor. Their framework is theoretically appealing but
there are some disadvantages: the default correlation that can be reached with this approach
is typically too low when compared with empirical default correlations, and, furthermore,
it is not easy to analyze the resulting default dependency structure.
   An extension of this approach are the infectious default models by Davis and Lo (2001)
and Jarrow and Yu (2001), which give more realistic default correlations. The major task
in these models is undoubtedly the estimation and calibration to historical data.
   Copula methods are emerging as the favored pricing approach due to the simplicity in
simulation and calibration. Li (2000) proposes a methodology for the pricing of multi-names
contingent securities. Li proposed the Gaussian copula to capture the joint default depen-
dency in the collateral portfolio. Li’s methodology has been implemented into RiskMetrics
CDO Manager software, and may be seen as an extended version of the CreditMetrics
framework.5 Nowadays this product is well known in the ﬁnancial environment and many
ﬁnancial institutions around the world use it for pricing and risk monitoring CDOs. Also
Frey and McNeil (2001) analyze the effect of the choice of different copulas on the resulting
return distribution of a loan portfolio, and Mashal and Zeevi (2002) investigate comovements
between ﬁnancial assets by introducing a T-copula structure and comparing this copula with
the Gaussian one with a likelihood ratio test.
   Schönbucher and Schubert (2001) present a method to incorporate dynamic default depen-
dency in intensity-based default risk models. They use a copula for the times of default,
which is combined with the individual intensity-based models for the defaults of the oblig-
ors. The authors do not offer an empirical comparison in order to select an appropriate
copula function.
   In this chapter, we would like to provide a framework that allows us to price these
multiple underlying credit securities, and, also, to manage their risk. This approach is a
reduced-form approach as it avoids an accurate deﬁnition of the underlying stochastic default
process, concentrating instead on the dependence structure between pool obligors from a
statistical perspective. Since these products are correlation products, i.e. investors are buying
correlation risk, the dependence structure in the pool is essential for pricing, hedging and
risk managing purposes. Our approach is to use an adequate measure of dependence for
the collateralized portfolio, then to adopt multivariate survival and copulas frameworks to

5 CreditMetrics is a widely used portfolio-based credit methodology. Refer to the Credit Metrics Guide. RiskMetrics
Group http://www.riskmetrics.com.
202                                                                   Copula Methods in Finance

deﬁne an underlying dependence structure. The model incorporates the clustering of default
over time due to default correlation. By revisiting statistical survival analysis, it is possible
to construct a model for correlated times until default that has to be simulated. Finally, our
methodology allows us to price CDOs (and basket default swaps or percentage loss as well)
and to manage their risk by applying the appropriate pay-off functions to each series of
simulated times until default.

                            7.3     COPULA APPROACH
One of the main issues concerning credit risk is without doubt the modeling of joint dis-
tributions between default times. Li (2000) suggests that a Gaussian copula could be a
suitable tool for such a problem. The key issue of this framework is to shift the focus from
modeling the dependency between default events up to a ﬁxed time horizon (i.e. discrete
variables) to the dependency between default times which are continuous random variables
and do not depend on an arbitrarily chosen time horizon.
   We introduce the topic by brieﬂy reviewing the survival time approach to single default
modeling and its calibration, and then examining the joint ones.

7.3.1 Review of single survival time modeling and calibration
Li (2000) describes a default by a survival function S(t) = Pr(τ > t), which indicates the
probability that a security will attain age t, in the spirit of the reduced form models of
Chapter 1. The survival time τ is called the time until default, or default time. If S is
differentiable, by deﬁning the hazard rate or intensity h(u) = −S  (u)/S(u), the survival
function can be expressed in terms of the hazard rate function
                                              t           
                                S(t) = exp −        h(u) du
                                                    0

and the default arrival is an inhomogeneous Poisson process.
   A typical assumption is that the hazard rate is a constant, h. In this case, the survival
time follows an exponential distribution with parameter h and the default arrival follows a
homogeneous Poisson process.
   The survival time distribution may be easily generalized by assuming a Weibull distribution.
   Dufﬁe and Singleton (1998) and Lando (1998) consider h as a (non-negative, continuous,
adapted) stochastic process: in this case the process of default arrivals, as we recalled in
Chapter 1, is a Cox process. Under a Cox process the default time τ can be equivalently
characterized in one of the following ways:
                                            t              
                                  τ := inf t :     hs ds ⩾ θ
                                                0

where θ is an exponential r.v. of parameter 1, independent of the intensity process, or:
                                         
                                 τ := inf t ⩾ 0 : Ň > 0

where Ň is the Cox process.
   Under the Cox assumption, modeling a default process is equivalent to modeling the
intensity process. As there are many similarities between the hazard and the short rate,
Credit Risk Applications                                                                       203

many short rate processes may be borrowed to model the hazard rate. The afﬁne class is
particularly appealing (see Chapter 1).
   In both the Poisson and Cox cases, the hazard rate function used to characterize the
distribution of the survival time can be obtained for a given credit in many ways:

• From historical default rates provided by rating agencies;
• By using the Merton approach (refer to Delianedis & Geske, 1998);
• Extracting default probabilities by using market observable information, such as asset
  swap spread, credit default swap spread or corporate bond prices (refer to Li, 1998).

  In the ﬁrst case one obtains the intensity or intensity process under the historical measure,
while in the second and third cases it is obtained under the risk neutral measure.
  It is shown under the Dufﬁe and Singleton (1998) approach that a defaultable instrument
can be valued as if it were a default-free instrument by discounting the defaultable cash
ﬂow at a credit risk adjusted factor, as follows: let Y be a cash ﬂow (random payment)
contingent on no default occurrence before T . Its value at time t is under zero recovery
             T                             T              
      E exp −    rs ds 1{r>T } Y |ςt = E exp −    (rs + hs ) ds Y |Ft                        (7.1)
                    t                                         t

where the expectation is taken, as usual, under a risk-neutral probability

• ςt is the market ﬁltration, ςt = Ft ∨ Ht
• Ht is the ﬁltration generated by defaults: Ht = σ (τi ∧ s, s ⩽ t, i = 1, 2, . . . , I )
• Ft is the default-free ﬁltration

and Y is FT -measurable.
   Formula (7.1) is crucial in two respects. First, loosely speaking, increasing the short rate
by the intensity rate permits us to take default into account, and keep using the standard rule:
take as fair value the expected discounted value of the ﬁnal pay-off. Second, the replacement
of the enlarged ﬁltration ςt with the default-free one turns out to be of particular usefulness
in practical applications, for obvious reasons.
   In addition, if the underlying factors affecting default and those affecting the interest
rate are independent, the credit risk adjusted discount factor is the product of the risk-free
                              T                                                         T
discount factor, E[exp(− t rs ds)], and the pure credit discount factor, E[exp(− t hs ds)].
   Under this framework, and the assumption of a piecewise constant hazard rate function
(extracted from some market data, i.e. asset swap spread or credit default swap spread at
different maturities), it is possible to specify the distribution of the survival time.
   Our interest will be a credit portfolio of n assets and, in the following application, we will
price some multi-name credit derivatives. Therefore, we need to analyze the corresponding
multivariate problem and the joint survival times distribution.


7.3.2 Multiple survival times: modeling
Suppose you have I different ﬁrms, each with a Cox default arrival process, and deﬁne the
default time or survival time of the ith ﬁrm, τi , together with its intensity at time s, his , and
204                                                                                         Copula Methods in Finance

its threshold, θi . These quantities are related by the fact that
                                                   t            
                                                        i
                                        τi := inf t :  hs ds ⩾ θi
                                                               0

  Multiple default times and their association can be introduced in three different ways.
  First, one can correlate directly the intensity processes of the I ﬁrms, his , i = 1, . . . , I.
However, as Jouanin et al. (2001) show, correlating intensities does not permit us to obtain
high dependence between default times.
  Second, one can adopt the approach of Li (2000): the joint survival function of the I ﬁrms,

                        S(t1 , t2 , . . . , tI ) = Pr(τ1 > t1 , τ2 > t2 , . . . , τI > tI )

has, by the version of Sklar’s theorem in section 2.6, Chapter 2, a (survival) copula repre-
sentation,

                     S(t1 , t2 , . . . , tI ) = C τ1 ,τ2 ,...,τI (S1 (t1 ), S2 (t2 ), . . . , SI (tI ))

Li models C directly using a Gaussian assumption.
  Third, one can correlate the thresholds θi by assuming a speciﬁc copula for them:

                S(m1 , m2 , . . . , mI ) = Pr(θ1 > m1 , θ2 > m2 , . . . , θI > mI )
                                            = C θ1 ,θ2 ,...,θI (S1 (m1 ), S2 (m2 ), . . . , SI (mI ))

where Si is the survival function of θi , S is their joint one. This is the so-called threshold
approach of Giesecke (2001) and Schönbucher and Schubert (2001). In this framework,
one can derive the (survival) copula between the default times from the threshold one as
follows:

             C τ1 ,τ2 ,...,τI (S1 (t1 ), . . . , SI (t1 ))
                                                        t1                     tI       
                                                                                         I
                    = E C θ1 ,θ2 ,...,θI exp −                hs ds , . . . , exp −
                                                               1
                                                                                        hs ds
                                                           0                                    0

In what follows we will not discuss which of the second and third approaches is “the better”,
since we will assume deterministic intensities, under which they coincide6 :

                                            C τ1 ,τ2 ,...,τI = C θ1 ,θ2 ,...,θI

   In particular, we will refer to Li’s approach, which can be speciﬁed as follows: the
author extends the CreditMetrics model to a Gaussian copula model capturing the timing
risk of default. In this setup the pairwise default correlation of survival times is taken by the
pairwise asset correlation (refer to the CreditMetrics user manual). Each survival time for

6 However, a comparison between the two approaches is given in Jouanin et al. (2001).
Credit Risk Applications                                                                              205

the ith credit in the portfolio, τi , has a distribution function, Fi (t). Using a normal copula
we obtain the joint distribution of the survival times as:

          F (t1 , t2 , . . . , tn ) = n (−1 (F1 (t1 )) , −1 (F2 (t2 )) , . . . , −1 (Fn (tn )))

where n is the n-dimensional normal cumulative function with correlation matrix  (given
by the asset correlation matrix).
  In order to simulate correlated survival times we introduce another series of random
variables Y1 , Y2 , . . . , Yn such that

                             Yi = −1 (Fi (ti ))        for i = 1, 2, . . . , n

  There is a one-to-one mapping between Y and τ . Li (2000) sums up in the following
scheme:

• Simulate Y1 , Y2 , . . . , Yn from an n-dimensional normal distribution with correlation matrix
  given by the asset correlation of the underlying credit.
• Obtain τ1 , τ2 , . . . , τn using the relation τi = Fi−1 ((Yi )) for i = 1, 2, . . . , n.

   With each simulation run it is possible to generate survival times for all credits in the
portfolio. With this information one can price any credit derivatives structure written on the
portfolio.
   As for risk monitoring, one has to look at the distribution of losses and take its percentiles.
Obviously, the simulation allows us to determine this distribution easily by taking into
account the CDO’s waterfall scheme and the simulated losses.
   The ability to measure risk and assess prices relies on the details of each deal’s liability
structure (this point is very important, especially when one has to analyze a cash ﬂow CDO
where, sometimes, the waterfall structure is particularly tailored to the deal, and may involve
a certain kind of overcollateralization test to be performed and other particularities that have
to be taken into account).
   This approach may be extended to other copula functions by applying the sampling
algorithms described in Chapter 5.

7.3.3 Multiple defaults: calibration

If one could rely on no-arbitrage pricing of some multi-name credit derivative, it would
be possible to infer the implied default correlation (or concordance measure, in general),
in the same way as one could do with derivatives on multiple underlyings. However, we
have already remarked that the multi-name credit derivatives market is – at the present
stage – very illiquid. Therefore the relevant copulas can be calibrated in one of the follow-
ing ways:

• Estimating discrete default correlations, i.e. the correlations between the default indicators
  at a given horizon, from historical joint default occurrences (see, for instance, Nagpal &
  Bahar, 2001, Erturk, 2000, and the joint default probabilities in Carty, 1997): this method
  is quite unsatisfactory, since the margins are Bernoulli r.v.s.
206                                                                   Copula Methods in Finance

• Estimating from the same observations the survival time correlations, i.e. the correlations
  between the times to default, which are not Bernoulli.
• Using Moody’s diversity score, as in Jouanin et al. (2001) or Giesecke (2001).
• “Approximating” them through equity correlation, in the spirit of structural models.

We will take the last approach, as in most market practice (see, for instance, CreditMetricT M
and KMV’s Portfolio ManagerT M ).
   This approach may be extended to other copula functions by applying the sampling
algorithms described in Chapter 5. Obviously for multiple underlying credit instruments the
simulations from elliptical copulas, such as Gaussian and the Student t, are much easier
than what happens for other copulas because it is often really difﬁcult to derive recursive
formulas to get the desired draws within a general n-variate setting.
   In the following subsections we explain the pricing and risk monitoring for CDOs and
BDSs. We follow the approach and notation explained in the factor copula approach (i.e.
marginal distributions independent given a common latent factor) of Laurent and Gregory
(2002).

7.3.4 Loss distribution and the pricing of CDOs

Our aim is to compute the fair price at time 0 as the expected pay-off at time 0 for a standard
CDO. For simplicity, we also assume independence between default dates and interest rates,
since the most important issue we address is the modeling of dependence between default
dates. Similarly we assume that the recovery rates on the underlying assets are independent
of default times and interest rates; hence, we would like to proceed as conditioned to the
joint determination of the interest rates and recovery rates.
   We consider n reference obligors with a nominal amount Ai and a recovery rate Ri with
i = 1, 2, . . . , n. Li = (1 − Ri )Ai will denote the loss given default (or net loss) for the
ith credit. Let τi be the default time of the ith name and Ni (t) = 1{τi <t} be the counting
process which jumps from 0 to 1 at the default time of name i. Finally L(t) will denote the
cumulative loss on the collateral portfolio at time t:

                                             n
                                             
                                    L(t) =         Li Ni (t)                              (7.2)
                                             i=1


which is thus a pure jump process.
  Let us consider a tranche of a CDO, where the default payment leg pays all losses that
occur on the collateral
                       portfolio above a threshold C and below a threshold D, where
0 ⩽ C ⩽ D ⩽ ni=1 Ai .                                         
  When C = 0 we consider the equity tranche; if C > 0 and D < ni=1 Ai we speak of the
mezzanine tranches, and when D = ni=1 Ai we consider senior or SuperSenior tranches.
  Let M(t) be the cumulative losses on a given tranche, hence
                                   
                                           0       if L(t) ⩽ C
                          M(t) =     L(t) − C       if C ⩽ L(t) ⩽ D                       (7.3)
                                   
                                       D−C          if L(t) ⩾ D
Credit Risk Applications                                                                                  207

or equivalently:

                  M(t) = (L(t) − C)1{C,D} (L(t)) + (D − C)1{D,ni=1 Ai } (L(t))

  We notice that as L(t), M(t) is a pure jump process. By using this framework the default
payments are the increments on M(t). Hence there is a payment on every jump of M(t).
  Since M(t) is an increasing process, we can deﬁne Stieltjes integrals with respect to
M(t). But, M(t) is constant apart from jump times, so any Stieltjes integral with respect to
M(t) turns out to be a discrete sum with respect to every jump time.
  Let B(0, t) be the discount factor for the maturity t, and let T denote the maturity of the
CDO. Hence, we can write the price of the default payment leg of the given tranche as:
                                                T
                                        EP           B(0, t) dM(t)
                                                 0


where P denotes a risk-neutral probability measure.7
  The term within the square brackets is the sum of the discounted default payments on
the tranche. By using the integration by parts and Fubini’s theorem we have:
            T                                                   T
       P                                         P
   E             B(0, t) dM(t) = B(0, T )E [M(T )] +                  f (0, t)B(0, t)E P [M(t)] dt       (7.4)
            0                                                    0


where f (0, t) denotes the instantaneous forward rate:

                                                              dB(0, t)
                                      f (0, t)B(0, t) = −
                                                                dt

  The default leg may be discretized as follows8 :

                                    
                                                                     
                                           B(0, ti ) M(ti ) − M(ti−1 )
                                     i=1


where t0 = 0 and t = T ,  indicates the number of payment dates between successive
defaults by the maturity T .
  We would like to remark that we only need the ﬁrst moment of the cumulative loss on
the tranche. This can be computed when the distribution of total losses has been simulated
via a pure Monte Carlo approach.
  The fair spread (or equivalently the fair premium) of that tranche has to be found by
putting into an equivalence the default leg with the premium leg.

7 We observe that the risk-neutral measure P is not likely to be unique, since the market is incomplete in this
setup without further assumptions on the structure of the market. What we have in mind, and what we need here,
is that the market chooses some P that we take as given. The same observation will apply many times in what
follows.
8 We assume that the net default payments occur at  discrete dates between 0 and T .
208                                                                        Copula Methods in Finance

  In this discrete time case the premium leg may be written as:
                         m
                         
                    P
                E              i−1,i · W · B(0, ti ) · [D − C] · 1(L(t)⩽C)
                         i=1
                            m
                                                                                      
                            
                        +         i−1,i · W · B(0, ti ) · [D − L(t)] · 1(C⩽L(t)⩽D)
                            i=1

where D − C is the tranche size at inception, and where m denotes all premium payment
dates, ti denotes the premium payment date, i−1,i denotes the tenor between successive
premium payment dates which takes into account the day count convention, W is the
fair spread, D − L(t) is the outstanding
                                       tranche notional at time t ∈ [0, T ] and, clearly,
0 ⩽ M(t) ⩽ D − C since 0 ⩽ L(t) ⩽ ni=1 Ai for all t.
   This formula may be written also as:
                   m                                                                     
                   
             EP             i−1,i · W · B(0, ti ) min {max [D − L(t), 0] , D − C}             (7.5)
                    i=1

 In a continuous time setting, if we suppose that the premium is paid instantaneously, we
may express the discounted value at time 0 of the premium leg of a CDO as
                                                T
                                           P
                                    W ·E             B(0, t)g(L(t)) dt
                                                0

where g(L(t)) = min {max [D − L(t), 0] , D − C}.
  Hence, the fair (equilibrium) instantaneous spread (or premium) W is given by
                                                           
                                               T
                                        E P 0 B(0, t) dM(t)
                                    W=                        
                                             T
                                       E P 0 B(0, t)g(L(t)) dt

   We remark that the only thing we need in order to price each CDO tranche is to obtain
the simulated counting process via the chosen copula framework.
   Moreover we stress that we model the copula of the times to default of the different
obligors, without considering the possible stochastic dynamics of the default intensities;
since our default intensities are assumed to be deterministic functions of the time, i.e.
constant stepwise functions where each step is given by the corresponding single name
credit default swap at the analysis date (refer to section 7.5, Technical Appendix, for more
details).

7.3.5 Loss distribution and the pricing of homogeneous basket default swaps
We consider the pricing of a basket default swap. In a ﬁrst-to-default swap there is a default
payment at the ﬁrst-to-default time. In a k out of n basket default swap (k ⩽ n), where
n denotes the number of obligors, there is a default payment at the kth default time. The
payment corresponds to the non-recovered part of the defaulted asset.
Credit Risk Applications                                                                           209

   If the notional amounts of all credits in the basket are equal then we refer to a homoge-
neous basket, i.e. Ai = A for every i = 1, 2, . . . , n.
   As before, we compute separately the price of the premium leg and of the default leg.
The basket premium is such that the prices of the two legs are equal.
   We make the same assumptions as in the previous chapter for the interest rates and the
recovery rates. Moreover, for simplicity, we do not take into account accrued premium
payments between payment dates.
   We use  the same notation as before.
   N (t) = ni=1 Ni (t) denotes the counting process indicating the total number of defaults
in the basket. If N (t) ⩾ k the basket payments are exhausted. If 0 ⩽ N (t) < k the premium
is paid on the outstanding notional for the ith underlying credit A for a homogeneous basket.
   The discounted expectation of premium payment is given by:
                                                                          
                              m
                        EP       j −1,j · W · B(0, tj ) · A · 1{N (t)<k}             (7.6)
                                  j =1

   The homogeneity assumption allows us to compute the price of the default payment leg
knowing the distribution of the number of defaults only.
   We denote by Sk (t) = P (N (t) < k) the survival function of the kth default time τ(k) , i.e.
Sk (t) = P (N (t) < k) = P (τ(k) > t) = 1 − Fk (t); hence dSk (t) = Sk (t + dt) − Sk (t) is the
probability that the kth default time occurs in [t, t + dt).
   Under previous assumptions on interest rates and recovery rates (for simplicity we assume
that the recovery rate is the same for all names), we can then write the price of the kth-to-
default payment leg as:
                                                                           T
         P
       E [(1 − R) · A · B(0, τk ) · 1(0⩽τ(k) ⩽T ) ] = (1 − R) · A               B(0, t) dFk (t)   (7.7)
                                                                           0

where T is the maturity of the homogeneous k out of n default basket.
  The default leg in brackets may also be written as follows:
                              T
             − (1 − R) · A          B(0, t) dSk (t)
                              0
                                                     T                 
                 = (1 − R) · A 1 − Sk (T )B(0, T ) +     Sk (t) dB(0, t)
                                                                  0
                                                     T                          
                 = (1 − R) · A 1 − Sk (T )B(0, T ) −     f (0, t)B(0, t)Sk (t) dt
                                                                  0

where, as before, f (0, t) denotes the instantaneous forward rate:

                                                               dB(0, t)
                                         f (0, t)B(0, t) = −
                                                                 dt
  In the following empirical application we simulate via the copula framework the distri-
bution of the times to default number and the distribution of each kth default time with
k = 1, 2, . . . , n.
210                                                                        Copula Methods in Finance

                           Table 7.1    Collateral portfolio description

                        Initial portfolio par value        500 000 000 euros
                        Number of obligors                        50
                        Moody’s diversity score                  29.25
                        Maturity date                         18/05/2006


                                Table 7.2    Tranches of the CDO

                              Tranche name            Notional in euros

                              SS                        437 500 000
                              A                          11 000 000
                              B                          19 500 000
                              C                          20 000 000
                              Equity                     12 000 000


  As before, in a continuous time setting, we have:
                                                             
                                               T
                                E P (1 − R) 0 B(0, t) dFk (t)
                          W =                            
                                           T
                                   E P 0 B(0, t)Fk (t) dt


 7.4    APPLICATION: PRICING AND RISK MONITORING A CDO
7.4.1   Dow Jones EuroStoxx50 CDO
In this section we extend the empirical example shown in Meneguzzo and Vecchiato (2004).
This empirical application, as far as we know, is the ﬁrst application to a real market CDO
and a real market basket default swap (BDS).
   We consider a synthetic CDO called EuroStoxx50 because it is composed by 50 single
name credit default swaps on 50 credits that belong to the DJ EuroStoxx50 equity index.
Each reference credit has a notional equal to 10 million euros, hence the collateral portfolio
has a nominal amount equal to 500 million euros. The inception date of this CDO was May
18, 2001, and it lasts 5 years with a maturity on May 18, 2006. This CDO is composed
by ﬁve tranches with the standard prioritized scheme. The riskiest tranche is the equity
tranche, which did not have a Moody’s rating at inception, then, in order, we have four
other tranches respectively rated at inception Baa3, Aa2, AAA and, ﬁnally, the less risky
tranche called SuperSenior (SS). Tables 7.1 and 7.2 report the CDO structure. Up to now
this CDO has not experienced any default.
   The analysis date is set on August 30, 2002. We report some pictures depicting the
collateral by rating at the analysis date, and the collateral description by industry sector (see
Figures 7.1 and 7.2).

7.4.2 Application: basket default swap
The description of the basket default swap we are going to analyze may be found in
Tables 7.3 and 7.4.
Credit Risk Applications                                                                             211

                                             Collateral by Rating
                                                       2%
                                            8%                      12%


                                   8%
                                                                               8%
                    A1
                    A2        4%
                    A3
                    Aa1                                                             8%
                    Aa2
                    Aa3
                    Aaa
                                                                                    4%
                    Baa1
                    Baa2
                    Baa3
                                                                           12%
                                      34%


                            Figure 7.1 Collateral description by rating


                                                 Collateral by Industry
                                                                               4%
                                                              10%



                                                 8%                                            20%
  Auto Manufacturers
  Bank
  Beverages
  Chemicals
  Communications Technology
  Electric Components & Equipment
  Diversified Financial                    12%
  Food                                                                                                4%
  Health Care Providers
  Consumer & Household Products & Services
  Industrial-Diversified
                                             2%                                                      6%
  Insurance
  Oilfield Equipment & Services                2%
  Water Utilities
                                                  6%

                                                                                         14%
                                                            6%
                                                                    2%    4%

                       Figure 7.2 Collateral description by industry sector


                                   Table 7.3 Basket default swap

                           Initial par value                40 000 000 euros
                           Number of obligors                       4
                           Moody’s diversity score                3.25
                           Maturity date                       30/08/2007
212                                                                                                                                                                                                                                                        Copula Methods in Finance

                                      Table 7.4 Basket default swap at August 30, 2002

      Name                                  Amount (euros)                                                                                   5y CDS spread                                                                                  Country – Industry sector

      ABN Amro                                          10 000 000                                                                                                         40                                                               NL – Banking & Finance
      Bayer AG                                          10 000 000                                                                                                         45                                                               DE – Pharmaceutical
      Renault                                           10 000 000                                                                                                        110                                                               FR – Automotive
      Telecom Italia                                    10 000 000                                                                                                        155                                                               IT – Telecommunication


  In this contract the ﬁrst-to-default swap stated (contractual) spread has been ﬁxed to
270 bps.

7.4.3 Empirical application for the EuroStoxx50 CDO
We follow the IFM method by using the corresponding equity prices for each obligor both
in the CDO and in the default basket. Obviously this is a trick solution because, as may
be seen, one cannot observe a time to default series, so one is compelled to use alternative
proxies to get the desired parameter both for the marginals and for the copula itself. As
always in the ﬁnancial market, the equity prices are the best proxies for such a task.
   In the following we report some graphs regarding the behavior of such equity returns.
Daily equity returns for each reference credit go from September 1, 2000 to August 30,
2002 (Figures 7.3 and 7.4).
   As can be seen, the returns pattern shows evidence of heteroskedasticity behavior common
to all daily equity returns. We decide to overcome this fact by taking a GARCH(1, 1) ﬁlter
with Student t error term in order to capture the fatness of the return series tails. For the
sake of completeness we report this model as follows:
                                                                                             yt = σt εt
                                                                                             σt2 = α + βyt−1
                                                                                                         2 + γσ2
                                                                                                               t−1

where εt ∼ i.i.d. tυ (0, 1).
   The estimation method is the standard QMLE. We report some results in Table 7.5. These
results (except Renault) are for the obligors that belong both to the EuroStoxx50 CDO and
to the basket default swap.


                   0.1
                  0.08
                  0.06
                  0.04
                  0.02
                       0
                           04/09/00

                                      04/10/00

                                                 04/11/00

                                                            04/12/00

                                                                       04/01/01

                                                                                  04/02/01
                                                                                             04/03/01

                                                                                                        04/04/01

                                                                                                                   04/05/01

                                                                                                                              04/06/01

                                                                                                                                         04/07/01

                                                                                                                                                    04/08/01

                                                                                                                                                               04/09/01

                                                                                                                                                                          04/10/01

                                                                                                                                                                                     04/11/01

                                                                                                                                                                                                04/12/01

                                                                                                                                                                                                           04/01/02

                                                                                                                                                                                                                      04/02/02
                                                                                                                                                                                                                                 04/03/02

                                                                                                                                                                                                                                            04/04/02

                                                                                                                                                                                                                                                       04/05/02

                                                                                                                                                                                                                                                                  04/06/02

                                                                                                                                                                                                                                                                             04/07/02

                                                                                                                                                                                                                                                                                        04/08/02




                 −0.02
                 −0.04
                 −0.06
                 −0.08
                  −0.1


                                            Figure 7.3                                                  Daily equity returns: Telecom Italia
Credit Risk Applications                                                                                                                                                                                                                                                                          213


                 0.25

                  0.2

                 0.15

                  0.1

                 0.05

                      0
                          04/09/00

                                     04/10/00

                                                04/11/00

                                                           04/12/00

                                                                      04/01/01

                                                                                 04/02/01

                                                                                            04/03/01

                                                                                                       04/04/01

                                                                                                                  04/05/01

                                                                                                                             04/06/01

                                                                                                                                        04/07/01

                                                                                                                                                   04/08/01

                                                                                                                                                              04/09/01

                                                                                                                                                                         04/10/01

                                                                                                                                                                                    04/11/01

                                                                                                                                                                                               04/12/01

                                                                                                                                                                                                          04/01/02

                                                                                                                                                                                                                     04/02/02
                                                                                                                                                                                                                                04/03/02

                                                                                                                                                                                                                                           04/04/02

                                                                                                                                                                                                                                                      04/05/02

                                                                                                                                                                                                                                                                 04/06/02

                                                                                                                                                                                                                                                                            04/07/02

                                                                                                                                                                                                                                                                                       04/08/02
                −0.05

                 −0.1

                −0.15


                                                   Figure 7.4 Daily equity returns: Bayer AG


                Table 7.5                            Estimated GARCH(1, 1) parameters and standard errors

                                         ABN Amro                                                                            Bayer AG                                                             Renault                                                        Telecom Italia

           α                                    0.00002                                                                      0.00003                                                             0.00005                                                                       0.00003
           Std err.                             0.00000                                                                      0.00000                                                             0.00000                                                                       0.00000
           β                                    0.15757                                                                      0.13798                                                             0.10433                                                                       0.07372
           Std err.                             0.00092                                                                      0.00174                                                             0.00037                                                                       0.00033
           γ                                    0.81121                                                                      0.80056                                                             0.83082                                                                       0.87794
           Std err.                             0.00061                                                                      0.00147                                                             0.00032                                                                       0.00014
           υ                                    7.67061                                                                      8.02422                                                             6.25853                                                                       5.39743
           Std err.                             0.09881                                                                      0.06757                                                             0.05987                                                                       0.06566


   As expected, all GARCH parameters in Table 7.5 are statistically signiﬁcant.
   As for the joint behavior, we consider the normal, the Student t and two Archimedean
copulas.
   When we adopt the normal copula we only need to identify the variance–covariance
matrix. An important point is to determine a robust estimate of that matrix. As noted by
Lindskog (2000), the Pearson correlation estimator is not robust for heavy tailed distribu-
tions, so the author recommends the use of Kendall’s tau, especially when the dimensionality
increases. In our case, we have 50 dimensions, and all the equity prices show fatness in
the tails. Hence, we adopt an estimation for the variance–covariance matrix obtained by
computing the empirical Kendall tau coefﬁcient between each pair of equity series.
   The empirical Kendall’s tau is computed as presented in section 7.5.
   We report the scatter plot for some reference entities where it is possible to see more
dispersion in the tails (Figures 7.5 and 7.6). For such a reason we consider a Student t copula.
   When we use the Student t copula we need to identify the degrees of freedom parameter.
We choose to estimate it by the IFM method since, previously, we had estimated all marginal
distributions (Student t c.d.f. is applied to the standardized residuals obtained from the
Student t –GARCH(1, 1) processes in order to map them on [0, 1]n ).
   Figure 7.7 presents the graph of the likelihood function for different degrees of freedom.
As can be seen, the MLE for the degrees of freedom parameter is approximately equal to 8.
214                                                                           Copula Methods in Finance

                        0.1

                       0.08

                       0.06

                       0.04

                       0.02
           Bayer AG




                         0

                      −0.02

                      −0.04

                      −0.06

                      −0.08

                       −0.1
                         −0.15       −0.1    −0.05      0      0.05     0.1     0.15     0.2
                                                       Telecom Italia

                                 Figure 7.5 Scatter plot: Bayer AG–Telecom Italia


                       0.15


                        0.1


                       0.05
           Bayer AG




                         0


                      −0.05


                       −0.1


                      −0.15


                       −0.2
                         −0.15       −0.1    −0.05     0     0.05       0.1     0.15     0.2
                                                        ABN Amro

                                  Figure 7.6 Scatter plot: ABN Amro–Bayer AG


We ﬁnd statistical signiﬁcance for this parameter by using a statistical bootstrap procedure
(refer to Efron & Tibshirani, 1993).
   The same approach has been applied to the Clayton copula after having determined its
copula density (see section 7.5 for a formal derivation).
Credit Risk Applications                                                                                                                                                              215

                                                                                                        Likelihood Student Copula
                                                                    15000



                                                                    10000
    Likelihood Student Copula




                                                                     5000



                                                                        0



                                                                    −5000



                                                                   −10000



                                                                   −15000
                                                                               1   5     9   14   18    22   26    30     35   39   43       47   52   56   60   64    68   73   77
                                Likelihood Student Copula −10793 9955 10200 10067 9940 9823 9720 9630 9533 9465 9404 9350 9290 9247 9208 9172 9139 9101 9074
                                                                                                                        Degree of Freedom


                                                                                       Figure 7.7 Student copula likelihood

                                                                                                       Likelihood Clayton Copula
                                                                   6000


                                                                   4000


                                                                   2000
                                       Likelihood Clayton Copula




                                                                       0


                                                                   −2000


                                                                   −4000


                                                                   −6000


                                                                   −8000
                                                                           0                           0.5                               1                            1.5
                                                                                                                    Alfa

                                                                                       Figure 7.8 Clayton copula likelihood

  As before we adopt the IFM method to obtain an estimate for the Archimedean copula
parameter. In Figure 7.8 we present the form of the log-likelihood function.
  The IFM estimator for alpha is equal to 0.48. As before, its signiﬁcance is supported by
a bootstrap procedure. In order to get the simulations for each obligor’s time to default, we
assume a marginal density for each obligor’s time to default, according to an exponential
density for which the hazard term has been derived by the credit default swap curve at
216                                                                              Copula Methods in Finance

August 30, 2002, for each obligor in the collateral (see Table 7.6). Each hazard term is
assumed as follows:
                                                        St
                                                ht =
                                                       1−R

where the recovery rate R is ﬁxed to 30%, as is common practice, in order to price the
credit default swap contract, and St represents the credit default swap spread at a given
term t.
   In Table 7.6 we report for each obligor the credit default swap curve as at August 30,
2002 (the analysis date).
   We would like to refer the readers to section 7.5 for a more extensive discussion and
further details about the time to default derivation, given the hazard rate.
   We also present some histograms in order to show the simulated time to default distribu-
tion for some reference credit in the collateral (Table 7.7).
   Since, for pricing purposes, we are interested in the number of defaults that may occur
prior to maturity of the CDO, we report in Table 7.8 the percentage of these times, for some
obligors, in 10 000 simulations before maturity, expressed in annual points (3.77 years).

7.4.4 EuroStoxx50 pricing and risk monitoring
In our empirical application we generate, for each reference credit in the collateral portfolio,
an exogenous recovery rate from an independent, Beta distribution9 that is across all obligors
and independent from the times to default and the interest rates.
   We report the results for each chosen copula in Tables 7.9, 7.10 and 7.11. The fair spread
is computed by equaling the premium leg and the default leg of the contract for each chosen
copula. Clearly, this is related to the expected loss as shown previously.
   The loss statistics for each copula are reported in Tables 7.12, 7.13 and 7.14.
   In the previous tables each level of VaR was computed from the percentile of each
tranche’s cumulative losses distribution. As can be seen, results from the elliptical copulas
are close to each other. The Student copula is able to capture more fatness in the tail.
   The results from the Clayton copula do not appear to be useful, because this copula
is not able to capture the upper tail dependence. Tail dependence is important to obtain
more simulated times to default before the deal matures. We will return to this point in the
following basket default swap empirical analysis.
   Finally, we present the Box–Wishart plot for the collateral losses. As can be seen, the
Student copula gives more losses than any other simulated copula (Figure 7.9).

9 The Beta distribution has a range 0 ⩽ x ⩽ 1 and shape parameters v > 0 , ω > 0. Its density is given by:


                                               x v−1 (1 − x)ω−1
                                                   B(v, ω)

  where B(v, ω) = 01 uv−1 (1 − u)ω−1 du.
  Its mean is equal to v/(v + ω) and its variance is equal to vω/[(v + ω)2 (v + ω + 1)].
  We choose the parameters v, ω by ﬁxing the mean equal to 50% and variance equal to 30% (these data are
reported in a latest Moody’s study on recoveries from defaulted corporate bonds).
                   Table 7.6   Collateral obligors and mid-market CDS 1-, 3- and 5-year spreads at August 30, 2002

Obligors               1 yr             3 yr            5 yr               Obligors              1 yr            3 yr     5 yr

ABN Amro              20               30              40                  Generali             40              55        60
Aegon NV             150              230             230             HypoVereinsbank           20              25        32
Ahold                140              150             160                ING Groep              30              35        49
Air Liquide           35               50              50                  LVMH                170             180       195
Alcatel SA          1500             1500            1500                  L’Oreal              15              22        30
Allianz AG            40               50              75                Munich Re              50              70        75
Aventis               25               40              45                   Nokia              100             140       140
Axa                  130              200             200                   Philips            130             160       170
Basf                  15               30              30             Pinault-Printemps        420             420       420
Bayer AG              27               35              45                Repsol YPF            525             525       525
BBVA                  25               40              45            Royal Dutch Petrol.        10              20        25
BNP Paribas           20               25              30              Royal KPN NV            250             290       315
BSCH                  45               60              65                    RWE                30              45        65
Carrefour             40               50              65              San Paolo-IMI            20              25        40
DaimlerChrysler      110              140             155             Sanoﬁ-Synthelabo          30              40        50
Danone                15               30              30                  Siemens              45              60        70
Deutsche Bank         22               35              40             Société Generale        25              30        38
Deutsche Telecom     300              345             335                   SUEZ                50              70        95
Dresdner Bank         20               30              40               Telecom Italia         135             155       155
E.on                  35               60              60                 Telefonica           160             170       205
Endesa SA             75              100             100                TotalFinaElf           10              15        25
Enel Spa              40               50              60                 Unicredito            20              30        37
ENI                   15               25              32                  Unilever             25              35        45
Fortis                30               40              45             Vivendi Universal        975            1150      1150
France Telecom       435              460             470                Volkswagen             50              65        78
218                                                                                               Copula Methods in Finance

           Table 7.7        Histogram of simulated default times for Bayer AG and Air Liquide

1600                                                       1600

1400

1200
                                                           1000
1000

 800

 600
                                                               500
 400

 200

  0                                                              0
       0    500         1000          1500      2000    2500         0    200     400       600    800    1000   1200   1400   1600
             Gaussian copula (Bayer AG)                                         Gaussian copula (Air Liquide)

2000                                                       1800

1800                                                       1600
1600                                                       1400
1400
                                                           1200
1200
                                                           1000
1000
                                                               800
 800
                                                               600
 600

 400                                                           400

 200                                                           200

  0                                                              0
       0   500       1000      1500      2000    2500   3000         0   200    400   600    800 1000 1200 1400 1600 1800 3000
              Student copula (Bayer AG)                                         Student copula (Air Liquide)

1800                                                       2000

1600                                                       1800

                                                           1600
1400
                                                           1400
1200
                                                           1200
1000
                                                           1000
 800
                                                               800
 600
                                                               600
 400                                                           400

 200                                                           200

   0                                                            0
       0     500        1000          1500      2000    2500         0          500         1000         1500      2000        2500
                 Clayton copula (Bayer AG)                                      Clayton copula (Air Liquide)
Credit Risk Applications                                                                              219

                   Table 7.8   Percentage of default times before CDO maturity

                                             Gaussian         Student             Clayton

                  Air Liquide                0.0154%         0.0177%              0.0137%
                  Pinault-Printemps          0.1968%         0.1983%              0.1415%
                  Bayer AG                   0.0133%         0.0137%              0.0106%
                  BNP Paribas                0.0101%         0.0108%              0.0094%

                               Table 7.9      Results: Gaussian copula

                           Tranche         Fair spread           Expected loss

                           SS                 0.03%                     496 364
                           A                  0.77%                     346 588
                           B                  1.93%                   1 509 068
                           C                  6.97%                   5 142 699
                           Equity            23.07%                   7 607 209

                           Table 7.10     Results: Student copula 8 d.o.f.

                           Tranche         Fair spread           Expected loss

                           SS                 0.04%                     795 313
                           A                  0.97%                     430 133
                           B                  2.10%                   1 628 398
                           C                  6.61%                   4 893 133
                           Equity            22.04%                   7 474 042

                               Table 7.11     Clayton copula α = 0.48

                           Tranche         Fair spread           Expected loss

                           SS                 0.00%                       3,523
                           A                  0.04%                      16 350
                           B                  0.34%                     281 028
                           C                  4.04%                   3 267 464
                           Equity            18.53%                   7 224 680

                           Table 7.12 Loss statistics: Gaussian copula

  Statistics          SS                 A                   B                    C          Equity

  Median              0                  0                   0                  0            9 858 666
  Mean               496 364            346 588           1 509 068          5 142 699       7 607 209
  Std. dev.        4 165 898          1 833 116           4 676 705          7 453 992       4 934 804
  Min                 0                  0                   0                  0              0
  Max             89 465 261         11 000 000          19 500 000         20 000 000      12 000 000
  95% VaR             0                  0               16 618 167         20 000 000      12 000 000
  99% VaR         20 072 488         11 000 000          19 500 000         20 000 000      12 000 000
220                                                                                    Copula Methods in Finance

                                     Table 7.13    Loss statistics: Student copula 8 d.o.f.

 Statistics                     SS                    A                 B                 C           Equity

 Median                       0                        0               0                 0           9 360 774
 Mean                        795 313                 430 133        1 628 398         4 893 133      7 474 042
 Std. dev.                 6 432 416               2 044 136        4 918 527         7 407 938      4 916 958
 Min                          0                        0               0                 0             0
 Max                     133 924 467              11 000 000       19 500 000        20 000 000     12 000 000
 95% VaR                      0                        0           19 045 358        20 000 000     12 000 000
 99% VaR                  28 117 222              11 000 000       19 500 000        20 000 000     12 000 000


                                 Table 7.14       Loss statistics: Clayton copula α = 0.48

  Statistics                    SS                    A                B                 C           Equity

  Median                         0                    0               0                 0           8 717 641
  Mean                            3 523               16 350         281 028         3 267 464      7 224 680
  Std. dev.                     184 585              350 643       1 810 103         5 706 847      4 884 579
  Min                            0                    0               0                 0             0
  Max                        13 951 110           11 000 000      19 500 000        20 000 000     12 000 000
  95% VaR                        0                    0               0             18 434 870     12 000 000
  99% VaR                        0                    0           10 689 314        20 000 000     12 000 000



                             x 107
                        20

                        18

                        16

                        14

                        12
               Values




                        10

                        8

                        6

                        4

                        2

                        0
                                          1                      2                            3
                                                           Column Number

                        Figure 7.9 Collateral losses: 1. Gaussian 2. Student t 3. Clayton
Credit Risk Applications                                                                221

7.4.5 Pricing and risk monitoring of the basket default swaps
Many previous discussions may be tailored to the basket default swap case. As before we
report in Tables 7.15, 7.16 and 7.17 the results obtained for each chosen copula. Due to its
smaller dimensions we also introduce the Frank copula in the analysis. In section 7.5 we
derive the Frank copula density (Table 7.18 reports the results) in order to get the MLE of
its parameter.
   As for the loss statistics we report the results in Tables 7.19–7.22.
   In Figures 7.10, 7.11 and 7.12 we show the likelihood function for each estimated copula
from the corresponding equity series returns. We estimated that the d.o.f. of the Student t

                                Table 7.15       Gaussian copula

                               Tranche                 Fair spread

                               Last-to-default           0.00%
                               3rd-to-default            0.01%
                               2nd-to-default            0.12%
                               1st-to-default            2.34%



                                Table 7.16      T -copula 4 d.o.f.

                               Tranche                 Fair spread

                               Last-to-default           0.00%
                               3rd-to-default            0.00%
                               2nd-to-default            0.14%
                               1st-to-default            2.53%



                            Table 7.17       Clayton copula α = 0.53

                           Tranche                         Fair spread

                           Last-to-default                    0.00%
                           3rd-to-default                     0.00%
                           2nd-to-default                     0.07%
                           1st-to-default                     1.93%



                             Table 7.18      Frank copula α = 1.61

                           Tranche                         Fair spread

                           Last-to-default                    0.00%
                           3rd-to-default                     0.00%
                           2nd-to-default                     0.09%
                           1st-to-default                     2.03%
222                                               Copula Methods in Finance

          Table 7.19     Gaussian copula

         Statistics        First-to-default

         Median                  0
         Mean                 1 111 719
         Std. dev.            2 604 153
         Min                     0
         Max                 10 000 000
         95% VaR              8 253 625
         99% VaR             10 000 000



       Table 7.20     Student copula 4 d.o.f.

      Statistics          First-to-default

      Median                      0
      Mean                     1 190 738
      Std. dev.                2 680 928
      Min                         0
      Max                     10 000 000
      95% VaR                  8 398 548
      99% VaR                 10 000 000



      Table 7.21      Clayton copula α = 0.53

      Statistics               First-to-default

      Median                         0
      Mean                         951 800
      Std. dev.                   2 411 352
      Min                            0
      Max                        10 000 000
      95% VaR                     7 666 130
      99% VaR                    10 000 000



      Table 7.22      Frank copula α = 1.61

      Statistics               First-to-default

      Median                         0
      Mean                        1 002 489
      Std. dev.                   2 479 172
      Min                            0
      Max                        10 000 000
      95% VaR                     7 919 957
      99% VaR                    10 000 000
Credit Risk Applications                                                                                                      223

                                                                                 Likelihood Student Copula
                                               300


                                               200
                   Likelihood Student Copula

                                               100


                                                 0


                                               −100


                                               −200


                                               −300
                                                      0          10         20      30     40      50         60    70   80
                                                                                    Degree of Freedom

                                                          Figure 7.10 Log-likelihood Student t copula


                                                                                  Likelihood Clayton Copula
                                                 500


                                                      0
                 Likelihood Clayton Copula




                                                −500


                                               −1000


                                               −1500


                                               −2000


                                               −2500


                                               −3000
                                                          0           0.5           1       1.5         2          2.5    3
                                                                                            Alfa

                                                              Figure 7.11 Log-likelihood Clayton copula


copula was approximately equal to 4; the alpha for the Clayton copula was equal to 0.53,
and the alpha for the Frank copula was equal to 1.61. All estimates, as before, are signiﬁcant.
All comments previously made still apply.
   In Figure 7.13 we show the scatter plot implied by the Gaussian copula with Kendall’s
tau dependence matrix for ABN Amro, Bayer AG and Renault SA; the Student t copula for
the same companies can be seen in Figure 7.14.
   We conclude this application stressing that there is no standard way to model multiple
defaults. We have considered a pure Monte Carlo approach by using a copula framework
224                                                                                                             Copula Methods in Finance

                                                                                Likelihood Frank Copula
                                                     5



                                                     0
                       Likelihood Frank Copula


                                                     −5



                                                 −10



                                                 −15



                                                 −20
                                                          0   0.5     1    1.5      2    2.5    3     3.5   4     4.5    5
                                                                                         Alfa

                                                              Figure 7.12 Log-likelihood Frank copula


                                                                    Gaussian Copula simulated u1, u2, u3
                                                 1


                             0.8


                             0.6
             Renault




                             0.4


                             0.2


                                         0
                                        1


                                                 0.5
            Bayer

                                                          0
                                                                                        0.4         0.6         0.8          1
                                                              0           0.2
                                                                                         ABM Amro

             Figure 7.13 Gaussian copula for ABN Amro, Bayer AG, Renault SA


as the choice of the copula function is crucial for pricing, hedging and risk monitoring. As
for credit risk purposes, the copula has often to be assumed, so we propose to select the
copula that allows us to obtain results closer to those found in the real market activity. In
such a way, we found that the choice of a Student t copula allows us to obtain more reliable
results.
Credit Risk Applications                                                                               225

                                  Student Copula simulated u1, u2, u3 with d.f. = 4
                       1


                     0.8


                     0.6
           Renault




                     0.4


                     0.2


                      0
                     1


                           0.5
               Bayer

                                   0                                                         0.8   1
                                                                    0.4         0.6
                                       0              0.2
                                                                          ABM Amro

       Figure 7.14 Student t copula with 4 d.o.f. for ABN Amro, Bayer AG, Renault SA


                                   7.5 TECHNICAL APPENDIX
7.5.1 Derivation of a multivariate Clayton copula density

An n-variate Clayton copula is given by:

                                                               n                     − 1
                                                                                        α
                                 C(u1 , u2 , . . . , un ) =           u−α
                                                                       i −n+1
                                                                i=1


where α > 0.
  The Clayton copula density is given by:
                                                  n           − 1 −n
               ∂ nC               α1 + n  n                        α
                               n               −α−1       −α
                            =α              ui         ui − n + 1
          ∂u1 ∂u2 . . . ∂un        1             α           i=1              i=1


where  indicates the usual Euler  function.
  The derivation is very easy because it offers a recursive formula.
  In the 4-variate case, as is necessary for the empirical application to the basket default
swap we have considered, we have the following density:

                                                                         − α1 −4
 (1 + α)(1 + 2α)(1 + 3α)u1−α−1 u2−α−1 u3−α−1 u4−α−1 u−α   −α   −α   −α
                                                     1 + u2 + u3 + u4 − 3
226                                                                             Copula Methods in Finance

7.5.2 Derivation of a 4-variate Frank copula density10
A 4-variate Frank copula is given by:
                                                      !                "
                                                   1       w1 w2 w3 w4
                          C(u1 , u2 , u3 , u4 ) = − ln 1 + 
                                                   α         e−α − 1
                                                                     3


where α > 0 and wi = e−αui − 1 for i = 1, 2, 3, 4.
  We have:
                 ∂wi
                      = −αe−αui = −α (wi + 1)                      for i = 1, 2, 3, 4
                  ∂ui
and
                                      −α      3
                        ∂C    1       e −1                w2 w3 w4
                            =−                        ·
                        ∂w1   α e−α − 1 3 + w1 w2 w3 w4 e−α − 1 3

hence
                                   ∂C       (w1 + 1) w2 w3 w4
                                       =
                                   ∂u1           3
                                          e−α − 1 + w1 w2 w3 w4
Continuing by derivation:
                                                                 −α   3
   ∂ 2C       ∂    ∂C                                              e −1
          =               = −α (w1 + 1) (w2 + 1) w3 w4 ·                        2
  ∂u1 ∂u2    ∂u2 ∂u1                                                3
                                                            e−α − 1 + w1 w2 w3 w4


and
                             2      
           ∂ 3C         ∂      ∂ C                                        
                                       = α 2 (w1 + 1) (w2 + 1) (w3 + 1) w4 e−α − 1
                                                                                   3
                    =
        ∂u1 ∂u2 ∂u3   ∂u3 ∂u1 ∂u2
                                                
                                   3
                           e−α − 1 − w1 w2 w3 w4
                      ·                         3
                                  3
                           e−α − 1 + w1 w2 w3 w4

Finally the copula density is given by:
                                      
       ∂ 4C          ∂        ∂ 3C                                             
                                         = −α 3 (w1 +1) (w2 +1) (w3 +1) (w4 +1) e−α −1
                                                                                       3
                =
 ∂u1 ∂u2 ∂u3 ∂u4 ∂u4 ∂u1 ∂u2 ∂u3
                                                                       
                                 6               3
                        e−α − 1 − 4 e−α − 1 w1 w2 w3 w4 + w12 w22 w32 w42
                   ·                                       4
                                             3
                                      e−α − 1 + w1 w2 w3 w4

   It is really cumbersome to write down but it is easily maximized w.r. α.
   The derivation of a general n-variate Frank copula may be obtained as previously done
for the 4-variate case, though it requires an overweight algebra.
10 W. Vecchiato would like to thank Lanhua Yu (Imperial College, London UK) for pointing out some imperfections
in a earlier version of this derivation.
Credit Risk Applications                                                                                 227

7.5.3 Correlated default times
In our applications we do not focus on whether default occurs over the risk horizon (i.e.
the time to maturity of the credit derivatives contract), but on the precise time when the
default occurs. We are not concerned with rating migrations, but only with defaults. For
each credit in the collateral portfolio we have to determine its default time probability
distribution function. We choose to specify the default time distribution from the hazard
rates implied by the observed credit default swap (CDS) for terms of 1 year, 3 years and
5 years, at the analysis date, for each underlying single name credit. We choose this way
because the credit spreads can be observed from both the CDS market and the asset swap
market. With the explosive growth in the credit derivatives markets, the movement of the
credit spreads reﬂects more timely the market-based assessments of credit quality and the
market perception of both market and credit risk of each speciﬁc credit.
   We can derive hazard rates from credit spreads as follows:

                                                          St
                                                  ht =
                                                         1−R
where ht is the hazard rate, St is the CDS spread at term t and R is a recovery rate.
   To understand the relationship presented we have to consider the cash ﬂows exchanged
during a CDS. A fair valuation requires that the total amount of payment received by the
protection seller should equal the expected loss the seller has to pay the buyer when a
credit event (i.e. for simplicity the default) occurs (adjusting everything by the probability
of occurrence and discounting). This means that the expected payments have to be equal to
the expected loss.
   First we discuss the payment (or premium) leg. Let Wt be a given CDS spread as a
function of time, hence the amount the protection seller receives in each tiny interval is
Wt dt. The probability that this payment will be received is equal to the probability that the
underlying credit has not defaulted by time t, i.e. 1 − F (t). Discounting by the risk-free
factor B(0, t) and integrating over the whole time T of the deal, we obtain the total expected
payment to the protection seller:
                                        T
                                               B(0, t)Wt [1 − F (t)] dt
                                           0

   Now we examine the other side of the equation, i.e. the expected loss. Let R be a given
exogenous default rate. In each tiny interval of time the amount of money the protection
seller would pay to the protection buyer if the default occurs is equal to (1 − R) dt. The
probability that this payment will be due is equal to the unconditional probability that
the underlying credit defaults between time t and time t + dt, hence F (t + dt) − F (t). Dis-
counting and integrating as before, we arrive at the total expected loss of the protection seller:
                 T                                                    T
      (1 − R)         B(0, t) [F (t + dt) − F (t)] dt = (1 − R)               B(0, t)ht [1 − F (t)] dt
                  0                                                       0

where ht is the hazard rate given by dF (t)/[1 − F (t)].
  Thus, for any given time t, the relationship ht (1 − R) = Wt holds.11

11 It holds for any non-degenerate case.
228                                                                    Copula Methods in Finance

  Moreover, it is well known that the relation between the hazard rate and the cumulative
default probability (c.d.p.) is given by:
                                                      t
                                F (t) = 1 − exp −          h(s) ds
                                                       0

  In the real world we do not have observations of the hazard rate for all periods of time,
but for only a ﬁnite set of times. In our application we have three observed points implied
by the single name credit default swap premium at terms of 1 year, 3 years and 5 years. In
general, we can have N points in time t1 , t2 , . . . , tN . Hence, we consider a stepwise constant
function of the time for each hazard rate by using the observable values of h. We can then
rewrite the continuous form of the c.d.f. for each obligor’s time to default into:
                                                                 
                                                      k
                                                      
                                F (t) = 1 − exp −           hj j 
                                                      j =1

            
where hj = h tj , j = tj − tj −1 and
                                     
                                     
                                      1        if t ⩽ t1
                                     
                                     2         if t1 < t ⩽ t2
                                   k= .
                                     
                                      ..
                                     
                                     
                                        N       if t > tN −1

  This methodology has been used for each reference credit in the collateral portfolio in
order to obtain the draws for each time to default, after having generated draws from the
chosen copula.
  These marginals may be easily extended to Weibull distributions by inserting a shape
parameter.

7.5.4   Variance–covariance robust estimation
As is well known for elliptical distributions, linear correlation is a natural measure of
dependence. However, a linear correlation estimator such as the Pearson standard correla-
tion estimator has shown a very poor performance for heavier tailed or contaminated data.
Therefore, robust estimators are needed – where “robust” means to be insensitive to contam-
ination and to maintain a high efﬁciency for heavier tailed elliptical distributions as well as
for multivariate normal distributions. Lindskog (2000) gives an overview of techniques for
a robust linear correlation estimation and for comparing contaminated and uncontaminated
elliptical distributions. Moreover, he shows that Kendall’s tau has the necessary robustness
properties and is an efﬁcient (low variance) estimator for all elliptical distributions. For this
reason, in our application, we choose to adopt the empirical Kendall’s tau matrix (after
having checked that positive deﬁniteness holds) instead of the standard Pearson variance–
covariance matrix estimator. We determine this matrix from the equity return data for each
obligor in the collateral portfolio, and we adopt it to obtain draws from each elliptical copula
we have considered.
Credit Risk Applications                                                                     229

  For the sake of completeness we present the empirical Kendall’s tau for a chosen pair of
variables.
  The consistent estimator of Kendall’s τ obtained from the two series S1t and S2t with
t = 1, . . . , T is deﬁned as follows:

                                 2                           
                      τ̂ =               sgn S1i − S1j S2i − S2j                           (7.8)
                             T (T − 1)
                                       i<j

where the sign function is deﬁned as commonly known:
                                             
                                                  1 if x ⩾ 0
                                 sgn(x) =
                                                 −1 if x < 0

  Another robust dependence measure is Spearman’s rho, also called rank correlation, which
may be seen to be the standard Pearson’s linear correlation between the ranks of two series.
  Let X and Y be r.v.s with c.d.f. respectively FX and FY and joint c.d.f. F . Spearman’s
rho is given by

                                ρS (X, Y ) = ρP (FX (X), FY (Y ))

where ρP is the standard Pearson linear correlation.
   The generalization of ρS to n > 2 dimensions can be done analogously to that of lin-
ear correlation. In such a way we obtain a Spearman’s correlation matrix that is positive
deﬁnite by construction, without applying the so-called eigenvalue method, i.e. the nega-
tive eigenvalue has to be replaced by an arbitrary small positive number (see Rousseuw &
Molenberghs, 1993), as must be done for a high-dimensional extension of Kendall’s tau.
   A consistent estimator of Spearman’s rho may be obtained by the use of the standard
empirical correlation coefﬁcient between the sample ranks of each series, hence
                                                                
                                  ρ̂S = ρ̂P F̂X (xi ), F̂Y (yi )


7.5.5 Interest rates and foreign exchange rates in the analysis
One of the inputs used in the application is the par swap rate term structures for all currencies
involved in the CDO and in the BDS. Using the par swap rates it is possible to derive
discount factors for every maturity (i.e. commonly this procedure is termed as bootstrapping).
After deriving discount factors, one can determine forward interest rates for any needed
period and maturity. Since our focus is on effects due to collateral default, we do not
simulate interest rate and/or foreign exchange rates. But, one can choose to make these
simulations by calibrating the chosen models to observed variables for use in Monte Carlo
analysis. For example, one can assume that short-term forward interest rates follow a log-
normal process over time, and when simulating interest rates across multiple currencies one
has to ﬁnd estimates for the correlations between the interest rates of different currencies;
it is important to assume that these processes are exogenous from the copula framework,
otherwise this task would involve higher and higher dimensionality problems.
                                 8
                    Option Pricing with Copulas

                                8.1    INTRODUCTION
In this chapter we show how to use copula functions to solve the pricing problem of
multivariate contingent claims. The purpose is to derive pricing formulas which are valid
for very general distribution settings, beyond the standard Black and Scholes framework
under which closed form solutions are available for almost all the pricing problems. We
know that the assumptions on the basis of the Black–Scholes model have been challenged on
the grounds of two major arguments. The ﬁrst is non-normality of returns, as implied by the
smile and term structure effects of implied volatility. The second is market incompleteness,
and the difﬁculty of providing exact replication strategies for all the contingent claims and a
unique pricing kernel for their prices. Both of these problems are ampliﬁed in a multivariate
setting. On the one hand, non-normality of the returns implies that the standard linear
correlation ﬁgure that has been currently used to recover the price is a biased tool; and as
shown in Chapter 3, in the presence of smile effects, linear correlation may turn out to be
smaller than 1 even in the case of perfect dependence between the markets. On the other
hand, market incompleteness in a multivariate setting is made more involved because of
the difﬁculty of recovering implied information concerning the dependence structure among
the assets. So, evaluating multivariate contingent claims in incomplete markets poses a
two-stage problem: choosing a pricing kernel for each and every asset in the underlying
basket and picking out the copula function representing the dependence structure among
them. Nowadays, multivariate contingent claims are widely used by ﬁnancial institutions,
particularly to design structured ﬁnance products: on the one hand, it is all the more usual
to ﬁnd multi-asset features in index-linked bonds and digital notes, providing the investor
with a diversiﬁed product; on the other hand, multicurrency options have been around for
a long time and have represented a relevant risk management service provided by banks to
corporate borrowers and investors.
   The increasing trend in structured ﬁnance has highlighted the relevance of the multivariate
contingent claim pricing problem through a second important channel. In the structured
ﬁnance business, the ﬁnancial institutions face the problem of hedging a large variety of
different risks, connected to derivative products which are often exotic and written on
underlying assets that might not be actively traded on liquid markets. As a result, the hedging
activity may heavily rely on transactions on the OTC market, where the counterparty risk
component can be relevant. Notice that accounting for counterparty risk in a derivative
transaction directly casts the problem in a multivariate setting. Intuitively, in fact, the value
of the derivative contract depends on two events: the ﬁrst, that the contract ends in the
money; the second, that the counterparty survives until the contract is exercised. Taking
into consideration both the marginal probability of these two events and their dependence
structure may make both the evaluation and the hedging strategy of these products more
accurate and safe, and it is not difﬁcult to foresee that copula functions can be of great help
to reach this goal.
232                                                                             Copula Methods in Finance

 8.2 PRICING BIVARIATE OPTIONS IN COMPLETE MARKETS
Let us consider a derivative contract that is written on two underlying assets, which
we denote as S1 and S2 . The information structure is represented in the usual way by
a ﬁltered probability space {, t , P } generated by the stochastic processes S1 (t) and
S2 (t), t ∈ [0, T ]. Throughout the discussion, we will assume that S1 (t), S2 (t) are con-
tinuous random variables with non-negative support. If, for the sake of simplicity, we take
the bivariate derivative to be European, its pay-off may be written in full generality as
G(S1 (T ), S2 (T ), T ), a function deﬁned 3+ → . Our problem is to recover a pricing func-
tion g(S1 (t), S2 (t), t) which would rule out arbitrage opportunities in the market. In the
case in which the market is complete, we know that this product, as any other one, can be
exactly replicated, and its price is uniquely determined. This unique price also corresponds
to a unique risk-neutral probability distribution Q(S1 , S2 | t ), whose density function is
denoted q(S1 , S2 | t ), which represents the pricing kernel of the economy. The price of
the bivariate contingent claim can then be represented in integral form as

        g(S1 (t), S2 (t), t)
                         ∞ ∞
           = B (t, T )         G(S1 (T ), S2 (T ), T )q(S1 (T ), S2 (T ) | t ) dS1 (T ) dS2 (T )
                         0    0

where B (t, T ) is the risk-free discount factor. Throughout the analysis the risk-free rate is
assumed to be non-stochastic or independent of the underlying assets. The extension to the
more general case is, however, straightforward if we change the measure to the forward
risk-neutral one, as described in Chapter 1.
   Let us denote by Q1 (S1 | t ) and Q2 (S2 | t ) the marginal conditional distributions of
S1 and S2 respectively, with densities q1 (S1 | t ) and q2 (S2 | t ). They are also derived
from the bivariate pricing kernel by deﬁnition
                                        ∞
                       q1 (S1 | t ) =     q(S1 (T ), S2 (T ) | t ) dS2 (T )
                                              0
                                             ∞
                          q2 (S2 | t ) =         q(S1 (T ), S2 (T ) | t ) dS1 (T )
                                              0

  Prices of univariate contingent claims are obtained as discounted expected values under
the relevant marginal risk-neutral distribution. So, if G(S1 (T ), S2 (T ), T ) = G(S1 (T ), T ),
so that a contingent claim is written on asset S1 only we have
                               ∞                 ∞
     g(S1 (t), t) = B (t, T )     G(S1 (T ), T )     q(S1 (T ), S2 (T ) | t ) dS1 (T ) dS2 (T )
                                  0                      0
                                   ∞
                   = B (t, T )          G(S1 (T ), T )q1 (S1 (T ) | t ) dS1 (T )
                                  0


8.2.1    Copula pricing kernels
In this complete market setting it is quite easy to write the pricing relationship of bivariate
contingent claims in terms of copula functions and marginal distributions. We only need the
extension of Sklar’s theorem to conditional distributions.
Option Pricing with Copulas                                                                233

Theorem 8.1 For any joint conditional distribution Q(S1 , S2 | t ) there exists a copula
function C(u, v) such that

                       Q(S1 , S2 | t ) = C (Q1 (S1 | t ), Q2 (S2 | t ))

and, conversely, given two conditional distributions Q1 (S1 | t ) and Q2 (S2 | t ) and a
copula function C(u, v) the function C (Q1 (S1 | t ), Q2 (S2 | t )) is a joint conditional
distribution function.

   The proof is in Patton (2001). Notice that the result holds if the conditioning information
t is the same for both marginal distribution and joint distributions. The copula obtained in
this way corresponds to the dependence structure in the risk-neutral probability distribution,
and is the risk-neutral copula.
   Using copula functions enables us to separate the effects of the marginal pricing kernels
and the dependence structure of the underlying assets. This is very important because it
makes it possible to check the consistency of prices of multivariate and univariate contingent
claims, particularly with respect to the no-arbitrage requirement. As a simple example, let
us take digital options, as in the examples presented in Chapter 2. Remember that digital
options pay a ﬁxed sum, which we may set equal to one unit of currency without loss of
generality, if some event takes place. The event may be that the price of the underlying
asset is higher than some strike level (call digital option). A put digital option instead pays
a unit of value if the value of the underlying asset is lower than a strike level. So, in a
complete market, the prices of univariate digital options, that is options written on a single
asset, are equal to the discounted values of risk-neutral probability distributions.
   Call digital options DCi written on our assets S1 and S2 are priced as

        DC1 (K1 ) = B (t, T ) Q1 (K1 | t ) ,       DC2 (K2 ) = B (t, T ) Q2 (K2 | t )

where we recall that Qi (u) ≡ 1 − Qi (u). Of course, the corresponding put digital options
are priced by arbitrage as DPi = B − DCi . Consider now the case of bivariate digital
options paying one unit of currency if both assets S1 and S2 are higher than strike prices K1
and K2 respectively. Options like these are sometimes used in particular structured ﬁnance
products such as digital bivariate notes. Denoting DHH this digital option, we can write it
as a copula function taking the forward values of univariate digital options as arguments:
                                                                              
                                                          DC1       DC2
                    DHH (K1 , K2 ) = B (t, T ) CHH                ,
                                                         B (t, T ) B (t, T )

where CHH (u, v) is a copula function: in particular, this is the survival copula discussed in
Chapter 2. Once such a copula function has been chosen, the other digital options for the
same strikes are determined by arbitrage. For example, the digital option DHL paying one
unit if S1 > K1 and S2 ⩽ K2 is determined by the relation

                   DHL (K1 , K2 ) = DC1 − DHH (K1 , K2 )
                                                                 
                                                          DC1 DC2
                                  = DC1 − B (t, T ) CHH      ,
                                                           B   B
234                                                                 Copula Methods in Finance

   We remind the reader (see Chapter 2) that if CHH (u, v) is a copula function, then
CHL (u, 1 − v) = u− CHH (u, v) is also a copula function, representing the probability that
the ﬁrst uniform marginal be higher than u and the second be lower than v. The price of
the digital option DHL can then be written as

                                                                           
                                      DC1 (K1 )          DC1 (K1 ) DC2 (K2 )
          DHL (K1 , K2 ) = B (t, T )             − CHH            ,
                                       B (t, T )         B (t, T ) B (t, T )
                                                               
                                           DC1 (K1 ) DP2 (K2 )
                         = B (t, T ) CHL             ,
                                            B (t, T ) B (t, T )

where we have exploited DP2 = B (t, T ) − DC2 . By the same token, we have

                  DLH (K1 , K2 ) = DC2 (K2 ) − DHH (K1 , K2 )
                                                                      
                                                   DP1 (K1 ) DC2 (K2 )
                                 = B (t, T ) CLH            ,
                                                     B         B

with CLH (1 − u, v) = v − CHH (u, v) representing the joint probability that the ﬁrst marginal
be lower than u and the second be higher than v. Finally, the put bivariate digital, paying
one unit if S1 ⩽ K2 and S2 ⩽ K2 is obtained by arbitrage from

        DLL (K1 , K2 ) = B (t, T ) − DHL (K1 , K2 ) − DLH (K1 , K2 ) − DHH (K1 , K2 )
                       = B (t, T ) − DC1 (K1 ) − DC2 (K2 ) + DHH (K1 , K2 )

  Again, remembering that CLL (1 − u, 1 − v) = 1 − u − v+ CHH (u, v) is a copula function
we have
                                                                                 
                                DC1 (K1 ) DC2 (K2 )            DC1 (K1 ) DC2 (K2 )
 DLL (K1 , K2 ) = B(t, T ) 1 −             −           + CHH            ,
                                 B (t, T )   B (t, T )         B (t, T ) B (t, T )
                                              
                          DP1 (K1 ) DP2 (K2 )
                = BCLL              ,
                           B (t, T ) B (t, T )

   All of this proves that, just as in the univariate case, digital options paying under some
events are linked to those paying under the complement, and this induces a no-arbitrage
relation among copula functions. These relationships will be particularly useful in some of
the applications that we cover in the rest of this chapter. For the time being, this result
states that the requirement that a bivariate pricing kernel be a copula function is necessary
but not sufﬁcient. Moreover, in general the shape of copulas CHH , CHL , CLH and CLL will
be different. We say in general because it is not difﬁcult to ﬁnd a counterexample: we leave
the readers to verify that the product copula CHH (u, v) = uv is such a case.
   Representing the bivariate pricing kernel by a copula function enables us to specify the
dependence structure of the underlying assets and to gauge its effect on the price of the
bivariate contingent claim. Sticking to the simplest case of the bivariate digital option, we
Option Pricing with Copulas                                                                            235

have that
                                                  
                     −       DC1 (K1 ) DC2 (K2 )
       B (t, T ) C                    ,                ⩽ DHH (K1 , K2 )
                             B (t, T ) B (t, T )
                                                                                                  
                                                                             DC1 (K1 ) DC2 (K2 )
                                                       ⩽ B (t, T ) C +                ,
                                                                             B (t, T ) B (t, T )

where C − and C + represent the Fréchet bounds of copulas corresponding to the cases of
perfect negative and positive dependence respectively. Using such bounds we obtain

            max (DC1 (K1 ) + DC2 (K2 ) − B (t, T ) , 0) ⩽ DHH (K1 , K2 )
                                                               ⩽ min (DC1 (K1 ), DC2 (K2 ))

  So, the price of a bivariate call digital option reaches its maximum value in the case
of perfect positive dependence, in which case it is worth the minimum of the univariate
digital options. Going back to the arbitrage arguments above, readers may verify that if
the value of such an option is maximum, i.e. DHH = min (DC1 , DC2 ), the price of the
digital option DHL , i.e. the option paying if S1 > K1 and S2 ⩽ K2 , is minimum: DHL =
max (DC1 + DP2 − 1, 0). On the question of the bivariate digital put option, paying one
unit if S1 ⩽ K1 and S2 ⩽ K2 , we leave the simple answer to the readers.

8.2.2 Alternative pricing techniques

In the previous analysis we showed that a pricing kernel may be written in terms of copula
functions. In a complete market setting, the argument follows in quite a straightforward
way from the unique probability measure and an extension of Sklar’s theorem to the case
of conditional distributions. The same result obviously applies to incomplete market models
in which a speciﬁc probability measure is selected to compute the price. Throughout the
following sections, we will see whether the result carries over to more general pricing
models in an incomplete setting. Prior to that, we would like to explore the techniques that
can be applied to make the copula pricing kernel approach most effective. These approaches
will then represent the set of tools among which to choose the most effective to solve the
speciﬁc pricing problems that will be addressed at the end of this chapter.

The probability density approach

The most straightforward way to represent the price of a contingent claim is to use the
standard integral representation involving the joint conditional density q(S1 , S2 | t ). The
representation can be written in terms of copulas, remembering the relationship

                     q(S1 , S2 | t ) = c (Q1 , Q2 | t ) q1 (S1 | t ) q2 (S2 | t )

where we recall that c (v, z) is the density associated to the copula function. In other words,
the joint density is equal to the cross-derivative of the copula function times the marginal
236                                                                        Copula Methods in Finance

densities. Using this result we have that the price g(S1 , S2 , t) of our bivariate contingent
claim can be written
                                           ∞ ∞
         g(S1 (t), S2 (t), t) = B (t, T )        G(S1 (T ), S2 (T ), T )c (Q1 , Q2 | t )
                                         0     0
                               × q1 (S1 (T ) | t ) q2 (S2 (T ) | t ) dS1 (T ) dS2 (T )

   Unfortunately, this representation of price does not lead to any simpliﬁcation of the price
representation, as in most cases the formula for the cross-derivative of the copula function
turns out to be quite involved and difﬁcult to handle, so that computing the double integral
may not come as an easy task. So, this representation can only be useful in cases in which
such cross-derivative is very easy to calculate, such as in the case of the product copula,
for which we have C12 = 1.

The probability distribution approach

An alternative to the integral representation above can be of some help in many cases. To
introduce this approach, it may be useful to go back to the univariate setting for a short
digression. Consider the case of a European option written on the underlying asset Z, for
strike price K and exercise date T . Let us denote CALL(Z, t; K, T ) the price of the option
at time t. We recall the famous result due to Breeden and Litzenberger (1978), discussed in
Chapter 1

                           ∂CALL (Z, t; K, T )    1
                       −                                 = QZ (K | t )
                                 ∂K            B (t, T )

so that the derivative of the price of the call option with respect to the strike divided by the
discount factor is equal to the risk-neutral probability of exercising the option (apart from
a change in sign). Integrating both sides from K to inﬁnity we may write the price of the
option as
                                                          ∞
                     CALL (Z, t; K, T ) = B (t, T )             QZ (u | t ) du
                                                           K

  Likewise, for put options we have

                           ∂PUT (Z, t; K, T )    1
                                                        = QZ (K | t )
                                 ∂K           B (t, T )

and, integrating from zero to K, we get
                                                         K
                      PUT (Z, t; K, T ) = B (t, T )            QZ (u | t ) du
                                                          0

  Notice that in the representations above the prices of call and put options are obtained
by computing the integral of the distribution function, rather than the density function.
Option Pricing with Copulas                                                                              237

  Let us now go back to a bivariate problem. Assume, for example, that the pay-off function
of a contingent claim is of the kind
                                                                              
                  G(S1 (T ), S2 (T ), T ) = max f (S1 (T ), S2 (T ), T ) − K, 0

and set Z(T ) = f (S1 (T ), S2 (T )). We may then use the integral representation above to
recover the price of this contingent claim as
                                                    ∞
     CALL (S1 (t), S2 (t), t; K, T ) = B (t, T )            Pr (f (S1 (T ), S2 (T ), T ) > u | t ) du
                                                    K

where the probability is computed under the risk-neutral measure Q.
  Likewise, for pay-off functions of the put type
                                                                              
                  G(S1 (T ), S2 (T ), T ) = max K − f (S1 (T ), S2 (T ), T ), 0

we may write the price of the contingent claim as
                                                    K
      PUT (S1 (t), S2 (t), t; K, T ) = B (t, T )         Pr (f (S1 (T ), S2 (T ), T ) ⩽ u | t ) du
                                                    0

  The pricing representations reported above may be particularly useful in all cases in
which the probability distribution of f (S1 (T ), S2 (T ), T ) is easy to handle analytically or
by simulation. Below, we will show some cases in which such a function is in fact a copula
function. Here we show a different example just to ﬁx ideas.
  Compo option. Take an option in which the value of the pay-off and the strike price are
denoted in a currency that is different from that of the underlying asset. An example is an
option written on Vodaphone stocks denominated in British pounds with a strike price in
euros. The pay-off of this option, say a call, is then written as

                         G(S(T ), e(T ), T ) = max [S(T )e(T ) − K, 0]

where S is the price of the underlying asset (Vodaphone in our case) denominated in foreign
currency and e is the exchange rate, determining the number of euros to be exchanged for one
pound. So, the method described above can be applied setting f (S(T ), e(T )) = S(T )e(T ).
We have
                                                ∞
              CALL (S(t), e(t), t; K, T ) = B        Pr(S(T )e(T ) > u | t ) du
                                                        K

   In cases in which the distribution of the product of the two variables is known or easy
to simulate, the above formula can be used. For example, we know that if S and e are log-
normally distributed, their product will also have log-normal distribution: it is not surprising
that the integral will have a closed form solution of the type of the Black–Scholes formula.
Unfortunately, beyond this case there are not many general results available for the product of
random variables, and the distribution will generally have to be reconstructed by simulation.
238                                                                         Copula Methods in Finance

The conditional distribution approach
A third approach to the pricing of bivariate contingent claims consists in evaluating the
contingent claim conditional on one of the two variables and integrating the result with
respect to the other one. As an example, consider again the case in which the pay-off
function is of the kind: max[f (S1 (T ), S2 (T )) − K, 0]. Intuitively the idea is quite simple.
Assuming that one knows the value of one of the two variables, say S2 (T ) = s, one is able
to recover the value of the derivative. We have, for example
                                                         ∞
       CALL (S1 (t), t; S2 (T ) = s, K, T ) = B (t, T )     Pr(f (S1 (T ), s) > u | t ) du
                                                            K

  Then the price of the bivariate contingent claim can be recovered by integrating this
“conditional” price over the whole domain of S2 . We then have
                                                     ∞
        CALL (S1 (t), S2 (t), t; K, T ) = B (t, T )     CALL (S1 (t), t; S2 (T ), K, T )
                                                        0
                                            × q2 (S2 (T ) | t ) dS2 (T )

  Even in this case the use of copula functions can be of some help. We recall in fact from
Chapter 2 that

                                                       ∂C (Q1 , Q2 (s))
                           Q(S1 | S2 = s, t ) =
                                                           ∂Q2 (s)

and the probability distribution of one of the two variables, conditional on a given value
of the other, is equal to the derivative of the copula function with respect to the marginal
distribution of the latter evaluated at that value.
   Stochastic volatility. As an example, assume a pricing model in which both the price and
the volatility of the underlying asset are stochastic. The use of copulas may be particularly
useful to account for the dependence structure between price and volatility. Denote by
QS and Qσ the marginal probability distributions of the price of the underlying asset
and its volatility. The joint conditional distribution can then be written as Q(S, σ | t ) =
C(QS , Qσ | t ). Consider the problem of pricing a put option for strike K and exercise T .
It is clear that, conditional on a given value of volatility, σ = s, the value of the option
could be written
                                                     K
       PUT (S(t), t; σ (T ) = s, K, T ) = B (t, T )     Pr(S(T ) ⩽ u | σ (T ) = s, t ) du
                                                        0

  Using the copula function representation we could write
                                                             K
                                                                  ∂C (Q1 , Qσ (s) | t )
          PUT (S(t), t; σ (T ) = s, K, T ) = B (t, T )                                   du
                                                            0         ∂Qσ (s | t )

  The price of the put option would then be
                                             ∞  K                             
                                                        ∂C (Q1 , Qσ (s) | t )
  PUT (S(t), t, σ (t); K, T ) = B (t, T )                                      du qσ (s | t ) ds
                                             0     0        ∂Qσ (s | t )
Option Pricing with Copulas                                                                 239

  The model is then able to capture the dependence structure between volatility and price
of the underlying asset. From this point of view, it may be checked that it is an extension
of the Hull–White model. In fact, if we take QS to be the log-normal distribution and
C(u, v) = uv the product copula, we obtain
                                       ∞
        PUT (S(t), t, σ (t); K, T ) =     PUTBS (S, t; σ (t) = s, K, T ) qσ (s | t ) ds
                                       0

where PUTBS (.) is the Black–Scholes pricing formula for put options.

        8.3   PRICING BIVARIATE OPTIONS IN INCOMPLETE
                            MARKETS
We begin by recalling the terms of the incomplete market problem. In this setting, a general
contingent claim g(S, t), with pay-off G(S, T ), where S is a univariate variable, can be
priced computing
                                                                    
                      g (S, t) = B (t, T ) EQ G (S, T ) ; Q ∈ ℘ | t

where EQ represents the expectation with respect to a risk-neutral measure Q. The set ℘
contains the risk-neutral measures and describes the information available on the underlying
asset. If it is very precise, and the set ℘ contains a single probability measure, we are in the
standard complete market pricing setting tackled above. In the case in which we do not have
precise information – for example, because of limited liquidity of the underlying asset – we
have the problem of choosing a single probability measure, or some pricing strategy. So, in
order to price the contingent claim g in this incomplete market setting, we have to deﬁne:
(i) the set of probability measures ℘ and (ii) a set of rules describing a strategy to select
the appropriate measure and price. One could resort to expected utility to give a preference
rank for the probabilities in the set, picking out the optimal one. As an alternative, or prior
to that, one could instead rely on some more conservative strategy, selecting a range of
prices: the bounds of this range would yield the highest and lowest price consistent with
the no-arbitrage assumption, and the replicating strategies corresponding to these bounds
are known as super-replicating portfolios. In this case we have
                                                                   
                            g − (S, t) = B inf EQ G (S, T ) ; Q ∈ ℘
                                                                    
                            g + (S, t) = B sup EQ G (S, T ) ; Q ∈ ℘

   As we have discussed in Chapter 1, the market incompleteness issue emerges as a problem
that is very involved even at the one-dimension level. We have seen that the solution can
also involve non-additive pricing kernels, technically known as capacities (more precisely,
the subset of convex capacities). The copula pricing result which, as we saw, is fairly
straightforward in a complete market setting, has to be derived carefully in a setting in
which even at the univariate level the pricing kernel may not be represented by probability
measures. Following Cherubini and Luciano (2002a), we are going to show that the same
results that were obtained for a complete market setting carry over easily to the case in
which the market is incomplete, both at the univariate and multivariate levels. Moreover,
deriving the pricing kernel result without reference to probability arguments will help to
highlight the arbitrage arguments.
240                                                                       Copula Methods in Finance

8.3.1 Fréchet pricing: super-replication in two dimensions
We are now going to discuss how the same approach can be generalized to the bivariate
pricing problem. As we did in the complete market setting, we start with the bivariate digital
products. This time, however, we are going to drop any reference to Sklar’s theorem as well
as to any other probability theory argument. Our only guideline will be to check that the
pricing relationships rule out arbitrage opportunities. We now focus our discussion on the
properties that are to be imposed on the pricing kernel to achieve this task.
   In ﬁnancial terms, modeling the pricing kernel means recovering the forward value of a
digital option, i.e. an option that pays one unit of value if some event occurs. Likewise, in
our bivariate setting, recovering the pricing kernel amounts to pricing a digital option that
pays one unit if two events take place. So, our problem is to ﬁnd a replicating strategy for
the bivariate digital option. An interesting question is whether it is possible to use univariate
digital options to hedge the bivariate one.
   In order to focus on the bivariate feature of the pricing problem, we assume that we may
replicate and price two univariate digital options with the same exercise date T written on
the underlying markets S1 and S2 for strikes K1 and K2 respectively. Our problem is then
to use these products to replicate a bivariate option which pays one unit if S1 > K1 and
S2 > K2 and zero otherwise.
   As a starting point, it is quite natural to break the sample space into the four relevant
regions and to construct a map that could facilitate the proofs of some static arbitrage
relationship (Table 8.1).
   So, a bivariate call digital option pays one unit only if both of the assets are in state H,
that is, in the upper left cell of the table. The single digital options written on assets 1 and
2 pay in the ﬁrst row and the ﬁrst column respectively. In Table 8.2 below we sum up the
pay-offs of these different assets and determine which prices are observed in the market.
We recall that DC1 , DC2 and B (t, T ) denote the prices of the univariate digital options
and the risk-free asset respectively.
   Our problem is to use no-arbitrage arguments to recover information on the price of the
bivariate digital option. In particular, we may begin to investigate the pricing bounds for
the bivariate digital, that is its super-replication portfolio. To this aim, some interesting

                    Table 8.1    Breaking down the sample space for the digital
                    option

                                           State H                  State L

                    State H           S1 ⩾ K1 , S2 ⩾ K2        S1 ⩾ K1 , S2 < K2
                    State L           S1 < K1 , S2 ⩾ K2        S1 < K1 , S2 < K2


                        Table 8.2 Prices and pay-offs for digital options

                                             Price        HH       HL         LH     LL

           Digital option asset 1           DC1           1         1         0       0
           Digital option asset 2           DC2           1         0         1       0
           Risk-free asset                 B (t, T )      1         1         1       1
           Bivariate digital option           ?           1         0         0       0
Option Pricing with Copulas                                                                 241

no-arbitrage implications can easily be obtained by comparing its pay-off with that of
portfolios of the univariate digital options and the risk-free asset. The following proposition
states such bounds for the price.

Proposition 8.1 The no-arbitrage price DHH (K1 , K2 ) of a bivariate digital option is bound-
ed by the inequality

           max(DC1 + DC2 − B (t, T ) , 0) ⩽ DHH (K1 , K2 ) ⩽ min(DC1 , DC2 )

  Proof : Assume ﬁrst that the right hand side of the inequality is violated. Say that,
without loss of generality, it is DHH (K1 , K2 ) > DC1 ; in this case selling the bivariate
digital option and buying the single digital option would allow a free lunch in the state
[S1 > K1 , S2 ⩽ K2 ]. As for the left hand side of the inequality, it is straightforward to see
that D must be non-negative. There is also a bound DC1 + DC2 − B (t, T ). Assume in
fact that DC1 + DC2 − B (t, T ) > DHH (K1 , K2 ); in this case buying the bivariate digital
option and a risk-free asset and selling the two univariate digital options would allow a free
lunch in the current date with non-negative pay-off in the future (actually, the pay-off could
even be positive if state [S1 ⩽ K1 , S2 ⩽ K2 ] occurred).                                    

  The proposition exploits a static super-replication strategy for the bivariate digital option:
the lower and upper bounds have a direct ﬁnancial meaning, as they describe the pricing
bounds for long and short positions in the bivariate options. The result may sound even
more suggestive if we use forward prices. As we know, the forward prices are deﬁned as
DHH (K1 , K2 )/B (t, T ), DC1 /B (t, T ) and DC2 /B (t, T ) for the double and single digital
options respectively. We have then
                                                                                    
                DC1       DC2               DHH (K1 , K2 )          DC1       DC2
     max                +          − 1, 0 ⩽                ⩽ min            ,
               B (t, T ) B (t, T )            B (t, T )            B (t, T ) B (t, T )

and it is easy to recognize that the two bounds constraining the forward price of the double
digital option are the Fréchet bounds taking the forward prices of the single digital options
as arguments. Let us observe and stress that these bounds emerged from no-arbitrage consid-
erations only. Furthermore, it must be recalled that the Fréchet bounds fulﬁll the conditions
deﬁning copula functions, suggesting that this arbitrage-based result could hide a more
general ﬁnding that is going to be proved in the following section.


8.3.2 Copula pricing kernel

We now take one step further and investigate the features of the no-arbitrage forward price
of the bivariate digital option. From our previous ﬁndings of Fréchet-like pricing bounds,
we are naturally led to conjecture that such a bivariate kernel is a copula function, i.e. a
function of the kind

                   DHH (K1 , K2 )/B (t, T ) = C(DC1 /B (t, T ) , DC2 /B (t, T ))

  The following proposition proves that this conjecture is true.
242                                                                      Copula Methods in Finance

Proposition 8.2 The bivariate pricing kernel is a function CHH (v, z) taking the univariate
pricing kernels as arguments. In order to rule out arbitrage opportunities the function must
fulﬁll the following requirements:

• it is deﬁned in I 2 = [0, 1] × [0, 1] and takes values in I = [0, 1]
• for every v and z of I 2 , CHH (v, 0) = 0 = C(0, z), CHH (v, 1) = v, CHH (1, z) = z
• for every rectangle [v1 , v2 ] × [z1 , z2 ] in I 2 , with v1 ⩽ v2 and z1 ⩽ z2

                 CHH (v2 , z2 ) − CHH (v2 , z1 ) − CHH (v1 , z2 ) + CHH (v1 , z1 ) ⩾ 0

   Proof : The ﬁrst condition is trivial: the prices of the digital options cannot be higher
than the risk-free asset B, implying that the forward prices of both the univariate and
bivariate digital are bounded in the unit interval. The second condition follows directly
from the no-arbitrage inequality in Proposition 8.2, by substituting the values 0 and 1 for
v = DC1 /B (t, T ) or z = DC2 /B (t, T ). As for the last requirement, consider taking two
different strike prices K11 > K12 for the ﬁrst security, and K21 > K22 for the second. Denote
with v1 the forward price of the ﬁrst digital corresponding to the strike K11 – with v2 that
of the ﬁrst digital for the strike K12 – and use an analogous notation for the second security.
Then, the third condition above can be rewritten as

       DHH (K12 , K22 ) − DHH (K12 , K21 ) − DHH (K11 , K22 ) + DHH (K11 , K21 ) ⩾ 0

As such, it implies that a spread position in bivariate options paying one unit if the two
underlying assets end in the region [K12 , K11 ] × [K22 , K21 ] cannot have negative value.
                                                                                           

To sum up our results, we may match the two propositions above with the mathematical
deﬁnitions given in Chapter 2, so giving a characterization of the requirements that have to
be imposed on the bivariate pricing kernel in order to rule out arbitrage opportunities.

Proposition 8.3 The arbitrage-free pricing kernel of a bivariate contingent claim is a cop-
ula function taking the univariate pricing kernels as arguments
                                                                   
                      DHH (K1 , K2 )           DC1 (K1 ) DC2 (K2 )
                                      = CHH              ,
                         B(t, T )               B(t, T )   B(t, T )

and the corresponding super-replication strategies are represented by the Fréchet bounds:
                                                                             
                DC1 (K1 ) DC2 (K2 )                        DC1 (K1 ) DC2 (K2 )
         max               +            − 1, 0 ⩽ CHH                 ,
                 B (t, T )   B (t, T )                     B (t, T ) B (t, T )
                                                                               
                                                          DC1 (K1 ) DC2 (K2 )
                                                 ⩽ min              ,
                                                           B (t, T ) B (t, T )

  It must be stressed again that in order to prove the result we did not rely on any assumption
concerning the probabilistic nature of the arguments of the pricing function: these are only
required to be no-arbitrage prices of single digital options. In this respect, our results carry
over to the more general incomplete market pricing models based on the use of convex
capacities, that we discussed above.
Option Pricing with Copulas                                                                243

  It is worth while noticing how the market incompleteness question is complicated in a
bivariate setting, and in a multivariate setting in general. We may say that we have a market
incompleteness problem in one dimension, which has to do with the issues discussed above
and may lead to pricing bounds for the digital options. So, we may have, for example,

                B (t, T ) Q−                                     +
                           i (Ki | t ) ⩽ DCi (Ki ) ⩽ B (t, T ) Qi (Ki | t )

for i = 1, 2. There is then a second dimension of the market incompleteness problem for
bivariate and, in general, multivariate claims, beyond that of the univariate problem. The
problem of selecting prices for the univariate products is compounded by the choice of
copula function, which has to do with the dependence structure of the underlying assets.
At this level, the Fréchet bounds represent the natural choice if the conservative pricing
strategy is selected. In this case we have

              B[max(Q−    −                                    +    +
                     1 + Q2 − 1, 0)] ⩽ DHH (K1 , K2 ) ⩽ B min(Q1 , Q2 )

where, for the sake of simplicity, we omitted the arguments of the probability bounds.

                  8.4 PRICING VULNERABLE OPTIONS
The massive growth of the structured ﬁnance, and the increasing practice of ﬁnancial insti-
tutions to resort to the OTC market to hedge the derivatives exposures incurred to supply
these products, has made counterparty risk in derivatives a major reason of concern. When
a derivative contract is negotiated in the OTC market, one has to account for the possibility
that the counterparty could go bust during the life of the contract. This poses a problem
both to the risk management of the position and the pricing of the contract. As for risk
management, the institution has to take into account that some capital must be allocated to
hedge the risk connected to default of the counterparties. As for pricing, the evaluation of
each derivative contract has to take into account the credit standing of the counterparty, as
well as the dependence between its default and the dynamics of the underlying asset.
   Copula functions are particularly well suited to address the pricing and hedging problem
of vulnerable derivatives – that is, contracts in which the counterparty may not be able
to make good its obligation. In fact, evaluating vulnerable derivatives is an intrinsically
bivariate problem, as the pay-off is conditional on two events: the ﬁrst is that the derivative
ends up in the money, the second is survival of the counterparty, as well as dependence
between its default and the dynamics of the underlying asset. The approach proposed in
Cherubini and Luciano (2002b), which we follow here, exploits copula functions to yield
a ﬂexible framework, extending and encompassing the speciﬁc models proposed in the
literature. Well-known models such as Johnson and Stulz (1987), Hull and White (1995)
and Klein (1996), for example, are built under the assumption of the log-normal distribution
of the underlying asset and a structural model for the credit risk of the counterparty. Other
papers, such as Jarrow and Turnbull (1995) and Barone, Barone-Adesi and Castagna (1998),
deal with counterparty risk in bond options applying different term structure models, and
both prefer a reduced form speciﬁcation for counterparty risk. We are going to show that
copula functions enable us to choose the most suitable speciﬁcation for both market and
counterparty risk, as well as a ﬂexible representation of the dependence structure between
the two risks.
244                                                                      Copula Methods in Finance

8.4.1 Vulnerable digital options
We start our analysis from the simplest products, that is digital options. This will both
make the building blocks of the application clearer and open the way to more complex
applications, that will follow. We remind the reader that from the previous section we
denote as DCi (Ki ) the default-free price of a call digital option, i.e. a contract paying one
unit if and only if at the exercise date T we observe Si ⩾ Ki for a given strike Ki . Assume
now that a digital option is written by a counterparty A, which is subject to default risk: the
option will pay one unit under the joint event of the option ending in the money and survival
of the counterparty A; it will be worth RA , the recovery rate for maturity T , if it expires in
the money and counterparty A defaults; it will be worth zero otherwise. We will denote this
option as V-DCi (Ki ). Our task is to characterize the arbitrage-free value of such an option.
We assume we are able to observe or estimate the value of a defaultable zero-coupon bond
issued by counterparty A, or by some issuer of the same risk class, for the same maturity
T . We denote its market value by PA (t, T ). The value of the default-free zero-coupon bond
for the same maturity is denoted by B (t, T ), as above. We also deﬁne some quantities that
are often used by practitioners to assess the credit risk of a debt issue, and that will be
useful in this analysis. In particular, we deﬁne DelA the discounted expected loss on the
zero-coupon issued by A for maturity T , computed as DelA = B (t, T ) − PA (t, T ) , and
the corresponding expected loss ElA = DelA /B (t, T ). We may also deﬁne the loss given
default ﬁgure LgdA = 1 − RA : throughout the analysis, we will assume that this ﬁgure is
non-stochastic (or independent of the events of exercise of the option and default of the
counterparty).
   To recover the price of the vulnerable option we ﬁrst partition the sample space at the
expiration time T into the states shown in Table 8.3, and we may write down the pay-off
matrix (Table 8.4) for all the products deﬁned above.
   Notice that the framework of the analysis is similar to that used in the previous section to
price bivariate digital options. In order to apply that analysis, we can easily pivot the pay-off
matrix in the following way. Let us build the following two portfolios: the ﬁrst consists in
a long and a short position in 1/(1 − RA ) units of the default-free and defaultable bond
respectively; the second is made up by a long and a short position in 1/(1 − RA ) units

               Table 8.3 Breaking down the sample space for the vulnerable dig-
               ital option

                                      State H                        State L

               State H         Si ⩾ Ki and A survives       Si ⩾ Ki and A defaults
               State L         Si < Ki and A survives       Si < Ki and A defaults


                   Table 8.4    Prices and pay-offs for bonds and digital options

                                                Price        HH        HL           LH   LL

      Defaultable bond company A          PA (t, T )          1        RA           1    RA
      Risk-free asset                     B (t, T )           1         1           1     1
      Univariate digital option           DCi (Ki )           1         1           0     0
      Vulnerable digital option           V-DCi (Ki )         1        RA           0     0
Option Pricing with Copulas                                                                             245

               Table 8.5      Prices and pay-offs for portfolios of assets in Table 8.4

             Price                                      HH            HL       LH          LL

             [B(t, T ) − PA (t, T )]/(1 − RA )           0            1            0       1
             B (t, T )                                   1            1            1       1
             DCi (Si ⩾ Ki )                              1            1            0       0
             [DVi (Ki ) − V-Di (Ki )]/(1 − RA )          0            1            0       0



of the default-free and vulnerable digital option. Including these portfolios in the pay-off
matrix we get the values shown in Table 8.5.
   The pricing problem is now exactly the same as that of a bivariate digital option, and
we can apply the results in the propositions above. The arbitrage-free price of the second
portfolio described above (long the default-free option and short the vulnerable one) has
to be equal to the discounted value of a copula function taking the forward values of
the default-free digital option and the ﬁrst portfolio as arguments. Rearranging terms, it is
straightforward to show

Corollary 8.1 The price of a vulnerable call digital option, V-DCi , is given by
                                                                                                   
                                                                 DCi (Ki ) B (t, T ) − PA (t, T )
   V-DCi (Ki ) = DCi (Ki ) − B (t, T ) (1 − RA )CHL                       ,
                                                                 B (t, T ) B (t, T ) (1 − RA )

where CHL (x, y) is a copula function.

   The corollary allows us to split the vulnerable digital price into the non-vulnerable digital
price, Di (Ki ), minus counterparty risk:
                                                                 
                             DCi (Ki ) B(t, T ) − PA (t, T )
  B(t, T )(1 − RA )CHL                ,                               = B(t, T )LgdA
                             B(t, T )   B(t, T )(1 − RA )
                                                                                                      
                                                                                       DCi (Ki ) ElA
                                                                           × CHL                ,
                                                                                       B(t, T ) LgdA

  Denoting by QA (T | t ) the default probability of counterparty A by time T , conditional
on the information available at time t, we have that ElA = LgdA ∗ QA (T | t ). The price
of the vulnerable call option can then be written

            V-DCi (Ki ) = DCi (Ki ) − B(t, T )LgdA CHL (Qi (Ki ), QA (T ) | t )

and it is clear why the price involves a copula function, taking the risk-neutral probability
of exercise of the option and the risk-neutral probability of default of the counterparty as
arguments.
  By the same argument, the price of a defaultable digital put option can be priced as

             V-DPi (Ki ) = DPi (Ki ) − B(t, T )LgdA CLL (Qi (Ki ), QA (T ) | t )
246                                                                       Copula Methods in Finance

  Notice that using the relationship between copulas

             CLL (Qi (Ki ), QA (T )) = QA (T | t ) − CHL (Qi (Ki ), QA (T ) | t )

we may rewrite

  V-DPi (Ki ) = DPi (Ki ) − B (t, T ) LgdA CLL (Qi (Ki ) , QA (T ) | t )
                                                                                        
              = DPi (Ki ) − B (t, T ) LgdA QA (T | t ) − CHL (Qi (Ki ) , QA (T ) | t )
               = B (t, T ) − DCi (Ki ) + CHL (Qi (Ki ) , QA (T ) | t )
                  − B (t, T ) LgdA QA (T | t )
               = B (t, T ) − V-DCi (Ki ) − B (t, T ) LgdA QA (T | t )
                                                 
               = B (t, T ) 1 − LgdA QA (T | t ) − V-DCi (Ki )
               = PA (t, T ) − V-DCi (Ki )

where we have used DCi (Ki ) + DPi (Ki ) = B (t, T ). In this way we recovered an obvious
put–call parity relationship between vulnerable digital options. Buying a digital call and a
digital put from the same counterparty amounts to buying a defaultable zero-coupon bond
issued by the counterparty:

                              DCi (Ki ) + DPi (Ki ) = PA (t, T )


8.4.2 Pricing vulnerable call options

We now use the results obtained above for digital options to evaluate counterparty risk in a
typical derivative contract such as a European option. As suggested above, we resort to the
Breeden and Litzenberger (1978) idea of considering an option as an integral sum of digital
contracts. We recall that according to their approach, the value at time t of a default-free
call option written on Si with time to expiration T and strike K may be written as
                                        ∞                             ∞
              CALL(Si , t : K, T ) =         DCi (u) du = B (t, T )         Qi (u) du
                                        K                             K

This representation can be easily extended to the vulnerable case, and it is natural to use the
results obtained in the previous section, concerning the vulnerable pricing kernel, to recover
                               ∞
   V-CALL(Si , t : K, T ) =         V-DCi (u) du
                               K
                               ∞                                                       
                                                                          DCi (u) ElA
                          =          DCi (u) − B (t, T ) LgdA CHL                ,             du
                               K                                            B      LgdA

where V-CALL denotes the vulnerable call option. Using the no-arbitrage pricing relation-
ship Di (u) = B (t, T ) Q(u), it is now straightforward to obtain the following:
Option Pricing with Copulas                                                                                   247

Proposition 8.4 The no-arbitrage price of a vulnerable call option is given by
                                                                              ∞                   
                                                                                                ElA
V-CALL(Si , t : K, T ) = CALL(Si , t : K, T )−B (t, T ) LgdA                       CHL Qi (u),        du
                                                                               K               LgdA

where CHL (x, y) is a copula function.

   So, computing counterparty risk, which is now
                                                 ∞                   
                                                                   ElA
                             B (t, T ) LgdA           CHL Qi (u),        du
                                                 K                LgdA

requires to evaluate an integral of the copula function, with respect to the ﬁrst argument,
that is the pricing kernel. This integral is not generally available in closed form. Three
interesting cases, however, represent notable exceptions, as we show below.

• The case of independence between the underlying asset and default of the counterparty
  is computed directly using the product copula, which enables us to exploit factorization
  of the terms in the integral to yield

                        V-CALL (Si , t; K, T ) = CALL (Si , t; K, T ) (1 − ElA )

  Notice that in the case of independence the loss given default ﬁgure is dropped from the
  formula, and all we need is the aggregate expected loss ﬁgure, which is typically provided
  by the rating agencies.
• The second relevant case is perfect positive dependence. It is noticeable to observe that
  even in this instance we may recover a closed form solution, whenever a closed form
  solution exists for the corresponding default-free option price
                                                                
             V-CALL (Si , t; K, T ) = CALL (Si , t; K, T ) − max K ∗ − K, 0
                                                                      
                                      × DelA − LgdA CALL Si , t; max K, K ∗ , T

                       −1
   where K ∗ = Qi (ElA /LgdA ), that is the strike of a call option whose exercise prob-
   ability is equal to the default probability of the counterparty.1 For practical purposes,
   it is useful to notice that K ∗ corresponds to a far out-of-the-money option: as a result,
   the value of the corresponding default-free option is usually very close to zero. Since in

1 It may be worthwhile to discuss how this formula is recovered. When K < K ∗ the problem is to compute


                        ∞                           K∗            ∞
                                     ElA                    ElA
               BLgdA      min Q(η),        dη = BLgdA           dη +     Q(η) dη
                        K           LgdA               K   LgdA       K∗

                                                     = (K ∗ − K)DelA + LgdA C(Si , t; K ∗ , T )

where the last equality uses the deﬁnition of discounted expected loss and the integral representation for the call
option discussed above. Consideration of the case K ∗ < K is trivial, and immediately leads to the formula in
the text.
248                                                                Copula Methods in Finance

  most applications we have K ∗ ⩾ K, counterparty risk in the case of perfect dependence
  will be effectively approximated by the quantity (K ∗ − K)DelA , which is very easy to
  compute. If K ∗ < K the value of the vulnerable option is simply RA C (Si , t; K, T ) and
  credit risk tends to zero with the option value.
• The case of perfect negative dependence may also be easily computed using the same
  strategy to get

           V-CALL (Si , t; K, T ) = (1 − LgdA ) CALL (Si , t; K, T )
                                                             
                                    + LgdA CALL Si , t; max K, K ∗∗ , T
                                          
                                    − max K ∗∗ − K, 0 (B (t, T ) LgdA − DelA )

                 −1
  with K ∗∗ = Qi (1 − (ElA /LgdA )), that is the strike of a very deep-in-the-money option,
  whose exercise probability is equal to the survival probability of the counterparty. It is
  straightforward to check that if (as in most practical applications) K ∗∗ ⩽ K, the value
  of the vulnerable option is the same as that of the corresponding default-free contract. In
  the case K < K ∗∗ counterparty risk is instead evaluated as
                                                                               
                                                                          DelA
   LgdA CALL (Si , t; K, T ) − CALL Si , t; K ∗∗ , T + K ∗∗ − K B (t, T ) −
                                                                            LgdA

The formulas above provide very straightforward hedging strategies for the counterparty risk
in a vulnerable call option. In the case of perfect positive dependence, the hedging strategy
would call for being long max (K ∗ − K, 0) of a default put and LgdA of a call with strike
max (K ∗ , K). Since usually, as we argued above, the value of this option is very close to
zero, the credit derivative is a sufﬁcient hedge. Correspondingly, under perfect negative
dependence and with K < K ∗∗ the hedge consists of being long LgdA call spreads written
on strikes K and K ∗∗ , long (K ∗∗ − K) RA of the riskless bonds and short (K ∗∗ − K) of
PA . These hedging strategies refer to extreme dependence cases, and represent the super-
replication strategies corresponding to the Fréchet bounds discussed above.


8.4.3 Pricing vulnerable put options

The same approach can be applied to evaluate vulnerable put options. In this case, the
starting point is given by the representation
                            K
 V-PUT(Si , t : K, T ) =         V-DPi (u) du
                           0
                            K                                               
                                                                DPi (u) ElA
                       =     DPi (u) − B (t, T ) LgdA CLL                ,        du
                          0                                     B (t, T ) LgdA
                                                          K                       
                                                                                ElA
                       = PUT(Si , t : K, T ) − B (t, T )     LgdA CLL Qi (u),         du
                                                          0                    LgdA
                                                                                      (8.1)
Option Pricing with Copulas                                                              249

where V-PUT denotes the vulnerable put price, and the second addendum in (8.1) represents
counterparty risk. Using the same strategy as before we can compute the value of the option
in closed form for the three benchmark cases. Namely, we get

                    V-PUT (Si , t; K, T ) = PUT (Si , t; K, T ) (1 − ElA )

for the independence case,
                                                             
            V-PUT (Si , t; K, T ) = PUT (Si , t; K, T ) − max K − K ∗∗ , 0
                                                                   
                                    × DelA − LgdA PUT(Si , t; min K ∗∗ , K , T )

for perfect positive dependence, and ﬁnally

               V-PUT (Si , t; K, T ) = (1 − LgdA ) PUT (Si , t; K, T )
                                                               
                                        + LgdA PUT Si , t; min K, K ∗ , T
                                              
                                        − max K − K ∗ , 0 (BLgdA − DelA )

for perfect negative correlation. Notice that the values K ∗ and K ∗∗ are the same as in the
call option case above.
   As for the case of vulnerable digital options, we can use the no-arbitrage relationship
derived for digital call and put options to write
                                                                     
                                  ElA        ElA                   ElA
                    CLL Q(u),            =         − CHL Q(u),
                                 LgdA       LgdA                  LgdA

and to recover a relationship between the price of vulnerable call and put options as in the
following.

Proposition 8.5 [Vulnerable put–call parity] In order to rule out arbitrage opportunities,
the relationship between vulnerable call and put options must be

       V-PUT(Si , t : K, T ) + Si (t) = V-CALL(Si , t : K, T ) + KPA (t, T )
                                                          ∞                   
                                                                            ElA
                                        + B (t, T ) LgdA      CHL Q(u),           du
                                                          0                LgdA

  Proof :

 V-PUT(Si , t : K, T ) + Si (t) = PUT(Si , t : K, T )
                                                              K                 
                                                                              ElA
                                 + Si (t) − B (t, T ) LgdA         CLL Q(u),        du
                                                              0              LgdA
                               = CALL(Si , t : K, T ) + KB (t, T )
                                                   K                        
                                                         ElA               ElA
                                 − B (t, T ) LgdA             − CHL Q(u),         du
                                                   0    LgdA              LgdA
250                                                                  Copula Methods in Finance

                               = CALL(Si , t : K, T ) + K(B (t, T ) − DelA )
                                                   K                   
                                                                     ElA
                                 + B (t, T ) LgdA      CHL Q(u),            du
                                                   0                LgdA
                               = V-CALL(Si , t : K, T ) + KPA (t, T )
                                                   ∞                  
                                                                    ElA
                                 + B (t, T ) LgdA     CHL Q(u),           du
                                                   0               LgdA

                                                                                             

8.4.4 Pricing vulnerable options in practice
We now report some concrete examples of copula pricing applications to vulnerable options.
Let us ﬁrst notice that the approach guarantees the maximum ﬂexibility concerning the
choice of: (i) the option pricing model; (ii) the credit evaluation approach; and (iii) the
dependence structure. As for the ﬁrst choice, we stick here to the standard Black–Scholes
for a matter of illustration of the approach. The credit assessment choice is, of course,
crucial: one can choose either a structural approach based on the stock market value and
volatility of the counterparty or a reduced form based on corporate bonds or credit derivatives
information. Having ﬁrm speciﬁc information is obviously preferable if one wants to have
some idea on the dependence between default risk of the counterparty and dynamics of
the underlying asset of the vulnerable contract. If such information is not available, one
could rely on ﬁgures from the rating agencies and assume some scenario concerning the
dependence structure. Finally, a good choice to gauge the relevance of the dependence
structure for counterparty risk is to resort to the Fréchet family of copulas. As these copulas
are obtained as linear combinations of the perfect positive and negative dependence and the
product one, it follows that they can be priced in closed form using the formulas derived in
the paragraph above for each of these cases. In particular, it is very useful to use mixture
copulas based on the perfect dependence and the independence cases.


The effect of counterparty risk on the prices of options

In Figure 8.1 we report the counterparty risk ﬁgure in a one-year digital option for a Baa3
rated counterparty, as a function of the Kendall’s tau statistic. Use is made of the mixture
copula described above. The relationship is reported for different levels of the probability
of exercise, i.e. for different levels of moneyness. Based on Moody’s data, the issuer has
expected loss (ElA ) equal to 0.231% and a recovery rate (RA ) of 55%. For the sake of
simplicity, we select a 20% constant value of volatility of the underlying asset and zero
risk-free rate. It may be checked that the relationship between counterparty risk and the
dependence statistics is increasing.
   The prices of vulnerable call options are obtained by integration of the pricing kernel
depicted above, and vulnerable put options are recovered by arbitrage. Figures 8.2 and 8.3
present the counterparty risk in vulnerable call and put options respectively. The current
price of the underlying asset is assumed to be equal to 1 and the relationship is reported for
levels of the strike ranging from 0.6 through 1.4. As before, we assume a time of one year
to expiration, a 20% constant volatility and zero risk-free rate. As for the counterparty, we
Option Pricing with Copulas                                                                      251

                                     0.0025




                                       0.002




                                     0.0015                                         Moneyness = 1
                                                                                    Moneyness = 1.2
                                                                                    Moneyness = 15
                                                                                    Moneyness = 100
                                       0.001                                        Moneyness = 0.5
                                                                                    Moneyness = 0.2



                                     0.0005




                                            0
−1     −0.8     −0.6      −0.4     −0.2         0   0.2    0.4    0.6     0.8   1

                              Figure 8.1 Counterpart risk in digital options


                         Vulnerable Call Options-Mixture Copulas

                                           0.003


                                          0.0025


                                           0.002

                                                                                       K = 0.6
                                          0.0015                                       K = 0.8
                                                                                       K=1
                                                                                       K = 1.2
                                           0.001                                       K = 1.4


                                          0.0005


                                           0
      −1      −0.8     −0.6   −0.4    −0.2   0      0.2     0.4    0.6    0.8   1
                                        Kendall's Tau

                                 Figure 8.2 Counterpart risk in call options


consider an expected loss ﬁgure of 0.231%, corresponding to a Baa3 writer of the option. As
a consequence, the values K ∗ and K ∗∗ used to represent positive and negative dependence
turned out to be 1.727 and 0.556 respectively.
   As for call options, the schedules of the relationship are shifted upwards as the strike price
decreases. Concerning the amounts involved, we reckon that, for any billion of underlying
252                                                                     Copula Methods in Finance

                Counterpart Risk for Put Options-Mixture Copulas
                                   0.0025



                                    0.002



                                   0.0015
                                                                                       K = 0.6
                                                                                       K = 0.8
                                                                                       K=1
                                                                                       K = 1.2
                                    0.001                                              K = 1.4



                                   0.0005



                                       0
  −1    −0.8    −0.6   −0.4      −0.2    0       0.2   0.4     0.6      0.8    1
                                    Kendall's Tau

                           Figure 8.3 Counterpart risk in put options



                Table 8.6 Counterpart risk as a percentage of the value of option

Kendall τ      AAA        Aaa3          A3         Baa3        Ba3            B3         Caa3

 1          0.00117%   0.02700%      0.27620%    2.24963%    10.88450%    30.93574%   59.66535%
 0.75       0.00094%   0.02200%      0.22594%    1.85151%     9.04262%    26.09492%   53.42897%
 0.50       0.00069%   0.01639%      0.16946%    1.40410%     6.97275%    20.65490%   46.42065%
 0.25       0.00040%   0.00984%      0.10365%    0.88277%     4.56084%    14.31590%   38.25417%
 0          0.00003%   0.00166%      0.02137%    0.23100%     1.54550%     6.39100%   28.04461%
−0.25       0.00002%   0.00112%      0.01447%    0.15642%     1.04650%     4.32750%   18.98969%
−0.50       0.00001%   0.00070%      0.00895%    0.09676%     0.64735%     2.67694%   11.74680%
−0.75       0.00001%   0.00033%      0.00421%    0.04556%     0.30481%     1.26046%    5.53108%
−1          0.00000%   0.00000%      0.00000%    0.00000%     0.00000%     0.00000%    0.00000%




assets, in the case of independence counterparty risk is worth 924 603, 184 005 and 10 396 for
deep-in-the-money (K = 0.6), at-the-money and far-out-of-the-money (K = 1.4) contracts.
The ﬁgures increase with dependence up to 2 715 961, 1 791 961 and 867 961 respectively;
counterparty risk tends to zero with perfect negative dependence, since the strike is higher
than the upper level K ∗ = 1.727.
   Finally, to have an idea concerning the effect of dependence for different rating classes
of the counterparty we report, in Table 8.6, the value of counterparty risk as a percentage
of the value of the corresponding default-free call option. The option is assumed to be
at-the-money, with one year to the exercise date and a volatility parameter of 20%.
Option Pricing with Copulas                                                              253

Hedging counterparty risk in options

Notice that in the analysis above for the particular cases of independence and perfect
dependence the evaluation of vulnerable options only calls for knowledge of the pricing
formulas for the corresponding default-free products. More precisely, in the case of perfect
dependence, counterparty risk is represented by a short position in the spread B(t, T ) −
PA (t, T ) = Del, that can be traded in the market using a credit derivative contract, i.e. a
default put option, and a short position in a default-free option. The same structure applies
for put options. On the other hand, in the case of independence we have that the amount
of the position in the spread turns out to be equal to the CALL(.)/B(t, T ), i.e. the forward
value of the default-free call option. This suggests very straightforward hedging strategies
for extreme dependence scenarios, that is the super-hedging strategies. The hedging strategy
in the independence case is immediate. Instead, under the worst case scenario of perfect
dependence, the counterparty risk of a call option can be hedged by entering a long posi-
tion in default put options for an amount equal to max (K ∗ − K, 0) and by buying Lgd
call options with strike K ∗ . By the same token, the super-hedging strategy for put options
involves long positions in max (K − K ∗∗ , 0) default put options and Lgd put options with
strike K ∗∗ .
   To make a concrete example, consider a 1 million euro position in one of the call options
studied above. Say it is at-the-money, exercised in one year, and is issued by a Baa3
counterparty. We recall that the one-year default probability is 0.231% and the recovery rate
is 55%. Furthermore, the value K ∗ was found equal to 1.727. For the sake of simplicity, we
assume the risk-free rate to be equal to zero. The perfect positive dependence super-hedge
consists of

• buying protection for a 727 000 nominal exposure to the counterparty for an up-front
  payment equal to 755.72 euros;
• buying 450 000 default-free call options with strike equal to 1.727 against an up-front
  payment of 122.80 euros.

The total cost of the hedge is then 878.52 out of a default-free value of the option position
of 79 655.79.
  The independence super-hedge requires instead buying protection for a nominal value of
79 655.79 for a cost of 82.80 euros. Taking linear combinations of the extreme cases enables
us to account for imperfect positive dependence. For example, corresponding to a Spearman
ρS ﬁgure equal to 50%, the cost of the hedge is (0.5 × 878.52) + (0.5 × 82.80) = 480.66.

           8.5    PRICING RAINBOW TWO-COLOR OPTIONS
Rainbow options are multivariate contingent claims whose underlying asset is the maximum
or minimum in a set of assets. So, the typical pay-off for a bivariate, or two-color, rainbow
option is

                  G(S1 (T ), S2 (T ), T ) = max [min(S1 (T ), S2 (T )) − K, 0]

which is the call option on the minimum between two assets, or

                  G(S1 (T ), S2 (T ), T ) = max [K − max(S1 (T ), S2 (T )), 0]
254                                                                       Copula Methods in Finance

that is, the put option on the maximum between two assets. Once these options are priced, the
evaluation of other similar products, such as call options on the maximum and put options
on the minimum of two assets, can be recovered by arbitrage, as pointed out by Stulz (1982).
His paper also provided closed form solutions for these options in a Black–Scholes world.
We will see here that the use of copula functions enables us to extend these results quite
naturally to a more general setting. In fact, we are going to show that the price of the two
options described above has a straightforward interpretation in terms of copula functions,
and that these representations easily lead to analytical super-replication hedges.

8.5.1 Call option on the minimum of two assets

The basic argument that allows us to write down, in terms of copulas, the price of a call
option on the minimum of two underlying assets is quite easy to understand by exploiting
the analogy with the univariate plain vanilla option. We know that, in that case,
                                                           ∞
                      CALL (Z, t; K, T ) = B (t, T )            QZ (u | t ) du
                                                           K

  Applying the probability distribution technique described above, with Z = f (S1 , S2 ) =
min(S1 , S2 ) we may write
                                                ∞
       CALL (S1 , S2 , t; K, T ) = B (t, T )         Pr(min (S1 (T ) , S2 (T )) > u | t ) du
                                                K

where probability is computed under the risk-neutral measure. So, the relevant pricing kernel
is that of the minimum of the two risky assets S1 and S2 . Consider their joint survival
probability, for any threshold u: Pr (S1 (T ) > u, S2 (T ) > u | t ) . Obviously, stating that,
at time T , both of the prices will be higher than u is equivalent to saying that the lower of
the two will be above that threshold. So, the price of the option becomes
                                                 ∞
        CALL (S1 , S2 , t; K, T ) = B (t, T )         Pr(S1 (T ) > u, S2 (T ) > u | t ) du
                                                 K
                                                 ∞
                                  = B (t, T )         Q (u, u | t ) du
                                                K

It is now easy to check that the copula function approach can be particularly useful to give
a ﬂexible representation of this kind of product. In fact, using the general result discussed
above for bivariate digital options

                      DHH (u, u) = B (t, T ) Q (u, u | t )
                                   = B (t, T ) CHH (Q1 (u) , Q2 (u) | t )

we may write
                                                     ∞
            CALL (S1 , S2 , t; K, T ) = B (t, T )         CHH (Q1 (u) , Q2 (u) | t ) du
                                                     K
Option Pricing with Copulas                                                                  255

   In this way, we are able to separate the marginal distributions, and thus the marginal
pricing kernels, from the dependence structure, which is represented by the copula function
CHH .
   Using the copula function representation we may also check how the problem of market
incompleteness is compounded in a multidimensional setting. First, the market for each
underlying asset may have incompleteness problems. In this case we would have
                                                    ∞
                                                                   −        −
           CALL (S1 , S2 , t; K, T ) = B (t, T )            CHH (Q1 (u) , Q2 (u) | t ) du
                                                    K

   Second, even if the market for each underlying asset is complete, so that the marginal
distributions are uniquely determined, it may be the case that the dependence structure cannot
be precisely identiﬁed. In other words, it may happen (and it happens often) that the joint
pricing kernel cannot be uniquely determined. We know that if the marginal pricing kernels
are continuous, each candidate joint pricing kernel can be associated to a speciﬁc copula
function. So, solving the pricing problem in an incomplete market amounts to selecting a
speciﬁc copula function. As in the univariate approach, one could then select one speciﬁc
copula, following some strategy of choice. Alternatively, or prior to that, one could follow a
conservative approach, and evaluate pricing bounds, corresponding to extreme dependence
assumptions, and the corresponding copula functions. As we are going to show, by using
Fréchet copulas it is also easy to design super-replication portfolios corresponding to these
conservative scenarios.


Dependence structure and super-replicating portfolios
We now try to recover the pricing bounds of the call option on the minimum between two
underlying assets. In order to focus the analysis on the dependence structure issue, we may
assume that the markets of each of the underlying assets are complete, so that the marginal
pricing kernels are uniquely identiﬁed. Then, the only source of market incompleteness has
to do with the dependence structure between the two assets. We may then apply the Fréchet
bounds for copulas

              max(Q1 (u) + Q2 (u) − 1, 0 | t ) ⩽ CHH (Q1 (u) , Q2 (u) | t )
                                                        ⩽ min(Q1 (u) , Q2 (u) | t )

  Substituting in the pricing formula above we obtain
                                                     ∞
           CALL+ (S1 , S2 , t; K, T ) = B (t, T )            min(Q1 (u) , Q2 (u) | t ) du
                                                        K

as the upper bound for the price, corresponding to perfect positive dependence of the under-
lying assets. We also obtain
                                                ∞
             −
       CALL (S1 , S2 , t; K, T ) = B (t, T )         max(Q1 (u) + Q2 (u) − 1, 0 | t ) du
                                               K

as the lower price corresponding to perfect negative dependence.
256                                                                           Copula Methods in Finance

   These pricing bounds are particularly useful because they can be computed analyti-
cally and can be expressed in terms of univariate call options. In such a way, they are
directly referred to speciﬁc super-replication strategies for the product. Let us start with
the upper bound CALL+ . To compute the integral we ﬁrst recover a strike price K ∗ such
that Q1 (K ∗ ) = Q2 (K ∗ ). Assume, without loss of generality, that for u < K ∗ we have
Q1 (u) < Q2 (u). Then we have two cases. If K ⩾ K ∗ the joint pricing kernel will coincide
with the marginal pricing kernel Q2 (u), which will be lower than Q1 (u) for any u > K.
As a result, the price of the call option on the minimum will be the same as that of a
univariate plain vanilla call option written on S2 . If instead we have K < K ∗ the integral
can be split in two yielding a call spread on asset S1 and a call option on S2 with a higher
strike. Analytically we have
                                                                    K∗
             CALL+ (S1 , S2 , t; K, T ) = 1{K ∗ ⩾K} B (t, T )             (Q1 (u) | t ) du
                                                                    K
                                                            ∞
                                            + B (t, T )                    (Q2 (u) | t ) du
                                                             max[K,K ∗ ]

where 1{K ∗ ⩾K} is the indicator function assigning a value of 1 to the case K ⩾ K ∗ . As for
the ﬁnancial meaning of the formula, the ﬁrst term is a call spread on asset S1 for strike
prices K and K ∗ ; the second term is a call option on asset S2 for strike price equal to
max[K, K ∗ ]. So, the super-replication portfolio for the call option on the maximum is

      CALL+ (S1 , S2 , t; K, T ) = 1{K ∗ ⩾K} [CALL(S1 , t; K, T ) − CALL(S1 , t; K ∗ , T )]
                                    + CALL(S2 , t; max[K, K ∗ ], T )

   Following the same strategy we can compute the lower bound of the price, and the
corresponding super-replication portfolio. In this case, we deﬁne a strike price K ∗∗ such
that Q1 (K ∗∗ ) + Q2 (K ∗∗ ) = 1. Of course, as both Q1 (u) and Q2 (u) are strictly decreasing,
we would have that Q1 (u) + Q2 (u) ⩽ 1 for any u ⩾ K ∗∗ . So, remembering that the joint
pricing kernel is max[Q1 (u) + Q2 (u) − 1, 0] it will be equal to zero for any such u ⩾ K ∗∗ .
Now consider two cases. If it is K ⩾ K ∗∗ the value of the option will be identically zero.
If instead we have K < K ∗∗ the integral can again be split in two yielding
                                                                    K ∗∗
                  −
            CALL (S1 , S2 , t; K, T ) = 1  {K ∗∗ ⩾K}   B (t, T )            (Q1 (u) | t ) du
                                                                    K
                                               K ∗∗
                                          +            (Q2 (u) | t ) du − [K ∗∗ − K]
                                               K

   Notice that in this case we have two call spreads in the two assets S1 and S2 , both with
strike prices K ∗∗ and K, plus a debt position for an amount equal to K ∗∗ − K. In other
words, we have

      CALL− (S1 , S2 , t; K, T ) = 1{K ∗∗ ⩾K} [CALL(S1 , t; K, T ) − CALL(S1 , t; K ∗∗ , T )
                                   + CALL(S2 , t; K, T ) − CALL(S2 , t; K ∗∗ , T )
                                   − B(t, T )[K ∗∗ − K]]
Option Pricing with Copulas                                                                 257

  For some pair of assets, the assumption that they can be negatively dependent may be an
implausible assumption. In this case it may be useful to limit the analysis to the positive
dependence orthant, so that the relevant lower bound will be the independence case. We
would have, in this case,
                                                            ∞
              CALL⊥ (S1 , S2 , t; K, T ) = B (t, T )             (Q1 (u) Q2 (u) | t ) du
                                                            K

  Unfortunately, however, the solution is not directly available in closed form, apart from
very special cases.

8.5.2 Call option on the maximum of two assets
The call option on the maximum of two assets can be recovered by arbitrage as suggested
in Stulz (1982). Deﬁne this call option by the pay-off

                G (S1 (T ) , S2 (T ) , T ) = max [max (S1 (T ) , S2 (T )) − K, 0]

  It is easy to see that this pay-off can be exactly replicated by

    max [max (S1 (T ) , S2 (T )) − K, 0] = max [S1 (T ) − K, 0] + max [S2 (T ) − K, 0]
                                                   − max [min (S1 (T ) , S2 (T )) − K, 0]

  In fact, if we have S1 (T ) > S2 (T ) > K the option is worth S1 (T ) − K, while in the
case S2 (T ) > S1 (T ) > K we get S2 (T ) − K. Checking equivalence of the pay-off in the
other cases is trivial.
  In order to rule out arbitrage opportunities, we must then have

           CALL (S1 , S2 , t; K, T ) = CALL (S1 , t; K, T ) + CALL (S2 , t; K, T )
                                            − CALL (S1 , S2 , t; K, T )

Remark 8.1 Notice that the call option on the maximum of two assets can also be written
using the dual of the survival copula CHH . In fact, applying the deﬁnition given in Chapter 2
we have
                                         ∞                                ∞
  CALL (S1 , S2 , t; K, T ) = B (t, T )     (Q1 (u) | t ) du + B (t, T )     (Q2 (u) | t ) du
                                            K                                    K
                                                 ∞
                                 − B (t, T )          CHH (Q1 (u) , Q2 (u) | t ) du
                                               K
                                             ∞
                              = B (t, T )       [(Q1 (u) | t ) + (Q2 (u) | t )
                                            K

                                − CHH (Q1 (u) , Q2 (u) | t )] du
                                           ∞
                              = B (t, T )     CHH (Q1 (u) , Q2 (u) | t ) du
                                            K
258                                                                             Copula Methods in Finance

   Alternatively, it is easy to check that the price could also be written in terms of the
co-copula of copula CLL . In fact, as shown in Chapter 2, the dual of a survival copula CHH
generated by a copula CLL corresponds to the co-copula of the latter copula. This enables us
to use the discussion in Chapter 2 to spell the basic intuition behind this result. The pricing
kernel of the call option on the maximum of two assets is the risk-neutral probability that
either S1 or S2 at time T is greater than a threshold value u:
                                                ∞
         CALL (S1 , S2 , t; K, T ) = B (t, T )     Pr(S1 (T ) or S2 (T ) > u, | t ) du
                                                        K


8.5.3 Put option on the maximum of two assets
We now approach the symmetric problem of two-color put options. In particular, symmetry
suggests to start from the put option written on the maximum of two assets, whose pay-off
is written as

                  G(S1 (T ), S2 (T ), T ) = max [K − max(S1 (T ), S2 (T ), 0]

  Along the same lines followed for the case of the call option, we obtain
                                                K
        PUT (S1 , S2 , t; K, T ) = B (t, T )            Pr(max (S1 (T ) , S2 (T )) ⩽ u | t ) du
                                                0

   Again, saying that the maximum price of the underlying assets is lower than a given
threshold u is the same as stating that both the prices are below that threshold. Analytically,
we can write

           Pr (max (S1 (T ) , S2 (T )) ⩽ u | t ) = Pr (S1 (T ) ⩽ u, S2 (T ) ⩽ u | t )

so that we have
                                                 K
         PUT (S1 , S2 , t; K, T ) = B (t, T )               Pr(S1 (T ) ⩽ u, S2 (T ) ⩽ u | t ) du
                                                    0

  Going back again to the general results obtained for bivariate digital options

                      DLL (u, u) = B (t, T ) Q (u, u | t )
                                   = B (t, T ) CLL (Q1 (u) , Q2 (u) | t )

we may write
                                                         K
             PUT (S1 , S2 , t; K, T ) = B (t, T )               CLL (Q1 (u) , Q2 (u) | t ) du
                                                            0

and the price of the put option is the integral of a copula function. We could obviously
apply the same techniques shown above to recover closed form solutions for the pricing
bounds of this rainbow put option and the corresponding super-replication portfolios. While
leaving this development to the readers, we want to focus attention on the fact that the
Option Pricing with Copulas                                                               259

copula function in the put option formula is different from that appearing in the call price
representation. A closer inspection of the formula suggests, however, a precise relationship
between the two functions, which we are going to explore in more detail in the next section.

Rainbow put/call parity

Let us restate in ﬁnancial terms the results recovered for rainbow options of the call and put
type. In sum, we applied to these options the same principle that Breeden and Litzenberger
(1978) suggested for univariate options. Call options on the minimum between two assets
can then be represented as the integral of bivariate digital call options, the integral being
computed from the strike K to inﬁnity. Symmetrically, the price of a put option on the
maximum of two assets is the integral of bivariate digital put options, the integral running
from zero to the strike K. We saw at the beginning of this chapter that bivariate digital call
and put options are linked by precise arbitrage relationships. Intuitively, building on these
ﬁndings must be possible to recover arbitrage relationships between call and put rainbow
options.
   We remind the readers that bivariate call and put digital options are linked by the no-
arbitrage relationship

            DLL (K1 , K2 ) = B (t, T ) − DC1 (K1 ) − DC2 (K2 ) + DHH (K1 , K2 )

which corresponds to the relationship between one copula and its survival:

                        CLL (1 − u, 1 − v) = 1 − u − v + CHH (u, v)

So, in our case we have

                  CLL (Q1 (S1 (T ) ⩽ u) , Q2 (S2 (T ) ⩽ u) | t )
                       = 1 − Q1 (S1 (T ) > u | t ) − Q2 (S2 (T ) > u | t )
                           + CHH (S1 (T ) > u, S2 (T ) > u | t )

   Based on this relationship it is now straightforward to derive a no-arbitrage link between
the put option on the maximum and the call option on the minimum.

Proposition 8.6 [Rainbow put–call parity] A put option on the maximum of two assets
with strike price K and exercise date T is linked to the call option on the minimum of the
same assets, with the same strike and exercise date by the relationship

          PUT (S1 , S2 , t; K, T ) + S1 + S2 = CALL (S1 , S2 , t; K, T ) + B (t, T ) K
                                                + CALL (S1 , S2 , t; 0, T )

  Proof : Adding and subtracting 1 to the right-hand side of the relationship between CLL
and its survival copula and considering 1 − Qi (u | t ) = Qi (u | t ) we have

              CLL (Q1 (u) , Q2 (⩽ u) | t ) = Q1 (u | t ) + Q2 (u | t )
                                               −1 + CHH (Q1 (u) , Q2 (u) | t )
260                                                                             Copula Methods in Finance

  We now compute
                                              K
      PUT (S1 , S2 , t; K, T ) = B (t, T )          CLL (Q1 (u) , Q2 (u) | t ) du
                                              0
                                   K                                   K
                              =         B (t, T ) Q1 (u | t ) du +          B (t, T ) Q2 (u | t ) du
                                  0                                      0
                                       K                     K
                                  −         B(t, T ) du +          B (t, T ) CHH (u, u | t ) du
                                        0                     0
                                   K                                   K
                              =         B (t, T ) Q1 (u | t ) du +          B (t, T ) Q2 (u | t ) du
                                  0                                      0
                                       K                     ∞
                                  −         B(t, T ) du +          BCHH (Q1 (u) , Q2 (u) | t ) du
                                        0                     0
                                       ∞
                                  −         BCHH (Q1 (u) , Q2 (u) | t ) du
                                        K
                              = PUT (S1 , t; K, T ) + PUT (S2 , t; K, T ) − KB (t, T )
                                  + CALL (S1 , S2 , t; 0, T ) − CALL (S1 , S2 , t; K, T )

  If we now use the univariate put–call parity

                      PUT (Si , t; K, T ) + Si = CALL (Si , t; K, T ) + KB

and we reorder terms, we have

  PUT (S1 , S2 , t; K, T ) + S1 + S2 = CALL (S1 , t; K, T ) + CALL (S2 , t; K, T ) + BK
                                             + CALL (S1 , S2 , t; 0, T ) − CALL (S1 , S2 , t; K, T )

  Finally, if we consider the relationship proved in the previous section

            CALL (S1 , S2 , t; K, T ) = CALL (S1 , t; K, T ) + CALL (S2 , t; K, T )
                                             − CALL (S1 , S2 , t; K, T )

we obtain the result in the proposition.                                                                 

Remark 8.2 Notice that using the same relationship between call options on the maximum
and minimum between two assets and the fact that

                                      CALL (Si , t; 0, T ) = Si (t)

for i = 1, 2 the put–call parity relationship in the proposition can be written as

                 PUT (S1 , S2 , t; K, T ) = CALL (S1 , S2 , t; K, T ) + B (t, T ) K
                                                  − CALL (S1 , S2 , t; 0, T )

as in Stulz (1982), page 167.
Option Pricing with Copulas                                                                    261

8.5.4 Put option on the minimum of two assets
Finally, let us come to evaluate the put option on the minimum between two assets. The
pay-off of the option is
                G (S1 (T ) , S2 (T ) , T ) = max [K − min (S1 (T ) , S2 (T )) , 0]
  Again by arbitrage arguments, it is easy to check that the same parity relationship above
holds, and by symmetry we have
               PUT (S1 , S2 , t; K, T ) = CALL (S1 , S2 , t; K, T ) + B (t, T ) K
                                              − CALL (S1 , S2 , t; 0, T )
   However, it may be instructive to derive the result directly by using copula duality.
Intuitively, this put option may end up in the money if either S1 (T ) ⩽ K or S2 (T ) ⩽ K.
It is then natural to write the price as
                                                    K
              PUT (S1 , S2 , t; K, T ) = B (t, T )     Pr(S1 ⩽ u or S2 ⩽ u | t ) du
                                                     0
where the probability is computed under the risk-neutral measure Q. Remember that
                   Pr (S1 ⩽ u, S2 ⩽ u | t ) = CLL (Q1 (u) , Q2 (u) | t )
and from Chapter 2
   Pr (S1 ⩽ u or S2 ⩽ u | t ) = CLL (Q1 (u) , Q2 (u) | t )
                                 = Q1 (u | t ) + Q2 (u | t ) − CLL (Q1 (u) , Q2 (u) | t )
where CLL is the dual of copula CLL . Using this we obtain a relationship between put
options on the minimum and the maximum between two assets
                                        K
  PUT (S1 , S2 , t; K, T ) = B (t, T )     CLL (Q1 (u) , Q2 (u) | t ) du
                                        0
                                        K
                         = B (t, T )         [Q1 (u | t ) + Q2 (u | t )
                                        0
                              − CLL (Q1 (u) , Q2 (u) | t )] du
                         = PUT (S1 , t; K, T ) + PUT (S2 , t; K, T ) − PUT (S1 , S2 , t; K, T )
Substituting put–call parities we ﬁnally have
           PUT (S1 , S2 , t; K, T ) = 2B (t, T ) K − S1 (t) − S2 (t)
                                       + CALL (S1 , t; K, T ) + CALL (S2 , t; K, T )
                                       + S1 (t) + S2 (t) − CALL (S1 , S2 , t; K, T )
                                       − CALL (S1 , S2 , t; 0, T ) − B (t, T ) K
                                   = B (t, T ) K − CALL (S1 , S2 , t; 0, T )
                                       + CALL (S1 , S2 , t; K, T )
262                                                                        Copula Methods in Finance

where again we used the relationship between call options on the maximum and minimum
between two assets.

8.5.5 Option to exchange
The price of the option to exchange one asset for another was originally derived – for
log-normal distributions – by Margrabe (1978). It can be considered as a portfolio of one
underlying asset and a zero-strike call option on the minimum. Consider the option to
exchange the ﬁrst asset for the second, for instance.2 The pay-off of this exchange option is

                            G(S1 (T ), S2 (T ), T ) = max(S1 (T ) − S2 (T ), 0)

which can be rewritten as

                        G(S1 (T ), S2 (T ), T ) = S1 (T ) − max(min(S1 , S2 ), 0)

Recalling that the risk-neutral expected value of the underlying asset at maturity is the
forward price, it follows that the exchange option price (OEX) is the current value of the
ﬁrst underlying asset minus the price of the option on the minimum between the two, with
strike equal to zero. So,

                        OEX (S1 , S2 , t; T ) = S1 (t) − CALL (S1 , S2 , t; 0, T )

  It is then straightforward to design super-replication bounds for this product. The bounds
used in the call option on the minimum simplify substantially, at least in notation, because
we obviously have K ∗∗ ⩾ K = 0. In fact, the upper bound is

OEX+ (S1 , S2 , t; T ) = S1 (t) − CALL− (S1 , S2 , t; 0, T )
                                                               
                       = S1 (t) − CALL (S1 , t; 0, T ) − CALL S1 , t; K ∗∗ , T
                                                                                        
                         + CALL (S2 , t; 0, T )−CALL S2 , t; K ∗∗ , T −B (t, T ) K ∗∗ − 0
                                                 
                       = S1 (t) − S1 (t) + CALL S1 , t; K ∗∗ , T − S2 (t)
                                    
                         + CALL S2 , t; K ∗∗ , T + B (t, T ) K ∗∗
                                                           
                       = CALL S1 , t; K ∗∗ , T + CALL S2 , t; K ∗∗ , T + BK ∗∗ − S2 (t)
                                                        
                       = CALL S1 , t; K ∗∗ , T + PUT S2 , t; K ∗∗ , T

where we recall that a strike price K ∗∗ is such that Q1 (K ∗∗ ) + Q2 (K ∗∗ ) = 1. On the other
hand, the lower bound turns out to be

   OEX− (S1 , S2 , t; T ) = S1 (t) − CALL+ (S1 , S2 , t; 0, T )
                                                                               
                          = S1 (t) − CALL (S1 , t; 0, T ) − CALL S1 , t; K ∗ , T
                                       
                            − CALL S2 , t, K ∗ , T

2 It is also a particular case of the spread option, with K = 0.
Option Pricing with Copulas                                                                 263
                                                                          
                        = S1 (t) − S1 (t) + CALL S1 , t; K ∗ , T + CALL S2 , t; , K ∗ , T
                                                        
                        = CALL S1 , t; K ∗ , T + CALL S2 , t; , K ∗ , T

with K ∗ deﬁned in such a way that Q1 (K ∗ ) = Q2 (K ∗ ).
  Summing up, the super-replication bounds of the option to exchange are represented by
                                 
       CALL S1 , t; K ∗ , T − CALL S2 , t; , K ∗ , T ⩽ OEX (S1 , S2 , t; T )
                                                                   
                                 ⩽ CALL S1 , t; K ∗∗ , T + PUT S2 , t; K ∗∗ , T

8.5.6 Pricing and hedging rainbows with smiles: Everest notes
Consider a concrete example of an index-linked product whose coupon is linked to the
minimum or maximum return of two assets measured over the investment horizon from t to
T , provided this ﬁgure is higher than some assigned threshold K. The value of the coupon
is then, for example,
                                                                      
               S1 (T ) S2 (T )                       S1 (T ) S2 (T )
     max min          ,          , K = K + max min          ,          − K, 0
               S1 (t) S2 (t)                         S1 (t) S2 (t)

and the problem involves the evaluation of a call option on the minimum of two assets.
For example, setting K = 1 we ensure against the possibility of a negative coupon. Our
task is to provide a solution to the problem that could be sufﬁciently general to account
for different shapes of the risk-adjusted distributions of the two assets or indexes involved
and for a general dependence structure. We are particularly interested in checking extreme
dependence scenarios and the corresponding super-replication strategies. Our example uses
information on the Italian blue chip index, Mib 30 and the Japanese index, Nikkei 225.
   We apply the following procedure. We ﬁrst estimate the implied risk-neutral distribution
from option data. We then compute the super-replication strategies and the pricing bounds
for the product. We ﬁnally show how to construct a mixture copula to account for imperfect
dependence and maintain a closed form solution for the hedging strategy and the price.

Retrieving the implied probability from market prices
We start by extracting the risk-neutral distributions from the option data taken from Bloom-
berg. The implied volatility smile for both the markets was ﬁtted using a quadratic inter-
polation technique as suggested by Shimko (1994). The ﬁtted smile curves are presented
in Figure 8.4. The strikes were normalized by the observed value of the underlying index
on the day of evaluation, so that the value 1 on the horizontal axis corresponds to the
at-the-money volatility.
   Volatility interpolation is used to reconstruct call spreads approximating the implied
cumulative risk-neutral distributions. The resulting probability distributions are given in
Figure 8.5. For any level of one underlying asset, which is again normalized by its current
value, we depict the probabilities that over the next six months that market is growing
more than or less than the threshold. Using the previous notation, the decreasing sched-
ules are referred to the decumulative distributions Qi and the increasing ones describe the
cumulative probabilities Qi .
264                                                                  Copula Methods in Finance

      0.45



       0.4



      0.35


                                                                                  MIB30
       0.3                                                                        Nikkei


      0.25



       0.2



      0.15
          0.8     0.85        0.9       0.95        1         1.05        1.1

                         Figure 8.4 Smiles of Nikkei 225 and Mib 30

      1.2



        1



      0.8



      0.6



      0.4



      0.2



        0
        0.85      0.9        0.95        1         1.05        1.1        1.15       1.2

                  Figure 8.5 Probability distributions of Nikkei and Mib 30

   We notice that both distributions give negligible value to the event of a decrease of the
markets 15% below the current value. Furthermore, the probability of the Mib 30 index
increasing or falling by a given percentage is always lower than the corresponding proba-
bility for the Nikkei 225 index (ﬁrst-order stochastic dominance). This implies, of course,

                         min(QMib (K) , QNikkei (K)) = QNikkei (K)
Option Pricing with Copulas                                                                  265

for any threshold return K and the perfect positive dependence pricing kernel for call options
coincides with that of the Nikkei.
   In order to recover the perfect negative dependence pricing kernel we notice instead
that the cumulative distribution of returns on the Mib 30 index crosses the decumulative
distribution of the Nikkei slightly above the current values of the indexes. More precisely,
we have

                               QMib (1.00676) = QNikkei (1.00676)

  In other terms, the risk-neutral probability of the Italian index to grow less than 67.6
basis points is equal to the probability of the Japanese index growing more than the same
ﬁgure. We have then that K ∗∗ = 1.00676, and the lower bound of the pricing kernel is zero
beyond that level.

Pricing the rainbow option

We are now in a position to price and hedge the rainbow option and the index-linked product.
Based on the above analysis, we have that the upper bound pricing kernel corresponds to
the Nikkei pricing kernel. The lower pricing kernel for strike prices K < 1.00676 is instead
equal to two call spreads on the strike prices K and K ∗∗ = 1.00676 and a debt position
equal to K ∗∗ − K, while it is equal to zero for all the other prices. The pricing kernels are
depicted in Figure 8.6.
   In the ﬁgure we also report linear combinations of the upper and lower pricing kernels,
which are consistent with imperfect dependence between the markets: the corresponding
copula functions are special cases of the Fréchet family of copulas.
   Finally, in Figure 8.7 we present the pricing schedules of the index-linked product with
respect to different return protection rates, i.e. for different strikes of the rainbow option.

      1.2



       1



      0.8

                                                                                Upper
                                                                                Lower
      0.6                                                                       Alpha 0.75
                                                                                Alpha 0.50
                                                                                Alpha 0.25
      0.4



      0.2



       0
       0.85       0.9         0.95     1      1.05      1.1     1.15      1.2

                        Figure 8.6 Pricing kernel of the rainbow option
266                                                                           Copula Methods in Finance

      1.07


      1.06


      1.05


      1.04
                                                                                         Upper
      1.03                                                                               Alpha 0.25
                                                                                         Alpha 0.50
                                                                                         Alpha 0.75
      1.02                                                                               Lower


      1.01


         1


      0.99
             0   20   40       60       80   100    120    140    160   180     200

                           Figure 8.7    Price of the rainbow equity-linked note


       0.6


       0.5


       0.4


       0.3                                                                               Upper
                                                                                         Alpha 0.25
                                                                                         Alpha 0.50
       0.2                                                                               Alpha 0.75
                                                                                         Lower

       0.1


        0
             0   20   40       60       80   100   120    140    160    180     200

      −0.1

                           Figure 8.8 Delta of the rainbow equity-linked note


The pricing schedules are reported for the different pricing kernels depicted above. The
pricing schedules look almost linear and increase with the degree of dependence between
the markets. To give a ﬁgure, the cost of providing zero return protection on a 1 million
investment in the product (K = 1) is almost worthless if the two markets are perfectly nega-
tively dependent (it is 24 cents), while it amounts to 51 546.31 in the case of perfect positive
dependence. In the case of independence the cost is about half that, scoring 25 773.27.
Option Pricing with Copulas                                                                  267

   To conclude, we report in Figure 8.8 the value of the delta of the contracts with respect
to movements of the two markets. The sensitivity to the market increases with dependence
and decreases with moneyness, that is, with the increase in the protection threshold offered.

                      8.6     PRICING BARRIER OPTIONS
Barrier options are contingent claims in which the exercise is conditional on the event that
the value of the underlying asset has been above or below a given value over a given
reference period. In the standard plain vanilla cases, barrier options are classiﬁed according
to whether an option is activated (knocked-in) or deactivated (knocked-out) if some upper
or lower barrier level is reached over the whole life of the option. We may then have
down-and-out, up-and-out, down-and-in and up-and-in options both of the call and put type.
Typically, a ﬁxed payment R may be given to the holder of the option if it is not activated:
this payment is called “rebate”. These options have closed form solutions under the standard
Black–Scholes setting, and the readers are referred to the standard option pricing literature
for these results.
   Here we want to show how to apply the copula function pricing technique for a general
treatment of barrier options, accounting for more complex cases. In fact, the pricing prob-
lem of barrier options may get involved if some of the assumptions concerning either the
dynamics of the underlying asset are made more general or the structure of the contract
is made more complex than in the standard plain vanilla case. The ﬁrst problem has to
do with the fact that while closed form solutions for barrier options are available under
the standard Black–Scholes assumption of constant volatility, the reality of markets shows
clear evidence against such hypotheses of normally distributed returns. So, even for standard
options one would like to cast the pricing problem in a more general setting in order to
account for models in which the conditional distribution of the underlying asset can be cho-
sen to be consistent with some stochastic volatility dynamics. As barriers are generally used
to reduce the cost of the option for the buyer and the premium earned by the counterparty
who writes it, it is particularly relevant for the counterparty to assess the risk of this option
under realistic dynamics of the underlying asset.
   A general setting would also enable one to address the case of complex barrier option
contracts. A simple example is given by barriers in options with exotic pay-offs. Consider
the case of rainbow or basket options or path-dependent contingent claims including barriers:
in all of these cases the closed form solutions obtained under the standard Black–Scholes
setting can only be taken as arbitrary approximations to the “fair value” of the contract.
   The structure of the barrier can also be much more sophisticated than it is in the standard
cases. A ﬁrst source of complexity can be represented by the fact that the barrier may
be referred to a variable which is different from the underlying asset: this is the case, for
example, of barrier swaptions, whose underlying asset we recall is the forward swap rate,
with barriers referred to the LIBOR rate. In cases like these the important question is how
the dependence structure between the underlying asset and the barrier variable (the swap
rate and the LIBOR rate in the example above) impacts on the determination of the joint
probability that the option ends in the money and the barrier is hit or not. Another source
of complexity could be represented by the way in which the event of reaching or crossing
a barrier is linked to activation or deactivation of the contingent claim. In some cases the
option may be knocked-out or knocked-in only if the reference variable has been below
or above some given barrier for a period of time longer than a given interval. Such an
268                                                                   Copula Methods in Finance

interval can be referred to the whole length of the time to exercise, as in the so-called
parisian options, or it may be itself stochastic, and referred to the time difference between
the exercise date and the date on which the barrier is crossed (caution time), as in the
so-called edokko options. Furthermore, the period the reference variable has been below or
above the barrier can be computed as the length of time it has continuously been beyond the
barrier or the overall time spent in that region: the latter case is called cumulative parisian
or edokko option. The idea behind these structures is to make manipulation of the trigger
variable market more difﬁcult.
   To understand how copula functions can be usefully employed to price barrier options,
consider that, from a fully general perspective, a barrier option can be seen as a contingent
claim that provides a positive pay-off if two events take place. Beside the standard event
that the option ends up in the money at the time of exercise, there is a second event which
acts as a “trigger” to activate and deactivate the option. In a broad sense, pricing a barrier
option involves the evaluation of the joint probability of the exercise and the trigger event,
and that is where copula functions can help.

8.6.1 Pricing call barrier options with copulas: the general framework
As a ﬁrst example, consider a European call option written on asset S with strike K and
exercise time T which can be exercised if some trigger event h occurs, and provides a rebate
R otherwise. For the sake of simplicity we assume that the rebate is paid at the exercise
date. Considering the rebate to be paid at the time the trigger event occurs would only make
the treatment more involved, calling for a speciﬁcation of the probability density of the
time when it takes place. Say, the trigger variable is a boolean variable taking value 1 if the
event takes place and 0 otherwise. The relevant pricing kernel in this case is represented
by the joint probability Q(u, 1) = Pr(S(T ) > u, h = 1). Using the probability distribution
approach we may write the price of the option as
                                              ∞
      CALL (S(t), t; K, T , h = 1, R) = B          Q(u, 1 | t ) du + B (t, T ) Qh (t )R
                                              K

where Qh is the marginal conditional probability of the trigger event h = 0 and we recall that
Qh = 1 − Qh is the probability of the complement. This bivariate distribution interpretation
is well suited for the application of copula functions. We have in fact
                                                       ∞
                                                                   
        CALL (S(t), t; K, T , h = 1, R) = B (t, T )         CHH [QS u), Qh | t ] du
                                                       K
                                             + B (t, T ) Qh (t )R

   The same technique could be applied to price a call option with the same strike and
exercise date, but with exercise conditioned on the event that the trigger is not activated. In
this case the option can be exercised if h = 0 and the rebate R is paid otherwise. The price
will be
                                                      ∞
         CALL (S(t), t; K, T , h = 0, R) = B (t, T )      CHL [QS (u), Qh | t )] du
                                                        K

                                              + B (t, T ) Qh (t )R
Option Pricing with Copulas                                                                269

  We may again verify that no-arbitrage requires the relationship CHL (u, 1 − v) = u−
CHH (u, v), so that

      CALL (S(t), t; K, T , h = 0, R)
                       ∞
         = B (t, T )       [QS (u) − CHH (QS (u) , Qh | t )] du + B (t, T ) Qh (t )R
                         K
            = CALL (S(t), t; K, T ) − CALL (S(t), t; K, T , h = 1, R) + B (t, T ) R

   In fact, buying a barrier option that can be exercised under some set of states of the
world, i.e. some trigger condition, and an equal option whose exercise is conditioned on the
complement set, amounts to removing the effect of the barrier. So, the result is the same as
to buy an option that can be exercised irrespective of the condition plus a ﬁxed sum, the
rebate, which is received for sure.

             CALL (S(t), t; K, T , h = 0, R) + CALL (S(t), t; K, T , h = 1, R)
                  = CALL (S(t), t; K, T ) + B (t, T ) R

Remark 8.3 It is worthwhile checking what would happen if the rebate were paid at the
time the trigger event takes place. Notice that in this case there would be an asymmetry
in the treatment. In fact, for the option conditioned on the event h = 1, the rebate could
only be paid at expiration (it is a knock-in barrier option). On the contrary, the option
conditioned on the event that the trigger is not activated, that is h = 0, would typically
pay a rebate at the time in which the event actually takes place (it is a knock-out barrier
option). Let us deﬁne θ = inf (s; h (s) = 1, s ⩾ t) the time of the trigger event and B (t, θ )
the corresponding risk-free discount factor. In this case the value of the rebate would be
EQ B (t, θ ) 1{t⩽θ ⩽T } R. Accordingly, in the relationship between knock-in and knock-out
options we would recover
                                                 
                        B (t, T ) Qh (t )R + EQ B (t, θ ) 1{t⩽θ ⩽T } R

instead of B (t, T ) R. Substituting this term for B (t, T ) R would not, however, change the
proofs reported below.

Before going on it may be worth considering a very special case that will be useful in the
development of this discussion. Take the case of a barrier call option with a strike K = 0.
We have
                                                     ∞
                                                                             
        CALL (S(t), t; 0, T , h = 1, R) = B (t, T )     CHH QS u), Qh | t du
                                                      0
                                          + B (t, T ) Qh (t )R
                                                     ∞
        CALL (S(t), t; 0, T , h = 0, R) = B (t, T )     CHL [QS (u), Qh | t )] du
                                                      0

                                            + B (t, T ) Qh (t )R

and

  CALL (S(t), t; 0, T , h = 0, R) + CALL (S(t), t; 0, T , h = 1, R) = S (t) + B (t, T ) R
270                                                                       Copula Methods in Finance

  It is clear that the value of a barrier call option with strike equal to zero is an option
delivering the asset at exercise date T if the trigger event occurs, and the rebate R if it does
not. If the rebate is assumed to be zero, this contingent claim is known as digital, or one
touch, asset-or-nothing (AoN) option. So, we deﬁne

               DCAoN (S(t), t; T , h = 0) = CALL (S(t), t; 0, T , h = 0, 0)
               DCAoN (S(t), t; T , h = 1) = CALL (S(t), t; 0, T , h = 1, 0)

  By the same token, imagine a contract that pays a unit of cash at the exercise time
T if the trigger event occurs. We may call this contingent claim a digital, or one touch,
cash-or-nothing (CoN) option, and we may deﬁne

                      DCCoN (S(t), t; T , h = 0, 0) = B (t, T ) Qh (t )
                      DCCoN (S(t), t; T , h = 1, 0) = B (t, T ) Qh (t )

8.6.2 Pricing put barrier option: the general framework
We are now going to show that the copula arbitrage relationship also enables us to establish
a relationship between call and put options. Consider a put option with strike K and exercise
time T . The exercise is again conditioned on the trigger h = 1 with rebate R. The price is
                                                          K
         PUT (S(t), t; K, T , h = 1, R) = B (t, T )            CLH [QS (u), Qh | t )] du
                                                          0

                                               + B (t, T ) Qh (t )R

Using the no-arbitrage relationship, CLH (1 − u, v) = v− CHH (u, v), we have
                                            K
PUT(S(t), t; K, T , h = 1, R) = B(t, T )           [Qh (t ) − CHH [QS (u), Qh | t )]] du
                                           0
                                 + B(t, T )Qh (t )R
                                                                    K
                               = B(t, T )KQh (t ) − B(t, T )            CHH [QS (u), Qh | t )] du
                                                                    0
                                 + B(t, T )Qh (t )R
                                                                    ∞
                               = B(t, T )KQh (t ) − B(t, T )            CHH [QS (u), Qh | t )] du
                                                                    0
                                               ∞
                                 + B(t, T )          CHH [QS (u), Qh | t )] + B(t, T )Qh (t )R
                                               K
                               = B(t, T )KQh (1 | t ) + CALL(S(t), t; K, T , h = 1, R)
                                             ∞
                                 − B(t, T )     CHH [QS (u), Qh (1) | t )]du
                                               0
Option Pricing with Copulas                                                                    271

  We now turn to the case in which the put option, with the same strike and time to
exercise, is subject to the trigger h = 0 with rebate R. As in the case of call options, ruling
out arbitrage opportunities requires

                PUT (S(t), t; K, T , h = 0, R) + PUT (S(t), t; K, T , h = 1, R)
                  = PUT (S(t), t; K, T ) + B (t, T ) R

  Using the put–call parity relationships we have ﬁnally

 PUT (S(t), t; K, T , h = 0, R) = PUT (S(t), t; K, T ) + B (t, T ) R
                                        − PUT (S(t), t; K, T , h = 1, R)
                                     = CALL (S(t), t; K, T ) + B (t, T ) K − S (t)
                                        + B (t, T ) R − PUT (S(t), t; K, T , h = 1, R)
                                     = CALL (S(t), t; K, T ) + B (t, T ) K − S (t) + B (t, T ) R
                                        − B (t, T ) KQh (t ) − CALL (S(t), t; K, T , h = 1, R)
                                                     ∞
                                        + B (t, T )     CHH [QS (u), Qh | t )] du
                                                    0
                                     = B (t, T ) KQh (t )
                                        + CALL (S(t), t; K, T , h = 0, R)
                                                     ∞
                                        − B (t, T )     CHL [QS (u), Qh | t )] du
                                                    0

  The ﬁnal step is obtained using the no-arbitrage relationships between the barrier call
options and the martingale property. In fact, we in turn exploit

      CALL (S(t), t; K, T , h = 0, R) = CALL (S(t), t; K, T )
                                             + B (t, T ) R − CALL (S(t), t; K, T , h = 1, R)

and
                                ∞
                   B (t, T )          CHH [QS (u), Qh (1) | t )] du
                                 0
                                ∞                                     
                         +           CHL [QS (u), 1 − Qh (1) | t )] du = S (t)
                               0

  If the readers remember our deﬁnitions of digital asset-or-nothing and cash-or-nothing
options, it is then immediate to obtain that the relationship between barrier put and call
options can be summarized in very general terms as follows:
272                                                                 Copula Methods in Finance

Proposition 8.7 [Barrier options put–call parity] Denote by CALL (S(t), t; K, T , h, R)
the price of a barrier call option with strike K, exercise time T , trigger event h and rebate
R. Then the barrier put option with the same terms is priced by

               PUT (S(t), t; K, T , h, R) + DCAoN (S(t), t; T , h)
                    = CALL (S(t), t; K, T , h, R) + KDCCoN (S(t), t; T , h)

  Let us note that the put–call parity for barrier options closely resembles the relationship
between plain vanilla options, apart from the fact that the underlying asset and the dis-
counted strike are substituted by digital asset-or-nothing and cash-or-nothing respectively.
Furthermore, the relationship is very general and extends from standard barrier options to
the more complex cases, such as parisian options.

8.6.3   Specifying the trigger event
We now relate the general approach above to special cases of barrier options. Of course the
approach is not useful in cases in which the joint distribution of the exercise and trigger
events are known in closed form. Unfortunately, this is true only for geometric brownian
motions (BMs), and in general for standard products. The approach can instead be fruitfully
applied to cases in which this joint distribution is not known or is not easily computed. As
in the other applications the advantage of the approach lies in the possibility of modeling
the marginal distributions of the two events separately from the dependence structure. In
barrier option applications, however, a word of caution is in order. Indeed, the ﬂexibility
of the approach may turn into a ﬂaw and lead to inconsistent results. The basic problem
is that the dependence structure between the trigger event and the exercise event must be
consistent with the dependence structure of the reference variable of the trigger event and
the underlying asset. To understand the point, assume that we apply an arbitrary copula
to the evaluation of a standard barrier option, in which the underlying asset is also the
reference variable of the trigger event, and assume that it follows a geometric BM. This is
a case in which the ﬂexibility of the approach would result in a wrong price. While in this
example the inconsistency shows up very clearly, mostly because we can compute the price
in closed form, the same basic problem may be found in every barrier option application.
Getting the copula function choice right is then particularly relevant in such applications.
   In the following section we suggest some techniques that may be applied to estimate the
marginal distribution of the trigger event and the dependence relationship with the exercise
event.

Marginal probability of the trigger event
The trigger event is activated when the reference variable hits a prespeciﬁed level or stays
beyond that level longer than a given period of time. Consider the case in which the reference
variable is assumed to follow a geometric BM under the risk-neutral measure, that is

                                    dS = rS dt + σ S dz

where z is a Wiener process, and r and σ are constant parameters. In this case, the marginal
probability of the trigger event may be known in closed form. Take the simplest example
Option Pricing with Copulas                                                                 273

in which the trigger event is deﬁned as the case in which an upper or lower barrier H
(H ∈ + ) is hit. It may be useful to brieﬂy review the basic principles behind the proof,
because the same ideas will be used to extend the application to more complex cases for
which the closed form solution cannot be obtained and must be computed by simulation.
First, we introduce the ratio process S (t) /H and change the stochastic process into an
arithmetic BM deﬁning X (t) = ln (S (t) /H ). We have

                                      dX = υ dt + σ dz

with υ = r − σ 2 /2 and X (0) = ln (S (0) /H ). It is clear that evaluating the probability that
the process S (t) will or will not hit the barrier H by a certain time T is the same as
assessing the probability that an arithmetic BM starting at X (0) will hit the zero barrier.
That is, if for example S (t) > H
                                                   t             t
                     S (t) ⩾ H ⇐⇒ X (0) +               υ du +          σ z (u) ⩾ 0
                                                   0                0
                                       t               t
                                ⇐⇒          υ du +           σ z (u) ⩾ −X (0)
                                       0                0

for all t > 0. By the same token, the event that the barrier will be attained from below,
starting from S (t) < H , is equivalent to
                                                   t             t
                     S (t) ⩽ H ⇐⇒ X (0) +               υ du +          σ z (u) ⩽ 0
                                                   0                0
                                       t               t
                                ⇐⇒          υ du +           σ z (u) ⩽ −X (0)
                                       0                0

  We introduce two processes MX and mX denoting, respectively, the running maximum
and minimum of the stochastic process X, i.e.

                              MX (t) ≡ {max X (u) ; 0 ⩽ u ⩽ t}
                              mX (t) ≡ {min X (u) ; 0 ⩽ u ⩽ t}

 It is clear that the event of an upper or lower barrier H not being hit (h = 0) by time T
may then be characterized as

                                   h = 0 ⇐⇒ MX (T ) ⩽ y
                                   h = 0 ⇐⇒ mX (T ) ⩾ y

with y = −X (0). The probability that the barrier will not be hit is then given by the formulas
                                                                 
                                               y − υt2υy      −y − υt
          Qh = Q (MX (T ) ⩽ y) = N               √         N− exp√
                                                σ t   σ2       σ t
                                                                 
                                     −y + υt           2υy     y + υt
          Qh = Q (mX (T ) ⩾ y) = N      √      − exp        N    √
                                      σ t               σ2      σ t
274                                                                  Copula Methods in Finance

and the probability of the complement (h = 1) is of course
                                                                
                                −y + υt            2υy       −y − υt
              Qh = 1 − Qh = N      √       + exp         N      √
                                  σ t               σ2        σ t
                                                             
                                y − υt           2υy       y + υt
              Qh = 1 − Qh = N      √     + exp         N     √
                                 σ t              σ2        σ t

Remark 8.4 The formulas are obtained by, ﬁrst, changing the measure in such a way as
to transform the stochastic process followed by X (t) into a standard BM (i.e. with no drift),
and then applying the reﬂection principle. This principle determines the joint probability
that a standard BM will hit a barrier y and will end above a given value k.


Pricing barrier options
Substituting y = −X (t) = ln (H /S (t)) we may reconduct the probabilities above to the
probability of the trigger event under the original geometric BM, and compute the prices of
digital contracts representing the event of the barrier being hit (one touch) or not (no-touch).
  For example, the risk-neutral exercise probability of a no-touch, i.e. an option that pays
one unit of currency if an upper or lower barrier is not reached, is given by
                                                                              
                                                     ln (H /S (t)) − υ (T − t)
             Q (S (θ ) ⩽ H ; t ⩽ θ ⩽ T | t ) = N               √
                                                              σ T −t
                                                                   
                       H         2υ       ln (S (t) /H ) − υ (T − t)
                  −         exp      N               √
                      S (t)      σ2                σ T −t
                                                                               
                                                     ln (S (t) /H ) + υ (T − t)
             Q (S (θ ) ⩾ H ; t ⩽ θ ⩽ T | t ) = N               √
                                                              σ T −t
                                                                  
                       H         2υ       ln (H /S (t)) + υ (T − t)
                  −         exp      N               √                                     (8.2)
                      S (t)      σ2                σ T −t

The corresponding price is obtained if we multiply by the discount factor B(t, T ).
  If one wants to price the corresponding digital put or call option, which pays one unit
of currency if the upper or lower barrier is reached and the underlying asset is below or
above a ﬁxed strike, an analogous procedure must be followed. Consider, for instance, the
down-and-out digital, which pays if and only if the minimum of the underlying process
S does not go below the barrier H and the underlying asset is not below the strike K at
maturity. The risk-neutral probability needed is
                                                                                 
                                                   ln (S (t) /K) + υ (T − t)
             Q (mS (T ) ⩾ H, S(T ) ⩾ K | t ) = N             √
                                                            σ T −t
                                                                 
                      H         2υ       ln H 2 /KS (t) + υ (T − t)
                 −         exp      N              √                                       (8.3)
                     S (t)      σ2                σ T −t
Option Pricing with Copulas                                                                275

Let us use the usual notation
                                          ln (S (t) /K) + υ (T − t)
                               d2 (K) =              √
                                                   σ T −t
which implies
                     
                   ln H 2 /KS (t) + υ (T − t)             ln(S(t)/H )
                             √                = d2 (K) − 2 √
                            σ T −t                         σ T −t
and note that
                                                        
                     H         2υ         2υ    H        H a−1
                          exp     = exp      ln      =
                    S (t)      σ2         σ 2 S (t)     S(t)

where a = 2r/σ 2 . Probability (8.3) can be written, in a more concise way, as
                                             a−1                          
                                        H                        ln(S(t)/H )
                   N (d2 (K)) −                      N d2 (K) − 2 √                       (8.4)
                                       S(t)                       σ T −t
Knowing the digital price one can, in turn, reconstruct the down-and-out call price, following
the procedure used several times before.
  So far we have described the case of a standard barrier option, whose pay-off may be
described as

                              1min S(θ ;t⩽θ ⩽T )>H max (S (T ) − K, 0)

where we refer to a down-and-out call option as an example. More complex trigger events
could be given by the general form
                                 
                               f τ − max (S (T ) − K, 0)

where τ − is the amount of time during the option life that the underlying price was lower
than a barrier H . This general approach was suggested by Linetsky (1999) as a way to
address a large class of exotic barrier options. In particular, he proposes the use of standard
linear or exponential discount functions, such as
                                   
                               exp −δτ − max (S (T ) − K, 0)

where δ is a prespeciﬁed discount intensity. These products are called step options and
include standard plain vanilla options and standard barrier options as extreme examples.
Another choice would be instead

                                 1τ − <α(T −t) max (S (T ) − K, 0)

  This option is called a cumulative parisian option by Chesney et al. (1997). For all of
these options, the probability distribution of the amount of time spent below (or above) a
276                                                                        Copula Methods in Finance

given barrier, technically called “occupation time”, can be recovered in closed form for the
arithmetic and geometric BM cases. In cases in which the reference variable is represented
by the underlying asset, we are also able to recover closed form solutions for the option
price. Knowing the probability distribution of the occupation time, however, enables us to
use the copula function approach for more general applications.

8.6.4 Calibrating the dependence structure
In order to provide a ﬂexible characterization of the price of barrier options, deﬁned in a
broad sense, it may be useful to analyze the case in which the underlying and the trigger
variable coincide and are represented by a geometric BM. Indeed, we are going to show that
this case enables us to construct a new kind of copula, linked to the closed form solutions
originating from the reﬂection principle. This dependence structure will be called a reﬂection
copula and it will permit us to extend the pricing technique to more complex problems.
Let us look at two examples: (i) the case of an option written on a variable different from
that used as a trigger, and (ii) the case in which the underlying asset is not described by
a geometric BM, while the trigger variable is. In cases like these, it may be intuitively
appealing to use this copula to represent the dependence structure between the underlying
and the triggering variable.

8.6.5    The reﬂection copula
We know that under the standard assumption of a process following a geometric BM, closed
formulas for standard barrier options are available: from these one can extract the implied
information concerning the dependence structure between the trigger event and the exercise
of the option. In order to do this, we focus without loss of generality on the down-and-out
case: from the no-arbitrage price of such options, we want to extract, for given variance of
the underlying and riskless rate, the implied correlation between a geometric BM S and its
running minimum, mS (T ).
   We start by rewriting the probability of the joint event {mS (T ) ⩾ H, S(T ) ⩾ K}, which
characterizes the down-and-out digital price, in terms of a copula function: assuming a com-
plete market, Sklar’s theorem can be applied, allowing us to state that the joint probability
in (8.4) is a copula, written in the marginal probabilities of the events {S(T ) ⩾ K} and
{mS (T ) ⩾ H }. The latter can be easily evaluated:

                               Pr(S(T ) ⩾ K | t ) = N (d2 (K))                                (8.5)

and
                                                        a−1                           
                                                   H                         ln(S(t)/H )
      Pr(mS (T ) ⩾ H | t ) = N (d2 (H )) −                     N d2 (H ) − 2 √                (8.6)
                                                  S(t)                        σ T −t

For the sake of simplicity, let us denote as l(H ) the function

                                                          ln(S(t)/H )
                                l(H ) = d2 (H ) − 2          √
                                                           σ T −t
Option Pricing with Copulas                                                             277

Sklar’s theorem allows us to state that there exists a unique (due to the continuity of S)
implied copula, i.e. a unique function CHH which gives (8.4) in terms of the marginals:
                                        a−1
                                                                   
                                   H                    ln(S(t)/H )
               N (d2 (K)) −             N d2 (K) − 2 √
                                  S(t)                   σ T −t
                                                                            
                                                           H a−1
                      = CHH   N (d2 (K)), N (d2 (H )) −             N (l(H ))
                                                          S(t)

One can verify that the unique copula involved is
                                                                             
                             z − N (d2 (h(z)))                 ln(S(t)/ h(z))
          CHH (v, z) = v +                     N d2 (g(v)) − 2     √                   (8.7)
                                N (l(h(z)))                      σ T −t
where the functions H = h(z) and K = g(v) represent H and K as functions of the marginal
probabilities z and v. They are obtained from the inverses, v = g −1 (K) and z = h−1 (H ),
where
                                                        
                                                     H a−1
                     z = h−1 (H ) = N (d2 (H )) −            N (l(H ))
                                                    S(t)
                      v = N (d2 (K))

or K = d2−1 (N −1 (v)), since both N and d2 are monotone.
  In turn, one can verify that the function CHH satisﬁes the deﬁnition of a copula function
given in Chapter 2.
  Figure 8.9 presents the copula (8.7) for the case S(t) = 1, K = 1.1, r = 5%, σ = 20%,
T − t = 1, H = 12 .

Implied correlation

Once we have extracted the reﬂection copula implied in a down-and-out price (8.7), we can
use it in order to reconstruct the Spearman correlation between S(T ) and mS (T ), which, as




                                         1



                                         0.5




                                  Figure 8.9 The reﬂection copula
278                                                                 Copula Methods in Finance

recalled in Chapter 3, can be calculated from the copula as follows:
                                         
                              ρS = 12           C(v, z) dv dz − 3
                                           I2

By discretizing the latter integral and evaluating numerically the implied copula, we obtain,
for instance, in the case S(t) = 1, r = 15%, σ = 20%, T − t = 5, H = 0.7, K = 1.1, a
value of the Spearman ρS = 0.5842. By letting the moneyness and maturity of the option
vary, while keeping the barrier H , the riskless rate r and the underlying (initial value and
volatility) ﬁxed, one obtains the following correlation values:

                             Cash position      K     T     ρS
                             ITM                0.9 1     0.741
                             ITM                0.9 5     0.5842
                             OTM                1.1 5     0.5842
                             OTM                1.1 10    0.473

The readers can note that for given maturity (in our example, 5 years) the implied correlation
does not vary with the moneyness, as expected: one can infer this from either OTM or ITM
options. The correlation itself is decreasing with maturity.



      8.7 PRICING MULTIVARIATE OPTIONS: MONTE CARLO
                         METHODS
To complete our review of copula function applications to option pricing problems, we take
a look at more involved issues, in which simulation approaches are the only techniques that
can be applied. We saw that copula functions yield valuation solutions that are particularly
easy to apply and ﬂexible for bivariate problems, and for problems in which the pricing
kernel can be directly written as a copula function: as in the case of call options on the
minimum among a set of assets or put options on the maximum. In other cases in which
the underlying asset is represented by some general function of prices – such as, basket
options based on the linear or geometric average of returns on a set of securities – it is
not possible to derive closed form solutions even at the bivariate level. A look at the
treatment of the problem in Chapter 2 shows that even at this level one has to resort to
numerical integration. It is well known, however, that, as the dimension of the problem
increases, Monte Carlo simulation remains the most effective technique. We know from
Chapter 6 that copula functions may be of great help to implement Monte Carlo simulation
in the most ﬂexible way. In particular, it enables us to simulate joint distributions that are
consistent with different marginals for the returns on different markets (ﬁtting, for example,
different smile curves), and with particular dependence structures among them.
   The easiest approach is to specify the marginal distributions based on time series analyses
or implied information and to ﬁt a Student t copula to represent tail dependence. At this
point, readers should be already familiar with the technical estimation and simulation issues
involved in this procedure, and, for this reason, we only provide the example of a real world
application developed with those tools.
Option Pricing with Copulas                                                                279

8.7.1 Application: basket option

We consider a basket option written on the average quarterly return of ﬁve equity indexes.
The equity indexes are: S&P 500, FTSE 100, DAX 30, Nikkei (NKY) and Amsterdam
Exchange (AEX). The option has to be valued on March 31, 2003, with an expiry date of
June 30, 2003, and strike equal to 3% quarterly return.
   As for the speciﬁcation of the marginal distributions, we could have used both implied
information, selecting some technique to ﬁt the smile in the markets, or a time series analysis
based on historical data, trying to ﬁlter out the risk-premia from the time series.
   Here we followed the latter approach and used a quarterly return series for all ﬁve indexes
from June 29, 1984, to March 31, 2003. For each series we estimated a t-GARCH(1, 1), that
is a model with time varying volatility and Student t conditional distribution. We found that
all series except AEX did not show heteroskedastic effects. Only the AEX series presented a
very weak heteroskedastic effect, and the persistence coefﬁcient for the lagged volatility was
estimated at around 0.38. This result will not come as a surprise to anyone familiar with the
econometrics of ﬁnancial time series, in which the GARCH effects are mainly recovered
at very high frequencies, namely for daily or weekly returns. Nevertheless, the use of a
Student t conditional distribution showed that AEX, DAX 30 and FTSE 100 displayed a
fat-tail behavior: the estimated d.o.f. of the marginal t-GARCH was respectively around 4,
3 and 8. Contrary to that, S&P 500 and NKY showed a more normal behavior: the estimated
d.o.f. of the marginal t-GARCH was around 13 for both series.
   The next step was to specify the dependence structure among the markets. For this
purpose, we estimated the Spearman variance–covariance matrix from ﬁltered residuals
from each marginal distribution. The estimated covariance matrix was used to simulate data
from a T -copula distribution.
   We compared three ways for pricing the option under analysis:

• historical simulation from empirical data;
• T -copula with t-GARCH marginals;
• T -copula with normal marginals.

   The historical simulation approach is very easy, i.e. the value of the option is obtained
by computing the pay-offs (i.e. max(average return, 3%, 0)) for each historical quarter and
averaging them. The price in this case is equal to 0.021.
   The T -copula estimated with t-GARCH margins gives a d.o.f. of around 10 – more akin
to the behavior of a normal copula.
   The T -copula estimated with normal marginal gives a d.o.f. around 2; so the fat-tails in
some of the margins were transferred to the dependence function.
   In these two cases we simulated 10 000 Monte Carlo runs and obtained the value of the
mentioned option by computing the average over all of the simulated pay-offs. In the case
of the T -copula with t-GARCH margins, the simulated price is equal to 0.013, while in the
other case the value was equal to 0.020, quite close to that obtained by historical simulation.
   Clearly, this exercise has to be taken as a simple example, and direct application of the
model would call for speciﬁcation of the risk-premia in the different markets. Nevertheless,
it was enough to highlight the power of copula functions to effectively separate information
concerning the marginal distributions and the dependence structure among the markets.
More explicitly, even accounting for fat-tails at the multivariate level, using a T -copula
280                                                               Copula Methods in Finance

speciﬁcation did not give any signiﬁcant improvement in the accuracy of the price over that
computed by historical simulation. On the contrary, by disentangling the fat-tail problem
at the univariate level and at the dependence structure level, we could come up with a
price that was much more precise. In other words, the product turned out to be much more
sensitive to fat-tails than to tail dependence in the marginal distributions.
                                      Bibliography

Anderson, R. & Sundaresan, S. (1996) “Design and valuation of debt contracts”, Rev. Finan. Stud.,
  9, 37–68.
Arvanitis, A. & Gregory, J. (2001) Credit: The Complete Guide to Pricing, Hedging and Risk Man-
  agement . Risk Books, London.
Avellaneda, M. & Paràs, A. (1996) “Managing the volatility risk of portfolios of derivative securities:
  the Lagrangian uncertain volatility model”, Appl. Math. Finance, 3, 21–52.
Avellaneda, M., Levy, A. & Paràs, A. (1995) “Pricing and hedging derivative securities in markets
  with uncertain volatilities”, Appl. Math. Finance, 2, 73–78.
Barbe, P., Genest, C., Ghoudi, K. & Rèmillard, B. (1996) “On Kendall’s process”, J. Multivar. Anal.,
  58, 197–229.
Barone, E., Barone-Adesi, G. & Castagna, A. (1998) “Pricing bonds and bond options with default
  risk”, Europ. Finan. Manage., 4, 231–282.
Barone-Adesi, G. & Giannopoulos, K. (1996), “A simpliﬁed approach to the conditional estimation
  of Value-at-Risk”, Fut. Opt. World , October, 68–72
Black, F. & Cox, J.C. (1976) “Valuing corporate securities: some effects of bond indenture provisions”,
  J. Finance, 31, 351–367.
Black, F. & Scholes, M. (1973) “The pricing of options and corporate liabilities”, J. Polit. Econ., 81,
  637–654.
Block, H.W. & Ting, M.L. (1981) “Some concepts of multivariate dependence”, Comm. Statist.
  A – Theory Methods, 10, 749–762.
Block, H., Savits, T. & Shaked, M. (1982) “Some concepts of negative dependence”, Ann. Prob., 10,
  765–772.
Blomqvist, N. (1950) “On a measure of dependence between two random variables”, Ann. Math.
  Statist., 21, 593–600.
Bouyè, E., Durrleman, V., Nikeghbali, A., Riboulet, G. & Roncalli, T. (2000) Copulas for
  Finance – A Reading Guide and Some Applications. Groupe de Recherche Opèrationelle, Crédit
  Lyonnais, working paper.
Breeden, D.T. & Litzenberger, R.H. (1978) “Prices of state-contingent claims implicit in option
  prices”, J. Business, 51, 621–651.
Brigo, D. & Mercurio, F. (2001) “Displaced and mixture diffusions for analytically tractable smile
  models”, in H. Geman, D. Madan, S. Pliska & T. Vorst (eds), Mathematical Finance, Proceedings
  of the Bachelier Congress 2000 .
Brindley, E.C. & Thompson Jr. W.A. (1972) “Dependence and aging aspects of multivariate survival”,
  J. Amer. Statist. Assoc., 67, 822–830.
Cambanis, S., Huang, S. & Simons, G. (1981) “On the theory of elliptically contoured distributions”,
  J. Multivar. Anal., 11, 368–385.
Carty, L.V. (1997) Moody’s Rating Migration and Credit Quality Correlation, 1920–1996 . Moody’s
  Investor Service Special Report, July.
Cazzulani, L., Meneguzzo, D. & Vecchiato, W. (2001) Copulas: A Statistical Perspective with Empir-
  ical Applications. IntesaBCI Risk Management Department, working paper.
282                                                                                      Bibliography

Cherubini, U. (1997) “Fuzzy measures and asset prices”, Appl. Math. Finance, 4, 135–149.
Cherubini, U. & Della Lunga, G. (2001) “Liquidity and credit risk”, Appl. Math. Finance, 8, 79–95.
Cherubini, U. & Luciano, E. (2001) “Value at risk trade-off and capital allocation with copulas”, Econ.
  Notes, 30, (2), 235–256.
Cherubini, U. & Luciano, E. (2002a) “Bivariate option pricing with copulas”, Appl. Math. Finance,
  8, 69–85.
Cherubini, U. & Luciano, E. (2002b) “Copula vulnerability”, Risk , October, 15, 83–86.
Chesney, M., Jeanblank-Piqué, M. & Yor, M. (1997) “Brownian excursions and Parisian barrier
  options”, Advances in Applied Probability, 29, 165–184.
Christoffersen, P.F. (1998) “Evaluating interval forecasts”, Internat. Econ. Rev., 39 (4), 841–862.
Clayton, D.G. (1978) “A model for association in bivariate life tables and its application in epidemi-
  ological studies of familial tendency in chronic disease incidence”, Biometrika, 65, 141–151.
Coles, S., Currie, J. & Tawn, J. (1999) Dependence Measures for Extreme Value Analysis. Dept. of
  Mathematics and Statistics, Lancaster University, working paper.
Cook, R.D. & Johnson, M.E. (1981) “A family of distributions for modeling non-elliptically symmetric
  multivariate data”, J. Roy. Statist. Soc. Ser. B , 43, 210–218.
Cook, R.D. & Johnson, M.E. (1986) “Generalized Burr–Pareto-logistic distributions with applications
  to a uranium exploration data set”, Technometrics, 28, 123–131.
Cox, D.R. & Oakes, D. (1984) Analysis of Survival Data. Chapman & Hall, London.
Cox, J.C., Ingersoll, J. & Ross, S. (1985) “A theory of the term structure of interest rates”, Econo-
  metrica, 53, 385–407.
CreditMetrics Manual, RiskMetrics Group, available at http://www.riskmetrics.com
Davidson, R. & MacKinnon, J. (1993) Estimation and Inference in Econometrics. Oxford University
  Press, Oxford.
Davies, J., Hewer, J. & Rivett, P. (2001) A Guide to Credit Derivatives. PriceWaterHouseCoopers,
  The Financial Jungle Series.
Davis, M. & Lo, V. (2001) “Infectious defaults”, Quantitative Finance, 1, 382–386.
Deheuvels, P. (1978) “Caractérisation complète des Lois Extrèmes Multivariées et de la Convergence
  des Types Extrèmes”, Pub. l’Institut de Statist. l’Université de Paris, 23, 1–36.
Deheuvels, P. (1979) “La function de dépendance empirique et ses propriétés. Un test non
  paramétriquen d’indépendance”, Acad. Roy. Belg. Bull. C1. Sci., 65 (5), 274–292.
Deheuvels, P. (1981) A Nonparametric Test for Independence. Université de Paris, Institut de Statis-
  tique.
Delbaen, F. & Schachermayer, W. (1994) “A general version of the fundamental theorem of asset
  pricing”, Math. Ann., 300, 463–520.
Delianedis, G. & Geske, R. (1998) Credit Risk and Risk Neutral Default Probabilities: Information
  about Rating Migrations and Defaults. UCLA, The Anderson School, working paper.
Derman, E. & Kani, I. (1994) “Riding on a Smile”, Risk , July, 32–39
Devroye, L. (1986) Non-Uniform Random Variate Generation. Springer-Verlag, New York.
Dhaene, J., Denuit, M., Goovaerts, M.J., Kaas, R. & Vyncke, D. (2002) “The concept of comono-
  tonicity in actuarial science and ﬁnance: theory”, Insur.: Math. Econ., 31, 3–33.
Diebold, F.X., Gunther, T. & Tay, A.S. (1998) “Evaluating density forecasts with applications to
  ﬁnancial risk management”, Internat. Econ. Rev., 39, 863–883.
Diebold, F.X., Hahn, J. & Tay, A.S. (1999) “Multivariate density forecast evaluation and calibration
  in ﬁnancial risk management”, Rev. Econ. Statist., 81 (4), 661–673.
Dufﬁe, D. & Garleanu, N. (2001) “Risk and valuation of collateralized debt obligations”, Finan. Anal.
  J., 57 (1), 41–59.
Dufﬁe, D. & Kan, R. (1996) “A yield factor model of interest rates”, Mathematical Finance, 6 (4),
  379–406.
Dufﬁe, D. & Lando, D. (2001) “The term structure of credit spreads with incomplete accounting
  information”, Econometrica, 69, 663–664.
Dufﬁe, D.J. & Singleton, K.J. (1998) “Modeling term structures of defaultable bonds”, Rev. Finan.
  Stud., 12, 687–720.
Dufﬁe, D.J. & Singleton, K.J. (1999) Simulating Correlated Defaults. Stanford University, Graduate
  School of Business, working paper.
Bibliography                                                                                          283

Durbin, J. & Stuart, A. (1951) “Inversions and rank correlations”, J. Roy. Statist. Soc., Series B , 2,
   303–309.
Durrleman, V., Nikeghbali, A. & Roncalli, T. (2000a) Copulas Approximation and New Families.
   Groupe de Recherche Opèrationelle, Crédit Lyonnais, working paper.
Durrleman, V., Nikeghbali, A. & Roncalli, T. (2000b) Which Copula is the Right One? Groupe de
   Recherche Opèrationelle, Crédit Lyonnais, working paper.
Efron, B. & Tibshirani, R.J. (1993) An Introduction to Bootstrap. Chapman & Hall, London.
Embrechts, P., Klüppenberg, P. & Mikosch, T. (1997) Modeling Extremal Event for Insurance and
   Finance. Springer, Berlin.
Embrechts, P., McNeil, A.J. & Straumann, D. (1999) Correlation and Dependency in Risk Manage-
   ment: Properties and Pitfalls. Department of Mathematik, ETHZ, Zurich, working paper. Now
   in M.A.H. Dempster (ed.) (2002), Risk Management: Value at Risk and Beyond (pp. 176–223).
   Cambridge University Press, Cambridge.
Embrechts, P., Lindskog, F. & McNeil, A. (2001) Modelling Dependence with Copulas and Applica-
   tions to Risk Management . Department of Mathematik, ETHZ, Zurich, working paper CH–8092.
   Now in S. Rachev (2003) Handbook of Heavy Tailed Distributions in Finance (pp. 329–384). Else-
   vier.
Engle, R.F. (ed.) (1996) ARCH Selected Readings. Oxford University Press, Oxford.
Engle, R.F. & Manganelli, S. (1999) CAViaR: Conditional Autoregressive Value at Risk by Regression
   Quantiles. UCSD Dept. of Economics, working paper.
Erturk, E. (2000) “Default correlation among investment-grade borrowers”, J. Fixed Income, March,
   9, 55–59.
Evans, M., Hastings, N. & Peacock, B. (1993) Statistical Distributions. John Wiley & Sons, New
   York.
Fang, K.T., Kotz, S. & Ng, W. (1990) Symmetric Multivariate and Related Distributions. Chapman
   & Hall, London.
Feller, W. (1968) An Introduction to Probability Theory and Its Applications, Vol. I. John Wiley &
   Sons, New York.
Feller, W. (1971) An Introduction to Probability Theory and Its Applications, Vol. II. John Wiley &
   Sons, New York.
Ferguson, T.S. (1995) “A class of symmetric bivariate uniform distributions”, Statist. Papers, 36,
   31–40.
Féron, R. (1956) “Sur les tableaux de corrélation dont les marges sont donées, cas de l’espace a trois
   dimensions”, Publ. Inst. Statist. Univ. Paris, 5, 3–12.
Finger, C. (ed.) (2003) Credit Grades. Technical Document.
Finger, C.C., Finkelstein, V., Lardy, J.-P., Pan, G., Ta, T. & Tierney, J. (2002) CreditGradesTM tech-
   nical document, RiskMetrics Group Working Paper.
Follmer, H. & Schweitzer, M. (1991) “Hedging of contingent claims under incomplete information”,
   in M.H.A. Davis & R.J. Elliot (eds), Applied Stochastic Analysis. Stochastics Monograph 5. Gordon
   Breach, London and New York, pp. 389–414.
Frank, M.J. (1979) “On the simultaneous associativity of F (x, y) and x + y – F (x, y)”, Aequationes
   Math., 19, 194–226.
Frank, M.J. & Schweizer, B. (1979) “On the duality of general inﬁmal and supremal convolutions”,
   Rend. Math., 12, 1–23.
Frank, M.J., Nelsen, R. & Schweizer, B. (1987) “Best-possible distributions of a sum – a problem of
   Kolmogorov”, Prob. Th. Rel. Fields, 74, 199–211.
Fréchet, M. (1935) “Généralisations du théorème des probabilités totales”, Fund. Math., 25, 379–387.
Fréchet, M. (1951) “Sur le tableaux de corrélation dont les marges sont données”, Ann. Univ. Lyon,
   9, Sect. A, 53–77.
Fréchet, M. (1958) “Remarques au sujet de la note précédente”, C.R. Acad. Sci. Paris, 246,
   2719–2720.
Frees, E.W. & Valdez, E. (1998) “Understanding relationship using copulas”, N. Amer. Actuarial J.,
   2, 1–25.
Frey, R. & McNeil, A.J. (2001) Modeling Dependent Defaults. Dept. of Mathematics, ETH Zurich,
   working paper.
284                                                                                       Bibliography

Frittelli, M. (2000) “The minimal entropy martingale measure and the valuation problem in incomplete
   markets”, Math. Finance, 10, 39–52.
Fujita, T. & Miura, R. (2002) “Edokko options: a new framework of barrier options”, Asia-Paciﬁc
   Financial Markets, 9, 141–151.
Genest, C. (1987) “Frank’s family of bivariate distributions”, Biometrika, 74, 549–555.
Genest, C. & MacKay, J. (1986) “The joy of copulas: bivariate distributions with uniform marginals”,
   Amer. Statist., 40, 280–283.
Genest, C. & Rivest, L. (1993) “Statistical inference procedures for bivariate Archimedean copulas”,
   J. Amer. Statist. Assoc., 88, 1034–1043.
Georges, P., Lamy, A., Nicolas, E., Quibel, G. & Roncalli, T. (2001) Multivariate Survival Mod-
   elling: A Uniﬁed Approach with Copulas. Groupe de Recherche Opèrationelle, Crédit Lyonnais,
   working paper.
Geman, H. (1989) The Importance of the Forward Risk Neutral Probability in a Stochastic Approach
   of Interest Rates. Working paper, ESSEC.
Geske, R. (1977) “The valuation of corporate liabilities as compound options”, J. Finan. Quant. Anal.,
   12, 541–552.
Gibbons, J.D. (1992) Nonparametric Statistical Inference. Marcel Dekker, New York.
Giesecke, K. (2001) Structural Modelling of Correlated Defaults with Incomplete Information. Hum-
   boldt University, working paper.
Gilboa, I. (1989) “Duality in non-additive expected utility theory”, in P. Fishburn & I.H. LaValle
   (eds), Choice under Uncertainty, Annals of Operations Research. J.C. Baltzer, Basel, pp. 405–414
Gilboa, I. & Schmeidler, D. (1989) “Maxmin expected utility with non-unique prior”, J. Math. Econ.,
   18, 141–153.
Gumbel, E.J. (1960) “Bivariate exponential distributions”, J. Amer. Statist. Assoc., 55, 698–707.
Hardle, W. (1990) Applied Nonparametric Regression. ESM, Cambridge University Press, Cambridge.
Heath, D.C., Jarrow, R.A. & Morton, A. (1990) “Bond pricing and the term structure of interest rates:
   a discrete time approximation”, J. Finan. Quant. Anal., 25, 419–440.
Heath, D.C., Jarrow, R.A. & Morton, A. (1992) “Bond pricing and the term structure of interest rates:
   a new methodology for contingent claim valuation”, Econometrica, 60, 77–105.
Heston, S.L. (1993) “A closed form solution for options with stochastic volatility with applications to
   bond and currency options”, Rev. Finan. Stud., 6, 327–343.
Hoeffding, W. (1940) “Masstabinvariante Korrelationstheorie”, Schriften des Mathematischen Instituts
   und des Instituts für Angewandte Mathematik der Universität Berlin, 5, 179–233.
Hougaard, P. (1986) “A class of multivariate failure time distributions”, Biometrika, 73, 671–678.
Hull, J. & White, A. (1987) “The pricing of options on assets with stochastic volatility”, J. Finance,
   42, 281–300.
Hull, J. & White, A. (1995) “The impact of default risk on the prices of options and other derivative
   securities”, J. Bank. Finance, 19, 299–322.
Hull, J. & White, A. (1998) “Value at Risk when daily changes in market variables are not normally
   distributed”, J. Derivatives, 5 (3), 9–19.
Hull, J. & White, A. (2000) “Valuing credit default swap: no counterparty default risk”, J. Derivatives,
   8, 29–40.
Hutchinson, T.P. & Lai, C.D. (1990) Continuous Bivariate Distributions, Emphasising Applications.
   Rumsby Scientiﬁc Publishing, Adelaide.
Ingersoll, J.E. (2000) “Digital contracts: simple tools for pricing complex derivatives”, J. Business,
   73 (1), 62–88.
Jamshidian, F. (1989) “An exact bond option pricing formula”, J. Finance, 44, 205–209.
Jamshidian, F. (1997) “LIBOR and swap market models and measures”, Finan. Stochast., 1, 293–330.
Jarrow, R. & Turnbull, S. (1995) “Pricing derivatives on ﬁnancial securities subject to credit risk”, J.
   Finance, 50, 53–85.
Jarrow, R.A. & Yu, F. (2001) “Counterparty risk and the pricing of defaultable securities”, J. Finance,
   56 (5), 555–576.
Joag-Dev, K. (1984) “Measures of dependence”, in P.R. Krishnaiak (ed.), Handbook of Statistics, Vol.
   4. North-Holland Elsevier, New York, pp. 79–88.
Joe, H. (1990) “Multivariate concordance”, J. Multivar. Anal., 35, 12–30.
Joe, H. (1997) Multivariate Models and Dependence Concepts. Chapman & Hall, London.
Bibliography                                                                                      285

Joe, H. & Hu, T. (1996) “Multivariate distributions from mixtures of max-inﬁnitely divisible distri-
   butions”, J. Multivar. Anal., 57, 240–265.
Joe, H. & Xu, J.J. (1996) The Estimation Method of Inference Functions for Margins for Multivariate
   Models. Dept. of Statistics University of British Columbia, Tech. Rept. 166.
Johnson, H. & Stulz, R. (1987) “The pricing of options with default risk”, J. Finance, 42, 267–280.
Jouanin, J.F., Rapuch, G., Riboulet, G. & Roncalli, T. (2001) Modelling Dependence for Credit
   Derivatives with Copulas. Groupe de Recherche Opèrationelle, Crédit Lyonnais, working paper.
J.P. Morgan (2000) “Guide to credit derivatives”, Risk .
Karlin, S. & Taylor, H.M. (1981) A Second Course in Stochastic Processes. Academic Press,
   New York.
Kendall, M.G. (1938) “A new measure of rank correlation”, Biometrika, 30, 81–93.
Kimberling, C.H. (1974) “A probabilistic interpretation of complete monotonicity”, Aequationes
   Math., 10, 152–164.
Kimeldorf, G. & Sampson, A.R. (1975) “Uniform representation of bivariate distributions”, Commun.
   Statist., 4, 617–627.
Klein, P. (1996) “Pricing Black and Scholes options with correlated credit risk”, J. Bank. Finance,
   20, 1211–1230.
Konijn, H.S. (1959) “Positive and negative dependence of two random variables”, Sankhyà, 21,
   269–280.
Lando, D. (1998) “On Cox processes and credit risky securities”, Rev. Deriv. Res., 2, 99–120.
Laurent, J.P. & Gregory, J. (2002) Basket Default Swaps, CDOs and Factor Copulas. October, BNP
   Paribas and University of Lyon, working paper.
Lee, A.J. (1993) “Generating random binary deviates having ﬁxed marginal distributions and speciﬁed
   degrees of association”, Amer. Statist., 47, 209–215.
Lehmann, E. (1966) “Some concepts of dependence”, Ann. Math. Statist., 37, 1137–1153.
Lehmann, E. & Casella, G. (1998) Theory of Point Estimation. Springer-Verlag, New York.
Leland, H.E. (1994) “Corporate debt value, bond covenants and optimal capital structure”, J. Finance,
   49, 1213–1252.
Li, D.X. (1998) “Constructing a credit curve”, Risk . Special report on Credit Risk, Nov. 1988, 40–44.
Li, D.X. (2000) “On default correlation: a copula function approach”, J. Fixed Income, 9, 43–54.
Li, X., Mikusinski, P., Sherwood, H. & Taylor, M.D. (1997) “On approximation of copulas”, in
   G. Dall’Aglio, S. Kotz & G. Salinetti (eds), Distributions with Given Marginals and Moment Prob-
   lems. Kluwer Academic Publishers, Dordrecht.
Lindskog, F. (2000) Linear Correlation Estimation. RiskLab ETH, working paper.
Lindskog, F., McNeil, A. & Schmock, U. (2001) A Note on Kendall’s Tau for Elliptical Distribution.
   ETH Zurich, working paper.
Linetsky, V. (1999) “Step options”, Math. Finance, 9 (1), 55–96.
Ling, C.H. (1965) “Representation of associative functions”, Publ. Math. Debrecen, 12, 189–212.
Longstaff, F.A. & Schwartz, E.S. (1992) “Interest rate volatility and the term structure: a two-factor
   general equilibrium model”, J. Finance, 47, 1259–1282.
Longstaff, F.A. & Schwartz, E.S. (1995) “A simple approach to valuing risky ﬁxed and ﬂoating rate
   debt”, J. Finance, 50, 789–819.
Luciano, E. & Marena, M. (2002a) “Portfolio value at risk bounds”, Internat. Trans. Oper. Res., 9
   (5), 629–641.
Luciano, E. & Marena, M. (2002b) “Value at risk bounds for portfolios of non-normal returns”, in
   C. Zopoudinis (ed.), New Trends in Banking Management. Physica-Verlag, Berlin, pp. 207–222.
Luciano, E. & Marena, M. (2003) “Copulae as a new tool in ﬁnancial modelling”, Operational
   Research: An International Journal , 2, 139–155.
Madan, D. & Unal, H. (1999) “Pricing the risks of default”, Rev. Derivat. Res., 121–160.
Madan, D.B. & Unal, H. (2000) “A two-factor hazard rate model for pricing risky debt and the term
   structure of credit spreads”, J. Finan. Quant. Anal., 35, 43–65.
Magnus, J.R. & Neudecker, H. (1980) Matrix Differential Calculus with Applications in Statistics and
   Econometrics. John Wiley & Sons, New York.
Makarov, G.D. (1981) “Estimates for the distribution function of a sum of two random variables when
   the marginal distributions are ﬁxed”, Theory Prob. Appl., 26, 803–806.
286                                                                                        Bibliography

Margrabe, W. (1978): “The value of an option to exchange an asset for another”, J. Finance, 33,
   177–186.
Marshall, A.W. & Olkin, I. (1967a) “A generalized bivariate exponential distribution”, J. Appl. Prob.,
   4, 291–302.
Marshall, A.W. & Olkin, I. (1967b) “A multivariate exponential distribution”, J. Amer. Statist. Assoc.,
   62, 30–44.
Marshall, A.W. & Olkin, I. (1988) “Families of multivariate distributions”, J. Amer. Statist. Assoc.,
   83, 834–841.
Mashal, R. & Zeevi, A. (2002) Beyond Correlation: Extreme Co-movements between Financial Assets.
   Columbia Business School, working paper.
Meneguzzo, D. & Vecchiato, W. (2000) “Improvement on Value at Risk measures by combining
   conditional autoregressive and extreme value approaches”, Review in International Business and
   Finance. Special Issue on Financial Risk and Financial Risk Management, Vol. 16, Chap. 12, pp.
   275–324. Elsevier Science Ltd. April 2002.
Meneguzzo, D. & Vecchiato, W. (2004) “Copula sensitivity in Collateralized Debt Obligations and
   Basket Default Swaps”. The Journal of Future Markets, 24, 37–70.
Merton, R.C. (1974) “On the pricing of corporate debt: the risk structure of interest rates”, J. Finance,
   29, 449–470.
Mikusinski, P., Sherwood, H. & Taylor, M.D. (1992) “Shufﬂes of min”, Stochastica, 13, 61–74.
Moody’s Investor Service Global Credit Research (Feb. 2001) Default and Recovery Rates of Corpo-
   rate Bond Issuer: 2000 .
Moore, D.S. & Spruill, M.C. (1975) “Uniﬁed large-sample theory of general chi-squared statistics for
   tests of ﬁt”, Ann. Statist., 3, 599–616.
Moynihan, R., Schweizer, B. & Sklar, A. (1978) “Inequalities among binary operations on probability
   distribution functions”, General Inequalities, 1, 133–149.
Muller, A. & Scarsini, M. (2000) “Some remarks on the supermodular order”, J. Multivar. Anal., 73
   (1), 107–119.
Nagpal, K. & Bahar, R. (2001) “Measuring default correlation”, Risk , March, 129–132.
Nelsen, R.B. (1991) “Copulas and association”, in G. Dall’Aglio, S. Kotz & G. Salinetti (eds),
   Advances in Probability Distributions with Given Marginals. Kluwer Academic Publishers, Dor-
   drecht, pp. 51–74.
Nelsen, R.B. (1999) “An introduction to copulas”, Lecture Notes in Statistics. Springer-Verlag, New
   York.
Oakes, D. (1982) “A model for association in bivariate survival data”, J. Roy. Statist. Soc. Ser. B , 44,
   414–422.
Oakes, D. (1986) “Semiparametric inference in a model for association in bivariate survival data”,
   Biometrika, 73, 353–361.
O’Kane, D. (2001) Credit Derivatives Explained. Lehman Brothers, research paper.
Patel, N. (2003) “Flow business booms”, Risk Magazine, February, 16 20–23.
Patton, A.J. (2001) Modelling Time-Varying Exchange Rate Dependence using the Conditional Copula.
   UCSD Dept. of Economics, working paper.
Pearson, N.D. & Sun, T.S. (1994) “Exploiting the conditional density in estimating the term structure:
   an application to the Cox–Ingersoll–Ross Model”, J. Finance, 49, 1279–1304.
Plackett, R.L. (1965) “A class of bivariate distributions”, J. Amer. Statist. Assoc., 60, 516–522.
Rényi, A. (1959) “On measures of dependence”, Acta Math. Acad. Sci. Hungar., 10, 441–451.
Robinson, P. (1983) “Nonparametric estimators for time series”, J. Time Series Anal., 4, 185–207.
Roncalli, T. (2001) Copulas: A Tool for Dependence in Finance. Groupe de Recherche Opèrationelle,
   Crédit Lyonnais, working paper.
Roncalli, T. (2002) Gestiondes Risques Multiples. Cours ENSAI de 3 e année. Groupe de Recherche
   Opèrationelle, Crédit Lyonnais, working paper.
Roncalli, T. (2003) Gestion des Risques Multiples: Le Risque de Credit 2ème partie. Groupe de
   Recherche Opèrationelle, Crédit Lyonnais, working paper.
Rosemberg, J.V. (2000) Nonparametric Pricing of Multivariate Contingent Claims. Stern School of
   Business, working paper.
Rousseuw, P. & Molenberghs, G. (1993) “Transformations of non-positive semideﬁnite correlation
   matrices”, Comm. Statist. – Theory and Methods, 22 (4), 965–984.
Bibliography                                                                                      287

Rubinstein, M. (1994) “Implied binomial trees”, J. Finance, 49, 771–818.
Ruschendorf, L., Schweizer, B. & Taylor, M.D. (eds) (1996) Distributions with Fixed Marginals and
  Related Topics. Institute of Mathematical Statistics, Hayward.
Samorodnitsky, G. & Taqqu, M.S. (1995) Stable Non-Gaussian Random Processes. Stochastic Models
  with Inﬁnite Variance. Chapman & Hall, New York and London.
Scaillet, O. (2000) Nonparametric Estimation of Copulas for Time Series. IRES, working paper.
Scarsini, M. (1984) “On measures of concordance”, Stochastica, 8, 201–218.
Schönbucher, P. (2000) A Libor Market Model with Default Risk . Bonn University, Dept. of Statistics,
  working paper.
Schönbucher, P. & Schubert, D. (2001) Copula-dependent Default Risk in Intensity Models. University
  of Bonn, Germany, working paper.
Schweizer, B. (1991) “Thirty years of copulas”, in G. Dall’Aglio, S. Kotz & G. Salinetti (eds),
  Advances in Probability Distributions with Given Marginals. Kluwer Academic Publishers, Dor-
  drecht, pp. 13–50.
Schweizer, B. & Sklar, A. (1961) “Associative functions and statistical triangle inequalities”, Publ.
  Math. Debrecen., 8, 169–186.
Schweizer, B. & Sklar, A. (1974) “Operations on distribution functions not derivable from operations
  on random variables”, Studia Mathematica, 52, 43–52.
Schweizer, B. & Sklar, A. (1983) Probabilistic Metric Spaces. Elsevier Science, New York.
Schweizer, B. & Wolff, E. (1976) “Sur une mesure de dépendance pour les variables aléatoires”, C.R.
  Acad. Sci. Paris, 283, 659–661.
Schweizer, B. & Wolff, E. (1981) “On non-parametric measures of dependence for random variables”,
  Ann. Statist., 9, 879–885.
Serﬂing, R.J. (1980) Approximation Theorems of Mathematical Statistics. John Wiley & Sons, New
  York.
Shao, J. (1999) Mathematical Statistics. Springer-Verlag, New York.
Shao, J. & Tu, D. (1995) The Jacknife and Bootstrap. Springer-Verlag, New York.
Shimko, D.C. (1993) “Bounds of probability”, Risk , 6, 33–37.
Sklar, A. (1959) “Fonctions de repartition à n dimensions et leurs marges”, Pub. Inst. Statist. Univ.
  Paris, 8, 229–231.
Sklar, A. (1973) “Random variables, distribution functions, and copulas”, Kybernetica, 9, 449–460.
Sklar, A. (1996) “Random variables, distribution functions, and copulas – a personal look backward
  and forward”, in L. Ruschendorf, B. Schweizer & M.D. Taylor (eds), Distributions with Fixed
  Marginals and Related Topics. Institute of Mathematical Statistics, Hayward, pp. 1–14.
Sklar, A. (1998) Personal communication.
Song, P. (2000) “Multivariate dispersion models generated from Gaussian copula”. Scandinavian J.
  Statistics, 27, 305–320.
Stulz, R.M. (1982) “Options on the minimum and maximum of two risky assets”, J. Finance, 10,
  161–185.
Tjostheim, D. (1996) “Measures of dependence and tests of independence”, Statistics, 28, 249–284.
Vasicek, O. (1977) “An equilibrium characterization of the term structure”, J. Finan. Econ., 5,
  177–188.
Wang, S.S. (1998) Aggregation of Correlated Risk Portfolios: Models – Algorithms. CAS Committee
  on Theory of Risk, working paper.
White, H. (1984) Asymptotic Theory for Econometricians. Academic Press, New York.
Williamson, R.C. (1989) Probabilistic Arithmetic. PhD Thesis, University of Queensland.
Williamson, R.C. & Downs, T. (1990) “Probabilistic arithmetic I: Numerical methods for calculating
  convolutions and dependency bounds”, Internat. J. Approx. Reason., 4, 89–158.
Wolff, E.F. (1981) “N-dimensional measures of dependence”, Stochastica, 4, 175–188.
Zangari, P. (1996) “A VaR methodology for portfolios that include options”, RiskMetrics Monitor,
  ﬁrst quarter, 4–12.
Zhou, C. (1996) A Jump-Diffusion Approach to Modeling Credit Risk and Evaluating Defaultable
  Securities. Federal Reserve Board, Washington, working paper.
                                           Index

absolutely continuous component 82, 144           binomial model 2–7
absolutely continuous copula                      bivariate options, pricing, in complete markets
   bivariate 81, 82                                    232–9
   multidimensional 144                             alternative pricing techniques 235–9
afﬁne factor models 13–14                           conditional distribution approach 238–9
afﬁne intensity 32–3                                copula pricing kernels 232–5
arbitrage deal, deﬁnition 2                         probability density approach 235–6
arbitrage-free (fair) prices 2, 21                  probability distribution approach 236–7
arbitrage pricing theory (APT) 4                  bivariate options, pricing, in incomplete markets
Archimedean copulas                                    239–43
   basic properties 121–2                           Black and Scholes model 1, 7–13
   bi-dimensional 120–8                             copula pricing kernel 241–3
   calibration using sample dependence measures     digital options 12–13
        172–4                                       for plain vanilla call option 11
   deﬁnition 121–2                                  for plain vanilla put option 12
   density 122                                      Fréchet pricing 240–1
   dependency 123                                   martingale property 11–12
   multidimensional 149–51                        Black’s formula 17
   one-parameter 124–7, 150                       bootstrap, statistical 158
   see also Clayton copula; Frank copula;         bounds for distribution functions of sum of r.v.s.
        Gumbel copula                               bi-dimensional case 84–7
asset-or-nothing (AoN) options 12, 270              multidimensional case 145–6
attainability 6, 21                                 Value-at-Risk bounds 85–7, 146
                                                  BSB (Black, Scholes & Barenblatt) fundamental
barrier options, pricing 267–78                        equation 27
  calibrating the dependence structure 276        buyer price 23
  with copulas 268–70
  marginal probability of the trigger event       Cameron-Martin–Girsanov theorem 9–11, 16
        272–4                                     Canonical Maximum Likelihood (CML)
  pricing barrier options 274–6                        160–1
  put barrier option 270–2                        canonical representation 83, 145, 154
  reﬂection copula 276–8                          cap 17
  specifying the trigger event 272–6              capacities 25, 239
basket default swaps (BDSs) 196, 198, 201,        cash ﬂow CDO 200
     210–12                                       cash-or-nothing (CoN) options 12, 270, 271,
  loss distribution and pricing of 208–10              272
  pricing and risk monitoring 221–5               cash settlement 35
Bernstein copula 162                              Choquet integrals 25
Bernstein polynomial 162                          Clayton copula 73–4, 75, 124, 150, 184–5
Beta 33                                             and association measures 126
  Blomqvist’s Beta 96, 164                          comprehensiveness 127
290                                                                                     Index

Clayton copula (Continued)                      multiple survival time modeling 203–5
   density 124–6, 225                           reduced form models 31–3
   level curves 125                             single survival time modeling and calibration
   simulation 184–5, 191–2                           202–3
   tail dependency 127                          Sklar’s theorem applied to 64–8
co-copula 77–8, 258                             structural models 28–30
collar 17                                    credit spread options 196, 199
collateralized debt obligation (CDO) 196,    CreditMetrics 44, 45, 201
      199–202                                Cuadras–Augé deﬁnition 61
   EuroStoxx50 CDO application 210, 212–16   cumulative parisian options 268
   EuroStoxx50 CDO pricing and risk
         monitoring 216–20
                                             Debye functions 126, 175
   loss distribution and pricing of 206–8
                                             default probability 30, 34
comonotonicity 70–1, 92–3
                                             default risk 195–6; see also credit risk
complete market 21–2
                                             default times, correlated 227–8
   Sklar’s theorem applied to 62–4
                                             defaultable contingent claim 27
concordance 95–7
                                             defaultable derivative 36; see also counterparty
concordance order 52–6
                                                  risk
   bi-dimensional case 53–55
                                             Deheuvels’ empirical copula 161
   multi-dimensional case 134
                                             density
conditional copula 177–80
                                                Archimedean copula 122
conditional distribution via copula 52
                                                Clayton copula 124–6, 225
   Fréchet copula 119
                                                copula 81–4, 93
   Gaussian copula 113
                                                Frank copula 124–6, 226
   Marshall–Olkin copula 128
                                                Fréchet copula 118
   Student’s t copula 117
                                                Gaussian 81, 112–13
conditional sampling 182–8
                                                Gumbel 124–6
constant elasticity of variance (CEV)
                                                Marshall–Olkin copula 128
      models 19
                                                multivariate copulas 144–5
copula, deﬁnition 49–51, 129–33
                                                Student’s t copula 117
correlation products 201
                                             dependence 37–8
countermonotonicity 71–2
                                             dependence functions 49, 58, 136
counterparty risk 27, 245, 247, 249
                                             dependence measures 97
   credit risk and 36–7
                                             diffusive process 7
   effect on prices of options 250–2
                                             digital (one touch) asset-or-nothing (AoN)
   hedging in options 253
                                                  option 12, 270
Cox, Ingersoll and Ross model 13, 14
                                             digital (one touch) cash-or-nothing (CoN) option
Cox process 32, 202–3
                                                  12, 270, 271, 272
credit contagion 196
                                             digital binary default swap 197
credit default swaps 35–6, 195, 196–8
                                             digital options 12–13
   bootstrap algorithm from 36, 198, 229
                                                with log-normal underlyings, Sklar’s theorem
   correlated default times 227–8
                                                     applied to 138–40
credit derivatives 195–6
                                             discounting under probability measures 5–6
credit event 200
                                             distance to default 34
credit-linked products 44–7, 196, 199
                                             dual of the copula 77, 257, 261
credit risk 27–37
                                             dynamic replication trading strategy 6
   counterparty risk 36–7
   implied default probabilities 33–6
      corporate bond markets 34–5            edokko options 268
      credit default swap markets 35–6       eigenvalue method 229
      stock markets 33–4                     elliptical copulas, simulation methods for 181
   loss distribution and pricing of          empirical copula frequency 161
      CDOs 206–8                             equity-linked products 43–4
      of homogeneous basket default swaps    equivalent martingale measure (EMM) 4
           208–10                            evaluation criteria for copulas 176–7
   multiple default calibration 205–6        Everest notes 43, 263–7
Index                                                                                            291

Exact Maximum Likelihood Estimator 153,            delta 12
     154–6                                         gamma 12
Extreme Value Theory distribution 87               theta 12
                                                 groundedness 49
fair (arbitrage-free) prices 2, 21               Gumbel copula 124, 127
fat-tails 42, 43                                   association measures 126
ﬁrst-to-default 44–7, 198                          density 124–6
Fisher’s information matrix 154–5                  level curves 125
ﬂoater 17                                          multivariate 150, 185–6
ﬂoor 17                                            simulation 186, 190
forward martingale measure 15–16, 27               tail dependency 127
forward price 15                                 Gumbel–Hougaard family 124
Frank copula 64, 66, 68, 124
   association measures 126                      hedging error 6
   comprehensiveness 127                         hidden linkage 200
   density 124–6, 226                            Hoeffding’s theta 164
   MLE estimates for alpha parameter 160         horizonal sections of subcopulas 51
   multivariate 150–1, 186–8
   simulation 187, 193–4                         implied probability 20–1
   tail dependency 127                           implied volatility 18
Fréchet bounds 40, 52–6, 59, 133–5              incomplete market 6, 21–7
Fréchet class 60, 136                           independence 69, 70, 137
Fréchet copula 40, 42, 118–20                   independence axiom 22
   comprehensiveness 119, 120                    infectious default models 201
   conditional probability via 119               inference for the margins (IFM) method
   density 118                                        156–60
   positive ordering 119                         interest rate derivatives 13–18
Fréchet–Hoeffding inequality 59                 invariance, copula 72–3, 93
Fréchet pricing 240–1                           Ito’s division rule 15–16
free lunches (arbitrage gains) 2                 Ito’s lemma 8–9, 10, 14, 34
Fubini’s theorem 207
fundamental partial differential equations 12    Jacknife method 158
futures-style markets 27                         Jarque–Bera Gaussianity test statistic (JB)
fuzzy measure model 25–6                               158–9
                                                 joint distribution function (joint cumulative
Gaussian bivariate joint distribution function         distribution function; joint c.d.f) 49
     113                                         joint survival function
Gaussian copula 63, 66, 72                          bi-dimensional case 75–80
  bivariate 112–16                                  multidimensional case 140–4
  comprehensiveness 115                          joint survival probability 76
  conditional distribution via copula 113, 117
  deﬁnition 112                                  Kendall’s sample tau 99
  density of 81, 112–13                          Kendall’s tau 42, 96, 97–100, 164, 175, 176,
  estimation of correlation matrix for, with         228–9
       CML method 160–1                          Kernel copula 162–72
  multivariate 139                               Kimberling theorem 187
  positive ordering 115                          Kolmogorov–Smirnov test 177
generalized inverse 49
generalized method of moments (GMM) 158          Laplace transform 121–2, 123, 188
generator 121                                    last-to-default basket 198
geometric brownian motion (BMs) 7, 9, 272        Lebesgue integrals 25
Gini’s gamma 96–7, 164                           level curves 53
Girsanov theorem; see                            LIBOR market model 16–18
     Cameron–Martin–Girsanov theorem             linear correlation 38, 103–8
Godambe information matrix 157–8                 local volatility models 19–20
greek letters 12                                 local volatility surface 19
292                                                                                         Index

loss distribution and pricing of                    basket option application 279–80
   CDOs 206–8                                       see also rainbow options
   of homogeneous basket default swaps             multivariate Student’s t copula 148
        208–10
loss given default 27, 30, 244                     negative lower orthant dependence (NLOD)
                                                        147
                                                   negative orthant dependence (NOD) 147
marginal distribution functions (d.f.s; margins)   negative upper orthant dependence (NUOD)
     49                                                 147
marginal probabilities 38–9                        net loss 200
marginal survival probabilities (functions) 76,    no-arbitrage 2
     140–1                                           objective probability and 4–5
market-value CDO 200                                 risk-neutral probability and 3–4
Marshall–Olkin copula 80, 82–3, 98                 non-parametric estimation 161–72
  comprehensiveness 128                              application to equity market data 164–6,
  conditional distribution via copula 128                  167–70
  density 128                                        application to Value at Risk for an asset
  generating outcomes 189                                  portfolio 166–72
  survival copula 80, 82–3, 98                     nth-to-default basket 198
Marshall–Olkin method 188–90
martingale 4                                       objective probability measure 4–5
  martingale property of Black–Scholes             occupation time 276
        formula 11–12                              over-the-counter (OTC) transactions 27
maxima of two random variables 78
                                                   parisian options 268, 272
Maximin Expected Utility (MMEU) 23
                                                   partial differential equation (PDE) 10–11
maximum copula 40, 53, 54, 133
                                                   Pearson product-moment; see also linear
maximum likelihood estimation (MLE) 153
                                                         correlation 103
mean reversion 14
                                                   Pearson’s correlation index 175, 176; see also
measures of association 95–111
                                                         linear correlation
Merton approach 203; see also credit risk,
                                                   percentage loss of a BDS 198
     structural models
                                                   perfect hedge 22
mezzanine 200
                                                   plain vanilla options 2
minima of two random variables 78
                                                   Poisson process 202, 203
minimum copula 53, 54
                                                   positive lower orthant dependence (PLOD) 147
minimum variance hedging 22
                                                   positive orthant dependence (POD) 146–7
mixed estimators 164
                                                   positive quadrant dependency (PQD) 110–11
mixture copula 119
                                                   positive upper orthant dependence (PUOD)
mixture of log-normal distributions 19
                                                         147
Modigliani–Miller theorem 28
                                                   pricing
money market mutual fund 9
                                                      barrier options 267–78
monotone transforms 72–3, 93, 137
                                                      bivariate options in complete markets 232–9
Monte Carlo approach 181, 207
                                                      bivariate options in incomplete markets
  pricing using 278–80
                                                            239–43
multivariate copulas
                                                      multivariate options 278–80
  bounds for distribution functions of sums of
                                                      rainbow two-color options 253–67
        N random variables 145–6
                                                      vulnerable options 243–53
  deﬁnition and basic properties 129–33
                                                   probabilistic interpretation of copulas 58
  density and canonical representation 144–5
                                                   probability-integral transforms 52
  Fréchet bounds and concordance order
                                                   product copula 40, 55, 137
        133–5
                                                   pseudo-inverse of a generator 121
  multivariate dependence 146–7
  Sklar’s theorem 135–40                           quasi-debt-to-ﬁrm ratio 29
  survival copula 140–4                            quasi-leverage 29
multivariate dispersion copula 149
  with Weibull margins 156                         rainbow two-color options, pricing 253–67
multivariate Gaussian copula 147–8, 155               call options on the maximum of two assets
multivariate options, pricing 278–80                       257–8
Index                                                                                         293

   call options on the minimum of two assets          bivariate 116–18
         254–7                                        density 117
   option to exchange 262–3                           in multidimensional modeling 139–40
   pricing the rainbow option 265–7                   multivariate 148
   put options on maximum of two assets               positive ordering 118
         258–60                                       simulation 181
   put options on the minimum between two           Student’s t distribution 87, 159
         assets 261–2                               Student’s t test 68, 69
   rainbow put/call parity 259–60                   subcopulas
   retrieving the implied probability from market     deﬁnition and properties 49–52
         prices 263–5                               Sugeno fuzzy measure 25
   super-replicating portfolios 255–7               super-replication 23
rank correlation 101, 229; see also Spearman’s        in two dimensions 240–1
      rho                                             super-hedging strategies 23–7
recovery rate 27, 33; see also loss given           SuperSenior (SS) tranche 206, 210
      default                                       SuperSenior transactions 200
reduced form approach 28                            survival copula 39, 75–80
replicating portfolio 3                               multidimensional 140–4
   rebalancing 6                                    survival function 76, 141
   replication trading strategy 6–7                 survival time calibration 205–6
self-ﬁnancing portfolio 7                           survival time modeling
residual claimants 28                                 multiple 203–5
risk-neutral probability measure 3–4, 10              single 202–3
risk premium 5                                      synthetic CDO 200
RiskMetrics 1, 201
                                                    tail dependence 42–3, 108–10
Schweitzer–Wolff’s sigma 164                        total rate of return swap 196, 199
second-to-default basket 198                        tranches 200
seller price 23                                     2-increasing functions 49, 50, 87
senior CDO notes 200
shifted log-normal distributions 19                 uncertain probability model 24–6
singular components 82, 144                         uncertain volatility model (UVM) 26–7
singular copula                                     utility theory 22–3
   bivariate 81, 82
   multivariate 144                                 Value at Risk 166
Sklar’s theorem 39, 52, 56–9, 135–8                   bounds for 85–7, 146
   in ﬁnancial applications 61–70                     Sklar’s theorem applied to 68–70
      bivariate digital option pricing 62–4           trade-off 73–5
      credit risk evaluation 64–8                   variance–covariance robust estimation 228–9
      digital options with log-normal underlyings   Vasicek model 14
           138–40                                   vertical sections of subcopulas 51
      Value-at-Risk computation 68–70               volatility term structure 18
   modelling consequences 60–1, 138–40              vulnerable derivative 36
   proof 89–92                                      vulnerable options, pricing 243–53
   subcopula in 59–60                                 in practice 250–3
smile effect 18                                          effect of counterparty risk on prices of
Spearman’s rho 42, 96, 100–3, 164, 166, 175,                   options 250–2
      229                                                hedging counterparty risk in options 253
Spearman’s sample rho 101                             vulnerable call options 246–8
static replication portfolio 6                        vulnerable digital options 244–6
step-up credit default swap 199                       vulnerable put options 248–50
Stieltjes integral 207
stochastic volatility models 18–19                  waterfall 200
Student’s t copula                                  Wiener process 7, 9, 10, 16



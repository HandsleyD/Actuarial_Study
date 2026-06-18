---
normalized_id: shared-pdf-reference-measuring-risk-in-complex-stochastic-systems-j-franke-w-h-ardle-g-stahl
exam_code: SHARED
material_scope: measuring risk in complex stochastic systems - j. franke, w. hardle, g. stahl.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Measuring Risk in Complex Stochastic Systems - J. Franke, W. Hardle, G. Stahl.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-measuring-risk-in-complex-stochastic-systems-j-franke-w-h-ardle-g-stahl

    Measuring Risk in
Complex Stochastic Systems
        J. Franke, W. Härdle, G. Stahl




                                    Empirical Volatility




    Parameter Estimates




     http://www.xplore-stat.de/ebooks/ebooks.html
2
Preface


Complex dynamic processes of life and sciences generate risks that have to be taken. The
need for clear and distinctive definitions of different kinds of risks, adequate methods
and parsimonious models is obvious. The identification of important risk factors and
the quantification of risk stemming from an interplay between many risk factors is a
prerequisite for mastering the challenges of risk perception, analysis and management
successfully. The increasing complexity of stochastic systems, especially in finance, have
catalysed the use of advanced statistical methods for these tasks.
The methodological approach to solving risk management tasks may, however, be under-
taken from many different angles. A financial institution may focus on the risk created
by the use of options and other derivatives in global financial processing, an auditor
will try to evaluate internal risk management models in detail, a mathematician may
be interested in analysing the involved nonlinearities or concentrate on extreme and
rare events of a complex stochastic system, whereas a statistician may be interested
in model and variable selection, practical implementations and parsimonious modelling.
An economist may think about the possible impact of risk management tools in the
framework of efficient regulation of financial markets or efficient allocation of capital.
This book gives a diversified portfolio of these scenarios. We first present a set of papers
on credit risk management, and then focus on extreme value analysis. The Value at
Risk (VaR) concept is discussed in the next block of papers, followed by several articles
on change points. The papers were presented during a conference on Measuring Risk in
Complex Stochastic Systems that took place in Berlin on September 25th - 30th 1999.
The conference was organised within the Seminar Berlin-Paris, Seminaire Paris-Berlin.
The paper by Lehrbass considers country risk within a no-arbitrage model and combines
it with the extended Vasicek term structure model and applies the developed theory
to DEM- Eurobonds. Kiesel, Perraudin and Taylor construct a model free volatility
estimator to investigate the long horizon volatility of various short term interest rates.
Hanousek investigates the failing of Czech banks during the early nineties. Müller and
Rnz apply a Generalized Partial Linear Model to evaluating credit risk based on a
credit scoring data set from a French bank. Overbeck considers the problem of capital
allocation in the framework of credit risk and loan portfolios.
The analysis of extreme values starts with a paper by Novak, who considers confidence
intervals for tail index estimators. Robert presents a novel approach to extreme value




                                                                                          3
calculation on state of the art α-ARCH models. Kleinow and Thomas show how in a
client/server architecture the computation of extreme value parameters may be under-
taken with the help of WWW browsers and an XploRe Quantlet Server.
The VaR section starts with Cumperayot, Danielsson and deVries who discuss basic
questions of VaR modelling and focus in particular on economic justifications for external
and internal risk management procedures and put into question the rationale behind
VaR.
Slaby and Kokoschka deal with with change-points. Slaby considers methods based
on ranks in an iid framework to detect shifts in location, whereas Kokoszka reviews
CUSUM-type esting and estimating procedures for the change-point problem in ARCH
models.
Huschens and Kim concentrate on the stylised fact of heavy tailed marginal distributions
for financial returns time series. They model the distributions by the family of α-stable
laws and consider the consequences for β values in the often applied CAPM framework.
Breckling, Eberlein and Kokic introduce the generalised hyperbolic model to calculate
the VaR for market and credit risk. Härdle and Stahl consider the backtesting based on
shortfall risk and discuss the use of exponential weights. Sylla and Villa apply a PCA
to the implied volatility surface in order to determine the nature of the vola factors.
We gratefully acknowledge the support of the Deutsche Forschungsgemeinschaft, SFB
373 Quantification und Simulation Ökonomischer Prozesse, Weierstra Institut für Ange-
wandte Analysis und Stochastik, Deutsche Bank, WestLB, BHF-Bank, Arthur Andersen,
SachsenLB, and MD*Tech.
The local organization was smoothly run by Jörg Polzehl and Vladimir Spokoiny. With-
out the help of Anja Bardeleben, Torsten Kleinow, Heiko Lehmann, Marlene Müller,
Sibylle Schmerbach, Beate Siegler, Katrin Westphal this event would not have been
possible.
J. Franke, W. Härdle and G. Stahl
January 2000, Kaiserslautern and Berlin




4
Contributors


Jens Breckling Insiders GmbH Wissensbasierte Systeme, Wilh.-Th.-Römheld-Str. 32,
     55130 Mainz, Germany

Phornchanok J. Cumperayot Tinbergen Institute, Erasmus University Rotterdam

Jon Danielsson London School of Economics

Casper G. de Vries Erasmus University Rotterdam and Tinbergen Institute

Ernst Eberlein Institut für Mathematische Stochastik, Universität Freiburg, Eckerstaße
     1, 79104 Freiburg im Breisgau, Germany

Wolfgang Härdle Humboldt-Universität zu Berlin, Dept. of Economics, Spandauer Str.
     1, 10178 Berlin

Jan Hanousek CERGE-EI, Prague

Stefan Huschens Technical University Dresden, Dept. of Economics

Bjorn N. Jorgensen Harvard Business School

Rüdiger Kiesel School of Economics, Mathematics and Statistics, Birkbeck College,
      University of London, 7-15 Gresse St., London W1P 2LL, UK

Jeong-Ryeol Kim Technical University Dresden, Dept. of Economics

Torsten Kleinow Humboldt-Universität zu Berlin, Dept. of Economics, Spandauer Str.
     1, 10178 Berlin

Philip Kokic Insiders GmbH Wissensbasierte Systeme, Wilh.-Th.-Römheld-Str. 32, 55130
      Mainz, Germany

Piotr Kokoszka The University of Liverpool and Vilnius University Institute of Mathemat-
     ics and Informatics

Frank Lehrbass 01-616 GB Zentrales Kreditmanagement, Portfoliosteuerung, WestLB

Marlene Müller Humboldt-Universität zu Berlin, Dept. of Economics, Spandauer Str.
     1, 10178 Berlin




                                                                                      5
Sergei Y. Novak EURANDOM PO Box 513, Eindhoven 5600 MB, Netherlands

Ludger Overbeck Deutsche Bank AG, Group Market Risk Management, Methodology
    & Policy/CR, 60262 Frankfurt

William Perraudin Birkbeck College, Bank of England and CEPR

Christian Robert Centre de Recherche en Economie et Statistique (CREST), Labora-
     toire de Finance Assurance, Timbre J320 - 15, Bb G. Peri, 92245 MALAKOFF,
     FRANCE

Bernd Rönz Humboldt-Universität zu Berlin, Dept. of Economics, Spandauer Str. 1,
     10178 Berlin

Aleš Slabý Charles University Prague, Czech Republic

Gerhard Stahl Bundesaufsichtsamt für das Kreditwesen, Berlin

Alpha Sylla ENSAI-Rennes, Campus de Ker-Lan, 35170 Bruz, France.

Alex Taylor School of Economics, Mathematics and Statistics, Birkbeck College, Uni-
     versity of London, 7-15 Gresse St., London W1P 2LL, UK

Michael Thomas Fachbereich Mathematik, Universität-Gesamthochschule Siegen

Christophe Villa University of Rennes 1, IGR and CREREG, 11 rue jean Mac, 35019
     Rennes cedex, France.




6
Contents


1 Allocation of Economic Capital in loan portfolios                                        15
Ludger Overbeck
   1.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
   1.2   Credit portfolios . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
         1.2.1   Ability to Pay Process . . . . . . . . . . . . . . . . . . . . . . . . . 16
         1.2.2   Loss distribution . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
   1.3   Economic Capital . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
         1.3.1   Capital allocation . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
   1.4   Capital allocation based on Var/Covar . . . . . . . . . . . . . . . . . . . . 19
   1.5   Allocation of marginal capital . . . . . . . . . . . . . . . . . . . . . . . . . 21
   1.6   Contributory capital based on coherent risk measures        . . . . . . . . . . . 21
         1.6.1   Coherent risk measures . . . . . . . . . . . . . . . . . . . . . . . . 22
         1.6.2   Capital Definition . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
         1.6.3   Contribution to Shortfall-Risk . . . . . . . . . . . . . . . . . . . . . 23
   1.7   Comparision of the capital allocation methods . . . . . . . . . . . . . . . . 23
         1.7.1   Analytic Risk Contribution . . . . . . . . . . . . . . . . . . . . . . 23
         1.7.2   Simulation procedure     . . . . . . . . . . . . . . . . . . . . . . . . . 24
         1.7.3   Comparison . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
         1.7.4   Portfolio size . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25
   1.8   Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25
   Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30

2 Estimating Volatility for Long Holding Periods                                           31




                                                                                            7
Contents

Rüdiger Kiesel, William Perraudin and Alex Taylor
    2.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
    2.2   Construction and Properties of the Estimator . . . . . . . . . . . . . . . . 32
          2.2.1   Large Sample Properties . . . . . . . . . . . . . . . . . . . . . . . . 33
          2.2.2   Small Sample Adjustments . . . . . . . . . . . . . . . . . . . . . . 34
    2.3   Monte Carlo Illustrations . . . . . . . . . . . . . . . . . . . . . . . . . . . 36
    2.4   Applications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39
    2.5   Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41
    Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41

3 A Simple Approach to Country Risk                                                         43
Frank Lehrbass
    3.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43
    3.2   A Structural No-Arbitrage Approach . . . . . . . . . . . . . . . . . . . . . 44
          3.2.1   Structural versus Reduced-Form Models . . . . . . . . . . . . . . . 44
          3.2.2   Applying a Structural Model to Sovereign Debt . . . . . . . . . . . 45
          3.2.3   No-Arbitrage vs Equilibrium Term Structure . . . . . . . . . . . . 45
          3.2.4   Assumptions of the Model . . . . . . . . . . . . . . . . . . . . . . . 46
          3.2.5   The Arbitrage-Free Value of a Eurobond . . . . . . . . . . . . . . . 48
          3.2.6   Possible Applications . . . . . . . . . . . . . . . . . . . . . . . . . . 53
          3.2.7   Determination of Parameters . . . . . . . . . . . . . . . . . . . . . 54
    3.3   Description of Data and Parameter Setting . . . . . . . . . . . . . . . . . 55
          3.3.1   DM-Eurobonds under Consideration . . . . . . . . . . . . . . . . . 55
          3.3.2   Equity Indices and Currencies . . . . . . . . . . . . . . . . . . . . . 56
          3.3.3   Default-Free Term Structure and Correlation . . . . . . . . . . . . 57
          3.3.4   Calibration of Default-Mechanism . . . . . . . . . . . . . . . . . . 58
    3.4   Pricing Capability . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59
          3.4.1   Test Methodology . . . . . . . . . . . . . . . . . . . . . . . . . . . 59
          3.4.2   Inputs for the Closed-Form Solution . . . . . . . . . . . . . . . . . 59
          3.4.3   Model versus Market Prices . . . . . . . . . . . . . . . . . . . . . . 60



8
                                                                                     Contents

   3.5   Hedging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
         3.5.1   Static Part of Hedge . . . . . . . . . . . . . . . . . . . . . . . . . . 61
         3.5.2   Dynamic Part of Hedge . . . . . . . . . . . . . . . . . . . . . . . . 62
         3.5.3   Evaluation of the Hedging Strategy . . . . . . . . . . . . . . . . . . 63
   3.6   Management of a Portfolio . . . . . . . . . . . . . . . . . . . . . . . . . . . 64
         3.6.1   Set Up of the Monte Carlo Approach . . . . . . . . . . . . . . . . . 64
         3.6.2   Optimality Condition . . . . . . . . . . . . . . . . . . . . . . . . . 66
         3.6.3   Application of the Optimality Condition . . . . . . . . . . . . . . . 68
         3.6.4   Modification of the Optimality Condition . . . . . . . . . . . . . . 69
   3.7   Summary and Outlook . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
   Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70

4 Predicting Bank Failures in Transition                                                    73
Jan Hanousek
   4.1   Motivation    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
   4.2   Improving “Standard” Models of Bank Failures . . . . . . . . . . . . . . . 74
   4.3   Czech banking sector . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76
   4.4   Data and the Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
   4.5   Conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80
   Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83

5 Credit Scoring using Semiparametric Methods                                               85
Marlene Müller and Bernd Rönz
   5.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
   5.2   Data Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86
   5.3   Logistic Credit Scoring . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
   5.4   Semiparametric Credit Scoring . . . . . . . . . . . . . . . . . . . . . . . . 87
   5.5   Testing the Semiparametric Model . . . . . . . . . . . . . . . . . . . . . . 89
   5.6   Misclassification and Performance Curves . . . . . . . . . . . . . . . . . . 89
   Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 90




                                                                                             9
Contents

6 On the (Ir)Relevancy of Value-at-Risk Regulation                                          103
Phornchanok J. Cumperayot, Jon Danielsson,
Bjorn N. Jorgensen and Caspar G. de Vries
     6.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103
     6.2   VaR and other Risk Measures . . . . . . . . . . . . . . . . . . . . . . . . . 104
           6.2.1   VaR and Other Risk Measures . . . . . . . . . . . . . . . . . . . . 106
           6.2.2   VaR as a Side Constraint . . . . . . . . . . . . . . . . . . . . . . . 108
     6.3   Economic Motives for VaR Management . . . . . . . . . . . . . . . . . . . 109
     6.4   Policy Implications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114
     6.5   Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 116
     Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 117

7 Backtesting beyond VaR                                                                    121
Wolfgang Härdle and Gerhard Stahl
     7.1   Forecast tasks and VaR Models . . . . . . . . . . . . . . . . . . . . . . . . 121
     7.2   Backtesting based on the expected shortfall . . . . . . . . . . . . . . . . . 123
     7.3   Backtesting in Action . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 124
     7.4   Conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130
     Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 131

8 Measuring Implied Volatility Surface Risk using PCA                                       133
Alpha Sylla and Christophe Villa
     8.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133
     8.2   PCA of Implicit Volatility Dynamics . . . . . . . . . . . . . . . . . . . . . 134
           8.2.1   Data and Methodology       . . . . . . . . . . . . . . . . . . . . . . . . 135
           8.2.2   The results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135
     8.3   Smile-consistent pricing models . . . . . . . . . . . . . . . . . . . . . . . . 139
           8.3.1   Local Volatility Models . . . . . . . . . . . . . . . . . . . . . . . . 139
           8.3.2   Implicit Volatility Models . . . . . . . . . . . . . . . . . . . . . . . 140
           8.3.3   The volatility models implementation . . . . . . . . . . . . . . . . 141




10
                                                                                     Contents

   8.4   Measuring Implicit Volatility Risk using VaR . . . . . . . . . . . . . . . . 144
         8.4.1   VaR : Origins and definition . . . . . . . . . . . . . . . . . . . . . . 144
         8.4.2   VaR and Principal Components Analysis . . . . . . . . . . . . . . 145
   Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 147

9 Detection and estimation of changes in ARCH processes                                   149
Piotr Kokoszka and Remigijus Leipus
   9.1   Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 149
   9.2   Testing for change-point in ARCH . . . . . . . . . . . . . . . . . . . . . . 152
         9.2.1   Asymptotics under null hypothesis . . . . . . . . . . . . . . . . . . 152
         9.2.2   Asymptotics under local alternatives . . . . . . . . . . . . . . . . . 154
   9.3   Change-point estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 155
         9.3.1   ARCH model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 155
         9.3.2   Extensions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 157
   Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 158

10 Behaviour of Some Rank Statistics for Detecting Changes                                161
Aleš Slabý
   10.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 161
   10.2 Limit Theorems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 164
   10.3 Simulations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 166
   10.4 Comments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 168
   10.5 Acknowledgements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 170
   Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 171

11 A stable CAPM in the presence of heavy-tailed distributions                            175
Stefan Huschens and Jeong-Ryeol Kim
   11.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 175
   11.2 Empirical evidence for the stable Paretian hypothesis . . . . . . . . . . . . 176
         11.2.1 Empirical evidence . . . . . . . . . . . . . . . . . . . . . . . . . . . 176
         11.2.2 Univariate und multivariate alpha-stable distributions . . . . . . . 178



                                                                                            11
Contents

     11.3 Stable CAPM and estimation for beta-coefficients . . . . . . . . . . . . . . 180
          11.3.1 Stable CAPM . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 181
          11.3.2 Estimation of the beta-coefficient in stable CAPM . . . . . . . . . 182
     11.4 Empirical analysis of bivariate symmetry test . . . . . . . . . . . . . . . . 183
          11.4.1 Test for bivariate symmetry . . . . . . . . . . . . . . . . . . . . . . 183
          11.4.2 Estimates for the beta-coefficient in stable CAPM . . . . . . . . . 185
     11.5 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 187
     Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 187

12 A Tailored Suit for Risk Management: Hyperbolic Model                                   189
Jens Breckling, Ernst Eberlein and Philip Kokic
     12.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 189
     12.2 Advantages of the Proposed Risk Management Approach . . . . . . . . . 190
     12.3 Mathematical Definition of the P & L Distribution . . . . . . . . . . . . . 191
     12.4 Estimation of the P&L using the Hyperbolic Model . . . . . . . . . . . . . 192
     12.5 How well does the Approach Conform with Reality . . . . . . . . . . . . . 195
     12.6 Extension to Credit Risk . . . . . . . . . . . . . . . . . . . . . . . . . . . . 195
     12.7 Application . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 196
     Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 199

13 Computational Resources for Extremes                                                    201
Torsten Kleinow and Michael Thomas
     13.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 201
     13.2 Computational Resources . . . . . . . . . . . . . . . . . . . . . . . . . . . 202
          13.2.1 XploRe . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 202
          13.2.2 Xtremes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 203
          13.2.3 Extreme Value Analysis with XploRe and Xtremes . . . . . . . . . 203
          13.2.4 Differences between XploRe and Xtremes . . . . . . . . . . . . . . 205
     13.3 Client/Server Architectures . . . . . . . . . . . . . . . . . . . . . . . . . . 205
          13.3.1 Client/Server Architecture of XploRe . . . . . . . . . . . . . . . . 206




12
                                                                                     Contents

        13.3.2 Xtremes CORBA Server . . . . . . . . . . . . . . . . . . . . . . . . 208
   13.4 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 209
   Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 209

14 Confidence intervals for a tail index estimator                                        211
Sergei Y. Novak
   14.1 Confidence intervals for a tail index estimator . . . . . . . . . . . . . . . . 211
   Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 216

15 Extremes of alpha-ARCH Models                                                          219
Christian Robert
   15.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 219
   15.2 The model and its properties . . . . . . . . . . . . . . . . . . . . . . . . . 220
   15.3 The tails of the stationary distribution . . . . . . . . . . . . . . . . . . . . 221
   15.4 Extreme value results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 224
        15.4.1 Normalizing factors      . . . . . . . . . . . . . . . . . . . . . . . . . . 224
        15.4.2 Computation of the extremal index . . . . . . . . . . . . . . . . . . 225
   15.5 Empirical study . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 227
        15.5.1 Distribution of extremes . . . . . . . . . . . . . . . . . . . . . . . . 230
        15.5.2 Tail behavior . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 230
        15.5.3 The extremal index       . . . . . . . . . . . . . . . . . . . . . . . . . . 233
   15.6 Proofs . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 234
   15.7 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 248
   Bibliography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 249




                                                                                            13
Contents




14
1 Allocation of Economic Capital in loan
  portfolios
                                                                          Ludger Overbeck




1.1     Introduction

Since the seminal research of Markowitz (1952) and Sharpe (1964) capital allocation
within portfolios is based on the variance/covariance analysis. Even the introduction
of Value-at-Risk in order to measure risk more accurately than in terms of standard
deviation, did not chance the calculation of a risk contribution of single asset in the
portfolio or its contributory capital as a multiple of the asset’s β with the portfolio.
This approach is based on the assumption that asset returns are normally distributed.
Under this assumption, the capital of a portfolio, usually defined as a quantile of the
distribution of changes of the portfolio value, is a multiple of the standard deviation of
the portfolio. Since the βs yield a nice decomposition of the portfolio standard deviation
and exhibit the interpretation as an infinitesimal marginal risk contribution (or more
mathematically as a partial derivative of the portfolio standard deviation with respect
to an increase of the weight of an asset in the portfolio), these useful properties also hold
for the quantile, i.e. for the capital.
In the case of the normal distributed assets in the portfolio, the though defined capital
allocation rule also coincides with the capital allocation based on marginal economic
capital, i.e. the capital difference between the portfolio with and without the single
asset to which we want to allocate capital. Additionally it is equivalent to the expected
loss in the single asset conditional on the event that the loss for the whole portfolio
exceeds a quantile of the loss distribution.
The purpose of the paper is to present and analyse these three capital allocation rules,
i.e. the one based on conditional expectation, the one on marginal economic capital
and the classical one based on covariances, in the context of a loan portfolio. The only
method that gives analytic solutions of the (relative) allocation rule is the classical one
based on covariances. All others have to be analysed by a Monte-Carlo-Simulation for
real world portfolios. There is of course a possibility to quantify the other two approaches
for highly uniformed and standardized portfolios. On the other hand in some situations
also the calculation of the βs might be quicker in a Monte-Carlo-Simulation.



                                                                                          15
1    Allocation of Economic Capital in loan portfolios

1.2      Credit portfolios

Let us consider a portfolio of transactions with m counterparties. The time horizon at
which the loss distribution is to be determined is fixed, namely 1 year. The random
variable portfolio loss can than be written as
                                              m
                                              X
                                      L =           Lk ,                               (1.1)
                                              k=1

where Lk is the loss associated with transaction k. There are now different models
discussed in the literature and some of them are implemented by banks and software
firms. From the growing literature the papers Baestaens & van den Bergh (1997), Credit
Metrics (1997), Risk (1997), Artzner, Dealban, Eber & Heath (1997a), Kealhofer (1995),
Overbeck & Stahl (1997), Schmid (1997), Vasicek (1997) and Wilson (1997) may be
consulted in a first attempt.
In the simplest model (pure default mode)

                                      Lk = lk 1Dk ,                                    (1.2)

where Dk is the default event and lk is the exposure amount, which is assumed to be
known with certainty. More eloborate models (like Credit Metrics (1997)) assume
                                            D
                                            X
                                 Lk =             lr,k 1Dr,k ,                         (1.3)
                                          r=AAA


where Dr,k the event that counterparty k is in rating class r and lr,k is the loss associated
with the migration of k to rating r. The loss amount is usually deterministic given
the total amount of exposure and the given migration, i.e. lr,k is a function of r, the
exposure and the present rating of k. The straight asset value model Merton (1974), e.g.
implemented by Kealhofer & Crosbie (1997), assumes

                                   Lk = L(k, A1 (k)),                                  (1.4)

where A(k) is the stochastic process governing the asset value process of counterparty
k. In the default mode only model

                             L(k, A1 (k)) = lk 1{A1 (k)<Ck } ,                         (1.5)

where Ck is the default boundary. We will basically consider the last approach, but
similar results also hold for more general models like (1.1).


1.2.1    Ability to Pay Process

In the model descriptions (1.5) and (1.4) the process driving default is usually addressed
as the asset-value process. This originated in the seminal paper by Merton (1974). The



16
                                                                                     1.2   Credit portfolios

main area of application is the default analysis of firms with stock exchange traded
equities. However a straightforward abstraction leads to the formulation of an ”Ability
to pay process”. If this process falls below under a certain threshold then default occurs.
However in general the modeling of the ability to pay of a given customer is difficult.
Nevertheless let us assume we have m customer with exposure lk , k = 1, .., m and ability
to pay process

                         dAt (i) = µi At (i)dt + σi At (i)dZt (i).                                     (1.6)

Here Zt = (Zt (1), .., Zt (m)) is a standard multivariate Brownian motion with covariance
matrix equal to correlation matrix R = (ρij ). If now the threshold Ck were known, the
distribution of L would be specify. Since the parameters of the ability to pay process
are difficult to access, we take another route here. We just assume that the default
probability for each single customer and the correlation matrix R is known. Default
probabilities can be calibrated from the spread in the market or from historical default
data provided by rating agencies or by internal ratings. The correlation may be derived
from equity indices as proposed in the Credit Metrics (1997) model. This two sets of
parameters are sufficient since


                               m
                               X
                       L =           lk 1{A1 (k)<Ck }                                                  (1.7)
                               k=1
                               Xm
                           =         lk 1{A0 (k) exp{(µk − 1 σk )+σk Z1 }<Ci }
                                                              2
                               k
                               m
                               X
                           =         lk 1           log Ci −log A0 (k)−µk − 1
                                                                            2 σk }
                                         {Z1 (k)<                σk
                                k
                               m
                               X
                           =         lk 1{Z1 (k)<Φ−1 (pk )} ,
                                k

where pk is the default probability of counterparty k and Φ is the distribution function of
the standard normal distribution. Hence the distribution of the vector Z1 , i.e. the cor-
relation R and the default probabilities specify the loss distribution entirely. Remember
that we assumed the lk to be non-random.


1.2.2   Loss distribution

There are attempts to give an analytic approximation to the distribution of L. If all
pi = p0 and all correlation are the same and all exposures are equal then a straight
forward application of some limit theorems like LLN,CLT,Poisson law give different
reasonable approximations for large m. This is for example discussed in Fingers (1999).




                                                                                                         17
1    Allocation of Economic Capital in loan portfolios

Since the analyzed capital allocation rules require all but one Monte-Carlo-Simulation
we also simulate the loss distribution itself. The empirical distribution
                                N          m
                                                                      !
                             1 X          X
                                   1[0,x]      lk 1{Z i (k)<Φ−1 (pk )} ,         (1.8)
                            N                        1
                               i=1        k=1

where N is the number of simulation and the vector Z1i is the i-th realization of a
multivariate normal distribution with correlation matrix R, serves as an approximation
of the true loss distribution. A typical histogram of a simulated loss distribution is
shown below in Figure 1. It shows the 10% largest losses in the simulation of the
portfolio described in Section 7 below.




                  Figure 1.1: Histogram of a simulated loss distribution




1.3      Economic Capital

The nowadays widespread definition of economic capital for a portfolio of financial in-
struments uses the notion of the quantile of the loss distribution. Economic capital,
based on a confidence of α%, EC(α) is set to the α-quantile of the loss distribution




18
                                             1.4   Capital allocation based on Var/Covar

minus the expected value of the loss distribution, more precisely

                        EC(α) = qα (L) − E[L], with                                   (1.9)
                                                         α
                         qα (L) = inf{y|P [L > y] > 1 −     }.                      (1.10)
                                                        100
From a risk management point of view, holding the amount EC(99.98) as cushion against
the portfolio defining L means that in average in 4999 out of 5000 years the capital would
cover all losses. This approach towards economic capital resembles an ”all or nothing”
rule. In particular in ”bad” times, when 1 out of this 5000 events happens, the capital
does not cushion the losses. If L is based on the whole balance sheet of the bank and
there is no additional capital, the bank would be in default itself. An alternative capital
definition tries also to think about ”bad times” a little more optimistic. Let ”bad times”
be specified by the event, that the loss is bigger than a given amount K and let economic
capital be defined by

                                 ECK    = E[L|L > K].                               (1.11)

This economic capital is in average also enough to cushion even losses in bad times.
This approach motives also our definition of contributory capital based on coherent risk
measures. This capital definition is analyzed in detail by Artzner, Dealban, Eber &
Heath (1997b). They also show that ECK is coherent if K is a quantile of L. Coherency
requires a risk measure to satisfy a set of axiom, or first principles, that a reasonable
risk measure should obey. It is also shown that the risk measure defined in terms of
quantiles are not coherent in general.


1.3.1   Capital allocation

Once there is an agreement about the definition and the amount of capital EC, it is often
necessary to allocate it throughout the portfolio. We therefore look for a contributory
economic capital γk for each k = 1, .., m such that
                                     m
                                     X
                                           γk = EC.                                 (1.12)
                                     k=1



1.4     Capital allocation based on Var/Covar

The classical portfolio theory provides a rule for the allocation of contributory economic
capital that is based on the decomposition of the standard deviation of the loss distri-
bution. These contributions to the standard deviation are called Risk Contributions βi .
By construction of the random variable L in (1.5) we have




                                                                                        19
1    Allocation of Economic Capital in loan portfolios



                             m
                             X
                 2
             σ (L) =               lk2 σ 2 (1{Z1 (k)<Φ−1 (pk )} )                                              (1.13)
                             k=1
                                   m X
                                   X m
                             +2                li lj cov(1{Z1 (i)<Φ−1 (pi )} , 1{Z1 (j)<Φ−1 (pj )} )
                                   i=1 j=i+1
                             m
                             X
                       =           lk pk (1 − pk )
                             k=1
                                   X m
                                   m X
                             +2                li lj P [Z1 (i) < Φ−1 (pi ), Z1 (j) < Φ−1 (pj )].
                                   i=1 j=i+1


Moreover equation (1.13) yields immediately that with

                  1
         βi :=        (li pi (1 − pi )
                 σ(L)
                              m
                                                                                                           !
                              X
                                        lj P [Z1 (i) < Φ−1 (pi ), Z1 (j) < Φ−1 (pj )] − pi pj
                                                                                                       
                         +                                                                                 ,
                             j=1,j6=i

we obtain
                                            m
                                            X
                                                  lk βk      = σ(L).                                           (1.14)
                                            k=1

Also P [Z1 (i) < Φ−1 (pi ), Z1 (j) < Φ−1 (pj )] is easily calculated as the integral of a two
dimensional normalized normal distribution with correlation rij .
For the family of normally distributed random variable the difference between a quantile
and the mean is simple a multiple of the standard deviation. This is the historical reason
why risk managers like to think in multiples of the standard deviation, or the volatility
to quantify risk.
This approach is also inherited to non-normal distribution, since also in credit risk
management the contributory economic capital is often defined by

                                                             EC(α)
                                            γk = βk ·              .
                                                              σL
The βk can also be viewed as infinitesimal small marginal risk or more mathematically

                                                           ∂σ(L)
                                               βi =              .
                                                            ∂li




20
                                                      1.5   Allocation of marginal capital

If the portfolio L were a sum of normal distributed random variables weighted by lk we
would also have
                                            ∂
                                  γi =         EC(α)
                                           ∂li
                                           EC(α) ∂
                                      =           ·    σi
                                            σ(L) ∂li
                                           EC(α)
                                      =           · βi
                                            σ(L)

as intended. This interpretation breaks down if L is not a linear function of a multivariate
normal distributed random vector. We therefore analyze marginal economic capital in
the very definition in the following section.


1.5    Allocation of marginal capital

Marginal capital for a given counterparty j, M EC j (α) is defined to be the difference
between the economic capital of the whole portfolio and the economic capital of the
portfolio without the transaction:



               M ECj (α) = EC(α, L) − EC(α, L − lj 1{Z1 (j)<Φ−1 (pj )} ).

Since the sum of the MECs does not add up to EC(α) we either define the economic
capital to be the sum of the MECs or allocate the contributory economic capital pro-
portional to the marginal capital, i.e.

                                             EC(α)
                          CECj (II) = MECj Pm        .                               (1.15)
                                            k=1 MECk

Since the sum of the CECs has no significant economic interpretation we define the
capital allocation rule based on marginal capital by (1.15).


1.6    Contributory capital based on coherent risk measures

There are doubt whether the definition of capital in terms of quantiles is useful. In
Artzner et al. (1997b) a different route is taken. They go back to ”first principles”
and ask which are the basic features a risk measure should have. Measures satisfying
these axioms are called coherent. They are already used in insurance mathematics and
extreme value theory, Embrechts, Klüppelberg & Mikosch (1997).




                                                                                         21
1    Allocation of Economic Capital in loan portfolios

1.6.1    Coherent risk measures

In order to define coherent risk measure the notion of a risk measure has to be fixed.
Definition
Let Ω denote the set of all states of the world. Assume there are only finitely many states
of the world. A risk is a real valued function on Ω and G is the set of all risks. A risk
measure is a real valued function on G.
A risk measure ρ on Ω is called coherent iff

                 For all X ∈ G, ρ(X) ≤ ||X + ||∞                                       (1.16)
                 For all X1 and X2 ∈ G, ρ(X1 + X2 ) ≤ ρ(X1 ) + ρ(X2 )                  (1.17)
                 For all λ ≥ 0 and X ∈ G, ρ(λX) = λρ(X)                                (1.18)
                 For every subset A ⊂ Ω, X ∈ G, ρ(1A X) ≤ ρ(X)                         (1.19)
                 IfX ∈ G is positive and if α ≥ 0 then ρ(α + X) = ρ(X) + α             (1.20)

 In Artzner et al. (1997b) it shown that the notion of coherent risk measure is equivalent
to the notion of generalized scenarios.

                            ρP (X) = sup{EP [X + ]|P ∈ P},                             (1.21)

where P is a set of probability measures on Ω.
The space we are working with is

                                    Ω = {0, ..., N }m .

Here N is the largest possible values, as multiples of the basic currency.If ω = (ω(1), .., ω(m)),
then ω(i) is the interpreted as the loss in the i-th transaction, if ω is the ”state of the
world” which is identified with ”state of the portfolio”.


1.6.2    Capital Definition

As a scenario
          P we choose our observed distribution of (L1 , .., Lm ) conditioned on the event
that L = m   k=1 Lk > K for some large constant K. This constant indicates how the
senior management understands under ”large losses” for the portfolio. Then a coherent
risk measure is defined by

                                ρ(X)K,L = E[X|L > K].

This is coherent by definition since the measure P [·|L > K] is a probability measure on
Ω. Of course this measure is portfolio inherent. The risk factors outside the portfolio,
like the asset values are not part of the underlying probability space.




22
                                           1.7    Comparision of the capital allocation methods

However a straight forward capital definition is then
                                   ECK (III) = E[L|L > K].

If K = qα (L), i.e. K is a quantile of the loss distribution, then the map
                                    ρ(X) = E[X|qα (X)]
is shown to be a coherent risk measure on any finite Ω, cf. Artzner et al. (1997b).


1.6.3   Contribution to Shortfall-Risk

One main advantage of ECK (III) is the simple allocation of the capital to the single
transaction. The contribution to shortfall risk, CSR is defined by
                                    CSRk = E[Lk |L > K].
That is the capital for a single deal is its average loss in bad situations. Again this is
a coherent risk measure on Ω. It is obvious that CSRk ≤ lk . Hence a capital quota of
over 100% is impossible, in contrast to the approach based on risk contributions.


1.7     Comparision of the capital allocation methods

We did an analysis on a portfolio of 40 counterparty and based the capital on the 99%-
quantile. In table 3 in the appendix the default probabilities and the exposure are
reported.
The asset correlation matrix is reported in table 4 in the appendix.


1.7.1   Analytic Risk Contribution

The risk contribution method yield the following contributory economic capital. The
first line contains the transaction ID, the second line the analytic derived contributory
capital and the third line the same derived in the Monte-Carlo-Simulation. As you see
the last two lines are quite close.

           Facility ID       1A      2A     3A      4A     5A     6A     7A     8A     9A    10A
           Analytic RC      9.92    8.52   8.60   17.86   4.23   2.90   6.19   0.29   2.67   3.45
           Monte-Carlo RC   9.96    8.41   8.64   17.93   4.46   2.78   6.06   0.25   2.52   3.39

           Facility ID      11A     12A    13A     14A    15A    16A    17A    18A    19A    20A
           Analytic RC      1.51    1.87   6.32   18.23   1.51   1.15   2.28   1.51   1.24   0.49
           Monte-Carlo RC   1.35    1.85   6.25   18.52   1.45   1.23   2.28   1.60   1.17   0.48

           Facility ID      21A     22A    23A     24A    25A    26A    27A    28A    29A    30A
           Analytic RC      2.77    0.69   1.43    0.39   3.71   1.90   1.61   4.42   0.58   2.45
           Monte-Carlo RC   2.71    0.69   1.44    0.48   3.62   1.86   1.78   4.53   0.60   2.45

           Facility ID      31A     32A    33A     34A    35A    36A    37A    38A    39A    40A
           Analytic RC      4.27   12.39   0.44    0.98   3.86   5.73   0.80   6.19   3.88   1.08
           Monte-Carlo RC   4.29   12.41   0.42    0.88   3.88   5.66   0.79   6.29   3.99   1.06




                                                                                                    23
1    Allocation of Economic Capital in loan portfolios

1.7.2    Simulation procedure

Firstly, the scenarios of the ”Ability to pay” at year 1,Al , l = 1, .., N = number of
simulations, are generated for all counterparties in the portfolio. For the different types
of contributory capital we proceed as follows


Marginal Capital In each realization Al we consider all losses Lk (l) := L − Lk in the
portfolio without counterparty k for all k = 1, ..m. At the end, after N simulations of the
asset values we calculate the empirical quantiles qα (Lk )of each vector (Lk (1), .., Lk (N ).
The contributory economic capital is then proportional to qα (L) − E[L] − qα (Lk ) + E[Lk ]
The performance of this was not satisfactory in a run with even 10.000.000 simulations
the single CECs differed quite a lot. Since we are working on an improvement of the
simulation procedure we postpone the detailed analysis of this type of contributory
economic capital to a forthcoming paper.


Contribution to Shortfall Risk First, the threshold K was set to
150.000.000, which was close to the EC(99%) of the portfolio. In a simulation step where
the threshold was exceeded we stored the loss of a counterparty if his loss was positive.
After all simulations the average is then easily obtained.
Here we got very stable results for 1.000.000 simulations which can be seen in the fol-
lowing table. Taking 10.000.000 simulations didn’t improve the stability significantly.

               ID        1A      2A      3A      4A     5A     6A     7A     8A     9A    10A
               Run 1   13.22   11.38   10.99   15.87   4.06   2.83   6.00   0.12   2.27   3.10
               Run 2   13.64   11.23   11.18   15.75   4.01   2.81   6.89   0.15   2.40   2.95

               ID       11A     12A     13A     14A    15A    16A    17A    18A    19A    20A
               Run 1    1.41    1.63    5.92   15.49   1.40   1.07   1.95   1.44   0.98   0.48
               Run 2    1.33    1.60    6.00   15.34   1.56   1.07   2.10   1.34   1.02   0.47

               ID       21A     22A     23A     24A    25A    26A    27A    28A    29A    30A
               Run 1    2.29    0.58    1.38    0.33   3.44   1.74   1.36   3.92   0.55   2.36
               Run 2    2.35    0.52    1.27    0.35   3.36   1.69   1.25   4.05   0.48   2.23

               ID       31A     32A     33A     34A    35A    36A    37A    38A    39A    40A
               Run 1    4.09   11.90    0.40    0.85   3.16   5.48   0.79   5.74   3.63   0.93
               Run 2    3.98   11.83    0.38    0.82   3.31   5.51   0.76   5.79   3.56   1.04




1.7.3    Comparison

In the present portfolio example the difference between the contributory capital of two
different types, namely analytic risk contributions and contribution to shortfall, should
be noticed, since even the order of the assets according to their risk contributions
changed. The asset with the largest shortfall contributions, 4A, is the one with the
second largest risk contribution and the largest risk contributions 14A goes with the
second largest shortfall contribution. A view at the portfolio shows that the shortfall
distributions is more driven by the relative asset size. Asset 14A has the largest default



24
                                                                             1.8   Summary

probability and higher R2 , i.e. systematic risk, than 4A whereas 4A has the second
largest exposure and the second largest default probability. Similar observation can be
done for the pair building third and fourth largest contributions, asset 1A and 32A. The
fifth and sixth largest contribution shows that shortfall risk assigns more capital to the
one with larger R2 since the other two parameter are the same. However this might be
caused by statistical fluctuations.
Also the shortfall contribution based on a threshold close to the 99.98% quantile produces
the same two largest consumer of capital, namely 4A and 14A.
However, it is always important to bear in mind that these results are still specific to
the given portfolio. Extended analysis will be carried out for different types of portfolios
in a future study. In these future studies different features might arise. On the lower
tranch of the contributory economic capital the two rankings coincide. The lowest is 8A,
the counterparty with the lowest correlation (around 13%) to all other members of the
portfolio and the smallest default probability, namely 0.0002. The following four lowest
capital user also have a default probability of 0.0002 but higher correlation, around 30%
to 40%. Counterparty 22A with the sixth lowest capital has a default probability of
0.0006 but a very small exposure and correlations around 20%. Hence both capital
allocation methods produce reasonable results.


1.7.4   Portfolio size

The main disadvantage of the simulation based methods are the sizes of the portfolio.
For example to get any reasonable number out of the contribution to shortfall risk it is
necessary that we observe enough losses in bad cases. Since there are around 1% bad
cases of all runs we are left with 10.000 bad scenarios if we had 1.000.000 simulations.
Since we have to ensure that each counterparty suffered losses in some of these 10.000
cases we arrive at a combinatorial problem. A way out of this for large portfolios
might be to look for capital allocation only to subportfolio instead of an allocation to
single counterparties. Since there will be a loss for a subportfolio in most of the bad
scenarios, i.e. because of the fluctuation of losses in a subportfolio, the results stabilize
with a smaller number of simulations. A detailed analysis of these subportfolio capital
allocation for large portfolio will be carried out in a forthcoming paper.


1.8     Summary

We presented three methods to allocate risk capital in a portfolio of loans. The first
method is based on the Variance/Covariance analysis of the portfolio. From a mathe-
matical point of view it assumes that the quantile of the loss distribution is a multiple
of the variance. This risk contributions are reasonable if the returns are normal dis-
tributed. However this is not the case of returns from loans. Since one either obtained




                                                                                          25
1     Allocation of Economic Capital in loan portfolios

the nominal amount of the loan at maturity or one obtains nothing1 . This binary fea-
tures motivates the search for other risk measures. One proposed risk measure are the
marginal risk contributions, which in our simulation study didn’t provide stable results.
A third method which also shares some properties of a coherent risk measure in the sense
of Artzner et al. (1997b) turned out to be stable for a reasonable number of simulations
for a portfolio of 40 loans. The observed differences with the risk contributions were
at a first view not very significant. But since even the order of the assets according
to their capital usage were changed we look further into some special assets. It turned
out that the shortfall contribtuions allocates higher capital to those counterparties with
higher exposures. It therefore puts more emphasis to name concentration. However this
might be caused by the small size of the portfolio. Shortfall contributions in connection
with the definition of shortfall risk prevents of course one phenomena observed for the
risk contributions, namely that the capital quota might exceed 100%. The disadvantage
of the shortfall contributions is that the computation requires Monte-Carlo-Simulation.
This method can be used for allocation of capital to subportfolios or if one is really
interested in capital allocation to each single transaction the procedure is restricted to
small portfolios.




 1
     In credit risk management one assumes usually a recovery rate, i.e. a percentage of the exposure that
      one recovers from defaulted loans. In the present paper this is set to 0.




26
                                                     1.8   Summary

Appendix

                         Portfolio


           Id    Default Probability     Exposure
           1A    0.0024                200,000,000
           2A    0.002                 200,000,000
           3A    0.002                 200,000,000
           4A    0.0063                146,250,000
           5A    0.0013                140,000,000
           6A    0.0008                110,000,000
           7A    0.002                 110,000,000
           8A    0.0002                100,000,000
           9A    0.0009                100,000,000
           10A   0.0013                100,000,000
           11A   0.0005                100,000,000
           12A   0.0008                100,000,000
           13A   0.0024                 83,250,000
           14A   0.0095                 82,500,000
           15A   0.0006                 81,562,500
           16A   0.0004                 70,000,000
           17A   0.0009                120,000,000
           18A   0.0006                 62,500,000
           19A   0.0006                 60,000,000
           20A   0.0002                 60,000,000
           21A   0.0016                 55,882,353
           22A   0.0006                 37,500,000
           23A   0.0004                 55,000,000
           24A   0.0002                 55,000,000
           25A   0.0017                 55,000,000
           26A   0.0005                 50,000,000
           27A   0.001                  50,000,000
           28A   0.0019                 50,000,000
           29A   0.0002                 50,000,000
           30A   0.0012                 45,454,545
           31A   0.0014                115,000,000
           32A   0.0079                 44,288,136
           33A   0.0002                 43,750,000
           34A   0.0007                 42,000,000
           35A   0.0034                 37,500,000
           36A   0.0031                 37,000,000
           37A   0.0004                 35,000,000
           38A   0.0034                 35,000,000
           39A   0.0031                 30,000,600
           40A   0.0004                 30,000,000




                                                                27
                                                                                                           Table 1.1: Asset correlation
                                                           2A     3A     4A     5A     6A     7A     8A       9A    10A    11A    12A    13A    14A    15A    16A    17A    18A    19A    20A    21A
                                                     1A   0.52   0.52   0.47   0.45   0.48   0.48   0.14     0.45   0.44   0.44   0.37   0.50   0.48   0.41   0.44   0.37   0.43   0.39   0.40   0.38
                                                     2A          0.52   0.49   0.46   0.49   0.49   0.15     0.45   0.44   0.44   0.38   0.50   0.50   0.42   0.44   0.38   0.45   0.40   0.40   0.41
Allocation of Economic Capital in loan portfolios




                                                     3A                 0.48   0.46   0.48   0.48   0.15     0.46   0.44   0.45   0.38   0.50   0.49   0.42   0.45   0.37   0.43   0.40   0.40   0.37
                                                     4A                        0.42   0.45   0.46   0.12     0.41   0.41   0.40   0.34   0.46   0.45   0.38   0.41   0.35   0.42   0.36   0.37   0.39
                                                     5A                               0.42   0.42   0.12     0.40   0.40   0.39   0.33   0.45   0.42   0.37   0.39   0.32   0.38   0.34   0.36   0.31
                                                     6A                                      0.46   0.11     0.42   0.41   0.39   0.34   0.46   0.45   0.38   0.41   0.35   0.42   0.36   0.37   0.40
                                                     7A                                             0.12     0.42   0.41   0.40   0.34   0.46   0.45   0.38   0.41   0.35   0.43   0.36   0.38   0.40
                                                     8A                                                      0.13   0.12   0.15   0.16   0.16   0.15   0.17   0.12   0.10   0.11   0.26   0.10   0.04
                                                     9A                                                             0.38   0.39   0.33   0.44   0.42   0.37   0.39   0.32   0.38   0.34   0.35   0.32
                                                    10A                                                                    0.37   0.32   0.43   0.41   0.35   0.37   0.32   0.37   0.33   0.35   0.32
                                                    11A                                                                           0.33   0.43   0.41   0.37   0.38   0.31   0.36   0.34   0.33   0.29
                                                    12A                                                                                  0.37   0.35   0.31   0.32   0.26   0.31   0.31   0.29   0.25
                                                    13A                                                                                         0.47   0.40   0.43   0.36   0.42   0.39   0.39   0.35
                                                    14A                                                                                                0.39   0.41   0.36   0.41   0.38   0.36   0.37
                                                    15A                                                                                                       0.36   0.30   0.35   0.35   0.32   0.30
                                                    16A                                                                                                              0.32   0.37   0.33   0.34   0.33
                                                    17A                                                                                                                     0.32   0.28   0.28   0.31
                                                    18A                                                                                                                            0.34   0.34   0.40
                                                    19A                                                                                                                                   0.30   0.28
                                                    20A                                                                                                                                          0.29




                                                                                                                                                                                                        28
1
Summary




                                                                                                                                                     29
                                                          Table 1.2: Asset correlation
1.8




                22A    23A    24A    25A    26A    27A    28A    29A    30A    31A    32A    33A    34A    35A    36A    37A    38A    39A    40A
           1A   0.28   0.51   0.35   0.46   0.53   0.36   0.49   0.43   0.44   0.45   0.49   0.39   0.32   0.33   0.48   0.40   0.49   0.39   0.47
           2A   0.30   0.52   0.35   0.47   0.55   0.37   0.50   0.45   0.45   0.46   0.50   0.40   0.35   0.34   0.49   0.41   0.49   0.39   0.48
           3A   0.27   0.52   0.36   0.46   0.54   0.37   0.50   0.44   0.45   0.45   0.50   0.40   0.32   0.33   0.48   0.41   0.50   0.41   0.47
           4A   0.29   0.47   0.32   0.43   0.51   0.34   0.45   0.41   0.40   0.42   0.45   0.36   0.33   0.32   0.45   0.37   0.44   0.35   0.45
           5A   0.22   0.47   0.34   0.40   0.47   0.33   0.47   0.39   0.40   0.40   0.44   0.35   0.26   0.29   0.43   0.35   0.43   0.38   0.41
           6A   0.29   0.47   0.32   0.43   0.51   0.34   0.45   0.41   0.40   0.43   0.45   0.36   0.33   0.32   0.45   0.37   0.44   0.35   0.45
           7A   0.29   0.47   0.32   0.44   0.51   0.35   0.46   0.42   0.41   0.43   0.46   0.36   0.33   0.32   0.45   0.37   0.45   0.35   0.45
           8A   0.03   0.15   0.11   0.13   0.15   0.08   0.14   0.10   0.13   0.12   0.15   0.13   0.06   0.08   0.14   0.23   0.16   0.16   0.13
           9A   0.24   0.45   0.31   0.40   0.47   0.32   0.44   0.38   0.39   0.39   0.43   0.35   0.27   0.29   0.42   0.35   0.43   0.35   0.41
          10A   0.24   0.44   0.30   0.39   0.46   0.32   0.43   0.37   0.39   0.38   0.42   0.34   0.27   0.28   0.42   0.35   0.42   0.34   0.40
          11A   0.21   0.44   0.30   0.39   0.45   0.31   0.43   0.37   0.38   0.37   0.42   0.35   0.25   0.28   0.41   0.35   0.44   0.35   0.39
          12A   0.18   0.38   0.26   0.33   0.39   0.26   0.36   0.31   0.33   0.32   0.36   0.30   0.22   0.24   0.35   0.32   0.37   0.30   0.34
          13A   0.26   0.50   0.35   0.44   0.52   0.35   0.48   0.42   0.44   0.43   0.48   0.39   0.30   0.32   0.47   0.40   0.48   0.39   0.45
          14A   0.27   0.48   0.33   0.44   0.51   0.34   0.46   0.42   0.42   0.43   0.46   0.37   0.31   0.31   0.45   0.39   0.46   0.37   0.44
          15A   0.22   0.42   0.28   0.37   0.43   0.29   0.40   0.35   0.36   0.36   0.40   0.33   0.26   0.27   0.39   0.36   0.41   0.33   0.38
          16A   0.24   0.44   0.30   0.39   0.46   0.31   0.42   0.37   0.38   0.38   0.42   0.34   0.28   0.29   0.41   0.34   0.42   0.34   0.40
          17A   0.23   0.36   0.25   0.34   0.39   0.27   0.35   0.32   0.32   0.33   0.35   0.28   0.26   0.24   0.35   0.29   0.34   0.27   0.34
          18A   0.29   0.42   0.28   0.40   0.47   0.31   0.40   0.38   0.36   0.39   0.41   0.32   0.33   0.30   0.41   0.35   0.40   0.31   0.42
          19A   0.20   0.39   0.27   0.35   0.41   0.27   0.38   0.32   0.34   0.34   0.38   0.31   0.25   0.25   0.37   0.39   0.38   0.32   0.36
          20A   0.21   0.41   0.27   0.35   0.42   0.30   0.39   0.34   0.36   0.35   0.39   0.30   0.24   0.26   0.38   0.31   0.37   0.30   0.37
          21A   0.35   0.35   0.21   0.37   0.44   0.28   0.31   0.36   0.29   0.36   0.35   0.26   0.39   0.28   0.37   0.29   0.33   0.21   0.41
          22A          0.26   0.16   0.27   0.32   0.21   0.23   0.26   0.21   0.27   0.25   0.19   0.29   0.20   0.27   0.21   0.24   0.15   0.30
          23A                 0.36   0.46   0.53   0.37   0.51   0.43   0.46   0.44   0.50   0.40   0.30   0.33   0.48   0.40   0.50   0.41   0.46
          24A                        0.31   0.36   0.25   0.37   0.29   0.31   0.30   0.34   0.28   0.18   0.22   0.32   0.28   0.34   0.32   0.31
          25A                               0.49   0.33   0.43   0.40   0.39   0.41   0.44   0.35   0.31   0.30   0.43   0.36   0.43   0.34   0.43
          26A                                      0.39   0.51   0.47   0.46   0.47   0.51   0.40   0.37   0.36   0.51   0.42   0.50   0.40   0.50
          27A                                             0.35   0.32   0.32   0.32   0.35   0.28   0.24   0.24   0.35   0.28   0.34   0.27   0.34
          28A                                                    0.41   0.43   0.43   0.48   0.39   0.27   0.32   0.46   0.39   0.48   0.43   0.44
          29A                                                           0.37   0.39   0.42   0.33   0.30   0.29   0.41   0.34   0.41   0.32   0.41
          30A                                                                  0.38   0.43   0.35   0.25   0.28   0.42   0.35   0.43   0.35   0.39
          31A                                                                         0.42   0.34   0.31   0.30   0.42   0.35   0.42   0.33   0.42
          32A                                                                                0.38   0.29   0.32   0.46   0.39   0.47   0.38   0.44
          33A                                                                                       0.22   0.25   0.37   0.31   0.39   0.32   0.35
          34A                                                                                              0.23   0.31   0.26   0.28   0.18   0.34
          35A                                                                                                     0.31   0.26   0.31   0.24   0.31
          36A                                                                                                            0.38   0.46   0.36   0.44
          37A                                                                                                                   0.39   0.33   0.37
          38A                                                                                                                          0.39   0.44
          39A                                                                                                                                 0.34
1    Allocation of Economic Capital in loan portfolios

Bibliography

Artzner, P., Dealban, F., Eber, J. & Heath, D. (1997a). Credit risk - a risk special
    supplement, RISK MAGAZINE 7.

Artzner, P., Dealban, F., Eber, J. & Heath, D. (1997b). Thinking coherently, RISK
    MAGAZINE .

Baestaens, D. & van den Bergh, W. M. (1997). A portfolio approach to default risk,
    Neural Network World 7: 529–541.

Credit Metrics (1997). Technical report, J.P. Morgan & Co.

Embrechts, P., Klüppelberg, C. & Mikosch, T. (1997). Modelling Extremal Events,
   Springer, Berlin.

Fingers, C. (1999). Conditional approaches for creditmetrics portfolio distribution, Cred-
    itMetrics Monitor .

Kealhofer, S. (1995). Managing default risk in portfolio of derivatives, Derivative Credit
    Risk: Advances in Measurement and Management, Renaissance Risk Publications .

Kealhofer, S. & Crosbie, P. (1997). Modeling portfolio risk, internal document, Technical
    report, KMV Corporation, San Francisco.

Markowitz, H. M. (1952). Portfolio selection, Journal of Finance 7.

Merton, R. (1974). On the pricing of corporate debt: The risk structure of interest rates,
    The Journal of Finance 29: 449–470.

Overbeck, L. & Stahl, G. (1997). Stochastische Methoden im Risikomanagement des
    Kreditportfolios, Oehler.

Risk, C. (1997). A credit risk management framework, Technical report, Credit Suisse
     Financial Products.

Schmid, B. (1997). Creditmetrics, Solutions 1(3-4): 35–53.

Sharpe, W. (1964). Capital asset prices: A theory of market equilibrium under conditions
    of risk, Journal of Finance 19.

Vasicek, O. A. (1997). Credit valuation, Net Exposure 1.

Wilson, T. (1997). Portfolio credit risk (i+ii), Risk Magazine 10.




30
2 Estimating Volatility for Long Holding
  Periods
                                     Rüdiger Kiesel, William Perraudin and Alex Taylor




2.1    Introduction

The problem of estimating volatility is one of the most important topics in modern
finance. Accurate specification of volatility is a prerequisite for modelling financial time
series, such as interest rates or stocks, and crucially affects the pricing of contingent
claims. Modelling volatility has therefore be widely discussed in the financial literature,
see Campbell, Lo & MacKinlay (1997), chapter 12, Shiryaev (1999), chapter 4, or Taylor
(1986), chapter 3 for overviews on the subject. The main focus in these studies has
been to estimate volatility over short time periods and deduce results for longer period
volatility from underlying models.
In this note, we address the problem of estimating volatility over longer time intervals di-
rectly. Recently several attempts have been made to examine this problem, most notably
work                        by                       Andersen                       (1998),
Andersen, Bollerslev, Diebold & Labys (1999), who use intraday observations to estimate
the           distribution           of           daily         volatility,             and
Drost & Nijman (1993), Drost & Werker (1996), who consider temporal aggregation
of GARCH processes. In contrast to these approaches we do not assume any underlying
parametric model for the data generating processes. Our only assumption is that the
data generating process is first-difference stationary. The model free approach leads to
an estimator, which is insensitive to short-period contamination and only reacts to effects
relevant to the time period in question. Applications of the proposed estimator can be
found in Cochrane (1988), who used the estimator to obtain a measure of the persistence
of fluctuations in GNP, and Kiesel, Perraudin & Taylor (1999), who estimated the long
term variability of credit spreads.
Related to our estimation problem are so-called moment ratio tests, which are frequently
used to investigate the (weak) efficiency of financial markets, see Campbell et al. (1997),
chapter 1, or Pagan (1996) for surveys and Lo & MacKinlay (1988) and Groenendijk,
Lucas & de Vries (1998) for applications related to this investigation.
The motivation behind the estimator is as follows. From the assumption that the data



                                                                                         31
2    Estimating Volatility for Long Holding Periods

generating process xt is first-difference stationary (i.e. contains a unit root), we obtain
from Wold’s decomposition (see e.g. Fuller (1996), §2.10) an infinite moving average
representation
                                                     X∞
                            ∆xt = xt − xt−1 = µ +         aj t−j .                   (2.1)
                                                          j=0

Using this representation a result by Beveridge & Nelson (1981) implies that xt can be
represented as the sum of a stationary and a random walk component, i.e

                                           xt = yt + zt                               (2.2)

where
                                                              
                            ∞
                            X                X∞              X∞
              − yt =             aj  t +    aj  t−1 +    aj  t−2 + . . .     (2.3)
                            j=1                j=2              j=3
                                        
                                   X∞
                zt   = µ + zt−1 +    aj  t ,                                       (2.4)
                                         j=0

with (t ) a sequence of uncorrelated (0, σ 2 ) random variables.
The long-period behaviour of the variance of the process xt may differ substantially for
processes with representation (2.2). This becomes of particular importance for valua-
tion of contingent claims and, in case of interest rate models, for bond pricing, since
the pricing formulae crucially depend on the volatility. Since, in general, the long-term
behaviour of the variance of xt is dominated by the variance of the random walk com-
ponent, the use of a volatility estimator based on daily time intervals to contingent
claims/bonds longer time to maturity may lead to substantial pricing errors. In the
next section, we introduce the estimator and discuss some of its properties. We perform
Monte Carlo experiments to illustrate the properties of the estimator in section 3. In
section 4 we apply it to estimate long holding period variances for several interest rate
series. By analysing the quotient of long-term to short-term variances (variance ratio)
we can infer the magnitude of the random walk component in the short term interest
rate process. This has implications for the appropriate modelling of the short rate and
relates to recent results on the empirical verification of various short-term interest rate
models, see Bliss & Smith (1998), Chan, Karolyi, Longstaff & Saunders (1992). Section
5 concludes.


2.2      Construction and Properties of the Estimator

We start with a general representation of a first-difference stationary linear process as
the sum of a stationary and a random walk component, i.e

                                           xt = yt + zt                               (2.5)



32
                                      2.2   Construction and Properties of the Estimator

with

                                   yt = B(L)δt                                         (2.6)
                                   zt = µ + zt−1 + t ,                                (2.7)

with B(L) a polynomial in the lag operator Lδt = δt−1 , (t ) uncorrelated, (0, σ 2 ) random
variables, and IE(t δt ) arbitrary. Such a decomposition implies that IEt (xt+k ) ≈ zt + kµ.
In that sense we call zt the permanent and yt the temporary component of xt (compare
also Campbell et al. (1997) for a related model and interpretation). This suggests that
the long term variability of xt is also dominated by the innovation variance σ∆z    2 of the

random walk component. Utilizing the Beveridge & Nelson (1981) decomposition of a
process xt given by (2.5) one can show that the innovation variance σ∆z      2 is invariant

to the particular decomposition of type (2.5) chosen (in particular, only the Beveridge-
Nelson decomposition is guaranteed to exist, see also Cochrane (1988)). To make the
above arguments on the importance of the innovation variance more precise, consider
the k−period variability. A standard argument (compare §2.1) shows
                                                         k−1
                                                         X
                         VV art (xt+k − xt ) = kγ0 + 2         (k − j)γj ,             (2.8)
                                                         j=1

with γj the autocovariances of the stationary process (∆xt ) = (xt − xt−1 ). Then
                                                        
                                            k−1
           1                                X   (k − j)  2
      lim VV art (xt+k − xt ) = lim 1 + 2             ρj σ∆x = S∆x (e−i0 ),      (2.9)
     k→∞ k                      k→∞                k
                                               j=1


where ρj are the autocorrelations and S∆x (e−iω ) is the spectral density function at
frequency ω of (∆xt ). A further application of the Beveridge-Nelson decomposition
implies
                                 S∆x (e−i0 ) = σ∆z
                                                2
                                                   .                            (2.10)
Therefore, in order to estimate σ∆z2 we could use an estimator of the spectral density

at frequency zero. However, estimating the spectral density function at low frequencies
is extremely difficult and involves a trade-off between bias and efficiency of the estima-
tor (see e.g. Fuller (1996) §7.3 for such estimators and their properties). So, rather
than relying on estimators for the spectral density function, we proceed directly with
an estimator suggested by (2.8)-(2.10). In particular, (2.8) suggests to replace the au-
tocovariance functions with their sample estimators and then employ well-known limit
theorems for the sample autocovariances.


2.2.1   Large Sample Properties

In order to use (2.8), we recall that, under our assumptions, ∆x is a covariance stationary
process and, as such, has a moving average representation (2.1). Limit theorems for the



                                                                                          33
2    Estimating Volatility for Long Holding Periods

sample autocovariances of such processes have been studied extensively (see Davis &
Resnick (1986), Embrechts, Klüppelberg & Mikosch (1997) §7, Fuller (1996), §6) and we
intend to utilize some of these results (much the same way as Lo & MacKinlay (1988)
did). Let us start by expressing the basic estimator
                                  T                           2
                         2    1 X                   k
                       σ̄k =          (xj − xj−k ) − (xT − x0 )                  (2.11)
                             Tk                     T
                                    j=k

in a different form. Define ˆj = xj − xj−1 − T1 (xT − x0 ) then (2.11) becomes
                           T
                               " k                                     #2
                       1  X     X                          1
              σ̄k2 =               (xj−k+l − xj−k+l−1 − (xT − x0 ))
                      Tk                                   T
                            j=k   l=1

                          T
                            " k                    #2
                        1 X X
                   =                     ˆj−k+l
                       Tk
                            j=k   l=1
                          T −k
                               " k           k−1
                                                                                      #
                        1 X X 2              X
                   =               ˆj+l + 2     ˆj+l ˆj+l+1 + . . . + 2ˆj+1 ˆj+k
                       Tk
                            j=0    l=1                  l=1

                                  (k − 1)                2
                   = γ̂(0) + 2            γ̂(1) + . . . + γ̂(k − 1) + o (.)
                                     k                   k
where
                                                         T −h
                                                 1 X
                                         γ̂(h) =     ˆj ˆj+h
                                                 T
                                                         j=0
and o (.) specifies an error term in probability depending on the distribution of the
innovations. Define the vector γ̂ = (γ̂(0), . . . , γ̂(k − 1))0 , then we can write
                                           σ̄k2 = l0 γ̂ + o (.)                           (2.12)
with l the k-dimensional vector l = (1, 2 (k−1)            2 0
                                               k , . . . , k ) . We therefore can use limit theo-
rems on the asymptotic distribution of γ̂ to deduce the asymptotic distribution of our
estimator σ̄k2 . These limit theorems depend crucially on the distribution of the innova-
tions  in (2.1). If IE(4 ) < ∞, the limit distribution of γ̂ is Gaussian, see e.g. Brockwell
& Davis (1991), §7.3,§13.3, Fuller (1996) §6.3. If IE(4 ) = ∞, σ2 < ∞ (and further
regularity conditions are satisfied), the limit distribution consists of a stable random
variable multiplied by a constant vector, see Davis & Resnick (1986) and Embrechts
et al. (1997) §7.3 for details. Hence, in the first case the asymptotic distribution of σ̄k2
will be Gaussian, while in the second case it will asymptotically be distributed according
to a stable law.


2.2.2    Small Sample Adjustments

In small samples, the estimator (2.11) exhibits a considerable bias. To discuss possible
adjustments we assume that the data generating process is a pure unit root process, i.e.



34
                                            2.2       Construction and Properties of the Estimator

equation (2.5) becomes
                                          ∆xt = ∆zt = µ + t                                          (2.13)
with (t ) uncorrelated (0, σ 2 ) random variables. So we can write the numerator of the
estimator (2.11)
                              T                              2
                              X                    k
                    Nσ =             (xj − xj−k ) − (xT − x0 )
                                                   T
                              j=k
                               T            k−1                                  T −1
                                                                                                !!2
                              X             X            k                       X
                          =          kµ +         j−ν −            Tµ +                T −ν
                                                         T
                              j=k           ν=0                                  ν=0
                              T           n               T
                                                                        !2
                              X           X              kX
                          =                       ν −             ν        .
                                                         T
                              j=k    ν=n−k+1                 ν=1

                   Pj
Defining Zj,k =       ν=j−k+1 ν and using the fact that the ν are uncorrelated we get

                           T 
                                                             k2
                                                                                                  
                           X
                                     2      2k                      2
             IE(Nσ ) =           IE(Zj,k ) − IE(Zj,k ZT,T ) + 2 IE(ZT,T )
                                                  T                              T
                           j=k
                                    T 
                                               2k 2 k        2
                                                               
                                    X                                                      k
                        = IE(2 )         k−       +               = σ 2 (T − k + 1)(T − k) .
                                                T    T                                     T
                                    j=k

So in order to get an unbiased estimator for σ 2 using the quantity Nσ we have to multiply
it by
                                            T
                                                         ,
                                   k(T − k + 1)(T − k)
which is just the adjustment proposed by Cochrane (compare Cochrane (1988)) and
leads to
                                       T                          2
               2            T          X                k
             σ̂k =                        (xj − xj−k ) − (xT − x0 ) .     (2.14)
                   k(T − k)(T − k + 1)                  T
                                                  j=k

If we assume that the innovations in (2.13) are uncorrelated and the fourth moment
exists, we can use the asymptotic equivalence of the estimators (2.11) and (2.14) to
deduce the weak convergence1
                       √
                         T (σ̂k2 − σ 2 ) ⇒ N (0, σ 4 ((2k 2 + 1)/3k)).        (2.15)

If, however, the last existing moment of the innovations in (2.13) is of order α, where
2 < α < 4, i.e the variance exists, but the fourth moment is infinite, we have the weak
convergence                                      √
                                   C(T, α)σ̂k2 ⇒ kS,                              (2.16)
 1
     We denote weak convergence by ”⇒”.




                                                                                                         35
2      Estimating Volatility for Long Holding Periods

where S is a stable random variable with index α/2 and C(T, α) a constant depending
on the T and the tail behaviour of the innovations, which is related to the index α. (The
relevant asymptotic result for the autocovariances is Theorem 2.2 in Davis & Resnick
(1986), where the exact values of the constants to be used to construct the vector l
in (2.12) can be found). If we drop the assumption (2.13), the limit laws remain of
the same type. However, the variances change considerably since they depend on the
autocovariances of the process.2

                             σ̂k2 a    s.e.     s.e.    σ̂k2 b    s.e. s.e. c         σ̂k2 d   s.e. s.e. e

                     wf     0.999 0.048 0.048          0.860 0.039         0.040    1.169 0.057        0.059
                     m      0.999 0.096 0.094          0.835 0.077         0.078    1.120 0.115        0.117
                     q      0.997 0.167 0.163          0.830 0.137         0.136    1.206 0.199        0.202
                     y      0.991 0.347 0.333          0.822 0.288         0.278    1.212 0.422        0.411

                             Table 2.1: Model with i.i.d. Gaussian innovations
          a                                         2
            model: ∆xt = t with t ∼ N (0, 1) and σ∆Z = 1. First s.e. column are always Monte-Carlo,
             second s.e. column are asymptotic s.e. assuming existence of the fourth moment.
                                                                          2
          b                                                   2
            model: ∆xt = a∆xt−1 + t with t ∼ N (0, 1) and σ∆z   = 1−a 1
                                                                              σ2 , here σ∆z
                                                                                          2
                                                                                             = 0.826
          c
            Adjusted for AR(1)-covariance structure
          d                                                 2
            model: ∆xt = t + at−1 with t ∼ N (0, 1) and σ∆z = (1 − a)2 σ2 , here σ∆z
                                                                                      2
                                                                                         = 1.21
          e
            Adjusted for MA(1)-covariance structure
          f
            w=week, m=month, q=quarter, y=year




2.3           Monte Carlo Illustrations

In this section, we illustrate our estimating procedure using simulated time series. We
consider three basic settings of first-difference stationary sequences with representation
(2.1). First, as a benchmark case, we consider a pure random walk with representation
as in (2.13). To study the effect of non-zero autocovariances of the series (∆x) on the
asymptotic standard error, we simulate two further series, namely a sequence, whose
first-difference follows an autoregressive model of order one (AR(1)-model) implying an
infinite order moving average representation and on the other hand, a sequence, which
has first-differences allowing a moving average representation of order one (MA(1)).
These settings imply that the error terms in (2.5) are perfectly correlated. The AR-model
corresponds to a ‘small’ random walk component (in our setting it accounts for roughly
70% of variability of (xk ) in (2.5)). The MA-model, on the other hand, corresponds to a
 2
     For                              4         4                                     ˆ γ(q))
                                                                                          ˆ        = (η − 3)γ(p)γ(q) +
      P∞instance in case the IE( ) = ησ we have limn→∞ C                    Cov(γ(p)
                                                                                    0
         k=−∞  [(γ(k)γ(k − p + q) − γ(k + q)γ(k −  p)]  and thus (γˆ1 , . . . , γ
                                                                                ˆk )  ∼ N ((γˆ1 , . . . , γˆk )0 , T −1 V ), where
      V is the covariance matrix (see Brockwell & Davis (1991), §7.3). This implies an asymptotic standard
      normal distribution of σˆk2 with variance l0 V l.




36
                                                                   2.3     Monte Carlo Illustrations

‘large’ random walk component, the innovation variance of the random walk component
(zk ) in (2.5) is larger (due to dependence) than the innovation variance of the series (xk ).

                     σ̂k2 a   s.e.   s.e.   σ̂k2 b   s.e. s.e.c   σ̂k2 d   s.e. s.e.e

               wf   2.980 0.962 0.144       2.555 0.644 0.120     3.507 1.388 0.1779
               m    2.977 0.983 0.283       2.483 0.667 0.237     3.602 1.458 0.349
               q    2.970 1.023 0.490       2.467 0.753 0.490     3.618 1.467 0.605
               y    2.992 1.406 1.000       2.464 1.107 0.834     3.621 1.868 1.234

                         Table 2.2: Model with i.i.d. t(3) innovations
     a                                       2
       model: ∆xt = t with t ∼ t(3) and σ∆Z    = 3. First s.e. column are always Monte-Carlo,
        second s.e. column are asymptotic s.e. assuming existence of the fourth moment.
                                                                 2
     b                                                2
       model: ∆xt = a∆xt−1 + t with t ∼ t(3) and σ∆z   = 1−a 1
                                                                     σ2 , here σ∆z
                                                                                 2
                                                                                    = 2.479
     c
       Asymptotic standard error, adjusted for AR(1)-covariance structure
     d                                             2
       model: ∆xt = t + at−1 with t ∼ t(3) and σ∆z = (1 − a)2 σ2 , here σ∆z
                                                                             2
                                                                                = 3.63
     e
       Asymptotic standard error, adjusted for MA(1)-covariance structure
     f
       w=week, m=month, q=quarter, y=year



For each of these series, we consider three types of innovation process. As a stan-
dard model we consider i.i.d. Gaussian innovations. Then we investigate the effect of
heavy-tailed innovations using i.i.d. Student t(3) innovations, and finally to discuss (sec-
ond order) dependence we use GARCH(1,1)-innovations. Each experiment consisted of
generating a series of length 3000 (with coefficients in line with coefficients obtained
performing the corresponding ARIMA (-GARCH) for the series used in §4) and was
repeated 5000 times. We report the mean of long-period volatility estimators for periods
of length k = 5, 20, 60, 250 (weeks, month, quarters, years) together with standard er-
rors (s.e.) computed from the Monte-Carlo simulations and according to the asymptotic
results for an underlying pure unit root process with an existing fourth moment.
In line with the asymptotic consistency of the estimator ˆk 2 (compare 2.8) the estimated
value converges towards the true value of the innovation variance of the random walk
component in all cases. For Gaussian and GARCH innovation (cases for which the
appropriate limit theory holds) the asymptotic standard errors are in line with the
observed Monte Carlo errors. As expected the asymptotic standard errors (calculated
under the assumption of an existing fourth moment) become unreliable for heavy tailed
innovation, i.e. simulations based on t(3) innovations.
Since for shorter series the asymptotic standard error becomes unreliable we also tested
various bootstrap based methods. Motivated by the application we have in mind we
concentrated on series with length 1000 and standard normal or GARCH innovations. It
turned out, that fitting a low-order AR-model to the simulated time series and resampling
from the residuals produced satisfactory bootstrap standard errors.




                                                                                                  37
2    Estimating Volatility for Long Holding Periods




                      σ̂k2 a     s.e.    s.e.   σ̂k2 b   s.e. s.e.c        σ̂k2 d   s.e. s.e.e

                 wf   4.078 0.278 0.192         3.505 0.237      0.161     4.770 0.324 0.237
                 m    4.066 0.437 0.378         3.390 0.370      0.315     4.887 0.528 0.466
                 q    4.037 0.710 0.653         3.348 0.595      0.545     4.897 0.871 0.806
                 y    4.004 1.442 1.333         3.323 1.187      1.113     4.903 1.767 1.645

                      Table 2.3: Model with GARCH(1,1) innovations
      a                                              2
        model: ∆xt = t with t ∼ GARCH(1, 1) and σ∆Z   = 0.004. First s.e. column are always
         Monte-Carlo, second s.e. column are asymptotic s.e. assuming existence of the fourth
         moment.
                                                                            2
      b                                                         2
        model: ∆xt = a∆xt−1 + t with t ∼ GARCH(1, 1) and σ∆z     = 1−a 1
                                                                                σ2 , here σ∆Z
                                                                                            2
                                                                                               =
         0.003306
      c
        Adjusted for AR(1)-covariance structure
      d                                                    2
        model: ∆xt = t +at−1 with t ∼ GARCH(1, 1) and σ∆z = (1 − a)2 σ2 , here σ∆Z2
                                                                                         = 0.0484
      e
        Adjusted for MA(1)-covariance structure
      f
        w=week, m=month, q=quarter, y=year




                                         lag 60                              lag 250
                Model
                               σ̂k2 a    B-s.e. A-s.e.              σ̂k2    B-s.e. A-s.e.

               RWb         0.950        0.263            0.286     1.015        0.359     0.583
               AR(1)       0.820        0.277            0.253    0.9314        0.668     0.823
               MA(1)       1.199        0.349            0.363     1.270        0.816     0.841

               RWc         3.886        1.163            1.117      3.997       2.634     2.366
               AR(1)       3.282        0.960            0.952      3.041       1.887     1.926
               MA(1)       4.702        1.311            1.395      4.814       2.823     2.946

                      Table 2.4: Bootstrap estimates of standard errors
      a
         All on a time series of length 1000 with 5000 bootstrap resamples, parameters chosen as
          above
       b
         standard Normal innovations
       c
         GARCH-Innovations, values multiplied by 103




38
                                                                                         2.4   Applications

2.4        Applications

Empirical comparisons of continuous-time models of the short-term interest rate have
recently been the focus of several studies, see e.g. Bliss & Smith (1998), Broze, Scaillet
& Zakoian (1995), Chan et al. (1992), Dankenbring (1998). In these studies the general
class of single-factor diffusion models

                                     dr = (µ − κr)dt + σrγ dW,                                       (2.17)

with constant coefficients and W a standard Brownian motion has been compared. We
will consider the subclass, where we restrict the parameter γ to take one of the values
0, 1/2 or 1, so e.g. the Vasicek and the Cox-Ingersoll-Ross model are included. The
discrete-time analog of this model class is

                               rt − rt−1 = α + βrt−1 + t                                            (2.18)
                                                                              2γ
                            IE(t |Ft−1 ) = 0,          IE(2t |Ft−1 ) = σ 2 rt−1 ,

with Ft the information set at time t. A model like this will generate a time series within
our framework if β = 0. If we focus on the unconditional long-term variance a standard
calculation shows, that we have the following asymptotic relations (under β = 0)

                                        γ=0         VV ar(rt ) ∼ t
                                        γ = 12      VV ar(rt ) ∼ t2
                                        γ=1         VV ar(rt ) ∼ ect

(c a constant). Using the Cochrane-type estimator we can compare the observed long-
term variances with variances predicted from the model setting. We apply this idea to
three short-term (7 day-maturity) interest rate series. The rates we use are US EURO-
DOLLAR (with 3512 observations from 01.01.85 – 18.06.98), UK EURO-POUND (with
3401 observations from 01.01.85 – 13.01.98), and German EURO-MARK (with 1222
observations from 09.01.95 – 14.09.99).

               rate                              σ̂12        σ̂52        2
                                                                       σ̂20         2
                                                                                  σ̂60       2
                                                                                           σ̂250

              US EURO-DOLLAR     0.0537 0.0438 0.0149 0.0077 0.0092
                              (0.0055a ) (0.0092) (0.0107) (0.0022) (0.0051)
              UK EURO-POUNDS$    0.0439 0.0293 0.0189 0.0169 0.0212
                               (0.0051) (0.0076) (0.0123) (0.0080) (0.0118)
              GER EURO-MARK$     0.0059 0.0048 0.0015 0.0013 0.0018
                               (0.0031) (0.0029) (0.0009) (0.0008) (0.0008)

                                  Table 2.5: Short rate volatilities
      a
          For lags 1 to 20 s.e are based on asymptotic calculations, for lags 60 and 250 s.e. are
           bootstrap based




                                                                                                        39
2     Estimating Volatility for Long Holding Periods

To ensure the validity of the assumption β = 0 we performed various tests for unit
roots and stationarity3 . For all series we can’t reject the presence of a unit root at a
10% significance level, whereas stationarity of the series is rejected at the 1% significance
level. Applying these tests again to the first-difference of the series indicated no evidence
of a unit root in the differenced series. The combination of these test results allows us
to conclude the series should be modelled as first-difference stationary and fit into our
framework.
We report the results for the interest series in table (2.5). From a model-free point of
view (that is within the general framework (2.5)) these results indicate, that using the
one-day volatility estimate will seriously overestimate longer term volatility.




                                 1.0

                                                                                   UKrate
                                                                                   USrate
                                 0.8                                               GYrate
          Var(k-periods)/k Var




                                 0.6




                                 0.4




                                 0.2




                                 0.0
                                        0         50        100        150       200        250


                                       Figure 2.1: Variance-Ratios for short-term interest rates


Turning to the question of modelling short-term interest rates within the class of one-
factor diffusion models we calculate and plot the ratio of the volatility calculated over
a longer holding period to that calculated over one day multiplied by k (see figure 1).
For all rates considered the ratios are downward slopping for short holding periods (the
 3
     For the unit root tests we used the augmented Dickey-Fuller and Phillips-Perron procedures and for
      testing stationarity the Kwiatkowski-Phillips-Schmidt-Sin test (see Maddala & Kim (1998) chapters
      3 and 4 for a description and discussion of these tests)




40
                                                                           2.5   Conclusion

mean-reverting component dies off). After a period of stability the variance ratio begin
to increase linearly showing a behaviour roughly in line with the asymptotics of a Cox-
Ingersoll-Ross model.


2.5     Conclusion

We presented a non-parametric method to estimate long-term variances and the magni-
tude of the unit root process in various interest rates. Our results suggest that calculating
long-term variances on the basis of short-term variance estimates will overestimate long-
term variances. Our results further indicate that within the one-factor diffusion short
rate model class square-root type processes model the behaviour of long-term variances
of short rates best. Models, which assume that the short rate follows a mean-reverting
process and thus omit a unit root component in the data generating process will lead to
an underestimating of long-term variances, since for longer time horizons the unit-root
component of the interest-rate process becomes dominant. Our findings support a model
of Cox-Ingersoll Ross type without a mean-reverting component.




Bibliography

Andersen, T., Bollerslev, T., Diebold, F. & Labys, P. (1999). The distribution of ex-
    change rate volatility, Technical report, Wharton School, University of Pennsylvania,
    Financial Institutions Center.

Andersen, T.G.and Bollerslev, T. (1998). DM-Dollar volatility: Intraday activity pat-
    terns, macroeconomic announcements, and longer-run dependencies, Journal of Fi-
    nance 53: 219–265.

Beveridge, S. & Nelson, C. (1981). A new approach to decomposition of economic
    time series into permanent and transitory components with particular attention to
    measurement of the business cycle, J. Monetary Economics 7: 151–174.

Bliss, R. & Smith, D. (1998). The elasticity of interest rate volatility – Chan,
     Karolyi,Longstaff and Sanders revisited, Journal of Risk 1(1): 21–46.

Brockwell, P. & Davis, R. (1991). Times series: Theory and methods, 2 edn, Springer.

Broze, L., Scaillet, O. & Zakoian, J. (1995). Testing for continuous-time models of the
    short-term interest rate, J. Empirical Finance 2: 199–223.

Campbell, J., Lo, A. & MacKinlay, A. (1997). The econometrics of financial markets,
   Princeton University Press.




                                                                                          41
2    Estimating Volatility for Long Holding Periods

Chan, K., Karolyi, G., Longstaff, F. & Saunders, A. (1992). An empirical comparison
    of alternative models of the short-term interest rates, Journal of Finance 47: 1209–
    1228.

Cochrane, J. (1988). How big is the random walk in GNP, J. Political Economics
    96(51): 893–920.

Dankenbring, H. (1998). Volatility estimates of the short term interest rate with applica-
    tion to german data, Technical report, Graduiertenkollog Applied Microeconomics,
    Humboldt- and Free University Berlin.

Davis, R. & Resnick, S. (1986). Limit theory for the sample covariance and correlation
    functions of moving averages, Annals of Statistics 14(2): 533–558.

Drost, F. & Nijman, T. (1993). Temporal aggregation of GARCH processes, Economet-
    rica 61: 909–927.

Drost, F. & Werker, B. (1996). Closing the GARCH gap: Continuous time GARCH
    modeling, Journal of Econometrics 74: 31–57.

Embrechts, P., Klüppelberg, C. & Mikosch, P. (1997).        Modelling extremal events,
   Springer.

Fuller, W. (1996). Introduction to statistical time series, John Wiley & Sons.

Groenendijk, P., Lucas, A. & de Vries, C. (1998). A hybrid joint moment ratio test for
    financial time series, Technical report, Vrije Universiteit, Amsterdam.

Kiesel, R., Perraudin, W. & Taylor, A. (1999). The structure of credit risk, Technical
    report, Birkbeck College.

Lo, A. & MacKinlay, A. (1988). Stock market prices do not follow random walks:
    Evidence from a simple specification test, Review of Financial Studies 1(1): 41–66.

Maddala, G. & Kim, I. (1998). Unit root, cointegration, and structural change Themes
   in moderen econometrics, Cambridge University Press.

Pagan, A. (1996). The econometrics of financial markets, J. Empirical Finance 3: 15–102.

Shiryaev, A. (1999). Essentials of stochastic finance, Advanced Series of Statistical Sci-
     ence & Applied Probability 3. World Scientific.

Taylor, S. (1986). Modelling financial time series, J. Wiley & Sons.




42
3 A Simple Approach to Country Risk
                                                                            Frank Lehrbass




3.1     Introduction

It had been a widely held belief that the debt crisis of the 1980s was over when the
Mexican crisis at the end of 1994, the Asian crisis in 1997, and the Russian crisis in
1998 made clear that highly indebted developing countries remain vulnerable. Hence,
investment in such countries is still risky and should be assessed properly. A definition of
country risk is as follows of the Basel Committee (1999)[p.7]: ”Country or sovereign risk
encompasses the entire spectrum of risks arising from the economic, political and social
environments of a foreign country that may have potential consequences for foreigners
debt and equity investments in that country”. Note that two markets are mentioned.
This paper focusses on the link between these markets. This paper is not concerned
with predicting crises. With respect to forecasting there is ample literature available
which was recently reviewed by Somerville & Taffler (1995) and Kaminsky, Lizondo
& Reinhart (July 1997). Furthermore there is the issue of risk dependencies between
different countries that has been emphasized recently of the Basel Committee (1999)[p.7]:
”Banks need to understand the globalisation of financial markets and the potential for
spillover effects from one country to another”. In order to adress this issue as well
recent techniques from derivative pricing are applied assuming that market prices of a
country’s external debt are derived from the prices of other liquid financial instruments.
The approach chosen allows the integration of ”market and credit risk” and enables
portfolio-wide assessment of country risk incorporating correlations.
The theoretical results of the paper are applied to real world data. The focus is on Eu-
robonds issued by the sovereign of a country. In pricing Eurobonds the market performs
a daily up-to-date judgement on the issuer’s ability to service his foreign currency liabili-
ties. Of course, other factors such as the default-riskless yield curve of the denomination
currency are taken into account as well. Thus, there is a potential source of informa-
tion concerning country risk. In the sequel the task of extracting this information from
market prices is approached. But before possible objections have to be discussed:
One might doubt whether the focus on Eurobonds of sovereign issuers is adequate for
judging country risk as defined above. Pragmatically speaking the debt of other foreign
borrowers such as foreign corporates is not that actively traded if at all. Hence, data



                                                                                          43
3    A Simple Approach to Country Risk

availability dictates this choice. Economically speaking the inability of the sovereign
to service foreign currency liabilities can be considered as a sufficient condition for the
corresponding inability of the corporates ruled by this sovereign. Of course this condition
is not a necessary one, because a coporate may be inable to service foreign debt although
the sovereign still is.
Finally, the relevance of the Eurobond market for other debt such as bank loans may be
questioned. Facing the grown-up volume of the Eurobond market it is no longer possible
to exclude bonds from the general treatment of a country’s debt in crisis. Hence, the
”comparability of treatment” may diminish the difference between Eurobonds and other
forms of debt. Hence, experience from the loan markets will be used for an investigation
of the Eurobond-market.


3.2     A Structural No-Arbitrage Approach

In order to extract country risk related information that is condensed into the market
prices of Eurobonds a so-called ”Structural Model” will be developed in the sequel. This
model copes simultaneously with default and interest-rate risk.


3.2.1    Structural versus Reduced-Form Models

Recent academic literature has established the two categories ”Structural and Reduced-
Form Models”. For a discussion of these approaches and literature see Duffie & Lando
(1997)[Section 1.2]. Their findings are summarized:
In structural models default occurs when the assets of the issuer have fallen to a suffi-
ciently low level relative to the liabilities, in a sense that varies from model to model.
As a rule the existing academic literature models the evolution of the assets of the issuer
as a continuous stochastic process and, hence, default occurs not with a ”bang but with
a whimper”. At least two exceptions should be mentioned: Zhou (March 1997) uses
a so-called jump-diffusion process for the assets of the issuer, whereas Duffie & Lando
(1997) keep the continuous process assumption but presume that investors are uncertain
about the current level of the issuer’s assets.
The other category of models is called reduced-form. These take as given primitives
the fractional recovery of bonds at default, as well as a stochastic intensity for default.
Because the default triggering mechanism is not modelled explicitly the only hedge
available is a counter position in the same market and not across markets.
Since the structural approach allows for in- and across market hedging and, hence, allows
for relative value pricing between markets, it is preferred.




44
                                                3.2   A Structural No-Arbitrage Approach

3.2.2    Applying a Structural Model to Sovereign Debt

One might question whether structural models - that have been applied mainly to cor-
porate debt - can be transferred to sovereign debt. Somerville & Taffler (1995)[p.284]
point out that the ”emergence of arrears ... is in effect the macroeconomic counterpart
to corporate failure”. Although in the sequel this analogy will turn out to be helpful, it
should not be pressed too far. On the one hand it is nearly impossible to conduct reorga-
nizations and to establish covenants with respect to sovereigns, while on the other hand,
even existing contractural agreements are very difficult to enforce as will be discussed in
more detail below.
It may be doubted whether it is sufficient to rely on financial market data. The explicit
inclusion of political factors might appear necessary. De Haan, Siermann & Van Lubek
(1997)[p.706] state that ”the influence of political factors is discounted in macroeco-
nomic variables”. Applying this argument to the relation between daily market prices
and monthly macroeconomic figures a sole reliance on financial market data seems de-
fendable. Hence, a free-riding approach to the information processing capabilities of fi-
nancial markets is applied. Of course there is no presumption towards full informational
efficiency as was shown to be impossible by Grossman & Stiglitz (1980). Practicioners
agree upon that the evolution of the stock market mirrors the future prospects of the
respective country.
In a structural model default occurs when the assets of the issuer have fallen to a
sufficiently low level relative to the liabilities. These concepts have to be re-defined
in the case of a sovereign issuer. The discounted future stream of the country’s GDP
is a good candidate for giving meaning to ”the assets of the issuer”. Since profits are
part of GDP (e.g. Branson (1979)[p.21]) part of the discounted future stream of the
country’s GDP is traded on a daily basis in the stock market. Hence, the equity index
of a country is one available proxy for the discounted future stream of the country’s
GDP. However it should be emphasized that the quality of this proxy is rather dubious
because the construction of the available equity indices varies from country to country
and the market capitalization does so too. Furthermore the relative weights of the major
components of GDP by type of income vary as well. Nevertheless the equity index of a
country contains valuable information concerning the future prospects of a country.
Having determined the notion of the assets of the issuer, the relative value of the liabilites
may be extracted from Eurobond market prices during a so-called calibration period.


3.2.3    No-Arbitrage vs Equilibrium Term Structure

It has been mentioned that the price of a Eurobond captures not only the inherent
risk of default of the issuer, but also the term structure uncertainty of the default-
riskless yield curve. The model by Longstaff & Schwartz (1995) copes with both factors
simultaneously. Longstaff and Schwartz give pricing formulae for default-risky fixed and




                                                                                           45
3    A Simple Approach to Country Risk

floating rate debt. The term structure model used by Longstaff and Schwartz is the
equilibrium model by Vasicek (1977). This has the severe effect that the model does not
match the current riskless zero yield-curve by construction. Instead the user has to put
in the market price of interest rate risk and - as a rule - encounters deviations between
the model and the actual riskless zero yield-curve. Therefore it is desirable to replace
this equilibrium model by a so-called no-arbitrage model. Due to the work of Hull &
White (1990) there is the no-arbitrage version of the equilibrium model: The so-called
”Extended Vasicek”. This will be used in the sequel.
The time-invariant barrier triggering default, that is used by Longstaff and Schwartz, is
replaced by its risklessly discounted level and, hence, no longer fixed. This approach goes
back to Schönbucher (November 1997), who proves a closed-form solution for a model
thus modified and uses the no-arbitrage model by Ho & Lee (1986). This term-structure
model generates upward sloping yield curves only. In contrast the extended Vasicek
is capable of generating inverse yield curves as has been shown by Schlögl & Sommer
(1994).


3.2.4    Assumptions of the Model

Consider a zero-coupon Eurobond issued by sovereign S denominated in currency of
country L with a bullet repayment of the principal and no optional features. There are
frictionless markets with continuous trading for the equity-index and currency of the
sovereign S and for riskless zero coupon bonds of the country L for any maturity. Hence,
the so-called equivalent martingale measure exists as has been shown by Harrison &
Kreps (1979). An immediate consequence is that the model does not need any infor-
mation concerning the risk premia for both term structure and default risk. Hence, for
pricing purposes the dynamics are formulated for an artificial risk-neutral world. Note
that the resulting formula is valid for any ”world” including the real one since it is essen-
tially based on a no-arbitrage reasoning. One more consequence is that specifying the
zero bond dynamics of the default-riskless zero coupon bonds it suffices to determine the
volatility function as has been shown by Heath, Jarrow & Morton (1992). The volatility
at time t of a default-riskless zero coupon bond maturing at time T with price B(t, T )
is assumed to be given by the following deterministic function ν(t, T ):

                                    def σ
                            ν(t, T ) =       (1 − exp (−λ(T − t)))                     (3.1)
                                         λ

The two parameters σ and λ are identifiable as parameters of the extended Vasicek model
(mean reverting process with fitting function ’time dependent mean’, σ is the volatility
of the so-called short-rate and λ determines the force that pulls the short-rate towards
the time-dependent-mean). The SDE for the short rate is:


                            dr = λ(mean(t) − r(t))dt − σdw1                            (3.2)




46
                                                    3.2   A Structural No-Arbitrage Approach

The formula for the time dependent mean needs notation for the instantaneous forward
rate for time t as it derives from the actual discount curve. This forward rate is denoted
by f (0, t) :

                            def ∂f (0, t) 1                  σ 2 (1 − exp (2λt))
                   mean(t) =                  + f (0, t) +                             (3.3)
                                   ∂t    λ                           2λ2

The dynamics of the zero coupon bond’s prices are governed by the following stochastic
differential equation (=:SDE), where the default-free interest rate for an instantaneous
horizon is signified by r(t) and the increments of a Brownian motion by dw1 :

                              dB(t, T )
                                        = r(t)dt + ν(t, T )dw1                         (3.4)
                               B(t, T )

The equity-index of the borrowers country expressed in units of country L’s currency is
denoted by V(t) and assumed to evolve according to the following SDE:

                         dV (t)                     p
                                = r(t)dt + ρθdw1 + θ 2 1 − ρ2 dw2                      (3.5)
                          V (t)

The differentials dwi (i=1,2) are assumed to be independent. Note that the dynamics
for the equity-index of the borrower’s country expressed in units of country L’s currency
fit into usual market practice. Currency derivatives are valued assuming a geometric
Brownian motion for the exchange rate. The same is done for equity indices. It is known
that the product of two geometric Brownian motions is again a geometric Brownian
motion. The correlation between the continuous returns of the equity index V (t) and
the changes in the default-free short rate r(t) under the risk-neutral measure is given by
the constant −ρ. The negative sign is due to the fact that interest rates and zero bond
prices move in opposite directions.
If ρ = 0 the equity-index of the borrowers country expressed in units of country L’s
currency evolves as in the model of Merton (1973). If in addition the interest rate were
constant the dynamics of the equity-index would reduce to that of Black & Scholes
(1973) - its volatility given by the constant θ.
The default threshold is given by the following time-variant and stochastic level κ(t, T ):

                                              def
                                    κ(t, T ) = B(t, T )K                               (3.6)

If this threshold is crossed before maturity by the the equity-index of the borrower’s
country, one unit of the defaultable bond is replaced by (1 − w) units of a default-riskless
zero bond with the same maturity date. The parameter w is known as ”write down”
and (1 − w) as ”recovery rate”. The write down w is assumed to be deterministic. Note
that the default triggering variable ”equity-index of the borrowers country expressed in



                                                                                         47
3    A Simple Approach to Country Risk

units of country L’s currency” incorporates information from the equity and currency
markets simultaneously. The fact that there is a connection between creditworthiness
and both the currency and stock markets has already been mentioned by Erb, Harvey
& Viskanta (1995),
Obviously, this definition of the default event is technical. Other definitions are possible
but in general do not allow for the calculation of a closed-form solution for the arbitrage-
free price of a Eurobond. The definition of the default as being triggered by the first
”touch down” of the equity index is due to the derivatives-pricing technology applied.
The loss occurring in default is similar to the consequences of a debt-bond-swap per-
formed first in 1987 with respect to the sovereign Mexico: Outstanding debt was written
off by the lenders; in exchange they received (1 − w) units of newly issued Mexican debt.
The principal was collateralized by T-Bonds. Summing up the effects of a debt-bond-
swap: The defaulted bond is replaced by (1−w) units of a default-riskless zero bond with
the same maturity date. Of course, it is not claimed that any debt crisis will be handled
by such a debt-bond-swap. Instead, this debt-bond-swap shows that the assumptions of
the model can be defended for a particular scenario.


3.2.5    The Arbitrage-Free Value of a Eurobond

Denote the arbitrage-free price of the defaultable zero coupon bond with (net) maturity
T by F (T ) and the standard normal distribution function evaluated at z by N (z).
Following the line of reasoning by Schönbucher (November 1997, p.23) the following
closed-form solution can be proven:
Proposition:

         F (T )   =     B(0, T )(1 − wQT )                                             (3.7)
                                         !                        !
                  def             k − Ξ2                −k − Ξ2
           QT     =     1−N         √
                                    2
                                           + exp (k)N    √2
                                      Ξ                       Ξ
                  def        V0
             k    =     ln
                           κ(0, T )
                  def
             Ξ    =     Ξ1 − Ξ2
                                σ2
                                                                          
                  def      2           2                1
            Ξ1    =     T θ + 2 T − (1 − exp (−λT )) +    (1 − exp (−2λT ))
                                λ      λ               2λ
                                                   
                  def        σ       1
            Ξ2    =     2ρθ     T − (1 − exp (−λT ))
                             λ       λ

Proof: At the outset some motivation is given. Part of it can be found in Musiela &
Rutkowski (1997)[p.314ff]. The expected payoff of the defaultable zero bond under the
equivalent martingale measure has to be calculated. The payoff is one if the value of
the equity index stays above κ(t, T ) until T. The payoff is 1 − w if default occurs before



48
                                                3.2   A Structural No-Arbitrage Approach

T . Making use of the indicator function 1I that is one if default has occured and zero
otherwise the payoff is 1 − w1I. Using the universal risk neutral measure with the savings
account as numeraire would result in calculation of the following expected value of the
discounted payoff in order to obtain the arbitrage-free value:

                                       Z T                      
                             E exp (−         r(t)dt)(1 − w1I)                         (3.8)
                                          0

Since r(t) is stochastic the numeraire does not drop out of the expected value calculation.
This makes the calculation of the integral difficult. Following the ideas presented in El-
Karoui, Geman & Rochet (1995) a certain numeraire asset is convenient when calculating
expected payoffs given interest rate uncertainty. The default-riskless zero bond maturing
at time T is chosen as numeraire with T fixed. In the sequel an upper-script T denotes
the use of the forward neutral measure. Making use of it the following expected value
of the discounted payoff has to be calculated:


                                   E T (B(0, T )(1 − w1I))                             (3.9)

This time B(0, T ) can be put outside the expectation because it is known from today’s
discount curve. Hence, the fair value is given by:


                                F (T ) = B(0, T )(1 − wQT )                          (3.10)

                                                               V (t)
It will turn out that QT is the probability of the event that B(t,T  ) crosses K before T .

The Girsanov density for the change from the risk-neutral measure (denoted by P to
the forward neutral measure P T is:

                                             RT
                                dP T   exp (− 0 r(t)dt)
                                     =                                               (3.11)
                                 dP         B(0, T )

What remains to be done is calculation of QT . A time change is applied in order to
cope with time-dependent volatility. For another use of this technique to a similar finite
time horizon problem see Schmidt (1997). With the motivation in mind the actual
calculations are performed now:
The dynamics of the equity index under the risk-neutral measure are governed by the
following SDE and initial condition V (0) = V0 :

                         dV (t)                     p
                                = r(t)dt + ρθdw1 + θ 2 1 − ρ2 dw2                    (3.12)
                          V (t)




                                                                                         49
3    A Simple Approach to Country Risk

In order to obtain the new dynamics under the forward-neutral measure replace the
stochastic differentials according to Musiela & Rutkowski (1997, p.466, Eq. (B.26)).
The relation between the differentials under the two measures is as follows:


                                  dw1T = dw1 − ν(t, T )dt                           (3.13)


                                        dw2T = dw2                                  (3.14)

The last equation is due to the fact that the differentials dwi are independent and that
the numeraire is driven by dw1 alone. Inserting the last two equations yields the new
dynamics for V :

                 dV (t)                                      p
                        = [r(t) + ν(t, T )ρθ] dt + ρθdw1T + θ 2 1 − ρ2 dw2T         (3.15)
                  V (t)

Note that the dynamics of the default riskless zero bond have changed as well:

                      dB(t, T ) 
                                = r(t) + ν(t, T )2 dt + ν(t, T )dw1T
                                                  
                                                                                    (3.16)
                       B(t, T )

Expressing the index value V (t) in units of the new numeraire gives rise to the definition
of Ṽ (t):

                                           def    V (t)
                                      Ṽ (t) =                                      (3.17)
                                                 B(t, T )

The dynamics of Ṽ (t) result from an application of Ito’s formula Musiela & Rutkowski
(1997)[p.463] to the last two SDEs.

                       dṼ (t)                           p
                               = [ρθ − ν(t, T )] dw1T + θ 2 1 − ρ2 dw2T             (3.18)
                        Ṽ (t)

Because there is no drift in the last SDE, the T-forward measure is a martingale measure
needed for pricing purposes. By construction prices relative to the zero bond B(t, T )
are martingales. Because the volatility at time t of a zero coupon bond maturing at
time T is time-variant, Ṽ (t) has time-dependent volatility. Before coping with this
time-dependence a simplification of notation is introduced. A Brownian motion ŵ is
constructed from the two Brownian motions 1 and 2 that preserves the original volatility.
Define a new deterministic function σ(t):

                                def p
                                    2
                           σ(t) =     θ − 2ρθν(t, T ) + ν(t, T )2
                                      2                                             (3.19)



50
                                                            3.2   A Structural No-Arbitrage Approach

Note the difference between the (short rate volatility) parameter σ and the function σ(t).
This defines the following martingale M (t):

                                                    def
                                          dM (t) = σ(t)dŵ                                    (3.20)

The quadratic variation of this martingale on the interval [0, t] is denoted using the
notation of Karatzas & Shreve (1997):

                                                    Z t
                                         hM it =            σ(s)2 ds                          (3.21)
                                                        0

                                                         Rt
Note that this is a Riemann integral. It has the property 0 σ(s)2 ds < ∞, ∀t ≥ 0. Hence,
theorem 4.8 of Karatzas & Shreve (1997)[p.176] is applicable and states that there is a
new Brownian motion W with the property:

                            Z t                    Z hM it
                 Ṽ (t) =         Ṽ (s)dM (s) =              Y (u)dW (u) = Y (hM it )        (3.22)
                             0                      0

The equation reveals, that Y (u) satisfies the following SDE:

                                            dY (u)
                                                   = dW                                       (3.23)
                                             Y (u)

Hence, Y (u) follows a geometric Brownian motion with time measured on a new scale.
In order to use this new scale it should be remembered that there is no default as long
as:


                                      V (t) > B(t, T )K, ∀t ≤ T                               (3.24)

This is equivalent to the condition:

                                         V (t)
                                                 > K, ∀t ≤ T                                  (3.25)
                                        B(t, T )

But the left-hand side is Ṽ (t). This finding explains the specification of the time-variant
barrier. With respect to the numeraire B(t, T ) the condition is as follows:


                                          Ṽ (t) > K, ∀t ≤ T                                  (3.26)




                                                                                                 51
3    A Simple Approach to Country Risk

Under the T-forward measure the barrier is no longer time-variant! Expressing the
condition in terms of Y and the new time-scale it reads:


                                     Y (u) > K, ∀u ≤ hM iT                               (3.27)

With respect to a Brownian motion with drift starting at zero, the probability of the
process staying above a barrier has been calculated already. Hence, dividing by the
initial value of Y (0) = Y0 and taking natural logarithms on both sides of the inequality
yields the equivalent condition:

                                     Y (u)     K
                                ln         > ln , ∀u ≤ hM iT                             (3.28)
                                      Y0       Y0

Usage of corollary B.3.4 of Musiela & Rutkowski (1997)[p.470] it turns out that the
default probability under the T-forward measure is as stated in the proposition. Multi-
plying the expected payoff with B(0, T ) yields the fair value. q.e.d.
Note the negative effect of the correlation parameter ρ. The intuition is as follows:
Because the probability Q is calculated under the forward-neutral measure the decisive
size is the relative price Ṽ (t). Hence, its relative volatility counts. If ρ = 1 the numerator
and denominator of Ṽ (t) move randomly in the same direction thus diminishing the
volatility of the fraction. This extreme case does not imply that the volatility is zero
since both assets are affected differently by randomness.
Next another correlation is considered: The interdependence between the defaultable
zero bond and the equity index. In the sequel it will turn out that the first partial
derivative with respect to V0 may be of interest. Denoting the standard normal density
by n(.) this partial derivative is as follows:


                          ∂F (T )          B(0, T )w
                                      =               [Ψ1 + Ψ2 + Ψ3 ]                    (3.29)
                           ∂V0                V0
                                                          !
                                     def    1      k − Ξ2
                               Ψ1     =    √
                                           2
                                               n    √2
                                             Ξ         Ξ
                                                                  !
                                     def                  −k − Ξ2
                               Ψ2     =    − exp (k)N       √
                                                            2
                                                              Ξ
                                                                   !
                                     def    1              −k − Ξ2
                               Ψ3     =    √
                                           2
                                               exp (k)n       √
                                                              2
                                             Ξ                  Ξ

Close inspection of the formula shows that the arbitrage-free value of a defaultable zero
bond depends non-linearly on the value of the assets of the issuer. If there is a long
distance between the value of the assets and the trigger level, the influence of the value



52
                                                 3.2   A Structural No-Arbitrage Approach

of the assets is rather small. But if this value approaches the trigger the influence
increases in exponential manner. An immediate consequence is a caveat concerning the
use of correlation measures when analyzing country risk. On the one-hand correlation
measures only the linear dependence between variables. On the other hand the samples
will be dominated by data from ”quiet times”. Thus the dependence is understated
twofold when measured by correlation. It should be noted that the formula and its
partial derivative were derived for time zero (full maturity T). It is left to the reader to
replace T by T − t in order to allow for the passage of time. For practical hedging this
notationally more expensive version of the partial derivative is used.


3.2.6    Possible Applications

Formula (3.7) (p.48) has the following economic meaning: Due to the assumptions of
frictionless markets for the currency and equity index of the borrowing sovereign and the
default-riskless zero coupon bonds denominated in the lending currency it is possible to
build a portfolio consisting of a long position in the foreign equity index and the domestic
zero bond, that has the same value as the Eurobond at any point of time between now
and maturity. An immediate consequence is that a long position in the Eurobond can be
hedged by being short a certain amount of the foreign equity index and the domestic zero
bond. The latter position hedges the risk arising from the default-free term structure,
the former the default risk.
This model allows also for the evaluation of a portfolio of Eurobonds issued by different
sovereigns but denominated in one currency, e.g. DM. Not only correlation between the
foreign equity index expressed in the currency of denomination and the default-riskless
term structure is captured, but also the correlations between the equity indices and,
hence, the so-called default correlation between different issuers as it derives from the
correlations of the indices.
The above formula (3.7) (p.48) can be used to determine those parameters that fit best
to the market prices of Eurobonds. Having extracted this information from the market
place, it can be used for pricing new issues or to analyze a portfolio of Eurobonds
incorporating correlation. This default correlation arises from the correlation of the
equity indices and currencies.
Although the formula is given for a defaultable zero coupon bond in the sequel it is
applied to coupon bonds as well. Thinking of a coupon bond as a portfolio of zero bonds
one might remark that - given K in formula (3.6) (p.47) - the effective trigger level
κ(t, T ) varies from payment date to payment date. A coupon due at time T1 defaults
if κ(t, T1 ) is hit before, whereas a coupon due at time T2 defaults if κ(t, T2 ) is touched.
Assume that T1 is before (smaller than) T2 . Because the discount factor B(t,T) is bigger
for T1 than for T2 , κ(t, T1 ) is bigger than κ(t, T2 ) as can be seen by formula (3.6) (p.47).
If one is aware of the fact that not the nominal value of outstanding debt but its present
value is the decisive figure, it is no surprise that the assets of the issuer may turn out to




                                                                                            53
3    A Simple Approach to Country Risk

be insufficient to service debt in the near future T1 but sufficient to pay the coupon at
a more remote time T2 . Nevertheless this handling of defaultable coupon bonds raises
doubts and is therefore an area for future research.
Note that this handling of coupon bonds is in contrast to the default mechanism of
Longstaff & Schwartz (1995). In their model all outstanding payments default if the
first coupon defaults. However, it should be noted that in the case of ”defaulting”
sovereign debtors the outstanding payments are negotiated payment by payment.
Finally, possible applications in risk management are imaginable, but should be pursued
with care as has been pointed out by Duffie & Pan (1997)[p.10]: ”Derivatives pricing
models are based on the idea ... that the price of a security is the expected cash flow
paid by the security discounted at the risk-free interest rate. The fact that this risk-
neutral pricing approach is consistent with derivatives pricing in efficient capital markets
does not mean that investors are risk-neutral. Indeed the actual risk represented by a
position typically differs from that represented in risk-neutral models (see Harrison and
Kreps [1979]). For purposes of measuring value at risk at short time horizons such
as a few days or weeks, however, the distinction between risk-neutral and actual price
behavior turns out to be negligible for most markets. This means that one can draw a
significant amount of information for risk measurement purposes from one’s derivatives
pricing models, provided they are correct. This proviso is checked in the sequel.


3.2.7    Determination of Parameters

Three sets can be distinguished:
Default related parameters
The current level of the issuer’s equity index and currency have to be determined. Mul-
tiplication of both market figures yields V0 as it appears in formula (3.7) (p.48). The
volatility of V (t), i.e. θ, has to be figured out as well. This can be estimated from
historical time series of V (t) or extracted from the equity- and currency derivatives
markets.
The write down w and the nominal trigger level K have to be determined by sound
economic reasoning or have to be extracted from Eurobond prices during a specified
calibration period. Longstaff & Schwartz (1995)[p.794] propose to use the write down
as a measure of the seniority of the bond. It can be expected that the default related
parameters vary among issuers. Thus the objections by Hajivassiliou (1987), that the
stochastics differ countrywise, are taken into account.
Term structure related parameters
The two parameters σ and λ may be extracted from the market for interest rate deriva-
tives or estimated. These parameters have to be determined per currency of denomina-
tion.




54
                                        3.3   Description of Data and Parameter Setting

Link parameter
This parameter is denoted by ρ. It links the stochastics of the default-free term structure
to the default related dynamics of the equity index. It has to be determined per issuer
using again an ”imply-out” approach or estimation techniques.


3.3     Description of Data and Parameter Setting

First, the Eurobonds investigated are presented and their optional features are discussed.
Then the default-related data from the equity and currency markets is introduced. Fi-
nally, construction of the default-free term structure and its dynamics are sketched. All
data is either from DATASTREAM or a proprietary database of WestLB.


3.3.1   DM-Eurobonds under Consideration

The selection of the DM-Eurobonds is driven by aspects of data availability. The focus
on emerging economies is due to the recent developments in financial markets.
All these sovereign issuers are considered, where good time series for the exchange rate
and the equity index and the Eurobonds are available on a daily basis. All bonds
considered have maturities up to 10 years. Pricing bonds with longer maturities is
critical, because there are few default riskless bonds with such maturities. Hence, the
discount function becomes a critical input for such maturities.
The following table describes the DM-Eurobonds investigated.


                                         Table I
                     DM-Eurobonds under Consideration
                Sovereign        Year of Issue   Coupon     Maturity Date
               ARGENTINA             1995         10 12       14/11/02
               ARGENTINA             1995          9 14       29/08/00
               ARGENTINA             1996         10 14       06/02/03
               ARGENTINA             1996           7         20/05/99
               ARGENTINA             1996          8 12       23/02/05
               ARGENTINA             1996           9         19/09/03
               ARGENTINA             1997           7         18/03/04
                 BRAZIL              1997           8         26/02/07
                MEXICO               1995          9 38       02/11/00
                MEXICO               1996         10 38       29/01/03
                POLAND               1996          6 18       31/07/01
                 RUSSIA              1997           9         25/03/04




                                                                                        55
3    A Simple Approach to Country Risk

The offering circulars for the above issues reveal that there are at least three of the
following seven options on the side of the investor (lender):
If any of the following events occurs and is continuing, the holder of the bond may
declare such bond immediately due and payable together with accrued interest thereon:


                                         Table II
                                          Events
                                Non-Payment of Principal
                                Non-Payment of Interest
                               Breach of Other Obligations
                                      Cross-Default
                                      Moratorium
                                   Contested Validity
                                Loss of IMF-Membership

These options are ”written” (i.e. granted) by the issuer herself. Hence, there is strong
negative correlation between the payoff of the options and the financial condition of the
option-writer. When the option is ”in the money” (i.e. has value), the issuer is ”out of
money” and vice versa. Judged from the perspective of the investor (lender) the value
of these options is negligible. With respect to the exercise of these options it should
be kept in mind that it is very difficult to enforce payment of the respective payoffs.
Summing up all DM-Eurobonds are treated as being straight without optionalities. All
have bullet repayment of principal and yearly coupons in DM.


3.3.2    Equity Indices and Currencies

This section gives the names of the equity indices used and reports the volatilities and
correlations needed in formula (3.7) (p.48). The first trading day that is represented in
the data is the 21st of April 1997. Including this date the data comprise 174 trading
days in the year 1997. This nearly three-quarter period of 1997 is used as a so-called cal-
ibration period. The start of the calibration period is due to the Russian DM-Eurobond,
that was issued in April 1997.
The meaning of the calibration period is as follows: In general parameters are determined
with respect to this time interval and used for pricing in the following years. Statistically
speaking the model is fine-tuned ”in the sample 1997” and its performance is judged ”out
of the sample” in 1998. In some cases the equity indices expressed in the currency DM
have been scaled down by a fixed factor as is shown in the following table. Note that all
figures are in decimal dimensions, e.g. a volatility of 20 is 0.2.
In order to give detailed information on the issuers additional notation is introduced:
The equity index of the borrowers country in its domestic currency is denoted by I and
has a volatility of ϑI . The price of one unit currency of the issuer expressed in units of



56
                                       3.3   Description of Data and Parameter Setting

country L’s currency is denoted by X and has a volatility of ϑX . The continuous returns
of X and I have a correlation that is denoted by %XI .
Although the volatility of the DM-Index can be calculated from the preceding columns
it is given for the reader’s convenience. Note that only this figure enters formula (3.7)
(p.48). All figures are rounded to two decimals. All except the penultimate column
contain volatility-figures.


                                       Table III
                      Issuer Related Historical Volatility
                  Sovereign          Index   Currency   Correlation   DM-Index
          Equity Index and Scaling     ϑI      ϑX          %XI            θ
          ARGENTINA (Merval)          0.36      0.1        0.31         0.41
          BRAZIL (Bovespa/100)        0.54      0.1        0.23         0.57
              MEXICO (IPC)            0.32     0.16        0.65         0.44
           POLAND (WIG/100)           0.28     0.13        0.23         0.33
              RUSSIA (RTS)            0.56      0.1        0.01         0.57


The same level of currency volatility for Argentina, Brazil, and Russia is no surprise
since all three currencies were pegged to the US-Dollar during 1997. Factually on the
17th of August 1998 (officially on the 3rd of September 1998) the Rubel started floating
and on 13th of January 1999 the Real did too. Because the period under consideration
ends with August 1998 the volatility parameters are not changed because the sample of
”floating Rubel” is too small in order to estimate a ”new” volatility.


3.3.3   Default-Free Term Structure and Correlation

Due to the term structure model being no-arbitrage a good discount curve of the Ger-
man default-riskless yield curve is needed and an adequate volatility function. For each
trading day under consideration more than 100 government bonds were used to calcu-
late the discount curve. The parameters of the volatility function were chosen in a way
that pricing of two REX-linked bonds with maturities 2000 and 2005 was perfect during
the calibration period from 21 April to 31 December 1997 (σ = 0.018 and λ = 0.046).
Because the default-riskless DM-short rate r(t) is not an observable quantity, the param-
eter ρ measuring correlation between the the default-free term structure and the default
related dynamics of the equity index cannot be determined empirically. Therefore it is
set to zero, although - theoretically - the short rate could be derived from the discount
curve. But this would introduce other problems: The discount curve is built from the
market prices of DM-goverment bonds. It is well known that the short end of a discount
curve built that way should be considered with care. Hence, the derived short rate would
rather be a theoretical artefact than a real market rate.




                                                                                      57
3    A Simple Approach to Country Risk

3.3.4    Calibration of Default-Mechanism

Inspection of formula (3.7) (p.48) reveals that the theoretical value of a defaultable
bond is ”Default-Riskless Bond times Adjustment” and that the ”Adjustment” is given
by ”One minus (Pseudo-) Default-Probability (i.e. Q) times Write Down (i.e. w)”.
Hence, the ”write down” enters the formula in the same manner as the (pseudo-) default-
probability. From Moody’s research Moody’s (1998)[p.19] in the corporate bond market
it is known that the average magnitude of the write down is around 0.6.
Write Down
First, the available number of countries, that have defaulted since World War II, is
far too small in order to allow for statistically meaningful estimation of recovery rates.
A Moody’s-like approach to recovery rates of sovereign bonds is therefore impossible.
But Moody’s insights into recovery rates of corporate bonds help to exclude certain
dimensions of the recovery rate. Because it is very difficult to enforce certain rights with
respect to sovereign debtors it can be expected that the ”write down” of Eurobonds
issued by sovereigns is not smaller than that for corporates.
Judgemental ”write down” values of 0.6 and 0.7 are chosen for the pricing of DM-
Eurobonds. The lower value is assigned to an issuer if during 1997 the correlation
between the market price of the DM-Eurobond and its (fictive) default-riskless counter-
part is higher than 0.5. Otherwise w = 0.7 is chosen. This correlation is interpreted as
a signal from the market concerning the severity of loss given default. In effect only the
Russian Eurobond is priced using a write down of 70 percent. The remaining Eurobonds
are valued with w = 0.6.
Default-Trigger
The 174 trading days in the year 1997 are used as a so-called calibration period. The
level of the nominal default trigger K is chosen per issuer - not per bond - in a way that
the average absolute pricing errors are minimal during the three last quarters of 1997.
Note that any economic approach to derive K from the level of the issuer’s liabilities in
foreign currencies would cause serious problems, since it is not clear which fraction of it
corresponds to the ”assets” of the economy approximated by the equity index.
The resulting values for K are reported in the next table as well as the step size in the
search procedure (bisection). The step size varies per issuer, because the equity indices
are in different dimensions. Hence, the resulting trigger levels are rounded figures. The
following table summarizes the results and reports the levels of the equity indices as of
21st April 97 for the reader’s convenience.




58
                                                                  3.4    Pricing Capability

                                         Table IV
                           Default Related Parameters
          Sovereign (Equity-Index)   DM-Index   DM-Trigger    Step Size in Search
                                         V ()      K
          ARGENTINA (Merval)          1185.79     400                   50
          BRAZIL (Bovespa/100)         150.67      26                   1
             MEXICO (IPC)              810.79     250                   50
           POLAND (WIG/100)             90.21      20                   1
             RUSSIA (RTS)               87.19      17                   1




3.4     Pricing Capability

3.4.1   Test Methodology

To judge upon the realism of formula (3.7) (p.48) nearly the same approach as the
one by Bühler, Uhrig-Homburg, Walter & Weber (1999) (BUWW) [p.270] with respect
to interest-rate options is applied: ”First, valuation models within risk management
systems must be capable of predicting future option prices if they are to correctly measure
risk exposure. This capability is best evaluated by the ex ante predictability of a model.
Therefore, we use the valuation quality of a model, not its ability to identify mispriced
options, as the most important assessment criterion”.
This methodology can be applied to DM-Eurobonds because they can be viewed as term
structure derivatives. To provide a yardstick for measuring pricing quality the following
quotation may be helpful. BUWW examine the empirical quality of the models by
comparing model prices to market prices for the period from 1990 to 1993. From model
to model the ”average absolute pricing errors vary between 21 percent and 37 percent”
Bühler et al. (1999) [p.292].
Keeping this in mind the test proceeds as follows: Beginning on the 21st of April 1997
daily prices are calculated using formula (3.7) (p.48) and compared to market prices.
The inputs are described below.


3.4.2   Inputs for the Closed-Form Solution

The inputs that are updated daily are:
Default-Free Term Structure
The daily update of the default-free term structure, which is calculated from the market
prices of DM-government bonds, influences the level of the default-riskless discount factor
B(0, T ).
Equity Index




                                                                                        59
3    A Simple Approach to Country Risk

The current level of the issuer’s equity index and currency are determined on a daily
basis. Multiplication of both market figures yields V0 as it appears in the formula.
All other inputs in formula (3.7) (p.48) are pegged to the levels reported in the tables
III and IV.


3.4.3    Model versus Market Prices

Because any model is a simplification of reality the model prices will deviate from the
market prices. The average absolute pricing error is calculated per issuer as follows:
On each trading day the absolute deviation between model and market price per out-
standing bond is calculated as a percentage. Thus, there is no leveling out of over- and
underpricing. Then these daily percentage figures are averaged over all trading days
(of the respective year) and bonds defining a unique average absolute pricing error per
issuer and year. The number of bonds considered in averaging is reported in the second
column. It should be noted that with respect to 1997 only the last three quarters are
considered, whereas in 1998 the time series ends on the 31st of August thus covering
nearly the first three quarters of 1998. The last two columns are percentage figures, e.g.
during the first three quarters of 1998 the overall ”Average Absolute Pricing Errors”
with respect to seven Eurobonds issued by Argentina is 3.24 percent.


                                         Table V
                        Average Absolute Pricing Errors
                         Issuer              No of Bonds     1997    1998
                  ARGENTINA (Merval)              7          1.50    3.24
                  BRAZIL (Bovespa/100)            1          0.77    1.33
                     MEXICO (IPC)                 2          1.84    1.23
                   POLAND (WIG/100)               1          0.35    0.69
                     RUSSIA (RTS)                 1          2.19    5.32

Of course, a more frequent update of the parameters σ, λ, θ, ρ, w, and K would increase
the match with market prices considerably. Note that these parameters were left un-
changed during the time from April 1997 to August 1998. But this could induce the
criticism of ”data cooking” and would impede the workability of the approach. Finally, it
should be emphasized that Eurobonds are less volatile than the interest rate derivatives
investigated by Bühler et al. (1999). This should be kept in mind when comparing the
error figures.


3.5     Hedging

The theoretical assumptions behind formula (3.7) (p.48) assure that there is a dynamic
portfolio strategy consisting of certain positions in the default riskless zero bond and the



60
                                                                           3.5    Hedging

foreign equity index that - when continuously adjusted - replicate the price dynamics of
the DM-Eurobond. Since this situation is not found in reality this section is devoted to
practical hedging of a long position in a DM-Eurobond. Solely for illustrative purposes
this hedging is presented in two parts that are sequentially discussed. Eventually these
parts will be put together.


3.5.1   Static Part of Hedge

”Go short” the fictive default-riskless counterpart of the DM-Eurobond which has the
same maturity and coupon. Note that in the case of no default of the DM-Eurobond
the cash flows cancel. This strategy corresponds to lending ”Deutsche Mark” to the
sovereign and refinancing by the lender through the issue of bonds that are assumed to
be default-riskless.
Hence, with respect to the available data the strategy reads: In April 1997 buy one
DM-Eurobond (from the menu in Table I), refinance this long position by issuing a
default-riskless bond with the same maturity and coupon. On the 31st of August 1998
sell the DM-Eurobond and buy a default-riskless bond by another default-free issuer
in order to close the refinancing position. The following table contains the respective
price differences from a cash-flow perspective. All figures are in ”Deutsche Mark” (i.e.
DM). The column ”interest” results from the fact that the purchased DM-Eurobond has
a market value less than the bond issued by the lender. The initial price difference is
assumed to be invested in a default riskless zero bond maturing on the 31st of August
1998. Note that the coupons of the coupon bond positions cancel.


                                       Table VI
                              Results of Static Part
           Sovereign     DM-Eurobond     Refinancing   Interest   Maturity Date
          ARGENTINA         -12.55          00.74        0.74       14/11/02
          ARGENTINA         -09.70          04.59        0.31       29/08/00
          ARGENTINA         -11.25         -00.09        0.76       06/02/03
          ARGENTINA         -12.15          04.16        0.12       20/05/99
          ARGENTINA         -04.80         -06.52        0.76       23/02/05
          ARGENTINA         -06.50         -02.90        0.74       19/09/03
          ARGENTINA         -07.15         -02.75        0.37       18/03/04
            BRAZIL          -16.65         -11.08        0.87       26/02/07
           MEXICO           -16.75          04.41        0.35       02/11/00
           MEXICO           -21.90          00.09        0.71       29/01/03
           POLAND           -00.60         -00.86        0.08       31/07/01
            RUSSIA          -60.43         -04.08        1.04       25/03/04




                                                                                       61
3    A Simple Approach to Country Risk

3.5.2    Dynamic Part of Hedge

Since the purchased DM-Eurobond has a market value less than the bond issued by the
lender there is a cash inflow to the lender. On the other hand in the case of default
the lender has to service its own issue whereas the income from the DM-Eurobond is
reduced - in nominal terms - according to the write down percentage w. In essence
the cash inflow of the lender is the ”received” premium of a ”written” (issued, shorted)
derivative. In terms of the model that is applied to the pricing of DM-Eurobonds the
derivative corresponds to a long position in the equity index of the sovereign with limited
upside potential. Hedging this position requires a counterposition, i.e. a short position.
Therefore, the dynamic hedge works as follows:
”Go short” a certain amount ∆ of the equity index and receive foreign currency. Ex-
change this for ”Deutsche Mark” at the current exchange rate. This yields a cash inflow
of ∆V0 . In theory this position is revised every instant. Practically, weekly revisions
may seem adequate. Because the 31st of August 1998 is a Monday and the markets were
very volatile in the preceeding week, it is assumed that on every Monday the ∆-position
in the equity index is closed and built up again. This would be a waste of resources if
the amount ∆ was static. In fact it is not. Using the central insight of Black & Scholes
(1973) the parameter ∆ is given by the time-t dependent version of formula (3.29) (p.52).
This depends on the actual level of the equity index V at time t. If the ”Mondays” of
the time under consideration are indexed by T1 , T2 , ..., Ti and the time varying amounts
∆ also, the weekly cash flow results from the dynamic hedge can be given. For instance
on the first Monday (i.e. 21st of August 1997) the index is sold (shorted) and on the
second Monday (i.e. 28th of August 1997) it is bought giving rise to the cash flow result
∆(T1 ) [V (T1 ) − V (T2 )]. In the sequel interest rate effects are neglected, since the cash
positions are rather small. Nearly the same cash flows result from hedging with the
future on the respective index. In this case, which is of more practical relevance, ”going
short the index” is replaced by ”selling the future”. Now, the cash flow occurs when
closing the position by buying back the future.


                     CashF lowAtT2 = ∆(T1 ) [V (T1 ) − V (T2 )]                       (3.30)
                     CashF lowAtT3 = ∆(T2 ) [V (T2 ) − V (T3 )]
                                 ..    .
                                  . = ..
                     CashF lowAtTi = ∆(Ti−1 ) [V (Ti−1 ) − V (Ti )]

Last but not the least it should be mentioned that the Austrian Futures and Options
Exchange and the Chicago Mercantile Exchange offer the respective futures. One in-
teresting alternative to selling the future on the index is the issue of a certain amount
of a so-called index-certificate. But in contrast to the futures markets the adjustment
of the position is dependent on investors’ sentiment. Hence, selling the certificate on
the index of the borrower is easy when the ”delta” is small, i.e. when the need for



62
                                                                           3.5   Hedging

hedging is negligible. But if things get worse with the economic condition of the bor-
rowing sovereign investors will stay away from investing in (more) index-certificates. In
contrast, the presence of speculators on the futures exchanges guarantees liquidity. The
degree of liquidity can be measured by the so-called open interest. To give an impression
table VII displays open interest on the 30th of March 1999 (source Bloomberg):


                                       Table VII
                           Liquidity Of Some Futures
                             Sovereign               Open Interest
                            (Exchange)
                       BRAZIL (Bolsa de MeF)            21806
                         POLAND (AFO)                    1909
                          RUSSIA (AFO)                   3240



3.5.3   Evaluation of the Hedging Strategy

Summing the weekly cash flows yields the result of the dynamic hedge which are given
in the second column per Eurobond. For the reader’s convenience the net results from
the static hedge are repeated in the third column. Finally, both results are summed up
and reported in the last column. Thus the results from the practical hedge position are
evident considering both parts in sum.


                                       Table VIII
                     Results of Two-Part Practical Hedge
            Sovereign        Dynamic    Net Static     Sum      Maturity Date
           ARGENTINA          17.06      -11.07        05.99      14/11/02
           ARGENTINA          13.58      -04.80        08.78      29/08/00
           ARGENTINA          17.12      -10.58        06.54      06/02/03
           ARGENTINA          03.39      -07.78       -04.39      20/05/99
           ARGENTINA          16.18      -10.56        05.62      23/02/05
           ARGENTINA          16.64      -08.66        07.98      19/09/03
           ARGENTINA          15.54      -09.53        06.01      18/03/04
             BRAZIL           03.99      -26.86       -22.87      26/02/07
            MEXICO            02.27      -11.99       -09.72      02/11/00
            MEXICO            05.81      -21.10       -15.29      29/01/03
            POLAND            00.31      -01.38       -01.07      31/07/01
             RUSSIA           48.70      -63.47       -14.77      25/03/04

The table highlights the difference between the static approach on a stand-alone basis
and in combination with the dynamic add-on. It may be resumed that the add-on of
the dynamic part lightens the losses from lending to ”emerging” sovereigns.



                                                                                      63
3    A Simple Approach to Country Risk

The weekly rebalancing might appear cumbersome. A static alternative to the dynamic
hedge could be the purchase of a certain amount of some kind of put option on the
equity index V . This would have the advantage that the holder of the put would profit
from an increase in the volatility in V and not only from the market moves of V . In
effect, this purchase of a put would delegate the dynamic hegding to the writer of the
put. Because this put can be produced only on the OTC-market for exotic derivatives
it will be costly. Therefore this option is not discussed in detail.
The case of Russia is of special interest because it is the only borrower where a default in
the sense of the model occured. The nominal trigger level K was set to DM 17 through
calibration with respect to 1997. On the 27th of August 1998 the Russian equity index
fell to DM 14.45 from DM 17.53 the day before. As mentioned in the introduction of
the model this move in the equity and currency markets did not trigger default for all
outstanding payments of coupon and principal of the Russian DM-Eurobond. In fact,
only the ”near” coupons in the years from 1999 to 2002 defaulted, because the effective
trigger κ(t, T ) is the discounted value of K. Riskless discounting with the discount curve
from the 27th of August 1998 yields the values in the table.


                                        Table IX
                              Effective Trigger Values
                          Payment Date        Respective Trigger
                         25th March 1999            16.67
                         25th March 2000            16.07
                         25th March 2001            15.47
                         25th March 2002            14.86
                         25th March 2003            14.22
                         25th March 2004            13.59



3.6     Management of a Portfolio

Recently the analysis of a pool of loans has been performed by McAllister & Mingo
(1996). An analogous approach is applied to a Eurobond portfolio. Optimal conditions
for a portfolio in general are derived and discussed. Finally, the simulated Eurobond
portfolio is analyzed.


3.6.1    Set Up of the Monte Carlo Approach

In the structural No-Arbitrage approach presented above ”the financial condition of bor-
rower i is represented by” McAllister & Mingo (1996) [p.1387] the equity index expressed
in the currency of the lender (e.g. DM). This variable has the advantage of being ob-
servable and tradeable. In the following analysis i is from the set of sovereign issuers



64
                                                       3.6   Management of a Portfolio

introduced above. A Monte Carlo approach is applied using 10.000 pathes. In addition
term structure uncertainty is simulated as well. Keeping in mind the proviso by Duffie
and Pan - that ”for purposes of measuring value at risk at short time horizons such as
a few days or weeks, .. the distinction between risk-neutral and actual price behavior
turns out to be negligible” Duffie & Pan (1997) - the time horizon for the simulation
is two months (=2/12=0.167 units of a year). In the presence of term structure un-
certainty the so-called short rate r(t) has to be simulated stepwise. Choosing 30 steps
per path each step corresponds to two calendar days. Because the equity index triggers
default it has to be monitored very closely. It is obvious that the monitoring frequency
of one simulated move (step) per two days can be improved. Instead of increasing the
number of steps the ideas of Andersen and Brotherton-Ratcliffe are applied making the
Monte Carlo technique a little more ”exact” Andersen & Brotherton-Ratcliffe (1996).
The quality of the random numbers is such that the first and second moment and the
correlation structure are met exactly.
In order to balance the impact of each sovereign on the portfolio one zero coupon DM-
Eurobond per sovereign with uniform initial maturity of three years is in the portfolio.
Note that lending to sovereigns is no short term business.
The simulation makes use of the parameters that were described above. In addition the
correlation matrix is estimated using the available continuous daily returns during the
year 1997. Thus the volatility and correlation parameters are from the same ”calibration
period”. Although the model presumes stability of the parameters they may be unstable
in time.

                                       Table X
                             DM-Index-Correlations
           Sovereign ARGENTINA BRAZIL MEXICO POLAND RUSSIA
          ARGENTINA      1      0.77   0.82    0.29  0.29
            BRAZIL      0.77     1     0.71    0.31  0.27
           MEXICO       0.82    0.71    1      0.25  0.18
           POLAND       0.29    0.31   0.25     1    0.58
            RUSSIA      0.29    0.27   0.18    0.58   1

The following table reports the levels of the equity indices as of 5th January 98. These
levels are used as start values in the Monte Carlo approach.


                                      Table XI
                          Start Values for DM-Indices
                        Sovereign (Equity-Index)    DM-Index
                         ARGENTINA (Merval)          1243.11
                        BRAZIL (Bovespa/100)          173.43
                            MEXICO (IPC)             1181.09
                         POLAND (WIG/100)             76.97
                            RUSSIA (RTS)              126.05



                                                                                     65
3    A Simple Approach to Country Risk

The simulation evolves under the so-called risk-neutral measure with the riskless savings
account as numeraire. The initial term structure is assumed flat at five percent in order
to abstract from the real term structure. This gives rise to the following start values
of the three-year defaultable zero bonds. Note that the default riskless three-year zero
bond has a value of 86.38.


                                       Table XII
                           Start Values for Zero Bonds
                            Sovereign       Theoretical Value
                           ARGENTINA             79.60
                             BRAZIL              81.66
                            MEXICO               83.39
                            POLAND               85.41
                             RUSSIA              81.60

Hence, the start value of the DM-Eurobond portfolio is 411.66. For each zero coupon
DM-Eurobond in the portfolio there are two possible outcomes at the end of each path
(i.e. in two months): Either default has occured causing a transformation of the Eu-
robond position to (1 − w) units of a default-riskless zero bond with 34 months time
to maturity and a value according to the level of the riskless term structure captured
through the ”one” factor short rate (Note: The shape of the term structure changes as
well in the Extended Vasicek Model); or the defaultable Eurobond is still alive and has
a value according to the level of the equity index and the short rate.


3.6.2    Optimality Condition

Traditional management of a portfolio uses ”Value at Risk” as risk measure and compares
investment alternatives according to their expected return relative to their contribution
to the ”Value at Risk” (see for instance Lehrbass (1999)). There is the proposal to
replace VaR by a ’coherent’ (in the sense of ADEH Artzner, Delbaen, Eber & Heath
(1997)) risk measure. ADEH call a risk measure coherent if it satisfies the four relations
of sub-additivity, homogeneity, monotonicity and the risk-free condition and show that
VaR is not coherent. In contrast, the so-called ”shortfall” risk measure is Embrechts,
Klüppelberg & Mikosch (1997) [p.295]. This measure is specified below where the op-
timality condition is applied. In this subsection sufficient optimality conditions using
the shortfall risk measure are derived by applying non-linear programming to the de-
cision problem of a bank. Details concerning non-linear programming can be found in
standard textbooks such as Chiang (1984). Imagine a bank that has at its disposal an
investment amount M that earns the return R. To keep things tractable capital letters
signify absolute amounts, whereas corresponding small letters denote relative (decimal)
figures. Making use of this rule the percentage return of the bank is given by r = R/M .
It should be noted that the short rate is denoted by r(t), whereas r without the time



66
                                                          3.6   Management of a Portfolio

argument signifies the percentage return of the bank over a specific time horizon. The
amount of money invested in alternative one (two) is signified by A (B). Note that
for a financial institution the restriction A + B = M can be ignored completely. The
percentage return of an alternative is denoted by rA respectively rB . With respect to
the future these figures are uncertain. Hence, the concept of expected or anticipated
returns has to be introduced. Let E(rA ) respectively E(rB ) denote the anticipated re-
turn of the alternatives under the real-world probability measure. It is assumed that
there is a (differentiable) non-linear function called SF (A, B) that maps the amounts
invested into the alternatives (i.e. A and B) to the shortfall-figure of the portfolio. The
decision-problem is to maximize the expected return E(R) = E(rA )A + E(rB )B given a
target level L of the banks shortfall. This restriction can be expressed as SF (A, B) = L.
Because shortfall is a coherent risk measure it is convex! Hence, it turns out that the
sufficient conditions for an optimal decision are as follows, where γ is the shadow price
of the SF-resource:

                                                 ∂SF ()
                                    E(rA ) = γ                                      (3.31)
                                                  ∂A

                                                 ∂SF ()
                                    E(rB ) = γ                                      (3.32)
                                                  ∂B

                                      SF (A, B) = L                                 (3.33)

Assuming that the bank does not waste the SF-resource only conditions 3.31 and 3.32 are
of interest. Division of these by γ and equating yields the following sufficient optimality
condition:

                                     E(rA )     E(rB )
                                     ∂SF ()
                                              = ∂SF ()                              (3.34)
                                      ∂A          ∂B

Condition 3.34 has the interpretation: Invest in such a way that the expected percentage
return divided by the increase of the portfolio-shortfall is the same for all alternatives.
The advantage of the partial derivative view is to highlight the portfolio effect. There is
a disadvantage of the partial derivative view: Marginal, i.e. stepwise change of A and
B is practically impossible, because in banking you usually face ”take it or leave it”
alternatives. Therefore the differentials in the optimality condition 3.34 are replaced by
differences and transform the terms as follows:

                                     E(rA )     E(rB )
                                     ∆SF ()
                                              = ∆SF ()                              (3.35)
                                      ∆A          ∆B

There is one more practical advantage to be mentioned: No knowledge of the shadow
price γ is required.



                                                                                        67
3    A Simple Approach to Country Risk

But a severe limitation has to be pointed out. The decision problem leading to the
optimality condition 3.35 is formulated under the real-world measure whereas pricing
and the Monte Carlo simulation make use of other probability measures (forward- resp.
risk-neutral). Therefore the expected return calculated under these ”other” measures is
already known by construction. Nevertheless keeping in mind the proviso by Duffie &
Pan (1997) a ranking of the alternatives according to their riskiness is possible. Therefore
condition 3.35 is rewritten as follows:

                                      ∆SF ()
                                       ∆B      E(rB )
                                      ∆SF ()
                                             =                                       (3.36)
                                               E(rA )
                                       ∆A

This gives a ”rough” guideline for ranking required expected returns under the real world
measure. If an alternative has twice the risk contribution as another one, it should have
twice the expected return.


3.6.3    Application of the Optimality Condition

Because the risk measure shortfall is sometimes called ”beyond-VAR” the one-percent
”VAR” of the initial DM-Eurobond portfolio is chosen as threshold level. The so-called
”net worth” Artzner et al. (1997) of the portfolio is defined as ”initial investment (e.g.
411.66 DM) minus the value of the portfolio after two month”. The net worth figure is de-
noted by x. Hence, shortfall is given by the conditional expected value E(−x|x ≤ V AR).
The VAR-figure from the simulation is -26.46 DM. Embrechts et al. (1997)[p.288] advo-
cate ”the use of the generalised Pareto distribution as a natural parametric model” for
measuring shortfall. More specifically they suggest that below the threshold ”standard
techniques can be used” and above the threshold extreme value theory Embrechts et al.
(1997)[p.359]. They point out that the generalised Pareto distribution ”appears as the
limit distribution of scaled excesses over high thresholds” Embrechts et al. (1997)[p.164]
and provide information on ”Fitting the GPD” Embrechts et al. (1997)[p.352]. A thor-
ough application of extreme value theory is beyond the scope of this paper. Another
limitation is the use of the risk neutral measure for calculation of E(−x|x ≤ V AR). In
the base scenario the portfolio consists of one unit DM-Eurobond per sovereign. This
leads to a shortfall of 0.304482 DM. The ratios ∆SF   ∆A
                                                        ()
                                                           are calculated as follows: The
denominator signifies the position change in the portfolio in value terms, i.e. DM. Com-
parative statics are performed using a reduction of DM 10 in a specific DM-Eurobond
position, i.e. ∆A = −10DM . The negative sign is due to A being the amount invested.
For instance, in the case of ”Argentina” instead of holding one unit of the zero bond only
0.874376159 units of the DM-Eurobond are in the portfolio. The next table contains the
fraction ∆SF  ()
           ∆A per sovereign.




68
                                                         3.6   Management of a Portfolio

                                      Table XIII
                                 Shortfall Analysis
                               Sovereign       ∆SF ()/∆A
                              ARGENTINA         0.00747
                                BRAZIL          0.00740
                               MEXICO           0.00555
                               POLAND           0.00473
                                RUSSIA          0.00683

Note that a reduction of any component in the portfolio decreases the shortfall. This
decrease differs among the sovereigns considered. As a general rule: The riskier (judged
upon by the initial bond price) a sovereign, the more reaction in shortfall. Beside this
individual - perspective rule is a correlation-based rule: The more correlated the ”finan-
cial condition of the borrower” to the portfolio, the higher is the reaction in shortfall.
This explains the ranking between Russia and Brazil. Although the bond prices are very
similar (81.60 resp. 81.66) the impact of Brazil is higher due to the concentration of the
portfolio in South-America.
It should be pointed out that the original shortfall was measured using the outcomes
of one percent of the simulated pathes. Reducing the investment in a certain country
as was done in the comparative statics decreases the VAR-figure and leads to a smaller
number of outcomes used in measuring the shortfall below the original VAR-figure.


3.6.4   Modification of the Optimality Condition

If the risk measure shortfall is replaced by the ”incoherent” and non-convex risk measure
”Value at Risk” the following analysis emerges. Note that in all cases considered the
VAR-figure decreased and that the decimal precision has not been changed.


                                      Table XIV
                              Value at Risk Analysis
                              Sovereign       ∆V AR()/∆A
                             ARGENTINA          0.12000
                               BRAZIL           0.12000
                              MEXICO            0.08000
                              POLAND            0.04000
                               RUSSIA           0.08000

Note that the optimality condition is no longer sufficient. It is merely necessary. The
correlation effects are evident again. Because the portfolio is concentrated in South
America, the risk contribution of Russia is relatively small.




                                                                                       69
3    A Simple Approach to Country Risk

3.7     Summary and Outlook

A simple model for the pricing of DM-Eurobonds has been developed. It is simple
insofar as a continuous observable process is assumed to be the default-triggering factor.
Hence, only few parameters have to be determined. Due to the lack of data on defaults
even the determination of the parameters of a model such simple poses severe problems
that have been overcome by judgement. The pricing capability has been evaluated
and practical hedging discussed. The ranking of the riskiness varies with the perspective
chosen. Because this point is important the next table summarizes the three perspectives
(individual vs. VAR vs. SF):


                                       Table XV
                       Different Perspectives of Riskiness
            Sovereign       Value of ZeroBond     ∆V AR()/∆A      ∆SF ()/∆A
           ARGENTINA              79.60             0.12000        0.00747
             BRAZIL               81.66             0.12000        0.00740
            MEXICO                83.39             0.08000        0.00555
            POLAND                85.41             0.04000        0.00473
             RUSSIA               81.60             0.08000        0.00683

The dependence on the base portfolio has been pointed out. The example has revealed
a sharper focus of the shortfall risk measure in comparison to traditional VAR.
Knowing what the adequate risk measure is (e.g. shortfall or VAR?) the optimality
condition can be used to ”search for” (the resp. an) optimal allocation of country limits.
If shortfall is the choice it certainly is ”a must” to devote more time on extreme value
theory. Besides, there are a lot of outstanding refinements on the model itself and the
parametrization. Future research is looked forward to.




Bibliography

Andersen, L. & Brotherton-Ratcliffe, R. (1996). Exact exotics, RISK 9(10): 85–89.

Artzner, P., Delbaen, F., Eber, J.-M. & Heath, D. (1997). Thinking coherently, RISK
    10(11): 68–71.

Black, F. & Scholes, M. (1973). The pricing of options and corporate liabilities, Journal
    of Political Economy 81: 637–654.

Branson, W. H. (1979). Macroeconomic Theory and Policy, number 2nd edition, Harper
    and Row, New York.




70
                                                             3.7   Summary and Outlook

Bühler, W., Uhrig-Homburg, M., Walter, U. & Weber, T. (1999). An empirical compar-
     ison of forward-rate and spot-rate models for valuing interest-rate options, Journal
     of Finance 54: 269–305.

Chiang, A. C. (1984). Fundamental Methods of Mathematical Economics, McGraw-Hill,
    New York.

De Haan, J., Siermann, C. L. J. & Van Lubek, E. (1997). Political instability and country
    risk: new evidence, Applied Economics Letters 4: 703–707.

Duffie, D. & Lando, D. (1997). Term structures of credit spreads with incomplete
     accounting information, Technical report, Graduate School of Business, Stanford
     University,.

Duffie, D. & Pan, J. (1997). An overwiew of value at risk, Journal of Derivatives 4: 7–49.

El-Karoui, N., Geman, H. & Rochet, J.-C. (1995). Changes of numeraire, changes of
    probability measure and option pricing, Journal of Applied Probability 32: 443–458.

Embrechts, P., Klüppelberg, C. & Mikosch, T. (1997). Modelling Extremal Events,
   Springer, Berlin.

Erb, C. B., Harvey, C. R. & Viskanta, T. E. (1995). Country risk and global equity
    selection., Journal of Portfolio Management 10: 74–83.

Grossman, S. J. & Stiglitz, J. E. (1980). On the impossibility of informationally efficient
    markets, American Economic Review 70: 393–408.

Hajivassiliou, V. A. (1987). The external debt repayments problems of ldc’s., Journal
    of Econometrics 36: 205–230.

Harrison, J. M. & Kreps, D. M. (1979). Martingales and arbitrage in multiperiod secu-
    rities markets., Journal of Economic Theory 20: 381–408.

Heath, D., Jarrow, R. & Morton, A. (1992). Bond pricing and the term structure of
    interest rates: A new methodology for contingent claims valuation, Econometrica
    60: 77–105.

Ho, T. S. & Lee, S.-B. (1986). Term structure movements and pricing interest rate
    contingent claims, Journal of Finance 41: 1011–1028.

Hull, J. & White, A. (1990). Pricing interest-rate-derivative securities, Review of Finan-
     cial Studies 3: 573–592.

Kaminsky, G., Lizondo, S. & Reinhart, C. M. (July 1997). Leading indicators of currency
   crisis, Working Paper 97/79, International Monetary Fund.

Karatzas, I. & Shreve, S. (1997). Brownian Motion and Stochastic Calculus, Vol. 2nd
    edition, Springer, New York.



                                                                                        71
3    A Simple Approach to Country Risk

Lehrbass, F. B. (1999). Rethinking risk-adjusted returns, Credit Risk Special Report -
    RISK 12(4): 35–40.

Longstaff, F. & Schwartz, E. (1995). A simple approach to valuing risky fixed and
    floating rate debt, Journal of Finance 50: 789–819.

McAllister, P. H. & Mingo, J. J. (1996). Bank capital requirements for securitized loan
   pools, Journal of Banking and Finance 20: 1381–1405.

Merton, R. C. (1973). Theory of rational option pricing, Bell Journal of Economics and
    Management Science 4: 141–183.

Moody’s (1998). Historical default rates of corporate bond issuers, 1920-1997, Technical
   report, Moody’s Special Comment.

Musiela, M. & Rutkowski, M. (1997). Martingale Methods in Financial Modelling,
    Springer, New York.

of the Basel Committee, R. M. G. (1999). Principles for the management of credit risk,
     Technical report, Basel Committee on Banking Supervision, Basel.

Schlögl, E. & Sommer, D. (1994). On short rate processes and their implications for term
     structure movements, Technical report, Basel Committee on Banking Supervision,
     University of Bonn.

Schmidt, W. M. (1997). On a general class of one-factor models for the term structure
    of interest rates, Finance and Stochastics 1: 3–24.

Schönbucher, P. J. (November 1997). The pricing of credit risk and credit risk derivatives,
     Technical report, Department of Statistics, Faculty of Economics, University of
     Bonn.

Somerville, R. A. & Taffler, R. J. (1995). Banker judgement versus formal forecasting
    models: The case of country risk assessment, Journal of Banking and Finance
    19: 281–297.

Vasicek, O. (1977). An equilibrium characterization of the term structure, Journal of
     Financial Economics 27: 117–161.

Zhou, C. (March 1997). A jump-diffusion approach to modeling credit risk and valuing
    defaultable securities, Technical report, Federal Reserve Board, Washington.




72
4 Predicting Bank Failures in Transition:
  Lessons from the Czech Bank Crisis of
  the mid-Nineties
                                                                            Jan Hanousek




4.1    Motivation

Almost all countries in Central and Eastern Europe have experienced turbulence in their
banking and financial sectors. In the early 1990s, for example, Poland’s banks experi-
enced a crisis, followed in 1994-1996 by the failure of several small banks in the Czech
Republic, and severe problems in Latvia in 1995 when four of its large banks fell. Bank
regulators in transition countries have been searching for early warning signals that could
be used to make bank supervision more efficient. Although several papers exist on model-
ing or predicting bank failure in mature market economies [See Looney, Wansley & Lane
(1989), Lane, Looney & Wansley (1990), Barber, Chang & Thurston (1996), Hwang, Lee
& Liaw (1997); among others], there are several problems connected with the direct use
of these models in transition economies. First, these models depend almost exclusively
on economic conditions and balance-sheet data based on accounting standards that are
conceptually and significantly different from those in transition economies. For example,
most transition economies still use accounting procedures carried over from central plan-
ning that reflect production rather than profit. Moreover, unlike stable economies, the
transition period is typified by high uncertainty, the lack of standard bank behavior, and
other problems carried forward from the communist era that only worsen the situation.
Finally, the vast majority of banks in transition economies have a very short history,
with balance sheets seldom if ever scrutinized by prudent auditors.
The transition from a centrally planned to a market oriented economy is a complicated
process with significant implications for the banking sector. In particular, it requires
a separation of the central bank from commercial banks, the creation of a number of
commercial banks from the single state bank, and the granting of licenses to new banks.
The main problem facing the newly-emerging banking sector is the lack of expertise in
credit evaluation under free-market conditions and the tendency to favor borrowers with
fixed assets as collateral. Earning potential is largely ignored due to lack of ability to
evaluate and proper accounting techniques [see EBRD (1996/7)]. Given the problematic



                                                                                        73
4    Predicting Bank Failures in Transition

inherited loan book and the high uncertainty typical of transition economies, banks are
faced with extremely high risk. This situation is further worsened by the lack of three
important factors: 1) experienced bank management; 2) market-enforced performance;
and 3) standard measures to enforce the spreading of risk and prudent bank behavior
Although it is rarely admitted in public, the vast majority of bank regulatory authorities
of industrialized countries follow “too-big-to-fail” (TBTF) policies (Roth (1994)). The
negative macroeconomic consequences generated by the failure of a large financial insti-
tution make TBTF key issue to be considered in any country. Critics of TBTF argue
that the doctrine is unfair to smaller banks because it provides an incentive for larger
banks to increase risk, for example, by maintaining a lower capital-to-asset ratio than
smaller banks. There is another point about TBTF policies when applied to transition
economies: the largest banks are still at least partly in state hands in many countries.
Therefore, the size of the bank is also a proxy for its ownership structure.
In the present paper we study models of bank failure in the context of transition
economies. Data from the Czech banking crisis (1994 to1996) will be used to test our ap-
proach empirically. We expect that only a small group of variables used to predict bank
failure in mature markets will actually help explain bank failures in transition economies.
On the other hand, we expect that the quality of auditor used (“Big Six” versus local
firms) will provide valuable additional information. It should be in fact, an indicator
of whether we can use the balance-sheet data from the conventional models at all. Our
central hypothesis is that the retail deposit interest rate in transition economies could
be used as a proxy to reflect the default risk of a bank, and therefore this information
should improve the quality of bank failure prediction .
The paper is organized as follows: section 2 introduces additional variables that should
be used for predicting bank failure in transition economies. Section 3 describes the
emergence of the Czech banking sector; section 4 present the results; and the final
section containes conclusions and policy prescriptions.


4.2      Improving “Standard” Models of Bank Failures

The vast majority of bank failure models group variables according to
CAMEL, an acronym for Capital adequacy, Asset quality, Management, Earnings
and Liquidity, and/or use CAMEL rankings. In selecting variables that might influence
bank failure in transition economies, we suggest also considering regulatory factors, that
is, those describing the requirements of supervisory bodies such as minimum reserve
requirements, as well as economic factors. Such economic factors can significantly inter-
fere with CAMEL factors. Indeed, an economic upturn could be expected to increase
the likelihood of bank survival and bank survival time, primarily through associated
increases in asset quality. In our analysis we did not analyze the relationship between
bank failure and economic factors, since during the period studied the Czech Republic
was experiencing constant growth, and, therefore, the worsening of banks’ loan portfolios



74
                                          4.2    Improving “Standard” Models of Bank Failures

had nothing to do with worsening economic conditions.
Usually local banks in transition economies are exposed to very high risk. This risk re-
sults from lending money to borrowers with a short or nonexistent track record in busi-
ness whose business plans must be realized in a rapidly changing market environment.
Moreover, most bank staffs responsible for credit rationing are young, inexperienced,
and potentially corrupt. It is generally expected that for troubled banks large certificate
of deposits (portions of which are not explicitly insured) are a less stable and potentially
more expensive funding source than retail deposits. In particular, low liquidity is often
associated with aggressive strategies and high-risk profiles. Marcus (1990) predicts a
tendency for individual banks to converge towards either a high-risk or low-risk posture,
depending on their charter value. We expect similar behavior in transition economies;
smaller banks would more likely adopt aggressive market strategies and/or a high-risk
posture.
Ellis & Flannery (1992) analyze how the spread between large certificates of deposit
(CD) and Treasury bill rates relates to the banks default risk. Like other studies using
CD rates, they conclude that measured bank-risk influenced CD rates. It is difficult to
make a direct link between CD rates and the default risk, however, because the spread
also reflects other factors such as market imperfection, differences in liquidity and TBTF.
Nevertheless, we expect that a link exists because the benefits of market-based regulatory
policies would be quite limited if large banks’ default risks were not priced.
Unfortunately, we cannot directly use this approach because the CD market is generally
missing in transition economies, so we suggest using standard retail deposit rates instead
of CD rates. We expect that retail deposit rates should linked in a similar way to
default risk as CD rades (See Figure 1 and 2). Key issues for bank regulators were the
quality of independent auditors and the accounting standards employed. One should
keep in mind that local accounting standards in transition economies have roots in
central planning, and therefore are tailored to report production rather than profit.1
There exist several problems associated with Czech accounting standards that seriously
affect a bank’s financial positioning. One of the most dangerous is the lack of charge-offs
for loan losses.2 It is striking that banks cannot charge-off loan losses before a borrower
files for bankruptcy. Not surprisingly, then, a bank could report a profit even if it in fact
experiences a loss.
It is clear that the quality and independence of external auditors is highly correlated
with both the effectiveness of regulators and the quality of early warning signals.3 Un-
fortunately, for the purpose of our analysis we cannot include proxies for auditor quality,
 1
   It is striking how much local and international accounting standards differ. For instance, in 1992
    Komercni banka reported a profit of 3.2 billion CZK and a loss of 5.9 billion CZK according to local
    and international standards, respectively.
 2
   Probably the original reason was to avoid a significant tax reduction. Similarly, tax treatment of losses
    and reserve creation was changed several times.
 3
   One has to keep in mind that the vast majority of early warning signals are based on balance sheet
    data.




                                                                                                         75
4    Predicting Bank Failures in Transition

since certain auditors would ex post form a perfect proxy for predicting bank failure in
the Czech Republic. It is striking that prior to 1994, the Czech National Bank (CNB)
did not require banks to use only pre-selected auditors (say the Big Six/Five).4
We expect that adding the retail interest rate variable into a model of bank failure should
significantly help with the balance-sheet-data problems mentioned above. Basically, even
when balance sheets show very flattering figures and results, insiders (i.e., other banks)
know which banks are more likely to fail. A bank in this position has limited access to
loans from other banks. In order to maintain liquidity, the bank needs to attract cash
via a much higher interest rate on term deposits than other (i.e., “safe”) banks offer.
Unfortunately, this only speeds up the process of worsening bank conditions. Cordella
& Yeyati (1998) show that when banks do not control their risk exposure, the presence
of informed depositors may increase the probability of bank failures. In the case of the
Czech Republic a clear pattern for one-year deposits is seen (see Figure 1), indicating
significant liquidity problems of problematic banks and either lack of capital or credibility
that would allow them to get financing via the inter-bank market or other refinancing
instruments.


4.3      Czech banking sector

The first step in reforming the banking sector was the law creating a central bank, the
State Bank of Czechoslovakia (hereafter SBCS), No. 130/1989, approved on November
15, 1989. According to this law, the SBCS was responsible for state monetary policy,
but not for commercial banking. The law that regulates the commercial banks and
savings-and-loans sector was approved one month later (December 13, 1989). This law
enabled two-tier banking, in that it brought into being commercial banks and set the
basic rules for their operation. Banking sector regulation was exercised by the Ministry of
Finance.5 According to this law, interest rates were governed by the SBCS and deposits
in state financial institutions were guaranteed by the state. In January 1990, the SBCS
transferred its commercial banking to three newly established banks: Komerčni banka
(KB), Vseobecka uverova (VUB) and Investicni banka (IP, which in 1993 merged with
Post office banks as IPB). On December 20, 1991 new laws on central and other banks
were adopted (Nos. 21 and 22/1992). These laws, effective from February 1, 1993,
established the independence of the national bank from the government and gave the
SBCS the authority for banking supervision. On January 1, 1993, the Czech National
Bank (CNB) took over the functions of the SBCS as a result of the split of Czechoslovakia.
The law on banks also had clearly specified rules for granting licenses, and set up a
 4
   Outside observers heavily criticized the regulators: “A litany of scandal related to investment funds
    and more forced supervision by the CNB made the country’s financial sector look like it was run by
    Mickey Mouse with the rest of the Disney crew doing the audits” Czech Business Journal, (May/June
    1996).
 5
   The Federal Ministry of Finance supervised banks and the Ministries of Finance of the Czech and
    Slovak Republics controlled savings and loans.




76
                                                                       4.3   Czech banking sector

general regulatory framework .
Unfortunately, the initial conditions for obtaining banking licenses were quite soft, re-
quiring a minimum subscribed equity capital of only CZK 50 million (US$2 million). This
low requirement was increased in April 1991 to CZK 300 million (US$10 million). On
the other hand, the local market was protected against foreign competition by the “Law
on Foreign Exchange,” which prevented firms from directly acquiring capital abroad.
With such a low capital requirements the number of new banks literally exploded in
early 1990. While in early 1990 there was a central bank plus seven banks licensed for
universal banking, by the end of 1990 there were 23. This trend continued with 36 banks
by the end of 1991 and 51 by the end of 1992. These newly established banks were, in
general, small, with Agrobanka being the one significant exception.6 In 1993, the rate of
new bank creation slowed, with only 8 new banking licenses granted. Between mid-1994
and 1996, the CNB decided not to grant any new bank licenses, most likely in response
to failures of small and medium banks. The CNB probably expected that a lack of new
bank licenses would cause the banking sector to consolidate through mergers/acquisitions
of smaller and troubled banks. This policy decision was only partially successful, and
the CNB started to grant new bank licenses again in 1996. Neither big Czech banks
nor Czech branches of foreign banks were enthusiastic about buying their bankrupted
competitors. Similarly, for foreign banks not yet present on the Czech market, such an
acquisition would be equivalent to a new bank license, and since the asset quality of
troubled banks was bad, the resulting price for a ”new license” was very high.
Due to very soft licensing procedures and insufficient screening of license candidates,
many newly-formed banks lacked a sufficient capital base, as well as employees equipped
with proper managerial skills and business ethics. Because of their lack of capital, all
small and medium-sized banks had to deal with an adverse selection problem. With their
lending rates the highest in the market, the overhelming majority of their clients became
those undertaking the riskiest projects, those which other banks refused to finance. In
addition, several new banks were using deposits to extend credit to other activities of the
bank’s owners, or simply “tunneling” the deposited money out of the bank. Regardless
of whether the main reason was incompetence or theft, the overall effect on the cash flow
and balance sheets of these banks was damaging.7 Beginning in December 1993 several
bank failures disturbed public trust in the banking sector and had a strong influence on
the stability of small and medium-sized banks.
As a reaction to the first three bank failures, the Law on Banks was amended to include
obligatory insurance on deposits. This insurance covered only deposits of citizens up
to 100,000 CZK per head and per bank, with the premium being limited to 80 percent
of the deposit balance on the day of a bank’s closure. The amendment also increased
the extent and authority of banking supervision granted to the CNB. The CNB could
 6
     Agrobanka, founded in 1990, became the fifth largest bank in the Czech Republic within a year.
 7
     The Economist (September 1996): “Each of these bank failures stemmed from a deadly cocktail of
      mismanagement, orgiastic lending (often to a bank’s own stockholders), and more often than not,
      fraud.”




                                                                                                  77
4    Predicting Bank Failures in Transition

now impose sanctions for noncompliance with its regulations ranging from enforcing
corrections and imposing fines to the revocation of banking licenses.8
After the introduction of deposit insurance, another bank, Česka banka, filed for bankruptcy
and the new law was applied to its clients. However, when a series of additional failures
soon followed in the 1996 election year, the CNB became far more generous, with indi-
vidual clients of the failed banks recovering all of their deposits up to 4,000,000 CZK,
in contradiction to the law’s provisions. The CNB decided to cope with the resulting
sensitive political problem of lost deposits by tightening the licensing procedures and
modifying obligatory deposit insurance. In its efforts to stem the tide of bank failures,
the CNB tried two policies. In early July 1995, it tightened its policies, increasing the
minimum reserve requirements (MRR) and also unifying its rates. Until then, checking
account deposits had a MRR rate three times that of term deposits. The level and rapid
changes of MRR suggest that this instrument had been used in the past quite heavily as
a monetary tool. It is clear that such a high level of the MRR coupled with the feature
that these reserves earn no interest had a significant effect on the direct regulation of
money in circulation.9 Although such a setting was useful from the standpoint of reg-
ulating monetary development, it created a substantial financial burden for commercial
banks. Banks with a higher proportion of term deposits (namely the Czech Savings
Bank and some smaller financial institutions) were particularly hurt by this measure.
One can speculate and make connections between changes of MRR over time and actual
bank failures.10


4.4      Data and the Results

The major obstacle to this project was to get reliable data. For financial indicators the
only set of publicly available accounting data is represented by a subset of the ASPEKT
(or CEKIA) databases of the Czech capital market that covers annual reports of publicly
traded banks. Unfortunately, these data sets are basically useless for applying standard
models of bank failure for two reasons. First, the publicly available information covers
only a short version of the balance sheet. Second, if any additional public informa-
tion exists (for example, a standard balance sheet provided by ASPEKT or CEKIA),
then several variables are missing, namely for those banks that were ex-post seen as
“problematic.”
 8
   The CNB has been given the authority to 1) force banks to fulfill several obligatory rules, 2) ap-
    prove/change bank management, 3) impose a penalty up to 50 mil. CZK , 4) enforce reduction of
    shareholder’s capital and its transfer to reserves if these were not sufficient , and 5) withdraw or
    freeze banking licenses.
 9
   During the period 1990 to 1992 MRR carried 4% interest.
10
   Clearly an increase of zero-interest MRR would affect both the probability of bank failure and survival
    time. Let us mention that an MRR rate of 9.5% and zero interest resulted in an approximate 1.6
    percentage point change on the interest rate margin. Therefore, domestic bank competitiveness was
    significantly influenced since foreign banks carry lower MRR.




78
                                                                           4.4   Data and the Results

In order to minimize these data problems we use financial variables/ratios that were
constructed, instead of the original data held by the CNB regulatory body. Although
we construct the financial ratios that have been used in similar studies, we must stress
that our indicators do not have the same meaning as in the other studies, since all
reporting to the CNB was done according to local accounting standards. Our data
set covers 20 local banks of which 14 posed significant problems at some point during
the study. It does not make any sense to add foreign banks or their branches to our
sample because of their inherent differences in terms of services, structure, financing,
etc. As discussed earlier, we expect to see a gap in retail deposit rates between sound
and problematic banks. As shown in Figures 1 and 2, banks with higher interest rates
on term deposits were more likely to fail. This finding is in line with our original
objective of capturing the default risk using retail deposit rate as a proxy. Although
Figure 1 indicates a strong pattern, we want to test whether the differences between
groups are significant. Table 1 summarizes several t-tests across different time periods
and maturities. These tests empirically verify that (mean) interest rates for problematic
banks were significantly higher compared with sound banks. In addition, we see that
since the first half of 1994, differences were statistically significant for both one and two
year term deposits.11 Moreover, the mean difference was higher for longer maturities, a
finding that is consistent with the idea of capturing default risk for the bank via retail
deposit rates.
The next step in our analysis was to compare quality of bank failure prediction with
and without information on the retail deposit interest rates. Results of logit models
are presented in Table 2. Note that selection of other variables or probit specification
gave similar results. First, the financial indicators, although they were drawn from
official data collected by the supervisory body of the CNB (used in Model 1), did not
provide significantly better prediction of actual bank failure than one-year deposit rates
alone (Model 2).12 This finding suggests that (non-audited) balance sheets with detailed
information used by the supervisory body of the CNB did not contain more information
with respect to prediction of actual bank failure than publicly available interest rate data.
More importantly, there is an interesting interaction between information contained in
financial ratios and retail interest rates. Looking at the results for the first half of
1995 we see that, although both Models 1 and 2 provide very similar (and not very
good) predictions, combining them (Model 3) significantly increases the quality of our
predictions. In addition, when analyzing the second half of 1995, we see an interesting
change: a significant difference no longer exists in the quality of prediction between
models 1 and 3. In other words, this result means that information in retail deposit
11
   We suggest excluding checking accounts from our analysis. Usually, the interest rate on those accounts
    is not a relevant measure of why clients opted for the particular bank. (We omit whole range of services
    offered by the bank.).
12
   Previous t-tests suggest to using two-year deposit rates, although the reason why we used one-year
    rates instead is simple. For two-year deposit rates we have a few missing observations: not every
    bank provided a table of retail interest rates by all maturities and several banks specified longer
    maturities as ”negotiable”. Since we do not want to lose more observations, we opted for one-year
    interest rate that was provided by all banks in our sample.




                                                                                                         79
4     Predicting Bank Failures in Transition

rates is already reflected in the bank balance sheet. One can then speculate and make a
connection between an actual upcoming bank failure and seemingly indefensible financial
situation of the bank, revealed via “the sudden appearence of” significant red numbers
on balance sheets.


4.5        Conclusions

Despite the small sample available, we would like to highlight a few lessons that can
be learned from the Czech banking crisis. Our study stresses the significant role played
by auditors and local accounting standards. The magnitude of shock adjustments of
the minimum reserve requirements opens up the question of to what extent actual bank
failures were affected by policies of the supervisory body of the CNB. Because of the
same timing of changes that affected the accounting of reserve creation, charges against
losses, etc. and adjustments of MRR, we cannot distinguish among those effects.13 Our
results also show that, in the early years of transition, the supervisory body did not have
much better information with respect to predicting bank failure than that which was
available to the general public via retail interest rates. Finally, our results suggest that
it would be useful to combine balance sheet and interest rate data. In the Czech case
this significantly improved the quality of the prediction of bank failures.




13
     The EBRD (1997)transition report mentioned that tightening of central bank credit precipitated the
      liquidity crisis in several transition countries. As a result, the number of banks in Russia declined
      from a peak of 2,561 in 1995 to 1,887 by June 1997. In the Baltic states the number of banks fell
      in the aftermath of banking crises from a peak of 43 (1992) to 14 (1996) in Estonia, 61 (1993) to 33
      (1996) in Latvia, and 27 (1994) to 12 (1996) in Lithuania.




80
                                                                                                            4.5    Conclusions

 Table 1. Comparison of average deposit rates (control group vs. problematic banks).
                Semiannual data from June 1993 to December 1995
              Year           Group       Checking 1 year term 2 year term
                                          account     deposit      deposit

                1993.1               ”control”                  3.48               12.95                   14.53
                                   ”problematic”                4.44               13.74                   14.36
          p-value (t-tests)                                    .05**               0.16                     0.4

                1993.2               ”control”                  3.97               13.05                   14.44
                                   ”problematic”                4.29               13.95                   14.72
          p-value (t-tests)                                     0.27               .03**                    0.22

                1994.1        ”control”                         3.61               10.51                   13.42
                            ”problematic”                       4.21               11.75                    13.6
          p-value (t-tests)     0.18                           .05**              .00***

                1994.2               ”control”                   3.4               9.82                    12.83
                                   ”problematic”                4.36               10.80                   14.51
          p-value (t-tests)                                     .08*               .10*                    .05**

                1995.1               ”control”                 3.17                 9.45                   11.68
                                   ”problematic”               4.47                10.61                   13.67
          p-value (t-tests)                                   .01***               .03**                  .00***

                1995.2               ”control”                  3.56               9.62                    11.15
                                   ”problematic”                4.68               10.63                   12.92
          p-value (t-tests)                                    .03**              .01***                  .01***

*** Significant at 1% level, ** Significant at 5% level,
* Significant at 10% level

       Table 2. Comparison of logit models. Standard errors are in parentheses.
           Variable                                  Period 1995/1                         Period 1995/2
                                            I.         II.       III.             I.         II.       III.
           CA, Capital adequacy             .10 (.65)            -.53 (.39)       .17 (.11)            -.54 (.49)
           EM, Equity multiplier            -.05 (.09)           2.57 (1.6)       -.04 (.11)           -.1.4 (1.2)
           ROA, Return on Assets            -.31 (.22)           -.82 (.61)       -2.3 (.56)           -.01 (.88)
           LLRCL, Classified Loans          .05 (.07)            -.83 (.70)       -1.9 (1.3)           -3.0 (2.9)
           Coverage by Provisions
           Y1 H, One Year Term deposit                  .15 (.11)    2.68 (1.8)               .07 (.14)    1.3 (1.5)
           rate (the highest)
           Y1 L, One Year Term deposit                  -.14 (.18)   -.85 (.84)               -.02 (.22)   .49 (1.1)
           rate (the lowest)
           R-square                         0.1         0.09        0.71          0.35        0.06        0.69
           Fraction of Correct Prediction   0.65        0.7         0.9           0.75        0.63        0.88
                                                     2                                     2
           Test I. vs. II. (p-value)               χ (1) = 0.20 (.65)                    χ (1) = 0.67 (.41)
           Test II. vs. III. (p-value)             χ2 (1) = 2.67 (.10)*                  χ2 (1) = 2.67 (.10)*
           Test I. vs. III. (p-value)              χ2 (1) = 3.57 (.06)*                   χ2 (1) = 1.0 (.32)




                                                                                                                           81
4    Predicting Bank Failures in Transition

** Significant at 5% level, * Significant at 10% level.
+ The test reported here is a chi-square test whether one model dominates the other in

terms of accuracy of prediction. Our null hypothesis is that there is no difference between
those models in prediction accuracy. Denote by 00 +00 the cases when models correctly
predicted the dependent variable, and by 00 − −00 when they did not. The quality of the
prediction can then be summarized in the following table:

              Model 1   +      –     Σ

    Model 2     +       n11    n12   n1.
                –       n21    n22   n2.
                Σ       n.1    n.2    n

Corresponding test statistic
       ( n12 − n21 )2
χ2 =                  has chi-square distribution with 1 degree of freedom.
         n12 + n21

For more details see Hanousek (1998).




82
                                                                                   4.5   Conclusions

Figures 1 and 2. One Year Retail Deposit Rates (the highest)


                     20


                                                                               1



                                                      0                   11
                     15                                    0
                                                                    0
                                                                       11
                                                                    1 10
                                                               2       1 1
                                                          10   01
         June 1994




                                                  0
                                                      0
                              0               1
                                          0

                     10                   0




                              0



                      5
                          5         10                                  15                20
                                         December 1994




Symbol ”1” indicates the banks that failed during the period 1994-1996, while ”0” de-
notes those banks which ”survived”. As a benchmark (denoted by 2) we used ”Plzenska
banka”, the bank that provided practically no corporate lending, and therefore, their
interest rates should not reflect problems with their portfolio of loans.




Bibliography
Barber, J. R., Chang, C. & Thurston, D. (1996). Bank failure, risk, and capital regula-
    tion, Journal of Economics and Finance 3(20): 13–20.
Cordella, T. & Yeyati, E. (1998). Public disclosure and bank failures, IMF Staff Papers
    1(45).
Ellis, D. & Flannery, M. (1992). Does the debt market assess large banks, Journal of
      Monetary Economics (30): 481–502.
Hanousek, J. (1998). Specification tests of (binary) choice models. a non-parametric
    approach, Proceedings of Prague Stochastics, pp. 213−−216.
Hwang, D., Lee, C. & Liaw, K. (1997). Forecasting bank failures and deposit insurance
   premium, International Review of Economics and Finance 3(6): 317−−34.



                                                                                                 83
4    Predicting Bank Failures in Transition



            X3




                 3
                 2
                 1
                 0
                 -1
                       -1   0   1   2   3




            X4
                 3




                                            3
                 2




                                            2
                 1




                                            1
                 0




                                            0
                 -1




                                            -1
                       -1   0   1   2   3        -1   0   1   2   3



            X5
                 3




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




                                                                      0
                 -1




                                            -1




                                                                      -1
                       -1   0   1   2   3        -1   0   1   2   3    -1   0   1   2   3




                  X2                         X3                        X4




Lane, W., Looney, S. & Wansley, J. (1990). An application of the Cox proportional
    hazard model to bank failure, Journal of Banking and Finance pp. 511–531.

Looney, S., Wansley, J. & Lane, W. (1989). An examination of misclassification with
    bank failure prediction models, Journal of Economics and Business .

Marcus, A. J. (1990). Deregulation and bank financial policy, Journal of Banking and
    Finance (8): 557–565.

Roth, M. (1994). Too-big-to-fail and the stability of the banking system: Some insights
    from foreign, Business Economics Countries pp. 43–49.




84
5 Credit Scoring using Semiparametric
  Methods
                                                         Marlene Müller and Bernd Rönz




5.1    Introduction

Credit scoring methods aim to assess credit worthiness of potential borrowers to keep
the risk of credit loss low and to minimize the costs of failure over risk groups. Typical
methods which are used for the statistical classification of credit applicants are linear or
quadratic discriminant analysis and logistic discriminant analysis. These methods are
based on scores which depend on the explanatory variables in a predefined form (usually
linear). Recent methods that allow a more flexible modeling are neural networks and
classification trees (see e.g. Arminger, Enache & Bonne 1997) as well as nonparametric
approaches (see e.g. Henley & Hand 1996).
Logistic discrimination analysis assumes that the probability for a ”bad” loan (default)
is given by P (Y = 1|X) = F (β T X), with Y ∈ {0, 1} indicating the status of the loan
and X denoting the vector of explanatory variables for the credit applicant. We consider
a semiparametric approach here, that generalizes the linear argument in the probability
P (Y = 1|X) to a partial linear argument. This model is a special case of the Generalized
Partial Linear Model E(Y |X, T ) = G{β T X + m(T )} (GPLM) which allows to model the
influence of a part T of the explanatory variables in a nonparametric way. Here, G(•) is
a known function, β is an unknown parameter vector, and m(•) is an unknown function.
The parametric component β and the nonparametric function m(•) can be estimated by
the quasilikelihood method proposed in Severini & Staniswalis (1994).
We apply the GPLM estimator mainly as an exploratory tool in a practical credit scoring
situation. Credit scoring data usually provide various discrete and continuous explana-
tory variables which makes the application of a GPLM interesting here. In contrast
to more general nonparametric approaches, the estimated GPLM models allow an easy
visualization and interpretation of the results. The estimated curves indicate in which
direction the logistic discriminant should be improved to obtain a better separation of
”good” and ”bad” loans.
The following Section 5.2 gives a short data description. Section 5.3 presents the results
of a logistic discrimination analysis. Section 5.4 describes the semiparametric extension



                                                                                         85
5    Credit Scoring using Semiparametric Methods

to the logistic discrimination analysis. We estimated and compared different variations of
the semiparametric model in order to see how the several explanatory variables influence
credit worthiness. Section 5.5 compares the semiparametric fits the classic logistic anal-
ysis. Finally, Section 5.6 discusses the estimated models with respect to misclassification
and performance curves.


5.2      Data Description

The analyzed data in this paper have been provided by a French bank. The given full
estimation sample (denoted as data set A in the following) consists of 6672 cases (loans)
and 24 variables:

     • Response variable Y (status of loan, 0=“good”, 1=“bad”). The number of “bad”
       loans is relatively small (400 “bad” versus 6272 “good” loans in the estimation
       sample).

     • Metric explanatory variables X2 to X9. All of them have (right) skewed distribu-
       tions. Variables X6 to X9 in particular have one realization which covers a majority
       of observations.

     • Categorical explanatory variables X10 to X24. Six of them are dichotomous. The
       others have three to eleven categories which are not ordered. Hence, these variables
       need to be categorized into dummies for the estimation and validation.

Figure 5.1 shows kernel density estimates (using rule-of-thumb bandwidths) of the metric
explanatory variables X2 to X9. All density estimates show the existence of outliers, in
particular in the upper tails. For this reason we restricted our analysis to only those
observations with X2, . . . , X9 ∈ [−3, 3]. We denote the resulting data set of 6180 cases as
data set B. The kernel density estimates for this smaller sample are shown in Figure 5.2.
Figure 5.3 shows some bivariate scatterplots of the metric variables X2 to X9. It can be
clearly seen that the variables X6 to X9 are of quasi-discrete structure. We will therefore
concentrate on variables X2 to X5 for the nonparametric part of semiparametric model.
In addition to the estimation sample, the bank provided us with a validation data set of
2158 cases. We denote this validation data set as data set C in the following. Table 5.1
summarizes the percentage of ”good” and ”bad” loans in each subsample.




86
                                                                  5.3    Logistic Credit Scoring

                          Estimation (full)    Estimation (used)          Validation
                            data set A            data set B             data set C
          0 (”good”)      6272    (94.0%)      5808     (94.0%)         2045 (94.8%)
          1 (”bad”)        400     ( 6.0%)      372      ( 6.0%)         113 ( 5.2%)
          total           6672                 6180                     2158

                       Table 5.1: Responses in data sets A, B and C.


5.3     Logistic Credit Scoring

The logit model (logistic discriminant analysis) assumes that the probability for a “bad”
loan is given by                                              
                                              X24
                           P (Y = 1|X) = F        βjT Xj + β0                      (5.1)
                                                  j=2

where
                                                     1
                                     F (u) =
                                               1 + exp(−u)
is the logistic (cumulative) distribution function. Xj denotes the j-th variable if Xj is
metric (j ∈ {2, . . . , 9}) and the vector of dummies if Xj is categorical (j ∈ {10, . . . , 24}).
For all categorical variables we used the first category as reference.
The logit model is estimated by maximum–likelihood. Table 5.2 shows the estimation
results for this model. It turns out, that in fact all variables contribute more or less to
the explanation of the response. The modeling for the categorical variables cannot be
further improved, since by using dummies one considers all possible effects. Concerning
the continuous variables, we observe nonsignificant coefficients for some regressors. The
continuous variables get more attention by using semiparametric models.


5.4     Semiparametric Credit Scoring

The logit model (5.1) is a special case of the generalized linear model (GLM, see
McCullagh & Nelder 1989) which is given by
                                     E(Y |X) = G(β T X).
In the special case of a binary response we have
                                   E(Y |X) = P (Y = 1|X).

The semiparametric logit model that we consider here generalizes the linear argument
β T X to a partial linear argument:
                               E(Y |X, T ) = G{β T X + m(T )}



                                                                                               87
5    Credit Scoring using Semiparametric Methods

This generalized partial linear model (GPLM) allows us to describe the influence of a
part T of the explanatory variables in a nonparametric way. Here, G(•) is a known
function, β is an unknown parameter vector, and m(•) is an unknown function. The
parametric component β and the nonparametric function m(•) can be estimated by the
quasilikelihood method proposed in Severini & Staniswalis (1994).
We will use the GPLM estimator mainly as an exploratory tool in our practical credit
scoring situation. Therefore we consider the GPLM for several of the metric variables
separately as well as for combinations of them. As said before, we only consider variables
X2 to X5 to be used within a nonparametric function because of the quasi–discrete
structure of X6 to X9. For instance, when we include variable X5 in a nonlinear way,
the parametric logit model is modified to
                                                                  
                                                      X24
                       P (Y = 1|X) = F m5 (X5 ) +          βjT Xj 
                                                      j=2,j6=5

where a possible intercept is contained in the function m5 (•).
Table 5.3 contains only the parametric coefficients for the parametric and semipara-
metric estimates for variables X2 to X9. The column headed by “Logit” repeats the
parametric logit estimates for the for model with variables X2 to X24. The rest of
the columns correspond to the semiparametric estimates where we fitted those variables
nonparametrically which are heading the columns.
It turns out, that all coefficients vary little over the different estimates. This holds as
well for their significance (determined by a t–test). Variables X4 and X5 are constantly
insignificant over all estimates. Hence, they are interesting candidates for a nonparamet-
ric modeling: variables which are significant may already capture a lot of information
on Y by the parametric inclusion into the model.
The semiparametric logit model is estimated by semiparametric maximum-likelihood,
a combination of ordinary and smoothed maximum-likelihood. The fitted curves for
the nonparametric components according to Table 5.3 can be found in Figures 5.4 for
the marginal fits (variables X2 to X5 separately as the nonparametrical component)
and Figure 5.6 for the bivariate surface (variables X4 and X5 jointly nonparametrically
included). Additionally, Figures 5.4 and 5.5 reflect the actual dependence of the response
Y on variables X2 to X9. We have plotted each variable restricted to [-3,3] (i.e. the data
from sample B) versus the logits
                                                      
                                                   pb
                                   logit = log
                                                 1 − pb
where pb are the relative frequencies for Y = 1. Essentially, these logits are obtained from
classes of identical realizations. In case that pb was 0 or 1, several realizations have been
summarized into one class. For all variables but X7 this only concerns single values.
The plots of the marginal dependencies for variables X6 to X9 show that the realizations
essentially concentrate in one value. Hence we did not fit a nonparametric function here.



88
                                                   5.5   Testing the Semiparametric Model

5.5    Testing the Semiparametric Model

To assess, whether the semiparametric fit outperforms the parametric logit or not, we
have a number of statistical characteristics. For the above estimated models, they are
summarized in Table 5.4.
The deviance is minus twice the estimated log–likelihood of the fitted model in our case.
For the parametric case, the degrees of freedom just denote

                                        df = n − k

where n is the sample size and k the number of estimated parameters. In the semi-
parametric case, a corresponding number of degrees of freedom can be approximated.
Deviance and (approximate) degrees of freedom of the parametric and the semipara-
metric model can be used to construct a likelihood ratio test to compare both models
(see Buja, Hastie & Tibshirani 1989, Müller 1997). The obtained significance levels from
these tests are denoted by α. Finally, we listed the pseudo R2 values, an analog to the
linear regression coefficient of determination.
It is obvious to see that models containing variable X5 in the nonparametric part consid-
erably decrease the deviance and increase the coefficient of determination R2 . Accord-
ingly, the significance level for the test of parametric versus nonparametric modeling
decreases. In particular, it is below 5% for the both models including X5 alone and
including X4, X5 jointly in a nonparametric way.


5.6    Misclassification and Performance Curves

The different fits can be compared by looking at misclassification rates. For the valida-
tion, the provided data comprise a subsample (data set C) which was not included in
the estimation. We use this validation sample to evaluate all estimators.
The misclassification rates can be pictured by performance curves (Lorenz curves). The
performance curve is defined by plotting the probability of observations classified as
“good”
                                        P (S < s)
versus the conditional relative frequency of observations classified as “good” conditioned
on “bad”
                                     P (S < s|Y = 1).
Here, S denotes the score which equals in the parametric logit model
                                        24
                                        X
                                   S=         βjT Xj + β0
                                        j=2




                                                                                       89
5    Credit Scoring using Semiparametric Methods

and in the semiparametric logit model
                                                  24
                                                  X
                               S = m5 (X5 ) +              βj Xj
                                                j=2,j6=5

when fitting X5 nonparametrically, for instance.
The probability value P (S < s|Y = 1) is a measure for misclassification and thus to be
minimized. Hence, one performance curve is to be preferred to another, when it is more
downwards shaped.
In practice, the probability P (S < s) is replaced by the relative frequency of classifica-
tions Y = 0 (“good”) given a threshold s. The analog is done for P (S < s|Y = 1). We
have computed performance curves for both the estimation data set B and the validation
data set C.
Figure 5.7 compares the performance of the parametric logit fit and the semiparametric
logit fit obtained by separately including X2 to X5 nonparametrically. Indeed, the
semiparametric model for the influence of X5 improves the performance with respect to
the parametric model. The semiparametric models for the influence of X2 to X4 do not
improve the performance with respect to the parametric model, though.
Figure 5.8 compares the performance of the parametric logit fit and the semiparametric
logit fit obtained by jointly including X4, X5 nonparametrically. This performance curve
improves versus nonparametrically fitting only X4, but shows less power versus fitting
only X5. Hence, the improvement of using both variables jointly may be explained by
the influence of X5 only.




Bibliography

Arminger, G., Enache, D. & Bonne, T. (1997). Analyzing credit risk data: A comparison
   of logistic discrimination, classification tree analysis, and feedforward networks,
   Computational Statistics, Special Issue: 10 Years AG GLM 12: 293–310.

Buja, A., Hastie, T. & Tibshirani, R. (1989). Linear smoothers and additive models
    (with discussion), Annals of Statistics 17: 453–555.

Gourieroux, C. (1994). Credit scoring. Unpublished script.

Hand, D. J. & Henley, W. E. (1997). Statistical classification methods in consumer credit
    scoring: a review, Journal of the Royal Statistical Society, Series A 160: 523–541.

Härdle, W., Mammen, E. & Müller, M. (1998). Testing parametric versus semipara-
     metric modelling in generalized linear models, Journal of the American Statistical
     Association 93: 1461–1474.



90
                                        5.6   Misclassification and Performance Curves

Henley, W. E. & Hand, D. J. (1996). A k-nearest-neighbor classifier for assessing con-
    sumer credit risk, Statistician 45: 77–95.

McCullagh, P. & Nelder, J. A. (1989). Generalized Linear Models, Vol. 37 of Monographs
   on Statistics and Applied Probability, 2 edn, Chapman and Hall, London.

Müller, M. (1997). Computer–assisted generalized partial linear models, Proceedings of
     Interface ’97, Vol. 29/1, Houston, TX, May 14–17, 1997, pp. 221–230.

Müller, M., Rönz, B. & Härdle, W. (1997). Computerassisted semiparametric generalized
     linear models, Computational Statistics, Special Issue: 10 Years AG GLM 12: 153–
     172.

Severini, T. A. & Staniswalis, J. G. (1994). Quasi-likelihood estimation in semiparamet-
    ric models, Journal of the American Statistical Association 89: 501–511.




                                                                                     91
5    Credit Scoring using Semiparametric Methods


                                            density for variable 2                                                density for variable 3




                       0.5




                                                                                              0.5
                       0.4




                                                                                              0.4
                         0.3




                                                                                           0.3
                  density




                                                                                       density
                0.2




                                                                                              0.2
                       0.1




                                                                                              0.1
                       0




                                                                                              0
                                   -2               0           2             4                               0             2                 4             6
                                                         X2                                                                     X3

                                            density for variable 4                                                density for variable 5
                       0.8




                                                                                              0.8
                       0.6




                                                                                                0.6
                density




                                                                                        density
                 0.4




                                                                                       0.4
                       0.2




                                                                                              0.2
                       0




                                                                                              0

                                   0                 2              4             6                       0             2                 4                 6
                                                         X4                                                                     X5




                               (oversmoothed) density for variable 6                                  (oversmoothed) density for variable 7
                                                                                              0.8
                       1




                                                                                              0.6
                density




                                                                                       density
                                                                                        0.4
                0.5




                                                                                              0.2
                       0




                                                                                              0




                               0        10      20         30       40    50                          0            10                20                30
                                                         X6                                                                     X7

                               (oversmoothed) density for variable 8                                  (oversmoothed) density for variable 9
                       1




                                                                                              0.8
                                                                                                0.6
                density




                                                                                        density
                0.5




                                                                                       0.4    0.2
                       0




                                                                                              0




                               0       10      20         30    40       50       60                  0                 5                         10
                                                         X8                                                                     X9




Figure 5.1: Kernel density estimates, variables X2 to X9, estimation data set A. denest



92
                                                                                        5.6             Misclassification and Performance Curves


                                               density for variable 2                                                     density for variable 3




                         0.5




                                                                                                     0.5
                         0.4




                                                                                                     0.4
               density




                                                                                              density
                  0.3




                                                                                                 0.3
                         0.2




                                                                                                     0.2
                         0.1




                                                                                                     0.1
                         0




                                                                                                     0
                                      -1           0              1         2       3                        -1               0            1             2         3
                                                             X2                                                                           X3

                                               density for variable 4                                                     density for variable 5




                                                                                                     1
                         0.8
                         0.6
               density




                                                                                              density
                                                                                               0.5
               0.4       0.2




                                                                                                     0
                         0




                           -1                  0             1              2       3                                     0            1             2             3
                                                             X4                                                                        X5




                                (oversmoothed) density for variable 6                                        (oversmoothed) density for variable 7
                         0.8




                                                                                                     1
                         0.6
               density




                                                                                              density
                                                                                                0.5
                 0.4     0.2




                                                                                                     0
                         0




                               -0.5        0       0.5        1       1.5       2   2.5                               0               1              2             3
                                                             X6                                                                           X7

                                (oversmoothed) density for variable 8                                        (oversmoothed) density for variable 9
                                                                                                     2.5
                         1.5




                                                                                                     2
                         1




                                                                                                       1.5
               density




                                                                                               density
                                                                                              1
                         0.5




                                                                                                     0.5
                         0




                                                                                                     0




                                      0                  1              2               3                         0       0.5     1            1.5   2       2.5
                                                             X8                                                                           X9




Figure 5.2: Kernel density estimates, variables X2 to X9, estimation data set B. denest



                                                                                                                                                                       93
5    Credit Scoring using Semiparametric Methods


                  X3




                       3
                       2
                       1
                       0
                       -1
                                   -1       0         1         2       3




                  X4




                       3




                                                                              3
                       2




                                                                              2
                       1




                                                                              1
                       0




                                                                              0
                       -1




                                                                              -1
                                   -1       0         1         2       3          -1       0       1       2   3



                  X5
                       3




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




                                                                                                                    0
                       -1




                                                                              -1




                                                                                                                    -1
                                   -1       0         1         2       3          -1       0       1       2   3    -1       0       1       2   3




                        X2                                                     X3                                    X4




                  X7
                       3
                       2
                       1
                       0




                            -0.5        0   0.5   1       1.5       2   2.5




                  X8
                       3




                                                                              3
                       2




                                                                              2
                       1




                                                                              1
                       0




                                                                              0




                            -0.5        0   0.5   1       1.5       2   2.5             0       1       2       3



                  X9
                       2




                                                                              2




                                                                                                                    2
                       1




                                                                              1




                                                                                                                    1
                       0




                                                                              0




                                                                                                                    0




                            -0.5        0   0.5   1       1.5       2   2.5             0       1       2       3         0       1       2       3




                        X6                                                     X7                                    X8




Figure 5.3: Scatterplots, variables X2 to X5 (upper plot) and X6 to X9 (lower plot),
            estimation data set B. Observations corresponding to Y=1 are emphasized
            in black.


94
                                        5.6   Misclassification and Performance Curves




         Variable    Coefficient S.E. t-value Variable Coefficient S.E. t-value
         X0 (const.) -2.605280 0.5890 -4.42 X19#2       -0.086954 0.3082 -0.28
         X2           0.246641 0.1047    2.35 X19#3      0.272517 0.2506   1.09
         X3          -0.417068 0.0817 -5.10 X19#4       -0.253440 0.4244 -0.60
         X4           -0.062019 0.0849 -0.73 X19#5       0.178965 0.3461   0.52
         X5           -0.038428 0.0816 -0.47 X19#6      -0.174914 0.3619 -0.48
         X6           0.187872 0.0907    2.07 X19#7      0.462114 0.3419   1.35
         X7           -0.137850 0.1567 -0.88 X19#8 -1.674337 0.6378 -2.63
         X8          -0.789690 0.1800 -4.39 X19#9        0.259195 0.4478   0.58
         X9          -1.214998 0.3977 -3.06 X19#10      -0.051598 0.2812 -0.18
         X10#2        -0.259297 0.1402 -1.85 X20#2      -0.224498 0.3093 -0.73
         X11#2       -0.811723 0.1277 -6.36 X20#3       -0.147150 0.2269 -0.65
         X12#2        -0.272002 0.1606 -1.69 X20#4       0.049020 0.1481   0.33
         X13#2         0.239844 0.1332   1.80 X21#2      0.132399 0.3518   0.38
         X14#2        -0.336682 0.2334 -1.44 X21#3     0.397020 0.1879     2.11
         X15#2        0.389509 0.1935    2.01 X22#2     -0.338244 0.3170 -1.07
         X15#3         0.332026 0.2362   1.41 X22#3     -0.211537 0.2760 -0.77
         X15#4        0.721355 0.2580    2.80 X22#4     -0.026275 0.3479 -0.08
         X15#5         0.492159 0.3305   1.49 X22#5     -0.230338 0.3462 -0.67
         X15#6        0.785610 0.2258    3.48 X22#6     -0.244894 0.4859 -0.50
         X16#2        0.494780 0.2480    2.00 X22#7     -0.021972 0.2959 -0.07
         X16#3        -0.004237 0.2463 -0.02 X22#8      -0.009831 0.2802 -0.04
         X16#4         0.315296 0.3006   1.05 X22#9      0.380940 0.2497   1.53
         X16#5        -0.017512 0.2461 -0.07 X22#10     -1.699287 1.0450 -1.63
         X16#6         0.198915 0.2575   0.77 X22#11     0.075720 0.2767   0.27
         X17#2        -0.144418 0.2125 -0.68 X23#2      -0.000030 0.1727 -0.00
         X17#3       -1.070450 0.2684 -3.99 X23#3       -0.255106 0.1989 -1.28
         X17#4        -0.393934 0.2358 -1.67 X24#2       0.390693 0.2527   1.55
         X17#5        0.921013 0.3223    2.86
         X17#6       -1.027829 0.1424 -7.22
         X18#2         0.165786 0.2715   0.61
         X18#3         0.415539 0.2193   1.89
         X18#4        0.788624 0.2145    3.68
         X18#5        0.565867 0.1944    2.91 df                           6118
         X18#6         0.463575 0.2399   1.93 Log-Lik.               -1199.6278
         X18#7        0.568302 0.2579    2.20 Deviance                2399.2556


Table 5.2: Results of the Logit Estimation. Estimation data set B. Bold coefficients are
           significant at 5%. glmest




                                                                                     95
5    Credit Scoring using Semiparametric Methods




                                                  Nonparametric in
Variable        Logit          X2         X3         X4       X5    X4,X5      X2,X4,X5
constant      -2.605            –          –          –        –         –             –
X2             0.247            –     0.243      0.241    0.243     0.228              –
X3            -0.417      -0.414           –    -0.414   -0.416    -0.408        -0.399
X4             -0.062      -0.052     -0.063          –   -0.065         –             –
X5             -0.038      -0.051     -0.045     -0.034        –         –             –
X6             0.188       0.223      0.193      0.190    0.177      0.176        0.188
X7             -0.138      -0.138     -0.142     -0.131   -0.146    -0.135        -0.128
X8            -0.790      -0.777     -0.800     -0.786   -0.796    -0.792        -0.796
X9            -1.215      -1.228     -1.213     -1.222   -1.216    -1.214        -1.215

Table 5.3: Parametric coefficients in parametric and semiparametric logit, variables X2
           to X9. Estimation data set B. Bold values are significant at 5%. gplmest




                                                  Nonparametric in
                 Logit         X2         X3        X4       X5    X4,X5       X2,X4,X5
Deviance        2399.26    2393.16    2395.06    2391.17   2386.97   2381.49     2381.96
df              6118.00    6113.79    6113.45    6113.42   6113.36   6108.56     6107.17
α                     –      0.212      0.459      0.130    0.024     0.046        0.094
pseudo R2       14.68%     14.89%     14.82%     14.96%    15.11%    15.31%      15.29%


Table 5.4: Statistical characteristics in parametric and semiparametric logit fits. Esti-
           mation data set B. Bold values are significant at 5%.




96
                                                             5.6     Misclassification and Performance Curves




                                   Variable X2                                                           Variable X3




                                                                               0.5
              1.5




                                                                               0
                      1
   b2*X2,m(X2), logit’s




                                                                   b3*X3,m(X3), logit’s
                                                                                 -0.5
            0.5




                                                                          -1
       0




                                                                   -1.5
              -0.5




                                                                               -2
              -1




                          -1       0        1        2   3                                  -1       0        1        2   3
                                       X2                                                                    X3



                                   Variable X4                                                           Variable X5
                                                                               0.5
              0




                                                                                        0
   b4*X4,m(X4), logit’s




                                                                   b5*X5,m(X5), logit’s
               -0.5




                                                                           -0.5
       -1




                                                                    -1
              -1.5




                                                                               -1.5




                               0       1         2       3                                       0           1         2   3
                                       X4                                                                    X5



Figure 5.4: Marginal dependencies, variables X2 to X5. Thicker bullets correspond to
            more observations in a class. Parametric logit fits (thin dashed linear func-
            tions) and GPLM logit fits (thick solid curves).




                                                                                                                               97
5     Credit Scoring using Semiparametric Methods




                                            Variable X6                                                   Variable X7
             1




                                                                                  2     1
                0.5
     b6*X6,logit’s




                                                                          b7*X7,logit’s
                                                                             0
             0




                                                                                  -1
                                                                                  -2
                       -0.5       0         0.5        1      1.5   2                           0               1              2         3
                                                      X6                                                            X7



                                            Variable X8                                                   Variable X9
                                                                                  2
             2




                                                                                  1
                   1




                                                                                       0
     b8*X8,logit’s




                                                                          b9*X9,logit’s
         0




                                                                             -1   -2
             -1




                                                                                  -3
             -2




                              0       0.5         1     1.5     2   2.5                     0       0.5     1            1.5   2   2.5
                                                      X8                                                            X9



Figure 5.5: Marginal dependencies, variables X6 to X9. Thicker bullets correspond to
            more observations in a class. Parametric logit fits (thin dashed). Estimation
            data set B.




98
                                         5.6   Misclassification and Performance Curves




                                  X4, X5 nonparametric




                                           3




                                     2            1




Figure 5.6: Bivariate nonparametric surface for variables X4, X5. Estimation data set B.




                                                                                     99
5   Credit Scoring using Semiparametric Methods




                       Performance X2                        Performance X3
           1




                                                 1
      P(S<s|Y=1)




                                            P(S<s|Y=1)
          0.5




                                                0.5
           0




                   0         0.5        1        0       0         0.5         1
                           P(S<s)                                P(S<s)

                       Performance X4                        Performance X5
           1




                                                 1
      P(S<s|Y=1)




                                            P(S<s|Y=1)
          0.5




                                                0.5
           0




                                                 0




                   0         0.5        1                0         0.5         1
                           P(S<s)                                P(S<s)




Figure 5.7: Performance curves, parametric logit (black dashed) and semiparametric
            logit models (thick grey), with variables X2 to X5 (separately) included non-
            parametrically. Validation data set C.




100
                                         5.6   Misclassification and Performance Curves




                                   Performance X4, X5
                       1
                  P(S<s|Y=1)
                      0.5
                       0




                               0           0.5                 1
                                         P(S<s)


Figure 5.8: Performance curves, parametric logit (black dashed) and semiparametric
            logit model (thick grey), with variables X4, X5 (jointly) included nonpara-
            metrically. Validation data set C.




                                                                                   101
5   Credit Scoring using Semiparametric Methods




102
6 On the (Ir)Relevancy of Value-at-Risk
  Regulation
                                          Phornchanok J. Cumperayot, Jon Danielsson,
                                            Bjorn N. Jorgensen and Caspar G. de Vries




6.1    Introduction

The measurement and practical implementation of the Value–at–Risk (VaR) criterion
is an active and exciting area of research, with numerous recent contributions. This
research has almost exclusively been concerned with the accuracy of various estimation
techniques and risk measures. Compared to the statistical approach, the financial eco-
nomic analysis of VaR has been relatively neglected. Guthoff, Pfingsten & Wolf (1996)
consider the ranking of projects and traditional performance criteria, while Kupiec &
O’Brien (1997) and Steinherr (1998) discuss incentive compatible regulation schemes.
The wider issue of the benefits for society of VaR based risk management and supervi-
sion has hardly been addressed, see however Danielsson, Jorgensen & de Vries (1999b)
and Danielsson, Jorgensen & de Vries (1999a). They consider the implications of exter-
nally imposed VaR constraints, the public relevance of the VaR based management and
regulation schemes, and incentives for quality improvement. This paper summarizes the
public policy aspects of this broader line of reasoning.
It is, first of all, important to understand the relation of the VaR measure to other
risk measures. The VaR measure is reasonable if interpreted according to its stated
intensions, i.e. when it is evaluated truly in the tail area. As demonstrated by Jorion
(1998) account of the Long Term Capital Management crisis, VaR risk management
is about the tail events. Evaluating VaR deep in the tail area yields good information
about infrequent but extreme events about which one should not stay ignorant. Note the
emphasis on extreme tail events is counter to most stated industry practice. In addition,
the VaR criterion and related alternatives like expected shortfall, have their limitations
due to presence of securities with nonlinear payoffs. VaR, as the sole risk objective,
may distort bank actions towards excessive risk taking if it permits mangers to become
overly focused on expected returns, as noted by Jorion (1998). Since a single minded
focus on VaR and expected returns appears too simple minded, we feel that VaR should
be modelled as a side constraint on expected utility maximization when structuring
portfolios. This has the added benefit that the public relevance of VaR regulation and



                                                                                      103
6   On the (Ir)Relevancy of Value-at-Risk Regulation

supervision is better captured by such an interpretation of risk management. When
modelled as a side constraint, the VaR restriction can be viewed as a means to internalize
externalities of individual risk taking to the financial system at large. To address this
issue Danielsson et al. (1999a) discuss how the VaR side constraint affects the equilibrium
allocation in a complete markets setting.
The complete markets setting necessarily results in VaR management by financial in-
termediaries being of limited relevance. We therefore investigate the signals of the VaR
measure in incomplete markets. If security markets are incomplete, VaR requirements
may correct for market failures. The VaR measure in an incomplete markets setting is
unfortunately a double edged sword. Due to the second best nature, the imposition of a
crude and sub–optimal VaR constraint may perversely increase the risk in the financial
system. From the related literature on solvency regulation we know that crude regulation
can enhance risk taking rather than reducing it, see Kim & Santomero (1988) and Rochet
(1992). Danielsson et al. (1999b) discuss two cases of incomplete markets and VaR con-
straints, and demonstrate the possibility of adverse outcomes due to moral hazard and
differences in attitudes towards risk taking in combination with limited knowledge on
part of the regulators. Taking the limited information of supervisory agencies as given,
the potential negative effects of crude VaR based regulation should ideally be minor in
comparison to an easily identifiable overriding and glaring market failure to warrant the
centralized regulation. We are, however, not aware of such an important market failure
and suspect other motives play a role as well.
Using a public choice framework, we suggest that the drive for VaR regulation derives
from the regulatory capture by the financial industry to safeguard its monopoly power
and the preference of regulators for silent action instead of overt actions like bail outs. We
also discuss decentralized alternatives to system wide regulation that may be better at
coping with the market imperfections, and are such that these provide positive incentives
for quality improvements in the risk management of market participants.
This paper is organized as follows. In section 2 we identify sufficient conditions under
which minimizing VaR provides the same unambiguous signal as expected utility maxi-
mization and as Expected Shortfall, an alternative risk measure. Further, we discuss the
implementation of expected utility maximization subject to attaining a VaR criterion.
Section 3 analyzes the effects of introducing regulation based on VaR constraints in an
incomplete markets setting. VaR regulation can have an effect even if the confidence
level is not binding in the absence of VaR regulation. In section 4, we take a public
choice perspective on the drive for VaR regulation. Section 5 summarizes the paper.


6.2     VaR and other Risk Measures

The VaR criterion has three distinct users: internal risk management, external supervi-
sory agencies, and financial statement users (VaR as a performance measure). Although
financial institutions are the most common users of VaR, a few non–financial corporations



104
                                                         6.2   VaR and other Risk Measures

have started to use VaR and provide voluntary disclosures. We investigate conditions
under which a VaR objective rank orders projects analogous to other risk criteria. The
VaR measure computes the loss quantile q, such that the probability of a loss on the
portfolio return R equal to or larger than q is below a prespecified low confidence level,
δ:
                                     P {R ≤ q} ≤ δ.                                  (6.1)
If the confidence level, δ, is chosen sufficiently low, the VaR measure explicitly focuses risk
managers and regulators attention to infrequent but potentially catastrophic extreme
losses. An advantage of the VaR measure is that it may be computed without full
knowledge of the distribution of returns R. That is, semi–parametric or fully non–
parametric simulation methods may suffice.
In this section, we focus on the relation between the VaR concept and other risk measures
in complete markets. We first discuss the established relation between VaR and utility
theory. Danielsson et al. (1999a) consider risky projects that can be ranked by Second
Order Stochastic Dominance (SOSD). They demonstrate that at sufficiently low quan-
tiles, minimization of VaR provides the same ranking of projects as other risk measures,
e.g. the First Lower Partial Moment, the Sharpe Ratio, and Expected Shortfall if the
distributions are heavy tailed. Here we provide an alternative argument.
We start by ranking projects by expected utility. Under some conditions on the stochastic
nature of projects, projects can be ranked regardless the specific form of the utility
functions. To this end, we now introduce the SOSD concept as is standard in financial
economics, see Ingersoll (1987), p. 123, or Huang & Litzenberger (1988).

DEFINITION 6.1 Consider two portfolios i and j whose random returns Ri and Rj
are described by cumulative distribution functions Fi and Fj respectively. Portfolio i
dominates j in the sense of Second Order Stochastic Dominance (SOSD) if and only if
                            Z t            Z t
                                Fj (x)dx ⩾      Fi (x)dx ∀t                      (6.2)
                               −∞                −∞

or, equivalently,
                              E [U (Ri )] ≥ E [U (Rj )] , ∀U ∈ U
where
                      U = {U : R → R|U ∈ C 2 , U 0 (.) > 0, U 00 (.) < 0}.

Suppose the relevant risky prospects can be ordered by the SOSD criterion, and assume
that Ri strictly SOSD the other prospects. Define the first crossing quantile qc as the
quantile for which Fi (qc ) = Fj (qc ), for x ≤ qc : Fi (x) ≤ Fj (x), and for some ε > 0,
x(qc − ε, qc ) : Fi (x) < Fj (x). By the definition of SOSD, such a crossing quantile qc
exists, if it is unbounded First Order Stochastic Dominance applies as well. From the
definition of the VaR measure (6.1) it is clear that for any δ ≤ Fi (qc ) the VaR quantile
qj from P {Rj ≤ qj } ≤ δ is such that qj ≤ qi . Hence at or below the probability level



                                                                                           105
6   On the (Ir)Relevancy of Value-at-Risk Regulation

Fi (qc ), the VaR loss level for the expected utility higher ranked portfolio is below the
VaR of the inferior portfolio. Minimization of VaR leads to the same hedging decision
as maximizing arbitrary utility functions. The important proviso is that the confidence
level, δ, is chosen sufficiently conservative in the VaR computations, but this comes
naturally with the concept of VaR.


6.2.1   VaR and Other Risk Measures

First Lower Partial Moment

There are other measures that explicitly focus on the risk of loss, we consider two closely
related alternatives. The First Lower Partial Moment (FLPM) is defined as:
                                  Z t
                                       (t − x)f (x)dx.                                (6.3)
                                     −∞
The FLPM preserves the SOSD ranking regardless the choice of the threshold t since, if
the first moment is bounded,
                          Z t                  Z t
                              (t − x)f (x)dx =     F (x)dx.
                             −∞                    −∞
As was pointed out by Guthoff et al. (1996), it immediately follows that the FLPM and
VaR measures provide the same ranking given that δ is chosen sufficiently conservative.
Furthermore, they note that the VaR is just the inverse of the zero’th lower partial
moment.


Expected Shortfall

Closely related to the FLPM is the Expected Shortfall (ES) measure discussed in Artzner,
Delbaen, Eber & Heath (1998) and Artzner, Delbaen, Eber & Heath (1999). The ES
measure is defined as                   Z t
                                               f (x)
                                   ES =      x       dx.                             (6.4)
                                         −∞ F (t)
If the definition of SOSD applies, we now show that at conservatively low risk levels, the
ES and the VaR measures also coincide.

Proposition 6.1 Suppose the first moment is bounded and that distribution functions
are continuous and can be rank ordered by SOSD. Below the first crossing quantile qc ,
as defined above, ESi ≥ ESj .

PROOF:
If the first moment is bounded, from Danielsson et al. (1999a)
                                             F LP M (t)
                                  ES = t −              .
                                                F (t)



106
                                                                    6.2      VaR and other Risk Measures

At δ = Fj (tδ,j ) = Fi (tδ,i ) ≤ Fi (qc ),we can thus rewrite ESi T ESj as
                                    Z tδ,i                           Z tδ,j
                                1                         1
                         tδ,i −         Fi (x)dx T tδ,j −                     Fj (x)dx
                                δ    −∞                   δ           −∞

where qc ≥ tδ,i ≥ tδ,j . Rearrange the terms as follows
                                             Z tδ,i                 Z tδ,j
                         δ(tδ,i − tδ,j ) T            Fi (x)dx −             Fj (x)dx.
                                                 −∞                  −∞

Consider the RHS with Fj fixed, but Fi variable. Given tδ,i and tδ,j , find
                           Z tδ,i            Z tδ,j         
                       sup         Fi (x)dx −        Fj (x)dx .
                              Fi       −∞                      −∞

Under the Definition 6.1 and the definition of qc , the admissable Fi are

                           Fj (x) ≥ Fi (x) ∀x ≤ qc , and Fi (tδ,i ) = δ.

Define the following Fei (x)

                                        Fj (x) for x ∈ (−∞, tδ,j ]
                            Fei (x) = { δ for x ∈ [tδ,j , tδ,i ]
                                        Fi (x) on [tδ,i , ∞),

Note that sup Fi (x) = Fei (x), for x ∈ (−∞, tδ,i ]. From integration
                     Z tδ,i                      Z tδ,j                  Z tδ,i
                              Fei (x)dx =                  Fei (x)dx +            Fei (x)dx
                         −∞                       −∞                      tδ,j
                                                 Z tδ,j
                                             =             Fj (x)dx + δ(tδ,i − tδ,j ).
                                                  −∞

Thus                     Z tδ,i                  Z tδ,j           
                   sup              Fi (x)dx −             Fj (x)dx = δ(tδ,i − tδ,j ).
                    Fi        −∞                      −∞

Hence the RHS at most equals the LHS, since for any other admissable Fi the RHS will
be smaller. 


Artzner et al. (1998) and Artzner et al. (1999) have leveled a critique against the VaR
concept on the grounds that it fails to be subadditive. Subadditivity of a risk measure
might be considered a desirable property for a risk measure, since otherwise different
departments within a bank would not be able to cancel offsetting positions. However,
this criticism may not be applicable in the area where VaR is relevant since the above
theorem demonstrates that sufficiently far in the tail of the distribution (below the
quantile qc ) Expected Shortfall and VaR provide the same ranking of projects. Although,



                                                                                                    107
6     On the (Ir)Relevancy of Value-at-Risk Regulation

the criticism is applicable if current industry practice of choosing confidence levels at 95
to 99 percent, which is insufficiently conservative. The criticism does not apply when
very conservative confidence levels are chosen.
Nevertheless downside risk measures have their problems as well. If an organization
becomes too focused on meeting a downside risk objective in combination with large
bonuses for traders, it may lead to the following. Initially dealers ensure that the down-
side risk objective is met through buying the appropriate hedges. Subsequently, dealers
use the remaining capital to maximize expected returns, say by buying call options
which are far out of the money (which supposedly have the highest expected returns).
The resulting kinked payoff function imitates a gambling policy such that a high return
occurs with small probability, whereas a low return has a very high probability of occur-
rence. Dert & Oldenkamp (1997) have dubbed this the casino effect. This effect stems
from the implicit objective function within the organization that applies loss aversion
as the concept of risk, but displays risk neutrality above the loss threshold. A remedy
for this casino effect explored in the next subsection is to view the dealers’ problem as
maximizing expected utility subject to a side constraint that a given VaR level must be
maintained.


6.2.2       VaR as a Side Constraint

In this subsection, we model VaR regulation as a side constraint, where the VaR restric-
tion can be viewed as a means to internalize externalities of individual risk taking to
the financial system at large. Regulatory bodies often cite the stability of the payment
system as the prime motive for requiring commercial banks to satisfy certain VaR crite-
ria. Hence it seems that the public relevance of VaR regulation and supervision would
be better captured by this interpretation.
Grossman & Vila (1989) find that optimal portfolio insurance can be implemented by a
simple put option strategy, whereby puts with the strike at the desired insurance level are
added to the portfolio, and the remaining budget is allocated as in the unconstrained
problem solved at the lower wealth level. Similarly, at the very lowest risk level, the
optimal VaR–risk management involves buying a single put option with exercise price
equal to the VaR level. But for higher δ–levels, Danielsson et al. (1999a) demonstrate
that the optimal VaR strategy generally requires a cocktail of options. Consider a
complete market of contingent claims in discrete space. States can then be ordered in
keeping with marginal utilities. Suppose the VaR constraint is just binding for the m–th
ordered state. The optimal policy then requires an marginal increase in the consumption
of the m–th state, at the expense of all other states. Thus optimal VaR management
typically, lowers the payoffs of the lowest states, in contrast to the portfolio insurance
strategy. The VaR strategy can be effected through buying supershares1 of that state and
to allocate the remaining budget to the solution of the VaR unconstrained problem. In a
 1
     Supershares are a combination of short and long positions in call options with strikes at the neighboring
      states




108
                                                   6.3   Economic Motives for VaR Management

somewhat different setting Ahn, Boudoukh, Richardson & Whitelaw (1999) consider risk
management when option prices follow from the Black–Scholes formula. In their model,
a firm minimizes VaR with a single options contract subject to a cash constraint for
hedging. They derive the optimal options contract for VaR manipulation, and show that
a change in funds allocated to the hedging activity only affects the quantity purchased
of the put with that particular exercise price.
A benefit of considering complete or dynamically complete capital markets is that no–
arbitrage arguments specify the price of all possible hedging instruments independent
of risk preferences. The flip side is that risk management is relatively unimportant.2 A
firm can affect its VaR by implementing a hedging strategy; but its capital structure
decision as well as its hedging decisions do not affect the Value of the Firm (VoF) in
utility terms. Since private agents in a complete markets world can undo any financial
structuring of the firm, VaR management by financial intermediaries has only limited
relevance, and financial regulation appears superfluous.


6.3        Economic Motives for VaR Management

Incomplete markets are interesting because in such a setting VaR requirements might
correct for market failures. To explore this issue, we initially present two examples of
market failures from Danielsson et al. (1999b). We then proceed to produce an example
of how VaR regulation, that is never binding in the absence of regulation, can still have
negative impact on the economy.
Relative to complete markets, incomplete market environments are obviously more com-
plex; hedging can no longer be viewed as a separate activity from security pricing since
hedging activities influence the pricing of the underlying securities. For the financial
industry and supervisors this became reality during the 1987 market crash. In the Ex-
ample (6.1) below we construct a simple case of feedback between secondary markets
and primary markets, i.e. where the price of a put option affects the stock price. In
this section at several places we consider two agents labelled A and B, who have the
following mean–variance utility functions

                                           EUA = M − αV,                                          (6.5)
                                           EUB = M − βV,

where M denotes the mean and V the variance.

EXAMPLE 6.1 For the two agents A and B with utility functions as given in Equation
(6.5), let the risk aversion parameter for A be α = 1/8, and suppose that agent B is risk
neutral so that β = 0. Let A own a risky project with payoffs (6, 4, 2, 0, −2) depending
 2
     See, among others, Modigliani & Miller (1958), Stiglitz (1969b), Stiglitz (1969a), Stiglitz (1974),
      DeMarzo (1988), Grossman & Vila (1989), and Leland (1998)




                                                                                                    109
6     On the (Ir)Relevancy of Value-at-Risk Regulation

on the state of nature, and where each state has equal probability 1/5. Since for this
project, the mean is M = 2, and variance V = 8, it follows that EUA = 1. Agent A is
considering selling a 50% limited liability stake in the project. The value of this share is
equal to writing a call C with strike at 0. The payoff vector for him changes into

                           (3 + C, 2 + C, 1 + C, 0 + C, −2 + C) ,

with mean M = 0.8 + C and variance V = 74/25. He is willing to write the call if he
at least makes 0.8 + C − 18 74
                             25 ⩾ 1, i.e. if C ⩾ 57/100. So the minimum price for the
stock is 0.57. The risk neutral agent, B, considers this a good deal since she is willing
to pay (3 + 2 + 1) /5 = 1.2 at the most. Now suppose that B offers to sell a put on
the issued stock with strike at 3. She requires at the minimum an option premium of:
(0 + 1 + 2 + 3 + 3) /5 = 1.8. Buying the put as well as selling the stock yields A a payoff
vector of
           (3 + C − P, 2 + C − P + 1, 1 + C − P + 2, 0 + C − P + 3, −2 + C − P + 3).

 The mean payoff is M = C − P + 13/5, and the variance V = 16/25. Hence, assuming
that P = 1.8, we find that A is willing to sell the stock if
                             13     9 1 16   18
                                +C − −     =    + C ⩾ 1,
                             5      5 8 25   25
thus C ⩾ 0.28. The introduction of the put with strike at 3 lowers the minimum ac-
ceptable price of the stock from 57 cents to 28 cents. It can also be shown that the
introduction of a put with strike at 1 would lower the minimum desired stock price from
57 cents to 42 cents, assuming that the put trades at 40 cents, the minimum premium
requested by B.

The Example shows that the share price is related to the type of the put being sold.
Typically, in incomplete markets the pricing of primary and derivative securities occur
simultaneously, see Detemple & Selden (1991). As a consequence, hedging and utility
maximization are not independent activities. This joint valuation of all securities is
driven by the general equilibrium structure of the economy, i.e. individual marginal
utilities, the production structure, and the nature of shocks. These structures are likely
far from easily analyzed in concert. In view of this example, an important question for
future research appears to be the effect of VaR regulation on the valuation of primary
securities. Within the limited scope of this paper we will develop two further examples
as a proof of the following second best type proposition from Danielsson et al. (1999b).

Proposition 6.2 If markets are incomplete, VaR based regulation may either increase
or decrease welfare.

In incomplete markets the effects of risk regulation follows from the relation between
the VaR criterion and the expected utility, EU , via the value–of–the–firm, henceforth
V oF . A negative association between the VaR and VoF measures is less interesting since



110
                                          6.3   Economic Motives for VaR Management

regulators can sit idle as the firm management has an incentive to capture the gains from
VaR management. An example of this is the costly state verification setting considered
by Froot, Scharfstein & Stein (1993), and the complete markets environment considered
in Leland (1998). In the case below, if the association is positive, VaR management has
to be imposed, but ipso facto implies Pareto deterioration, see Danielsson et al. (1999b).

EXAMPLE 6.2 Let the risk aversion parameter of agent A be α = 4, and suppose
agent B is risk averse with parameter β to be determined below. Agent A owns a risky
project with payoff vector (1/15, −1/15) and state probabilities (1/2, 1/2). This project
yields A the expected utility

                              EUA = 0 − 4/225 = −8/450.

Suppose A can buy a put from B with strike at 0 and premium P . This changes the
mean return to M = 21 15
                       1
                         − P , while the variance becomes 1/900. Hence

                                 EUA (P ) = 13/450 − P.

Thus A is better off as long as P < 21/450. Let the benchmark utility for B be EU2 = 0.
Clearly, she is willing to sell the put as long as

                                  P ⩾ (15 + β/2) /450.

Suppose she is willing to sell at fair value: P = (15 + β/2) /450. Three cases emerge
depending how risk averse B is:

  1. 0 ≤ β ≤ 12 : A and B are both better off by trading the put. Hence, in this case
     the VoF and VaR of agent A are negatively correlated and the VaR does not have
     to imposed.

  2. 12 < β ≤ 30 : A does not want to buy the put since this lowers his expected utility,
     but buying the put would still reduce his VaR at the 50% probability level. In this
     case the VoF and VaR correlate positively and VaR regulation has to be imposed.

  3. β > 30 : B is extremely risk averse, so imposing the purchase of a put on A would
     not only lower his expected utility, but also increase the VaR.

The table below summarizes the three possible outcomes from the external imposition of
VaR regulation from Example 6.2. The lesson is that in incomplete markets agents may
often have a positive incentive for risk management themselves. Legislature may there-
fore think twice before imposing risk constraints. Rather, attention should first be given
to provide incentives for better risk management activities, rather than constraining the
industry.




                                                                                      111
6     On the (Ir)Relevancy of Value-at-Risk Regulation

                Level of Risk Aversion   Impact of VaR regulation
                low                      Not necessary
                medium                   Decreases both risk and VoF
                high                     Increases risk and decreases VoF


Differences in risk attitudes may be viewed as a rather strained basis for analyzing the
essential features of risk management in financial markets. Asymmetric information
among agents and between agents and regulators is more characteristic. In such a
setting moral hazard can have important macro effects as we know for example from
the S&L crisis in the United States. In such a setting risk regulation may correct for
certain externalities, but can also produce adverse outcomes, again due to the second
best solution. As is shown below, adverse effects may arise even when the VaR constraint
is never binding in the unregulated case. The example builds on Baye (1992) analysis
of Stackelberg leadership and trade quota.

EXAMPLE 6.3 Suppose A and B are banks who have to decide over investing abroad.
Bank A is the lead bank and B follows. The investment decisions are interdependent.
The decision trees in payoff space and utility space are given in Figures 1 and 2. Bank A
has to decide between strategy U and D respectively. After observing this action chosen
by bank A, bank B decides on its investment strategy through choosing L or S. Nature
plays a role in determining the chances and the outcomes in two states of the world,
labelled G and B; positive returns occur with probability 0.8, and negative returns have
probability of 0.2.
Assume further that the binomial distributions of returns and the risk aversion parame-
ters are common knowledge among the banks but not to the regulators. In this example
we assume that banks have a mean-standard deviation√utility function instead of a mean–
variance utility function. So replace V in (6.5) by V . The risk aversion parameters
are respectively α = 0.5 and β = 1.0. Expected utilities corresponding to each strategy
profile are represented in Figure 2.
By backward induction, the strategy combination (U, L) is the only subgame perfect Nash
equilibrium in the unregulated case. Suppose, however, that risk regulation bars banks
from losing more than 35. Note such a loss may only occur if the banks would select
(D, S), which however is not selected. Nevertheless, such a seemingly innocuous VaR
restriction has the effect of changing the equilibrium to (D, L). Since, if bank A selects
D, bank B can no longer respond by choosing S. It is then optimal for the lead bank A
to switch to D.

Although it is not an intention of the regulators to influence the unregulated Nash
equilibrium, since the restriction is non–binding in that particular equilibrium, it can
nevertheless alter the equilibrium. In the example, regulation obviously induces moral
hazard: It provides bank A a chance to achieve higher expected utility by bearing the
higher risk and meanwhile forcing bank B to end up at lower utility. While the VaR of



112
                                          6.3   Economic Motives for VaR Management


                                                                      Payoffs

                                                                    u (40, 40)
                                                            G 
                                                      
                                                   u              u (-20, -35)
                                            L        B
                                    
                                   
                                                G
                               u           u        u
                                  
                               
                                           H                          (50, 35)
                       U           S       HH
                                               H
                                                B HHu
                       
                                                                    (-20, -35)
                u
                  
                
                H H                                 u                 (50, 35)
            Agent A HHH                         G 
                                                
                        H
                       D HH          L         
                              Hu           u
                                                   u                 (-25, -35)
                                HH              B
                           Agent B HH
                                     HH
                                     S HH u     G
                                           HH       u                 (20, 50)
                                        Nature HH
                                                B HHu                 (-10, -40)

                        Figure 6.1: Decision tree in payoff space


bank B is fixed in both equilibria, an increase in the VaR of bank A raises social risk
and deteriorates social welfare. In fact, the summation of the maximum likely loss of
the two banks is minimized in (D, S) and maximized in (D, L). The new equilibrium
maximizes systemic risk. Paying too much attention to individual parties’ risk, may lead
to ignoring the social aspect and consequently systemic risk. Of course we could also have
the apparent non–binding VaR regulation produce a reduction in risk in the regulated
equilibrium. Suppose that the payoff to bank A in the bad state of (D, L) is raised from
−25 to −15, then the out off equilibrium VaR constraint barring (D, S) unambiguously
reduces the risk in society. This leads to the following result strengthening Proposition
6.2.

Proposition 6.3 Even though VaR–based regulation is introduced at a confidence level
where it is not binding in the absence of regulation, the introduction of VaR–based regu-
lation may increase overall risk.

Hence, regulators cannot infer that introducing seemingly non-binding VaR could not
be harmful. There are, off course, additional sources of externalities. For example,
Danielsson et al. (1999b) also demonstrate that, alternatively, these market failures
could be due to a moral hazard with regards to risk management.



                                                                                      113
6     On the (Ir)Relevancy of Value-at-Risk Regulation


                                                            Expected Utilities
                                                         u (4, 10)
                                                L 
                                      
                                  u                    u (8, 7)
                             U 
                                      S
                         
                    u
                    
                    PP
                      
                         PP
               Agent A      PP
                              DP   PPu      L            u (5, 7)
                                       PP
                                          PP
                                  Agent B   P
                                            S PP       P u (2, 14)


                          Figure 6.2: Decision tree in utility space


6.4      Policy Implications

The previous two sections illustrate that the case for externally imposed risk management
rests on strong assumptions about the financial system and that poorly thought out risk
control may lead to the perverse outcome of increasing systemic risk. Therefore, any
argument in favor of external risk management ought to depend on genuine financial
economic arguments. Typically, the case for externally imposed risk management and
bank supervision is based on a perceived fear of a systemic failure in the banking industry,
in particular the breakdown of the payment clearing system. While it is clear that such
failure would be catastrophic, it is less clear that the present regulatory environment is
conducive for containment of such a failure. Indeed, as seen above, the current regulatory
system may perversely promote systemic risk.
There are numerous episodes of financial crises with sizable failures in the banking sector.
Nevertheless, modern history contains few episodes where the clearing system broke
down, the classic definition of systemic failure, due to imprudent banking activities. As
in many of the bank panics during the era of free banking in the USA, fiscal problems at
the state level were the root cause. Free banks were required to hold state bonds on the
asset side of their balance sheets, but states often defaulted. The fact that we do not
have a large record of systemic failures may also be due to preventive regulatory action
and other policy measures, like large scale credit provision by monetary authorities in
times of crisis. But since the notion of market risk regulation is a very recent phenomena,
it is difficult to imagine how VaR regulation may reduce the chance of an event that has
hardly ever been realized. In addition financial history contains many episodes where
privately led consortia provided the necessary liquidity to troubled institutions. Thus,
even without considering the impact of VaR regulations, it is clear that there are private
alternatives to traditional systemic risk containment regulations.
The fundamental protection of the clearing system available to most monetary authori-




114
                                                                           6.4   Policy Implications

ties in a world with fiat currencies is the provision of central bank credit in times of crisis.
For obvious reasons of moral hazard, monetary authorities only reluctantly assume the
Lender–of–Last–Resort (LOLR) role, but we note that some monetary authorities have
an explicit policy of providing liquidity when needed, witness the Federal Reserve System
actions after the 1987 market crash.
The alternative to the LOLR role is explicit regulation. Such regulation can take multiple
forms. It can be preventive as the tier I and tier II capital adequacy requirements and
VaR limits. Second it can consist of ex post intervention, such as the government take-
over of banks in Scandinavia and the Korean government intervention forcing the take-
overs of five illiquid banks by other banks in 1998. In either case, moral hazard plays an
obvious role. First, regulation based on selected variables creates a demand for financial
instruments that circumvent or relax these restrictions. Second, if the government policy
of bailing out financially distressed financial institutions is correctly anticipated, there
is an incentive for excessive risk taking.
There are two avenues open to the authorities, LOLR and preventive regulations, and
the trade–offs between them have yet to be investigated. Without knowing the balance
between these alternative instruments, we suspect the authorities display a preference for
regulation over the LOLR instrument. The use of the latter instrument always implies
failure on part of the public authorities and this has real political costs to the authori-
ties. Moreover, the LOLR makes public the costs of the bail out. In contrast regulation,
even though costly, goes largely undetected by the public. A desire to keep the cost of
systemic failure prevention hidden from the public also tilts political preference in favor
of regulation. The preference for hidden actions shows up in may other aspects of public
life, e.g. in the prevalence of voluntary export restraints over tariffs in the area of foreign
trade, in spite of the costs to society. In addition, institutional economics points out that
self preservation and accumulation of power may be the primary objective of bureau-
cracy.3 Since regulatory prevention depends on the existence of a sizable administration,
while the LOLR role can be executed by a small unit within the monetary authority, the
authorities may have a preference for the regulatory approach. Finally, it is possible that
financial institutions have willingly embraced regulation, if regulation affects industry
structure by deterring entry and expediting exit, or if it facilitates collusion.
There are other more market oriented alternatives to VaR based system wide regulation:
The precommitment approach advocated by Kupiec & O’Brien (1997) and the use of
rating agencies. In the market oriented proposals more attention is given to incentives for
information provision, without the necessity for the regulator to have detailed knowledge
of the internal risk management systems. Indeed, the market based regulation adopted
by New Zealand in 1986 is combined with more extensive public disclosure, see Moran
(1997) and Parker (1997). One critique of the current set of Basel rules is that these
provide adverse incentives to improve internal risk measurement systems. The market
oriented approach would provide the positive incentives. On the other hand such systems
 3
     See, among many others, Machiavelli (1977), Hall (1986), and Carpenter (1996) and Carpenter (1998)
      .




                                                                                                   115
6     On the (Ir)Relevancy of Value-at-Risk Regulation

leave more room for undetected excessive leverage building. Steinherr (1998) proposes
to raise capital requirements for OTC positions, so as to stimulate the migration to
organized exchanges, where the mark–to–market principle reduces the risk of systemic
meltdown, and individual market participants have a strong incentive for proper risk
management. Inevitably, VaR based risk management is likely to stay with us, hopefully
it will improve due to a regulatory environment that places more emphasis on individual
responsibility.


6.5        Conclusion

When investors are risk averse and their investment opportunities can be ranked through
the second order stochastic dominance (SOSD) criterion, Danielsson et al. (1999a) show
that if the probability of extreme loss is chosen sufficiently low, the VaR concept attains
the same ranking as standard risk measures and other loss criteria. This paper extends
this result by showing that without the SOSD ranking, the rankings of investment op-
portunities based on VaR and Expected Shortfall coincide sufficiently far out in the tail.
In our view, however, the VaR criterion is best understood as a side constraint to the
expected utility maximization problem of a risk averse investor or portfolio manager.
This also has the advantage that we can view the VaR constraint as internalizing the
externalities from individual risk taking to the financial system at large. At the margin
the VaR side constraint affects the equilibrium allocation within the complete markets
setting by increasing the payoff in the state where the constraint is just binding, and by
lowering the payoffs to all other states. Within complete markets, however, VaR man-
agement by financial intermediaries has only limited relevance, since private agents can
undo any financial structuring of the firm. Therefore we shifted attention to incomplete
market settings.
When security markets are incomplete, VaR requirements may correct for market fail-
ures. Due to the second best nature, however, the regulated outcome may be Pareto
inferior to the unregulated case. We present a case where VaR regulation while being
non–binding at the prevailing optimal portfolios, can still have real effects since it al-
ters the range for strategic manoeuvering; the off–equilibrium nodes are affected by the
seemingly innocuous regulation and this in turn changes the playing field. In contrast to
the intended effect, the regulation adversely affects societal risk taking.4 Of course full
knowledge of the specific situation at hand on part of the regulator would generate a dif-
ferent policy prescription. But the difficulty with incomplete markets is that it places an
enormous informational burden on the supervisory agencies to be able to implement the
correct policies. The usefulness of regulation is conditional on the information available
to the regulation designers. Absent a detailed pool of information to the supervisors,
it seems that regulatory intervention can be warranted only if we can identify an over-
 4
     This increase in risk is not necessarily a bad thing, if society at large receives non–marketable gains
      from the high risk, and supposedly innovative, projects. But such a stimulus is an unforeseen outcome
      of the VaR regulation.




116
                                                                       6.5   Conclusion

riding unidirectional negative externality which, when corrected, swamps the costs of
regulation.
As a result, one can not present an unambiguous case for regulation over lending of last
resort as a mechanism for containing systemic failure. By using public choice arguments
to analyze the preference for regulation, we surmise that this preference has more to
do with political optimization and preservation of market power than systemic risk
minimization.




Bibliography

Ahn, D., Boudoukh, J., Richardson, M. & Whitelaw, R. (1999). Optimal risk manage-
    ment using options, Journal of Finance 1(54): 359–375.

Artzner, P., Delbaen, F., Eber, J.-M. & Heath, D. (1998). Thinking coherently, Hedging
    With Trees: Advances in Pricing and Risk Managing Derivatives, Vol. 33, Risk
    Books, pp. 229–232.

Artzner, P., Delbaen, F., Eber, J.-M. & Heath, D. (1999). Coherent measure of risk,
    Mathematical Finance 3(9): 203–228.

Baye, M. (1992). Quotas as commitment in stackelberg trade equilibrium, Jahrbücher
    für Nationalökonomie und Statistik (209): 22–30.

Carpenter, D. (1996). Adaptive signal processing, hierarchy, and budgetary control in
    federal regulation, American Political Science Review (90): 283–302.

Carpenter, D. (1998). Centralization and the corporate metaphor in executive depart-
    ments, 1880-1928, Studies in American Political Development (12): 106–147.

Danielsson, J., Jorgensen, B. & de Vries, C. (1999a). Complete markets and optimal
    risk management. Working paper.

Danielsson, J., Jorgensen, B. & de Vries, C. (1999b). Risk management and firm value.
    Working paper.

DeMarzo, P. (1988). An extension of the modigliani-miller theorem to stochastic
   economies with incomplete markets and interdependent securities, Journal of Eco-
   nomic Theory 2(45): 353–369.

Dert, C. & Oldenkamp, B. (1997). Optimal guaranteed return portfolios and the casino
    effect, Technical Report 9704, Erasmus Center for Financial Research.

Detemple, J. & Selden, L. (1991). A general equilibrium analysis of option and stock
    market interaction, International Economic Review (2): 279–303.




                                                                                    117
6   On the (Ir)Relevancy of Value-at-Risk Regulation

Froot, K., Scharfstein, D. & Stein, J. (1993). Risk management: Coordinating corporate
    investment and financing policies, Journal of Finance 5(48): 1629–1658.

Grossman, S. & Vila, J.-L. (1989). Portfolio insurance in complete markets: A note,
    Journal of Business 4(62): 473–476.

Guthoff, A., Pfingsten, A. & Wolf, J. (1996). On the compatibility of value at risk,
    other risk concepts, and expected utility maximization, in C. Hipp (ed.), Geld,
    Finanzwirtschaft, Banken und Versicherungen, University of Karlsruhe, pp. 591–
    614.

Hall, P. (1986). Governing the economy: The Politics of State Intervention in Britain
     and France, Oxford University Press, New York.

Huang, C. & Litzenberger, R. H. (1988). Foundations for financial economics. New York,
    NY, North-Holland.

Ingersoll, J. (1987). Theory of Financial Decision Making, Rowman & Littlefield, Savage,
     MD.

Jorion, P. (1999). Risk management lessons from long–term capital management, Tech-
     nical report, University of California at Irvine.

Kim, D. & Santomero, A. (1988). Risk in banking and capital regulation, Journal of
    Finance (62): 1219–1233.

Kupiec, P. & O’Brien, J. (1997). The pre-commitment approach: Using incentives to
    set market risk capital requirements, Technical Report 97-14, Board of Governors
    of the Federal Reserve System.

Leland, H. (1998). Agency costs, risk management, and capital structure, Journal of
    Finance (53): 1213–1244.

Machiavelli, N. (1977). The Prince, Norton.

Modigliani, F. & Miller, M. (1958). The cost of capital, corporation finance, and the
   theory of investment: Reply, American Economic Review (49): 655–669.

Moran, A. (1997). On the right reform track, Australian Financial Review 7(15).

Parker, S. (1997). Macro focus the brash solution to banking ills, Australian Financial
    Review .

Rochet, J. (1992). Capital requirements and the behavior of commercial banks, European
    Economic Review (36): 1137–1178.

Steinherr, A. (1998). Derivatives, The Wild Beast of Finance, Wiley.

Stiglitz, J. (1969a). A re-examination of the modigliani-miller theorem, American Eco-
     nomic Review 5(59).



118
                                                                       6.5   Conclusion

Stiglitz, J. (1969b). Theory of innovation: Discussion, American Economic Review
     2(59): 46–49.

Stiglitz, J. (1974). On the irrelevance of corporate financial policy, American Economic
     Review 6(64): 851–866.




                                                                                    119
6   On the (Ir)Relevancy of Value-at-Risk Regulation




120
7 Backtesting beyond VaR
                                                        Wolfgang Härdle and Gerhard Stahl




7.1    Forecast tasks and VaR Models

With the implementation of Value-at-Risk (VaR) models a new chapter of risk manage-
ment was opened. Their ultimate goal is to quantify the uncertainty about the amount
that may be lost or gained on a portfolio over a given period of time. Most generally,
the uncertainty is expressed by a forecast distribution Pt+1 for period t + 1 associated
with the random variable Lt+1 , denoting the portfolio’s profits and losses (P&L).
In practice, the prediction Pt+1 is conditioned on an information set at time t and, typ-
ically calculated through a plug-in approach, see Dawid (1984). In this case, Pt+1 is
output of a statistical forecast system, here the VaR model, consisting of a (parametric)
family of distributions, denoted by P = {Pθ | θ ∈ Θ} together with a prediction rule.
Assumed that Pt+1 belongs to this parametrized family P the estimates θ̂t are calculated
by the prediction rule on the basis of a forward rolling data history Ht of fixed length n
(typically n = 250 trading days) for all t, i.e.
                                  Pt+1 (·) = Pθ̂t (· | Ht ).
One example for P also pursued in this paper is the RiskMetrics (1996) delta normal
framework, i.e., the portfolios considered are assumed to consist of linear (or linearised)
instruments and the common distribution of the underlyings’ returns Y ∈ IRd , i.e., the
log price changes Yt+1 = log Xt+1 − log Xt , is a (conditional) multinormal distribution,
Nd (0, Σt ), where Σt (resp. and σt2 ) denotes a conditional variance, i.e., Ht measurable
function.
Consider for simplicity a position of λt shares in a single asset (i.e., d = 1) whose
market value is xt . The conditional distribution of Lt+1 for this position with exposure
wt = λt xt is (approximately)
                                                                 t+1 − xt
                                                           X                  
             L(Lt+1 | Ht ) = L(λt (Xt+1 − xt ) | Ht ) = L wt              | Ht
                                                                   xt
                                                         2 2
                            ≈ L(wt Yt+1 | Ht ) = N (0, wt σt ),
where the approximation refers to
                                           Xt+1 − xt
                     log Xt+1 − log xt =             + o(Xt+1 − xt ).
                                              xt


                                                                                       121
7     Backtesting beyond VaR

The generalization to a portfolio of (linear) assets is straightforward. Let wt denote a
d−dimensional exposure vector, i.e., wt = (λ1t x1t , · · · , λdt xdt ). Hence, the distribution of
the random variable wtT Yt+1 belongs to the family

                               Pt+1 = {N (0, σt2 ) : σt2 ∈ [0, ∞)},                         (7.1)

where σt2 = wtT Σt wt .
The aim of the VaR analysis is to estimate θ = σt and thereby to establish a prediction
rule. For Lt+1 we adopt therefore the following framework:

                                      Lt+1    = σt Zt+1                                     (7.2)
                                              iid
                                      Zt+1    ∼ N (0, 1)                                    (7.3)
                                        σt2   =     wtT Σt wt .                             (7.4)

For a given (n × d) data matrix Xt = {yi }i=t−n+1,··· ,t. of realizations of the underlying
vector of returns with dimension d, two estimators for Σt will be considered. The first
is a naive estimator, based on a rectangular moving average (RMA)
                                                 1 T
                                         Σ̂t =    X Xt .                                    (7.5)
                                                 n t
This definition of Σ̂t makes sense since the expectation of Yt is assumed zero. The sec-
ond, also recommended by Taylor (1986) to forecast volatility, is built by an exponential
weighting scheme (EMA) applied to the data matrix X̃t = diag(λn−1 , · · · , λ, 1)1/2 {yi }i=t−n+1,··· ,t :

                                      Σ̂t = (1 − λ)X̃tT X̃t                                 (7.6)
These estimates are plugged into (7.4) and (7.2), yielding two prediction rules for

                            Pt+1 ∈ P = {N (0, σt2 ) | σt2 ∈ [0, ∞)}.

By their very nature VaR models contribute to several aspects of risk management.
Hence, a series of parameters of interest—all derived from Pt+1 —arise in natural ways.
The particular choice is motivated by specific forecast tasks, e.g., driven by external
(e.g., regulatory issues) or internal requirements or needs (e.g., VaR-limits, optimization
issues).
A very important part of risk management is the implementation of a systematic process
for limiting risk. In the light of that task, it is at hand that forecast intervals defined by
the V[ aRt ,
                                     −1
                         V[aRt = Ft+1   (α) := inf {x | Ft+1 (x) ≥ α},
where Ft+1 denotes the cdf of Pt+1 , are substantial.
If the main focus is to evaluate the forecast quality of the prediction rule associated to
a VaR model, transformations of Ft should be considered, see Dawid (1984), Sellier-
Moiseiwitsch (1993) and Crnkovic and Drachman (1996). For a given sequence of
prediction-realisation pairs (Pt , lt )—where lt denotes a realisation of Lt —the predic-
tion rules works fine if the sample u = {ut }kt=1 = {Ft (lt )}kt=1 looks like an iid random



122
                                          7.2   Backtesting based on the expected shortfall

sample from U [0, 1]. A satisfactory forecast quality is often interpreted as an adequate
VaR model. The focus of this paper is to consider the expected shortfall of Lt+1 , as the
parameter of interest and to derive backtesting methods related to this parameter—this
will be done in the next section. The expected shortfall—also called tail VaR—is defined
by
                E(Lt+1 | Lt+1 > V aRt ) = E(Lt+1 | Lt+1 > zα σt )                          (7.7)
                                            = σt E(Lt+1 /σt | Lt+1 /σt > zα )              (7.8)
where zα is a α-quantile of a standard normal distribution. The motivation to consider
this parameter is threefold. Firstly, McAllister and Mingo (1996) worked out the advan-
tage of (7.7) compared to VaR if these parameters are plugged into the denominator of a
risk performance measures, e.g. a Sharpe-ratio or a RAROC (risk-adjusted return—that
constitutes the numerator—on capital) numbers which are used to benchmark divisional
performance, see Matten (1996) and CorporateMetrics (1999) for the economic motiva-
tion. Secondly, Artzner et al. (1997) and Jaschke and Küchler (1999) pointed out that
(7.7) can be used as an approximation for the worst conditional expectation which is
a coherent risk measure, a conceptual consideration. Thirdly, Leadbetter, Lindgren &
Rootzén (1983) emphasized in the context of environmental regulation the need for in-
corporating the height of exceedances violating regulatory thresholds and critized those
methods solely based on counts, neglecting the heights—statistical arguments. The pa-
per is organised as follows. In the next section we present our approach on backtesting
using the expected shortfall risk. In section 3 we apply this methodology to real data
and visualise the difference betweeen RMA and EMA based VaRs. Section 4 presents
the conclusions of this work.


7.2     Backtesting based on the expected shortfall

As pointed out by Baille and Bollerslev (1992), the accuracy of predictive distributions is
critically dependent upon the knowledge of the correct (conditional) distribution of the
innovations Zt in (7.2). For given past returns Ht = {yt , yt−1 , · · · , yt−n }, σt in (7.4) can
be estimated either by (7.5) or (7.6) and then L(Lt+1 | Ht ) = N (0, σ̂t2 ). This motivates
to standardize the observations lt by the predicted standard deviation, σ̂t ,
                                           lt+1
                                            σ̂t
and to interpret these as realizations of (7.2).
                                            Lt+1
                                   Zt+1 =        ∼ N (0, 1)                                (7.9)
                                             σt
For a fixed u we get for Zt+1 in (7.2)
                                                     ϕ(u)
                          ϑ = E(Zt+1 | Zt+1 > u) =                                        (7.10)
                                                   1 − Φ(u)
                       ς = V ar(Zt+1 | Zt+1 > u) = 1 + u · ϑ − ϑ2
                        2
                                                                                          (7.11)



                                                                                             123
7   Backtesting beyond VaR

where ϕ, Φ denotes the density, resp. the cdf of a standard normal distributed random
variable.
For a given series of standardized forecast distributions and realizations, (Ft+1 (·/σ̂t ), lt+1 /σ̂t )
we consider (7.10) as parameter of interest. For fixed u, ϑ is estimated by
                                     Pn
                                            z    I(zt+1 > u)
                                ϑ̂ = t=0Pn t+1                                            (7.12)
                                          t=0 I(zt+1 > u)
where zt+1 denotes the realizations of the variable (7.2). Inference about the statistical
significance of ϑ̂ − ϑ will be based on the following asymptotic relationship:
                                         ϑ̂ − ϑ 
                                p                   L
                                  N (u)            −→ N (0, 1)                     (7.13)
                                             ςˆ
where N (u) is the (random) number of exceedances over u and ϑ̂ is plugged into (7.11)
yielding an estimate ςˆ for ς. The convergence in (7.13) follows from an appropriate
version of the CLT for a random number of summands in conjunction with Slutsky’s
Lemma, see Leadbetter et al. (1983) for details. Under sufficient conditions and properly
specified null hypothesis it is straight forward to prove the complete consistency and an
asymptotic α−level for a test based on (7.13), see Witting and Müller-Funk (1995), pp.
236.
Though these asymptotic results are straight forward they should be applied with care.
Firstly, because the truncated variables involved have a shape close to an exponential
distribution, hence, ϑ̂ will be also skewed for moderate sample sizes, implying that the
convergence in (7.13) will be rather slow. Secondly, in the light of the skewness, outliers
might occur. In such a case, they will have a strong impact on an inference based
on (7.13) because the means in the nominator and in the denominator as well are not
robust. The circumstance that the truncated variables’ shape is close to an exponential
distribution motivates classical tests for an exponential distribution as an alternative to
(7.13).


7.3     Backtesting in Action

The Data The prediction–realization (Pt , lt ) pairs to be analyzed stem from a real bond
portfolio of a German bank that was held fixed over the two years 1994 and 1995, i.e.,
wt ≡ w. For that particular (quasi) linear portfolio the assumptions met by (7.2)–(7.4)
are reasonable and common practice in the line of RiskMetrics.
The VaR forecasts are based on a history Ht of 250 trading days and were calculated by
two prediction rules for a 99%-level of significance. The first rule applies a RMA, the
second is based on an EMA with decay factor λ = 0.94 as proposed by RiskMetrics to
calculate an estimate of Σ̂t different from (7.5).
Remembering the bond crisis in 1994, it is of particular interest to see how these different
forecast rules perform under that kind of stress. Their comparison will also highlight
those difficulties to be faced with the expected shortfall if it would be applied e.g. in a
RAROC framework.



124
                                                               7.3   Backtesting in Action

Exploratory Statistics The following analysis is based on two distinctive features in
order to judge the difference of the quality of prediction rules by elementary exploratory
means: calibration and resolution, see Murphy and Winkler (1987), Dawid (1984) and
Sellier-Moiseiwitsch (1993). The exploratory tools are timeplots of prediction–realization
pairs (Fig. 7.1) and indicator variables (Fig. 7.4) for the exceedances to analyze the
resolution and Q-Q plots of the variable
                                       Lt+1      Lt+1
                                             =                                        (7.14)
                                       V aRt    2.33σt
to analyze the calibration (Fig 7.2, 7.3). A further motivation to consider variable (7.14)
instead of (7.2) is that their realizations greater than 1 are just the exceedances of the
VaR forecasts. Of course these realizations are of particular interest. If the predictions
are perfect, the Q-Q plot is a straight line and the range of the Y -coordinate of the
observations should fill out the interval [−1, 1]. Hence, the Q-Q plot for (7.14) visualizes
not only the calibration but also the height of exceedances. A comparison of Figure 7.2
with Figure 7.3 shows clearly that EMA predictions are better calibrated than RMA
ones. The second feature, resolution, refers to the iid assumption, see Murphy and
Winkler (1987). Clusters in the timeplots of exceedances, Figure 7.4,
                                                aRt )260
                                  (t, I(lt+1 > V[    t=1

indicate a serial correlation of exceedances. Again EMA outperforms RMA.
 From Figure 7.1, we conclude that in 1994 (1995) 9 (4) exceedances were recorded for
the EMA and 13 (3) for the RMA. Evidently, the window-length of 250 days causes an
underestimation of risk for RMA if the market moves from a tranquil regime to a volatile
one, and overestimates vice versa. On the other hand the exponential weighting scheme
adapts changes of that kind much quicker.
The poor forecast performance, especially for the upper tail is evident. The asymmetry
and outliers are caused by the market trend. For a particular day the VaR forecast is
exceeded by almost 400 %. If the model (7.2)–(7.4) would be correct, the variable (7.14)
has a standard deviation of 0.41. The standard deviation calculated from the data is
0.62. Hence, in terms of volatility the RMA underestimates risk on the average of about
50%.
The plot for EMA, Figure 7.3, shows the same characteristics as those in Figure 7.2 but
the EMA yields a better calibration than RMA. The standard deviation from the data
yields 0.5. Hence, an underestimation on the average of 25%. This indicates clearly that
EMA gives a better calibration then RMA. Q-Q plots for 1995 are omitted. The two
models give similar results, though even in that case the EMA is slightly better.


Inference The exploratory analysis has shown notable differences between the accuracy
of RMA and EMA for the year 1994. In this paragraph their statistical significance will
be investigated. The inference will be based on the observations
                                          lt+1
                                           σ̂t


                                                                                        125
7   Backtesting beyond VaR



                             Time plot of VaRs and P&L




                   5
                   0
           DM*E5

                   -5
                   -10




                         0   1        2             3      4         5
                                          Time*E2




Figure 7.1: The dots show the observed change of the portfolio values, lt . The dashed
            lines show the predicted VaRs based on RMA (99% and 1%).The solid lines
            show the same for EMA. VaRtimeplot


and the underlying model (7.2)–(7.4). The threshold u is set to the 80%-quantile of
Lt+1 /σt yielding ϑ = 1.4, by (7.10). Now, based on (7.13) an asymptotic significance
test for the hypothesis
                                              (<)
                                     H0 : ϑ = 1.4                                  (7.15)
will be used. This setting—especially (7.2)—seems reasonable for RMA and the given
sample of size n = 250.
As mentioned by Skouras and Dawid (1996) plug-in forecasting systems have the disad-
vantage that the uncertainty of the estimator for σt is not incorporated in the predictive
distribution Pt+1 . This applies especially to Zt+1 if the EMA is used. In that case a
t(n) distribution is indicated. A reasonable choice—motivated by generalized degrees of
freedom—is
                                          Lt+1
                                   Zt+1 =       ∼ t(20).                            (7.16)
                                            σt
Though the particular thresholds uN = 0.854—for the normal distribution—and ut =
0.86—for the t(20) distribution differ only slightly (0.5 %), the associated means ϑ



126
                                             7.3   Backtesting in Action




              Reliability plot for RMA
    4
    2
Y
    0
    -2
    -4




         -4     -2          0            2            4
                            X




Figure 7.2: Q-Q plot of lt+1 /V[
                               aRt for RMA in 94. VaRqqplot




                                                                    127
7   Backtesting beyond VaR




                         Reliability plot for EMA
              4
              2
          Y
              0
              -2
              -4




                   -4        -2         0            2           4
                                        X




            Figure 7.3: Q-Q plot of lt+1 /V[
                                           aRt for EMA in 94. VaRqqplot




128
                                                                                      7.3     Backtesting in Action



                  Time plot for exceedances for RMA                             Time plot for exceedances for EMA
        1




                                                                      1
        0.5




                                                                      0.5
    Y




                                                                  Y
        0




                                                                      0
              0    1        2           3     4         5                   0    1        2           3          4   5
                                 X*E2                                                          X*E2




Figure 7.4: Timeplots of the exceedances over VaR of 80% level for RMA (left) and
            EMA. The better resolution of EMA is evident. VaRtimeplot


change about 5 % and the standard deviation ς even about 18%. Parallel to (7.15) the
hypothesis
                                                            (<)
                                                      H0 : ϑ = 1.47                                                  (7.17)
will be tested.
Tables 7.1 to 7.4 summarize the empirical results.
                                                            √
                                                                N (u)(ϑ̂−ϑ)
                  Method         ϑ = 1.4      ς = 0.46              ςˆ            significance            nobs
                   EMA          ϑ̂ = 1.72     ςˆ = 1.01           2.44               0.75%                 61
                   RMA          ϑ̂ = 1.94      ςˆ = 1.3           3.42               0.03%                 68


                                                                        (<)
                                            Table 7.1: H0 : ϑ = 1.4

Firstly from Tables 7.1 and 7.2, the observed exceedances over threshold u indicate again
that the EMA is superior than the RMA. For a sample of 260 prediction-realization pairs
52 exceedances are to be expected (standard deviation 6.45). For the EMA 61 (61 - 52
≈ 1.5 standard deviation) exceedances were observed and 68 ( 68 - 52 ≈ 2.5 standard
deviation) for the RMA.
A comparison of Table 7.1 with 7.2 shows that random errors strongly influence the
significance of the test. Recalling the impressive outliers in the Q-Q plots it is worthwile
to exclude these from the data and re-run the test. The results are given in Tables 7.3
and 7.4. Again, a serious change in the level of significance for the RMA is observed
indicating the non robustness of the test. These results show furthermore that inference



                                                                                                                         129
7     Backtesting beyond VaR

                                                √
                                                    N (u)(ϑ̂−ϑ)
            Method    ϑ = 1.47     ς = 0.546            ςˆ        significance   nobs
             EMA      ϑ̂ = 1.72     ςˆ = 1.01        2.01            2.3%         61
             RMA      ϑ̂ = 1.94      ςˆ = 1.3        3.04            0.14%        68


                                                       (<)
                                  Table 7.2: H0 : ϑ = 1.47
                                                √
                                                    N (u)(ϑ̂−ϑ)
            Method      ϑ = 1.4     ς = 0.46            ςˆ        significance   nobs
             EMA      ϑ̂ = 1.645    ςˆ = 0.82        2.31              1%         60
             RMA       ϑ̂ = 1.83    ςˆ = 0.93        3.78            0.00%        67


                                        (<)
                   Table 7.3: H0 : ϑ = 1.4—largest outlier excluded


about the tails of a distribution is subtle. In addition the iid assumption—cluster of
exceedances—might also be violated. One possible source for that is the overlap of the
Ht . Hence, the estimates may correlate. Techniques like moving blocks and resampling
methods see Diebold and Mariano (1995) and Carlstein (1993) are good remedies.
To overcome the problems related to the slow convergence of (7.13) an exponential
distribution may be fitted to the data and then, again a classical test will be applied.
The following table reports the significance levels based on a one-sided Kolmogoroff–
Smirnov test. Again, the results emphasize the impact of random errors. The number
in brackets refers to that case, where the largest outlier is deleted.


7.4      Conclusions

VaR models were introduced as specific statistical forecast systems. The backtesting
procedure was formulated in terms of measuring forecast quality. The empirical results
highlight the better calibration and resolution of VaR forecasts based on (exponentially
weights) EMA compared to (uniformly weights) RMA. However, more interesting is the
impressive difference in amount (50%). A surprising result is the strong dependence of
inferences based on expected shortfall from the underlying distribution. Hence, if ex-

                                                √
                                                    N (u)(ϑ̂−ϑ)
            Method    ϑ = 1.47     ς = 0.546            ςˆ        significance   nobs
             EMA     ϑ̂ = 1.645     ςˆ = 0.82         1.65             5%         60
             RMA      ϑ̂ = 1.83     ςˆ = 0.93          3.1           0.15%        67


                                       (<)
                   Table 7.4: H0 : ϑ = 1.47—largest outlier excluded



130
                                                                        7.4   Conclusions

                            Method    σ = 0.46     σ = 0.546
                             EMA       0.25%      10% (14%)
                             RMA      < 0.1%        < 0.1%


                         Table 7.5: Kolmogoroff–Smirnov Test


pected shortfall will be used in practice in order to calculate performance measures like
RAROC the inferences resp. the estimates should be robustified.


Acknowledgements: The authors would like to express their warmest thanks to
Zdeněk Hlávka for his continous help by providing the graphics in XploRe. They also
wish to thank the Sonderforschungsbereich 373 (”Quantification and Simulation of Eco-
nomic Processes”) for the received financial support. Last but not least the second author
disclaims that the views expressed herein should not be construed as being endorsed by
the Bundesaufsichtsamt.




Bibliography

Artzner, P., Dealban, F., Eber, F.-J. & Heath, D. (1997). Thinking Coherently, RISK
    MAGAZINE.

Baille, R. T. & T. Bollerslev (1992). Prediction in Dynamic Models with Time-
     Dependent Conditional Variances. Econometrica, 50: 91–114.

Carlstein, A. (1993). Resampling Techniques For Stationary Time Series: Some Recent
    Developments. In New Directions in Time Series, Ed. Brillinger, D. et al. Springer,
    New York. 75–82

Crnkovic, C. & J. Drachman (1996). A Universal Tool to Discriminate Among Risk
    Measurement Techniques, RISK MAGAZINE.

Dawid, A. P. (1984). The prequential approach. J. R. Statist. Soc., A, 147: 278–292.

Diebold, F. X. & R. S. Mariano (1995). Comparing Predictive Accuray. Journal of
    Business and Statistics, 13: 253–263.

Härdle, W. & Klinke, S. & Müller, M. (1999). XploRe Learning Guide. www.xplore-
     stat.de, Springer Verlag, Heidelberg.

Jaschke, S. & Küchler, U. (1999). Coherent Risk Measures, Valuation Bounds, and
    (ν, p)−Portfolio Optimization. Discussion Paper, No 64, Sonderforschungsbereich
    373 of the Humboldt Universität zu Berlin



                                                                                      131
7   Backtesting beyond VaR

Leadbetter, M. R. (1995). On high level exceedance modeling and tail inference. Journal
    of Planning and Inference, 45: 247–260.

Matten, C. (1996). Managing Bank Capital. John Wiley & Sons: Chichester.

McAllister, P. H. & J.J. Mingo (1996). Bank Capital requirements for securized loan
   portfolios. Journal of Banking and Finance, 20: 1381–1405.

Murphy, A. H. & R. L. Winkler (1987). A General Framework for Forecast Verification.
   Monthly Weather Review, 115: 1330–1338.

RiskMetrics (1996). Technical Document, 4th Ed.

CorporateMetrics (1999). Technical Document, 1st Ed.

Sellier-Moiseiwitsch, F. (1993). Sequential Probability Forecasts and the Probability
     Integral Transform. Int. Stat. Rev., 61: 395–408.

Skouras, K. & A. P. Dawid (1996). On efficient Probability Forecasting Systems. Research
    Report 159, Dep. of Statistical Science, University College London.

Taylor, S. J. (1986). Modelling Financial Time Series. Wiley, Chichester.

Witting H. & U. Müller-Funk (1995). Mathematische Statistik II. Teubner, Stuttgart.




132
8 Measuring Implied Volatility Surface Risk
  using Principal Components Analysis
                                                                   Alpha Sylla and Christophe Villa




8.1    Introduction

The Black-Scholes formula Black & Scholes (1973) (BS hereafter) has remained a valu-
able tool for practitioners in pricing options as well as a precious benchmark for theoreti-
cians. Indeed, the BS option valuation formula is a one-to-one function of the volatility
parameter σ once the underlying stock level St , the strike price K and the remaining
time to expiration τ are known and fixed. Using the quoted prices of frequently traded
option contracts on the same underlier, one can work out the implied volatility σ̂ by
inverting numerically the BS formula. But it is notorious that instead of being con-
stant as assumed by the BS model, implied volatility has a stylized U-shape as it varies
across different maturities and strike prices. This pattern called the ”smile effect” is the
starting point of the implied theories which we concentrate on thereafter.
The basic idea of the implied theories is to price options consistently with the smile
drawn from the BS approach. We don’t have a view to explaining the smile but to take
it as an input for pricing options. In this framework implied volatility can be thought
of as the market’s assessment of the average volatility over the remaining lifetime of the
option contract (see Dupire (1994), Derman & Kani (1994)). Following Dupire (1994),
deterministic local volatility functions can be derived from the implied volatility surface
thanks to an explicit relation. Having considered only a risk-neutral stochastic process
for the underlier, there is a unique diffusion process for the stock that yields such a
density conditional on a given point (K, T ). After some amount of theory and calculus
using arbitrage-free conditions and the Fokker-Planck equation, Dupire (1994) shows
that :
                                              (                    )
                                                  ∂C          ∂C
                             2                    ∂T + πK ∂K
                           σ̃K,T (t, s) = 2              ∂2C
                                                                       (t, s)
                                                     K 2 ∂K 2



where C is the arbitrage-free price of a European-style call contract with exercise price
K and maturity T , π is the instantaneous riskless rate.



                                                                                               133
8   Measuring Implied Volatility Surface Risk using PCA

But assuming a constant future volatility expectation is also questionable as was shown
by Dumas, Fleming & Whaley (1998). In following this empirical fact, Derman & Kani
(1998) develop a model which is by many an aspect the Heath, Jarrow and Morton’s
(HJM) approach to stochastic interest rates. The future evolution of the local volatility
surface now depends upon its current state and the movements induced by a certain
number of factors. However, the ” no free lunch ” conditions in the Derman and Kani’s
framework are considerably involved and cannot be easily implemented. An alternative
yet more appealing approach is inspired by the Market Models of the term structure of
interest rates addressed by Miltersen, Sandmann & Sondermann (1997) transposed to
the current framework by Ledoit & Santa-Clara (1998) and Schönbucher (1999) among
others.
This paper has two contributions. The first one is to apply a Principal Components
Analysis (PCA) on the implied volatility surface in order to address the issue of deter-
mining the number and the nature of the factors that cause the smile to move across
time. This is particularly important in smile-consistent derivative pricing. The sec-
ond point is to use the results in managing the risk of volatility through Value-at-Risk
methodology.


8.2    PCA of Implicit Volatility Dynamics

PCA is usually applied to complex systems that depend on a large numbre of factors.
The aim is to reduce those factors into a set of composite variables called the Principal
Components (PCs) and retain a few of these PCs that explain most of the data variability.
PCs are constructed so as not to be correlated over the entire sample and ordered by
decreasing ” explanatory power ”. The purpose of using PCA here is to identify the
number and the nature of the shocks that move the Implied Volatility Surface accross
time.
For a given maturity bucket, one can run PCA on the daily first differences of implied
volatilities corresponding to different moneynesses (Clewlow, Hodges & Skiadopoulos
(1998)). Another possibility is to implement PCA on the first differences of implied
volatility corresponding to different maturities for a fixed moneyness Avellanda & Zhu
(1997).
The availability of at-the-money volatility indexes for most developed stock options
markets naturally led us to consider them as inputs in the Market Model of the Term
Structure of Implied Volatility insofar as the rest of the implied surface can be valuably
approximated thanks to Derman (1999) who pointed out that for strikes not too far from
the money :


                         σ̂(t, S; T, K) = σ̂(t; T ) + b(t)(K − St ),
where σ̂(t; T ) is an at-the-money implied volatility for a maturity T . Therefore, we are



134
                                                 8.2   PCA of Implicit Volatility Dynamics


  Table 8.1: Statistical Summaries of Daily Market Volatility Indexes Level Changes
            Statistics 1-month 2-month 3-month 6-month 12-month 18-month
            Mean        -0,0124 -0,0134 -0,0126 -0,0118 -0,0108  -0,0099
            Std Dev. 1,7698 2,1134 2,3173 0,4980        0,5784    0,6815
            Skewness -0,2961 -0,1798 -0,0341 0,5480     -0,1129  -0,1126
            Kurtosis 5,3247 6,7258 5,0319 3,1060        6,2123    6,9574



going to take at-the-money implied volatility.


8.2.1   Data and Methodology

With respect to CAC 40 index options, we must distinguish between short maturity
contracts, PX1 with an American feature and long maturity contracts, PXL designed
like an European option. The former has been quoted since November 1988 and the
latter since October 1991. For PX1 the longest maturity is six months, whereas that for
PXL is two years with fixed expiration in March and September. Based on the following
considerations, we use these option prices for our empirical work. First, options written
on this index are the one of the most actively traded contracts. Second, data on the
daily dividend distributions are available for the index (from the MONEP- SBF CD-
ROM). The sample period extends from January 1, 1995 through December 31, 1996.
Therefore, the data set includes option prices for 497 trading days. The daily closing
quotes for the PXL call and put options are obtained from the MONEP-SBF CD-ROM.
The recorded CAC 40 index values are the daily closing index levels.
Following the CBOE methodology we have constructed six CAC 40 volatility indexes
corresponding to six maturities of implied volatility : 1, 2, 3, 6, 12 and 18 months.


8.2.2   The results

The Principal Components Analysis is run on the trading days as individuals and the
first differences of log-implied volatility indexes of the maturities considered here as
explanatory variables. Unlike Clewlow et al. (1998), we believe that the so-called rules
of thumb have proved to be reliable criteria in PCA. Velicer’s test is surely another way to
cope with the dimensionality reduction problem but it suffers a number of shortcomings
which are highlighted by Jolliffe (1989). Furthermore these authors aimed at finding out
the risk factors that can be held responsible for moving the local volatility surface (in
order to implement Derman and Kani’s model) but instead realized their studies on the
implied surface, implicitly assuming that both surfaces should necessarily be caused to
evolve by the same factors (see discussion thereafter).
Rules of thumb suggest to retain the first three components which explain 90.38% of the
total variability contained in the data. The first factor accounts for most part of the data



                                                                                        135
8     Measuring Implied Volatility Surface Risk using PCA


               Table 8.2: PCA results displaying PCs’explanatory power
                 Eigenvalues percentage of data cumulative percentage
                              variability explained
            PC1      2.81              46.85                  46.85
            PC2      1.89              31.48                  78.33
            PC3      0.72              12.05                  90.38
            PC4      0.33               5.45                 95.83
            PC5      0.23               3.84                 99.67
            PC6      0.02               0.33                 100.00



                     Table 8.3: PCs’ loading on each original variable
                                          PC1 PC2 PC3
                              1-month      0.9 -0.21 0.02
                              2-month     0.97 -0.22 0.01
                              3-month     0.93 -0.17 0.03
                              6-month      0.2   0.75 0.55
                              12-month 0.25 0.86 0.03
                              18-month 0.29 0.67 -0.64



variability and is well correlated with the first three drivers (1, 2, and 3 month volatility
indexes). Their loadings are all above 0.90 (respectively 0.90, 0.97, 0.93) as compared to
those of the three remaining volatility indexes (0.20, 0.29, 0.25). This PC is determined
mostly by the shorter maturities and reflects a common effect they share. Thus it is
remarkable, as ” revealed ” by previous works, that shorter volatilities are more volatile
than longer ones (most of the variance in the sample is due to them because the first
PC which represents best their communality has the highest variance).
Moreover a shock on this first factor tends to affect the three shortest volatilities uni-
formly (as the first PC loadings related to each of them are approximately of the same
weight) more than the last three volatilities This PC displays a Z-shape. Conversely
a shock on the second factor has little effect on short term volatilities and strongly in-
creases the longer term volatilities. Therefore the second PC also naturally comes out
as a Z-shaped factor.
Both factors have symmetric effects which partially compensate so that the resulting
effect for a 1% standard deviation shock on each one is an almost less important parallel
shift on the volatility surface. Our results are a bit at odds with the well-known direct
shift-slope structure highlighted by several studies on the American fixed income security
market and related works as well as those of Clewlow et al. (1998) on the volatility skew.
It is important to note that the opposite movements of the short term and long term
maturity implied volatility along with the first two PCs may explain that an increase in




136
                                               8.2   PCA of Implicit Volatility Dynamics

current long term implied volatility (if this also means increase in future short maturity
volatility) make the market operators behave in a way which tend to reduce the current
short term volatility (by dynamic hedging and feed-back effects). This finding illustrates
once again the informational role played by derivative markets in providing signals which
tend to stabilize or destabilize basis markets. We could also see these movements as the
reaction of long term volatilities to short term volatilities. In thinking so we are brought
to consider the overreaction hypothesis of long term volatilities to short term volatilities
discussed in the literature.
Several authors supported the idea of relatively weak reaction of long term volatilities to
shocks affecting short term volatilities in presence of a unit root process in the implied
volatilities. On the contrary, some others defended the assumption of overreaction which
postulates that long term volatilities react strongly to a shock on short term volatilities.
Our remark is that both under-reaction and overreaction may coexist sometimes, or
appear only one at a time with roughly the same importance as can be shown by the
global PCA (see explanatory power of the PCs). But most often the under-reaction
hypothesis is likely to be noticed even in case the two effects would coexist because the
under-reaction effect linked with the first PC seem to explain more variance than the
alternative effect associated with the 2nd PC. The third PC exhibits the fact that a
deviation on the third factor induces little effect on the 1, 2, 3 and 12-month volatility
indexes. In response to a positive shock, the 6-month volatility increases, the 12-month
index remains almost stable whereas the 18-month index undergoes a fall roughly the
same amount as the increase in 6-month volatility. PC3 also looks a bit like a Z-shape. It
also accounts for 12.05% of the total data variability, a considerable explanatory power
as compared with similar studies!. One may rather feel dubious about the shape of this
third factor, reason among others which partially justifies the other two PCAs we run
afterwards.
Thus we identified three relevant market risk factors which cause the implied volatility
surface to move but the ” opposite ” behaviors of shorter term volatilities on the one
hand and longer term volatilities on the other hand invites us to run separate Principal
Components Analyses. Our intuition in doing so is that dealing with them separately will
bring into light the usual shapes that one naturally expects (shift, slope and curvature).
The results are displayed hereafter.
The results fully come up to our expectations. In each analysis the percentage of variance
accounted for by the first two PCs rise up to 90% and more (99.31% and 89.13% for
short term and long term analysis respectively). Similar conclusions have been reached
in other studies in the interest rates and derivative securities literatures. Both analyses
come out with an interpretation of the first PC as a shift and the second PC as a slope.
The third PC, although a bit marginal (0.69% and 10.87% of data variability explained
respectively for short and long term analysis), looks like a curvature (notice however the
relative importance of the second and third PCs in the long term analysis as compared
to other empirical works). No rotation methods are useful here as the PCs fit the data
pretty well. The global PCA is rich of teachings but is also a weakness in that it wipes



                                                                                        137
8   Measuring Implied Volatility Surface Risk using PCA




             Table 8.4: PCA results displaying PCs’ explanatory power
               Short term volatility analysis (1, 2, 3 month terms)
               Eigenvalues percentage of data cumulative percentage
                             variability explained
          PC1      2.75               91.57                   91.57
          PC2      0.23                7.74                   99.31
          PC3      0.02                0.69                  100.00
              Long term volatility analysis (6, 12, 18 month terms)
               Eigenvalues percentage of data cumulative percentage
                            variability explained
          PC1     1.95               64.89                   64.89
          PC2     0.73               24.24                   89.13
          PC3     0.32               10.87                  100.00




                   Table 8.5: PCs’ loading on each original variable

                                       PC1     PC2     PC3
                           1-month     -0.93   0.37    0.04
                           2-month     -0.99   -0.06   -0.11
                           3-month     -0.95   -0.30   0.08
                           6-month     -0.78   0.56    0.29
                           12-month    -0.90   0.04    -0.44
                           18-month    -0.73   -0.64   0.23




138
                                                            8.3     Smile-consistent pricing models

away other important aspects (PCs shapes) that we unveiled by performing separate
analyses. Also notice that we recovered three PCs from separate PCA run on three
variables, so we are sure that all the variability in the data is contained in those three
PCs.


8.3        Smile-consistent pricing models

8.3.1       Local Volatility Models

Local volatility is a close notion to that of implied volatility. We can think of it as
a forward volatility meaning that it is the market expectation of future spot volatility
at expiry date when market level happens to become equal to exercise price. As time
to expiration decreases to zero, an at-the-money 1 option’s local volatility tends to
instantaneous real volatility In a stochastic local volatility model (see Derman & Kani
(1998)), the dynamics of the stock together with its local volatility is described by the
following pair of equations :

                                      dSt
                                          = µt dt + σ(t)dWt0
                                       St

                                                           n
                                                           X
                            2                                     i
                         dσ̃K,T (t, S) = αK,T (t, S)dt +         θK,T (t, S)dWti
                                                           i=1

                     2
The local variance σ̃K,T is a risk adjusted expectation of future instantenous variance
 2
σ (T ) at time T as

                                         2
                                       σ̃K,T = E K,T [σ 2 (T )]

where the expectation E K,T [...] is performed at the present time and market level, and
with respect to a new measure which Derman & Kani (1998) called the K-strike and
T-maturity forward risk-adjusted measure.
The spot (instantaneous) volatility at time t, σ(t), is the instantaneous local volatility
at time t and level St , i.e. σ(t) = σ̃St ,t (t, St ).
All parameters and Brownian motions are one-dimensional and one can usefully report
to the authors’ paper for accurate discussion over the measurability and integrability
conditions of the different parameters, as well as their path and level dependency on
past histories of a number of state variables. The second equation specifies a general
underlying diffusion process similar to that of Hull & White stochastic volatility models,
 1
     For sake of brevity, we will use the notations ATM for At-The-Money, OTM for Out-of-The-Money
      and ITM for In-The-Money all along the paper




                                                                                               139
8     Measuring Implied Volatility Surface Risk using PCA

but instead of assuming an Ito process for the instantaneous volatility parameter, it says
that local volatility evolves according to a diffusion process (second equation) in which
there are n additional independent sources of risks.
The first component in the second equation is, as in the static case, dependent upon
time and stock level whereas the additional Brownian motions account for the stochastic
part of the evolution of the volatility surface.
The Market Models of Implied Volatility assume the existence of a sufficient number
of traded liquid plain vanilla options. Those ones are used as inputs in addition with
the risk-free instantaneous interest rate r and the underlier S under consideration to
price exotic options written on that underlier. These prerequisites ensure a complete
market since the price of risk is already implicit in the prices of quoted vanilla option
contracts. An arbitrage-free condition and a no bubble restriction 2 are derived under
which, at expiry date, implied volatility and instantaneous latent volatility are related
by a deterministic relation (Schönbucher (1999)).


8.3.2       Implicit Volatility Models

The prices of the standard liquid option contracts are taken as direct input to the model.
There is no need to specify the process of the price of risk since it is implicitly provided
by the quoted prices. Let us assume that the stock price can be represented this way:


                                         dSt = rSt dt + σt St dWt0

where σt is a stochastic volatility. The drift r of the process is chosen in such a way so
as to ensure that the discounted stock price becomes a martingale under Q.
Each quoted option contract has an implied volatility σ̂t (Km , Tm ). As pointed out by
Schönbucher, implied volatility σ̂ is neither equal to the instantaneous real volatility nor
strictly identical to the expected future volatility although the two notions should be
close. At expiry date the option pay-off is expressed as:

                             C(ST , K, T, σ̂T (K, T ), r) = max(ST − K, 0)

and we assume that σ̂T (K, T ) = 0.
Ledoit & Santa-Clara (1998) provide the proof that an ATM implied volatility converges
to the real instantaneous volatility as remaining maturity goes down to zero :


                                             lim σ̂t (St , T ) = σt
                                            T →t
 2
     this latter is designed to avoid that implied volatility explode as expiry is approached




140
                                                       8.3     Smile-consistent pricing models

Observed implied volatilities are of course not constant, instead they evolve stochas-
tically. One can therefore posit a SDE to specify the dynamic process of the implied
volatility of an option contract with strike K and maturity T in the following way :

                                                               N
                                                               X
              dσ̂t (K, T ) = ut (K, T )dt + ρt (K, T )dWt0 +         vn,t (K, T )dWtn
                                                               n=1

The N random sources (W1 , · · · , WN ) affect the implied volatility dynamics in addition
with the leverage term ρ(K, T )dWt0 .
We assume there is a strike-wise continuum of traded options on the same underlier
S. As in the HJM multi-factor model of the term structure of interest rates (1992),
the model is over-specified insofar as there are more traded assets than the number of
random sources. So we will also have to impose restrictions on the dynamics of the drift
and volatility parameters to ensure the martingale property of discounted prices.
Schönbucher (1999) relates real instantaneous volatility at t = T , and shows by that
means the same results as Ledoit & Santa-Clara (1998) for an ATM implied volatility.
However Schönbucher’s framework brings improvements over the latter by addressing
the ”volatility bubbles effect” which gives more rigorous arguments to the proof given
by Ledoit & Santa-Clara (1998) as to the fact that an ATM implied volatility converges
towards to the real instantaneous volatility as t → T . This is so because implied volatility
does not explode to infinity once the no bubble restriction holds. It also extends the
result to OTM and ITM implied volatilities.
The next section aims at uncovering the random sources that may cause the implied
volatility surface to move stochastically through time. The results can be used to gain
insight into the determination of the stochastic factors of the local volatility surface, but
have then to be considered with great care. We will discuss this issue hereafter.


8.3.3   The volatility models implementation

In light of the empirical results exhibited above in the Principal Components Analyses,
we hint a possible enrichment of the two smile-consistent pricing models presented in
this paper. But before we use these results, we have to indulge in a brief discussion
about the factors of the local volatility surface.


What about the factors of the local volatility surface ?

The implied volatility at time t of the ”at-the-money CAC40 option contract expiring at
time T ” is close to the average of the local volatilities over the remaining lifespan of the
contract as assessed by the market at time t (the same relation holds between the yield
to maturity and the forward rates). This remark implies that the factors responsible for



                                                                                          141
8   Measuring Implied Volatility Surface Risk using PCA

the local volatility surface at-the-money should be looked for, in the first place, among
the factors of the implied surface found out in the Principal Components Analysis. It
doesn’t mean that those factors have the same interpretation for both surfaces. For
instance a slope for the implied surface may stand as a shift factor for the local surface
or anything else. All we can say is summed up by a phrase due to Derman & Kani
(1998) : ” The standard option prices are functionals of the local volatilities at time t
and level S just as bond prices are functionals of the forward rates at time t. As a result
the dynamical variations of the local volatility surface induce corresponding variations
of the standard option prices (i.e the implied volatility surface) ”. No mention is made
here of a ” precise correspondence between the implied and the local factors apart from
” one-way induced effects from local to implied ”.
The rest of this paper will implicitly assume that the factors of the implied surface are
also factors for the local surface because, we know from other studies on the forward
rates curve that there are typically two or three factors which account for most of the
data variability (remember the fact that in the HJM model the same factors are meant
to drive the yield to maturity and the forward rates curves). But we won’t venture too
far to interpret those factors the same way.


A simple version of the Stochastic Local Volatility model

Derman and Kani propose a ” more realistic model ” which is specified like this :

                                   dSt
                                       = µt dt + σ(t)dWt0
                                    St

          2 (t, S)
       dσ̃K,T
          2 (t, S)   = αK,T (t, S)dt + θ1 dWt1 + θ2 e−λ(T −t) dWt2 + θ3 e−η(K−S) dWt3
        σ̃K,T

Where the spot (instantaneous) volatility at time t, σ(t), is the instantaneous local
volatility at time t and level St , i.e. σ(t) = σ̃St ,t (t, St ).
The three Brownian motions standing respectively for the parallel shift, the term-
structure slope effect, and the skew slope effect of the local volatility surface.
The stochastic differential equation (SDE) becomes in our framework (where we deal
with at-the-money volatilities) :

                       dσ̃T2 (t)
                                 = αT (t)dt + θ1 dWt1 + θ2 e−λ(T −t) dWt2
                       σ̃T2 (t)

where the brownian considered here are the shift and slope factors of the implied surface
and must not necessarily be interpreted as parallel shift and slope for the local volatility
surface. All we suspect is that they are good candidates for implementing the model.



142
                                                          8.3     Smile-consistent pricing models

Our previous analyses convinced us that dealing separately with short-term and long-
term volatilities is essential in that we can clearly identify the parallel shift-slope struc-
ture while exploiting the additional information on the ” possible correlation ” between
short and long term volatilities detected in the global PCA. We propose a more plausible
specification which is a system of two simultaneous equations, each for short term and
long term volatilities respectively :

                       2 (t)
                    dσ̃T,s
                       2 (t)    = αT,s (t)dt + θs1 dWt,s
                                                     1
                                                         + θs2 e−λ(T −t) dWt,s
                                                                           2
                     σ̃T,s

                        2 (t)
                     dσ̃T,l
                        2 (t)   = αT,l (t)dt + θl1 dWt,l
                                                     1
                                                         + θl2 e−λ(T −t) dWt,l
                                                                           2
                      σ̃T,l

where the instantaneous relative changes in the short term local volatilities are meant
to be driven by the corresponding Brownians. We make further assumptions inspired by
the previous Principal Components Analyses:

                                          1       1
                                    cov(dWt,s , dWt,l ) = ρ1 dt
                                          2       2
                                    cov(dWt,s , dWt,l ) = ρ2 dt

As one can see, the necessity to distinguish between short term and long term volatilities
is essential in the implementation of the model. The idea is not merely theoretical but
is also supported by the results brought by Principal Components Analyses and other
studies tending to show the reaction of long term volatilities to short term ones (and
vice-versa). We presented a way to enrich the ” more realistic Derman and Kani’s model
”.
This work helped to show the ”virtues” of PCA in providing an easy, synthetic and
visual tool to deal with complex movements on the volatility surface. We are also aware
that improvements to this model could be done by introducing the volatility skew in the
analysis among others.
The implementation of Schönbucher’s Implied Volatility Model is almost straightforward
once we know about the number and the nature of the factors involved in the dynamics
of the whole implied volatility surface. In this framework as well, a short and long term
structure of the implied volatilities is of the same importance as before.
Another important and practical use of the determination of the implied volatility surface
risk factors, apart from implementing the stochastic local volatility model, is in managing
the risk of volatility. This use is going to be performed through Value-at-Risk (VaR)
methodology. This approach to VaR is an alternative to the usual historical VaR and
Monte Carlo VaR, each method having its advantages and drawbacks.




                                                                                             143
8     Measuring Implied Volatility Surface Risk using PCA

8.4        Measuring Implicit Volatility Risk using VaR

In this part we present a risk management tool in the same spirit as that of fixed income
securities risk management altogether with the Value-at-Risk methodology. For further
details it would be of great interest to report to Golub & Tilman (1997).


8.4.1        VaR : Origins and definition

The matter is : we need to know the minimum loss that can incur for an investor in a
portfolio of assets within 5% of the trading days, for a trading day investment horizon
without portfolio rebalancing. The notion of Value at Risk is designed to address this
day-to-day portfolio manager’s concern. Here we deal with a portfolio of derivative
assets and we assume market risk factors are the implied volatilities of different maturity
buckets (in fact implied volatility indexes).
VaR is defined for a 5% risk level, if we suppose a normal distribution of the changes in
the market values in the portfolio, as :

                                                                        n
                                                                                    !
                                                                        X
                             V ar = 1.65 × σ (∆Π) = 1.65 × σ                  ∆Πi
                                                                        i=1
                                             v
                                             u n X
                                                 n
                                             uX
                               V ar = 1.65 × t     Cov (∆Πi , ∆Πj )
                                                    i=1 j=1


The first transparent and comprehensive VaR methodology was worked out by J.P Mor-
gan to manage portfolio global risk exposure through its RiskMetrics management tool.
Since then Value-at-Risk gained popularity among financial institutions and was recom-
mended by the Bank for International Settlements and the Basle committee in 1996.
But the practical simplicity of RiskMetrics is also a flaw which gave rise to a great deal
of literature about Value-at-Risk. Most studies dealing with portfolios of zero coupon
bonds and option contracts have often considered the movements of the yield curve as
the main source of market risk but none or only a few coped satisfactorily with the
mismeasurements caused by non-linear option contract pay-offs. However, it is well
known that option markets are ” volatility markets ” (i.e. markets where volatility is
itself traded like any other asset hence the necessity to know more about the volatility
of the volatility)3 . So one of the most natural way to address the question is to con-
sider the local volatility surface itself (easy to get thanks to available databases). This
approach makes sense insofar as near-the-money option contracts are more sensitive to
their volatility parameter than the other parameters . Therefore after a short presen-
tation of the concept of VaR, we will go on showing the use of principal components in
computing a VaR formula.
 3
     We can easily imagine volatility forward contracts as it is the case for interest rates forward contracts.




144
                                         8.4   Measuring Implicit Volatility Risk using VaR

8.4.2    VaR and Principal Components Analysis

VaR can be rewritten as :

                             v
                             u n X
                                 n
                             uX
                                         σ (∆Πi ) σ (∆Πj )
               V ar = 1.65 × t     Πi Πj                   ρ (∆Πi , ∆Πj )
                                              Πi Πj
                                  i=1 j=1

                                                                     
                                                                ∆Πi
Given the first order approximation σ (∆Πi ) ≈ Πi σ              Πi       for any i provided the returns
are small enough, we can write :

                                          v
                                          u n X
                                              n
                                          uX
                            V ar = 1.65 × t     Πi Πj σi σj ρi,j
                                               i=1 j=1


where Πi and Πj are the respective market values of the portfolio and the ith option
contract (i = 1, · · · , n). σi is the volatility of the relative changes in the ith option market
value Πi due to the movements of the volatility surface. ρi,j is the correlation between
changes in Πi and Πj . This approach is not absurd at a first look if we consider that the
investment horizon is a day (most traders open up their positions in the first hours of the
trading day and close them down before the end of the day or vice versa). Otherwise a
portfolio held until the expiry date either ends up in a non limited gain or in a limited loss
induced by the premium. A zero mean would then be unreasonable(the distribution of
the option payoff at future time T0 conditional on the information at time T is a truncated
lognormal distribution). In order to account for the total effect of the implied volatility
surface, we should consider the whole surface, i.e all possible maturities available on
the market and/or obtained by interpolation from the existent maturities. For practical
matters this is of course a waste of time and energy, as Principal Components Analysis
provides us with a technique to reduce the set of potentially explanatory variables to a
limited subset of these without much loss of information.
Let us now consider a portfolio of option contracts Ci (not necessarily at-the-money so
that the risk due to the skew effect should also be addressed), i = 1, · · · , n with market
value Π. We can write for a change in the portfolio value :

                                                n
                                                X
                                        ∆Π =          ∆Ci
                                                i=1

Further we state that the changes in the value of the portfolio are due to risk factors
which are reflected by the implied volatility term structure. So one may say that these
changes in the portfolio market value are subject to risk through the individual contracts
sensitivity to different maturity implied volatility deviations :




                                                                                                    145
8   Measuring Implied Volatility Surface Risk using PCA


                                                              n
                                                              X
                       ∆Π (∆σ̂(Tj ), Tj = 1, · · · , 18) =           ∆Ci (∆σ̂(Ti ))
                                                              i=1

We have seen that those first differences of implied volatility are linear combinations of
the PCs. So it is natural to state that :

                                                    n
                                                    X
               ∆Π (∆P Ck , k = 1, · · · , 6) =            ∆Ci (∆P Ck , k = 1, · · · , 6)
                                                    i=1

A Taylor expansion yields for weak deviations :

                    ∂Ci                ∂Ci      ∂Ci      ∂Ci      1 ∂ 2 Ci
          ∆Ci ≈             ∆σ̂(Ti ) +     ∆r +     ∆t +     ∆S +          (∆S)2
                  ∂ σ̂(Ti )            ∂r        ∂t      ∂S       2 ∂S 2

The sensitivity to the risk-free interest rate over a one-day period can be neglected
(in periods of high volatilities in interest rates, one can include the implied volatilities
extracted from interest rate derivatives in the Principal Components Analysis). The
Taylor series boils down to retaining only the sensitivity with respect to the other terms.
So we come out with :

                            ∂Ci                ∂Ci      ∂Ci      1 ∂ 2 Ci
               ∆Ci ≈                ∆σ̂(Ti ) +     ∆t +     ∆S +          (∆S)2
                          ∂ σ̂(Ti )             ∂t      ∂S       2 ∂S 2

For European-style option contracts on an underlyer paying no dividend, sensitivity to
the implied volatility or the so-called the ”V ega” is computed as :

                                                            St
                                                                                           !
                       ∂Ci        √                  ln Ke−r(T −t)  1       √
            V egai =           = S T − tφ                  √       + σ̂(Ti ) T − t
                     ∂ σ̂(Ti )                      σ̂(Ti ) T − t 2

where K, T − t, St , φ respectively stand for the exercise price, the remaining time to
maturity, the price of the underlier at time t and the standard normal density function.
Principal Components Analysis allows us to write each difference of implied volatility as
a linear combination of the PCs :
                                                    6
                                                    X
                                       ∆σ̂(Ti ) =         ψik P Ck
                                                    k=1


for some coefficients ψik (see Table 8.3 above). Finally, we obtain :
                 n 6
                                                                                                   !
                 X X
                                                                                               2
          ∆Π ≈                V egai ψik P Ck + T hetai ∆t + Deltai ∆S + Gammai (∆S)
                 i=1    k=1




146
                                       8.4   Measuring Implicit Volatility Risk using VaR



PCs are independent of one another over the entire sample. Let us also point out that
most traders use a delta-gamma neutral hedging, that is the rule. We find, taking these
remarks into consideration and taking only the first three PCs into account :
                     v
                     u n 3                     n XX
                                                  3
                     uX X                      X
         V ar = 1.65Πt     (V egai ψik )2 λk +      (V egai ψik )(V egaj ψjk )λk
                        i=1 k=1                 i=1 j6=i k=1



Such coefficients as λ and ψ change across time in the same way as V ega is also time and
level-dependent. For a computation purpose, one may take an average value for each
λk,t got from T −2L rolling Principal Components Analyses on a constant window width
of 2L + 1 trading days, T being the total number of trading days. However this VaR
computation is a ” term structure VaR ” as it fails to take the skew effect into account.
It expresses the risk exposure of the portfolio over a trading day when the manager does
not rebalance his portfolio to ensure a continuous vega hedging.
Furthermore PCs are most likely to display ARCH effects so that a constant variance over
time may√not be a reliable assumption. Finally let us point out that the famous Basle
Comitee” t-rule” designed to compute a t-day VaR from a one day VaR derives from
the assumption that the value of the aggregate portfolio under consideration follows a
geometric brownian motion in a continous time setting. Although it is well-documented
that this has little chance to hold true for single basis assets (stocks, interest rates) and
exchange rates at least for short periods (see ARCH effects, high correlation pattern
between successive price changes or infinite variance over a very short period of time
as in Levy processes), one can argue that normality is a reasonable assumption over a
sufficiently long period. But as far as a portfolio is concerned, the question is even more
intractable. Thus imagine what the issue can look like if the portfolio is highly non
linear with respect to the pay-offs of the individual component assets, as it is the case
for a gathering of option contracts. All these shortcomings give incentives to implement
a VaR prediction formula that is capable of capturing the essential time series features
of the portfolio of derivative assets.




Bibliography

Avellanda, M. & Zhu, Y. (1997). An E-ARCH model for the term structure of implied
     volatility of FX options, Applied Mathematical Finance (1): 81–100.

Black, F. & Scholes, M. (1973). The pricing of options and corporate liabilities, Journal
    of Political Economy 81: 637–654.

Clewlow, L., Hodges, S. & Skiadopoulos, G. (1998). The dynamics of smile, Technical
    report, Warwick Business School.



                                                                                         147
8   Measuring Implied Volatility Surface Risk using PCA

Derman, E. (1999). Regimes of volatility, Risk pp. 55–59.

Derman, E. & Kani, I. (1994). Riding on a smile, Risk 7(2): 32–39.

Derman, E. & Kani, I. (1998). Stochastic implied trees : Arbitrage pricing with stochastic
    term and strike structure of volatility, International Journal of Theoritical and
    Applied Finance 1(1): 61–110.

Dumas, B., Fleming, B. & Whaley, W. (1998). Implied volatility functions, Journal of
   Finance .

Dupire, B. (1994). Pricing with a smile, Risk 7(2): 229–263.

Golub, B. & Tilman, L. (1997). Measuring yield curve risk using principal component
    analysis, value at risk, and key rate durations, The Journal of Portfolio Management
    .

Jolliffe, I. (1989). Principal Component Analysis, Series in Statistics, Springer.

Ledoit, O. & Santa-Clara, P. (1998). Relative option pricing with stochastic volatility,
    Technical report, Working papers, UCLA.

Miltersen, M., Sandmann, K. & Sondermann, D. (1997). Closed form solutions for
     term strucutre derivatives with log-normal interest rates, The Journal of Finance
     52: 409–430.

Schönbucher, P. (1999). A market model for stochastic implied volatility, Technical
     report, Department of Statistics, Bonn University.




148
9 Detection and estimation of changes in
  ARCH processes
                                                   Piotr Kokoszka and Remigijus Leipus




9.1    Introduction

Most statistical procedures in time series analysis rely on the assumption that the ob-
served sample has been transformed in such a way as to form a stationary sequence.
It is then often assumed that such a transformed series can be well approximated by a
parametric model whose parameters are to be estimated or hypotheses related to them
tested. Before carrying out such inferences it is worthwhile to verify that the trans-
formed series is indeed stationary or, if a specific parametric model is postulated, that
the parameters remain constant. A classical statistical problem, which is an extension
of a two sample problem to dependent data, is to test if the observations before and
after a specified moment of time follow the same model. In this paper we are, however,
concerned with a change–point problem in which the time of change is unknown. The
task is to test if a change has occurred somewhere in the sample and, if so, to estimate
the time of its occurrence. The simplest form of departure from stationarity is a change
in mean at some (unknown) point in the sample. This problem has received a great
deal of attention, see e.g. Csörgő & Horváth (1997). Financial returns series have,
however, typically constant zero mean, but exhibit noticeable and complex changes in
the spread of observation commonly referred to as clusters of volatility. ARCH models
( Engle (1995), Gouriéroux (1997)) have been shown to be well suited to model such
financial data. It might appear that detecting a change in variance in an ARCH model
will be rather difficult given that they exhibit the aforementioned clusters of volatility.
To understand why this need not be the case, recall that if {rk } is a (stationary) ARCH
sequence, the variance Erk2 is constant; only the conditional variance is a random. It
can therefore be hoped that change–point procedures designed for the inference about
the mean and applied to the series of squares, {rk2 }, whose mean is the variance of the
rk , will be useful in detecting and estimating a change–point in the parameters of an
ARCH sequence which leads to a change in the variance of the rk .
In this paper we examine CUSUM type tests and estimators, which are simple and easy
to implement. We focus on the theoretical aspects of the problem, but before embarking




                                                                                       149
9   Detection and estimation of changes in ARCH processes




         4




                                                                   0.10
         2




                                                                   0.08
                                                                   0.06
         0




                                                                   0.04
         -2




                                                                   0.02
         -4




                                                                   0.0
              0       200       400       600       800   1000            0       200       400       600       800   1000
                                                                                                     




Figure 9.1: A simulated realization of an ARCH(1) sequence with change–point at k ∗ =
            700 and the corresponding sequence Rk .



on the detailed technical exposition, we illustrate the basic idea of the CUSUM change–
point estimation. The left panel of Figure 9.1 below shows a simulated realization
{rk , 1 ≤ k ≤ 1000} of an ARCH(1) sequence with a change–point whose conditional
                   2
variance is a1 + brk−1 for k ≤ 700 and a2 + brk−1 2    for k > 700. We set a1 = 1, a2 =
1.3, b = 0.1 and used standard normal innovations εk . It is impossible to tell by eye if
and where a change in variance occurred. The right panel shows the sequence
                                                                    
                                            k                N
                            k(N − k)  1 X 2           1    X
                     Rk =                      rj −              rj2 
                              N2        k           N −k
                                                             j=1                    j=k+1

whose elements are weighted differences between sample means of the squares. The
weights were chosen in such a way as to minimize bias if a change–point occurs somewhere
in the middle of the sample. The change-point estimator, k̂, say, is then the value of
k which maximizes Rk . In Figure 9.1, the maximum is attained at k̂ = 699. If several
change–points are suspected, the usual procedure is to devide the sample into two parts,
before and after an estimated chang e–point, and to test for the presence of a change–
point in each of the subsamples. This procedure was applied, for example, by Horváth,
Kokoszka & Steinebach (1999).



150
                                                                                          9.1   Introduction

In the following we consider a general model of the form
                                                    ∞
                                                    X
                                       Xk = (b0 +         bj Xk−j )ξk ,                                (9.1)
                                                    j=1

where bj ≥ 0, j = 0, 1, . . . , and {ξk , k ∈ Z} is a sequence of non-negative random
variables.
The general framework leading to model (9.1) was introduced by Robinson (1991) in the
context of testing for strong serial correlation and has been subsequently developed by
Kokoszka & Leipus (2000) and Giraitis, Kokoszka and Leipus (1999a, 1999b). The Xk
in (9.1) can be thought of as non–negative powers |rk |δ of the returns rk . If δ = 2, (9.1)
reduces then to the classical ARCH(∞) model
                                                              ∞
                                                              X
                              rk2 = σk2 ε2k ,   σk2 = b0 +              2
                                                                    bj rk−j ,                          (9.2)
                                                              j=1

where the εk are independent identically distributed random variables with zero mean.
The GARCH(p, q) model
                                                      p
                                                      X                   q
                                                                          X
                     rk2 = σk2 ε2k ,     σk2 = α0 +             2
                                                            βi σk−i +               2
                                                                                αj rk−j
                                                      i=1                 j=1

can be rewritten in form (9.2) under some additional constraints on the coefficients βi , αj ,
see Nelson & Cao (1992).
The interest in studying the powers |rk |δ stems from their complex dependence structure
which is often interpreted as long memory, see Baillie, Bollerslev & Mikkelsen (1996),
Ding & Granger (1996), Pasquini & Serva (1999), among others. Mikosch & Stărică
(1999) seriously challenge such an interpretation and argue that changes in model pa-
rameters are a more plausible explanation of the observed characteristics.
In addition to the CUSUM–type procedures described in this paper, (Horváth & Steinebach
(2000) view them from a slightly different angle) we are aware of only two other types of
change–point procedures for ARCH models. These are Lagrange multiplier tests devel-
oped by Chu (1995) and Lundbergh & Teräsvirta (1998) and the procedures of Mikosch
& Stărică (1999), which are analogous to the Kolmogorov–Smirnov and Cramér–von
Mises goodness of fit tests in the spectral domain.
We examine tests and estimators based on the process {UN (t), t ∈ [0, 1]}, where
                                                                         
                                            [N t]                N
                   [N t](N − [N t])  1 X                 1      X
         UN (t) =                                 Xj −                 Xj  .                          (9.3)
                         N2           [N t]            N − [N t]
                                                    j=1                           j=[N t]+1

The asymptotic theory for the standard statistics like sup0≤t≤1 |UN (t)|,
R1 2
 0 UN (t)dt and their modifications follows automatically from the results presented in
Sections 9.2 and 9.3.



                                                                                                        151
9   Detection and estimation of changes in ARCH processes

The invariance principles for the process {UN (t)} under both the null√ hypothesis and
local alternatives (which converge to the null hypothesis at the rate 1/ N ) are given in
Section 9.2. The change-point estimator and its asymptotic properties are discussed in
Section 9.3.


9.2     Testing for change-point in ARCH

Denoting by b := (b0 , b1 , . . . ) the parameter sequence in (9.1), we write {Xk } ∈ R(b)
if the Xk satisfy equations (9.1). In applications b is a function of a finite–dimensional
parameter vector.
We consider the null hypothesis

                H0 : X1 , . . . , XN is a sample from {Xk } ∈ R(b) for some b

against the change point alternative

                           H1 : ∃ b(1) , b(2) , satisfying b(1) 6= b(2) ,

and such that the sample X1 , . . . , XN has the form
                                   
                                    X (1) , if 1 ≤ k ≤ k ∗ ,
                                        k
                         Xk =
                                    X (2) , if k ∗ < k ≤ N,
                                        k

          (1)                    (2)
where {Xk } ∈ R(b(1) ), {Xk } ∈ R(b(2) ). As will be seen in the sequel, CUSUM
type tests and estimators will work only if the vector b changes in such a way that the
(unconditional) variance of the rk changes.
                     (1)            (2)
The sequences {Xk } and {Xk } are generated by the same noise sequence {ξk }.
Throughout the paper we assume that

                           k ∗ = [N τ ∗ ], where 0 < τ ∗ < 1 is fixed.               (9.4)
          D[0,1]
We write −→ to denote the weak convergence in the space D[0, 1] endowed with the
Skorokhod topology.


9.2.1   Asymptotics under null hypothesis

The results of this subsection follow essentially form a Functional Central Limit Theorem
for the process (9.1) obtained by Giraitis, Kokoszka & Leipus (1999) which states that
if
                                                ∞
                                                X
                                     (Eξ04 )1/4    bj < 1                            (9.5)
                                                 j=1




152
                                                           9.2   Testing for change-point in ARCH

then
                                 [N t]
                             1 X                D[0,1]
                            √       (Xj − EXj ) −→ σW (t),
                              N j=1
where W (t) is a standard Brownian motion and
                                           ∞
                                           X
                                 σ2 =               Cov(Xj , X0 ).                          (9.6)
                                          j=−∞

Note that if ξk = ε2k , then condition (9.5) requires, in particular, that Eε8k < ∞. As-
sumption (9.5) is needed to prove tightness; in order to prove the convergence of finite
dimensional distributions it is enough to assume that
                                                    ∞
                                                    X
                                       (Eξ02 )1/2         bj < 1.                           (9.7)
                                                    j=1

Condition (9.7) guarantees that equations (9.1) have a strictly stationary solution such
that EXk2 < ∞, see Giraitis, Kokoszka & Leipus (2000) for the details.

THEOREM 9.1 Assume that (9.5) holds. Then under the null hypothesis H0
                                              D[0,1]
                                    UN (t) −→ σW 0 (t),
where σ 2 is defined by (9.6) and W 0 (t) is a Brownian bridge.

For finite order GARCH(p, q) processes, Theorem 9.1 can also be deduced from the
results of Horváth & Steinebach (2000). This is because such sequences are mixing in a
way which implies an appropriate invariance principle in probability.
In order to use Theorem 9.1 to construct asymptotic critical regions, we must estimate
the parameter σ 2 . For this we use the following estimator:
                                            X
                                   ŝ2N,q =    ωj (q)γ̂j ,                        (9.8)
                                               |j|≤q

where the γ̂j are the sample covariances:
                              N −|j|
                             1 X
                      γ̂j =         (Xi − X̄)(Xi+|j| − X̄), |j| < N,                   (9.9)
                            N
                                i=1

X̄ is the sample mean N −1 N
                            P
                               j=1 Xj and ωj (q) = 1−(|j|/q + 1) , |j| ≤ q, are the Bartlett
weights. Giraitis et al. (1999) show that ŝN,q tends in probability to σ, provided q → ∞
and q/N → 0. Combining this result with Theorem 9.1, we obtain the following theorem.

THEOREM 9.2 Assume that condition (9.5) is satisfied and q → ∞, q/N → 0. Then
under the hypothesis H0
                          UN (t) D[0,1] 0
                                 −→ W (t).                              (9.10)
                           ŝN,q



                                                                                             153
9     Detection and estimation of changes in ARCH processes

9.2.2     Asymptotics under local alternatives

In the investigation of statistical properties such as the efficiency of tests, it is important
to know the behaviour of the statistics under local alternatives.
Formally, we consider the local alternatives
                         (loc)
                      H1         : ∃ b(1,N ) , b(2,N ) , satisfying b(1,N ) 6= b(2,N )

and                                         
                                             X (1,N ) , if              1 ≤ k ≤ k∗ ,
                                  (N )             k
                                 Xk =                                                                                 (9.11)
                                                    (2,N )
                                              Xk              , if      k ∗ < k ≤ N.
         (i,N )                                                         (i,N )     (i,N )
Here Xk     ∈ R(b(i,N ) ), i = 1, 2, with b(i,N ) ≡ (b0                          , b1       , . . . ) satisfying the following
assumption.

Assumption A. Assume that for i = 1, 2,
                                                (i,N )
                                  (i,N )       βj
                                 bj      = bj + √ ,                   bj ≥ 0, j ≥ 0,                                  (9.12)
                                                           N

                                         (i,N )         (i)
                                       βj         → βj , as N → ∞                                                     (9.13)
and
                                                       ∞
                                                       X
                                       (Eξ04 )1/4            (bj + βj∗ ) < 1,                                         (9.14)
                                                       j=1

where
                                                                      (i,N )
                                      βj∗ := max sup |βj                       | < ∞.                                 (9.15)
                                               i=1,2 N ≥1



Theorems 9.3 and (9.4) were obtained by Kokoszka & Leipus (1999).

THEOREM 9.3 Let λ := Eξ0 and B := ∞
                                   P
                                      j=1 bj . Suppose Assumption A holds and
set
                      X∞
                 σ2 =      Cov(Yk , Y0 ), {Yj } ∈ R(b),
                                      k=−∞

where b = (b0 , b1 , . . .), see (9.12).
                            (loc)
Under the hypothesis H1
                                                  D[0,1]
                                      UN (t) −→ σW 0 (t) + G(t),                                                      (9.16)

where
                                         G(t) := (t ∧ τ ∗ − tτ ∗ )∆



154
                                                                    9.3   Change-point estimation

and where
                                (1)      (2)                  P∞       (1)  (2)
                         λ[(β0 − β0 )(1 − λB) + λb0              j=1 (βj − βj )]
                  ∆ :=                                                             .
                                                  (1 − λB)2

As pointed out in Subsection 9.2.1, the tests should be based on the rescaled statistic
                                                                                 (loc)
UN (·)/ŝN,q , with ŝ2N,q defined in (9.8). It turns out that under hypothesis H1 , if
                √                 P
q → ∞ and q/ N → 0, ŝN,q −→ σ, where σ 2 is defined in Theorem 9.3. We thus obtain
the following theorem.
                                                                 √
THEOREM 9.4 Under the assumptions of Theorem 9.1, if q → ∞ and q/ N → 0,
                                      UN (t) D[0,1] 0
                                             −→ W (t) + σ −1 G(t),
                                       ŝN,q

with ŝ2N,q defined in (9.8).

Theorem 9.4 shows that tests based on the functionals of UN (t)/ŝN,q have power against
local alternatives which converge at the rate N −1/2 .


9.3     Change-point estimation

Subsection 9.3.1 focuses on ARCH(∞) sequences. Extensions to more general models
are discussed in Subsection 9.3.2.


9.3.1    ARCH model

The results presented in this Subsection were obtained in Kokoszka & Leipus (2000).
Assume that the hypothesis H1 holds, i.e. we observe a sample X1 , . . . , XN from the
model                         
                               X (1) , if 1 ≤ k ≤ k ∗ ,
                                   k
                        Xk =                                                     (9.17)
                               X (2) , if k ∗ < k ≤ N,
                                   k
where
                                                ∞
                                (i)       (i)      (i) (i)
                                                X
                           Xk = (b0 +             bj Xk−j )ξk , i = 1, 2.                  (9.18)
                                                j=1

Consider a CUSUM type estimator k̂ of k ∗ defined as follows:

                                  k̂ = min{k : |Uk | = max |Uj |},                         (9.19)
                                                         1≤j≤n

where
                         Uj ≡ UN (j/N ) with UN (t) given by (9.3).



                                                                                             155
9   Detection and estimation of changes in ARCH processes

It is often convenient to state the results in terms of the estimator of τ ∗ defined by

                                                       τ̂ = k̂/N.                      (9.20)
                                                      (i)
In the following we assume that the bj decay exponentially fast. More specifically, we
suppose that the following assumption holds:

Assumption B. The coefficients bj in (9.1) satisfy

                                                        bj ≤ βαj

for some 0 ≤ α < 1 and β ≥ 0 such that
                                                                 2
                                                             βα
                                               Eξ02                     < 1.
                                                            1−α


Consistency of the estimator τ̂ follows from the following theorem.

THEOREM 9.5 Suppose the sample X1 , . . . , XN follows the change–point model de-
fined by (9.17) and (9.18). Consider the change–point estimator k̂ given by (9.19). If
Assumption B holds and
                           (1)       (2)                        ∞
                          b0        b0                  (i)
                                                               X    (i)
               ∆ :=              −          6
                                            = 0, with B     :=     bj , i = 1, 2,      (9.21)
                        1 − B (1) 1 − B (2)                    j=1

then for any  > 0
                                                                        C
                                      P {|τ̂ − τ ∗ | > } ≤                 N −1/2 ,   (9.22)
                                                                      2 ∆2
where C is some positive constant.

The estimator τ̂ remains consistent when the difference ∆ = ∆N defined by (9.21) tends
to zero, as N → ∞, at a rate slower that N −1/4 . Formally, suppose that
                                    (
                                        (1,N )
                              (N )     Xk      , if 1 ≤ k ≤ k ∗ ,
                      Xk = Xk =         (2,N )                                  (9.23)
                                       Xk      , if k ∗ < k ≤ N,

             (i,N )
where the Xk          , i = 1, 2, are given by
                                                                ∞
                                     (i,N )        (i,N )          (i,N ) (i,N )
                                                                X
                               Xk             = (b0         +     bj     Xk−j )ξk .    (9.24)
                                                                j=1

                            (i,N )        (i,N )
Denote also B (i,N ) := b1           + b2          + ....




156
                                                                         9.3    Change-point estimation

THEOREM 9.6 Suppose (9.23) and (9.24) hold and Assumption B (with fixed α and
                                                                        (1,N )    (2,N )
β) is satisfied for any N ≥ 1 and i = 1, 2. Assume also that b0                , b0      are bounded
sequences and
                            (1,N )                     (2,N )
                     ∆N := b0      /(1 − B (1,N ) ) − b0      /(1 − B (2,N ) )
satisfies ∆N → 0 and |∆N |N 1/4 → ∞ as N → ∞. Then τ̂ is a weakly consistent
estimator of τ ∗ .

The difference τ̂ − τ ∗ is of the same order as in the case of a least squares estimator
studied by Bai (1994) in the case of weakly dependent linear sequences. Specifically,
under the assumptions of Theorem 9.1
                                                       
                                        ∗           1
                                 |τ̂ − τ | = OP           .                        (9.25)
                                                  N ∆4N


9.3.2    Extensions

The approach developed for the estimation of a change-point in ARCH models can be
extended to a more general setting. The results presented in this subsection have been
obtained in Kokoszka & Leipus (1998). As observed in the introduction, estimation of a
change in variance of an ARCH sequence can be reduced to the estimation of a chance
in mean of the sequence of squares. In the following we consider a rather general model
for a change–point in mean.
Suppose the sample X1 , . . . , XN has the form
                                   
                                    X (1) , if 1 ≤ k ≤ k ∗ ,
                                        k
                             Xk =                                                                (9.26)
                                    X (2) , if k ∗ < k ≤ N,
                                        k

         (1)                           (2)
where Xk       has mean µ(1) and Xk          has mean µ(2) with ∆ := µ(1) − µ(2) 6= 0.
Consider a family of estimators k̂ = k̂(γ) of k ∗ , 0 ≤ γ < 1 , defined by

                                  k̂ = min{k : |Ũk | = max |Ũj |},                             (9.27)
                                                               1≤j<N

where                                                                                 
                                         1−γ        k                      N
                               k(N − k)              1X                 1    X
                   Ũk =                                      Xj −                  Xj  .
                                  N                  k                N −k
                                                         j=1                 j=k+1

In applications, considering the whole range 0 ≤ γ < 1 offers the advantage of being able
to apply many estimators to a sample under study. The results below are valid under
the following assumption.




                                                                                                   157
9   Detection and estimation of changes in ARCH processes

Assumption C. The observations {Xk , 1 ≤ k ≤ N } follow (9.26) and satisfy
                                         m
                                         X
                            sup    Var         Xj ≤ C (m − k + 1)δ ,
                         1≤k≤m≤N         j=k

for some 0 ≤ δ < 2 and C > 0.


THEOREM 9.7 Suppose Assumption C holds and consider the change–point estimator
k̂ given by (9.27). Then
                                       δ/2−1
                                       N      ,        if δ > 4γ − 2,
                        ∗          C  δ/2−1
              P {|τ̂ − τ | > } ≤ 2 2  N        log N, if δ = 4γ − 2,
                                  ∆  2γ−2
                                       N    ,          if δ < 4γ − 2.

Bai (1994), Antoch, Hušková & Prášková, Z. (1997), Horváth (1997), Horváth & Kokoszka
                                                            (i)
(1997), among others, studied the model (9.26) with Xk = µ(i) + Yk , i = 1, 2, where
{Yk } is a zero-mean stationary sequence. The model considered here is more general
because the change in mean may be due to some very general change in the structure
of a possibly non–linear sequence. For a sample X1 , . . . , XN following the ARCH(∞)
model (9.26), (9.18) satisfying Assumption B, Assumption C holds with δ = 1. For other
examples see Kokoszka & Leipus (1998). Note also that Assumption C is stated in terms
of the observable sequence {Xk }.
Similarly as in Theorem 9.6, one can verify that the estimator τ̂ is still consistent if the
magnitude of the jump ∆ depends on the sample size N and tends to zero, as N → ∞,
at a sufficiently slow rate.




Bibliography
Antoch, J., Hušková, M. & Prášková, Z. (1997). Effect of dependence on statistics for
    determination of change, Journal of Statistical Planning and Inference 60: 291–310.

Bai, J. (1994). Least squares estimation of a shift in linear processes, Journal of Time
     Series Analysis 15: 453–472.

Baillie, R., Bollerslev, T. & Mikkelsen, H. (1996). Fractionally integrated generalized
     autoregressive conditional heteroskedasticity, Journal of Econometrics 74: 3–30.

Chu, C.-S. (1995). Detecting parameter shift in GARCH models, Econometric Reviews
    14: 241–266.

Csörgő, M. & Horváth, L. (1997). Limit Theorems in Change-Point Analysis, Wiley,
     New York.



158
                                                         9.3   Change-point estimation

Ding, Z. & Granger, C. (1996). Modeling volatility persistence of speculative returns: A
    new approach, Journal of Econometrics 73: 185–215.
Engle, R. (1995). ARCH Selected Readings, Oxford University Press, Oxford.
Giraitis, L., Kokoszka, P. & Leipus, R. (1999). Detection of long memory in ARCH
     models, Technical report, preprint.
Giraitis, L., Kokoszka, P. & Leipus, R. (2000). Stationary ARCH models: dependence
     structure and Central Limit Theorem, Econometric Theory . forthcoming.
Gouriéroux, C. (1997). ARCH Models and Financial Applications, Springer.
Horváth, L. (1997). Detection of changes in linear sequences, Ann. Inst. Statist. Math.
    49: 271–283.
Horváth, L. & Kokoszka, P. (1997). The effect of long–range dependence on change–point
    estimators, Journal of Statistical Planning and Inference 64: 57–81.
Horváth, L., Kokoszka, P. & Steinebach, J. (1999). Testing for changes in multivari-
    ate dependent observations with applications to temperature changes, Journal of
    Multivariate Analysis 68: 96–119.
Horváth, L. & Steinebach, J. (2000). Testing for changes in the mean and variance
    of a stochastic process under weak invariance, Journal of Statistical Planning and
    Inference . forthcoming.
Kokoszka, P. & Leipus, R. (1998). Change–point in the mean of dependent observations,
    Statistics and Probability letters 40: 385–393.
Kokoszka, P. & Leipus, R. (1999). Testing for parameter changes in ARCH models,
    Lithuanian Mathematical Journal 39: 231–247.
Kokoszka, P. & Leipus, R. (2000). Change-point estimation in ARCH models, Bernoulli
    6: 1–28.
Lundbergh, S. & Teräsvirta, T. (1998). Evaluating GARCH models, Technical Report
    No. 292, Working paper, Stockholm School of Economics.
Mikosch, T. & Stărică, C. (1999). Change of structure in financial time series, long
    range dependence and the GARCH model, Technical report, preprint available at
    http://www.cs.nl/∼eke/iwi/preprints.
Nelson, D. & Cao, C. (1992). Inequality constraints in the univariate GARCH model,
    Journal of Business and Economic Statistics 10: 229–235.
Pasquini, M. & Serva, M. (1999). Clustering of volatility as a multiscale phenomenon,
    Technical report, preprint.
Robinson, P. (1991). Testing for strong serial correlation and dynamic conditional het-
    eroskedasticity, Journal of Econometrics 47: 67–84.




                                                                                    159
9   Detection and estimation of changes in ARCH processes




160
10 Behaviour of Some Rank Statistics for
   Detecting Changes
                                                                                  Aleš Slabý




10.1     Introduction

The one who is to explore systematic changes within one’s data is put before several
questions bound with possible alternatives to the null hypothesis that there is no change
of distribution along the data. The questions above all include:

   • How many changes should we expect?

   • What kinds of changes are likely to appear?

   • How to estimate nuisance parameters to be consistent under both the null and the
     alternative?

   • Can we get appropriate critical values for chosen statistics and our data?

These questions are imperious since the choice of alternative is to be tested usually
affects the choice of testing statistics in a crucial way. We made an attempt to develop
statistics for testing changes in location which are “robust” from this point of view, and
above all, tried to provide a plausible way how to obtain reasonable critical values.
The situation of the null hypothesis can be represented by a model where we have
independent observations X1 , . . . , Xn , all with the same common continuous distribution
function F . As we consider changes in location we make the distribution F depend on
some location parameter θ, thus, write F (x, θ) = F (x − θ) and consider generally that
Xi ∼ F (x − θi ). Now the null hypothesis can be expressed as

                               Xi = θ + ei ,     i = 1, . . . , n,                     (10.1)

where e1 , . . . , en are i.i.d. random variables with the distribution function F (x, 0). The
alternative of abrupt change means in these terms that

                         Xi = θ + δ I{i>m} + ei ,       i = 1, . . . , n,              (10.2)



                                                                                          161
10    Behaviour of Some Rank Statistics for Detecting Changes

where δ stands for the size of the change appearing at an unknown point m < n.
Assuming a linear trend, unremitting gradual change can be formulated as
                                       i−m
                          Xi = θ + δ       I{i>m} + ei ,              i = 1, . . . , n.             (10.3)
                                        n
Here δ represents the speed of the change starting at an unknown point m < n. These
are only two basic alternatives, later we will consider other, more complicated ones.
The testing statistics in question are based on centered partial sums
                                                  k
                                                  X
                                       S1k =            (a(Ri ) − an ),                             (10.4)
                                                  i=1

                                              n
                                              X                     i−k
                                  S2k =            (a(Ri ) − an )       ,                           (10.5)
                                                                     n
                                          i=k+1

where k = 1, . . . , n. R1 , . . . , Rn are the ranks of observations X1 , . . . , Xn , a(1), . . . , a(n)
are scores and
                                                     n
                                                  1X
                                            an =        a(i).                                      (10.6)
                                                  n
                                                         i=1
Also, note that S1n = 0 = S2n . The only conditions we impose upon the scores are that
there exist finite positive constants D1 , D2 and η such that
                                             n
                                       1X
                                          (a(i) − an )2 ≥ D1                                        (10.7)
                                       n
                                          i=1

and
                                         n
                                     1X
                                        |a(i) − an |2+η ≤ D2 .                                      (10.8)
                                     n
                                        i=1
S1k and S2k are linear rank statistics, for k = 1, . . . , n, it can be easily shown that
                                                    k(n − k) 2
                                     Var S1k =              σn (a),                                 (10.9)
                                                       n

                         (n − k)(n − k + 1)(2(n − k) + 1) (n − k)2 (n − k + 1)2
                                                                                          
         Var S2k =                                       −                                     ×
                                       6n2                         4n3
                  ×σn2 (a),                                                                        (10.10)

and
                                                   k(n − k)(n − k + 1) 2
                          Cov (S1k , S2k ) = −                        σn (a),                      (10.11)
                                                           2n2
where
                                                          n
                                                  1 X
                                  σn2 (a) =           (a(i) − an )2 ,                              (10.12)
                                                 n−1
                                                         i=1




162
                                                                                    10.1       Introduction

so that there is no need for estimation of variance. This fact allows to avoid obstacles
connected with the third question. However, despite S1k and S2k are distribution free
under (10.1) it is not true under alternatives and a procedure sensitive to the alternative
have to be performed in case of rejection of the null hypothesis. The well known statistic

                              C1 =        max        (Var S1k )−1/2 |S1k |                          (10.13)
                                       k=1,...,n−1

is used for testing abrupt changes (10.2) whereas

                              C2 =        max        (Var S2k )−1/2 |S2k |                          (10.14)
                                       k=1,...,n−1

is proposed to test (10.3). Generally speaking C1 is more sensitive to abrupt changes,
and vice versa, C2 is more affected by gradual ones. Also, in the next section we realize
that the limit behaviour is different. That is why we introduce a testing statistic based
on a quadratic form of (S1k , S2k ), namely

                   Q=      max        (S1k , S2k )T [Var (S1k , S2k )]−1 (S1k , S2k ).              (10.15)
                        k=1,...,n−2

It is pleasant that the inverse of the variance matrix can be expressed in the following
compact explicit form,

                                        σn−1 (a)
             [Var (S1k , S2k )]−1 =               ×                                                 (10.16)
                                      (n − k − 1)
                                      " 2n(2(n−k)+1)
                                                          − 3(n−k+1)
                                                                                           #
                                                                              6n
                                             k(n−k)             k           (n−k)
                                 ×                      6n                   12n2
                                                                                               ,
                                                      (n−k)              (n−k)(n−k+1)

which also makes clear why we take maximum over k only up to n − 2. Note that
S1,n−1 = −S2,n−1 .
The statistic (10.15) is sensitive to both alternatives (10.2) and (10.3), and after rejecting
the null hypothesis (10.1) by Q one can continue in analysis using the statistics C1 and
C2 . If we omitted the test based on (10.15) and carried out two separate tests by means
of (10.13) and (10.14) to ascertain whether abrupt or gradual change is present, we
could not control the level of such test since C1 and C2 are dependent. From (10.9),
(10.10) and (10.11), for instance, we can see that S1k and S2k become highly correlated
as k/n increases. The test based on Q treats this problem by mimicking the idea of
F -tests. This idea could also be employed to test more general groups of alternatives
which include quadratic trend etc.
Another modification can be done by considering differences between moving sums in-
stead of the partial sums (10.4), (10.5) themselves, thus consider
                              ∗
                             S1k (G) = S1,k+G − 2S1k + S1,k−G                                       (10.17)

and
                              ∗
                             S2k (G) = S2,k+G − 2S2k + S2,k−G                                       (10.18)



                                                                                                       163
10    Behaviour of Some Rank Statistics for Detecting Changes

for k = G + 1, . . . , n − G. The moving sums sequentially aim at only a part of data
(of length 2G), which allows for testing multiple changes through employing multistage
procedures. Such alternatives and proper procedures are discussed in the last section.
We introduce statistics analogous to the above in (10.13) through (10.15) and put
                                                         ∗
                     M1 (G) =           max        (Var S1k (G))−1/2 |S1k
                                                                       ∗
                                                                          (G)|,              (10.19)
                                k=G+1,...,n−G


                                                         ∗
                     M2 (G) =           max        (Var S2k (G))−1/2 |S2k
                                                                       ∗
                                                                          (G)|,              (10.20)
                                k=G+1,...,n−G

and
                                    
           ∗                              ∗        ∗               ∗        ∗
          Q (G) =       max             (S1k (G), S2k (G))T [Var (S1k (G), S2k (G))]−1 ×
                    k=G+1,...,n−G
                                                             
                                             ∗        ∗
                                        ×(S1k (G), S2k (G)) .                                (10.21)

       ∗ (G), S ∗ (G) are linear rank statistics and straightforward calculations yield
Again S1k      2k
                                         ∗
                                    Var S1k (G) = 2G σn2 (a),                                (10.22)


                                                 G(2G2 + 1) G4
                                                                   
                             ∗
                        Var S2k (G) =                      − 3          σn2 (a),             (10.23)
                                                    3n2     n
and
                                  ∗        ∗                  G 2
                            Cov (S1k (G), S2k (G)) = −         σ (a).                        (10.24)
                                                              n n
Hence
                                                                                   −1
                                                     (2G − 1)(2G + 1) 2G3
                                                     
                  ∗        ∗
           [Var (S1k (G), S2k (G))]−1 =σn−1 (a)                      −                   ×
                                                            3          n
                                             "   2      2
                                                               #
                                               2G +1   G    n
                                         ×      3G − n      G                                (10.25)
                                                     n        2n2
                                                     G         G

for arbitrary meaningful G.


10.2      Limit Theorems

Unfortunately, explicit formulae for distributions of the introduced statistics are not
known. One way how to get critical values is to employ a limit approximation. The
limit behaviour of C1 and M1 (G) is well known.

THEOREM 10.1 Let X1 , . . . , Xn be i.i.d. random variables with common continuous
distribution function F . Let assumptions (10.7) and (10.8) be satisfied.



164
                                                                  10.2   Limit Theorems

  1. As n → ∞
                                                                              
                     p                                1               1
               P    2 log log n C1 ≤ y + 2 log log n + log log log n − log π
                                                      2               2
                              −y
                 −→ exp(−2e )                                                      (10.26)
     for any real y where C1 is defined in (10.13).
  2. If moreover
                          G −→ ∞     and    G−1 n2/(2+η) log n −→ ∞,               (10.27)
     then for any real y, as n → ∞,
                 r                                              
                           n                 n 1       n 1    4π
               P     2 log M1 (G) ≤ y + 2 log + log log − log
                           G                 G 2       G 2     9
                              −y
                 −→ exp(−2e ),                                                     (10.28)
     where M1 (G) is defined in (10.19).

See (Hušková 1997) for the proof. The following theorem demonstrates that the statistics
based on (10.5) exhibits different behaviour from many points of view.

THEOREM 10.2 Let X1 , . . . , Xn be i.i.d. random variables with common continuous
distribution function F . Let assumptions (10.7) and (10.8) be satisfied.

  1. As n → ∞
            (                                         √ )
                                                       3
                                                          −→ exp(−2e−y )
             p
          P    2 log log n C2 ≤ y + 2 log log n + log                              (10.29)
                                                      4π
     for arbitrary real y where C2 is defined in (10.14).
  2. If moreover (10.27) holds then for arbitrary real y, as n → ∞,
            (r                                      √ )
                      n                     n          3
          P     2 log M2 (G) ≤ y + 2 log + log             −→ exp(−2e−y ),         (10.30)
                      G                    G         4π
     where M2 (G) is defined in (10.20).

The first assertion of Theorem 10.2 is a consequence of Theorem 2 in (Jarušková 1998)
and auxiliary Theorem 3 in (Hušková 1997). Derivation of the second assertion follows
similar ideas. However, complete proofs are far beyond the scope of this paper and will
be published elsewhere. If we went into the proofs we would realize that the gradual
changes are bound with Rayleigh process of order 2 whereas in the abrupt case the
order appears to be 1. See also Theorem 12.3.5 in (Leadbetter et al. 1983) or more
general Theorem 10.6.1 in (Bergman 1992). Similar situation arises under alternatives,
study (Hušková 1996, Hušková 1998) to become more familiar with this topic. It sug-
gests strange behaviour of Q and Q∗ (G) and prevents from deriving a limit theorem in
a standard way. It is a challenge into the future. We will further discuss it in the next
section.



                                                                                      165
10    Behaviour of Some Rank Statistics for Detecting Changes

10.3      Simulations

We realized that an elegant, simple and fast enough tool for our purposes can be S-Plus
language, and think that mentioning several tricks may appear worth for some readers.
For instance, generating a random permutation of order n takes only a line

a <- order(runif(n))

In our computations we used Wilcoxon scores and in such a case the command above
generates just the scores. Otherwise one have to apply appropriate function. After gen-
erating scores and subtracting proper mean (10.6) one can immediately obtain a vector
(S1,1 , . . . , S1,n−1 ) via

S1 <- cumsum(a[1:(n-1)])

Computation of (S2,1 , . . . , S2,n−1 ) is more delicate. First refine (10.5) as
                                             n    n
                                      1 X X
                                S2k =       (a(Ri ) − an ),                                 (10.31)
                                      n
                                          i=k+1 j=i

then according to (10.31)

S2 <- rev(cumsum(cumsum(rev(a[2:n]))))/n

gives (S2,1 , . . . , S2,n−1 ). This method avoids using ineffective for-cycle and takes approx-
imately only 2n arithmetic operations. Having calculated S1 and S2 we are ready to
compute vectors (S1,G+1    ∗                   ∗
                                 (G), . . . , S1,n−G            ∗
                                                     (G)) and (S2,G+1               ∗
                                                                      (G), . . . , S2,n−G (G)) as the
second order difference of lag G:

S1G <- diff(c(S1, 0), lag=G, differences=2)
S2G <- diff(c(S2, 0), lag=G, differences=2)

We omit the rest since it is a simple application of (10.9) through (10.16), and (10.19)
through (10.25) for computed S1, S2, and S1G, S2G.
The simulated distributions of (10.13), (10.14), (10.19), (10.20), (10.15), and (10.21)
are plotted in Figures 10.1 through 10.6 and were obtained from 10000 realizations of
random permutations. Respective limit distributions standardized according to (10.26),
(10.29), (10.28), (10.30) are drawn as dashed lines in Figures 10.1 through 10.4. In all
cases simulated quantiles at levels 90%, 95%, and 99% are outlined.
Figures 10.1 and 10.2 confirm the results of the limit theorems. The convergence is very
slow but apparent. The two figures also illustrate the different types of limit behaviour.



166
                                                                        10.3   Simulations

One can see that approximation by limit quantiles is inadequate for C1 and respective
tests are very conservative. Although the approximation is far better for C2 it is not
necessarily good enough, e.g. taking n = 100 the limit 95%-quantile is close to the
simulated 99%-quantile. See also Table 10.2.
An interesting comparison to Table 1 in (Jarušková 1998) can be done. The limit approx-
imation is worse in case of ranks for smaller sizes but the discrepancy appears to decrease
whereas in case of i.i.d. normal variables it stagnates. It can be well explained. In fact
ranks are not independent but the dependency becomes weak as n increases. Moreover,
the limit theorems use approximation by certain Gaussian stationary processes. Also,
note that convergence of maxima of normal variables is extremely slow, see (Embrechts,
Klüppelberg & Mikosch 1997) for more information. The described phenomenon can be
expected in case of the other introduced statistics too, and the reasoning is the same.
The situation in case of moving sums is complicated by entrance of the bandwidth pa-
rameter G. The choice of bandwidth crucially influences convergence properties. The
                  √                         √
choice G1 = 1.5 n for M1 (G1 ) and G2 = n/1.5 for M2 (G2 ) expresses our experience.
Detailed analysis of possible choices would be a study by itself and therefore we omit
detailed discussion because of lack of space. In the next section we give some recommen-
dations which involve in consideration other aspects too. Figures 10.3 and 10.4 imply
similar conclusions as Figures 10.1 and 10.2. The limit approximation of quantiles is
better for M2 (G2 ) than for M1 (G1 ) again. However, here the convergence of the whole
distribution seems to be better for M1 (G1 ). Note that relationship between behaviour
of partial sums and their second order differences is distinct in Theorems 10.1 and 10.2,
see also first order differences in Theorem 2 of (Hušková 1997).
Figure 10.5 shows shapes more similar to some Fréchet distribution, which does not
have finite moments from certain order. The figures discussed above    √ exhibit better
accordance with Gumbel distribution shape. However, if we consider Q it turns out to
be the other way around. Table 10.1 contains Hill estimates for the shape parameter ξ
of generalized extreme √value distribution, see (Embrechts et al. 1997). The table shows
that the estimates for Q are even closer to 0 than the estimates for bothp C1 and C2 .
It incites an idea that the convergence of Q could be better. As for Q∗ (G) versus
                                                                    √
M1 (G1 ) and M2 (G2 ) it is not true. Note that here we take G = n as a compromise
between G1 and G2 .
                                                           √       p
                n      C1      C2     M1 (G1 ) M2 (G2 )      Q       Q∗ (G)
               100 0.066 0.090         0.063      0.049   0.060     0.057
               250 0.067 0.084         0.062      0.047   0.058     0.049
               1000 0.059 0.083        0.048      0.044   0.045     0.052

                   Table 10.1: Hill estimates for the shape parameter




                                                                                       167
10    Behaviour of Some Rank Statistics for Detecting Changes

                                                             

                                                 
                                                 
                                                 
                                                     
                                                 


                                                           


                                                          

                                                 
                                                 
                                                 
                                                     
                                                 


                                                           



                   Figure 10.1: Simulated convergence of C1 (Wilcoxon scores)



10.4           Comments

The statistics (10.19), (10.20), (10.21) are appropriate for testing combined alternatives.
The multistage testing procedures consist of repeated testing applied to disjunct sections
of data. The procedures can be designed recursively as follows. Find the maximum over
the whole data and decide whether it is significant. If yes exclude 2G observations
around the point where the maximum is attained and apply the same step again for the
two data sections which arise this way. The procedure ends when tests in all sections
are not significant or at a time when the sections do not comprise sufficient number of
observations.
The described procedure utilizes the fact that S1k∗ (G) and S ∗ (G) are dependent only
                                                               1l
through an for |k − l| > 2G, which means that they can be considered to be independent
                                  ∗ (G) and S ∗ (G). This fact allows to control the level
for n large. The same holds for S2k          2l
of such multistage tests.
For example, (10.20) can be this way used to detect not only a beginning of linear trend
but also its end. To recognize whether there is a decrease or an increase one need to
consider formulas (10.13) through (10.15), and (10.19) through (10.21) without absolute
values. The use is clear. In Theorems 10.1 and 10.2 one only have to exchange the




168
                                                                                       10.4   Comments

                                                                     

                                                        
                                                        
                                                        
                                                            
                                                        


                                                                   


                                                                  

                                                        
                                                        
                                                        
                                                            
                                                        


                                                                   



                      Figure 10.2: Simulated convergence of C2 (Wilcoxon scores)


limit exp(−2e−y ) for exp(−e−y ) in case of maximum. For minimum use correspondence
min Xi = − max{−Xi }.
The strategy for the choice of G will be demonstrated by the following example of
application of (10.21). It can be helpful at investigating efficiency of some measure, for
instance in operational risk control where Xi represent the severity of operational losses
for the ith day. Suppose the measure were asserted on the first day. The hypothesis of
“positive mass” after asserted measure could be assessed like
                                            i − m2                   m3 − m2
                  Xi =θ + δ I{i>m1 } + ∆            I{m2 <i<m3 } + ∆         I{i≥m3 } + ei ,
                                               n                        n
                      i = 1, . . . , n, and δ > 0, ∆ < 0                                        (10.32)
One could expect that m1 is not very far from 1 and m2 . It means that G should be
chosen small enough to detect these points. Also, G should be smaller than (m3 −m2 )/2.
After we assess the largest plausible value of G in view of practical facts we decide
whether the limit approximation for critical values can be good for some of these values.
                         √                         √
Generally consider G > n for M1 (G) and G < n for M2 (G). In (Slabý 1999) it is
also shown that G should be large to gain a large asymptotic power of the test (10.1)
against (10.2) via M1 (G). Of course, it has to satisfy condition (10.27) at the same
time. However, we rather recommend to use simulations to compute critical values
instead of the limit approximations. With a good computer it does not take more than



                                                                                                   169
10    Behaviour of Some Rank Statistics for Detecting Changes

                                                                 
                                                        
                                                       
                                                        
                                                      
                                                        
                                                      
                                                           
                                                        
                                                        
                                                      
                                                        
                                                      
                                                                                           


                             "!                                #$   !&%
                                                        
                                                       
                                                       
                                                             
                                                        
                                                       
                                                        
                                                       
                                                        
                                                       
                                                        
                                                      
                                                                                           



                    Figure 10.3: Simulated convergence of M1 (G) (Wilcoxon scores)



several minutes since for 10000 samples the simulated quantiles already seem to be stable.
Selected critical values can be found in Table 10.2.
The last practical question is how to choose the scores. The recommendation is that
they should be chosen as in situation when the change times are known. For example, if
you test alternative (10.2) and expect that the underlying distribution is close to normal
then choose van der Waerden scores for the two-sample problem.


10.5            Acknowledgements

This work poses a part of my dissertation and was supported by the grant GAČR-
201/97/1163 and CES:J13/98:113200008. I would like to thank Marie Hušková, my
dissertation supervisor, who meaningfully routed my work and, at the same time, let my
ideas fully grow. Her hints and suggestions were very helpful to me. Also, I am grateful
to Jaromı́r Antoch for his hints concerning simulations and Karel Kupka, who revealed
me the world of S-Plus programming art.




170
                                                                        10.5           Acknowledgements

                                                                
                                                  
                                                 
                                                  
                                                
                                                  
                                                
                                                   
                                                 
                                                  
                                                 
                                                  
                                                
                                                                                      


                                                   !" # 
                                                  
                                                 
                                                  
                                                
                                                  
                                                
                                                     
                                                  
                                                 
                                                       
                                                  
                                                
                                                                                      



               Figure 10.4: Simulated convergence of M2 (G) (Wilcoxon scores)



Bibliography

Bergman, M. (1992). Sojourns and Extremes of Stochastic Processes, Wadworth &
    Brooks/Cole.

Embrechts, P., Klüppelberg, C. & Mikosch, T. (1997). Modelling Extremal Events for
   Insurance and Finance, Springer-Verlag, Berlin Heidelberg.

Hušková, M. (1996). Limit Theorems for M-processes via Rank Statistics Processes, Ad-
     vances in Combinatorial Methods with Applications to Probability and Statistics.

Hušková, M. (1997). Limit theorems for rank statistics, Statistics & Probability Letters
     32: 45–55.

Hušková, M. (1998). Estimators in the location model with gradual changes, Commen-
     tationes Mathematicae Universitatis Carolinae 39,1: 147–157.

Jarušková, D. (1998). Testing appearance of linear trend, Journal of Statistical Planning
     & Inference 70: 263–276.

Leadbetter, M., Lindgren, G. & Rootzén, H. (1983). Extremes and related properties of
    random sequences and processes, Springer-Verlag, Heidelberg.



                                                                                                    171
10    Behaviour of Some Rank Statistics for Detecting Changes

                                                              

                                                 
                                                  
                                                 
                                                  
                                                 
                                                  
                                                      
                                                  
                                                      
                                                 
                                                                           


                                                           

                                                 
                                                  
                                                  
                                                  
                                                 
                                                  
                                                 
                                                  
                                                      
                                                 
                                                                           



                   Figure 10.5: Simulated distributions of Q (Wilcoxon scores)



Slabý, A. (1999). The method of mosum and its modifications, Master’s thesis, A diploma
     thesis, The Faculty of Mathematics and Physics, Charles University, in Czech.




172
                                                                                          10.5       Acknowledgements

                                                                                  
                                                                
                                                               
                                                                
                                                              
                                                                
                                                              
                                                                 
                                                               
                                                                
                                                               
                                                                
                                                              
                                                                                                  !


                       "        #                                        $%& '(&"
                                                                
                                                               
                                                                
                                                               
                                                                
                                                              
                                                                   
                                                                
                                                                
                                                               
                                                                
                                                              
                                                                                                  !



            Figure 10.6: Simulated distributions of Q∗ (G) (Wilcoxon scores)


                              n             C1         C2    M1 (G1 )        M2 (G2 )        Q              Q∗ (G)
                             30            2.49       2.07    2.46            2.49         7.92              7.85
                             50            2.59       2.11    2.66            2.64         8.66              8.87
        90%
                             100           2.73       2.18    2.91            2.82          9.67            10.26
                             200           2.78       2.21    3.12            2.96         10.36            11.62
                             500           2.90       2.27    3.33            3.13         11.17            13.07
                              n             C1         C2    M1 (G1 )        M2 (G2 )        Q              Q∗ (G)
                             30            2.70       2.31    2.69            2.66          9.08             8.96
                             50            2.81       2.34    2.90            2.81         10.05            10.09
        95%
                             100           2.98       2.44    3.15            3.01         11.06            11.56
                             200           3.02       2.45    3.33            3.15         11.79            12.86
                             500           3.14       2.54    3.55            3.31         12.63            14.42
                              n             C1         C2    M1 (G1 )        M2 (G2 )       Q               Q∗ (G)
                             30            3.12       2.79    3.19            2.91         11.66            10.97
                             50            3.27       2.81    3.32            3.12         12.96            12.45
        99%
                             100           3.40       2.89    3.56            3.36         14.37            14.43
                             200           3.49       2.94    3.78            3.50         15.14            16.04
                             500           3.65       3.01    3.96            3.70         15.82            17.51

                    Table 10.2: Simulated critical values (Wilcoxon scores)



                                                                                                                           173
10    Behaviour of Some Rank Statistics for Detecting Changes




174
11 A stable CAPM in the presence of
   heavy-tailed distributions
                                                   Stefan Huschens and Jeong-Ryeol Kim




11.1     Introduction

One of the main assumptions of CAPM is the normality of returns. A powerful statistical
argument for the Gaussian assumption is the Central Limit Theorem (CLT), which states
that the sum of a large number of independent and identically distributed (iid) random
variables (r.v.’s) from a finite-variance distribution will tend to be normally distributed.
Due to the influential works of Mandelbrot (1963), however, the stable non-Gaussian, or
rather, α-stable distribution has often been considered to be a more realistic one for asset
returns than the normal distribution. This is because asset returns are typically fat–
tailed and excessively peaked around zero—phenomena that can be captured by α-stable
distributions with α < 2. The α-stable distributional assumption is a generalization
rather than an alternative to the Gaussian distribution, since the latter is a special case
of the former. According to Generalized CLT, the limiting distribution of the sum of a
large number of iid r.v.’s must be a stable distribution, see Zolotarev (1986).
For the estimation of the β-coefficient in the CAPM OLS estimation is typically applied,
which according to the Gauss-Markov theorem, has the minimum variance among all lin-
ear unbiased estimators when the disturbance follows a distribution with finite variance.
When the disturbance follows a distribution with infinite variance, however, the OLS
estimator is still unbiased but no longer with minimum variance. By relaxing the nor-
mality assumption by allowing disturbances to have a symmetric α-stable distribution
with infinite variance, Blattberg & Sargent (1971) generalize the OLS estimator (hence-
forth, referred to as the BS estimator), which we apply for estimating of β-coefficient in
CAPM under the α-stable distributional assumption.
In this paper, we study CAPM under the α-stable distributional assumption. We employ
the Qp -statistic, a simple estimator for α in Huschens & Kim (1998), to apply the BS
estimator for data with unknown α. We also use a bivariate symmetry test to check
the linearity of stable CAPM’s of interest. In an empirical application, we apply a
stable CAPM for estimating the β-coefficients for German Stock Index (DAX) and its
individual asset returns. It turned out that the estimated values of the β-coefficients are



                                                                                        175
11    A stable CAPM in the presence of heavy-tailed distributions

different, depending on the distributional assumption.
The rest of this paper is organized as follows: Section 2 presents empirical evidence for
fat–tailed distributions in DAX data and gives a short summary of α-stable distributions.
In Section 3, we study a stable CAPM and the BS estimator. Empirical results of the
bivariate symmetry test and of the β-coefficient from the stable CAPM, compared to the
conventional CAPM, are presented in Section 4. Section 5 summarizes the main result
of the paper.


11.2      Empirical evidence for the stable Paretian hypothesis

11.2.1     Empirical evidence

It is well-known that in most financial data, there are high volatile and low volatile
phases, and that they alternate periodically. Mandelbrot (1963) observed it and reported
that “. . . large changes tend to be followed by large changes of either sign, and small
changes tend to be followed by small changes . . . ”, which is called the Joshep-effect in
the literature. In the analysis and modeling for conditional distribution, this empirical
observation is known as volatility clustering. Based on Jensen’s inequality, one can easily
show that financial data with volatility clustering are excessively peaked around zero in
their unconditional distribution. This phenomenon can be explained through the risk-
aversion of investors: The bigger a shock is, the more active investors are, so that more
information will be arriving in the transaction markets. This alternating volatility is
typical for distributions with heavy tails and at the same time many outliers.
Figure 1a shows logarithm of DAX for the period from January 4, 1960 until September
9, 1995. Figure 1b shows returns of the DAX. They clearly show volatility clustering.
Figure 1c shows the empirical density of the returns which is leptokurtic and heavy-tailed
distributed.




176
                                11.2           Empirical evidence for the stable Paretian hypothesis




                                    Figure 1. Prices, returns and empirical density of the DAX
                    8


                  7.5


                    7


                  6.5


                    6


                  5.5
                   1960     1965        1970        1975       1980      1985      1990        1995     2000
                                   Figre 1a. Logarithm of the DAX, Jan. 4, 1960 − Sep. 9, 1995


                   15

                   10

                    5

                    0

                   −5

                  −10

                  −15
                    1960    1965        1970        1975       1980        1985     1990         1995   2000
                                                Figure 1b. Daily returns of the DAX


                  0.5


                  0.4


                  0.3


                  0.2


                  0.1


                    0
                    −5     −4       −3      −2       −1         0         1        2        3       4    5
                                     Figure 1c. Empirical density of daily returns of the DAX




For more empirical evidence of heavy tails in financial data, we refer to Kim (1999a).




                                                                                                               177
11     A stable CAPM in the presence of heavy-tailed distributions

11.2.2       Univariate und multivariate α-stable distributions

The shape parameter for the α-stable distribution, α, is called the stability parameter.
In this paper, we only consider the case for α > 1 because of empirical relevance. For
α < 2, the tails of the distribution are fatter than those of the normal distribution, with
tail-thickness increasing as α decreases. If α < 2, moments of order α or higher do not
exist. A Gaussian r.v. is the special case of an α-stable r.v. when α = 2. A stable
r.v. with a stability parameter α is said to be α-stable For more details on α-stable
distributions, see Samorodnitsky & Taqqu (1994). Closed-form expressions of α-stable
distributions exist only for α = 2, 1 and 0.5. However, the characteristic function of
the α-stable distribution can be written as the following (see Samorodnitsky & Taqqu
(1994), p. 5):
                         n                          πα        o
           EeiXt = exp −δ α |t|α [1 − ib sign(t)tan ] + iµt , for 1 < α ≤ 2,
                                                     2
where µ is the location parameter, δ is the scale parameter, and b ∈ [−1, 1] is the skewness
parameter,1 which determines the relative size of the two tails of the distribution. If b
= 0, the distribution is symmetric, denoted as Sα S. In this paper we only consider the
symmetric case for both univariate and multivariate distributions. This is partly for
simplicity and partly for empirical importance. The shape of a stable distribution is,
therefore, completely determined by its stability parameter α, when b = 0. For α = 2
and b = 0, we have the normal distribution N (µ, 2δ 2 ).
Figure 2 shows some selected α-stable distributions. The α-stable distributions with
α < 2 look more like the empirical data in Figure 1c than the normal distribution
does. This similarity between α-stable distributions and empirical financial data is an
important motivation for applying α-stable distributions.



 1
     Usually, β (instead of b) stands for the skewness parameter for the α-stable distribution, but we use
     b to avoid notational confusion with the β in CAPM.




178
                               11.2      Empirical evidence for the stable Paretian hypothesis




                                     Figure 2. Symmetric stable distributions with α = 2, 1.5, 1
                    0.5

                                                                α=1
                   0.45

                                                                α=1.5
                    0.4
                                                                α=2
                   0.35


                    0.3


                   0.25


                    0.2


                   0.15


                    0.1


                   0.05


                     0
                     −5   −4    −3         −2        −1          0          1         2            3   4   5




The characteristic function of an α-stable vector, X ∈ IRd , can be written for 1 < α ≤ 2
as the following (for further details, see Samorodnitsky and Taqqu, 1994, p. 73):
                        Z                                  πα                
           i(X,t)                        α
        Ee        = exp      | cos(t, s)| 1−i sign(t, s) tan       Γ(ds)+i(t, µ0 ) ,
                          Sd                                   2
where Γ is a finite spectral measure of the α-stable random vector on the unit sphere Sd ,
with Sd = {s : ||s|| = 1} being the unit sphere in IRd , µ0 a shift vector, and µ0 ∈ IRd . One



                                                                                                               179
11     A stable CAPM in the presence of heavy-tailed distributions

important difference between multivariate α-stable distributions and multivariate normal
distributions is that multivariate α-stable distributions are in general not completely
characterized by a simple covariation matrix.2 If X1 and X2 are iid stable r.v.’s with
α < 2, the joint distribution will not have circular density contours. In this paper we
only consider strictly α-stable vectors, i.e., µ0 = 0. More exactly, we only consider
symmetric, strictly α-stable vectors with 1 < α ≤ 2, i.e., µ0 = 0 and Γ is a symmetric
spectral measure on Sd . We discuss this point later in relation to the linearity of stable
CAPM and the bivariate regression curve.


11.3         Stable CAPM and estimation for β-coefficients

The theory of portfolio choice is based on the assumption that investors allocate their
wealth across the available assets so as to maximize expected utility. Based on risk
aversion of investors, Sharpe (1964) and Lintner (1965) introduce a model of asset returns
as a normalized covariance of returns of an asset with returns of a market portfolio. In
the frame of the conventional CAPM in which expected utility is a function only of
the portfolio’s mean and variance, one can formulate the expected return of an asset as
follows:
                              E[Ri ] = Rf + βi (E[Rm ] − Rf )                       (11.1)
with
                                          Cov[Ri , Rm ]
                                           βi =         ,                        (11.2)
                                            Var[Rm ]
where Rm is the random return on the market portfolio, and Rf is the return on the
risk–free rate of interest. In the conventional CAPM in (11.2), Ri and Rm are typically
bivariate normally distributed. The CAPM implies that the expected return of an asset
must be linearly related to the return of the market portfolio.
In order to estimate the β-coefficients, it is necessary to add an assumption concerning
the time-series behavior of returns and estimate the model over time. One typically as-
sumes that returns are normal and iid through time. Furthermore, under the assumption
of constant covariation structure (otherwise, it would result in a time-varying β), the
usual estimator of the asset β is the OLS estimator of the slope coefficient in the excess-
return market equation, i.e., the β in the linear regression model with the following time
index:
                                      yt = βxt + ut ,                                (11.3)
where ut is typically assumed as iid with finite variance and expectation zero. The OLS
estimator for β is given as                   P
                                                  xt yt
                                    β̂OLS = Pt 2                                  (11.4)
                                                 t xt
and is a best linear unbiased estimator (BLUE). In the context of stable distributions,
more general concepts are needed because of infinite variance.
 2
     For stable distributions, covariation is analogous to the covariance of the normal distributions.




180
                                  11.3    Stable CAPM and estimation for beta-coefficients

11.3.1    Stable CAPM

Based on empirical evidence, we now turn to α-stable distributed returns, and con-
sequently, to stable CAPM. If asset returns are no longer assumed to be normally dis-
tributed, it has consequences on the conventional CAPM, which is based on the existence
of second order of moments for the underlying returns.
Fama (1970) considers the conventional CAPM under the special case of multivariate
α-stable distributed returns. The return of the ith -asset is generated by the so-called
market model
                                 Ri = ai + ci M + εi ,                            (11.5)
where ai and ci are asset-specific constants, M is a common market factor, and M and
εi are mutually independent Sα S r.v’s. Under the existence of a riskless asset return
Rf and the assumption of risk aversion, the market return of N assets in the market
portfolio can be written by

                                Rm = g 0 R = am − cm M + εm ,                              (11.6)

where g = (g1 , . . . , gN )0 is the proportion of the ith asset in the market portfolio, am =
g 0 a with a = (a1 , . . . , aN ), cm = g 0 c with c = (c1 , . . . , cN ), and εm = g 0 ε with ε =
(ε1 , . . . , εN ). An efficient portfolio minimizes the scale parameter given the mean return.
The market portfolio is an efficient portfolio with (E[Rm ] − Rf )/δ(Rm ) as slope of the
tangent in (E[Rm ], δ(Rm )) (see Fama, 1970, p. 49). This implies that

                                               1 ∂δ(Rm )
                                    α βi =               .                                 (11.7)
                                             δ(Rm ) ∂gi

is established as an analog to the β-coefficient in (11.2) under the α-stable assumption.
In the bivariate strictly Sα S case with α > 1, i.e., (Ri − E[Ri ], Rm − E[Rm ]), Kanter
(1972) shows an equivalent expression to (11.7) that
                                                   R 2π
                 E[Ri − E[Ri ]|Rm − E[Rm ]]          0    sin θ(cos θ)<α−1> dΓ(θ)
          α βi =                            =              R 2π                   ,
                       Rm − E[Rm ]                                    α
                                                            0 | cos θ| dΓ(θ)
                     R 2π
where the quantity 0 sin θ(cos θ)<α−1> dΓ(θ) is called the covariation of two α-stable
distributed r.v.’s and a<p> := |a|p sign(a). For more details on covariation, see Samorod-
nitsky & Taqqu (1994), p. 87.
Hardin Jr, Samorodnitsky & Taqqu (1991) examine the determination of the form of
regressions under the α-stable distributions and give necessary and sufficient conditions
for its linearity, which is implicitly assumed in the formulation of the mean-variance
efficient CAPM. One of the results of their analysis is that, as is shown in Kanter
(1972), the regression curve is linear if the bivariate α-stable r.v. with 1 < α ≤ 2 is
symmetric.




                                                                                              181
11    A stable CAPM in the presence of heavy-tailed distributions

Employing the concepts of variation and covariation in Samorodnitsky & Taqqu (1994),
Gamrowsky & Rachev (1994) notice a stable CAPM as an analog of the conventional
CAPM with the following α βi -coefficient:

                                               [Ri , Rm ]α
                                     α βi =                ,                           (11.8)
                                              [Rm , Rm ]α

which is again an equivalent expression for (11.8).
To sum this up, we can write a stable CAPM as:

                              E[Ri ] = Rf + α βi (E[Rm ] − Rf ),                       (11.9)

where the excess return, (E[Ri ] − Rf , E[Rm ] − Rf ), is bivariate strictly Sα S distributed.
The α β in (11.8), however, does not give a workable formula for estimating the β-
coefficient in (11.2) under the α-stable distributional assumption. The BS estimator in
Blattberg & Sargent (1971) was firstly employed by Huschens & Kim (1999) to estimate
the β-coefficient in the stable CAPM, which is again a stable analog of the normalized
covariance for stable laws. In the next subsection we discuss estimation for β-coefficients
in the stable CAPM.


11.3.2     Estimation of the β-coefficient in stable CAPM

When α < 2, the OLS estimator in (11.4) follows stable distributions with the same
stability parameter α as the underlying disturbances–i.e., OLS is very sensitive to out-
liers. As long as α > 1, the OLS will converge to the true parameter value as the
sample becomes large, but only at the rate n1−(1/α) rather than the n1/2 rate for the
Gaussian case. Furthermore, conventional t statistics for estimates of β will no longer
have the (usual) Student’s t-distribution, but will be concentrated in the vicinity of ±1,
see Logan, Mallows, Rice & Shepp (1973).
Blattberg & Sargent (1971) derive BLUE for the coeficients in linear regressions with
deterministic regressor and α-stable distributed disturbances. By minimizing the disper-
sion parameter under the α-stable distributional assumption, the BS estimator is BLUE
for a regression with deterministic regressors and obtained as

                                        |xt |1/(α−1) sign(xt )yt
                                    P
                            βBS = t P               α/(α−1)
                                                                 ,               (11.10)
                                             t |xt |

which coincides with (11.4) for α = 2. The efficiency of the BS estimator, both for the
case of deterministic regressor and of stochastic regressors, is demonstrated in Huschens
& Kim (1999) by simulation.
The BS estimator assumes that the stability parameter of the underlying data is known.
For empirical works, Huschens & Kim (1998) propose a simple quantile statistic for




182
                                          11.4    Empirical analysis of bivariate symmetry test

estimating an unknown α. The quantile statistic is a ratio of an estimate of the p-
quantile and of the first absolute moment of a distribution truncated on the left at x1−p
and on the right at xp :
                                                       X̂p
                     Q̂p = Pn                                Pn                     .      (11.11)
                                 i=1 |Xi |I[0,X̂p ] (|Xi |)/  i=1 I[0,X̂p ] (|Xi |)

Using the following response surface regression for p = 0.99 one can easily check the
stability parameter of the data of interest.
                 α̂ = −5.60Q̂−0.5
                             .99
                                  + 58.45Q̂−1
                                           .99
                                               − 123.93Q̂−1.5
                                                         .99
                                                              + 86.31Q̂−2
                                                                       .99
                                                                           ,
for 1 < α ≤ 2.


11.4      Empirical analysis of bivariate symmetry test

In this section, we present empirical results of the stable CAPM. In the first part of
the section, we give a test procedure for bivariate symmetry considered in Kim (1999b).
The bivariate symmetry is of interest as a pre-test to ascertain the linearity CAPM, as
is discussed in Kanter (1972) and Hardin Jr et al. (1991). In the second part of the
section, we present the estimates for β-coefficients in a stable CAPM. For our empirical
analysis, we take DAX-30 standard assets for the period from July 20, 1998 till July 18,
1999, in which no changes occured in the composition of the DAX-30.


11.4.1    Test for bivariate symmetry

Using a statistic based on a spherically trimmed mean and a spectral measure for testing
general multivariate stable laws in Heathcote, Rachev & Cheng (1991), Kim (1999b)
gives the following workable procedure for testing for bivariate α-stable symmetry:
                                                                                     p
  (i) For every observation [x1t , x2t ] of Xt , we write the polar coordinates ρt := x21t + x22t
      and inverse tangent η̃t := arctan(x1t /x2t ).
 (ii) Let k be a sequence of integers satisfying 1 ≤ k ≤ n/2 with n being the sample
      size, and derive the estimator for the normalized spectral measure
                                     n
                                 1X
                      φn (η) =      I[0,η] (ηt )I[ρn−k+1:n ,∞) (ρt ),       η ∈ (0, 2π],   (11.12)
                                 k
                                    k=1

      where I(·) is the usual indicator function; and ρi:n denotes the i-th order statistic.
      Parameter ηt in (11.12) is defined as
                                 
                                 
                                   η̃t ,        for x1t , x2t ≥ 0,
                                    π − η̃t ,    for x1t < 0, x2t ≥ 0,
                                 
                           ηt :=
                                 
                                   π   + η̃t ,  for x1t , x2t < 0,
                                    2π − η̃t ,   for x1t ≥ 0, x2t < 0.
                                 



                                                                                              183
11    A stable CAPM in the presence of heavy-tailed distributions




                 Table 11.1: Results of the test for bivariate symmetry
                        Test                 Φ-Statistic (p-value)
                       Daten

                        Adidas-Salomon           1.11 (0.27)
                        Allianz                  0.71 (0.48)
                        BASF                     1.22 (0.22)
                        Bayer                    1.06 (0.29)
                        BMW                      1.00 (0.32)
                        Commerzbank              1.41 (0.16)
                        DaimlerChrysler          1.63 (0.10)
                        Degussa                  1.42 (0.15)
                        Dresdner Bank            0.50 (0.62)
                        Deutsche Bank            0.71 (0.48)
                        Deutsche Telekom         0.80 (0.42)
                        Henkel                   1.49 (0.14)
                        Hoechst                  1.28 (0.20)
                        B. Vereinsbank           0.71 (0.48)
                        Karstadt                 1.58 (0.11)
                        Linde                    1.18 (0.24)
                        Lufthansa                1.07 (0.29)
                        MAN                      1.54 (0.12)
                        Mannesmann               0.75 (0.45)
                        Metro                    1.22 (0.22)
                        Münchener Rück         0.58 (0.56)
                        Preussag                 1.37 (0.17)
                        RWE                      1.22 (0.22)
                        SAP                      0.82 (0.41)
                        Schering                 1.70 (0.09)
                        Siemens                  0.71 (0.48)
                        Thyssen                  1.67 (0.10)
                        VEBA                     0.51 (0.61)
                        VIAG                     1.58 (0.11)
                        Volkswagen               0.55 (0.58)




184
                                      11.4   Empirical analysis of bivariate symmetry test

     In practice, one may take the grid (η1 , · · · , ηd ), η1 = 2π/d, ηd = 2π, where d is the
     number of grid points and 2π/d the step width.

(iii) Under some regularity conditions, one can use the sample supremum of φn (η) in
      the region 0 < η ≤ π, namely
                                      √ |φn (η) − φn (η + π) + φn (π)|
                          Φn := sup    k          p                    ,              (11.13)
                                0<η≤π                2φn (η)

     as test statistic.

From the functional limit theorem for φn (η), one can easily verify that Φn asymptotically
follows a standard normal distribution.
Table 11.1 shows the empirical results of testing for bivariate α-stable symmetry. The
null hypothesis of bivariate α-stable symmetry cannot be rejected for almost any returns
at the 95% significance level. For only 2 of 30 returns (Schering and Thyssen), symmetry
cannot be rejected at the 90% significance level. The result indicates a linear relation of
stable CAPM of interest in our empirical analysis.


11.4.2    Estimates for the β-coefficient in stable CAPM

Table 11.2 shows the empirical result of estimated β’s in the stable CAPM. All estimates
of OLS and BS are significant from zero, where the significance of BS estimates is based
on the simulated critical values depending on α. For details, see Kim (1999a). For a
small α, it is more likely that the difference between two estimates from OLS and BS
etimation can be observed. It is noteworthy that the differences from two estimates are
rather small, because the differences are based on the loss of efficiency of the OLS under
the α-stable distributional assumption. Note that OLS is still unbiased and consistent.
The relative efficiency of the OLS compared with BS, measured by the distance between
the 5% and 95% quantil, is 0.996, 0.982, 0.938, 0.923, 0.821, 0.710, 0.617, 0.505 and
0.420 for α = 1.9, 1.8, 1.7, 1.6, 1.5, 1.4, 1.3, 1.2, and 1.1, respectively. In practical
financial management, however, a small difference in the estimated value for βs can have
a crucial effect on decisional processes. More than two thirds of estimated α-values lie
in the regions which are more than two Monte Carlo standard deviations away from
α = 2. It is worthwhile noting that the stability parameter estimation needs a very
large sample size. A sample size of 250, as our empirical size, is too small to estimate
the stability parameter accurately, and hence, the Monte-Carlo standard deviations are
large. Additionally, it is not unusual that stability parameter estimates over 2 are to be
expected for iid stable samples with α as low as 1.65, as argued in McCulloch (1997).




                                                                                          185
11      A stable CAPM in the presence of heavy-tailed distributions




                           Table 11.2: Estimated β- and α β-coefficients

              Daten                        OLS               α̂                BS

              Adidas-Salomon 0.6926(0.0884)a 2.00(0.04)b 0.6926( 7.84;2.58)c
              Allianz          1.1470(0.0518) 1.77(0.11) 1.1734(22.65;2.91)
              BASF             0.7436(0.0533) 1.67(0.13) 0.7365(13.81;3.40)
              Bayer            0.7065(0.0578) 1.91(0.07) 0.7003(12.12;2.56)
              BMW              1.1076(0.0800) 1.78(0.10) 1.1088(13.86;2.88)
              Commerzbank      0.9878(0.0522) 1.67(0.13) 0.9883(18.94;3.40)
              DaimlerChrysler  1.0919(0.0509) 1.87(0.08) 1.1021(21.65;2.61)
              Degussa          0.4949(0.0938) 2.00(0.04) 0.4949( 5.27;2.58)
              Dresdner Bank    1.2110(0.0770) 1.73(0.11) 1.1682(15.16;3.09)
              Deutsche Bank    1.0626(0.0638) 1.89(0.07) 1.0541(16.52;2.58)
              Deutsche Telekom 1.1149(0.0792) 2.00(0.04) 1.1149(14.08;2.58)
              Henkel           0.8582(0.0831) 1.75(0.11) 0.8528(10.26;3.00)
              Hoechst          0.9032(0.0776) 1.99(0.04) 0.9016(11.62;2.58)
              B. Vereinsbank   1.0555(0.0968) 2.00(0.04) 1.0555(10.91;2.58)
              Karstadt         0.6607(0.0807) 1.92(0.06) 0.6593( 8.17;2.58)
              Linde            0.6668(0.0765) 1.84(0.09) 0.6718( 8.79;2.68)
              Lufthansa        1.0188(0.0716) 1.87(0.08) 1.0281(14.37;2.61)
              MAN              0.8007(0.0841) 2.00(0.04) 0.8007( 9.52;2.58)
              Mannesmann       1.1836(0.0787) 1.83(0.09) 1.1833(15.04;2.71)
              Metro            0.6424(0.0689) 1.76(0.11) 0.6449( 9.36;2.96)
              Münchener Rück 1.1333(0.0631) 1.95(0.06) 1.1331(17.97;2.58)
              Preussag         0.7160(0.0782) 1.90(0.07) 0.7175( 9.17;2.58)
              RWE              0.6574(0.0820) 1.70(0.12) 0.6280( 7.66;3.24)
              SAP              1.2553(0.0995) 1.77(0.11) 1.2618(12.68;2.91)
              Schering         0.5802(0.0561) 1.97(0.05) 0.5795(10.32;2.58)
              Siemens          0.8895(0.0727) 1.76(0.11) 0.8770(12.06;2.96)
              Thyssen          0.8082(0.0730) 1.73(0.11) 0.7830(10.72;3.09)
              VEBA             0.7447(0.0703) 1.92(0.06) 0.7473(10.63;2.58)
              VIAG             0.7898(0.0704) 1.87(0.08) 0.8003(11.36;2.61)
              Volkswagen       1.1874(0.0622) 2.00(0.04) 1.1874(19.08;2.58)
a
    Standard deviations are given in parentheses. b Monte-Carlo standard deviations are given in paren-
theses. c The first column in parenthesis is the t-statistic and the second is the corresponding critical
value.




186
                                                                         11.5   Summary

11.5     Summary

Based on the empirical evidence, we surveyed a possible stable CAPM with Sα S-distributed
returns in this paper. To estimate the β-coefficients in the stable CAPM, we applied
the BS etimator for a linear regression with disturbances following Sα S-distributions.
Empirical results show some differences between the estimators from the OLS and BS
estimations which result from the efficiency loss of the OLS estimator.




Bibliography

Blattberg, R. & Sargent, T. (1971). Regression with non-Gaussian stable disturbances:
     Some sampling results, Econometrica 39: 501–510.

Fama, E. (1970). Stable models in testable asset pricing, Journal of Political Economy
   78: 30–55.

Gamrowsky, B. & Rachev, S. (1994). Stable models in testable asset pricing, in G. Anas-
   tassiou & S. Rachev (eds), Approximation, Probability and Related Fields, Plenum
   Press, New York.

Hardin Jr, C., Samorodnitsky, G. & Taqqu, M. (1991). Non-linear regression of stable
    random variables, The Annals of Applied Probability 1: 582–612.

Heathcote, C., Rachev, S. & Cheng, B. (1991). Testing multivariate symmetry, Journal
    of Multivariate Analysis 54: 91–112.

Huschens, S. & Kim, J.-R. (1998). Measuring risk in value–at–risk in the presence
    of infinite–variance, Technical report, 25/98, Department of Statistics, Technical
    University of Dresden.

Huschens, S. & Kim, J.-R. (1999). BLUE for β in CAPM with infinite variance, Technical
    report, 26/99, Department of Statistics, Technical University of Dresden.

Kanter, M. (1972). Linear sample spaces and stable processes, Journal of Functional
    Analysis 9: 441–459.

Kim, J.-R. (1999a). A Generalization of Capital Market Theory — Modeling and Esti-
    mation of Empirically Motivated CAPM, in preparation.

Kim, J.-R. (1999b). Testing for bivariate symmetry: An empirical application, Mathe-
    matical and Computer Modelling 29: 197–201.

Lintner, J. (1965). The valuation of risk assets and the selection of risky investments in
     stock portfolios and capital budgets, Review of Economics and Statistics 47: 13–37.




                                                                                      187
11    A stable CAPM in the presence of heavy-tailed distributions

Logan, B., Mallows, C., Rice, S. & Shepp, L. (1973).         Limit distributions of self-
    normalized sums, Annals of Probability 1: 788–809.

Mandelbrot, B. (1963). The variation of certain speculative prices, Journal of Business
   26: 394–419.

McCulloch, J. (1997). Measuring tail thickness to estimate the stable index α: A critique,
   Journal of Business and Economic Statistics 15: 74–81.

Samorodnitsky, G. & Taqqu, M. (1994). Stable Non-Gaussian Random Processes, Chap-
   man & Hall, New York.

Sharpe, W. (1964). Capital asset prices: A theory of market equilibrium under conditions
    of risk, Journal of Finance 19: 425–442.

Zolotarev, V. (1986). One-dimensional Stable Distributions. Translations of Mathemat-
     ical Monographs Vol. 65, American Mathematical Society, Providence.




188
12 A Tailored Suit for Risk Management:
   Hyperbolic Model
                                        Jens Breckling, Ernst Eberlein and Philip Kokic




12.1     Introduction

In recent years the need to quantifying risk has become increasingly important to fi-
nancial institutions for a number of reasons: the necessity for more efficient controlling
due to globalisation and sharply increased trading volumes; management of new finan-
cial derivatives and structured products; and enforced legislation setting out the capital
requirements for trading activities.
As mentioned in Ridder (1998) “the idea of ‘Value at Risk’ (VaR) reflects the indus-
try’s efforts to develop new methods in financial risk management that take into account
available knowledge in financial engineering, mathematics and statistics”. Three stan-
dard methods are currently used to evaluate market risk: historical simulation, which in
principle is a bootstrap approach, the variance-covariance approach that is also called
‘delta normal method’, and Monte Carlo simulation. For an in-depth presentation of
these techniques the reader is referred to Jorion (1998) and Dowd (1998).
Risk, however, is multifaceted, and it has been shown elsewhere (e.g. Artzner, Delbaen,
Eber & Heath (1997)) that VaR alone can be deficient in certain regards. A natural
property a risk measure is expected to satisfy is subadditivity: the risk of a portfolio
should be smaller than the sum of risks associated with its subportfolios. This can also
be expressed as: it should not be possible to reduce the observed risk by dividing a given
portfolio into subportfolios. In this sense, VaR is not subadditive. For this reason other
definitions of risk can and should be used depending on the circumstances.
The entire stochastic uncertainty (risk) that is associated with a particular portfolio for
a set time horizon is encapsulated within its P&L distribution F (x) (Kokic, Breckling &
Eberlein (1999)). For any profit x the function F (x) gives the probability of obtaining
no greater profit than x over the time horizon. Thus the most desirable distribution
functions are those which increase most slowly and consequently are depicted below all
other curves that represent alternative portfolios.
By reading the appropriate quantile value, VaR can be obtained directly from the



                                                                                       189
12    A Tailored Suit for Risk Management: Hyperbolic Model

P&L function. While for certain operations of a financial institution VaR is a suit-
able measure of risk, for other operations risk may have to be defined differently. In
the classical capital asset pricing approach ( Huang & Litzenberger (1988), p. 98), for
example, risk is measured in terms of standard deviation (or volatility) of the portfolio.
The advantage of centering the analysis on the P&L distribution is that all risk measures
of interest are just specific functions of F (x).
A fully-fledged risk management system should therefore enable the user to define risk
his/her own way as a function of F (x). Moreover, rather than focusing on risk alone, it
may be warranted to relate it to chance. The most common measure of chance used in
financial analysis is the expected return from a portfolio over a given time frame, although
chance could also be defined as the median return, for example, which is a far more robust
measure than the mean. These, like any other meaningful measure of chance, can also
be expressed in terms of the P&L distribution function. In the context of portfolio
management it is equally important to look at the chance side as well as the risk side
of the return distribution. Changing a portfolio in order to alter its risk exposure will
typically affect the chances as well. How credit risk can be consistently incorporated
into this framework, is outlined in section 6, while section 7 presents an example to
demonstrate the merits of using the hyperbolic model to describe the P&L distribution.


12.2      Advantages of the Proposed Risk Management
          Approach

Aspects of a modern risk methodology can be summarized as follows: recognition of the
fact that risk assessment actually amounts to a forecasting problem; no assumption of a
symmetric P&L distribution, enabling an adequate account of fundamental and deriva-
tive securities within the same portfolio; consistent treatment of market and credit risk;
an explicit account of inter-market dependencies, allowing for conditional risk assessment
(e.g. what would happen to risk if the US dollar was to rise by 1 per cent); flexibility
to define appropriate summary statistics according to the task that is to be performed;
confidence bounds on the model that is being fitted and on all derived summary statis-
tics; an efficient assessment of the ‘goodness-of-fit’ of the underlying model; suggestion
of optimal hedge portfolios on the basis of an ‘on-the-fly’ specified hedge universe (this,
at the same time, defines a neat bridge to the area of portfolio management); decom-
position of time series into independent components such as an ordinary, a periodic and
an outlier component; and risk assessment in real time.
Current risk methodology hardly satisfies any of these properties. For example, most
often they concentrate on just a few statistics, such as VaR, and the extensive use of
Monte-Carlo methods prevents a risk assessment in real time. However, by explicitly
forecasting the entire P&L distribution potentially all of the problems above can be
solved in due course.




190
                                  12.3    Mathematical Definition of the P & L Distribution

In the following sections a powerful statistical technique for forecasting the P&L dis-
tribution is introduced. One of its advantages over more conventional methods is that
it no longer depends on symmetry assumptions. This makes it possible to embed all
derivatives such as futures, options, swaps etc. in the same framework and analyse them
simultaneously. By taking all statistical and functional relationships between markets
into account, different risk profiles compared with conventional approaches emerge, giv-
ing rise to a much more realistic risk assessment and more efficient hedging techniques.
In summary, the proposed approach to risk analysis allows one to meet risk limit require-
ments, to make informed transaction decisions for hedging purposes, and to perform
chance/risk optimisation using the preferred definitions of chance and risk. Position risk
can be decomposed into its risk element constituents, credit instruments can be natu-
rally embedded, and amongst all permissible transactions the best possible combination
that yields the greatest risk reduction can be determined.


12.3     Mathematical Definition of the P & L Distribution

Before these methods can be explained, some notation needs to be introduced. Here the
notation developed by Ridder (1998) is closely followed.
Let Vt be the market value of a portfolio at time t. Assume that the portfolio consists
of J financial instruments and let ωj , j = 1, . . . , J, be their corresponding weights, or
exposures, in the portfolio. In order to obtain a correct risk analysis of the portfolio in
its time t state, these weights are held constant throughout the analysis at their time t
values.
The stochastic behaviour of the portfolio is determined by the instrument prices Pjt , j =
1, . . . , J, which in turn depend on the stochastic behaviour of various underlying risk
factors Rt = (Rt1 , . . . , RtK )0 , where K > 0 is the number of risk factors covered by the
portfolio. For example, these factors could include the prices of underlyings, exchange
rates or interest rates amongst others. The instrument prices and hence the portfolio
value can be viewed as functions of these risk factors:

                                                 J
                                                 X
                                    Vt (Rt ) =         ωj Pjt (Rt ).
                                                 j=1


Initially it is assumed that the log-returns


             Xt = (X1t , . . . , XKt )0 = (ln(R1,t /R1,t−1 ), . . . , ln(RK,t /RK,t−1 ))0
of the risk factors are statistically independent and identically distributed, although it is
possible to weaken this condition. Essentially risk arises in the portfolio through adverse
movements of the risk factors over time. This results in a change in the value of the



                                                                                            191
12    A Tailored Suit for Risk Management: Hyperbolic Model

portfolio from one time point to the next as given by the one-period profit function:

                           πt (Rt , Xt+1 ) = Vt+1 (Rt+1 ) − Vt (Rt ).

It is also possible to consider different time horizons other than one, but for simplicity
of presentation this restriction has been made here.
The conditional distribution of πt , given all information up to and including time t, is
called the P&L-distribution:


                      Ft (x) = P (πt (Rt , Xt+1 ) ≤ x | Rt , Rt−1 , . . .).

The purpose of risk analysis is to measure the probability and extent of unfavourable
outcomes; in particular outcomes resulting in losses or negative values of πt . For example,
the ‘value at risk’ VaR(p) is the limit which is exceeded by πt (in the negative direction)
with given probability p: Ft (VaR t (p)) = p. In practice the computation of VaR(p) is
usually performed for p = 0.01 and repeated anew each time period.
The true distribution function Ft is usually unknown and needs to be estimated, i.e.
forecasted, in order to obtain an estimate of VaR. A very accurate method of estimation
is described in the following section.


12.4      Estimation of the P&L using the Hyperbolic Model

A class of distributions, that is tailor-made to capture the uncertainties associated with
a financial risk position as described above, are the generalized hyperbolic distributions.
It was Barndorff-Nielsen (1977) who introduced these distributions in connection with
the so-called ‘sand project’. Generalised hyperbolic distributions are defined by way of
their corresponding Lebesgue densities


                                                               (λ−0.5)/2
         dGH (x; λ, α, β, δ, µ) = a(λ, α, β, δ) δ 2 + (x − µ)2
                                                p                 
                                    × Kλ−0.5 α δ 2 + (x − µ)2 exp (β(x − µ))

where

                                                (α2 − β 2 )λ/2
                     a(λ, α, β, δ) = √                    p         
                                         2π αλ−0.5 δ λ Kλ δ α2 − β 2

is the integration constant and Kλ denotes the modified Bessel function of the third
kind and order λ. There are five parameters that determine the generalized hyperbolic
distributions: α > 0 determines the shape, β with 0 ≤ |β| < α the skewness and



192
                                          12.4       Estimation of the P&L using the Hyperbolic Model

µ ∈ < the location, δ > 0 is a scaling parameter, and finally λ ∈ < characterises certain
subclasses.
                                                        p
There are two alternative parameterisations: (i) ζ = δ α2 − β 2 and % = β/α, and (ii)
ξ = (1 + ζ)−0.5 and X = ξ%. The latter is scale- and location-invariant, which means
that the parameters do not change if a random variable X is replaced by aX + b.
Various special cases of the generalized hyperbolic distributions are of interest. For λ = 1
one gets the class of hyperbolic distributions with densities

                       p
                         α2 − β 2           p                         
        dH (x) =          p           exp −α δ 2 + (x− µ)2 + β (x− µ) .
                 2 α δ K1 δ α 2 − β 2

This is the class which was introduced in finance by Eberlein & Keller (1995) (see
also Eberlein, Keller & Prause (1998)). In the same context Barndorff-Nielsen (1997)
investigated the subclass of normal inverse Gaussian (NIG) distributions that results
when λ = − 21 . They can be characterised by the following density

                                  αδ     p                    K (αg (x − µ))
                                                                 1     δ
             dN IG (x) =             exp δ α2 − β 2 + β(x − µ)
                                  π                                gδ (x − µ)
                 √
where gδ (x) =       δ 2 + x2 .
There is a convenient way to derive the densities given above. Generalised hyperbolic
distributions are variance–mean mixtures of normal distributions usually denoted by
N (µ, σ 2 ). Let dGIG be the density of the generalized inverse Gaussian distribution with
parameters λ, X and ψ, i.e.

                                         λ/2                                
                                      ψ                1      λ−1       1 X
              dGIG (x) =                               √     x    exp −     + ψx
                                      X          2 Kλ ( X ψ)            2 x
for x > 0. Then it can be shown that

                                                 Z +∞
                             dGH (x) =                  dN (µ+βy,y) (x) dGIG (y) dy
                                                 0

where the parameters of dGIG are λ, X = δ 2 and ψ = α2 − β 2 .
Knowing the marginal distribution is already half the way to the specification of a dy-
namic model of the asset price process (Rt )t≥0 . Though this setting is more general,
Rt could be interpreted as one of the risk factors introduced in the last section. Using
the common diffusion type approach based on a Brownian motion as the driving pro-
cess would allow one to obtain a generalized hyperbolic distribution as the stationary
distribution of the process, and thus it would appear only in a vague and asymptotic
manner. It would be far more desirable, however, if the log-returns of the price process




                                                                                                 193
12    A Tailored Suit for Risk Management: Hyperbolic Model

(Rt )t≥0 followed this distribution exactly. How this goal can be achieved, is subsequently
explained.
Generalised hyperbolic distributions are known to be infinitely divisible ( Barndorff-
Nielsen & Halgreen (1977)). They thus generate a convolution semigroup of probability
measures (νt )t≥0 , which is completely determined by the element ν1 , the generalized hy-
perbolic distribution given by dGH . On the basis of this semigroup a stochastic process
(Xt )t≥0 can be constructed in a natural way, that has stationary independent incre-
ments Xt − Xs such that X0 = 0 and the distribution of Xt − Xt−1 for all t is the given
generalized hyperbolic distribution. This process (Xt ) will be called the generalized hy-
perbolic Lévy motion. Contrary to the path-continuous Brownian motion it is, excluding
the drift component, a purely discontinuous process which can be seen from a careful in-
spection of the Lévy-Khintchine representation of the Fourier transform of dGH . Hence,
the value level of this process is only changed by jumps, with an infinite number of small
jumps within any finite time interval. Finally, the asset price process (Rt )t≥0 can now
be defined as


                                    Rt = R0 exp(Xt ).

It follows that the sequence of log-returns log Rt /Rt−1 = log Rt − log Rt−1 corresponds
to the increments of the generalized hyperbolic Lévy motion (Xt )t≥0 . What are the
consequences for estimating the P&L distribution function? To simplify matters, con-
sider a portfolio consisting of just one instrument with a price process given by (Rt )t≥0 .
Further assume that the data set consists entirely of discrete observations, e.g. daily
closing prices R0 , R1 , R2 , . . . , Rn . By setting


                                  Xt = log Rt − log Rt−1
the log-returns X1 , . . . , Xn are derived, which are then used to fit the corresponding
empirical distribution function. The generalized hyperbolic parameters can be efficiently
estimated via maximum-likelihood, with the resulting generalized hyperbolic distribution
determining the return process (Xt )t≥0 . In case of K instruments in the portfolio one
could proceed in the same way by considering K-vectors Rt = (Rt1 , . . . , RtK )0 making
up the price process.
Also note that the price process above can be described by a stochastic differential
equation. Using Itô’s formula for processes containing jumps, it can easily be verified
that Rt , as given above, is obtained as the solution of the equation


                          dRt = Rt− (dXt + e∆Xt − 1 − ∆Xt ),
where ∆Xt = Xt − Xt− denotes the jump at time t.




194
                               12.5   How well does the Approach Conform with Reality

12.5     How well does the Approach Conform with Reality

Having fitted a distribution, back testing can be used to assess how well the model
predicts historical information, when the true outcomes of profit and loss are known
exactly. In the ‘6. KWG-Novelle, Grundsatz 1’ requirements a fairly restrictive form
of back testing is proposed, where values greater than VaR(p = 0.01) predicted by the
model must not be exceeded more than a predefined number of times over a one-year
time period. However, for a portfolio manager to base his decisions on (distributional)
forecasts, the model must perform well under far more general definitions of back testing.
It is of significant importance that the model predicts profitable outcomes accurately
as well as the non-profitable outcomes that are specifically addressed by the official
requirements.
For most models currently implemented it is impossible to perform an anywhere near
efficient back testing, because most often only a single quantile is being forecasted rather
than the entire distribution, and if distributions are forecasted, then restrictive and
unwarranted assumptions are made about its shape. Furthermore, when the predicted
value differs from the outcome, for example, it is unclear how significant that difference
actually is.
An advantage of forecasting the entire distribution is that one can correctly compare the
forecast with the outcome using standard statistical tests, such as the following. Over
a given time frame where real outcomes are known let πt denote the actual outcome
of profit/loss at time t + 1, and let pbt = Fbt (πt ) be the percentile corresponding to
this value on the basis of the forecasted P&L distribution Fbt . If the model is correct,
then the pbt values should be uniformly distributed on the unit interval [0, 1]. Various
powerful techniques exist for testing whether a sample is uniformly distributed. In fact,
the ‘6. KWG-Novelle, Grundsatz 1’ requirements correspond to assessing whether the
proportion of pbt values below 0.01 is close to 1 per cent, which is clearly much weaker
than testing the whole pbt distribution.


12.6     Extension to Credit Risk

The inclusion of credit risk in a risk management system has become an increasingly im-
portant issue for financial institutions in recent time. However, because of the relatively
rare nature of loan defaults, the associated P&L distributions are highly skewed. For
this reason the framework of non-normal modelling presented above is highly relevant
to the situation of modelling credit risk. In fact it can be shown that the hyperbolic
model is highly suited to this situation as its shape readily adapts to highly skewed and
heavy-tailed distributions.
In the approach presented above it is assumed that for each instrument, j, there exists
a (complete) price series (Pjt )t=0,1,... without missing values. For market risk this is




                                                                                        195
12    A Tailored Suit for Risk Management: Hyperbolic Model

largely true, and where holes in the data do occur it is possible to fill in the missing gaps
using reliable pricing formulae, or by imputation methodology. On the other hand, for
credit risk this is generally not the case. Typically the (market) price of a loan is known
at the time it is issued, but thereafter it is not and a price must be imputed by some
means. Regarding a loan as a defaultable bond, this can be done using the yield-to-price
relationship:

                                        X       cj (τjk )
                                Pjt =                          ,
                                            (1 + γj (τjk ))τjk
                                        k

where cj (τjk ) denotes the cash flow for loan j at forward time τjk and γj (τ ) the interest
rate of a zero-coupon version of loan j maturing at time τ . The function γj can be
regarded as a risk factor. The fair price of the loan at the time the loan is taken out is
the net present value of a risk-free investment of the same amount, plus a premium to
compensate for the probability of default during the loan period, plus a risk premium
as reflected in the chance/risk diagram commonly used in portfolio theory.
Typically the yield curve for a loan is not known, which makes continuous pricing diffi-
cult. The way that is often employed is that borrowers are categorised by some means
and the yield curve for each category is determined on the basis of the yield curve for
risk-free investments, on default and recovery rates in the case of default as well as on
an (excess chance) amount for the extra risk, and on an assumed stochastic structure
for the transition of a loan from one category to another.
To determine a credit portfolio’s P&L distribution there are at least two approaches that
may be used: the simulation approach and the imputation approach. For a number of
fundamental reasons it turns out that the imputation approach is superior to the simu-
lation approach, see Kokic et al. (1999) for details. In particular, using the imputation
approach it is possible to determine the P&L distribution of a portfolio made up of a
mixture of both credit and market instruments.


12.7      Application

As an illustration of the techniques described in this paper a comparison is made between
the variance/covariance and historical simulation models, which are commonly used in
most commercially available risk management software, and the hyperbolic model; in
particular the NIG model which results when λ = −0.5.
In this example a portfolio will be analysed that has price behaviour identical to the
German DAX index. Since the DAX is a weighted average of 30 liquid share prices, the
variance/covariance model might be suspected to work well.
However, if one computes the log-returns of the DAX and fits the various distributions
to the data, it can readily be seen that there is significant departure from normality,




196
                                                                         12.7   Application


Figure 12.1: Estimated density functions for the log-returns of daily DAX data between
             09.05.1996 and 25.03.1999 (i.e. 750 observations)




which is implicitly assumed when using the variance-covariance model. Figure 1 shows
three distributions fitted to the log-returns of daily DAX data between 09.05.1996 and
25.03.1999 (i.e. 750 observations in total). In this Figure the empirical distribution
is obtained using a kernel smoother with a fixed bandwidth equal to one fifth of the
inter-quartile range. Both, the normal and NIG distribution are fitted by maximum
likelihood methods.
For small values the NIG distribution yields a considerably better fit. In particular, it is
able to readily adapt to the left skewness of the data, whereas the normal distribution
is not. This feature especially is likely to be crucial for an accurate computation of
VaR and other ‘downside’ risk measures. The NIG distribution also fits markedly better
towards the centre of the data. That is, there is a much larger proportion of small value
changes than suggested by the normal distribution.


As a consequence one would expect the back test performance of the hyperbolic model
to be better than for the variance/covariance model. To examine this issue in more
detail, back testing according to the methodology outlined in section 5 was performed.
To be more specific, for any time point t in the back test period, a P&L distribution was
estimated from the preceding 750 days of data and, based on the outcome at time t, a pbt
value was computed. This process was repeated for each time point t between 16.11.1994
and 25.03.1999, a total of 1134 evaluations.




                                                                                        197
12    A Tailored Suit for Risk Management: Hyperbolic Model


Figure 12.2: Back test density estimates based on daily DAX data performed from
             16.11.1994 to 25.03.1999 (i.e. 1134 evaluations)




Three models were tested: the variance/covariance model; the historical simulation
model; and finally a ‘stabilized’ form of the hyperbolic model based on the NIG dis-
tribution referred to above. The result of the back testing leads to three pbt time series,
corresponding to the models fitted. According to the criteria developed in section 5, the
model that yields the most uniformly distributed pb values best captures the real market
behaviour.
To get an impression of how uniformly distributed the pb values are, kernel smoothed
densities for each of the three models are presented in Figure 2. The poorest result is
obtained for the variance/covariance model, with the corresponding density showing a
systematic departure from uniformity across the entire range of p values. As indicated
above, a much greater frequency of occurrences can be observed in both tails and in the
centre of the P&L distribution than predicted by the variance/covariance model. This
poor performance suggests that the use of this model would almost certainly result in
severe underestimation of risk.


There appears to be some improvement in the fit with the historical simulation model.
In particular, the under-estimation of central events in the P&L distribution that was
observed for the variance/covariance model has largely disappeared. However, the fit in
the tails is still poor. Although the reason does not seem obvious, most of this deficiency
can be attributed to fluctuations in the volatility of the DAX time series. The stabilized




198
                                                                            12.7   Application


Table 12.1: Goodness-of-fit test statistics / probability values for the various models using
            daily DAX data. Back testing performed from 16.11.94 to 25.03.1999 (i.e.
            1134 evaluations)
 Test              Variance–          Historical       Stabilized
                   covariance         simulation       hyperbolic
 Conventional         0.034/0.000       0.025/0.000     0.010/0.844
 X2                     202/0.000         199/0.000        82/0.899
 Kolmogorov           0.046/0.018       0.058/0.001     0.016/0.792
 Serial corr.           145/0.002         174/0.000        73/0.978


hyperbolic model is able to take these fluctuations into account and hence captures the
distribution of extreme events accurately. As illustrated in Figure 2, this model yields a
superb fit over the entire range of p values.
This is also evident from the results of the four different tests for goodness-of-fit of the
various models presented in Table 1. The two values presented are the value of the test
statistic itself and the probability value of the test, with small probability values, e.g. less
than 0.05, indicating that the model is not forecasting the P&L distribution well. Each
test examines a different aspect of the goodness-of-fit of the model. The conventional
test is equivalent to testing whether or not the frequency of pbt values less than 0.01 is
close to 1 per cent, and thus is similar to the test proposed in the ‘6. KWG-Novelle,
Grundsatz 1’ requirements. By contrast, both the X 2 and Kolmogorov tests assess the
‘uniformity’ of the distribution of pbt values. That is, the entire range of pbt values from
zero to one, and not just the pb values less than 0.01 are examined. The fourth test,
finally, is to check for existence of residual autocorrelation in the time series of p values,
which would also be evidence of poor model fit.
The results in Table 1.1 confirm the conclusions drawn from Figure 2: there is evidence
that the historic simulation yields a better fit than the variance/covariance model. How-
ever, comparing these models with the stabilized hyperbolic model, the latter describes
the actual data far better and thus provides a much better assessment of the frequency
and the severity of ‘bad’ events. In this case all tests are passed comfortably.




Bibliography

Artzner, P., Delbaen, F., Eber, J.-M. & Heath, D. (1997). Thinking coherently, RISK
    10(11): 68–71.

Barndorff-Nielsen, O. (1977). Exponentially decreasing distributions for the logarithm
    of particle size, Proceedings of the Royal Society London A (353): 401–419.




                                                                                            199
12    A Tailored Suit for Risk Management: Hyperbolic Model

Barndorff-Nielsen, O. (1997). Processes of normal inverse gaussian type, Finance &
    Stochastics (2): 41–68.

Barndorff-Nielsen, O. & Halgreen, O. (1977). Infinite divisibility of the hyperbolic and
    generalized inverse gaussian distributions, Zeitschrift für Wahrscheinlichkeitstheorie
    und verwandte Gebiete (38): 309–312.

Dowd, K. (1998). Beyond Value At Risk: The New Science of Risk Management, Wi-
   ley&Son.

Eberlein, E. & Keller, U. (1995). Hyperbolic distributions in finance, Bernoulli 1: 281–
    299.

Eberlein, E., Keller, U. & Prause, K. (1998). New insights into smile, mispricing and
    value at risk: the hyperbolic model, Journal of Business (71): 371–405.

Huang, C. & Litzenberger, R. (1988). Foundations for financial economics, North-
    Holland, New York.

Jorion, P. (1998). Value at Risk: The New Benchmark for Controlling Derivatives Risk,
     McGraw-Hill.

Kokic, P., Breckling, J. & Eberlein, E. (1999). A new framework for the evaluation of
    market and credit risk. In press.

Ridder, T. (1998). Basics of statistical var-estimation, in G. Bol, G. Nakhaeizadeh &
    K. Vollmer (eds), Risk measurement, econometrics and neural networks, Physica-
    Verlag, Heidelberg, New York.




200
13 Computational Resources for Extremes
                                                     Torsten Kleinow and Michael Thomas




13.1      Introduction

In extreme value analysis one is interested in parametric models for the distribution of
maxima and exceedances. Suitable models are obtained by using limiting distributions.
In the following lines, we cite some basic results from extreme value theory. The reader
is referred to (Embrechts, Klüppelberg & Mikosch 1997) and (Resnick 1987) for a the-
oretical and to (Reiss & Thomas 1997) for an applied introduction. A more detailed
review is given in (McNeil 1997).
A classical result for the distribution of maxima was given by Fisher & Tippett (1928).
Assume that X, X1 , X2 , . . . are i.i.d. with common distribution function F . If for suitable
constants an and bn the standardized distribution of the maximum
                                                      
                         max{X1 , . . . , Xn } − bn
                     P                              ≤ x = F n (an x + bn )
                                      an
converges to a continuous limiting distribution function G, then G is equal to one of the
following types of extreme value (EV) distribution functions.

 (i)     Gumbel (EV0)     G0 (x) = exp(−e−x ),           x ∈ R,
 (ii)    Fréchet (EV1)   G1,α (x) = exp(−x−α ),         x ≥ 0, α > 0,
 (iii)   Weibull (EV2)    G2,α (x) = exp(−(−x)−α ),      x ≤ 0, α < 0.

By employing the reparametrization γ = 1/α, these models can be unified using the von
Mises parametrization

                                 exp(−(1 + γx)−1/γ ), 1 + γx > 0, γ 6= 0,
                             
                  Gγ (x) =
                                 exp(−e−x ),          x ∈ R, γ = 0.

One says that the distribution function F belongs to the domain of attraction of the
extreme value distribution G, in short F ∈ D(G). The Gnedenko-De Haan theorem as
well as the von Mises conditions provide sufficient conditions for F ∈ D(G) (see, e.g.,
(Falk, Hüsler & Reiss 1994) for details). Moreover, the assumption of independence can
be weakened (see, e.g., (Leadbetter & Nandagopalan 1989)).



                                                                                           201
13      Computational Resources for Extremes

One may also consider the distribution function F [t] := P (X < ·|X > t) of exceedances
above a threshold t, where F lies in the domain of attraction of the extreme value
distribution Gγ . Balkema & de Haan (1974) as well as Pickands (1975) showed that for
suitable au and bu the truncated distribution F [u] (bu + au x) converges to a generalized
Pareto (GP) distribution Wγ as u → ω(F ) := sup{x : F (x) < 1}, with

                               1 − (1 + γx)−1/γ
                              
                                                   x > 0, γ > 0
                   Wγ (x) =                        0 < x < −1/γ, γ < 0
                                  1 − e−x          x ≥ 0, γ = 0.
                              


Again, by using the parametrization α = 1/γ, one obtains the three submodels

 (i)      Exponential (GP0)    W0 (x) = 1 − e−x ,        x ≥ 0,
 (ii)     Pareto (GP1)         W1,α (x) = 1 − x−α ,      x ≥ 1, α > 0,
 (iii     Beta (GP2)           W2,α (x) = 1 − (−x)−α ,   −1 ≤ x ≤ 0, α < 0.

These limit theorems suggest parametric distributions for data which are block maxima
or exceedances above a threshold t. In the next section, we describe a computational
approach for fitting these distributions to data.


13.2        Computational Resources

A similar extreme value module is implemented in the two software packages XploRe
and Xtremes. We give a short introduction to the systems and provide an overview of
the extreme value methods that are implemented.


13.2.1      XploRe

XploRe is an interactive statistical computing environment. It provides an integrated
programming language with a large library of predefined functions and interactive tools
for graphical analysis. A program written in the XploRe language is called quantlet.
These quantlets are collected in libraries. The interactive tools include displays, with
one or more plots, and low level GUI elements for user interaction during quantlet
execution. To use XploRe without writing quantlets, it is possible to execute simple
instructions on the command line, such as reading data, loading libraries or applying
quantlets from a library to data.
There are two fundamental versions of XploRe. The first is a standalone statistical soft-
ware available on several computer platforms, while the second one is a client/server
system ( www.xplore-stat.de). As described in section 13.3.1, the client/server ar-
chitecture has many advantages. However, due to the early state of development, the
XploRe client does not yet provide the same functionality as the standalone application.



202
                                                          13.2   Computational Resources

13.2.2    Xtremes

The MS-Windows based statistical software Xtremes offers a menu-driven environment
for data analysis. Besides the usual visualization options, there are parametric estimation
procedures for Gaussian, extreme value and generalized Pareto distributions. Special
menus offer applications of extreme value analysis to problems arising in actuarial and
financial mathematics as well as hydrology. See www.xtremes.de for more informations.


13.2.3    Extreme Value Analysis with XploRe and Xtremes

Estimators for GP and EV

Various estimators for extreme value and generalized Pareto distributions are imple-
mented. We list the estimators available for GP distributions:

   • Hill estimator, which is a m.l. estimator for the Pareto (GP1) submodel, hillgp1
   • m.l. estimator for the full GP model, mlegp
   • Pickands estimator (see (Pickands 1975)), pickandsgp
   • Drees-Pickands estimator, which uses a convex combination of Pickands estimators
     (see (Drees 1995)), dpgp
   • moment estimator (see (Dekkers, Einmahl & de Haan 1989)). momentgp

Two estimators for the EV distributions are provided:

   • M.l. estimator for the full EV model, mleev
   • linear combination of ratio of spacings estimator, a construction similar to that of
     the Pickands estimator. lrseev

More details on the estimators are given in the cited literature as well as in Reiss &
Thomas (1997) and Reiss & Thomas (1999). While the fitting of an extreme value
distribution is straight forward, a generalized Pareto distribution is fitted in two steps.

  1. Select a threshold t and fit a GP distribution Wγ,t,σ to the exceedances above t,
     where γ is the shape parameter and t and σ are location and scale parameter.
  2. Transform the distribution to Wγ̂,µ̂,σ̂ which fits to the tail of the original data. The
                                                             [t]                     [t]
     transformation is determined by the conditions Wγ̂,µ̂,σ̂ = Wγ,t,σ and Wγ̂,µ̂,σ̂ (t) =
     (n − k)/n, where n is the sample size and k the number of exceedances above t.
     One obtains γ̂ = γ, σ̂ = σ(k/n)γ and µ̂ = t − (σ − σ̂)/γ as estimates of the tail fit.
     The latter values are displayed by the software.



                                                                                         203
13    Computational Resources for Extremes

In our implementation, we fix the number of upper extremes and use the threshold
t = xn−k+1:n .


Choosing a Threshold

The selection of an optimal threshold is still an unsolved problem. We employ a visual
approach that plots the estimated shape parameter against the number of extremes.
Within such a plot, one often recognizes a range where the estimates are stable. A
typical diagram of estimates is shown in section 13.2.3.


Checking the Quality of a Fit

A basic idea of our implementation is to provide the ability to check a parametric mod-
eling by means of nonparametric procedures. The software supports QQ-plots and a
comparison of parametric and empiric versions of densities, distribution and quantile
functions. An important tool for assessing the adequacy of a GP fitting is the mean
excess function. It is given by
                                eF (t) := E(X − t|X > t),
where X is a random variable with distribution function F . For a generalized Pareto
distribution Wγ , the mean excess function is
                                                1 + γt
                                    eWγ (t) =          .
                                                1−γ

We can therefore check if a GP tail is plausible by means of the sample mean excess
function. Moreover, by comparing sample and parametric mean excess functions fitted
by an estimator, a visual check of an estimation and a choice between different estimators
becomes possible. The following section 13.2.3 demonstrates this approach.


Example Analysis of a Data Set

To exemplify the computational approach, we analyze a data set with the daily (negative)
returns of the Yen related to the U.S. Dollar from Dec. 78 to Jan. 91. Figure 13.1 (left)
shows a scatterplot of the 4444 returns. A fat tail of the distribution is clearly visible.
In the following, we fit a generalized Pareto distribution to the tail of the returns by
using the moment estimator. To find a suitable threshold, a diagram of the estimates is
plotted in Figure 13.1 (right). For 50 ≤ k ≤ 200 the estimates are quite stable.
We select k = 160 extremes, yielding a threshold t = 0.00966 and plot a kernel density
estimate (solid) as well as the parametric density fitted by the moment estimator (dotted)
and the Hill estimator (dashed) for that number of extremes. The resulting picture is
shown in Figure 13.2 (left).



204
                                                          13.3   Client/Server Architectures




                                                0.2
0.02


   0                                             0


-0.02
                                               -0.2

            1000             3000                     0    100    200    300    400    500


Figure 13.1: Daily returns of Yen/U.S. Dollar from Dec. 1978 to Jan. 1991 (left) and diagram
             of estimated shape parameters (right).


Although the parameters estimated by the moment estimator seem to fit the kernel
density slightly better, it is not easy to justify a parametric model from the plot of the
densities. We therefore also plot the mean excess functions. The right hand picture
in Figure 13.2 shows the empirical mean excess function and the parametric versions,
based on the same estimates. While the one fitted by the moment estimator (dotted) is
close to the empiric version (solid), the one fitted by the Hill estimator (dashed) shows a
strong deviation. This indicates that the parameters obtained by the moment estimator
may be more appropriate.


13.2.4    Differences between XploRe and Xtremes

The XploRe system provides the user with an immediate language. Typical features of
such a language (according to Huber (1994)) are the omission of declarations and the
ability to implement macros using the same constructs as in an immediate analysis.
Xtremes implements a menu interface for interactions and a compiled language for user
written routines, whereby the user is required to declare all objects used within a pro-
gram. That approach results in longer and more complex programs which are typically
less flexible than interpreted ones with runtime type checking. However, a higher execu-
tion speed can be achieved as syntactic and semantic checks are performed at compile
time.


13.3     Client/Server Architectures

Client/server architectures are becoming increasingly important in statistical computing.
We discuss two of their advantages which are employed in XploRe and Xtremes: the



                                                                                        205
13       Computational Resources for Extremes


  15

                                                     0.008

  10

                                                     0.006

     5

                                                     0.004

     0
           0.01              0.02             0.03           0.01    0.02             0.03


Figure 13.2: Densities (left) and mean excess functions (right) fitted by moment estimator
                  (dotted) and Hill estimator (dashed).


separation of computational part and user interface and the provision of servers for
special, user-written clients.


13.3.1       Client/Server Architecture of XploRe

The client/server version of the XploRe software package consists of three parts. The
XploRe server is a batch program which provides several methods for statistical comput-
ing. The client is a GUI written in Java providing an interface for the user to interact
with the server. Between these two resides a middleware program which manages the
communication between client and server. Figure 13.3 shows the structure of this archi-
tecture.


Details of the Architecture

The main task of the XploRe server is to provide a statistical programming language
and a variety of numerical methods for statistical analysis. To ensure high flexibility, it
is possible to add methods (shared libraries, dynamically linked libraries) to the server
dynamically. The xtremes library uses this mechanism. The server executes quantlets
(programs written in the XploRe language) and writes the output to the standard output
stream. Graphical output is encoded in a special protocol which is interpreted by the
client.
The client provides the user with a GUI that lets him write and execute programs on
a server, show numerical results and display the graphical output of an analysis. The
platform independent client runs on every machine where a Java runtime environment
is available. The server is written in C and C++, providing the numerical power needed
for fast statistical computations.



206
                                                                 13.3   Client/Server Architectures


              Client 1               Client 2                Client 3

               TCP/IP




                                       TCP/IP
                                                    /   IP
                                                TCP

                            Middleware                       TCP/IP        Middle-
                                                                            ware
                         I/O




                                        I/O




                                                                             I/O
                 Server 1             Server 2                              Server 3



                        Figure 13.3: The Client/Server architecture of XploRe



The central part of this software package is the middleware. It is written in Java and
resides on the same host as the server does. Its most important task is the management
of the communication between server and client.


Advantages of the Architecture

One of the main advantages of the client/server architecture that is implemented within
XploRe is the separation of the computational part and the user interface. It enables
the user to use one or more servers without requiring high computational power on the
host where the client is running. Instead, he has remote access to statistical methods as
well as to computational resources.
In earlier versions of XploRe, the client/server communication has been managed by the
server itself. The advantage of the separation of the managing part and the calculation
part is a higher stability of the system as well as the opportunity to use different servers
with one middleware. These servers could be Gauss, shazam or any other batch program.


Plans for Future Developments

In the future, the middleware should act as a distribution server; i.e., when an old client
logs into the middleware, the user is offered an automatic update of the client. The old
client downloads a new version from the middleware and installs it on the client host
without user interaction. Another task of the middleware will be load average. This



                                                                                               207
13    Computational Resources for Extremes

means when a middleware is contacted by a client it asks other middleware programs
for the load of the hosts where they are running. The requests will then be sent to the
host with the smallest load.
Due to the separation of the user interface and the computational part, different clients
can be developed. In addition to the usual Java client, a prototype of an MS-Excel
add-on exists. Besides clients for special environments (Java/Web, Excel), one could
also think of clients for special purposes like finance or time series analysis. A Java-API
(Application Program Interface) for the development of clients will be made available in
future releases.


13.3.2    Xtremes CORBA Server

CORBA (see (OMG 1995) or www.omg.org) is a platform and programming language
independent standard for distributed, object oriented software systems. It encapsulates
all network specific operations. Invoking methods on a remote server object is done by
calling methods of a local proxy object. An interface definition language (IDL) describes
the methods offered by the server objects.
Xtremes implements a CORBA-compliant server which exports statistical procedures
(such as estimators or data generation routines). We list an excerpt of the interface
definition.

enum TPortType { PORT_INT, PORT_REAL, ... };
typedef sequence<double> doubleseq;

interface TNode {
    string Name ();
    TNode Clone ();

      long GetNumberOfInports ();
      TPortType GetInportType (in long Nr);
      long GetNumberOfOutports ();
      TPortType GetOutportType (in long Nr);

      void SetInport (in long Nr, in any x);
      void Perform ();
      any GetOutport (in long Nr);
};

The server objects (called nodes) are self-describing. Besides a name, they return
the number and types of parameters and results. After setting the parameters with
SetInport, the Perform method is invoked, and results are fetched by calling GetOutport.




208
                                                                        13.4   Conclusion

The homogeneous structure of the objects facilitates their creation by means of a factory
(Gamma, Helm, Johnson & Vlissides 1995). On startup, the Xtremes server creates a
factory object and publishes its object reference.


13.4     Conclusion

We have described two software systems that offer statistical methods for extreme value
analysis in a distributed environment. Both systems allow the user to invoke statistical
operations from a remote client; yet, different approaches are taken. Future effort should
be invested in the specification of a general interface allowing the interoperation of
different statistical software packages.




Bibliography

Balkema, A. & de Haan, L. (1974), ‘Residual life time at great age.’, Ann. Probab.
    2, 792–804.

Dekkers, A., Einmahl, J. & de Haan, L. (1989), ‘A moment estimator for the index of
    an extreme-value distribution’, Ann. Stat. 17, 1833–1855.

Drees, H. (1995), ‘Refined pickands estimators of the extreme value index’, Ann. Stat.
    23, 2059–2080.

Embrechts, P., Klüppelberg, C. & Mikosch, T. (1997), Modelling Extremal Events,
   Springer.

Falk, M., Hüsler, J. & Reiss, R.-D. (1994), Laws of Small Numbers: Extremes and Rare
     Events, DMV-Seminar, Birkhäuser, Basel.

Fisher, R. & Tippett, L. (1928), ‘Limiting forms of the frequency distribution of the
     largest and smallest member of a sample’, Proc. Camb. Phil. Soc. 24, 180–190.

Gamma, E., Helm, R., Johnson, R. & Vlissides, J. (1995), Design Patterns, Addison-
   Wesley, Reading, Massachusetts.

OMG (1995), The common object request broker: Architecture and specification, Tech-
   nical report, Object Management Group.

Huber, P. (1994), Languages for statistics and data analysis, in P. Dirschedl & R. Os-
    termann, eds, ‘Computational Statistics’, Physica, Heidelberg.

Leadbetter, M. & Nandagopalan, S. (1989), On exceedance point processes for station-
    ary sequences under mild oscillation restrictions, in J. Hüsler & R.-D. Reiss, eds,



                                                                                      209
13    Computational Resources for Extremes

      ‘Extreme Value Theory’, number 51 in ‘Lect. Notes in Statistics’, Springer, New
      York.

McNeil, A. (1997), ‘Estimating the tails of loss severity distributions using extreme value
   theory’, ASTIN Bulletin 27, 117–137.

Pickands, J. (1975), ‘Statistical inference using extreme order statistics’, Ann. Stat.
     3, 119–131.

Reiss, R.-D. & Thomas, M. (1997), Statistical Analysis of Extreme Values, Birkhäuser,
     Basel.

Reiss, R.-D. & Thomas, M. (1999), Extreme value analysis, in ‘XploRe -The Statistical
     Environment’, Springer, New York.

Resnick, S. (1987), Extreme Values, Regular Variation, and Point Processes, Springer,
    New York.




210
14 Confidence intervals for a tail index
   estimator
                                                                           Sergei Y. Novak




14.1     Confidence intervals for a tail index estimator

Financial data (log-returns of exchange rates, stock indices, share prices) are often mod-
eled by heavy–tailed distributions, i.e., distributions which admit the representation
                          P(X > x) = L(x)x−1/a              (a > 0) ,               (14.1)
where the function L slowly varies: lim L(xt)/L(x) = 1 (∀t > 0) . The number 1/a is
                                      x→∞
called the tail index of the distribution (14.1). The problem of estimating the tail index
has also important applications in insurance, network modelling, meteorology, etc.; it
attracted significant interest of investigators (see Csörgö & Viharos (1998), Embrechts,
Klüppelberg & Mikosch (1997), Novak (1996), Resnick (1997) and references therein).
The popular estimator
                                               kn
                                               X
                                         −1
                                                                      
                         n ≡ an (kn ) = kn
                        aH                           ln X(i) /X(kn +1) ,            (14.2)
                              H

                                               i=1

where X(n) ≤ ... ≤ X(1) are the order statistics, was introduced by Hill (1975). A
number of other estimators can be found in Csörgö & Viharos (1998), de Haan & Peng
(1998), Resnick (1997).
Goldie and Smith (1987) introduced the ratio estimator
                                           n
                                           X         n
                                                    .X
                         an ≡ an (xn ) =       Yi        1{Xi > xn } ,              (14.3)

where Yi = ln(Xi /xn )1{Xi > xn } , numbers {xn } are to be chosen by a statistician.
Note that Hill’s estimator (14.2) is a particular case of the ratio estimator (14.3): aH
                                                                                       n =
an when xn = X(kn +1) .
Let X, X1 , X2 . . . be a sequence of independent observations over the distribution of a
random variable X . Denote
                pn = P(X > xn ) , v1 ≡ v1 (xn ) = E {Y |X > xn }/a − 1 ,



                                                                                      211
14    Confidence intervals for a tail index estimator

and assume that
                              xn → ∞ , npn → ∞          (n → ∞) .                           (14.4)
Sufficient conditions for the asymptotic normality of the ratio estimator have been found
by Goldie and Smith (1987). Novak and Utev (1990) and Novak (1992) have proved the
following result.
Theorem A. The estimator an is consistent: an −→
                                               p   a . The convergence
                          √
                            npn (an − a) ⇒ N (0; a2 )                                       (14.5)

holds if and only if npn v12 → 0 as n → ∞ .
Of definite interest is the accuracy of normal approximation for an and the asymptotics
of the mean squared error E (an /a−1)2 . The following assertion is established in Novak
(1996).
Theorem B. For all large enough n,
                                                          √      
                       √        a                            v1 npn
             sup P       npn        − 1 < y − Phi y +                    ≤ κn ,
               y                an                            1 + v1
             E (an /a − 1) = v1 + O (np−2
                                              
                                           n ) ,
                                                                     1 + o(1)
             npn E (an /a − 1)2 = 1 + 2(v2 − v1 ) − v12 + v12 npn +           , (14.6)
                                                                       npn
                                      q
where κn = √80      36
                          |v  −      |  2                      −2      2
            npn  + npn +    2   3v 1    π and v2 ≡ v2 (n) = a E {Y |X > xn }/2 − 1 .

A comparison between Hill’s and few similar estimators is given in de Haan & Peng
(1998). A comparison between the Hill and the ratio estimators in Novak & Utev
(1990) indicates that the latter seems to have an advantage. For the ratio estimator
we know a necessary and sufficient condition of asymptotic normality (see Theorem
A). The asymptotics of the mean squared error (in the general situation (14.1)) and a
Berry–Esseen–type inequality seem to be known only for the ratio estimator.
The important question is how to choose the threshold xn . The theoretically optimal
            opt
threshold xn is the value xn that minimises v12 + 1/npn — the main term of E (an −
                               opt
a)2 . Explicit expression for xn   can be drawn under additional restrictions on the
distribution (14.1).
One of important subclasses is the family
                       n                                        o
             Pa,b,c,d = P : P(X > x) = cx−1/a 1 + dx−b (1 + o(1))   .
                                                                                                               a
                                                                                                 2            1+2ab
                                                                    opt
                                                        −b
                                                                                    
If P ∈ Pa,b,c,d then, using (14.7), we get v1 (x) ∼ −bdx
                                                    a−1 +b
                                                           . Hence xn =       2ab         bd
                                                                                        a−1 +b
                                                                                                      cn               .

                        opt
Adaptive versions of xn may be constructed by replacing a, b, c, d with their consistent
estimators â, b̂, ĉ, dˆ such that |â − a| + |b̂ − b| = op (1/ ln n) .



212
                                                                                                                  14.1   Confidence intervals for a tail index estimator

Another approach is to plot an (·) and then take the estimate from an interval where
the function an (·) demonstrates stability. The background for this approach is provided
by our consistency result. Indeed, if {xn } obeys (14.4) then so does {txn } for every
t > 0 . Hence there must be an interval of threshold levels [x− ; x+ ] such that an ≈ a
for all x ∈ [x− ; x+ ] .
We simulated 1000 i.i.d. observations from the Cauchy K(0; 1) distribution:


                                                                      Cauchy K(0,1) , n = 1000 .                                                                                                                Cauchy K(0,1) , n = 1000 .
                      •                                                                                                                                    •
         8




                                                                                                                                              8
                      •                                                                                                                                    •
                      •                                                                                                                                    •
                      •                                                                                                                                    •
              6




                                                                                                                                                   6
RATIO ESTIMATOR




                                                                                                                                     RATIO ESTIMATOR
                      •                                                                                                                                    •
                      •                                                                                                                                    •
                      •                                                                                                                                    •

                      •                                                                                                                                    •
                      ••                                                                                                                                   ••
                       •                                                                                                                                    •
      4




                                                                                                                                           4
                       •••                                                                                                                                  •••
                         •••                                                                                                                                  •••
                           •••                                                                                                                                  •••
                             •••                                                                                                                                  •••
                               ••                                                                                                                                   ••
                                •••                                                                                                                                  •••
                                  •••                                                                                                                                  •••
                                    •••                                                    ••                                                                            •••                                                                                                                                       •
         2




                                                                                                                                              2
                                      •••                                                                                       •                                          •••                                                                                                                                 •
                                        •••                                         • • ••                                •                                                                                                                                                     •            ••   •   •
                                          ••• •••                         •••••• ••• •
                                                                           •
                                                                                                                    •
                                                                                                                    •
                                                                                                                                                                             •••
                                                                                                                                                                               •••                                                                              • • •• •   • ••
                                            ••••••••••••••••• •••••••••••••                                                                                                      •••••••••••••••••••••••••••••••••••••••••••••••••• •••• •••• • ••••• ••• ••••••                                                       •
         0




                                                                                                                                              0




                      0                                20                              40         60      80       100    120                              0                                             10                                           20                                30                40
                                                                                                                                                                                                                                                                                              




                                                                                                THRESHOLD                                                                                                                                           THRESHOLD




The first picture says that the ratio estimator an (x) behaves rather stable in the interval
x ∈ [0.5; 17] . The second picture is even more convincing.
                                                                                                                                    opt
Observe that K(0; 1) ∈ P1,1/2,1/π,−1/3 . Therefore, xn                                                                                           = (16n/81π)1/5 ≈ 2.29 .
Note that |v1 | + |v2 | → 0 as xn → ∞ . Moreover,
                                                                                                          E {Y k |X > xn } = ak k!(1 + vk ) ,                                                                                                                              (14.7)
where
                                                                                                 Z ∞
                                              vk ≡ vk (n) =                                               hn (u)e−u duk /k! , hn (u) = L−1 (xn )L(xn eau ) − 1 .
                                                                                                      0
Using properties of slowly varying functions, one can check that vk (n) → 0 as xn → ∞ .
If {(ξi , ηi )} are the i.i.d. pairs of random variables, η1 ≥ 0 , E |ξ1 | + E η1 < ∞ and
0/0 := 0 then
                                  Xn     .Xn
                                                       
                                      ξi     ηi −→
                                                 p E ξ1 E η1 .

This simple fact and (14.7) form a background for a number of tail index estimators.
Denote 1i = 1{Xi > xn } , and let
                                                Pn m
                                                   Y
                            an,m ≡ an,m (xn ) =   Pi .                        (14.8)
                                                m! n 1i



                                                                                                                                                                                                                                                                               213
14    Confidence intervals for a tail index estimator

Proposition 14.1 There holds an,m −→
                                   p am .

This implies, in particular, that
                                                 Pn 2
                                                    Y
                                         a∗n =     Pn i                             (14.9)
                                                 2    Yi
is a consistent estimator of a : a∗n −→
                                      p   a . One can easily check that
                                √
                                  npn (a∗n − a) ⇒ N (µ; 2a2 )                      (14.10)
    √
if a npn (v2 − v1 ) → µ .
The estimator a∗n ≡ a∗n (xn ) is a generalisation of de Vries’ estimator
                       kn
                                               , k
                      X                             Xn
                             2
                                                                       
               an =
                 V
                          ln X(i) /X(kn +1)       2    ln X(i) /X(kn +1) .
                        i=1                             i=1

Indeed, an = a∗n
           V  if we choose xn = X(kn +1) .
           p                   .         √               √
Denote λn = 1 + 2v2 − 2v1 − v12 (1 + v1 ) 1 − pn , yn = 13 npn λn , and
                                                

                                  ã ≡ ã(n) = E {Y |X > xn } .
The constant C∗ ≤ 0.8 is that from the Berry–Esseen inequality (see Novak (1998)).

THEOREM 14.1 If |y| ≤ yn then
                          √
          ∆n (y) ≡ |P ( npn (an /ã − 1) < y) − Φ(y)|
                                                                    3
                                                                            !
                                  4C∗    |2v1 − v2 |           1    X
                              ≤   √     + √          +O           +   vi2          (14.11)
                                    npn      2πe              npn
                                                                    1

as n → ∞ . If |y| > yn then ∆n (y) ≤ 16/npn .

In fact, we estimate ã = a(1 + v1 (n)) instead of a . The justification is that
                                    P(X > x) ∼ L(x)x−1/ã                          (14.12)
uniformly in x ∈ [1; etn ] for any sequence {tn } such that tn = o(1/v1 ).
According to (14.6),
                         E (an /ã − 1)2 ∼ v12 + 1/npn        (n → ∞)
(the so–called bias–versus–variance trade–off). Thus, it would be appropriate to choose
                                  √
numbers {xn } so that v1 = O(1/ npn ) . If so, (14.12) holds for a large enough interval
of values of x.
Denote                              qX          a          
                                                   n
                       5n (y) = P          1i          − 1 < y − Φ (y) .
                                                  ã



214
                                         14.1   Confidence intervals for a tail index estimator

THEOREM 14.2 If |y| ≤ yn then, as n → ∞,
                                                                   3
                                                                         !
                             4C∗    |2v1 − v2 |             1    X
               5n (y) ≤      √     + √          +O             +   vi2       ,           (14.13)
                               npn      2πe                npn
                                                                   1
                                                                         3
                                                                                 !
                          4C∗    |2v1 − v2 |                 ln(npn ) X 2
               5n (y) ≥ − √     − √          +O                      + vi            .   (14.14)
                            npn      2πe                       npn
                                                                         1


Thus, one can suggest for ã the confidence interval
                                        !−1                 !−1 
                                    y                   y
                 I = an 1 + pP               ; an 1 − pP                               (14.15)
                                      1i                  1i

of thelevel 1 − q, where y isthe q ∗ –quantile of Φ ,
       q          |2v ∗ −v ∗ |
q∗ =   2 −
           √4C
             P∗ − √1 2
                       2πe
                                     , v1∗ and v2∗ are estimates of v1 and v2 .
               1i                +

The asymptotic approach to constructing confidence intervals can yield a wrong answer
if the sample size is not large and the rate of convergence in a CLT for a tail index
estimator is slow. Apart from asymptotic confidence intervals, (14.15) is constructed
using a Berry–Esseen–type inequality. It hence takes into account the rate of convergence
in the corresponding CLT.
Besides heavy tails, financial data often exhibits dependence. Thus, it is important to
develop procedures of the tail index estimation from sequences of weakly dependent
random variables. Assume that X, X1 , X2 . . . is a (strictly) stationary sequence of of
random variables. The definitions of the weak dependence coefficients p α, ϕ and ρ can
be found, eg., in Bradley (1986), Utev (1989). Remind that ρ(·) ≤ 2 ϕ(·) .
Hsing (1991) and Resnick & Starica (1998) suggested sufficient conditions for consistency
of Hill’s estimator in the case of m–dependent sequences and some classes of stationary
processes. Complicated sufficient conditions for asymptotic normality of Hill’s estimator
for dependent data are given by Starica (1999) and Drees (1999).
We show that the ratio estimator is consistent under rather simple assumptions expressed
in terms of the ϕ–mixing coefficient.

                                   i/3
                         P
THEOREM 14.3 If             i≥0 ρ(2 ) < ∞        then the ratio estimator is consistent: an −→
                                                                                             p
a.

Condition i≥0 ρ(2i/3 ) < ∞ is rather weak: in many models ϕ(·) (and, therefore, ρ(·) )
          P
decays exponentially fast (cf. Davis, Mikosch & Basrak (1999)).
Proof of Theorem 4. We use Chebyshev’s inequality, (14.7) and an estimate of a variance
of a sum of dependent random variables (see Peligrad (1982) or Utev (1989)). For any



                                                                                            215
14    Confidence intervals for a tail index estimator

ε > 0,
                                  X n               Xn 
           P(an − ã > ε) = P        (Yi − ã)1i > ε   1i
                                X n                        X n 
                                                          −2
                            = P      Zi > εnpn ≤ (εnpn ) Var     Zi ,

where Zi = (Yi −ã)1i −ε(1i −pn ) . By Theorem
                                             P1.1 in Utev (1989), there exists a constant
cρ (depending only on ρ(·) ) such that Var ( n Zi ) ≤ cρ nVar Z1 ≤ cnpn (we used also
(14.7)). Hence P(an − ã > ε) → 0 . Similarly we check that P(an − ã < −ε) → 0 .
Remind that ã → a as xn → ∞ . The result follows.




Bibliography
Bradley, R. (1986). Basic properties of strong mixing conditions, in E.Eberlein &
    M.S.Taqqu (eds), Dependence in Probability and Statistics, Boston: Birkhäuser,
    pp. 165–192.

Csörgö, S. & Viharos, L. (1998). Asymptotic Methods in Probability and Statistics,
     Elsevier, chapter Estimating the tail index, pp. 833–881.

Davis, R., Mikosch, T. & Basrak, B. (1999). Sample acf of multivariate stochastic
    recurrence equations with applications to garch, Technical report, University of
    Groningen, Department of Mathematics.

de Haan, L. & Peng, L. (1998). Comparison of tail index estimators, Statistica Neer-
    landica 52(1): 60–70.

Drees, H. (1999). Weighted approximations of tail processes under mixing conditions,
    Technical report, University of Cologne.

Embrechts, P., Klüppelberg, C. & Mikosch, T. (1997). Modelling Extremal Events for
   Insurance and Finance, Springer Verlag.

Hsing, T. (1991). On tail index estimation for dependent data, 19(3): 1547–1569.

Novak, S. (1996). On the distribution of the ratio of sums of random variables, Theory
    Probab. Appl. 41(3): 479–503.

Novak, S. (1998). Berry–esseen inequalities for a ratio of sums of random variables,
    Technical Report 98/07/SMS–CSSM, University of Sussex.

Novak, S. & Utev, S. (1990). On the asymptotic distribution of the ratio of sums of
    random variables, Siberian Math. J. 31: 781–788.

Resnick, S. (1997). Heavy tail modeling and teletraffic data, Ann. Statist. 25(5): 1805–
    1869.



216
                                     14.1   Confidence intervals for a tail index estimator

Resnick, S. & Starica, C. (1998). Tail index estimation for dependent data, Ann. Appl.
    Probab. 8(4): 1156–1183.

Starica, C. (1999). On the tail impirical process of solutions of stochastic difference equa-
     tions, Technical Report http://www.math.chalmers.se/ starica/resume/publi1.html,
     Chalmers University.

Utev, S. (1989). Sums of ϕ–mixing random variables, Trudy Inst. Mat. Novosibirsk
    13: 78–100.




                                                                                         217
14    Confidence intervals for a tail index estimator




218
15 Extremes of alpha-ARCH Models
                                                                         Christian Robert




15.1     Introduction

In the recent literature there has been a growing interest in nonlinear time series models.
Many of these models were introduced to describe the behavior of financial returns. Large
changes tend to be followed by large changes and small changes by small changes (see
Mandelbrot (1963)). These observations lead to models of the form Xt = σt εt , where
the conditional variance depends on past information.
Two approaches have been proposed to specify time-dependent variances. The first
one assumes that the conditional variances are generated by a nonlinearly transformed
underlying stochastic process, for example an autoregressive process. These models
are called stochastic volatility (SV) models. In the second approach, the variance of
the series is a deterministic function of lagged observations like in the ARCH-GARCH
models (Engle (1982), Bollerslev (1986)). For a review with financial applications, see
Bollerslev, Chou and Bollerslev, Chou & Kroner (1992) or Gourieroux (1997).
The extremal behavior of a process (Xt )t∈N is for instance summarized by the asymptotic
behavior of the maxima:
                                Mn = max Xk , n ≥ 1.
                                        1≤k≤n

The limit behavior of Mn is a Markov chain, is a well-studied problem in extreme value
theory, when (Xt )t∈N (see e.g. Leadbetter & Rootzen (1988) or Perfect (1994)). See
also Leadbetter, Lindgren & Rootzen (1983) and the references therein, for a general
overview of extremes of Markov processes. Under general mixing conditions, it can be
shown that for large n and x:

                                 P (Mn ≤ x) ≈ F nθ (x),

where F is the stationary distribution of (Xt )t∈N and θ ∈ (0, 1] is a constant called
extremal index. This index is a quantity which characterizes the relationship between
the dependence structure of the data and their extremal behavior. It can be shown that
exceedances of a high threshold value tend to occur in clusters whose average size is
related to the inverse of θ.



                                                                                       219
15     Extremes of alpha-ARCH Models

Extremes of special gaussian stochastic volatility models have been studied by Breidt
& Davis (1998). They showed that the law of the normalized maximum of the log-
arithm of the square of the process converge to the Gumbel law. Extremal behavior
for the ARCH(1)-model is described in Haan, Resnick, Rootzen & Vries (1989), for the
GARCH(1,1)-model in Mikosch & Starica (1998), and for the general GARCH(p,q)-
model in Davis, Mikosch & Basrak (1999). They get Pareto-like tail and extremal index
strictly less than one.
The purpose of this article is to study autoregressive conditional heteroskedastic models
with a similar structure as the classical ARCH-model, and to show that they feature
Weibull-like tails and extremal index equal to one. These models are the α-ARCH-
models introduced by Diebolt & Guegan (1991). Recent empirical works (Cont, Potters
& Bouchaud (1997),Gourieroux, Jasiak & Le Fol (1999), Robert (2000) have shown that
some financial series could exhibit such behaviors. These series are mainly high frequency
data.
This paper is organized as follows. In section 2, we present the model and we recall
its main properties. In section 3, we determine the tails of the stationary distribution.
In section 4, we show that the extremal index exists and is equal to one, and we give
the law of the asymptotic normalized maximum. Section 5 is an application on an high
frequency series of the price variations for the Alcatel stock traded on the Paris Bourse.
The proofs are gathered in Section 6. Section 7 concludes the paper.


15.2        The model and its properties

The model is defined by the autoregressive scheme:
                                 q             α
                           Xt = a + b Xt−1  2     εt , t ∈ Z,                             (15.1)


where a, b are positive constants and 0 < α < 1. {εt }t∈Z is a sequence of i.i.d. random
variables with standard gaussian distribution1 . This is the Diebolt & Guegan (1991)
model with autoregressive conditional heteroskedastic errors of order one and as autore-
gressive part.
When α = 0, the model reduces to a sequence of i.i.d. gaussian random variables,
and when α = 1, it reduces to the classical ARCH(1) model with gaussian innovations.
Extremal behaviors of these two processes are well known [see, for example, Resnick
(1987) p.71 for the first case, and Haan et al. (1989) for the second one].
The process is a homogeneous Markov process with state space R. The transition density
 1
     We assume a common gaussian distribution for the εt . We can introduce weaker assumptions by
      considering distributions with densities such h(x) = C|x|β exp (−k|x|γ ), β ∈ R and γ > 0.




220
                                                           15.3    The tails of the stationary distribution

is given by:

                                                                  u2
                                                                          
                                            1     1
             P (X1 ∈ [u, u + du]|X0 = x) = √ √          exp −                du,
                                            2π a + bx2α       2(a + bx2α )
               with x ∈ R.

The α-ARCH process has the following properties ( Diebolt & Guegan (1991) Theorems
1 and 2):

THEOREM 15.1 Under the condition 0 < α < 1:
(i) There exists a unique stationary process (Xt )t∈Z which is measurable with respect to
the σ-algebra σ(εt , εt−1 , ...) and satisfies the recursive equation (15.1)2 .
(ii) (Xt )t∈Z is geometrically strong mixing.
(iii) If α > 1/2, then Xt has no exponential moment, but admits moments of any orders.

Let us denote by F its stationary distribution. A random variable X with distribution
F satisfies the fixpoint equation:

                                                       q
                                                   d
                                              X=        a + b (X 2 )α ε,                                    (15.2)
where ε is a standard gaussian random variable, independent of X.
Let:                             2               Z ∞     2
                            1      x            1            u
                    h(x) = √ exp −   , H̄(x) = √       exp −   du,
                            2π     2             2π x        2

be the density and the survivor function of the standard normal distribution, f the
density of the distribution F .
We have:                          Z ∞                                    
                                       1                         x
                        f (x) =    √          h              √                f (t)dt, ∀x ∈ R.
                                −∞   a + bt2α                  a + bt2α

Since the function h is symmetric, the pdf f is also symmetric, and we have:
                          Z ∞                         
                                  1             x
                f (x) = 2     √          h √             f (t)dt, ∀x ∈ R.                                   (15.3)
                           0    a + bt2α      a + bt2α


15.3          The tails of the stationary distribution

In this section, we study the tails of the stationary distribution. Diebolt & Guegan
(1991) derived conditions for the existence of polynomial or exponential moments. Here
we completely study the pattern of the tails for α > 1/2.
 2
     Moreover, σ(εt , εt−1 , ...) = σ(Xt , Xt−1 , ...), and then εt is independent of σ(Xt , Xt−1 , ...).




                                                                                                              221
15    Extremes of alpha-ARCH Models

First, we associate an auxiliary model to model (15.1). Following Breidt & Davis (1998)
, we get for this model the pattern of the tail distribution, and then deduce the pattern
of the tail for the initial model.
Let first assume that a = 0, then we obtain:
                                     Yt = αYt−1 + Ut ,                              (15.4)

where Yt = ln Xt2 and Ut = ln(bε2t ). This is an autoregressive model of order one (AR(1)).
Since 0 < α < 1 and Ut admits a positive density on R, the existence and the uniqueness
of a stationary distribution FY is guaranteed. A random variable Y with distribution
FY satisfies the fixpoint equation:
                                          d
                                       Y = αY + U.                                  (15.5)

U is a random variable with distribution has as ln(bε2 ), where ε is standard normal,
independent of Y .
The transformation of the process guarantees the existence of exponential moments (see
(iii) of Theorem 15.1). Let us now introduce the logarithm of the moment-generating
function and its first two derivatives:
                         q0 (λ) = ln C0 (λ) = ln E(exp {λY }),
                                    d
                         m0 (λ) =      q0 (λ),
                                   dλ
                                    d2
                         S02 (λ) =      q0 (λ).
                                   dλ2

The latter will be useful to find the tail pattern of Y .
¿From (15.5), we have:
              q0 (λ) = q0 (αλ) + ln E(exp {λU }),                                   (15.6)
                      = q0 (αλ) + λ ln 2b + ln Γ(1/2 + λ) − ln Γ(1/2),
                      = q0 (αλ) + λ ln λ + λ(ln 2b − 1) + ln 2/2 + O(1/λ).          (15.7)

Then we deduce an asymptotic expansion of the function q0 (see Appendix 1):
                         h       α
                                          i
                λ ln λ    ln 2bα 1−α   − 1       ln 2
      q0 (λ) =         +                     λ−        ln λ + m + O(1/λ),           (15.8)
               (1 − α)        (1 − α)           2 ln α

where m is a constant. We can also derive asymptotic expansions of its derivatives:
                                             α
                                                 
                           ln λ     ln   2bα 1−α
                                                      ln 2 1
              m0 (λ) =            +                −          + O(1/λ2 ),        (15.9)
                         (1 − α)       (1 − α)       2 ln α λ
                             1         ln 2 1
               S02 (λ) =           +            + O(1/λ3 ).                    (15.10)
                         λ(1 − α) 2 ln α λ2



222
                                                 15.3     The tails of the stationary distribution

Let:                                α
                                 − 1−α
                             α                       (1 − α) ln 2            
                    m−1
                     0 (x) =             e(1−α)x +                + O e−(1−α)x ;          (15.11)
                                  2b                    2 ln α
we get:                                                     
                               m0 m−1                −(1−α)x
                                 
                                   0  (x) = x + O   e          ,

which justifies the notation inverse −1 .

THEOREM 15.2 The stationary distribution of the process (Yt ) defined in (15.4) sat-
isfies:

                                 exp −ym−1
                                                       −1
                                           0 (y) C0 m0 (y)
        F̄Y (y) = P [Y > y] ∼                                               (15.12)
                           y→∞     m−1           −1
                                     0 (y)S0 (m0 (y))(2π)
                                                           1/2
                                   α
                              α− 1−α (1−α)y
                                                                    
                                                    (1 − α) ln 2
                = 2D exp −             e        −y                +1
                             2b(1 − α)                 2     ln α
                                          
                                   −(1−α)y
                           + O ye             ,


where D is a positive constant3 .

A similar result can be deduced when a > 0.

THEOREM 15.3 The stationary distribution of the process (Xt ) defined in (15.1)
satisfies:

               F̄X (x) = P [X > x]
                                        α
                                    α− 1−α 2(1−α)
                                                                    
                                                              ln 2
                       = D exp −             x    − (1 − α)        + 1 ln x
                                   2b(1 − α)                  ln α
                                                
                                + O x−2(1−α) ln x   .

if and only if 1/2 < α < 1.

We can now study the type of tail of the variable X. Let us first introduce the definition
of a Weibull-like tail.

DEFINITION 15.1 A random variable has a Weibull-like tail if its survivor function
is:
                       F̄ (x) = exp {−cxτ l(x)} ,
 3
     Let m and n be two functions. m(y) ∼ n(y) if and only if limy→∞ m(y)/n(y) = 1.
                                         y→∞




                                                                                              223
15     Extremes of alpha-ARCH Models

where c, τ are strictly positive constants and:

                                               lim l(x) = 1.
                                              x→∞


X has a Weibull-like tail, since its survivor function satisfies4 :
                                                       D
                                    F̄X (x) ∼              exp {−exc } .
                                              x→∞ xf


with:

                                                   α
                                           α− 1−α
                                                                                  
                                                                            ln 2
                 c = 2(1 − α),         e=           ,           f = (1 − α)      +1 .
                                          2b(1 − α)                         ln α

Moreover, the density of the stationary distribution f satisfies:

                                   D                                      (1 − α)
                      f (x) ∼          exp(−exc ), avec d = α +                   ln 2.
                            x→∞ xd                                         ln(α)

We completely specified the tails, eventhough the constant D is not explicit. In the
ARCH-model, this parameter is known, but is not easily expressed in terms of structural
parameters.


15.4        Extreme value results

In this section we propose normalizing factors which ensure that the normalized maxima
of an i.i.d. sequence with the same common distribution as the stationary one converge
to a non-degenerate distribution. Then, we check that the maxima of the stationary
sequence exhibit the same behavior. We suppose that the distribution of X0 is the
stationary one.


15.4.1       Normalizing factors

Let us write the survivor function F̄ (x) as:

                            F̄ (x) = D exp (−exc − f ln(x)) hF (x),
                                             Z x         
                                                      1
                            F̄ (x) = AD exp −           dt hF (x),
                                                 1 a(t)
 4
     By a scale change:                q
                              λXt =     λ2 a + bλ2(1−α) (λXt−1 )2α εt ,      λ > 0,
      and only the coefficients D and e are changed. The tail pattern is not changed.




224
                                                                        15.4   Extreme value results

with:
                               1
              a(t) =                  ,     A = exp(−ec − f ) ,          lim hF (x) = 1.
                       ectc−1 + ft                                       x→∞


According to propositions 1.1 and 1.4 of Resnick (1987), F belongs to the maximum
domain of attraction of the Gumbel law. Moreover, the normalizing factors which ensure
that:
                        F n (cn x + dn ) → Λ(x) = exp −e−x ,
                                                     
                                               n→∞

can be chosen such as:

                                   − ln F̄ (dn ) = ln n,     cn = a(dn ).

                
THEOREM 15.4 If X̃t                       is an i.i.d. sequence of random variables with common
                                    t∈N
distribution F , then:
                           n                             o
                       P     M ax X̃1 , ..., X̃n − dn /cn ≤ x → Λ(x),
                                                                       n→∞


with:

                             ln n 1/c 1 ln n 1/c−1
                                                                   
                                                      f     ln n     ln D
              dn =                   +               − ln          +        ,
                               e       c   e          ec      e        e
                           1 ln n 1/c−1
                                  
              cn =                       .
                           ec    e


15.4.2     Computation of the extremal index

Finally, we would like to know if the extremal index of (Xt )t∈N exists and to compute
it. After preliminary definitions, we show that the extremal index exists and is equal to
one. Let (un ) be a deterministic real sequence. For each l with 1 ≤ l ≤ n − 1 , define:

        αn,l = sup |P (Xi ≤ un , i ∈ A ∪ B) − P (Xi ≤ un , i ∈ A) P (Xi ≤ un , i ∈ B)|

where the supremum is taken over all A and B such that:

                                   A ⊂ {1, ..., k} , B ⊂ {k + l, ..., n} ,

for some k with 1 ≤ k ≤ n − l.

DEFINITION 15.2 Let (un )n∈N be a real sequence. The condition D(un ) is said to
hold if αn,ln → 0 as n → ∞ for some sequence ln = o(n).




                                                                                                225
15    Extremes of alpha-ARCH Models

This condition is implied by the strong mixing condition (see Leadbetter & Rootzen
(1988) p. 442).

DEFINITION 15.3 Assume that the condition D(un ) for the stationary sequence
                            0
(Yt )t∈N . The condition D (un ) (called ”anti-clustering condition”) holds if there exist
sequences of integers (sn )n∈N and (ln )n∈N such that sn → ∞, sn ln /n → 0, sn αn,ln → 0,
and:
                                  pn
                                  X
                            lim n    P {Y0 > un , Yj > un } = 0,
                            n→∞
                                   j=1

where pn = [n/sn ].

THEOREM 15.5 (Leadbetter et al. (1983): Assume that the conditions D(un ) and
D0 (un ) for a stationary sequence (Yt )t∈N and for a sequence (un )n∈N such that limn→∞ n(1−
FY (un )) = τ , then:
                            lim P {M ax (Y1 , ..., Yn ) ≤ un } = e−τ .
                           n→∞


In a first step, we focus on the squared process:

                                  Zt = Xt2 = (a + bZt−1
                                                    α
                                                        )2t .

We check that the conditions D(uZ        0 Z
                                n ) and D (un ) hold for the stationary sequence (Zt )t∈N .


THEOREM 15.6 The extremal index of (Zt )t∈N exists and is equal to one.

It follows that the extremes of the square of the process are nearly ”independent”. In a
second step,
         n p  we show
                   o that the extremal index of (Xt )t∈N is also equal to one. Note that
{Xt } = Bt Xt2 where the random variables {Bt } are i.i.d., independent of {|Xt |}
and such that P (B1 = 1) = P (B1 = −1) = 1/2.
                                                                           Pn
Let (un (τ )) be such that limn→∞ n (1 − F (un (τ ))) = τ , we define Nn =     1{X 2 >u2 (τ )} ,
                                                                                  i    n
                                 2                                        i=1
i.e. the number of times where                                  2
                                               the threshold un (τ ). Let 1 ≤ ϑ1 < ϑ2 < ...
                              2 Xt exceeds 2
be the random times where Xt exceeds un (τ ). The following conditions are equivalent:

                                 lim n(1 − F (un (τ )) = τ,
                               n→∞
                               lim n(1 − FZ (u2n (τ )) = 2τ,
                              n→∞
                              lim P MnZ ≤ u2n (τ ) = e−2τ .
                                    
                             n→∞


Since the extremal index of (Zt )t∈N is equal to one, the random variable Nn converges
weakly to a Poisson random variable N with parameter 2τ (see Leadbetter & Rootzen
(1988)).



226
                                                                                15.5   Empirical study

Then we have:
                                                  ∞
                                                  X
         P {max(X1 , ..., Xn ) ≤ un (τ )}    =          P {Nn = k, Bϑ1 = ... = Bϑk = −1}
                                                  k=0
                                                  X∞
                                             =          P {Nn = k} 2−k
                                                  k=0
                                                  X∞
                                             →          P {N = k} 2−k
                                                  k=0
                                                         ∞
                                                         X           (2τ )k
                                             =    e−2τ         2−k          = e−τ .
                                                                       k!
                                                         k=0


If un (x) = cn x + dn , then limn→∞ n(1 − F (un (x)) = − ln Λ(x) = e−x and finally:
                            lim P {max(X1 , ..., Xn ) ≤ un (x)} = Λ(x).
                           n→∞



15.5        Empirical study

The development of financial markets resulting in the set up of automatic quotation
systems, created access to large data-sets of tick-by-tick observations. In this section,
we estimate the tails and the extremal index of an high frequency series of the price
variations.
We consider a set of intra-trade price variations for the Alcatel Stock over the period
ranging from May 1997 to September 19985 . This stock is one of the most heavily traded
asset. The Paris Stock Exchange operates over five days a week during seven hours per
day. The original records include also observations collected before the market opening.
We delete the times between the market closures and the next day openings as well as
the weekend gaps. The opening and the closure take place at 10:00 a.m. and 5:00 p.m.
respectively.
The main features of tick-by-tick data are the following ones:
       - the transactions occur at random times.
       - returns and traded volumes exhibit strong intraday seasonalities.
     - the market prices take discrete values with a minimum price variation
called the tick. The distribution of these variations between consecutive trades has a
discrete support.
The first and third characteristics of tick by tick data can be partly neglected due to
our sampling scheme. Indeed, we sampled every 30 mn from 10.15 a.m. to 16.45 p.m..
It also allows to eliminate the opening and closure effects.
 5
     extracted from the records of the Paris Stock Exchange (SBF Paris Bourse)




                                                                                                  227
15    Extremes of alpha-ARCH Models

We provide in Table 1 summary statistics of the series of the price variations (∆pt ), and
in Figure (15.1) empirical marginal distribution.

                                        Mean              3.84 10−2
                                        Variance          14.40
                                        Skewness          0.10
                                        Kurtosis          9.19
                                        Min               −24
                                        Max               29
          Table 1 : Summary statistics of price variations, sampled at 30 mn




                 0.20




                 0.15




                 0.10




                 0.05




                 0.00
                        -20       -10               0                 10   20

                                                   tick




                              Figure 15.1: Marginal distribution


The distribution is quite symmetric. A marginal overdispersion can be exhibited, since
the kurtosis is greater than 3: the tails are heavier than the normal ones.
The sample autocorrelations of the absolute values are significantly different from zero
for large lags. However, it might be misleading to conclude to an empirical evidence
of volatility persistence, since the hyperbolic decay of the autocorrelogram can be due
to the omitted intraday seasonality. The presence of non-linearities is clear when we
compare the autocorrelograms on the series and its absolute values. As a consequence,
a stochastic volatility model or an α-ARCH model seem to be appropriate.




228
                                                            15.5   Empirical study




          0.30




          0.20
    ACF




          0.10




          0.00




          -0.10
                  0      20       40         60    80       100

                                       Lag




                  Figure 15.2: Sample ACF of price variations




          0.30




          0.20
    ACF




          0.10




          0.00




          -0.10
                  0      20       40         60    80       100

                                       Lag




Figure 15.3: Sample ACF of absolute values of the price variations




                                                                              229
15    Extremes of alpha-ARCH Models

15.5.1     Distribution of extremes

We define as extreme price variation, as any price variation that exceeds 6 ticks.




                           30




                           10
                Extremes




                           -10




                           -30
                                 0   1000   2000   3000      4000




      Figure 15.4: Extreme variations over the period May 1997 and September 1998




The series of extremes is given in the Figure (15.4). Large movements usually take place
during the last four months of the sample, on and after June 1998. We also note the
clustering of extremal events: a large price movement is often followed by large pices
movements. Therefore, the extremal index could be less than one.
Extreme price movements usually occur during the first hours of the trading session and
right before the closure (see Figure (15.5)). A simple explanation for this phenomenon
is the market activity during these hours.


15.5.2     Tail behavior

Let us now assume that ∆pt = [Xt ], where (Xt )t∈N is an α-ARCH process, and [a] the
integer part of a. We approximate the latent process (Xt ) by Yt = ∆pt + Ut − 0.5, where
(Ut ) are independent random variables with uniform distribution and are independent
of (∆pt ). This transformation is applied to get data with continuous values. IT is easily
seen that the distributions of Xt and Yt have the same tails (see Appendix 2).




230
                                                                                                                          15.5   Empirical study


                                                     Number of extremes



                 80




                 60




                 40




                 20




                  0
                       900          4500          8100           11700           15300           18900           22500

                             2700          6300          9900            13500           17100           20700           24300
                                                            




                                                                Time in seconds




                      Figure 15.5: Distribution of extremes during a day


Various methods can be used to analyze the tails. Gumbel stresses the importance
of looking at data before engaging in a detailed statistical analysis. For this reason
we first look at the Quantile-Quantile Plot. If the data are generated from a random
sample of the benchmark distribution, the plot looks roughly linear. This remains true
if the data come from a linear transformation of the distribution. Some difference in the
distributional patterns may be also deduced from the plot. For example if the benchmark
distribution has a lighter upper-tail than the true distribution, the Q-Q plot will curve
down at the right of the graph.
In Figure (15.6), we compare the upper-tail of the distribution of Yt with the Weibull
one, and in Figure (15.7), we compare with the Pareto one. Hence, we can see that the
upper-tail is Weibull-like, which confirms the empirical study in Robert (2000).




To estimate the value of τ ,the Weibull coefficient, a method considers the inverse of the
slope of the line of the Figure (15.6). We obtain τ ≃ 0.80.


A second estimator has been proposed by Beirlant, Broniatowski, Teugels & Vynckkier
(1995):
                                         k
                         X    log(n/k) 1 X                
                       Bk,n =                X(i) − X(k+1) ,
                                X(k) k
                                                                      i=1




                                                                                                                                            231
15    Extremes of alpha-ARCH Models


                                                                      Quantiles Plot

                                                 4




                                                 3




                        Log(Observations)
                                                 2




                                                 1




                                                 0
                                                     -1       0               1                2       3

                                                                  Log(Exponential Quantiles)




Figure 15.6: Comparison between the upper-tails of the empirical and Weibull distribu-
             tions

                                                                      Quantiles Plot

                                                 4




                                                 3
                             Log(Observations)




                                                 2




                                                 1




                                                 0
                                                      0   2              4           6             8   10

                                                                     Exponential Quantiles




Figure 15.7: Comparison between the upper-tails of the empirical and Pareto distribu-
             tions

where X(k) is the kth largest order statistic of X1 , X2 , ..., Xn .
                                  P
                X →τ when the data are independent. It is shown in Robert [1999b]
We know that 1/Bk,n



232
                                                                       15.5   Empirical study




                 1.0




                 0.9




                 0.8




                 0.7




                 0.6




                 0.5
                       0       100          200       300        400    500

                                                  k



                                                           Y )
                           Figure 15.8: Estimator BBTV (1/Bk,n


that for a α-ARCH process, the estimator is still consistent to τ = 2(1 − α).
In Figure (15.8), we plot the these estimators according to k, and their asymptotic
confidence bound corresponding to the independent case. We obtain τ̂ ≈ 0.7.


15.5.3    The extremal index

Various methods have been proposed in the literature to estimate the extremal index
(cf. Embrechts, C. & Mikosch (1997), Section 8.1). We use below the so-called blocks
method which divides the set of N observations into K blocks of length n. Each block
can be considered as a cluster of exceedances. Then, we can select a threshold u. Two
quantities are of interest: the number Ku of blocks in which at least one exceedance of
the threshold u occurs, and the total number Nu of exceedances of u.
A natural estimator of θ is:

                                            K ln(1 − Ku /K)
                                     θ̂ =                    .
                                            N ln(1 − Nu /N )

Under general conditions, θ̂ is consistent (Smith & Weismann (1994)).
On Figure (15.9), we plot the estimates of the extremal index for different threshold u
(on the x-axis) and for different lengths n of the blocks.
The estimated extremal index should be taken less than one (θ̂ ≈ 0.75), whereas the



                                                                                         233
15    Extremes of alpha-ARCH Models

unitary value is associated with the α-ARCH model. This could be a consequence of
the particular distribution of extremes during a trading day caused by the intraday
seasonalities, but also of a slow rate of convergence of the estimator. To clarify the
latter point, we first fix the value of α and estimate the coefficients of the model by
maximum-likelihood. We get â = 1.51 (σ̂a = 0.13) and b̂ = 4.06 (σ̂b = 0.45).




                               1.0




                               0.8
              Extremal Index




                               0.6




                               0.4

                                                                n = 40
                                                                n = 60
                               0.2




                               0.0
                                     16    18          20                22   24

                                                    Threshold




                                          Figure 15.9: Extremal index


Then, we use this estimated α-ARCH model to simulate 100 series with the same length
as the sample, and to deduce the finite sample distribution of the estimated extremal
index. We choose n = 40 and we consider the same thresholds as before. On Figure
(15.10), we plot for each threshold the mean and the 5th and 95th quantiles of the finite
sample distribution.


We can see that the convergence to the true value is very slow, and the previous results
can not be used to reject the α-ARCH model.


15.6     Proofs

Proof of theorem 15.2. The proof of this theorem is similar to the arguments given in
Breidt & Davis (1998). It relies on the asymptotic normality for the normalized Escher
transform.



234
                                                                                                   15.6     Proofs




                                1.2




                                1.0
               Extremal Index




                                0.8




                                0.6




                                0.4




                                0.2
                                      16           18            20          22           24

                                                              Threshold




                                            Figure 15.10: Simulated extremal index

Consider the family of probability density functions defined by:


         gλ (x) = λS0 (λ)eλ(S0 (λ)x+m0 (λ)) F̄Y (S0 (λ)x + m0 (λ))/C0 (λ),                      λ > 0.

The moment-generating function of gλ is given by:
                Z +∞
      ϕλ (t) =        etx gλ (x)dx
                                       −∞
                                      Z +∞
                  =                          λS0 (λ)e(t+λS0 (λ))x+λm0 (λ) F̄Y (S0 (λ)x + m0 (λ))dx/C0 (λ)
                                       −∞
                                           λ                             C0 (λ + t/S0 (λ))
                  =                                exp {−tm0 (λ)/S0 (λ)}                   .
                                      λ + t/S0 (λ)                             C0 (λ)

Using properties (15.8), (15.9) and (15.10), we have:
                                            
                                          t        m0 (λ)
         ϕλ (t) = exp ln λ − ln λ +             −t        + ln C0 (λ + t/S0 (λ))
                                       S0 (λ)      S0 (λ)
                                   
                        − ln C0 (λ)
                       2            
                        t
                = exp      + O(1/λ)
                         2
                           2
                           t
                 → exp          .
                λ→∞         2



                                                                                                              235
15    Extremes of alpha-ARCH Models

It follows that:
                                                  d
                                          Gλ (x) → H(x).

By the dominated convergence theorem and the inversion formula for characteristic
functions, we have:
                          Z +∞
                        1
              gλ (x) =         e−itx ϕλ (it)dt
                       2π −∞
                            Z +∞              2            2
                          1        −itx        t        1      x
                      →           e      exp      dt = √ exp −    .
                     λ→∞ 2π −∞                 2        2π     2

Choosing x = 0, we get:
                                              exp(−λm0 (λ))C0 (λ)
                               F̄Y (m0 (λ)) ∼     √               ,
                                          λ→∞       2πλS0 (λ)

then, by making the substitution λ → m−1
                                      0 (λ), we obtain (15.12).

Invoking the equivalents, we establish the theorem.
The following lemma will be very useful for ulterior proofs.

LEMMA 15.1 Let ]a, b[ be an interval on R, bounded or not. Let ψ :]a, b[→ R be
a C 2 -function, with an unique extremum in c. Moreover, we suppose that ψ 00 (c) < 0.
                                                                          Rb
Let ϕ :]a, b[→ R be a continuous and strictly positive function, such that a ϕ(x)eψ(x) dx
exists, then:                                s
                       Z b
                                λψ(x)              2π
                           ϕ(x)e      dx ∼           00 (c)
                                                            ϕ(c)eλψ(c) .
                        a               λ→∞    −λψ

                                                                      Rb      λψ(x) dx, λ ∈ R+ , exist,
Proof of lemma 15.1. Firstly, note that the integrals                  a ϕ(x)e
since:           Z         b                   Z                b
                               ϕ(x)eλψ(x) dx ≤ e(λ−1)ψ(c)           ϕ(x)eψ(x) dx.
                       a                                    a
                                                Rb      λψ(x) dx, when λ → ∞.
We look for an equivalent of the integral        a ϕ(x)e

Step 1:
The function ψ has the following development around c:
                                             (x − c)2 00
                        ψ(x) = ψ(c) +                ψ (c) + o(x − c)2 .
                                                2

Let η ∈]0, 1[. There exists δ > 0 such that if 0 ≤ x − c < δ, then:
                        (1 − η)ϕ(c) ≤ ϕ(x) ≤ (1 + η)ϕ(c)
            1                                         1
              (x − c)2 ψ 00 (c)(1 + η) ≤ ψ(x) − ψ(c) ≤ (x − c)2 ψ 00 (c)(1 − η),
            2                                         2


236
                                                                                                         15.6   Proofs

hence ∀λ ∈ R+ :
                            Z c+δ                                                 Z c+δ
                                        1           2   00
            (1 − η)ϕ(c)              e 2 λ(x−c) ψ (c)(1+η) eλψ(c) dx ≤                       ϕ(x)eλψ(x) dx,
                             c                                                      c


and         Z c+δ                                                Z c+δ
                                                                           1       2    00
                    ϕ(x)eλψ(x) dx ≤ (1 + η)ϕ(c)                          e 2 λ(x−c) ψ (c)(1−η) eλψ(c) dx.
             c                                                     c

After a change of variable, the integral is undervalued by:
                                                      q
              s                                    Z −λψ00 (c)(1+η) δ
                        2                                   2            2
                     00
                                 (1 − η)ϕ(c)eλψ(c)                    e−u du.
                −λψ (c)(1 + η)                      0


Moreover, we know that:
                                        q
                                            −λψ 00 (c)(1+η)
                                                            δ
                                                                             1√
                                 Z
                                                    2              2
                                                                e−u du →        π.
                                    0                                    λ→∞ 2


Then, there exists λ0 , such that ∀λ > λ0 :
                            Z c+δ
                                    1       2 00
              (1 − η)ϕ(c)         e 2 λ(x−c) ψ (c)(1+η) eλψ(c) dx
                             c
                                        r
                                                    π
                            ≥ (1 − η)            00
                                                              (1 − η)ϕ(c)eλψ(c) ,
                                          −2λψ (c)(1 + η)
                            Z c+δ
                                    1       2 00
              (1 + η)ϕ(c)         e 2 λ(x−c) ψ (c)(1−η) eλψ(c) dx
                             c
                                        r
                                                    π
                            ≤ (1 + η)            00
                                                              (1 + η)ϕ(c)eλψ(c) .
                                          −2λψ (c)(1 − η)

We deduce that for λ > λ0 :
                                                   Z c+δ
                (1 − η)2
                         r
                             π             λψ(c)
                                      ϕ(c)e      ≤       ϕ(x)eλψ(x) dx,
                  (1 + η) −2λψ 00 (c)
               p
                                                    c


and:                Z c+δ
                                                   (1 + η)2
                                                                       r
                                     λψ(x)                                    π
                            ϕ(x)e             dx ≤ p                                   ϕ(c)eλψ(c) .
                     c                               (1 − η)               −2λψ 00 (c)

Step 2:
Let ε > 0. Choose η in ]0, 1[, such that :

                         (1 − η)2                                        (1 + η)2
                         p         >1−ε                      and         p         < 1 + ε.
                           (1 + η)                                         (1 − η)



                                                                                                                  237
15     Extremes of alpha-ARCH Models

Choose also δ and λ0 .
Step 3:
We must now check that the second part is negligible. By the assumptions, ψ is strictly
decreasing at the right of c, then ∀x > c + δ:

                                ψ(x) − ψ(c) ≤ ψ(c + δ) − ψ(c) = −µ,

where µ is strictly positive. We deduce that for λ ≥ 1:

                            λψ(x) ≤ (λ − 1)ψ(c) − (λ − 1)µ + ψ(x),

and:                Z b                                                       Z b
               0≤           ϕ(x)eλψ(x) dx ≤ e(λ−1)ψ(c)−(λ−1)µ                        ϕ(x)eψ(x) dx.
                      c+δ                                                      c+δ
                                          
Remark that e−(t−1)µ = o             1
                                     √
                                       t
                                               , and there exists λ1 , such that ∀λ > λ1 then:

                        Z b                                r
                                                                  π
                                 ϕ(x)eλψ(x) dx < ε                         ϕ(c)eλψ(c) .
                           c+δ                                 −2λψ 00 (c)

At least, we have for any λ > max(λ0 , λ1 ):
                    r                                       Z b
                             π
             (1 − ε)                  ϕ(c)eλψ(c) <              ϕ(x)eλψ(x) dx
                          −2λψ 00 (c)                          c
                                                                    r
                                                                            π
                                                          < (1 + 2ε)              ϕ(c)eλψ(c) .
                                                                      −2λψ 00 (c)

Step 4:
The same method used on ]a, c[ give the same results.
Finally, we obtain:
                          Z b                               s
                                           λψ(x)                     2π
                                ϕ(x)e              dx ∼                       ϕ(c)eλψ(c) .
                            a                         λ→∞          −λψ 00 (c)


Proposition 15.1    Let f0 be the stationary
                                      R∞       density in (15.1) when a = 0. We have
q0 (λ) = ln E(exp λ ln X 2 ) = ln 2 0 exp λ ln x2 f0 (x)dx , then:
                                 h         α
                                                    i
                                   ln(2bα 1−α ) − 1
                        λ ln λ                            ln 2
              q0 (λ) =         +                      λ−        ln λ + m + o(1)
                       (1 − α)         (1 − α)           2 ln α




238
                                                                              15.6   Proofs

if and only if
                                             D
                                 f0 (x) ∼        exp(−exc ),
                                       x→∞ xd

with:                                                     α
                                                α− 1−α
                           c = 2(1 − α),   e=           ,
                                              2b(1 − α)
                                            "    (1−d)/c   #
                      (1 − α)                     2         π 1/2
                 d=α+         ln 2,   m = ln 2D                   .
                       ln(α)                      ec        c


Proof of proposition 15.1. The theorem 15.2. gives the first implication.
Reciprocally, we note f0 (x) = D|x|−d exp(−e|x|c )h(|x|). As f0 is equivalent to Dx−d exp(−exc )
and integrable, the function h has the following properties: limx→∞ h(x) = 1, and on any
intervals [0, B] with B > 0, there exist two constants AB > 0 and βB ≤ 1 such that for
each x ∈ [0, B]: h(x) < AB xd−βB . In particular, ∀x ∈ R+ , we have h(x) ≤ A1 xd−β1 + C
where C = sup {h(x), x > 1}.
By using lemma 15.1, we would like to obtain an equivalent of:
                                            Z ∞                     
            q0 (λ) = ln E exp λ ln X 2 = ln 2    exp λ ln x2 f0 (x)dx ,
                                                  
                                                    0

We have:

                                         D
                     exp λ ln x2 f0 (x) = d exp {2λ ln x − exc } h(x).
                        
                                         x

                                                                                     2 1/c
The function x → 2λ ln x − exc reaches its maximum in x = Ωλ1/c , with Ω =
                                                                                        
                                                                                     ec    .
We do the change of variable: x = Ωuλ1/c , and we obtain:

           Dx−d exp {2λ ln x − exc }
                    n             o
             = exp 2λ ln Ωλ1/c Dλ−d/c u−d Ω−d exp {2λ (ln u − uc /c)} .


The function: u → ln u − uc /c reaches its maximum in: um = 1. After the change of
variable, h(x) becomes h(Ωuλ1/c ). We analyze its behavior in infinity and around 0:
(i) behavior of h(Ωuλ1/c ) in infinity: let ε > 0 and u0 > 0 be fixed, then there exists λu0
such that ∀u > u0 and ∀λ > λu0 :

                                    h(Ωuλ1/c ) − 1 < ε.




                                                                                        239
15    Extremes of alpha-ARCH Models

(ii) behavior of h(Ωuλ1/c ) around 0: for δ > 0, we have:
              Z um −δ
                      h(Ωuλ1/c )u−d exp {2λ (ln u − uc /c)}
                0
              Z um −δ                                 
          <             A1 Ωd−β1 λ(d−β1 )/c u−β1 + Cu−d exp {2λ (ln u − uc /c)} du,
                 0


We can use lemma 15.1 (by taking account of (i) and (ii)), with the functions:

                                      ϕ(u) = u−d ,
                                      ψ(u) = 2(ln u − uc /c).

Remember that:
                                      n            o
                     q0 (λ) = ln 2D exp 2λ ln Ωλ1/c λ(1−d)/c Ω1−d
                                  Z ∞                              
                                      h(Ωuλ1/c )ϕ(u) exp {λψ(u)} du .
                                          0


We have then a = 0, b = ∞, and c = 1. The steps 1, 2 and 3 are the same by taking
account of the remark (i).
For the step 4, we obtain that the integral is undervalued by (remark (ii)):
          Z 1−δ
                h(Ωuλ1/c )ϕ(u) exp {2λψ(u)} du
           0
                  < e(λ−1)ψ(1)−(λ−1)µ
                   Z 1                                
                        A1 Ωd−β1 λ(d−β1 )/c u−β1 + Cu−d exp {2 (ln u − uc /c)} du.
                     0


But, e−λµ = o λ(β1 −d)/c−1/2 ∨ λ−1/2 , and we can conclude in the same way.
                                    

Finally, we obtain that:
                                      h           α
                                                          i
                           λ ln λ         ln(2bα 1−α ) − 1          ln 2
               q0 (λ) =           +                           λ−          ln λ + m + o(1).
                          (1 − α)             (1 − α)              2 ln α

Proof of theorem 15.3. We note:
                                            Z ∞                        
                                                 2              2
                                                          
              q(λ) = ln E(exp λ ln X ) = ln 2        exp λ ln x f (x)dx
                                                0
           pa (αλ) = ln E exp (αλ) ln a/b + Xt2α /α
                                                       
                         Z ∞                                     
                                                   2α
                                                     
                   = ln 2     exp (αλ) ln a/b + x       /α f (x)dx .
                                 0




240
                                                                                        15.6   Proofs

The following are equivalent:

             f (x) ∼     f0 (x) ⇔ q(λ) = q0 (λ) + o(1)             (Proposition 15.1)
                   x→∞


But,

                q0 (λ) = q0 (αλ) + λ ln λ + λ(ln 2b − 1) + ln 2/2 + o(1)
                 q(λ) = pa (αλ) + λ ln λ + λ(ln 2b − 1) + ln 2/2 + o(1)

and then,

              f (x) ∼        f0 (x)
                   x→∞
       ⇔      pa (αλ) − q0 (αλ) = o(1)
       ⇔      pa (αλ) − q(αλ) = o(1)
              R∞
                        λ ln a/b + x2α f (x)dx
                                      
               0 exp
       ⇔           R∞
                                  2α
                                                  → 1
                    0 exp {λ ln x } f (x)dx
                                                 λ→∞
              R∞             2α    exp λ ln(1 + a/bx2α ) − 1 f (x)dx
                                                          
               0 exp λ ln x R
       ⇔                        ∞           2α
                                                                      → 0
                               0 exp {λ ln x } f (x)dx
                                                                     λ→∞
              R∞             2α    exp λ ln(1 + a/bx2α ) − 1 k(x)f0 (x)dx
                                                          
               0 exp λ ln x R
       ⇔                        ∞           2α
                                                                           → 0,
                               0 exp {λ ln x } k(x)f0 (x)dx
                                                                          λ→∞


where k is a function such that limx→∞ k(x) = 1.
To obtain an equivalent of the last one, we cut the integral in two parts:
                                  Z ∞ Z xλ Z ∞
                                       =      +       .
                                       0        0        xλ


The difficulty is to find a good speed for xλ . To do it, let xλ = λv .
For x > xλ , we have:

                                                                  aλ1−2αv
                                                                           
                                           2α
                         
                   exp λ ln(1 + a/bx ) − 1 < exp                                − 1.
                                                                     b

We suppose that we have the following condition:

                                1 − 2αv < 0         or   v > 1/2α.                             (15.13)

Let ε > 0, there exists λ0 such that for each λ > λ0 :
            R∞             2α   exp λ ln(1 + a/bx2α ) − 1 k(x)f0 (x)dx
                                                         
             xλ exp λ ln x                                              ε
                           R∞
                                          2α } k(x)f (x)dx
                                                                       < .
                             0 exp {λ ln x          0                   2



                                                                                                  241
15    Extremes of alpha-ARCH Models

We must now prove that the second part also tends to 0. To do it, we do the same
operations as in the previous proof. We do the change of variable:

                                       x = Ωu(αλ)1/c .

The boundaries of the integral are modified:
                                Z xλ       Z Ω−1 α−1/c λv−1/c
                                       →                        ,
                                 0          0


and if:
                                1                            1
                          v−      <0        or      v<            ,           (15.14)
                                c                        2(1 − α)

then λv−1/c tends to 0 when λ tends to infinity. If we use the end of the proof lemma
15.1, we can deduce that:
        Z xλ                               Z ∞                             
                       2α                                   2α
                                                    
             exp λ ln x   k(x)f0 (x)dx = o        exp λ ln x    k(x)f0 (x)dx .
          0                                        0


We want to prove now that also:
               Z xλ
                    exp λ ln x2α exp λ ln(1 + a/bx2α ) k(x)f0 (x)dx
                                    
                0
                       Z ∞                            
                                        2α
                                 
                    =o        exp λ ln x   k(x)f0 (x)dx .
                            0


To do it, we do the same change of variable. Respect to the previous one, we have an
additional part:
                                       n                           o
           exp λ ln(1 + a/bx2α ) = exp λ ln 1 + a/ b(Ωu(αλ)1/c )2α
               
                                                                         .


Furthermore:
      Z xλ
           exp λ ln x2α exp λ ln(1 + a/bx2α ) k(x)f0 (x)dx
                                
       0
              exp 2αλ ln Ωλ1/c
                                    
           =                           ×
                      λ(d−1)/c
                  Z Ω−1 α−1/c λv−1/c
                                     Dk(Ωuλ1/c ) 1−d
             ....                               Ω
                   0                     ud
                                                                     
                                              2α       a              c
                                 exp λ ln u + 2α                 − 2αu /c   du.
                                                   bΩ (αλ)2α/c




242
                                                                                     15.6   Proofs

We note:
                                                                            
                               −1           a 2α                                 c
                ψλ (u) = α    ln u + 2α                                − 2αu /c ,
                                        bΩ (αλ)2α/c
                    cλ = arg max ψλ (u).
                                 u∈[0,∞[


We have the following properties:
- limλ→∞ cλ = 1, moreover:
                                                                        
                                    a    1                        1
                         cλ = 1 −     2α
                                               +o                            .
                                  bcΩ (αλ)2α/c                   λ2α/c

- on any interval [U, ∞[ with U > 0, there is uniform convergence of ψλ to ψ.
Then we deduce that there exists λ1 such that ∀λ > λ1 :

                                    ψλ (1 − δ) − ψ(1) < 0.

And, ∀u < 1 − δ:
                                    ψλ (u) − ψλ (1 − δ) < 0,

the end of the proof of lemma 15.1 (step 4) is valid and we can conclude in the same
way.
If α > 1/2, one can find a v which satisfies the constraints (15.13) and (15.14), and then:


                                    q(αλ) − pa (αλ) = o(1).

On the contrary, if we suppose that α ≤ 12 , then there exists λm such that um − δ < u <
um + δ and ∀λ > λm :
                                                                  1−2α

                                              1/c 2α        aλ (1−α)
                       λ ln(1 + a/b(Ωuλ            ) )>                  ,
                                                        2b(um + δ)2α Ω2α

and it follows that:
                                        q(αλ) − pa (αλ) 6→ 0.

At least, we conclude that:

                              f (x) ∼         f0 (x) ⇔ 1/2 < α < 1.
                                    x→∞


An application of the Hospital rule yields the shape of F̄ .




                                                                                              243
15    Extremes of alpha-ARCH Models

Proof of theorem 15.6. We define the sequences:

                        ln n 2/c 2 ln n 2/c−1
                                                               
                                                 f     ln n     ln 2D
            dZ
             n   =              +               − ln          +         ,
                          e       c   e          ec      e         e
                      2 ln n 2/c−1
                             
            cZ
             n   =                  ,
                      ec    e

such that if:
                                      uZ         Z              Z
                                       n (τ ) = cn (− ln τ ) + dn ,


then:
                                  n 1 − FZ (uZ
                                                    
                                             n (τ ))  → τ.
                                                             n→∞

Since (Xt )t∈N is geometrically strong mixing, (Zt )t∈N is geometrically strong mixing too,
and then the condition D(uZ  n (τ )) holds for (Zt ) with an upper bound αn,ln ≤ Constρ
                                                                                         ln

such that ρ < 1.
We introduce now an auxiliary process (Yt )t∈N :

                                         Yt = ln Xt2 = ln Zt .

We have then:                                           a       
                          Yt = αYt−1 + ln(b2t ) + ln 1 + e−αYt−1 .
                                                         b
We note:                                                      a       
                     Ut = ln(b2t )        and      Pt = ln 1 + e−αYt−1 ,
                                                               b

and we define the autoregressive process of order 1 (Mt )t∈N , in the following way:

                                       M0 = Y0 ,
                                        Mt = αMt−1 + Ut .

We have then:
                                                       t−1
                                                       X
                                 Vt = Yt − Mt =              αj Pt−j .
                                                       j=0


Remark here that the random variables Pt and Vt are always positive and that:

              n 1 − FY (uYn (τ )) → τ ,     with uYn (τ ) = ln(uZ
                                 
                                          n→∞                   n (τ )).


Let u be a threshold. We define Nu = inf {j ≥ 1|Yj ≤ u}.




244
                                                                                              15.6   Proofs

If we suppose that Y0 > u, then we have for any t ≤ Nu :

                                      Mt ≤ Yt ≤ Mt + κ(u),               a.s.,

with:
                                                           a
                                            κ(u) =              e−αu .
                                                       b(1 − α)

Now, we want to check the condition D0 (uZ
                                         n (τ )), i.e.:
                                           pn
                                           X
                                                 P Z0 > uZ         Z
                                                  
                                   lim n                 n , Zj > un = 0.
                                  n→∞
                                           j=1


Since uZ                                  Z    u
       n → ∞ when n → ∞, we suppose that un > e . We have:
              pn
              X                                          pn
                                                         X
                            Z0 > uZ          Z
                                                              P j > N u , Z 0 > uZ          Z
                                                              
          n         P             n , Z j > un     ≤n                            n , Z j > un
              j=1                                        j=1
                                                          Xpn
                                                                 P j ≤ N u , Z 0 > uZ          Z
                                                                  
                                                      +n                            n , Z j > un
                                                           j=1

                                                   ≤ I1 + I2

To get an upper bound of I1 , we show first, as Borkovec (1999), that there exist constants
C > 0 and n0 ∈ N such that for any n > n0 , z ∈ [0, eu ], k ∈ N∗ :

                                        nP (Zk > uZ
                                                  n |Z0 = z) ≤ C.


Assume that it does not hold. Choose C and N > 0 arbitrary and η > 0 small. There
exist n > N , z ∈ [0, eu ] and δ(η) > 0, such that for any y ∈]z − δ, z + δ[∩[0, eu ], we have:

                                      nP (Zk > uZ
                                                n |Z0 = y) > C − η.


But, we have also:
                                        lim n 1 − FZ (uZ
                                                              
                                        n→∞            n (τ )) = τ,


for any τ as small as you want, and:
                                  Z ∞
                       Z
                                      nP (Zk > uZ
                            
          n 1 − FZ (un (τ )) =                  n |Z0 = y)dFZ (y)
                                  Z0
                              ≥                nP (Zk > uZn |Z0 = y)dFZ (y)
                                                 ]z−δ,z+δ[∩[0,eu ]
                                        > (C − η)P (Z0 ∈]z − δ, z + δ[∩[0, eu ])
                                        ≥ (C − η)D



                                                                                                       245
15    Extremes of alpha-ARCH Models

where D = inf z∈[0,eu ] (FZ (z + δ) − FZ (z)) > 0 because FZ is continuous. Since C > 0 is
arbitrary, there is a contradiction.
Now, we have:
                                     pn X
                                     X  j−1
                                                nP Nu = l, Z0 > uZ          Z
                                                  
                            I1 ≤                                 n , Z j > un
                                     j=1 l=1
                                     pn X
                                     X  j−1
                                                nP Z0 > uZ          u         Z
                                                  
                                 ≤                       n , Z l < e , Z j > un
                                     j=1 l=1


Let Cn =]uZ                        u
          n , ∞[ and D = [0, e ]. We note : X1 = Z0 , X2 = Zl , X3 = Zj . We have :

      P Z0 > uZ              u          Z
        
                 n , Z l < e , Z j > un
          Z
        =      I{x1 ∈Cn ,x2 ∈D,x3 ∈Cn } PX1 ,X2, X3 (x1 , x2 , x3 )dx1 dx2 dx3
              R3
             Z +
         =           I{x1 ∈Cn ,x2 ∈D,x3 ∈Cn } PX3 |X2 =x2 ,X1 =x1 (x3 )dx3 PX2 |X1 =x1 (x2 )dx2
              R3+

                     PX1 (x1 )dx1
             Z
         =           I{x1 ∈Cn ,x2 ∈D,x3 ∈Cn } PX3 |X2 =x2 (x3 )dx3 PX2 |X1 =x1 (x2 )dx2 PX1 (x1 )dx1
              R3+
             Z
         =           P (X3 ∈ Cn |X2 = x2 )I{x1 ∈Cn ,x2 ∈D} PX2 |X1 =x1 (x2 )dx2 PX1 (x1 )dx1
              R2+
                 Z
             C
         ≤                I{x1 ∈Cn ,x2 ∈D} PX2 |X1 =x1 (x2 )dx2 PX1 (x1 )dx1
             n      R2+
             C                       C                Cτ
         ≤     P (X1 ∈ Cn , X2 ∈ D) ≤ P (X1 ∈ Cn ) ∼     .
             n                       n            n→∞ n2

At least, we have:
                                                 pn
                                                 X    2Cτ     p2
                                          I1 ≤      j     ≤ Cτ n
                                                       n       n
                                                 j=1

Furthermore, we have:
                                        pn
                                        X
                                              P M0 > uYn , Mj > uYn − κ(u) .
                                               
                               I2 ≤ n
                                        j=1


Moreover, Mk = Uk + ... + αk−1 U1 + αk M0 and then:
                                  n                                 o
              Mk > uYn − κ(u) ⊂ Uk + ... + αk−1 U1 > (uYn − κ(u))/2
            
                                       n                    o
                                    ∪ αk M0 > (uYn − κ(u))/2 ,



246
                                                                                       15.6   Proofs

hence:
             P M0 > uYn , Mj > uYn − κ(u)
              
                  n                                o
              ≤ P M0 > uYn , αk M0 > (uYn − κ(u))/2
                                   n                              o
                + P M0 > uYn P Uk + ... + αk−1 U1 > (uYn − κ(u))/2 .
                   


Note that α > 1/2. We choose ε > 0 such that 1 + ε < 1/(2α). It exists nu such that
for all n > nu , we have :
                      (uYn − κ(u))   (uYn − κ(u))
                                   >              > (1 + ε)uYn > uYn .
                           2αk            2α

We deduce that :
                    n                               o
                           Y    k       Y
                   P M0 > un , α M0 > (un − κ(u))/2
                                             n                     o
                    ≤ P M0 > (1 + ε)uYn = P Z0 > (uZ         (1+ε)
                       
                                                      n (τ ))        .

But, we have :
                                         2(1+ε)/c
                                   ln n
            (uZ
              n (τ ))
                     (1+ε)
                           =                          A(1+ε)
                                                       n     (τ ),   où lim An (τ ) = 1,
                                     e                                  n→∞


and then :
        n                   o
      P Z0 > (uZ
               n (τ ))(1+ε)

             n                                                                   o
                                                      2(1+ε)/c (1+ε)
        ≤ exp −(ln n)(1+ε) Ac/2
                              n (τ ) − f ln   (ln n/e)        A n    (τ )  + ln(2D)
             n                o
        ≤ exp −2(ln n)(1+ε)

for any n big enough.
Furthermore, it is easy to see that the bigger k, the heavier the distribution tail of the
random variable Uk + ... + αk−1 U1 , by using lemma 1.6.1 for example. And in the same
way as before, we have that for any n big enough:
            n                                    o
         P Uk + ... + αk−1 U1 > (uYn − κ(u))/2 ≤ P Y0 > (uYn − κ(u))/2
                                                        
                                                          n              o
                                                    ≤ exp −2(ln n)1/2−ε

It follows that:
                                                   n              o
           I2 ≤ pn const exp −2(ln n)1+ε + const exp −2(ln n)1/2−ε
                              
                            n              o
           I2 ≤ pn const exp −2(ln n)1/2−ε



                                                                                                247
15    Extremes of alpha-ARCH Models

where const is a generic constant.
Finally, by choosing:
                    h  n          oi                           h   n          oi
               pn = exp (ln n)1/4                  and     ln = exp (ln n)1/8

then all the conditions for D0 (uZ  n (τ )) are verified, the statement follows: the extremal
index of (Zt ), θZ , exists and is equal to one.


15.7     Conclusion

We observe quite different extremal behaviors depending on whether α = 1 or α < 1. In
the first case, we observe Pareto-like tails and an extremal index which is strictly less
than one. In the second case, for α > 1/2, the tails are Weibull–like and the extremal
index is equal to one.

                                            APPENDIX

Appendix 1:
We define the functions:
                    g1 (λ) = λ ln λ,        g2 (λ) = λ,    and     g3 (λ) = ln λ.

We have then:
                          g1 (λ) − g1 (αλ) = (1 − α)λ ln λ − λα ln α,
                          g2 (λ) − g2 (αλ) = (1 − α)λ,
                          g3 (λ) − g3 (αλ) = − ln α.

There exist three constants a1 , a2 et a3 such that:
              a1 (g1 (λ) − g1 (αλ)) + a2 (g2 (λ) − g2 (αλ)) + a3 (g3 (λ) − g3 (αλ))
                                                    = λ ln λ + λ(ln 2b − 1) + ln 2/2,

which are given by:
                                        h          α
                                                          i
                      1                     ln 2bα 1−α − 1                           ln 2
            a1 =           ,     a2 =                             et     a3 = −            .
                   (1 − α)                      (1 − α)                             2 ln α

And then,
                   q0 (λ) − q0 (αλ) =a1 (g1 (λ) − g1 (αλ)) + a2 (g2 (λ) − g2 (αλ))
                                       + a3 (g3 (λ) − g3 (αλ)) + O(1/λ).



248
                                                                         15.7   Conclusion

Remark now that if s is a function such that s(λ) ∼ c/λ with c different from 0, then:
                                                    λ→∞

                                                  c(1 − 1/α)
                              s(λ) − s(αλ) ∼
                                              λ→∞      λ
At least, we note C the set of continuous fonctions from R+ to R, and we define the
application Ψ : C → C such that Ψ(f ) = fα and fα (λ) = f (λ) − f (αλ), ∀λ ∈ R+ . The
kernel of this linear application is the set of the constants.
With all these elements, we deduce that:
                             h       α
                                              i
                    λ ln λ    ln 2bα 1−α   − 1       ln 2
          q0 (λ) =         +                     λ−        ln λ + m + O(1/λ).
                   (1 − α)        (1 − α)           2 ln α

Appendix 2: The process (Yt ) is defined by:

                                   Yt = [Xt ] + Ut − 0.5.

We have the following inequalities:

                  −0.5 ≤ Ut − 0.5 ≤ 0.5       and    Xt − 1 < [Xt ] ≤ Xt ,

and then,
                                Xt − 1.5 < Yt ≤ Xt + 0.5.
We deduce that:
                   P (Xt > x + 1.5)   P (Yt > x)   P (Xt > x − 0.5)
                                    ≤            ≤                  .
                      P (Xt > x)      P (Xt > x)      P (Xt > x)
But, we have also:

                                                1 f       ecxc−1
                                                              
                P (Xt > x − 0.5)
                                  ∼        1−       exp             → 1,
                   P (Xt > x)    x→∞           2x           2      x→∞

                                                3 f         3ecxc−1
                                                                 
                P (Xt > x + 1, 5)
                                   ∼        1+      exp −              → 1,
                   P (Xt > x)     x→∞          2x              2      x→∞

and finally we obtain:
                               P (Yt > x) ∼ P (Xt > x) .
                                          x→∞




Bibliography

Beirlant, J., Broniatowski, M., Teugels, J. & Vynckkier, P. (1995). The mean residual life
     function at great age: Applications to tails estimation, J. Stat. Plann. Inf 45: 21–48.



                                                                                        249
15    Extremes of alpha-ARCH Models

Bollerslev, T. (1986). Generalized autoregressive conditional heteroscedasticity, J.
     Econometrics 31: 307–327.

Bollerslev, T., Chou, R. & Kroner, K. (1992). Arch modelling in finance, J. Econometrics
     52: 5–59.

Borkovec, M. (1999). Extremal behavior of the autoregressive process with arch(1)
    errors, Technical report, University of München.

Breidt, F. & Davis, R. (1998). Extremes of stochastic volatility models, Ann. Appl.
     Probab 8: 664–675.

Cont, R., Potters, M. & Bouchaud, J. (1997). Scaling in stock market data: Stable law
    and beyond, in D. et al. (ed.), Scale Invariance and Beyond, Springer, Berlin.

Davis, R., Mikosch, T. & Basrak, C. (1999). Sample acf of stochastic recurrence equations
    with application to garch, Technical report, University of Groningen.

Diebolt, J. & Guegan, D. (1991). Le modèle de série chronologique autorégressive β-arch,
    Acad. Sci. Paris 312: 625–630.

Embrechts, P., C., K. & Mikosch, T. (1997). Modelling Extremal Events, Springer,
   Berlin.

Engle, R. (1982). Autoregressive conditional heteroscedasticity with estimates of the
    variance of united kingdom inflation, Econometrica 50: 987–1008.

Gourieroux, C. (1997). ARCH Models and Financial Applications, Springer, Berlin.

Gourieroux, C., Jasiak, J. & Le Fol, G. (1999). Intraday market activity, Journal of
    Financial Markets 2: 193–226.

Haan, L. D., Resnick, S., Rootzen, H. & Vries, C. D. (1989). Extremal behaviour of
    solutions to a stochastic difference equation with application to arch processes,
    Stoch. Proc Appl. 32: 213–224.

Leadbetter, M., Lindgren, G. & Rootzen, H. (1983). Extremes and Related Properties
    of Random Sequences and Processes, Springer, Berlin.

Leadbetter, M. & Rootzen, H. (1988). Extremal theory for stochastic processes, Ann.
    Probab. 16: 431–478.

Mandelbrot, B. (1963). The variation of certain speculative prices, J. Business 36: 394–
   419.

Mikosch, T. & Starica, C. (1998). Limit theory for the sample autocorrelations and
    extremes of a garch(1,1) process, Technical report, University of Groningen.

Perfect, C. (1994). Extremal behavior of stationary markov chains with applications,
     Ann. Appl. Probab 4: 529–548.



250
                                                                       15.7   Conclusion

Resnick, S. (1987). Extreme Values, Regular Variation, and Point Processes, Springer,
    Berlin.

Robert, C. (2000). Mouvement extrêmes des séries financières haute fréquence, Finance
    .

Smith, R. & Weismann, L. (1994). Estimating the extremal index, Journal of the Royal
    Statistical Society B 56: 515–528.




                                                                                     251



---
normalized_id: shared-pdf-reference-stochastic-modeling-in-economics-and-finance-jan-hurt
exam_code: SHARED
material_scope: stochastic modeling in economics and finance - jan hurt.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Stochastic Modeling in Economics and Finance - Jan Hurt.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-stochastic-modeling-in-economics-and-finance-jan-hurt

Stochastic Modeling in Economics and Finance
Applied Optimization
Volume 75


Series Editors:
Panos M. Pardalos
University of Florida, U.S.A.

Donald Hearn
University of Florida, U.S.A.
Stochastic Modeling in
Economics and Finance
by



Jan Hurt
and




Department of Probability and Mathematical Statistics,
Faculty of Mathematics and Physics,
Charles University, Prague




KLUWER ACADEMIC PUBLISHERS
NEW YORK, BOSTON, DORDRECHT, LONDON, MOSCOW
eBook ISBN:       0-306-48167-7
Print ISBN:       1-4020-0840-6



©2003 Kluwer Academic Publishers
New York, Boston, Dordrecht, London, Moscow

Print ©2002 Kluwer Academic Publishers
Dordrecht

All rights reserved


No part of this eBook may be reproduced or transmitted in any form or by any means, electronic,
mechanical, recording, or otherwise, without written consent from the Publisher


Created in the United States of America


Visit Kluwer Online at:            http://kluweronline.com
and Kluwer's eBookstore at:        http://ebooks.kluweronline.com
To my husband Václav




To Jarmila, Eva, and in memory of my parents
                                        Jan Hurt




To my wife Iva




                       v
CONTENTS

Preface                                        xi
Acknowledgments                               xiii

Part I Fundamentals
I.1 Money, Capital, and Securities              1
      1.1 Money and Capital                     1
      1.2 Investment                            1
      1.3 Interest                              1
      1.4 Cash Flows                            2
      1.5 Financial and Real Investment         2
      1.6 Securities                            3
      1.7 Financial Market                     12
      1.8 Financial Institutions               12
      1.9 Financial System                     12
I.2 Interest Rate                              13
     2.1 Simple and Compound Interest          13
     2.2 Calendar Conventions                  14
     2.3 Determinants of the Interest Rate     15
     2.4 Decomposition of the Interest Rate    16
     2.5 Term Structure of Interest Rates      18
     2.6 Continuous Compounding                19
I.3 Measures of Cash Flows                     21
     3.1 Present Value                         21
     3.2 Annuities                             23
     3.3 Future Value                          24
     3.4 Internal Rate of Return               26
     3.5 Duration                              29
     3.6 Convexity                             30
     3.7 Comparison of Investment Projects     31
     3.8 Yield Curves                          36
I.4 Return, Expected Return, and Risk          39
     4.1 Return                                39
     4.2 Risk Measurement                      43
I.5 Valuation of Securities                    48
     5.1 Coupon Bonds                          48
     5.2 Options                               52
     5.3 Forwards and Futures                  63
I.6 Matching of Assets and Liabilities         64
     6.1 Matching and Immunization             64
     6.2 Dedicated Bond Portfolio              65
     6.3 A Stochastic Model of Matching        67
I.7 Index Numbers and Inflation                68
     7.1 Construction of Index Numbers         68
      7.2 Stock Exchange Indicators            70
      7.3 Inflation                            71

                                       vii
I.8 Basics of Utility Theory                                               73
     8.1 The Concept of Utility                                            73
     8.2 Utility Function                                                  73
     8.3 Characteristics of Utility Functions                              74
     8.4 Some Particular Utility Functions                                 75
     8.5 Risk Considerations                                               76
     8.6 Certainty Equivalent                                              77
I.9 Markowitz Mean-Variance Portfolio                                      79
     9.1 Portfolio                                                         80
     9.2 Construction of Optimal Portfolios and Separation Theorems        81
I.10 Capital Asset Pricing Model                                           92
     10.1 Sharpe-Lintner Model                                             92
     10.2 Security Market Line                                             93
     10.3 Capital Market Line                                              95
I.11 Arbitrage Pricing Theory                                              96
     11.1 Regression Model                                                 96
     11.2 Factor Model                                                     97
I.12 Bibliographical Notes                                                101

Part II Discrete Time Stochastic Decision Models
II.1 Introduction and Preliminaries                                       103
     1.1 Problem of a Private Investor                                    104
     1.2 Stochastic Dedicated Bond Portfolio                              105
     1.3 Mathematical Programs                                            106
II.2 Multistage Stochastic Programs                                       108
     2.1 Basic Formulations                                               108
     2.2 Scenario-Based Stochastic Linear Programs                        112
     2.3 Horizon and Stages                                               115
     2.4 The Flower-Girl Problem                                          117
     2.5 Comparison with Stochastic Dynamic Programming                   119
II.3 Multiple Criteria                                                    123
     3.1 Theory                                                           123
     3.2 Selected Applications to Portfolio Optimization                  127
     3.3 Multi-Objective Optimization and Stochastic Programming Models   131
II.4 Selected Applications in Finance and Economics                       137
     4.1 Portfolio Revision                                               137
     4.2 The BONDS Model                                                  139
     4.3 Bank Asset and Liability Management – Model ALM                  141
     4.4 General Features of Multiperiod Stochastic Programs in Finance   144
     4.5 Production Planning                                              148
     4.6 Capacity Expansion of Electric Power Generation Systems – CEP    150
     4.7 Unit Commitment and Economic Power Dispatch Problem              153
     4.8 Melt Control: Charge Optimization                                154
II.5 Approximation Via Scenarios                                          158
     5.1 Introduction                                                     158
     5.2 Scenarios and their Generation                                   159
     5.3 How to Draw Inference about the True Problem                     164

                                      viii
     5.4 Scenario Trees for Multistage Stochastic Programs           169
II.6 Case Study: Bond Portfolio Management Problem                   180
     6.1 The Problem and the Input Data                              180
     6.2 The Model and the Structure of the Program                  182
     6.3 Generation of Scenarios                                     187
     6.4 Selected Numerical Results                                  190
     6.5 “What if” Analysis                                          192
     6.6 Discussion                                                  197
II.7 Incomplete Input Information                                    199
      7.1 Sensitivity for the Black-Scholes Formula                  199
      7.2 Markowitz Mean-Variance Model                              200
      7.3 Incomplete Information about Liabilities                   204
II.8 Numerical Techniques and Available Software (by Pavel Popela)   206
     8.1 Motivation                                                  206
     8.2 Common Optimization Techniques                              208
     8.3 Solution Techniques for Two-Stage Stochastic Programs       214
     8.4 Solution Techniques for Multistage Stochastic Programs      218
     8.5 Approximation Techniques                                    224
      8.6 Model Management                                           226
II.9 Bibliographical Notes                                           228
Part III Stochastic Analysis and Diffusion Finance
III.1 Martingales                                                    231
      1.1 Stochastic Processes                                       231
      1.2 Brownian Motion and Martingales                            238
      1.3 Markov Times and Stopping Theorem                          244
      1.4 Local Martingales and Complete Filtrations                 252
      1.5                 and Density Theorem                        257
      1.6 Doob-Meyer Decomposition                                   263
      1.7 Quadratic Variation of Local Martingales                   269
      1.8 Helps to Some Exercises                                    275
III.2 Stochastic Integration                                         277
      2.1 Stochastic Integral                                        277
      2.2 Stochastic Per Partes and Itô Formula                      286
      2.3 Exponential Martingales and Lévy Theorem                   295
      2.4 Girsanov Theorem                                           300
      2.5 Integral and Brownian Representations                      308
      2.6 Helps to Some Exercises                                    316
III.3 Diffusion Financial Mathematics                                319
      3.1 Black-Scholes Calculus                                     319
      3.2 Girsanov Calculus                                          333
      3.3 Market Regulations and Option Pricing                      350
      3.4 Helps to Some Exercises                                    363
III. 4 Bibliographical Notes                                         366

References                                                           369
Index                                                                377

                                         ix
PREFACE
     The three authors of this book are my colleagues (moreover, one of them is
my wife). I followed their work on the book from initial discussions about its con
cept, through disputes over notation, terminology and technicalities, till bringing
the manuscript to its present form. I am honored by having been asked to write the
preface.
     The book consists of three Parts. Though they may seem disparate at first
glance, they are purposively tied together. Many topics are discussed in all three
Parts, always from a different point of view or on a different level.
     Part I presents basics of financial mathematics including some supporting topics,
such as utility or index numbers. It is very concise, covering a surprisingly broad
range of concepts and statements about them on not more than 100 pages. The
mathematics of this Part is undemanding but precise within the limits of the chosen
level. Being primarily an introductory text for a beginner, Part I will be useful to
the enlightened reader as well, as a manual of notions and formulas used later on.
     The more extensive Part II deals with stochastic decision models. Multistage
stochastic programming is the main methodology here. The scenariobased approach
is adopted with special attention to scenarios generation and via scenarios appro
ximation. The output analysis is discussed, i.e. the question how to draw inference
about the true problem from the approximating one. Numerous applications of the
presented theory vary from portfolio optimal control to planning electric power ge
neration systems or to managing technological processes. A case study on a bond
investment problem is reported in detail. A survey of numerical techniques and
available software is added. Mathematics of Part II is still of standard level but the
application of the presented methods may be laborious.
     The final Part III requires from the reader higher mathematical education inclu
ding measuretheoretical probability theory. In fact, Part III is a brief textbook on
stochastic analysis oriented to what is called diffusion financial mathematics. The
apparatus built up in chapters on martingales and on stochastic integration leads to
a precise formulation and to rigorous proving of many results talked about already
in Part I. The author calls his proofs honest; indeed, he does not facilitate his task
by unnecessarily simplifying assumptions or by skipping laborious algebra.
      The audience of the book may be diverse. Students in mathematics interested
in applications to economics and finance may read with benefit all Parts I,II,III and
then study deeper those topics they find most attractive. Students and researchers
in economics and finance may learn from the book of using stochastic methods in
their fields. Specialists in optimization methods or in numerical mathematics will get
acquainted with important optimization problems in finance and economics and with
their numerical solution, mainly through Part II of the book. The probabilistic Part
III can be appreciated especially by professional mathematicians; otherwise, this
Part will be a challenge to the reader to raise his/her mathematical culture. After
all, a challenge is present in all three Parts of the book through numerous unsolved
exercises and through suggestions for further reading given in bibliographical notes.
      I wish the book many readers with deep interest.



                                          xi
ACKNOWLEDGMENTS
      This volume could not come into being without support of several institutions
and a number of individuals. We wish to express our sincere gratitude to every one
of them.
                                                                          1
      First of all we thank to Ministry of Education of Czech Republic , Grant Agency
of Czech Republic2 and Directorate General III (Industry) of the European Com-
mission3 who supported the scientific and applied projects listed below that sub-
stantially influenced the contents and form of the text. We gratefully acknowledge
the financial support from the companies NEWTON Investment Ltd and ALAX Ltd
and appreciate the particularly helpful technical assistance provided by the Czech
Statistical Office.
      The authors are very indebted to Pavel Popela from the Brno University of
Technology who, using his extensive experience with the numerical solutions to
the problems in the field of Stochastic Programing, wrote Chapter II.8. Horrand
I. Gassmann from the Dalhousie University read very carefully this Chapter and
offered some valuable proposals for improvements. We thank also Marida Bertocchi
from the University of Bergamo whose effective cooperation within the project (3)
influenced the presentation of results in Chapter II.6.
      We have to say many thanks, indeed, to our colleagues and friends
and Josef Machek who agreed to read the text. They expended a great effort using
their extensive knowledge both of Mathematics and English to make many invaluable
suggestions, pressing for higher clarity and consistency of our presentation. Further,
we are particularly grateful to Jaromr Antoch for his invaluable help in the process
of technical preparation of the book. The authors are also indebted to their present
and former PhD students at the Charles University of Prague: Alena Henclová and
               deserve credits for their efficient and swift technical assistance. Part III
owes much to Petr Dostál, Daniel Hlubinka,                         and                who,
cruelly tried out as the first readers, have then become enthusiastic and respected
critics.
      Finally, we thank our publisher Kluwer Academic Publishers and, above all, the
senior editor John R. Martindale for publishing the book.



                                                                 J. Hurt, and




  1
      MSM 1132000008 Mathematical Methods in Stochastics
  2
           402/99/1136,       201/99/0264,       201/00/0770
  3
      INCO’95, HPC/Finance Project, no. 951139

                                           xiii
                                                                                    1

Part I

FUNDAMENTALS

I.1      MONEY, CAPITAL, AND SECURITIES

money, capital, investment, interest, cash flows, financing business, securities, fi-
nancial market, financial institutions, financial system


1.1      Money and Capital
   Money is the means which facilitates the exchange of goods and services. Com-
monly, money appears in forms like banknotes, coins, and bank deposits. There are
three functions ascribed to money: (i) a medium of exchange, (ii) a unit of value,
expressing the value of goods and services in terms of a single unit of measure
(Czech Krones, e.g.), (iii) a store of wealth. Money is, no doubts, better means for
trade than barter (direct exchange of goods or services without monetary consid-
eration), but still insufficient for more complicated and/or sophisticated financial
operations like investment.
   Capital is wealth (usually unspent money) or better to say accumulated money
which is used to produce or generate more wealth via an economic activity.

1.2 Investment
   Individuals or companies face the problem how to handle their income. They can
either spend it immediately, or save it, or partly spend and partly save. In either
of the mentioned possibilities, they must decide how to spend and how to save. In
the latter case (saving), they postpone their immediate consumption in favour of
investment. In that case, they become investors and investment may therefore be
defined as postponed consumption. Usually, the consumption–investment decision
is made so as to maximize the expected utility (level of satisfaction) of the investor.
While the immediate consumption is sure (up to certain limits), the result of an
investment is almost always uncertain. Investments (or assets) can be classified
into two classes; real and financial. A real asset is a physical commodity like land,
a building, a car. A (financial) security or a financial asset represents a claim
(expressed in money terms) on some other economic unit. (see [143], e.g.).

1.3 Interest
   The reward for both postponed consumption and the uncertainty of investment is
usually paid in the form of interest. Interest is a time dependent quantity depending
on, roughly speaking, time to the postponed consumption. Interest in wider sense
is either a charge for borrowed money that is generally a percentage of the amount
borrowed or the return received by capital on its investment. Simply, interest is

                                                                   Typeset by
2             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

the price of deferred consumption paid to ultimate savers. Note that the actual
allocation of savings in a reasonably functioning economy is accomplished through
interest rates, see next Section. In other words, capital in a free economy is allocated
through a certain price system and the interest rate expresses the cost of money.
1.4      Cash Flows
    A cash flow is a stream of payments at some time instances generated by the
investment or business involved. The inflows to the investor have plus sign while
the outflows have minus sign. In accounts, the inflows are called black figures while
outflows are called red or bracket figures since they appear either in red color or in
brackets. As a rule, net cash flows are considered; it means that at any time instant
all inflows and outflows are summed up and only the resulting sum is displayed.
See I.3 for a more detailed analysis of cash flows.

1.4.1 Cash Flows Example. An investor buys an equipment for USD 90000
today. After one year he or she still is not in black figures and the loss is USD
15200. In the successive years 2, 3, 4, 5, 6 the profits (in USD) are 45000, 60000,
25000, 22000, 12000, respectively. At the end of the sixth year the investor sells the
equipment for the salvage value USD 15000. The net cash flow for years 0,..., 6
is (-90000, -15200, 45000, 60000, 25000, 22000, 27000=12000+15000). Graphical
illustration is given in Figure 1.




1.5 Financial and Real Estate Investment
   Since handling money and capital itself is a rather complicated task, there are
financial intermediaries and other financial institutions which should, in principle,
handle money and capital efficiently. Financial institutions are business firms with
assets in the form of either financial assets or claims like stocks, bonds, and loans.
Financial institutions make loans and offer a variety of financial services (invest-
ment, life and general insurance, savings, pensions, credits, mortgages, leasing, real
estates, etc.).
1.5.1    Financing the Business – Description
  Almost every economic activity (of an individual, firm, bank, city, government)
must be financed. In principle, there are two possibilities how to realize it; either
                                  I. FUNDAMENTALS                                      3

from own funds or from outside sources (creditors, debt financing). Own funds of
a company may be increased by issuing stocks resulting in the increase of equity
while the debt financing usually takes form of either bank credit or issuing the debt
instruments like corporate bonds. The better the expected performance of the firm
is, the cheaper funds (money) are available. The financial public look on the perfor-
mance of a firm through the ratings and the prices of financial instruments already
issued by the firm on the market (mainly Stock Exchange). The most important
corporations providing rating are Moody’s Investor Service (shortly Moody’s) and
Standard & Poor’s Corporation (shortly Standard & Poor’s). Both the rating and
price are important signals to the investors.

1.5.2   Financing the Business – Summary
   We have seen that there are three main possible ways of financing; by equity
(issuing stocks), and two ways of debt financing, i.e., by issuing the debt instruments
like corporate bonds or just by acquiring a bank credit. A modern firm uses all
the above possibilities and it is the task of financial managers to balance them. It
is not so surprising that some very prospective American companies have debt to
equity ratio about 70 per cent. The idea is simple; if you borrow at some 7 per cent
and gain 11 per cent from the business, you are better off.
   The fully self-financed company seems to be rather old-fashioned now. The tra-
dition of the European family business may serve as an example. There are rare
exceptions still surviving in these days, even among big firms in Europe. Neverthe-
less, the prosperous debt financed firm makes usually more profit than a comparable
self-financed company.

1.6 Securities
   Security (in what follows here we mean a financial security) is a medium of
investment in the money market or capital market like shares (English) or stocks
(American), bonds, options, mortgages, etc. Security is a kind of financial asset
(everything which has a value or earning power). Speaking in accounting terms,
the holder (purchaser) of it has an asset while the issuer or borrower (seller) has a
liability. Security usually takes the form of an agreement (contract) between the
seller and the purchaser providing an evidence of debt or of property. The holder
of a security is called to be in a long position while the issuer is in a short position.
Security usually gives the holder some of the following rights:
    (1) returning back money or property
    (2) warranted reward
    (3) share on the profit generated by money provided
    (4) share on the property
    (5) right on decision making concerning the use of money provided.
But a security may also be an agreement between two parties (often called Party
and Counterparty) on a financial or real transaction between the two. This is the
case of swaps, partly the case of forwards and futures. It is difficult to say who is
the issuer and who is the holder, in this case.
   The basic types of securities and their forms are listed below. See [143], [138],
[105], [172] for more details.
4               STOCHASTIC MODELING IN ECONOMICS AND FINANCE

1.6.1    Fixed-Income Securities
   Fixed-income securities are debt instruments characterized by a specified ma-
turity date (the date of payoff the debt) and a known schedule of repaying the
principal and interest.

1.6.1.2 Demand Deposits
   Commercial banks and saving societies offer to their clients checking accounts or
demand deposits which are interest bearing but the interest is usually very small.
A better situation is with savings accounts, a type of time deposit. Here money is
saved for a prescribed period of time and any early withdrawal is subject to penalty
which usually does not exceed the interest for the period involved. The interest is
higher than that of applied to demand deposits and sometimes may vary.

1.6.1.3 Certificates of Deposit
    Very popular, particularly for the institutional investors, are the Certificates of
Deposit, shortly CD’s, mainly issued by commercial banks in large denominations.
They also take the form of time deposits with fixed interest but the early withdrawal
is severely penalized. CD’s are usually issued on the discounted base, at a discount
from their face value. Roughly spoken, if you want to buy a CD of the face CZK
1000000, say, payable after one year, you buy it for some CZK 920000. Remember
that the return in this case is not 8 per cent.

1.6.1.4 Treasury Bills
   A typical money market securities issued by the central bank are Treasury bills,
T-bills. Their main purpose is to finance the government or their fiancées. They
have maturities typically varying from weeks to one year and are also issued on the
discount base.
   There is one interesting point in issuing securities of the above type. A careful
government (even the Czech one, now) issues T-bills through the auction. Prior
to each auction, the central bank (representing the government, in many countries
behaving independently of the government) announces the par (face) value of the
security and the upper limit of the bid expressed in terms of the interest rate. Also
the intended volume (total face value) is announced.
   For example, the issuer (the bank in this case), announces that the accepted
offers are up to 8 per cent p.a. It means that the issuer will only accept the offers
below this rate. The submitted bids are collected and ranked according to the
offers with respect to the volume and interest rate. Since the offer of the issuer is
competitive, the investors who wish to catch the offer must carefully choose both
the offered interest and the volume. The strategy of the issuer is the question of
allocation, the problem which will be discussed later.
   Note that similar policy or technique (auction) is also often used by commercial
banks as well as by highly rated firms (rated as blue chips, AAA, in Standard &
Poor’s rating scale).
   For a detailed analysis including a discussion of auctions see [143].
                                   I. FUNDAMENTALS                                        5

1.6.1.5 Coupon Bonds
    A coupon bond is the long-term (usually from 5 to 30 years) financial instrument
issued by either central or local governments (municipals), banks, and corporations.
It is a debt security in which the issuer promises the holder to repay the principal,
par value, face value, redemption value, or nominal value F at the maturity date
and to pay (periodically, at equally spaced dates up to and including the maturity
date) a fixed amount of interest C called coupon for historical reasons. The ratio
c = C / F is called coupon rate, sometimes simply interest. A typical period for the
coupon payment is semiannual, rarely annual, but both the coupon and coupon
rate are expressed on the annual base. The number of periods in a year is called
frequency. In case of semiannually paid coupon, the frequency is 2. The bond is
usually valued at a time instant between the issuing date and the maturity date.
So that more important for the valuation purposes is the length of time to the
maturity date called maturity of the bond. Maturity differs from the whole life of
the bond in that only remaining payments of coupons and principal are considered.
A cash flow coming from a coupon bond is illustrated in Figure 2.




1.6.1.6 Callable Bonds
   The simple coupon bond described above has an obvious disadvantage for the
issuer; if the interest rates fall during the bond life, it is often possible for the issuer
to get cheaper funds, for instance by issuing bonds with lower coupon. The security
which partly gets rid of this feature is callable bond. The situation is the same as
with the usual coupon bonds but in this case, the issuer has the right to buy some
or all issued bonds prior to the original maturity date or to call them, in other
words. Since the earlier repayment of the face value may cause an inconvenience
to the bondholder (particularly with the reinvestment at lower interest than the
coupon), the issuer should pay a reward to the bondholder in the form of call
premium. The call dates and call premiums are stated in the offering statement.
For example, if the bond is called one year before the maturity date, the payment is
101 per cent of the par value, if two years before, the payment is 102 per cent, etc.
The call premium generally decreases with the date of call closer to the maturity
date. Strictly speaking, the callable bond is not a fixed-income security since the
payments coming from it are uncertain and depend both on the issuer policy and
market interest rates.
6               STOCHASTIC MODELING IN ECONOMICS AND FINANCE

1.6.1.7 Zero Coupon Bonds
    A zero coupon bond, shortly zero, or discount bond pays only the face value at
maturity. It is issued at discount to par value (like CD) and it pays par value at
maturity. One reason for issuing such a type of bonds is that in some countries (like
USA) the issuer may deduct the yearly accrued interest from taxes even though the
payment is not made in cash. The bondholder (purchaser) must calculate interest
income in the same way as the issuer calculates the tax deduction and should pay
either corporate or personal tax even though no cash has been received. However,
if the purchaser is a tax-exempt entity, like a pension fund or an individual who
buys the bond for its individual retirement account, it pays no tax from the accrued
interest. See [25] p. 578 for more details.
    A coupon bond may be considered as a series of zero coupon bonds, all but last
with face value equal to the coupon payment, and the last with the face value equal
to the coupon payment plus the face value of the underlying coupon bond. This is
not only a theoretical construction; the coupon components and face value of US
Treasury bonds may be traded separately and such securities are called STRIPS –
Separate Trading of Registered Interest and Principal of Securities. There are also
derivative zero coupon bonds; a brokerage house buys usual coupon bonds, strips
the coupons, and resells the stripped securities as zero coupon bonds.

1.6.1.8 Mortgage-Backed Securities
   A lending institution that loans money for mortgages combines a large group of
mortgages and thus creates a pool. The mortgage-backed (pass-through) security
is then a long term (15 to 30 years) instrument that is collateralized by the pool
of mortgages. As the homeowners make their (usually monthly) payments of the
principal and interest to the lending institution, these payments are then ”passed
through” to the security holders in the form of coupon payments and the principal.
The coupon is naturally less than the interest paid by homeowners, but the level
of default is low. First, there is a warranty in real estate, second, there is a large
pool of loans which diversifies the default risk.
   See [143] for more details.

1.6.2   Floating-Rate Securities
   Floating-rate securities’ payments are not fixed in advance and rather depend
on some underlying asset. The reason for issuing such securities is to reduce the
interest rate risk for both the seller and the buyer. Typical examples are floating-
rate bonds and notes with a coupon or interest periodically adjusted according on
the underlying instrument (base rate) like LIBOR, PRIBOR, discount rate of the
central bank etc. or they are simply tied to some interest rate like prime rate of a
commercial bank (the interest rate for highly rated clients of the bank).
   Note that LIBOR (London InterBank Offered Rate) is the daily published in-
terest rate for leading currencies (GBP, EUR, USD, JPY, ... ) with a variety of
maturities (one day or overnight, 7 days, 14 days, 1 month, 3 months, 6 months, 1
year). LIBOR is calculated as the trimmed average (two smallest and two largest
values are not considered) of the interest rates on large deposits among 8 leading
banks in Great Britain. Similarly PRIBOR is an abbreviation for Prague Interbank
                                 I. FUNDAMENTALS                                    7

Offered Rate and is calculated in a similar way like LIBOR. Usually the calendar
Actual/360 applies to all transactions.
   Typically, the actual coupon rate is the interest rate of the underlying asset plus
margin (spread). If the underlying instrument is LIBOR, e.g., the actual coupon
rate may be actual LIBOR plus 100 basis points or actual LIBOR plus 3 per cent.
The floating rates may be reset more than once a year leading to short-term floating
rates while in the opposite case we speak of long-term floating rates. We also speak
about adjustable-rate securities or variable-rate securities, see [60], [61].

1.6.2.1 Example (I bonds). I bonds are U.S. Treasury inflation-indexed saving
bonds introduced in September 1998 with maturity on September 2028 in denom-
inations varying from USD 50 to USD 10000. The rate – currently 6.49% p.a.
– consists of two components; a fixed rate 3.6% which applies for the life of the
bond, and inflation rate measured by the Consumer Price Index which can change
every six months. I bonds earnings are added every month (coupon is added to the
principal) and the interest is compounded semiannually. Only Federal income tax
applies to the earnings. Investors cashing before 5 years are subject to a 3-month
earnings penalty.

1.6.3   Corporate Stocks
   Issuing stocks is a very popular method of financing business and further devel-
opment of a company (corporation, firm). The most important types of stocks are
common and preferred stocks. A common stock (US), ordinary share (UK) is the
security that represents an ownership in a company. The equity of a company is the
property of the common stock holders, hence these stocks are often called equities.
For the investors, the stock is a piece of paper or a record in the computer giving
him or her the right to engage in the decision processes concerning the company
policy according to the share on common stock (voting right). Also it entitles the
owner to dividends which consist of the amount of company’s profit distributed
to stockholders. This amount equals earnings less retained earnings (the part of
earnings intended for reserves and reinvestment).
   A preferred stock gives the holder priority over common stockholders. Preferred
stockholders receive their dividend prior to common stockholders. Usually the
dividend does not depend on the company’s earnings and often is constant, thus
resembling a coupon bond. In case of bankruptcy, the preferred stockholders have
higher chance to see their claims to be satisfied. On the other hand, often they do
not have voting right.
   Stocks have another feature which is called limited liability that means that their
value cannot be negative in any case.
1.6.4   Financial Derivatives
   Financial derivative securities or contingent claims are the instruments where
the payment of either party depends on the value of an underlying asset or assets.
The underlying assets in question may be of a rather general form, e.g. stocks,
bonds, commodities, currencies, stock exchange indexes, interbank offer rates, and
even derivatives themselves. The underlying assets thus fall into two main groups;
8             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

commodity assets and financial assets. The derivatives are now traded in enormous
volumes all over the world. Estimated figure for options only at 1996 was about $35
trillion. The most common derivatives are forwards, futures, options, and swaps.

1.6.4.1 Forwards and Futures
   A forward contract is an agreement between two parties, a buyer and a seller,
such that the seller undertakes to provide the buyer with a fixed amount of the
currency or commodity at a fixed future date called delivery date for a fixed price
called delivery price agreed today, at the beginning of the contract. For both parties
this agreement is an obligation. By fixing the price today the buyer is protected
against price increase while the seller is protected against price decrease. Forward
is typically a privately negotiable agreement and it is not traded on exchanges.
The forward contract is a risky investment from two reasons, at least. First reason
is obvious; since the spot price of the underlying asset generally differs from the
delivery price, the loss of one party equals the profit of the counterparty and vice
versa. The second reason is the default risk in which case the seller is not willing
to provide the buyer with delivery. There are also nonnegligible costs in finding a
partner for this contract and fair delivery price. Therefore, the forward contracts
are usually realized between reliable, highly rated parties. No money changes hands
prior to delivery.
   A simple example is a forward contract between a miller and a farmer producing
corn. Today, April 11, 2001, they agree that the farmer will deliver 1000 bushels of
corn for the delivery price USD 2.5 per bushel on September 30, 2001, the delivery
date. Both parties consider these conditions of the contract as good. Assume that
the spot price of corn on the delivery date would increase to USD 3 per bushel.
Without the forward contract, the miller would have to buy for this price which
might cause problems to him. On the other hand, with the spot price decrease to
USD 2 per bushel on delivery date, the farmer who would have to sell for this price
might have to go to the bankruptcy.
   A futures contract shortly futures, is of a similar form as the forward but it has
additional features. The futures is standardized (specified quality and quantity,
prescribed delivery dates dependent on the type of the underlying asset). The
futures are traded (they are marketable instruments) on exchanges. One of the
most popular is Chicago Board of Trade (CBT). To reduce the default risk to
minimum, both parties in a futures must pay so called margins. These margins
serve as reserves and the account of any party in the contract is daily recalculated
according to the actual price of the futures, the futures price. Such a procedure
is called marking to market. The initial margin must be paid by both parties at
the initiation of the contract and usually takes values between 5 to 10 per cent
of the contract volume. The maintenance margin is a prescribed amount below
the initial margin. If the account falls below this margin, it must be recovered
to the initial margin by an additional payment called a variation margin. The
contractors’ accounts bring interest. The futures exchange also imposes a daily
price limit which restricts price movements within one business day, ±10 per cent,
say. The responsibility for default is transferred to a clearing house that is also
responsible for the clients’ accounts, see [25] and [143].
                                 I. FUNDAMENTALS                                     9

   The reports on futures prices in financial press provide the daily opening, highest,
lowest, and closing price, the percentage change, the highest and lowest price during
the lifetime of the contract, and the total number of currently outstanding contracts
called open interest.

1.6.4.2 Options
   An option is a contract giving its owner (holder, buyer) the right to buy or sell a
specified underlying asset at a price fixed at the beginning of the contract (today)
at any time before or just on a fixed date. The seller of an option is also called
writer. It must be emphasized that an option contract gives the holder a right
and not an obligation as it was the case of futures. For the writer, the contract
has a potential obligation. He must sell or buy the underlying asset accordingly
to the holder’s decision. We distinguish between a call option (CALL) which is the
right to buy and a put option (PUT) which is the right to sell. The fixed date of a
possible delivery is called expiry or maturity date. The price fixed in the contract
is called exercise or strike price. If the right is imposed we say that the option is
exercised. If the option may be exercised at any time up to expiry date, we speak
of an American option and if the option may be exercised only on expiry date, we
speak of a European option. These are the simplest forms of options contracts and
in literature such options are called vanilla options.
   The right to buy/sell has a value called an option premium or option price which
must be paid to the seller of the contract. It must be stressed that the option price
is different from the exercise price!
   Like futures, options are mostly standardized contracts and are traded on ex-
changes since 1973. The first such exchange was the Chicago Board Options Ex-
change (CBOE). Most common underlying assets are common stocks, stock market
indexes, fixed-income securities, and foreign currencies. Options are usually short-
term securities with typical maturities 3, 6, and 9 months. At any time there are
options with different maturities and different strike prices available on the mar-
ket. An example (taken from [143]) shows how the long term options are quoted in
financial press on January 15, 1992, is in the following table:
                        Option Expiry        Strike
                         ATT   Jan 93          25
                         ATT   Jan 93          35
                         ATT   Jan 93         35p
                         ATT   Jan 93         40
                         ATT   Jan 93         40p
                         ATT   Jan 93         50
This is an example of American options with different strike prices with the under-
lying asset AT & T common stock and with the same expiry date, the third Friday
January 1993.       standing at strike price means a PUT option, the others are
CALLs. ”Last” means the closing price.
   Another type of options are exotic or path-dependent options. These options
(if exercised) pay the holder the amount dependent on the history of the under-
lying asset. Despite their ”exotic” features, they are successfully used for hedging
10              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

purposes. Since the creativity and fantasy of the developers of such products is
practically unbounded, we only give some examples. Note that most of the men-
tioned options may be either of European or American type. For more details see
[172] and [105], e.g.
   A binary or digital option pays the holder a fixed amount of money if the value
of the underlying asset rises above or falls below the exercise price. The payoff is
independent of how far from the exercise price the asset value was at the exercise
time.
   A barrier option is a usual vanilla option but it may only be exercised if either
the asset value does not cross a certain value – an out-barrier , or if the asset price
crosses a certain value – an in-barrier during the life of the option contract. There
are four possible cases:
     (1) up-and-in; the option pays only if the barrier is reached from below,
     (2) down-and-in; the option pays only if the barrier is reached from above,
     (3) up-and-out; the option pays only if the barrier is not reached from below,
     (4) down-and-out; the option pays only if the barrier is not reached from above.
   A compound option is simply an option where the underlying asset is another
option. If we consider only plain vanilla options, we have four possibilities again.
For brevity, we describe the mechanism of a call-on-a-call European type compound
option. Such an option gives the holder the right to buy a call option for the price
    at the expiry        The second call option is on an underlying asset with the
exercise     and the expiry
   A chooser option or as-you-like-it option is an option which gives the holder the
right to buy or sell either a call or a put option. We give an example of a call-on-
a-call-or-put. Such a chooser option gives the holder the right to purchase for the
exercise price     at expiry time      either a call or a put with exercise price  at
time
   An Asian option is a path-dependent option with payoffs dependent on the aver-
age price of the underlying asset during the life time of the option. Such an average
plays the role of the exercise price. Thus, the average strike call pays the holder
the difference between the asset price at expiry and the average of the asset prices
over some period of time, if positive, and zero otherwise. The problems arise from
the proper definition of the average involved, continuous or discrete sampling, if
discrete, then from prices sampled hourly or from closing prices, etc.
   A lookback option has a payoff which also depends on maximum or minimum
reached by the underlying asset over some period prior to expiry. Such a maximum
or minimum plays the role of the exercise price.

1.6.4.3 Swaps
   Swaps, like forwards, are mostly individual contracts between two highly rated,
reliable parties which well fit the needs of both. Although the swaps are individual
contracts, in practise they often follow the recommendations of the International
Swaps and Derivatives Association (ISDA). A swap may be briefly characterized as
an agreement on exchange of cash flows in future times with a prescribed schedule.
There are two main categories of swaps; interest rate swaps and currency swaps.
                                 I. FUNDAMENTALS                                   11

In practise, the two are often combined. Swaps are used to manage interest rate
exposure or uncertainty concerning the future exchange rates.
   An interest rate swap is a contract between two parties to exchange interest
streams with different characteristics based on a principal, notional amount, some-
times called the volume of a swap. The interest rates may be either fixed or floating
in the same or different currencies.
   A pure currency swap is a forward contract on the exchange of different currencies
on some future date (maturity) in amounts fixed today. Another type of a currency
swap is a cross-currency swap that consists of the initial exchange of fixed amounts
of currencies and reverse final exchange of the same amounts at maturity. One or
both parties may pay interest during the lifetime of the swap.

1.6.4.4 Example (Combined swap). Notional amount: CZK 34,500,000
    Fixed amounts:
    Initial exchange: Party A pays EUR 1,000,000 to party B, party B pays CZK
34,500,000 to party A. Maturity 10 years.
    Final exchange (after 10 years): Party B pays EUR 1,000,000 to party A, party
A pays CZK 34,500,000 to party B.
    Floating amounts:
    Party A pays to party B semiannually E6M - 3.5 per cent (spread or margin)
from notional amount based on the floating rate day count fraction Actual/360,
i.e., CZK ((E6M–3.5)/100) · (182/360) · 34,500,000. Here E6M stands for LIBOR
interest rate on EUR with maturity 6 months.

1.6.5   Miscellaneous Securities
   Here we briefly mention a sample of other types of derivatives met in financial
practise.
   A warrant is a derivative security which gives the holder the right to buy a
specified number of common stocks for a fixed price called exercise price at any
time during the lifetime of the warrant. Such a security resembles a CALL option
but there are two differences. First, warrant is a long-term security, 10 years say,
while options have maturities up to two years. Second, perhaps a more important
feature of the warrant is, that it is issued by the same company which issues the
underlying stock while options are traded among investors.
   Another type of security with an option is a convertible bond. Such a bond gives
the bondholder the right to exchange the bond for another security, typically the
common stock issued by the same company or just to sell back the bond to the
issuing company. This is an example of a convertible bond with put option. Firms
usually add the conversion option to lower the coupon rate. On the other hand, the
issuer may reserve the right to call back the bonds and upon call, the bondholder
either converts the bond into stocks or redeems it at the call price (convertible bond
with call option). In this case, the coupon rate must be higher than that of usual
coupon bond. In both cases we speak of conversion premiums.
   Let us turn to floating-rate bonds (see 1.6.2). Most issuers cap their obligations
to ensure that the floating coupon rate does not rise above a prespecified rate
called cap. Thus if the face value of a bond is F, the floating rate (say LIBOR
12             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

on EUR with maturity 6 month + 3 percent) and the cap            then the payment is
              On the other hand, some issuers offer buyers an interest rate below
which the coupon rate will not decline; such a rate is called floor. If the floor is
then the payment is



Usually caps and floors take the form of consequent payments called caplets and
floorlets, respectively.

1.7 Financial Market
  Financial market consists of money market and capital market. Money market is
a market with short-term assets or funds, up to one year say, like bills of exchange,
Treasury bills (T-bills), and Certificates of Deposit (CD’s). Capital market is a
market which deals with longer-term loanable funds mainly used by industry and
commerce for investment and acquisition. Usually capital markets handle securities
which are related to the time horizon longer than one year.

1.8 Financial Institutions
   The role of financial institutions is simple. Financial intermediaries (commercial
banks, insurance companies, pension funds, e.g.) acquire debts issued by borrowers
(IOU – the abbreviation for ”I Owe You”) and at the same time sell their own
IOUs to savers. Every bank (with rare exceptions in the Czech Republic) is happy
to accept your savings and handle them. It is a debt which is used by the bank
in the form of loans and investments. Examples of other financial institutions are
security brokers (bringing buyers and sellers of securities together), dealers, who –
like brokers – intermediate but moreover purchase securities for their own accounts.
There are investment bankers, mortgage bankers, and other miscellaneous financial
institutions in this category, as well.

1.9 Financial System
   In a civilized country, all the activities mentioned above go through the financial
system which can be simply illustrated by the following scheme:

  Ultimate borrowers, savings-deficit units
                            Financial Intermediaries
                                          Ultimate savers, savings-surplus units.

   The needs or wishes of borrowers and savers are different, of course. The borrow-
ers need long-term loans, acceptance of significant risk by the lenders, and larger
amounts of credit. Perhaps the highest priority of the lenders is liquidity, which
means the availability of the funds (money) at the moment when these are re-
quested. The natural needs of the savers are safety of funds and, particularly for
small investors, accessibility of the securities in small denominations.
                                  I. FUNDAMENTALS                                    13

I.2     INTEREST RATE

interest rate, compounding, present value, future value, calendar convention, de-
terminants of the interest rate, term structure, continuous compounding


2.1 Simple and Compound Interest
   Interest rate (also rate of interest) is a quantitative measure of interest expressed
as a proportion of a sum of money in question that is paid over a specified time
period. So if the initial amount of money is PV (also called principal or present
value) and the interest rate is for the given time period, then the interest paid at
the end of the period is           and the accumulated amount of money at the end
of the period (called future value or terminal value) is



Alternatively, the interest rate is quoted per cent. It will be clear from the context
where            means             and vice versa. Note that is another frequently
used symbol for the rate of interest, particularly if speaking of the rate of return.
   Let us consider more than one time period, say T periods, with T not necessarily
integer, and the same interest rate for one period. There are two approaches how
to handle interests after each period. Under simple interest model, only interest
from principal is received at any period. Thus the future value after T periods is



Under compound interest model, the interest after each period is added to the pre-
vious principal and the interest for the next period is calculated from this increased
value of the principal. The corresponding future value is



In the context of the compound interest model, the process of going from present
values to future values is called compounding.

2.1.1   Remark (Mixed Simple and Compound Interest)
   Some banks or saving companies use a combination of simple and compound
interest if T is not an integer. Let                 where    denotes the entire
part and {} denotes the fractional part of the argument. Then the future value is
calculated as
14             STOCHASTIC MODELING IN ECONOMICS AND FINANCE



2.1.2 Exercise. Decide what is better for the saver: future value of the savings
calculated from (3) or (4).

   Speaking of interest rates, it is important to state clearly the corresponding unit
of time. In most cases, the interest rate is given as the annual interest rate, often
stressed by the abbreviation p.a. (per annum). The usual notation is               p.a.
or equivalently          p.a. Rarely, interest rates are given semiannually (p.s., per
semestre), quarterly ( p.q., per quartale), monthly (p.m., per mensem), daily (p.d.,
per diem). The period of compounding is similarly one year, six months, three
months, one month, or one day. If the unit of time for the given interest rate differs
from the period of compounding (which is often the case), it is very important to
emphasize that we consider             interest rate compounded semiannually, say. In
this case it means that the interest rate is so called nominal interest rate, and for
every six month’s period the actual interest rate is          Generally, let     be the
nominal rate of interest per unit time compounded               within the unit time so
that there are    periods, each of length           and the interest rate is        per
period. We also say that the nominal interest rate          is payable mthly. Thus the
future value of PV after T periods is




Of course, the actual interest rate per unit time    called effective rate of interest
is not equal to the nominal rate of interest. Obviously,




2.1.3   Exercise. Compare the effective rates of interests if                      for
                and comment the result.

2.2       Calendar Conventions
   Assume the unit time is one year. If the number of periods is not an integer,
there are different methods to count the difference between two dates. Consider
two dates,                   say, expressed in the form
          January 13, 2013, is therefore expressed as 20130113. The most frequent
conventions:
   Calendar 30/360 or Euro-30/360. Under this convention all months have 30
days and every year has 360 days. The number of periods T is calculated as
                                I. FUNDAMENTALS                                 15

   Calendar US-30/360. In this case, all dates ending on the 31st are changed to
the 30th with the following exception: if           and            then
is changed to the first of the next month.
   Calendar Actual/Actual. This convention assumes the actual number of days
between two dates with the actual number of days in the year.
   Calendar Actual/360. The actual number of days in each month but 360 days
in the year are considered. As a result, the number of periods within one year can
exceed one.
   Calendar Actual/365. The actual number of days in each month and 365 days
in each year are considered. The leap year assumes 365 days.
   Most computer systems are equipped with calendar functions, particularly with
the function which returns the number of days between two dates. For exam-
ple, Mathematica offers the function DaysBetween [date2, date1] which returns the
actual number of days between two dates. The arguments date takes the form
{year, month, day} so that March 14, 2001 is {2001,3,14}in this notation. In
financial packages, the same Mathematica function has option DayCountBasis ei-
ther "Actual/Actual"or "30/360" .

2.2.1 Exercise. Analyze the effect of the calendar conventions on savings from
the point of view of a saver or a borrower.

2.3     Determinants of the Interest Rate
   In a free economy, interest rates, as a price of money, are mainly determined by
market supply and demand, and partly mastered by the government or central bank
via money supply policy. Interest rates vary with economic environment, market
position, used financial instrument, and time. The economic units which are willing
to pay higher interest rates for the funds (=borrowed money in this case) expect
higher returns on their investments. The returns are usually measured by the rate
of return defined by:




sometimes quoted in per cent.
   Every investment should be valued from the point of view of return, risk, infla-
tion, and liquidity. The firm with higher return will pay higher interest for funds
(money). With the rate of return 25 per cent the firm pays 20 per cent interest
with pleasure. Another firm, with the rate of return 20 per cent, would not pay
20 per cent interest since then it would not have reason to develop any activity.
More risky investment should be more expensive than an investment with (almost)
certain return, in terms of interest rates. Inflation also makes funds more expen-
sive. If the inflation is high, the funds may be not accessible. Short term funds
(money borrowed for short time) are usually cheaper than long term funds (money
borrowed for long time). Short term interest rates more or less reflect the actual
state of the economy while long term interest rates reflect expectations, rational
16              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

or less rational. Situation is more complicated, however, see the concept of yield
curves next in this part. Denote the rate of interest comprising all the factors
mentioned above. In this context, is also called cost of capital.

2.3.1   Remark (Taxation)
   Almost all incomes coming from investment are subject to taxes. The few exemp-
tions are returns on some government or municipal bonds, e.g. Thus the taxation
reduces the returns. Moreover, the taxes are often different for various types of
investment and sometimes are progressive, i.e., the higher the return, the higher
the taxes. Thus any investment should be carefully valued with respect to tax
consideration.

2.4     Decomposition of the Interest Rate
   Taking into account all the factors which affect the so called quoted or nominal
interest rate we can write



where       denotes the risk free interest rate if we do not consider inflation,
(inflation premium) is the expected rate of inflation,         (default risk premium)
is the premium charged for the default risk, that is the risk that the debtor will
not pay either principal or interest or both. Sometimes it is called credit risk. The
term           (liquidity premium) stands for the risk that an asset in question is
not readily convertible into cash without considerable cost. Finally,        (maturity
risk premium) is the premium for the risk produced by possible changes of interest
rates during the life of an asset. There are two types of the maturity risk. Consider
bonds, e.g. For long-term bonds, it is the interest rate risk; if the market interest
rate rises, the prices of bonds go down. This kind of premium rises when the interest
rates are more volatile. For short-term bonds, it is the reinvestment rate risk; if
these bills become due and the actual interest rates are low, the reinvestment will
result in interest income loss.
   Sometimes the decomposition is given in additive form (see [25], e.g.)



which is a good approximation of (7) if the components of are sufficiently small
since the cross-factors of type        are small of twice higher order than the original
components.
   In real world, there is practically no riskless investment. For simplicity, however,
the government bonds are usually considered riskless. In this case, the offered
return also includes the expected rate of inflation, so that the risk free rate with a
premium for expected inflation is



In what follows, without further notice we will consider the riskless rate with the
inflation premium.
                                 I. FUNDAMENTALS                                   17

   It is also necessary to note that the above decomposition depends on the time
period involved. So if we consider the one-year quoted interest rate, the corre-
sponding expected inflation is a one-year inflation, and the risk free-rate is derived
from one-year T-bills rates and the maturity risk premium has a negligible influ-
ence on the nominal rate in a stable economy. For a ten-years’ quoted interest
rate we should take ten-years yields of the government bonds for the riskless rate
and carefully consider the other factors affecting the nominal interest rate; default,
liquidity, and maturity premium in this case.

2.4.1   Remark (Rating)
   Useful guides to credit risk evaluation for corporate bonds are conducted by
recognized agencies like Standard and Poor’s and Moody’s. Based on an analysis of
the firms they provide a classification into rating categories. According to Standard
and Poor’s, AAA is the highest rating reflecting extremely strong capacity to pay
interest and to repay principal, AA means very strong capacity, A may be effected
by economic conditions, etc. Further categories are BBB, BB, B, CCC, CC, C,
D. Categories below BBB are sometimes considered as speculative or junk bonds.
Refinement may be made by adding + or – signs. Similar categories provided by
Moody’s are Aaa, Aa, A, Baa, Ba, B, Caa, Ca, C, D.

2.4.2 Example. In January 1991 the quoted interest rates for U.S. T-bonds,
AAA, AA, and A were 8.0, 8.9, 9.1, and 9.4 per cent, respectively. See [25], p.
109. All these bonds had similar maturity, liquidity, and other features. So the
only difference is in the default risk premium. Using formula
for the default premium risk we get                                         and
                   respectively.

2.4.3   Real Return
   If is the nominal rate of interest on deposits and        is the rate of inflation,
then the real return on deposits is sometimes expressed in terms of the real rate of
interest      which can be calculated from the obvious relation



or



For small values of the components appearing in the last formula, we can use the
approximation                   Moreover, let    be the tax rate imposed on the
earned interest from deposits. Then we get



for the real return.
18            STOCHASTIC MODELING IN ECONOMICS AND FINANCE



2.4.4 Example. In the Czech Republic, year 1997, the inflation rate was 0.10
(official source), could have been taken as 0.11 (an over-optimistic value at some
banks), and tax on the return on deposits was 0.15 (by law). Then we obtain the
negative real return –0.6 per cent. In April 2001, the yearly inflation has been
estimated as 4.1 per cent and one year term deposits net yield was about 3 per
cent. So again we get the negative real return at about –1.1 per cent.

2.4.5 Exercise. Derive the corresponding relation for the real percentage increase
in purchasing power if the percentage increase in salaries is the inflation rate is
     and      is the tax rate.

2.4.6 Example. Let us consider two investments, A and B, say, with gross re-
turns     and     subject to taxes and    respectively. The two investments
provide the same net yield if


holds.
2.5 Term Structure of Interest Rates
   All the interest rates in this Section relate to the equal time periods. Suppose
     is the actual rate of interest at time on an              investment called spot
interest rate and                                 are the one-period interest rates on
an investment beginning at times                                   respectively, called
forward rates for one period implied in the term structure at time At time we
know spot rates                        Obviously, we can put               We have




From this formula we can simply obtain the forward rates



The one-period forward rates may simply span any desired length of time. Thus,
        forward rate beginning at time    implied in the term structure at time
 is



Due to the liquidity premium the relations between spot and forward rates are rarely
fulfilled exactly in practise. Instead of       we should consider
where the L’s are the liquidity premiums embodied in the forward rates. Usually
the liquidity premiums are increasing:
                                I. FUNDAMENTALS                                     19

2.6 Continuous Compounding
   In theory, continuous compounding plays a crucial role. The idea of continuous
compounding comes from the usual concept of compounding for the number of
compounding periods approaching to infinity. In this case, we consider the nominal
interest rate              called the force of interest or often interest rate in the
continuous financial mathematics) per unit time so that the future value FV of the
initial investment PV (at time         after time T becomes




In other words, the future value grows exponentially with time according to




This formula is often presented in the form




If the investment is taken at time instead of              (usually             and is
represented by the present value   then



So far, we have considered the force of interest to be a constant. But, the above
formulation allows us to simply extend it to the case of variable force of interest
   depending on time The accumulation factor then becomes               instead of
         and the future value at time T of the unit investment at time therefore
is



Analogously, the expression of the present value in terms of the future value and
the time dependent force of interest reads:



The function



is called discount function and for        it is abbreviated to       so that
20            STOCHASTIC MODELING IN ECONOMICS AND FINANCE



2.6.1 Example (Stoodley’s Formula). A flexible model has been suggested
by Stoodley. In spite of the fact that this model is mainly of theoretical interest,
it is useful for giving a sight of a possible behavior of the time development of the
interest rate. The Stoodley’s formula says that




where       and   are properly chosen or estimated parameters.

2.6.2 Exercise. Study the behavior of the force of interest following the Stood-
ley’s formula dependent on the parameters appearing in the formula.

2.6.3 Example (Discount Function of the Stoodley’s Force of Inter-
est) . The calculation needs some algebra. Write instead of T in the formula for
       Then




If we put                           we get




From this formula it follows that the discount function can be expressed as the
weighted average of the present values with constant interest rates.
                                  I. FUNDAMENTALS                                     21

I.3     MEASURES OF CASH FLOWS

present value, future value, annuities, equation of value, internal rate of return,
duration, convexity, investment projects, payback method, yield curves


    Consider first the sums (payments)                  related to the equally spaced
time instants 0,..., T. The interest rate for one period will alternatively mean
the cost of capital, the opportunity cost rate, i.e., the rate of return that can be
earned on an alternative investment. Sometimes it is called valuation interest rate.
The formulas below are formally valid for             but the case         is the only
realistic one. The vector                             represents a cash flow. Values
           are inflows (amounts received) and            are outflows (amounts paid,
deposits, costs, etc.) Define the discount factor corresponding to the interest rate
  by                   the discount by            and the force of interest by the
 relation              or                Beware of the fact that here symbol is
different from the same symbol used from notational reasons in Part III where
will mean the discount function, or more generally the discount process. Summary
of the notation:




3.1     Present Value
   One of the most important characteristics of a cash flow CF is its present value,
PV, also called net present value, NPV. ”Net” means that inflows and outflows at
the same time are added together and thus represented by a single number
If needed, the dependence of PV on CF and either          or will be stressed:




Note that the present value is expressed in currency units like USD or CZK.
   Let      be the linear vector space of cash flows, i.e., the space of finite sequences
of maximum length            If the actual length of a cash flow is less than
we complete it by zeros. The present value is a linear function on                 in the
following sense: if                                then



  Let us consider the payments                   at equally spaced time instants
0,..., T, again, but with different interest rates in the compounding periods
22             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

                 where     is the interest rate applied in the period
             Then the present value of the given cash flow is




where             by definition.
  Finally, let us assume that the payments                 take place in some
general time instants                and the corresponding discount factor is
Then




This formula may be generalized to the case of an arbitrary starting (or valuating)
date    The present value related to this date is then




One must be careful with proper interpretation of time in this case, however.


3.1.1   Example. Consider the calendar convention Actual/360 and a cash flow
                where the   now represent dates, the compounding is annual with
the discount factor             and the starting date is    Let         denote
the number of days between the dates       Then




With daily compounding with the interest rate               p.a., the formula for the
present value reads




   A cash flow often represents an investment opportunity. The dependence of the
net present value of such a cash flow is of vital importance for investment decision
making. For the first insight, the graphical representation of the dependence of the
present value on the cost of capital (valuation interest rate) is of interest.


3.1.2   Example. Let us consider the cash flow from 1.4.1

              (–90000, –15200, 45000, 60000, 25000, 22000, 270000)
                                 I. FUNDAMENTALS                                    23

at times                     The PV of this cash flow in dependence on the interest
rate is plotted in Figure 3. Such a type of graph is called the present value profile.




3.1.3   Continuous Case
   Speaking of interest rates, we were speaking of present values and future values
with constant present values (investments) and a continuously varying force of
interest. Here we deal with the case when even the respective cash flow changes
continuously. For the sake of simplicity let us suppose that the starting point of
time is set to 0 and the time at which the cash flow comes (received or paid, inflows
or outflows) is Let us denote the cash flow coming for the period          as
It means that the net income for the corresponding period will be         either with
plus or minus sign. So the total payment made between            is
Suppose that CF is differentiable so that the derivative                        exists.
Then the increment in income may be expressed as




Now we have to consider the time value of money. Between the time instants
   being small enough, the total income is approximately            Therefore, the
present value of money received during the time interval         is             So
the present value of the cash flow over the whole period       is




3.2 Annuities
   Consider a series of T payments, each of amount 1 at times 1,...,T. Such a
stream of payments is called annuity immediate (with payments at the end of the
period). The present value of this cash flow for    is
24              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

and often it is also called the Present Value Interest Factor of an Annuity abbre-
viated as              For        we have            Sometimes the interest rate is
attached to symbol           or
   Consider again a series of T payments, each of amount 1 but now at times
               Such a stream of payments is called annuity due (with payments at
the beginning of the period). The present value of this cash flow for      is



Clearly,         for        Further,


For an infinite stream of constant payments of amount 1, the annuity is called
perpetuity and if it is immediate or due, its present value is


respectively.
3.3        Future Value
   Let us consider the valuation date T, a cash flow                  and the above
interest rate characteristics       Then the future value is




alternatively



Obviously,                                   in this case.
  In the case of varying interest rates we have



or




with
   In case of general time instants (see (4)) and a constant interest rate i we imme-
diately get the obvious relationship
                                 I. FUNDAMENTALS                                    25


3.3.1   Exercise. Modify the last result to the case of the calendar convention
Actual/365.
   Let us turn to the annuity immediate of an amount 1 and                 The future
value of this annuity is




Analogously, for an annuity due, the future value is




Both     and      are equal to T for

3.3.2   Exercise. Verify the following relations:



3.3.3   Remark
  Other useful and frequently used relations:




3.3.4 Exercise. Verify and give the interpretation of the preceeding formulas.
(Hint: the first formula may be explained as the present value of a loan of amount
1 over the period 0,1,..., T).

3.3.5   Remark
   If the regular payments are all equal to PMT (abbreviation for PayMenT), then
the corresponding present and future values are simply multiples by PMT of the
corresponding       and

3.3.6   Remark (Equation of Value)
   Due to technical and accounting reasons, the strict convention on the signs (in-
flows plus, outflows minus) leads to the following relations between the five variables
involved, i.e., the present value PV, the future value FV, the interest rate the
annuity PMT, and the number of periods T:
   Annuity of amount PMT immediate.
26             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

     Annuity of amount PMT due.



   In the introductory courses, such a type of formulas is known as the equation of
value. This approach is often used on financial calculators or in spread sheets. The
user should carefully input the data with proper plus or minus signs for inflows and
outflows, respectively.

3.3.7 Example (Installment Savings). Consider the investment of CZK 5000
in installment savings for 3 years at 3.6 per cent p.a., compounded monthly, so that
                What will be the total of principal and interest at the end? Reason-
ably, installment savings represent an annuity due (payments at the beginning of
the period) so that the equation of value (23) applies with
                                We have                   so that               Com-
pare this result with the case of 3 installment savings CZK 60000 at the beginning
of every year with yearly compounding at the interest rate               per cent p.a.
This results in the total savings                 Give an explanation as an exercise.

3.3.8    Example and Exercise (Loans). Suppose you are able to repay CZK
5000 monthly for a 3 years’ loan at           per cent p.a., compounded monthly.
The question is, how much you can borrow under these conditions. Reasonably, the
payments represent an annuity immediate (payments at the end of period) so that
(22) applies to loan borrowing power
                   Since             you can borrow                  In case you are
able to pay CZK 60000 at the end of each year at the same interest but compounded
yearly, you will obtain from (22) with                                     that your
loan borrowing power will decrease to                    As an exercise, calculate
PV under the same conditions if your balance (= remaining debt) is compounded
monthly.

3.4 Internal Rate of Return (IRR)
   In a simple Example 3.1.2 we have seen that depending on the interest rate
the present value of a cash flow takes either positive or negative values. So the
critical point is the value of the interest rate that equates the present value to zero.
Consequently, we are motivated to define an internal rate of return (shortly IRR)
as a solution to the equation




In other words, IRR is defined as the interest rate (or the cost of capital) which
equates the present value of inflows (incomes) to the present value of outflows
(costs):
                                 I. FUNDAMENTALS                                   27

The equivalent problem is to find a discount factor     such that




If           then the last equation is an algebraic equation of degree T and hence it
has T roots. Therefore, by the above definition, we have T internal rates of return.
All the solutions can be easily obtained by standard numerical methods. Only real
roots greater than –1 may have an economic meaning, however. Some authors
define IRR as a positive solution to (24). But it can be simply demonstrated that
some (rather strange) cash flows possess only positive IRR’s with difficult economic
interpretation. The cash flow (–1000, 3600, –4310, 1716) has IRR’s 0.1, 0.2, 0.3, e.g.
Nevertheless for ”well-behaved” cash flows we have the following theorem:


3.4.1 Theorem. Let                                                        Suppose
that in the sequence               with zeros excluded the sign changes just once.
Then there is exactly one positive IRR.
  Proof. We have the equation




with             Since                                  the equation reads




Further,




Thus (27) may be written as
28             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

Without loss of generality suppose that           Then there exists an index    such
that                                                                           Hence
(28) becomes




and after multiplication by     we get




or


say. All the       are continuous,        increasing,        decreasing. Thus
                 is continuous and increasing. Moreover,




so that there is just one       such that            and                  is the only
positive IRR.

3.4.2     Remark and Example (Leasing). Financial leasing is an alternative
form of financing. It takes a form of an agreement between two parties, the lessee
and the leasing company called lessor. The lessee obtains the right to use a (usually
real) asset for a period of time while the ownership of that asset remains with the
lessor. At the end of the lease the ownership still remains with the lessor. But
the residual (or salvage) value is usually negligible. There are many reasons for
leasing, let us mention some of them. First, a company or an individual may not
have money available to purchase the asset. This is often the case if the asset
is too expensive like tanker or airplane. Second, there is a risk that the asset will
become obsolete. Third, in most countries there exists a tax deduction advantage to
promote investment. See [141], p. 512 for details. The following numerical example
presents an analysis of leasing a car. The SKODA car priced CZK 227900 is leased
under the following conditions: the lessee pays the sum of CZK 34185 immediately.
Then the lessee pays (i)                          monthly for 36 months or (ii)
                  monthly for 42 months. In both cases the payments are at the end
of the month and the salvage value of the car is CZK 122. The question arises, what
is the effective interest rate counted by the lessor. The IRR methodology gives the
answer. We have                                        annuities with the minus sign
given above,           and         months, respectively. Using a financial calculator
or spreadsheet program, we find the respective IRR’s are                         and
                  per cent monthly, so that                  and                  per
cent p.a.
                                I. FUNDAMENTALS                                    29

   Investment projects represented by cash flows are called normal or regular if the
payments change their sign just once, and are called nonnormal or irregular in the
opposite case.
   In the above definition of IRR we have implicitly supposed that the inflows from
the project will be reinvested at the same interest rate, i.e., IRR . More often, the
inflows are reinvested at the interest rate equal to the current cost of capital say.
We can overcome this problem by a modification of the definition of IRR following
the principle:


where MIRR is called modified rate of return. In symbols, MIRR is defined by the
equation




It is obvious that in this case (given       MIRR can be expressed explicitly. Also
note that for            we have
   Another modification of IRR makes use of different interest rates for outflows
and inflows, i.e., the different costs of investment and reinvestment capital,  and
    respectively. The modified rate of return MIRR (we use the same notation) is
then defined by




MIRR can be explicitly calculated again.
   Note that sometimes this idea is also used for the valuation of cash flows if
different valuation interest rates are used for outflows and inflows. Using the above
notation, the present value is expressed as




3.5     Duration
  The duration is defined as the time-weighted average of the discounted payments:




Duration is expressed in time units. So if the payments are semiannual, for instance,
the duration is expressed in halves of year. It is also called discounted mean term
of the cash flow. We have
30                STOCHASTIC MODELING IN ECONOMICS AND FINANCE

and thus the duration may be expressed as




In economics the last expression is known as elasticity so that we may interpret
the duration as an elasticity of the net present value with respect to the discount
factor. An alternative formula for the duration expressed in terms of the interest
rate reads




From the above expressions it follows that the duration may serve either as a
measure of the sensitivity of the cash flow to the interest rate or as the duration
of the corresponding investment project. The first interpretation will become clear
if we write the first few terms of the Taylor expansion of the relative increment
of the present value of the given cash flow as a function of the interest rate; the
derivatives are taken with respect to the second argument:




  Note that duration, unlike the present value, is not a linear function of the
CF’ s. To overcome this disadvantage sometimes the dollar duration is used:




In literature and applications we can also meet the modified duration:



or, in terms of



3.6     Convexity
   A finer measure of the sensitivity of a cash flow to the interest rate is the con-
vexity:
                                 I. FUNDAMENTALS                                    31

Convexity is expressed in squared time units. If the payments are accomplished
semiannually, convexity is expressed in         e.g. Taking into account that



we can substitute in (36) and get a more precise formula for the relative increment
of the present value in the form




In literature we can find a slightly different definition of the convexity, as an ana-
logue to the modified duration:



Then the equation for the relative change of the present value may be expressed in
terms of the modified measures as




3.7 Comparison of Investment Projects
   As usual, investment projects will be represented by the corresponding expected
cash flows. Since the future cash flows are uncertain, the results of decision making
process are also uncertain. The detailed qualified analysis may reduce uncertainty,
however.
   We will deal with a set of competing projects. The decision maker may accept
one or more projects and may even decide not to accept any. The projects are said
to be mutually exclusive if at most one of the involved projects can be accepted.
And they are said to be independent if an arbitrary number of the competing
projects (including none of them) can be accepted.
   There are two broad classes of investment projects that often arise in practise.
In the first case, the investors use their own capital for the initial investment and
they obtain incomes generated by the initial investment in successive periods. Such
projects are characterized by negative payments in the initial period(s) and positive
ones afterwards. Call them class I projects. In the second case, the investors take
a loan at the beginning, make an investment, and then they acquire the benefits
and also should pay back the loan. Such projects are characterized by positive
payments in the initial period(s) and negative ones afterwards. Call them class II
projects.
   There is a variety of methods for decision making and we will mention only some
of the principles. All the methods start with a careful analysis of the expected
stream of payments including dividends, interest obtained or paid, salvage value of
the assets at the end of the project’s life, etc. The cost of capital (the valuation
interest rate) should take into account the riskness (uncertainty) of the project.
32              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

3.7.1 Profitability Index
   A simple indicator for a class I project                                is the prof-
itability index defined by



This measure seems to be trivial but in fact it is, in some sense, equivalent to the
measures based on the present value profile as we will see later. Among competing
projects we select those with highest profitability indexes greater than one; we select
none of them if all PI’s are less than one.

3.7.2 Payback Method
   Another simple and rough method is the payback method applied again to class
I projects. It is based on the payback period that is the number of periods required
to recover the initial outflows. Formally, let us keep assumptions of Theorem 3.4.1.
For a class I project we have            Let be the first index such that
Then the payback period is defined by



Here        is the period just preceeding the full recovery,        is the uncovered
cost at the beginning of this period, and        (obviously positive) is the payment
in the recovering period. If such a does not exist, we set formally the payback
period to infinity. Based on the payback method, we select the project(s) with the
shortest payback period, or none of them if their payback periods all equal infinity.
   A little better method based on this idea is the so called discounted payback
method. Let be a properly chosen project’s cost of capital and define
                  Assume again            and the first index such that
Then the discounted payback period is defined as



If such a does not exist we set formally the discounted payback period to infinity.
The decisions based on the discounted payback method are the same as in case of
the usual payback method.

3.7.2.1 Exercise and Problem. Analyze and try to prove the following con-
jecture. For a class I project of length T            the discounted payback pe-
riod approaches T as the interest rate approaches the internal rate of the project,


3.7.3 Methods Based on the Present Value Profile
   Typically, for class I projects the present value is a decreasing (and often also
convex) function of the valuation interest rate i and the opposite is true for class
II projects; the present value is an increasing (and often concave) function of
However, this is not the rule as shown in the following counterexample.
                                  I. FUNDAMENTALS                                    33

3.7.3.1 A Counterexample
  Consider an artificial cash flow
The assumptions of Theorem 3.4.1 are fulfilled. The only IRR is 0.006372. But
           is decreasing for       and increasing for

   Hence the investor should take care of the individual present value profile, i.e.,
the graph of the present value in dependence on the interest rate involved.
   The leading rule is simple; for a given accept the project if its present value at
this interest rate is positive:



    For class I projects, the criterion of positive present value is equivalent to
                   In case of independent projects we select all the projects with
the positive present values at the given interest rate. If the projects are mutually
exclusive we select that with the highest present value. If we investigate a set of
projects which are mutually exclusive dependent on the valuation interest rate we
should select the project that is determined by the upper envelope of the present
value profiles.
    For one project, the critical point is IRR . If PV is a decreasing function of then
we accept the project if the valuation interest rate is less than IRR and reject it
otherwise. Analogously, if PV is an increasing function of we accept the project
if the valuation interest rate is greater than IRR . For projects which do not possess
a monotonous present value profile, we should perform a more careful analysis.
    For two or more projects, the critical points are not only the IRR’s of the in-
dividual projects but also their crossover rates. A crossover rate of two projects
is such an interest rate for which the present values of the two projects are equal.
Formally, let us consider two projects            and         The crossover rate      is
defined as a solution to the equation



Obviously, there may be more than one solution so that we must select that one with
a reasonable economic interpretation. Since the present value is a linear function
on the space of cash flows, we see that the crossover rate  is in fact the internal
rate of return determined by the difference between the two projects,



In the neighborhood of the crossover rate the investor should take care and carefully
study also the sensitivity of the present value profiles with respect to the interest
rate. This is best done by looking on the duration and possibly on the convexity.
Such an analysis will be better understood from the example.

3.7.3.2 Example. Let us consider five projects:
    (1)
34            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

    (2)
    (3)
    (4)
    (5)
Projects A, B, C, D are class I projects while E is a class II project.    represents
the cash flow of a four years coupon bond purchased for the par value 1000 giving
the holder yearly coupons of 47 with redemption value 1000. The present value
profiles of these projects are shown in Figure 4. Visually the present value profiles
of the projects A and C coincide. The payback periods for the first four projects
are



and the discounted payback periods for two selected interest rates


                                                    In case of independent projects,
based on the discounted payback method we accept projects A, B, C, D if          or
          For         we accept A, B, C and reject D. If the projects are mutually
exclusive, we accept only A for all three values of




The present value is a decreasing function of for projects A, B, C, D, and an
increasing function for project E. Thus the acceptance region depends on the cor-
responding IRR’s:



Consider first the case of independent projects. We accept A, B, C, D for
                       For                               we accept A, B, C. For
                  (approximately) we accept A, B, C, E; and we accept only E for
                                 I. FUNDAMENTALS                                   35




Second, consider mutually independent projects A, C, E only. Since the projects
A and C have almost identical present value profiles, we must look first at the
difference of their present values. In Figure 5 we have plots of
                                         and                             We see that
                               and that the difference is negligible. We also have
                                     and                                   Since the
convexities fulfil the inequality                          we can decide in favor of
project C against A. Further, the crossover rate for projects C and E is
         Thus to summarize, for                 we accept C and for              we
accept E, among the candidates A, C, E. If we consider all the five projects, then
we obviously select B for                        and E for greater values of

3.7.4   Internal Value
   Suppose that the cash flow in question depends also on another variable or
parameter say,                   For decision making, an important measure is the
value of           such that the present value for a given interest rate is zero.
Call this value the internal value of the cash flow and denote it by HIV. (HIV has
been introduced in [83] but we admit that such a simple indicator might have been
known before.) Mathematically, HIV is defined implicitly by the relation




Often, the dependence of the present value on is simple, for instance linear or
quadratic. Hence, for a fixed interest rate, the analysis of the present value profile
becomes more simple. Application of HIV is many-sided. Particularly, HIV is
useful in valuation of all transactions where the foreign exchange rate appears, like
currency swaps. In this case            the foreign exchange rate. The HIV can also
be employed for the risk analysis of loans payable in foreign currencies or cash flows
dependent on interest rates like LIBOR, etc. If more than one variable influence
the cash flow involved, the above definition is still of use. The analysis is more
complex in this case, however. Also a two-dimensional analysis if both the interest
rate and vary is a rather complex task and needs a further research and analysis
of particular situations.
36             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

3.8 Yield Curves
    Generally, a yield curve plots interest rates paid on interest bearing securities
against the time to maturity. Such a plot makes sense only for a class of comparable
securities. Thus we may plot yield curves for government zero coupon bonds for
maturities 1, 3, 6, 9, 12 months getting a completely different picture for AA rated
firm’s bonds for same maturities. Thus we should take into account the risk factors
(cf. decomposition of interest rate) and also comparable taxation conditions.
    Even for the same type of securities (like T-bills), the shape of the yield curve
differs in time, i.e., the shape is different in years 2000 and 2001, say, ceteris paribus.
This feature may be explained by many factors, like the change in spot riskless rate,
inflation, and other exogenous factors. Another important feature is the internal
need of the issuer for short, medium, or long financial funds.
    Another problem arising with a yield curves’ presentation is that the yields may
be either declared or actually observed on the market. Here, by declared yields we
mean the promised coupon rates for usual fixed coupon bonds while the actually
observed yields are derived from the spot market price of the respective security,
see I.4 for the calculation.
    There is an obvious connection between the yield curve and the term structure of
interest rates (cf. 2.5); for a given type of security (or a group of similar securities)
with different maturities and for a given particular date the yield curve is the
plot of the spot rates                          The difference              is called yield
spread. Sometimes the forward-rate curve calculated from (2.5.13) is plotted.
    A typical shape of the yield curve is upward-sloping, which simply means that
the corresponding function is increasing and often concave. Such a yield curve is
called normal yield curve. On the contrary, the yield curve which is downward-
sloping (decreasing and often convex) is called inverted yield curve. Another shape
often arising in practise is a humped curve; the yield curve increases at first and
then decreases for longer maturities. Rarely we can meet a flat, i.e., constant yield
curve or U-shaped curves. However, rather strange images, different from the above
mentioned, can be met with in practise.
    The shape and magnitude of the yield curve depend on many factors. Most
important are the risk factors, the liquidity preference, and the expected inflation.
Increasing risk factors (mainly default risk) cause approximately parallel upper
shift of the yield curve. The higher the liquidity preference, the higher the liquidity
premium for lending for longer time periods. With increasing expected inflation in
future periods the longer-term rates become higher and vice versa. See 2.3 and 2.4
for explanation.
    For financial decision making and also for analysis we often need yields for ma-
turities which are not available on the market. Thus we must construct them from
existing market data. To this purpose one may use purely numerical approaches
like linear interpolation, e.g. Another recommended approach is based on regres-
sion models. Suppose that we have N comparable fixed or zero coupon bonds 1,
 ... ,N with maturities                 and observed yields             respectively. The
postulated parametric regression model is (see [55], e.g.)
                                I. FUNDAMENTALS                                   37

where the hypothetical yield curve of a known analytical form depends on an
unknown vector parameter which is to be estimated, and       are disturbances
with zero means. The estimate      is obtained as an argument of




for a properly chosen             for the least squares method and           for the
absolute deviation criterion, e.g.). There is also a variety of possible choices for
the analytical form of     Having the estimate     we may estimate the yield for a
nonobserved maturity                          as



One of the simplest forms of    is a polynomial function of a small degree K




which leads to a polynomial regression. For          the corresponding function is a
cubic function and 4 parameters are to be estimated. Due to bad experience with
polynomial regression, other types of are recommended.
   One of the successful and recently frequently used models is the model of cubic
splines. Assuming                        we consider functions such that (i) is a
piecewise cubic function, i.e., equals



(ii) is twice continuously differentiable everywhere; this is (together with (i))
equivalent to



We then choose the function from this class that minimizes a combination of the
residual sum of squares and the integrated squared 2nd derivative of




with a smoothing constant           The resulting represents a compromise between
fit of data and smoothness of the fitting curve. Values of the smoothing constant
cover ordinary least squares fitting by a straight line         as one extreme, and
pure numerical interpolation by a piecewise cubic functions             as the other
one. Details of the method together with an algorithm can be found in [150].
    Another flexible model has been treated by Bradley and Crane in [24] (see also
Example II.5.4.4):
38             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

This model should be taken with care, however, because with wide range of observed
maturities severe discrepancies may appear, see the Example below and Figure 8
in II.6. After the logarithmic transform and the reparametrization         the last
equation becomes



which is linear in parameters and these may be simply estimated by ordinary least
squares method.
   Two alternative techniques of modeling the term structure of a coupon bond will
be discussed in 4.1.3.

3.8.1 Example. Consider declared interest rates for term deposits of the Czech
saving company as in February 1999:
Maturity (in days) 7 14 30 60 90 120 150 180 210 240 270 290
Interest rate (p.a.) 5.4 5.4 6.2 6.1 6.1 6.00 6.00 5.9 5.9 5.9 5.9 5.8
The yield curve is humped. Let us make a comparison of three estimating pro-
cedures: (i) fitting by a cubic function, (ii) fitting by cubic splines, (iii) fitting by
(50). For (i), (iii) there are no alternatives while in case (ii), we have experimentally
chosen the smoothing constant as to get the best fit from the optical point of view.
The estimated curves along with the original rates are plotted in Figure 6. We see
that for such a pattern it is difficult to fit the data satisfactorily by simple analytic
models. Particularly, fitting by the cubic function may lead to a dangerous conclu-
sion, i.e., that for longer maturities the yield curve rises again. This is not the only
exception. Another example (not presented here) shows that even the polynomial
interpolation of a very nice smooth yield curve observed at discrete times (years)
1, ... ,30, resembling a parabola, by a polynomial of the degree 29 reveals unrealis-
tic values for some points within the intervals. We strongly recommend not to use
the polynomial fitting procedure.
                                I. FUNDAMENTALS                                  39

I.4        RETURN, EXPECTED RETURN, AND RISK

return, rate of return, random walk hypothesis, Black-Scholes model, risk, para-
metric value at risk (VaR), nonparametric VaR


Warning
   Some symbols used in the following text are very popular both in financial and
financial mathematics literature, unfortunately with a different meaning. Particu-
larly, symbols or R may serve as typical representatives. Sometimes R or means
a return, sometimes the rate of return, sometimes the expected rate of return, some-
times the interest rate, etc. Also, there is an ambiguity in distinguishing between
a random variable and the expected value of it. In financial literature, a random
variable is often stressed by the wave, like    and the expected value is simply X,
while in mathematics X is reserved for a random variable and EX stands for its
expected value. The reader is politely asked to pay attention what the respective
symbols mean.

4.1 Return
   The concept of return should be considered in a dynamic setup; by return of a
financial asset we mean the difference between the wealth (in monetary units) at
the end and the beginning of the period under consideration. Consequently, this
leads to the following definition of the rate of return ROR, say:




Suppose that the (market) price of the underlying asset (security) at time is
Following the above idea, we may simply define the rate of return as



As in the case of interest rate, we will alternatively use a percentage or a decimal
form of the rate of return;            and              mean the same. Taking into
account the accumulation (multiplicative) effect and an analogy with the force of
interest, we can define another measure      as a rate of return by




that is,




by definition. Note that      as defined above are often called logarithmic prices.
For small values of the rate of return,    does not differ from     too much. By
40             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

Taylor expansion,                                   so that the difference is of order
        Thus, for            we have                 e.g. For higher values of     the
difference increases. The rate of return      for the time horizon T is then defined
by the relation




   In case of securities, let us denote by  the rate of return for the period
the (market) price of the respective security at the end of period     and        the
dividend paid for the time interval          Then




The first part of the rate of return,              represents the so called dividend
yield, or in case of coupon bonds, coupon yield, while the second part,
         represents the capital yield. Note that the dividend is usually paid rarely
in comparison with the time period considered, once, or twice a year, say. For
a correct expression of the rate of return we should incorporate the corresponding
part of the dividend into the formula (1). If we consider the time period of one week
with the yearly paid dividend D , we substitute                    e.g. In the theory,
we must also distinguish between expected returns (ex ante) based on subjective
probabilities and returns coming from historical data (ex post).
   For an asset paying no dividends the rate of return becomes




4.1.1     Random Walk Hypothesis
     Under the random walk hypothesis the logarithmic prices follow the model



where        are either uncorrelated (weak form) or independent (strong form) iden-
tically distributed random variables (shortly iid for the latter case) with
and                  and represents a drift or trend. Next we will suppose that the
     are iid. It follows that the     are iid random variables under the random walk
hypothesis. Since for




we have                and                  In the stationary case       there are
only random fluctuations about the initial logarithmic price       For the original
prices    we have
                                 I. FUNDAMENTALS                                    41

or



The ratios                                are therefore iid random variables. Also
the returns             are iid under the above assumptions. The case of normally
distributed    will be treated in the next Section.
   Sometimes it is supposed that the original price process is driven by



with analogous assumptions on
   Sometimes even an unrealistic assumption is made that the     are independent
identically distributed. However, the independence of    does not generally guar-
antee the independence of the returns        Just look on the covariance between
two successive rates of return:




which could hardly be zero.

4.1.2   A Simple Model for Price Development
   The model presented in this Section serves as a background for more compli-
cated models like Black-Scholes model for option valuation etc. We need only two
assumptions concerning an efficient market: (i) all the past history of the price
development is reflected in the present price; (ii) the response of the market on
any new piece of information is immediate. Assumption (i) resembles a Markov
property.
   Let          and denote                                for a moment,    being a
starting price. In the model it is supposed that the return,       in our case, can
be decomposed into a deterministic and a stochastic part in the following way:




Here the first term       is the deterministic part, is called drift or a trend coef-
ficient while the second part is a stochastic term with so called volatility, standard
error or diffusion    and                              standing for the increment of
a standard Wiener process. In more general models, both           and may be also
functions of P and      Recall that the Wiener process                    is a stochas-
tic process with continuous trajectories such that                with probability 1,
for      positive the distribution of                is normal                  and for
any                                   the random variables
42              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

                         (the increments) are independent. See Part III for more
details. Since the distribution of     is          (9) may be written in the form

where is an N(0, 1) random variable so that the return               possesses the
normal distribution                 This formula is useful for discrete modeling
and simulation. Formally, for        we obtain the stochastic differential equation
(SDE, see Theorem 12.6, p. 223 in [93])



This equation describes the so called geometrical Brownian motion, see Part III
2.2.12. We will now make use of Itô formula to characterize the development of
logarithmic prices. For             the Itô formula reads (see Part III, Corollary
2.2.9)



Put                 The first and second derivatives of with respect to P are
and         respectively. After some algebra we obtain the solution to (11) for the
logarithmic prices:

     The discrete version of the last equation is (recall that

with distributed as N(0, 1) again.
   The solution to the SDE for the price process with given initial value    is

(see also 3.1.1 in Part III) so that

(see 3.1.2 in Part III) and therefore

where by the symbol             we mean the distribution of the random variable
exp            the log-normal distribution with parameters     and   which are
not its mean and variance, respectively. The density of           is



The mean of                  is                                  and the variance is

   As a consequence of (16) we can deduce that the conditional distribution of
given    is

After some algebra we obtain the conditional expectation and variance:
                                  I. FUNDAMENTALS                                    43

4.1.3   Important Remark
   In this Part, unless otherwise stated, by returns we will mean either returns or
rates of returns without further specification. Either of the return defined above
will be considered as a random variable denoted by                for the respective
time period.

4.1.4   Expected Return
   Often, return is a nonnegative random variable but this is not the rule. Let us
denote F the distribution function of   The expected return of is the expected
value



4.2 Risk Measurement
   Here we will restrict our explanation only to cases of quantitative measures of
risk. All of the measures discussed here are based on the variance of the random
variable in question, the return in our case.

4.2.1 Standard Deviation – Volatility
   Basically, the risk of the return is defined as the standard deviation of



A riskless asset is an asset with         so that the return is a constant with proba-
bility one.
   In literature we can find an analogous measure based on the variance of the
return, called volatility. This term is used either for the variance or for the standard
deviation of the return or of another stochastic financial variable.

4.2.2 Example. Let us consider two assets, A and B. Suppose that the rates
of return randomly depend on the state of the economy in the way showed in
Figure 7. Obviously, both assets have the same expected rate of return, and
respectively:
44              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

Their respective variances are



so that the risks are                   and                  We conclude that the
investment into asset B is less risky than into A.

4.2.3   Value at Risk
  Another useful and recommended measure of risk is called Value at Risk, shortly
VaR. (Distinguish between symbols VaR – Value at Risk and var – the variance.)
Value at Risk at confidence level    shortly       is defined by the relation



In words,            is the cut-off point under which the return will attain values
only with some given (small) probability         Thus          is the       per cent
quantile of the distribution of Different financial institutions use different levels
of confidence; the Bankers Trust 99 per cent, J P Morgan 95 per cent, Citibank
95.4 per cent, e.g. Otherwise the confidence level is stated in reverse form, 1 per
cent, 5 per cent, etc., but the meaning is the same; the maximum possible loss will
be more than VaR with probability or it will be less than VaR with probability


4.2.3.1 Parametric VaR
   Let us start with the so called parametric VaR. Suppose that the random return
possesses a distribution from a location-scale family of distributions. Let     be a
distribution function free of any other parameters and suppose that the distribution
function          of the return is of the form




where is a real number called location parameter and           is called scale param-
eter. In what follows, we deal with distributions for which the location parameter
is equal to the expected return and the scale parameter is equal to the standard
deviation. If we denote the      per cent quantile of the distribution function
as      then we get for



and therefore



Sometimes, the last quantity is called absolute value at risk while
                                  I. FUNDAMENTALS                                    45

is called relative value at risk. Parameters and are usually unknown (even if
the analytical form of the distribution G is supposed to be known) and typically
they should be estimated by their sample counterparts.
   Such an approach is good if we want to calculate VaR for the return based on
data coming from the respective period. If we need VaR for a subsequent period
or periods, we must take into account that both the mean             and the volatility
parameter can change in time. There are two simple models with a theoretical
background that overcome this problem.
    Firstly, we assume that the mean return does not change in time, but the variance
of it is proportional to time. So if we consider the prospective return after T periods
after the original parameters had been obtained, we suppose that the variance is


It follows that the value at risk may now be computed from the formula


Secondly, if we suppose that the mean is proportional to time, i.e.,               then
the formula for VaR becomes


   Often it is supposed that G is the distribution function of the standard normal
distribution     Numerous examples show that this is not a frequent case in practise,
however.
   Formulas (20) to (26) relate to return and to its characteristics              If is
the rate of return instead, and          its characteristics, then the value at risk in
(20) – (26) is expressed in terms of the initial investment     as unit, in other words,
the maximum possible loss (in dollars) is
4.2.3.2 Nonparametric VaR
   If only little is known about the analytical (parametric) form of the returns’
distributions but a sufficient amount of (historical) data is available, then a proper
method for the risk analysis may be based on a nonparametric approach. Suppose
that the observed returns during a given period (one year, say) are                For
data based on daily closing prices from a stock exchange we have about
observations yearly, e.g. We rank the observed returns to get the ordered random
sample

Instead of the theoretical quantile    in the above considerations we will use the
empirical      quantile    defined for           by



For a chosen confidence level we may state that the return will not fall under
with probability        Similarly, the conclusion for VaR in case of a loss follows.
This may be accepted as true for a one-period prospective, in the above case for one
year ahead. The extension to more than one period needs some kind of speculation,
however. Some regression techniques for a trend investigation may be helpful in
this case.
46            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

4.2.4   Remark (The Distribution of R and Related Quantities)
   The simplest assumption in accordance with the random walk hypothesis is that
the R’s are iid and moreover that they are normally distributed. The empirical
studies reveal that this is often not the case. Usually we meet a violation of the
zero skewness and zero excess property of the supposed normal distribution. Some-
times the problem of symmetry is not too severe for returns, but an important
violation may be observed with other characteristics. Concerning excess, the differ-
ence between the theoretical value for a normal random variable (equal to 0) and
the actually observed values sometimes appears to be significant. In [159], p. 45,
the reader may find an analysis of the excess of stock returns which shows that the
distribution of the respective returns is far from normal. See also [109].

4.2.5 Stress Testing
   Often it is of interest for an investor to know what will happen if the market
conditions attain their extremes, either in positive or negative direction from the
investor’s point of view. Of course, the more unfavorable, the more important
they are for the investor’s decision making, and they resemble VaR (in the sense of
maximum possible loss) to some extent. A possible method to see what will happen
is based on a scenario analysis. Stress testing starts with a construction of scenarios
covering the extreme situations involved. The scenarios may be developed either
from historical experience (historical scenarios) or from a theoretical model of the
further development of the characteristic in question (hypothetical scenarios).
   Stress testing catches the dynamics. It is therefore a task for the decision maker
to state the limits or maximum likely changes for the periods of time under inves-
tigation. There are some recommendations. For example (see [89]), the Deriva-
tives Policy Group suggests the following guidelines for the extreme movements
of the variables involved in derivative’s products (all given in basic points) for a
one month’s period; parallel yield curve shift ±100, yield curve twisting (change in
shape) ±25, stock exchange index change ±10, foreign exchange rate change ±6,
volatility change ±20.
   A computational problem can arise with stress testing. If the time horizon covers
T periods, say, and we consider four possible outstanding values of a variable in
question (typically maximum, minimum, mean, and median), we have to generate
    scenarios and afterwards to evaluate the desired indicator or measure. For a
typical ten years’ currency swap described in Example 1.6.4.4 with the interests
paid semiannually we have              so that the total number of scenarios is
1, 099, 511, 627, 776, a pretty large number of scenarios to be analysed. Note that
actually two variables affect the resulting cash flow in Example 1.6.4.4; the exchange
rate and LIBOR. Hence in fact there are even more than four possibilities at every
period, at least at the initial and the final period.
    To avoid this trouble, usually only a few (relative to the total number) of scenar-
ios are selected and the desired measures evaluated. The typical trajectories then
cover the most optimistic and most pessimistic (worst–case) scenarios consisting of
all maximum and minimum values together with the average or median trajectory.
    Another reduction of the size of the problem may be reached by a careful se-
lection from the whole set of scenarios. A useful technique of such a selection is a
                                 I. FUNDAMENTALS                                  47

Monte Carlo simulation approach. We sample a number of scenarios at random and
evaluate the desired characteristics of every sampled scenario. Such characteristics
create a random sample and its useful descriptive statistics can be calculated. Since
these statistics are obtained from a large number of characteristics, thousands say,
we may employ the standard statistical inference based on a normal distribution’s
assumption, using the central limit theorem’s argument. Note that the Monte Carlo
simulation is generally a very useful device for the risk analysis.
48            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

I.5 VALUATION OF SECURITIES

valuation of different securities (bonds, options, forwards, and futures), arbitrage,
hedging, put-call parity, Black-Scholes formula, binomial model


5.1     Coupon Bonds
    Consider a simple coupon bond, coupons fixed, see 1.6.1.5. For the sake of
simplicity assume that the coupons are paid annually. The cash flow to the
holder of the bond is                             where P is the value invested into
purchasing the bond. At the time of issuing, the issuer sells the bond for its face
value F. If this is not the case, there is something wrong with the initial setup
of the coupon rate. Usually bond valuation does not consider the initial cost of
purchasing the bond, P, and rather takes into account only the future cash flow
resulting from the coupon payments and the redemption of the face value at the
maturity date, so that the corresponding cash flow becomes C, C,..., C, C + F.
Moreover, the history of the past payments is of no interest for the holder, and he
or she values the security on the basis of the expected future cash flow only.
   More formally, let us suppose that the time of valuation is while the maturity
time is           The coupon payments take place in times
... ,T. At time T there is the additional payment of the face value F. Altogether we
have            payments. With the valuation interest rate and the corresponding
discount factor                  we can express the present value of the above cash
flow sometimes called the dirty, gross, fair, or full price or value of the bond as




   This formula provides a correct expression of the present value of the bond.
There is one point to be discussed, however. If           is an integer, the above
formula assumes the immediate payment of the coupon at time In practise this
is hardly the case because the issuer states the clause of so called ex-coupon. It
means, that after some date, called ex-coupon date, the bond is traded without the
first forthcoming coupon and the coupon payment belongs to the former holder of
the bond. Thus it is more realistic to adapt (1) to




Sometimes it is useful to invert the time by setting           In this case,   means
the time to maturity      need not be an integer). Then
                                  I. FUNDAMENTALS                                     49

with the first term missing if is an integer. The value             is called accrued
interest. Using the simple interest method, the accrued interest can be expressed as
               The two values slightly differ, of course. Accrued interest is a reward
to the seller of the bond compensating the loss of the next forthcoming coupon.
The difference between the dirty price and the accrued interest is called pure price,
pure value, net value of the bond which therefore takes the form




which is also quoted in the financial press.
  A very important measure of a bond is the so called yield to maturity. Let us
suppose that the market price of the bond is MP. Consider the value of the bond
expressed in terms of interest rate either from (1) or (3),       ceteris paribus.
Then the yield to maturity, YTM, is defined as a solution to the equation



Since YTM is in fact the internal rate of return and the assumptions of Theorem
3.4.1 are fulfilled, there is just one YTM.
   Another very simple but frequently used measure of a bond is its current yield:



Note that so far we have supposed that the coupons are paid annually. We will
discuss other than annual frequency of coupons later.
   For further analysis it is convenient to suppose that is an integer. Then the
value of the bond (immediately after the coupon payment), now identical with the
net value, becomes




Note, that in ancient literature this formula is used for calculation of the net value of
the bond if is not an integer. In this case, the net value is calculated as the linear
interpolation between values                                and
The interpolated value is                                  The dirty value is calculated
as                   the term               standing for the accrued interest, without
taking into account discounting.
   From formula (8) we can immediately deduce that the net value of the bond
at the maturity date equals its par value:                             Further, for the
valuation interest rate equal to the coupon rate              the net value of the bond
is equal to the par value independently of the time to maturity:
For                         is a decreasing function of and                           for
50              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

        The reverse is true for        so that the net value is an increasing function
of and                           Hence, in case         the bond is called a discount
bond while in case          the bond is called a premium bond. Thus, an increase of
the interest rate will cause the value of the bond to fall, whereas a decrease of this
rate will cause it to rise. As approaches 0 (this means, to the maturity date), the
net value of the bond approaches its par value F. An analysis of (8) also shows
that, ceteris paribus, bonds with longer maturities are more sensitive to changes of
  than those with shorter ones.
   After some algebra we get a formula for the duration corresponding to the net
value expressed in terms of the discount factor:



or in terms of the valuation interest rate:



For         the expression for the duration simplifies to




5.1.1       Example. Suppose we have a bond with par value                and coupon
            (all in thousands CZK) so that the coupon rate is           that is 10 per
cent p.a.




If the market interest rate is 0.05, the bond is a premium one, if it is 0.15, the bond
is a discount one. The dependence of the price of the bond on time to maturity is
graphically illustrated in Figure 8. The decreasing function on the left part of the
figure corresponds to the price of the bond with the valuation interest rate
etc.

5.1.2 Exercise. Investigate modifications of the above formulas in case that the
coupon payments appear semiannually, i.e., with frequency 2, which is perhaps the
most frequent case.
                                 I. FUNDAMENTALS                                    51

5.1.3   Remark (Construction of the Yield Curve of Coupon Bonds)
   The simplest way is to take a set of similar coupon bonds with different maturities
and their calculated yields to maturity. Then some method of fitting discussed
above may be applied. An alternative approach is known as bootstrapping. (Do
not confuse with the same term used in statistics!) The idea consists in valuating
every coupon payment (and also the principal) using the corresponding spot interest
rate. Thus the present value formula (8) for the valuation of the bond with maturity
T at time is now



Suppose for the simplicity that there are exactly T coupon bonds with maturities
1, ... ,T, fixed coupons            face values            and (observed) market
prices                   For the bond the present value is expressed as



For the first bond, the yield to maturity       is, according to (6), calculated from
the relation



For the second bond we use or bootstrap the information from the first bond
already ascertained) using the relation



and by recursion, having known                      we calculate the yield      from
the relation




Care should be taken if the maturities are not equally spaced. In any case, some
fitting procedure is almost always necessary.

5.1.4 Callable Bonds
   A callable bond means that the issuer has the right to call back the bond prior
to the designed maturity. In fact, in our terminology, the issuer is the holder of a
call option which has some value itself. Therefore, from the point of view of the
holder of the bond, the price of the callable bond is


The value of this call option may be derived by standard methods given later in
5.2.5 and Part III. Similarly, putable bonds can be issued and valued, see II.6.4.
52            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

5.1.5   Remark (Amortized Bonds)
   An amortized bond is characterized by constant installment payments of the
principal and interest like a loan, see 3.3.8. Suppose that the cash flow of the
usual coupon bond is                                and that of the amortized bond
                      both of the same length. As an exercise, find        such that
the two bonds are equivalent in the sense of the equality of their present values
under the valuation interest rate equal to the coupon rate              Remind that
an amortized bond is less risky than a classical coupon bond (it immediately repays
the principal) and hence, in practise, the risk premium offered by the issuer is not
as high as in case of the usual coupon bond. The actual          is less than that of
calculated on the above equivalence principle.
5.1.6 Remark (Simple Bonds under Uncertainty)
  Suppose that a zero coupon bond pays F with probability and pays          with
probability         at maturity, where          is called the recovery rate and
            is called the loss rate. The case       is equivalent to the default.
Suppose that the valuation interest rate is   The fair value of the bond is the
expected present value:



Further, let us consider a one-period coupon bond with coupon C and par value F
which sells for par F now and pays C + F with probability and               with
probability       at maturity, having the same meaning as above. The question
is what is the fair value of the coupon C under the valuation interest rate We
equate the present value and the discounted expected future value



solve for C, and get the fair value of the coupon



As an exercise, extend the above one-period case to a multiperiod one.
5.2     Options
   We start with the valuation of options since the ideas of their pricing are general
enough to be used for the valuation of other derivative securities. The key concepts,
arbitrage and hedging play a crucial role in the mathematical modeling.
5.2.1 Arbitrage
   All the models treated in this book assume no-arbitrage principle, in other words,
the absence of arbitrage opportunities. By an arbitrage opportunity we mean any
of the two situations:
   (1) At the same time, the same asset is sold at different prices at different
        places. Nowadays, this can hardly happen in the financial world since the
                                 I. FUNDAMENTALS                                    53

        information from one stock exchange is available on the stock exchange on
        the opposite side of the globe within a second.
    (2) With zero investment at time 0 there is no probability of loss but there is
        a possibility of a riskless profit at time 1. More rigorously, an arbitrage
        opportunity in this case is a self-financing trading strategy with no initial
        investment, and a positive probability of positive profit and zero probability
        of negative profit later on (cf. III.3.3 and III.3.3.1).
   Arbitrage opportunity is often characterized as a ”money pump” and no-arbi-
trage principle by the slogan: ”There is no such thing like a free lunch.”.

5.2.2 Hedging
   Hedging may be compared to insurance. It provides an insurance against un-
favorable development of the market from the investor’s point of view. Hedging
may reduce the risk but, under no-arbitrage principle, risk cannot be fully elimi-
nated. In principle, hedging consists of taking two opposite positions in the assets
which are highly negatively correlated. The investor who hedges his/her position is
called hedger. A perfect hedge means that the hedger combines an option and an
underlying asset in such proportions that result in a riskless position and provide
a riskless profit (equal to the riskless interest rate). See also III. 3.3.5. This is
a rather idealized situation, however, since it does not take transaction costs into
account.

5.2.3   Notation
   We will assume the continuous-time world with constant riskless rate of interest
(force of interest) applied both to borrowing and lending. Symbols and will
stand for the price of a European CALL and PUT, respectively. Analogously,
symbols C and P will be used for prices of the respective American options. The
price of the underlying asset (usually stock) will be denoted S and we will suppose
that there are no liabilities like dividends connected with this asset during the
period involved. We will also assume that S is a random variable or, more generally
a stochastic process, an approach consistently adopted in Part III. Finally let K
denote the strike price and T the expiry date. If necessary, we add subscript to
stress the dependence of the respective quantity on time,               etc. If the
option is exercised, denote the time of exercising by               For Europeans,

  The payoff of an exercised call option is


and that of a put option is


(16) and (17) are called terminal payoffs. At any given           the value         for
a CALL and            for a PUT is called the intrinsic value of the respective option.
This is the value which the option would have if it were exercised at time If the
intrinsic value is positive, zero, or negative, we say that the option is in the money,
at the money, or out of money, respectively.
54           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

5.2.4   PUT – CALL Parity
   Let us consider the portfolio long one asset, long one PUT, and short one CALL.
It means that we have bought one asset plus one PUT on that asset and sold
one CALL on the same asset. Both the options on the asset in the portfolio are
European with the same expiry date T and the same strike price K. The value of
the portfolio at time        is therefore


Look what will happen at the expiry date. The value of the portfolio becomes


If            then                                   and if             then
                            We conclude that such a portfolio is riskless and leads
to the certain gain K . What is the value of the portfolio at time              Since
the future value is K , the present value is                (for riskless investment
we have used the riskless interest rate     Thus we have obtained so called put-call
parity relation:


This is an example of risk elimination. Note that this formula cannot be applied
to American options due to the early exercise feature.
5.2.5   Option Pricing
5.2.5.1 Natural Boundaries
   The limited liability condition says that all option prices are non-negative. Since
American options have all features like Europeans plus the right of an early exercise,
they must be worth at least the Europeans:


Further, from the put-call parity relation it follows that


For an American CALL we have


The proof is by the contrary; suppose that                        Then we can buy
the CALL at      immediately exercise it and thus get a riskless profit
which is in a contradiction to the no-arbitrage principle.

5.2.5.2 Exercise. The quantities which are not explicitly mentioned remain con-
stant. Prove the following propositions:
    (1) If        then           and
    (2) If           then                  and                       The same holds
        for the Americans.
    (3) If          then                 and                      The same holds for
        the Americans.
                                 I. FUNDAMENTALS                                   55

5.2.5.3 The Black–Scholes Formula
   Let us consider a European call option on a stock, the current price of which is
known and equal to        Since the payoff at the expiry date T is              the
present value of this payoff is



Next we adopt the so called risk-neutral valuation. Under this approach we do
not consider any risk preferences of the investors. Since the higher the level of risk
aversion, the higher the expected return will be for a risky asset, by excluding
the risk preferences we conclude that the only correct risk-neutral is             the
riskless rate. At this point it is important to emphasize that by the above choice
we do not assert that the conditional distribution of      given is that for which
          It seems to be reasonable to take the conditional expected value of the
discounted payoff given the current value of the underlying asset     as the value of
the option but with the expectation taken with respect to the riskless rate



where      stands for the expected value in a risk-neutral world. In Black-Scholes
approach we suppose that the conditional distribution of     given    adjusted for
risk-neutrality (see formula (18) in 4.1.2) is log-normal



To evaluate (21) under assumption (22) we first calculate the expected value



where the random variable X possesses a log-normal distribution                with
the probability density function given by formula (17) in 4.1.2. After some algebra
we get




where stands for the distribution function of the standard normal distribution
N(0, 1). Substituting                            and                  into the
expression for        gives



where
56            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

Altogether, going back to (21) we have derived the Black-Scholes formula for the
value of a European call option:



An elementary application of the put-call parity relation provides the value of a
European put option



where we used

5.2.5.4 The Binomial Option Pricing Model
   We will now assume that the stock price changes only at the equally spaced time
instants               The time unit may be arbitrary (month, day, hour, . . . ).
Further let us suppose that if the stock price is   at time then at time          it
may take only one of two values,     or     with probability or        respectively.
Thus



Also suppose that the changes are mutually independent and the probabilities do
not depend on time. By the no-arbitrage principle we may suppose that the riskless
interest rate fulfills                 (Suppose on the contrary that
e.g. Then the investor could borrow any amount of cash at the riskless rate buy
the stocks and sell them for at least after one period. Such a strategy would lead
to a riskless profit           Note that the usual assumption is              so that
the price can move up and down. Next we state a relationship among               and
  in a risk-neutral world. The expected return from holding the stock should be
the same as the riskless return resulting from the investment    at the riskless rate
   Since

by the above argument we conclude that



and this is fulfilled for



Due to our assumptions,            is a probability called the risk-neutral probabil-
ity. We can also obtain the risk neutral probability by the following construction.
Consider the so called replicating portfolio consisting of A stocks and B riskless
bonds which gives the same payoff as one European call option on the stock with
the strike price K and expiry date        The terminal value of the option is

                                            with probability
                                 I. FUNDAMENTALS                                 57

and
                                          with probability
Thus A and B must satisfy the system of equations



The solution to this system is




From the obvious inequality                  we observe          so that the repli-
cating portfolio always involves borrowing cash and buying the stock in the above
proportions. The present value of the CALL is, after substitution from (30), given
by




where is the risk-neutral probability defined in (29).
   Up to now we have considered a one-period model. Let us look on a simple
generalization for a multi-period model. After two periods we obviously have



Generally, after      periods             integer)




This is the binomial model describing the probability distribution of the stock
price after    periods. By            we will denote the binomial distribution with
parameters      i.e., the distribution of a random variable X such that

   Consider now a European call option with strike price K and expiry date T.
Using the same argument as in the derivation of (21), but with discrete discounting,
the value of the option at time is given by



In a risk-neutral world we should have used the risk-neutral probability    but the
option price can be expressed for an arbitrary We have
58           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

Let J be the smallest non-negative integer such that                       Put



Then




If        the risk-neutral probability, then              so that in this case we can
express (35) in the form



   With the binomial model, a number of questions arise. We have seen that even
under the assumption of the risk-neutral probability there are some degrees of free-
dom in choice of and        We just mention how to handle the unknown parameters
appearing in the model. Some ideas are based on comparing the parameters of
the discrete model to those of the continuous one. Another popular relationship
between and is                  The choice         is also popular. Such assumptions
reduce the dimension of the respective parametric space and open space for a broad
discussion. See [172] and [105] for more details.
   Like in classical probability theory, also here there is a close connection between
the binomial model and its limiting counterpart, the normal distribution model,
as a consequence of the central limit theorem for iid random variables with finite
positive variances. See [144] for more details.
   Since the binomial model is discrete, it enables a straightforward modeling by
Monte Carlo simulation. The simulation models take the advantage of the fact
that on different stages of the dynamic simulation, numerous specific features and
movements of the real life problems may be incorporated. Note that some of the
mentioned movements, particularly shocks, may hardly be considered in a theoret-
ical model.

5.2.5.5 Options on Assets Paying Dividends
   So far we have considered the underlying stock that does not pay any dividend.
We can modify the above results also for a dividend-paying stock. If a stock pays
a dividend during the life time of the option, the payment of the dividend causes
the stock price to fall by an amount equal to the dividend. The dividend yield is
expressed as a proportion of the stock price. For the purposes of this Part, we will
suppose that the dividend yield is constant and understood as continuous like the
force of interest. Hence during the time interval            the stock pays
For European options we may still use Black-Scholes’ type formulas (25), (26) but
now with




The formula for a PUT is given by (27) but with         from (37).
                                  I. FUNDAMENTALS                                     59

5.2.5.6 Valuing American Options
   The following widely used, but, in our opinion, questionable argument enables
to value an American option on an asset which does not pay dividends. From the
inequalities of 5.2.5.1 we have



If the option is exercised at time             then its value immediately becomes
         which is less than the lower bound if the option is still alive. It follows that
an American call option will never be exercised prior to its expiry date and hence
the value of an American CALL should be the same as that of the corresponding
European CALL.
   There is no such argument for American put options and/or American options
on dividend paying assets. Further information on the topic can be found in [105],
[116], [172], e.g.

5.2.5.7 Comparative Statics – The Greeks
   In option pricing formulas there are actually five variables (also called parame-
ters),                  and    The sensitivity to the option prices on these variables
plays a crucial role in financial decision making and is measured by partial deriva-
tives. Since traditionally these sensitivities are denoted by Greek letters, they are
often called Greeks.
   In what follows we will suppose that the options involved are European and that
their prices are driven by the Black-Scholes formula (26) and (27). Note that the
definitions in the form of derivatives given below can be used in a more general
setup. Also note that the respective sensitivities for PUTs can be usually simply
calculated using the put-call parity relation (20). Let V denote the value of either
a CALL or a PUT.
   Delta. The delta ∆ is defined by



After some algebra we get the delta for a call and a put option:



Obviously, since           the value of a CALL is always an increasing function of
    The reverse is true for a PUT. The concept of delta is used for so called delta
hedging. Suppose we are long one asset and short A call options on that asset. The
value of such a portfolio is therefore               We wish to determine A so as
to make the value of the portfolio invariant with respect to (small) changes in the
asset price, i.e.,


It follows that the desired               the so called hedge ratio . Nevertheless,
since delta is changing in time, the portfolio should be rebalanced frequently and
60            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

the hedge should be a dynamic hedge. A dynamic hedge can be rather costly,
particularly in case the transaction costs are not negligible. So dynamic hedging
strategies (as well as other strategies dependent on a frequent trading in time) are
good for market makers or brokers and others with low transaction costs. Observe
that the lower the asset price in comparison with K , the higher the hedge ratio.
A similar measure of the sensitivity is the elasticity of the call price with respect
to the asset price defined by                   Note that always            (prove as
an exercise). Hence the call option is more risky than the underlying asset. An
analogue to delta is the duration.
   Gamma. The gamma          is the second derivative of V with respect to the asset
price:




Gamma for CALL and PUT is the same:




where     is the probability density function of the standard normal distribution
N(0, 1). Since       the values of both types, CALL or PUT, are convex functions
of    Observe that gamma resembles the convexity introduced in I.3.6.
     Theta. The theta    is the time derivative of V :




The calculation is a bit cumbersome but useful exercise (a good idea is to use some
CAS (Computer Algebra System) like Mathematics®):




Alternatively, using the identity



we get it in the form:




We see that      is always negative. From the put-call parity relation we obtain



Nothing can be said about the sign of the last expression.
                                 I. FUNDAMENTALS                                   61

  Rho. The rho P expresses the dependence on the riskless rate:




for a CALL it takes the form



and for a PUT



Immediately we see that           and
   Vega. The vega measures the sensitivity of the option price with respect to
the volatility of the underlying asset:




For both types of options    is the same:



  Sometimes it is also of interest to investigate the sensitivity to the strike price
but for unknown reasons the corresponding Greek is missing. Nevertheless we have




which is always negative and




which is always positive, both these conclusions in accordance with an intuitive
insight.

5.2.5.8 Exercise. Derive formulas (41), (48), (51), (52), (53).

5.2.5.9 Volatility and Implied Volatility
   The parameter the volatility, is of vital importance in option pricing. Since it
is difficult to speculate on its value, usually some estimates must be used.
   One of the most frequently used estimates, called the historical volatility, is
based on past data. In practise, this estimator is, in fact, the usual sample standard
deviation, for instance, of quantities                                   in the Black-
Scholes model. A care must be taken however: The time steps for such a calculation
must be in accordance with time units in which the other quantities are measured.
62           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   More sophisticated estimation procedures are based on models of the stochastic
behavior of volatility. See [26] for a review and [127] for a bootstrap estimation of
volatility.
   Since the other parameters in the formulas for option pricing are known at time
  and also the market value          of the option is known, then, after substituting
these known values of the parameters into the Black-Scholes formula (26), we can
determine the unknown volatility. The corresponding equation reads


where is the function resulting from the Black-Scholes formula. A solution to
(54) is called implied volatility. Equation (54) is to be solved for an unknown given
the values of all remaining quantities. We see that volatility cannot be explicitly
expressed from (54) so that a solution must be found numerically. Moreover, it is
not clear, how many solutions to the mentioned equation exist. If there are more
than one, we should carefully analyze them with respect to a reasonable financial
interpretation.
   Modern computer algebra systems provide the users with a variety of routines
and financial application libraries which can be used for the above analysis. See
[147], [148], and http://www.wolfram.com for a possible approach. Some specific
cases may be found in the series of papers of Benninga and Wiener: [9], [10], [11],
[12], [13], [14].

5.2.5.10 Example. Let us consider 6 options, 3 CALL’S and 3 PUT’s, on a Volk-
swagen stock priced at EUR 70.72 April 23, 1999, expiring 3rd Friday, June 1999
with strike prices                                        The actual prices for the
respective CALLs were 6.31, 4.92, 3.77 and those for the PUTs 2.92, 4.08, 5.48. We
have                             The implied volatilities computed using function
FindRoot in Mathematica are 0.38, 0.38, 0.35 for CALLs and 0.41, 0.42, 0.43 for
PUTs, respectively.




Let us further consider the portfolio consisting of four the above options: long
CALL with strike       long PUT with strike        short CALL with strike      and
short PUT with strike       The value of that portfolio as a function of the stock
price S at expiry with today’s prices of the options is:
                                 I. FUNDAMENTALS                                      63

This is an example of a combination of options, particularly the so called butterfly
spread. See Figure 9 for the payoff of this portfolio.

5.2.5.11 Exercise. Examine and plot the payoffs of the following combinations of
options (all on the same asset) at expiry:
    (1) long CALL with strike      and short CALL with strike         and prices
                (bullish spread),
    (2) long one CALL with strike       long one CALL with strike          short
        two CALLs with strike                     and prices             This is
        also a butterfly spread.
    (3) long one CALL, long one PUT with the same strike K, called a bottom
        straddle,
    (4) reverse of (3): short one CALL, short one PUT with the same strike K,
        called a top straddle.
Explain the motivation for the above strategies.

5.3 Forwards and Futures
   Valuing both forwards and futures is practically the same from the mathematical
point of view and since there is no option but obligation to deliver, it is simpler than
that of valuing options. The seller must deliver the asset at time T. We can derive
the forward price by the non-arbitrage principle. The seller borrows an amount
(=the price of the underlying asset at time at riskless rate and buys the asset.
Hence the forward price must be



otherwise there will be a riskless profit or loss in contradiction to the nonexistence
of the arbitrage. The asset may pay a dividend or need to be stored (like gold,
grain, or oil) with some additional costs. If the corresponding rate is then the
forward price becomes

Note that        in case of dividends and         if there are some additional costs.
64            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

I.6      MATCHING OF ASSETS AND LIABILITIES

matching, immunization, dedicated bond portfolio, static model, dynamic model,
stochastic model


6.1 Matching and Immunization
   In what follows in this Chapter, by assets we mean the inflows and by liabilities
the outflows of a company. The main purpose of matching is to balance assets and
liabilities in such a way that the deficiency is either zero or as small as possible.
Perhaps only of theoretical value is the case of absolute matching; let      and be
the total assets and liabilities at time                  respectively. If            for
all we say that assets and liabilities are absolutely matched. This does not sound
realistic, however, so that an alternative approach is needed. The most frequent
method is to match the discounted cash flows and/or other characteristics of assets
and liabilities.
   Suppose that the liabilities (assets) are represented by a cash flow
               see 3.1. The principle of matched present values of assets and liabilities
at force of interest is then expressed as



This identity can only be satisfied for finite number of  with the exception of
   the absolute matching. In practise, one can choose the force of interest which
he or she believes will be most likely for the period of time under consideration.
Then the matching condition for the present values is



Since     is only an estimate of there is a danger that for some other forces of
interest, even close to the estimated one, the present value of liabilities will exceed
that of assets. So it is a good idea for an investor to immunize his or her position
by imposing further conditions expressed in terms of derived characteristics of cash
flows. The condition



requires the same duration of assets and liabilities and the condition



guarantees that at least in a small neighborhood of                                 will
hold. If we change condition (4) and require instead



we can give an explicit solution to the problem.
                                  I. FUNDAMENTALS                                      65

  Suppose            is a given vector of liabilities, fixed in the sequel. Let
be a 3-dimensional linear subspace of available assets generated by the base assets
         which form the basis of       Let us denote                        a (T + 1) × 3
matrix. Thus every            may be expressed as                   where the coefficients
                 are uniquely determined. Let us further denote




the derivatives of the discount factors taken at                         and
             a (T + 1) × 3 matrix. The three conditions (2), (3), and (5) may now
be rewritten in the form



or equivalently


If we substitute            we get the system of three linear equations for unknown



which possesses the unique solution



provided the inverse exists. Exactly the same formula holds true if we, instead
of three matching conditions, impose matching conditions employing higher order
derivatives.

6.2 Dedicated Bond Portfolio
   An important application of the idea of matching assets to liabilities is the invest-
ment strategy known as a dedicated bond portfolio, (see [60] e.g.) which deals with
a proper selection of available bonds. In general, we may think about allocation
of funds among arbitrary investment opportunities represented by their expected
cash flows. A stochastic version of this problem is treated in Part II.1.2.

6.2.1 Static Model
   Suppose that we have the time horizon                      with investment oppor-
tunities represented by cash flows                                                     ,
                and initial acquisition costs (i.e., the cost for buying these cash
flows)                       It means that      is the cost of the investment at time
       resulting in the expected future cash flow                         Further, let
                   be the expected liabilities over the considered time horizon. Let
the initial wealth of the investor be W = 1. The objective is to create a portfolio
                     (to find the weights in other words,             consisting of the
66           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

above cash flows so as to minimize the total acquisition costs      subject to J + 1
matching conditions




where         stands for the     derivative of the present value with respect to the
force of interest     For     it means the perfect match of present values both of
assets and liabilities, for    and 2 the perfect match of durations and convexities,
respectively, etc. Further imposed conditions on portfolio may be of the type



The lower limit     may represent the reasonable amounts of investment while the
upper limit     may take into account some legal requirements. For example, in the
Czech Republic, pension funds are not allowed to invest more than 10 per cent into
one asset. In our terms, it means that the respective             We also add the
natural condition         Altogether, we have a problem of linear programming:



If we abandon condition (8), the theory says that the optimal solution will consist
of at most J + 1 (=number of conditions) positive weights. For J > N – 1 there
may be no solution to the problem. However, this case is of theoretical interest
only, since in practise we usually ask just for matching up to convexity, J = 2, in
this case.
   Since there is an uncertainty about the valuation force of interest we usually
need to solve the above problem for a set (scenarios) of expected interest rates and
to discuss the solutions from the fundamental point of view.

6.2.2 Dynamic Model
   In the above model, the only dynamics involved has been included via present
values. In practise, the liability schedule is often determined at any time instant,
              This may be the case of obligatory balances, reserves, or solvency
margins. At time the inflow is




so that the necessary conditions to meet the liabilities at any time now read




It is a good idea for the investor, even under condition (11), to reinvest a possible
surplus. Suppose that is the short-term reinvestment interest rate for the period
                                  I. FUNDAMENTALS                                  67

         and      is the surplus at time   Then the inequality condition (11) becomes
the equality




with the initial surplus      if any. Again, the optimal solution is given by solving
the linear program




where

6.2.3   Discussion of the Restrictions
  Note that if the short-terms interest rates are higher than the interest rates
coming from the investment into CF’s, the solution will naturally result in x = 0
and some positive

6.3 A Stochastic Model of Matching
   Here we give a simple stochastic version of the model given in 6.1. Suppose that
the force of interest is now a random variable. Denote
the vector of discount factors. Note that if possesses a normal distribution then
       posses log-normal distributions. Then the surplus S is also a random variable
that may be expressed as



and the expected surplus is                     The elements of Ed are the moments
of the log-normal random variable           We will find the assets a which minimize
the mean squared error       Put                  We have then



This is obviously a convex function in x so that the minimum can be found by
putting the gradient equal to zero:




The solution is



provided the inverse exists. Thus the assets are in the form
68             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

I.7 INDEX NUMBERS AND INFLATION
construction of index numbers, properties of index numbers, stock exchange in-
dexes, inflation, retail price index

  In this Chapter we will use the following notation. Let
                                                  The symbols      (more often
omitted), ”*”, ”/” will mean:                            (the scalar product),
but      is the n × n matrix with elements



7.1      Construction of Index Numbers
   Index numbers (or simply indexes) serve as a means for the comparison of the
same complex event either among territories at the same time (cross-section) or on
the same territory in different times (time series), see [18]. Without loss of generality
we will compare the events over time. The well-known indexes are RPI (Retail Price
Index, used in UK; the USA equivalent of RPI is CPI, Consumer Price Index)
and many of the stock exchange indexes like PX (Prague Stock Exchange), FTSE
(Financial Times Stock Exchange), Dow Jones, Standard and Poor’s (New York
Stock Exchange). All of the mentioned stock exchange indexes appear in various
modifications. Let us consider a complex event A, say the cost of living, which may
only be observed via some particular events                    like consumption of food,
household expenditures, etc. Usually N is large so that only               representatives
out of               can be used for computation purposes. We can renumber the
representatives to become                In period let the indicator of the particular
event    be with weight                                      Denote
                       Index may be the index of a region or of a time period, e.g.
As we note above, we will consider as time. Similarly, the             will usually stand
for the prices while the       for the corresponding quantities or weights. It is the
goal of the theory of index numbers to find a scalar characteristics of changes of
a global price level over time. The price index is a number which shows how the
complex event A changes over time with changing prices               while quantity index
measures the influence of changes in the quantities
   Let be the initial (base) period and be the current period,            the price index
describing the change in price level from time to From the historical point of
view, the first attempt resulted in the following naive index



which has the disadvantage that it depends on the quantity units in which the
prices are given. Another index suggested by Edgeworth is simply the geometric
mean of the corresponding ratios of prices:
                                  I. FUNDAMENTALS                                     69

which has the same unfavorable property as (1) but there is an idea behind, i.e.,
if the ratios       are random variables possessing a log-normal distribution then
the geometric mean would be a good estimator. A better approach starts with the
idea that the price index should be a weighted arithmetic mean of the ratios
with weights




A suitable (and generally accepted) choice of weights takes the form



For               we get the Laspèyres price index



and putting                 we get Paasche price index




The meaning of the so called aggregate         is clear; it is the price of a consumer’s
basket if he or she buys quantities    for prices     The index numbers are defined
as the ratios of these aggregates.
   In practise, there are two ways of comparison: a) we compare the price level
with the initial (base) period and afterwards we obtain                    if we take the
weights from the base period (base-weighted index) or                     if we take the
weights from the current period (current-weighted index), b) we create the chain
of indexes                        with the same meaning as in a).
   The index numbers should have some desirable and natural properties: (i)
   (ii)            (change of time), (iii)                        (chain rule). Neither
Laspèyrese nor Paasche index generally fulfil (ii) or (iii). For example,




The equality in the last expression is achieved if            which is not too realistic
since the individuals adapt to price level. The ratio



is called bias.     Let us examine the bias for the Laspèyres index number. Put
                           and                    Obviously          so that f are
weights. Then
70           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

Denote further                          the weighted means,
                      the weighted standard errors,




the correlation coefficient,                         the coefficients of variation.
Then




If          which is the case if the demand increases,             consequently the
prices in the next period go up,              We can conclude that the Laspèyres
price index has positive bias. The reverse is true for the Paasche index. The basic
ideas concerning this problem may be found in [18].
   We give three examples of more sophisticated index numbers which avoid some
lacks of the above indexes. The Lowe price index is defined by




where are weights constant over time, possibly constructed artificially. The
Edgeworth–Marshall price index takes the weights as the arithmetic mean of the
weights of the compared periods




The geometric mean of the Laspèyrese and Paasche index gives the Fisher price
index number




Lowe and Fisher indexes have already the desirable properties (i), (ii), and (iii).

7.2 Stock Exchange Indicators
   Most of the stock exchange or market indicators are constructed in a similar
way as the Laspèyres price index. There are some exceptions, however. We start
with one of the oldest indicators, the Dow Jones Industrial Average (DJIA) which
monitors 30 best stocks (called blue chips) traded on the New York Stock Exchange
(NYSE). It is defined by:
                                 I. FUNDAMENTALS                                    71

where     is called divisor. Originally the divisor (in 1928) was just the number of
involved stocks,              Later it served to ensure continuity of the correspond-
ing time series due to mergers, splits, replacement of the companies in the index,
etc. In 1991,                 This phenomenon may be recognized as the change of
representatives and the problem of continuity can be generally settled down in the
following way. Let      be the time of change. Let               be the values of the
indicators based on old representatives, and                the values based on new
representatives. To ensure the continuity, the following relation must hold:



The indicators based on new representatives are afterwards multiplied by       the
continuity factor, until a further change of representatives. Hence the series will
look like


till the next change of the representatives. Most of the indicators are also adjusted
(multiplied by a factor) to commence with the initial value 100 or 1000, say.
    Other market indicators use the weights; the market prices       are weighted by
the numbers of shares outstanding        Therefore the value of the indicator is



where       is a proper continuity factor. A popular composite index of this type is
Standard & Poor’s 500 (S & P 500) consisting of 400 industrial, 20 transportation,
40 utility, and 40 financial stocks. Another one is NYSE Composite Index which
consists of about 1600 stocks. Finally, let us mention a sample of other frequently
used indicators which are constructed similarly; NASDAQ (the National Associa-
tion of Security Dealers Automatic Quotation), AMEX (American Stock Exchange)
and non-American indexes Nikkei (Tokyo), FTSI (Financial Times Share Index,
London), DAX 30 (Germany), PX 50 (Prague).

7.3 Inflation
    In 2.4 we have seen that inflation has an important impact on the determination
of the interest rate. Inflation means an increase of the general price level and, as a
consequence, a decrease of the purchasing power of money. An opposite to inflation
is the deflation which can occasionally also be observed as in the United Kingdom in
the period 1920–1935. Inflation is measured by the retail price index (RPI, United
Kingdom) or by the consumer price index (CPI, USA).
    Usually, the retail price index is constructed as a slight modification to the
Laspèyres price index by a government statistical office and its construction is a
rather complex task. The weights are derived from the sample surveys of the
composition of a consumer basket. They have to change from time to time. At the
beginning of last century, the consumer basket consisted mainly of the essentials;
in the United Kingdom the weight of food was 60 per cent in 1914; some sixty years
later it was only 25 per cent and it decreased to 16 per cent in 1990.
72             STOCHASTIC MODELING IN ECONOMICS AND FINANCE



7.3.1     Example (RPI in the Czech Republic). Thousands of goods are
grouped in 10 main groups and the total of weights is 1000. The groups and
their weights in 1993 were: food 327.1, housing 143.7, transport 104.8, leisure 97.5,
clothing 90.9, household goods and services 77.2, other goods and services 50.5,
public catering and accommodation 47.2, health care 44.2, education 16.9. Thus
the importance of food in the index was 32.71 per cent. Denote these weights as
       Let us look on the situation in August 1997 (denoted as 8/1997). The current
monthly inflation is calculated from the index




i.e., 100.7 per cent with 7/1997 set to 100 per cent. Thus the monthly inflation was
0.7 per cent. In comparison to August 1996




or 109.9 per cent. Comparison with the yearly average of 1994 is calculated as




Finally, the yearly inflation for the period September 1996 to August 1997 (9/1996–
8/1997) compared to the same period of the past year is calculated from




so that the current yearly inflation was 7.9 per cent.
                                 I. FUNDAMENTALS                                   73

I.8 BASICS OF UTILITY THEORY


utility function, marginal utility, risk aversion, certainty equivalent




8.1 The Concept of Utility
   Utility in economic theory means a degree of satisfaction or welfare coming from
an economic activity, from possession or consumption of goods. In financial world,
by utility we usually mean the welfare originated from investment. Suppose that we
have an N-dimensional set of investment opportunities       For
       will be understood as the volume of the investment into the        investment.
In utility theory we suppose that there is an ordering relation on           denoted
by      If            then          means that x is weakly preferred to y. If
but not          we say that x is preferred to y, and write            If          and
       we say that is equivalent to y and write x ~ y. It is reasonable to assume
that                 either         or       (completeness),        (reflexivity), and
                            (transitivity).


8.2 Utility Function
   If there exists a real valued function             such that




it is called ordinal utility function, shortly utility function, and the underlying
theory is known as ordinal utility theory. Obviously from             it follows that
                For any given           the set                              is called
the indifference set. The corresponding plot is called the indifference surface or
indifference curve. This means that from the point of view of an investor, all the
investment opportunities from       provide the same degree of satisfaction and the
investor cannot distinguish among them.
   Finally note that for decision making the utility function contains only the in-
formation on ordering. In most cases there is no interpretation of a specific value
of U( ). If we consider any increasing function of U( ), the conclusions remain the
same. Such an invariance property may be an advantage in calculations.


8.2.1   Example. Let us consider the utility function (N = 2)
74              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

The indifference curves for                are shown in Figure 10.




     In the rightward direction the utility increases.

8.3 Characteristics of Utility Functions
   Obviously, the utility function is increasing in the sense of preferences. The
slope of the indifference curve can be expressed in terms of the respective derivative
           If          then the total differential



and if we let all      but     and    constant we get




     gives the marginal rate of substitution; the increase by one unit of must be
compensated by the increase of       units of     Since usually         the increase
of results in a decrease of by          units. (Remark, that for unknown reasons
in literature the marginal rate of substitution is defined with the opposite sign as

   A simple observation of the behavior of a rational investor leads to the law of
diminishing marginal utility:
    With increasing amount of investment the additional satisfaction
                     or utility will decrease, ceteris paribus.
   The explanation is simple. Suppose that in situation A you invest USD 10,000
and get 10 per cent return, i.e. USD 1,000. In situation B you have already invested
USD 1,000,000 and have got 10 per cent return again, i.e. USD 100,000. If you
invest some additional USD 10,000 in situation B, your return will increase to USD
101,000. Surely these additional USD 1,000 in situation B will not be valued as the
same amount in situation A.
   Mathematically, the law of diminishing marginal utility says that the utility
function describing reasonable principles of decision making is concave. We can
summarize natural assumptions on a utility function:
   The utility function is increasing, concave, and twice differentiable.
                                 I. FUNDAMENTALS                                    75

   It should be emphasized that the invariance property (application of an increas-
ing function to the utility function) does not preserve concavity in general.
   In practise, utility functions usually depend on through some aggregate func-
tions which may be functions of another utility functions as is the following case.
Let the costs of the respective investments be expressed by the price vector
                 Further let us suppose that the wealth of the investor is W so that
he or she can choose an arbitrary satisfying the condition                   If we do
not suppose an immediate consumption (which brings another problem), we may
suppose                Given a utility function U = U( ) we can define another utility
function



which, given    depends only on W.

8.4     Some Particular Utility Functions
   A broad class of utility functions are separable in the sense




where        are utility functions and      are positive weights. Such a utility func-
tion is additively separable but since the equivalent utility function




is multiplicatively separable we do not need to stress the kind of separability.
   An example of the above is




for positive constants   and               For         this function is linear and for
      it is concave. For          it becomes




which is always concave. This utility function is evidently related to the Cobb-
Douglas production function
76            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

but this function is both increasing and concave only for                 Next we
review some other frequently used types of utility functions. Some of them will be
analyzed in the next Section. The utility function




is defined for the values W satisfying                       where                 and
   are parameters. The exponential utility function



is defined for W > 0, where          is a parameter. The already mentioned power
utility function



for         becomes the logarithmic utility function



8.5      Risk Considerations
   In mean-variance portfolio theory (see Chapter 9 for details) there are two de-
cision variables involved: and the expected return and risk, respectively. One
possible choice among various utility functions is the quadratic utility function



Since the objective is to maximize the utility with respect to some budget con-
straints, the parameter may be interpreted as a measure of the investor’s risk
aversion. The higher the more adverse to risk the investor is. An analogy to (10)
with parametrized expected return is



Obviously, the lower the higher the risk aversion, see II.3.2.1.
   So far we have not dealt with random arguments of utility functions. The above
mentioned risk aversion may be explained as follows. The investor may decide
between two investment decisions; the first one results in a fixed certain amount W
while the second one results in a random amount           where is a random variable
with zero mean and a positive variance,                              Since we suppose
increasing utility functions it follows that with probability             the resulting
utility will fulfill                 but with             it will be
The expected value of the resulting amount is the same in both cases, equal to W,
but the risk averse investor will prefer certain utility to the expected one:
                                 I. FUNDAMENTALS                                    77

It is reasonable to suppose that the last inequality is true for all acceptable levels
of W. By Jensen inequality, (12) is assured if U is strictly concave, i.e.,

   If the utility function of an investor is linear, then the investor is called risk-
neutral, and if it is convex, the investor is called risk loving or risk seeking.
   In what follows we will suppose that the investors are risk averse. The investor’s
aversion to risk can be measured in many ways but there are two measures of
particular importance: absolute and relative risk aversion. Assume (see [143], p.
478) that the total investment of USD 10,000 is divided between (risky) stocks and
the Treasury bills in equal proportions, USD 5,000 in stocks and USD 5,000 in T-
bills. That is the decision of the investor with the initial wish to invest USD 10,000.
Suppose now that there are USD 100,000 at the investor’s disposal. If the investor
increases the amount invested in stocks from USD 5,000 to USD 20,000, say, then
he or she manifests the decreasing absolute risk aversion. This is the most common
behavior of the investors. With increasing investor’s wealth, the amount invested
in risky assets also increases. Analogously, the increasing absolute risk aversion is
characterized by the behavior of the investor who reduces the dollar investment
into risky assets as his or her wealth increases. If the amount invested into stocks
remains the same (not proportion but amount!), we speak of the constant absolute
risk aversion.
    A convenient measure of the absolute risk aversion based on an underlying utility
function has been proposed by Arrow and Pratt and is known as the Pratt-Arrow
absolute risk aversion function:



The related relative risk aversion function is defined by


8.5.1   Remark (HARA Utility Functions)
   In (6) we have defined a class of utility functions    The utility functions from
this class are called HARA utility functions (abbreviation for Hyperbolic Absolute
Risk Aversion). To find the reason just calculate the corresponding A(W) from
(13).

8.5.2  Exercise. Derive A(W) and R(W) for utility functions presented in 8.4
and comment the results.

8.6      Certainty Equivalent
   We have seen that for risk averse investors the utility function is concave. A
natural question arises, what certain amount is needed to achieve the same utility
as the expected utility with a random wealth. In other words, let W be a random
variable representing the wealth and      be an amount called certainty equivalent.
By the principle,      is the amount that satisfies the equation
78            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

Since for strictly concave utility functions                     surely the certainty
equivalent satisfies

8.6.1 Example (Multiperiod Certainty Equivalent Model). Suppose a
nonnegative random cash flow                             the logarithmic utility func-
tion U(W) = ln(1 + W), and the valuation discount factor          We are looking for
a certainty equivalent cash flow                    which gives the holder the same
utility in terms of the present value as the expected discounted random cash flow:




and which is ”minimal” in the following sense:




see [100]. The solution is given by the method of Lagrange multipliers. The corre-
sponding Lagrange function is




The solution is found by setting the gradient of L equal to zero




which is equivalent to the system of equations




We conclude that the certainty equivalent cash flow is constant,              and
can be found from (16):
                                  I. FUNDAMENTALS                                    79

I.9     MARKOWITZ MEAN–VARIANCE PORTFOLIO

portfolio, efficient market, market portfolio, efficient portfolio, minimum-variance
portfolio, Sharpe ratio, optimal portfolios of riskless and risky assets, separation
theorem, tangency portfolio, geometry of minimum-variance portfolios


    We have mentioned earlier that almost every investment is uncertain with respect
to the gain obtained in the future. A natural question arises, is it possible to reduce
the risk related to investment by some sophisticated procedure? The answer is yes,
and the method is diversification. A very old rule says that you should divide
your disposable funds (wealth) into three equal parts; one third put into deposits,
one third invest into shares, and buy gold for the remaining third. This approach
may seem to be naive but clearly it is a method for reducing risk. Here we deal
with more exact, still elementary procedures, which give the investor hints how to
diversify his or her funds. We deal with the classical topics concerning optimal
portfolio selection, the rigorous treatment of which has been started by Markowitz
[112]. In the explanation we will restrict ourselves to financial assets only (shares,
bonds, derivatives) despite the fact that the ideas and results may be applied to
real assets as well. More details and specific models are treated in Part II.
    Although it is not necessary to assume too much for the purpose of the mathe-
matical construction of an optimal portfolio, usually some reasonable and some ar-
tificial restrictive economical assumptions are made in this case, and follow Marko-
witz, Tobin, and Sharpe. A market is said to be the efficient market if it fulfills
the assumptions below. (We add the comments to the assumptions in brackets:
realistic – usually fulfilled, limited – may be fulfilled in most cases, restrictive –
unlikely in most cases, unrealistic – hardly to be fulfilled.)
     (1) The investors make decisions on their portfolios exclusively on the informa-
          tion based on the expected returns and covariance structure of returns, or
          in other words they have homogeneous expectations (realistic).
     (2) The investors choose portfolios with the highest expected return among
          those with the same risk (rational behavior, realistic).
     (3) The investors choose portfolios with the smallest risk among those with the
          same expected return (risk aversion, realistic).
     (4) The assets are infinitely divisible (limited, because trading on a stock ex-
          change is usually performed in lots – a lot means one hundred stocks,
          say – and there are extra costs for trading the fractions of lots).
     (5) The investment horizon is one period of time (realistic).
     (6) There are no transaction costs and taxes (limited, but the costs or taxes
          may partly be incorporated into the returns if they are linear functions of
          a traded volume).
     (7) There exists just one riskless interest rate and all the investors can lend or
          borrow any amount of necessary funds at this riskless interest rate (unreal-
          istic).
     (8) All the assets in question are marketable (realistic).
     (9) The investors can sell assets short (restrictive, mostly by legal regulations).
80            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

  (10) No investor can affect the returns of the respective assets substantially (re-
        strictive, since, in other words, it means that there is no investor with funds
        exceeding the other investors’ funds too much).
  (11) All necessary information (about means and covariances) are equally avail-
        able to all the investors at the same time (restrictive).
  Under these assumptions, the market equilibrium takes place since the investors
have perfect knowledge of the market and behave in a rational way (they are risk
averse).

9.1      Portfolio
   By portfolio we mean a group of (financial) assets. A rational investor chooses
his/her portfolio so as to maximize the expected return and to minimize the risk.
More precisely, let us consider N assets, 1,..., N, say, and the wealth (disposable
money) equal to 1. Portfolio is then the vector                           where
represents the fraction of the unit wealth invested in the nth asset,        ..., N,
so that             Generally, at the moment, we do not suppose           since the
case         has an economic meaning. This is the case of short sales; the investor
can sell a security that he or she does not own. It is equivalent to the borrowing
of the respective asset, a kind of speculation. Further, let us suppose that the
returns (alternatively the rates of return) of the N mentioned assets are random
variables                      with the expected returns
and the covariance matrix                where
Alternatively, we will denote the diagonal elements             the    standing for
standard deviations of the returns:              For a given portfolio represented
by weights the expected return on the portfolio is



and the variance of the portfolio (which is an abbreviation for the variance of the
portfolio return) is



The risk of the portfolio   is simply the standard deviation




9.1.1 Example. Let us consider two assets A and B in the period of nine years
with the corresponding returns (in per cent): 17, 13, 15, 20, 10, 16, 14, 12, 18
for the asset A and 13, 17, 15, 10, 20, 14, 16, 18, 12 for the asset B. The mean
returns for both the assets based on these historical data are the same and equal
to 15. The risks are also the same, 3.1225. If we invest all the unit wealth to any
of the assets, we can expect a risky return 15 per cent. If we divide our unit wealth
equally between the two assets, we have certain return 15 per cent over the given
                                  I. FUNDAMENTALS                                     81

time interval with no risk. This is the case if the returns are perfectly negatively
correlated, see Figure 11.




9.1.2   Market and Efficient Portfolio
   A market portfolio is any portfolio in which all the assets come in the same
fractions as they appear on the capital market, expressed by their capitalization
(market value of the respective asset multiplied by the number of the assets). This
is an abstract notion and in practise we usually substitute it by a properly chosen
stock exchange index. A portfolio      is called efficient portfolio if there is no other
portfolio x such that



  In other words, an efficient portfolio is a portfolio for which there is no other
portfolio with the same or greater expected return and smaller risk.

9.2 Construction of Optimal Portfolios and Separation
Theorems
   There is a variety of problems concerning the choice of an ”optimal portfolio”.
Our decisions here will be based just on the information about the expected returns
and the covariance structure of the returns. This is known as Markowitz approach,
see Part II for more details. Two basic problems appear in this context:
   (i) to minimize          subject to                    where is the prescribed
expected return. In other words, the investor seeks the expected return with
minimum risk. The corresponding portfolio is called minimum-variance portfolio.
Note that minimizing the risk is equivalent to minimizing the variance.
   (ii) to maximize the so called Sharpe’s ratio or Sharpe’s measure of portfolio




subject to
82             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   In any of the problems above the following cases may be considered: x arbitrary
(short sales allowed),        (short sales are not allowed), V positive definite (which
implies that there is no riskless asset), or V just positive semidefinite. The latter
case may occur if there exists a riskless asset or if the returns of two assets are
perfectly correlated, e.g., in which case the matrix V is singular. Note that if V is
singular then (ii) has no sense.

9.2.1   Example. Let us consider two assets with expected returns
                                             where is the correlation between
returns   and   so that



We will analyse the portfolio of the two assets with as a parameter. Obviously,
the risks of the assets 1 and 2 are 3 and 6, respectively. Let             denote a
portfolio Since                  we can express the expected return on the portfolio



and the variance of the portfolio




   The dependence between the expected return and risk is usually plotted in the
risk – expected-return plane or the standard-deviation – expected-return plane and
the corresponding curves are called efficient frontiers. For selected values of the
dependence is illustrated in Figure 12 for                 We see that zero risk can
be attained only in the case of perfect negative correlation between the returns,
           Next we find the minimum-variance portfolio. Since for                the
                                   I. FUNDAMENTALS                                      83

portfolio variance      is a positive definite quadratic form, it suffices to find the root
of the equation



The solution to this equation is




The corresponding expected return and variance of the portfolio are




A simple analysis shows that for          the corresponding is in the range [0,1],
while for          it exceeds 1, so that to reach the minimum risk it is necessary
to sale short or to borrow the asset 2. In the extreme case                  so that
the necessary additional fund is obtained by selling the asset 2 of value 1 short,
             With zero risk, the maximum expected return is only attainable for
         in which case the expected return is 10. This can rarely happen in the real
world. We can also observe that for all risks but one there are two portfolios with
the same risk but two different expected returns.

9.2.2   Remark
  The reader may verify that in case of two assets with                                the
minimum-variance portfolio has




Particularly, for          we have                for                     f and for
             provided


9.2.3 Example (Riskless Asset). Suppose that we have just two assets, one
riskless with return       and one risky (call it A), with expected return        and
variance      Let us build a portfolio from these two assets with weights    standing
for the riskless asset and     for the risky asset,               Then the expected
return on the portfolio is                           with variance               The
dependence in the risk – expected-return plane is linear. For                  means
that the investor lends the portion          of his or her money at the interest rate
    while for          the investor borrows at the riskless interest rate. Borrowing
money at the riskless interest rate seems not to be quite realistic, however. The
Government are an exception.
84             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

9.2.4     General Solution (Risky Assets, Short Sales Allowed)
   Here we will solve the problem
   minimize           subject to                        prescribed.
   Suppose V positive definite. We exclude the case              for some constant
since in this case the solution is trivial; simply take just one asset     for which
                       Now we can obtain the solution by the method of Lagrange
multipliers. The Lagrange function for the problem is




and the equation


gives the optimal solution




Put                                                and                  Obviously,
                       The last inequality is a simple consequence of the Schwarz
inequality since we have supposed 1 and r linearly independent. The constants
   can be derived from the initial conditions:




so that




     Now we have to distinguish the two cases:

   First, let us note that we can hardly meet this case in practise, but, from the
theoretical point of view a for given V we can find a subspace of r’s of dimension
N – 1 satisfying                In this case




so that the minimum-variance portfolio is
                                   I. FUNDAMENTALS                                 85

   Put



The minimum-variance portfolio may now be expressed in the form (with            de-
pendent on

with                             and                                  where
may be considered as the basis portfolios.
  Note that

The optimal portfolio may be expressed in an alternative form:


It is important to emphasize that the basis portfolios   and     are independent of
the prescribed but the weight         does depend on

9.2.5    Remark (Alternative Form of the Minimum-Variance Portfolio)
  Put                              and                               where       is a
portfolio. Then (8) may be expressed in the form



9.2.6 Two Funds Separation Theorem. Let                     be two minimum-variance
portfolios with expected returns         respectively,          Then every minimum-
variance portfolio     can be expressed in the form                       for some
Every portfolio of the form                         is a minimum-variance portfolio.
  Proof. Let denote the expected return on the minimum-variance portfolio
Choose such that                          that is,                       The
coefficients  in (6) for portfolios a, b are



and since   is also a minimum-variance portfolio, the above relations hold for
as well. Now




The second assertion is obvious.
86            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

9.2.7 Remark (Covariance Between the Returns of Two
Minimum-Variance Portfolios)
   Let         be two minimum-variance portfolios with expected returns
respectively. Then, after some algebra, we get the covariance




As a consequence, the variance of a minimum-variance portfolio x with the expected
return is



The global minimum-variance portfolio   is defined as the portfolio for which the
variance      attains its minimum. We have



Thus the expected return       corresponding to the global minimum-variance port-
folio is


so that                      and



and the variance of the portfolio     is


The usual graphical representation of the set of minimum-variance portfolios is in
the so called expected-return–variance plane or in the expected-return – standard-
deviation plane. The resulting plot is also known as minimum-variance frontier.
From the expression for the variance of minimum-variance portfolios         we im-
mediately see that the dependence of the variance on any given expected return
is expressed as a parabola while the dependence of the risk on any given expected
return is expressed as a hyperbola:



The focus of this hyperbola is at the point                and                   The
derivative of     is


Taking the limits of this expression as                     we get the slopes of the
asymptotes of the hyperbola,                     respectively. For historical reasons,
the plot is in the form where the standard deviation (risk) is on the horizontal axis
while the expected return is on the vertical one. The asymptotes expressed as
functions of are                           in this case.
                                  I. FUNDAMENTALS                                     87

9.2.8 Remark
   With the exception                 there are two minimum-variance portfolios with
the same risk but two different expected returns. If we have the prescribed expected
return             then a simple calculation shows that the minimum-variance port-
folio with the prescribed expected return                     has the same variance,
                  Thus, in accordance with the definition of an efficient portfolio, the
set of efficient portfolios consists of all minimum-variance portfolios with expected
returns                In literature, the minimum-variance portfolios with expected
returns less than B/A are often called inefficient portfolios.

9.2.9 Remark (Orthogonal Minimum-Variance Portfolios)
   Let us seek the condition for expected returns of two minimum-variance port-
folios       with uncorrelated returns. (Verify that this problem has no solution
if either of these portfolios is the global minimum-variance portfolio.) From the
formula in Remark 2.8.4 it follows that                                      so that
                                         or equivalently,
             Note that portfolio is efficient if and only if is inefficient.

9.2.10 Remark
  The global minimum variance portfolio has a peculiar covariance property. We
have cov                   for every portfolio x. This is of course also valid for
any single asset: cov

9.2.11 Maximum of Sharpe’s Ratio (Risky Assets, Short Sales Allowed)
  There is no straightforward approach to the problem of direct maximizing the
Sharpe’s ratio defined in (4). Instead, we will solve the problem
  maximize the square of the Sharpe’s ratio




subject to             V positive definite.
   It is important to emphasize that the two problems are not equivalent. The
maximum of (14) may be reached for a portfolio giving negative expected return.
Such a result is useless, of course. Despite the fact that such a case can be rarely met
with on efficient markets, it is necessary to be careful when handling the emerging
markets or in the cases where the investors are not risk averse or simply do not pay
attention to the return to risk ratio.
   To attack the problem first note that from the assumption of positive definiteness
of the matrix V it follows that there exists a symmetric square root matrix
From Schwarz inequality it follows that



so that          is the upper bound for the squared Sharpe’s ratio, and the equality
holds if and only if            for some    Since x should be a portfolio, it follows
88            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

 that                 provided the denominator is nonzero. If the denominator
equals zero then there is no solution to the problem. With this exception, the
optimal portfolio is




9.2.12 General Solution (Riskless and Risky Assets, Short Sales
Allowed)
   In the presence of a riskless asset (also called riskfree asset) we can not fully
adopt the above theory since the covariance matrix between returns becomes sin-
gular. The modification of the previous results is possible, however. The portfolio
selection problem may now be formulated in the following way. Suppose we have
N risky assets 1,..., N with expected returns r as above,              and one riskless
asset 0 with return         Let                denote the (N + 1) × 1 vector of the
returns. It is economically plausible to suppose that on efficient markets the riskless
return     is less than the expected return on any risky efficient portfolio. Since the
global minimum-variance portfolio possesses the expected return                     we
will therefore assume


The covariance matrix of returns of the risky assets V is again assumed to be
positive definite. The unit wealth is allocated among N + 1 assets 0,1,..., N with
weights                and we are seeking a portfolio represented as
which minimizes the squared risk (independent of the portion of the riskless asset)




under the conditions



where is the prescribed expected return on the portfolio and symbol 1 now means
the (N + 1) × 1 vector of 1’s. Taking into account that                the second
condition may be rewritten as



where      is called expected excess return, that means the return over the return of
the riskless asset. So we are forced to solve the problem of finding




Weight   is not involved since afterwards it will be calculated using
The Lagrange function for this problem is
                                    I. FUNDAMENTALS                                 89

and from the equation



we obtain the optimal solution




with γ satisfying the condition




or



where A, B, C are defined in 2.8. Such a portfolio is the portfolio with minimum
risk with prescribed expected excess return  and will be called minimum-variance
portfolio.

9.2.13 Two Funds Separation Theorem with Riskless and Risky Assets
     Define                    the portfolio consisting of riskless asset only, and by




the so called tangency portfolio, and


9.2.14 Two Funds Separation Theorem. Every minimum-variance portfolio
can be expressed in the form




where




     Proof. The proof is obvious.

9.2.15 Corollary
   Every portfolio consisting of minimum-variance portfolios is a minimum-variance
portfolio.
90             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

9.2.16 Remark (Covariance Between the Returns of Two
Minimum-Variance Portfolios)
     Let       be two minimum-variance portfolios with expected excess returns
      respectively. With weights   given by Theorem 2.10.1 we get




Thus the variance of a minimum-variance portfolio in the presence of a riskless
asset with expected return becomes




9.2.17 Remark (Properties of Tangency Portfolio)
     A simple calculation shows that the tangency portfolio has the expected return
                             so that the expected excess return is




As a consequence, the variance of the tangency portfolio is




Note that, since both the numerator and denominator in (24) are positive, also the
expected excess return is positive.

9.2.18 Assertion.       The tangency portfolio belongs to the set of efficient portfolios
of risky assets.
     Proof. Since the expected return on the tangency portfolio is
                             we just calculate the Lagrange multipliers:




9.2.19 Remark
   For expected excess return                    we get            This is the case of no
short sales either of the riskless asset or of the tangency portfolio. A very unrealistic
case is the case of borrowing the riskless asset, i.e.,           which leads to higher
expected returns than the tangency portfolio provides.
                                 I. FUNDAMENTALS                                   91

9.2.20 Remark (Geometry of the Minimum-Variance Portfolios with a
Riskless Asset)
   The dependence of the variance on the expected return in the expected-return –
variance plane is again a parabola but in the expected-return – standard-deviation
plane it becomes straight line




We have already mentioned that the tangency portfolio is a member of the set of
efficient portfolios of risky assets. The point corresponding to this portfolio in the
expected-return – standard-deviation plane is




The line connecting the points                  and   may be expressed as




For the derivative of the standard deviation of the return of the minimum-variance
portfolio consisting of risky assets only we have




and if we substitute the expected return on the tangency portfolio,



into the last expression, we get the tangency




So     is the tangency point of the hyperbola and therefore line      is the tangency
line to the hyperbola.

9.2.21 Remark (Short Sales not Allowed)
   If short sales are not allowed, we are not able to give an explicit solution to
the problem. The solution may be found by solving the quadratic optimization
problem:

(27) min            under the conditions
92            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

I.10 CAPITAL ASSET PRICING MODEL

market portfolio, Sharpe-Lintner model, security market line, capital market line


10.1       Sharpe-Lintner Model
   In this Chapter we keep the notation of 9.2.12 and the assumptions of an efficient
market. Capital Asset Pricing Model, shortly CAPM, expresses the expected excess
returns of the individual assets in terms of the market expected excess return.

10.1.1    Alternative Form of the Expected Excess Return
   Denote              the expected return on the tangency portfolio and    the
vector of covariances between excess returns of the risky assets and the excess
return on the tangency portfolio. We have



Hence the variance of the tangency portfolio is




so that                            On the other hand,                            so that



10.1.2    Market Portfolio
   Under the assumptions of an efficient market all investors on the market select
their portfolios from the set of efficient portfolios. The investors differ only in their
risk aversion. Mathematically it is expressed by weight in Theorem 9.2.14. Higher
values of reflect higher risk aversion. Thus the weighted portfolio (according to
the individual investors’ wealth) consisting of the individual investors’ portfolios
also belongs to the set of efficient portfolios. The aggregate demand for risky assets
is in the proportions of the tangency portfolio. In equilibrium demand and supply
are equal and the proportions (both for riskless and risky assets) create the so called
market portfolio. In other words, the market portfolio is a wealth-weighted average
of the individual investors’ optimal portfolios. If there is no supply of the riskless
asset, the market portfolio coincides with the tangency portfolio. In practise, the
market portfolio is often approximated by a composition of a stock exchange index.
Let us denote such a market portfolio           It may be expressed in the form



for some              Put                      the part of the market portfolio cor-
responding to risky assets only. The return on the market portfolio M is therefore
                                 I. FUNDAMENTALS                                   93

                             the expected return on M is
the variance of the return on M is                     the expected excess return
on M is                                      and the vector of covariances between
excess returns of the risky assets and the excess return on the market portfolio
reads



Now we substitute into formula (3) and after cancelling the factor             we get




where               The last formula is known as CAPM also Sharpe-Lintner
model CAPM. For individual assets the CAPM becomes



with                 or




if we denote
   The concept of the market portfolio is a bit abstract. By definition, it is the
wealth-weighted sum of the portfolio holdings of all investors. The weights can
hardly be observed in practise however, so for calculation an observable indicator
of the market performance is needed. Usually the market portfolio is approximated
by some stock exchange index like DJIA, S&P 500, FTSI, etc. The stock exchange
indexes serve as proxies for the market portfolio and the US Treasury bill rates
proxy the riskless rate.

10.2      Security Market Line
   The graphical representation of (7) and (8) is known as the security market line,
SML. We see that (7) expresses the expected return on the          asset as a function
of    while (8) expresses the same quantity in dependence on the covariance
We refer to (7) as to the              and to (8) as to the covariance version of the
security market line. The quantity for an asset or a portfolio is called factor
beta and it plays an important role in equity (stock) valuation. For the market
portfolio, the corresponding            and for the riskless asset          Obviously,
       also for any efficient portfolio. The factor beta may be considered as a risk
factor. Assets with        are riskier than the market average and those with
are less risky than the market average.
   For an arbitrary portfolio x, the factor       of that portfolio is             the
weighted average of the respective            defined in (6). While the variance is a
risk measure of an efficient portfolio, beta may be considered as an indicator of the
94            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

market risk of an individual security. For the asset         we can express (7) in an
alternative way

where the      are disturbances,                            From this equation we get
the expression for the variance of

Often it is supposed that      and     are not correlated (questionable) so that (10)
simplifies to

with the interpretation that the total risk      is decomposed into the market risk
        and the unique or specific risk       Only the specific risk is diversifiable in
the sense that by holding the asset in a sufficiently large portfolio, the prevailing
part of the risk of the whole portfolio is that of market risk. In practise, however,
it is not necessary to hold a portfolio mirroring the whole market portfolio. A
comparatively small portfolio of some tens of assets would eliminate most of the
specific risk.
   Betas have to be estimated. The most common approach is based on linear
regression from historical data. If we have T observations of returns            on the
asset and on the market return          (represented mainly by the actual value of a
stock exchange index),                  we can rewrite (9) in the form of regression
equations

for unknown parameter        if the riskless rate   is supposed to be known or as

for unknown parameters          if the excess return is not directly observable. The
estimate of beta obtained by the least squares principle is



for model (12) where      and      denote the respective averages. Under (13), the
estimate of    is (14) again, and for    the estimate is


   In equilibrium the returns of all securities would lie along the security market
line. If this is not the case, there is something wrong either with their risk parameter
beta or with their pricing. If the beta on an asset is correct and the return is below
SML, the asset is overpriced. If the return is above SML, the asset is underpriced.
(Explain this phenomenon as an exercise. Note that with increasing price of a
security the return decreases and vice versa.) The difference between the actual
and expected (given by SML) return is called Jensen measure.
   Betas are published in financial press and in the so called Beta books both for
individual companies and for industries. For industry like essentials usually
This is typical for goods and services the demand for which is irrespective of the
economic cycle. Thus food manufacturing may have                     while car industry
            and tourism
                                I. FUNDAMENTALS                                   95

10.3     Capital Market Line
   Let us have a portfolio with expected return      and standard deviation       In
the presence of a riskless asset we can modify the Sharpe’s measure of portfolio:




and we will call it modified Sharpe’s measure of portfolio.

10.3.1 Assertion. All efficient portfolios have the same modified Sharpe’s mea-
sure of portfolio.
  Proof. For an efficient portfolio   the expected excess return may be expressed
                                                        for some     Similarly, for
the standard deviation we get                   Thus




   Since we can take any of the efficient portfolios as a numeraire, we choose the
market portfolio M. From the above assertion it follows that mean the      and the
standard deviation    of any efficient portfolio fulfill the relationship




The dependence of the expected return on an efficient portfolio on its standard
deviation is linear and its graphical representation is called Capital Market Line,
CML.
   The substantial difference between CML and SML is that CML expresses the
excess return on the efficient portfolios while SML is valid for any security or
portfolio.
96           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

I.11     ARBITRAGE PRICING THEORY

regression model, multifactor model, factor analysis, modified method of principal
components

   Arbitrage Pricing Theory, (APT ), also known as Arbitrage Pricing Model, APM,
serves as a generalization of the single factor CAPM to a multifactor model. The
idea behind the APT is that the returns vary from their expected values due to
unanticipated changes in production, inflation, term structure, and other economic
factors. In the multifactor model it is supposed that the return on an asset is
explained in terms of a linear combination of more factors or indexes. Note that
in CAPM, the expected return on an asset is a linear function of the expected
market return only. The development of APT is based on the assumptions of an
efficient market, see I.9. A technical realization of APT uses two popular statistical
methods; regression analysis and factor analysis.
11.1       Regression Model
  We suppose that the return       on an asset       fixed in this Section) fulfills the
usual model of linear regression


where               are explanatory variables independent of the asset return in
question,    is a zero mean random disturbance, and                   are unknown
parameters which are specific for the given asset. Usually an absolute term must
be considered which can be simply done by setting          In the regression model
we suppose that the values of       are observable while the random deviate     is
not. If we have T observations of the vector                 then (1) becomes


Such observations are usually gathered historical data. It should be emphasized
that                are characteristics of the underlying asset and                are
independent of the asset but they take different values for different       In a sim-
ple regression model it is supposed that                  and cov
                where          for        and         for           being also an un-
known parameter. Put
                            an           matrix, and                         Then we
can express (2) in the matrix form



           cov              Further let us suppose that         and that F has the
full rank,            so that the inverse         exists. The ordinary least squares
estimator of     is
                                 I. FUNDAMENTALS                                   97

with the covariance matrix cov                      An unbiased estimator of       is



The last statistic is used for the construction of the confidence intervals for

11.1.1   Remark
   An empirical study of this type with        may be found in [143] together with
further references. The variables, based on monthly observations are:            =
monthly growth in industrial production,      = change in expected inflation, =
unexpected inflation,     = risk premium as the difference in yields of corporate
bonds and long-term Treasury bonds,         = change in the term structure as the
difference in yields of long-term Treasury bonds and (short-term) Treasury bills,
    = return on the market portfolio measured by the NYSE index.

11.1.2   Remark
   In the preceding remark we have seen that one of the explanatory variables was
the market return. Since we may always include this variable in APT consideration
together with additional explanatory variables, we can not obtain worse fitting than
that with CAPM. This is a well-known fact, the more parameters you have, the
better fit you get. The number of explanatory variables has to be chosen with
care, however, since including highly correlated variables brings the problems with
multicollinearity etc. Refer to standard textbooks on regression analysis, like [180].

11.2      Factor Model
   Instead of returns     we will now consider standard scores or standardized re-
turns



at a given time instant. In the factor model we suppose that


where                     are random variables with zero means.                     are
called common factors or sensitivities,        is called unique or specific factor, and
               are called factor loadings on the asset      Note that in this context,
    is also known as the idiosyncratic risk, the asset-specific or firm-specific com-
ponent. The crucial assumption of the factor model is that neither the common
nor the specific factors can be directly observed, i.e., they are unobservable. It
is also supposed that all the factors are mutually uncorrelated. Denote, as usu-
ally,                                                                       the
matrix of factor loadings,                         the vector of common factors, and
                     the vector of specific factors. The matrix form of (7) becomes
98           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

This is the factor model of returns. We summarize the above assumptions and
make some additional ones:




The last assumption means that for different assets, the specific factors are uncor-
related and may have different variances. Under these assumptions, the covariance
matrix of is




Since we have supposed that is a standardized random vector, R coincides with
the correlation matrix of standardized returns. Hence the nth element of the diag-
onal of R can be expressed in the form



The quantity      is called communality and    is called uniqueness, specificity, or
specific variance of the respective asset.
  Note that the decomposition (10) is far from being unique. For example, if U is
any         orthogonal matrix then



where B* = BU is called an orthogonal rotation.
   The main objective of the factor analysis may be formulated in the following
way: Given the correlation matrix R, find the number            of common factors, a
matrix of factor loadings B and a diagonal matrix         with nonnegative elements
such that (10) holds. The number of common factors should be small. This is
a natural requirement since with a high number of common factors we loose the
possibility of their proper interpretation.
   There is a plenty of statistical methods aimed for solving the above problem. We
just briefly mention one of the simplest but frequently used method with a clear
motivation. The method is known as the modified method of principal components.
The theoretical background of this method is based on the Lemma below. First
recall that every symmetric N × N matrix allows a spectral decomposition



where                     are the eigenvalues and                  the orthonormal
eigenvectors corresponding to the eigenvalues                     By the Euclidean
norm of a matrix A we mean
                                I. FUNDAMENTALS                                   99


11.2.1 Lemma. Let A be an N x N symmetric positive definite matrix,
  and let    Then the solution to the problem
                minimize
i.e., the best approximation of A by       in the sense of Euclidean norm, is given
by
  Proof. The proof can be found in textbooks on matrix calculus.
   The estimation procedure starts with a guess of the number of common factors.
A heuristic rule says that we take   equal to the number of the eigenvalues of R
greater than or equal to one. Then we estimate the communalities. A good initial
approximation is given by


or by the square of the multiple correlation coefficient                      in the
regression of the nth variable on the remaining N – 1 variables. From (14) we form
the estimate                            Now we define the reduced correlation matrix
by


Note that in the theoretical model (10) it is assumed that this matrix is positive
semidefinite. It may not be the case for (15) since instead of     we have used
an estimate of it. Nevertheless, since we suppose          we can expect that at
least   eigenvalues of      are positive and we can therefore construct the best
approximation of it based on Lemma 11.2.1:


where                               from the spectral decomposition of the (surely
symmetric) matrix                         We then obtain a new estimate of speci-
ficities


We must take the diagonal only since          may not be a diagonal matrix. We go
back to (15), form the new reduced correlation matrix               and iteratively
improve the estimates of and B until the differences in successive iterations are
sufficiently small. Eventually we get the decomposition


or an analogy to the original model (8)


with f still remaining an unknown vector of common factors. But with known
matrix       we may look on (19) as on a linear regression model with unknown
parameters f. By ordinary least squares method we get an estimate of f:
100           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

11.2.2    Remark (Principal Components)
   Factor analysis is a generalization of principal components. In the method of
principal components we directly use the spectral decomposition (13) of the covari-
ance matrix of returns



The random variable                    is called nth principal component,        ... ,N.
The principal components have some plausible properties: (i) they are uncorre-
lated, (ii)                (iii) the total dispersion of returns measured by          is
explained by all the principal components since tr                       The eigenvalues
are supposed to be ordered, hence the first principal component explains the great-
est part of the total dispersion etc. In practise, often only a few components (3,
say) explain most of the total dispersion (95 per cent, say). We see that the model
of principal components coincides with that of the factor model if we put
and           i.e., if no specific factors are considered.

11.2.3 Remark
   The interpretation of the common factors represented by their factor loadings is
a difficult and fairly controversial procedure. Roughly speaking, only the first two
common factors may be usually identified with a more or less clear interpretation.
The first factor represents an overall performance of economy giving higher loadings
to the assets with greater importance. The second factor, often interpreted as a
bipolar factor, usually divides the assets into industries which may act in opposite
directions: oil – gas, nuclear power plants – heat power plants, etc.
   The interpretation of the factor loadings is easier if each asset is highly loaded
on at most one factor, and if all factor loadings are either large or close to zero.
The assets are then grouped into disjoint sets, each of which is associated with one
factor. The factor has an influence on those assets for which          is large. Since
            by term              we mean       close to 1 or –1. We have seen that
the decomposition (10) is also valid for any orthogonal rotation of B. There is a
lot of methods of rotation which, up to some extent, improve the interpretation
of factors in the above sense. Generally, their principle is to find the orthogonal
matrix U such that the rows of the transformed matrix            contain a few large
loadings while the others are close to zero. The most popular orthogonal rotation
method is varimax. There are also non-orthogonal methods (oblique rotations) like
quartimin. Note that under oblique rotations the factors are no longer uncorrelated.
All these methods are iterative and difficult from the computational point of view.
See Rao’s contribution in [109], pp. 489–505, for further discussion.
                                 I. FUNDAMENTALS                                   101

I.12 BIBLIOGRAPHICAL NOTES

Many of the topics treated in this Part are classical pieces of finance, financial
mathematics, financial management, and partly of economics. Hence it is quite
natural that there are hundreds of books on similar subjects but they differ in their
viewpoint on the subjects. Also the material involved is treated on very different
levels. Hence the following notes may cover only a small part of the vast existing
literature on the related topics.
Money, capital, and securities. A thorough text on basic financial concepts and
financial institutions is [138]. In [143] the reader will find both theory and many
examples of investment management. [25] and [141] may serve as readable books
on financial management together with accounting considerations which are not
mentioned in this book, however. Only the most important securities (this applies
particularly to derivatives) are mentioned. For more see [60], [88].
Interest rate. A simple arithmetics of interest rate is contained in [114], a deeper
insight in [161]. The section on decomposition is based on various sources like
[143], [25]. Inflation is also treated in 1.7.3. Term structure is important in fixed-
income securities’ analysis. In continuous case, various models of the term structure
are known as Vasicek mean reversion, Cox-Ingersoll-Ross, Merton (Ho-Lee), Hull-
White, Heath-Jarrow-Morton, and other models, see [43], [82], [105]. For modeling
term structure in Mathematica® see [11] and [13].
Measures of cash flows. An elementary approach may be found in any book on
financial arithmetics like [114] or on financial and investment management like [25],
[141], [143]. A thorough discussion on the benefit to leasing is in [76]. The concept
of duration has been ascribed to Frederick Macaulay. Yield curves are often treated
in the context of term structure models.
Return, expected return, and risk. A comprehensive but still elementary trea-
tise on return and random walk’s hypothesis may be found in [26]. [159] is devoted
to modeling returns as time series. Further recommended reading consists of [43],
[85], [109]. The historical development of the log-normal model for a price develop-
ment can be roughly traced as: Bachelier [4], Einstein [56], Merton [116, reprinted
paper of 1973], Black-Scholes [23]. Concerning volatility, here we confine ourselves
only to the case of a constant volatility. Stochastic models of volatility including
popular GARCH are treated in [26], [105], [107], [109], e.g. VaR is ascribed to [118],
despite in Statistics this statistic is known as the quantile for almost one hundred
years. Some recent books on VaR and related topics are [42] and [89].
Valuation of securities. Valuation of coupon bonds is a simple application of
the cash flows’ measures but some literature do not handle the related cash flow
properly. There is a vast literature on the derivatives’ pricing, usually starting
with the Black-Scholes model and covering a lot of generalizations. The pioneering
works are [23], [81], [116]. Recommended reading with further references: [41], [82],
[105]. An original approach based on so called fundamental transform taking into
account stochastic volatility together with a Mathematica® code is presented by
Lewis [107]. The valuation of stocks (value of the firm) is not explicitly covered
102          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

here since it often depends on accounting principles which are beyond the scope of
this book. We refer to [25], [36], and [143]. We should emphasize that the practical
derivatives’ valuation needs an extensive computing and some symbolic calculation
is often necessary. See books [147], [162], [163], and papers on special related topics
[9], [10], [12], all making use of Mathematica®.
Matching of assets and liabilities. Problem of matching of assets and liabilities
likely originated in life insurance industry, see [114] for reference and description
of Redington’s theory of immunization of a life office. Further reading [143], pp.
638–658, [60], [178]. For a related actuarial model see [173].
Index numbers and inflation. Perhaps the first comprehensive study and theory
of index numbers is the 1922 book The Making of Index Numbers by I. Fisher. Here
we closely followed Bílý [18] who was one of the promoters of actuarial sciences
and econometrics in former Czechoslovakia and before 1948 the chief official at
the Ministry of Finance. Our notation has been adapted for the computational
purposes.
There are hundreds of stock exchange indexes. If from related markets, they are
usually highly correlated. See [61] and [143] for more information. An example of
a relationship between stock prices and inflation is given in [3].
Basics of utility theory. The use of utility theory in modern financial decision
making has origins in the von Neumann–Morgenstern theory. For a detailed analysis
see [85]. Some particular observations are in [88], [116], and [178].
Markowitz mean-variance portfolio. The pioneering contribution to the mod-
ern portfolio theory is paper [112] of Markowitz. Many other authors elaborated
his fundamental idea of portfolio diversification, let us mention [57], [85]. Basically,
the Markowitz model is a one-period model. For multiperiod-selection models as
well as for continuous-time models we refer to [116], [43], and [85]. Generalizations
of portfolio separation theorems to more than two funds may be found in [85],
[116], e.g. Useful nonlinear programming techniques suitable for portfolio selection
algorithms via Mathematica® are in [17].
Capital asset pricing model. CAPM presented here is based on the mean-
variance portfolio theory. For generalizations of the CAPM (consumption-based,
continuous-time, intertemporal, and others) refer to [116].
Arbitrage pricing theory. Originally, the model has been developed as a multi-
factor model (as a model of factor analysis) by S. A. Ross (Arbitrage theory of
capital asset pricing, J. of Economic Theory 13 (1976), pp. 341–60). Due to its
rather difficult tractability caused by a necessity of the interpretation of common
factors, the regression form of APT with specified independent variables seems to
be more convenient in practise, see [143], [109].
                                                                                     103

Part II

DISCRETE TIME STOCHASTIC
DECISION MODELS
Motto: “Investment is, in essence, present sacrifice for future benefit. But the
present is relatively well known, whereas the future is always an enigma. Investment
is also, therefore, certain sacrifice for uncertain benefit.“ [79]



II.1      INTRODUCTION AND PRELIMINARIES

problem of a private investor, stochastic dedicated bond portfolio, mathematical
programs

   Our motto clearly reflects the main features of investment problems: necessity
to make decisions under uncertainty and over more than one time period. The
uncertainties concern the future level of interest rates, returns, exchange rates, pre-
payments, external cash flows, inflation, technological innovations, future demand,
etc. There exist various stochastic models describing or explaining these random
parameters (cf. Chapters II.5 and III.3) that are used to build the input for decision
models.
   To build a decision model, one has to decide first about the purpose or goal;
this includes identification of the uncertainties or risks one wants to hedge, of the
hard and soft constraints, of the time horizon and its discretization, etc. The next
is the data input and a subsequent algorithmic solution which concludes the first
level of the procedure. Interpretation and evaluation of the results may lead to
model changes and to a new solution or it may require a “what-if” analysis to get
an information about robustness of the results. In the framework of the famous
Markowitz model (cf. Chapter I.9), one may be forced to include further, e.g.,
regulatory constraints, one accepts a suitable model of the random returns, such
as the factor model introduced in Section I.11.2, and uses it to get their expecta-
tions, variances and covariances. There are additional questions, for example, how
sensitive is the investment strategy on the input values of moments of the random
returns and on the chosen risk aversion level. Interpretation of the results should
reflect the model assumptions (not necessarily fulfilled in real-life); for instance, the
Markowitz model is a static model over a fixed period, it is based on the buy-and-
hold strategy applied after the investment decision is made up to the horizon of the
problem. Hence, investment decisions based on its repeated use over more that one
period can be far from a good, suboptimal dynamic decision (cf. [27]).
   In this Part we shall deal with discrete time stochastic decision models leaving
the continuous time models to Part III. Let us illustrate the basic ideas on a slightly
modified formulation of a simplified problem of a private investor introduced in [19]:
104           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

1.1      Problem of a Private Investor
    The investor wishes to raise enough money for his or her child college education
N years from now by investing into some of I considered investments. Let the
tuition goal be      exceeding after N years provides an additional income of
of the excess while not meeting the goal would result in borrowing at the rate
              The investor plans to revise his investment at certain time instances
prior to N using an additional information that will gradually become available in
the future. These time instances (and the corresponding time periods) are indexed
by         for the initial decision, by                 for the revisions and by
for the horizon N. The main uncertainty is the return                          on each
investment within each period which depends on an underlying random element
   and is observable at the end of each period. The problem is that the investment
decisions , say            made at the beginning of period can be only based on the
already observed history, on the decisions made in the preceding periods and on
the observed returns, i.e., they are nonanticipative of future outcomes. This means,
inter alia, that the investment decisions                      at the beginning of the
first period are fixed, independent on future realizations of returns.
    Assume for a while that the future evolution of returns                        for
all considered investments is known, i.e.,                 the constant rate of return
for asset valid in period as defined in I.4.1. The investment problem can be
formulated as
                                  maximize
subject to




with nonnegative variables           denoting the surplus and deficit, respectively;
the middle line disappears for T = 2.
   Let T = 3. Consider a discrete probability distribution of concentrated on
a finite number of atoms (scenarios)                      with probabilities
               Denote           the corresponding returns,
the scenario dependent second- and third-stage variables, respectively, and solve the
following three-stage stochastic program:

                       maximize


subject to
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                        105




  To solve this problem (now an ordinary linear program) one has to choose
scenarios       their probabilities    to use them when evaluating the returns
                  for all investments and all scenarios, and to fix the values of

   The obtained first-stage decision does not depend on scenarios; using it the in-
vestor hedges (through optimally chosen second- and third-stage decisions
and                     against the considered future returns so that the expected
value of the final outcome is maximal. Having formulated the problem, we tacitly
assumed that            were the minimal values satisfying the listed requirements;
otherwise, we could also borrow                    having thus surplus of         In
more sophisticated models, compensating the difference between the goal and the
actual achievement is a nontrivial (last stage) decision problem. Hence we call also
         decision variables.
   Notice that the problem is always feasible; this is due to the assumed unlimited
possibilities of borrowing. In addition to nonnegativity conditions, the investment
strategies are explicitly constrained also by cash limitations and structural con-
strains; nonanticipativity enters implicitly.

1.2      Stochastic Dedicated Bond Portfolio
   Assuming known short-term reinvestment interest rates for period
the dynamic dedicated bond portfolio model was formulated in I.6.2.2. We rewrite
it as
                         minimize                   subject to




Here                        is composition of the portfolio,                     is the
vector of acquisition prices and the T-vectors                                 and
stand for the cash flows, liabilities and surpluses.
   In reality, the future short-term reinvestment rates are hardly known. We assume
instead that                      are random with a discrete probability distribution
carried by a finite number of scenarios                       with probabilities      In
addition, we allow for possibility of short-term shortfalls; this means that for some
scenarios and time periods (except for the last one) nonzero discrepancies
106            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

may occur. In such case, the investor borrows this amount and is obliged to repay
it including the interest rate (higher than      for a positive spread between the
short-term reinvestment and borrowing rates) in the next period. For each        we
consider now the cash flow constraints which include scenario dependent surpluses
     and shortfalls      In addition, there is a penalty               for borrowing
included into the objective function. The resulting problem reads




subject to




and nonnegativity of all variables
   This problem can be further generalized to accommodate not only random (sce-
nario dependent) cash flows, liabilities and spread, but also for including trading
possibilities. See the BONDS model 4.3 in Chapter II.4, Chapter II.6 and Section
II.7.3.
    In the general case of a T-stage problem a sequence of decisions is built along
each of considered data trajectories in such a way that decisions based on the
same partial trajectory, on the same history, are identical (nonanticipativity) and
the expected outcome (e.g., the expected gain or cost) of the decision process at
time T is the best possible. In the next Chapter the problem will be formulated
as a minimization one but a parallel formulation of a maximization problem is
straightforward. Hence, depending on the interpretation, the models are applied
to maximization of the total expected gain, see Examples 2.2.1 and 2.4 in Chapter
II.2, or to minimization of the total expected cost, etc. We shall use mainly the
concepts and methods of stochastic programming.
    As we shall illustrate by selected examples later on, see Chapters II.4 and II.6,
the goal of the decision process can be specified in various ways; one of them
is maximization of the expected utility of the final wealth. In other cases, one
tries explicitly to find a decision which satisfies simultaneously several optimization
criteria; recall the Markowitz model which aims at simultaneous maximization of
expected return and minimization of a suitably defined risk, etc. Chapter II.3
contains a brief introduction to multi-objective programming and discusses selected
applications and modeling issues.

1.3      Mathematical Programs
   In this Part, we shall model and solve decision processes under uncertainty via
stochastic programming. Prekopa [130] presents two definitions of stochastic pro-
gramming:
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                       107

      Stochastic programming deals with mathematical programming problems
where some of parameters are random.
     Stochastic programming offers solutions for problems formulated in connection
with stochastic systems, where the resulting problem to be solved is a mathematical
program of a nontrivial dimension.
   It is natural then to use terminology common in mathematical programming.
   Mathematical program in        is a constrained optimization problem

                         minimize                 on a set

where the set of feasible solutions    is defined by constraints as follows:



here                 are real functions and    is a set of specific (e.g., integrality)
conditions. Function is called the objective function . All functions involved may
depend on parameters, which gives a rise to parametric programs or to stochastic
programs if some of these parameters are random.
   Linear programs correspond to            and all functions                   linear.
Another important class are convex programs where           is a convex set and a
convex function.
   In this Part, a basic knowledge of mathematical programming is assumed.
108           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

II.2 MULTISTAGE STOCHASTIC PROGRAMS

various formulations, nonanticipativity conditions, convexity properties, scenario-
based stochastic linear programs, horizon and stages, the flower-girl problem, com-
parison with stochastic dynamic programming


2.1      Basic Formulations
   The model that reflects the decision scheme described verbally at the beginning
of the Introduction can be formulated in the following way:
   In the general T -stage stochastic program we think of a stochastic data
process
                                          or
and of a decision process


The       are real            while the random elements may be of quite general
nature; mostly, they are real random vectors as well. The realizations of are
called also trajectories or scenarios. We denote by P the probability distribution
of and by its support.
   The sequence of decisions and observations is



   The decision process is nonanticipative in the sense that decisions taken at
any stage of the process do not depend on future realizations of the data process
or on future decisions whereas the past information as well as the knowledge of
the probability distribution P of are exploited. We assume that the probability
distribution P is known and does not depend on x. We denote by
               the part of the stochastic data process that precedes the stage and,
similarly, by                         the sequence of decisions at stages
Thus the decision at stage is                               or more precisely,

   The outcome attributed to the sequence (1) is quantified by a function
The aim is to minimize the expected value                under both deterministic
constraints             ( given sets in      ),                              and
constraints

that may depend on previous decisions and observations; here,                   are real
functions.
   In the sequel we shall suppose that all functions are measurable with respect to
  and all expectations exist (this is certainly fulfilled if is a finite set). Relations
containing random elements are assumed to hold with probability 1. To simplify
this exposition we shall assume in addition that all infima are attained; hence we
                 II. DISCRETE TIME STOCHASTIC DECISION MODELS                       109

shall write min instead of inf. This assumption implies that the sets defined by the
           constraints,


are nonempty for all histories                   The first-stage constraints do not
depend on the random element.
   The form of (2) reflects the requirement that the choice of decisions       is not
explicitly constrained by future decisions and observations. In general, however,
this does not exclude the presence of induced constraints which must be fulfilled
to guarantee the existence of a feasible nonanticipative decision process x and have
to be detected within the algorithmic procedures; see the feasibility cuts in the
Algorithms II.8.3.1 and II.8.4.1.
  The corresponding T-stage stochastic program reads:
                minimize
   subject to                        and




   Realizations of      i.e., those behind the horizon, do not affect the decision
process, but they may contribute to the overall observed costs. Thus the decision
process may be affected by the probability distribution of
   The special choice of the function    in (3) as an indicator function of a certain
interval leads to the probability objective function of the form


where is a given interval of desirable values of . Similarly, the replacement of the
condition that the             constraints are satisfied with probability
by the requirement that they hold true with a prescribed probability provides sto-
chastic programs with probabilistic or chance constraints.
    It is important to realize that the stages do not necessarily refer to time periods,
they correspond to steps in the decision process. The main emphasis is on the
first-stage decisions which consist of all decisions that have to be selected before a
further information may be exploited whereas the second-stage decisions are allowed
to adapt to this information, etc. In some applications the importance of the best
first-stage decisions is evident: Examples are the decision about the capacity of a
new water reservoir, the decision about an initial contract or allocation of funds or
the initial charge decision for the metal melting process.
    Various schemes were considered to reduce the T-stage stochastic program (3)–
(4) to a sequence of similar            programs,           If    is not considered, the
objective functions are then defined recursively as
110             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

The minimization is carried over the respective                 constraints (2) and the
symbol          denotes the expectation with respect to conditioned by
   To relate an optimal solution of the T-stage problem to those minimizing the
         objective functions      certain boundedness assumptions concerning sets
defined by the          constraints and convexity of as a function of have to be
fulfilled; see [133]. Then not only the canonical projections of the optimal solution
     of the T-stage problem are optimal solutions of the              problems,
but also the optimal solutions of the          problems can be extended to an optimal
solution of the T-stage problem. For instance, if        arg min          over the first-
stage constraints           and                              then the next component
of the optimal solution,              is obtained by solving                       over
the second-stage constraints, etc. By introducing a fictious decision             which
does not influence the value of the objective function        these results may be ex-
tended also to problems which include
   Under additional assumptions, e.g., for




the scheme (5) can be written as a sequence of nested two-stage stochastic programs
of the following type:



   subject to

where for            for given              and observed realizations of
                                  denotes the optimal value of the stochastic program
(7)
 minimize                                                            subject to (2).

Here,          or it is an explicitly given function of                       if contri-
bution of      is considered. The two terms in the definition of functions         may
be interpreted as the costs attributed to the decision       at stage augmented for
the expected minimal future costs.
   Formulation (6)–(7) resembles the backward recursion common in stochastic
dynamic programming, see 2.5. In those models, the goal is to provide a sequence
of decision rules that can be used in particular stages of the decision process and in
any state of the system and that allow the decision maker to pass from observations
to decisions in an optimal way, e.g., for minimal total expected costs. To solve the
problem, i.e., to get the decision rules, one relies on the principle of optimality.
   A special case of (6)–(7) is the following multistage stochastic linear pro-
gram with recourse where all functions (with arbitrary indices) in the above
scheme are linear in the decision variables:
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                     111

  subject to

where the functions                    are defined recursively by



  subject to




and         or a given function of and
   Here, the       are                    and the remaining vectors and matrices
are of consistent dimensions. For the first stage, the values of all elements in
                 are known. Again, the main decision variable is        that corre-
sponds to the first stage.
   According to our assumption, an optimal solution of (9) exists for all and all
considered histories                  the case of the relatively complete recourse.
The term recourse was originally introduced in the context of two-stage stochastic
linear programs, see Example II.3.3.2, for the cost of compensating constraints
violation. Figuratively it has been used also for multistage stochastic programs
even if the interpretation is not straightforward. We speak of a fixed recourse
problem if the matrices     are known nonrandom for all

2.1.1    Exercise – Convexity Properties. Given the history, programs (9)
are deterministic programs with linear constraints. For numerical solution of such
nonlinear programs, convexity of the objective functions is important. To formulate
the convexity results, let us start with a special version of problem (9):
   Assume that               are independent real random vectors,
convex supports of                        for                       and
are known deterministic matrices and the right-hand sides are linear functions
of                     Hence, (9) simplifies to



  subject to

Using techniques of parametric programming [5] prove the following assertions:
    (i) The functions                     are convex in       Hence, the first-stage
        objective function                         is convex and the corresponding
        first-stage problem (8) is a convex program,
   (ii) The functions                    are convex in     – an important property
        for constructing bounds (see 5.3.5, 5.4.9 and 7.3 in Chapters II.5 and II.7,
        respectively) and algorithms (see Chapter II.8).
112             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   (iii) Modify the assertion (i) for the general formulation of (9), i.e., for arbitrary
         random matrices of coefficients.
   (iv) Under the independence assumption, the convexity result (ii) extends to
         problems with random matrices           which are linear in      and a parallel
         result holds true also for problems with random coefficients only in the
         objective functions. Is it possible to prove similar results also for mutually
         dependent components            in the above problem specifications and/or for
         random matrices       (i.e., for the random recourse problems)?


2.2 Scenario-Based Stochastic Linear Programs
   Assume now that the probability distribution of is concentrated on a finite
number of scenarios. To simplify the exposition we shall work with problems (9)
with the staircase structure, i.e. with           for          and we put
an extension to the general case is straightforward. For disjoint sets of indices
                 let us list as              all possible realizations of       Denote
by the same subscripts        the corresponding values of the         stage coefficients.
The total number of scenarios S equals the number of elements of              Each sce-
nario                         thus generates a sequence of coefficients

Denote                            the vector of feasible solutions of the scenario
  subproblem, i.e., of the system




Denote further          the matrix of system (10),          the vector of the right-
hand sides,       the vector of the objective function coefficients and
the vectors of the lower and upper bounds. Disregarding the nonanticipativity
constraints we replace the multistage stochastic linear program by




   subject to

   and the box constraints
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                           113

This is already an ordinary (nonrandom) linear program. The components of the
obtained optimal solution                            depend on the underlying scenar-
ios      they are not nonanticipative. To recover nonanticipativity, we must add
constraints                           to get scenario independent first-stage decisions
and, moreover, similar constraints to guarantee that the                decisions based on
the same history are equal. Such constraints can be expressed in the form
where x consists of carefully grouped components of all decision vectors               and
U is a 0-1 matrix of coefficients of the nonanticipativity constraints, which enter
now explicitly the problem constraints. This formulation of the scenario-based mul-
tistage stochastic program has been called the split variable representation or
form.
    Another scenario-based formulation of multistage stochastic linear programs is
related to the implicit inclusion of nonanticipativity constraints (compare with (3)–
(4)) and requires a specific organization of data in the form of a scenario tree. Each
value        of     has a unique ancestor      ( the value of the corresponding
we denote it by subscript           For instance,               for all realizations     of
the component         Again,     denotes the first-stage decision and to each          one
assigns the      stage decision vector                This allows to rewrite the T-stage
stochastic linear program with recourse in the following arborescent form:
    minimize




subject to




We adopt the natural choice                                         with          The
problem is thus based on the                    sequences
              of possible realizations of coefficients in the objective function (11),
in recourse matrices         transition matrices        right-hand sides and bounds
in the constraints for all stages, and on path probabilities
                                    of partial sequences of these coefficients, hence,
probabilities of realizations of             The path probabilities may be obtained
by stepwise multiplication of the marginal probabilities         by the (conditional)
arc or transition probabilities              related to the corresponding partial se-
quences of realizations. Probabilities       of the individual scenarios    are equal
to the corresponding path probabilities                     On the other hand, given
the structure of the scenario tree the path probabilities can be obtained from the
114             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

scenario probabilities   In some cases, it is expedient to use sets        of de-
scendants of which consist of those indices              for which the transition
probability            see Examples 2.2.1 and 2.4.
   The size of the linear program (11)–(12) can be very large; for instance, consider
the two-stage problem with random right-hand sides                               each
consisting of     independent random components whose probability distributions
have been approximated by alternative (zero-one) probability distributions: it gives
           hence,                equationsin (12). The usefulness of special numerical
techniques is obvious, see Chapter II.8. Both the implicit and explicit formulation
of nonanticipativity constraints can be combined, for instance, the implicit form
may relate only to the first-stage decision variables and the explicit one to the
decision variables for stages 2 , . . . , T; see Exercise 2.2.2.

2.2.1 Example – II.1.1 Revisited. Let T = 3 again. This is the case, e.g.,
if some of the considered investments (a term deposit or short term or medium
term bonds) mature in                years and, consequently, the portfolio has to be
restructured at time         Hence, there is one more stage of the decision process.
We put                    the trajectory up to       and its continuation from        to
N. Following the scheme (11)–(12), we denote by                          the considered
realizations of      by       their probabilities and by                    the possible
realizations of       grouped into sets                      for which the conditional
probabilities                notice that                               This information
about the discrete probability distribution may be represented by a scenario tree,
see Figure 1.
    The first-stage decisions       are scenario independent, the returns           and
the decisions          at the second stage of the decision process depend only on the
first part     of the subsequent returns               the final decisions and compen-
sations depend on the whole history, i.e., on scenarios        which consist of     and
their “extension” to                             Their probabilities equal
Following the notation used in (11)–(12), we assign subscripts            to random co-
efficients and to the decision variables       and          which appear in the second
and third stages. The problem – a three-stage stochastic linear program – reads




   subject to




and nonnegativity of all variables.
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                       115




2.2.2 Exercise. Let          attain only two equiprobable values      and
Rewrite the problem considered in Example 2.2.1 in the split variable form and
also in the split variable form applied only to the second and third stage decision
variables, i.e., with additional explicit nonanticipativity constraints for the second
stage. See Figure 2 for illustration of this idea.


2.3      Horizon and Stages
   In real-life applications, it is the modeling part of the problem which has become
the most demanding task. Besides the formulation of goals and constraints and
identification of the driving random process building a scenario-based multistage
stochastic program requires specification of the horizon, stages and generation of
the input in the form of a scenario tree, see Chapter II.5.
   In a majority of cases, the horizon and the stages are declared as given. In
practise, various situations can be distinguished:
     Both the horizon and stages are determined ad hoc, often for purposes of
     testing numerical approaches and/or software.
116            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

      Both the horizon and stages are determined, e.g., by the nature of the real-life
      technological process, see application 4.8 in Chapter II.4; another example is
      the flower-girl problem which will be discussed in the next Section.
      The horizon is tied to a fixed date, e.g., to the end of the fiscal or hydrological
      year, to a date related with the annual Board of Directors’ meeting, or to the
      end date of a screening study. Stages are sometimes dictated by the nature
      of the solved problem, e.g., by the dates of maturity of bonds, expiration
      dates of options or by periodic (quarterly, annual, etc.) management review
      meetings. In other cases, they are obtained by an application of heuristic
      rules and/or experience, taking into account limitations due to the numerical
      tractability. Rolling forward after the T-stage problem has been solved, the
      first-stage decision accepted and a new information exploited means to solve
      a subsequent T – 1-stage stochastic program with a reduced number of stages
      or possibly another T-stage problem with a different topology of stages.
      The horizon is connected with a time interval of a fixed (possibly even infinite)
      length, given for instance by the periodicity of the underlying random process,
      and the number of stages is chosen in dependence on the available comput-
      ing facilities. Rolling forward means here the repeated solution of a T-stage
      problem of the same structure of stages with the initial state of the system
      determined by the applied first-stage decision and by observation of the value
      of      and using process shifted in time.
      For example, the BONDS model, see application 4.2 in Chapter II.4, uses three
one-year periods for the three-year planning horizon of the bank and rolling forward
means that each year the bank is planning as if it wants to optimize its outcome
at the end of the next three years. For production planning problems, a horizon
of 12–18 months divided into three stages is used. Energy generation models, e.g.,
the unit commitment problem 4.7 in Chapter II.4, are usually built for a one-week
horizon consisting of 168 hours arranged into 2 – 12 stages. Short term hydro power
system control may use a horizon of 3 hours subdivided more or less arbitrarily into
stages, whereas the “long” term planning can be related to a weekend. In the last
case, rolling forward will have the same meaning as for the fixed horizon problems
(i.e., shortening the horizon).
   There exist further specific features of multistage problems. For instance, the
problem can be solved just once (to retire the debt by a given deadline as much
as possible [40] or to raise money for the college education as in Section II.1.1 and
in Example 2.2.1) or the problem and its solution persist in the future, with new
horizons, taking always into account just the final state of the system at the previous
termination date, i.e., at the previous horizon. To guarantee the possibility of such
continuation, the models are usually extended for additional constraints and/or
terms in the objective function to reduce the end effects, with or without reference
to an additional, auxiliary stage.
   For a chosen horizon, the crucial step is to relate the time instants and stages;
this is a common problem both in applications of multistage stochastic program-
ming models and in stochastic dynamic programming with discrete time. The main
limitations of the number of stages are due to numerical tractability. Some recom-
mendations are common for financial applications: Accept unequal lengths of time
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                       117

periods between subsequent stages, starting with a short first period. Together
with repeated rolling of the model over time, this may replace well the full dynam-
ics of the decision process even for problems with a few stages. Another, general
suggestion is to break the problem with a long (possibly infinite) horizon into three
phases: To use the scenario tree structure for                 to design just one de-
scendant from each node for                    (i.e., the horse-tail structure) and to
aggregate the rest of the process into one additional stationary stage. Using these
suggestions, one approximates the true probability distribution of by a simpler
one for the sake of the numerical tractability. Moreover, in reality, the position of
stages can be uncertain, random or scenario dependent — another interesting open
problem.

2.4       The Flower-Girl Problem
   The flower-girl sells roses at price and has to buy them at cost before she
starts selling. Flowers left over at the end of the day can be stored and sold the next
day, when she starts selling the old roses. The roses cannot be carried over more
than one additional day at the end of which they are thrown away. The demand is
random,       denotes the demand on the t-th day. The flower-girl wants to maximize
her total expected profit.
   The horizon is related to the number of days for which the flower-girl continues
selling roses without break (and also to the fact that our formulation treats only
one-period carry-over). Assume first, that the flower-girl sells roses only during
the weekend, orders the amount         on Friday evening, registers the demand       on
Saturday, stores the unsold roses (without any additional cost) and, possibly, buys
        new roses. Denote           the stock left for the second day and           the
amount of unsold roses at the end of the second day which is also affected by the
demand        on Sunday.
   All variables are nonnegative and subject to constraints



the total profit is

If the demand            is known in advance, then one of the optimal solutions is
to buy             and               roses which gives the maximal profit of
               Consider now a scenario-based version of this 3-stage problem. The
scenario tree consists of S scenarios corresponding to the considered realizations
                                of the demand on the first and second day, their
probabilities are                    We denote again by                           the
possible realizations of     by   their probabilities, by   the possible realizations
of          conditional on      and by        their (conditional) probabilities. The
corresponding realizations of the demand on the second day will be denoted         In
the notation introduced in (11)–(12) the problem reads:
118            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

  subject to




and nonnegativity constraints.
   The generalization to the T-stage problem (T > 3) is obvious. We index by t all
variables related with the stage t, i.e., the amount of roses ordered (x), stored (s)
and thrown away       at the end of the (t – 1)st day; notice that    plays the role
of the only decision variable at the last stage. We obtain:




  subject to




with             and nonnegativity of all variables. In case that the initial supply
          one gets                Recall that the number of stages equals one plus
the number of days for which the flower-girl sells roses without break and that for
the three stage problem considered above, i.e., for T = 3, the last inequalities are
redundant.
   The scenario-based formulation of the T-stage problem can be written in the
arborescent form or in the split variable form with explicit nonanticipativity con-
straints. Notice that the flower-girl problem should be more realistically formulated
as an integer stochastic program.
   Imagine now that the flower-girl wants to earn as much as possible during the
two months of her high-school vacations; such a 63 stage problem may be solvable
thanks to its simple form. Still some other possibilities should be examined. The
program may be rolled forward in time with an essentially shorter horizon, say, for
T = 8 which covers a whole week. This means that the flower-girl decides as if
she plans to maximize her profit over each one-week period and solves the problem
every day with a known non-zero initial supply of roses and with a new scenario tree
spanning over the horizon of the next 8 days. Another possibility is the aggregation
of stages. With a long horizon and random parameters only on the right-hand side
of the constraints, one may apply the idea of [71] designed for problems with an
infinite horizon: One chooses a tractable horizon T and adds one stationary stage
which takes into account the remaining stages           Finally, one may reformulate
the problem into the form of a stochastic dynamic program and solve it by the
backward recursion; see Example 2.5.1.
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                         119


2.4.1 Exercise.
   (i) Modify the flower-girl problem to include unit carry-over costs q!
   (ii) Rewrite the 3-stage flower-girl problem as a sequence of nested two-stage
programs. Observe that the third stage program has an optimal solution
                 This means that the problem can be alternatively formulated also
as a two-stage problem in which                                              and the
(conditional) probability distribution of    is used to evaluate its expectation.


2.5      Comparison with Stochastic Dynamic
         Programming
   Multistage stochastic programs are in their nature similar to multistage sto-
chastic control problems or to stochastic dynamic programming with discrete time;
they deal essentially with the same types of problems – the dynamic and stochastic
decision processes. The main distinction is in the solution concept. As we have ob-
served, the main emphasis in multistage stochastic programs lies on the first-stage
decisions. On the contrary, in stochastic dynamic programming it is the decision
rule that is of the primary interest. Such decision rule should be available at any
state of the system. An appropriate definition of the state is then the central point
of the dynamic programming formulations whereas in the context of multistage
stochastic programs states usually do not appear.
   Given the state and control spaces             the initial state   and the initial
control      the dynamics of the system is described by the system of equations



with given vector-valued transition functions         (Equality means again equality
with probability 1.) The goal is to control the evolution of the system by using an
optimal decision rule        to get the best total expected outcome of the decision
process.
   Formally, one may define                  and approach the above decision prob-
lem via multistage stochastic programming. Another possibility is to exploit the
Markov character of the system dynamics: with interstage independent                 the
dynamics as described by (13) is memoryless, and a further restriction of the prob-
lem structure allows to apply solution procedures akin to Bellman’s principle of
optimality. This restriction (besides of the already mentioned interstage indepen-
dence) consists of a certain separability property of the random objective function
   e.g. the additive form                                 further of finiteness of state
spaces and of compactness of control spaces.
   Assume for simplicity that                        and let
                                                   be the expected outcomes related
with the respective stage only. Denote further for                       by
the transition probabilities
Then the stochastic dynamic program can be reformulated as a Markov decision
problem:
120           STOCHASTIC MODELING IN ECONOMICS AND FINANCE




   The collection of the transition probabilities along with the (possibly degen-
erated) probability distribution of the initial state     and the control     fully
describe the stochastic evolution of the considered system without any reference to
the transition relation (13). The usual approach is to define functions




and to evaluate them by the “backward recursion”

                                      and for t = 1, . . . ,T – 1




compare with (6)–(7). Let            be an optimal solution of (14). Hence, for a
given initial state                  is the optimal value of the objective function
              and                    is the optimal control for the first stage. The
optimal controls     for the subsequent stages depend on the state of the system, say,
   which has been attained according to transition probabilities
corresponding to the already obtained optimal controls                         Hence,
                the optimal control at the first stage of the (T – t)-stages program
(14) with the initial state
   Solution of the optimization problems (14) may be hard or easy depending on the
application. However, implementation of the “backward recursion“ means to solve
the optimization problems (14) for all stages in dependence on multidimensional
parameters z and to store the values of the functions and of the optimal solutions
of (14) for all states of the system. This puts considerable requirements on the
memory and, therefore, in many applications the number of states turns out to
be prohibitively large. On the other hand, problems with very distant or infinite
horizon and problems with state and control dependent transition probabilities can
be treated efficiently provided that the structure of the problem fits well the solution
method (based on certain Markov properties, separability of the objective function,
etc.), that the dimension of the state vector is not too big and that the number of
constraints is limited. Notice that the considered structure of the problem is tied
with the solution method – the backward recursion connected with the principle of
optimality.
   On the contrary, multistage stochastic programs do not use the notion of the
state and their formulation is not connected with any prescribed solution technique.
Therefore, there exists a variety of stochastic programs along with various solution
procedures. The emphasis is on the first-stage decision, mostly with a continuum of
possibilities. Even if it is often possible to characterize the optimal decision rules,
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                        121

it is not necessary to design a full backward recursion as in dynamic programming
and, due to large dimensionality of stochastic programming problems, such proce-
dure would be hardly tractable. Hence, the numerical methods are not based on
the recursive form (6)–(7) or (8)–(9). It is possible to avoid special requirements
on the Markov structure of the problem. Numerous constraints can be included,
however, integrality of decision variables is a drawback, not an advantage from the
computational point of view. The probability distribution of random parameters,
which is assumed independent of the decisions, is approximated mostly by a discrete
probability distribution before or in course of numerical procedures. The resulting
problems are large mathematical programs, their dimensionality increases rapidly
with increasing number of stages and scenarios.
    Hence, the two discussed approaches used for modeling and solution of discrete
time dynamic decision problems under uncertainty are not competitive, they are
merely complementary having different favorable and unfavorable features. Certain
type of the “curse of dimensionality” relates to each of them: In stochastic dynamic
programs, it is connected with the number of states and the dimensionality of the
state and control spaces whereas it is mostly the number of stages which puts
limitations on tractability of multistage stochastic programs.
  We conclude this discussion by a simple illustrative example and in the subse-
quent Sections we shall focus on applications of stochastic programming.

2.5.1 Example – The Flower-Girl Problem. Under simplifying assumption
that the random demands are independent and identically distributed, the flower-
girl problem 2.4 can be easily formulated as a stochastic dynamic program and can
be also solved by the backward recursion of dynamic programming.
   Assume that       t = 1,2,... (demand on the tth day) are independent random
variables such that for all t


where
   Since at most K – 1 roses can be sold every day, we may restrict on policies
storing at most K – 1 roses on each day. Recalling that           (the control variable)
denotes the number of fresh roses ordered for the           day (t = 1,2,...) and that
   is reserved for the state variable (i.e. the stock of one day old roses left from the
(t – l)st day and          ) we conclude immediately that for any


Hence for any nonnegative integers        such that                 and independently
on the transition probabilities are
122          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

and are equal to zero otherwise.
    Obviously, if the order is           on the tth day when the stock left from the
previous day is          roses, the cost is   and the expected amount of the money
obtained by selling the roses is equal to                      i.e., the expected profit
of the t-th day in notation used for the additive objective function with
             equals




   The flower-girl problem can be solved now as a standard stochastic dynamic
program. The “backward recursion” (14) reads:              and




for t = 1,2 , … , T – 1 and any i = 0,1, … , K – 1. It can be easily solved for
the considered finite state space                          and for a large horizon T;
obviously, the integrality of states and of decision variables is exploited.
   However, it is hard to apply the backward recursion in more complicated prob-
lems as to the dimensionality of the state vector and/or in presence of numerous
state and control constraints. In the context of the flower-girl, think about a whole
set of traded flowers with various carry-over constraints, inclusion of a limited store
space or of a substitution effect in the (random) demand.
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                         123

II.3 MULTIPLE CRITERIA

multi-objective programming, efficient solutions,             problems, goal pro-
gramming, Markowitz model, alternative definitions of risk, VaR, expected utility,
tracking models, scenario-based stochastic programs, robust optimization


   Very often, plausible economic decisions cannot be chosen only according to one
criterion, such as the maximal profit, production efficiency or yield. In production
planning, environmental criteria have to be taken into account, in macroeconomical
problems regional aspects such as the local unemployment level play an essential
role. Very different, even conflicting goals can be set for a short time horizon and for
the long one, etc. Investment decisions should hedge against risks of various kinds,
such as liquidity, volatility or currency risks. The mentioned disparate criteria will
hardly be satisfied by a uniformly optimal decision. Problems of the above kind
belong under multi-objective programming and we shall briefly introduce the main
approaches for the case of continuous decision variables.

3.1      Theory
   Without loss of generality we shall formulate the multi-objective programming
problem for the case of minimization of two or more objective functions:
  “minimize”          functions                         on a closed set    briefly



An ideal solution         of the multi-objective programming problem (1) is defined
by the property



Ideal solutions exist only rarely and the first task is to introduce another concept
of solution        which is acceptable from the point of view of “minimization” of
all considered objective functions.


3.1.1 Definition. A solution          is an efficient solution of the multi-objective
programming problem (1) if there is no element            for which              and


   The modification of Definition 3.1.1 to multicriterial maximization problems is
straightforward and the interpretation of efficient decisions is clear: no other feasible
decision is uniformly better with respect to all considered criteria. Multi-objective
programming aims at location of efficient solutions and there are many ways how
to achieve this goal; we shall introduce some of them.
124          STOCHASTIC MODELING IN ECONOMICS AND FINANCE



3.1.2  Theorem. Let         be compact,                   continuous on and
          an arbitrary continuous function which is nondecreasing in its arguments.
Then at least one solution belonging to



is efficient for the multi-objective problem (1).
  Proof. The set        defined by (2) is nonempty due to assumptions; let
Similarly, there exists an optimal solution, say, of the auxiliary problem




subject to

According to the assumed monotonicity property of
   Assume that is not an efficient solution of (1). Then there exists        such
that               and                It means that is a feasible solution of the
auxiliary problem and that for an index                   and                 for
all remaining indices. Hence,                             \ which contradicts the
assumed optimality of

3.1.3   Comment
   The optimal solution and the numerical tractability of the optimization problem
(2) depend substantially on the choice of the function      One of its properties is
obvious: For increasing in its arguments, all optimal solutions of (2) are effi-
cient for (2). In general, an adequate choice of is a difficult problem. It would
not be necessary to deal with multi-objective programming if the choice of was
straightforward.

   A special simple choice of the function    in Theorem 3.1.2 is




We shall prove that under modest assumptions and using all possible choices of
weights t, (3) generates all efficient solutions of the solved multi-objective problem
(1).

3.1.4   Theorem. For a vector parameter                , let   be an optimal solution
of
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                      125

Assume further that the parameter vector t in (4) is positive or that is a unique
optimal solution of (4). Then is an efficient solution of the multi-objective pro-
gramming problem (1).
  The proof follows directly from Definition 3.1.1 and is left to the reader.

3.1.5    Theorem. Let              be nonempty, convex, compact and
1,..., K be convex functions on    Then for an arbitrary efficient solution
of the multi-objective programming problem (1) there exists a vector parameter
                such that is an optimal solution of (4).
  Proof. Denote     the convex hull of the set

Efficiency of and convexity of functions   imply that and          do not contain
common interior points. The two convex sets can be thus separated by a hyperplane
with coefficients


The special choice of         implies       and, moreover,              (otherwise
an appropriate choice of in the unbounded set            provides arbitrarily large
negative values of          . This means that there is a                 such that
                      Substituting                with an arbitrary          we get
the desired result:




3.1.6   Comment
   A stronger result holds true for linear functions         and a convex polyhedral
set     namely, is an efficient solution of the multi-objective problem (1) if and
only if it is an optimal solution of (4) for a positive parameter vector        . To
prove this result it is enough to notice that the set is polyhedral and to exploit
this fact when constructing the separating hyperplane.
  There are relatively many other approaches that provide efficient solutions:

3.1.7 Exercise - The                                    Select one of the considered
objective functions, say,     choose a threshold vector                and solve the
classical optimization problem
(5)        minimize       subject to         and
Assume that for the choice of the set
and prove the following statements:
   (i) Let be the unique optimal solution of (5). Then is an efficient solution
of (1).
    (ii) Let be an efficient solution of (1). Then there exists            such that
  is an optimal solution of (5).
126            STOCHASTIC MODELING IN ECONOMICS AND FINANCE



3.1.8 Exercise – The Mixed Approach. It is related to a different treatment
of distinct objective functions: some of them are put into constraints as in the
               approach whereas weights          are assigned to the remaining ob-
jective functions. As a result, one solves a parametric programming problem with
parameters in the objective function and on the right-hand sides, e.g.,




subject to

(see [72]). Explore the relationship between optimal solutions of this program and
efficient solutions of (1).

3.1.9 Exercise – The Goal Programming Approach. The main idea is
to try to get a solution from       for which the outcome measured by
                     is as close as possible to the K-vector of the best attainable
outcomes                                      The distances are defined in the space
of function values, a subset of      and one is free to use any of (weighted)
distances,             Hence, one solves a minimization problem



with a diagonal matrix                                      Using properties of the
distances and Definition 3.1.1 prove the following statements:
   (i) Let be an optimal solution of (6) with                Then is an efficient
solution of (1).
   (ii) For       at least one of optimal solutions of the minimax problem



is efficient for (1).

3.1.10 Exercise – Modifications for Multi-objective Maximization Prob-
lems.
   (i) Prove that with minimization replaced by maximization, Theorem 3.1.4 holds
true and Theorem 3.1.5 is valid for concave functions
   (ii) Modify Theorem 3.1.2 and the approaches described in Exercises 3.1.7 – 3.1.9
for maximization problems.

   The techniques of multi-objective programming allow to exclude ”bad”, non-
efficient solutions of the multi-objective problems (1) provided that the selected
criteria can be quantified and that the considered objective functions are a priori
given the same importance. In interactive numerical approaches, see [72], the user
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                       127

is allowed to change the values of parameters (weights and thresholds) to achieve
an acceptable balance between the criteria. There are various other problems which
have not been tackled here, e.g., an appropriate treatment of hierarchically ordered
objective functions or the case of a finite list of feasible alternatives. We refer to
[140].

3.2      Selected Applications to Portfolio Optimization
   In the sequel we shall formulate several well-known problems of portfolio opti-
mization, including the famous Markowitz model, which can be treated within the
framework of multi-objective programming presented in Section 3.1.

3.2.1   The Markowitz Model
   We have seen in Chapter I.9 that the Markowitz model was developed for invest-
ments in portfolio under various implicit simplifying assumptions. Among others
it assumes a frictionless market and applies to small rational investors whose in-
vestments cannot influence the market prices and who prefer higher yields to lower
ones and smaller risks to larger ones.
   The composition of a portfolio consisting of J risky assets is identified with the
vector x whose components are the fractions                       of the (disposable)
unit wealth invested in the         asset,              Depending on circumstances
one may require               or to drop the nonnegativity assumptions allowing for
short sales. A unit investment in the        share gives a random return over the
considered unit period. The assumed probability distribution of the vector of
returns of all shares is characterized by a known vector of expected returns
and by a covariance matrix                                      whose main diagonal
consists of variances     of individual returns.
   The “yield from the investment” x is then quantified as the expectation



of the total portfolio return and the “risk of the investment” as the variance or
standard deviation of the total portfolio return



or                      respectively. According to the assumptions, the investors
aim at maximal possible yields and, at the same time, at minimal possible risks –
hence, a typical decision problem with two criteria, “max”                  or “min”
                 and thus the mean-variance efficiency introduced by Markowitz is
fully in line with general concepts of Section 3.1 and the approaches presented there
can be exploited:
   The mean-variance efficient portfolios can be obtained by solving various opti-
mization problems, e.g.,
128                STOCHASTIC MODELING IN ECONOMICS AND FINANCE

see (4), where the value of parameter         is related to investor’s risk aversion
(small values of correspond to a risk averse investor whereas large values of are
typical for risk seeking investors), or



      subject to

where parameter is the minimal acceptable return, cf. 3.1.7, or by maximization
of a suitable aggregating objective function such that    fulfills assumptions of
Theorem 3.1.2. Provided that the covariance matrix      is positive definite, one
possibility is




hence, Sharpe’s ratio introduced in I.9.2.
   Notice that the same sets of efficient portfolios are obtained when the risk is
quantified either by the variance or by the standard deviation of the portfolio
return. To get this conclusion, consider (8) with the objective function       and
with its strictly increasing transform
   The set      is defined by           and other conditions on the composition of
the portfolio, e.g., the nonnegativity constraint and upper bounds.

3.2.2     Efficient Portfolios Based on Alternative Definitions of Risk
   Objections against the symmetry of the variance of returns as a measure of risk
has lead to various asymmetric risk definitions, such as the quadratic semivariance
                              the disadvantage are difficulties accompanying numer-
ical solution of the resulting optimization problems.
   Following the ideas of [145], Konno and Yamazaki [101] developed and applied
efficient investment decisions based on “risk” defined as the mean absolute deviation




To get a portfolio efficient with respect to       and          means to solve, for
instance, the program




subject to


(compare with (8)).
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                      129

   Values of (10) are constant multiples of the standard deviations            if the
probability distribution of the random returns is normal
   The advantage of this approach is that the sample-based form of (11) with all
expectations replaced by averages based on the sample or historical data can be
transformed to solution of a linear program. It is not necessary to estimate the
variance matrix, hence, it is easier to get the input data than for the Markowitz
model. Also an extension to an asymmetric quantification of risk is straightforward.
Indeed, using




with            at the place of (10) reduces to maximization of (10) again. To see
it, rewrite the positive and negative parts using known formulas              and

  Further approaches are related with the safety-first or probability criterion pro-
posed by Roy [139] at the same time when Markowitz developed his mean-variance
approach. The suggestion is to maximize on the probability



with a given level     of the required return of the portfolio. Under normality
assumption                the deterministic equivalent is (compare with (9))




Efficient portfolios with respect to the expected return       and the probability
(12) can be found e.g. by application of the                  approach 3.1.7. This
results in the chance-constrained criterion, cf. [160],




with a prescribed level of the total return and with a given probability
The explicit form of (14) under normality assumption reads




here,          denotes the           quantile of the standard normal distribution
N(0,1).

3.2.2.1 Exercise. Derive the form (13) and (15) of the safety-first and chance-
constrained criteria under assumption of normally distributed returns.
130           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

3.2.3   Quantile Criterion and the Value at Risk (VaR)
  The quantile criterion (cf. [97])


for a prescribed probability          can be evidently related with quantification of
the risk of the investment by its Value at Risk, VaR introduced in I.4.2.3. Indeed,
the probabilistic constraint in (16) can be written as                         If the
distribution function F of       is continuous and increasing,


the         quantile of the probability distribution of     satisfies the probabilistic
constraint in (16) sharp. Naturally, small values of          are desirable from the
point of view of risk minimization.
   To evaluate            one needs to get the probability distribution of     which
depends on the decision variables – the composition x of the portfolio. This is
a demanding task which is mostly solved by simulations. An exception is the
normal distribution N(r, V) of In this case, the probability distribution of
is                 whose         quantile is


Multiplying it by –1, we obtain the absolute value at risk, see (20) in I.4.2.3 for
             – the         quantile of the standard normal distribution N(0,1).

3.2.3.1 Example. Assuming normal distribution of returns, derive an explicit
form of an optimization problem which provides efficient solutions of


and compare it with (15). Derive also the explicit form of (16).
3.2.4 Expected Utility Criterion
   The generally accepted decision criterion of maximal expected utility of the total
final return offers further possibilities. As to utility functions                    it
is customary to assume that U is increasing and concave. The last assumption
corresponds to preferences of a risk averse investor who never prefers to accept a fair
gamble of the form – to move to wealth values            with probabilities and
respectively, when he could remain at the wealth level                        Similarly,
preferences of risk neutral or risk seeking investors are described by increasing linear
or convex utility functions, respectively. Consult Chapter I.8.
    Numerous early studies dealt with the relationship between various criteria men-
tioned in 3.2.1–3.2.4. It is apparent that for normal distribution of returns, the
portfolios obtained by solving (13), (15) or by minimization of           are mean-
variance efficient. Concerning the expected utility maximization, for normal dis-
tribution of returns and for concave utility functions, maximization of
provides mean-variance efficient portfolios as well.
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                        131



3.2.4.1 Exercise. Assume that the returns are normally distributed, N(r, V).
Derive that for the exponencial utility function               with       the
optimal solutions of                   can be found by solving
and are thus mean-variance efficient.


3.3      Multi-objective Optimization and Stochastic
         Programming Models
   We shall consider now various approaches to mathematical formulation of deci-
sion problems under stochastic uncertainty about the future values of the system
parameters from the point of view of multi-objective programming.

3.3.1   Scenario-Based Stochastic Programs
    Assume now that we are supposed to select the “best possible” decision which ful-
fills prescribed “hard” constraints, say,         where          is a closed nonempty
set. We accept that the outcome of a decision x is influenced by a random element
of a general nature whose realization is not known at the time of decision. The
random outcome of a decision x is quantified by              and different realizations
of provide different optimal solutions, say,             arg min           If the set of
possible realizations of is finite,                        methods of multi-objective
programming suggest to choose a solution efficient with respect to S objective func-
tions                           According to Theorem 3.1.4 such efficient solutions
can be obtained, e.g., by minimization (or maximization) of a weighted sum of
                         In our case, it is natural to use probabilities   of scenarios
     at the place of weights and the problem to be solved is




The result is the widely used expected value criterion.
   Notice that we get efficient solutions regardless the origin of probabilities
e.g., for    – the true probabilites or subjective ones, for probabilities offered by
experts, for equal probabilities obtained via simulation or coming from an empirical
probability distribution.
   Similarly, using the goal programming approach, see 3.1.9, we may get the track-
ing model




see [38] and 3.3.3.
   To apply these ideas to multistage stochastic programs as formulated in II.2 one
should first reformulate them so that the random elements enter only the objective
function, see e.g. (6) or (8) of Chapter II.2.
132          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

3.3.2   Scenario-Based Two-Stage Stochastic Linear Programs
   Using the general ideas of Section 2 for T = 2 let us consider problems of the
form




subject to




where                   are coefficients determined by scenario                   and
                     are their probabilities,            The first-stage decision x is
scenario independent. For each of considered scenarios, second-stage decisions
are introduced to maintain the fulfilment of constraints             by compensating
the discrepance             for an additional cost         To keep the linearity of
the problem, various possibilities of compensation are modeled by the recourse
matrices           The recourse costs             are the minimal attainable costs
of compensation. They depend on the first-stage decision and on the considered
scenario and are defined as optimal values of an auxiliary, second-stage program



The structure of the second-stage program (19) is influenced mainly by the recourse
matrices Ws and special cases are distinguished. For instance, the second-stage pro-
gram (19) with matrices                    where is the unit matrix, distinguishes
                               -
only between shortages                penalized by      and surpluses
penalized by       If                the recourse function



This is called the simple recourse problem; see II.4.3 and II.8.2.
   The assumption of the relatively complete recourse means that the set of feasible
solutions (18) is nonempty, hence, it is possible to compensate discrepances for an
arbitrary first-stage solution      and all considered scenarios. The fixed recourse
problems refer to fixed matrices                 whereas random recourse assumes
scenario dependent matrices
   Using (19), the problem (17–(18) can be rewritten as
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                      133

  minimize



on the set



compare with (8)–(9) in Chapter II.2. The optimal solution      of (20)–(21) is the
so-called here-and-now solution corresponding to the two-stage recourse problem.
   Notice, that minimization of the total expected cost of the two-stage decision
process (20) is in full agreement with general ideas of 3.3.1. The objective func-
tion (20) can be further modified; one possibility is parallel to expected utility
maximization in 3.2.4:



subject to (21) with          defined by (19), and a convex decreasing dis-utility
or loss function.
   A similar reformulation for scenario-based multistage stochastic programs is also
possible and it corresponds to the first-stage decision problems (6) or (8) in Chapter
II.2.

3.3.3   Tracking Models
   In the two-stage stochastic program with recourse, such as (17)–(18), the second-
stage variables    together with the recourse matrices        are used to compensate
the possible discrepancies between        and    for different scenarios. In this way,
relaxation of “soft” constraints                             is modeled. There are
various other possibilities, for instance, a simple tracking model related to (17)–
(18) can be formulated as follows: Let                   be the optimal values of the
individual scenario problems



subject to



   Assume that for each the scenario problems (23)–(24) have an optimal solution.
The basic compromising or tracking model follows the ideas of goal programming
with respect to minimization of the objective functions (13) and of the possible
differences between     and the right-hand sides    for all



   subject to
134          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   The optimal solution obtained by solving this problem tracks the optimal solu-
tions of the individual scenario problems (13)–(14) as closely as possible. Various
types of the norm in (25) can be used, recall 3.1.9; the choice influences the optimal
solution of (25) and the solution procedure.
   A general form of the tracking model constructed for scenario problems



reads


where the optimal values         of all individual scenario problems are supposed to
exist and the parameters
   Various types of tracking models have been suggested and applied in finance and
also in water resources, cf. [38]. An example is the portfolio immunization problem,
see I.5.1: The goal is to find the cheapest portfolio of fixed-income securities whose
present value equals the present value of liabilities. Given scenario of interest
rates, the scenario subproblem is



where    is the amount of bond j in portfolio,    are the initial aquisition prices,
           the present values of the bonds and of the liabilities and     consists of
some scenario independent constraints. With probabilities of individual scenarios
and with optimal values     of scenario subproblems, the tracking model reads




3.3.3.1 Exercise. Formulate a tracking model for the bond portfolio immuniza-
tion problem in which the present values and dollar durations of the portfolio should
be equal to those of liabilities. Consider also the possibility of assigning different
priority weights to deviations from this goal for present values and for dollar dura-
tions.

3.3.4   Robust Optimization
   Besides of the minimum risk and maximum yield criteria which appear frequently
in finance, see 3.2.1 – 3.2.4, there are real-life problems which aim also at limited
variability of the second-stage decisions and/or of their costs: It is not acceptable
to apply an optimal compensation strategy which requires repeated changes of
the labour allocation or suggests to spend funds or to repay the debts abruptly.
The requirement of a limited variability is an additional criterion which can be
quantified and included into the overall objective function or into constraints; also
goal programming methods can be exploited.
   An example is the robust optimization model [120] which modifies (17)–(18) to
capture the required limited variability of costs. With the variability quantified by
the variance of the costs, the problem is:
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                        135

  Minimize




subject to




   The newly introduced variables      are equal to the cost of the decision x plus
the corresponding cost of the compensation of discrepances by     if the scenario
occurs. The additional term in the objective function equals the variance of these
random costs     with its weight in the objective function expressed via a scalar
parameter         The efficient solutions which are obtained by solving (26)–(27)
for different nonnegative values of can be also obtained via the
approach 3.1.7:
   Minimize




  subject to (27) and


with an appropriately chosen parameter value       an upper bound on the acceptable
expected costs.
    A further possibility is to replace the objective function in the problem (26)–(27)
by a general performance function of the decision variables                         and
in addition, to relax the constraints. The resulting model can be formulated as
follows:
    Minimize



subject to




   The first term in the objective function (29) corresponds for instance to (26),
the second one, with a weight          penalizes possible violations of the original
second-stage constraints
136          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   Restricted recourse problems [167] aim at limitation of the dispersion of the
second-stage decisions. According to the principles of multi-objective programming,
the objective function (17) could be extended to



with a nonnegative parameter      cf. (26), or the constraints (18) extended for an
additional constraint



where is a chosen tolerance level; see 3.1.7.
    From the modeling point of view the choice among the introduced models de-
pends on the nature of the solved real life problem and also on the properties of
the resulting mathematical program, including its numerical tractability and sen-
sitivity of its solution on the input data. Similar models can be developed without
any reference to the two-stage stochastic program (17)–(18).
    For multistage stochastic programs, the prevailing ways of including alternative
criteria are based on the                 or mixed approaches.
                                                                                   137

II.4 SELECTED APPLICATIONS IN FINANCE
     AND ECONOMICS

stochastic programming in finance (portfolio revision, BONDS model, ALM model,
general features), production planning, capacity expansion, unit commitment and
economic power dispatch, and in melt control


   Advances in theory and algorithms for stochastic programs have contributed to
development of models which capture both the dynamic aspects and uncertainties
of financial and economic problems. We shall introduce several models that have
been, at least partly, applied in practise; to formulate them we shall use, with
reference to Section II.2.2, the split variables form and the arborescent form of
multistage stochastic programs as required.
   We shall start with an example of the two-stage stochastic programming prob-
lem: A decision         should be selected before realizations of random parameters
can be observed or their values revealed. After this information becomes available
the decision process continues by the second-stage, i.e., by the choice of an auxiliary
decision that depends on the first-stage decision and exploits the already obtained
information. The second-stage decision is interpreted as an updating activity (port-
folio revision, adjustment of the production plan, etc.) that brings about additional,
recourse costs. The requirement that the first-stage decision x cannot depend on
future observations of random parameters corresponds to the already mentioned
more general nonanticipativity property of the multistage decision processes.

4.1      Portfolio Revision
    Following [92], we assume that at the beginning of the first period, the investor
chooses an initial portfolio of assets from a set of considered assets indexed by
  = 1,...,I. At the end of the period, he or she observes the realization of the
random vector of security returns. At the start of the subsequent period, he can
choose a revised portfolio conditional upon the initial portfolio and on the observed
returns; the set of the considered assets remains unchanged and the investor pays
transaction costs. Hence, contrary to the dedicated bond portfolio management
problem II.1.2, the investor is allowed to trade. His goal is to satisfy the budget
constraints in both periods and to maximize the expected utility of the final wealth,
i.e., the wealth that results from the 1-st and 2-nd stage decisions and from the
(random) returns in the both periods.
    Denote
    the initial number of shares of security , the main decision variables;
       numbers of shares of security i bought / sold at the beginning of period 2 for
portfolio revision, the auxiliary decision variables;
    the resulting number of shares of security held in period 2;
   the initial per-share cost of security
               nonrandom exogenous wealth allotments at the beginning of period 1
(2);
138          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

              random returns on security in period 1 (2) which replace here the
random element
  the cost per unit transaction;
U the chosen utility function.
   All decision variables are integers and constraints on the initial holdings are
evident:



The subsequent portfolio revision is limited by the total wealth at disposal (coming
from the previous investment and from the additional external allotment), i.e., by




and the corresponding budget constraint for the second period reads




The second-stage variables         are limited by inventory constraints (recall that



The objective function




is maximized with respect to constraints on initial holdings. The optimal value of
the second-stage problem




subject to budget and inventory constraints depends on the first-stage decision x
and on a particular realization       of the first-period returns. In spite of a rather
simple structure of the second-stage constraints, it is in general impossible to get
the optimal value of (2) explicitly as a function of x and of        and substitute it
into (1). The way out is to approximate the probability distribution of            by a
discrete probability distribution concentrated on a finite number of scenarios, say,
                      with probabilities.                              The considered
portfolio revision problem reads now
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                         139

   subject to




   The necessary input consists of the initial selection of the considered securities,
of the probability distribution of         and of its discretization, of the conditional
probability distribution of                  that can be discretized as well, of deter-
ministic parameters and            and of the utility function U. Some generalizations
are possible, e.g., inclusion of tax on gross profit, possibility of borrowing and con-
sumption.

4.2      The BONDS Model
    The pioneering model [24] was designed as a decision support for multiperiod
management of portfolios of fixed income securities, bonds, in commercial banks.
At the beginning of each period, the portfolio manager has an inventory of bonds
and cash and decides which bonds to hold, sell and buy. The possible composition
of the portfolio depends on random cash inflows and outflows, on interest rates, etc.,
random variables which are supposed to have a discrete probability distribution.
The decision variables at the beginning of the t-th period                   depend on
realizations of the random subsequences          and the stages of the decision process
coincide with periods. The first-stage decision variables are scenario independent
and the last stage decisions accepted at the beginning of the T-th period depend
on            these nonanticipativity conditions will be spelled out implicitly. The
decision process is affected by the probability distribution of          but not by its
realizations.
   The goal is to maximize the expected market value of the portfolio at the horizon
T under constraints on cash flow, inventory balance, capital losses, initial holdings
and under nonnegativity of all variables.
    Denote
               the amount of bond bought at the beginning of period t (in dollars
of initial purchase price);
                 the amount of bond purchased at the beginning of period and
sold at the beginning of period (in dollars of initial purchase price);
                  the amount of bond purchased at the beginning of period and
held (i.e., not sold) at the beginning of period (in dollars of initial purchase price).
    These decision variables have to be nonnegative, to fulfill constraints on initial
holdings acquired before the beginning of the first period


and on inventory balance
140            STOCHASTIC MODELING IN ECONOMICS AND FINANCE



for all
   Using (3) recursively, we obtain




valid for all                                            and for all scenarios.
   Denote further
                the capital gain/loss on bond purchased at the beginning of period
  and sold at the beginning of period (per dollar of initial purchase price, after
tax);
              the annual yield from coupons of bond bought at the beginning of
period t (per dollar of initial purchase price, after tax);
              exogenous incremental amount of funds at the beginning of period
   The cash flow constraints read




(The transaction costs are taken into account by adjusting the gain coefficients for
the broker’s commission.)
   The constraints on capital losses are




where              denotes the upper bound on the realized capital losses (after tax)
from sales during a year,     is the set of indices of periods which correspond to the
end of fiscal years and is the index of the first period in the fiscal year indexed
by
   Let finally                  denote the final expected cash value (i.e., expectation
with respect to      conditioned by             per dollar of the initial purchase price
of the      bond purchased at the beginning of period and held at the beginning
of period T or bought at the beginning of period T, and let                 be the path
probability of the partial sequence            The objective function
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                        141

should be maximized subject to constraints (3), (5), (6).
    Again, it is a large scale linear program; the total number of constraints depends
essentially on the number of possible partial sequences           for
and it increases rapidly with the increasing number of stages. As the problem
concerns bonds only, no conditions on liabilities or on liquidity are present.
    The model was tested for T = 3 yearly periods. Scenarios were generated un-
der the assumption that the conditional probability distributions of the random
interest rates can be approximated in each period by discrete probability distribu-
tions concentrated at three points only. In the notation introduced in Section II.2.2
this gives 3 elements of         9 elements of    and the total number of scenarios –
elements of         equals 27. See also Example II.5.4.4.
    The reported results of backtesting the model on historical data (Salomon Broth-
ers time series of good grade municipal bonds) for bonds characterized by their
maturities (1, 2, 3, 4, 5, 10, 15, 20 and 30 years) indicate that the BONDS model
is a true competition to the typical management tools of banks which use either
the laddered portfolios (in which the amount invested in each of maturity classes is
approximately equal for all maturities) or the barbell maturity structure (in which
the maturities held are structured to the short and long ends with little investments
into intermediate maturities). Moreover, BONDS is a truly dynamic model: The
first-stage decision takes into account all considered future developments and its
feasibility is guaranteed. At the end of the first period, the model is rolled forward,
i.e., the horizon is moved out one more year and the model is solved again, with
the initial holdings from the new portfolio obtained from the preceding application
of the model and with new scenarios which take into account the already observed
changes of the interest rates.

4.3      Bank Asset and Liability Management –
         Model ALM
   The objective of the ALM model [104] is to maximize the discounted net value of
bank profits minus the expected penalty costs for infeasibility with respect to soft
constraints, subject to numerous constraints on budget, liquidity, structure of cash
flows (deposits / withdrawals), including legal and policy restrictions. There are
many sources of uncertainties such as rates of return, interest rates, deposits flows,
etc. The authors focused on the random deposits flows assigning deterministic fixed
values to the rates of return and to the interest rates. The problem is modeled as
a two-stage multiperiod stochastic program over N periods, with discrete random
variables       – the random balance sheet for deposit of the type d at the end of
period Similarly as in Section 4.2 we denote                              the decision
variables on buying, selling and holding at period the ith asset purchased in period
    In addition we introduce
       the planned deposit inflow in period
       the initial holding of deposit
      the amount borrowed in period
   the annual rate of withdrawals of deposits
                the auxiliary variables that compensate the observed discrepancies of
the deposit balance sheet;
142           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

               the (nonnegative) proportional penalty costs associated with the aux-
iliary variables;
             the interest rates paid on deposits of type and on borrowing;
      the discount rate from period to period 0.
    The planned amount of the deposits of type generated in period




can differ from the observed value         for each observed value        of       the
surplus



is compensated by the second-stage variable             the shortage




is compensated by            The resulting balance constraints on deposit flows read




   This form of constraints corresponds to the assumption that for all periods all
decisions                           on buying, selling, holding assets and on policy
             on building deposits and borrowing are made all at once, for all periods,
assets and deposits independently on the future realizations of the random sheet
balances. The only second-stage variables are thus             and                  the
scenarios can be interpreted as N-dimensional vectors of various sheet balance
forecasts up to the end of the planning horizon, say,                 In this case, the
numerous inventory balance constraints (3) need not be spelled out separately for
each period, they enter in their aggregated form (4) only and the scenarios consist
of different outcomes            of the balance sheet figures for all regarded deposits
and all considered periods.
   The remaining constraints are in form of linear equations and inequalities that
do not include any random parameters; we shall list them without any details.
   The cash flow constraints are of the same nature as (5) with transaction costs
and taxation spelled out explicitly. The incremental funds            are generated by
increments on deposits and borrowing. To approximate the continuous flow, one
assumes that one half of period’s net flows arrive at the beginning of the period
and the other half at the end of the period (or at the beginning of the next period).
Denote
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                       143

the amount of deposits available for the          period computed according to the
above rule. The increment of funds is




with
  The legal constraints refer to the peculiar regulations of the case study; they
express conditions like ”the current assets (say, those with
cannot be less that 10% of the total liabilities”:




   Policy constraints are introduced to capture the internal policy of the bank; they
put, e.g., limitations on personal loans and mortgages.
   Liquidity constraints stem from the requirement that the market value of the
bank’s assets is adequate to meet depositors’ withdrawal claims during adverse
economic conditions. It means that the liquidity risk is taken into account.
   The objective function consists of four terms: The discounted cost of direct
borrowing, the net discounted cost of deposits and the expected minimal penalty
cost for a deposit balance violation are subtracted from the discounted total returns
and capital gains            on assets purchased in period m and sold in period n
(after tax, with rates             respectively):




In the last term of (8), minimization is carried over nonnegative values of       and
         that compensate the discrepancies of the balance sheet figures for scenario s
and deposit in the          period, see (7). This is an example of the simple recourse
144          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

problem mentioned in II.3.3.2 and the minimal feasible discrepancies for a given
value    equal




The last term of (8) can be then replaced by




and the resulting objective function is maximized with respect to all decision vari-
ables               and         subject to all introduced constraints including (7).
   As a whole, ALM is a multiperiod two-stage stochastic linear program with sim-
ple recourse that can be solved by linear programming techniques if       are discrete
random variables           It was developed for the Vancouver City Saving Credit
Union for a 5-years planning horizon and it has been rolled forward continuously
period after period.

4.4      General Features of Multiperiod Stochastic
         Programs in Portfolio Optimization
   The most important requirements on realistic models supporting dynamic in-
vestment decisions can be summarized as follows:
     To reflect dynamic aspects including the intertemporal dependence of returns,
to aggregate assets and liabilities in one model consistently with the accounting
rules and to consider external cash flows;
     To include stochastic behavior of important parameters, such as external cash
flows or returns;
     To express investor’s risk attitudes in an adequate way;
     To include transaction costs, taxes, etc.
     To include legal, institutional and policy constraints;
     To respect trade-off among short, intermediate and long term goals;
     To keep the model understandable.
   These general guiding lines will be discussed below. They can be traced to a
certain extent already in the early models surveyed in 4.1–4.3 and are accented in
recent applications.
   A fundamental investment decision is the selection of asset categories and the
wealth allocation over time. The allocation decision involves the proportion of
major asset categories within a portfolio. The level of aggregation depends on
investor’s circumstances. For instance, a benchmark for US pension plans is the
60–40 mix, i.e., allocation of 60% of assets in a stock index and the remainder in
a bond fund. The major assets (a large capitalized stock index, a government or
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                        145

corporate bond index and cash) are complemented by other assets depending upon
investors requirements; these are foreign stock and bonds, loans, real-estate funds,
commodities and precious metals, more risky assets, etc. (See for instance [27]).
The portfolio can be rebalanced at the beginning of certain periods to cover the
target ratio. Otherwise, one applies the buy–and–hold strategy which does not
assume any transactions except reinvesting dividends and interest.
   The planning horizon at which the outcome is evaluated is the endpoint         of the
interval         which is further divided into nonoverlapping time intervals indexed
by                    The portfolio can be rebalanced at the beginning of each of
these time intervals to cover the target ratio or to contribute to maximization of
the final performance at          In some cases, additional time instants            are
included at which some of economic variables are calculated; after           no further
active decisions are allowed. An example is the interest rates forecasts needed for
pricing the long bonds included in portfolio.
   A critical issue is the handling of uncertainty. This is done mainly via modeling
probability distributions of random parameters by scenarios and their probabilities;
see Chapter II.5.
   The primary decision variables          represent the holding in asset category i at
the beginning of time period under scenario s after the rebalancing decisions took
place; the initial holdings are          Holdings        can stand for the amounts of
money invested in at the beginning of time period t (e.g., in 4.1), or they can be
expressed in dollars of the initial purchase prices (e.g., the BONDS model 4.2), in
face values, in numbers of securities or in lots (e.g., Chapter II.6), etc. Accordingly,
in the first case, the values of the holdings at the end of the period may be affected
by the returns on the market; the wealth accumulated at the end of the           period
before the next rebalancing takes place is then


Purchases and sales of assets are represented by variables             with transac-
tion costs defined via coefficients       and assuming mostly the symmetry in the
transaction costs; it means that purchasing one unit of at the beginning of period
  requires            units of cash and selling one unit of results in         units
of cash. The inventory balance constraint for each asset category (except for cash,
the asset indexed by = 0), scenario and time period is


It restricts the cash flows at each period to be consistent.
   The flow balance equation for cash for each time period and all scenarios is for
instance




with        the cash flow generated by holding one unit of the asset i during the
period    (coupons, dividends, etc.) under scenario                           the
146           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

planned external cash flow at the period under scenario              borrowing in
each period under scenario s at the borrowing rate       and      the pay down of
the liabilities at the beginning of the period and under scenario (For simplicity
we assume that all borrowing is done on a single period basis; a generalization is
possible.)
   For holdings, purchases and sales expressed in numbers or in face values, the
cash balance equation contains purchasing and selling prices,




and the inventory balance constraints for all asset categories except for cash (i.e.,
for       assumea simpler form


as no wealth accumulation is considered. The network structure of the balance
constraints for all       is an example of the network recourse.
   The decision variables                              are nonnegative and the special
form of the balance constraints displays a network structure which facilitates the
algorithmic solution. The last stage constraints may be slightly different from those
for intermediate stages, e.g., no revision and/or no borrowing is allowed.
   Depending on the character of securities, amortization factors may be introduced
in the inventory balance constraints. They express the fraction of the outstanding
face value at the end of the interval which reflects the effects of call options, default,
etc. It is easy to include further constraints which force a diversification, limit in-
vestments in risky or illiquid asset classes, limit borrowing, loan principal payments
and turnovers, reflect legal and institutional constraints. It is also possible to force
a specific decision policy, e.g., the fixed-mix policy which can be expressed as



where is a fixed ratio of asset in the portfolio.
   Requirements of solvency are often formulated as probabilistic constraints on the
level of total wealth with respect to total liabilities at the end of each period, e.g.,




with a given positive and given probabilities                    At the same time,
the expected costs due to insufficient solvency may be included into the objective
function along with other types of shortfalls. Inclusion of probabilistic constraints,
however, represents an increased complexity for numerical implementation of the
model. Discrete probability distributions can be used but the related probabilistic
constraints do not in general describe a convex set. The recommended approach is
via auxiliary zero-one variables.
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                          147



4.4.1     Exercise. Let                  be all different realizations of the partial
sequences         which may arise at the beginning of stage with probabilities
and                          denote the deficit or shortfall in case that scenario
occurs. (For simplicity we do not consider here any interstage dependence.) Let
              be sufficiently large constants and              be 0-1 variables. Show
that the probabilistic constraint on solvency at the end of period can be replaced
by



   Whereas the random liabilities              are model parameters, various further de-
cisions concerning liabilities can be included in the external cash flows: similarly
as in the ALM model 4.3, one can distinguish decisions on accepting various types
of deposits. Decisions concerning emission of additional debt instruments, on spe-
cific goal payments, on long term debt retirement, etc. can be included as well.
Naturally, the cash balance equation has to take into account the cost of the debt
service.
   The objective function is related to the wealth at the end of the planning horizon
     this for each scenario consists of the amount of the total wealth
reduced for the present value of future liabilities and loans outstanding at the
horizon and for the costs attributed to shortfalls. At times, however, the investor’s
liabilities are not readily marketable and must be discounted and their market value
estimated, for instance through actuarial models in case of pension plans. The risk
factor can be included into constraints, or it enters the model through the choice
of a suitable utility function. To include short term goals, cumulated penalties
for shortfalls under scenario (e.g., penalties for                   or for             in
4.4.1) are subtracted from the final wealth computed for the same scenario. An
alternative way is to apply a utility function of several outcomes in certain time
instants covered by the model.
   Another serious problem is the no-arbitrage property which, whenever assumed
to hold true in the reality, should be also captured by the models. Roughly speaking,
no trading strategy which starts with zero or negative wealth should result in a
nonnegative wealth for all scenarios and in a positive wealth for at least one scenario
some time in the future. Such possibility is reduced by nonnegativity constraints
on all variables (i.e., no short sales are permitted), by a restricted borrowing or
other regulative constraints. Also inclusion of a nonlinear utility function can be
recommended. In the linear case, e.g., for linear utility function of a risk neutral
investor, no-arbitrage property of the model is connected with linear programming
duality: If both the primal and the dual program are feasible, infinite values of the
objective are excluded, see [85] for details.
   To initiate the model, one uses scenarios                               of the returns,
interest rates and liabilities for all t and starts with the known, scenario independent
initial holdings                   of cash and all considered assets and with
       If no ties in scenarios are considered we visualize them as a fan of individual
scenarios which start from the common known values                                   valid
for          In this case, no additional information will be released later on and all
148            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

decisions                                         can be computed all at once thanks
to the full foresight of the evolution of random coefficients for each scenario up
to the horizon. In this case, only one additional requirement must be met: the
initial decision                                   must be scenario independent. This
is a simple form of the nonanticipativity constraints and the resulting problem is a
multiperiod two-stage stochastic program. For an example see the ALM model 4.3
or Chapter II.6.
   For multistage stochastic programs, the input is mostly in the form of a scenario
tree, the nodes of the tree are related with revealing of an additional information
which makes a basis for the subsequent decision. To build the scenario tree is a
complicated task. The nonanticipativity constraints can enter in an explicit way
by forcing the decisions based on an identical part of several scenarios to be equal
(as it was in the case of the two-stage model) or implicitly by using a decision tree
which follows the structure of the already given scenario tree.
   The main interest lies in the first-stage decisions which consist of all decisions
that have to be selected before an additional information is revealed, just on the
basis of the given probability distribution P, i.e., on the basis of the already designed
scenario tree. The second-stage decisions are allowed to adapt to the additional
information, etc.
   With the explicit inclusion of the nonanticipativity constraints, the scenario
based multiperiod and multistage stochastic programs can be written as large scale
deterministic programs decomposed along scenarios, see the split variable form dis-
cussed in Section II.2.2. An example is




where is a set of “hard” constraints on the decision vectors            such as non-
negativity or scenario independent bounds,      represents the nonanticipativity con-
straints and            is the performance measure (random objective function) in
case of scenario     To solve this program, one can apply general purpose software
for nonlinear programs, to implement special decomposition algorithms which make
use of the structure of the problem, etc.; see Chapter II.8. Nonlinear or integer con-
straints can be included but for the cost of an increased numerical complexity. On
the other hand, if the resulting problem is a large linear program, there are at
disposal special decision support systems which are able to manage efficiently large
scenario based stochastic programming portfolio problems; see Chapter II.8.

4.5       Production Planning
   Production planning and utilization of production capacity is an important task
for manufacturing managers. To complete it, they have to face the demand un-
certainty and they are asked to provide production plans over several periods to
avoid abrupt changes and problems connected with the continuation of the produc-
tion. The problem is usually designed for several monthly periods and the plans
are revised on a rolling horizon basis. In the problem formulation, see [59], several
simplifications are introduced:
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                     149

  Production is always completed in the period in which it begins;
  At any given period, whatever cannot be produced in-house can be produced at
a vendor;
  All products can be manufactured on the same set of machines and the raw
materials are available in the required quantities.
   The objective is to minimize the total cost (discounted to its net present value)
of inventory holding and vendor production. An alternative objective can be to
maximize the expected difference between total revenue and cost.
   Let the considered products be indexed by                    the periods by
          the manufacturing machines by                 and the scenarios (demand
outlooks up to the horizon T) by
   The deterministic data consist of
      the inventory holding cost per unit of product in period
      the unit cost of product obtained from the vendor in period
    the amount of capacity of machine needed for producing one unit of product

       the available capacity of machine in period
    the initial inventory of product
   The stochastic data consist of
      the demand for product in period under scenario
   The decision variables are
      the inventory volume of product at the end of period under scenario
      the production volume of product in period under scenario
      the amount of product obtained from the vendor in period under scenario

   Again, the decisions can be made sequentially using the past information only;
this is the nonanticipativity property called sometimes also the implementability
constraint. In the problem formulation, the nonanticipativity constraints will be
briefly summarized as                        The problem reads




subject to




where is the probability (or the weight) of the scenario
   An interesting modification is the model where no alternative source of produc-
tion exists. In this case, decision variables      are replaced by         the lost
demand of product in period under scenario and               replaced by        the
150           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

per unit revenue for product in period a further possibility is to introduce into
the objective function another measure of risk or a penalty function related with
the unserved demand.

4.5.1    Exercise. Extend the problem formulation to the case when there is a
choice of vendors from a given set of vendors with prescribed capacities and costs
for delivery of product in period

4.6      Capacity Expansion of Electric Power Generation
         Systems – CEP
   Electric power generation systems are supposed to serve the uncertain time vary-
ing demand for electricity, called load. The statistical analysis of load can be based
on extensive data sets and historical time series. The required information is the
total length of subintervals belonging to a given time interval [0, T] at which the
load exceeds a given level L: this can be described by a nonincreasing function
           The inverse function               is the load duration curve. It is again
a nonincreasing function                         whose values l(t) equal the load L
which is surpassed during time periods of a total length                           see
Figure 3.




    The load can be discretized by assuming that                                 are
its possible values and            the corresponding probabilities.
    Consider first a simple problem: The aim is to determine the numbers or capac-
ities of R different equipments/ technologies characterized by unit investment costs
            and unit operating costs                 to serve the demand in such a
way that the expected total cost for the capacity expansion is minimal. Denote
    the total capacity of equipments of the type and
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                      151

   the capacity of equipments of the type     used to generate power if load equals
    i.e., for the    operation mode.
   The resulting problem




   subject to




is a two-stage stochastic program whose second-stage constraints resemble those of
the well known transportation problem.
   A more realistic formulation tries to incorporate dynamic features of the capacity
expansion problems which should capture the time evolution of costs and of the
load duration curve, the possible appearance of new technologies, the construction
delays, etc. The vector of random parameters          includes not only the random
demand in the considered periods, but also the costs; in more general cases, one
may also consider random life-time of equipments, random construction delays
random date of appearance of new technologies, etc.
   An example is a model over T periods with the decision variables and model
parameters dependent on the index of the period and on the considered random
factors, demands and costs; for simplicity, the possibly limited life-time of equip-
ments will not be taken into account. Let us denote
         the new capacity decided at time for equipment which becomes available
at time                       for         The existing capacity of      equipment at
time that was decided before           is denoted
         the cumulated new capacity of        equipment which is available or already
ordered at time                 for
   Assume now that the load duration curve has been approximated by piecewise
constant function whose different (load) values                        correspond to
different operation modes, the differences
represent the additional power demanded in the mode for a duration                 see
Figure 3. We assume here that both         and       and also the investment costs
and operation costs        depend on time and on random parameters
   The stochastic model is then




   subject to
152             STOCHASTIC MODELING IN ECONOMICS AND FINANCE




where          is the capacity of equipment operating in mode at time allocated
to meet the random demand and             is the availability factor of equipment in
period Notice that one distinguishes between the capacity which is available at
time e.g.,                            the extension of capacity            decided at
and the cumulated existing and ordered capacity               up to time
   Both continuous and discrete probability distributions of the random element
can be considered and, similarly as in Chapter II.2, constraints involving random
coefficients are fulfilled with probability 1. The comparison of the model with
the general T-stage stochastic program (3)–(4) introduced in Chapter II.2 leads
to the observation that the constraints have to be extended for nonanticipativity
conditions on all decision variables. It is also expedient to consider an additional
emergency backstop technology which is always available but for a high cost.


4.6.1    Exercise. Following the methodology explained in 4.2 reformulate the
capacity expansion problem for the case of a discrete probability distribution of

4.6.2     Comment
   For                                             we have
         and besides the nonnegativity constraints, the constraints of (10) reduce to




Hence, for fixed costs          the difference between (9) and (10) lies only in a
different way of approximating the load curve.

4.6.3 Loss of Load Probability
    An important issue for electricity generation problems is the reliability of the
system. The relevant characteristic is called LOLP – Loss of Load Probability and
it is defined by the property that the demand can be satisfied with a probability
           on which a lower bound, say,                          small, is imposed. It
is often limited by the authorities. Using the introduced notation we may formulate
this requirement via probabilistic constraint
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                          153

   4.6.3.1 Exercise. Assume that                        The probabilistic constraint
applies for        and the capacity                             is nonrandom for all
equipments. Let be the probability distribution function of                     The
deterministic equivalent of the probabilistic constraint (11) is




where               is the        -quantile of     Elaborate in detail.

4.7     Unit Commitment and Economic Power Dispatch
   The problem is an optimal scheduling of the generating capacity among gener-
ating units of an existing power system. Such schedule attempts to minimize the
generation costs while meeting the demand and other constraints imposed by the
physical characteristic of the system. We are supposed to decide which units to
commit at each time period and (if committed) at what generating capacity.
   Disregarding randomness, considering R generating units and T time periods and
using the notation introduced in 4.6 as much as possible we can write a deterministic
model




subject to




   Here, functions      evaluate the cost of generating          provided that the gen-
erating unit was committed. The status of units is modeled via 0-1 decision
variables                   if unit r is committed at period and                otherwise.
Functions       provide the costs due to changing the status of generating units in
subsequent time periods. There are lower and upper bounds on the capacity of the
units and a prescribed safety volume               which expresses the fact that the total
capacity at each period must exceed the predicted demand to avoid disturbances
of the system. There are further constraints on the status of the units, e.g., the
minimum up-time or switch-off requirements; we shall aggregate them as
Further constraints, say,                 relate the generation capacity and the status
of the unit; an example are the upper and lower bounds in (13).
   Besides thermal- and hydro-generating units, which differ by generating costs
and whose physical character influences essentially the construction of functions
there is also a possibility to sell or buy electricity on an open electricity spot market.
We may include these options into constraints (13) as additional generating units
indexed by R + 1 and R + 2, with capacities                        with a predetermined
154           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

status and assign them unit costs                          and                      in
the objective function (12). We denote here by        the quoted spot market prices,
the parameters                       are spreads for buying and selling, respectively.
   The size of the resulting mixed-integer nonlinear program depends on the number
of generating units and on the number of periods, usually 168 hourly periods for a
horizon of one week. However, neither the demands          nor the spot market prices
     are known in advance. To hedge these uncertainties we consider S scenarios –
T-dimensional vectors of couples                              with probabilities
               scenario dependent vectors                        and
and minimize the expected costs




with respect to all decision variables and subject to




   This problem – a mixed-integer stochastic program – has to be further elaborated
to take into account stages of the decision process (the nonanticipativity constraints
will be then included into         ), to include the specific character of thermal- and
hydro-generating units, availability and costs of the fuel, environmental restrictions,
etc. End effects have to be treated, namely for hydro-generating units. In addition
to the spot operations on the electricity market, the existing term documents may
be included. In the special case that the commitment decisions z* have been already
accepted the problem reduces to the economic power dispatch problem.
   Besides the power generation capacity, it is also the capacity and reliability of
the transmission network which influences the performance of the system. We refer
to [129] for a possible approach based on the stochastic programming methodology.
   In spite of its complexity the unit commitment problem belongs presently to
the most popular applications of stochastic programming. It is a mixed-integer
stochastic program and for its efficient solution, both the stochastic programming
methods and stochastic dynamic programming may be combined; cf. [158]. Prob-
lems of this type are solved within large deregulated electricity markets and they
combine various features of stochastic production problems, water resources man-
agement and financial decision problems. The peculiarity is that electricity is a
nonstorable commodity.

4.8     Melt Control: Charge Optimization
   Melt control problems belong to the broad field of production control applica-
tions. They are studied as one of the production steps in iron and steel works. Melt
control problems may be fully separated from other foundry optimization problems,
which simplifies the model building and its solution. Their importance stems from
the fact that foundries usually have high overheads, and hence, even small per-
centual savings may recover a significant amount of money. In addition, material
inputs represent the biggest part of the total melting costs.
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                       155

   The produced alloys and input materials are composed of certain basic elements
(iron, carbon, etc.). The production process consists of several steps (e.g., charge,
alloying). In each of them, the hot melt in the furnace is enriched with certain input
materials (return materials, scrap, ferroalloys, etc.) and a new mixture is melted
again. Hence, the problem has a natural multistage decision structure. In each
step of the process the melt composition changes and particularly, random losses of
elements in the melt must be considered. During heating of the melt the amounts
of elements change randomly, e.g., due to the rise in slag and oxidation. These
losses are influenced by the composition of the melted material. The remaining
amount of an element is expressed as a linear function in the input quantities of
all considered elements, the coefficients are called utilizations of the considered
element related to the amount of other elements in the melt. In the following
simplified examples, these losses, and hence the related utilizations of elements are
taken as the only random variables. Historical melt reports are available and may
be used to construct scenarios or scenario trees of utilizations for the melt control
problems.
   The goal is to find amounts of the input materials in the cheapest way under the
main requirement that the prescribed output alloy composition is achieved. We use
scenario-based two- and three-stage stochastic linear programs to illustrate basic
modeling ideas for charge optimization of induced and electric-arc furnaces. For a
general approach to melt control, developed for any alloy, furnace, and technology
see [126].

4.8.1 Example: Two-Stage Induced Furnace Charge Optimization. We
begin with a simple model for charge optimization of iron production in an induced
furnace – a model with a common two-stage structure: Through the initial charge
decision the final cost of the melt is minimized taking into account also the conse-
quences of possible random losses and the requirements on the final composition of
the melt. The problem written in the arborescent form (11)–(12) of Section II.2.2
reads


subject to




where          are stages,    is the set of indices of input materials available at
stage
    is the number of considered elements at stage and indices and specify them,
        are known unit costs of    input material,
156            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

             are prescribed lower and upper goal bounds for the amount of the ith
element in melt composition at stage
                         denote the amount of ith element in the unit amount of
input material,
         denote the first-stage decision variables, the amount of       input material
at the beginning of the melt process,
                 denote the second stage decision variables, which stay for the addi-
tional amount of        input material assigned under scenario
   The only random elements are utilizations and we denote
     the utilization of ith element related to the amount of lth element in the melt
when scenario       occurs,                  are indices of scenarios and           are
their probabilities. The frequently considered case            when        means that
interactions of random losses are ignored.
   In the first-stage constraints,    stands for an expert-designed ‘standard’ utiliza-
tion which applies to the first stage. Usually,                              is chosen.
These constraints reflect the metallurgical rules which aim at the process control
stability and in general, they cannot be neglected. On the other hand, possible
losses of the materials added in the second stage of the melting process are not
considered.

4.8.2 Example – Three-Stage Electric-Arc Furnace Charge Optimiza-
tion. The situation becomes more complicated with a steel production in an elec-
tric-arc furnace. Because of two alloying phases, the whole process must be mod-
eled as a three-stage one. To simplify the model description, we mostly utilize the
notation of Example 4.8.1 and the arborescent form (11)–(12) from II.2.2.
    To get the Markovian structure of the model constraints, the melt composition
is described explicitly by additional auxiliary variables     describing the state of
the decision process – the amount of        melt element at node of stage before
a subsequent decision was taken. We assume an empty furnace at the beginning of
the process, hence,              at stage 1, then                                etc.
    The resulting form of the model is




subject to
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                        157



   Again, the expected cost of melt is minimized subject to constraints requiring
that during the whole melt process the average melt composition satisfies the given
bounds and that the final product satisfies these boundes for all considered scenar-
ios. In the last stage, full utilization of added materials is assumed again.
   Let us point out that both models introduced in this Section need further exten-
sions (e.g., involving technological constraints, inventory constraints, and uncertain
scrap composition or for more than three stages) to be a more realistic tool in the
melt control.
   At the end, two specific problem and model properties have to be underlined:
     Stages are not defined by modeler’s choice because they are given by the
modeled production process.
     Because the filled furnace cannot be enlarged or emptied during the process
(contrary to the assumed unlimited borrowing and lending possibilities in financial
applications, to the simplifying assumptions of the production planning problem
4.5 or to trading possibilities on an open electricity market in 4.7), the related hard
constraints imply the fact that relatively complete recourse cannot be assumed.
Hence, feasibility of the first-stage solution must be analyzed.
158           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

II.5     APPROXIMATION VIA SCENARIOS

scenarios and their generation, various levels of the available information, exam
ples of specific models used for scenario generation (vector autoregressive model,
BlackDermanToy model, Vašček model), sample information, postoptimality and
output analysis (consistency, contamination and minimax bounds), scenario tree
generation (clustering, sampling, fitting moments)


5.1     Introduction
    A typical, even though not quite realistic assumption in the general formula
tion of the stochastic programming models is that the probability distribution P
of the random element         is known. With P known, the main stumbling block
for algorithmic solution of stochastic programs, see problem (3)–(4) in Chapter
II.2 for instance, is the necessity to compute repeatedly at least the values of the
multidimensional integrals of the involved functions, which themselves need not be
defined explicitly. To overcome this problem, various approximation schemes, both
stochastic and deterministic ones, were designed: One can replace the function
by a simpler one or approximate the true assumed probability distribution P or
both. The goal is to get a numerically tractable optimization problem, or a se
quence of such problems, whose solution would be acceptable as an approximation
of the solution of the true underlying decision problem.
    When approximating the true probability distribution P, one should exploit the
structure of the problem and also the available information about P that comes
from theory, historical data and experience. There are relatively many prospects
if the approximation of P reduces to the approximation of (possibly many) one
dimensional probability distributions: Besides approximation by a discrete prob
ability distribution, one can use piecewise uniform distributions (histograms) or
approximate the density by kernel estimates, etc. In the multidimensional case,
approximation by discrete probability distributions is the prevailing approach. It
means that the true probability distribution P is replaced by a discrete probability
distribution concentrated on a finite number of points, say,                 with prob
abilities             The atoms       of this discrete probability distribution are the
scenarios which enter the scenariobased formulations of the stochastic program
ming problems.
    The origin of scenarios can be very diverse; they can be atoms of a known genuine
discrete probability distribution, can be obtained in the course of a discretization
/ approximation scheme, by simulation or by a limited sample information, they
can result from recognized regulations or from a preliminary analysis of the prob
lem with probabilities of their occurrence that may reflect an ad hoc belief or a
subjective opinion of an expert, etc.
    The use of scenarios as a representation of uncertainty is not limited to applica
tions of multiperiod and multistage stochastic programs; several other possibilities
were introduced in Chapter II.3. In addition, scenarios are built to evaluate the
average performance of an already proposed sequence of decisions, to get the covari
ance structure of intersecurity returns required, e.g., for the Markowitz model, or to
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                        159

compute durations for stochastic versions of duration matching and immunization
models for asset/liability management problems.
   Naturally, one is interested in results for the true underlying problem. Various
techniques of output analysis for the obtained solution of the approximate problem
help to draw inference about the solution of the true problem. They must be tailored
to the structure of the solved problem and to the approximation technique which is
supposed to reflect the nature of the input data. The next item is the robustness of
the obtained approximate optimal solution and the optimal value: The procedure
should be robust in the sense that small perturbances of the input, i.e., of the chosen
scenarios and of their probabilities, should impair the outcome only slightly so that
the obtained results remain close to the unperturbed ones and that somewhat larger
perturbations do not cause a catastroph. The importance of robust procedures
increases with the complexity of the model and with its dimensionality.

5.2      Scenarios and their Generation
   We have introduced scenarios as atoms of the true discrete probability distri-
bution P or of that discrete probability distribution which approximates the true
one. However, the primary aim of scenario generation is to build a manageable
problem which will provide good decisions for the true underlying real-life problem.
This is an ambitious task in which compromise is needed between precision of the
approximation of the probability distribution P and the size and goal of the approx-
imate problem, which, moreover, often requires a specific form of the input (e.g., a
scenario tree for multistage problems). Generation of scenarios is problem specific
and it should reflect both the problem structure and the available information on
the underlying probability distribution. It is natural to use historical data (if any)
in conjunction with an assumed background model, to apply suitable estimation,
simulation and sampling procedures and also to reflect the opinion of the experts
based on their experience, heuristics, etc. For all these reasons the generation of
scenarios cannot be reduced solely to forecasting the future development of the
complex system under consideration.

  Concerning the level of the available information, four basic types of problems
may be distinguished:

5.2.1   Full Knowledge of the Probability Distribution
   The probability distribution P is fully specified, hence, scenarios can be obtained
by sampling from this probability distribution or by application of a discretization
or simulation scheme. Related to the chosen approximation technique, there are
various possibilities how to draw conclusions about the optimal solution of the
original problem. In its pure form this situation appears mostly in the context of
testing the designed models and/or the performance of newly developed solvers.
The assumed fully known probability distribution (mostly normal, uniform or dis-
crete one) may stem equally from a theoretical model, from historical data or from
an experience of an expert. An example is generation of scenarios for the ALM
model [104] discussed in Section II.4.3.
160            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

5.2.2   Known Parametric Family
   In this case, only a parametric family of probability distributions based on a
theoretical model is specified while the parameters of the probability distribution
P are estimated from the available data. The choice of the parametric form of
the probability distribution or of the stochastic process corresponds to the choice
of the model, the estimation of parameters to the calibration of the model and a
subsequent simulation, sampling or discretization procedure follow similarly as in
5.2.1.
   This type of information appears frequently in stochastic programming problems
in finance and also in water resources management and planning. This is partly due
to the fact that the relevant stochastic models of interest rates and assets prices or
those of water inflows came to the attention relatively early and both discrete and
continuous time models have been well developed and supported by time series of
historical data. The most common situation is that the random element is in fact
a stochastic process,                    it explains the use of the word “scenario”.

5.2.3 Vector Autoregressive Models
   As an example of the discrete time stochastic models we introduce the vector
autoregressive model of the first order
(1)

where the eigenvalues of H fulfill             and       are jointly independent. The
parameters            are estimated from historical data and possibly further adapted
to distinct sources of information (e.g., experts’ forecasts or values of related global
parameters). Let             be these estimates.
   Starting with a known vector        and using the calibrated model (1), scenarios
are constructed step by step as



where is obtained as an observation from              by a suitable discretization or
simulation technique.
   Similarly, also autoregressive and ARMA models of higher orders or econometric
models with lagged variables may be applied. Factor analysis can be used to get a
small number, say M, of one-dimensional independent factors                such that
the covariance matrix of              is approximately equal to      the elements of
matrix C are time-independent factor loadings.

5.2.4   The Black-Derman-Toy Model
    This model introduced in [22] is one of frequently used discrete time models
aimed at generation of interest rate scenarios. Its primary purpose was to provide
a tool for pricing bond options. The model assumptions can be summarized as
follows:
      The short interest rates are lognormally distributed, the volatility of their
logarithms depending only on time.
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                      161

     Binomial approximation of the normal distribution of ln         with time depen-
dent drift and volatility is used at all selected time instants
     In the binomial lattice, the short interest rate can move up or down with equal
probability over the next time period; the pairs of “up - down” and “down - up”
moves from any fixed state at a time point result into the same value of short
interest rate at the time point        (the path independence property).
  As a result, at each time point there are       possible states and for the given
horizon T there are       equiprobable scenarios. Each of them can be represented
by a vector with T – 1 zero-one digits, say



and the probability of each scenario is                        The digit 1 at the tth
position corresponds to the “up” move, the digit 0 corresponds to the “down” move
of the one-period short term interest rate in the step        The corresponding one-
period short term interest rates for scenario s and for the time interval         are
then given as




That is,        is a realization of a binomial random variable, its value equals the
number of the “up” moves for the given scenario which occur at time points
          See Figure 4 for the lattice with the scenario corresponding to vector
                  marked out.
   The base rates      and the volatility factors for all are computed numerically
so that the obtained binomial lattice fits the yield curve and yield volatilities for
zero-coupon government bonds at a given date; this input should be available for
all maturities.
162           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   The BlackDermanToy model is currently close to the industry standard. For
its application see Chapter II.6.

   Continuous time stochastic models are mostly represented by stochastic differ
ential equations of the type



where W is the Wiener process and coefficients                           fulfill some
assumptions. For instance, solutions of (3) with     independent of and satisfying
certain integrability conditions are known as diffusion processes; see III.2.2.

5.2.5 Vašček’s Model for Spot Rates
  Consider the following form of the model introduced in [164]:



with a positive constant. It corresponds to the choice
and                 in (3). It is the so called OrnsteinUhlenbeck process, a Markov
process with normally distributed increments. In contrast to the Wiener process,
it has a stationary distribution. The instantaneous drift              forces the pro
cess towards its longterm mean        the so called mean reversion property, and the
constant instantaneous variance        makes it to fluctuate around in a continuous
but erratic way. This also means that, contrary to the BlackDermanToy model,
negative values of       cannot be excluded.
   To apply the model for generation of scenarios of interest rates means to estimate
the parameters and to choose a suitable time discretization              Then



with an arbitrarily given initial value    and with    independent, N (0,1).
   There are various extensions and modifications of the initial Vašček model; al
ternative choices of coefficients                    provide other onefactor models.
More dimensional continuous time models result by considering multiple sources of
uncertainties, e.g., default possibilities of corporate bonds, prepayment of mort
gages, influence of inflation on indexed bonds, random behavior of volatilities, etc.
The stochastic differential equations may include more that one factor, i.e., differ
entials of several independent or correlated Wiener processes instead of one. This
helps for instance to distinguish differences in behavior of the short term and long
term rates. Also the Wiener process can be replaced by the Poisson process to
reflect jumps of the interest rates process, etc.

5.2.6   Multidimensional, Multifactor Models
   An example is the model of evolution of the vector
of key zero coupon interest rates
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                       163

with N factors - the intercorrelated Wiener processes    see [87]. Principal com-
ponents method is used to reduce the dimension of the problem. As a result, the
initial N-dimensional Wiener process with correlation matrix    is represented by
        non-correlated components and for



with time independent loadings               The advantage is that the N - dimen-
sional scenario can be now obtained by generating repeatedly n independent normal
variables



5.2.7   Sample Information
   The available sample information about the true probability distribution is based
mostly on observed past data. If the data are homogeneous enough, if they can
be viewed as independent, identically distributed random variables (vectors), the
use of the empirical distribution is straightforward. Otherwise, one could think
of a preprocessing procedure to treat the missing data, smoothing, etc., or of an
adjustment to fit specific values of (sample) moments.
   The simplest idea is to use as scenarios the past observations obtained under
comparable circumstances and assign them equal probabilities; see for instance
[157] for scenarios of future electricity demand in a given period of year. Similarly,
[121] suggests to construct scenarios of joint assets returns for a T-period model as
       distinct T-tuples of their subsequent observations from n previous periods
and to assign them equal probabilities,

5.2.8   Low Information Level
    The above mentioned procedures fail if there are no reliable data. Under such cir-
cumstances, scenarios and their probabilities are mostly based on experts’ forecasts
or even on governmental regulations. For instance, to test the surplus adequacy of
an insurer, New York State Regulation 126 suggests seven interest rate scenarios to
simulate the performance of the surplus. Postoptimality (are the seven scenarios
enough?) and stability analysis of the obtained solutions is crucial even though
it is hardly possible to draw conclusions about the optimal solution of the true
underlying problem.
    Under the heading of “low information level” we can also include the cases when
the true probability distribution is described only by several moment values or/and
some simple qualitative properties.

5.2.9 Miscelaneous Sources of Uncertainties
   In most applications one can trace interactions of various information levels and
the best thing to do is to use all available information. Past information is often
combined with experts’ opinions and this is probably one possible origin of the
postulated form of the true probability distribution. Different information levels
164           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

and different time-scales of collecting and recording data may apply to distinct
parameters of the model separately.
   In portfolio management, different classes of securities require different treat-
ment, deposits and liabilities can be driven by conceptually different external fac-
tors such as mortality rates. For management of a new pension plan, for instance,
the random factors which run the bond market can be well described by a rele-
vant interest rates model, basic requirements on premium and pension payments
are partly known thanks to extensive demographic data whereas the uncertainty
relates to the future preferences of clients. The scenarios and their probabilities are
then based on experts’ forecasts, they may even reflect only certain extremal cases.
   If there are independent sources of uncertainties the number of scenarios needed
to represent their mutual influence on the results is the product of the number of
scenarios used to represent the impact of each source separately.

5.3      How to Draw Inference about the True Problem?
   Possibilities of drawing conclusions about the optimal solutions and the optimal
value of the true stochastic program using the results of the approximate scenario
based program depend essentially on the structure of the solved problem as well
as on the origin of scenarios. Generally speaking, the output can hardly be more
precise than the input and it is easier to answer questions concerning precision of
the obtained optimal values than those concerning the sets of optimal solutions.
   We shall discuss briefly the general methodological devices which can be applied
to the analysis of the scenario based problems that arise as an approximation of the
true problem. The main tools are selected methods of probability theory, asymp-
totic and robust statistics, simulation methods and parametric optimization, the
main sources of errors come from simulation, sampling, estimation and also from
incomplete or unprecise input information. To simplify the exposition, let us con-
centrate on stochastic programs written in the form (compare with (6) in Chapter
II.2 and with (20) – (21) or (25) in Chapter II.3)



on a closed nonempty set             which does not depend on P. This notation is
used to underline the dependence of the problem on the chosen probability distri-
bution P of      We denote
           the optimal value of (4),
                                  the set of optimal solutions of (4), not necessarily
a singleton,
           the unique optimal solution of (4) in case that         is a singleton.
   We accept that the true probability distribution P has been replaced by an-
other probability distribution obtained by parametric or nonparametric methods
and by sampling, discretization and simulation techniques. The precision of the
approximation can be quantified by means of a suitable distance of the two prob-
ability distributions. The question is how the chosen / evaluated precision of the
approximation influences the differences of the optimal values                     and
the distances of the sets of optimal solutions              for the true problem and
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                       165

for the approximate one, respectively. This problem setting falls into the frame
of quantitative stability of parametric programs and presentation of the relevant
results is beyond the scope of this book. Instead, let us start with the notion of
weak convergence to get qualitative stability results.

5.3.1 Definition. Let                  be probability measures on Borel sets of
the same Euclidean space    Then    is said to converge weakly to P as        if
for any bounded continuous function



   To obtain continuity of expectation functionals
means to restrict the class of the considered functions          to bounded con-
tinuous functions of or to restrict the set of probability measures to a subset
with respect to which the functions          are uniformly integrable. In addition,
we need convergence results also for the optimal values                 and for the
optimal solutions.
5.3.2   Classical Consistency Results
   Under assumptions that          is a continuous bounded function of for every
        and        weakly, the pointwise convergence of the objective functions in
(4) follows from Definition 5.3.1:


If   is compact and the convergence is uniform on        we get immediately


If, moreover,    is convex and            is strictly convex on       for all  it is
easy to get in addition the convergence of the (unique) optimal solutions
of                  to the unique optimal solution       of the initial problem (4).

5.3.3 Example – One-Sided Bias. Consider the case where                  are empirical
probability distributions obtained by simple random sampling from P. It means
that         is the relative frequency of the event              among independent
copies             of and, accordingly, it is a random variable. However, the weak
convergence of       to P still holds true with probability 1 (that is, for almost all
sequences of realizations             ).
   In this case, it is possible to prove that the obtained optimal values        have
a one-directional bias in the sense that


Indeed, for any fixed          the function values           are independent, identi-
cally distributed and
166           STOCHASTIC MODELING IN ECONOMICS AND FINANCE



5.3.3.1 Exercise. An empirical point estimate of               follows from the Law
of Large Numbers and an asymptotic confidence interval can be obtained from the
Central Limit Theorem.
   Prove that                          Construct the asymptotic confidence interval
for
   An upper bound for            is the expected value              evaluated for an
arbitrary            Construct a point estimate of               and an asymptotic
confidence interval in a similar way as before. The resulting bounds are important
for designing stopping rules and for tests of quality of a “candidate” solution
   To get asymptotic results under less stringent assumptions concerning the ap-
proximating probability measures and the functions requires a different method-
ology which also extends to properties of the sets of optimal solutions. A simpli-
fication is possible whenever the general stability properties with respect to the
probability distribution can be reduced to a finite dimensional parameter case. An
example are probability distributions of a given parametric form (cf. 5.2.2) and the
results concern differences between the optimal values            and       obtained
for the true parameter value      and for its estimate, respectively, etc.

5.3.4 Asymptotic Results for a Parametric Family
   Assume that the true probability distribution P is known to belong to a para-
metric family                   of probability distributions indexed by a parameter
vector belonging to an open set             The objective function now depends on
                       and (4) is a standard parametric program
Let us assume that the optimal value         exists for all      and is a continuous
function of on a neighborhood of the true parameter value, say,            Having a
statistical estimate   of    and knowing its asymptotic properties we can obtain
parallel asymptotic properties of the optimal value
   Whenever              with probability 1 or in probability, then
with probability 1 or in probability, respectively.
  This assertion can be complemented by the rate of convergence based on the

   Let    be an asymptotically normal estimate of , i.e.,                       and
  be continuously differentiable at with              Then         is asymptotically
normal,


   We shall apply this result in Chapter II. 7. Similar assertions can be obtained
for optimal solutions provided that these solutions are unique, continuous, dif-
ferentiable in    However, even uniqueness of optimal solutions requires special
assumptions which are not always realistic and their verification is not straightfor-
ward.

   Low information level corresponds to the case when the true probability distri-
bution is known to belong to a nonparametric family of probability distributions
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                      167

defined, e.g., by fixed values of some moments, by a fixed support or by qualita-
tive attributes such as unimodality. Also the case of scenarios designed by experts
without any obvious relation to the true probability distribution will be included
into this category.

5.3.5 Moment Bounds
   In the first case, one may use the results concerning the moment problem: Re-
quired consistent moment conditions can be attained by discrete probability distri-
butions carried by a relatively small number of atoms. These probability distribu-
tions qualify as natural discrete approximations of the true probability distribution
and given the available information, they provide a sensible choice of scenarios and
probabilities. Moreover, one can try to construct minimin and minimax bounds on
the optimal value of the true program:



   Under special assumptions about the family       and about the structure of the
underlying stochastic program (4), e.g., for the random objectivefunction
convex or concave, and/or separable with respect to        , this approach provides
the best case and the worst case discrete probability distributions carried by fully
specified scenarios.
   A well-known simple example is related with the Jensen inequality. Assume that
         is convex for all        and that the expectation         exists. Then the
Jensen inequality applies,                               Consider now family of
probability distributions with a fixed expectation, say                     Jensen’s
inequality provides a lower bound



valid for all          and for all          This bound is attained for the de-
generated probability distribution    concentrated on     Notice that this worst
case probability distribution does not depend on x, a property which cannot be
in general expected. The above discussion implies that, in the considered case,
the lower bound in (6) is the optimal value of the deterministic convex program


5.3.6   The Contamination Method
   This method applies again to stochastic programs rewritten into the form (4)
and it does not require any specific properties of the probability distribution P. It
is suitable for the postoptimality analysis as it may be used to support conclusions
about resistance of the already obtained optimal output to changes of scenarios and
their probabilities and to check possible influence of out-of-sample scenarios.
   Inclusion of additional scenarios or branches of the scenario tree means to pass
from the initial probability distribution P to
168           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

the probability distribution contaminated by the probability distribution which
is carried by the additional scenarios or branches of the scenario tree. For fixed
probability distributions       the expected value in (4) computed for the con-
taminated probability distribution     is linear in the parameter and under mild
assumptions, its optimal value



is a finite concave function on [0,1] with a derivative

5.3.6.1 Exercise. Let be convex compact and assume that
is continuous in          for all  (a simplifying assumption). Prove that
     is concave on [0,1].

   Bounds on the optimal value        for an arbitrary          follow by properties
of concave functions:



An upper bound for the derivative             equals                   where x(0) is
an arbitrary optimal solution of the initial problem (4) obtained for the probability
distribution P; in case of the unique optimal solution, this upper bound is attained.
Hence, the evaluation of bounds in (8) requires the solution of another stochastic
program of the type (4) for the new probability distribution        to get       and
evaluation of the expectation                at an already known optimal solution of
the initial problem (4) but for the contaminating probability distribution
   Contamination technique can be useful also in analysis of results obtained under
a fully specified probability distribution P. It is another example of reduction of
the stability problem to a finite dimensional parameter case. Small values of the
contamination parameter are typical for various stability studies. The choice
of may reflect the degree of confidence in expert opinions represented as the
contaminating probability distribution       and so on. By a suitable choice of the
contaminating probability distribution     one can study the influence of including
additional “out-of-sample” scenarios and emphasize the importance of a scenario
by increasing its probability.

5.3.6.2 Example. Consider the problem of investment decisions in the debt and
equity markets in the US, Germany and Japan. Historical data enable to construct
many scenarios concerning returns of investments in the considered assets cate-
gories. We denote these (presumably equiprobable) scenarios by
and let P be the corresponding uniform discrete probability distribution. Assume
that for each of these scenarios, an outcome of a feasible investment strategy, say,
        can be evaluated as           Maximization of the expected outcome
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                         169

provides the optimal value          and an optimal investment strategy
    The historical data do not cover all possible extremal situations on the market.
However, experts in the investment committee may foresee such events. Assume
that they agreed on one additional scenario      capturing this extremal event. This
scenario is the only atom of the degenerated probability distribution       for which
the best investment strategy is        - an optimal solution of                  The
contamination method explained above is based on the probability distribution
carried by the scenarios                       and on the experts scenario       with
probabilities       for              and          The probability assigns a weight
to the view of the investment committee and the bounds (8) (multiplied by -1) are
valid for all            They clearly indicate how much the weight interpreted as
the degree of confidence to the investor’s view, affects the outcome of the portfolio
allocation.
    The impact of a modification of every single scenario according to the investor’s
views on the performance of each asset class can be studied in a similar way. We use
the initial probability distribution P contaminated by       which is carried now by
equiprobable scenarios                                 The contamination parameter
   relates again to the degree of confidence to the expert’s view.
   Also the structure of the problem influences essentially the possibilities of an
adequate scenario generation. The most complicated problems – the multistage
stochastic programs with interstage dependent coefficients – will be discussed in
the next Section.

5.4      Scenario Trees for Multistage Stochastic
         Programs
   For scenario-based multistage stochastic programs one assumes that the prob-
ability distribution P of is concentrated on a finite number of scenarios
              having probabilities                    Partial sequences
scenarios at stage                        are listed as                as already intro-
duced in Section II.2.2, together with their path probabilities          and arc (transi-
tion) probabilities          The set of all scenarios        consists of
their probabilities equal the path probabilities          and are obtained as products
of the corresponding arc probabilities.
   The described structure of the input data is represented as a scenario tree. We
can think of it as of an oriented graph which starts from a root (the only node
at level 0) and branches into nodes at level 1, each corresponding to one of the
possible realizations of     and the branching continues up to nodes at level T.
This arrangement is based on the one-to-one correspondence between the partial
sequences          and the nodes of the tree at stage t for t = 2 , . . . , T. This means
that for any node at level t, each of the new observations          must have only one
immediate predecessor            i.e., a node at level t – 1, and a (finite) number of
descendants        which result in nodes at level               compare with (11)–(12)
in Section II.2.2. The number of descendants of all nodes at a given level
of the scenario tree may be equal. If this occurs for all stages the structure of such
balanced tree can be coded as a product of numbers of descendants of the root and
170            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

of nodes at levels 1,... , T – 1. For instance          describes the structure of a
scenario tree with 3 branches from the root, 2 branches from nodes at the first and
second levels and no branching at the third level. The total number of scenarios
equals the numerical value of this product, S = 12; see Figure 5. Similarly, Figure 1
depicts a balanced tree of the type




   Two special cases of the scenario tree are to be pointed out:
      For all stages t = 2,..., T, the conditional probability distributions
are equal to the marginal probability distributions                  the interstage indepen-
dence; in this case, the scenario generation methods apply to each stage separately.
      For all stages t = 2 , . . . , T, the supports of conditional probability distributions
of conditioned by realizations                  are singletons. This means that the scenario
tree is nothing else but a ”fan” of individual scenarios                         which occur
with probabilities                        and, independently of the number of periods, the
multiperiod stochastic program reduces to the two-stage one; see Figure 6.




   Except for the two special cases mentioned above, to build a representative
scenario tree seems to be presently the crucial problem for applications. It can
be approached from the point of view of a suitable data manipulation, it should
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                         171

reflect both the underlying probability assumptions and the existing data, and be
linked with the purpose of the application. It often asks for compromises between
a manageable problem size and the desired precision of the results. In this context,
the important problems are possibilities of trimming the tree, designing strategies
for refining the tree, or tests of the influence of including additional scenarios and
stages; one of the tools is the contamination technique introduced briefly in 5.3.6.
   Number of nodes of a scenario tree grows exponencially with the number of
stages. Therefore, an alternative data arrangement may be considered, obtained
for instance by relaxation of the requirement of unique predecessors at the previous
stages. For example, the Black-Derman-Toy binomial lattice, see Figure 4, assumes
a special recombining property of the data paths and consequently, the number of
nodes grows linearly in the number of time periods.

5.4.1   From Data Paths to a Scenario Tree
    We shall focus now on generation of scenario trees for the cases when the main
random factors have been detected and enough data paths of their realizations can
be generated in accordance with a parametric or nonparametric model, see 5.2.1 –
5.2.7. In general, these data paths do not display any nonanticipativity property
and do not necessarily follow the time partition imposed by the stages of the sto-
chastic programming formulation. They are used to generate the coefficients of the
solved problem, e.g. the matrices                                           in stochastic
linear program (8) – (9) in Chapter II.2. For example, industrial project evaluation,
as well as asset and liability management will often include an interest rate process
as one of random elements. Long term pension fund and insurance models also
have to take into account the inflation process. Whereas the data process can be
modeled solely according to theoretical and empirical assumptions, the coefficient
process for scenario-based multistage stochastic programs is by construction a dis-
crete time path-dependent process defined mostly as a deterministic transformation
of the data process.
    Hence, the first important step is to delineate the initial structure of the scenario
tree, i.e., the horizon, the number and the character of stages and the branching
scheme. The stages are characterized by the possibility to take additional decisions
based on a newly released information. Such information can be obtained at a
specific date (expiration of an option), every day, week, month, quarter, year, etc.
The horizon of the model can be relatively large when measured in these time units
whereas for computations, it is impossible to use a scenario tree with too many
stages; the majority of contemporary real-life models use 4 –10 stages. The stages
do not necessarily correspond to time periods of an equal length. Typically, the
first stage relates to a relatively short time period whereas the last one may cover
several years.
    For initial screening studies the degree of aggregation of possible future out-
comes, which results in number of branches from the individual nodes, is quite
high. It can be verbally described as distinction of “high” and “low” or “up”
and “down” for branching into two descending nodes, “high”, “medium”, “low”
or “dry”, “medium”, “wet” for branching into three descending nodes. Another
strategy is to use an extensive branching from the root leading to relatively many,
172            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

say 10, nodes on level 1, use a modest branching from the nodes at the middle of
the tree and a relatively poor branching, e.g., into two descendants for the nodes
at the last levels of the tree. There are some hints concerning the minimal number
of descendants which come from problem specific requirements, such as necessity
to build a model without arbitrage opportunities or to fit some moments of the
probability distribution; see 5.4.7 and 5.4.8.

5.4.2    Clustering
   Generating scenarios by procedures which do not account for the tree structure of
input data requires additional steps to build a scenario tree of a prescribed structure.
This has been done often by ad hoc crude methods, by cutting and pasting the data
paths in a more or less intuitive way. Another possibility is to apply cluster analysis.
It is easy to cluster according to the first component (or subvector)          of and
to continue by clustering according to the second components (subvectors)             of
the objects included into the created clusters, etc. To treat properly the interstage
dependences, consider instead a multi-level clustering scheme which exploits the
whole sequences of observed/simulated data
     For each pair of scenarios        evaluate a suitable dissimilarity measure, e.g.,




where         are suitably chosen nonincreasing positive weights. This allows us to
give emphasis on differences at the beginning of the sequence.
     Measures of dissimilarity among the compared objects are used in definitions
of the standard measures of dissimilarity of clusters and used subsequently in the
cluster analysis approaches; see e.g. [74]. The result is       clusters,
represented by                        these can be the mean values or modal values
of the first components       of the scenarios     included into the relevant cluster.
Probabilities of                      equal the sum of probabilities of the individual
    belonging to the respective cluster.
     The clustering procedure continues for each cluster     separately, starting with
the second component of the observations included into           or equivalently, with
the first component      replaced by       and so on.
   Assume now that a scenario tree of a prescribed structure has been created. We
may think of the scenarios as of representatives of certain regions which cover
A natural question is: Could the approximation of the initial probability distribu-
tion by the discrete probability distribution corresponding to this scenario tree be
improved, i.e., is there a better representation given the prescribed scenario tree
structure? Such iterative procedure related with the ideas of cluster analysis is
suggested in [124].

5.4.3   Sampling Methods
  Development of special sampling methods for creating scenario trees instead of
sampling individual scenarios first is another possibility. Markov structure of data,
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                       173

cf. the vector autoregressive model of the first order (1), can be exploited for condi-
tional sampling of scenarios in a way which takes into account the already created
structure of the tree. In this case,     depends only on the preceding component
       and on an additional random vector        which is independent of the history




Contrary to (1), the transition matrix P may depend on Interstage independence
can be regarded as a special form of the Markov structure (9) with P the zero
matrix.
   The Markov property (9) allows for a direct sampling from the probability dis-
tribution of at each node which corresponds to an already obtained realization
of        Another possibility is to discretize the probability distribution of at a
given number of points and add the obtained realizations to the already known past
values of       . The arc probabilities are fixed according to the used discretization
method.

5.4.4    Example. In the BONDS model 4.2 in Chapter II.4, data on one-year
yields      on good grade municipal bonds of maturities                    and
years were available for a period of the past seventeen years. The yield curves of
the specified parametric form



where is the time to maturity, were considered. According to the analysis of the
results, the authors decided to determine the three parameters of the yield curve
(10) using only the one-year, 20-year and 30-year yields and to approximate the
remaining maturities by points on the fitted curve.
   Monthly time series were used to determine the probability distribution of the
one-year changes in the one-year rates and the changes in the 20- and 30-year
rates were forecast conditionally on the one-year rate using two separate regression
models. The two regression equations were then used as deterministic functions to
obtain the one-year changes in the long rates from the estimated one-year changes
of the one-year rates.
   Scenarios correspond to a discrete approximation of the obtained (normal) dis-
tribution of the one-year changes of the one-year rates concentrated at three points
– the expected value and the expected value ± standard deviation. The parame-
ters of the future yield curves are fitted for each branch of the obtained scenario
tree using the three maturities. The approximated future yield curve was used to
get the input coefficients of the designed model of the type (11) – (12) from Section
II.2.2.
    Comparing this procedure with the general hints, the three stages correspond to
the planning horizon of three years, the chosen structure of the scenario tree,
was partly given by the limitations of the computational technology twenty years
ago. Another reported structure used four stages covering two years by periods of
174            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

3 months, 3 months, 6 months and one year which reflects the increasing uncer-
tainty about events more distant in the future. For the same reason, a five point
approximation of the probability distribution was applied for the first two levels
and a three point approximation for the remaining two levels of the scenario tree:
hence, the total         scenarios.
    As the main random factor, the one-year changes of the one-year rates were
selected, their probability distribution fitted from historical data, discretized and
used to generate the input coefficients. For testing the performance of the model
on historical data, only the information from the past seven years was used. The
first stage decision was accepted, and the model rolled over for one year forward,
i.e., the earliest year of the used data was dropped and the most recent year of data
was added.
    In spite of many simplifications, the optimal BONDS portfolio outperformed (for
the same history of interest rates) the classical investment strategies including the
barbell portfolios based on immunization and the laddered portfolios which use a
forced diversification.

5.4.5   Sequential Importance Sampling-Based Scenario Generation
    The recent sequential importance sampling method [35] elaborates further tech-
niques based on the Markov structure of data. It takes into account a given suitably
labeled tree structure already in the course of simulation. Moreover, the sequential
procedure can be adopted for an iterative refinement of the discrete representation
of the underlying continuous data process.
    The framework is based on the definition of a scenario tree nodal partition matrix
                 that uniquely identifies the structure of the associated scenario tree.
The matrix, with the number of rows equal to the number of scenarios and the
number of columns equal to the number of stages, provides the necessary labeling
scheme for the specification of the index sets       t = 2,... T, introduced in Section
II.2.2. In the iterative procedure, the matrix is an input to the conditional scenario
generator, and an output from the sampling algorithm. A balanced                    tree
structure would be described in the matrix as




where, row-wise, every scenario is explicitly labeled. The matrix can clearly accom-
modate any tree configuration in a straightforward way.
   The sequential sampling algorithm is designed as an iterative procedure. It
requires initially the specification of the number of stages, T, the maximum number
of possible iterations, a stopping criterion and the initial scenario tree structure
described by the associated nodal partition matrix M. At every iteration, some
version of the stochastic program, such as (11) – (12) in Section II.2.2, is specified
and solved, the nodal values of the importance sampling criterion are evaluated
                 II. DISCRETE TIME STOCHASTIC DECISION MODELS                      175

along the tree and a new tree structure is defined through an update of the nodal
partition matrix.
   The scenario generation procedure is general, and independent of both the math-
ematical characterization of the random data process and the adopted sampling
criterion. The most frequently used models for the data process cover the vector
autoregressive models, see 5.2.3, the random walk models - with or without drift -
with fine time discretization for short term decision problems and Gaussian noise,
see (3), and binomial or trinomial models, e.g., the Black-Derman-Toy model 5.2.4.

5.4.6 Problem Oriented Requirements
   When building the scenario tree one tries to avoid as much as possible any
distortion of the available input information. Moreover, the goal of this procedure
does not reduce to an approximation of the probability distribution P but rather to
creating an input which provides applicable solutions of the real-life problem. This
means, inter alia, that problem oriented requirements should be respected. The
motivation comes from various problem areas.
   • Scenarios based solely on past observations may ignore possible time trends or
exogenous knowledge or expectations of the user; see Example 5.3.6.2. Moreover,
scenarios coming from historical data need not be directly applicable. See [126]
for a scenario tuning procedure which helps to discover the information hidden in
indirect measurement results contained in past records on specific metal melting
processes.
     In financial applications, one prefers that scenario-based estimates of future
asset prices in a portfolio optimization model do not allow arbitrage opportunities;
this may put additional requirements on scenario selection.
   Explicitly formulated additional requirements concerning properties of the prob-
ability distribution may help. They can be made concrete through a suitable mas-
saging of the data to obtain the prescribed moments values, given a fixed tree
structure. This idea has appeared for instance in [27] where at the given stage of a
multistage stochastic program, the observed data were grouped and scaled to retain
the prescribed values of expectations and variances. One of the reasons was the
sought possibility of comparisons with the Markowitz mean-variance model.
   We shall follow [80] who suggest to build the scenario tree in such a way that
some of statistical properties of the data process are retained, for instance, there
are specified expectations, correlation matrices and skewness of the marginal prob-
ability distributions of

5.4.7   Why Matching Moments?
   The question of a possible representation of probability distributions by (infinite)
sequences of moments and approximating them using only a few moments goes
back to Chebyshev and is connected with the moment problem. Moreover, it is
possible to prove that given admissible values of moments, there exists a discrete
probability distribution with these moments and its support has at most m + 2
points. We refer to Chapter 5 of [130] for a brief introduction and selected results
in this direction. For our purposes it means that given values of certain moments
or expectations of continuous functions, say,
176           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

there exists a modest number of scenarios                and their probabilities
                         so that the moment values are retained, i.e.,



To get the scenarios and their probabilities means to find a solution     and
          of the system (11) extended for nonnegativity conditions on probabilities
and for the additional constraint               This is a highly nonlinear numerical
problem.
   The system of equations (11) can be further extended for other constraints on
selection of scenarios to represent certain strata, to cover extremal cases, etc.

5.4.8   Fitting Moment Values
   For simplicity assume that                   is a two-dimensional random vector
with the first three moments                              of the marginal probability
distributions and with the covariance of their joint probability distribution. To
cover an important extremal case, we require in addition that for at least one
scenario,                   holds true. Let the discrete two-dimensional probability
distribution which matches the true one be carried by S atoms
          with probabilities           ,             Hence, we search values of pairs
                      and scalars                    such that




For S large enough and for consistent moments’ values, this nonlinear system has
a solution. For a small number of scenarios or for inconsistent moment values the
existence of solution is not guaranteed. Still an almost feasible solution can be
found by the goal programming technique, see II.3.1.10. This means that scenarios
    and probabilities    can be obtained for instance by solving a weighted least
squares minimization problem
   minimize
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                        177

  subject to




From the optimization point of view, problem (12) is non-convex and may have
many local minima. Nevertheless, the advantage of this formulation is that the
optimal value is zero if the data is consistent and S is large enough, but that the
optimal solution is also a good representation of data in the case of inconsistency;
recall the goal programming approach introduced in II.3.1.10. The parameters
and can be used to reflect importance and quality of data.
   Inconsistency can appear if the information about moments comes from different
sources, if implicit specifications are inconsistent with explicit ones, etc. Consider
for instance a problem which covers two periods. Let us specify the variance of
    and the variance of the sum               But specifying these two variances, we
have said something about the correlation over time. If we now explicitly specify
correlations over time, we are likely to end up with two inconsistent specifications
of the same entity.
   There is a numerical evidence in favor of performance of stochastic programs
based on scenario trees with moment values fitted at each node over those based
only on a few randomly sampled realizations. Moreover, taking into account the
wish to approximate well the expectation offunction               which appears in the
objective function of the stochastic program (4), it is possible to search for extremal
scenarios, the atoms of the worst or best discrete probability distributions which
fulfill the moment conditions (11). These probability distributions appear in the
lower or upper bounds for the expected value of                at a point x or in the
bounds for the optimal value (6). They are valid for all probability distributions
with the given moment values, hence also for the true probability distribution.
Their construction requires that certain convexity properties of             hold true.

5.4.9 Example – The Edmundson-Madansky Bound. Let be a bounded
convex polyhedron in                                            and assume that for
all                is a convex function of on       Let the probability distribution
P on be described only by the condition               with        (consistence con-
dition); denote the family of such probability distributions by    For an arbitrary
fixed        consider a linear function                     such that



Evidently,                                    forall probability distributions
Moreover, thanks to the assumed convexity property, the above infinite dimensional
system of inequalities can be reduced to the finite dimensional system of constraints
on coefficients a, b :
178            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

Hence, the sharpest upper bound for               the Edmundson-Madansky bound
(cf. [110]), can be obtained by solving the linear program




subject to (13). Notice also that the optimal solutions of the dual linear program
to (13), (14)




subject to




identify fully the probability distribution for which the expected value
attains its maximum with respect to all probability distributions         : by duality,
there is a worst case probability distribution carried by at most     extremal points
    with positive probabilities     which solve the dual problem.
   In the special case of a nondegenerated closed interval                         and
                     there is a unique feasible solution of the dual problem,




and                               is the tight upper bound for
for all probability distributions          In this case the corresponding worst case
probability distribution          does not depend on            For evaluation of the
minimax bounds (6), this is an attractive property:




where the upper bound is the optimal value of a scenario based stochastic pro-
gram and the lower bound is the optimal value of the deterministic expected value
problem.

   This bounding technique can be modified to             a Cartesian product of sim-
plices, i.e., of bounded convex polyhedra whose points have uniquely determined
barycentric coordinates        in their representation via extremal points. If
conv                 is a simplex, then there is a unique solution                  of
                                             for an arbitrary         An example is
a closed interval in      considered above.
   For all of these results, convexity of the random objective function          with
respect to plays an essential role; consider Exercise II.2.1.1 once more.
            II. DISCRETE TIME STOCHASTIC DECISION MODELS                          179

5.4.10    Conclusions
    We have presented several techniques for generating scenario trees for multistage
stochastic programs of a general structure.
    The common starting point for all approaches is the selected or prescribed num-
ber of stages and their allocation. The branching scheme may be developed sequen-
tially. Otherwise, the approaches are tailored to the available input information:
     In case of an external scenario generator, cluster analysis can help to build the
scenario tree.
     When using a well calibrated stochastic model or its time discretization, the
tree structure can be built within an importance sampling procedure.
     In cases of a low information level and for specific requirements we suggest
to build the tree in such a way that the known relevant information (e.g., some
prescribed moments of the marginal and conditional probability distributions) is
recovered.
   Still, it is impossible to provide a general recipe for generating scenario trees.
All introduced methods leave a space for the method, problem, data, solver, and
computer specific considerations. Within the steps of each method, there are choices
to be made. For example, we must choose a clustering technique, an importance
sampling criterion, or weights and distances used in various goal programming
versions of (12).
   Particular requirements of real-life applications are for instance the no-arbitrage
property, the consistency with past records and reflection of an exogenous knowl-
edge of experts or a foresight. The last of these specific requirements can be treated
by the contamination method.
180           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

II.6 CASE STUDY: BOND PORTFOLIO
     MANAGEMENT PROBLEM

scenario-based multiperiod two-stage stochastic program, stability properties, sce-
nario generation, data, numerical results, out-of-sample scenarios, errors due to
estimation


6.1       The Problem and the Input Data
    The problem considered here is preserving the value of a bond portfolio of a
risk averse or risk neutral institutional investor over time. This is a problem of
allocation and management of resources, not of trading. It may include additional
features, e.g., presence of fixed or uncertain external inflows or outflows in the fu-
ture or a required balance between assets and liabilities. There are various options
concerning the choice of an appropriate model, starting with deterministic dura-
tion based immunization models or dedicated bond portfolio management models
formulated in Chapter I.6, through their simple stochastic analogs, e.g. Example
II.1.2, or tracking models introduced in Chapter II.3, up to multistage stochastic
programming models discussed in Chapter II.4.
   Why not to rely on the duration based immunization models? A good answer is
the following quotation, cf. [90]:

      “Many years ago, bonds were boring. Returns were small and steady.
      Fixed income risk monitoring consisted in watching duration and avoid-
      ing low qualities. But as interest-rate volatility has increased and the
      variety of fixed income instruments has grown, both opportunities and
      dangers have flourished...”

   Yield curves are not flat, do not move in a parallel way, the interest rates are
not constant and an investment in long maturity bonds requires an active trading
strategy. These are the reasons that has led us to an exploitation of multiperiod
stochastic programs with the main random element to be included - the evolution
of the short interest rate over time.
   Given a sequence of equilibrium future short term interest rates valid for the
time interval                          the fair price of the    bond at time t just
after the coupon was paid equals the total cash flow                     generated
by this bond in subsequent time instances discounted to t :




where T is greater or equal to the time to maturity.
  However, the considered time points need not coincide with the dates of coupon
payments. Also the sequence of the future short term rates   that determines the
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                        181

prices (1) is not known precisely, but prescribed ad hoc or modeled in a probabilistic
way. The cash flows        need not be known with certainty; this is for instance the
case of indexed bonds, bonds with options or default. Hence, the formula (1) should
be extended for the accrued interest       and revised to take into account the effect
of options and other risks related with the          bond. The resulting selling and
purchasing prices do reflect also the transaction costs and the bid/ask spread.
    Assume for simplicity that the only random factor which influences the fair prices
is the evolution of short term interest rates. This is then the data process assumed
to be governed by a discrete probability distribution P of T-dimensional vector
of the short rates                       where     (the rate valid in the first period)
is supposed to be known. The possible trajectories of (scenarios) are indexed as
                   with probabilities
   The bond portfolio management problem concerns the Italian bond market
which, prior to the European Monetary Union, was the fourth largest fixed-income
market in the world. The government fixed-income securities represented more than
85% of this market and they included zero-coupon bonds of maturities up to 2 years,
coupon bonds without option (the so called BTPs), with different maturities (3, 5,
10 and 30 years) issued two times per month through a marginal auction without
minimal price, floater bonds, there used to be puttable bonds (CTOs) etc. There
are futures and options on some of BTPs and also bonds with maturities between 3
and 30 years issued by corporations. See Table 1 for BTPs traded on September 1,
1994, their maturities and yields. The yields are obtained from the quoted prices
and the accrued interests. The size and liquidity of the market provides a sound
basis for application of various models of interest rates and for their calibration; its
liquidity can be taken for granted when designing models which admit rebalancing
strategies.
182         STOCHASTIC MODELING IN ECONOMICS AND FINANCE

6.2      The Model and the Structure of the Program
   The model designed below is a two-stage multiperiod stochastic program, its
formulation allows for the possibility of intertemporal rebalancing the portfolio.
Let
                be indices of the bonds and      the dates of their maturities,

                  the discretization of the planning horizon;
          the initial holdings of bond (in lots);
      the initial holding in riskless asset (in cash);
       cash flow generated under scenario from the unit quantity of bond     at time

        and      are the selling and purchasing prices of bond at time for scenario
   obtained from the corresponding fair prices (1) adding the accrued interest
and subtracting or adding scenario independent transaction costs and spread; the
initial prices      and      are known constants, i.e., scenario independent;
        is an external cash flow at time             corresponds to an outflow due to
 liabilities,         stays for external inflows;
            are quantities of bond purchased / sold at the beginning of the planning
period, i.e., at
         is the quantity of bond held in portfolio after the initial decisions
have been made.
    All first-stage decision variables            are nonnegative and subject to con-
servation of holdings,



and




where the nonnegative variable         denotes the surplus. Notice that in the first
stage, no borrowing is permitted. This limitation together with the assumed pos-
itive market value of the initial portfolio,                   implies that the set
of the feasible first-stage solutions is nonempty and bounded. The same property
holds true also in case that a restricted borrowing possibility in the first stage is
permitted.
    The second-stage decisions on rebalancing the portfolio, borrowing or reinvest-
ment of the surplus depend on individual scenarios. They have to fulfill constraints
on conservation of holdings in each bond at each time period and for each of sce-
narios



where             denote the quantities of bond purchased, sold, held in the port-
folio at time                 under scenario and constraints on rebalancing the
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                         183

portfolio at each time period




with                                   The variables         describe the (unlim-
ited) lending/borrowing possibilities for period under scenario and the spreads
       are model parameters to be fixed. Non-zero values of account for the dif-
ference between the returns for bonds and for cash. Assume that          i.e., there
is a positive cost of borrowing.
   The optimization problem is maximizing the expected utility of the final wealth
at the horizon




subject to constraints (2)–(5) and nonnegativity constraints on all variables, with




The multiplier          is fixed according to the problem area. For instance, may
be scenario dependent and values             take into account the debt service in the
future. In case of preservation of portfolio value (with no liabilities considered) or
for an investment project terminating at time          an arbitrarily large value of
plays a role of a penalty for borrowing at the end of the accounting or planning
period.
   Because of the possibility of reinvestment and of unlimited borrowing, the prob-
lem has always a feasible solution. It is a multiperiod two-stage stochastic program-
ming model with random relatively complete recourse and with nonlinearities in
the objective function. The existence of optimal solutions is guaranteed for a large
class of utility functions that are increasing and concave which will be assumed
henceforth. Moreover, for strict inequalities                                      and
                 the optimal solutions satisfy



It means that at optimality there is no unnecessary trading and borrowing, which
is a natural property.
   We obtain a large scale deterministic program with a concave objective func-
tion and numerous linear constraints. The size and the numerical values of the
coefficients of the program result from the application and the available data: the
choice of bonds, their characteristics (initial prices and future cash flows) and initial
holdings, from the scheduled stream of liabilities, transaction costs and spread and
from the way how scenarios of future interest rates are generated and sampled. The
184             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

main outcome is the optimal value of the objective function (the maximal expected
utility of the final wealth) and the optimal values of the first-stage variables
                for all   In a dynamic setting, this decision is applied and, at the
end of the first period, the model is solved again for the changed input information
on holdings and on scenarios of interest rates; this is the rolling forward technique.
   Assume that the portfolio consists of default free, liquid bonds with maturities
              all cash flows are after tax, the transaction costs and bid/ask spreads
are constant.
   The following reformulation of the problem is useful for stability and postopti-
mality analysis. Assume that an initial trading strategy determined by scenario
independent first-stage decision variables                        for all has been ac-
cepted, then the subsequent scenario dependent decisions have to be made in an
optimal way regarding the goal of the model. It means that given the values of
the first-stage variables     and         with components                  the required
maximal contribution of the portfolio management under the               scenario to the
value of the objective function is obtained as the value of the utility function com-
puted for the maximal value of the wealth            attainable for the         scenario
under the constraints of the model, i.e., the utility of the optimal value        of the
linear program


   subject to




Denote the corresponding maximal value by                              and rewrite the
program (2) – (7) as




subject to nonnegativity constraints and subject to (2)–(3). Scenarios enter now
only the objective function (12).
   The remaining part of this section reviews results on the stability of the problem
(2)–(7), or (2), (3), (12), which are independent of the way how the scenarios of
interest rates were generated and selected.
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                          185

6.2.1    Out-of-Sample Scenarios
   Assume that the stochastic program (2)–(7) has been solved for a fixed set of
scenarios                     and that the influence of including other out-of-sample
scenarios should be considered. Such problem can be related to the “what-if”
analysis, to various stability and sensitivity studies, to incorporating investors’
views, etc. One could rewrite the program (2)–(7) for the extended set of scenarios,
with additional variables and additional constraints of the type (4), (5), (7) and
solve it. Another possibility is to use the form (2), (3), (12) whose set of feasible
solutions is not influenced by inclusion of additional scenarios. The additional
scenarios appear only in the objective function which is an expected value of the
utility of the final wealth under a discrete probability distribution carried by a finite
number of scenarios. Being an expected value, the objective function (12) is linear
in the probability distribution.
   Denote by P the initial probability distribution carried by S interest rates sce-
narios indexed as                  with probabilities.                         Let
be the optimal value of (7) and                                be an optimal first-stage
solution. For simplicity, assume that the optimal first-stage solution is unique.
   Inclusion of other out-of-sample scenarios means to consider another discrete
probability distribution which is carried by the extended set of scenarios. Such
distributions can be modeled as a convex mixture of two discrete probability dis-
tributions: P that is carried by the initial scenarios indexed by                   with
probabilities                       and Q carried by the out-of-sample scenarios in-
dexed by                   with probabilities                        The weights of the
two probability distributions are given by the contamination parameter and the
contaminated distribution



is carried by the pooled sample of          scenarios that occur with probabilities
                                        For instance, if both     and   are carried
by equiprobable scenarios and this is required also for the pooled sample, we get
            Notice that for fixed probability distributions    and    the objective
function (12) which corresponds to the contaminated distribution         is a linear
function of
   The bounds for the optimal value           of the problem based on the pooled
sample of        scenarios follow according to (8) in II.5.3.6:




   The additional numerical effort consists in solving the stochastic program




subject to (2)–(3) and nonnegativity constraints for the distribution Q carried by
S' out-of-sample scenarios to obtain      and in evaluation and averaging the S'
186             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

function values                                         for the new scenarios at the
already obtained optimal first-stage solution; these are in fact the main numerical
indicators which appear in various simulation studies of the portfolio performance
under out-of-sample scenarios.
   Similarly, one can approximate the optimal value         using an optimal solution
                           and the optimal value          of the stochastic program
with the objective function (14) based on the alternative probability distribution
Q:




so that




see Figure 7.




6.2.2     Stability Results
   We shall discuss now the stability properties of the stochastic program (2)–(7)
with respect to changes in the numerical values of its coefficients. These changes are
consequences of changes in numerical values of the components          of the selected
S scenarios of interest rates.
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                          187

   It is easy to prove that for an arbitrary fixed scenario         the optimal value of
(8) – (11),                      is concave, piecewise linear in the first-stage decision
variables. (They appear only on the right hand sides of the linear program (8)–(11).)
Moreover, it is possible to prove, that for an arbitrary fixed scenario        and for an
arbitrary feasible first-stage decision              the scenario subproblems (8)–(11)
are stable linear programs in the sense of [132] provided that                        and
                This implies, inter alia, that the sets of optimal solutions of the pairs
of the dual scenario subproblems are nonempty and bounded and that the optimal
value functions                         are jointly continuous in
    Continuity properties with respect to scenarios, their probabilities and with re-
spect to the first-stage decision variables apply also to the objective function (2) and
the expectations                                   and
are concave with respect to the first-stage decision variables for an arbitrary nonde-
creasing concave utility function U. This means (recall that the set of the feasible
first-stage decisions is nonempty and bounded) that also the optimal value function
of the full problem (12), (2), (3) is continuous with respect to the input parameters
                      and a certain continuity property (upper semicontinuity in the
sense of Berge) holds true also for the sets of the first-stage optimal solutions; see
e.g. [5].
   These results imply that small errors in evaluation of scenarios of interest rates,
of their probabilities and consequently of prices              cause only small changes
to the best available scenario-based market values                            and also to
the optimal value of the overall performance function (12). However, (contrary to
the postoptimality with respect to additional scenarios) there does not yet exist
any general numerically tractable method to quantify these errors. This suggests
to turn the attention to simulation studies. To provide well interpretable results,
these simulation studies have to be tailored to the way the scenarios have been
generated and selected.

6.3      Generation of Scenarios
   Our primal goal is to get a sensible investment strategy for the considered bond
portfolio management problem. We expect that this investment strategy depends
on the way the underlying data process has been approximated. In our analysis of
sensitivity of the optimal value of (6) and of the optimal first-stage solution with
respect to the selected scenarios of interest rates we can rely on the theoretical
stability results presented in 6.2.2.
   In general, scenarios can be obtained by discretization of a true continuous prob-
ability distribution, from a model calibrated by market data, from historical obser-
vations and in principle, they can be also fixed ad hoc using experts’ forecasts, see
Chapter II.5. The chosen model of the short rates has to be calibrated so that it fits
the market data reasonably well; this can be formulated as a requirement to price
precisely some of traded financial documents, e.g., the fixed coupon government
bonds.
   In this study, we use interest rate scenarios sampled from the binomial lat-
tice constructed according to the Black-Derman-Toy model, see II.5.2.4. The data
from the Italian bond market considered here gave a solid base for its applications,
188           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

whereas interest rate scenarios for thin emerging markets can hardly be based on
historical data or on the estimation techniques discussed below.
   The obtained one-period short term rates valid for scenario and for the time
interval           are




They are determined by the base rates      lattice volatilities and by the chosen
sampling strategy which determines the exponent                  i.e., the number of
“up” moves in the time discretization points                The theoretical binomial
lattice consists of   different paths or vectors of interest rates; their components
are given by (16).
    To calibrate the Black-Derman-Toy model, i.e., to get the base rates       and the
volatility factors or lattice volatilities     means to use the yield and volatility
curve related to yields to maturity of zero coupon government bonds of all matu-
rities corresponding to the chosen time steps of the lattice. Such bonds are rare in
the market and have to be replaced by synthetic zero coupon bonds whose yields
correspond to yields of fixed coupon government bonds that do not contain any
special provision such as call or put options.
    Various numerical and statistical methods have been used to fit or estimate
the yield curve from the existing market data on yields of fixed coupon government
bonds at the given day. We have applied regression analysis to estimate and test the
analytical form of the yield curve. Instead of yields one could use the corresponding
prices of these bonds as the input. Regarding the assumption of homoskedasticity
commonly present in regression models we decided to use yields.
    Having tried different parametric nonlinear models as well as nonparametric
ones, we chose to use a simple form of the yield curve applied in [24] – see I.3.8 and
Example II.5.4.4:


We applied its linearized form to the logarithms of yields: For the market informa-
tion consisting of yields            . of various fixed coupon government bonds
(without option) characterized by their maturities      the postulated model is




where the random errors                  are independent, normal              There
is a good reason to accept the hypothesis of approximately normal errors in (17)
which is in line with the assumed log-normal process of short rates approximated
by the Black-Derman-Toy binomial lattice.
   The yield curve for September 1, 1994 estimated according to the linearized
Bradley and Crane model (12) is plotted on Figure 8. Naturally, the fit is sensitive
to data. Compare the fit with and without the long bond BTP36665 maturing in
2023. (Maturities of all remaining bonds are less than 10 years.)
              II. DISCRETE TIME STOCHASTIC DECISION MODELS                      189




  The least squares estimates          of parameters ln       are approximately
normal, with the mean values equal the true parameter values and the covariance
matrix                     where    is estimated by




and the        matrix G consists of rows
   To estimate the yields of zero coupon bonds of all required maturities which are
not directly observable,         we replace the unobservable logarithm of yield by
the corresponding value on the already estimated log-yield curve. Such estimates
are subject to an additional error.
   Assume that the logarithm of the yield           for maturity is



with normal, independent of                                          and with the
true parameter values denoted by asterisks. Then ln    is approximately normal,



where



   The corresponding approximate               confidence interval for the logarithm
of yield ln for a fixed maturity                     is
190            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

and                 is the corresponding quantile of the                     with N – 3
degrees of freedom.
   The techniques for obtaining volatilities of yields or log-yields are less obvious.
There is not enough data for fitting the volatility curve by a regression model. Most
of the authors work with an ad hoc fixed constant volatility; the volatility curve
may be estimated from historical data or based on the Risk Metrics datasets which
provide historical volatilities computed daily for several main maturities, 1 year, 2,
3, 4, 5, 7, 9, 10, 15, 20 and 30 years. It is suggested to estimate the missing yields
by linear interpolation and to use the volatilities and correlations of the reported
yields to compute the approximate values of yield volatilities for these nonincluded
maturities.
   In contrast to the volatility curves obtained independently on the yield curve
model one could get approximate standard deviations of ln             from the chosen
parametric model of the yield curve provided that the errors in the applied regres-
sion model are normally distributed. For the linearized Bradley and Crane model
(17) one can use directly the standard deviation which comes from (19) – (20).
   Based on the obtained yield and volatility curves, the calibration of the binomial
lattice in agreement with no-arbitrage valuation principles, recall I.5.2.1, follows by
a numerical procedure suitable for solving the large system of nonlinear equations
for the base rates    and lattice volatilities
   According to (16), the fitted binomial lattice provides different       scenarios of
interest rates identified by the binary fractions of T – 1 ones or zeroes, see II.5.2.4.
A smaller, manageable number of scenarios has to be selected or sampled from this
large set.
   The nonrandom sampling strategy [177] is based on a uniform approximation
of the expected utility of final wealth, computed with respect to the uniform dis-
tribution over the full set of the        scenarios, by an expected value over a sub-
set of these scenarios. Its simplified version can be described as follows: We fix
                and assign the index                   to each possible binary fraction
of length L. The sample point        from (0,1) is determined by one of these binary
fractions and by an arbitrary continuation up to binary fraction of length T – 1.
   The components of selected S scenarios            are then computed according to
(16) using the scenario independent base rates                               volatilities
                        and the scenario dependent position on the lattice given by
the exponent         in (16) which equals the number of “up” moves needed to reach
the position on the lattice within periods. The prices              and cash flows
are evaluated along each of these scenarios and the problem (2) – (7) is solved. The
main output is the optimal value - the maximal attainable expected utility of final
wealth at time       and an optimal first-stage solution, say

6.4      Selected Numerical Results
   To simulate the behavior of a value preserving portfolio of fixed income securities
on the Italian bond market we use the model described by (2) – (7) with monthly
steps and for the time horizon of one year
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                         191

    The initial term structure and the portfolio are related to September 1, 1994.
It is composed of cash (500 mil. Liras) and of typical government bonds, paying
semi-annual coupons and covering two year forward till 29 years maturities (BTPs)
as well as puttable bonds (CTOs), paying semi-annual coupons with the maturity
of 8 years and a possible exercise of the option in the 4th year or with the maturity
of 6 years and an exercise at the 3rd year; see Table 2. The quantities (Qt) of
bonds included into the initial portfolio are expressed in lots (hundreds) of million
items so that the nominal value of the portfolio is 10500 mil. Liras, its initial value
in market prices of September 1st, 1994 is                               The coupon
yields and the redemption prices are after tax.




   In this application, liabilities are not considered, liquidity may be obtained from
the interbank market at a rate greater than that one at which the surplus can be
always reinvested. The additive transaction costs are fixed at ± .01,
              and           We shall report here only results obtained for the linear
utility function.
   To estimate the term structure of interest rates we used the linearized model (17)
applied to the yields obtained by the market quotation of the BTPs on the relevant
day, see Figure 8. Volatilities of log-yields were set equal to the standard deviations
of the normal distribution in (19). The parameters         and of the binomial lattice,
see (16), were computed with a monthly discretization along 5 years. To evaluate
the prices of bonds with longer maturities, the computed interest rates have been
kept constant for each scenario after the 5th year. This means that           scenarios
were at disposal. Alternative experiments were based on the full binomial lattice
with       scenarios.
   The first sampling strategy was based on the Zenios and Shtilman approach [177]
with different choices of L = 3, 4, 5, 6 in covering fully the beginning of the lattice,
and proceeding with alternating up-down movements, which resulted accordingly
into 8, 16, 32 and 64 scenarios; the acronyms are ZS(# of scenarios). It gives
identical first-stage optimal solutions with slightly different optimal values for 8
and 32 scenarios and also for 16 and 64 scenarios.
192            STOCHASTIC MODELING IN ECONOMICS AND FINANCE




    A better coverage of the lattice along the investment time horizon
was achieved for a particular, ad hoc choice of 8 scenarios, as reported in Figure 9;
the acronym is Part(8). A different first-stage optimal solution was obtained, the
optimal value was close to the previous ones. Table 3 lists the results. They
illustrate the influence of the sampling strategy on the first-stage optimal decisions
and give a motivation for further sensitivity, postoptimality and simulation studies.




6.5       “What if” Analysis
   Assume that the models applied on the input side of the bond portfolio man-
agement problem have been fixed according to our past experience. In the context
of the Black-Derman-Toy model of interest rates it means that the yield curve (17)
has been accepted to get the term structure and a sampling strategy has been used
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                           193

to get a modest number of scenarios out of the fitted binomial lattice. Even in this
case there are numerous sources of errors that influence the input of the large scale
mathematical program (2) – (7):
     The market data of the given day are used to fit the yield curve, i.e., to estimate
the coefficients in the chosen nonlinear regression model and to estimate the yields
or prices of zero coupon government bonds of all required maturities                  In
addition, a plausible hypothesis about volatility of these yields (i.e., about standard
deviations of log-yields) is needed. The estimated prices or yields of zero coupon
government bonds of all maturities together with their volatilities are called the
initial term structure. Evidently, both statistical and numerical errors enter the
initial term structure.
     The Newton-Raphson method is used to fit the base rates and lattice volatilities
of the Black-Derman-Toy model in accordance with the term structure. It requires
the solution of a system of 2T nonlinear equations which can be done in several
ways. Additional errors which stem from the chosen numerical procedure seem
to be of minor importance than errors due to estimation of the yield curve and,
namely, due to more or less ad hoc assessment of the volatility curve.
      There is an indeterminacy as to the choice and number of scenarios to be used.
   The final task is the solution of the large mathematical program (2) – (7) whose
coefficients are burdened by errors of various kinds. The question is the sensitivity
of the optimal first-stage decision (the first-period trading strategy) and of the
optimal value of the objective function on the above mentioned errors.
   The form of the fitted interest rates, see (16), allows us to separate the influence of
the input data and of methods used for the lattice calibration from the impact of the
chosen sampling strategy. Hence, we may concentrate separately on the influence
of the out-of-sample scenarios and on an analysis of errors in the estimated term
structure and their effect on the results.

6.5.1   Influence of Out-of-Sample Scenarios
   Instead of the       scenarios which may be theoretically obtained from the al-
ready fitted full binomial lattice we select     scenarios,           following the
Zenios and Shtilman sampling strategy: Fix the number of periods for which all
possibilities (choices of zeros and ones on the first positions) are fully covered.
The remaining digits necessary to complete the full length paths may be selected
for example according to Table 4. For                 the components       alternate
regularly up and down (1 or 0) starting with the indicated value of
194           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   The numerical result reported in Figure 10 records the optimal values and op-
timal initial strategies for two alternative cases based on distributions P and Q
carried by scenarios selected according to B3 and B4, respectively.




   Figure 10 contains also values of directional derivatives and of the lower and
upper bounds computed according to (13) for distinct values of and a graphical
representations of these bounds. Expectations
              II. DISCRETE TIME STOCHASTIC DECISION MODELS                             195




are listed under headings “means of contam. solutions”.
   These results illustrate a possible application of the contamination bounds for
supporting decisions concerning the required number of scenarios (i.e., concerning
the value of L in Table 4): For           this example gives the interval [11350.93,
11351.54] for the optimal value of C4 based on scenarios – a pooled sample of sce-
narios from the beds B3 and B4. Exploitation of the more complicated bound (15)
helped to increase the original lower bound 11349.52 obtained according to (13).
(Indeed, the optimal value for C4 computed directly is 11350.97.) It means that
using the double number of scenarios does not increase essentially the precision of
the obtained approximate of the true optimal value for the full hypothetical prob-
lem which would be based on all         possible scenarios of interest rates. However,
the listed optimal first-stage investment strategies are quite different.
   A similar experiment can be run for the pooled sample of two randomly chosen
beds of scenarios. Bounds for the optimal value based on a pooled sample carried
by          scenarios, are obtained for
   We considered also the the case B2-shifted with the rates based on the case B2
perturbed by the fixed additive shift of –.000355 (which corresponds to the shift
of 5% of the current B2 rates). Such choice of the couple of scenario beds allows to
analyze the influence of the fixed additive shift of rates on the optimal value. For
the shift of -.000355, both the left lower bound and the upper bound obtained for
contamination of B2-shifted by B2 are very tight, hence, the optimal final wealth
is untouched by this perturbation of the input interest rates.

6.5.2    Errors due to Estimation
   The results summarized in the context of estimating the yield curve by paramet-
ric regression, cf. (17) – (20), provide a basis for simulation of log-yields at individual
points which are needed for fitting the binomial lattice provided that the volatility
curve is not subject to any perturbations:
   (i) At each point of the discretization of the time horizon generate the random
error by sampling from the normal distribution                             the corre-
sponding simulated log-yield at the given time instant is ln
Let e be the vector of the independent normally distributed components obtained
in the described way.
   (ii) For each vector of log-yields obtained according to (i) get the vector of sim-
ulated yields u, fit the lattice and evaluate the interest rates    prices
and cash flows
   To guarantee that the numerical method used to fit the Black-Derman-Toy lattice
gave reasonable interest rates when applied to the perturbed yield curves, the range
of perturbations of the initial yield curve was reduced: standard deviations equal
                                          were used instead of those obtained from
(19) – (20).
196            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

    By repeated soluving of the scenario based programs (2) – (7) for various sets of
coefficients obtained by the simulation procedure (i), (ii) one gets repeated “ob-
servations” of the optimal value and of the optimal initial trading strategy which
allows to construct empirical distribution of the maximal expected utility of the fi-
nal wealth, a useful information for subsequent, sample-based statistical inference,
and to classify the considered bonds.
   Notice that the specific parametric form of the yield curve, such as (17), is not
essential for the simulation experiments delineated above. They can be applied
whenever there is a sound basis for assuming random errors in the model input; the
examples are other regression models and/or other assumed distribution of errors
and also random sampling procedures for selection of scenarios.
    The simulation experiment was run for the problem based on the 8 particular
scenarios selected from the binomial lattice fitted up to the horizon of 5 years and
with K = 100. The obtained different optimal first-stage strategies together with
the respective optimal values        are listed in Table 5 (the first column lists the
result for the unperturbed yield curve), a survey on how the considered bonds are
distributed with respect to the strategies of selling, holding and buying, is displayed
in Figure 11. Hence, there seem to be only a few typical optimal strategies which
can be verbally described for instance as “cash only”, or “long bond only”, and
which are far from being similar. The reason of such differences is that the short
rates obtained for the slightly perturbed yield curves differ essentially; for interest
rates we found differences up to 80% of values obtained for the unperturbed yield
curve. These results indicate that, under the fitted yield curve, the longest bond
is a dominant investment as it appears in the most of perturbed cases. This is in
agreement with our earlier observations; in comparison with the assumed behavior
of short term interest rates, the long bond is underpriced by the market.




   For 100 simulations, the mean of the (empirical) optimal values         is 13 041
with the standard deviation of 2 479, for 1500 simulations this changes to the mean
              II. DISCRETE TIME STOCHASTIC DECISION MODELS                       197

value 12 911 with the standard deviation of 2 461. The resulting      confidence
intervals around the true optimal value are relatively large. The distribution of
these empirical optimal values is skewed and nonnormal.




   Table 5 provides also a comparison of the performance of expected values for the
Buy & Hold (B&H) strategy at the horizon         The expected values are computed
again for the same 100 simulations of the particular 8 scenarios selected according
to Figure 9 which are used in the simulated stochastic programs, and their eval-
uation takes into account expiration of the CTOs and the cash flows due in the
considered time period of September 1, 1994 – August 31, 1995. Comparing the
statistics for the expected values of the Buy & Hold strategies with that for optimal
values for the 100 simulated stochastic programs indicates that the distribution of
the optimal stochastic programming values is shifted to higher function values, is
nonsymmetrical and provides possibilities of rather large values.
   In addition, sensitivity of the obtained “candidate” solutions listed in Table 2
on perturbations of the yield curve was tested using bounds constructed along the
lines of Exercise II.5.3.3.1. The optimal solution obtained for the Part(8) sampling
strategy proved to be the most robust one.

6.6      Discussion
   We have applied a very simple model, based on one factor only. Similarly as in
the continuous time models of bond prices with one factor, cf. [81] or [164], the
bonds of the same risk class are equivalent to each other in the terms of their fair
prices; some deviations appear due to transaction costs and due to differences of
198            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

the initial market prices and the theoretical ones. This exactly was the case of the
long bond which was underpriced by the market.
   For a more realistic model, one should use two or more random factors, for in-
stance, a two-dimensional data process of the short and long rates or short rates and
inflation. Inclusion of foreign bonds will add the exchange rate process, etc. Also
the presence of liabilities or external cash flows add new sources of uncertainties;
see II.7.3.
   It is possible to consider further constraints, such as integrality of some decision
variables, limited borrowing, restrictions on certain investments or duration match-
ing, to use a nonlinear utility function, etc. Inclusion of other types of assets, e.g.,
stock or real estate, means a passage to an asset allocation or an asset and liability
management within aggregated asset classes and to models based on the value of
the investments; see discussions in II.4.4.
   An essential generalization is in direction to a multistage version of the con-
sidered bond portfolio management problem. The theoretical results of 6.2.1 and
6.2.2 can be extended to this case and the generalizations mentioned above can be
in principle built in. The problem is the generation of the scenario tree, see Section
II.5.4, which includes fixing meaningful stages as the first step.
                                                                                  199

II.7 INCOMPLETE INPUT INFORMATION

sensitivity to estimated parameters (volatility in Black-Scholes formula, expected
returns in Markowitz model), incomplete information about liabilities

   We shall present now selected approaches suitable for analysis of results of fi-
nancial decision models solved under uncertainty about the stochastic input. Even
when these approaches seem to be cast for a specific model and/or specific assump-
tions, e.g., for sensitivity of the Black-Scholes formula for pricing European call
options to volatilities in 7.1, or sensitivity to the assumed expected returns for the
mean-variance Markowitz model in 7.2, or for incorporation of incomplete knowl-
edge about distribution of future liabilities in 7.3, there is an open possibility to
exploit them under other quite disparate circumstances. Recall that the contami-
nation technique explained in II.5.3.6 and applied in II.6.5.1 can be also regarded
as one of suitable methods for postoptimality analysis with respect to incomplete
input information.

7.1     Sensitivity for the Black-Scholes Formula
    Consider a European call option on a unit quantity of a given stock for the
striking price K at the expiration date T. Assume that the stock price follows the
geometric Brownian process


with given constants    drift instantaneous annualized volatility and with the
Wiener process       No-arbitrage reasoning and the Itô formula are used to get the
European call price at time as


where   is the riskless instantaneous annualized interest rate,



                      and denotes the distribution function of the standard normal
distribution; see I.5.2.5.3 and III.3.3.
   The parameter values are hardly known precisely and various sensitivity mea-
sures have been introduced and applied to hedge against their changes, cf. [81].
We shall focus on sensitivity of to volatility        to indicate it we include as a
parameter in       The value of can be calculated by comparing the formula for a
similar traded option with its market price, which gives so called implied volatility,
recall I.5.2.5.9, or it can be estimated. The sensitivity measure Vega introduced in
I.5.2.5.7 as


where denotes the density of the standard normal distribution, is a continuous
function of
200            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   Assume now that there is at disposal an asymptotically normal estimate of
   so that                 with        for       The results of [144], Chapter 3,
briefly presented in II.5.3.4 imply that    is asymptotically normal



compare with (5) in Chapter II.5. Moreover, the true unknown value              in
can be replaced by its sample counterpart   As a result




hence, asymptotic confidence intervals for the option price           can be easily com-
puted.

7.2       Markowitz Mean-Variance Model
   From the point of view of optimization, an application of Markowitz mean-
variance model in selection of optimal portfolio of risky assets can be reduced to
solution of the following parametric quadratic program, see (7) in II.3.2.1:



on a given convex polyhedral set



and with a nonnegative scalar parameter.
    One assumes that the vector of expected returns and the positive definite
matrix V of their variances and covariances are known whereas can be chosen
according to the investor’s attitude towards risk.
    The optimal solution              and the optimal value               of (1) – (2) de-
pend on V (and on the chosen value of of course) and at the same time, one
can hardly assume full knowledge of these input values. The impact of errors in
expected returns, variances and covariances on the optimal return of the obtained
portfolio was investigated, e.g., in [16] and [31]. Results of simulation studies in-
dicate that errors in expected values are more important than those in the second
order moments and that these errors influence essentially the composition of the
resulting portfolio whereas the portfolio returns are less sensitive.
    Inspired by the cited results we shall deal with sensitivity analysis of the optimal
composition of the portfolio and of the optimal value of (l) – (2) on the input values
of the expected returns of the risky assets; we shall complement results based on
parametric programming by stochastic sensitivity analysis delineated in II.5.3.4.
The variance matrix V and the parameter will be kept fixed and they will not
be indicated in our denotation of the optimal value and of the optimal solution of
(l) – (2).
    The set of feasible solutions of the quadratic program (l) – (2) can be decom-
posed into finitely many relatively open facets (i.e., open with respect to the linear
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                        201

manifold of the smallest dimension which contains them) that are identified by in-
dices of the active constraints; interior of and vertices of are special cases of
these facets. The parametric space         of vectors          can be also decomposed
into finitely many disjoint stability sets linked with the facets by the requirement
that for all belonging to a stability set, the optimal solutions            of the qua-
dratic program (l)–(2) lie in the same facet. It is possible to prove (see [5]) that
      is continuous on      it is linear on each stability set and differentiable on its
interior. If, however, belongs to the boundary of a stability set,            looses the
differentiability property and is only directionally differentiable. The optimal value
function        is a piecewise linear–quadratic convex function of Thanks to the
assumption that V is positive definite, the optimal value function is differentiable
on the whole parameter space provided that the vectors of coefficients of the active
constraints of (2) are linearly independent; see e.g. [62], Theorem 2.4.5. These
results explain the observed cases of a stability of the optimal value and, at the
same time, of an extremal sensitivity of optimal solutions to small changes of the
vector of expected returns: Whenever the initial value of                belongs to the
boundary of a stability set, arbitrarily small changes in can cause transition to
one of the neighboring stability sets. Hence, for each type of transition different
assets are included into portfolio and the composition of the optimal portfolio is
regarded unstable. At the same time, the change of the maximal value of (1) is
small for small changes of       Notice that similar situations can be observed also
in case of changes of the parameter (i.e., when tracing the mean-variance effi-
cient frontier) but they are more easy to take in as the changes concern only a
scalar parameter. There exist some generalizations of the cited results to the case
of V positive semidefinite and bounded         however, the fact that from the point of
view of quadratic programming there might be multiple optimal solutions indicates
clearly the limitations.

7.2.1    Simple Clarifying Example. Consider the quadratic program maximize
                            on the set




   Set    can be decomposed into relatively open facets                  see Figure 12.
202           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

The corresponding stability sets                    for parameters        are drawn
on Figure 13.




   Consider                    For this parameter value, the optimal solution is the
vertex     however, a small change of parameter values causes moving the optimal
solution into the adjacent facets       or     or into the interior  of    The cor-
responding changes of the optimal value and of the first component of the optimal
solution are illustrated for fixed         and         on Figure 14.




   Differentiability of is important for obtaining the form of the approximate
probability distribution of the optimal returns of the portfolio, which are based on
estimates of the true expected returns r obtained by a known appropriate statistical
method. Such results are useful for constructing approximate confidence intervals
for the true optimal value of (l)–(2).
             II. DISCRETE TIME STOCHASTIC DECISION MODELS                          203



7.2.2 Theorem. Assume that V is positive definite and that the linear indepen-
dence condition is fulfilled at the point of the true optimal solution
Let    be an asymptotically normal estimate of the true expectation



Then the optimal values          are asymptotically normal



   This type of result was presented in II.5.3.4, formula (5), and the statistical
technique behind is nothing else but asymptotic normality of differentiable functions
of asymptotically normal vectors, so called              see e.g. [144], Chapter 3.
The variance matrix of the asymptotic distribution (4) depends on the unknown
expectation      However for large enough the gradients in the variance matrix
of the distribution (4) can be evaluated at the estimated expectations       and also
variance matrix      can be replaced by its sample counterpart          Well known
results from parametric programming (e.g. [62]) imply that



evaluated at the optimal solution          i.e.,



The final applicable result is



where    is the sample counterpart of the variance matrix
  The precision of the point estimate       of     based on the average returns
  depends on the sample size and also on the value of

7.2.3 Exercise. Assume that and V are fixed, that is the arithmetic mean
of observed independent vectors of assets returns and that the assumptions of
the Markowitz model hold true (i.e., the observed returns come from populations
characterized by fixed but unknown expected values and a fixed known variance
matrix V). Apply Theorem 7.2.2 to get the asymptotic 95% confidence interval for
the true optimal value      of (1)–(2).

   The lack of differentiability of the optimal solutions       implies that a parallel
asymptotic result for          cannot be in general expected: The asymptotic dis-
tribution of optimal solutions          is normal only if the true optimal solution is
differentiable at the true parameter vector i.e., if       belongs into the interior of
a stability set.
204             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

7.3       Incomplete Information about Liabilities
   As the next task we shall consider the bond portfolio management problem (2)
– (7) treated in Chapter II.6. We assume that the interest rate scenarios have been
already fixed and we shall turn our attention to liabilities. In II.6, the liabilities
were modeled as known amounts to be paid at the time            Their full knowledge,
however, need not be realistic for instance in management of pension funds, portfo-
lios of insurance companies, etc. We shall assume now that liabilities are random,
       with    independent of random interest rates. The objective function (the
expected utility of the final wealth) assumes the form




where                                 denotes, similarly to (12) in II.6, the maximal con-
tribution of portfolio management for already fixed first-stage decisions, for a given
scenario of interest rates and for a realization             of liabilities, and is obtained
as the optimal value of the corresponding linear program.
   We shall further assume that the probability distribution of                is not known
completely. Using the available information, we shall try to get bounds on the
optimal value of (5) subject to the first-stage constraints (2)–(3) from II.6 and to
nonnegativity of all variables.
   As the first step, it is easy to realize that                             in the objective
function (5) are concave in the right-hand sides              when taken as parameters
in evaluating the maximal final wealth under scenario               for fixed feasible first-
stage variables                 (This familiar property of the optimal value of a linear
program in dependence on right-hand sides was exploited already in Exercise II.2.1.1
for a minimization problem.) For a concave increasing utility function U, also the
individual terms                                   in expectation (5) are concave in the
right-hand sides              It means that the Jensen inequality provides an upper
bound for the objective function (5)




   The corresponding upper bound for the optimal value of (5) subject to con-
straints on the first-stage variables equals

                      max


    Hence, replacing the random liabilities by their expectations in the bond man-
agement problem leads to overestimating the maximal expected gain.
    The lower bound can be based on the Edmundson-Madansky inequality (see
II.5.4.9) if, in addition, for each the random liabilities      are known to belong
to finite intervals, say            The general bound, however, is computationally
expensive unless the objective function is separable in individual liabilities, which
is not our case. A trivial lower bound can be obtained by replacing all liabilities
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                             205

by their upper bounds        this bound will be rather loose. Another possibility is
to assume a special structure of liabilities (their independence, a Markov property,
etc.) in which case the lower bound can be simplified provided that the objective
function remains concave with respect to the random variables used to model the
liabilities. Hence, assume that



with a given matrix G of the size           and                    mutually in-
dependent random variables with known expectations          and known supports
            Accordingly, the individual objective functions




are concave in
   For I small enough, the following string of inequalities valid for each of scenarios
   and for all feasible first-stage solutions may be useful:




where the components of         equal     for       and     for        and




   The lower bound for the maximal value of the objective function (5) based on
inequalities (6) can be thus obtained by maximization of the weighted sum of the
last terms in (6) for all scenarios subject to the first-stage constraints, i.e., by solving
the corresponding stochastic program with             scenarios.
   For instance for pension funds it is natural to assume that G is a lower triangular
matrix: The liabilities    to be paid at the end of the first period are known with
certainty and their portion, say,        corresponds to unrepeated payments (e.g.,
final settlements or premiums) whereas the remaining main part of        will be paid
also in the subsequent period (continuing pensions). The liabilities       to be paid
at the end of the period 2 can be modeled as



etc. Moreover, it is possible to assume that          are mutually independent so
that (6) is a valid and tight lower bound that applies in the case that the intervals
             and the expectations     a are known.
206              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

II.8 NUMERICAL TECHNIQUES AND AVAILABLE
     SOFTWARE*

illustrative examples, stochastic knapsack problem, EVPI, solution techniques for
two-stage stochastic programs (L-shaped algorithm, progressive hedging algorithm)
and their multistage versions, approximations, model management


8.1         Motivation
   In this Chapter, we deal with solution techniques including algorithms and soft-
ware. This is necessary since only very elementary educational stochastic programs
can be solved without any computer support. In spite of this fact, we still begin
with a simple example to present various modeling and solution principles in an
instructive way.

8.1.1 Example. Consider a deterministic investment problem formulated as the
knapsack problem:


where         contains yields on the unit investments,       the costs of realization
of the investments, and is the available budget. If the constraints are relaxed to
           the optimal policy is implied by the nonincreasing sequence of fractions
     Assume now that a, c are fixed but the budget is not known at the moment
of decision making and equals           where is a nonnegative random variable.
Hence, the total yield      is maximized over a set which depends on the random
right-hand side. Several deterministic equivalents can be formulated and solved.
We shall illustrate them on a simple numerical example


with the probability distribution of   specified as follows:


Scenarios                              can be interpreted as the pessimistic one (no
additional external cash flow), the standard one and the optimistic one, respectively.
Notice that the intuitive decision rule does not depend on the budget and it means
to include the first investment at the maximal possible level, then the second one
and at the last place the third one.
   The first possibility is to postpone the decision until the budget is known, the
wait-and-see (WS) approach. It provides three different optimal decisions, one for
each of the three possible realizations of


      *by Pavel POPELA
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                         207

and three corresponding maximal values of the yield



The expected optimal yield is then
   The pessimistic approach exploits only the guaranteed budget b0 = 3, i.e., pro-
vides the defensive optimal solution        and optimal value       obtained already
for scenario     Notice that       is the maximin bound for the optimal value with
minimization over all probability distributions carried by the three considered sce-
narios; compare with II.5.3.5, inequality (6). Using the expected value of the budget
means to replace the right-hand side by                                  and to solve
the linear program



with results                         and              in our case, it is an optimistic
solution (recall results of II.7.3).
    As the next step, we relax the budget constraint allowing for a recourse activity,
if necessary. For each scenario, we consider a two-stage decision model



with penalty coefficient        interpreted as the cost of additional borrowing or
penalty for delayed payments, etc. The penalty term can be incorporated into
the already discussed models. For illustration, we set up
            In this case, we get -components of the optimal solutions as those for
the original example (which does not include any recourse activity). This outcome,
of course, depends on the proportions between the yields c and penalty costs
   The two-stage counterpart of the expected value problem



does not reflect the possible dependence of the recourse variables              on
Reflecting dependence leads to the here-and-now model formulation




subject to



In our example, this gives the optimal, scenario independent first-stage solution
                   the non-zero scenario dependent recourse variables
                              and the optimal value of the objective function
17.5. To get these results, it was necessary to solve a linear program of a larger
size, without possibility to apply the intuitive rule valid for the relaxed knapsack
problem.
208            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   At the end of the example, let us compare the obtained optimal values. First,
we compute the expectation EEV of the expected value solution as follows. We
replace by the solution        in (1). To achieve feasibility of (1) in the cheapest
way, the nonzero recourse actions need to have the following values           = 13.7,
               and                   Then, we compute the objective value of (1),
and hence, EEV = 10(1) + 15(1) + 20(.085) – .2(2)(13.7) – .3(3)(4.7) – .5(6)(0) =
26.7 – 9.71 = 16.99. Notice that the following inequalities are valid in our case:


with the numerical values 6 < 16.99 < 17.5 < 24.85 < 26.7. We see that in our
example the choice of stochastic programming approach            is advantageous
in comparison with common sense approaches often used in practise which result in
     and EEV; moreover, the lower bound EEV may be replaced by the function
value of (1) evaluated for an arbitrary feasible solution.
   A similar chain of inequalities may be constructed also for general stochastic
programs with the lower and upper bounds depending substantially on the struc-
ture of the problem. The interested reader will find a detailed general discussion
about relations of objective function values for various deterministic equivalents in
Chapter 4 of [19]. There are also introduced the following important quantities
together with their bounds (we rewrite them for maximization case with numerical
values taken from Example 8.1.1):




The EVPI denotes the Expected Value of Perfect Information and compares
here-and-now and wait-and-see approaches. It measures how much is reasonable
to pay to obtain perfect information about the future. A small value of the EVPI
informs about a low additional profit when we reach perfect information; the large
EVPI says that the information about the future is valuable. The VSS represents
the Value of the Stochastic Solution and compares here-and-now and expected
value approaches. It is an important characteristic that measures how much can be
saved when the true here-and-now approach is used instead of the expected-value
approach. A small value of the VSS means that the approximation of the stochastic
program by the program with expected values instead of random variables is a good
one.

8.1.2 Exercise. Prove that both EVPI and VSS are always nonnegative, whereas
     is an upper bound for        only under special assumptions, e.g., if the objective
function         in II.3.2.4 is concave in

8.2       Common Optimization Techniques
   We see from Example 8.1.1 that there are various ways how to reduce stochastic
programs to deterministic ones whose objective and constraints are usually in the
              II. DISCRETE TIME STOCHASTIC DECISION MODELS                       209

form of expectations having integral representations. For certain cases those inte-
grals can be evaluated by direct integration methods and standard mathematical
programming algorithms may be used to solve the problem. We choose a simple
recourse program as an example.

8.2.1 Example. Simple recourse refers to the situation when the recourse func-
tion in


is determined for each    and    as follows (recall II.3.3.2 and the ALM model 4.3
in Chapter II.4):




Provided that                           it is easy to solve the second-stage program
(2) (a special form of (19) in II.3.3):




where       is the positive part of and       is the negative part of   For simple
recourse programs having only             random, we denote
and assuming absolutely continuous probability distribution of      we can express
the recourse function as the sum of one-dimensional integrals (separability):




where        denotes the marginal distribution function of      The separable terms
in (3) offer computational advantages for both discrete and absolutely continuous
probability distributions of     Explicit form of the integrals can be obtained for
various distribution functions, e.g., for uniform or normal ones. This allows for a
direct exploitation of mathematical programming methods. Notice, that the simple
recourse models do not use any information about the joint probability distribution
of and only marginal probability distributions are utilized.
   The software code called SPORT (Stochastic Programming Optimizer with Re-
course and Tenders) was written for simple recourse linear programs with discrete
probability distribution, see Chapter 14 in [58] for details.
210           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   Also stochastic programs with individual probabilistic constraints and random
right hand sides may be transformed into deterministic programs which exploit only
the quantiles of the marginal probability distributions; cf. Chapter 8 of [130].
   The two mentioned cases concern problems of a special structure which allows
for a possible splitting of the probability distribution to one-dimensional marginal
probability distributions, with the subsequent use of one-dimensional numerical
integration routines (see (3)) and of general mathematical programming software.
Another manageable case occurs when the probability distribution of is discrete
and concentrated on not too many atoms (scenarios). In the sequel, we shall focus
on the latter case.
   For instance, Example 8.1.1 may be treated as a linear program. Mostly, sto-
chastic linear programs with discrete probability distributions discussed in Part II
are large-scale linear programs. Therefore, the well-known revised simplex and in-
terior point methods (e.g., see Chapters 5 and 8 of [7]) are useful. Also nonlinear
scenario-based stochastic programs or other models formulated in Chapter II.3 are
frequently solvable as deterministic nonlinear programs (e.g., see algorithms de-
scribed in Part 3 of [8]). For an overview of classical mathematical programming
algorithms for the solution of stochastic programs with expectations see Chapter 4
in [58].
   At first, there are libraries of numerical subroutines, which have extensive op-
timization capabilities (e.g., IMSL and NAG Fortran and C libraries) and their
recent evaluations are contained in lp.faq and nlp.faq files available on Internet.
   As the next step in the optimization software development, the optimization al-
gorithms were implemented as ‘black boxes‘ called solvers, using partially or fully
precompiled code. Their main advantages for business applications are commercial
availability, professional vendor support, and only basic input/output format under-
standing required from beginning users. At this moment, we present briefly several
frequently used linear and nonlinear programming solvers; see [117] for details:
   OSL (Optimization Subroutine Library), distributed by IBM corporation, con-
tains primal and dual versions of simplex method, three versions of interior-point
methods for large programs, and network simplex method for specially structured
problems discussed, e.g., in [121]. It uses successive linear approximations for qua-
dratic programmming problems, e.g., applicable for the Markowitz model II.3.2.1.
CPLEX and XA solvers implement fast and reliable branch-and-bound methods
for mixed-integer programs useful for modified problems with integer variables, cf.
applications mentioned in Chapter II.4. MINOS and CONOPT are nonlinear pro-
gramming solvers, e.g., useful for expected utility maximization problems. MINOS
is useful for cases with majority of linear or near-linear constraints and CONOPT
gives better results for programs with ‘highly nonlinear’ constraints. To unify in-
put/output format for optimization solvers, the MPS standard format for linear
programs has been developed in the early seventies, see [117].


8.2.2 Example. The MPS input file is specified for the following instance of
investment program of Example II.1.1 based on expected values:

                             maximize
                  II. DISCRETE TIME STOCHASTIC DECISION MODELS                       211

subject to




  Using the notation of Example II.1.1, we assign rate     1.4, additional income
         goal         , wealth            investment indices                 stages
           and expected returns          = 0.067,       = 0.039,          = 0.05,
     = 0.073,       = 0.048,
  NAME             Investment
  ROWS
   N 0BJ
   E R0000001
   E R0000002
   E R0000003
  COLUMNS
       C0000001    R0000001      1.00000000   R0000002 1.06700000
       C0000002    R0000001      1.00000000   R0000002 1.03900000
       C0000003    R0000001      1.00000000   R0000002 1.05000000
       C0000004    R0000002     -1.00000000   R0000003 1.07300000
       C0000005    R0000002     -1.00000000   R0000003 1.04800000
       C0000006    R0000002     -1.00000000   R0000003 1.05500000
       C0000007    R0000003     -1.00000000   OBJ      -1.20000000
       C0000008    R0000003      1.00000000   OBJ       1.40000000
  RHS
       RHS         R0000001      1.80000000
       RHS         R0000003      2.00000000
  ENDATA

   The presented INVEST.MPS input file has several data sections separated by
keywords, and the end of the file is identified by the keyword ENDATA. The NAME
section gives the name to the contained data set. The ROWS section contains the
identifier of a matrix row together with constraint classifying letters E, L, G, N in each
row. The letter N is used for the row of an objective function that is minimized.
The COLUMNS section presents a matrix in column order. Each row of the file
contains a column identifier followed by row identifiers (in the matrix) and nonzero
coefficients. The RHS section contains the row identifiers and nonzero right-hand-
side coefficients. The RANGES and BOUNDS sections are optional and define additional
limits for constraints and another then nonnegative bounds for variables.
   As the example shows, the MPS standard does not represent a user-friendly
interface. For instance, it has unpleasant archaic features such as the limited size
of identifiers (8 characters) and the fixed numerical field format. Therefore, we
may simplify writing of the MPS file using popular spreadsheet programs (e.g., MS
EXCEL utilized for business calculations) as the MPS generators. They can also be
used as optimization tools because they include some of the previously mentioned
solvers as optimization engines. However, the size of solved programs is limited to
212           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

several hundreds of variables and the tabular form of the input data is convenient
only for small educational programs with dense matrices, which are not typical in
practise.
   General purpose mathematical tools seem to be more promising than spread-
sheets as they also involve optimization capabilities. MATLAB as a matrix-oriented
programming language is a suitable tool, particularly, for algorithm development
and testing. Packages including symbolic rules for differentiation such as MATHE-
MATICA and MAPLE also have efficient optimization procedures and specifically
may help with preprocessing and postprocessing tasks. However, these systems
have not been originally developed for the solution of large-scale programs, and
hence, they cannot successfully compete with special purpose systems discussed
below.
   The MPS format is a basic interface for test computations but the interfaces
between solvers and data sources become important for the applications (see, e.g.,
preface of [66]). As a further step in the optimization system development, algebraic
modeling languages describe a program by its set of constraints, obvious in mathe-
matics, and they generate the MPS or similar files for solvers. They are based on the
declarative kernel and are extended with some properties of procedural languages
such as statements that control operations flow. They have Windows-like envi-
ronments and have libraries of sample programs for learning by example. GAMS
(General Algebraic Modeling System) [66] is widely used with different computer
platforms. It is designed for linear, nonlinear, and mixed integer programming,
and supports many different solvers (e.g., CPLEX, OSL, MINOS, and CONOPT).
Other widely used modeling languages are AMPL [65] and AIMMS [21].

8.2.3     Example. We continue with the program from Example 8.1.1 and we
introduce its GAMS source code that ends with solution and display statements.
It is contained in file INVEST.GMS:
  $TITLE Investment example
  $OFFSYMXREF OFFSYMLIST OFFUELLIST OFFUELXREF
  OPTION    LIMROW = 0, LIMCOL = 0, SYSOUT = OFF, SOLPRINT = OFF

  SET       I considered investments, T time, S scenarios;
  PARAMETER RHO(I,T,S) random returns, P(S) scenario probabilities;
  SCALAR    W wealth, G goal, Q additional income, R rate;
  $INCLUDE "DATA.GMS"

  VARIABLE Z objective function value, X(I,T,S) investment decision;
  VARIABLE YPLUS(S) surplus variable, YMINUS(S) deficit variable;
    X.LO(I,T,S) = 0; YPLUS.LO(S) = 0; YMINUS.LO(S) = 0;

  EQUATION NONANTICIP(I,S), INITIAL(S), INTERMED(T,S), FINAL(T,S), OBJFUNC;
  NONANTICIP(I,S)$(ORD(S) NE 1)..
    X(I,"1","1")                  =E= X(I,"1",S);
  INITIAL(S)..
    SUM(I, X(I,"1",S))            =E= W;
  INTERMED(T,S)$(ORD(T) LT CARD(T))..
    SUM(I,(1+RHO(I,T,S))*X(I,T,S)=)E= SUM(I,X(I,T+1,S));
  FINAL(T,S)$(ORD(T) EQ CARD(T))..
    SUM(I,(1+RHO(I,T,S))*X(I,T,S)=)E= G + YPLUS(S)-YMINUS(S);
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                        213

  OBJFUNC..
    Z                           =E= SUM(S, P(S)*(Q*YPLUS(S) - R*YMINUS(S)));

  MODEL     INVESTMENT / NONANTICIP, INITIAL, INTERMED, FINAL, OBJFUNC/;
  SOLVE     INVESTMENT MAXIMIZING Z USING LP;
  DISPLAY   Z.L, X.L;

   In some sense, modeling languages follow the design steps of a modeler. At first,
compiler directives and options are set up. Then the SET keyword allows the decla-
ration of indices of a program giving a name to each index. The PARAMETER keyword
declares real parameters, giving them a name and joining them with indices. Their
values are assigned in the included file DATA.GMS. The VARIABLE keyword starts a
block that declares variables of a program in a manner similar to parameter declara-
tion. Variable identifiers allocate a data record in memory, and these identifiers will
be used with different suffices for computational or displaying purposes. Suffixes
.LO, .UP, .L, and .M allow separate storing of lower and upper bounds, solutions,
and marginal values respectively. The EQUATION block declares constraints, which
are defined separately. Conditioned generation of individual constraints is specified
with $ symbol. The objective is identified by variable Z on the left hand side of
one constraint. MODEL is a named list of constraints. Its suffixes often serve to
obtain compilation and computation results in the form of model and solver status.
The SOLVE statement joins the model name INVESTMENT, the target of optimization
for the objective (MINIMIZING Z), the solver type (USING LP), and then starts a
computational process. DISPLAY is the original GAMS output statement.
   In our case, data definitions are contained in the included file DATA.GMS (see
the compiler directive $INCLUDE "DATA.GMS" in the source code of INVEST.GMS):
  SET       I / 1 * 3 /, T / 1 * 2 /, S / 1 * 3 /;
  SCALAR    W / 1.8 /, G / 2.0 /, Q / 1.1 /, R / 1.4 /;
  TABLE     RHO(I,T,S)
            1      2     3
    1.1     0.10 0.05 0.07
    2.1    0.12 0.03 0.03
    3.1     0.08 0.04 0.05
    1.2     0.04 0.07 0.08
    2.2     0.06 0.06 0.04
    3.2     0.01 0.08 0.05;
  PARAMETER P(S) / 1 0.1, 2 0.3, 3 0.6 /;

   The members of index domains are specified within the SET statements. The
values of parameters may be defined as a part of the PARAMETER declaration using
rules for sparse data structures or with SCALAR or TABLE declarations either directly
or through assignment = (see forthcoming Example 8.6.1). Used notation and
parameter values are inherited from Example 8.2.2. In addition, instead of expected
values        we consider random returns         based on scenarios
with probabilities                   and
   The GAMS user may find some difficulties during its use in financial and indus-
trial applications. They stem from the GAMS original field of use, which was the
support of macroeconomic studies. These studies have often needed software codes
‘for one use’, in contrast to the financial and industrial systems that require codes
‘for permanent use’. For instance, the GAMS does not support database manage-
214           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

ment directly and it must be added separately when it is required. Our discussion
continues in Section 8.6.

8.3      Solution Techniques for Two-Stage
         Stochastic Programs
   The main advantage of the aforementioned common optimization algorithms and
software tools is that they are easy to use and well-tested for mid size problems.
However, the main disadvantage is that they are inefficient for large-scale stochastic
programs as they do not utilize their special structure.
   As the next step, we discuss linear programming algorithms modified for two-
stage scenario-based stochastic linear programs (see II.3.3.2):




where identifies a finite set of scenarios                                with proba-
bilities       and     are decision variables, A, b, and c contain only deterministic
coefficients.
    First, we denote as H the LHS matrix composed of all zero and nonzero tech-
nological submatrices A,         and                For fixed recourse programs (i.e.,
                     a special basis factorization was suggested. It utilizes separate
submatrix factorizations corresponding to diagonal blocks with W components and
an additional working basis, see Section 12.3 in [130] and references therein.
    Interior-point algorithms have become popular, because they proved to be ef-
ficient, especially, with parallel implementations. The most time consuming step
in the interior-point methods is usually related to computations with a matrix
                  where D denotes a suitable diagonal matrix. The obtained M is
much denser (see [19]) and [7] for explanatory references) than the original con-
straint matrix H, and hence, a direct use of the interior point method need not
be efficient enough. Therefore, a factorization scheme that significantly reduces
the number of necessary arithmetic operations has been developed, see [19]. An
alternative is a split variable representation, which uses an explicit treatment of
nonanticipativity constraints (recall II .2.2). This means that the nonanticipativity
constraint            is included only if                                The new M
is sparser and larger than the original one, hence we have to decide whether we
prefer a small size or a reduced density. Another idea [19] is to form the dual
program of (5), and this dual is then solved with the interior-point method. In
this case, the M matrix is again large, however, it has a special so called sparse
block-row-and-column-bordered structure. We may summarize that due to factor-
ization enhancements, interior-point methods are reported as more efficient than
direct simplex algorithms for large-scale stochastic programs.
    Decomposition algorithms advantageously use a dual block-angular program
structure of (17)–(18) in Section II.3.3 to save memory requirements and speed
up computations. It was already noticed in the fifties that the program dual to
(5) has a structure suitable for the Dantzig-Wolfe decomposition. However, the
dual program solution often requires more computations than the primal, because
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                        215

a larger program has to be solved. In addition, extra calculations are needed to
recover the primal program solution. For these reasons, the Benders (dual) decom-
position is applied to the primal program instead of employing the Dantzig-Wolfe
(primal) decomposition for the dual program, although both decompositions are
computationally similar. To detail these ideas, we reformulate the two-stage sto-
chastic linear program as follows:



where         is the expectation of the recourse function        and denotes the
first-stage feasible set. The L-shaped algorithm (L refers to the shape of matrix
nonzero blocks) discussed further is based on the application of the Benders de-
composition to two-stage stochastic programs. Additional linear constraints called
feasibility cuts approximate the domain K of          and another linear constraints
called optimality cuts approximate the shape of the function          The stochastic
linear program is decomposed into the first-stage (master) program and a series
of second-stage programs (subprograms). Each subprogram corresponds to one
scenario. The modified master program is solved, the solution is sent to the sub-
programs to identify more precisely their feasible sets. The information about
all solved subprograms is returned to the master program in the form of cuts,
and the algorithm continues with the next iteration (see [91] for further explana-
tory and detailed comments). BDECOM (Benders DECOMposition) is a Benders
decomposition-based solver included in SLP-IOR model management system, see
[113] and Section 8.6. To show the principles of the L-shaped algorithm, we assume
that (5) has a finite optimal value. The general case is discussed, e.g., in [19] and
[130].

8.3.1     Algorithm (LSHAPED)

        Initialization of parameters: the number of iteration          the number of
        feasibility cuts         the number of optimality cuts             and hence,
        vectors d, f and matrices D, F used for the description of cuts are initialized
        as empty.
        Set              and solve the following master program




        Let                be an optimal solution of this program (If        0,
        then cuts (7) are not included, is not considered in the objective and
        constraints, and
        Solve the following linear programs
216            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

        If       the optimal value             then             . Otherwise, for given
                                   the associated dual multipliers      (representing
        unboundedness of the dual to (6)) to generate a new feasibility cut. Increase
        the number of feasibility cuts           and define the new th row of matrix
        F and the related th component of the RHS vector



        and
        Solve the following subprograms



        Let       be the optimal multipliers associated with the optimal solution of
        the th subprogram. Increase the number of optimality cuts               and
        define the new th row of matrix D and the related th component of the
        RHS vector d:




        If                     then           and      is an optimal solution. Oth-
        erwise, add this constraint as a new optimality cut to (8), and
   Since its discovery in the late sixties, the L-shaped algorithm has been discussed
and improved in many details (see [19], [58], [91], and [130] for bibliographical
references). Notice that with relatively complete recourse (see II.3.3.2) no feasibility
cuts are necessary, so step       can be omitted. Having fixed recourse W in step
      we may try to construct                     a lower bound of possible values of
the random vector                        and to solve only one program of type (5).
Then, we may utilize a bunching procedure improving the efficiency of computations
in step      . The basic idea lies in the fact that the basis B optimal for some
scenario                     is also optimal for any other scenario           satisfying
                          and                        where      is the subvector of
whose elements correspond to the columns of W, contained in B. Then solving
linear programs that differ only in the right-hand side, we may apply the idea of
building a dual feasible basis tree, i.e. to create a search tree, where each node is
related to a dual feasible basis for the linear program and each arc to a dual pivot
step. Nodes are added to the search tree as they are needed. Then the different
right-hand sides are ‘trickled down’ in the tree until primal feasibility is achieved.
The alternative method called sifting uses linear programming parametric analysis
applied to suitably ordered vectors         and                       see 5.4 of [19] for
further references.
   Another L-shaped algorithm variant introduces multiple cuts and deals with two-
stage stochastic quadratic programs, see [19]. In step      ,        are not aggregated
to generate piecewise linear approximation of          but        are used to construct
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                         217

a piecewise linear approximations of             Therefore, for      scenario-related
optimality cut    denotes a left-hand-side matrix and    is a right-hand-side vector.
Then,      row of                        and th component of
   If we add a regularizing term then we get the quadratic objective function (see
[19]) and in step      the master program is replaced by the following program:




The idea to speed up computations with adding a regularizing quadratic term in
the objective as in (12) has resulted in QDECOM (Quadratic DECOMposition)
procedure used in [113]. This method is advantageous when initial cuts force the
approximating solutions         to oscillate widely after initialization.
    Financial problems may lead to models with a specific structure. If matrix W is
derived from network flow problems (see [121]), then cuts are generated more eas-
ily, see discussion in [91]. In contrast, the presence of integer variables in financial
models causes big solution difficulties, see [99]. If a modeler cannot avoid this situ-
ation, either SIRD2CR developed for SLP-IOR [113] or a modified implementation
of the L-shaped method can be used.
    Although the regularizing term introduces the possibility to use nonlinear terms
in the objective, we suggest to employ a Lagrangian-based algorithm for the solution
of scenario-based two-stage stochastic nonlinear programs, having the following
form:




where      is the first-stage feasible set and                  are the second-stage
feasible sets. Program (13) may be rewritten with an explicit description of nonan-
ticipativity constraints (recall II.2.2) in the following form:
(14)



If nonanticipativity constraints are relaxed (e.g., with penalty terms involved in the
objective), then the resulting program is separable with respect to scenario-related
variables, and hence, the solution algorithm is reduced to the repeated solution of
separate updated programs for each scenario. Practitioners using scenario analysis
often utilize the average value of these first stage decisions obtained for individual
scenarios as their decision, which is not the best idea.
    The progressive hedging algorithm (PHA) [134] is based on the scenario aggrega-
tion principle. During one PHA iteration, all scenario programs are solved, and the
obtained solutions are averaged to get an approximation of the searched solution.
The objective of each scenario is augmented by terms based on nonanticipativ-
ity constraints and updated with use of iterations’ results. The whole progressive
hedging algorithm has the following form:
218           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

8.3.2 Algorithm (PHA)
       Initialization: Set the iteration counter                        assign weights
                     and choose             and
                find the optimal solution             of the program:




       Compute the new average solution:                              Update pertur-
       bation terms
       is near to 0 (measured by      then                otherwise                and


   The main advantage from the implementation point of view is that one may
use any locally convergent nonlinear programming algorithm discussed in 8.2 to
solve (15). The updating step        is then quite simple to be implemented, even in
parallel. The sequence of       converges to the optimal solution for convex programs
(13), and the algorithm’s convergence is also reported for certain nonconvex cases,
see [19]. The use of solution averages in the PHA guarantees robustness of the
computational process, but the algorithm convergence is slow. In the linear case (5),
this algorithm is not as efficient and fast as the L-shaped decomposition. Parallel
implementation of PHA was successfully realized in [122] for problems with network
structure (recall II.4.4).
   Another variant of the augmented Lagrangian method called Diagonal Quadratic
Approximation (DQA) [19] is based on writing the nonanticipativity constraints
equivalently in a specific order. For any scenario       we choose a unique successor
       So, that the bijection mapping                    defines a cyclic permutation
of all scenarios, and hence, specifies the set of used nonanticipativity constraints
                       Then, the augmented terms in the objective
are approximated by replacing           by the known value                The original
augmented Lagrangian program is decomposed into subprograms:




where is a penalty coefficient,         represent updated multipliers with values
known from previous algorithm iteration, and      denotes the mapping inverse to


8.4      Solution Techniques for Multistage Stochastic
         Programs
   We focus on numerical techniques for multistage stochastic programs with finite
discrete probability distributions. For this purpose, we may employ and general-
ize our knowledge about two-stage stochastic programming algorithms from 8.3.
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                        219

However, new difficulties arise, because the number of possible realizations expo-
nentially increases with the number of stages and scenarios (so called ‘curse of
dimensionality’). Therefore, several input data manipulation ideas how to reach a
manageable size of the problem have been developed. For instance, we can waive the
stochastic character of chosen data and replace these random parameters by some
fixed values; we can ignore the requirement of adapting the decisions according to
the past information; we can aggregate scenarios or stages; we can select only a
few ‘important’ scenarios using statistical techniques or expert’s opinion; we can
decompose the problem into manageable ones to use parallel procedures, etc.
   Then, the resulting large-scale linear program can be solved either by general
purpose algorithms or by techniques taking advantages from the special multistage
structure of the problem. So, for multistage programs, there are versions of basis
factorization (see [130] for details) and interior-point methods based on the efficient
rewriting of the program description (see (see        We shall focus on decomposition-
based algorithms; we refer to [30] for parallel implementations of interior-point-
based methods.
   At first, a Scenario-Based Multistage Stochastic Linear Program (SBMSLP) that
is written in the arborescent form (11)–(12) in Section II.2.2 can be solved with the
use of nested Benders decomposition based on generalization of Algorithm 8.3.1 (see
[19] for historical references). To simplify the notation in the forthcoming algorithm
description, we assume that             (instead of                  introduced in (11)–
(12)) in Section II.2.2 for all                   where
           and            In addition, we suppose that the considered program has a
finite optimal solution or is infeasible. (This is indeed valid for (11)–(12) in Section
II.2.2.) The unbounded case for our changed description may be treated, e.g., as
in [19].
   The nested Benders decomposition is based on the idea of arranging subprograms
in a tree-like structure. For problems with the staircase structure, the subprogram
assigned to tree node            has the form:




where                            and        denotes the ancestor of    We may see
that the program (17)–(19) extracts its structure from (11)–(12) of Section II.2.2
using fixed     however the recourse term including objective values of subprograms
situated in the tree below is replaced by the approximating variable     in (17). At
the tree’s topmost level (we assign                    the master program does not
change the right-hand side (cf. (17)), at the tree bottom level        subprograms
are neither augmented by         nor by cutting constraints           In general, in
   th node, the th feasibility cut (18) is formed as follows:

where is the index of a subsequent infeasible subprogram. The th optimality cut
(19) reads:
220           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

We denote by          the set of immediate descendants of        see II.2.2. During
the solution process, primal information about the optimal solution           is sent
down through the tree and bounds subsequent programs modifying               . Dual
information (solutions               and rays                is returned back from
nodes            in the form of additional constraints (18)–(19). If the program is
solvable, the computation process stops and the optimum is reached when no new
information about the optimal solution at the top-most level is obtained. So, the
multistage version of the L-shaped algorithm follows:

8.4.1    Algorithm (MSLSHAP)

        Initialization of parameters: Set the stage           the subprogram
        the number of iteration               and         assign the number of feasi-
        bility cuts           the number of optimality cuts              and the value
                      Assign the variable that controls the sequencing protocol: DI-
        RECTION:=FORWARD. Continue with the step
        Set              and solve the current th subprogram (18)–(20),
        If                 then cuts are not included. When                 then     is
        not considered in the objective.
        If solved subprogram (18)–(20) is infeasible and            then           and
        the original program is infeasible.
        If solved subprogram is infeasible and           then                  + 1 and
        generate a new          th feasibility cut for     subprogram by (21) using
        the dual ascent extremal direction given by                  and         Select
        the next subprogram with DIRECTION–BACKWARD,
        and
        If solved subprogram (18)–(20) is feasible, then             and          denote
        its optimal solution. This solution is stored together with the dual solution
        denoted as                  and         for further generation of the optimality
        cut by (22). If            then             1 and
        Otherwise,             and continue depending on the value of DIRECTION:
        If DIRECTlON=FORWARD then for              assign             and
        and
        If D IRECTION =F ORWARD and                  then set DIRECTION:=BACKWARD
        and continue.
        If DIRECTION=BACKWARD then                    repeatedly assign
        1 and generate new            th optimality cut for        subprogram by (22)
        using stored information about dual solution.
        Redundancy check of the additional optimality cuts: The inequality (22) is
        tested for the       subprograms using stored values             and          If
        this inequality is satisfied for certain        then no optimality cut is added
        to the related subprogram. If for an          the inequality (22) does not hold
        true the related optimality cut is added.
        If       and no optimality cuts are added to the master program (identified
        by                  then            and the optimal solution is found.
                  II. DISCRETE TIME STOCHASTIC DECISION MODELS                   221

       Otherwise     or cuts are added), select the next subprogram assign-
       ing         and                   Afterwards, if        then DIREC-
       TION:=FORWARD else DIRECTION:—BACKWARD and

    Algorithm 8.4.1 is implemented as the MSLiP software [68]. It works with ran-
dom transition matrices        and with more than three stages. It involves efficient
bunching strategies inspired by those discussed in 8.3. An interested reader may
obtain this freeware directly from its author. It was shown that the used fast-
forward-fast-back sequencing protocol is advantageous in comparison with other
tree traversing strategies. MSLiP was adapted to solve each node program using
OSL, see [34]. Further developments mainly deal with parallel computations and
incorporation of sampling (see 8.5) into the nested decomposition. The key problem
is how to avoid the occurrence of computational bottlenecks caused by the need of
synchronization among one master program and many subprograms.
    Bender’s-based decomposition for stochastic programs was also implemented
within the SP/OSL library. The first flexible commercial code called IBM Stochas-
tic Solutions designed for SBMSLP is supplemented by a set of callable modules
and particularly the user has node-by-node access to data and solutions for postop-
timality analysis. As the aforementioned MSLiP, it may read a stochastic extension
of the MPS input format, called the SMPS (Stochastic MPS) format.
    The SMPS format [20] is based on splitting the program description into three
files:
     a) CORE file: This is a standard MPS file, which describes an underlying
         deterministic program. Arbitrarily chosen fixed values are used instead of
         random parameters.
     b) TIME file: splits the CORE file into stages using the north-west corner
         coordinates of each stage.
      c) STOCH file: describes the actual probability distribution for each random
         parameter. The idea is that values from the probability distribution support
         replace deterministic values in the CORE file.

8.4.2 Example. Let us return to Example 8.2.2. The CORE file INVEST.COR
is the same as INVEST.MPS. The following TIME file INVEST.TIM specifies the
program’s dynamic structure:
  TIME           Example
  PERIODS        LP
      C1         R1               PERIOD1
      C4         R2               PERIOD2
  ENDATA

   Rows and columns in the CORE file have to respect the ordering given by suc-
cessive periods in the TIME file (i.e. C1, C2, C3 must appear in CORE file before
C4, and C5, ... must come after). The random parameters definition is contained
in STOCH file INVEST.STO:
   STOCH        Example
   BLOCKS       DISCRETE
    BL BLOCK1   PERIOD2 0.10
222               STOCHASTIC MODELING IN ECONOMICS AND FINANCE

         C1       R2      1.10   R3   1.04
         C2       R2      1.12   R3   1.06
         C3        R2     1.08   R3   1.01
      BL BLOCK2   PERIOD2 0.30
         C1       R2      1.05   R3   1.07
         C2       R2      1.03   R3   1.06
         C3       R2      1.04   R3   1.08
      BL BLOCK3   PERIOD2 0.60
         C1       R2      1.07   R3   1.08
         C2       R2      1.03   R3   1.04
         C3       R2      1.05   R3   1.05
      ENDATA

   The BLOCKS keyword used above allows to introduce a dependence between dif-
ferent random parameters of the same stage. For the compact description of inde-
pendent random variables the SMPS format uses the INDEP keyword. It does not
require the explicit definition of all parameters for all scenarios as the MPS format
presented in 8.2. The SCENARIOS keyword is designed for the SBMSLPs with inter-
stage dependencies, and hence, it also serves in the case of two-stage multiperiod
structure, see II.5.4. Then, sections headed by different keywords may be combined
in one STOCH file to build a complex program structure.


8.4.3 Exercise. Study the SMPS format specification from [20], change Example
8.2.2 input data, and write the corresponding CORE, TIME and STOCH files.
   The SMPS format allows unified storing of previously introduced real-life prob-
lems and their data. Therefore, test batteries have been completed and are avail-
able via Internet (see, e.g., WATSON pension fund management test problems and
POSTS collection including ALM, CEP1 – related to Chapter II.4 examples).
   Several limitations have been found during the SMPS format use. Particularly,
a manipulation with the dependence structure is cumbersome. For these reasons,
several SMPS format extensions have been proposed and tested by Gassmann and
Schweitzer. In addition, the idea to support decomposition algorithms by modeling
languages has been developed for GAMS. SETSTOCH is a new tool that may
serve as an example of how to link modeling languages and multistage stochastic
programming solvers without the necessity of modifying either language or solver.
Since 1999, a similar GAMS connection is available for the aforementioned IBM
Stochastic Solutions.
   After this software intermezzo, we turn back to decomposition algorithms. We
may decompose the large SBMSLP to many relatively small problems related to
individual scenarios. For instance, the problem corresponding to scenario
                                 (see II.2.2), is the following linear program:



subject to constraints (10) in II.2.2. The     solution is a part of the optimal so-
lution for the used scenario      However, this solution need not be either optimal
or feasible for other scenarios. Hence, for decomposition methods with respect to
scenarios, nonanticipativity constraints should be included in the form of a large
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                     223

system of simple binding linear equations for the second stage that spell out ex-
plicitly the corresponding requirements                for those       that have the
same data up to see II.2.2. A scenario tree can be described by the sequence of
partitions                 of the set S. Given scenarios           belong to the same
set A in partition      when the related decision variables       belong to the same
node of the scenario tree.
   As done already in II.2.2, for a given scenario     we denote by        the vector
of all decision variables                   in the individual scenario problems such
as (22) and (10) in II.2.2. Then, the system of nonanticipativity constraints may
be written as           where contains grouped decision vectors                   and
U is the 0-1 matrix of coefficients of the nonanticipativity constraints.


8.4.4    Exercise. Write down various matrices U for different two-stage and
multistage problems (advice: employ permutation or projection matrices). Omit
redundant constraints and analyze properties of the related penalty terms
       that may be used in the forthcoming MSPHA algorithm. Focus on the
algorithm stopping criteria.
   The multistage progressive hedging algorithm (MSPHA) (see Algorithm 8.3.2
for its two-stage version) is not limited to linear problems, so we further denote
the program’s objective as                       and scenario-related constraints as
              Nonanticipativity constraints are treated explicitly by          where
U is a projection matrix. For instance, given                and         the nonan-
ticipativity constraints may be expressed as                                 . When
these constraints are omitted, the corresponding penalty terms are included in the
scenario-related programs objectives. Then, the scenario-based multistage stochas-
tic programs may be solved with the following algorithm:

8.4.5   Algorithm (MSPHA)




   The implementation of MSPHA is quite straightforward. Scenario related prob-
lems are solvable, e.g., in GAMS and the external program may repeatedly update
augmented terms in the objectives.
224          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

8.5 Approximation Techniques
   The algorithms presented till now are designed for scenario-based stochastic pro-
grams and for programs with explicitly computed expectations. If the probability
distribution of is continuous or discrete with a very large support, then some
random sampling or deterministic approximation technique must be employed.
   Random sampling may be utilized either internally or externally with respect to
the optimization algorithm. For example, the stochastic decomposition algorithm
(SDECOMP) [77] is based on random sampling within the LSHAPED algorithm
8.3.1. It does not use all scenarios but only a single incrementally increasing sample
to build new and update previous cuts. In this way, the outer linearization of
is asymptotically created for two-stage stochastic linear programs with relatively
complete recourse (see [91] for an explanatory discussion and references). Stochas-
tic quasigradient methods (SQG) [58] are another class of internal-sampling-based
algorithms useful for nonlinear programs.
   Another possibility is to approximate the original program by external random
sampling. The main idea is to replace the expected value of the objective function
by the realization of the related sample mean. Randomly generated observations
of serve to computation of the point estimate of the objective function. Then,
theoretical results about consistency, sensitivity, and asymptotic normality may
be applied (see Chapter II.5). The considered stochastic programs may also be
approximated by methods that are not necessarily based on random sampling.
   For instance, one may relax certain constraints (e.g., nonanticipativity con-
straints in MSPHA algorithm 8.4.5), and then solve the program more easily. This
provides a lower bound of the original objective. In the opposite way, one may add
several constraints, and the optimal value of the modified program gives an upper
bound.
   The approximation of the objective is often based on the replacement of the
objective          with afunction                separable in    where are suitable
approximating functions (cf. simple recourse in Example 8.2.1). Then, through this
continuous approximation one replaces the original high-dimensional expectation
with a combination of low-dimensional expectations to obtain an upper bound
for the convex recourse program. The presence of significant interactions between
various components        of restricts the usefulness of this technique.
   The majority of approximation methods involve discretization of an underlying
probability measure, see Chapter II.5. The discretization may be chosen to provide
upper or lower bounds on the objective function value. For example, let
                   be a partition of
Then:




where denotes ‘approximately equal’,                     and          are repre-
sentative scenarios of subsets. These scenarios are often defined as conditional
                II. DISCRETE TIME STOCHASTIC DECISION MODELS                        225

expectations                          In addition, if       is a convex function with
respect to    then instead of is valid (see Jensen’s inequality in II.5.3.5), and
hence, an objective function lower bound is obtained. When                 is obtained
using a refinement of                  then the aforementioned bound can be made
tighter:                               This approximation may be either considered
as the approximation of the objective by a step function in        which is constant
on each set       or it may be interpreted as an approximation of by a discrete
random element         attaining only values    with probabilities
   The introduced approximation techniques can be iteratively used for solving
stochastic programs by so called approximation schemes. Firstly, for absolutely
continuous probability distributions, the appropriate solver starts its work with a
discretization, which is based either on random sampling or a deterministic approx-
imation. Secondly, the relation between the original program and the approximate
program is analyzed using error bounds. Thirdly, a technique for improving the
accuracy, usually based on a refinement of the approximation, is applied.
   We illustrate these ideas by using the L-shaped decomposition algorithm for two-
stage programs (see Algorithm 8.3.1) within an approximation scheme (see [19] for
details and [84] for additional references). Notice that fixed recourse is needed for
the construction of valid bounds and that, in general, applicability of this bounding
approach for multistage problems is restricted due to the required convexity of the
random objective function with respect to

8.5.1   Algorithm (LSHAPPROX)

        The same initialization as in Algorithm 8.3.1 (LSHAPED) step             is used.
        The same master program involving cuts is solved as in Algorithm 8.3.1
        step
        Similar programs as in the L-shaped algorithm (see Algorithm 8.3.1)step 3.
        are solved to obtain a new feasibility cut. The main difference in comparison
        with the original L-shaped algorithm is that instead of all realizations
           a lower bounding approximation is utilized and resulting         and
        are stored. If a new feasibility cut is generated, then             , otherwise
        continue with
        Similar programs as in the L-shaped algorithm (see Algorithm 8.3.1 step
             are solved to obtain a new optimality cut. Again, the existing lower
        bounding approximation is utilized. If                                       then
             is optimal relative to the lower bound and                Otherwise, add
        a new optimality cut and
        For an upper bounding approximation           find           by a suitable pro-
        cedure, see, e.g., [19]. If                     then                  is optimal.
        Otherwise, refine the lower and upper bounding approximations,
        and
226             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

8.6         Model Management
    All discussed numerical techniques for solving multistage stochastic programs
are demanding as to the input data (including scenarios) and to the programming
efforts. In addition, if a multistage stochastic program is to be applied repeatedly
as a part of a decision support system, additional routines for data processing,
scenario generation, and evaluation of results should be developed.
    We can see that data of programs must be transformed in six steps to reach
a solution: a formulation (schemes, texts), an algebraic form (used in modeling
language), an algorithm input (MPS input files), a solver output (MPS output
files), a solution description (produced by modeling language), an analysis form
(tables and graphs). So, model management software should support this data flow
and must coordinate it for different programs and models.
    At first, we have already noted (cf. Section 8.2) that optimization techniques
coded as solvers on computers do not stand alone. We know that they are packaged
by modeling tools such as modeling languages. In addition, the communication
with the user is established by the user interface. Such an interface may be a
tool of an operating system, a separate program, or it can be a procedure joint
with an optimization system. Therefore, a modeling tool is again packaged by a
user interface. The user interface helps to realize the well-known idea that the
principal benefit of modeling should be ‘insight, not numbers’. The insight relates
to understanding, and it is reached by a user with the help of various forms of
user interface. A modeling language often uses a standalone editor as the input
interface, and it has built-in procedures as the output interface for the presentation
of results in the form defined by the user.


8.6.1 Example. The source code in INVEST.GMS file from Example 8.2.3 may
continue as follows:
  PARAMETER CPLUS(S), CMINUS(S);
    CPLUS(S) = Q*YPLUS.L(S); CMINUS(S) = R*YMINUS.L(S);
  FILE    OUTPUT / RESULTS.TXT /; PUT OUTPUT; PUT ‘PROFIT:‘/;
  PUT     ‘Initial W‘,@14,‘| Goal G‘,@31,‘| Objective Z‘,
  PUT     @48,‘| Income Q‘,@65,‘| Rate R‘/;
  PUT     W:4:2,@l4,‘| ‘,G:4:2,@31,‘| ‘ ,Z.L:4:2,@48,‘| ‘,Q:4:2, @65,‘| ‘,R:4:2/;
  PUT
  PUT
  PUT     ‘DECISIONS X(I,T,S):‘/;
  PUT     ‘Time period ‘;
  LOOP    (T, PUT ‘ | ‘, T.TL:14);
  PUT      @48,‘|‘,@65,’|’/; PUT ’Investment ’;
  LOOP    (T, PUT ’ | ’;
    LOOP (I, PUT ’ I.TL:4));
  PUT      @48,’| Surplus YPLUS’,@65,’| Defic. YMINUS’; PUT /;
  LOOP    (S, PUT ’Scenario ’,S.TL:3;
    LOOP (T, PUT ’ |’;
      LOOP(I, PUT X.L(I,T,S):5:2));
    PUT @48,’| ’,YPLUS.L(S):4:2,’ ’ ,CPLUS(S):6:2;
    PUT @65,’| ’,YMINUS.L(S):4:2,’ ’,CMINUS(S):6:2/;);

      First, assignments and algebraic operations help to prepare report variables.
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                        227

Then, PUT statements generate printout pages, see Addendum of [66] for syntax
details. A tabular form of the output is formed with LOOP statements representing
a cyclic flow of operations. Then, the output file RESULTS.TXT has the following
content:
PROFIT:
Initial W      Goal G             Objective Z       Income Q          Rate R
1.80           2.00               0.08              1.10              1.40

DECISIONS X(I,T,S):
Time period    1                  2
Investment     1    2    3        1    2    3       Surplus YPLUS     Defic.   YMINUS
Scenario 1     1.80 0.00 0.00     0.00 1.98 0.00    0.10 0.11         0.00     0.00
Scenario 2     1.80 0.00 0.00     0.00 0.00 1.89    0.04 0.05         0.00     0.00
Scenario 3     1.80 0.00 0.00     1.93 0.00 0.00    0.08 0.09         0.00     0.00

   A standard textual presentation of the output data is supported in recent opti-
mization systems by graphical procedures, which provide different data views. An
excellent example is AIMMS [21], which incorporates advanced report writing fa-
cilities. Its project entity includes a list of related pages — windows designed by a
developer for the user.
   Recent applications of stochastic optimization show that it is important to use
more than one deterministic equivalent for a given underlying program. These
equivalents may be compared, and the most suitable or easily solvable will be
chosen. The approach of using more than one deterministic equivalent (model) is
called multimodeling. The most important contribution of multimodeling is that
the user learns more about reality using different viewpoints.
   The experience with multimodeling applications leads us to the idea of automatic
model building support. The reason is that model building is usually a time-
consuming activity, which has no formal rules. Therefore, modeling languages have
been developed to simplify the task of model changes, and it is now easier to change
individual data items or to switch between data sets. In contrast, structural model
changes must still be done by editing source codes, and this leads to difficulties when
we need to ‘play’ with program’s structural features. These difficulties motivate the
building of special purpose programs designed to support easy changes of model
structure. The approach, which tries to formalize it, is called metamodeling.
   Therefore, model management systems can be understood as implementations
of multimodeling and metamodeling ideas. There are only a few such systems
under development. For stochastic programs, we refer to the management system
SLP-IOR [113].
228           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

II.9 BIBLIOGRAPHICAL NOTES
Introduction and preliminaries. Part II exploits stochastic programming meth-
odology whose motivation and the first simple applications come from the mid
fifties and whose history, theoretical background and introduction to numerical ap-
proaches can be found in several recent textbooks and monographs, cf. [19], [91],
[130]. An extensive list of books and collections on stochastic programming is con-
tained in the preface of [169]. The basics in linear and nonlinear programming are
assumed in Part II. It is briefly surveyed in the textbooks and monographs quoted
above. For more details see e.g. [7], [8].
Multistage stochastic programs. Introduction to multistage problems of sto-
chastic programming including survey of applications and an extensive list of refer-
ences can be found in [45]. We focus here on multistage stochastic programs with
recourse with reference to [130] for stochastic programs with probability constraints
and to [99] for integer stochastic programs. For comparisons with stochastic dy-
namic programming see e.g. [73] or the recent paper [54] and references ib. The
illustrative Example 2.4 was motivated by [29].
Multiple criteria. There are many tangent points between stochastic and multi-
objective programming, see e.g. [72]. Chapter 3 deals with selected methods and
results for multi-objective programming and their applications to static stochastic
models for portfolio management, including the Markowitz model [112]. Criteria
based on alternative definitions of risk were compared for example in [98]. We
delineate in Section 3.3 how to use the concepts of multi-objective programming
for formulation and interpretation of various types of stochastic programs. For
introduction to financial optimization see [176] and for the state of the art in multi-
objective optimization see [78].
Selected applications in finance and economics. The first large-scale ad-
vanced applications of stochastic programming in finance and economics can be
found in [39], [128] and [179]. At that time, water resources planning and man-
agement was one of favorite applications areas, see [128]. Sophisticated approaches
to portfolio management from the seventies, e.g., [24], [106], have become the cor-
nerstones of the contemporary financial applications and have contributed also to
modeling and software development for multistage stochastic programs. Section
4 reflects the fact that at present, the most popular seem to be financial applica-
tions of stochastic programming; see various survey papers and collections, e.g.,
[44], [119], [178], and descriptions of successful applications such as [28]. Our pre-
sentation of general features of multiperiod and multistage stochastic programs in
portfolio optimization in 4.4 has been supported by ideas of [40], [119] and [178].
   Applications in planning and management of energy generation and transmission
are booming. Their presentation in 4.6 and 4.7 is based on [108], [130] and [157].
There is an increasing interest in stochastic programming applications for plan-
ning, allocation and management of resources, capacity expansion (see Chapter 12
in [19]), production planning and optimization of technological processes (see appli-
cation 4.8 motivated by [126]), in design of networks, e.g. for telecommunications,
and in logistics problems. In general, macroeconomic applications are rare. They
concern growth models, socio-economic decisions supporting employment, etc.
               II. DISCRETE TIME STOCHASTIC DECISION MODELS                         229

Approximation via scenarios. In practise, one uses discrete probability dis-
tributions obtained mostly by approximation of a more complex and possibly not
completely known underlying probability distribution. Chapter 5 devoted to gener-
ation of such sensible discrete probability distributions is based on several papers,
cf. [2], [48], [53]. The critical item is how to create the required input for multi-
stage stochastic programs and how to use the results of the approximated problem
to draw inference about the sought results of the true one. The second mentioned
problem area is usually called “what-if” or output analysis. Methods of output
analysis have to be tailored to the structure of the problem and they should also
reflect the source, character and precision of the input data. Accordingly, the suit-
able approaches are based on results of asymptotic and robust statistics (we use
[144] as the reference book), moment problems, on simulation techniques and on
general results of parametric programming, e.g. [5], [69], [62]; see [49] and references
ib. The contamination method and its application to quantification of changes due
to inclusion of out-of-sample scenarios was elaborated in several papers, see e.g.
[46] and [52].
Case study: Bond portfolio management problem. The case study presented
in Chapter 6 exploits results obtained within the contract “HPC-Finance” of the
INCO ’95 project founded by Directorate General III of the European Commission
in a close collaboration with Professor Marida Bertocchi and her group at the
University of Bergamo. The model is similar to the two-stage multiperiod model
[70]. The need for output analysis is emphasized and various methods described in
Chapter 5 are illustrated. The results are based on papers [15], [50], [51] and [52].
Incomplete input information. Selected techniques suitable for analysis of the
results are applied also in Chapter 7. Except for stability of the European call price
with respect to the estimated volatility, these results were presented in [47].
Numerical techniques and available software. In the eighties, the special
care devoted to software development has resulted in the collection [58], in the
recommended input format [20], in several monographs [77], [84], [113], software
packages and test batteries.
   The last Chapter written by Pavel Popela surveys and explains the available
numerical approaches and software. It begins with a simple educational investment
example solvable by simple calculations. Nevertheless, even this simple example
motivates a need of numerical optimization algorithms. Traditional optimization
techniques and software can be used for solution of medium size stochastic pro-
grams (see [117] for a historical overview, [66] for the GAMS description, [65] for
the AMPL guide, and [21] for the AIMMS model development tool). The de-
scription of two main decomposition algorithms (LSHAPED and PHA) and their
computer implementations follows the original papers [68] and [134]. Details and
extensive references on other algorithms may be found in [19]. The brief exposition
on problems of model management follows ideas of [21], [113] and [126].
                                                                                    231

Part III

STOCHASTIC ANALYSIS AND DIFFUSION
FINANCE

III.1 MARTINGALES

stochastic processes, Brownian motion and martingales, Markov times and stopping
theorem, local martingales and complete filtrations, L2-martingales and density the-
orem, Doob-Meyer decomposition, quadratic variation of local martingales, helps
to some exercises

1.1       Stochastic Processes
   Recall first some basic definitions. Until further notice we shall fix a probability
space            . A stochastic process is a collection

                                           also

of real valued random variables. If only a collection                           , is at
our disposal, we shall speak about a stochastic process on T.
                  being stochastic processes, we shall call                           a
d-dimensional stochastic process.
   A trajectory         of a stochastic process X on a           is a function in
given by              or by             for a fixed random element          .
   The basic equivalence relation on the set of stochastic processes is that given by
the almost sure equality in the space of trajectories. More precisely, processes X
and Y on T are said to be equivalent if

                                         for some                      (a P-null set).

We write either            or                     a.s.. Observe that        implies
that               for all       and if this holds we say that X is a modification
of Y (and vice versa, of course).
   The same definitions and observations apply to a collection of E-valued random
variables where      is a metric space. Such a collection is called a stochastic
process with states in or simply                  . Thus, a             stochastic
process is a process with states in .

1.1.1 Example. Let U > 0 be a random variable with an absolutely continuous
distribution, put                      and        . Obviously X is a modification
of Y; on the other hand X and Y are not equivalent as in fact
232            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   Almost sure properties and implications form an important and for a beginner
not quite easy part of stochastic analysis. Read carefully the following probabilistic
statements that refer to some properties of processes X, Y and a positive r.v. U:
Obviously,

                          implies almost surely that
               Outside a P- null set
                       X=Y       on [0,U] with probability one

are equivalent statements and mean exactly that



We shall agree to call a stochastic process continuous, decreasing, ... if all its
trajectories have the corresponding property and also to call it an almost surely
continuous process, almost surely decreasing process, ... if the correspond-
ing property is possessed by trajectories       outside a P-null set.
   Our text will be centered mainly around continuous processes which assumption
may in some cases simplify our arguments :
   Recall that a function              is of finite variation if for all




where the          run through all finite partitions of the interval       and where
                                        The map               will be called here the
variation of B.

1.1.2 Lemma. Let X and Y be either left or right continuous processes. Then
    (a) X is a modification of Y iff         .
    (b) If X is a continuous process of finite variation then is a continuous non
        decreasing stochastic process.
   For a continuous process X of finite variation, the process       will be referred
to as the variation of X.
   The first part follows easily by continuity of X and Y and by separability of ,
to verify (b), namely the measurability of         you need to refresh your analysis
by

1.1.3       Exercise. If               is continuous and of finite variation then
               is continuous such that




where
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                           233

   Besides the continuous processes of finite variation, Stochastic Analysis is in-
habited mainly by continuous martingales. These processes, as we shall see later
on, cannot be of finite variation unless they are constant on        almost surely.
Nevertheless, there is a concept of variation that makes a very good sense even for
processes with such irregular trajectories as martingales:
   We shall say that a stochastic process X is of finite quadratic variation if
there is a process                  such that
(1)
where                                                 and                means that r.v.’s
    converge to a r.v.     in probability as             . We shall also write           in
this case and                 if        is a Cauchy sequence in probability.
   The process        will be called the quadratic variation of X. Note the follow-
ing facts:
     (i) The correspondence                 respects the "modification classes", i.e. if X
         is a modification of Y then          is a modification of     .
    (ii) Even though                                   a.s., the quadratic variation need
         not be increasing almost surely due to a possible lack of continuity of           .
   (iii) The definition of       is a rather restrictive one: The process X in 1.1 where
               is not of finite quadratic variation.

1.1.4   Exercise. A stochastic process X is of finite quadratic variation iff


   As we have already observed, the concepts of variation and of the quadratic
variation are not very friendly, indeed:

1.1.5 Lemma. If X is a continuous process of finite quadratic variation then for
any      and outside a P-null set
   Proof. Fix        and choose                     such that
outside a P-null set N. Because


it follows by continuity of X that            and
   If L is a linear space of processes of finite quadratic variation we may define a
bilinear form          on L by


where                is defined by



The process                                  will be called the covariation of X and
Y.
234            STOCHASTIC MODELING IN ECONOMICS AND FINANCE



1.1.6 Exercise. Let be a linear space of processes of finite quadratic variation.
Then
(a)                   is a symmetric bilinear form on with values in the set of
all processes on          that respects the modification equivalence classes.
    Moreover, for all    and outside a P-null set the following inequalities hold :
(b)

(c)

   Frequently we meet problems that ignore the home space             of a stochastic
process X and ask for some properties of its probability distribution, only. Recall
that for a measurable map                          and a measure on ,
denotes the measure on defined by                            called the            of

   Recall also that is called a random variable with values in a metric space
   if it is defined on a probability space          , attains its values in    and is
measurable in the sense                            where        denotes the Borel
algebra of . We shall abbreviate                            and              . Agree
to write                           and to call the image measure the probability
distribution of .
   Having a continuous stochastic process                        we may observe the
process as a map               defined on with values in the space              of all
continuous functions defined on            suitable metrization of the space
that makes X a random variable with values in             is provided by

1.1.7      Exercise. Put                                                  for
          and prove:
      (a) is a metric on           such that            iff        uniformly on each
                       .
      (b)            is a separable complete metric space.
      (c) The Borel                                is generated by closed neighbour-
          hoods             of the form


          and therefore by the sets of the form


Let us agree that speaking about a topology on                    we shall always mean the
metric topology defined by (a).
   Any stochastic process                           is naturally accompanied by the
system of all its finite dimensional distributions                      where
                goes through all finite increasing sequences in    .
   As expected, the probability distribution of a continuous process X is uniquely
determined by its finite dimensional distributions.
        and   are         of subsets in F and G, respectively, such that        for all
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                   235



1.1.8 Lemma. If X is a continuous process then                  is a         -valued
random variable and such as, it has the probability distribution on          . More-
over, continuous processes X and Y are equally distributed on          iff they have
identical finite dimensional distributions.
  To prove such a statement we can not avoid a Dynkin argument: Consider a
nonempty set , a family of its subsets and a family of maps                where
  goes through an index set U and each      is a metric space. We shall denote by
     the minimal            that contains each        and




Obviously, having a measurable space         then     is an                   random
variable defined on     if and only if           .
   The operator will appear in our proofs by means of promised

1.1.9 Dynkin Arguments.
   (a) If       where is a metric space and if                         then

   (b) Let      be a vector space of functions              that contains constants,
       it is closed with respect to uniform convergence and posses the following
       property: If           are nonnegative and uniformly bounded and
       on then            .
       If     contains a subset      that is closed under multiplication, then any
       bounded                           -measurable function belongs to .
       Weaker forms of (b) are:
   (c) Let     be a family of subsets of such that               implies that
       for any sequence               If         is an algebra then any           is
       a set in .
   (d) Let be a family of subsets of such that




       holds.    If       is a family closed under finite intersections then any
                 belongs to .
   (e) Let X and Y be random variables on            with values in a separable
       complete metric space     and an arbitrary metric space , respectively.
       Then X is a      -measurable random variable if and only if there exists a
       Borel map             such that          holds everywhere on .

  Proofs may be found in [135] or in [37].
236           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   Proof of 1.1.8. The first statement follows by 1.7 (c) and 1.9 (a). To prove
the second one denote by        the family of all Borel sets                such that
                           holds. Check that it owns all properties required by 1.9
(d). Denoting by      the family of all finite intersections of the sets
                   it follows that                 by 1.7 (c) and by 1.9 (d).
   We will summarize the basic ingredients that allow to construct a (continuous)
stochastic process                       with given finite dimensional marginals. In
particular, consider a family of distribution functions

(2)

and ask if there is a (continuous) process X such that

(3)



holds. Note that if a process X exists such that (3) holds then the family of
distribution functions (2) is consistent, i.e. such that       is the marginal
distribution function of        whenever
   The classical Daniell-Kolmogorov Theorem (see, Corollary 35.4 in [6], p.303)
slightly simplified says

1.1.10. For any consistent system of distribution functions (2) there exists a sto-
chastic process X such that (3) holds.
   Once the existence of a process X with given finite dimensional distributions is
established, a natural question arises: Under which conditions can X be modified
to a continuous process Y ? Kolmogorov-Chenstov Theorem (see, 39.3 in [6], p.
335) provides a partial answer.

1.1.11. Let                     be a stochastic process such that

(4)

holds for some                Then X has a continuous modification.
   The natural state space for a continuous             process
is the space of continuous maps from        to    denoted as             with the
topology of uniform convergence on compact intervals in     . Obviously, the space
is metrizable to a separable complete metric space because it is homeomorphic to
the separable complete product space              . We venture to identify both
spaces and apply the notation                         .
   Finite dimensional distributions of an                  stochastic process
              are given as
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      237

where                         is a Borel probability measure on       .
   If                    is another                 process, defined perhaps on a dif-
ferent probability space, agree to write               if the processes X and Y have
the identical finite dimensional distributions.
   Since              is a separable metric space we may repeat arguments for 1.7
(c) to see that the Borel              of             is generated by sets of the form
                                         where                                 and
denotes the Eucleidian norm in . This and 1.9 (a),(d) yields

1.1.12 Lemma. Let                  be a                           continuous process.
Then X is a       -valued random variable such that



holds. Moreover,                  if and only if        holds.
    We will say that                    is a             Gaussian process if all
its finite dimensional distributions are normal. Thus, the          -probability
distribution of a continuous Gaussian process X is according to 1.12 uniquely
determined by its mean and by its covariance matrix function given as



A Gaussian process X with                for all        will be called a centered
Gaussian stochastic process.
   The principal definitions of stochastic calculus are as follows:
   Having a measurable space         we call             a filtration of the mea-
surable space if any         is a          and         whenever           We agree
to denote
   If X is an          process on       , where is a metric space, we denote



and call the filtration        the canonical filtration of X.
    Having a filtration       of        we shall say that an             process X on
        is               process if           holds for all       . This means that X
is an               process if and only if     is an                           random
variable for all
    Observe that if X is a process on      whose trajectory records a random motion
of a particle then the                 may be interpreted as the history of the motion
up to time because it lists precisely those random events that may or may not
happen to the particle on the time interval          while       is the           that
records the complete motion of the particle.
    A very natural continuous process lives on the measurable space
It is defined by                 for            and         and called the canonical
or coordinate process. Actually, the process is prepared to posses any probability
238            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

distribution              we may choose just considering it as a stochastic process
on                    . Having a continuous process               we shall call the
process                           the canonical representation of the process
X on           . Obviously,

(5)

holds by 1.12. Here      denotes the space of continuous functions           with
usual topology of uniform convergence and                          the continuous
projection.
   A continuous time version to Daniell-Kolmogorov theorem we appreciate later
on is provided by Varadhan Theorem, see [156], p.34.

1.1.13. For any        let   be a probability measure on      such that the family
             is consistent in the sense                          . Then there is a
unique probability measure on         such that              holds for any       .

1.2      Brownian Motion and Martingales
   Recall that a stochastic process X is said to have independent increments if
the random variables

(6)                                                         are independent

for all finite sequences                          Both above properties are
met by Brownian motion that is defined as a centered Gaussian process with
cov                      for    . The basic existence properties are provided
by

1.2.1 Theorem.
   (a) A process X is a Brownian motion iff        , it has independent incre-
       ments, and                             holds for
   (b) Brownian motion exists and each Brownian motion can be modified to a
       continuous process.
  A continuous Brownian motion will be called Wiener process and denoted
mostly as               . Observe that         and                 .
    Proof. (a) If X is a Brownian motion then cov
for              and the random vector (6) has a normal distribution. It follows
easily that the increments are independent and                   random variables.
Because the above reasoning is easily seen to be reversible the equivalence (a) is
verified.
    (b) Consider                            and put
Because                is a positively semidefinite function on        the
are well defined normal distributions that obviously follow the consistency require-
ment of 1.10. It follows by the theorem that there is a stochastic process X with
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      239

finite dimensional distributions given by (3), hence X is a Brownian motion. By
(a) we get                              for all       and X possesses a continuous
modification by 1.11.
   The motion as a physical phenomenon was first observed by English botanist
R. Brown in 1897 as the motion of pollen particles in a liquid due to the incessant
hitting of pollen by smaller liquid molecules. Amazingly, the first qualitative treat-
ment of Brownian motion suggested by L. Bachelier in 1900 ([4]) was inspired by
the stock price fluctuations. The physical and consequently mathematical theory of
Brownian motion was set up by A. Einstein in 1906 ([56]) and by N. Wiener in 1923
([171]). Wiener process, i.e. the continuous Brownian motion has since well estab-
lished a claim to be one of the cornerstones of both theoretical and applied modern
probability. Unquestionably, it is also the fundamental stochastic process for the
present text due to its rôle of the stochastic driver of the stock prices dynamics in
a model we shall present in Chapter 3.

1.2.2 Stability and the Quadratic Variation of W.
   (a) For any                                    is a Wiener process in-
       dependent of the
   (b) The process     defined by                                     is a Brownian
       motion with trajectories continuous on         .
   (c) W is a process of finite quadratic variation with              for all       .
   Proof. There are two items of the above statements that need a finer treatment:
Fix          and denote



It follows by definition of W that the random variable         is independent of the
algebra , hence also of the                 . By continuity of W we get
that establishes the independence stated by (a).
    Fix        and let               Then




which proves (c)
   From the point of view of mathematical analysis the trajectories of W are fairly
pathological:

1.2.3 Trajectories of Wiener Process W. Denote by                   the set of
such that                for       and        . Then outside a P-null set
   (a)
240             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

      (b)                                   and                                     .
      (c)                      as           .
      (d)
   We leave the proof to our reader who may prefer to consult any standard text
book on modern probability, see [6], Chapter IX], for example. We complement 2.3
by

1.2.4       More on Trajectories of W.
      (a)
      (b) Outside a P-null set a trajectory of a Wiener process is nowhere differen-
          tiable on       .
   A very deep assertion (a) is called the law of iterated logarithm. We refer
to [6], Chapter IX, again, for the proofs.
   The natural state space for Brownian motion is of course . We shall say that a
continuous d-dimensional stochastic process                       with
is a d-dimensional Wiener process if it has independent increments


and                                      for            where     denotes the unit
             Hence, a                Wiener process is a centered Gaussian process
with the covariance function given as                    .
  Only elementary arguments are needed to prove the following statements:

1.2.5 Theorem.
   (a)                       is a               Wiener process iff
       are independent one dimensional Wiener processes.
   (b) Let W be a                 Wiener process, fix      . Then
                                         is a                 Wiener process inde-
       pendent of the                 where         denotes the canonical filtration
       of W.
   Wiener process is also a martingale.* The concept of the martingale was first
introduced by J. Ville in 1939, see [166], and the pioneering fundamental results
were discovered for the most part by P. Lévy and J.L. Doob in the period 1934-1950,
see [41].
   Recall that a stochastic process                   where          , is a martin-
gale if for all


Test your proficiency in the conditional expectations calculus, see 2.7 below, and
verify the martingale property of W and some of its transformations.
    *A strap connecting a horse’s girth to the reins so as to hold down its head (the French language
of the 15th century), later on a special gambling strategy.
                  III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                  241



1.2.6       Exercise. If         then                  ,                        and
                                              are martingales.

1.2.7 Conditional Expectation Calculus. For any                  _              there
exists an almost surely unique linear map                                        such
that



We shall also write       instead of      . The following properties hold whenever
the corresponding (conditional) expectations are defined:
      (a)
      (b)
      (c)                               and
      (d)
      (e)                                        and       are independent
      (f)
      (g)
      (h)
      (i)
      (j)

      (k)
            both almost surely and in

  By         we denoted and will continue to denote that a function           is
        -measurable random variable for a               of subsets of . By
we mean the
   See paragraph 15 in [6] for the proofs.
   We are prepared to extend usefully the concept of Wiener process and that of
martingale with respect to a given filtration
   We shall say that a                Wiener process W is an             process
if                    is an              Wiener process such that

(7)                                             and          are independent.

We shall say that a one dimensional process X is an                             (sub-
martingale, supermartingale) if X is an                       process with
for all      such that



respectively.
242           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

1.2.8  Stability of W w.r.t. a Filtration Change. Let W be a
           process. Put                 . Then
   (a) W is a            process for any filtration       such that
       for all
   (b) W is an              process.
   (c) W is an                    process for any filtration    such that    and
          are independent for all                        and      are independent

  Thus, Wiener property (7) is safely preserved when moving the filtration
downwards as long as we keep the process W to be adapted. An enlargement of
    is possible only in special cases as in (b) and (c).
   Proof. To verify (b) observe that if            then                 and     are
independent for any         , hence the assertion follows by continuity of W.
   Having W,         and       as in (c), the
and     are independent for           . It follows immediately that             and
                          are independent also, which implies (c) because the latter
family of sets is closed w.r.t. finite intersections and generates

1.2.9 Stability of Martingale Property.
   (a) If X is an             _     then it is also a                for any filtration
            such that                   holds for any
   (b) Any continuous      -martingale X is
   (c) Let      and      be independent filtrations as in 2.8 (c), X an
       and Y a                 . Then X, Y and XY are
   (d) Let X be an                      (a submartingale) such that           is in
       for          for a convex (a convex non-decreasing)                        Then
                                is an
   Proof. (a) follows easily when using (d) in 2.7. To prove (b) apply 2.7 (j) and
the continuity of X to get for


X and Y in (c) are                      by 2.7 (e). To prove this for XY observe
that the process is                  and                  because      and
are independent integrable variables. Fix        consider          and
Because                  and                   are pairs of independent variables



that obviously implies the martingale equality
   Finally, (d) is a direct consequence of Jensen Inequality 2.7 (b).
  Next, we are going to establish a pair of important martingale inequalities for
                       which quantity is easily seen to be a             random
variable if X is a right-continuous process. Observe also that
is a continuous                  process whenever the process X has the property.
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                  243


1.2.10 Doob’s Inequalities. If X is a right-continuous martingale or a nonneg-
ative submartingale, then




  A discrete version of the above inequalities provides

1.2.11 Lemma. If                   is a martingale or a nonnegative submartingale
then




  Proof. Assume first that              is a nonnegative submartingale and denote
                                                       for             Hence, by
submartingale property                         and finally, if




   To prove (b) denote                  fix       and apply (8) to the submartin-
gale              to get




Hölder inequality with the exponents   and      yields




and finally


The proof of (b) is completed by letting          . To prove (a) we may assume
that           which according to (b) implies that         for any          and
therefore                  is submartingale by 2.9 (d). The (a) inequality now
follows in both cases by (8).
244             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

  Proof of 1.2.10. The right-continuity of X implies that




and




by 2.11 because each sequence                                                     is a
submartingale.
  We shall say that a martingale X is an                    if             for
and close this Section by a list of simple martingale properties

1.2.12 Exercise. Let X be an                             and             Then
   (a)

      (b)

      (c)


      (d) An                       X with constant         is a martingale.
      (e) If X is a right continuous nonnegative supermartingale on [0, T] then




1.3         Markov Times and Stopping Theorem
   We shall fix a measurable space       with a filtration              and define a
                to be a             time if               holds for all        . We
also enlarge the filtration    putting



and call      the                   . Observe that if                  then is an
-Markov time and
   A Markov time is mostly looked upon as a random time in which some im-
portant event happens to an                  stochastic process, see 3.6, for example.
Note that the definition of Markov time supports this interpretation by saying that
to determine whether the event appeared or not during           time interval is always
possible if we are familiar with the history     up to the time . Thus the
    may be interpreted as the history of the process up to the random time in
which the event happens, hence the
   First, let us summarize some almost obvious properties of Markov times.
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                  245



1.3.1     Lemma. Let       and    be             times. Then
   (a)
   (b)
   (c)
   (d)
   (e)
    (f)
   (g)
   Proof. The definitions yield (a), (b), (c) directly. As for (d) we observe that
for an        that (c) implies



By (d) we get (e). As for (f) we have             again by (d) and
                  by (a) and (c) which is all we need to verify the statement.
Finally,



according to (f) which combined with (e) verifies (g).
  Also, we will find useful the techniques developed in the next four simple state-
ments.

1.3.2     Lemma. Let       bean               time and



Then      are              times and        on    as
   Proof. To see that        are Markov times fix         and check that



and
   1.3.2 may be obviously modified to

1.3.3     Exercise. Let                be a bounded Markov time. Set



Then            is a sequence of Markov times.
   A filtration      is called right continuous if                         forall
       . The property may be used in some cases to simplify the verification that
a random variable is a Markov time.
246          STOCHASTIC MODELING IN ECONOMICS AND FINANCE


1.3.4 Exercise.
   (a) If    is a right continuous filtration then is an              time if and only
       if              for any        and
   (b) For any filtration     the filration      is right continuous.
   (c) Consider the canonical filtration           in                      defined by
       (5) and prove that       is a strictly smaller           than
  The following basic integration property requires a probability measure P to
complete our model to

1.3.5 Lemma. Assume that        and      are                        times. Then
   (a)                           outside a P-null set
and
    (b)                almost surely.
   Proof. According to 3.1 (f) and (g), (a) is equivalent to



to be valid for all         . But this follows directly by the definition of the condi-
tional expectation             because                      according to (d),(f),(g) in
3.1.
   For an           (a) yields



because the integrand is in             again according to 3.1 (d) and (f). Also by
(a) we reason that



and summing up both equalities we get



which is equivalent to (b).
    We have already remarked that the concept of Markov time is designed mostly to
denote the time in which a trajectory of a stochastic process X performs something
very important for our purposes:
    If        is a Borel set we denote                                       where
inf           and call the random time variable the first entry of X into B. Agree
to write

for the first entry of      into     . Speaking generally, each entry time of a
measurable X into a Borel B can be forced to become a Markov time of a properly
extended canonical filtration    , see Theorem 6.7 in [93], for example. However,
the following more elementary result covers all cases we shall treat.
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       247


1.3.6   Theorem. Let X be a continuous                    process. Then
is an              time under either of the following conditions:
    (a) B is a closed set in
    (b) B is an open set in and          is a right-continuous filtration.
   Proof. In (a) we have                                , hence



In (b) we write


that verifies (b) via 3.4 (a).
   Note that (b) holds also if the continuity of X is weakened to its right-continuity.
   Stochastic analysis embraces a lot of measurability concepts. The most impor-
tant one is that of the progressive measurability: We shall say that a stochastic
process X is                      measurable or simply                       if
                          is                       -measurable map
Denote by                      the space of all               processes and call a set
                                     if             .

1.3.7 Exercise. Fix a filtration    and denote by       the set of all progressive
subsets of       . Verify that
   (a)                is a         such that           iff X is an     -measurable
        map.
   (b)                       is an           process.
   (c) According to (a) and (b),         is              and
        map                 Show that the implication can not be reversed.
   As always, continuous processes are inclined to be handled more easily:

1.3.8    Theorem. A right-continuous                    process X is               .
   Proof. Fix a        and observe that




define                            maps such that                   on
  For a stochastic process X and a                        random variable     we shall
denote
248             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

Obviously, we may interpret the variable         as the state of the process X at
the time , hence, for example,             is the state in which we find X at the
moment in which its trajectory enters            for the first time. Thus, assuming
that X (0) =0 and that X is a continuous process we have
For a progressive process X and Markov time             is a random variable:

1.3.9        Lemma. Let X be                  and an                  time. Then
      (a)        is an             set;
      (b)      is an             stochastic process;
      (c)         is an            random variable defined on                which means
            that                         for any       .
   Proof. The continuous process                    is                         hence
progressive, according to 3.1.(a) and 3.8. This implies (a) because



Denote                           and observe that                       of
implies that for any fixed         the map T is measurable as



Hence,             is an                    process.
  For a fixed it follows by (b) that                    and therefore



that proves (c).
  The next pair of results is of a basic importance in what follows:

1.3.10 Optional Sampling. If X is a right-continuous                               (sub-
martingale) and           a pair of bounded                          times, then



holds almost surely.
  Proof. Assume that X is a submartingale and that
  (i)                   take their values in                                   such that

   The first part of 3.10 follows easily by                            where
      . Choose             and check that the submartingale property implies




hence                        a.s. because              by 3.9 (c).
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                           249

   (ii) Assume that                      take their values in
   Define Markov times          by                   to get a connecting sequence
                            It follows by (i) that



  (iii) Consider arbitrary Markov times
   Accoding to 3.3 there are Markov times      and      that satisfy (ii) for
such that                   and       . According to (ii) we get



Hence, both           and           are inverse submartingales such that all expec-
tations         and            are above               and therefore convergent in
    by Theorem 6.5.10 in [67], p.228, for example*. Thus, the first inequality in (9)
and the right-continuity of X yield



Finally, according to 2.7 (f) and because                     by 3.9 (c)



where both limits are in

1.3.11 Stopping Theorem. If X is a right-continuous                 (submartin-
gale) and an                time then inherits the corresponding property.
   If X is a right-continuous            and                   times then



and if moreover X is a bounded process and                        finite Markov times, then

  Proof. The process       is          process by 3.9 (b), the random variables
      are integrable by 3.10. Assume that X is submartingale. It follows by 3.10
and 3.5 (b) that



holds for all
   The latter part of 3.11 follows by 3.5 (b) and 3.10 as



Letting            in the above equality we get                            by 2.7 (f).

    *Note that the uniform integrability of          and         that implies the          ,
follows simply by 1.2.7 (g) if X is a martingale or nonnegative submartingale
250            STOCHASTIC MODELING IN ECONOMICS AND FINANCE



1.3.12 Exercise and Example. A right continuous                   process X is an
            iff            and                  forall bounded              times
  and iff        for all         and                   for all            times
with card
   Setting             and                for an             we get a martingale
with                           because                         (apply 2.6 and 2.3
(b)). Hence and           is a pair of Markov times such that 3.10 is not valid
anymore.
     Markov times provide indeed a mighty tool to tame the continuum of time:

1.3.13 Theorem. Let               be a continuous supermartingale. Then outside a
P-null set



where               denotes the first entry of X to 0.
  Hence, a continuous supermartingale X with               almost surely for all
      has trajectories that are positive on    with probability one, i.e. the X is
an almost surely positive supermartingale.
   Proof. It follows by 3.6 (a) that is an       -Markov time, hence we may use
Stopping Theorem (or rather its supermartingale version): If            we have
nothing to prove. If the contrary is true let  denote the minimal      such that
               For a while fix          denote            and choose a
Because                            yields




as                            . It follows that                for all             on
         outside a P-null set    , hence by continuity,                for all      on
              . Putting                   we exhibit a P-null set outside which the
implication (10) operates.
   As for the second part of our theorem suppose that                      which leads
to a         such that               . According to the first part the trajectories of
X vanish on          with a positive probability, hence a contradiction and
that is exactly our second assertion.
   We close this section by extending the stability property of Wiener process given
by 2.2 (a).

1.3.14 Strong Markov Property of W. If W is an                         process and
an almost surely finite   time, then
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                         251

are Wiener processes,        being a process independent of the
   Proof. Assume without loss of generality that         is a finite Markov time. We
need to verify


(11)


If      is a countable set, the equality follows easily by its factorization to the atoms
          where the      are values of . Hence, (11) is proved for each Markov time
   defined in 3.2 and the validity of (11) in general is implied by
and finally by the continuity of W and
   Since       is a Wiener process independent of                         it follows that
              and                 are equally distributed
random variables. Compute


to conclude that                         and                     holds for a Borel
map                                        . Hence, W and B are equally distributed
processes.
     The strong Markov property may be applied to establish precisely

1.3.15 Reflection Principle. Let W be a Wiener process. For                   and
put                     and let  denote the first entry of W to               . Then


     Note that the Reflection Principle in fact says that



which equality easily comes from by the obvious heuristic argument: Among the
particles which enter before time ”half” of them will be above at time
   Proof. Write                                                            It is easy to
check that                                     holds where                      . Hence,
                             by 3.14.
    Thus,                     for each individual         while obviously the dis-
tributions of S and W are singular probability measures in

1.3.16 Exercise. The Markov time                            has for any      the proba-
bility distribution with the density
252          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

1.4     Local Martingales and Complete Filtrations
   Later on we shall appreciate the following extension of the martingale property:
   Let X be an                continuous stochastic process. We shall say that an
              time stops X to martingale if             is an              Further,
a sequence       of              times will be called an                  sequence
for X if         almost surely and stops X to an                   for every
Finally, X is a local                     if there is an             sequence
for the shifted process X – X(0), i.e. if



Fix a filtration      and verify as an exercise the following simple but frequently
used properties:

1.4.1 Exercise. Let X be a continuous adapted process and                     Markov
times. Then
   (a) If             then stops X to a martingale iff stops                     to a
       martingale, i.e., X is a local martingale iff there is a localization sequence
       for X.
   (b) X is a martingale        is a local martingale        is a local martingale.
   (c) If       and stops X to a martingale then also stops X to a martingale.
   (d) X is a local martingale,                             is a local martingale.
   Mostly we shall deal with continuous adapted processes X such that X(0) is a
constant. It follows by (a) that such a process is a local martingale if and only if
there exists a localization sequence for the process X itself.

Warning. It is not true that local martingales need only be integrable in order to
be martingales (see 2.3.7 for a counterexample).
   Nevertheless, as we shall see later on, it is very important to recognize true
martingales among local martingales. Agree to call a process X bounded if
                    for all and     i.e. if it is a process with uniformly bounded
trajectories.

1.4.2 Theorem. For a fixed filtration          let X be a continuous adapted process.
Then
   (a) If X is a local martingale such that                  holds for all      and a
       random variable             then X is a martingale, especially, bounded local
       martingales are martingales.
   (b) Let      denotes the first entry of                            Then X is local
       martingale iff       is a localization sequence for
   (c) If X is a nonnegative local                      with               then it is a
       supermartingale.
   (d) If X is a nonnegative local                 with             such that
                holds for a        then X is a martingale on
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      253

  Proof. (a): Choose a localization sequence for X, say         . Stopping Theorem
implies

(11)

Because                      and                      as          1.2.7 (f) permits to
pass         in (11) to receive                      for
   (b):       are Markov times by 3.6,              on     because all trajectories of
X – X(0) are continuous, hence locally bounded functions on          . If X is a local
martingale then                  is a local martingale by 4.1 (b), hence a martingale
according to (a).
   (c): There is a localization sequence       for X by 4.1 (a). Fix        and check



By Fatou lemma we reason that               as
   and finally, by Fatou lemma for conditional expectations 2.7 (i) we conclude the
proof of (c):



The assertion (d) is an immediate consequence of 2.12 (d) and our present (c).
   Note that 4.2 (b) says that given a local martingale X, the shifted local martin-
gale X – X ( 0 ) owns a localization sequence      such that       are
times. This property enables to extend 2.9 to

1.4.3 Stability of Local Martingale Property.
   (a) If X is a local          then X is a local               for any filtra-
       tion       such that            holds for any
   (b) If X is a local           then it is a local
   (c) If X is a local            and Y a local                then X, Y and
       XY are local                  provided that filtrations         are in-
       dependent.
   Proof. The statements (a), (b) follow easily by 2.9 and 4.2 (b). If X and Y
are as in (c) assume X(0) = Y(0) = 0 without loss of generality (see, 4.1 (d)) and
choose their corresponding localization sequences        and     such that     and
     are     and            times, respectively. According to 2.9 (c)          and
          are                    . It follows by 4.1 (c) that            are
-martingales also and therefore             is an                      sequence for
 XY.
   Recall that by 1.5 the only continuous process with finite variation         and
with the finite quadratic variation    is that for which                for all
   . Continuous local martingales and those of finite variation behave in a similar
fashion.
254           STOCHASTIC MODELING IN ECONOMICS AND FINANCE



1.4.4 Theorem. Each continuous local martingale X of finite variation is con-
stant almost surely, i.e.,           for      outside a P-null set.
   Proof. Obviously we may restrict ourselves to the case that X(0) = 0.
   Assume first that the processes X and     are bounded, say
fix a        and choose a sequence of partitions                   Then, because
increments of                X are orthogonal by 2.12 (c),




Hence,                by the dominated convergence theorem and the uniform con-
tinuity of each        on      . The assertion now easily follows by the continuity of
X.
   Let X be a continuous local martingale, say w.r.t. a filtration         and      its
variation. Then       is continuous by 1.2 (b) and               by 1.3. It follows by
4.1 (c) and 4.2 (b) that                           defines an                sequence
for X such that         and                     are bounded processes. Hence, by the
first part of our proof, we get          for every        and taking the limit
we conclude the proof.
   The above theorem invites to combine the local martingales and the processes
of finite variation by linear combinations:
   Given a filtration        call a stochastic process X an                          if
X = B + M where B is a continuous                   process of finite variation and M
a continuous local                    Obviously,                        are continuous
and                processes.
   For our future purposes our notation will be as follows:




Sometimes we may prefer to be more specific about the home space of our processes,
thus we may also write                    or even                         . Also,
we point out that unlike a martingale we defined a local martingale and a
semimartingale only as a continuous process.
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                     255



1.4.5. Each semimartingale                    can be written in the form

(12)

which decomposition is (according to 4.4) unique in the sense that B,            and
M,     , respectively, are pairs of equivalent processes if                        is
another decomposition (12).
   Instead of (12) we shall frequently write                and call the right-hand
side the stochastic differential of X.
   Practically everything we could do in favour of                  where       is a
general filtration we have already done. For further purposes we lack the modifica-
tion stability as

(13)     If Y is a modification of an              X then Y is

It is obvious that we need filtrations     such that any       includes any P-null set
in where               is the underlying probability space. In other words we force
ourselves to believe that everything what certainly will happen (or certainly will
not happen) to our particle is known at the time
    Let          be a complete probability space. A filtration
of will be called a complete filtration if                   where

   Note that a complete filtration is defined only as a filtration of a complete
probability space which ensures that        is a hereditary class of sets, i.e., if
is a subset of an        then also             . As an exercise solve the problems
below to see how comfortable complete filtrations are:

1.4.6   Exercise. Fix a complete filtration     . . Then
   (a) If X is an              process and               are such that
       holds for all         then Y is an              process. In particular, (13)
       holds.
   (b) If     are             processes and                 such that
             holds for every       then the process X is also

   A test for a process X to be adapted is provided by

1.4.7. Let        be a complete filtration. Consider                  for        and a
sequence       of            times such that             almost surely.
   (a) If      are             processes then X is a process that also is
   (b) If       are              continuous processes then X is a process that is
                     and continuous almost surely.
   (c) If                   for all        then X is a process equivalent to a process
256              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

For (a) and (b) we do not need           to be Markov times.
   Proof.
   (a) Observe that                      and apply 4.6 (b).
   (b) This follows by (a), observing that      is a continuous function on            if

      (c) X is            process that is continuous outside a set          by (a)
         and (b). Thus,                is a continuous and            process such
         that         and                      for all . It follows by 4.2 (b) that
                   is a localization sequence for Y, hence                .

  Adapted processes may be constructed from processes that are defined on
only if

1.4.8. Let    be complete filtration and    a sequence of                     times such
that       almost surely. Further, let   be either a sequence of                      or
continuous           processes or processes in           such that

(14)

Then there is a process X that is               continuous              and in
         , respectively, such that in all cases        holds for all
We need the       to be Markov times only for the part that refers to the local
martingale property.
   Proof. It follows by (14) that for             where             and for all
                          as                Put              for all         and
  . Obviously, again by (14),                  and all above assertions follow by 4.7
because processes      are                 continuous              and in
respectively.
    Whatever mathematical profit we may get working in the setting of complete
filtrations we must build up a passage there from the uncompleted ones that would
preserve Brownian motion and the (local) martingale property.
    Let            be an arbitrary probability space and        its arbitrary filtration.
Denote by        the set of all         for which a P-null set         exists such that
           holds.. Observe that               if         is a complete space. Denote
                      and stay to denote by P also the unique extension of P from
             Note that              is the standard completion of              . Finally
denote                      for      to construct a complete filtration of the complete
probability space               . We shall say that     is the P-completion of          .

1.4.9. Let       be a filtration of a probability space          . Then
   (a) If W is a                            process then W is an                process.
   (b) If X is either an                 or         martingaleor
       then the same is true with       replaced by     .
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                          257

   Proof. Because any                               martingale,                   and
            process will keep the corresponding property if it is considered as a
process on the completion                  we may, without loss of generality, assume
that           itself is complete. If it is so, then              where
and     are independent                 The statements (a), (b) now follow by the (c)
statements in 2.8, 2.9 and 4.3.

1.5                                    and Density Theorem
     Denote




                     for        and finally                             for
         where, as you may remember,
  The space                  with convergence induced by the pseudometric
    provides a suitable operation field for handling continuous processes as the
convergence combines the uniform convergence on bounded intervals with that in
  . Next Exercise summarizes simple properties of

1.5.1 Exercise. Verify that
   (a)        defines a pseudometric on                 such that

     (b)                         iff                                     in   for all
                            in         for all

     (c)               and if M,               are in   then                  iff
               in     for each             .
     A deeper quality of         is given by

1.5.2 Theorem. For a fixed complete filtration                 the pseudometric space
is complete and          is a closed subspace.
   Proof. Let          be a Cauchy sequence in            observe that
for all       and          . Choose                     such that
holds for all          Then for any




if                  Hence, for any
258           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

It follows that there is an      with           such that          is a Cauchy,
hence a convergent sequence in       for      by 1.7. Denote its limit by
and put             for     . Thus, we have constructed a continuous process X
such that

(15)

and therefore the X is an adapted process by 4.6 (b). Also, Fatou lemma and (15)
yield for a fixed



hence           . Finally, fix        and choose              such that
                   By Fatou lemma and (15) again



if        therefore                   and finally
  To prove that        is a closed subspace consider              and             such
that                  holds. The convergence implies that                    in     for
any fixed       . Hence,



where all limits are in   .
  Before we shall proceed further test your proficiency in the following elements of
measure theory:
  Let               be a continuous function of finite variation such that B(0) = 0.
Recall that the variation of B denoted by      is an increasing continuous function
          with               by 1.3. Also denote                         and
           . Agree to write    or     for the locally finite Lebesgue-Stieltjes signed
measure defined on       by                   for       . Let
be Hahn-Jordan decomposition of              and                             its total
variation. Prove that

1.5.3    Exercise.        and     are increasing (continuous, starting from 0) func-
tions such that                                 and                  holds.
   Recall that                      and                 denote the spaces of all
adapted continuous processes B with B(0) = 0 of finite variation and increasing
on     , respectively. It follows by 5.3 that                                   where
the latter processes are                by 1.3. Thus,                    provides the
decomposition                    that is equivalent to Hahn-Jordan decomposition of
corresponding induced measures.
   Our aim now will be to give a sense to              where G is an
process and                  . An obvious idea is to integrate separately, if possible,
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      259

each trajectory       by Lebesgue-Stieltjes signed measure           induced by the
trajectory      . Denote




and




The process                               will be called the integral of a process
            with respect to a process                   where by           we have
denoted the space of all                processes. Note that          is defined as
a continuous process whose trajectories are of finite variation on     and we may
ask under what conditions it will also define an               process. For a pair
                           and        also denote




1.5.4. Let G be an                   process and B a process in              . Then
              and




   Having a complete filtration                         and                    agree
to write                 or                 if X is a process in           such that
             . Note that the latter differential shorthand means exactly that outside
a P-null set                 and the         is the Radon-Nikodym derivative of
       with respect to
   We leave our reader to apply 1.11 (b) and 5.3 to get a neat proof of 5.4.
   In some instances we may avoid the progressive measurability of the integrand
G:

1.5.5. For a fixed complete filtration  let G be a process that is
and                        Moreover assume that all its trajectories are locally
260              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

integrable with respect to the Lebesgue measure on           . Then                    is a
continuous and               process.
   Proof. Fix        and consider a sequence      of i.i.d. random variables uni-
formly distributed on      and defined on a probability space         . The joint
measurability of G implies that




Hence, it follows by strong law of large numbers that if              then




for all         . Combined with (19) it yields                    where




It follows that there is at least one           with             . Denoting
for



hence P-almost surely. The random variable                        is                   be-
cause            are              and the filtration              is complete.
   For the rest of the present section we will fix a complete probability space
          endowed by a complete filtration            and close it by establishing a
suitable approximation method to be used in our construction of stochastic integral.
   Consider              and define




for                       . Note that
      As in 5.1 it is easy to verify the following simple properties of

1.5.6 Exercise. Let            be a process such that                        for all
denote again                    and prove:
   (a) [G – H] defines a pseudometric on
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       261

   (b) [G – H] = 0 iff                      for all     and iff outside a P-null
       set                        almost everywhere with respect to the measure
       associated with     .
   (c)                 iff                            for all    and if and only if
                               for all          .
   (d) If      is a sequence in           such that              as               then
       there is a             such that                     .
  We are interested in finding a suitable simple dense subset of       Let
                     be a locally finite partition of    and     a bounded
measurable random variable for        . Then




will be called an              stochastic process. The set of              processes
will be denoted by                and we note that simple processes are
(the destiny of any trajectory         on         is determined by               and
left-continuous, hence                   and obviously                       for any
             with              for all

1.5.7    Density Theorem. Let        be a process such that                        for
     . Then for any           there are simple processes    such that




  Observe that the completeness of     is crucial in 5.7, again.
  When constructing a sequence             such that                      where
     we may restrict ourselves to bounded G’s.
  If           is a bounded continuous process, say                        then




where                              is a sequence of locally finite partitions of
with            defines        such that             and                 everywhere
on
   Thus it remains to prove that for every bounded process                 there are
bounded continuous adapted processes        such that (20) holds. The first step is
provided by

1.5.8   Lemma. If G is a bounded adapted                               process, then
262             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

defines a sequence of uniformly bounded adapted and continuous processes such
that



  Note that 5.8 does not require the progressivity of G.
  Proof. Obviously, if            then                 also and       are continuous
          by 5.5. Moreover, everywhere on



with respect to Lebesgue measure as         by the Fundamental Theorem of
Calculus. The Dominated Convergence Theorem now proves (21).
  To conclude the proof of 5.7 we may assume that


(hence with                , because if A does not posses the additional properties,
the                    does, and



holds for any bounded progressive process G.

1.5.9     Exercise. Let           be a process such that (22) holds. Put
                                           and
and consider an                    process G. Then
   (i)               is a complete filtration such that                        is an
                         process that is measurable with respect to
      (ii) If H is a continuous and               process then H(A) is a continuous
           process that is
   Consider A as in (22), a bounded progressive process G and define as in 5.9.
As a consequence of 5.9 (i) we are entitled to employ 5.8 substituting there simply
the complete filtration                 and            . Hence, there are continuous
uniformly bounded                   processes      such that
for all        By 5.9 (ii) we argue that                   are continuous uniformly
bounded                processes such that for all



holds. Because obviously



we arrive at (20) and 5.7 is proved.
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                         263


1.5.10 Corollary. Let A be a process in CI. Then for arbitrary                         a
sequence    of simple processes exists suchthat




   Proof. Assume first that A is as in 5.7: If G is a bounded process then there are
        such that                         for all        according to 5.7, hence such as
in (23). Further, for any               we put                      to get a sequence of
bounded progressive processes such that (23) holds. Observing that the convergence
(23) is generated by the pseudometric
we combine the above pair of convergences to verify 5.10 for our special choice of
A.
   Consider A and G as in 5.10. Denote                     where       is the first entry
of A to . According to the first part of our proof there are                   such that
                                     holds for all          Because                  and
              if        it follows that            as in (23).

1.6      Doob-Meyer Decomposition
   Throughout this section we shall fix a complete probability space
endowed by a complete filtration         .
   The following theorem provides the principal step towards the construction of
stochastic integral and shows that martingale and its quadratic variation are con-
cepts with a deep and rich relation.
   Let first                               be a locally finite partition of  , i.e.,
with          and put




and                 for arbitrary stochastic process M. Observe that             is
continuous adapted provided that M possesses the properties and M is a process
of finite quadratic variation iff      is a Cauchy sequence in probability for any
      and any sequence of partitions        with         . Moreover,




1.6.1    Doob-Meyer Decomposition. Let                  Then M is of finite
quadratic variation and  possesses a modification that belongs to CI.
   Agree to choose       any time we have
   Further,
264          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

and if                  holds for some other           then       . Moreover,



If M is a bounded martingale then                     is an
   The relation (24) will be referred to as Doob-Mayer decomposition of
   Before starting a rather lengthy and complex proof we shall make some prepara-
tory computations for              a partition and        such that
                                                  for some
Apply 2.12 (a) and (b) to get




Hence, if       are locally finite partitions, then


We shall also need the following upper boundary independent of the choice of



Because                we may assume that             say     Observe that




and use (26) to get
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       265

Hence,



The uniqueness of the decomposition (24) is a direct consequence of 4.4.
   Proof for bounded M. Let                    Our plan is to verify



as it implies directly that M is a process of finite quadratic variation and supported
by (27) it says that



By 5.2 there is a martingale             such that denoting




Check that (30) implies that the limit is independent of the choice of
If also         observe the mixed sequence
   The convergence (31) yields




Thus, the quadratic variation        is a modification of           which implies (24)
and (25) directly. To conclude the proof for bounded M it remains to show that
         is an increasing process almost surely:
   In (32) choose        such that         is a finer partition than     for all
and such that             is a (countable) dense set in      . Fix     a pair of points
in    observe that                        for sufficiently large      which yields




It follows that outside a P-null set the process           is increasing on the set
hence on       as         . We proved that       can be modified to a process in CI.
    To prove (29) consider partitions
            and                                 the partition generated by
For a fixed               define             as the maximal point of        such that
                            and compute
266              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

Note that                          is a martingale by (27), hence             as
        . Apply (26) and a simple inequality                     to see that for
any




Denote



Fix a              say             and apply (33) to verify




It follows by (28) that



By (34) we conclude that



Since                             is a submartingale and the partition           cofinal
in    , the inequality (35) implies that



holds for all        if            . It follows easily by the continuity and boundedness
of M that                     as                 and the convergence (29) is proved.
   Proof for                  Let         be a localization sequence for M such that
                are all bounded martingales. According the first part of our proof



We can also write



that implies
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       267

because of the already proved uniqueness of the decompositions (36). By 4.8 there
are continuous adapted processes A and              such that



The process A can be obviously chosen in CI. Combining (36) and (37) we arrive
to the equalities


and taking limit        there we exhibit the decomposition                      Every-
thing we need to conclude the proof is to verify



because this would imply that M is a process of finite quadratic variation,
is a modification of    and also the convergence (25), of course.
   For these purposes fix                and         and let         be such that
                Since              by (37), we have




as         because we have already proved (25) for bounded martingales.
   Recall that we have agreed that writing     for a local                   we mean
the modification which belongs to
   Consider processes M, N and                               a locally finite partition
of     For               denote




1.6.2     Theorem. Let M and N be in               Then the covariation of these
processes



defines a process in CFV such that
   If                     for some other          then                  . Moreover,
268           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   Proof. The uniqueness follows again easily by 4.4, for the rest apply Doob-Mayer
theorem and the equalities (39) jointly with




    In many cases our reasoning will depend entirely on our ability to compute
and         . Below we will present techniques that may smooth the computations.
    We will say that processes of finite quadratic variation M, N are orthogonal
if              Observe that                 are orthogonal iff their product MN
is in       and that their orthogonality implies

1.6.3 Corollary. Independent local martingales X and Y are orthogonal. In
particular, if           is an               Wiener process then


   According to 4.3 (c) and 4.9 (b) XY is a local                 -martingale, hence
             by the uniqueness part of 6.2 as the            does not depend on the
choice of a filtration by (25).

1.6.4     Corollary. Any continuous semimartingale dX = dB + dM, i.e.,


is a process of finite quadratic variation with            . If                 is also
a process in CSM, then
   Proof. We need to prove that for any             and any sequence of         where
    is a locally finite partition of


Because


(41) follows by (40) observing that the first three sequences tend to 0 in probability.
For example



everywhere on     because M is continuous and C of finite variation.

Important Remark A. Let                                   Since    is the limit in
probability of         it does not change if we replace         by       such that
          is a complete space,      its complete filtration,
and
   Very frequently we shall use
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                     269



1.6.5 Theorem. Let M, N be processes in                  and consider a Markov time
 . Then outside a P-null set




   Proof. Since


is in        by 6.2 and 4.1 (b), it follows again by the uniqueness part of 6.2 that
                       . The last equality in (42) is less obvious:
   Verify first that for all                 there is a constant          such that



whatever we may have a partition      . Hence, for any fixed




in probability by (40). Thus,                      again by (40).

1.6.6 Exercise. If               and              then                             is
a process in          and
   Moreover, if             define                             by
and                if     Prove that




1.7      Quadratic Variation of Local Martingales
   A complete probability space            and a complete filtration             will
be fixed again. We shall study interactions between a local martingale M and its
quadratic variation      . The first observation is that the quadratic variation and
covariation maps help us to recognize when                  are equivalent processes.
Indeed,



We are left to prove only that
   If          then               and by a localization,         and        are true
martingales for a sequence of Markov times             almost surely. It follows by
2.12. (b) that          for all      that completes the verification of
   The simple device (43) is extended by
270          STOCHASTIC MODELING IN ECONOMICS AND FINANCE



1.7.1 Mutual Continuity of M and                 . If            then outside a P-null
set and for all


holds. In other words, M and             have common intervals of constancy with
probability one.
  Proof. (a): It follows by the definition of     that for each pair of rationals
              there exists a P-null set     such that for


The continuity of M and       implies that for             and any interval


that proves     in (44).
   (b): We shall prove that there is a P-null set N such that outside N and for
any


According to 4.3 (b) we may assume without loss of generality that      is a right-
continuous filtration. Denote                                and recall 3.6 (b) to
confirm that is an                      It follows that                      hence
         by (43) that is exactly what we promised to prove.
   (c): Choose            denote                              observe that
              with


by 6.6. The part (b) of the present proof applied to          provides a P-null set
such that outside    and for any


Using again the continuity of M and           we verify       in (44) for             and
any interval
  We may deepen 7.1 a little combining it with 1.5 to get a local version of 4.4:

1.7.2 Corollary. Let dX = dB + dM be semimartingale in CSM. Then outside
a P-null set and for any interval
          is of finite variation on                            is a constant on
   Proof. The X is of finite quadratic variation with the continuous              by 6.4,
hence we may apply 1.5 to exhibit a P-null set N such that for                    and all
intervals
                  is of finite variation on
Combining the above implication with             in (44) we conclude the proof.
   The integrability of the quadratic variation of a local martingale forces it to be
a true martingale:
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                        271


1.7.3   Theorem. Let                  Then             if and only if
for any      If             then
   Proof. Let           almost surely be a localization sequence for M such that
        are bounded martingales. Then                   is a true martingale by the
last statement of 6.1 and therefore


First assume that             Apply the monotone convergence theorem, (45) and
finally the submartingale part of Stopping Theorem 3.11 to see that



If               then by Fatou lemma, (45) and the Monotone Convergence The-
orem



hence            for all       . Having fixed        we note that                  is a
sequence of uniformly integrable r.v.’s because


again by (45). Hence,                      in     and if        it follows by 2.7 (f)
that


where both limits are in . Hence
  Finally, if           fix   and note that



by Doob inequality 2.10 (b). Hence, it follows by 4.2 (a) that          is a martingale
for any      which is exactly as to say that

1.7.4 Exercise. Use the polarization                                           and 7.3
to prove


Hence,


Prove also
272           STOCHASTIC MODELING IN ECONOMICS AND FINANCE



1.7.5    Exercise. If               and        Markov times then for any




and by polarization of (46)




  The equalities (46) and (47) may be applied to determine the quadratic variation
and covariation:

1.7.6 Exercise. Let M, N be martingales in             Then          is the only inte-
grable process in CI for which



holds. Similarly,         is the only integrable process in CFV with the property




  Recall that       as a closed subspace in       is a complete pseudometric space
by 5.2 with convergence            that is equivalently defined by




according to 5.1 and 7.3.
   For local martingales the above equivalence has the following simple form:

1.7.7   Continuity Theorem. If                       and a       fixed then




  For the proof we need

1.7.8   Lenglart Inequality. If                and            then
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                 273

   To prove the inequality denote by the first entry of          into      . Then
         implies that             and by 7.3 we arrive at



Consequently,




by Doob inequality 2.10 (b) which completes the proof of the inequality.
   Proof of 7.7. By Lenglart inequality,                    implies




To prove the     part consider        and denote by   the first entry of
into      . Because                is a bounded martingale, it follows by 7.3 that
                                              for any       and




that verifies
   We shall also need

1.7.9   Kunita-Watanabe Inequality. For                                       and




holds almost surely for any

Remark. Recall that for a               we defined the space            as the
set of all              processes K such that                almost surely for
any          Having                     we agree to relax our notation letting
                                         and
   Note that Kunita-Watanabe inequality also says that
274          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   Proof. Note that the proof may be relaxed to K and H bounded by the Monotone
Convergence Theorem.
   Assume first that K and H are              processes, without loss of generality
such that




where                               is a locally finite partition of   and
bounded                   random variables. Fix          and assume, again without
loss of generality, that          Let                                         be a
sequence of partitions of     with              such that
for all        Applying successively 1.3 and 1.6 (b) we prove the inequality:




the last term being exactly the right-hand side of Kunita-Watanabe inequality.
   If K and H are bounded processes then                     where
                     and 5.10 applies to exhibit for a fixed     approximations

                                                              almost surely,

where         are simple processes. Hence, outside a P-null set the integrals



tend to zero as           The inequality for K and H follows now easily applying
the inequality already proved for
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       275

1.8      Helps to Some Exercises
   1.4 To verify the         part of the equivalence you need to prove that the prob-
ability limit in (1) does not depend on the choice of           You will achieve this
considering a mixed sequence                                        where
  and
  1.6 Use the “limit definition” of               and the trivial inequalities
           and
   1.7 To prove (c) apply Lindel öf Theorem to prove that any open set in              is
a countable union of open neighbourhoods
  2.12      In (d) observe that                              As for (e) compute as in (8)




where                                                          and perform
   3.12 Assume that all         are integrable and that                           for all
at most two valued Markov times     Fix               define
and check that is a Markov time. Hence,



which proves that X is a martingale. The rest follows by 3.10.
  3.16 Use the reflection principle and differentiate




to obtain        in the form




and integrate the right hand integral by parts.
   5.6 Put                                  for           Because                   is
a random variable on                by 5.4 (i), the is defined correctly as a measure
on     such that                       for any        A standard procedure 1.11 (b)
shows that                                 for any progressive          In particular,
                          for all       and all                Hence,



This interpretation proves all four statements. As for (d) recall that
                    is known as a complete pseudometric space provided that the
276             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

distance of  and    is given by                    This and a simple projectivity
argument imply that         is also a complete pseudometric space if the distance
of    and   is given as
  5.9        is an                   process by 1.3.9 because         are finite
Markov times. Obviously



holds. It follows that is an                   process (continuous and
and therefore measurable as



It follows that                       defines a process that is measurable as



which verifies that                             because
   Let H be continuous and without loss of generality bounded                      pro-
cess. Because there are             processes     such that
the problem of proving (ii) reduces to verify that                 where
and                  is an             process. But this follows easily as




  6.6   If an                time stops M to                 then                  is an
                time such that



holds because                                            Check that
and compute                                   for a sequence
   As for the second part observe that if an              time stops N to an
martingale then         is an              time that stops    to an
Compute                    as the probability limit of                      where
             and            for all
  7.4    In (iii) let     be a localization sequence such that               for all
and         Then                 and according to (ii)




where the                         interchange follows by 2.7 (g) as
                   by 3.10.
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                    277

III.2 Stochastic Integration

stochastic integral, stochastic per partes and Itô formula, exponential martingales
and Lévy theorem, Girsanov theorem, integral and Brownian representations, helps
to some exercises

   Through the present chapter, if not stated otherwise explicitly, we fix a complete
probability space          with a complete filtration

2.1        Stochastic Integral
     We begin by a very standard procedure and define the stochastic integral of
an             process                                 i.e.

(1)

                   bounded,

with respect to a local martingale                     by


(2)


where        and                Observe that our definition is independent of the
choice of the partition                          and that         is a continuous
            process. Even more is true:

2.1.1      Stochastic Integration - a Junior Grade. Let                          and
          Then                 and

(3)                                               holds for all

Moreover, if                  then also
  Proof. We shall perform the proof in several steps:
  (a) If                 then                          Obviously,         is
measurable and in         If K is as in (1) let       and assume without loss of
generality that     and            Then
278          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

because            It follows that
   (b)                     for arbitrary             If is a Markov time such
that      is in         then according to (a)                             and
                 by an obvious localization.
   (c) The relation (3) holds for any M and N in        Let                as
before. Then straightforward computations via 1.7.6 provide




which proves (3) again by 1.7.6 because                     is in CFV.
   (d) The equality (3) holds for arbitrary M and N: This follows by a localization
of (c), since for any Markov time such that                       we may compute,
using repeatedly 1.6.5,




   A good idea for a general definition of the integral seems to be offered by (3):
For             and                  a stochastic process                  shall be
called the stochastic integral of G with respect to M if




We shall also use notations as:                      and
        and relax our notation to
                or                               etc. as before.
   The integral                 in (4) is a continuous and adapted process by 1.5.4,
since                            according to Kunita-Watanabe inequality and there-
fore we may modify the definition of            as

2.1.2. The stochastic integral         is almost surely uniquely determined by the
requirements
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       279

or equivalently by



   Indeed, if a process             is another one that satisfies the requirements (5),
then                     and therefore              by 1.7.1.
   If there is an             such that                          holds for all
take              arbitrary and consider a sequence of Markov times             almost
surely such that                for all         Then outside a P-null set and for all



holds. Letting          we get by continuity that I satisfies (5), hence
according to the first part of 1.2.
  Denoting

                                                     such that         exists}

we observe that A is a nonempty set. Indeed, any pair (M, K), where
and K is a simple process, belongs to A and the corresponding stochastic integral
       is given by (2).

2.1.3    Theorem. The stochastic integral             exists for any              and

   Here are the principal properties of the stochastic integral.

2.1.4    Quadratic Variation. Consider M,
          Then




2.1.5   Localization Lemma.                                             and consider a
Markov time    Then                                           and



holds. In particular,

2.1.6    Linearity of the Integral. If                                 and
then
280            STOCHASTIC MODELING IN ECONOMICS AND FINANCE



2.1.7                  If           and                   then                 and it
is a process with               such that




hold for all

Remark. Recall that the spaces          and              (see 1.5.1 and 1.5.6) are en-
dowed by the pseudometrics                and                                  respec-
tively. Denoting

                                                we get


and thus              defines a pseudometric on         equivalent to that given by
            (the inequalities in (11) follow by 1.2.10 (b)). The statements of 1.6
and 1.7 now can be read as follows:
  For any fixed            the map               from              to      is a linear
map such that                      holds for all
  The above isometry is the cornerstone of all definitions of the stochastic integral.

2.1.8 Localization of Integrands and Integrators. Let              be a Markov time.
Then for any           and




   Proof of 1.3, 1.4, 1.5, 1.6 and 1.8. The next steps will constitute the proof of
the above statements:
   (a)   1.4 holds for all pairs (M,G) and (N, H) in A: It follows by 1.2 that



hence by the chain rule for the Radon-Nikodym derivations we simply compute
that                                 which verifies 1.4 on A.
   (b)   1.5 holds for              and arbitrary Markov time           Consider any
             and       According to 1.6.5 and 1.2, we get that
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      281

holds almost surely. This proves that               and consequently            are in
A and both equalities in (8).
   (c) 1.6 holds for                    because            is a linear space and the
covariation is a bilinear form on
   (d) 1.7 holds for any              such that               and                    It
follows by (a) that                            holds for all        the latter integral
being an integrable random variable by the definition of the space              Hence
                by 1.7.3. If                                  and it follows by 1.7.4,
1.6.5 and by (a) that




   (e)               for any            and                 Because
by 1.7.3, it follows by 1.5.7 that there are simple processes     such that
           Hence,                                             as             by 1.7
and the subsequent Remark. It follows by 1.5.2 that                        where I
is a process in       Denote                 choose           and        It follows
by 1.1.6 (b) and 1.7.3 that



Further, by Kunita-Watanabe inequality,




Combining both of the above convergences we arrive at
for any         and       which shows that         exists by 1.2 (6).
  (f) 1.8 is true for all (M, G) and (N, H) in A and arbitrary Markov time
Choose            and        Then by (a) and (b) we get




This, of course, implies that
   (g) Any (M, G) with               and                belongs to A: Choose
such a pair and a sequence of Markov times          such that            and
                      are bounded processes for any       Consequently,
282            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

      and                  because
Hence, according to (e)                 with                     and
           according to (f). It follows by 1.4.8 that there is a process
such that                 holds for any          Further, for any                   and




holds almost surely. Letting               in the above equality we get
             for all         and            which, by definition, means that

     For                 denote

2.1.9. If              and             then outside P-null set and for all intervals
               either G = 0 almost everywhere with respect to          on        or
                    implies that
     The implication is an obvious consequence of 1.7.1 applied to the local martingale
          whose quadratic variation is equal to
     If            is such that              then we shall agree to write
or

2.1.10 Stochastic Chain Rule. If                                       dN = GdM and
                then          and                                which equality reads in
the differentials as




   Proof. According to 1.4                   hence                                and
therefore                 Consider finally a                and apply (7) in 1.4 twice
to get



what, by definition, yields

2.1.11      Exercise. If                             then                           and
                                     holds for all
  The continuity of                  that maps            into         is most precisely
expressed by
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      283


2.1.12 Continuity Theorem. For any                     G and         in




and in particular,




holds for any fixed
   The equivalence follows directly by 1.4, 1.6 and 1.7.7 and permits to transfer
a variety of Lebesgue-Stieltjes integral convergence theorems to the theory of the
stochastic integral. We shall manage with

2.1.13 Dominated Convergence. Let                          Assume that         and H
are processes in       such that                      on           for a fixed
Then either         on           or                         uniformly on       for all
       implies that
  Thus, we get

2.1.14 Riemann Integration. Let M be a process in
   (a) If K is a process given by (1) with random variables                   that need
not be bounded then                and the stochastic integral              is a process
given by (2).
   (b)     If F is an adapted continuous process then for any fixed                 and




   Proof. Denote                       observe that         are simple processes and
therefore




if              and                         Letting           we verify (a) by means
of 1.13.
   According to (a) we have                                                      where
                                Obviously                    uniformly on        for all
         and 1.13 applies to prove (b).
   Corollary 1.5.10 and 1.12 apply to verify
284           STOCHASTIC MODELING IN ECONOMICS AND FINANCE



2.1.15 Limit Definition of Stochastic Integral. Let                           and
            Then         is almost surely a unique process in             such that for
arbitrary sequence of simple processes




where           is a process defined by (2).

Important Remark B. The limit definition provides an argument for the follow-
ing statements: Let                     and                    Recall the Important
Remark A we put forward at the end of 1.6 Section of our text.
    (1) The stochastic integral           does not change if we legally change the
        underlying filtration.
           More precisely, if                    is another complete filtration such
        that G is a                  process then                                and
                                             It follows by 1.5.10 and 1.12 that the
        stochastic integrals of G with respect to M on the filtrations      and
        respectively, are equivalent processes.
    (2) The stochastic integral does not change if we replace the underlying prob-
        ability measure P by a                                                   and

           Indeed,                   continues to be a complete filtration and because
        obviously                                    the integral        is defined also
        in the setting of the filtered space                 It follows again by 1.5.10
        and 1.12 that both the P-integral and the Q-integral             are equivalent
        processes with respect to both P and
Solve the next pair of exercises to accommodate the properties of the stochastic
integral.

2.1.16 Exercise. Consider an                 process W and a Borel measurable
function              such that                 for all       Then       is a
centered Gaussian process with independent increments such that for all




holds.

2.1.17 Exercise.
    (i) Consider                                and finally a                 such that
        G = 0 on          Obviously,                         prove that
                 III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                  285

     (ii) If            and         denote                              and recall
          that                  by 1.6.6. If, moreover              then obviously
                                                   Prove that outside a P-null set


     Let         be a continuous semimartingale with the stochastic differential
                  for a           and an               Recall that the differential
formula stays for X = X(0)+B+M and the decomposition is unique almost surely.
Denote                                    and define the stochastic integral of a
process                 with respect to X by




If            is such that              holds, we write               or
    The process            is a semimartingale in CSM according to 1.5.4 (iii) and
according to the definition of the stochastic integral. It also means that
                    is the unique decomposition of the left-hand side semimartingale
into the continuous finite variation part and the continuous local martingale one.
Hence, in differentials our definition reads as
   It should be stressed that (13) defines the stochastic integral with property
                             for any           and the integral of a G with respect
to a continuous local martingale M as
   The domain of this integral enables us to apply the common fundamental proper-
ties both of the Lebesgue-Stieltjes and the stochastic integral, the domain
being importantly large enough for any X to include continuous adapted processes
or more generally locally bounded progressive processes. Recall that a process G
is locally bounded if all its trajectories are bounded on all bounded intervals.

2.1.18 Quadratic Variation. Let X and Y be processes in CSM with stochastic
differentiate              and                   Consider also processes
            and            Then outside a P-null set



holds.

2.1.19 Dominated Convergence. Let          and assume that                      and
F are processes in    such that       on         for a fixed               If either
           on      or             uniformly on     for all                      then



2.1.20   Chain Rule. Consider                  and                    denote
         Then for any                we get                 and
or equivalently
286             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

Moreover, if both G and H are processes in          and either G or H is a locally
bounded process then                 and the above Chain rule formula holds.
   The first assertion follows by a combination of Radon-Nikodym Theorem and
the Chain rule formula 1.10.
   As for the moreover part chose X as dX = dB + dM and note in both cases
                      and                     hold almost surely for arbitrary
Hence, Radon-Nikodym Theorem implies that                    and Chain rule for-
mula follows by the first part of 1.20.

2.1.21 Riemann Integration.           If          and F is a continuous adapted
process then for any and




2.1.22 Localization of Integrands and Integrators. Let          be a Markov time.
Then for any          and any



2.2      Stochastic per partes and Itô formula
  The following summation equality yields both the Lebesgue-Stieltjes and sto-
chastic per partes integration formulas:
  Let X and Y be continuous processes,                                       a
partition of    Then




2.2.1 Lebesgue-Stieltjes Per Partes. If X and Y are processes in CFV then
XY is also a process in CFV such that



holds for all        In particular,
   In differentials we read 2.1 as


We get (15), hence 2.1 as a whole, by passing             in (14) where the second
term tends to 0 because the trajectories of X are uniformly continuous on      and
because
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      287


2.2.2    Stochastic Per Partes. Let X and Y be processes in CSM. Then XY
is also a process in CSM such that outside a P-null set and for any



holds. In particular,
  In differentials we read 2.2 as


To verify (16), which equality already implies that               consider (14) for a
sequence of partitions               then apply the definition of        and 1.21.
   Writing the formula (16) for local martingales                     only, we spec-
ify the local martingale term in Doob-Meyer decomposition of            and of MN,
respectively:                         and
   Next pair of examples suggests the advantages of the differential symbolic:

2.2.3   Example. Let us establish the Doob-Meyer decomposition of               where
               is the Wiener process with a linear trend:


i.e., the decomposition reads as

2.2.4 Example. Let X and Y be processes in CSM. Then                   is a process in
CSM, too, by 2.2 and according to (16), 1.6.4, 1.10 and 1.4 the stochastic differential
      equals to




  It is only natural to consider a                   semimartigale X where

and a continuous            asking a question under which circumstances      is
also a semimartingale in CSM and what form its stochastic differential     has.
A complete answer is available for                   where, as usual, we denote
by        the set of those           that have continuous derivatives


on an open set         for all
   Agree to read (18) as               and observe that putting
we may rewrite (17) as



to be true for any                           It is easy to extend 2.4 by induction.
288           STOCHASTIC MODELING IN ECONOMICS AND FINANCE



2.2.5   Exercise. Let X be a process in      and                       a polynomial
           Then the formula (19) holds, and in particular,           is a process in

  To extend 2.5 further, we obviously need

2.2.6 Weierstrass Theorem.           Let          be an open set. Then for any
         there are polynomials                 such that for all compacts




   Proof. First fix an            a compact          and       According to a deep
extension of the classical Weierstrass theorem, see [142], pp. 596/2-596/3, there is
a polynomial            such that



where                           Because G is a separable and locally compact metric
space there is an increasing sequence of compacts          such that           and
such that any compact           is already subset of some      Putting
for a sequence          we complete the construction.
   The case          in 2.6 is the only one which does not require a sophisticated
treatment.

2.2.7 Exercise. Prove 2.6 for
  The next theorem is the true cornerstone of Stochastic Analysis.

2.2.8 Itô Formula. Let G be an open set in                         and
such that         everywhere on            Then the process       is in CSM and its
stochastic differential is given by (19) which means equivalently that




holds almost surely for any        In particular,




holds if we choose
   Proof. Note that the integrands in (21) are continuous adapted processes, hence
      is a process in CSM if the formulas are true.
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                     289

   Choose       as in (20). It follows by 2.5 that for any fixed      and




holds almost surely. Fix        and         and consider compacts



Obviously,                              and because all the convergences stated by
2.6 are uniform on arbitrary      we conclude that for all          and uniformly
for



holds as            Itô formula (21) follows if we let              in (22) and apply
1.19.
   Later on we shall appreciate the following local form of Itô formula: Having a
function       defined on a subset of          we denote

                                               and

at those                   where the derivatives exist.

2.2.9    Corollary. Consider T > 0 and                                  Let     be a
continuous function defined on            such that      and       exist continuous
on                 Let              be a process such that                    for all
                   Denote                      for       and choose
arbitrary. Then     is a process in CSM with the stochastic differential




where




   Proof. Note that Y is a continuous adapted process, that processes
and         are in          because they are adapted and locally bounded. Hence,
(23) defines a continuous semimartingale if the formula is true.
290           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

  Fix U < T and           Let           and apply 2.8 to get




In (25) we have denoted




and observe that these are processes in              such that
        and                uniformly on [0, T ] for each       where
and          are processes defined by (24). Theorem 1.19 and the equality (25)
finally prove (23).

2.2.10   Example and Exercise. Consider two models for a two-dimensional
motion (X, Y) with X(0) = Y(0) = 0:




where W and            is Wiener and two-dimensional Wiener process, respectively.
  In both models                X is a centered Gaussian process with
                        by 1.16 and
  Define                       compute the stochastic differential of C and the
expectation        in both models.
  Stochastic differential equations, shortly SDE, provide a method how to
generate a rich class of diffusion processes        that satisfy the equation
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       291

where W is an                process,               Borel measurable functions such
that                                       i.e. such that




The equation (26) is called              any            such that (26) and (27) hold
is called a solution to (26) with the initial condition    To meet purposes of our
treatment of the diffusion financial mathematics in Chapter 3 we do not need more
than to be able to solve a general linear equation 2.13. Next two examples show
its possible applications.


2.2.11 Example and Exercise. Langevin Equation. The velocity of the
motion of a Brownian particle in a viscous environment is a solution to Langevin
equation:



where    represents the starting position of the particle,     the viscosity coefficient,
in physics making a sense only if
   Modify the deterministic solution of                      and prove that




is up to a P-null set the unique solution of (28). The process X is a Gaussian
process by 1.16, called Ornstein-Uhlenbeck process. Compute

2.2.12 Example and Exercise. Geometrical Brownian Motion. Solve the
SDE



where W is a Wiener process and            real numbers. Again, we easily guess the
solution




and verify the validity of our guess by Itô formula.
   According to 2.13, the solution (30) is determined almost surely and the process
                         is called the geometrical Brownian motion. Also ob-
serve that the latter multiplicator is a continuous martingale by 1.2.6 and therefore
292          STOCHASTIC MODELING IN ECONOMICS AND FINANCE



2.2.13 Doléans Equation. Let V and U be processes in CSM and                   Put




Then X := ZY is the almost surely unique solution to the equation




   Proof. Obviously              and                by 2.8 and therefore by 1.18

   First we shall prove that the X solves the equation: X is a continuous adapted
process and therefore the right hand side of the equation is a process in CSM.
It follows by 1.20 and by 1.18 that                            and that
             and therefore                  Integrating per partes and substituting
the above information we get



Since            we proved that X is a solution to the equation.
   If a process X solves the equation then             and putting                we
get again            Integrating per partes and substituting             we get



It follows by 1. 18 that                 hence                           and since
          we get
   Choosing in 2.13                                  and
          respectively we get the equations in 2.11 and in 2.12 as special cases.
   Some strange things may happen when diffusion processes are involved (see also
[153]):

2.2.14 Exercise. Consider a planar motion given by



where W is a Wiener process and                        Let
be the distance of the particle from the origin at time Compute       and prove
that   is a deterministic process.
   Our reader may need some more exercises to master the calculus offered by Itô
formula. A variety of examples and exercises is provided by [111].
   To close the present section we introduce a fragment of higher dimension
technologies we shall need later on.
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       293

   Having a matrix            we denote by               the transposition of the A,
by       its product with another matrix B, by        its inverse, if defined. Agree
any                vector C to be looked upon as an                   if involved in a
matrix algebra computation. Also agree that if A is an                   of integrable
functions then       denotes the                the elements of which are given as

   Consider a                semimartingale                                and an
                         of progressive processes such that                 for all
  involved. Further we write                 and define the stochastic integral of
G with respect to X as an                semimartingale
where



The integral will be denoted by           or as          as usual we shall also write
              We will also simplify our notation writing                        if all
     are local martingales.
  Recall the definition of the integrals           and compute that




if                   where             and              Note that the integration
of an                G by a semimartingale             results in an
process in       while        results in an                   matrix of progressive
processes if the integrals           are defined. It may help you to observe the
differential    as the column vector                   and the differential    as a
scalar.
   Multidimensional Chain Rule Formula needs a more refined treatment, see also
2.19. The assertion 1.10 applies to prove

2.2.15 Chain Rule. Let                     and                    be an
denote          Let H be an                           of progressive processes such that

                                 holds for all

Then                 and                         are such that

                                   or equivalently

is true. Especially, the Chain Rule Formula holds if either of the following conditions
holds:
    (a) H is a matrix of locally bounded progressive processes.
   (b) G is a matrix of locally bounded processes and processes                  are in
         for all
294              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

  Indeed, if the integrability requirements of the first statement are satisfied then
we argue by 1.11 and 1.10 that




Consider finally a                                  process                    an
            vector                         and an                      of progressive
processes such that



holds almost surely. We define a semimartingale                               by




where                      writing also,



to reflect the symbolism we have just introduced. Agree to call such a process Y
an                  Itô semimartingale with coefficients C and S.

2.2.16 Gaussian Itô Semimartingales. If   and     in (31) are deterministic
processes then Y is an         Gaussian process such that



where            denotes the covariance matrix function of Y.
  Y is a Gaussian process due to 1.16 because                               are inde-
pendent processes. Apply 1.7.4, note that                           and finally 1.4 to
verify that




Call a                  S of progressive processes       uniformly positive definite
if there is an        such that


holds.
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                        295



2.2.17 Exercise. Let A be a     matrix such that                              holds for
an       and all      Then A is a regular matrix such that
holds for all

2.2.18    Orthogonalization of Itô Semimartingales. Assume that Y is a
             Itô semimartingale (31) such that the matrix is uniformly positive
definite and such that all    are bounded processes. Then




correctly defines a              Itô semimartingale such that                     holds
almost surely.
   It follows by 2.17 that all processes         are bounded and of course pro-
gressive. Hence,                    and therefore the stochastic integral
is well defined. Further, the processes      are supposed to be bounded, hence
                and the relation between Y and       follows by 2.15.

2.2.19 Chain Rule. Let Y be an Itô process (31) with locally bounded coefficients
C and S. Then for any                               the chain rule formula reads
as follows:

                                        and

In other words         is an                  Itô process with coefficients        and

   Read the definition of the set            to see that a matrix H belongs to the
set iff              is true almost surely for all
   Denote               and                 and note that both     and      satisfy
requirements of 2.15 (b) and then apply 2.11.

2.3      Exponential Martingales and Lévy Theorem
   We start with a simple problem: What functions                             are such
that           is a local martingale whatever may be given                    Because
             and also                  we get




if                    holds on    and therefore                is a local martingale.
Choosing                            where          (the set of all complex numbers)
we get
296           STOCHASTIC MODELING IN ECONOMICS AND FINANCE



2.3.1. If              and         then



is a complex local                      i.e. a process with states in     such that both
    and    are local
   If             we shall denote                             and call it the expo-
nential of M. It follows by 2.13 that          is the only solution to the equation
                     with the initial condition X(0) = 1 which provides an alter-
native proof that       is a local martingale.
   Note that if W is an              process then, according to 1.2.6,          is a
true martingale for any

Important Remark C.
  (a) If        and             then            is a local martingale and therefore a
      supermartingale by 1.4.2 (c). More importantly, if T > 0 is arbitrary then
                is an               on [0, T] if and only if                 holds by
      1.4.2 (d).
      In 3.7 we shall present an example of            that does not posses the mar-
      tingale property on [0, 1].
  (b) If         and              are such that                        then,
      is a true complex martingale, i.e.      and        are in CM by 1.4.2 (a).
  Apply 1.16 to prove:

2.3.2     Exercise. If             is a Borel measurable function with
for all      and W an                process, then




is an                or equivalently,                   holds for all
  Now we shall state a theorem that is, by its importance, the next to Itô formula
and is, indeed, one of the cornerstones of Stochastic analysis.

2.3.3     Lévy Theorem. Let                            be a                   continuous
             process. Then X is an               process if and only if
                             and

A local version of the statement is as follows:
   If, for a fixed T, the stopped process    is in            with
for             and            then X is an             process on the interval [0, T].
   Applying Doob-Meyer Theorem we get as a corollary
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                    297


2.3.4 One Dimensional Lévy Theorem.
   (a)       process is the unique local martingale                           with

   (b) A one dimensional process M is              iff M and                   are
       processes in
   What an exciting property of the normal probability distribution. To verify that
a continuous motion M is Brownian you need only to test the martingale property
of the motion itself and of its transformation

Remark. We cannot avoid the assumption on the continuity of M in (b) :
   If        is the right-continuous Poisson process with the intensity       then
           and                  are martingales.
   Agree to call a continuous and adapted process X a local                     on
[0, T] if, as in 3.3,                            Prove

2.3.5 Exercise. A continuous adapted process X is a local martingale on [0, T]
iff there is an increasing sequence           of Markov times with
such that                 is a martingale for all
   Proof of 3.3. Taking in consideration 1.2.2 (c) and 1.6.3 it is enough to verify
the implication stated by the local version of the theorem.
   For any                              the linear combination defined by
                    is a process in       with

                                                                 and with




Because                                            for any        the local martin-
gale         is a true complex                as we have already stressed in (b) of
the preceding Important Remark. If              and          is a bounded random
variable, then




Read first the equality with Y = 1 to see that
298           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

where              denotes the characteristic function of the increment
Putting there               for a            and           we get




where                is the characteristic function of                    random vector
                   and       the characteristic function of      Because (33) and (34)
are proved for arbitrary                                (33) implies that
has the normal distribution                       and (34) that it is independent of F.
It follows that X is an             process on [0, T].

2.3.6      Exercise. Let             be a two-dimensional                 process and
            an                 process. Then



defines another              process on the underlying probability space.
   We promised to exhibit an example of a nonnegative integrable local martingale
that is not a true martingale.

2.3.7 Example and Exercise. Consider an                         process W and a se-
quence        such that      Put




Obviously,               and since                 by 1.8 there is a continuous
        process                          such that              hods for any
Observe the process                     defined by                 and apply 3.4. (a)
to prove:
   (i)                                        is an            time such that
almost surely
  (ii) If                                        then
Especially,                almost surely on      and               on
  (iii)              is an nonnegative local martingale, hence a supermartingale,
hence an integrable local martingale. Obviously it is not a true martingale.
   (iv)           is local martingale whose exponential             is not a true mar-
tingale.
   The next theorem is a sophisticated inverse to 3.1
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      299



2.3.8   Theorem. Let M be a continuous adapted process with                      and
          Denote




Then                with          if and only if                   for all

   Proof. The       part is provided by 3.1. As for      assume first that M and B
are bounded processes, say                      Then
       Hence,     is a true martingale for each          by 1.4.2 (a). If        and
        then




It follows from




that




Therefore we may differentiate twice (35) and put         to get




for all       and            This is exactly as to say that M and            are both
true                  it follows by 1.6.2 that
   Finally, let          almost surely be a sequence of               times such that
                           It follows that




is a local martingale for any       according to 1.4.1 (b). Hence, for any
the process       is a true              with                  by the first part of
the proof. It follows by definition that               and letting          we get
300           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

2.4      Girsanov Theory
   We shall study what happens with a local martingale                      and
with a                   process W if we replace the probability measure P by a
probability measure Q such that P ~ Q.
   Assume first that             and denote by               and             the
restriction of P and of Q to the              respectively. Obviously,       for
       Denote                and                      Observe that if N is a
          and then                      for all       Moreover, if      and
then


and therefore,

                            D is a

Even more generally:

(37)     If N is a                      then         is a

Note that there is no reason to expect that D can be modified to a continuous
process.
   Denoting



we are in a better position because if            then the derivative process
      is a continuous                  with         almost surely for all            It
follows by 1.3.13 that D is a continuous martingale with trajectories that are outside
a P-null set positive functions on     Without loss of generality we always choose

                       as a positive continuous                 denoted by

and call it the derivative process of a                with respect to P.

Important Remark D. Let
  (a) Since         and P-null sets coincide,            is a complete probability
      space and                 a complete filtration.
  (b) The Important Remark A in Section 1.6 says that if           then a stochastic
      process X is of a finite quadratic variation on           if and only if it has
      the property on             and the P-quadratic variation of X equals almost
      surely to its               variation.
  (c) Note that               implies              Because for any          we have
                       we are always allowed to choose            as
                 III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                  301

Also remark that the logarithm of the derivation process D := D( |P) is by 2.8
a semimartingale in CSM(P) with the stochastic differential given by




(39)     where                defines an                 with

  We are now prepared to prove

2.4.1    Theorem. Let            be a probability measure with the derivative
process D := D(Q|P). Consider an           process N and
Then
  (a) N is a                    martingale if and only if         is a
martingale.
   (b)                         is a process in
   (c)   If M is a                process then     is                process.
   Proof. Due to the symmetry stated by (c) in the Important Remark D it is
enough in (a) to verify only         implications. For a -martingale N we have
already proved and stated in (37) that DN is a P-martingale. So assume that N is
a local -martingale. According to (37) there is a sequence of Markov times
such that                  is a P-martingale for all         Thus, D(N – N(0)) is
a P-local martingale and DN has also the property because DN(0) is a P-local
martingale by 1.4.1 (d).
   We apply 3.8 to prove (b). We shall consider a            and prove that
                    is a continuous local -martingale:
   Because                      it follows by (38) and (39) that outside a P-null set




holds. Hence a combination of 3.1 and (40) proves that        is a continuous local
P-martingale and finally that     is local -martingale by (a).
   If M is a                process, then                 by (b). Since
             for every        -almost surely by 1.6.4 and by (b) in the Important
Remark D, 3.4 (a) implies that     is a                process.
   Let P,    and D be as in 4.1. It follows by (b) that for any                 with
the stochastic differential
302              STOCHASTIC MODELING IN ECONOMICS AND FINANCE

defines a process                     It is important to note that even though the
processes X and       are identical as continuous adapted processes, they have own
separate identities as semimartingales in CSM(P) and CSM( ). To understand the
following important theorem properly, keep in mind that the identity on the space
CSM is given by


where

2.4.2 Theorem. Let P, and D be as in 4.1,                and X processes in CSM(P)
with the stochastic differentials                   and dX = dB+dM, respectively.
In what follows the identities are almost surely with respect both to P and .
   (a) The map               defined by (41) is a bijective map
        especially CSM( ) = CSM(P) as sets of continuous adapted processes. The
        map             defined in (b) is bijective map
      (b)

      (c) If                   then                  and                      especially
                             holds. If moreover                   then
            holds almost surely.
   Proof. The assertion (b) is obvious, see Important Remark (b).
(a) If            an easy computation shows that
and therefore            by 1.4.4. Since            we have also                   hence

   If              is a process with                  apply 4.1 for                   and
derivation process      to see that the process X defined by



is a process in CSM(P) such that             This, of course, also proves the bijectivity
of
(c) If G is a process in                                         then the integrals




are finite almost surely for all        by 1.7.9 and therefore                To verify
the first equality in (c) it is sufficient to prove that



(this follows directly by 1.4), and that
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      303

If                is an arbitrary local martingale then         for a
It follows by (a) that



which proves that
  Theorem 4.1 is not easy to apply. Mostly we are in a possession of
           a positive continuous
           such that each     is a probability density w.r.t. measure P
rather than of a probability measure           which would yield a derivation
process D( |P). Having a D as in (41) we are able to construct a        such
that D = D( |P) if, for example,
(42)         there is a positive probability density w.r.t. P, say
             such that the martingale D is closed by
             which means that                      holds for all
choosing simply                Indeed,                                       for all
         and     and therefore            and D = D( |P).
  The most obvious exhibition of a process D such as in (42) is as follows: Choose
an              and T > 0 to fulfil



recall (a) in Important Remark C, we made before stating 3.3, to argue that
is an                on [0, T] which obviously means that



defines a process D as in (42) with
   Given an                  such that (43) holds, the above considerations deliver a
setting for 4.1 and 4.2 specified as



Thus, as a direct corollary to 4.1, we have proved

2.4.3     Girsanov Theorem. If                    and T > 0 satisfy (43) then
               defines a probability measure such that


In particular, if M is a                 process then      defines a
process.
  A classical version of Girsanov theorem reads as
304           STOCHASTIC MODELING IN ECONOMICS AND FINANCE



2.4.4    Theorem. Let                                  be a
process. Further consider T > 0 and                                  a process in
such that                    Then                                      defines a probability
measure such that




is a                                 process.
   Recall that




   Proof. We compute




where                    It follows by 4.3 that each          is a process in          and
because


by 4.1, we may apply 3.3 to prove that          is a
   Observing the condition (43) we should be worried how to verify it. Recall Im-
portant Remark C we put forward at the beginning of 2.3 to remind that given
             we get        as a local martingale and supermartingale that is a martin-
gale on [0, T] iff (43) holds. Example 3.7 presents an M in       with
   A handy and a very sophisticated sufficient condition for (53) is delivered by

Novikov Theorem. Let L be a process in                  and T > 0. Then




  The proofs may be found in [131], (1.15) p.318, (1.16) p.319 or in [95], 5.12 p.
198). The condition (44) presents a very strong integrability requirement, indeed.

2.4.5     Exercise. If                         then L is an                        on [0,T]
for all      and                is a submartingale on [0,T].
   Next pair of results will serve all our purposes.
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                    305



2.4.6   Lemma. For an                   with                            (43) holds.
  Proof.          is a local martingale with           and therefore there are Markov
times            almost surely such that          is a martingale for each       and
therefore                    for arbitrary T > 0. Because




we may send             to get

2.4.7   Theorem. If             and T > 0 are such that                 almost surely
for a          then (43) holds.
   Proof. Denote                        consider        and put         Then




where the last inequality follows by 1.2.12 (e) because           is a positive super-
martingale.
  The rest follows easily as




holds for a constant             It follows from (45) that          and according to
4.6 that

2.4.8    Corollary. Let W be an              process,                      such that
        on        where is a locally square integrable function               Define




Then        is a probability measure such that     is               process on
   Our program to exhibit a probability measure for which a P-semimartingale
             would become a -Wiener process has been successful on bounded
intervals [0,T]. Next theorem extends the procedure to       in some special
cases.
306            STOCHASTIC MODELING IN ECONOMICS AND FINANCE



2.4.9   Theorem. Let                    be a Borel and locally bounded function.
Then there exists a complete filtration             an            process W and
a probability measure on          such that




where    is defined uniquely by



   Note that                      if is as in 4.9.

2.4.10 Exercise. Let         in 4.9 be a constant function and define by (46).
Then                    is a drifted Wiener process under P, a Wiener process
under and P,     are singular measures (P(N) = 0, (N) = 1 for some
denoting
   Proof of 4.9. Denote by the probability distribution of the Wiener process and
by           the completion of the space                        According to 1.4.9
(a), denoting              and         where is the canonical process on
we define by                a complete filtration, by W an            process. It
follows by 1.5.4 (ii) that

(47)      N is a continuous and                      process on the space

Our aim is to find a probability measure on              such that N will become an
                          process:
    Apply 4.8 with               to construct for any       a probability measure
on    by                              and put                   Because
is a                      it follows by a direct computation that                    is
true if         According to 1.1.13 there is a unique probability measure           on
                   such that                holds for all Thus, the     is constructed
as required by (46) and to prove that N is an                                 process
fix                 a Borel set and                Since, according to 4.8,       is a
                 process on          (47) implies that




and therefore the increment                    is independent of the
Choosing           we get                                                      which
yields                                      This, assisted by (47) proves that N is a
                 process as also
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                    307



2.4.11 Upcrossing a Level by Drifted Wiener Process. Consider a shifted
Wiener process                      and establish the probability distribution of the
first entry                              where
    Put          and recall 1.3.16 that provides the density       of the distribution
of the Markov time     Our reasoning will go along the lines suggested by 4.9 with
            Let             W and be such as in 4.9. Then
is a                process. Obviously,




holds. Hence,




where the equality (1) follows from the fact that                   the equality (2)
holds because                  and finally (3) is implied by 1.3.11 because
is a true                Hence, we get




and letting         in




we arrive at




We conclude that for
308             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

2.5      Integral and Brownian Representations
  Having fixed again a complete filtration     of a complete probability space
        and choosing an              we denote



Natural questions are obviously offered: How voluminous subset of             is the set
of all M-stochastic integrals SI(M)? What might be a property of M or of              to
imply that
   Later on in the developments of our proofs we shall be able to appreciate the
fact that the set SI(M) is projectively closed as it is stated by 1.4.8 for the sets of
adapted continuous processes and local martingales, respectively. Recall that we
have denoted by                 the            of all                 sets in

2.5.1 Lemma. Let M be a process in                        a sequence of Markov times
such that    almost surely and finally                        processes such that



Then there exists a                 such that



  Proof. The projectivity (48) assisted by 1.12 and by 1.5 implies that outside a
P-null set N




Hence, for any           there is a Borel set             such that
and such that



holds. Define


observe that it is a progressive process for all         and check that according to
(50) we get



To prove that              recall 1.4.8 and (49) to exhibit a local martingale
           such that                                  holds for all         It
follows by Fatou Lemma and by (51) that outside a P-null set for all      and
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                     309

Sending         in the above inequality we get that
  Finally, choose an             apply 1.6.5, (50) and compute that




holds for all       and          almost surely. Letting          we arrive at
              to be true for all              and therefore              Hence, the G
is the process the existence of which is stated by 5.1.
   Recall that having processes M and L in               we call the local martingales
orthogonal if                agree to write         if it is so. From the definition of
the stochastic integral it follows that



Any               owns a uniquely determined projection to the set of stochastic
integrals SI(M) as specified by

2.5.2 Projection Theorem. Let M and N be arbitrary processes in
Then there exist an      and a            such that



If                       is another decomposition (53) then             (and therefore
                          for all     by 1.12).
     Proof. Verify first the uniqueness statements: It follows by (53) that
                               hence
     Further, consider               a bounded Markov time such that
       and denote



where the      statement is proved as follows: If              then
by 1.7 and therefore                  by 1.2.10 (b) combined with 1.3.9 (c) because

   Next we shall prove that is a closed subset of         If                then
                      for all     as may be seen recalling 1.3.10. Hence, we get
for all     that




as           Now, let                     and              be such that
   holds. If it is so, (54) yields that                             as              for
all       hence          is a Cauchy sequence in             From 1.5.6 (d) it follows
310           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

that there is a                     such that                                for all
consequently                        in the space           by 1.7. The latter convergence
implies that



thus
   Choose finally a Markov time        with the properties

(55)          is bounded and both            and         are processes in

Observe that                 Since     is proved to be a nonempty subspace of
the pseudo-Hilbert space         there is a random variable             that is
              to such that                     holds for a process G in
Denoting                  we get                 such that
   We shall prove that L and     are orthogonal processes: If is an arbitrary
bounded Markov time, then



because obviously                            It follows by 1.3.10, as also           and
        that



holds. Thus,     is an                according to 1.3.12, hence
   Summarize what we have proved. If is as in (55), then there is a local martingale
L and a               such that          and



holds almost surely. As                                  our summary reads as follows: If
   is as in (55) then there is an                  and                 such that



holds. Finally, choose a sequence        of Markov times such that            holds
almost surely, such that (55), and therefore (56) also, hold for arbitrary
Because (56) can also be written as                               and
                   it follows from the uniqueness of the decomposition (53) proved
above, that                holds for all      This yields the projectivity (48) and
therefore by 5.1 the existence of a                such that (48) is true. Thus, if
                  then according to (49)



holds almost surely for all         and           Passing        we get that
which verifies that                       is the decomposition (53).
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      311


2.5.3 Exercise. For any                  the set                             is closed
in the space

2.5.4 Exercise. For any                  the set SI(M) is closed in the space
with respect to the convergence            defined by



  To execute the program postulated at the beginning of the present section fix
a              continuous process
and put



Having a probability measure P defined on the                      we will adapt our
notation as



and

Recall that                denotes the P-completion of                and          the
P-completion of
   We also agree to denote by M M ( X ) the set of all probability measures P defined
on the                 such that any       is a                        and such that
               Equivalently,                is defined by



by 1.4.9 (b). Later on we shall see why we should be interested in the extremal
points, called the extremal measures, of the convex set MM(X). Recall that a
measure P in a convex set of probability measures is said to be extremal in
if



Denote by         the set of all extremal measures in     Generally, MM(X) need
not own any extremal points but a possibility to discover a Brownian particle with
trajectories X makes all the difference.

2.5.5  Theorem. If P is a probability measure defined on     such that
          is a             P-Wiener process, then P is an extremal measure
in MM(X).
   Proof. Obviously                 Assume that P is a convex combination of
    in M M ( X ) as in (57). Applying 1.4.9 we can see that X is a
312          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

               process on                  and of course                   for all
Since           it follows by the definition that                       holds almost
surely with respect to any of the measures           and      for all       Theorem
3.3 therefore says that X is simultaneously                      and
process. Hence                   on the                  as the             equals to
                     B a Borel subset of              according to 1.1.12.

2.5.6 Exercise. If P is a probability measure on      such that a one dimensional
continuous process X is under the P a centered Gaussian process with independent
increments with                and           where                   then P is an
extremal measure in M M ( X ) .
   The extremal martingale measures in M M ( X ) are endowed with extremal prop-
erties, indeed. For example, they know only continuous martingales.


2.5.7     Theorem. If P is an extremal measure in MM(X), then any
martingale on                can be modified to continuous                    M,
hence to a process M such that
  Especially, if                  is a                Wiener process on a proba-
bility space          then any                     has a continuous modification
according to 5.5.
  To prove 5.7 we shall need the following corollary to Hahn-Banach theorem
known as Douglas Density Theorem:

2.5.8 Exercise. Let             be a measurable space and L a set of
functions. Denote by       the set of all probability measures P defined on      such
that




Then P is an extremal measure of the convex set        if and only if the linear space
generated by       and by L is a dense set in
   Observe that if we choose              in 5.8, where                         is an
              continuous process, and define L by



we get                    because           implies that                       for all
          and therefore


2.5.9    Lemma. Let P be an extremal measure in MM (X). Consider T > 0
and               an integrable random variable with EH(T) = 0. Then there
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                    313

is a sequence                         where                         and
           such that




Moreover,



   Proof. Note that for any fixed        and               the random variable
                 in (59) equals almost surely to           where                  is a
simple process and therefore                         by 1.1. This and 5.8 yields that
the linear span of



is a dense set in the subspace                          Thus, there are



             such that

Further, if         replace     by               and put          for such a and
apply 1.9 to check that that you will get a random variable that equals       almost
surely. Thus                               and therefore (60) holds.
   To prove the moreover statement assume without loss of generality that H is a
bounded martingale. Choose            and let                       as in (60). Note
that                           by 1.7.4 (iii). Hence, therefore




holds because            for all          It follows by (60) that
   Proof of 5.7. Let                  and H an                   assume without
loss of generality that              and fix T > 0. It follows by 5.9 that there
are continuous martingales                     such that                      as
         It follows by 1.2.10 (a) that for any



Hence, we may pick up a sequence         such that
314            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

and therefore outside a P-null set                  is a sequence convergent in
C[0,T]. According 1.4.6 (b) there is a continuous                  process M on
[0,T] such that                               almost surely as           Because
      are constructed to satisfy                        we get for any       the
equalities


where both limits are in             Thus,                is a continuous
martingale that defines a modification of                Because T > 0 was chosen
arbitrary the proof is complete.
  What follows is the most important achievement of the present section.

2.5.10      Brownian Representation. Let                     be a Wiener process
on             and H an arbitrary             martingale. Then there is a process
                                  and such that




holds. The process G in (61) is determined on           up to a    P-null set.
   Proof. Assume without loss of generality that              According to 5.2 we
get


Assume that for a




Then, according 5.2 again,



holds. If        then


and therefore, (62) yields by induction that (63) holds for       It follows by 5.9
that         hence (61) is true.
   If                   is a process such that                      holds, then




on      This and Fubini Theorem imply that G = G* almost everywhere on
with respect to
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                          315



2.5.11 Corollary. Let W be as in 5.10, T > 0 and                         an integrable
random variable. Then there is a process                                          such
that




holds.
   If, moreover,            then    in (64) satisfy                                   This
property of a G in (64) determines the G on               up to a       P-null set.
   Proof. Consider an                         M defined as
According to 5.7 M can be modified to a continuous           -martingale H. Thus,
a representation (64) always exists by 5.10.
   If    in (64) is a square integrable random variable then          is a continu-
ous                  and therefore                                         by 1.7.3. If
                      is another subject for (64) such that
holds, then also             is a continuous                 Hence,




and G = G* holds almost everywhere on                 with respect to
   Having a (P,X) such that                 where                       is a
           continuous process we shall say that (P, X) has the integral repre-
sentation property (IRP) if arbitrary                    H can be represented
as




where                                 In particular, for a (P, X) with IRP any
                  has a continuous modification.
   If X is a one dimensional continuous process then the IRP characterizes the
extremal measures in MM(X). For such a process X denote



2.5.12 Theorem. Let X be a one dimensional continuous process and P a mea-
sure in MM (X). Then P is an extremal measure in MM(X) if and only if (P, X)
has the integral representation property. Moreover, if P is an extremal measure in
MM(X) then
  Proof. To verify and the moreover part apply the 5.7 to see that any
martingale has a continuous modification and therefore it is sufficient to prove that
316             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

any                   can be represented as               where G is a process in
          But it follows directly by 5.2 and by 5.9.
   Assume that the IRP is present for (P, X). Then (65) says that any
           can be represented as               where G is a process in
It follows by 5.1 that it remains to be true also for any                    and
therefore                           Further assume that                    holds
for an           and some                      Put




It follows easily that H is a bounded                    such that P[H(0) = 1] = 1
as      is a trivial           under P. Because of the IRP property the H owns a
continuous modification L such that                        The process X is also a
                       and therefore we get for any      and          that




holds. It follows that                         and therefore                   The
equivalence (52) further yields that                             Hence,
therefore         and P is proved to be an extremal measure inM M ( X ) .
   An obvious choice of a process                      is the canonical process
                    Having chosen such a process we translate our definitions and
notations as follows:
   MM := MM( ) is the set of Borel probability measures P in              called the
martingale measures, such that the canonical process is a
and such that                holds. Equivalently, the set of martingale measures is
defined as the set of       where X goes through all continuous martingales with
           whenever they may be defined.
   The set of martingale measures is a nice set. Its extremal boundary ex(MM)
is according to 5.12 the set of Borel probability measures P on           such that
       has the integral representation property. It is a set rich enough not only
to include        but also to generate the convex set MM via Krein-Milmann and
Choquet Theorem. See III.4 (Bibliographical notes) for references.

2.6          Helps to Some Exercises
      1.11   Let         without loss of generality and consider a
             By Kunita-Watanabe inequality, we get




which shows that                         The linearity formula 1.11 is then proved
directly by the definition of the stochastic integral.
                    III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                        317

   1.16 The process           is obviously a Gaussian process with independent
increments for any simple deterministic process         A general        inherits
the above properties because according to 1.5.10 and 1.12 there are deterministic
simple processes such that                      Apply 1.7 to complete your proof.
     1.17 (i)     Apply subsequently 1.9 and 1.10 to verify that for any




holds almost surely.
     1.17 (ii)     Denote                    it follows by 1.6.6 that
If                       then, again by 1.6.6,




where                          is a process defined in 1.6.6.
  2.17 If A is a singular matrix, then there is an                   such that
hence a contradiction.
  Take arbitrary and put                 Compute



     3.7 (i)     Obviously,              where              defines a complete filtration.
If                then by the limit definition of the quadratic variation




i.e., Y is a                  process. If is its first entrance to –1 then              almost
surely and                      almost surely.
     3.7 (ii)     F is in            because          implies that
                almost surely.
     By definition and by 1.8 we prove



Letting              we get                               by 1.5, and therefore (ii).
     3.7 (iv)      Note that                     almost surely.
318          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   5.8 Assume that the linear space         generated by L and by all constants in
   is a dense set in        and that     in     are such that
holds for an               Because                where       are bounded densities,
we get that      is a dense set in both spaces          too. Hence         because
                   for all
   If     is not a dense set in         then it follows by Hahn-Banach Theorem
that there is a bounded                   function such that                    and
              for any         Without loss of generality we assume that         and
putting                       we define probability measures            in     such
that
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                         319

III.3 Diffusion Financial Mathematics

Black-Scholes calculus, Girsanov calculus, market regulations and option pricing,
helps to some exercises

   Throughout the present chapter, if not stated otherwise explicitly,
will be a complete probability space,                     an                  Wiener
process and      the completed canonical filtration of W, that is the filtration
defined as                    for all


3.1        Black-Scholes Calculus
   This calculus considers a market where          assets, say        are traded
continuously at any time          or, more frequently, at any time         where
         is the trading expiration time. Denote                      the price of
the corresponding security at time and assume that 0 is a bond whose price
is not exposed to the diffusion perturbations generated by the Wiener process W.
Its price is evolved by the equation



i.e., by                        and              where
(2)                        is a bounded progressive process
called the interest rate process. It follows that the price process         of the bond
is a continuous adapted process of finite variation (hence                  determined
almost surely by




Thus,                     for all        where                           and therefore
the process enters our calculations as the discount process associated with the
interest rate process     Assuming that is a positive deterministic process we get
the asset 0 as a security that offers a riskless possibility of investments. If it is so,
then the discount process       denoted as is called in the discount function in
Part I. If moreover,                  is a constant process, being called the force
of interest in this case, we simply arrive to a continuous time model for a typical
savings bank account.
   On the other hand, the assets                are assumed to be stocks, or other
risky securities, that of course accompanied by a risk, may offer a more substantial
profit than the safe bond. Their prices exposed to the diffusion W are modeled by
the stochastic differential equations
320           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

where        for all                and

                       and              is an               vector and an
(5)
 of bounded progressive processes, respectively.

The vector process is called the rate of return and the matrix process the
volatility matrix. Hence, the vector                    of prices of risky securities
is correctly defined as a            Itô process with locally bounded coefficients.
   Denoting by D(X) the diagonal                 defined by                  we get
(4) equivalently as




where                          Also define an Itô process                   by




or equivalently by




and call the return process. Since       is an               Itô process with
bounded coefficients and X is a continuous process, 2.2.19 implies that X is a
process further equivalently defined by




where
   Before trying to defend the equations (4) as a suitable model for stock prices
stochastic dynamics we should convince ourselves that they have a unique solution.
To this end observe that                            holds and apply 2.2.13 to each
equation                separately to prove

3.1.1    Stock Prices. Under (5) the equations (4) have almost surely unique
solutions given by




for all           Assuming that all

(11)                   initial prices           are positive numbers,
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                    321

and denoting ln                          and ln                        we get (10)
as




where                          denotes the diagonal of an               A.
   Since          for any stock with initial price         we may assume (11) and
therefore also that each price process      is a positive semimartingale without
loss of generality. Thus, we may write (9), and therefore also (4), equivalently as



by 2.2.19, since both processes D(X) and        are continuous adapted and both
X and are Itô processes with locally bounded coefficients.
   In case that and are deterministic processes we may be very specific about
the probability distribution       in the space             By 2.2.16 we verify
directly

3.1.2    Log-Normal Distribution. Assume that all processes          and     in (5)
are deterministic, further assume (11). Then ln X is an                continuous
Gaussian process whose probability distribution in the space           is uniquely
determined by




   The arguments in favour of the model and terminology are as follows: Obviously,
the               equations in (9) justify the return process term chosen to label
the process     Note that (9) and 2.1.21 imply for any                        and
            that




holds, hence a more precise justification.

3.1.3     Example and Exercise. The role of the rate of return process and
that of the volatility matrix is easily understood if the coefficients and are
bounded deterministic. Apply 2.2.16 and the Fundamental Theorem of Calculus to
prove:
322           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

  The return process     is a Gaussian process such that almost everywhere on
and for all




holds in this case.
    Thus, the rate process controls infinitesimal changes of the mean       of the
return process while the volatility matrix is designed to control local changes of
its covariance matrix function. Processes and jointly influence the infinitesimal
behavior of the probability distribution of the random variable
  Even a more deep insight provides

3.1.4    Exercise. Under the assumption (5)




holds          everywhere on   for all
   Hence, the rate of return may also be interpreted as an                         of the
return process
  Let us come back to Part I where the random walk hypothesis, supported
by empirical experience about the log-normal distribution of a single stock’s price
     was applied to model the price by means of the equation



where W is a one dimensional process. Observing that (15) coincides with (13)
if         and the return process      is given by                     we are
encouraged to believe that our more complex model (9) approximates the genesis
of stock’s prices with a acceptable precision.
   To summarize what has been said up to now agree to call



the Black-Scholes model (BS-model) if the following hypotheses are satisfied:

      (BS1)       is a process defined by (1) or equivalently by (3) where is
              a bounded progressive process and
      (BS2)    Processes      are defined by (4), also by (8), (9), (10), (12), (13),
              processes and           are bounded and progressive,
                      for all
      (BS3)   The matrix           is uniformly positive definite.

In what follows we will fix a BS model
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       323

   Remark that the hypothesis (BS3) has not been applied yet, however it will
appear to be crucial in what follows.
   The bond and stocks are traded: The investor may continuously change the
structure of his holdings by selling some assets             and buying others. Any
fraction (share) of any asset can be traded at any time          No commissions are
paid for the transactions.
   Denoting by         the number of shares of a security                 held by the
investor at time we do not exclude a possibility of a negative position
   A negative position               for the bond may obviously be interpreted as a
credit received by the investor to support his operations with the stocks
A negative position              for a stock           models a short sale operation.
This means that the investor is allowed to sell shares of the security he does not
possess and, of course, has to buy back or pay for in a near future. A typical
situation for a short selling operation is that the investor suspects that the price
    of the stock is about to fall rapidly.
   Denote by




the total wealth-capital invested in the assets                  at time   and postu-
late that:
       The investor has no prior knowledge of future prices        to help him design
a winning trading strategy
   Since the price processes are positive, trading strategy is equivalently but more
comfortably expressed in terms of the portfolio process given as
for each asset which quantity declares the money value of the shares of possessed
by the investor at time
       The investor owns an initial endowment – capital                      However,
later on, we shall prove that a void initial endowment         excludes any possibility
to acquire a future positive capital        in decent markets.
      The investor’s gains and losses, i.e., positive or negative profits, are entirely
due to his trading strategies given the underlying prices         Hence, denoting by
     the global profit achieved by the investor up to time we have




Be careful, please, to distinguish the stochastic differential      from the product
    of the discount process with a process F.
        The investor is of course allowed to consume continuously a part of the
profit. A consumption strategy is defined by the rate         of his cumulative
spendings          up to time
       The investor’s combined trading-consumption strategy
has to be self-financing which means that any increase and any decline           of his
324           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

wealth        is entirely caused by gains and losses coming from his investments and
consumption. From the point of view of a single investor the market is closed, there
is no way for money in and no way for money out. The obvious mathematization
of this requirement combined with (17) is given as



Thus, having already fixed a BS-model         we add a continuous time market
model whose principal components are given by the following definitions:
  An                     stochastic process



will be called a trading strategy or T-strategy if                           almost
surely.
  A                 stochastic process                                will be called
a portfolio process. The portfolio process defined by



will be called the portfolio process associated with a T-strategy           We will
also denote
   The stochastic process      defined by




will be called the wealth process associated with a T-strategy        Since
          and               is a trivial       we argue that there is
such that



The number will be called the initial endowment (associated with
  The stochastic process    defined as




will be called the profit process associated with a T-strategy
   A stochastic process              where         for all      will be referred
to as a consumption process. We shall write                and will refer to C as
to an accumulated consumption process.
   A pair       where is a T-strategy and a consumption process will be called
a trading-consumption strategy or TC-strategy. Any pair             where is a
portfolio and a consumption process will be called a portfolio-consumption
strategy or PC-strategy.
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      325

   Note that the integrability requirements on a T-strategy      say that



or equivalently that


as the processes       and X are continuous adapted and positive. The stochastic
process        is defined correctly for arbitrary T-strategy because (19) and (5)
are easily seen to imply that                   holds for each
  Let        be a TC-strategy. We shall say that it is a self-financing strategy if




holds.
   Note that         is defined by (16) for a general T-strategy as a progressive
process. However, if the can be accompanied by a consumption process c such
that        is a self-financing TC-strategy, we get          as a process that can be
modified to a process Y in CSM, in particular, to a continuous adapted process.
   We define a self-financing strategy as one that satisfies the requirements (18) and
(17). This definition not quite precisely written as                            simply
states the accounting balance equation
(22)      current wealth=initial wealth + profit – accumulated consumption.


Remark. If we apply a TC-strategy          such that all processes    and are
simple, we in fact assume that individual trading operations take place at discrete
time points                          and that the rate of consumption is constant
on each interval             Note that       is defined as a self-financing strategy
precisely by (22) in this case.
   If we apply a TC-strategy        such that all processes   and are continuous
and adapted, then according to 2.1.14,


where         is the wealth accumulated, according to (22), by trading in discrete
time points                                   while the rate of consumption remains
constant on each interval
   We are able to recover the profit process        where is a T-strategy, in terms
of the return process                      that is defined equivalently by (7),(8) or
(9) and of the associated portfolio             It follows by (1), (9) and 2.1.10 that
for arbitrary
326           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

holds almost surely because                for             by (19) and     is an Itô
process with bounded coefficients.
   Hence, if Y is a continuous adapted modification of        then




where                    is an                 vector. It follows further by (7) and
2.2.19 that for such a modification Y also



is true as                                  and     is a                 Itô process
with bounded coefficients. Hence, a TC-strategy          with an initial endowment
                  is self-financing if and only if the wealth process          has a
continuous adapted modification Y that satisfies



Thus we get

3.1.5   Theorem. Consider the stochastic differential equation



where       is a PC-strategy and             Then (26) has an almost surely unique
solution Y given for      by




Let        be a TC-strategy with an initial endowment        Then       is self-
financing if and only if     can be modified to a continuous adapted process Y
that solves (26) with
   Recall that                        denotes the discount process associated with
the interest rate process
  Proof. The second statement is already proved by arguments (23), (24) and (25).
Apply 2.2.13 with U and V that are such that U (0) = V(0) = 0 and




which gives                       to prove that (28) has an almost surely unique
solution given as
                 III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      327

The process Y equals almost surely to the right hand side of (27) by 2.1.20.
      The assertion invites to formulate the following definition: The process Y defined
for         equivalently by (26) or (27) or by




where         is a PC-strategy and         will be called the wealth process gener-
ated by           Agree to call the equation (WE) the wealth equation for
    The wealth equation expresses the requirement on self-financing behavior of the
 investor in the following manner:


3.1.6      Theorem. Let Y be the wealth process generated by                  Then




defines a T-strategy      such that              and the following holds true:




If                           is another T-strategy that satisfies (29) then

                                           and

is true.
  Especially,       on     by Fubini Theorem because    and are progressive
processes. By      on a Borel set           we mean that equals to almost
everywhere on B with respect to the Lebesgue measure
   Proof. The T-strategy defined by (28) is designed to satisfy                  and
          Hence,        solves (WE) and          is a self-financing strategy by 1.5.
If   has properties (29) it follows by 1.5 again that         is a modification of Y.
Hence,




holds.
  There is a very precise one to one correspondence between the trajectories of the
wealth process Y and that of the PC-process        in (WE).
328          STOCHASTIC MODELING IN ECONOMICS AND FINANCE


3.1.7 Uniqueness Theorem. Let Y be the wealth generated by                      Then
there is a P-null set N such that for all and




   Proof. Put                         Obviously,             and a straightforward
computation gives                               According to 1.7.1 and 1.7.2 there is
a P-null set N such that for          and arbitrary
        is a function of finite variation on                 is a constant on



It follows by (BS3) that the last integral equals to 0 iff       on       (30) is
proved.
   Take an arbitrary          where N is the P-null set constructed for (30) and
arbitrary                 If            is a constant on   then          on
according to (30) and therefore by (27)




Hence,                      for all         which implies that               on
because
   To verify      in (31) assume without loss of generality that the P-null set N we
constructed for (30) is large enough to ensure that for        and for all




holds. It follows by (27) that outside N and for all



The equivalence (32) is valid as a consequence of (31).

Remark. It easy to check that 1.7 will stay to be true even in the case of (WE)
with bounded not necessarily nonnegative consumption c and for arbitrary
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                         329



3.1.8   Corollary. Let Y and Y* be wealth processes generated by                    and
           respectively. Then outside a P-null set N and for all




                                                and

Especially,

                                                        on     holds almost surely.

  The generalized wealth process Y–Y* is generated by                          The
equivalence (33) is therefore verified by (32) in 1.7 and by the subsequent Remark.
  Note that if and        are progressive processes, then

        on      almost surely                                   everywhere on

Theorem 1.7 states properties of self-financing strategies that are almost obvious if
termed in the language of finance:
   The equivalence (30) states that a trajectory of the wealth is of finite variation
during a time period         if and only if we are sure that the investor ceased entirely
to possess risky assets during the period. H is wealth is generated only by trading
the bonds, hence by means of the ordinary differential equation
during the time interval.
   Further, the equivalence (31) says that the discounted investor’s wealth becomes
constant on an interval if and only if he owns only bonds and does not consume
anything during the period.
   Finally, (32) informs us that the investor goes bankrupt at time and will never
recover from this state until if and only if he owns no bonds, no stocks and
consumes nothing between times and
   Most of the problems of (diffusion) financial mathematics we shall encounter in
the present text may be formulated as below.
   Given a requirement on the wealth Y and given an initial endowment we seek
answers to the following questions:
      Is there a (unique) PC-strategy            such that           generates a wealth
process Y fulfilling that requirement?
      If this is the case, is there an effective construction of a suitable PC-strategy
      to get a wealth Y with the desired property ?
   One of the principal requirements on the wealth Y is to keep it as a nonnegative
process or even as a positive one. Being ready to adapt our consumption to our
current wealth Y the problem is simple.

3.1.9    Positive Wealth Process. Let                                and
          be an            and a one-dimensional process, respectively;
330             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

Then there is a PC-strategy           such that          generates a wealth process Y
having the following property:




      Proof. Consider the stochastic differential equation



According to 1.10 below it has an almost surely unique solution Y given by (36)
and (37) that is obviously such that Y > 0 holds. If we define      by (34), i.e. as
                          and                        the equation (35) is translated
to (WE) and therefore Y is the wealth process generated by

3.1.10 Exercise. For any        that are as in 1.9 and for arbitrary           equation
(35) has an almost surely unique solution given by




where




3.1.11 Exercise. The price          of an arbitrary stock                   is a wealth
process generated by                         and         where              denotes the
     unit vector. In other words, the trading-consumption strategy              defined
by                        for            and       is self-financing.
   If we are not willing to accommodate our consumption to our wealth, i.e. if we
fix   we may confront a problem of bankruptcy.
   Let Y be the wealth process generated by a             or, more generally, an
arbitrary process such that         holds almost surely. Denote by

                                        i.e., time of the first entry of Y to {0}

and call it the bankruptcy time of the (wealth) process Y.
   We feel that a decent model for continuous trading should be such that if the
investor goes bankrupt at             then he will never recover from this position.
In other words, we require that only such strategies           should be permitted
whose wealth process Y satisfies the equality            Note that according to (32)
in 1.7 the equality says that, outside a P-null set,           implies
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       331

i.e. that both trading and consumption are dead after the bankruptcy. In particu-
lar,

(38)            almost surely for all                     almost surely on

if
   We shall say that a PC-strategy          is admissible for         if (38) holds for
the wealth process Y generated by              If Y is such a process and (38) is true
only for                   we shall say that the strategy       is admissible up to
time T for the initial endowment
   In the forthcoming section we shall prove that a PC-strategy is admissible for
an          if and only if             where Y is the wealth process generated by
         i.e., that the trivial implication      can be reversed. Given an arbitrary
PC-strategy          and an arbitrary initial endowment there is an obvious way
how to stop         to an admissible strategy for

3.1.12 Exercise. Let Y be the wealth process generated by                    Then
is the wealth process generated by            where                  and
Obviously,         is an admissible strategy for

3.1.13 Example and Exercise. Consider a portfolio         introduced in 1.11 that
suggests to own forever only one risky security This time, however, generate the
investor wealth by            where is a general, perhaps positive, consumption
and          The wealth equation (27) says that




according to 1.11.
    Thus,             generates a wealth that equals almost surely to the price    iff
         In order to satisfy his consumption the investor needs to keep selling
shares of the bond short at any time This, however, can not be performed forever
if only admissible PC-strategies        generated by                            where
    is the bankruptcy time of Y, are allowed. Note that        is the first time when
the discounted price         gets on top of the accumulated discounted consumption
             Thus, having been forced to trade along the wealth process           the
investor has no means to cover his consumption after time           that will happen
almost surely if           with probability one.
    Prove that if and are deterministic processes such that
and are positive processes, then             holds almost surely.
332               STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   Indeed, to get a reliable model for a secure market we can not ignore the ad-
missibility requirement or equivalently that given by the equality       because
otherwise the investor would be allowed to perform the following risky financial
operations:

3.1.14 Example and Exercise. We consider the Black-Scholes model for one
bond and one stock with the following simplifications:
                                                                a constant.
This bears the discount factor              and the bond and stock prices       and
respectively, given as



where W is a one dimensional Wiener process. Further, consider the trading con-
sumption model with no consumption, i.e. with        where the wealth process Y
generated by a portfolio process and by an initial endowment        is



Choose            and a constant trading strategy                 defined by
                                              where K > 0 is a fixed number.
Check that                      where        and       is the wealth process and the
profit process associated with respectively, to see that defines a self-financing
strategy with the initial endowment               The following strategy, called also
a suicide strategy is an example of a short sale financial operation: The investor
starts at time       with one dollar initial endowment, sells K shares of the stock
short and buys 1 + K bonds.
   Thus, putting             in (39) we get the wealth process Y generated by and
by        as



and therefore        is not an admissible strategy for the initial endowment
Prove that the following assertions hold:
   (a) For any         the probability distribution of the wealth         is supported
       by the interval               i.e., that the distribution function
       is increasing on the interval and equals to 1 on
      (b) Letting           we get                         if   and                   if

      (c) If         then                            and
      (d)                            for arbitrary              and            for
            and
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                         333

Thus, if the rate of return is grater than one half of the volatility, the trading
strategy is really a suicide one if the infinite trading expiration time is considered.
With              we might be inclined to acquire the strategy as a lucrative one
as                        in this case, if we had not been warned by (d) that the
expected wealth at any time           is strictly below the initial wealth         and
that               as          Perhaps even more discouraging is the fact that the
bankruptcy has a positive probability:
   The bankruptcy time      of Y is easily computed as




Girsanov theorem, together with 2.4.11, offers probabilities for the bankruptcy
before time     as




with        as        and                as
  More importantly, by 2.4.11,                             and         implies that




Hence, there is no escape from the bankruptcy if the rate of return is greater than
one half of the volatility. Of course, this is something that also follows directly
by (b). If          then the investor may avoid the bankruptcy with a positive
probability      which decreases from 1 to 0 with K increasing in             Indeed,
a high rate of return if compared with the volatility supports the risk coming
from the negative position               for the stock.
   Finally, according to 1.12,                 defines an admissible strategy for
the initial endowment         which jointly generate the wealth process given by
where the process Y is defined by (40). Let           and prove:




   We shall revisit the example in 2.14.

3.2     Girsanov Calculus
   We shall keep a fixed Black-Scholes model for bond-stocks prices                that
is specified by hypotheses (BS1), (BS2) and (BS3). Agree to denote by
334          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

a bounded progressive process that is defined correctly due to (BS3) and 2.2.17.
The process G, as we shall see later on, combines the interest rate process   the
rate of return and the volatility to a very useful characteristic of our BS-model.
The process also yields another important discount process D associated with the
model, the process that is defined by




Hence, D is defined as the exponential of the stochastic integral              whose
quadratic variation is obviously given as          Further define
Itô processes    and        in CSM(P) by




Section 2.4 on Girsanov calculus provides mathematical tools that are able to
recover deep and important properties of a general wealth process Y defined by
(WE) and (27) equivalently. We shall summarize these techniques into:

  (G1)       D is almost surely unique solution to

  (G2)       D is a P-martingale such that            for all

  (G3)      For arbitrary          the probability measure            defined by
                             is such that       is an                   process.

  (G4)      For arbitrary         N is a             martingale iff
                  is a            martingale.

  (G5)      For        and            arbitrary,                      holds.

The measure       will be referred to as T-Girsanov measure for the Black-Scholes
model (BS1), (BS2) and (BS3).
   In (G2), (G3) and (G4) (local) P,                   and P,             processes,
respectively, are understood as (local)                                and
                  processes, respectively. Agree also to denote by      the (condi-
tional) expectation operator associated by the Girsanov measure       and keep the
notation E for that associated with the original measure P.
   Indeed, (G1) follows, for example, by 2.2.13. Hence, D is a nonnegative
      martingale. Its definition (42) and 2.4.7 imply that             since G is a
bounded progressive process. Thus, (G2) is true according to 1.4.2 (d). (G3) is
simply proved by (G2) and by Girsanov Theorem 2.4.4 itself.. Finally,     is defined
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       335

as a measure in the Girsanov set      with the derivative process             that
equals almost surely to    Accordingly, (G4) is exactly the statement (a) in 2.4.1.
To prove (G5) apply (G2) and write




The above reasoning touched a supermartingale calculus to be found frequently
in action in the financial mathematics. According to 1.4.2 (c) and 1.3.13 we have

 (SP1)       Any nonnegative local martingale M is a supermartingale.

 (SP2)      If M is a nonnegative supermartingale and        its bankruptcy time
            then outside a P-null set

Note that we may apply 1.4.2 (c) as      is a trivial
  The following pair of assertions explains the role of our definitions:

3.2.1    Lemma. For an arbitrary portfolio                        the formula




holds.

3.2.2 Theorem. Let             be a PC-strategy and          Denote by Y the wealth
process generated by            Then




defines a process such that      is a                 martingale for arbitrary
   The assertion, that in fact coincides with Girsanov theorem, provides the princi-
pal tool of the diffusion financial mathematics: Under the T-Girsanov measure
the process

     M = [discounted current wealth] + [discounted cumulative consumption]

has no drift. Under the original probability distribution P, this can happen only
in very restricted BS-models with               hence in models that provide no
motivation to trade risky assets
336         STOCHASTIC MODELING IN ECONOMICS AND FINANCE

  Proof of 3.2.1. Denoting the right hand side in (44) as U it follows by 2.2.19
that                where




is an                Itô process with bounded coefficients. Further, by 2.2.18 and
(BS3) we get                  where




   Remark that the assertions 2.2.15, 2.2.18 and 2.2.19 may be applied as above,
since all processes          are assumed to be bounded and progressive, the pro-
cesses      are chosen in         and the process is continuous adapted.
   Proof of 3.2.2. The middle equality in (45) is just wealth equation (27), the last
one coincides with (44). Fix a          and look at (45). According to 2.1.5 and
2.1.22,




holds as              on [0, T]. Thus,      is a                martingale by (G3)
and by 2.4.2 (c).
   The preceeding results enable to recognize a wealth process among continuous
adapted processes. We recall the results made available by Section 2.5 on Brown-
ian representations calculus on a unique existence of a solution to the equation




where H is a local P-martingale. Since                 2.5.7 and 2.5.10, respectively,
provide the following information:

  (BR1)        Any P-martingale can be modified to a continuous P-martingale.

  (BR2)        For any local P-martingale H the equation (46) has a solution
                 that is unique on         up to a           set.


3.2.3 Theorem. Let c be a consumption process and M a continuous adapted
process with           such that DM is a local P-martingale. Then
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                         337

defines a wealth process that is generated by               where



and                is defined               on              as a solution to the equation
                        according to (BR2).
   Proof. If                  then                   Apply (G1) and 2.2.15 to prove the
relations



Then, the Itô formula 2.2.8 for                             applied in CSM(P) and (49)
give




where the last but one equality follows by 2.2.19 and is a portfolio given by (48).
Hence, according to 2.1, the process Y defined by (47) is a wealth process generated
by
    For further purposes we will denote the space of all wealth processes by    and
its sections in the following manner: If is a consumption process, then

               is a wealth process generated by a

if is a consumption process and              then

                       is a wealth process generated by a

The genesis of wealth processes Y is described completely by the following state-
ment:

3.2.4 Theorem. Let Y be a continuous adapted process with                            and
c a consumption process. Denote



Then the following statements are equivalent:
   (a)
   (b)          is a            martingale for all
      (c)   DM is a local P-martingale.
338            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

Moreover,
  (d)     If   is a               martingale for a fixed T > 0, then there exists a
      wealth process                    such that           holds on [0, T] almost
      surely.

  Proof.            is proved by 2.2. If     is a local             for arbitrary
          (G4) applies to prove that                     is a local P-martingale
for arbitrary           This obviously implies (c). The implication          is a
consequence of 2.3.
   To prove (d) put



to define a continuous adapted process such that                            holds. Thus, if
     is a local                 it follows by (G4) that           is a local P-martingale.
Denoting                                 it is a consequence of the implication
that       is a wealth process in             obviously such that            on [0,T].

3.2.5 Example. Let c be a consumption process and               Endow both
and the space              of all local martingales that start from by the almost
sure equality on    Since M is a continuous adapted process iff its transformation
       M has the property, we may combine 2.3 and                         of 2.4 to
state that


is a one to one map
   If we provide the space of all portfolios         with the almost everywhere
equality on           with respect to the measure       we observe that the map
   yields through (BR2) and 2.3 a dual one to one transformation
           defined by




for                where Y is the wealth process generated by
   Now we are prepared to fulfil our promise made in Section 3.1 to prove that any
admissible PC-strategy generates a wealth process Y that will never recover after
its bankruptcy

3.2.6 Admissible Strategies. Let Y be a wealth process generated by
and its bankruptcy time; T > 0. Then             is an admissible strategy up to time
T for the initial wealth if and only if there is a P-null set N such that for
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                        339

Hence, a PC-strategy        is admissible for a            iff           holds for the
wealth process Y generated by
   Proof. Assume that               almost surely for               If M is the pro-
cess defined by (45) then        is, without loss of generality, a nonnegative local
                 by 2.2. Thus,        is a                       according to (SP1).
Since            is a non decreasing process, we conclude that             is a
                   too. The processes        and           have obviously the same
bankruptcy times and therefore the implication        in (51) follows by (SP2). The
rest of 2.6 is obvious.
   Having a finite trading expiration time T the investor will, beyond any doubt,
judge a plausibility of any single PC-strategy according to the final capital Y(T),
that may be attained by its application, compared with an initial endowment
              More precisely, claiming a final wealth         he searches for a wealth
process Y that would respect a given consumption whose value at time T would
be equal to the claim       and that, at the same time, would require as small initial
endowment               as possible.
   In this respect our definitions will be as follows: Let T > 0 be a trading expiration
time.
       A nonnegative random variable             will be called a claim at time
T > 0. Saying that      is a claim we shall always mean that T is a positive and
finite time and that   is a claim in
      A wealth process Y will be called a valuation of a claim           if
holds. We may also say that Y valuates the claim
     A valuation of a claim     will be said an admissible valuation of the
claim if        holds almost surely for all
       The minimal price of a claim           and of a consumption        or simply of
        is defined as the minimum of all         such that there exists an admissible
valuation              of    with the initial endowment      If it exists, the minimal
price will be denoted as
   In symbols,

                                  is the initial endowment of an Y in

where

                                      Y is an admissible valuation of

    If the minimal price         exists, then any process              with the
initial endowment          will be called a minimal admissible valuation of the
claim      and of the consumption c or simply a minimal admissible valuation of

  Next three statements are the fundamental achievements of diffusion financial
mathematics.
340              STOCHASTIC MODELING IN ECONOMICS AND FINANCE


3.2.7 Valuations. Consider a consumption process c and a claim                Assume
that there exists a valuation      of   such that

                                          holds almost surely for all

Then




in particular,      and           are                random variables. Further denote




for         and assume that              is a valuation of   that satisfies (52). Then
                       holds almost surely for all

and                 for all         if and only if
   Note that                                  if     and that the conditional expec-
tation (54) exists by (53) as       is a bounded process on [0, T].
      Proof. Note first that            and             and that




holds for arbitrary          according to 1.2.7 (c). Assume that                   is a
valuation of      such that (52) is satisfied. Since                    is in this case
a nonnegative local                     by 2.2, it is a                      by (SP1),
especially (53) is valid. Hence,




holds almost surely for all            by (55). We conclude that for any
the inequality              is valid almost surely.
   If          then                                   for both      and            and
therefore the                                         turns to be a
and we get (56) as equality that holds almost surely for all
      The theorem sends an important message:
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                        341



3.2.8    Admissible Valuations. Let          be a claim, a consumption process and
            a valuation of      Then
    (a) Y is an admissible valuation of       if and only if condition (52) is satisfied.
 If             is an admissible valuation of      with an initial endowment
then                 Moreover,
   (b)          if and only if      is a                    and if and only if       is a
         modification of the process
   (c)        holds if and only if      is an integrable local                  and it is
        not a true
The processes M and                      in (a) and (b) are defined by (50) and (54),
respectively and                       is the number specified by (53).
   Proof. If a wealth process               satisfies (52) and valuates the claim
then                almost surely for               by 2.7. Hence, Y is an admissible
valuation of
   If Y is an admissible valuation of     and                 then               almost
surely for            by 2.7 and therefore
  If               then               for         according to 2.7, again, consequently




by (55) and      is seen to be a
   If     is a                 then (57) holds because              Putting
into (57) we get                We have proved (b).
   To prove (c) note that       is a nonnegative local              by 2.4, conse-
quently an integrable stochastic process by (SP1). This obviously implies that (b)
and (c) are equivalent statements.
  This result is substantially complemented by the following deep theorem:

3.2.9      Minimal Admissible Valuations. Let          be a claim and c a consump-
tion process. Then the minimal price           exists if and only if (53) holds.
   If the condition (53) is satisfied and Y is a minimal admissible valuation of
         then



hold.
  In particular, if Y and Y* are minimal admissible valuations of        generated
by a          and by a            respectively, then          on [0, T] and
almost everywhere on              with respect to the measure
  Proof. If the minimal price          exists then                        by definition.
Further,                   by 2.8, hence the existence of                implies (53).
342            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

  Assume (53): According to (55) the equality




is valid and therefore N is a                  It follows by (G4) that       is a
P-martingale, hence N has a continuous adapted modification, say M, by (BR1).
Define a continuous adapted process Y as a solution to the equation (50). Note
that                                 and that       is a               as    is a
modification of the process      We further reason as follows:
   According 2.4 (d) there is a wealth process                     such that
Y on [0, T] holds. Consequently,

                                                       is true for all

and                         is an admissible valuation of     by 2.8 (a).
   Since, according to 2.8,          is a lower bound of all      such that there is an
admissible valuation of       with             we have proved that the minimal price
         exists and is equal to              If Y is an arbitrary minimal admissible
valuation of         then                               and               for
by the last statement of 2.7.
   The uniqueness part follows by 1.8.
   The statements 2.7, 2.8 and 2.9 combined may be summarized to provide a
check for a process to be a minimal admissible valuation and a method how to
compute the minimal price. Also the term the minimal admissible valuation finds
its justification:

3.2.10 A Summary. Let                   and     be a claim and a consumption process,
respectively:
   (a) The minimal price                exists if and only if
         in this case.
    (b) A valuation                of         is a minimal admissible valuation of
if and only if                  is a                     on [0, T].
      Let          be an admissible valuation of            Then
      (c)                   almost surely for
   (d) Y is a minimal admissible valuation of                if and only if
and if and only if                  for
      (e)                almost surely if and only if                           is a local
                and not a true
   Make it an exercise to prove the statements included to our summary.
   The equivalence (e) in 2.10 creates through a mathematical pathology a possi-
bility for a really suicide trading, indeed.
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                  343


3.2.11 Example and Exercise. A Safe Way to the Bankruptcy. Let us
consider a market where only one bond and one stock are traded until the expiration
time T = 1 and fix a consumption process c.
   Since the process       defined by (43) is a                  process, the con-
struction performed in 2.3.7 exhibits a Markov time           such that outside a
P-null set



         where

holds to be true. The integral            being an integrable local
and not a true                 enters through (c) in 2.8 to arrange for the bank-
ruptcy with probability one:
   For an arbitrary       define a portfolio    by




Consider an initial endowment        and let Y be the wealth process generated by
          Verify the following statements:
   (a)   The wealth equation for Y is




and therefore

                                        and

hold outside a P-null set.
   (b)           is an admissible strategy up to time 1 for an initial endowment
      (briefly admissible) iff                 is valid almost surely.
  In particular, if      and        is an admissible strategy, then       on [0,1]
and         is not admissible for        In other words, if          then there is
no consumption process c that could be paired with the portfolio       to make a
PC-strategy that would be admissible up to time 1 with the initial endowment
  Apply (a) and (b) to construct a really bad financial operation:
   (c) Choosing to trade without any consumption, i.e. with                then for
arbitrary initial investment       the portfolio     is admissible up to time 1 for
the initial endowment and forces the investor to go bankrupt with probability
one not later than at time T = 1. According to (a), the bankruptcy time of the
344           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

wealth process Y generated by               equals to the Markov time     that enters
the definition of the process F.
   Thus, the portfolio (59) provides a very safe way how to loose arbitrarily large
amount of money. Look how this is accomplished if for simplicity we assume that
the interest rate and the volatility are given as    and         respectively:
   You need only to keep stubbornly increasing the capital invested to the stock
with the rate                 at any time before you go bankrupt without any
regards to the dynamics of the price process       Obviously, this trading can not
be performed without a to infinity increasing negative position for the bond given
according to (a) almost surely as



if         Thus, a huge short sale of shares of the bond is necessarily involved.
   We continue to assume that                     and      and note that
generates the wealth process                                    that is an admissible
valuation of the claim           with the initial endowment          and is not a
            on [0,1]. Trivially,              and you would do much more better to
skip your investments completely until T = 1 advised by the fact that the minimal
admissible valuation of          is a wealth process whose trajectories are constant
zero on [0,1] generated by          where              In this case the initial wealth
   could be better invested elsewhere rather than to get it wasted by the suicide
portfolio
   According to 2.10 the problem of the minimal price of        when         reduces
itself to the problem of finding an admissible valuation Y such that the discounted
process         is a               on [0, T]. The important aspect of the BS-price
model is that the price process    meets the requirement for arbitrary risky security


3.2.12. If only one bond and one stock are traded and T > 0 is arbitrary, then
        (a)                                               is a
        (b)          is a                 on[0,T].
        (c)       is a process in            such that



        holds almost surely for all

   Proof. The formula (a) follows by a direct computation. The right hand side
is a              by 2.4.6 as the processes       and are bounded. It follows
by (G4) that        is a                on [0, T] for arbitrary T > 0. It follows
by (6) that    is a continuous                     with the stochastic differential
                               and therefore by (44) in 2.1
                 III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       345

holds. Since               on [0, T], we arrive to the formula




that is equivalent to (c) because         is a              process by (G3).
  More generally we may prove:

3.2.13. For any stock               and T > 0



Hence, by 2.4.7,         is a                on [0, T] as     is a bounded process.
   Proof. As follows from 1.11,    is a wealth process generated by         where
                 and the       unit vector,                Consequently, according
to 2.2, (G3) and by 2.4.2 (c), the corresponding wealth equation is given on the
interval [0, T] as




where          is understood as a                process. Hence




holds by 2.2.15. An application of 2.2.13 shows that

3.2.14 Example and Exercise. Consider the Black-Scholes model for one bond
and one stock with

                                                               a constant,

   > 0 and further assume no consumption, i.e.,            Imagine that you are offered
to sign a very exotic contract to pay at time           an agreed price       to collect
at time T > 0 a total given as



In other words, for the price paid at         you will get nothing if the price
enters          some time before T and you will collect
if not. What would be a fair price to pay for the claim or rather option         The
answer is simple and involves the concepts of the minimal price and that of the
minimal admissible valuation that exist in this case, since
    If             and if you are allowed to trade only in the framework of admis-
sible portfolios you would not hesitate to sign the contract, since there is no legal
346             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

possibility how to valuate    by a wealth process                    with initial en-
dowment If                  the contract should be dismissed because the minimal
admissible valuation of         is less expensive and the rest                of the
required price might be invested elsewhere to replicate the total profit.
   Prove that              and that the minimal admissible valuation of            is
given as      where




Recall 1.14 to see that Y is a wealth process whose bankruptcy time coincides with
   and                is an admissible valuation of          You will also find there
a formula for              that provides an information about the risk born by the
contract.
   The interpretation of the minimal price as a fair price for a claim or option will
be thoroughly revisited in the next section.
   Via 2.10 we have also solved the problem of the existence of an admissible PC-
strategy up to a given finite expiration time for a given consumption process and a
given initial capital.


3.2.15 The Existence of Admissible Strategies. Let                  be a consumption
process, T > 0 and   Then




is a necessary and sufficient condition for the existence of a PC-strategy
admissible up to time T for the initial endowment
   Proof. Assume first that       is an admissible strategy up to T for        and de-
note by Y the wealth process generated by               Consider                  and
                defined by (53) and (54), respectively, where                    Then,
according to 2.10 (c),                             holds.
   On the contrary assume (61) and put                                          Thus,




According to 2.10 (a), there exists an admissible valuation           of the claim
   with the initial endowment       Consequently, an admissible PC-strategy up to
time T for the initial capital is proved to exist.
      PC-strategies admissible up to infinity may frequently cease to exist.
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       347

3.2.16 Exercise. Let be a consumption process and             Then an admissible
strategy      for the initial endowment exists iff there is a process L with the
following properties:

                                 and                         almost surely.

Prove:
   (a) If and are deterministic processes such that                           and
       arbitrary, then there is an admissible strategy         for
   (b) If an admissible strategy      for exists then                        holds
       for all
   (c) If there is an     such that        holds on    with a positive probability,
       then there is no admissible strategy        whatever large initial capital
       we may have available.

3.2.17  Exercise. Assume (61) for a consumption process     and a T > 0, put
                                as in the proof of 2.15. Compute explicitly the
minimal valuation Y of

3.2.18 Exercise. Consider a utility function                            that is Borel
measurable and such that
                                        for all
For       and T > 0 define




where       is the set of all consumption processes such that a portfolio exists
to form a strategy          that is admissible up to T for the initial endowment
Prove that the maximal possible utility         is given as




where       is the set of all consumption processes   with
   See, [115], [63] (pp. 160-161) and [95] (pp. 379-387) for constructions of a
consumption process       that is optimal in the sense of
where                        and       is a smooth concave function on
   In 2.3, 2.4, 2.5, 2.6 and in 2.16 we succeeded in formulating the corresponding
results in terms of the original probability distribution P rather than to recall an
associated Girsanov measure                The reader might also prefer the principal
results on the minimal admissible valuations and the minimal price of a claim to be
handled analogously. We shall do it now adding to our reasoning an integrability
requirement on the claim under consideration.
348             STOCHASTIC MODELING IN ECONOMICS AND FINANCE



3.2.19 Integrable Claims. Let           be a claim and     a consumption process such
that for some




holds. Then




and the minimal price of           is




If Y is a minimal admissible valuation of          then                        for each
           by 2.10 (d), and




holds for all
  We shall need the following

3.2.20 Lemma. For any                       and          the random variable
has a finite expectation.
   Proof. Put                                 and apply 2.1.9 to compute that




holds almost surely for a constant            because G is a bounded process. Since
                                    it follows by 2.4.7 that                   The
integrability of           is proved.
   Proof of 2.19. Denote
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       349

and define        by              Consequently, by Hölder inequality, 2.20 and (G3)



is seen to be true. Hence, (64) is proved. It follows that

The minimal price            exists and (65) is true by 2.10 (a).
   Further, denoting                   it follows by (55) that                     is a
                on [0, T] and therefore                         is a                 on
the interval by (G4). This yields




According to 1.2.7 (c) we arrive at



since (64) implies that the argument of the conditional expectation on the right
hand side is an integrable random variable. Computing V as the solution to (68)
with an assistance of 1.2.7 (c) again, we get (66).

 Two Remarks. The Girsanov calculus enters the financial mathematics principally
through the probability measures                whose purpose is to remove the drift
that is present in the definition of a general wealth process. There is no harm as far
as a finite expiration time T > 0 is concerned, as      and the original distribution P
bear the same random events of probability one and the Radon-Nikodym Theorem
provides a reliable bridge between the        and P- stochastic worlds.
   The problem of the time horizon                can not be easily overcome. Even
though we are able in some special cases (see 2.4.9) to define uniquely a probability
measure Q that coincides with any           on the                   we will not get a
very neat mathematical model. The reasons are that it may happen that Q and
P are singular measures, see 2.4.10, and therefore two different filtrations
and           may enter our model with no purpose for financial modeling.
   Compared with the standard terminology we have slightly simplified the defini-
tion of the contingent claim that is generally understood as an financial instrument
         where        called also a terminal payoff, is a claim,           a stochastic
process, referred to as a payoff rate, whose mathematical definition coincides with
that of a consumption process. In this context a PC-strategy               is called an
admissible hedging strategy against a contingent claim                for an initial en-
dowment           if             for             and          generates an admissible
valuation of the claim         Thus, our definition of a claim is that standard one of
a contingent claim plus (hopefully) an innocent identification of the concept of a
payoff and that of a consumption.
350          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

3.3      Market Regulations and Option Pricing
   We shall continue our presentation of the diffusion financial mathematics in the
framework of a fixed Black-Scholes prices model                     given by (BS1),
(BS2) and (BS3) and assume no consumption being present in our trading model.
Our notations and terminology will be modified in the following obvious manner:
   If is a portfolio and       an initial endowment, then a wealth process


generated by            will be simply referred to as the wealth process generated
by          A portfolio will be said admissible up to time T > 0 for an initial
endowment            if         almost surely for all            where Y is defined
by (69).
   If     is a claim, then                      will be called the minimal price of
     and a minimal admissible valuation of          shortly as a minimal admissible
valuation of
   The mathematical technology developed in Section 2 and summarized by 2.10
makes possible a modest discussion of market regulations as are or as could be
imposed with all regards to the need to have a market that is both safe and inter-
esting for investors. One more concept contrasting the suicide admissible portfolios
introduced by 2.11 is of considerable importance to make the discussion profitable.
   We shall say that a portfolio is an arbitrage opportunity at time T > 0 if
       generates a wealth process Y such that
                                        and
holds.
   Obviously, no responsible market regulator would allow such a portfolio to be
operated. Even if he would, the following example shows that both the arbitrage
opportunities and suicide portfolios (such as constructed in 2.11) are disqualified
automatically by their spectacular and lasting need of a credit. The example also
demonstrates that the arbitrage and suicide portfolios are in a sense dual concepts.

3.3.1 Example. Arbitrage Opportunities Exist. Consider K > 0 arbitrary,
define an admissible portfolio   by (59) in 2.11 and generate wealth processes
and     by          and by          respectively. The portfolio    is constructed
so that the processes    and   behave as follows:


Thus, the portfolio        is not only an arbitrage opportunity at T = 1, it transforms
a void initial capital into a positive wealth in a finite trading expiration time, that
is T = 1 in our case.
   As we have seen in 2.11, the suicide process requires a huge increasing negative
position for the bond and therefore the arbitrage opportunity process            may be
operated only by means of increasing short sales of stock. A common necessary
condition for such a behavior of an investor is an access to an almost unlimited
credit. Even a very liberal lending practice rules out such a credit and in fact
prohibits implicitly to operate such portfolios as       and        are.
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                          351



3.3.2 Exercise. Let be an arbitrage opportunity at T > 0,       and the
wealth process generated by  Denote by     the wealth process generated by
      Then

                                    and                                holds.

Thus, to operate an arbitrage opportunity portfolio starting with an arbitrary initial
 capital      means that you are sharply better than to invest the initial capital
to the bond and wait for the expiration time T.
  As expected, neither true martingales nor non-negative wealth processes provide
opportunities for arbitrage. More precisely:

3.3.3 No Arbitrage Portfolios. Let be a portfolio, denote by Y the wealth
process generated by    and consider T > 0. If is a portfolio admissible up
to T for       or if is a                on [ 0 , T ] then is not an arbitrage
opportunity at T.
   Proof. If    is a portfolio admissible up to T for               then        is a
                  on [0,T] by 2.2 and (SP1). Thus,           is a
on [0, T] in both cases. Consequently,                              On the other hand,
if is an arbitrage opportunity at T, then

                                    implies that

as     and P are equivalent measures. Hence,                               and a contra-
diction is exhibited.
    The above assertion is a simple but useful statement: In the set of all portfolios
that are admissible up to T for a fixed initial endowment            you will find no
portfolio which would provide an arbitrage opportunity at some time                On
the other hand, according to 3.1, you will find there suicide portfolios that generate
wealth processes Y such that                        holds. It follows by 2.10 (e) that
the trouble making portfolios are exactly those that generate jointly with wealth
processes that are local                    and that are not true
Thus, it seems that the admissibility itself can not, at least mathematically, guar-
antee a safe and decent market and we are advised to restrict our trading to the
set

                                 of all trading strategies        such that
           is a portfolio admissible up to T for and            generates
         a wealth process Y for which        is a                  on [0, T ] .

We may summarize the reasons in favour of a market defined by the set             that
deserve a consideration on the part of a market modeller: The investor restricted to
      is denied of all arbitrage opportunities and lives without any hope to overcome
a possible bankruptcy according to 2.6. Not so good for him. On the other hand,
352             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

he is rewarded a security in that sense that no suicide portfolio can be met in such
a market which may be considered as a favourable compensation.
   The Girsanov measure         is designed to remove the drift. A growth of the
wealth is present even under       though       becomes a (local) martingale in the
           hence, basically a process whose expectation is constant on [0,T].

3.3.4 Lemma. Assume that the interest rate is a non-negative process. Let
M be an adapted process such that     is a           on [0, T] for a T > 0.
Also let           be a convex function with       such that           is a
             random variable for any         Then,        and           are
both                   on [0,T].
  Proof. Indeed, if            then        is a non-increasing process and



holds. Hence,                  is a              random variable for              and
         is a                     according to 1.2.9 (d).
  Having                   it follows by 1.2.7 (c), (70) and 1.2.7 (b) that outside a
        set




holds. Hence,           is a                   by definition.
  As a direct corollary to 3.4, 2.13 and 2.10 (b) we get

3.3.5 Submartingale Growth Under                Assume that             let
be a convex function with         and T > 0.
   If                      for            then both               and                 are
                     on [0,T].
  If Y is a minimal admissible valuation of a claim   and                             for
            then also both       and           are                            on [0,T].
  Thus, if        and   is a convex utility function with            such that
and        are                processes on [0, T], then



are non decreasing functions on [0, T].
   Claims     whose minimal valuations we studied in Section 3.2 are most impor-
tantly constructed as a betting on the price of a stock say           at a specified
time T > 0. We shall start with a notorious stock exchange game called a Euro-
pean call option that is a claim given as                          where T > 0 is
called the exercise time of the option (also the maturity or expiration time), and
K > 0 its exercise price.
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                       353

    Obviously, the game goes as follows: The investor signs a contract that makes
possible for him to buy at time T one share of the stock                  at a price K
if               and, obviously, to make a profit                   if the share is sold
immediately for            This option is, of course, not free of charge and we ask
what would be its fair price        to be paid at time           The answer is simple,
it is the minimal price of                       since nobody is prepared to pay for
the option a price              when there is a trading strategy
that valuates      at time T and the rest              may be invested elsewhere.
    More generally, having a Borel function                    and a T > 0 such that
                       the claim                     will b e called the            and
T referred to as its exercise time. Any European call is a                 with
           for a K > 0. The minimal price of a              exists and is equal to


according to 2.10 (a). It will be called the value of the
Obviously, it might not be enough to know only the value, we need to visualize a
legal valuation Y of the claim           with        to support the interpretation
of as that of the fair price of the option. Denoting


we call       the value of the                        at time and stress that the
process V is exactly what we need because any minimal admissible valuation of
          is a continuous modification of V on the interval [0,T] by 2.10 (d).
   However, no explicit formula for the values       can by itself provide an exact
control of our investments to attain the option terminal value              By 2.10
(b) there exists a portfolio          such that



holds for             We are justified to call such a portfolio a hedging strategy
against the              as such a portfolio is determined uniquely
everywhere on              by 1.8.
    The valuation of European calls is the highlight of the continuous time finan-
cial mathematics, indeed. The Black-Scholes Nobel price explicit formula for
its value, see [23], was derived by means of solving a partial differential equation
specified below.

3.3.6    Exercise. Let         T and K be positive real numbers. Denote



where    denotes the distribution function of N(0,1),
and
354           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

for       and
   Check that is continuous on                                                    and
that the derivatives

                                              and

exist continuous on                  Also

                                                  holds on

In other words    solves the Cauchy problem with the boundary

3.3.7 The Value of European Call. Consider BS-model with one stock where
the interest rate and the volatility are positive constants. Also consider T > 0
and K > 0. Then

                                            and

where is defined in 3.6, are the values of the European call with the exercise time
T and the exercise price K.
  Moreover, if is a hedging portfolio against                   then




3.3.8 Exercise. We are able to determine the trading strategy that corresponds
to the hedging portfolio       and to the initial endowment        on the interval
[0, T]. In the setting of 3.7 prove:
   Let        be a wealth process associated with a trading strategy
Then         is a minimal admissible valuation of              iff



        and                               holds

   Note that the values of European calls are independent of the rate of return
process but depend heavily on the interest rate and the volatility          This is an
important feature of the Black-Scholes formula (74), since while there is a chance
to estimate the latter coefficients, it seems to be a problem in the case of b because
of its basically stochastic or even diffusion character.
   Proof of 3.7. The process             is a                 by 2.12. We shall prove
that it is an                       It follows by 2.13 that for
                III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      355

is true and therefore, again for         we get


where Z is a random variable with                   Hence,                is an
martingale on [0,T].
  Further, define two continuous adapted processes Y and Z by
                                     and by
The definition of          yields the inequality



Apply 1.2.10 (b) to the                                     to see that



Imagine that we have already proved that


If it is so, we may let          and see that (76) implies that
                                                   holds for all

Consequently, each         is a             by 1.4.2 (a) and
is also easily seen to be a               as an application of (78) and 1.2.7 (f).
Hence,                     for all         which is a statement equivalent to (74)
due to (71) and 1.2.7 (c).
   We shall prove (77) for a fixed 0 < U < T. It follows by Itô formula 2.2.9 and
2.12 (c) that for all




is true if the integrands are meant as                                        and


Since               holds, we integrate per partes to get
356           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

and finally, because    is the solution to the Cauchy problem (73), we get



and      as a local               as stated by (77).
  It remains to verify (75): Fix U < T and apply (79) and (44) to prove that
equals almost surely to




for all       If   is a hedging portfolio against                   then according to
(72) we get that




holds for all           denoting again
   It follows by 1.8 that                       almost everywhere on
        for all U < T. Hence (75) holds.
  More generally, having positive constants            T and a continuous function
            we shall say that

                            continuous,             continuous on

solves the                  problem with the boundary condition          if (73) holds
and                 for all      and
   It presents no problem to transfer 3.8 to more general

3.3.9   The Value of                    Assume a BS-model as in 2.7 and consider a
continuous function                       Let be a solution to the
problem with boundary       such that




where              Then             is the          with values given as
                           and with a hedging portfolio defined by (75).
   Indeed,             is the           since
                 III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                  357

holds.
   The proof of 3.9 goes exactly as that of 3.7 the only difference being that
              is estimated by means of (80) as



and (76) then reads




  Surprisingly, we may also prove, as a corollary to 3.9, a uniqueness result for the
Cauchy problem which is something very far off our present topic:

3.3.10    Exercise. Consider an                  problem with a boundary
            If and are its solutions that satisfy the linear growth requirement
(80), then
   In 3.9 and 3.10 we touched, if only slightly, the recent research on stochastic
representations of Cauchy-Dirichlet problems. See, 5.7 Section in [95] and Section
15 in [151].
   Choosing                             we define a          called the European
put option with an exercise price K > 0 and an exercise time T > 0. It is easy
to see that the European put is a dual to the European call that suggests a game
where a bet is placed on a small value         of the stock at the exercise time T.
By buying a European put option we receive the right (not the obligation) to sell
at time T one share of the stock at a price K.

3.3.11 Example and Exercise. The Value of European Put. Consider a
BS-model as in 3.7, note that



and denote by       the value of the European put at time               It follows by
3.7 and by 2.12 (b) that



holds for             where   is the function defined in 3.6. Thus,



and therefore,
358           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

defines a function   such that the value of the European put at             is given
by



where          is the value of the European call.
   Observe that the function is the only solution to the                   problem
with the boundary                     that satisfies the requirement (80).
   Prove that the hedging portfolio     against the European put                 is
such that



holds almost everywhere on             with respect to
   The concept of an option makes its appearance both in the market practice and
in corresponding theoretical models even in a more general form.
   For example, an exotic option with an expiration time T > 0 is a claim
                         where                           is a Borel function with
the following properties:



Putting



for              again, we define the value and the value at time of the ex-
otic option                     Stress again that is the minimal price of
                  and V is the process such that any minimal admissible valuation
of    is a continuous modification of V on the interval [0,T].
   The final value of an exotic option may depend on the history of the price of the
stock                 as one may wish or may invent: We may choose




and derive a variety of exotic options that are attractive both to the investors and
mathematicians. The examples are such as follows:




the former being called the Asian option, the latter the exotic binary option.
We might even be able in some cases to establish the values of exotic options.
   Both in 3.12 and 3.13 we shall assume that a BS-model with one stock is operated
and consider the interest rate and the volatility to be some constants in
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                   359


3.3.12 Example. The Value of                         The random variable
            is obviously a                claim, hence the value of
is given as




since         is a                by 2.12 (b). Applying the property in a more
sophisticated manner we get



and consequently, having fixed           and        we get by Fubini Theorem




and therefore                                      Thus we have computed the
value of    at time        as




where

3.3.13   Example. The Value of Exotic Binary Option. Denote
              and assume that    It follows by 1.1 that for all




holds, if             Since       is a          process, it follows by 2.4.11 that
         almost surely and that
360          STOCHASTIC MODELING IN ECONOMICS AND FINANCE

is true. Hence,      is an exotic option (we may assume that          everywhere on
   without loss of generality) and 2.4.11 also provides its             distribution
as




Finally,


is the value of    at time
    Consider the exotic binary option and denote



The minimal price of        i.e., the value of the corresponding exotic             is
computed as follows:




   Up to now we have observed only options with a fixed exercise time T > 0. Let us
now look at T as the final exercise time, an arbitrary earlier exercise time
being also made possible by the option contract. For a                        it means
that the contractor chooses an              to receive            at time S not having
been forced by the contract to specify S. It seems that a fair definition of a price
         for such a contract should be



is the value of        at time            Since,                    for all      by
(G5) and the random variable                   is                  we also may write




Agree to call                   the American value of a
   If we consider a European call                and a European put
valued at time         by            where we denote either                     or
                    respectively, we refer to them as to an American call option
and an American put option, respectively, having on mind the option contract
that makes possible an arbitrary earlier exercise time          There are at least
two items that should be clarified:
   (1) A choice of an early exercise time                    should not be expected
deterministic, the contractor picks up S or waits on a later opportunity considering
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      361

the price history                and therefore, in fact, his choice is a Markov time
with values in the interval [0,T]. It seems that the American value of a
should be defined rather as


where M(T) denotes the set of all             times            Recall that
       is an                      variable according to 1.3.9 (c) and 1.3.1 (e).
   (2) The definition of the American value of a              is based on a heuristics
that seems to be fair only to the seller of the option. The contractor who is offered
to buy the option for the American price value should deserve to know in which
sense the offered price is minimal. Denote

and


The alternative definition of a fair price of the American option by         respects
the interests of the investor. Indeed, there is no way how to accumulate by a trading
the final profit that would be equivalent to that coming from entering the option
contract, than to trade along a wealth process
   If an American call                    and not an American put                   is
considered everything goes smoothly:

3.3.14 The Value of American Option. Assume that the interest rate                is a
non negative process. Let         be a convex function such that
and                    hold. Then

and         defined by (85) is the minimum of the right-hand side in (85). If Y is
a minimal admissible valuation of         then
   Thus, for example, if                   for a K > 0, then any of the American
values              we have suggested, is finite and equals to the European value
                                      of the option.
   Nothing like that may be true for American puts and a very different behavior
may be expected from the exotic options.

3.3.15 Example and Exercise. Denote                        and
for a K > 0, assume that only one stock is traded and further simplify the setting
by putting                      Then




is the value of the European call and put, respectively. Prove that                is
increasing on         and that there is a T > 0 for which                      holds.
Specify the set of all T ’s with the latter property.
362          STOCHASTIC MODELING IN ECONOMICS AND FINANCE


3.3.16 Exercise. Denote by                 the value of the exotic option given as
                                         and treated in 3.12 assuming there that
is positive constant. Prove that            is a decreasing function on        and

     Proof of 3.14. Obviously,                                  holds for arbitrary
If             then



by 1.3.10, since         is a                      by 3.5. The first three equalities
in (86) are proved.
   If Y is a process in             then Y is an admissible valuation of the claim
              such that                   holds almost surely. According to 2.7 we
have              and if             then


is true as                  is the minimal price of the claim     by 2.10 (a). Hence,

   On the other hand, if Y is a minimal admissible valuation of the claim
then 3.5 yields that



holds almost surely for any                 if       denotes the value of the option
          at time      It follows that                  and because
we get that                       and             is defined as the minimum of the
right-hand side set in (85).

3.3.17 Exercise. Let             and consider a   such as in 3.14. Prove that



is exactly the set of all minimal admissible valuations of
   We may summarize the message on American calls and puts provided by 3.14,
3.15 and 3.17 as follows. Let    and be such as in 3.15:
   If we do not want to buy the American call               we must trade along a
wealth process                  However, to trade with the minimal possible initial
endowment available in the set we are sent back to a minimal admissible valuation
of the European call          as the only trading strategy for such a purpose. The
values of the American and European call              are the same in all respects,
indeed.
   This is not true for the American and European put                  However, the
equality                         remains to be valid if one stock is traded and
and are constants. See [102], Theorem 3.39, p.3.5.
               III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                   363

3.4      Helps to Some Exercises
  1.4 Fix Since the process is progressive and bounded, we apply the Fun-
damental Theorem of Calculus to verify that outside a      set N




holds. Thus,              everywhere                                     Hence, the
limit in 1.4 is true, since we easily prove that




holds, observing that the processes       are bounded.
   1.10 The equation (35) reads as                   where the process V is defined
by (37). According to 2.2.19, the equality (37) defines V as an Itô process whose
quadratic variation is computed as                             It follows by 2.2.13
that (35) has a unique solution Y given by (36).
  1.11 Note that (4) defines the price process          and at the same time says
that         is a self-financing strategy.
  Alternatively, as in 1.9, you may to construct the wealth process generated by
                   and by           The wealth equation for Y reads then as




Hence,          according to 1.1.
   1.12 Denote by Y* the wealth process generated by                 and apply 2.1.5
to verify that                    Thus outside a P-null set                holds on
        On the other hand, we have          on         and so                    on

   1.13 Express          as in (10), apply 1.2.3 (c) to prove that
   1.14 In (b) and (c) apply 1.2.3 (c) and (b), respectively, to compute lim
In (d) note that E                     for all by 1.2.6., for example.
   2.10 (a)   is proved by 2.9.
   2.10 (b) For a              the reasoning goes as follows:

   Y is a m.a.v. of

                               is a

           Y is an admissible valuation with
         Y is a m.a.v. of
364           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

where a m.a.v. is a shorthand for a minimal admissible valuation.
  2.10 (c)    is proved by 2.7.
  2.10 (d) If Y is a m.a.v. of           then                   by (a). If Y is
an admissible valuation of     with                  then                   is a
               on [0, T] by 2.8 (b) and it follows by (b) that Y is a m.a.v. of

  2.10 (e) is proved by 2.8 (b).
  2.11 (a)    If processes    and       are defined by (43), it follows by 2.2 that




where              is a P-stochastic integral with respect to the P-semimartingale
      because                on [0, 1] and F = 0 on           According to (G3) and
2.4.2 (c),            is also a               integral, hence the equality (60) holds
as stated. The rest of (a) follows by (60) and (58).
  2.11 (b) If Y is the wealth process generated by                  then it is defined
by (60) and we have



Hence the admissibility of          implies that                       On the other
hand, if                      then         and             is a claim. It follows by
2.8 (a) that             is an admissible valuation of Y(1) iff (52) holds. But the
inequality stated by (a) implies (52), as we have already proved that
    2.14      is an admissible valuation of           and it is a                 on
[0, T] by 2.12 (b) and by 1.3.11. Consequently,       with               isa minimal
admissible valuation of        by 2.10 (b).
    2.16 Having fixed a consumption and a              consider the bijective map
                              defined in 2.5 Then, a wealth process Y in
is a nonnegative process iff                          holds almost surely on
Hence, an admissible strategy       for exists iff there is a process L such as in
(62).
   In (a) observe                          which is, according to (G2), a process
with properties (62).
   In (b) consider a process L that has the properties (62). Since L is a super-
martingale, we get                             to be true for all
   2.18   Note that according to 2.15
                 III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      365

Thus, it remains to prove that for any            there exists a              such that



For any          we have                             by 2.15. If     put
and if       choose                to construct such a consumption process.
  3.2     Note that
   3.8           is a minimal admissible valuation of                   iff




  3.10     Fix             According to 3.9 we have



where       is the value of the                    at time    Hence,
for                  such that                        Since                            it
follows by the continuity of and        that                  for all         and finally
that
  3.11 Apply (81), (75) and 1.13 to prove that for arbitrary U < T and arbitrary




holds, denoting again                                         This proves (82).
   3.17 If Y is a minimal admissible valuation of          then it is a process
in           by 3.14. Let Y be a process in            Then Y is an admissible
valuation of Y(T) and                 by 2.7. Further,



because the left hand term is exactly the minimal price of Y(T). Since
          holds almost surely, we conclude that                    On the other
hand                             and so the process Y is proved to be a minimal
admissible valuation of
366           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

III.4 BIBLIOGRAPHICAL NOTES

Not too many results in Part III of the present volume are new and therefore the
main purpose of the following notes is to refer to the sources that inspired our
presentation and proofs. Also, at times, some literature on recent developments is
suggested for additional reading.

   Generally, we expect our reader to be a mathematician familiar with the classical
standards of measure and probability theory (discrete-time martingales included)
as excellently summarized, for example, in Chapter II of [135] by L.C.G. ROGERS
AND D. WILLIAMS or in [6] by H. BAUER. Czech speaking readers may substitute
the above references by [152]. We also refer to the monograph [93] written by O.
KALLENBERG for a comprehensive treatise on almost all important achievements
of modern probability.
Martingales. The material covered in this chapter is a tiny section of that made
available by such rich sources as those provided by K. ITÔ AND M. MCKEAN in
[86], D. REVUZ AND M. YOR in [131] and by I. KARATZAS AND D.E. SHREVE in
[95], for example. The reader may find useful [32] by Y.S. CHOW AND H. TEICHER
as a source of information on discrete time martingales. We have made also use of
[37] by C. DELLACHERIE AND P.A. MEYER.
Our proof of Density Theorem 1.5.7 goes in essence along the lines suggested in
[95] (proof of 2.8, p.137). The proof of Doob-Meyer decomposition 1.6.1 heavily
depends on the idea employed in [131] to prove (1.3) Theorem, p. 115.
We refer to [135] and [136] by L.C.G ROGERS AND D. WILLIAMS for a more com-
plex information about continuous local martingales and for recent developments
in the theory of local martingales that need not be continuous.
Stochastic integration. We define the stochastic integral by (4) in III.2 as a
stochastic version of Pettis integral and prove its existence and properties simulta-
neously. The idea is, of course, not an entirely new one, it is very clearly suggested
by Kunita-Watanabe Theorem, see 15.12, p.282 in [93], for example. We have made
use of many sources, name at the very least the books [86], [95], [131], [136] and
[156].
Our proof of Itô formula relies on Weierstrass Theorem as in [93] or [136]. We
boast to prove it indeed for a dimension            having found a fitting and proved
Weierstrass theorem in [142] by L. SCHWARTZ. We prove the celebrated P. Lévy’s
martingale characterization of Brownian motion similarly as in [131] or [95] by an
application of Itô formula. See [93] for another and really elegant proof. The impor-
tant example 2.3.7 of an integrable local martingale that is not a true martingale
is basically Exercise 2. in [93], p. 293.
The Girsanov Theory and Brownian representations are presented to respect needs
of the chapter on diffusion financial mathematics. The treatment of this material
is inspired mostly by [131]. Thus, the proof of Girsanov theorem itself is based on
the characterization 2.3.8 that is, in fact, (3.14) Exercise in [131], p. 143 and the
global Girsanov theorem 2.4.9 is a one dimensional refinement of (1.13) Proposition
in [131], p. 317. The proof of 2.4.7, that in our text substitutes Novikov theorem, is
              III. STOCHASTIC ANALYSIS AND DIFFUSION FINANCE                      367

borrowed from [136], see (37.8) Theorem on p.77. For our construction of Brownian
representations by means of extremal martingale measures through the decomposi-
tion result 2.5.2 we are in debt to the Remark made on p. 202 in [131]. The results
2.5.7 and 2.5.11 are due to M. YOR, see V.4 Section in [131] whose origins come
from [175]. H.v. WEIZSÄCKER AND G. WINKLER in [168] provide further exiting
developments in the field that connects Choquet theory and stochastic analysis.
See also [154] and [155].
There are many other topics in stochastic analysis that deserve a close attention
from any financial probabilist: Time changed martingales, local times, strong and
weak theory of stochastic differential equations, stochastic control are perhaps the
most important items. We refer briefly again to [95], [131], [93], [136] and newly to
[103] for a complete treatment of the above topics.
Diffusion Financial mathematics. Among the sources that influenced this chap-
ter are undoubtedly [75] by J. HARRISON AND S.R. PLISKA as a deep and ingenu-
ously clear initiation to continuous stochastic finance (we borrowed 3.1.14 Example
there) and [123] by M. MUSSIELA AND M. RUTKOWSKI, a treasure reference text
in the field. We also owe a debt to T. ROLSKI, H. SCHMIDLI AND J. TEUGELS
[137] and R. KORN AND E. KORN [102] for precise mathematical definitions of the
financial concepts that go hand in hand with thorough and elegant clarifications of
their role in Economics. Our treatment of American options is based in part on
the enjoyable monograph [151] of J.M. STEELE. We borrowed there 3.3.4 Lemma,
some sophisticated observations on the meaning of various market regulations and
share 3.2.11 Example of a suicide trading strategy.
Our treatment of Black-Scholes and Girsanov calculus is a modest development of
the original results of I. KARATZAS AND D.E. SHREVE summarized in [95] and
[96]. Namely, the cornerstone result on the minimal price of a claim 3.2.10 is a
compactification of the information that is available in 5.8.A Section in [95].
As we started to write this part of the volume with a strong determination not to
include the results that we could not honestly prove, however attractive they might
be, we had to skip many important topics. Among them are:
The problem of the optimal control of portfolio and consumption processes that we
contacted in 3.2.18 is perhaps the most important one. We refer our reader to [94]
and [102] to obtain an up to date information on the topic. More general models
for stock prices, that go beyond Black-Scholes Gaussian limitations, offer further
possibilities to exploit the Girsanov Calculus and the properties of martingale mea-
sures, we introduced in 2.5 Section. For a more deep treatment of the concept of
arbitrage see [123] and [151], for example. To get a more realistic trading model it
is necessary to consider the size of transaction costs. See [149] and [170] for recent
developments in the field.
                                                                                               369

REFERENCES
 [1] Abaffy, J. et al., A nonparametric model for analysis of the Euro bond market, J. Econ.
    Dynamics & Control (to appear).
 [2] Abaffy, J. et al., On generating scenarios for bond portfolios, Bulletin of the Czech Econo
    metric Society 11 (2000), 3–27.
 [3] Anari, A. and Kolari, J., Stock prices and inflation, J. of Financial Research (2001), To
    appear.
 [4] Bachelier, L., Théorie de la spéculation, Ann. Sci. École Norm. Sup. 17 (1900), 2186.
 [5] Bank, B. et al., NonLinear Parametric Optimization, AkademieVerlag, Berlin, 1982.
 [6] Bauer, H., Probability Theory, Walter de Gruyter, Berlin, New York, 1996.
 [7] Bazaraa, M. S., Jarvis, J. J., and Sherali, H. D., Linear Programming and Network Flows,
    2nd edition, Wiley, New York, 1990.
 [8] Bazaraa, M. S., Sherali, H. D., and Shetty, C. M., Nonlinear Programming: Theory and
    Algorithms, 2nd edition, Wiley, New York, 1993.
 [9] Benninga, S. and Wiener, Z., Binomial option pricing, the BlackScholes option pricing
    formula, and exotic options, Mathematica in Education and Research 6 (1997), no. 4, 1–4.
[10] Benninga, S. and Wiener, Z., The binomial option pricing model, Mathematica in Education
    and Research 6 (1997), no. 3, 1–8.
[11] Benninga, S. and Wiener, Z., Binomial term structure models, Mathematica in Education
    and Research 7 (1998), no. 3, 1–9.
[12] Benninga, S. and Wiener, Z., Dynamic hedging strategies, Mathematica in Education and
    Research 7 (1998), no. 1, 1–5.
[13] Benninga, S. and Wiener, Z., Term structure of interest rates, Mathematica in Education
    and Research 7 (1998), no. 2, 1–9.
[14] Benninga, S. and Wiener, Z., ValueatRisk, Mathematica in Education and Research 7
    (1998), no. 4, 1–7.
[15] Bertocchi, M.,              J., and Moriggia, V., Sensitivity of bond portfolio’s behavior with
     respect to random movements in yield curve: A simulation study, Annals of Oper. Res. 99
     (2000), 267–286.
[16] Best, M. J. and Grauer, R. R., Sensitivity analysis for meanvariance portfolio problems,
     Management Science 37 (1991), 980–989.
[17] Bhatti, M. A., Practical Optimization Methods with Mathematica® Applications, TELOS
     SpringerVerlag, New York, 2000.
[18] Blý, J., Appendix D. Index numbers, Mathematical Economics (Allen, R. G. D.), Academia,
     Praha, 1971, pp. 761–765. (Czech)
[19] Birge, J. R. and Louveaux, F., Introduction to Stochastic Programming, Springer Series in
     Operations Research, Springer, New York, 1997.
[20] Birge, J. R. et al., A standard input format for multiperiod stochastic linear programs,
     COAL Newsletter 17 (1987), 1–20.
[21] Bisschop, J. J. and Roelofs, M., AIMMS The User’s Guide, Paragon Decision Technology
     B. V., Haarlem, 1999.
[22] Black, F., Derman, E., and Toy, W., A onefactor model of interest rates and its application
     to treasury bond options, Financial Analysts Journal (1990), no. Jan./Feb., 33–39.
[23] Black, F. and Scholes, M., Pricing of Options and Corporate Liabilities, J. Political Econ.
     81 (1973), 637654.
[24] Bradley, S. P. and Crane, D. B., A dynamic model for bond portfolio management, Man
     agement Science 19 (1972), 139–151.
[25] Brigham, E. F., Fundamentals of Financial Management, 6th ed., The Dryden Press, Forth
     Worth, 1992.
[26] Cambell, J. Y., Lo, A. W., and MacKinlay, A. C., The Econometrics of Financial Markets,
     Princeton University Press, Princeton, 1997.
[27]           D. R., Myers, D. H., and Ziemba, W. T., Concepts, technical issues and uses of the
     Russell – Yasuda Kassai financial planning model, Oper. Res. 46 (1998), 450–462.
[28]           D. R. and Ziemba, W. T., Formulation of the Russell – Yasuda Kassai financial
     planning model, Oper. Res. 46 (1998), 433–449.
370           STOCHASTIC MODELING IN ECONOMICS AND FINANCE

[29] Casimir, R. J., The newsboy and the flowergirl, Omega 18 (1990), 395–398.
[30] Censor, Y. and Zenios, S.A., Parallel Optimization: Theory, Algorithms, and Applications,
     Oxford University Press, New York, 1997.
[31] Chopra, W. K. and Ziemba, W. T., The effect of errors in means, variances and covariances
     on optimal portfolio choice, J. of Portfolio Management 19 (1993), 6–11.
[32] Chow, Y. S. and Teicher, H., Probability Theory: Independence, Interchangeability, Mar
     tingales, 2nd edition, Springer Verlag, New York, 1988.
[33] Cipra, T., Mathematics of Securities, HZ, Praha, 2000. (Czech)
[34] Consigli, G., Dynamic Stochastic Programming for Asset and Liability Management, PhD
     Dissertation, Univ. of Essex, Colchester, 1997.
[35] Consigli, G. and Dempster, M. A. H., Dynamic stochastic programming for assetliability
     management, Annals of Oper. Res. 81 (1998), 131–161.
[36] Damodaran, A., Investment Valuation, Wiley, New York, 1996.
[37] Dellacherie, C. and Meyer, P.A., Probabilités et Potential, Hermann, Paris, 19751993.
[38] Dembo, R. S., Scenario immunization, Financial Optimization (Zenios, S. A., ed.), Cam
     bridge University Press, 1993, pp. 290–308.
[39] Dempster, M. A. H., ed., Stochastic Programming, Academic Press, London, 1980.
[40] Dempster, M. A. H. and Ireland, A. M., A financial expert decision system, Math. Models for
     Decision Support (Mitra, B. , ed.), NATO ASI Series, Vol. F48, Springer, 1988, pp. 415–440.
[41] Doob, J. L., Stochastic Processes, Willey, New York, 1953.
[42] Dowd, K., Beyond Value at Risk, Wiley, Chichester, 1998.
[43] Duffie, D., Dynamic Asset Pricing Theory, 2nd ed., Princeton University Press, Princeton,
     1996.
[44]             J., Stochastic programming models in banking, (see also Tutorial paper, IIASA
     Laxenburg, 1991), Ekonomicko  Matematický Obzor 27 (1991), 201–234. (Czech)
[45]             J., Multistage stochastic programs: The stateoftheart and selected bibliogra
     phy, Kybernetika 31 (1995), 151–174.
[46]             J., Scenario based stochastic programs: Resistance with respect to sample, An
     nals of Oper. Res. 64 (1996), 21–38.
[47]             J., Uncertainty about input data in portfolio management, Modelling Techniques
     for Financial Markets and Bank Management (Bertocchi, M. et al., eds.), Physica Verlag,
     Heidelberg, 1996, pp. 17–33.
[48]              J., Stochastic programming: Approximation via scenarios, Apportaciones Ma
     tematicás, Ser. Communicationes 24 (1998), 77–94.
[49]             J., Portfolio optimization via stochastic programming: Methods of output anal
     ysis, MMOR 50 (1999), 245–270.
[50]             J., Stability properties of a bond portfolio management problem, Annals of Oper.
     Res. 99 (2000), 251–265.
[51]             J. and Bertocchi, M., From data to model and back to data: A bond portfolio
     management problem, European J. of Oper. Res. 134 (2001), 261–278.
[52]             J., Bertocchi, M., and Moriggia, V., Postoptimality for scenario based financial
     planning models with an application to bond portfolio management, World Wide Asset
     and Liability Modeling (Ziemba, W.T. and Mulvey, J., eds.), Cambridge Univ. Press, 1998,
     pp. 263–285.
[53]              J., Consigli, G., and Wallace, S. W., Scenarios for multistage stochastic pro
     grams, Annals of Oper. Res. 100 (2000), 25–53.
[54]             J. and Sladký, K., Comparison of multistage stochastic programs with recourse
     and stochastic dynamic programs with discrete time, ZAMM (to appear).
[55]             J. et al., On estimating the yield and volatility curves, Kybernetika 33 (1997),
     659–673.
[56] Einstein, A., On the theory of Brownian motion, Investigations on the Theory of the Brown
     ian Movement, Reprint ed. 1956, Dover, New York, originally published in 1906.
[57] Elton, E. J. and Gruber, M. J., Modern Portfolio Theory and Investment Analysis, 4th ed.,
     Wiley, New York, 1991.
[58] Ermoliev, Y. M. and Wets, R. J.B., Numerical Techniques for Stochastic Optimization
     Problems, Springer Series in Computational Mathematics 10, Springer, Berlin, 1988.
                                        REFERENCES                                            371

[59] Escudero, L. F. et al., Production planning via scenario modeling, Annals of Oper. Res. 43
     (1993), 311–335.
[60] Fabozzi, F. J., ed., The Handbook of Fixed Income Securities, 5th ed., McGraw-Hill, New
     York, 1997.
[61] Fabozzi, F. J. and Kole, S., eds., Selected Topics in Investment Management for Financial
     Planning, Dow Jones-Irwin, Homewood (IL), 1985.
[62] Fiacco, A. V., Introduction to Sensitivity and Stability Analysis in Nonlinear Programming,
     Academic Press, New York,, 1993.
[63] Fleming, W. H. and Rischel, R. W., Deterministic and Stochastic Optimal Control, Springer
     Verlag, New York, 1975.
[64] Föllmer, H. and Leukert, P., Quantile hedging, Unpublished manuscript (1998), Humboldt-
     Universität zu Berlin.
[65] Fourer, R., Gay, D. M., and Kernighan, B. W., AMPL — A Modeling Language for Mathe-
     matical Programming, Duxbury Press/Brooks/Cole Publishing Company, New York, 1993.
[66] GAMS D.C., GAMS 2.5 Documentation, GAMS, Washington, 2000.
[67] Gänssler, P. and Stute, W., Wahrscheinlichkeitstheorie, Springer Verlag, New York, 1977.
[68] Gassmann, H. I., MSLiP: A computer code for the multi-stage stochastic programming
     problem, Math. Progr. 47 (1990), 407–423.
[69] Gol’shtein, E. G., Vypukloje Programmirovanije. Elementy Teoriji, [Theory of Convex Pro-
     gramming, Translations of Mathematical Monographs 36; American Mathematical Society,
     Providence (RI), 1972], Nauka, Moscow, 1970. (Russian)
[70] Golub, B. et al., Stochastic programming models for portfolio optimization with mortgage-
     backed securities, European J. of Oper. Res. 82 (1995), 282–296.
[71] Grinold, R. C., Infinite horizon stochastic programs, SIAM J. Control and Optimization 24
     (1986), 1246–1260.
[72] Guddat, J. et al., Multiobjective and Stochastic Optimization Based on Parametric Opti-
     mization, Mathematical Research – Mathematische Forschung, Band 26, Akademie-Verlag,
     Berlin, 1985.
[73] Hadley, G., Nonlinear and Dynamic Programming, Addison-Wesley, Reading (MA), 1964.
[74] Hansen, P. and Jaumard, B., Cluster analysis and mathematical programming, Math. Progr.
     79 (1997), 191–215.
[75] Harrison, J. and Pliska, S. R., Martingales and stochastic integrals in the theory of contin-
     uous trading, Stochastic Process. Appl. 11 (1981), 215-260.
[76] Higgins, R. C., Financial Management, Science Research Associates, Chicago, 1977.
[77] Higle, J. and Sen, S., Stochastic Decomposition. A Statistical Method for Large Scale Sto-
     chastic Linear Programming, Kluwer, Dordrecht, 1996.
[78] Hillermeier, C., Nonlinear Multiobjective Optimization. A Generalized Homotopy Approach,
     International Series of Numerical Mathematics 135, Birkhäuser, Basel, 2001.
[79] Hirschleifer, J., Investment decision under uncertainty-choice theoretic approaches, The
     Quarterly J. of Economics 74 (1965), 509–536.
[80] Høyland, K. and Wallace, S. W., Generating scenario trees for multistage problems, Man-
     agement Science 47 (2001), 295–307.
[81] Hull, J. C., Options, Futures, and Other Derivative Securities, 2nd ed., Prentice-Hall, En-
     glewood Cliffs, 1993.
[82] Hunt, P. J. and Kennedy, J. E., Financial Derivatives in Theory and Practice, Wiley,
     Chichester, 2000.
[83] Hurt, J. and Koch, R., Mathematical methods of risk control, Proceedings of the Seminar on
     Actuarial Sciences, Czech Society of Actuaries 2000/2001, Praha, 2001, pp. 53–67. (Czech)
[84] Infanger, G., Planning under Uncertainty: Solving Large-Scale Stochastic Linear Programs,
     Boyd and Fraser, Danvers, 1994.
[85] Ingersoll, J. E. Jr., Theory of Financial Decision Making, Rowman & Littlefield, Savage,
     1987.
[86]      K. and McKean, M., Diffusion Processes and Their Sample Paths, 2nd printing,
     Springer Verlag, New York, 1974.
[87] Jamshidian, F. and Yu Zhu, Scenario simulation: Theory and methodology, Finance and
     Stochastics 1 (1997), 43–67.
372            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

 [88] Jarrow, R. A., Maksimovic, V., and Ziemba, W. T., eds., Finance, Handbooks in Operations
      Research and Management Science Volume 9, Elsevier, Amsterdam, 1995.
 [89] Jorion, P., Value at Risk, McGrawHill, New York, 1997.
 [90] Kahn, R. N., Fixed income risk modelling, The Handbook of Fixed Income Securities
      (Fabozzi, F., ed.), 3rd Edition, Irwin, New York, 1991, pp. 1307–1319.
 [91] Kall, P. and Wallace, S. W., Stochastic Programming, WileyInterscience Series in Systems
      and Optimization, Wiley, Chichester, 1994.
 [92] Kallberg, J. G. and Ziemba, W. T., An algorithm for portfolio revision: Theory, com
      putation, algorithm and empirical results, Applications of Management Science 1 (1981),
      267–291.
 [93] Kallenberg, O., Foundations of Modern Probability, Springer Verlag, New York, 1997.
 [94] Karatzas, I., Optimization problems in the theory of continuous trading, SIAM J. Control
      and Optimization 27 (1989), 12211259.
 [95] Karatzas, I. and Shreve, D. E., Brownian Motion and Stochastic Calculus, Springer Verlag,
      New York, 1991.
 [96] Karatzas, I. and Shreve, D. E., Methods of Mathematical Finance, Springer Verlag, New
      York, 1998.
 [97] Kataoka, S., A stochastic programming model, Econometrica 31 (1963), 181–196.
 [98] Kira, D. and Ziemba, W. T., Equivalence among alternative portfolio selection criteria,
      Financial Decision Making under Uncertainty (Levy, H. and Sarnat, M., eds.), Academic
      Press, New York, 1977, pp. 151–161.
 [99] Klein Haneveld, W. H. and van der Vlerk, M., Stochastic integer programming: General
      models and algorithms, Annals of Oper. Res. 85 (1999), 39–57.
[100] Kolari, J. W., An analytical model of risky yield curves, J. of Financial Research X (1987),
      295–303.
[101] Konno, H. and Yamazaki, H., Meanabsolute deviation portfolio optimization model and its
      applications to Tokyo stock market, Management Science 37 (1991), 519–531.
[102] Korn, R. and Korn, E., Option Pricing and Portfolio Optimization, American Mathematical
      Society, Providence (RI), 2000.
[103] Krylov, N., Controlled Diffusion Processes, Springer Verlag, New York, 1980.
[104] Kusy, M. I. and Ziemba, W. T., A bank asset and liability management model, Oper. Res.
      34 (1986), 356–376.
[105] Kwok, Y. K., Mathematical Models of Financial Derivatives, Springer, Singapore, 1998.
[106] Lane, M. and Hutchinson, P., A model for managing a certificate of deposit portfolio under
      uncertainty, Stochastic Programming (Dempster, M. A. H., ed.), Academic Press, London,
      1980, pp. 473–495.
[107] Lewis, A. L., Option Valuation under Stochastic Volatility with Mathematica Code, Finance
      Press, Newport Beach (CA), 2000.
[108] Louveaux, F. V. and Smeers, Y., Optimal investments for electricity generation: A stochas
      tic model and a test problem, Numerical Techniques for Stochastic Optimization Problems
      (Ermoliev, Yu., Wets, R. J.B., eds.), Springer, pp. 445–453.
[109] Madalla, G. S. and Rao, C. R., eds., Statistical Methods in Finance, Handbook of Statistics
      Volume 14, Elsevier, Amsterdam, 1996.
[110] Madansky, A., Bounds on the expectation of a convex function of a multivariate random
      variable, AMS 30 (1959), 743–746.
[111] Mandl, P., Lánská, V., and         I., Exercises in stochastic analysis, Supplement, Kyber
      netika 14 (1978), 36 pp.
[112] Markowitz, H. M., Portfolio selection, J. of Finance 6 (1952), 77–91.
[113] Mayer, J., Stochastic Linear Programming Algorithms: A Comparison Based on a Model
      Management System, Gordon and Beach Science Publ., Amsterdam, 1998.
[114] McCutcheon, J. J. and Scott, W. F., An Introduction to the Mathematics of Finance,
      ButterworthHeinemann, Oxford, 1986.
[115] Merton, R. C., Optimum consumption and portfolio rules in a continuoustime model, J.
      Econom. Theory 3 (1971), 373413.
[116] Merton, R. C., ContinuousTime Finance, Blackwell, Cambridge (MA), 1992.
[117] Moré, J. J. and Wright, S. J., Optimization Software Guide, SIAM, Philadelphia, 1993.
                                          REFERENCES                                             373

[118] Morgan, J. P., Reuters, RiskMetrics™ – Technical Document, 4th ed., Morgan Guaranty
      Trust Company, New York, 1996.
[119] Mulvey, J. M., Rosenbaum, D. P., and Shetty, B., Strategic financial risk management and
      operations research, European J. of Oper. Res. 97 (1997), 1–16.
[120] Mulvey, J. M., Vanderbei, R. J., and Zenios, S. A., Robust optimization of large scale
      systems, Oper. Res. 43 (1995), 264–281.
[121] Mulvey, J. M. and Vladimirou, H., Stochastic network optimization models for investment
      planning, Annals of Oper. Res. 20 (1989), 187–217.
[122] Mulvey, J. M. and Vladimirou, H., Applying the progressive hedging algorithm to stochastic
      generalized networks, Annals of Oper. Res. 31 (1991), 399–424.
[123] Musiela, M. and Rutkowski, M., Martingale Methods in Financial Modelling, Springer Ver-
      lag, New York, 1997.
[124] Pflug, G. Ch., Scenario tree generation for multiperiod financial optimization by optimal
      discretization, Mathematical Programming 89 (2001), 251–271.
[125] Pflug, G. Ch. and Swietanowski, A., Dynamic asset allocation under uncertainty for pension
      fund management, Cybernetics and Control 28 (1999), 755–777.
[126] Popela, P., An Object-Oriented Approach to Multistage Stochastic Programming: Models
      and Algorithms, PhD Dissertation, UK MFF, Prague, 1998.
[127]                 Volatility estimation and bootstrap, Prob. Theory and Math. Stat. (Grigelionis
      B. et al., eds.), VSP, Zeist, 1999, pp. 589–598.
[128] Prékopa, A., ed., Studies in Applied Stochastic Programming, MTASzTAKI, Budapest,
      1978.
[129] Prékopa, A., Network planning using two stage stochastic programming under uncertainty,
      Recent Results in Stochastic Programming (Kall, P. and Prékopa, A., eds.), LNIEMS 179,
      Springer, Berlin, 1980, pp. 215–237.
[130] Prékopa, A., Stochastic Programming, Kluwer and Akademiai Kiadó, Dordrecht and Bu-
      dapest, 1995.
[131] Revuz, D. and Yor, M., Continuous Martingales and Brownian Motion, Springer Verlag,
      New York, 1994.
[132] Robinson, S. M., A characterization of stability in linear programming, Oper. Res. 25
      (1976), 435–447.
[133] Rockafellar, R. T. and Wets, R. J.-B., Nonanticipativity and                      in stochastic
      optimization problems, Mathematical Programming Study 6 (1976), 170–187.
[134] Rockafellar, R. T. and Wets, R. J.-B., Scenarios and policy aggregation in optimization
      under uncertainty, Mathematics of Oper. Res. 15 (1991), 119–147.
[135] Rogers, L. C. G. and Williams, D., Diffusions, Markov Processes and Martingales. Volume
      1: Foundations, Cambridge University Press, Cambridge, 2000.
[136] Rogers, L. C. G. and Williams, D., Diffusions, Markov Processes and Martingales. Volume
      2:     Calculus, Cambridge University Press, Cambridge, 2000.
[137] Rolski, T. et al., Stochastic Processes for Insurance and Finance, Wiley, Chichester, 1999.
[138] Rose, P. S., Kolari, J., and Fraser, D. R., Financial Institutions, 4th ed., IRWIN, Homewood
      (IL), 1993.
[139] Roy, A. D., Safety-first and the holding of assets, Econometrica 20 (1952), 431–449.
[140] Saaty, T. L., The Analytic Hierarchy Process, RWS Publications, Pittsburgh, 1990.
[141] Samuels, J. M., Wilkes, F. M., and Brayshaw, R. E., Management of Company Finance,
      5th ed., Chapman & Hall, London, 1990.
[142] Schwartz, L., Analyse Mathematique I, Hermann, Paris, 1967.
[143] Sears, R. S. and Trennepohl, G. L., Investment Management, The Dryden Press, Forth
      Worth, 1993.
[144] Serfling, R. J., Approximation Theorems in Mathematical Statistics, Wiley, New York, 1980.
[145] Sharpe, W. F., Mean-absolute-deviation characteristic lines for securities and portfolios,
      Manag. Sci. 18 (1971), B1–B13.
[146] Sharpe, W. F., Investments, 3rd ed., Prentice-Hall, Englewood Cliffs, 1985.
[147] Shaw, W. T., Modelling Financial Derivatives with Mathematica®, Cambridge University
      Press, Cambridge, 1998.
[148] Shaw, W. T. and Tigg, J., Applied Mathematica®, Addison-Wesley, Reading (MA), 1994.
374             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

[149] Shreve, S. E. and Soner, H. M., Optimal investment and consumption with transaction
      costs, The Annals of Applied Probability 4 (1994), 609-692.
[150] Späth, H., Algorithmen für Elementare Ausgleichs-modelle, R. Oldenburg Verlag, Munich,
      1973.
[151] Steele, J.M., Stochastic Calculus and Financial Applications, Springer Verlag, New York,
      2001.
[152]           J., Probability Theory.Mathematical Foundations, Academia, Prague, 1987. (Czech)
[153]         , J. and Hlubinka, D., One dimensional observation of two dimensional diffusion
      process, ESES’96 Proceedings, Proceedings the Satellite Meeting of 4th World Congress
      of the Bernoulli Society (Horová, I.,                J., and Vosmanský, J., eds.), Masaryk
      University, Brno, 1996, pp. 149–156.
[154]            J. and          P., Convex analysis for sets of local martingale measures, Acta
      Universitatis Carolinae, Mathematica et Physica 41 (2000), 57-80.
[155]           J. and          P., Local martingale measures, Acta Universitatis Carolinae, Math-
      ematica et Physica 41 (2000), 37-55.
[156] Stroock, D. W. and Varadhan, S. R. S., Multidimensional Diffusion Processes, Springer
      Verlag, New York, 1979.
[157] Takriti, S., Birge, J. R., and Long, E., A stochastic model for the unit commitment problem,
      IEEE Trans, on Power Systems 11 (1996), 1497–1508.
[158] Takriti, S., Krasenbrink, B., and Wu, L. S.-Y., Incorporating fuel constraints and electricity
      spot prices into the stochastic unit commitment problem, Oper. Res. 48 (2000), 268–280.
[159] Taylor, S. J., Modelling Financial Time Series, Wiley, Chichester, 1986.
[160] Telser, L. G., Safety first and hedging, Review of Economic Studies 23 (1955), 1–16.
[161] Van Home, J. C., Financial Market Rates and Flows, Prentice-Hall, Englewood Clifs, 1978.
[162] Varian, H. R., ed., Economic and Financial Modeling with Mathematica®, TELOS Springer
      Verlag, New York, 1993.
[163] Varian, H. R., ed., Computational Economics and Finance, TELOS Springer Verlag, New
      York, 1996.
[164]            O., An equilibrium characterization of the term structure, J. of Financial Economics
      5 (1977), 177–188.
[165] Vetzal, K. R., Stochastic volatility, movements in short term interest rates, and bond option
      valuation, J. of Banking & Finance 21 (1997), 169–196.
[166] Ville, J., Étude Critique de la Notion du Collectif, Gauthier-Villars, Paris, 1939.
[167] Vladimirou, H. and Zenios, S. A., Stochastic linear programs with restricted recourse, Eu-
      ropean J. of Oper. Res. 101 (1997).
[168] von Weizsäcker, H. and Winkler, G., Non-compact extrernal integral representations: some
      probabilistic aspects, Functional Analysis: Surveys and recent results II, Mathematics Stud-
      ies 38, North Holland, Amsterdam, 1980, pp. 115-148.
[169] Wets, R. J.-B. and Ziemba, W. T., eds., Stochastic Programming: The State of the Art
      1998, Annals of Oper. Res. 85, Baltzer, Bussum, 1999.
[170] Whalley, A. and Wilmott, P., An asymptotic analysis of an optimal hedging model for
      option pricing with transaction costs, Mathematical Finance 7 (1997), 307-322.
[171] Wiener, N., Differential space, J. Math. Phys. 2 (1923), 131-174.
[172] Wilmott, P., Howison, S., and Dewynne, J., The Mathematics of Financial Derivatives, A
      Student Introduction, Cambridge University Press, Cambridge, 1995.
[173] Wise, A. J., A theoretical analysis of the matching of assets to liabilities, J. of the Institute
      of Actuaries III (1984), 375–402.
[174] Wolfram, S., The Mathematica® Book, 4th ed., Wolfram Media/Cambridge University
      Press, Champaign/Cambridge, 1999.
[175] Yor, M., Quelques Résultats sur Certaines Measures Extrémales à la Representation des
      Martingales, Springer Lecture Notes in Mathematics 695, Springer Verlag, New York, 1979.
[176] Zenios, S. A., ed., Financial Optimization, Cambridge University Press, Cambridge, 1993.
[177] Zenios, S. A. and Shtilman, M. S., Constructing optimal samples from a binomial lattice,
      J. of Information & Optimization Sciences 14 (1993), 125–147.
[178] Ziemba, W. T. and Mulvey, J. M., eds., World Wide Asset and Liability Modeling, Cam-
      bridge University Press, Cambridge, 1998.
                                       REFERENCES                                        375

[179] Ziemba, W. T. and Vickson, R. G., eds., Stochastic Optimization Models in Finance, Aca-
      demic Press, New York, 1975.
[180] Zvára K., Regression Analysis, Academia, Prague, 1989. (Czech)
                                                                                             377

INDEX

AAA, 4, 17                                         Black–Derman–Toy model, 160–162, 171, 175,
absolutely matched, 64                                    187, 188, 193
aggregate, 69                                         calibration, 188–190
algorithms for stochastic programs, 206–227        Black-Scholes calculus, 319–333, 368
   decomposition, 214–215                          Black-Scholes formula, 55–56, 61, 199, 353
   interior-point, 214                                for European call, 56
   L-shaped, 215–217, 219–221, 225                    for European put, 56
   Lagrangian-based, 217                              sensitivity to volatility, 199–200
   progressive hedging, 217–218, 223               Black–Scholes model, 41, 322
   stochastic decomposition, 224                   blue chip, 4, 70
   stochastic quasigradient, 224                   bond, 3
ALM model, 141–144                                    amortized, 52
AMEX, 71                                              callable, 5, 51
annuity, 21, 23                                       convertible, 11
   due, 23                                            convertible, with call option, 11
   immediate, 23                                      convertible, with put option, 11
APM, 96                                               coupon, 5, 48–52
approximation, 158–179, 224–225                       dirty price of, see value of bond
APT, 96                                               discount, 50, see zero coupon bond
arbitrage, 52–53                                      fair price of, see value of bond
arbitrage opportunity, 52–53, 350                     floating–rate, 6, 11
Arbitrage Pricing Model, see APM                      full price of, see value of bond
Arbitrage Pricing Theory, see APT                     gross price of, see value of bond
arborescent form, 113                                 I bonds, 7
asset, 3, 64                                          inflation–indexed saving bonds, see I bonds
   base, 64                                           net value of, 49
   commodity, 8                                       premium, 50
   financial, 1, 8                                    pure price of, see net value of bond
   real, 1                                            pure value of, see net value of bond
   riskfree, see riskless asset                       putable, 51
   riskless, 43, 82, 83, 88                           to call, 5
   underlying, 7                                      under uncertainty, 51
asset–specific component, see idiosyncratic risk      value of, 48
atom, 104                                             zero coupon, 6
auction, 4                                         bond portfolio management problem, 180–198
autoregressive model                               BONDS model, 116–117, 139–141, 173–174
   vector, 160                                     bootstrapping, 51
available information, 159–164                     bottom straddle, 63
   low level, 163, 166–167                         Brownian motion, 231, 238–244
average strike call, 10                               geometrical, 291
                                                   Brownian representation, 277, 314, 367
backward recursion, 110, 120, 121                  BS–model, see Black–Scholes model
bankruptcy, 7                                      bullish spread, 63
    time, 330                                      butterfly spread, 62, 63
barter, 1                                          buyer, 8, 9
Beta books, 94
bias, 69                                           calendar convention, 13, 14–15
bill of exchange, 12                               call back, 11
binomial lattice, see Black–Derman–Toy model       call date, 5
    fitted, 190, 195                               call on a call or put, 10
binomial model, 56–58                              call premium, 5
bipolar factor, 100                                call-on-a-call, 10
378            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

CALL, see call option                            continuous time market model, 324
cap, 11                                          conversion premium, 11
capacity expansion, 150–153                      convex program, 107
capital, 1                                       convexity, 21, 30
Capital Asset Pricing Model, see CAPM                modified, 30
capital market, 12                               convexity properties, 111–112
capital market line, see CML                     correlation matrix of standardized returns, 98
caplet, 12                                       cost of capital, 16, 21, 22, 31
CAPM, 92, 93, 96                                 Counterparty, 3
cash flow, 1, 2, 21, 31                          coupon payment, 48
    certainty equivalent, 78                     coupon, 5, 48
    continuous, 23                                   rate, 5, 48
    measures of, 21–38                           covariance, 237
    net, 2                                       CPI, 7, 68, 71
Cauchy problem, 356                              criterion for optimization
CBOE, 9                                              chance-constrained, 129
CBT, 8                                               expected utility, 130
CD, see Certificate of Deposit                       expected value, 131
CEP, see capacity expansion                          mean-variance, 127
certainty equivalent, 77–78                          probability, 109, 129
    multiperiod, 78                                  quantile, 130
Certificate of Deposit, 4, 12                        safety-first, 129
checking account, 4                              crossover rate, 33
Chicago Board of Trade, see CBT                  cubic spline, 37
Chicago Board Options Exchange, see CBOE         currency unit, 21
claim, 339                                       curse of dimensionality, 121
    admissible valuation, 339, 341
    minimal admissible valuation, 339, 341                     166
    minimal price, 339                           daily price limit, 8
    valuation, 339, 340                          Daniell-Kolmogorov Theorem, 236, 238
class I projects, 31                             data process, 181
class II projects, 31                            DAX 30, 71
clearing house, 8                                debt, 3
cluster analysis, 172                            decision rule, 110, 119–121
CML, 95                                          dedicated bond portfolio, 65–67
Cobb-Douglas production function, 75                 dynamic model, 66–67
communality, 98                                      static model, 65–66
completeness, 73                                     stochastic model, 105–106
compounding, 13                                  deflation, 71
    continuous, 13, 19–20                        delivery date, 8
    period of, 14                                delivery price, 8
compromising model, see tracking model           delta, 59
conditional expectation, 241                     delta hedging, 59
consistent                                       demand deposit, 4
    family of distribution functions, 236        density theorem, 231, 257–263, 261, 367
constraints                                      derivative, see financial derivative security
    chance, 109                                  derivative process, 300
    induced, 109                                 descendant, 114
    probabilistic, 109                           deterministic process, 317
consumption process, 324                         diffusion, 41
contamination method, 167–169, 185-186, 193–     diffusion process, 290
       195                                       discount, 21
contingent claim, see financial derivative se-   discount factor, 21
       curity                                    discount function, 21, 319
continuity factor, 71                            discount process, 21, 319
continuity theorem, 272, 283                     discounted base, 4
                                              INDEX                                           379

discounted function, 19                            expiry date, see maturity date
   of the Stoodley’s force of interest, 20
discounted mean term of the cash flow, see                        process, 237
       duration                                                      set, 247
dividend, 7                                        face value, 4, 5, 48
divisor, 71                                             total, 4
DJIA, 70                                           factor
Doléans equation, 292                                   common, 97
dominated convergence, 283, 285                         loading, 97
Doob’s inequalities, 243                                specific, see unique factor
Doob-Meyer decomposition, 231, 263–269, 264,            unique, 97
       287, 367                                    factor analysis, 97–99
Dow Jones, 68                                      factor beta, 93
Dow Jones Industrial Average, see DJIA             factor model, 97–99
down-and-in, 10                                    feasibility cut, 109, 215, 220
down-and-out, 10                                   figure
drift, see trend                                        black, 2
duration, 29–30, 64                                     bracket, 2
   dollar, 30, 134                                      red, 2
   modified, 30                                    filtration, 237
duration matching, 198                                  canonical, 237, 246
dynamic hedge, 59                                       complete, 231, 252–257, 255, 263, 269, 300
Dynkin arguments, 235                                   P-completion, 256
                                                        right continuous, 245
                problem, 125, 135                  financial asset, 3
E-process, see stochastic process with states      financial institutions, 1, 2, 12
        in E                                       financial intermediaries, 2, 12
economic power dispatch problem, 153–154           financial market, 1, 12
Edmundson-Madansky bound, 177–178, 204–            financial security, see security
        205                                        financial system, 1, 12
efficient market, 79                               financing the business, 1
elasticity, 60                                     firm-specific component, see idiosyncratic risk
elasticity of the net present value with respect   fixed rate, 7
       to the discount factor, see duration        floating rate
empirical quantile, 46                                  long-term, 7
equation of value, 21, 25                               short-term, 7
equity, see common stock                           floor, 12
equivalent, 73                                     floorlet, 12
errors due to estimation, 195–197                  flower-girl problem, 117–119, 121–122
EVPI, 208                                          force of interest, 19, 21, 39
ex-coupon, 48                                           random, 67
    date, 48                                       forward, 3, 8
exercise price, 11, 353, see strike price          forward contract, see forward
exercise time, 353                                 forward price, 63
exercised, 9, 53                                   forward rate implied in the term structure
expected excess return, 88, 90                          for one period, 18
    alternative form of, 92                                        beginning at time       18
expected return, 80                                forward-rate curve, 35
    on the portfolio, 80                           free lunch, 52
expected utility, 130–131                          frequency, 48
expected value, 39                                 FTSE, 68
Expected Value of Perfect Information, see         FTSI, 71
        EVPI                                       funds, 15
expected-return-standard-deviation plane, 86       furnace charge optimization
expected-return-variance plane, 86                      electric-arc three-stage, 156–157
expiration time, see exercise time                      induced two-stage, 155–156
380             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

future value, 13, 21, 24–26                            annual, see p.a.
futures, 3, 8                                          constant, 20
   price, 8                                            decomposition of, 16–18
futures contract, see futures                          determinants of, 13, 15–16
                                                       in continuous math, see force of interest
gamma, 60                                              nominal, 14, 16
GAMS, 212–213, 226–227                                 quoted, see nominal interest rate
Gaussian process, 237                                  risk free, 16
   centered, 237                                       spot, 18
   continuous, 237                                     term structure of, 13, 18, 35, 193
geometrical Brownian motion, 42                    interest rate process, 319
Girsanov calculus, 319, 333–350, 368               internal value, see HIV
Girsanov theorem, 277, 303, 367                    International Swaps and Derivatives Associa-
goal programming, 126, 131, 133–134, 176                   tion, see ISDA
Greeks, 59–61                                      interstage independence, 120
                                                   intrinsic value, 53
hedge ratio, 59                                    invariance property, 73
hedger, 53                                         investment, 1
hedging, 53                                            financial, 1
here-and-now approach, 133, 207                        real, 1
HIV, 35                                            investment projects, 21
holder, 9                                              comparison of, 31–35
homogeneous expectations, 79                       investor, 1
horizon, 116–117                                   IOU, 12
                                                   IRP, see integral representation property
immunization, 64                                   irregular project, see nonnormal project
immunize, 64                                       IRR, 21, 26–29
in-barrier, 10                                     ISDA, 10
incomplete input information, 199                  Itô formula, 42, 277, 286–295, 288, 367
   about liabilities, 204–205
increment, 42                                      Jensen inequality, 167, 204
independent projects, 31                           Jensen measure, 94
index number, 68–70
   base-weighted, 69                               knapsack problem
   construction of, 68                                deterministic, 206
   current-weighted, 69                               stochastic, 206–208
indifference                                       Kolmogorov-Chenstov Theorem, 236
   curve, 73                                       Kunita-Watanabe inequality, 273, 367
   set, 73                                         kurtosis, 46
    surface, 73
individual scenario problem, 112, 133              Langevin equation, 291
inflation, 71–72                                   law of diminishing marginal utility, 74
inflation rate, 7                                  law of iterated logarithm, 240
inflow, 2, 21                                      leasing, 28
initial endowment, 323, 324                        Lenglart inequality, 272
installment savings, 25                            lessee, 28
integral of a process with respect to a process,   lessor, 28
        259                                        Lévy theorem, 277, 295–299, 296, 367
integral representation property, 277, 315             one dimensional, 297
interest, 1, 5, see coupon rate                    liability, 3, 64
    accrued, 49                                        limited, 7
    compound, 13                                   LIBOR, 6
    mixed simple and compound, 13-14               linear program, 107
    simple, 13                                         stable, 187
interest rate, 13–20, 13                           liquidity, 12, 36
                                              INDEX                                            381

load duration curve, 150                           minimum-variance frontier, 86
loan, 23                                           MIRR, 28
localization of integrands and integrators, 280–   model management, 226–227
      282, 286                                     moment
location parameter, 44                               prescribed values, 175
location-scale distribution, 44                      problem, 175
logarithmic prices, 39                             moment bounds, 167
London Interbank Offered Rate, see LIBOR             minimin and minimax, 167
long-term, 5, 6                                    money, 1
loss of load probability, 152                        at the money, 53
loss rate, 52                                        in the money, 53
lot, 79                                              out of money, 53
low information level, 163, 166–167, 204–206       money market, 12
                                                   Monte Carlo simulation, 47, 58
margin, 8, see spread                              Moody’s, 3, 17
   initial, 8                                      mortgage, 3
   maintenance, 8                                  MPS standard format, 210–211
   variation, 8                                    multifactor model, 96, 162–163
marginal rate of substitution, 74                  multimodeling, 227
market equilibrium, 80                             multi-objective program, 123–127, 131–136
market regulation, 319, 350–363                    multiple cut, 216
marking to market, 8                               mutually exclusive projects, 31
Markov decision problem, 120
Markov property, 121                               NASDAQ, 71
  data structure, 172–173                          network structure, 146, 217
Markov time, 231, 244–251                          New York Stock Exchange, see NYSE
                time, 244                          Nikkei, 71
Markowitz model, 81–91, 127–128, 200               no-arbitrage principle, 52, 175
   sensitivity to expected return, 200–203         nominal value, see face value
martingale, 231, 233, 238–244, 377                 nonanticipativity, 104, 106, 108, 113, 137, 148,
  complex local                    296                   217
  exponential, 277, 295–299, 296                      implementability constraint, 149
                    241                            nonnormal project, 28
                    231, 257–263                   normal distribution model, 57
                     244                           normal project, 28
  local, 231, 252–257, 254, 277                    note, 6
  local                   252                      NYSE, 70
  local                  on [0,T], 297             NYSE Composite Index, 71
matching, 64–65
   absolute, 64                                    objective function, 107
  stochastic model of, 67                             probability, 109
Mathematica, 15, 60                                   separability property of, 120, 121
mathematical program, 106–107                         two or more, see multi-objective program
matrix                                             oblique rotation, 100
  scenario tree nodal partition, 174               one-directional bias, 165–166
maturity, 5, see exercise time                     open interest, 8
   date, 4, 5, 9, 53                               opportunity cost rate, see cost of capital
mean, 237                                          optimality cut, 215
mean squared error, 67                             optimization software, 209–212
mean-reversion property, 162                       option, 3, 8, 9–10, 52–63
measure                                               American, 9, 361, 368
   extremal, 311                                      American put, 361
   martingale, 316                                    American, value of, 362
   T-Girsanov, 334                                    Asian, 10, 359
melt control problem, 154–157                         as-you-like-it, see chooser option
metamodeling, 227
382            STOCHASTIC MODELING IN ECONOMICS AND FINANCE

   barrier, 10                                     barbell maturity structure, 141
   binary, 10                                     efficient, 81, 87, 127—129
   call, 9                                        global minimum-variance, 86
   chooser, 10                                    inefficient, 87
   compound, 10                                   laddered, 141
   digital, see binary option                      market, 78, 80, 91–92
   European, 9, 353                                minimum-variance, 81, 89
   European put, 357                              minimum-variance, alternative form of, 85
   European put, value of, 358                    minimum-variance, geometry of, 91
   European, value of, 354                         minimum-variance, orthogonal, 87
   exotic, 9, 358                                  no arbitrage, 351
   exotic binary, 359                             optimal, 81
   exotic binary, value of, 360                    replicating, 56
   exotic, value of, 358                           revision, 137–139
               353                                 Sharpe’s measure of, see Sharpe’s ratio
              American value of, 361               tangency, 89–90
              hedging strategy against, 353    portfolio immunization, 134
              value of, 353, 357               portfolio process, 324
   lookback, 10                                    associated with T-strategy, 324
   on assets paying dividend, 58               position
   path-dependent, see exotic option              long, 3
   premium, 9                                     short, 3
   price, see option premium                   postoptimality analysis, 158, 167–169, 185–
   pricing, 319, 350–363                              186, 192–195
   pricing, natural boundaries, 54             Prague Interbank Offered Rate, see PRIBOR
   put, 9                                      preferred, 73
   vanilla, 9                                      weakly, 73
optional sampling, 248                         premium
Ornstein-Uhlenbeck process, 162, 291              default risk, 16
orthogonal rotation, 98                           inflation, 16
out barrier, 10                                   liquidity, 16, 18, 36
outflow, 2, 21                                    maturity risk, 16
output analysis, 159, 164—167, 186–187, 195–   present value, 13, 21–23
       197, 200                                   net, 21
                                                  profile, 22
p.a., 14                                       Present Value Interest Factor of an Annuity,
p.d., 14                                              see PVIFA
p.m., 14                                       PRIBOR, 6
p.q., 14                                       price index, 68
p.s., 14                                          Consumer Price Index, see CPI
par value, see face value                         Edgeworth–Marshall, 70
parametric family, 160                            Fisher, 70
    asymptotic results, 166–167                   Laspèyres, 69
parametric program, 107, 112, 124–126             Lowe, 70
Party, 3                                           Paasche, 69
payable mthly, 14                                  Retail Price Index, see RPI
payback method, 21, 31                         price vector, 75
    discounted, 32                             principal, see face value, see present value
payback period, 31                             principal components, 100
    discounted, 32                                 modified method of, 98
payoff rate, 349                               principle of optimality, 121
perfect hedge, 53                              private investor problem, 103–105, 114–115
perpetuity, 23                                 probability
polynomial function, 36                            arc, 114
pool, 6                                            path, 114
portfolio, 80–91, 191, 323                         scenario, 114
                                              INDEX                                           383

   transition, 114, 120                           regular project, see normal project
   transition, state and control dependent, 120   retained earnings, 7
probability distribution, 234                     return, 39–43, 43
   binomial, 57                                       ex ante, see expected return
   finite dimensional, 234, 236                       ex post, 40
   log-normal, 42, 321                                expected, 40, 43
probability space                                 return process, 320
   complete, 255, 263, 269                        rho, 61
production planning, 148–150                      Riemann integration, 283, 286
profit, 323                                       risk
   process associated with T-strategy, 324            alternative definitions of, 128–131
profitability index, 31                               credit, see default risk
projection theorem, 309                               default, 16
put-call parity, 54                                   idiosyncratic, 97
PUT, see put option                                   interest rate, 16
PVIFA, 23                                             market, 94
PX, 68                                                maturity, 16
PX 50, 71                                             quantitative measures of, 43
                                                      reinvestment rate, 16
quadratic optimization problem, 91                    specific, see unique risk
quantity index, 68                                    total, 94
quartimin, 100                                        unique, 94
                                                      value at, see VaR
Radon-Nikodym derivative, 259                     risk – expected return plane, 82
random variable, 39                               risk averse, 76, 80
random walk hypothesis, 40–41, 322                risk aversion, 76, 128
    strong form, 40                                   absolute, 77
    weak form, 40                                     constant absolute, 77
rate of interest, see interest rate                   decreasing absolute, 77
    effective, 14                                     increasing absolute, 77
    real, 17                                          Pratt-Arrow absolute risk aversion function,
    riskless, 53                                          77
rate of return, 15, 39, 320                           relative, 77
    expected, 39                                  risk loving, 77
    internal, see IRR                             risk neutral probability, 57
    modified, see MIRR                            risk neutral, 77
rating, 3, 17                                     risk of the portfolio, 80
real percentage increase, 18                      risk seeking, see risk loving
real return, 17                                   risk-neutral valuation, 55
rebalancing the portfolio, 145, 182               robust optimization, 134–135
recourse, 111                                     ROR, see rate of return
    cost, 132                                     RPI, 68, 71
    fixed, 111, 132, 216
    matrix, 132
    network, 111, 217                                         244
    random, 112, 132, 183                         S & P 500, 71
    relatively complete, 111, 132, 183, 216       safety of funds, 12
    restricted, 136                               salvage value, 28
    simple, 132, 144, 209                         sample information, 163
recovery rate, 52                                 sampling methods, 172–173
redemption value, see face value                      importance, 174–175
reduced correlation matrix, 99                        nonrandom, 190
reflection principle, 251                             random, 224
reflexivity, 73                                   saving account, 4
regression model, 96–97                           scale parameter, 44
                                                  scenario, 104, 108, 158
384             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

    approximation via, 158–179                   spread, 7
    conditional generation, 174–175              stability properties, 186–187
    designed by expert, 163, 167–169             stage, 108, 109, 116–117
    generation, 159–164, 180, 187                staircase structure, 112
    historical, 46, 163                          Standard & Poor’s, 3, 17, 68
    hypothetical, 46                             Standard & Poor’s 500, see S & P 500
    independent, 148                             standard deviation, 43
    out-of-sample, 185–186, 194–196              standard error, 41
    tree, 113–114, 169–179                       standard score, 97
scenario analysis, 46                            standard-deviation–expected-return plane, 82
SDE, see stochastic differential equation        standardized contract, 8, 9
security, 1, 3–12                                standardized return, 97
    adjustable-rate, 7                           stochastic chain rule, 282, 285, 293, 295
    financial derivative, 7                      stochastic differential, 255
    fixed-income, 4                              stochastic differential equation, 42, 162, 290
    floating-rate, 6                                 solution to, 291
    mortgage-backed, 6                           stochastic integral, 277–286, 277, 278, 285,
    pass-through, see mortgage-backed secu-             293, 367
        rity                                         quadratic variation, 279, 285
    variable-rate, 7                                 isometry, 280
security market line, see SML                                    280
seller, 8, 9                                        limit definition, 284
semimartingale, 254                                 linearity, 279
    continuous, 285                                 localization lemma, 279
                      287                        stochastic per partes, 277, 286–295, 287
                    Itô, 294                        Lebesgue-Stieltjes, 286
    decomposition, 255                           stochastic process, 231
                          254                       almost surely continuous, 232
    Gaussian Itô, 294                               almost surely decreasing, 232
    Itô, orthogonalization of, 295                  bounded, 252
    positive, 321                                   bounded continuous, 261
sensitivity, see common factor                      canonical, 237
sensitivity to estimated parameters, 166, 199–      canonical representation on         238
        203                                         continuous, 232
Separate Trading of Registered Interest and         continuous modification, 236
        Principal of Securities, see STRIPS         coordinate, see canonical process
separation theorem, 85, 89                                            231
share, see stock                                    decreasing, 232
    ordinary, see common stock                      equivalent, 231
Sharpe’s ratio, 81, 128                                              sequence, 252
    modified, 95                                                      247
    upper bound, 87                                                    measurable, 247
Sharpe-Lintner model, 92–93                                      261, 277
short sale, 80, 82, 127                             independent increments, 238
skewness, 46                                        locally bounded, 285
SML, 93–94                                          orthogonal, 268
    beta-version, 93                                with states in E, 231
    covariance version, 93                       stochastic program, 106, 107
solution                                            applications in finance, 137–148
    efficient, 123                                  dynamic with discrete time, 117, 119–122
    feasible, 107                                   general features in portfolio optimization,
    ideal, 123                                          144–148
specific variance, see uniqueness                   integer, 119
specificity, see uniqueness                         multistage, 106, 108–119
spectral decomposition, 98                          multistage linear with recourse, 111–114
split variable representation, 113                  nested two-stage, 110
                                             INDEX                                                 385

    scenario-based, 131                             transition function, 119
    scenario-based linear, 112–114                  transitivity, 73
    scenario-based multiperiod two-stage, 182–      Treasury bill, 4, 12
        184                                         trend, 40, 41
    scenario-based two-stage linear, 132-133
    solution techniques, 209–225                    uniformly positive definite, 294
    with probabilistic constraints, 109             uniqueness, 98
    with recourse, 111                              uniqueness theorem, 328
stock, 3, 7, 319                                    unit commitment problem, 153–154
    common, 7                                       unit of time, 14
    preferred, 7                                    up-and-in, 10
    price, 320                                      up-and-out, 10
    traded, 323                                     upcrossing a level, 307
Stock Exchange, 3                                   utility, 73
stock exchange indices, 68                              marginal, 73
Stoodley’s formula, 20                              utility function, 73, 130, 352
stopping theorem, 231, 244–251, 249                     additively separable, 75
strategy                                                characteristics of, 74
    admissible, 331, 338, 346                           convex, 352
    admissible up to time T, 331                        exponential, 76
    consumption, 323                                    HARA, 77
    portfolio-consumption, 324                          logaritmic, 76
    PC-strategy, see portfolio-consumption strat-       multiplicatively separable, 75
        egy                                             ordinal, 73
    self-financing, 323, 325                            power, 76
    suicide, 332                                        quadratic, 76
    T-strategy, see trading strategy                    separable, 75
    TC-strategy, see trading-consumption strat-     utility theory, 73
        egy                                             cardinal, 73
    trading, 323, 324                                   ordinal, 73
    trading-consumption, 323, 324
stress testing, 46–47                               valuation interest rate, see cost of capital
strike price, 9, 53                                 value at risk, see VaR
STRIPS, 6                                           Value of the Stochastic solution, see VSS
submartingale                                       VaR, 44, 130
                        241                            absolute, 45, 130
    growth, 352                                        at confidence level         44, 45
supermartingale                                        nonparametric, 45–46
    calculus, 335                                      parametric, 44–46
                          241                          relative, 45
surplus, 67                                         Varadhan Theorem, 238
    expected, 67                                    variance, 43, 134
swap, 3, 8, 10–11                                   variance of the portfolio, 80
    combined, 11                                    variation, 233
    cross-currency, 11                                 finite, 232
    currency, 10, 11                                   quadratic, 231
    interest rate, 10, 11                              quadratic, of local martingale, 269
                                                       quadratic, of stochastic process, 233
T-bills, see Treasury bill                             of function, 232
terminal payoff, 53, 349                               of stochastic process, 232
terminal value, see future value                    varimax, 100
theta, 60                                                     model, 162
time deposit, 4                                     Vega, 61, 199
top straddle, 63                                    volatility, 41, 43, 61–62, 320
tracking model, 131, 133–134                           historical, 61
trajectory, 108
386             STOCHASTIC MODELING IN ECONOMICS AND FINANCE

  implied, 61, 199                                yield
  matrix, 320                                        actually observed, 35
  parametric estimation of, 190                      capital, 40
VSS, 208                                             coupon, 40
                                                     current, 49
wait-and-see approach, 206                           declared, 35
warrant, 11                                          dividend, 40, 58
weak convergence, 165                                 to maturity, 49
  consistency, 165                                   spread, 35
wealth, 323                                       yield curve, 21, 35-38, 188–189, 196
  equation, 327                                      constant, see flat yield curve
  process, 327                                        downward-sloping, 36
  process associated with T-strategy, 324             estimating, 188–191
  process, positive, 329                              flat, 36
Weierstrass theorem, 288, 367                         humped, 36, 37
“what if” analysis, see postoptimality analysis       inverted, see downward-sloping yield curve
Wiener process, 41, 238                               normal, see upward-sloping yield curve
                    240                               of coupon bonds, 51
               process, 241                           U-shaped, 36
  quadratic variation, 239                            upward-sloping, 36
  stability, 239                                  YTM, see yield to maturity
  stability w.r.t. a filtration change, 242
  trajectories, 239, 240                          zero, see zero coupon bond
writer, 9



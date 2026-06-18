---
normalized_id: shared-pdf-reference-mark-n-c-international-macroeconomics-and-finance-draft-blackwell-2000-isbn-063122288x-o-376s-gi
exam_code: SHARED
material_scope: mark n.c. international macroeconomics and finance (draft, blackwell, 2000)(isbn 063122288x)(o)(376s)_gi_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Mark N.C. International Macroeconomics and Finance (draft, Blackwell, 2000)(ISBN 063122288X)(O)(376s)_GI_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-mark-n-c-international-macroeconomics-and-finance-draft-blackwell-2000-isbn-063122288x-o-376s-gi

   International Macroeconomics and
Finance: Theory and Empirical Methods

               Nelson C. Mark

              December 12, 2000
       forthcoming, Blackwell Publishers
                                i

To Shirley, Laurie, and Lesli
ii

Preface
This book grew out of my lecture notes for a graduate course in in-
ternational macroeconomics and Þnance that I teach at the Ohio State
University. The book is targeted towards second year graduate stu-
dents in a Ph.D. program. The material is accessible to those who have
completed core courses in statistics, econometrics, and macroeconomic
theory typically taken in the Þrst year of graduate study.
    These days, there is a high level of interaction between empirical
and theoretical research. This book reßects this healthy development
by integrating both theoretical and empirical issues. The theory is in-
troduced by developing the canonical model in a topic area and then its
predictions are evaluated quantitatively. Both the calibration method
and standard econometric methods are covered. In many of the empir-
ical applications, I have updated the data sets from the original studies
and have re-done the calculations using the Gauss programming lan-
guage. The data and Gauss programs will be available for downloading
from my website: www.econ.ohio-state.edu/Mark.
    There are several diﬀerent ‘camps’ in international macroeconomics
and Þnance. One of the major divisions is between the use of ad hoc
and optimizing models. The academic research frontier stresses the
theoretical rigor and internal consistency of fully articulated general
equilibrium models with optimizing agents. However, the ad hoc mod-
els that predate optimizing models are still used in policy analysis and
evidently still have something useful to say. The book strikes a middle
ground by providing coverage of both types of models.
    Some of the other divisions in the Þeld are ßexible price versus sticky
price models, rationality versus irrationality, and calibration versus sta-
tistical inference. The book gives consideration to each of these ‘mini
debates.’ Each approach has its good points and its bad points. Al-
though many people feel Þrmly about the particular way that research
in the Þeld should be done, I believe that beginning students should
see a balanced treatment of the diﬀerent views.
    Here’s a brief outline of what is to come. Chapter 1 derives some
basic relations and gives some institutional background on international
Þnancial markets, national income and balance of payments accounts,
and central bank operations.
                                                                       iii

    Chapter 2 collects many of the time-series techniques that we draw
upon. It is not necessary work through this chapter carefully in the
Þrst reading. I would suggest that you skim the chapter and make
note of the contents, then refer back to the relevant sections when the
need arises. This chapter keeps the book reasonably self-contained and
provides an eﬃcient reference with uniform notation.
    Many diﬀerent time-series techniques have been implemented in the
literature and treatments of the various methods are scattered across
diﬀerent textbooks and journal articles. It would be really unkind to
send you to multiple outside sources and require you to invest in new
notation to acquire the background on these techniques. Such a strat-
egy seems to me expensive in time and money. While this material
is not central to international macroeconomics and Þnance, I was con-
vinced not to place this stuﬀ in an appendix by feedback from my own
students. They liked having this material early on for three reasons.
First, they said that people often don’t read appendices; second, they
said that they liked seeing an econometric roadmap of what was to
come; and third, they said that in terms of reference, it is easier to ßip
pages towards the front of a book than it is to ßip to the end.
    Moving on, Chapters 3 through 5 cover ‘ßexible price’ models. We
begin with the ad hoc monetary model and progress to dynamic equilib-
rium models with optimizing agents. These models oﬀer limited scope
for policy interventions because they are set in a perfect world with no
market imperfections and no nominal rigidities. However, they serve as
a useful benchmark against which to measure reÞnements and progress.
    The next two chapters are devoted to understanding two anomalies
in international macroeconomics and Þnance. Chapters 6 covers devia-
tions from uncovered interest parity (a.k.a. the forward-premium bias),
and Chapter 7 covers deviations from purchasing-power parity. Both
topics have been the focus of a tremendous amount of empirical work.
    Chapters 8 and 9 cover ‘sticky-price’ models. Again, we begin with
ad hoc versions, this time the Mundell—Fleming model, then progress
to dynamic equilibrium models with optimizing agents. The models
in these chapters do suggest positive roles for policy interventions be-
cause they are set in imperfectly competitive environments with nomi-
nal rigidities.
    Chapter 10 covers the analysis of exchange rates under target zones.
       iv

       We take the view that these are a class of Þxed exchange rate mod-
       els where the central bank is committed to keeping the exchange rate
       within a speciÞed zone, although the framework is actually more gen-
       eral and works even when explicit targets are not announced. Chapter
       11 continues in this direction by with a treatment of the causes and
       timing of collapsing Þxed exchange rate arrangements.
           The Þeld of international macroeconomics and Þnance is vast. Keep-
       ing the book suﬃciently short to use in a one-quarter or one-semester
       course meant omitting coverage of some important topics. The book is
       not a literature survey and is pretty short on the history of thought in
       the area. Many excellent and inßuential papers are not included in the
       citation list. This simply could not be avoided. As my late colleague
       G.S. Maddala once said to me, “You can’t learn anything from a fat
       book.” Since I want you to learn from this book, I’ve aimed to keep it
       short, concrete, and to the point.
           To avoid that ‘black-box’ perception that beginning students some-
       times have, almost all of the results that I present are derived step-by-
       step from Þrst principles. This is annoying for a knowledgeable reader
       (i.e., the instructor), but hopefully it is a feature that new students will
       appreciate. My overall objective is to eﬃciently bring you up to the
       research frontier in international macroeconomics and Þnance. I hope
       that I have achieved this goal in some measure and that you Þnd the
       book to be of some value.
           Finally, I would like to express my appreciation to Chi-Young Choi,
       Roisin O’Sullivan and Raphael Solomon who gave me useful comments,
       and to Horag Choi and Young-Kyu Moh who corrected innumerable
(1)⇒   mistakes in the manuscript. My very special thanks goes to Donggyu
       Sul who read several drafts and who helped me to set up much of the
       data used in the book.
Contents

1 Some Institutional Background                                    1
  1.1 International Financial Markets . . . . . . . . . . . . . . 2
  1.2 National Accounting Relations . . . . . . . . . . . . . . . 15
  1.3 The Central Bank’s Balance Sheet . . . . . . . . . . . . . 20

2 Some Useful Time-Series Methods                                     23
  2.1 Unrestricted Vector Autoregressions . . . . . . . . . . . . 24
  2.2 Generalized Method of Moments . . . . . . . . . . . . . . 35
  2.3 Simulated Method of Moments . . . . . . . . . . . . . . 38
  2.4 Unit Roots . . . . . . . . . . . . . . . . . . . . . . . . . . 40
  2.5 Panel Unit-Root Tests . . . . . . . . . . . . . . . . . . . 50
  2.6 Cointegration . . . . . . . . . . . . . . . . . . . . . . . . 63
  2.7 Filtering . . . . . . . . . . . . . . . . . . . . . . . . . . . 67

3 The Monetary Model                                              79
  3.1 Purchasing-Power Parity . . . . . . . . . . . . . . . . . . 80
  3.2 The Monetary Model of the Balance of Payments . . . . 83
  3.3 The Monetary Model under Flexible Exchange Rates . . 84
  3.4 Fundamentals and Exchange Rate Volatility . . . . . . . 88
  3.5 Testing Monetary Model Predictions . . . . . . . . . . . 91

4 The Lucas Model                                                105
  4.1 The Barter Economy . . . . . . . . . . . . . . . . . . . . 106
  4.2 The One-Money Monetary Economy . . . . . . . . . . . 113
  4.3 The Two-Money Monetary Economy . . . . . . . . . . . 118
  4.4 Introduction to the Calibration Method . . . . . . . . . . 125
  4.5 Calibrating the Lucas Model . . . . . . . . . . . . . . . . 126

                                   v
vi                                                         CONTENTS

5 International Real Business Cycles                           137
  5.1 Calibrating the One-Sector Growth Model . . . . . . . . 138
  5.2 Calibrating a Two-Country Model . . . . . . . . . . . . . 149

6 Foreign Exchange Market Eﬃciency                                 161
  6.1 Deviations From UIP . . . . . . . . . . . . . . . . . . . . 162
  6.2 Rational Risk Premia . . . . . . . . . . . . . . . . . . . . 172
  6.3 Testing Euler Equations . . . . . . . . . . . . . . . . . . 177
  6.4 Apparent Violations of Rationality . . . . . . . . . . . . 183
  6.5 The ‘Peso Problem’ . . . . . . . . . . . . . . . . . . . . . 186
  6.6 Noise-Traders . . . . . . . . . . . . . . . . . . . . . . . . 193

7 The Real Exchange Rate                                         207
  7.1 Some Preliminary Issues . . . . . . . . . . . . . . . . . . 208
  7.2 Deviations from the Law-Of-One Price . . . . . . . . . . 209
  7.3 Long-Run Determinants of the Real Exchange Rate . . . 213
  7.4 Long-Run Analyses of Real Exchange Rates . . . . . . . 217

8 The Mundell-Fleming Model                                    229
  8.1 A Static Mundell-Fleming Model . . . . . . . . . . . . . 229
  8.2 Dornbusch’s Dynamic Mundell—Fleming Model . . . . . . 237
  8.3 A Stochastic Mundell—Fleming Model . . . . . . . . . . . 241
  8.4 VAR analysis of Mundell—Fleming . . . . . . . . . . . . . 249

9 The New International Macroeconomics                             263
  9.1 The Redux Model . . . . . . . . . . . . . . . . . . . . . . 264
  9.2 Pricing to Market . . . . . . . . . . . . . . . . . . . . . . 286

10 Target-Zone Models                                                307
   10.1 Fundamentals of Stochastic Calculus . . . . . . . . . . . 308
   10.2 The Continuous—Time Monetary Model . . . . . . . . . . 310
   10.3 InÞnitesimal Marginal Intervention . . . . . . . . . . . . 313
   10.4 Discrete Intervention . . . . . . . . . . . . . . . . . . . . 319
   10.5 Eventual Collapse . . . . . . . . . . . . . . . . . . . . . . 320
   10.6 Imperfect Target-Zone Credibility . . . . . . . . . . . . . 322
CONTENTS                                                           vii

11 Balance of Payments Crises                                     327
   11.1 A First-Generation Model . . . . . . . . . . . . . . . . . 328
   11.2 A Second Generation Model . . . . . . . . . . . . . . . . 335
Chapter 1


Some Institutional
Background


This chapter covers some institutional background and develops some
basic relations that we rely on in international macroeconomics and
Þnance. First, you will get a basic description some widely held in-
ternational Þnancial instruments and the markets in which they trade.
This discussion allows us to quickly derive the fundamental parity rela-
tions implied by the absence of riskless arbitrage proÞts that relate asset
prices in international Þnancial markets. These parity conditions are
employed regularly in international macroeconomic theory and serve
as jumping oﬀ points for more in-depth analyses of asset pricing in the
international environment. Second, you’ll get a brief overview of the
national income accounts and their relation to the balance of payments.
This discussion identiÞes some of the macroeconomic data that we want
theory to explain and that are employed in empirical work. Third, you
will see a discussion of the central bank’s balance sheet—an understand-
ing of which is necessary to appreciate the role of international (foreign
exchange) reserves in the central bank’s foreign exchange market inter-
vention and the impact of intervention on the domestic money supply.

                                    1
2          CHAPTER 1. SOME INSTITUTIONAL BACKGROUND

1.1      International Financial Markets
We begin with a description of some basic international Þnancial instru-
ments and the markets in which they trade. As a point of reference,
we view the US as the home country.


Foreign Exchange
Foreign exchange is traded over the counter through a spatially de-
centralized dealer network. Foreign currencies are mainly bought and
sold by dealers housed in large money center banks located around the
world. Dealers hold foreign exchange inventories and aim to earn trad-
ing proÞts by buying low and selling high. The foreign exchange market
is highly liquid and trading volume is quite large. The Federal Reserve
Bank of New York [51] estimates during April 1998, daily volume of for-
eign exchange transactions involving the US dollar and executed within
in the U.S was 405 billion dollars. Assuming a 260 business day calen-
dar, this implies an annual volume of 105.3 trillion dollars. The total
volume of foreign exchange trading is much larger than this Þgure be-
cause foreign exchange is also traded outside the US—in London, Tokyo,
and Singapore, for example. Since 1998 US GDP was approximately 9
trillion dollars and the US is approximately 1/7 of the world economy,
the volume of foreign exchange trading evidently exceeds, by a great
amount, the quantity necessary to conduct international trade.
     During most of the post WWII period, trading of convertible cur-
rencies took place with respect to the US dollar. This meant that
converting yen to deutschemarks required two trades: Þrst from yen to
dollars then from dollars to deutschemarks. The dollar is said to be the
vehicle currency for international transactions. In recent years cross-
currency trading, that allows yen and deutschemarks to be exchanged
directly, has become increasingly common.
     The foreign currency price of a US dollar is the exchange rate quoted
in European terms. The US dollar price of one unit of the foreign
currency is the exchange rate is quoted in American terms. In American
terms, an increase in the exchange rate means the dollar currency has
depreciated in value relative to the foreign currency. In this book, we
will always refer to the exchange rate in American terms.
1.1. INTERNATIONAL FINANCIAL MARKETS                                    3

    The equilibrium condition in cross-rate markets is given by the ab-
sence of unexploited triangular arbitrage proÞts. To illustrate, assume
that there are no transactions costs and consider 3 currencies–the dol-
lar, the euro, and the pound. Let S1 be the dollar price of the pound, S2
be the dollar price of the euro, and S3x be the euro price of the pound.
The cross-rate market is in equilibrium if the exchange rate quotations
obey
                               S1 = S3x S2 .                        (1.1)
The opportunity to earn riskless arbitrage proÞts are available if (1.1)
is violated. For example, suppose that you get price quotations of S1 =
1.60 dollars per pound, S2 =1.10 dollars per euro, and S3x = 1.55 euros
per pound. An arbitrage strategy is to put up 1.60 dollars to buy
one pound, sell that pound for 1.55 euros and then sell the euros for
1.1 dollars each. You begin with 1.6 dollars and end up with 1.705
dollars, which is quite a deal. But when you take money out of the
foreign exchange market it comes at the expense of someone else. Very
short-lived violations of the triangular arbitrage condition (1.1) may
occasionally occur during episodes of high market volatility, but we do
not think that foreign exchange dealers will allow this to happen on a
regular basis.

Transaction Types
    Foreign exchange transactions are divided into three categories. The
Þrst are spot transactions for immediate (actually in two working days)
delivery. Spot exchange rates are the prices at which foreign currencies
trade in this spot market.
    Second, swap transactions are agreements in which a currency sold
(bought) today is to be repurchased (sold) at a future date. The price
of both the current and future transaction is set today. For example,
you might agree to buy 1 million euros at 0.98 million dollars today and
sell the 1 million euros back in six months time for 0.95 million dollars.
The swap rate is the diﬀerence between the repurchase (resale) price
and the original sale (purchase) price. The swap rate and the spot rate
together implicitly determine the forward exchange rate.
    The third category of foreign exchange transactions are outright
forward transactions. These are current agreements on the price, quan-
4         CHAPTER 1. SOME INSTITUTIONAL BACKGROUND

tity, and maturity or future delivery date for a foreign currency. The
agreed upon price is the forward exchange rate. Standard maturities
for forward contracts are 1 and 2 weeks, 1,3,6, and 12 months. We say
that the forward foreign currency trades at a premium when the for-
ward rate exceeds the spot rate in American terms. Conversely if the
spot rate is exceeds the forward rate, we say that the forward foreign
currency trades at discount.
    Spot transactions form the majority of foreign exchange trading
and most of that is interdealer trading. About one—third of the vol-
ume of foreign exchange trading are swap transactions. Outright for-
ward transactions account for a relatively small portion of total volume.
Forward and swap transactions are arranged on an informal basis by
money center banks for their corporate and institutional customers.

Short-Term Debt
A Eurocurrency is a foreign currency denominated deposit at a bank
located outside the country where the currency is used as legal tender.
Such an institution is called an oﬀshore bank. Although they are called
Eurocurrencies, the deposit does not have to be in Europe. A US dollar
deposit at a London bank is a Eurodollar deposit and a yen deposit
at a San Francisco bank is a Euro-yen deposit. Most Eurocurrency
deposits are Þxed-interest time-deposits with maturities that match
those available for forward foreign exchange contracts. A small part of
the Eurocurrency market is comprised of certiÞcates of deposit, ßoating
rate notes, and call money.

London Interbank Oﬀer Rate (LIBOR) is the rate at which banks are
willing to lend to the most creditworthy banks participating in the
London Interbank market. Loans to less creditworthy banks and/or
companies outside the London Interbank market are often quoted as a
premium to LIBOR.


Covered Interest Parity
Spot, forward, and Eurocurrency rates are mutually dependent through
the covered interest parity condition. Let it be the date t interest rate
1.1. INTERNATIONAL FINANCIAL MARKETS                                                 5

on a 1-period Eurodollar deposit, i∗t be the interest rate on an Euroeuro
deposit rate at the same bank, St , the spot exchange rate (dollars per
euro), and Ft , the 1-period forward exchange rate. Because both Eu-
rodollar and Euroeuro deposits are issued by the same bank, the two
deposits have identical default and political risk. They diﬀer only by the
currency of their denomination.1 Covered interest parity is the condi-
tion that the nominally risk-free dollar return from the Eurodollar and
the Euroeuro deposits are equal. That is
                                                     Ft
                               1 + it = (1 + i∗t )      .                        (1.2)
                                                     St
When (1.2) is violated a riskless arbitrage proÞt opportunity is available
and the market is not in equilibrium. For example, suppose there are
no transactions costs, and you get the following 12-month eurocurrency,
forward exchange rate and spot exchange rate quotations

         it = 0.0678, i∗t = 0.0422, Ft = 0.9961,             St = 1.0200.

You can easily verify that these quotes do not satisfy (1.2). These
quotes allow you to borrow 0.9804 euros today, convert them to 1/St =
1 dollar, invest in the eurodollar deposit with future payoﬀ 1.0678 but
you will need only (1 + i∗t )Ft /St = 1.0178 dollars to repay the euro
loan. Note that this arbitrage is a zero-net investment strategy since it
is Þnanced with borrowed funds. Arbitrage proÞts that arise from such
quotations come at the expense of other agents dealing in the interna-
tional Þnancial markets, such as the bank that quotes the rates. Since
banks typically don’t like losing money, swap or forward rates quoted by
bank traders are routinely set according to quoted eurocurrency rates
and (1.2).
    Using the logarithmic approximation, (1.2) can be expressed as

                                 it ' i∗t + ft − st                              (1.3)

where ft ≡ ln(Ft ), and st ≡ ln(St ).
   1
    Political risk refers to the possibility that a government may impose restrictions
that make it diﬃcult for foreign investors to repatriate their investments. Covered
interest arbitrage will not in general hold for other interest rates such as T-bills or
commercial bank prime lending rates.
6          CHAPTER 1. SOME INSTITUTIONAL BACKGROUND

Testing Covered Interest Parity
Covered interest parity won’t hold for assets that diﬀer greatly in terms
of default or political risk. If you look at prices for spot and forward
foreign exchange and interest rates on assets that diﬀer mainly in cur-
rency denomination, the question of whether covered interest parity
holds depends on whether there there exist unexploited arbitrage proÞt
opportunities after taking into account the relevant transactions costs,
how large are the proÞts, and the length of the window during which
the proÞts are available.
    Foreign exchange dealers and bond dealers quote two prices. The
low price is called the bid. If you want to sell an asset, you get the
bid (low) price. The high price is called the ask or oﬀer price. If you
want to buy the asset from the dealer, you pay the ask (high) price. In
addition, there will be a brokerage fee associated with the transaction.
    Frenkel and Levich [63] applied the neutral-band analysis to test
covered interest parity. The idea is that transactions costs create a
neutral band within which prices of spot and forward foreign exchange
and interest rates on domestic and foreign currency denominated assets
can ßuctuate where there are no proÞt opportunities. The question is
how often are there observations that lie outside the bands.
    Let the (proportional) transaction cost incurred from buying or sell-
ing a dollar debt instrument be τ , the transaction cost from buying or
selling a foreign currency debt instrument be τ ∗ , the transaction cost
from buying or selling foreign exchange in the spot market be τs and
the transaction cost from buying or selling foreign exchange in the for-
ward market be τf . A round-trip arbitrage conceptually involves four
separate transactions. A strategy that shorts the dollar requires you to
Þrst sell a dollar-denominated asset (borrow a dollar at the gross rate
1 + i). After paying the transaction cost your net is 1 − τ dollars. You
then sell the dollars at 1/S which nets (1 − τ )(1 − τs ) foreign currency
units. You invest the foreign money at the gross rate 1 + i∗ , incurring
a transaction cost of τ ∗ . Finally you cover the proceeds at the forward
rate F , where you incur another cost of τf . Let

                  C̄ ≡ (1 − τ )(1 − τs )(1 − τ ∗ )(1 − τf ),

and fp ≡ (F − S)/S. The net dollar proceeds after paying the transac-
1.1. INTERNATIONAL FINANCIAL MARKETS                                     7

tions costs are C̄(1 + i∗ )(F/S). The arbitrage is unproÞtable if
C̄(1 + i∗ )(F/S) ≤ (1 + i), or equivalently if
                                                     ∗
                                (1 + i) − C̄(1 + i )
                     fp ≤ f¯p ≡                      .               (1.4)
                                     C̄(1 + i∗ )

By the analogous argument, it follows that an arbitrage that is long in
the dollar remains unproÞtable if

                                  C̄(1 + i) − (1 + i∗ )
                     fp ≥ f p ≡                         .            (1.5)
                                        (1 + i∗ )

[f p , f¯p ] deÞne a neutral band of activity within which fp can ßuctuate
but still present no proÞtable covered interest arbitrage opportunities.
The neutral-band analysis proceeds by estimating the transactions costs
C̄. These are then used to compute the bands [f p , f¯p ] at various points
in time. Once the bands have been computed, an examination of the
proportion of actual fp that lie within the bands can be conducted.
      Frenkel and Levich estimate τs and τf to be the upper 95 percentile
of the absolute deviation from spot and 90-day forward triangular ar-
bitrage. τ is set to 1.25 times the ask-bid spread on 90-day treasury
bills and they set τ ∗ = τ . They examine covered interest parity for the
dollar, Canadian dollar, pound, and the deutschemark. The sample
is broken into three periods. The Þrst period is the tranquil peg pre-
ceding British devaluation from January 1962—November 1967. Their
estimates of τs range from 0.051% to 0.058%, and their estimates of τf
range from 0.068% to 0.076%. For securities, they estimate τ = τ ∗ to
be approximately 0.019%. The total cost of transactions fall in a range
from 0.145% to 0.15%. Approximately 87% of the fp observations lie
within the neutral band.
      The second period is the turbulent peg from January 1968 to De-
cember 1969, during which their estimate of C̄ rises to approximately
0.24%. Now, violations of covered interest parity are more pervasive
with the proportion of fp that lie within the neutral band ranging from
0.33 to 0.67.
      The third period considered is the managed ßoat from July 1973 to
May 1975. Their estimates for C̄ rises to about 1%, and the proportion
8            CHAPTER 1. SOME INSTITUTIONAL BACKGROUND

of fp within the neutral band also rises back to about 0.90. The conclu-
sion is that covered interest parity holds during the managed ßoat and
the tranquil peg but there is something anomalous about the turbulent
peg period.2
    Taylor [130] examines data recorded by dealers at the Bank of Eng-
land, and calculates the proÞt from covered interest arbitrage between
dollar and pound assets predicted by quoted bid and ask prices that
would be available to an individual. Let an “a” subscript denote an
ask price (or ask yield), and a “b” subscript denote the bid price. If
you buy pounds, you get the ask price Sa . Buying pounds is the same
as selling dollars so from the latter perspective, you can sell the dollars
at the bid price 1/Sa . Accordingly, we adopt the following notation.

    Sa : Spot pound ask price.           Fa : Forward pound ask price.
    1/Sa : Spot dollar bid price.        1/Fa : Forward dollar bid price.
    Sb : Spot pound bid price.           Fb : Forward pound bid price.
    1/Sb : Spot dollar ask price.        1/Fb : Forward dollar ask price.
    ia : Eurodollar ask interest rate.   i∗a : Euro-pound ask interest rate.
    ib : Eurodollar bid interest rate.   i∗b : Euro-pound bid interest rate.
It will be the case that ia > ib , i∗a > i∗b , Sa > Sb , and Fa > Fb . An
arbitrage that shorts the dollar begins by borrowing a dollar at the
gross rate 1 + ia , selling the dollar for 1/Sa pounds which are invested
at the gross rate 1 + i∗b and covered forward at the price Fb . The per
dollar proÞt is
                                      Fb
                            (1 + i∗b ) − (1 + ia ).
                                      Sa
Using the analogous reasoning, it follows that the per pound proÞt that
shorts the pound is
                                 Sb
                        (1 + ib ) − (1 + i∗a ).
                                 Fa
Taylor Þnds virtually no evidence of unexploited covered interest arbi-
trage proÞts during normal or calm market conditions but he is able
to identify some periods of high market volatility when economically
signiÞcant violations may have occurred. The Þrst of these is the 1967
     2
    Possibly, the period is characterized by a ‘peso problem,’ which is covered in
chapter 6.
1.1. INTERNATIONAL FINANCIAL MARKETS                                     9

British devaluation. Looking at an eleven-day window spanning the
event an arbitrage that shorted 1 million pounds at a 1-month matu-
rity could potentially have earned a 4521-pound proÞt on Wednesday
November 24 at 7:30 a.m. but by 4:30 p.m. Thursday November 24, the
proÞt opportunity had vanished. A second event that he looks at is the
1987 UK general election. Examining a window that spans from June
1 to June 19, proÞt opportunities were generally unavailable. Among
the few opportunities to emerge was a quote at 7:30 a.m. Wednesday
June 17 where a 1 million pound short position predicted 712 pounds
of proÞt at a 1 month maturity. But by noon of the same day, the
predicted proÞt fell to 133 pounds and by 4:00 p.m. the opportunities
had vanished.
    To summarize, the empirical evidence suggests that covered interest
parity works pretty well. Occasional violations occur after accounting
for transactions costs but they are short-lived and present themselves
only during rare periods of high market volatility.

Uncovered Interest Parity
Let Et (Xt+1 ) = E(Xt+1 |It ) denote the mathematical expectation of the
random variable Xt+1 conditioned on the date-t publicly available in-
formation set It . If foreign exchange participants are risk neutral, they
care only about the mean value of asset returns and do not care at all
about the variance of returns. Risk-neutral individuals are also will-
ing to take unboundedly large positions on bets that have a positive
expected value. Since Ft − St+1 is the proÞt from taking a position in
forward foreign exchange, under risk-neutrality expected forward spec-
ulation proÞts are driven to zero and the forward exchange rate must,
in equilibrium, be market participant’s expected future spot exchange
rate
                                Ft = Et (St+1 ).                      (1.6)
Substituting (1.6) into (1.2) gives the uncovered interest parity condi-
tion
                                              Et [St+1 ]
                          1 + it = (1 + i∗t )            .            (1.7)
                                                  St
If (1.7) is violated, a zero-net investment strategy of borrowing in one
currency and simultaneously lending uncovered in the other currency
       10          CHAPTER 1. SOME INSTITUTIONAL BACKGROUND

       has a positive payoﬀ in expectation. We use the uncovered interest
       parity condition as a Þrst-approximation to characterize international
       asset market equilibrium, especially in conjunction with the monetary
       model (chapters 3, 10, and 11). However, as you will see in chapter 6,
       violations of uncovered interest parity are common and they present an
       important empirical puzzle for international economists.

       Risk Premia. What reason can be given if uncovered interest parity
       does not hold? One possible explanation is that market participants
       are risk averse and require compensation to bear the currency risk in-
       volved in an uncovered foreign currency investment. To see the relation
       between risk aversion and uncovered interest parity, consider the fol-
       lowing two-period partial equilibrium portfolio problem. Agents take
       interest rate and exchange rate dynamics as given and can invest a frac-
       tion α of their current wealth Wt in a nominally safe domestic bond
(2)⇒   with next period payoﬀ (1 + it )αWt . The remaining 1 − α of wealth can
       be invested uncovered in the foreign bond with future home-currency
       payoﬀ (1 + i∗t ) SSt+1
                           t
                              (1 − α)Wt . We assume that covered interest parity
       is holds so that a covered investment in the foreign bond is equivalent
       to the investment in the domestic bond. Next period nominal wealth
       is the payoﬀ from the bond portfolio
                               ·                                       ¸
                                                                St+1
                      Wt+1 =     α(1 + it ) + (1 − α)(1 + i∗t )            Wt .      (1.8)
                                                                 St

       Domestic market participants have constant absolute risk aversion util-
       ity deÞned over wealth, U (W ) = −e−γW where γ ≥ 0 is the coeﬃcient
       of absolute risk aversion. The domestic agent’s problem is to choose
       the investment share α to maximize expected utility
                                                      ³         ´
                              Et [U(Wt+1 )] = −Et e−γWt+1 .                          (1.9)

       Notice that the right side of (1.9) is the moment generating function of
       next period wealth.3
            3
           The moment generating function for ¡ the   normally
                                                        ¢       distributed random variable
                   2
                                  ¡ zX ¢            2 2
                                               µz+ σ 2z
       X ∼ N (µ, σ ) is ψX (z) = E e      =e              . Substituting W for X, −γ for z,
       Et Wt+1 for µ, and Var(Wt+1 ) for σ 2 and taking logs results in (1.12).
1.1. INTERNATIONAL FINANCIAL MARKETS                                             11

   If people believe that Wt+1 is normally distributed conditional on
currently available information, with conditional mean and conditional
variance
                     ·                                            ¸
                                                        Et St+1
        Et Wt+1 =        α(1 + it ) + (1 − α)(1 + i∗t )               Wt ,   (1.10)
                                                          St

                             (1 − α)2 (1 + i∗t )2 Vart (St+1 )Wt2
              Vart (Wt+1 ) =                                      .          (1.11)
                                             St2
It follows that maximizing (1.9) is equivalent to maximizing the simpler
expression
                                    γ
                        Et Wt+1 − Var(Wt+1 ).                      (1.12)
                                    2
We say that traders are mean-variance optimizers. These individuals
like high mean values of wealth, and dislike variance in wealth.
    Diﬀerentiating (1.12) with respect to α and re-arranging the Þrst-
order conditions for optimality yields

                          Et [St+1 ]   −γWt (1 − α)(1 + i∗t )2 Vart (St+1 )
 (1 + it ) − (1 + i∗t )              =                                      , (1.13)
                              St                    St2

which implicitly determines the optimal investment share α. Even if
there is an expected uncovered proÞt available, risk aversion limits the
size of the position that investors will take. If all market participants
are risk neutral, then γ = 0 and it follows that uncovered interest parity
will hold. If γ > 0, violations of uncovered interest parity can occur and
the forward rate becomes a biased predictor of the future spot rate, the
reason being that individuals need to be paid a premium to bear foreign
currency risk. Uncovered interest parity will hold if α = 1, regardless
of whether γ > 0. However, the determination of α requires us to be
speciÞc about the dynamics that govern St and that is information that
we have not speciÞed here. The point that we want to make here is
that the forward foreign exchange market can be in equilibrium and
there are no unexploited risk-adjusted arbitrage proÞts even though
the forward exchange rate is a biased predictor of the future spot rate.
We will study deviations from uncovered interest parity in more detail
in chapter 6.
12         CHAPTER 1. SOME INSTITUTIONAL BACKGROUND

Futures Contracts
Participation in the forward foreign exchange market is largely limited
to institutions and large corporate customers owing to the size of the
contracts involved. The futures market is available to individuals and
is a close substitute to the forward market. The futures market is
an institutionalized form of forward contracting. Four main features
distinguish futures contracts from forward contracts.
    First, foreign exchange futures contracts are traded on organized
exchanges. In the US, futures contracts are traded on the International
Money Market (IMM) at the Chicago Mercantile Exchange. In Britain,
futures are traded at the London International Financial Futures Ex-
change (LIFFE). Some of the currencies traded are, the Australian dol-
lar, Brazilian real, Canadian dollar, euro, Mexican peso, New Zealand
dollar, pound, South African rand, Swiss franc, Russian ruble and the
yen.
    Second, contracts mature at standardized dates throughout the
year. The maturity date is called the last trading day. Delivery oc-
curs on the third Wednesday of March, June, Sept, and December,
provided that it is a business day. Otherwise delivery takes place on
the next business day. The last trading day is 2 business days prior
to the delivery date. Contracts are written for Þxed face values. For
example, for the face value of an euro contract is 125,000 euros.
    Third, the exchange serves to match buyers to sellers and maintains
a zero net position.4 Settlement between sellers (who take short po-
sitions) and buyers (who take long positions) takes place daily. You
purchase a futures contract by putting up an initial margin with your
broker. If your contract decreases in value, the loss is debited from your
margin account. This debit is then used to credit the account of the
individual who sold you the futures contract. If your contract increases
in value, the increment is credited to your margin account. This settle-
ment takes place at the end of each trading day and is called “marking
to market.” Economically, the main diﬀerence between futures and
forward contracts is the interest opportunity cost associated with the
     4
    If you need foreign exchange before the maturity date, you are said to have
short exposure in foreign exchange which can be hedged by taking a long position
in the futures market.
1.1. INTERNATIONAL FINANCIAL MARKETS                                    13

funds in the margin account. In the US, some part of the initial margin
can be put up in the form of Treasury bills, which mitigates the loss of
interest income.
    Fourth, the futures exchange operates a clearinghouse whose func-
tion is to guarantee marking to market and delivery of the currencies
upon maturity. Technically, the clearing house takes the other side of
any transaction so your legal obligations are to the exchange. But as
mentioned above, the clearinghouse maintains a zero net position.
    Most futures contracts are reversed prior to maturity and are not
held to the last trading day. In these situations, futures contracts are
simply bets between two parties regarding the direction of future ex-
change rate movements. If you are long a foreign currency futures
contract and I am short, you are betting that the price of the foreign
currency will rise while I expect the price to decline. Bets in the futures
market are a zero sum game because your winnings are my losses.

How a Futures Contract Works
For a futures contract with k days to maturity, denote the date T − k
futures price by FT −k , and the face value of the contract by VT . The
contract value at T − k is FT −k VT .
    Table 1.1 displays the closing spot rate and the price of an actual
12,500,000 yen contract that matured in June 1999 (multiplied by 100)
and the evolution of the margin account. When the futures price in-
creases, the long position gains value as reßected by an increment in
the margin account. This increment comes at the expense of the short
position.
    Suppose you buy the yen futures contract on June 16, 1998 at
0.007346 dollars per yen. Initial margin is 2,835 dollars and the spot
exchange rate is 0.006942 dollars per yen. The contract value is 91,825
dollars. If you held the contract to maturity, you would take delivery
of the 12,500,000 yen on 6/23/99 at a unit price of 0.007346 dollars.
Suppose that you actually want the yen on December 17, 1998. You
close out your futures contract and buy the yen in the spot market.
The appreciation of the yen means that buying 12,500,000 yen costs
20675 dollars more on 12/17/98 than it did on 6/16/98, but most of
the higher cost is oﬀset by the gain of 21197.5-2835=18,362.5 dollars
14        CHAPTER 1. SOME INSTITUTIONAL BACKGROUND


            Table 1.1: Yen futures for June 1999 delivery

                                              Long yen position
 Date        FT −k  ST −k      ∆FT −k       ∆(FT −k VT ) Margin    φT −k
 6/16/98     0.7346 0.6942     0.0000       0.0          2835.0    1.0581
 6/17/98     0.772 0.7263      0.0374       4675.0       7510.0    1.0628
 7/17/98     0.7507 0.7163     -0.0213      -2662.5      4847.5    1.0479
 8/17/98     0.7147 0.6859     -0.0360      -4500.0      347.5     1.0418
 9/17/98     0.7860 0.7582     0.0713       8912.5       9260.0    1.0365
 10/16/98    0.8948 0.8661     0.1088       13600.0      22860.0   1.0330
 11/17/98    0.8498 0.8244     -0.0450      -5625.0      17235.0   1.0308
 12/17/98    0.8815 0.8596     0.0317       3962.5       21197.5   1.0254
 01/19/99    0.8976 0.8790     0.0161       2012.5       23210.0   1.0211
 02/17/99    0.8524 0.8401     -0.0452      -5650.0      17560.0   1.0146
 03/17/99    0.8575 0.8463     0.0051       637.5        18197.5   1.0131



on the futures contract.
    The hedge comes about because there is a covered interest parity-
like relation that links the futures price to the spot exchange rate with
eurocurrency rates as a reference point. Let iT −k be the Eurodollar rate
at T − k which matures at T , i∗T −k be the analogous one-year Euroeuro
rate, assume a 360 day year, and let

                                     1 + ki360
                                            T −k

                           φT −k =        ki∗T −k ,
                                     1+    360

be the ratio of the domestic to foreign gross returns on an eurocurrency
deposit that matures in k days. The parity relation for futures prices
is
                           FT −k = φT −k ST −k .                  (1.14)
Here, the futures price varies in proportion to the spot price with φT −k
being the factor of proportionality. As contract approaches last trading
day, k → 0. It follows that φT −k → 1, and FT = ST . This means that
you can obtain the foreign exchange in two equivalent ways. You can
buy a futures contract on the last trading day and take delivery, or you
1.2. NATIONAL ACCOUNTING RELATIONS                                     15

can buy the foreign currency in the interbank market because arbitrage
will equate the two prices near the maturity date.
    (1.14) also tells you the extent to which the futures contract hedges
risk. If you have long exposure, an increase in ST −k (a weakening of the
home currency) makes you worse oﬀ while an increase in the futures
price makes you better oﬀ. The futures contract provides a perfect
hedge if changes in FT −k exactly oﬀset changes in ST −k but this only
happens if φT −k = 1. To obtain a perfect hedge when φT −k 6= 1, you
need to take out a contract of size 1/φ and because φ changes over
time, the hedge will need to be rebalanced periodically.


1.2     National Accounting Relations
This section gives an overview of the National Income Accounts and
their relation to the Balance of Payments. These accounts form some of
the international time—series that we want our theories to explain. The
National Income Accounts are a record of expenditures and receipts
at various phases in the circular ßow of income, while the Balance of
Payments is a record of the economic transactions between domestic
residents and residents in the rest of the world.

National Income Accounting
In real (constant dollar) terms, we will use the following notation.

Y Gross domestic product,
Q National income,
C Consumption,
I Investment,
G Government Þnal goods purchases,
A aggregate expenditures (absorption), A = C + I + G,
IM Imports,
EX Exports,
R Net foreign income receipts,
T Tax revenues,
16        CHAPTER 1. SOME INSTITUTIONAL BACKGROUND

S Private saving,
NFA Net foreign asset holdings.


Closed economy national income accounting. We’ll begin with a quick
review of the national income accounts for a closed economy. Abstract-
ing from capital depreciation, which is that part of total Þnal goods
output devoted to replacing worn out capital stock. The value of out-
put is gross domestic product Y . When the goods and services are
sold the sales become income Q. If we ignore capital depreciation, then
GDP is equal to national income

                                Y = Q.                           (1.15)

In the closed economy, there are only three classes of agents–households,
businesses, and the government. Aggregate expenditures on goods and
services is the sum of the component spending by these agents

                           A = C + I + G.                        (1.16)

The nation’s output Y has to be purchased by someone A. If there
is any excess supply, Þrms are assumed to buy the extra output in
the form of inventory accumulation. We therefore have the accounting
identity
                            Y = A = Q.                        (1.17)


The Open Economy. To handle an economy that engages in foreign
trade, we must account for net factor receipts from abroad R, which
includes items such as fees and royalties from direct investment, div-
idends and interest from portfolio investment, and income for labor
services provided abroad by domestic residents. In the open economy
national income is called gross national product (GNP) Q = GNP.
This is income paid to factors of production owned by domestic resi-
dents regardless of where the factors are employed. GNP can diﬀer from
GDP since some of this income may be earned from abroad. GDP can
be sold either to domestic agents (A − IM) or to the foreign sector
1.2. NATIONAL ACCOUNTING RELATIONS                                    17

EX. This can be stated equivalently as the sum of domestic aggregate
expenditures or absorption and net exports

                        Y = A + (EX − IM ).                       (1.18)

National income (GNP) is the sum of gross domestic product and net
factor receipts from abroad

                              Q = Y + R.                          (1.19)

Substituting (1.18) into (1.19) yields

                      Q = A + (EX − IM) + R                       (1.20)
                                 |       {z     }
                                Current Account
A country uses the excess of national income over absorption to Þnance
an accumulation of claims against the rest of the world. This is national
saving and called the balance on current account. A country with a
current account surplus is accumulating claims on the rest of the world.
Thus rearranging (1.20) gives

               Q−A =       ∆(NFA)
                   =       (EX − IM ) + R
                   =       Q − (C + I + G)
                   =       [(Q − T ) − C] − I + (T − G)
                   =       (S − I) + (T − G),

which we summarize by

    ∆(NFA) = EX − IM + R = [S − I] + [T − G] = Q − A.             (1.21)

 The change in the country’s net foreign asset position ∆NFA in (1.21)
is the nation’s accumulation of claims against the foreign sector and
includes oﬃcial (central bank) as well as private capital transactions.
The distinction between private and oﬃcial changes in net foreign assets
is developed further below.
    Although (1.21) is an accounting identity and not a theory, it can
be used for ‘back of the envelope’ analyses of current account prob-
lems. For example, if the home country experiences a current account
18          CHAPTER 1. SOME INSTITUTIONAL BACKGROUND

surplus (EX − IM + R > 0) and the government’s budget is in bal-
ance (T = G), you see from (1.21) that the current account surplus
arises because there are insuﬃcient investment opportunities at home.
To satisfy domestic resident’s desired saving, they accumulate foreign
assets so that ∆NFA > 0. If the inequality is reversed, domestic sav-
ings would seem to be insuﬃcient to Þnance the desired amount of
domestic investment.5 On the other hand, the current account might
also depend on net government saving. If net private saving is in bal-
ance (S = I), then the current account imbalance is determined by
the imbalance in the government’s budget. Some people believed that
US current account deÞcits of the 1980s were the result of government
budget deÞcits.
    Because current account imbalances reßect a nation’s saving deci-
sion, the current account is largely a macroeconomic phenomenon as
well as an intertemporal problem. The current account will depend
on ßuctuations in relative prices of goods such as the real exchange
rate or the terms of trade, only to the extent that these prices aﬀect
intertemporal saving decisions.


The Balance of Payments
The balance of payments is a summary record of the transactions be-
tween the residents of a country with the rest of the world. These
include the exchange of goods and services, capital, unilateral trans-
fer payments, oﬃcial (central bank) and private transactions. A credit
transaction arises whenever payment is received from abroad. Credits
contribute toward a surplus or improvement of the balance of payments.
Examples of credit transactions include the export of goods, Þnancial
assets, and foreign direct investment in the home country. The latter
two examples are sometimes referred to as inßows of capital. Cred-
its are also generated by income received for factor services rendered
abroad, such as interest on foreign bonds, dividends on foreign equities,
and receipts for US labor services rendered to foreigners, receipts of for-
eign aid, and cash remittances from abroad are credit transactions in
     5
    This was a popular argument used to explain Japan’s current account surpluses
with the US
1.2. NATIONAL ACCOUNTING RELATIONS                                        19

the balance of payments. Debit transactions arise whenever payment is
made to agents that reside abroad. Debits contribute toward a deÞcit
or worsening of the balance of payments.6

Subaccounts
The precise format of balance of payments subaccount reporting dif-
fers across countries. For the US, the main subaccounts of the balance
of payments that you need to know are the current account, which
records transactions involving goods, services, and unilateral transfers,
the capital account, which records transactions involving real or Þnan-
cial assets, and the oﬃcial settlements balance, which records foreign
exchange transactions undertaken by the central bank.
    Credit transactions generate a supply of foreign currency and also
a demand for US dollars because US residents involved in credit trans-
actions require foreign currency payments to be converted into dollars.
Similarly, debit transactions create a demand for foreign exchange and
a supply of dollars. As a result, the combined deÞcits on the current
account and the capital account can be thought of as the excess de-
mand for foreign exchange by the private (non central bank) sector.
This combined current and capital account balance is commonly called
the balance of payments.
    Under a system of pure ßoating exchange rates, the exchange rate
is determined by equilibrium in the foreign exchange market. Excess
demand for foreign exchange in this case is necessarily zero. It follows
that it is not possible for a country to have a balance of payments prob-
lem under a regime of pure ßoating exchange rates because the balance
of payments is always zero and the current account deÞcit always is
equal to the capital account surplus.
    When central banks intervene in the foreign exchange market either
by buying or selling foreign currency, their actions, which are designed
to prevent exchange rate adjustment, allow the balance of payments to
be non zero. To prevent a depreciation of the home currency, a pri-
vately determined excess demand for foreign exchange can be satisÞed
by sales of the central bank’s foreign exchange reserves. Alternatively,
  6
    Note the unfortunate terminology: Capital inßows reduce net foreign asset
holdings, while capital outßows increase net foreign asset holdings.
20        CHAPTER 1. SOME INSTITUTIONAL BACKGROUND

if the home country spends less abroad than it receives there will be
a privately determined excess supply of foreign exchange. The central
bank can absorb the excess supply by accumulating foreign exchange
reserves. Changes in the central bank’s foreign exchange reserves are
recorded in the oﬃcial settlements balance, which we argued above is
the balance of payments. Central bank foreign exchange reserve losses
are credits and their reserve gains are debits to the oﬃcial settlements
account.



1.3     The Central Bank’s Balance Sheet
The monetary liabilities of the central bank is called the monetary base,
B. It is comprised of currency and commercial bank reserves or deposits
at the central bank. The central bank’s assets can be classiÞed into two
main categories. The Þrst is domestic credit, D. In the US, domestic
credit is extended to the treasury when the central bank engages in
open market operations and purchases US Treasury debt and to the
commercial banking system through discount lending. The second asset
category is the central bank’s net holdings of foreign assets, NFAcb .
These are mainly foreign exchange reserves held by the central bank
minus its domestic currency liabilities held by foreign central banks.
Foreign exchange reserves include foreign currency, foreign government
Treasury bills, and gold. We state the central bank’s balance sheet
identity as
                            B = D + NFAcb .                       (1.22)

Since the money supply varies in proportion to changes in the mon-
etary base, you see from (1.22) that in the open economy there are
two determinants of the money supply. The central bank can alter the
money supply either through a change in discount lending, open mar-
ket operations, or via foreign exchange intervention. Under a regime
of perfectly ßexible exchange rates, ∆NFAcb = 0, which implies that,
the central bank controls the money supply just as it does in the closed
economy case.
1.3. THE CENTRAL BANK’S BALANCE SHEET                                  21

Mechanics of Intervention
Suppose that the central bank wants to the dollar to fall in value against
the yen. To achieve this result, it must buy yen which increases NFAcb ,
B, and hence the money supply M. If the Fed buys the yen from
Citibank (say), in New York, the Fed pays for the yen by crediting
Citibank’s reserve account. Citibank then transfers ownership of a yen
deposit at a Japanese bank to the Fed.
    If the intervention ends here the US money supply increases but the
Japanese money supply is unaﬀected. In Japan, all that happens is a
swap of deposit liabilities in the Japanese commercial bank. The Fed
could go a step further and convert the deposit into Japanese T-bills.
It might do so by buying T-bills from a Japanese resident which it pays
for by writing a check drawn on the Japanese bank. The Japanese
resident deposits that check in a bank, and still, there is no net eﬀect
on the Japanese monetary base.
    If, on the other hand, the Fed converts the deposit into currency,
the Japanese monetary base does decline. The reason for this is that
the Japanese monetary base is reduced when the Fed withdraws cur-
rency from circulation. The Fed would never do this, however, because
currency pays no interest. The intervention described above is referred
to as an unsterilized intervention because the central bank’s foreign ex-
change transactions have been allowed to aﬀect the domestic money
supply. A sterilized intervention, on the other hand occurs when the
central bank oﬀsets its foreign exchange operations with transactions
in domestic credit so that no net change in the money supply occurs.
To sterilize the yen purchase described above, the Fed would simulta-
neously undertake an open market sale, so that D would decrease by
exactly the amount that NFAcb increases from the foreign exchange in-
tervention. It is an open question whether sterilized interventions can
have a permanent eﬀect on the exchange rate.
22   CHAPTER 1. SOME INSTITUTIONAL BACKGROUND
Chapter 2

Some Useful Time-Series
Methods

International macroeconomic and Þnance theory is typically aimed at
explaining the evolution of the open economy over time. The natural
way to empirically evaluate these theories are with time-series meth-
ods. This chapter summarizes some of the time-series tools that are
used in later chapters to estimate and to test predictions by the theory.
The material is written assuming that you have had a Þrst course in
econometrics covering linear regression theory and is presented with-
out proofs of the underlying statistical theory. There are now several
accessible textbooks that contain careful treatments of the associated
econometric theory.1 If you like, you may skip this chapter for now and
use it as reference when the relevant material is encountered.
     You will encounter the following notation and terminology. Under-
lined variables will denote vectors and bold faced variables will denote
matrices. a = plim(XT ) indicates that the sequence of random vari-
ables {XT } converges in probability to the number a as T → ∞. This
means that for suﬃciently large T , XT can be treated as a constant.
N (µ, σ 2 ) stands for the normal distribution with mean µ and variance
σ 2 , U [a, b] stands for the uniform distribution over the interval [a, b],
      iid
Xt ∼ N (µ, σ 2 ) means that the random variable Xt is independently
                                               iid
and identically distributed as N (µ, σ 2 ), Xt ∼ (µ, σ 2 ) means that Xt is
  1
      See Hamilton [66], Hatanaka [74], and Johansen [81].


                                        23
       24              CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

       independently and identically distributed according to some unspeci-
                                                            D
       Þed distribution with mean µ and variance σ 2 , YT → N (µ, σ 2 ) indicates
       that as T → ∞, the sequence of random variables YT converges in dis-
       tribution to the normal with mean µ and variance σ 2 and is called the
       asymptotic distribution of YT . This means that for suﬃciently large T ,
       the random variable {YT } has the normal distribution with mean µ and
(3)⇒   variance σ 2 . We will say that a time-series {xt } is covariance station-
       ary if its Þrst and second moments are Þnite and are time invariant—for
       example, if E(xt ) = µ, and E(xt xt−j ) = γj . AR(p) stands for au-
       toregression of order p, MA(n) stands for moving average of order
       n, ARIMA stands for autoregressive-integrated-moving-average, VAR
       stands for vector autoregression, and VECM stands for vector error
       correction model.


       2.1            Unrestricted Vector Autoregressions
       Consider a zero-mean covariance stationary bivariate vector time-series,
       q t = (q1t , q2t )0 and assume that it has the p-th order autoregressive
       representation2
                                                   p
                                                   X
                                            qt =         Aj q t−j + ²t ,                          (2.1)
                                                   j=1
                            Ã                !
                             a11,j a12,j
       where Aj =                                 and the error vector has mean, E(²t ) = 0
                             a21,j a22,j
       and covariance matrix E(²t ²0t ) = Σ. The unrestricted vector autore-
       gression VAR is a statistical model for the vector time-series q t . The
       same variables appear in each equation as the independent variables so
       the VAR can be eﬃciently estimated by running least squares (OLS)
       individually on each equation.
            To estimate a p−th order VAR for this 2−equation system, let
         0
       z t = (q1t−1 , . . . , q1t−p , q2t−1 , . . . , q2t−p ) and write (2.1) out as
                                            q1t = z 0t β 1 + ²1t ,
                                            q2t = z 0t β 2 + ²2t .
(4)⇒     Let the grand coeﬃcient vector be β                               =   (β 01 , β 02 )0 , and let
            2
                q t will be covariance stationary if E(q t ) = µ, E(q t − µ)(q t−j − µ)0 = Σj .
2.1. UNRESTRICTED VECTOR AUTOREGRESSIONS                                      25
           ³   P         ´
Q = plim T1 Tt=1 q t q 0t , be a positive deÞnite matrix of constants which ⇐(5)
exists by the law of large numbers and the covariance stationarity as-
sumption. Then, as T → ∞
                             √           D
                              T (β̂ − β) → N (0, Ω),                       (2.2)

where Ω = Σ ⊗ Q−1 . The asymptotic distribution can be used to test ⇐(6)
hypotheses about the β vector.


Lag-Length Determination
Unless you have a good reason to do otherwise, you should let the data
determine the lag length p. If the q t are drawn from a normal distri-
bution, the log likelihood function for (2.1) is −2 ln |Σ| + c where c is a
constant.3 If you choose the lag-length to maximize the normal likeli-
                                                            1 PT             0
hood you just choose p to minimize ln |Σ̂p |, where Σ̂p = T −p   t=p+1 ²̂t ²̂ t
is the estimated error covariance matrix of the VAR(p). In applications
with sample sizes typically available to international macroeconomists—
100 or so quarterly observations—using the likelihood criterion typically
results in choosing ps that are too large. To correct for the upward
small-sample bias, two popular information criteria are frequently used
for data-based lag-length determination. They are AIC suggested by
Akaike [1], and BIC suggested by Schwarz [125]. Both AIC and BIC
modify the likelihood by attaching a penalty for adding additional lags.
    Let k be the total number of regression coeﬃcients (the aij,r coef-
Þcients in (2.1)) in the system. In our bivariate case k = 4p.4 The
log-likelihood cannot decrease when additional regressors are included.
Akaike [1] proposed attaching a penalty to the likelihood for adding
lags and to choose p to minimize

                                                2k
                             AIC = 2 ln |Σˆp | + .
                                                T


   3
   |Σ| denotes the determinant of the matrix Σ.
   4
   This is without constants in the regressions. If constants are included in the
VAR then k = 4p + 2.
26        CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

   Even with the penalty, AIC often suggests p to be too large. An al-
ternative criterion, suggested by Schwarz [125] imposes an even greater
penalty for additional parameters is
                                            k ln T
                        BIC = 2 ln |Σˆp | +        .                  (2.3)
                                               T



Granger Causality, Econometric Exogeniety and Causal
Priority
In VAR analysis, we say q1t does not Granger cause q2t if lagged q1t do
not appear in the equation for q2t . That is, conditional upon current
and lagged q2t , current and lagged q1t do not help to predict future q2t .
You can test the null hypothesis that q1t does not Granger cause q2t by
regressing q2t on lagged q1t and lagged q2t and doing an F-test for the
joint signiÞcance of the coeﬃcients on lagged q1t .
     If q1t does not Granger cause q2t , we say q2t is econometrically ex-
ogenous with respect to q1t . If it is also true that q2t does Granger cause
q1t , we say that q2t is causally prior to q1t .

The Vector Moving-Average Representation
Given the lag length p, you can estimate the Aj coeﬃcients by OLS and
invert the VAR(p) to get the Wold vector moving-average representation

                                                  −1
                                        p
                                        X
                       q t = I −             Aj Lj     ²t
                                        j=1
                               ∞
                               X
                           =         Cj Lj ²t ,                       (2.4)
                               j=0


where L is the lag operator such that Lj xt = xt−j for any variable xt . To
solve for the Cj matrices, you equating coeﬃcients on powers of the lag
                                       P                 Pp
operator. From (2.4) you know that ( ∞            j
                                          j=0 Cj L )(I −
                                                                   j
                                                           j=1 Aj L ) = I.
2.1. UNRESTRICTED VECTOR AUTOREGRESSIONS                        27

   Write it out as                                                   (7) (see line 2)

      I = C0 + (C1 − C0 A1 )L + (C2 − C1 A1 − C0 A2 )L2
          +(C3 − C2 A1 − C1 A2 − C0 A3 )L3
          +(C4 − C3 A1 − C2 A2 − C1 A3 − C0 A4 )L4 + · · ·
                                        
             ∞
             X             j
                           X
         =         Cj −         Cj−k Ak  Lj .
             j=0           k=1

Now to equate coeﬃcients on powers of L, Þrst note that C0 = I and
the rest of the Cj follow recursively                              (8)(formulae
                                                                   to end of sec-
                 C1 = A1 ,                                         tion)
                 C2 = C1 A1 + A2 ,
                 C3 = C2 A1 + C1 A2 + A3 ,
                 C4 = C3 A1 + C2 A2 + C1 A3 + A4 ,
                       ..
                        .
                           k
                           X
               Ck =              Ck−j Aj .
                           j=1

For example if p = 2, set Aj = 0 for j ≥ 3. Then C1 = A1 , C2 =
C1 A1 + A2 , C3 = C2 A1 + C1 A2 , C4 = C3 A1 + C2 A2 , and so on. ⇐(9)

Impulse Response Analysis
Once you get the moving-average representation you will want employ
impulse response analysis to evaluate the dynamic eﬀect of innovations
in each of the variables on (q1t , q2t ). When you go to simulate the dy-
namic response of q1t and q2t to a shock to ²1t , you are immediately
confronted with two problems. The Þrst one is how big should the ⇐(10)
shock be? This becomes an issue because you will want to compare the
response of q1t across diﬀerent shocks. You’ll have to make a normal-
ization for the size of the shocks and a popular choice is to consider
shocks one standard deviation in size. The second problem is to get
shocks that can be unambiguously attributed to q1t and to q2t . If ²1t and
²2t are contemporaneously correlated, however, you can’t just shock ²1t
and hold ²2t constant.
                 28       CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

                    To deal with these problems, Þrst standardize the innovations. Since
                 the correlation matrix is given by
                                                                     Ã              !
                                                                         1 ρ
                                               R = ΛΣΛ =                                ,
                                                                         ρ 1
                                               
                                √1         0
                                 σ11
                 where Λ =          √1
                                           is a matrix with the inverse of the standard
                                0     σ22
                 deviations on the diagonal and zeros elsewhere. The error covariance
                 matrix can be decomposed as Σ = Λ−1 RΛ−1 . This means the Wold
                 vector moving-average representation (2.4) can be re-written as
                                                                     
                                                          ∞
                                                          X
                                       qt =                    Cj Lj  Λ−1 (Λ²t )
                                                          j=0
                                                                        
                                                          ∞
                                                          X
                                               =               Dj Lj  vt .                             (2.5)
                                                          j=0

                 where Dj ≡ Cj Λ−1 ,v t ≡ Λ²t and E(v t v 0t ) = R. The newly deÞned
                 innovations v1t and v2t both have variance of 1.
                    Now to unambiguously attribute an innovation to q1t , you must
                 orthogonalize the innovations by taking the unique upper triangular
                  Choleski matrix
                            Ã       decomposition
                                        !          of the correlation matrix R = S0 S,
                               s11 s12
                 where S =                . Now insert SS−1 into the normalized moving
                                0 s22
                 average (2.5) to get
                                                         
                                           ∞
                                           X                     ³           ´       ∞
                                                                                     X
                                qt =           Dj Lj  S S−1 vt =                          Bj Lj ηt ,   (2.6)
                                       j=0                                          j=0

(11) (eq. 2.6)   where Bj ≡ Dj S = Cj Λ−1 S and ηt ≡ S−1 vt , is the 2 × 1 vector of zero-
                 mean orthogonalized innovations with covariance matrix E(ηt η 0t = I).
                 Note that S−1 is also upper triangular.
                    Now write out the individual equations in (2.6) to get
                                                ∞
                                                X                            ∞
                                                                             X
                                  q1t =               b11,j η1,t−j +               b12,j η2,t−j ,        (2.7)
                                                j=0                          j=0
                                                X∞                           X∞
                                  q2t =               b21,j η1,t−j +               b22,j η2,t−j .        (2.8)
                                                j=0                          j=0
2.1. UNRESTRICTED VECTOR AUTOREGRESSIONS                                      29

The eﬀect on q1t at time k of a one standard deviation orthogonalized
innovation in η1 at time 0, is b11,k . Similarly, the eﬀect on q2k is b21,k .
Graphing the transformed moving-average coeﬃcients is an eﬃcient
method to examine the impulse responses.
   You may also want to calculate standard error bands for the impulse
responses. You can do this using the following parametric bootstrap
procedure.5 Let T be the number of time-series observations you have
and let a ‘tilde’ denote pseudo values generated by the computer, then ⇐(12) ‘tilde’

   1. Take T + M independent draws from the N(0, Σ̂) to form the
      vector series {²˜t }.

   2. Set startup values of q t at their mean values of 0 then recursively
      generate the sequence {q̃t } of length T + M according to (2.1)
      using the estimated Aj matrices.

   3. Drop the Þrst M observations to eliminate dependence on starting
      values. Estimate the simulated VAR. Call the estimated coeﬃ-
      cients Ãj .

   4. Form the matrices B̃j = C̃j Λ̃−1 S̃. You now have one realization ⇐(13)
      of the parametric bootstrap distribution of the impulse response
      function.

   5. Repeat the process say 5000 times. The collection of observations
      on the B̃j forms the bootstrap distribution. Take the standard
      deviation of the bootstrap distribution as an estimate of the stan-
      dard error.


Forecast-Error Variance Decomposition
In (2.7), you have decomposed q1t into orthogonal components. The
innovation η1t is attributed to q1t and the innovation η2t is attributed
   5
    The bootstrap is a resampling scheme done by computer to estimate the un-
derlying probability distribution of a random variable. In a parametric bootstrap
the observations are drawn from a particular probability distribution such as the
normal. In the nonparametric bootstrap, the observations are resampled from the
data.
30       CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

to q2t . You may be interested in estimating how much of the underly-
ing variability in q1t is due to q1t innovations and how much is due to
q2t innovations. For example, if q1t is a real variable like the log real
exchange rate and q2t is a nominal quantity such as money and you
might want to know what fraction of log real exchange rate variability
is attributable to innovations in money. In the VAR framework, you
can ask this question by decomposing the variance of the k-step ahead
forecast error into contributions from the separate orthogonal compo-
nents. At t + k, the orthogonalized and standardized moving-average
representation is

                     qt+k = B0 η t+k + · · · + Bk ηt + · · ·                        (2.9)

Take expectations of both sides of (2.9) conditional on information
available at time t to get

                     Et q t+k = Bk ηt + Bk+1 ηt−1 + · · ·                          (2.10)

Now subtract (2.10) from (2.9) to get the k-period ahead forecast error
vector
              q t+k − Et qt+k = B0 ηt+k + · · · + Bk−1 ηt+1 .    (2.11)
Because the ηt are serially uncorrelated and have covariance matrix I,
the covariance matrix of these forecast errors is

E[q t+k − Et qt+k ][qt+k − Et q t+k ]0 = B0 B00 + B1 B01 + · · · + Bk−1 B0k−1
                                          k ³
                                                                   Ã           !
                     k
                     X                    X                    ´       b01,j
                 =         Bj B0j =              b1,j , b2,j
                     j=0                  j=0
                                                                       b02,j
                     k
                     X                    k
                                          X
                 =         b1,j b01,j +         b2,j b02,j ,                       (2.12)
                     j=0                  j=0
                     |     {z     }       |      {z      }
                           (a)                  (b)

where b1,j is the Þrst column of Bj and b2,j is the second column of Bj .
As k → ∞, the k-period ahead forecast error covariance matrix tends
towards the unconditional covariance matrix of qt .
   The forecast error variance of q1t attributable to the orthogonalized
innovations in q1t is Þrst diagonal element in the Þrst summation which
2.1. UNRESTRICTED VECTOR AUTOREGRESSIONS                               31

is labeled a in (2.12). The forecast error variance in q1t attributable to
innovations in q2t is given by the Þrst diagonal element in the second
summation (labeled b). Similarly, the second diagonal element of a is
the forecast error variance in q2t attributable to innovations in q1t and
the second diagonal element in b is the forecast error variance in q2t
attributable to innovations in itself.
    A problem you may encountered in practice is that the forecast error
decomposition and impulse responses may be sensitive to the ordering
of the variables in the orthogonalizing process, so it may be a good
idea to experiment with which variable is q1t and which one is q2t . A
second problem is that the procedures outlined above are purely of a
statistical nature and have little or no economic content. In chapter
(8.4) we will cover a popular method for using economic theory to
identify the shocks.

Potential Pitfalls of Unrestricted VARs
Cooley and LeRoy [32] criticize unrestricted VAR accounting because
the statistical concepts of Granger causality and econometric exogene-
ity are very diﬀerent from standard notions of economic exogeneity.
Their point is that the unrestricted VAR is the reduced form of some
structural model from which it is not possible to discover the true rela-
tions of cause and eﬀect. Impulse response analyses from unrestricted
VARs do not necessarily tell us anything about the eﬀect of policy in-
terventions on the economy. In order to deduce cause and eﬀect, you
need to make explicit assumptions about the underlying economic en-
vironment.
    We present the Cooley—LeRoy critique in terms of the two-equation
model consisting of the money supply and the nominal exchange rate
                            m = ²1 ,                               (2.13)
                            s = γm + ²2 ,                          (2.14)
                                                             iid
where the error terms are related by ²2 = λ²1 + ²3 with ²1 ∼ N(0, σ12 ),
   iid
²3 ∼ N(0, σ32 ) and E(²1 ²3 ) = 0. Then you can rewrite (2.13) and (2.14)
as
                         m = ²1 ,                                  (2.15)
32       CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

                          s = γm + λ²1 + ²3 .                      (2.16)

m is exogenous in the economic sense and m = ²1 determines part of ²2 .
The eﬀect of a change of money on the exchange rate ds = (λ + γ)dm
is well deÞned.
    A reversal of the causal link gets you into trouble because you will
not be able to unambiguously determine the eﬀect of an m shock on
s. Suppose that instead of (2.13), the money supply is governed by
                                         iid             iid
two components, ²1 = δ²2 + ²4 with ²2 ∼ N (0, σ22 ), ²4 ∼ N (0, σ42 ) and
E(²4 ²2 ) = 0. Then
                            m = δ²2 + ²4 ,                         (2.17)
                            s = γm + ²2 .                          (2.18)

If the shock to m originates with ²4 , the eﬀect on the exchange rate
is ds = γd²4 . If the m shock originates with ²2 , then the eﬀect is
ds = (1 + γδ)d²2 .
    Things get really confusing if the monetary authorities follow a feed-
back rule that depends on the exchange rate,

                            m = θs + ²1 ,                          (2.19)
                            s = γm + ²2 ,                          (2.20)
where E(²1 ²2 ) = 0. The reduced form is
                                 ²1 + θ²2
                            m =           ,                        (2.21)
                                  1 − γθ
                                 γ²1 + ²2
                             s =          .                        (2.22)
                                  1 − γθ
Again, you cannot use the reduced form to unambiguously determine
the eﬀect of m on s because the m shock may have originated with ²1 ,
²2 , or some combination of the two. The best you can do in this case
is to run the regression s = βm + η, and get β = Cov(s, m)/Var(m)
which is a function of the population moments of the joint probability
distribution for m and s. If the observations are normally distributed,
then E(s|m) = βm, so you learn something about the conditional ex-
pectation of s given m. But you have not learned anything about the
eﬀects of policy intervention.
2.1. UNRESTRICTED VECTOR AUTOREGRESSIONS                                         33

  To relate these ideas to unrestricted VARs, consider the dynamic
model

                   mt = θst + β11 mt−1 + β12 st−1 + ²1t ,                  (2.23)
                   st = γmt + β21 mt−1 + β22 st−1 + ²2t ,                  (2.24)
           iid                   iid
where ²1t ∼ N (0, σ12 ), ²2t ∼ N(0, σ22 ), and E(²1t ²2s ) = 0 for all t, s.
Without additional restrictions, ²1t and ²2t are exogenous but both mt
and st are endogenous. Notice also that mt−1 and st−1 are exogenous
with respect to the current values mt and st .
    If θ = 0, then mt is said to be econometrically exogenous with
respect to st . mt , mt−1 , st−1 would be predetermined in the sense that
an intervention due to a shock to mt can unambiguously be attributed
to ²1t and the eﬀect on the current exchange rate is dst = γdmt . If
β12 = θ = 0, then mt is strictly exogenous to st .
    Eliminate the current value observations from the right side of (2.23)
and (2.24) to get the reduced form

                         mt = π11 mt−1 + π12 st−1 + umt ,                  (2.25)
                         st = π21 mt−1 + π22 st−1 + ust ,                  (2.26)

where
                     (β11 + θβ21 )                    (β12 + θβ22 )
                 π11 =                ,         π12 =                  ,
                        (1 − γθ)                         (1 − γθ)
                     (β21 + γβ11 )                    (β22 + γβ12 )
             π21 =                    ,         π22 =
                        (1 − γθ)                         (1 − γθ)
                       (²1t + θ²2t )                  (²2t + γ²1t )
              umt =                   ,         ust =                ,
                         (1 − γθ)                       (1 − γθ)
                      (σ 2 + θ2 σ22 )                       (γ 2 σ12 + σ22 )
       Var(umt ) = 1                  ,         Var(ust ) =                  ,
                       (1 − γθ)2                             (1 − γθ)2
                     (γσ12 + θσ22 )
   Cov(umt , ust ) =                  .
                       (1 − γθ)2
                                                                 ⇐(14) (last 3
   If you were to apply the VAR methodology to this system, you expressions)
would estimate the π coeﬃcients. If you determined that π12 = 0,
34        CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

you would say that s does not Granger cause m (and therefore m is
econometrically exogenous to s). But when you look at (2.23) and
(2.24), m is exogenous in the structural or economic sense when θ = 0
but this is not implied by π12 = 0. The failure of s to Granger cause m
need not tell us anything about structural exogeneity.
    Suppose you orthogonalize the error terms in the VAR. Let
δ = Cov(umt , ust )/Var(umt ) be the slope coeﬃcient from the linear
projection of ust onto umt . Then ust − δumt is orthogonal to umt by
construction. An orthogonalized system is obtained by multiplying
(2.25) by δ and subtracting this result from (2.26)

                       mt = π11 mt−1 + π12 st−1 + umt ,                             (2.27)

  st = δmt + (π21 − δπ11 )mt−1 + (π22 − δπ12 )st−1 + ust − δumt . (2.28)

The orthogonalized system includes a current value of mt in the st
equation but it does not recover the structure of (2.23) and (2.24). The
orthogonalized innovations are

                                       ²1t + θ²2t
                               umt =              ,                                 (2.29)
                                        1 − γθ
                                          ³                 ´
                                              γσ12 +θσ22
                        (γ²1t + ²2t ) −       σ12 +θ2 σ22
                                                                (²1t + θ²2t )
         ust − δumt =                                                           ,   (2.30)
                                          1 − γθ
which allows you to look at shocks that are unambiguously attributable
to umt in an impulse response analysis but the shock is not unambigu-
ously attributable to the structural innovation, ²1t .
    To summarize, impulse response analysis of unrestricted VARs pro-
vide summaries of dynamic correlations between variables but correla-
tions do not imply causality. In order to make structural interpreta-
tions, you need to make assumptions of the economic environment and
build them into the econometric model.6
     6
    You’ve no doubt heard the phrase made famous by Milton Friedman, “There’s
no such thing as a free lunch.” Michael Mussa’s paraphrasing of that principle in
doing economics is “If you don’t make assumptions, you don’t get conclusions.”
2.2. GENERALIZED METHOD OF MOMENTS                                                 35

2.2       Generalized Method of Moments
OLS can be viewed as a special case of the generalized method of mo-
ments (GMM) estimator studied by Hansen [70]. Since you are pre-
sumably familiar with OLS, you can build your intuition about GMM
by Þrst thinking about using it to estimate a linear regression. After
getting that under your belt, thinking about GMM estimation in more
complicated and possibly nonlinear environments is straightforward.
   OLS and GMM. Suppose you want to estimate the coeﬃcients in
the regression
                             qt = z 0t β + ²t ,                  (2.31)
where β is the k-dimensional vector of coeﬃcients, z t is a k-dimensional
                                   iid
vector of regressors and ²t ∼ (0, σ 2 ) and (qt , z t ) are jointly covariance
stationary. The OLS estimator of β is chosen to minimize
             T           T
          1X          1X
                ²2t =       (qt − β 0 z t )(qt − z 0t β)
          T t=1       T t=1
                               T              T                  T
                            1X             1X                 1X
                       =          qt2 − 2β       z t qt + β 0      (z z 0 )β.   (2.32)
                            T t=1          T t=1              T t=1 t t
When you diﬀerentiate (2.32) with respect to β and set the result to
zero, you get the Þrst-order conditions,
                T                 T                    T
             2X                1X                   1X
         −         z t ²t = −2       (z t qt ) + 2β       (z t z 0t ) = 0.      (2.33)
             T t=1             T t=1                T t=1
         |      {z     }    |                  {z                 }
                (a)                           (b)

If the regression is correctly speciÞed, the Þrst-order conditions form a
set of k orthogonality or ‘zero’ conditions that you used to estimate β.
These orthogonality conditions are labeled (a) in (2.33). OLS estima-
tion is straightforward because the Þrst-order conditions are the set of
k linear equations in k unknowns labeled (b) in (2.33) which are solved
by matrix inversion.7 Solving (2.33) for the minimizer β̂, you get,            ⇐(16) (last
   7
                                                                               line of foot-
     In matrix notation, we usually write the regression as q = Zβ + ² where q
is the T-dimensional vector of observations on q , Z is the T × k dimensional note)
                                                        t
matrix of observations on the independent variables whose t-th row is z 0t , β is the
k-dimensional vector of parameters that we want to estimate, ² is the T-dimensional
vector of regression errors, and β̂ = (Z0 Z)−1 Z0 q.
        36        CHAPTER 2. SOME USEFUL TIME-SERIES METHODS
                                    Ã      T
                                                    !−1 Ã       T
                                                                        !
                                        1X                   1X
                            β̂ =             z z0                 (z qt ) .       (2.34)
                                        T t=1 t t            T t=1 t
                                P
            Let Q = plim T1 z t z 0t and let W = σ 2 Q. Because {²t } is an iid
        sequence, {z t ²t } is also iid. It follows from the Lindeberg-Levy cen-
                                       P         D
        tral limit theorem that √1T Tt=1 z t ²t → N (0, W). Let the residuals be
                                                                              P
        ²ˆt = qt − z 0t β̂, the estimated error variance be σ̂ 2 = T1 Tt=1 ²̂2t , and let
                 2 P
        Ŵ = σ̂T Tt=1 z t z 0t . While it may seem like a silly thing to do, you can
        set up a quadratic form using the orthogonality conditions and get the
        OLS estimator by minimizing
                            Ã      T
                                             !0          Ã      T
                                                                        !
                                1X                           1X
                                     (z ²t )      Ŵ−1            (z ²t ) ,       (2.35)
                                T t=1 t                      T t=1 t

        with respect to β. This is the GMM estimator for the linear regression
        (2.31). The Þrst-order conditions to this problem are
                                        1X          1X
                                Ŵ−1       z t ²t =    z t ²t = 0,
                                        T           T
        which are identical to the OLS Þrst-order conditions (2.33). You also
(15)⇒   know that the asymptotic distribution of the OLS estimator of β is
                                √            D
                                  T (β̂ − β) → N(0, V),                (2.36)

         where V = σ 2 Q−1 . If you let D = E(∂(z t ²t )/∂β 0 ) = Q, the GMM
        covariance matrix V can be expressed as V = σ 2 Q−1 = [D0 W−1 D]−1 .
        The Þrst equality is the standard OLS calculation for the covariance
        matrix and the second equality follows from the properties of (2.35).
           You would never do OLS by minimizing (2.35) since to get the
        weighting matrix Ŵ−1 , you need an estimate of β which is what you
        want in the Þrst place. But this is what you do in the generalized
        environment.

        Generalized environment. Suppose you have an economic theory that
        relates qt to a vector xt . The theory predicts the set of orthogonality
        conditions
                                    E[z t ²t (qt , xt , β)] = 0,
2.2. GENERALIZED METHOD OF MOMENTS                                               37

where z t is a vector of instrumental variables which may be diﬀerent
from xt and ²t (qt , xt , β) may be a nonlinear function of the underlying
k-dimensional parameter vector β and observations on qt and xt .8 To
estimate β by GMM, let wt ≡ z t ²t (qt , xt , β) where we now write the ⇐(17)
vector of orthogonality conditions as E(wt ) = 0. Mimicking the steps
above for GMM estimation of the linear regression coeﬃcients, you’ll
want to choose the parameter vector β to minimize                          ⇐(18)
                         Ã         !0    Ã         !
                                                                           (eq. 2.37)
                             XT               T
                                              X
                           1                1
                                 wt Ŵ−1         w ,                (2.37)
                           T t=1           T t=1 t

where Ŵ is a consistent estimator of the asymptotic covariance matrix
      P
of √1T wt . It is sometimes called the long-run covariance matrix. You
cannot guarantee that wt is iid in the generalized environment. It may
be serially correlated and conditionally heteroskedastic. To allow for
these possibilities, the formula for the weighting matrix is
                                         ∞
                                         X
                           W = Ω0 +          (Ωj + Ω0j ),                    (2.38)
                                        j=1


where Ω0 = E(wt w0t ) and Ωj = E(w t w0t−j ). A popular choice for esti-
mating Ŵ is the method of Newey and West [114]
                               m µ       ¶
                            1X       j +1 ³           ´
                 Ŵ = Ω̂0 +       1−        Ω̂j + Ω̂0j ,                     (2.39)
                            T j=1      T
                  P                            P
where Ω̂0 = T1 Tt=1 wt w0t , and Ω̂j = T1 Tt=j+1 wt w0t−j . The weighting
function 1 − (j+1)
               T
                   is called the Bartlett window. When Ŵ constructed
by Newey and West, it is guaranteed to be positive deÞnite which is
a good thing since you need to invert it to do GMM. To guarantee
consistency, the Newey-West lag length (m) needs go to inÞnity, but at
a slower rate than T .9 You might try values such as m = T 1/4 . To test
   8
     Alternatively, you may be interested in a multiple equation system in which the
theory imposes parameter restrictions across equations so not only may the model
be nonlinear, ²t could be a vector of error terms.
   9
     Andrews [2] and Newey and West [115] oﬀer recommendations for letting the
data determine m.
              38        CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

              hypotheses, use the fact that
                                     √             D
                                        T (β̂ − β) → N (0, V),                                         (2.40)
                                                                      µ          ¶
                                                   −1                     ∂wt
              where V = (D0 W−1 D)                      , and D = E       ∂β 0
                                                                                     . To estimate D, you can
                                   µ           ¶
                            PT
              use D̂ = T1    t=1
                                       ∂ ŵt
                                       ∂β 0
                                               .
                 Let R be a k ×q restriction matrix and r is a q dimensional vector of
              constants. Consider the q linear restrictions Rβ = r on the coeﬃcient
              vector. The Wald statistic has an asymptotic chi-square distribution
(19)          under the null hypothesis that the restrictions are true
(eq. 2.41)⇒                                                                               D
                             WT = T (Rβ̂ − r)0 [RVR0 ]−1 (Rβ̂ − r) → χ2q .                             (2.41)
              It follows that the linear restrictions can be tested by comparing the
              Wald statistic against the chi-square distribution with q degrees of free-
              dom.
                  GMM also allows you to conduct a generic test of a set of overi-
              dentifying restrictions. The theory predicts that there are as many
              orthogonality conditions, n, as is the dimensionality of wt . The param-
              eter vector β is of dimension k < n so actually only k linear combi-
              nations of the orthogonality conditions are set to zero in estimation.
              If the theoretical restrictions are true, however, the remaining n − k
              orthogonality conditions should diﬀer from zero only by chance. The
              minimized value of the GMM objective function, obtained by evaluat-
              ing the objective function at β̂, turns out to be asymptotically χ2n−k
              under the null hypothesis that the model is correctly speciÞed.


              2.3      Simulated Method of Moments
              Under GMM, you chose β to match the theoretical moments to sample
              moments computed from the data. In applications where it is diﬃcult
              or impossible to obtain analytical expressions for the moment condi-
              tions E(w t ) they can be generated by numerical simulation. This is the
              simulated method of moments (SMM) proposed by Lee and Ingram [92]
              and Duﬃe and Singleton [40].
                  In SMM, we match computer simulated moments to the sample
              moments. We use the following notation.
2.3. SIMULATED METHOD OF MOMENTS                                                   39

β is the vector of parameters to be estimated.

{qt }Tt=1 is the actual time-series data of length T . Let q 0 = (q1 , q2 , . . . , qT )
        denote the collection of the observations.

{q̃i (β)}M  i=1 is a computer simulated time-series of length M which is
        generated according to the underlying economic theory. Let
        q̃ 0 (β) = (q̃1 (β), q̃2 (β), . . . , q̃M (β)) denote the collection of these
        M observations.

h(qt ) is some vector function of the data from which to simulate the
       moments. For example, setting h(qt ) = (qt , qt2 , qt3 )0 will pick oﬀ
       the Þrst three moments of qt .
                PT
H T (q) = T1     t=1 h(qt )   is the vector of sample moments of qt .
                     P
H M (q̃(β)) = M1 M
                 i=1 h(q̃i (β)) is the corresponding vector of simulated
       moments where the length of the simulated series is M.

ut = h(qt ) − H T (q) is h in deviation from the mean form.
           PT
Ω̂0 = T1            0
            t=1 ut ut     is the sample short-run variance of ut .
           PT
Ω̂j = T1            0
            t=1 ut ut−j     is the sample cross-covariance matrix of ut .
                     P  j+1
ŴT = Ω̂0 + T1 m                     0
                j=1 (1 − T )(Ω̂j + Ω̂j ) is the Newey-West estimate of
     the long-run covariance matrix of ut .

g T,M (β) = H T (q) − H M (q̃(β)) is the deviation of the sample moments
       from the simulated moments.

    The SMM estimator is that value of β that minimizes the quadratic
distance between the simulated moments and the sample moments
                                         h     i
                              gT,M (β)0 WT,M
                                         −1
                                             gT,M (β),                         (2.42)
                     h³        ´     i
                       T
where WT,M = 1 + M        WT . Let β̂ S be SMM estimator. It is asymp-
totically normally distributed with
                       √              D
                         T (β̂ S − β) → N (0, VS ),
        40         CHAPTER 2. SOME USEFUL TIME-SERIES METHODS
                                                         h   h³        ´    i   i−1
                                                                T
        as T and M → ∞ where VS = B0 1 + M                          W B       and ⇐(20)
              E∂h[q̃j (β)]
        B=       ∂β
                           . You can estimate the theoretical value of B using its
        sample counterparts.
            When you do SMM there are three points to keep in mind. First,
        you should choose M to be much larger than T . SMM is less eﬃcient
        than GMM because the simulated moments are only estimates of the
        true moments. This part of the sampling variability is decreasing in
        M and will be lessened by choosing M suﬃciently large.10 Second,
        the SMM estimator is the minimizer of the objective function for a
        Þxed sequence of random errors. The random errors must be held Þxed
        in the simulations so each time that the underlying random sequence
        is generated, it must have the same seed. This is important because
        the minimization algorithm may never converge if the error sequence
        is re-drawn at each iteration. Third, when working with covariance
        stationary observations, it is a good idea to purge the eﬀects of initial
        conditions. This can be done by initially generating a sequence of length
        2M , discarding the Þrst M observations and computing the moments
        from the remaining M observations.


        2.4       Unit Roots
        Unit root analysis Þgures prominently in exchange rate studies. A unit
        root process is not covariance stationary. To Þx ideas, consider the
        AR(1) process
                              (1 − ρL)qt = α(1 − ρ) + ²t ,              (2.43)
                  iid
(21)⇒   where ²t ∼ N(0, σ²2 ) and L is the lag operator.11 Most economic time-
        series display persistence so for concreteness we assume that 0 ≤ ρ ≤
        1.12 {qt } is covariance stationary if the autoregressive polynomial (1 −
        ρz) is invertible. In order for that to be true, we need ρ < 1, which
        is the same as saying that the root z in the autoregressive polynomial
          10
             Lee and Ingram suggest M = 10T , but with computing costs now so low it might
        be a good idea to experiment with diﬀerent values to ensure that your estimates
        are robust to M .
          11
             For any variable Xt , Lk Xt = Xt−k .
          12
             If we admit negative values of ρ, we require −1 ≤ ρ ≤ 1.
2.4. UNIT ROOTS                                                                      41

(1 − ρz) = 0 lies outside the unit circle, which in turn is equivalent to
saying that the root is greater than 1.13

The stationary case. To appreciate some of the features of a unit root
time-series, we Þrst review some properties of stationary observations.
If 0 ≤ ρ < 1 in (2.43), then {qt } is covariance stationary. It is straight-
forward to show that E(qt ) = α and Var(qt ) = σ²2 /(1 − ρ2 ), which are
Þnite and time-invariant. By repeated substitution of lagged values of
qt into (2.43), you get the moving-average representation with initial
condition q0
                                           
                                    t−1
                                    X                      t−1
                                                           X
                qt = α(1 − ρ)            ρj  + ρt q0 +         ρj ²t−j .     (2.44)
                                    j=0                    j=0


 The eﬀect of an ²t−j shock on qt is ρj . More recent ²t shocks have a ⇐(22)
larger eﬀect on qt than those from the more distant past. The eﬀects (eq.2.44)
of an ²t shock are transitory because they eventually die out.
    To estimate ρ, we can simplify the algebra by setting α = 0 so that
{qt } from (2.43) evolves according to

                              qt+1 = ρqt + ²t+1 ,
                                                            P                PT −1 2
where 0 ≤ ρ < 1. The OLS√estimator is ρ̂ = ρ+[( Tt=1
                                                  −1
                                                     qt ²t+1 )/(               t=1q )].
                                                                                     t
Multiplying both sides by T and rearranging gives
                                           T −1 P
                      √               √1
                                           t=1 qt ²t+1
                        T (ρ̂ − ρ) = T 1 PT −1 2 .                     (2.45)
                                         T  t=1 q t
                                       √
The reason that you multiply by T is because that is the correct
normalizing factor to get both the numerator and the denominator on
the right side of (2.45) to remain well behaved as T → ∞. By the law
                           P −1 2
of large numbers, plim T1 Tt=1    qt = Var(qt ) = σ²2 /(1 − ρ2 ), so for that
suﬃciently large T , the denominator can be treated like σ²2 /(1 − ρ2 )
                                iid
which is constant. Since ²t ∼ N(0, σ²2 ) and qt ∼ N(0, σ²2 /(1 − ρ2 )),
  13
    Most economic time-series are better characterized with positive values of ρ,
but the requirement for stationarity is actually |ρ| < 1. We assume 0 ≤ ρ ≤ 1 to
keep the presentation concrete.
42        CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

the product sequence {qt ²t+1 } is iid normal with mean E(qt ²t+1 ) =
0 and variance Var(qt ²t+1 ) = E(²2t+1 )E(qt2 ) = σ²4 /(1 − ρ2 ) < ∞. By
                                                            P −1          D
the Lindeberg-Levy central limit theorem, you have √1T Tt=1       qt ²t+1 →
N (0, σ 4 /(1 − ρ2 )) as T → ∞. For suﬃciently large T , the numerator
is a normally distributed random variable and the denominator is a
constant so it follows that
                         √            D
                           T (ρ̂ − ρ) → N (0, 1 − ρ2 ).               (2.46)
You can test hypotheses about ρ by doing the usual t-test.

Estimating the Half-Life to Convergence
If the sequence {qt } follows the stationary AR(1) process, qt = ρqt−1 +²t ,
its unconditional mean is zero, and the expected time, t∗ , for it to
adjust halfway back to 0 following a one-time shock (its half life) can
be calculated as follows. Initialize by setting q0 = 0. Then q1 = ²1
and E1 (qt ) = ρt q1 = ρt ²1 . The half life is that t such that the expected
value of qt has reverted to half its initial post-shock size–the t that
                                                         ∗
sets E1 (qt ) = ²21 . So we look for the t∗ that sets ρt ²1 = ²21
                                               − ln(2)
                                        t∗ =           .                                   (2.47)
                                                ln(ρ)
     If the process follows higher-order serial correlation, the formula
in (2.47) only gives the approximate half life although empirical re-
searchers continue to use it anyways. To see how to get the exact half
life, consider the AR(2) process, qt = ρ1 qt−1 + ρ2 qt−2 + ²t , and let
                   "          #                "           #              "        #
                        qt                         ρ1 ρ2                      ²t
            yt =                  ;    A=                      ,   ut =                .
                       qt−1                        1 0                        0
Now rewrite the process in the companion form,
                                      y t = Ayt−1 + ut ,                                   (2.48)
and let e1 = (1, 0) be a 2 × 1 row selection vector. Now qt = e1 y t ,
E1 (qt ) = e1 At y 1 , where A2 = AA, A3 = AAA, and so forth. The half
life is the value t∗ such that
                                 ∗    1        1
                            e1 At y1 = e1 y 1 = ²1 .
                                      2        2
2.4. UNIT ROOTS                                                          43

The extension to higher-ordered processes is straightforward.

The nonstationary case. If ρ = 1, qt has the driftless random walk
process14
                          qt = qt−1 + ²t .
Setting ρ = 1 in (2.44) gives the analogous moving-average representa-
tion
                                        t−1
                                        X
                            qt = q0 +         ²t−j .
                                        j=0

The eﬀect on qt from an ²t−j shock is 1 regardless of how far in the past
it occurred. The ²t shocks therefore exert a permanent eﬀect on qt .
    The statistical theory developed for estimating ρ for stationary time-
series doesn’t work for unit root processes because we have terms like
1 − ρ in denominators and the variance of qt won’t exist. To see
why that is the case, initialize the process by setting q0 = 0. Then
qt = (²t + ²t−1 + · · · + ²1 ) ∼ N (0, tσ²2 ). You can see that the vari-
ance of qt grows linearly with t. Now a typical term in the numera-
tor of (2.45) is {qt ²t+1 } which is an independent sequence with mean
E(qt ²t+1 )    =     E(qt )E(²t+1 )    =      0 but the variance is
                     2     2         4
Var(qt ²t+1 ) = E(qt )E(²t+1 ) = tσ² which goes to inÞnity over time.
Since an inÞnite variance violates the regularity conditions of the usual
central limit theorem, a diﬀerent asymptotic distribution theory is re-
quired to deal with non-stationary data. Likewise, the denominator in
                                                       P           P
(2.45) does not have a Þxed mean. In fact, E( T1 qt2 ) = σ 2 t = T2
doesn’t converge to a Þnite number either.
    The essential point is that the asymptotic distribution of the OLS
estimator of ρ is diﬀerent when {qt } has a unit root than when the
observations are stationary and the source of this diﬀerence is that the
variance of the observations grows ‘too fast.’ It turns out that a diﬀerent
scaling factor √
               is needed on the left side of (2.45). In the stationary case,
we scaled by T , but in the unit root case, we scale by T .
                                   1 PT −1
                                           qt ²t+1
                       T (ρ̂ − ρ) = 1 t=1
                                   T
                                        PT −1 2 ,                    (2.49)
                                     T2  t=1 qt

  14
    When ρ = 1, we need to set α = 0 to prevent qt from trending. This will
become clear when we see the Bhargava [12] formulation below.
        44            CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

        converges asymptotically to a random variable with a well-behaved dis-
        tribution and we say that ρ̂ converges at rate T whereas     √ in the station-
        ary case we say that convergence takes place at rate T . The distri-
        bution for T (ρ̂ − ρ) is not normal, however, nor does it have a closed
        form so that its computation must be done by computer simulation.
        Similarly, the studentized coeﬃcient or the ‘t-statistic’ for ρ̂ reported
                                         P           P
        by regression packages τ = T ρ̂( Tt=1 qt2 )/( Tt=1 ²2t ), also behaves has a
        well-behaved but non-normal asymptotic distribution.15

        Test Procedures
        The discussion above did not include a constant, but in practice one is
        almost always required and sometimes it is a good idea also to include
        a time trend. Bhargava’s [12] framework is useful for thinking about
        including constants and trends in the analysis. Let ξt be the deviation
        of qt from a linear trend

                                              qt = γ0 + γ1 t + ξt .                     (2.50)

        If γ1 6= 0, the question is whether the deviation from the trend is sta-
        tionary or if it is a driftless unit root process. If γ1 = 0 and γ0 6= 0,
        the question is whether the deviation of qt from a constant is station-
        ary. Let’s ask the Þrst question–whether the deviation from trend is
        stationary. Let
                                       ξt = ρξt−1 + ²t ,                   (2.51)
                                        iid
        where 0 < ρ ≤ 1 and ²t ∼ N(0, σ²2 ). You want to test the null hypothesis
        Ho : ρ = 1 against the alternative Ha : ρ < 1. Under the null hypothesis

                                                ∆qt = γ1 + ²t ,

        and qt is a random walk with drift γ1 . Add the increments to get
                      t
                      X
               qt =         ∆qj = γ1 t + (²0 + ²1 + · · · + ²t ) = γ0 + γ1 t + ξt ,     (2.52)
                      j=1

(23)⇒   where γ0 = ²0 and ξt = (²1 +²2 +· · ·+²t ). You can initialize by assuming
          15
            In fact, these distributions look like chi-square distributions so the least squares
        estimator is biased downward under the null that ρ = 1.
2.4. UNIT ROOTS                                                         45

²0 = 0, which is the unconditional mean of ²t . Now substitute (2.51)
into (2.50). Use the fact that ξt−1 = qt−1 − γ0 − γ1 (t − 1) and subtract
qt−1 from both sides to get

     ∆qt = [(1 − ρ)γ0 + ργ1 ] + (1 − ρ)γ1 t + (ρ − 1)qt−1 + ²t .    (2.53)

(2.53) says you should run the regression

                      ∆qt = α0 + α1 t + βqt−1 + ²t ,                (2.54)

where α0 = (1 − ρ)γ0 + ργ1 , α1 = (1 − ρ)γ1 , and β = ρ − 1. The null
hypothesis, ρ = 1, can be tested by doing the joint test of the restriction
β = α1 = 0. To test if the deviation from a constant is stationary, do a
joint test of the restriction β = α1 = α0 = 0. If the random walk with
drift is a reasonable null hypothesis, evidence of trending behavior will
probably be evident upon visual inspection. If this is the case, including
a trend in the test equation would make sense.
    In most empirical studies, researchers do the Dickey—Fuller test of
the hypothesis β = 0 instead of the joint tests recommended by Bhar-
gava. Nevertheless, the Bhargava formulation is useful for deciding
whether to include a trend or just a constant. To complicate matters
further, the asymptotic distribution of ρ and τ depend on whether a
constant or a trend is included in the test equation so a diﬀerent set
of critical values need to be computed for each speciÞcation of the test
equation. Tables of critical values can be found in textbooks on time-
series econometrics, such as Davidson and MacKinnon [35] or Hamil-
ton [66].

Parametric Adjustments for Higher-Ordered Serial Correla-
tion
You will need to make additional adjustments if ξt in (2.51) exhibits
higher-order serially correlation. The augmented Dickey—Fuller test is
a procedure that employs a parametric correction for such time depen-
dence. To illustrate, suppose that ξt follows the AR(2) process

                        ξt = ρ1 ξt−1 + ρ2 ξt−2 + ²t ,               (2.55)
          iid
where ²t ∼ N(0, σ²2 ). Then by (2.50), ξt−1 = qt−1 − γ0 − γ1 (t − 1), ⇐(24)
        46         CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

        and ξt−2 = qt−2 − γ0 − γ1 (t − 2). Substitute these expressions into
        (2.55) and then substitute this result into (2.50) to get qt = α0 + α1 t + ⇐(25)
        ρ1 qt−1 + ρ2 qt−2 + ²t , where α0 = γ0 [1 − ρ1 − ρ2 ] + γ1 [ρ1 + 2ρ2 ], and
        α1 = γ1 [1 − ρ1 − ρ2 ]. Now subtract qt−1 from both sides of this result,
(26)⇒   add and subtract ρ2 qt−1 to the right hand side, and you end up with

                          ∆qt = α0 + α1 t + βqt−1 + δ1 ∆qt−1 + ²t ,                  (2.56)

        where β = (ρ1 + ρ2 − 1), and δ1 = −ρ2 . (2.56) is called the augmented
        Dickey—Fuller (ADF) regression. Under the null hypothesis that qt has
        a unit root, β = 0.
            As before, a test of the unit root null hypothesis can be conducted
        by estimating the regression (2.56) by OLS and comparing the studen-
        tized coeﬃcient, τ on β (the t-ratio reported by standard regression
        routines) to the appropriate table of critical values. The distribution
        of τ , while dependent on the speciÞcation of the deterministic factors,
        is fortunately invariant to the number of lagged dependent variables in
        the augmented Dickey—Fuller regression.16

        Permanent-and-Transitory-Components Representa-
        tion
        It is often useful to model a unit root process as the sum of diﬀerent
        sub-processes. In section chapter 2.2.7 we will model the time-series as
        being the sum of ‘trend’ and ‘cyclical’ components. Here, we will think
        of a unit root process {qt } as the sum of a random walk {ξt } and an
        orthogonal stationary process, {zt }
                                           qt = ξt + zt .                            (2.57)
                                                                                         iid
        To Þx ideas, let ξt = ξt−1 + ²t be a driftless random walk with ²t ∼
        N(0, σ²2 ) and let zt = ρzt−1 + vt be a stationary AR(1) process with
                              iid
(27)⇒   0 ≤ ρ < 1 and vt ∼ N(0, σv2 ).17 Because the eﬀect of the ²t shocks
          16
            An alternative strategy for dealing with higher-order serial correlation is the
        Phillips and Perron [120] method. They suggest a test that employs a nonpara-
        metric correction of the OLS studentized coeﬃcient for β̂ so that its asymptotic
        distribution is the same as that when there is no higher ordered serial correlation.
        We will not cover their method.
2.4. UNIT ROOTS                                                                     47

on qt last forever, the random walk {ξt } is called the permanent com-
ponent. The stationary AR(1) part of the process, {zt }, is called the
transitory component because the eﬀect of vt shocks on zt and there-
fore on qt eventually die out. This random walk—AR(1) model has an
ARIMA(1,1,1) representation.18 To deduce the ARIMA formulation,
take Þrst diﬀerences of (2.57) to get

            ∆qt =       ²t + ∆zt
                =       ²t + (ρ∆zt−1 + ∆vt ) + (ρ²t−1 − ρ²t−1 )
                =       ρ[∆zt−1 + ²t−1 ] + (²t − ρ²t−1 + vt − vt−1 )
                =       ρ∆qt−1 + (²t − ρ²t−1 + vt − vt−1 ),                    (2.58)
                                     |           {z               }
                                                 (a)


where ρ∆qt−1 is the autoregressive part. The term labeled (a) in the
last line of (2.58) is the moving-average part. To see the connection,
write this term out as,

                     ²t + vt − (ρ²t−1 + vt−1 ) = ut + θut−1 ,                  (2.59)

where ut is an iid process with E(ut ) = 0 and E(u2t ) = σu2 . Now
you want to choose θ and σu2 such that ut + θut−1 is observationally
equivalent to ²t + vt − (ρ²t−1 + vt−1 ), which you can do by match-
ing corresponding moments. Let ζt = ²t + vt − (ρ²t−1 + vt−1 ) and
ηt = ut + θut−1 . Then you have,                                     ⇐(28)

                          E(ζt2 )    =   σ²2 (1 + ρ2 ) + 2σv2 ,
                          E(ηt2 )    =   σu2 (1 + θ2 ),
                       E(ζt ζt−1 )   =   −(σv2 + ρσ²2 ),
                       E(ηt ηt−1 )   =   θσu2 .

Set E(ζt2 ) = E(ηt2 ) and E(ζt ζt−1 ) = E(ηt ηt−1 ) to get                                (eq. 2.60)(29)
  17
     Not all unit root processes can be built up in this way. Beveridge and Nelson [11]
 show that any unit root process can be decomposed into the sum of a permanent
component and a transitory component but the two components will in general be
correlated.
  18
     ARIMA(p,d,q) is short-hand for a p-th order autoregressive, q-th order moving-
average process that is integrated of order d.
        48        CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

                             σu2 (1 + θ2 ) = σ²2 (1 + ρ2 ) + 2σv2 ,               (2.60)
                                     θσu2 = −(σv2 + ρσ²2 ).                       (2.61)
        These are two equations in the unknowns, σu2 and θ which can be solved.
        The equations are nonlinear in σu2 and getting the exact solution is
        pretty messy. To sketch out what to do, Þrst get θ2 = [σv2 + ρσ²2 ]2 /(σu2 )2
(30)⇒   from (2.61). Substitute it into (2.60) to get x2 + bx + c = 0 where
(31)⇒   x = σu2 , b = −[σ²2 (1 + ρ2 ) + 2σv2 ], and c = [σv2 + ρσ²2 ]2 . The solution for
        σu2 can then be obtained by the quadratic formula.

        Variance Ratios
        The variance ratio statistic at horizon k is the variance of the k-period
        change of a variable divided by k times the one-period change
                        Var(qt − qt−k )   Var(∆qt + · · · + ∆qt−k+1 )
               VRk =                    =                             .           (2.62)
                         kVar(∆qt )             kVar(∆qt )
        The use of these statistics were popularized by Cochrane [29] who used
        them to conduct nonparametric tests of the unit root hypothesis in
        GNP and to measure the relative size of the random walk component
        in a time-series.
            Denote the k-th autocovariance of the stationary time-series {xt } by
(32)⇒   γkx = Cov(xt , xt−k ). The denominator of (2.62) is kγ0∆qi , the numerator
                                       P
        is Var(qt −qt−k+1 ) = k γ0∆q + k−1        j    ∆q   ∆q
                                         j=1 (1 − k )(γj + γ−j ) , so the variance
        ratio statistic can be written as
                                             Pk−1
                                    γ0∆q +              j   ∆q  ∆q
                                             j=1 (1 − k )(γj + γ−j )
                        VRk =
                                                   γ0∆q
                                         P            j   ∆q
                                        2 k−1
                                           j=1 (1 − k )γj
                                =   1+                                            (2.63)
                                               γ0∆q
                                         k−1
                                         X         j
                                =   1 + 2 (1 − )ρ∆q       ,
                                         j=1       k j

        where ρ∆q   ∆q  ∆q
               j = γj /γ0 is the j-th autocorrelation coeﬃcient of ∆qt .


        Measuring the size of the random walk. Suppose that qt evolves ac-
        cording to the permanent—transitory components model of (2.57). If
2.4. UNIT ROOTS                                                        49

ρ = 1, the increments ∆qt are independent and the numerator of VRk
is Var(qt − qt−k ) = Var(∆qt + ∆qt−1 + · · · ∆qt−k+1 ) = kVar(∆qt ), where
Var(∆qt ) = σ²2 + σv2 . In the absence of transitory component dynamics,
VRk = 1 for all k ≥ 1.
    If 0 < ρ < 1, {qt } is still a unit root process, but its dynamics
are driven in part by the transitory part, {zt }. To evaluate VRk , Þrst
note that γ0z = σv2 /(1 − ρ2 ). The k-th autocovariance of the transitory
component is γkz = E(zt zt−k ) = ρk γ0z , γ0∆z = E[∆zt ][∆zt ] = 2(1 − ρ)γ0z ⇐(33)
and the k-th autocovariance of ∆zt is
             γk∆z = E[∆zt ][∆zt−k ] = −(1 − ρ)2 ρk−1 γ0z < 0.       (2.64)
By (2.64), ∆zt is negatively correlated with its past values and therefore
exhibits mean reverting behavior because a positive change today is
expected to be reversed in the future. You also see that γ0∆q = σ²2 + γ0∆z
and for k > 1
                             γk∆q = γk∆z < 0.                       (2.65)
By (2.65), the serial correlation in {∆qt } is seen to be determined by
the dynamics in the transitory component {zt }. Interactions between
changes are referred to as the short run dynamics of the process. Thus,
working on (2.63), the variance ratio statistic for the random walk—
AR(1) model can be written as
                                             Pk−1 ³        ´
                             2(1 − ρ)2 γ0z     j=1    1 − kj ρj−1
             VRk    = 1−
                                              γ0∆q
                        2(1 − ρ)γ0z
                    → 1−                      as k → ∞
                            γ0∆q
                           γ0∆z
                    = 1− 2        .                                 (2.66)
                        σ² + γ0∆z
VR∞ − 1 is the fraction of the short run variance of ∆qt generated by
changes in the the transitory component. VR∞ is therefore increasing
in the relative size of the random walk component σ²2 /γ0∆z .

Near Observational Equivalence
Blough [16],Faust [50], and Cochrane [30] point out that for a sample
with Þxed T any unit root process is observationally equivalent to a
50         CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

very persistent stationary process. As a result, the power of unit root
tests whose null hypothesis is that there is a unit root can be no larger
than the size of the test.19
    To see how the problem comes up, consider again the permanent—
transitory representation of (2.57). Assume that σ²2 = 0 in (2.57), so
that {qt } is truly an AR(1) process. Now, for any Þxed sample size
T < ∞, it would be possible to add to this AR(1) process a random
walk with an inÞnitesimal σ²2 which leaves the essential properties of
{qt } unaltered, even though when we drive T → ∞, the random walk
will dominate the behavior of qt . The practical implication is that it
may be diﬃcult or even impossible to distinguish between a persistent
but stationary process and a unit root process with any Þnite sample.
So even though the AR(1) plus the very small random walk process is
in fact a unit root process, σ²2 can always be chosen suﬃciently small,
regardless of how large we make T so long as it is Þnite, that its behavior
is observationally equivalent to a stationary AR(1) process.
    Turning the argument around, suppose we begin with a true unit
root process but the random walk component, σ²2 is inÞnitesimally
small. For any Þnite T , this process can be arbitrarily well approx-
imated by an AR(1) process with judicious choice of ρ and σu2 .


2.5       Panel Unit-Root Tests
    Univariate/single-equation econometric methods for testing unit roots
can have low power and can give imprecise point estimates when work-
ing with small sample sizes. Consider the popular Dickey—Fuller test
for a unit root in a time-series {qt } and assume that the time-series are
generated by
                    ∆qt = α0 + α1 t + (ρ − 1)qt−1 + ²t ,            (2.67)
           iid
where ²t ∼ N (0, σ 2 ). If ρ = 1, α1 = α0 = 0, qt follows a driftless unit
root process. If ρ = 1, α1 = 0, α0 6= 0, qt follows a unit root process
with drift If |ρ| < 1, yt is stationary. It is mean reverting if α1 = 0, and
is stationary around a trend if α1 6= 0.
  19
     Power is the probability of rejecting the null when it is false. The size of a test
is the probability of rejecting the null when it is true.
2.5. PANEL UNIT-ROOT TESTS                                                        51

    To do the Dickey—Fuller test for a unit root in qt , run the regres-
sion (2.67) and compare the studentized coeﬃcient for the slope to the
Dickey—Fuller distribution critical values. Table 2.1 shows the power of
the Dickey—Fuller test when the truth is ρ = 0.96.20 With 100 observa-
tions, the test with 5 percent size rejects the unit root only 9.6 percent
of the time when the truth is a mean reverting process.

       Table 2.1: Finite Sample Power of Dickey—Fuller test, ρ = 0.96.

                              T 5 percent             10 percent
                  Test       25     5.885                 11.895
                  equation   50     6.330                 12.975
                  includes   75     7.300                 14.460
                  constant  100     9.570                 18.715
                           1000    99.995                100.000
                  Test       25     5.715                 10.720
                  equation   50     5.420                 10.455
                  includes   75     5.690                 11.405
                  trend     100     7.650                 14.665
                           1000    99.960                100.000

Notes: Table reports percentage of rejections at 5 percent or 10 percent critical
value when the alternative hypothesis is true with ρ = 0.96. 20000 replications.
Critical values are from Hamilton (1994) Table B.6.

    100 quarterly observations is about what is available for exchange
rate studies over the post Bretton-Woods ßoating period, so low power
is a potential pitfall in unit-root tests for international economists. But
again, from Table 2.1, if you had 1000 observations, you are almost
guaranteed to reject the unit root when the truth is that qt is stationary
with ρ = 0.96. How do you get 1000 observations without having to
wait 250 years? How about combining the 100 time-series observations
from 10 roughly similar countries.21 This is the motivation for recently
  20
     Power is the probability that the test correctly rejects the null hypothesis be-
cause the null happens to be false.
  21
     It turns out that the 1000 cross-section—time-series observations contain less
52         CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

proposed panel unit-root tests have by Levin and Lin [91], Im, Pesaran
and Shin [78], and Maddala and Wu [99]. We begin with the popular
Levin—Lin test.


The Levin—Lin Test
Let {qit } be a balanced panel22 of N time-series with T observations
which are generated by

                           ∆qit = δi t + βi qit−1 + uit ,                     (2.68)

where −2 < βi ≤ 0, and uit has the error-components representation

                                uit = αi + θt + ²it .                         (2.69)

αi is an individual—speciÞc eﬀect, θt is a single factor common time ef-
fect, and ²it is a stationary but possibly serially correlated idiosyncratic
eﬀect that is independent across individuals. For each individual i, ²it
has the Wold moving-average representation
                                      ∞
                                      X
                              ²it =         θij ²it−j + uit .                 (2.70)
                                      j=0


qit is a unit root process if βi = 0 and δi = 0. If there is no drift in the
unit root process, then αi = 0. The common time eﬀect θt is a crude
model of cross-sectional dependence.
     Levin—Lin propose to test the null hypothesis that all individuals
have a unit root
                       H0 : β1 = · · · = βN = β = 0,
against the alternative hypothesis that all individuals are stationary

                         HA : β1 = · · · = βN = β < 0.
information than 1000 observations from a single time-series. √ In the time-series, ρ̂
converges at rate T , but in the panel, ρ̂ converges at rate T N where N is the
number of cross-section units, so in terms of convergence toward the asymptotic
distribution, it’s better to get more time-series observations.
  22
     A panel is balanced if every individual has the same number of T observations.
2.5. PANEL UNIT-ROOT TESTS                                                    53

The test imposes the homogeneity restrictions that βi are identical
across individuals under both the null and under the alternative hy-
pothesis.
   The test proceeds as follows. First, you need to decide if you want
to control for the common time eﬀect θt . If you do, you subtract oﬀ
the cross-sectional mean and the basic unit of analysis is

                                             N
                                          1 X
                           q̃it = qit −         qjt .                      (2.71)
                                          N j=1


Potential pitfalls of including common-time eﬀect. Doing so however
involves a potential pitfall. θt , as part of the error-components model,
is assumed to be iid. The problem is that there is no way to im-
pose independence. SpeciÞcally, if it is the case that each qit is driven
in part by common unit root factor, θt is a unit root process. Then
               P
q̃it = qit − N1 Nj=1 qjt will be stationary. The transformation renders ⇐(34)
all the deviations from the cross-sectional mean stationary. This might
cause you to reject the unit root hypothesis when it is true. Subtract-
ing oﬀ the cross-sectional average is not necessarily a fatal ßaw in the
procedure, however, because you are subtracting oﬀ only one potential
unit root from each of the N time-series. It is possible that the N
individuals are driven by N distinct and independent unit roots. The
adjustment will cause all originally nonstationary observations to be
stationary only if all N individuals are driven by the same unit root.
An alternative strategy for modeling cross-sectional dependence is to
do a bootstrap, which is discussed below. For now, we will proceed
with the transformed observations. The resulting test equations are

                                               ki
                                               X
             ∆q̃it = αi + δi t + βi q̃it−1 +         φij ∆q̃it−j + ²it .   (2.72)
                                               j=1


The slope coeﬃcient on q̃it−1 is constrained to be equal across individ-
uals, but no such homogeneity is imposed on the coeﬃcients on the
lagged diﬀerences nor on the number of lags ki . To allow for this speci-
Þcation in estimation, regress ∆q̃it and q̃it−1 on a constant (and possibly
54          CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

trend) and ki lags of ∆q̃it .23
                                                    ki
                                                    X
                       ∆q̃it = ai + bi t +                cij ∆q̃it−j + êit ,            (2.73)
                                                    j=1
                                                    ki
                                                    X
                       q̃it−1 = a0i + b0i t +          0
                                                          cij ∆q̃it−j + v̂it ,            (2.74)
                                                    j=1


where êit and v̂it are OLS residuals. Now run the regression

                                    êit = δi v̂it−1 + ûit ,                             (2.75)
                       PT
      2
set σ̂ei = T −k1i −1               2
                         t=ki +2 ûit , and form the normalized observations

                                          êit                v̂it
                                 ẽit =        ,    ṽit =         .                      (2.76)
                                          σ̂ei                σ̂ei
                                                                                 P
Denote the long run variance of ∆qit by σqi     2
                                                   = γ0i + 2 ∞    i
                                                             j=0 γj , where
                                                    1 P  N
γ0i = E(∆qit2 ) and γji = E(∆qit ∆qit−j ). Let k̄ = N i=1 ki and estimate
  2
σqi by Newey and West [114]

                                              k µ
                                              X                        ¶
                              2                         j
                            σ̂qi = γ̂0i + 2         1−     γ̂ i ,                         (2.77)
                                              j=1      k+1 j

               1  T    P                         σ̂qi        1                       PN
where γ̂ji = T −1 t=2+j ∆q̃it ∆q̃it−j . Let si = σ̂ei , SN = N                        i=1 si and
run the pooled cross-section time-series regression

                                    ẽit = βṽit−1 + ²̃it .                               (2.78)
                                                      P         P
The studentized coeﬃcient is τ = β̂ N     i=1
                                                T
                                                t=1 ṽit−1 /σ̂²̃ where σ̂²̃ =
 1 PN PT
NT   i=1  t=1 ²̃it . As in the univariate case, τ is not asymptotically
standard normally distributed. In fact, τ diverges as the number of
  23
    To choose ki , one option is to use AIC or BIC. Another option is to use Hall’s [69]
general-to-speciÞc method recommended by Campbell and Perron [19]. Start with
some maximal lag order ` and estimate the regression. If the absolute value of the
t-ratio for ĉi` is less than some appropriate critical value, c∗ , reset ki to ` − 1 and
repeat the process until the t-ratio of the estimated coeﬃcient with the longest lag
exceeds the critical value c∗ .
2.5. PANEL UNIT-ROOT TESTS                                                      55


Table 2.2: Mean and Standard Deviation Adjustments for Levin—Lin τ
Statistic, reproduced from Levin and Lin [91]

                        τN∗ C                τC∗                ∗
                                                               τCT
        T̃     K     µ∗T̃    σT̃∗     µ∗T̃          σT̃∗     µ∗T̃     σT̃∗
        25      9   0.004   1.049   -0.554         0.919   -0.703    1.003
        30     10   0.003   1.035   -0.546         0.889   -0.674    0.949
        35     11   0.002   1.027   -0.541         0.867   -0.653    0.906
        40     11   0.002   1.021   -0.537         0.850   -0.637    0.871
        45     11   0.001   1.017   -0.533         0.837   -0.624    0.842
        50     12   0.001   1.014   -0.531         0.826   -0.614    0.818
        60     13   0.001   1.011   -0.527         0.810   -0.598    0.780
        70     13   0.000   1.008   -0.524         0.798   -0.587    0.751
        80     14   0.000   1.007   -0.521         0.789   -0.578    0.728
        90     14   0.000   1.006   -0.520         0.782   -0.571    0.710
       100     15   0.000   1.005   -0.518         0.776   -0.566    0.695
       250     20   0.000   1.001   -0.509         0.742   -0.533    0.603
       ∞        —   0.000   1.000   -0.500         0.707   -0.500    0.500



observations NT gets large, but Levin and Lin show that the adjusted
statistic
                    τ − N T̃ SN τ µ∗T̃ σ̂²−2 β̂ −1 D
              τ∗ =                                 → N(0, 1), (2.79)
                              σT̃∗
as T̃ → ∞, N → ∞ where T̃ = T − k̄−1, and µ∗T̃ and σT̃∗ are adjustment
factors reproduced from Levin and Lin’s paper in Table 2.2.

Performance of Levin and Lin’s adjustment factors in a controlled en-
vironment. Suppose the data generating process (the truth) is, that
each individual is the unit root process
                                    2
                                    X
                     ∆qit = αi +          φij ∆qit−j + ²it ,                 (2.80)
                                    j=1

         iid
where ²it ∼ N(0, σi ), and each of the σi is drawn from a uniform dis-
tribution over the range 0.1 to 1.1. That is, σi ∼ U[0.1, 1.1]. Also,
56        CHAPTER 2. SOME USEFUL TIME-SERIES METHODS


Table 2.3: How Well do Levin—Lin adjustments work? Percentiles from
a Monte Carlo Experiment.

 Statistic N        T trend 2.5%     5%     50%                    95%     97.5%
    τ      20      100  no  -7.282 -6.995 -5.474                  -3.862   -3.543
           20      500  no  -7.202 -6.924 -5.405                  -3.869   -3.560
    τ∗     20      100  no  -2.029 -1.732 -0.092                   1.613   1.965
           20      500  no  -1.879 -1.557 0.012                    1.595   1.894
    τ      20      100 yes -10.337 -10.038 -8.642                 -7.160   -6.896
           20      500 yes -10.126 -9.864 -8.480                  -7.030   -6.752
      ∗
    τ      20      100 yes  -1.171 -0.825 0.906                    2.997   3.503
           20      500 yes  -1.028 -0.746 0.702                    2.236   2.571



φij ∼ U[−0.3, 0.3], and αi ∼ N (0, 1) if a drift is included, (otherwise
α = 0).24 Table 2.3 shows the Monte Carlo distribution of Levin and
Lin’s τ and τ ∗ generated from this process. Here are some things to
note from the table. First, the median value of τ is very far from 0. It
would get bigger (in absolute value) if we let N get bigger. Second, τ ∗
looks like a standard normal variate when there is no drift in the DGP
(and no trend in the test equation). Third, the Monte Carlo distribu-
tion for τ ∗ looks quite diﬀerent from the asymptotic distribution when
there is drift in the DGP and a trend is included in the test equation.
This is what we call Þnite sample size distortion of the test. When there
is known size distortion, you might want to control for it by doing a
bootstrap, which is covered below.
     Another option is to try to correct for the size distortion. The
question here is, if you correct for size distortion, does the Levin—Lin
test have good power? That is, will it reject the null hypothesis when it
is false with high probability? The answer suggested in Table 2.4 is yes.
It should be noted, that even though the Levin-Lin test is motivated
in terms of a homogeneous panel, it has moderate ability to reject the
null when the truth is a mixed panel in which some of the individuals
  24
    Instead of me arbitrarily choosing values of these parameters for each of the
individual units, I let the computer pick out some numbers at random.
2.5. PANEL UNIT-ROOT TESTS                                                   57


Table 2.4: Size adjusted power of Levin—Lin test with T = 100, N = 20

                 Proportion       Constant          Trend
                stationarya/     5%    10%        5%    10%
                     0.2        0.141 0.275      0.124 0.218
                     0.4        0.329 0.439      0.272 0.397
                     0.6        0.678 0.761      0.577 0.687
                     0.8        0.942 0.967      0.906 0.944
                     1.0        1.000 1.000      1.000 1.000

Notes: a/ Proportion of individuals in the panel that are stationary. Stationary
components have root equal to 0.96. Source: Choi [26].


are unit root process and others are stationary.

Bias Adjustment
The OLS estimator ρ̂ is biased downward in small samples. Kendall [85]
showed that the bias of the least squares estimator is E(ρ̂) − ρ ' −(1 +
3ρ)/T . A bias-adjusted estimate of ρ is
                                     T ρ̂ + 1
                               ρˆ∗ =          .                     (2.81)
                                     T −3
    The panel estimator of the serial correlation coeﬃcient is also biased
downwards in small samples. A Þrst-order bias-adjustment of the panel
estimate of ρ can be done using a result by Nickell [116] who showed
that
                                         AT BT
                           (ρ̂ − ρ) →           ,                   (2.82)
                                           CT
                                                                       T
as T → ∞, N → ∞ where AT = −(1+ρ)
                            T −1
                                  , BT = 1 − T1 (1−ρ
                                                 (1−ρ)
                                                      )
                                                        , and
           2ρ(1−BT )
CT = 1 − [(1−ρ)(T −1)]
                       .

Bootstrapping τ ∗
The fact that τ diverges can be distressing. Rather than to rely on
the asymptotic adjustment factors that may not work well in some re-
gions of the parameter space, researchers often choose to test the unit
58           CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

root hypothesis using a bootstrap distribution of τ .25 Furthermore,
the bootstrap provides an alternative way to model cross-sectional de-
pendence in the error terms, as discussed above. The method discussed
here is called the residual bootstrap because we will be resampling from
the residuals.
   To build a bootstrap distribution under the null hypothesis that all
individuals follow a unit-root process, begin with the data generating
process (DGP)
                                         ki
                                         X
                         ∆qit = µi +          φij ∆qi,t−j + ²it .                 (2.83)
                                        j=1
Since each qit is a unit root process, its Þrst diﬀerence follows an autore-
gression. While you may prefer to specify the DGP as an unrestricted
vector autoregression for all N individuals, the estimation such a sys-
tem turns out not to be feasible for even moderately sized N.
    The individual equations of the DGP can be Þtted by least squares.
If a linear trend is included in the test equation a constant must be in-
cluded in (2.83). To account for dependence across cross-sectional units,
estimate the joint error covariance matrix Σ = E(²t ²0t ) by
        P
Σ̂ = T1 Tt=1 ²ˆt ²ˆt 0 where ²̂t = (²̂1t , . . . , ²̂N t ) is the vector of OLS residuals.
    The parametric bootstrap distribution for τ is built as follows.
     1. Draw a sequence of length T + R innovation vectors from
        ²̃t ∼ N(0, Σ̂).
     2. Recursively build up pseudo—observations {q̂it }, i = 1, . . . , N,
        t = 1, . . . , T + R according to (2.83) with the ²̃t and estimated
        values of the coeﬃcients µ̂i and φ̂ij .
     3. Drop the Þrst R pseudo-observations, then run the Levin—Lin test
        on the pseudo-data. Do not transform the data by subtracting
        oﬀ the cross-sectional mean and do not make the τ ∗ adjustments.
        This yields a realization of τ generated in the presence of cross-
        sectional dependent errors.
     4. Repeat a large number (2000 or 5000) times and the collection of τ
        and t̄ statistics form the bootstrap distribution of these statistics
        under the null hypothesis.
  25
       For example, Wu [135] and Papell [118].
2.5. PANEL UNIT-ROOT TESTS                                                           59

    This is called a parametric bootstrap because the error terms are
drawn from the parametric normal distribution. An alternative is to do
a nonparametric bootstrap. Here, you resample the estimated residuals,
which are in a sense, the data. To do a nonparametric bootstrap, do the
following. Estimate (2.83) using the data. Denote the OLS residuals
by
                       (²̂11 , ²̂21 , . . . , ²̂N1 ) ← obs. 1
                       (²̂12 , ²̂22 , . . . , ²̂N2 ) ← obs. 2
                                     ..                 ..
                                      .                  .
                      (²̂1T , ²̂2T , . . . , ²̂NT ) ← obs. T
Now resample the residual vectors with replacement. For each obser-
vation t = 1, . . . , T, draw one of the T possible residual vectors with
probability T1 . Because the entire vector is being resampled, the cross-
sectional correlation observed in the data is preserved. Let the resam-
pled vectors be

                      (²∗11 , ²∗21 , . . . , ²∗N1 )   ← obs. 1
                      (²∗12 , ²∗22 , . . . , ²∗N2 )   ← obs. 2
                                    ..                   ..
                                     .                    .
                      (²∗1T , ²∗2T , . . . , ²∗NT ) ← obs. T

and use these resampled residuals to build up values of ∆qit recursively
using (2.83) with µ̂i and φ̂ij , and run the Levin-Lin test on these ob-
servations but do not subtract oﬀ the cross-sectional mean, and do not
make the τ ∗ adjustments. This gives a realization of τ . Now repeat a
large number of times to get the nonparametric bootstrap distribution
of τ .

The Im, Pesaran and Shin Test
Im, Pesaran and Shin suggest a very simple panel unit root test. They
begin with the ADF representation (2.72) for individual i (reproduced
here for convenience)                                                 (eq. 2.84)(35)
                                                      ki
                                                      X
             ∆q̃it = αi + δi t + βi q̃it−1 +                φij ∆q̃it−j + ²it ,   (2.84)
                                                      j=1
        60        CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

        where E(²it ²js ) = 0, i 6= j for all t, s. A common time eﬀect may be
                                                     P
(36)⇒   removed in which case q̃it = qit − (1/N) N      j=1 qjt is the deviation from
        the cross-sectional average as the basic unit of analysis.
            Let τi be the studentized coeﬃcient from the ith ADF regression.
        Since the ²it are assumed to be independent across individuals, the τi are
                                                                               P
        also independent, and by the central limit theorem, τ NT = N1 N          i=1 τi
(37)⇒   converges to the standard normal distribution Þrst as T → ∞ then as
        N → ∞. That is
                            √
                              N [τ̄NT − E(τit |βi = 0)] D
                                q                       → N(0, 1),              (2.85)
                                   Var(τit |β = 0)

        as T → ∞, N → ∞. IPS report selected critical values for τ̄N T with
        the conditional mean and variance adjustments of the distribution. A
        selected set of these critical values are reproduced in Table 2.5. An
        alternative to relying on the asymptotic distribution is to do a residual
        bootstrap of the τ NT statistic. As before, when doing the bootstrap,
        do not subtract oﬀ the cross-sectional mean.
            The Im, Pesaran and Shin test as well as the Maddala—Wu test (dis-
        cussed below) relax the homogeneity restrictions under the alternative
        hypothesis. Here, the null hypothesis
                               H0 : β1 = · · · = βN = β = 0,
        is tested against the alternative
                           HA : β1 < 0 ∪ β2 < 0 · · · ∪ ββN < 0.
        The alternative hypothesis is not H0 , which is less restrictive than the
        Levin—Lin alternative hypothesis.

        The Maddala and Wu Test
        Maddala and Wu [99] point out that the IPS strategy of combining
        independent tests to construct a joint test is an idea suggested by R.A.
        Fisher [53]. Maddala and Wu follow Fisher’s suggestion and propose
        following test. Let the p-value of τi from the augmented   Dickey—Fuller
                                                           R τi
        test for a unit root be pi = Prob(τ < τi ) = −∞ f (x)dx be the p-
        value of τi from the ADF test on (2.72), where f (τ ) is the probability
2.5. PANEL UNIT-ROOT TESTS                                                       61


  Table 2.5: Selected Exact Critical Values for the IPS τ̄NT Statistic

                          Constant                            Trend
                 T    20    40     100     20                  40     100
                              A. 5 percent
              5      -2.19 -2.16 -2.15 -2.82                  -2.77   -2.75
              10     -1.99 -1.98 -1.97 -2.63                  -2.60   -2.58
            N 15     -1.91 -1.90 -1.89 -2.55                  -2.52   -2.51
              20     -1.86 -1.85 -1.84 -2.49                  -2.48   -2.46
              25     -1.82 -1.81 -1.81 -2.46                  -2.44   -2.43
                             B. 10 percent
              5      -2.04 -2.02 -2.01 -2.67                  -2.63   -2.62
              10     -1.89 -1.88 -1.88 -2.52                  -2.50   -2.49
            N 15     -1.82 -1.81 -1.81 -2.46                  -2.44   -2.44
              20     -1.78 -1.78 -1.77 -2.42                  -2.41   -2.40
              25     -1.75 -1.75 -1.75 -2.39                  -2.38   -2.38

Source: Im, Pesaran and Shin [78].


density function of τ . Solve for g(p), the density of pi by the method of
transformations, g(pi ) = f (τi )|J| where J = dτi /dpi is the Jacobian of
the transformation, and |J| is its absolute value. Since dpi /dτi = f(τi ),
the Jacobian is 1/f(τi ) and g(pi ) = 1 for 0 ≤ pi ≤ 1. That is, pi is
uniformly distributed on the interval [0, 1] (pi ∼ U [0, 1]).
    Next, let yi = −2 ln(pi ). Again, using the method of transforma-
tions, the probability density function of yi is h(yi ) = g(pi )|dpi /dyi |.
But g(pi ) = 1 and |dpi /dyi | = pi /2 = (1/2)e−yi /2 , so it follows that
h(yi ) = (1/2)e−yi /2 which is the chi-square distribution with 2 degrees
of freedom. Under cross-sectional independence of the error terms ²it ,
the joint test statistic also has a chi-square distribution
                                     N
                                     X
                          λ = −2           ln(pi ) ∼ χ22N .                   (2.86)
                                     i=1

   The asymptotic distribution of the IPS test statistic was established
by sequential T → ∞, N → ∞ asymptotics, which some econometri-
62         CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

cians view as being too restrictive.26 Levin and Lin derive the asymp-
totic distribution of their test statistic by allowing both N and T simul-
taneously to go to inÞnity. A remarkable feature of the Maddala—Wu—
Fisher test is that it avoids issues of sequential or joint N, T asymp-
totics. (2.86) gives the exact distribution of the test statistic.
    The IPS test is based on the sum of τi , whereas the Maddala—Wu
test is based on the sum of the log p-values of τi . Asymptotically, the
two tests should be equivalent, but can diﬀer in Þnite samples. Another
advantage of Maddala—Wu is that the test statistic distribution does not
depend on nuisance parameters, as does IPS and LL. The disadvantage
is that p-values need to be calculated numerically.

Potential Pitfalls of Panel Unit-Root Tests
Panel unit-root tests need to be applied with care. One potential pitfall
with panel tests is that the rejection of the null hypothesis does not
mean that all series are stationary. It is possible that out of N time-
series, only 1 is stationary and (N-1) are unit root processes. This is
an example of a mixed panel. Whether we want the rejection of the
unit root process to be driven by a single outlier or not depends on the
purpose the researcher uses the test.27
    A second potential pitfall is that cross-sectional independence is
a regularity condition for these tests. Transforming the observations
by subtracting oﬀ the cross-sectional means will leave some residual
dependence across individuals if common time eﬀects are generated by
a multi-factor process. This residual cross-sectional dependence can
potentially generate errors in inference.
    A third potential pitfall concerns potential small sample size dis-
tortion of the tests. While most of the attention has been aimed at
  26
      That is, they deduce the limiting behavior of the test statistic Þrst by letting
T → ∞ holding N Þxed, then letting N → ∞ and invoking the central limit
theorem.
   27
      Bowman [17] shows that both the LL and IPS tests have low power against
outlier driven alternatives. He proposes a test that has maximal power. Taylor and
Sarno [131] propose a test based on Johansen’s [80] maximum likelihood approach
that can test for the number of unit-root series in the panel. Computational con-
siderations, however, generally limit the number of time-series that can be analyzed
to 5 or less.
2.6. COINTEGRATION                                                               63

improving the power of unit root tests, Schwert [126] shows that there
are regions of the parameter space under which the size of the aug-
mented Dickey—Fuller test is wrong in small samples. Since the panel
tests are based on the augmented Dickey—Fuller test in some way or
another, it is probably the case that this size distortion will get im-
pounded into the panel test. To the extent that size distortion is an
issue, however, it is not a problem that is speciÞc to the panel tests.


2.6       Cointegration
The unit root processes {qt } and {ft } will be cointegrated if there ex-
ists a linear combination of the two time-series that is stationary. To
understand the implications of cointegration, let’s Þrst look at what
happens when the observations are not cointegrated.

No cointegration. Let ξqt = ξqt−1 + uqt and ξf t = ξf t−1 + uf t be ⇐(38)
                                                  iid
two independent random walk processes where uqt ∼ N(0, σq2 ) and ⇐(39)
    iid
uf t ∼ N(0, σf2 ). Let z t = (zqt , zf t )0 follow a stationary bivariate pro- ⇐(40)
cess such as a VAR. The exact process for z t doesn’t need to explicitly
modeled at this point. Now consider the two unit root series built up
from these components
                               qt = ξqt + zqt ,
                               ft = ξf t + zf t .                             (2.87)
Since qt and ft are driven by independent random walks, they will drift
arbitrarily far apart from each other over time. If you try to Þnd a
value of β to form a stationary linear combination of qt and ft , you will
fail because
                  qt − βft = (ξqt − βξf t ) + (zqt − βzf t ).       (2.88)
For any value of β, ξqt − βξf t = (ũ1 + ũ2 + · · · ũt ) where ũt ≡ uqt − βuf t
so the linear combination is itself a random walk. qt and ft clearly do
not share a long run relationship. There may, however, be short-run
interactions between their Þrst diﬀerences
                     Ã         !       Ã           !       Ã          !
                         ∆qt               ∆zqt                ²qt
                                   =                   +                  .   (2.89)
                         ∆ft               ∆zf t               ²f t
64          CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

By analogy to the derivation of (2.58), if z t follows a Þrst-order VAR,
you can show that (2.89) follows a vector ARMA process. Thus, when
both {qt } and {ft } are unit root processes but are driven by independent
random walks, they can be Þrst diﬀerenced to induce stationarity and
their Þrst diﬀerences modeled as a stationary vector process.

Cointegration. {qt } and {ft } will be cointegrated if they are driven by
                                                iid
the same random walk, ξt = ξt−1 + ²t , where ²t ∼ N(0, σ 2 ). For example
if

                                 qt = ξt + zqt ,
                                 ft = φ(ξt + zf t ),                               (2.90)

and you look for a value of β that renders

                      qt − βft = (1 − βφ)ξt + zqt − βφzf t ,                       (2.91)

stationary, you will succeed by choosing β = φ1 since qt − fφt = zqt − zf t
is the diﬀerence between two stationary processes so it will itself be
stationary. {qt } and {ft } share a long-run relationship. We say that
they are cointegrated with cointegrating vector (1, − φ1 ). Since random
walks are sometimes referred to as stochastic trend processes, when
two series are cointegrated we sometimes say that they share a common
trend.28

The Vector Error-Correction Representation
Recall that for the univariate AR(2) process, you can rewrite qt =
ρ1 qt−1 + ρ2 qt−2 + ut in augmented Dickey—Fuller test equation form as

                   ∆qt = (ρ1 + ρ2 − 1)qt−1 − ρ2 ∆qt−1 + ut ,                       (2.92)
           iid
where ut ∼ N(0, σu2 ). If qt is a unit root process, then (ρ1 + ρ2 − 1) = 0,
and (ρ1 +ρ2 −1)−1 clearly doesn’t exist. There is in a sense a singularity
  28
    Suppose you are analyzing three variables (q1t , q2t , q3t ). If they are cointegrated,
there can be at most 2 independent random walks driving the series. If there are 2
random walks, there can be only 1 cointegrating vector. If there is only 1 random
walk, there can be as many as 2 cointegrating vectors.
2.6. COINTEGRATION                                                                                                        65

in qt−1 because ∆qt is stationary and this can be true only if qt−1 drops
out from the right side of (2.92).
    By analogy, suppose that in the bivariate case the vector (qt , ft ) is
generated according to
 "           #       "                      #"          #       "              #"          #   "           #
        qt               a11 a12                 qt−1   b   b                       qt−2   uqt
                 =                                    + 11 12                            +                     , (2.93)
        ft               a21 a22                 ft−1   b21 b22                     ft−2   uf t
                                  iid
where (uqt , uf t )0 ∼ N (0, Σu ). Rewrite (2.93) as the vector analog of the
augmented Dickey—Fuller test equation
    "            #        "                   #"            #       "               #"             #       "         #
        ∆qt                   r11 r12                qt−1               b11 b12          ∆qt−1                 uqt
                     =                                          −                                      +             ,
        ∆ft                   r21 r22                ft−1               b21 b22          ∆ft−1                 uf t
                                                                                                                 (2.94)
where
                 "                      #        "                                             #
                         r11 r12                     a11 + b11 − 1   a12 + b12
                                            =                                                      ≡ R.
                         r21 r22                       a21 + b21   a22 + b22 − 1
If {qt } and {ft } are unit root processes, their Þrst diﬀerences are station-
ary. This means the terms on the right hand side of (2.94) are station-
ary. Linear combinations of levels of the variables appear in the system.
r11 qt−1 + r12 ft−1 appears in the equation for ∆qt and r21 qt−1 + r22 ft−1
appears in the equation for ∆ft .
     If {qt } and {ft } do not cointegrate, there are no values of the rij
coeﬃcients that can be found to form stationary linear combinations
of qt and ft . The level terms must drop out. R is the null matrix, and
(∆qt , ∆ft ) follows a vector autoregression.
     If {qt } and {ft } do cointegrate, then there is a unique combination
of the two variables that is stationary. The levels enter on the right side
but do so in the same combination in both equations. This means that
the columns of R are linearly dependent and the R, which is singular,
can be written as                 "              #
                                    r11 −βr11
                             R=                    .
                                    r21 −βr21
(2.94) can now be written as
"            #                "         #                               "             #"               #       "          #
    ∆qt                           r11                                       b11 b12        ∆qt−1                   uqt
                     =                      (qt−1 − βft−1 ) −                                              +
    ∆ft                           r21                                       b21 b22        ∆ft−1                   uf t
                66          CHAPTER 2. SOME USEFUL TIME-SERIES METHODS
                                "         #            "             #"           #       "          #
                                    r11                    b11 b12        ∆qt−1               uqt
                            =                 zt−1 −                                  +                  ,        (2.95)
                                    r21                    b21 b22        ∆ft−1               uf t

(41)(eq.2.95)    where zt−1 ≡ qt−1 −βft−1 is called the error-correction term, and (2.95)
(42)⇒           is the vector error correction representation (VECM). A VAR in Þrst
                diﬀerences would be misspeciÞed because it omits the error correction
                term.
                    To express the dynamics governing zt , multiply the equation for ∆ft
(43)(eq.2.96)   by β and subtract the result from the equation for ∆qt to get

                             zt = (1 + r11 − βr21 )zt−1 − (b11 + βb21 )∆qt−1
                                  −(b12 + βb22 )∆ft−1 + uqt − βuf t .                                             (2.96)

(44)(eq.2.97)   The entire system is then given by
                                                                                                                      
                  ∆qt            b11            b12             r11          ∆qt−1
                                                                              
                 ∆ft  =       b21            b22             r12        ∆ft−1 
                   zt       −(b11 + βb21 ) −(b12 + βb22 ) 1 + r11 − βr21      zt−1
                                                          
                                       uqt
                                              
                                +     uf t    .                                                                    (2.97)
                                   uqt − βuf t

                (∆qt , ∆ft , zt )0 is a stationary vector, and (2.97) looks like a VAR(1) in
                these three variables, except that the columns of the coeﬃcient matrix
                are linearly dependent. In many applications, the cointegration vector
                (1, −β) is given a priori by economic theory and does not need to be
                estimated. In these situations, the linear dependence of the VAR (2.97)
                tells you that all of the information contained in the VECM is preserved
                in a bivariate VAR formed with zt and either ∆qt or ∆ft .
                    Suppose you follow this strategy. To get the VAR for (∆qt , zt ),
(45)⇒           substitute ft−1 = (qt−1 − zt−1 )/β into the equation for ∆qt to get

                                ∆qt = b11 ∆qt−1 + b12 ∆ft−1 + r11 zt−1 + uqt
                                    = a11 ∆qt−1 + a12 zt−1 + a13 zt−2 + uqt ,

(46)⇒           where a11 = b11 + bβ12 , a12 = r11 − bβ12 , and a13 = bβ12 . Similarly, substitute
                ft−1 out of the equation for zt to get

                             zt = a21 ∆qt−1 + a22 zt−1 + a23 zt−2 + (uqt − βuf t ),
        2.7. FILTERING                                                                                 67
                            ³                                 ´
(47)⇒   where a21 = − b11 + βb21 + bβ12 + b22 , a22 = 1 + r11 − βr21 + b22 + bβ12 ,
                        ³            ´
(48)⇒   and a23 = − b22 + bβ12 . Together you have the VAR(2)
              "         #       "              #"                 #       "           #"           #
                  ∆qt               a11 a12           ∆qt−1                   0 a13        ∆qt−2
                            =                                         +
                  zt                a21 a22           zt−1                    0 a23        zt−2
                                    "                 #
                                            uqt
                                +                         .                                        (2.98)
                                        uqt − βuf t

        (2.98) is easier to estimate than the VECM and the standard forecasting
        formulae for VARs can be employed without modiÞcation.


        2.7        Filtering
        Many international macroeconomic time-series contain a trend. The
        trend may be deterministic or stochastic (i.e., a unit root process).
        Real business cycle (RBC) theories are designed to study the cyclical
        features of the data, not the trends. So in RBC research, the data that
        is being studied is usually passed through a linear Þlter to remove the
        low-frequency or trend component of the data. To understand what
        Þltering does to the data you need to have some understanding of the
        frequency or spectral representation of time series where we think of
        the observations as being built up from individual subprocesses that
        exhibit cycles over diﬀerent frequencies.
            Linear Þlters take a possibly two-sided moving average of an original
        set of observations qt to create a new series q̃t
                                                    ∞
                                                    X
                                            q̃t =             aj qt−j ,                            (2.99)
                                                    j=−∞

                                                      P
        where the weights are summable, ∞    j=−∞ |aj | < ∞. One way to assess
        how the Þlter transforms the properties of the original data is to see
        which frequency components from the original data that are allowed to
        pass through and how these frequency components are weighted—that
        is, are the particular frequency components that are allowed through
        relatively more or less important than they were in the original data.
68        CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

The Spectral Representation of a Time Series
In section 2.4, a unit-root time series was decomposed into the sum of
a random walk and a stationary AR(1) component. Here, we want to
think of the time-series observations as being built up of underlying
cyclical (cosine) functions each with diﬀerent amplitudes and exhibit-
ing cycles of diﬀerent frequencies. A key question in spectral analysis
is, which of these frequency components are relatively important in
determining the behavior of the observed time-series?
    To Þx ideas, begin with the deterministic time-series, qt = a cos(ωt),
where time is measured in years. This function exhibits a cycle every
t = 2πω
         years. By choosing values of ω between 0 and π, you can get
the process to exhibit cycles at any length that you desire. This is
illustrated in Figure 2.1 where q1t = a cos(t) exhibits a cycle every
2π = 6.28 years and q2t = a cos(πt) displays a cycle every 2 years.

         1.5


           1


         0.5


           0
               0   0.4 0.8 1.2 1.6   2   2.4 2.8 3.2 3.6   4   4.4 4.8 5.2 5.6   6
        -0.5


          -1


        -1.5



Figure 2.1: Deterministic Cycles—q1t = cos(t) (dashed) cycles every
2π = 6.28 years and q2t = cos(πt) (solid) cycles every 2 years.

    Something is clearly missing at this point and it is randomness.
We introduce uncertainty with a random phase shift. If you compare
q1t = a cos(t) to q3t = a cos(t + π/2), q3t is just q1t with a phase shift
(horizontal movement) of π2 . This phase shift is illustrated in Figure 2.2
2.7. FILTERING                                                                            69

Now let λ̃ ∼ U [0, π]29 . Imagine that we take a draw from this distribu-

          1.5


            1


          0.5


            0
                0   0.4 0.8 1.2 1.6   2   2.4 2.8 3.2 3.6   4   4.4 4.8 5.2 5.6   6
         -0.5


           -1


         -1.5



   Figure 2.2: π/2Phase shift. Solid: cos(t), Dashed: cos(t + π/2).

tion. Let the realization be λ, and form the time-series
                                  qt = a cos(ωt + λ).                                 (2.100)
Once λ is realized, qt is a deterministic function with periodicity 2π
                                                                    ω
                                                                       and
phase shift λ but qt is a random function ex ante. We will need the
following two basic trigonometric relations.

Two useful trigonometric relations. Let b and c be constants, and i be
the imaginary number where i2 = −1. Then
                    cos(b + c) = cos(b) cos(c) − sin(b) sin(c)                        (2.101)
                           eib = cos(b) + i sin(b)                                    (2.102)


(2.102) is known as de Moivre’s theorem. You can rearrange it to get
                      (eib + e−ib )                         (eib − e−ib )
        cos(b) =                    , and       sin(b) =                  .           (2.103)
                            2                                    2i
  29
   You only need to worry about the interval [0, π] because the cosine function is
symmetric about zero—cos(x) = cos(−x) for 0 ≤ x ≤ π
70             CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

     Now let b = ωt and c = λ and use (2.101) to represent (2.100) as

                       qt = a cos(ωt + λ)
                          = cos(ωt)[a cos(λ)] − sin(ωt)[a sin(λ)].

Next, build the time-series qt = q1t + q2t from the two sub-series q1t and
q2t , where for j = 1, 2

                   qjt = cos(ωj t)[aj cos(λj )] − sin(ωj t)[aj sin(λj )],

and ω1 < ω2 . The result is a periodic function which is displayed on
the left side of Figure 2.3.

           1                                          30
         0.8
                                                      20
         0.6
         0.4
                                                      10
         0.2
           0                                            0
        -0.2
                                                      -10
        -0.4
        -0.6
                                                      -20
        -0.8
          -1                                          -30
               1   6    11   16   21   26   31   36         1   6   11   16   21   26   31   36


                                                                              P
Figure 2.3: For 0 ≤ ω1 < · · · < ωN ≤ π, qt = N          j=1 qjt , where qjt =
cos(ωj t)[aj cos(λj )] − sin(ωj t)[aj sin(λj )]. Left panel: N = 2. Right
panel: N = 1000

    The composite process with N = 2 is clearly deterministic but if
you build up the analogous series with N = 100 of these components,
as shown in the right panel of Figure 2.3, the series begins to look like
a random process. It turns out that any stationary random process can
be arbitrarily well approximated in this fashion letting N → ∞.
2.7. FILTERING                                                                         71

   To summarize at this point, for suﬃciently large number N of these
underlying periodic components, we can represent a time-series qt as
                                N
                                X
                        qt =          cos(ωj t)uj − sin(ωj t)vj ,                  (2.104)
                                j=1


where uj = aj cos(λj ) and vj = aj sin(λj ), E(u2i ) = σi2 , E(ui uj ) = 0,
i 6= j, E(vi2 ) = σi2 , E(vi vj ) = 0, i 6= j.
    Now suppose that E(ui vj ) = 0 for all i, j and let N → ∞.30 You
are carving the interval into successively more subintervals and are
cramming more ωj into the interval [0, π]. Since each uj and vj is
associated with an ωj , in the limit, write u(ω) and v(ω) as functions
of ω. For future reference, notice that because cos(−a) = cos(a), we
have u(−ω) = u(ω) whereas because sin(−a) = − sin(a), you have
v(−ω) = −v(ω). The limit of sums of the areas in these intervals is the
integral                  Z π
                    qt =        cos(ωt)du(ω) − sin(ωt)dv(ω).       (2.105)
                            0

       Using (2.103), (2.105) can be represented as
                 Z π iωt                        Z π iωt
                    e + e−iωt                      e − e−iωt
          qt =                    du(ω) −                      dv(ω) .             (2.106)
                 0      2                       |0      2i{z               }
                                                         (a)


Let dz(ω) = 12 [du(ω) + idv(ω)]. The second integral labeled (a) can be
simpliÞed as                                                            ⇐(49)
Z π iωt                          Z π iωt     Ã               !
   e − e−iωt                        e − e−iωt 2dz(ω) − du(ω)
                     dv(ω) =
 0         2i                         0        2i                  i
                                 Z π −iωt
                                    e     − eiωt
                            =                         (2dz(ω) − du(ω))
                                      0        2
                                 Z π                               Z π iωt
                                                                      e − e−iωt
                            =             (e−iωt − eiωt )dz(ω) +                    du(ω).
                                      0                                0       2
Substitute this last result back into (2.106) and cancel terms to get                        ⇐(50)
  30
   This is in fact not true because E(ui vi ) 6= 0, but as we let N → ∞, the
importance of these terms become negligible.
        72        CHAPTER 2. SOME USEFUL TIME-SERIES METHODS
                      Z π                        Z π                    Z π
               qt =           e−iωt du(ω) +              eiωt dz(ω) −            e−iωt dz(ω) .    (2.107)
                          0                          0                      0
                      |         {z           }   |         {z    }      |           {z        }
                                (a)                       (b)                       (c)


        Since
        R π −iωt
                u(−ω) = u(ω),
                           R 0 iωt
                                   the term labeled (a) in (2.107) can be written as
            e
        R0π −iωt
                 du(ω)   =   −π  e   du(ω). The third  term labeled (c)  in (2.107) is
                            1 R π −iωt          1 Rπ  −iωt          1 R0
         0 e     dz(ω) = 2 0 e         du(ω) + 2 0 ie      dv(ω) = 2 −π eiωt du(ω) −
          R
        1 0
        2 −π
               ieiωt dv(ω). Substituting these results back into (2.107) and can-
                                            R 0 iωt                      R
(51)⇒   celing terms you get, qt = 12 −π        e [du(ω) + idv(ω)] + 0π eiωt dz(ω)
            R π iωt
        = −π e dz(ω). This is known as the Cramer Representation of qt ,
        which we restate as
                                      N
                                      X                              Z π
                  qt = lim                  aj cos(ωj t + λj ) =                eiωt dz(ω).       (2.108)
                              N→∞                                     −π
                                      j=1


        The point of all this is that any time-series can be thought of as be-
        ing built up from a set of underlying subprocesses whose individual
        frequency components exhibit cycles of varying frequency. The other
        side of this argument is that you can, in principle, take any time-series
        qt and Þgure out what fraction of its variance is generated from those
        subprocesses that cycle within a given frequency range. The business
        cycle frequency, which lies between 6 and 32 quarters is of key interest
        to, of all people, business cycle researchers.
            Notice that the process dz(ω) is built up from independent incre-
        ments. For coincident increments, you can deÞne the function s(ω)dω
        to be                              (
                                             s(ω)dω      λ=ω
                        E[dz(ω)dz(λ)] =                          ,       (2.109)
                                                0      otherwise

        where an overbar denotes the complex conjugate.31                   Since
         iωt iωt        2          2
        e e       = cos (ωt) + sin (ωt) = 1 at frequency ω, it follows that
            iωt iωt
        E[e e dz(ω)dz(ω)] = s(ω)dω. That is, s(ω)dω is the variance of
        the ω−frequency component of qt , and is called the spectral density
        function of qt . Since by (2.108), qt is built up from frequency compo-
        nents ranging from [−π, π], the total variance of qt must be the integral
          31
            If a and b are real numbers and z = a + bi is a complex number, the complex
        conjugate of z is z̄ = a − bi. The product z z̄ = a2 + b2 is real.
2.7. FILTERING                                                                  73

of s(ω). That is32
                                 Z π                   Z π
                 E(qt2 )   = E[           iωt
                                          e dz(ω)             eiλt dz(λ)]
                                  −π                     −π
                                 Z π Z π
                           = E[                 eiωt eiλt dz(ω)dz(λ)]
                                     −π   −π
                               Z π
                           =         E[dz(ω)dz(λ)]
                                −π
                               Z π
                           =         s(ω)dω.                                (2.110)
                                −π


The spectral density and autocovariance generating functions. The au-
tocovariance generating function for a time series qt is deÞned to be
                                           ∞
                                           X
                               g(z) =              γj z j ,
                                           j=−∞

where γj = E(qt qt−j ) is the j-th autocovariance of qt . If we let z = e−iω ,
then
           1 Zπ                        1 X ∞     Z π
                  g(e−iω )eiωk dω =           γj     eiω(k−j) dω.
          2π −π                       2π j=−∞     −π

Let
Rπ
    a = k−j. Then    Rπ
                       eiωa = cos(ωa)+i sin(ωa) and the integral becomes,
                                                     π                  π
 −π cos(ωa)dω +i −π sin(ωa)dω = (1/a) sin(aω)|−π −(i/a) cos(aω)|−π .
The second term is 0 because cos(−aπ) = cos(aπ). The Þrst term
is 0 too because the sine of any nonzero integer multiple of π is 0
and a is an integer. Therefore, the only value         of a that matters is
                                              1 Rπ
a = k − j = 0, which implies that γRk = 2π −π g(e−iω )eiωk dω. Setting
                                     1  π      −iω
k = 0, youR have γ0 = Var(qt ) = 2π     −π g(e     )dω, but you know that ⇐(52)
               π
Var(qt ) = −π s(ω)dω, so the spectral density function is proportional
to the autocovariance generating function with z = e−iω . Notice also,
                                          P
that when you set ω = 0, then s(0) = ∞      j=−∞ γj . The spectral density
function of qt at frequency 0 is the same thing as the long-run variance
of qt . It follows that
                            Z π              Z
                                           1 π
                 Var(qt ) =     s(ω)dω =          g(e−iω )dω,      (2.111)
                             −π           2π −π
                 P
 where g(z) = ∞              j
                    j=−∞ γj z .                                             ⇐(53)
  32
   We obtain the last equality because dz(ω) is a process with independent incre-
ments so unless λ = ω, Edz(ω)dz(λ) = 0.
        74          CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

        Linear Filters
        You can see how a Þlter changes the character of a time series by com-
        paring the spectral density function of the original observations with
        that of the Þltered data.
            Let the original data qt have the Wold moving-average representa-
                                         P
        tion, qt = b(L)²t where b(L) = ∞           j
                                           j=0 bj L and ²t ∼ iid with E(²t ) = 0
                         2
        and Var(²t ) = σ² . The k-th autocovariance is

                 γk = E(qt qt−k ) = E[b(L)²t b(L)²t−k ]
                                                                                                  
                                     ∞
                                     X               ∞
                                                     X                                  ∞
                                                                                        X
                      = E                 bj ²t−j         bs ²t−s−k  = σ²2                 bj bj−k  ,
                                     j=0             s=0                                j=0


        and the autocovariance generating function for qt is
                                                                          
                     ∞
                     X                       ∞
                                             X               ∞
                                                             X
         g(z) =             γk z k =                 σ²2          bj bj−k  z k
                     k=−∞                  k=−∞              j=0
                                                    
                     ∞
                     X               ∞
                                     X                                                ∞
                                                                                    ∞ X
                                                                                    X
                =           σ 2           bj bj−k  z k z j z −j = σ²2                        bj z j bj−k z −(j−k)
                                 ²
                     k=−∞            j=0                                       k=−∞ j=0
                                                                  
                           ∞
                           X             ∞
                                         X
                = σ²2          bj z j         bj−k z −(j−k)  = σ²2 b(z)b(z −1 ).
                         j=0             k=j

                                                                               iω
(54)⇒    But from (2.111), you know that s(ω) = g(e2π ) . To summarize, these
        results, the spectral density of qt can be represented as
                                            1             1 2 −iω
                           s(ω) =             g(e−iω ) =    σ² b(e )b(eiω ).                                (2.112)
                                           2π            2π
        Let the transformed (Þltered) data be given by q̃t = a(L)qt where
                P
(55)⇒   a(L) = ∞             j
                    j=−∞ aj L . Then q̃t = a(L)qt = a(L)b(L)²t = b̃(L)²t , where
        b̃(L) = a(L)b(L). Clearly, the autocovariance generating function of
        the Þltered data is g̃(z) = σ²2 b̃(z)b̃(z −1 ) = σ²2 a(z)b(z)b(z −1 )a(z −1 ) =
        a(z)a(z −1 )g(z), and letting z = e−iω , the spectral density function of
        the Þltered data is

                                         s̃(ω) = a(e−iω )a(eiω )s(ω).                                       (2.113)
2.7. FILTERING                                                           75

The Þlter has the eﬀect of scaling the spectral density of the original
observations by a(e−iω )a(eiω ). Depending on the properties of the Þlter,
some frequencies will be magniÞed while others are downweighted.
    One way to classify Þlters is according to the frequencies that are
allowed to pass through and those that are blocked. A high pass Þlter
lets through only the high frequency components. A low pass Þlter
allows through the trend or growth frequencies. A business cycle pass
Þlter allows through frequencies ranging from 6 to 32 quarters. The
most popular Þlter used in RBC research is the Hodrick—Prescott Þlter,
which we discuss next.

The Hodrick—Prescott Filter
Hodrick and Prescott [76] assume that the original series qt is generated
by the sum of a trend component (τt ) and a cyclical (ct ) component,
qt = τt + ct . The trend is a slow-moving low-frequency component and
is in general not deterministic. The objective is to construct a Þlter
to to get rid of τt from the data. This leaves ct , which is the part of
the data to be studied. The problem is that for each observation qt ,
there are two unknowns (τt and ct ). The question is how to identify
the separate components?
    The cyclical part is just the deviation of the original series from the
long-run trend, ct = qt − τt . Suppose your identiÞcation scheme is to
minimize the variance of the cyclical part. You would end up setting
its variance to 0 which means setting τt = qt . This doesn’t help at
all—the trend is just as volatile as the original observations. It therefore
makes sense to attach a penalty for making τt too volatile. Do this by
minimizing the variance of ct subject to a given amount of prespeciÞed
‘smoothness’ in τt . Since ∆τt is like the Þrst derivative of the trend
and ∆2 τt is like the second derivative of the trend, one way to get a
smoothly evolving trend is to force the Þrst derivative of the trend to
evolve smoothly over time by limiting the size of the second derivative.
This is what Hodrick and Prescott suggest. Choose a sequence of points
{τt } to minimize
                      T
                      X                       TX
                                               −1
                            (qt − τt )2 + λ         (∆2 τt+1 )2 ,   (2.114)
                      t=1                     t=1
76            CHAPTER 2. SOME USEFUL TIME-SERIES METHODS

where λ is the penalty attached to the volatility of the trend component.
For quarterly data, researchers typically set λ = 1600.33 Noting that
∆2 τt+1 = τt+1 − 2τt + τt−1 , diﬀerentiate (2.114) with respect to τt and
re-arrange the Þrst-order conditions to get the Euler equations

      q1 − τ1      = λ[τ3 − 2τ2 + τ1 ],
      q2 − τ2      = λ[τ4 − 4τ3 + 5τ2 − 2τ1 ],
            ..       ..
             .        .
      qt − τt      = λ[τt+2 − 4τt+1 + 6τt − 4τt−1 + τt−2 ],               t = 3, . . . , T − 2
             ..       ..
              .        .
qT −1 − τT −1      = λ[−2τT + 5τT −1 − 4τT −2 + τT −3 ],
     qT − τT       = λ[τT − 2τT −1 + τT −2 ].

Let c = (c1 , . . . , cT )0 , q = (q1 , . . . , qT )0 , and τ = (τ1 , . . . , τT )0 , and write
the Euler equations in matrix form

                                    q = (λG + IT )τ ,                                (2.115)

where the T × T matrix G is given by
                                                                                                 
     1 −2     1  0 ···                           ···  0
  
   −2    5 −4   1   0 ···                       ···  0 
                                                        
   1 −4      6 −4   1   0 ···                   ···  0 
                                                        
   0     1 −4   6 −4    1   0                           
                                                        
      ..                                             .. 
           ...                ...                       
G=
  
        .                                              . 
                                                         .
   0                              0 1 −4   6 −4   1  0  
                                                        
    ..                                                  
     .                              0   1 −4  6 −4   1 
                                                        
     ..                                                 
  
      .                                 0  1 −4   5 −2 
     0 ···                             ···  0  1 −2   1

Get the trend component by τ = (λG+IT )−1 q. The cyclical component
follows by subtracting the trend from the original observations

                         c = q − τ = [IT − (λG + IT )−1 ]q.
  33
       The following derivation of the Þlter follows Pederson [121].
2.7. FILTERING                                                                     77

Properties of the Hodrick—Prescott Filter
For t = 3, . . . , T − 2, the Euler equations can be written
                                                             P
qt − τt = λu(L)τt , where u(L) = (1 − L)2 (1 − L−1 )2 = 2j=−2 uj Lj ⇐(56)
with u−2 = u2 = 1, u−1 = u1 = −4, and u0 = 6. We note for future
reference that ct = qt − τt implies that ct = λu(L)τt .
    You’ve already determined that qt = (λu(L) + 1)τt = v(L)τt where
v(L) = 1 + λu(L) = 1 + λ(1 − L)2 (1 − L−1 )2 , so it follows that
                                                 qt
                   τt = v(L)−1 qt =                             .
                                      1 + λ(1 − L)2 (1 − L−1 )2

v −1 (L) is the trend Þlter. Once you compute τt , subtract the result
from the data, qt to get ct . This is equivalent to forming ct = δ(L)qt
where
                                      λ(1 − L)2 (1 − L−1 )2
              δ(L) = 1 − v −1 (L) =                           .
                                    1 + λ(1 − L)2 (1 − L−1 )2
Since (1 − L)2 (1 − L−1 ) = L−2 (1 − L)4 , the Þlter is equivalent to Þrst ⇐(57)
applying (1 − L)4 on qt , and then applying λL−2 v −1 (L) on the result.34 ⇐(58)
This means the Hodrick-Prescott Þlter can induce stationary into the
cyclical component from a process that is I(4).
   The spectral density function of the cyclical component is sc (ω) =
δ(e )δ(eiω )sq (ω), where
   −iω


                                    λ[(1 − e−iω )(1 − eiω )]2
                     δ(e−iω ) =                                 .
                                  λ[(1 − e−iω )(1 − eiω )]2 + 1

From our trigonometric identities, (1 − e−iω )(1 − eiω ) = 2(1 − cos(ω)), it
                     4λ[1−cos(ω)]2
follows that δ(ω) = 4λ[1−cos(ω)]2 +1 . Each frequency of the original series
                                       h                    i
                                            4λ(1−cos(ω))2 2
is therefore scaled by |δ(ω)|2 =           4λ(1−cos(ω))2 +1
                                                              . This scaling factor is
plotted in Figure 2.4.




  34
       This is shown in King and Rebelo (84).
78       CHAPTER 2. SOME USEFUL TIME-SERIES METHODS




       1.2

         1

       0.8

       0.6

       0.4

       0.2

         0
                                                                                     0 .0
                                                                                            0 .4
                                                                                                   0 .7
                                                                                                          1 .1
                                                                                                                 1 .4
                                                                                                                        1 .8
                                                                                                                               2 .1
                                                                                                                                      2 .5
                                                                                                                                             2 .8
             -3 .1
                     -2 .8
                             -2 .4
                                     -2 .1
                                             -1 .7
                                                     -1 .4
                                                             -1 .0
                                                                     -0 .7
                                                                             -0 .3




                                                                             Frequency



Figure 2.4: Scale factor |δ(ω)|2 for cyclical component in the Hodrick—
Prescott Þlter.
Chapter 3

The Monetary Model

The monetary model is central to international macroeconomic analysis
and is a recurrent theme in this book. The model identiÞes a set of un-
derlying economic fundamentals that determine the nominal exchange
rate in the long run. The monetary model was originally developed as
a framework to analyze balance of payments adjustments under Þxed
exchange rates. After the breakdown of the Bretton Woods system the
model was modiÞed into a theory of nominal exchange rate determina-
tion.
   The monetary approach assumes that all prices are perfectly ßexible
and centers on conditions for stock equilibrium in the money market.
Although it is an ad hoc model, we will see in chapters 4 and 9 that
many predictions of the monetary model are implied by optimizing
models both in ßexible price and in sticky price environments. The
monetary model also forms the basis for work on target zones (chapter
10) and in the analysis of balance of payments crises (chapter 11).
    A note on notation: Throughout this chapter the level of a variable
will be denoted in upper case letters and the natural logarithm in lower
case. The only exception to this rule is that the level of the interest
rate is always denoted in lower case. Thus it is the nominal interest
rate and in logs, st is the nominal exchange rate in American terms,
pt is the price level, yt is real income. Stars are used to denote foreign
country variables.

                                   79
80                         CHAPTER 3. THE MONETARY MODEL

3.1      Purchasing-Power Parity
A key building block of the monetary model is purchasing-power parity
(PPP), which can be motivated according to the Casellian approach or
by the commodity-arbitrage view.


Cassel’s Approach
The intellectual origins of PPP began in the early 1800s with the writ-
ings of Wheatly and Ricardo. These ideas were subsequently revived
by Cassel [22]. The Casselian approach begins with the observation
that the exchange rate S is the relative price of two currencies. Since
the purchasing power of the home currency is 1/P and the purchasing
power of the foreign currency is 1/P ∗ , in equilibrium, the relative value
of the two currencies should reßect their relative purchasing powers,
S = P/P ∗ .
    What is the appropriate deÞnition of the price level? The Casselian
view suggests using the general price level. Whether the general price
level samples prices of non-traded goods or not is irrelevant. As a
result, the consumer price index (CPI) is typically used in empirical
implementations of this theory. The following passage from Cassel is
used by Frenkel [60] to motivate the use of the CPI in PPP research.

          “Some people believe that Purchasing Power Parities
      should be calculated exclusively on price indices for such
      commodities as for the subject of trade between the two
      countries. This is a misinterpretation of the theory . . . The
      whole theory of purchasing power parity essentially refers
      to the internal value of the currencies concerned, and vari-
      ations in this value can be measured only by general index
      Þgures representing as far as possible the whole mass of
      commodities marketed in the country.”

    The theory implies that the log real exchange rate q ≡ s + p∗ − p
is constant over time. However, even casual observation rejects this
prediction. Figure 3.1 displays foreign currency values of the US dollar
and PPPs relative to four industrialized countries formed from CPIs
3.1. PURCHASING-POWER PARITY                                                                                                                    81

                                  US-UK                                                                   US-Germany
 1.2                                                                      0.8
                                                                          0.7
    1
                                                                          0.6
 0.8                                                                      0.5
                                                                          0.4
 0.6
                                                                          0.3
 0.4                                                                      0.2
                                                                          0.1
 0.2                                                                         0
                                                                          -0.1
    0
                                                                          -0.2
        73   75   77   79   81    83   85   87   89   91   93   95   97
 -0.2                                                                            73   75   77   79   81     83   85    87   89   91   93   95   97



                                 US-Japan                                                            US-Switzerland
  1.4                                                                      1.2
  1.2                                                                        1
    1
                                                                           0.8
  0.8
  0.6                                                                      0.6

  0.4                                                                      0.4
  0.2
                                                                           0.2
    0
                                                                             0
 -0.2
 -0.4                                                                     -0.2
        73   75   77   79   81    83   85   87   89   91   93   95   97          73   75   77   79   81     83   85    87   89   91   93   95   97




Figure 3.1: Log nominal exchange rates (boxes) and CPI-based PPPs
(solid).


expressed in logarithms over the ßoating period. Figure 3.2 shows the
analogous series for the US and UK over a long historical period ex-
tending from 1871 to 1997. While there are protracted periods in which
the nominal exchange rate deviates from the PPP, the two series tend
to revert towards each other over time.
   As a result, international macroeconomists view Casselian PPP as
a theory of the long-run determination of the exchange rate in which
the PPP (p − p∗ ) is a long-run attractor for the nominal exchange rate.
82                              CHAPTER 3. THE MONETARY MODEL

       60

       40

       20

        0

      -20

      -40

      -60        Nominal Exchange Rate (solid)
                 PPPs from CPIs (boxes)
      -80

     -100

     -120
            1871 1882 1893   1904 1915 1926   1937 1948 1959   1970 1981 1992



Figure 3.2: US—UK log nominal exchange rates and CPI-based PPPs
multiplied by 100. 1871-1997.

The Commodity-Arbitrage Approach
The commodity-arbitrage view of PPP, articulated by Samuelson [124],
simply holds that the law-of-one price holds for all internationally traded
goods. Thus if the law-of-one price holds for the goods individually, it
will hold for the appropriate price index as well. Here, the appropriate
price index should cover only those goods that are traded internation-
ally. It can be argued that the producer price index (PPI) is a bet-
ter choice for studying PPP since it is more heavily weighted towards
traded goods than the CPI which includes items such as housing ser-
vices which do not trade internationally. We will consider empirical
analyses on PPP in chapter 7.
    PPP is clearly violated in the short run. Casual observation of
Figures 3.1 and 3.2 suggest however that PPP may hold in the long
run. There exists econometric evidence to support long-run PPP, but
we will defer discussion of these issues until chapter 7.
    In spite of the obvious short-run violations, PPP is one of the build-
ing blocks in the monetary model and as we will see in the Lucas model
3.2. THE MONETARY MODEL OF THE BALANCE OF PAYMENTS83

(chapter 4) and in the Redux model (chapter 9) as well. Why is that? ⇐(60)
One reason frequently given is that we don’t have a good theory for why
PPP doesn’t hold so there is no obvious alternative way to provide in-
ternational price level linkages. A second and perhaps more convincing
reason is that all theories involve abstractions that are false at some
level and as Friedman [64] argues, we should judge a theory not by the
realism of its assumptions but by the quality of its predictions.


3.2       The Monetary Model of the Balance
          of Payments
The Frenkel and Johnson [62] collection develops the monetary ap-
proach to the balance of payments under Þxed exchange rates. To
illustrate the main idea, consider a small open economy that maintains
a perfectly credible Þxed exchange rate s̄.1 it is the domestic nomi-
nal interest rate, Bt is the monetary base, Rt is the stock of foreign
exchange reserves held by the central bank, Dt is domestic credit ex-
tended by the central bank. In logarithms, mt is the money stock,
yt is national income, and pt is the price level. The money supply is
Mt = µBt = µ(Rt +Dt ) where µ is the money multiplier. A logarithmic
expansion of the money supply and its components about their mean
values allows us to write
                             mt = θrt + (1 − θ)dt                           (3.1)
where θ = E(Rt )/E(Bt ), rt = ln(Rt ), and dt = ln(Dt ).2
    A transactions motive gives rise to the demand for money in which
log real money demand mdt − pt depends positively on yt and negatively
on the opportunity cost of holding money it
                          mdt − pt = φyt − λit + ²t .                       (3.2)
   1
    A small open economy takes world prices and world interest rates as given.
   2
    A       Þrst-order     expansion        about     mean       values      gives
Mt − E(Mt ) = µ[Rt − E(Rt )] + µ[Dt − E(Dt )]. But µ = E(Mt )/E(Bt ) where
Bt = Rt + Dt is the monetary base. Now divide both sides by E(Mt ) to get
[Mt − E(Mt )]/E(Mt ) = θ[Rt − E(Rt )]/E(Rt ) +(1 − θ)[Dt − E(Dt )]/E(Dt ). Noting
that for a random variable Xt , [Xt − E(Xt )]/E(Xt ) ' ln(Xt ) − ln(E(Xt )), apart
from an arbitrary constant, we get (3.1) in the text.
84                         CHAPTER 3. THE MONETARY MODEL

0 < φ < 1 is the income elasticity of money demand, 0 < λ is the
                                                     iid
interest semi-elasticity of money demand, and ²t ∼ (0, σ²2 ).
    Assume that purchasing-power parity (PPP) and uncovered interest
parity (UIP) hold. Since the exchange rate is Þxed, PPP implies that
the price level pt = s̄ + p∗t is determined by the exogenous foreign price
level. Because the Þx is perfectly credible, market participants expect
no change in the exchange rate and UIP implies that the interest rate
it = i∗t is given by the exogenous foreign interest rate. Assume that the
money market is continuously in equilibrium by equating mdt in (3.2)
to mt in (3.1) and rearranging to get

               θrt = s̄ + p∗t + φyt − λi∗t − (1 − θ)dt + ²t .        (3.3)

(3.3) embodies the central insights of the monetary approach to the
balance of payments. If the home country experiences any one or a
combination of the following: a high rate of income growth, declining
interest rates, or rising prices, the demand for nominal money bal-
ances will grow. If money demand growth is not satisÞed by an ac-
commodating increase in domestic credit dt , the public will obtain the
additional money by running a balance of payments surplus and accu-
mulating international reserves. If, on the other hand, the central bank
engages in excessive domestic credit expansion that exceeds money de-
mand growth, the public will eliminate the excess supply of money by
running a balance of payments deÞcit.
    We will meet this model again in chapters 10 and 11 in the study of
target zones and balance of payments crises. In the remainder of this
chapter, we develop the model as a theory of exchange rate determina-
tion in a ßexible exchange rate environment.


3.3      The Monetary Model under Flexible
         Exchange Rates
The monetary model of exchange rate determination consists of a pair
of stable money demand functions, continuous stock equilibrium in the
money market, uncovered interest parity, and purchasing-power parity.
3.3. THE MONETARY MODEL UNDER FLEXIBLE EXCHANGE RATES85

Under ßexible exchange rates, the money stock is exogenous. Equilib-
rium in the domestic and foreign money markets are given by

                           mt − pt = φyt − λit ,                  (3.4)
                           m∗t − p∗t = φyt∗ − λi∗t ,              (3.5)

where 0 < φ < 1 is the income elasticity of money demand, and λ > 0
is the interest rate semi-elasticity of money demand. Money demand
parameters are identical across countries.
    International capital market equilibrium is given by uncovered in-
terest parity
                          it − i∗t = Et st+1 − st ,              (3.6)
where Et st+1 ≡ E(st+1 |It ) is the expectation of the exchange rate at
date t+1 conditioned on all public information It , available to economic ⇐(61)
agents at date t.
   Price levels and the exchange rate are related through purchasing-
power parity
                               st = pt − p∗t .                       (3.7)
   To simplify the notation, call

                      ft ≡ (mt − m∗t ) − φ(yt − yt∗ )

the economic fundamentals. Now substitute (3.4), (3.5), and (3.6) into
(3.7) to get
                     st = ft + λ(Et st+1 − st ),                 (3.8)
and solving for st gives

                             st = γft + ψEt st+1 ,                (3.9)

where

                           γ ≡ 1/(1 + λ),
                           ψ ≡ λγ = λ/(1 + λ).

(3.9) is the basic Þrst-order stochastic diﬀerence equation of the mon-
etary model and serves the same function as an ‘Euler equation’ in
optimizing models. It says that expectations of future values of the
86                             CHAPTER 3. THE MONETARY MODEL

exchange rate are embodied in the current exchange rate. High rela-
tive money growth at home leads to a weakening of the home currency
while high relative income growth leads to a strengthening of the home
currency.
    Next, advance time by one period in (3.9) to get
st+1 = γft+1 +ψEt+1 st+2 . Take expectations conditional on time t infor-
mation and use the law of iterated expectations to get
Et st+1 = γEt ft+1 + ψEt st+2 and substitute back into (3.9). Now do
this again for st+2 , st+3 , . . . , st+k , and you get
                         k
                         X
                st = γ         (ψ)j Et ft+j + (ψ)k+1 Et st+k+1 .   (3.10)
                         j=0

Eventually, you’ll want to drive k → ∞ but in doing so you need to
specify the behavior the term (ψ)k Et st+k .

The fundamentals (no bubbles) solution. Since ψ < 1, you obtain the
unique fundamentals (no bubbles) solution by restricting the rate at
which the exchange rate grows by imposing the transversality condition

                               lim (ψ)k Et st+k = 0,               (3.11)
                           k→∞

which limits the rate at which the exchange rate can grow asymptoti-
cally. If the transversality condition holds, let k → ∞ in (3.10) to get
the present-value formula
                                      ∞
                                      X
                           st = γ         (ψ)j Et ft+j             (3.12)
                                      j=0

The exchange rate is the discounted present value of expected future
values of the fundamentals. In Þnance, the present value model is a
popular theory of asset pricing. There, s is the stock price and f is the
Þrm’s dividends. Since the exchange rate is given by the same basic
formula as stock prices, the monetary approach is sometimes referred
to as the ‘asset’ approach to the exchange rate. According to this
approach, we should expect the exchange rate to behave just like the
prices of other assets such as stocks and bonds. From this perspective
it will come as no surprise that the exchange rate more volatile than
3.3. THE MONETARY MODEL UNDER FLEXIBLE EXCHANGE RATES87

the fundamentals, just as stock prices are much more volatile than
dividends. Before exploring further the relation between the exchange
rate and the fundamentals, consider what happens if the transversality
condition is violated.

Rational bubbles. If the transversality condition does not hold, it is
possible for the exchange rate to be governed in part by an explosive
bubble {bt } that will eventually dominate its behavior. To see why, let
the bubble evolve according to

                              bt = (1/ψ)bt−1 + ηt ,                    (3.13)
          iid
where ηt ∼ N(0, ση2 ). The coeﬃcient (1/ψ) exceeds 1 so the bubble
process is explosive. Now add the bubble to the fundamental solution
(3.12) and call the result

                                    ŝt = st + bt .                    (3.14)

You can see that ŝt violates the transversality condition by substituting
(3.14) into (3.11) to get

                ψ t+k Et ŝt+k = ψ t+k Et st+k +ψ t+k Et bt+k = bt .
                                |      {z     }
                                        0

However, ŝt is a solution to the model, because it solves (3.9). You can
check this out by substituting (3.14) into (3.9) to get

                 st + bt = (ψ/λ)ft + ψ[Et St+1 + (1/ψ)bt ].

 The bt terms on either side of the equality cancel out so ŝt is indeed is
another solution to (3.9) but the bubble will eventually dominate and
will drive the exchange rate arbitrarily far away from the fundamentals
ft . The bubble arises in a model where people have rational expecta-
tions so it is referred to as a rational bubble. What does a rational
bubble look like? Figure 3.3 displays a realization of a ŝt for 200 time
periods where ψ = 0.99 and the fundamentals follow a driftless ran-
dom walk with innovation variance 0.0352 . Early on, the exchange rate
seems to return to the fundamentals but the exchange rate diverges as
time goes on.
88                            CHAPTER 3. THE MONETARY MODEL

         25


         20


         15

                                            exchange rate
         10
                                            with bubble
          5


          0

                                                       fundamentals
         -5


        -10
              1   26     51     76    101      126      151    176




Figure 3.3: A realization of a rational bubble where ψ = 0.99, and the
fundamentals follow a random walk. The stable line is the realization of the
fundamentals.


    Now it may be the case that the foreign exchange market is occa-
sionally driven by bubbles but real-world experience suggests that such
bubbles eventually pop. It is unlikely that foreign exchange markets
are characterized by rational bubbles which do not pop. As a result,
we will focus on the no-bubbles solution from this point on.




3.4      Fundamentals and Exchange Rate Volatil-
         ity

A major challenge to international economic theory is to understand
the volatility of the exchange rate in relation to the volatility of the
economic fundamentals. Let’s Þrst take a look at the stylized facts
concerning volatility. Then we’ll examine how the monetary model is
able to explain these facts.
3.4. FUNDAMENTALS AND EXCHANGE RATE VOLATILITY 89


Table 3.1: Descriptive statistics for exchange-rate and equity returns,
and their fundamentals.

                                                          Autocorrelations
           Mean Std.Dev.        Min. Max.              ρ1    ρ4     ρ8     ρ16
                                   Returns
 S&P        2.75       5.92    -13.34 18.31 0.24 -0.10                0.15 0.09
 UKP        0.41       5.50    -13.83 16.47 0.12 0.03                 0.01 -0.29
 DEM        0.46       6.35    -13.91 15.74 0.09 0.23                 0.04 -0.07
 YEN        0.73       6.08    -15.00 16.97 0.13 0.18                 0.06 -0.29
                        Deviation from fundamentals
 Div.       1.31       0.30     0.49    1.82 1.01 1.03                1.05 0.94
 UKP          0        0.18     -0.46 0.47 0.89 0.61                  0.25 -0.12
 DEM          0        0.31     -0.61 0.59 0.98 0.91                  0.77 0.55
 YEN          0        0.38     -0.85 0.50 0.98 0.88                  0.76 0.68

Notes: Quarterly observations from 1973.1 to 1997.4. Percentage returns on the
Standard and Poors composite index (S&P) and its log dividend yield (Div.) are
from Datastream. Percentage exchange rate returns and deviation of exchange rate
from fundamentals (st −ft ) with ft = (mt −m∗t )−(yt −yt∗ ) are from the International
Financial Statistics CD-ROM. (st − ft ) are normalized to have zero mean. The US
dollar is the numeraire currency. UKP is the UK pound, DEM is the deutschemark,
and YEN is the Japanese yen.


Stylized Facts on Volatility and Dynamics.

Some descriptive statistics for dollar quarterly returns on the pound,
deutsche-mark, yen are shown in the Þrst panel of Table 3.1. To un-
derscore the similarity between the exchange rate and equity prices,
the table also includes statistics for the Standard and Poors composite
stock price index. The second panel displays descriptive statistics for
the deviation of the respective asset prices from their fundamentals.
For equities, this is the S&P log dividend yield. For currency values, it
is the deviation of the exchange rate from the monetary fundamentals, ⇐(62)
ft − st have been normalized to have mean 0. The volatility of a time
series is measured by its sample standard deviation.
        90                              CHAPTER 3. THE MONETARY MODEL

             The main points that can be drawn from the table are
             1. The volatility of exchange rate returns ∆st is virtually indistin-
                guishable from stock return volatility.
             2. Returns for both stocks and exchange rates have low Þrst-order
                serial correlation.
             3. From our discussion about the properties of the variance ratio
                statistic in chapter 2.4, the negative autocorrelations in exchange
                rate returns at 16 quarters suggest the possibility of mean rever-
                sion.
             4. The deviation of the price from the fundamentals display sub-
                stantial persistence, and much less volatility than returns. The
                behavior of the dividend yield, while similar to the behavior of the
                exchange rate deviations from the monetary fundamentals, dis-
                plays slightly more persistence and appears to be nonstationary
                over the sample period.
        The data on returns and deviations from the fundamentals are shown
        in Figure 3.4 where you clearly see how the exchange rate is excessively
        volatile in comparison to its fundamentals.

        Excess Volatility and the Monetary Model
        The monetary model can be made consistent with the excess volatil-
        ity in the exchange rate if the growth rate of the fundamentals is a
        persistent stationary process.

                                       ∆ft = ρ∆ft−1 + ²t .                         (3.15)
                  iid
        with ²t ∼ N (0, σ²2 ). The implied k−step ahead prediction formulae
(63)⇒   are E (∆ft+k ) = ρk ∆ft . Converting to levels, you get Et (ft+k ) = ft +
        Pk t i                  k
          i=1 ρ ∆ft = ft +[(1−ρ )/(1−ρ)]ρ∆ft . Using these prediction formulae
        in (3.12) gives
                            ∞                  ∞                   ∞
                            X                  X    ψj            X   (ρψ)j
                  st = γ          ψ j ft + γ             ρ∆ft − γ           ρ∆ft
                            j=0                j=0 1 − ρ          j=0 1 − ρ
                                    ρψ
                        = ft +           ∆ft ,                                     (3.16)
                                  1 − ρψ
3.5. TESTING MONETARY MODEL PREDICTIONS                                             91

where we have used the fact that γ = 1 − ψ. Some additional algebra
reveals
                     (1 − ρψ)2 + 2ρψ(1 − ρ)
       Var(∆st ) =                          Var(∆ft ) > Var(∆ft ).
                           (1 − ρψ)2
This is not very encouraging since the levels of the fundamentals are
explosive. The end-of-chapter problems show that neither an AR(1) nor
a permanent—transitory components representation (chapter 2.4) for
the fundamentals allows the monetary model to explain why exchange
rate returns are more volatile than the growth rate of the fundamentals.



3.5      Testing Monetary Model Predictions
This section looks at two empirical strategies for evaluating the mone-
tary model of exchange rates.

MacDonald and Taylor’s Test
The Þrst strategy that we look at is based on MacDonald and Tay-
lor’s [96] adaptation of Campbell and Shiller’s [20] tests of the present
value model.3 This section draws on material on cointegration pre-
sented in chapter 2.6.
    Let It be the time t information set available to market participants.
Subtracting ft from both sides of (3.8) gives
                 st − ft = λE(st+1 − st |It ) = λ(it − i∗t ).                    (3.17)
st is by all indications a unit-root process, whereas ∆st and E(∆st+1 |It )
are clearly stationary. It follows from the Þrst equality in (3.17) that
st and ft must be cointegrated. Using (3.12) and noting that ψ = λγ
gives
                                                                          
                                 ∞
                                 X                         ∞
                                                           X
        λEt (∆st+1 ) = λ γ            ψ j Et ft+1+j − γ         ψ j Et ft+j 
                                 j=0                       j=0

  3
    The seminal contributions to this literature are Leroy and Porter [90] and
Shiller [127].
92                                     CHAPTER 3. THE MONETARY MODEL

                                      ∞
                                      X
                                 =          ψ j Et ∆ft+j .                                    (3.18)
                                      j=1


(3.17) and (3.18) allow you to represent the deviation of the exchange
rate from the fundamental as the present value of future fundamentals
growth
                                                      ∞
                                                      X
                                 ζt = st − ft =             ψ j Et ∆ft+j .                    (3.19)
                                                      j=1

   Since st and ft are cointegrated they can be represented by a vec-
tor error correction model (VECM) that describes the evolution of
(∆st , ∆ft , ζt ), where ζt ≡ st − ft . As shown in chapter 2.6, the lin-
ear dependence among (∆st , ∆ft , ζt ) induced by cointegration implies
that the information contained in the VECM is preserved in a bivariate
vector autoregression (VAR) that consists of ζt and either ∆st or ∆ft .
Thus we will drop ∆st and work with the p−th order VAR for (∆ft , ζt )
         Ã         !       p     Ã                    !Ã             !       Ã        !
             ∆ft           X         a11,j a12,j             ∆ft−j               ²t
                       =                                                 +                .   (3.20)
              ζt           j=1
                                     a21,j a22,j              ζt−j               vt

The information set available to the econometrician consists of cur-
rent and lagged values of ∆ft and ζt . We will call this information
Ht = {∆ft , ∆ft−1 , . . . , ζt , ζt−1 , . . .}. Presumably Ht is a subset of eco-
nomic agent’s information set, It . Take expectations on both sides of
(3.19) conditional on Ht and use the law of iterated expectations to
get4
                                            ∞
                                            X
                                     ζt =         ψ j E(∆ft+j |Ht ).                          (3.21)
                                            j=1

What is the point of deriving (3.21)? The point is to show that you
can use the prediction formulae implied the data-generating process
(3.20) to compute the necessary expectations. Expectations of market
participants E(∆ft+j |It ) are unobservable but you can still test the
theory by substituting the true expectations with your estimate of these
expectations, E(∆ft+j |Ht ).
     4
   Let X, Y, and Z be random variables. The law of iterated expectations says
E[E(X|Y, Z)|Y ] = E(X|Y ).
3.5. TESTING MONETARY MODEL PREDICTIONS                                                93

   To simplify computations of the conditional expectations of future
fundamentals growth, reformulate the VAR in (3.20) in the VAR(1)
companion form
                         Y t = BY t−1 + ut ,                   (3.22)
where                                                            
                                 ∆ft                        ²t
                                                            
                        
                        
                                ∆ft−1
                                  
                                  
                                                           0 
                                                              
                        
                        
                                  ..
                                  
                                  
                                                           .. 
                                                           . 
                                 .                       
                         ∆f                           0 
                           t−p+1                         
                    Yt =
                        
                                  ,
                                  
                                                  ut =     ,
                                                        vt 
                            ζt                           
                          ζt−1                        0 
                                                         
                             ..                       . 
                                                      . 
                              .                       . 
                                ζt−p+1                          0
                                                                               
            a11,1 a11,2 · · · a11,p a12,1 a12,2 · · · a12,p
                                                              
           1        0     ···   0   0       0     ···     0 
                                                              
           0        1 0··· 0        0       0     ···     0 
                                                              
           .                     ..   ..     ..      ..    .. 
           .
           .      ··· ···         .    .      .       .     . 
                                                               
                                                              
           0      · · · · · · 1 0   0     · ·   · ·   · · 0   
          
        B=                                                    
                                                               
           a21,1 a21,2 · · · a21,p a22,1 a22,2 · · · a22,p 
                                                              
           0
          
                   ··· ···       0   1       0     ···     0  
           0      ··· ···       0   0       1 0··· 0 
                                                              
           .                    ..   ..     ..      ..    .. 
           ..     ··· ···        .    .      .       .     . 
                                                              
             0     ··· ···       0   0     ··· ···1 0
Now let e1 be a (1 × 2p) row vector with a 1 in the Þrst element and
zeros elsewhere and let e2 be a (1 × 2p) row vector with a 1 as the
p + 1−th element and zeros elsewhere

              e1 = (1, 0, . . . , 0),   e2 = (0, . . . , 0, 1, 0, . . . , 0).

These are selection vectors that give                                                        ⇐(65)

                           e1 Y t = ∆ft ,      e 2 Y t = ζt .

Now the k-step ahead forecast of ft is conveniently expressed as

                 E(∆ft+j |Ht ) = e1 E(Y t+j |Ht ) = e1 Bj Y t .                     (3.23)
94                            CHAPTER 3. THE MONETARY MODEL

Substitute (3.23) into (3.21) to get
                                       ∞
                                       X
                    ζt = e2 Y t =            ψ j e1 Bj Y t
                                       j=1
                                                         
                                              ∞
                                              X
                                  = e1             ψ j Bj  Yt             (3.24)
                                              j=1

                                  = e1 ψB(I − ψB)−1 Y t .
Equating coeﬃcients on elements of Y t yields a set of nontrivial re-
strictions predicted by the theory which can be subjected to statistical
hypothesis tests
                          e2 (I − ψB) = e1 ψB.                   (3.25)

Estimating and Testing the Present-Value Model
We use quarterly US and German observations on the exchange rate,
money supplies and industrial production indices from the International
Financial Statistics CD-ROM from 1973.1 to 1997.4, to re-estimate the
MacDonald and Taylor formulation and test the restrictions (3.25). We
view the US as the home country. The bivariate VAR is run on (∆ft , ζt )
with observations demeaned prior to estimation. The fundamentals are
given by ft = (mt −m∗t )−(yt −yt∗ ) where the income elasticity of money
demand is Þxed at φ = 1.
   The BIC (chapter 2.1) tells us that a VAR(4) is the appropriate.
Estimation proceeds by letting x0t = (∆ft−1 , . . . , ∆ft−4 , ζt−1 , . . . , ζt−4 )
and running least squares on
                                 ∆ft = x0t β + ²t ,
                                  ζt = x0t δ + vt .
    Expanding (3.25) and making the correspondence between the co-
eﬃcients in the matrix B and the regressions, we write out the testable
restrictions explicitly as
                  β1 + δ1 = 0,            β5 + δ5 = 1/ψ,
                  β2 + δ2 = 0,            β6 + δ6 = 0,
                  β3 + δ3 = 0,            β7 + δ7 = 0,
                  β4 + δ4 = 0,            β8 + δ8 = 0.
3.5. TESTING MONETARY MODEL PREDICTIONS                                   95

These restrictions are tested for a given value of the interest semi-
elasticity of money demand, λ = ψ/(1 − ψ). To set up the Wald test,
let π 0 = (β 0 , δ 0 ) be the grand coeﬃcient vector from the OLS regressions, ⇐(70)
R = (I8 : I8 ) be the restriction matrix and r0 = (0, 0, 0, 0, (1/ψ), 0, 0, 0),
                                          1 P                 P
ΩT = ΣT ⊗ Q−1           T , where ΣT = T      ²t ²0t , QT = T1 xt x0t . Then as
T → ∞, the Wald statistic
                                                        D
               W = (Rπ − r)0 [RΩT R0 ]−1 (Rπ − r) ∼ χ28 .

    Here are the results. The Wald statistics and their associated values
of λ are W = 284, 160(λ = 0.02), W = 113, 872(λ = 0.10), W =
44, 584(λ = 0.16), and W = 18, 291(λ = 0.25). The restrictions are
strongly rejected for reasonable values of λ.
    One reason why the model fares poorly can be seen by comparing the
theoretically implied deviation of the spot rate from the fundamentals

                         ζ̃t = e1 ψB(I − ψB)−1 Yt ,

which is referred to as the ‘spread’ with the actual deviation, ζt = st −ft .
These are displayed in Figure 3.5 where you can see that the implied
spread is much too smooth.

Long-Run Evidence for the Monetary Model from
Panel Data
The statistical evidence against the rational expectations monetary
model is pretty strong. One of the potential weak points of the model
is that PPP is assumed to hold as an exact relationship when it is
probably more realistic to think that it holds in the long run.
    Mark and Sul [101] investigate the empirical link between the mon-
etary model fundamentals and the exchange rate using quarterly ob-
servations for 19 industrialized countries from 1973.1 to 1997.4 and the
panel exchange rate predictive regression                                ⇐(72)

                         sit+k − sit = βζit + ηit+k ,                 (3.26)

where ηit+k = γi + θt+k + uit+k has an error-components representa- ⇐(73)
tion with individual eﬀect γi , common time eﬀect θt and idiosyncratic
96                             CHAPTER 3. THE MONETARY MODEL




Table 3.2: Monetary fundamentals out-of-sample forecasts of US dollar
returns with nonparametric bootstrapped p-values under cointegration.

                      1-quarter ahead     16-quarters ahead
       Country       U-statistic p-value U-statistic p-value
       Australia       1.024      0.904    0.864       0.222
       Austria         0.984     0.013     0.837       0.131
       Belgium         0.999      0.424    0.405      0.001
       Canada          0.985     0.074     0.552      0.009
       Denmark         1.014      0.912    0.858       0.174
       Finland         1.001      0.527    0.859       0.164
       France          0.994      0.155    0.583      0.004
       Germany         0.986     0.056     0.518      0.003
       Great Britain   0.983     0.077     0.570      0.012
       Greece          1.016      0.909    1.046       0.594
       Italy           0.997      0.269    0.745      0.016
       Japan           1.003      0.579    0.996       0.433
       Korea           0.912     0.002     0.486      0.012
       Netherlands     0.986     0.041     0.703      0.032
       Norway          0.998      0.380    0.537      0.002
       Spain           0.996      0.341    0.672      0.028
       Sweden          0.975     0.034     0.372      0.001
       Switzerland     0.982     0.008     0.751      0.049
       Mean            0.991     0.010     0.686      0.001
       Median          0.995      0.163    0.688      0.001

Notes: Bold face indicate statistical signiÞcance at the 10 percent level.
3.5. TESTING MONETARY MODEL PREDICTIONS                              97

eﬀect uit+k . A panel combines the time-series observations of several
cross-sectional units. The individuals in the cross section are diﬀerent
countries which are indexed by i = 1, . . . , N .

Out-of-Sample Fit and Prediction
Mark and Sul’s primary objective is to use the regression to generate
out-of-sample forecasts of the depreciation. They base their methodol-
ogy on the work of Meese and Rogoﬀ [104] who sought to evaluate the
empirical performance of alternative exchange rate models that were
popular in the 1970s by conducting a monthly postsample Þt analysis.
    Suppose there are j = 1, . . . J models under consideration. Let xjt ⇐(74)
be a vector of exchange rate determinants implied by ‘model j,’ and
       0
st = xtj β j + ejt be regression representation of model j. What Meese
and Rogoﬀ did was to divide the complete size T (time-series) sample
in two. Sample 1 consists of observations t = 1, . . . t1 and sample 2
consists of observations t = t1 + 1, . . . , T , where t1 < T . Using sample
1 to estimate β j , they then formed the out-of-estimation sample Þt of
                                                    0
the exchange rate predicted by model j ŝjt = xtj β̂ j for t = t1 + 1, . . . T .
    The Meese—Rogoﬀ regressions were contemporaneous relationships
between the dependent variable and the vector of independent variables.
To truly generate forecasts of future values of st they needed to forecast
future values of the xjt vectors. Instead, Meese and Rogoﬀ used realized
values of the xjt vectors–hence the term out-of-sample Þt. The various
models were judged on the accuracy of their out-of estimation sample
Þt.
    The models were compared to the predictions of the driftless random
walk model for the exchange rate. This is an important benchmark for
evaluation because the random walk says there is no information that
helps to predict future change. You would think that an econometric
model with any amount of economic content would dominate the ‘no-
change’ prediction of the random walk. Even though they biased the
results in favor of the model-based regressions by using realized values
of the independent variables, Meese and Rogoﬀ found that that the
out-of-sample Þt from the theory-based regressions were uniformly less
accurate than the random walk.
    Their study showed that many models may Þt well in sample but
98                         CHAPTER 3. THE MONETARY MODEL

they have a tendency to fall apart out of sample. There are many pos-
sible explanations for the instability, but ultimately, the reason boils
down to the failure to Þnd a time-invariant relationship between the ex-
change rate and the fundamentals. Although their conclusions regard-
ing the importance of macroeconomic fundamentals for the exchange
rate were nihilistic, Meese and Rogoﬀ established a rigorous tradition in
international macroeconomics of using out-of-sample Þt or forecasting
performance as model evaluation criteria.

Panel Long-Horizon Regression
Let’s return to Mark and Sul’s analysis. They evaluate the predictive
content of the monetary model fundamentals by initially estimating the
regression on observations through 1983.1. Note that the regressand in
(3.26) are past (not contemporaneous) deviations of the exchange rate
from the fundamentals. It is a predictive regression that generates ac-
tual out-of-sample forecasts. The k = 1 regression is used to forecast 1-
quarter ahead, and the k = 16 regression is used to forecast 16 quarters
ahead. The sample is then updated by one observation and a new set
of forecasts are generated. This recursive updating of the sample and
forecast generation is repeated until the end of the data set is reached.
β = 0 if the monetary fundamentals contain no predictive content or if
the exchange rate and the fundamentals do not cointegrate.
    Let observations T − T0 to T be sample reserved for forecast evalu-
ation. If ŝit+k − sit is the k−step ahead regression forecast formed at t,
the root-mean-square prediction error (RMSPE) of the regression is
                            v
                            u   T
                            u 1 X
                      R1   =t     (ŝ                2
                                         it − sit−k ) .
                               T0 t=T0
The monetary fundamentals regression is compared to the random walk
                                             iid
with drift, sit+1 = µi + sit + ²it where ²it ∼ (0, σi2 ). The k−step ahead
forecasted change from the random walk is ŝit+k − sit = kµi . Let R2 be
the random walk model’s RMSPE. Theil’s [134] statistic U = R1 /R2 is
the ratio of the RMSPE of the two models. The regression outperforms
the random walk in prediction accuracy when U < 1.
    Table 3.2 shows the results of the prediction exercise. The nonpara-
metric residual bootstrap (see chapter 2.5) is used to generate p-values
3.5. TESTING MONETARY MODEL PREDICTIONS                            99

for a test of the hypothesis that the regression and the random walk
models give equally accurate predictions. There is a preponderance
of statistically superior predictive performance by the monetary model
exchange rate regression.
100                                                               CHAPTER 3. THE MONETARY MODEL




                     Stock Returns and Log Dividend Yield                                                           Dollar/Pound
 20                                                                                  20

 15                                                                                  15
                                                                                     10
 10
                                                                                       5
  5
                                                                                       0
  0
                                                                                      -5
 -5
                                                                                     -10
-10                                                                                  -15

-15                                                                                  -20
      73   75   77     79     81    83     85     87        89   91   93   95   97         73   75   77   79   81   83     85      87   89   91   93   95   97



                              Dollar/Deutschemark                                                                     Dollar/Yen
20                                                                                    20

15                                                                                    15

10                                                                                    10

  5                                                                                    5

  0                                                                                    0

 -5                                                                                   -5

-10                                                                                  -10

-15                                                                                  -15

-20                                                                                  -20
      73   75   77     79    81     83     85     87        89   91   93   95   97         73   75   77   79   81    83     85     87   89   91   93   95   97




Figure 3.4: Quarterly stock and exchange rate returns (jagged line),
1973.1 through 1997.4, with price deviations from the fundamentals
(smooth line).
3.5. TESTING MONETARY MODEL PREDICTIONS                                     101




      0.8

      0.6

      0.4
                                           Actual

      0.2
                                                              Theoretical
        0

     -0.2

     -0.4

     -0.6

     -0.8
            74   76   78   80   82   84   86   88   90   92   94    96



        Figure 3.5: Theoretical and actual spread, st − ft .
102                        CHAPTER 3. THE MONETARY MODEL

      Monetary Model Summary

      1. The monetary model builds on purchasing-power parity, uncov-
         ered interest parity, and stable transactions-based money de-
         mand functions.
      2. Domestic and foreign money and real income levels are the fun-
         damental determinants of the nominal exchange rate.
      3. The exchange rate is viewed as the relative price of two monies,
         which are assets. Since asset prices are in general more volatile
         than their fundamentals, it comes as no surprise that exchange
         rates exhibit excess volatility. The present value form of the
         solution underscores the concept that the exchange rate is an
         asset price.
      4. The monetary model is a useful Þrst approximation in Þxing
         our intuition about exchange rate dynamics even though it fails
         to explain the data on many dimensions. Because purchasing
         power parity is assumed to hold as an exact relationship, the
         model cannot explain the dynamics of the real exchange rate.
         Indeed, the main reason to study nominal exchange rate behav-
         ior is if we think that nominal exchange rate movements are
         correlated with real exchange rate changes so that they have
         real consequences.
3.5. TESTING MONETARY MODEL PREDICTIONS                                        103

Problems
Let the fundamentals have the permanent—transitory components represen-
tation
                              ft = f¯t + zt ,                    (3.27)
                                                          iid
where f¯t = f¯t−1 + ²t is the permanent part with ²t ∼ N(0, σ²2 ) and zt =
                                          iid
ρzt−1 +ut is the transitory part with ut ∼ N(0, σu2 ), and 0 < ρ < 1. Note that
the time-t expectation of a random walk k periods ahead is Et (f¯t+k ) = f¯t ,
and the time-t expectation of the AR(1) part k periods ahead is Et zt+k =
ρk zt . (3.27) implies the k-step ahead prediction formula Et (ft+k ) = f¯t +ρk zt .

   1. Show that
                                                  1
                               st = f¯t +                 zt .               (3.28)
                                             1 + λ(1 − ρ)

   2. Suppose that the fundamentals are stationary by setting σ² = 0. Then
      the permanent part f¯t drops out and the fundamentals are governed
      by a stationary AR(1) process. Show that
                                      µ                  ¶2
                                               1
                         Var(st ) =                           Var(ft ),      (3.29)
                                          1 + λ(1 − ρ)

   3. Let’s restore the unit root component in the fundamentals by setting
      σ²2 > 0 but turn oﬀ the transitory part by setting σu2 = 0. Now the
      fundamentals follow a random walk and the exchange rate is given
      exactly by the fundamentals

                                           st = ft .                         (3.30)

      The exchange rate inherits the unit root from ft . Since unit root
      processes have inÞnite variances, we should take Þrst diﬀerences to
      induce stationarity. Doing so and taking the variance, (3.30) predicts
      that the variance of the exchange rate is exactly equal to the variance
      of the fundamentals.
      Now re-introduce the transitory part σu2 > 0. Show that depreciation
      of the home currency is

                                            (ρ − 1)zt−1 + ut
                             ∆st = ²t +                      .               (3.31)
                                              1 + λ(1 − ρ)
104                         CHAPTER 3. THE MONETARY MODEL

      where
                                             2(1 − ρ)
                     Var(∆st ) = σ²2 +                   Var(zt ).
                                         [1 + λ(1 − ρ)]2
      Why does the variance of the depreciation still not exceed the variance
      of the fundamentals growth?
Chapter 4

The Lucas Model

The present-value interpretation of the monetary model underscores the
idea that we should expect the exchange rate to behave like the prices
of other assets–such as stocks and bonds. This is one of that model’s
attractive features. One of its unattractive features is that the model
is ad hoc in the sense that the money demand functions upon which
it rests were not shown to arise explicitly from decisions of optimizing
agents. Lucas’s [95] neoclassical model of exchange rate determination
gives a rigorous theoretical framework for pricing foreign exchange and
other assets in a ßexible price environment and is not subject to this
criticism. It is a dynamic general equilibrium model of an endowment
economy with complete markets where the fundamental determinants
of the exchange rate are the same as those in the monetary model.
    The economic environment for dynamic general equilibrium analysis
needs to be speciÞed in some detail. To make this task manageable,
we will begin by modeling the real part of the economy that operates
under a barter system. We will obtain a solution for the real exchange
rate and real stock-pricing formulae. This perfect-markets real general
equilibrium model is sometimes referred to as an Arrow [3]—Debreu [34]
 model because it can be mapped into their static general equilibrium
framework. We know that the Arrow—Debreu competitive equilibrium
yields a Pareto Optimum. Why is this connection useful? Because it
tells us that we can understand the behavior of the market economy by
solving for the social optimum and it is typically more straightforward
to obtain the social optimum than to directly solve for the market

                                  105
        106                             CHAPTER 4. THE LUCAS MODEL

        equilibrium.
            In order to study the exchange rate, we need to have a monetary
        economy. The problem is that there is no role for Þat money in the
        Arrow—Debreu environment. The way that Lucas gets around this
        problem is to require people to use money when they buy goods. This
(76)⇒   requirement is called a ‘cash-in-advance’ constraint and is a popular
        strategy for introducing money in general equilibrium along the lines
        of the transactions motive for holding money. A second popular strat-
        egy that puts money in the utility function will be developed in chapter
        9.
            The models we will study in this chapter and in chapter 5 have
        no market imperfections and exhibit no nominal rigidities. Market
        participants have complete information and rational expectations. Why
        study such a perfect world? First, we have a better idea for solving
        frictionless and perfect-markets models so it is a good idea to start in
        familiar territory. Naturally, these models of idealized economies will
        not fully explain the real world. So we want to view these models as
        providing a benchmark against which to measure progress. If and when
        the data ‘reject’ these models, take one should note the manner in which
        they are rejected to guide the appropriate extensions and reÞnements
        to the theory.
            There is a good deal of notation for the model which is summarized
        in Table 4.1.


        4.1     The Barter Economy
        Consider two countries each inhabited by a large number of individuals
        who have identical utility functions and identical wealth. People may
        believe that they are individuals but the respond in the same way to
        changes in incentives. Because people are so similar you can normalize
        the constant populations of each country to 1 and model the people in
        each country by the actions of a single representative agent (household)
        in Lucas model. This is the simplest way to aggregate across individuals
        so that we can model macroeconomic behavior.
            ‘Firms’ in each country are pure endowment streams that gener-
        ate a homogeneous nonstorable country-speciÞc good using no labor or
4.1. THE BARTER ECONOMY                                                         107

capital inputs. Some people like to think of these Þrms as fruit trees.
You can also normalize the number of Þrms in each country to 1. xt
is the exogenous domestic output and yt is the exogenous foreign out-
put. The evolution of output is given by xt = gt xt−1 at home and by
yt = gt∗ yt−1 abroad where gt and gt∗ are random gross rates of change
that evolve according to a stochastic process that is known by agents.
Each Þrm issues one perfectly divisible share of common stock which
is traded in a competitive stock market. The Þrms pay out all of their
output as dividends to shareholders. Dividends form the sole source of
support for individuals. We will let xt be the numeraire good and qt
be the price of yt in terms of xt . et is the ex-dividend market value of
the domestic Þrm and e∗t is the ex-dividend market value of the foreign
Þrm.
    The domestic agent consumes cxt units of the home good, cyt units
of the foreign good and holds ωxt shares of the domestic Þrm and ωyt
shares of the foreign Þrm. Similarly, the foreign agent consumes c∗xt ,
units of the home good, c∗yt units of the foreign good and holds ωxt   ∗
                                    ∗
shares of the domestic Þrm and ωyt     shares of the foreign Þrm.
    The domestic agent brings into period t wealth valued at
                  Wt = ωxt−1 (xt + et ) + ωyt−1 (qt yt + e∗t ),                (4.1)
where xt + et and qt yt + e∗t are the with-dividend value of the home and
foreign Þrms. The individual then allocates current wealth towards new
share purchases et ωxt + e∗t ωyt , and consumption cxt + qt cyt
                      Wt = et ωxt + e∗t ωyt + cxt + qt cyt .                   (4.2)
Equating (4.1) to (4.2) gives the consolidated budget constraint
  cxt + qt cyt + et ωxt + e∗t ωyt = ωxt−1 (xt + et ) + ωyt−1 (qt yt + e∗t ).   (4.3)
    Let u(cxt , cyt ) be current period utility and 0 < β < 1 be the subjec-
tive discount factor. The domestic agent’s problem then is to choose se-
quences of consumption and stock purchases, {cxt+j , cyt +j , ωxt+j , ωyt+j }∞
                                                                             j=0 ,
to maximize expected lifetime utility
                                                        
                                 ∞
                                 X
                         Et         β j u(cxt+j , cyt+j ) ,                  (4.4)
                               j=0
        108                                    CHAPTER 4. THE LUCAS MODEL

        subject to (4.3).
           You can transform the constrained optimum problem into an un-
        constrained optimum problem by substituting cxt from (4.3) into (4.4).
        The objective function becomes

          u(ωxt−1 (xt + et ) + ωyt−1 (qt yt + e∗t ) − et ωxt − e∗t ωyt − qt cyt , cyt )
              +Et [βu(ωxt (xt+1 + et+1 ) + ωyt (qt+1 yt+1 + e∗t+1 )                       (4.5)
              −et+1 ωxt+1 − e∗t+1 ωyt+1 − qt+1 cyt+1 , cyt+1 )] + · · ·

        Let u1 (cxt , cyt ) = ∂u(cxt , cyt )/∂cxt be the marginal utility of x-consumption
        and u2 (cxt , cyt ) = ∂u(cxt , cyt )/∂cyt be the marginal utility of y-consumption.
        Diﬀerentiating (4.5) with respect to cyt , ωxt , and ωyt , setting the result
(77)⇒   to zero and rearranging yields the Euler equations

              cyt :     qt u1 (cxt , cyt ) = u2 (cxt , cyt ),                              (4.6)
              ωxt :     et u1 (cxt , cyt ) = βEt [u1 (cxt+1 , cyt+1 )(xt+1 + et+1 )],      (4.7)
                         ∗                                                         ∗
              ωyt :     et u1 (cxt , cyt ) = βEt [u1 (cxt+1 , cyt+1 )(qt+1 yt+1 + et+1 )]. (4.8)

        These equations must hold if the agent is behaving optimally. (4.6)
        is the standard intratemporal optimality condition that equates the
        relative price between x and y to their marginal rate of substitution.
        Reallocating consumption by adding a unit of cy increases utility by
        u2 (·). This is Þnanced by giving up qt units of cx , each unit of which
        costs u1 (·) units of utility for a total utility cost of qt u1 (·). If the indi-
        vidual is behaving optimally, no such reallocations of the consumption
        plan yields a net gain in utility.
            (4.7) is the intertemporal Euler equation for purchases of the do-
        mestic equity. The left side is the utility cost of the marginal purchase
        of domestic equity. To buy incremental shares of the domestic Þrm, it
        costs the individual et units of cx , each unit of which lowers utility by
        u1 (cxt , cyt ). The right hand side of (4.7) is the utility expected to be
        derived from the payoﬀ of the marginal investment. If the individual
        is behaving optimally, no such reallocations between consumption and
        saving can yield a net increase in utility. An analogous interpretation
        holds for intertemporal reallocations of consumption and purchases of
        the foreign equity in (4.8).
4.1. THE BARTER ECONOMY                                                                  109

   The foreign agent has the same utility function and faces the anal-
ogous problem to maximize
                                                            
                                   ∞
                                   X
                           Et         β j u(c∗xt+j , c∗yt+j ) ,                      (4.9)
                                 j=0


subject to

  c∗xt + qt c∗yt + et ωxt
                       ∗
                          + e∗t ωy∗t = ωxt−1
                                        ∗                  ∗
                                             (xt + et ) + ωyt−1 (qt yt + e∗t ). (4.10)

The analogous set of Euler equations for the foreign individual are

     c∗yt :     qt u1 (c∗xt , c∗yt ) = u2 (c∗xt , c∗yt ),                               (4.11)
       ∗                 ∗      ∗                    ∗     ∗
     ωxt  :     et u1 (cxt , cyt ) = βEt [u1 (cxt+1 , cyt+1 )(xt+1 + et+1 )], (4.12)
       ∗
     ωyt  :     e∗t u1 (c∗xt , c∗yt ) = βEt [u1 (c∗xt+1 , c∗yt+1 )(qt+1 yt+1 + e∗t+1 )].(4.13)

A set of four adding up constraints on outstanding equity shares and
the exhaustion of output in home and foreign consumption complete
the speciÞcation of the barter model
                                          ∗
                                 ωxt + ωxt       =    1,                             (4.14)
                                          ∗
                                 ωyt + ωyt       =    1,                             (4.15)
                                  cxt + c∗xt     =    xt ,                           (4.16)
                                  cyt + c∗yt     =    yt .                           (4.17)


 Digression on the social optimum. You can solve the model by grinding
out the equilibrium, but the complete markets and competitive setting
makes available a ‘backdoor’ solution strategy of solving the problem
confronting a Þctitious social planner. The stochastic dynamic barter
economy can conceptually be reformulated in terms of a static compet-
itive general equilibrium model—the properties of which are well known.
The reformulation goes like this.
     We want to narrow the deÞnition of a ‘good’ so that it is deÞned
precisely by its characteristics (whether it is an x−good or a y−good),
the date of its delivery (t), and the state of the world when it is delivered
(xt , yt ). Suppose that there are only two possible values for xt (yt ) in
110                                       CHAPTER 4. THE LUCAS MODEL

each period–a high value xh(yh ) and a low value x` (y` ). Then there
are 4 possible states of the world (xh , yh ), (xh , y` ), (x` , yh), and (x` , y` ).
‘Good 1’ is x delivered at t = 0 in state 1. ‘Good 2’ is x delivered
at t = 0 in state 2, ‘good 8’ is y delivered at t = 1 in state 4, and
so on. In this way, all possible future outcomes are completely spelled
out. The reformulation of what constitutes a good corresponds to a
complete system of forward markets. Instead of waiting for nature to
reveal itself over time, we can have people meet and contract for all
future trades today (Domestic agents agree to sell so many units of x
to foreign agents at t = 2 if state 3 occurs in exchange for q2 units of y,
and so on.) After trades in future contingencies have been contracted,
we allow time to evolve. People in the economy simply fulÞll their
contractual obligations and make no further decisions. The point is
that the dynamic economy has been reformulated as a static general
equilibrium model.
    Since the solution to the social planner’s problem is a Pareto opti-
mal allocation and you know by the fundamental theorems of welfare
economics that the Pareto Optimum supports a competitive equilib-
rium, it follows that the solution to the planner’s problem will also
describe the equilibrium for the market economy.1
    We will let the social planner attach a weight of φ to the home
individual and 1 − φ to the foreign individual. The planner’s problem
is to allocate the x and y endowments optimally between the domestic
and foreign individuals each period by maximizing
              ∞
              X        h                                              i
         Et         β j φu(cxt+j , cyt+j ) + (1 − φ)u(c∗xt+j , c∗yt+j ) ,    (4.18)
              j=0


subject to the resource constraints (4.16) and (4.17). Since the goods
are not storable, the planner’s problem reduces to the timeless problem
of maximizing
                     φu(cxt , cyt ) + (1 − φ)u(c∗xt , c∗yt ),

   1
     Under certain regularity conditions that are satisÞed in the relatively simple
environments considered here, the results from welfare economics that we need are,
i) A competitive equilibrium yields a Pareto Optimum, and ii) Any Pareto Optimum
can be replicated by a competitive equilibrium.
4.1. THE BARTER ECONOMY                                                   111

subject to (4.16) and (4.17). The Euler equations for this problem are

                   φu1 (cxt , cyt ) = (1 − φ)u1 (c∗xt , c∗yt ),        (4.19)
                   φu2 (cxt , cyt ) = (1 − φ)u2 (c∗xt , c∗yt ).        (4.20)

(4.19) and (4.20) are the optimal or eﬃcient risk-sharing conditions.
Risk-sharing is eﬃcient when consumption is allocated so that the
marginal utility of the home individual is proportional, and therefore
perfectly correlated, to the marginal utility of the foreign individual.
Because individuals enjoy consuming both goods and the utility func-
tion is concave, it is optimal for the planner to split the available x and
y between the home and foreign individuals according to the relative
importance of the individuals to the planner.
    The weight φ can be interpreted as a measure of the size of the home
country in the market version of the world economy. Since we assumed
at the outset that agents have equal wealth, we will let both agents be
equally important to the planner and set φ = 1/2. Then the Pareto
optimal allocation is to split the available output of x and y equally
                                 xt                          yt
                  cxt = c∗xt =      ,   and cyt = c∗yt =        .
                                 2                           2
Having determined the optimal quantities, to get the market solution
we look for the competitive equilibrium that supports this Pareto op-
timum.

The market equilibrium. If agents owned only their own country’s Þrms,
individuals would be exposed to idiosyncratic country-speciÞc risk that
they would prefer to avoid. The risk facing the home agent is that the
home Þrm experiences a bad year with low output of x when the foreign
Þrm experiences a good year with high output of y. One way to insure
against this risk is to hold a diversiÞed portfolio of assets.
    A diversiÞcation plan that perfectly insures against country-speciÞc
risk and which replicates the social optimum is for each agent to hold
stock in half of each country’s output.2 The stock portfolio that achieves
  2
    Agents cannot insure against world-wide macroeconomic risk (simultaneously
low xt and yt ).
        112                                   CHAPTER 4. THE LUCAS MODEL

        complete insurance of idiosyncratic risk is for each individual to own
        half of the domestic Þrm and half of the foreign Þrm3
                                         ∗           ∗   1
                                  ωxt = ωxt = ωyt = ωyt = .                           (4.21)
                                                         2
        We call this a ‘pooling’ equilibrium because the implicit insurance
        scheme at work is that agents agree in advance that they will pool
        their risk by sharing the realized output equally.

        The solution under constant relative-risk aversion utility. Let’s adopt
        a particular functional form for the utility function to get explicit so-
        lutions. We’ll let the period utility function be constant relative-risk
        aversion in Ct = cθxt c1−θ
                               yt , a Cobb-Douglas index of the two goods

                                                     Ct1−γ
                                       u(cx , cy ) =       .                          (4.22)
                                                     1−γ
        Then
                                                         θCt1−γ
                                     u1 (cxt , cyt ) =          ,
                                                          cxt
                                                    (1 − θ)Ct1−γ
                                  u2 (cxt , cyt ) =              .
                                                         cyt
        and the Euler equations (4.6)—(4.13) become
                                1 − θ xt
                         qt =            ,                                            (4.23)
                                  θ yt
                                    "µ      ¶     Ã         !#
                         et            Ct+1 (1−γ)      et+1
                              = βEt                 1+         ,                      (4.24)
                         xt              Ct            xt+1
                                       "µ          ¶(1−γ) Ã                  !#
                        e∗t                 Ct+1                   e∗t+1
                             = βEt                            1+                  .   (4.25)
                       qt yt                 Ct                  qt+1 yt+1
        From (4.23) the real exchange rate qt is determined by relative output
        levels. (4.24) and (4.25) are stochastic diﬀerence equations in the ‘price-
(79)⇒   dividend’ ratios et /xt and e∗t /(qt yt ). If you iterate forward on them as
           3
            Actually, Cole and Obstfeld [31]) showed that trade in goods alone are suﬃcient
        to achieve eﬃcient risk sharing in the present model. These issues are dealt with in
        the end-of-chapter problems.
4.2. THE ONE-MONEY MONETARY ECONOMY                                 113

you did in (3.9) for the monetary model, the equity price—dividend ratio
can be expressed as the present discounted value of future consumption
growth raised to the power 1 − γ. You can then get an explicit solution
once you make an assumption about the stochastic process governing
output. This will be covered in section 4.5 below.
    An important point to note is that there is no actual asset trading
in the Lucas model. Agents hold their investments forever and never
rebalance their portfolios. The asset prices produced by the model are
shadow prices that must be respected in order for agents to willingly to
hold the outstanding equity shares according to (4.21).


4.2     The One-Money Monetary Economy
In this section we introduce a single world currency. The economic
environment can be thought of as a two-sector closed economy. The
idea is to introduce money without changing the real equilibrium that
we characterized above. One of the diﬃculties in getting money into
the model is that the people in the barter economy get along just Þne
without it. An unbacked currency in the Arrow—Debreu world that gen-
erates no consumption payoﬀs will not have any value in equilibrium.
To get around this problem, Lucas prohibits barter in the monetary
economy and imposes a ‘cash-in-advance’ constraint that requires peo-
ple to use money to buy goods. As we enter period t the following
speciÞc cash-in-advance transactions technology must be adhered to.

  1. xt and yt are revealed.

  2. λt , the exogenous stochastic gross rate of change in money is re-
     vealed. The total money supply Mt , evolves according to
     Mt = λt Mt−1 . The economy-wide increment ∆Mt = (λt −1)Mt−1 ,
     is distributed evenly to the home and foreign individuals where
     each agent receives the lump-sum transfer ∆M  2
                                                     t
                                                       = (λt − 1) Mt−1
                                                                   2
                                                                       .

  3. A centralized securities market opens where agents allocate their
     wealth towards stock purchases and the cash that they will need to
     purchase goods for consumption. To distinguish between the ag-
     gregate money stock Mt and the cash holdings selected by agents,
114                                  CHAPTER 4. THE LUCAS MODEL

       denote individual’s choice variables by lower case letters, mt and
       m∗t . Securities market closes.


   4. Decentralized goods trading now takes place in the ‘shopping
      mall.’ Each household is split into ‘worker—shopper’ pairs. The
      shopper takes the cash from security markets trading and buys
      x and y−goods from other stores in the mall (shoppers are not
      allowed to buy from their own stores). The home-country worker
      collects the x− endowment and oﬀers it for sale in an x−good
      store in the ‘mall.’ The y−goods come from the foreign coun-
      try ‘worker’ in the foreign country who collects and sells the
      y−endowment in the mall. The goods market closes.


   5. The cash value of goods sales are distributed to stockholders as
      dividends. Stockholders carry these nominal dividend payments
      into the next period.


The state of the world is the gross growth rate of home output, for-
eign output, and money (gt , gt∗ , λt ), and is revealed prior to trading.
Because the within-period uncertainty is revealed before any trading
takes place, the household can determine the precise amount of money
it needs to Þnance the current period consumption plan. As a result,
it is not necessary to carry extra cash from one period to the next. If
the (shadow) nominal interest rate is always positive, households will
make sure that all the cash is spent each period.4
    To formally derive the domestic agent’s problem, let Pt be the nom-
inal price of xt . Current-period wealth is comprised of dividends from
last period’s goods sales, the market value of ex-dividend equity shares

   4
    It may seem strange to talk about the interest rate and bonds since individuals
do not hold nor trade bonds. That is because bonds are redundant assets in the
current environment and consequently are in zero net supply. But we can compute
the shadow interest rate to keep the bonds in zero net supply. The equilibrium
interest rate is such that individuals have no incentive either to issue or to buy
nominal debt contracts. We will use the model to price nominal bonds at the end
of this section.
4.2. THE ONE-MONEY MONETARY ECONOMY                                                  115

and the lump-sum monetary transfer
                  Pt−1 (ωxt−1 xt−1 + ωyt−1 qt−1 yt−1 )
        Wt =
                                  P
                  |               {zt                }
                                  Dividends
                                                                 ∆Mt
                  +       ωxt−1 et + ωyt −1 e∗t         +                    . (4.26)
                          |           {z         }                2P
                                                                 | {z t }
                      Ex-dividend share values
                                                            Money transfer
In the securities market, the domestic household allocates Wt towards
cash mt to Þnance shopping plans and to equities
                             mt
                       Wt =      + ωxt et + ωyt e∗t .           (4.27)
                              Pt
The household knows that the amount of cash required to Þnance the
current period consumption plan is
                              mt = Pt (cxt + qt cyt ).                         (4.28)
The cash-in-advance constraint is said to bind. Substituting (4.28) into
(4.27), and equating the result to (4.26) eliminates mt and gives the
simpler consolidated budget constraint
                                              Pt−1
       cxt + qt cyt + ωxt et + ωyt e∗t =           [ωxt−1 xt−1 + ωyt−1 qt−1 yt−1 ]
                                               Pt
                  ∆Mt
              +       + ωxt−1 et + ωyt−1 e∗t .                                 (4.29)
                  2Pt
The domestic household’s problem is therefore to maximize
                                                         
                                  ∞
                                  X
                         Et          β j u(cxt+j , cyt+j ) ,                 (4.30)
                               j=0

subject to (4.29). As before, the terms that matter at date t are
                       u(cxt , cyt ) + βEt u(cxt+1 , cyt+1 ),
so you can substitute (4.29) into the utility function to eliminate cxt and
cxt+1 and to transform the problem into one of unconstrained optimiza-
tion. The Euler equations characterizing optimal household behavior
are                                                                         ⇐(81-83)
           116                                               CHAPTER 4. THE LUCAS MODEL

                 cyt : qt u1 (cxt , cyt ) = u2 (cxt , cyt ),                                     (4.31)
                                                     "                        Ã            !#
                                                                    Pt
              ωxt : et u1 (cxt , cyt ) = βEt u1 (cxt+1 , cyt+1 )        xt + et+1 , (4.32)
                                                                  Pt+1
                                            "                    Ã                  !#
                     ∗                                              Pt           ∗
              ωyt : et u1 (cxt , cyt ) = βEt u1 (cxt+1 , cyt+1 )        qt yt + et+1 .(4.33)
                                                                   Pt+1
               The foreign household solves an analogous problem. Using the for-
           eign cash-in-advance constraint
                                                 m∗t = Pt (c∗t + qt c∗yt ).                      (4.34)
           the consolidated budget constraint for the foreign household is
                                                                   Pt−1 ∗
                      c∗xt + qt c∗yt + ωxt
                                        ∗        ∗ ∗
                                           et + ωyt et =               [ω           ∗
                                                                            xt−1 + ωyt−1 qt−1 yt−1 ]
                                                                    Pt xt−1
                           ∆Mt     ∗          ∗
                               ++ ωxt−1 et + ωyt−1 e∗t .                                         (4.35)
                           2Pt
           The job is to maximize
                                                                                 
                                                   ∞
                                                   X
                                            Et      j
                                                         β u(c∗xt+j , c∗yt+j ) ,
                                                  j=0

           subject to (4.35).
              The foreign household’s problem generates a symmetric set of Euler
(84-86)⇒   equations
             c∗yt :      qt u1 (c∗xt , c∗yt ) = u2 (c∗xt , c∗yt ),
                                                         "                        Ã         !#
              ∗                                                          Pt
             ωxt :       et u1 (c∗xt , c∗yt ) = βEt      u1 (c∗xt+1 , c∗yt+1 )
                                                                             xt + et+1 ,
                                                                        Pt+1
                                                 "                    Ã                  !#
              ∗           ∗      ∗     ∗               ∗       ∗         Pt           ∗
             ωyt :       et u1 (cxt , cyt ) = βEt u1 (cxt+1 , cyt+1 )        qt yt + et+1 .
                                                                        Pt+1
              The adding-up constraints that complete the model are
                                                                          ∗
                                                    1        =   ωxt + ωxt    ,
                                                                          ∗
                                                    1        =   ωyt + ωyt ,
                                                  Mt         =   mt + m∗t ,
                                                  xt         =   cxt + c∗xt ,
                                                   yt        =   cyt + c∗yt .
4.2. THE ONE-MONEY MONETARY ECONOMY                                             117

To solve the model, aggregate the cash-in-advance constraints over the
home and foreign agents and use the adding-up constraints to get

                             Mt = Pt (xt + qt yt ).                           (4.36)

This is the quantity equation for the world economy where velocity is
always 1. The single money generates no new idiosyncratic country-
speciÞc risk. The equilibrium established for the barter economy (con-
stant and equal portfolio shares) is still the perfect risk-pooling equi-
librium
                               ∗             ∗  1
                      ωxt = ωxt  = ωyt = ωyt   = ,
                                                2
                                         xt
                             cxt = c∗xt = ,
                                          2
                                         y t
                             cyt = c∗yt = .
                                          2
The only thing that has changed are the equity pricing formulae, which
now incorporate an ‘inßation premium.’ The inßation premium arises
because the nominal dividends of the current period must be carried
over into the next period at which time their real value can potentially
be eroded by an inßation shock.

 Solution under constant relative risk aversion utility.
                                                  h    i ³ Under
                                                              ´     the utility
function (4.22), the real exchange rate is qt = 1−θ  θ
                                                           xt
                                                           yt
                                                                . Substituting    ⇐(87)
                                                                           x
this into (4.36), the inverse of the gross inßation rate is PPt+1
                                                                t
                                                                   = MMt+1
                                                                        t   t+1
                                                                            xt
                                                                                .
Together, these expressions can be used to rewrite the equity pricing
equations as
                            "µ          ¶(1−γ) Ã                !#
              et                 Ct+1              Mt    et+1
                 = βEt                                 +             ,        (4.37)
              xt                  Ct               Mt+1 xt+1
                            "µ          ¶(1−γ) Ã                     !#
             e∗t                 Ct+1              Mt     e∗t+1
                   = βEt                               +                  .   (4.38)
            q t yt                Ct               Mt+1 qt+1 yt+1

To price nominal bonds, you are looking for the shadow price of a hypo-
thetical nominal bond such that the public willingly keeps it in zero net
supply. Let bt be the nominal price of a bond that pays one dollar at the
end of the period. The utility cost of buying the bond is u1 (cxt , cyt )bt /Pt .
118                                  CHAPTER 4. THE LUCAS MODEL

In equilibrium, this is oﬀset by the discounted expected marginal utility
of the one-dollar payoﬀ, βEt [u1 (cxt+1 , cyt+1 )/Pt+1 ]. Under the constant
relative risk aversion utility function (4.22) we have
                                "µ          ¶(1−γ)       #
                                     Ct+1            Mt
                     bt = βEt                             .          (4.39)
                                      Ct             Mt+1

If it is the nominal interest rate, then bt = (1 + it )−1 . Nominal interest
rates will be positive in all states of nature if bt < 1 and is likely to be
true when the endowment growth rate and monetary growth rates are
positive.


4.3      The Two-Money Monetary Economy
To address exchange rate issues, you need to introduce a second na-
tional currency. Let the home country money be the ‘dollar’ and the
foreign country money be the ‘euro.’ We now amend the transactions
technology to require that the home country’s x—goods can only be
purchased with dollars and the foreign country’s y—goods can only be
purchased with euros. In addition, x−dividends are paid out in dollars
and y−dividends are paid out in euros. Agents can acquire the for-
eign currency required to Þnance consumption plans during securities
market trading.
    Let Pt be the dollar price of x, Pt∗ be the euro price of y, and St
be the exchange rate expressed as the dollar price of euros. Mt is the
outstanding stock of dollars, Nt is the outstanding stock of euros and
they evolve over time according to

                  Mt = λt Mt−1 ,      and Nt = λ∗t Nt−1 ,

where (λt , λ∗t ) are exogenous random gross rates of change in M and
N.
    If the domestic household received transfers only of M , it faces for-
eign purchasing-power risk because it it also needs N to buy y-goods.
Introducing the second currency creates a new country-speciÞc risk that
households will want to hedge. The complete markets paradigm allows
markets to develop whenever there is a demand for a product. The
4.3. THE TWO-MONEY MONETARY ECONOMY                                            119

products that individuals desire are claims to future dollar and euro
transfers.5 So to develop this idea, let rt be the price of a claim to
all future dollar transfers in terms of x and rt∗ be the price to all fu-
ture euro transfers in terms of x. Let there be one perfectly divisible
claim outstanding for each of these monetary transfer streams. Let the
domestic agent hold ψMt claims on the dollar streams and ψNt claims
                                                           ∗
on the euro streams whereas the foreign agent holds ψMt        claims on
                           ∗
the dollar stream and ψNt claims on the euro stream. Initially, the
home agent is endowed with ψM = 1, ψN = 0 and the foreign agent has
  ∗        ∗
ψN   = 1, ψM = 0 which they are free to trade.
    Now to develop the problem confronting the domestic household,
note that current-period wealth consists of nominal dividends paid from
equity ownership carried over from last period, current period monetary
transfers the market value of equity and monetary transfer claims
                                             ∗
                     Pt−1               St Pt−1
             Wt =         ωxt−1 xt−1 +          ωyt−1 yt−1
                     |
                       Pt
                                      {z
                                           Pt
                                                         }
                              Dividends
                     ψMt−1 ∆Mt ψNt−1 St ∆Nt
                   +          +
                        P t          Pt
                     |         {z         }
                         Monetary Transfers
                   + ωxt−1 et + ωyt−1 e∗t + ψMt−1 rt + ψNt−1 rt∗ .           (4.40)
                       |                     {z                     }
                              Market value of securities
This wealth is then allocated to stocks, claims to future monetary trans-
fers, dollars and euros for shopping in securities market trading accord-
ing to
                                                   mt nt St
        Wt = ωxt et + ωyt e∗t + ψMt rt + ψNt rt∗ +    +      .       (4.41)
                                                   Pt    Pt
The current values of xt , yt , Mt , and Nt are revealed before trading oc-
curs so domestic households acquire the exact amount of dollars and
euros required to Þnance current period consumption plans. In equilib-
rium, we have the binding cash-in-advance constraints
                                   mt = Pt cxt ,                             (4.42)
   5
    In the real world, this type of hedge might be constructed by taking appropriate
positions in futures contracts for foreign currencies.
             120                                        CHAPTER 4. THE LUCAS MODEL

                                                    nt = Pt∗ cyt ,                        (4.43)
             which you can use to eliminate mt and nt from the allocation of current
             period wealth to rewrite (4.41) as

                                St Pt∗
                    Wt = cxt +         cyt + ωxt et + ωyt e∗t + ψMt rt + ψNt rt∗ .        (4.44)
                                 P t         |      {z      }   |      {z      }
                          |     {z       }
                                                Equity         Money transfers
                               Goods
             The consolidated budget constraint of the home individual is therefore

                          St Pt∗                                             Pt−1
                cxt +            cyt + ωxt et + ωyt e∗t + ψMt rt + ψNt rt∗ =      ωxt−1 xt−1
                           Pt                                                 Pt
                                  ∗
                            St Pt−1               ψMt−1 ∆Mt ψNt−1 St ∆Nt
                          +          ωyt−1 yt−1 +                +
                               Pt                        Pt               Pt
                                               ∗                     ∗
                          +ωxt−1 et + ωyt−1 et + ψxt−1 rt + ψyt−1 rt .                  (4.45)

             The domestic household’s problem is to maximize
                                                                         
                                                  ∞
                                                  X
                                          Et          β j u(cxt+j , cyt+j )             (4.46)
                                                 j=0


(88-92)⇒     subject to (4.45). The associated Euler equations are

                     St Pt∗
            cyt :           u1 (cxt , cyt ) = u2 (cxt , cyt ),                            (4.47)
                      Pt
                                               "                     Ã           !#
                                                                     Pt
           ωxt :     et u1 (cxt , cyt ) = βEt u1 (cxt+1 , cyt+1 )        xt + et+1 ,       (4.48)
                                                                    Pt+1
                                             "                    Ã                   !#
                      ∗                                             St+1 Pt∗       ∗
           ωyt :     et u1 (cxt , cyt ) = βEt u1 (cxt+1 , cyt+1 )            yt + et+1 , (4.49)
                                                                     Pt+1
                                             "                    Ã                 !#
                                                                    ∆Mt+1
           ψMt :     rt u1 (cxt , cyt ) = βEt u1 (cxt+1 , cyt+1 )            + rt+1 , (4.50)
                                                                     Pt+1
                                             "                    Ã                     !#
                      ∗                                             ∆Nt+1 St+1       ∗
           ψN t :    rt u1 (cxt , cyt ) = βEt u1 (cxt+1 , cyt+1 )                 + rt+1 (4.51)
                                                                                           .
                                                                        Pt+1

             The foreign agent solves the analogous problem which generate a set of
             symmetric Euler equations, do not need to be stated here.
4.3. THE TWO-MONEY MONETARY ECONOMY                                121

  We know that in equilibrium, the cash-in-advance constraints bind.
The cash-in-advance constraints for the foreign agent are
                               m∗t = Pt c∗xt ,                   (4.52)
                               n∗t = Pt∗ c∗yt                    (4.53)
In addition, we have the adding-up constraints
                                                ∗
                          1    =    ψMt + ψMt     ,
                                               ∗
                          1    =    ψNt + ψNt ,
                         xt    =    cxt + c∗xt ,
                         yt    =    cyt + c∗yt ,
                         Mt    =    mt + m∗t ,
                         Nt    =    nt + n∗t .
Together, the adding-up constraints and the cash-in-advance constraints
give a unit-velocity quantity equation for each country
                                Mt = Pt xt
                               Nt = Pt∗ yt ,
which can be used to eliminate the endogenous nominal price levels
from the Euler equations.
   The equilibrium where people are able to pool and insure against
their country-speciÞc risks is given by                             ⇐(93)
                  ∗             ∗          ∗            ∗   1
          ωxt = ωxt = ωyt = ωyt   = ψMt = ψMt = ψN t = ψNt = .
                                                            2
Both the domestic and foreign representative households own half of the
domestic endowment stream, half of the foreign endowment stream,
half of all future domestic monetary transfers and half of all future
foreign monetary transfers. In short, they split the world’s resources
in half so the pooling equilibrium supports the symmetric allocation
cxt = c∗xt = x2t and cyt = c∗yt = y2t .
    To solve for the nominal exchange rate St , we know by (4.47) that
the real exchange rate is
                    u2 (cxt , cyt )   St Pt∗   St Nt xt
                                    =        =          .        (4.54)
                    u1 (cxt , cyt )    Pt       Mt yt
        122                                 CHAPTER 4. THE LUCAS MODEL

        Rearranging (4.54) gives the nominal exchange rate
                                       u2 (cxt , cyt ) Mt yt
                                St =                         .                               (4.55)
                                       u1 (cxt , cyt ) Nt xt
        As in the monetary approach, the fundamental determinants of the
        nominal exchange rate are relative money supplies and relative GDPs.
        The two major diﬀerences are Þrst that in the Lucas model the ex-
        change rate depends on preferences (utility), and second that it does
        not depend explicitly on expectations of the future.

         The solution under constant relative risk aversion utility. Using the
        utility function (4.22), the equilibrium real exchange rate is qt = ((1 −
(94)⇒   θ)/θ)(xt /yt ). The income terms cancel out and the exchange rate is
                                             (1 − θ) Mt
                                     St =               .                                    (4.56)
                                                θ    Nt
        The Euler equations are
                               "µ          ¶(1−γ) Ã                !#
                  et                Ct+1              Mt    et+1
                     = βEt                                +             ,                    (4.57)
                  xt                 Ct               Mt+1 xt+1
                               "µ          ¶(1−γ) Ã                     !#
                  e∗t               Ct+1               Nt    e∗t+1
                       = βEt                              +                     ,            (4.58)
                 qt yt               Ct               Nt+1 qt+1 yt+1
                               "µ          ¶(1−γ) Ã                  !#
                  rt                Ct+1              ∆Mt+1 rt+1
                     = βEt                                  +               ,                (4.59)
                  xt                 Ct                Mt+1   xt+1
                               "µ          ¶(1−γ) Ã                                 !#
                  rt∗               Ct+1              1 − θ ∆Nt+1  r∗
                      = βEt                                       + t+1                  .   (4.60)
                  xt                 Ct                 θ Nt+1     xt+1
            Just as you can calculate the equilibrium price of nominal bonds
        even though they are not traded in equilibrium, you can compute the
        equilibrium forward exchange rate even though there is no explicit for-
        ward market. To do this, let bt be the date t dollar price of a 1-period
        nominal discount bond that pays one dollar at the beginning of period
        t+1, and let b∗t be the date t euro price of a 1-period nominal discount
        bond that pays one euro at the beginning of period t+1. By covered
        interest parity (1.2 ), the one-period ahead forward exchange rate is,
                                                  b∗
                                           Ft = St t .                                       (4.61)
                                                  bt
4.3. THE TWO-MONEY MONETARY ECONOMY                          123

The equilibrium bond prices are
                               "µ          ¶1−γ       #
                                    Ct+1          Mt
                   bt = βEt                            ,   (4.62)
                                     Ct           Mt+1
                               "µ          ¶1−γ       #
                                    Ct+1           Nt
                   b∗t = βEt                           .   (4.63)
                                     Ct           Nt+1
124                             CHAPTER 4. THE LUCAS MODEL


               Table 4.1: Notation for the Lucas Model

 x      The domestic good.
 y      The foreign good.
 q      Relative price of y in terms of x.
 cx     Home consumption of home good.
 cy     Home consumption of foreign good.
 C      Domestic Cobb-Douglas consumption index, cθx c(1−θ)y     .
 C∗     Foreign Cobb-Douglas consumption index, c∗θ     c∗(1−θ)
                                                       x y      .
 c∗x    Foreign consumption of home good.
 c∗y    Foreign consumption of foreign good.
 ωx     Shares of home Þrm held by home agent.
 ωy     Shares of foreign Þrm held by home agent.
 ωx∗    Shares of home Þrm held by foreign agent.
 ωy∗    Shares of foreign Þrm held by foreign agent.
 s      Nominal exchange rate. Dollar price of euro.
 e      Price of home Þrm equity in terms of x.
 e∗     Price of foreign Þrm equity in terms of x.
 P      Nominal Price of x in dollars.
 P∗     Nominal Price of y in euros.
 M      Dollars in circulation.
 N      Euros in circulation.
 λt     Rate of growth of M .
 λ∗t    Rate of growth of N.
 m      Dollars held by domestic household.
 m∗     Dollars held by foreign household.
 n      Euros held by domestic household.
 n∗     Euros held by foreign household.
 rt     Price of claim to future dollar transfers in terms of x.
 rt∗    Price of claim to future euro transfers in terms of x.
 ψMt    Shares of dollar transfer stream held by home agent.
 ψNt    Shares of euro transfer stream held by home agent.
    ∗
 ψMt    Shares of dollar transfer stream held by foreign agent.
    ∗
 ψNt    Shares of euro transfer stream held by foreign agent.
 bt     Price of one-period nominal bond with one-dollar payoﬀ.
4.4. INTRODUCTION TO THE CALIBRATION METHOD                                     125

4.4         Introduction to the Calibration Method
The Lucas model plays a central role in asset-pricing research. Chap-
ter 6 covers some tests of its predictions using time-series economet-
ric methods. At this point we introduce an alternative and popular
methodology called calibration. In the calibration method, the re-
searcher simulates the model given ‘reasonable’ values to the under-
lying taste and technology parameters and looks to see whether the
simulated observations match various features of the real-world data.
    Because there is no capital accumulation or production, the technol-
ogy in the Lucas model is a stochastic process governing the evolution
of xt and yt . The reasonably simple mechanics underlying the model
makes its calibration relatively straightforward. Our work here will set
the stage for the next chapter as real business cycle researchers rely
heavily on the calibration method to evaluate the performance of their
models.
    Cooley and Prescott [33] set out the ingredients of the calibration
method proceeds as follows.

  1. Obtain a set of measurements from real-world data that we want
     to explain. These are typically a set of sample moments such
     as the mean, the standard deviation, and autocorrelations of
     a time-series. Special emphasis is often placed on the cross-
     correlations between two series which measure the extent of their
     co-movements.

  2. Solve and calibrate a candidate model. That is, assign values to
     the deep parameters of tastes (the utility function) and technol-
     ogy (the production function) that make sense or that have been
     estimated by others.

  3. Run (simulate) the model by computer and generate time-series
     of the variables that we want to explain.

  4. Decide whether the computer generated time-series implied by
     the model ‘look like’ the observations that you want to explain.6
  6
      The standard analysis is not based on classical statistical inference, although
126                                   CHAPTER 4. THE LUCAS MODEL

4.5       Calibrating the Lucas Model
Measurement. The measurements that we ask the Lucas model to
match are the volatility (standard deviation) and Þrst-order autocorre-
lation of the gross rate of depreciation, St+1 /St , the forward premium
Ft /St , the realized forward proÞt (Ft − St+1 )/St , and the slope coeﬃ-
cient from regressing the gross depreciation on the forward premium.
Using quarterly data for the U.S. and Germany from 1973.1 to 1997.1,
the measurements are given in the row labeled ‘data’ in Table 4.2.


       Table 4.2: Measured and Implied Moments, US-Germany

                              Volatility                 Autocorrelation
                       St+1      Ft     (Ft −St+1 )   St+1     Ft     (Ft −St+1 )
        Slope           St       St          St        St      St          St
  Data -0.293 0.060 0.008                  0.061      0.007 0.888      0.026
  Model -1.444 0.014 0.006                 0.029      0.105 0.006      0.628

Note: Model values generated with γ = 10, θ = 0.5.


    The implied forward and spot exchange rates exhibit the so-called
forward premium puzzle–that the forward premium predicts the fu-
ture depreciation, but with a negative sign. Recall that the uncovered
interest parity condition implies that the forward premium predicts the
future depreciation with a coeﬃcient of 1. The depreciation and the
realized proÞt exhibit volatility of similar magnitude which is much
larger than the volatility of the forward premium. All three series ex-
hibit substantial serial dependence.

Calibration. Let random variables be denoted with a ‘tilde.’ The ‘tech-
nology’ that underlies the model are the exogenous monetary growth
rates λ̃, λ̃∗ , and the exogenous output growth rates g̃, g̃ ∗ . Let the state
vector be φ̃ = (λ̃, λ̃∗ , g̃, g̃ ∗ ). The process governing the state vector is a
Þnite-state Markov chain with stationary probabilities (see the chapter

Cecchetti et.al. [24], Burnside [18], Gregory and Smith [67] show how calibration
methods can be combined with classical statistical inference, but the practice has
not caught on.
4.5. CALIBRATING THE LUCAS MODEL                                            127

appendix). Each element of the state vector is allowed to be in either
of one of two possible states—high and low. A ‘1’ subscript indicates
that the variable is in the high growth state and a ‘2’ subscript indi-
cates that the variable is in the low growth state. Therefore, λ = λ1
indicates high domestic money growth, λ = λ2 indicates low domestic
money growth. Analogous designations hold for the other variables.
The 16 possible states of the world are

 φ1 = (λ1 , λ∗1 , g1 , g1∗ )                φ9 = (λ2 , λ∗1 , g1 , g1∗ )
 φ2 = (λ1 , λ∗1 , g1 , g2∗ )               φ10 = (λ2 , λ∗1 , g1 , g2∗ )
 φ3 = (λ1 , λ∗1 , g2 , g1∗ )               φ11 = (λ2 , λ∗1 , g2 , g1∗ )
 φ4 = (λ1 , λ∗1 , g2 , g2∗ )               φ12 = (λ2 , λ∗1 , g2 , g2∗ )
 φ5 = (λ1 , λ∗2 , g1 , g1∗ )               φ13 = (λ2 , λ∗2 , g1 , g1∗ )
 φ6 = (λ1 , λ∗2 , g1 , g2∗ )               φ14 = (λ2 , λ∗2 , g1 , g2∗ )
 φ7 = (λ1 , λ∗2 , g2 , g1∗ )               φ15 = (λ2 , λ∗2 , g2 , g1∗ )
 φ8 = (λ1 , λ∗2 , g2 , g2∗ )               φ16 = (λ2 , λ∗2 , g2 , g2∗ ).
 We will denote the 16 × 16 probability transition matrix for the state
by P, where pij = P[φ̃t+1 = φj |φ̃t = φi ] the ij−th element.
    The price of the domestic and foreign currency bonds are,
               θ    ∗(1−θ)                                  ∗(1−θ)
bt = βEt [(gt+1   gt+1 )1−γ ]/λt+1 , and b∗t = βEt [(gt+1
                                                        θ
                                                          gt+1 )1−γ ]/λ∗t+1 ,
under the constant relative risk aversion utility function (4.22). Since
their values depend on the state of the world, we say that these are
state-contingent bond prices. Next, deÞne G = [(g θ g ∗(1−θ) )1−γ ]/λ and
G∗ = [(g θ g ∗(1−θ) )1−γ ]/λ∗ , and let d = λ/λ∗ be the gross rate of depre-
ciation of the home currency. The possible values of G and G∗ and d
are given in Table 4.3,
    Suppose the current state is φk . By (4.56), the spot exchange rate
is given by (1 − θ)dk /θ. The domestic bond price is
        P                                                  P16
bk = β 16                                            ∗                   ∗
           i=1 pk,i Gi , the foreign bond price is bk = β Pi=1 pk,i Gi , the
expected gross change in the nominal exchange rate is 16       i=1 pk,i di , and
the state-k contingent risk premium is
                                  16             P
                                  X           ( 16 pk,i G∗i )
                           rpk =     pk,i di − Pi=1           .
                                 i=1          ( 16
                                                i=1 pk,i Gi )

   Next, we must estimate the probability transition matrix. The Þrst
question is whether we should use consumption data or GDP? In the
128                                CHAPTER 4. THE LUCAS MODEL


                     Table 4.3: Possible State Values
            ∗(1−θ)                          ∗(1−θ)
 G1 = [(g1θ g1     )1−γ ]/λ1   G∗1 = [(g1θ g1      )1−γ ]/λ∗1     d1 = λ1 /λ∗1
             ∗(1−θ) 1−γ                     ∗(1−θ) 1−γ
 G2 = [(g1θ g2     ) ]/λ1      G∗2 = [(g1θ g2      ) ]/λ∗1        d2 = λ1 /λ∗1
          θ ∗(1−θ) 1−γ                      ∗(1−θ) 1−γ
 G3 = [(g2 g1      ) ]/λ1      G∗3 = [(g2θ g1      ) ]/λ∗1        d3 = λ1 /λ∗1
          θ ∗(1−θ) 1−γ                      ∗(1−θ) 1−γ
 G4 = [(g2 g2      ) ]/λ1      G∗4 = [(g2θ g2      ) ]/λ∗1        d4 = λ1 /λ∗1
          θ ∗(1−θ) 1−γ                      ∗(1−θ) 1−γ
 G5 = [(g1 g1      ) ]/λ1      G∗5 = [(g1θ g1      ) ]/λ∗2        d5 = λ1 /λ∗2
          θ ∗(1−θ) 1−γ                      ∗(1−θ) 1−γ
 G6 = [(g1 g2      ) ]/λ1      G∗6 = [(g1θ g2      ) ]/λ∗2        d6 = λ1 /λ∗2
          θ ∗(1−θ) 1−γ                      ∗(1−θ)
 G7 = [(g2 g1      ) ]/λ1      G∗7 = [(g2θ g1      )1−γ ]/λ∗2     d7 = λ1 /λ∗2
          θ ∗(1−θ) 1−γ                      ∗(1−θ)
 G8 = [(g2 g2      ) ]/λ1      G∗8 = [(g2θ g2      )1−γ ]/λ∗2     d8 = λ1 /λ∗2
          θ ∗(1−θ) 1−γ                      ∗(1−θ)
 G9 = [(g1 g1      ) ]/λ2      G∗9 = [(g1θ g1      )1−γ ]/λ∗1     d9 = λ2 /λ∗1
           θ ∗(1−θ) 1−γ                       ∗(1−θ) 1−γ
 G10 = [(g1 g2      ) ]/λ2     G∗10 = [(g1θ g2       ) ]/λ∗1      d10 = λ2 /λ∗1
           θ ∗(1−θ) 1−γ                       ∗(1−θ) 1−γ
 G11 = [(g2 g1      ) ]/λ2     G∗11 = [(g2θ g1       ) ]/λ∗1      d11 = λ2 /λ∗1
           θ ∗(1−θ) 1−γ                       ∗(1−θ) 1−γ
 G12 = [(g2 g2      ) ]/λ2     G∗12 = [(g2θ g2       ) ]/λ∗1      d12 = λ2 /λ∗1
           θ ∗(1−θ) 1−γ                       ∗(1−θ) 1−γ
 G13 = [(g1 g1      ) ]/λ2     G∗13 = [(g1θ g1       ) ]/λ∗2      d13 = λ2 /λ∗2
           θ ∗(1−θ) 1−γ                       ∗(1−θ) 1−γ
 G14 = [(g1 g2      ) ]/λ2     G∗14 = [(g1θ g2       ) ]/λ∗2      d14 = λ2 /λ∗2
           θ ∗(1−θ) 1−γ                       ∗(1−θ) 1−γ
 G15 = [(g2 g1      ) ]/λ2     G∗15 = [(g2θ g1       ) ]/λ∗2      d15 = λ2 /λ∗2
           θ ∗(1−θ) 1−γ                       ∗(1−θ)
 G16 = [(g2 g2      ) ]/λ2     G∗16 = [(g2θ g2       )1−γ ]/λ∗2   d16 = λ2 /λ∗2


Lucas model, consumption equals GDP so there is no theoretical pre-
sumption as to which series we should use. Since prices depend on
utility which depends on consumption. From this perspective, it makes
sense to use consumption data which is what we do. The consumption
and money data are from the International Financial Statistics and are
in per capita terms.
    The next question is what estimation technique to use? Using gener-
alized method of moments or simulated method of moments (see chap-
ter 2.2.2 and chapter 2.2.3) to estimate the transition matrix might be
good choices if the dimensionality of the problem were smaller. Since
we don’t have a very long time span of data, it turns out that esti-
mating the transition probability matrix P by GMM or by the SMM
does not work well. Instead, we ‘estimate’ the transition probabilities
by counting the relative frequency of the transition events.
    Let’s classify the growth rate of a variable as being high-growth
4.5. CALIBRATING THE LUCAS MODEL                                                            129

whenever it lies above its sample mean and in the low-growth state
otherwise. Then set high-growth states λ1 , λ∗1 , g1 , and g1∗ to the average
of the high-growth rates found in the data. Similarly, assign the low-
growth states λ2 , λ∗2 , g2 , and g2∗ to the average of the low-growth rates
found in the data. Using per capita consumption and money data for
the US and Germany, and viewing the US as the home country, the
estimates of the high and low state values are
     λ1 = 1.010—average US money growth good state,
     λ2 = 0.990—average US money growth bad state,
     λ∗1 = 1.011—average German money growth good state,
     λ∗2 = 0.991—average German money growth bad state,
     g1 = 1.009—average US consumption growth good state,
     g2 = 0.998—average US consumption growth bad state,
     g1∗ = 1.012—average German consumption growth good state,
     g2∗ = 0.993—average German consumption growth bad state.
Now classify the data into the φ states according to whether the obser-
vations lie above or below the mean then set the transition probabili-
ties pjk equal to the relative frequency of transitions from state φj to
φk found in the data. The P estimated in this fashion, rounded to 2
signiÞcant digits, is
                                                                                                
  .00   .00   .20   .00   .40   .00   .00   .00   .20   .00   .00   .00   .20   .00   .00    .00
 .20   .20   .20   .20   .00   .20   .00   .00   .00   .00   .00   .00   .00   .00   .00    .00 
                                                                                                
 .17   .17   .00   .17   .17   .00   .00   .00   .00   .00   .00   .00   .00   .00   .17    .17 
                                                                                                
 .00   .00   .00   .00   .17   .00   .00   .00   .00   .17   .33   .17   .00   .00   .17    .00 
                                                                                                
 .08   .08   .08   .08   .15   .08   .08   .08   .15   .08   .08   .00   .00   .00   .00    .00 
                                                                                                
 .20   .00   .00   .00   .20   .00   .00   .00   .00   .00   .20   .00   .00   .20   .20    .00 
                                                                                                
 .00   .00   .00   .20   .40   .00   .00   .20   .00   .00   .00   .00   .20   .00   .00    .00 
                                                                                                
 .25   .00   .00   .00   .00   .50   .00   .00   .00   .00   .00   .00   .00   .00   .00    .25 
                                                                                                
 .00   .14   .00   .00   .00   .00   .14   .00   .14   .14   .00   .00   .00   .14   .14    .14 
                                                                                                
 .00   .00   .00   .00   .00   .00   .25   .00   .25   .00   .00   .25   .25   .00   .00    .00 
                                                                                                
 .00   .00   .20   .00   .20   .00   .00   .00   .20   .20   .00   .20   .00   .00   .00    .00 
                                                                                                
 .00   .25   .00   .25   .25   .00   .00   .00   .00   .00   .00   .00   .00   .25   .00    .00 
                                                                                                
 .00   .00   .00   .00   .13   .00   .00   .13   .13   .00   .13   .13   .25   .00   .13    .00 
                                                                                                
 .00   .00   .20   .00   .00   .00   .00   .00   .00   .00   .00   .00   .20   .00   .40    .20 
                                                                                                
 .00   .00   .00   .00   .25   .00   .25   .13   .00   .00   .00   .00   .13   .13   .00    .13 
  .00   .00   .00   .20   .00   .20   .00   .00   .00   .00   .00   .00   .20   .20   .20    .00

Results. We set the share of home goods in consumption to be θ = 1/2,
the coeﬃcient of relative risk aversion to be γ = 10, and the subjective
        130                                 CHAPTER 4. THE LUCAS MODEL

        discount factor to be β = 0.99 and simulate the model as follows.
            Draw a sequence of T realizations of the gross change in the ex-
        change rate, the forward premium, and the risk premium with the
        initial state vector drawn from probabilities of the initial probability
        vector, v. Let ut be a iid uniform random variable on [0, 1]. The rule
        for determining the initial state is,

              φ1 if    ut < v1
                                   P
              φ2 if    v1 < ut < 2j=1 vj
                       P2               P3
              φ3 if       j=1 vj < ut <  j=1 vj
              ..       ..
               .        .
                       P15
              φ16 if     j=1 vj < ut < 1

           For subsequent observations, suppose that at t = 1 we are in state
        k. Then the state at t = 2 is determined by

               φ1 if   ut < pk1
                                    P
              φ2 if    pk1 < ut < 2j=1 pkj
                       P2                P3
              φ3 if       j=1 pkj < ut <  j=1 pkj
              ..       ..
               .        .
                       P15
              φ16 if     j=1 pkj < ut < 1

        Figure 4.1.A shows 97 simulated values of St+1 /St and Ft /St generated
        from the model. Notice that these two series appear to be negatively
        correlated. This certainly is not what you would expect to see if un-
        covered interest parity held. But we know from chapter 1 that market
        participation of risk-averse agents is potentially a key reason behind
        the failure of UIP.
            Figure 4.1.B shows the simulated values of the predicted forward
        payoﬀ Et (St+1 − Ft )/St and the realized payoﬀ (St+1 − Ft )/St . The
        thing to notice here is that the predicted payoﬀ or risk premium seems
        too small to explain the data. The largest predicted state contingent
(96)⇒   risk premium is actually only 0.14 percent on a quarterly basis.
            Now we generate 10000 time-series observations from the model and
        use them to calculate slope coeﬃcient, volatility, and autocorrelation
        coeﬃcients shown in the row labeled ‘model’ in Table 4.2. As can be
        seen, the implied volatility of the depreciation and of the realized proÞt
4.5. CALIBRATING THE LUCAS MODEL                                   131

is much too small. The implied persistence of the depreciation and the
forward premium is also too low to be consistent with the data.
    The model does predict that the forward rate is a biased predictor
of the future spot rate due to the presence of a risk premium. However,
the size of the implied risk premium appears to be too small to provide
an adequate explanation for the data. We study the forward premium
puzzle in greater detail in chapter 6.
132                                 CHAPTER 4. THE LUCAS MODEL




                  A. Depreciation and Forward Premium
1.02


1.01


1.00


0.99


0.98


0.97
        73   75    77    79   81    83    85    87      89   91   93   95


                   B. Ex Post Profit and Risk Premium
 0.03

 0.02

 0.01

 0.00

-0.01

-0.02

-0.03

-0.04
        73   75     77   79    81    83    85    87     89   91   93   95



Figure 4.1: From the Lucas Model. A: Implied gross one-period ahead
change in nominal exchange rate St+1 /St and current forward premium
Ft /St (in boxes). B. Implied ex post forward payoﬀ (St+1 − Ft )/St
(jagged line) and risk premium Et (St+1 − Ft )/St (smooth line).
4.5. CALIBRATING THE LUCAS MODEL                                  133


Lucas Model Summary

1. It is a ßexible-price, complete markets, dynamic general equilib-
   rium model with optimizing agents. It is logically consistent and
   provides the micro-foundations for international asset pricing.
2. The Lucas model provides a framework for pricing assets, includ-
   ing the exchange rate, in an international setting. The exchange
   rate depends on the same set of fundamental variables as pre-
   dicted by the monetary model. The empirical predictions of the
   model will be developed more fully in chapter 6.
3. There is no trading volume for any of the assets. The prices
   derived in the model are shadow values under which the existing
   stock of assets are willingly held by the agents.
4. Output is taken to be exogenous so the model not well equipped
   to explain quantities such as the current account.
5. The Lucas model is designed to help us understand the deter-
   mination of the prices of assets–exchange rates, bonds, and
   stocks–that are consistent with equilibrium choices of consump-
   tion. Because it is an endowment model, the dynamics of con-
   sumption (or alternatively output) are taken exogeneously. This
   is actually a virtue of the model since a model with production,
   while perhaps more ‘realistic,’ does not change the underlying
   asset pricing formulae which are based on the Euler equations
   for the consumer’s problem but complicates the job by forcing
   us to write down a model where equilibrium decisions of the
   Þrm generate not only realistic asset price movements but also
   realistic output dynamics. It is therefore not necessary or even
   desirable to introduce production in order to understand equi-
   librium asset pricing issues.
        134                                 CHAPTER 4. THE LUCAS MODEL

        Appendix—Markov Chains
        Let Xt be a random variable and xt be a particular realization of Xt . A
        Markov chain is a stochastic process {Xt }∞ t=0 with the property that the
        information in the current realized value of Xt = xt summarizes the entire
        past history of the process. That is,

        P[Xt+1 = xt+1 |Xt = xt , Xt−1 = xt−1 , . . . , X0 = x0 ] = P[Xt+1 = xt+1 |Xt = xt ].
                                                                                   (4.64)
        A key result that simpliÞes probability calculations of Markov chains is,

(98)⇒   Property 1 If {Xt }∞
                           t=0 is a Markov chain, then

                         P[Xt = xt ∩ Xt−1 = xt−1 ∩ · · · ∩ X0 = x0 ] =

              P[Xt = xt |Xt−1 = xt−1 ] · · · P[X1 = x1 |X0 = x0 ]P[X0 = x0 ].                  (4.65)


            Proof: Let Aj be the event (Xj = xj ). You can write the left side of
        (4.65) as,
                                              t−1
                                              \              t−1
                                                             \
        P(At ∩ At−1 ∩ · · · ∩ A0 ) = P(At |         Aj )P(         Aj ) (multiplication rule)
                                              j=0        j=0
                                                        t−1
                                                        \
                                   = P(At |At−1 )P(           Aj ) (Markov chain property)
                                                        j=0
                                                                   t−2
                                                                   \              t−2
                                                                                  \
                                   = P(At |At−1 )P(At−1 |                Aj )P(         Aj ) (mult. rule)
                                                                   j=0        j=0
                                                                             t−2
                                                                             \
                                   = P(At |At−1 )P(At−1 |At−2 )P(                  ) (Markov chain)
                                                                             j=0
                                    ..
                                     .
                                   = P(At |At−1 )P(At−1 |At−2 ) · · · P(A1 |A0 )P(A0 )


            Let λj , j = 1, . . . , N denote the possible states for Xt . A Markov chain
        has stationary probabilities if the transition probabilities from state λi to λj
        are time-invariant. That is,

                                  P[Xt+1 = λj |Xt = λi ] = pij
4.5. CALIBRATING THE LUCAS MODEL                                                135

Notice that in Markov chain analysis the Þrst subscript denotes the state
that you condition on. For concreteness, consider a Markov chain with two
possible states, λ1 and λ2 , with transition matrix,
                                            "             #
                                                p11 p12
                                       P=                     ,
                                                p21 p22

where the rows of P sum to 1.

Property 2 The transition matrix over k steps is

                                       Pk = PP · · · P}
                                            | {z
                                                   k

       Proof. For the two state process, deÞne
 (2)
pij     = P[Xt+2 = λj |Xt = λi ]
        = P[Xt+2 = λj ∩ Xt+1 = λ1 |Xt = λi ] + P[Xt+1 = λj ∩ Xt+1 = λ2 |Xt = λi ]
             2
             X
        =          P[Xt+1 = λj ∩ Xt+1 = λk |Xt = λi ]
             k=1
             P[Xt+1 = λj ∩ Xt+1 = λk ∩ Xt = λi ]
        =                                                                          (4.66)
                         P(Xt = λi )

Now by property 1, the numerator in last equality can be decomposed as,

         P[Xt+2 = λj |Xt+1 = λk ]P[Xt+1 = λk |Xt = λi ]P[Xt = λi ]            (4.67)

Substituting (4.67) into (4.66) gives,
                       2
                       X
             (2)
            pij    =         P[Xt+1 = λj |Xt+1 = λk ]P[Xt+1 = λk |Xt = λi ]
                       k=1
                       X2
                   =         pkj pik
                       k=1

which is seen to be the ij−th element of the matrix PP. The extension to
any arbitrary number of steps forward is straightforward.                ⇐(99)
         136                                  CHAPTER 4. THE LUCAS MODEL

         Problems
           1. Risk sharing in the Lucas model [Cole-Obstfeld (1991)].                Let the
              period utility function be u(cx , cy ) = θ ln cx + (1 − θ) ln cy for the
              home agent and u(c∗x , c∗y ) = θ ln c∗x + (1 − θ) ln c∗y for the foreign agent.
              Suppose That capital is internationally immobile. The home agent
              owns all of the x−endowment (φx = 1), the foreign agent owns all
              of the y−endowment (φ∗y = 1). Show that in the equilibrium under
              portfolio autarchy, trade in goods alone is suﬃcient to achieve eﬃcient
              risk sharing.
           2. Consider now the single-good model. Let xt be the home endowment
              and x∗t be the foreign endowment of the same good. The planner’s
              problem is to maximize
                                          φ ln ct + (1 − φ) ln c∗t
               subject to ct + c∗t = xt + x∗t .
               Under zero capital mobility, the home agent’s problem is to maximize
               ln(ct ) subject to ct = xt . The foreign agent maximizes ln(c∗t ) subject
               to c∗t = x∗t . Show that asset trade is necessary in this case to achieve
               eﬃcient risk sharing.
           3. Nontraded goods. Let x and y be traded as in the model of this chap-
              ter. In addition, let N be a nonstorable nontraded domestic good
              generated by an exogenous endowment, and let N ∗ be a nonstorable
(100)⇒        nontraded foreign good also generated by exogenous endowment. Let
              the domestic agent’s utility function be u(cxt , cyt , cN ) = (C 1−γ )/(1−γ)
              where C = cθx1 cθy2 cθN3 with θ1 + θ2 + θ3 = 1. The foreign agent has the
              same utility function. Show that trade in goods under zero capital
              mobility does not achieve eﬃcient risk sharing.
           4. Derive the exchange rate in the Lucas model under log utility, U (cxt , cyt ) =
(101)⇒        θ ln(cxt ) + (1 − θ) ln(cyt ) and compare it with the solution under con-
              stant relative risk aversion utility.
           5. Use the high and low growth states and the transition matrix given
(102)⇒        in section 4.5 to solve for the price-dividend ratios for equities. What
              does the Lucas model have to say about the volatility of stock prices?
              How does the behavior of equity prices in the monetary economy diﬀer
              from the behavior of equity prices in the barter economy?
Chapter 5

International Real Business
Cycles

In this chapter, we continue our study of models with perfect markets
in the absence of nominal rigidities but turn our attention understand-
ing how business cycles originate and how they are propagated and
transmitted from one country to another through current account im-
balances. For this purpose, we will study real business cycle models.
These are stochastic growth models that have been employed to address
business cycle ßuctuations. As their name suggests, real business cycle
models deal with the real side of the economy. They are Arrow—Debreu
models in which there is no role for money and their solution typically
focuses on solving the social planner’s problem.
    Analytic solutions to the stochastic growth model are available only
under special speciÞcations—for example when utility is time-separable
and logarithmic and when capital fully depreciates each period. Com-
plications beyond these very simple structures require that the model
be solved and evaluated numerically. We will work with durable cap-
ital along with the log utility speciÞcation. The resulting models are
simple enough for us to retain our intuition for what is going on but
complicated enough so that we must solve them using numerical and
approximation methods.
    Real business cycle researchers evaluate their models using the cal-
ibration method, which was outlined in chapter 4.4.4.

                                  137
138 CHAPTER 5. INTERNATIONAL REAL BUSINESS CYCLES

5.1        Calibrating the One-Sector Growth Model
We begin simply enough, with the closed economy stochastic growth
model with log utility and durable capital. Then we will construct
an international real business cycle model by piecing two one-country
models together.


Measurement
The job of real business cycle models is to explain business cycles but
the data typically contains both trend and cyclical components.1 We
will think of a macroeconomic time series such as GDP, as being built
up of the two components, yt = yτ t + yct , where yτ t is the long-run
trend component and yct is the cyclical component. Since business-
cycle theory is typically not well equipped to explain the trend, the
Þrst thing that real business cycle theorists do is to remove the non-
cyclical components by Þltering the data.
    There are many ways to Þlter out the trend component. Two very
crude methods are either to work with Þrst-diﬀerenced data or to use
least-squares residuals from a linear or quadratic trend. Most real busi-
ness cycle theorists, however choose to work with Hodrick—Prescott [76]
Þltered data. This technique, along with background information on
the spectral representation of time-series is covered in chapter 2.
    Our measurements are based on quarterly log real output, consump-
tion of nondurables plus services, and gross business Þxed investment in
per capita terms for the US from 1973.1 to 1996.4. The output measure
is GDP minus government expenditures. The raw data and Hodrick-
Prescott trends are displayed in Figure 5.1. The Hodrick-Prescott cycli-
cal components are displayed in Figure 5.2. Investment is the most
volatile of the series and consumption is the smoothest but all three
are evidently highly correlated. That is, they display a high degree of
‘co-movement.’
    Table 5.1 displays some descriptive statistics of the Þltered (cyclical
part) data. Each series displays substantial persistence and a high
degree of co-movement with output.
  1
      The data also contains seasonal and irregular components which we will ignore.
5.1. CALIBRATING THE ONE-SECTOR GROWTH MODEL 139


     0.2

     0.1                                 GDP

       0
                                                            Consumption

    -0.1

    -0.2

    -0.3                                       Investment

    -0.4

    -0.5
           73   75   77   79   81   83   85    87     89    91   93       95


Figure 5.1: US data (symbols) and trend (no symbols) from Hodrick-
Prescott Þlter. Observations are quarterly per capita logarithms of
GDP, consumption, and investment from 1973.1 to 1996.4.



The model

We will work with a version of the King, Plosser, and Rebelo [83]
model that abstracts from the labor-leisure choice. The consumer has
logarithmic period utility deÞned over the single consumption good
                                    P
u(C) = ln(C). Lifetime utility is ∞        j
                                      j=0 β u(Ct+j ), where 0 < β < 1 is
the subjective discount factor.
    The representative Þrm produces output Yt , by combining labor
Nt , and capital Kt , according to a Cobb-Douglas production function.
Individuals are compelled to provide a Þxed amount of N hours of labor
to the Þrm each period. Permanent changes to technology take place
through changes in labor productivity, Xt . The number of eﬀective
labor units is NXt . This part of technical change is assumed to evolve
exogeneously and deterministically at a gross rate of γ = Xt+1 /Xt .
A second component that governs technology is a transient stochastic
140 CHAPTER 5. INTERNATIONAL REAL BUSINESS CYCLES


      0.15

                        Investment
       0.1

                                      GDP
      0.05


         0


     -0.05


      -0.1
                                                Consumption

     -0.15
             73   75   77   79   81        83     85    87    89   91   93   95



      Figure 5.2: Hodrick-Prescott Þltered cyclical observations.


shock, At . The production function is
                            Yt = At Ktα (N Xt )1−α .
α is capital’s share. Most estimates for the US place 0.33 ≤ α ≤ 0.40.
    Output can be consumed or saved. Savings (or investment It ) are
used to replace worn capital and to augment the current capital stock.
Capital depreciates at a rate δ and evolves according to
                            Kt+1 = It + (1 − δ)Kt .
   There is no government and no foreign sector. There are also no
market imperfections so we can work with Þctitious social planner’s
problem as we did with the Lucas model.

Problem 1. The social planner wants to maximize
                                           ∞
                                           X
                                      Et         β j U(Ct+j ),                    (5.1)
                                           j=0
5.1. CALIBRATING THE ONE-SECTOR GROWTH MODEL 141


                  Table 5.1: Closed-Economy Measurements

                        Std.            Autocorrelations
                        Dev.      1       2    3      4      6
                  yt    0.022   0.86    0.66 0.46 0.27      0.02
                  ct    0.013   0.85    0.72 0.57 0.38      0.14
                  it    0.056   0.89    0.73 0.56 0.40      0.08
                           Cross correlation with yt−k at k
                    6        4      1      0    -1     -4   -6
             ct    0.09     0.20 0.72 0.87 0.87 0.46 0.14
             it    0.01     0.43 0.91 0.94 0.81 0.20 0.10

Notes: All variables are logarithms of real per capita data for the US from 1973.1
to 1996.4 and have been passed through the Hodrick—Prescott Þlter with λ = 1600.
yt is gross domestic product less government spending, ct is consumption of non-
durables plus services, and it is gross business Þxed investment. Source: Interna-
tional Financial Statistics.


                       subject to      Yt = At Ktα (NXt )1−α ,              (5.2)
                                       Kt+1 = It + (1 − δ)Kt ,              (5.3)
                                       Yt = Ct + It ,                       (5.4)
                                       U(C) = ln(C).                        (5.5)

The model allows for one normalization so you can set N = 1.
   In the steady state, you will want the economy to evolve along a
balanced growth path in which all quantities except for N grow at the
same gross rate
                         Xt+1   Yt+1   Ct+1   It+1   Kt+1
                  γ=          =      =      =      =      .
                          Xt     Yt     Ct     It     Kt
The steady state is reasonably straightforward to obtain. However, if
capital lasts more than one period, δ < 1, the dynamics of the model
must be solved by approximation methods. We’ll Þrst solve for the
steady state and then take a linear approximation of the model around
its steady state. The exogenous growth factor γ gives the model a
            142 CHAPTER 5. INTERNATIONAL REAL BUSINESS CYCLES

            moving steady state which is inconvenient. To Þx this, you can Þrst
            transform the model to get a Þxed steady state by normalizing all the
            variables by labor eﬃciency units. Let lower case letters denote these
            normalized values
                                 Yt        Kt        It        Ct
                            yt =    , kt =    , it =    , ct =    .
                                 Xt        Xt        Xt        Xt
            Dividing (5.2) by Xt gives yt = At ktα . Dividing (5.3) by Xt gives
            γkt+1 = it + (1 − δ)kt . To normalize lifetime utility (5.1), note that
            P∞     j            P∞      j    j                              P∞      j
              j=0 β ln Xt+j =     j=0 β ln(γ Xt ) = ln(Xt )/(1 − β) + ln(γ)  j=0 jβ
                                                    2
(ch.5-1)⇒   = ln(Xt )/(1 − β) + ln(γ)β/(1 − β) < ∞. Using this fact, adding
                              P                                    P
            and subtracting ∞   j=0 β j ln(Xt+j ) to (5.1) gives Et ∞    j
                                                                    j=0 β U(Ct+j ) =
                     P∞    j
            Ωt + Et j=0 β U (ct+j ) where U(c) = ln(c) and Ωt = ln(Xt )/(1 − β) +
            β ln(γ)/(1 − β)2 . Since Ωt is exogenous, we can ignore it when solving
            the planner’s problem. We will call the transformed problem, problem
            2. This is the one we will solve.

            Problem 2. It will be useful to use the notation f (At , kt ) = At k α . Since
            Ω is a constant, the social planner’s growth problem normalized by
            labor eﬃciency units is to maximize
                                                   ∞
                                                   X
                                              Et         β j U(ct+j ),              (5.6)
                                                   j=0
                               subject to     yt = f (At , kt ) = At ktα ,          (5.7)
                                              γkt+1 = it + (1 − δ)kt ,              (5.8)
                                              yt = ct + it ,                        (5.9)
                                              U (c) = ln(c).                       (5.10)
            It will be useful to compactify the notation. Let λt = (kt+1 , kt , At )0 and
            combine the constraints (5.7)—(5.9) to form the consolidated budget
            constraint
                          ct = g(λt ) = f (At , kt ) − γkt+1 + (1 − δ)kt
                                      = At ktα − γkt+1 + (1 − δ)kt .               (5.11)
            Under Cobb-Douglas production and log utility, you have
                              αy                 y        1       −1
                       fk =      , fkk = α(α − 1) 2 , uc = , ucc = 2 .
                              k                  k        c        c
5.1. CALIBRATING THE ONE-SECTOR GROWTH MODEL 143

Letting gj = ∂ct /∂λjt be the partial derivative of g(λt ) with respect
to the j−th element of λt and gij = ∂ 2 ct /(∂λit ∂λjt ) be the second
cross-partial derivative, for future reference you have


                  g1 = −γ,
                  g2 = fk (A, k) + (1 − δ),
                  g3 = y/A,

                  g11 = g12 = g21 = g13 = g31 = g33 = 0,
                  g22 = fkk (A, k),
                  g23 = g32 = αk α−1 .

   Now substitute (5.11) into (5.6) to transform the constrained opti-
mization problem into an unconstrained problem. You want to maxi-
mize                        ∞     X
                             Et         β j u[g(λt+j )],              (5.12)
                                  j=0

where g(λt ) is given in (5.11). At date t, kt is pre-determined and the
only choice variable is it and choosing it is equivalent to choosing kt+1 .
The Þrst-order conditions for all t are

      −γuc (ct ) + βEt uc (ct+1 )[fk (At+1 , kt+1 ) + (1 − δ)] = 0.   (5.13)

Notice that ct must obey the consolidated budget constraint (5.11). It
follows that (5.13) is a nonlinear stochastic diﬀerence equation in kt .
Analytic solutions to such equations are not easy to obtain so we resort
to approximation methods.

The Steady State
We will compute the approximate solution around the model’s steady
state. In order to do that we need Þrst to Þnd the steady state. Denote
steady state values of output, consumption, investment and capital
y, c, i, k without the time subscript and let the steady state value of
A = 1.
    Since fk = αk α−1 = α(y/k), (5.13) becomes γ = β[α(y/k) +
(1 − δ)] from which we obtain the steady state output to capital ratio
144 CHAPTER 5. INTERNATIONAL REAL BUSINESS CYCLES

y/k = (γ/β + δ − 1)/α. Now divide the production function (5.7) by k
and re-arrange to get k = (y/k)1/(α−1) = [(γ/β + δ − 1)/α]1/(α−1) . Now
that we know k, we can get y. From the accumulation equation (5.8),
we have i/k = γ + δ − 1, and in turn, c/k = y/k − i/k. Again, given k,
we can solve for c. To summarize, in the steady state we have

                       y/k     =   (γ/β + δ − 1)/α,                   (5.14)
                       i/k     =   γ + δ − 1,                         (5.15)
                       c/k     =   y/k − i/k,                         (5.16)
                         k     =   (y/k)1/(α−1) .                     (5.17)




Calibrating the Model
Each time period corresponds to a quarter. We set α = 0.33,
β = 0.99, δ = 0.10, γ = 1.0038.2 The transient technology shock
evolves according to the Þrst-order autoregression

                        At = (1 − ρ) + ρAt−1 + ²t ,                   (5.18)
                         iid
where ρ = 0.93, and ²t ∼ N(0, 0.0102242 ).

Approximate Solution Near the Steady State.
Many methods have been applied to solve real business cycle models.
One option for solving the model is to take a Þrst—order Taylor expan-
sion of the nonlinear Þrst—order condition (5.13) in the neighborhood
around the steady state.3 .   This yields the second—order stochastic
diﬀerence equation in kt − k

a0 +a1 (kt+2 −k)+a2 (kt+1 −k)+a3 (kt −k)+a4 (At+1 −1)+a5 (At −1) = 0,
                                                               (5.19)
  2
     This is the depreciation rate used by Backus et. al. [5].    Cooley and
Prescott [33] recommend δ = 0.048. γ is the value used by Cooley and Prescott
and King et. al..
   3
     This is the method of King, Plosser, and Rebelo [83]
5.1. CALIBRATING THE ONE-SECTOR GROWTH MODEL 145

               where    a0   =    Uc g1 + βUc g2 = 0,
                        a1   =    βUcc g1 g2 ,
                        a2   =    Ucc g12 + βUcc g22 + βUc g22 ,
                        a3   =    Ucc g1 g2 ,
                        a4   =    βUc g32 + βUcc g2 g3 ,
                        a5   =    Ucc g1 g3 .

The derivatives are evaluated at steady state values.
    A second but equivalent option is to take a second—order Taylor
approximation to the objective function around the steady state and to
solve the resulting quadratic optimization problem. The second option
is equivalent to the Þrst because it yields linear Þrst—order conditions
around the steady state. To pursue the second option, recall that λt =
(kt+1 , kt , At )0 . Write the period utility function in the unconstrained
optimization problem as

                             R(λt ) = U [g(λt )].                   (5.20)

Let Rj = ∂R(λt )/∂λjt be the partial derivative of R(λt ) with respect
to the j−th element of λt and Rij = ∂ 2 R(λt )/(∂λit ∂λjt ) be the second
cross-partial derivative. Since Rij = Rji the relevant derivatives are,


                         R1 = Uc g1 ,
                         R2 = Uc g2 ,
                         R3 = Uc g3 ,

                         R11 = Ucc g12 ,
                         R22 = Ucc g22 , +Uc g22
                         R33 = Ucc g32 ,
                         R12 = Ucc g1 g2 ,
                         R13 = Ucc g1 g3 ,
                         R23 = Ucc g2 g3 + Uc g23 .

The second-order Taylor expansion of the period utility function is
                                                           1
R(λt ) = R(λ) + R1 (kt+1 − k) + R2 (kt − k) + R3 (At − A) + R11 (kt+1 − k)2
                                                           2
146 CHAPTER 5. INTERNATIONAL REAL BUSINESS CYCLES

             1                1
            + R22 (kt − k)2 + R33 (At − A)2 + R12 (kt+1 − k)(kt − k)
             2                2
            +R13 (kt+1 − k)(At − A) + R23 (kt − k)(At − A).

Suppose we let q = (R1 , R2 , R3 )0 be the 3 × 1 row vector of partial
derivatives (the gradient) of R, and Q be the 3 × 3 matrix of second
partial derivatives (the Hessian) multiplied by 1/2 where Qij = Rij /2.
Then the approximate period utility function can be compactly written
in matrix form as

                R(λt ) = R(λ) + [q + (λt − λ)0 Q](λt − λ).           (5.21)

The problem is now to maximize
                                  ∞
                                  X
                             Et         β j R(λt+j ).                (5.22)
                                  j=0


The Þrst order conditions are for all t

0 = (βR2 + R1 ) + βR12 (kt+2 − k) + (R11 + βR22 )(kt+1 − k) + R12 (kt − k)
    +βR23 (At+1 − 1) + R13 (At − 1).                                (5.23)

If you compare (5.23) to (5.19), you’ll see that a0 = βR2 + R1 ,
a1 = βR12 , a2 = R11 + βR22 , a3 = R12 , a4 = βR23 , a5 = R13 . This
veriÞes that the two approaches are indeed equivalent.
    Now to solve the linearized Þrst-order conditions, work with (5.19).
Since the data that we want to explain are in logarithms, you can con-
vert the Þrst-order conditions into near logarithmic form.               Let
ãi = kai for i = 1, 2, 3, and let a “hat” denote the approximate log
diﬀerence from the steady state so that k̂t = (kt − k)/k ' ln(kt /k)
and Ât = At − 1 (since the steady state value of A = 1). Now let
b1 = −ã2 /ã1 , b2 = −ã3 /ã1 , b3 = −a4 /ã1 , and b4 = −a4 /ã1 .
    The second—order stochastic diﬀerence equation (5.19) can be writ-
ten as
                        (1 − b1 L − b2 L2 )k̂t+1 = Wt ,               (5.24)
where
                           Wt = b3 Ât+1 + b4 Ât .
5.1. CALIBRATING THE ONE-SECTOR GROWTH MODEL 147

    The roots of the polynomial (1 − b1 z − b2 z 2 ) = (1 − ω1 L)(1 − ω2 L)
satisfy b1 = ω1 + ω2 and b2 = −ω1 ω2 . Using the quadratic formula
and evaluating at the parameter values thatq we used to calibrate the
model, the roots are, z1 = (1/ω1 ) = [−b1 − b21 + 4b2 ]/(2b2 ) ' 1.23, and
                          q
z2 = (1/ω2 ) = [−b1 + b21 + 4b2 ]/(2b2 ) ' 0.81. There is a stable root,
|z1 | > 1 which lies outside the unit circle, and an unstable root, |z2 | < 1
which lies inside the unit circle. The presence of an unstable root means
that the solution is a saddle path. If you try to simulate (5.24) directly,
the capital stock will diverge.
     To solve the diﬀerence equation, exploit the certainty equivalence
property of quadratic optimization problems. That is, you Þrst get
the perfect foresight solution to the problem by solving the stable root
backwards and the unstable root forwards. Then, replace future ran-
dom variables with their expected values conditional upon the time-t
information set. Begin by rewriting (5.24) as

            Wt = (1 − ω1 L)(1 − ω2 L)k̂t+1
               = (−ω2 L)(−ω2−1 L−1 )(1 − ω2 L)(1 − ω1 L)k̂t+1
               = (−ω2 L)(1 − ω2−1 L−1 )(1 − ω1 L)k̂t+1 ,

and rearrange to get
                                   −ω2−1 L−1
             (1 − ω1 L)k̂t+1    =              Wt
                                  1 − ω2−1 L−1
                                    µ        ¶ ∞ µ ¶j
                                      1 −1 X       1
                                = −      L            Wt+j
                                      ω2       j=0 ω2
                                         ∞ µ  ¶
                                         X   1 j
                                = −                 Wt+j .                 (5.25)
                                         j=1   ω2

The autoregressive speciÞcation (5.18) implies the prediction formulae

            Et Wt+j = b3 Et Ât+j+1 + b4 Et Ât+j = [b3 ρ + b4 ]ρj Ât .

Use this forecasting rule in (5.25) to get
 ∞ µ  ¶                                  ∞ µ  ¶        "         #
 X   1 j                                 X   ρ j          ρ
             Et Wt+j = [b3 ρ + b4 ]Ât               =        (b3 ρ + b4 )Ât .
 j=1   ω2                                j=1   ω2      ω2 − ρ
148 CHAPTER 5. INTERNATIONAL REAL BUSINESS CYCLES

It follows that the solution for the capital stock is
                                     "        #
                                        ρ
                    k̂t+1 = ω1 k̂t −        [b3 ρ + b4 ]Ât .               (5.26)
                                     ω2 − ρ

     To recover ŷt , note that the Þrst-order expansion of the produc-
tion function gives yt = f (A, k) + fA Ât + fk k k̂t , where fA = 1, and
fk = (αy)/k. Rearrangement gives ŷt = Ât + k̂t . To recover ît , subtract
the steady state value γk = i + (1 − δ)k from (5.8) and rearrange to get
ît = (k/i)[γ k̂t+1 − (1 − δ)k̂t ]. Finally, get ĉt = ŷt − ît from the adding-up
constraint (5.9). The log levels of the variables can be recovered by

                       ln(Yt )   =   ŷt + ln(Xt ) + ln(y),
                      ln(Ct )    =   ĉt + ln(Xt ) + ln(c),
                       ln(It )   =   ît + ln(Xt ) + ln(i),
                      ln(Xt )    =   ln(X0 ) + t ln(γ).



Simulating the Model
We’ll use the calibrated model to generate 96 time-series observations
corresponding to the number of observations in the data. From these
pseudo-observations, recover the implied log-levels and pass them through
the Hodrick-Prescott Þlter. The steady state values are

             y = 1.717, k = 5.147, c = 1.201, i/k = 0.10.

Plots of the Þltered log income, consumption, and investment observa-
tions are given in Figure 5.3 and the associated descriptive statistics are
given in Table 5.2. The autoregressive coeﬃcient and the error variance
of the technology shock were selected to match the volatility of output
exactly. From the Þgure, you can see that both consumption and in-
vestment exhibit high co-movements with output, and all three series
display persistence. However from Table 5.2 the implied investment
series is seen to be more volatile than output but is less volatile than
that found in the data. Consumption implied by the model is more
volatile than output, which is counterfactual.
5.2. CALIBRATING A TWO-COUNTRY MODEL                                              149


      0.05



          0


                   GDP (broken)
      -0.05                                    Consumption


       -0.1



      -0.15                                 Investment


       -0.2
              73     75   77      79   81     83    85   87   89   91   93   95



Figure 5.3: Hodrick-Prescott Þltered cyclical observations from the
model. Investment has been shifted down by 0.10 for visual clarity.



   This coarse overview of the one sector real business cycle model
shows that there are some aspects of the data that the model does not
explain. This is not surprising. Perhaps it is more surprising is how
well it actually does in generating ‘realistic’ time series dynamics of the
data. In any event, this perfect markets—no nominal rigidities Arrow-
Debreu model serves as a useful benchmark against which reÞnements
can be judged.


5.2       Calibrating a Two-Country Model
We now add a second country. This two-country model is a special
case of Backus et. al. [5]. Each county produces the same good so we
will not be able to study terms of trade or real exchange rate issues.
The presence of country-speciÞc idiosyncratic shocks give an incentive
to individuals in the two countries to trade as a means to insure each
150 CHAPTER 5. INTERNATIONAL REAL BUSINESS CYCLES


            Table 5.2: Calibrated Closed-Economy Model

                         Std.      Autocorrelations
                        Dev.    1    2    3     4   6
                 yt     0.022 0.90 0.79 0.67 0.53 0.23
                 ct     0.023 0.97 0.89 0.77 0.63 0.31
                 it     0.034 0.70 0.50 0.36 0.19 -0.04
                             Cross correlation with yt−k at k
                       6       4      1      0    -1     -4   -6
            ct        0.49    0.77 0.96 0.90 0.79 0.33 0.04
            it        0.29    0.11 0.41 0.74 0.73 0.61 0.44



other against a bad relative technology shock so we can examine the
behavior of the current account.


Measurement
We will call the Þrst country the ‘US,’ and second country ‘Europe.’
The data for European output, government spending, investment, and
consumption are the aggregate of observations for the UK, France, Ger-
many, and Italy. The aggregate of their current account balances suf-
fer from double counting and does not make sense because of intra-
European trade. Therefore, we examine only the US current account,
which is measured as a fraction of real GDP.
    Table 5.3 displays the features of the data that we will attempt to
explain–their volatility, persistence (characterized by their autocorre-
lations) and their co-movements (characterized by cross correlations).
Notice that US and European consumption correlation is lower than
the their output correlation.


The Two-Country Model
Both countries experience identical rates of depreciation of physical
                                                    ∗
capital, long-run technological growth Xt+1 /Xt = Xt+1 /Xt∗ = γ, have
5.2. CALIBRATING A TWO-COUNTRY MODEL                                         151


                 Table 5.3: Open-Economy Measurements

                        Std.                  Autocorrelations
                        Dev.           1       2    3      4   6
                ext     0.01          0.61    0.50 0.40 0.40 0.12
                yt∗     0.014         0.84    0.62 0.36 0.15 -0.15
                 c∗t    0.010         0.68    0.47 0.30 0.04 -0.15
                 i∗t    0.030         0.89    0.75 0.57 0.40 0.07
                               Cross correlations at lag k
                         6     4     1      0     -1     -4 6
          yt ext−k      0.43 0.42 0.41 0.41 0.37 0.03 0.32
                ∗
           yt yt−k      0.28 0.22 0.21 0.36 0.43 0.36 0.22
           ct c∗t−k     0.26 0.39 0.28 0.25 0.05 0.15 0.26

Notes: ext is US net exports divided by GDP. Foreign country aggregates data from
France, Germany, Italy, and the UK. All variables are real per capita from 1973.1
to 1996.4 and have been passed through the Hodrick—Prescott Þlter with λ = 1600.



the same capital shares and Cobb-Douglas form of the production func-
tion, and identical utility. Let the social planner attach a weight of ω to
the domestic agent and a weight of 1 − ω to the foreign agent. In terms
of eﬃciency units, the social planner’s problem is now to maximize
                            ∞
                            X
                       Et         β j [ωU (ct+j ) + (1 − ω)U (c∗t+j )],   (5.27)
                            j=0

subject to,
                                  yt = f(At , kt ) = At ktα ,             (5.28)
                                 yt∗ = f(A∗t , kt∗ ) = A∗t kt∗α ,         (5.29)
                              γkt+1 = it + (1 − δ)kt ,                    (5.30)
                                ∗
                              γkt+1  = i∗t + (1 − δ)kt∗ ,                 (5.31)
                            yt + yt∗ = ct + c∗t + (it + i∗t ).            (5.32)
In the market economy interpretation, we can view ω to indicate the
size of the home country in the world economy. (5.28) and (5.29) are the
152 CHAPTER 5. INTERNATIONAL REAL BUSINESS CYCLES

Cobb—Douglas production functions for the home and foreign counties,
with normalized labor input N = N ∗ = 1. (5.30) and (5.31) are the
domestic and foreign capital accumulation equations, and (5.31) is the
new form of the resource constraint. Both countries have the same
technology but are subject to heterogeneous transient shocks to total
productivity according to
      "         #       "           #       "         #"           #       "         #
          At                1−ρ−δ               ρ δ        At−1                ²t
                    =                   +                              +                 ,   (5.33)
          A∗t               1−ρ−δ               δ ρ        A∗t−1               ²∗t
                    iid
where (²t , ²∗t )0 ∼ N(0, Σ). We set ρ = 0.906, δ = 0.088, Σ11 = Σ22 =
2.40e−4, and Σ12 = Σ21 = 6.17e−5. The contemporaneous correlation
of the innovations is 0.26.
    Apart from the objective function, the main diﬀerence between the
two-county and one-country models is the resource constraint (5.32).
World output can either be consumed or saved but a country’s net sav-
ing, which is the current account balance, can be non—zero
(yt − ct − it = −(yt∗ − c∗t − i∗t ) 6= 0).
                       ∗
    Let λt = (kt+1 , kt+1 , kt , kt∗ , At , A∗t , c∗t ) be the state vector, and indi-
cate the dependence of consumption on the state by ct = g(λt ), and
c∗t = h(λt ) (which equals c∗t trivially). Substitute (5.28)—(5.31) into
(5.32) and re-arrange to get

          ct = g(λt ) = f (At , kt ) + f (A∗t , kt∗ ) − γ(kt+1 + kt+1
                                                                  ∗
                                                                      ),
                                  ∗      ∗
               +(1 − δ)(kt + kt ) − ct                                                       (5.34)
          ct = h(λt ) = c∗t .
           ∗
                                                                                             (5.35)

For future reference, the derivatives of g and h are,


                              g1 = g2 = −γ,
                              g3 = fk (A, k) + (1 − δ),
                              g4 = fk (A∗ , k ∗ ) + (1 − δ),
                              g5 = f (A, k)/A,
                              g6 = f (A∗ , k ∗ )/A∗ ,
                              g7 = −1,
                              h1 = h2 = · · · = h6 = 0,
                              h7 = 1.
5.2. CALIBRATING A TWO-COUNTRY MODEL                                       153

   Next, transform the constrained optimization problem into an un-
constrained problem by substituting (5.34) and (5.35) into (5.27). The
problem is now to maximize
        ³                                                 ´
   ωEt u[g(λt )] + βU [g(λt+1 )] + β 2 U [g(λt+2 )] + · · ·              (5.36)
                  ³                                                ´
     +(1 − ω)Et u[h(λt )] + βU [h(λt+1 )] + β 2 U [h(λt+2 )] + · · · .
                                                                     ∗
At date t, the choice variables available to the planner are kt+1 , kt+1 ,
     ∗
and ct . Diﬀerentiating (5.36) with respect to these variables and re-
arranging results in the Euler equations
                   γUc (ct ) = βEt Uc (ct+1 )[g3 (λt+1 )],               (5.37)
                   γUc (ct ) = βEt Uc (ct+1 )[g4 (λt+1 )],               (5.38)
                    Uc (ct ) = [(1 − ω)/ω]Uc (c∗t ).                     (5.39)
(5.39) is the Pareto—Optimal risk sharing rule which sets home marginal
utility proportional to foreign marginal utility. Under log utility, home
and foreign per capita consumption are perfectly correlated,
ct = [ω/(1 − ω)]c∗t .

The Two-Country Steady State
From (5.37) and (5.38) we obtain y/k = y ∗ /k ∗ = (γ/β +δ−1)/α. We’ve
already determined that c = [ω/(1 − ω)]c∗ = ωcw where cw = c + c∗
is world consumption. From the production functions (5.28)—(5.29) we
get k = (y/k)1/(α−1) and k ∗ = (y ∗ /k ∗ )1/(α−1) . From (5.30)—(5.31) we
get i = i∗ = (γ + δ − 1)k. It follows that c = ωcw = ω[y + y ∗ − (i + i∗ )]
= 2ω[y − i].
    Thus y − c − i = (1 − 2ω)(y − i) and unless ω = 1/2, the current
account will not be balanced in the steady state. If ω > 1/2 the home
country spends in excess of GDP and runs a current account deÞcit.
How can this be? In the market (competitive equilibrium) interpreta-
tion, the excess absorption is Þnanced by interest income earned on past
lending to the foreign country. Foreigners need to produce in excess of
their consumption and investment to service the debt. In a sense, they
have ‘over-invested’ in physical capital.
    In the planning problem, the social planner simply takes away some
of the foreign output and gives it to domestic agents. Due to the
154 CHAPTER 5. INTERNATIONAL REAL BUSINESS CYCLES

concavity of the production function, optimality requires that the world
capital stock be split up between the two countries so as to equate the
marginal product of capital at home and abroad. Since technology is
identical in the 2 countries, this implies equalization of national capital
stocks, k = k ∗ , and income levels y = y ∗ , even if consumption diﬀers,
c 6= c∗ .

Quadratic Approximation
You can solve the model by taking the quadratic approximation of the
unconstrained objective function about the steady state. Let R be the
period weighted average of home and foreign utility

                     R(λt ) = ωU [g(λt )] + (1 − ω)U [h(λt )].

Let Rj = ωUc (c)gj + (1 − ω)Uc (c∗ )hj , j = 1, . . . , 7 be the Þrst partial
derivative of R with respect to the j−the element of λt . Denote the
second partial derivative of R by
        ∂R(λ)
Rjk =             = ω[Uc (c)gjk +Ucc gj gk ]+(1−ω)[Uc (c∗ )hjk +Ucc (c∗ )hj hk ].
        ∂λj ∂λk
                                                                         (5.40)
                          0
Let q = (R1 , . . . , R7 ) be the gradient vector, Q be the Hessian matrix
of second partial derivatives whose j, k−th element is Qjk = (1/2)Rj,k .
Then the second-order Taylor approximation to the period utility func-
tion is
                       R(λt ) = [q + (λt − λ)0 Q](λt − λ),
and you can rewrite (5.36) as
                             ∞
                             X
                    max Et         β j [q + (λt+j − λ)0 Q](λt+j − λ).     (5.41)
                             j=0

      Let Qj• be the j−th row of the matrix Q. The Þrst-order conditions
are

        (kt+1 ) :     0 = R1 + βR3 + Q1• (λt − λ) + βQ3• (λt+1 − λ), (5.42)
          ∗
        (kt+1 ):      0 = R2 + βR4 + Q2• (λt − λ) + βQ4• (λt+1 λ),   (5.43)
            ∗
          (ct ) :     0 = R7 + Q7• (λt − λ).                         (5.44)
5.2. CALIBRATING A TWO-COUNTRY MODEL                                                    155

Now let a ‘tilde’ denote the deviation of a variable from its steady state
value so that k̃t = kt − k and write these equations out as
                       ∗                     ∗
   0 = a1 k̃t+2 + a2 k̃t+2 + a3 k̃t+1 + a4 k̃t+1 + a5 k̃t + a6 k̃t∗ + a7 Ãt+1
            +a8 Ã∗t+1 + a9 Ãt + a10 Ã∗t + a11 c̃∗t+1 + a12 c̃∗t + a13 ,          (5.45)
                            ∗                     ∗
   0 =      b1 k̃t+2 + b2 k̃t+2 + b3 k̃t+1 + b4 k̃t+1  + b5 k̃t + b6 k̃t∗ + b7 Ãt+1
            +b8 Ã∗t+1 + b9 Ãt + b10 Ã∗t + b11 c̃∗t+1 + b12 c̃∗t + b13 ,         (5.46)
                       ∗
   0 = d3 k̃t+1 + d4 k̃t+1 + d5 k̃t + d6 k̃t∗ + d9 Ãt + d10 Ã∗t
       +d12 c̃∗t + d13 ,                                                            (5.47)

where the coeﬃcients are given by

                      j    aj                      bj           dj
                     1    βQ31                    βQ41           0
                     2    βQ32                    βQ42           0
                     3 βQ33 + Q11              βQ43 + Q21       Q71
                     4 βQ34 + Q12              βQ44 + Q22       Q72
                     5     Q13                     Q23          Q73
                     6     Q14                     Q24          Q74
                     7    βQ35                    βQ45           0
                     8    βQ36                    βQ46           0
                     9     Q15                     Q25          Q75
                     10    Q16                     Q26          Q76
                     11    Q37                     Q47           0
                     12    Q17                     Q27          Q77
                     13 R1 + βR3                R2 + βR4        R7

   Mimicking the algorithm developed for the one-country model and
using (5.47) to substitute out c∗t and c∗t+1 in (5.45) and (5.46) gives

                         ∗                       ∗
   0 = ã1 k̃t+2 + ã2 k̃t+2 + ã3 k̃t+1 + ã4 k̃t+1 + ã5 k̃t + ã6 k̃t∗ + ã7 Ãt+1
            +ã8 Ã∗t+1 + ã9 Ãt + ã10 Ã∗t + ã11 ,                              (5.48)
                         ∗                       ∗
   0 = b̃1 k̃t+2 + b̃2 k̃t+2 + b̃3 k̃t+1 + b̃4 k̃t+1 + b̃5 k̃t + b̃6 k̃t∗ + b̃7 Ãt+1
            +b̃8 Ã∗t+1 + b̃9 Ãt + b̃10 Ã∗t + b̃11 .                              (5.49)
156 CHAPTER 5. INTERNATIONAL REAL BUSINESS CYCLES

At this point, the marginal beneÞt from looking at analytic expressions
for the coeﬃcients is probably negative. For the speciÞc calibration of
the model the numerical values of the coeﬃcients are,
                            ã1 = 0.105,         b̃1 = 0.105,
                            ã2 = 0.105,         b̃2 = 0.105,
                            ã3 = −0.218,        b̃3 = −0.212,
                            ã4 = −0.212,        b̃4 = −0.218,
                            ã5 = 0.107,         b̃5 = 0.107,
                            ã6 = 0.107,         b̃6 = 0.107,
                            ã7 = −0.128,        b̃7 = −0.161,
                            ã8 = −0.159,        b̃8 = −0.130,
                            ã9 = 0.158,         b̃9 = 0.158,
                            ã10 = 0.158,        b̃10 = 0.158,
                            ã11 = 0.007,        b̃11 = 0.007.
    You can see that ã3 + ã4 = b̃3 + b̃4 and ã7 + b̃7 = ã8 + b̃8 which means
that there is a singularity in this system. To deal with this singularity,
let Ãw           ∗
      t = Ãt + Ãt denote the ‘world’ technology shock and add (5.48)
to (5.49) to get

       w       ã3 + ã4 w                ã7 + b̃7 w               ã11 + b̃11
 ã1 k̃t+2 +            k̃t+1 +ã5 k̃tw +          Ãt+1 +ã9 Ãw
                                                                t +             = 0. (5.50)
                   2                          2                          2
(5.50) is a second—order stochastic diﬀerence equation in k̃tw = k̃t + k̃t∗ ,
which can be rewritten compactly as4
                             w          w
                           k̃t+2 − m1 k̃t+1 − m2 k̃tw = Wt+1
                                                          w
                                                             ,                     (5.51)
        w
where Wt+1 = m3 Ãw          w
                  t+1 + m4 Ãt , and

                              m1    = −(ã3 + ã4 )/(2ã1 ),
                              m2    = −ã5 /ã1 ,
                              m3    = −(ã7 + b̃7 )/(2ã1 ),
                              m4    = −ã9 /ã1 ,
                                        ã11 + b̃11
                              m5    = −             .
                                           2ã11
   4
    Unlike the one-country model, we don’t want to write the model in logs because
we have to be able to recover k̃ and k̃ ∗ separately.
5.2. CALIBRATING A TWO-COUNTRY MODEL                                     157

You can write second—order stochastic diﬀerence equation (5.51) as
(1 − m1 L − m2 L2 )k̂t+1
                       w
                            = Wtw .      The roots of the polynomial
                2
(1 − m1 z − m2 z ) = (1 − ω1 L)(1 − ω2 L) satisfy m1 = ω1 + ω2 and m2 =
−ω1 ω2 . Under the parameter values used to calibrate the model and us-
ing the q  quadratic formula, the roots are, z1 = (1/ω1 ) =
[−m1 − m21 + 4m2 ]/(2m2 ) ' 1.17, and z2 = (1/ω2 ) =
        q
[−m1 + m21 + 4m2 ]/(2m2 ) ' 0.84. The stable root |z1 | > 1 lies outside
the unit circle, and the unstable root |z2 | < 1 lies inside the unit circle.
   From the law of motion governing the technology shocks (5.33), you
have
                         Ãw              w     w
                           t+1 = (ρ + δ)Ãt + ²t ,                    (5.52)
where ²w t  = ²t + ²∗t . Now Et Wt+k = m3 Ãw               w
                                                 t+1 + m4 Ãt + m5 =
[m3 (ρ + δ) + m4 ](ρ + δ)k Ãw
                             t + m5 . As in the one-country model, use
these forecasting formulae to solve the unstable root forwards and the
stable root backwards. The solution for the world capital stock is
      w                    (ρ + δ) ³                            ´
    k̃t+1 = ω1 k̃tw −                [m3 (ρ + δ) + m4 ]Ãw
                                                         t + m5   .   (5.53)
                        ω2 − (ρ + δ)
   Now you need to recover the domestic and foreign components of
the world capital stock. Subtract (5.49) from (5.48) to get
                           Ã           !         Ã         !
                  ∗            b̃7 − ã7         b̃8 − ã8
        k̃t+1 − k̃t+1 =                  Ãt+1 +           Ã∗t+1 .   (5.54)
                               ã3 − ã4         ã3 − ã4
Add (5.53) to (5.54) to get
                                  1 w                ∗
                        k̃t+1 = [k̃t+1  + (k̃t+1 − k̃t+1 )].         (5.55)
                                  2
The date t + 1 world capital stock is predetermined at date t. How that
capital is allocated between the home and foreign country depends on
the realization of the idiosyncratic shocks Ãt+1 and Ã∗t+1 .
   Given k̃t , and k̃t∗ , it follows from the production functions that the
outputs are
                                                       y
                   ỹt = fA Ãt + fk k̃t = y Ãt + α k̃t ,           (5.56)
                                                       k
                     ∗         ∗ ∗     ∗ ∗      ∗ ∗       y∗ ∗
                  ỹt = fA Ãt + fk k̃t = y Ãt + α ∗ k̃t ,          (5.57)
                                                          k
158 CHAPTER 5. INTERNATIONAL REAL BUSINESS CYCLES

and investment rates are

                         ĩt = γ k̃t+1 − (1 − δ)k̃t ,                  (5.58)
                        ĩ∗t = γ k̃t+1
                                   ∗
                                       − (1 − δ)k̃t∗ .                 (5.59)

Let world consumption be c̃w               ∗         ∗            ∗
                             t = c̃t + c̃t = ỹt + ỹt − (ĩt + ĩt ). By the
optimal risk-sharing rule (5.39) c̃∗t = [(1 − ω)/ω]c̃t , which can be used
to determine
                               c̃t = ωc̃wt .                            (5.60)
It follows that c̃∗t = c̃w
                         t − c̃t . The log-level of consumption is recovered
by
                         ln(Ct ) = ln(Xt ) + ln(c̃t + c).
Log levels of the other variables can be obtained in an analogous man-
ner.

Simulating the Two-Country Model
The steady state values are

   y = y ∗ = 1.53,    k = k ∗ = 3.66,    i = i∗ = 0.42,    c = c∗ = 1.11.

 The model is used to generate 96 time-series observations. Descriptive
statistics calculated using the Hodrick—Prescott Þltered cyclical parts of
the log-levels of the simulated observations and are displayed in Table
5.4 and Figure 5.4 shows the simulated current account balance.
    The simple model of this chapter makes many realistic predictions.
It produces time-series that are persistent and that display coarse co-
movements that are broadly consistent with the data. But there are
also several features of the model that are inconsistent with the data.
First, consumption in the two-country model is smoother than output.
Second, domestic and foreign consumption are perfectly correlated due
to the perfect risk-sharing whereas the correlation in the data is much
lower than 1. A related point is that home and foreign output are
predicted to display a lower degree of co-movement than home and
foreign consumption which also is not borne out in the data.
5.2. CALIBRATING A TWO-COUNTRY MODEL                                                   159



     0.1

   0.08

   0.06

   0.04

   0.02

       0

   -0.02

   -0.04

   -0.06

   -0.08

    -0.1
           73     75    77     79     81   83   85   87   89   91     93     95   97



           Figure 5.4: Simulated current account to GDP ratio.


                Table 5.4: Calibrated Open-Economy Model

                        Std.               Autocorrelations
                       Dev.          1     2     3       4            6
                 yt    0.022        0.66 0.40 0.15 0.07             0.04
                 ct    0.017        0.63 0.42 0.18 0.12             -0.04
                 it    0.114        0.05 -0.13 -0.09 -0.10          0.03
                ext    0.038        0.09 -0.09 -0.09 -0.10          -0.00
                yt∗    0.021        0.65 0.32 0.07 -0.15            -0.27
                 c∗t   0.017        0.63 0.42 0.18 0.12             -0.04
                 i∗t   0.116        0.03 -0.15 -0.07 -0.08          0.00
                                Cross correlations at k
                         6    4     1      0     -1     -4                  -6
           ext yt−k    0.00 0.18 0.41 0.44 0.21 0.15                       0.15
           yt∗ yt−k    0.10 0.06 0.27 0.18 0.06 0.28                       0.05
160 CHAPTER 5. INTERNATIONAL REAL BUSINESS CYCLES

   International Real Business Cycles Summary

   1. The workhorse of real business cycle research is the dynamic
      stochastic general equilibrium model. These can be viewed as
      Arrow-Debreu models and solved by exploiting the social plan-
      ner’s problem. They feature perfect markets and completely
      fully ßexible prices. The models are fully articulated and are
      have solidly grounded micro foundations.
   2. Real business cycle researchers employ the calibration method to
      quantitatively evaluate their models. Typically, the researcher
      takes a set of moments such as correlations between actual time
      series, and asks if the theory is capable of replicating these co-
      movements. The calibration style of research stands in contrast
      with econometric methodology as articulated in the Cowles com-
      mission tradition. In standard econometric practice one begins
      by achieving model identiÞcation, progressing to estimation of
      the structural parameters, and Þnally by conducting hypothesis
      tests of the model’s overidentifying restrictions but how one de-
      termines whether the model is successful or not in the calibration
      tradition is not entirely clear.
Chapter 6

Foreign Exchange Market
Eﬃciency

In his second review article on eﬃcient capital markets, Fama [49]
writes,

         “I take the market eﬃciency hypothesis to be the sim-
     ple statement that security prices fully reßect all available
     information.”

   He goes on to say,

         “. . . , market eﬃciency per se is not testable. It must
     be tested jointly with some model of equilibrium, an asset-
     pricing model.”

    Market eﬃciency does not mean that asset returns are serially un-
correlated, nor does it mean that the Þnancial markets present zero
expected proÞts. The crux of market eﬃciency is that there are no
unexploited excess proÞt opportunities. What is considered to be ex-
cessive depends on the model of market equilibrium.
    This chapter is an introduction to the economics of foreign exchange
market eﬃciency. We begin with an evaluation of the simplest model of
international currency and money-market equilibrium–uncovered in-
terest parity. Econometric analyses show that it is strongly rejected by

                                  161
162CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

the data. The ensuing challenge is then to understand why uncovered
interest parity fails.
    We cover three possible explanations. The Þrst is that the for-
ward foreign exchange rate contains a risk premium. This argument
is developed using the Lucas model of chapter 4. The second explana-
tion is that the true underlying structure of the economy is subject to
change occasionally but economic agents only learn about these struc-
tural changes over time. During this transitional learning period in
which market participants have an incomplete understanding of the
economy and make systematic prediction errors even though they are
behaving rationally. This is called the ‘peso-problem’ approach. The
third explanation is that some market participants are actually irra-
tional in the sense that they believe that the value of an asset depends
on extraneous information in addition to the economic fundamentals.
The individuals who take actions based on these pseudo signals are
called ‘noise’ traders.
   The notational convention followed in this chapter is to let upper
case letters denote variables in levels and lower case letters denote their
logarithms, with the exception of interest rates, which are always de-
noted in lower case. As usual, stars are used to denote foreign country
variables.




6.1      Deviations From UIP

Let s be the log spot exchange rate, f be the log one-period forward
rate, i be the one-period nominal interest rate on a domestic currency
(dollar) asset and i∗ is the nominal interest rate on the foreign currency
(euro) asset. If uncovered interest parity holds, it − i∗t = Et (st+1 ) − st ,
but by covered interest parity, it − i∗t = ft − st . Therefore, unbiasedness
of the forward exchange rate as a predictor of the future spot rate
ft = Et (st+1 ) is equivalent to uncovered interest parity.
   We begin by covering the basic econometric analyses used to detect
these deviations.
6.1. DEVIATIONS FROM UIP                                                 163

Hansen and Hodrick’s Tests of UIP
Hansen and Hodrick [71] use generalized method of moments (GMM)
to test uncovered interest parity. The GMM method is covered in
chapter 2.2. The Hansen—Hodrick problem is that a moving-average se-
rial correlation is induced into the regression error when the prediction
horizon exceeds the sampling interval of the data.

The Hansen—Hodrick Problem
To see how the problem arises, let ft,3 be the log 3-month forward ex-
change rate at time t, st be the log spot rate, It be the time t information ⇐(102)
set available to market participants, and Jt be the time t information
set available to you, the econometrician. Even though you are working
with 3-month forward rates, you will sample the data monthly. You
want to test the hypothesis
                           H0 : E(st+3 |It ) = ft,3 .
In setting up the test, you note that It is not observable but since Jt is
a subset of It and since ft,3 is contained in Jt , you can use the law of
iterated expectations to test
                           H00 : E(st+3 |Jt ) = ft,3 ,
which is implied by H0 . You do this by taking a vector of economic
variables z t−3 in Jt−3 , running the regression
                         st − ft−3,3 = z 0t−3 β + ²t,3 ,
and doing a joint test that the slope coeﬃcients are zero.
    Under the null hypothesis, the forward rate is the market’s forecast
of the spot rate 3 months ahead ft−3,3 = E(st |Jt−3 ). The observations,
however, are collected every month. Let Jt = (²t , ²t−1 , . . . , z t , z t−1 , . . .).
The regression error formed at time t − 3 is ²t = st − E(s|Jt−3 ). At
t − 3, E(²t |Jt−3 ) = E(st − E(st |Jt−3 )) = 0 so the error term is un- ⇐(103)
predictable at time t − 3 when it is formed. But at time t − 2 and
t − 1 you get new information and you cannot say that E(²t |Jt−1 ) =
E(st |Jt−1 )−E[E(st |Jt−3 )|Jt−1 ] is zero. Using the law of iterated expecta-
tions, the Þrst autocovariance of the error E(²t ²t−1 ) = E(²t−1 E(²t |Jt−1 ))
164CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

need not be zero. You can’t say that E(²t ²t−2 ) is zero either. You can,
however, say that E(²t ²t−k ) = 0 for k ≥ 3. When the forecast horizon
of the forward exchange rate is 3 sampling periods, the error term is
potentially correlated with 2 lags of itself and follows an MA(2) pro-
cess. If you work with a k − period forward rate, you must be prepared
for the error term to follow an MA(k-1) process.
    Generalized least squares procedures, such as Cochrane-Orcutt or
Hildreth-Lu, covered in elementary econometrics texts cannot be used
to handle these serially correlated errors because these estimators are
inconsistent if the regressors are not econometrically exogenous. Re-
searchers usually follow Hansen and Hodrick by estimating the coeﬃ-
cient vector by least squares and then calculating the asymptotic co-
variance matrix assuming that the regression error follows a moving
average process. Least squares is consistent because the regression er-
ror ²t , being a rational expectations forecast error under the null, is
uncorrelated with the regressors, z t−3 .1

Hansen-Hodrick Regression Tests of UIP
Hansen and Hodrick ran two sets of regressions. In the Þrst set, the
independent variables were the lagged forward exchange rate forecast
errors (st−3 −ft−6,3 ) of the own currency plus those of cross rates. In the
second set, the independent variables were the own forward premium
and those of cross rates (st−3 −ft−3,3 ). They rejected the null hypothesis
at very small signiÞcance levels.
    Let’s run their second set of regressions using the dollar, pound,
   1
     To compute the asymptotic covariance matrix of the least-squares vector,
follow the GMM interpretation of least squares developed in chapter 2.2. As-
sume that ²t is conditionally homoskedastic, and let w t = z t−3 ²t . We have
E(wt wt0 ) = E(²2t z t−3 z 0t−3 ) = E(E[²2t z t−3 z 0t−3 |z t−3 ]) = γ0 E(z t−3 z 0t−3 ) = γ0 Q0 , where
γ0 = E(²2t ) and Q = E(z t−3 z 0t−3 ). Now, E(wt wt−1                0
                                                                         ) = E(²t ²t−1 z t−3 z 0t−4 ) =
                    0                                  0
E(E[²t ²t−1 z t−3 z t−4 |z t−3 , z t−4 ]) = E(z t−3 z t−4 E[²t ²t−1 |z t−3 , z t−4 ]) = γ1 Q1 , where
                                                                                                  0
γ1 = E(²t ²t−1 ), and Q1 = E(z t−3 z t−4 ). By an analogous argument, E(wt wt−2                      )=
                      0                                                                 0
γ2 Q2 , and E(wt wt−k ) = 0, for k ≥ 3. Now, D = E(∂(z t ²t )/∂β ) = Q0 so the
asymptotic covariance matrix for the least squares estimator is, (Q00 W−1 Q0 )−1
                         P2
where W = γ0 Q0 + j=1 γj (Qj + Q0j ). Actually, Hansen and Hodrick used weekly
observations with the 3-month forward rate which leads the regression error to
follow an MA(11).
6.1. DEVIATIONS FROM UIP                                                       165

yen, and deutschemark. The dependent variable is the realized forward
contract proÞt, which is regressed on the own and cross forward premia.
The 350 monthly observations are formed by taking observations from
every fourth Friday. From March 1973 to December 1991, the data
are from the Harris Bank Foreign Exchange Weekly Review extending
from March 1973 to December 1991. From 1992 to 1999, the data ⇐(107)
are from Datastream. The Wald test that the slope coeﬃcients are
jointly zero with p-values are given in Table 6.1. The Wald statistics
are asymptotically χ23 under the null hypothesis. Two versions of the
asymptotic covariance matrix are estimated. Newey and West with 6
lags (denoted Wald(NW[6])), and Hansen-Hodrick with 2 lags (denoted
Wald(HH[2])). In these data, UIP is rejected at reasonable levels of
signiÞcance for every currency except for the dollar-deutschemark rate.

                  Table 6.1: Hansen-Hodrick tests of UIP

             US-BP US-JY US-DM DM-BP DM-JY BP-JY
 Wald(NW[6]) 16.23 400.47 5.701 66.77 46.35 294.31
   p-value   0.001  0.000 0.127 0.000 0.000  0.000
 Wald(HH[2]) 16.44 324.85 4.299 57.81 32.73 300.24
   p-value   0.001  0.000 0.231 0.000 0.000  0.000

Notes: Regression st −ft−3,3 = z 0t−3 β +²t,3 estimated on monthly observations from
1973,3 to 1999,12. Wald is the Wald statistic for the test that β = 0. Asymptotic
covariance matrix estimated by Newey-West with 6 lags (NW[6]) and by Hansen—
Hodrick with 2 lags (HH[2]).



The Advantage of Using Overlapping Observations
The Hansen—Hodrick correction involves some extra work. Are the ben-
eÞts obtained by using the extra observations worth the extra costs?
Afterall, you can avoid inducing the serial correlation into the regres-
sion error by using nonoverlapping quarterly observations but then you
would only have 111 data points. Using the overlapping monthly ob-
servations increases the nominal sample size by a factor of 3 but the
eﬀective increase in sample size may be less than this if the additional
observations are highly dependent.
         166CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY


         Table 6.2: Monte Carlo Distribution of OLS Slope Coeﬃcients and
         T-ratios using Overlapping and Nonoverlapping Observations.

              Overlapping                 percentiles          Relative
           T Observations          2.5          50      97.5    Range
           50     yes     slope   0.778       0.999    1.207    0.471
                          tNW   (-2.738)   (-0.010)   (2.716)   1.207
                           tHH  [-2.998]    [-0.010]  [3.248]   1.383
           16     no      slope   0.543       0.998    1.453
                          tOLS ((-2.228)) ((-0.008)) ((2.290))
          100     yes     slope   0.866       0.998    1.126    0.474
                          tNW   (-2.286)   (-0.025)   (2.251)   1.098
                           tHH  [-2.486]    [-0.020]  [2.403]   1.183
           33     no      slope   0.726       0.996    1.274
                          tOLS ((-2.105)) ((-0.024)) ((2.026))
          300     yes     slope   0.929       1.001    1.074    0.509
                          tNW   (-2.071)    (0.021)   (2.177)   1.041
                           tHH  [-2.075]    [-0.016]  [2.065]   1.014
          100     no      slope   0.858       1.003    1.143
                          tOLS ((-2.030)) ((0.032)) ((2.052))

         Notes: True slope = 1. tN W : Newey—West t-ratio. tHH : Hansen—Hodrick t-ratio.
         tOLS : OLS t-ratio. Relative range is ratio of the distance between the 97.5 and
         2.5 percentiles in the Monte Carlo distribution for the statistic constructed using
         overlapping observations to that constructed using nonoverlapping observations.


             The advantage that one gains by going to monthly data are illus-
(108)⇒   trated in table 6.2 which shows the results of a small Monte Carlo ex-
         periment that compares the two (overlapping versus nonoverlapping)
         strategies. The data generating process is
                                                          iid
                               yt+3 = xt + ²t+3 ,      ²t ∼ N (0, 1),
                                                          iid
                              xt = 0.8xt−1 + ut ,      ut ∼ N (0, 1),
         where T is the number of overlapping (monthly) observations. yt+3 is
         regressed on xt and Newey-West t-ratios tNW are reported in paren-
         theses. 5 lags were used for T = 50, 100 and 6 lags used for T = 300.
6.1. DEVIATIONS FROM UIP                                                       167

Hansen-Hodrick t-ratios tHH are given in square brackets and OLS t-
ratios tOLS are given in double parentheses. The relative range is the
2.5 to 97.5 percentile of the distribution with overlapping observations
divided by the 2.5 to 97.5 percentile of the distribution with nonover-
lapping observations.2 The empirical distribution of each statistic is
based on 2000 replications.
    You can see that there deÞnitely is an eﬃciency gain to using over-
lapping observations. The range encompassing the 2.5 to 97.5 per-
centiles of the Monte Carlo distribution of the OLS estimator shrinks
approximately by half when going from nonoverlapping (quarterly) to
overlapping (monthly) observations. The tradeoﬀ is that for very small
samples, the distribution of the t-ratios under overlapping observations
are more fat-tailed and look less like the standard normal distribution
than the OLS t-ratios.

Fama Decomposition Regressions
Although the preceding Monte Carlo experiment suggested that you
can achieve eﬃciency gains by using overlapping observations, in the
interests of simplicity, we will go back to working with the log one-
period forward rate, ft = ft,1 to avoid inducing the moving average
errors.
    DeÞne the expected excess nominal forward foreign exchange payoﬀ
to be
                           pt ≡ ft − Et [st+1 ],                (6.1)
where Et [st+1 ] = E[st+1 |It ]. You already know from the Hansen—Hodrick
regressions that pt is non zero and that it evolves overtime as a random
process. Adding and subtracting st from both sides of (6.1) gives

                         ft − st = Et (st+1 − st ) + pt .                     (6.2)

Fama [48] shows how to deduce some properties of pt using the anal-
ysis of omitted variables bias in regression problems. First, consider
the regression of the ex post forward proÞt ft − st+1 on the current
period forward premium ft − st . Second, consider the regression of the
   2
    For example, we get the row 1 relative range value 0.471 for the slope coeﬃcient
from (1.207-0.778)/(1.453-0.543).
168CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

one-period ahead depreciation st+1 − st on the current period forward
premium. The regressions are

                 ft − st+1 = α1 + β1 (ft − st ) + ε1t+1 ,              (6.3)
                 st+1 − st = α2 + β2 (ft − st ) + ε2t+1 .              (6.4)

(6.3) and (6.4) are not independent because when you add them to-
gether you get

                                 α1 + α2 = 0,
                                  β1 + β2 = 1,                         (6.5)
                            ε1t+1 + ε2t+1 = 0.                         (6.6)

In addition, these regressions have no structural interpretation. So
why was Fama interested in running them? Because it allowed him to
estimate moments and functions of moments that characterize the joint
distribution of pt and Et (st+1 − st ).
    The population value of the slope coeﬃcient in the Þrst regression
(6.3) is β1 = Cov[(ft − st+1 ), (ft − st )]/Var[ft − st ]. Using the deÞni-
tion of pt , it follows that the forward premium can be expressed as,
ft − st = pt + E(∆st+1 |It ) whose variance is Var(ft − st ) = Var(pt ) +
Var[E(∆st+1 |It )]+2Cov[pt , E(∆st+1 |It )]. Now add and subtract E(st+1 |It )
to the realized proÞt to get ft − st+1 = pt − ut+1 where ut+1 = st+1 −
E(st+1 |It ) = ∆st+1 − E(∆st+1 |It ) is the unexpected depreciation. Now
you have, Cov[(ft −st+1 ), (ft −st )] = Cov[(pt − ut+1 ), (pt +E(∆st+1 |It ))]
= Var(pt ) + Cov[pt , E(∆st+1 |It ))]. With the aid of these calculations,
the slope coeﬃcient from the Þrst regression can be expressed as

                       Var(pt ) + Cov[pt , Et (∆st+1 )]
      β1 =                                                        .    (6.7)
             Var(pt ) + Var[Et (∆st+1 )] + 2Cov[pt , Et (∆st+1 )]

In the second regression (6.4), the population value of the slope coeﬃ-
cient is β2 = Cov[(∆st+1 ), (ft − st )]/Var(ft − st ). Making the analogous
substitutions yields

                  Var[Et (∆st+1 )] + Cov[pt , Et (∆st+1 )]
      β2 =                                                        .    (6.8)
             Var(pt ) + Var[Et (∆st+1 )] + 2Cov[pt , Et (∆st+1 )]
6.1. DEVIATIONS FROM UIP                                                 169


     Table 6.3: Estimates of Regression Equations (6.3) and (6.4)

           US-BP          US-JY US-DM DM-BP DM-JY                     BP-JY
    β̂2     -3.481        -4.246   -0.796   -1.645   -2.731           -4.295
 t(β2 = 0) (-2.413)      (-3.635) (-0.542) (-1.326) (-1.797)         (-2.626)
 t(β2 = 1) (-3.107)      (-4.491) (-1.222) (-2.132) (-2.455)         (-3.237)
    β̂1      4.481        5.246    1.796     2.645   3.731             5.295
Notes: Nonoverlapping quarterly observations from 1976.1 to 1999.4. t(β2 = 0)
(t(β2 = 1) is the t-statistic to test β2 = 0 (β2 = 1).



    Let’s run the Fama regressions using non-overlapping quarterly ob-
servations from 1976.1 to 1999.4 for the British pound (BP), yen (JY),
deutschemark (DM) and dollar (US). We get the following results.
    There is ample evidence that the forward premium contains useful
information for predicting the future depreciation in the (generally) sig-
niÞcant estimates of β2 . Since β̂2 is signiÞcantly less than 1, uncovered
interest parity is rejected. The anomalous result is not that β2 6= 1,
but that it is negative. The forward premium evidently predicts the
future depreciation but with the “wrong” sign from the UIP perspec-
tive. Recall that the calibrated Lucas model in chapter 4 also predicts
a negative β2 for the dollar-deutschemark rate.
    The anomaly is driven by the dynamics in pt . We have evidence
that it is statistically signiÞcant. The next question that Fama asks is
whether pt is economically signiÞcant. Is it big enough to be econom-
ically interesting? To answer this question, we use the estimates and
the slope-coeﬃcient decompositions (6.7) and (6.8) to get information
about the relative volatility of pt .
    First note that β̂2 < 0. From (6.8) it follow that pt must be nega-
tively     correlated        with      the     expected       depreciation,
Cov[pt , E(∆st+1 |It )] < 0. By (6.5), the negative estimate of β2 implies
that β̂1 > 0. By (6.7), it must be the case that Var(pt ) is large enough
to oﬀset the negative Cov(pt , Et (∆st+1 )). Since β̂1 − β̂2 > 0, it follows
that Var(pt ) > Var(E(∆st+1 |It )), which at least places a lower bound
on the size of pt .
         170CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

         Estimating pt
         We have evidence that pt = ft − E(st+1 |It ) evolves as a random pro-
         cess, but what does it look like? You can get a quick estimate of pt
         by projecting the realized proÞt ft − st+1 = pt − ut+1 on a vector of
         observations z t where ut+1 = st+1 − E(st+1 |It ) is the rational prediction
         error. Using the law of iterated expectations and the property that
         E(ut+1 |z t ) = 0, you have E(ft − st+1 |z t ) = E(pt |z t ). If you run the
         regression
                                  ft − st+1 = z 0t β + ut+1 ,
         you can use the Þtted value of the regression as an estimate of the ex
         ante payoﬀ, p̂t = z 0t β̂.
             A slightly more sophisticated estimate can be obtained from a vector
         error correction representation that incorporates the joint dynamics of
         the spot and forward rates. Here, the log spot and forward rates are as-
         sumed to be unit root processes and the forward premium is assumed to
         be stationary. The spot and forward rates are cointegrated with cointe-
         gration vector (1, −1). As shown in chapter 2.6, st and ft have a vector
         error correction representation which can be represented equivalently
         as a bivariate vector autoregression in the forward premium (ft − st )
         and the depreciation ∆st .
             Let’s pursue the VAR option. Let y t = (ft − st , ∆st )0 follow the
         k−th order VAR
                                             k
                                             X
                                      yt =         Aj y t−j + vt .
                                             j=1

(109)⇒   Let e2 = (0, 1) be a selection vector such that e2 y t = ∆st picks oﬀ the
         depreciation, and H t = (y t , y t−1 , . . .) be current and lagged values of
                                                               hP                     i
                                                                     k
         y t . Then E(∆st+1 |H t ) = e2 E(y t+1 |H t ) = e2          j=1 Aj y t+1−j   , and you
6.1. DEVIATIONS FROM UIP                                                           171




                                        A. US-UK
   50
   40
   30
   20
   10
    0
  -10
  -20
  -30
  -40
  -50
        1976    1978    1980    1982      1984     1986    1988    1990    1992



                                 B. US-Germany
    50

    40

    30

    20

    10

        0

   -10

   -20
   -30
         1976    1978    1980    1982      1984     1986    1988    1990    1992



                                   C. US-Japan
   50
   40
   30
   20
   10
    0
  -10
  -20
  -30
  -40
        1976    1978    1980    1982      1984     1986    1988    1990    1992




Figure 6.1: Time series point estimates of pt (boxes) with 2-standard
error bands and point estimates of Et (∆st+1 ) (circles).
         172CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

         can estimate pt with
                                                                   
                                                     k
                                                     X
                           p̂t = (ft − st ) − e2        Âj y t+1−j  .    (6.9)
                                                 j=1


             Mark and Wu [102] used the VAR method to get quarterly estimates
         of pt for the US dollar relative to the deutschemark, pound, and yen.
         Their estimates, shown in Figure 6.1, show that of E(∆st+1 |H t ) are
         persistent for the pound and yen. Both p̂t and Ê(∆st+1 |H t ) alternate
         between positive and negative values but they change sign infrequently.
         The cross-sectional correlation across the three exchange rates is also
         evident. Each of the series spikes in early 1980 and 1981, the p̂t s are
         generally positive during the period of dollar strength from mid-1980 to
         1985 and are generally negative from 1990 to late 1993. You can also
         see in the Þgures the negative covariance between p̂t and Êt (∆st+1 )
         deduced by Fama’s regressions.
             Deviations from uncovered interest parity are a stylized fact of the
         foreign exchange market landscape. But whether the stochastic pt term
         ßoating around is the byproduct of an ineﬃcient market is an unre-
         solved issue. As per Fama’s deÞnition, we say that the foreign exchange
         market is eﬃcient if the relevant prices are determined in accordance
(110)⇒   with a model of market equilibrium. One possibility is that pt is a risk
         premium. At this point, we revisit the Lucas model and use it to place
         some structure on pt .


         6.2     Rational Risk Premia
         Hodrick [75] and Engel [44] show how to use the Lucas model to price
         forward foreign exchange. We follow their use of Lucas model to un-
         derstand deviations from uncovered interest parity.
             Recall that forward foreign exchange contracts are like nominal
         bonds in the Lucas model in that they are not actually traded. We
         are calculating shadow prices that keep them oﬀ the market. Let St is
         the nominal spot exchange rate expressed as the home currency price
         of a unit of foreign currency and Ft be the price the foreign currency
         for one-period ahead delivery.
6.2. RATIONAL RISK PREMIA                                                     173

    The intertemporal marginal rate of substitution will play a key role.
In aggregate asset-pricing applications, it is common to work with per
capita consumption data. One way to justify using such data in the
utility function in Lucas’s two-country model is to assume that the pe-
riod utility function is homothetic and that the relative price between
the home good and the foreign good (the real exchange rate) is con-
stant. This allows you to write the representative agent’s intertemporal
marginal rate of substitution between t and t + 1 as

                                       βu0 (Ct+1 )
                              µt+1 =               ,                        (6.10)
                                        u0 (Ct )

where u0 (Ct ) is the representative agent’s marginal utility evaluated at
equilibrium consumption.3
    Let Pt be the domestic price level and let β is the subjective dis-
count factor. A speculative position in a forward contract requires no
investment at time t. If the agent is behaving optimally, the expected
marginal utility from the real payoﬀ from buying the foreign currency
forward is Et [u0 (ct+1 )(Ft − St+1 )/Pt+1 ] = 0. To express the Euler equa-
tion in terms of stationary random variables so that their unconditional
variances and unconditional covariances between random variables ex-
ist, multiply both sides by β and divide by u0 (ct ) to get
                              "                 #
                                   Ft − St+1
                           Et µt+1           . = 0,                         (6.11)
                                      Pt+1

(6.11) is key to understanding the demand for forward foreign exchange
risk-premia in the intertemporal asset pricing framework. Keep in mind
that the intertemporal marginal rate of substitution varies inversely
with consumption growth so that when the agent experiences the good
state, consumption growth is high and the intertemporal marginal rate
of substitution is low.
   3
    If the period utility function in Lucas’s two-good model is
          Ct1−γ                θ  1−θ
u(Ct ) = 1−γ    with Ct = Cxt    Cyt   the intertemporal marginal rate of substitu-
                    1−γ
tion is β(Ct+1 /Ct )    (Cxt /Cxt+1 ). But if the relative price between X and Y is
constant, the growth rate of consumption of X is the same as the growth rate of
the consumption index and the intertemporal marginal rate of substitution becomes
that in (6.10)
         174CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY


         Covariance decomposition and Euler equations. We will use the prop-
         erty that the covariance between any two random variables Xt+1 and
         Yt+1 can be decomposed as

                  Covt (Xt+1 , Yt+1 ) = Et (Xt+1 Yt+1 ) − Et (Xt+1 )Et (Yt+1 ).

         For a particular deÞnition of X and Y , the theory, embodied in (6.11)
         restricts Et (Xt+1 Yt+1 ) = 0. Using this restriction in the covariance
         decomposition and rearranging gives

                                             −Covt (Xt+1 , Yt+1 )
                              Et (Yt+1 ) =                        .               (6.12)
                                                Et (Xt+1 )

         The Real Risk Premium
         Set Yt+1 = (Ft − St+1 )/Pt+1 and Xt+1 = µt+1 in (6.11) and use (6.12)
         to get                                h³           ´         i
                         "           #
                           Ft − St+1     −Covt Ft −S Pt
                                                        t+1
                                                              , µ t+1
                      Et               =                                . (6.13)
                              Pt+1               Et µt+1
         The forward rate is in general not the rationally expected future spot in
         the Lucas model. The expected forward contract payoﬀ is proportional
         to the conditional covariance between the payoﬀ and the intertem-
         poral marginal rate of substitution. The factor of proportionality is
         −1/Et (µt+1 ) which is the ex ante gross real interest rate multiplied by
(111)⇒   −1.                                                        h        i
             How do we make sense of (6.13)? Suppose that Et FtP−S       t+1
                                                                       t+1
                                                                               < 0.
         Then the covariance on the right side is positive. You expect to generate
         a proÞt by buying the foreign currency (euros) forward and reselling
         them in the spot market at Et (St+1 ). A corresponding strategy that
         exploits the deviation from uncovered interest parity is to borrow the
         home currency (dollars) and lend uncovered in the foreign currency
         (euros). The market pays a premium to those investors who are willing
         to hold euro-denominated assets. It follows that the euro must be the
         risky currency. If you
                             h     are iholding the euro forward, the high payoﬀ
                               Ft −St+1
         states occur when       Pt+1
                                         is negative. By the covariance term in
         (6.13), these states are associated with low realizations of µt+1 . But
6.2. RATIONAL RISK PREMIA                                              175

µt+1 is low when consumption growth is high. What it boils down to is
this. Holding the euro forward pays oﬀ well in good states of the world
but you don’t need an asset to pay oﬀ well in the good state. You want
assets to pay oﬀ well in the bad state—when you really need it. But the
forward euro will pay oﬀ poorly in the bad state and in that sense it is
risky.
                                                             h   i
    If the euro is risky the dollar is safe. If Et FtP−S t+1
                                                       t+1
                                                             < 0 and you
buy the dollar forward, you expect to realize a loss. It might seem
like a strange idea to buy an asset with expected negative payoﬀ, but
this is something that risk-averse individuals are willing to do if the
asset provides consumption insurance by providing high payoﬀs in bad
(low growth) consumption states. The expected negative payoﬀ can be
viewed as an insurance premium.
    To summarize, in Lucas’s intertemporal asset pricing model, the
risk of an asset lies in the covariance of its payoﬀ with something that
individuals care about—namely consumption. Assets that generate high
payoﬀs in the bad state oﬀer insurance against these bad states and are
considered safe. A high payoﬀ during the good state is less valuable to
the individual than it is during the bad state due to the concavity of
the utility function. Risk-averse individuals require compensation by
way of a risk premium to hold the risky assets.

Risk-neutral forward exchange. If individuals are risk neutral, the in-
tertemporal marginal rate of substitution µt+1 is constant. Since the
covariance of any random variable with a constant is 0, (6.13) becomes

                            Ã          !          Ã      !
                                 Ft                   St+1
                       Et                  = Et            .         (6.14)
                                Pt+1                  Pt+1


So even under risk-neutrality the forward rate is not the rationally
expected future spot rate because you need to divide by the future
and stochastic price level. To see more clearly how covariance risk is
related to the fundamentals, it is useful to take a look at expected
nominal speculative proÞts.
176CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

The Nominal Risk Premium.
Multiply (6.11) by Pt and divide through by St to get
                          "Ã               !µ               ¶#
                                     Pt         Ft − St+1
                     Et        µt+1                              = 0.
                                    Pt+1           St

Let
                                                   Pt
                                  µm
                                   t+1 = µt+1          .                    (6.15)
                                                  Pt+1
Since P1t is the purchasing power of one domestic currency unit and
u0 (Ct )
   Pt
         is the marginal utility of money, we will call µmt+1 the intertem-
poral marginal rate of substitution of money. In chapter 4, (equation
(4.62)) we found that the price of a one-period riskless domestic cur-
rency nominal bond is (1 + it )−1 = Et (µm   t+1 ).
                                 (Ft −St+1 )                           Ft
      Using (6.12), set Yt+1 = Pt+1 and Xt+1 = µm       t+1 . Because St is
known at date t, it can be treated as a constant and you get
                 ·                 ¸                   ·                ¸
                 Ft − St+1                        St+1
              Et           = (1 + it )Covt µm
                                            t+1 ,      .                    (6.16)
                    St                             St
Perhaps now you can see more clearly why the foreign currency (euro)
is risky
   h       when
              i   the forward euro contract oﬀers an expected proÞt. If
     Ft −St+1
Et Pt+1 < 0, the covariance in (6.16) must be negative. In the bad
state, µm t+1 is high because consumption growth is low. This is associ-
ated with a weakening of the euro (low values of SSt+1
                                                     t
                                                       ). The euro is risky
because its value is positively correlated with consumption. Agents con-
sume both the domestic and the foreign goods but the foreign currency
buys fewer foreign goods in the bad state of nature and is therefore a
bad hedge against low consumption states.

Pitfalls in pricing nominal contracts. Suppose that individuals are risk
                         βPt
neutral. Then µm  t+1 = Pt+1 and the covariance in (6.16) need not be
0 and again you can see that the forward rate is not necessarily the
rationally expected future spot rate. Agents care about real proÞts,
not nominal proÞts. Under risk neutrality, equilibrium expected real
proÞts are 0, but in order to achieve zero expected real proÞts, the
forward rate may have to be a biased predictor of the future spot.
6.3. TESTING EULER EQUATIONS                                        177

    This is why market eﬃciency does not mean that the exchange rate
must follow a random walk or that uncovered interest parity must hold.
The Lucas model predicts that in equilibrium, it is the marginal utility
of the forward contract payoﬀ that is unpredictable and that deviations
from UIP can emerge as compensation for risk bearing.


6.3     Testing Euler Equations
Using the methods of Hansen and Singleton [73], Mark [100] estimated
and tested the Euler equation restrictions using 1-month forward ex-
change rates. Modjtahedi [106] goes a step further and tests implied
Euler equation restrictions across the entire a term structure available
for forward rates (1, 3, 6, and 12 months). The strategy is to estimate
the coeﬃcient of relative risk aversion γ and test the orthogonality
conditions implied by the Euler equation (6.11) using GMM.
    Here, we use non-overlapping quarterly observations on dollar rates
of the pound, deutschemark, and yen from 1973.1 to 1997.1 and revisit
Mark’s analysis. To write the problem compactly, let rt+1 be the 3 × 1
forward foreign exchange payoﬀ vector
                                                  
                                   (F1t −S1t+1 )
                                      (S1t )      
                                  (F2t −S2t+1 )   
                        rt+1 =        (S2t )      ,
                                                  
                                   (F3t −S3t+1 )
                                       (S3t )

and let the 3 × 1 vector wt+1 be

                           wt+1 = µm
                                   t+1 r t+1 ,                   (6.17)

where µm t+1 is the US representative investor’s intertemporal marginal
rate of substitution of money under CRRA utility, u(C) = C 1−γ /(1−γ).
    Using the notation developed here to rewrite the Euler equations
(6.11) you get
                             E[wt+1 |It ] = 0.                   (6.18)
Divide both sides by β so that you only need to estimate γ. (6.18)
says that wt+1 is uncorrelated with any time-t information. Let z t
be a k−dimensional vector of time-t ‘instrumental variables,’ available
178CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

to you, the econometrician. Then (6.18) implies the following 3 × k
estimable and testable equations4

                   E[wt+1 ⊗ z t ] = E[(µm
                                        t+1 rt+1 ) ⊗ z t ] = 0.             (6.19)

Now the question is what to choose for z t ? It is not a good idea to
use too many variables because the estimation problem will become
intractable and the small sample properties of the GMM estimator will
suﬀer. A good candidate is the forward premium since we know that
it is directly relevant to the problem at hand. Furthermore, it is not
necessary to use all the possible orthogonality conditions. To reduce
the dimensionality of the estimation problem further, for each currency
i, let                             "            #
                                         1
                             z it = (Fit −Sit )
                                           Sit

be a vector of instrumental variables consisting of the constant 1, and
the normalized forward premium. Estimating γ from the system of six
equations                                 
                                w1t+1 z 1t
                                          
                           E  w2t+1 z 2t  ,                    (6.20)
                                w3t+1 z 3t
gives γ̂ = 48.66 with asymptotic standard error of 79.36. The coef-
Þcient of relative risk aversion is uncomfortably large and imprecisely
estimated. However, the test of the Þve overidentifying restrictions
gives a chi-square statistic of 7.20 (p-value=0.206) does not reject at
standard levels of signiÞcance.
    Why does the data force γ̂ to be so big? We can get some intuition
by recasting the problem as a regression. Suppose you look at just
one currency. If ( CCt+1
                      t
                         , PPt+1
                              t
                                 , Ft −S
                                       St
                                          t+1
                                              ) are jointly lognormally distributed
                                   5
then wt+1 is also lognormal. Taking logs, of both sides of (6.17), you
                                                 µ               ¶
   4                                                 a11   a12
     ⊗ denotes the Kronecker product. Let A =                  and B be any n × k
                                                     a21   a22
                       µ                 ¶
                          a11 B a12 B
matrix. Then A ⊗ B =                      .
                          a21 B a22 B
   5
     A random variable X is said to be lognormally distributed if ln(X) is normally
distributed.
6.3. TESTING EULER EQUATIONS                                                     179

get                                Ã       !           Ã      !
              µ            ¶
              Ft − St+1       Pt                        Ct
           ln           + ln                   = −γ ln            + ln wt+1 .
                 St          Pt+1                      Ct+1
ln(Ct /Ct+1 ) is correlated with ln wt+1 so you don’t get consistent es-
timates with OLS—but you do get consistency with instrumental vari-
ables and this is what GMM does. However, the regression analogy
tells us that the large estimate of γ and its large standard error can
be attributed to high variability in the excess return combined with
low variability in consumption growth. The diﬃculty that the Lucas
model under CRRA utility to explain the data with small values of γ is
not conÞned to the foreign exchange market. The corresponding diﬃ-
culty for the model to simultaneously explain historical stock and bond
returns is what Mehra and Prescott [105] call the ‘equity premium
puzzle’.

Volatility Bounds
Hansen and Jagannathan [72] propose a framework to evaluate the ex-
tent to which the Euler equations from representative agent asset pric-
ing models satisfy volatility restrictions on the intertemporal marginal
rate of substitution.
    We will Þrst derive a lower bound on the volatility of the intertem-
poral marginal rate of substitution predicted by the Euler equations of
the intertemporal asset pricing model. Let rt+1 be an N-dimensional
vector of holding period returns from t to t+1 available to the agent,
and µt+1 = βu0 (Ct+1 )/u0 (Ct ) be the intertemporal marginal rate of sub-
stitution.
    We need to write the Euler equations in returns form. For equities,
                                   e                e
they take the form 1 = Et (µt+1 rt+1  ) where rt+1      is the gross return.6 It
                                                      e
reads—an asset with expected payoﬀ Et (µt+1 rt+1        ) costs one unit of the
consumption good. An analogous returns form of the Euler equation
holds for bonds. In the case of forward foreign exchange contracts, there
is no investment required in the current period so the returns form for
the Euler equation is 0 = Et µt+1 (Ft −S Pt
                                            t+1 )
                                                  . Thus, the returns form of
   6
       Take the equity Euler equation (4.12)) and divide both sides by et u1,t+1 . Let
 e
rt+1 = (et+1 + xt+1 )/et to get the expression in the text.
         180CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

         the Euler equations for asset pricing can generically be represented as
                                         v = Et (µt+1 rt+1 ),                          (6.21)
         where v is a vector of constants whose i − th element vi = 1 if asset i
         is a stock or bond, and vi = 0 if asset i is a forward foreign exchange
         contract.
             Taking the unconditional expectation on both sides of (6.21) and
         using the law of iterated expectations gives
                                         v = E(µt+1 rt+1 ).                            (6.22)
(112)⇒   Let θµ ≡ E(µt ), σµ2 ≡ E(µt − θµ )2 , θr ≡ E(rt ), and
         Σr ≡ E(rt − θr )(rt − θr )0 . Project (µt − θµ ) onto (rt − θ r ) to obtain
                                  (µt − θµ ) = (rt − θr )0 β µ + ut ,                  (6.23)

         where β µ is a vector of least squares projection coeﬃcients, ut is the
         least squares projection error and
                                  β µ = Σ−1
                                         r E(r t − θ r )(µt − θµ ).                    (6.24)

         Furthermore, you know that
                             E(rt − θ r )(µt − θµ ) = E(rt µt ) −θ r θµ ,              (6.25)
                                                        |   {z      }
                                                            v

         where E(rt µt ) = v comes from the returns form of the Euler equations.
         Upon substituting (6.25) into (6.24), we get, β µ = Σ−1
                                                              r (v − θ r θµ ).
             Computing the variance of the intertemporal marginal rate of sub-
         stitution gives
         σµ2 = E(µt − θµ )2
             = E(µt − θµ )0 (µt − θµ )
             = E[(rt − θr )0 β µ + ut ]0 [(rt − θ r )0 β µ + ut ]
              = E[β 0µ (rt − θr )(rt − θ r )0 β µ ] + σu2 + β 0µ E(rt − θr )ut + Eut (rt − θr )0 βµ
                                                            |                 {z                  }
                                                                             (a)

              = E(µt rt − θµ θ r )0 Σ−1       −1                   2
                                     r Σr Σr E(µt rt − θµ θ r ) + σu
              = (v − θµ θ r )0 Σ−1                 2
                                r (v − θµ θ r ) + σu .                                      (6.26)
6.3. TESTING EULER EQUATIONS                                           181

The term labeled (a) above is zero because ut is the least-squares pro-
jection error and is by construction orthogonal to rt . Since σu2 ≥ 0, the
volatility or standard deviation of the intertemporal marginal rate of
substitution must lie above σr where
                             q
                 σµ ≥ σr ≡    (v − θµ θ r )0 Σ−1
                                              r (v − θµ θ r ).      (6.27)

The right side of (6.27) is the lower bound on the volatility of the
intertemporal marginal rate of substitution. If the assets are all equities
or bonds v is a vector of ones and the volatility bound is a parabola in
(θµ , σµ ) space. If the assets are all forward foreign exchange contracts,
v is a vector of zeros and the lower volatility bound is a ray from the
origin
                                  h           i1/2
                          σr = θµ θ0r Σ−1
                                       r θr          .              (6.28)
    How does one construct and use the volatility bound in practice?
First determine v and calculate θr and Σr from asset price data. Then
using (6.28) you trace out σr as a function of θµ . Next, for a given func-
tional form of the utility function, use consumption data to calculate
the volatility of the intertemporal marginal rate of substitution, σµ .
Compare this estimate to the volatility bound and determine whether
the bound is satisÞed.
    When we do this using quarterly US consumption and CPI data
and dollar exchange ratesq for the pound, deutschemark, and yen from
1973.1 to 1997.1, we get θ0r Σ−1 θr = 0.309. Now let the utility function ⇐(113)
be CRRA with relative risk aversion coeﬃcient γ. As we vary γ, we
generate the entries in the following table.

                        γ      θµ      σµ        σr
                        2    0.982    0.015    0.303
                        4    0.974    0.031    0.301
                        10   0.953    0.078    0.294
                        20   0.923    0.159    0.285
                        30   0.901    0.248    0.278
                        40   0.886    0.349    0.273
                        50   0.879    0.469    0.272
                        60   0.881    0.615    0.272
         182CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

             You can see that σµ < σr for values of γ below 30. This means ⇐(115)
         that exchange rate payoﬀs are too volatile relative to the fundamentals
         (the intertemporal marginal rate of substitution) over this range of γ.
         Note how the GMM estimate of γ = 48 obtained earlier in this chapter
         is consistent with this result. In order to explain the data, the Lucas
         model with CRRA utility requires people to be very risk averse. Many
         people feel that the degree of risk aversion associated with γ = 48 is
         unrealistically high and would rule out many observed risky gambles
         undertaken by economic agents.

                                 0.7


                                 0.6                 C =60
                                                              IMRS

                                 0.5                 C =5 0

                                 0.4
                                                        C =4 0                            Lower Volatility Bound
                 V o la tility




                                 0.3

                                                                       C =2 0
                                 0.2                   C =3 0
                                                                                          C =1 0
                                 0.1                                                                  C =4
                                                                                                               C =2

                                   0
                                       0.86   0.88            0.9    0.92          0.94        0.96          0.98     1
                                                                            Mean



         Figure 6.2: Mean and volatility estimates of the intertemporal marginal
         rate of substitution (IMRS) with β = 0.99 and alternative values of γ
         under constant relative risk aversion utility and lower bound implied by
         forward exchange payoﬀs of the pound, deutschemark, and yen, 1973.1
         to 1997.1.

             The mean and volatility of the intertemporal marginal rate of substi-
         tution (θµ , σµ ) for alternative values of γ and the lower volatility bound
(116)⇒   (σr = 0.309θµ ) implied by the data are illustrated in Figure 6.2.7
6.4. APPARENT VIOLATIONS OF RATIONALITY                                           183

6.4       Apparent Violations of Rationality

We’ve seen that there are important dimensions of the data that the Lu-
cas model with CRRA utility cannot explain.8 What other approaches
have been taken to explain deviations from uncovered interest parity?
This section covers the peso problem approach and the noise trader
paradigm. Both approaches predict that market participants make sys-
tematic forecast errors. In the peso problem approach, agents have ra-
tional expectations but don’t know the true economic environment with
certainty. In the noise trading approach, some agents are irrational.
    Before tackling these issues, we want to have some evidence that
market participants actually do make systematic forecast errors. So we
Þrst look at a line of research that studies the properties of exchange
rate forecasts compiled by surveys of actual foreign exchange market
participants. The subjective expectations of market participants are
key to any theory in international Þnance. The rational expectations
assumption conveniently allows the economic analyst to model these
subjective expectations without having to collect data on people’s ex-
pectations per se. If the rational expectations assumption is wrong, its
violation may be the reason that underlies asset-pricing anomalies such
as the deviation from uncovered interest parity.


   7
      Backus, Gregory, and Telmer [4] investigate the lower volatility bound (6.28)
implied by data on the U.S. dollar prices of the Canadian-dollar, the deutsche-
mark, the French-franc, the pound, and the yen. They compute the bound for an
investor who chases positive expected proÞts by deÞning forward exchange payoﬀs
on currency i as Iit (Fi,t − Si,t+1 )/Si,t where Iit = 1 if Et (fi,t − si,t+1 ) > 0 and
Iit = 0 otherwise. The bound computed in the text does not make this adjustment
because it is not a prediction of the Lucas model where investors may be willing
to take a position that earns expected negative proÞt if it provides consumption
insurance. Using the indicator adjustment on returns lowers the volatility bound
making it more diﬃcult for the asset pricing model to match this quarterly data
set.
    8
      The failure of the model to generate suﬃciently variable risk premiums to ex-
plain the data cannot be blamed on the CRRA utility function. Bekaert [9] obtains
similar results with utility speciÞcations where consumption exhibits durability and
when utility displays ‘habit persistence’.
         184CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

         Properties of Survey Expectations
         Instead of modeling the subjective expectations of market participants
         as mathematical conditional expectations, why not just ask people what
         they think? One line of research has used surveys of exchange rate fore-
         casts by market participants to investigate the forward premium bias
         (deviation from UIP). Froot and Frankel [65], study surveys conducted
         by the Economist’s Financial Report from 6/81—12/85, Money Market
         Services from 1/83—10/84, and American Express Banking Corpora-
         tion from 1/76—7/85, Frankel and Chinn [58] employ a survey compiled
         monthly by Currency Forecasters’ Digest from 2/88 through 2/91, and
         Cavaglia et. al. [23] analyze forecasts on 10 USD bilateral rates and 8
         deutschemark bilateral rates surveyed by Business International Cor-
         poration from 1/86 to 12/90. The survey respondents were asked to
         provide forecasts at horizons of 3, 6, and 12 months into the future.
             The salient properties of the survey expectations are captured in
(117)⇒   two regressions. Let ŝet+1 be the median of the survey forecast of the
         log spot exchange rate st+1 reported at date t. The Þrst equation is the
         regression of the survey forecast error on the forward premium
                        ∆ŝet+1 − ∆st+1 = α1 + β1 (ft − st ) + ²1t+1 .     (6.29)
         If survey respondents have rational expectations, the survey forecast er-
         ror realized at date t+1 will be uncorrelated with any publicly available
         at time t and the slope coeﬃcient β1 in (6.29) will be zero.
             The second regression is the counterpart to Fama’s decomposition
         and measures the weight that market participants attach to the forward
         premium in their forecasts of the future depreciation
                            ∆ŝet+1 = α2 + β2 (ft − st ) + ²2,t+1 .        (6.30)
         Survey respondents perceive there to be a risk premium to the extent
         that β2 deviates from one. That is because if a risk premium exists,
         it will be impounded in the regression error and through the omitted
         variables bias will cause β2 to deviate from 1.
             Table 6.4 reports selected estimation results drawn from the litera-
         ture. Two main points can be drawn from the table.
           1. The survey forecast regressions generally yield estimates of β1
              that are signiÞcantly diﬀerent from zero which provides evidence
6.4. APPARENT VIOLATIONS OF RATIONALITY                                      185




   Table 6.4: Empirical Estimates from Studies of Survey Forecasts

                                   Data Set
           Economist MMS AMEX CFD                           BIC—USD BIC—DEM
                        Horizon: 3-months
     β1       2.513  6.073      –       –                      5.971          1.930
 t(β1 = 1)    1.945  2.596      –       –                      1.921         -0.452
 t(β2 = 1)    1.304  -0.182     –      0.423                   1.930          0.959
   t-test     1.188  -2.753     –     -2.842                   5.226         -1.452
                        Horizon: 6-months
     β1       2.986    –      3.635     –                      5.347          1.841
 t(β1 = 1)    1.870    –      2.705     –                      2.327         -0.422
     β2       1.033    –      1.216     –                      1.222          0.812
 t(β2 = 1)    0.192    –      1.038     –                      1.461         -4.325
                        Horizon: 12-months
     β1       0.517    –      3.108     –                      5.601          1.706
 t(β1 = 1)    0.421    –      2.400     –                      3.416          0.832
     β2       0.929    –      0.877    1.055                   1.046          0.502
 t(β2 = 1)   -0.476    –      -0.446 0.297                     0.532         -6.594

Notes: Estimates from the Economist, Money Market Services, and American Ex-
press surveys are from Froot and Frankel [65].       Estimates from the Currency
Forecasters’ Digest survey are from Frankel and Chinn [58], and estimates from the
Business International Corporation (BIC) survey from Cavaglia et. al. [23]. BIC—
USD is the average of individual estimates for 10 dollar exchange rates. BIC—DEM
is the average over 8 deutschemark exchange rates.
186CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

      against the rationality of the survey expectations. In addition,
      the slope estimates typically exceed 1 indicating that survey re-
      spondents evidently place too much weight on the forward rate
      when predicting the future spot. That is, an increase in the for-
      ward premium predicts that the survey forecast will exceed the
      future spot rate.

  2. Estimates of β2 are generally insigniÞcantly diﬀerent from 1. This
     suggests that survey respondents do not believe that there is a
     risk premium in the forward foreign exchange rate. Respondents
     use the forward rate as a predictor of the future spot. They are
     putting too much weight on the forward rate and are forming
     their expectations irrationally in light of the empirically observed
     forward rate bias.

    We should point out that some economists are skeptical about the
accuracy of survey data and therefore about the robustness of results
obtained from the analyses of these data. They question whether there
are suﬃcient incentives for survey respondents to truthfully report their
predictions and believe that you should study what market participants
do, not what they say.


6.5     The ‘Peso Problem’
On the surface, systematic forecast errors suggests that market partic-
ipants are repeatedly making the same mistake. It would seem that
people cannot be rational if they do not learn from their past mis-
takes. The ‘peso problem’ is a rational expectations explanation for
persistent and serially correlated forecast errors as typiÞed in the sur-
vey data. Until this point, we have assumed that economic agents know
with complete certainty, the model that describes the economic envi-
ronment. That is, they know the processes including the parameter
values governing the exogenous state variables, the forms of the utility
functions and production functions and so forth. In short, they know
and understand everything that we write down about the economic
environment.
6.5. THE ‘PESO PROBLEM’                                                 187

    In ‘peso problem’ analyses, agents may have imperfect knowledge
about some aspects of the underlying economic environment. Like
applied econometricians, rational agents have observed an insuﬃcient
number of data points from which to exactly determine the true struc-
ture of the economic environment. Systematic forecast errors can arise
as a small sample problem.

A Simple ‘Peso-Problem’ Example.
The ‘peso problem’ was originally studied by Krasker [87] who ob-
served a persistent interest diﬀerential in favor of Mexico even though
the nominal exchange rate was Þxed by the central bank. By covered
interest arbitrage, there would also be a persistent forward premium,
since if i is the US interest rate and i∗ is the Mexican interest rate,
it − i∗t = ft − st < 0. If the Þx is maintained at t + 1, we have a realiza-
tion of ft < st+1 , and repeated occurrence suggests systematic forward
rate forecast errors.
    Suppose that the central bank Þxes the exchange rate at s0 but the
peg is not completely credible. Each period that the Þx is in eﬀect,
there is a probability p that the central bank will abandon the peg and
devalue the currency to s1 > s0 and a probability 1 − p that the s0 peg
will be maintained. The process governing the exchange rate is
                          (
                              s1 with probability p
                 st+1 =                                 .            (6.31)
                              s0 with probability 1 − p

The 1-period ahead rationally expected future spot rate is
Et (st+1 ) = ps1 + (1 − p)s0 . As long as the peg is maintained and
p > 0, we will observe the sequence of systematic, serially correlated,
but rational forecast errors

                     s0 − Et (st+1 ) = p(s0 − s1 ) < 0.              (6.32)

If the forward exchange rate is the market’s expected future spot rate,
we have a rational explanation for the forward premium bias. Although ⇐(119)
the forecast errors are serially correlated, they are not useful in predict-
ing the future depreciation.
         188CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

         Lewis’s ‘Peso-Problem’ with Bayesian Learning
         Lewis [93] studies an exchange rate pricing model in the presence of
         the peso-problem. The stochastic process governing the fundamentals
         undergo a shift, but economic agents are initially unsure as whether
         a shift has actually occurred. Such a regime shift may be associated
         with changes in the economic, policy, or political environment. One
         example of such a phenomenon occurred in 1979 when the Federal Re-
         serve switched its policy from targeting interest rates to one of targeting
(120)⇒   monetary aggregates. In hindsight, we now know that the Fed actually
         did change its operating procedures, but at the time, one may not have
         been completely sure. Even when policy makers announce a change,
         there is always the possibility that they are not being truthful.
             Lewis works with the monetary model of exchange rate determina-
         tion. The switch in the stochastic process that governs the fundamen-
         tals occurs unexpectedly. Agents update their prior probabilities about
         the underlying process as Bayesians and learn about the regime shift
         but this learning takes time. The resulting rational forecast errors are
         systematic and serially correlated during the learning period.
             As in chapter 3, we let the fundamentals be ft = mt −m∗t −φ(yt −yt∗ ),
         where m is money and y is real income and φ is the income elasticity of
         money demand.9 For convenience, the basic diﬀerence equation (3.9)
         that characterizes the model is reproduced here

                                       st = γft + ψEt (st+1 ),                         (6.33)

         where γ = 1/(1 + λ), and ψ = λγ, and λ is the income elasticity of
         money demand. The process that governs the fundamentals are known
         by foreign exchange market participants and evolves according to a
         random walk with drift term δ0

                                        ft = δ0 + ft−1 + vt ,                          (6.34)
                     iid
         where vt ∼ N (0, σv2 ).
             We will obtain the no-bubbles solution using the method of undeter-
         mined coeﬃcients (MUC). To MUC around this problem, begin with
         (6.33). From the Þrst term we see that st depends on ft . st also depends
           9
               Note: f denotes the fundamentals here, not the forward exchange rate.
6.5. THE ‘PESO PROBLEM’                                                189

on Et (st+1 ) which is a function of the currently available information
set, It . Since ft is the only exogenous variable and the model is linear,
it is reasonable to conjecture that the solution has form

                             st = π0 + π1 ft .                       (6.35)

Now you need to determine the coeﬃcients π0 and π1 that make (6.35)
the solution. From (6.34), the one-period ahead forecast of the funda-
mentals is, Et ft+1 = δ0 + ft . If (6.35) is the solution, you can advance
time by one period and take the conditional expectation as of date t to
get
                       Et (st+1 ) = π0 + π1 (δ0 + ft ).              (6.36)
Substitute (6.35) and (6.36) into (6.33) to obtain

                 π0 + π1 ft = γft + ψ(π0 + π1 δ0 + π1 ft ).          (6.37)

In order for (6.37) to be a solution, the coeﬃcients on the constant and
on ft on both sides must be equal. Upon equating coeﬃcients, you see
that the equation holds only if π0 = λδ0 and π1 = 1. The no bubbles
solution for the exchange rate when the fundamentals follow a random
walk with drift δ0 is therefore

                              st = λδ0 + ft .                        (6.38)


A possible regime shift. Now suppose that market participants are told
at date t0 that the drift of the process governing the fundamentals may
have increased to δ1 > δ0 .               Agents attach a probability
p0t = Prob(δ = δ0 |It ) that there has been no regime change and a
probability p1t = Prob(δ = δ1 |It ) that there has been a regime change
where It is the information set available to agents at date t. Agents use
new information as it becomes available to update their beliefs about
the true drift. At time t, they form expectations of the future values of
the fundamental according to

          Et (ft+1 ) = p0t E(δ0 + vt + ft ) + p1t E(δ1 + vt + ft )
                     = p0t δ0 + p1t δ1 + ft .                        (6.39)
190CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

   Use the method of undetermined coeﬃcients again to solve for the
exchange rate under the new assumption about the fundamentals by
conjecturing the solution to depend on ft and on the two possible drift
parameters δ0 and δ1

                           st = π1 ft + π2 p0t δ0 + π3 p1t δ1 .              (6.40)

The new information available to agents is the current period realiza-
tion of the fundamentals which evolves according to a random walk.
Since the new information is not predictable, the conditional expecta-
tion of the next period probability at date t is the current probability,
Et (p0t+1 ) = p0t .10 Using this information, advance time by one period
in (6.40) and take date-t expectations to get

             Et st+1 = π1 (ft + p0t δ0 + p1t δ1 ) + π2 p0t δ0 + π3 p1t δ1
                     = π1 ft + (π1 + π2 )p0t δ0 + (π1 + π3 )p1t δ1 .         (6.41)

Substitute (6.40) and (6.41) into (6.33) to get

π1 ft +π2 p0t δ0 +π3 p1t δ1 = γft +ψπ1 (p0t δ0 +p1t δ1 +ft )+ψπ2 p0t δ0 +ψπ3 p1t δ1 ,
                                                                           (6.42)
and equate coeﬃcients to obtain π1 = 1, π2 = π3 = λ. This gives the
solution
                            st = ft + λ(p0t δ0 + p1t δ1 ).                 (6.43)
Now we want to calculate the forecast errors so that we can see how
they behave during the learning period. To do this, advance the time
subscript in (6.43) by one period to get

                        st+1 = ft+1 + λ(p0t+1 δ0 + p1t+1 δ1 ).

and take time t expectations to get

                 Et st+1 = ft + p0t δ0 + p1t δ1 + λp0t δ0 + λp1t δ1
                         = ft + (1 + λ)(p0t δ0 + p1t δ1 ).                   (6.44)
  10
       This claim is veriÞed in problem 6 at the end of the chapter.
6.5. THE ‘PESO PROBLEM’                                                          191

The time t+1 rational forecast error is
st+1 − Et (st+1 ) = λ[δ0 (p0t+1 − p0t ) + δ1 (p1t+1 − p1t )]
                    +∆ft+1 − (p0t δ0 + p1t δ1 )]                                   (6.45)
                                     |       {z      }
                                      Et ∆ft+1
                    = λ(δ1 − δ0 )[p1t+1 − p1t ] + δ1 + vt+1 − [δ0 + (δ1 − δ0 )p1t ].
The regime probabilities p1t and the updated probabilities p1t+1 − p1t
are serially correlated during the learning period. The rational forecast
error therefore contains systematic components and is serially corre-
lated, but the forecast errors are not useful for predicting the future
depreciation. To determine explicitly the sequence of the agent’s belief
probabilities, we use,

 Bayes’ Rule: for events Ai , i = 1, . . . , N that partition the sample
space S, and any event B with Prob(B) > 0
                                    P(Ai )P(B|Ai )
                       P(Ai |B) = PN                  .
                                   j=1 P(Aj )P(B|Aj )


To apply Bayes rule to the problem at hand, let news of the possible
regime shift be released at t = 0. Agents begin with the unconditional ⇐(121)
probability, p0 = P(δ = δ0 ), and p1 = P(δ = δ1 ). In the period after the
announcement t = 1, apply Bayes’ Rule by setting B = (∆f1 ), A1 = δ1 ,
A2 = δ0 to get the updated probabilities
                                            p0 P(∆f1 |δ0 )
        p0,1 = P(δ = δ0 |∆f1 ) =                                     .        (6.46)
                                     p0 P(∆f1 |δ0 ) + p1 P(∆f1 |δ1 )
As time evolves and observations on ∆ft are acquired, agents update
their beliefs according to
                                         p0 P(∆f2 , ∆f1 |δ0 )
p0,2 = P(δ0 |∆f2 , ∆f1 ) =                                                  ,
                              p0 P(∆f2 , ∆f1 |δ0 ) + p1 P(∆f2 , ∆f1 |δ1 )
                                                    p0 P(∆f3 , ∆f2 , ∆f1 |δ0 )
p0,3 = P(δ0 |∆f3 , ∆f2 , ∆f1 ) =                                                                 ,
                                   p0 P(∆f3 , ∆f2 , ∆f1 |δ0 ) + p1 P(∆f3 , ∆f2 , ∆f1 |δ1 )
    .. .. ..
     . . .
                                                  p0 P(∆fT , . . . , ∆f1 |δ0 )
p0,T = P(δ0 |∆fT , . . . , ∆f1 ) =                                                             .
                                   p0 P(∆fT , . . . , ∆f1 |δ0 ) + p1 P(∆fT , . . . , ∆f1 |δ1 )
192CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

The updated probabilities p0t = P(δ0 |∆ft , . . . , ∆f1 ) are called the pos-
terior probabilities. An equivalent way to obtain the posterior proba-
bilities is
                                   p0 P(∆f1 |δ0 )
                p0,1 =                                    ,
                          p0 P(∆f1 |δ0 ) + p1 P(∆f1 |δ1 )
                                    p0,1 P(∆f2 |δ0 )
                p0,2   =                                      ,
                          p0,1 P(∆f2 |δ0 ) + p1,1 P(∆f2 |δ1 )
                       ..
                        .
                                     p0,t−1 P(∆ft |δ0 )
                p0t    =                                          .
                          p0,t−1 P(∆ft |δ0 ) + p1,t−1 P(∆ft |δ1 )

 How long is the learning period? To start things oﬀ, you need to specify
an initial prior probability, p0 = P(δ = δ0 ).11 Let δ0 = 0, δ1 = 1, and
let v have a discrete probability distribution with the probabilities,
             3                       2               3
 P(v = −5) = 66        P(v = −1) = 11     P(v = 3) = 66
             3                     2                 3
 P(v = −4) = 66         P(v = 0) = 11     P(v = 4) = 66
             3                     2                 3
 P(v = −3) = 66         P(v = 1) = 11     P(v = 5) = 66
             1                     1
 P(v = −2) = 11         P(v = 2) = 11
    We generate the distribution of posterior probabilities, learning
times, and forecast error autocorrelations by simulating the economy
2000 times. Figure 6.3 shows the median of the posterior probability
distribution when the initial prior is 0.95. The distribution of learn-
ing times and autocorrelations is not sensitive to the initial prior. The
learning time distribution is quite skewed with the 5, 50, and 95 per-
centiles of the distribution of learning times being 1, 14, and 66 periods
respectively. Judging from the median of the distribution, Bayesian
updaters quickly learn about the true economy. Since the forecast er-
rors are serially correlated only during the learning period, we calculate
the autocorrelation of the forecast errors only during the learning pe-
riod. The median autocorrelations at lags 1 through 4 of the forecast
  11
    Lewis’s approach is to assume that learning is complete by some date T > t0 in
the future at which time p0,T = 0. Having pinned down the endpoint, she can work
backwards to Þnd the implied value of p0 that is consistent with learning having
been completed by T .
6.6. NOISE-TRADERS                                                                       193

              1


            0.9


            0.8


            0.7


            0.6


            0.5


            0.4


            0.3


            0.2


            0.1


              0
                  1   2   3   4   5   6   7      8     9   10   11   12   13   14   15

                                              Period




Figure 6.3: Median posterior probabilities of δ = δ0 when truth is δ = δ1
with initial prior of 0.95.


errors computed from the Þrst 14 periods are -0.130, -0.114, -0.098, and
-0.078.
    This simple example serves as an introduction to rational learning
in peso-problems. However, the rapid rate at which learning takes place
suggests that a single regime switch is insuﬃcient to explain systematic
forecast errors observed over long periods of time as might be the case in
foreign exchange rates. If the peso problem is to provide a satisfactory
explanation of the data a model with richer dynamics with recurrent
regime shifts, as outlined in Evans [47], is needed.                       ⇐(124)


6.6     Noise-Traders
We now consider the possibility that some market participants are not
fully rational. Mark and Wu [102] present a model in which a mixture
194CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

of rational and irrational agents produce spot and forward exchange dy-
namics that is consistent with the Þndings from survey data. The model
adapts the overlapping-generations noise trader model of De Long et.
al. [38] to study the pricing of foreign currencies in an environment
where heterogeneous beliefs across agents generate trading volume and
excess currency returns.
    The irrational ‘noise’ traders are motivated by Black’s [14] sugges-
tion that the real world is so complex that some (noise) traders are
unable to distinguish between pseudo-signals and news. These indi-
viduals think that the pseudo-signals contain information about asset
returns. Their beliefs regarding prospective investment returns seem
distorted by waves of excessive optimism and pessimism. The result-
ing trading dynamics produce transitory deviations of the exchange
rate from its fundamental value. Short-horizon rational investors bear
the risk that they may be required to liquidate their positions at a time
when noise-traders have pushed asset prices even farther away from the
fundamental value than they were when the investments were initiated.

The Model
We consider a two-country constant population partial equilibrium model.
It is an overlapping generations model where people live for two peri-
ods. When people are born, they have no assets but they do have a full
stomach and do not consume in the Þrst period of life. People make
portfolio decisions to maximize expected utility of second period wealth
which is used to Þnance consumption when old.
    The home country currency unit is called the ‘dollar’ and the foreign
country currency unit is called the ‘euro.’ In each country, there is a
one-period nominally safe asset in terms of the local currency. Both
assets are available in perfectly elastic supply so that in period t, people
can borrow or lend any amount they desire at the gross dollar rate of
interest Rt = (1 +it ), or at the gross euro rate of interest, Rt∗ = (1 +i∗t ).
The nominal interest rate diﬀerential—and hence by covered interest
parity, the forward premium—is exogenous.
    In order for Þnancial wealth to have value, it must be denominated
in the currency of the country in which the individual resides. Thus in
the second period, the domestic agent must convert wealth to dollars
6.6. NOISE-TRADERS                                                           195

and the foreign agent must convert wealth to euros. We also assume
that the price level in each country is Þxed at unity. Individuals there-
fore evaluate wealth in national currency units. The portfolio problem
is to decide whether to borrow the local currency and to lend uncovered
in the foreign currency or vice-versa in an attempt to exploit deviations
from uncovered interest parity, as described in chapter 1.1.
     The domestic young decide whether to borrow dollars and lend euros
or vice versa. Let λt be the dollar value of the portfolio position taken.
If the home agent borrows dollars and lends euros the individual has
taken a long euro positions which we represent with positive values of
λt . To take a long euro position, the young trader borrows λt dollars at
the gross interest rate Rt and invests λt /St euros at the gross rate R∗t .
When old, the euro payoﬀ Rt∗ (λt /St ) is converted into (St+1 /St )Rt∗ λt
dollars. If the agent borrows euros and lends dollars, the individual
has taken a long dollar position which we represent with negative λt .
A long position in dollars is achieved by borrowing −λt /St euros and
investing the proceeds in the dollar asset at Rt . In the second period,
the domestic agent sells −(St+1 /St )Rt∗ λt dollars in order to repay the
euro debt −Rt∗ (λt /St ). In either case, the net payoﬀ is the number
of dollars at stake multiplied by the deviation from uncovered interest
parity, [(St+1 /St )R∗t − Rt ]λt . We use the approximations (St+1 /St ) '
(1 + ∆st+1 ) and (Rt /Rt∗ ) = (Ft /St ) ' 1 + xt to express the net payoﬀ
as12

                              [∆st+1 − xt ]Rt∗ λt .                       (6.47)
    The foreign agent’s portfolio position is denoted by λ∗t with positive
values indicating long euro positions. To take a long euro position, the
foreign young borrows λ∗t dollars and invests (λ∗t /St ) euros at the gross
interest rate R∗t . Next period’s net euro payoﬀ is (Rt∗ /St − Rt /St+1 )λ∗t .
A long dollar position is achieved by borrowing −(λ∗t /St ) euros and
investing −λ∗t dollars. The net euro payoﬀ in the second period is
−(Rt /St+1 − R∗t /St )λ∗t . Using the approximation (Ft St )/(St St+1 ) '
  12
    These approximations are necessary in order to avoid dealing with Jensen
inequality terms when evaluating the foreign wealth position which render the
model intractable. Jensen’s inequality is E(1/X) > 1/(EX). So we have
[(St+1 /St )R∗t − Rt ]λt = [(1 + ∆st+1 )Rt∗ − (1 + xt )R∗t ]λt , which is (6.47).
196CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

1 + xt − ∆st+1 , the net euro payoﬀ is13
                                                    λ∗t
                                 [∆st+1 − xt ]R∗t       .                         (6.48)
                                                    St
   The foreign exchange market clears when net dollar sales of the
current young equals net dollar purchases of the current old
                                    St ∗
                     λt + λ∗t =        R λt−1 + Rt−1 λ∗t−1 .                      (6.49)
                                   St−1 t−1

Fundamental and Noise Traders
A fraction µ of domestic and foreign traders are fundamentalists who
have rational expectations. The remaining fraction 1 − µ are noise
traders whose beliefs concerning future returns from their portfolio in-
vestments are distorted. Let the speculative positions of home funda-
mentalist and home noise traders be given by λft and λnt respectively.
Similarly, let foreign fundamentalist and foreign noise trader positions
be λf∗t and λn∗t . The total portfolio position of domestic residents is
λt = µλft + (1 − µ)λnt and of foreign residents is λ∗t = µλf∗t + (1 − µ)λn∗t .
   We denote subjective date—t conditional expectations generically
as Et (·). When it is necessary to make a distinction we will denote
the expectations of fundamentalists denoted by Et (·). Similarly, the
conditional variance is generically denoted by Vt (·) with the conditional
variance of fundamentalists denoted by Vt (·).
   Utility displays constant absolute risk aversion with coeﬃcient γ.
The young construct a portfolio to maximize the expected utility of
next period wealth              ³          ´
                             Et −e−γWt+1 .                            (6.50)
Both fundamental and noise traders believe that conditional on time-t
information, Wt+1 is normally distributed. As shown in chapter 1.1.1,
maximizing (6.50) with (perceived) normally distributed Wt+1 is equiv-
alent to maximizing
                                          γ
                              Et (Wt+1 ) − Vt (Wt+1 ).                            (6.51)
                                          2
  13
   To get (6.48), −(Rt /St+1 − Rt∗ /St )λ∗t = −λ∗t [(Rt∗ Ft )/(St St+1 ) − (Rt∗ /St )]
= −λ∗t (Rt∗ /St )[(St Ft )/(St St+1 ) − 1] = −λ∗t R∗t /St [1 + xt − ∆st+1 ]
6.6. NOISE-TRADERS                                                            197

The relevant uncertainty in the model shows up in the forward premium
which in turn inherits its uncertainty from the interest rates Rt and
Rt∗ , through the covered interest parity condition. The randomness of
one of the interest rates is redundant. Therefore, the algebra can be
simpliÞed without loss of generality by letting the uncertainty be driven
by Rt alone and Þx R∗ = 1.

A Fundamentals (µ = 1) Economy
Suppose everyone is rational (µ = 1) so that Et (·) = Et (·) and
Vt (·) = Vt (·). Second period wealth of the fundamentalist domestic
agent is the portfolio payoﬀ plus c dollars of exogenous ‘labor’ in-
come which is paid in the second period.14 The forward premium,
(Ft /St ) = (Rt /R∗ ) = Rt ' 1 + xt inherits its stochastic properties from
Rt , which evolves according to the AR(1) process

                                  xt = ρxt−1 + vt ,                        (6.52)
                            iid
with 0 < ρ < 1, and vt ∼ (0, σv2 ). Second period wealth can now be
written as
                      f
                    Wt+1 = [∆st+1 − xt ]λft + c.              (6.53)
   People evaluate the conditional mean and variance of next period
wealth as
                      f
                Et (Wt+1 ) = [Et (∆st+1 ) − xt ]λft + c,     (6.54)
                                   f
                             Vt (Wt+1 ) = σs2 (λft )2 ,                    (6.55)
where σs2 = Vt (∆st+1 ). The domestic fundamental trader’s problem is
to choose λft to maximize
                                                γ
                    [Et (∆st+1 ) − xt ]λft + c − (λft )2 σs2 ,             (6.56)
                                                2
which is attained by setting
                                    [Et (∆st+1 ) − xt ]
                           λft =                        .                  (6.57)
                                          γσs2
  14
    The exogenous income is introduced to lessen the likelihood of negative second
period wealth realizations, but as in De Long et. al., we cannot rule out such a
possibility.
198CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

(6.57) displays the familiar property of constant absolute risk aversion
utility in which portfolio positions are proportional to the expected
asset payoﬀ. The factor of proportionality is inversely related to the
individual’s absolute risk aversion coeﬃcient. Recall that individuals
undertake zero-net investment strategies. The portfolio position in our
setup does not depend on wealth because traders are endowed with zero
initial wealth.
     The foreign fundamental trader faces an analogous problem. The
second period euro-wealth of fundamentalist foreign agents is the payoﬀ
from portfolio investments plus an exogenous euro payment of ‘labor’
                                       f
                f
income c∗ , W∗t+1    = [∆st+1 − xt ] λS∗tt + c∗ . The solution is to choose
λf∗t = St λft . Because individuals at home and abroad have identical
tastes but evaluate wealth in national currency units, they will pursue
identical investment strategies by taking positions of the same size as
measured in monetary units of the country of residence.
     These portfolios combined with the market clearing condition (6.49)
imply the diﬀerence equation15
                      Et ∆st+1 − xt = Γt (Et−1 ∆st − xt−1 ),                      (6.58)
where Γt ≡ [(St /St−1 ) + St−1 Rt−1 ]/(1 + St ). The level of the exchange
rate is indeterminate but it is easily seen that a solution for the rate of
depreciation is
                                1               1
                        ∆st = xt = xt−1 + vt .                       (6.59)
                                ρ               ρ
The independence of vt and xt−1 implies Et (∆st+1 ) = xt and the fun-
damentals solution therefore does not generate a forward premium bias
because uncovered interest parity holds in the fundamentals equilibrium
even when agents are risk averse. The reason is that under homoge-
neous expectations and common knowledge, you demand the same risk
premium as I do, and we want to do the same transaction. Since we
cannot Þnd a counterparty to take the opposite side of the transac-
tion, no trades take place. The only way that no trades will occur in
equilibrium is for uncovered interest parity to hold.
  15
    The left side of the market clearing condition (6.49) is λt + λ∗t = (1 + St )λt =
(1 + St )/(γσs )[Et ∆st+1 − xt ]. The right side is, (St /St−1 )R∗ λt−1 + Rt−1 St−1 λt−1
= [(St /St−1 ) + (1 + xt−1 )St−1 ]λt−1 . Finally, using λt−1 = [Et−1 ∆st − xt−1 ]/(γσs2 ),
we get (6.58).
6.6. NOISE-TRADERS                                                        199

A Noise Trader (µ < 1) Economy
Now let’s introduce noise traders whose beliefs about expected returns
are distorted by the stochastic process {nt }. Noise traders can com-
pute Et (xt+1 ), but they believe that asset returns are inßuenced by
other factors ({nt }). The distortion in noise trader beliefs occurs only
in evaluating Þrst moments of returns. Their evaluation of second mo-
ments coincide with those of fundamentalists. The current young do-
mestic noise trader evaluates the conditional mean and variance of next
period wealth as
                   n
             Et (Wt+1 ) = [Et (∆st+1 ) − xt ] λnt + nt λnt + c,        (6.60)
                   n
             Vt (Wt+1 ) = (λnt )2 σs2 .                                (6.61)

Recall that a positive value of λt represents a long position in euros.
(6.60) implies that noise traders appear to overreact to news. They
exhibit excess dollar pessimism when nt > 0 for they believe the dollar
will be weaker in the future than what is justiÞed by the fundamentals.
    We specify the noise distortion to conform with the evidence from
survey expectations in which respondents appear to place excessive
weight on the forward premium when predicting future changes in the
exchange rate
                              nt = kxt + ut ,                    (6.62)
                  iid
where k > 0, ut ∼ N (0, σu2 ). The domestic noise trader’s problem is
to maximize λnt (Et ∆st+1 − xt + nt ) − γ(λnt )2 σs2 /2. The solution is to
choose
                                        nt
                            λnt = λft + 2 .                          (6.63)
                                       γσs
The noise trader’s position deviates from that of the fundamentalist by
a term that depends on the distortion in their beliefs, nt .
    The foreign noise trader holds similar beliefs, solves an analogous
problem and chooses
                              λn∗t = St λnt .                     (6.64)
   Substituting these optimal portfolio positions into the market clear-
ing condition (6.49) yields the stochastic diﬀerence equation

 [Et ∆st+1 − xt ] + (1 − µ)nt = Γt ([Et−1 ∆st − xt−1 ] + (1 − µ)nt−1 ). (6.65)
200CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

Using the method of undetermined coeﬃcients, you can verify that
                      1     (1 − µ)
                 ∆st = xt −         nt − (1 − µ)ut−1 ,             (6.66)
                      ρ        ρ
is a solution.

Properties of the Solution
First, fundamentalists and noise traders both believe, ex ante, that
they will earn positive proÞts from their portfolio investments. It is the
diﬀerences in their beliefs that lead them to take opposite sides of the
transaction. When noise traders are excessively pessimistic and take
short positions in the dollar, fundamentalists take the oﬀsetting long
position. In equilibrium, the expected payoﬀ of fundamentalists and
noise-traders are respectively

                    Et ∆st+1 − xt = −(1 − µ)nt ,                   (6.67)
                    Et ∆st+1 − xt = µnt .                          (6.68)

On average, the forward premium is the subjective predictor of the
future depreciation: µEt ∆st+1 +(1−µ)Et ∆st+1 = xt . As the measure of
noise traders approaches 0 (µ → 1), the fundamentals solution with no
trading is restored. Foreign exchange risk, excess currency movements,
and trading volume are induced entirely by noise traders. Neither type
of trader is guaranteed to earn proÞts or losses, however. The ex post
proÞt depends on the sign of
                           1                     1−µ
  ∆st+1 − xt = −(1 − µ)nt + [1 − k(1 − µ)]vt+1 −     ut+1 , (6.69)
                           ρ                      ρ
which can be positive or negative.

Matching Fama’s regressions. To generate a negative forward premium
bias, substitute (6.62) and (6.52) into (6.66) to get

                    ∆st+1 = [1 − k(1 − µ)]xt + ξt+1 ,              (6.70)

where ξt+1 ≡ (1/ρ)[1 − k(1 − µ)]vt+1 − (1 − µ)/ρut+1 − (1 − µ)ut is
an error term which is orthogonal to xt . If [1 − k(1 − µ)] < 0, the
6.6. NOISE-TRADERS                                                    201

implied slope coeﬃcient in a regression of the future depreciation on
the forward premium is negative.
   Next, if we compute the implied second moments of the deviation
from uncovered interest parity and the expected depreciation


   Cov([xt − Et (∆st+1 )], Et (∆st+1 )) =
                         k(1 − µ)(1 − k(1 − µ))σx2 − (1 − µ)2 σu2 , (6.71)
   Var(xt − Et (∆st+1 )) = (1 − µ)2 [k 2 σx2 + σu2 ],               (6.72)
                                                              2
   Var(Et (∆st+1 )) = Var(xt − Et (∆st+1 )) + [1 − 2k(1 − µ)]σx . (6.73)
We see that 1 − k(1 − µ) < 0 also imples that Fama’s pt covaries
negatively with and is more volatile than the rationally expected de- ⇐(125)
preciation. The noise-trader model is capable of matching the stylized
facts of the data as summarized by Fama’s regressions.

Matching the Survey Expectations. The survey research on expectations
presents results on the behavior of the mean forecast from a survey of
individuals. Let µ̂ be the fraction of the survey respondents comprised
of fundamentalists and 1 − µ̂ be the fraction of the survey respondents
made up of noise traders.
     Suppose the survey samples the proportion of fundamentalists and
noise traders in population without error (µ̂ = µ). Then the mean
survey forecast of depreciation is ∆ŝet+1 = µEt (∆st+1 )+(1−µ)Et (∆st+1 )
= µ[1−k(1−µ)]xt +µ(µ−1)ut +(1−µ)(1+µk)xt +(1−µ)µut = xt , which
predicts that β2 = 1. There is no risk premium if µ̂ = µ. In addition
to β2 = 1, we have β = 1 − k(1 − µ) = 1 − β1 , and β1 = k(1 − µ), which ⇐(126)
amounts to one equation in two unknowns k and µ, so the coeﬃcient
of over-reaction k cannot be identiÞed here.
     We can ‘back out’ the implied value of over-reaction k if we are
willing to make an assumption about survey measurement error. If
µ̂ 6= µ, then ∆ŝet+1 = µ̂Et (∆st+1 ) + (1 − µ̂)Et (∆st+1 ) = [1 + k(µ −
µ̂)]xt + (µ − µ̂)ut , which implies, β2 = 1 + k(µ − µ̂), β1 = k(1 − µ̂),
and β = 1 − k(1 − µ). For given values of µ̂, β1 , and β, we have,
k = β1 /(1 − µ̂), and µ = (β − 1 + k)/k. For example, if we assume that
µ̂ = 0.5, the 3-month horizon BIC-US results in Table 6.4 imply that
k = 11.94 and µ = 0.579.
202CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

   Foreign Exchange Market Eﬃciency Summary

   1. The Þnancial market is said to be eﬃcient if there are no unex-
      ploited excess proÞt opportunities available. What is excessive
      depends on a model of market equilibrium. Violations of uncov-
      ered interest parity in and of themselves does not mean that the
      foreign exchange market is ineﬃcient.
   2. The Lucas model–perhaps the most celebrated asset pricing
      model of the last 20 years–provides a qualitative and elegant
      explanation for why uncovered interest parity doesn’t hold. The
      reason is that risk-averse agents must be compensated with a
      risk premium in order for them to hold forward contracts in a
      risky currency. The forward rate becomes a biased predictor of
      the future spot rate because this risk premium is impounded
      into the price of a forward contract. But the Lucas model re-
      quires what many people regard as an implausibly coeﬃcient of
      relative risk aversion to generate suﬃciently large and variable
      risk premia to be consistent with the volatility of exchange rate
      returns data.
   3. Analyses of survey data from professional foreign exchange mar-
      ket participants predictions of future exchange rates Þnd that
      the survey forecast error is systematic. If you believe the survey
      data, these systematic prediction errors may be the reason that
      uncovered interest parity doesn’t hold.
   4. Market participant’s systematic forecast errors can be consis-
      tent with rationality. A class of models called ‘peso-problem’
      models show how rational agents make systematic prediction
      errors when there is a positive probability that the underlying
      structure may undergo a regime shift.
   5. On the other hand, it may be the case that some market partic-
      ipants are indeed irrational in the sense that they believe that
      pseudo signals are important determinants of asset returns. The
      presence of such noise traders generate equilibrium asset prices
      that deviate from their fundamental values.
6.6. NOISE-TRADERS                                                            203

Problems
   1. (Siegel’s [128] Paradox) Let St be the spot dollar price of the euro
      and Ft be the 1-period forward rate in dollars per euro. The claim is
      if investors are risk-neutral and the forward foreign exchange market ⇐(128)
      is eﬃcient, the forward rate is the rational expectation of the future
      spot rate. From the US perspective we write this as

                                      Et (St+1 ) = Ft .

       The risk-neutral, rational-expectations, eﬃcient market statement from
       an European perspective is

                                   (1/Ft ) = Et (1/St+1 )

       since from the euro-price of the dollar is the reciprocal of the dollar-
       euro rate. Both statements cannot possibly be true. Why not? (Hint:
       Use Jensen’s inequality).

   2. Let the Euler equation for a domestic investor that speculates in for-
      ward foreign exchange be
                                   Et [u0 (ct+1 )(St+1 /Pt+1 )]
                            Ft =                                ,
                                        Et [u0 (ct )/Pt+1 ]
       where u0 (c) is marginal utility of real consumption c and P is the
       domestic price level. From the foreign perspective, the Euler equation
       is
                             1    Et [u0 (c∗t+1 /(St+1 Pt+1
                                                          ∗ )]
                                =
                             Ft        Et [u0 (c∗t )/Pt+1
                                                      ∗ ]

       where c∗ is foreign consumption and P ∗ is the foreign price level.
       Suppose further that both domestic and foreign agents are risk neutral.
       Show that Siegel’s paradox does not pose a problem now that payoﬀs
       are stated in real terms.16

   3. We saw that the slope coeﬃcient in a regression of st −st−1 on ft −st−1
      is negative. McCallum [103] shows regressing st − st−2 on ft − st−2
      yields a slope coeﬃcient near 1. How can you explain McCallum’s
      result?
  16
    Engel’s [43] empirical work showed that regression test results on forward ex-
change rate unbiasedness done with nominal exchange rates were robust to speciÞ-
cations in real terms so evidently Siegel’s paradox is not economically important.
204CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY

 4. (Kaminsky and Peruga [82]). Suppose that the data generating process
    for observations on consumption growth, inßation, and exchange rates
    is given by the lognormal distribution, and that the utility function
    is u(c) = c1−γ . Let lower case letters denote variables in logarithms.
    We have ∆ct+1 = ln(Ct+1 /Ct ) be the rate of consumption growth,
    ∆st+1 = ln(St+1 /St ) be the depreciation rate, ∆pt+1 = ln(Pt+1 /Pt )
    be the inßation rate, and ft = ln(Ft ) be the log one-period forward
    rate.
    If ln(Y ) ∼ N(µ, σ 2 ), then Y is said to be log-normally distributed and
                                                      h           i
                            h           i                     2
                                                          µ+ σ2
                                ln(y)
                          E e               = E(Y ) = e               .   (6.74)

    Let Jt consist of lagged values of ct , st , pt and ft be the date t infor-
    mation set available to the econometrician. Conditional on Jt , let
    yt+1 = (∆st+1 , ∆ct+1 , ∆pt+1 )0 be normally distributed with condi-
    tional mean E(y                                 0
                    t+1 |Jt ) = (µst , µct , µpt ) and conditional covariance
                     σsst σsct σspt
                                        
    matrix Σt =  σcst σcct σcpt  . Let at+1 = ∆st+1 − ∆pt+1 and
                     σpst σpct σppt
    bt+1 = ft − st − ∆pt+1 . Show that
                                                             σsst
                         µst − ft = γσcst + σspt −                .       (6.75)
                                                              2

 5. Testing the volatility restrictions (Cecchetti et. al. [25]). This exercise
    develops the volatility bounds analysis so that we can do classical
    statistical hypothesis tests to compare the implied volatility of the
    intertemporal marginal rate of substitution and the lower volatility
    bound. Begin deÞning φ as a vector of parameters that characterize
    the utility function, and ψ as a vector of parameters associated with
    the stochastic process governing consumption growth.
    Stack the parameters that must be estimated from the data into the
    vector θ                              
                                     µr
                                          
                            θ =  vec(Σr )  ,
                                     ψ
    where vec(Σr ) is the vector obtained by stacking all of the unique
    elements of the symmetric matrix, Σr . Let θ0 be the true value of θ,
6.6. NOISE-TRADERS                                                                           205

     and let θ̂ be a consistent estimator of θ0 such that
                             √              D
                               T (θ̂ − θ0 ) → N (0, Σθ ).
     Assume that consistent estimators of both θ0 and Σθ are available.
     Now make explicit the fact that the moments of the intertemporal
     marginal rate of substitution and the volatility bound depend on sam-
     ple information. The estimated mean and standard deviation of pre-
     dicted by the model are, µ̂µ = µµ (φ; ψ̂) and σ̂µ = σµ (φ; ψ̂), while the
     estimated volatility bound is
                                r³                         ´0       ³                  ´
           σ̂r = σr (φ; θ̂) =        µ̂q − µµ (φ; ψ̂)µ̂r        Σ̂−1
                                                                  r  µ̂q − µµ (φ; ψ̂)µ̂r .

     Let
                             ∆(φ; θ̂) = σM (φ; ψ̂) − σr (φ; θ̂),
     be the diﬀerence between the estimated volatility bound and the es-
     timated volatility of the intertemporal marginal rate of substitution.
     Using the ‘delta method,’ (a Þrst-order Taylor expansion about the
     true parameter vector), show that
                      √                          D        2
                        T (∆(φ; θ̂) − ∆(φ; θ0 )) → N (0, σ∆ ),
     where                      µ      ¶                            µ     ¶
                       2   ∂∆                           ∂∆
                      σ∆ =   0
                                  (θ̂ − θ0 )(θ̂ − θ0 )0       .
                           ∂θ θ0                        ∂θ θ0
     How can this result be used to conduct a statistical test of whether a
     particular model attains the volatility restrictions?
  6. (Peso problem). Let the fundamentals, ft = mt −m∗t −λ(yt −yt∗ ) follow
     the random walk with drift, ft+1 = δ0 + ft + vt+1 , where vt ∼ iid with
     E(vt ) = 0 and E(vt2 ) = σv2 . Agents know the fundamentals process
     with certainty. Forward iteration on (6.33) yields the present value
     formula                          ∞        X
                                      st = γ         Et (ft+j ).
                                               j=1
     Verify the solution (6.38) by direct substitution of Et (ft+j ).
     Now let agents believe that the drift may have increased to δ = δ1 .
     Show that Et (ft+j ) = ft + j(δ0 − δ1 )p0t + jδ1 . Use direct substitution
     of this forecasting formula in the present value formula to verify the
     solution (6.43) in the text.
206CHAPTER 6. FOREIGN EXCHANGE MARKET EFFICIENCY
Chapter 7

The Real Exchange Rate

In this chapter, we examine the behavior of the nominal exchange rate
in relation to domestic and foreign goods prices in the short run and
in the long run. A basic theoretical framework that underlies the em-
pirical examination of these prices is the PPP doctrine encountered in
chapter 3. The ßexible price models of chapters 3 through 5 assume
that the the law-of-one price holds internationally, and by implication,
that purchasing-power parity holds. In empirical work, we deÞne the
(log) real exchange rate between two countries as the relative price
between a domestic and foreign commodity basket

                            q = s + p∗ − p.                         (7.1)

Under purchasing-power parity, the log real exchange rate is constant
(speciÞcally, q = 0).
    The prediction that qt is constant is clearly false–a fact we discov-
ered after examining Figures 3.1 in chapter 3.1. This result is not new.
So given the obvious short-run violations of PPP, the interesting things
to study are whether these international pricing relationships hold in
the long run, and if so, to see how much time it takes to get to the
long-run.
    Why would we want to know this? Because real exchange rate
ßuctuations can have important allocative eﬀects. A prolonged real
appreciation may have an adverse eﬀect on a country’s competitiveness
as the appreciation raises the relative price of home goods and induces

                                  207
208                   CHAPTER 7. THE REAL EXCHANGE RATE

expenditures to switch from home goods toward foreign goods. Domes-
tic output might then be expected to fall in response. Although the
domestic traded-goods sector is hurt, consumers evidently beneÞt. On
the other hand, a real depreciation may be beneÞcial to the traded-
goods sector and harmful to consumers. The foreign debt of many
developing countries, is denominated in US dollars, however, so a real
depreciation reßects a real increase in debt servicing costs. These ex-
penditure switching eﬀects are absent in the ßexible price theories that
we have covered thus far.
    So what leads you to conclude that PPP does not hold in the long
run. Would this make any sense? What theory predicts that PPP
does not hold? The Balassa [6]—Samuelson [124] model, which is devel-
oped in this chapter provides one such theory. The Balassa—Samuelson
model predicts that the long-run real exchange rate depends on relative
productivity trends between the home and foreign countries. If rela-
tive productivity is governed by a stochastic trend, the real exchange
rate will similarly be driven and will not exhibit any mean-reverting
behavior.
    The research on real exchange rate behavior raises many questions,
but as we will see, oﬀers few concrete answers.


7.1      Some Preliminary Issues
The Þrst issue that you confront in real exchange rate research is that
data on price levels are generally not available. Instead, you typically
have access to a price index PtI , which is the ratio of the price level Pt
in the measurement year to the price level in a base year P0 . Letting
stars denote foreign country variables and lower case letters to denote
variables in logarithms, the empirical log real exchange rate uses price
indices and amounts to

                      qt = (p0 − p∗0 ) + st + p∗t − pt .             (7.2)

st +p∗t −pt is the relative price of the foreign commodity basket in terms
of the domestic basket. This term is 0 if PPP holds instantaneously,
and is mean-reverting about 0 if PPP is violated in the short run but
holds in the long run. Tests of whether PPP holds in the long run
7.2. DEVIATIONS FROM THE LAW-OF-ONE PRICE                              209

typically ask whether qt is stationary about a Þxed mean because even
if PPP holds, measured qt will be (p0 − p∗0 ) which need not be 0 due to
the base year normalization of the price indices.
    An older literature made the distinction between absolute PPP (st +
p∗t − pt = 0) and relative PPP (∆st + ∆p∗t − ∆pt = 0). By taking Þrst
diﬀerences of the observations, the arbitrary base-year price levels drop
out under relative PPP. In this chapter, when we talk about PPP, we
mean absolute PPP.
    A second issue that you confront in this line of research is that there
are as many empirical real exchange rates as there are price indices. As
discussed in chapter 3.1, you might use the CPI if your main interest
is to investigate the Casellian view of PPP because the CPI includes
prices of a broad range of both traded and nontraded Þnal goods. The
PPI has a higher traded-goods component than the CPI and is viewed
by some as a crude measure of traded-goods prices. If a story about
aggregate production forms the basis of your investigation, the gross
domestic product deßator may make better sense.


7.2      Deviations from the Law-Of-One Price
The root cause of deviations from PPP must be violations of the law-of-
one price. Such violations are easy to Þnd. Just check out the price of
unleaded regular gasoline at two gas stations located at diﬀerent corners
of the same intersection. More puzzling, however, is that international
violations of the law-of-one price are several orders of magnitude larger
than intranational violations. There is a large empirical literature that
studies international violations of the law-of-one price. We will con-
sider two of the many contributions that have attracted attention of
international macroeconomists.

Isard’s Study of the Law-Of-One Price
Isard [79] collected unit export and unit import transactions prices
for the US, Germany, and Japan from 1970 to 1975 at 4 and 5 digit
standard international trade classiÞcation (SITC) levels for machined
items. Isard deÞnes the relative export price to be the ratio of the US
210                        CHAPTER 7. THE REAL EXCHANGE RATE

dollar price of German exports of these items to the dollar price of US
exports of the same items. Between 1970 and 1975, the dollar fell by
55.2 percent while at the same time the relative export price of internal
combustion engines, oﬃce calculating machinery, and forklift trucks
increased by 48.1 percent, 47.7 percent, and 39.1 percent, respectively
in spite of the fact that German and US prices are both measured in
dollars. Evidently, nominal exchange rate changes over this Þve-year
period had a big eﬀect on the real exchange rate.
    In a separate regression analysis, he obtains 7-digit export com-
modities which he matches to 7-digit import unit values in which the
imports are distinguished by country of origin. The dependent variable
is the US import unit value from Canada, Japan, and Germany, respec-
tively, divided by the unit values of US exports to the rest of the world,
both measured in dollars. If the law-of-one price held, this ratio would
be 1. Instead, when the ratio is regressed on the DM price of the dollar,
the slope coeﬃcient is positive but is signiÞcantly diﬀerent from 1 for
Germany and Japan. The slope coeﬃcients and implied standard errors
for Germany and Japan are reproduced in Table 7.1.1 The estimates
for Germany indicate that import and export prices exhibit insuﬃcient
dependence on the exchange rate to be consistent with the law-of-one
price, whereas the estimates for Japan suggest that there is too much
dependence.
    While Isard’s study provides evidence of striking violations of the
law-of-one price, it is important to bear in mind that these results were
drawn from a very short time-series sample taken from the 1970s. This
was a time period of substantial international macroeconomic uncer-
tainty and one in which people may have been relatively unfamiliar
with the workings of the ßexible exchange rate system.



   1
     A potential econometric problem in Isard’s analysis is that he runs the regression
Rt = a0 + a1 St + a2 Dt + et + ρet−1 where Rt is the ratio of import to export prices,
St is the DM price of the dollar, and Dt is a dummy variable that splits up the
sample. The problem is that the regression is run by Cochrane—Orcutt to control
for serial correlation in the error term, et , which is inconsistent if the regressors are
not strictly (econometrically) exogenous.
7.2. DEVIATIONS FROM THE LAW-OF-ONE PRICE                                     211


Table 7.1: Slope coeﬃcients in Isard’s regression of the US import to
export price ratio on nominal exchange rate

          Imports from Germany     Imports from Japan
         Soap Tires Wallpaper Soap Tires Wallpaper
        0.094   0.04      0.03  15.49   6.28      6.79
        (0.04) (0.02)    (0.01) (13.8) (1.04)    (1.28)



Engel and Rogers on the Border
Engel and Rogers [46] ask what determines the volatility of the per-
centage change in the price of 14 categories of consumer prices sampled
in various US and Canadian cities from Sept. 1978 through Dec. 1994.2
Let pijt be the price of good i in city j at time t, measured in US dol-
lars. Let σijk be the volatility of the percentage change in the relative
price of good i in cities j and k. That is, σijk is the time-series sample
standard deviation of ∆ ln(pijt /pikt ). In addition, deÞne Djk as the log-
arithm of the distance between cities j and k. The idea of the distance
variable is to capture potential eﬀects of transportation costs that may
cause violations of the law-of-one price between two locations. Let Bjk
be a dummy variable that is 1 if cities j and k are separated by the
US-Canadian border and 0 otherwise, and let Xi0 be a vector of control
variables, such as a separate dummy variable for each good i and/or for
each city in the sample. Engel and Rogers run restricted cross-section
regressions
                   σijk = αDjk + βBjk + Xi0 γ i + uijk ,

and obtain β̂ = 10.6 × 10−4 (s.e.=3.25 × 10−4 ), α̂ = 11.9 × 10−3
(s.e.=0.42 × 10−3 ), R̄2 = 0.77. The regression estimates imply that
the border adds 11.9 × 10−3 to the average volatility (standard devi-
ation) of prices between two pairs of cities. Based on the estimate of
   2
     The cities are Baltimore, Boston, Chicago, Dallas, Detroit, Houston, Los Ange-
les, Miami, New York, Philadelphia, Pittsburgh, San Francisco, St. Louis, Washing-
ton D.C., Calgary, Edmonton, Montreal, Ottawa, Quebec, Regina, Toronto, Van-
couver, and Winnipeg.
212                        CHAPTER 7. THE REAL EXCHANGE RATE

α, this is equivalent to an additional 75,000 miles of distance between
two cities in the same country. In addition, the border was found to
account for 32.4 percent of the variation in the σijk , while log distance
was found to explain 20.3 percent.
    The striking diﬀerences between within country violations of the
law-of-one price and across country violations raise but do not answer
the question, “Why is the border is so important?” This is still an open
question but possible explanations include,

   1. Barriers to international trade, such as tariﬀs, quotas, and non-
      tariﬀ barriers such as bureaucratic red tape imposed on foreign
      businesses. The Engel-Rogers sample spans periods of pre- and
      post-trade liberalization between the US and Canada. In sub-
      sample analysis, they reject the trade barrier hypothesis.

   2. Labor markets are more integrated and homogeneous within coun-
      tries than they are across countries. This might explain why there
      would be less volatility in per unit costs of production across cities
      within the same country and more per unit cost volatility across
      countries.

   3. Nominal price stickiness. Goods prices seem to respond to macroe-
      conomic shocks and news with a lag and behave more sluggishly
      than asset prices and nominal exchange rates. Engel and Rogers
      Þnd that this hypothesis does not explain all of the relative price
      volatility.3

   4. Pricing to market. This is a term used to describe how Þrms
      with monopoly power engage in price discrimination between seg-
      mented domestic and foreign markets characterized by diﬀerent
      elasticities of demand.

   3
     The experiment they run here is as follows. Instead of measuring the relative
intercity price as pijt /(St p∗ikt ) where S is the nominal exchange rate, p is the US
dollar price and p∗ is the Canadian dollar price, replace it with (pijt /Pt )/(Pt∗ /p∗ikt )
where P and P ∗ are the overall price levels in the US and Canada respectively. If the
border eﬀect is entirely due to sticky prices, the border should be insigniÞcant when
the alternative price measure is used. But in fact, the border remains signiÞcant so
sticky nominal prices can provide only a partial explanation.
7.3. LONG-RUN DETERMINANTS OF THE REAL EXCHANGE RATE213

What About the Long-Run?
Since the international law-of-one price and purchasing-power parity
has Þrmly been shown to break down in the short run, the next step
might be to ask whether purchasing-power parity holds in the long run.
Recent work on this issue proceeds by testing for a unit root in the log
real exchange rate. The null hypothesis in popular unit-root tests is
that the series being examined contains a unit root. But before we jump
in we should ask whether these tests are interesting from an economic
perspective. In order for unit-root tests on the real exchange rate to
be interesting, the null hypothesis (that the real exchange rate has a
unit root) should have a Þrm theoretical foundation. Otherwise, if we
do not reject the unit root, we learn only that the test has insuﬃcient
power to reject a null hypothesis that we know to be false, and if we
do reject the unit root, we have only conÞrmed what we believed to be
true in the Þrst place.
    The next section covers the Balassa-Samuelson model which pro-
vides a theoretical justiÞcation for PPP to be violated even in the long
run.


7.3     Long-Run Determinants of the Real
        Exchange Rate
We study a two-sector small open economy. The sectors are a tradable-
goods sector and a nontradable-goods sector. The terms of trade (the
relative price of exports in terms of imports) are given by world con-
ditions and are assumed to be Þxed. Before formally developing the
model, it will be useful to consider the following sectoral decomposi-
tion of the real exchange rate.

Sectoral Real Exchange Rate Decomposition
Let PT be the price of the tradable-good and PN be the price of the ⇐(129)
nontradable-good, and let the general price level be given by the Cobb-
Douglas form
                         P = (PT )θ (PN )1−θ ,                     (7.3)
214                     CHAPTER 7. THE REAL EXCHANGE RATE

                            P ∗ = (PT∗ )θ (PN∗ )1−θ ,                  (7.4)
where the shares of the traded and nontraded-goods are identical at
home and abroad (θ∗ = θ). The log real exchange rate can be decom-
posed as
      q = (s + p∗T − pT ) + (1 − θ)(p∗N − p∗T ) − (1 − θ)(pN − pT ),   (7.5)
where lower case letters denote variables in logarithms. We adopt the
commodity arbitrage view of PPP (chapter 3.1) and assume that the
law-of-one price holds for traded goods. It follows that the Þrst term
on the right hand side of (7.5), which is the deviation from PPP for
the traded good, is 0. The dynamics of the real exchange rate is then
completely driven by the relative price of the tradable good in terms of
the nontraded good.

The Balassa—Samuelson Model
Now, we need a theory to understand the behavior of the relative price
of tradables in terms of nontradables. It turns out if, i) factor markets
and Þnal goods markets are competitive, ii) production takes place
under constant returns to scale, iii) capital is perfectly mobile interna-
tionally, iv) labor is internationally immobile but mobile between the
tradable and nontradable sectors, then the relative price of nontrad-
able goods in terms of tradable goods is determined entirely by the
production technology. Demand (preferences) does not matter at all.
    The theory is viewed as holding in the long run and therefore omit
time subscripts. To Þx ideas, let there be only one traded good and one
nontraded good. Capital and labor are supplied elastically. Let LT (LN )
and KT (KN ) be labor and capital employed in the production of the
traded YT (nontraded YN ) good. AT (AN ) is the technology level in the
traded (nontraded) sector. The two goods are produced according to
Cobb-Douglas production functions
                                        (1−αT )     (α )
                         YT = AT LT               KT T ,               (7.6)
                                         (1−αN )    (α )
                         YN = AN LN                KN N .              (7.7)
The balance of trade is assumed to be zero which must be true in
the long run. Let the traded good be the numeraire. The small open
7.3. LONG-RUN DETERMINANTS OF THE REAL EXCHANGE RATE215

economy takes the price of traded goods as given. We’ll set PT = 1. R
is the rental rate on capital, W is the wage rate, and PN is the price of
nontraded goods, all stated in terms of the traded good.
    Competitive Þrms take factor and output prices as given and choose
K and L to maximize proÞts. The intersectoral mobility of labor and
capital equalizes factor prices paid in the tradable and nontradable
sectors. The tradable-good Þrm chooses KT and LT to maximize proÞts
                         (1−αT )
                   AT LT           KTαT − (W LT + RKT ).                    (7.8)
The nontradable-good Þrm’s problem is to choose KN and LN to max-
imize
                      (1−α )
               PN AN LN N KNαN − (W LN + RKN ).              (7.9)
   Let k ≡ (K/L) denote the capital—labor ratio. It follows from the
Þrst order conditions
                    R     =   AT αT (kT )αT −1 ,                           (7.10)
                    R     =   PN AN αN (kN )αN −1 ,                        (7.11)
                    W     =   AT (1 − αT )(kT )αT ,                        (7.12)
                    W     =   PN AN (1 − αN )(kN )αN .                     (7.13)
The international mobility of capital combined with the small country
assumption implies that R is exogeneously given by the world rental
rate on capital. (7.10)-(7.13) form four equations in the four unknowns
(PN , W, kT , kN ).
    To solve the model, Þrst obtain the traded-goods sector capital-labor
ratio from (7.10)
                                 ·      ¸ 1
                                   αT AT (1−αT )
                          kT =                   .                 (7.14)
                                     R
Next, substitute (7.14) into (7.12) to get the wage rate
                                                     ·         ¸ αT
                                             1            αT    1−αT
                  W = (1 − αT )(AT )      (1−αT )
                                                                       .   (7.15)
                                                          R
Substituting (7.15) into (7.13), you get
                                         1      ³ ´ αT  αN
                                                           1
                                       (1−αT )       αT
                                                    1−αT
                      (1 − αT ) AT                  R   
               kN = 
                    
                                                         
                                                            .             (7.16)
                         (1 − αN )         PN    A    N
         216                   CHAPTER 7. THE REAL EXCHANGE RATE

(130)⇒   Finally, plug (7.16) into (7.11) to get the solution for relative price of
         the nontraded good in terms of the traded good
                                          (1−αN )
                                          (1−αT )
                                        AT             (αN −αT )
                                 PN =               CR (1−αT )               (7.17)
                                         AN
         where C is a positive constant. Now let a = ln(A), r = ln(R), and
         c = ln(C) and take logs of (7.17) to get the solution for the log relative
         price of nontraded goods in terms of traded goods
                        µ        ¶              Ã                  !
                       1 − αN           (αN − αT )
                  pN =        aT − aN +            r + c.                    (7.18)
                       1 − αT            (1 − αT )
         Over time, the evolution of the log relative price of nontradables de-
         pends only on the technology and the exogenous rental rate on capital.
         We see that there are at least two reasons why the relative price of
         non-tradables in terms of tradables should increase with a country’s
         income.
              First, suppose that the economy experiences unbiased technological
         growth where aN and aT increase at the same rate. pN will rise over time
         if traded-goods production is relatively capital intensive (αN < αT ). A
         standard argument is that tradables are manufactured goods whose
         production is relatively capital intensive whereas nontraded goods are
         mainly services which are relatively labor intensive. Second, pN will
         increase over time if technological growth is biased towards the capital
         intensive sector. In this case, aT actually grows at a faster rate than
         aN . If either of these scenarios are correct, it follows that fast growing
         economies will experience a rising relative price of nontradables and by
         (7.5), a real appreciation over time.
              The implications for the behavior of the real exchange rate are as
         follows. If the productivity factors grow deterministically, the devia-
         tion of the real exchange rate from a deterministic trend should be a
         stationary process. But if the productivity factors contain a stochastic
         trend (chapter 2.6) the log real exchange rate will inherit the random
         walk behavior and will be unit-root nonstationary. In either case, PPP
         will not hold in the long run.
              When we take the Balassa—Samuelson model to the data, it is tempt-
         ing to think of services as being nontraded. It is also tempting to think
7.4. LONG-RUN ANALYSES OF REAL EXCHANGE RATES 217

that services are relatively labor intensive. While this may be true of
some services, such as haircuts, it is not true that all services are non-
traded or that they are labor intensive. Financial services are sold at
home and abroad by international banks which make them traded, and
transportation and housing services are evidently capital intensive.


7.4      Long-Run Analyses of Real Exchange
         Rates
Empirical research into the long-run behavior of real exchange rates
has employed econometric analyses of nonstationary time series and
is aimed at testing the hypothesis that the real exchange rate has a
unit root. This research can potentially provide evidence to distinguish
between the Casselian and the Balassa—Samuelson views of the world.


Univariate Tests of PPP Over the Float

To test whether PPP holds in the long run, you can use the augmented
Dickey-Fuller test (chapter 2.4) to test the hypothesis that the real
exchange rate contains a unit root. Using quarterly observations of the
CPI-deÞned real exchange rate from 1973.1 to 1997.4 for 19 high-income
countries, Table 7.2 shows the results of univariate unit-root tests for
US and German real exchange rates. Four lags of ∆qt and a constant
were included in the test equation. The p-values are the proportion of
the Dickey—Fuller distribution that lies to the left (below) τc . Including
a trend in the test regressions yields qualitatively similar results and
are not reported.

Statistical versus Economic SigniÞcance. Classical hypothesis testing
is designed to establish statistical signiÞcance. Given a suﬃciently long
time series, it may be possible to establish statistical signiÞcance of the
studentized coeﬃcients to reject the unit root, but if the true value of
the dominant root is 0.98, the half-life of a shock is still over 34 years
and this stationary process may not be signiÞcantly diﬀerent from a
true unit-root process in the economic sense.
218                      CHAPTER 7. THE REAL EXCHANGE RATE

    If that is indeed the case, then in light of the statistical diﬃculties
surrounding unit-root tests, it can be argued that we should not even
care whether the real exchange rate has a unit root but we should in-
stead focus on measuring the economic implications of the real exchange
rate’s behavior. What market participants care about is the degree of
persistence in the real exchange rate and one measure of persistence is
the half life.
    The annualized half-lives reported in Table 7.2 are based on esti-
mates adjusted for bias by Kendall’s formula [equation (2.81)].4 The
average half-life is 3.7 years when the US is the numeraire country. That
is, on average, it takes 3.7 years–quite a long time since the business
cycle frequency ranges from 1.25 to 8 years–for half of a shock to the
log real exchange rate to disappear. The average half-life is 2.6 years
when Germany is the numeraire county.
    Univariate tests using data from the post Bretton-Woods ßoat typ-
ically cannot reject the hypothesis that the real exchange rate is driven
by a unit-root process. Using the US as the home country, only two of
the tests can reject the unit root at the 10 percent level of signiÞcance.
    The results are somewhat sensitive to the choice of the home (nu-
meraire) country.5 Part of the persistence exhibited in the real value
of the dollar comes from the very large swings during the 1980s. The
real appreciation in the early 1980s and the subsequent depreciation
was largely a dollar phenomenon not shared by cross-rates. To illus-
trate, the evidence for purchasing-power parity is a little stronger when
Germany is used as the home country since here, the unit root can be
rejected at the 10 percent level of signiÞcance for German real exchange
rates with several European countries.

Univariate Tests for PPP Over Long Time Spans
One reason that the evidence against a unit root in qt is weak may be
that the power of the test is low with only 100 quarterly observations.6
   4
     Christiano and Eichenbaum [27] put forth this argument in the context of the
unit root in GNP.
   5
     A point made by Papell and Theodoridis [119].
   6
     The power of a test is the probability that the test correctly rejects the null
hypothesis when it is false.
7.4. LONG-RUN ANALYSES OF REAL EXCHANGE RATES 219




Table 7.2: Augmented Dickey-Fuller Tests for a Unit Root in Post-1973
Real Exchange Rates
                     Relative to US                       Relative to Germany
 Country        τc     (p-value) half-life              τc     (p-value) half-life
 Australia    -1.895    (0.329)     4.582             -2.444     (0.124)   2.095
 Austria      -2.434    (0.126)     3.208            -3.809 (0.004)        5.516
 Belgium      -2.369    (0.138)     4.223            -2.580 (0.093)        2.914
 Canada       -1.342    (0.621)       –               -2.423     (0.127)   2.914
 Denmark      -2.319    (0.155)     3.733            -3.212 (0.017)        1.759
 Finland      -2.919    (0.039)     2.421            -2.589 (0.089)        3.208
 France       -2.526    (0.105)     2.761            -4.540 (0.001)        0.695
 Germany      -2.470    (0.118)     3.025               –           –       –
 Greece       -2.276    (0.169)     4.336             -2.360     (0.140)   1.278
 Italy        -2.511    (0.107)     2.580             -1.855     (0.351)   5.709
 Japan        -2.057    (0.252)     9.251             -1.930     (0.314)  11.919
 Korea        -1.235    (0.677)     3.274             -2.125     (0.215)   1.165
 Netherlands -2.576 (0.094)         2.623            -2.676 (0.075)        2.969
 Norway       -2.184    (0.193)     2.668            -2.573 (0.095)        2.539
 Spain        -2.358    (0.140)     5.006             -2.488     (0.113)   2.861
 Sweden       -2.042    (0.257)     5.516             -2.534     (0.103)   1.719
 Switzerland -2.670 (0.076)         2.215            -3.389 (0.011)        1.759
 UK           -2.484    (0.113)     2.313             -2.272     (0.169)   3.274
Notes: Half-lives are adjusted for bias and are measured in years. SigniÞcance at
the 10 percent level indicated in boldface.
         220                       CHAPTER 7. THE REAL EXCHANGE RATE


         Table 7.3: ADF test and annual half-life estimates using over a century
         of real dollar—pound real exchange rates
                      Lags      τc   (p-value) half-life   τct  (p-value) half-life
                        4    -3.074 (0.028)     6.911 -4.906 (0.001)       2.154
          PPIs          8     -2.122  (0.238)  10.842 -4.104 (0.007)       2.126
                       12     -1.559  (0.510)  16.720 -2.754     (0.229)   2.785
                        4    -3.148 (0.031)     3.659 -3.201 (0.096)       3.520
          CPIs          8    -3.087 (0.037)     3.033    -3.101  (0.124)   2.982
                       12    -2.722 (0.073)     2.917    -2.720  (0.243)   2.885
         Bold face indicates signiÞcance at the 10 percent level.



         One way to get more observations is to go back in time and examine real
         exchange rates over long historical time spans. This was the strategy
         of Lothian and Taylor [94], who constructed annual real exchange rates
         between the US and the UK from 1791 to 1990 and between the UK
         and France from 1803 to 1990 using wholesale price indices.
(131)⇒       Figure 7.1 displays the log nominal and log real exchange rate (mul-
         tipled by 100) for the US-UK using CPIs. Using the “eyeball metric,”
         the real exchange rate appears to be mean reverting over this long his-
         torical period. Table 7.3 presents ADF unit-root tests on annual data
         for the US and UK. The real exchange rate deÞned over producer prices
         extend from 1791 to 1990 and are Lothian and Taylor’s data.7 The real
         exchange rate deÞned over consumer prices extend from 1871 to 1997.
         Half-lives are adjusted for bias with Kendall’s formula (eq. (2.81)).
         Using long time-span data, the augmented Dickey—Fuller test can re-
         ject the hypothesis that the real dollar-pound rate has a unit root. The
         test is sensitive to the number of lagged ∆qt values included in the test
         regression, however. The studentized coeﬃcients are signiÞcant when
         a trend is included in the test equation which rejects the hypothesis
         that the deviation from trend has a unit root. This result is consis-
         tent with the Balassa—Samuelson model in which sectoral productivity
         diﬀerentials evolved deterministically.

            7
                David Papell kindly provided me with Lothian and Taylor’s data.
7.4. LONG-RUN ANALYSES OF REAL EXCHANGE RATES 221


         40
                                                            Real
         20

          0

        -20

        -40

        -60
                                                              Nominal
        -80

       -100
              1871 1883   1895   1907   1919 1931   1943   1955 1967    1979   1991


         Figure 7.1: Real and nominal dollar-pound rate 1871-1997

Variance Ratios of Real Exchange Rates
We can use the variance-ratio statistic (see chapter 2.4) to examine
the relative contribution to the overall variance of the real depreciation
from a permanent component and a temporary component. Table 7.4
shows variance ratios calculated on the Lothian—Taylor data along with
asymptotic standard errors.8
    The point estimates display a ‘hump’ shape. They initially rise
above 1 at short horizons then fall below 1 at the longer horizons. This
is a pattern often found with Þnancial data. The variance ratio falls
below 1 because of a preponderance of negative autocorrelations at the
longer horizons. This means that a current jump in the real exchange
rate tends to be oﬀset by future changes in the opposite direction. Such
movements are characteristic of mean—reverting processes.
    Even at the 20 year horizon, however, the point estimates indicate
that 23 percent of the variance of the dollar—pound real exchange rate
   8
    Huizinga [77] calculated variance ratio statistics for the real exchange rate from
1974 to 1986 while Grilli and Kaminisky [68] did so for the real dollar—pound rate
from 1884 to 1986 as well as over various subperiods.
222                   CHAPTER 7. THE REAL EXCHANGE RATE



Table 7.4: Variance ratios and asymptotic standard errors of real
dollar—sterling exchange rates. Lothian—Taylor data using PPIs.
   k       1     2    3     4             5     10    15    20
  VRk     1.00 1.07 0.951 0.906         0.841 0.457 0.323 0.232
  s.e.     – 0.152 0.156 0.166          0.169 0.124 0.106 0.0872



can be attributed to a permanent (random walk) component. The
asymptotic standard errors tend to overstate the precision of the vari-
ance ratios in small samples. That being said, even at the 20 year
horizon VR20 for the dollar—pound rate is (using the asymptotic stan-
dard error) signiÞcantly greater than 0 which implies the presence of a
permanent component in the real exchange rate. This conclusion con-
tradicts the results in Table 7.3 that rejected the unit-root hypothesis.

Summary of univariate unit-root tests. We get conßicting evidence
about PPP from univariate unit-root tests. From post Bretton—Woods
data, there is not much evidence that PPP holds in the long run when
the US serves as the numeraire country. The evidence for PPP with
Germany as the numeraire currency is stronger. Using long-time span
data, the tests can reject the unit-root, but the results are dependent
on the number of lags included in the test equation. On the other hand,
the pattern of the variance ratio statistic is consistent with there being
a unit root in the real exchange rate.
    The time period covered by the historical data span across the Þxed
exchange rate regimes of the gold standard and the Bretton Woods
adjustable peg system as well as over ßexible exchange rate periods
of the interwar years and after 1973. Thus, even if the results on the
long-span data uniformly rejected the unit root, we still do not have
direct evidence that PPP holds during a pure ßoating regime.

Panel Tests for a Unit Root in the Real Exchange Rate
Let’s return speciÞcally to the question of whether long-run PPP holds
over the ßoat. Suppose we think that univariate tests have low power
7.4. LONG-RUN ANALYSES OF REAL EXCHANGE RATES 223


              Table 7.5: Levin—Lin Test of PPP
 Numer- Time             Half-             Half-
  aire  eﬀect      τc     life     τct      life    τc∗                         τct∗
         yes    -8.593 2.953 -9.927 1.796 -1.878                              -0.920
                (0.021)          (0.070)         (0.164)                      (0.093)
                [0.009]          [0.074]         [0.117]                      [0.095]
   US    no      -6.954 5.328 -7.415 3.943          –                           –
                (0.115)          (0.651)
                [0.168]          [0.658]
         yes    -8.017 3.764 -9.701 1.816 -1.642                               -0.628
                (0.018)          (0.106)         (0.154)                      (0.421)
  Ger-          [0.022]          [0.127]         [0.158]                      [0.442]
  many   no    -10.252 3.449 -11.185 1.859          –                            –
                (0.000)          (0.007)
                [0.001]          [0.006]
Notes: Bold face indicates signiÞcance at the 10 percent level. Half-lives are based
on bias-adjusted ρ̂ by Nickell’s formula [eq.(2.82)] and are stated in years. Nonpara-
metric bootstrap p-values in parentheses. Parametric bootstrap p-values in square
brackets.


because the available time-series are so short. We will revisit the ques-
tion by combining observations across the 19 countries that we exam-
ined in the univariate tests into a panel data set. We thus have N = 18
real exchange rate observations over T = 100 quarterly periods.
    The results from the popular Levin—Lin test (chapter 2.5) are pre-
sented in Table 7.5.9 Nonparametric bootstrap p-values in parentheses
and parametric bootstrap p-values in square brackets. τct indicates a
linear trend is included in the test equations. τc indicates that only a
constant is included in the test equations. τc∗ and τct∗ are the adjusted
studentized coeﬃcients (see chapter 2.5). When we account for the
common time eﬀect, the unit root is rejected at the 10 percent level
both when a time trend is and is not included in the test equations
when the dollar is the numeraire currency. Using the deutschemark as
the numeraire currency, the unit root cannot be rejected when a trend
   9
    Frankel and Rose [59], MacDonald [97], Wu [135], and Papell conduct Levin—Lin
tests on the real exchange rate.
224                    CHAPTER 7. THE REAL EXCHANGE RATE


      Table 7.6: Im—Pesaran—Shin and Maddala—Wu Tests of PPP
 Numer-                          Im—Pesaran—Shin
  aire     τ̄c           (p-val) [p-val]     τ̄ct        (p-val) [p-val]
  US     -2.259          (0.047) [0.052]   -2.385        (0.302) [0.307]
  Ger.   -2.641          (0.000) [0.000] -3.119          (0.000) [0.001]
 Numer-                            Maddala—Wu
  aire     τ̄c           (p-val) [p-val]     τ̄ct        (p-val) [p-val]
  US    66.902           (0.083) [0.088] 40.162          (0.351) [0.346]
  Ger.  101.243          (0.000) [0.000] 102.017         (0.000) [0.000]
Nonnparametric bootstrap p-values in parentheses. Parametric bootstrap p-values
in square brackets. Bold face indicates signiÞcance at the 10 percent level.


is included. The asymptotic evidence against the unit root is very weak.
     Next, we test the unit root when the common time eﬀect is omit-
ted. Here, the evidence against the unit root is strong when the
deutschemark is the numeraire currency, but not for the dollar. The
bias-adjusted approximate half-life to convergence range from 1.7 to 5.3
years, which many people still consider to be a surprisingly long time.
     Table 7.6 shows panel tests of PPP using the Im, Pesaran, and
Shin test and the Maddala—Wu test. Here, I did not remove the com-
mon time eﬀect. These tests are consistent with the Levin-Lin test
results. When the dollar is the numeraire, we cannot reject that the
deviation from trend is a unit root. When the deutschemark is the
numeraire currency, the unit root is rejected whether or not a trend is
included. The evidence against a unit root is generally stronger when
the deutschemark is used as the numeraire currency.


Canzoneri, Cumby, and Diba’s test of Balassa-Samuelson
Canzoneri, Cumby, and Diba [21] employ IPS to test implications of the
Balassa—Samuelson model. They examine sectoral OECD data for the
US, Canada, Japan, France, Italy, UK, Belgium, Denmark, Sweden,
Finland, Austria, and Spain. They deÞne output by the “manufac-
turing” and “agricultural, hunting forestry and Þshing” sectors to be
traded goods. Nontraded goods are produced by the “wholesale and
7.4. LONG-RUN ANALYSES OF REAL EXCHANGE RATES 225


     Table 7.7: Canzoneri et. al.’s IPS tests of Balassa—Samuelson

                                     All         European
                Variable          countries G-7  Countries
        (pN − pT ) − (xT − xN ) -3.762 -2.422       –
         st − (pT − p∗T )(dollar)  -2.382 -5.319    –
                       ∗
          st − (pT − pT )(DM)      -1.775   –     -1.565

Notes: Bold face indicates asymptotically signiÞcant at the 10 percent level.



retail trade,” “restaurants and hotels,” “transport, storage and commu-
nications,” “Þnance, insurance, real estate and business,” “community
social and personal services,” and the “non-market services” sectors.
    Their analysis begins with the Þrst-order conditions for proÞt max-
imizing Þrms. Equating (7.12) to (7.13), the relative price of nontrad- ⇐(133)
ables in terms of tradables can be expressed as

                            PN   1 − αT AT kTαT
                               =            αN                              (7.19)
                            PT   1 − αN AN kN

where k = K/L is the capital labor ratio. By virtue of the Cobb-
Douglas form of the production function, Ak α = Y /L is the average
product of labor. Let xT ≡ ln(YT /LT ) and xN ≡ ln(YN /LN ) denote
the log average product of labor. We rewrite (7.19) in logarithmic form
as
                               µ        ¶
                                 1 − αT
                  pN − pT = ln            + xT − xN .            (7.20)
                                 1 − αN

    Table 7.7 shows the standardized t̄ calculated by Canzoneri, Cumby
and Diba. All calculations control for common time eﬀects. Their
results support the Balassa—Samuelson model. They Þnd evidence that
there is a unit root in pN − pT and in xT − xN , and that they are
cointegrated, and there is reasonably strong evidence that PPP holds
for traded goods.
226                     CHAPTER 7. THE REAL EXCHANGE RATE

Size Distortion in Unit-Root Tests

Empirical researchers are typically worried that unit-root tests may
have low statistical power in applications due to the relatively small
number of time series observations available. Low power means that
the null hypothesis that the real exchange rate has a unit root will be
diﬃcult to reject even if it is false. Low power is a fact of life because
for any Þnite sample size, a stationary process can be arbitrarily well
approximated by a unit-root process, and vice versa.10 The conßicting
evidence from post 1973 data and the long time-span data are consistent
with the hypothesis that the real exchange rate is stationary but the
tests suﬀer from low statistical power.
    The ßip side to the power problem is that the tests suﬀer size distor-
tion in small samples. Engel [45] suggests that the observational equiv-
alence problem lies behind the inability to reject the unit root during
the post Bretton Woods ßoat and the rejections of the unit root in the
Lothian—Taylor data and argues that these empirical results are plau-
sibly generated by a permanent—transitory components process with a
slow—moving permanent component. Engel’s point is that the unit-root
tests have more power as T grows and are more likely to reject with
the historical data than over the ßoat. But if the truth is that the real
exchange rate contains a small unit root process, the size of the test
which is approximately equal to the power of the test, is also higher
when T is large. That is, the probability of committing a type I error
also increases with sample size and that the unit-root tests suﬀer from
size distortion with the sample sizes available.




  10
     Think of the permanent—transitory components decomposition. T < ∞ ob-
servations from a stationary AR(1) process will be observationally equivalent to T
observations of a permanent—transitory components model with judicious choice of
the size of the innovation variance to the permanent and the transitory parts. This
is the argument laid forth in papers by Blough [16], Cochrane [30], and Faust [50].
7.4. LONG-RUN ANALYSES OF REAL EXCHANGE RATES 227

   Real Exchange Rate Summary

   1. Purchasing-power parity is a simple theory that links domestic
      and foreign prices. It is not valid as a short-run proposition but
      most international economists believe that some variant of PPP
      holds in the long run.
   2. There are several explanations for why PPP does not hold. The
      Balassa—Samuelson view focuses on the role of nontraded goods.
      Another view, that we will exploit in the next chapter, is that
      the persistence exhibited in the real exchange rate is due to
      nominal rigidities in the macroeconomy where Þrms are reluc-
      tant to change nominal prices immediately following shocks of
      reasonably small magnitude.
228                     CHAPTER 7. THE REAL EXCHANGE RATE

Problems
  1. (Heterogeneous commodity baskets). Suppose there are two goods,
     both of which are internationally traded and for whom the law of one
     price holds,
                        p1t = st + p∗1t , p2t = st + p∗2t ,
      where pi is the home currency price of good i, p∗i is the foreign currency
      price, and s is the nominal exchange rate, all in logarithms. Assume
      further that the nominal exchange rate follows a unit-root process,
      st = st−1 + vt where vt is a stationary process, and that foreign prices
      are driven by a common stochastic trend, zt∗

                           p∗1t = zt∗ + ²∗1t   p∗2t = zt∗ + ²∗2t .

      where zt∗ = zt−1
                   ∗ + u , ²∗ , (i = 1, 2) are stationary processes, and u is
                           t it                                               t
      iid with E(ut ) = 0, E(u2t ) = σu2 . Show that even if the price levels are
      constructed as,

                pt = φp1t + (1 − φ)p2t ,       p∗t = φ∗ p∗1t + (1 − φ∗ )p∗2t ,

      with φ 6= φ∗ , that pt − (st + p∗t ) is a stationary process.
Chapter 8

The Mundell-Fleming Model

Mundell [108]—Fleming [54] is the IS-LM model adapted to the open
economy. Although the framework is rather old and ad hoc the basic
framework continues to be used in policy related research (Williamson [132],
Hinkle and Montiel [107], MacDonald and Stein [98]). The hallmark
of the Mundell-Fleming framework is that goods prices exhibit sticki-
ness whereas asset markets–including the foreign exchange market–
are continuously in equilibrium. The actions of policy makers play a
major role in these models because the presence of nominal rigidities
opens the way for nominal shocks to have real eﬀects. We begin with a
simple static version of the model. Next, we present the dynamic but
deterministic Mundell-Fleming model due to Dornbusch [39]. Third, we
present a stochastic Mundell-Fleming model based on Obstfeld [111].


8.1     A Static Mundell-Fleming Model
This is a Keynesian model where goods prices are Þxed for the dura-
tion of the analysis. The home country is small in sense that it takes
foreign variables as Þxed. All variables except the interest rate are in
logarithms.
    Equilibrium in the goods market is given by an open economy ver-
sion of the IS curve. There are three determinants of the demand for
domestic goods. First, expenditures depend positively on own income y
through the absorption channel. An increase in income leads to higher

                                  229
230                CHAPTER 8. THE MUNDELL-FLEMING MODEL

consumption, most of which is spent on domestically produced goods.
Second, domestic goods demand depends negatively on the interest
rate i through the investment—saving channel. Since goods prices are
Þxed, the nominal interest rate is identical to the real interest rate.
Higher interest rates reduce investment spending and may encourage a
reduction of consumption and an increase in saving. Third, demand for
home goods depends positively on the real exchange rate s + p∗ − p. An
increase in the real exchange rate lowers the price of domestic goods
relative to foreign goods leading expenditures by residents of the home
country as well as residents of the rest of the world to switch toward
domestically produced goods. We call this the expenditure switching
eﬀect of exchange rate ßuctuations. In equilibrium, output equals ex-
penditures which is given by the IS curve

                      y = δ(s + p∗ − p) + γy − σi + g,                        (8.1)

where g is an exogenous shifter which we interpret as changes in Þscal
policy. The parameters δ, γ, and σ are deÞned to be positive with
0 < γ < 1.
    As in the monetary model, log real money demand md − p depends
positively on log income y and negatively on the nominal interest rate i
which measures the opportunity cost of holding money. Since the price
level is Þxed, the nominal interest rate is also the real interest rate, r.
In logarithms, equilibrium in the money market is represented by the
LM curve
                           m − p = φy − λi.                          (8.2)
The country is small and takes the world price level and world interest
rate as given. For simplicity, we Þx p∗ = 0. The domestic price level is
also Þxed so we might as well set p = 0.
    Capital is perfectly mobile across countries.1 International capital
market equilibrium is given by uncovered interest parity with static
   1
     Given the rapid pace at which international Þnancial markets are becoming
integrated, analyses under conditions of imperfect capital mobility is becoming less
relevant. However, one can easily allow for imperfect capital mobility by modeling
both the current account and the capital account and setting the balance of pay-
ments to zero (the external balance constraint) as an equilibrium condition. See
the end-of-chapter problems.
8.1. A STATIC MUNDELL-FLEMING MODEL                                  231

expectations2
                                      i = i∗ .                      (8.3)
   Substitute (8.3) into (8.1) and (8.2). Totally diﬀerentiate the result
and rearrange to obtain the two-equation system
                                     "            #
                      φδ           φσ            φ
               dm =      ds − λ +        di∗ +      dg,             (8.4)
                     1−γ          1−γ           1−γ
                      δ        σ         dg
                dy =     ds −     di∗ +       .                     (8.5)
                     1−γ      1−γ       1−γ

All of our comparative statics results come from these two equations.

Adjustment under Fixed Exchange Rates
Domestic credit expansion. Assume that the monetary authorities are
credibly committed to Þxing the exchange rate. In this environment,
the exchange rate is a policy variable. As long as the Þx is in eﬀect,
we set ds = 0. Income y and the money supply m are endogenous
variables.
    Suppose the authorities expand the domestic credit component of
the money supply. Recall from (1.22) that the monetary base is made
up of the sum of domestic credit and international reserves. In the
absence of any other shocks (di∗ = 0, dg = 0), we see from (8.4) that
there is no long-run change in the money supply dm = 0 and from (8.5),
there is no long-run change in output. The initial attempt to expand
the money supply by increasing domestic credit results in an oﬀsetting
loss of international reserves. Upon the initial expansion of domestic
credit, the money supply does increase. The interest rate must remain
Þxed at the world rate, however, and domestic residents are unwilling
to hold additional money at i∗ . They eliminate the excess money by ac-
cumulating foreign interest bearing assets and run a temporary balance
of payments deÞcit. The domestic monetary authorities evidently have
no control over the money supply in the long run and monetary policy
is said to be ineﬀective as a stabilization tool under a Þxed exchange
rate regime with perfect capital mobility.
  2
      Agents expect no change in the exchange rate.
         232                 CHAPTER 8. THE MUNDELL-FLEMING MODEL

             The situation is depicted graphically in Figure 8.1. First, the expan-
         sion of domestic credit shifts the LM curve out. To maintain interest
         parity there is an incipient capital outßow. The central bank defends
         the exchange rate by selling reserves. This loss of reserves causes the
         LM curve to shift back to its original position.

                        r
                                                        LM
                                                        (1)


                                                  (2)
                                        a
                        r*                                     FF


                                              b




                                                          IS
                                                                y
                                        y0



         Figure 8.1: Domestic credit expansion shifts the LM curve out. The
         central bank loses reserves to accommodate the resulting capital outßow
         which shifts the LM curve back in.


         Domestic currency devaluation.           From (8.4)-(8.5), you have
(136)⇒   dy = [δ/(1 − γ)]ds > 0 and dm = [φδ/(1 − γ)]ds > 0. The expansionary
         eﬀects of a devaluation are shown in Figure 8.2. The devaluation makes
         domestic goods more competitive and expenditures switch towards do-
         mestic goods. This has a direct eﬀect on aggregate expenditures. In a
         closed economy, the expansion would lead to an increase in the inter-
         est rate but in the open economy under perfect capital mobility, the
         expansion generates a capital inßow. To maintain the new exchange
         rate, the central bank accommodates the capital ßows by accumulating
         foreign exchange reserves with the result that the LM curve shifts out.
             One feature that the model misses is that in real world economies,
         the country’s foreign debt is typically denominated in the foreign cur-
         rency so the devaluation increases the country’s real foreign debt bur-
         den.
8.1. A STATIC MUNDELL-FLEMING MODEL                                 233

               r
                                                LM


                           (1)
                                          (2)
                                      b
              r*                                         FF
                             a                  c




                                                    IS
                                                          y
                                 y0       y1



Figure 8.2: Devaluation shifts the IS curve out. The central bank
accumulates reserves to accommodate the resulting capital inßow which
shifts the LM curve out.



Fiscal policy shocks. The results of an increase in government spending
are dy = [1/(1 − γ)]dg and dm = [φ/(1 − γ)]dg which is expansionary. ⇐(137)
The increase in g shifts the IS curve to the right and has a direct eﬀect
on expenditures. Fiscal policy works the same way as a devaluation
and is said to be an eﬀective stabilization tool under Þxed exchange
rates and perfect capital mobility.

Foreign interest rate shocks. An increase in the foreign interest rate
has a contractionary eﬀect on domestic output and the money supply,
dy = −(σ/(1 − γ))di∗ , and dm = −(λ + φσ/(1 − γ))di∗ . The increase
i∗ creates an incipient capital outßow. To defend the exchange rate,
the monetary authorities sell foreign reserves which causes the money
supply to contract. The situation is depicted graphically in Figure 8.3.

Implied International transmissions. Although we are working with the
small-country version of the model, we can qualitatively deduce how
policy shocks would be transmitted internationally in a two-country
model. If the increase in i∗ was the result of monetary tightening in
the large foreign country, output also contracts abroad. We say that
234                 CHAPTER 8. THE MUNDELL-FLEMING MODEL

               r
                                         LM




                                          (1)
               r*                                FF
                       (2)




                                            IS
                                                  y
                             y1   y0



Figure 8.3: An increase in i∗ generates a capital outßow, a loss of central
bank reserves, and a contraction of the domestic money supply.

monetary shocks are positively transmitted internationally as they lead
to positive output comovements at home and abroad. If the increase in
i∗ was the result of expansionary foreign government spending, foreign
output expands whereas domestic output contracts. Aggregate expen-
diture shocks are said to be negatively transmitted internationally under
a Þxed exchange rate regime.
    A currency devaluation has negative transmission eﬀects. The de-
valuation of the home currency is equivalent to a revaluation of the
foreign currency. Since the domestic currency devaluation has an ex-
pansionary eﬀect on the home country, it must have a contractionary
eﬀect on the foreign country. A devaluation that expands the home
country at the expense of the foreign country is referred to as a beggar-
thy-neighbor policy.

Flexible Exchange Rates
When the authorities do not intervene in the foreign exchange market,
s and y are endogenous in the system (8.4)-(8.5) and the authorities
regain control over m, which is treated as exogenous.

 Domestic credit expansion. An expansionary monetary policy gener-
ates an incipient capital outßow which leads to a depreciation of the
8.1. A STATIC MUNDELL-FLEMING MODEL                                  235

               r
                                                 LM




                              a             c
               r*                                       FF



                                  (1)
                                        b        (2)


                                                   IS
                                                         y
                              y0            y1



Figure 8.4: Expansion of domestic credit shifts LM curve out. Incipient
capital outßow is oﬀset by depreciation of domestic currency which
shifts the IS curve out.


home currency ds = [(1 − γ)/φδ]dm > 0. The expenditure switching
eﬀect of the depreciation increases expenditures on the home good and
has an expansionary eﬀect on output dy = (1/φ)dm > 0.
    The situation is represented graphically in Figure 8.4 where the
expansion of domestic credit shifts the LM curve to the right. In the
closed economy, the home interest rate would fall but in the small open
economy with perfect capital mobility, the result is an incipient capital
outßow which causes the home currency to depreciate (s increases) and
the IS curve to shift to the right. The eﬀectiveness of monetary policy
is restored under ßexible exchange rates.

Fiscal policy. Fiscal policy becomes ineﬀective as a stabilization tool
under ßexible exchange rates and perfect capital mobility. The situation
is depicted in Figure 8.5. An expansion of government spending is
represented by an initial outward shift in the IS curve which leads to an
incipient capital inßow and an appreciation of the home currency ds =
−(1/δ)dg < 0. The resulting expenditure switch forces a subsequent
inward shift of the IS curve. The contractionary eﬀects of the induced
appreciation oﬀsets the expansionary eﬀect of the government spending
leaving output unchanged dy = 0. The model predicts an international
236                 CHAPTER 8. THE MUNDELL-FLEMING MODEL

               r
                                           LM
                          (1)

                                (2)



               r*                                FF




                                            IS
                                                  y
                                      y0



Figure 8.5: Expansionary Þscal policy shifts IS curve out. Incipient
capital inßow generates an appreciation which shifts the IS curve back
to its original position.


version of crowding out. Recipients of government spending expand at
the expense of the traded goods sector.

Interest rate shocks. An increase in the foreign interest rate leads to an
incipient capital outßow and a depreciation given by
ds = [(λ(1 − γ) + σφ)/φδ]di∗ > 0. The expenditure-switching eﬀect
of the depreciation causes the IS curve in Figure 8.6 to shift out. The
expansionary eﬀect of the depreciation more than oﬀsets the contrac-
tionary eﬀect of the higher interest rate resulting in an expansion of
output dy = (λ/φ)di∗ > 0.

International transmission eﬀects. If the interest rate shock was caused
by a contraction in foreign money, the expansion of domestic output
would be associated with a contraction of foreign output and monetary
policy shocks are negatively transmitted from one country to another
under ßexible exchange rates. Government spending, on the other hand
is positively transmitted. If the increase in the foreign interest rate was
precipitated by an expansion of foreign government spending, we would
observe expansion in output both abroad and at home.
8.2. DORNBUSCH’S DYNAMIC MUNDELL—FLEMING MODEL237

               r
                                         LM




                    (1)

               r*                                   FF



                                         (2)



                                               IS
                                                     y
                               y0   y1



Figure 8.6: An increase in the world interest rate generates an incipient
capital outßow, leading to a depreciation and an outward shift in the
IS curve.


8.2      Dornbusch’s Dynamic Mundell—Fleming
         Model
As we saw in Chapter 3, the exchange rate in a free ßoat behaves much
like stock prices. In particular, it exhibits more volatility than macroe-
conomic fundamentals such as the money supply and real GDP. Dorn-
busch [39] presents a dynamic version of the Mundell—Fleming model
that explains excess exchange rate volatility in a deterministic perfect
foresight setting. The key feature of the model is that the asset market
adjusts to shocks instantaneously while goods market adjustment takes
time.
    The money market is continuously in equilibrium which is repre-
sented by the LM curve, restated here as

                           m − p = φy − λi.                          (8.6)

To allow for possible disequilibrium in the goods market, let y denote
actual output which is assumed to be Þxed, and y d denote the demand
for home output. The demand for domestic goods depends on the real
238               CHAPTER 8. THE MUNDELL-FLEMING MODEL

exchange rate s + p∗ − p, real income y, and the interest rate i3

                        y d = δ(s − p) + γy − σi + g,                        (8.7)

where we have set p∗ = 0.
   Denote the time derivative of a function x of time with a “dot”
x(t)
ú = dx(t)/dt. Price level dynamics are governed by the rule

                                 pú = π(y d − y),                            (8.8)

where the parameter 0 < π < ∞ indexes the speed of goods market
adjustment.4 (8.8) says that the rate of inßation is proportional to
excess demand for goods. Because excess demand is always Þnite, the
rate of change in goods prices is always Þnite so there are no jumps in
price level. If the price level cannot jump, then at any point in time it
is instantaneously Þxed. The adjustment of the price-level towards its
long-run value must occur over time and it is in this sense that goods
prices are sticky in the Dornbusch model.
    International capital market equilibrium is given by the uncovered
interest parity condition
                                 i = i∗ + sú e ,                    (8.9)
where sú e is the expected instantaneous depreciation rate. Let s̄ be
the steady-state nominal exchange rate. The model is completed by
specifying the forward—looking expectations

                                 sú e = θ(s̄ − s).                          (8.10)

Market participants believe that the instantaneous depreciation is pro-
portional to the gap between the current exchange rate and its long-run
value but to be model consistent, agents must have perfect foresight.
This means that the factor of proportionality θ must be chosen to be
consistent with values of the other parameters of the model. This per-
fect foresight value of θ can be solved for directly, (as in the chapter
   3
     Making demand depend on the real interest rate results in the same qualitative
conclusions, but messier algebra.
   4
     Low values of π indicate slow adjustment. Letting π → ∞ allows goods
prices to adjust instantaneously which allows the goods market to be in contin-
uous equilibrium.
8.2. DORNBUSCH’S DYNAMIC MUNDELL—FLEMING MODEL239

appendix) or by the method of undetermined coeﬃcients.5 Since we
can understand most of the interesting predictions of the model with-
out explicitly solving for the equilibrium, we will do so and simply
assume that we have available the model consistent value of θ such
that
                                sú e = s.
                                       ú                       (8.11)

Steady-State Equilibrium
Let an ‘overbar’ denote the steady-state value of a variable. The model
is characterized by a Þxed steady state with sú = pú = 0 and

                           ī = i∗ ,                                       (8.12)
                          p̄ = m − φy + λī,                               (8.13)
                                     1
                          s̄ = p̄ + [(1 − γ)y + σ ī − g].                 (8.14)
                                     δ
Diﬀerentiating these long-run values with respect to m yields
dp̄/dm = 1, and ds̄/dm = 1. The model exhibits the sensible char-
acteristic that money is neutral in the long run. Diﬀerentiating the
long-run values with respect to g yields ds̄/dg = −1/δ = d(s̄ − p̄)/dg.
Nominal exchange rate adjustments in response to aggregate expendi-
ture shocks are entirely real in the long run and PPP does not hold if
there are permanent shocks to the composition of aggregate expendi-
tures, even in the long run.

Exchange rate dynamics
The hallmark of this model is the interesting exchange rate dynamics
that follow an unanticipated monetary expansion.6 Totally diﬀerentiat-
ing (8.6) but note that p is instantaneously Þxed and y is always Þxed,
   5
       The perfect-foresight solution is
                          1              p
                     θ=     [π(δ + σ/λ) + π 2 (δ + σ/λ)2 + 4πδ/λ].
                          2

   6
    This often used experiment brings up an uncomfortable question. If agents have
perfect foresight, how a shock be unanticipated?
240                CHAPTER 8. THE MUNDELL-FLEMING MODEL


         2.3




         2.2




         2.1




         2.0




         1.9
               1    9     17        25         33   41   49   57



Figure 8.7: Exchange Rate Overshooting in the Dornbusch model with
π = 0.15, δ = 0.15, σ = 0.02, λ = 5.

the monetary expansion produces a liquidity eﬀect
                                     1
                               di = − dm < 0.                      (8.15)
                                     λ
Diﬀerentiate (8.9) while holding i∗ constant and use ds̄ = dm to get
di = θ(dm − ds). Use this expression to eliminate di in (8.15). Solving
for the instantaneous depreciation yields
                                µ          ¶
                                         1
                        ds = 1 +            dm > ds̄.              (8.16)
                                         λθ
This is the famous overshooting result. Upon impact, the instanta-
neous depreciation exceeds the long-run depreciation so the exchange
rate overshoots its long-run value. During the transition to the long
run, i < i∗ so by (8.11), people expect the home currency to appreciate.
Given that there is a long-run depreciation, the only way that people
can rationally expect this to occur is for the exchange rate to initially
overshoot the long-run level so that it declines during the adjustment
period. This result is signiÞcant because the model predicts that the
exchange rate is more volatile than the underlying economic fundamen-
8.3. A STOCHASTIC MUNDELL—FLEMING MODEL                              241

tals even when agents have perfect foresight. The implied dynamics are
illustrated in Figure 8.7.
    If there were instantaneous adjustment (π = ∞), we would immedi-
ately go to the long run and would continuously be in equilibrium. So
long as π < ∞, the goods market spends some time in disequilibrium
and the economy-wide adjustment to the long-run equilibrium occurs
gradually. The transition paths, which we did not solve for explicitly
but is treated in the chapter appendix, describe the disequilibrium dy-
namics. It is in comparison to the ßexible-price (long-run) equilibrium
that the transitional values are viewed to be in disequilibrium.
    There is no overshooting nor associated excess volatility in response
to Þscal policy shocks. You are invited to explore this further in the
end-of-chapter problems.


8.3     A Stochastic Mundell—Fleming Model
Let’s extend the Mundell-Fleming model to a stochastic environment
following Obstfeld [111]. Let ytd be aggregate demand, st be the nom-
inal exchange rate, pt be the domestic price level, it be the domestic
nominal interest rate, mt be the nominal money stock, and Et (Xt ) be
the mathematical expectation of the random variable Xt conditioned
on date—t information. All variables except interest rates are in natu-
ral logarithms. Foreign variables are taken as given so without loss of
generality we set p∗ = 0 and i∗ = 0.
    The IS curve in the stochastic Mundell-Fleming model is

              ytd = η(st − pt ) − σ[it − Et (pt+1 − pt )] + dt ,   (8.17)

where dt is an aggregate demand shock and it − Et (pt+1 − pt ) is the ex
ante real interest rate. The LM curve is

                           mt − pt = ytd − λit ,                   (8.18)

where the income elasticity of money demand is assumed to be 1. Cap-
ital market equilibrium is given by uncovered interest parity

                         it − i∗ = Et (st+1 − st ).                (8.19)
242              CHAPTER 8. THE MUNDELL-FLEMING MODEL

    The long-run or the steady-state is not conveniently characterized in
a stochastic environment because the economy is constantly being hit
by shocks to the non-stationary exogenous state variables. Instead of a
long-run equilibrium, we will work with an equilibrium concept given by
the solution formed under hypothetically fully ßexible prices. Then as
long as there is some degree of price-level stickiness that prevents com-
plete instantaneous adjustment, the disequilibium can be characterized
by the gap between sticky-price solution and the shadow ßexible-price
equilibrium.
    Let the shadow values associated with the ßexible-price equilibrium
be denoted with a ‘tilde.’ The predetermined part of the price level is
Et−1 p̃t which is a function of time t-1 information. Let θ(p̃t − Et−1 p̃t )
represent the extent to which the actual price level pt responds at date
t to new information where θ is an adjustment coeﬃcient. The sticky-
price adjustment rule is

                       pt = Et−1 p̃t + θ(p̃t − Et−1 p̃t ).             (8.20)

According to this rule, goods prices display rigidity for at most one
period. Prices are instantaneously perfectly ßexible if θ = 1 and they
are completely Þxed one-period in advance if θ = 0. Intermediate
degrees of price Þxity are characterized by 0 < θ < 1 which allow
the price level at t to partially adjust from its one-period-in-advance
predetermined value Et−1 (p̃t ) in response to period t news, p̃t − Et−1 p̃t .
   The exogenous state variables are output, money, and the aggregate
demand shock and they are governed by unit root processes. Output
and the money supply are driven by the driftless random walks

                             yt = yt−1 + zt ,                          (8.21)
                             mt = mt−1 + vt ,                          (8.22)
         iid                   iid
where zt ∼ N (0, σz2 ) and vt ∼ N (0, σv2 ). The demand shock dt also is a
unit-root process
                          dt = dt−1 + δt − γδt−1 ,                 (8.23)
         iid
where δt ∼ N(0, σδ2 ). Demand shocks are permanent, as represented by
dt−1 but also display transitory dynamics where some portion 0 < γ < 1
8.3. A STOCHASTIC MUNDELL—FLEMING MODEL                                       243

of any shock δt is reversed in the next period.7 To solve the model, the
Þrst thing you need is to get the shadow ßexible-price solution.

Flexible Price Solution
Under fully-ßexible prices, θ = 1 and the goods market is continuously
in equilibrium yt = ytd . Let qt = st − pt be the real exchange rate.
Substitute (8.19) into the IS curve (8.17), and re-arrange to get
                                        Ã        !
                             yt − dt    σ
                       q̃t =         +     Et q̃t+1 .                       (8.24)
                              η+σ      η+σ

This is a stochastic diﬀerence equation in q̃. It follows that the so-
lution for the ßexible-price equilibrium real exchange rate is given by
the present value formula which you can get by iterating forward on
(8.24). But we won’t do that here. Instead, we will use the method of
undetermined coeﬃcients. We begin by conjecturing a guess solution
in which q̃ depends linearly on the available date t information

                       q̃t = a1 yt + a2 mt + a3 dt + a4 δt .                (8.25)

We then deduce conditions on the a−coeﬃcients such that (8.25) solves
the model. Since mt does not appear explicitly in (8.24), it probably is
the case that a2 = 0. To see if this is correct, take time t conditional
expectations on both sides of (8.25) to get

                    Et q̃t+1 = a1 yt + a2 mt + a3 (dt − γδt ).              (8.26)

Substitute (8.25) and (8.26) into (8.24) to get                                       ⇐(139)

          a1 yt + a2 mt + a3 dt + a4 δt
                  y t − dt      σ
                =          +       [a1 yt + a2 mt + a3 (dt − γδt )]
                   η+σ       η+σ
   7
    Recursive backward substitution in (8.23) gives, dt = δt + (1 − γ)δt−1 + (1 −
γ)δt−2 + · · · . Thus the demand shock is a quasi-random walk without drift in that
a shock δt has a permanent eﬀect on dt , but the eﬀect on future values (1 − γ) is
smaller than the current eﬀect.
244                 CHAPTER 8. THE MUNDELL-FLEMING MODEL

Now equate the coeﬃcients on the variables to get
                                     1
                              a1 =      = −a3 ,
                                     η
                              a2   = 0,
                                        Ã       !
                                     γ     σ
                              a4   =              .
                                     η η+σ
The ßexible-price solution for the real exchange rate is
                                             Ã        !
                               yt − dt γ          σ
                         q̃t =        +              δt ,                    (8.27)
                                  η     η        η+σ
where indeed nominal (monetary) shocks have no eﬀect on q̃t . The real
exchange rate is driven only by real factors—supply and demand shocks.
    Since both of these shocks were assumed to evolve according to unit
root process, there is a presumption that q̃t also is a unit root process.
A permanent shock to supply yt leads to a real depreciation. Since
γσ/(η(η + σ)) < (1/η), a permanent shock to demand δt leads to a real
appreciation.8
    To get the shadow price level, start from (8.18) and (8.19) to get
p̃t = mt − yt + λEt (st+1 − st ). If you add λp̃t to both sides, add and
subtract λEt p̃t+1 to the right side and rearrange, you get
          (1 + λ)p̃t = mt − yt + λEt (q̃t+1 − q̃t ) + λEt p̃t+1 .            (8.28)
By (8.27), Et (q̃t+1 − q̃t ) = [γ/(η + σ)]δt , which you can substitute back
into (8.28) to obtain the stochastic diﬀerence equation
                  mt − yt         λγ             λ
          p̃t =           +                δt +     Et p̃t+1 .               (8.29)
                   1+λ      (η + σ)(1 + λ)      1+λ
Now solve (8.29) by the MUC. Let
                        p̃t = b1 mt + b2 yt + b3 dt + b4 δt ,                (8.30)
be the guess solution. Taking expectations conditional on time-t infor-
mation gives
                  Et p̃t+1 = b1 mt + b2 yt + b3 (dt − γδt ).    (8.31)
   8
     Here is another way to motivate the null hypothesis that the real exchange rate
follows a unit root process in tests of long-run PPP covered in Chapter 7.
8.3. A STOCHASTIC MUNDELL—FLEMING MODEL                               245

Substitute (8.31) and (8.30) into (8.29) to get

             b1 mt + b2 yt + b3 dt + b4 δt
                     m t − yt              λγ
                   =            +                   δt            (8.32)
                      1+λ          (1 + λ)(η + σ)
                        λ
                   +        [b1 mt + b2 yt + b3 (dt − γδt )].
                     1+λ

Equate coeﬃcients on the variables to get

                        b1 = 1 = −b2 ,
                        b3 = 0,
                                   λγ
                        b4 =                .                     (8.33)
                             (1 + λ)(η + σ)

Write the ßexible-price equilibrium solution for the price level as

                          p̃t = mt − yt + αδt ,                   (8.34)

where
                                     λγ
                          α=                  .
                               (1 + λ)(η + σ)
A supply shock yt generates shadow deßationary pressure whereas de-
mand shocks δt and money shocks mt generate shadow inßationary
pressure.
     The shadow nominal exchange rate can now be obtained by adding
q̃t + p̃t
                   Ã      !            Ã               !
                   1−η     dt    γσ
        s̃t = mt +     yt − +          + α δt .                   (8.35)
                    η      η  η(η + σ)

Positive monetary shocks unambiguously lead to a nominal depreciation
but the eﬀect of a supply shock on the shadow nominal exchange rate
depends on the magnitude of the expenditure switching elasticity, η.
You are invited to verify that a positive demand shock δt lowers the
nominal exchange rate.
246                CHAPTER 8. THE MUNDELL-FLEMING MODEL

   Collecting the equations that form the ßexible-price solution we
have

                  yt = yt−1 + zt = y(zt ),
                        y t − dt      γσ
                  q̃t =          +          δt = q̃(zt , δt ),
                            η      η(η + σ)
                  p̃t = mt − yt + αδt = p̃(zt , δt , vt ).

The system displays a triangular structure in the exogenous shocks.
Only supply shocks aﬀect output, demand and supply shocks aﬀect
the real exchange rate, while supply, demand, and monetary shocks
aﬀect the price level. We will revisit the implications of this triangular
structure in Chapter 8.4.

Disequilibrium Dynamics
To obtain the sticky-price solution with 0 < θ < 1, substitute the
solution (8.34) for p̃t into the price adjustment rule (8.20), to get
pt = mt−1 − yt−1 +θ[vt − zt +αδt ]. Next, add and subtract (vt − zt + αδt )
to the right side and rearrange to get

                       pt = p̃t − (1 − θ)[vt − zt + αδt ].                   (8.36)

The gap between pt and p̃t is proportional to current information
(vt − zt + αδt ), which we’ll call news. You will see below that the
gap between all disequilibrium values and their shadow values are pro-
portional to this news variable. Monetary shocks vt and demand shocks
δt cause the price level to lie below its equilibrium value p̃t while sup-
ply shocks zt cause the current price level to lie above its equilibrium
value.9 Since the solution for pt does not depend on lagged values of
the shocks, the deviation from full-price ßexibility values generated by
current period shocks last for only one period.
    Next, solve for the real exchange rate. Substitute (8.36) and ag-
gregate demand from the IS curve (8.17) into the LM curve (8.18) to
   9
    The price-level responses to the various shocks conform precisely to the predic-
tions from the aggregate-demand, aggregate-supply model as taught in principles
of macroeconomics.
8.3. A STOCHASTIC MUNDELL—FLEMING MODEL                                     247

get

mt −p̃t +(1−θ)[vt −zt +αδt ] = dt +ηqt −(σ+λ)(Et qt+1 −qt )−λEt (pt+1 −pt ).
                                                                    (8.37)
By (8.36) and (8.34) you know that

               Et (pt+1 − pt ) = −αδt + (1 − θ)[vt − zt + αδt ].          (8.38)

Substitute (8.38) and p̃t into (8.37) to get the stochastic diﬀerence
equation in qt

(η+σ+λ)qt = yt −dt +(1−θ)(1+λ)(vt −zt )−θ(1+λ)αδt +(σ+λ)Et qt+1 .
                                                         (8.39)
Let the conjectured solution be

                    qt = c1 yt + c2 dt + c3 δt + c4 vt + c5 zt .          (8.40)

It follows that
                        Et qt+1 = c1 yt + c2 (dt − γδt ).                 (8.41)
Substitute (8.40) and (8.41) into (8.39) to get                                    ⇐(140)

(η + σ + λ)[c1 yt + c2 dt + c3 δt + c4 vt + c5 zt ]
                  = yt − dt + (1 − θ)(1 + λ)(vt − zt )
                        −θ(1 + λ)αδt + (σ + λ)[c1 yt + c2 (dt − γδt )].

Equating coeﬃcients gives
                             1
                      c1 =     = −c2 ,
                             η
                             γ(σ + λ) − ηαθ(1 + λ)
                      c3   =                        ,
                                  η(η + σ + λ)
                             (1 − θ)(1 + λ)
                      c4   =                = −c5 ,
                               η+σ+λ
and the solution is                                                                ⇐(141)
          yt − dt γ(σ + λ) − αηθ(1 + λ)      (1 − θ)(1 + λ)
   qt =          +                      dt +                (vt − zt ).
             η        η(η + σ + λ)             η+σ+λ
         248             CHAPTER 8. THE MUNDELL-FLEMING MODEL

         Using the deÞnition of α and (8.27) to eliminate (yt − dt )/η, rewrite the
         solution in terms of q̃t and news
                                   (1 + λ)(1 − θ)
                         qt = q̃t +                [vt − zt + αδt ].        (8.42)
                                      η+σ+λ
         Nominal shocks have an eﬀect on the real exchange rate due to the rigid-
         ity in price adjustment. Disequilibrium adjustment in the real exchange
         rate runs in the opposite direction of price level adjustment. Monetary
         shocks and demand shocks cause the real exchange rate to temporarily
         rise above its equilibrium value whereas supply shocks cause the real
         exchange rate to temporarily fall below its equilibrium value.
             To get the nominal exchange rate st = qt + pt , add the solutions for
         qt and pt
                                                (1 − θ)
                     st = s̃t + (1 − η − σ)               [vt − zt + αδt ].   (8.43)
                                              (η + σ + λ)
         The solution displays a modiÞed form of exchange-rate overshooting
         under the presumption that η + σ < 1 in that a monetary shock causes
         the exchange rate to rise above its shadow value s̃t . In contrast to
         the Dornbusch model, both nominal and real shocks generate modiÞed
         exchange-rate overshooting. Positive demand shocks cause st to rise
         above s̃t whereas supply shocks cause st to fall below s̃t .
            To determine excess goods demand, you know that aggregate de-
         mand is
                              ytd = ηqt − σEt (∆qt+1 ) + dt .
(142)⇒   Taking expectations of (8.42) yields
                                   γ       (1 + λ)(1 − θ)
                  Et (∆qt+1 ) =       δt −                [vt − zt + αδt ].
                                  η+σ       (η + σ + λ)
         Substitute this and qt from (8.42) back into aggregate demand and
         rearrange to get
                                  (1 + λ)(1 − θ)(η + σ)
                     ytd = yt +                         [vt − zt + αδt ].     (8.44)
                                       (η + σ + λ)
         Goods market disequilibrium is proportional to the news vt − zt + αδt .
         Monetary shocks have a short-run eﬀect on aggregate demand, which
         is the stochastic counterpart to the statement that monetary policy is
         an eﬀective stabilization tool under ßexible exchange rates.
8.4. VAR ANALYSIS OF MUNDELL—FLEMING                                249

8.4         VAR analysis of Mundell—Fleming
Even though it required tons of algebra to solve, the stochastic Mundell-
Fleming with one-period nominal rigidity is still too stylized to take
seriously in formulating econometric speciÞcations. Modeling lag dy-
namics in price adjustment is problematic because we don’t have a good
theory for how prices adjust or for why they are sticky. Tests of overi-
dentifying restrictions implied by dynamic versions of the Mundell—
Fleming model are frequently rejected, but the investigator does not
know whether it is the Mundell-Fleming theory that is being rejected or
one of the auxiliary assumptions associated with the parametric econo-
metric representation of the theory.10
    Sims [129] views the restrictions imposed by explicitly formulated
macroeconometric models to be incredible and proposed the unrestricted
VAR method to investigate macroeconomic theory without having to
assume very much about the economy. In fact, just about the only
thing that you need to assume are which variables to include in the
analysis. Unrestricted VAR estimation and accounting methods are
described in Chapter 2.1.


The Eichenbaum and Evans VAR
Eichenbaum and Evans [41] employ the Sims VAR method to the Þve
dimensional vector-time-series consisting of i) US industrial production,
ii) US CPI, iii) A US monetary policy variable iv) US—foreign nominal
interest rate diﬀerential, and v) US real exchange rate. They consid- ⇐(143)
ered two measures of monetary policy. The Þrst was the ratio of the
logarithm of nonborrowed reserves to the logarithm of total reserves.
The second was the federal funds rate. They estimated separate VARs
using exchange rates and interest rates for each of Þve countries: Japan,
Germany, France, Italy, and the UK with monthly observations from
1974.1 through 1990.5.
    Here, we will re-estimate the Eichenbaum—Evans VAR and do the
associated VAR accounting using monthly observations for the US, UK,
Germany, and Japan from 1973.1 to 1998.1. All variables except inter-
 10
      See Papell [117].
250               CHAPTER 8. THE MUNDELL-FLEMING MODEL

est rates are in logarithms. Let yt be US industrial production, pt be the
US consumer price index, nbrt be the log of non-borrowed bank reserves
divided by the log of total bank reserves, it − i∗t be the 3 month US-
foreign nominal interest rate diﬀerential, qt be the real exchange rate,
and st be the nominal exchange rate.11 For each US—foreign country
pair, two separate VARs were run–one using the real exchange rate
and one with the nominal exchange rate. In the Þrst system, the VAR
is estimated for the 5-dimensional vector xt = (yt , pt , nbrt , it − i∗t , qt )0 .
In the second system, we used xt = (yt , pt , nbrt , it − i∗t , st )0 .12
     The Þrst row of plots in Figure 8.8 shows the impulse response of
the log real exchange rate for the US-UK, US-Germany, and US-Japan,
following a one-standard deviation shock to nbrt . An increase in nbrt
corresponds to a positive monetary shock. The second row shows the
responses of the log nominal exchange rate with the same countries to
a one-standard deviation shock to nbrt .
     Both the real and nominal exchange rates are found to depreci-
ate upon impact but the maximal nominal depreciation occurs some
months after the initial shock. The impulse response of both exchange
rates is hump-shaped. There is evidently evidence of overshooting, but
it is diﬀerent from Dornbusch overshooting which is instantaneous. This
unrestricted VAR response pattern has come to be known as delayed
overshooting.
     Long-horizon (36 months ahead) forecast-error variance decompo-
sitions of nominal exchange rates attributable to orthogonalized mon-
etary shocks are 16 percent for the UK, 24 percent for Germany, and
10 percent for Japan. For real exchange rates, the percent of variance
attributable to monetary shocks is 23 percent for the UK and Ger-
many, and 9 percent for Japan. Evidently, nominal shocks are pretty
important in driving the dynamics of the real exchange rate.

  11
      Interest rates for the US and UK are the secondary market 3-month Treasury
Bill rate. For Germany, I used the interbank deposit rate. For Japan, the interest
rate is the Japanese lending rate from the beginning of the sample to 1981.8, and
is the private bill rate from 1981.9 to 1998.1
   12
      Using BIC (Chapter 2, equation 2.3) with the updated data indicated that the
VARs required 3 lags. To conform with Eichenbaum and Evans, I included 6 lags
and a linear trend.
8.4. VAR ANALYSIS OF MUNDELL—FLEMING                                                                           251

 0.016                                0.016                                    0.014

 0.014                                0.014                                    0.012
                                      0.012                                     0.01
 0.012
                                        0.01                                   0.008
  0.01
                                      0.008                                    0.006
 0.008
                                      0.006                                    0.004
 0.006
                                      0.004                                    0.002
 0.004                                0.002                                        0
 0.002                                        0                               -0.002 1     9   17   25   33   41

     0                                -0.002 1        9   17   25   33   41   -0.004
         1   9    17   25   33   41   -0.004                                  -0.006




 0.012                                0.016                                   0.014

                                      0.014                                   0.012
  0.01
                                      0.012                                     0.01
 0.008
                                       0.01                                   0.008

 0.006                                0.008                                   0.006

                                      0.006                                   0.004
 0.004
                                      0.004                                   0.002
 0.002                                                                             0
                                      0.002
                                                                                       1   9   17   25   33   41
                                                                              -0.002
     0                                    0
         2   10   18   26   34   42               1   9   17   25   33   41   -0.004




Figure 8.8: Row 1: Impulse response of log real US-UK, US-German,
US-Japan exchange rate to an orthogonalized one-standard deviation
shock to nbrt . Row 2: Impulse responses of log nominal exchange rate.

Clarida-Gali Structural VAR
In Chapter 2.1, we discussed some potential pitfalls associated with
the unrestricted VAR methodology. The main problem is that the
unrestricted VAR analyzes a reduced form of a structural model so we
do not necessarily learn anything about the eﬀect of policy interventions
on the economy. For example, when we examine impulse responses
from an innovation in yt , we do not know whether the underlying cause
was due to a shock to aggregate demand or to aggregate supply or an
expansion of domestic credit.
   Blanchard and Quah [15] show how to use economic theory to
place identifying restrictions on the VAR, resulting in so-called struc-
252                  CHAPTER 8. THE MUNDELL-FLEMING MODEL

tural VARs.13 Clarida and Gali [28] employ Blanchard-Quah’ struc-
tural VAR method using restrictions implied by the stochastic Mundell-
Fleming model. To see how this works, consider the 3-dimensional
vector, xt = (∆(yt − yt∗ ), ∆(pt − p∗t ), ∆qt )0 , where y is log industrial
production, p is the log price level, and q is the log real exchange rate
and starred variables are for the foreign country. Given the processes
that govern the exogenous variables (8.21) and (8.22), the stochastic
Mundell-Fleming model predicts that income and the real exchange
rate are unit root processes, so the VAR should be speciÞed in terms
of Þrst-diﬀerenced observations. The triangular structure also informs
us that the variables are not cointegrated, since each of the variables
are driven by a diﬀerent unit root process.14
    As described in Chapter 2.1, Þrst Þt a p-th order VAR for xt and
get the Wold moving average representation
                                   ∞
                                   X
                            xt =         (Cj Lj )²t = C(L)²t ,                  (8.45)
                                   j=0
                                                        P
where E(²t ²0t ) = Σ, C0 = I, and C(L) = ∞           j
                                             j=0 Cj L is the one-sided
matrix polynomial in the lag operator L. The theory predicts that in
the long run, xt is driven by the three dimensional vector of aggregate
supply, aggregate demand, and monetary shocks, v t = (zt , δt , vt )0 .
   The economic structure embodied in the stochastic Mundell-Fleming
model is represented by
                                   ∞
                                   X
                            xt =         (Fj Lj )v t = F(L)vt .                 (8.46)
                                   j=0

Because the underlying structural innovations are not observable, you
are allowed to make one normalization. Take advantage of it by setting
E(v t v0t = I). The orthogonality between the various structural shocks
is an identifying assumption. To map the innovations ²t from the unre-
stricted VAR into structural innovations vt , compare (8.45) and (8.46).
It follows that

         ²t = F0 v t ⇒ ²t−j = F0 vt−j ⇒ Cj ²t−j = Cj F0 vt−j = Fj v t−j .
  13
       They are only identifying restrictions, however, and cannot be tested.
  14
       Cointegration is discussed in Chapter2.6.
8.4. VAR ANALYSIS OF MUNDELL—FLEMING                                         253

To summarize

                Fj = Cj F0       for all j ⇒ F(1) = C(1)F0 .               (8.47)

Given the Cj , which you get from unrestricted VAR accounting, (8.47)
says you only need to determine F0 after which the remaining Fj follow.
   In our 3-dimensional system, F0 is a 3 × 3 matrix with 9 unique
elements. To identify F0 , you need 9 pieces of information. Start with,
Σ = G0 G = E(²t ²0t ) = F0 E(v t v 0t )F00 = F0 F00 where G is the unique
upper triangular Choleski decomposition of the error covariance matrix
Σ. To summarize
                           Σ = G0 G = F0 F00 .                      (8.48)
Let gij be the ijth element of G and fij,0 be the ijth element of F0 .
Writing (8.48) out gives
            2       2       2        2
           g11 = f11,0 + f12,0  + f13,0 ,                                  (8.49)
           g11 g12 = f11,0 f21,0 + f12,0 f22,0 + f13,0 f23,0 ,             (8.50)
           g11 g13 = f11,0 f31,0 + f12,0 f32,0 + f13,0 f33,0 ,             (8.51)
            2     2       2        2        2
           g12 +g22   = f21,0 + f22,0  + f23,0 ,                           (8.52)
           g12 g13 + g22 g23 = f21,0 f31,0 + f22,0 f32,0 + f23,0 f33,0 ,   (8.53)
            2     2      2       2        2      2
           g13 +g23   + g33 = f31,0  + f32,0  + f33,0 .                    (8.54)

G has 6 unique elements so this decomposition gives you 6 equations
in 9 unknowns. You still need three additional pieces of information.
Get them from the long-run predictions of the theory.
    Stochastic Mundell-Fleming predicts that neither demand shocks
nor monetary shocks have a long-run eﬀect on output which we repre-
sent by setting f12 (1) = 0 and f13 (1) = 0, where fij (1) is the ijth
                      P
element of F(1) = ∞     j=0 Fj . The model also predicts that money
has no long-run eﬀect on the real exchange rate f33 (1) = 0. Since
F(1) = C(1)F0 , impose these three restrictions by setting

         f13 (1) = 0 = c11 (1)f13,0 + c12 (1)f23,0 + c13 (1)f33,0 ,        (8.55)
         f12 (1) = 0 = c11 (1)f12,0 + c12 (1)f22,0 + c13 (1)f32,0 ,        (8.56)
         f33 (1) = 1 = c31 (1)f13,0 + c32 (1)f23,0 + c33 (1)f33,0 .        (8.57)
254             CHAPTER 8. THE MUNDELL-FLEMING MODEL

(8.49)—(8.57) form a system of 9 equations in 9 unknowns and implicitly
deÞne F0 . Once the Fj are obtained, you can do impulse response anal-
yses and forecast error variance decompositions using the ‘structural’
response matrices Fj .

Table 8.1: Structural VAR forecast error variance decompositions for
real exchange rate depreciation

                1 month             36 months
         Supply Demand Money Supply Demand Money
 Britain  0.378   0.240 0.382 0.331    0.211  0.458
 Germany 0.016    0.234 0.750 0.066    0.099  0.835
 Japan    0.872   0.011 0.117 0.810    0.071  0.119


    Clarida and Gali estimate a structural VAR using quarterly data
from 1973.3 to 1992.4 for the US, Germany, Japan, and Canada Their
impulse response analysis revealed that following a one-standard devi-
ation nominal shock, the real exchange rate displayed a hump shape,
initially depreciating then subsequently appreciating. Real exchange
rate dynamics were found to display delayed overshooting.
    We’ll re-estimate the structural VAR using 4 lags and monthly data
for the US, UK, Germany, and Japan from 1976.1 through 1997.4. The
structural impulse response dynamics of the levels of the variables are
displayed in Figure 8.9. As predicted by the theory, supply shocks
lead to a permanent real deprecation and demand shocks lead to a
permanent real appreciation. The US-UK real exchange rate does not
exhibit delayed overshooting in response to monetary shocks. The real
dollar-pound rate initially appreciates then subsequently depreciates
following a positive monetary shock. The real dollar-deutschemark rate
displays overshooting by Þrst depreciating and then subsequently ap-
preciating. The real dollar-yen displays Dornbusch-style overshooting.
Money shocks are found to contribute a large fraction of the forecast
error variance both the long run as well as at the short run for the
real exchange rate. The decompositions at the 1-month and 36-month
forecast horizons are reported in Table 8.1
8.4. VAR ANALYSIS OF MUNDELL—FLEMING                                                                                                                          255



 0.4
                           Supply, US-UK                         0
                                                                                  Demand, US-UK                                      Money, US-UK
                                                                                                                   0.2
                                                                         1    5       9   13      17   21   25
0.35                                                                                                             0.15
                                                          -0.05
 0.3
                                                                                                                   0.1
0.25
                                                           -0.1                                                  0.05
 0.2
                                                                                                                        0
0.15                                                      -0.15                                                             1   5       9    13     17   21    25
                                                                                                                 -0.05
 0.1
                                                                                                                  -0.1
0.05                                                       -0.2
                                                                                                                 -0.15
      0
               1   5          9      13    17   21   25   -0.25                                                   -0.2


                   Supply, US-Germany                                        Demand, US-Germany                                 Money, US-Germany
  0.2                                                            0                                                0.3
                                                                         1    5       9   13      17   21   25
                                                          -0.05                                                   0.2
 0.15
                                                           -0.1
                                                                                                                  0.1
  0.1
                                                          -0.15
                                                                                                                    0
                                                           -0.2                                                             1   5       9    13     17   21    25
 0.05
                                                                                                                 -0.1
                                                          -0.25
       0
                                                                                                                 -0.2
               1       5         9   13    17   21   25    -0.3

-0.05                                                     -0.35                                                  -0.3


                       Supply, US-Japan                                       Demand, US-Japan                                      Money, US-Japan
1.8                                                          0                                                     0.4
1.6                                                                  1        5      9    13      17   21   25
                                                          -0.1                                                   0.35
1.4                                                       -0.2                                                     0.3
1.2
                                                          -0.3                                                   0.25
  1
                                                          -0.4                                                     0.2
0.8
                                                          -0.5                                                   0.15
0.6
                                                          -0.6                                                     0.1
0.4
                                                          -0.7                                                   0.05
0.2
  0                                                       -0.8                                                          0
           1       5         9       13    17   21   25   -0.9                                                              1    5      9    13     17   21    25




Figure 8.9: Structural impulse response of log real exchange rate to sup-
ply, demand, and money shocks. Row 1: US-UK, row 2: US-Germany,
row 3: US-Japan.
256              CHAPTER 8. THE MUNDELL-FLEMING MODEL

      Mundell-Fleming Models Summary

      1. The hallmark of Mundell-Fleming models is that they assume
         that goods prices are sticky. Many people think of Mundell—
         Fleming models synonymously with sticky-price models. Be-
         cause there exist nominal rigidities, these models invite an as-
         sessment of monetary (and Þscal) policy interventions under
         both Þxed and ßexible exchange rates. The models also provide
         predictions regarding the international transmission of domestic
         shocks and co-movements of macroeconomic variables at home
         and abroad.
      2. The Dornbusch version of the model exploits the slow adjust-
         ment in the goods market combined with the instantaneous ad-
         justment in the asset markets to explain why the exchange rate,
         which is the relative price of two monies (assets), may exhibit
         more volatility than the fundamentals in a deterministic and
         perfect foresight environment. Explaining the excess volatil-
         ity of the exchange rate is a recurring theme in international
         macroeconomics.
      3. The dynamic stochastic version of the model is amenable to
         empirical analysis. The model provides a useful guide for doing
         unrestricted and structural VAR analysis.
8.4. VAR ANALYSIS OF MUNDELL—FLEMING                                       257

Appendix: Solving the Dornbusch Model
From (8.9) and (8.11), we see that the behavior of i(t) is completely deter-
mined by that of s(t). This means that we need only determine the diﬀer-
ential equations governing the exchange rate and the price level to obtain a
complete characterization of the system’s dynamics.
    Substitute (8.9) and (8.11) into (8.6). Make use of (8.13) and rearrange
to obtain
                                     1
                              ú = [p(t) − p̄].
                              s(t)                                     (8.58)
                                     λ
To obtain the diﬀerential equation for the price level, begin by substituting
(8.58) into (8.9), and then substituting the result into (8.8) to get         ⇐(144)
                                                 σ
       ú = π[δ(s(t) − p(t)) + (γ − 1)y − σi∗ − (p(t) − p̄) + g].
      p(t)                                                             (8.59)
                                                 λ
However, in the long run
                   0 = π[δ(s̄ − p̄) + (γ − 1)y − σr ∗ + g],              (8.60)
the price dynamics are more conveniently characterized by                         ⇐(145)
                           ·                                        ¸
                                                      σ
                p(t)
                ú = π δ(s(t) − s̄) − (δ +               )(p(t) − p̄) ,   (8.61)
                                                      λ
which is obtained by subtracting (8.60) from (8.59).
   Now write (8.58) and (8.61) as the system
                       Ã           !        Ã               !
                           s(t)
                           ú                    s(t) − s̄
                                       =A                       ,        (8.62)
                           p(t)
                           ú                    p(t) − p̄
where                          Ã                            !
                                   0     1/λ
                       A=                                       .
                                   πδ −π(δ + σ/λ)
(8.62) is a system of two linear homogeneous diﬀerential equations. We know
that the solutions to these systems take the form
                               s(t) = s̄ + αeθt ,                        (8.63)
                                                      θt
                               p(t) = p̄ + βe .                          (8.64)
   We will next substitute (8.63) and (8.64) into (8.62) and solve for the
unknown coeﬃcients, α, β, and θ. First, taking time derivatives of (8.63)
and (8.64) yields
                                   sú = θαeθt ,                          (8.65)
                                                 θt
                                   pú = θβe .                            (8.66)
         258               CHAPTER 8. THE MUNDELL-FLEMING MODEL

         Substitution of (8.65) and (8.66) into (8.62) yields
                                                   Ã       !
                                                       α
                                      (A − θI2 )               = 0.                           (8.67)
                                                       β
         In order for (8.67) to have a solution other than the trivial one (α, β) = (0, 0),
         requires that
                                     0 = |A − θI2 |                                           (8.68)
                                             2
                                       = θ − T r(A)θ + |A|,                                   (8.69)
(146)⇒   where T r(A) = −π(δ + σ/λ) and |A| = −πδ/λ otherwise, (A − θI2 )−1 exists
         which means that the unique solution is the trivial one, which isn’t very
         interesting. Imposing the restriction that (8.69) is true, we Þnd that its
         roots are
                                             q
                                 1
                          θ1 =     [T r(A) − T r 2 (A) − 4|A|] < 0,          (8.70)
                                 2
                                 1           q
                          θ2 =     [T r(A) + T r 2 (A) − 4|A|] > 0.          (8.71)
                                 2
         The general solution is
                                  s(t) = s̄ + α1 eθ1 t + α2 eθ2 t ,                           (8.72)
                                                       θ1 t            θ2 t
                                  p(t) = p̄ + β1 e            + β2 e          .               (8.73)
         This solution is explosive, however, because of the eventual dominance of
         the positive root. We can view an explosive solution as a bubble, in which
         the exchange rate and the price level diverges from values of the economic
         fundamentals. While there are no restrictions within the model to rule out
         explosive solutions, we will simply assume that the economy follows the
         stable solution by setting α2 = β2 = 0, and study the solution with the
         stable root
                     θ ≡ −θ1                                                   (8.74)
                                             q
                             1
                         =     [π(δ + σ/λ) + π 2 (δ + σ/λ)2 + 4πδ/λ].          (8.75)
                             2
         Now, to Þnd the stable solution, we solve (8.67) with the stable root
                                             Ã         !
                                                 α
                         0 = (A − θ1 I2 )
                                                 β
                                 Ã                                       !Ã           !
                                     −θ1      1/λ                                 α
                             =                                                            .
                                     πδ −θ1 − π(δ + σ/λ)                          β
                                                                                              (8.76)
8.4. VAR ANALYSIS OF MUNDELL—FLEMING                                       259

When this is multiplied out, you get

                      0 = −θ1 α + β/λ,                                  (8.77)
                                            µ         ¶
                                            σ
                      0 = πδα − [θ1 + π δ +   ]β.                       (8.78)
                                            λ
It follows that
                                 α = β/θ1 λ.                            (8.79)
Because α is proportional to β, we need to impose a normalization. Let this
normalization be β = po − p̄ where po ≡ p(0). Then α = (po − p̄)/θ1 λ =
−[po − p̄]/θλ, where θ ≡ −θ1 . Using these values of α and β in (8.63) and
(8.64), yields

                         p(t) = p̄ + [po − p̄]e−θt ,                    (8.80)
                                                −θt
                         s(t) = s̄ + [so − s̄]e       ,                 (8.81)

where (so − s̄) = −[po − p̄]/θλ. This solution gives the time paths for the
price level and the exchange rate.
    To characterize the system and its response to monetary shocks, we will
want to phase diagram the system. Going back to (8.58) and (8.61), we
see that s(t)
           ú    = 0 if and only if p(t) = p̄, while p(t)ú   = 0 if and only if
s(t) − s̄ = (1 + σ/λδ)(p(t) − p̄). These points are plotted in Figure 8.10. The
system displays a saddle path solution.
260          CHAPTER 8. THE MUNDELL-FLEMING MODEL




        s
                                               .
                                               p=0




                                .
                                s=0


                                                     p

      Figure 8.10: Phase diagram for the Dornbusch model.
8.4. VAR ANALYSIS OF MUNDELL—FLEMING                                     261

Problems
  1. (Static Mundell-Fleming with imperfect capital mobility). Let the
     trade balance be given by α(s + p∗ − p) − ψy. A real depreciation
     raises exports and raises the trade balance whereas an increase in
     income leads to higher imports which lowers the trade balance. Let
     the capital account be given by θ(i − i∗ ), where 0 < θ < ∞ indexes the
     degree of capital mobility. We replace (8.3) with the external balance
     condition
                       α(s + p∗ − p) − ψy + θ(i − i∗ ) = 0,
     that the balance of payments is 0. (We are ignoring the service ac-
     count.) When capital is completely immobile, θ = 0 and the balance of
     payments reduces to the trade balance. Under perfect capital mobility,
     θ = ∞ implies i = i∗ which is (8.3).

      (a) Call the external balance condition the FF curve. Draw the FF
          curve in r, y space along with the LM and IS curves.
      (b) Repeat the comparative statics experiments covered in this chap-
          ter using the modiÞed external balance condition. Are any of the
          results sensitive to the degree of capital mobility? In particular,
          how do the results depend on the slope of the FF curve in relation
          to the LM curve?

  2. How would the Mundell-Fleming model with perfect capital mobility
     explain the international co-movements of macroeconomic variables in
     Chapter 5?

  3. Consider the Dornbusch model.

      (a) What is the instantaneous eﬀect on the exchange rate of a shock
          to aggregate demand? Why does an aggregate demand shock
          not produce overshooting?
      (b) Suppose output can change in the short run by replacing the IS
          curve (8.7) with y = δ(s − p) + γy − σi + g, replace the price
          adjustment rule (8.8) with pú = π(y − ȳ), where long-run output is
          given by ȳ = δ(s̄ − p̄) + γ ȳ − σi∗ + g. Under what circumstances
          is the overshooting result (in response to a change in money)
          robust?
262   CHAPTER 8. THE MUNDELL-FLEMING MODEL
Chapter 9

The New International
Macroeconomics

The new international macroeconomics are a class of theories that em-
bed imperfect competition and nominal rigidities in a dynamic general
equilibrium open economy setting. In these models, producers have
monopoly power and charge price above marginal cost. Since it is op-
timal in the short run for producers to respond to small ßuctuations
by changing output, these models explain why output is demand de-
termined in the short run when current prices are predetermined due
to some nominal rigidity. It follows from the imperfectly competitive
environment that equilibrium output lies below the socially optimal
level. We will see that this feature is instrumental in producing re-
sults that are very diﬀerent from Mundell—Fleming models. Because
Mundell—Fleming predictions can be overturned, it is perhaps inaccu-
rate to characterize these models as providing the micro-foundations
for Mundell-Fleming.
    These models also, and not surprisingly, are sharply distinguished
from the Arrow-Debreu style real business cycle models. Both classes of
theories are set in dynamic general equilibrium with optimizing agents
and well-speciÞed tastes and technology. Instead of being set in a per-
fect real business cycle world, the presence of market imperfections
and nominal rigidities permit international transfers of wealth in equi-
librium and prevent equilibrium welfare from reaching the socially op-
timal level of welfare. It therefore makes sense here to examine the

                                  263
264CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

welfare eﬀects of policy interventions whereas it does not make sense
in real business cycle models since all real business cycle dynamics are
Pareto eﬃcient.
    The genesis of this literature is the Obstfeld and Rogoﬀ [113] Re-
dux model. This model makes several surprising predictions that are
contrary to Mundell—Fleming. The model is somewhat fragile, however,
as we will see when we cover the pricing-to-market reÞnement by Betts
and Devereux [10].
    In this chapter, stars denote foreign country variables but lower case
letters do not automatically mean logarithms. Unless explicitly noted,
variables are in levels. There is also a good deal of notation. For ease of
reference, Table 9.1 summarizes the notation for the Redux model and
Table 9.2 lists the notation for the pricing-to-market model. The terms
household, agent, consumer and individual are used interchangeably.
The home currency unit is the ‘dollar’ and the foreign currency is the
‘euro.’


9.1      The Redux Model
We are set in a deterministic environment and agents have perfect
foresight. There are 2 countries, each populated by a continuum of
consumer—producers. There is no physical capital. Each household
produces a distinct and diﬀerentiated good using only its labor and the
production of each household is completely specialized. Households are
arranged on the unit interval, [0, 1] with a fraction n living in the home
country and a fraction 1−n living in the foreign country. We will index
domestic agents by z where 0 < z < n, and foreign agents by z ∗ where
n < z ∗ < 1. When we refer to both home and foreign agents, we will
use the index u where 0 < u < 1.


    Preferences. Households derive utility from consumption, leisure,
and real cash balances. Higher output means more income, which is
good, but it also means less leisure which is bad. Money is introduced
through the utility function where agents value the real cash balances
of their own country’s money. Money does not have intrinsic value but
9.1. THE REDUX MODEL                                                                                   265

                  Home Country                               Foreign Country

                         z                                              z*


         0                                       n                                                1


Figure 9.1: Home and foreign households lined up on the unit interval.


provides individuals with indirect utility because higher levels of real
cash balances help to lower shopping (transactions) costs.
     We assume that households have identical utility functions and we
will work with a representative household.
     Representative agent (household) in Redux model. Let ct (z) be the
home representative agent’s consumption of the domestic good z, and
ct (z ∗ ) be the agent’s consumption of the foreign good z ∗ . People have
tastes for all varieties of goods and the household’s consumption basket
is a constant elasticity of substitution (CES) index that aggregates
across the available varieties of goods
                         ·Z 1                     ¸ θ−1
                                                     θ
                                          θ−1
              Ct =               ct (u)    θ    du
                             0
                         ·Z n                          Z 1                            ¸ θ−1
                                                                                         θ
                                          θ−1                          θ−1
                                                                  ∗               ∗
                   =             ct (z)    θ    dz +         ct (z )    θ    dz               ,       (9.1)
                             0                          n


where θ > 1 is the elasticity of substitution between the varieties.1
    Let yt (z) be the time-t output of individual z, Mt be the domestic
per capita money stock and Pt be the domestic price level. Lifetime
utility of the representative domestic household is given by            ⇐(147)
                                                Ã           !1−²                             
              ∞
              X                 γ                    Mt+j              ρ 2
       Ut =     β j ln Ct+j +                                        − yt+j (z) ,                   (9.2)
            j=0                1−²                   Pt+j              2

   1
    In the discrete commodity formulation with N goods, the index can be written
        ·               ¸ θ−1
                           θ
          PN     θ−1
as C =      z=1 cz
                   θ
                     ∆z       where ∆z = 1. The representation under a continuum
of goods takes the limit of the sums given by the integral formulation in (9.1).
         266CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

         where 0 < β < 1 is the subjective discount factor, Ct+j is the CES
         index given in (9.1) and Mt /Pt are real balances. The costs of forgone
         leisure associated with work are represented by the term (−ρ/2)yt2 (z).
             Let pt (z) be the domestic price of good z, St be the nominal ex-
         change rate, and p∗t (z) be the foreign currency price of good z. A key
         assumption is that prices are set in the producer’s currency. It follows
         that the law of one price holds for every good 0 < u < 1

                                            pt (u) = St p∗t (u).                                          (9.3)

         The pricing assumption also implies that there is complete pass through
         of nominal exchange rate ßuctuations. That is, an x−percent depre-
         ciation of the dollar is fully passed through resulting in an x−percent
         increase in the dollar price of the imported good.
             Since utility of consumption is a monotone transformation of the
         CES index, we can begin with some standard results from consumer
(148)⇒   theory under CES utility.2 First, the correct domestic price index is
                                ·Z 1                    ¸ 1−θ
                                                           1
                                             1−θ
                        Pt =           pt (u)         du                                                  (9.4)
                                   0
                                ·Z n                          Z 1                             ¸ 1−θ
                                                                                                 1
                                                1−θ
                            =          pt (z)         dz +          [St p∗t (z ∗ )]1−θ dz ∗           .
                                   0                            n

         Second, household demand for the domestic good z, and for the foreign
         good z ∗ are
                                                       "            #−θ
                                                           pt (z)
                                       ct (z) =                           Ct ,                            (9.5)
                                                            Pt
            2
                In the static problem facing a consumer who wants to maximize
                                 θ−1      θ−1     θ
                          U = (x1 θ + x2 θ ) θ−1 subject to I = p1 x1 + p2 x2 ,

         where I is a given level of nominal income, the indirect utility function is
                                                                     I
                                   v(p1 , p2 ; I) =      (1−θ)           1
                                                                  (1−θ) 1−θ
                                                                                   ,
                                                       [p1     + p2    ]
                                                      (1−θ)     (1−θ)      1
         the appropriate price index is, P = [p1    +p2     ] 1−θ , and the individual’s demand
                               d           −θ
         for good j = 1, 2 is xj = [pj /P ] (I/P ), where (I/P ) is real income.
9.1. THE REDUX MODEL                                                                               267
                                          "                   #−θ
                               ∗              St p∗t (z ∗ )
                           ct (z ) =                                 Ct .                         (9.6)
                                                  Pt
   Analogously, foreign household lifetime utility is                                                     ⇐(150)
                                             Ã             !1−²                        
           ∞
           X                                        ∗
                               γ                  Mt+j                ρ ∗2 ∗ 
     Ut∗ =     β j ln Ct+j
                        ∗
                            +                       ∗
                                                                     − yt+j (z ) ,                (9.7)
           j=0                1−²                 Pt+j                2

with consumption and price indices                                                                        ⇐(151)
                   ·Z n                         Z 1                         ¸ θ−1
                                                                               θ
                                  θ−1                           θ−1
         Ct∗   =           c∗t (z) θ dz +             c∗t (z ∗ ) θ dz ∗             ,             (9.8)
                       0                          n
                                                                                    1
                       Z nÃ            !1−θ            Z 1                              1−θ
                              pt (z)
         Pt∗   =                             dz +            [p∗t (z ∗ )]1−θ dz ∗           ,   (9.9)
                       0       St                       n


and individual demand for z and z ∗ goods
                                          "             #−θ
                                               pt (z)
                            c∗t (z) =                             Ct∗ ,
                                               St Pt∗
                                          "                 #−θ
                                               p∗t (z ∗ )
                           c∗t (z ∗ ) =                            Ct∗ .
                                                  Pt∗
    Every good is equally important in home and foreign households
utility. It follows that the elasticity of demand 1/θ, in all goods mar-
kets whether at home or abroad, is identical. Every producer has the
identical technology in production. In equilibrium, all domestic produc-
ers behave identically to each other and all foreign producers behave
identically to each other in the sense that they produce the same level
of output and charge the same price. Thus it will be the case that for
any two domestic producers 0 < z < z 0 < n
                                   yt (z) = yt (z 0 ),
                                   pt (z) = pt (z 0 ),
                                                                             0
and that for any two foreign producers, n < z ∗ < z ∗ < 1
                                                              0
                               yt∗ (z ∗ ) = yt∗ (z ∗ ),
                               p∗t (z ∗ ) = p∗t (z∗0 ).
         268CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

         It follows that the home and foreign price levels, (9.4) and (9.9) simplify
         to
                                                                        1
                      Pt = [npt (z)1−θ + (1 − n)(St p∗t (z ∗ ))1−θ ] 1−θ ,        (9.10)
                                                                         1
                     Pt∗ = [n(pt (z)/St )1−θ + (1 − n)p∗t (z ∗ )1−θ ]   1−θ   ,   (9.11)

         and that PPP holds for the correct CES price index

                                          Pt = St Pt∗ .                           (9.12)

         Notice that PPP will hold for GDP deßators only if n = 1/2.

         Asset Markets. The world capital market is fully integrated. There is
         an internationally traded one-period real discount bond which is de-
         nominated in terms of the composite consumption good Ct . rt is the
         real interest rate paid by the bond between t and t + 1. The bond is
         available in zero net supply so that bonds held by foreigners are issued
         by home residents. The gross nominal interest rate is given by the
         Fisher equation
                                            Pt+1
                                  1 + it =       (1 + rt ),                (9.13)
                                             Pt
         and is related to the foreign nominal interest rate by uncovered interest
         parity
                                            St+1
                                   1 + it =      (1 + i∗t ).                (9.14)
                                             St
         Let Bt be the stock of bonds held by the domestic agent and Bt∗ be
         the stock of bonds held by the foreign agent. By the zero-net supply
         constraint 0 = nBt + (1 − n)Bt∗ , it follows that
                                                 n
                                      Bt∗ = −       Bt .                          (9.15)
                                                1−n

         The Government. For 0 < u < 1, let gt (u) be home government con-
         sumption of good u. Total home and foreign government consumption
         is given by a the analogous CES aggregator over government purchases
(153)⇒   of all varieties
9.1. THE REDUX MODEL                                                   269


                  Table 9.1: Notation for the Redux model

n            Fraction of world population in home country
u            Index across all individuals of the world 0 < u < 1.
z, z ∗       Index of domestic and foreign individuals, 0 < z < n < z ∗ < 1.
yt (z)       Home output of good z.
ct (u)       Home representative household consumption of good u.
Ct           Home CES consumption goods aggregator.
yt∗ (z ∗ )   Foreign output of good z ∗ .
c∗t (u)      Foreign representative household consumption of good u.
Ct∗          Foreign CES consumption goods aggregator.
pt (u)       Dollar price of good u.
Pt           Home price index.
p∗t (u)      Euro price of good u.
Pt∗          Foreign price index.
St           Dollar price of euro.
gt (u)       Home government consumption of good u.
Gt           Home government CES consumption goods aggregator.
Tt           Home tax receipts.
Mt           Home money supply.
Bt           Home household holdings of international real bond.
gt (u)       Home government consumption of good u.
G∗t          Foreign government CES consumption goods aggregator.
Tt∗          Foreign tax receipts.
Mt∗          Foreign money supply.
Bt∗          Foreign household holdings of international real bond.
rt           Real interest rate.
it           Home nominal interest rate.
θ            Elasticity of substitution between varieties of goods (θ > 1).
1/²          Consumption elasticity of money demand.
γ, ρ         Parameters of the utility function.
             b̂t = ∆Bt /C0w
             b̂∗t = ∆Bt∗ /C0w
             ĝt = ∆Gt /C0w
             ĝt∗ = ∆G∗t /C0w
Ctw          Average world private consumption (Ctw = nCt + (1 − n)Ct∗ ).
Gwt          Average world government consumption (Gw    t = nGt +(1−n)Gt ).
                                                                            ∗

Mtw          Average world money supply (Mtw = nMt + (1 − n)Mt∗ ).
270CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

                                    ·Z 1                          ¸ θ−1
                                                                     θ
                                                       θ−1
                       Gt =                  gt (u)     θ    du           ,
                                         0
                                    ·Z 1                          ¸ θ−1
                                                                     θ
                                                    θ−1
                      G∗t    =               gt∗ (u) θ du                 .
                                         0

It follows that home government demand for individual goods are given
by replacing ct with gt and Ct with Gt in (9.5)—(9.6). The identical
reasoning holds for the foreign government demand function.
    Governments issue no debt. They Þnance consumption either through
money creation (seignorage) or by lump—sum taxes Tt , and Tt∗ . Nega-
tive values of Tt and Tt∗ are lump—sum transfers from the government to
residents. The budget constraints of the home and foreign governments
are
                                     Mt − Mt−1
                           Gt = Tt +           ,                 (9.16)
                                        Pt
                                     M∗ − M∗
                          G∗t = Tt∗ + t ∗ t−1 .                  (9.17)
                                         Pt

Aggregate Demand. Let average world private and government con-
sumption be the population weighted average of the domestic and for-
eign counterparts

                        Ctw = nCt + (1 − n)Ct∗ ,                              (9.18)
                        Gwt = nGt + (1 − n)G∗t .                              (9.19)

Then Ctw + Gwt is world aggregate demand. The total demand for any
home or foreign good is given by
                                    "            #−θ
                                        pt (z)
                      ytd (z) =                        (Ctw + Gw
                                                               t ),           (9.20)
                                         Pt
                                    "                #−θ
                                        p∗t (z ∗ )
                    yt∗d (z ∗ ) =                          (Ctw + Gw
                                                                   t ).       (9.21)
                                           Pt∗

Budget Constraints. Wealth that domestic agents take into the next
period (Pt Bt + Mt ), is derived from wealth brought into the current
period ([1 + rt−1 ]Pt Bt−1 + Mt−1 ) plus current income (pt (z)yt (z)) less
9.1. THE REDUX MODEL                                                                271

consumption and taxes (Pt (Ct +Tt )). Wealth is accumulated in a similar
fashion by the foreign agent. The budget constraint for home and
foreign agents are
 Pt Bt + Mt = (1 + rt−1 )Pt Bt−1 + Mt−1 + pt (z)yt (z) − Pt Ct − Pt Tt , (9.22)
Pt∗ Bt∗ + Mt∗ = (1 + rt−1 )Pt∗ Bt−1
                                 ∗        ∗
                                     + Mt−1  + p∗t (z ∗ )yt∗ (z ∗ ) − Pt∗ Ct∗ − Pt∗ Tt∗ .
                                                                                (9.23)
We can simplify the budget constraints by eliminating p(z) and p∗ (z ∗ ).
Because output is demand determined, re-arrange (9.20) to get
                        θ−1           1
pt (z)yt (z) = Pt yt (z) θ [Ctw +Gwt ] , and substitute the result into (9.22).
                                      θ

Do the same for the foreign household’s budget constraint using the zero
net supply constraint on bonds (9.15) to eliminate B ∗ to get
                                                   Mt − Mt−1
          Ct = (1 + rt−1 )Bt−1 − Bt −                        − Tt
                                                      Pt
                            θ−1                1
                 +yt (z) θ [Ctw + Gwt ] ,
                                       θ                     (9.24)
                                               ∗    ∗
                             −nBt−1      nBt  M −M
         Ct∗   = (1 + rt−1 )        +        − t ∗ t−1 − Tt∗
                              1−n      1−n       Pt
                              θ−1                  1
                    +yt∗ (z ∗ ) θ [Ctw + Gw
                                          t ] .
                                             θ                                   (9.25)
                                                                                            ⇐(157)

Euler Equations. Ct , Mt , and Bt are the choice variables for the domes-
tic agent and Ct∗ , Mt∗ , and Bt∗ are the choice variables for the foreign
agent. For the domestic household, substitute the budget constraint
(9.22) into the lifetime utility function (9.2) to transform the problem
into an unconstrained dynamic optimization problem. Do the same
for the foreign household. The Euler-equations associated with bond
holding choice are the familiar intertemporal optimality conditions
                              Ct+1 = β(1 + rt )Ct ,                              (9.26)
                               ∗
                              Ct+1 = β(1 + rt )Ct∗ .                             (9.27)
The Euler-equations associated with optimal cash holdings are the
money demand functions
                                        "              #1
                            Mt              γ(1 + it )    ²
                               =                       Ct ,                      (9.28)
                            Pt                 it
272CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

                                           "               #1
                           Mt∗                 γ(1 + i∗t ) ∗ ²
                               =                          Ct ,               (9.29)
                           Pt∗                    i∗t

where (1/²) is the consumption elasticity of money demand.3 The
Euler-equations for optimal “labor supply” are4
                                       "         #
                               θ+1     θ−1                 1
                    [yt (z)]    θ    =     Ct−1 [Ctw + Gw
                                                        t ] ,
                                                           θ                 (9.30)
                                        ρθ
                                       "          #
                        ∗ ∗
                               θ+1     θ−1                  1
                  [yt (z ) ]    θ    =     Ct∗−1 [Ctw + Gw
                                                         t ] .
                                                            θ                (9.31)
                                        ρθ
It will be useful to consolidated the budget constraints of the individ-
ual and the government by combining (9.22) and (9.16) for the home
country and (9.17) and (9.24) for the foreign country

                                                       pt (z)yt (z)
                Ct = (1 + rt−1 )Bt−1 − Bt +                         − Gt ,   (9.32)
                                                            Pt

                        n          n      p∗ (z ∗ )yt∗ (z ∗ )
  Ct∗ = −(1 + rt−1 )       Bt−1 +     Bt + t       ∗
                                                              − G∗t . (9.33)
                       1−n        1−n            Pt
    Because of the monopoly distortion, equilibrium output lies below
the socially optimal level. Therefore, we cannot use the planner’s prob-
lem and must solve for the market equilibrium. The solution method
is to linearize the Euler equations around the steady state. To do so,
we must Þrst study the steady state.

The Steady State
Consider the state to which the economy converges following a shock.
Let these steady state values be denoted without a time subscript. We
                                                ³ ´−²
                                                                          β
   3
     The home-agent Þrst order condition is γ M  Pt
                                                   t      1     1
                                                         Pt − Pt Ct + Pt+1 Ct+1 = 0.
Now using (9.26) to eliminate β and the Fisher equation (9.13) to eliminate (1 + rt )
produces (9.28).
   4
     “Supply” is placed in quotes since the monopolistically competitive Þrm doesn’t
have a supply curve.
9.1. THE REDUX MODEL                                                        273

restrict the analysis to zero inßation steady states. Then the govern-
ment budget constraints (9.16) and (9.17) are G = T and G∗ = T ∗ . By
(9.26), the steady state real interest rate is

                                         (1 − β)
                                    r=           .                        (9.34)
                                            β
From (9.32) and (9.33), and the steady state consolidated budget con-
straints are
                                 p(z)y(z)
                      C = rB +                − G,             (9.35)
                                     P
                           nB     p∗ (z ∗ )y ∗ (z ∗ )
                C ∗ = −r       +                      − G∗ .   (9.36)
                          1−n            P∗

The ‘0-steady state’. We have just described the forward-looking steady
state to which the economy eventually converges. We now specify the
steady-state from which we depart. This benchmark steady state has
no international debt and no government spending. We call it the ‘0-
steady state’ and indicate it with a ‘0’ subscript, B0 = G0 = G∗0 = 0.
From the domestic agent’s budget constraint (9.35), we have C0 =
(p0 (z)/P0 )y0 (z). Since there is no international indebtedness, interna-
tional trade must be balanced, which means that consumption equals
income C0 = y0 (z). It also follows from (9.35) that p0 (z) = P0 . Anal-
ogously, C0∗ = y0∗ (z ∗ ) and p∗0 (z ∗ ) = P0∗ in the foreign country. By PPP,
P0 = S0 P0∗ , and from the foregoing p0 (z) = S0 p∗0 (z ∗ ). That is, the dol-
lar price of good z is equal to the dollar price of the foreign good z ∗ in
the 0-equilibrium.
     It follows that in the 0-steady-state, world demand is

           C0w = nC0 + (1 − n)C0∗ = ny0 (z) + (1 − n)y0∗ (z ∗ ).

Substitute this expression into the labor supply decisions (9.30) and
(9.31) to get
                                Ã        !
                     2θ+1       θ−1                                 1
            y0 (z)     θ    =         [ny0 (z) + (1 − n)y0∗ (z ∗ )] θ
                                 ρθ
                              Ã     !
                     2θ+1       θ−1                                 1
           y0∗ (z ∗ ) θ     =         [ny0 (z) + (1 − n)y0∗ (z ∗ )] θ .
                                 ρθ
274CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

Together, these relations tell us that 0-steady-state output at home and
abroad are equal to consumption
                                        "         #1/2
                                            θ−1
                y0 (z) = y0∗ (z ∗ ) =                    = C0 = C0∗ = C0w .            (9.37)
                                             ρθ

   Nominal and real interest rates in the 0-steady state are equalized
with (1+i0 )/i0 = 1/(1−β). By (9.28) and (9.29), 0-steady state money
demand is                          "         #1/²
                      M0    M0∗      γy0 (z)
                         = ∗ =                    .             (9.38)
                      P0    P0       1−β
Finally by (9.38) and PPP, it follows that the 0-steady-state nominal
exchange rate is
                                    M0
                             S0 = ∗ .                           (9.39)
                                    M0
(9.39) looks pretty much like the Lucas-model solution (4.55).

Log-Linear Approximation About the 0-Steady State
We denote the approximate log deviation from the 0-steady state with
a ‘hat’ so that for any variable X̂t = (Xt − X0 )/X0 ' ln(Xt /X0 ). The
consolidated budget constraints (9.32) and (9.33) with Bt−1 = B0 = 0
become
                              pt (z)
                      Ct =             yt (z) − Bt − Gt ,                              (9.40)
                                Pt
                                                  µ       ¶
                              p∗t (z ∗ ) ∗ ∗        nBt
                      Ct∗   =      ∗
                                        yt (z ) +           − G∗t .                    (9.41)
                                 Pt                 1−n

Multiply (9.40) by n and (9.41) by 1 − n and add together to get the
consolidated world budget constraint
                 Ã          !                     Ã          !
                     pt (z)                  p∗ (z ∗ ) ∗ ∗
      Ctw = n               yt (z) + (1 − n) t ∗       yt (z ) − Gw
                                                                  t .                  (9.42)
                      Pt                       Pt

Log-linearizing (9.42) about the 0-steady state yields

 Ĉtw = n[p̂t (z) + ŷt (z) − P̂t ] + (1 − n)[p̂∗t (z ∗ ) + ŷt∗ (z ∗ ) − P̂t∗ ] − ĝtw , (9.43)
         9.1. THE REDUX MODEL                                                                 275

(158)⇒    where ĝtw ≡ Gw    w 5
                        t /C0 . Do the same for PPP (9.12) and the domestic
         and foreign price levels (9.10)-(9.11) to get

                              Ŝt = P̂t − P̂t∗ ,                                            (9.44)
                              P̂t = np̂t (z) + (1 − n)(Ŝt + p̂∗t (z ∗ )),                  (9.45)
                             P̂t∗ = n(p̂t (z) − Ŝt ) + (1 − n)p̂∗t (z ∗ ).                 (9.46)

         Log-linearizing the world demand functions (9.20) and (9.21) gives

                                ŷt (z) = θ[P̂t − p̂t (z)] + Ĉtw + ĝtw ,                  (9.47)
                             ŷt∗ (z ∗ ) = θ[P̂t∗ − p̂∗t (z ∗ )] + Ĉtw + ĝtw .            (9.48)

         Log-linearizing the ‘labor supply rules’ (9.30) and (9.31) gives

                               (1 + θ)ŷt (z) = −θĈt + Ĉtw + ĝtw ,                       (9.49)
                              (1 + θ)ŷt∗ (z ∗ ) = −θĈt∗ + Ĉtw + ĝtw .                   (9.50)

         Log-linearizing the consumption Euler equations (9.26)—(9.27) gives

                                      Ĉt+1 = Ĉt + (1 − β)r̂t ,                            (9.51)
                                        ∗
                                      Ĉt+1 = Ĉt∗ + (1 − β)r̂t ,                           (9.52)

         and Þnally, log-linearizing the money demand functions (9.28) and
         (9.29) gives
                                              "          Ã                    !#
                                        1               P̂t+1 − P̂t
                          M̂t − P̂t   =   Ĉt − β r̂t +                             ,       (9.53)
                                        ²                  1−β
                                              "          Ã                         !#
                                        1               P̂ ∗ − P̂t∗
                        M̂t∗ − P̂t∗   =   Ĉt∗ − β r̂t + t+1                            .   (9.54)
                                        ²                   1−β


            5
             The expansion of the Þrst term about 0-steady state values is,
         ∆n(pt (z)/Pt )yt (z) = n(y0 (z)/P0 )(pt (z) − p0 (z)) + n(p0 (z)/P0 )(yt (z) − y0 (z)) −
         n[(p0 (z)y0 (z))/P02 ](Pt − P0 ). When you divide by C0w , note that C0w = y0 (z) and
         P0 = p0 (z) to get n[p̂t (z) − P̂t + ŷt (z)]. Expansion of the other terms follows in an
         analogous manner.
276CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

Long-Run Response
The economy starts out in the 0-steady state. We will solve for the new
steady-state following a permanent monetary or government spending
shock. For any variable X, let X̂ ≡ ln(X/X0 ), where X is the new
(forward-looking) steady state value. Since log-linearized equations
(9.43)—(9.50) hold for arbitrary t, they also hold across steady states
and from (9.43), (9.47), (9.48), (9.49) and (9.50) you get
   Ĉ w = n[p̂(z) + ŷ(z) − P̂ ] + (1 − n)[p̂∗ (z ∗ ) + ŷ ∗ (z ∗ ) − P̂ ∗ ] − ĝ w (, 9.55)
   ŷ(z) = θ[P̂ − p̂(z)] + Ĉ w + ĝ w ,                                            (9.56)
   ŷ ∗ (z ∗ ) = θ[P̂ ∗ − p̂∗ (z ∗ )] + Ĉ w + ĝ w ,                               (9.57)
                                      w     w
   (1 + θ)ŷ(z) = −θĈ + Ĉ + ĝ ,                                                  (9.58)
                ∗ ∗              ∗       w     w
   (1 + θ)ŷ (z ) = −θĈ + Ĉ + ĝ ,                                                (9.59)
where ĝ = G/C0w and ĝ ∗ = G∗ /C0w . Log-linearizing the steady state
budget constraints (9.35) and (9.36) and letting b̂ = B/C0w yields
             Ĉ = rb̂ + p̂(z) + ŷ(z) − P̂ − ĝ,                                    (9.60)
                     µ        ¶
                          n
            Ĉ ∗ = −            rb̂ + p̂∗ (z ∗ ) + ŷ ∗ (z ∗ ) − P̂ ∗ − ĝ ∗ .      (9.61)
                       1−n
Together, (9.55)—(9.61) comprise 7 equations in 7 unknowns
(ŷ, ŷ ∗ , (p̂(z) − P̂ ), (p̂∗ (z ∗ ) − P̂ ∗ ), Ĉ, Ĉ ∗ , Ĉ w ). There is no easy way to
solve this system. You must bite the bullet and do the tedious algebra
to solve this system of equations.6 The solution for the steady state
changes is
                       1
                 Ĉ =     [(1 + θ)rb̂ + (1 − n)ĝ ∗ − (1 − n + θ)ĝ],               (9.62)
                       2θ "                                       #
                    ∗    1       n(1 + θ)r                      ∗
                 Ĉ =          −            b̂ + nĝ − (n + θ)ĝ ,                  (9.63)
                        2θ        (1 − n)
                           ĝ w
                 Ĉ w = − ,                                                         (9.64)
                            2 "                #
                              1    ĝ w
                 ŷ(z) =                − θĈ ,                                     (9.65)
                          1+θ 2
   6
    Or you can use a symbolic mathematics software such as Mathematica or Maple.
I confess that I used Maple.
9.1. THE REDUX MODEL                                                         277
                               "            #
              ∗   ∗       1     ĝ w
             ŷ (z ) =                − θĈ ∗ ,                            (9.66)
                        1+θ 2
                            1 h                         i
             p̂(z) − P̂ =      (1 − n)(ĝ ∗ − ĝ) + rb̂ ,                  (9.67)
                           2θ               h                         i
               ∗ ∗       ∗           n
             p̂ (z ) − P̂ =                  (1 − n)(ĝ − ĝ ∗ ) − rb̂ .   (9.68)
                              (1 − n)2θ
From (9.62) and (9.63) you can see that a steady state transfer of wealth
in the amount of B from the foreign country to the home country,
raises home steady state consumption and lowers it abroad. The wealth
transfer reduces steady state home work eﬀort (9.65) and raises foreign
steady state work eﬀort (9.66). From (9.67), we see that this occurs
along with p̂(z) − P̂ > 0 so that the relative price is high in the high
wealth country. The underlying cause of the wealth redistribution has
not yet been speciÞed. It could have been induced either by government
spending shocks or monetary shocks.
    If the shock originates with an increase in home government con-
sumption, ∆G is spent on home and foreign goods which has a direct
eﬀect on home and foreign output. At home, however, higher govern-
ment consumption raises the domestic tax burden and this works to
reduce domestic steady state consumption.
    The relative price of exports in terms of imports is called the terms
of trade. To get the steady state change in the terms of trade, subtract
(9.68) from (9.67), add St to both sides and note that PPP implies
P̂ − (Ŝ + P̂ ∗ ) = 0 to get                                              ⇐(159)
                                     1              1
       p̂(z) − (Ŝ + p̂∗ (z ∗ )) = (ŷ ∗ − ŷ) =       (Ĉ − Ĉ ∗ ). (9.69)
                                     θ             1+θ
   From (9.53) and (9.54), it follows that the steady state changes in ⇐(160)
the price levels are
                                            1
                                  P̂ = M̂ − Ĉ,                      (9.70)
                                             ²
                                           1
                              P̂ ∗ = M̂ ∗ − Ĉ ∗ .                   (9.71)
                                            ²
By PPP, (9.70), and (9.71) the long-run response of the exchange rate
is
                                             1
                        Ŝ = M̂ − M̂ ∗ − (Ĉ − Ĉ ∗ ).               (9.72)
                                             ²
             278CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

             Short-Run Adjustment under Sticky Prices
             We assume that there is a one-period nominal rigidity in which nominal
             prices pt (z) and p∗t (z ∗ ) are set one period in advance in the producer’s
             currency.7 This assumption is ad hoc and not the result of a clearly
             articulated optimization problem. The prices cannot be changed within
             the period but are fully adjustable after 1 period. It follows that the
             dynamics of the model are fully described in 3 periods. At t − 1, the
             economy is in the 0-steady state. The economy is shocked at t, and the
             variable X responds in the short run by X̂t . At t + 1, we are in the new
             steady state and the long-run adjustment is X̂t+1 = X̂ ' ln(X/X0 ).
             Date t + 1 variables in the linearized model are the new steady state
             values and date t hat values are the short-run deviations.
                 From (9.45) and (9.46), the price-level adjustments are

                                          P̂t = (1 − n)Ŝt ,                                (9.73)
                                         P̂t∗ = −nŜt .                                     (9.74)

             In the short run, output is demand determined by (9.47) and (9.48).
             Substituting (9.73) into (9.47) and (9.74) into (9.48) and noting that
(161-163)⇒   individual goods prices are sticky p̂t (z) = p̂∗t (z ∗ ) = 0, you have

                                   ŷt (z) = θ(1 − n)Ŝt + Ĉtw + ĝ w ,                    (9.75)
                                ŷt∗ (z ∗ ) = −θ(n)Ŝt + Ĉtw + ĝ w .                      (9.76)

             The remaining equations that characterize the short run are (9.51)-
             (9.54), which are rewritten as

                              Ĉ = Ĉt + (1 − β)r̂t ,                                       (9.77)
                              Ĉ ∗ = Ĉt∗ + (1 − β)r̂t ,                                    (9.78)
                                              "            Ã                !#
                                          1               P̂ − P̂t
                              M̂t − P̂t =   Ĉt − β r̂t +                          ,        (9.79)
                                          ²                1−β
                                                 "           Ã                     !#
                                            1                        P̂ ∗ − P̂t∗
                              M̂t∗ − P̂t∗ =       Ĉt∗ − β     r̂t +                    .   (9.80)
                                             ²                         1−β

             Using the consolidated budget constraints, (9.40)—(9.41) and the price
(164)⇒       level response (9.73) and (9.74), the current account responds by
             9.1. THE REDUX MODEL                                                                279



(165-166)⇒
                                b̂t = ŷt (z) − (1 − n)Ŝt − Ĉt − ĝt ,                       (9.81)
                                                                           −n
                                b̂∗t = ŷt∗ (z ∗ ) + nŜt − Ĉt∗ − ĝt∗ =     b̂t .            (9.82)
                                                                          1−n
             We have not speciÞed the source of the underlying shocks, which may
             originate from either monetary or government spending shocks. Since
             the role of nominal rigidities is most clearly illustrated with mone-
             tary shocks, we will specialize the model to analyze an unanticipated
             and permanent monetary shock. The analysis of governments spending
             shocks is treated in the end-of-chapter problems.

             Monetary Shocks
             Set Gt = 0 for all t in the preceding equations and subtract (9.78) from
             (9.77), (9.80) from (9.79), and use PPP to obtain the pair of equations

                                 Ĉ − Ĉ ∗ = Ĉt − Ĉt∗ ,                                      (9.83)
                                             1                     β
                          M̂t − M̂t∗ − Ŝt =   (Ĉt − Ĉt∗ ) −          (Ŝ − Ŝt ).           (9.84)
                                             ²                 ²(1 − β)

             Substitute Ŝ from (9.72) into (9.84) to get
                                                            1
                                       Ŝt = (M̂t − M̂t∗ ) − (Ĉt − Ĉt∗ ).                    (9.85)
                                                            ²
             This looks like the solution that we got for the monetary approach
             except that consumption replaces output as the scale variable. Com-
             paring (9.85) to (9.72) and using (9.83), you can see that the exchange
             rate jumps immediately to its long-run value

                                                     Ŝ = Ŝt .                                (9.86)

             Even though goods prices are sticky, there is no exchange rate over-
             shooting in the Redux model.
                (9.85) isn’t a solution because it depends on Ĉt − Ĉt∗ which is en-
             dogenous. To get the solution, Þrst note from (9.83) that you only need
               7
                   z-goods prices are set in dollars and z ∗ -goods prices are set in euros.
         280CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

         to solve for Ĉ − Ĉ ∗ . Second, it must be the case that asset holdings im-
         mediately adjust to their new steady-state values, b̂t = b̂, because with
         one-period price stickiness, all variables must be at their new steady
         state values at time t + 1. The extent of any current account imbalance
         at t + 1 can only be due to steady-state debt service–not to changes in
         asset holdings. It follows that bond stocks determined at t which are
         taken into t + 1 are already be at their steady state values. So, to get
         the solution, start by subtracting (9.63) from (9.62) to get

                                                     (1 + θ) rb̂
                                       Ĉ − Ĉ ∗ =               .                     (9.87)
                                                        2θ 1 − n

(167)⇒   But b̂/(1 − n) = ŷt (z) − ŷt∗ (z ∗ ) − Ŝt − (Ĉt − Ĉt∗ ), which follows from
         subtracting (9.82) from (9.81) and noting that b̂ = b̂t . In addition,
(168)⇒   ŷt (z) − ŷt∗ (z ∗ ) = θŜt , which you get by subtracting (9.48) from (9.47),
         using PPP and noting that p̂t (z) − p̂∗t (z ∗ ) = 0. Now you can rewrite
(169)⇒   (9.87) as
                                                      (θ 2 − 1)r
                                        Ĉ − Ĉ ∗ =               Ŝt ,             (9.88)
                                                    r(1 + θ) + 2θ
         and solve (9.85) and (9.88) to get

                                             ²[r(1 + θ) + 2θ]
                          Ŝt =                                       (M̂t − M̂t∗ ),   (9.89)
                                       r(θ2 − 1) + ²[r(1 + θ) + 2θ]
                                               ²[r(θ2 − 1)]
                  Ĉt − Ĉt∗ =                                      (M̂t − M̂t∗ ).     (9.90)
                                       r(θ2 − 1) + ²[r(1 + θ) + 2θ]

(170)⇒   From (9.87) and (9.90), the solution for the current account is

                                     2θ²(1 − n)(θ − 1)
                         b̂ =                                (M̂t − M̂t∗ ).            (9.91)
                                r(θ2 − 1) + ²[r(1 + θ) + 2θ]

(171)⇒   (9.83), (9.90) and (9.69) together give the steady state terms of trade,

                                                 ²r(θ − 1)
           p̂(z) − p̂∗ (z ∗ ) − Ŝ =                                  (M̂t − M̂t∗ ).   (9.92)
                                       r(θ2 − 1) + ²[r(1 + θ) + 2θ]

         We can now see that money is not neutral since in (9.92) the monetary
         shock generates a long-run change in the terms of trade. A domestic
9.1. THE REDUX MODEL                                                      281

money shock generates a home current account surplus (in (9.91)) and
improves the home wealth position and therefore the terms of trade.
Home agents enjoy more leisure in the new steady state.
    From (9.89) it follows that the nominal exchange rate exhibits less
volatility than the money supply. It also exhibits less volatility under
sticky prices than under ßexible prices since if prices were perfectly
ßexible prices, money would be neutral and the eﬀect of a monetary
expansion on the exchange rate would be Ŝt = M̂t − M̂t∗ .
    The short-run terms of trade decline by Ŝt since p̂t (z) = p̂∗t (z ∗ ) = 0. ⇐(172)
Since there are no further changes in the exchange rate, it follows from
(9.92) and (9.90) that the short-run increase in the terms of trade ex-
ceeds the long-run increase. The partial reversal means there is over-
shooting in the terms of trade.
    To Þnd the eﬀect of permanent monetary shocks on the real interest
rate, use the consumption Euler equations (9.51) and (9.52) to get
                             Ĉtw = −(1 − β)r̂t .                       (9.93)
To solve for Ĉtw , use (9.73)—(9.74) to substitute out the short-run price-
level changes and (9.70)—(9.71) to substitute out the long-run price level
changes from the log-linearized money demand functions (9.53)—(9.54) ⇐(173-174)
                         Ã                 !
               β                   β      h                 i
    Ĉt +            Ĉ − ² +              M̂t − (1 − n)Ŝt = βr̂t ,
          ²(1 − β)              (1 − β)
                                Ã             !
                     β                   β      h           i
         Ĉt∗ +           Ĉ ∗ − ² +             M̂t∗ + nŜt = βr̂t .
                 ²(1 − β)             (1 − β)
Multiply the Þrst equation by n, the second by (1−n) then add together
noting by (9.64) Ĉ w = 0. This gives
                                     Ã               !
                                               β
                     βr̂t = Ĉtw −       ²+         M̂tw .
                                            (1 − β)
Now solve for the real interest rate gives the liquidity eﬀect
                                Ã                !
                                       β
                        r̂t = − ² +         M̂tw .                      (9.94)
                                    (1 − β)
A home monetary expansion lowers the real interest rate and raises
average world consumption. From the world demand functions (9.47)
         282CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

         and (9.48) it follows that domestic output unambiguously increases fol-
         lowing a the domestic monetary expansion. The monetary shock raises
         home consumption. Part of the new spending falls on home goods which
         raises home output. The other part of the new consumption is spent on
(175)⇒   foreign goods but because p̂∗t (z ∗ ) = 0, the increased demand for foreign
         goods generates a real appreciation for the foreign country and leads to
         an expenditure switching eﬀect away from foreign goods. As a result,
         it is possible (but unlikely for reasonable parameter values as shown in
         the end-of-chapter problems) for foreign output to fall. Since the real
         interest rate falls in the foreign country, foreign consumption following
         the shock behaves identically to home country consumption. Current
         period foreign consumption must lie above foreign output. Foreigners
         go into debt to Þnance the excess consumption and run a current ac-
         count deÞcit. There is a steady-state transfer of wealth to the home
         country. To service the debt, foreign agents work harder and consume
         less in the new steady state. To determine whether the monetary ex-
         pansion is on balance, a good thing or a bad thing, we will perform a
         welfare analysis of the shock.

         Welfare Analysis
(176)⇒   We will drop the notational dependence on z and z ∗ . Beginning with
         the domestic household, break lifetime utility into the three components
         arising from consumption, leisure, and real cash balances, Ut = Utc +
(177)⇒   Uty + Utm , where
                                      ∞
                                      X
                             Utc =          β j ln(Ct+j ),                   (9.95)
                                      j=0
                                           ∞
                                        ρX
                             Uty = −          β j yt+j
                                                   2
                                                       ,                     (9.96)
                                        2 j=0
                                           ∞
                                                      Ã      !1−²
                                      γ X        Mt+j
                            Utm   =           βj                    .        (9.97)
                                    1 − ² j=0    Pt+j
         It is easy to see that the surprise monetary expansion raises Utm so we
         need only concentrate on Utc and Uty .
                                   c
             Before the shock, Ut−1   = ln(C0 ) + (β/(1 − β)) ln(C0 ). After the
                   c
         shock, Ut = ln(Ct ) + (β/(1 − β)) ln(C). The change in utility due to
9.1. THE REDUX MODEL                                                                   283

changes in consumption is
                                                  β
                             ∆Utc = Ĉt +            Ĉ.                           (9.98)
                                                 1−β
To determine the eﬀect on utility of leisure, in the 0-steady state
  y
Ut−1   = −(ρ/2)[y02 + (β/(1 − β))y02 ]. Directly after the shock,
  y
Ut = −(ρ/2)[yt2 + (β/(1 − β))y 2 ]. Using the Þrst-order approxima-
tion, yt2 = y02 + 2y0 (yt − y0 ), it follows that, ∆Uty = −(ρ/2)[(yt2 − y02 ) + ⇐(178)
(β/(1 − β))(y 2 − y02 )]. Dividing through by y0 yields
                                    "                               #
                                                    β
                    ∆Uty = −ρ        y02 ŷt +          y 2 ŷ .                   (9.99)
                                                 (1 − β) 0
                                                  ³         ´1/2
                                                      θ−1
Now use the fact that C0 = y0 = C0w =                  ρθ
                                                                   , to get
                       Ã             !                       "                #
                           (θ − 1)          β         (θ − 1)
 ∆Utc + ∆Uty = Ĉt −               ŷt +         Ĉ −         ŷ . (9.100)
                              θ          (1 − β)         θ
Analogously, in the foreign country
                             Ã           !                          "              #
       ∗      ∗                (θ − 1) ∗         β            (θ − 1) ∗
   ∆Utc + ∆Uty = Ĉt∗ −                ŷt +          Ĉ ∗ −         ŷ .
                                  θ           (1 − β)            θ
                                                                     (9.101)
     To evaluate (9.101), Þrst note that ŷt = θ(1−n)Ŝt +Ĉtw which follows
from (9.75). From (9.89) and (9.90) it follows that Ĉt = bŜt + Ĉt∗ where
b = [r(θ2 − 1)/(r(1 + θ) + 2θ)]. Eliminate foreign consumption using
Ĉt∗ = (Ĉtw − nĈt )/(1 − n) to get
                             (1 − n)r(θ2 − 1)
                     Ĉt =                    Ŝt + Ĉtw .                        (9.102)
                               r(1 + θ) + 2θ
Now plug (9.102) and (9.93) into (9.77) to get the long-run eﬀect on
consumption
                          r(1 − n)(θ2 − 1)
                     Ĉ =                   Ŝt .            (9.103)
                          [(r(1 + θ) + 2θ)]
Substitute Ĉ into (9.65) to get the long-run eﬀect on home output
                                 −rθ(1 − n)(θ − 1)
                        ŷ =                       Ŝt .                          (9.104)
                                   r(1 + θ) + 2θ
         284CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

         Now substituting these results back into (9.100) gives
                                                             Ã       !
                           (1 − n)r(θ2 − 1)                 θ−1 h                     i
         ∆Utc + ∆Uty     =                   Ŝt + Ĉtw −          θ(1 − n)Ŝt + Ĉtw
                             r(1 + θ) + 2θ                      θ
                                     "                    #
                                                   2
                                β      r(1 − n)(θ − 1)
                           +                                Ŝt
                             (1 − β) r(1 + θ) + 2θ
                             Ã       !Ã         !
                                 β       θ − 1 rθ(1 − n)(θ − 1)
                           +                                       Ŝt .       (9.105)
                               1−β         θ         r(1 + θ) + 2θ

         After collecting terms, the coeﬃcient on Ŝt is seen to be 0. Substituting
(180)⇒   r = (1 − β)/β, you are left with
                                                    Ã                !
                       Ĉ w −(1 − β)r̂t                 β + ²(1 − β)
          ∆Utc + ∆Uty = t =             =                            M̂tw > 0, (9.106)
                             θ           θ                   θ

         where the Þrst equality uses (9.93) and the second equality uses (9.94).
             Due to the extensive symmetry built into the model, the solutions
         for the foreign variables Ĉ ∗ , Ĉt∗ , ŷ ∗ , ŷt∗ are given by the same formulae
         derived for the home country except that (1 − n) is replaced with −n.
                                                 ∗             ∗
         It follows that the eﬀect on ∆Utc + ∆Uty is identical to (9.106).
             One of the striking predictions of Redux is that the exchange rate
         eﬀects have no eﬀect on welfare. All that is left of the monetary shock
         is the liquidity eﬀect. The traditional terms of trade and current ac-
         count eﬀects that typically form the focus of international transmission
         analysis are of second order of importance in Redux. The reason is that
         in the presence of sticky nominal prices, the monetary shock generates
         a surprise depreciation and lowers the price level to foreigners. Home
         producers produce and sell more output but they also have to work
         harder which means less leisure. These two eﬀects oﬀset each other.
             The monetary expansion is positively transmitted abroad as it raises
         the leisure and consumption components of welfare by equal amounts
         in the two countries. Due to the monopoly distortion, Þrms set price
         above marginal cost, which leads to a level of output that is less than the
         socially optimal level. The monetary expansion generates higher output
         in the short run which moves both economies closer to the eﬃcient
         frontier. The expenditure switching eﬀects of exchange rate ßuctuations
9.1. THE REDUX MODEL                                                          285

and associated beggar thy neighbor policies identiÞed in the Mundell-
Fleming model are unimportant in the Redux model environment.
    It is possible, but unlikely for reasonable parameter values, that the
domestic monetary expansion can lower welfare abroad through its ef-
fects on foreign real cash balances. The analysis of this aspect of foreign
welfare is treated in the end-of-chapter problems.
Summary of Redux Predictions. The law-of-one price holds for all goods
and as a consequence PPP holds as well. A permanent domestic mon-
etary shock raise domestic and foreign consumption. Domestic output
increases and it is likely that foreign output increases but by a lesser
amount. The presumption is that home and foreign consumption ex-
hibit a higher degree of co-movement than home and foreign output.
Both home and foreign households experience the identical positive
welfare eﬀect from changes in consumption and leisure. The monetary
expansion moves production closer to the eﬃcient level, which is dis-
torted in equilibrium by imperfect competition. There is no exchange
rate overshooting. The nominal exchange rate jumps immediately to
its long-run value. The exchange rate also exhibits less volatility than
the money supply.
   Many of these predictions are violated in the data. For example,
Knetter [86] and Feenstra et. al. [52] Þnd that pass through of the
exchange rate onto the domestic prices of imports is far from complete
whereas there is complete pass-through in Redux.8 Also, we saw in
Chapter 7 that deviations from PPP and deviations from the law-of-
one price are persistent and can be quite large. Also, Redux does not
explain why international consumption displays lower degrees of co-
movements than output as we saw in Chapter 5.
    We now turn to a reÞnement of the Redux model in which the
price-setting rule is altered. The change in this one aspect of the model
overturns many of the redux model predictions and brings us back
towards the Mundell—Fleming model.



   8
    Pass-through is the extent to which the dollar price of US imports rise in re-
sponse to a 1-percent depreciation in the dollar currency.
286CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

9.2      Pricing to Market
The integration of international commodity markets in the Redux model
rules out deviations from the law-of-one price in equilibrium. Were such
violations to occur, they presumably would induce consumers to take
advantage of international price diﬀerences by crossing the border to
buy the goods (or contracting with foreign consumers to do the shop-
ping for them) in the lower price country resulting in the international
price diﬀerences being bid away.
    We will now modify the Redux model by assuming that domestic
and foreign goods markets are segmented. Domestic (foreign) agents are
unable to buy the domestically-produced good in the foreign (home)
country. The monopolistically competitive Þrm has the ability to en-
gage in price discrimination by setting a dollar price for domestic sales
that diﬀers from the price it sets for exports. This is called pricing-to-
market.
    For concreteness, let the home country be the ‘US’ and the foreign
country be ‘Europe.’ We assume that all domestic Þrms have the ability
to price-to-market as do all foreign Þrms. This is called ‘full’ pricing-
to-market. Betts and Devereux [10] allow the degree of pricing-to-
market–the fraction of Þrms that operate in internationally segmented
markets–to vary from 0 to 1. Both the Redux model and the next
model that we study are nested within their framework. The associated
notation is summarized in Table 9.2.


Full Pricing-To-Market
We modify Redux in two ways. The Þrst diﬀerence lies in the price-
setting opportunities for monopolistically competitive Þrms. The goods
market is integrated within the home country and within the foreign
country, but not internationally. The second modiÞcation is in the
menu of assets available to agents. Here, the internationally traded
asset is a nominal bond denominated in ‘dollars.’ The model is still set
in a deterministic environment.

Goods markets. A US Þrm z, sells xt (z) units of output in the home
market and exports vt (z) to the foreign country. Total output of the
9.2. PRICING TO MARKET                                                      287

US Þrm is yt (z) = xt (z) + vt (z). The per-unit dollar price of US sales
is set at pt (z) and the per-unit euro price of exports is set at qt∗ (z).
     A European Þrm z ∗ sells x∗t (z ∗ ) units of output in Europe at the
pre-set euro price p∗t (z ∗ ) and exports vt∗ (z ∗ ) to the US which it sells at
a pre-set dollar price of qt (z ∗ ). Total output of the European Þrm is
yt∗ (z ∗ ) = x∗t (z ∗ ) + vt∗ (z ∗ ).

    Home Country                    Foreign Country
    y=x+v                           v* sells at home at
    x sells at home at dollar        dollar price q
     price p




0                               n                                 1
    v sells abroad at               y*=x*+v*
    euro price q*                   x* sells in foreign country
                                     at euro price p*


Figure 9.2: Pricing-to-market home and foreign households lined up on
the unit interval.



Asset Markets. The internationally traded asset is a one-period nom-
inal bond denominated in dollars. Restricting asset availability places
potential limits on the degree of international risk sharing that can be
achieved. Since violations of the law of one price can now occur, so can
violations of purchasing power parity. It follows that that real inter-
est rates can diverge across countries. Since intertemporal optimality
requires that agents set the growth of marginal utility (consumption
in the log utility case) to be proportional to the real interest rate, the
international inequality of real interest rates implies that home and
foreign consumption will be not be perfectly correlated.
    The bond is sold at discount and has a face value of one dollar.
Let Bt be the dollar value of bonds held by domestic households, and
Bt∗ be the dollar value of bonds held by foreign households. Bonds
outstanding are in zero net supply nBt + (1 − n)Bt∗ = 0. The dollar
         288CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

         price of the bond is
                                              1
                                               δt ≡  .
                                           (1 + it )
         The foreign nominal interest rate is given by uncovered interest parity
                                                                 Ã         !
                                                                      St
                                 (1 + i∗t ) = (1 + it )                   .
                                                                     St+1
             Households. We need to distinguish between hours worked, which
         is chosen by the household, and output which is chosen by the Þrm.
         The utility function is similar to (9.2) in the Redux model except that
(181)⇒   hours of work ht (z) appears explicitly in place of output yt (z)
                                                     Ã          !1−²                        
                     ∞
                     X                 γ                  Mt+j           ρ
              Ut =     β j ln Ct+j +                                   − h2t+j (z) .                 (9.107)
                   j=0                1−²                 Pt+j           2

         The associated price indices for the domestic and foreign households
         are
                               ·Z n                        Z 1                          ¸1/(1−θ)
                                            1−θ                       ∗ 1−θ         ∗
                     Pt =             pt (z)      dz +           qt (z )       dz                  ,   (9.108)
                                 0                          n
                               ·Z n                        Z 1                          ¸1/(1−θ)
                     Pt∗   =          qt∗ (z)1−θ dz +            p∗t (z ∗ )1−θ dz ∗                .   (9.109)
                                 0                          n

             Wt is the home country competitive nominal wage. The household
         derives income from selling labor to Þrm z, Wt ht (z). Household-z also
         owns Þrm-z from which it earns proÞts, πt (z). Nominal wealth taken
         into the next period consists of cash balances and bonds (Mt + δt Bt ).
         This wealth is the result of wealth brought into the current period
         (Mt−1 + Bt−1 ) plus current income (Wt ht (z) + πt (z)) less consumption
         and taxes (Pt Ct + Pt Tt ). The home and foreign budget constraints are
         given by

           Mt + δt Bt = Wt ht (z) + πt (z) + Mt−1 + Bt−1 − Pt Ct − Pt Tt , (9.110)
                  Bt∗                                 B∗
          Mt∗ + δt    = Wt∗ h∗t (z) + πt∗ (z) + Mt−1
                                                 ∗
                                                     + t−1 − Pt∗ Ct∗ − Pt∗ Tt∗ . (9.111)
                   St                                  St
            Households take prices and Þrm proÞts as given and choose Bt , Mt ,
         and ht . To derive the Euler-equations implied by domestic household
9.2. PRICING TO MARKET                                                          289

optimality, transform the household’s problem into an unconstrained
dynamic choice problem by rewriting the budget constraint (9.110) in
terms of consumption and substituting this result into the utility func-
tion (9.107). Do the same for the foreign agent. The resulting Þrst-order
conditions can be re-arranged to yield,9
                             δt Pt+1 Ct+1 = βPt Ct ,                        (9.112)
                                          µ       ¶
                                  ∗    ∗    St+1
                             δt Pt+1 Ct+1           = βPt∗ Ct∗ ,            (9.113)
                                              St
                                     ·        ¸1
                             Mt          γCt ²
                                   =             ,                          (9.114)
                              Pt       1 − δt
                                                    1
                                                      ²
                             Mt∗  γCt∗ 
                                 =              ,                           (9.115)
                             Pt∗   1 − δt SSt+1  t

                                      1 Wt
                             ht (z) =         ,                             (9.116)
                                      ρ Pt Ct
                              ∗       1 Wt∗
                             ht (z) =           .                           (9.117)
                                      ρ Pt∗ Ct∗
Domestic household demand for domestic z−goods and for foreign z ∗ -
goods are                                                            ⇐(183)
                               "        #−θ
                                 pt (z)
                      ct (z) =              Ct .           (9.118)
                                  Pt
   9
       Diﬀerentiating the utility function with respect to Bt gives
                             ∂Ut   −δt        β
                                 =       +           = 0,
                             ∂Bt   Pt Ct   Pt+1 Ct+1
which is re-arranged as (9.112). Diﬀerentiating the utility function with respect to
Mt gives
                                                  µ      ¶−²
                   ∂Ut      −1        β         γ Mt
                        =        +           +                = 0.
                   ∂Mt     Pt Ct   Pt+1 Ct+1   Pt Pt
Re-arranging this equation and using (9.112) to substitute out Pt+1 Ct+1 = βPt Ct /δt
results in (9.114). The Þrst-order condition for hours is
                                 ∂Ut    Wt
                                     =       − ρht = 0,
                                 ∂ht   Pt Ct
from which (9.117) follows directly. Derivations of the Euler-equations for the for-
eign country follow analogously.
290CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS
                                           "                #−θ
                                  ∗    qt (z ∗ )
                             ct (z ) =                            Ct ,         (9.119)
                                          Pt
Foreign household demand for domestic z-goods and for and foreign
z ∗ -goods are
                               "         #−θ
                       ∗         qt∗ (z)
                      ct (z) =               Ct∗ ,        (9.120)
                                   Pt∗
                                           "                #−θ
                                               p∗t (z ∗ )
                            c∗t (z ∗ ) =                          Ct∗ .        (9.121)
                                                  Pt∗

Firms. Firms only employ labor. There is no capital in the model.
The domestic and foreign production technologies are identical and are
linear in hours of work
                           yt (z) = ht (z),
                                  yt∗ (z) = h∗t (z).
Domestic and foreign Þrm proÞts are

            πt (z) = pt (z)xt (z) + St qt∗ (z)vt (z) − Wt ht (z),                (9.122)
                                                     ∗
                                               qt (z ) ∗ ∗
           πt∗ (z ∗ ) = p∗t (z ∗ )x∗t (z ∗ ) +         vt (z ) − Wt∗ h∗t (z ∗ ). (9.123)
                                                  St
The domestic z-Þrm sets prices at the beginning of the period before
period-t shocks are revealed. The monopolistically competitive Þrm
maximizes proÞts by choosing output to set marginal revenue equal to
marginal cost. Given the demand functions (9.118)—(9.121), the rule
for setting the price of home sales is the constant markup of price over
costs,10 pt (z) = [θ/(θ − 1)]Wt . The z-Þrm also sets the euro price of its
exports qt∗ (z). Before period t monetary or Þscal shocks are revealed,
the Þrm observes the exchange rate St , and sets the euro price according
to the law-of-one price St qt∗ (z) = pt (z). This is optimal, conditional on
the information available at the time prices are set because home and
  10
    The domestic demand function is y = p−θ P θ C can be rewritten as
p = P C 1/θ y −1/θ . Multiply by y to get total revenue. Diﬀerentiating with re-
spect to y yields marginal revenue, [(θ − 1)/θ]P C 1/θ y −1/θ = [(θ − 1)/θ]p. Marginal
cost is simply W . Equating marginal cost to marginal revenue gives the markup
rule.
9.2. PRICING TO MARKET                                                                 291

foreign market elasticity of demand is identical. Although the Þrm has
the power to set diﬀerent prices for the foreign and home markets it
chooses not to do so. Once pt (z) and qt∗ (z) are set, they are Þxed for
the remainder of the period. The foreign Þrm sets price according to a
similar technology.
    Since the elasticity of demand for all goods markets is identical and
all Þrms have the identical technology, price-setting is identical among
home Þrms and is identical among all foreign Þrms
                                                 θ
                        pt (z) = St qt∗ (z) =       Wt ,          (9.124)
                                                θ−1
                                    qt (z ∗ )    θ
                       p∗t (z ∗ ) =           =     W ∗.          (9.125)
                                       St       θ−1 t
Using (9.124) and (9.125), the formulae for the price indices (9.108)
and (9.109) can be simpliÞed to                                           ⇐(186-187)
                    h                                               i    1

            Pt =     npt (z)(1−θ) + (1 − n)qt (z ∗ )(1−θ) (1−θ) ,                   (9.126)
                    h                                               i     1

            Pt∗ =    nqt∗ (z)(1−θ) + (1 − n)p∗t (z ∗ )(1−θ)             (1−θ)
                                                                                .   (9.127)
Output is demand determined in the short run and can either be sold
to the domestic market or made available for export. The adding-up
constraint on output, sales to the home market and sales to the foreign
market are
                    yt (z) = xt (z) + vt (z),                                       (9.128)
                                  "            #−θ
                                      pt (z)
                    xt (z) =                         nCt ,                          (9.129)
                                       Pt
                                  "            #−θ
                                      pt (z)
                    vt (z) =                         (1 − n)Ct∗ .                   (9.130)
                                      St Pt∗
The analogous formulae for the foreign country are
                 yt∗ (z ∗ ) = x∗t (z ∗ ) + vt∗ (z ∗ ),                              (9.131)
                                "            #−θ
                                  p∗t (z ∗ )
                 x∗t (z ∗ ) =          ∗
                                                 (1 − n)Ct∗ ,                       (9.132)
                                     Pt
                                "               #−θ
                                  St p∗t (z ∗ )
                 vt∗ (z ∗ ) =                          (1 − n)Ct .                  (9.133)
                                        Pt
         292CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS


         Government. Government spending is Þnanced by tax receipts and
         seignorage
                           Pt Gt = Pt Tt + Mt − Mt−1 ,           (9.134)
                                 Pt∗ G∗t = Pt∗ Tt∗ + Mt∗ − Mt−1
                                                            ∗
                                                                .                         (9.135)
         In characterizing the equilibrium, it will help to consolidate the individ-
         ual’s and government’s budget constraints. Substitute proÞts (9.122)-
         (9.123) and the government budget constraints (9.134)-(9.135) into the
         household budget constraints (9.110)-(9.111) and use the zero-net sup-
         ply constraint Bt∗ = −(n/(1 − n))Bt from (9.137) to get
              Pt Ct + Pt Gt + δt Bt = pt (z)xt (z) + St qt∗ (z)vt (z) + Bt−1 ,            (9.136)
                            n δt Bt                           qt (z ∗ ) ∗ ∗        n Bt−1
         Pt∗ Ct∗ + Pt∗ G∗t −         = p∗t (z ∗ )x∗t (z ∗ ) +          vt (z ) −           .
                          1 − n St                               St              1 − n St
                                                                                     (9.137)
         The equilibrium is characterized by the Euler equations (9.112)—(9.117),
         the consolidated budget constraints (9.136) and (9.137) with B0 = G0 =
         G∗0 = 0, and the output equations (9.128)—(9.133).
             From this point on we will consider only on monetary shocks. To
         simplify the algebra, set Gt = G∗t = 0 for all t. We employ the same
         solution technique as we used in the Redux model. First, solve for
         the 0-steady state with zero-international debt and zero-government
         spending, then take a log-linear approximation around that benchmark
         steady state.

          The 0-steady state. The 0-steady state under pricing-to-market is
         identical to that in the redux model. Set G0 = G∗0 = B0 = 0. Dollar
(189)⇒   prices of z and z ∗ goods sold at home are identical, p0 (z) = q0 (z ∗ ).
         From the markup rules (9.124) and (9.125), it follows that the law of
         one price, p0 (z) = q0 (z ∗ ) = S0 q0∗ (z) = S0 p∗0 (z ∗ ). We also have by PPP
                                           P0 = S0 P0∗ .                                  (9.138)
         Steady state hours of work, output, and consumption are
                                                                     "         #1/2
                                                                         θ−1
            h0 (z) = y0 (z) = h∗0 (z ∗ ) = y0∗ (z ∗ ) = C0 = C0∗ =                    .   (9.139)
                                                                          ρθ
9.2. PRICING TO MARKET                                              293




             Table 9.2: Notation for the pricing-to-market model

pt (z)       dollar price of home good z in home country.
qt∗ (z)      euro price of home good z in foreign country.
p∗t (z ∗ )   euro price of foreign good z ∗ in foreign country.
qt (z ∗ )    dollar price of foreign good z ∗ in home country.
yt (z)       home goods output.
xt (z)       home goods sold at home.
vt (z)       home goods sold in foreign country.
yt∗ (z ∗ )   foreign goods output.
x∗t (z ∗ )   foreign goods sold in foreign country.
vt∗ (z ∗ )   foreign goods sold in home country.
πt (z)       Domestic Þrm proÞts.
πt∗ (z ∗ )   Foreign Þrm proÞts.
ht (z)       Hours worked by domestic individual.
h∗t (z ∗ )   Hours worked by foreign individual.
Bt           Dollar value of nominal bond held by domestic individual.
Bt∗          Dollar value of nominal bond held by foreign individual.
it           Nominal interest rate.
δt           Nominal price of the nominal bond.
Wt           Nominal wage in dollars.
Wt∗          Nominal wage in euros.
Gt           Home government spending.
G∗t          Foreign government spending.
Tt           Home government lump-sum tax receipts.
Tt∗          Foreign government lump-sum tax receipts.
Ct           Home CES consumption index.
Ct∗          Foreign CES consumption index.
Pt           Home CES price index.
Pt∗          Foreign CES price index.
St           Nominal exchange rate.
             294CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

             From the money demand functions it follows that the exchange rate is
                                                              M0
                                                      S0 =        .                                   (9.140)
                                                              M0∗


             Log-linearizing around the 0-steady state. The log-expansion of (9.114)
             and (9.115) around 0-steady state values gives 11
                                              1           β
                               M̂t − P̂t =      Ĉt +          δ̂t ,                                  (9.141)
                                              ²       ²(1 − β)
                                              1 ∗         β
                             M̂t∗ − P̂t∗    =   Ĉt +           [δ̂t + Ŝt+1 − Ŝt ].                 (9.142)
                                              ²       ²(1 − β)

             Log-linearizing the consolidated budget constraints (9.136) and (9.137)
             with B0 = G0 = G∗0 = 0 gives12

              Ĉt = n[p̂t (z)+ x̂t (z)− P̂t ]+(1−n)[q̂t∗ (z)+ Ŝt + v̂t (z)− P̂t ]−β b̂t , (9.143)
                                                                                                       n
             Ĉt∗ = (1−n)[p̂∗t (z ∗ )+x̂∗t (z ∗ )− P̂t∗ ]+n[q̂t (z ∗ )− Ŝt +v̂t∗ (z ∗ )− P̂t∗ ]+β         b̂t .
                                                                                                     1−n
                                                                                                      (9.144)
(191-192)⇒   Log-linearizing (9.128)—(9.133) gives

                                      ŷt (z)= nx̂t (z) + (1 − n)v̂t (z),                             (9.145)
                                      ∗ ∗
                                    ŷt (z ) = (1 − n)x̂∗t (z ∗ ) + nv̂t∗ (z ∗ ),                     (9.146)
                                     x̂t (z) = θ[P̂t − p̂t (z)] + Ĉt ,                               (9.147)
               11
                    Taking log-diﬀerences of the money demand function
                                                                     ³ (9.114)´     gives
                                                                       δt −δ0−δ0   −β
             M̂t − P̂t = 1² [Ĉt −(ln(1−δt )−ln(1−δ0 ))]. But ∆(ln(1−δt )) ' 1−δ
                                                                         δ0
                                                                                =
                                                                                0 1−β δ̂t ,
             which together gives (9.141).
                                                                     S q ∗ (z)v (z)
               12
                  Write (9.136) as Ct = pt (z)x          t (z)
                                                                + t t Pt t          − δt Bt . It follows that
                                    h               i Pt h ∗                i       h Pit
                                                             S q (z)v (z)
             ∆Ct = Ct − C0 = ∆ pt (z)x     Pt
                                              t (z)
                                                     + ∆ t t Pt t             − ∆ δtPBt t . The expansion of
                                 h             i
             the Þrst term is ∆ pt (z)x
                                      Pt
                                         t (z)
                                                  = x0 (z)[x̂t + p̂t − P̂t ] because P0 = p0 (z). The ex-
             pansion of the second term follows analogously.   h       i To expand the third term, noting
                                                                 δt Bt
             that P0 = 1, δ0 = β, and B0 = 0 gives ∆ Pt = βBt . After dividing through by
             C0w = y0 (z), and noting that x0 (z)/y0 (z) = n, and v0 (z)/y0 (z) = (1 − n), we obtain
             (9.143).
9.2. PRICING TO MARKET                                                           295

                       v̂t (z) = θ[Ŝt + P̂t∗ − p̂t (z)] + Ĉt∗ ,             (9.148)
                    x̂∗t (z ∗ ) = θ[P̂t∗ − p̂∗t (z ∗ )] + Ĉt∗ ,              (9.149)
                    v̂t∗ (z ∗ ) = θ[P̂t − Ŝt − p̂∗t (z ∗ )] + Ĉt .          (9.150)
Log-linearizing the labor supply rules (9.116) and (9.117) and using the
price markup rules (9.124)—(9.125) to eliminate the wage yields
                          ŷt (z)   = p̂t (z) − P̂t − Ĉt ,                   (9.151)
                          ∗ ∗
                        ŷt (z )    = p̂∗t (z ∗ ) − P̂t∗ − Ĉt∗ .             (9.152)
Log-linearizing the intertemporal Euler equations (9.112) and (9.113)
gives
                 P̂t + Ĉt = δ̂t + Ĉt+1 + P̂t+1 ,                            (9.153)
                P̂t∗ + Ĉt∗ = δ̂t + Ĉt+1
                                      ∗        ∗
                                          + P̂t+1 + Ŝt+1 − Ŝt .             (9.154)



Long-Run Response
The log-linearized equations hold for arbitrary t and also hold in the
new steady state. By the intertemporal optimality condition (9.112),
δ = β in the new steady state which implies δ̂ = 0. Noting that the
nominal exchange rate is constant in the new steady state, it follows
from (9.141) and (9.142)
                                                1
                                    M̂ − P̂ =     Ĉ,                         (9.155)
                                                ²
                                                1 ∗
                               M̂ ∗ − P̂ ∗    =   Ĉ .                        (9.156)
                                                ²
By the law-of-one price p̂(z) = q ∗ˆ(z) + Ŝ. (9.143) and (9.144) become ⇐(194-196)
                  Ĉ = p̂(z) + ŷ(z) − P̂ − β b̂,                             (9.157)
                                                            "       #
                                                                 nβ
                 Ĉ ∗ = p̂∗ (z ∗ ) + ŷ ∗ (z ∗ ) − P̂ ∗ +           b̂.       (9.158)
                                                                1−n
Taking a weighted average of the log-linearized budget constraints (9.157)
and (9.158) gives
   Ĉ w = n[p̂(z) − P̂ + ŷ(z)] + (1 − n)[p̂∗ (z ∗ ) − P̂ ∗ + ŷ ∗ (z ∗ )].   (9.159)
             296CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

             Recall that world demand for home goods is y(z) = [p(z)/P ]−θ C w
             and world demand for foreign goods is y ∗ (z ∗ ) = [p∗ (z ∗ )/P ∗ ]−θ C w . The
             change in steady-state demand is

                                        ŷ(z) = −θ[p̂(z) − P̂ ] + Ĉ w ,                      (9.160)
                                    ŷ ∗ (z ∗ ) = −θ[p̂∗ (z ∗ ) − P̂ ∗ ] + Ĉ w               (9.161)

(197-198)⇒   By (9.151) and (9.152), the optimal labor supply changes by

                                          ŷ(z) = p̂(z) − P̂ − Ĉ,                            (9.162)
                                       ŷ (z ∗ ) = p̂∗ (z ∗ ) − P̂ ∗ − Ĉ ∗ .
                                         ∗
                                                                                              (9.163)

             (9.157)—(9.163) form a system of 6 equations in the 6 unknowns
             (Ĉ, Ĉ ∗ , ŷ(z), ŷ ∗ (z ∗ ), (p̂(z) − P̂ ), (p̂∗ (z ∗ ) − P̂ ∗ ), which can be solved to
             get13

                                                        β(1 + θ)
                                             Ĉ = −                b̂,                        (9.164)
                                                            2θ
                                                                  µ         ¶
                                                       β(1 + θ)         n
                                             Ĉ ∗ =                             b̂,           (9.165)
                                                           2θ        1−n
                                                         β
                                             ŷ(z) = b̂,                                      (9.166)
                                                         2      µ         ¶
                                               ∗ ∗            β       n
                                             ŷ (z ) = −                    b̂,               (9.167)
                                                              2 1−n
                                                                 β
                                             p̂(z) − P̂ = − b̂,                               (9.168)
                                                                2θ µ              ¶
                                                                  β        n
                                             p̂∗ (z ∗ ) − P̂ ∗ =                    b̂.       (9.169)
                                                                  2θ 1 − n

(199)⇒        By (9.164) and (9.165), average world consumption is not aﬀected
(200)⇒       Ĉ w = 0, but the steady-state change in relative consumption is

                                                                β(1 + θ)
                                             Ĉ − Ĉ ∗ = −                b̂.                 (9.170)
                                                                2θ(1 − n)
               13
                 The solution looks slightly diﬀerent from the redux solution because the inter-
             nationally traded asset is a nominal bond whereas in the redux model it is a real
             bond.
9.2. PRICING TO MARKET                                                297

From the money demand functions it follows that the steady state
change in the nominal exchange rate is
                                             1h         i
                         Ŝ = M̂ − M̂ ∗ −      Ĉ − Ĉ ∗ .         (9.171)
                                             ²

Adjustment to Monetary Shocks under Sticky Prices
Consider an unanticipated and permanent monetary shock at time t,
where M̂t = M̂ , and M̂t∗ = M̂ ∗ . As in Redux, the new steady state is
                                                           ∗
attained at t + 1, so that Ŝt+1 = Ŝ, P̂t+1 = P̂ , and P̂t+1 = P̂ ∗ .
    Date t nominal goods prices are set and Þxed one-period in advance.
By (9.10) and (9.11), it follows that the general price levels are also
predetermined, P̂t = P̂t∗ = 0. The short-run versions of (9.141) and
(9.142) are
                            1           β
                  M̂ =        Ĉt +          δ̂t ,                 (9.172)
                            ²       ²(1 − β)
                            1 ∗         β
                 M̂ ∗     =   Ĉt +           [δ̂t + Ŝ − Ŝt ].   (9.173)
                            ²       ²(1 − β)
Subtracting (9.173) from (9.172) gives
                      1                    β
          M̂t − M̂t∗ = (Ĉt − Ĉt∗ ) −          (Ŝ − Ŝt ).       (9.174)
                      ²                ²(1 − β)
From (9.153) and (9.154) you get

                        Ĉt = δ̂t + Ĉ + P̂ ,                      (9.175)
                        Ĉt∗ = δ̂t + Ĉ ∗ + P̂ ∗ + Ŝ − Ŝt .      (9.176)

At t + 1 PPP is restored, P̂ = P̂ ∗ + Ŝ. Subtract (9.176) from (9.175)
to get
                       Ĉ − Ĉ ∗ = Ĉt − Ĉt∗ − Ŝt .           (9.177)
The monetary shock generates a short-run violation of purchasing power
parity and therefore a short-run international divergence of real interest
rates. The incompleteness in the international asset market results in
imperfect international risk sharing. Domestic and foreign consumption
movements are therefore not perfectly correlated.
             298CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

                 To solve for the exchange rate take Ŝ from (9.171) and plug into
             (9.174) to get
             "            #
                     β      ³          ´  1³           ´     β     ³          ´      β
              1+             M̂t − M̂t∗ =    Ĉt − Ĉt∗ + 2          Ĉ − Ĉ ∗ +          Ŝt .
                 ²(1 − β)                 ²              ² (1 − β)               ²(1 − β)

             Using (9.177) to eliminate Ĉ − Ĉ ∗ , you get
                               β + ²(1 − β) h                              i
                       Ŝt =                 ²(M̂t − M̂t∗ ) − (Ĉt − Ĉt∗ ) .                         (9.178)
                                 β(² − 1)

             This is not the solution because Ĉt − Ĉt∗ is endogenous. To get the
             solution, you have from the consolidated budget constraints (9.143)
             and (9.144)

                         Ĉt = nx̂t (z) + (1 − n)[Ŝt + v̂t (z)] − β b̂t ,                            (9.179)
                                                                                 n
                        Ĉt∗   = (1 − n)x̂∗t (z ∗ ) + n[v̂t∗ (z ∗ ) − Ŝt ] + β     b̂t ,             (9.180)
                                                                                1−n
(201-202)⇒   and you have from (9.147)—(9.150)

                 x̂t (z) = Ĉt ;     x̂∗t (z ∗ ) = Ĉt∗ ;    v̂t (z) = Ĉt∗ ;   v̂t∗ (z ∗ ) = Ĉt .   (9.181)

             Subtract (9.180) from (9.179) and using the relations in (9.181), you
             have
                                                           β
                                 Ŝt = (Ĉt − Ĉt∗ ) +           b̂t .     (9.182)
                                                       2(1 − n)2
             Substitute the steady state change in relative consumption (9.170) into
             (9.177) to get
                                        2θ(1 − n)
                                 b̂ = −           [Ĉt − Ĉt∗ − Ŝt ],       (9.183)
                                        β(1 + θ)
             and plug (9.183) into (9.182) to get
                                                               2θ
                                   Ĉt − Ĉt∗ − Ŝt =               [Ĉt − Ĉt∗ − Ŝt ].
                                                            (1 + θ)

             It follows that Ĉt − Ĉt∗ − Ŝt = 0. Looking back at (9.183), it must be the
             case that b̂ = 0 so there are no current account eﬀects from monetary
             shocks. By (9.164) and (9.165), you see that Ĉ = Ĉ ∗ = 0, and by
9.2. PRICING TO MARKET                                                        299

(9.155) and (9.156) it follows that P̂ = M̂, and P̂ ∗ = M̂ ∗ . Money is
therefore neutral in the long run.
    Now substitute Ŝt = Ĉt − Ĉt∗ back into (9.178) to get the solution
for the exchange rate

                       Ŝt = [²(1 − β) + β](M̂t − M̂t∗ ).                (9.184)

The exchange rate overshoots its long-run value and exhibits more
volatility than the monetary fundamentals if the consumption elastic-
ity of money demand 1/² < 1.14 Relative prices are unaﬀected by the
change in the exchange rate, p̂t (z) − q̂t (z ∗ ) = 0. A domestic monetary
shock raises domestic spending, part of which is spent on foreign goods.
The home currency depreciates Ŝt > 0 in response to foreign Þrms repa-
triating their increased export earnings. Because goods prices are Þxed
there is no expenditure switching eﬀect. However, the exchange rate
adjustment does have an eﬀect on relative income. The depreciation
raises current period dollar (and real) earnings of US Þrms and reduces
current period euro (and real) earnings of European Þrms. This redis-
tribution of income causes home consumption to increase relative to
foreign consumption.

Real and nominal exchange rates. The short-run change in the real
exchange rate is                                                  ⇐(205)
                               ∗
                      P̂t − P̂t − Ŝt = −Ŝt ,
which is perfectly correlated with the short-run adjustment in the nom-
inal exchange rate.

Liquidity eﬀect. If rt is the real interest rate at home, then (1 + rt ) =
(Pt )/(Pt+1 δt ). Since P̂t = 0, it follows that r̂t = −(P̂ + δ̂t ) = −(δ̂t + M̂ )
and (9.175)—(9.172) can be solved to get

                            δ̂t = (1 − β)(² − 1)M̂ ,                     (9.185)

which is positive under the presumption that ² > 0. It follows that                  ⇐(206)
  14
    Obstfeld and Rogoﬀ show that a sectoral version of the Redux model with
traded and non-traded goods produces many of the same predictions as the pricing-
to-market model.
             300CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

                                            r̂t = [²(β − 1) − β]M̂ ,                                (9.186)

             is negative if ² > 1. Now let rt∗ be the real interest rate in the foreign
             country. Then, (1 + rt∗ ) = (Pt∗ St )/(Pt+1
                                                      ∗
                                                         St+1 δt ), and r̂t∗ = Ŝt − [P̂ ∗ +
             Ŝ + δ̂t ]. But you know that P̂ ∗ = M̂ ∗ = 0, Ŝ = M̂ , so r̂t∗ = r̂t + Ŝt .
             It follows from (9.184) and (9.186) that r̂t∗ = 0. The expansion of the
             domestic money supply has no eﬀect on the foreign real interest rate.

             International transmission and co-movements. Since δ̂t + Ŝ − Ŝt = 0,
             it follows from (9.172) that Ĉt = [²(1 − β) + β]M̂ > 0 and from (9.173)
             that Ĉt∗ = 0. Under pricing-to-market, there is no international trans-
             mission of money shocks to consumption. Consumption exhibits a low
             degree of co-movement. From (9.181), output exhibits a high-degree of
             co-movement, ŷt = x̂t = Ĉt = ŷt∗ = v̂t∗ . The monetary shock raises con-
             sumption and output at home. The foreign country experiences higher
             output, less leisure but no change in consumption. As a result, for-
             eign welfare must decline. Monetary shocks are positively transmitted
             internationally with respect to output but are negatively transmitted
             with respect to welfare. Expansionary monetary policy under pricing
             to market retains the ‘beggar-thy-neighbor’ property of depreciation
             from the Mundell—Fleming model.

             The terms of trade. Let Pxt be the home country export price index
                   ∗
(207-208)⇒   and Pxt be the foreign country export price index
                                     µZ n                        ¶1/(1−θ)
                                                                                      1
                           Pxt =            [St qt∗ (z)]1−θ dz                 = n 1−θ St qt∗ ,
                                        0

                             µZ 1                             ¶1/(1−θ)
                                                                                          1
                      ∗
                     Pxt =          [qt (z ∗ )/St ]1−θ dz ∗              = [(1 − n) 1−θ qt ]/St .
                               n
             The home terms of trade are,
                                                        µ           ¶ 1
                                           Pxt      n                    1−θ   St qt∗
                                     τt =     ∗
                                                 =                                    ,
                                          St Pxt   1−n                          qt
             and in the short run are determined by changes in the nominal exchange
             rate, τ̂t = Ŝt . Since money is neutral in the long run, there are no steady
             state eﬀects on τ . Recall that in the Redux model, the monetary shock
9.2. PRICING TO MARKET                                              301

caused a nominal depreciation and a deterioration of the terms of trade.
Under pricing to market, the monetare shock results in a short-run
improvement in the terms of trade.
302CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

    Summary of pricing-to-market and comparison to Redux. Many
of the Mundell—Fleming results are restored under pricing to market.
Money is neutral in the long run, exchange rate overshooting is restored,
real and nominal exchange rates are perfectly correlated in the short run
and under reasonable parameter values expansionary monetary policy
is a ‘beggar thy neighbor’ policy that raises domestic welfare and lowers
foreign welfare.
    Short-run PPP is violated which means that real interest rates can
diﬀer across countries. Deviations from real interest parity allow im-
perfect correlation between home and foreign consumption. While con-
sumption co-movements are low, output co-movements are high and
that is consistent with the empirical evidence found in Chapter 5. There
is no exchange-rate pass-through and there is no expenditure switching
eﬀect. Exchange rate ßuctuations do not aﬀect relative prices but do
aﬀect relative income. For a given level of output, the depreciation
generates a redistribution of income by raising the dollar earnings of
domestic Þrms and reduces the ‘euro’ earnings of foreign Þrms.
    In the Redux model, the exchange rate response to a monetary shock
is inversely related to the elasticity of demand, θ. The substitutability
between domestic and foreign goods is increasing in θ. Higher values
of θ require a smaller depreciation to generate an expenditure switch
of a given magnitude. Substitutability is irrelevant under full pricing-
to-market. Part of a monetary transfer to domestic residents is spent
on foreign goods which causes the home currency to depreciate. The
depreciation raises domestic Þrm income which reinforces the increased
home consumption. What is relevant here is the consumption elasticity
of money demand 1/².
    In both Redux and pricing to market, one-period nominal rigidities
are introduced as an exogenous feature of the environment. This is
mathematically convenient because the economy goes to new steady
state in just one period. The nominal rigidities can perhaps be moti-
vated by Þxed menu costs, and the analysis is relevant for reasonably
small shocks. If the monetary shock is suﬃciently large however, the
beneÞts to immediate adjustment will outweigh the menu costs that
generate the stickiness.
9.2. PRICING TO MARKET                                            303

   New International Macroeconomics Summary

   1. Like Mundell-Fleming models, the new international macroeco-
      nomics features nominal rigidities and demand-determined out-
      put. Unlike Mundell-Fleming, however, these are dynamic gen-
      eral equilibrium models with optimizing agents where tastes and
      technology are clearly spelled out. These are macroeconomic
      models with solid micro-foundations.
   2. Combining market imperfections and nominal price stickiness
      allow the new international macroeconomics to address features
      of the data, such as international correlations of consumption
      and output, and real and nominal exchange rate dynamics, that
      cannot be explained by pure real business cycle models in the
      Arrow-Debreu framework. It makes sense to analyze the welfare
      eﬀects of policy choices here, but not in real business cycle mod-
      els, since all real business cycle dynamics are Pareto eﬃcient.
   3. The monopoly distortion in the new international macroeco-
      nomics means that equilibrium welfare lies below the social op-
      timum which potentially can be eliminated by macroeconomic
      policy interventions.
   4. Predictions regarding the international transmission of mone-
      tary shocks are sensitive to the speciÞcation of Þnancial struc-
      ture and price setting behavior.
304CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS

Problems
 1. Solve for eﬀect on the money component of foreign welfare following
    a permanent home money shock in the Redux model.

     (a) Begin by showing that
                                     µ         ¶1−² ·                         ¸
                                         M∗                       β
                     ∆Ut∗3 = −γ                         P̂t∗ +       P̂ ∗
                                         P0∗                     1−β

         Next, show that P̂t∗ = −nŜt and

                                            rn(θ2 − 1)
                                P̂ ∗ =                    Ŝt .
                                         ²[r(1 + θ) + 2θ]

         Finally, show that
                            "                             #µ           ¶1−²
                                   −(θ2 − 1)                     M∗
                  ∆Ut∗3 =                        −1                           nγ Ŝt
                                ²[r(1 + θ) + 2θ]                 P0∗

         This component of foreign welfare evidently declines following
         the permanent Mt shock. Is it reasonable to think that it will
         oﬀset the increase in foreign utility from the consumption and
         leisure components?

 2. Consider the Redux model. Fix Mt = Mt∗ = M0 for all t. Begin in
    the ‘0’ equilibrium.

     (a) Consider a permanent increase in home government spending,
         Gt = G > G0 = 0. at time t. Show that the shock leads to a
         home depreciation of

                                          (1 + θ)(1 + r)
                        Ŝt =                                           ĝ,
                                 r(θ2 − 1) + ²[r(1 + θ) + 2θ]

         and an eﬀect on the current account of,

                                 (1 − n)[²(1 − θ) + θ2 − 1]
                        b̂ =                                  ĝ.
                                ²[r(1 + θ) + 2θ + r(θ 2 − 1)]

         What is the likely eﬀect on b̂?
9.2. PRICING TO MARKET                                                305

      (b) Consider a temporary home government spending shock in which
          Gs = G0 = 0 for s ≥ t + 1, and Gt > 0. Show that the eﬀect on
          the depreciation and current account are,

                                          (1 + θ)r
                        Ŝt =                                 ĝt ,
                                ²[r(1 + θ) + 2θ + r(θ 2 − 1)]

                                    −²(1 − n)2θ(1 + r)
                        b̂ =                                 ĝt .
                               r²[r(1 + θ) + 2θ + r(θ2 − 1)]
  3. Consider the pricing-to-market model. Show that a permanent in-
     crease in home government spending leads to a short-run depreciation
     of the home currency and a balance of trade deÞcit for the home coun-
     try.
306CHAPTER 9. THE NEW INTERNATIONAL MACROECONOMICS
Chapter 10

Target-Zone Models

This chapter covers a class of exchange rate models where the central
bank of a small open economy is, to varying degrees, committed to
keeping the nominal exchange rate within speciÞed limits commonly
referred to as the target zone. The target-zone framework is sometimes
viewed in a diﬀerent light from a regime of rigidly Þxed exchange rates
in the sense that many target zone commitments allow for a wider range
of exchange rate variation around a central parity than is the case in
explicit pegging arrangements. In principle, a target-zone arrangement
also requires less frequent central bank intervention for their mainte-
nance. Our analysis focuses on the behavior of the exchange rate while
it is inside the zone.
     The target-zone analysis has been used extensively to understand
exchange rate behavior for European countries that participated in the
Exchange Rate Mechanism of the European Monetary System during
the 1980s where ßuctuation margins ranged anywhere from 2.25 per-
cent to 15 percent about a central parity. The adoption of a common
currency makes target-zone analysis less applicable for European issues.
However, there remain many developing and newly industrialized coun-
tries in Latin America and Asia that occasionally Þx their exchange
rates to the dollar for which the analysis is still relevant. Moreover,
there may come a time when the Fed and the European Central Bank
will establish an informal target zone for the dollar—euro exchange rate.
     Target-zone analysis typically works with the monetary model set
in a continuous time stochastic environment. Unless noted otherwise,

                                  307
308                         CHAPTER 10. TARGET-ZONE MODELS

all variables except interest rates are in logarithms. The time derivative
of a function x(t) is denoted with the ‘dot’ notation, x(t)
                                                          ú   = dx(t)/dt.
In order to work with these models, you need some background in
stochastic calculus.


10.1           Fundamentals of Stochastic Calculus
Let x(t) be a continuous-time deterministic process that grows at the
constant rate, η such that, dx(t) = ηdt. Let G(x(t), t) be some possibly
time-dependent continuous and diﬀerentiable function of x(t). From
calculus, you know that the total diﬀerential of G is
                                ∂G          ∂G
                         dG =      dx(t) +     dt.                  (10.1)
                                ∂x          ∂t
    If x(t) is a continuous-time stochastic process, however, the formula
for the total diﬀerential (10.1) doesn’t work and needs to be modiÞed.
In particular, we will be working with a continuous-time stochastic
process x(t) called a diﬀusion process where the growth rate of x(t)
randomly deviates from η,
                          dx(t) = ηdt + σdz(t).                       (10.2)
ηdt is the expected change in x conditional on information available at
t, σdz(t) is an error term and σ is a scale factor. z(t) is called a Wiener
process or Brownian motion and it evolves according to,
                                        √
                               z(t) = u t,                            (10.3)
         iid
where u ∼ N(0, 1). At each instant, z(t) is hit by an independent draw
u from the standard normal distribution. InÞnitesimal changes in z(t)
can be thought of as
                                     √            √      √
     dz(t) = z(t + dt) − z(t) = ut+dt t + dt − ut t = ũ dt,     (10.4)
            √                              √
where ut+dt t + dt ∼ N(0, t + dt) and ut t ∼ N(0, t) deÞne the new
random variable ũ ∼ N(0, 1).1 The diﬀusion process is the continuous-
time analog of the random walk with drift η. Sampling the diﬀusion
  1
                 √         √                     √         √
    Since E[ut+dt t + dt−ut t] = 0, and Var[ut+dt t + dt−ut t] = t+dt−t = dt,
     √           √                                  √             iid
ut+dt t + dt − ut t deÞnes a new random variable, ũ dt, where ũ ∼ N (0, 1).
10.1. FUNDAMENTALS OF STOCHASTIC CALCULUS                              309

x(t) at discrete points in time yields
                                  Z t+1
             x(t + 1) − x(t) =             dx(s)
                                   t
                                    Z t+1            Z t+1
                              = η           ds + σ           dz(s)
                                       t
                                                     |t   {z     }
                                                     z(t+1)−z(t)
                              = η + σ ũ.                            (10.5)

If x(t) follows the diﬀusion process (10.2), it turns out that the total
diﬀerential of G(x(t), t) is

                      ∂G         ∂G      σ2 ∂ 2G
                 dG =    dx(t) +    dt +         dt.                 (10.6)
                      ∂x         ∂t      2 ∂x2
This result is known as Ito’s lemma. The next section gives a non-
rigorous derivation of Ito’s lemma and can be skipped by uninterested
readers.


Ito’s Lemma
Consider a random variable X with Þnite mean and variance, and a
positive number θ > 0. Chebyshev’s inequality says that the probability
that X deviates from its mean by more than θ is bounded by its variance
divided by θ2
                                          Var(X)
                   P{|X − E(X)| ≥ θ} ≤            .              (10.7)
                                             θ2
If z(t) follows the Wiener process (10.3), then E[dz(t)] = 0 and
Var[dz(t)2 ] = E[dz(t)2 ] − [Edz(t)]2 = dt. Apply Chebyshev’s inequality
to dz(t)2 , to get

                                                      (dt)2
                 P {|[dz(t)]2 − E[dz(t)]2 | > θ} ≤          .
                                                       θ2

Since dt is a fraction, as dt → 0, (dt)2 goes to zero even faster than
dt does. Thus the probability that dz(t)2 deviates from its mean dt
becomes negligible over inÞnitesimal increments of time. This suggests
310                             CHAPTER 10. TARGET-ZONE MODELS

that you can treat the deviation of dz(t)2 from its mean dt as an error
term of order O(dt2 ).2 Write it as

                              dz(t)2 = dt + O(dt2 ).

      Taking a second-order Taylor expansion of G(x(t), t) gives
                   ∂G          ∂G
          ∆G =         ∆x(t) +    ∆t
                   ∂x"         ∂t                         #
                   1 ∂2G        2  ∂2G 2    ∂ 2G
                 +         ∆x(t) + 2 ∆t + 2      [∆x(t)∆t]
                   2 ∂x2           ∂t       ∂x∂t
                 + O(∆t2 ),                                 (10.8)

where O(∆t2 ) are the ‘higher-ordered’ terms involving (∆t)k with k >
2. You can ignore those terms when you send ∆t → 0.
    If x(t) evolves according to the diﬀusion process, you√know that
∆x(t)      =    η∆t + σ∆z(t), with ∆z(t)           =     u ∆t, and
(∆x)2 = η2 (∆t)2 + σ 2 (∆z)2 + 2ησ(∆t)(∆z) = σ 2 ∆t + O(∆t3/2 ). Sub-
stitute these expressions into the square-bracketed term in (10.8) to
get,

               ∂G           ∂G        σ2 ∂ 2G
      ∆G =        (∆x(t)) +    (∆t) +       2
                                              (∆t) + O(∆t3/2 ).     (10.9)
               ∂x           ∂t        2 ∂x
As ∆t → 0, (10.9) goes to (10.6), because the O(∆t3/2 ) terms can be
ignored. The result is Ito’s lemma.


10.2          The Continuous—Time Monetary Model
A deterministic setting. To see how the monetary model works in con-
tinuous time, we will start in a deterministic setting. As in chapter 3,
all variables except interest rates are in logarithms. The money market
equilibrium conditions at home and abroad are

                        m(t) − p(t) = φy(t) − αi(t),               (10.10)
                       m∗ (t) − p∗ (t) = φy ∗ (t) − αi∗ (t).       (10.11)
  2
      An O(dt2 ) term divided by dt2 is constant.
10.2. THE CONTINUOUS—TIME MONETARY MODEL                                             311

International asset-market equilibrium is given by uncovered interest
parity
                          i(t) − i∗ (t) = s(t).
                                          ú                   (10.12)
The model is completed by invoking PPP
                                  s(t) + p∗ (t) = p(t).                         (10.13)
Combining (10.10)-(10.13) you get
                                 s(t) = f(t) + αs(t),
                                                ú                               (10.14)
where f (t) ≡ m(t) − m∗ (t) − φ[y(t) − y ∗ (t)] are the monetary-model
‘fundamentals.’ Rewrite (10.14) as the Þrst-order diﬀerential equation
                                          s(t)   −f (t)
                                 ú −
                                 s(t)          =        .                       (10.15)
                                           α      α
The solution to (10.15) is3
                                 1 Z ∞ (t−x)/α
                          s(t) =      e        f(x)dx
                                 α t Z
                                 1 t/α ∞ −x/α
                               =   e      e     f(x)dx.                         (10.16)
                                 α     t


A stochastic setting. The stochastic continuous-time monetary model
is
                         m(t) − p(t)       =   φy(t) − αi(t),                   (10.17)
                        m∗ (t) − p∗ (t)    =   φy ∗ (t) − αi∗ (t),              (10.18)
                          i(t) − i∗ (t)    =   Et [s(t)],
                                                   ú                            (10.19)
                         s(t) + p∗ (t)     =   p(t).                            (10.20)
   3
       To verify that (10.16) is a solution, take its time derivative
                          · Z                    ¸ ·Z ∞                  ¸
                    1 t/α d ∞ −x/α
         s(t)
         ú     =      e             e     f (x)dx +         e−x/α f (x)dx α−2 et/α
                    α      dt t                          t
                                       Z
                      1         1 t/α ∞ −x/α
               = − f (t) + 2 e              e     f (x)dx
                      α        α        t
                      1        1
               = − f (t) + s(t)
                      α        α
Therefore, (10.16) solves (10.15).
312                          CHAPTER 10. TARGET-ZONE MODELS

Combine (10.17)-(10.20) to get
                                        s(t)   −f (t)
                       Et [s(t)]
                           ú     −           =        ,                   (10.21)
                                         α      α
which is a Þrst-order stochastic diﬀerential equation. To solve (10.21),
mimic the steps used to solve the deterministic model to get the continuous-
time version of the present-value formula
                             1 Z ∞ (t−x)/α
                    s(t) =        e        Et [f(x)]dx.                   (10.22)
                             α t
To evaluate the expectations in (10.22) you must specify the stochastic
process governing the fundamentals. For this purpose, we assume that
the fundamentals process follow the diﬀusion process

                         df (t) = ηdt + σdz(t),               (10.23)
                                            √
where η and σ are constants, and dz(t) = u dt is the standard Wiener
process. It follows that
                                       Z x
               f(x) − f (t) =                 df (r)dr
                                       Zt x           Z x
                               =              ηdr +          σdz(r)
                                        t                t
                                                             q
                               = η(x − t) + σu (x − t).                   (10.24)

Take expectations of (10.24) conditional on time t information to get
the prediction rule

                      Et [f(x)] = f (t) + η(x − t),                       (10.25)

and substitute (10.25) into (10.22) to obtain
             1 Z ∞ (t−x)
      s(t) =      e α [f (t) + η(x − t)]dx
             α t                                                         
                                   Z                             Z
               1
                 t/α           ∞                     ∞          
                                                                 
           =    e (f − ηt)       e−x/α dx +ηet/α       xe−x/α dx
               α           | t
                                   {z    }        | t
                                                         {z     }
                                                                 
                                              a                       b
           = αη + f (t),                                                  (10.26)
10.3. INFINITESIMAL MARGINAL INTERVENTION                               313
                                                     R
which follows because the integral in term (a) is t∞ e−x/α dx = αe−t/α
                               R
and the integral in term (b) is t∞ xe−x/α dx = α2 e−t/α ( αt +1). (10.26) is
the no bubbles solution for the exchange rate under a permanent free-
ßoat regime where the fundamentals follow the (η, σ)—diﬀusion process
(10.23) and are expected to do so forever on. This is the continuous-
time analog to the solution obtained in chapter 3 when the fundamen-
tals followed a random walk.


10.3       InÞnitesimal Marginal Intervention
Consider now a small-open economy whose central bank is committed to
keeping the nominal exchange rate s within the target zone, s < s < s̄.
The credibility of the Þx is not in question. Krugman [88] assumes
that the monetary authorities intervene whenever the exchange rate
touches one of the bands in a way to prevent the exchange rate from
ever moving out of the bands. In order to be eﬀective, the authorities
must engage in unsterilized intervention, by adjusting the fundamentals
f (t). As long as the exchange rate lies within the target zone, the au-
thorities do nothing and allow the fundamentals to follow the diﬀusion
process df (t) = ηdt + σdz(t). But at those instants that the exchange
rate touches one of the bands, the authorities intervene to an extent
necessary to prevent the exchange rate from moving out of the band.
    During times of intervention, the fundamentals do not obey the dif-
fusion process but are following some other process. Since the forecast-
ing rule (10.25) was derived by assuming that the fundamentals always
follows the diﬀusion it cannot be used here. To solve the model using
the same technique, you need to modify the forecasting rule to account
for the fact that the process governing the fundamentals switches from
the diﬀusion to the alternative process during intervention periods.
    Instead, we will obtain the solution by the method of undetermined
coeﬃcients. Begin by conjecturing a solution in which the exchange
rate is a time-invariant function G(·) of the current fundamentals

                              s(t) = G[f (t)].                      (10.27)

Now to Þgure out what the function G looks like, you know by Ito’s
314                             CHAPTER 10. TARGET-ZONE MODELS

lemma
             ds(t) = dG[f(t)]
                                           σ 2 00
                        = G0 [f (t)]df(t) +   G [f (t)]dt
                                            2
                                                     σ2
                    = G0 [f (t)][ηdt + σdz(t)] + G00 [f(t)]dt.       (10.28)
                                                     2
Taking expectations conditioned on time-t information you get
                                2
Et [ds(t)] = G0 [f (t)]ηdt + σ2 G00 [f (t)]dt. Dividing this result through
by dt you get
                                               σ2
                     Et [s(t)]
                         ú     = ηG0 [f(t)] + G00 [f(t)].            (10.29)
                                               2
Now substitute (10.27) and (10.29) into the monetary model (10.21)
and re-arrange to get the second-order diﬀerential equation in G
                        2η 0             2               2
        G00 [f (t)] +     2
                            G [f (t)] −    2
                                             G[f(t)] = − 2 f (t).   (10.30)
                        σ               ασ              ασ

Digression on second-order diﬀerential equations. Consider the second-
order diﬀerential equation,
                               y 00 + a1 y 0 + a2 y = bt            (10.31)
A trial solution to the homogeneous part (y 00 + a1 y 0 + a2 y = 0) is
y = Aeλt , which implies y 0 = λAeλt and y 00 = λ2 Aeλt , and
Aeλt (λ2 + √
           a1 λ + a2 ) = 0, for which
                                    √ there are obviously two solutions,
      −a +  1 a2 −4a    2            −a −   a2 −4a
λ1 =            2
                    1
                          and λ2 = 1 2 1 2 . If you let y1 = Aeλ1 t and
y2 = Beλ2 t , then clearly, y ∗ = y1 + y2 also is a solution because
(y ∗ )00 + a1 (y ∗ )0 + a2 (y ∗ ) = 0.
     Next, you need to Þnd the particular integral, yp , which can be
obtained by undetermined coeﬃcients. Let yp = β0 + β1 t. Then
yp00 = 0, yp0 = β1 and yp00 + a1 yp0 + a2 yp = a1 β1 + a2 β0 + a2 β1 t = bt.
It follows that β1 = ab2 , and β0 = − aa12b .
                                         2
     Since each of these pieces are solutions to (10.31), the sum of the
solutions is also be a solution. Thus the general solution is,
                                                     a1 b  b
                        y(t) = Aeλ1 t + Beλ2 t −       2
                                                          + t.      (10.32)
                                                     a2    a2
10.3. INFINITESIMAL MARGINAL INTERVENTION                             315


Solution under Krugman intervention. To solve (10.30), replace y(t) in
(10.32) with G(f), set a1 = σ2η2 , a2 = ασ
                                        −2
                                           2 , and b = a2 . The result is



               G[f (t)] = ηα + f (t) + Aeλ1 f (t) + Beλ2 f (t) ,   (10.33)

where
                                     s
                           −η      η2     2
                    λ1   =   2
                               +     4
                                       +      > 0,                 (10.34)
                           σ       σ     ασ 2
                                 s
                           −η      η2     2
                    λ2   =     −       +      < 0.                 (10.35)
                           σ2      σ 4 ασ 2
To solve for the constants A and B, you need two additional pieces of in-
formation. These are provided by the intervention rules.4 From (10.33),
you can see that the function mapping f (t) into s(t) is one-to-one. This
means that there is a lower and upper band on the fundamentals, [f, f¯]
that corresponds to the lower and upper bands for the exchange rate
[s, s̄]. When s(t) hits the upper band s̄, the authorities intervene to
prevent s(t) from moving out of the band. Only inÞnitesimally small
interventions are required. During instants of intervention, ds = 0 from
which it follows that
                                          ¯           ¯
                  G0 (f¯) = 1 + λ1 Aeλ1 f + λ2 Beλ2 f = 0.         (10.36)

Similarly, at the instant that s touches the lower band s, ds = 0 and

                  G0 (f ) = 1 + λ1 Aeλ1 f + λ2 Beλ2 f = 0.         (10.37)

(10.36) and (10.37) are 2 equations in the 2 unknowns A and B, which
you can solve to get
                                      ¯
                              eλ2 f − eλ2 f
                A =          ¯                      ¯ < 0,         (10.38)
                    λ1 [e(λ1 f +λ2 f ) − e(λ1 f +λ2 f ) ]
                                           ¯
                              eλ1 f − eλ1 f
                B =          ¯                      ¯ > 0.         (10.39)
                    λ2 [e(λ1 f +λ2 f ) − e(λ1 f +λ2 f ) ]
  4
   In the case of a pure ßoat and in the absence of bubbles, you know that
A = B = 0.
316                          CHAPTER 10. TARGET-ZONE MODELS

The signs of A and B follow from noting that λ1 is positive and λ2 is
                      ¯             ¯
negative so that eλ1 (f −f ) > eλ2 (f −f ) . It follows that the square bracketed
term in the denominator is positive.
    The solution becomes simpler if you make two symmetry assump-
tions. First, assume that there is no drift in the fundamentals η = 0.
Setting the drift to zero implies λ1 = −λ2 = λ > 0. Second, center
the admissible region for the fundamentals around zero with f¯ = −f
so that B = −A > 0. The solution becomes

                    G[f (t)] = f (t) + B[e−λf (t) − eλf (t) ],          (10.40)

with
                                    s
                                  2
                           λ =        ,
                                 ασ 2
                                    ¯       ¯
                                 eλf − e−λf
                           B =                   .
                               λ[e2λf¯ − e−2λf¯]
    Figure 10.1 shows the relation between the exchange rate and the
fundamentals under Krugman-style intervention. The free ßoat solution
s(t) = f (t) serves as a reference point and is given by the dotted 45-
degree line. First, notice that G[f (t)] has the shape of an ‘S.’ The
S-curve lies below the s(t) = f(t) line for positive values of f (t) and
vice-versa for negative values of f(t). This means that under the target-
zone arrangement, the exchange rate varies by a smaller amount in
response to a given change in f (t) within [f , f¯] than it would under a
free ßoat.
    Second, note that by (10.21), we know that E(s)    ú < 0 when f > 0,
and vice-versa. This means that market participants expect the ex-
change rate to decline when it lies above its central parity and they
expect the exchange rate to rise when it lies below the central par-
ity. The exchange rate displays mean reversion. This is potentially
the explanation for why exchange rates are less volatile under a man-
aged ßoat than they are under a free ßoat. Since market participants
expect the authorities to intervene when the exchange rate heads to-
ward the bands, the expectation of the future intervention dampens
current exchange rate movements. This dampening result is called the
Honeymoon eﬀect.
10.3. INFINITESIMAL MARGINAL INTERVENTION                                                                         317

             0.03


                                                                       s
             0.02




             0.01




                    0                                                                                  f
                        -0.03    -0.02   -0.02   -0.01   0.00   0.00       0.01   0.01   0.02   0.02       0.03



            -0.01
                                   G(f)

            -0.02


                                s=f
            -0.03




Figure 10.1: Relation between exchange rate and fundamentals under
pure ßoat and Krugman interventions

Estimating and Testing the Krugman Model
DeJong [36] estimates the Krugman model by maximum likelihood and
by simulated method of moments (SMM) using weekly data from Jan-
uary 1987 to September 1990. He ends his sample in 1990 so that
exchange rates aﬀected by news or expectations about German reuni-
Þcation, which culminated in the European Monetary System crisis of
September 1992, are not included.
   We will follow De Jong’s SMM estimation strategy to estimate the
basic Krugman model

                                ∆ft = η + σut ,
                                 Gt = αη + ft + Aeλ1 ft + Beλ2 ft ,
                                                         iid
where f = −f¯, the time unit is one day (∆t = 1), and ut ∼ N (0, 1). λ1
and λ2 are given in (10.34)-(10.35), and A and B are given in (10.38)
318                            CHAPTER 10. TARGET-ZONE MODELS

and (10.39). The observations are daily DM prices of the Belgian franc,
French franc, and Dutch guilder from 2/01/87 to 10/31/90. Log ex-
change rates are normalized by their central parities and multiplied by
100. The parameters to be estimated are (η, α, σ, f¯). SMM is covered
in Chapter 2.3.
    Denote the simulated observations with a ‘tilde.’ You need to simu-
lated sequences of the fundamentals that are guaranteed to stay within
the bands [f, f¯]. You can do this by letting fˆj+1 = f˜j + η + σuj and
setting                        
                                 ¯    if fˆj+1 ≥ f¯
                                f
                               
                       f˜j+1 =  fˆj+1 if f ≤ fˆj+1 ≤ f¯         (10.41)
                               
                                f         ˆ
                                       if fj+1 ≤ f
for j = 1, . . . , M . The simulated exchange rates are given by
                                                      ˜         ˜
                  s̃j (η, α, σ, f¯) = f˜j + αη + Aeλ1 fj + Beλ2 fj ,   (10.42)
the simulated moments by
                                              1 PM
                                                                 
                                              M P j=3
                                                       ∆s̃j
                                             1    M             
                                             M Pj=3
                                                       ∆s̃2j     
                                 ¯ =
                 HM [s̃(η, α, σ, f)]         1    M
                                                       ∆s̃ 3
                                                                 
                                                                 .
                                             M    j=3     j     
                                           1 PM                 
                                           M Pj=3
                                                    ∆s̃j ∆s̃ j−1 
                                            1   M
                                            M   j=3 ∆s̃j ∆s̃j−2

The sample moments are based on the Þrst three moments and the Þrst
two autocovariances
                                 1 PT
                                                    
                                  T P t=3
                                           ∆st
                                 1    T            
                             
                                T Pt=3
                                           ∆s2t     
                                                    
                             
                    Ht (s) =     1    T
                                           ∆s 3     
                                 T     t=3    t     
                              1 P  T               
                              T t=3    ∆s t ∆s t−1 
                               1 P  T
                               T    t=3 ∆st ∆st−2

with M = 20T , where T = 978.5
    The results are given in Table 10.1. As you can see, the estimates
are reasonable in magnitude and have the predicted signs, but they are
not very precise. The χ2 test of the (one) overidentifying restriction is
rejected at very small signiÞcance levels indicating that the data are
inconsistent with the model.
  5
      No adjustments were made for weekends or holidays.
10.4. DISCRETE INTERVENTION                                           319


Table 10.1: SMM Estimates of Krugman Target-Zone Model (units in
percent) with deutschemark as base currency.

                 η       σ        α       f¯      χ21
     Currency (s.e.)   (s.e.)   (s.e.)  (s.e.) (p-value)
      Belgian  0.697   0.865   1.737    2.641   11.672
       franc  (69.01) (83.98) (327.1) (334.3) (0.001)
      French   0.007   0.117   6.045     2.44   12.395
       franc  (0.318) (1.759) (1590) (67.88) (0.000)
      Dutch    2.484   2.240   4.152    5.393    11.35
      guilder (1.317) (0.374) (146.19) (5.235) (0.001)



10.4       Discrete Intervention
Flood and Garber [56] study a target-zone model where the authorities
intervene by placing the fundamentals back in the middle of the band
after one of the bands are hit. If the band width is β = f¯ − f and
either f¯ or f is hit, the central bank intervenes in the foreign exchange
market by resetting f = f¯ − β/2. Because the intervention produces
a discrete jump in f , the central bank loses foreign exchange reserves
when f¯ is hit and gains reserves when f is hit.
                         ¯
    Letting Ã ≡ Aeλ1 f and B̃ ≡ Beλ2 f , rewrite the solution (10.33)
explicitly as a function of the bands f and f¯
                                              ¯
               ¯ f ) = f + αη + Ãeλ1 (f −f ) + B̃eλ2 (f −f ) .
          G(f |f,                                                 (10.43)

Impose the symmetry conditions, η = 0 and f = f¯. It follows that
                    q
λ1 = −λ2 = λ = 2/(ασ 2 ) > 0, and B̃ = −Ã > 0. (10.43) can be ⇐(215)
written as                      h                       i
                                                  ¯
            G(f |f, f¯) = f + B̃ e−λ(f −f ) − e−λ(f −f ) . (10.44)
Under the symmetry assumptions you need only one extra side-condition
to determine B̃. We get it by looking at the exchange rate at the instant
t0 that f(t) hits the upper band f¯

                   s(t0 ) = G[f¯|f , f]
                                     ¯ = f¯ + B̃[e−λβ − 1].       (10.45)
320                         CHAPTER 10. TARGET-ZONE MODELS

Market participants know that at the next instant the authorities will
reset f = 0. It follows that
                Et0 s(t0 + dt) = s(t0 + dt) = G[0|f, f¯] = 0.          (10.46)

To maintain international capital market equilibrium, uncovered in-
terest parity must hold at t0 .6 The expected depreciation at t0 must
be Þnite which means there can be no jumps in the time-path of the
exchange rate. It follows that

                           lim s(t0 + ∆t) = s(t0 ),
                          ∆t→0

which implies s(t0 ) = s(t0 + dt) = 0. Adopt a normalization by setting
s(t0 ) = 0 in (10.45). It follows that
                                        −β
                              B̃ =                 .
                                     2[e−λβ − 1]
    But if s(t0 + dt) = G(0|f, f¯) = 0 and s(t0 ) = G(f¯|f, f¯) = 0, then
there are at least two values of f that give the same value of s so the G—
function is not one-to-one. In fact, the G—function attains its extrema
before f reaches f or f¯ and behaves like a parabola near the bands as
shown in Figure 10.2.
    As f (t) approaches f¯, it becomes increasingly likely that the central
bank will reset the exchange rate to its central parity. This informa-
tion is incorporated into market participant’s expectations. When f is
suﬃciently close to f¯ this expectational eﬀect dominates and further
movements of f towards f¯ results in a decline in the exchange rate. For
given variation in the fundamentals within [f , f¯], the exchange rate un-
der Flood-Garber intervention exhibits even less volatility than it does
under Krugman intervention.


10.5       Eventual Collapse
The target zone can be maintained indeÞnitely under Krugman-style
interventions because reserve loss or gain is inÞnitesimal. Any Þxed
  6
   If it does not, there will be an unexploited and unbounded expected proÞt
opportunity that is inconsistent with international capital market equilibrium.
10.5. EVENTUAL COLLAPSE                                                                                              321

                0.03


                                                                       s
                0.02
                                                                                          s=f

                0.01




                        0
                        -0.025   -0.02   -0.015   -0.01   -0.005   0       0.005   0.01   0.015   0.02       0.025


                                                                                                         f
                -0.01
                                 G(f)

                -0.02




                -0.03




Figure 10.2: Exchange rate and fundamentals under Flood—Garber dis-
crete interventions


exchange rate regime operating under a discrete intervention rule, on
the other hand, must eventually collapse. The central bank begins the
regime with a Þnite amount of reserves which is eventually exhausted.
This is a variant of the gambler’s ruin problem.7
    The problem that confronts the central bank goes like this. Suppose
the authorities begin with foreign exchange reserves of R dollars. It
loses one dollar each time f¯ is hit and gains one dollar each time f is
hit. After the intervention, f is placed back in the middle of the [f, f¯]
band, where it evolves according to the driftless diﬀusion df (t) = σdz(t)
until another intervention is required.
    Let L be the event that central bank eventually runs out of reserves,
G be the event that it gains $1 on a particular intervention and Gc be

  7
      See Degroot [37].
322                            CHAPTER 10. TARGET-ZONE MODELS

the event that it loses a dollar on a particular intervention.8 In the
Þrst round, the probability that f hits f¯ is 12 . That is, P(Gc ) = 12 . By
implication, P(G) = 1 − P(Gc ) = 12 . It follows that before the Þrst
round starts, the probability that reserves eventually get driven to zero
is
                              1            1
                    Pr(L) = Pr(L|G) + Pr(L|Gc ).                    (10.47)
                              2            2
(10.47) true before the Þrst round and is true for any round as long as
the authorities still have at least one dollar in reserves.
   Let pj be the conditional probability that reserves eventually become
0 given that the current level of reserves is j-dollars. For any j ≥ 1,
(10.47) can be expressed as the diﬀerence equation
                                  1        1
                             pj = pj+1 + pj−1 ,               (10.48)
                                  2        2
with p0 = 1.9 Backward substitution gives p2 = 2p1 − 1, p3 = 3p1 − 2,
pk = kp1 − (k − 1), . . ., or equivalently, for k ≥ 2,
                               pk = 1 − k(1 − p1 ).                          (10.49)
Since pk is a probability, it cannot exceed 1. Upon rearrangement you
get
                            pk 1
                 p1 = 1 +      − → 1, as k → ∞.                  (10.50)
                             k   k
but if p1 = 1, the recursion in (10.49) says that for any j ≥ 1, pj = 1.
Translation? It is a sure thing that any Þnite amount of reserves will
eventually be exhausted.


10.6        Imperfect Target-Zone Credibility
The discrete intervention rule is more realistic than the inÞnitesimal
marginal intervention rule. But if reserves run out with probability 1,
   8
    G is the event that f hits f , and Gc is the event that f hits f¯.
   9
    Clearly, p0 = 1 since if j = 0, reserves have been exhausted. If j = 1, there
is a probability of 12 that reserves are exhausted on the next intervention and a
probability of 12 that the central bank gains a dollar and survives to play again
at which time there will be a probability of p2 that reserves will eventually be
exhausted. That is, for j = 1, p1 = 12 p0 + 12 p2 . Continuing on in this way, you get
(10.48).
10.6. IMPERFECT TARGET-ZONE CREDIBILITY                              323

there will come a time in any target-zone arrangement when it is no
longer worthwhile for the authorities to continue to defend the zone.
This means that the target-zone bands cannot always be completely
credible. In fact, during the twelve years or so that the Exchange Rate
Mechanism of the European Monetary System operated reasonably well
(1979—1992), there were eleven realignments of the bands. It would be
strange to think that a zone would be completely credible given that
there is already a history of realignments.
    We now modify the target-zone analysis to allow for imperfect cred-
ibility along the lines of Bertola and Caballero [8]. Let the bands for the
fundamentals be [f , f]¯ and let β = f¯ − f be the width of the band. If
the fundamentals reach the lower band, there is a probability p that the
authorities re-align and a probability 1 − p that the authorities defend
the zone.
    If re-alignment occurs, what used to be the lower band of the old
zone f , becomes the upper band of the new zone [f −β, f ]. The realign-
ment is a discrete intervention that sets f = f − β/2 at the midpoint
of the new band. If a defense is mounted, the fundamentals are re-
turned to the midpoint, f = f + β/2. An analogous set of possibilities
describe the intervention choices if the fundamentals reach the upper
band. Figure 10.3 illustrates the intervention possibilities.               ⇐(217)




                  Realign                  Defend




           f- b       f - b/2       f        f + b/2     f +b




Figure 10.3: Bertola-Caballero realignment and defense possibilities.

   We begin with the symmetric exchange rate solution (10.44) with
η = 0 and an initial symmetric target zone about 0 where f = −f¯,
         324                            CHAPTER 10. TARGET-ZONE MODELS
                              q
(218)⇒   λ1 = −λ2 = λ =         2/(ασ 2 ) > 0, and B̃ = −Ã > 0.
           To determine B̃, suppose that f hits the upper band f¯ at time t0 .
         Then

                              s(t0 ) = G(f¯|f , f¯) = f¯ + B̃(e−λβ − 1).     (10.51)

         At the next instant t0 + dt, the authorities either realign or defend

                          (
                              G(f¯ + β/2|f¯, f¯ + β) = f¯ + β2 w.p. p
           s(t0 + dt) =                                                      (10.52)
                              G(f¯ − β/2|f, f¯) = f¯ − β2      w.p. 1 − p.


         To maintain uncovered interest parity at the point of intervention, mar-
         ket participants must not expect jumps in the exchange rate. It follows
         that, lim∆t→0 Et0 s(t0 +∆t) = st0 . Using (10.52) to evaluate Et0 s(t0 +dt)
         and equating to s(t0 ) gives

                      "           #           "        #
                           β                β
                    p f¯ +   + (1 − p) f¯ −   = f¯ + B̃(e−λβ − 1),
                           2                2


         and solving for B̃ gives


                                                (2p − 1) β2
                                         B̃ =               ).               (10.53)
                                                (e−λβ − 1


         This solution is a striking contrast to the solution under Krugman
         interventions. B̃ is negative if the target zone lacks suﬃcient credibility
         (p > 12 ). This means that the exchange rate solution is an inverted ‘S-
         curve’. The exchange rate under the discrete intervention rule combined
         with low defense credibility is even more volatile than what it would be
         under a free ßoat.
10.6. IMPERFECT TARGET-ZONE CREDIBILITY                           325

   Target-zone Summary

   1. The theory covered in this chapter was based on the monetary
      model where today’s exchange rate depends in part on market
      participant’s expectations of the future exchange rate. Under a
      target zone, these expectations depend on the position of the ex-
      change rate within the zone. As the exchange rate moves farther
      away from the central parity, intervention that manipulates the
      exchange rate becomes increasingly likely and the expectation
      of this intervention feeds back into the current value of s(t).
   2. When the fundamentals follows a diﬀusion process for
      f < f < f¯ and the target zone is perfectly credible, the exchange
      rate exhibits mean reversion within the zone. The exchange rate
      is less responsive to a given change in the fundamentals under a
      target zone than under a free ßoat. The target zone can be said
      to have a volatility reducing eﬀect on the exchange rate.
   3. Any target zone–and therefore any Þxed exchange rate
      regime–operating under a discrete intervention rule will even-
      tually break down because the central bank will ultimately ex-
      haust its foreign exchange reserves. But if the target zone must
      ultimately collapse, it cannot always be fully credible.
   4. When the target zone lacks suﬃcient credibility, the zone itself
      can be a source of exchange rate volatility in the sense that the
      exchange rate is even more sensitive to a given change in the
      fundamentals than it would be under a free ßoat.
326   CHAPTER 10. TARGET-ZONE MODELS
Chapter 11

Balance of Payments Crises

     In chapter 10 we argued that there is a presumption that any Þxed
exchange rate regime must eventually collapse–a presumption that the
data supports. Britain and the U.S. were forced oﬀ of the gold stan-
dard during WWI and the Great Depression. More recent collapses
occurred in the face of crushing speculative attacks on central bank re-
serves. Some well-known foreign exchange crises include the breakdown
of the 1946—1971 IMF system of Þxed but adjustable exchange rates,
Mexico and Argentina during the 1970s and early 1980s, the European
Monetary System in 1992, Mexico in 1994, and the Asian Crisis of 1997.
Evidently, no Þxed exchange rate regime has ever truly been Þxed.
    This chapter covers models of the causes and the timing of currency
crises. We begin with what Flood and Marion [57] call Þrst generation
models. This class of models, developed to explain balance of pay-
ments crises experienced by developing countries during the 1970s and
1980s. These crises were often preceded by unsustainably large gov-
ernment Þscal deÞcits, Þnanced by excessive domestic credit creation
that eventually exhausted the central bank’s foreign exchange reserves.
Consequently, Þrst-generation models emphasize macroeconomic mis-
management as the primary cause of the crisis. They suggest that the
size of a country’s Þnancial liabilities (the government’s Þscal deÞcit,
short term debt and the current account deÞcit) relative to its short run
ability to pay (foreign exchange reserves) and/or a sustained real appre-
ciation from domestic price level inßation should signal an increasing
likelihood of a crisis.

                                  327
328            CHAPTER 11. BALANCE OF PAYMENTS CRISES

    In more recent experience such as the European Monetary System
crisis of 1992 or the Asian crisis of 1997, few of the aﬀected coun-
tries appeared to be victims of macroeconomic mismanagement. These
crises seemed to occur independently of the macroeconomic fundamen-
tals and do not Þt into the mold of the Þrst generation models. Second-
generation models were developed to understand these phenomenon. In
these models, the government explicitly balances the costs of defending
the exchange rate against the beneÞts of realignment. The govern-
ment’s decision rule gives rise to multiple equilibria in which the costs
of exchange rate defense depend on the public’s expectations. A shift
in the public’s expectations can alter the government’s cost-beneÞt cal-
culation resulting in a shift from an equilibrium with a low-probability
of devaluation to one with a high-probability of devaluation. Because
an ensuing crisis is made more likely by changing public opinion, these
models are also referred to as models of self-fulÞlling crises.


11.1      A First-Generation Model
In Þrst-generation models, the government exogeneously pursues Þscal
and monetary policies that are inconsistent with the long-run main-
tenance of a Þxed exchange rate. One way to motivate government
behavior of this sort is to argue that the government faces short-term
domestic Þnancing constraints that it feels are more important to sat-
isfy than long-run maintenance of external balance. While this is not
a completely satisfactory way to model the actions of the authorities,
it allows us to focus on the behavior of speculators and their role in
generating a crisis.
    Speculators observe the decline of the central bank’s international
reserves and time a speculative attack in which they acquire the re-
maining reserves in an instant. Faced with the loss of all of its foreign
exchange reserves, the central bank is forced to abandon the peg and
to move to a free ßoat. The speculative attack on the central bank at
during the Þnal moments of the peg is called a balance of payments
or a foreign exchange crisis. The original contribution is due to Krug-
man [89]. We’ll study the linear version of that model developed by
Flood and Garber [55].
11.1. A FIRST-GENERATION MODEL                                      329

Flood—Garber Deterministic Crises
The model is based on the deterministic, continuous-time monetary
model of a small open economy of Chapter 10.2. All variables except
for the interest rate are expressed as logarithms–m(t) is the domestic
money supply, p(t) the price level, i(t) the nominal interest rate, d(t)
domestic credit, and r(t) the home-currency value of foreign exchange
reserves. From the log-linearization of the central bank’s balance sheet
identity, the log money supply can be decomposed as
                      m(t) = γd(t) + (1 − γ)r(t).                 (11.1)
   Domestic income is assumed to be Þxed. We normalize units such
that y(t) = y = 0. The money market equilibrium condition is
                        m(t) − p(t) = −αi(t).                     (11.2)
The model is completed by invoking purchasing-power parity and un-
covered interest parity
                       s(t) = p(t),                               (11.3)
                       i(t) = Et [s(t)]
                                  ú     = s(t),
                                          ú                       (11.4)
where we have set the exogenous log foreign price level and the exoge-
nous foreign interest rate both to zero p∗ = i∗ = 0. Combine (11.2)—
(11.4) to obtain the diﬀerential equation,                             ⇐(219)
                         m(t) − s(t) = −αs(t)
                                         ú                        (11.5)
    The authorities establish a Þxed exchange rate regime at t = 0 by
pegging the exchange rate at its t = 0 equilibrium value, s̄ = m(0).
During the time that the Þx is in eﬀect, s(t)
                                           ú     = 0. By (11.5), the
authorities must maintain a Þxed money supply at m(t) = s̄ to defend
the exchange rate.
    Suppose that the domestic credit component grows at the rate
 ú = µ. The government may do this because it lacks an adequate
d(t)
tax base and money creation is the only way to pay for government
spending. But keeping the money supply Þxed in the face of expanding
domestic credit means reserves must decline at the rate
                               −γ ú       −µγ
                       r(t)
                       ú =         d(t) =      .                (11.6)
                              1−γ         1−γ
330                 CHAPTER 11. BALANCE OF PAYMENTS CRISES

Clearly this policy is inconsistent with the long-run maintenance of the
Þxed exchange rate since the government will eventually run out of
foreign exchange reserves.

Non-attack exhaustion of reserves. If reserves are permitted to decline
at the rate in (11.6) without interruption, it is straightforward to de-
termine the time tN at which they will be exhausted. Reserves at any
time 0 < t < tN are the initial level of reserves minus reserves lost
between 0 and t
                                           Z t
                       r(t) = r(0) +             r(u)du
                                                 ú
                                            0
                                           Z t
                              = r(0) −           (γµ/(1 − γ))du
                                            0
                              = r(0) − γµ/(1 − γ)t.
Since reserves are exhausted at tN , set r(tN ) = 0 = r(0)−γµ/(1−γ)tN .
Solving for tN gives
                                 r(0)(1 − γ)
                           tN =                .                 (11.7)
                                       γµ

Time of attack. The time-path for reserves described above is not your
typical balance of payments crises. Central banks usually do not have
the luxury of watching their reserves smoothly decline to zero. Instead,
Þxed exchange rates usually end with a balance-of-payments crisis in
which speculators mount an attack and instantaneously acquire the
remaining reserves of the central bank.
    Economic agents know that the exchange rate must ßoat at tN .
They anticipate that the exchange rate will make a discrete jump at the
time of abandonment. To avoid realizing losses on domestic currency
assets, agents attempt to convert the soon-to-be over-valued domestic
currency into foreign currency at tA < tN . This sudden rush into long
positions in the foreign currency will cause an immediate exhaustion of
available reserves. Call tA the time of attack.
    To solve for tA , let s̃(t) be the shadow-value of the exchange rate.
It is the hypothetical value of the exchange rate given that the central
bank has run out of reserves.1 Market participants will attack if s̄ <
  1
      The home currency is ‘overvalued’ if s̄ < s̃(t). A proÞtable speculative strategy
11.1. A FIRST-GENERATION MODEL                                                   331


                                Money
                                                     Money




                     d(0)          Domestic credit

                     r(0)

                                        Reserves




                                                               time
                            0                  tA    tN



Figure 11.1: Time-path of monetary aggregates under the Þx and its
collapse.


s̃(t). They will not attack if s̄ > s̃. But if s̄ < s̃(t), the attack will
result in a discrete jump in the exchange rate of s̃(t) − s̄. The jump
presents an opportunity to proÞts of unlimited size which is a violation
of uncovered interest parity. We rule out such proÞts in equilibrium.
     Thus, the time of attack can be determined by Þnding t = tA such
that s̃(tA ) = s̄. First obtain for s̃(t) by the method of undetermined
coeﬃcients. Since the ‘fundamentals’ are comprised only of m(t) con-
jecture the solution s̃(t) = a0 + a1 m(t). Taking time-derivatives of the
guess solution yields s(t)
                        ú = a1 m(t)
                                 ú     = a1 γµ, where the second equality
follows from m(t)
                ú         ú
                     = γ d(t) = γµ. Substitute the guess solution into
the basic diﬀerential equation (11.5), and equate coeﬃcients on the
constant and m(t), to get a0 = αγµ and a1 = 1. You now have


                                 s̃(t) = αγµ + m(t).                          (11.8)

would be to borrow the home currency at an interest rate i(t), use the borrowed
funds to buy the foreign currency from the central bank at s̄. After the Þx collapses,
sell the foreign currency at s̃(t), repay the loans, and pocket a nice proÞt.
332             CHAPTER 11. BALANCE OF PAYMENTS CRISES

When reserves are exhausted, r(t) = 0, and the money supply becomes
                                     Z t
          m(t) = γd(t) = γ[d(0) +           ú
                                           d(u)du] = γ[d(0) + µt].
                                      0

Substitute m(t) into (11.8) to get

                       s̃(t) = γ[d(0) + µt] + αγµ.                    (11.9)

Setting s̃(tA ) = s̄ = m(0) = γd(0) + (1 − γ)r(0) and solving for the
time of attack gives

                           (1 − γ)r(0)
                    tA =               − α = tN − α.                 (11.10)
                               γµ

The level of reserves at the point of attack is
                                    µγ      µαγ
                 r(tA ) = r(0) −       tA =     > 0.                 (11.11)
                                   1−γ      1−γ

    Figure 11.1 illustrates the time-path of money and its components
when there is an attack. One of the key features of the model is that
episodes of large asset market volatility, namely the attack, does not
coincide with big news or corresponding large events. The attack comes
suddenly but is the rational response of speculators to the accumulated
eﬀects of domestic credit creation that is inconsistent with the Þxed
exchange rate in the long run.
    One dissatisfying feature of the deterministic model is that the at-
tack is perfectly predictable. Another feature is that there is no transfer
of wealth. In actual crises, the attacks are largely unpredictable and
typically result in sizable transfers of wealth from the central bank (with
costs ultimately borne by taxpayers) to speculators.


A stochastic Þrst-generation model.
    Let’s now extend the Flood and Garber model to a stochastic en-
vironment. We will not be able to solve for the date of attack but we
can model the conditional probability of an attack. In discrete time,
11.1. A FIRST-GENERATION MODEL                                                 333

let the economic environment be given by

                                mt    =   γdt + (1 − γ)rt ,                (11.12)
                            mt − pt   =   −αit ,                           (11.13)
                                 pt   =   st ,                             (11.14)
                                 it   =   Et (∆st+1 ).                     (11.15)

Let domestic credit be governed by the random walk
                                       1
                              dt = (µ − ) + dt−1 + vt ,                    (11.16)
                                       λ
where vt is drawn from the exponential distribution.2 . Also, assume
that the domestic credit process has an upward drift µ > 1/λ. At
time t, agents attack the central bank if s̃t ≥ s̄, where s̃ is the shadow
exchange rate.
   Let the publicly available information set be It and let pt be the
probability of an attack at t + 1 conditional on It . Then,

             pt = Pr[s̃t+1 > s̄|It ]
                = Pr[αγµ + mt+1 − s̄ > 0|It ]
                = Pr[αγµ + γdt+1 − s̄ > 0|It ]
                      ·          µ      ·      ¸       ¶            ¸
                                             1
                = Pr αγµ + γ dt + µ −            + vt+1 − s̄ > 0|It
                      "
                                             λ           #
                               1                       1
                = Pr vt+1 > s̄ − (1 + α)µ − dt + |It
                               γ                       λ
                = Pr(vt+1 > θt |It )
                  Z ∞                (
                          −λu          e−λθt θt ≥ 0
                =       λe du =                                       (11.17)
                   θt                  1     θt < 0

where θt ≡ (1/γ)s̄ − (1 − α)µ − dt + (1/λ). The rational exchange rate
forecast error is
                     Et st+1 − s̄ = pt [Et (s̃t+1 ) − s̄],     (11.18)
and is systematic if pt > 0.
     2
         A random variable X has the exponential distribution if for x ≥ 0, f (x) =
     −λx
λe        . The mean of the distribution is E(X) = 1/λ.
         334              CHAPTER 11. BALANCE OF PAYMENTS CRISES

            Thus there will be a peso problem as long as the Þx is in eﬀect. By
         (11.17), we know how pt behaves. Now let’s characterize Et (s̃t+1 ) and
         the forecast errors. First note that

                        Et (s̃t+1 ) = αγµ + γEt (dt+1 )
                                            ·                ¸
                                                  1
                                    = αγµEt µ − + dt + vt+1
                                                  λ
                                                 1
                                    = αγµ + µ − + dt + Et (vt+1 ).               (11.19)
                                                 λ

         Et (vt+1 ) is computed conditional on a collapse next period which will
         occur if vt+1 > θt . To Þnd the probability density function of v con-
         ditional on a collapse, normalize the density of v such that the proba-
         bility Rthat vt+1 > θt is 1 by solving for the normalizing constant φ in
(222)⇒   1 = φ θ∞  t
                     λe−λu du. This yields φ = eλθt . It follows that the probability
         density conditional on a collapse next period is
                                                   (
                                                       λeλ(θt −u) u ≥ θt ≥ 0
                         f(u|collapse) =                                     ,
                                                       λe−λu      θt < 0

         and
                                ( R∞
                                 Rθ∞
                                          uλeλ(θt −u) du = θt + λ1 θt ≥ 0
                 Et (vt+1 ) =      t
                                                                          .      (11.20)
                                  0       uλe−λu du = λ1           θt < 0

         Now substitute (11.20) into (11.19) and simplify to obtain
                                            (
                                                  s̄ + γλ         θt ≥ 0
                          Et (s̃t+1 ) =                                  .       (11.21)
                                                  (1 + α)γµ + γdt θt < 0

         Substituting (11.21) into (11.18) you get the systematic but rational
         forecast errors predicted by the model
                                      (
                                           pt γ
                                            λ
                                                                θt ≥ 0
                 Et (st+1 ) − s̄ =                                     .         (11.22)
                                           (1 + α)γµ + γdt − s̄ θt < 0
11.2. A SECOND GENERATION MODEL                                       335

11.2       A Second Generation Model

In Þrst-generation models, exogenous domestic credit expansion causes
international reserves to decline in order to maintain a constant money
supply that is consistent with the Þxed exchange rate. A key feature
of second generation models is that they explicitly account for the pol-
icy options available to the authorities. To defend the exchange rate,
the government may have to borrow foreign exchange reserves, raise do-
mestic interest rates, reduce the budget deÞcit and/or impose exchange
controls. Exchange rate defense is therefore costly. The government’s
willingness to bear these costs depend in part on the state of the econ-
omy. Whether the economy is in the good state or in the bad state
in turn depends on the public’s expectations. The government engages
in a cost-beneÞt calculation to decide whether to defend the exchange
rate or to realign.

    We will study the canonical second generation model due to Obst-
feld [112]. In this model, the government’s decision rule is nonlinear and
leads to multiple (two) equilibria. One equilibrium has low probability
of devaluation whereas the other has a high probability. The costs to
the authorities of maintaining the Þxed exchange rate depend on the
public’s expectations of future policy. An exogenous event that changes
the public’s expectations can therefore raise the government’s assess-
ment of the cost of exchange rate maintenance leading to a switch from
the low-probability of devaluation equilibrium to the high-probability
of devaluation equilibrium.

    What sorts of market-sentiment shifting events are we talking about?
Obstfeld oﬀers several examples that may have altered public expecta-
tions prior to the 1992 EMS crisis: The rejection by the Danish public
of the Maastrict Treaty in June 1992, a sharp rise in Swedish unem-
ployment, and various public announcements by authorities that sug-
gested a weakening resolve to defend the exchange rate. In regard to
the Asian crisis, expectations may have shifted as information about
over-expansion in Thai real-estate investment and poor investment al-
location of Korean Chaebol came to light.
336             CHAPTER 11. BALANCE OF PAYMENTS CRISES

Obstfeld’s Multiple Devaluation Threshold Model
All variables are in logarithms. Let pt be the domestic price level and
st be the nominal exchange rate. Set the (log) of the exogenous foreign
price level to zero and assume PPP, pt = st . Output is given by a
quasi-labor demand schedule which varies inversely with the real wage
                              iid
wt − st , and with a shock ut ∼ N (0, σu2 )
                         yt = −α(wt − st ) − ut .                 (11.23)
Firms and workers agree to a rule whereby today’s wage was negotiated
and set one-period in advance so as to keep the ex ante real wage
constant
                            wt = Et−1 (st ).                  (11.24)

Optimal Exchange Rate Management
We Þrst study the model where the government actively manages, but
does not actually Þx the exchange rate. The authorities are assumed
to have direct control over the current-period exchange rate.
    The policy maker seeks to minimize costs arising from two sources.
The Þrst cost is incurred when an output target is missed. Notice that
(11.23) says that the natural output level is Et−1 (yt ) = 0. We assume
that there exists an entrenched but unspeciÞed labor market distortion
that prevents the natural level of output from reaching the socially
eﬃcient level. These distortions create an incentive for the government
to try to raise output towards the eﬃcient level. The government sets
a target level of output ȳ > 0. When it misses the output target, it
bears a cost of (ȳ − yt )2 /2 > 0.
    The second cost is incurred when there is inßation. Under PPP
with the foreign price level Þxed, the domestic inßation rate is the
depreciation rate of the home currency, δt ≡ st − st−1 . Together, policy
errors generate current costs for the policy maker `t , according to the
quadratic loss function
                              θ         1
                        `t = (δt )2 + [ȳ − yt ]2 .                (11.25)
                              2         2
Presumably, it is the public’ desire to minimize (11.25) which it achieves
by electing oﬃcials to fulÞll its wishes.
11.2. A SECOND GENERATION MODEL                                      337


The static problem is the only feasible problem. In an ideal world,
the government would like to choose current and future values of the
exchange rate to minimize the expected present value of future costs ⇐(225)
                                    ∞
                                    X
                               Et         β j `t+j ,
                                    j=0

where β < 1 is a discount factor. The problem is that this opportunity
is not available to the government because there is no way that the
authorities can credibly commit themselves to pre-announced future
actions. Future values of st are therefore not part of the government’s
current choice set. The problem that is within the government’s ability
to solve is to choose st each period to minimize (11.25), subject to
(11.24) and (11.23). This boils down to a sequence of static problems
so we omit the time subscript from this point on.
    Let s0 be yesterday’s exchange rate and E0 (s) be the public’s expec-
tation of today’s exchange rate formed yesterday. The government Þrst
observes today’s wage w = E0 (s), and today’s shock u, then chooses
today’s exchange rate s to minimize ` in (11.25). The optimal exchange-
rate management rule is obtained by substituting y from (11.23) into
(11.25), diﬀerentiating with respect to s and setting the result to zero.
Upon rearrangement, you get the government’s reaction function
                               α
                    s = s0 +     [α(w − s) + ȳ + u] .           (11.26)
                               θ
Notice that the government’s choice of s depends on yesterday’s pre-
diction of s by the public since w = E0 (s). Since the public knows that
the government follows (11.26), they also know that their forecasts of
the future exchange rate partly determine the future exchange rate. To
solve for the equilibrium wage rate, w = E0 (s), take expectations of
(11.26) to get
                                        αȳ
                              w = s0 +      .                    (11.27)
                                         θ
To cut down on the notation, let
                                        α2
                               λ=            .
                                      θ + α2
338               CHAPTER 11. BALANCE OF PAYMENTS CRISES

Now, you can get the rational expectations equilibrium depreciation
rate by substituting (11.27) into (11.26)                           ⇐(226)

                                      αȳ λu
                                 δ=      +   .                             (11.28)
                                       θ   α
The equilibrium depreciation rate exhibits a systematic bias as a result
of the output distortion ȳ.3 . The government has an incentive to set
y = ȳ. Seeing that today’s nominal wage is predetermined, it attempts
to exploit this temporary rigidity to move output closer to its target
value. The problem is that the public knows that the government will
do this and they take this behavior into account in setting the wage.
The result is that the government’s behavior causes the public to set a
wage that is higher than it would set otherwise.

Fixed Exchange Rates
The foregoing is an analysis of a managed ßoat. Now, we introduce
a reason for the government to Þx the exchange rate. Assume that in
addition to the costs associated with policy errors given in (11.25), the
government pays a penalty for adjusting the exchange rate. Where does
this cost come from? Perhaps there are distributional eﬀects associated
with exchange rate changes where the losers seek retribution on the
policy maker. The groups harmed in a revaluation may diﬀer from
those harmed in a devaluation so we want to allow for diﬀerential costs
associated with devaluation and revaluation.4 So let cd be the cost
associated with a devaluation and cr be the cost associated with a
revaluation. The modiÞed current-period loss function is
                       θ      1
                    ` = (δ)2 + (ȳ − y)2 + cd zd + cr zr ,                 (11.29)
                       2      2
where zd = 1 if δ > 0 and is 0 otherwise, and zr = 1 if δ < 0 and is zero
otherwise. We also assume that the central bank either has suﬃcient
   3
     This is the inßationary bias that arises in Barro and Gordon’s [7] model of
monetary policy
   4
     Devaluation is an increase in s which results in a lower foreign exchange value
of the domestic currency. Revaluation is a decrease in s, which raises the foreign
exchange value of the domestic currency.
11.2. A SECOND GENERATION MODEL                                        339

reserves to mount a successful defense or has access to suﬃcient lines
of credit for that purpose.
    The government now faces a binary choice problem. After observing
the output shock u and the wage w it can either maintain the Þx or
realign. To decide the appropriate course of action, compute the costs
associated with each choice and take the low-cost route.

Maintenance costs. Suppose the exchange rate is Þxed at s0 . The
expected rate of depreciation is δ e = E0 (s) − s0 . If the government
maintains the Þx, adjustment costs are cd = cr = 0, and the depreci-
ation rate is δ = 0. Substituting real wage w − s0 = δ e and output
y = −αδ e − u into (11.29) gives the cost to the policy maker of main-
taining the Þx
                              1
                        `M = [αδ e + ȳ + u]2 .                 (11.30)
                              2

Realignment Costs. If the government realigns, it does so according to
the optimal realignment rule (11.26) with a devaluation given by
                           α
                      δ = [α(w − s) + ȳ + u].                 (11.31)
                           θ
Add and subtract (α2 /θ)s0 to the right side of (11.31). Noting that
δ e = w − s0 and collecting terms gives
                                 λ
                            δ=     [αδ e + ȳ + u] .               (11.32)
                                 α
Equating (11.31) and (11.32) you get the real wage
                                    θδ e − α(ȳ + u)
                          w−s =                      .             (11.33)
                                         α2 + θ
Substitute (11.33) into (11.23) to get the deviation of output from the
target
                                 θ
                     ȳ − y =       2
                                      [αδ e + ȳ + u] .             (11.34)
                              θ+α
Substitute (11.32) and (11.34) into (11.29) to get the cost of realignment
              
         R
                    θ
                  2(θ+α2 )
                           [αδ e + ȳ + u]2 + cd   if u > 0
        ` =                                                .      (11.35)
                     θ
                  2(θ+α2 )
                           [αδ e + ȳ + u]2 + cr   if u < 0
340             CHAPTER 11. BALANCE OF PAYMENTS CRISES


Realignment rule. A realignment will be triggered if `R < `M . The
central bank devalues if u > 0 and 2cd > λ[αδ e + ȳ + u]2 . It will and
revalue if u < 0 and 2cr > λ[αδ e + ȳ + u]2 . The rule can be written
more compactly as
                        λ[αδ e + ȳ + u]2 > 2ck ,                (11.36)
where k = d if u > 0 and k = r if u < 0. The realignment rule is some-
times called an escape-clause arrangement. There are certain extreme
conditions under which everyone agrees that the authorities should es-
cape the Þxed exchange-rate arrangement. The realignment costs cd , cr
are imposed to ensure that during normal times the authorities have
the proper incentive to maintain the exchange rate and therefore price
stability.

Central bank decision making given δ e . Let’s characterize the realign-
ment rule for a given value of the public’s devaluation expectations
δ e . By (11.36), large positive realizations of u are big negative hits to
output and trigger a devaluation. Large negative values of u are big
positive output shocks and trigger a revaluation.
      (11.36) is a piece-wise quadratic equation. For positive realizations
of u, you want to Þnd the critical value ū such that u > ū triggers a
devaluation. Write (11.36) as an equality, set ck = cd , and solve for
the roots of the equation. You are looking for the positive devaluation
trigger point so ignore the negative root because it is irrelevant. The
positive root is                            s
                                    e         2cd
                            ū = −αδ − ȳ +       .                 (11.37)
                                               λ
Now do the same for negative realizations of u, and throw away the
positive root. The lower trigger point is
                                           s
                                  e            2cd
                         u = −αδ − ȳ −            .               (11.38)
                                                λ
The points [u, ū] are those that trigger the escape option. Realizations
of u in the band [u, ū] result in maintenance of the Þxed exchange rate.
Figure 11.2 shows the attack points for δ e = 0.03 with ȳ = 0.01, α = 1,
θ = 0.15, cr = cd = 0.0004.
11.2. A SECOND GENERATION MODEL                                                                 341

                                                                   0.016


                                                                   0.014


                                                                   0.012


                                                                     0.01


                                                                   0.008


                                                                   0.006


                                                                   0.004

                                                     u             0.002
                                                                                u
                                                                           0
           -0.15   -0.13   -0.11   -0.09   -0.07   -0.05   -0.03     -0.01     0.01   0.03
                                                                   -0.002




          Figure 11.2: Realignment thresholds for given δe .

Multiple trigger points for devaluation.
u and ū depend on δ e . But the public also forms its expectations
conditional on the devaluation trigger points. This means that u, ū
and δ e must be solved simultaneously.
    To simplify matters, we restrict attention to the case where the gov-
ernment may either defend the Þx or devalue the currency. Revaluation
is not an option. We therefore focus on the devaluation threshold ū.
We will set cr to be a very large number to rule out the possibility of a
revaluation. The central bank’s devaluation rule is
                           (
                               δ0 = 0               if u < ū
                   δ=               λ    e                    .                              (11.39)
                               δ1 = α [αδ + ȳ + u] if u > ū

Let P[X = x] be the probability of the event X = x. The expected
depreciation is

    δ e = E0 (δ)
         342             CHAPTER 11. BALANCE OF PAYMENTS CRISES

                 = P[δ = δ0 ]δ0 + P[δ = δ1 ]E[(λ/α)(αδ e + ȳ + E(u|u > ū))]
                 = P[u > ū](λ/α)[αδ e + ȳ + E(u|u > ū)].

         Solving for δ e as a function of ū yields
                                  λP(u > ū) 1
                         δe =                    [ȳ + E(u|u > ū)] .       (11.40)
                                1 − λP(u > ū) α
         To proceed further, you need to assume a probability law governing the
         output shocks, u.

         Uniformly distributed output shocks. Let u be uniformly distributed on
         the interval [−a, a].      The probability density function of u is
         f (u) = 1/(2a) for −a < u < a and the conditional density given u > ū
         is, g(u|u > ū) = 1/(a − ū). It follows that
                                         Z a
                                                               (a − ū)
                           P(u > ū) =         (1/(2a))dx =             ,   (11.41)
                                          ū                      2a
                                         Z a
                                                         (a + ū)
                         E(u|u > ū) =         x/(a − ū)dx =     .         (11.42)
                                       ū                    2
         Substituting (11.41) and (11.42) into (11.40) gives
                                                                     
                                           λ(a − ū)  ȳ + a+ū
                           δ e = fδ (ū) =                    2
                                                           λ(a−ū)
                                                                   .       (11.43)
                                             2αa      1 − 2a

         Notice that δ e involves the square terms ū2 . Quadratic equations usu-
         ally have two solutions. Substituting δ e into (11.37) gives
                                                          s
                                                              2cd
                                 ū = −αfδ (ū) − ȳ +            ,         (11.44)
                                                               λ
         where fδ (ū) is deÞned in (11.43). (11.44) has two solutions for ū, each
         of which trigger a devaluation. For parameter values a = 0.03, θ = 0.15,
         c = 0.0004, α = 1, ȳ = 0.01 solving (11.44) yields the two solutions
         ū1 = −0.0209 and ū2 = 0.0030. (11.44) is displayed in Figure 11.3 for
(229)⇒   these parameter values.
             Using (11.43), the public’s expected depreciation associated with ū1
         is 2.7 percent whereas δ e associated with ū2 is 45 percent. The high
11.2. A SECOND GENERATION MODEL                                        343


                                       0.02



                                     0.015



                                       0.01



                                     0.005



                                              0
           -0.03    -0.02    -0.01                0.00   0.01   0.02


                                     -0.005




       Figure 11.3: Multiple equilibria devaluation thresholds.



expected inßation (high δ e ) gets set into wages and the resulting wage
inßation increases the pain from unemployment and makes devaluation
more likely. Devaluation is therefore more likely under the equilibrium
threshold ū2 than ū1 . When perceptions switch the economy to ū2 , the
authorities require a very favorable output shock in order to maintain
the exchange rate.
    There is not enough information in the model for us to say which
of the equilibrium thresholds the economy settles on. The model only
suggests that random events can shift us from one equilibrium to an-
other, moving from one where devaluation is viewed as unlikely to one
in which it is more certain. Then, a relatively small output shock can
suddenly trigger a speculative attack and subsequent devaluation.
344             CHAPTER 11. BALANCE OF PAYMENTS CRISES

      Balance of Payments Crises Summary

      1. A Þxed exchange rate regime will eventually collapse. The result
         is typically a balance of payments or currency crisis character-
         ized by substantial Þnancial market volatility and large losses of
         foreign exchange reserves by the central bank.
      2. Prior to the 1990s, crises were seen mainly to be the result of
         bad macroeconomic management–policies choices that were in-
         consistent with the long-run maintenance of the exchange rate.
         First-generation models focused on predicting when a crisis
         might occur. These models suggest that macroeconomic fun-
         damentals such as the budget deÞcit, the current account deÞcit
         and external debt relative to the stock of international reserves
         should have predictive content for future crises.
      3. Second-generation models are models of self-fulÞlling crises
         which endogenize government policy making and emphasize the
         interaction between the authorities’s decisions and the public’s
         expectations. Sudden shifts in market sentiment can weaken the
         government’s willingness to maintain the exchange rate which
         thereby triggers a crisis.
11.2. A SECOND GENERATION MODEL                                   345

Bibliography
  1. Akaike, Hirotugu. 1974. “A New Look at the Statistical Model
     IdentiÞcation.” IEEE Transactions on Automatic Control AC-19:
     pp. 716—723.
  2. Andrews, Donald. 1991. “Heteroskedasticity and Autocorrela-
     tion Consistent Covariance Matrix Estimation.” Econometrica
     59: pp. 817—58.
  3. Arrow, Kenneth J. 1964. “The Role of Securities in the Optimal
     Allocation of Risk-Bearing.” Review of Economic Studies 31: pp.
     91—96.
  4. Backus, David, Alan Gregory, and Chris I. Telmer. 1993. “Ac-
     counting for Forward Rates in Markets for Foreign Currency.”
     Journal of Finance 48: pp. 1887-1908.
  5. Backus, David, Patrick J. Kehoe, and Finn E. Kydland. 1992.
     “International Real Business Cycles.” Journal of Political Econ-
     omy 100: pp. 745—775.
  6. Balassa, Bela. 1964. “The Purchasing Power Parity Doctrine: A
     Reappraisal.” Journal of Political Economy 72: pp. 584—596.
  7. Barro, Robert J. and David B. Gordon. 1983. “A Positive Theory
     of Monetary Policy in a Natural Rate Model.” Journal of Political
     Economy 91: pp.589—610.
  8. Bertola, Guiseppe and Ricardo J. Caballero. 1992. “Target Zones
     and Realignments.’ American Economic Review 82: pp. 520—36.
  9. Bekaert, Geert. 1996. “The Time Variation of Risk and Return in
     Foreign Exchange Markets: A General Equilibrium Perspective.”
     Review of Financial Studies 9: pp. 427—70.
 10. Betts, Caroline and Michael B. Devereux. 1998. “Exchange Rate
     Dynamics in a Model of Pricing-To-Market.” Journal of Interna-
     tional Economics forthcoming.
 11. Beveridge, Steven and Charles R. Nelson. 1981. “A New Ap-
     proach to Decomposition of Economic Time Series into Perma-
     nent and Transitory Components with Particular Attention to
     Measurement of the ‘Business Cycle.”’ Journal of Monetary Eco-
     nomics 7: pp.151-74.
346           CHAPTER 11. BALANCE OF PAYMENTS CRISES

 12. Bhargava, Alok. 1986. “On the Theory of Testing for Unit Roots
     in Observed Time Series.” Review of Economic Studies 53: pp.
     369—84.
 13. Bilson, John F. O. 1978. “Rational Expectations and the Ex-
     change Rate.” In Jacob A. Frenkel and Harry G. Johnson, eds.
     The Economics of Exchange Rates: Selected Studies. Reading,
     MA: Addison—Wesley, pp.75—96.
 14. Black, Fisher. 1986. “Noise.” Journal of Finance 41: pp. 529—
     543.
 15. Blanchard, Oliver and Danny Quah. 1989. “The Dynamic Ef-
     fects of Aggregate Demand and Supply Disturbances.” American
     Economic Review 79: pp. 655-73
 16. Blough, Stephen R. 1992. “The Relationship between Power and
     Level for Generic Unit Root Tests in Finite Samples.” Journal of
     Applied Econometrics 7: pp. 295-308.
 17. Bowman, David. 1998. “Eﬃcient Tests for Autoregressive Unit
     Roots in Panel Data.” Unpublished manuscript. Board of Gov-
     ernors of the Federal Reserve System.
 18. Burnside, Craig. 1994. “Hansen-Jagannathan Bounds as Clas-
     sical Tests of Asset-Pricing Models.” Journal of Business and
     Economic Statistics 12: pp. 57-79.
 19. Campbell, John and Pierre Perron. 1991. “Pitfalls and Op-
     portunities: What Macroeconomists Should Know about Unit
     Roots.” in Olivier Jean Blanchard and Stanley Fischer, eds.
     NBER Macroeconomics Annual 1991. Cambridge and London:
     MIT Press, pp. 141-201.
 20. Campbell, John and Robert Shiller. 1987. “Cointegration and
     Tests of Present Value Models.” Journal of Political Economy
     95: pp. 1062-88.
 21. Canzoneri, Matthew B., Robert E. Cumby and Behzad Diba.
     1999. “Relative Labor Productivity and the Real Exchange Rate
     in the Long Run: Evidence for a Panel of OECD Countries”
     Journal of International Economics 47: pp. 245-66.
 22. Cassel, Gustuv. 1921. The World’s Monetary Problems. London:
     Constable.
11.2. A SECOND GENERATION MODEL                                  347

 23. Cavaglia, S., Verschoor, W. and Wolﬀ, C. 1994. “On the Biased-
     ness of Forward Foreign Exchange Rates: Irrationality or Risk
     Premia?” Journal of Business 67: pp.321—343.
 24. Cecchetti, Stephen G., Pok-sang Lam and Nelson C. Mark. 1993.
     “The Equity Premium and the Risk Free Rate: Matching the
     Moments” Journal of Monetary Economics 31: pp. 21-46.
 25. Cecchetti, Stephen G., Pok-sang Lam, and Nelson C. Mark. 1994.
     “Testing Volatility Restrictions on Intertemporal Marginal Rates
     of Substitution Implied by Euler Equations and Asset Returns.”
     Journal of Finance 49: pp. 123—152.
 26. Choi, Chi-Young. 2000 Panel Unit-Root Tests under the Null Hy-
     pothesis of Stationarity and ConÞrmatory Analysis. Unpublished
     Ph.D. Dissertation. The Ohio State University.
 27. Christiano, Lawrence J. and Martin Eichenbaum. 1990. “Unit
     Roots in Real GNP: Do We Know, and Do We Care?” Carnegie
     Rochester Conference Series on Public Policy 32: pp. 7-61.
 28. Clarida, Richard and Jordi Gali. 1994. “Sources of Real Exchange-
     Rate Fluctuations: How Important are Nominal Shocks?” Carnegie-
     Rochester Conference Series on Public Policy 41: pp. 1—56.
 29. Cochrane, John H. 1988. “How Big Is the Random Walk in
     GNP?” Journal of Political Economy 96: pp. 893-920.
 30. Cochrane, John H. 1991. “A Critique of the Application of Unit
     Root Tests.” Journal of Economic Dynamics and Control 15: pp.
     275-84.
 31. Cole, Harold L. and Maurice Obstfeld. 1991. “Commodity Trade
     and International Risk Sharing: How Much Do Financial Markets
     Matter?” Journal of Monetary Economics 28: pp. 3-24.
 32. Cooley, Thomas and Steve LeRoy. 1985. “Atheoretical Macroe-
     conometrics: A Critique.” Journal of Monetary Economics 16:
     pp. 283-308.
 33. Cooley, Thomas F. and Edward C. Prescott. 1995. “Economic
     Growth and Business Cycles.” In Thomas F. Cooley, ed. Fron-
     tiers of Business Cycle Research. Princeton: Princeton Univer-
     sity Press, pp.1—38
348           CHAPTER 11. BALANCE OF PAYMENTS CRISES

 34. Debreu, Gerard. 1959. Theory of Value. New Haven, CT: Yale
     University Press.
 35. Davidson, Russel and James. G. MacKinnon. 1993. Estimation
     and Inference in Econometrics. New York: Oxford University
     Press.
 36. De Jong, Frank. 1994. “A Univariate Analysis of EMS Exchange
     Rates using a Target Zone Model.” Journal of Applied Econo-
     metrics 9: pp. 31—45.
 37. Degroot, Morris H. 1975. Probability and Statistics. Reading MA:
     Addison—Wesley.
 38. De Long, J. Bradford, Andrei Shleifer, Lawrence H. Summers
     and Robert J. Waldman. 1990. “Noise trader risk in Þnancial
     markets.” Journal of Political Economy 98: pp. 703—738.
 39. Dornbusch, Rudiger. 1976. “Expectations and Exchange Rate
     Dynamics.” Journal of Political Economy 84: pp. 1161—1176.
 40. Duﬃe, Darrell and Kenneth J. Singleton. 1993. “Simulated Mo-
     ments Estimation of Markov Models of Asset Prices.” Economet-
     rica 61: pp. 929-52.
 41. Eichenbaum, Martin and Charles Evans. 1995. “Some Empir-
     ical Evidence on the Eﬀects of Shocks to Monetary Policy on
     Exchange Rates” Quarterly Journal of Economics 110: pp. 975-
     1009.
 42. Engle, Robert F. and C.W.J. Granger. 1987. “Co-integration
     and Error Correction: Representation, Estimation, and Testing.”
     Econometrica 55: pp. 251-76.
 43. Engel, Charles. 1984. “Testing for the Absense of Expected Real
     ProÞts from Forward Market Speculation.” Journal of Interna-
     tional Economics 17: pp. 299—308.
 44. Engel, Charles. 1992. “On the Foreign Exchange Risk Premium
     in a General Equilibrium Model.” Journal of International Eco-
     nomics 32: pp.305-19.
 45. Engel, Charles. 2000. “PPP May Not Hold Afterall.” Journal of
     International Economics forthcoming.
 46. Engel, Charles and John H. Rogers. 1996. “How Wide is the
     Border?”. American Economic Review 86: pp. 1112—1125.
11.2. A SECOND GENERATION MODEL                                     349

 47. Evans, Martin D.D. 1996. “Peso Problems: Their Theoretical
     and Empirical Implications.” In G.S. Maddala and C.R. Rao, eds.
     Statistical Methods of Finance, Handbook of Statistics Series, vol.
     14. Amsterdam: Elsevier, North Holland, pp. 613—46.
 48. Fama, Eugene F. 1984. “Spot and Forward Exchange Rates.”
     Journal of Monetary Economics 14: pp.319-338.
 49. Fama, Eugene F. 1991. “Eﬃcient Capital Markets: II.” Journal
     of Finance 46: pp. 1575—617.
 50. Faust, Jon. 1996. “Near Observational Equivalence and Theoret-
     ical Size Problems with Unit Root Tests.” Econometric Theory
     12: pp. 724—31.
 51. Federal Reserve Bank of New York. 1998. “Foreign Exchange and
     Interest Rate Derivatives Market Survey Turnover in the United
     States.” Unpublished manuscript.
 52. Feenstra, Robert C., Joseph E. Gagnon, and Michael M. Knetter.
     1996. “Market Share and Exchange Rate Pass-Through in World
     Automobile Trade.” Journal of International Economics 40: pp.
     189—207.
 53. Fisher, R.A. 1932. Statistical Methods for Research Workers, 4th
     Ed. Edinburgh: Oliver and Boyd
 54. Fleming, Marcus J. 1962. “Domestic Financial Policies under
     Fixed and under Floating Exchange Rates.” International Mon-
     etary Fund Staﬀ Papers 9: pp. 369—379.
 55. Flood, Robert P. and Peter M. Garber. 1984. “Collapsing Exchange-
     Rate Regimes: Some Linear Examples.” Journal of International
     Economics 17: pp. 1-13.
 56. Flood, Robert P. and Peter M. Garber. 1991. “The Linkage
     between Speculative Attack and Target Zone Models of Exchange
     Rates.” Quarterly Journal of Economics 106: pp. 1367-72.
 57. Flood, Robert P. and Nancy Marion. 1999. “Perspectives on
     the Recent Currency Crisis Literature.,” International Journal of
     Finance and Economics 4: pp. 1—26.
 58. Frankel, Jeﬀrey A. and Menzie Chinn. 1993. “Exchange Rate
     Expectations and the Risk Premium: Tests for a Cross Section
350            CHAPTER 11. BALANCE OF PAYMENTS CRISES

      of 17 Currencies.” Review of International Economics 1: pp.136-
      144.
 59. Frankel, Jeﬀrey, and Andrew K. Rose. 1996. “A Panel Project
     on Purchasing Power Parity: Mean Reversion within and between
     Countries.” Journal of International Economics 40: pp. 209-224
 60. Frenkel, Jacob A. 1978. “Purchasing Power Parity: Doctrinal
     Perspective and Evidence from the 1920s.” Journal of Interna-
     tional Economics 8: pp. 169-191.
 61. Frenkel, Jacob A. 1976. “A Monetary Approach to the Exchange
     Rate: Doctrinal Aspects and Empirical Evidence.” Scandinavian
     Journal of Economics 78: pp. 200-24.
 62. Frenkel, Jacob A. and Harry G. Johnson, eds. 1976. The Mone-
     tary Approach to the Balance of Payments. Toronto: University
     of Toronto Press.
 63. Frenkel, Jacob A. and Richard M. Levich. 1977. “Transaction
     Costs and Interest Arbitrage: Tranquil versus Turbulent Peri-
     ods.” Journal of Political Economy 85: pp.1209—26.
 64. Friedman, Milton. 1953. “Methodology of Positive Economics.”
     In Essays in Positive Economics. Chicago: University of Chicago
     Press.
 65. Froot, Kenneth and Jeﬀrey A. Frankel. 1989. “Forward Discount
     Bias: Is it an Exchange Risk Premium?” Quarterly Journal of
     Economics 104: pp.139—161.
 66. Hamilton, James D. 1994. Time Series Analysis. Princeton:
     Princeton University Press.
 67. Gregory, Alan W. and Gregor W. Smith. 1991. “Calibration as
     Testing: Inference in Simulated Macroeconomic Models.” Jour-
     nal of Business and Economic Statistics 9: pp.297—303.
 68. Grilli, Vittorio and Graciela Kaminsky. 1991. “Nominal Ex-
     change Rate Regimes and the Real Exchange Rate.” Journal of
     Monetary Economics 27: pp. 191—212.
 69. Hall, Alastair R. 1994. “Testing for a Unit Root in Time Series
     with Pretest Data-Based Model Selection.” Journal of Business
     and Economic Statistics 12: pp. 461—70.
11.2. A SECOND GENERATION MODEL                                 351

 70. Hansen, Lars P. 1982. “Large Sample Properties of Generalized
     Method of Moment Estimators.” Econometrica 50: pp. 1029-54.
 71. Hansen, Lars P. and Robert J. Hodrick 1980. “Forward Rates as
     Unbiased Predictors of Future Spot Rates.” Journal of Political
     Economy 88: pp. 829-53.
 72. Hansen, Lars P. and Ravi Jagannathan. 1991. “Implications of
     Security Market Data for Models of Dynamic Economies.” Jour-
     nal of Political Economy 99: pp. 225-62.
 73. Hansen, Lars P. and Kenneth J. Singleton. 1982. ‘Generalized
     Instrumental Variables Estimation of Nonlinear Rational Expec-
     tations Models.” Econometrica 50: pp. 1269-1286.
 74. Hatanaka, Michio. 1996. Time-Series-Based Econometrics: Unit
     Roots and Cointegration. New York: Oxford University Press.
 75. Hodrick, Robert J. 1987. The Empirical Evidence on the Eﬃ-
     ciency of Forward and Futures Foreign Exchange Markets. Chur,
     Switzerland: Harwood Academic Publishers.
 76. Hodrick, Robert J. and Edward C. Prescott. 1997. “Postwar U.S.
     Business Cycles: An Empirical Investigation ,”Journal of Money,
     Credit, and Banking. 29: pp. 1—16.
 77. Huizinga, John. 1982. “An Empirical Investigation of the Long-
     Run Behavior of Real Exchange Rates.” Carnegie—Rochester Con-
     ference Series on Public Policy 27: pp. 149—214.
 78. Im, Kyung So, M. Hashem Pesaran and Yongcheol Shin. 1997.
     “Testing for Unit Roots in Heterogeneous Panels” Unpublished
     manuscript. Trinity College, University of Cambridge.
 79. Isard, Peter. 1977. “How Far Can We Push the ‘Law of One
     Price’ ? American Economic Review 67: pp. 942-48.
 80. Johansen, Soren. 1991. “Estimation and Hypothesis Testing of
     Cointegration Vectors in Gaussian Vector Autoregressive Mod-
     els.”Econometrica 59: pp. 1551-80.
 81. Johansen, Soren. 1995. Likelihood-Based Inference in Cointe-
     grated Vector Autoregressive Models. New York: Oxford Univer-
     sity Press.
 82. Kaminsky, Graciella, and Rodrigo Peruga. 1990. “Can a Time-
     Varying Risk Premium Explain Excess Returns in the Forward
352           CHAPTER 11. BALANCE OF PAYMENTS CRISES

     Market for Foreign Exchange?” Journal of International Eco-
     nomics. 28: pp. 47-70.
 83. King, Robert G., Charles I. Plosser and Sergio Rebelo. 1988.
     “Production, Growth and Business Cycles: I. The Basic Neoclas-
     sical Model.” Journal of Monetary Economics 21: pp. 195—232.
 84. King, Robert G., and Sergio T. Rebelo. 1993. “Low Frequency
     Filtering and Real Business Cycles,” Journal of Economic Dy-
     namics and Control 17: pp. 207-231.
 85. Kendall, M.G. 1954. “Note on Bias in the Estimation of Auto-
     correlation.” Biometrika 41: pp.403—404.
 86. Knetter, Michael M. 1993. “International Comparisons of Price-
     to-Market Behavior.” American Economic Review 83: pp. 473—
     86.
 87. Krasker, William. 1980. “The ‘Peso Problem’ in Testing the
     Eﬃciency of Forward Exchange Markets.” Journal of Monetary
     Economics 6: pp. 269—276.
 88. Krugman, Paul R. 1991. “Target Zones and Exchange Rate Dy-
     namics.” Quarterly Journal of Economics 106: pp. 669-82.
 89. Krugman, Paul R. 1979. “A Model of Balance-of-Payments Crises.”
     Journal of Money, Credit, and Banking 11: pp. 311-325.
 90. Leroy, Stephen and Richard D. Porter. 1981. “The Present-Value
     Relation: Tests Based on Implied Variance Bounds.” Economet-
     rica 49: pp. 555-74.
 91. Levin, Andrew, and Chien Fu Lin. 1993. “Unit Root Tests in
     Panel Data: New Results.” University of California, San Diego
     Department of Economics Working Paper: 93-56.
 92. Lee, Bong Soo, and Beth Fisher Ingram. 1991. “Simulation Esti-
     mation of Time-Series Models.” Journal of Econometrics 47: pp.
     197-205.
 93. Lewis, Karen K. 1989. “Changing Beliefs and Systematic Ra-
     tional Forecast Errors with Evidence from Foreign Exchange.”
     American Economic Review 79: pp. 621-36.
 94. Lothian, James R. and Mark P. Taylor. 1996. “Real Exchange
     Rate Behavior: The recent Float from the Perspective of the Past
     Two Centuries.” Journal of Political Economy 104: pp.488—509.
11.2. A SECOND GENERATION MODEL                                 353

 95. Lucas, Robert E. Jr. 1982. “Interest Rates and Currency Prices
     in a Two-Country World.” Journal of Monetary Economics 10:
     pp. 335-59.
 96. MacDonald, Ronald and Mark P. Taylor. 1993. “The Monetary
     Approach to the Exchange Rate: Rational Expectations, Long-
     run Equilibrium, and Forecasting.” International Monetary Fund
     Staﬀ Papers 40: pp. 89—107.
 97. MacDonald, Ronald. 1996. “Panel Unit Root Tests and Real
     Exchange Rates.” Economics Letters 50: pp. 7-11.
 98. MacDonald, Ronald and Jerome Stein, eds. 1999. Equilibrium
     Exchange Rates. Boston: Kluwer Press.
 99. Maddala, G.S. and Shaowen Wu. 1999. “A Comparative Study
     of Unit Root Tests with Panel Data and a New Simple Test.”
     Oxford Bulletin of Economics and Statistics 61: pp. 631—652.
100. Mark, Nelson C. 1985. ‘On Time Varying Risk Premia in the
     Foreign Exchange Market: An Econometric Analysis,” Journal
     of Monetary Economics 16: pp. 3-18.
101. Mark, Nelson C. and Donggyu Sul. 2000. “Nominal Exchange
     Rates and Monetary Fundamentals: Evidence from a Small Post-
     Bretton Woods Panel.” Journal of International Economics forth-
     coming.
102. Mark, Nelson C. and Yangru Wu. 1998.“Rethinking Deviations
     from Uncovered Interest Parity: The Role of Covariance Risk and
     Noise.” Economic Journal 108: pp. 1686—1706.
103. McCallum, Bennett T. 1994. “A Reconsideration of the Uncov-
     ered Interest Parity Relationship.” Journal of Monetary Eco-
     nomics 33: pp. 105—32.
104. Meese, Richard and Kenneth Rogoﬀ. 1983. “Empirical Exchange
     Rate Models of the 1970’s: Do they Fit Out of Sample?” Journal
     of International Economics 14: pp. 3-24.
105. Mehra, Rajnish and Edward Prescott. 1985. “The Equity Pre-
     mium: A Puzzle.” Journal of Monetary Economics 15: pp. 145-
     162.
354           CHAPTER 11. BALANCE OF PAYMENTS CRISES

106. Modjtahedi B. 1991. “Multiple Maturities and Time-Varying
     Risk Premia in Forward Exchange Markets.” Journal Of Inter-
     national Economics 30: pp. 69-86
107. Hinkle, Lawrence E. and Peter J. Montiel. 1999. Exchange Rate
     Misalignment: Concepts and Measurement for Developing Coun-
     tries. Oxford: Oxford University Press.
108. Mundell, Robert A. 1963. “Capital Mobility and Stabilization
     Policy under Fixed and Flexible Exchange Rates.” Canadian
     Journal of Economics and Political Science 29: pp. 475-85.
109. Mussa, Michael. 1976. “The Exchange Rate, the Balance of
     Payments, and Monetary and Fiscal Policy Under a Regime of
     Controlled Floating.” Scandinavian Journal of Economics 78:
     pp. 229-48.
110. Mussa, Michael. 1986. “Nominal Exchange Rate Regimes and the
     Behavior of Real Exchange Rates: Evidence and Implications.”
     Carnegie Rochester Conference Series on Public Policy 25: pp.
     117—213.
111. Obstfeld, Maurice. 1985. “Floating Exchange Rates: Experience
     and Prospects.” Brookings Papers on Economic Activity 2: pp.
     369—450.
112. Obstfeld, Maurice. 1994. “The Logic of Currency Crises.” Cahiers
     Economiques et Monetaires Bank of France: pp.189—213.
113. Obstfeld, Maurice and Kenneth Rogoﬀ. 1995. “Exchange Rate
     Dynamics Redux.” Journal of Political Economy 103: pp.624—
     660.
114. Newey, Whitney and Kenneth D. West. 1987. “A Simple, Pos-
     itive Semi-deÞnite Heteroskedasticity and Autocorrelation Con-
     sistent Covariance Matrix.” Econometrica 55: pp. 703-8.
115. Newey, Whitney and Kenneth D. West. 1994. “Automatic Lag
     Selection in Covariance Matrix Estimation.” Review of Economic
     Studies 61: pp. 631-53.
116. Nickell, Stephen J. 1981. “Biases in Dynamic Models with Fixed
     Eﬀects.” Econometrica 49: pp. 1417-1426.
11.2. A SECOND GENERATION MODEL                                    355

117. Papell, David. 1986. “Exchange Rate and Current Account Dy-
     namics under Rational Expectations: An Econometric Analysis.”
     International Economic Review 27: pp. 583-600.
118. Papell, David. 1997. “Searching for Stationarity: Purchasing
     Power Parity under the Current Float.” Journal of International
     Economics 43: pp. 313-32.
119. Papell, David and Hristos Theodoridis. 2000. “The Choice of
     Numeraire Currency in Panel Tests of Purchasing Power Parity.”
     Journal of Money, Credit, and Banking forthcoming.
120. Phillips, Peter C.B., and Pierre Perron. 1988. “Testing for a Unit
     Root in Time Series Regression.” Biometrika 75: pp. 335-46.
121. , Pederson, Torben Mark. 1999. “Spectral Analysis, Business Cy-
     cles, and Filtering of Economic Time Series: A Survey.” Unpub-
     lished manuscript. Institute of Economics, University of Copen-
     hagen, Denmark.
122. Saikonmen, Pentti. 1991. “Asymptotically Eﬃcient Estimation
     of Cointegration Regression.” Econometric Theory 7: pp. 1—21.
123. Stock, James and Mark Watson. 1993. “A Simple Estimator
     of Cointegrating Vectors in Higher Order Integrated Systems.”
     Econometrica 61: pp. 783—820.
124. Samuelson, Paul A. 1964. “Theoretical Notes on Trade Prob-
     lems.” Review of Economics and Statistics 46: pp. 145—54.
125. Schwarz, Gideon. 1978. “Estimating the Dimension of a Model”
     The Annals of Statistics 6: pp.461—464.
126. Schwert, G. William. 1989. “Tests for Unit Roots: A Monte Carlo
     Investigation.” Journal of Business and Economics Statistics 7:
     pp. 147—159.
127. Shiller, Robert J. 1981. “Do Stock Prices Move Too Much to
     be JustiÞed by Subsequent Changes in Dividends?” American
     Economic Review 71: pp. 421—435.
128. Siegel, Jeremy J. 1972. “Risk, Interest Rates and the Forward
     Exchange.” Quarterly Journal of Economics 86: pp. 303-309.
129. Sims, Christopher A. 1980. “Macroeconomics and Reality.” Econo-
     metrica 48: pp. 1-48.
356           CHAPTER 11. BALANCE OF PAYMENTS CRISES

130. Taylor, Mark P. 1989. “Covered Interest Arbitrage and Market
     Turbulence.” Economic Journal 99: pp.376—391.
131. Taylor, Mark P. and Lucio Sarno. 1998. “The Behavior of Real
     Exchange Rates during the Post-Bretton Woods Period.” Journal
     of International Economics 46: pp. 281-312.
132. Williamson, John. 1994. Estimating Equilibrium Exchange Rates.
     Washington D.C.: Institute for International Economics.
133. Wu, Shaowen. 1998. Nonstationary Panel Data Analysis. Un-
     published Ph.D. Dissertation, The Ohio State University.
134. Theil, Henri. 1966. Applied Economic Forecasting. Amsterdam:
     North Holland Publishing Co.
135. Wu, Yangru. 1996. “Are Real Exchange Rates Non-Stationary?
     Evidence from a Panel—Data Test.” Journal of Money, Credit,
     and Banking 28: pp.54—63.
Author Index

           A                      Chinn, M.D., 184, 185
                                  Choi, C.Y., 57
Akaike, H., 27                    Christiano L.J., 218
Andrews, D., 40                   Clarida, R., 252
Arrow, K.J., 107                  Cochrane, J.H., 48,50
                                  Cole, H.L., 112, 135
           B                      Cooley, T., 31, 125, 144
                                  Cumby, R.E., 224
Backus, D., 144, 149, 183
Barro, R.J., 336                             D
Bekaert, G., 183
Bertola, G., 321                  Davidson, R., 45
Betts, C., 264, 286               De Long, J.B., 194
Beveridge, S., 47                 Debreu, G., 105
Bhargava, A., 43, 44              Degroot, M.H., 319
Black, F., 194                    DeJong, F., 315
Blanchard, O., 251                Devereux, M.B., 264, 286
Blough, S.R., 50                  Diba, B., 224
Bowman, D., 62                    Dornbusch, R., 229, 237
Burnside, C., 126                 Duﬃe, D., 39

           C                                 E
Caballero, R.J., 321              Eichenbaum, M., 218, 249
Campbell, J.Y., 54, 92            Engel, C.M., 172, 203, 211, 226
Canzoneri, M.B., 224              Evans, C., 249, 193
Cassel, G., 80
Cavaglia, S., 184, 185                       F
Cecchetti, S.G., 126, 204

                            357
358                                                AUTHOR INDEX

Fama, E.F., 161, 167,168                       J
Faust, J., 50
Federal Reserve Bank of New York,   Jaganathan, R., 179
        2                           Johansen, S., 23, 62
Feenstra, R.C., 285                 Johnson, H.G., 83
Fisher, R.A., 61
Fleming, J.M., 229                             K
Flood, R.P., 317, 325, 326
Frankel, J.A., 184, 185, 223        Kaminsky, G., 204, 221
Frenkel, J.A., 6, 80, 83            Kehoe, P.J., 144, 149
Friedman, M., 83                    Kendall, M.G., 57
Froot, K., 184, 185                 King, R.G., 78, 139, 144
                                    Knetter, M.M., 285
           G                        Krasker, W., 187
                                    Krugman, P.R., 311, 326
Gali, J., 252                       Kydland, F.E., 144, 149
Garber, P.M., 317, 326
Gordon, D.B., 336                              L
Gregory, A., 183, 126
Grilli, V., 221                     Lee, B.S., 39
                                    LeRoy, S, 31, 92
           H                        Levich, R.M., 6
                                    Levin, A., 51, 55
Hall, A., 54                        Lewis, K.K., 188
Hamilton, J.D., 23, 45              Lin, C.F., 51, 55
Hansen, L.P., 35, 163, 177, 179     Lothian, J.R., 220
Hatanaka, M., 23                    Lucas, R.E., 105
Hinkle, L.E., 229                   MacDonal, R., 92, 223, 229
Hodrick, R.J., 75, 138, 163, 172    MacKinnon, J.G., 45
Huizinga, J., 221                   Maddala, G.S., 51, 61
                                    Marion, N., 325
           I                        Mark, N.C., 97, 98, 172, 177,
                                            193
Im, K.S., 51, 61                    McCallum, B.T., 203
Ingram, B. F., 39                   Meese, R., 97
Isard, P., 209                      Mehra, R., 179
                                    Modjtahedi, B., 177
AUTHOR INDEX                                                       359

Montiel, P.J., 229
Mundell, R.A., 229                             S

           N                        Samuelson, P.A., 82
                                    Sarno, L., 62
Nelson, C.R., 47                    Schwarz, G., 25, 26
Newey, W., 37, 38, 39, 54           Schwert, G.W., 63
Nickell, S.J., 57                   Shiller, R.J., 92
                                    Shin, Y., 51, 61
           O                        Siegel, J., 203
                                    Sims, C.A., 249
Obstfeld, M., 112, 135, 229, 241,   Singleton, K.J., 39, 177
       264, 333                     Smith, G.W., 126
                                    Stein, J., 229
           P                        Sul, D., 97, 98

Papell, D., 58, 218, 223, 249                  T
Pederson, T.M., 7
Perron, P, 46 54                    Taylor, M.P., 8, 63, 92, 220
Peruga, R., 204                     Telmer, C.I., 183
Pesaran, M.H., 51, 61               Theil, H., 100
Phillips, P.C.B., 46                Theodoridis, H., 218
Plosser, C.I., 139, 144
Porter R.D., 92                                W
Prescott, E., 75, 125, 138, 144,
        179                         West, K.D., 37, 38, 39, 54
                                    Williamson J., 229
           Q                        Wu, S., 51, 61
                                    Wu, Y., 58, 172, 193, 223
Quah, D., 251

           R

Rebelo, S., 78, 139, 144
Rogers, J.H., 211
Rogoﬀ, K., 97, 264
Rose, A.K., 223
Subject Index

          A                                Credit transactions, 18
                                           Debit transaction, 18
Absorption, 16, 230                  Balanced growth path, 141
AIC, 25                              Balassa-Samuelson model (begin),
Approximate solution                         214—217
   Pricing-to-market model, 292—     Bartlett window, 37
       294                           Bayes’ Rule, 191
   Redux model, 274—275              Beggar-thy-neighbor policy, 234,
   Real business cycle model,                384, 300, 301
       144—148, 154—158              Bias of estimator of ρ
Arrow-Debreu model, 105, 137             Kendall adjustment univari-
Ask price, 6                                 ate case, 57
Asymptotic distribution, 24              Nickell adjustment for panel
Augmented Dickey-Fuller regres-              data, 57
       sion, 46                      BIC, 26
Autocovariance generating func-      Bid price, 6
       tion, 73—74                   Bootstrap, 29, 58—59
Autoregressive process, 24               Nonparametric, 29
                                           Panel unit-root test, 59
          B                                Panel study of monetary
                                             model, 98
Balance of payments                      Parametric,
   Accounts 18—20                          Impulse response standard
   Subaccounts, 19                           errors, 29
     Capital account, 19                   Panel unit-root test, 58
     Current account, 19                 Residual bootstrap, 58
     Oﬃcial settlements account,     Brownian motion (Wiener pro-
       19                                    cess), 306
   Transactions

                               360
SUBJECT INDEX                                                  361

           C                        Covariance stationarity, 24
                                       Asymptotic distribution of OLS
Calibration method, 125                    estimator of ρ, 42
    Lucas model, 126—132               Process, 24
    One-country real business cy-      Time-series behavior, 41
        cle model, 144—149          Covered interest parity, 5, 162,
    Two-country real business cy-          197
        cle model, 149—158             Neutral-band tests, 6-9
Cash-in-advance                     Crowding out, 236
    Transactions technology, 113    Current account, 17
    Constraint, 115
Causal priority, 26                           D
Central limit theorem, 36
Certainty equivalence, 147          Data generating process for the
Chebyshev’s inequality, 307                 bootstrap, 58
Choleski upper triangular decom-    Deep parameters, 125
        position, 28                Devaluation, 232, 336, 337, 339
Cobb-Douglas                        Diﬀerential equation
    Consumption index, 112              First-order, 309
    Price level, 213                    Linear homogeneous, 257
    Production function,140, 151,       Second order, 312
        214                         Diﬀerentiated goods, 264
Cointegration, 63—67                Diﬀusion process, 306
    Monetary model, 92              Disequilibrium dynamics
Common trend processes, 64              Stochastic Mundell-Fleming
Common-time eﬀect in panel unit             model, 246—248
        root tests, 53              Domestic credit, 231, 234, 251,
Companion form, 43,93                       325, 327, 331, 333
Complete markets, 119                   Extended by central bank,
Complex conjugate, 72                       20
Constant elasticity of substitu-    Dornbusch model, 237—241
        tion index, 265
Constant relative risk aversion               E
        utility, 112, 117, 122
Convergence, in distribution, 24    Econometric exogeneity, 26, 33
Convergence, in probability, 23     Economic signiÞcance, 217
Covariance decomposition, 174       Eﬀective labor units, 139
362                                              SUBJECT INDEX

Eﬃcient capital market, 161          Foreign exchange reserves of cen-
Equity premium puzzle, 179                   tral bank, 20
Error-components representation,     Forward exchange rate
        52                               Lucas model, 123
Escape clause, 338                       Transactions (outright), 3
Euler equations                          Contract maturities, 4
   Lucas model, 108—109, 111—            premium and discount, 4
        112, 116, 120, 122               Forward premium bias—see Un-
   Pricing-to-market model, 288              covered Interest Parity,
   Redux model, 271                          Deviations from
Eurocurrency, 4                      Fundamentals traders, 197
Excess exchange rate volatility,     Fundamentals, economic, 85
        88                           Futures contracts, 12—15
Exchange Rate Mechanism of Eu-           Margin account, 12
        ropean Monetary System,          Yen contract for June 1999
        305                                  delivery, 14
Exchange rate quotation                  Long position, 12
   American terms, 2, 79                 Settlement, 12
   European terms, 2                     Short position, 12
Expected speculative proÞt
   Estimation of, 170—172                       G
Expenditure switching eﬀect, 230,
        235, 245, 284, 299, 301      Gambler’s ruin problem, 319
External balance, 261                Generalized method of moments,
                                            35—38, 164
           F                            Asymptotic distribution, 38
                                        Long-run covariance matrix,
Filtering time-series, 67—78                37
    Linear Þlters (begin range 1),      Testing Euler equations, 177—
        74—78                               179
    Hodrick-Prescott Þlter, 75—         Tests of overidentifying re-
        78                                  strictions, 38
    Removing non-cyclical com-
        ponents, 138                            H
First-generation models, 326—332
Fisher equation, 268                 Half-life to convergence, 43
Fisher test—See Maddala—Wu test          Real exchange rate, 218
SUBJECT INDEX                                                      363

Hall’s general-to-speciÞc method,                 K
        54
Hansen-Hodrick problem, 163            Kronecker product, 178
Hodrick-Prescott Þlter, 75—79
    In real business-cycle research,              L
        138—141, 148—149, 151,
        158                            Law of iterated expectations, 86,
Honeymoon eﬀect, 314                           93
                                       Law-of-one price,
           I                              Deviations from, 209—212
                                       Learning period in peso-problem
Imperfect competition, 263                     model, 192
Imperfectly credible target zones,     Liquidity eﬀect, 240, 281, 284,
         320—322                               299
Inßation premium, 117                  Log utility, 139, 141, 142
Inßationary bias, 336                  Lognormal distribution, 178, 204
Instrumental variables, 37             London Interbank Oﬀer Rate (LI-
International transmission of shocks           BOR), 4
    Mundell-Fleming model              Long position (exposure), 7
       Fixed exchange rates, 233       Long-horizon panel data regres-
       Flexible exchange rates, 236            sion, 97
    Pricing-to-market model, 299       Lucas model, 105—132
    Redux model, 284                      Risk premium, 172—177
Intertemporal marginal rate of
         substitution, 173                        M
    Of money, 176
Intervention                           Markov chain (begin range), 126,
    Foreign exchange market, 20               133—134
       Sterilized, 21                     Transition matrix, 127, 129,
       Unsterilized, 21, 311                  133
Ito’s lemma, 307—308                   Markup, price over costs, 290
                                       Mean reversion, 49, 314
           J                           Mean-variance optimizers, 11
                                       Measurement in calibration
Jensen’s inequality, 195                  Lucas model, 126
                                          Real business cycles, 141, 150,
                                              151
364                                               SUBJECT INDEX

Method of undetermined coeﬃ-                 285, 290
       cients, 312, 329               Monopoly distortion, 284
   Dornbusch model, 239               Moving-average process, 24
   Krugman target-zone model,         Moving-average representation of
       311                                   unit-root time series, 43
   Lewis peso-problem model,          Multiple equilibria, 341
       188                            Mundell-Fleming model
   Stochastic Mundell-Fleming,             Stochastic, 241—248
       243                                 Static, 229—236
   Noise-trader model, 201
Moment generating function, 10                   N
Monetary base, 20
Monetary model, 79—103                National income accounting, 15—
   Excess exchange rate volatil-              18
       ity, 90—92                        Closed economy, 16
   Exchange-rate determination,          Current account, 17
       84—100                            Open economy, 16
   Long-horizon panel regression,     Near observational equivalence in
       100                                    unit-root tests, 50
   Of the balance of payments,        Net foreign asset position, 17
       83—84                          Newey-West long-run covariance
   Peso-problem analysis, 188                 matrix, 37
   Target-zone analysis               Noise-Trader Model, 193—202
     Deterministic continuous time,   Nominal bond price
       308—309                           Lucas model, 118, 123
     Stochastic continuous time,      Nontraded goods, 135
       309—311                        Normal distribution with mean
   Testing present-value form,                µ and variance σ 2 , 23
       95
Monetary neutrality                              O
   Dornbusch model, 239
   Pricing to market, 398             Ordinary least squares (OLS)
   Redux model, 289                      Asymptotic distribution, 36
Money in the utility function, 265,   Out-of-sample prediction and Þt,
       287                                    97
Money-demand function, 85             Overlapping generations model,
Monopolistically competitive Þrm,             194
SUBJECT INDEX                                                    365

Overlapping observations, advan-         Cassel’s view (begin), 80—81
       tages of, 165                     Commodity arbitrage view,
Overshooting exchange rate                   82
   Pricing to market, 298                Pricing-to-market model, 292
   Redux model, 279                      Redux model, 268
   Delayed, 250                          Relative, 209
   Dornbusch model, 240
   Structural VAR, 254                          Q
   Stochastic Mundell-Fleming
       model, 248                     Quadratic formula, 147
Overshooting terms of trade, Re-      Quadratic optimization problem,
       dux model, 280                        145
                                      Quantity equation, 117, 121
           P
                                                R
Pareto optimum—see Social op-
        timum                         Rational bubble, 87
Pass through, 266, 285                Reaction function, 335
Perfect foresight, 147, 238           Real business cycle model, 137—
Permanent—transitory components               158
        representation of unit-root       One-sector closed economy,
        process, 46—48, 102                   139—149
Peso problem, 186—193, 205, 332           Two-country model, 149—159
Phase diagram, 260                    Reduced form, 31
Political risk, 5                     Regime shift, 189
Posterior probabilities, 192          Representative agent, 106
Power of a statistical test, 50       Revaluation, 234, 336
Present-value formula, 86, 310        Risk aversion, 10, 202
Pricing nominal contracts, pit-           Constant absolute, 10
        falls, 176                        Insurance demand, 175
Pricing to market, 285—301                Required in Lucas model to
Prior probability, 192                        match data, 182
Process switching, 311                    Risk premium compensation,
Purchasing-power parity, 80—83,               175
        207-208                       Risk neutral
    Monetary model, 85                    Forward exchange, Lucas model,
    Absolute, 209                             175
366                                                 SUBJECT INDEX

Risk neutrality, 9, 176, 203           Social Optimum, 105, 109—111
Risk pooling equilbrium, 112, 117      Social planner’s problem, 110, 141,
Risk premium                                   142
    As explanation of deviation        Spectral density function, 73, 75
        from uncovered interest        Spectral representation
        parity, 10                         Cycles and periodicity, 68
    Lucas model, 174                       Of time series, 68—74
    Lucas state contingent, 127,           Phase shift, 68
        130                            Spot transactions, 3
Risk sharing, eﬃcient conditions,      Static expectations, 230
        111                            Steady state
                                           One-country real business cy-
           S                                   cle model, 143—144
                                           Pricing-to-market model, 292
Saddle path solution, 259                  Redux model, 272—274
S-curve, 315, 321                          Two-country real business cy-
Second-generation model, 333—                  cle model, 153—154
         341                           Sticky price adjustment rule
Segmented goods markets inter-             Dornbusch model, 238
         nationally, 285                   Stochastic Mundell-Fleming
Self-fulÞlling crises, 342                     model, 242
Shadow prices, 113                     Sticky price models, 229—302
Short position (exposure), 6           Stochastic calculus, 306—308
Siegel’s paradox, 203                  Stochastic process
SigniÞcance, Statistical versus eco-       Continuous time, 306
         nomic, 217                        Diﬀusion, 306
Simulated method of moments,           Stochastic trend process, 64
         38—40                         Stochastic-diﬀerence equation
Simulated method of moments                First-order in the monetary
    Asymptotic distribution, 40                model, 85
    Estimating the Krugman model,          Nonlinear in real business cy-
         315                                   cle model, 143
Simulating one-country real busi-          Second-order in real business
         ness cycle model, 148                 cycle model, 144, 156
Simulating two-country real busi-      Strict exogeneity, 33
         ness cycle model, 158         Studentized coeﬃcient, 44
Small country assumption, 229          Survey expectations, 184—186
SUBJECT INDEX                                                    367

Swap transactions, 3                      44—50
                                        Dickey—Fuller test, 45
           T                            Augmented Dickey-Fuller test,
                                          46
Target zone, eventual collapse,         Finite sample power, Dickey-
        318                               Fuller test, 52
Technical change, deterministic,        Bhargava framework, 44—
        139                               45
Technological growth                    Testing for PPP, 217—222
    Biased, 216                        Panel data, 51—63
    Unbiased, 216                       Cross-sectional dependence,
Technology shock, 140                     53, 58
Terms of trade, 277, 280, 300           Im-Pesaran-Shin test, 60,
Tranquil peg, 7                           225
Transversality condition, 86            Levin—Lin test, 52—57, 223
Trend-cycle components decom-           Maddala—Wu test, 61—62,
        position, 138                     224
Triangular arbitrage, 3                 Potential pitfalls, 62
Triangular structure of exogenous       Testing for PPP, 222
        shocks, 246                     Size distortion, Levin-Lin
Trigonometric relations, 6971             test, 56
Turbulent peg, 7                        Size distortion, tests of PPP,
                                          226
           U
                                               V
Uncovered interest parity, 9—11
   Deviations from , 162—172        Variance ratio statistic, 50, 221
   Fama decomposition, 167—170      Vector autoregression
   Hansen-Hodrick tests, 164—           Unrestricted, 24—34
       165                               Asymptotic distribution of
   Monetary model, 85                      coeﬃcient vector, 25
Uniform distribution from a to           Cooley—Leroy critique, 31—
       b, 23                               34
Unit root                                Decomposition of forecast-
   Analyses of time series, 40—            error variance, 29
       67                                Eichenbaum-Evans 5 vari-
   Univariate test procedures,             able VAR, 249—250
368                                   SUBJECT INDEX

      Impulse response analysis,
         27
      Impulse-response standard
         errors by parametric boot-
         strap, 29
      Orthogonalizing the inno-
         vations, 28
    Structural
      Clarida-Gali SVAR (begin),
         251—256
Vector error correction model, 65—
         67
    Monetary model, 93
Vehicle currency, 2
Volatility bounds, 179—183
Volatility of exchange rates, stock
         prices, 89

           W

Welfare analysis, Redux model,
       282—284
Wiener process (Brownian mo-
       tion), 306
Wold vector moving-average rep-
       resentation, 26, 28



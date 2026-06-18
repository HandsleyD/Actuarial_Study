---
normalized_id: shared-pdf-reference-financial-mathematics
exam_code: SHARED
material_scope: financial mathematics.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Financial Mathematics.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-financial-mathematics

  KING’S COLLEGE LONDON
         DEPARTMENT OF MATHEMATICS

                Financial Mathematics
              An Introduction to Derivatives Pricing



                        Lane P. Hughston
                    Christopher J. Hunter



Share Price

$200



$150



$100



 $50



  $0                                                          Date
       July      Aug.          Sept.        Oct.       Nov.
                    Financial Mathematics
                         An Introductory Guide


                              Lane P. Hughston1
                          Department of Mathematics
                            King’s College London
                             The Strand, London
                               WC2R 2LS, UK

                           Christopher J. Hunter2
                               NatWest Group
                           135 Bishopsgate, London
                               Postal Code, UK
                                      and
                          Department of Mathematics
                            King’s College London
                             The Strand, London
                               WC2R 2LS, UK




              c
    copyright °2000 L.P. Hughston and C.J. Hunter
1
    email: lane hughston@yahoo.com
2
    email: ChristopherJHunter@yahoo.com


                                          i
   Preface
     This book is intended as a guide to some elements of the mathematics of
finance. Had we been a bit bolder it would have been entitled ‘Mathematics
for Money Makers’ since it deals with derivatives, one of the most notorious
ways to make (or lose) a lot of money. Our main goal in the book is to
develop the basics of the theory of derivative pricing, as derived from the
so-called ‘no arbitrage condition’. In doing so, we also introduce a number
of mathematical tools that are of interest in their own right. At the end of it
all, while you may not be a millionaire, you should understand how to avoid
‘breaking the bank’ with a few bad trades.
     In order to motivate the study of derivatives, we begin the book with a
discussion of the financial markets, the instruments that are traded on them
and how arbitrage opportunities can occur if derivatives are mispriced. We
then arrive at a problem that inevitably arises when dealing with physical
systems such as the financial markets: how to deal with the ‘flow of time’.
There are two primary means of parametrizing time—the discrete time pa-
rameterization, where time advances in finite steps; and the continuous time
parameterization, where time varies smoothly. We initially choose the former
method, and develop a simple discrete time model for the movements of asset
prices and their associated derivatives. It is based on an idealised Casino,
where betting on the random outcome of a coin toss replaces the buying and
selling of an asset. Once we have seen the basic ideas in this context, we then
expand the model and interpret it in a language that brings out the analogy
with a stock market. This is the binomial model for a stock market, where
time is discrete and stock prices move in a random fashion. In the second
half of the notes, we make the transition from discrete to continuous time
models, and derive the famous Black-Scholes formula for option pricing, as
well as a number of interesting extensions of this result.
     Throughout the book we emphasise the use of modern probabilistic meth-
ods and stress the novel financial ideas that arise alongside the mathematical
innovations. Some more advanced topics are covered in the final sections—
stocks which pay dividends, multi-asset models and one of the great simpli-
fications of derivative pricing, the Girsanov transformation.
     This book ia based on a series of lectures given by L.P. Hughston at
King’s College London in 1997. The material in appendix D was provided by
Professor R.F. Streater, whom we thank for numerous helpful observations
on the structure and layout of the material in these notes.

                                      ii
   For lack of any better, yet still grammatically correct alternative, we will
use ‘he’ and ‘his’ in a gender non-specific way. In a similar fashion, we will
use ‘dollar’ in a currency non-specific way.

                                             L.P. Hughston and C.J. Hunter
                                                             January 1999




                                      iii
Contents
1 Introduction                                                                 1
  1.1 Financial Markets . . . . . . . . . . . . . . . . . . . . . . . . .      2
       1.1.1 Basic Assets . . . . . . . . . . . . . . . . . . . . . . . .      2
       1.1.2 Derivatives . . . . . . . . . . . . . . . . . . . . . . . .       5
  1.2 Uses of Derivatives . . . . . . . . . . . . . . . . . . . . . . . .      8
  1.3 Derivative Payoff Functions . . . . . . . . . . . . . . . . . . .        9

2 Arbitrage Pricing                                                           13
  2.1 Expectation Pricing . . . . . . . . . . . . . . . . . . . . . . . .     13
  2.2 Arbitrage Pricing . . . . . . . . . . . . . . . . . . . . . . . . .     14
  2.3 Trading Strategies . . . . . . . . . . . . . . . . . . . . . . . .      17
  2.4 Replication Strategy . . . . . . . . . . . . . . . . . . . . . . .      20
  2.5 Currency Swap . . . . . . . . . . . . . . . . . . . . . . . . . .       20
  2.6 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       23

3 A Simple Casino                                                             24
  3.1 Rules of the Casino . . . . . . . . . . . . . . . . . . . . . . . .     24
  3.2 Derivatives . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   25
  3.3 No Arbitrage Argument . . . . . . . . . . . . . . . . . . . . .         26

4 Probability Systems                                                         29
  4.1 Sample Space . . . . . . . . . . . . . . . . . . . . . . . . . . .      29
  4.2 Event Space . . . . . . . . . . . . . . . . . . . . . . . . . . . .     29
  4.3 Probability Measure . . . . . . . . . . . . . . . . . . . . . . .       31
  4.4 Random Variables . . . . . . . . . . . . . . . . . . . . . . . . .      32

5 Back to the Casino                                                          35
  5.1 The Casino as a Probability System . . . . . . . . . . . . . . .        35
  5.2 The Risk-Neutral Measure . . . . . . . . . . . . . . . . . . . .        35
  5.3 A Non-Zero Interest Rate . . . . . . . . . . . . . . . . . . . .        37

6 The Binomial Model                                                          41
  6.1 Tree Models . . . . . . . . . . . . . . . . . . . . . . . . . . . .     41
  6.2 Money Market Account . . . . . . . . . . . . . . . . . . . . . .        43
  6.3 Derivatives . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   44
  6.4 One-Period Replication Model . . . . . . . . . . . . . . . . . .        45
  6.5 Risk-Neutral Probabilities . . . . . . . . . . . . . . . . . . . .      47

                                      iv
7 Pricing in N-Period Tree Models                                            50

8 Martingales and Conditional Expectation                                    54
  8.1 Stochastic Processes . . . . . . . . . . . . . . . . . . . . . . .     54
  8.2 Filtration . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   54
  8.3 Adapted Process . . . . . . . . . . . . . . . . . . . . . . . . .      56
  8.4 Conditional Expectation . . . . . . . . . . . . . . . . . . . . .      56
  8.5 Martingales . . . . . . . . . . . . . . . . . . . . . . . . . . . .    58
  8.6 Financial Interpretation . . . . . . . . . . . . . . . . . . . . .     58

9 Binomial Lattice Model                                                     60

10 Relation to Binomial Model                                            63
   10.1 Limit of a Random Walk . . . . . . . . . . . . . . . . . . . . . 63
   10.2 Martingales associated with Random Walks . . . . . . . . . . 64

11 Continuous Time Models                                                 68
   11.1 The Wiener Model . . . . . . . . . . . . . . . . . . . . . . . . 68
   11.2 The Normal Distribution . . . . . . . . . . . . . . . . . . . . . 69

12 Stochastic Calculus                                                       76

13 Arbitrage Argument                                                    79
   13.1 Derivation of the No-Arbitrage Condition . . . . . . . . . . . . 79
   13.2 Derivation of the Black-Scholes Equation . . . . . . . . . . . . 83

14 Replication Portfolios                                                    86

15 Solving the Black-Scholes Equation                                     89
   15.1 Solution of the Heat Equation . . . . . . . . . . . . . . . . . . 90
   15.2 Reduction of the Black-Scholes Equation to the Heat Equation 92

16 Call and Put Option Prices                                               97
   16.1 Call Option . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97
   16.2 Put Option . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101

17 More Topics in Option Pricing                                          104
   17.1 Binary Options . . . . . . . . . . . . . . . . . . . . . . . . . . 104
   17.2 ‘Greeks’ and Hedging . . . . . . . . . . . . . . . . . . . . . . . 105


                                      v
   17.3 Put-Call Parity . . . . . . . . . . . . . . . . . . . . . . . . . . 107

18 Continuous Dividend Model                                            109
   18.1 Modified Black-Scholes Equation . . . . . . . . . . . . . . . . 112
   18.2 Call and Put Option Prices . . . . . . . . . . . . . . . . . . . 113

19 Risk Neutral Valuation                                                  115
   19.1 Single Asset Case . . . . . . . . . . . . . . . . . . . . . . . . . 115

20 Girsanov Transformation                                                  121
   20.1 Change of Drift . . . . . . . . . . . . . . . . . . . . . . . . . . 122

21 Multiple Asset Models                                                 126
   21.1 The Basic Model . . . . . . . . . . . . . . . . . . . . . . . . . 126
   21.2 No Arbitrage and the Zero Volatility Portfolio . . . . . . . . . 129
   21.3 Market Completeness . . . . . . . . . . . . . . . . . . . . . . . 131

22 Multiple Asset Models Continued                                           132
   22.1 Dividends . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 132
   22.2 Martingales and the Risk-Neutral Measure . . . . . . . . . . . 133
   22.3 Derivatives . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 135

A Glossary                                                                  137

B Some useful formulae and definitions                                   140
  B.1 Definitions of a Normal Variable . . . . . . . . . . . . . . . . . 140
  B.2 Moments of the Standard Normal Distribution . . . . . . . . . 140
  B.3 Moments of a Normal Distribution . . . . . . . . . . . . . . . 141
  B.4 Other Useful Integrals . . . . . . . . . . . . . . . . . . . . . . 141
  B.5 Ito’s Lemma . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141
  B.6 Geometric Brownian Motion . . . . . . . . . . . . . . . . . . . 142
  B.7 Black-Scholes Formulae . . . . . . . . . . . . . . . . . . . . . . 142
  B.8 Bernoulli Distribution . . . . . . . . . . . . . . . . . . . . . . 143
  B.9 Binomial Distribution . . . . . . . . . . . . . . . . . . . . . . . 143
  B.10 Central Limit Theorem . . . . . . . . . . . . . . . . . . . . . . 143

C Solutions                                                                 145




                                       vi
D Some Reminders of Probability Theory                                   194
  D.1 Events, random variables and distributions . . . . . . . . . . . 194
  D.2 Expectation, moments and generating functions . . . . . . . . 195
  D.3 Several random variables . . . . . . . . . . . . . . . . . . . . . 196
  D.4 Conditional probability and expectation . . . . . . . . . . . . 199
  D.5 Filtrations and martingales . . . . . . . . . . . . . . . . . . . . 204

E The Virtues and
  Vices of Options1                                                      207

F KCL 1998 Exam                                                            209
  F.1 Question . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 209
      F.1.1 Solution . . . . . . . . . . . . . . . . . . . . . . . . . . 210
  F.2 Question . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 212
      F.2.1 Solution . . . . . . . . . . . . . . . . . . . . . . . . . . 213
  F.3 Question . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 215
      F.3.1 Solution . . . . . . . . . . . . . . . . . . . . . . . . . . 216
  F.4 Question . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 218
      F.4.1 Solution . . . . . . . . . . . . . . . . . . . . . . . . . . 219
  F.5 Question . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 221
      F.5.1 Solution . . . . . . . . . . . . . . . . . . . . . . . . . . 222
  F.6 Question . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 223
      F.6.1 Solution . . . . . . . . . . . . . . . . . . . . . . . . . . 224

G Bibliography                                                           225




                                     vii
1    Introduction
The study of most sciences can be usefully divided into two distinct but inter-
related branches, theory and experiment. For example, the body of knowledge
that we conventionally label ‘physics’ consists of theoretical physics, where we
develop mathematical models and theories to describe how nature behaves,
and experimental physics, where we actually test and probe nature to see how
it behaves. There is an important interplay between the two branches—for
example, theory might develop a model which is then tested by experiment,
or experiment might measure or discover a fact or feature of nature which
must then be explained by theory.
    Finance is the science of the financial markets. Correspondingly, it has
an important ‘theoretical’ side, called finance theory or mathematical finance,
which entails both the development of the conceptual apparatus needed for an
intellectually sound understanding of the behaviour of the financial markets,
as well as the development of mathematical techniques and models useful in
finance; and an ‘experimental’ side, which we might call practical or applied
finance, that consists of the extensive range of trading techniques and risk
management practices as they are actually carried out in the various finan-
cial markets, and applied by governments, corporations and individuals in
their quest to improve their fortune and control their exposure to potentially
adverse circumstances.
    In this book we offer an introductory guide to mathematical finance, with
particular emphasis on a topic of great interest and the source of numerous
applications: namely, the pricing of derivatives. The mathematics needed for
a proper understanding of this significant branch of theoretical and applied
finance is both fascinating and important in its own right. Before we can
begin building up the necessary mathematical tools for analysing derivatives,
however, we need to know what derivatives are and what they are used for.
But this requires some knowledge of the so-called ‘underlying assets’ on which
these derivatives are based. So we begin this book by discussing the financial
markets and the various instruments that are traded on them. Our intention
here is not, of course, to make a comprehensive survey of these markets, but
to sketch lightly the relevant notions and introduce some useful terminology.
Unless otherwise stated, all dates in this section are from the year 1999, and
all prices are the relevant markets’ closing values. If no date is given for a
price, then it can be assumed to be January 11, 1999.


                                       1
1.1     Financial Markets
The global financial markets collectively comprise a massive industry spread
over the entire world, with substantial volumes of buying and selling occur-
ring in one market or another at one place or another at virtually any time.
The dealing is mediated by traders who carry out trades on behalf of both
their clients (institutional and individual investors) and their employers (in-
vestment banks and other financial institutions). This world-wide menagerie
of traders, in the end, determines the prices of the available financial prod-
ucts, and is sometimes collectively referred to as the ‘market’. The most
‘elementary’ financial instruments bought and sold in financial markets can
be described as basic assets. There are several common types.

1.1.1   Basic Assets
A stock or share represents a part ownership of a company, typically on a
limited liability basis (that is, if the company fails, then the shareholder’s
loss is usually limited to his original investment). When the company is
profitable, the owner of the stock benefits from time to time by receiving a
dividend, which is typically a cash payment. The shareholder may also realize
a profit or capital gain if the value of the stock increases. Ultimately, the
share price is determined by the market according to the level of confidence of
investors that the firm will be profitable, and hence pay further and perhaps
higher dividends in the future. For example, the value of a Rolls-Royce share
at the close of the London Stock Exchange on January 11 was 248.5p (pence),
which was down 0.5p from the prior day’s closing value. In the previous 52
weeks the highest closing value was 309p, while the lowest was 176.5p. The
company has declared a dividend of 6.15p per share for 1998 compared with
5.9p and 5.3p per share paid in the two years previous to that.
    A bond is, in effect, a loan made to a company or government by the bond-
holder, usually for a fixed period of time, for which the bond-holder receives
a fee, known as interest. The interest rate charged is typically fixed at the
time that the loan is made, but might be allowed to vary in time according
to market levels and certain prescribed rules. The interest payments, which
are typically made on an annual, semi-annual or quarterly basis, are called
‘coupon’ payments. If a 10-year bond with a ‘face-value’ of $1000 has a 6%
annual coupon, that means that an interest rate payment of $60 is made
every year for ten years, and then at the end of the ten year period the $1000


                                      2
‘principal’ is paid back to the bond-holder. Bonds are, in some respects, a
more conservative investment than stocks, since they provide a more or less
guaranteed or ‘fixed’ income. Hence the bond market is sometimes called
the ‘fixed-income’ market. However, if the company or government issuing
the bonds defaults, and cannot or will not pay back the loan, or part of the
loan, then the bond-holder may lose his shirt. The likelihood that a borrower
will default on any part of the loan is described by the credit quality of the
borrower. There are several credit rating agencies, for example Standard &
Poor’s (S&P) and Moody’s, which assign a rating to many companies and
governments. The rating systems vary between the agencies, but given two
ratings it is generally possible to decipher which one is better by following
some simple rules—A’s are better than B’s, which are better than C’s, and
so on; and more letters are better than less so, AAA is better than A. For
example, on our fiducial date, January 11, a bond previously issued by Wal
Mart, an American retail company that has an S&P credit rating of AA, with
a maturity date of May 2002, a face-value of $100 and a coupon of $6.75 cost
$105.02. By contrast, a Croatian government bond with a credit rating of
BBB-, a maturity date of February 2002, a face-value of $100, and a coupon
of $7.00 cost $93.21. Given the similar values of maturity and coupon, the
difference in price between the bonds is due to the superior credit rating of
Wal Mart (AA) over the Croatian government (BBB-). If the credit quality
of the borrower declines, then the price of a bond issued by the borrower will
also decline. Similarly, if interest rates generally rise, then bond prices will
fall. In either case, the purchaser of a bond may find that it is worth less
that what it was previously, despite the fixed income that it provides.
Exercise 1.1 Why does the value of a bond drop if interest rates go up?
Why does the value of a bond rise if credit quality improves?
    When money is put on deposit with a bank or other financial institution
on an ‘overnight’ basis, i.e., where withdrawal on short notice is available,
then the depositor is essentially making a very short term loan to the financial
institution. The instantaneous (i.e., ‘overnight’) rate of interest paid on this
loan is called a money market rate, or ‘short term interest rate’. Money
market accounts can be very nearly ‘risk-free’, in the sense that depositors
can get their money back on short notice, if required, and the balance in the
account always goes up. As an example, a private client with an account
balance of more than £1,000,000 in a money market account with the Royal
Bank of Scotland would receive an interest rate of 6.1% per year.

                                       3
Exercise 1.2 Consider the money market account mentioned above. Sup-
pose that the interest earned every month is added to the account at the end
of the month. What is the actual annual interest rate that is earned?

Exercise 1.3 Let Bt be the amount in a money market account at time t.
Suppose that there is interest paid on the money in the account at a constant
rate r, that is, in a short time period dt, the interest that is paid is rBt dt.
Derive and solve the differential equation for Bt .

    Commodities are physical objects, typically natural resources or foods
such as oil, gold, copper, cattle or wheat. There are often additional compli-
cations associated with commodities, for example, holding costs for the stor-
age and insurance of goods and delivery costs to move them about. These
costs are representative of the intricate details that can arise in practical
finance.
    The concept of a domestic or foreign currency is, in reality, a fairly ab-
stract idea, but certainly includes the conventional ‘money’ issued by the
various countries of the world. The value of a currency, in units of other
currencies, depends on a number of factors, such as interest rates in that
country, the nation’s foreign trade surplus, the stability of the government,
employment levels, inflation, and so on. The exchange rate for immediate
delivery of a currency is called the spot exchange rate. This is the one kind of
financial asset that almost everyone has had some experience with, and you
will be familiar with the fact that the value (say in units of your own ‘domes-
tic’ currency) of a unit of ‘foreign’ currency can go up or down. Sometimes
these swings can be substantial, even over limited time horizons. Currencies
are very actively traded on a large scale in international over-the-counter
markets (that is, by telephone and electronic means). Some currency prices
are quoted to several decimal points in the professional markets. For exam-
ple, a typical ‘bid/offer’ spread for the price of sterling in U.S. dollars might
be 1.6558/1.6568. This means that the trader is willing to buy one pound
for 1.6558 dollars, and is willing to sell one pound for 1.6568 dollars. Traders
use fanciful nicknames for various rates, for example, the U.S. dollar/French
franc rate is called ‘dollar/Paris’, while the Canadian dollar/Swiss franc rate
is called ‘Candollar/Swiss’. The dollar/sterling rate is so important histori-
cally that it has a special name: ‘Cable’.




                                       4
1.1.2   Derivatives
In addition to the basic assets that we have just described, another important
component of the financial markets are derivatives, which are in essence ‘side-
bets’ based on the behaviour of the ‘underlying’ basic assets. A derivative
can also be regarded as a kind of asset, the ownership of which entitles the
holder to receive from the seller a cash payment or possibly a series of cash
payments at some point in the future, depending in some pre-specified way
on the behaviour of the underlying assets over the relevant time interval. In
some instances, instead of a ‘cash’ payment another asset might be delivered
instead. For example, a basic stock option allows the holder to purchase
shares at some point in the future for a pre-specified price.
    Derivatives, unlike the underlying assets, are in many cases directly syn-
thesized by investment banks and other financial institutions. They can
either be ‘tailor-made’ and sold directly to a specific client, or, if they are
general enough, they can be traded in a financial market, just like the un-
derlying assets. The range of possible derivatives is essentially unlimited.
However there are a number of standard examples and types of derivatives
that one should be familiar with and which we shall mention briefly below.
    The most common types of derivatives are the so-called options. An op-
tion is a derivative with a specified payoff function that can depend on the
prices of one or more underlying assets. It will have specific dates when it
can be exercised, that is, when the owner of the option can demand pay-
ment, based on the value of the payoff function. However, you are never
forced to ‘exercise the option’. Most options can only be exercised once, and
have a fixed expiration date, after which the option is no longer valid. There
are many different schemes for prescribing when an option can be exercised.
The most common examples are the so-called European options, which can
only be exercised on the expiration date, and American options, which can
be exercised at any time up to the expiration date. In this book, we shall
be concerned primarily with European derivatives, since they are mathemat-
ically much simpler, although the formalism that we build up is certainly
capable of handling the American case as well.

Exercise 1.4 What is the most money that you can lose by buying an op-
tion? Why?

   The two most common options are the call option, which gives the owner
the right to buy a designated underlying asset at a set price (called the strike

                                       5
price), and the put option which allows the owner to sell the underlying
asset at a given strike price. In London, organised derivatives trading takes
place at the London International Financial Futures and Options Exchange
(LIFFE). Among others, American call and put options on about 75 stocks
U.K. stocks are traded at LIFFE. For example, a call option on Rolls-Royce
with a strike of 240p and an expiry date of February 17, costs 19p per share,
whereas a put with the same strike and maturity costs 9.5p per share (recall
that the share price was 248.5p). In appendix E, an article from the May
2, 1885 Economist is reproduced. It contains a description of call and put
options that has not really changed much in the intervening century. We
shall give a fairly thorough treatment of the pricing of options in the sections
that follow. Note that there are options not only on underlying assets, but
also on other derivatives. For example, an option to enter into a swap is
called a ‘swaption’ (swaps are defined below).
    An index is a number derived from a set of underlying assets (it generally
is a weighted sum or average of the underlying asset prices). The most com-
mon underlying assets to use are stocks, but there are also indices based on
bonds and commodities. As examples, The Financial Times-Stock Exchange
100 (FT-SE 100) index and the Dow Jones Industrial Average (DJIA) are
indices that take their values from share prices on the London and New York
exchanges respectively.
    How is the FT-SE 100 index calculated? Well, the calculation uses the
100 largest companies by market capitalisation (share price times the number
of shares) on the London Stock Exchange. The index is simply the sum of
the market capitalisations of the 100 firms divided by an overall normalising
factor. This normalising factor was fixed at the inception of the index and is
only altered to ensure continuity of the index when the market capitalisation
of a firm used in the index calculation changes in a discontinuous way. This
can happen when new shares are issued by the firm or when it is removed
from the index calculation altogether and replaced by a new, larger firm.
The value of the FT-SE 100 index on January 11 was 6085.00.
    In contrast, the DJIA was originally based on the unweighted average
of 30 ‘industrial’ companies on the New York Stock Exchange that were
chosen to span the manufacturing sector. Over the years two things have
happened—the definition of industrial has been widened and the index now
includes, for example, companies from the entertainment, financial and food
industries, and weightings have been attached to the companies in order to
keep the index continuous, just as in the case of the FT-SE 100. The value

                                       6
of the DJIA on January 11 was 9619.89.
    The advantage of an index is that it depends on a group of assets and
hence describes a particular sector or cross-section of the market. This means
that possible spurious fluctuations in individual asset prices that are specific
to that asset, rather than to the set of all underlying assets, will have a
decreased effect on the index. Two of the most common derivatives based on
an index are call and put options. For example, four days before expiration,
an American call option on the FTSE 100 index, with a strike of 6000, a
payoff of £10 per point, and a expiry date of January 15 cost £1,265 while
the corresponding put cost £295 (recall that the index value on January 11
was 6085.00). A European call option with a strike of 6025 and the same
expiry date cost £1,085, while the put cost £340. Clearly however, the
underlying asset, the index, cannot be delivered, so instead a cash transfer
is made for the difference between the index value and the strike price when
the payoff is positive.

Exercise 1.5 How many pounds would you receive if you exercised the Amer-
ican call and put options on the FTSE? Why is this different from the market
price of the option?

    A forward contract allows the investor to fix the price now for either
sale or purchase of the underlying asset at a fixed time in the future. For
example, one might contract to buy 100 shares of Rolls-Royce in 1 year’s
time for a price of 250p per share. Forward contracts of various maturities
are in principle possible for any underlying asset and can also be negotiated
on indices.
    A swap is an agreement to exchange two underlying assets at some speci-
fied time in the future. For example, a currency swap might involve exchang-
ing n pounds for m dollars in one year.
    As with any field of knowledge, there are many specialized terms that
require explanation or definition. A position refers to the state of an investor
or trader after either buying or selling an asset or derivative. If you have
bought a financial instrument, then we say that you are long that instrument,
or have taken a long position in it; whereas if you sell it, then you are short the
instrument. Note that taking a short position means that you have actually
sold something that you do not own, however, modulo certain rules and
regulations, this is allowed by many exchanges. A portfolio is a combination
of positions in many different instruments, variously long and short. A very


                                        7
simple derivative, such as a call or put option, is described as vanilla, while
a more complicated one is refered to as an exotic derivative.

1.2    Uses of Derivatives
Derivatives are used for a variety of purposes. They can be used to reduce
risk by allowing the investor to hedge an investment or exposure, and hence
function as a sort of insurance policy against adverse market movements.
For example, if a firm needs a particular commodity, such as petroleum, on
a regular basis, then they can guard against a rise in the price of oil by
purchasing a call option. If the price of oil remains low, then the option is
not exercised and the oil is bought at the current price in the market, while
if the price rises above the strike, then the option is exercised to buy oil at a
below-market value. Derivatives can also be used to gain extra leverage for
specialized market speculation. In other words, if an investor has reason to
believe that the market is going to move in a particular way, then a larger
profit per dollar invested can be made by buying suitable derivatives, rather
than the underlying asset. But similarly, if the investment decision is wrong,
the investor runs the risk of making a correspondingly larger loss.
Exercise 1.6 Can you think of an example where a company might have
interest-rate risk? How about foreign exchange risk?
    So far we have talked about investors that buy derivatives, but there must
likewise be financial institutions selling them. These sellers are generally
investment banks, stock exchanges, and other large institutions. When selling
a derivative, the issuer makes an initial gain up-front from the fee that they
charge. They must then use the up-front money, possibly in conjunction
with borrowing, to hedge the derivative that they have sold by buying other
instruments in the market to form a hedging portfolio, in such a manner that,
regardless of the way that the prices of the underlying assets change, they
neither gain nor lose money. When the derivative expires, any payoff due to
its owner will be equal to the current value of the hedging portfolio, less any
borrowings that have to be repaid.
    But how is the value of the initial payment to be calculated? What is
the composition of the hedging portfolio? It is the principle of no arbitrage,
which asserts that in well-developed financial markets it is impossible to
make a risk-free profit from an initially empty portfolio, that is the key to
derivative pricing. If arbitrage were possible, arbitrageurs would rush in to

                                       8
take advantage of it, and thereby alter the price so that inevitably no further
arbitrage would be possible. A kind of market equilibrium is therefore es-
tablished. By requiring that no arbitrage opportunities should arise between
a derivative price and the prices of the corresponding underlying assets it is
possible to arrive at a formula for the value of the derivative. This will yield
a so-called ‘fair price’ for a derivative. In practice, a suitable commission has
to be added to the fair price, otherwise the trader would not make a profit or
even cover the execution costs associated with the creation of the derivative.

1.3    Derivative Payoff Functions
Before it is possible to price a derivative, however, we must understand its
payoff function—the amount of money that the owner of the derivative is
entitled to receive (or must pay) at a given date or set of dates in the future,
as a function of the values of one or more underlying assets at certain dates.
If we consider European options, then the payoff function depends only on
the value of the underlying assets at the expiry date, t = T .
    For a call option with strike K, the owner of the derivative only receives
a payoff if the final asset price ST is greater than the strike price K, and then
the payoff is equal to the difference in the two prices. This can be expressed
mathematically as
                              CT = max[ST − K, 0].                           (1.1)
Sometimes the more compact notation [x]+ = max[x, 0] is used. The payoff
of a call option is plotted as a function of the underlying asset price in figure
1.1.
    In the case of a put option, the payoff is only non-zero if the asset price
at expiration is less than the strike price. This is given by

                             PT = max[K − ST , 0].                          (1.2)

The payoff function of the put option is plotted in figure 1.2
    The third example of a derivative that we want to consider here is the
forward contract. A position in a forward contract differs from call and put
options in that it can have a negative payoff, that is, the investor can lose
money by owning the derivative. This is because the forward contract is not
an option; the investor is obliged to buy (or sell) the underlying asset at the
strike price previously agreed, even if it is not advantageous for him to do


                                        9
     Payoff
   $100




    $50




     $0
          $0             $50            $100             $150             $200
                                     Asset Price
Figure 1.1: The payoff function of a call option with a strike of $100 as a function of
the price of the underlying asset.

     Payoff
   $100




    $50




     $0
          $0             $50            $100             $150             $200
                                     Asset Price
Figure 1.2: The payoff function of a put option with a strike of $100 as a function of
the price of the underlying asset.


so. The payoff function is therefore the difference between the stock price ST



                                          10
and the strike price K, that is,
                                     FT = ST − K.                               (1.3)
This function is plotted in figure 1.3.

              Payoff
             $100




              $50




                $0




             -$50




            -$100
                 $0           $50         $100         $150     $200
                                     Asset Price
Figure 1.3: The payoff function of a long position in a forward contract with a strike
of $100 as a function of the price of the underlying asset.


Exercise 1.7 Suppose that a dealer sells a put option, instead of buying
one. What is the payoff function of the dealer’s position? Why might a
dealer consider selling a put option? Can you find a combination of buying
and selling calls and/or puts such that the resulting portfolio payoff function
is equal to the payoff function for a long position in a forward contract with
strike K?
Exercise 1.8 Can you find a combination of long or short positions in calls
and puts that will reproduce the following payoff functions:


                                            11
     Payoff
   $100




    $50




     $0
          $0               $50             $100             $150                $200
                                      Asset Price
Figure 1.4:    The payoff function of an option for exercise 1.8. Can you decompose it
into a combination of long and short calls and puts?




     Payoff
   $100




    $50




     $0
          $0               $50             $100             $150                $200
                                      Asset Price

               Figure 1.5: The payoff function of an option for exercise 1.8.


                                            12
2       Arbitrage Pricing
As mentioned in the previous section, arbitrage—the ability to start with
nothing and yet make a risk-free profit—is the key to understanding the
mathematics of derivative pricing. In this section we will show how it can be
used to determine a unique price for a derivative by using an example taken
from the foreign exchange markets.
      Consider the exchange rate between U.S. dollars and U.K. pounds ster-
ling. Let St be the price of one unit of sterling (i.e., one pound) in dollars at
time t. For example, we might have S0 = $1.60, which means that at time 0,
it costs $1.60 to buy one pound. We say that St is the spot price for sterling
at time t. We can contrast this with S̃t , the forward price, which is the price
in dollars contracted today, that is at time t = 0, for the purchase of one
unit of asset (in our case one pound sterling) at time t in the future.3 This
means that we agree today to buy one pound sterling at time t for the price
S̃t , paying the amount S̃t at time t on delivery of the sterling. The ‘tilde’ no-
tation is used throughout the book as a reminder that S̃t is a forward rather
than spot price. We want to calculate the value of S̃t which ensures that no
arbitrage is possible.

2.1     Expectation Pricing
One possible method for determining the forward price is expectation pricing.
In this framework, we assume that St is a random variable, and set the
forward price equal to the expected spot price at time t,

                                      S̃t = E[St ].                                  (2.1)

While at first glance this may seem reasonable, it is, unfortunately, not cor-
rect. This is because if the forward price is set by equation (2.1), then a
clever arbitrageur can, by use of a crafty series of investments in the dol-
lar and sterling money market accounts, make a risk-free profit. This is a
situtation that, so the argument goes, would not be tolerated for long. You
will have heard the old saying, “There ain’t no such thing as a free lunch”.
    3
     Note that the forward price should actually have two time indices, S̃0,t , that denote
the contract time t = 0 and the purchase time t, rather than the single time index for the
spot price. However, we shall always assume that the forward price is agreed upon today,
at time 0, and hence only the exercise time t is important


                                            13
We shall now demonstrate just how the arbitrageur is denied from dining at
others’ expense.

2.2    Arbitrage Pricing
Let r and ρ be the continuously compounded interest rates for dollars and
pounds respectively. We assume here, for simplicity, that r and ρ are con-
stant. We can then let Dt and Pt denote the values respectively of the dollar
and sterling bank accounts (money market accounts) at time t. As shown in
exercise 1.3, the value of the dollar bank account at time t is

                                  Dt = D0 ert ,                            (2.2)

while a similar relation holds for the sterling bank account, Pt = P0 eρt . Here
D0 and P0 denote the initial number of dollars and pounds put on deposit.
    We now want to consider two different trading strategies for an initial
investment of n pounds that must be converted into dollars by time t. We
would like the strategies to be deterministic, that is, they should not depend
on any random variables, but instead must yield a definite result at time t.
Since there are only two exchange rates that we know for sure, today’s rate S0
and the forward rate S̃t , then there are only two times that we can exchange
currencies without introducing some element of randomness—today, and at
time t. Consider the two investment strategies described in figure 2.1. The
‘dollar investment strategy’ converts the initial n pound investment to dollars
immediately, and has a final value of nS0 ert dollars. The ‘forward buying
strategy’ takes the opposite tack and doesn’t convert the pounds to dollars
until time t. This alternative route yields nS̃t eρt dollars. We then equate the
results of the two investment strategies, that is, we have the relation

                               nS̃t eρt = nS0 ert ,                        (2.3)

which implies that
                                S̃t = S0 e(r−ρ)t .                         (2.4)
Thus, the forward price S̃t is entirely determined by the interest rate dif-
ferential r − ρ, and not, perhaps surprisingly, by the expected value of the
spot rate E[St ]. But why did we equate the results of the two investment
strategies? The answer lies in the no arbitrage condition.
      Suppose that one could contract to sell sterling at a rate Ft , higher than
S̃t . Then, using the arbitrage strategy outlined in figure 2.2, an enterprising

                                       14
     Dollar Investment Strategy:                  Forward Buying Strategy:

 1. Start with n pounds.                      1. Start with n pounds and de-
                                              posit them in the sterling bank ac-
                                              count.
 2. Exchange the n pounds for                 2. Contract to sell neρt pounds
 dollars at time 0, using the spot            for dollars at the forward exchange
 price S0 . We now have nS0 dollars,          rate S̃t at time t. This is called a
 which we invest in a dollar bank             forward sale, since the contract is
 account.                                     made at time 0 for a sale at time
                                              t.
 3. Sit back and relax.                       3. At time t, the value of the
                                              sterling bank account will be neρt
                                              pounds.
 4. At time t the investment is               4. Convert the sterling to dollars
 worth nS0 ert dollars.                       at the contracted exchange rate S̃t
                                              (that is, execute the forward sale).
                                              The value of the dollar account is
                                              then nS̃t eρt dollars.

Figure 2.1: Two trading strategies which both begin with n pounds and 0 dollars, and
end with 0 pounds and a fixed number of dollars. Arbitrage arguments tell us that the
final number of dollars must be the same for both strategies.


but penniless arbitrageur could start with no money but end up with n(Ft −
S̃t )eρt dollars. Since Ft > S̃t , by use of this fiendishly clever strategy a sure
profit is generated without any initial investment and with absolutely no
risk, that is, arbitrage occurs. In such a case, arbitrageurs will swoop in and
take advantage of the situation, generating guaranteed profits for themselves,
and essentially forcing traders to adjust their forward prices until at last the
arbitrage opportunities disappear. In this way, the no arbitrage condition
allows us to obtain a price for the forward contract.

Exercise 2.1 Show how an arbitrageur can make a sure profit with no risk
if Ft < S̃t .


                                         15
                                    Arbitrage Strategy:

            1. Start with nothing and borrow nS0 dollars at the in-
            terest rate r. Immediately exchange these dollars at the
            spot rate S0 for n pounds, which we deposit in the sterling
            bank account.
            2. Still at time 0, contract to sell neρt pounds forward at
            time t at the given ‘high’ forward exchange rate Ft (> S̃t ).


            3. At time t, the initial loan of nS0 dollars now requires
            nS0 ert dollars be repaid, while the sterling bank account
            has neρt pounds in it.
            4. Sell the pounds in the sterling bank account (taking
            advantage of the previous contracted agreement) at the
            price Ft dollars per pound. This generates nFt eρt dollars,
            so that after repaying the loan, the remaining number of
            dollars is

                       nFt eρt − nS0 ert = neρt (Ft − S0 e(r−ρ)t )
                                         = neρt (Ft − S̃t ).             (2.5)


Figure 2.2: A trading strategy which generates a guaranteed profit if the offered forward
price Ft is greater than the no arbitrage value S̃t .




                                              16
Exercise 2.2 Suppose that the initial exchange rate is $1.60, and that the in-
terest rates are 10% and 8% (per annum) for dollars and pounds respectively.
What is the exchange rate for a two-year forward purchase?

Exercise 2.3 If the sterling interest rate is no longer time independent, but
is instead given by a steadily changing rate according to the scheme ρ(t) = a+
bt, then what is the forward exchange rate? Suppose that the initial exchange
rate is $1.60, the dollar interest rate is 10%, and the constant terms in sterling
rate are 8% and 1% for a and b respectively. What is the exchange rate for
(a) a two-year forward purchase, and (b) a four-year forward purchase?

2.3    Trading Strategies
However, it still may not be clear why we had to equate the final values of the
two trading strategies given in figure 2.1, since we ended up using a different
trading strategy (that of figure 2.2) in order to prove that a forward price
other than S̃t would imply arbitrage. In order to understand the connection
between the three trading strategies better, we should consider exactly what
it is that we mean by a trading strategy—up to this point we have been
slightly cavalier in our definitions and assumptions. For example, Dt does
not tell you how much money that you have in the dollar bank account at
time t, but rather it tells you how much a unit of the money market account
is worth. It is easy to forget that the money market account is an underlying
asset, just like a share in a company, and it can be bought and sold on the
market. This is best illustrated with a simple example. Suppose that at time
0, the money market account is worth one dollar (D0 = 1). If I buy 100
units of it, then it will cost me 100 dollars. At time t, one unit of the money
market account is worth ert dollars, and since I have 100 units, my original
investment is now worth 100ert dollars. If I sell my units, then I receive this
money and the value of my holdings in the money market becomes zero, but
the money market account is still worth Dt = ert dollars per unit.
    From this example, it should be obvious that in addition to the value of
a unit of the money market account Dt , we also need to introduce a second
quantity φt which tells you how much of the money market account that you
own. The total value of your holding is then φt Dt , that is, it is the number
of units of the money market account that you own, multiplied by the value
of each unit. We will also need to introduce a quantity ψt which is equal
to the number of units of the sterling money market account that you own.

                                       17
A trading strategy is then the pair or ‘portfolio’ (φt , ψt ) which tells you how
much of each asset that you own. ‘Buying’ an asset then corresponds to
increasing the value of φt or ψt , whereas ‘selling’ means decreasing the value.
A negative value means that we are borrowing money, or have ‘sold short’
the asset.
    Look at figure 2.3. This is a graphical representation of the trading


   ψt Pt                                            ψt0 Pt0
                                                                          neρt
   n                                                n          n            6
    6                                                6          6

             r              r         r   -                                         r   -
   0−       0−             t−        t+ time        0−         0+           t−     t+ time

        Dollar Investment Strategy                            Forward Buying Strategy

   φ t Dt                                           φ0t Dt0
                                rt     rt
                       nS0 e nS0 e                                               nS̃t eρt
            nS0          6     6                                                    6
             6

    r                                     -          r          r            r          -
   0−       0+             t−        t+ time        0−         0+           t−     t+ time


Figure 2.3: The portfolio values for the dollar investment strategy (left) and the forward
buying strategy (right).

strategies outlined in figure 2.1. The portfolios are discontinuous in time
because money can be exchanged instantaneously. The times 0− , 0+ and
t− , t+ represent left and right handed limits as time approaches 0 and t
respectively. The steps 1,2,3 and 4 in figure 2.1 correspond to the time steps
0− , 0+ , t− and t+ . Similarly figure 2.4 is a realization of the arbitrage strategy
described in figure 2.2.
     What mathematical operations can we perform on trading strategies?
Well, suppose that (φt , ψt ) is a trading strategy. Then what about its negative
(−φt , −ψt ), is this also a trading strategy? Of course it is! It is the strategy
which simply buys whenever the original strategy sells and sells whenever the
original strategy buys. How about if we had two trading strategies (φ t , ψt )
and (φ0t , ψt0 ). Could we add them together to get a new strategy, (φt +φ0t , ψt +

                                               18
                       ψt Pt
                                                neρt
                                n                6
                                 6

                         r                                r   -
                        0−      0+              t−       t+ time

                                     Arbitrage Strategy

                       φ t Dt
                                                       nFt eρt
                       nS0                               6
                        6

                                                               -
                         0−     0+               t−       t+ time

                        ?    ?
                      −nS0 −nS0
                                               ?     ?
                                          −nS0 ert −nS0 ert




            Figure 2.4: The portfolio values for the Arbitrage strategy.

ψt0 )? Again, the answer is yes! The new strategy simply performs all the buy
and sell operations of the two original strategies. In terms of portfolio value
plots, like those in figures 2.3 and 2.4, a negative trading strategy simply
reverses the direction of all the arrows, while a sum of two strategies means
that you combine all the arrows from both plots into a new one.
     We are now in a position to see exactly why we must equate the final
values of the ‘dollar investment strategy’ and the ‘forward buying strategy’.
Consider the trading strategy formed by adding the negative of the dollar
investment strategy to the forward buying strategy. What does this look like?
Well, at 0− the sterling holdings cancel and there are no dollar holdings, so
we begin with nothing. Then at time 0+ we have n pounds and −nS0 dollars.
At t− , the sterling holdings are worth neρt , while our dollar debt has mounted
to −nS0 ert . Finally, at t+ , we liquidate our sterling position and have a final
dollar holding of nS̃t eρt − nS0 ert . But since we began with nothing, in order
to avoid arbitrage we must also end with nothing, and hence we must set

                                           19
nS̃t eρt − nS0 ert = 0, which is the equivalent of equating the final values of
the dollar investment strategy and the forward buying strategy.
     This new trading strategy outlined above is easiest to follow by simply
subtracting the left hand side of figure 2.3 from the right hand side. You
should then notice a remarkable similarity to the arbitrage strategy of figure
2.4, except that Ft is replaced by S̃t . Thus, the arbitrage strategy is simply
the forward buying strategy minus the dollar investment strategy.

2.4    Replication Strategy
Any no arbitrage argument for pricing a derivative is ultimately based on a
replication strategy, which is a trading strategy that uses market instruments
to ‘replicate’ the initial and final positions required by the derivative. How
does this work? Well, given two strategies with the same initial position,
and guaranteed final positions, then these final positions must be equal.
Otherwise, by going long the strategy with the higher final value and short
the other we would generate an arbitrage.
    For example, suppose that we have a forward contract to buy one unit of
sterling for a price S̃t . Then the cash flow is very simple: at time t we receive
one unit of sterling and pay S̃t dollars. This cash flow is shown in the left side
of figure 2.5. Can we replicate this cash flow by using market instruments?
Most certainly. Start with nothing, then borrow S0 e−ρt dollars from the
bank and convert it into e−ρt pounds. At time t we shall have the required
one pound sterling, while the dollar position is short S0 e(r−ρ)t dollars. This
is shown on the right side of figure 2.5. Since the intial and final position
of the derivative cash flow and replicating strategy are the same, and their
final positions are both deterministic, then by our earlier arguments these
final positions must be equal, so S̃t = S0 e(r−ρ)t , as we have calculated several
times before. Now let us consider a slightly more complicated example.

2.5    Currency Swap
What we have done up to now is, given the current exchange rate and the
interest rates in two currencies, to determine the no arbitrage value for the
forward exchange rate at some time t in the future. However, suppose that we
know what exchange rate we would like to pay in the future, and would like
to agree on it now. This is a currency swap. Unlike the previous example it


                                       20
   Pounds                                          ψt Pt
                                 1                                                 1
                                 6                           e−ρt                  6
                                                              6
    r                                    -          r                                      -
   0−                            t     time        0−        0+                    t     time

        Derivative Cash Flow                                Replication Strategy

   Dollars                                         φ t Dt

                                                   S0 e−ρt
                                                    6
                                         -                                                 -
   0                                 t time         0−     0+                          t time
                                                   ?      ?
                                               -S0 e−ρt -S0 e−ρt
                                  ?                                                ?
                               −S̃t                                           -nS0 e(r−ρ)t


Figure 2.5: The cash flow for a forward contract is shown on the left side. We can
construct the replication strategy shown on the right such that it has the same initial and
final positions as the derivative. This allows us to determine the forward price.


may involve an initial purchase price. But identical to the previous example,
we can calculate the price of the derivative by replicating its cash flow.
    Suppose that we agree to swap nK dollars for n pounds at time t. What
is the cash flow? Well, at time 0, we receive an initial cash payment of C
dollars, which may be negative. This is the price paid by the dollar-purchaser
for the swap. At time t, the currency swap occurs and we receive n pounds
but must pay nK dollars to our counterparty. This cash flow is shown in
figure 2.6. Can we artificially construct a trading strategy that has the same
initial and final positions as the derivative?
    The first step in creating the replicating strategy is to start with C dollars
and no sterling so that the initial positions are the same. Recall that C is
the cost of the derivative (in dollars) that we are trying to calculate. If we
convert nS0 e−ρt dollars into ne−ρt pounds at time 0, then at time t this will
produce the required sterling position of n pounds. The value at time 0+


                                              21
   Pounds                                               ψt Pt
                                   n                                                    n
                                    6                            ne −ρt                  6
                                                                  6
     r                                     -             r                                      -
    0−                             t     time           0−        0+                    t     time

         Derivative Cash Flow                                    Replication Strategy

   Dollars                                              φ t Dt

    C                                                   C
    6                                                   6

                                           -                                                    -
    0                                  t time           0−       0+                         t time
                                                                ?
                                                             C − nS0 e−ρt
                                 ?                                                     ?
                               −nK                                               (C − nS0 e−ρt )ert


Figure 2.6: The cash-flow for a dollar-pound currency swap is shown on the left. The
sterling-purchaser receives an initial amount C in dollars. This is the ‘cost’ of the swap.
Then at time t, he receives n pounds and pays nK dollars to his counterparty. On the right
is a replicating strategy which reproduces the swap cash-flow. Starting with C dollars,
nS0 e−ρt dollars are converted into pounds. At time t this will produce the required sterling
position. We can then adjust the value of C such that the dollar position is also equal to
the required swap value, which therefore uniquely determines the cost of the swap.


of the dollar account is C − nS0 e−ρt dollars, and hence at time t it will be
worth (C − nS0 e−ρt )ert dollars. What do we do next? Well, just as in the
previous example, we set the value of the replicating position equal to that
of the derivative. Anything would else allow arbitrage. Thus
                              ³                     ´
                                  C − nS0 e−ρt ert = −nK                                        (2.6)

This allows us to solve for the purchase price C,
                                                ³                      ´
                            C = ne−rt S0 e(r−ρ)t − K
                                                ³            ´
                                  = ne−rt S̃t − K                                               (2.7)

Hence the price that the dollar-purchaser must pay for a currency swap where

                                                22
n pounds are exchanged for nK dollars is n(S̃t − K)e−rt dollars. The repli-
cation strategy is shown in the right side of figure 2.6. Note that the value of
K that yields a zero price for the currency swap is the forward rate S̃t . That
is why there is no cost for either party to enter into a forward contract.

2.6    Summary
The principle of no arbitrage may be the key to understanding derivative
pricing, but what kind of law is it? It is clearly not a fundamental law of
nature, and is not even always obeyed by the markets. In some ways it is
similar to Darwin’s theory of natural selection. An institution that does not
price by arbitrage arguments the derivatives that it sells will suffer relative
to institutions that do. If the price is set too high, then competitors will
undercut it; if the price is too low, then the institution will be liable to
market uncertainty as a hedging portfolio cannot be properly constructed.
In the competitive world of finance, such an institution would not last long.
    There is a crucial point to take away from this section, and to which we
shall come back again and again in the course of this book. It is that the
actual probabilities of what might happen to the exchange rate (or any other
underlying asset) are not important. This is because the expectation of a
random variable, such as the exchange rate, may give a good idea of what
the exchange rate may be in the future, but it leaves too much to chance.
What matters instead, is that we can create a trading strategy such that
there is no uncertainty in the outcome. By creating a risk-free strategy that
also replicates the derivative payoff function, we can uniquely determine the
no arbitrage price for the derivative.




                                      23
3     A Simple Casino
When it comes right down to it, putting money into the financial world can
be a bit of a gamble. So there is really no better way to begin thinking about
financial mathematics than by looking at betting in a Casino, which is every
bit a gamble. To meet our sophisticated tastes, we will be betting in a deluxe
Casino that allows not only standard wagers, but also ‘side-bets’ which we
shall call derivative bets. Our Casino analogy will turn out to be a very
simple, but highly effective, model for a stock market. After laying down
the rules for gambling and investigating the nature of ‘ordinary’ bets, the
goal will be to find a price for the derivative bets by use of the no arbitrage
condition.

3.1    Rules of the Casino
Suppose that we make our way into a Casino that allows gamblers to make
bets on the outcome of a coin flip. While this is probably one of the simplest
Casinos imaginable, we can make it a more interesting place by increasing
the complexity of the bets that can be made on the result of the coin toss.
   At time 0, just before the coin toss, the initial stake for a bet is S0 dollars,
which you pay to the Casino. The amount that you receive back from the
Casino at time t, just after the coin toss, is St dollars, which for the ‘standard’
bet we define to be U dollars (‘up’) for heads and D dollars (‘down’) for tails.
For example, we could take

                S0 = $2.00,     U = $3.00,     and    D = $1.50.             (3.1)

In this case, we place $2.00 on the the table, and if the outcome is heads we
get $3.00 back, while if the outcome is tails, then we only get $1.50 back. In
addition to this ‘standard’ bet, we can also make a short bet. This means
that at time 0 the Casino pays you S0 dollars to enter the game, but then
you have to pay the Casino St dollars at time t, so the actual amount that
you have to pay depends on the outcome of the coin flip. Under this naming
scheme, the standard bet is actually a long bet. Since we can place both long
and short bets with the same initial stake, the roles of the Casino and player
are symmetric in our simple model. In a real Casino this is not, of course,
the case, and the rules of the various games are designed so that the Casino
will on average make money.


                                        24
    Since the Casino is trying to encourage gambling, it is willing to lend
money at no charge. It will also hold your money for you, however no interest
is earned. Thus, we can think of the Casino as having a money market
account where the risk-free interest rate is zero.

Exercise 3.1 Using a simple arbitrage argument, show why we must have
U > S0 > D.

   The Casino is a chaotic place, but the organisers and participants are
known to be honest. That is, the rules of the Casino are always obeyed. We
are not told whether the coin is ‘fair’ (50-50), nor is there any implication
that it is. We suspect that it isn’t fair, and after watching play for a few
hours and making use of the law of averages, we conclude that the relevant
probabilities are

                        Prob[H] = p and Prob[T ] = q,                           (3.2)

where H, T stand for heads and tails respectively, and p + q = 1. We are
also worried that these probablities may change over time.
    Clearly the expected payoff from a standard bet is E[St ] = pU + qD
dollars. But there is no reason (a priori) to suppose that the initial stake
satisfies S0 = E[St ]. This is the expectation hypothesis, which we saw in the
previous section is generally wrong. If S0 < E[St ], then anyone willing to
play this game is risk-averse, that is, they expect some profit, on average, for
taking risk. If S0 > E[St ], then players, on average, pay to take risk (which is
typical for a Casino), and are risk-preferring. If S0 = E[St ], then the players
are risk-neutral, since they expect to neither gain nor lose money if they play
for a long time.

3.2     Derivatives
A derivative is a kind of side-bet, with a prescribed payoff that depends on
the outcome of the coin flip. The Casino is happy to allow derivative bets
by special arrangement. In a typical contract, a player pays an initial bet f0
at time 0, and then receives a payoff of ft (St ) dollars at time t, where ft (St )
is a prescribed function of the random variable St . A derivative contract is
defined by its payoff function ft (St ) and its purchase price f0 . It is possible, in
principle, for f0 to be negative, which by convention means that the Casino
pays the player to enter into the contract. Note that ft (St ) can also, in

                                         25
principle, be negative, in which case the player has to pay the Casino at time
t.
    For example, we can consider the important case of a call option, which
has a payoff function
                            ft (St ) = max[St − K, 0],                    (3.3)
where K is a fixed number of dollars, known as the strike price, such that
U > K > D. By construction, the call option pays off only when St = U .
Note that many options, even if they are based on an underlying asset, do
not necessarily involve the buying or selling of the underlying, but rather the
cash difference between the asset value and the strike price is transferred if
the terminal value of the asset exceeds the strike (assuming that the option is
a call). In cases where the underlying is not transferrable, such as an option
on a stock index, or the outcome of a coin flip, then a cash transfer is the
only possibility. We could also consider a more complicated derivative, with
a payoff function such as
                        ft (St ) = αSt3 + βSt2 + γSt + δ,                   (3.4)
where α, β, γ, δ are constants. The pricing of an exotic derivative, like this
one, is computationally more difficult than for a vanilla one, such as the call
option above, however, mathematically they are given by the same general
formula.
    Now we need to determine the price f0 that someone should pay at time
0 to buy a derivative that pays off ft (St ) dollars at time t. A plausible guess
is
                           f0 = E[ft (St )]
                              = pft (U ) + qft (D),                         (3.5)
which represents the expected payoff of the derivative, that is, the probability
weighted average of the possible payoffs. This guess is another typical ex-
ample of the ‘expectation hypothesis’. As before, it is wrong. So how do we
determine f0 ? Just like in the simple currency model of section 2, we want
to use a no arbitrage condition to determine the correct price.

3.3    No Arbitrage Argument
Suppose that instead of dealing directly with the Casino, the player instead
goes through an intermediary known as the dealer or trader. Then, if the

                                       26
gambler purchases a derivative from the dealer, the dealer gets f0 dollars
at time 0, and must pay ft (St ) dollars back to the player at time t. The
dealer does not want to take any risk, and hence must hedge his derivative
position by making a standard bet with the Casino, in a manner that we shall
describe. Rather than making a full-sized bet, the stake for this standard
bet is only δS0 . The idea is that the dealer will choose δ such that the total
payoff at time t is independent of the result of the coin flip, and hence a
guaranteed amount.
    To calculate the required value of δ, we note that at time t the dealer
gets δSt dollars from the Casino, but has to pay ft (St ) dollars to the player.
So the dealer’s net payoff at time t is δSt − ft (St ) dollars. Since the dealer
wants this potentially random amount to be independent of the outcome of
the coin flip, we need to force the two possible payoffs to be the same, that
is, we require that
                          δU − ft (U ) = δD − ft (D).                      (3.6)
But, we can solve this for δ to get

                                   ft (U ) − ft (D)
                              δ=                    .                      (3.7)
                                        U −D
This value of δ is called the hedge ratio. If the dealer makes a standard bet
with the Casino in this quantity, that is, with initial stake δS0 dollars, then
his obligation to the player (through the derivative) is ‘hedged’.

Exercise 3.2 Calculate the value of dealer’s payoff for the hedged bet.

    We can now apply the no arbitrage argument. Suppose that the dealer
starts with nothing. At time 0 he sells the derivative to the player and receives
f0 dollars, while at the same time he makes a basic bet with the Casino for
δS0 dollars. After completing these two transactions the dealer will have
f0 − δS0 dollars left over, which is put into the bank account. At time t,
after the coin toss, the dealer obtains the guaranteed amount δSt − f (St ).
In addition, he has money in the bank account, although since it has not
earned any interest it is still worth f0 − δS0 dollars. Thus, the net value of
the dealer’s position at time t is f0 − δS0 + δSt − ft (St ) dollars. But this is
a risk-free amount, and since the dealer started with nothing, he must end
with nothing, so
                          f0 − δS0 + δU − ft (U ) = 0,                      (3.8)


                                       27
or equivalently,
                         f0 − δS0 + δD − ft (D) = 0.                       (3.9)
This relation can be used to solve for the correct price f0 of the derivative.
We get
              f0 = ft (U ) + δ(S0 − U )
                              ft (U ) − ft (D)
                 = ft (U ) +                   (S0 − U )
                                   U −D
                   ft (U )(U − D) + [ft (U ) − ft (D)](S0 − U )
                 =
                                        U −D
                   ft (U )[S0 − D] − ft (D)[S0 − U ]
                 =
                                   U −D
                           S0 − D             U − S0
                 = ft (U )           + ft (D)        .                    (3.10)
                           U −D               U −D
Note that it was only possible to apply this argument because the dealer al-
ways gets the same payoff from his hedged position, that is, it is independent
of the actual outcome of the coin flip.
    The derivative price calculated in equation (3.10) can be summarised
succintly by writing
                          f0 = p∗ ft (U ) + q ∗ ft (D),                  (3.11)
where
                           S0 − D                   U − S0
                     p∗ =         , and q ∗ =              .               (3.12)
                           U −D                     U −D
A quick calculation will confirm that p∗ , q ∗ > 0 and p∗ + q ∗ = 1, which means
that f0 can be interpreted as a kind of weighted average of the outcomes
ft (U ) and ft (D), where the weights are given by the numbers p∗ and q ∗ .
Exercise 3.3 Show that an arbitrageur can make a sure profit if the deriva-
tive is priced other than at f0 .
    The price f0 does not depend in any way on the actual weighting of the
coin as given by the probabilities p, q. In fact, the price f0 is completely
determined once we know the Casino rules, that is, the basic stake S0 , the
payoffs U and D, and the derivative payoff contract specification ft (St ). This
independence from ‘real’ or ‘physical’ probabilities is one of the ‘mysterious’
features of derivative pricing in general, as we shall see, that already applies
very clearly in this somewhat simplistic, but nevertheless very important
example.

                                       28
4     Probability Systems
Here we shall digress briefly to review some basic ideas in probability. We
need to acquire an understanding of the different parts of a probability system
and how they fit together. In order to make some sense of it all, we shall
find it useful to think of a probability system as a physical experiment with
a random outcome. To be more concrete, we shall use a specific example to
guide us through the various definitions and what they signify.
    Suppose that we toss a coin three times and record the results in order.
This is a very simple experiment, but note that we should not necessarily
assume that the coin toss is fair, with an equally likely outcome for heads or
tails. After all, life is rarely as fair as we would like it to be, and we need to
be prepared for this. Joking aside, the reason for this chapter is to make it
clear that there can, in principle, be many different probabilities associated
with the same ‘physical experiment’. This will have an impact on how we
price derivatives.

4.1    Sample Space
The basic entity in a probability system is the sample space, usually denoted
Ω, which is a set containing all the possible outcomes of the experiment. If
we denote heads by H and tails by T , then there are 8 different possible
outcomes of the coin-tossing experiment, and they define the sample space
Ω as follows:
      Ω = {HHH, HHT, HT H, HT T, T HH, T HT, T T H, T T T }.                (4.1)
We formalize the concept of a sample space in the following definition,
Definition 4.1 The sample space Ω = {ωi }N
                                         i=1 is the set of all possible
outcomes of the experiment.
Note that we are assuming that the sample space is finite. This is applicable
to the discrete time formalism that we are developing in our discussion of
the Casino and the binomial model that follows on from this, but will have
to be modified for the continuous time formalism that is to come later.

4.2    Event Space
We are eventually going to want to talk about the probability of a specific
‘event’ occurring. Is the sample space, simply as given, adequate to allow

                                       29
us to discuss such a concept? Unfortunately, the answer is “not quite”.
This is because we want to ask more than just, “What is the probability
that the outcome of the coin toss is a specific element of the sample space,
say HT H?” We also want to ask, “What is the probability that the out-
come of the coin toss belongs to a certain subset of the sample space, for
example {HT T, HT H}?”. We refer to subsets of Ω as events. For exam-
ple, {HT T, HT H} is the event that the coin tosses result in either HT T or
HT H. Thus, the question to ask is, “What is the probability that such-and-
such a specific event occurs?”. In order to be able to answer this, we need
the concept of the set of all the events that we are interested in. This is
called the event space, usually denoted Σ.
    What conditions should an event space satisfy? The most ‘basic’ event
is Ω itself, that is, the event that one of the possible outcomes occurs. This
event has probability one, that is, it always happens. It would thus make
sense to require the event space to contain Ω. Likewise, we shall assume
that the ‘null’ event ∅, which occurs with probability zero, is also in the
event space. Next, suppose that the events A = {HT T, T HH} and B =
{HT H, HHH, HT T } are elements of Σ. It is natural to be interested in the
event that either A or B occurs. This is the union of the events, A ∪ B =
{HT T, T HH, HT H, HHH}. We would like Σ to be closed under the union
of two of its elements. Finally, if the event C = {HHH, HT H, HT T } is an
element of Σ, then the probability of it occurring is one minus the probability
that the complementary event Ω − C = {HHT, T T T, T T H, T HT, T HH}
occurs. Hence if an event is in Σ, we would also like its complement to be in
Σ. We can summarise the definition of the event space as follows.
Definition 4.2 The event space Σ is a set of subsets of the sample space
Ω, satisfying the following conditions:
  1. Ω ∈ Σ.
  2. if A, B ∈ Σ, then A ∪ B ∈ Σ.
  3. if A ∈ Σ, then Ω − A ∈ Σ.
Note that for our purposes, we can take Σ to be the power set (the set of all
subsets) of Ω. The power set of our example system is perhaps just slightly
too large to comfortably write out. It contains 28 = 256 elements.
Exercise 4.1 Show that the power set of Ω is a valid event space. Write
down the power set generated by two coin tosses.

                                      30
Exercise 4.2 How about the set {∅, Ω}? Does it satisfy the definition of an
event space?

    The system consisting of the sample space and the event space (Ω, Σ)
might appropriately be called a ‘possibility system’, as opposed to a ‘prob-
ability system’ because all that it tells us are the possible outcomes of our
experiment. It contains no information about how probable each event is.
The so-called ‘probability’ measure is an additional ingredient, that must be
specified in addition to the pair (Ω, Σ).

4.3    Probability Measure
Now suppose that we want to assign a probability to each event in Σ. We
can do this by means of a probability measure P : Σ → [0, 1]. For any event
A ∈ Σ, P [A] is the probability that the event A occurs. For example, if the
coin is fair, then the probability of any event XY Z occurring (where X, Y ,
Z can be either H or T ) is clearly 1/8. Sometimes, instead of writing P [A]
for the probability of event A, we write Prob[A] to make the notation more
explicit.
    Now, what conditions should we place on a probability measure? We have
already constrained its values to lie between zero and one. Since the event
Ω always occurs, its probability is one. Finally, if we have two disjoint sets,
then the probability of their union occurring should be equal to the sum of
the probabilities of the disjoint sets. For example,

         Prob[{HHH, T T T }] = Prob[{HHH}] + Prob[{T T T }]
                               1
                             =   .                                        (4.2)
                               4
Combining these constraints leads to the definition

Definition 4.3 A probability measure P is a function P : Σ → [0, 1]
satisfying

  1. P [Ω] = 1.

  2. if σ, ρ ∈ Σ and σ ∩ ρ = ∅, then P [σ ∪ ρ] = P [σ] + P [ρ].

Taken together, the sample space, event space and probability measure form
a so-called probability system, denoted P = (Ω, Σ, P ).

                                      31
Exercise 4.3 Assume that Σ is the power set of Ω, and that Ω has a finite
number of elements. Show that a probability measure is uniquely defined by
its action on the single element sets of Σ.

Exercise (4.3) demonstrates why we can sometimes get away with only talking
about the sample space Ω and ignoring the more complicated event space Σ.
For example, if Ω = {ωi }N  i=1 is the sample space, then we call the set of
                       N
numbers {pi = P [ωi ]}i=1 the probabilities of Ω. Knowing the ‘probabilities’
of Ω is then equivalent to knowing the full probability measure P , and so,
as long as the sample space is finite, we can use either formulation when
discussing a probability system P.
    The key point to stress here is that we can in principle consider various
probability measures on the same sample and event spaces (Ω, Σ). This turns
out to be very useful in financial analysis. In our coin tossing example, we
have already considered the probability measure P that we obtain if the
coin that we are tossing is fair. However, we could also define a probability
measure Q : Σ → [0, 1] that is based on an ‘unfair’ coin. Suppose that for
the unfair coin we get heads with probability 1/3, and tails with probability
2/3. Then the probability measure is defined by the probabilities
                                1
              Q({HHH})       = 27
                                                            2
              Q({HHT })      = q({HT H}) = q({T HH}) = 27
                                                          4               (4.3)
              Q({HT T })     = q({T T H}) = q({T HT }) = 27
                                8
              Q({T T T })    = 27 .

Both measures are, in principle, valid to consider, so that when we are talking
about probabilities related to the coin tossing, we must specify whether we
are ‘in’ the probability system P = (Ω, Σ, P ), ‘in’ the probability system
Q = (Ω, Σ, Q), or possibly ‘in’ some other system based on another weighting
of the coins.

Exercise 4.4 What is the probability in the system P that there are exactly
two heads? What about in the system Q?

4.4    Random Variables
The final concept that we want to think about is that of a ‘real-valued func-
tion’ X defined on the sample space Ω. Thus X : Ω → < assigns to each


                                      32
element ωi of Ω an element of <, that is, a real number. We call such a func-
tion a random variable. Even though the function is itself deterministic, that
is, if we give X a definite input then we get a definite output, its argument
ωi is the random outcome of our physical experiment and hence X(ωi ) is also
random. For example, X could be the function that counts the numbers of
heads,
               X({HHH}) = 3
               X({HHT }) = X({HT H}) = X({T HH}) = 2
                                                                         (4.4)
               X({HT T }) = X({T T H}) = X({T HT }) = 1
               X({T T T }) = 0.
As a second example, X could be twice the difference between the number
of heads and the number of tails; or as a third example X could be 1 for
the element HHH and 0 for all the other elements of Ω. While these are
all different functions, they do have one important thing in common: they
are defined independently of any probability measure. That is, they depend
on the ‘possibility system’ (Ω, Σ), but not on a particular probability system
(Ω, Σ, P ). Thus we could change probability measures from P to Q, and the
values of X would be unaffected.
    However, what would be affected by a change of probability measure is
the probability that X would take on some given value. In particular the
expectation of X, which is the probability weighted sum over the sample
space of the possible values of the random variable, will depend on the prob-
ability measure that we are using. This is obvious from the formula for the
expectation,
                                    n
                       E P [X] =
                                    X
                                          P ({ωi }) X(ωi )
                                    i=1
                                    Xn
                                =         pi X(ωi ),                     (4.5)
                                    i=1

which clearly depends in a crucial way on the probability measure. The
notation E P [X] is used to denote the expectation of the random variable X
with respect to the probability system P.
    Going back to our example, suppose that we are in the ‘fair-coin’ proba-
bility system P. Then the expectation of the random variable X that returns
the number of heads is
                                E P [X] = 1.5,                          (4.6)


                                     33
while in the unfair ‘weighted-coin’ system Q, the expectation is

                                E Q [X] = 1.                            (4.7)

So we have explicitly verified that the expectation of a random variable de-
pends on the probability system that we are using. If it is obvious which
possibility system that we are ‘in’, then we will talk about expectation with
respect to the relevant probability measure P , rather than with respect to
the probability system P = (Ω, Σ, P ).

Exercise 4.5 Verify the expectation values calculated above in equations 4.6
and 4.7 . Calculate the expected values for the other two random variables
described in the text for both P and Q.




                                     34
5     Back to the Casino
In this chapter we want to look at two things relating to the Casino. First,
we want to use the results of the previous chapter on probability systems to
interpret the derivative pricing result of chapter 3, and second, we want to
add in a non-zero interest rate. A non-zero interest rate affects the hedging
of the bet because it means that we have to pay in order to borrow money
to construct a hedged bet. This added cost must be added to the derivative
price in order to ensure that no arbitrage is possible.

5.1     The Casino as a Probability System
We begin by using the results of chapter 4 to describe the Casino as a proba-
bility system. The sample space Ω is simply the set of the two possible events,
{H, T }. The event space is the power set of this, Σ = {∅, {H}, {T }, Ω}.
These two sets define the ‘possibility’ system, (Ω, Σ). The payoff function St
for a basic bet is a random variable defined on the possibility system, as is
any arbitrary derivative payoff function ft (St ).
    As shown in exercise 4.3, we can uniquely define a probability measure
by its action on the sample space. We therefore can define the ‘physical’
probability measure P by
                       P [{H}] = p      and     P [{T }] = q.               (5.1)
What is it that this measure describes? Very simply it tells us the actual or
physical probability of the coin toss being heads or tails. However, a key point
of the derivative calculation was that the initial price of a derivative bet does
not involve these physical probability values. That is why the expectation
hypothesis fails. However, we can define a probability measure related to the
derivative pricing formula.

5.2     The Risk-Neutral Measure
Recall that in chapter 3 we found that the price of a derivative bet based on
the ‘no arbitrage’ valuation is given by the formula
                            f0 = p∗ ft (U ) + q ∗ ft (D),                   (5.2)
where
                            S0 − D                    U − S0
                     p∗ =              and     q∗ =          .              (5.3)
                            U −D                      U −D

                                         35
The first thing to note is that p∗ and q ∗ satisfy p∗ , q ∗ ≥ 0 and p∗ + q ∗ = 1.
This means that we can define a probability measure P ∗ by

                     P ∗ [{H}] = p∗     and     P ∗ [{T }] = q ∗ ,          (5.4)

and hence a probability system P ∗ = (Ω, Σ, P ∗ ). When calculating expecta-
tions in the P ∗ system we will abbreviate the notation by writing E ∗ instead
of E P . Note that the probability measure P ∗ has nothing to do with the
       ∗


‘physical’ probability measure P .
    Suppose that we take the expected value of the derivative payoff function
with respect to the P ∗ probability system. This yields

                       E ∗ [ft (St )] = p∗ ft (U ) + q ∗ ft (D)
                                      = f0 .                                (5.5)

In other words, the value of the derivative is given by the expectation of its
payoff function with respect to the new probability system P ∗ .
   Moreover, in the special case when the derivative payoff function is simply
the standard bet ft (St ) = St , we see that

                    E ∗ [ft (St )] = E ∗ [St ]
                                   = p∗ U + q ∗ D
                                     S0 − D       U − S0
                                   =           U+        D
                                     U −D         U −D
                                   = S0 .                                   (5.6)

We already know, of course, that the value of a derivative that pays off St
dollars at time t is by definition S0 dollars. This is simply a statement of the
Casino rule that the basic stake of S0 dollars pays off St dollars. But now we
see that
                                   S0 = E ∗ [St ].                         (5.7)
In other words, the new probabilities p∗ and q ∗ are precisely the ‘physical
weightings’ that the coin must have if the stake S0 were equal to its expected
value at time t. If this is the case then the expectation hypothesis actually
gives the correct price for derivatives!
    We can interpret the P ∗ probability system in terms of the amount of risk
that a player is willing to take. If a player has no preference whether he (a)
holds onto his initial stake of S0 dollars, or (b) bets it with an expected return

                                         36
of E[St ] dollars, then the two strategies must have the same value to him,
that is, S0 = E[St ]. Such players are called risk-neutral, or risk-indifferent
and expect that if they play many times, they will neither gain nor lose
money. For risk-neutral players to bet, the actual coin probabilities must be
p = p∗ and q = q ∗ . Thus, we call the probability measure P ∗ the risk-neutral
measure and the probability system P ∗ = (Ω, Σ, P ∗ ) the risk-neutral system.
    In reality, we expect that players are either investors, who are by nature
risk-averse, only playing if S0 < E[St ], or gamblers, who are risk-preferring,
and are willing to play if S0 > E[St ] (which corresponds to a risk-averse
Casino).

5.3    A Non-Zero Interest Rate
Suppose that the Casino bank begins to charge interest on borrowed money
at a continuously compounded rate r. Similarly, it pays interest on deposits
at the same rate. As in the foreign exchange example of chapter 2, the value
of the interest rate will affect the derivative price. We therefore need to find
the new value for the purchase price f0 of a derivative, again by using a no
arbitrage argument.
    Consider the following scenario for a dealer who starts with nothing. At
time 0 he sells a derivative with payoff function ft (St ) to a gambler. He
receives f0 dollars for selling the derivative and then hedges it by making a
basic bet of δS0 dollars with the Casino. As in the zero interest rate case, the
dealer wants his payout to be independent of the outcome of the coin toss,
so he picks δ such that δU − ft (U ) = δD − ft (D). Solving this equation for
the hedge ratio we find that is still given by equation (3.7)
                                  ft (U ) − ft (D)
                             δ=                    ,                       (5.8)
                                       U −D
and therefore is not affected by the presence of a non-zero interest rate.
However, the dealer’s basic bet is financed by borrowing δS0 − f0 dollars
from the bank at the interest rate r. Note that if δS0 − f0 is negative, then
the dealer deposits some money in the bank and gets it back with interest at
time t.
    Now that we have described what happens before the coin toss, we need
to turn our attention to what happens after it. The dealer gets δSt dollars
from the Casino for his basic bet, but has to pay ft (St ) dollars to the player
as part of the derivative contract. By the construction of the hedged bet,

                                      37
this amount, δSt − ft (St ) dollars, is a guaranteed quantity. Furthermore, the
amount that the dealer owes the Casino bank, (δS0 − f0 )ert dollars, is also
a guaranteed quantity. Hence the dealer’s final position is risk-free. Since
he starts with no money, a guaranteed profit would be an arbitrage. This
implies that in an arbitrage-free Casino the dealer’s final position must be
zero,
                       δSt − ft (St ) − (δS0 − f0 )ert = 0.               (5.9)
If we substitute in for the hedge ratio δ from equation (5.8), then we can
solve this equation for f0 to obtain
                          f0 = e−rt [p∗ ft (U ) + q ∗ ft (D)],             (5.10)
where
                        S0 ert − D               U − S0 ert
                   p∗ =              and q ∗ =              .          (5.11)
                         U −D                      U −D
   We can define the risk-neutral probability measure P ∗ for the Casino with
non-zero interest rates by setting the probabilities to be
                     P ∗ [{H}] = p∗      and     P ∗ [{T }] = q ∗ .        (5.12)
The derivative price can therefore be written as
                               f0 = e−rt E ∗ [ft (St )],                   (5.13)
where E ∗ [X] is the expectation of a random variable X using the risk-neutral
measure P ∗ . This arbitrage argument differs from the zero interest rate case
only in the fact that the dealer has to pay interest on the money borrowed
to finance the initial hedged bet. The original argument and its values for
f0 , p∗ and q ∗ are recovered if we set r = 0 in the above result.
     What is the significance of the factor e−rt in the derivative price? We can
think of it as follows. If a sure sum of money Xt is to be delivered at time t,
then its present value X0 is given by X0 = P0t Xt , where P0t is the discount
factor. In general, we require that 0 ≤ P0t ≤ 1, and that P0t is a decreasing
function of t. For example, if r is a constant and P0t = e−rt , then we say that
we have constant interest rates. The discount factor arises because of the
time-value of money, which takes into account the fact that a fixed amount
of money is worth more now than the same amount of money will be in the
future. This is because the risk-free interest rate allows the value of an initial
amount of money to grow in time. So the factor e−rt in the derivative price
can be thought of as a discount factor that is applied because the derivative
pays out at a time t in the future, rather than at t = 0 when it is purchased.

                                          38
Exercise 5.1 Why must P0t be a decreasing function of t?
     As we shall see in the following sections, the formula f0 = e−rt E ∗ [ft (St )] is
a good prototype for derivative pricing in general. In words, it says that the
present value of a derivative is equal to the discounted value of the risk-neutral
expectation of its payoff. Note, once again, that to value the derivative we do
not need to know the actual probabilities p and q for the results of the coin
flip.
     We can verify the price for the special case of a derivative that pays off
ft (St ) = St . We have

                   f0 = e−rt E ∗ [St ]
                      = e−rt (p∗ U + q ∗ D)
                                     rt
                                              U − S0 ert
                             Ã                             !
                          −rt S0 e − D
                      = e                  U+            D
                                  U −D         U −D
                      = S0 .                                                    (5.14)

This shows that a derivative that has the same payoffs as the basic bet also
has the same initial price.

Exercise 5.2 In the case where there is an interest rate r, show how an
arbitrageur can still make a profit without risk if the dealer mispriced the
derivative.

Exercise 5.3 Suppose that the basic stake is $100, while the basic payoffs
are $105 and $95, for heads and tails respectively, and ert = 1.01. The actual
probabilities of heads and tails are p = .8 and q = .2.
 (a) Calculate the risk-neutral probabilities p∗ and q ∗ .

 (b) Calculate the price of a derivative that pays off the value 5 for heads
     and nothing for tails. This is really a call option with a strike of $100.

 (c) What is the value of the hedge ratio δ?

 (d) Verify that the payoff of a bet consisting of being long δ units of the
     basic bet, and short one derivative is independent of the coin toss.

 (e) What is the price of the derivative if the actual probabilities of heads
     and tails are p = 0.3 and q = 0.7?

                                          39
    Why do people gamble? Surely the answer must be that, despite losses
on average in cash terms, there is an implicit benefit—that is, an intangible
yield in the form of (say) pleasure, a fun evening out, interesting company,
the thrill of living dangerously, satisfaction of an uncontrollable urge, or
something along these lines. For fear of lapsing into a state of arm-chair
psychology, let us not say more on this. The implicit benefit obtained in this
way is formalised in the concept of a convenience yield. It is possible to price
derivatives using a particular convenience yield but this method suffers from
the fact that every player will have a different yield, and so no scheme that
will satisfy every gambler is possible. The advantage of arbitrage pricing is
that it is independent of the wishes or views of the players, and therefore can
be uniquely defined.
    Summing up, we have seen here that the value of a derivative in the Casino
is given by the discounted risk-neutral expectation of its payoff function,
f0 = e−rt E ∗ [ft (St )], where P ∗ is the unique system of probabilities such that
S0 = e−rt E ∗ [St ]. These relations were derived by applying the no arbitrage
condition to a hedged and hence risk-free bet.

Exercise 5.4 Verify that the risk-neutral measure P ∗ , defined by equation
(5.11), is the unique probability measure that satisfies S0 = e−rt E ∗ [St ], that
is, the basic bet is equal to its discounted expectation.




                                        40
6     The Binomial Model
We return once more to the Casino, but this time we give it a different
interpretation: as a simple idealisation of a stock market. The ‘stake’ S0
at time 0 is now interpreted as the price of an asset. One can think of
this as a ‘chip’ or ‘one share’. As a consequence of the ‘coin flip’, which
represents a random movement in the stock price, the asset is worth either
more (S1 = U ), or less (S1 = D) at t = 1. Thus, we have a very elementary
model for a ‘stock market’, in this case a ‘one-period’ market, since there is
only one time step. In this chapter we shall expand this model and give the
definition and construction of n-period markets before pricing derivatives in
a one-period market. In the next chapter we turn our attention to the value
of derivatives in an n-period market. The techniques that we introduce here,
although very elementary in nature, have wide applications.

6.1    Tree Models
In order to deal with a more complex system than the simple one-period
market, we need to refine our current notation. Our convention will be to
use a subscript for the time variable, and a superscript to indicate the state
of the share price. Thus, initially the share price is S0 (there is only one
state, so we don’t need a superscript). At time 1 we have two states, so we
write S1i , where i = 0, 1, as shown below:

                                   0
                                * S1
                                ©           (0-state ‘up’)
                            © ©
                       S0 ©
                          H
                            HH
                                                                           (6.1)
                                j S1
                                H           (1-state ‘down’)
                                   1

    Now we suppose that at time 2 each of the states S1i can evolve to a pair
of new states which we write as S2ij . The first index tells you which state you
were in at time 1, while the second index tells you whether you have an up
or down move following that, as illustrated in the following diagram:




                                       41
                                                 00
                                           © * S2
                                             ©
                                         ©
                                       ©
                                       H
                                 * S 1 HH
                                     0
                                 ©
                               ©©            j S 01
                                             H
                             ©
                         S 0 HH                 2
                                                                            (6.2)
                                                 10
                                H            * S2
                                             ©
                                 j S 1 ©©
                                 H
                                     1©
                                       H
                                         HH
                                             H
                                             j S 11
                                                2

    The resulting system of prices is called a tree model. For simplicity, we
shall consider trees which have two branches at each node, but in principle the
idea can be extended to the situation where we have any number of branches
at each node. We can display the system more compactly by suppressing the
branches and writing, for example,

                         S0 −→ S1i −→ S2ij −→ S3ijk ,                      (6.3)

for a three-period model. Note that by simply changing the allowed range for
the superscripts, this notation is general enough for any number of branches.
    We also need to introduce notation for the probabilities with which the
various transitions occur. In compact form this is

                              pi     p̂ij     p̂ijk
                             0
                         S0 −→ S1i −→
                                    1
                                      S2ij −→
                                            2
                                              S3ijk .                      (6.4)

Thus, p10 is the probability that S0 will drop to S11 . The corresponding tree
representation is given explicitly as follows:

                                                  00
                                            ©©
                                         p̂00
                                            1  * S2
                                        ©©
                                      0 HH
                                  * S1
                              p00©©         Hj 01
                                            01 H
                              ©          p̂      S2
                         S0 ©
                                            1
                            HH                    10                        (6.5)
                                 Hj 1       ©©
                                         p̂10  * S2
                                1 H
                                            1
                              p0    S 1 ©©
                                        HH
                                            HH j 11
                                         p̂11
                                            1    S2
Note that pi0 gives the probability that S1 = S1i , while p̂ij
                                                             1 is the conditional
probability that S2 = S2ij , given that S1 = S1i . We will use a ‘hat’ throughout

                                       42
the book to denote conditional probabilities. The actual probability that
S2 = S2ij is pij = pi0 p̂ij
                         1 . Since the total probability at any node must be one,
          P 01 i             ij      P ijk
we have i p0 = 1, j p̂1 = 1, k p̂3 = 1, and so on. This notation means
                       P

that if we sum p̂ij over j for any fixed value of i, then the result is one, with
the analogous generalisation to the sum of conditional probabilities at later
times.
   When convenient, we can drop the ‘time’ subscript from the share prices
because the time is simply equal to the number of ‘state’ indices. This yields
the less cluttered tree representation shown below:

                                                          00
                                                    * S
                                               p̂00 ©
                                               ©©
                                               ©
                                             0 HH
                                  * S
                               p0 ©                H
                               ©©                p̂01 H
                                                      j S 01
                         S ©
                           H
                             HH                           10                (6.6)
                                                      * S
                                                 p̂10 ©
                             p1 H
                                j S1
                                     ©
                                                 ©©
                                             H
                                                 HH
                                                 p̂11 H
                                                      j S 11

The corresponding compact notation is
                              pi      p̂ij        p̂ijk
                          S −→ S i −→ S ij −→ S ijk .                       (6.7)

6.2    Money Market Account
We have already considered the notion of borrowing in the Casino at a non-
zero interest rate. Now we need to formalise this idea further by introducing
the concept of a money market process that accumulates interest on a risk-
free basis. Let Bt denote the value of the money market account at time t.
For brevity, we shall sometimes refer to a unit in the money market account
as a ‘bond’, hence the notation Bt , which might also be taken to stand for
‘bank account’. Assuming that the interest rate is deterministic, then the
process is simply the linear tree:
                          B0 −→ B1 −→ B2 −→ B3 .                            (6.8)
If interest rates are constant, then, as we proved in exercise 1.3, the value of
the money market account is
                                   Bt = B0 ert ,                            (6.9)

                                         43
where r is the interest rate ‘per period’, expressed on a continuously com-
pounded basis. For example, if R is the annualised continuously compounded
interest rate, and if time is counted in days, then r = R/365. We will not
necessarily assume that interest rates are constant, but merely that they are
positive, so Bt+1 > Bt , that is, the bank account increases in value.
    Buying a unit of the money market account at time t for the price Bt is
like ‘putting the amount Bt in the bank’. At time t + 1 it is worth a larger
amount Bt+1 . Selling a unit of the money market account for the price Bt at
time t is like ‘borrowing the amount Bt ’ from the bank. If you want to buy
it back again at time t + 1, that is, repay the loan, then you must pay Bt+1
for it—principal plus interest.

6.3    Derivatives
For a derivative we need to specify (a) the maturity date t, that is, the time
when it pays off, and (b) the payoff function f . It is convenient to think of
the payoff as being determined by the state of the market at the payoff time,
so f = ft (St ). For example, a derivative that pays off at t = 2 will have
a payoff function f ij = f (S ij ). Specification of the payoff function is part
of the derivative contract, so the real problem is to determine the present
value, or initial cost f of the derivative. Indeed, since a derivative itself can
be viewed as an asset, we can express its time evolution in either the compact
form,
                            f −→ f i −→ f ij −→ f ijk ,                    (6.10)
or as the following tree:

                                                   00
                                               * f
                                               ©
                                             ©
                                          ©©
                                        0 HH
                                    * f
                                   ©©        HHj 01
                               ©                    f
                            f ©
                              HH                      10                    (6.11)
                                   HH
                                    j   1         * f
                                                 ©©
                                        f ©©
                                            HH
                                                 HH
                                                  j
                                                      f 11
    In order to make the derivative calculations somewhat more tangible, it
is worth considering some sample numerical exercises. A hypothetical share
price process is given as follows:

                                        44
                                                * 108
                                             .7 ©
                                             ©©
                                         ©
                                         H
                                 * 105 HH
                              .5 ©
                              ©©       .3 H
                                          j 102
                       100 ©
                           H
                             H
                                                                           (6.12)
                                 H            * 98
                                           .7 ©
                               .5 H
                                  j 95     ©©
                                         ©
                                         H
                                           HH
                                           .3 H
                                              j 92

For the money market account, we will assume a flat rate of 1% per month,
so the process can be represented by the diagram

                           100 −→ 101 −→ 102.01,                         (6.13)

where each time step is one month.

Exercise 6.1 In the given hypothetical two-period stock market what are the
probabilities that (a) S2 = 102 and (b) S2 > 95?

Exercise 6.2 What is the value of r for the money market process given by
equation (6.13), assuming that the interest is continuously compounded at an
annualized rate r?

Exercise 6.3 Using what you have learned in chapter 3, calculate the values
of call options with a maturity of t = 1 and strike prices of $98 and $102.
How much would similar derivative costs if you bought them at time 1 for
exercise at time 2? Note that in this case you need to calculate two prices for
each call option, one in the event that S1 = 105 and one for the case when
S1 = 95. Finally, how much would you be willing to pay at time 0 for the
call options with a maturity of t = 2?

6.4    One-Period Replication Model
We now want to price the derivative by using a no arbitrage argument. As
in the case of the Casino analogy, the investor will buy a derivative from a
trader, who will then take the proceeds of this sale and invest in the stock and
money market so that the randomness in his stock and derivative positions
cancel. By hedging in this way, the trader can obtain a guaranteed payoff
when the derivative expires, at which point he collects the proceeds from his

                                      45
stock and money market positions and pays the investor any money due on
the derivative. By the no arbitrage condition, this guaranteed payout must
be zero, since the trader started with nothing. If it were less than zero, the
trader wouldn’t trade; whereas if it were more than zero, then the investor
wouldn’t invest.
    To actually calculate the initial price of a derivative, we now need to turn
these words into equations. Hence, suppose that we have a trader with no
initial position and an investor that is flush with cash. At time 0 the investor
buys a derivative with payoff f i at t = 1 from the trader. The investor pays
f dollars, the value of the derivative at t = 0, to the trader, who then uses
the money to take a position in the stock S and the money market account
B. Let β be the number (possibly fractional, possibly negative) of units in
the money market account that the trader buys, and δ the number of units
in the stock S. Since this purchase is entirely funded by the money received
from the sale of the derivative, we have

                                 f = βB + δS.                             (6.14)

How does the trader choose the values of β and δ? Well, his position at
time 1 is equal to the value of his stock and bond portfolio βB i + δS i , minus
the derivative payment f i that he must make to the investor, and most
importantly, the trader would like this amount to be risk-free. By the no
arbitrage condition, the value of this position must be zero, that is,

                             βB i + δS i − f i = 0,                       (6.15)

or
                                f i = βB i + δS i .                       (6.16)
Because the bond and stock portfolio exactly duplicates the payoff function of
the derivative, we call it a replicating strategy. The existence of a replicating
strategy means that the derivative can be constructed from the underlying
assets and hence an investor need never buy the derivative—he can do just
as well by taking positions in stocks and bonds. In the real world, however,
a derivative has lower transaction and maintenance costs and that is why
investors will purchase them.
    Since equation (6.16) must hold independent of the ‘up’ or ‘down’ move-
ment of the share price, we must have

                  f 0 = βB1 + δS 0    and     f 1 = βB1 + δS 1 .          (6.17)

                                        46
We can then solve these two equations for β and δ,

                         f 1S 0 − f 0S 1                    f0 − f1
                    β=                       and     δ=             ,     (6.18)
                         B1 (S 0 − S 1 )                    S0 − S1

where we have assumed that S 0 > S 1 . Substituting these expressions back
into equation (6.14) we obtain

                             f 1S 0 − f 0S 1     f0 − f1
                       f=                    B +         S,               (6.19)
                             B1 (S 0 − S 1 )     S0 − S1

which completely determines the value of the derivative. Rearranging this
expression, we get

                         S − S 1 BB1 0 S 0 BB1 − S 1
                       f= 0         f + 0         f ,                     (6.20)
                          S − S1        S − S1
or alternatively

                       B S BB1 − S 1 0 S 0 − S BB1 1
                             "                                     #
                    f=              f + 0         f .                     (6.21)
                       B1 S 0 − S 1     S − S1

Exercise 6.4 Compare the derivative price equation (6.21) with the Casino
price equation (5.13). Show that they are equivalent.

6.5    Risk-Neutral Probabilities
As in the Casino example, we see that the derivative price, given by equation
(6.21), is independent of the ‘physical’ probabilities pi . Instead of the physi-
cal probabilities, we want to define the risk-neutral probability measure P ∗ ,
generated by the probabilities

                            S̃ − S 1                       S 0 − S̃
                    p0∗ =                  and     p1∗ =            ,     (6.22)
                            S0 − S1                        S0 − S1

where S̃ = BB1 S.

Exercise 6.5 Verify that the probabilities p0∗ and p1∗ do generate a valid prob-
ability measure.



                                           47
The initial price of the derivative can therefore be written as
                                   B 0 0
                              f =     [p∗ f + p1∗ f 1 ]
                                   B1
                                   B ∗
                                 =    E [f1 ],                               (6.23)
                                   B1
where f1 is the random payoff of either f 0 or f 1 at time 1 and E ∗ [−] is the
expectation with respect to the risk-neutral measure P ∗ . Since B and B1 are
deterministic, the derivative pricing formula (6.23) can be expressed in the
form
                                    f         f1
                                       = E ∗ [ ].                             (6.24)
                                    B         B1
In other words, the ratio f /B of the present value of the derivative to the ini-
tial cost of the money market account is given by the risk neutral expectation
of this ratio at t = 1.
     But in what sense is this new probability system ‘risk-neutral’ ? We need
to verify that the probabilities pi∗ are indeed the probabilties that would apply
in reality if investors were really ‘indifferent’, that is, neutral to risk. In this
situation (risk indifference) investors would expect the same rate of return
(average profitability per unit investment) on both (a) an investment in the
stock market, and (b) an investment in a money market account. In equation
form, this means that
                                 E ∗ [S1 ]   E ∗ [B1 ]
                                           =           .                      (6.25)
                                   S0           B
Note that Bt is actually deterministic, so E ∗ [B1 ] = B1 . After expanding
E ∗ [S1 ] in terms of the risk-neutral probabilities, we have
                                S 0 p0∗ + S 1 p1∗   B1
                                                  =    ,                     (6.26)
                                        S0          B
where p0∗ + p1∗ = 1. These relation imply, after a short calculation, that
                             S̃ − S 1                      S 0 − S̃
                     p0∗ =                and    p1∗ =              ,        (6.27)
                             S0 − S1                       S0 − S1
where
                                          B1
                                        S̃ = S
                                             ,                         (6.28)
                                          B
which is the same result as equation (6.22). This verifies the interpretation
of the probabilities pi∗ as risk-neutral.

                                           48
Exercise 6.6 Calculate the forward price at time 0 for the purchase at time
1 of one share.




                                    49
7    Pricing in N-Period Tree Models
Equation (6.21) completely determines the price of a derivative in a one-
period market. So it is clearly time to expand our model and think about
something a little more complicated! Consider a two-period market with a
stock, a money market account, and a derivative. We know the values in
the stock process, as illustrated in (6.6), and in the bond process, shown in
(6.8). We also know the terminal values or payoff of the derivative process
f ij , that is, the final values of the tree (6.11). Our goal is to use a no
arbitrage argument to compute the rest of the derivative process, including,
in particular, its present value f0 , that is, today’s price.
      From the work that we have done on the one-period model, it should be
clear that if we determine the possible values f 0 and f 1 of the derivative at
time 1, then we can determine its value at time 0 by use of equation (6.24).
Now consider the situation at time 1, and suppose that the outcome of the
first period was an upward movement (‘heads’), so S → S 0 . Then the stock
has value S 0 , the bond has value B1 , and we must find the value f 0 of a
derivative that pays off either f 00 or f 01 depending on whether S 0 → S 00 or
S 0 → S 01 . But clearly the problem now posed is formally identical to the
original problem for a one-period derivative, as we can see from the relevant
tree diagrams:


                                           00
                                    ©©
                                  p̂00
                                    ∗  * S
                                 ©
                             S 0©
                                HH
                                    HH j 01
                                  p̂01
                                    ∗    S
                             B1           - B                          (7.1)
                                                2
                                              00
                                       * f
                                      ©©
                                  ©
                             f0©
                               HH
                                      H
                                          j f 01
                                          H


We might call this realization an ‘inductive insight’. Since we can price
derivatives in a one-period model using equation (6.21), we can determine
the value of f 0 by simply using the same formula.


                                       50
    So, using equations (6.22) and (6.24) we can immediately write down the
solution in the form
                              f0    f 00 p̂00
                                           ∗ + f p̂∗
                                                    01 01
                                 =                        ,           (7.2)
                             B1               B2
where
                              0
                            S̃12 − S 01                S 00 − S̃12
                                                                0
                     p̂00
                       ∗  =             ,     p̂ 01
                                                 ∗  =              ,  (7.3)
                            S 00 − S 01               S 00 − S 01
      0
and S̃12  = S 0 B2 /B1 is the conditioned forward price made at time 1, when
the stock has value S 0 (‘up’ state) for delivery of a share at time 2. More
generally, the random variable S̃12 is is the forward price that will be made
                                                                           i
at time 1 for purchase of a share at time 2. It can take on two values, S̃12 ,
                                             i
(i = 0, 1) depending on the actual value S of the stock at time 1.

Exercise 7.1 Use an arbitrage argument to show that if S1 = S10 at time
t = 1, then the value of the derivative must be f 0 , as given in equation (7.2).

   Similarly for f 1 , equations (6.22) and (6.24) tell us that

                             f1   f 10 p̂10    11 11
                                         ∗ + f p̂∗
                                =                    ,                     (7.4)
                             B1             B2
where
                              1
                            S̃12 − S 11                 S 10 − S̃12
                                                                 1
                     p10
                      ∗ =               ,        p11
                                                  ∗ =               ,      (7.5)
                            S 10 − S 11                 S 10 − S 11
      1
and S̃12 = S 1 B2 /B1 is the forward price made at time 1, when the stock has
        1
value S , for delivery and payment at time 2.
    But now we know f 0 and f 1 . Thus, we can substitute these values back
into equation (6.24) to obtain the initial price of the derivative, given by

              f   f 0 p0∗ + f 1 p1∗
                =
              B          B1
                  f p∗ p̂∗ + f 01 p0∗ p̂01
                    00 0 00                     10 1 10     11 1 11
                                         ∗ + f p∗ p̂∗ + f p∗ p̂∗
                =
                                           B2
                  f p∗ + f p∗ + f p∗ + f 11 p11
                    00 00        01 01     10 10
                                                        ∗
                =                                         ,
                                       B2
                                                                           (7.6)



                                            51
where we have used the fact that pi∗ p̂ij      ij
                                        ∗ = p∗ is the risk-neutral probability
that S goes to S ij . Thus, we see that the final equation is an expectation in
the risk-neutral measure,                "    #
                                 f      ∗ f2
                                   =E            ,                        (7.7)
                                B          B2
where f2 is the random payoff of the derivative at time 2.
     The financial interpretation of this result is that the probabilities p i∗ and
p̂ij
  ∗ yield the unique probability system such that the expected return from
an investment in the money market account equals the expected return if the
money were put in the stock market instead. Thus,

                      B1   E ∗ [S1 ]          B2   E ∗ [S2 ]
                         =             and       =                           (7.8)
                      B0     S0               B0     S0
Exercise 7.2 Verify that the relations given in equation (7.8) hold. Do these
conditions uniquely define a probability measure?

Exercise 7.3 Calculate the risk-neutral probabilities for the numerical ex-
ample illustrated in 6.12. Price the following derivatives:

 (a) f ij = S ij , i.e., the derivative simply pays off the value of the stock.

 (b) A forward contract with a strike price of $100.

 (c) A European call option with a strike of $100.

 (d) A European put option with a strike of $100.

 (e) A call option that expires at t = 1 with a strike of $3 on a forward
     contract with a strike price of $100.

  (f) A derivative that pays out the difference if the share price falls below
      $97, summed over both time periods. That is, the payoff function is
      max[97 − S2 , 0] + max[97 − S1 , 0] dollars. This is a ‘path-dependent’
      derivative because the final payout depends on the entire path that the
      share price takes, rather than just its final value.

 (g) A digital contract that pays out $10 if the share price is above $100.

 (h) Both a European and an American call option with strikes of $104.


                                        52
Exercise 7.4 Compute the entire system of risk-neutral probabilties pi∗ , p̂ij
                                                                            ∗
and p̂ijk
      ∗   for a three-period binomial model.

    So what have we learned about pricing in the tree model so far? We have
shown that in a one-period market, a derivative is priced according to the
rule
                               f0    E ∗ [f1 ]
                                  =            ,                       (7.9)
                              B0       B1
while in a two-period market we used this result inductively to deduce that

                                f0   E ∗ [f2 ]
                                   =           .                        (7.10)
                                B0    B2
Moreover, in an N -period binomial market model, a ‘backward induction’
argument can be made that the price of a derivative f0 at t = 0 with random
payout fN at t = N is given by

                                f0   E ∗ [fN ]
                                   =                                    (7.11)
                                B0    BN
where BN is the value of the money market account at t = N , fN is the
random value of the derivative at time N , and E ∗ [−] is the expectation in
the risk-neutral measure determined by use of the one-period relation (6.22)
at each node of the tree.

Exercise 7.5 Verify equation (7.11) explicitly in the case of a three-period
market.

Exercise 7.6 Complete the backwards induction argument to prove equation
(7.11).




                                      53
8     Martingales and Conditional Expectation
We are now at a point where we have an algorithm that can be used to
evaluate the initial price of any derivative with a known payoff function.
Before proceeding further, we want to formalise some of the probabilistic
concepts that we have been dealing with and which will reappear in the
continuous time setting. Instead of the coin tosses considered in section 4 we
will use the two-period tree model as the underlying ‘random’ experiment.
The sample space is
                          Ω = {U U, U D, DD, DU },                        (8.1)
where U indicates an ‘up’ movement in the stock market and D a ‘down’ one.
We assume that the event space Σ is the power set of Ω. The share price S2
at time 2 is a random variable that takes the values S ij depending on the
up and down movements in the markets. How about the share price S1 at
an earlier time 1? It is also a random variable defined on the same sample
space, but unlike S2 , it should not depend on the movements of the market
after time 1. This means that S1 (U U ) = S1 (U D) and S1 (DD) = S1 (DU ).
This discussion has illustrated the two concepts that we want to discuss next:
stochastic processes and filtrations.

8.1    Stochastic Processes
The share price process Si that we have been dealing with so far is really a
family of random variables indexed by a time parameter i. That is, there are
three random variables S0 , S1 and S2 defined on the sample space Ω. This
is an example of a stochastic process.

Definition 8.1 A stochastic process X is a sequence of random variables
{Xn }K
     n=1 defined on the sample space Ω.


8.2    Filtration
Suppose that instead of being concerned with only the final outcome of the
share price movements, we want to be able to describe the share price at
any time before the final time. For example, we could evaluate the share
price stochastic process Si for each time i at the sample space element U U :
S0 (U U ) = S at time 0, S1 (U U ) = S 0 at time 1 and S0 (U U ) = S 00 at time
2. Note that at times before the final time, while the sample space is always

                                      54
the same, the elements of it that can be differentiated from one another may
not always be the same. For example, at time 0 it is impossible to tell any
of the elements of the sample space apart, so the members of the set

                            F0 = {U U, U D, DU, DD}                         (8.2)

all ‘appear’ the same. Similarly at time 1 it is possible to divide the sample
space up into two distinguishable ‘partitions’

                    F10 = {U U, U D}   and   F11 = {DU, DD},                (8.3)

depending on whether the initial movement in the market was ‘up’ or ‘down’.
Finally at time 2, there are four different market states, that we can differ-
entiate between

   F200 = {U U },     F201 = {U D},    F210 = {DU },     F211 = {DD}.
                                                        and
                                                                      (8.4)
                                       i      ij
Each of these collection of sets F0 , F1 and F2 divides up or ‘partitions’
the sample space at the relevant time. We can formalise the definition of a
partition.

Definition 8.2 A partition {Fi }K
                                i=1 of a set A is a family of mutually disjoint
subsets of A whose union is A. That is, for i 6= j, Fi ∩ Fj = ∅, and ∪Ki=1 Fi =
A.

From our example we see that associated with the random movements of the
market there is a natural sequence of partitions of the sample space in terms
of F0 , F1i and F2ij . We call such a sequence a filtration, which we formally
define below.

Definition 8.3 A filtration F is a family {Fi }K    i=1 of partitions of Ω. The
                                                                   (i)
notation that we use for an element of the filtration is Fi = {Fj }K   j=1 , where
                                                                        i

          (i)
the sets Fj are a partition of the sample space. An additional constraint that
we require is that the partitions at later times respect the earlier partitions.
                                          (l)
That is, if i < k, then every partition Fi at the earlier time is equal to the
                                    (j ) Ni,k
union of some set of partitions {Fk n }n=1    at the later time.

Thus the sets Fi that we have defined above are a valid filtration for the
market sample space because at each time they partition the sample space,
and because the partitions at later times respect the partitions at earlier

                                       55
times, for example, F0 = F10 ∪ F11 . Using the concept of a filtration F allows
us to define a ‘filtered possibility system’ (Ω, Σ, F) and a ‘filtered probability
system’ (Ω, Σ, F, P ). It gives some sort of ‘time ordering’ to the possibility
or probability system.

8.3    Adapted Process
Suppose that we had a stochastic process X defined on the market possibility
system such that X1 (U U ) 6= X1 (U D). This means that the process needs to
know at time 1 what happens at time 2. We do not want this. Another way
to look at it is that X1 is not constant on the partition F 0 defined by the
filtration F. This leads to the following definition.

Definition 8.4 A stochastic process X is adapted to a filtration F if at every
                                                                 (n)
‘time step’ n, whenever ω and σ belong to the same partition Fj defined by
the filtration then Xn (ω) = Xn (σ). That is, Xn is constant on each partition
at time n.

The share price process is clearly adapted to the filtration that we have de-
fined for the market. The only stochastic processes that we will be interested
in are adapted ones.

8.4    Conditional Expectation
The conditional probability for an event A given an event B is the probability
that A occurs when we alreay know that B occurs. It is equal to

                                     P (A     and   B)
                         P (A|B) =                       .                  (8.5)
                                            P (B)

In particular, we will be interested in the case when A is a single element
                                                                 (j)
set, and B is an element of a filtration, for example P ({ωi }|{Fk }). More
concretely, taking an example from the market system,

                          P ({U U }|{U U, U D}) = p̂00 ,                    (8.6)

is the probability that we have two up movements, given that we know that
the first market move was up.



                                       56
    We can use the conditional probability to define the conditional expecta-
tion of a random variable
                                  N
                                  X
                      E[X|σ] =          X({ωi })P ({ωi }|σ).               (8.7)
                                  i=1

Again, drawing on the market system, we could consider

                         E[S2 |F 0 ] = S 00 p̂00   01 01
                                              ∗ + S p̂∗ ,                  (8.8)

which is the expected value of the share price at time 2, given that the initial
market move was up.
   Define the stochastic process
                                                 (m)
                            Ym (ωi ) = E[S2 |Fk ],                         (8.9)
             (m)
where ωi ∈ Fk . That is, at time m we evaluate the conditional expectation
of the share price at time 2 given the filtration at time m. For example,

                            Y1 ({U U }) = E[S2 |F 0 ],                   (8.10)

which was evaluated above. We will use the notation Ym = Em [S2 ] to denote
the conditional expectation of S2 given information up to time m. Note that
since the filtration at time 0 is unable to distinguish between any elements,
we have E[Sn ] = E0 [Sn ].

Exercise 8.1 Verify that the stochastic process Ym is adapted to the filtration
F.

   Recall that from the derivative pricing formulae we have
                   S0       S2                 S0       S1
                            ·    ¸                       ·     ¸
                      = E0∗             and       = E0∗    ,             (8.11)
                   B0       B2                 B0       B1
where we have inserted some suggestive zeros. By a simple calculation we
could verify that
                              S1          S2
                                        ·    ¸
                                  = E1∗        .                      (8.12)
                              B1          B2
This is an important example of the next concept that we want to consdier—a
martingale.


                                         57
8.5    Martingales
A stochastic process X is called a martingale (with respect to a filtered
probability system (Ω, Σ, P, F), if it satisfies
                        Xm = Em [Xn ]       ∀m ≤ n ≤ N.                   (8.13)
The standard definition of a martingale also requires that
                        Em [|Xn |] < ∞      ∀m ≤ n ≤ N,                   (8.14)
i.e., it exists for all valid m, n. However, this condition is automatically
satisfied in our model. If a process is a martingale, then it means that its
expected value at any later time is equal to its current value.

8.6    Financial Interpretation
Let us go back and actually verify that the ratio of the stock to bond process
is a martingale. In the case of a two-period market we have
                           S0   p̂00 S 00 + p̂01
                                              ∗ S
                                                  01
                              = ∗
                           B1            B2
                                   ∗ S2
                                     ·         ¸
                                             0
                              = E         |F                              (8.15)
                                       B2
and
                           S1   p̂10 S 10 + p̂11
                                              ∗ S
                                                  11
                              = ∗
                           B1            B2
                                   ∗ S2
                                     ·         ¸
                                             1
                              = E         |F ,                            (8.16)
                                       B2
which says that given that the system is in the state S 0 at time 1, the ratio of
the stock to bond price can be expressed in terms of conditional probabilities
p̂00      01                      1   10        11
  ∗ and p̂∗ , and similarly for S , p̂∗ and p̂∗ . Writing this in terms of
conditional expectation, we then obtain
                                S1       S2
                                            ·   ¸
                                   = E1∗    .                             (8.17)
                                B1       B2
In fact, using the one-period argument to derive the risk-netural probabilities
we have for n ≤ N ,
                              Sn−1          Sn
                                          ·    ¸
                                       ∗
                                   = En−1        ,                      (8.18)
                             Bn−1           Bn

                                       58
or, more generally, by induction we have
                               Sm      Sn
                                           ·   ¸
                                     ∗
                                  = Em                                   (8.19)
                               Bm      Bn
for m ≤ n.

Exercise 8.2 Verify equation (8.19) for the three-period binomial model.

Thus, in the risk-neutral measure the ratio of the share price Sn to the
money market account Bn is a martingale. This can be regarded as the
definition of the risk-neutral measure. Alternatively, we say that the risk-
neutral probability measure P ∗ is a martingale measure for the ratio Sn /Bn .
    The no arbitrage argument for derivative pricing, combined with a back-
wards induction, allows us to deduce, in the case of an N-period binomial
model, that                             "    #
                               fm     ∗   fn
                                   = Em        ,                       (8.20)
                               Bm         Bn
for 0 ≤ m ≤ n ≤ N . In other words: the ratio of the derivative price to the
money market account is a martingale. In particular, if N is the payoff date
of the derivative, then              "     #
                             f0        f N
                                = E∗         .                        (8.21)
                            B0         BN
So, once we show that the ratio of the derivative price to the money market
account is a martingale in the risk-neutral measure, that is, equation (8.20)
holds, then we can ‘price’ the derivative by use of (8.21). It will be a crucial
relation when we come to pricing derivatives in the continuous time case.




                                      59
9    Binomial Lattice Model
The general kind of tree model that we have been discussing so far is some-
times called a ‘bushy tree’, since the number of branches gets large very
quickly. At time n there are 2n states, which as n grows larger clearly makes
the tree computationally unfeasible. A very useful special model is obtained,
however, by letting the branches recombine to form a lattice of prices, and
hence is called a ‘lattice model’ or ‘recombining tree’. At time t = n the
number of different states is only n + 1 which grows much more slowly than
the 2n nodes of the ‘basic’ tree.
    At each node, the asset price can move either up in value, with probability
p, by a multiplicative factor u, or down, with probability q, by a factor d.
Index the nodes at each time by the number of ‘down’ moves that you need
to reach it, for example, S31 is the node at time 3 with one ‘down’ and two
‘up’ movements. We can write the value of the ith node at time n as
                                Sni = S0 un−i di                          (9.1)
where i = 0, . . . , n and the time index is now necessary. Thus, for example,
S20 = S0 u2 , S21 = S0 ud, and so on. A three-period recombining tree is shown
below:
                                                        3
                                                 * S0 u
                                              p ©©
                                          2 ©©
                                   * S 0 u HH
                                p ©©
                              ©©              q HH
                                                 j      2
                       * S0 u HH
                    p ©©                         * S0 u d
                                              p ©©
                    ©           q HH        ©©
               S0 ©
                  HH
                                   j
                                   * S0 ud HH
                                p ©©                                     (9.2)
                    q HH
                       j       ©              q HH
                         S0 d ©
                              HH
                                                 j
                                                 * S0 ud
                                              p ©©
                                                          2
                                q HH
                                   j          ©
                                     S0 d 2 ©
                                            HH
                                              q HH
                                                 j
                                                   S0 d 3
   Suppose that at each node the actual probability of an up move is p, and
a down move is q. Then, the probability of Sn taking on a specific value Sni
is
                       Prob[Sn = Sni ] = Cin pn−i q i ,                (9.3)
where Cin is the standard binomial coefficient, given by
                                           n!
                               Cin =              ,                       (9.4)
                                       i!(n − i)!

                                       60
e.g., C23 = 3!/(2!1!) = 3. The factor Cin is the number of different ways of
arriving at the node Sni .
Exercise 9.1 Show that the number of different ways of arriving at the node
Sni is Cin .
Recall that Cin is called the binomial coefficient because
                                            n
                             (x + y)n =           Cin xn−i y i .
                                            X
                                                                           (9.5)
                                            i=0

Hence if we set x = p and y = q then using the fact that p + q = 1, we see
that                         n
                                       Cin pn−i q i = 1.
                                 X
                                                                           (9.6)
                                 i=0

This means that if we sum the probabilities (9.3) of each node at the nth
time step, then we get one, as we should.
   However, in order to price derivatives, we know that we do not need to
make any assumptions about the ‘physical’ probabilities, that is, the num-
bers p and q, but instead, we must calculate the appropriate risk-neutral
probabilities. For the bank account process, we assume for simplicity a con-
stant interest rate of r per period, continuously compounded, so Bn = B0 ern .
Then, for risk-neutrality, we want
                            B1
                       S0      = E ∗ [S1 ] = p∗ S0 u + q∗ S0 d             (9.7)
                            B0
at the first node. In fact, the probabilities are governed by essentially the
same equation at each node. For example, at the node S21 = S0 ud we want
                              B3
                      S0 ud      = E ∗ [S3 ]
                              B2
                                 = p∗ S0 u2 d + q∗ S0 ud2 ,                (9.8)

but this reduces to the previous equation. The solution for p∗ , q∗ is easily
seen to be
                          er − d             u − er
                     p∗ =          and q∗ =         .                   (9.9)
                           u−d               u−d
Exercise 9.2 Verify that equation (9.9) is consistent with the risk-neutral
probabilities calculated in the general theory of tree models developed earlier.

                                            61
    In the risk-neutral measure, the lattice is highly structured, which makes
calculations easy. In particular, we can price derivatives. The risk-neutral
probability of any state Sni is

                          Prob∗ [Sn = Sni ] = Cin pn−1
                                                   ∗   q∗i ,               (9.10)

where Prob∗ denotes probability in the risk-neutral measure P ∗ . Thus, sup-
pose f0 is the price of a derivative (at time 0) with specified payoff fni at time
n in the ith state. Then, from our general theory of tree models, we know
that
                                   f0    E ∗ [fn ]
                                      =            ,                        (9.11)
                                  B0       Bn
from which it follows that
                                        n
                            f0 = e−rn         Cin pn−i i i
                                        X
                                                   ∗ q∗ f n .              (9.12)
                                        i=0

This is the binomial derivative pricing formula which, together with its vari-
ous generalizations, has many useful applications. In the case of a call option
with strike K, for example, we would insert

                          fni = max[Sni − K, 0]
                              = max[S0 di un−i − K, 0]                     (9.13)

for the payoff function fni .

Exercise 9.3 For a three-period model with S0 = $100, p = 0.6, r = 1.01,
u = 1.01 and d = 0.99, construct the lattice of stock prices and probabilities,
calculate the risk-neutral probabilities for the lattice, and then price a call
option with strike $100.




                                         62
10     Relation to Binomial Model
We shall now show how in a suitable limit the binomial lattice model of
chapter 3 can give rise to the Wiener model for asset price movements.

10.1     Limit of a Random Walk
Consider an n-period lattice. Recall that at any node of the lattice we have
an ‘up’ and a ‘down’ branch, with probabilities p and q respectively, as shown
below From an initial value of S0 , the asset price will increase to S0 u with
probability p, or decrease to S0 d with probability q.

                                        * S0 u
                                     p ©©
                                     ©
                                S0 ©
                                   HH                                     (10.1)
                                     q HH
                                        j
                                          S0 d
                                . next node, and since there are n steps, the
    Let δt be the time-step to the
final time will be t = nδt. Suppose moreover that the up and down factors
are given explicitly by
                               √                        √
                     u = eµ̃δt+σ δt    and   d = eµ̃δt−σ δt ,            (10.2)
where µ̃ and σ are constants. We shall assume that the actual probabilities
p and q (i.e., not the risk-neutral probabilities) are each 21 . If we let Xn be
the random variable equal to the number of ‘up’ movements after n steps,
then the asset price St is
                              St = S0 uXn dn−Xn ,                        (10.3)
where n − Xn is the number of ‘down’ movements. Substituting in the values
of u and d given above then yields
                                        √ 2Xn − n
                                   "                     #
                     St = S0 exp µ̃t + σ t √      ) .                    (10.4)
                                              n
The random variable Xn has a binomial distribution, with mean 21 n and
variance 14 n. We can improve the notation here slightly by defining the new
random variable
                                    2Xn − n
                              Zn ≡ √        ,                          (10.5)
                                         n

                                       63
which has a binomial distribution with mean zero and variance one. Hence
the asset price process is given by
                                     h       √ i
                          St = S0 exp µ̃t + σ tZn .                (10.6)

Next we use the central limit theorem, which says that if A1 , A2 , . . . are inde-
pendent, identically distributed random variables with mean m and variance
V , and Xn is the sum Xn = √  A1 + A2 + · · · An , then the random variable Zn
defined by Zn = (Xn − nm)/ nV → N(0, 1) for large n. This tells us that in
the limit of large n, Zn converges to a normally distributed random variable
with mean zero, and variance 1. Thus, it follows that

                            lim St = S0 exp[µ̃t + σWt ]                     (10.7)
                          n→∞

where Wt is a normally distributed random variable with mean zero and
variance t. Then if we set µ̃ = µ − 12 σ 2 , the asset price process becomes
                                                 1
                       lim St = S0 exp[µt + σWt − σ 2 t],                   (10.8)
                      n→∞                        2
and we are back to the Wiener model. Or so it appears. To show that we
have recovered the model entirely, we still need to show that Wt is indeed the
Wiener process—we know that it is normally distributed, but now we need
to check that it has independent increments. This follows intuitively from
the fact that the binomial process is defined as n independent measurements,
and hence, by construction, has independent increments. When we take the
large n limit, we are tempted to believe that this property is preserved, so
(10.8) actually is the Wiener process.

10.2     Martingales associated with Random Walks
This is, of course, a rather simplistic ‘derivation’ of the Wiener process, and
does not yet fully exploit the technology that we developed for the binomial
model. To proceed further, we begin by refining the binomial lattice model
by consideration of a certain family of martingales that arise naturally in this
context.

Lemma 10.1 Suppose Y1 , Y2 , . . . are independent, identically distributed ran-
dom variables with the property that the moment generating function,

                                M (θ) = E[eθY1 ],                           (10.9)

                                        64
exists (i.e., is finite) for some value of θ. Define a sequence of random
variables by Z0 = 1, and

                                             eθ(Y1 +Y2 +···+Yn )
                                    Zn =                         .                          (10.10)
                                                 [M (θ)]n

Then
                                 En [Zm ] = Zn ,              m≥n                           (10.11)
where En is the conditional expectation given information up to time n (in
this case, given Y1 , Y2 , . . . , Yn ) .

Proof By definition, we have

                                                   eθ(Y1 +Y2 +···+Ym )
                                               "                         #
                            En [Zm ] = En                              .                    (10.12)
                                                       [M (θ)]m

Since the expectation is conditional, we know the values of Y1 , Y2 , . . . , Yn ,
and hence can take them outside the expectation, so

                         eθ(Y1 +Y2 +···+Yn )   eθ(Yn+1 +Yn+2 +···+Ym )
                                                   "                         #
              En [Zm ] =                     E                                              (10.13)
                             [M (θ)]n               [M (θ)]m−n

But then since the Yi ’s are independent and identically distributed, we can
factor their expectation, which will then cancel with the factors of the mo-
ment generating function in the denominator,
                                         h              i     h      i           h      i
                                              θYn+1
      eθ(Yn+1 +Yn+2 +···+Ym )   E e                         E eθYn+2 × · · · × E eθYm
       "                        #
    E                         =                                                             = 1.
           [M (θ)]m−n                                         [M (θ)]m−n
                                                                                            (10.14)
Hence,
                                           eθ(Y1 +Y2 +···+Yn )
                            En [Zm ] =                         = Zn                         (10.15)
                                               [M (θ)]n
as desired.



    For example, if Y1 is normally distributed with mean m and variance V ,
it follows that
                                                 1 2
                         M (θ) = E[eθY1 ] = eθm+ 2 θ V ,            (10.16)

                                                   65
so
                                                         1    2
                           Zn = eθ(Ỹ1 +Ỹ2 +···Ỹn )− 2 nθ V             (10.17)
where Ỹi = Yi − m (i.e., remove the mean). But, this is clearly the product
                                  1 2            1 2              1 2
                   Zn = eθỸ1 − 2 θ V eθỸ2 − 2 θ V · · · eθỸn − 2 θ V   (10.18)

which is given multiplicatively by a series of exponential martingales.
    Another example, which is the one we are particularly interested in here,
is generated when Yi = ±1, so Y1 + Y2 + · · · + Yn is the random variable
corresponding to the nth step of a random walk. Then

                               M (θ) = peθ + qe−θ                         (10.19)

where p, q are the probabilities respectively for Yi = ±1, and thus we have

                                        eθ(Y1 +Y2 +···+Yn )
                              Zn =                                        (10.20)
                                        (peθ + qe− θ)n

Equivalently, we have
                                             eθXn
                               Zn =                                       (10.21)
                                        (peθ + qe− θ)n
where Xn = Y1 +Y2 +· · ·+Yn is the random walk. We note that E[Yi ] = p−q.
Thus, E[Xn ] = n(p − q), and we have X̃n = Xn − n(p − q), where E[X̃n ] = 0.
Now suppose that we consider the case where p = q = 12 . Then we have

                                                eθXn
                               Zn =                                       (10.22)
                                        [ 12 (eθ + e− θ)]n

and E[Xn ] = 0. Now, suppose that we set
                                                     √
                                          eσ δtXn
                        St = S0 eµt 1 σ√δt        √      ,                (10.23)
                                   [ 2 (e   + e−σ δt )]n

where t = nδt. Then we can write
                                                 √       √
                                      eσ t(Xn / n
                    St = S0 eµt 1 σ√t/√n        √ √     .                 (10.24)
                               [ 2 (e    + e−σ t/ n )]n



                                            66
                                       √
In the limit n → ∞, the numerator Xn / n converges to an N (0, 1) random
variable, whereas for the denominator we have

                1 σ√t/√n      √ √           σ2t
                  (e     + e−σ t/ n ) = 1 +     + O(n−2 ).        (10.25)
                2                           2n
So as n → ∞,
                                            n
                      1 σ√t/√n       √ √
                    ·                         ¸
                                                  1 2
                        (e      + e−σ t/ n ) → e 2 σ t            (10.26)
                      2
Thus, in the limit n → ∞, we find that St converges to
                                          √    1   2
                          St = S0 eµt eσ tX− 2 σ t ,              (10.27)
                                                 √
where X has an N (0, 1) distribution, and hence tX has an N (0, t) dis-
tribution. This confirms in rather more detail the result that we deduced
earlier.




                                     67
11     Continuous Time Models
The binomial model for asset price movements suffers from some defects, of
which the most serious, from our point of view, is that in order for it to be
realistic the model must have a very large number of time steps. While for a
computer this presents less of a problem, actually evaluating the derivative
using equation (7.11) becomes a labourious and time-consuming procedure.
We can alleviate this to a certain extent, by moving from a discrete time
model to one in which time is treated as a continuous variable.
    In this chapter we begin by our look at continuous time models of the fi-
nancial markets by introducing an elementary ‘Wiener model’ for asset prices
and exploring a few of its characteristics.

11.1     The Wiener Model
The simplest continuous time model for an asset price is the basic log-normal
or Wiener model. This model can be used to a reasonable approximation
to fit actual asset movements over limited time periods. The asset price
movements are driven both by a deterministic ‘trend’ or drift, and a random
motion. The strength of the random component of the motion is called the
volatility of the process. From actual asset price data, it is evident that, at
least to a first approximation, the random motions are uncorrelated, that
is, the market has no memory of its previous behaviour. More advanced
models of the financial markets may take into account correlations between
motions of the asset at one time and other, but little is really understood on
this score. The Wiener model has the significant advantage over most other
models in that it is simple enough that in many calculations we can obtain
explicit ‘closed form’ results.
    However, we are not going to do anything with only words, so it is now
time to write down some formulae. Analogous to the stochastic processes
that we studied in the discrete time case, we can define a continuous time
stochastic process as a family of random variables indexed by a continuous
time parameter t. In the elementary Wiener model the asset price St is a
stochastic process that evolves in time based on the following formula
                                                 1   2
                             St = S0 eµt eσWt − 2 σ t .                 (11.1)
Here S0 , µ and σ are constants: S0 is the initial stock price, µ is the drift
and σ is the volatility. The Wiener process Wt is the source of ‘randomness’

                                        68
or ‘noise’ in the asset price movement. As we shall demonstrate in a later
chapter it can be expressed as the limit of a lattice tree model.
    But what is the Wiener process Wt and what are its properties? Well, it
is a stochastic process beginning at time 0 that satisfies
  1. The initial value is zero: W0 = 0.
  2. At each time t, Wt is a normally distributed random variable with mean
     0 and variance t.
  3. Wt has independent increments. That is, for a < b < c < d, the
     difference between the values of Wt at two times, such as Wb − Wa and
     Wd − Wc , are independent random variables.
If a stochastic process has these three properties, then we say that it is
a Wiener process or, equivalently, it is a simple Brownian motion. The
Wiener process is a very rich object of mathematical interest, with numerous
important applications in finance.
    An example Wiener process is shown in figure 11.1. Note that at any
time Wt has an equal likelihood of being positive or negative, but the spread
(variance) increases over time. If we add to the Wiener process a constant de-
terministic drift of the form µt then the resulting process will have a nonzero
expectation value, as illustrated in figure 11.2.

11.2     The Normal Distribution
Before we try and do too much with the Wiener process it is probably worth
spending some time recalling some facts about the normal distribution. The
probability distribution of a stochastic process at any particular time t is
called the marginal distribution, so we say that a Wiener process has a ‘nor-
mal’ marginal distribution. We refer to any random variable that is normally
distributed with mean m and variance V as an N(m, V ) random variable.
Hence if X is an N(m, V ) random variable we have
                                             (x − m)2
                                               "             #
                                  1 Zb
             Prob[a < X < b] = √       exp −          dx.               (11.2)
                                 2πV a          2V
Since the Wiener process Wt has an N(0, t) marginal distribution, it is char-
acterized by the following probability law:
                                                 x2
                                                   "     #
                                     1 Zb
                Prob[a < Wt < b] = √       exp −    dx.                 (11.3)
                                     2πt a       2t

                                      69
  Wiener Process

        0.5



      0.25



         0
              0           0.25              0.5                               1.0


     -0.25



                                            Time
                          Figure 11.1: A Wiener process.
  Wiener Process
      0.75



        0.5



      0.25



         0
              0           0.25                              0.75              1.0


     -0.25

                                            Time
Figure 11.2: A Wiener process with an added drift term of 25% i.e. of the form Wt +.25t.
The dashed line represents the contribution from the drift term. The underlying Wiener
process is the same in both this figure and figure 11.1.




                                          70
How about the difference between the Wiener process at two different times,
Wa+b − Wb ? In the definition of Wt we required that this be an independent
random variable. In fact, it turns out to be a N(0, b) random variable, which
will be very important for some of our calculations.

Exercise 11.1 Verify that Wa+b − Wa is an N(0, b) random variable.

   A useful formula to define is the cumulative normal distribution function
N (x)
                                1 Zx           1 2
                                           ·       ¸
                     N (x) = √          exp − ξ dξ.                   (11.4)
                                 2π −∞         2
Later, we will be able to express the price of call and put options in terms of
N (x). For now, we can use the cumulative distribution in order to describe
a Wiener process Wt ,
                                         ξ=b
                                     1   Z
                                                ξ2
                    Prob[Wt < b] = √         e− 2t dξ
                                     2πt
                                                    ξ=−∞
                                                         √
                                                    η=b/
                                                      Z t
                                          1            1 2
                                   = √              e− 2 η dη
                                          2π η=−∞
                                             √
                                   = N (b/ t)                              (11.5)
                                         √
where we made the substitution ξ = η t in going from the first to second
line.
    We are now in a position where we can, at least heuristically, understand
the drift µ and volatility σ of the Wiener model for an asset price process,
given by equation (11.1). In order to interpret the drift, we need the following
result.

Lemma 11.1 Let X be an N(m, V ) random variable. Then
                                          1
                                            µ                ¶
                     E[exp(αX)] = exp αm + α2 V .                         (11.6)
                                          2
Proof The density function ρm,V (x) for an N (m, V ) random variable is

                                          (x − m)2
                                                Ã            !
                                 1
                    ρm,V (x) = √    exp −          .                      (11.7)
                                2πV          2V

                                       71
Thus, the expected value is
                              x=∞
                                             (x − m)2
                                              "                  #
                               Z
                                 1
            E[exp(αX)] =      √     exp αx −          dx                 (11.8)
                                2πV             2V
                         x=−∞

A straightforward calculation that involves ‘completing the square’ then gives
the desired result.


   An immediate corollary of this result is that
                                                  1 2
                                              µ       ¶
                         E[exp(σWt )] = exp         σ t ,                (11.9)
                                                  2
from which we conclude that the expected value of the Wiener process is
                                        1
                              ·       µ                     ¶¸
                E[St ] = E S0 exp µt − σ 2 t + σWt
                                        2
                                     1 2
                               µ          ¶
                       = S0 exp µt − σ t E [exp (σWt )]
                                     2
                       = S0 exp(µt).                                    (11.10)

Since E[St ]/S0 = eµt , we say that µ is the rate of return on an investment
in the asset St with initial price S0 . Thus, the drift parameter controls the
expected value of the asset price in the future. However, rather surprisingly,
it will turn out that the call and put option prices that we will derive are
independent of the value of the drift, that is, they do not depend on how we
expect the asset price will move.
    The volatility, on the other hand, measures the ‘response’ of St to the
movements in the Wiener process Wt . That is, the larger the volatility, the
more randomness that is introduced into the model, as shown in figures 11.3
and 11.4. It is the volatility which will play the most important role in option
pricing because it controls the randomness that we need to try and eliminate.


Exercise 11.2 Calculate the variance of the asset price process St .

   Note that since the logarithm of the asset price is given by
                                          1
                      ln St = ln S0 + (µ − σ 2 )t + σWt ,               (11.11)
                                          2
                                      72
     Asset Price
      $300



      $250



      $200



      $150 0               0.25                                0.75               1.0




      $100
                                              Time
Figure 11.3: A Wiener model asset price processes, driven by equation (11.1), with an
initial price of S0 = $100, a drift of µ = 1 and a volatility of σ = 0.5. The dashed is line
is the expected value E[St ] = S0 eµt .


it follows that ln St is normally distributed with mean ln S0 + (µ − 12 σ 2 )t and
variance σ 2 t, which is why our basic model is sometimes called the log-normal
model. This model is also sometimes called ‘geometric Brownian motion with
drift’.
    Another useful property of Brownian motion is the fact that

                                  E[(Wt − Ws )2 ] = t − s,                         (11.12)

which as we shall demonstrate below, follows from the independent incre-
ments property. Using W0 = 0, we can write

                           Wt = (Wt − Ws ) + (Ws − W0 ),                           (11.13)

and after squaring both sides we have

      Wt2 = (Wt − Ws )2 + (Ws − W0 )2 + 2(Wt − Ws )(Ws − W0 ).                     (11.14)

Taking expectations yields

                      E[Wt2 ] = E[(Wt − Ws )2 ] + E[Ws2 ] + 0,                     (11.15)

                                            73
     Asset Price

      $300



      $250



      $200



      $150
             0                                0.5              0.75               1.0


      $100
                                              Time
Figure 11.4:       A Wiener model asset price processes, driven by equation (11.1), with
an initial price of S0 = $100, a drift of µ = 1 and a volatility of σ = 1.0. This plot uses
the same Wiener process as figure 11.3, but the volatility is twice as large here. You can
see that the larger volatility causes the deviations from the expected value to be generally
greater. The dashed is line is the expected value E[St ] = S0 eµt .


where we have used the fact that

             E[(Wt − Ws )(Ws − W0 )] = E[Wt − Ws ]E[Ws − W0 ]
                                     = 0,                                          (11.16)

since the increments are independent and have zero mean. Returning to
equation (11.15) we can evaluate the expectations to obtain

                                t = E[(Wt − Ws )2 ] + s                            (11.17)

as desired.
   We could also take conditional expectations of equation (11.14),

     Es [Wt2 ] = Es [Ws2 ] + Es [(Wt − Ws )2 ] + 2Es [(Wt − Ws )(Ws − W0 )]
               = Ws2 + t − s + 0,                                      (11.18)

which implies that
                                 Es [Wt2 − t] = Ws2 − s                            (11.19)

                                            74
Note that this is the martingale property that we previously examined in the
discrete time case.

Exercise 11.3 Calculate E[X n ] for X normally distributed with mean m
and variance V for n = 1, 2, 3, 4.

Exercise 11.4 Calculate E[eαX ] and Var[eαX ] for X as above.
                                          1   2
Exercise 11.5 Show that if Mt = eαWt − 2 α t then

                               Es [Mt ] = Ms .                       (11.20)
                                              1   2
Exercise 11.6 Show that Mt = cos(βWt )e 2 β t satisfies

                               Es [Mt ] = Ms .                       (11.21)




                                     75
12      Stochastic Calculus
We are now in a position to begin considering trading in continuous time and
to examine the situation where asset price motions are driven by a Wiener
process rather than by a discrete time model. The idea is that at each
instant we can look at the Wiener process Wt and study its change dWt at
that instant, which, intuitively can be thought of as moving slightly up or
down with equal probability.
    For the asset price St we can hypothesize that the change in its value is
given by a so-called ‘stochastic differential equation’ of the form
                              dSt
                                  = µt dt + σt dWt .                      (12.1)
                               St
This says that the infinitesimal change dSt in the asset price at time t, as a
percentage of the value St , is given by a drift term µt dt and a ‘fluctuation’
or small movement upwards or downwards given by σt dWt . We call µt the
drift at time t, and σt the volatility at time t. For elementary applications we
take µ and σ to be constant. This is often called the ‘Black-Scholes’ world.
The solution of equation (12.1) is given by the Wiener model that we looked
at in the previous chapter,
                                                   1   2
                              St = S0 eµt+σWt − 2 σ t ,                   (12.2)

as we shall show later.
    Our first goal is to make sense of (12.1) mathematically, and to introduce
the tools necessary to work with such expressions involving the Wiener pro-
cess. This will enable us to see, for example, why (12.2) is the solution of
(12.1). The main tool that we require is the so-called stochastic calculus or
Ito calculus. Our approach will be to build this up in an intuitive way, and
then to backtrack and attend to details and more precise definitions.
    A closely related idea to stochastic calculus is the stochastic integral. The
integral of a process with respect to a Brownian motion is defined to be
                   Z b                   N
                                         X
                         Xt dWt = lim          Xti (Wti+1 − Wti ),        (12.3)
                     a            N →∞
                                         i=0

where the ti are some partition of the interval [a, b]. The stochastic integral
has a natural interpretation in terms of trading strategies. In particular, if

                                         76
St is an asset price, then a trading strategy φu is a random process that says
what the holding in the asset is at time u. Then
                                            Z t
                              Vt = V 0 +           φu dSu                   (12.4)
                                               0

represents the value at time t of an investment portfolio based on holdings
in the given asset, where V0 is the initial value of the portfolio, and φu is
the trading strategy. The term φu dSu represents the infinitesimal gain (or
loss) the portfolio makes at time u when the asset moves up (or down) by
the amount dSu . More fully, we can write
                              Z t                   Z t
                 Vt = V 0 +         φu Su µu du +         φu Su σu dWu ,    (12.5)
                               0                     0

where we have substituted the expression for dSu in from equation (12.1).
The trading strategy φu can, in principle, be deterministic, but generally is
itself also a random process, which depends on how events have played out so
far. As in the discrete time case, we will be interested in deriving a hedging
strategy that allows us to eliminate risk and generate a guaranteed return.
    The main tool that we require is Ito’s Lemma, which says that if the
random process Xt satisfies

                              dXt = µt dt + σt dWt                          (12.6)

and if f (Xt ) has continuous second derivatives as a function f (x), then the
process ft = f (Xt ) satisfies

                                    ∂f        1 ∂2f
                     df (Xt ) =         dXt +        (dXt )2 ,              (12.7)
                                    ∂Xt       2 ∂Xt2

where (dXt )2 is interpreted according to the rules

               (dt)2 = 0,     dtdWt = 0,           and      (dWt )2 = dt.   (12.8)

Thus (dXt )2 = σt2 dt, and we have

                                1 ∂2f
                        Ã                            !
                            ∂f                 ∂f
              df (Xt ) = µt    + σt2 2
                                       dt + σt     dWt .                    (12.9)
                            ∂Xt 2 ∂Xt          ∂Xt



                                          77
This result has numerous applications. For example, suppose that Xt is a
process that satisfies the stochastic differential equation (12.6). What is the
differential of f (Xt ) = exp Xt ? According to the Ito rule we have

                              ∂eXt 1 2 ∂ 2 eXt            ∂eXt
                          Ã                     !
                  Xt
             de        = µt          + σt        dt + σ t      dWt .
                               ∂Xt     2 ∂Xt2             ∂Xt
                                      1
                              ·                              ¸
                           Xt                  2
                       = e      (µt + − sigmat )dt + σt dWt            (12.10)
                                      2
Exercise 12.1 Use Ito’s lemma to show that equation (12.2) is a solution
of (12.1) when µ and σ are constant.

Exercise 12.2 Find the stochastic derivatives of the following processes

  1. Xt = Wt2 − t

  2. Xt = Wt3 − 3tWt

  3. Xt = Wt4 − 6tWt2 + 3t2

where Wt is a Wiener process. What do these processes have in common?

Exercise 12.3 Use Ito’s lemma to show that if Zt = Xt Yt , then

                          dZt = Xt dYt + Yt dXt + dXt dYt              (12.11)

Verify this in the case Xt = Wt and Yt = Wt2 where Wt is the Wiener process.
Hint: consider (Xt + Yt )2 − Xt2 − Yt2 .

Exercise 12.4 Use Ito’s lemma to show that for processes Xt , Yt we have

                                      (dY )2 dXdY
                               "                               #
                     X    X dX   dY
                   d( ) =      −    +       −                          (12.12)
                     Y    Y X     Y     Y2    XY




                                         78
13      Arbitrage Argument
It is now time to make a first attempt at deriving the Black-Scholes formula
for the value of a call option. In fact, we shall derive the Black-Scholes partial
differential equation, which is valid for any derivative. However, it is only
in specific simple cases, such as that of a call or put option with constant
‘market parameters’, where an explicit solution can be found.

13.1     Derivation of the No-Arbitrage Condition
Consider a financial market that consists of one basic asset and a money
market account. Suppose that the underlying asset has a stochastic price
process St with dynamics

                           dSt = µt St dt + σt St dWt ,                    (13.1)

where µt is the drift and σt is the volatility. Later we shall specialize to the
case where µt and σt are constant, but for the moment we shall allow these
processes to be fairly general, depending on the ‘history’ of Wt between 0
and t. The money market account or bond process Bt satisfies the stochastic
differential equation
                                 dBt = rt Bt dt,                          (13.2)
where rt is the instantaneous risk-free interest rate or ‘short rate’. As in the
case of the drift and volatility, for now we will only assume that the short
rate is adapted to the Brownian motion Wt , but eventually we will take it to
be constant.
    In addition to the underlying asset and the bond, we also have an option
on St , with price Ct at time t. In fact, for the moment we may suppose
that Ct is a fairly general European-style derivative. It is therefore entirely
specified by a maturity T and a payoff function CT . Eventually we shall
calculate the initial price for the payout

                           C(ST ) = max(ST − K, 0),                        (13.3)

that is, a call option. The payoff function of a call option was illustrated in
figure 1.1.
    What is the stochastic differential equation satisfied by Ct ? We shall
assume that Ct is ‘driven’ by the same randomness that affects St , that is,


                                       79
the Wiener process Wt . Hence the derivative price has the dynamics

                          dCt = µC          C
                                 t Ct dt + σt Ct dWt ,                     (13.4)

where µC           C
         t and σt are respectively the drift and volatility of the derivative
price. Note that the stochastic process Ct does not really need to be a
derivative at all! As remarked above, the only condition that we have actually
required is that the random part of the ‘derivative’ motion is driven by the
same Wiener process Wt that generates the randomness in the asset price
process St . It turns out that the drifts and volatilities for any two processes
that are driven by the same Brownian motion are not independent. That this
result follows from an arbitrage argument should not be too surprising—by
going long one process and short the other we can eliminate the common
source of uncertainty and hence generate a guaranteed return. Any portfolio
with a guaranteed return immediately implies that an arbitrage argument is
waiting to happen.
    Suppose that an arbitrageur wants to make a risk-free profit (after all,
who doesn’t?) by investing in the asset and derivative. Let φt be the trading
strategy for the underlying asset, that is, φt tells us how much of the asset that
we own at time t. It is the value of the trading strategy that will eventually
be determined by the no arbitrage argument.
    A self-financing trading strategy is a trading strategy that has no external
cash-flow. That is, any changes in the value of the portfolio are entirely due
to changes in the value of the underlying assets and not due to money being
put in or taken out of the portfolio in order to fund asset sales or purchases.
For example, if we have a single asset with price process St and trading
strategy φt , then the portfolio value is Vt = φt St and the change in the value
of the portfolio over a short time interval [t, t + dt] is dVt = φt dSt + St dφt .
The trading strategy is self-financing only if St dφt = 0 because this is an
external cash-flow, whereas φt dSt is caused by a change in the value of the
asset price. Consider the constant position φt which buys one unit of stock
at time 0 and then simply holds onto it. The portfolio value is Vt = φt St and
the change in the value of the portfolio is simply dVt = φt dSt . Hence φt is
self-financing. A trading strategy that is not self-financing is φt = t which
continuously buys stock. The value of the portfolio is Vt = tSt , and hence
the change in its value over a short time interval is dVt = St dt + tdSt , which
is not equal to φt dSt . The amount St dt is an external cash-flow that must
be added to the portfolio in order to fund the continual asset purchases.

                                       80
     In the next chapter we will look at trading strategies which consist of
positions in both an asset and a bond. In that case the value of a portfolio
with a trading strategy (φt , ψt ) is Vt = φt St + ψt Bt . The change in a self-
financing strategy must be entirely due to the change in the asset and bond
prices, that is dVt = φt dSt + ψt dBt . Unlike the single asset case, we no longer
have to require that the change in the trading strategy vanishes, that is, we
can buy and sell assets and bonds, but we do require that the additional
terms that arise from these sales and purchases cancel each other in such
a way that no external cash-flow is required. For example, if we want to
increase our asset holdings φt , then the money to fund this purchase must
come from a correspondingly shorter position ψt in the bond. We can make
the trading strategy φt = t into a self-financing one by adding a bond position
of                                       Z t
                                             Su
                                ψt = −          du,                         (13.5)
                                          0 Bu
which simply borrows the money from the bond market to pay for the pur-
chases in the asset market, which means that St dφt + Bt dψt = 0. Self-
financing strategies are very important for arbitrage arguments because we
cannot require a portfolio that starts with no net position to end with sim-
ilarly no net value if there is an external cash-flow which adds or subtracts
money from the position.
     Now back to the arbitrage argument. As in our previous examples, the
arbitrageur begins at time t with no money. He then buys one option for
Ct dollars and assumes a short position in φt units of the underlying asset.
Note that we assume that the asset can be bought and sold in any quantity.
Setting up this portfolio costs Vt = Ct − φt St dollars, which must be funded
by a bank loan. Interest accumulates continuously on this loan at the rate
rt , so that after a small time interval dt the arbitrageur owes an additional
rt Vt dt dollars to the bank.
     But what is the value of φt , that is, how much of the asset are we short-
ing? Just as in the discrete time case, the ‘arbitrage strategy’ φt is chosen so
that the risk or randomness in holding the option exactly cancels the risk in
holding the asset. This is the only way to ensure the guaranteed return nec-
essary for an arbitrage argument. So what is the return on the arbitrageur’s
portfolio? Well, the value of his position at any time t is
                                V t = C t − φ t St .                       (13.6)
Assuming that we do not adjust the value of φt , that is we neither buy nor

                                        81
sell any underlying assets, then the change in the value of the portfolio Vt
over the short time interval [t, t + dt] is

             dVt = dCt − φt dSt
                 = Ct (µC       C
                        t dt + σt dWt ) − φt St (µt dt + σt dWt )
                 = (µC                       C
                     t Ct − φt µt St )dt + (σt Ct − φt σt St )dWt ,        (13.7)

where we have assumed that the asset and option prices obey equations (13.1)
and (13.4) respectively. We can now fix φt by setting the coefficient of dWt
to zero. This ensures that the arbitrageur’s asset and option portfolio offers
a definite rate of return over the small time interval dt. Hence
                                         σtC Ct
                                  φt =          ,                          (13.8)
                                         σ t St
and we call this value of φt the arbitrage strategy. We can then calculate the
change in the value of the position when the arbitrage strategy is used,

                         dVt = (µC Ct − φt µt St )dt
                               Ãt
                                      σtC µt
                                             !
                                  C
                             = µt −            Ct dt.                      (13.9)
                                        σt

But the arbitrageur can make a risk-free profit if the drift in equation (13.9)
yields a monetary gain greater than the interest payment rt Vt dt on the loan.
This follows because at time t + dt, the value of the arbitrageur’s asset and
option portfolio is Vt + dVt , while the amount owed to the bank is Vt + rt Vt dt.
Hence his net position is the risk-free amount dVt − rt Vt dt. Since he started
with no money, the no arbitrage argument tells us that his final position
must also be zero, and thus

                                  dVt = rt Vt dt.                         (13.10)

This implies that

                          dVt = rt (Ct − φt St )dt
                                         σtC
                                   Ã         !
                              = rt 1 −          Ct dt,                    (13.11)
                                         σt

where we have used the value of Vt from equation (13.6), and substituted in
the arbitrage trading strategy φt , as given by equation (13.8).

                                         82
   Equating equations (13.9) and (13.11) we get

                               σtC µt              σC
                                             Ã           !
                          µC
                           t −        = rt       1− t        .              (13.12)
                                 σt                 σt

After some rearrangement we obtain the formula

                               µC
                                t − rt   µt − r t
                                       =          .                         (13.13)
                                 σtC        σt

This is the general relation between µC            C
                                         t , µt , σt , σt and rt that is required if
there is to be no arbitrage between the option and the underlying. We there-
fore call this the no arbitrage condition. Note that we have made no specific
assumptions about the form of the volatility, drift or short-rate processes, or
even what kind of derivative that we are speaking of (except that its value,
like that of St , should be determined by a knowledge of Wt between 0 and
t), so that relation (13.13) is quite general. In fact, Ct does not even need to
be a derivative, but rather it can be any price process that is driven by the
same Brownian motion as St . In economic terms (13.13) says that the rate
of return above the risk-free rate, per unit of risk, that is, volatility, has to
be the same for any two processes governed by the same random motions.

13.2     Derivation of the Black-Scholes Equation
To proceed further, we now assume that at each time t the derivative price
Ct can be specified in terms of a function Ct = C(St , t) of just the asset
price and time. This is true for a call option and many other standard types
of derivatives. The big advantage of this assumption is that it allows us to
apply Ito’s lemma to the derivative price,

                ∂Ct      ∂Ct          1 ∂ 2 Ct
        dCt =       dt +     dSt +             (dSt )2
                 ∂t      ∂St          2 ∂St2
                                      1 ∂ 2 Ct 2 2
                Ã                                    !
                  ∂Ct ∂Ct                               ∂Ct
              =       +      µ t St +          S σ dt +
                                             2 t t
                                                            St σt dWt . (13.14)
                   ∂t    ∂St          2 ∂St             ∂St

Comparing the terms from this result with the coefficients of dt and dWt in
the original price process (13.4)

                            dCt = µC          C
                                   t Ct dt + σt Ct dt,                      (13.15)

                                        83
we deduce that
                     C       ∂Ct ∂Ct            1 ∂ 2 Ct 2 2
                    µt C t =     +     µ t St +         S σ ,            (13.16)
                              ∂t   ∂St          2 ∂St2 t t
and
                                           ∂Ct
                                σtC Ct =       St σ t .                  (13.17)
                                           ∂St
If we then use these expressions to substitute for µC      C
                                                    t and σt in the no arbi-
trage condition (13.13) obtained earlier, we get
        ∂C   ∂C           1 ∂2C 2 2                     ∂C
           +     µ t St +       S σ − rt C = (µt − rt )
                              2 t t
                                                            St .         (13.18)
        ∂t   ∂St          2 ∂St                         ∂St
Note that the terms involving µt on the right and left miraculously cancel,
and we are left with the equation
                    ∂C 1 ∂ 2 C 2 2
                                                Ã            !
                                                   ∂C
                       +      2
                                St σ t = r t C t −    St .               (13.19)
                    ∂t   2 ∂S                      ∂S
This is the famous Black-Scholes partial differential equation for the price of
a derivative. Note that it is independent of the drift of the asset price and
both the drift and volatility of the derivative price.

Exercise 13.1 We can also derive the Black-Scholes equation in the fol-
lowing equivalent manner. Begin with nothing and take the position Vt =
Ct − φt St − ψt Bt . Then use an arbitrage argument on the value of the port-
folio at time t + dt, where the stock and bond holdings are kept fixed over the
time interval [t, t + dt].

    To value a derivative we need to impose a ‘boundary condition’ on the
differential equation (13.19). This will take the form of a specification of the
terminal pay-off function of the derivative. In the case of a call option, for
example, we want
                            CT = max(ST − K, 0).                         (13.20)
The idea is to solve for Ct as a function of St and t for values of t less than
T . In particular, we want the value of C0 , which is the initial price of the
derivative. The solution of equation (13.19) for constant values of σt , µt , and
rt , subject to the call option boundary condition, is given by

               C(St , t) = e−r(T −t) [St er(T −t) N (h+ ) − KN (h− )],   (13.21)

                                         84
where
                            ln(St er(T −t) /K) ± 12 σ 2 (T − t)
                     h± =                  √                    ,         (13.22)
                                        σ T −t
and N (x) is the cumulative probability function for the N (0, 1) normal dis-
tribution,
                                  1 Z x − 1 ξ2
                        N (x) = √          e 2 dξ.                    (13.23)
                                  2π −∞
One can verify that (13.21) and (13.22) do indeed solve (13.19) for constant
drift and volatilities, subject to the condition (13.20). This involves quite a
bit of calculation. In fact, there is a quicker way of getting this result, by use
of martingale arguments, which we shall look at later. This by-passes the
need for solving the differential equation (13.19). Nevertheless as a piece of
elegant mathematics it is very instructive to see how (13.19) leads to (13.21).
Form a numerical point of view, the partial differential approach is the best
way to obtain a price for an exotic derivative.

Exercise 13.2 Calculate the price for a 6-month option with a strike of
$115, if the initial cost of the asset is $100, the volatility is 20% per year and
the risk-free interest rate is 5% per year.




                                         85
14      Replication Portfolios
We have seen that if an asset price St moves according to the process dSt =
µt St dt+σt St dWt , and if a derivative based on the asset moves according to the
process dCt = µC              C
                  t Ct dt + σt Ct dWt , and if the money market account process
Bt satisfies dBt = rt Bt dt, then to avoid arbitrage the relation (µC          C
                                                                     t − rt )/σt =
(µt − rt )/σt must hold. This ensures that if we hold a portfolio Vt that is long
one derivative and short φt units of the asset, and φt is chosen so that the
return on the position is riskless, that is φt = σtC Ct /σt St , then this riskless
rate of return is equal to the risk-free short-rate rt .
     In this chapter we shall demonstrate a complementary result, namely
that a position in the derivative can be replicated by a portfolio composed of
holdings in both the underlying asset and the money market account. Recall
that going long in the money market is equivalent to investing money at the
rate rt , while going short is the same as borrowing money at the same rate
rt .
     So, how can we replicate the derivative? We begin by recalling that if
we follow the arbitrage strategy φt , then we obtain a fixed return on the
position Vt , given by dVt = rt Vt dt. But this rate of return is equal to the
rate of return obtained by an investment in the money market account, as
required by the no arbitrage argument. So instead of buying the derivative
and selling φt units of the asset, that is taking the position Vt , we could
achieve the same effect by setting up a portfolio V̄t which simply invests ψt
in the money market account. Since we want the portfolios to have the same
value at time t, we clearly set
                                   ψt = Vt /Bt .                            (14.1)
If we hold our investment in the bond fixed, then the change in the value of
this portfolio between time t and time t + dt is
                                dV̄t =    ψt dBt
                                     =    ψt rt Bt dt
                                     =    rt Vt dt
                                     =    dVt .                             (14.2)
Thus, V̄t exactly replicates Vt and the two processes must therefore be equal.
But this means that
                               ψ t B t = C t − φ t St ,                 (14.3)

                                         86
and hence
                               C t = ψ t B t + φ t St .                   (14.4)
In essence what we have done is first calculated φt using a no arbitrage
argument, and then simply defined ψt by equation (14.4).

Exercise 14.1 We want to show that the trading strategy (φt , ψt ) defined by
equations (13.8) and (14.4) is self-financing.

 (a) Begin by showing that

                                  Ct               St
                                  µ     ¶          µ      ¶
                                d           = φt d    .                   (14.5)
                                  Bt               Bt
      We could, in fact, use this as a defintion of φt .

 (b) Next, calculate the change in the bond position, Bt dψt .

 (c) Finally, use these two results to verify that

                                dCt = φt dSt + ψt dBt ,                   (14.6)

      which means that the trading strategy is indeed self-financing.

    This portfolio consisting of φt units of the underlying asset and ψt units of
the money market account is called the replication portfolio. Its importance
can be seen by considering the risk associated with derivatives. Suppose
that at time 0 an investment bank sells a derivative to a client at a price C0 .
Then at time T it will have to pay the client CT . This involves risk for the
bank, since, depending on the value of CT it might lose money. However, if
the C0 from the sale of the option is immediately invested to synthesize a
replication portfolio, then the value of the replication portfolio at time T will
automatically be CT , which can be paid directly to the client. Thus, there
is no risk that the bank will make a loss. Actually the bank cannot make a
profit either, unless a price somewhat greater than C0 is actually charged for
the derivative.
    So, why do we need derivatives at all, if we can replicate them with an
appropriate portfolio? The reason is that the trading strategies φt and ψt
require continuous attention and re-adjustment which the client may wish to
avoid, and indeed may not have the facility to carry out efficiently.


                                         87
    The value of φt in equation (13.8) is not very practical since it is defined
in terms of two unknown volatilities σtC and σt . A more useful expression
can be obtained from equation (14.6),

                                          ∂Ct
                                   φt =       .                           (14.7)
                                          ∂St
This tells you how much stock needs to be held at time t in order to replicate
the ‘risky’ part of the motion of Ct . Intuitively, if the underlying asset moves
by a small amount ∆St , then the first order change in the derivative price
should be (∆St )∂Ct /∂St . Hence if we are long one derivative and short φt
units of stock, then the two changes will cancel one another. The quantity
φt is generally called the ‘Delta’ of the derivative.
    What is the value of the bond position in our replicating portfolio? Sub-
stituting equation (14.7) into equation (14.4), which defines ψt , we see that
                                    Ã             !
                                1       ∂Ct
                           ψt =    Ct −     St .                          (14.8)
                                Bt      ∂St

This tells you how much money needs to be invested in the money market
account when you are trying to replicate the derivative.




                                        88
15      Solving the Black-Scholes Equation
We now want to solve the Black-Scholes equation for a general ‘European’
payoff, assuming that the drift, volatility, and interest rates are all constant.
In this case the stochastic asset price process is

                             dSt = µSt dt + σSt dWt .                         (15.1)

In exercise (12.1) we verified that the solution of this stochastic differential
equation is
                                               1 2
                             St = S0 eµt+σWt − 2 σ t ,                    (15.2)
where S0 is the initial price of the asset. If C(St , t) is the value of a derivative
at time t which expires at time T , then in the previous two chapters we
showed that for 0 ≤ t ≤ T it must satisfy the Black-Scholes partial differential

                     ∂Ct 1 2 2 ∂ 2 Ct
                                              Ã              !
                                               ∂Ct
                         + σ t St   2
                                      = r Ct −     St .                       (15.3)
                      ∂t  2       ∂St          ∂St

Our goal is to solve this equation subject to the specification of a general
payoff function C(ST , T ) = f (ST ) at the expiry time T . In the event that
the derivative is a call option with payoff max[ST − K, 0], then we can obtain
a nice analytic formula for the initial price, known as the Black-Scholes for-
mula. In the case of a more general derivative we shall demonstrate, just as in
the discrete time case, that the initial price can be expressed as a discounted
expectation of the payoff function.
    To begin with, we note that the Black-Scholes equation (15.3) has a pass-
ing similarity to the more common heat equation

                            ∂A(x, τ )  1 ∂ 2 A(x, τ )
                                      = σ2            .                       (15.4)
                              ∂τ       2     ∂x2
In fact, by a series of transformations the Black-Scholes equation can be re-
duced to the heat equation. this means that we can solve for the derivative
price by a two-step method. First, we show how to solve the heat equa-
tion (15.4) subject to a prescribed initial condition A(x, 0) = f (x). Second,
we explicitly demonstrate the transformations needed to convert the Black-
Scholes equation to the heat equation. By combining these two results we
can write down the solution to the Black-Scholes equation for a derivative
with an arbitrary European payoff.

                                         89
15.1     Solution of the Heat Equation
Let Wτ be a standard Brownian motion. If we consider a function f (x + Wτ ),
then from Ito’s lemma we see that
                                ∂f (x + Wτ )       1 ∂ 2 f (x + Wτ )
            df (x + Wτ ) =                   dWτ +                   dτ.            (15.5)
                                    ∂Wτ            2       ∂Wτ2
Note that we want to treat x as a parameter rather than a variable, and
hence have ignored it in deriving the stochastic differential equation. If we
integrate this equation with respect to τ then we obtain
                          Z τ
                                ∂f (x + Ws )       1 Z τ ∂ 2 f (x + Ws )
  f (x + Wτ ) = f (x) +                      dWs +                       ds,        (15.6)
                           0        ∂Ws            2 0         ∂Ws2
where we have used the fact that W0 = 0. We then notice that differentiating
f (x + Wτ ) with respect to Wτ is the same as differentiating it with respect
to x, that is
 ∂f (x + Wτ )   ∂f (x + Wτ )                     ∂ 2 f (x + Wτ )   ∂ 2 f (x + Wτ )
              =                           and                    =                 . (15.7)
     ∂Wτ             ∂x                                ∂Wτ2               ∂x2
This is useful because we want to derive the heat equation, which involves
derivatives with respect to a real quantity x, rather than a stochastic variable
like Wτ . Substituting these results into the equation for f (x + Wτ ) we obtain
                          Z τ
                                ∂f (x + Ws )       1 Z τ ∂ 2 f (x + Ws )
  f (x + Wτ ) = f (x) +                      dWs +                       ds.        (15.8)
                           0         ∂x            2 0          ∂x2
If we take an expectation on each side of this equation, then the stochastic
integral vanishes, and we obtain
                                       1 Z τ ∂ 2 E[f (x + Ws )]
              E[f (x + Wτ )] = f (x) +                          ds.                 (15.9)
                                       2 0           ∂x2
Exercise 15.1 By using the definition of a stochastic integral show that for
any well-behaved function g(Wt )
                                    ·Z t              ¸
                                E          g(Ws )dWs = 0,                          (15.10)
                                      0

and hence we are justified in discarding the expectation of the stochastic in-
tegral in equation (15.9).

                                                90
   If we define the function

                            A(x, τ ) = E[f (x + Wτ )],                     (15.11)

then equation (15.9) becomes

                                           1 Z τ ∂ 2 A(x, s)
                      A(x, τ ) = f (x) +                     ds.           (15.12)
                                           2 0       ∂x2
Differentiating with respect to τ , we see that A(x, τ ) satisfies the heat equa-
tion
                           ∂A(x, τ )    1 ∂ 2 A(x, τ )
                                     =                 .                  (15.13)
                              ∂τ        2 ∂x2
Furthermore, if we evaluate A(x, τ ) at τ = 0 we see that

                           A(x, 0) = E[f (x + W0 )]
                                   = E[f (x)]
                                   = f (x),                                (15.14)

that is, A(x, τ ) satisfies the initial condition A(x, 0) = f (x). Thus, we now
have a recipe for solving the heat equation subject to a given initial condition.
Specifically, if A(x, τ ) satisfies the heat equation (15.13) and is subject to the
initial condition A(x, 0) = f (x), then

                   A(x, τ ) = E[f (x + Wτ )]
                                1 Z∞                ξ2
                            = √         f (x + ξ)e− 2τ dξ.                 (15.15)
                                2πτ −∞
   Somewhat more generally, but by an identical argument, we find that

                           A(x, τ ) = E[f (x + σWτ )]                      (15.16)

satisfies the equation

                          ∂            1 ∂2
                             A(x, τ ) = σ 2 2 A(x, τ ),                    (15.17)
                          ∂τ           2 ∂x
subject to the initial condition A(x, 0) = f (x).

Exercise 15.2 Verify that A(x, τ ) as defined by equation (15.16) satisfies
the partial differential equation (15.17).

                                        91
   For fixed τ , the random variable Wτ is normally distributed with mean 0
and variance τ . We can therefore rewrite the solution (15.16) as
                                              √
                         A(x, τ ) = E[f (x + σ τ Z)],                (15.18)
where Z is a standard N (0, 1) random variable. Explicitly writing out the
expectation we have
                              1 Z∞           √       1 2
                  A(x, τ ) = √       f (x + σ τ ξ)e− 2 ξ dξ.              (15.19)
                               2π −∞
Once we have transformed the Black-Scholes equation into the heat equation
we will be able to use this result to calculate solutions of the Black-Scholes
equation, and hence derivative prices.

15.2     Reduction of the Black-Scholes Equation to the
         Heat Equation
Armed with this result we return to the Black-Scholes equation (15.3) and
make a series of crafty transformations in order to reduce it to the heat
equation (15.17). Proceed as follows:
     1. We need to reverse the direction of time, so that the terminal payout
of the Black-Scholes equation becomes the initial condition for the heat equa-
tion. Set C(S, t) = α(S, τ ), where τ = T − t is a new time coordinate which
still runs over the same interval [0, T ] as t, but in the opposite direction. The
derivative expiry time T is, of course, a constant. The time derivatives of
C(S, t) and α(S, τ ) are related by
                                  ∂C   ∂α
                                     =− ,                                 (15.20)
                                  ∂t   ∂τ
while all the other derivatives remain the same. Hence the Black-Scholes
equation becomes
                        ∂α  1 2 2 ∂2α       ∂α
                           = σ S     2
                                       + rS    − rα.                      (15.21)
                        ∂τ  2     ∂S        ∂S
This equation now has the ‘right’ sign for the time derivative, and has the
initial condition
                            α(ST , 0) = C(ST , T )
                                      = F (ST , T ).                      (15.22)

                                       92
2. We now want to eliminate the rα term. We can do this by introducing a
‘discount factor’ e−rτ explicitly into the equation. Set α(S, τ ) = β(S, τ )e−rτ .
The time derivative is then
                                   Ã          !
                            ∂α         ∂β
                               =          − rβ e−rτ ,                     (15.23)
                            ∂τ         ∂τ

and hence equation (15.21) can be written as

                           ∂β  1       ∂2β    ∂β
                              = σ 2 S 2 2 + rS .                          (15.24)
                           ∂τ  2       ∂S     ∂S
   3. To proceed further, we want to write the equation in terms of the
operator S∂/∂S. This can be easily accomplished by rearranging the second
order term,                    Ã      !
                ∂β    1 2 ∂        ∂β         1      ∂β
                   = σ S         S      + (r − σ 2 )S .            (15.25)
                ∂τ    2    ∂S      ∂S         2      ∂S
    4. We can simplify the operator S∂/∂S by defining the new variable
Y = ln S, and noting that
                                    ∂    ∂
                                 S    =    .                       (15.26)
                                   ∂S   ∂Y
If we then introduce the new function γ(Y, τ ) = β(S, τ ), we see that the
differential equation (15.25) becomes

                        ∂γ  1 ∂2γ        1      ∂γ
                           = σ 2 2 + (r − σ 2 )    .                      (15.27)
                        ∂τ  2 ∂Y         2      ∂Y
   5. Finally, we need to get rid of the first order partial derivative. Define
X = Y + (r − 12 σ 2 )τ , and set A(X, τ ) = γ(Y, τ ). The partial derivative of γ
with respect to τ is then given by
                         ∂γ   ∂A ∂A ∂X
                            =    +
                         ∂τ   ∂τ   ∂X ∂τ
                              ∂A ∂A       1
                            =    +    (r − σ 2 ).                         (15.28)
                              ∂τ   ∂X     2
However, since
                                   ∂γ   ∂A
                                      =                                   (15.29)
                                   ∂Y   ∂X


                                         93
it follows that if we substitute (15.28) and (15.29) into equation (15.27) then
the first order derivatives with respect to X cancel and we obtain
                                ∂A  1 ∂2A
                                   = σ2    ,                                (15.30)
                                ∂τ  2 ∂X 2
which is the heat equation at last!
    Now that we have shown that the Black-Scholes equation can be reduced
by a series of transformations to the heat equation, we would like to solve
for the derivative price C(St , t) subject to the terminal condition

                              C(ST , T ) = F (ST ),                         (15.31)

where F (ST ) is a prescribed function, that is, the payoff function of the
derivative. As noted earlier, t = T corresponds to τ = 0, which is why the
terminal payoff function of the derivative is actually an initial condition for
A(x, τ ). If we follow through the various transformations made above, then
we see that the relation between C(St , t) and A(X, τ ) is

          C(St , t) =   α(St , T − t)
                    =   β(St , T − t)e−r(T −t)
                    =   γ(log St , T − t)e−r(T −t)
                    =   A(log St + [r − σ 2 /2][T − t], T − t)e−r(T −t) .   (15.32)

In particular the derivative payoff function can be written as

                           F (ST ) = C(ST , T )
                                   = A(log ST , 0).                         (15.33)

Hence the initial condition on A(x, τ ) at τ = 0 is

                               A(x, 0) = F (ex ).                           (15.34)

For example, in the case of a call option we have

                          A(x, 0) = max(ex − K, 0).                         (15.35)

We can now appeal to our earlier formula (15.19) for the solution of the heat
equation with the initial condition A(x, 0) = F (ex ),
                               1 Z∞          √        1 2
                   A(x, τ ) = √       F (ex+σ τ ξ )e− 2 ξ dξ.               (15.36)
                                2π −∞

                                       94
Using this value of A(x, τ ) and the transformation (15.19) we can then write
the derivative price as
          C(St , t) = A(log St + [r − σ 2 /2][T − t], T − t)e−r(T −t)
                      e−r(T −t) Z ∞                 √     1 2       1 2
                    =  √            F (St er(T −t)+σ τ ξ− 2 σ τ )e− 2 ξ dξ.   (15.37)
                          2π −∞
In particular, if we set t = 0, then we obtain the initial price of the derivative
                      e−rT Z ∞             √     1 2       1 2
                 C0 = √        F (S0 erT +σ T ξ− 2 σ T )e− 2 ξ dξ.            (15.38)
                        2π −∞
We see that the present value of the derivative depends on the expiry date
T , the initial asset price S0 , the volatility σ, the risk-free interest rate r and
the specification of the payoff function F (ST ).
    Note that, similar to the discrete case, we can write the derivative price
in terms of an expectation
                              C0 = e−rT E ∗ [F (ST )],                        (15.39)
where
                                                    1   2
                             ST = S0 erT +σWT − 2 σ T .
                                                ∗
                                                                              (15.40)
WT∗ is a random variable that is normally distributed with mean zero and
variance T with respect to some new probability measure P ∗ . This is the
‘risk-neutral’ measure, just as in the discrete case.
    Before proceeding to the call and ut options, we can begin by pricing the
‘trivial’ derivative that simply delivers ST at time T , that is, F (ST ) = ST .
The price of this derivative is
                       C0 = e−rT E ∗ [F (ST )]
                          = e−rT E ∗ [ST ]
                                                                1   2
                             = e−rT E ∗ [S0 erT +σWT − 2 σ T ]
                                                            ∗


                                       1   2
                             = S0 e− 2 σ T E ∗ [eσWT ].
                                                        ∗
                                                                              (15.41)
Using lemma 11.1 we can evaluate the expectation as
                                                1   2
                                E ∗ [eσWT ] = e 2 σ T ,
                                           ∗
                                                                              (15.42)
and hence see that the derivative price is imply
                                     C0 = S0 ,                                (15.43)
which is what we should expect.

                                           95
Exercise 15.3 Price a forward contract with strike K. This has a payoff
function F (ST ) = ST − K,




                                  96
16      Call and Put Option Prices
Formula (15.38) is a great breakthrough. It says that by performing an
integral we can price any European derivative with a payoff function that
depends only on the final asset price. Note that it does not allow us to
calculate prices for either American exercise or path-dependent derivatives.
However, there are still plenty of examples for us to consider. In this chapter
we want to calculate the initial prices of the two of the most widely traded
derivatives–call and put options.

16.1     Call Option
Recall that the call option payoff is

                          F (ST ) = max(ST − K, 0).                     (16.1)

Hence the initial price of the derivative is

            e− rT Z ∞
                        µ      ·      √      1
                                                  ¸¶   ·
                                                          1
                                                              ¸
     C0 =   √          F S0 exp rT + σ T ξ − σ 2 T exp − ξ 2
              2π −∞                          2            2
             −
            e rT  Z ∞     µ      ·      √      1
                                                    ¸       ¶
          = √          max S0 exp rT + σ T ξ − σ 2 T − K, 0
              2π −∞                            2
                     1
                  ·     ¸
            × exp − ξ 2 dξ.                                     (16.2)
                     2
In order to evaluate the integral we need to remove the max function. This
can easily be accomplished because it will be nonzero only when
                          ·        √  1
                                                ¸
                   S0 exp rT + σ T ξ − σ 2 T − K > 0,                   (16.3)
                                      2
which is equivalent to
                        ·      √     1
                                           ¸
                     exp rT + σ T ξ − σ 2 T > K/S0 .                    (16.4)
                                     2
Taking logarithms of both sides we obtain
                            √     1
                      rT + σ T ξ − σ 2 T > log(K/S0 ).                  (16.5)
                                  2


                                        97
We then want to isolate the integration variable ξ. This will allow us to
discover the integration region where the max function is nonzero. We find
that
                             log(K/S0 ) − (rT − 21 σ 2 T )
                        ξ>                √                .        (16.6)
                                         σ T
If we define the critical value ξ ∗ to be
                               log(K/S0 ) − (rT − 21 σ 2 T )
                        ξ∗ =               √                 ,             (16.7)
                                         σ T
then the max function can be written as
                  µ       ·         √             1 2
                                                      ¸        ¶
             max S0 exp rT + σ T ξ − σ T − K, 0
                                   √
                                                  2
                              rT +σ T ξ− 21 σ 2 T
                      (
                         S0 e                     − K ξ > ξ∗
                    =                                                      (16.8)
                         0                              ξ < ξ∗.
Since the integrand vanishes for ξ < ξ ∗ , we only need to integrate over the
region where ξ > ξ ∗ and the max function takes on a positive value. Hence
the derivative price becomes
      e−rT Z ∞
                  µ        ·√     1               1
                                                      ¸       ¶   ·   ¸
 C0 = √        S0 exp rT + σ T ξ − σ 2 T − K exp − ξ 2 dξ. (16.9)
        2π ξ∗                     2               2
This integral involves two terms, and it is easiest to evaluate them separately.
If we define
                 e−rT Z ∞
                                ·         √        1 2
                                                         ¸    ·
                                                                 1 2
                                                                     ¸
        I1 = √            S0 exp rT + σ T ξ − σ T exp − ξ dξ
                   2π ξ∗                           2             2
                  1   Z ∞       ·
                                    1        √        1
                                                           ¸
             = √          S0 exp − ξ 2 + σ T ξ − σ 2 T                  (16.10)
                   2π ξ ∗           2                 2
and
                                e−rT Z ∞         1
                                                  ·       ¸
                      I2 = −K   √         exp − ξ 2 dξ,                  (16.11)
                                  2π ξ ∗         2
then the derivative price is simply the sum of the two integrals, C0 = I1 + I2 .
The second integral is easier, so we shall calculate it first. Before we do this,
consider the following result
                    1 Z ∞ − 1 ξ2    1 Z −x − 1 u2
                   √      e 2 dξ = √       e 2 du
                     2π x            2π −∞
                                 = N (−x),                                (16.12)

                                          98
where we made the substitution u = −ξ in the first line and N (x) is the
standard normal cumulative probability density function, previously defined
in equation (11.4). Using this result, we see that

                                          e−rT Z −ξ∗ − 1 ξ2
                              I2     = −K √         e 2 dξ
                                            2π −∞
                                     = −Ke−rT N (−ξ ∗ ).                        (16.13)

However, the standard way of writing the Black-Scholes formula is not in
terms of ξ ∗ , but rather in terms of two new constants h+ and h− , defined to
be
                                  log(S̃/K) ± 12 σ 2 T
                             h± =         √            ,               (16.14)
                                         σ T
where S̃ is the forward price S0 erT . If we then rewrite −ξ ∗ as

                          ∗            log(K/S0 ) − (rT − 12 σ 2 T )
                     −ξ            = −             √
                                                  σ T
                                     log(S0 /K) + rT − 21 σ 2 T
                                   =             √
                                                σ T
                                     log(S0 erT /K) − 21 σ 2 T
                                   =            √              ,                (16.15)
                                              σ T
we see that                                                 √
                     −ξ ∗ = h−           and       − ξ∗ +       σT = h+ .       (16.16)
Hence we can write the integral I2 as

                                     I2 = −e−rT KN (h− ).                       (16.17)

   We now want to calculate the slightly more complicated integral I1 . We
begin by ‘completing the square’ in the exponential,
                      1 Z∞             1      √·
                                                    1
                                                                            ¸
              I1   = √        S0 exp − ξ 2 + σ T ξ − σ 2 T dξ
                       2π ξ∗           2            2
                      S0 Z ∞      ·
                                     1      √   ¸
                   = √        exp − (ξ − σ T )2 dξ.                             (16.18)
                       2π ξ ∗        2
                                                                        √
We then want to make a change of integration variable to η = ξ − σ T . In
this case dξ = dη, and the lower limit of integration ξ = ξ ∗ , becomes the new

                                               99
                       √
lower limit η = ξ ∗ − σ T = −h+ . Hence the integral becomes
                                     S0 Z η=∞ − 1 η2
                               I1 = √          e 2 dη.                                (16.19)
                                      2π η=−h+
We can then use the result (C.237) to write the integral in terms of N (x),

                                      I1 = S0 N (h+ ).                                (16.20)

If we then sum the values of the integrals I1 and I2 we obtain

                         C0 = e−rT [S0 erT N (h+ ) − KN (h− )],                       (16.21)

which is the famous Black-Scholes formula for the initial value of a call option.
The price and payout function for a call option are plotted in figure 16.1.


    Option Price


        $45




        $30




        $15




         $0
           $50                $75               $100               $125              $150
                                          Asset Price
Figure 16.1: This figure shows the price for a European call option as a function of the
initial asset price S0 , for a maturity of T = 1, an interest rate of r = 0.05, a volatility of
σ = 0.2 and a strike of K = 100. The dashed line is the payoff function for the option.


Exercise 16.1 Calculate and plot the following derivatives of the option
price at time 0

                                             100
 (a) ∆ = ∂C
         ∂S0
            0


            2
 (b) Γ = ∂∂SC20
                0


 (c) V = ∂C
          ∂σ
            0



 (d) θ = − ∂C
           ∂T
              0



 (e) ρ = ∂C
          ∂r
            0




16.2      Put Option
We recall that a European put option is a derivative that allows the holder
to sell an asset at some time T in the future for a fixed strike price K. Hence
the put option has a payoff function
                          F (ST ) = max[K − ST , 0].                   (16.22)
In other words, this is the net profit that would result if at maturity time
T the holder of the option buys a unit of stock for ST dollars and then sells
it for K dollars, according to the terms of the contract. Clearly the holder
would only do this if K > ST . If K < ST then the option expires worthless.
    We can value the put option in an identical manner to how we dealt with
the call option—by using the general formula (15.38). The initial price of
the put option is therefore
            e−rT Z ∞
                        µ      ·       √    1 2
                                                 ¸¶     ·
                                                           1 2
                                                               ¸
     P0   = √          F S0 exp rT + σ T ξ − σ T exp − ξ dξ
               2π −∞                        2              2
            e −rT Z ∞      µ          ·     √      1
                                                         ¸   ¶
          = √          max K − S0 exp rT + σ T ξ − σ 2 T , 0
               2π −∞                               2
                      1
                   ·     ¸
            × exp − ξ 2 dξ.                                      (16.23)
                      2
As in the call option calculation, we first need to calculate the integration
region on which the integrand is non-zero. This requires
                               ·      √        1 2
                                                    ¸
                   K − S0 exp rT + σ T ξ − σ T > 0,                   (16.24)
                                               2
which implies that
                               ·      √     1
                                                  ¸
                     K/S0 > exp rT + σ T ξ − σ 2 T .                   (16.25)
                                            2

                                     101
Taking logarithms we see that
                         log(K/S0 ) − (rT − 12 σ 2 T )
                                     √                 > ξ.                        (16.26)
                                   σ T
However, the left hand side of the inequality is simply the critical value ξ ∗
defined in equation (C.232). Since the max function is only non-zero when the
integration variable is less than the critical value ξ ∗ , we can restrict the range
of integration in equation (16.23) to −∞ < ξ < ξ ∗ . Thus we can eliminate
the max function from our expression for the price of the put option,
                    e−rT Z ξ∗
                               µ              ·  √     1
                                                                          ¸¶
            P0    = √           K − S0 exp rT + σ T ξ − σ 2 T
                      2π −∞                            2
                              1 2
                          ·       ¸
                    × exp − ξ dξ.                                                  (16.27)
                              2
As before, we have two integrals to calculate,
                               e−rT Z ξ∗      1
                                                  ·   ¸
                        I1 = K √         exp − ξ 2 dξ,                             (16.28)
                                 2π −∞        2
and
                 e−rT Z ξ=ξ∗
                                    ·  √     1           1
                                                              ¸   ·            ¸
      I2   = −S0 √           exp rT + σ T ξ − σ 2 T exp − ξ 2 dξ,
                   2π ξ=−∞                   2           2
                  1 Z ξ=ξ∗
                                ·
                                   1 2   √     1 2
                                                     ¸
           = −S0 √           exp − ξ + σ T ξ − σ T dξ,         (16.29)
                   2π ξ=−∞         2           2
where the put option price is the sum of the two, P0 = I1 + I2 . The integral
I1 is trivial to evaluate,
                             I1 = e−rT KN (ξ ∗ ),                     (16.30)
or in terms of the constants h± defined in equation (C.239),

                              I1 = e−rT KN (−h− ).                                 (16.31)

We can now evaluate the second integral by completing the square in the
exponential,
                        1 Z ξ=ξ∗
                                         ·
                                          1      √      1
                                                                      ¸
           I2    = −S0 √            exp − ξ 2 + σ T ξ − σ 2 T dξ,
                         2π ξ=−∞          2             2
                     S0   Z ξ=ξ ∗    ·
                                        1      √   ¸
                 = −√             exp − (ξ − σ T )2 dξ.                            (16.32)
                      2π ξ=−∞           2

                                        102
                                                         √
If we then change the integration variable to η = ξ − σ√ T , then the upper
limit of integration ξ = ξ ∗ , corresponds to η = ξ ∗ − σ T = −h+ , and we
have
                                  S0 Z η=−h+ − 1 η2
                        I2 = − √              e 2 dη.                (16.33)
                                   2π η=−∞
This is may readily be expressed in terms of N (x),

                                    I2 = −S0 N (−h+ ).                                (16.34)

Summing the values of I1 and I2 yields

                       P0 = e−rT [KN (−h− ) − S0 erT N (−h+ )],                       (16.35)

which is the Black-Scholes formula for the initial value of a put option. This
is plotted in figure (16.2).


    Option Price
       $100



        $75



        $50



        $25



         $0
              $0                     $50                    $100                     $150
                                           Asset Price
Figure 16.2: This figure shows the price for a European put option as a function of the
initial asset price S0 , for a maturity of T = 1, an interest rate of r = 0.05, a volatility of
σ = 0.2 and a strike of K = 100. The dashed line is the payoff function for the option.




                                             103
17     More Topics in Option Pricing
In this chapter we want to look at a few applications of the derivative pricing
formula that we derived. We begin by considering European binary options,
which are derivatives that pay off a constant amount only when the final
asset price is above a fixed strike price—otherwise they pay nothing. We
then discuss the partial derivatives of a portfolio, known as the Greeks, and
see how they are used in hedging. Finally we look at put-call parity which
relates the put and call option prices to the forward price of the asset.

17.1     Binary Options
A derivative which pays off one dollar if the share price is above the strike
price at maturity, and pays nothing otherwise is called a binary call option.
If it pays off one dollar when the share price is below the strike and zero if
it is above then this is called a binary put option. We can define the payoff
function in terms of the Heaviside function
                                     (
                                         1 x>0
                            H(x) =             .                        (17.1)
                                         0 x<0

Hence the payoff function for a binary call with strike K is BCT (ST ) =
H(ST −K), while for a binary put with strike K it is BPT (ST ) = H(K −ST ).
   Suppose that we want to calculate the price for a binary call option. Using
equation (15.38), we see that

      BC0 = e−rT E ∗ [BCT (ST )]
                 e−rT Z ∞                  2
            = √            H(ST − K)e−ξ /2T dξ
                   2πT −∞
                   −rT Z ∞
                 e                           1                 2
            = √            H (S0 exp[ (r − σ 2 )T + σξ ]−K) e−ξ /2T dξ
                   2πT −∞                    2
                e −rT Z ∞
                                          1         √             2
            = √           H (S0 exp[ (r − σ 2 )T + σ T η ]−K) e−η /2 dη,(17.2)
                   2π −∞                  2
                                         √
where we made the substitution η = ξ/ T in the final integral. The Heavi-
side function is non-zero only when
                            ·
                                1          √      ¸
                     S0 exp (r − σ 2 )T + σ T η > K.                    (17.3)
                                2

                                     104
Taking logarithms and isolating η yields
              1          √
          (r − σ 2 )T + σ T η > − log(S/K)
              2
                                                   1        √
                               η > −log(S/K) + (r − σ 2 )T σ T
                                                   2
                               η > −h− .                                  (17.4)

Thus the integral simplifies to
                                    e−rT Z ∞ −η2 /2
                         BC0      = √          e    dη
                                      2π −h−
                                  = e−rT N (h− ) .                        (17.5)

Exercise 17.1 Calculate the value of the binary put option with payoff func-
tion H(K − ST ).

17.2     ‘Greeks’ and Hedging
In chapter 15 we constructed a no arbitrage argument using a portfolio Vt (St )
consisting of a long position in a derivative Ct (St ) and a short position in φt
units of the asset St . Suppose that we consider the portfolio as a stochastic
process. Then by Ito’s lemma the change in the value of the portfolio between
times t and t + dt is
                             ∂Vt      ∂Vt       1 ∂ 2 Vt 2
                     dVt =       dt +     dSt +         dS .              (17.6)
                             ∂t       ∂St       2 ∂St2 t
We were able to eliminate uncertainty in this value by setting
                                     ∂Vt
                                         = 0.                             (17.7)
                                     ∂St
A portfolio that satisfies this is known as Delta neutral or Delta hedged be-
       ∂Vt
cause ∂S t
           is called the Delta of the portfolio.
    The Gamma of a portfolio is the second derivative of its value with respect
to the asset price
                                        ∂ 2 Vt
                                    Γ=         .                         (17.8)
                                        ∂St2
In order to construct the no arbitrage argument we do not need Γ to vanish
because it only contributes to the deterministic part of the portfolio return.

                                       105
However, the no arbitrage argument assumes that we are continuously able
to rehedge our position such that ∆ is always zero. In the context of our
no arbitrage construction, this means that the share holding φt must be
continuously adjusted such that it is always equal to −∂Ct /∂St . In order
to do this we have to be continually buying or selling small amounts of the
underlying asset. However, this is not realistic because there are transaction
costs associated with each trade which make constant rehedging prohibitively
expensive. So what really happens is that we start with a Delta neutral
position which quickly becomes no longer Delta hedged as the share price
moves around. We then rehedge our position, that is, make it Delta neutral
again, from time to time to reduce the possibility of losing substantial sums
of money.
    Is there any way that we can reduce the frequency with which we need to
rehedge our position? Well, we have to adjust our holdings when the value of
Delta becomes too large and sizeable losses can result from small movements
in the underlying asset. If we set Gamma equal to zero, then Delta should
remain small for asset prices near its current value, and hence we will need
to rehedge less often. This is the rationale behind Gamma hedging.
    In order to Gamma hedge, assuming that we are also Delta hedging, our
portfolio must consist of at least three instruments that depend on the same
underlying asset. Suppose that we are short a derivative with price process
Ft (St ). We can hedge this by taking a position in both the underlying St and
a call option Ct (St ). The value of the portfolio is
                           Vt = −Ft + φt St + κt Ct                           (17.9)
The Delta and Gamma of the portfolio are
              ∂Ft           ∂Ct                      ∂ 2 Ft       ∂ 2 Ct
      ∆=−         + φt + κt        and       Γ=−            + κ t        .   (17.10)
              ∂St           ∂St                      ∂St2         ∂St2
We can set Γ to zero by choosing
                                         ∂ 2 Ft
                                         ∂St2
                                  κt =   ∂ 2 Ct
                                                ,                            (17.11)
                                         ∂St2

which allows us to set ∆ equal to zero if we take
                                            ∂ 2 Ft
                                 ∂Ft   ∂S 2 ∂Ct
                            φt =     − ∂ 2 Ctt     .                         (17.12)
                                 ∂St   ∂S 2
                                               ∂St
                                                t


                                      106
For example, we could Gamma hedge a short position in a binary call option
by holding both the underlying asset and a call option on it.

Exercise 17.2 Construct a Gamma hedged position for a portfolio which is
short a binary call option with a strike price of $110 using the underlying
asset which has a price of $100 and a call option with a strike price of $120.
Assume that r = 0.05, σ = 0.20 and that both options have a maturity of
T = 1.0.

Exercise 17.3 Can you Gamma hedge a short position in a call option with
strike K by using the underlying and a call option of a different strike? Give
a specific example.

17.3     Put-Call Parity
There is an interesting and useful relationship between the value of a call
option and the value of the corresponding put option, that is, the put option
with the same maturity and strike price on the same underlying. Consider a
position which is long the call and short the put. The payoff function is

                F (ST ) =   C(ST ) − P (ST )
                        =   max[ST − K, 0] − max[K − ST , 0]
                        =   max[ST − K, 0] + min[ST − K, 0]
                        =   ST − K.                                    (17.13)

But this is simply the payoff function for a forward contract with strike
K. We have previously shown that the value of the forward contract is
S0 − Ke−rT . Hence the initial prices of the call and put portfolio must
simply equal this value

                            C0 − P0 = S0 − Ke−rT .                     (17.14)

This is the put-call parity relation.

Exercise 17.4 Derive the put-call relation when St is the price of sterling in
dollars and the interest rates are r and ρ for dollars and pounds respectively.




                                        107
   We can also derive a put-call relation for the binary options. Consider
a portfolio which is long both a put and call option with the same strike K
and maturity T . The payoff function is

                   F (ST ) = BCT (ST ) + BPT (ST )
                           = H(ST − K) + H(K − ST )
                           = 1.                                        (17.15)

Hence the payoff is always one dollar. The initial price of a dollar is simply
e−rT , and hence
                            BC0 + BP0 = e−rT .                          (17.16)

Exercise 17.5 Using the Black-Scholes formulae for the put and call option
prices verify the put-call relation.




                                     108
18      Continuous Dividend Model
There is a relatively simple but important adjustment that must be made to
the Black-Scholes formula in order to take into account the fact that stocks
pay dividends. These are typically relatively small payments made from time
to time to the shareholders. The fact that dividends are paid to the owner
of a stock means that the no arbitrage argument for pricing a derivative on
the stock has to be modified. For simplicity, we shall assume that dividends
are paid continuously over time at a rate δt St . In other words, the holder of
the share at time t receives a dividend δt St dt in the time interval from t to
t + dt.
    The situation is similar with a foreign currency. If St denotes the value
of a foreign currency at time t, say, the price of one pound sterling in dollars,
then the holder of that currency, assuming it is kept in a money market
account, is paid interest on it. The amount of interest paid in the interval t
to t + dt is δt St dt, where δt is the foreign interest rate. Note that in many
circumstances interest really is paid on a continuous basis, whereas dividends
are certainly not. If the underlying is taken to be a stock index, then the
approximation of continuous dividends is more valid.
    We begin our work on the dividend model by calculating the cost of a
forward contract to buy one share for K dollars at time T , assuming that
the dividend yield δ is constant. The initial cost of the contract is F0 dollars
and the final payoff is FT (ST ) = ST − K. We can replicate this payoff by
buying a portfolio which is long e−δT shares and short Ke−rT bonds. The
initial value of this position is

                             V0 = S0 e−δT − Ke−rT                         (18.1)

We want to continuously reinvest the dividends back into shares. Thus the
share holding ψt satisfies the differential equation

                                   dψt = δdt                              (18.2)

since we receive δSt dt dollars in each small time interval and this can be
used to buy δdt more shares, which each cost St . Hence the share holding is
ψt = ψ0 eδt . Thus the final value of the portfolio is

                                 VT = ST − K,                             (18.3)


                                      109
which is the payoff from the forward contract. Since the final payoffs are the
same, the initial values of the two positions must also be the same, and so
                            F0 = S0 e−δT − Ke−rT .                         (18.4)
The forward price S̃ is the value of the strike price for which the initial cost
of the forward contract is zero. It is easy to see that
                                 S̃ = S0 e(r−δ)T .                         (18.5)
Exercise 18.1 What is the put-call relation for the constant dividend yield
model?
    Now let us consider a local arbitrage argument that will eventually lead us
to a generalisation of the Black-Scholes equation. Assume that the underlying
asset price process is given by the usual stochastic differential equation
                              dSt
                                  = µt dt + σt dWt ,                       (18.6)
                               St
where the drift µt , the volatility σt , the dividend rate (or foreign interest
rate) δt and the ‘domestic’ interest rate rt are all ‘adapted’ to the Brownian
motion Wt .
     Suppose that we also have a derivative with price Ct at time t, with drift
µC              C
 t volatility σt and that it satisfies the dynamics
   ,
                             dCt
                                 = µC       C
                                    t dt + σt dWt .                        (18.7)
                              Ct
Our goal is to discover the no-arbitrage relation between St and Ct , which
will take the form of a relation between µt , σt , δt , rt , µC           C
                                                                t and σt . Note
that as in the previous case, Ct does not actually have to be a derivative of
St , but merely must be driven by the same Brownian motion Wt . For the
sake of symmetry, let us also suppose that the derivative pays a continuous
dividend, at the rate δtC , which we also assume to be adapted to Wt . It might
be thought that too many processes are being adapted to the same source
Brownian motion. This defect will be cured later when we consider multiple
assets and multiple sources of randomness.
     This time we shall present the arbitrage argument from the point of view
of a ‘dealer’, who ‘sells’ the derivative to a client for the price Ct , and wants
to hedge his risk by buying φt units of stock at price St . Thus, the dealer
proceeds as follows:

                                       110
   • First, he borrows φt St − Ct dollars from a bank, at the continuously
     compounded interest rate rt .
   • Next, the derivative is sold to the client for Ct .
   • Finally, φt units of stock are bought, for φt St dollars.
The value of the dealer’s position (long the stock and short the derivative)
is thus
                               V t = φ t St − C t .                   (18.8)
In other words, to ‘close down’ the position the dealer would have to sell φt
units of stock, and buy back the derivative, giving a total value Vt , which
might be negative. The change in the value of the position over the small
time interval from t to t + dt is given by

                    dVt = φt dSt − dCt + δφt St dt − δ C Ct dt.                (18.9)

The last two terms appear because the dealer has had to pay a small div-
idend δtC Ct dt to the holder of the derivative, but at the same time gets a
dividend δt φt St dt on the shares. Substituting in for dSt and dCt from the
price processes for the stock and the derivative, we obtain

 dVt = φt (µt St dt+σt St dWt )+φt St δdt−(µC        C              C
                                            t Ct dt+σt Ct dWt )−Ct δt dt. (18.10)

More explicitly, gathering terms together we have

  dVt = (φt µt St + φt δt St − µC       C                       C
                                t Ct − δt Ct )dt + (φt σt St − σt Ct )dWt .   (18.11)

To ensure a definite rate of return on the hedged position, the dealer must
ensure that the coefficient of dWt is made to vanish in this expression, so
that the hedge ratio φt is given by
                                           σtC Ct
                                    φt =          .                           (18.12)
                                           σ t St
Note that the inclusion of dividends does not affect the formula for the hedge
ratio, which agrees with the result calculated previously in equation (14.1).
    Thus the change in the hedged position dVt , obtained by substituting the
hedge ratio (18.12) into (18.11), is given by
                                      σC
                     dVt = [(µt + δt ) t − (µC    C
                                             t + δt )]Ct dt,                  (18.13)
                                      σt

                                        111
whereas the value Vt = φt St − Ct of the dealer’s position is

                                          σC
                                      Ã         !
                               Vt =          − 1 Ct .                      (18.14)
                                           σ

For no arbitrage, the gains on the dealer’s risk-free position must be equal to
the corresponding gains one would earn from a bank account with interest
rate rt , so
                                 dVt = rVt dt.                          (18.15)
It follows by substitution that

                             σC                     σtC
                                                        Ã    !
                   (µt + δt ) t + (µC
                                    t + δ C
                                          t ) = r t     −1 ,               (18.16)
                             σt                     σt

which therefore implies

                          µt + δ t − r t  µC + δtC − rt
                                         = t            .                  (18.17)
                              σt              σtC
This is the no arbitrage relation in the presence of dividends. Or equivalently,
if we interpret St as the price of a foreign currency (in units of domestic cur-
rency) then δt has the interpretation of a foreign interest rate, and (18.17)
is the no arbitrage condition for derivatives based on that currency. The fi-
nancial interpretation of this relation is that the total excess return (‘capital’
gains plus dividends) above the risk-free interest rate, per unit of risk (volatil-
ity), is the same for both the underlying asset and the derivative, or more
generally, for any two instruments driven by the same Brownian motion.

18.1     Modified Black-Scholes Equation
Let us see what implications the inclusions of dividends has for the Black-
Scholes equation. As in the previous derivation we assume that Ct = C(St , t).
Ito’s lemma then implies that

                                   ∂C 1 2 2 ∂ 2 C
                              "                             #
                     C  1 ∂C
                    µ =       + µS    + σ S       ,                        (18.18)
                        Ct ∂t      ∂S  2    ∂S 2

and                                        "        #
                                  C1     ∂C
                               σ =    σS    .                              (18.19)
                                   Ct    ∂S

                                          112
Here, to simplify the notation slightly, we temporarily drop the time sub-
scripts on the processes µt , σt , δt , rt , µC    C      C
                                              t , σt and δt . As a consequence of
the no-arbitrage relation (18.17) we have

                                   σC
                     (µ + δ − r)      Ct = (µC + δ C − r)Ct ,            (18.20)
                                    σ
which follows by multiplying equation (18.17) by σ C Ct . Substituting in the
expressions for µC and σ C obtained above, we see therefore that

                    ∂C   ∂C      ∂C 1 2 2 ∂ 2 C
    (µ + δ − r)St      =    + µS    + σ S     2
                                                + (δ C − r)Ct .          (18.21)
                    ∂S   ∂t      ∂S  2    ∂S
Note that once again the terms involving µ cancel, and we are left with

           ∂Ct 1 2 2 ∂ 2 Ct                            ∂Ct
               + σ St     2
                            = (r − δ C )Ct − (r − δ)St     .             (18.22)
            ∂t  2     ∂St                              ∂St
This is the Black-Scholes equation as modified for the inclusion of dividends.

Exercise 18.2 Using an argument similar to that in exercise 13.1 derive the
modified Black-Scholes equation.

18.2     Call and Put Option Prices
Now suppose that we specialize to the case when µ, σ, δ, r and δ C are
constant. Then by careful comparison with the transformations used earlier
to convert the Black-Scholes equation to the heat equation, we find that the
solutions are essentially the same as before, except that we use Ft = S0 e(r−δ)t
                                                                  C
for the forward price, while the overall discount factor is e−(r−δ )t . Thus the
solution is
                      C
             e−(r−δ )T Z ∞                 √     1 2       1 2
         C0 = √            F (S0 e(r−δ)T +σ T ξ− 2 σ T )e− 2 ξ dξ        (18.23)
                 2π     −∞


for a general European-style derivative with payoff F (ST ) at time T . Note
that the presence of the continuous dividend δ C paid out on the derivative
holding itself makes the value of C0 at time 0 greater than it would be oth-
erwise, since, in addition to the final payoff, the investor also gets all the
dividends.

                                        113
Exercise 18.3 Show that (18.23) solves (18.22) with the required boundary
conditions.

   For the Black-Scholes formula based on a dividend paying stock in the
case of a basic call option, with no dividends paid on the option itself, we
obtain
                   C0 = e−rT [S0 e(r−δ)T N (h+ ) − KN (h− )],        (18.24)
where
                                 ln(S̃T /K) ± 12 σ 2 T )
                          h± =            √              .             (18.25)
                                         σ T
Here S̃T = S0 e(r−δ)T is the no arbitrage forward price for the dividend paying
stock or interest paying foreign currency at time T .

Exercise 18.4 Derive (18.24) from (18.23) in the case of a call option.

Exercise 18.5 Calculate the initial cost of a binary call option.




                                       114
19      Risk Neutral Valuation
So far we have considered the situation where there are just two assets—
the basic asset with price St , and the money market account with price Bt .
The ‘economy’ is driven by a single Brownian motion Wt . In this formalism
a derivative is viewed as an additional ‘special’ asset with price Ct that is
inserted into the economy, subject to a no arbitrage condition that relates
its dynamics to those of the basic asset and the money market account.
    A more flexible approach is to introduce at the outset an economy based
on a number of assets with prices Sti (i = 1, . . . , n). These assets can include
derivatives, but now the derivatives are not treated any differently from the
underlying assets on which they are based. Since there must be additional
sources of randomness in the market, we want the entire system to be driven
by a multi-dimensional Brownian motion Wtα (α = 1, . . . , N ). Typically, we
want n ≥ N . This is a complicated area of research that we shall only touch
only briefly in the final two chapters of the book. In order to prepare for this
and develop the necessary mathematics, we shall first re-examine the single
asset model using the ‘martingale’ method.

19.1     Single Asset Case
Recall that the stochastic differential equation for the share price in the single
asset model is
                              dSt
                                  = µt dt + σt dWt ,                        (19.1)
                               St
where µt and σt are adapted processes, that is, they depend only on the
‘history’ of the Brownian motion from time 0 to time t, and no other ‘source
of randomness’. In the case where µ, σ are constant, the solution of (19.1) is
given by
                                                   1 2
                                    µ                  ¶
                      St = S0 exp µt + σWt − σ t .                          (19.2)
                                                   2
How do we solve this equation? Perhaps the easiest way is to make the
variable substitution Xt = log St . The stochastic differential equation for Xt
can then be calculated using Ito’s lemma,
                                ∂Xt       1 ∂ 2 Xt 2
                        dXt =       dSt +         dS
                                ∂St       2 ∂St2 t
                                dSt 1 dSt2
                              =     −
                                St    2 St2

                                       115
                                                1
                              = µt dt + σt dWt − σt2 dt                        (19.3)
                                                2
In the case of constant coefficients µ and σ we can integrate the equation to
obtain
                                                1
                        Xt = X0 + µt + σWt − σ 2 t.                    (19.4)
                                                2
But since St = eXt , we see that
                                            1
                                      µ                           ¶
                      St = S0 exp µt + σWt − σ 2 t .                           (19.5)
                                            2
We shall call this the Black-Scholes model for a single asset.
   However, suppose that we do not want to restrict ourselves to the constant
coefficient case. We could still integrate equation (19.3) to obtain
                             Z t             Z t
                                                1Z t 2
                Xt = X 0 +   µs ds +   σs dWs −     σ ds,                      (19.6)
                           0         0          2 0 s
which then yields the more general solution
                                                                 1Z t 2
                            ·Z t             Z t                         ¸
              St = S0 exp          µs ds +         σs dWs −          σ ds .    (19.7)
                              0               0                  2 0 s
If µ and σ are constant, then formula (19.7) reduces to (19.2). We shall call
(19.7) the basic model for a single asset.
    Now that we have defined and solved for the asset price, we want to
consider the money market account Bt . Its stochastic differential equation is
                                     dBt
                                         = rt dt,                              (19.8)
                                      Bt
where rt is the short term interest rate. In the Black-Scholes model, where
all the coefficients are constant, this has the solution

                                     Bt = B0 ert .                             (19.9)

In the basic model we place no constraints on the interest rate, and hence
have the more general solution
                                              ·Z t         ¸
                            Bt = B0 exp                rs ds .                (19.10)
                                                   0

From now on we shall assume that B0 = 1.

                                          116
    We now want to introduce a new stochastic process that we shall call the
risk premium or market price of risk process λt , and defined by the equation

                                    µ t = r t + λ t σt .                    (19.11)

The risk premium is the ‘extra’ rate of return, above the short term rate,
per unit of risk, as measured by the volatility. Then equation (19.1) can be
written in the form
                         dSt
                             = (rt + λt σt )dt + σt dWt ,                   (19.12)
                          St
or equivalently,
                         dSt
                             = rt dt + σt (λt dt + dWt ).                   (19.13)
                          St
More specifically the asset price process (19.7) can be written as
                                                            1Z t 2
                        ·Z t               Z t                          ¸
         St   = S0 exp      rs ds +    σs (dWs + λs ds) −        σ ds
                          0          0                      2 0 s
                                                  1
                          ·Z t                      Z t       ¸
         St   = S0 Bt exp      σs (dWs + λs ds) −       σ 2 ds ,            (19.14)
                            0                     2 0 s
where we have substituted in the value of Bt from equation (19.10). Thus
for the ratio St /Bt we have
               St                                     1Z t 2
                               ·Z t                                 ¸
                  = S0 exp         σs (dWs + λs ds) −     σ ds .            (19.15)
               Bt                0                    2 0 s
Now suppose that we define the process ρt by
                                      Z t
                                                       1Z t 2
                                ·                              ¸
                     ρt = exp −             λs dWs −       λ ds .           (19.16)
                                       0               2 0 s
By use of Ito’s Lemma, is is straightforward to verify that the stochastic
differential of ρt is given by

                                 dρt = −ρt λt dWt ,                         (19.17)

and hence is driftless, and thus ρt is a martingale. Now let us consider the
product
                                        ρt S t
                                 Πt =          .                     (19.18)
                                         Bt

                                             117
This is given, in more explicit terms, by
                         ·    Z t                       Z t            ¸
       Πt = S0 exp −                 λs dWs − −               λ2s ds
                                0                        0
                                         1Z t 2
                      ·Z t                                                 ¸
                exp          σs (dWs + λs ds) −
                                              σ ds
                    0                    2 0 s
                                              1                1
                     ·Z t                Z t                        ¸
            = S0 exp      (σs − λs )dWs + (− λ2s + σs λs − σs2 )ds
                       0                  0   2                2
                                              1
                     ·Z t              ¸    ·   Z t              ¸
                                                              2
            = S0 exp      (σs − λs )dWs exp −       (λs − σs ) ds . (19.19)
                       0                      2 0
The stochastic differential of Πt is thus given by

                                    dΠt = (σt − λt )Πt dWt ,                   (19.20)

and since it is driftless, it follows that Πt is also a martingale.

Exercise 19.1 Show that if Xt is a stochastic process such that

                                      dXt = f (Xt , t)dWt                      (19.21)

then Xt is a martingale.

   The martingale property for Πt can be written
                                             St      Ss
                                          ·         ¸
                                      E s ρt    = ρs                           (19.22)
                                             Bt      Bs
Now for any random variable Zt , adapted to the history of Wt from 0 to t,
we can define a new probability measure P ∗ with expectation
                                                    Es [ρt Zt ]
                                      Es∗ [Zt ] ≡               .              (19.23)
                                                        ρs
This is called a ‘change of measure’ and the idea is basic to finance. The
positive martingale ρt defining the change of measure is called the density
martingale.
   In the present situation the new measure is called the risk-neutral mea-
sure. The significance of Es∗ is that from (19.22) we have
                                                  St   Ss
                                              ·     ¸
                                        Es∗          =    ,                    (19.24)
                                                  Bt   Bs

                                                   118
which shows that the ratio St /Bt is a martingale in this measure.
    This is completely analogous to the discrete time situation, in which the
risk-neutral probabilities are those for which the ratio of the asset price to
the money market account is a martingale.
    Now suppose that Ct is the price of a derivative based on St , with payoff
CT at time T , where CT is a random variable adapted to the history of
the Brownian motion up to time T . Then for the process Ct we have the
stochastic equation
                            dCt
                                 = µC        C
                                     t dt + σt dWt .                   (19.25)
                             Ct
We have shown already that the no arbitrage condition is given by

                               µC
                                t − rt   µt − r t
                                  C
                                       =          ,                      (19.26)
                                 σt         σt

which, since λt = (µt − rt )/σt , implies that

                                µC              C
                                 t = r t + λ t σt ,                      (19.27)

and thus
                         dCt
                             = rt dt + σtC (dWt + λt dt).                (19.28)
                         Ct
This is formally identical in structure to (19.13) so we can conclude that
ρt Ct /Bt is a martingale, and hence

                                          Ct   Cs
                                      ·     ¸
                                Es∗          =    .                      (19.29)
                                          Bt   Bs
That is to say, the process Ct /Bt is a martingale in the risk-neutral measure.
Thus, the initial value of the derivative is simply
                                          CT
                                      ·     ¸
                                E0∗          = C0 .                      (19.30)
                                          BT
Note that nothing in this derivation used the fact that Ct is a derivative based
on the asset St . Hence it will hold for any financial instrument that is subject
to the same Brownian motion as St . Thus, in the risk-neutral measure, the
ratio of the price of any tradable asset to the price of the money market
account is always a martingale.


                                           119
Exercise 19.2 What are the stochastic equations satisfied by
                            St               ρt S t
                                  and               ?            (19.31)
                            Bt                Bt

Exercise 19.3 Show that
                                     Z t
                          ρt = 1 −         λs ρs dWs .           (19.32)
                                      0

Exercise 19.4 Suppose λ is constant and Xt = Wt . Find Es∗ [Wt ] and
Es∗ [Wt2 ].

Exercise 19.5 Show that ΠC                                           ∗
                         t is indeed a martingale under the measure Es .




                                     120
20      Girsanov Transformation
Now we shall attempt to interpret more clearly the meaning of the risk-
neutral measure. We have shown that if the asset St satisfies
                         dSt
                             = rt dt + σt (dWt + λt dt),                   (20.1)
                          St
where rt is the short-term interest rate, σt is the volatility, and λt is the risk
premium, all adapted, then
                                          St
                                  Πt = ρt                                   (20.2)
                                          Bt
is a martingale. Here                  ·Z        ¸     t
                              Bt = exp                     rs ds           (20.3)
                                                   0

is the unit-initialised money market account and
                                    Z t
                                          1Z t 2
                               ·                                   ¸
                      ρt = exp − λs dWs −     λ ds                         (20.4)
                                0         2 0 s
is the change of measure density martingale. Thus, Es [Πt ] = Πs , and hence

                                             St   Ss
                                         ·    ¸
                                   Es∗          =                          (20.5)
                                             Bt   Bs
Here Es∗ is the (conditional) risk-neutral expectation operator, defined by

                                               Es [ρt Xt ]
                               Es∗ [Xt ] =                                 (20.6)
                                                   ρs
for any random variable Xt adapted to the filtration of information available
up to time t.
    If Ct is the value of a derivative based on the same information set, e.g.
with a payoff CT that depends on ST , then the process for Ct is, necessarily
of the form
                         dCt
                              = rt dt + σtC (dWt + λt dt),             (20.7)
                          Ct
from which it follows that
                                             Ct
                                   ΠC t = ρt                           (20.8)
                                             Bt


                                             121
is also a martingale with repect to Es , and hence Ct /Bt is a martingale with
respect to the risk-neutral expectation Es∗ ,
                                                   Ct   Cs
                                               ·        ¸
                                         Es∗          =    .                                            (20.9)
                                                   Bt   Bs
Thus, for derivatives valuation we can write
                                                                CT
                                                            ·           ¸
                                        C0 = E0∗                   .                                   (20.10)
                                                                BT
   In particular, if CT = F (ST ), as in the case of a call option, then we have

                                   C0 = E0∗ [F (ST )/BT ]                                              (20.11)

where the terminal value of the asset ST is given by the random variable
                          "Z                                                                      #
                                   T                      1Z T 2
         ST = S0 BT exp                σs (dWS + λs ds) −     σ ds .                                   (20.12)
                               0                          2 0 s

20.1     Change of Drift
These formulae can all be simplified in an illuminating way by defining a new
random process Wt∗ ,                     Z                          t
                                   Wt∗ = Wt +                           λs ds,                         (20.13)
                                                                0
which will turn out to be a Brownian motion with respect to the risk-neutral
measure. The stochastic differential of Wt∗ is given by

                                       dWt∗ = dWt + λt dt,                                             (20.14)

and thus for the asset process (19.1) we can write
                                   dSt
                                       = rt dt + σt dWt∗ ,                                             (20.15)
                                    St
while for Ct we have
                            dCt
                                 = rt dt + σtC dWt∗ .                                                  (20.16)
                             Ct
Hence the final asset price (20.12) is given by
                                           "Z                                                #
                                                    T             1              Z T
                  ST = S0 BT exp                        σs dWS∗ −                      σs2       ds.   (20.17)
                                                0                           2     0


                                                    122
    Now we shall outline an important result, known as Girsanov’s theorem,
whichRplays an important role in finance. We start with the process Wt∗ =
Wt + 0t λs ds, which can be interpreted as a general Brownian motion with
drift. We shall show that with respect to the new system of probabilities
governed by the measure E ∗ , the process Wt∗ satsfies the axioms of standard
Brownian motion. In other words, with respect to E ∗ , the process Wt∗ is
normally distributed, has independent increments, and the variance of Wt∗ is
t. To derive this result we need the following useful lemmas.

Lemma 20.1 A random variable X is normally distributed, with mean m
and variance V , if and only if its characteristic function φ(z) = E[eizX ]
satisfies
                                           1 2
                          E[eizX ] = eizm− 2 z V .                 (20.18)

Lemma 20.2
Two random variables X, Y are independent with respect to E[−] if and only
if their joint characteristic function factorises:

                            E[eiz1 X+iz2 Y ] = E[eiz1 X ]E[eiz2 Y ]                           (20.19)

    We shall show first that with respect to E ∗ [−], the process Wt∗ , as given
by (20.13) is normally distributed, with mean zero and variance t. Consider
first the density martingale ρt . Since ρt is a martingale with initial value
unity, we have
                                     Z t
                                                      1Z t 2
                    ·        µ                                     ¶¸
        E[ρt ] = E exp −                   λs dWs −       λ ds          = ρ0 = 1.             (20.20)
                                      0               2 0 s
Now suppose
       √      that we replace λs with λs − iz, where z is a (real) parameter,
and i = −1. Then one can use Ito’s lemma to verify that dρt is still driftless,
hence we still have a martingale, and thus
                    Z t
                                                    1Z t
          ·    ½                                                          ¾¸
        E exp −             (λs − iz)dWs −               (λs − iz)2 ds         = 1.           (20.21)
                        0                           2 0
Expanding this expression we get
                              Z t
                                                    1Z t 2
                ·       ½                                      ¾
              E exp −                λs dWs −           λ ds
                                 0                  2 0 s
                              Z t             Z t
                                                                       1Z t 2
                        ½                                ¾         ½              ¾¸
              × exp iz(              dWs +          λs ds) exp             z ds        = 1,   (20.22)
                                 0             0                       2 0

                                                   123
which simplifies to the equation
                          Z t                      Z t
                                                                                  1Z t 2
         ·          ½                                             ¾¸          ½              ¾
        E ρt exp iz(            dWs +                    λs ds)        = exp −        z ds       (20.23)
                           0                        0                             2 0
or, equivalently,
                                                                        1 2
                                               E ∗ [eizWt ] = e− 2 z t .
                                                            ∗
                                                                                                 (20.24)
Hence by lemma 20.1, we see that Wt∗ is indeed normally distributed with
                      ∗
respect to the measure E , with mean zero and variance t.
    In order to show that the process Wt∗ has independent increments, we
need the idea of the indicator function, Is (a, b) for an interval [a, b]. We
define                            (
                                    1 for a ≤ s ≤ b
                      Is (a, b) =                                      (20.25)
                                    0 otherwise
Thus if 0 ≤ a ≤ b ≤ t, then
                                           Z t
                                                   Is (a, b)ds = b − a.                          (20.26)
                                               0

Now let us look at (20.20) again, this time making the substitution
                           λs → λs − iz1 Is (a, b) − iz2 Is (c, d)                               (20.27)
where z1 and z2 are real parameters. Here we assume that 0 ≤ a ≤ b ≤ c ≤
d ≤ t. Then we know that
                               E[eXt ] = 1,                       (20.28)
where
                                   Z t
               Xt = −                      [λs − iz1 Is (a, b) − iz2 Is (c, d)] dWs
                                       0
                                   1   Z t
                               −               [λs − iz1 Is (a, b) − iz2 Is (c, d)]2 ds.         (20.29)
                                   2       0

after some simplification this expression reduces to
                    Z t
                                   1Z t 2           Z t
        Xt = −            λs dWs −      λs ds + iz1     Is (a, b)[dWs + λs ds] +
                   0               2 0               0
                   Z t
                                                  1 Zt
               iz2     Is (c, d)[dWs + λs ds] + z12         Is (a, b)ds
                     0                            2      0
                 1 Zt
               + z12       Is (a, b)ds.                                         (20.30)
                 2      0

                                                            124
Then we can evaluate the integrals involving the indicator functions to obtain
                  Z t
                             1Z t 2
      Xt = −            λs dWs −   λ ds + iz1 (W̃b − W̃b ) + iz2 (W̃d − W̃c )
                 0           2 0 s
               1              1
              + z12 (b − a) + z12 (b − a).                                (20.31)
               2              2
Substituting this back into (20.28), we get
              h           n
           E ρt exp iz1 (W̃b − W̃a )
                                                         1
                                            oi              ½          ¾
                        +iz2 (W̃d − W̃c )        = exp − z12 (b − a)
                                                         2
                                                           1
                                                        ½             ¾
                                                   × exp − z12 (b − a) .   (20.32)
                                                           2
By lemma 20.2, this shows that with respect to the expectation E ∗ [−] =
E[ρt −], the increments Wb∗ − Wa∗ and Wd∗ − Wc∗ are independent random
variables, and each is normally distributed.
    Thus, we have shown that Ws∗ is a Brownian motion with respect to
the expectation E ∗ [−]. That explains why the process (20.15) is called ‘risk
neutral’ with respect to E ∗ [−].
    Now suppose that we let r and σ be constant. Then
                                                        1   2
                                 ST = S0 erT +σWT − 2 σ T
                                                    ∗
                                                                           (20.33)

and
                                    CT
                        C0 = E ∗ [      ]
                                    BT
                                                       ∗ 1 2
                              = e−rT E ∗ [F (S0 erT +σWT − 2 σ T )],       (20.34)

which is the formula we derived previously, by solving the Black-Scholes
equation, for valuing general European derivatives. Note that WT∗ is normally
distributed with respect to E ∗ .




                                             125
21     Multiple Asset Models
Until now we have considered a financial market that consists of a single basic
asset together with a money market account and derivatives based on these
two assets. This market is driven by a single source of randomness. Needless
to say, for a more realistic financial market we have to consider a larger num-
ber of assets and more sources of randomness. So in this chapter, we analyse
markets with both multiple assets and sources of uncertainty. For simplicity,
we shall begin by assuming that these are non-dividend paying assets, but
later we will extend our results to the case when continuous dividends are
paid on shares, or equivalently, interest is paid on foreign currencies.

21.1     The Basic Model
We want a market that has more than a single basic asset. Consider a
situation where there are n assets, with prices Sti (i = 1, . . . , n). We also
want a market where there is more than one source of uncertainty. So as-
sume that the assets are driven by an N -dimensional Brownian motion Wtα
(α = 1, . . . , N ). In order for everything to run smoothly we require n ≥ N .
Otherwise we are led to a so-called incomplete market situation.
    How are the movements of the n asset prices related? This can be for-
malised by introducing the idea of an instantaneous covariance matrix for the
asset price dynamics. Let us proceed as follows. We assume the Brownian
motions are independent, in the sense that the Ito rule is given by
                             dWtα dWtβ = δ αβ dt,                       (21.1)
where δ αβ is the identity matrix. Thus dW 1 dW 1 = dt, dW 2 dW 2 = dt,
dW 1 dW 2 = 0, and so on. As before, we also have dW α dt = 0 for all α.
Thus the multi-dimensional Ito rule is a straight-forward generalization of
the one-dimensional case.
   Now that we have clarified the nature of the multi-dimensional Brownian
motions, we can return to the asset price changes. The basic model for n
asset prices is given by the following dynamics:
                          dSti     i
                                            σtiα dWtα .
                                          X
                               = µ t dt +                               (21.2)
                           Sti            α

Here µit and σtiα are adapted processes, in the sense that they depend, in a
general way, only on the history of the multi-dimensional Brownian motion

                                      126
Wtα from time 0 to time t. The n × N matrix σ iα , for i = 1, . . . , n and
α = 1, . . . , N , is called the volatility matrix. It measures the sensitivity of
asset number i to Brownian motion number α. The processes Wtα can be
thought of intuitively as representing ‘independent’ sources of randomness,
or uncertainty, in the markets.
Exercise 21.1 Consider a simple 2-dimensional Black-Scholes world, with
asset price processes,
                         dSt1 /St1 = µ1 dt + σ 11 dWt1 + σ 12 dWt2
                                                                                             (21.3)
                         dSt2 /St2 = µ2 dt + σ 21 dWt1 + σ 22 dWt2
where the vector µi and the matrix σ ij are both constant. Solve these equations
for St1 and St2 .
   Now let us investigate the volatility matrix more closely. To this end, we
consider the following product:
             dS i dS j
                           = (µit dt +              σtiα dWtα )(µjt dt +       σtjβ dWtβ )
                                             X                             X
              Si Sj                           α                            β

                                    σtiα dWtα            σtjβ dWtβ
                               X                    X
                           =
                                α                    β

                                          σtiα σtjβ dWtα dWtβ
                               XX
                           =
                                α    β

                                          σtiα σtjβ δ αβ dt
                               XX
                           =
                                α    β

                                    σtiα σtjα dt.
                               X
                           =                                                                 (21.4)
                                α

The matrix
                                         Ctij =          σtiα σtjα
                                                    X
                                                                                             (21.5)
                                                     α
that arises here is called the instantaneous covariance matrix of the set of
assets under consideration.
Exercise 21.2 Calculate the instantaneous covariance matrix for the 2-dimensional
Black-Scholes market given in exercise (21.1).
   In the case i = j, we have
                                                    !2
                                             dS i
                                         Ã
                                                         = Ctii ,                            (21.6)
                                              Si

                                                    127
where
                                 Ctii =          (σtiα )2
                                            X
                                                                            (21.7)
                                             α

is the instantaneous variance (squared volatility) for the asset i. Note that
in the case when there is only a single asset with dS 1 /S 1 = µi + σ 1 dW 1 , then
Ct11 = (σ 1 )2 , as expected. If we write
                                        s
                                σi =
                                            X
                                                  σ iα σ iα                 (21.8)
                                             α


for the volatility of asset i, then the matrix

                                       ij  C ij
                                       ρ = i j                              (21.9)
                                          σσ
is called the instananeous correlation in the motion of asset i and asset j.

Exercise 21.3 Calculate the correlation matrix for the 2-dimensional Black-
Scholes market. What are the volatilities of the two assets?

    We note that the covariance matrix C ij is non-negative in the sense that
for any ‘vector’ of numbers θ i (i = 1, . . . n) we have

                                       C ij θi θj ≥ 0.
                                 X
                                                                           (21.10)
                                  ij

This result can be given a financial interpretation. Suppose that we form a
portfolio of assets, holding asset S i in the quantity φi . Thus φi is the number
of shares one holds of asset i, which has price S i . The the total value of the
portfolio is clearly i φi S i . Note that some of the φi ’s can be negative, in
                      P

the case of short positions. Now suppose we define

                                   i  φi S i
                                 θ = P j j.                                (21.11)
                                      jφ S


Then θi is the percentage of the total value of the portfolio that is held in
asset i. With this in mind, we can look at the change in the value of the
portfolio as the market moves. If

                                                  φi Sti
                                            X
                                  Vt =                                     (21.12)
                                             i


                                            128
is the value of the portfolio at time t, then

                                                       φi dS i ,
                                             X
                                     dV =                                            (21.13)
                                                  i

is the instantaneous change in the value of the portfolio, for the given holding
defined by φi , when the asset price changes are given by dS i . Therefore, by
the Ito rules we have

                        (dV )2 =                  φi φj dS i dS j
                                           X

                                            ij

                                                  φi φj S i S j C ij dt.
                                           X
                                     =                                               (21.14)
                                            ij

So, for the percentage change in the value of the portfolio, we have
                                !2
                                            X φi S i φj S j
                       Ã
                           dV
                                      =                                C ij dt
                            V                ij         V      V
                                                      θi θj C ij dt,
                                            X
                                      =                                              (21.15)
                                             ij

where we have used the fact that θ i = φi S i /V . Thus, ij θi θj C ij represents
                                                                                 P

the instantaneous variance in the portfolio value at time t. But clearly the
variance of the portfolio must be non-negative. Thus equation (21.10) can
be interpreted as saying that the variance of any portfolio has to be non-
negative. These ideas can be developed further, and lead to the concepts of
portfolio theory, which is an important branch of finance theory.

21.2     No Arbitrage and the Zero Volatility Portfolio
Here, we shall consider one particular aspect of portfolio analysis that is of
great significance to derivatives pricing. Suppose we consider the problem
of choosing a portfolio weighting such that the portfolio has instantaneously
zero volatility. Then, over the next short period, this portfolio would offer
a definite rate of return. By the no arbitrage condition, this rate of return
would have to be the money market interest rate rt .
    We have seen from (21.15) that with a holding weight of θ i in asset i, the
portfolio variance vanishes if and only if

                                          θi θj C ij = 0.
                                     X
                                                                                     (21.16)
                                     ij


                                             129
But, we can express this sum in the form

                                       θi θj C ij =                                        θi θj σ iα σ jα
                          X                                  XXX

                              ij                              α         i      j
                                                                        α α
                                                             X
                                                       =            ξ ξ ,                                          (21.17)
                                                              α

where ξ α = i θi σ iα . Now, since (21.17) is given by a sum of squares, clearly
            P

(21.16) holds if and only if ξ α = 0 for each value of α. In other words, the
portfolio variance (risk) vanishes at time t if and only if θ i is chosen so that

                                                            θi σ iα = 0.
                                                   X
                                                                                                                   (21.18)
                                                       i

   Now let us return to the expression for the change in the portfolio value,
(21.13), and note that
                                                   i   i
                     dV                         i φ dS
                                           P
                                   =
                      V                           V
                                                    i i
                                                  φ  S (µi dt + α σ iα dW α )
                                           P                    P
                                                i
                                   =                      P i i
                                                             iφ S
                                                                   Ã                                  !
                                                  i i                                          i iα
                                                                                                          dW α .
                                          X                       X X
                                   =             θ µ dt +                                   θσ                     (21.19)
                                            i                       α              i

Clearly the volatility of the portfolio value V vanishes at time t if and only
if the condition (21.18) holds at that time.
    We require that i θi µi = rt if and only if θ i σ iα = 0. In other words,
                      P

we want the rate of return on the portfolio to be the short rate (i.e. the
money market interest rate) if and only if the portfolio volatility vanishes.
This implies that there must exist a set of numbers λα (α = 1, . . . , N ) such
that                                        Ã          !
                                        θ i µi = r t +              λα                       θi σ iα .
                               X                             X                 X
                                                                                                                   (21.20)
                                   i                          α                        i
                          i
However, since       iθ       = 1, this relation can be written in the form
                 P


                                       θ i µi =            θi r +            θi (               λα σ iα ),
                              X                   X                 X                  X
                                                                                                                   (21.21)
                              i                    i                    i                  α

which has to hold for any choice of θ i . Hence it follows that

                                                µi = r t +                  λα σ iα .
                                                                  X
                                                                                                                   (21.22)
                                                                    α


                                                             130
This is the no arbitrage condition for n assets driven by N Brownian motions,
when there are no dividends.
    Note that the ‘vector’ λα can be interpreted as the market risk premium
for factor α. In other words, λα is the excess rate of return, attributable to
factor α, per unit of volatility in that factor.
    For example, suppose that we have two assets, but just a single random
factor (i = 1, 2 α = 1) Then, suppressing α, we have

                      µ1 = r + λσ 1 and µ2 = r + λσ 2 .                 (21.23)

Eliminating λ, we obtain

                               µ1 − r   µ2 − r
                                      =        ,                        (21.24)
                                 σ1       σ2
which is equivalent to the no arbitrage condition that we derived earlier in
connection with a share-price and an option. Thus we see that the two assets
have a common risk premium, given by λ.

21.3     Market Completeness
Now let us consider the risk premium vector λα further. For no arbitrage, we
know that (21.22) has to be satisfied. But if λα satisfies (21.22) is there any
other vector, say λ̄α that also satisfies (21.22)? If so, then their difference,
λα − λ̄α would have to satisfy

                                  (λα − λ̄α )σ iα = 0.
                             X
                                                                        (21.25)
                              α

We say that a set of assets S i (i = 1, . . . , n), or market, is complete with
respect to the Brownian motion Wαt if there exists no non-vanishing vector
ξ α such that α ξ α σ iα = 0. This market completeness condition is equivalent
              P

to a requirement that the matrix σ iα should be of maximum rank (N ). If the
assets S i are complete, then any derivative adapted to Wtα , can be hedged
with a portfolio of positions in these assets.




                                        131
22      Multiple Asset Models Continued
22.1     Dividends
Now let us consider the situation when dividends are paid in the multi-asset
case. This leads to a simple modification of formula (21.22). In particular,
suppose that there is a dividend (or interest) paid continuously at the rate δ ti
for asset i. This means that during the short interval dt, the holder of asset
i receives a payment of δ i S i dt. Thus, if the portfolio has value V = i φi S i ,
                                                                        P

then the total gain (or loss) to the holder over the interval dt is given by

                                              φi S i δ i dt,
                                        X
                             R = dV +                                       (22.1)
                                          i

i.e., it is the change in value of the portfolio, plus all the dividends (or
interest). In percentage terms, this is
                           R   dV + i φi S i δ i dt
                                              P
                             =
                           V         V
                               dV
                                       θi δ i dt,
                                    X
                             =    +                                         (22.2)
                                V   i

since θi = φi S i /V . But, we calculated the percentage change in the portofolio
value in (21.19), so
                     R X i i
                           θ (µ + δ i )dt +    θi σ i,α dW α .
                                            X
                       =                                                    (22.3)
                     V   i                  iα

Thus, if we eliminate the randomness by applying condition (21.18), then
the no arbitrage condition tells us that i θi (µi + δ i ) = rt when i θi σ iα = 0.
                                        P                          P

This implies that there must exist λα such that

                            µi + δ i = r +        λα σ iα .
                                              X
                                                                            (22.4)
                                              α

This is the general no arbitrage condition for n assets which pay continuous
dividends (or interest).
    Now we can take formula (22.4) for the drift, and reinsert it into the asset
dynamical equation to obtain
                   dS i          i
                                           σ iα (dW α + λα dt).
                                         X
                      i
                        = (r − δ   )dt +                                    (22.5)
                    S                    α


                                       132
This is the general dynamical equation for n dividend paying assets under
the condition of no arbitrage. We see that the only modification required is
to subtract off the dividend rate (or foreign interest rate) from the ‘domestic’
interest rate r.

22.2     Martingales and the Risk-Neutral Measure
We have seen, in the case of multiple assets with no dividends, that the no-
arbitrage requirement is equivalent to the condition (21.22) on the drift of
the assets,
                             µi = r +    λα σ iα ,
                                      X
                                                                      (22.6)
                                            α
                                        α
where r is the short rate of interest, λ is the market price of risk vector, and
σ iα is the volatility matrix. The no-arbitrage condition is both necessary and
sufficient for the existence of the market risk premium vector λα , which for
each factor can be interpreted as the excess rate of return (above the short
rate) per unit of volatility risk. If we substitute (21.22) into the asset price
process (21.2), then we obtain

                      dS i
                                     σ iα (dW α + λα dt).
                                   X
                         i
                           = rdt +                                               (22.7)
                       S           α

Here, for convenience, we occasionally suppress the subscript t, writing S i
for Sti ; but remember that all processes are adapted, i.e. they depend in a
general way on the history of Wsα for 0 ≤ s ≤ t. In addition to the assets S i
(i = 1, . . . , n) we also have the money market account Bt . We want to assume
market completeness, that is, that σ iα has maximal rank N , the dimension
of the Brownian motion). This ensures that the market-risk premium vector
λα is unique. Also, it ensures that when Wtα moves at least one of the market
prices S i moves. In that sense, market completeness implies that every move
in Wtα implies some move in the prices S i , so that Wtα is ‘fully expressed’ in
the given asset changes. Otherwise, the market is ‘incomplete’.
    Our next step is to form a multi-asset density martingale ρt ,
                         "                                               #
                             Z tX
                                                1   Z tX
               ρt = exp −            λαs dWsα −             (λαs )2 ds       ,   (22.8)
                             0   α              2   0   α

where α = 1, . . . , N . This expression is, in fact, given by the product of
the corresponding density martingales for the various components of λα . In

                                        133
other words,
                                           N
                                                 ραt ,
                                           Y
                                   ρt =                                      (22.9)
                                          α=1

where                            Z t
                                                         1Z t α 2
                            ·                                           ¸
                  ραt = exp −          λαs dWsα −            (λ ) ds .      (22.10)
                                  0                      2 0 s
The following facts emerge:

  1. The process ρt is a martingale with respect to the measure defined by
     the expectation Es .

  2. For each value of i, the ratio ρt Sti /Bt is a martingale with respect to
     the measure Es .

  3. If we define the risk-neutral measure Es∗ according to the scheme

                                                  Es [ρt Xt ]
                                  Es∗ [Xt ] =                               (22.11)
                                                      ρs
     for any adapted random variable Xt , then the process Wt∗α defined by
                                                         Z t
                                 Wt∗α = Wtα +                  λαs ds       (22.12)
                                                          0

     is a standard N -dimensional Brownian motion with respect to Es∗ . That
     is, with respect to Es∗ , the process Wt∗α is normally distributed for each
     value of α, with mean 0 and variance t, has independent increments,
     and furthermore Wt∗α and Wt∗β are independent for α 6= β.

    These results can be established by analogy with the corresponding results
in the single asset case. Thus, for the asset process we can write

                         dS i
                                          σ iα dWt∗α ,
                                        X
                            i
                              = rt dt +                                     (22.13)
                          S             α

where Wt∗α is a standard Brownian motion with respect to the risk-neutral
measure.
   Moreover, since the ratio ρt Sti /Bt is a martingale, we have

                                ρs Ssi      ρt Sti
                                             "            #
                                       = Es        ,                        (22.14)
                                 Bs          Bt

                                         134
and thus
                                                    Si
                                        h                i
                              Ssi   Es ρt ( Btt )
                                  =               ,                    (22.15)
                              Bs       ρs
which by the definition of the risk-neutral measure gives

                               Ssi       Si
                                            "        #
                                   = Es∗ t .                           (22.16)
                               Bs        Bt

Thus, the absence of arbitrage ensures the existence of a unique risk-neutral
measure such that the ratio of any asset price to the money market account
is a martingale. This generalises the analogous result that we obtained in
the single asset case.

22.3       Derivatives
Now suppose that we have a derivative with payout CT at time T . We assume
that the payout is adapted to Wsα for 0 ≤ s ≤ T . For example, CT can be
a function of the values of the various assets Ssi for various times between 0
and T . Let Ct denote the value of the derivative at time t. Then since the
derivative is also an asset, we can use the martingale condition (22.16) to
infer that
                               Ct      ∗ CT
                                        ·     ¸
                                   = Et         ,                       (22.17)
                               Bt         BT
or equivalently
                                            CT
                                          ·    ¸
                              Ct = Bt Et∗         .                     (22.18)
                                            BT
This gives us a formula for the price process of the derivative, and, in par-
ticular, allows us to compute its value today, C0 . Since the money market
account Bt is given by                  Z       t
                             Bt = exp{              rs ds}             (22.19)
                                            0

it is worth noting that (22.18) can be written in the form
                                  "         Z T              #
                       Ct = Et∗   exp{−              rs ds}CT .        (22.20)
                                             t


Thus if rs is non-random, or more generally if it is independent of the payoff
CT , then (22.20) can be further simplified.

                                      135
    Formula (22.20) is, of course, not the end of the story, but really is just
the beginning. Given (22.20), we can compute the hedge ratios φit needed in
order to construct a portfolio in the Sti ’s and Bt to replicate the derivative.
If n > N , then the hedge portfolio can be constructed with some flexibility.




                          In my end is my beginning.

                                                  —T.S. Eliot, Four Quartets.


                                      136
A     Glossary
American option An option that can be exercised at any time up to the
   expiration date.
arbitrage
at the money A call or put option with a strike price equal to the current
     share price is said to be ‘at the money’.


Call option A derivative that gives its owner the right to buy an asset at
     a fixed price, called the strike price.


discount factor Something related to the time-value of money.


European option An option that can only be exercised at a fixed expira-
    tion date.
expectation The expectation of a discrete random variable X with proba-
    bility distribution p(xi ) = Prob[X = Xi ] is
                                         X
                              E[X] =          xi p(xi )
                                         i

     It gives the ‘average’ value of X. The expectation of a continuous
     random variable X with probability density function ρ(x) is given by
                                      Z ∞
                             E[X] =           xp(x)dx
                                         −∞




in the money An option is said to be ‘in the money’ if it would have a
     positive payoff if it were exercised immediately.
interest rate The rate at which you pay interest.


long position The position created by possession of an asset.


                                   137
martingale

out of the money An option is said to be ‘out of the money’ if it would
     have have a negative payoff if it were exercised immediately.


probability density function Similarly, the probability density function
    ρ(x) of a continuous random variable X, if it exists, is a function ρ(x)
    such that                             Z b
                        Prob[a ≤ X ≤ b] =      ρ(x)dx
                                               a

put-call parity A relation holding between the values of call and put op-
     tions with common strikes, in the absence of dividends.

put option An option that gives the owner the right, but not the obliga-
     tion, to sell an asset at a pre-specified price.


random variable A random variable X is a function that maps each pos-
    sible outcome from an experiment to a real number.

risk-free Guaranteed, sure.


sample space The sample space can be thought of as the set of all possible
    outcomes of an experiment or trial. The sample space is discrete if the
    elements of the sample space can be indexed by the integers (i.e., it is
    countable).

short position A negative position in an asset; the position in an asset
     created when an asset is sold, but before the asset has been actually
     delivered; an American style derivative, whose payoff is minus the value
     of the underlying asset at the time of exercise, and whose price today
     is equal to minus the value of the asset today.

standard deviation The standard deviation σ(x) of a random variable X
     is defined by σ(X) = [V (X)]1/2 , where V (x) is the variance.

stock A part ownership of a company.



                                    138
strike price The amount of money needed to exercise an option, usually
     denoted K.


time value of money The fact that money now is worth more than money
     in the future.


underlying asset A stock or whatever on which a derivative is based.


variance The variance of a random variable X, if it exists, is defined by

                   V [X] = E[(X − E[X])2 ] = E[X 2 ] − E[X]2




Wiener process Brownian motion with drift.




                                    139
B     Some useful formulae and definitions
B.1    Definitions of a Normal Variable
The N(m, V ) probability density function is

                                           (x − m)2
                                                  "                   #
                                  1
                    ρm,V (x) = √     exp −          .                     (B.21)
                                 2πV          2V

The cumulative normal function is defined to be
                                            ξ2
                                                      "           #
                               1 Zx
                      N (x) = √       exp −    dx.                        (B.22)
                                2π −∞       2

B.2    Moments of the Standard Normal Distribution
For even moments,

                                    x2
                                     "                #
                     1 Z ∞ 2n               (2n)!
                    √       x exp −    dx =       ,                       (B.23)
                      2π −∞         2       n!2n

while for odd moments,

                                       x2
                                              "               #
                      1 Z ∞ 2n+1
                     √       x   exp −    dx = 0.                         (B.24)
                       2π −∞           2

The first few even moments are
                                      x2
                                      "               #
                          1 Z∞
                         √      exp −    dx = 1                           (B.25)
                          2π −∞       2

                                       x2
                                          "               #
                        1 Z∞ 2
                       √       x exp −    dx = 1                          (B.26)
                         2π −∞         2
                                      x2
                                         "                #
                       1 Z∞ 4
                      √       x exp −    dx = 3.                          (B.27)
                        2π −∞         2




                                    140
B.3     Moments of a Normal Distribution

                                      (x − m)2
                                              "                        #
                        1 Z∞
                      √       x exp −          dx = m                                   (B.28)
                       2πV −∞            2V
                                    (x − m)2
                                          "                        #
                      1 Z∞ 2
                   √        x exp −          dx = m2 + V                                (B.29)
                     2πV −∞            2V
                                   (x − m)2
                                      "                        #
                     1 Z∞ 3
                  √        x exp −          dx = m3 + 3mV                               (B.30)
                    2πV −∞            2V
                         (x − m)2
                              "                   #
           1 Z∞ 4
        √        x exp −          dx = m4 + 6V m2 + 3V 2                                (B.31)
          2πV −∞            2V

B.4     Other Useful Integrals
For a > 0,

                        ax2                    b2
                          "                           #                    "        #
           1 Z∞                         1
          √       exp −     + bx + c = √   exp    +c .                                  (B.32)
            2π −∞        2               a     4a
                         Z ∞
                               e−λx dx = λ                 for         λ>0              (B.33)
                          0

   If X is an N (m, V ) random variable,
                                                           1   2
                                  E[eαX ] = eαm+ 2 α V .                                (B.34)

B.5     Ito’s Lemma
If Xt satisfies
                                  dXt = µt dt + σt dWt                                  (B.35)
and F (x) is a twice differentiable function, then

                                  ∂F (Xt )       1 ∂ 2 F (Xt )
                     dF (Xt ) =            dXt +               dXt2 ,                   (B.36)
                                   ∂Xt           2 ∂Xt2
where
                    dt2 = 0,      dtdWt = 0               and          dWt2 = dt.       (B.37)



                                              141
B.6     Geometric Brownian Motion

                             dSt = St (µdt + σdWt )                       (B.38)
has solution
                                      1
                                    ·                     ¸
                      St = S0 exp (µ − σ 2 )dt + σWt .                    (B.39)
                                      2

B.7     Black-Scholes Formulae
The Black-Scholes equation for a derivative C(St , t) is
                     ∂C 1 ∂ 2 C 2 2
                                              Ã           !
                                          ∂C
                        +       S σ =r C−
                              2 t
                                              St .                        (B.40)
                     ∂t   2 ∂St           ∂St
    For a call option with payoff function C(ST , T ) = max[ST − K, 0], it has
solution
                     C0 = e−rT [S0 erT N (h+ ) − KN (h− )].            (B.41)
A put option with payoff function P (ST , T ) = max[K − ST , 0], it has
                   P0 = e−rT [KN (−h− ) − S0 erT N (−h+ )],               (B.42)
where                                    rT
                             ±  ln( S0Ke ) ± 21 σ 2 T
                          h ≡            √            .                   (B.43)
                                        σ T
   The payoff for a call option with dividends is
                      C
             e−(r−δ )T Z ∞                 √     1 2       1 2
         C0 = √            F (S0 e(r−δ)T +σ T ξ− 2 σ T )e− 2 ξ dξ         (B.44)
                 2π     −∞

For the Black-Scholes formula we then obtain, in the case of a call option
(with no dividends paid on the option itself):
                   C0 = e−rT [S0 e(r−δ)T N (h+ ) − KN (h− )],             (B.45)
where
                                  ln( S̃KT ) ± 21 σ 2 T )
                             h± =           √             .              (B.46)
                                           σ T
We still need to derive the formula in the case of a put option with dividends.
  Put-call parity says that
                            C0 = S0 − e−rT K + P0 .                       (B.47)

                                        142
B.8     Bernoulli Distribution
The simplest nontrivial discrete probability distribution is the Bernoulli dis-
tribution. There are only two points in the sample space Ω = {u, d}. The
probability distribution is then
                                  Prob[X = u] = p
                                                                                (B.48)
                                  Prob[X = d] = 1 − p
The expectation of the random variable X is E[X] = pu + (1 − p)d; the
variance is V [X] = p(1 − p)(u − d)2 .

B.9     Binomial Distribution
This distribution is obtained by the consideration of n indepentant, identical
Bernoulli trials. Let X be the random variable which counts the total number
of u’s in n trials. We can obtain this by setting u = 1, d = 0, and summing
over n independent Bernoulli trials Yi . The binomial distribution is then
given by
                       Ã   !
                          n
                              pxi (1 − p)n−xi         forxi = 0, 1, . . . , n
                      
                      
      Prob[X = x] =           x                                                 (B.49)
                      
                      
                          0                           otherwise
The expectation of X is E[X] = np;
                                 Ã the! variance of X is V [X] = np(1 − p).
                                   n
Here the combinatorial function         , sometimes denoted Cxn (‘n choose
                                   x
x’) is defined by         Ã     !
                             n            n!
                                  =             .                   (B.50)
                             x       x!(n − x)!

B.10      Central Limit Theorem
Let Xi (i = 1, . . . , n) be a set of n independent, identically distributed ran-
dom variables, each with mean m and variance V . Define
                                         Pn
                                          i=1 (Xi − m)
                                  Zn =        √          .                      (B.51)
                                                  n
Then the limit
                                     Z = n→∞
                                          lim Zn                                (B.52)

                                          143
exists, and is normally distributed with mean 0 and variance V . Equivalently,
we can assert that
                                     v              
                     n
                     X
                                      u
                                      u     n
                                            X
        lim Prob 
        n→∞
                           (X − m) < λtV ar[ (X − m)] = N (λ),
                             i                          i              (B.53)
                     i=1                         i=1


where N (λ) is the normal distribution function.
   We can use the Central Limit Theorem to analyze the behaviour of the
random variable Zn in equation (B.51). We can rewrite Zn in terms of the
average X̄n of n Bernoulli trials,
                                       √       1
                                 Zn = 2 n(X̄n − ),                     (B.54)
                                               2
where                                         n
                                           1X
                                   X̄n =         Xi .                  (B.55)
                                           n i=1
Thus, by the Central Limit theorem Zn approaches a normal distribution.
Moreover, we can calculate the mean and variance of X̄ as E[X̄n ] = 1/2 and
V [X̄n ] = n/4, from which it follows that E[Zn ] = 0, and V [Zn ] = 1.




                                           144
C       Solutions
Section 1
    1. Why do bond prices fall when the interest rate of the money market account rises?
       This is easiest to see by considering an example. Suppose that the initial value of
       the money market interest rate is 5%, and that at some time it increases to 6%.
       Before the interest rate rise, how much would you be willing to pay for a one-year
       bond with a notional of $100 and an annual interest rate of 7%? This means that
       you pay an amount B0 for the bond now, and receive $107 dollars in one year’s
       time. We can determine B0 using arbitrage.
       Suppose that we start with nothing. In order to invest in the bond, we need to
       borrow B0 dollars from the money market account. Then in one year’s time, we
       receive $107 for the bond, but owe B0 e0.05 dollars for the loan. Since we started
       with nothing, we must end with nothing, and hence

                                          107 − B0 e0.05 = 0                          (C.1)

       which tells us that B0 is 107e−.05 = 101.78 dollars. This is how we can price bonds
       using arbitrage.
       Now suppose that we repeat the argument when the money market interest rate
       is 6% instead of 5%. The new price of the bond is 107e−0.06 = 100.77 dollars,
       which is less than the previous price. The price of the bond drops because the no
       arbitrage condition requires an investment in the bond to have the same return as
       an investment in the money market account. Because the interest rate on the bond
       is fixed, this is only possible if the bond price falls.
       Why does the value of a bond rise if the credit quality improves? This question
       is a little more difficult to quantify, since we have no exact mathematical way of
       describing loan default. However, suppose that we have two bonds which have the
       exact same characteristics, except that one is more likely to default than the other.
       Which are you willing to pay more for? Obviously the one which is less likely
       to default, that is, the one with the better credit rating. We now want to apply
       this argument to a single bond—but before and after an improvement in the credit
       quality. If the credit quality improves, and since all other properties of the bonds
       are the same, then by the above argument you should be willing to pay more for
       the bond after its credit rating has improved. This is why a bond price increases
       when credit quality improves.
    2. We want to calculate the effective continuously compound interest rate earned on
       an account which has an annual interest rate of r = 6.1% which is paid on a monthly
       compounded basis. Begin by assuming that we have B0 dollars in the bank. At the
       end of one month, the interest paid on this amount is B0 r/12. That is, after one
       month, the amount that we have in the bank is

                                       B1 = B0 (1 + r/12).                            (C.2)

       How about after the second month? Well, we earn an amount of interest equal to
       B1 r/12, so

                                     B2     =   B1 (1 + r/12)
                                            =   B0 (1 + r/12)2 .                      (C.3)


                                             145
   By induction, you should see that for m ≤ 12,

                                   Bm = B0 (1 + r/12)m ,                            (C.4)

   and hence after a year
                                  B12 = B0 (1 + r/12)12 .                           (C.5)
   What is the effective continuously compounded interest rate ρ? We can calculate
   this by noting that after one year, an initial investment of B0 dollars would be
   worth B0 eρ dollars. Equating the two results we see that

                                  B0 (1 + r/12)12 = B0 eρ ,                         (C.6)
   or

                                  ρ    = 12 log(1 + r/12)
                                       = 0.0608,                                    (C.7)

   and hence the effective continuosly compounded rate is 6.08%.
   Note that if we divide the year up into n equal periods and repeat the above
   argument, then the amount of money in the bank account at the end of the year is

                                      Bn = B0 (1 + r/n)n .                          (C.8)

   As we take n very large, we see that

                                        lim Bn = B0 er ,                            (C.9)
                                       n→∞

   which is the continuously compounded limit.
3. If we are paying interest into a money market account at a constant rate of r dollars
   per unit time, then the change dBt in the amount of money in the bank account
   over the time interval [t, t + dt] is equal to the amount of interest paid, which is
   rBt dt. Thus, the differential equation is

                                          dBt
                                              = rBt .
                                           dt
   This has solution
                                          Bt = B0 ert .
   This relation will be used throughout the book to describe the time evolution of a
   money market account.
4. The most money that you can lose by buying an option is the purchase price that
   you paid for it. You never lose more because if the payoff of the option is negative
   (the derivative is out of the money), then you simply do not ‘exercise your option’
   and the option expires unused. This should be contrasted with a forward contract
   on an asset, which is a strict obligation – you must buy the asset at the strike price,
   whether it is beneficial to you or not.



                                          146
     Option Type          Strike      Market Value          Intrinsic Value
     American Call         6000          £1265                    £850
     American Put          6000          £295                      £0
     European Call         6025          £1085                    £600
     European Put          6025          £340                      £0



5. For the call and put options specified in the text, the market and intrinsic (if the
   option were exercised immediately) values are given below.
   The market values are greater than the intrinsic values because they take into
   account the fact that the value of the index may achieve higher values before it
   expires, and hence pay out more than its current intrinsic value. The buyer of the
   option must pay for this potential gain, which is why the market value is larger
   than the intrinsic value. A reverse argument also may be applied, that the index
   may go down and the payoff be less, however from a purely heuristic point of view,
   the total possible drop in the payoff is less than the total possible gain in the payoff
   (which is unlimited).

6. A bank with a large number of fixed-rate loans or mortgages has a great deal of
   interest-rate risk. If the interest rate rises, then the bank will be receiving less
   than the market rate for its investments. In essence, it will be losing money. A
   company that sells products domestically, but buys supplies, for example timber,
   from a foreign nation, has a foreign-exchange risk. The price of timber will become
   more expensive if the foreign currency appreciates against the local currency, but
   the income from domestic sales is unaffected. Thus, the company will effectively be
   losing money.
7. Suppose a dealer sells a put with strike K. If the value of the stock ST is lower
   than the strike when the put is exercised, then the dealer must pay the owner
   of the option this difference. If the value of the stock is higher than the strike
   price, then the dealer does not have to pay anything. Thus, the payoff function is
   − max[K − St , 0] = min[St − K, 0], which is shown in figure A.1.
   Consider a portfolio which is long a call with strike K, and short a put with the
   same strike. The payoff function for this portfolio is

                        VT    =   max[ST − K, 0] + min[ST − K, 0]
                              =   ST − K,                                           (C.10)

   which is the same as the payoff for a forward contract. Graphically, you can see
   that by adding the payoffs from figures 1.1 and C.1 you obtain the payoff in figure
   1.3. The fact that the payoff for a basic call option is equal to the payoff for a put
   option plus a forward contract is known as put-call parity.
8. Figure 1.4 is known as a ‘call spread’. It can be reconstructed by buying a call struck
   at $50 and selling one struck at $100. In Figure 1.5 we have given an example of a
   ‘butterfly option’, which consists of a long position in a call with strike $50, a short
   position in two calls with strike $100 and another long position in a call with strike
   $150


                                         147
     Payoff
     $0




   -$50




  -$100
          $0             $50               $100              $150              $200
                                      Asset Price
Figure C.1: The payoff function of a short position in a put with a strike of $100 as a
function of the price of the underlying asset.


Section 2
   1. We want to show that if a dealer offers a forward rate of Ft < S̃t then an arbitrageur
      can make a sure profit. To this end, in figure C.2 an analogous trading strategy to
      the one given for the case Ft > S̃t is described. The strategy allows an arbitrageur to
      start with nothing, but to end with a guaranteed positive amount in a sterling bank
      account. The final value of the sterling bank account is greater than zero, which
      implies that an arbitrageur following this strategy can make a risk-free profit.

   2. We want to calculate the forward exchange rate for an initial rate of $1.60, and
      interest rates of r = 10% and ρ = 8%. From equation (2.4), we see that that the
      forward exchange rate is

                                S̃t   = $(1.60) exp[(0.1 − 0.08)2]
                                      = $1.67.                                        (C.12)

   3. We want to calculate the forward rate for a situation where the sterling interest rate
      follows the time dependent relation ρ(t) = a + bt. However, we can proceed just as
      in the time independent case, and simply equate the results obtained by following
      the dollar investment and forward buying strategies of chapter 2. Starting with n
      units of sterling, the dollar investment route yields nS0 exp(rt) dollars, while the
      forward buying route has a final value of nS̃t exp(at + bt2 /2) dollars. Equating the
      two yields
                                                         1   2
                                       S̃t = S0 e(r−a)t− 2 bt .                      (C.13)



                                            148
                                  Arbitrage Strategy II:

          1. Borrow n units of sterling.
          2. Convert the sterling at the spot rate S0 into nS0 dollars. Place
          these dollars into a dollar bank account, earning interest at the rate
          r. Contract to sell nS0 ert dollars forward at time t at the rate Ft
          (assumed < S̃t ).
          3. At time t, the value of the dollar bank account is nS0 ert , while
          the sterling position is −neρt .
          4. Sell nS0 ert dollars at the contracted forward rate Ft , which gives
          nS0 ert /Ft pounds. After the arbitrageur repays the sterling loan,
          with interest, the balance in the sterling account is

                        nS0 ert                  neρt
                                − neρt     =          (S0 e(r−ρ)t − Ft )
                          Ft                      Ft
                                                 neρt
                                           =          (S̃t − Ft )          (C.11)
                                                  Ft


                         Figure C.2: Arbitrage Strategy II

     For a two-year forward purchase, we see that

                                                       1
                       S̃2 = $(1.60) exp[(0.1 − 0.8)2 − 0.0122 ] = $1.63
                                                       2
     Note that this is lower than the forward exchange rate of exercise 2.2. For the
     four-year forward purchase, the rate is

                                                       1
                       S̃4 = $(1.60) exp[(0.1 − 0.8)4 − 0.0142 ] = $1.6
                                                       2
     which is coincidentally the initial rate.

Section 3
  1. We want to use a simple arbitrage argument to show that the basic stake S 0 and
     the payoff values U and D satisfy U > S0 > D. Without loss of generality we can
     assume that U > D. If U = D, then there is no point tossing the coin, and hence no
     point betting. If S0 ≥ U , then by placing a short bet an arbitrageur could guarantee
     to not lose any money and to potentially make some, since the two possible payoffs,
     S0 − U and S0 − D, are both non-negative. Similarly if S0 ≤ D, then the payoffs
     from a standard bet, U − S0 and D − S0 are both greater than or equal to zero, and
     hence the arbitrageur would not have anything to lose by betting. Thus, we must
     have D < S0 < U .


                                           149
  2. We want to calculate the dealer’s payoff for the hedged bet. The payoff is δU −f t (U )
     dollars, where
                                          ft (U ) − ft (D)
                                      δ=                                            (C.14)
                                               U −D
     and hence the payoff is
                         ft (U ) − ft (D)               Dft (U ) − U ft (D)
                                          U − ft (U ) =                                (C.15)
                              U −D                            U −D
     dollars.
  3. Suppose that a derivative has payoff function ft (St ), and that the dealer makes a
     price of g0 dollars, which is assumed to be less than the arbitrage price of f0 dollars.
     Consider an arbitrageur that starts with empty pockets and borrows g0 −δS0 dollars
     interest-free from the Casino, where δ is the hedge ratio given by equation (3.7),
                                              ft (U ) − ft (D)
                                       δ=                      .
                                                   U −D
     The arbitrageur then buys the derivative from the dealer at price g0 , and makes a
     short bet with the casino, in the quantity δS0 , i.e. the Casino pays the arbitrageur
     δS0 at t = 0, and the arbitrageur must pay the Casino δS1 at time t.
     Thus, at time t the arbitrageur gets the certain amount ft (St )−δSt dollars, in other
     words, he gets ft (St ) dollars from dealer, but has to pay δSt dollars to the Casino.
     However, the loan of g0 − δS0 dollars must also be repaid. Thus the arbitrageur is
     left with
                                     ft (St ) − δSt − (g0 − δS0 )
     dollars. But, recall that f0 = ft (St ) − δSt + δS0 . So the arbitrageur is left with
     f0 − g0 dollars, which is, by assumption, positive. Thus a sure profit with no risk
     has been made! Similarly if we took g0 > f0 , then the arbitrageur could make a
     profit by taking a short hedged position. You should work out the details of this
     case as well.

Section 4
  1. Let Ω be a sample space. We want to show that the power set P(Ω), which is the
     set of all subsets of Ω, is a valid event space. Since Ω is a subset of itself, Ω ∈ P(Ω).
     If A, B ∈ P(Ω), then they are subsets of Ω, that is A, B ⊂ Ω. But then A ∪ B ⊂ Ω,
     so A ∪ B ∈ P(Ω). Finally if A ∈ P(Ω), then A ⊂ Ω, and since the complement of
     A in Ω is simply the set of elements of Ω that are not in A, Ω − A ⊂ Ω. Hence
     Ω − A ∈ P(Ω). Thus the power set is a valid event space.
     We now want to write out the power set for a ‘possibility system’ that is based on
     the outcome of two coin tosses. Denoting ‘heads’ by H and ‘tails’ by T , the sample
     space can be written as {HH, HT, T T, T H}. The power set will have 24 = 16
     elements and is as follows:
                n
       Σ =        ∅,
                {HH}, {HT }, {T T }, {T H},
                {HH, HT }, {HH, T T }, {HH, T H}, {HT, T T }, {HT, T H}, {T T, T H},
                {HH, HT, T T }, {HH, HT, T H}, {HH, T T, T H}, {HT, T T, T H},
                                  o
                {HH, HT, T T, T H} .


                                            150
2. We want to prove that given a sample space Ω, the set Σ = {∅, Ω} is a valid event
   space. By definition, Σ satisfies Ω ∈ Σ. Since Ω ∪ ∅ = Ω, and these are the only two
   elements in Σ, we see that Σ is closed under the union of its elements. Furthermore,
   since Ω−∅ = Ω and Ω−Ω = ∅, we see that Σ is closed under complementation of its
   elements. Hence Σ = {∅, Ω} is a valid event space. However, it is not very useful,
   as the only events that it can differentiate between are whether the experiment had
   an outcome or not.
3. We want to show for a possibility system based on a finite sample space Ω and
   an event space Σ equal to the power set of Ω, that any probability measure P is
   uniquely defined by its values on the single element sets of the event space, that
   is, on the ‘probabilities’ of the sample space. Let Ω = {ωi }N i=1 , and let A be any
   element of Σ. But then A is simply a subset of Ω, and hence A = {ωik }M        k=1 for
   some sequence ik . We can then use the property that the probability of the union
   of disjoint sets is equal to the sum of the individual probabilities, that is,

                                               P {ωik }M
                                                ¡          ¢
                                 P (A)   =             k=1
                                               M
                                               X
                                         =           P ({ωik })
                                               k=1
                                               M
                                               X
                                         =           pi k .                       (C.16)
                                               k=1

   Thus we see that the probability of any set is simply the sum of the ‘probabilities’
   of its individual elements.
4. We want to calculate the probability, in the the possibility system (Ω, Σ) based on
   three coin tosses, that there are exactly two heads. This event is A = {HHT, HT H, T HH}.
   We have two probability systems in which to calculate the probability of A. Sup-
   pose that we are in the ‘equal probability’ system (Ω, Σ, P ). The probability of A
   is

        P ({HHT, HT H, T HH})        = P ({HHT }) + P ({HT H}) + P ({T HH})
                                       3
                                     =   .                                (C.17)
                                       8

   In the ‘weighted coin’ probability system (Ω, Σ, Q) we have

        Q({HHT, HT H, T HH})         = Q({HHT }) + Q({HT H}) + Q({T HH})
                                       2
                                     =   .                             (C.18)
                                       9

5. We want to calculate the expectation of the random variable X that returns the
   number of ‘heads’ in three coin tosses for both the ‘equal probability’ and ‘weighted
   coin’ probability measures P and Q. The values of X were written out in equation
   (4.4). For the probability measure P , the expectation is

                  1           1           1           1
    E P [X]   =     X({HHH}) + X({HHT }) + X({HT H}) + X({T HH}) +
                  8           8           8           8

                                         151
            1                1                1     1
              X({HT T }) + X({T T H}) + X({T HT }) + X({T T T }
            8                8                8     8
            1
          =   [3 + 2 + 2 + 2 + 1 + 1 + 1 + 0]
            8
          = 1.5,                                                (C.19)
while for the measure Q, we have
               1                 2                  2      2
E Q [X]   =      X({HHH}) + X({HHT }) + X({HT H}) + X({T HH}) +
              27                 27                27     27
               4                4                 4     8
                 X({HT T }) + X({T T H}) + X({T HT }) + X({T T T }
              27                27               27    27
               1
          =      [3 + 2(2 + 2 + 2) + 4(1 + 1 + 1) + 0]
              27
          =   1.                                                  (C.20)

Let Y be the random variable which is equal to twice the number of ‘heads’ minus
the number of ‘tails’. To simplify the calculation, let W be the random variable
equal to the number of ‘tails’. Then Y = 2(X − W ). But, X + W = 3, so we see
that
                                Y       = 2[X − (3 − X)]
                                        = 4X − 6.                         (C.21)
Using the result above for the expectation of X, we can calculate the expectation
of Y , first in the probability measure P
                             E P [Y ]      =   E P [4X − 6]
                                           =   4E P [X] − 6
                                           =   0,                         (C.22)
and next in the measure Q,
                             E Q [Y ]      = 4E Q [X] − 6
                                           = −2.                          (C.23)

Let Z be the random variable defined by
                                   n
                    Z({ABC}) = 10 ABC        = HHH .
                                        otherwise
In the ‘equal probability’ measure P the expectation is
                      E P [Z]       = P ({HHH})Z({HHH})
                                      1
                                    =   ,                                 (C.24)
                                      8
while in the ‘weighted coin’ measure Q
                      E Q [Z]       = Q({HHH})Z({HHH})
                                       1
                                    =    .                                (C.25)
                                      27


                                         152
Section 5
  1. P0t be a decreasing function of t because ...
  2. We want to show that if the dealer misprices a derivative and sells it for g 0 dollars,
     which is less than the arbitrage value of f0 dollars, then an arbitrageur can make a
     sure profit. Suppose that the arbitrageur starts with nothing. Since the derivative
     is priced too low, he will buy it from the dealer for the price of g0 dollars and then
     hedge this derivative position by making a short bet with the Casino in the amount
     of δS0 dollars, where δ is the hedge ratio (5.8). In order to fund this position,
     the arbitrageur must borrow g0 − δS0 dollars from the bank at an interest rate
     r. Note that if g0 − δS0 is negative then the arbitrageur is actually depositing
     money in the bank. At time t, the arbitrageur receives ft (St ) dollars from the
     dealer for the derivative and has to pay δSt dollars to the Casino in order to cover
     his short bet. Furthermore, the loan, which is now worth (g0 − δS0 )ert dollars,
     must be repaid to the bank. Hence the net position of the arbitrageur after the
     coin toss is ft (St ) − δSt − (g0 − δS0 )ert dollars. From equation (5.9) we see that
     f0 ert = ft (St ) − δSt + δS0 ert , and hence the arbitrageur’s position is worth the
     guaranteed amount of

                          ft (St ) − δSt − (g0 − δS0 )ert = (f0 − g0 )ert            (C.26)

     dollars. Since f0 > g0 the arbitrageur has made a sure profit, starting from nothing.
     If the derivative were over-priced, so g0 > f0 , then the arbitrageur could construct
     a gambling portfolio which is short a derivative and long δ units of the basic bet to
     guarantee a profit.
  3. Suppose that the basic bet in the Casino is $100 and that it pays off $105 and $95
     for heads and tails respectively, while the continuously compounded interest rate is
     rt = log 1.01.
       (a) We want to calculate the risk-neutral probabilities. They are given by equa-
           tion ??. Substituting in the values for S0 , U , D and ert , we have

                                                        (100)(1.01) − 95
                                         p∗       =
                                                             105 − 95
                                                  =     0.6,                         (C.27)

          and hence q ∗ = 1 − p∗ = 0.4.
      (b) We now want to price a call option with a strike of $100. The payoff function
          ft (St ) for this derivative, is

                                  ft (U ) = $5            and    ft (D) = $0.

           Using the risk-neutral probabilities calculated above, and the pricing formula
           f0 = e−rt E ∗ [ft (St )], we see that the cost of the derivative is
                                                        1
                                    f0        =            [(0.6)5 + (0.4)0]
                                                      1.01
                                              =       2.97                           (C.28)

           dollars.


                                                  153
       (c) The hedge ratio is given by equation (3.7). Substituting in the relevant values
           yields
                                                           5−0
                                               δ     =
                                                         105 − 95
                                                     =   0.5.                       (C.29)

      (d) We want to verify that the payoff of a bet that is long δ units of the basic bet
          and short one derivative is independent of the outcome of the coin toss. At
          time t the value of this hedged bet is δSt − ft (St ). If the coin toss is heads,
          then the payoff is

                                       δU − ft (U )      = (0.5)105 − 5
                                                         = 47.50                    (C.30)

           dollars, while if the coin flip is tails, then the result is

                                       δD − ft (D)        = (0.5)95 − 0
                                                          = 47.50                   (C.31)

           dollars. Thus the payoff from the hedged bet is $47.50 and is independent of
           the outcome of the coin toss.
       (e) The cost of the derivative is independent of the ‘physical’ coin toss probabil-
           ties, p and q, and depends only on the risk-neutral probabilities p∗ and q ∗ .
           Hence even if we change the physical probabilities the cost of the derivative
           is still $2.97.
  4. We want to show that the risk-neutral probabilities p∗ and q ∗ are uniquely defined by
     the requirement that S0 = e−rt E ∗ [St ]. Suppose that we have different probabilities
     p̃ and q̃ that define a probability measure P̃ such that S0 = e−rt Ẽ[St ]. Then

                                  S0     =     e−rt [p̃U + q̃D]
                                         =     e−rt [p̃(U − D) + D].                (C.32)

     Solving for p̃, we obtain
                                                    S0 ert − D
                                             p̃ =              .                    (C.33)
                                                     U −D
     But, this is simply p∗ ! Hence, the condition S0 = e−rt Ẽ[St ] uniquely determines
     the risk-neutral probabilities.

Section 6
  1. We want to calculate various probabilities for the numeric example illustrated in
     (6.12). The probability that S2 = 102 is simply the probability that we have
     an initial ‘up’ movement times the probability that this is followed by a ‘down’
     movement, that is p0 p̂01 . Substituting in the numbers yields 0.5 × 0.3 = 0.15.
     We can calculate the probability that S2 > 95 by noting that it is one minus the
     probability that S2 ≤ 95, which is equal to the probability that S = 92. This is the
     probability of having two ‘down’ movements, which is given by 0.5 × 0.3 = 0.15.
     Hence the probability of S2 being greater than 95 is 1 − 0.15 = 0.85.


                                               154
2. We want to calculate the annualised continuously compounded interest rate r for
   the bond process $100 → $101 → $102.01, where each time step is one month. At
   t = 1/12, that is, after one month, a continuously compounded investment of $100
   will be worth $100er/12 . Equating this to the value of the bond process after one
   month B1 = $101, we see that

                                    100er/12      = 101
                                       r/12       = log 1.01
                                           r      = 0.1194,                           (C.34)

   thus the interest rate is 11.94% per year.
3. Using the numeric stock and bond processes given in (6.12) and (6.13), we want to
   calculate the price of two call options which have maturity at time 1 and strikes of
   $98 and $102 respectively. Before we can calculate any prices however, we need to
   determine the risk-neutral probabilities. Fortunately we have already done this—in
   exercise 5.3 we considered an identical system, albeit with only one-period, and
   obtained the risk neutral probabilities p0∗ = 0.6 and p1∗ = 0.4. We can then price
   any derivative by using the discounted expectation of the payoff in the risk-neutral
   probability system,
                                   f0   =    E ∗ [f1 ]B0 /B1
                                             p0∗ f 0 + p1∗ f 1
                                        =
                                                 B1 /B0
                                             0.6f 0 + 0.4f 1
                                        =                      .                       (C.35)
                                                    1.01
   For the call with a strike of $102, the payoff in the event of an ‘up’ movement is
   f 0 = $105 − $102 = $3, while for a ‘down’ movement f 1 = $0. Subsituting this
   payoff function into the pricing formula (C.35) we obtain f0 = $3×0.6/1.01 = $1.78.
   If the strike is $98 then the payoff function is f 0 = $7 and f 1 = $0. Calculating
   the initial price of the derivative we find that it is $4.16.
   We want to calculate the value of the call options again, but this time we are buying
   them at time 1 with a maturity of time 2. Because there are two possible initial
   prices at time 1, S 0 and S 1 , we will need to calculate derivative prices for both cases.
   Begin by assuming that the first stock movement was ‘up’, so that S1 = $105. But
   then the time step from t = 1 to t = 2 is a simple binomial tree, with an ‘up’ price
   of $108, and a ‘down’ price of $102. We can therefore calculate the risk-neutral
   probabilities using equation (5.11), and find that

                                             S 0 B2 /B1 − S 01
                                 p̂00
                                   ∗    =
                                                  S0 − S1
                                             105 × 1.01 − 102
                                        =
                                                  108 − 102
                                        =    0.675,                                   (C.36)
   and
                                             S 00 − S 0 B2 /B1
                                 p̂00
                                   ∗    =
                                                  S0 − S1

                                            155
                                               108 − 105 × 1.01
                                        =
                                                   108 − 102
                                        =      0.325.                             (C.37)

  We can now calculate the initial price f 0 of a derivative by using the discounted
  expectation of the payoff in the risk-neutral system,

                                              p̂00
                                                ∗ f
                                                    00
                                                       + p̂01
                                                           ∗ f
                                                               01
                               f0       =
                                                    B2 /B1
                                              0.675f 0 + 0.325f 1
                                        =                         .               (C.38)
                                                       1.01

  Recall that this formula assumes that the share price at time 1 is S 0 . If the share
  price is S 1 instead, then we will get a different formula. For the call option with
  a strike of $102, the payoff function is f 00 = $6 and f 01 = $0. We can substitute
  this into equation (C.38) to obtain a derivative price of $4.01. For the call with a
  strike of $98, the payoff function is f 00 = $10 and f 01 = $4. This yields an initial
  price of $7.97.
  An identical calculation can be carried out for the case when S1 = 95. In this
  case, the risk neutral probabilities are p̂10                11
                                             ∗ = 0.658 and p̂∗ = 0.342. However, the
  payoff functions for both call options are identically zero, and hence without further
  calculation we see that their initial prices will be zero.
  We now want to price the call options at time 0 when they have a maturity at time
  2. This is equivalent to finding the value at time 0 of a derivative which pays off f i
  at time 1. Why? Because we can think of the following two investment strategies:
  (a) buy a call option at time 0 which pays off at time 2 and (b) buy a derivative at
  time 0 which pays f1 at time 1, and then use the proceeds of this payoff to buy a
  call option which pays off at time 2. Since both strategies have the same payoff they
  must have the same initial price, otherwise we could arbitrage by going long the
  cheaper strategy and shorting the more expensive one. By substituting the values
  calculated above for f 0 and f 1 into the pricing formula (C.35) we can obtain the
  initial price of strategy (b), and hence of strategy (a) and the call option that we
  are interested in pricing. The price of the call option with strike $102 is

                                            0.6f 0 + 0.4f 1
                               f    =
                                                 1.01
                                            0.6 × $4.01 + 0.4 × $0
                                    =
                                                      1.01
                                    =       $2.38.                                (C.39)

  For the call option with a strike of 98, we can substitute in the derivative values
  f 0 = $7.97 and f 1 = $0 to find the initial price of $4.73.

4. We want to compare the Casino price equation (5.13),

                                   S0 ert − D           U − S0 ert
                               µ                                         ¶
                   f0 = e−rt                  ft (U ) +            ft (D) ,       (C.40)
                                    U −D                 U −D



                                             156
   with the one-period derivative price of equation (6.21). If we make the substitutions
   ert → B1 /B, U → S 0 , D → S 1 , ft (U ) → f 0 and ft (D) → f 1 in the Casino price
   equation, then we obtain
                                 "                              #
                              B S BB1 − S 1 0 S 0 − S BB1 1
                        f=                    f + 0           f ,                 (C.41)
                             B1 S 0 − S 1           S − S1

   which is exactly the one-period result. Hence the Casino and the binomial tree
   model price derivatives in the same way.
5. We want to verify that the ‘probabilities’ introduced in equation (6.22),

                                 S̃ − S 1                     S 0 − S̃
                         p0∗ =                and     p1∗ =            ,         (C.42)
                                 S0 − S1                      S0 − S1

   where S̃ = SB1 /B, generate a valid probability measure. We first note that

                                        p0∗ + p1∗ = 1.                           (C.43)

   We then need to show that the probabilities are both positive. We can do this by
   applying an arbitrage argument to the values of S̃, S 0 and S 1 . By assumption we
   take S 1 < S 0 . Suppose that S̃ ≤ S 1 . We can then form an arbitrage strategy by
   starting with nothing, and then going long on stocks and shorting the bonds. The
   initial holding of the portfolio is αS − B, where α = B/S so that the net value of
   the investment is zero. At time 1 the position is worth αS1 − B1 . The minimum
   value of this random amount occurs when S1 = S 1 . We then see that

                              αS1 − B1       ≥    αS 1 − B1
                                             ≥    α(S 1 − B1 /α)
                                             ≥    α(S 1 − S̃)                    (C.44)

   But, since S 1 ≥ S̃, we can never lose money by investing this way, and we will
   make some whenever S1 = S 0 . Hence there is an arbitrage opportunity and to
   avoid it we must have S 1 < S̃. This tells us that p0∗ > 0. A similar argument can
   be used to demonstrate that S 0 > S̃, and hence that p1∗ > 0. Thus the risk-neutral
   probabilities do, in fact, constitute a geunine probability measure.
6. We want to find the forward price at time 0 for the purchase of one share at time
   1. We can do this by considering a forward contract, which is an agreement made
   at time 0 to purchase a unit of stock for a fixed price K. This is a derivative which
   pays off f1 = S1 − K (which may be negative) at time 1. The price of the forward
   contract is
                                  B £ 0 0
                                       p (S − K) + p1∗ (S 1 − K)
                                                                      ¤
                       f0   =
                                  B1 ∗
                                  B 0 0                              B
                            =        [p∗ S + p1∗ S 1 ] − [p0∗ + p1∗ ] K
                                  B1                                 B1
                                  B ∗           B
                            =        E [S1 ] −      K                            (C.45)
                                  B1           B1

                                            157
     But, by definition of the risk-neutral probability, the first term is simply the price
     of a derivative which pays off the stock value at t = 1, which is therefore the initial
     price of the stock. Hence
                                                   B
                                       f0 = S 0 −    K.                             (C.46)
                                                  B1
     This is the price of a forward contract to buy a unit of stock at time 1 for the fixed
     price K. The forward price of the stock F , is the value of K such that the cost of
     the contract is zero. Thus,
                                                  B1
                                          F = S0 .                                  (C.47)
                                                  B
     The correct forward price can also be obtained by an arbitrage argument. Suppose
     that an investor agrees at time 0 to purchase a stock at time t from a dealer for the
     price S̃t . The dealer immediately buys a share at the going rate S0 , using money
     borrowed at a continuously compounded rate r. At time t, the dealer receives S̃t
     for the share, and uses it to repay the loan of S0 ert . The dealer’s net position is
     therefore S̃t − S0 ert , and because he started with nothing this must be zero. Hence
     S̃t = S0 ert .

Section 7
  1. In a two-period market, we want to show that if S1 = S10 , then the value of the
     derivative at t = 1 must be f 0 as given in equation (7.2),

                                      f0   f 00 p00    01 01
                                                 ∗ + f p∗
                                         =                   ,
                                      B1            B2

     where
                                                     0
                                                   S̃12 − S 01
                                            p00
                                             ∗ =               ,
                                                   S − S 01
                                                     00

                                     B2
     p01
      ∗ = 1−p
                 00∗         0
                     , and S̃12 = S0 B 1
                                         (the forward price, made at time 1, for delivery at
     time 2, if at time 1 the stock is in the S 0 state).
     We do this by constructing a replicating portfolio, just as we did in the one-period
     case. At t = 1, the dealer sells an investor a derivative which will pay out either f 00
     or f 01 at time 2. The proceeds f 0 from this sale are used to construct a hedging
     portfolio in the stock and bond markets. The dealer buys β1 bonds at a price of B1
     each and δ1 shares at a price of S 0 each. Since the dealer’s initial position is zero,
     we have
                                       f 0 = β1 B1 + δ1 S10 .                         (C.48)
     At the next period we want the stock and bond investments to exactly replicate
     the derivative payoff, so
                                  f 0i = β1 B2 + δ1 S20i .                  (C.49)
     Solving these two equations for β1 and δ1 we get

                              f 00 − f 01                     f 01 S200 − f 00 S201
                       δ1 =                   and      β1 =                         .   (C.50)
                              S200 − S201                      B2 (S200 − S201 )


                                              158
   Plugging the values back into (C.48) we get
                              " B
                                                     0B
                                                            #
                                 0       01     00
                    f0     1 S1 B21 − S2 00 S2 − S1 B21 01
                        =                   f + 00        f   ,
                    B1    B2 S200 − S201        S2 − S201

   which is the required result.
   Note, incidentally, that β1 and δ1 are the ‘new’ hedge ratios that the dealer puts
   on at t = 1. Strictly speaking, we should write β10 , δ10 to indicate that these are the
   hedge ratios at t = 1 for the S 0 state (in the S 1 state, we would put on a different
   hedge).

2. We want to show that the probability system generated by pi∗ and pij
                                                                     ∗ satisfies the
   relations (7.8),
                        B1    E ∗ [S1 ]        B2    E ∗ [S2 ]
                           =            and       =            .             (C.51)
                        B0      S0             B0      S0
   The first equality is easy to verify,

                           E ∗ [S1 ]    =       p0∗ S 0 + p1∗ S 1
                                                 S̃ − S 1 0   S 0 − S̃ 1
                                        =                S  −         S
                                                S0 − S1       S0 − S1
                                        =       S̃
                                                    B1
                                        =       S0 .                                  (C.52)
                                                    B0
   In the two-period case, we have

                  E ∗ [S2 ] = p0∗ p̂00 00   0 01 01     1 10 10     1 11 11
                                    ∗ S2 + p∗ p̂∗ S2 + p∗ p̂∗ S2 + p∗ p̂∗ S2 .        (C.53)

   Now consider the first two terms,
                                                      0
                                                    S̃12 − S201 00 S200 − S̃12
                                                                            0
                   p̂00 00    01 01
                     ∗ S2 + p̂∗ S2          =                   S2 + 00        S 01
                                                      00
                                                    S2 − S 2 01     S2 − S 2 2
                                                                            01

                                                0
                                            = S̃12 ,                                  (C.54)
           0       B2
   where S̃12 = S0 B 1
                       . A similar relation holds for the next two terms,

                                       p̂10 10    11 11    1
                                         ∗ S2 + p̂∗ S2 = S̃12 ,                       (C.55)
           1
   where S̃12 = S 1 B2 /B1 . Hence we see that

                                                                       B2
                                E ∗ [S2 ]       = [p0∗ S 0 + p1∗ S 1 ]
                                                                       B1
                                                  ·          ¸
                                                        B  1   B 2
                                                =   S0
                                                        B0 B1
                                                       B2
                                                = S0 ,                                (C.56)
                                                       B0

                                                159
   where the second line follows from the previous argument.
   Do these two conditions uniquely define a probability measure? Consider the fol-
   lowing two stock price processes:


                                         .5 ©* 200
                                         © ©
                                       ©
                                       HH
                                  * 150 HH
                               .5©©          j
                              ©©         .5    100
                          100 HH                                                     (C.57)
                                 HH
                                  j      .5 ©* 75
                               .5   50 ©©©
                                       HH
                                           HHj
                                         .5    25
   and


                                               * 600
                                            .1©©
                                          © ©
                                          H
                                  .5 ©* 150 HH
                                  © ©       .9 H
                                               j 100
                          100 ©
                              H
                                H
                                                                                     (C.58)
                                         H             * 75
                                                    .5 ©
                                       .5 Hj 50     ©©
                                                  ©
                                                  H
                                                    HH
                                                    .5 H
                                                       j 25

   Set the interest rate to zero. Then both these processes satisfy the relations (7.8),
   and hence they do not uniquely define a probability measure.
3. In order to calculate the risk-neutral probabilities, we need the discounted stock
   prices,

                                  0          B2
                                S̃12    = S0    = 106.05
                                             B1
                                  1          B2
                                S̃12    = S1    = 95.95
                                             B1
                                            B1
                                S̃01    = S    = 101
                                            B0

   We can then calculate the probabilities

                                           0
                                         S̃12 − S 01
                                 p00
                                  ∗ =                = .675,
                                         S − S 01
                                           00




                                          160
                                      .675
                                         ©©* 108
                                    © ©
                                    H
                                * 105 HH
                             .6 ©
                             ©©            j 102
                                      .325 H
                     100 ©
                         H
                           H    H              * 98
                                          .658 ©
                                 j 95
                              .4 H         ©©
                                         ©
                                         H
                                           HH
                                               j 92
                                          .342 H


Figure C.3: The two-period Stock Market with risk-neutral probabilities.

etc., which gives the risk-neutral tree shown in figure C.3. Using this system, it is
easy to calculate the price of any derivative from the formula

                                         B ∗
                                    f=      E [f2 ]
                                         B2

We consider each of the derivatives in turn, expressing the payoff as a vector of the
form (f 00 , f 01 , f 10 , f 11 )

 (a) If f ij = S ij , then the payoff vector is (108,102,98,92), and hence the derivative
     price is

            100
      f=          [.6(.675 × 108 + .325 × 102) + .4(.6583 × 98 + .3416 × 92)] = 100,
           102.01
      as expected.
 (b) If we take a future contract with a strike of 100, then the payoff is (8,2,-2,-8),
     and the price is 1.97.
  (c) The European call option has payoff (8,2,0,0) and costs 3.29.
 (d) The put option pays out (0,0,2,8) and has price 1.58.
  (e) In order to calculate the value of the call option, f , we need to know the
      value of the future at t = 1, f˜1 . We can calculate this using the martingale
      property
                                             B1 ∗ ˜
                                       f˜1 =   E [f 2 ]
                                             B2 1
      which yields f˜0 = 5.99 and f˜1 = −4.01. Since the strike price is 3, the payoff
      vector is (f 0 , f 1 ) = (2.99, 0). Hence, calculating the value of the option, we
      get 1.78.
  (f) The derivative has payoff (0,0,2,7), and hence has price 1.45.
 (g) The digital payoff is (10,10,0,0), and thus the value is 5.88.



                                      161
    (h) A European call option has payout (4,0,0,0), and hence a price of 1.59. For the
        American option, we can price it by assuming that the investor always makes
        the best move possible. Thus, the payoff vector is (4,1.01,0,0), corresponding
        to exercising the option at t = 2, and t = 1 for the first two cases. Note
        that if the option is exercised at t = 1, then the payoff can be invested in the
        money market account, and hence is worth 1.01, not 1 at t = 2. Using this
        payoff function, the American option is valued at 1.78.
4. We want to calculate the risk-neutral probabilities for a three-period model. First
   of all let us define the forward prices that we are going to use:

                            B1          i       B2 i                ij     B3 ij
                   S̃01 =      S      S̃12 =       S     and      S̃23 =      S .   (C.59)
                            B0                  B1                         B2

   The probabilities at the first time step are

                                 S̃01 − S 1                      S 0 − S̃01
                         p0∗ =                    and    p1∗ =              .       (C.60)
                                  S0 − S1                        S0 − S1

   At the second time setp,

                                   i
                                 S̃12 − S i1                     S i0 − S̃12
                                                                          i
                       p̂i0
                         ∗ =                      and    pi1
                                                          ∗ =                .      (C.61)
                                 S i0 − S i1                     S i0 − S i1

   At the third time step
                                 ij                                          ij
                              S̃23  − S ij1                       S ij0 − S̃23
                     p̂ij0
                       ∗ =                        and    pij1
                                                          ∗ =                   .   (C.62)
                              S − S ij1
                                ij0                                ij0
                                                                  S −S      ij1



5. Suppose that at time 2 we are at a node S ij . Then by the one period approach we
   obtain the price of the derivative at the node as

                                          B2 ij0 ij0
                                 f ij =     (p̂ f + p̂ij1
                                                      ∗ f
                                                          ij1
                                                              )                     (C.63)
                                          B3 ∗

   Multiply by pij
                ∗ to remove the conditional probabilities from the right hand side,

                                           B2 ij0 ij0
                               pij
                                ∗ f
                                    ij
                                       =     (p f + pij1
                                                      ∗ f
                                                          ij1
                                                              )                     (C.64)
                                           B3 ∗

   Sum over all possible values of i and j. This is simply taking the expectation of
   both sides,
                                              B2 ∗
                                  E ∗ [f2 ] =    E [f3 ].                    (C.65)
                                              B3
   We can then use our two-period result to write

                                                  B0 ∗
                                           f0 =      E [f3 ].                       (C.66)
                                                  B3


                                               162
  6. Consider the stock process at time N − 1. We can write an arbitrary node as
     S i1 ···iN −1 , which will move to either S i1 ···iN −1 0 or S i1 ···iN −1 1 . The bond process will
     move from BN −1 to BN . The derivative will pay either f i1 ···iN −1 0 or f i1 ···iN −1 1 .
     Using the standard one-period argument, we find that the value of the derivative
     at time N − 1 is
                                  BN
                 f i1 ···iN −1         = p̂i1 ···iN −1 0 f 11 ···iN −1 0 + p̂i1 ···iN −1 1 f 11 ···iN −1 1        (C.67)
                                 BN −1
                                        i ···iN −1
     Multiply through by p∗1                         ,
                         BN
       i ···iN −1 i1 ···iN −1   i ···i                                    i ···i
     p∗1         f           = p∗1 N −1 p̂i1 ···iN −1 0 f 11 ···iN −1 0 +p∗1 N −1 p̂i1 ···iN −1 1 f 11 ···iN −1 1 .
                       BN −1
                                                                                                    (C.68)
     But we can convert the conditional probabilities on the rigth hand side into uncon-
     ditional probabilities
            i ···iN −1 i1 ···iN −1     BN
           p∗1         f                    = pi1 ···iN −1 0 f 11 ···iN −1 0 + pi1 ···iN −1 1 f 11 ···iN −1 1 .   (C.69)
                                      BN −1
     We then want to sum over all the possible values of i1 · · · iN −1 . This is equivalent
     to taking expectations of both sides,
                                                                      BN
                                                E ∗ [fN −1 ]               = E ∗ [fN ].                           (C.70)
                                                                     BN −1
     By the induction hypothesis,
                                                                              B0
                                                         f0 = E ∗ [fN −1 ]                                        (C.71)
                                                                             BN −1
     and hence
                                                                             B0
                                                           f0 = E ∗ [fN ]                                         (C.72)
                                                                             BN
     as desired.

Section 8
  1. Working in a filtered probability system (Ω, Σ, P, F), we want to verify that the
     stochastic process
                                                    (m)
                                  Ym (ωi ) = E[Sn |Fk ],                        (C.73)
                 (m)
     where Fk is the unique element of the filtration at time m that contains ωi , is
     adapted to the filtration F. Note that we are being slightly more general by using
     Sn in the definition of Ym instead of S2 . Recall that a process Y is adapted, if
     at every time step m, Ym has the same value for all the elements that are in the
                (m)
     same set Fk of the partition of the sample space that is defined by the filtration
                                                                (m)
     element Fm . So suppose ωi and ωj are both elements of Fk . Then by definiton,
                                                          (m)                                       (m)
                           Ym (ωi ) = E[Sn |Fk                  ]     and    Ym (ωj ) = E[Sn |Fk          ],      (C.74)
     and hence Y is adapted to the filtration F.


                                                                    163
2. We want to verify that the martingale condition
                                             ·    ¸
                                   Sm          Sn
                                        = E∗                                        (C.75)
                                   Bm          Bn
   holds for the three period binomial model. Since the expectation is with respect to
   the risk-neutral measure we need to calculate the relevant probabilities p̂ i∗ , p̂ij
                                                                                      ∗ and
   p̂ijk
     ∗   . Fortunately we have already done   this  in exercise  7.4. We begin by verifying
   the result for adjacent time steps. At the first time step we have
                             · ¸           ·         ¸
                              S1             S1
                          E0        = E          |F0
                              B1             B1
                                        p̂0 S 0 + p̂1 S 1
                                    =
                                               B1
                                        (S̃ − S 1 )S 0 + (S 0 − S̃)S 1
                                    =
                                                 B1 (S 0 − S 1 )
                                                   S̃
                                         =
                                                   B1
                                                   S
                                         =            .                             (C.76)
                                                   B0
   Between the first and second time steps,
                         · ¸           ·         ¸
                          S2              S2 i
                      E1        = E           |F
                          B2              B2
                                    p̂i0 S i0 + p̂i1 S i1
                                =
                                             B2
                                    (S̃ i − S i1 )S i0 + (S i0 − S̃ i )S i1
                                =
                                               B2 (S i0 − S i1 )
                                             S̃ i
                                     =
                                             B2
                                             Si
                                     =            .                                 (C.77)
                                             B1
   Finally, consider when we move from the second to third node,
                       · ¸          ·         ¸
                        S3             S3 ij
                    E2       = E         |F
                        B3            B3
                                 p̂ S + p̂ij1 S ij1
                                   ij0 ij0
                             =
                                           B3
                                 (S̃ − S ij1 )S ij0 + (S ij0 − S̃ ij )S ij1
                                     ij
                             =
                                            B3 (S ij0 − S ij1 )
                                         S̃ ij
                                 =
                                         B3
                                         S ij
                                 =             .                                    (C.78)
                                         B2

                                                   164
We can verify the other cases by using a very important result:
                                    Ei [Xn ] = Ei [Ej [Xn ]].                              (C.79)
This is known as the tower law of conditional expectation. Rather than prove it,
we will verify it for a specific example. Consider the random variable E1 [S3 ], which
is the expected value of the share price at time 3, given that we have information
about what happened at time 1. Evaluate it at a particular element of the sample
space, say U DU ,

              E1 [S3 ](U DU )     =       E[S3 |F 0 ]
                                  =       P (U U U |F 0 )S 000 + P (U U D|F 0 )S 001
                                          +P (U DU |F 0 )S 010 P (U DD|F 0 )S 011 .        (C.80)

Now consider the random variable E1 [E2 [S3 ]]. We want to evaluate it at the same
point and verify that we get the same result as above. Hence

    E1 [E2 [S3 ]](U DU )    =   E[E2 [S3 ]|F 0 ]
                      =         P (U U U |F 0 )E[S3 |F 00 ] + P (U U D|F 0 )E[S3 |F 00 ]
                            +   +P (U DU |F 0 )E[S3 |F 01 ] + P (U DD|F 0 )E[S3 |F 01 ]
                      =         {P (U U U |F 0 ) + P (U U D|F 0 )}
                            ×   {P (U U U |F 00 )S 000 + P (U U D|F 00 )S 001 }
                            +   {P (U DU |F 0 ) + P (U DD|F 0 )}
                            ×   {P (U DU |F 01 )S 010 + P (U DD|F 01 )S 011 }.             (C.81)
Collecting terms that have the same value of S3 , we have

     E1 [E2 [S3 ]](U DU )   =     {P (U U U |F 0 ) + P (U U D|F 0 )}P (U U U |F 00 )S 000
                            +     {P (U U U |F 0 ) + P (U U D|F 0 )}P (U U D|F 00 )S 001
                            +     {P (U DU |F 0 ) + P (U DD|F 0 )}P (U DU |F 01 )S 010
                            +     {P (U DU |F 0 ) + P (U DD|F 0 )}P (U DD|F 01 )S 011(C.82)
                                                                                      .

We then note that P (U U U |F 0 )+P (U U D|F 0 ) = P (F 00 |F 0 ), and similarly P (U DU |F 0 )+
P (U DD|F 0 ) = P (F 01 |F 0 ), so

                E1 [E2 [S3 ]](U DU )       =    P (F 00 |F 0 )P (U U U |F 00 )S 000
                                           +    P (F 00 |F 0 )P (U U D|F 00 )S 001
                                           +    P (F 01 |F 0 )P (U DU |F 01 )S 010
                                           +    P (F 01 |F 0 )P (U DD|F 01 )S 011 .        (C.83)

But then P (F 00 |F 0 )P (U U U |F 0 ) = P (U U U |F 0 ), and so on, which simplifies our
result to
           E1 [E2 [S3 ]](U DU )       =     P (U U U |F 0 )S 000 + P (U U D|F 0 )S 001
                                      +     P (U DU |F 0 )S 010 + P (U DD|F 0 )S 011
                                      =     E1 [S3 ](U DU ),                               (C.84)


                                             165
     which is what we wanted to prove.
     We can then use the tower law to evaluate the other conditional expectations. For
     example,                     · ¸         · · ¸¸
                                    S2              S2
                               E0        = E 0 E1         .                     (C.85)
                                    B2              B2
     But, we have already evaluated the single time-step conditional expectations, and
     hence                           · ¸          · ¸
                                       S2          S1
                                  E0        = E0       .                        (C.86)
                                      B2           B1
     Once again, we have already calculated this result, and so we see that
                                                 ·      ¸
                                                     S2     S0
                                         E0               =    .                  (C.87)
                                                     B2     B0

     Similarly we see that
                                    ·        ¸             · · ¸¸
                                        S3                      S3
                               E0                 =     E 0 E2
                                        B3                      B3
                                                           · ¸
                                                             S2
                                                  =     E0
                                                             B2
                                                        S0
                                                  =        .                      (C.88)
                                                        B0

     Finally, we also have
                                    ·        ¸             · · ¸¸
                                        S3                      S3
                               E1                 =     E 1 E2
                                        B3                      B3
                                                           · ¸
                                                             S2
                                                  =     E1
                                                             B2
                                                        S1
                                                  =        .                      (C.89)
                                                        B1

Section 9
  1. We need to show that the number of ways of arriving at the node Sin is Cin . The
     node Sin is a combination of i ‘down’ movements and n − i ‘up’ movements. Hence
     we can view the problem as being the number of ways of placing i identical objects
     (the down movements) in n ordered positions (the total number of time steps).
     The number of ways of placing n distinct objects in n locations is n!. However,
     this overcounts the number of ‘up’ movements by a factor of (n − i)!, since they are
     indistinguishable, and overcounts the ‘down’ movements by a factor i!. Hence the
     total number of distinct combinations is n!/[i!(n − i)!], which is simply C in .




                                                 166
                                                 * $115.76
                                                 ©
                                              ©©
                                  * $110.25 ©
                                  ©         H
                              © ©             HH
                      * $105 ©
                      ©      H                   j
                                                 H* $104.74
                                                  ©
                  © ©         H H             © ©
           $100 ©
                H                 * $99.75 ©
                                  j
                                  H
                                  ©         H
                  HH          © ©             HH
                      j $95 ©
                      H      H                    j
                                                  H
                                                  * $94.76
                                                  ©
                              HH              © ©
                                  j $90.25 ©
                                  H         H
                                              HH
                                                  j $85.74
                                                  H



              Figure C.4: The share prices for the lattice model.

2. We want to verify that the risk-neutral probabilities for the binomial lattice are
   consistent with the risk-neutral probabilities derived earlier for the non-recombining
   tree,
                                S̃ − S 1                  S 0 − S̃
                          p0∗ = 0          and      p 1
                                                      ∗ =          .               (C.90)
                                S − S1                    S0 − S1
   Setting S 0 = uS0 , S 1 = dS0 and S̃ = er S0 we see that

                                               er S0 − dS0
                                   p0∗   =                                        (C.91)
                                               uS0 − dS0
                                               er − d
                                         =            ,                           (C.92)
                                               u−d

   which is the probability p∗ obtained for the lattice model. By conservation of
   probability we must also have p1∗ = q∗ .

3. Consider a market with S0 = $100, p = 0.6, er = 1.01, u = 1.05 and d = 0.95. The
   lattice of share prices is given in figure C.4. The risk neutral probability p∗ can be
   calculated as
                                              er − d
                                   p∗    =
                                               u−d
                                              1.01 − 0.95
                                         =
                                              1.05 − 0.95
                                         =    0.6.                                (C.93)

   We now want to price a call option with a strike of $100. The initial price f0 of any
   derivative is given by the binomial pricing formula
                                             n
                                             X
                                f0 = e−rn          Cin pn−i i i
                                                        ∗ q∗ f n ,                (C.94)
                                             i=0


                                         167
     where in the case of our call option the payoff function fni = Sni −$100. Substituting
     in the share prices, we have

                   f30 = $15.76    f31 = $4.74     f32 = $0   and    f33 = $0       (C.95)

     The pricing formula then yields an initial cost for the call option of

                         (1)(0.6)3 (0.4)0 ($15.76) + (3)(0.6)2 (0.4)1 ($4.74)
                  f0   =
                                                (1.01)3
                       = $5.29                                                      (C.96)


Section 11
  1. For now, we will assume that Wa+b −Wb is normally distributed and merely calculate
     its mean and variance. The calculation of the expectation is trivial,

                           E[Wa+b − W a]       = E[Wa+b ] − E[Wa ]
                                               = 0,                                 (C.97)

     where we have used the fact that the expectation of a Brownian motion Wt at any
     time t is 0. The variance calculation is slightly more complicated, but not much.
     We see that

                  E[(Wa+b − Wa )2 ]    =        2
                                             E[Wa+b − 2Wa+b Wa + Wa2 ]
                                                  2
                                       =     E[Wa+b  ] − 2E[Wa+b Wa ] + E[Wa2 ]
                                       =     a + b − 2E[Wa+b Wa ] + a,              (C.98)

     where we took advantage of the fact that the variance of Wt is t. But what about the
     term E[Wa+b Wa ]? The two random variables Wa+b and Wa are not independent,
     so we cannot factor the term into E[Wa+b ]E[Wa ]. So how do we evaluate it?
     Well, we make use of a common trick for generating independent variables. Write
     Wa+b = (Wa+b − Wa ) + Wa . We then have

               E[(Wa+b − Wa )2 ]      = 2a + b − 2E[{(Wa+b − Wa ) + Wa }Wa ]
                                      = 2a + b − 2E[(Wa+b − Wa )Wa ]
                                           −2E[Wa2 ].                               (C.99)

     But now we can make use of the fact that (Wa+b − Wa ) and Wa are independent
     random variables, and hence

             E[(Wa+b − Wa )2 ]     = 2a + b − 2E[Wa+b − Wa ]E[Wa ] − 2E[Wa2 ]
                                   = 2a + b − 0 − 2a
                                   = b.                                       (C.100)

     Thus we see that Wa+b − Wa has a mean of zero and a variance of b.



                                            168
2. We want to calculate the variance of the asset price process St , which has a time
   evolution governed by equation (11.1),
                                                    1   2
                                   St = S0 eµt− 2 σ t+σWt .                    (C.101)

   We already demonstrated in equation (11.10) that the expectation of the asset price
   is
                                   E[St ] = S0 eµt .                          (C.102)
   In order to obtain the variance, we first need to calculate the expectation of the
   square of the asset price,
                                          h          2
                                                           i
                             E[St2 ] = E S02 e2µt−σ t+2σWt
                                                 2
                                     = S02 e2µt−σ t E e2σWt .
                                                      £    ¤
                                                                              (C.103)

   Since Wt is an N(0, t) random variable, we can use the result of lemma (11.1) to
   evaluate the expectation,
                                                                2   2
                               E[St2 ]       =   S02 e2µt−σ t e2σ t
                                                                2
                                             =   S02 e2µt+σ t .                (C.104)
   Hence we can calculate the variance as
                             V [St ]   =     E[St2 ] − E[St ]2
                                                            2
                                       =     S02 e2µt+σ t − S02 e2µt
                                                            2
                                       =     S02 e2µt (eσ t − 1).              (C.105)

3. We want to calculate the first four moments for an N(m, V ) random variable. To
   begin with, we will calculate the first four moments of the ‘standard normal distri-
   bution’, N(0, 1). Note that by symmetry any odd moments vanish. We can then
   calculate the zeroth moment (which must be 1 by conservation of probability) by
   using a well-known change of coordinates. We begin by considering the square of
   the integral,
                                  ·      Z ∞               ¸2
                           2         1           −u2 /2
                         I   =      √          e        du
                                      2π −∞
                                      Z ∞              Z ∞
                                   1           2                 2
                             =              e−x /2 dx         e−y /2 dy
                                  2π −∞                  −∞
                                      Z ∞Z ∞
                                   1                   2   2
                             =                    e−(x +y )/2 dydx            (C.106)
                                  2π −∞ −∞

   We then want to change to polar coordinates r and θ
                                     Z 2π Z ∞
                           2       1                  2
                         I    =                    e−r /2 rdrdθ
                                  2π 0         0
                                  Z ∞
                                         −r 2 /2
                              =        e         rdr                           (C.107)
                                         0


                                             169
Making the variable substitution v = r 2 /2 we obtain
                                                               Z ∞
                                              2
                                          I           =                e−v dv
                                                                   0
                                                      =        1,                               (C.108)

so that I is indeed equal to 1. We can then obtain the other moments by using
integration by parts. For example,
                 Z ∞                                        2
                                                                ¯∞      Z ∞
           1               2 −x2 /2                   −xe−x /2 ¯¯    1         2
          √            x e                =             √       ¯  +√       e−x /2 dx
            2π   −∞                                       2π ¯        2π −∞
                                                                        −∞
                                          =           1.                                        (C.109)

For the fourth moment, we have
               Z ∞                                       2
                                                              ¯∞      Z ∞
         1            4 −x2 /2                    −x3 e−x /2 ¯¯    1             2
        √            x e              =             √         ¯  +√       3x2 e−x /2 dx
          2π   −∞                                      2π ¯         2π −∞
                                                                       −∞
                                      =       3.                                                (C.110)

Using these results, we can then derive the moments for an N(m, V ) random vari-
able,
                                         x=∞
                                   1
                                         Z
                                                  (x−m)2
                           n
                       E[X ] = √             xn e− 2V dx.
                                  2πV
                                                           x=−∞
                                             √
Making the variable substitution u = (x − m)/ V , we have
                                                      u=∞
                               n1
                                                      Z             √            u2
                       E[X ] = √                                   ( V u + m)n e− 2 du.
                                 2π
                                                  u=−∞


Expanding the binomial term,

                                   n                                        u=∞
                                                   k/2 n−k
                                              n ¢ V √m
                                                                            Z
                                                                                       u2
                                   X
                           n
                                                                                  uk e− 2 du.
                                     ¡
                     E[X ] =                  k
                                   k=0
                                                      2π
                                                                         u=−∞


The integral is now in terms of the moments of an N(0, 1) variable, and hence we
can find the values

                                   E[X]           =        m                                    (C.111)
                                      2                        2
                               E[X ]              =        m +V                                 (C.112)
                                      3                        3
                               E[X ]              =        m + 3mV                              (C.113)
                               E[X 4 ]            =        m4 + 6m2 V + 3V 2 .                  (C.114)


                                                      170
4. We want to calculate E[eαX ] and V [eαX ] for an N(m, V ) random variable X. We
   already calculated the expectation of eαX in lemma 11.1,
                                                                 1   2
                                         E[eαX ] = eαm+ 2 α V .                            (C.115)

   In order to obtain the variance, we need to consider the expectation of (eαX )2 =
   e2αX . This is easy to evaluate, again by using lemma 11.1,
                                                                     2
                                         E[e2αX ] = e2αm+2α V .                            (C.116)

   Hence the variance is

                              V [eαX ]     =   E[e2αX ] − E[eαX ]2
                                                             2                         2
                                           =   e2αm+2α V − e2αm+α V
                                                             2                     2
                                           =   e2αm+2α V (1 − e−α V ).                     (C.117)

                                                     1   2
5. We want to show that Mt (Wt ) = eαWt − 2 α t is a martingale, that is, Es [Mt ] = Ms .
   The simplest way to do this is to rewrite Mt in terms of random variables that are
   independent of the conditioning at time s. That is, write
                                                                         1   2
                                   Mt = eα(Wt −Ws )+αWs − 2 α t ,                          (C.118)

   which is a function of the N(0, t − s) random variable (Wt − Ws ) and the constant
   Ws . Note that (Wt − Ws ) is independent of any conditioning at time s because
   of the independent increments property of Brownian motion, while Ws is fixed by
   the fact that we know what actually happens at time s—this is what a conditional
   expectation means. Thus we can calculate the conditional expectation of M t by
   integrating (C.118) over the probability distribution for (Wt − Ws ) and treating Ws
   as a constant,
                        Z ∞
                                                                          −x2
                                   ·                ¸                 ·          ¸
                                               1 2        1
        Es [Mt ]    =         exp αx + αWs − α t p                exp              dx
                         −∞                    2        2π(t − s)       2(t − s)
                                    ·            ¸
                           1                1
                    =   √       exp αWs − α2 t
                          t−s               2
                                Z ∞
                                              x2
                                        ·               ¸
                            1
                        ×√           exp −          + αx dx.                       (C.119)
                            2π −∞          2(t − s)

   We then want to use the result, which is not difficult to prove, that
                    Z ∞       ·         ¸           · 2   ¸
              1             1 2                1     b
             √         exp − ax + bx + c dx = √ exp     +c .                               (C.120)
               2π   −∞      2                   a    2a

   In our case we have
                                    1
                              a=       ,       b = α,            and             c = 0,    (C.121)
                                   t−s

                                               171
     and hence
                                                    √
                                      ·           ¸            ·             ¸
                               1             1                   1
             Es [Mt ]   =   √      exp αWs − α2 t     t − s exp − α2 (t − s)
                              t−s            2                   2
                                 ·         ¸
                                        1
                        =   exp αWs − α2 s
                                        2
                        =   Ms ,                                               (C.122)

     so Mt is a martingale.
                                                     1   2
  6. We want to show that Nt = cos(βWt )e 2 β t is a martingale, that is, Es [Nt ] = Ns .
     Begin by rewriting Nt as the real part of a complex function,
                                                             1   2
                                  Nt       = cos(βWt )e 2 β t
                                                  ·               ¸
                                                              1 2
                                           = < exp iβWt + β t .                  (C.123)
                                                              2

     If we then set β = −iα, we obtain
                                                       ·          ¸
                                                            1
                                   Nt      =     < exp αWt − α2 t
                                                            2
                                           =     <Mt ,                           (C.124)

     where we have substituted in the martingale process Mt considered in the previous
     question. Taking expectations then yields

                                Es [Nt ]       = Es [<Mt ]
                                               = <Es [Mt ]
                                               = <Ms
                                                      ·             ¸
                                                               1 2
                                               = < exp αWs − α s
                                                               2
                                                      ·              ¸
                                                                1 2
                                               = < exp iβWs + β s
                                                                2
                                                              ·     ¸
                                                                1 2
                                               = cos(βWs ) exp β s .             (C.125)
                                                                2

     Thus we see that the process Nt is indeed a martingale.

Section 12
  1. We want to show that the Wiener model for an asset price process, with dynamics
     given by equation (11.1)
                                                 ·µ       ¶       ¸
                                                      1
                                St = S0 exp        µ − σ 2 t + σWt ,             (C.126)
                                                      2

                                                 172
   satisfies the stochastic differential equation (13.1),
                                     dSt
                                         = µdt + σdWt .                         (C.127)
                                      St
   To do this we define the stochastic process
                                     µ         ¶
                                           1 2
                               Xt = µ − σ t + σWt ,                             (C.128)
                                           2
   which clearly satisfies the differential equation
                                       µ          ¶
                                              1 2
                               dXt = µ − σ dt + σdWt .                          (C.129)
                                              2
   Moreover, if we square dXt then we obtain

                                        dXt2 = σ 2 dt,                          (C.130)

   where we have applied the Ito calculus rules dt2 = 0, dtdWt = 0 and dWt2 = dt.
   We can then consider the asset price process St as a function of a process for which
   we know the differential equation, namely Xt . Using Ito’s lemma on the function
   St (Xt ) = S0 eXt we obtain

                     d(St )   =   S0 d(eXt )
                                     · Xt
                                                    1 ∂ 2 eX t
                                                                    ¸
                                       ∂e                         2
                              =   S0         dXt +             dX t
                                       ∂Xt          2 ∂Xt2
                                         ·               ¸
                                                 1
                              =   S0 eXt dXt + dXt2
                                                 2
                                     ·µ          ¶                     ¸
                                             1                       1
                              =   St µ − σ 2 dt + σdWt + σ 2 dt
                                             2                       2
                              =   St [µdt + σdWt ] .                            (C.131)
   Thus the Wiener model asset price process St satisfies the desired differential equa-
   tion.
2. In this exercise, we want to calculate the stochastic differential equations for a
   number of stochastic processes Xt . We can do this by considering them as a function
   of both a Wiener process and time, that is Xt = Xt (Wt , t). Ito’s lemma then tells
   us that the stochastic differential equation is

                                  ∂Xt      ∂Xt       1 ∂ 2 Xt
                          dXt =       dt +     dWt +          dt,               (C.132)
                                   ∂t      ∂Wt       2 ∂Wt2

   where we have set dWt2 = dt in the final term. Thus,

    (a) for the process Xt = Wt2 − t,
                                  dXt    =   −dt + 2Wt dWt + dt
                                         =   2Wt dWt ;                          (C.133)


                                         173
      (b) for the process Xt = Wt3 − 3tWt ,
                                                                    1
                             dWt      =   −3Wt dt + (3Wt2 − 3t)dWt + 6Wt dt
                                                                    2
                                      =   3(Wt2 − t)dWt ;                                    (C.134)

       (c) and for the process Xt = Wt4 − 6tWt2 + 3t2 ,

                             dXt     =    (−6Wt2 + 6t)dt + (4Wt3 − 12tWt )dWt
                                            1
                                          + (12Wt2 − 12t)dt
                                            2
                                     =    4(Wt3 − 3tWt )dWt .                                (C.135)

  3. We want to calculate the product rule d(Xt Yt ) for stochastic processes Xt and Yt .
     Expanding the differential as a Taylor series in dXt and dYt , and remembering to
     keep all terms up to the second order, we have

                                    ∂(Xt Yt )         ∂(Xt Yt )        1 ∂ 2 (Xt Yt )
                 d(Xt Yt )   =                dXt +             dYt +                 dXt2
                                       ∂Xt              ∂Yt            2 ∂Xt2
                                      1 ∂ 2 (Xt Yt ) 2 ∂ 2 (Xt Yt )
                                    +               dYt +             dXt dYt
                                      2 ∂Yt2               ∂Xt ∂Yt
                             =      Yt dXt + Xt dYt + dXt dYt .                              (C.136)

  4. We can calculate the division rule for stochastic differentials d(Xt /Yt ) in a manner
     identical to that used for the product rule in the previous question,

                                   ∂(Xt /Yt )         ∂(Xt /Yt )         1 ∂ 2 (Xt /Yt )
              d(Xt /Yt )     =                 dXt +             dYt +                   dXt2
                                      ∂Xt               ∂Yt              2      ∂Xt2
                                     1 ∂ 2 (Xt /Yt ) 2 ∂ 2 (Xt /Yt )
                                   +                dYt +              dXt dYt
                                     2      ∂Yt2            ∂Xt ∂Yt
                                   1           Xt       Xt           1
                             =        dXt − 2 dYt + 3 dYt2 − 2 dXt dYt
                                   Yt         Yt        Yt          Yt
                                                        dYt2
                                       ·                                   ¸
                                   Xt dXt         dYt            dXt dYt
                             =                 −      + 2 −                  .                (C.137)
                                   Y t Xt          Yt    Yt       Xt Y t

Section 13
  1. Starting with nothing, if we take the position Vt = Ct − φt St − ψt Bt then since it
     has no net value, we can solve for the bond position ψt
                                                   Ct     St
                                            ψt =      − φt .                                 (C.138)
                                                   Bt     Bt
     At time t + dt the value of the portfolio has changed to

                                      dVt = dCt − φt dSt − ψt dBt ,                          (C.139)


                                                174
     where we have kept the stock and bond holdings fixed. Substituting in for the
     stochastic differentials from equations (13.1), (13.2) and (13.4) we obtain

                                   ∂Ct      ∂Ct         1 ∂ 2 Ct 2
                       dVt     =       dt +     dSt +           dSt − φt dSt
                                    ∂t      ∂St         2 ∂St2
                                     µ            ¶
                                       Ct      St
                                   −      − φt      rt Bt dt.                        (C.140)
                                       Bt      Bt

     Since dSt2 = σt2 St2 dt, the only differential that contains a random component is
     dSt . Hence we can obtain a guaranteed return on our portfolio if we set the stock
     holding φt to be
                                                  ∂Ct
                                            φt =      .                         (C.141)
                                                  ∂St
     The fixed return is then
                                   1 2 2 ∂ 2 Ct
                            µ                                          ¶
                              ∂Ct                                  ∂Ct
                     dVt =        + σt st       − r t C t + r t St       dt.         (C.142)
                               ∂t  2      ∂St2                     ∂St

     By the no arbitrage condition this must be zero, and hence we recover the Black-
     Scholes equation

                             ∂Ct  1        ∂ 2 Ct                    ∂Ct
                                 + σt2 s2t        − r t C t + r t St     = 0.        (C.143)
                              ∂t  2        ∂St2                      ∂St

  2. We want to value a call option for T − t = 0.5, K = 115, St = 100 σ = .2 and
     r = 0.05. We find that

                                             h+     = −0.741
                                             h−     = −0.882
                                         N (h+ )    = 0.229
                                         N (h− )    = 0.188                          (C.144)

     and hence the call option price is $1.76.

Section 14
  1. We want to verify that the trading strategy (φt , ψt ) is self-financing.

       (a) We begin by calculating the stochastic differential of the ratio of the derivative
           to the bond price,
                              µ ¶
                               Ct          dCt     Ct dBt    dCt dBt
                            d         =         −          −
                               Bt          Bt        Bt2        B2
                                              µ              ¶ t
                                           Ct dCt        dBt
                                      =               −
                                           B t Ct         Bt
                                           Ct C
                                                µt dt + σtC dWt − rt dt .
                                              ¡                         ¢
                                      =                                              (C.145)
                                           Bt

                                              175
    We then move on to the ratio of the asset to bond price,
                                    µ        ¶                 µ                           ¶
                                        St                       dSt    St dBt   dCt dBt
                           φt d                      =     φt         −     2  −
                                        Bt                        Bt     Bt        Bt2
                                                             C
                                                                      µ            ¶
                                                           σt Ct St dSt        dBt
                                                     =                       −
                                                            σ t St B t St       Bt
                                                           σtC Ct
                                                     =            (µt dt + σt dWt − rt dt) .         (C.146)
                                                           σt Bt

    Taking the difference between the two yields
          µ        ¶            µ        ¶
              Ct                    St                   Ct £ C
      d                − φt d                    =           µ dt + σtC dWt − rt dt
              Bt                    Bt                   Bt t
                                                            σtC
                                                                                         ¸
                                                         −      (µt dt + σt dWt − rt dt)
                                                            σt
                                                         Ct σtC µC
                                                                ·                                          ¸
                                                                   t − rt                µt − r t
                                                 =                        dt + dWt −              dt − dWt
                                                           Bt        σtC                    σt
                                                         Ct σtC µC
                                                                ·                           ¸
                                                                   t − rt       µt − r t
                                                 =                     C
                                                                          dt −           dt
                                                           Bt        σt           σt
                                                 =       0.                                            (C.147)

(b) The equation Ct = φt St + ψt Bt can be taken as the definition of ψt . Hence
    calculating the differential,
                                                      µ            ¶
                                                        Ct      St
                           Bt dψt        =       Bt d      − φt
                                                        Bt      Bt
                                                    · µ ¶            µ ¶
                                                         Ct           St       St
                                         =       Bt d         − φt d     − dφt
                                                         Bt           Bt       Bt
                                                         µ ¶¸
                                                           St
                                                 −dφt d                                              (C.148)
                                                           Bt

    Using the differential rule for ratios of stochastic processes that we calculated
    in exercise 12.4, we obtain

                                                                     St dBt       dSt dBt
                   Bt dψt = −dφt St − dφt dSt + dφt                         + dφt                    (C.149)
                                                                      Bt            Bt

    We then notice that since dBt is deterministic, that is, it has only dt terms
    and not dWt terms, the product of dBt with any other stochastic differential
    is always zero. Hence we obtain

                                             Bt dψt = −dφt St − dφt dSt .                            (C.150)




                                                         176
      (c) Finally, if we take the differential of Ct we obtain

                dCt = φt dSt + dφt St + dφt dSt + dψt Bt + ψt dBt + dψt dBt .         (C.151)

           We then want to set dψt dBt = 0 and substitute for Bt dψt from above,

                   dCt    =      φt dSt + dφt St + dφt dSt − dφt St − dφt dSt + ψt dBt
                          =      φt dSt + ψt dBt .                                     (C.152)

           Thus, we see that the trading strategy (φt , ψt ) is, in fact, self-financing.

Section 15
  1. We want to calculate the expectation of a stochastic integral
                                                 Z t
                                          I=            g(Ws )dWs ,                   (C.153)
                                                    0

     where g(Ws ) is an arbitrary well-behaved function. Recall from equation (12.3)
     that the definition of the stochastic integral is
                                              N
                                              X
                                 I = lim            g(Wti )(Wti+1 − Wti ),            (C.154)
                                       N →∞
                                              i=0

     where the ti are some partition of the interval [0, 1]. Taking expectations of this we
     have
                                        XN
                         E[I] = lim        E[g(Wti )(Wti+1 − Wti )].               (C.155)
                                       N →∞
                                              i=0

     But by the independent increments property of Brownian motion, we know that
     (Wti+1 − Wti ) and Wti are independent random variables and hence we can factor
     their product in an expectation, that is,
                                          N
                                          X
                         E[I] = lim              E[g(Wti )]E[(Wti+1 − Wti )].         (C.156)
                                   N →∞
                                           i=0

     But the expected value of the difference of a Brownian motion at two different times
     is zero E[(Wti+1 − Wti )] = 0 and hence every term in the sum vanishes. Thus

                                                 E[I] = 0,                            (C.157)

     which is what we set out to prove.
  2. We want to verify that the function

                      A(x, τ )     = E[f (x + σWτ )]
                                            Z ∞               · 2¸
                                       1                         ξ
                                   = √          f (x + σξ) exp −    dξ                (C.158)
                                       2πτ −∞                    2τ

                                                 177
   is a solution of the heat equation

                                        ∂A  1 ∂2A
                                           = σ2 2 .                                (C.159)
                                        ∂τ  2 ∂x
   In order to simplify the calculation, we define a new integration variable η = x+σξ.
   This has the effect of moving the x and τ dependence from f into the exponential,
                                     Z ∞
                                                       (η − x)2
                                                   ·            ¸
                                1
                         A= √             f (η) exp −             dη.            (C.160)
                                2πτ −∞                   2σ 2 τ

   We now need to calculate the derivatives,
                                     Z ∞
                                                         (η − x)2
                                                      ·             ¸
              ∂A               1
                    = − √                  f (η) exp −                 dη
              ∂τ           2 2πτ 3/2 −∞                    2σ 2 τ
                                 Z ∞
                                            (η − x)2           (η − x)2
                                                           ·              ¸
                             1
                        +√            f (η)            exp   −              dη     (C.161)
                             2πτ −∞          2σ 2 τ 2             2σ 2 τ

   and                                Z ∞
                                                                 (η − x)2
                                                             ·            ¸
                     ∂A    1                        η−x
                        =√                  f (η)        exp   −            dη     (C.162)
                     ∂x    2πτ        −∞            σ2 τ           2σ 2 τ
   which yields
                                  Z ∞
                  ∂2A                                 (η − x)2
                                                    ·           ¸
                               1           −1
                         =   √        f (η) 2 exp −                dη
                  ∂x2          2πτ −∞      σ τ          2σ 2 τ
                                  Z ∞
                                           (η − x)2        (η − x)2
                                                       ·              ¸
                               1
                    +        √        f (η) 4 2 exp −                   dη         (C.163)
                               2πτ −∞        σ τ              2σ 2 τ

   from which the result follows.
3. We want to price a forward contract with strike K and maturity T . The payoff
   function F (ST ) = ST − K is simply the difference between the share price ST at
   maturity and the strike price. Writing the derivative price in terms of an expectation
   we obtain

                             F0   =    e−rT E ∗ [F (ST )]
                                  =    e−rT E ∗ [ST − K]
                                  =    e−rT E ∗ [ST ] − e−rT E ∗ [K].              (C.164)

   But in equation (15.43) we calculated the price of a derivative that simply pays off
   the share value at maturity, and found that it was just the initial share price S 0 .
   This result allows us to evaluate the first term in equation (C.164). To evaluate
   the second term, we note that the expectation of a constant is simply its value. We
   then have
                                   F0 = S0 − e−rT K,                           (C.165)
   which is the no arbitrage price for the derivative. The value of the strike K which
   zeros the initial cost of the derivative is S0 erT . This is called the forward price for
   the asset.


                                            178
Section 16
  1. In this question we want to calculate and plot the partial derivatives of the call
     option price with respect to various parameters. These quantities are useful when
     trying to create portfolios which are hedged against movements or estimation errors
     in the parameters. Recall the that price of a call option is

                                C0 = S0 N (h+ ) − Ke−rT N (h− ).                (C.166)

     If we differentiate this value with respect to an arbitrary parameter x we obtain

                         ∂C0        ∂                ∂
                                 =    [S0 N (h+ )] −    [Ke−rT N (h− )]
                          ∂x       ∂x                ∂x
                                   ∂S0             ∂(Ke−rT )
                                 =     N (h+ ) −             N (h− )
                                   ∂x                 ∂x
                                       ∂N (h+ )           ∂N (h− )
                                   +S0            − Ke−rT            .          (C.167)
                                          ∂x                  ∂x
     We can simplify the last two derivatives. Begin by using the chain rule for differ-
     entiation,
                               ∂N (h± )     1 ∂h± −(h± )2 /2
                                        =√         e         .                 (C.168)
                                 ∂x         2π ∂x
     If we substitute in the values of h± , we see that
                                                               ¶∓1/2
                                                      S0 erT
                                                  µ
                                     ± 2
                                e−(h ) /2 = e−X                        ,        (C.169)
                                                        K

     where
                                       (log S̃/K)2 + 14 σ 4 T 2
                                     X=                         .               (C.170)
                                               2σ 2 T
     Substituting this back into equation (C.167) we see that

                  ∂C0          ∂S0           ∂Ke−rT
                         =         N (h+ ) −         N (h− )
                   ∂x          ∂x               ∂x
                                       + 2   ∂h+               − 2   ∂h−
                               +S0 e−(h ) /2     − Ke−rT e−(h ) /2
                                              ∂x                      ∂x
                                                 −rT
                               ∂S0           ∂Ke
                         =         N (h+ ) −         N (h− )
                               ∂x               ∂x
                                            ¶1/2                     ¶1/2 −
                                                 ∂h+
                                     µ                       µ
                                       S0 K                    S0 K      ∂h
                               +e−X      rT
                                                     −  e −X
                                                                  rT
                                       e          ∂x            e         ∂x
                               ∂S0            ∂Ke−rT
                         =         N (h+ ) −           N (h− )
                               ∂x                ∂x
                                                  ¶1/2
                                                       ∂(h+ − h− )
                                           µ
                                  1          S0 K
                               + √ e−X         rT
                                                                                (C.171)
                                   2π        e              ∂x


                                           179
               √
But h+ − h− = σ T and so we end up with the relatively simple formula

                      ∂C0           ∂S0            ∂Ke−rT
                                =       N (h+ ) −           N (h− )
                       ∂x           ∂x                ∂x
                                                µ      ¶1/2     √
                                       1          S0 K      ∂(σ T )
                                    + √ e−X                         .           (C.172)
                                        2π        erT          ∂x

 (a) The first quantity that we want to calculate is the change in the option price
     with respect to a change in the value fo the underlying asset price. We see
     that only the first term in equation (C.172) contributes and

                                                  ∂C0
                                          ∆     =
                                                  ∂S0
                                                = N (h+ ).                      (C.173)

 (b) If we now take a second derivative of this,

                                      ∂ 2 C0
                            Γ   =
                                      ∂S02
                                      ∂N (h+ )
                                =
                                         ∂S0
                                                                      ¶−1/2
                                                             S0 erT
                                                         µ
                                       1     1
                                =     √     √     e−X                           (C.174)
                                        2π σ T S0              K

 (c) If we calculate the effect of varying the volatility, only the final term in (C.172)
     contributes,
                                          ∂C0
                                V   =
                                          ∂σ
                                                       ¶1/2
                                                            √
                                                µ
                                           1      S0 K
                                    =     √ e−X     rT
                                                              T.                (C.175)
                                           2π     e

 (d) Calculating the change in the derivative value as we change the time to expiry,
     we get contributions from the last two terms in (C.172),

                              ∂C0
                  θ   =     −
                              ∂T
                                    µ      ¶1/2
                               1      S0 K       σ
                      =     − √ e−X              √ − rKe−rT N (h− )             (C.176)
                               2π     erT       2 T

 (e) Finally, if we vary the interest rate we obtain

                                                ∂C0
                                      ρ   =
                                                 ∂r
                                          =     kT e−rT N (h− ).                (C.177)


                                          180
Section 17
  1. We want to calculate the initial value of a binary put option with a payoff function
     BPT (ST ) = H(K − ST ) at time T . Using the derivative pricing equation (15.38),
     we see that
            BP0    = e−rT E ∗ [BPT (ST )]
                            Z ∞
                      e−rT                      2
                   = √           H(K − ST )e−ξ /2T dξ
                       2πT −∞
                            Z ∞
                      e−rT                            1                2
                   = √           H (K − S0 exp[ (r − σ 2 )T + σξ ]) e−ξ /2T dξ
                       2πT −∞                         2
                     e−rT ∞
                           Z
                                                    1         √
                   = √          H (K − S0 exp[ (r − σ 2 )T + σ T η ])
                       2π −∞                        2
                             2
                        ×e−η /2 dη,                                                (C.178)
                                                   √
     where we have made the substitution η = ξ/ T in the final integral. The Heaviside
     function is non-zero only when
                                                 √
                                   ·                  ¸
                                        1 2
                             S0 exp (r − σ )T + σ T η < K.                    (C.179)
                                        2
     Taking logarithms and isolating η yields
                      1          √
                 (r − σ 2 )T + σ T η < − log(S/K)
                      2
                                                               1        √
                                       η   <   −log(S/K) + (r − σ 2 )T σ T
                                                               2
                                       η   <   −h− .                               (C.180)
     Thus the integral simplifies to
                                                     −
                                           e−rT −h −η2 /2
                                                 Z
                                 BP0   =   √           e  dη
                                             2π −∞
                                       =   e−rT N (−h− ).                          (C.181)

     We could have calculated this result by using the binary call option price, calculated
     in equation (C.250)
                                     BC0 = e−rT N (h− ),                            (C.182)
     and the put-call result of equation (17.16)
                                       BC0 + BP0 = e−rT .                          (C.183)
     These two equations immediately tell us that
                                   BP0 = e−rT [1 − N (h− )].                       (C.184)
     If we then use the relation N (x) + N (−x) = 1, we recover the formula calculated
     above,
                                    BP0 = e−rT N (−h− ).                       (C.185)


                                           181
2. Using positions in the underlying and call options, we want to construct a Gamma
   neutral portfolio which is short one binary call. If we hold φ shares and ψ call
   options, then the value of the portfolio is
                                V0 = −BC0 + φS0 + ψC0 .                      (C.186)
   Differentiating with respect to the share price, we find that
                                  ∆ = −∆bc + φ + ψ∆c                         (C.187)
   where ∆bc and ∆c are the Deltas of the binary call and call options respectively.
   Differentiating again, we find the Gamma of the portfolio,
                                    Γ = −Γbc + ψΓc .                         (C.188)
   Making the portfolio Gamma neutral, we can solve for the value of ψ,
                                               Γbc
                                        ψ=         .                         (C.189)
                                               Γc
   We can then make the portfolio Delta neutral, and hence obtain the value of φ,
                                                 Γbc
                                    φ = ∆bc −        ∆c .                    (C.190)
                                                 Γc

   In a previous exercise we determined the values of Delta and Gamma for the call
   option                                                     r
                              +                   1       e−X     K
                    ∆c = N (h ) and Γc = √               √           rT
                                                                        , (C.191)
                                                σ T S0 2π       S 0e

   where
                                   (log S̃/K)2 + 14 σ 4 T 2
                                X=                          .             (C.192)
                                           2σ 2 T
   Substituting in the numbers K = 120, S0 = 100, r = 0.05, σ = .2 and T = 1.0 for
   the call option, we find that
                        ∆c = 0.287192     and       Γc = 0.0170369.          (C.193)

   To calculate the Delta and Gamma for the binary call, we recall that the price is

                                   BC0 = e−rT N (h− ).                       (C.194)
   Differentiating twice with respect to S0 we find that
                 e−rt 1    1                                   ∆b
           ∆bc = √     √ p                    and      Γbc = − √     h+ .    (C.195)
                   2π σ T KS0 erT                             σ T S0
   Substituting in K = 110, S0 = 100, r = 0.05, σ = .2 and T = 1.0 we find that
                     ∆bc = 0.0179891      and       Γbc = 0.000113827,       (C.196)
   which allows us to determine the share and call options holdings,
                        φ = 0.0160703     and       ψ = 0.00668119.          (C.197)


                                        182
3. We can Gamma hedge a short position in a call option with strike K1 by using a
   position in both the underlying asset and a call option with strike K2 . Besides the
   underlying asset, we could actually use any derivative based on the asset to Gamma
   hedge the call option, as long as the derivative has a non-zero Gamma itself. So we
   could, for example, hedge a call option with a strike of $100 by using the underlying
   and a call with a strike of $120.
4. In order to derive the put-call relation when St is the price of sterling in dollars,
   we need to calculate the value of a forward contract with strike K. Suppose that a
   dealer agrees at time 0 to pay K dollars for 1 pound sterling at time T , receiving an
   initial payment of F0 dollars for entering into the contract. How can he determine
   the arbitrage free value of F0 ? Well, he can replicate the dollar cash-flow by going
   short Ke−rT dollars in the dollar money market account, where r is the dollar
   interest rate. This will be worth −K dollars at time T . Similarly by taking a
   long position of e−ρT pounds in the sterling money market account, where ρ is
   the sterling interest rate, we produce the 1 pound cash-flow at time T . The dollar
   value of the replicating portfolio is S0 e−ρT − Ke−rT dollars, where S0 is the initial
   exchange rate. By the no arbitrage condition, the value of the forward contract
   must equal the calue of the replicating portfolio, and hence

                                  F0 = S0 e−rT − KeρT .                          (C.198)

   But the payoff of portfolio with a long position in a call and a short position in a
   put, both with strike K and maturity T , has the same payoff as a forward contract
   with the same strike and maturity. Hence the initial prices must also be the same,
   so
                               C0 − P0 = S0 e−rT − KeρT ,                       (C.199)
   which is the put-call relation for foreign exchange options.
5. We can verify the put-call formula explicitly by using the Black-Scholes formula for
   the call and put option prices. Recall that the call option price is given by

                           C0 = e−rT [S0 erT N (h+ ) − KN (h− )].                (C.200)

   But the cumulative normal density function satisfies N (x) = 1 − N (−x). Hence

                   C0 = e−rT [S0 erT (1 − N (−h+ )) − K(1 − N (−h− ))],          (C.201)

   which can be written in the form

             C0 = S0 − e−rT K + e−rT [KN (−h− ) − S0 erT N (−h+ )].              (C.202)

   The last term in this expression is the value of a put option, as given in equation
   (16.35). Thus, we can write

                                 C0 = S0 − e−rT K + P0 .                         (C.203)




                                        183
Section 18
1. To calculate the put-call relation for the constant dividend yield model we simply
   equate the value of a portfolio which is long a call and short a put with the value
   of a forward contract, where all three derivatives have the same strike K and the
   same maturity T . Hence

                                C0 − P0 = S0 e−δT − Ke−rT .                        (C.204)

2. We want to derive the Black-Scholes equation by using a no arbitrage argument on a
   hedged portfolio. Starting with nothing, if we take the position Vt = Ct −φt St −ψt Bt
   then since it has no net value, we can solve for the bond position ψt

                                             Ct     St
                                      ψt =      − φt .                             (C.205)
                                             Bt     Bt

   At time t + dt the value of the portfolio has changed to

                     dVt = dCt + δtC Ct dt − φt dSt − φt δt St dt − ψt dBt ,       (C.206)

   where we have kept the stock and bond holdings fixed, and included the dividend
   payments that we receive for holding the derivative, minus the dividend payments
   that we must make since we are short the stock. Substituting in for the stochastic
   differentials from equations (13.1), (13.2) and (13.4) we obtain

                            ∂Ct       ∂Ct           1 ∂ 2 Ct 2
                  dVt   =       dt +       dSt +            dSt − φt dSt
                             ∂t       ∂St           2 ∂St2
                                                       µ             ¶
                                                          Ct      St
                            +(δtC Ct − φt δt St )dt −        − φt      rt Bt dt.   (C.207)
                                                          Bt      Bt

   Since dSt2 = σt2 St2 dt, the only differential that contains a random component is
   dSt . Hence we can obtain a guaranteed return on our portfolio if we set the stock
   holding φt to be
                                                ∂Ct
                                          φt =      .                         (C.208)
                                                ∂St
   The fixed return is then

                         1 2 2 ∂ 2 Ct
               µ                                                        ¶
                 ∂Ct                           C                    ∂Ct
         dVt =        − σt st         − (rt − δt )Ct + (rt − δt )St       dt.      (C.209)
                  ∂t     2     ∂St2                                 ∂St

   By the no arbitrage condition this must be zero, and hence we recover the Black-
   Scholes equation

             ∂Ct  1        ∂ 2 Ct                                ∂Ct
                 + σt2 St2      2 − (rt − δtC )Ct + (rt − δt )St     = 0.          (C.210)
              ∂t  2        ∂St                                   ∂St




                                          184
3. We want to verify that the derivative price
                                             C         Z ∞
                                  e−(r−δ )(T −t)                        1   2
                          Ct =        √                       F (ST )e− 2 ξ dξ       (C.211)
                                        2π               −∞

   where
                                                          √
                                     ·                                           ¸
                                         1
                     ST = St exp (r − δ − σ 2 )(T − t) + σ T − tξ                    (C.212)
                                         2
   satisfies the continuous dividend yield Black-Scholes equation

               ∂Ct  1        ∂ 2 Ct             ∂Ct
                   + σ 2 St2        + (r − δ)St     − (r − δ C )Ct = 0.              (C.213)
                ∂t  2        ∂St2               ∂St

   Calculating the derivative with respect to the asset price using the chain rule, we
   have                           C
                    ∂Ct     e−(r−δ )(T −t) ∞ ∂F (ST ) ∂ST − 1 ξ2
                                          Z
                         =      √                           e 2 dξ.            (C.214)
                    ∂St           2π        −∞   ∂ST ∂St
   We see that
                                                 ∂ST   ST
                                                     =    ,                          (C.215)
                                                 ∂St   St
   and hence                             C          Z ∞
                      ∂Ct   e−(r−δ )(T −t)                ∂F (ST ) ST − 1 ξ2
                          =     √                                    e 2 dξ.         (C.216)
                      ∂St         2π                   −∞  ∂ST St
   Calculating the second derivative, we obtain
                                         C          Z ∞
                     ∂ 2 Ct   e−(r−δ )(T −t)              ∂ 2 F (ST ) ST2 − 1 ξ2
                            =     √                                      e 2 dξ.     (C.217)
                     ∂St2           2π                 −∞    ∂ST2 St2

   We then want to convert one differentiation with respect to ST into a derivative
   with respect to ξ,
                              C              Z ∞
               ∂ 2 Ct   e−(r−δ )(T −t)         ∂ 2 F (ST ) ∂ξ ST2 − 1 ξ2
                      =     √                                   2e
                                                                    2    dξ.         (C.218)
               ∂St2           2π             −∞ ∂ξ∂ST ∂ST St

   Inverting the relationship between ST and ξ, we have

                         log ST − log St + (r − δ)(T − t) − 12 σ 2 (T − t)
                    ξ=                        √                                      (C.219)
                                            σ T −t
   and hence
                                          ∂ξ       1
                                             =     √      .                          (C.220)
                                         ∂ST   ST σ T − t
   Thus
                          C          Z ∞
           ∂ 2 Ct   e−(r−δ )(T −t)         ∂ 2 F (ST ) 1     ST2 − 1 ξ2
                2 =     √                              √       2e
                                                                   2    dξ.          (C.221)
           ∂St            2π             −∞ ∂ξ∂ST ST σ T − t St


                                                 185
   We now want to integrate by parts to remove the derivative with respect to ξ. The
   boundary terms at positive and negative infinity will vanish. Hence we are left with
                             C      Z ∞
        ∂ 2 Ct    e−(r−δ )(T −t)
                                                 ·            ¸
                                        ∂F (ST )         ξST       1 2

             2 =−    √                             ST − √       e− 2 ξ dξ.     (C.222)
        ∂St            2πSt2         −∞  ∂S T          σ T −t

   The derivative with respect to time is slightly more complicated,
                                          C         Z ∞
          ∂Ct                  e−(r−δ )(T −t)          ∂F (ST ) ∂ST − 1 ξ2
              = (r − δ C )Ct +     √                                e 2 dξ.    (C.223)
           ∂t                        2π             −∞  ∂ST      ∂t

   We note that                    ·                     ¸
                          ∂ST               1       σξ
                              = −ST (r − δ − σ 2 + √       .                   (C.224)
                           ∂t               2     2 T −t
   Substituting back in, we have

      ∂Ct
             =    (r − δ C )Ct −
       ∂t
                         C         Z ∞
                  e−(r−δ )(T −t)
                                                 ·                  ¸
                                      ∂F (ST )           1 2   σξ        1 2
                      √                        ST r − δ − σ + √       e− 2 ξ(C.225)
                                                                             dξ.
                        2π         −∞  ∂S T              2   2 T −t

   Combining all the terms we see that the equation is satisfied.
4. Recall that the call option payoff is

                                   F (ST ) = max(ST − K, 0).                   (C.226)

   Hence the initial price of the derivative is

                  e−rT ∞                        √
                             µ     ·                       ¸¶    ·     ¸
                                                       1 2         1 2
                       Z
        C0   =    √        F S0 exp (r − δ)T + σ T ξ − σ T    exp − ξ
                    2π −∞                              2           2
                  e−rT ∞                          √
                               µ     ·                       ¸      ¶
                                                         1 2
                       Z
             =    √        max S0 exp (r − δ)T + σ T ξ − σ T − K, 0
                    2π −∞                                2
                       ·     ¸
                         1
                  × exp − ξ 2 dξ.                                     (C.227)
                         2

   In order to evaluate the integral we need to remove the max function. This can
   easily be accomplished because it will be nonzero only when
                                           √
                            ·                          ¸
                                                  1 2
                      S0 exp (r − δ)T + σ T ξ − σ T − K > 0,              (C.228)
                                                  2

   which is equivalent to
                                         √
                            ·                        ¸
                                               1
                         exp (r − δ)T + σ T ξ − σ 2 T > K/S0 .                 (C.229)
                                               2

                                              186
Taking logarithms of both sides we obtain
                                   √     1
                       (r − δ)T + σ T ξ − σ 2 T > log(K/S0 ).                 (C.230)
                                         2
We then want to isolate the integration variable ξ. This will allow us to discover
the integration region where the max function is nonzero. We find that

                                log(K/S0 ) − (r − δ − 21 σ 2 )T
                          ξ>                 √                  .             (C.231)
                                           σ T
If we define the critical value ξ ∗ to be

                                log(K/S0 ) − (r − δ − 12 σ 2 )T
                         ξ∗ =                √                  ,             (C.232)
                                           σ T
then the max function can be written as
                                         √
                 µ        ·                              ¸        ¶
                                                      1
             max S0 exp (r − δ)T + σ T ξ − σ 2 T − K, 0
                                                      2
                      ½                √
                              (r−δ)T +σ T ξ− 12 σ 2 T
                    =    S0 e                         − K ξ > ξ∗              (C.233)
                         0                                 ξ < ξ∗.

Since the integrand vanishes for ξ < ξ ∗ , we only need to integrate ove r the region
where ξ > ξ ∗ and the max function takes on a positive value. Hence the derivative
price becomes

          e−rT ∞
                Z µ                         √
                             ·                            ¸     ¶     ·      ¸
                                                    1 2                  1 2
    C0 = √            S0 exp (r − δ)T + σ T ξ − σ T − K exp − ξ dξ.
            2π ξ∗                                   2                    2
                                                                              (C.234)
This integral involves two terms, and it is easiest to evaluate them separately. If
we define
                e−rT ∞                          √
                                 ·                            ¸    ·      ¸
                                                        1              1
                      Z
       I1 = √             S0 exp (r − δ)T + σ T ξ − σ 2 T exp − ξ 2 dξ
                   2π ξ∗                                2              2
                  −δT Z ∞                    √
                                 ·                          ¸
                e                   1                 1
            = √           S0 exp − ξ 2 + σ T ξ − σ 2 T                        (C.235)
                   2π ξ ∗           2                 2

and                                         Z ∞
                                 e−rT
                                                    ·      ¸
                                                       1 2
                         I2 = −K √                exp − ξ dξ,                 (C.236)
                                   2π        ξ∗        2
then the derivative price is simply the sum of the two integrals, C0 = I1 + I2 . The
second integral is easier, so we shall calculate it first. Before we do this, consider
the following result
                          Z ∞                       Z −x
                      1          − 12 ξ 2       1             1 2
                     √         e          dξ = √           e− 2 u du
                       2π x                      2π −∞
                                             = N (−x),                         (C.237)


                                       187
where we made the substitution u = −ξ in the first line and N (x) is the stan-
dard normal cumulative probability density function, previously defined in equation
(11.4). Using this result, we see that
                                           Z ∗
                                      e−rT −ξ − 1 ξ2
                            I2   = −K √           e 2 dξ
                                        2π −∞
                                 = −Ke−rT N (−ξ ∗ ).                       (C.238)

However, the standard way of writing the Black-Scholes formula is not in terms of
ξ ∗ , but rather in terms of two new constants h+ and h− , defined to be

                                        log(S̃/K) ± 21 σ 2 T
                                 h± =           √            ,             (C.239)
                                               σ T

where S̃ is the forward price S0 e(r−δ)T . If we then rewrite −ξ ∗ as

                                   log(K/S0 ) − ((r − δ)T − 12 σ 2 T )
                    −ξ ∗     =   −                  √
                                                 σ T
                                 log(S0 /K) + (r − δ)T − 12 σ 2 T
                             =                  √
                                              σ T
                                 log(S̃/K) − 21 σ 2 T
                             =           √            ,                    (C.240)
                                        σ T

we see that                                              √
                        −ξ ∗ = h−       and     − ξ∗ +        σT = h+ .    (C.241)
Hence we can write the integral I2 as

                                  I2 = −e−rT KN (h− ).                     (C.242)

We now want to calculate the slightly more complicated integral I1 . We begin by
‘completing the square’ in the exponential,

                           e−δT ∞                     √
                                            ·                     ¸
                                              1              1
                                  Z
               I1   =      √          S0 exp − ξ 2 + σ T ξ − σ 2 T dξ
                             2π ξ∗            2              2
                                −δT Z ∞               √
                                            ·              ¸
                           S0 e               1
                    =       √           exp − (ξ − σ T )2 dξ.              (C.243)
                               2π ξ   ∗       2
                                                                    √
We then want to make a change of integration variable to η = ξ − σ T . In this
                                                       ∗
case dξ = dη, and√ the lower limit of integration ξ = ξ , becomes the new lower
limit η = ξ ∗ − σ T = −h+ . Hence the integral becomes
                                              Z η=∞
                                 S0 e−δT                  1   2
                             I1 = √                    e− 2 η dη.          (C.244)
                                     2π        η=−h+



                                         188
   We can then use the result (C.237) to write the integral in terms of N (x),

                                     I1 = S0 e−δT N (h+ ).                       (C.245)

   If we then sum the values of the integrals I1 and I2 we obtain

                        C0 = e−rT [S0 e(r−δ)T N (h+ ) − KN (h− )].               (C.246)

5. Suppose that we want to calculate the price for a binary call option. Using equation
   (15.38), we see that

             BC0    =   e−rT E ∗ [BCT (ST )]
                               Z ∞
                         e−rT                      2
                    =   √           H(ST − K)e−ξ /2T dξ
                           2πT −∞
                           −rT Z ∞
                         e                             1
                    =   √           H (S0 exp[ (r − δ − σ 2 )T + σξ ]−K)
                           2πT −∞                      2
                             2
                        ×e−ξ /2T dξ
                        e−rT ∞
                             Z
                                                     1          √
                    =   √         H (S0 exp[ (r − δ − σ 2 )T + σ T η ]−K)
                          2π −∞                      2
                             2
                        ×e−η /2 dη,                                              (C.247)
                                        √
   where we made the substitution η = ξ/ T in the final integral. The Heaviside
   function is non-zero only when

                                                √
                                 ·                  ¸
                                       1 2
                          S0 exp (r − δ σ )T + σ T η > K.                        (C.248)
                                       2

   Taking logarithms and isolating η yields

                       1          √
                 (r − δ σ 2 )T + σ T η      >    − log(S/K)
                       2
                                                  log(S/K) + (r − δ 21 σ 2 )T
                                       η    >    −          √
                                                           σ T
                                       η    >    −h− .                           (C.249)

   Thus the integral simplifies to

                                        e−rT ∞ −η2 /2
                                              Z
                             BC0      = √           e  dη
                                          2π −h−
                                      = e−rT N (h− ) .                           (C.250)




                                           189
Section 19
1. Suppose that Xt is a stochastic process with dynamics

                                          dXt = F (Xt , t)dWt .                                 (C.251)

   We can integrate this equation to obtain an expression for Xt ,
                                                   Z t
                                  Xt = X 0 +             F (Xu , u)dWu .                        (C.252)
                                                     0

   To show that Xt is a martingale, we need to demonstrate that Es [Xt ] = Xs where
   Es [−] is the expectation operator, conditioned upon knowing the values of X u for
   0 < u < s < t. If we take the condtional expectation of equation (C.252) then we
   obtain
                                      ·      Z t                ¸
                      Es [Xt ] = Es X0 +          F (Wu , u)dWu
                                               0
                                                 ·Z s               ¸
                               = Es [X0 ] + Es        F (Wu , u)dWu
                                                    0
                                        ·Z t                 ¸
                                   +Es       F (Wu , u)dWu                   (C.253)
                                                    s

   where we have split the integration up into an integral between 0 and s and an
   integral between s and t. By the definition of conditional expectation we know
   the values of Wu between 0 and s, and hence the integral between 0 and s is
   ‘deterministic’ rather than ‘random’. Thus its expectation is simply the expectation
   of a deterministic function, which is simply equal to the value of the function, so
                             Z s                              ·Z t                 ¸
          E[s [Xt ] = X0 +            F (Wu , u)dWu + Es              F (Wu , u)dWu .           (C.254)
                              0                                  s

   Using the definition of a stochastic integral, we then want to write the integral
   between s and t as a sum,
                              Z s                               N
                                                                X
         Es [Xt ]   = X0 +             F (Wu , u)dWu + Es [           F (Wti , ti )(Wti+1 − Wti )]
                                  0                             i=1
                              N
                              X
                    = Xs +             Es [F (Wti , ti )(Wti+1 − Wti )]                         (C.255)
                              i=1

   But, by the independent increments property of Brownian motion, (Wti+1 − Wti ) is
   an N(0, ti+1 − ti ) random variable that is independent of F (Wti , ti ) and hence we
   can factor the expectation,
                                          N
                                          X
                    Es [Xt ] = Xs +             Es [F (Wti , ti )]Es [(Wti+1 − Wti )]           (C.256)
                                          i=1


                                                 190
   Moreover, the independent increments property also implies that (Wti+1 − Wti ) is
   independent of the value of Wu for 0 < u < s, and hence it is not affected by
   the conditioning up to time s. Therefore we can drop the conditioning on the
   expectation and we simply have
                                      N
                                      X
                    Es [Xt ] = Xs +         Es [F (Wti , ti )]E[(Wti+1 − Wti )].   (C.257)
                                      i=1

   But the expectation of (Wti+1 − Wti ) is zero, and so the summation vanishes and
   we are left with
                                    Es [Xt ] = Xs ,                         (C.258)
   which says that Xt is indeed a martingale.
2. We want to calculate the stochastic differential equations that are satisfied by S t /Bt
   and ρt St /Bt . Using the division rule for stochastic processes, we see that
                            µ ¶          ·                        ¸
                             St       St dSt      dBt     dSt dBt
                          d        =            −     −             .             (C.259)
                             Bt       B t St       Bt      St B t

   Recall that
                                      dSt
                                          = µt dt + σt dt                          (C.260)
                                       St
   and
                                            dBt
                                                = rt dt.                           (C.261)
                                             Bt
   Subsituting in these values, we see that dSt dBt = 0 and
                          µ ¶
                            St         St
                        d         =       [(µt dt + σt dWt ) − rt dt]
                           Bt          Bt
                                       St
                                  =       [(µt − rt )dt + σt dWt ] .               (C.262)
                                       Bt
   The second stochastic equation can then be calculated by using the product rule,
               µ       ¶        ·                                 ¸
                 ρt St     ρt St d(St /Bt ) dρt    dρt d(St /Bt )
             d           =                 +    +                   .       (C.263)
                  Bt        Bt    St /Bt     ρt     ρt St /Bt

   We previously showed that
                                        dρt
                                            = −λt dWt ,                            (C.264)
                                         ρt
   where λt = (µt −rt )/σt . Using this expression, and the value of d(St /Bt ) calculated
   above, we see that

                     dρt d(St /Bt )
                                      =      −λt dWt [(µt − rt )dt + σt dWt ]
                      ρt St /Bt
                                      =      −λt σt dt
                                      =      −(µt − rt )dt.                        (C.265)


                                            191
   The differential equation for ρt St /Bt then becomes
              µ       ¶
                ρt St       ρt St
            d           =         [(µt − rt )dt + σt dWt − λt dWt − (µt − rt )dt]
                 Bt           Bt
                                        ρt St
                        = (σt − λt )          dWt .                               (C.266)
                                         Bt

3. The stochastic differential equation for ρt is

                                     dρt = −ρt λt dWt .                           (C.267)

   Integrating this, we obtain
                                               Z t
                                   ρt = ρ0 −         ρs λs dWs                    (C.268)
                                                0

   The initial value of ρt is 1, hence
                                              Z t
                                   ρt = 1 −         ρs λs dWs .                   (C.269)
                                               0


4. If λt is constant, then we can evaluate the integrals in the expression for ρt in order
   to obtain                             ·                ¸
                                                     1 2
                                 ρt = exp −λWt − λ t ,                            (C.270)
                                                     2
   which we can write as
                                   ·                         ¸
                                                  1
                        ρt = ρs exp −λ(Wt − Ws ) − λ2 (t − s) .                   (C.271)
                                                  2

   If we calculate the conditional expectation in the risk-neutral measure of W t , we
   see that
                                  Es [ρt Wt ]
                  Es∗ [Wt ]   =
                                      ρ
                                     ·s µ                         ¶
                                                          1 2
                              =   Es exp −λ(Wt − Ws ) − λ (t − s)
                                                          2
                                  × {(Wt − Ws ) + Ws }] .                         (C.272)

   With respect to the conditioning up to time s, Ws is a constant, and Wt − Ws is an
   independant N(0, t − s) random variable. We can calculate the expectation more
   compactly by defining X = Wt − Ws . Hence
                                   ·       µ                   ¶¸
                                                    1
                   Es∗ [Wt ] = E X exp −λX − λ2 (t − s)
                                                    2
                                        ·    µ                   ¶¸
                                                       1
                                 +Ws E exp −λX − λ2 (t − s) .                (C.273)
                                                       2

                                         192
   We can then calculate the two expectations individually,
            ·       µ                   ¶¸
                              1
          E X exp −λX − λ2 (t − s)
                              2
                            Z ∞
                                                                    x2
                                      µ                    ¶   µ          ¶
                     1                          1
             =p                  x exp −λx − λ2 (t − s) exp −               dx
                   2π(t − s) −∞                 2                2(t − s)
                            Z ∞
                                          [x + λ(t − s)]2
                                      µ                   ¶
                     1
             =p                  x exp −                    dx             (C.274)
                   2π(t − s) −∞               2(t − s)

   But this is simply the expectation of an N(−λ(t−s), (t−s)) random variable, which
   is −λ(t − s). Following the same steps, we see that the second integral is W s times
   the integral over the probability density function, which is 1. Thus

                                Es∗ [Wt ] = −λ(t − s) + Ws .                      (C.275)

   The expectation of Wt2 can be calculated in an identical manner.

5. We want to show that ΠC    t = ρt Ct /Bt is a martingale under the measure E. We
   can do this by calculating the stochastic differential and show that it does not have
   a drift term. Using both the product and division rules for stochastic differentials,
   we see that       µ       ¶        ·                              ¸
                       ρt Ct     ρt Ct dρt     dCt     dρt dCt   dBt
                   d           =             +      +          −       .         (C.276)
                        Bt        Bt     ρt     Ct      ρt Ct     Bt
   The differential equation for Ct is
                                  dCt
                                      = µC       C
                                         t dt + σt dWt ,                          (C.277)
                                   Ct
   and if we substitute this expression, and the stochastic differentials of ρ t and Bt
   given above, into equation (C.276), then we obtain
          µ       ¶
            ρt Ct     ρt Ct £
                              −λt dWt + (µC       C             C
                                                                            ¤
        d           =                     t dt + σt dWt ) − λt σt dt − rt dt .   (C.278)
             Bt        Bt

   But from the no arbitrage condition we can write λt as

                                                µC
                                                 t − rt
                                         λt =           ,                         (C.279)
                                                  σtC

   and hence
          µ       ¶
            ρt Ct         ρt Ct £
                                  −λdWt + (µC          C           C
                                                                                      ¤
        d             =                        t dt + σt dWt ) − (µt − rt )dt − rt dt
             Bt            Bt
                                      ρt Ct
                      =   (σtC − λt )       dWt .                                   (C.280)
                                       Bt

   Thus ΠC
         t is a martingale.




                                          193
D      Some Reminders of Probability Theory
(by R.F. Streater)

D.1     Events, random variables and distributions
An event A is a subset of a space (the sample space Ω); more exactly, A is a
measurable subset. We are given the probability p(A) for all events A ⊆ Ω;
it is nonnegative, and p(Ω) = 1. We say that two events, A ⊆ Ω and B ⊆ Ω,
are independent if
                           p(A ∩ B) = p(A)p(B).                       (D.1)
A random variable is a function f : Ω → R; more exactly, it is a measurable
function. We shall sometimes write r.v. for random variable. If f takes
discrete values {x1 .x2 , . . .} then we can define the distribution function of f ,
according to

                  pf (j) = Prob{f = xj } = p{ω : f (ω) = xj }.                (D.2)

If f takes continuous values, then the probability that f takes a particular
real value might be zero; in that case we can define the cumulative distribution
function
              Pf (x) = Prob{f ≤ x} = p{ω : −∞ < f (ω) ≤ x}.                (D.3)
We say that a random variable f “has a probability density” if its cumulative
distribution is differentiable; we then define its density to be

                                            dPf (x)
                                pf (x) :=           ;                         (D.4)
                                              dx
and to first order in dx,

                       pf (x)dx = Prob{x ≤ f ≤ x + dx}                        (D.5)

and                                             Z b
                        Prob{a ≤ f ≤ b} =             pf (x) dx               (D.6)
                                                 a
The cumulative distribution of the standard normal distribution is denoted
Erf(x), or N (x) in this course.



                                        194
D.2     Expectation, moments and generating functions
The expectation of the random variable f , defined abstractly by
                                            Z
                              E[f ] :=              f (ω)p(dω)                   (D.7)

in terms of the measure p, reduces when the space Ω is discrete, to
                                           X
                                 E[f ] =            f (ω)p(ω).                   (D.8)
                                            ω

Exercise D.1 Show that when Ω is discrete, the mean can be found in terms
of the probability distribution pf of f and the values xj of f according to
                                            X
                                  E[f ] =            xj pf (j).                  (D.9)
                                                j

In the continuous case, it can be shown that
                                        Z ∞
                             E[f ] =                xpf (x) dx.                 (D.10)
                                           −∞

The n-th moment, mn (f ) of the r.v. f , is defined to be

                                   mn (f ) := E[f n ]                           (D.11)

which in the discrete case gives

                                  (f (ωj ))n p(ω) =               xnj pf (j);
                            X                               X
                     mn =                                                       (D.12)
                             ω                               j

in the continuous case we get
                                                Z ∞
                        mn = E[f n ] =                   xn pf (x) dx.          (D.13)
                                                    −∞

It is clear that m1 (f ) is the expectation of f ; it is not hard to show

Exercise D.2 The variance of f , defined by

                             V [f ] := E[(f − m1 )2 ],                          (D.14)

is given by V [f ] = m2 − m21 .

                                            195
The moment generating function is defined as
                           ∞
                             θn
                                                 E[f n ]θn /n! = E[eθf ].
                           X               X
                M (θ) :=            mn =                                    (D.15)
                           n=0 n!           n

This definition is only possible when the series converges, say for |θ| small.
In that case, by Taylor’s theorem, M determines the moments:
                                           dn M
                                    mn =            .                       (D.16)
                                            dθn θ=0

It can be shown that M also determines the probability distribution of f ;
indeed, mn is determined by pf (x), according to eqs. (D.12,D.13); in the
latter case, M is the Laplace transform of pf :
                                      Z ∞
                            M (θ) =          eθx pf (x) dx;                 (D.17)
                                       −∞

(if the integral converges); it follows that pf (x) is the inverse Laplace trans-
form of M .
Exercise D.3 Let f be N (m, V ); that is,

                                   1            (x − m)2
                     pf (x) =             exp{−          };                 (D.18)
                                (2πV )1/2          2V

Show that m is the expectation (the first moment) and that V is the variance
of f .

Exercise D.4 Find the n-th moments of a standard normal r.v., with dis-
tribution N (0, 1).

D.3     Several random variables
In terms of the sample space, Ω, two random variables f , and g, are just two
functions on Ω. Given a probability on Ω, each will have its own distribution,
pf and pg . In order to discuss the correlation between these, we should
consider the joint distribution. In the case of r.v. with discrete values,
{xj }, {yk }, say, the joint distribution of f and g is defined as

               pf,g (j, k) = Prob{ω : f (ω) = xj and g(ω) = yk }.           (D.19)

                                           196
We say that two r.v., f and g, are independent if the pairs of events, A and
B, of the form

                        A = {ω ∈ Ω : a < f (ω) ≤ b}                      (D.20)
                        B = {ω ∈ Ω : c < g(ω) ≤ d}                       (D.21)

are independent for all real numbers a, b, c, d; see eq. (D.1).

Exercise D.5 Show that if both f and g take discrete values, then they are
independent if and only if

                      pf,g (j, k) = pf (j)pg (k), for all j, k.          (D.22)

If both f and g take continuous values, we can define the joint cumulative
distribution function Pf,g to be

         Pf,g (x, y) := Prob{ω ∈ Ω : f (ω) ≤ x and g(ω) ≤ y}.            (D.23)

If Pf,g is differentiable with respect to x and y, we say that f and g have a
joint density function, which is defined to be

                                                ∂ 2 Pf,g
                               pf,g (x, y) :=            .               (D.24)
                                                ∂x∂y
Then the probability that f lies between x and x + dx, and simultaneously
g lies between y and y + dy, is, to second order

Prob{ω ∈ Ω : x ≤ f (ω) ≤ x + dx and y ≤ g(ω) ≤ y + dy} = pf,g (x, y)dx dy.
                                                                    (D.25)
Again, f and g are independent if and only if

                   pf,g (x, y) = pf (x)pg (y)            for all x, y.   (D.26)

The correlation between f and g is defined as

                          C(f, g) = E[f g] − E[f ]E[g].                  (D.27)

Exercise D.6 If f and g have discrete values, and are independent, show
that the correlation between them is zero. Show the same, if f and g have a
joint density.


                                        197
It is not in general true that uncorrelated r.v. are independent. However, if
f and g are jointly normal, then they are independent if and only if they are
uncorrelated. We say that the r.v. f and g are jointly normal if they have a
joint density, and it is given by a function of the form

        pf,g (x, y) = const. exp{−αx2 + βxy − γy 2 + ax + by}.                        (D.28)

Here, α > 0, γ > 0, and β must be such that the quadratic expression tends
to zero at infinity in all directions; a and b are any real numbers, and the
constant is such that the total integral over R2 is unity.
   The joint n, r moment of f and g is defined to be

               mn,r = E[f n g r ], n = 0, 1, 2 . . . ; r = 0, 1, 2, . . . .           (D.29)

¿From this we can define the joint moment generating function to be
                                         ∞
                                                 θ1n θ2r /(n!r!)mn,r .
                                         X
                     Mf,g (θ1 , θ2 ) =                                                (D.30)
                                         n,r=0

Exercise D.7 Suppose that f and g are independent, with either discrete
values, or with a joint density. Show that

             Mf,g (θ1 , θ2 ) = Mf (θ1 )Mg (θ2 )             for all      θ 1 , θ2 .   (D.31)

Also, show the converse.

Exercise D.8 Let f and g be independent, with either discrete value or a
joint density. Show that the r.v f + g has generating function Mf +g given by

                            Mf +g (θ) = Mf (θ)Mg (θ).                                 (D.32)

Exercise D.9 Show that the joint moment generating function of the jointly
normal r.v. f and g is the exponential of a quadratic function of θ1 and θ2 ;
conversely, if the joint moment generating function is the exponential of a
quadratic function of θ1 and θ2 , then the r.v. are jointly normal.

Exercise D.10 Let S be the sum f + g of jointly normal r.v f and g; show
that S is normal.



                                          198
We can consider n random variables f1 , . . . , fn , with joint probability density
p1,...n (x1 , . . . , xn ). This means that each fj takes continuous values, and that

       Prob{ω ∈ Ω : a1 ≤ f1 (ω) ≤ b1 and . . . and an ≤ fn (ω) ≤ bn }
                                  Z b1         Z bn
                             =           ...          p1...n (x1 , . . . , xn )dx1 . . . dxn .
                                    a1          an

We say that {fk } are jointly normal if the density has the form
                                                   1     T     T
                 p(x1 , . . . , xn ) = const. exp{− x.A.x + x.c }                                (D.33)
                                                   2
for some positive definite n×n matrix A, and some row vector c = (c1 , . . . , cn ).
                                                      T
Here we have written x as a 1 × n row vector, and x is its transpose, the
column vector.
Exercise D.11 Let fk , k = 1, . . . , n be n jointly normal r.v. Show that the
joint moment generating function

                          M (θ1 , . . . , θn ) := E[eθ1 f1 +...+θn fn ]                          (D.34)

is the exponential of a quadratic expression in {θk }. [Hint: Show first that
by a suitable choice of α1 , . . . , αn we can change the variable of integration
from x1 , . . . xn to y1 = x1 + α1 , . . . , yn = xn + αn , in such a way that the new
density, as a function of {yk }, has the form
                                                                   T
                             p(y) = const. exp{y.A.y }.                                          (D.35)
                      T
Then, write A = SS in terms of suitable matrices S, and change the variable
of integration to z = yS.]

D.4      Conditional probability and expectation
Suppose that Ω is the sample space, and p a given probability on Ω, so that
p(A) is given for every event A ⊆ Ω. Suppose that we are told that the
outcome ω lies in some subset B, but we are told no further information.
Bayes said the probability that ω lies in the set A ⊆ Ω is modified by the
information we have obtained; p(A) should be replaced by the conditional
probability, given B, written p(A|B), where

                             p(A|B) := p(A ∩ B)/p(B).                                            (D.36)

                                                199
The definition requires that p(B) 6= 0. Notice that p(A|B) is itself a proba-
bility on Ω; that is, for A ⊆ Ω, we have

                 p(A|B) ≥ 0                                               (D.37)
                 p(Ω|B) = 1                                               (D.38)
           p(A1 ∪ A2 |B) = p(A1 |B) + p(A2 |B) − p(A1 ∩ A2 |B)            (D.39)

By restricting, p(ω|B) is a probability on B.
    If it happen that A and B are independent, then p(A ∩ B) = p(A)p(B),
and from eq. (D.36) we see that p(A|B) = p(B). Thus in this case no
information about A is contained in the occurrence of the event B, and it
makes no difference to the probability of A whether we know B or not.
    Another case of interest is when A ⊆ B; then A ∩ B = A, and we see:

                             p(A|B) = p(A)/p(B)                           (D.40)

which obviously gives
                             p(A) = p(A|B)p(B).                           (D.41)
This product structure does not express the independence of A and B; indeed,
in this case A implies B, so they cannot be independent.
    We have in mind that Ω consists of the set of price histories from t = 0,
and we are given the price at some later time, say t = 1. This information,
not available at t = 0, increases our information and modifies the probability
we assign to the remaining possibilities. Suppose that we have two time-
steps, as in the figure:
                                                  º·
                                                  00
                                        p̃00 ©* S
                                        ©©
                                      ©           ¾ B
                                    0 HH
                             p ©
                              0
                                * S        H
                             ©©         p̃01 Hj S 01
                         S ©
                           H                    ¹¸                          (D.42)
                             HH         p̃ 10
                                              *
                                              © S 10
                             p1 H
                                j S 1 ©©
                                      ©
                                      H
                                        HH
                                              j 11
                                              H
                                        p̃11    S
The possible paths can be labelled by the symbols {S 00 , S 01 , S 10 , S 11 } as
usual. Remember that there are four possible price histories, even if nu-
merically S 01 = S 10 , as in the binomial model. For this reason, we keep the

                                      200
symbols distinct. Thus, Ω = {00, 01, 10, 11}, and has four elements. Suppose
we learn that at time t = 1 the price went up to S 0 , rather that going down to
S 1 . Then only the paths S 00 and S 01 are possible. Thus, this information on
the price at t = 1 means that the outcome must lie in the set B = {00, 01},
shown, and our new probabilities are

                       p({00}|S 0 ) = p00 ,      say                     (D.43)
                      p({01}|S 0 ) = p01 ,      say.                     (D.44)

The two possible outcomes, {00} and {01} are subsets of B, the given event;
the original probability, p, at t = 0 before we had any info, can then got from
eq. (D.41), and is thus:

                    p(ω = 00) = p(S 0 )p(00|S 0 ) = p0 p00               (D.45)
                    p(ω = 01) = p(S 0 )p(01|S 0 ) = p0 p01 .             (D.46)

In the same way, if we knew that S 1 occurred at t = 1 we introduce the
conditional probabilities

                        p({10}|S 1 ) = p10         say                   (D.47)
                        p({11}|S 1 ) = p11         say;                  (D.48)

then the original probabilities of 10 and 11 are given by eq. (D.41):

                    p(ω = 10) = p(S 1 )p(10|S 1 ) = p1 p10               (D.49)
                    p(ω = 11) = p(S 1 )p(11|S 1 ) = p1 p11 .             (D.50)

These are the formulae we used to find the probability of the prices at time
t = 2.
    Consider now three steps of the time. If we are given that the price-
history went through S 0 at time t = 1, and were also told the step taken at
time t = 2, the later info must be compatible with that earlier. Thus the
position at time t = 2 must be either 00 or 01. Say it is 00. Then the info at
time t = 1 is summarised by saying that ω ∈ B in the figure below, and the
info at time t = 2 further restricts the path to lies in the set C ⊆ B. Then
we see that A ∩ C = A ∩ B ∩ C, and so for any event A,




                                      201
                                                          #Ã
                                                          Â¿
                                                          S 000© ©C
                                                       ©©
                                                        *     ¼
                                                     ©© - 001
                                                              S
                                                ÁÀ
                                               00
                                     * S
                                    ©©
                             ©©                 S 010¾
                             H
                            0 H             © *
                                              ©        B
                        * S
                       ©©        j 01 ©© - 011
                                HH
                                    S           S
                                                "!
                     ©
                 S ©
                   HH                 10      - 100                        (D.51)
                       HH
                        j 1       * S HH
                                  ©             S
                          S ©©©             HHj 101
                             HH                 S
                                H
                                  H
                                  j S 11
                                         H    - S 110
                                           HH
                                              j 111
                                              H               S

      p(A|C) = p(A ∩ B ∩ C)/p(C) = p(A ∩ B ∩ C))/p(B)p(C|B)
             = p(A ∩ C|B)/p(C|B) = p((A|B)|C)               (D.52)

The last expression, p((A|B)|C), is the conditioning of the (conditional)
probability p(•|B), by the info ω ∈ C. We see from it that if B = C,
p((A|B)|B) = p(A|B), so the giving of known info does not alter the proba-
bility. More generally, we see that we get the same result, p(A|C), whether
we feed the info in two steps, conditioning as we go, or just use the full info
in one step.
    The conditional expectation E[f |B] of a r.v. f , given B, is just the ex-
pectation of f using a conditional probability p(ω|B). Thus, in the discrete
case,                   X                 X       X
             E[f |B] =     f (ω)p(ω|B) =     xj          p(ω|B).        (D.53)
                         ω                      j      ω:f (ω)=xj

The expression                             X
                          pf (j|B) :=                p(ω|B)              (D.54)
                                        ω:f (ω)=xj

is called the conditional probability distribution of f , given B. It enables us
to compute all the conditional moments of f .
    In the above example, we determined the set B, on which we condition,
by giving the value of the r.v. S1 , and we got the set C by giving the values
of the two r.v. S1 and S2 . More generally, we can condition a probability p


                                        202
by giving the values of a collection of random variables f1 , . . . , fN . Thus, in
the discrete case,
                                                                     p(ω)
   p(ω|f1 = x1 , f2 = x2 , . . . , fN = xN ) = P                                           (D.55)
                                                         ω:f1 (ω)=x1 ...fN (ω)=xN p(ω)

if ω obeys the condition, and is zero otherwise. As before, we get the same
result whether we use this definition, or condition p in stages, using the info
one bit at a time in any order. In the discrete case this is just limiting the
sum on the r.h.s. of eq. (D.55) a bit at a time.
    In the continuous case, we talk of conditional density functions. If we have
a joint probability density p(x1 , x2 , . . . , xn ) for n random variables f1 , . . . , fn ,
with continuous values, then a condition such as f1 = X1 leads to the condi-
tional density, which is obtained by putting x1 = X1 in the joint density p,
and dividing by a normalising factor:
                                                    p(X1 , x2 , . . . , xn )
     p(x2 , x3 , . . . , xn |f1 = X1 ) = R                                                 (D.56)
                                             p(X1 , x2 , . . . , xn )dx2 dx3 . . . dxn .
Similarly, we can condition on any subcollection of f1 , . . . , fn .
     The conditional expectation E[f |f1 = X1 , f2 = X2 , . . . , fN ], written
E[f |{fi }], is clearly a function of X1 , . . . , XN . These must be possible values
of these r.v.; that is, there must be a point ω ∈ Ω such that fk (ω) = Xk for
k = 1 . . . N . As we vary ω, we get different conditionings. From this point
of view, we can leave the values open, and consider the conditional expec-
tation E[f |f1 , . . . , fN ] as a function of ω. That is, it is a random variable!
As we vary f too, we get different random variables for E[f |f1 , . . . , fN ]. So,
E[•|{fi }] is an operator that takes the random variable f to the random vari-
able E[f |{fi }]. It is clear that the map f 7→ E[f |{fi }] is linear in the variable
f ; it is also true that E[g|{fi }] = g, for all g in the span of {fi } (exercise).
We have seen that the giving of known info does not alter a probability al-
ready conditioned to it. This leads to the nice result that the conditional
expectation relative to a given set of functions is a projection: applied twice
to a random variable it gives the same result as applying it once (exercise).
Moreover, applying it twice, once with a large amount of info, and then with
a smaller amount, is the same as applying it with the smaller amount. This is
because E is the projection onto the algebra generated by the functions listed
in the conditions. In particular, the ordinary expectation can be thought of
as E[f |1], where 1 is the non-random function 1; clearly, E[f ] is the trivial
function of ω. Thus

                                                203
Exercise D.12 Suppose that Ω is discrete, and that f and f1 , . . . , fn are
random variables on Ω. Show that for any probability p, we have

                                   E[E[f |{fi }]] = E[f ].                         (D.57)

D.5      Filtrations and martingales
Most of this section will be new to you.
     The prices of various stocks, S, and of currencies, and gold, and of bonds,
and other assets, become known to us, first at t = 1, then at t = 2, up to
the present time, t = t. It is clear that as t increases, we are in possession
of an increasing amount of info. According to Bayes, we should condition
our probability as we go. We have seen that we do not in general know the
actual probability that the share will go up, or down; but the correct price
of a derivative has been seen to be expressible in terms of the risk-neutral
probabilities, rather than the actual market probabilities. So we shall find it
useful to develop the theory of conditioning for various probabilities on the
sample space, any of which is to be modified by the info we have at any given
time.
     Let us limit our info to the price of a single share, S, and consider the
binomial model up to time T . Then the number of distinct price-histories
is 2T . So Ω has 2T points. Let p be any probability on Ω. Suppose that at
time t, with t < T , we have the price-history of S up to time t. This means
that we can calculate the actual value of any derivative stock option that
depends only on the past values. Such a derivative will be a function F of
S0 , S1 , . . . , St . And for such a function, the conditional expectation relative
to p(ω|S0 , . . . , St ), using all the information, must be the actual value:

                      E[F |S0 , S1 , . . . , St ] = F (S0 , S1 , . . . , St ).     (D.58)

Thus E[•|S0 , . . . , St ] leaves invariant not only the random variables S0 , . . . , St ,
but all functions of these; this is because we have full information about all
such functions. The set of all (measurable) functions of S0 , . . . , St is an al-
gebra; that is, we can add and multiply such functions, and multiply them
by real numbers, to get further functions in the set. These are all functions
of ω, since each r.v. S0 . . . is itself a function of ω. Let us call this set Ft .
Now, a function F1 say, of the variables S0 , . . . , St−1 is also a function of
S0 , . . . , St−1 , St , which happens not to depend on the last variable. So such


                                               204
a function is in Ft . Thus we have that Ft−1 ⊆ Ft , and more generally,

                          if s ≤ t we have Fs ⊆ Ft .                    (D.59)

This increasing family of function algebras, Ft , is called the filtration gen-
erated by the process St . Sometimes it is more convenient to consider the
indicator functions in the family. An indicator function is one that takes
only two values, 0 or 1. The set on which it is equal to 1 is a subset of ω,
that is, an event, and knowing the value of this function (as we do by the
time t) tells us whether this event has happened. Conversely, any function
in Ft can be written as a sum of indicator functions, with real coefficients.
The information in the filtration can be regarded as a family of events whose
occurence (or not) is known by the time t. This family of events is sometimes
also called the filtration, and is denoted by Ft as well. It is likewise an in-
creasing family, as time increases. In either case, the conditional expectation
of a random variable, f given all the information up to time t, is denoted
E[f |Ft ].
Martingales
    Suppose that Ω is a sample space, and p a probability on Ω. Let Ft
be the filtration generated by a process St . Let Xt be a process adapted to
the filtration, that is, at any time t Xt is known if the price-history of St
is known; this is nothing other than the condition that Xt ∈ Ft for any t.
Thus, Xt is some derivative based on the share price of Ss , involving only
s ≤ t. We say that Xt is a martingale if it obeys

                        E[Xt |Fs ] = Xs , for all s ≤ t.                (D.60)

This says in a way that the present value of the derivative Xs is the expected
value at any t in the future, given the known past history up to time s of
the share S on which the derivative is based. As an example of a martingale,
let Y be any random variable. Then put Xt = E[Y |Ft ]. If s ≤ t, the
family Fs is smaller than the family F t , (or the same); then we may use the
principle that double conditioning, as given by eq. (D.57), gives the same as
one conditioning onto the smaller algebra; indeed, eq. (D.57) is true whatever
the initial probability was, so we may use it starting with the conditioned
probability at time s; then we see that Xt is a martingale:

                E[Xt |Fs ] = E[E[Y |Ft ]|Fs ] = E[Y |Fs ] = Xs .        (D.61)

                                      205
The martingale condition is a condition on the probability p as well as on
the process Xt . In our treatment of the pricing problem, in the binomial
model, we saw that St /Bt is a martingale, not relative to the (unknown) true
probability of prices, but relative to the risk-free probability, p ∗ :

                S0 /B0 = E ∗ [S1 /B1 |S0 ] = E ∗ [S2 /B2 |S0 ] = . . .   (D.62)

In the model, all probabilities were conditional on the price S0 being given.
But this is any starting time, so calling the starting time s instead of 0,
shows that we have a martingale. In the same way, the pricing formula for
any derivative at time t, in the binomial model, is a martingale, relative to
the risk-free probabilitiy, p∗ .




                                        206
E          The Virtues and                         certain definite period. The prices given
                                                   for this “option” may, of course, range
           Vices of Options1                       infinitely, according to the supposed value
                                                   of the elements of which it is composed.
A rather marked feature in the Stock
                                                   The right to demand a stock is termed
Exchange recently has been the revival
                                                   the “call,” and the right to deliver it
of “option” dealing. In years gone by,
                                                   the “put.” For instance, one may pay
a considerable amount of business was
                                                   to-day, say, 2 per cent for the “call” a
habitually transacted in “options,” es-
                                                   month hence of 1,000l Russian 1873, which
pecially in Consols, but more recently
                                                   right may or may not be exercised. And
this species of speculation had dwindled
                                                   a “put” would be exactly the converse
down to very restricted dimensions. But
                                                   of this. It is possible to buy the dou-
at no period has it ever been as popular
                                                   ble privilege of both “put” and “call,”
as it is on the continental bourses, and
                                                   but the price asked is usually so heavy
on the stock exchanges across the At-
                                                   as to be practically prohibitive. Now,
lantic. At Paris, and on all the German
                                                   the idea of the speculator who dabbles
bourses, there is a vast amount of specu-
                                                   a little in option is simply to buy the
lation constantly carried on by means of
                                                   “put” or “call,” according to whether
options, not separate from, but ancillary
                                                   he thinks the market will fall or rise;
to direct operations for the rise or fall.
                                                   whereas their real raison d’etre is some-
In New York “options” or “privileges”
                                                   thing altogether different. They should
are also a very favourite form of specu-
                                                   always serve as a protection to other op-
lation, and that the means for indulging
                                                   erations. For instance, a speculator be-
in it have been abundant, is evidenced
                                                   comes a “bear” of, say, 10,000l Russian
by the fact that Mr Russell Sage, the
                                                   1873, and buys the “call” of the same
well known associate of Mr Jay Gould,
                                                   amount of stock. If the price falls, as he
who was, until the collapse of May, 1884,
                                                   anticipates, the profits which he realises
one of the wealthiest and most powerful
                                                   are reduced by the amount paid for the
manipulators in Wall Street, has always
                                                   “call.” On the other hand, if the stock
been a great dealer in “stock privileges.”
                                                   rises, no matter how much, he can “call”
It is difficult to understand why options
                                                   the same amount of stock as that sold at
have so far not been acclimatised in Eng-
                                                   presumably the same price, which liqui-
land, but in view of their becoming more
                                                   dates the stock sold, leaving him only
popular, it may be well to refer to their
                                                   the premiums paid for the “call” out of
advantages and disadvantages from an
                                                   pocket. It is, of course, evident that an
outside standpoint.
                                                   “option” often affords protection not to
     An “option” is the price paid for the
                                                   one, but to a series of operations. More-
right to demand or to deliver a certain
                                                   over, the holder of an “option,” using it
amount of stock at a given price within a
                                                   this way, may finally find it to his ad-
    1
        The Economist, p 534, May 2 1885.          vantage to close all operations for which


                                             207
it acted as protection, and using, say, nection with “options,” one for and one
the “call” in a direct manner, turn over against. In the first place, they foster a
from the “bear” side to the “bull” side of form of speculation which already flour-
the market. An “option” used properly ishes too abundantly. They do this not
therefore affords ample scope for skil- only directly, but also indirectly, as ow-
ful speculation, while no loss can be in- ing to the way in which they limit loss,
curred beyond the premium paid in the they encourage people to speculate in
first instance. But when a speculator stocks and shares who otherwise would
who dabbles a little in this sort of busi- be restrained, not so much by a posi-
ness just buys the “put” or “call,” and, tive prudence as by a negative timid-
as it is termed, “sits upon it,” he simply ity. But it is evident that one can be as
plays a losing game, for his operations effectually destroyed by a poison taken
for the fall or rise, which would be suf- in regular and known quantities, as by
ficiently weighted in the case of a pur- a large draught taken heedlessly. It is
chase or sale by his own inexperience, only a question of time—both methods
and by the expenses of commission &c., are equally certain. On the other hand,
are now burdened by the heavy prices used by experienced speculators, “op-
paid for the option itself. In fact, the tions” are generally great safeguards against
charges are probably multiplied ten fold unexpected and violent movements in prices,
against him. It is true that the loss is and hence in times like the present (spec-
limited, but then the propect of a profit ulation being a fact which must simply
is reduced almost to the vanishing point. be acknowledged and dealt with) they
On the other hand, “options” capably are entitled to some commendation. As
used not only limit the loss, but offer a a matter of fact, speculation in stocks
fair chance of making a profit. They are, and shares at the present time is for most
in fact, an excellent medium for clever, people gambling of an ultra-violent char-
yet cautious operators. From what we acter, and is only tolerable when pro-
have said, it will be seen that those who tected in the way described.
advise people to buy “options,” with-
out taking any other measures, are sim-
ply considering their own interests, the
more especially as the securities often
recommended are those which are ex-
tremely unlikely to fluctuate to the ex-
tent of the given premium—the latter
frequently remaining in the hands of the
broker, or so-called “broker,” as some-
thing of a much more satisfactory nature
than any commission.
     From the standpoint of business moral-
ity, two things may be adduced in con-


                                       208
F     KCL 1998 Exam
F.1     Question
In one time-step of the binomial model, a share-price, initially (at time t =
0) equal to S0 , moves up to S10 with probability p0 > 0 or down to S11
with probability p1 . In the same time-interval, a unit in the money market
increases from B0 = 1 to B1 . A dealer contracts at time t = 0 to pay an
investor f (S1i ) (i = 0 or i = 1, whichever turns out) at time t = 1, where f is
a specified function. The dealer hedges this derivative against the underlying,
so that the outcome is not subject to risk, and so that no profit or loss is
made on the deal.

a) Show that the hedge ratio must be

                                         f (S10 ) − f (S11 )
                                    δ=                       .            (F.63)
                                             S10 − S11

b) Show that the dealer must invest

                                      f (S11 )S10 − f (S10 )S11
                              β=                                          (F.64)
                                          B1 (S10 − S11 )

      in the money market.

c) Show that the price of the option must be

                                   S0 − S11 /B1            0
                                                       1 S1 /B1 − S0
                    f = f (S10 )                + f (S 1 )                (F.65)
                                     S10 − S11             S10 − S11

d) Use a no-arbitrage argument to show that S0 − S11 /B1 > 0.




                                         209
F.1.1   Solution
(a) The dealer must buy δ shares and invest β in the money market, so that
he has δS0 + βB0 at time t = 0 and δS1 + βB1 at time t = 1. He has an
obligation f (S1 ) at time t = 1. The risky part of the dealers assets is

                                         δS − f (S)

The condition for no risk is that this take the same value whether i = 0 or
i = 1. This gives
                        δS10 − f (S10 ) = δS11 − f (S11 ).
Solving, we get for the hedge ratio:
                                         f (S10 ) − f (S11 )
                                    δ=                       .
                                             S10 − S11

   b)
Put this value in the formula for the dealer’s assets at time 1, which must
cover the obligation f (S1 ), we get, for S1 = S11 say

                                    f (S1 ) = δS11 + βB1

the value for β:
                                   f (S10 ) − f (S11 ) 1
            B1 β = f (S11 ) −                         S1
                                       S10 − S11
                       f (S11 )S10 − f (S11 )S11 − f (S10 )S11 + f (S11 )S11
                     =
                                             S10 − S11
                       f (S11 )S10 − f (S10 )S11
                     =
                               S0 − S1

   c)
Putting this in for the value of the derivative at time 0 gives
                          f (S11 )S10 − f (S10 )S11 f (S10 ) − f (S11 )
                   f0 =                            +                    S0 ,
                              B1 (S10 − S11 )           S10 − S11
since B0 = 1. Rearranging, we get
                                   S0 − S11 /B1            0
                                                       1 S1 /B1 − S0
                   f0 = f (S10 )                + f (S 1 )           .
                                     S10 − S11             S10 − S11

                                             210
d)
If S0 B1 − S11 ≤ 0, then the lower of the two possible prices at time 1 is larger
than the initial price plus interest. So the arbitrageur will buy the share at
t = 0 for S0 , borrowing S0 to do this. His debt grows to S0 B1 . He then sells
his share at a price S10 or S11 , both ≥ than his debt. Since p0 > 0, he has
a non-zero chance to make money at no risk of a loss, and would therefore
follow this course.




                                      211
F.2     Question
Let Wt denote the Wiener process.

a) State the Ito rules for the second-degree infinitesimals (dt)2 , (dt)(dW )
     and (dW )2 .

b) Show that Wt and Wt2 − t are martingales.
     [Hint: you may use without proof that

                              E[XY |F] = X E[Y |F]                    (F.66)

      if the collection of random variables F contains X.]

c) Show that, if µ and σ are constants, then
                                                   1   2
                                St = S0 eµt+σWt − 2 σ t               (F.67)

      satisfies
                                 dSt
                                      = µ dt + σ dWt                  (F.68)
                                  St
      and the initial condition, S is equal to S0 at t = 0.




                                      212
F.2.1   Solution
a) (dt)2 = 0, (dt)(dW ) = 0, and (dW )2 = dt.

   b) Let 0 ≤ s ≤ t. Then Wt = Ws + W(s,t) , where
                                           Z t
                                W(s,t) =         dWu
                                            s

is independent of Ws . Then
                 E[Wt |W≤s ] = E[Ws |W≤s ] + E[W(s,t) |W≤s ]
                             = Ws + E[W(s,t) ]
since conditioning with independent info does not alter the mean. But W(s,t)
has mean zero, so
                             E[Wt |Ws ] = Ws .2
Also


  E[Wt2 |W≤s ] = E[(Ws + W(s,t) )2 |W≤s ]
               = E[Ws2 |Ws ] + 2E[Ws W(s,t) |W≤s ] + E[W(s,t)
                                                        2
                                                              |W≤s ]
                = Ws2 + 2Ws E[W(s,t) |W≤s ] + E[W(s,t)
                                                  2
                                                       ]
                  by given hint, and because W(s,t) is independent of Ws
                = Ws2 + 2Ws E[W(s,t) ] + t − s
                  since W(s,t) is independent of W≤s and is N (0, t − s)
                = Ws2 + t − s.
Hence
                           E[Wt2 − t|W≤s ] = Ws2 − s
as required.
   c) By Ito’s formula,
                           ∂S   ∂S      1 ∂2S
                     dSt =    +    dW +      2
                                               (dW )2 .
                           ∂t   ∂W      2 ∂W
We compute the terms entering here from the given function S:
               ∂S          1                  2
                  = S0 (µ − σ 2 )eµt+σWt −1/2σ t = (µ − 1/2σ 2 )St
               ∂t          2
                                      213
                    ∂S                    2
                       = S0 σeµt+σWt −1/2σ t = σSt
                    ∂W
                       ∂2S       ∂St
                          2
                            =σ        = σ 2 St .
                       ∂W        ∂W
Therefore
            dSt = (µ − 1/2σ 2 )St dt + σ St dWt + 1/2σ 2 St dt
so
                         dSt
                             = µdt + σ dWt .2.
                          St




                                   214
F.3    Question
Let St denote the price of a non-dividend-paying asset at time t, satisfying
the stochastic equation
                           dSt = µSt dt + σSt dWt ,
where the drift µ and the volatility σ are both assumed constant, and Wt is
the Wiener process. Let Ct be the price of a derivative based on this asset,
satisfying
                         dCt = µC            C
                                  t Ct dt + σt Ct Wt .

a) If at time t a trader is long φt units of the asset, and short one unit of
      the derivative, what is the value of the trader’s position? Show that
      the position is risk-free if and only if
                                            σtC Ct
                                     φt =          .
                                             σSt

b) Assuming that the short-term interest rate has the constant value r, show
    that the principle of no arbitrage implies that
                                   µC
                                    t −r   µ−r
                                         =     .
                                     σtC    σ
      Comment briefly on the financial significance of this relation.
c) Now assume that the derivative price can be expressed in the form Ct =
     C(St , t), where the function C(S, t) has continuous second derivatives.
     Use Ito’s lemma to show that
                                     ∂C        ∂C 1 2 2 ∂ 2 C
                          C t µC
                               t   =      + µS    + σ S
                                      ∂t       ∂S  2    ∂S 2
                                         ∂C
                   and    Ct σtC   = σS     .
                                         ∂S
d) Show that the no arbitrage condition implies that C(S, t) satisfies
                         ∂C 1 2 2 ∂ 2 C
                                                 Ã       !
                                                ∂C
                            + σ S     2
                                        =r C −S    .
                         ∂t  2    ∂S            ∂S
      What is the significance that the parameter µ does not appear in this
      relation?


                                      215
F.3.1   Solution
a) The value of the trader’s position is Vt = φt St − Ct ; it is risk-free if and
    only if the coefficient of the randomness, dWt is zero, during the small
    time-interval dt. The change in the value during dt is

         dVt = φt dSt − dCt = φt (µSt dt + σSt dWt ) − (µC          C
                                                         t Ct dt + σt Ct dWt )

      since his position does not change; it is therefore risk-free if and only if

                                       φt σSt = σtC Ct

      giving the result.

b) The condition of no arbitrage means that the drift in the no-risk position
    must be the short-term interest-rate. Thus

                           φt µSt − µC
                                     t Ct = rVt = r(φSt − Ct )

      which, on substituting φt gives

                          σtC Ct µ/σ − µC         C
                                        t Ct = r(σt Ct /σ − Ct ).

      Divide both sides by CtC σtC gives the result. It means that there exists
      a common risk-premium λ = (µ − r)/σ, the same for the asset and all
      derivatives of it.

c) By Ito’s lemma,

                                   ∂C      ∂C      1 ∂2C
                           dCt =      dt +    dS +        (dS)2
                                   ∂t      ∂S      2 ∂S 2
      as the other second derivatives are zero by the Ito rules. The only
      non-zero term in (dS)2 is σ 2 St2 (dWt )2 = σ 2 S 2 dt. Therefore

                                       1 ∂2C 2 2
                      Ã                                  !
                          ∂C ∂C                           ∂C
               dC =          +    µS +      2
                                              σ S dt + σS    dWt .
                          ∂t   ∂S      2 ∂S               ∂S

      We then prove c) by identifying Ct µct with the coefficient of dt and Ct σtc
      with the coefficient of dWt .



                                         216
d) b) tells us that

                                                       ∂C
               µC        C
                t = r + σt (µ − r)/σ = r + (S/C)          (µ − r), by c)
                                                       ∂S
     so substituting in c) we get

                                  ∂C 1 2 2 ∂ 2 C
                      Ã                            !
          C     −1        ∂C                                         ∂C
         µ =C                + µS    + σ S             = r + (S/C)      (µ − r)
                          ∂t      ∂S  2    ∂S 2                      ∂S

     and the result follows. This means that derivatives can be priced with-
     out knowing the rate of return on the asset.




                                      217
F.4    Question
Let St be the price, in Sterling, of a foreign currency. The Sterling interest
rate is r, and the foreign interest rate is f , both assumed constant and
expressed on a continuously compounded basis.

a) Explain what is meant by the forward price of a foreign currency.

b) At time t = 0 an investor purchases a derivative from a dealer which pays
     off ST − K at time t = T , where K is a fixed amount of Sterling. The
     investor pays C0 for the derivative. Assuming that the dealer makes no
     profit or loss on the transaction, use a no arbitrage argument to show
     that C0 = 0 if and only if K = S̃T , where S̃T = S0 e(r−f )T .

c) The price process for the foreign currency is given by
                                                  1   2
                               St = S0 eµt+σWt − 2 σ t

      where µ and σ are constants, and Wt is the standard Wiener process.
      Calculate the mean and variance of ST .
      You can use the fact that
                                                 1
                                    h    i
                                  E eX = e M + 2 V

      if the random variable X is normally distributed with mean M and
      variance V .

d) Why would you expect the result for E [ST ] to differ from S̃T as defined
    in b) above?




                                        218
F.4.1   Solution
a) The forward price in Sterling of a foreign currency is the price you pay,
    not due for payment till the forward time T , for one unit of foreign
    currency.
b) Dealer may take no risks, and then ”no arbitrage” says that at time T
    he must possess AerT where A is his investment in the deal at t = 0.
    So if he makes no investment, he must break even at time T .
     At T = 0 dealer receives C0 in Sterling. He must cover his obligation
     ST −K at time T , so he must now buy S0 e−f T in foreign currency, which
     he can invest there. This grows to (St e−f T )ef t at time t. He is left with
     C0 − S0 e−f T to invest in Sterling. This grows into (C0 − S0 e−f T )ert at
     time t (all values in Sterling). At time T his money-market assets are
                          (C0 − S0 e−f T )erT + ST e−f T ef T
     and his obligation is ST − K. To be equal:
                    (C0 − S0 e−f T )erT + ST e−f T ef T = ST − K
     So C0 = 0 if and only if
                                         K = S0 e(r−f )T .

c) σWt has mean 0 and variance V = σ 2 t, so from the given formula,
                                                                         1
                                                 h                           2
                                                                                 i
                          E [St ] = E S0 eµt+σWt − 2 σ t
                                                     1   2
                                                                 h               i
                                         = S0 eµt− 2 σ t E eσWt
                                                     1   2               1   2
                                         = S0 eµt− 2 σ t e0t+ 2 σ t
     so putting t = T gives
                                         E [ST ] = S0 eµT .
     For the variance we use Var X = E [X 2 ] − (E[X])2 , and that 2σWT has
     variance 4σ 2 T . Then
                           h     i               h               2
                                                                                     i
                         E ST2           = E S02 e2µT −σ T e2σWT
                                                             2       1       2
                                         = S02 e2µT e−σ T e 2 4σ T .
     Hence
                                     3
                                                                                         ³       ´
             Var ST = S02 e2µT e 2 T σ − (E [ST ])2 = S02 e2µT eT σ − 1
                                           2                                                 2




                                               219
d) The price is not risk free; also it depends on µ, which the “no arbitrage”
    price never does.




                                    220
F.5     Question
A call option on a foreign currency pays off Max(ST − K, 0) at time T , where
St is the price, in Sterling, of the foreign currency at time t, and K is the
strike price of the option in Sterling. Assuming the Black-Scholes model, the
present value C0 of a call option, in Sterling, can be written
                               h                              i
                   C0 = e−rT S0 e(r−f )T N (h+ ) − KN (h− ) ,

where r is the Sterling interest rate, and f is the foreign interest rate, both
assumed constant and expressed on a continuously compounded basis. The
normal cumulative distribution function N (x) is given by
                                       1 Z x − 1 ξ2
                          N (x) = √           e 2 dξ,
                                      (2π) −∞

and the parameters h± are given by
                                     ³         ´
                                   ln S̃T /K ± 21 σ 2 T
                           h± =                           ,
                                          σT 1/2
where σ is the volatility and S̃T = S0 e(r−f )T .

a) Explain briefly what is meant for a call option to be ‘in the money’, ‘at
     the money’ and ‘out of the money’.

b) Show that if S0 is very large compared with K, then C0 is given approx-
     imately by
                              C0 = S0 e−f T − Ke−rt .
      Comment on the financial significance of this result.

c) Show that N (x) + N (−x) = 1.

d) A currency option is said the be ‘at-the-money-forward’ when K =
    S0 e(r−f )T ; show that the present value of an at-the-money-forward call
    option is given by
                                            1
                                         µ                    ¶
                          C0 = S0 e−f T 2N ( σT 1/2 ) − 1 .
                                            2



                                         221
F.5.1   Solution
a) ‘in the money’ means S0 > K; ‘at the money’ means S0 = K; ‘out of the
      money’ means S0 < K.

b) S0 À K implies that S̃T À K, which implies that ln(S̃T /K) À σ 2 T and
     σT 1/2 , so h± is large, so N (h± ) ≈ 1. The C0 reduces to the ans.
     If the option is nearly certain to expire in the money, then the present
     value takes the simple given form, which can be written as the difference
     of the forward price of the currency minus the strike price, discounted
     back to the present.

c) Put η = −ξ in the integral for N . Then dξ = −dη, so
                                  Z x                                        Z ∞
                                            − 21 η 2                                  1 2
           N (−x) = (2π)   −1/2
                                        e              (−dη) = (2π)   −1/2
                                                                                   e− 2 η dη.
                                   ∞                                          x

     Adding to N (x) gives the full integral, = 1 as the probability is nor-
     malised.
                                       ³                ´
d) When K = S̃T , we have ln S̃T /K = 0; then h± = ±σT 1/2 ; then
    N (h− ) = 1 − N (h+ ), and the formula gives
                h                                           ³                ´i             ³               ´
     C0 = e−rT S0 e(r−f )T N (h+ ) − S0 e(r−f )T 1 − N (h+ )                      = S0 e−f T 2N (h+ ) − 1

     which is the ans.




                                              222
F.6    Question
Let St be the price of a non-dividend-paying asset at time t, where t = 0 is the
present. Let C(S0 , K, T ) denote the value today of a standard call option on
the asset, with strike K and maturity T . Let P (S0 , K, T ) denote the value
of the corresponding standard put option. Assume that the continuously
compounded rate of interest r is constant.

a) What is the pay-off of the put option? Give two possible reasons why an
    investor might purchase a put option.

b) Use a no-arbitrage argument to derive the put-call parity relation

                     C(S0 , K, T ) − P (S0 , K, T ) = S0 − e−rT K.

c) Now assume the standard Black-Scholes model, according to which the
     value of the call option is given by
                                         h                           i
                  C(S0 , K, T ) = e−rT S0 erT N (h+ ) − KN (h− ) ,

                      1   x        1 2
                               −2ξ
      where N (x) = √(2π) −∞ e     dξ is the N (0, 1) cumulative distribution
                           R

      function,
                               ³          ´
                          ln S0 erT /K ± σ 2 T
               and h± =                        , where σ is constant.
                                  σT 1/2
      For what value of S0 does N (h+ ) = 1/2?
      Use the put-call parity relation and N (x) + N (−x) = 1 to prove that
                                     h         ³   ´          ³          ´i
               P (S0 , K, T ) = e−rT KN −h− − S0 erT N −h+                    .




                                         223
F.6.1     Solution
a) Payoff for a put option is Max(K − ST , 0).
     Reason for buying a put option is to speculate that the price will fall,
     and the option will magnify the profit in this case. Or, to pay a small
     premium to protect against falling price.

b) Suppose first that C − P − (S0 − e−rT K) = q > 0. The arbitrageur will
     then sell C and buy P , and buy the share at S0 . He then has q −e−rT K
     to invest in (or borrow from) the money market, which at time T has
     grown to qerT − K. If ST > K, P is void, but his client can buy the
     share (which he has) for K, which he uses to pay off the debt, leaving
     a profit of qerT . If however, ST < K, his client would not call, but he
     can sell his share for K using the put option, again leaving a profit of
     qerT .
     If C − P − (S0 − e−rT ) = −q < 0, he will buy C and sell P , and sell
     S0 short. This leaves him P − C + S0 = q + e−rT K invested until time
     T , when it has grown to qerT + K. If ST > K his clients put-option
     will not be exercised; he uses his call option to buy a share for K, to
     settle his short position on S0 , leaving him with a profit of qerT . If
     however ST < K, his call option is worthless, and his client will sell
     him a share for K, which he uses to settle his short purchase. He still
     has qerT profit.

c) N (h+ ) = 12 if h+ = 0, which means that
                               ³         ´   1
                             ln S0 erT /K = − σ 2 T
                                             2
     so
                                              1   2
                               S0 = e−rT Ke− 2 σ T .
     We have

               P =    C − S0 + erT K
                 =    e−rT {S0 erT N (h+ ) − KN (h− )} − S0 + e−rT K
                 =    S0 (N (h+ ) − 1) + e−rT K(1 − N (h− ))
                 =    e−rT {K N (−h− ) − erT S0 N (−h+ )}.2



                                    224
G      Bibliography
Here is a list of books that you might progress to next. While the ones that
you choose may depend on your particular interests and tastes, they are all
very useful in their own way, and to some extent complementary.

  1. M.W. Baxter and A.J.O. Rennie, Financial Calculus, Cambridge Uni-
     versity Press (1996).

  2. J.C. Hull, Options, Futures, and Other Derivatives, Prentice-Hall (Third
     Edition, 1997).

  3. R. Jarrow and S. Turnbull, Derivative Securities, Southwestern Press
     (1997).

  4. B. Oksendal, Stochastic Differential Equations, Springer-Verlag (Fifth
     Edition, 1998).

  5. P. Wilmott, Derivatives, Wiley (1998).

The following is a chronological list of important papers that should be ac-
cesible if you have understood the material in this book.

  1. F. Black and M. Scholes, “The pricing of options and corporate liabil-
     ities”, Journal of Political Economy 81, 637 (1973).

  2. R.C. Merton, “Theory of rational option pricing”, Bell Journal of Eco-
     nomics and Management Science 4, 141 (1973).

  3. O.A. Vasicek, “An equilibrium characterization of the term structure”,
     Journal of Financial Economics 5, 177 (1977).

  4. J.C. Cox, S.A. Ross and M. Rubinstein, “Option Pricing: A Simplified
     Approach”, Journal of Financial Economics 7, 229 (1979).

  5. A. Bensoussan, “On the theory of option pricing”, Acta Applicandae
     Mathematicae 2, 139 (1984).

  6. D. Heath, R. Jarrow and A Morton, “Bond pricing and the term struc-
     ture of interest rates: a new methodology”, Econometrica 60, 77 (1992).

Here is a list of some relevant web sites:

                                      225
1. Dow Jones: www.dowjones.com

2. Financial Times: www.ft.com

3. Foreign Exchange: www.x-rates.com

4. FTSE International: www.ftse.com

5. London International Financial Futures and Options Exchange: www.liffe.com

6. London Stock Exchange: www.londonstockex.co.uk

7. NASDAQ: www.nasdaq.com

8. New York Stock Exchange: www.nyse.com




                                 226



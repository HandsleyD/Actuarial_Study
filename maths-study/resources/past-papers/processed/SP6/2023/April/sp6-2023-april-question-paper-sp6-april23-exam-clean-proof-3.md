---
normalized_id: sp6-2023-april-question-paper-sp6-april23-exam-clean-proof-3
exam_code: SP6
year: 2023
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/SP6/Apr23/SP6_April23_EXAM_Clean Proof (3).pdf
conversion_method: pdftotext
qa_status: pending
---
# sp6-2023-april-question-paper-sp6-april23-exam-clean-proof-3

   INSTITUTE AND FACULTY OF ACTUARIES




                               EXAMINATION

                                  20 April 2023 (am)


                  Subject SP6 – Financial Derivatives
                         Specialist Principles
                        Time allowed: Three hours and twenty minutes




            In addition to this paper you should have available the 2002 edition of
                 the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


SP6 A2023                                                 © Institute and Faculty of Actuaries
1    A claim, X, is contingent on a process, S, and a binomial branch model is used to
     value claim X.

     (i)      State why it would be inappropriate to price derivatives using a real-world
              probability measure, P.                                                     [1]

     The stock price, S, follows the following two-step process.

                    Time: 0           Time: 1             Time: 2


                                                          Node 4
                                                          S = 130
                                       Node 2
                                       S = 120
                                                          Node 5
                                                          S = 110
                       Node 1
                       S = 100
                                                          Node 6
                                                          S = 90
                                       Node 3
                                       S = 80
                                                          Node 7
                                                          S = 70


     The price of a risk-free bond, B, follows the process B0 = 100, B1 = 102 and B2 = 104.

     For claim X, the payoff at time 2 equals:

                                           X = 50 if S ≥ 100

                                           X = 0 if S < 100

     (ii)     State the filtration Ƒi at nodes 1 and 4.                                     [2]

     (iii)    Calculate q, the risk-neutral probability of an up-move, at nodes 1, 2 and 3 (at
              each node at times 0 and 1), showing all workings.                            [3]

     (iv)     Derive the stock holding strategy φ and the bond holding strategy ψ at nodes
              2 and 3.                                                                   [4]

     (v)      Comment on the change in stock holding strategy φ from time 0 to time 1. [3]
                                                                                 [Total 13]




SP6 A2023–2
2    Suppose that a stock price has an expected return of 10% p.a. continuously
     compounded and a volatility of 30% p.a. The current stock price is $50 and each year
     has 250 trading days. Four random numbers and corresponding z values are given in
     the table below.

                    Random number [0,1]         Corresponding z value
                          0.3239                      –0.4568
                          0.0423                      –1.7246
                          0.5525                       0.1319
                          0.4285                      –0.1801

     (i)      Derive four random values for the stock price after 1 year using the table
              above.                                                                        [3]

     (ii)     State in your own words what it means for a process to follow a Markov
              process.                                                                      [2]

     (iii)    Calculate the volatility of the daily stock price assuming the stock follows a
              Markov process, showing all workings.                                          [1]

     An investor observes the volatility of daily stock prices to be lower than that derived
     from annual volatilities and assuming stock prices follow a Markov process.

     (iv)     Comment on how mean-reverting or trending behaviour of stock prices may
              explain this observation.                                              [3]

     (v)      Suggest a possible trading rule that the investor could adopt to generate above-
              average returns.                                                             [2]
                                                                                    [Total 11]




SP6 A2023–3
3    Monte Carlo simulations are used to value an Asian option of which the payoff is
     equal to the amount by which the average stock price exceeds the strike price.

     (i)       Suggest two possible advantages of using Monte Carlo simulations to value
               options.                                                                  [2]

     The table below shows ten simulations of a stock price along a binomial tree where
     each step is randomly simulated to be D (Down) or U (Up). The steps coincide with
     the discrete valuation points for the payoff of the Asian option.

                                 Final stock       Average stock
                                                                      Option payoff
             Trial    Path          price              price
                                                                           ($)
                                     ($)                ($)
              1      DUDD          90.70              95.29               0.00
              2      DDUU         100.00              95.29               0.00
              3      UUUD         110.25             110.32              10.32
              4      DDDU          90.70              90.76               0.00
              5      UUDU             ?                  ?                  ?
              6      DDDD          82.27              88.65               0.00
              7      UDUU         110.25             105.06               5.06
              8      DDUD          90.70              92.97               0.00
              9      UUUU         121.55             113.14              13.14
              10     DDUU         100.00              95.29               0.00
           Average                                                        3.61
           Standard deviation                                             5.08

     (ii)      Calculate, showing all workings, the missing values in the table for trial 5. [3]

     (iii)     Calculate, showing all workings, the 95% confidence interval around the
               calculated price of $3.61.                                                    [2]

     (iv)      Describe how these simulations could be used to estimate vega.                [3]
                                                                                      [Total 10]




SP6 A2023–4
4    An energy company plans to construct a wind farm. It proposes to finance the project
     using a Special Purpose Vehicle (SPV). The proposed structure of the SPV is given
     below.




     (i)      Explain why the energy company may prefer to use an SPV to finance this
              project.                                                                [1]

     (ii)     Discuss why investors would choose to invest in each of the different types of
              bond and equity assets related to the project.                              [3]

     (iii)    Outline how a credit rating agency would assess the credit rating of each of the
              bonds.                                                                       [3]

     The wind farm’s future revenues will be dependent on the amount of electricity the
     wind farm generates and the price paid for the electricity. To meet its ambitious
     climate change commitments, the government of the country in which the wind farm
     is to be constructed offers energy companies a guaranteed price for the energy
     generated by the wind farm during the first 10 years of its lifespan.

     (iv)     Discuss how this guarantee could affect the credit rating of the bonds.      [3]
                                                                                    [Total 10]




SP6 A2023–5
5    A bank holds a large portfolio of both call and put options on a non-dividend-paying
     technology stock. The bank manages the portfolio’s market risk by hedging the
     portfolio’s delta and gamma.

     (i)      Explain why the bank would choose to hedge the:

              (a)    delta.
              (b)    gamma.
                                                                                          [2]

     (ii)     State how the bank would calculate the delta and gamma of the portfolio from
              the delta and gamma of the individual options.                             [1]

     (iii)    Explain whether the following instruments issued by or based on the
              technology company can be used to hedge the delta and/or the gamma of the
              portfolio:

              (a)    stocks

              (b)    corporate bonds

              (c)    exchange-traded options

              (d)    over-the-counter options

              (e)    single stock futures.
                                                                                          [3]

     (iv)     Derive the formula for calculating delta from the Garman–Kohlhagen
              equations for the price of a European put option on a continuous dividend-
              paying share.                                                              [4]

                [You are given that S × exp(–qT) φ(–d1) = K × exp(–rT) × φ(–d2)]

     The bank sold a 12-month European bear put spread to a hedge fund 6 months ago by
     selling it a put option with a strike price of $900 and simultaneously buying back a
     put option with a strike price of $750. The stock price is currently $925, the risk-free
     rate is 2% p.a. continuously compounded, with a continuous dividend yield of 3% p.a.
     and the volatility is assumed to be 25% p.a.

     (v)      Calculate, showing all workings, the gamma of this position.                [3]

     (vi)     Comment on the frequency of rebalancing required to achieve gamma
              neutrality as the time to maturity of the position decreases.          [2]
                                                                              [Total 15]




SP6 A2023–6
6    The price of non-income paying securities f and g are dependent on the process X. The
     price process followed by f and g is as follows:

                                        df
                                           =μf dt + σf dB
                                        f

                                        dg
                                           =μg dt + σg dB
                                        g

     where dB is standard Brownian motion and μf , μg , σf and σg are functions of X and
     time, t.

     (i)        Define λ, the market price of risk for X, defining any terms used.            [2]

     Assume that derivative f has an expected return of 5% p.a. continuously compounded,
     a volatility of 15% p.a. and the risk-free rate is 0.5% p.a. continuously compounded.

     (ii)       Calculate, showing all workings, the expected return of derivative g, assuming
                its volatility is 37.5% p.a.                                                [2]

     The equivalent martingale measure shows that in the absence of arbitrage, the ratio f/g
     is a martingale for all security prices f when the market price of risk is σg .

     (iii)      Define the numeraire.                                                        [1]

     (iv)       Explain why using different numeraire assets can be useful in the pricing of
                derivatives.                                                                 [2]

     (v)        Show that the expected future swap rate is the current swap rate for a fixed-
                for-floating swap where the market price of risk is chosen to be the volatility
                of an annuity.                                                                [3]
                                                                                      [Total 10]




SP6 A2023–7
7    (i)       Describe why a company may hedge a risk by taking a long position in a
               futures derivative.                                                             [2]

     A farmer has won their first large contract: to supply spring wheat to a national
     bakery in 12 months’ time. The farm’s employees have no experience in the
     derivatives markets.

     The farmer is considering using the futures market to hedge against the risk of the
     current high market price of wheat decreasing in 12 months. The current market price
     of wheat is $7.50 per bushel.

     (ii)      Assess the suitability for the farm of hedging the risk in this way including
               assessment of basis risk and operational risk.                                [4]

     The contract is to supply 4,000 bushels at the market price at the time. The present
     value at the current date of the production cost to supply this amount of wheat is
     $25,000. The continuously compounded risk-free interest rate is 4.0% p.a.

     (iii)     Calculate, showing all workings, the market price of wheat in 12 months, at
               which the farm makes neither a profit nor loss, stating any assumptions made.
                                                                                           [2]

     Instead of using futures, the farmer decides to hedge the risk in the following way:

           Buy 4,000 vanilla European put options (with the underlying asset being wheat)
            with a strike price of $6.00 and a cost of $0.02 per option.
           Short 4,000 vanilla European call options (with the underlying asset being wheat)
            with a strike price of $8.00 and a cost of $0.37 per option.

     (iv)      Calculate the initial cost to the farmer to set up this hedge, stating any
               assumptions made.                                                               [2]

     (v)       Calculate, showing all workings, the market price of wheat in 12 months’
               time, at which the farm makes neither a profit nor loss if the farmer hedges
               the risk using options as above, stating any assumptions made.               [5]

     (vi)      Comment on the appropriateness of the hedge.                                    [2]
                                                                                        [Total 17]




SP6 A2023–8
8    (i)       Describe, in your own words, the following terms in the context of the futures
               markets:

                  margin calls
                  settlement prices.
                                                                                           [3]

     (ii)      Describe the role of a broker in the futures market.                        [3]

     A trader whose base currency is the US Dollar currently has a long position in one
     futures contract on a US Dollar/Euro foreign exchange future. Under this contract, the
     trader agrees to buy €125,000 for $105,550 in 90 days. The initial margin is $10,000,
     which the trader deposits when they enter the contract. The trader enters the futures
     contract just before the market closes on Monday 1 June.

     Furthermore, the maintenance margin is $8,000 per contract and the overnight interest
     paid on the margin account is 0.01% of the margin account at the market close, which
     is paid daily into the margin account just before the market opens.

     The trader observes the following settlement prices for the futures contract described
     above:

           Tuesday 2 June: $1.179/Euro
           Wednesday 3 June: $1.161/Euro.

     (iii)     Show that the margin call at the close of the market on Wednesday 3 June is
               $113.86, stating any assumptions made.                                     [6]

     (iv)      Comment on the implications to the trader and broker of not acting on this
               margin call.                                                               [2]
                                                                                   [Total 14]


                                    END OF PAPER




SP6 A2023–9


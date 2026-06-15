---
normalized_id: cp2-2022-september-question-paper-cp2-1-september22-exam
exam_code: CP2
year: 2022
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Sep22/CP2-1_September22_EXAM.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2022-september-question-paper-cp2-1-september22-exam

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                             12 September 2022 (am)


                   Subject CP2 – Modelling Practice
                            Core Practices
                                     Paper One
                      Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CP21 S2022                                               © Institute and Faculty of Actuaries
Exam requirements
1    Modelling steps and data checks

     Read the background document, which describes the scenarios that need to be
     modelled and documented for this project.

     Construct a spreadsheet model that produces the following calculations and charts.
     You should ensure that your spreadsheet contains appropriate self-checks and that you
     have performed reasonableness checks at each stage of your calculations.

     Modelling steps:

     (i)     Carry out checks on the data provided to confirm that the data is complete and
             fit for use. This could include:

             (a)    analysis of the data provided to give reassurance that the data is
                    accurate and correct.

             (b)    calculation of suitable summary statistics that provide the key
                    characteristics for each stock, and a chart that compares the returns of
                    the five stocks.

             (c)    construction of a chart showing the distribution of the daily returns,
                    and assessment of a potential statistical distribution for them.
                                                                                             [8]

             [Note: you will be able to continue to complete the model if you have not
             completed the verification requested above.]

     (ii)    Calculate the value on 31 December 2021 of a notional portfolio of $1,000
             invested according to the rules of each of the strategies A to D inclusive. [14]

     (iii)   Construct a chart to show your results from part (ii).                          [2]

     (iv)    Calculate the following key metrics for each strategy:

             (a)    Average daily return

             (b)    Standard deviation of daily return.
                                                                                             [3]

     (v)     Construct a chart to show the optimal trading strategy for each stock by
             comparing the value of each stock under each strategy on 31 December 2021.
                                                                                      [3]

             [Note: all scenarios outlined above should be modelled separately in your
             spreadsheet. The user should not need to change the parameters to see the
             results.]                                                       [Sub-total 30]




CP21 S2022–2
2    Marks available for spreadsheet model and checks:

     (i)       Automatic checks on the modelling completed in Question 1.                      [2]

     (ii)      Demonstration of good modelling technique and spreadsheet practice.     [7]
                                                                             [Sub-total 9]


3    Audit trail

     Prepare an audit trail for your spreadsheet model, that includes the following aspects:

           Purpose of the model
           Data and the reasonableness of the data
           Assumptions used
           Methodology, i.e. description of how each calculation stage in the model has been
            produced
           Explanation of any checks performed.

     You should ensure that your audit trail is suitable for both a senior actuary, who has
     been asked to approve your work, and a fellow student, who has been asked to peer
     review and correct your model, or may be asked to continue work on it or to use it
     again for a similar purpose in the future.

     Marks available for audit trail:

     Audit approach

     (i)       Communication skills.                                                           [4]

     (ii)      Fellow student can review and check methods used in the model.                  [7]

     (iii)     Senior actuary can scrutinise and understand what has been done.                [7]

     (iv)      Written in clear English.                                                       [3]

     (v)       Written in a logical order.                                                     [3]

     Audit content

     (vi)      All steps clearly explained.                                                    [8]

     (vii)     Reasonableness checks included.                                                 [5]

     (viii) Clear signposting/labelling included throughout.                                   [4]

     (ix)      Statement of assumptions made.                                                  [4]

     (x)       All model steps accurately covered.                                       [16]
                                                                               [Sub-total 61]
                                                                                 [Total 100]



CP21 S2022–3
Background
You are an actuarial student at an asset management company. Together with three of your
fellow students, you have been discussing potential trading tactics for buying and selling
stocks. Your manager has taken an interest in this discussion, and has decided to turn it into a
competition:

   Each student determines a trading strategy.
   The manager picks five stocks from a range of sectors and provides historical price data,
    downloaded from the internet, for each stock.
   Each student applies their chosen trading strategy to the data provided for the five stocks
    in the historic year.
   The student whose trading strategy results in the highest fund value at the end of the year
    wins a prize.

After some research, the following strategies were chosen by the four students:

A Hold: Each stock is bought at the start of the year, and held until the end of the year.
B Profit taking: This strategy assumes that following a run of increases or decreases, a
  1-day price correction will take place as traders take profit:

       The investment decision on each day is based on the movement in the price in the 3
        days prior to it.
       Where the price has increased for at least 3 days in a row, the price is expected to drop
        the next day, and the strategy will sell the stock short for 1 day.
       Where the price has decreased for at least 3 days in a row, the price is expected to rise
        the next day, and the strategy will buy and hold the stock for 1 day.

C Following trend: This strategy is the reverse of the profit taking strategy. Here, the
  assumption is that if a price has moved in one direction for 3 days in a row, it will
  continue to move in that direction for 1 more day:

       Where the price has increased for at least 3 days in a row, the price is expected to rise
        again the next day, and the strategy will buy and hold the stock for 1 day.
       Where the price has decreased for at least 3 days in a row, the price is expected to fall
        for an additional day, and the strategy will sell the stock short for 1 day.

D Moving average: This strategy aims to make use of short-term movements in the price
  against a longer-term trend. If the short-term average price is temporarily higher than the
  longer-term trend, the expectation is that the price will drop in future, and vice versa:

       When the 50-day moving average is below the 200-day moving average, buy and hold
        the stock.
       When the 50-day moving average is above the 200-day moving average, sell the stock
        short.
       In both cases, maintain the buy or short sell until the two averages change position. At
        this point, switch from a buy and hold to a short sell transaction, or the reverse, as
        appropriate.
       For this strategy, an initial position is taken based on the two moving averages on
        2 January, and this position is re-evaluated each day thereafter.


CP21 S2022–4
Your manager has proposed the following rules for the competition:

1. Each student gets a notional $1,000 on 1 January 2021, which is divided equally among
   the five stocks.
2. The investment strategy must be applied fully to the amount allocated to each stock.
3. Short selling is allowed. That is, if the strategy dictates a ‘sell’ instruction, a negative
   position will be entered into. See ‘Additional guidance’ for more information.
4. Transactions only take place as dictated by the chosen trading strategy.
5. The winner is the student with the highest notional value on 31 December 2021.
6. Any reference to ‘days’ can be interpreted as days on which a price is published, rather
   than calendar days.

To be eligible for the prize, each student needs to produce a model comparing all of the
trading strategies as well as a well written audit trail. The model needs to:

   check the data provided, calculate summary statistics for each stock and assess the
    statistical distribution of the daily returns for all stocks.
   calculate the value of the notional portfolio for each trading strategy.
   construct a chart to compare the value of each strategy at the end of 2021.
   construct a chart showing the optimal trading strategy for each stock.

Additional guidance

Short selling is where a transaction is made on the expectation that the price of a stock will
fall. The investor sells a stock they do not have, expecting to buy it at a future date at a lower
price. For the purposes of this exercise, a simplified approach can be taken, such that the
profit on a stock sold short at price S, and subsequently purchased at price B is taken to be
(S – B). Alternatively, if the value of the notional portfolio is P at the point of the sell
transaction, then following the buy transaction, the value of the portfolio will be P × B ÷ S.

Note that for a normal buy and hold transaction, the stock is bought at price B and sold at
price S at a later date. Thus, if the value of the notional portfolio is P at the point of the buy
transaction, then following the sell transaction, the value of the portfolio will be P × S ÷ B.


                                      END OF PAPER




CP21 S2022–5



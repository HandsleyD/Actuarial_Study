---
normalized_id: cm2-2025-september-question-paper-cm2a-sept2025-exam
exam_code: CM2
year: 2025
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CM2/CM2A/Sep25/CM2A_Sept2025_Exam.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm2-2025-september-question-paper-cm2a-sept2025-exam

    INSTITUTE AND FACULTY OF ACTUARIES




                                       EXAMINATION

                                          17 September 2025


                      Subject CM2 – Economic Modelling
                               Core Principles
                                                  Paper A
                             Time allowed: Three hours and twenty minutes




              In addition to this paper you should have available the 2002 edition of
                   the Formulae and Tables and your own electronic calculator.


All material in this document is the copyright material of the Institute and Faculty of Actuaries. No part of this
document may be reproduced in any material form, whether by publication, translation, storage in a retrieval
system or transmission by electronic, mechanical, photocopying, recording or other means, without the prior
permission of the Institute and Faculty of Actuaries.



CM2A S2025                                                             © Institute and Faculty of Actuaries
1    The table below shows the cumulative incurred claims for a portfolio of general
     insurance policies. The ultimate loss ratio is expected to be in line with the 2021
     accident year and claims are assumed to be fully developed by the end of
     development year 3.

        Accident            Development year               Earned
          year         0        1      2          3       premiums
         2021         67       84    101         113         128
         2022         70       89    120                     145
         2023        133      180                            216
         2024        300                                     468

     (i)     Calculate the total reserve required to meet the outstanding claims using the
             Bornhuetter–Ferguson method.                                                  [7]

     (ii)    Explain why an insurance regulator may view the use of the
             Bornhuetter–Ferguson method as more appropriate than the basic
             chain ladder method in this case.                                             [2]
                                                                                     [Total 9]


2    The number of claims on a type of insurance policy follows a Poisson process with
     parameter λ = 1. The insurer models individual claim amounts using an exponential
     distribution with a mean of $1,000. Premiums are set with a loading factor of 25%.

     (i)     State Lundberg’s inequality, defining all terms you use.                      [2]

     (ii)    Calculate the adjustment coefficient.                                         [4]

     The insurer’s initial wealth is $5,000.

     (iii)   Calculate an upper bound for the insurer’s probability of ultimate ruin using
             Lundberg’s inequality.                                                        [1]

     The insurer is concerned about the administrative time taken to process claims and is
     proposing to pay a fixed lump sum equal to $1,000 in respect of each claim,
     regardless of the actual loss incurred.

     (iv)    Explain what impact the insurer’s proposal would have on the probability of
             ultimate ruin.                                                             [2]
                                                                                 [Total 9]




CM2A S2025–2
3    Consider a single period multifactor model of security returns where:


                                       𝑅     𝛼        𝛽 𝐼        𝜀


     where:

           Ri is the return on security i
           𝛼i and 𝛽ij are security-specific constants
           𝜀i is a cross-sectionally independent random component that is independent of all
            Ij
           Ij is the cross-sectionally independent rate of change in factor j.

     (i)       Derive an expression for Cij, the covariance between the returns on two
               securities i and j, using the model above.                                    [4]

     Consider a portfolio of N securities, with equal weights held in each security.

     (ii)      Discuss the implications of the expression in part (i) on the diversification of
               the portfolio.                                                                 [3]

     Now consider a single index model where:

                                         𝑅    𝛼     𝛽𝑅       𝜀

     where:

           Ri is the return on security i
           𝛼i and 𝛽i are security specific constants
           RM is the return on the market
           𝜀i is a random component that is independent of RM.

     The returns of two securities, X and Y, are fitted to the model over a 1-year period.

     The expected return on the market is 7.5% p.a. and the standard deviation of the
     return on the market is 1.0%.

     The fitted model has the following attributes:

                                      X                    Y
                 𝛼i                  𝛼X                  12%
                 𝛽i                  1.5                  𝛽Y
               Var[𝜀i]             0.0006               0.0001
                E[Ri]              12.3%                E[RY]




CM2A S2025–3
     (iii)     Calculate 𝛼X and 𝛽Y assuming that the covariance of returns on X and Y is
               −0.000075.                                                                     [4]

     (iv)      Show how a portfolio of these two securities could be used to achieve
               diversification.                                                           [4]
                                                                                   [Total 15]


4    (i)       State four of the assumptions underlying the Black–Scholes option pricing
               model.                                                                    [2]

     An investor holds a European call option, c, on a share. The option expires in
     3 years and the strike price is $60. The underlying share price is currently $75
     and its volatility is 15%. The risk-free force of interest is 4% p.a.

     (ii)      Calculate the price of the option using the Black–Scholes model.               [3]

     An analyst states that if the share price were to instantaneously increase to $80 then
     the price of the option would change to $27.21.

     (iii)     Estimate the delta of the option, ∆ , using your answer from part (i) and the
               analyst’s information above.                                                  [2]

     The investor creates the following portfolio:

           long one of the call options described above
           short one European put option, p, on the same underlying share and with the
            same strike price and expiry date
           short one underlying share.

     (iv)      Show, using put–call parity, that ∆    ∆     1.                                [3]

     (v)       Justify why the investor may have created the portfolio described above.       [2]

     (vi)      Discuss how and why ∆ will change if the share price increases.              [2]
                                                                                     [Total 14]




CM2A S2025–4
5    A company issues a 1-year zero-coupon bond that pays $6 on maturity. The
     probability of default on this bond is estimated to be 20%. In case of default, the
     maturity payment is assumed to follow a discrete uniform distribution U($0,$5) taking
     values $0, $1, $2, …, $5 each with probability 1/6.

     (i)    Calculate, for the payment on maturity:

            (a)    the downside semi-variance.

            (b)    the shortfall probability below $4.

            (c)    the expected shortfall below $4.
                                                                                         [6]

     (ii)   Comment on how each of the answers to part (i) (a), (b) and (c) would change
            if the probability of default increased to 30%. You do not need to carry out
            any further calculations.                                                    [1]
                                                                                   [Total 7]




CM2A S2025–5
6    (i)       List the four axioms used to derive the expected utility theorem.            [2]

     An actuary uses a quadratic utility function of the form:

                                        U(w) = w − dw2

     (ii)      Determine the range of values for the constant d where U(w) satisfies the
               following conditions:

               (a)     non-satiation

               (b)     diminishing marginal utility of wealth.
                                                                                            [2]

     The actuary’s current wealth is $100,000 and their current utility is 75,000.

     (iii)     Calculate the value of d in the actuary’s utility function.                  [1]

     The actuary is planning their wedding. The cost of the wedding will be $15,000 and
     the actuary has identified four possible outcomes as shown in the table:

         Outcome Description                          Impact                       Probability
                 The wedding takes place
            1                                         No additional cost              70%
                 without incident
                 An incident occurs and the
            2    actuary will have to pay             Additional cost of $2,000       15%
                 damages
                 Either party cancels the             No additional cost, but no
            3                                                                          5%
                 wedding                              refund of original cost
                 The wedding venue is
            4                                         Additional cost of $5,000       10%
                 changed at short notice

     (iv)      Calculate the actuary’s expected utility assuming that their wealth before
               paying for the wedding is $100,000 and there are no other income or expenses.
                                                                                          [3]

     An insurance company offers wedding insurance that will:

           cover the cost of any damages up to $10,000.
           pay the policyholder half of the cost of the wedding if either party cancels.
           cover all additional costs in relation to a replacement venue if the wedding venue
            is changed at short notice.

     (v)       Calculate the maximum premium that the actuary would be willing to pay for
               this insurance.                                                          [3]
                                                                                [Total 11]




CM2A S2025–6
7    At a small casino, there are N customers playing a game. In each round of the game,
     each customer bets $1 on one of two outcomes and if the customer chooses the correct
     outcome, they win the round. You may assume for the rest of the question that each
     customer:

           makes their choice randomly.
           has a chance of winning of 0.5 every time a round is played.
           has infinite wealth.

     When a customer wins they receive $2, which includes the return of their initial bet.
     When they lose, the casino keeps the $1 bet. The casino is considered bankrupt if its
     wealth ever reaches $0 and bankruptcy is an absorbing state.

     The casino’s initial wealth is $5. Assume initially that N = 1.

     (i)       Write down the probability that the casino is bankrupt after two rounds of the
               game.                                                                        [1]

     (ii)      Calculate the probability that the casino is bankrupt after five rounds of the
               game.                                                                          [2]

     Now suppose that N = 5 for each round of the game. The casino’s initial wealth is still
     $5.

     (iii)     (a)     Determine the distribution of the casino’s wealth, i.e. the possible
                       outcomes and their probabilities:

                          after one round of the game.
                          after two rounds of the game.

               (b)     Hence, calculate the probability that the casino becomes bankrupt
                       during the first two rounds of the game.
                                                                                              [5]

     (iv)      Explain why the probability the casino is bankrupt after five rounds would be
               higher when N = 5 than the equivalent probability when N = 1.               [2]

     (v)       Discuss, with reference to your answers to parts (i) to (iv) inclusive, how the
               principles of ruin theory for insurers are relevant to this casino.            [2]
                                                                                       [Total 12]




CM2A S2025–7
8    (i)    Define the following forms of the efficient markets hypothesis:

            (a)     weak form

            (b)     semi-strong form

            (c)     strong form.
                                                                                          [3]

     Consider the following scenarios:

     1. A company announces unexpected positive earnings and its stock price
        immediately rises as a result.

     2. A board member of a pharmaceutical company learns about a pending approval
        for a new drug but is unable to make abnormal profits because the stock price
        already reflects the expected approval.

     3. An investor conducts fundamental analysis by carefully studying company
        financial statements, earnings reports and industry news. By identifying
        undervalued stocks they can earn abnormal returns.

     (ii)   Explain for each scenario if it is consistent with:

            (a)     the strong form efficient market hypothesis.

            (b)     the semi-strong form efficient market hypothesis.
                                                                                         [6]
                                                                                   [Total 9]


9    Consider an asset with value Yi at time i. The value Yi can either increase by 20% or
     reduce by 10% over a single time step based on a probability measure R, where the
     probability of an up step is 75% and the probability of a down step is 25%. Let Fi
     denote the filtration of the process Yi at time i.

     The ‘Tower Property’ is:

                                   ER(Y2|F0) = ER(ER(Y2|F1)|F0)

     (i)    Demonstrate that the ‘Tower Property’ holds for Yi.                          [4]

     (ii)   State briefly why the ‘Tower Property’ would be useful when pricing a
            derivative on the underlying asset Yi under a risk-neutral probability measure.
                                                                                          [1]
                                                                                    [Total 5]




CM2A S2025–8
10   A portfolio consists of Asset S and Asset T as shown below:

                  Investment in asset   Daily volatility
      Asset S            $500               1.5%
      Asset T            $700               1.3%

     The correlation coefficient between the returns on S and T is 0.5. You may assume
     that asset returns are normally distributed.

     (i)    Calculate the following:

            (a)    the 9-day Value at Risk (VaR) for each of asset S and T

            (b)    the 9-day VaR for the portfolio.
                                                                                         [6]
            [Hint: You may assume that n-day VaR = 1-day VaR × n0.5.]

     (ii)   Analyse what your answers to part (i) show about the impact of diversification
            on VaR.                                                                     [3]
                                                                                 [Total 9]


                                END OF PAPER




CM2A S2025–9


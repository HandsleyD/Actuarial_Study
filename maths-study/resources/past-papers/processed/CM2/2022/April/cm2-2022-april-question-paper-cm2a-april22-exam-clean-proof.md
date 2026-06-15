---
normalized_id: cm2-2022-april-question-paper-cm2a-april22-exam-clean-proof
exam_code: CM2
year: 2022
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CM2/CM2A/Apr22/CM2A_April22_EXAM_Clean Proof.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm2-2022-april-question-paper-cm2a-april22-exam-clean-proof

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                                 27 April 2022 (am)


                Subject CM2 - Financial Engineering
                        and Loss Reserving
                          Core Principles

                                       Paper A
                      Time allowed: Three hours and twenty minutes




         In addition to this paper you should have available the 2002 edition of the
                  Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CM2A A2022                                               © Institute and Faculty of Actuaries
1    A fund earns an annual rate of return it, with the rate of return in any year being
     independent of the rate in any other year. The distribution of log(1 + it) is normal with
     parameters µ and σ2.

     The mean of it is 5% and the standard deviation is 3%.

     (i)     Calculate µ and σ2.                                                           [3]

     (ii)    Calculate the probability that the fund return for any year is between 1% and
             3%.                                                                          [3]

     (iii)   Comment on your answer to part (ii).                                          [1]

     A sum of £10,000 is invested into the fund.

     (iv)    Calculate the probability that the accumulated value of the fund at the end of
             3 years is less than £11,000.                                                 [2]
                                                                                     [Total 9]




CM2A A2022–2
2    (i)     Define the term ‘loss ratio’ as used in the Bornhuetter–Ferguson method for
             estimating outstanding claim amounts.                                       [1]

     The run-off triangle below shows cumulative claims incurred on a portfolio of
     insurance policies.

                                             Development year
                       Accident year       0        1         2

                           2017           864      1,011     1,072
                           2018           798        915
                           2019           820

     Annual premiums written for accident year 2019 were 1,520 and the ultimate loss
     ratio is assumed to be 92.5%. Claims can be assumed to be fully run off by the end of
     development year 2.

     (ii)    Calculate the total claims arising from accidents in 2019, using the
             Bornhuetter–Ferguson method.                                                     [5]

     1 year later, an unexpected event has resulted in higher claims than expected. The
     run-off triangle is now as shown below.

                                             Development year
                       Accident year       0        1         2

                           2018            798       915     1,320
                           2019            820     1,412
                           2020          1,016

     (iii)   Calculate the revised total claims arising from accidents in 2019, using the
             Bornhuetter–Ferguson method.                                                 [3]

     (iv)    Discuss the implications of your answer to part (iii) for the insurance
             company.                                                                         [3]
                                                                                       [Total 12]




CM2A A2022–3
3    Consider a share, St , and a derivative on the share with a value at time t of f(t, St ).

     (i)     Define, in your own words, what is represented by each of the following
             Greeks for this derivative:

             (a)     Delta

             (b)     Gamma

             (c)     Vega.
                                                                                                 [3]

     Consider another share, At , which pays no dividends. The continuously compounded
     risk-free rate is r. Let K be the fair price at time 0 of a forward contract on At
     maturing at time T.

     (ii)    State the formula for K.                                                            [1]

     Under the risk-neutral measure, Q, the share is expected to grow at the risk-free rate.

     (iii)   Demonstrate that the expected present value of the forward contract at time t
             (0 ≤ t ≤ T) under the measure Q is At – e –r(T – t) K.                      [2]

     (iv)    Calculate Delta, Gamma and Vega for the forward contract.                           [2]

     (v)     Comment on how the Greeks for the forward contract in part (iv) compare to
             the same Greeks for the underlying share.                                [2]

     (vi)    Discuss whether it would be appropriate to use a forward contract to Delta
             hedge a European call option on the share.                                  [3]
                                                                                  [Total 13]




CM2A A2022–4
4    Suppose that under the unique equivalent measure martingale measure, Q, for a term
     structure model, the Stochastic Differential Equation satisfied by the instantaneous
     interest rate r is:

                                       drt = α μ – rt dt + σdZt

     where α > 0, μ and σ are fixed parameters and under Q, Z is a standard Brownian
     Motion.

     The process X is defined by:
                                                                  t

                                      Xt = rt b T – t +               rs ds
                                                              0

                                                (1 – e–αs )
     where the function b is given by b(s) =              .
                                                    α

     The function f is given by f x, t = exp a T – t – x , where a is a differentiable
     function.

     (i)     Apply Ito’s formula to f(Xt, t).                                               [6]

             [Hint: You may use, without proof, the fact that dXt = At dt + Bt dZt where
             At = αμb(T – t), and Bt = σb(T – t).]

     (ii)    Find a differential equation that the function a must satisfy, in order for
             f(Xt, t) to be a martingale.                                                   [2]

     (iii)   Determine an additional condition on a that is necessary for a bond with unit
             payoff at time T to have a price given by the formula:
                                                               t
                                B t, T = f Xt , t exp         0 s
                                                                 r ds                       [5]
                                                                                     [Total 13]




CM2A A2022–5
5    An insurance company holds a large amount of capital and wishes to distribute some
     to policyholders using one of two possible options.

     Option A

     A sum of £500 will be invested for each policyholder in a fund in which the expected
     annual effective rate of return is 3.5% and the standard deviation of annual returns is
     2%. The annual rates of return are independent and (1 + it ) is log-normally distributed
     with parameters μ and σ2, where it is the rate of return in year t. The policyholder will
     receive the accumulated investment at the end of 15 years.

     Option B

     A sum of £500 will be invested for each policyholder for 10 years at a fixed rate of
     return of 4% p.a. effective. After 10 years, the accumulated sum will be invested for a
     further 5 years at the prevailing 5-year spot rate. This spot rate follows the probability
     density function shown below:

                                 Spot rate
                                                Probability
                                 (% p.a.)
                                     0.5           0.15
                                     1.0           0.25
                                     4.5           0.40
                                     7.0           0.20

     The policyholder will receive the accumulated investment at the end of the 15 years.

     (i)     Demonstrate that μ = 0.0342 and σ = 0.0193.                                    [4]

     (ii)    Calculate the expected value and standard deviation at the end of year 15 of:

             (a)    Option A.

             (b)    Option B.
                                                                                           [12]

     (iii)   Determine, for each of Options A and B, the probability that a policyholder’s
             accumulated investment at the end of the 15 years will be less than £775. [5]

     (iv)    Compare the relative risk of the two options.                                  [2]
                                                                                     [Total 23]




CM2A A2022–6
6    Consider a share with price S0 at time t = 0. The share will pay out a dividend of X at
     time t = 1 and again at time t = 2. The continuously compounded risk-free rate is r per
     unit of time.

     Assume that the dividend payments are reinvested at the risk-free rate.

     (i)     Demonstrate that the fair price of a forward contract on St maturing at time
             T > 2 is K = S0 – I erT , where I is the present value of the two dividends. [4]

     A share is worth $100 at time t = 0. It will pay a dividend of $5 at time t = 1 and again
     at time t = 2. The continuously compounded risk-free rate is 5% per unit of time.

     (ii)    Calculate the fair price of a forward contract on the share maturing at time
             T = 3.                                                                       [2]

     An investor takes a long position in the forward contract in part (ii) at time t = 0.
     Immediately afterwards, the proposed dividends on the underlying share are
     cancelled.

     (iii)   Discuss the implications of this for the investor.                             [2]
                                                                                      [Total 8]


7    An investor makes decisions based on the utility function U w = w – 6w2 , where w is
     the investor’s wealth in millions of dollars ($m).

     (i)     Demonstrate that the investor has both increasing absolute and relative risk
             aversion.                                                                    [3]

     The investor has $50,000 to invest over a 1-year period and has no other wealth. They
     have three options:

     A       Invest in a risk-free account. There will be no change in the value of the
             investment over 1 year.
     B       Invest in an asset that will give a 60% return over 1 year with probability 0.2,
             a 20% return with probability 0.7 and a –40% return with probability 0.1.
     C       Invest in an asset that will give a 30% return with probability 0.5 and a 20%
             return with probability 0.5.

     The investor makes no allowance for discounting when making investment decisions.
     The investor must invest the whole $50,000 in a single option.

     (ii)    Determine which option the investor should choose to maximise their
             expected utility at the end of the year.                                        [5]

     (iii)   Comment on why the investor could not use U(w) to choose from the above
             options if their initial wealth was $65,000.                            [2]
                                                                              [Total 10]




CM2A A2022–7
8    Consider a company funded entirely by debt and equity. The total value of the
     company’s assets is $40 million. It has debt with a current outstanding amount of
     $20 million, with a continuously compounded interest rate of 8% p.a. and maturity in
     7 years. Interest is added to the outstanding debt to be paid at maturity.

     The volatility of the company’s total assets is 10% p.a. The continuously compounded
     risk-free rate of interest is 2% p.a.

     (i)     Calculate the outstanding value of the debt, with interest, at maturity.      [1]

     (ii)    Calculate the current value of the company’s equity using the Merton model.
                                                                                       [5]

     (iii)   Calculate the implied probability that the company will have sufficient assets
             to repay the debt at maturity.                                               [1]

     (iv)    Demonstrate that the implied value of the company’s debt is $29.7 million to
             the nearest $0.1 million (where the total value of the company is the value of
             the equity plus the value of the debt).                                      [1]

     (v)     Explain why your answers to parts (i) and (iv) are different.                 [2]

     An analyst wishes to set up a two-state credit model for the company. The two states
     will be denoted ‘solvent’ and ‘default’ with a constant transition intensity, λ, from
     solvent to default.

     (vi)    Calculate the value of λ that gives the same probability of default at maturity
             of the debt as calculated in part (iii).                                      [2]
                                                                                    [Total 12]


                                  END OF PAPER




CM2A A2022–8



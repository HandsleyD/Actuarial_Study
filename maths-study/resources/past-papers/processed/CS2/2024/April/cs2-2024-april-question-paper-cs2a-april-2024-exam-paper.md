---
normalized_id: cs2-2024-april-question-paper-cs2a-april-2024-exam-paper
exam_code: CS2
year: 2024
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS2/CS2A/Apr24/CS2A_April_2024_Exam_Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2024-april-question-paper-cs2a-april-2024-exam-paper

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                                 17 April 2024 (am)


    Subject CS2 – Risk Modelling and Survival Analysis
                     Core Principles
                                       Paper A
                       Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CS2A A2024                                               © Institute and Faculty of Actuaries
1    Suppose that the size of an insurance claim, X, has the following density function:

                                                             /
                                          𝑓 𝑥            𝑒
                                                    √

                                  .
     for x > 0 where z =              .

     The insurance coverage pays claims subject to a deductible of £2,000 per claim.

     (i)     State the distribution of X and its parameters.                               [1]

     (ii)    Calculate the expected claim amount paid by the insurer per claim assuming
             that the claims occur at the end of the year with inflation of 20% p.a.       [10]
                                                                                     [Total 11]


2    The following table shows mortality data and graduated mortality rates of male and
     female members of a pension scheme:

                              Age          Exposed-to-risk Observed Graduated
             Gender
                           (x years)          (years)       deaths     rates
             Female           70               1,007         153     0.14227
             Female           71                978          166     0.16530
             Female           72               1,111         204     0.19205
             Female           73               1,500         326     0.22313
             Female           74               1,200         306     0.25924
             Female           75               2,001         599     0.30119
              Male            70                908          338     0.36788
              Male            71                998          439     0.42742
              Male            72               1,009         497     0.49659
              Male            73                877          508     0.57695
              Male            74                859          571     0.67032

     The data was graduated using the following parametric formula:

                                log 𝜇           𝛼       𝛽𝐼       𝛿𝑥

     where 𝐼 is an indicator variable taking the value 1 for female members and 0 for
     male members.

     (i)     Calculate the values of α, β and δ, by considering the graduated rates at ages
             70 and 71.                                                                    [4]

     (ii)    Comment on your results.                                                      [1]

     (iii)   Perform a Chi-square test at a 5% significance level to assess the overall
             appropriateness of these graduated rates for both male and female members,
             stating your null and alternative hypotheses.                              [5]

     (iv)    State two limitations of the Chi-square test in this context and in each case
             suggest an alternative test that would address that limitation.                [2]
                                                                                     [Total 12]


CS2A A2024–2
3    An analyst is trying to fit the following time series model:

                               𝑦     𝑎 𝑦        𝑎 𝑦         𝜀

     (i)     Show that the Yule–Walker equations for lags 1 and 2 are 𝜌          𝑎 𝜌      𝑎 𝜌
             and 𝜌    𝑎     𝑎 𝜌.                                                                [2]

     (ii)    Derive expressions for the autocorrelation function for lags 1 and 2.              [2]

     (iii)   Derive the values of the partial autocorrelation function, 𝜙 , for lags
             k = 1, 2, 3, 4 and 5, if 𝑎  0.3 and 𝑎        0.2.                                [6]
                                                                                       [Total 10]


4    An insurer has a portfolio of independent policies under which the number of claims
     follows a Poisson process with 300 claims expected per annum. Claim amounts are
     exponentially distributed with mean £3,000. Let S denote aggregate annual claims
     from the portfolio. A check is made for ruin only at the end of the year. The insurer
     includes a loading of 12% in the premiums for all policies. Expenses are ignored.

     (i)     Estimate the initial capital required, U, using a Normal approximation to the
             distribution of S, in order that the probability of ruin at the end of the first
             year is 5%.                                                                      [6]

     The insurer is considering purchasing proportional reinsurance from a reinsurer that
     includes a loading, β, in its reinsurance premiums. The proportion of each claim to be
     retained by the direct insurer is 80%.

     Let S1 denote the aggregate annual claims paid by the direct insurer net of reinsurance
     and 𝑈 denote the required initial capital after purchasing the reinsurance. The insurer
     uses a Normal approximation to the distribution of S1 .

     (ii)    Calculate the maximum reinsurance loading β for which U1 is less than U
             given the same 5% ruin probability.                                       [9]
                                                                                [Total 15]




CS2A A2024–3
5    Apple trees growing in an orchard are classified by the farmer in one of three states:

     F       healthy trees with fruit
     N       unhealthy trees that give no fruit
     D       dead trees.

     Every summer the farmer examines each tree and records its state. Year-to-year
     changes in tree classification are modelled using a Markov chain with the following
     1-year transition probabilities:

                                       F         N      D
                                 F    0.96      0.03   0.01
                                 N    0.24      0.73   0.03
                                 D     0         0       1

     (i)     Calculate the probability that a healthy tree will be rated unhealthy in 2 years.
                                                                                            [2]

     (ii)    Calculate the percentage of healthy trees that are dead in 2 years.            [2]

     (iii)   Calculate the probability that a healthy tree will never be rated unhealthy.   [4]

     (iv)    Explain how this model could be adapted if the farmer wanted to take into
             account the age of each tree.                                             [4]
                                                                                [Total 12]


6    X and Y are random variables with X~N(0, 1) and Y~N(0, 1). For the purposes of parts
     (i) to (iv), the dependence between X and Y is modelled using a Gumbel copula with a
     copula parameter equal to 1.5.

     (i)     Calculate P(X < −1.64, Y < −2.33).                                             [3]

     (ii)    Calculate P(X > 1.64, Y > 2.33).                                               [3]

     (iii)   Calculate P(−1.64 < X < 1.64, −2.33 < Y < 2.33).                               [3]

     (iv)    Comment briefly on the key properties of the Gumbel copula using your
             answers to parts (i) and (ii).                                           [3]
                                                                               [Total 12]




CS2A A2024–4
7    Let Xt be the zero-mean time series process defined by:

                          𝑋     𝑎𝑋         𝑏𝑒         𝑋           𝑒         𝑒

     where et is a sequence of independent and identically distributed N(0, σ2) random
     variables and a and b are positive constants with a2 + σ2 < 1.

     (i)     Demonstrate that 𝐸 𝑋 𝑒         𝜎 .                                                         [3]

     (ii)    Demonstrate that 𝐸 𝑋 𝑒              𝑎        𝑎           𝑏 𝜎       𝜎   for k ≥ 1.          [9]

     By calculating further similar expectations it can be shown that the autocorrelation
     function, ρ, of Xt is of the form:

                                     𝜌     𝐴𝑎        𝐵𝑘𝑎

     for k ≥ 1, for suitable positive constants A and B.

     Let Yt be the zero-mean time series process defined by:

                                       𝑌   𝑎𝑌             𝑒

     (iii)   Explain the similarities and differences in shape between the autocorrelation
             functions of Xt and Yt .                                                     [4]
                                                                                  [Total 16]


8    The following matrix is the generator matrix of a three-state continuous time Markov
     chain:

                                            𝑎        2        1
                                   𝐺       2.5        3       𝑏
                                            0        𝑐        0

     (i)     Calculate the values of a, b and c.                                                        [2]

     (ii)    Derive the probability that the chain will leave state 2 sometime before 0.5
             time units, given that the chain is in state 2 at time 0.                    [4]

     (iii)   Derive the transition matrix of the corresponding Markov jump chain.                       [6]

                                                                                                 [Total 12]


                                  END OF PAPER




CS2A A2024–5



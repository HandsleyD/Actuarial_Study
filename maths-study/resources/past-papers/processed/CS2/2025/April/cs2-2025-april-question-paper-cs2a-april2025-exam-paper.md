---
normalized_id: cs2-2025-april-question-paper-cs2a-april2025-exam-paper
exam_code: CS2
year: 2025
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS2/CS2A/Apr25/CS2A_April2025_Exam Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2025-april-question-paper-cs2a-april2025-exam-paper

    INSTITUTE AND FACULTY OF ACTUARIES




                                      EXAMINATION

                                              10 April 2025


      Subject CS2 – Risk Modelling and Survival Analysis
                       Core Principles
                                                 Paper A
                             Time allowed: Three hours and twenty minutes




              In addition to this paper you should have available the 2002 edition of
                   the Formulae and Tables and your own electronic calculator.


All material in this document is the copyright material of the Institute and Faculty of Actuaries. No part of this
document may be reproduced in any material form, whether by publication, translation, storage in a retrieval
system or transmission by electronic, mechanical, photocopying, recording or other means, without the prior
permission of the Institute and Faculty of Actuaries.



CS2A A2025                                                             © Institute and Faculty of Actuaries
1    A pension scheme pays an annual pension on members’ birthdays beginning on their
     65th birthday. The scheme guarantees that at least five pension payments will be
     made whether the member survives or not. The scheme actuary uses an exponential
     model for mortality up to age 70 and then uses Gompertz’ Law from age 70 onwards.
     The force of mortality below age 70 is assumed to be equal to that given by
     Gompertz’ Law at age 70.

     (i)     Write down an expression for the force of mortality from age 70 in terms of
             age, x and two constants B and c.                                           [1]

     (ii)    Calculate the values of B and c if µ75 = 0.043 and µ80 = 0.062.                [3]

     (iii)   Calculate the probability that a member aged 50 dies between the ages of 66
             and 68.                                                                    [2]

     (iv)    Calculate the expected number of additional pension payments the scheme
             will make per 1,000 members as a result of the five payments guarantee. [4]
                                                                                [Total 10]


2    Claims on a health insurance policy follow the lognormal distribution with mean
     1,000 and standard deviation 300.

     (i)     Calculate the parameters of the distribution of claims.                        [4]

     The insurer effects an individual excess of loss reinsurance treaty with a retention
     limit of 400.

     (ii)    Calculate the probability that the claim amount paid by the reinsurer is more
             than 600.                                                                    [4]

     (iii)   Comment on your answer to part (ii).                                         [1]
                                                                                    [Total 9]




CS2A A2025–2
3    An economic advisor to the government of a country has stated that income inequality
     has increased in the last decade when compared to the decade before that (the
     ‘previous decade’). The government’s economic department determines income
     inequality by looking at the ratio between the minimum threshold of the top 5% of
     earners and the average annual income. The ratio was 2.5 in the previous decade.
     Average annual income in the last decade has been 0.785 (working in units of
     $100,000).

     Income distribution is assumed to follow a Burr distribution with parameters α, λ and
     γ (as given in the IFoA Formulae and Tables). During the last decade, it is believed
     that α = 2 and γ = 2. The values of α, λ and γ are derived by working in units of
     $100,000.

     (i)     Determine λ, rounded to the nearest integer given 𝛤(1.5) = 0.886.          [4]

     (ii)    Calculate, showing all workings, the minimum income threshold of the top
             5% of earners and the income inequality ratio.                           [5]

     (iii)   Comment on the economic advisor’s statement given your answers in part (ii).
                                                                                      [1]
                                                                             [Total 10]




CS2A A2025–3
4    A medical statistician wishes to compare the treatment for a virus in the two hospitals
     in a certain city. These hospitals are called North and South. The researcher collects
     data on the number of days to recovery for patients admitted to hospital with this virus
     and fits Cox’s Proportional Hazard model with three covariates:

           z1, which is 0 for patients in North and 1 for patients in South
           z2, which measures the number of chronic illnesses patients have
           z3, which measures the number of previous times the patient has had the same
            virus in the last 10 years.

     (i)       State the lives who are represented by the baseline hazard.                   [1]

     When the model is fitted, the regression coefficients and their associated p-values are
     as follows:

                       Covariate zi            Coefficient βi   p-value
                       1. Hospital                 0.06          0.337
                       2. Chronic illnesses       −0.21          0.004
                       3. Previous times          −0.09          0.023

     (ii)      Comment on the model findings on the effect of the covariates on time to
               recovery using the model results in the table above.                          [5]

     A second, separate study finds that the probability of a patient who has no chronic
     illnesses and who has never had this virus before, is still unwell 5 days after
     admission to the South hospital, is 0.92.

     (iii)     Calculate the probability that a patient with two chronic illnesses who had this
               virus once before will still be unwell 5 days after admission to the North
               hospital, assuming that the second study result can be used to determine the
               baseline hazard.                                                              [5]
                                                                                     [Total 11]




CS2A A2025–4
5    Consider the following time series model:

                                   𝑦     𝛼𝑦       𝛽𝑒        𝑒

     where et ~ N(0,σ2) and the et are assumed to be independent for any t.

     (i)     Identify the conditions that parameters 𝛼 and 𝛽 should satisfy for the process
             to be stationary.                                                            [3]

     (ii)    Derive the expressions for the Autocorrelation Function (ACF) of this process
             assuming it is stationary.                                                 [8]

     For a particular choice of 𝛼 and 𝛽 the ACF and Partial Autocorrelation Function
     (PACF) plots of the model above are shown in the following figure:




     (iii)   State the values of α and β chosen, giving a reason for your answer for each
             one.                                                                         [4]
                                                                                  [Total 15]




CS2A A2025–5
6    The insurance regulator in a certain country rates all insurance companies each year
     based on a set of financial statements they submit to the regulator on 1 January each
     year. Each insurance company is rated on its ability to meet claims in the coming year
     with the ratings being ‘No Concern’, ‘On Watch’ and ‘Insolvent’.

     The regulator estimates that 3% of companies that were No Concern last year will
     move to On Watch and that 0.2% of companies that were No Concern will be
     Insolvent in the coming year. Of the companies On Watch last year, 35% return to No
     Concern and 1% will be Insolvent in the coming year. Once a company is Insolvent
     its business operations are assumed to cease.

     Changes in rating are modelled using a Markov chain.

     (i)     Write down the 1-year transition matrix.                                   [1]

     The regulator monitors 250 companies all of which start as being of No Concern.

     (ii)    Calculate the expected number of Insolvent insurance companies after 2 years.
                                                                                       [2]

     (iii)   Calculate the probability that an insurance company will never be On Watch.
                                                                                       [4]

     The regulator would like to improve their monitoring by considering real-time data on
     claims events.

     (iv)    Explain how the Markov chain model would need to be adapted to achieve
             this.                                                                  [4]

     (v)     Describe two methods for simulating the new model.                         [4]
                                                                                 [Total 15]




CS2A A2025–6
7    An actuary is required to model the consumer price index Qt, based on some time
     series observations: Q1, Q2, …, Q101.

     The actuary considers a stationary time series model for the corresponding log ratios
                                      Qi + 1
     r1, r2, …, r100 where ri = log            .
                                       Qi


     The numerical summaries for the ACF and PACF values for the log ratios ri are:

                                       Lag 1       Lag 2    Lag 3
                           ACF         0.522        0.156   0.046
                           PACF        0.522       −0.160   0.050

     The sample mean and sample variance for ri are 0.8 and 0.2, respectively.

     You are given the model, rt = a0 + a1rt−1 + εt where εt is a white noise process with
     mean zero and variance σ2.

     (i)     Fit the model for rt based on the information above.                            [4]

     The last three observed values of Qt are Q99 = 6.87, Q100 = 7.20 and Q101 = 7.45.

     (ii)    Derive the forecast value for r101 together with the corresponding 95%
             confidence interval.                                                            [6]

     (iii)   Derive, using the result from part (ii), the forecast value for the next
             observation, Q102, together with the corresponding 95% confidence interval.
                                                                                          [4]
                                                                                   [Total 14]




CS2A A2025–7
8    A sports club operates a membership scheme for its supporters consisting of three
     membership tiers, basic, medium and advanced, with each tier providing different
     benefits.

     Each supporter’s membership tier is determined at the beginning of the month, based
     on how many game tickets they purchased in the previous month. Supporters who
     purchase two or more game tickets in a month will be promoted to the next higher tier
     for the following month (or remain in the advanced tier). Supporters purchasing
     exactly one ticket in a month will remain in their existing tier. Supporters who do not
     purchase any tickets in a month will be demoted to the next lower tier (or remain in
     the basic tier).

     Let α, β and δ be the proportion of supporters buying zero, one or at least two tickets
     respectively, where α, β, δ > 0.

     (i)     Explain why the membership scheme can be modelled as a Markov chain. [1]

     (ii)    Write down the transition matrix for the process.                            [2]

     (iii)   Explain if the chain is:

             (a)    irreducible.                                                          [1]

             (b)    aperiodic.                                                            [1]

     Past data shows that in any given month 50% of supporters bought no tickets, 40%
     bought exactly one ticket and 10% bought at least two tickets.

     (iv)    Calculate the probability that a supporter who is currently in the medium tier
             will be in the advanced tier 3 months later.                                 [2]

     (v)     Determine the stationary distribution of this process, showing all of your
             workings.                                                                    [5]

     The cost of running the scheme per member per month is £0 for basic members, £10
     for medium members and £20 for advanced members. The club earns a profit of S per
     member for every game ticket sold before deducting the costs associated with the
     membership scheme.

     (vi)    Determine the range of values of S for which the club will be able to make an
             overall profit from the members of the scheme. You should assume that
             members in the advanced tier buy three tickets on average per month.         [4]
                                                                                   [Total 16]


                                   END OF PAPER




CS2A A2025–8


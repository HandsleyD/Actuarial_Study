---
normalized_id: cm2-2025-april-question-paper-cm2b-apri2025-exam-paper
exam_code: CM2
year: 2025
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CM2/CM2B/Apr25/CM2B_Apri2025_Exam Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm2-2025-april-question-paper-cm2b-apri2025-exam-paper

    INSTITUTE AND FACULTY OF ACTUARIES




                                       EXAMINATION

                                              22 April 2025


                      Subject CM2 – Economic Modelling
                               Core Principles
                                                  Paper B
                                Time allowed: One hour and fifty minutes




              In addition to this paper you should have available the 2002 edition of
                   the Formulae and Tables and your own electronic calculator.


All material in this document is the copyright material of the Institute and Faculty of Actuaries. No part of this
document may be reproduced in any material form, whether by publication, translation, storage in a retrieval
system or transmission by electronic, mechanical, photocopying, recording or other means, without the prior
permission of the Institute and Faculty of Actuaries.



CM2B A2025                                                             © Institute and Faculty of Actuaries
1    A surplus process, U(t), is defined as follows:

                                         U(t) = U + ct −S(t)

     where:

     U = initial surplus
     c = the rate of premium income per unit time
     S(t) = aggregate claims up to and including time t.

     An insurance company is using simulation to calculate its probability of ruin in finite
     discrete time. The company wishes to model the surplus process U(t) using discrete
     time intervals of 1 month, where t = time in months. Claims that occur after time t but
     up to and including time t + 1 will therefore be included in U(t + 1) but not U(t).

     The insurer assumes that the claim number process, N(t), is a Poisson process with
     parameter λ, and that the claim amounts, Xi, follow a Gamma distribution with
     parameters α and and β. The aggregate claims process is therefore


                                           𝑆 𝑡           𝑋


     The ‘Q1 Data’ worksheet shows the parameters and data for the probability
     distributions and surplus process, together with 100 simulations of claim numbers,
     claim amounts and time intervals between claims. For simulations 6 to 100 you have
     also been given the surplus process, U(t), for times t = 0 to 12.

     (i)      Calculate using the assumed distribution:

              (a)    the probability that N(t) ≤ 2.

              (b)    the probability that, after two claims have been received, there are no
                     claims in the following 3 months.
                                                                                            [4]

     The assumed distribution has the following properties:

                                          Mean        Standard deviation
                     Claim numbers         0.5              0.707
                     Claim amounts        100               6.325

     (ii)     Calculate using the simulations:

              (a)    the mean and standard deviation of the claim number process.

              (b)    the mean and standard deviation of the claim amounts.
                                                                                           [4]

     (iii)    Comment on how your calculated answers to part (ii) compare to the figures
              for the assumed distribution.                                             [3]



CM2B A2025–2
     (iv)    Show that U(12) is −68 for simulation 59.                                     [4]

     (v)     Calculate the surplus process for times t = 0 to 12 for simulations 1 to 5.   [9]

     (vi)    Calculate the probability of ruin by the end of time 12 using simulations
             1 to 100.                                                                     [2]

     (vii)   Explain, without performing any further calculations, whether the following
             parameter changes would be likely to increase or decrease the probability of
             ruin:

             (a)    a reduction in β

             (b)    an increase in c

             (c)    an increase in λ.
                                                                                           [6]
                                                                                    [Total 32]




CM2B A2025–3
2    A toy manufacturing company, Toys Ltd, is considering investing in three competing
     companies, A, B and C, located in Country X. The monthly share prices of each
     company and the whole market in Country X for the last 48 months are provided in
     the ‘Q2 Data’ worksheet.

     The Chief Executive Officer (CEO) of Toys Ltd has asked a consultant to investigate
     the variability of the share prices of the competing companies. In the report, the
     consultant plans to use the following single-index model for the return on each share,
     calibrated using the data from the last 48 months:

                                          𝑆,        1    𝑅, 𝑆,

                                        𝑅,      𝛼    𝛽𝑅 ,       𝜀,

     where:

           Si, j is the share price of security i at time j.
           Ri, j is the return on security i from time j to time j+1.
           αi and βi are constants.
           RM, j is the return on the market from time j to time j+1.
           εi, j is a random variable representing the component of Ri, j not related to the
            market.

     The consultant plans to assume that the error terms εi, j have means of zero and
     standard deviations as follows:

           SD(εA, j) = 8.1%
           SD(εB, j) = 21.8%
           SD(εC, j) = 12.2%.

     (i)        Calculate the monthly returns Ri, j for each company and for the whole market.
                                                                                           [4]

     (ii)       Calculate, for the whole period covered by the data:

                (a)     the mean return on the market.

                (b)     the variance of the return on the market.
                                                                                                 [2]

     (iii)      Estimate, for each company, based on the consultant’s model:

                (a)     the monthly Beta of the return on the shares.

                (b)     the monthly Alpha of the return on the shares.
                                                                                                [12]




CM2B A2025–4
     (iv)    Estimate, based on the consultant’s model:

             (a)    the systematic risk of the return on each company’s shares.

             (b)    the specific risk of the return on each company’s shares.

             (c)    the total risk of the return on each company’s shares (where this is
                    defined as the sum of specific risk and systematic risk).

             (d)    the expected return on each company’s shares.
                                                                                           [10]

     Toys Ltd has $100 million to invest and the CEO has proposed that this amount is
     invested entirely in Company A.

     (v)     Comment on whether the CEO’s proposal is appropriate or not.                   [6]

     The CEO decides to split their investment. They consider the risk of Company B to be
     too high and therefore wish to split the investment between Company A and
     Company C, with a target expected return of 2.5% per month.

     (vi)    Calculate:

             (a)    the amount the CEO should invest in each of Company A and
                    Company C.

             (b)    the expected portfolio variance given in your answer to part (vi)(a).
                                                                                            [8]

     (vii)   Comment on the appropriateness of excluding Company B from the portfolio,
             given your answers to part (vi).                                       [4]
                                                                            [Total 46]




CM2B A2025–5
3    An insurer plans to offer a newly-launched product that covers the cost of dental
     treatment. Treatment cost is $50 per visit.

     The insurer plans to write just one policy in the first year. It estimates that the number
     of visits by the policyholder in a single year will follow a Poisson distribution with
     parameter 1.145. The relevant Poisson probabilities are given in the ‘Q3 Data’
     worksheet.

     The insurer is in the process of determining the premium for the coming year. The
     table below gives the utility function and initial wealth for the insurer and the
     policyholder:

                                      Utility function    Initial wealth
                                          (U(w))                (w)
                     Insurer                w0.5             $16,000
                     Policyholder      w − 0.0001w2           $1,000

     (i)     (a)    Calculate the expected claim cost to the insurer for the next year.

             (b)    Comment on the likely minimum premium the insurer may charge
                    based on the expected claim cost.
                                                                                               [5]

     (ii)    Calculate, for each of the insurer and the policyholder at the end of the first
             year without any insurance in force:

             (a)    the utility of wealth for each number of visits ranging from 0 to 10
                    inclusive.

             (b)    the expected utility of wealth.
                                                                                               [5]

     (iii)   Determine, by calculating the expected utility for each of the insurer and the
             policyholder at the end of the first year with insurance in force:

             (a)    the minimum premium that the insurer will be ready to accept.

             (b)    the maximum premium that the policyholder will be willing to pay.
                                                                                     [10]

     (iv)    Recommend, with reasons, the premium that the insurer could charge for this
             policy.                                                                   [2]
                                                                               [Total 22]


                                    END OF PAPER




CM2B A2025–6


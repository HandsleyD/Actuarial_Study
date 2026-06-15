---
normalized_id: cs2-2021-september-question-paper-cs2a-221-exam-clean-proof
exam_code: CS2
year: 2021
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS2/CS2A/Sep21/CS2A_221_EXAM_Clean Proof.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2021-september-question-paper-cs2a-221-exam-clean-proof

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                             22 September 2021 (am)


    Subject CS2 – Risk Modelling and Survival Analysis
                     Core Principles
                                        Paper A
                       Time allowed: Three hours and twenty minutes




         In addition to this paper you should have available the 2002 edition of the
                  Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.



CS2A S2021                                               © Institute and Faculty of Actuaries
1    An Analyst is assessing the risks of an equity portfolio and wishes to estimate the
     probability that the portfolio will incur at least one daily loss exceeding 5% next
     month.

     Explain how a generalised extreme value distribution and the block maxima method
     could be used to estimate this probability.                                     [3]


2    Consider the illness-death continuous-time Markov model with the following four
     states:

           State H: healthy
           State SR: sick due to recoverable causes
           State SNR: sick due to non-recoverable causes
           State D: dead.

     (i)       Derive, by first writing down its likelihood function, the maximum likelihood
               estimator of the transition rate from State H to State SNR, defining each of the
               terms you use.                                                                [6]

     (ii)      State the asymptotic distribution of the estimator derived in part (i).         [2]
                                                                                         [Total 8]


3    Consider the following time series process:

                                         Yt = et + βet – 1

     where et is a white noise process with variance σ2 .

     (i)       Write down the autocorrelation function {ρk }, of Yt , for k ≥ 0.               [2]

     (ii)      Determine the possible values of β for which the value of the partial
                                                             1
               autocorrelation function at lag 2, ϕ2 = – .                                     [4]
                                                             3

     (iii)     Comment on the practical suitability of this time series process for the values
               of β calculated in part (ii).                                                 [2]
                                                                                       [Total 8]




CS2A S2021–2
4    An Actuary has graduated the mortality experience of a population aged 55 to 65
     years using the following formula:

                                        ax + bexp(cx) if x < 65
                                 μx =
                                        d             if x = 65

     where a, b, c and d are constants and x is age in years.

     The mortality experience data and the graduated rates calculated by the Actuary are
     shown in the table below. All data have been collated between 1 January 2020 and
     31 December 2020 inclusive on an ‘age nearest birthday’ basis:

                        Exposed-to-risk
            Age x                           Observed deaths      Graduated rates
                           (years)
               55           2,737                   53               0.02094
               56           2,610                   57               0.02357
               57           2,649                   86               0.02636
               58           2,611                   77               0.02930
               59           2,449                   74               0.03238
               60           2,213                   96               0.03555
               61           2,025                   79               0.03880
               62           1,969                   68               0.04208
               63           1,900                   78               0.04537
               64           1,803                   83               0.04860
               65           1,736                  105                  y

     Let y be the graduated rate at age 65 and let the null hypothesis be that the graduated
     rates are the true rates underlying the observed data.

     Determine the range of values that y needs to take so that there is insufficient
     evidence, at the 97.5% confidence level, to reject the null hypothesis under a
     chi-square goodness-of-fit test.                                                      [9]




CS2A S2021–3
5    A study was undertaken into survival rates following major heart surgery. Patients
     who underwent this surgery were monitored from the date of surgery until whichever
     of the following events occurred first:

           they died
           they left the hospital where the surgery was carried out, or
           a period of 30 days had elapsed.

     (i)       State, with reasons, two forms of censoring that are present in this study and
               one form of censoring that is not present.                                    [3]

     The Analyst collating the results calculated the Nelson–Aalen estimate of the survival
     function, S(t), as follows:

                                  t (days)               S(t)
                                  0≤t<5                1.0000
                                 5 ≤ t < 17            0.9001
                                 17 ≤ t < 25           0.8456
                                   25 ≤ t              0.7157

     (ii)      State, using the Nelson–Aalen estimate, the probability of survival for 20 days
               after the surgery.                                                           [1]

     The Analyst also wishes to calculate the Kaplan–Meier estimate of the survival function.

     (iii)     Determine the Kaplan–Meier estimate of the survival function.                  [5]
                                                                                        [Total 9]


6    A home insurance company’s total monthly claim amounts have a mean of 250 and a
     standard deviation of 300. The company has estimated that it will face insolvency if
     the total monthly claim amounts reach or exceed 1,000 in any given month.

     (i)       Determine the probability that the company faces insolvency in any given
               month if the company assumes that total monthly claim amounts follow the
               Normal distribution.                                                     [2]

     (ii)      Determine the revised value of the probability in part (i) if the company
               assumes that total monthly claim amounts follow the two-parameter Pareto
               distribution.                                                             [4]

     (iii)     Explain why the Normal distribution is unlikely to be a good fit for the
               distribution of the total monthly claim amounts for this company.              [3]

     An Analyst has determined that the two-parameter Pareto distribution is the best fit
     for the distribution of the total monthly claim amounts for this company.

     (iv)      Outline, using the results from parts (i) and (ii), the potential consequences of
               the company assuming that the total monthly claim amounts follow the
               Normal distribution rather than the two-parameter Pareto distribution.          [2]
                                                                                        [Total 11]


CS2A S2021–4
7    An Actuary is considering using the following process to model a seasonal data set:

                                1 – B3 1 – α + β B + αβB2 Xt = et

     where B is the backwards shift operator and et is a white noise process with variance
     σ2 .

     A seasonal difference series is defined as follows:

                                           Yt = Xt – Xt – 3

     (i)     Express the equation for the original process Xt in terms of the seasonal
             difference series, Yt , and the backwards shift operator B.                      [1]

     (ii)    Determine the range of values of α and β for which the seasonal difference
             series, Yt , is stationary.                                                [2]

     Let γk and ρk denote the values at lag k of the autocovariance and autocorrelation
     functions, respectively, of the seasonal difference series, Yt . The first Yule–Walker
     equation for Yt may be written as follows:

                                                              σ2
                                     1 – α + β ρ1 + αβρ2 =
                                                              γ0

     (iii)   Write down the second and third Yule–Walker equations for Yt in terms of ρ1
             and ρ2 .                                                                  [2]

     The Actuary has observed the following sample autocorrelation values for the series
     Yt : ρ1 = 0.5 and ρ2 = 0.2.

     (iv)    Estimate, using the equations in part (iii), the parameters α and β based on this
             information.                                                                  [5]

             [Hint: let M = α + β and N = αβ and use the formula for finding the roots of a
             quadratic equation.]

     (v)     Determine the values of the one-step ahead and two-step ahead forecasts, x550
             and x551 , respectively, based on the parameters estimated in part (iv) and the
             observed values x1 , x2 , …, x549 of Xt .                                      [4]
                                                                                     [Total 14]




CS2A S2021–5
8    A telecommunications company is modelling the capacity requirements for its mobile
     phone network. It assumes that if a customer is not currently on a call (‘offline’), the
     probability of initiating a call in the short time interval [t, t + dt] is 0.25dt + o(dt). If
     the customer is currently on a call (‘online’), then it assumes that the probability of
     ending the call in the time interval [t, t + dt] is given by 0.75dt + o(dt).

     The following probabilities are defined:

     POFF ON (t) = Probability that the customer is online at time t, given that they were
                   offline at time 0

     POFF OFF (t) = Probability that the customer is offline at time t, given that they were
                    offline at time 0

     PON OFF (t) = Probability that the customer is offline at time t, given that they were
                   online at time 0

     PON ON (t) = Probability that the customer is online at time t, given that they were
                  online at time 0.

     (i)     Explain why the status of an individual customer can be considered as a
             Markov jump process.                                                              [2]
                                                                   d
     (ii)    Write down Kolmogorov’s forward equation for               POFF OFF (t).          [2]
                                                                   dt

     (iii)   Solve the equation in part (ii) to obtain a formula for POFF OFF (t).             [7]

     (iv)    Derive an expression, in terms of t, for the expected proportion of time spent
             online over the period [0, t], given that the customer is offline at time 0.    [7]
                                                                                      [Total 18]




CS2A S2021–6
9    In a small country, there are only four authorised car insurance companies A, B, C
     and D. All car owners take out car insurance from an authorised insurance company.
     All policies provide cover for a period of 1 calendar year.

     The probabilities of car owners transferring between the four companies at the end of
     each year are believed to follow a Markov chain with the following transition matrix:

                     A     1 – 2α – α2       α        α      α2
                                         1        1
                     B⎛        α             –α       –α     α    ⎞
                                         2        2
                       ⎜                 1        1               ⎟
                     C         α             –α       –α     α
                                         2        2
                     D⎝        0             α        α    1 – 2α ⎠

     for some parameter α.

     (i)     Determine the range of values of α for which this is a valid transition matrix.
                                                                                           [4]

     (ii)    Explain whether the Markov chain is irreducible, including whether this
             depends on the value of α.                                                      [3]

     The value of α has been estimated as 0.2.

     Mary has just bought her policy from Company D for the first time.

     (iii)   Determine the probability that Mary will be covered by Company D for at
             least 4 years before she transfers to another insurance company.        [3]

     James took out a policy with Company A in January 2018. Sadly, James’ car was
     stolen on 23 December 2020.

     (iv)    Determine the probability that a different company, other than Company A,
             covers James’ car at the time it was stolen.                              [3]

     Company A makes an offer to buy Company D. It bases its purchase price on the
     assumption that car owners who would previously have purchased policies from
     Company A or Company D would now buy from the combined company, to be called
     ADDA.

     (v)     Write down the transition matrix that will apply after the takeover if
             Company A’s assumption about car owners’ behaviour is correct.                  [2]

     (vi)    Comment on the appropriateness of Company A’s assumption.                       [5]
                                                                                      [Total 20]


                                   END OF PAPER




CS2A S2021–7



---
normalized_id: cs2-2022-september-question-paper-cs2a-september22-exam
exam_code: CS2
year: 2022
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS2/CS2A/Sep22/CS2A_September22_EXAM.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2022-september-question-paper-cs2a-september22-exam

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                             19 September 2022 (am)


    Subject CS2 – Risk Modelling and Survival Analysis
                     Core Principles
                                       Paper A
                       Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CS2A S2022                                               © Institute and Faculty of Actuaries
1    A leading smartphone manufacturer has developed fast chargers for its mobile
     phones. Currently, the manufacturer is testing the life of batteries using such chargers.
     ‘Battery life’ is defined as ‘the number of times the battery can be charged using such
     chargers’. It has conducted many tests in its laboratories and has found the following:

           70% of the batteries survived 400 charges.
           50% of the batteries survived 810 charges.

     Calculate, with suitable workings, the number of batteries that would survive 1,000
     charges if battery life follows a Weibull distribution.                             [7]


2    Consider the time series process, Xt , given by:
                                                1
                               Xt = aXt – 1 + 2 Xt – 2 + et + bet – 1

     where et is a sequence of independent and identically distributed N(0, 2) random
     variables.

     Determine the values of the parameters a and b such that Xt is:

     (i)       stationary.                                                                   [5]

     (ii)      invertible.                                                                   [2]

     (iii)     I(1).                                                                         [2]
                                                                                       [Total 9]


3    Consider the following stochastic process:
                                                ∞

                                         Xt =         0.5 et – i
                                                         i


                                                i=0

     where ej is a sequence of independent and identically distributed random variables
     with a mean of zero and variance σ2 , for j = 0, ± 1, ± 2, …

     (i)       Determine whether Xt is stationary and satisfies the Markov property.        [4]

     (ii)      Determine whether your conclusions from part (i) also apply to the process
               Yt = Xt – 0.3Xt – 1 .                                                      [6]
                                                                                   [Total 10]




CS2A S2022–2
4    When considering rates of mortality, actuaries generally use the initial rate of
     mortality, qx , whereas demographers often use the central rate of mortality, mx . In
     order to estimate mx for each age x, a demographer collects the following data:

                  Age at last     Observed number       Central exposed to
                   birthday          of deaths            risk in years
                      60                 34                   4,267
                      61                 36                   4,037
                      62                 42                   4,269
                      63                 47                   4,299
                      64                 46                   3,929

     (i)     Explain the difference between the two definitions of rate of mortality, stating
             which rate has the higher value at a given age, x.                            [2]

     (ii)    Estimate mx for x = 60, 61, 62, 63 and 64 years using the data above.           [2]

     (iii)   A pension scheme starts paying pensions on a member’s 65th birthday.
             Calculate the probability that the pension scheme member aged 60 exact will
             start receiving a pension, using the estimates in part (ii) above and carefully
             explaining all the steps and assumptions needed.                                [4]
                                                                                      [Total 8]




CS2A S2022–3
5    An insurance company has graduated the experience of one block of its life business
     using the following quadratic-Gompertz formula:

                                 μx = exp(a0 + a1 x + a2 x2 )

     where a0 , a1 and a2 are constants and x is age in years.

     The data used for this graduation exercise, together with the graduated rates, are
     shown in the table below. All data have been collated between 1 January 2018 and
     31 December 2018 inclusive on an ‘age nearest birthday’ basis.

                            Exposed to risk       Death         Graduated
                    Age
                               (years)            counts          rates
                     60        11,362               80           0.0069
                     61        11,086               85           0.0077
                     62        10,816              100           0.0085
                     63        10,530              105           0.0095
                     64        10,301              108           0.0105
                     65        10,233              117           0.0115
                     66         9,970              110           0.0126
                     67         9,708              131           0.0138
                     68         9,667              145           0.015
                     69         9,807              140           0.0163

     (i)    Perform a Chi-square test to assess the overall goodness of fit of this
            graduation, stating the null and alternative hypotheses.                        [5]

     The company would like to extend the graduation to age 70. The death count and
     exposed to risk at age 70 are 150 deaths and 10,000 years, respectively.

     Let μ70 be the graduated rate at age 70, and let the null and alternative hypotheses be
     the same as in part (i), except that the age range is now from 60 to 70.

     (ii)   Determine, using the data in the table above, the condition that μ70 would need
            to fulfil in order for there to be insufficient evidence, at the 5% significance
            level, to reject the null hypothesis under the cumulative deviations test.       [6]
                                                                                      [Total 11]




CS2A S2022–4
6    Consider the zero-mean MA(1) process, Xt , given by:

                                       Xt = et + bet – 1

     where et is a sequence of independent and identically distributed N(0, 2) random
     variables and |b| ≤ 1.

     A sample xt , t = 1, 2, …, T, is taken, which is believed to be from Xt , and it is assumed
     that e0 = 0.

     (i)     Demonstrate that the log-likelihood function is given by:

                                                            T           t–1                  2
                                  1                 1                               i
             L b, σ2 = constant – 2 T log σ2      – 2            xt +         (– b) xt – i       .
                                                   2σ
                                                           t=1          i=1
                                                                                                            [6]

     You are given that the maximum likelihood estimator of b, b, obtained by setting the
     partial derivatives of L to zero satisfies, under appropriate assumptions, the following:

                                            b
                                                2 = r1 ,
                                         1+b
     where r1 is the sample autocorrelation of xt at lag 1.

     (ii)    Determine b, considering separately the cases:

                                  –12 ≤ r1 < 0, r1 = 0 and 0 < r1 ≤ 12.
                                                                                                            [4]

     (iii)   Explain what conclusion should be drawn if |r1 | > 12.                                         [3]
                                                                                                     [Total 13]




CS2A S2022–5
7    An insurer writes three different classes of insurance business: X, Y and Z. The
     classes have the following total annual claims distributions:

     X ~ Exp(0.08)
     Y ~ Normal(10, 22)
     Z ~ Normal(20, 32)

     The insurer models the level of dependency between the classes’ total claim amounts
     using a Clayton (α = 2) copula.

     (i)     Calculate the probability, using the Clayton (2) copula, that both X < 3 and
             Y < 8.                                                                       [3]

     (ii)    Calculate the probability, using the Clayton (2) copula, that all of the
             following occur: X < 3, Y < 8 and Z < 20.                                         [3]

     (iii)   Calculate the probability, using the Clayton (2) copula, that both X > 10 and
             Y > 12.                                                                      [3]

     A student has noted that copulas are a useful modelling tool as ‘they allow us to
     model different degrees of dependency’.

     (iv)    Comment on this statement.                                                        [3]
                                                                                        [Total 12]


8    A combined 1-year life and health insurance policy pays £10,000 on death within the
     year and £15,000 on diagnosis of critical illness within the same term. Once the
     critical illness benefit is paid, no further benefits are payable. On 1st January 2021,
     the insurance company had 887 policies in force for people aged 56 at last birthday, of
     which 849 were still active at the end of the year. During 2021, the insurance
     company paid £115,000 in claims to policyholders aged 56 at last birthday, of which
     £75,000 were for critical illness.

     (i)     Draw a diagram of a three-state model that could be used to evaluate
             premiums for this policy, fully labelling all states and transition intensities. [3]

     (ii)    Beginning with the likelihood function for the model from part (i) above,
             derive and then solve equations for the maximum likelihood estimates of the
             transition intensities, stating any assumptions you make.                  [5]

     (iii)   Estimate the expected cost of critical illness benefit for a new policyholder
             aged 56 exact.                                                                [3]

     (iv)    Explain why the insurance company should be cautious about using the
             estimate from part (iii) above in premium calculations.                  [4]
                                                                               [Total 15]




CS2A S2022–6
9    An airline company is concerned about potential financial losses due to currency
     movements in various countries. An analyst has been hired to model daily currency
     movements in these economies. The objective is to understand the likelihood of
     extreme currency movements that may have major financial consequences for the
     airline.

     The analyst has suggested fitting several types of standard statistical distributions to
     the entire datasets, using maximum likelihood estimation, including Normal, Gamma,
     Pareto and lognormal. Estimates can then be made regarding probabilities of extreme
     currency movements based on the chosen model.

     (i)       Discuss the problems with this approach.                                     [4]

     The analyst proceeds to use the Generalised Pareto Distribution (GPD) to assess only
     extreme daily losses. For this analysis, currency losses were treated as positive, and
     gains were treated as negative.

     A threshold was set at daily losses of +2.2%, resulting in a data subset of 150
     ‘extreme’ values from the 3,000 original data points to be used in the extreme value
     analysis. The following results were obtained from the subsequent analysis:

           Beta = 0.009785.
           Gamma = 5.417 (shape).

     (ii)      Calculate G(0.02) using the above parameter values, where G is the
               distribution function of the GPD, and write down its meaning.                [3]

     (iii)     Estimate the probability that the currency losses tomorrow exceed 5%, based
               on this GPD model.                                                        [3]

     A Normal distribution was also fitted to the data. The best fitting Normal distribution
     was determined to be N(0, 0.0142). However, currency returns are generally
     considered to exhibit leptokurtic behaviour.

     (iv)      Calculate the probability that daily losses exceed 5% using this Normal
               distribution, and comment on the results.                                    [3]

     (v)       Discuss further investigations the analyst should proceed with, including any
               problems with using extreme value theory and/or the GPD in this case.        [2]
                                                                                     [Total 15]


                                   END OF PAPER




CS2A S2022–7


---
normalized_id: cs2-2020-september-examiner-report-iandf-cs2a-202009-examiners-report
exam_code: CS2
year: 2020
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS2/CS2A/Sep20/IandF_CS2A_202009_Examiners_Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2020-september-examiner-report-iandf-cs2a-202009-examiners-report

       INSTITUTE AND FACULTY OF ACTUARIES




                         EXAMINERS’ REPORT
                                    September 2020

    Subject CS2A –Risk Modelling and Survival Analysis
                     Core Principles


Introduction

The Examiners’ Report is written by the Chief Examiner with the aim of helping candidates,
both those who are sitting the examination for the first time and using past papers as a
revision aid and also those who have previously failed the subject.

The Examiners are charged by Council with examining the published syllabus. The
Examiners have access to the Core Reading, which is designed to interpret the syllabus, and
will generally base questions around it but are not required to examine the content of Core
Reading specifically or exclusively.

For numerical questions the Examiners’ preferred approach to the solution is reproduced in
this report; other valid approaches are given appropriate credit. For essay-style questions,
particularly the open-ended questions in the later subjects, the report may contain more points
than the Examiners will expect from a solution that scores full marks.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.


Mike Hammer
Chair of the Board of Examiners
December 2020



                                                            Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


   A. General comments on the aims of this subject and how it is marked

   1. The aim of the Risk Modelling and Survival Analysis Core Principles subject is to
      provide a grounding in mathematical and statistical modelling techniques that are of
      particular relevance to actuarial work, including stochastic processes and survival
      models.

   2. Some of the questions in this paper admit alternative solutions from those presented in
      this report, or different ways in which the provided answer can be determined. All
      mathematically correct and valid alternative solutions received credit as appropriate.

   3. In cases where the same error was carried forward to later parts of the answer,
      candidates were given full credit for the later parts.

   4. In higher order skills questions, where comments were required, well-reasoned
      comments that differed from those provided in the solutions also received credit as
      appropriate.

   5. As a change to previous practice, this diet of the exam was delivered as an open-book,
      online examination where candidates submitted their typed solutions in Word
      documents. As such, a number of new marking principles were established and
      communicated to candidates both prior to the exam taking place and in the candidate
      instructions provided with the exam paper. Candidates are advised to take careful
      note of all instructions that are provided with the exam in order to maximise their
      performance in future CS2A examinations. The instructions applicable to this diet
      can be found at the beginning of the solutions contained within this document.


   B. Comments on candidates’ performance in this diet of the examination.

   1. Performance was generally satisfactory, with most candidates demonstrating a
      reasonable understanding and application of core topics in mathematical and
      statistical modelling techniques.

   2. Topics that were not particularly well-answered in this paper include Copulas (e.g.
      Q1), Extreme Value Theory (e.g. Q2) and Informative/Non-Informative Censoring
      (e.g. Q4(i)), despite these being examined through reasonably straightforward
      application questions. Candidates are reminded that it is very important to be familiar
      with all aspects of the syllabus.

   3. It is important that candidates heed all of the instructions provided with the
      examination paper. A number of candidates lost marks because they did not include
      workings for numerical questions despite being forewarned about this in the
      instructions.

   4. Higher order skills questions were generally answered poorly. Candidates should
      recognise that these are generally the questions which differentiate those candidates
      with a good grasp and understanding of the subject.




CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


   5. The comments that follow the questions in the marking schedule below, concentrate
      on areas where candidates could have improved their performance. Candidates
      approaching the subject for the first time are advised to concentrate their revision in
      these areas.


   C. Pass Mark

       The combined Pass Mark for the CS2 exam was 56.
       1,363 presented themselves and 476 passed.




CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


Solutions for Subject CS2 Paper A September 2020

Please note that the following principles apply to the CS2A solutions. These principles were
set out in the instructions provided to candidates along with the examination paper:

   1. Candidates DO NOT need to include any workings for multiple-choice questions.
      One, and only one, answer option should be included in the Word document for each
      multiple-choice question. Partial marks will NOT be awarded for candidates’
      workings.

   2. Candidates MUST include workings for all numerical questions that are not multiple-
      choice. A correct answer will NOT score full marks unless workings are also shown.

   3. Candidates should type their workings and answers into the Word document using
      standard keyboard typing. Candidates DO NOT need to use notation that requires
      specialised equation editing e.g. the “Equation Editor” functionality in Word.

   4. Candidates MUST type all their workings and answers into the Word document.
      Calculations pasted in from another application (e.g. Excel or R) will NOT be
      accepted.




CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


1
    (i)      When rho = 0, C(u_1, u_2) = u_1 * u_2

             Therefore: C(1, 1) = 1 * 1 = 1.                                                           [1]

    (ii)     C(1, 0.2) = 1 * 0.2 = 0.2.                                                                [1]

    (iii)    C(0.2, 0.2) = 0.2 * 0.2 = 0.04.                                                           [1]

    (iv)     When rho = 1, C(u_1, u_2) = min(u_1, u_2).

             Therefore: C(1, 1) = min(1,1) = 1 and C(1, 0.2) = min(1,0.2) = 0.2.

             Hence (i) and (ii) will remain the same.                                                  [1]

             However, (iii) will be different; C(0.2, 0.2) = min(0.2,0.2) = 0.2.                       [1]

    (v)      The Gaussian copula has zero upper tail dependence (for rho < 1)…                         [½]

             …whereas the Gumbel copula has positive upper tail dependence (for alpha > 1).
                                                                                        [½]

             Given that the analysis suggests that the Gumbel copula is a better fit…                  [½]

             …by using the Gaussian copula, the insurer is likely to be underestimating the
             probability/risk of multiple extreme claims occurring simultaneously/in tandem.
                                                                                            [½]

             The insurer’s solvency could be threatened if this occurs in practice and the
             insurer has not made adequate provision for such events.                                  [1]

                                                                                                 [Total 8]

This question was one of the least well-answered in the entire paper. Candidates are advised
to be familiar with all aspects of the syllabus.

Parts (i) to (iii) were poorly answered with many candidates unsuccessfully attempting to use
the integral form of the bivariate Gaussian copula to derive their answers.

Part (iv) was very poorly answered. Some candidates lost marks because they correctly stated
that the co-monotonic copula applied here but did not use its formula to derive the new values
of the copula functions.

In parts (i) to (iv), a number of candidates additionally lost marks for not showing their
workings.

Part (v) was also very poorly answered. Many candidates only discussed one of the two
copulas which restricted the number of marks they could be awarded. Candidates are
reminded to take note of the command verbs used in higher order skills questions to maximise
their performance in future exams.

CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


2
    (i)      By fitting a distribution across the whole data range, the single distribution chosen
             may be a good overall fit of the data but could be a poor fit where there is little
             data, e.g. in the tails which are of primary concern.                               [1]

             EVT can be useful where we are particularly interested in the tail of a distribution
             and need to model that part accurately.                                           [1]


    (ii)     P(X > 70 given X > 50) = 1 - G(20), where 20 = 70 - 50.                                   [1]

             EITHER:

             Using the GPD CDF; G(20) = 1 – (1+20/(15*3)) ^(-3) = 0.668184

             Therefore P(X – 50 <= 20 given X > 50) = 0.668184.

             So, P(X > 70 given X > 50) = 1 - 0.668184 = 0.331816.


             OR:

             P(X > 70 given X > 50) = [(gamma * beta) / (gamma * beta + 20)]^gamma

                                       = [(3 * 15) / (3 * 15 + 20)]^3

                                       = 0.331816.
                                                                                                       [2]

             The sports scientist has selected (150 / 3,000) = 5% of the data.                         [½]

             Given that only 5% exceed the threshold;

             P(X > 70) = P(X > 70 given X > 50) * P(X > 50)

                        = 0.332 * 0.05 = 0.016591 = 1.6591%                                            [½]


    (iii)    There are a number of limitations with this analysis:

             Not all throws are independent.

             OR:

             An example of a source of non-independence, e.g. each thrower will make
             multiple throws.
                                                                                                       [1]




CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report




             Not all throws are identically distributed.

             OR:

             An example of a source of non-identical distribution, e.g. changing weather
             conditions, different abilities of throwers.
                                                                                                       [1]

             There could be different throwers next year, compared to the year analysed.               [1]

             There could be trends in the distances thrown over the years (e.g. improvements in
             training techniques, improvements in javelin technology (e.g. lighter javelins)) .
                                                                                                [1]

             Changes to rules and regulations might influence the distances thrown.                    [1]

             Alternative thresholds should be analysed.                                                [1]

             The sample size is not particularly large.                                                [1]

             The generalized Pareto distribution is a limiting distribution and the actual
             distribution of the exceedances over any finite threshold will be different.              [1]

                                                                  [Marks available 8, maximum 4]
                                                                                        [Total 10]

 Overall, this question was the least well-answered question in the whole paper. Candidates
 are advised to be familiar with all aspects of the syllabus.

 Part (i) was well-answered, although in a number of cases, candidates’ answers were often
 vague and lacking detail despite this being a reasonably straightforward knowledge
 question.

 Part (ii) was very poorly answered. The two most common mistakes were for candidates to
 use 70 in the GPD CDF rather than 20 and also for candidates to forget to calculate the
 unconditional probability of X > 70.

 Part (iii) was also very poorly answered with most candidates focusing their comments
 solely on the limitations concerning the threshold used rather than expanding out their
 comments to the wider limitations. Alternative comments that were clear, distinct and
 relevant to the context of the question were also awarded credit.




CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


3
(i)      We have:
                            (1 – 1.5B + 0.5B^2)Y_t = (1 + 0.7B)e_t                                                    [1]

         so that:
                            (1 – B)(1 – 0.5B)Y_t = (1 + 0.7B)e_t                                                      [1]


(ii)     ARIMA(1, 1, 1), i.e. p = 1, d = 1, q = 1                                                                     [1]


(iii)   Answer: A.                                                                                                    [2]

        ∇𝑌𝑌𝑡𝑡 = 0.5 ∇𝑌𝑌𝑡𝑡−1 + 𝑒𝑒𝑡𝑡 + 0.7 𝑒𝑒𝑡𝑡−1

        Cov(𝑒𝑒𝑡𝑡 , ∇𝑌𝑌𝑡𝑡 ) = 0.5 Cov(𝑒𝑒𝑡𝑡 , ∇𝑌𝑌𝑡𝑡−1 ) + Cov(𝑒𝑒𝑡𝑡 , 𝑒𝑒𝑡𝑡 ) + 0.7 Cov(𝑒𝑒𝑡𝑡 , 𝑒𝑒𝑡𝑡−1 ) = 𝜎𝜎 2

        since 𝑒𝑒𝑡𝑡 is independent of both 𝑒𝑒𝑡𝑡−1 and ∇𝑌𝑌𝑡𝑡−1 .

        Cov(𝑒𝑒𝑡𝑡−1 , ∇𝑌𝑌𝑡𝑡 ) = 0.5 Cov(𝑒𝑒𝑡𝑡−1 , ∇𝑌𝑌𝑡𝑡−1 ) + Cov(𝑒𝑒𝑡𝑡−1 , 𝑒𝑒𝑡𝑡 ) + 0.7 Cov(𝑒𝑒𝑡𝑡−1 , 𝑒𝑒𝑡𝑡−1 )

                             = (0.5 + 0.7)𝜎𝜎 2

                                       = 1.2𝜎𝜎 2



(iv)    Answer: A.                                                                                                    [3]

        Cov(∇𝑌𝑌𝑡𝑡 , ∇𝑌𝑌𝑡𝑡 ) = 0.5 Cov(∇𝑌𝑌𝑡𝑡 , ∇𝑌𝑌𝑡𝑡−1 ) + Cov(∇𝑌𝑌𝑡𝑡 , 𝑒𝑒𝑡𝑡 ) + 0.7 Cov(∇𝑌𝑌𝑡𝑡 , 𝑒𝑒𝑡𝑡−1 )

                      𝛾𝛾0 = 0.5γ1 + 𝜎𝜎 2 + 0.7 (1.2𝜎𝜎 2 )

                      𝛾𝛾0 = 0.5γ1 + 1.84𝜎𝜎 2

        Cov(∇𝑌𝑌𝑡𝑡−1 , ∇𝑌𝑌𝑡𝑡 ) = 0.5 Cov(∇𝑌𝑌𝑡𝑡−1 , ∇𝑌𝑌𝑡𝑡−1 ) + Cov(∇𝑌𝑌𝑡𝑡−1 , 𝑒𝑒𝑡𝑡 ) + 0.7 Cov(∇𝑌𝑌𝑡𝑡−1 , 𝑒𝑒𝑡𝑡−1 )

                          γ1 = 0.5γ0 + 0.7𝜎𝜎 2

        For 𝑘𝑘 > 1:

        Cov(∇𝑌𝑌𝑡𝑡−𝑘𝑘 , ∇𝑌𝑌𝑡𝑡 ) = 0.5 Cov(∇𝑌𝑌𝑡𝑡−𝑘𝑘 , ∇𝑌𝑌𝑡𝑡−1 ) + Cov(∇𝑌𝑌𝑡𝑡−𝑘𝑘 , 𝑒𝑒𝑡𝑡 ) + 0.7 Cov(∇𝑌𝑌𝑡𝑡−𝑘𝑘 , 𝑒𝑒𝑡𝑡−1 )

                            γ𝑘𝑘 = 0.5γ𝑘𝑘−1




CS2A S2020                                                                          ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


(v)   Answer: A.                                                                                         [2]

      Using the equations from part (iv):

                            𝛾𝛾0 = 0.5 (0.5𝛾𝛾0 + 0.7𝜎𝜎 2 ) + 1.84𝜎𝜎 2

                            𝛾𝛾0 = 0.25𝛾𝛾0 + 2.19𝜎𝜎 2

                            𝛾𝛾0 = 2.92𝜎𝜎 2
                                                                       2
       Therefore, the variance of the new process, ∇𝑌𝑌𝑡𝑡 = 2.92𝜎𝜎

       From above, 𝛾𝛾1 = 0.5𝛾𝛾0 + 0.7𝜎𝜎 2

                      𝛾𝛾1 = 0.5(2.92𝜎𝜎 2 ) + 0.7𝜎𝜎 2

                      𝛾𝛾1 = 2.16𝜎𝜎 2

       and,           𝛾𝛾𝑘𝑘 = 0.5𝛾𝛾𝑘𝑘−1 , 𝑘𝑘 > 1

                      𝛾𝛾𝑘𝑘 = 0.5k − 1 𝛾𝛾1 , 𝑘𝑘 > 1

                       𝛾𝛾𝑘𝑘 = 0.5k – 1 (2.16𝜎𝜎 2 ), 𝑘𝑘 > 1

                                                                                                 [Total 10]

 Overall, this was one of the best answered questions in the entire paper.

 Answers to part (i) were generally mixed with many candidates only providing the first line of
 the solution.

 Part (ii) was well-answered, although quite a number of candidates suggested that p = 2.

 Parts (iii) to (v) were very well-answered; part (iii) in particular.




CS2A S2020                                                                 ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


4
    (i)      If we take the view that zebras close to death are unlikely to be able to escape then
             we could say that the two escapees on 1 Dec 2018 are likely to have been in better
             health than the zebras that remained in the wildlife park and hence informative
             censoring is present.

             OR:

             If we take the view that zebras close to death are more likely to behave erratically
             and escape then we could say that the two escapees on 1 Dec 2018 are likely to
             have been in poorer health than the zebras that remained in the wildlife park and
             hence informative censoring is present.

             OR:

             If we take the view that all the zebras are equally likely to escape then we could
             say that non-informative censoring is present in the two escapees on 1 Dec 2018.
                                                                                                [1]

             If we take the view that weaker zebras are more likely to fall prey to predators
             then we could say that the zebra that was killed by a lion on 1 Jul 2018 is likely to
             have been in poorer health than the others in the wildlife park and hence
             informative censoring is present.

             OR:

             If we take the view that predators are more likely to kill healthy-looking zebras
             then we could say that the zebra that was killed by a lion on 1 Jul 2018 is likely to
             have been in better health than the others in the wildlife park and hence
             informative censoring is present.

             OR:

             If we take the view that all the zebras are equally likely to be killed by a lion then
             we could say that non-informative censoring is present in the zebra killed by a lion
             on 1 Jul 2018.                                                                      [1]




CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


             If we assume that the end date of the investigation was set without reference to the
             health of the zebras at that time, then non-informative censoring is likely to be
             present in the zebras that were right censored at the end of the investigation.

             OR:

             If the end date of the investigation was not known in advance and was set because
             the remaining two zebras were close to death at that time, then informative
             censoring is likely to be present in the zebras that were right censored at the end of
             the investigation.                                                                [1]


  (ii)
                  Time             Reason for leaving                 Reference tag
                    1              Death from rabies                       19
                    1              Death from rabies                       20
                    1                  Censored                            21
                    1                  Censored                            25
                    2              Death from rabies                        7
                    2              Death from rabies                       10
                    2              Death from rabies                       11
                    3              Death from rabies                       12
                    3                  Censored                             4
                    5              Death from rabies                        1
                    5                  Censored                             9
                    5                  Censored                            13
                    8              Death from rabies                        8
                   11              Death from rabies                        3
                                                                                                           [2]


  j         t_j          n_j       d_j      λ_j = d_j / n_j       1-λ_j        Product over all i <= j (1-λ_i)
  1          1           14         2             1/7              6/7                   0.8571
  2          2           10         3            3/10             7/10                   0.6000
  3          3            7         1             1/7              6/7                   0.5143
  4          5            5         1             1/5              4/5                   0.4114
  5          8            2         1              ½                ½                    0.2057
  6         11            1         1              1                0                       0
           [½]           [1]       [½]           [½]               [½]                     [1]




CS2A S2020                                                                ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


                      Time period                   S(t)                      S(t)
                        0 <= t < 1                 1.0000                      1
                        1 <= t < 2                 0.8571                     6/7
                        2 <= t < 3                 0.6000                     3/5
                        3 <= t < 5                 0.5143                    18/35
                        5 <= t < 8                 0.4114                   72/175
                       8 <= t < 11                 0.2057                   36/175
                         11 <= t                      0                        0
                                                                                                       [2]
                                                                                               [Total 11]


  Part (i) was very poorly answered with many candidates struggling to adequately display a
  clear understanding of informative and non-informative censoring. The two most common
  mistakes were for candidates to definitively state that the different types of censoring were
  non-informative censoring without providing any justification and also for candidates to
  provide a definition of informative / non-informative censoring without applying it to the
  different types of censoring specified in the question. Candidates are reminded to take note
  of the command verbs used in higher order skills questions to maximise their performance in
  future exams.

  Part (ii) was well-answered. The two most common mistakes were for candidates to exclude
  the two zebras, censored at the end of the investigation, from the analysis and for candidates
  to limit the final value of the survival function to t < 12. A number of candidates also lost
  marks for not showing their workings.




CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


5
(i)     Null hypothesis: There is no bias in the graduated rates (or the standardised
        deviations).

        OR:

        The graduated rates are the true rates underlying the observed data.                           [½]

        z_x = (Observed Deaths – Expected Deaths) / (sqrt (Expected Deaths))

                           Age x     Expected Deaths               z_x
                            50          85.77344                -1.70314
                            51          73.20764                -1.77739
                            52          66.13374                -1.49205
                            53          84.74964                 0.57032
                            54          61.50300                 1.08347
                            55         103.07952                -0.69730
                            56         123.81516                -0.88209
                            57         104.45890                -1.80606
                            58         117.06240                -1.39215
                            59         102.49990                -1.62974
                            60          91.87000                 0.22222
                                                                                                      [1½]

        Under the null hypothesis, the standardised deviations are distributed as Binomial (11,
        0.5).                                                                              [½]

        There are eleven deviations in total of which three are positive.                              [½]

        According to pages 187 and 188 of the Golden Book, the likelihood of getting three or
        fewer positive deviations is between 0.0730 (when n = 12) and 0.1719 (when n = 10).

        OR:

        By explicit calculation, the likelihood of getting three or fewer positive deviations is
        0.1133                                                                                 [1]

        Which exceeds 2.5% (two tailed test).                                                          [½]

        So, there is insufficient evidence to reject the null hypothesis.                              [½]


(ii)    The signs test does not take into account the magnitude of the deviations.                     [1]


(iii)   Null hypothesis: The graduated rates are the true rates underlying the observed data.
                                                                                           [½]



CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


                                    Age x        z_x        (z_x)^2
                                     50       -1.70314      2.90068
                                     51       -1.77739      3.15913
                                     52       -1.49205      2.22621
                                     53        0.57032      0.32527
                                     54        1.08347      1.17391
                                     55       -0.69730      0.48622
                                     56       -0.88209      0.77807
                                     57       -1.80606      3.26187
                                     58       -1.39215      1.93808
                                     59       -1.62974      2.65607
                                     60        0.22222      0.04938
                                                                                                        [1]

       The test statistic is X = sum((z_x)^2) = 18.95489.                                              [½]

       Under the null hypothesis, X has a chi-square distribution with m degrees of freedom,
       where m is the number of age groups less one for each parameter fitted.
       So, in this case m = 11 - 2 = 9.                                                   [1]

       The critical value of the chi-square distribution with 9 degrees of freedom at the 5%
       level is 16.92.                                                                     [½]

       18.95489 > 16.92; therefore, there IS enough evidence to reject the null hypothesis at
       5% level.                                                                          [½]


(iv)   Although the signs test did not find systematic bias in the signs of the deviations,
       the chi-square goodness-of-fit test concluded that the magnitude of the deviations was
       too large under the null hypothesis.                                                 [1]

       Therefore, it is a good practice to always consider multiple statistical tests when
       assessing any hypothesis.

       OR:

       The chi-square goodness-of-fit test has therefore addressed a weakness of the signs
       test.
                                                                                                       [1]

       The deviations are large in magnitude in the age ranges of 50-52 and 57-59.                     [½]


       The significant result of the chi-square goodness of fit test suggests that alternative
       graduation methods should be considered.                                               [1]

                                                                [Marks available 3½, maximum 2]
                                                                                       [Total 12]



CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report




 Parts (i), (ii) and (iii) were very well-answered.

 In part (i), most candidates recognised the need for a two-tailed test but one of the more
 common errors was for candidates to approximate the Binomial distribution with a Normal
 distribution. The number of age groups is not sufficiently large enough to allow this
 approximation.

 In part (iii), most candidates correctly identified the number of degrees of freedom to use in
 the chi-square test although some candidates lost marks for not justifying their choice.

 A number of candidates also lost marks for not showing their workings in parts (i) and (iii).

 Part (iv) was poorly answered with most candidates focusing their comments solely on the
 contrasting conclusions of the two tests in parts (i) and (iii). Alternative comments that were
 clear, distinct and relevant to the context of the question were also awarded credit.




CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


6


                              First marking



                                          µ
                                                          bµ
                                                                          Borderline
                            Second marking


                                          (1-b)µ

                                                                      β
                                Completed




        𝑑𝑑
              𝑝𝑝SS (𝑡𝑡) = −μ𝑝𝑝SS (𝑡𝑡)               (1)
       𝑑𝑑𝑑𝑑



(i)    Answer: B                                                                                                     [2]

        𝑑𝑑
              𝑝𝑝SB (𝑡𝑡) = 𝑏𝑏μ𝑝𝑝SS (𝑡𝑡) − β𝑝𝑝SB (𝑡𝑡)                     (2)
       𝑑𝑑𝑑𝑑




(ii)   Answer: A                                                                                                     [4]

       Solving equation (1) above and using the data given in the question we have:

                    𝑝𝑝 𝑆𝑆𝑆𝑆 (𝑡𝑡) = 𝑒𝑒𝑒𝑒𝑒𝑒( − 0.2𝑡𝑡)

       Then, in equation (2) we have:

                    𝑑𝑑
                           𝑝𝑝 𝑆𝑆𝑆𝑆 (𝑡𝑡) = (0.25)(0.2) 𝑒𝑒𝑒𝑒𝑒𝑒( − 0.2𝑡𝑡) − 0.3𝑝𝑝 𝑆𝑆𝑆𝑆 (𝑡𝑡)
                    𝑑𝑑𝑑𝑑

                    𝑑𝑑
                           𝑝𝑝 𝑆𝑆𝑆𝑆 (𝑡𝑡) = 0.05 𝑒𝑒𝑒𝑒𝑒𝑒( − 0.2𝑡𝑡) − 0.3𝑝𝑝 𝑆𝑆𝑆𝑆 (𝑡𝑡)
                    𝑑𝑑𝑑𝑑

                    𝑑𝑑
                           𝑝𝑝 𝑆𝑆𝑆𝑆 (𝑡𝑡) + 0.3𝑝𝑝 𝑆𝑆𝑆𝑆 (𝑡𝑡) = 0.05 𝑒𝑒𝑒𝑒𝑒𝑒( − 0.2𝑡𝑡)
                    𝑑𝑑𝑑𝑑




CS2A S2020                                                                             ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


        Using the integrating factor 𝑒𝑒𝑒𝑒𝑒𝑒( 0.3𝑡𝑡) we have:

                𝑑𝑑
                       [𝑒𝑒𝑒𝑒𝑒𝑒( 0.3𝑡𝑡)𝑝𝑝 𝑆𝑆𝑆𝑆 (𝑡𝑡)] = 0.05 𝑒𝑒𝑒𝑒𝑒𝑒( − 0.2𝑡𝑡) 𝑒𝑒𝑒𝑒𝑒𝑒( 0.3𝑡𝑡) = 0.05 𝑒𝑒𝑒𝑒𝑒𝑒( 0.1𝑡𝑡).
                𝑑𝑑𝑑𝑑

        Integrating produces:

                                               0.05
                𝑒𝑒𝑒𝑒𝑒𝑒( 0.3𝑡𝑡)𝑝𝑝 𝑆𝑆𝑆𝑆 (𝑡𝑡) =          𝑒𝑒𝑒𝑒𝑒𝑒( 0.1𝑡𝑡) + 𝑘𝑘
                                               0.1

        Using the initial condition that pSB(0) = 0 we have:

                         0.05
                0=              + 𝑘𝑘 = 0.5 + 𝑘𝑘
                          0.1

        Therefore k = -0.5.

                So 𝑝𝑝 𝑆𝑆𝑆𝑆 (𝑡𝑡) = 0.5 𝑒𝑒𝑒𝑒𝑒𝑒( − 0.2𝑡𝑡) − 0.5 𝑒𝑒𝑒𝑒𝑒𝑒( − 0.3𝑡𝑡)


(iii)   Answer: B                                                                                                   [2]

        For t = 10:


                𝑝𝑝 𝑆𝑆𝑆𝑆 (𝑡𝑡) = 𝑒𝑒𝑒𝑒𝑒𝑒( − 0.2𝑡𝑡) = 0.1353

                𝑝𝑝 𝑆𝑆𝑆𝑆 (𝑡𝑡) = 0.5 𝑒𝑒𝑒𝑒𝑒𝑒( − 0.2𝑡𝑡) − 0.5 𝑒𝑒𝑒𝑒𝑒𝑒( − 0.3𝑡𝑡)

                             = 0.5(0.1353) – 0.5(0.0498)

                             = 0.0428.

        Hence pSC(t) = 1 – 0.1353 – 0.0428 = 0.8219


(iv)    Adding more examiners to the pool of first and second examiners would increase µ
        and hence speed up the time to complete first and second marking.               [1]

        However, µ might not increase in proportion with the number of first/second
        examiners if the new examiners mark more slowly because they are less experienced.
                                                                                        [1]

        However, introducing more examiners could increase the proportion b that are
        deemed to be “borderline” because of more variation in the marking.                                         [1]

        Therefore, any reduction in time taken, due to increasing µ, would be offset by any
        increase in time, due to proportion b increasing, and the overall reduction in time
        would depend on the relative changes in each.                                       [1]




CS2A S2020                                                                       ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


       If more scripts are deemed to be “borderline”, then β might also reduce due to a
       “bottleneck” of scripts awaiting review by a third examiner.                                    [1]

       Additionally, the Board of Examiners could decide to add more examiners to the pool
       of third examiners (hence increasing β) if the reduction in time due to the Board
       member’s suggestion was not sufficient.                                           [1]

       The availability of examiners and overall cost of adding more to the pool would need
       to be considered by the Board before proceeding with these suggestions.           [1]

       The impact on the existing examiners (e.g. the effect of a reduction in workload)
       would also need to be considered before proceeding.                                [½]
                                                         [Marks available 7½, maximum 4]
                                                                                   [Total 12]


 Part (i) was very well-answered but parts (ii) and (ii) much less so.

 Part (iv) was poorly answered with many candidates simply stating that the process would
 speed up. Candidates are reminded that higher order skills questions are generally the
 questions which differentiate those candidates with a good grasp and understanding of the
 subject. Alternative comments that were clear, distinct and relevant to the context of the
 question were also awarded credit.




CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


7
(i)
                           0.5             0.5           0.5


        1              1            2              3              4           1


                                           0.5

            A Markov Chain is irreducible if, given any pair of states i, j there exists an integer n
            with p_ij(n) >0.                                                                           [1]


            For this Markov Chain there exist pairs of states (e.g. i = 1 and j = 2) where p_ij(n) =
            0 for all n.                                                                               [1]


            Therefore, this Markov Chain is not irreducible.                                           [1]


(ii)        For pi to be a stationary probability distribution of P:
            pi_1 = pi_1 + 0.5 * pi_2
            pi_2 = 0.5 * pi_3
            pi_3 = 0.5 * pi_2
            pi_4 = 0.5 * pi_3 + pi_4                                                                   [1]


            Therefore pi_2 = pi_3 = 0                                                                  [½]
            and pi_1 + pi_4 = 1                                                                        [½]
            pi = {x, 0, 0, 1 – x} where 0 ≤ x ≤ 1 (since pi_1, pi_4 >= 0)                              [1]


(iii)       h_14 = 0
            h_44 = 1
            h_24 = ½h_34 + ½h_14 = ½h_34
            h_34 = ½h_24 + ½h_44 = ½h_24 + ½
            Therefore, solving:
            h_34 = ½(½h_34) + ½
            h_34 = 2/3



CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


       So, h_24 = ½(2/3)
                = 1/3                                                                                  [6]
       Therefore: h_i4 = {0, 1/3, 2/3, 1}


       Alternative solution:
       h_14 = 0
       h_44 = 1
       Starting from State 2, to reach State 4 the chain must move to State 3 and back to
       State 2 n times, where n is a non-negative integer, then move to State 3, then move to
       State 4. This has probability 0.5^(2n+2).
       Hence h_24 = 0.5^2 + 0.5^4 + 0.5^6 + …
       This is the sum of a geometric progression with a = r = 0.5^2 = 0.25.
       Hence h_24 = 0.25 / (1 – 0.25) = 1/3.
       A similar argument shows that h_34 = 2/3.                                                       [6]
       Therefore: h_i4 = {0, 1/3, 2/3, 1}
                                                                                               [Total 12]


 Part (i) was very well-answered but parts (ii) and (ii) less so.

 In part (ii), few candidates derived the general form of the stationary probability distribution
 together with the condition on x. A more common response was for candidates to simply give
 one or two valid stationary distributions that satisfy the general form.

 In part (iii), the majority of candidates who made a good attempt at this question, derived
 their solutions using the geometric progression approach. A number of candidates lost marks
 for not showing their workings in part (iii).




CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


8
    (i)      Circuit boards made in “London” using the “Old” process.                                  [1]


    (ii)     exp(β_L + β_P) / (1500(exp(β_L + β_P) + exp(β_L) + exp(β_P) + 1))                         [2]

             where:
             β_L = regression coefficient for the Location covariate                                   [½]
             β_P = regression coefficient for the Process covariate                                    [½]


    (iii)    The Oxford factory seems to produce circuit boards with (slightly) higher failure
             rates than the London factory.                                                  [1]

             The New process seems to produce a (significant) reduction in failure rates when
             compared to the Old process.                                                   [1]


    (iv)     We need information on the standard errors for both coefficient estimates before
             we can reach a firm conclusion about the comments in part (iii) above.         [1]


    (v)      Answer: D                                                                                 [3]


             Prob (No Fail | London & Old) = 1 – 0.2 = 0.8 = exp [–∫ λ0(t) dt]


             Prob (No Fail | London & New) = exp [–∫ λ0(t) exp[βP] dt]

                                                 = 0.8 exp[-0.30]

                                                 = 0.8476


    (vi)     Answer: B                                                                                 [2]

             There are 2,000 (= 10,000 * 0.2) failures expected with the old process

             but only 1,524 (= 10,000 * (1 – 0.8476)) expected if the new process is used.

             Hence there are 476 fewer expected failures in the first year if the new process is
             used.
                                                                                       [Total 12]




CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report




 Part (i) was very well-answered.

 Part (ii) was poorly answered with many candidates struggling to properly define the partial
 likelihood expression. Some candidates lost marks for not clearly defining the regression
 coefficients.

 Part (iii) was well-answered although some candidates provided conclusions about the
 failure rates that were directionally opposite to the correct solutions.

 Part (iv) was very poorly answered with many candidates suggesting that the baseline
 hazard function was the additional information required. Candidates who stated that log-
 likelihoods, test statistics, test results or p-values were required, provided that it was clear
 that they were referring to significance testing the regression coefficients, were awarded full
 marks.

 Parts (v) and (vi) were reasonably well-answered.




CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


9
(i)     For this to be the case, the customer’s 2018, 2019 and 2020 renewals all have
        to be at the 10% discount level.

        The probability of remaining in state with 10% discount is 0.4.                                [½]

        Therefore, the required probability is 0.4^3 = 0.064.                                        [1½]


(ii)    This is the probability of being in states Three or Four or more in 2019.

        We can obtain these probabilities from the matrix P^2:




        Given that the customer starts in 10% discount level in 2017, the probability of a 15%
        discount in 2019 is 0.3 and a 25% discount in 2019 is 0.18.

        OR:

        Given that the customer starts in 10% discount level in 2017, the probability of a 15%
        discount in 2019 is:
        0.2 * 0.2 + 0.4 * 0.3 + 0.3 * 0.4 + 0.1 * 0.2 = 0.3

        Given that the customer starts in 10% discount level in 2017, the probability of a 25%
        discount in 2019 is:

        0.2 * 0.1 + 0.4 * 0.1 + 0.3 * 0.2 + 0.1 * 0.6 = 0.18                                           [1]

        Required probability is 0.48.                                                                  [1]


(iii)   Answer: A                                                                                      [3]

        For this we require the long-term probabilities for the chain.

        Stationary distribution π satisfies π = πP.


                                                                            (1)


                                                                            (2)



CS2A S2020                                                               ©Institute and Faculty of Actuaries
 Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report




                                                                            (3)

                                                                            (4)


                from (2)-(3)




                substitute in (1)




                substitute in (4)

                                     2        34   8  1
                                       π4 = (    +   + )π3
                                     5        450 90 5




(iv)   Answer: C                                                                                       [3]

       As




                  = 0.28125


       Hence:
                  = 0.2125

                = 0.25

                   = 0.25625



CS2A S2020                                                               ©Institute and Faculty of Actuaries
  Subject CS2A (Risk Modelling and Survival Analysis - Core Principles) September 2020 – Examiners’ report


        Hence the average discount is:

                 0.2125*5% + 0.25*10% + 0.28125*15% + 0.25625*25% = 14.19%


 (v)    The level of discount the insurance company gives in its home insurance is not
        completely within its control.                                                                  [1]

        The arrangement could lead to significant volumes of business for the insurance
        company through access to the bank’s customers, especially if the loyalty scheme is
        popular.                                                                          [1]

        Customers may open a number of small accounts in order to benefit from a higher
        discount.                                                                       [1]

        Bank customers with lots of accounts may be more loyal and this might result in
        better persistency on the home insurance, or even better claims experience.                     [1]

        The insurer might need to raise its “full” prices to compensate for the introduction of
        the discount, and hence might become uncompetitive for those purchasing insurance
        outside the discount scheme.                                                         [1]

        If the insurer does not raise its “full” prices to compensate for the introduction of the
        discount, it could find large numbers of poorer risks opening a number of bank
        accounts to take advantage of the larger discounts. This could lead to solvency issues
        for the insurer.                                                                        [1]
                                                               [Marks available 6, maximum 3]
                                                                                        [Total 13]

Part (i) was poorly answered. The two most common mistakes were for candidates to
mistakenly suggest that four years of renewals were required rather than three and/or for
candidates to determine the second row and second column entry of the transition matrices,
P^3 or P^4.

Part (ii) was slightly better answered. Again some candidates mistakenly suggested that
three years of renewals were required rather than two.

A number of candidates lost marks for not showing their workings in parts (i) and (ii).

Parts (iii) and (iv) were very well-answered.

Part (v) was very poorly answered with many candidates commenting on the commercial
implications for the bank rather than the insurer. Candidates are reminded of the need to
read the question carefully. Alternative comments that were clear, distinct and relevant to
the context of the question were also awarded credit.




                         END OF EXAMINERS’ REPORT

 CS2A S2020                                                               ©Institute and Faculty of Actuaries



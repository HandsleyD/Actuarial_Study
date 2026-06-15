---
normalized_id: cs2-2024-september-examiner-report-cs2a-september-2024-examiner-report
exam_code: CS2
year: 2024
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS2/CS2A/Sep24/CS2A_September 2024_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2024-september-examiner-report-cs2a-september-2024-examiner-report

EXAMINERS’ REPORT
CS2 Risk Modelling and Survival Analysis
Paper A
Core Principles




                             September 2024
    CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


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

For some candidates, this may be their first attempt at answering an examination using open
books and online. The Examiners expect all candidates to have a good level of knowledge
and understanding of the topics and therefore candidates should not be overly dependent on
open book materials. In our experience, candidates that spend too long researching answers
in their materials will not be successful either because of time management issues or because
they do not properly answer the questions.

Many candidates rely on past exam papers and examiner reports. Great caution must be
exercised in doing so because each exam question is unique. As with all professional
examinations, it is insufficient to repeat points of principle, formula or other text book
works. The examinations are designed to test “higher order” thinking including candidates’
ability to apply their knowledge to the facts presented in detail, synthesise and analyse their
findings, and present conclusions or advice. Successful candidates concentrate on answering
the questions asked rather than repeating their knowledge without application.

Candidates should note that from the April 2025 exam session, all examinations will
continue to be delivered virtually and will have online proctoring. Exams will be closed
book and closed web. The ability to refer to past examiner reports and past papers
during the exam is not permitted. Candidates attempting to do so will be in breach of
the Assessment Regulations and subject to inappropriate conduct
investigations. Further details of the new exams can be found on the IFOA website.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.



Sarah Hutchinson
Chair of the Board of Examiners
December 2024



CS2A S2024
                                                                        © Institute and Faculty of Actuaries
     CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


A.      General comments on the aims of this subject and how it is marked

The aim of the Risk Modelling and Survival Analysis Core Principles subject is to provide a
grounding in mathematical and statistical modelling techniques that are of particular
relevance to actuarial work, including stochastic processes and survival models.

Some of the questions in this paper admit alternative solutions from those presented in this
report, or different ways in which the provided answer can be determined. All mathematically
correct and valid alternative solutions received credit as appropriate.

In cases where an error was carried forward to later parts of the answer, candidates were not
penalised a second time for the same error if those later parts were otherwise answered
correctly.

In higher order skills questions, where comments were required, well-reasoned comments that
differed from those provided in the solutions also received credit as appropriate.

Candidates are advised to take careful note of all instructions that are provided with the exam
in order to maximise their performance in future CS2A examinations.


B.      Comments on candidate performance in this diet of the examination

Overall performance in this subject continues to improve session-by-session with the average
mark increasing in each of the last four sittings and the proportion of candidates passing CS2
is higher than at any time since the first sitting under the new syllabus in April 2019.

Questions in the A paper cover a wide range of syllabus areas and generally set a problem
which requires the application of one or two syllabus areas to a particular scenario. Questions
often finish with a higher order element that requires interpretation of the results or analysis
of the limitations of the approach undertaken. Throughout, candidates are rewarded for well-
structured answers that relate to the problem scenario. The majority of marks are awarded for
evidence of understanding of the statistical or modelling principles and their accurate
application to the scenario given. A correct, final numerical answer often accounts for only ½
or 1 of the marks available.

The question where candidates averaged the highest proportion of the available marks was Q4
on Markov jump processes. This was welcome as it has nearly always been the survival
analysis questions that gave the best performance in recent years. Linked to that, the question
where candidates averaged the lowest proportion of the available marks was Q7 on mortality
projections. This topic is not regularly examined in paper A and many candidates struggled to
evidence understanding of the extrapolation approach to projection outlined in the Core
Reading. The question with the greatest range of marks relative to those available was Q6 on
Poisson processes. This question is an excellent example of where structured thinking and
evidence of understanding could score the majority of marks even where the final numerical
result was incorrect.




CS2A S2024
                                                                         © Institute and Faculty of Actuaries
     CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


C.      Pass Mark

The Pass Mark for this exam was 55.
1167 candidates presented themselves and 549 passed.

The pass mark reflects the level attained by a minimally competent candidate in this
examination setting. The pass mark may therefore vary between different examination
sessions. The minimally competent candidate is first assessed through a “bottom-up”
summation of marks appropriate to each part question in each examination paper. This is then
confirmed during marking with both quantitative and qualitative analysis of individual
question performance.




CS2A S2024
                                                                         © Institute and Faculty of Actuaries
       CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


Solutions for Subject CS2A – September 2024

 Q1
 (i)
 MLE = lambda hat= n1 / (n2 * M + sum(values < M]))                                                          [1]
 Where n1 = 9, n2 =3 , M =12000,              sum(values < M] = 85440                                        [1]
 lambda hat = 0.0000741                                                                                      [2]
                                                                          [Marks available 4, maximum 4]

 (ii)
 E (X) = ∫(from 0 to M) x * lambda * exp(-lambda x) dx + M*P( X > M)                                         [1]
 = [-x* exp(-lambda x)](o to M) +∫(from 0 to M) exp(-lambda x) dx+12000* exp(-
 lambda *12000)
 {integration by parts}                                                                                      [1]
  = ∫(from 0 to M) exp(-lambda x) dx              { first and last term cancel out}                          [1]
  = [1 - exp(-lambda M)] /lambda                                                                             [½]
 = 7948.494                                                                                                  [1]
 Proportional insurance alpha * Mean claim = 7948.494                                                        [1]
 Mean claim for the population is calculated as = 1/ lambda                     = 13493.333                  [1]
 Proportional insurance alpha = 58.91%                                                                       [½]
                                                                          [Marks available 7, maximum 7]
                                                                                               [Total 11]


 Commentary:
 This is a relatively straightforward question on the exponential as a claim distribution in the
 presence of reinsurance. Part (i) was well answered but part (ii) was less so with the average
 candidate scoring 3 out of 7. A common error here was to calculate the mean claim direct
 from the sample data rather than through the exponential pdf and the lambda result from (i).




CS2A S2024
                                                                           © Institute and Faculty of Actuaries
     CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


 Q2
 (i)
 µ and 10P0
 Given 20P0 = 0.25 and 25P0 = 0.20
 ie. 10P0 * 10P10 = 0.25 and 10P0 * 15P10 = 0.20                                                           [½]
 Since force of mortality above age 10 years is constant, the above equations can be
 written as
 . 10P0 *exp(-10 µ) = 0.25               (A)                                                               [½]
 and 10P0 * exp(-15 µ) = 0.20           (B)                                                                [½]
 Dividing equation (A) by the (B):
 exp(5 µ) = 0.25/0.20 = 1.25                                                                               [½]
 µ = 1/5 ln(1.25)= 1/5 * 0.223144 =0.044629                                                                [½]
 10P0 = 0.25 *exp(10 µ) = 0.25* 1.5625 =0.390625                                                           [½]
                                                                        [Marks available 3, maximum 3]

 (ii)
 Makeham’s law
 If the table follows Makeham’s law, µx = A+ Bc x
 µ70 = A + Bc 70 , µ75 = A + Bc 75 , µ80 = A + Bc 80                                                       [½]
 µ75 - µ70 = B* { c 75 - c 70 } = Bc 70( c 5 – 1)                           (A)                            [½]
 µ80 - µ75 = B* { c 80 - c 75 } = Bc 70( c 10 – c 5)                        (B)                            [½]
 Dividing equation (B) by (A):
 (µ80 - µ75) / (µ75 - µ70) = ( c 10 – c 5) / ( c 5 – 1)                                                    [½]
 (0.358927-0.149824)/ (0.149824- 0.026742) = c 5                                                           [½]
 1.698892 = c 5
 c = 1.111817                                                                                              [½]

 Substituting in (A),
 (0.149824- 0.026742) = B* (1.111817^75 -1.111817^70)                                                      [½]
 0.123082 =B*1166.121
 B= 0.000106                                                                                               [½]


 Substituting in the value for µ70,
 0.026742= A +0.000106* 1.111817^70


CS2A S2024
                                                                         © Institute and Faculty of Actuaries
    CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


 A= 0.26742- 0.176105 = -0.14936                                                                          [½]
 Probability that a life aged 72 will survive 15 years
 Using the formula tpx = s^t* g^(c^x(c^t-1))
 15p72 =s^15* g^(c^72(c^15-1))

 S=exp(-A) =exp(-0.26742)= 1.161094                                                                       [½]
 g= exp(-B/logc) =0.999005
                                                                                                          [½]
 Probability that a life aged 72 will survive 15 years =
 1.161094^15* 0.999005^ (1.111817^72*(1.111817^15-1)) =0.003100                     [½]
                                                         [Marks available 6, maximum 6]


 (iii)
 In Part (i)
 The advantage of this method is that is makes calculations quick and easy                                [½]
 The assumption that the force mortality is constant over ten years needs to be
 investigated.                                                                                            [1]
 Concept of a constant force of mortality is a simplified assumption, but it may not
 always reflect the complexities of real-world mortality patterns                                         [½]
 More sophisticated models are used in practice when greater accuracy is required                [½]
                                                                     [Marks available 2½, maximum 1]
 In Part (ii)
 Makeham's law is a well-known mortality model used in actuarial science and
 demography to describe the force of mortality as a function of age.                                      [1]
 Makeham's law assumes that the force of mortality consists of two components:
 Age-Independent Component (A), Age-Dependent Component (B)                                               [1]
 [Other sensible comments on advantages of Makeham, 1 mark each.]
                                                                       [Marks available 2, maximum 1]
                                                                                                 [Total 11]



 Commentary:
 This question was well answered as is typically the case with survival analysis questions in
 paper A.




CS2A S2024
                                                                        © Institute and Faculty of Actuaries
        CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


 Q3
 (i)
 In this case the back-shift polynomial is B(L) = 1-a7L7                                                      [1]
 and stationarity holds for |a7| < 1.
                                                                                                      [1]
                                                                           [Marks available 2, maximum 2]


 (ii)
 Using the Yule-Walker equations we can see that

 𝛾𝑠 = 𝑎7 𝛾𝑠−7 for 𝑠 ≠ 0
                                                                                                              [1]
 So for s = 1 the equation above implies that

 𝛾1 = 𝑎7 𝛾1−7 = 𝑎7 𝛾6 and
                                                                                                              [½]
 similarly for 𝑠 = 6

 𝛾6 = 𝑎7 𝛾7−6 = 𝑎7 𝛾1                                                                                         [½]
 Both of these equations imply that, 𝛾6 = 𝛾1 = 0.
                                                                                                              [½]
 Similar arguments can be used for showing that

 𝛾2 = 𝛾5 = 0 𝛾3 = 𝛾4 = 0
                                                                                                              [½]
 The only non-zero solutions are

              ,              and so on                                                                [1]
                                                                           [Marks available 6, maximum 4]


 (iii)
 As the autocovariance (and autocorrelation) is non-zero only for observations which
 are 7 time units apart, this can be used to model dependence with time period 7                              [1]
 Most common examples will be weekly series (e.g. grocery shopping)                    [1]
                                                            [Marks available 2, maximum 2]



 (iv)
 If 𝑎7 = 1                                                                                            [2]
                                                                           [Marks available 2, maximum 2]
                                                                                                      [Total 10]


CS2A S2024
                                                                            © Institute and Faculty of Actuaries
       CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report



 Commentary:
 The answers to this question were better than for many time series questions in recent years.
 Part (i) was very well answered. Part (ii) is a straightforward application of the Yule Walker
 equations. Where candidates scored less well in the later parts it was often because they were
 preconditioned to think about annual or monthly seasonality which is not really the point of
 this time series.


 Q4
 (i)
      −𝟎. 𝟔            0.1      0.5
 𝐴 = ( 0.3            −𝟎. 𝟕     0.4 )
       0.1            𝟎. 𝟏      −0.2                                                                 [2]
                                                                          [Marks available 2, maximum 2]

 (ii)
 From the definition of a transition matrix

                0.1     0.5
           0    0.6     0.6
          0.3           0.4
 𝑃=              0
          0.7           0.7
          0.1   0.1
                        0                                                                            [2]
        (0.2    0.2         )
                                                                          [Marks available 2, maximum 2]

 (iii)
 From the transition matrix above we get

            3    1
 𝜋1 ∗ 0 + 𝜋2 + 𝜋3 = 𝜋1
            7    2
                                                                                                             [1]
     1             1
 𝜋1 ∗ + 𝜋2 ∗ 0 + 𝜋3 = 𝜋2
     6             2
                                                                                                             [1]
     5    4
 𝜋1 ∗ + 𝜋2 + 𝜋3 ∗ 0 = 𝜋3
     6    7
                                                                                                             [1]
 Solving these gives

 𝜋 = (0.3208556, 0.2620321, 0.4171123)
                                                                                                     [1]
                                                                          [Marks available 4, maximum 4]

 (iv)
 The expected claim costs per policy is
 (200*0.3208556+300*0.2620321+500∗ 0.4171123)
                                                                                                             [1]

CS2A S2024
                                                                           © Institute and Faculty of Actuaries
       CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


 = 351.3369                                                                                                  [½]
 And so the expected overall cost is =350*351.3369                                                           [1]
 =122967.9                                                                                                   [½]
 The standard deviation per policy claim is
 √(200^2 ∗ 0.3208556 + 300^2 ∗ 0.2620321 + 500^2 ∗ 0.4171123
               − 351.3369^2 )                                                                                [2]
 = 131.3681                                                                                                  [½]
 And for the overall portfolio is 350*131.3681                                                               [1]
 =45978.83                                                                                           [½]
                                                                          [Marks available 7, maximum 7]
                                                                                                     [Total 15]

 Commentary:
 This question was the best performing one across the whole paper in terms of proportion of
 available marks scored by candidates. More than 96% of candidates gained full marks in part
 (i). Parts (ii) and (iii) were well answered too. In these parts, both fraction and decimal forms
 were acceptable. In part (iv) because the question did not say anything about the
 independence of the 350 policies, full marks were given for portfolios standard deviations of
 both 350 and sqrt(350) times per policy deviation.


 Q5
 (i)
 From the generating function we have:

 1/α (u-α + v-α – 1-1)                                                                                       [1]
 α /α (u-α + v-α – 2)                                                                                        [½]
 (u-α + v-α – 1)                                                                                             [½]
 (u-α + v-α – 1)-(1/α)
 this is the Clayton copula function, C(u,v)                                                         [1]
                                                                          [Marks available 3, maximum 3]

 (ii)
 P(X<0) = 0.159
 P(Y<0) = 0.371                                                                    [½]
                                        2             2 0.5               0.5
 P(X<0) and P(Y<0) = exp{- [ (-ln 0.159) + (-ln 0.371) ] } = exp-(4.365 )         [1½]
 = exp(-2.09) = 0.124                                                               [1]
                                                        [Marks available 3, maximum 3]

 (iii)
 Required probability = 1-0.841-0.629+C(.841,.629)                                                          [1½]
 Now C(.841,.629) = exp{- [ (-ln 0.841)2 + (-ln 0.629) 2 ] 0.5 } = 0.61 )                                     [1]
 Therefore probability                                                                                       [½]


CS2A S2024
                                                                           © Institute and Faculty of Actuaries
    CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


 = 1 - 0.841 - 0.629 + 0.61 = 0.139
                                                                       [Marks available 3, maximum 3]

 (iv)
 Gumbel copula is not symmetrical                                                        [1]
 Gumbel exhibits higher tail correlation approaching (1,1) compared to approaching
 (0,0)                                                                                   [1]
                                                              [Marks available 2, maximum 2]

 (v)
 Simply change the Gumbel parameter value to 1                                                    [1]
                                                                       [Marks available 1, maximum 1]

 (vi)
 The variance of total returns would be greater under the Gumbel copula due to the
 non-zero correlation.                                                                                    [1]
 Hence probability of extreme total returns would be higher under the Gumbel model                        [1]
 If the Gumbel model is a better reflection of the data it is likely that adoption of the
 independent model would underestimate the risks of investing in both X and Y.                            [1]
 If the independent model is a better reflection of the data it is likely that adoption of
 the Gumbel model would over-estimate the risks of investing in both X and Y.                             [1]

                                                                       [Marks available 4, maximum 4]
                                                                                             [Total 16]

 Commentary:
 The first two parts of this question were well answered. A wide range of interpretative
 comments were eligible for marks in parts (iv) and (vi) where the important element was
 evidencing understanding of tail dependence and how it varies both between the two tails
 within a copula and also between different copulas.


 Q6
 (i)
 Working in minutes , λ = 2 per minute                                                                    [½]

 Two intervals (0,2) and (1,4) are not disjoint sets                                                      [½]

 Let X, Y, and Z be the numbers of arrivals in (0,1], (1,2] and (2,4) respectively.
                                                                                                          [1]
 Then X, Y, and Z are independent as the variables are Poisson increments
                                                                                                          [½]
 X∼Poisson(λ),Y∼Poisson(λ),Z∼Poisson(2λ)
                                                                                                          [1]
 Let A be the event that there are two customers arriving between 0 and 2 minutes
 and three two customers arriving between 1 & 4 minutes given that one customer
 has arrived between 1 and 2.
                                                                                                          [½]


CS2A S2024
                                                                        © Institute and Faculty of Actuaries
    CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


 P(A) = P(X+Y=2 and Y+Z=3 / Y = 1)
                                                                                                          [1]
 =P(X=1 and Z=2 and Y = 1) / P(Y=1)
 {given that one customer has arrived between (1,2), one customer must have arrived
 between 0 and 1 , 2 must have arrived between 2 and 4}
                                                                                                         [1½]
 = λ 𝑒 −λ    * 𝑒 −2λ ( 2𝜆)2 / 2 {pdf of poisson}
                                                                                                         [1½]
 = 3.966% or 0.04
                                                                                                        [1]
                                                                                                   [Total 9]

 Commentary:
 This was probably the most challenging question on the paper requiring clear thinking about
 the structure for an answer whilst using a relatively straightforward statistical framework (the
 Poisson pdf). The most common error was not noting that (0,2) and (1,4) overlap and
 therefore a simple chaining of two probabilities is insufficient. The average mark scored was
 3½ out of 9 for this question.


 Q7
 (i)
 Model (1) assumes that log mortality rates are linear in age overall;                         [1]
 however, the overall pattern of the data is not linear.                                      [½]
 We are using data for ages up to 65 to project mortality at ages over 65                      [1]
 There are particular issues doing this given the nature of the under 65 data at certain
 ages                                                                                          [1]
 In particular, the graph shows that the mortality rate decreases in the first few years
 after birth and then rises.                                                                  [½]
 Model (1) will not be able to capture that pattern appropriately                             [½]
 Fitting Model (1) to the data will result is under fitting of infant mortality rates         [½]
 A more flexible model/approach will tend to fit the data better                              [½]
 However, excluding infant period, the rest of the data pattern is not far from linear        [½]
 A simple approach could be to fit model 1 to the data excluding the infant period,
 check goodness of fit and if appropriate, use the fitted line to project mortality rates
 into higher age.                                                                              [1]
                                                                   [Marks available 7, maximum 3]

 (ii)
 Variant 1: P-splines                                                                                     [½]
 i.e. f_k are b-splines basis                                                                             [½]
 and a penalty is used to achieve smoothing and forecasting                                               [½]
 Advantages:
 Allow to capture non-linear and complex patterns from the data                                           [½]
 Smoothing parameters can be adjusted to avoid overfitting                                                [½]
 Limitations:                                                                                             [½]


CS2A S2024
                                                                        © Institute and Faculty of Actuaries
    CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


 Not straightforward to implement
 Risk of overfitting if smoothing parameter too low                                       [½]
 Can lead to unreasonable or unstable forecast                                            [½]
 Variant 2: polynomials                                                                   [½]
 f_k(x) = x^k                                                                             [½]
 Advantages:
 Help to capture non-linear patterns                                                      [½]
 Easy to implement                                                                        [½]
 Limitations:
 Risk of overfitting if too many terms are included.                                      [½]
 High order polynomials can yield unreasonable forecasts                                  [½]
                                     [Marks available 7, maximum 6 (3 marks for each variant)]

 (iii)
 The model is not identifiable because the parameter specifications (alpha_x,
 kappa_t) and specifications (alpha_x + a, kappa_t – a) would yield identical value
 of the fitted mortality rates.                                                           [1]
                                                               [Marks available 1, maximum 1]

 (iv)
 Identifiability can be achieved by imposing constraints on the parameters                 [2]
                                                                [Marks available 2, maximum 2]

 (v)
 Model (3) is an age-period model                                                                 [½]
 It is one of the simplest models for mortality projection                                        [½]
 Hence it’s not guaranteed that it will fit this data well                                        [½]
 In particular, Model (3) will not be appropriate if cohort effects are present in the
 data                                                                                             [½]
 A simple way to know if it’s appropriate for this particular data is to fit it to the data
 and then assess the residuals (or perform goodness of fit test)                                  [½]
 If it fits the data well, then kappa_t can be projected for example using ARIMA
 model                                                                                            [½]
 and the projected kappa_t can then be used to derive projected mortality rates                   [½]
                                                                [Marks available 3½, maximum 3]
                                                                                            [Total 15]

 Commentary:
 This question scored the lowest proportion of marks available across the two CS2 papers in
 this sitting. That might be because candidates have not taken the time to familiarise
 themselves with the mortality projection material at the end of the survival analysis sections of
 the Core Reading. Those candidates who were familiar with extrapolation methods and the
 Lee-Carter models scored well. In part (i) many candidates who scored poorly simply missed
 the major element of the scenario that mortality at ages up to 65 is being used to project
 mortality above age 65. In part (ii) full marks were available for candidates who contrasted
 two polynomial approaches or used Gompertz / Makeham as one of their polynomials instead
 of writing about splines.


CS2A S2024
                                                                        © Institute and Faculty of Actuaries
    CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report




 Q8
 (i)
 pzz2=.5625, so pzz=sqrt .5625 = 0.75                                                                     [1]
 and now pzx = 1-.75=0.25 as zy and zr = 0                                                                [1]
 pzy2=.125, so zx xy = .125 (only way) pxy = .125/.25 = .5                                                [1]
 pxx = 1-.5=.5 as xz and xr = 0                                                                           [1]
 pxx2 = .4 = xx xx + xy yx, so yx = (.4-.5^2)/.5 = .3                                                     [1]
 pyr2 = .1 = yy yr + yr rr = yr(yy+1) = .1, and yy^2+yy=.1=0 as yr=yy (given)                             [1]
 solving using quad form gives yy = .0916 = yr                                                            [1]
       X            Y            Z            R
 X 0.50 0.500000 0.000000 0.000000
 Y 0.30 0.091608 0.516784 0.091608
 Z 0.25 0.000000 0.750000 0.000000
 R 0.00 0.000000 0.000000 1.000000                                                                        [1]
                                                                       [Marks available 8, maximum 8]

 (ii)
 we need to consider each of the possible 4 step routes from Z to Z
    zzzz
    zxyz
    xxyz
    xyyz
    xyzz                                                                                                  [1]
 Probability = .5625^2 +.25*.5*.5*.5168 +.25*.5*.0916*.5168
 +2*(.25*.5*.5168*.75)                                                                                    [1]
 = 0.4515                                                                                                 [1]
                                                                       [Marks available 3, maximum 3]

 (iii)
 No                                                                                               [½]
 Because can’t move out of R.                                                                     [½]
                                                                       [Marks available 1, maximum 1]

 (iv)
 [0,0,0,1]                                                                                          [1]
                                                                       [Marks available 1, maximum 1]
                                                                                             [Total 13]


CS2A S2024
                                                                        © Institute and Faculty of Actuaries
    CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report



 Commentary:
 This stochastic processes question was reasonably well answered although many candidates
 did poorly in part (ii) by not considering the different routes.


                                                                                         [Paper Total 100]




                        END OF EXAMINERS’ REPORT




CS2A S2024
                                                                        © Institute and Faculty of Actuaries
www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries


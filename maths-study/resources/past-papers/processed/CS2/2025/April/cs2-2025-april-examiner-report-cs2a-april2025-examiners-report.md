---
normalized_id: cs2-2025-april-examiner-report-cs2a-april2025-examiners-report
exam_code: CS2
year: 2025
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS2/CS2A/Apr25/CS2A_April2025_Examiners' Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2025-april-examiner-report-cs2a-april2025-examiners-report

EXAMINERS’ REPORT
CS2 Risk Modelling and Survival Analysis
Paper A
Core Principles




                                 April 2025
       CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles April 2025 - Examiners’ report


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

For some candidates, this may be their first attempt at a professional
qualification examination. The Examiners expect all candidates to have a good level of
knowledge and understanding of the topics and therefore candidates should revise thoroughly
to prepare for closed-book and in-person examinations. In our experience, candidates that are
insufficiently prepared are not successful because of lack of knowledge, time management
issues and/or because they do not properly answer the questions.

Many candidates rely on past exam papers and examiner reports in preparing for
exams. Great caution must be exercised in doing so because each exam question is
unique. As with all professional examinations, it is insufficient to repeat points of principle,
formula or other textbook works. The examinations are designed to test “higher order”
thinking including candidates’ ability to apply their knowledge to the facts presented in detail,
synthesise and analyse their findings, and present conclusions or advice. Successful
candidates concentrate on answering the questions asked rather than repeating their
knowledge without application.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.



Sarah Hutchinson
Chair of the Board of Examiners
June 2025




CS2A A2025                                                              © Institute and Faculty of Actuaries
       CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles April 2025 - Examiners’ report


A.     General comments on the aims of this subject and how it is marked

The aim of the Risk Modelling and Survival Analysis Core Principles subject is to provide a
grounding in mathematical and statistical modelling techniques that are of particular
relevance to actuarial work, including stochastic processes and survival models.

Some of the questions in this paper admit alternative solutions from those presented in this
report, or different ways in which the provided answer can be determined. All mathematically
correct and valid alternative solutions received credit as appropriate.

In cases where an error was carried forward to later parts of the answer, candidates were not
penalised a second time for the same error if those later parts were otherwise answered
correctly.

In higher-order skills questions, where comments were required, well-reasoned comments
that differed from those provided in the solutions also received credit as appropriate.

Candidates are advised to take careful note of all instructions that are provided with the exam
in order to maximise their performance in future CS2A examinations.


B.     Comments on candidate performance in this diet of the examination

Overall performance in CS2 examinations continues to improve compared to previous
sessions with both the mean mark and the pass rate increasing. The examiners are encouraged
to see evidence that candidates are better prepared for the extensive CS2 syllabus. This
session the examination moved to a “closed book” format and hence the nature of some of the
questions is a little different to reflect this. However we would not want to overstate this for
CS2 where in recent Examiners’ Reports we encouraged candidates in the “open book” era to
prepare for the examination as if it were closed book.

Most questions on the CS2A paper begin by asking for some explanation or more simple
calculations related to a particular syllabus area and then progress to later question parts that
seek to apply that syllabus area to a particular scenario or to comment on the earlier results.
Successful candidates are therefore able to evidence both understanding of the module
content and application of the statistical and modelling techniques to a new scenario.

The questions where candidates scored the highest proportion of the available marks were Q2
on risk distributions and Q8 on stochastic processes. Historically it has been the survival
models questions that candidates have found the easiest, so it is good to see a wider
representation of the syllabus here. The question where candidates scored the lowest
proportion of available marks was Q7 on time series applications, an area where we often see
lower marks.

C.     Pass Mark

The Pass Mark for this exam was 57
948 presented themselves and 456 passed.




CS2A A2025                                                              © Institute and Faculty of Actuaries
          CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles April 2025 - Examiners’ report


Solutions for Subject CS2A – April 2025

 Q1
 (i)
 𝜇 = 𝐵𝑐                                                                                                      [½]
 (ii)
 𝜇       = 𝐵𝑐    = 0.043 (A)
 𝜇       = 𝐵𝑐    = 0.062 (B)                                                                                 [½]

 (B) / (A) gives 𝑐 =                                                                                         [½]

 So log (𝑐) = log             = 0.073187                                                                     [½]

 And c = 1.075932                                                                                            [½]
 Substitute back into (A) 𝐵 = 0.043 1.075932                                                                 [½]

 Gives B = 0.000178                                                                                          [½]
 (iii)
 First calculate the exponential force of mortality
 𝜇 = 0.000178. 1.075932       = 0.029823                                                                     [½]
 We need the probability of survival for 16 years and then death in next 2 years
 Prob = exp( -16 * 0.029823).[ 1 – exp( -2 * 0.029823)]                                                      [1]
         = 0.03593                                                                                           [½]
 (iv)
 We need the curtate expectation of future life at age 65 for 4 years (because the
 payments are annual in advance)

 Expected pension payments in first 5 years before guarantee is ∑                       𝑝                    [1]

                 t                   t_p_65
                 0                         1
                 1                 0.970618
                 2                 0.942099
                 3                 0.914418
                 4                  0.88755


                 sum               4.714684

                                                                                                             [1]
 Expected number of pension payments per 1000 members = 4714.684

CS2A A2025                                                                 © Institute and Faculty of Actuaries
         CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles April 2025 - Examiners’ report


Therefore number of additional pension payments = 5000 – 44714.684                                          [1]
=285.3157 (accept 285)                                                                                      [1]
                                                                                                   [Total 10]


 Commentary:
 The first three parts of this question were generally well answered. In part (iii) a number of
 candidates had not read carefully at which ages Gompertz and exponential mortality applied.
 Part (iv) was surprisingly not so well answered. The question is a simple application of the
 expectation of future life but could also have been answered from first principles.


Q2
(i)
exp(µ+1/2σ2 ) = 1000 (1)                                                                                    [½]
exp(2µ+σ2 )*(exp(σ2)-1) = 9,00,00 (2)                                                                       [½]
Dividing equation (2) by the square of (1) we get                                                           [½]
exp(σ2)-1) = 9,00,00/ 1000000 = .09                                                                         [½]
σ2 = ln(1.09)= .086178                                                                                      [½]
σ = 0.29356                                                                                                 [½]
Substituting in (1) we get:
µ = ln(1000)- ½* .086178                                                                                    [½]
= 6.86467                                                                                                   [½]
                                                                                                    [ 4 marks]
(ii)
Let X denote the individual claim amount variable.
                                                                                                            [½]
Then X ˜ log N(6.86467, 0.086178).
The claim amount paid by the reinsurer exceeds 600 if X> 1000

P(X>1000) = ∫           𝑓(𝑥)𝑑𝑥 , where f(x) is p.d.f of log N(6.86467,0.086178)                             [½]
= Ф(U0) - Ф(L0)                                                                                             [½]
Where U0 = ∞ and

L0 = (ln(1000)- 6.86467)/0.29356                                                                            [½]
       = (ln(1000)- 6.86467) /.29356
                                                                                                            [½]
       = 0.146666



CS2A A2025                                                                © Institute and Faculty of Actuaries
        CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles April 2025 - Examiners’ report


So, P(X>1000) = Ф(∞) - Ф(L0)

                  = 1- Ф(L0)

                  =1- Ф (0.146666)                                                                         [½]
                  = 1- 0.558302                                                                            [½]
                  = 0.44169 or 44.1698%                                                                    [½]
                                                                                                   [4 marks]
(iii)
P(amount paid > 600)               = P(amount of claim > 1000)
                                   = P(amount of claim > mean)                                             [½]
Which in this case < 50% given the shape of lognormal distribution                                         [½]
Note: no marks given for comments on the commercial implications of reinsurance
or speculation about the reinsurance premium. Marks awarded are for comments
about the probability distribution.
                                                                                                       [1 mark]
                                                                                                    [Total 9]



 Commentary:
 Parts (i) and (ii) were well answered and is a relatively straightforward application of the log
 normal distribution to a reinsurance scenario. Although only one mark, part (iii) was not well
 answered. Many candidates speculated about the commercial implications of reinsurance
 rather than commenting on the probability distribution.




Q3
(i)
Mean =lambda ^ (1/gamma) * Γ(alpha)Γ(1+1/gamma)⋅Γ(alpha −1/gamma)

0.785 = lambda ^ 0.5 * Γ2 Γ(1+1/2 )⋅Γ(2 −1/2)                                                             [1½]
        = lambda ^ 0.5 * 1* Γ1.5 Γ1.5                                                                       [1]
        = lambda ^ 0.5 * 1* 0.886 * 0.886                                                                  [½]
        = lambda ^ 0.5 * 1* 0.785                                                                          [½]
Giving, lambda = 1                                                                                         [½]
                                                                                                   [4 marks]
(ii)
F(x >X )=(lambda / (lambda + x ^ gamma)) ^ alpha                                                            [2]

CS2A A2025                                                               © Institute and Faculty of Actuaries
        CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles April 2025 - Examiners’ report


         0.05 =(1 / (1 + x ^ 2)) ^ 2                                                                       [½]
         0.2236 =(1 / (1 + x ^ 2))                                                                         [½]
         (1 + x ^ 2) = 1/ 0.2236                                                                           [½]
Giving; x = 1.86                                                                                            [1]
Ratio = 2.37                                                                                               [½]
                                                                                                   [5 marks]
(iii)
Ratio is lower than 2.5. Hence, inequality has not increased as per the criteria                            [1]
                                                                                                    [1 mark]
                                                                                                  [Total 10]



 Commentary:
 This question covers a risk distribution in a novel scenario but with the aid of the distribution
 function given in the Formulae and Tables book this question was well answered.


Q4
(i)
A patient in North hospital with no chronic illnesses who has not had the virus
before                                                                                                      [1]
                                                                                                       [1 mark]
(ii)
We minimise recovery times by maximising the hazard                                                         [1]
Hazard is slightly higher (recovery shorter) for South                                                     [½]
But the difference between hospitals does not appear be large (beta close to 0)                            [½]
And the coefficient is not statistically significant even at 10%                                           [½]
Chronic illnesses reduce the hazard (longer recovery)                                                      [½]
This covariate is statistically significant                                                                [½]
prior infections of the virus reduce the hazard (longer recovery)                                          [½]
This covariate is statistically significant                                                                [½]
Suggesting overall medical history is more important than place of treatment                                [1]
                                                                      [5½ marks available, maximum 5]
(iii)
For the person in the second study z1=1, z2=0, z3=0                                                        [½]
So their hazard function is h_0 * exp(0.06) where h_0 is baseline hazard                                    [1]


CS2A A2025                                                               © Institute and Faculty of Actuaries
        CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles April 2025 - Examiners’ report



And their survival function is S(5) = exp − ∫ ℎ 𝑒 .                𝑑𝑡 = 0.92                                  [1]

Therefore exp − ∫ ℎ 𝑑𝑡 = 0.92                 (    .   )
                                                           = 0.924478                                         [½]

For the person in the question z1=0, z2=2, z3=1                                                               [½]
So their hazard function is h_0 * exp(-0.51)                                                                  [½]

Their survival function is S(5) = exp − ∫ ℎ 𝑒                .
                                                                 𝑑𝑡 = 0.92 4478          (   .   )            [½]

= 0.95394                                                                                                     [½]
                                                                                                      [5 marks]
                                                                                                     [Total 11]


 Commentary:
 The question is an application of Cox’s Proportional Hazard model which was somewhat well
 answered although there was much variability in the quality of answers to part (ii). Key to this
 part is understanding which way around the hazard function operates in the scenario. The
 hazard is for recovery not mortality therefore we seek to maximise not minimise the hazard.
 Candidates who knew the formula for the survival function in terms of the baseline hazard in
 a proportional hazards model did well in part (iii) but a disappointing number of candidates
 did not apply the baseline hazard correctly.


Q5
(i)
|𝛼| < 1
                                                                                                              [2]
and no additional condition for 𝛽.                                                                            [1]
                                                                                                      [3 marks]
(ii)
𝑐𝑜𝑣(𝑒 , 𝑌 ) = 𝛼 𝑐𝑜𝑣(𝑒 , 𝑌         ) + 𝑐𝑜𝑣(𝑒 , 𝑒 ) + 𝛽𝑐𝑜𝑣(𝑒 , 𝑒          )=𝜎
due to the zero correlation between 𝑒 and 𝑒                                                                   [1]
Similarly
𝑐𝑜𝑣(𝑒       , 𝑌 ) = 𝛼 𝑐𝑜𝑣(𝑒      ,𝑌    ) + 𝑐𝑜𝑣(𝑒           , 𝑒 ) + 𝛽𝑐𝑜𝑣(𝑒     ,𝑒    )
                  = (𝛼 + 𝛽)𝜎                                                                                  [2]
Implying that for k=0,1
        𝑐𝑜𝑣(𝑌      , 𝑌 ) = 𝛼 𝑐𝑜𝑣(𝑌       ,𝑌       ) + 𝛽𝑐𝑜𝑣(𝑌      ,𝑒    ) + 𝑐𝑜𝑣(𝑌        ,𝑒 )
𝛾 = 𝛼𝛾 + (1 + 𝛼𝛽 + 𝛽 )𝜎                                                                                       [1]
𝛾 = 𝛼𝛾 + 𝛽𝜎                                                                                                   [1]
And for k>1


CS2A A2025                                                                  © Institute and Faculty of Actuaries
        CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles April 2025 - Examiners’ report


𝑐𝑜𝑣(𝑌      , 𝑌 ) = 𝛼𝑐𝑜𝑣(𝑌       , 𝑌 ) + 𝛽𝑐𝑜𝑣(𝑌      , 𝑌 ) + 𝑐𝑜𝑣(𝑒      , 𝑌 ) = 𝛼𝛾                           [1]
And therefore
        (1 + 𝛼𝛽)(𝛼 + 𝛽)
𝜌 =
        (1 + 𝛽 + 2𝛼𝛽 )                                                                                      [1]
𝜌 =𝛼         𝜌, k>1
                                                                                                            [1]
                                                                                                   [8 marks]
(iii)
As there is only one lag at the PACF or because the ACF shows exponential decay                             [1]
Then 𝛽 = 0                                                                                                  [1]
and as the first lag entries of both ACF and PACF are equal to 0.7                                          [1]
Then 𝛼 = 0.7                                                                                                [1]
                                                                                                   [4 marks]
                                                                                                  [Total 15]


 Commentary:
 Of the two time series analysis questions on the paper this was the one that generated the
 better answers. In part (ii) there are a number of ways to develop the recursive relationship in
 rho_k and all were given full credit as long as a number of steps were shown developing the
 gamma and then the rho functions step by step. Part (iii) is a reminder that candidates are
 well advised to familiarise themselves with the output from common time series models as well
 as the equations that characterise these models.



Q6
(i)
    0.968 0.03 0.002
𝑃 = 0.35 0.64 0.01
      0    0     1
                                                                                                            [1]
                                                                                                       [1 mark]
(ii)
By matrix multiplication the two-year transition matrix is 𝑃 =
 0.947524       0.04824      0.004236
  0.5628         0.4201       0.0171
     0              0            1                                                                         [½]
And reading from the matrix the required probability = 0.004236                                            [½]



CS2A A2025                                                               © Institute and Faculty of Actuaries
        CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles April 2025 - Examiners’ report


So the expected number is 250 * 0.004236                                                                   [½]
= 1.059                                                                                                    [½]
                                                                                                   [2 marks]
(iii)
For a company to never go on watch it must stay of No Concern and then go
straight to Insolvent                                                                                      [1]
Pr(NC to I after 1 year) = 0.002
Pr(NC to I after 2 years) = 0.968 * 0.002                                                                  [½]
…
Pr(NC to I after k years) = 0.968^(k-1) * 0.002                                                            [1]

Sum of all these probabilities to k=infinity = 0.002/ (1 – 0.968)                                          [1]

= 0.0625                                                                                                   [½]

                                                                                                   [4 marks]
(iv)
We move from a Markov Chain to a Markov jump process                                                       [1]
With varying claims conditions this must be time in-homogeneous                                            [1]
We would need to estimate transition rates or intensities over time                                        [1]
For this we need waiting times in the different states or residual holding times
between jumps and the number of transitions                                                              [1]
                                                                                                   [4 marks]
(v)
We simulate the Markov jump process as a Markov chain                                                     [1]
Can do this approximately by considering very small time periods                                         [½]
and consider the transition intensity to be proportionate to the time period                             [½]
then model the jump process as a series of discrete chains                                               [½]
Or an exact method needs some other way of estimating the transition probabilities                       [½]
Then the holding times are a series of exponential random variables                                      [½]
With a rate parameter derived from the transition probabilities                                          [½]
                                                                                                   [4 marks]
                                                                                                  [Total 15]

 Commentary:
 The first three parts of this question were somewhat well answered. They are a
 straightforward application of Markov chains. Parts (iv) and (v) were not well answered
 which was disappointing because, although this part has not been examined recently, the
 move from a Markov chain to a jump process and then estimation of a time in-homogeneous
 process are both set out in the CS2 Core Reading. Whilst the majority of questions in this CS2
 A paper will continue to focus on calculations based on the models and distributions covered
 in the syllabus, candidates should also be prepared to discuss modelling and estimation
 processes.



CS2A A2025                                                               © Institute and Faculty of Actuaries
         CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles April 2025 - Examiners’ report


Q7
(i)
Simple moments’ estimation conforms that
𝑎 = 0.522                                                                                                   [1]
And 𝑎 = 𝑟̅ (1 − 𝑎 ) = 0.8 ∗ (1 − 0.522) = 0.382                                                           [1½]
Additionally
𝜎 = 𝛾 − 𝑎 𝛾 = 𝛾 ∗ (1 − 𝑎 ) = 0.2 ∗ (1 − 0.522^2) = 0.146                                                  [1½]
                                                                                                    [4 marks]
(ii)
From the definition, the observed values for 𝑟            = log

                7.45
𝑟       = log        = 0.0341                                                                               [1]
                 7.2
The forecast function is simply obtained
                                       𝑟̂   =𝑎 +𝑎 𝑟
As 𝑟       is observed and is 0.04691692 then 𝑟̂           = 0.382 + 0.522 ∗ 0.0341                         [1]
= 0.400                                                                                                     [1]
As the error for this forecast is up to the value of the white noise at time 101, 𝜀             .
The 95%CI for the true value of 𝑟           is
𝑟̂      ± 1.96 𝜎                                                                                            [1]
0.400 ± 1.96 ∗ 𝑠𝑞𝑟𝑡(0.146) =                                                                                [1]
(-0.347,1.148)                                                                                              [1]
                                                                                                    [6 marks]
(iii)
Since 𝑄         = exp(𝑟     )∗𝑄       the corresponding values are                                          [1]
          Therefore 𝑄       = exp(0.400) ∗ 7.45 = 11.117                                                    [1]
And the interval is then
(exp(−0.3474223) , exp(1.147857)) ∗ 7.45 =                                                                  [1]
=               (5.263, 23.478)                                                                             [1]
                                                                                                    [4 marks]
                                                                                                    [Total 14]


 Commentary:
 This question was not well answered. The application of time series here involved a method of
 moments estimation to parameterise the series followed by forecasting using that series. The

CS2A A2025                                                                © Institute and Faculty of Actuaries
           CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles April 2025 - Examiners’ report



 underlying time series calculations are quite straightforward once what is being modelled (the
 log ratio function of an economic series) is clarified. This question illustrates well the two key
 attributes of success in the later questions in a CS2 A examination: detailed understanding of
 the core modelling material and careful application of that modelling to a novel scenario.


Q8
(i)
The probability that a supporter has a particular membership status next month
depends only on their membership status in the current month (i.e. the status in
previous month is not relevant)                                                                               [½]
Therefore the process is Markov.                                                                              [½]
                                                                                                          [1 mark]
(ii)
P=
  α+β          δ      0
   α           β     δ
       0       α    β+δ
                                                                                                            [2]
                                                                                                      [2 marks]
(iii)
(a) The chain is irreducible,                                                                              [½]
 as every state can be reached from every other.                                                           [½]
(b) It is aperiodic,                                                                                       [½]
 as the chain may remain at its current state for all three states.                                        [½]
                                                                                                      [2 marks]
(iv)
The transition matrix becomes
P=
 0.9 0.1 0
 0.5 0.4 0.1
  0         0.5     0.5
                                                                                                              [½]
P^3 =
 0.839 0.143 0.018
 0.715 0.214 0.071
 0.450 0.355 0.195
                                                                                                            [1]
The required probability is 0.071                                                                          [½]
                                                                                                      [2 marks]
(v)
Let the probability that a supporter is in class i according to the stationary
distribution
be πi       (i = 1-Basic, 2-Medium, 3-Advanced).
                                                                                                              [½]
The πi are given by the general formula π = π P.


CS2A A2025                                                                  © Institute and Faculty of Actuaries
       CS2A ‑ Risk Modelling and Survival Analysis ‑ Core Principles April 2025 - Examiners’ report


That is
(a) π1 = 0.9π1 + 0.5π2
(b) π2 = 0.1π1 + 0.4π2 + 0.5π3
(c) π3 = 0.1π2 + 0.5π3                                                                                    [1]
Also, π1 + π2 + π3 = 1                                                                                    [½]
From (a), π1 = 5π2.                                                                                       [½]
From (c), π3 = 0.2π2                                                                                      [½]
Hence, π2 = 1/(5 + 1 + 0.2) = 0.1612903                                                                   [½]
π1 = 5π2 = 0.8064515 and π3 = 0.2π2 = 0.03225806                                                          [1]
Hence, the stationary distribution is (0.8064515, 0.1612903, 0.03225806)                                  [½]
                                                                                                  [5 marks]
(vi)
Expected cost of the scheme per member per month is
£0×0.80645 + £10×0.16130 + £20×0.03226 = £2.2582                                                        [1½]
For the scheme to be worth running, therefore, the average profit per member per
month must exceed £2.2582.                                                                                [½]
The average monthly profit per ticket is
£S×50%×0 + £S×40%×1 + £S×10%×3 = £0.7S                                                                  [1½]
Hence, the required range value for S is
S > 2.2582/0.7
 i.e. S> 3.226 or S > £3.23                                                                               [½]
                                                                                                  [4 marks]
                                                                                                 [Total 16]


 Commentary:
 This question showed a continuation of a recent trend in this examination of improvement in
 the quality of answers to stochastic processes questions. The first four parts were generally
 well answered. The last part required application of the stationary distribution. Where
 candidates calculated prices using profit per member rather than profit per ticket, substantial
 credit was still given.


                                                                                         [Paper Total 100]



                        END OF EXAMINERS’ REPORT


CS2A A2025                                                              © Institute and Faculty of Actuaries
www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries



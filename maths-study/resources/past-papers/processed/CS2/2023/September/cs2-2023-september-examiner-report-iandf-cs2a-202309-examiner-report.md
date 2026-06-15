---
normalized_id: cs2-2023-september-examiner-report-iandf-cs2a-202309-examiner-report
exam_code: CS2
year: 2023
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS2/CS2A/Sep23/IandF_CS2A_202309_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2023-september-examiner-report-iandf-cs2a-202309-examiner-report

EXAMINERS’ REPORT
CS2 - Risk Modelling and Survival Analysis
Core Principles
Paper A




                             September 2023
    CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report



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

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.



Sarah Hutchinson
November 2023




CS2A S2023                                                           © Institute and Faculty of Actuaries
   CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report



   A. General comments on the aims of this subject and how it is marked

   The aim of the Risk Modelling and Survival Analysis Core Principles subject is to
   provide a grounding in mathematical and statistical modelling techniques that are of
   particular relevance to actuarial work, including stochastic processes and survival models.

   Some of the questions in this paper admit alternative solutions from those presented in
   this report, or different ways in which the provided answer can be determined. All
   mathematically correct and valid alternative solutions received credit as appropriate.

   In cases where an error was carried forward to later parts of the answer, candidates were
   given full credit for those later parts.

   In higher order skills questions, where comments were required, well-reasoned comments
   that differed from those provided in the solutions also received credit as appropriate.

   Candidates are advised to take careful note of all instructions that are provided with the
   exam in order to maximise their performance in future CS2A examinations.


   B. Comments on candidate performance in this diet of the examination.

   CS2 has an extensive syllabus, and the examinations will cover many areas of that
   syllabus with problem questions that test understanding and the ability to apply statistical
   and modelling techniques in a range of scenarios. Therefore, exam preparation and in-
   assessment question answering strategies are both important components to success.

   In preparation, candidates are reminded that covering the whole syllabus and practicing
   questions in all areas is important. Questions in Survival Analysis have consistently been
   better than those in other areas notably Stochastic Processes, Time Series and the later
   parts of the Core Reading on Loss Distributions. Candidates need to give themselves
   adequate time to prepare and revise this large syllabus.

   Within the examination, careful reading of the questions followed by planning which
   leads to well-structured answers is important. Although the exam is open book, in some
   ways candidates might be advised to prepare as if it were closed book and there is more
   value in using examination time to plan and structure solutions to particular problem
   questions rather than research syllabus material in open books. The examiners hope that
   the solutions contained in this document might give examples of thorough and structured
   solutions to problem questions.


   C. Pass Mark

   The Pass Mark for this exam was 55.
   993 presented themselves and 331 passed.




CS2A S2023                                                          © Institute and Faculty of Actuaries
   CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report



   Solutions for Subject CS2A - September 2023

   Q1
   (i)
   Gompertz Law is a relatively simple expression for the force of mortality           [½]
   It has been found to work well at older ages                                        [½]
   In 2020 this group were aged 64 to 72                                               [½]
   A Makeham form with a non-age related element might be slightly better              [½]
   The formula contains and exponential element to mortality                           [½]
   The value of c in this Gompertz expression is relatively small                      [½]
   Hence mortality increases relatively slowly with age                                [½]
                                                           [Marks available 3½, maximum 2]

   (ii)
   assuming that the force of mortality is constant for each year of age                                [½]
   we can find one year survival probabilities by exp(-mu_x)                                            [½]
   and four year survival probabilities by chaining together for 4 years                                [½]
   then expected number at the next dinner
   = 3 * 4_p_72 + 8 * 4_p_68 + 18 * 4_p_64                                                              [1]

   The mu_x and p_x calculations are:

          age         mu_x             exp(-
                                       mu_x)
          64          0.004617         0.995394
          65          0.004619         0.9953921
          66          0.00462          0.9953903
          67          0.004622         0.9953885
          68          0.004624         0.9953866
          69          0.004626         0.9953848
          70          0.004628         0.9953829
          71          0.00463          0.9953811
          72          0.004631         0.9953793
          73          0.004633         0.9953774
          74          0.004635         0.9953756
          75          0.004637         0.9953737
                                                                                                    [1½]
   giving expected number
   = 18* 0.981692 + 8 * 0.981663 + 3* 0.981634
   = 28.47 people                                                                                       [1]

   Alternative solution using the formula for t_p_x in the Gompertz found in the Core
   Reading (the formula can be stated and does not need to be derived)

   Using the formula on page 32 of the Core Reading:
   4p72 = g ^(c^72 ( c^4-1))
   where g = exp(-0.0045 / log(1.0004)) = 0.000012978
   and c = 1.0004


CS2A S2023                                                          © Institute and Faculty of Actuaries
   CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report




   So:
   4p72 = 0.9816302

   Similarly:
   4p68 = g ^(c^72 ( c^4-1)) = 0.9816593
   4p64 = g ^(c^72 ( c^4-1)) = 0.98168
   So expected number is: 0.9816302 * 3 + 0.9816593 * 8 + 0.9816883 * 18
   = 28.46855
   (full marks are available for other alternative approaches correctly evaluated)

   (iii)
   the new member is age 60 in 2020
   there are dinners in 2024 / 28 / 32 / 36 / 40                                                        [1]
   therefore expected cost
   = 60 * (4_p_60 + 8_p_60 + 12_p_60 + 16_p_60 + 20_p_60 )                                              [1]
   again assuming constant force of mortality during each year
   and that the same Gompertz formula can be applied to the new entrant                                 [1]

   the mu_x and p_x are given by

          age         mu_x             exp(-
                                       mu_x)
          60          0.004609         0.9954013
          61          0.004611         0.9953995
          62          0.004613         0.9953977
          63          0.004615         0.9953958
          64          0.004617         0.995394
          65          0.004619         0.9953921
          66          0.00462          0.9953903
          67          0.004622         0.9953885
          68          0.004624         0.9953866
          69          0.004626         0.9953848
          70          0.004628         0.9953829
          71          0.00463          0.9953811
          72          0.004631         0.9953793
          73          0.004633         0.9953774
          74          0.004635         0.9953756
          75          0.004637         0.9953737
          76          0.004639         0.9953719
          77          0.004641         0.99537
          78          0.004643         0.9953682
          79          0.004644         0.9953663
                                                                                                    [1½]

   then
   4_p_60 = 0.981721
   4_p_64 = 0.981692

CS2A S2023                                                          © Institute and Faculty of Actuaries
   CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report



   4_p_68 = 0.981663
   4_p_72 = 0.981634
   4_p_76 = 0.981605

   expected cost = 60 * (0.981721 + (0.981721)(0.981692) +
   (0.981721)(0.981692)(0.981663) + (0.981721)(0.981692)(0.981663)(0.981634)
   + (0.981721)(0.981692)(0.981663)(0.981634)(0.981605)                           [1]
   = 60 * 4.731859 = £283.91                                                      [½]
                                                                            [Total 13]


   This question was generally well-answered.

   There are a number of correct routes to solutions for parts (ii) and (iii) and all are
   able to receive full credit. The Gompertz calculations are all quite straightforward.
   Most candidates completed these in a spreadsheet and then pasted them into their
   answer document with the addition of appropriate explanations and assumptions.

   Where candidates were not awarded many marks,, the most common reason was not
   reading the question carefully.




   Q2
   (i)(a)
   (F(beta_n * x + alpha_n)) ^ n
   = (beta_n * x + alpha_n) ^ n                                                                         [1]
   = (x / n + 1 – 1 / n) ^ n                                                                            [½]
   = (1 – 1 / n * (1 – x)) ^ n                                                                          [½]
   = (1 – 1 / n * (1 + C * (x – A) / B) ^ -(1 / C)) ^ n                                                 [½]

   (i)(b)
   (F(beta_n * x + alpha_n)) ^ n
   = (1 – (lambda / (lambda + beta_n * x + alpha_n)) ^ delta) ^ n                         [1]
   = (1 – ((lambda + beta_n * x + alpha_n) / lambda) ^ -delta) ^ n                        [½]
   = (1 – ((lambda * n ^ (1 / delta) + n ^ (1 / delta) * x) / lambda) ^ -delta) ^ n       [½]
   = (1 – 1 / n * (1 + x / lambda) ^ -delta) ^ n                                          [½]
   = (1 – 1 / n * (1 + C * delta * x / lambda) ^ -(1 / C)) ^ n                            [½]
   = (1 – 1 / n * (1 + C * (x – A) / B) ^ -(1 / C)) ^ n                                   [½]
   (For both (a) and (b) the candidate can obtain marks either by starting with LHS of the
   equations in the question and substituting in the CDF of the uniform / pareto to obtain the
   RHS or they can start with the RHS and apply the values of A,B,C to obtain the uniform /
   pareto CDFs. In either case at least two lines of working are required beyond the initial
   substitution to “demonstrate” as the question asks)

   (ii)
   The LHS is the probability that the block maximum of n observations is less than
   or equal to beta_n * x + alpha_n                                                                     [1]


CS2A S2023                                                          © Institute and Faculty of Actuaries
   CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report



   since the block maximum is less than or equal to beta_n * x + alpha_n if and
   only if all the observations are less than or equal to beta_n * x + alpha_n               [1]
   As n tends to infinity, the RHS tends to exp(-1 / n * (1 + C * (x – A) / B) ^ -(1 / C)) [1]
   which is the distribution function of the generalised extreme value (GEV)
   distribution                                                                              [1]
   We have therefore shown that the distribution of a linear function of the block
   maximum approaches a GEV distribution as n tends to infinity                              [1]
   we can use (1+x/n)^n tends to exp(x) as n tends to infinity                               [1]
   In part (i)(a), the value of C is negative                                                [½]
   which indicates that the GEV distribution is of Weibull type                              [½]
   This is as expected since the uniform distribution has a finite upper limit               [½]
   In part (i)(b), the value of C is positive                                                [½]
   which indicates that the GEV distribution is of Fréchet type                              [½]
   This is as expected since the Pareto distribution has a heavy tail                        [½]
                                                               [Marks available 9, maximum 8]
   (½ mark available for other generalised sensible comments, and 1 mark available for
   other GEV related comments)
                                                                                       [Total 14]


   This question was poorly answered and in terms of average marks was the question
   that attracted lowest marks as a percentage of those available.

   In part (i) candidates who scored well set out a clear structure that aligned with the
   question’s request to “demonstrate” the equality given.

   For both parts (i) (a) and (b) the marks could be obtained either by starting with LHS
   of the equations in the question and substituting in the CDF of the uniform / pareto to
   obtain the RHS or by starting with the RHS and applying the values of A,B,C to obtain
   the uniform / pareto CDFs. In either case, clarity of structure to the answer is key to
   demonstrating understanding of the loss distributions in question.

   Part (ii) was particularly poorly answered and candidates are reminded of the
   importance of revising the whole subject syllabus including Extreme Value.




   Q3
   (i)
   Let X_1, X_2 …X_5 be the choice of meal in the days 1-Monday, 2-Tuesday,
   through to … 5-Friday.
   P(X_1=Pizza, X_3=Salad)= P(X_3=Salad|X_1=Pizza)* P(X_1=Pizza)                                        [1]
   =P^2(2,1) * 1/3                                                                                      [1]
   =0.24*1/3                                                                                            [½]
   =0.08                                                                                                [½]




CS2A S2023                                                          © Institute and Faculty of Actuaries
   CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report



              0.3 0.2 0.5     0.3 0.2 0.5     0.26 0.22                            0.52
   Where P^2=�0.1 0.3 0.6� ∗ �0.1 0.3 0.6� = �0.24 0.23                            0.53�
              0.3 0.2 0.5     0.3 0.2 0.5     0.26 0.22                            0.52
                                                                                                        [1]
   (Full marks also available where the candidate uses the relevant direct probability
   calculations rather than using the P^2 matrix)

   (ii)
   P(X_3=Sushi, X_5=Sushi)= P(X_1=Pizza , X_3=Sushi,X_5=Sushi)+
   P(X_1=Salad, X_3=Sushi,X_5=Sushi) + P(X_1=X_3 = X_5 =Sushi)                                          [1]
   For the first term:
   P(X_1=Pizza , X_3=Sushi,X_5=Sushi)=                                                                  [½]
   P(X_1=Pizza) P( X_3=Sushi,X_5=Sushi| X_1=Pizza) =                                                    [½]
   P(X_1=Pizza) P( X_3=Sushi | X_1=Pizza)* P( X_5=Sushi | X_3=Sushi)=                                   [½]
   1/3 * P^2(2,3) * P^2(3,3) = 1/3*0.53*0.52                                                            [½]
   =0.09187                                                                                             [½]

   Similarly the second term is
   P(X_1=Salad , X_3=Sushi,X_5=Sushi)=                                                                  [½]
   1/3* P^2(1,3)* P^2(3,3)=1/3*0.52*0.52                                                                [½]
   =0.09013                                                                                             [½]

   and the final term is
   P(X_1 = X_3 = X5 = Sushi) = 1/3*052*0.52 = 0.09013                                               [½]
   And so the final figure is 0.09187+0.09013+0.09013 = 0.272                                       [½]
                                                                                              [Total 10]


   This question was generally well answered and is a relatively straightforward
   application of stochastic processes. The matrix approach, correctly applied, provides
   the most straightforward route to answering the whole question whereas the
   combination of individual direct-route probability calculations was more prone to
   error.




   Q4
   (i)
   A_t = sum(i=1 to t) Z_i                                                                              [½]
   E[A_t] = sum(i=1 to n) E[Z_i] = 0                                                                    [½]
   Var(A_t) = sum(i=1 to n) Var(Z_i)
   = sum(i=1 to t) { 2^2 x 0.5 + 2^2 x 0.5) = 4t                                                        [1]

   (ii)
   There are 2^n paths the score may take and each one has equal probability                            [1]
   In order for A_n = k there must be non-negative integers p and m
   where p is the number of ‘+2’ and m the number of ‘-2’ such that
   p + m = n, and

CS2A S2023                                                          © Institute and Faculty of Actuaries
   CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report



   2(p – m) = k                                                                                         [1]
   that is
   p = (2n + k)/4
   m = (2n – k)/4                                                                                       [½]

   The number of ways to arrange these p and m results is
   �𝑝𝑝+𝑚𝑚
      𝑝𝑝
                   𝑛𝑛
          � = �(2𝑛𝑛+𝑘𝑘)/4�                                                                              [1]
   Hence
                          𝑛𝑛
   Pr(A_n = k) = �(2𝑛𝑛+𝑘𝑘)/4 � /2𝑛𝑛                                                                     [½]

   (iii)
                           Pr(𝐴𝐴𝑛𝑛 =0 |𝐴𝐴1 =2) 𝑥𝑥 Pr (𝐴𝐴1 =2)
   Pr(A_1 = 2 | A_n = 0) =            Pr(𝐴𝐴 =0)
                                                                                                        [½]
                                               𝑛𝑛
   now Pr(A_1 = 2) = ½ and                                                                              [½]
                      𝑛𝑛
   Pr(A_n = 0) = � 𝑛𝑛� /2𝑛𝑛                                                                             [½]
                      2


   for Pr(A_n = 0 | A_1 = 2) there are 2^(n-1) paths the score may take after A_1 = 2
   we need non-negative p’ and m’ where p’ is the number of +2 and m’ the number
   of -2
   then
   p’ + m’ = n -1
   m’ – p’ = 1
   so
   m’ = n/2 and p’ = n/2 – 1                                                                            [1]

   The number of ways to arrange these p’ and m’ results is
   �𝑝𝑝′+𝑚𝑚′
       𝑝𝑝′
           � = �𝑛𝑛−1
                𝑛𝑛
                   −1
                      �                                                                                 [1]
                 2


   so
                                1     𝑛𝑛−1               𝑛𝑛−1
                                  𝑥𝑥 �𝑛𝑛 �/2𝑛𝑛−1        �𝑛𝑛   �
                                2
                                      2 −1               2 −1
   Pr(A_n = 0 | A_1 = 2) =                          =                                                   [1]
                                     𝑛𝑛                   𝑛𝑛
                                    �𝑛𝑛�/2𝑛𝑛             �𝑛𝑛�
                                      2                       2


   = ½ n /n     = 0.5                                                                         [½]
                                                                                      [Total 11]
   Alternatively full marks are available for a full reasoning out of 0.5 in words: This
   reasoning would include the following or similar,
   • the first outcome is either a pass or a fail.
   • the number of routes to a final score of 0 at time n if the first outcome is pass,
   • is the same as the number of routes to a final score of 0 at time n if the first is a fail.
   • due to symmetry of the success / fail pathways.
   • the success / failure probability for the first outcome is ½.
   • therefore the required probability must be 0.5.




CS2A S2023                                                          © Institute and Faculty of Actuaries
   CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report




   Overall, this question was very poorly answered, particularly parts (ii) and (iii).

   Part (i) was well answered.

   In part (ii) candidates that recognised the Binomial nature of the problem were
   rewarded with more marks available the more reasoning was given. This question is
   an excellent example of the application of statistical techniques covered in the Core
   Reading to a novel problem. These questions do require candidates spend some time
   thinking through the problem and structuring an answer and the examination papers.




   Q5
   (i)
   p = 0, d = 1, q = 1                                                                                  [1]

   (ii)
   var(Y_t) = var(e_t + b * e_t-1)
   = var(e_t) + b ^ 2 * var(e_t-1) + 2 * b * cov(e_t, e_t-1)                                            [1]
   = sigma ^ 2 + b ^ 2 * sigma ^ 2 + 2 * b * 0                                                          [½]
   = (1 + b ^ 2) * sigma ^ 2                                                                            [½]

   cov(Y_t, Y_t-1) = cov(e_t + b * e_t-1, e_t-1 + b * e_t-2)
   = cov(e_t, e_t-1) + b * cov(e_t, e_t-2) + b * cov(e_t-1, e_t-1) + b ^ 2 * cov(e_t-1, e_t-2)
                                                                                            [1]
   = 0 + b * 0 + b * sigma ^ 2 + b ^ 2 * 0                                                  [½]
   = b * sigma ^ 2                                                                          [½]

   (iii)
   Note that var(X_t) is the same as cov(X_t, X_t-k) for k = 0                                          [½]

   cov(X_t, X_t-k) = cov(sum(1, t): Y_i, sum(1, t - k): Y_j)
   = sum(1, t): sum(1, t - k): cov(Y_i, Y_j)                                                            [1]

   The double sum contains t - k terms with j = i                                                       [½]
   t - k - 1 terms with j = i + 1                                                                       [½]
   and t - k terms with j = i - 1                                                                       [½]
   unless k = 0, in which case there are t - k - 1 terms with j = i - 1                                 [½]

   Hence if k > 0, then cov(X_t, X_t-k) = (t - k) * (1 + b ^ 2) * sigma ^ 2
   + (t - k - 1) * b * sigma ^ 2 + (t - k) * b * sigma ^ 2                                              [1]
   = (t - k) * (1 + b ^ 2) * sigma ^ 2 + (2 * (t - k) - 1) * b * sigma ^ 2                              [½]

   If k = 0, then cov(X_t, X_t-k) = var(X_t) = (t - k) * (1 + b ^ 2) * sigma ^ 2
   + (t - k - 1) * b * sigma ^ 2 + (t - k - 1) * b * sigma ^ 2                                          [½]
   = t * (1 + b ^ 2) * sigma ^ 2 + 2 * (t - 1) * b * sigma ^ 2                                          [½]

CS2A S2023                                                          © Institute and Faculty of Actuaries
   CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report




   (iv)
   The autocorrelation at lag k is cov(X_t, X_t-k) / var(X_t)                                       [1]
   Hence the results show that the autocorrelation decreases                                        [1]
                                                                                              [Total 13]


   This question was reasonably well answered. Following recent examination sessions
   where Time Series questions in paper A have been very poorly answered, the
   examiners were pleased to see improvement in this area.

   Parts (i) and (ii) were well answered and are straightforward applications of the Core
   Reading on ARIMA() models.

   Part (iii) was less well answered and as with comments on earlier questions, a major
   differentiator between stronger and weaker answers was the clarity of structure in the
   solution set out.




   Q6
   (i)
   X1 and X2 be the random variables representing cash withdrawal per customer
   from the two ATM vestibules respectively                                        [½]
   ‘X’ be the random variable representing combined cash withdrawal per customer   [½]
   Let lambda1 and lambda2 be the parameters of the Compound Poisson distributions [½]
   As per page 13 of Unit 2 of the core reading, sum of 2 compound Poisson
   distributions follows a Compound Poisson distribution with
   Parameter lambda_c= lambda1 + lambda2                                           [1]
   And the cdf of the combined withdrawn amount per customer is;
   P (X < 1400) = 1/ lambda_c *{lambda * P (X1 < 1400) + lambda2 * P ( X2 < 1400) }
                                                                                  [1½]
   = 1/70{20* phi((1400-1500)/300) +50* phi((1400-1000)/200) }                    [1½]
   =0.80359                                                                        [½]

   (ii)
   Let S1 and S2 be the random variables representing the 2 compound distributions
   from the two ATM vestibules respectively                                                             [½]
   Let A= S1+ S2                                                                                        [½]

   Exp(A) = lambda_c * EXP(X)                                                                           [½]
   Variance(A) = lambda_c * (Var(X) + (EXP(X))^2)                                                       [½]

   MGF (X) = EXP(e^tx) = 1/ lambda_c *{lambda1 * MGF (X1) + lambda2
   * MGF (X2) }                                                                                         [1]

   Deriving once and taking t= 0 gives EXP(X) = 1/ lambda_c *{lambda1
   * EXP (X1) + lambda2 * EXP (X2) }                                                                [1½]

CS2A S2023                                                          © Institute and Faculty of Actuaries
   CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report




   Deriving TWICE and taking t= 0 = EXP(X^2) = 1/ lambda_c *{lambda1
   * EXP (X1^2) + lambda2 * EXP (X2^2) }                                                            [1½]

   Therefore;
   Exp(A) = lambda_c * EXP(X)       = 20* 1500+50*1000=$80000                                           [½]
   Variance(A) = lambda_c * EXP(X^2)
               = 20* ( 1500^2+ 300^2) +50*(1000^2+ 200^2)
               = $ 98,800,000
                                                                                                    [1]
   S.D (A) = $ 9939.82                                                                              [½]
                                                                                              [Total 14]

   Alternative solution
   using the formula on p.16 of the Core Reading
   E[A] = E[S1 + S2]
   = E[S1] + E[S2]
   = E[X] * E[N] + E[Y] * E[M]
   = 1500*20 + 1000*50
   = 80,000
   Var[A] = Var[S1+S2] = Var[S1] + Var[S2]
   = 20* E[X^2] + 50* E[Y^2]
   = 20 * (1500^2 + 300^2) + 50 * (1000^2 + 200^2)
   = 98,800,000
   so standard deviation = sqrt(98800000) = 9939.82


   Part (i) was poorly answered whereas part (ii) was reasonably well answered,
   meaning that the shape of marks given to many candidates was quite unusual for this
   question.

   The main issue with part (i) was the tendency of many candidates to use a ‘sum of
   normal distributions’ rather than a compound distribution approach. Where this was
   done answers were either incorrect or unnecessarily approximate. The necessary
   equations for compound Poisson distributions are all found in the Core Reading and
   the examiners would expect candidates to be familiar with these.




   Q7
   (i)
   First calculate 1- λ at each event
   1-λ =0.9 (trivial)
   1-λ =0.7/0.9 = 0.7778
   1-λ =0.56/0.7 = 0.8
   1-λ =0.373/0.56 = 0.66607 but accept rounding to 2/3 hereafter
                                                                                                    [1½]


CS2A S2023                                                          © Institute and Faculty of Actuaries
   CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report



   Thus lambda:

        Time since                 S(t)                      1-lambda                  lambda
        operation (days)
        0≤t<2                      1
        2≤t<4                      0.900                     0.900                     0.100
        4≤t<5                      0.700                     0.778                     0.222
        5≤t<7                      0.56                      0.800                     0.200
        7≤t<10                     0.373                     0.667                     0.333
                                                                                                        [2]

   λ = 0.1
   The only combination is d=1, n=10                                                                    [1]
   λ = 0.222
   The only combination is d=2, n=9                                                                     [½]
   λ = 0.2000
   The only combination is d=1, n=5                                                                     [½]

   λ = 0.33333
   The only combination, given there must be less than 4 lives at this point is d=1, n=3
                                                                                                        [½]

   Need to account censored events:
   Must be 2 censoring events before time = 2 as n=10 at that point                                     [½]
   Must be 2 censoring events at time = 4 to fall from n=9 to n=5                                       [½]
   Must be 1 censoring event at time = 5 or 6 to fall from n=5 to n=3                                   [1]

   So in summary

        Time (days)                    deaths                          Censoring events
        <2                             0                               2
        2                              1                               0
        4                              2                               2
        5                              1                               1 or
        6                              0                               1
        7                              1                               0

   (ii)
   Unlikely for there to have been random censoring                                                     [½]
   Very sick patient in bed all the time; it’s difficult to see how censoring could
   have occurred, but data indicates this                                                               [½]

   (iii)
   Collect more data                                                                                    [½]
   Have more frequent observations eg hourly                                                            [½]
   Extend the period of observation                                                                     [½]
   Patients dying in last 2 intervals implies significant lost important data                           [½]
   Reduce heterogeneity and obtain several different S(t) estimates                                     [½]
   Separate for male/female, existing health conditions, other sensible classes                         [½]

CS2A S2023                                                           © Institute and Faculty of Actuaries
   CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report



                                                                   [Marks available 3, maximum 2]
                                                                                         [Total 11]


   This question was very well answered. In terms of the average mark as a percentage of
   the available marks, this question was the best answered on the paper. Throughout this
   session in both A and B papers, candidates have often done best in survival models
   questions.

   In part (i) again there is a new presentation of a familiar topic (Kaplan Meier) and
   once again the best answers showed a clear structure: starting with the 1-lambda
   terms implied by the survival function, moving to derive lambda and finally
   considering censoring.

   In part (ii) a large range of comments about censoring were given credit.




   Q8
   (i)
   mean(y) = exp[mu+0.5*Sigma^2 ] - - (Eqn 1)                                                           [½]
   Var(y) = exp[2*mu+ Sigma^2] [exp(Sigma^2)-1] - - (Eqn 2)                                             [1]
   squaring Eqn 1
   mean(y)^2 = exp[2*mu+Sigma^2 ] - - (Eqn 3)                                                           [½]
   dividing Eqn 2 by Eqn 3
   var(y)/ mean(y)^2 = [exp(Sigma^2)-1]                                                                 [½]

   Hence:
   Sigma = (log((sd(y)/mean(y))^2+1))^0.5 = 0.3852                                                      [½]
   Mu = log(mean(y))-0.5*sigma^2 = 7.5267                                                               [½]
   P(X>x) = 1-psi(ln(x)-mu/sigma)=0.01 gives x = 4550.2                                                 [1]
   Using Invpsi(0.99) = 2.33                                                                            [½]

   (ii)
   P(X<1000) = psi(ln(1000)-mu/sigma)= 5.41%
   So 541 claims                                                                                        [1]

   (iii)
   The probability of very large claims may be significantly underestimated                 [½]
    leading to potential solvency issues                                                    [½]
   This is particularly the case for long, fat-talied distributions (leptokurtic)           [1]
   The distribution gives the theoretical possibility of negative claims                    [½]
   It may be suitable under some conditions                                                 [½]
   where the claims distribution is not skewed                                              [½]
   and has thin-tails                                                                       [½]
   It should be left to the insurer’s judgement.                                             [1]
                                                                 [Marks available 5, maximum 3]


CS2A S2023                                                          © Institute and Faculty of Actuaries
   CS2A - Risk Modelling and Survival Analysis - Core Principles - September 2023 - Examiners’ report



   (iv)
   Weibull is potential candidate distribution                                                [1]
   and Gamma is potential candidate distribution                                              [1]
   both can model skewed observation data,                                                    [½]
   and are non-negative                                                                       [½]
   Exponential will not be suitable,                                                          [½]
   as it is a decreasing function of x.                                                       [½]
                                                                   [Marks available 4, maximum 3]

   Decision criteria:
   Use AIC/BIC scores                                                                         [½]
   or calculate the (log) Likelihood                                                          [½]
   or carry out a Chi squared test                                                            [½]
   or use QQ plots                                                                            [½]
   May apply Extreme Value Thery to test the tails                                            [½]
   may depend on the model used in previous years                                             [½]
   or on what is typically used by insurers                                                   [½]
                                                                 [Marks available 3½, maximum 2]
                                                                                        [Total 14]


   This question was reasonably well answered.

   The calculations in parts (i) and (ii) are relatively straightforward applications of loss
   distributions.

   In part (iii) candidates successfully used a number of different approaches to gain
   marks. Some applied the results from (i) to calculate a probability of large claim and
   then commented on that probability whilst others used the portfolio of policies given in
   the question and centred their comments on that.

   In part (iv) many candidates gave full answers on the candidate distributions but wrote
   too little on potential decision criteria.




                                                                                    [Paper Total 100]

                       END OF EXAMINERS’ REPORT




CS2A S2023                                                          © Institute and Faculty of Actuaries
Beijing
14F China World Office 1 · 1 Jianwai Avenue · Beijing · China 100004
Tel: +86 (10) 6535 0248

Edinburgh
Level 2 · Exchange Crescent · 7 Conference Square · Edinburgh · EH3 8RA
Tel: +44 (0) 131 240 1300

Hong Kong
1803 Tower One · Lippo Centre · 89 Queensway · Hong Kong
Tel: +852 2147 9418

London (registered office)
7th Floor · Holborn Gate · 326-330 High Holborn · London · WC1V 7PP
Tel: +44 (0) 20 7632 2100

Oxford
1st Floor · Belsyre Court · 57 Woodstock Road · Oxford · OX2 6HJ
Tel: +44 (0) 1865 268 200

Singapore
5 Shenton Way · UIC Building · #10-01 · Singapore 068808
Tel: +65 8778 1784




www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries


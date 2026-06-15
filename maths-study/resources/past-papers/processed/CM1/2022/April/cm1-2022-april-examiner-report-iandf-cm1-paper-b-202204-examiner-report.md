---
normalized_id: cm1-2022-april-examiner-report-iandf-cm1-paper-b-202204-examiner-report
exam_code: CM1
year: 2022
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CM1/CM1B/Apr22/IandF_CM1_Paper B_202204_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm1-2022-april-examiner-report-iandf-cm1-paper-b-202204-examiner-report

INSTITUTE AND FACULTY OF ACTUARIES




                         EXAMINERS’ REPORT


                                         April 2022

                        CM1 - Actuarial Mathematics
                              Core Principles
                                 Paper B


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
particularly the open-ended questions in the Specialist Advanced (SA) and Specialist
Principles (SP) subjects, the report may contain more points than the Examiners will expect
from a solution that scores full marks.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.


Sarah Hutchinson
Chair of the Board of Examiners
July 2022



CM1B A2022                                                        © Institute and Faculty of Actuaries
             CM1B - Actuarial Mathematics - Core Principles - April 2022 - Examiners’ report


   A. General comments on the aims of this subject and how it is marked

   CM1 provides a grounding in the principles of modelling as applied to actuarial
   work - focusing particularly on deterministic models which can be used to model and
   value known cashflows as well as those which are dependent on death, survival, or other
   uncertain risks.

   The worksheets provided to candidates for each question give a suggested format for part
   or all of the solution and the methodology used in the model solutions follow these
   suggested formats. Candidates are not penalised for using a valid alternative approach.
   The worksheets are also designed so that the final numerical answers for some questions
   are to be shown on a specified ‘Answers’ sheet. Candidates are not penalised for not
   using these sheets if their final answers are clearly shown on their working sheets.

   Candidates may not be awarded full marks where insufficient working is shown.

   The exam is not designed to be a test of Excel skills. Thus, some functionality which may
   be preferred in a real-world work environment is not necessarily required to answer the
   questions. However, some good practices are useful to the candidate e.g. including
   variables/parameters the question states will change as inputs rather than hard coding
   these into formulae.

   Where a question specifies a method to use or not use (e.g. without using a scenario
   solving tool such as Goal Seek or Solver) then where a candidate does not follow that
   instruction they should not expect to be awarded full marks.

   B. Comments on candidate performance in this diet of the examination.

   The comments that follow concentrate on areas where candidates could have improved
   their performance. Where no comment is made, the question was generally well
   answered. The examiners look most closely at the performance of the candidates close to
   the pass mark and the comments therefore often relate to those candidates.

   There appeared to be a large number of inadequate prepared candidates who had
   underestimated the quantity of study required for the subject and/or who had insufficient
   familiarity with Excel to make a meaningful attempt at the CM1B paper with 30% of
   candidates scoring 30 or less on the paper.

   Candidates should pay attention to any instructions included in questions as this will
   provide key information as to how marks will be awarded.


   C. Pass Mark

   The Pass Mark for this exam was 58.
   1644 presented themselves and 520 passed.




CM1B A2022                                                             © Institute and Faculty of Actuaries
                   CM1B - Actuarial Mathematics - Core Principles - April 2022 - Examiners’ report


Solutions for Subject CM1B - April 2022- please refer to excel file

Q1

 In Part (i) common errors included: -
 Failing to identify the time periods when reserves would be required;
 Ignoring elements of the calculation including survival probability and discounting at the
 interest rate on non-unit cashflows:
 Using the risk discount rate rather than the interest rate on non-unit reserves when
 calculating reserves:
 Calculating negative reserves.
 In Part (ii) many candidates’ calculations resulted in negative profits at year ends after
 allowing for the reserves calculated in (i).
 Other common errors included: -
 Calculating t(ap)x rather than t-1(ap)x;
 Ignoring the probability in force t-1(ap)x when calculating the present value of profits.
 In Part (iii) many candidates incorrectly assumed that reserves changed expected profits
 when it is only the emergence and hence the PV of profits that will change.




Q2

 Many candidates appeared not to plan what calculations would be required before
 starting to code in excel. This meant many attempts fell short of answering the question.
 Part (i) Many candidates incorrectly allowed for the adjustment to the base mortality
 table, by applying the adjustment to px or lx or using the adjustment for the wrong benefit
 type. Many did not set the mortality at age 100 to 1.
 Other common errors included: -
 Not allowing for survivorship from outset to year t when calculating the probability of a
 payment being made in year t, (thus calculating px +t (1 − p y +t ) rather than t px (1 − t p y ) ;
 Ignoring the half year adjustment to allow for deaths occurring on average mid-year when
 calculating the discount factor.
 Part (ii) Many candidates did not allow for survivorship from outset to year t when
 calculating the required probability, calculating px +t (1 − p y +t ) rather than

 t   px (1 − p y +t ) t −1 p y .

 Part (iii) Many candidates incorrectly calculated the probability of the joint life status
 failing in year t, calculating qx+tqy+t rather than t-1px t-1py(1-px+tpy+t).




CM1B S2021                                                                   © Institute and Faculty of Actuaries
             CM1B - Actuarial Mathematics - Core Principles - April 2022 - Examiners’ report




Q3

 Part (i) The question included the instruction to produce an annual cashflow schedule.
 Candidates who produced a monthly cashflow schedule were penalised.

 Many candidates did not consider the precise timing of the cashflows and did not allow
 for appropriate accumulation factors to accumulate those cashflows to the end of year.

 Part (ii) When calculating the accumulated profit, a common error was to ignore the
 addition of interest on previous years’ profit. Another common error was to calculate the
 present value of profit rather than the accumulated value.

 Part (iii) A common error here was to ignore the timing of the production and the subsidy
 payments.

 Production of electricity starts after 6 months and so the Government subsidy payments
 occur in the first 6 years of the project (with payments in the 1st and 6th project year both
 covering only 6 months of production).

 Part (iv) Many candidates achieved good marks for this question part.




                                                                                    [Paper Total 100]

                        END OF EXAMINERS’ REPORT




CM1B S2021                                                             © Institute and Faculty of Actuaries


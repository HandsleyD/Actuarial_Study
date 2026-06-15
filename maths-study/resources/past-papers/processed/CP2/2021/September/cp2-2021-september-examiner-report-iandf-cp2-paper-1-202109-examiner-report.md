---
normalized_id: cp2-2021-september-examiner-report-iandf-cp2-paper-1-202109-examiner-report
exam_code: CP2
year: 2021
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Sep21/IandF_CP2_paper 1_202109_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2021-september-examiner-report-iandf-cp2-paper-1-202109-examiner-report

   INSTITUTE AND FACULTY OF ACTUARIES



                         EXAMINERS’ REPORT


                                     September 2021

                           CP2– Modelling Practice
                               Core Practices
                                Paper One


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




Sarah Hutchinson
Chair of the Board of Examiners
December 2021



CP21 S2021                                                        © Institute and Faculty of Actuaries
             CP2-1 - Modelling Practice - Core Practices - September 2021 - Examiners’ report


   A. General comments on the aims of this subject and how it is marked

   The aim of this subject is to ensure that the successful candidate can analyse data, develop
   a model, and document the work (including maintaining an audit trail for a fellow
   candidate and senior actuary). They should be able to analyse the methods used and
   outputs generated and communicate to a senior actuary the approach, results and
   conclusions.

   The subject is split into two papers. The first, dealt with in this report, covers the
   objectives:
   • analysis of data.
   • development of a model with clear documentation.

   As the focus of the subject is on communication, the majority of the marks are for the
   documentation and outputs generated rather than for technical modelling skills. For
   example, a technical mistake is only penalised once and candidates can still earn marks
   for accurate and clear communication of what was done.

   Candidates who give well-reasoned points not in the marking schedule are awarded marks
   for doing so.

   B. Comments on candidate performance in this diet of the examination.

   Modelling
   The technical modelling for this paper was reasonably simple throughout, but consisted of
   a number of different parts. The initial data analysis allowed for some scope to perform
   simple data checking, but also required the candidate to draw inferences in the data e.g.
   the direction of the flight inferred what might be expected in terms of wind speed. Data
   summarisation and presentation were then required in order to judge the quality. While
   most candidates did the former very well, only a minority took the extra steps needed to
   summarise and chart the data to assist in conveying a good understanding of what was
   provided.

   The majority of candidates managed the simpler elements of the calculations well. There
   were, however, a significant number that struggled with the concept of the lease cost.
   This was based on an annuity paid in advance, for which the actuarial formula was
   provided. Prospective candidates should be reminded that there is an expectation that any
   element of the Core Principles can be drawn on in the CP2 exam. It is therefore
   recommended that CP2 is best approached after being familiar with the content of these
   earlier subjects.

   Other common errors in the income and costs calculation were determining the number of
   crews required, and allocating annual costs to individual flights. It should be noted that
   where an incorrect approach was used in the base scenario, credit was given where that
   incorrect method was correctly adjusted for the ‘business class only’ scenario.

   For the profit metrics, the most common error was to calculate the average profit per
   occupied seat and the profit margin for each individual flight, rather than for the route
   overall. Partial credit was given for this approach. Candidates are expected to consider the



CP21 S2021                                                              © Institute and Faculty of Actuaries
             CP2-1 - Modelling Practice - Core Practices - September 2021 - Examiners’ report


   rationale behind what is being asked for, and use this understanding of the assignment to
   inform their modelling, and the reasonableness checks on their work.

   There were a greater proportion of candidates that completed the full assignment this
   sitting, covering the modelling for both scenarios and the audit trail.

   Audit Trail
   There was a wide range in the quality of audit trails produced, from those that clearly ran
   out of time, to the stronger candidates who are able to clearly explain both what was done
   and how it was done in the model.

   Many candidates struggled with providing assumptions that add value to the audit trail.
   Many simply re-stated information provided in the background information, or resorted to
   listing items which are assumed not to change. The better candidates were able to
   understand the nature of the assignment (to analyse one years’ data in order to predict
   future profitability) and make assumptions that were relevant to that situation.

   Most candidates included only very basic reasonableness checks, with little attempt to
   check that the final output made sense or that the scenario calculations were working
   properly. Additionally, a lot of checks that were included did not add value, and
   essentially amounted to checking that Excel was working correctly.

   In general, audit trails were fairly well written. Better candidates showed evidence of time
   planning, and were able to focus their attentions on the key areas of the modelling and
   audit trail.

   C. Pass Mark

   The Pass Mark for this exam was 60
   1148 presented themselves and 776 passed.

Solutions for Subject CP2-1 – September 2021

Q1
Spreadsheet Model
(i)
Validation of data provided:
Quarter is either Q1, Q2, Q3 or Q4                                                                     [½]
Two flights per day                                                                                    [½]
(Of the following marks ½ is for test, ½ is for it being automated):
Number of occupied seats in each fare class are between 0 and permitted maximum                        [1]
Windspeed factors for odd numbered flights are between -2 and 0 and even
numbered flights 0 and 2. Award 0.5 if only check for Windspeed factor between
-2 and 2 is performed                                                                                  [1]
Summary statistics of occupancy data, showing min, max, sum, average, standard
deviation                                                                                              [1]
Calculation of occupancy rate by quarter                                                               [1]
Comparison of stats over seasons e.g. check occupancy rate is higher during peak
season                                                                                               [1½]



CP21 S2021                                                              © Institute and Faculty of Actuaries
             CP2-1 - Modelling Practice - Core Practices - September 2021 - Examiners’ report


Comparison of stats between business class and economy e.g. check occupancy rate
in economy class is always higher than business class                                    [1½]
Suitable chart of the occupancy rate by quarter, split by business and economy class
or other suitable chart(s) that adds value to the checks                                  [2]
Other appropriate, value-added check                                                      [1]
                                                              [Marks available 11, maximum 8]

(ii)
Calculation of profit per flight:
Calculation of income for tickets sale, total and split between fare classes                          [2]
Calculation of fuel cost                                                                              [1]
Calculation of crew salaries                                                                          [2]
Calculation of airport fees                                                                           [1]
Calculation of the annuity factor needed for leasing the aircraft                                    [1½]
Calculation of the leasing cost of the aircraft                                                       [2]
Calculation of environmental tax                                                                      [1]
Calculation of overheads                                                                              [½]
Calculation of profit, split by business, economy and total                                           [1]

(iii)
Calculation of:
The percentage of flights that produces a profit.                                                      [1]
The overall average profit per seat, split by fare classes                                             [1]
The overall profit margin, split by fare classes                                                       [2]

(iv)
For the alternative scenario:
Calculation of number of (occupied) business class seats                                             [1½]
Calculation of additional income                                                                      [1]
Adjustment to crew salaries                                                                           [1]
Removal of adjustment to costs for economy/business split                                             [1]
Calculation of profit metrics                                                                         [½]
                                                                                                [Total 29]

 Many candidates failed to pick up more than half the marks for the data analysis piece (i).
 Parts (ii) and (iv) were generally well handled, but it was common for part (iii) to be
 misunderstood and either not done, or calculated at an individual flight level.



Q2
Good spreadsheet practice:
No hard-coding (use of parameters and no copy and paste values)                                        [1]
Flagging rows/columns that don’t copy down                                                             [1]
Easy to follow (inputs, checks and outputs easy to find)                                               [1]
Logical order (left to right, top to bottom, within and between sheets)                                [1]
Clear and accurate labelling within the spreadsheet - rows, columns, worksheets                        [1]
Use of simple techniques (but not oversimplified) - formulae not overly complex/steps
split out and calculations built up                                                                    [2]



CP21 S2021                                                              © Institute and Faculty of Actuaries
             CP2-1 - Modelling Practice - Core Practices - September 2021 - Examiners’ report


                                                                                                [Total 7]

 Most models produced scored reasonably well in this section. There was a good flow from
 - data provided - via parameters used - to calculations performed. Sheets are usually well
 laid out with a logical flow. Marks were most often lost for lack of clear headings and
 labels (sheet headings and descriptions, and especially labelling of checks), and simple
 techniques (for example, some candidates split the calculations into separate sheets for
 the NY to London and London to NY legs).



Q3
Audit Approach
(i)
Communication skills:
HOW the steps have been executed is clear, rather than just WHAT has been done
being stated                                                                                           [2]
There is sufficient technical detail and does not include excessive use of Excel
formulae to describe steps                                                                             [1]
Sufficient detail is providing in the audit trail as a self alone document - does not
refer references in the model                                                                          [1]

(ii)
Fellow student can review and check the methods used in the model
For a newcomer, the audit trail is easy to follow i.e. the marker does not have to look
at the model directly to understand what has been done                                                 [2]
All the steps are correctly and clearly described                                                      [1]
The workbook is well labelled and is easy to navigate through                                          [1]
Where there are, or could be errors, the audit trail would enable the student to
identify and correct errors                                                                            [2]
Danger areas in the spreadsheet are appropriately flagged (e.g. goal seek)                             [1]

(iii)
Senior actuary can scrutinise and understand what has been done
A reasonable overview of the model is included                                               [1]
There are clear statements of the assumptions made i.e. concise list of value added
assumptions, not long list with many not adding value                                        [1]
Data sources and changes are clearly described                                               [1]
It is easy for a senior actuary to pick up the high level detail of the modelling –
can pick up the high level without having to read all the detail                             [2]
The level of detail is appropriate for a senior actuary - explanations are clear and concise [1]
Reasonableness checks are clearly stated and explained                                       [1]

(iv)
Written in clear English
The audit trail is written in clear, crisp and flowing English                                         [2]
Accurate spelling                                                                                      [1]
The audit trail is laid out well, with good formatting to aid clarity                                  [1]




CP21 S2021                                                              © Institute and Faculty of Actuaries
             CP2-1 - Modelling Practice - Core Practices - September 2021 - Examiners’ report


(v)
Written in a logical order
Data is introduced before referring to it                                                              [1]
Assumptions are stated before using them                                                               [1]
The methodology is described in a logical order i.e. nothing is introduced which
would require that the reader has read ahead                                                           [1]

Audit content
(vi)
All steps clearly explained
The level of detail in the audit trail is appropriate for a newcomer to understand
what has been done                                                                                     [1]
All the methodology steps are set out clearly                                                          [2]
Data provided and any necessary adjustments made are described and justified clearly                   [1]
Clarity of data validation checks completed and what it shows                                          [1]
All reasonableness checks applied are adequately documented                                            [1]
Areas where manual intervention or caution is required are well flagged
(e.g. goalseeks or non-standard model areas)                                                           [1]
The marker does not need to look directly at the model to understand what has been
performed                                                                                              [1]

(vii)
Reasonableness checks included
The probability of making a loss is low given high average profit                         [1]
Profit per seat in business class is higher than economy class                            [1]
Which makes sense given business class fare is 4 times the economy class fare but
only accounts for a fifth of the total cost                                               [1]
Total profit in the alternative scenario is higher than base scenario given the business
class to economy class fare conversion is 4:1 but the business to economy seat
conversion is less than 3:1                                                               [1]
The percentage of flights that produces a profit has gone up in the alternative scenario
as the increase in income from business class ticket sale is more than enough to
cover the additional crew cost                                                            [1]
Other distinct, valid checks                                                              [1]
                                                               [Marks available 14, maximum 5]

(viii)
Clear signposting included throughout
The audit trail allows the user to follow the model through                                            [1]
The audit trail allows the user to understand each calculation easily                                  [1]
There is adequate signposting in the audit trail to describe the purpose of each tab                   [1]
Model labelling is consistent with the audit trail (data, parameters, scenarios,
outputs, charts)                                                                                       [1]



(ix)
Statement of assumptions made (1 for each distinct, reasonable “added value”
assumption listed)                                                                                     [5]



CP21 S2021                                                              © Institute and Faculty of Actuaries
             CP2-1 - Modelling Practice - Core Practices - September 2021 - Examiners’ report




(x)
All model steps accurately described:
Overview                                                                                               [1]
Data used, including source                                                                            [1]
Data checks (up to 4 marks for data checks in total):
Overall reasonableness                                                                                 [1]
Peak/off peak reasonableness                                                                           [1]
Economy versus business class reasonableness                                                           [1]
Direction (i.e. windspeed)                                                                             [1]
Any other description of tests undertaken in candidate’s model                                         [1]

Data checks:
Overall reasonableness                                                                [1]
Peak/off peak reasonableness                                                          [1]
Economy versus business class reasonableness                                          [1]
Direction (i.e. windspeed)                                                            [1]
Any other description of tests undertaken in candidate’s model                        [1]
                                                            [Marks available 5, maximum 4]

Calculation of income from ticket sales, including seasonal adjustment                      [1]
Calculation of fuel cost                                                                    [1]
Number of sets of crew needed and calculation of crew salary                                [1]
Airport and overhead cost                                                                   [1]
Calculation of the annuity factor for the leasing cost of the aircraft                      [1]
Calculation of the leasing cost                                                             [½]
Calculation of environmental tax                                                            [½]
Attribution of cost between business and economy class tickets                              [1]
Calculation of overall profit and profit split by fare classes                              [1]
Calculation of the percentage of flights producing a profit                                 [½]
Calculation of the average profit per seat                                                  [½]
Calculation of the profit margin                                                            [1]
Alternative scenario – adjustments needed (number of additional business class seats
and income, additional crew cost)                                                           [2]
Other distinct, valid step                                                                  [1]
                                                               [Marks available 20, maximum 17]
                                                                                      [Total 64]

 Prospective candidates should work through the mark schedule diligently, as this provides
 a good template for what the examiners are looking for in an audit trail.

                                                                                     [Paper Total 100]

                        END OF EXAMINERS’ REPORT




CP21 S2021                                                              © Institute and Faculty of Actuaries



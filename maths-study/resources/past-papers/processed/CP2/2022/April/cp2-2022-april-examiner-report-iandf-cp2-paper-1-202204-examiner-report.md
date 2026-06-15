---
normalized_id: cp2-2022-april-examiner-report-iandf-cp2-paper-1-202204-examiner-report
exam_code: CP2
year: 2022
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Apr22/IandF_CP2_paper 1_202204_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2022-april-examiner-report-iandf-cp2-paper-1-202204-examiner-report

   INSTITUTE AND FACULTY OF ACTUARIES



                         EXAMINERS’ REPORT


                                         April 2022

                            CP2- Modelling Practice
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
particularly the open-ended questions in the Specialist Advanced (SA) and Specialist
Principles (SP) subjects, the report may contain more points than the Examiners will expect
from a solution that scores full marks.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.



Sarah Hutchinson
Chair of the Board of Examiners
July 2022



CP21 A2022                                                        © Institute and Faculty of Actuaries
               CP2-1 - Modelling Practice - Core Practices -April 2022 Examiners’ report


   A. General comments on the aims of this subject and how it is marked

   The aim of this subject is to ensure that the successful candidate can analyse data, develop
   a model, and document the work (including maintaining an audit trail for a fellow
   candidate and senior actuary). They should be able to analyse the methods used and
   outputs generated and communicate to a senior actuary the approach, results and
   conclusions.

   The subject is split into two papers. The first, dealt with in this report, covers the
   objectives:

   •   analysis of data.
   •   development of a model with clear documentation.

   As the focus of the subject is on communication, the majority of the marks are for the
   documentation and outputs generated rather than for technical modelling skills. For
   example, a technical mistake is only penalised once and candidates can still earn marks
   for accurate and clear communication of what was done.

   Follow on marks are always available so do not overlook some of the more
   straightforward marks even where you lack confidence in the modelling which they rely
   on. Part (v) was often overlooked with many candidates gaining no marks for this section.

   Candidates who give well-reasoned points not in the marking schedule are awarded marks
   for doing so.

   Prospective candidates should be reminded that there is an expectation that any element of
   the Core Principle subjects can be drawn on in the CP2 exam. It is therefore
   recommended that CP2 is best approached after being familiar with the content of these
   earlier subjects.

   Prospective candidates should work through the mark schedule diligently, as this provides
   a good template for what the examiners are looking for in an audit trail. Past exam papers
   provide good examples of structure and style which seek to meet the needs of both a
   senior colleague and fellow student. In setting out the methodology candidates need to set
   out both what was done and how, to enable the user of the audit trail to be able to follow
   the method that has been implemented. Finally, we encourage candidates to be sense
   checking their work as the progress. Setting out why the results look in line with your
   expectations is the requirement of the reasonableness checks, which is an area always
   poorly attempted, if at all.

   B. Comments on candidate performance in this examination.

   Modelling

   The technical modelling for this paper consists of two scenarios built using basic
   annuities.

   The initial data analysis allowed for scope to perform standard data checking techniques
   focussed on the distribution of the underlying data provided to candidates. While most


CP21 A2022                                                            © Institute and Faculty of Actuaries
             CP2-1 - Modelling Practice - Core Practices - April 2022 - Examiners’ report


   candidates calculated statistics to check the data, not all candidates automated these or
   applied a reasonable tolerance. Some candidates did not attempt to undertake a chi-
   squared test. This is a standard technique for checking data with numerous examples in
   past papers.

   The majority of candidates managed an attempt at the fixed rate mortgage scenario,
   making reasonable assumptions regarding the timing of savings and mortgage payments.
   However, some did not identify that a monthly compounded interest rate was required or
   did not correctly apply this to an annuity to convert the total mortgage requirement into a
   monthly payment, despite the support being provided in additional guidance.

   There were a significant number that struggled with the variable interest rate projections.
   The most common errors were:
      • To continue to apply the adjustment to the starting interest rate throughout rather
          than the previous months.
      • To apply a constant annuity to find the monthly mortgage payment, rather than for
          this to be scenario dependent.
      • Many candidates compared the monthly costs rather than the total amount paid
          under each scenario, with some not attempting this element of the paper.

   It should be noted that where an incorrect approach was used in the base scenario, credit
   was given where that incorrect method was correctly adjusted for the alternative scenario.
   However, a large proportion of candidates did not attempt the alternative scenario.

   Despite the challenges candidates faced with the modelling the majority attempted the
   audit trail rather than this being overlooked in preference of completing the modelling
   work.

   Audit Trail
   There was a wide range in the quality of audit trails produced. Stronger candidates who
   were able to clearly explain both what was done and how it was done in the model.

   Many candidates struggled with providing assumptions that add value to the audit trail.
   Many simply re-stated information provided in the background or resorted to listing items
   which are assumed not to change. The better candidates were able to understand the
   nature of the assignment and make assumptions that were relevant to that situation.

   Most candidates did not consider reasonableness checks. Those that did only including
   very basic statements which made little attempt to verify that the final output makes sense
   or that the scenario calculations were working properly. Additionally, many of the checks
   that were included did not add value, and essentially amounted to checking that Excel was
   working correctly.

   In general candidates struggled to clearly set out the detail of how calculations were
   undertaken. Better candidates showed evidence of time planning, finding a balance
   between providing the high-level detail for the senior colleague, including the detail for
   fellow colleagues and were able to focus their attentions on the key areas of the modelling
   and audit trail.




CP21 A2022                                                            © Institute and Faculty of Actuaries
              CP2-1 - Modelling Practice - Core Practices - April 2022 - Examiners’ report


   C. Pass Mark

   The Pass Mark for this exam was 58
   1097 presented themselves and 644 passed.



Solutions for Subject CP2-1 - April 2022

Q1
(i)
Modelling steps
Data checks:
Count random numbers - total, number less than zero, number greater than zero          [1]
Mean and standard deviation including sufficient tolerance level                       [2]
Above checks are automatic                                                             [1]
Chi squared test                                                                       [3]
Inclusion of a suitable graph                                                          [2]
Other suitable checks                                                                  [2]
                                                            [Marks available 11, Maximum 8]

(ii)
Calculation of:
Expected accumulated deposit over two-year period under fixed rate option (including
correct use of monthly adjusted interest rate)                                                        [2]
Mortgage required                                                                                     [1]
Monthly mortgage repayment under fixed rate option                                                    [1]

(iii)
Variable interest rate option calculations:
Simulation of variable interest rate over two period under variable rate option                       [3]
Calculation of expected accumulated deposit over two-year period under variable rate
option for each simulation                                                                            [2]
Calculation of resultant mortgage required                                                            [1]
Correct monthly interest rate identified for annuity                                                  [1]
Calculation of monthly mortgage repayment under variable rate option for each
Simulation                                                                                            [1]
Calculation of the difference between total mortgage repayments under the fixed rate
option and the total mortgage repayments under the variable rate option                               [1]

(iv)
Summary statistics
Calculation of average, maximum and minimum                                                [1]
Calculation of the percentage of outcomes under which the total mortgage repayments
under the fixed rate option is lower than the total mortgage repayments under the variable
 rate option                                                                               [2]

(v)
Alternative product



CP21 A2022                                                             © Institute and Faculty of Actuaries
              CP2-1 - Modelling Practice - Core Practices - April 2022 - Examiners’ report


Update to fixed rate option for 12-month accumulation period only                        [1]
Update to variable rate option to calculate revised mortgage repayment required          [2]
Calculation of annuity and monthly mortgage repayment                                    [1]
Calculation of the difference between total mortgage repayments under the fixed rate
option and the total mortgage repayments under the variable rate option and produce
updated summary statistics                                                               [1]
                                                                                   [Total 29]

 Many candidates failed to pick up more than half the marks for the data analysis piece (i).

 Parts (ii) and (iii) were well attempted, although some candidates overcomplicated or
 oversimplified the generation of the variable rate simulations, not incorporating all
 appropriate elements of the modelling.

 In part (iv) candidates were credited for appropriately calculating the requested statistics
 using results from part (iii).

Q2
(i)
Modelling technique and good practice
Auto checks on the modelling completed in 1(ii) to 1(vi).
Check on accumulation of deposit                                                    [1]
Check on average variable interest rate from projections                            [1]
Check on consistency between annual and convertible monthly interest rates          [1]
Check on goal seek                                                                  [1]
Any other appropriate auto check                                                    [1]
                                                          [Marks available 5, maximum 2]

(ii)
Demonstration of good modelling technique and spreadsheet practice:
No hard-coding (use of parameters and no copy and paste values)                          [1]
Flagging rows/columns that don’t copy down                                               [1]
Good automatic checks                                                                    [1]
Easy to follow (inputs, checks and outputs easy to find)                                 [1]
Logical order (left to right, top to bottom, within and between sheets)                  [1]
Clear and accurate labelling within the spreadsheet - rows, columns, worksheets          [1]
Use of simple techniques (but not oversimplified) - formulae not overly complex/steps
split out and calcs built up                                                             [1]
                                                                                     [Total 9]
                                                             [Total for spreadsheet model 38]

 Many candidates did not incorporate any automated checks outside of the data analysis in
 their model, and did not score marks for 2(i). However, most models produced scored
 reasonably well in 2(ii). There was a good flow from data provided and the checks on this
 data - via parameters used - to calculations performed. Worksheets were usually well laid
 out with a logical flow. Marks were most often not awarded for lack of clear headings and




CP21 A2022                                                             © Institute and Faculty of Actuaries
               CP2-1 - Modelling Practice - Core Practices - April 2022 - Examiners’ report



 labels (worksheet headings and descriptions, and especially labelling of checks), and
 simple techniques.

Q3
Audit Approach
(i)
Communication skills
How the steps have been executed is clear, rather than just what has been done being
stated                                                                                    [2]
There is sufficient technical detail and does not include excessive use of Excel formulae
to describe steps                                                                         [1]
Sufficient detail is provided in the audit trail to make it a standalone document         [1]

(ii)
Fellow student can review & check the methods used in model:
For a newcomer, the audit trail is easy to follow i.e. the marker does not have to look at
the model directly to understand what has been done                                                    [2]
All the steps are correctly and clearly described                                                      [1]
There is sufficient technical detail                                                                   [1]
The workbook is well labelled and is easy to navigate through                                          [1]
Where there are, or could be errors, the audit trail would enable the student to identify
and correct errors                                                                                     [1]
Danger areas in the spreadsheet are appropriately flagged (e.g. goal seek)                             [1]

(iii)
Senior actuary can scrutinise & understand what has been done
A reasonable overview of the model is included                                               [1]
There are clear statements of the assumptions made i.e. concise list of value added
assumptions, not long list with many not adding value                                        [1]
Data sources are clearly described                                                           [1]
It is easy for a senior actuary to pick up the high level detail of the modelling - can pick
up the high level without having to read all the detail                                      [2]
The level of detail is appropriate for a senior actuary - explanations are clear and concise [1]
Reasonableness checks are clearly stated and their results explained                         [1]

(iv)
Written in clear English
The audit trail is written in clear, crisp and flowing English                                         [2]
Accurate spelling                                                                                      [1]
The audit trail is laid out well, with good formatting to aid clarity                                  [1]

(v)
Logical order:
Data is introduced before referring to it                                                              [1]
Assumptions are stated before using them                                                               [1]
The methodology is described in a logical order i.e. nothing is introduced which would
require that the reader has read ahead                                                                 [1]




CP21 A2022                                                              © Institute and Faculty of Actuaries
               CP2-1 - Modelling Practice - Core Practices - April 2022 - Examiners’ report


(vi)
Audit Content
All steps clearly explained
The level of detail in the audit trail is appropriate for a newcomer to understand what has
been done                                                                                   [1]
All the methodology steps are set out clearly                                               [1]
Data provided and any necessary adjustments made are described and justified clearly        [1]
All reasonableness checks applied are adequately documented                                 [1]
Areas where manual intervention or caution is required are well flagged (e.g. goalseeks or
non-standard model areas)                                                                   [1]
The marker does not need to look directly at the model to understand what has been
performed                                                                                   [2]

(vii)
Reasonableness checks:
A mortgage of c$175,000 is to be repaid in 25 years. Allowing for the 5% pa interest over
 the mortgage term and assuming even repayments over the period we have 175,000 *
(1.05)^12.5 = $322,000 (vs $303,069)                                                      [1]
The minimum mortgage repayment amount under the base scenario is 762 while the
maximum is 1,133 and the average is 965. These amounts seem reasonable given the
repayment amount under the fixed rate option was 1,010.                                   [1]
Under the alternative scenario, the deposit is broadly similar to that under the original
scenario. This is reasonable because while the period over which the deposit is saved has
halved, the monthly deposit savings have doubled                                          [1]
The summary statistics are significantly lower as the term of the alternative scenario is
only 6 years in total compared to 27 years in the original scenario                       [1]
The probability that the total repayments under the fixed interest option are lower than
the repayments under the variable rate option has reduced due to the shorter period over
which interest rates have been projected                                                  [1]
Any other sensible reasonableness check.                                                  [3]
                                                                [Marks available 8, maximum 5]

(viii)
Signposting / labelling CLEAR:
The audit trail allows the user to follow the model through                                            [1]
The audit trail allows the user to understand each calculation easily                                  [1]
There is adequate signposting in the audit trail to describe the purpose of each tab                   [1]
Model labelling is consistent with the audit trail (data, parameters, scenarios, outputs,
charts)                                                                                                [1]

(ix)
Up to 5 marks for including assumptions (1 for each distinct, reasonable “added value”
one listed)                                                                                            [5]

(x)
All model steps accurately covered
Overview                                                                                               [1]
Data used, including source                                                                            [1]
Checks on data statistics                                                                              [1]



CP21 A2022                                                              © Institute and Faculty of Actuaries
              CP2-1 - Modelling Practice - Core Practices - April 2022 - Examiners’ report


Graphical and chi Squared check on data                                                     [2]
Conversion of fixed annual rate to monthly interest rate                                    [1]
Calculation of annuity                                                                      [1]
Calculation of accumulated deposit                                                          [2]
Calculation of monthly mortgage repayment under fixed rate option                           [1]
Interest rate projections                                                                   [1]
Calculation of accumulated deposit under variable rate option                               [1]
Calculation of monthly mortgage repayment under variable rate option - must mention
annuity and monthly repayment                                                               [1]
Calculation of difference between total repayments under fixed and variable rate options
and summary statistics                                                                      [1]
Calculation of the probability that the total mortgage repayments under the fixed rate
 option will be less than the total mortgage repayments under the variable rate option      [1]
Update to fixed interest rate calculations for shorter period                               [1]
Update to variable interest rate calculations for shorter period                            [1]
Automatic checks                                                                            [1]
Any other distinct and valid step.                                                          [1]
                                                              [Marks available 19, maximum 16]
                                                                [Total marks for audit trail 62]


                                                                                     [Paper Total 100]

                       END OF EXAMINERS’ REPORT




CP21 A2022                                                             © Institute and Faculty of Actuaries


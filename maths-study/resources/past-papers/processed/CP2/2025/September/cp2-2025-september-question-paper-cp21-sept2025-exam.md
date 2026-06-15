---
normalized_id: cp2-2025-september-question-paper-cp21-sept2025-exam
exam_code: CP2
year: 2025
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Sep25/CP21_Sept2025_Exam.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2025-september-question-paper-cp21-sept2025-exam

    INSTITUTE AND FACULTY OF ACTUARIES




                                       EXAMINATION

                                          11 September 2025


                        Subject CP2 – Modelling Practice
                                 Core Practices
                                               Paper One
                             Time allowed: Three hours and twenty minutes




              In addition to this paper you should have available the 2002 edition of
                   the Formulae and Tables and your own electronic calculator.


All material in this document is the copyright material of the Institute and Faculty of Actuaries. No part of this
document may be reproduced in any material form, whether by publication, translation, storage in a retrieval
system or transmission by electronic, mechanical, photocopying, recording or other means, without the prior
permission of the Institute and Faculty of Actuaries.



CP21 S2025                                                             © Institute and Faculty of Actuaries
Exam requirements
1    Modelling steps

     Read the background document that describes the scenarios that need to be modelled
     and documented for this project.

     Construct a spreadsheet model that produces the following calculations and charts.
     You should ensure that your spreadsheet contains appropriate self-checks and that you
     have performed reasonableness checks at each stage of your calculations.

     (i)     Check the data provided for reasonableness including, but not limited to,
             charting and analysing with respect to current age:

                average, minimum and maximum starting contribution amount.
                average, minimum and maximum salary increases.
                average, minimum and maximum age at death.
                                                                                            [8]

     (ii)    For each of the 250 sample individuals:

               calculate the notional value of the member’s total future contributions,
                allowing for expenses and investment returns, at the member’s retirement
                age, or earlier death.
              calculate the salary per annum at the earlier of either their retirement age
                or death.
              for those reaching retirement age, calculate the initial target level pension
                at retirement.
                [Hint: Build this calculation using a dummy accrual rate of 90.]
              calculate the benefits due on death.
              calculate the present value of the pension and/or the payments due on
                death to be made to each individual allowing for the individual’s expected
                age of death.
             [Note: Annuity and accumulation calculation formulae are provided in the
             additional guidance.]
                                                                                          [12]

     (iii)   Calculate the single accrual rate required for the equation of value to balance.
                                                                                           [2]

     (iv)    Allowing for the target accrual rate calculated in part (iii), and assuming that
             future investment and mortality experience are in line with expectations,
             calculate the annual pension increase rate that would result in a plan surplus
             of zero.                                                                       [3]

     (v)     Calculate the ‘equivalent Pooled Retirement Benefit (PRB) level annuity
             factor’ at retirement for each individual and plot a chart to illustrate the
             range of equivalent PRB level annuity factors with respect to current age. [3]
                                                                                  [Sub-total 28]



CP21 S2025–2
2    Modelling technique and practice

     (i)       Auto checks on the modelling completed in Q1.                              [2]

     (ii)      Demonstration of good modelling technique and spreadsheet practice.     [7]
                                                                             [Sub-total 9]


3    Audit trail

     Prepare an audit trail for your spreadsheet model that includes the following aspects:
           Purpose of the model
           Data (including checks) and comment on any patterns you spotted in the data and
            the reasonableness of the charts you plotted
           Assumptions used
           Methodology, i.e. description of how each calculation stage in the model has been
            produced
           Explanation of any further checks performed.

     You should ensure that your audit trail is suitable for both a senior actuary who has
     been asked to approve your work and a fellow student who has been asked to peer
     review and correct your model or may be asked to continue work on it or use it again
     for a similar purpose in the future.

     Marks available for audit trail:

     Audit approach

     (i)       Communication skills.                                                      [4]

     (ii)      Fellow student can review and check methods used in the model.             [7]

     (iii)     Senior actuary can scrutinise and understand what has been done.           [7]

     (iv)      Written in clear English.                                                  [3]

     (v)       Written in a logical order.                                                [3]

     Audit content

     (vi)      All steps clearly explained.                                               [7]

     (vii)     Reasonableness checks, including a discussion of the reasonableness of the
               relationships shown in the three charts in Q1 part (i).                    [8]

     (viii) Clear signposting/labelling included throughout.                              [4]

     (ix)      Statement of assumptions made.                                             [4]

     (x)       All model steps accurately and correctly covered.                         [16]
                                                                               [Sub-total 63]
                                                                                  [Total 100]


CP21 S2025–3
Background
The government of a medium sized country is considering offering a new form of individual
Pooled Retirement Benefit plan (the ‘PRB plan’) to the whole population. You are an actuary
working for the country’s Government Actuary’s Department in a team that is designing the
benefit structure of the PRB plan.

Individuals will pay contributions to the PRB plan of 10% of their salary per annum from the
date of joining the scheme until their retirement at age 65, at which point a level annual
pension will be paid to the member, based on their salary at their retirement, until their death
(assuming this is after age 65).

                                    Years contributing to the PRB plan Salary at retirement
Annual pension at retirement
                                                           Accrual rate

Contributions

    Contributions are assumed to be made, on average, halfway through the year.
    Contributions will be reduced, at the time of payment, by an expense charge of 3% of
     contribution to cover PRB plan administration expenses.
    The long-term investment return, net of investment expenses, is expected to be 7% p.a.

Death payments

On death the following payments are made:

    If the age of the individual at death is less than or equal to an individual’s retirement age
     (65), the full amount attributable to the individual is paid to their next of kin.
    If the age of the individual at death is between 66 and 69:
     o the pension in payment is stopped at the age of death.
     o the next of kin receives a lump sum equal to five times the individual’s annual
          pension at retirement.
    If the age of the individual at death is 70 or over, no payment is made to the next of kin.

Accrual rate

The accrual rate is the same for all individuals. To reflect the uncertainty of future actual
investment returns and mortality rates, there is a 20% contingency margin built into the plan.
The accrual rate is therefore to be set at a level that results in the following equation of
Present Value at time t = 0 (PV) for the population as a whole:

    PV of the sum of expected retirement income
      80% PV of the sum of accumulated contributions to retirement or earlier death

where retirement income includes annual pension, plus any benefits due on death.




CP21 S2025–4
Data provided

The government’s Demographic Research Department have provided data for a notional
tranche of 250 individuals representing a sample of the population expected to join the PRB
plan at its inception (defined as time t = 0). The data contains individuals aged between 18
and 60 and, for each individual, includes current age, current annual contributions per annum,
annual salary increase for the rest of the contribution period, expected age at death and
current salary per annum.

[Note: For simplicity, current ages and expected ages at death are recorded rounded down to
the nearest integer year. An individual’s retirement and death are assumed to occur on their
birthdays and every individual is assumed to join the PRB plan at a birthday.]

Pension increases

The government initially proposed that the PRB plan would be a non-profit pension offering.
As a result of building a contingency margin into the benefit structure of the PRB plan, the
government would like to build into the benefit structure a mechanism for returning the plan
surplus on an annual basis to individuals in the PRB plan, assuming this remains once actual
investment and mortality experience is allowed for. The plan surplus is determined as
follows:

 Plan surplus     PV of the sum of invested contributions to retirement or earlier death
                   PV of the sum of expected retirement income

One potential approach is to annually assess the equation of present value and grant a pension
increase at a level that would result in the plan surplus being equal to zero if the pension
increase is assumed to be granted at that level annually.

Value for money

To assess the value for money of the PRB plan, your manager would like you to calculate the
equivalent annuity rates implied by the PRB plan and create a chart to illustrate these with
respect to members’ current age.

To do this you should calculate the ‘equivalent PRB level annuity factor’ at retirement for
each individual who reaches retirement age, i.e. excluding those who are expected to die
before age 65, using the following formula:

 Equivalent PRB level annuity factor
                 Value of individual s accumulated contributions at retirement age 65
                            Individual s target level PRB pension per annum

Calculations required

You have been asked to complete the analysis set out in the ‘Exam requirements’ section
above for the team and document it in an audit trail.

Formulae for calculating the annuities for the cost of level and increasing pension payments
and the accumulation of contributions are included in the additional guidance at the end of
the paper.


CP21 S2025–5
Additional guidance
Level annuity factors

The value of $1 of level pension paid for p years starting at the end of the first year can be
calculated using the formula for annuity in arrears:

                                            1     1 𝑖
                                    𝑎 ⏋
                                                   𝑖

where i = the compound rate of interest per annum; p = the term of annuity (years).

Increasing annuity factors

The value of $1 of increasing pension paid for p years starting at the end of the first year can
be calculated using the formula below:

                                                                      1 𝑖
                                                                1
                 𝑎 ⏋                                                  1 𝑏
                                   %
                                                                     𝑖 𝑏

where i = the compound rate of interest per annum; b = the compound rate of increase in
annuity payment per annum; p = the term of annuity (years).

Accumulation of increasing contributions

The value at time t = n of $1 of accumulated regular increasing contributions starting at t = 1
for n years can be calculated using the formula below:

                                                                1 𝑖
                                                          1
          𝑆 ⏋                                                   1 𝑠             1   𝑖
                           %
                                                               𝑖 𝑠


where i = the compound rate of interest per annum; s = the compound rate of increase in
contribution per annum; n = the term of accumulation (years).

All values calculated should be discounted back to t = 0 for the purposes of comparing
net present value.


                                     END OF PAPER




CP21 S2025–6



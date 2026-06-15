---
normalized_id: cp2-2023-april-question-paper-cp2-1-april23-exam-clean-proof
exam_code: CP2
year: 2023
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Apr23/CP2-1_April23_EXAM_Clean Proof.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2023-april-question-paper-cp2-1-april23-exam-clean-proof

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                                 14 April 2023 (am)


                   Subject CP2 – Modelling Practice
                            Core Practices
                                     Paper One
                      Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CP21 A2023                                               © Institute and Faculty of Actuaries
Exam requirements
1    Modelling steps and data checks

     Read the background document, which describes the scenarios that need to be
     modelled and documented for this project.

     Construct a spreadsheet model that produces the following calculations and charts.
     You should ensure that your spreadsheet contains appropriate self-checks and that you
     have performed reasonableness checks at each stage of your calculations.

     Modelling steps:

     (i)     Carry out checks on the data provided to confirm that the data is fit for
             purpose, making any corrections or deletions that are needed.                      [6]

     (ii)    Construct a table that shows the number of individuals in each of the four
             health states at the end of the year, that had a particular health status at the
             start of the year.

             [Note: you may find the format of the table provided in the alternative
             scenario below useful.]                                                            [3]

     (iii)   Convert the numbers calculated for the table in part (ii) into transition
             probabilities between health statuses, for individuals that had a particular
             health status at the start of the year.                                            [2]

     (iv)    Starting with 1,000,000 healthy individuals at the outset, using the results
             calculated in part (iii) above, carry out the following calculations for the health
             programme for each year in the projection period:

                Calculate the number of people in each of the four states.
                Calculate the present value of the total cost in treating these people.
                Calculate the present value of the cost per life alive.
                                                                                                [8]

     (v)     Repeat part (iv) using the transition probabilities provided by Pangloss, a
             pharmaceutical company (see ‘Alternative scenario’).                               [3]

     (vi)    Calculate the drug costs that the National Health Agency (NHA) should
             counter propose to Pangloss.                                                       [3]

     (vii)   Construct one chart to illustrate the number of lives alive throughout the
             projection period under the base and alternative scenarios to verify
             Pangloss’s claim that their new drugs would reduce the number of deaths
             in the population.                                                                 [2]

     (viii) Construct one chart to illustrate the real cost per individual alive under each of
            these three scenarios.                                                         [2]

             [Note: all scenarios outlined above should be modelled separately within
             your spreadsheet. The user should not need to change the parameters to see
             the results.]                                                  [Sub-total 29]

CP21 A2023–2
2    Modelling technique and practice

     (i)       Auto checks on the modelling completed in Question 1.                       [2]

     (ii)      Demonstration of good modelling technique and spreadsheet practice.     [7]
                                                                             [Sub-total 9]


3    Audit trail

     Produce an audit trail for your spreadsheet model, that includes the following aspects:

           Purpose of the model
           Data and comment on the reasonableness of the transition probabilities that you
            derived from the data
           Assumptions used
           Methodology, i.e. description of how each calculation stage in the model has been
            produced
           Explanation of any checks performed.

     You should ensure that your audit trail is suitable for both a senior actuary, who has
     been asked to approve your work, and a fellow student, who has been asked to peer
     review and correct your model, or may be asked to continue work on it or to use it
     again for a similar purpose in the future.

     Marks available for audit trail:

     Audit approach

     (i)       Communication skills.                                                       [4]

     (ii)      Fellow student can review and check methods used in the model.              [7]

     (iii)     Senior actuary can scrutinise and understand what has been done.            [7]

     (iv)      Written in clear English.                                                   [4]

     (v)       Written in a logical order.                                                 [3]

     Audit content

     (vi)      All steps clearly explained.                                                [8]

     (vii)     Reasonableness checks included.                                             [6]

     (viii) Clear signposting/labelling included throughout.                               [4]

     (ix)      Statement of assumptions made.                                              [3]

     (x)       All model steps accurately covered.                                       [16]
                                                                               [Sub-total 62]
                                                                                  [Total 100]


CP21 A2023–3
Background
The National Health Agency (NHA) of Country X provides healthcare to all the citizens of
Country X. The NHA has started a programme to assess the effectiveness of its healthcare
services.

The NHA classifies each of its citizens into one of four possible health states:

   healthy (H)
   sick (S)
   very sick (I)
   dead (D).

The NHA tracks the health status of all individuals receiving healthcare each year, who were
alive at the start of the year. An individual is alive at the start of each year if they were in one
of the following states:

   healthy (H)
   sick (S)
   very sick (I).

By the end of the year, an individual’s health status can be unchanged from their health status
at the start of the year, or they can have transitioned into a different health state during the
year. For example, a person who is healthy (H) at the start of the year can still be healthy (H)
at the end of the year, or they can become sick (S), very sick (I) or they might have died (D)
during the year. The only state an individual will remain in and cannot transition out of is the
dead (D) state.

An individual can only be in one of the four possible states at a time, and it is assumed that
there is only one transition per individual per year. An individual is assumed to transition
between states half-way through the year.

There are costs (‘overheads’) incurred by the NHA for every individual in Country X. The
costs per individual are dependent on the state of health of the individual. The overheads
include salaries of the healthcare staff and the use of hospital facilities. The NHA estimates
that currently the cost per year for an individual that is alive is on average:

   healthy (H): $50.
   sick (S): $200.
   very sick (I): $3,000.

There is an additional one-off cost of $250 for individuals who die during the year. When an
individual is sick (S) or very sick (I), there will be additional costs incurred for the drugs that
are used to treat them (‘drug costs’). The current drug costs per year can be assumed to be
$150 for individuals who are sick (S) and $4,000 for individuals who are very sick (I).

The NHA expects the annual overhead costs (including the one-off cost of $250 on death) to
increase in line with general inflation at 2% p.a. The annual drug costs are expected to
increase by 5% p.a.



CP21 A2023–4
The NHA has started a programme to study how a large number of individuals who are all
healthy at the outset transition between different states of health over a period of 30 years,
and to understand the costs associated with providing healthcare to these individuals. At the
outset of the programme, the NHA randomly selected 1,000,000 healthy (H) individuals from
Country X. The budget for this programme is $9 billion.

The NHA will measure the success of its healthcare programme by looking at the number of
lives alive at the end of each year. The greater the number of lives alive at the end of each
year, the more successful the healthcare programme is assumed to be.

The NHA has asked your company to evaluate the effectiveness of its programme. As a
government-run organisation, the NHA is conscious of the need to control its costs and has
therefore asked your company to assess whether the cost of the programme will be within its
$9 billion budget. The NHA is also interested in the cost per life alive in this programme,
which is defined as the annual cost incurred, including the one-off death cost (in present
value terms) divided by the number of lives alive at the start of each time period.

The NHA has provided historic data that shows the states individuals are in at the start and at
the end of a particular year. The NHA is confident that this dataset will provide a good
indication of the transition rates that the 1,000,000 individuals selected for the programme
will experience.

[Note: the initial statuses in the data provided contain individuals who are in the healthy (H),
sick (S), very sick (I) and dead (D) states whereas the initial statuses of the 1,000,000
individuals in the projection are assumed to all start in the healthy (H) state.]

The NHA has stated that the discount rate used to calculate the annual cost incurred can be
assumed to be 4% p.a.

Your manager would like you to review the data provided by NHA to make sure it is fit for
purpose and make amendments or deletions where appropriate. Your manager has asked you
to then use the cleansed data to determine the transition probabilities between different states.

Using these probabilities, your manager would like you to project the number of lives in these
four states and the real cost per individual alive under this programme for 30 years. For each
of the time periods, you are expected to complete the following steps:

   Determine the number of individuals alive (alive = any state but dead (D)).
   Determine the costs for each state.
   Determine the total real cost of the programme.
   Calculate the cost per individual alive in real terms.

Given the approximate nature of this exercise, non-integer numbers of lives are allowed at
each state in time.




CP21 A2023–5
Alternative scenario

Pangloss, a pharmaceutical company, has approached the NHA and claims that their new
drugs would reduce the number of deaths in the population in the projection period. NHA has
done an initial study and observed that the transition probabilities for individuals taking
Pangloss’ new drugs are at each point in time t as follows:

             original transitional probabilities + t – 1 × transition improvements,

where t is the year (for years 1 to 30) and the new transitional improvements are as follows:

                                                        End of year
                                      H             S              I             D
                         H         0.0018        ˗0.0012       ˗0.00055      ˗0.00005

           Start of      S         0.00065        0.0005       ˗0.00083      ˗0.00032
            year         I         0.0005         0.001         0.0005       ˗0.002
                         D            0             0                 0          0

NHA would like your company to verify Pangloss’s claim using the transition probabilities
provided above in your projection.

The average cost for the new drug used in the S state is $250 p.a. per life while the average
cost of the new drugs used in the I state is $6,000 p.a. per life. These will inflate at 5% p.a.
(i.e. the inflation rate for the drugs cost is unchanged). The overheads remain unchanged and
their inflation will continue to increase at 2% p.a.

While the new drugs by Pangloss are likely to save lives, NHA is mindful of cost. They
would like to make a counter offer to Pangloss’s drugs prices. NHA believes if they propose
to set the drug for the ‘very sick’ people (I) to be 20 times the price of the drug for the ‘sick’
people (S) and keep the present value of the overall cost the same as the base scenario,
Pangloss is likely to accept the counter offer.

Your manager would like you to:

   verify Pangloss’s claim that their new drugs would reduce the number of deaths in the
    population by redoing the analysis using the transition probabilities provided and
    recalculating the costs under this new drug.
   make a copy of the projection using Pangloss’s transition probabilities and determine the
    prices needed for new drugs to result in the same overall costs as those found in the
    original scenario.

To assist with presenting the results of your analysis, your manager has asked you to:

   produce a chart to illustrate the number of individuals alive under the base scenario and
    the alternative scenario.
   produce a chart to illustrate the real cost per individual alive under each of the three
    scenarios.




CP21 A2023–6
Unfortunately, your manager has just called you to inform you that they are suffering from
food poisoning and will be out of action. They would like you to complete the analysis
required and documented in an audit trail ready for their return.

Additional guidance

You may find the diagram below conceptually helpful.




                                   END OF PAPER




CP21 A2023–7



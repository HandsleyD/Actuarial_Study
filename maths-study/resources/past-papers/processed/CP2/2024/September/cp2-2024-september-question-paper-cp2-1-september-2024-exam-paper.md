---
normalized_id: cp2-2024-september-question-paper-cp2-1-september-2024-exam-paper
exam_code: CP2
year: 2024
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Sep24/CP2-1_September 2024_Exam Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2024-september-question-paper-cp2-1-september-2024-exam-paper

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                             11 September 2024 (am)


                   Subject CP2 – Modelling Practice
                            Core Practices
                                     Paper One
                       Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CP21 S2024                                               © Institute and Faculty of Actuaries
Exam requirements
1    Modelling steps and data checks

     Read the background document, which describes the scenarios that need to be
     modelled and documented for this project.

     Construct a spreadsheet model that produces the following calculations and charts.
     You should ensure that your spreadsheet contains appropriate self-checks and that you
     have performed reasonableness checks at each stage of your calculations.

     Modelling steps:

     (i)     Carry out data checks on the data provided to confirm that the data is fit for
             purpose, making any corrections or deletions that are needed.                  [9]

     (ii)    Construct two separate charts to show the number of taxi pick-ups by day of
             the week and by the pick-up hour of the day.                               [4]

     (iii)   Construct a chart that shows the relationship between distance and journey
             duration.                                                                  [2]

     (iv)    Calculate the expected fare amount using the fare formula (1).                [1]

     (v)     Using a hypothesis test, or otherwise, show that the fare formula provided by
             the manager is a good fit to the ‘fare_amount’ data provided at a 95%
             confidence level.                                                           [3]

     (vi)    Calculate the expected fare after the proposed increase (2) is introduced.    [2]

     (vii)   Analyse the impact of the fare increase calculated in part (vi) on the total
             number of taxi journeys, in July 2021, that begin or end in neighbourhood A.
                                                                                          [3]

     (viii) Calculate R, the additional adjustment needed to the fare increase factor, to
            reduce the number of taxi journeys that begin or end in neighbourhood A to
            80% of those implied by the sample data.                                      [3]

     [Note: All scenarios outlined above should be modelled separately in your
     spreadsheet. The user should not need to change the parameters to see the results.]
                                                                            [Sub-total 27]


2    Modelling technique and practice

     (i)     Auto checks on the modelling completed in question 1 parts (i)–(viii).        [3]

     (ii)    Demonstration of good modelling technique and practice.                      [7]
                                                                               [Sub-total 10]




CP21 S2024–2
3    Audit trail

     Prepare an audit trail for your spreadsheet model that includes the following aspects:

     (a)     Purpose of the model

     (b)     Data (including checks and correction) and comment on any pattern you
             spotted in the data and the reasonableness of the charts you plotted

     (c)     Assumptions used

     (d)     Methodology, i.e. description of how each calculation stage in the model has
             been produced

     (e)     Explanation of any further checks performed.

     You should ensure that your audit trail is suitable for both a senior actuary, who has
     been asked to approve your work, and a fellow student, who has been asked to peer
     review and correct your model, or may be asked to continue work on it, or to use it
     again for a similar purpose in the future.

     Marks available for audit trail

     Audit approach:

     (i)     Communication skills.                                                        [4]

     (ii)    Fellow student can review and check methods used in the model.               [7]

     (iii)   Senior actuary can scrutinise and understand what has been done.             [7]

     (iv)    Written in clear English.                                                    [4]

     (v)     Written in a logical order.                                                  [3]

     Audit content:

     (vi)    All steps clearly explained.                                                 [7]

     (vii)   Reasonableness checks included.                                              [7]

     (viii) Clear signposting included throughout.                                        [4]

     (ix)    Statement of assumptions made.                                               [4]

     (x)     All model steps accurately covered.                                        [16]
                                                                              [Sub-total 63]
                                                                                 [Total 100]




CP21 S2024–3
Background
You are an actuarial student at a consultancy. Your company has been employed by a client
that is looking to understand how consumers use taxis in a city (the City), with the aim of
reducing traffic congestion in the City.

Your manager has sourced a sample dataset from the City’s Taxi Commission. This dataset
contains 2.5% of the journeys in the City’s taxis in the month of July 2021. You can assume
this sample dataset is representative of the overall experience of consumers.

Your manager has provided you with the following additional information:

   The number of passengers per taxi journey should be at least one passenger with a
    maximum of six passengers.
   The distance travelled per taxi journey should be at least 0.1 miles with a maximum
    journey distance of 100 miles.
   The fare paid by the customer per taxi journey should be at least $2.50 with a maximum
    of $250.
   The duration of a taxi journey should be more than or equal to 1 minute but less than or
    equal to 3 hours.

The formula for determining the taxi fare paid by the customer in the City is complicated. For
the purpose of this exercise your manager has proposed that it is possible to determine a good
proxy for the fare amount for a taxi journey as a function of the journey distance and the
journey duration.

To verify your manager’s proposed proxy for the fare amount for a taxi journey, plot a chart
that shows the relationship between the journey distance and journey duration.

Your manager has proposed that the following function would be a good proxy to the actual
fare formula used:

      $1.70 + $1.80 × journey distance (in miles) + 0.37 × journey duration (in minutes)      (1)

Your manager would like you to carry out some checks and agree (or disagree) that the
formula is a good fit to the ‘fare_amount’ data provided.

Your client is particularly interested in the taxi journeys that start or end in neighbourhood A
of the City in comparison to those that start or end in all the other neighbourhoods of the
City.

The client is concerned with the frequent congestion in neighbourhood A and has asked your
company to perform an analysis on how increasing the fare will reduce taxi demand. In the
‘Taxi_location&demand’ worksheet there is additional information the client has provided
that will enable you to identify whether a journey starts or ends in neighbourhood A. In the
same worksheet the impact on demand as a result of the increase in fare is also provided.

To explore this for the client, your manager has proposed that you could increase the overall
fare by multiplying the fare formula (1) by:

                                 (1 + 1/Exp(journey distance))                                (2)


CP21 S2024–4
This way, the shortest journey gets the highest fare increase. The increase in fare is expected
to reduce the taxi demand (in line with the table provided in the ‘Taxi_location&demand’
worksheet, in the ‘data for candidates’ spreadsheet). Without loss of generality, you can
assume the impact on demand is continuous (and hence can have non-integer number of
rides).

Your client is particularly interested in seeing how the proposed fare increase affects the
number of taxi journeys that either start or end in neighbourhood A.

Your client suspects that the proposed adjustment (2) will not have the desired impact on the
demand for journeys starting and ending in neighbourhood A. Their target is for the number
of taxi journeys beginning or ending in neighbourhood A to be 80% of that before any fare
increase. To do this they propose the adjustment is updated to be:

                                 1 + R/Exp(journey distance)

The client has asked you to determine what the value for R should be.

Your manager would like you to:

   carry out checks on the data and, if necessary, make adjustments to ensure the data is
    consistent with the information you have been provided.
   calculate the expected fare amount using formula (1).
   use a hypothesis test, or otherwise, to show that the fare formula (1) is a good fit to the
    actual fare amount at a 95% confidence level.
   use the expected fare amount, instead of the raw fare data, to calculate the proposed fare
    increase for all journeys.
   analyse the impact of the fare increase on the number of taxi journeys that begin or end in
    neighbourhood A.
   determine R, the additional adjustment needed to the fare increase factor, to reduce the
    number of taxi journeys that begin or end in neighbourhood A to 80% of those implied by
    the sample data.

Your manager is keen to provide the client with some background information on taxi usage
by looking at how the usage pattern varies throughout the day and by day of the week. To
assist with presenting the results of your analysis, your manager has asked you to:

   produce separate charts to illustrate the number of taxi journeys by day of the week (i.e.
    Monday to Sunday) and by the pick-up hour of the day.
   produce a chart to illustrate the relationship between journey distance and journey time.

Unfortunately, your manager is on holiday. They would like you to complete the analysis
required and document it in an audit trail ready for their return.




CP21 S2024–5
Additional guidance

When calculating the duration of a trip the following knowledge may be of use:

The time format: hh:mm:ss shows the time elapsed during a 24 hour day. For example,
10:29:12 (12 seconds past 10:29 in the morning) is shown as 0.436944 if the cell formatting
is changed from ‘Custom’ to ‘General’. This means 0.436944 of a 24 hour day has elapsed.

To work out the equivalent number of hours elapsed, multiple this by 24 (0.436944 × 24 =
10.48667). Similarly, to work out the equivalent number of minutes elapsed since the start of
the day, multiply the original figure by 1,440 to get 629.20 ( = 24 hours in a day × 60 minutes
in an hour).

You are welcome to use alternative approaches or formatting.


                                   END OF PAPER




CP21 S2024–6


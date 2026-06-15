---
normalized_id: cp2-2024-april-question-paper-cp2-1-april-2024-exam-paper
exam_code: CP2
year: 2024
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Apr24/CP2-1_April_2024_Exam_Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2024-april-question-paper-cp2-1-april-2024-exam-paper

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                                  8 April 2024 (am)


                   Subject CP2 – Modelling Practice
                            Core Practices
                                     Paper One
                       Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CP21 A2024                                               © Institute and Faculty of Actuaries
Exam requirements
1    Modelling steps and checks

     Read the background document, which describes the scenario that needs to be
     modelled and documented for this project.

     Construct a spreadsheet model that produces the following calculations and charts.
     You should ensure that your spreadsheet contains appropriate self-checks and that you
     have performed (and documented in the audit trail) reasonableness checks at each
     stage of your calculations.

     (i)     Generate a set of 6,000 Normal (0,1) random numbers using the random
             numbers provided from a Uniform (0,1) distribution.                          [3]

     (ii)    Verify that the random numbers simulated in part (i) come from the Normal
             (0,1) distribution by:

                calculating appropriate summary statistics.
                checking the overall distribution using a chart.
                checking the overall distribution by completing a chi square test.

             [Note: You are not expected to make any changes to the data. You will also
             be able to continue to complete the model if you have not completed all the
             verifications requested above.]                                             [8]

     (iii)   Generate 1,000 simulations of the share price, S(t), for each year from
             1 January 2025 to 1 January 2031.                                            [3]

     (iv)    Construct a chart to illustrate the distribution of the share price, S(t),
             simulations as at both 1 January 2028 and 1 January 2031, grouping the
             simulations into appropriate price bands.                                    [2]

     (v)     Calculate the following for Senior Managers for each simulation at both
             1 January 2028 and 1 January 2031:

                The total notional profit
                The cost of exercising the options
                The percentage profit margin above the cost of exercising the option.
                                                                                          [4]

     (vi)    Repeat part (v) for Associates.                                              [3]




CP21 A2024–2
     (vii)   Calculate the following key statistics for both the Senior Managers and
             Associates as at 1 January 2028 and 1 January 2031:

                The minimum total notional profit
                The average total notional profit
                The maximum total notional profit
                The average cost of exercising the options
                The average profit margin (%).
                                                                                          [3]

     (viii) Construct a chart to show the distribution of total notional profits for both
            Senior Managers and Associates as at 1 January 2028 and 1 January 2031.
            You should show the number of simulations that fall into appropriately
            grouped profit bands.                                                         [3]
                                                                               [Sub-total 29]


2    Modelling technique and good practice

     In addition to the requirements above, marks will be allocated for modelling
     technique and good practice as follows:

     (i)     Auto checks on the modelling completed in question 1, parts (iii)–(viii).    [2]

     (ii)    Demonstration of good modelling technique and practice.                     [7]
                                                                               [Sub-total 9]




CP21 A2024–3
3    Audit trail

     Prepare an audit trail for your spreadsheet model that includes the following aspects:

           Purpose of the model
           Data (including checks) and assumptions used
           Methodology, i.e. description of how each calculation stage in the model has been
            produced
           Explanation of any further checks performed.

     You should ensure that your audit trail is suitable for both a senior actuary, who has
     been asked to approve your work, and a fellow student, who has been asked to peer
     review and correct your model, or may be asked to continue to work on it or to use it
     again for a similar purpose in the future.

     Marks available for audit trail:

     Audit approach

     (i)       Communication skills (the audit trail provides enough detail to be read as a
               stand-alone document).                                                       [4]

     (ii)      A fellow student can review and check methods used in the model.             [7]

     (iii)     A senior actuary can scrutinise and understand what has been done.           [7]

     (iv)      Written in clear English.                                                    [3]

     (v)       Written in a logical order.                                                  [3]

     Audit content

     (vi)      All steps clearly explained.                                                 [7]

     (vii)     Reasonableness checks included.                                              [6]

     (viii) Clear signposting included throughout.                                          [4]

     (ix)      Statement of assumptions made.                                               [5]

     (x)       All model steps accurately covered.                                        [16]
                                                                                [Sub-total 62]
                                                                                   [Total 100]




CP21 A2024–4
Background
You work for the actuarial department of Banking Inc., a publicly listed company (‘the
Company’). The Human Resources (HR) department and Chief Financial Officer (CFO) of
the Company are considering offering share options (terms in bold will be defined in the
Glossary of Terms at the end of the paper) as part of a new incentive package to attract and
retain key employees.

The HR manager has advised that throughout the 2025 calendar year, each Senior Manager
will be awarded three independent tranches of options (totalling 300 shares) while Associates
will be awarded two independent tranches (totalling 200 shares). The tranches will have the
same exercise date but different exercise prices. The HR manager has provided the
following schedule of the share options to be offered to employees:

                                           Exercise price      Number of shares
            Option tranche details
                                           per share ($)     offered per employee
            Senior Managers tranche 1           70                    100
            Senior Managers tranche 2           80                    100
            Senior Managers tranche 3           90                    100

                                           Exercise price      Number of shares
            Option tranche details
                                           per share ($)     offered per employee
            Associates tranche 1                 90                   100
            Associates tranche 2                100                   100

Employees will be given the opportunity to decide whether to cash in (to exercise) the
options at the exercise date, or not. The company is currently deciding on whether the
exercise date will be 1 January 2028 or 1 January 2031.

There will be no cost to the employees for holding the option to buy the shares, with any such
costs being borne by the Company. Employees will need to pay the exercise price per share if
they exercise the options.

The HR manager has requested that it is assumed that employees will exercise their share
options only where they would make a profit in doing so. The notional profit is calculated as
the share price at the exercise date minus the exercise price, with a minimum of $0.

The HR manager has also requested an illustration of the employees’ expected notional
profits due to the share options for employees if the exercise date of the options is either
1 January 2028 or 1 January 2031, to help the Company decide which exercise date to use.

The company share price is expected to be $100 per share at 31 December 2024.




CP21 A2024–5
Modelling

The CFO has provided the actuarial department with the following model to simulate the
Company’s share price for each year between 𝑆 (Company share price at 1 January 2025)
to 𝑆 (Company share price at the potential exercise date of 1 January 2028) to 𝑆
(Company share price at the potential exercise date of 1 January 2031).

                                𝑆      𝑆         exp

where μ = 0.01, σ = 0.05 and where 𝑍         a random number from the Normal (0,1)
distribution.

The CFO has also provided a set of 6,000 random numbers from the Uniform (0,1)
distribution to enable the actuarial department to generate 6,000 random numbers from a
Normal (0,1) distribution to model 𝑍 . The Uniform (0,1) random numbers have been
checked and confirmed to be from the correct distribution.

The CFO has also confirmed that 1,000 simulations of the share price for each year from
𝑆 to 𝑆 should be carried out.

The CFO has requested the following calculations for each of the 1,000 share price
simulations:

   The expected total notional profit, cost to purchase the shares and profit margin (i.e.
    notional profit divided by total exercise cost of the option) of exercising the options for
    Senior Managers, if the exercise date is 1 January 2028 and if the exercise date is
    1 January 2031.
   The expected total notional profit, cost to purchase the shares and profit margin of
    exercising the options for Associates, if the exercise date is 1 January 2028 and if the
    exercise date is 1 January 2031.

The CFO also requires summary statistics from the 1,000 simulations, including minimum,
maximum and average of the notional total profit, the average cost of exercising the options
and the average profit margin on exercising the options for both Senior Managers and
Associates.

The CFO and HR manager have requested a chart to illustrate the range of the Senior
Managers’ and Associates’ total notional profits on exercising the options at the two potential
option exercise dates, to help them decide which exercise date to use.

Your manager has delegated you the task of preparing the required calculations and charts.




CP21 A2024–6
Additional guidance

The inverse transform method can be used to simulate values from continuous distributions.

First we generate a random number, u, from the U(0,1) distribution. We can use this to
simulate a random variate X with probability density function, f(x), by using the Cumulative
Density Function (CDF), F(x).

Let u be the probability that X takes on a value less than or equal to x, i.e.:

𝑢    𝑃 𝑋       𝑥   𝐹 𝑥 , hence x can be derived as

𝑥   𝐹      𝑢

Hence the following two-step algorithm is used to generate a random variate, x, from a
continuous distribution with CDF F(x):

1. Generate a random number, u, from U(0,1).
2. Return 𝑥 𝐹 𝑢 .

The NORMINV() function in Excel can be used to calculate the inverse of the normal
cumulative distribution for a given probability value generated from a U(0,1) distribution.

Glossary of terms

Share option: A share option gives the holder of the option the right (but not an obligation)
to purchase shares at a specified price at a specified point of time.

Exercise date: The exercise date refers to the date on which the holder of an option decides
whether to exercise an option, or not.

Exercise price: The exercise price is the price at which the holder of an option can purchase
the share associated with the option.

To exercise: If the holder of an option decides to purchase the share at the exercise price on
the exercise date they have chosen to exercise the option.


                                     END OF PAPER




CP21 A2024–7


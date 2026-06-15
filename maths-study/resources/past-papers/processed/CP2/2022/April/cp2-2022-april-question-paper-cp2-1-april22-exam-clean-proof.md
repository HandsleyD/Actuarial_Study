---
normalized_id: cp2-2022-april-question-paper-cp2-1-april22-exam-clean-proof
exam_code: CP2
year: 2022
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Apr22/CP2-1_April22_EXAM_Clean Proof.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2022-april-question-paper-cp2-1-april22-exam-clean-proof

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                                 11 April 2022 (am)


                   Subject CP2 – Modelling Practice
                            Core Practices
                                     Paper One
                      Time allowed: Three hours and twenty minutes




         In addition to this paper you should have available the 2002 edition of the
                  Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CP21 A2022                                               © Institute and Faculty of Actuaries
Exam requirements
1    Modelling steps and checks

     Read the background document, which describes the scenario that needs to be
     modelled and documented for this project.

     Construct a spreadsheet model that produces the following calculations and chart.
     You should ensure that your spreadsheet contains appropriate self-checks and that you
     have performed (and documented in the audit trail) reasonableness checks at each
     stage of your calculations.

     (i)     Verify the data provided, confirming it does come from the Normal (0,1)
             distribution by:

                calculating summary statistics.
                checking the overall distribution using a chart.
                checking the overall distribution by completing a chi-squared test.

             [Note: you are not expected to make any changes to the data. You will also be
             able to continue to complete the model if you have not completed all the
             verification requested above.]                                             [8]

     (ii)    Calculate the expected accumulated deposit, the residual mortgage required
             and the monthly mortgage repayment for the fixed rate option for the
             illustrative average house price.                                          [4]

     (iii)   For each simulation under the variable rate option:

                project the variable interest rate over the 2-year period.
                calculate the accumulated deposit over the investment period.
                calculate the amount that needs to be borrowed by the customer from the
                 bank at the end of the investment period.
                calculate the expected monthly mortgage repayment.
                calculate the difference between the total mortgage repayments (over the
                 fixed term of the mortgage, i.e. for this product, 25 years) under the fixed
                 rate option and the total mortgage repayments (over the fixed term of the
                 mortgage, i.e. for this product, 25 years) under the variable rate option.
                                                                                            [9]

     (iv)    Calculate the following key statistics from the simulations produced in part (iii)
             for the difference between the total mortgage repayments under the fixed rate
             option and the total mortgage repayments under the variable rate option:

                the average
                the maximum
                the minimum.

             You should also calculate the percentage of outcomes for which the total
             mortgage repayments under the fixed rate option is lower than the total
             mortgage repayments under the variable rate option.                             [3]


CP21 A2022–2
     (v)    Repeat steps (ii), (iii) and (iv) for the alternative product (allowing for the new
            terms of the savings and mortgage elements). When calculating the total
            mortgage repayments, you only need to consider the payments made over the
            fixed term of the mortgage, i.e. for this product, 5 years.                      [5]

            [Note: all products outlined above should be modelled separately within
            your spreadsheet. The user should not need to change the parameters to see
            the results.]
                                                                           [Sub-total 29]


2    Modelling technique and good practice

     In addition to the requirements above, marks will be allocated for modelling
     technique and good practice as follows:

     (i)    Auto checks on the modelling completed in stages 1(ii)–(vi).                    [2]

     (ii)   Demonstration of good modelling technique and spreadsheet practice.     [7]
                                                                          [Sub-total 9]




CP21 A2022–3
3    Audit trail

     Prepare an audit trail for your spreadsheet model, that includes the following aspects:

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

     (i)       Communication skills.                                                      [4]

     (ii)      Fellow student can review and check methods used in the model.             [7]

     (iii)     Senior actuary can scrutinise and understand what has been done.           [7]

     (iv)      Written in clear English.                                                  [4]

     (v)       Written in a logical order.                                                [3]

     Audit content

     (vi)      All steps clearly explained.                                               [7]

     (vii)     Reasonableness checks included.                                            [5]

     (viii) Clear signposting/labelling included throughout.                              [4]

     (ix)      Statement of assumptions made.                                             [5]

     (x)       All model steps accurately covered.                                       [16]
                                                                               [Sub-total 62]
                                                                                  [Total 100]




CP21 A2022–4
Background
You work in the mortgage department of a local bank. Your bank wishes to introduce a new
mortgage product, which combines a savings account and a mortgage. The purpose is to
encourage customers to save a deposit for a house purchase and then remain with your bank
to finance the residual house price (equal to the house price less total amount accumulated in
the savings account) through a mortgage.

Under the terms of this new savings/mortgage product, the customer will make regular
monthly payments (in advance) to a savings account for a period of 2 years. At the end of the
2-year period, the customer will use the total amount accumulated in the savings account as a
deposit to purchase a house and the bank will provide a mortgage equal to the residual house
price. The mortgage will have a fixed interest rate for the term of the mortgage and the
mortgage repayments will be payable monthly.

The bank is considering two options for how the interest is determined for the savings period
and for determining the monthly mortgage repayment.

1.     Fixed rate option:

          During the savings phase, the bank will offer a savings interest rate of 5.0% p.a.
          To determine the monthly mortgage repayment, a fixed interest rate of 5.0% p.a.
           will be used.

2.     Variable rate option:

          During the savings phase, the bank will offer a monthly savings rate equal to the
           base interest rate (i.e. the effective annual rate of interest rate, as set by the Central
           Bank) applicable at the beginning of that month.
          The monthly mortgage repayment will be calculated using a fixed interest rate for
           the term of the mortgage, with the fixed interest rate equal to the base interest rate
           at the start of the 25th month, i.e. immediately after the 2-year savings period.

       The operations team at the bank has confirmed that the current (i.e. at the start of
       month 1) base interest rate is 4.5% p.a. and the expected movement can be determined
       as follows:

       Interest rate at t + 1 = Interest rate at t     + 0.50%              if        X ≥ 2.0
                                                       + 0.25%              if 2.0 > X ≥ 1.5
                                                       + 0.00%              if 1.5 > X ≥ –1.5
                                                       – 0.25%              if –1.5 > X ≥ –2.0
                                                       – 0.50%              if –2.0 > X

       where t is measured in months and X is a random number from the Normal (0,1)
       distribution.

       The bank would like to understand the potential variability of the difference between
       the total mortgage repayments for the fixed rate option and the total mortgage
       repayments for the variable rate option over the full term of the mortgage.




CP21 A2022–5
Modelling

Your manager has asked you to calculate how much deposit a customer will accumulate in
the savings account over the initial 2-year period and the resulting expected monthly
mortgage repayment calculated using the fixed rate option.

For the purposes of this illustration, the marketing team from the bank has advised that:

   a customer will be able to save $1,000 per month into the savings account.
   the average house price is $200,000 at the point the mortgage is taken out.
   the term of the mortgage is expected to be 25 years.

You are also required to complete a similar analysis for the variable rate option. For this
purpose, you have been provided with an Excel file with 4,800 random numbers from the
Normal (0,1) distribution. This has been provided in the format of 200 rows by 24 columns.

Your manager would like you to use these random numbers to produce 200 simulations of the
potential monthly mortgage repayment under the variable rate option. For each of these
simulations, you should calculate:

   the deposit that is expected to be accumulated by the customer over the 2-year savings
    phase.
   the expected monthly mortgage repayment assuming that the mortgage is determined
    using a fixed rate of interest equal to the base interest rate at the start of the 25th month.

Using these calculations, your manager would like you to calculate the difference between
the total mortgage repayments under the fixed rate option and the total mortgage repayments
over the same term of the mortgage for each simulation under the variable rate option.
Furthermore, you should:

1. calculate the key statistics (i.e. max, min, average) of the differences.
2. calculate the percentage of outcomes for which the total mortgage repayments under the
   fixed rate option is lower than the total mortgage repayments under the variable rate
   option.




CP21 A2022–6
Alternative product

The bank is concerned that customers may not wish to be tied into this new product for a
period of 27 years. They would, therefore, like to consider an alternative product that
involves the following:

   The customer will make regular monthly payments (in advance) to a savings account for a
    period of 1 year.
   At the end of the 1-year period, the bank will provide the customer with a fixed rate
    mortgage for the residual house price (equal to the house price less total amount
    accumulated in the savings account). Under this mortgage, while the term continues to be
    25 years, the interest rate is fixed for 5 years only. After this fixed term of 5 years, the
    monthly mortgage repayment amount will be recalculated or the customer will
    remortgage. (You do not need to consider how the monthly mortgage repayment amount
    will change at this point.)

The interest rates will be determined in a similar way to the original product, with the fixed
interest rate for the mortgage determined at the start of month 13.

As the savings term is shorter for this alternative product, the operations team has advised
that the customer would be expected to make monthly savings of $2,000 per month.

Your manager would like you to complete the same analysis for this alternative product by
comparing the total mortgage repayments under the fixed rate and variable rate options for
the period over which the fixed interest rate applies. (You will need to calculate how much
deposit a customer will accumulate during the initial 1-year period and the monthly mortgage
repayment amount for the first 5 years.)




CP21 A2022–7
Additional Guidance

Please find below standard actuarial formulae. You may find these useful when
modelling the scenario described.

Where i is the effective rate of interest, we can define:

                                                   1
                                            v=
                                                  1+i
                                             v=1–d

                                              d = iv

                                                   i
                                            d=
                                                  1+i
We denote the nominal rate of interest payable p times per period by i(p).
                                                            p
                                                i(p)
                                        1+i= 1+
                                                 p

Annuity in arrears

an is the value at the start of any given period of length n of a series of n payments, each of
amount 1, to be made in arrears at unit time intervals over the period.

                                                  1 – vn
                                           an =
                                                     i
Annuity in advance

an is the value at the start of any given period of length n of a series of n payments, each of
amount 1, to be made in advance at unit time intervals over the period.

                                                  1  vn
                                           an =
                                                     d


                                     END OF PAPER




CP21 A2022–8


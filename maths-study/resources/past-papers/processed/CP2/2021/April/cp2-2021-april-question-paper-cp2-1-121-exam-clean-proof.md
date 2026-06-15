---
normalized_id: cp2-2021-april-question-paper-cp2-1-121-exam-clean-proof
exam_code: CP2
year: 2021
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Apr21/CP2-1_121_EXAM_Clean Proof.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2021-april-question-paper-cp2-1-121-exam-clean-proof

   INSTITUTE AND FACULTY OF ACTUARIES




                               EXAMINATION

                                 12 April 2021 (am)


                   Subject CP2 – Modelling Practice
                            Core Practices
                                      Paper One
                       Time allowed: Three hours and fifteen minutes




          In addition to this paper you should have available the 2002 edition of the
                   Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment team on
T. 0044 (0) 1865 268 873.


CP21 A2021                                                © Institute and Faculty of Actuaries
Exam requirements

1     Modelling steps and data checks

      Read the background document that describes the scenarios that need to be modelled
      and documented for this project.

      Construct a spreadsheet model that produces the following calculations and charts.
      You should ensure that your spreadsheet contains appropriate self-checks and that you
      have performed reasonableness checks at each stage of your calculations.

      (i)     Carry out checks on the data provided to confirm that the data is complete and
              fit for use. This should include:

              •   creating a graph showing the average solar electricity generation and
                  average electricity usage for each hour in a day, i.e. the average over all
                  amounts for 1 am, and each subsequent hour within a 24-hour period.
              •   investigating any significant outliers.
              •   making any corrections that are needed.
                                                                                                [6]

      (ii)    Calculate, for each hour in 2020, the amount of electricity that needed to be
              bought from the electricity provider (measured in kWh and subject to a
              minimum of zero).                                                             [1]

      (iii)   Calculate, for each hour in 2020, the excess solar electricity generated over
              electricity used (measured in kWh and subject to a minimum of zero).          [1]

      (iv)    Model the cumulative battery charge level (measured in kWh) for each hour
              over 2020, assuming a battery had already been installed.

              The battery charge level should:

              •   begin at zero at 1 January 2020 00:00.
              •   allow for the increase or decrease in charge level depending on the hourly
                  results of parts (ii) and (iii).
              •   be subject to the cap on the maximum battery charge level.
                                                                                         [4]

      (v)     Calculate the amount of electricity for each hour in 2020 that would have been
              bought from the electricity provider (measured in kWh and subject to a
              minimum of zero), assuming a battery had already been installed.            [2]

      (vi)    Calculate the saving over 2020 (in dollars ($), using 1 January 2022 electricity
              prices and ignoring discounting) from installing a battery compared to using
              the existing solar panels alone.                                             [2]




CP21 A2021–2
     (vii)   Tabulate the data appropriately and then produce a chart to illustrate, on a
             monthly basis for the calendar year and measured in kWh, the:

             •     monthly solar generation.
             •     monthly electricity usage.
             •     monthly electricity purchased from the electricity provider (no battery).
             •     monthly electricity purchased from the electricity provider (with battery).

             [Hint: You may wish to use the Excel functions MONTH(date) and SUMIF.]
                                                                                 [4]

     (viii) (a)        Project forward for 20 years from 1 January 2022 the annual savings
                       from installing the battery for the two scenarios below.

             (b)       For the two scenarios, calculate the Net Present Value (NPV) of the
                       future annual savings.
                                                                                             [5]

             The scenarios are as follows:

             1. Electricity prices increase as expected by the government, 4% p.a.
             2. Electricity price increases start at 4% p.a. and rise each year by an
                additional 0.25% p.a., as estimated by Naomi.

     (ix)    Calculate the Internal Rate of Return (IRR) for the two scenarios in part (viii)
             by determining the discount rate that equates the net present value of the
             future annual savings to the initial cost of the battery for each scenario.    [3]
                                                                                 [Sub-total 28]

             [Note: All scenarios outlined above should be modelled separately in your
             spreadsheet. The user should not need to change the parameters to see the
             results.]


2    Modelling technique and practice

     (i)     Auto checks on the modelling completed in (1).                                  [2]

     (ii)    Demonstration of good modelling technique and practice.                        [7]
                                                                                  [Sub-total 9]




CP21 A2021–3
3    Audit trail

     Prepare an audit trail for your spreadsheet model that includes the following aspects:

     •     purpose of the model
     •     data, including checks, the results of the checks and any action taken as a
           consequence
     •     assumptions used
     •     methodology, i.e. description of how each calculation stage in the model has been
           produced
     •     explanation of any further checks performed.

     You should ensure that your audit trail is suitable for both a senior actuary, who has
     been asked to approve your work, and a fellow student, who has been asked to peer
     review and correct your model, or may be asked to continue to work on it or to use it
     again for a similar purpose in the future.

     Marks available for audit trail:

     Audit approach

     (i)       Communication skills (the audit trail provides enough detail to be read as a
               stand-alone document).                                                       [4]

     (ii)      Fellow student can review and check methods used in the model.               [7]

     (iii)     Senior actuary can scrutinise and understand what has been done.             [7]

     (iv)      Written in clear English.                                                    [4]

     (v)       Written in a logical order.                                                  [3]

     Audit content

     (vi)      All steps clearly explained.                                                 [8]

     (vii)     Reasonableness checks included.                                              [5]

     (viii) Clear signposting included throughout.                                          [4]

     (ix)      Statement of assumptions made.                                               [5]

     (x)       All model steps accurately covered.                                        [16]
                                                                                [Sub-total 63]
                                                                                  [Total 100]




CP21 A2021–4
Background

Households have electricity usage needs. This electricity can be purchased from an electricity
provider or generated using solar panels.

Naomi has installed solar panels on the roof of her house to generate electricity from the sun.
Currently the electricity generated from the solar panels is used to meet any electricity usage
in the house at the time it is generated. This saves Naomi money on her electricity costs
because it reduces the amount of electricity she needs to buy from her electricity provider.

Naomi currently receives no benefit or income for the electricity generated by the solar
panels that exceeds her electricity usage. She is, therefore, considering purchasing and
installing a battery that would store any excess electricity generated from the solar panels.
The battery would then discharge its energy to satisfy Naomi’s electricity usage at times
when not enough solar power is being generated.

Electricity (including that generated by solar panels, stored in the battery and purchased from
the electricity provider) is measured in kilowatt hours (kWh).

The battery that Naomi is considering costs $7,000 and would be installed on 1 January 2022,
with an expected working lifetime of 20 years. The battery can store a maximum amount of
12.5 kWh of electricity at any one time (and is subject to a minimum of 0 kWh). Any
electricity generated from the solar panels when the battery is full will not be able to be stored.
Electricity usage would first be met from current solar electricity generation, then from any
stored battery energy and finally by paying for electricity from the electricity provider.

From 1 January 2022, Naomi will pay $0.17 for each kWh of electricity purchased from her
electricity provider. The electricity price increases with annual electricity price inflation on
1 January 2023, and each 1 January thereafter. A recent government report estimated
electricity price inflation over the next 20 years to be 4% p.a. Naomi thinks that the global
focus on climate change will cause electricity prices to rise faster than 4% p.a. and she
estimates that electricity price inflation may increase by an additional 0.25% p.a. year on year
(i.e. an increase of 4.0% p.a. at 1 January 2023, 4.25% p.a. at 1 January 2024, 4.50% at
1 January 2025, etc.).

To help Naomi analyse whether installing a battery would be cost effective, she has installed
a measuring device and provided you with data showing her solar electricity generation and
electricity usage for 2020 in hourly increments. (Data has not been provided for 29 February.
This date can be ignored.) Naomi has asked you to analyse the potential savings in her
electricity costs from purchasing a battery. She has asked you to consider the data on an
hourly basis.




CP21 A2021–5
Naomi has asked you to calculate the extra amount of electricity (in kWh) that could be met
from the solar panel and battery combination compared to just solar panels and the implied
dollar ($) saving in electricity costs of installing the battery. For the following two scenarios,
she would also like you to calculate the NPV of the battery investment using a discount rate
of 6% p.a. and also the IRR:

       Scenario 1.     Electricity prices increase as expected by the government, 4% p.a.
       Scenario 2.     Electricity price increases start at 4% p.a. and rise each year by an
                       additional 0.25% p.a, as estimated by Naomi.

Additional guidance
The IRR of a project is the discount rate that results in the NPV of the expected inflows
associated with the project being equal to its initial cost.


                                     END OF PAPER




CP21 A2021–6



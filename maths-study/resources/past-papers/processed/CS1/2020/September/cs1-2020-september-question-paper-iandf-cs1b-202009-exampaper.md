---
normalized_id: cs1-2020-september-question-paper-iandf-cs1b-202009-exampaper
exam_code: CS1
year: 2020
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS1/CS1B/Sep20/IandF_CS1B_202009_ExamPaper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2020-september-question-paper-iandf-cs1b-202009-exampaper

   INSTITUTE AND FACULTY OF ACTUARIES




                                 EXAMINATION

                                25 September 2020 (am)


                   Subject CS1B – Actuarial Statistics
                            Core Principles
                        Time allowed: One hour and forty-five minutes




      In addition to this paper you should have available the 2002 edition of the Formulae
             and Tables and your own electronic calculator from the approved list.


If you encounter any issues during the examination please contact the Examination team at
T. 0044 (0) 1865 268 873.



CS1B S2020                                                    © Institute and Faculty of Actuaries
1    An employee at a café has been trained to set the coffee machine so that an espresso
     coffee portion results in 2.0 grams of coffee being placed into a cup. Knowing that
     variations are expected, the employee pours eight portions and measures the amounts
     to be 1.95, 1.80, 2.10, 1.82, 1.75, 2.01, 1.83 and 1.90.

     The data can be entered into R using the following code:

     amounts=c(1.95,1.80,2.10,1.82,1.75,2.01,1.83,1.90)

     (i)     Calculate an 80% confidence interval for the mean size of espresso coffee
             portions.                                                                [4]

     (ii)    Comment on whether the mean portion of coffee is equal to 2.0 grams.    [2]
                                                                                [Total 6]


2    A researcher has collected the following data on a group of students, regarding
     whether they passed or failed an exam and whether or not they attended tutorials:


                  Number of students              Exam passed    Exam failed

                  Attended tutorials                 132             27

                  Did not attend tutorials           120             51


     The data can be entered into R in matrix form using the following code:

     exam.success = matrix(c(132,120,27,51),ncol=2,nrow=2)

     The reasercher wants to establish whether tutorial attendance is independent of exam
     success, using a chi-square test.


     (i)     State the hypotheses of this test.                                          [2]

     (ii)    Calculate the expected frequencies for the data under the null hypotheses
             in part (i).                                                                [3]

     (iii)   Perform the test stating clearly your conclusion.                           [6]
                                                                                  [Total 11]




CS1B S2020–2
      3    A machine in a sweet factory fills bags of sweets to weigh 500 grams. The actual
           weight of the sweet bags is known to follow a Normal distribution. The sweet
           manufacturer believes that the machine is under-filling the sweet bags. A sample of
           10 sweet bags is taken and weighed, as summarised below.


Bag               1        2         3        4        5        6         7        8        9           10

Weight (grams) 474.11 512.01 493.64 495.03 518.13 486.03 494.48 501.76 498.83 503.02

           The data can be entered into R using the following code:

           weight=c(474.11,512.01,493.64,495.03,518.13,486.03,
           494.48,501.76,498.83,503.02)

           (i)    Perform a suitable t-test to determine whether the sweet bags are being
                  consistently under-filled, stating the hypotheses and the level of significance
                  used in the test.                                                              [8]

           (ii)   Propose an interpretation of your conclusion in part (i).                     [2]
                                                                                          [Total 10]




      CS1B S2020–3
4    Data were collected on average alcohol and cigarette consumption per adult per year
     for a number of countries. The data are given in the file smoking_data.RData
     and contain the following information:

     country: the country concerned;
     alcohol: alcohol consumption per adult per year (litres/year);
     cigarettes: number of cigarettes consumed per adult per year.

     (i)     (a)     Construct a scatterplot of the data with alcohol consumption on the
                     x axis.
             (b)     Comment on the relationship between the data on alcohol and cigarette
                     consumption based on your plot in part (i)(a).
                                                                                         [5]

     (ii)    Calculate Pearson’s correlation coefficient between the data on alcohol and
             cigarette consumption.                                                     [2]

     An analyst suggests using the following R code to modify the data:

     alcohol.2 = alcohol[-c(6,16)]
     cigarettes.2 = cigarettes[-c(6,16)]


     (iii)   Explain what the above code does and give a justification for its use.           [3]

     For the remainder of the question, use the modified data
     (alcohol.2, cigarettes.2), as produced by applying the R
     code above.
     (iv)    (a)   Construct a scatterplot with alcohol consumption on the x axis.
             (b)   Calculate Pearson’s correlation coefficient between the new data on
                   alcohol and cigarette consumption.
             (c)   Comment on your answers in parts (ii) and (iv)(b).
                                                                                               [6]

     (v)     Perform a hypothesis test for the null hypothesis that Pearson’s population
             correlation coefficient is equal to zero, against the alternative that it is positive.
             You should report the p-value of the test and a clear conclusion.                 [5]

     A media bulletin has reported that ‘‘'h‘igher alcohol consumption causes higher
     cigarette consumption’.

     (vi)    Comment on whether this report is justified based on your analysis in parts (iv)
             and (v).                                                                    [2]




CS1B S2020–4
     (vii)    Perform a simple linear regression analysis on the new data using a
              model of the form y = α + βx + ε (cigarette consumption, y, on alcohol
              consumption, x), where the error terms ε independently follow a
              N(0, s2) distribution.

              		Your answer should show the fitted line plotted on the data scatterplot
               and report the estimate of parameter s.                                       [5]

     (viii)   State the proportion of the total variability of the responses explained
              by the model, based on your output in part (vii).                             [1]

     (ix)     Plot a graph of the residuals of the model fitted in part (vii)
              against the explanatory variable.                                             [2]

     (x)      Comment on the validity of the model, based on your output in
              part (ix) .                                                                    [3]
                                                                                      [Total 34]




CS1B S2020–5
5    A waiting time random variable X follows an Exponential distribution with rate l
     parameterised as f (x) = le–lx (x > 0, l > 0).

     The rate l has a Gamma prior distribution with parameters a and s. A Bayesian
     credibility model provides that the posterior mean of 1/l can be expressed as

                                           s                 n
                      Z 3 x + (1– Z )3        , where Z =
                                         α –1             α +n–1

     with n being the number of past waiting times observed.

     Assume that the parameters of the prior Gamma distribution are a = 5 and s = 1.

     (i)     Determine an estimate of the posterior mean of 1/l assuming n = 10 by
             implementing M = 3,000 Monte Carlo repetitions.                               [14]

     (ii)    Determine an estimate of the posterior mean of 1/l and the value of x when
             n = 1,000, by implementing M = 3,000 Monte Carlo repetitions.           [15]

     (iii)   Plot the histograms of the samples of the posterior mean of 1/l and of x
             obtained in part (ii).                                                         [4]

     (iv)    Compare, by visual inspection of the graphs in part (iii), the distributions
             of the posterior mean of 1/l and the distribution of x when n = 1,000.         [2]

     (v)     Comment on the behaviour of the credibility model as n increases, relating
             your answer to your findings in part (iv).                                [4]
                                                                                 [Total 39]


                                  END OF PAPER




CS1B S2020–6


---
normalized_id: cs2-2024-april-question-paper-cs2b-april-2024-exam-paper
exam_code: CS2
year: 2024
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS2/CS2B/Apr24/CS2B_April_2024_Exam_Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2024-april-question-paper-cs2b-april-2024-exam-paper

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                                 18 April 2024 (am)


    Subject CS2 – Risk Modelling and Survival Analysis
                     Core Principles
                                        Paper B
                         Time allowed: One hour and fifty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CS2B A2024                                               © Institute and Faculty of Actuaries
1    An insurer has written ten insurance policies under which, at most, one claim can be
     made from each policy. The probability of a claim from policy i is as follows:

                           Pi = 0.1 + 0.02i    for i = 1, 2, …, 10

     Claim amounts for all policies follow the same Gamma distribution with shape
     parameter α = 10 and rate parameter λ = 2.

     (i)     Construct R code to generate and display a single vector setting out the
             probability of a claim for each policy using the seq function.                  [2]

     (ii)    Construct R code to calculate and display the theoretical mean and theoretical
             standard deviation of the total claim amounts.                              [5]

     (iii)   Construct R code to generate 1,000,000 simulations of claim amounts under
             each of the ten policies, using a random number generator seed of 500 and
             display the first five sets of simulations.                               [6]

     (iv)    Construct R code to generate and display a vector showing the mean and
             standard deviation of claim amounts for each policy from the simulations
             in part (iii).                                                                  [3]

     (v)     Calculate the mean and standard deviation of the total claim amounts from
             the ten policies in this portfolio from the simulations in part (iii) and compare
             these with your answers in part (ii).                                           [4]

     (vi)    Estimate, from the simulations in part (iii), the probability that there will be
             no claims incurred from all ten policies.                                        [2]

     (vii)   Calculate the 99th percentile of total claim amounts from the simulations in
             part (iii).                                                                  [2]

     (viii) Plot a histogram of the simulated total claim amounts, showing density on the
            y-axis.                                                                     [2]

     (ix)    Plot a density function of the Normal distribution using the parameter values
             from part (ii) on top of the histogram in part (viii).                      [2]

     (x)     Calculate the 99th percentile of total claim amounts using the Normal
             distribution in part (ix) to approximate the total claims distribution.         [2]

     (xi)    Comment on the appropriateness of using the Normal distribution in this case.
                                                                                        [2]

     (xii)   Plot a graph similar to the one in part (ix), but with the probability of a claim
             from policy i as follows:

                           Pi = 0.4 + 0.02i    for i = 1, 2, …, 10
                                                                                             [3]

     (xiii) Comment on the appropriateness of using the Normal distribution in this new
            case.                                                                     [3]
                                                                               [Total 38]


CS2B A2024–2
2    The dataset ‘CS2B_A24_Q2.csv’ contains four variables: Body Fat Index (BFI), age,
     weight (in pounds) and height (in inches).

     An analyst is considering fitting the following linear regression model that predicts
     the BFI:

                      BFI       𝛽         𝛽 Age        𝛽 Weight     𝛽 Height      𝜀

     The parameters can be fitted based on the following penalty function:


             𝐿 𝑩, 𝛼, 𝜆              BFI        𝛽       𝛽 Age   𝛽 Weight      𝛽 Height

                                      1        𝛼
                                𝜆                  𝛽     𝛽     𝛽    𝛼 |𝛽 |     |𝛽 |   |𝛽 |
                                           2

     where the vector of regression parameters, 𝑩                  𝛽 ,𝛽 ,𝛽 ,𝛽    and 𝛼 and 𝜆 are some
     parameters that are to be defined.

     (i)        State the type of the regression model if:

                (a)       𝛼   1.

                (b)       𝛼   0.
                                                                                                   [2]

     (ii)       Construct R code to generate a dataframe named ‘BFI’ that includes the
                contents of the file ‘CS2B_A24_Q2.csv’.                                            [2]

     Run the following two lines of code:

     X=as.matrix(BFI[,-1])
     Y=BFI[,1]

     (iii)      Comment briefly on each of these two lines of code.                                [2]

     (iv)       Construct R code to generate a function called ‘Penalty’ that calculates the
                penalty function 𝐿 𝑩, 𝛼, 𝜆 as above on the given data set, and with three input
                variables:

                𝑩     𝛽 , 𝛽 , 𝛽 , 𝛽 the vector of beta values
                ‘alpha’ as the parameter 𝛼
                ‘lambda’ as the value of 𝜆.
                                                                                                  [10]

     (v)        Derive the value of the ‘Penalty’ function above for values of
                𝑩        1, , , 1 , alpha = 0.5 and lambda = 0.8.                                  [2]

     (vi)       Determine the values of alpha and lambda for which the ‘Penalty’ function is
                minimised when 𝑩               1, , , 1 . You do not need to perform any additional
                calculations.                                                                      [4]



CS2B A2024–3
     (vii)   Calculate the corresponding minimum value of the ‘Penalty’ function when
             𝑩     1, , , 1 .                                                           [2]

     (viii) Determine the values of parameters α, λ and 𝑩 for which the function
            𝐿 𝑩, 𝛼, 𝜆 reaches its minimum based on the reasoning used in part (vi).     [4]

     (ix)    Comment on the validity of using the values of parameters α, λ and 𝑩 from
             part (viii).                                                               [5]
                                                                                 [Total 33]




CS2B A2024–4
3    A study has been made into how long in weeks it takes for long distance athletes who
     suffer ankle injuries to recover and be able to run again.

     The datafile ‘CS2B_A24_Q3.csv’ contains data on a group of such athletes where the
     information recorded for each one is:

           time = the number of weeks before recovery or censoring occurs.
           leave = 0 if the person leaves the study before full recovery, or 1 if time to full
            recovery is recorded.
           route = 0 if the person was treated with pain relief drugs and told to rest, or 1 if
            they were on a program of physiotherapy instead of the drugs.
           prior = 1 if there had been another ankle injury in the last 36 months, or 0
            otherwise.

     Before you start this question, you will need to install the survival package in R:

     install.packages("survival")
     library(survival)

     (i)        Construct R code to generate a dataframe named ‘study’ that includes the
                contents of the file ‘CS2B_A24_Q3.csv’ and display the first twelve rows. [2]

     (ii)       State an example of how censoring in this study may be informative or
                non-informative for each treatment route.                                          [2]

     (iii)      Generate R code to calculate the Kaplan–Meier estimate of the survival
                function for the length of time to recovery separately for athletes who take
                pain relief drugs and those on a physiotherapy programme, and plot the
                resulting two survival functions using different coloured lines in a single
                plot.                                                                        [8]

     (iv)       Explain what conclusions can be drawn from your results in part (iii).             [3]

     (v)        Construct R code to generate a Cox’s proportional hazard model with two
                covariates, ‘route’ and ‘prior’. You should use the Breslow method for tie
                handling and display the resulting regression coefficients.                [6]

     (vi)       Comment on what conclusions can be drawn from your answer to part (v)
                about whether treatment route or prior injury is more important in predicting
                length of time to recovery.                                                  [4]

     (vii)      State how you could test which of the two covariates is more important.    [4]
                                                                                    [Total 29]


                                     END OF PAPER




CS2B A2024–5



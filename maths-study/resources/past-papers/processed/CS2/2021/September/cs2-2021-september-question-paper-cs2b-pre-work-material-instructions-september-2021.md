---
normalized_id: cs2-2021-september-question-paper-cs2b-pre-work-material-instructions-september-2021
exam_code: CS2
year: 2021
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS2/CS2B/Sep21/CS2B Pre-work Material Instructions September 2021.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2021-september-question-paper-cs2b-pre-work-material-instructions-september-2021

    INSTITUTE AND FACULTY OF ACTUARIES

                         PRE-WORK MATERIAL
                                       September 2021

     Subject CS2 – Risk Modelling and Survival Analysis
                      Core Principles

                                            Paper B
                          INSTRUCTIONS TO THE CANDIDATES

You are provided with this advance information to enable you to read, understand and action in your
own time, and not under examination conditions.
This instruction sheet provides you with two data files for you to use in the examination:
CS2B_Sept_21_Qu_1_Data.csv
CS2B_Sept_21_Qu_3_Data.csv
These data files need to be loaded into R by first saving them onto the computer you are going to be
using in the examination. Once you have completed this then you need to load the data files into R
ready for use during the examination.
Further guidance on how to do this can be found in “A Guide to CS1 and CS2 Examinations” on
the website.

The guide also provides details of the R packages that will be required for the 2021 CS2B
examinations.

PLEASE NOTE that no prior knowledge of the copula, rpart and rpart.plot packages is
required for the examination.
To test that you have successfully loaded the required R Packages run the following code in order
within R:
######################################################
#### (i) Open libraries #############################
######################################################

library(copula)
library(graphics)
library(markovchain)
library(rpart)
library(rpart.plot)
library(stats)
library(survival)


CS2B S2021                                                © Institute and Faculty of Actuaries
library(utils)


######################################################
#### (ii) Check installs ############################
######################################################

x = c(1:10)
y = matrix(data = c(1,0,0,0,1,0,0,0,1), nrow = 3 , byrow = TRUE)

# Check base package
mean(x)

# Check copula package
fk = frankCopula(5)
persp(fk, dCopula)

# Check graphics package
plot(x)

# Check markovchain package
mc = new("markovchain", transitionMatrix = y); mc

# Check rpart package
rectree <- rpart(Mileage ~ Weight, car.test.frame)
summary(rectree)

# Check rpart.plot package
rpart.plot(rectree, digits = 3, type = 4)

# Check stats package
ppois(5, 11.668332)

# Check survival package
cipoisson(5)

# Check utils package
combn(x,10)


If the code completes with no errors the nine packages are successfully installed.
If you encounter any issues, please contact the Examinations Team on +44 (0) 1865 268 873.


                         END OF PRE-WORK MATERIAL




CS2B S2021                                                © Institute and Faculty of Actuaries



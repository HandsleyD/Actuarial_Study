---
normalized_id: cs1-2023-september-question-paper-cs1a-september-23-exam-clean-proof
exam_code: CS1
year: 2023
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS1/CS1A/Sep23/CS1A_September 23_EXAM_Clean Proof.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2023-september-question-paper-cs1a-september-23-exam-clean-proof

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                             15 September 2023 (am)


                   Subject CS1 – Actuarial Statistics
                            Core Principles
                                        Paper A
                       Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CS1A S2023                                               © Institute and Faculty of Actuaries
1    Consider a random variable, 𝑋, with a discrete uniform distribution on the integer
     numbers 20, 21, …, 79.

     (i)    Determine the expected value of 𝑋.                                              [2]

     (ii)   Determine the standard deviation of 𝑋.                                       [3]
                                                                                   [Total 5]


2    An analyst has modelled the loss (in units of £1,000) due to a fire in a supermarket
     using a random variable, X, with density function:

                                  𝑎 𝑥    20 ,    0 𝑥        20
                         𝑓 𝑥
                                        0,    otherwise

     where 𝑎 is a real number.

     (i)    Determine the value of 𝑎.                                                       [2]

     (ii)   Calculate the conditional probability that the fire loss exceeds £16,000 given
            that it exceeds £8,000.                                                       [3]
                                                                                    [Total 5]




CS1A S2023–2
3    The probability mass function of a random variable, 𝑌, is defined as:

                                𝑘      𝑦       1
               𝑃 𝑌       𝑦                         1    𝑝 𝑝 ,        𝑦    0, 1, 2, 3, …
                                       𝑦

     where k is a positive integer.

     (i)     State the distribution of the random variable 𝑌. Your answer should include an
             explanation of the meaning of the distribution’s parameters.                [2]

     (ii)    Identify which one of the following options gives the natural parameter θ, the
             scale parameter φ, and the relevant functions 𝑏 θ , 𝑎 φ and 𝑐 𝑦, φ of the
             exponential family for this distribution.

             A       θ       log 1     𝑝 , φ 1, 𝑏 θ                 𝑘 log 𝑝, 𝑎 φ      1,
                                         𝑘 𝑦 1
                     𝑐 𝑦, φ          log
                                            𝑦

             B       θ       log 𝑝 , φ         1, 𝑏 θ           𝑘 log 1   𝑝 ,𝑎 φ          1,
                                           𝑘    𝑦 1
                     𝑐 𝑦, φ          log
                                                𝑦

             C       θ       log 1     𝑝 , φ 𝑘, 𝑏 θ                 log 𝑝, 𝑎 φ      𝑘,
                                         𝑘 𝑦 1
                     𝑐 𝑦, φ          log
                                            𝑦

             D       θ       𝑘 log 1     𝑝 , φ         1, 𝑏 θ       𝑘 log 𝑝, 𝑎 φ      1,
                                         𝑘 𝑦           1
                     𝑐 𝑦, φ          log                 .
                                             𝑘
                                                                                                     [3]

     (iii)   Derive, using the properties of the exponential family, the mean of 𝑌.                  [2]

     (iv)    Identify which one of the following options gives the variance of 𝑌:

             A       𝑉𝑌

             B       𝑉𝑌

             C       V [Y]       𝑘

             D       𝑉𝑌         𝑘          .
                                                                                                     [2]
                                                                                               [Total 9]




CS1A S2023–3
4    An insurance company collects and maintains a database of key policyholder data in
     relation to the business that they sell.

     (i)     List the properties that can lead to this data being classified as ‘big data’.   [2]

     (ii)    List two key issues related to the use of data that should be considered by this
             insurance company.                                                            [1]
                                                                                     [Total 3]


5    X and Y are independent random variables. Let W and Z be the random variables
     defined as follows:

                         𝑍   min 𝑋, 𝑌 ,               𝑊   max 𝑋, 𝑌

     that is, Z gives the smaller and W the larger of the observations of X and Y.

     Let 𝐹 , 𝐹 , 𝐹 and 𝐹 denote the cumulative distribution functions of W, X, Y and Z,
     respectively.

     (i)     Identify which one of the following expressions is correct for 𝐹      𝑠 :

             A       𝐹   𝑠       𝐹 𝑠 𝐹 𝑠
             B       𝐹   𝑠       𝐹 𝑠           𝐹 𝑠
             C       𝐹   𝑠       𝐹 𝑠           𝐹 𝑠

             D       𝐹   𝑠             .
                                                                                              [2]

     (ii)    Show that 𝐹 𝑠        𝐹 𝑠           𝐹 𝑠   𝐹 𝑠 𝐹 𝑠 .                               [5]

     The random variable X has an exponential distribution with parameter 6, and Y,
     independently, also has an exponential distribution with parameter 6.

     (iii)   (a)     Identify which one of the following expressions gives the cumulative
                     distribution function of Z:

                     A       1    𝑒
                     B       1    𝑒
                     C       1    𝑒
                     D       1    𝑒        .
                                                                                              [3]

             (b)     State the distribution and mean of Z, using your answer to part (iii)(a).
                                                                                            [1]
                                                                                   [Total 11]




CS1A S2023–4
6    A railway company investigates the impact of train delays on connections that
     passengers experience. In a survey, passengers are asked how many trains they used
     for their journey and whether they have experienced any delays.

             Number, 𝑥, of trains involved in a
                                                    1            2    3 or more
             journey
             Proportion of journeys with 𝑥
                                                    5            12       17
             trains that are delayed (in %)
             Proportion of all journeys (in %)      60           30       10

     In other words, the table states that 60% of all journeys involved only one train. Of
     those journeys, 5% were delayed. 30% of all journeys involved two trains, and 12%
     of those journeys were delayed. And finally, 10% of all journeys involved three or
     more trains, and of those journeys, 17% were delayed.

     Using the above survey data:

     (i)       Calculate the probability that a randomly chosen journey involved fewer than
               three trains.                                                              [1]

     (ii)      Verify that the probability that a randomly chosen journey was delayed is
               8.3%.                                                                       [2]

     (iii)     Calculate the probability that a randomly chosen delayed journey involved
               fewer than three trains.                                                  [3]

     (iv)      Comment on your answers to parts (i) and (iii).                            [2]
                                                                                    [Total 8]




CS1A S2023–5
7    Total losses in a particular company are modelled by a random variable 𝑌 with
     density function:
                                          𝑐
                                              ,    𝑦   1,   𝑐   0
                          𝑓 𝑦         𝑦
                                              0,   otherwise.

     An analyst wishes to estimate the unknown parameter 𝑐.

     (i)     Identify which one of the following expressions gives the maximum
             likelihood estimate for parameter 𝑐:

             A      𝑐̂   ∑


             B      𝑐̂   ∑


             C      𝑐̂   ∑


             D      𝑐̂   ∑
                                  .
                                                                                        [3]

     The analyst assumes a gamma prior distribution for 𝑐 with parameters 𝑎, 𝑏 .

     (ii)    Determine the posterior distribution of 𝑐 with all its parameters.         [6]

     (iii)   Comment on the relationship between the prior distribution and the posterior
             distribution of 𝑐.                                                         [1]

     (iv)    Determine the Bayesian estimate of parameter 𝑐 under quadratic loss.      [2]
                                                                                [Total 12]




CS1A S2023–6
8    The time spent (in minutes) queuing in a line by customers at a bank is modelled by
     the random variable 𝑋 with density 𝑓 𝑥     θ𝑥𝑒     , 𝑥 0. The parameter θ is
     assumed to follow a priori a gamma distribution with parameters 𝑎 and 𝑏.

     (i)     Identify which one of the following expressions is proportional to the
             posterior density of θ given a random sample 𝑥 , 𝑥 , … 𝑥 of observations
             from 𝑋:

                                              ∑

             A         𝑓 θ|𝑥 ∝ θ      𝑒

                                                  ∑

             B         𝑓 θ|𝑥 ∝ θ          𝑒

                                                  ∑

             C         𝑓 θ|𝑥 ∝ θ          𝑒

                                                  ∑

             D         𝑓 θ|𝑥 ∝ θ          𝑒                .
                                                                                           [3]

     (ii)    State the posterior distribution of θ in part (i) and its parameters.         [3]

     The waiting times of ten customers are recorded in the table below and the prior
     knowledge is determined with 𝑎 4, 𝑏 1.5.

                 2.5    1.25   3    1.5       5.5     4   3.25   2   1.5    1

     (iii)   Calculate a point estimate of the time spent queuing in the line using Bayesian
             estimation under all-or-nothing loss.                                         [4]
                                                                                    [Total 10]




CS1A S2023–7
9    The following nine pairs of data are given on observations from two random variables
     X and Y:

             𝑥       5     7     0    6     8     1    4    9     2
             𝑦     11.00 16.18 0.68 11.99 17.72 2.91 9.64 18.92 6.31

     Summary statistics of the data are shown below:

     𝑥       42,      𝑦     95.35,      𝑥     276,      𝑦     1340.194,       𝑥𝑦      606.33

     (i)         Perform a suitable statistical test to investigate the hypothesis that Pearson’s
                 population correlation coefficient for X and Y is positive, at significance
                 level 0.01.                                                                     [6]

     (ii)        Comment on the relationship between X and Y, based on your answer in
                 part (i).                                                                      [2]

     (iii)       Fit a simple linear regression model of y on x.                                [3]

     (iv)        Determine a 99% confidence interval for the predicted mean response,
                 when x = 3.                                                              [5]
                                                                                   [Total 16]




CS1A S2023–8
10   For a socio-economic analysis, a random sample of 20 regions is considered. An
     analyst collects data on average household income (in units of $1,000, denoted by 𝑋)
     and crime rate (in percent, denoted by 𝑌) for each region in the sample. The data are
     displayed in the following plot, and summary statistics are given below.




     𝑥       733,        𝑦    189,        𝑥     29,203,         𝑦     2,009,        𝑥 𝑦      6,208


     (i)        Calculate a 95% confidence interval for the mean household income.               [5]

     (ii)       Calculate Pearson’s correlation coefficient for the relationship between
                household income and crime rate.                                                 [4]

     (iii)      Justify why Pearson’s correlation coefficient is appropriate in this context as
                compared to alternative correlation coefficient measures.                      [2]

     For the three regions with the highest household income the following data have been
     observed:

             Household income (in units of $1,000), 𝑋        54.73     56.61    60.54
             Crime rate (%), 𝑌                               3.896     3.958    2.658

     (iv)       Perform a statistical test to decide if there is a significant difference in the
                mean crime rate between the group of regions with an average household
                income of more than $50,000 and the group of regions with an average
                household income of less than $50,000. You can assume that the variances
                of crime rates are the same in all regions.                                      [8]

     (v)        Comment on the assumption of equal variances made in part (iv).                  [2]
                                                                                          [Total 21]


                                     END OF PAPER

CS1A S2023–9



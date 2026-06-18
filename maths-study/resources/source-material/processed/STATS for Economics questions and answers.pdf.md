---
normalized_id: shared-solutions-stats-for-economics-questions-and-answers
exam_code: SHARED
material_scope: stats for economics questions and answers.pdf
material_group: shared
document_type: solutions
source_repo_path: resources/source-material/shared/STATS for Economics questions and answers.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-solutions-stats-for-economics-questions-and-answers

Birkbeck
Department of Economics,
Mathematics and Statistics
Graduate Certi…cates and Diplomas
Economics, Finance, Financial Engineering;
BSc FE, ESP, E&B.
2012-2013

Applied Statistics and Econometrics
Notes and Exercises

Ron Smith
Email R.Smith@bbk.ac.uk
CONTENTS
PART I: COURSE INFORMATION
1. Aims, readings and approach
2 Class Exercises
3. Assessment
4. How to do your project
PART II: NOTES
5. Introduction
6. Descriptive Statistics
7. Economic and Financial Data I: Numbers
8. Applied Exercise I: Ratios and descriptive statistics
9. Index Numbers
10. Probability
11. Discrete Random Variables
12. Continuous Random Variables
13. Economic and Financial Data II: Interest and other rates
14. Applied Exercise II: Sampling distributions
15. Estimation
16. Con…dence Intervals and Hypothesis Tests for the mean
17. Bivariate Least Squares Regression
18. Matrix Algebra & Multiple Regression
19. Properties of Least Squares estimates
20. Regression Con…dence Intervals and Tests
21. Economic and Financial Data III: Relationships
22. Applied Exercise III: Running regressions
23. Dynamics
24. Additional matrix results
25. Index




                               2
1. PART I: Course Information
1.1. Aims
Economists have been described as people who are good with numbers but not
creative enough to be accountants. This course is designed to ensure that you
are good with numbers; that you can interpret and analyse economic and …nan-
cial data and develop a critical awareness of some of the pitfalls in collecting,
presenting and using data. Doing applied work involves a synthesis of various
elements. You must be clear about why you are doing it: what the purpose of
the exercise is (e.g. forecasting, policy making, choosing a portfolio of stocks,
answering a particular question or testing a hypothesis). You must understand
the characteristics of the data you are using and appreciate their weaknesses. You
must use theory to provide a model of the process that may have generated the
data. You must know the statistical methods, which rely on probability theory,
to summarise the data, e.g. in estimates. You must be able to use the software,
e.g. spreadsheets, that will produce the estimates. You must be able to interpret
the statistics or estimates in terms of your original purpose and the theory. Thus
during this course we will be moving backwards and forwards between these ele-
ments: purpose, data, theory and statistical methods. It may seem that we are
jumping about, but you must learn to do all these di¤erent things together.
    Part I of this booklet provides background information: reading lists; details of
assessment (70% exam, 30% project) and instructions on how to do your project.
Part II provides a set of notes. These include notes on the lectures, notes on
economic and …nancial data, and applied exercises.
    Not all the material in this booklet will be covered explicitly in lectures, par-
ticularly the sections on economic and …nancial data. But you should be familiar
with that material. Lots of the worked examples are based on old exam ques-
tions. Sections labelled background contain material that will not be on the
exam. If you have questions about these sections raise them in lectures or classes.
If you …nd any mistakes in this booklet please tell me. Future cohorts
of students will thank you.




                                         3
1.2. Rough Lecture Outline
These topics roughly correspond to a lecture each, though in practice it may run
a little faster or slower.
    AUTUMN
    1. Introduction
    2. Descriptive Statistics
    3. Index Numbers
    4. Probability
    5. Random Variables
    SPRING
    1. The normal and related distributions
    2. Estimation
    3. Con…dence Intervals and Hypothesis Tests
    4. Bivariate Least Squares Regression
    5. Matrix Algebra & Multiple Regression
    6. Properties of Least Squares estimates
    7. Tests for regressions
    8. Dynamics
    9. Applications
    10. Revison
    Tutorial Classes start on week 2 of the spring term, doing the exer-
cises in section 2.
    The sections in the notes on Economic and Financial Data and Applied Exer-
cises, will be used for examples at various points in the lectures. You should work
through them, where they come in the sequence in the notes. This material will
be useful for class exercises, exam questions and your project.

1.3. Learning Outcomes
Students will be able to demonstrate that they can:

     Explain how measures of economic and …nancial variables such as GDP,
     unemployment and index numbers such as the CPI, RPI and FTSE are
     constructed, be aware of the limitations of the data and be able to calculate
     derived statistics from the data, e.g. ratios, growth rates, real interest rates
     etc.


                                         4
     Use a spreadsheet to graph data and calculate summary statistics and be
     able to interpret the graphs and summary statistics.

     Use simple rules of probability involving joint, marginal and conditional
     probabilities, expected values and variances and use probabilities from the
     normal distribution.

     Explain the basic principles of estimation and hypothesis testing.

     Derive the least squares estimator and show its properties using matrix
     algebra.

     Interpret regression output and conduct tests on coe¢ cients.

     Be familiar with basic non-linear and dynamic models.

     Read and understand articles using economic and …nancial data at the level
     of the FT or Economist.

     Conduct and report on a piece of empirical research that uses simple statis-
     tical techniques.

1.4. Your input
To achieve the learning outcomes (and pass the exams) requires a lot of indepen-
dent work by you. We will assume that you know how to learn and that there
are things that we do not have to tell you because you can work them out or look
them up for yourself. The only way to learn these techniques is by using them.

     Read these notes.

     Get familiar with economic and …nancial data by reading newspapers and
     magasines such as the FT, The Economist, Sunday Business sections and
     the like. The BBC Radio 4 series More or Less covers statistical aspects of
     issues in the news.

     In looking at articles in the press note how they present Tables and Graphs;
     what data they use; how they combine the data with the analysis; how they
     structure the article. You will need all these skills to do your project, so
     learn them by careful reading.


                                       5
     Ensure that you can use a spreadsheet, such as Excel.

     Try to attend all lectures and classes, if you have to miss them make sure
     that you know what they covered and get copies of notes from other students.

     Do the exercises for the classes in the Spring term in advance. Continuously
     review the material in lectures, classes and these notes, working in groups
     if you can.

     Identify gaps in your knowledge and take action to …ll them, by asking
     questions of lecturers or class teachers and by searching in text books. Email
     questions to us or email to …x appointments to see us.

     Do the applied exercise (section 8 of the notes) during the …rst term. We
     will assume that you have done it and base exam questions on it.

     Start work on your project early in the second term, advice on this is in
     section 4.

1.5. Reading
There are a large number of good text books on introductory statistics, but none
that exactly match the structure of this course. This is because we cover in one
year material that is usually spread over three years of an undergraduate degree:
economic and …nancial data in the …rst year, statistics in the second year, and
econometrics in the third year. Use the index in the text book to …nd the topics
covered in this course. There is an index to these notes.
    These notes cross-reference introductory statistics to Barrow (2009) and the
econometrics to Verbeek (2008), one of the books used on the MSc in Economics
econometrics course. There are a large number of other more basic books, such
as Gujarati and Porter (2009) and Stock and Watson (2009).
    As background, a classic, which is still relevant, is How to lie with statistics
Hu¤ (1954). The history of probability can be found in Bernstein (1996). Other
general books on probablility are Gigerenzer (2002), and Taleb (2004, 2007). A
classic on presenting graphs is Tufte (1983).
    Where economic or …nancial topics appear in these notes, they are explained.
But it is useful to also do some general reading. On economics there are a range
of paperbacks aimed at the general reader such as Kay (2004) and Smith (2003).



                                         6
    Similarly, there are lots of paperbacks on …nance aimed at the general reader.
Mandelbrot and Hudson, (2005) is excellent. Mandelbrot a mathematician who
invented fractals has done fundamental work on …nance since the 1960s. Although
he is highly critical of a lot of modern …nance theory, he gives an excellent ex-
position of it. Das (2006) provides an excellent non-technical introduction to
derivatives, as well as a lot of funny and often obscene descriptions of what life
is actually like in …nancial markets. MacKenzie (2006) provides a sociological
analysis of the development of …nance theory and how the models shaped mar-
kets. There are lots of books about the role of banking and …nance in the crisis
that started in 2007.
    References
    Barrow, Michael, (2009) Statistics for Economics Accounting and Business
Studies, 5th edition, FT-Prentice Hall.
    Bernstein, Peter L. (1996) Against the Gods, the Remarkable Story of Risk,
Wiley.
    Das, Satyajit (2006) Traders Guns and Money, Pearson
    Gigerenzer, Gerd (2002) Reckoning with Risk, Penguin.
    Gujarati D.N. and D.C. Porter, (2009) Basic Econometrics, 5th edition. Mc-
Graw Hill.
    Hu¤, Darrell (1954) How to lie with statistics, Penguin.
    Kay, John (2004) The Truth about Markets, Penguin
    Mandelbrot, Benoit and Richard Hudson, (2005) The (Mis) Behaviour of Mar-
kets Pro…le Books.
    MacKenzie, Donald (2006) An engine, not a camera: how …nancial models
shape markets, MIT Press.
    Smith, David (2003) Free Lunch, Pro…le Books
    Stock, J.H. and M.W. Watson (2007) Introduction to Econometrics, 2nd edi-
tion, Pearson-Addison Wesley.
    Taleb, Nassim Nicholas (2004) Fooled by Randomness: the hidden role of
chance in life and in the markets, 2nd edition, Thomson
    Taleb, Nassim Nicholas (2007) The Black Swan: The impact of the highly
improbable, Penguin.
    Tufte, Edward R (1983) The Visual Display of Quantitative Information,
Graphics Press
    Verbeek, Marno (2008) A guide to modern econometrics, 3rd edition, Wiley.




                                        7
2. Class exercises Spring term (Many are past exam ques-
   tions).
2.1. Week 2 Descriptive Statistics and Index Numbers
(1) In a speech, Why Banks failed the stress test, February 2009, Andrew Haldane
of the Bank of England provides the following summary statistics for the "golden
era" 1998-2007 and for a long period. Growth is annual percent GDP growth,
in‡ation is annual percent change in the RPI and for both the long period is
1857-2007. FTSE is the monthly percent change in the all share index and the
long period is 1693-2007.
                    Growth             In‡ation            FTSE
                    98-07       long   98-07        long   98-07   long
    Mean            2.9         2.0    2.8          3.1    0.2     0.2
    SD              0.6         2.7    0.9          5.9    4.1     4.1
    Skew            0.2         -0.8   0.0          1.2    -0.8    2.6
    Excess Kurtosis -0.8        2.2    -0.3         3.0    3.8     62.3

    (a) Explain how the mean; standard deviation, SD; coe¢ cient of skewness and
coe¢ cient of kurtosis are calculated.
    (b) What values for the coe¢ cients of skewness and kurtosis would you ex-
pect from a normal distribution. Which of the series shows the least evidence of
normality.
    (c) Haldane says "these distributions suggest that the Golden Era" distribu-
tions have a much smaller variance and slimmer tails" and "many risk management
models developed within the private sector during the golden decade were, in ef-
fect, pre-programmed to induce disaster miopia.". Explain what he means using
these statistics.


2.2. Week 3 Probability
(1) Show that the variance equals the mean of the squares minus the square of
the mean:
                          X
                          N                 XN
                        1           2     1
                    N       (xi x) = N          x2i (x)2
                          i=1                 i=1
            P
where x =       xi =N:

                                       8
      (2) Suppose you toss a fair coin three times in a row. What is the probability
of:
    (a) three heads in a row;
    (b) a tail followed by two heads.
    (c) at least one tail in the three throws.
    Hint write out the 8 (23 ) possible outcomes and count how many are involved
in each case.
   (3) Students take two exams A and B. 60% pass A, 80% pass B, 50% pass
both.
   (a) Fill in the remaining …ve elements of the joint and marginal distributions
below, where PA indicates pass A, FB fail B, etc.
   (b) What is the probability of a student passing B given that they passed A?
   (c) Are the two events passing A and passing B (i) mutually exclusive (ii)
independent?
          PA FA B
    PB 50            80
    FB
    A     60         100


2.3. Week 4 Probability Continued
(1) Consider the following game. A fair coin is tossed until it comes up heads and
you get paid £ (2n ) if it comes up heads on the n-th throw. If it comes up heads
the …rst time you get £ 2 and the game stops. If it comes up heads, for the …rst
time on the second throw you get £ 4=(2)2 and the game stops; and so on. What
is the expected value of this game? How much would you personally pay to play
it?
    (2) De…ne P (A) as the probability of event A happening; P (B) the probability
of event B happening; P (A \ B) the probability of both A and B happening;
P (A[B) the probability of either A or B happening; and P (A j B) the probability
of A happening conditional on B already having happened.
    (a) What is P (A \ B) if A and B are mutually exclusive.
    (b) What is P (A \ B) if A and B are independent?
    (c) What is P (A [ B)?
    (d) Show that
                                        P (B j A)P (A)
                           P (A j B) =                 :
                                             P (B)

                                          9
    (3) You are in a US quiz show. The host shows you three closed boxes in one
of which there is a prize. The host knows which box the prize is in, you do not.
You choose a box. The host then opens another box, not the one you chose, and
shows that it is empty. He can always do this. You can either stick with the box
you originally chose or change to the other unopened box. What should you do:
stick or change? What is the probability that the prize is in the other unopened
box?
    (4) (Optional). Calculate the probability that two people in a group of size
N will have the same birthday. What size group do you need for there to be a
50% chance that two people will have the same birthday? Ignore leap years.
    Use a spreadsheet for this and work it out in terms of the probability of not
having the same birthday. In the …rst row we are going to put values for N
(the number of people in the group), in the second row we are going to put the
probability that no two people in a group of that size have the same birthday.
    In A1 put 1, in B1 put =A1+1, copy this to the right to Z1.
    In A2 put 1. Now in B2 we need to calculate the probability that two people
will NOT share the same birthday. There are 364 possible days, i.e. any day but
the …rst person’s birthday, so the probability is 364/365. So put in B2 =A2*(365-
A1)/365. Copy this right. Go to C2, the formula will give you 1 (364=365)
(363=365): The third person, has to have birthdays that are di¤erent from the
…rst and the second. Follow along until the probability of no two people having
the same birthday falls below a half.


2.4. Week 5 Index numbers etc.
(1) UK GDP in current market prices in 1995 was £ 712,548m, while in 1997 it
was £ 801,972m. GDP at constant 1995 market prices in 1997 was £ 756,144m.
    (a) Construct index numbers, 1995=100 for: current price GDP; constant price
GDP; and the GDP de‡ator in 1997.
    (b) From these numbers calculate the average annual rate of in‡ation between
1995 and 1997.
    (c) From these numbers calculate the average annual rate of growth between
1995 and 1997.
    (d) If the interest rate on two year bonds in 1995 was 10% per annum what
would the real per annum interest rate over this period be.
    (e) Explain the di¤erence between Gross Domestic Product and Gross National
Product.

                                       10
   (f) Explain what Gross Domestic Product measures. What limitations does it
have as a measure of the economic wellbeing of a nation.
    (2) The Department buys bottles of red wine, white wine and orange juice for
its parties. The table below gives prices per bottle and number of bottles for three
years. Construct:
    (a) an expenditure index using 1995=100;
    (b) a party price index (i) using 1995 as a base (Laspeyres), (ii) using 1997 as
a base (Paasche);
    (c) a quantity index using 1995 as a base.
              1995        1996       1997
                p     q    p      q    p     q
       Red      3    20    4     15    5    10 :
      White     4    20    4     25    4    30
     Orange     1    10    2     10    3    10


2.5. Week 6, Reading week
2.6. Week 7 Properties of estimators and distributions.
(1) Suppose you have a sample of data, Yi ; i = 1; 2; ::; N; where Y  IN ( ; 2 ):
    (a) Explain what Y    IN ( ; 2 ) means.
    (b) How would you obtain unbiased estimates of           and 2 ? Explain what
unbiased means.
    (c) How would you estimate the standard error of your estimate of ?
    (d) Suppose that the distribution of your sample was not normal but highly
skewed. Explain what this means and discuss what other measures of central
tendency that you might use.
   (2) Marks on an exam are normally distributed with expected value 50 and
standard deviation 10.
   (a) What proportion of the students get
   (i) <30;
   (ii) between 30 and 50;
   (iii) over 50.
   (b) What mark does a student need to get into the top 15%.
   (c) In a class of 16, what is the probability that the average mark is greater
than 53?


                                        11
2.7. Week 8 Hypothesis testing and Regression
(1) For a sample of data Y1 ; Y2 ; :::; YN on a random variable Y IN ( ; 2 ):
    (a)You want to test the hypothesis that equals a speci…ed value o : How
would you test this hypothesis?
    (b) Explain Type I and Type II errors. How did you deal with these two types
of error in your answer to (a)?
    (c) Suppose that you wanted to calculate the probability of observing a value
of Y greater than a speci…ed value Y0 . How would you do this?
   (2) Consider the following bivariate regression model:
                                Yi =   + Xi + ui
estimated on a sample of data i = 1; 2; :::; N , where Yi is an observed dependent
variable, Xi is an observed exogenous regressor, ui is an unobserved disturbance,
and and are unknown parameters.
    (a) Derive the least squares estimators for and :
    (b) Under what assumptions about ui will these least squares estimators be
Best Linear Unbiased.
    (c) Explain what Best Linear Unbiased means.
    (d) Explain what exogenous means.



2.8. Week 9, Regression
It is believed that an energy demand equation takes the form:
                             qt =   + y t + p t + "t ;
where qt is the logarithm of per capita energy demand in year t; pt the logarithm
of real energy prices; yt the logarithm of per-capita real GDP; "t is a well behaved
disturbance term. The following estimates (with standard errors in parentheses)
were obtained using data for the period t =1974-1990.
                                       R2 SER
        India        1:006      0:068 0:38 0:027
                    (0:102) (0:080)
     Indonesia       1:564      0:488 0:52 0:034
                    (0:234) (0:195)
       Korea         1:074      0:136 0:54 0:031
                    (0:125) (0:189)

                                        12
    SER is the standard error of the regression.
    (a) How would you interpret and ?
    (b) Explain what R2 and SER are and what they tell you. How would you
interpret the fact that while Korea has the largest R2 it does not have the lowest
SER?
    (c) For Indonesia, test (i) the hypothesis = 1 and (ii) the hypothesis = 0:
    (d) Interpret the stochastic component of the model. How would you estimate
it?
    (e) Suppose that you believed that there was a trend increase in energy e¢ -
ciency in these countries. How would you adjust the model to allow for this.


2.9. Week 10, Regression
Consider the linear regression model

                                  y =X +u

where y is a T 1 vector of observations on a dependent variable, X a full rank T k
matrix of observations on a set exogenous variables, a k 1 vector of unknown
coe¢ cients, and u an unobserved disturbance with E(u) = 0 and E(uu0 ) = 2 I:
   (a) Derive the least squares estimator b:
   (b) Derive the variance covariance matrix of b.
   (c) Show that b is unbiased.


2.10. Week 11, Regression.
Using US data on on company earnings, Et ; and the dividends paid out to share-
holders, Dt ; t =1872-1986 the following results were obtained (standard errors in
parentheses):
    Dt = 0:011+ 0:088Et + 0:863Dt 1 +b        u1t
            (0:009) (0:008)       (0:019)
   R2 = 0:998; SER = 0:074:
    ln Dt =    0:136+ 0:312 ln Et + 0:656 ln Dt 1 +b
                                                   u2t
             (0:015)     (0:025)       (0:029)
   R2 = 0:993; SER = 0:085:
   SER is the standard error of regression.

                                       13
    (a) Test whether the intercepts in each equation are signi…cantly di¤erent from
zero at the 5% level and interpret them. Do they have sensible values?
    (b) It is suggested that the linear equation is a better equation than the loga-
rithmic because it has a higher R2 : Do you agree with this?
    (c) Interpret the role of the lagged dependent variable and calculate the long-
run e¤ect of earnings on dividends in each case.
    (d) A test for second order serial correlation had a p value of 0.008 in the
linear model and 0.161 in the logarithmic model. Explain what second order
serial correlation is and why it is a problem. Is it a problem in either of these
models?

   Extra questions
    1. From observations taken over many years it is found that marks on a
particular exam are normally distributed with an expected value of 50 and a
variance of 100. For a standard normal distribution Pr(Z < z) =0.6915 for z=0.5;
0.8413 for z=1; 0.9332 for z=1.5; 0.9772 for z=2.
    (a) What is the probability of a student getting below 40 marks on this exam?
    (b) What is the probability of a student getting below 30 marks on this exam?
    (c) Suppose that in a class of 16 students a new teaching method was used and
the average mark in this class was 54. Is this statistically signi…cant evidence, at
the 5% level, that the new method is more e¤ective? Suppose that the average of
54 had been obtained in a class of 36 students, would this have been statistically
signi…cant evidence? Assume that the new teaching method did not change the
variance.
    (d) Show that the arithmetic mean is an unbiased estimator of the expected
value.
    (e) Give an example of the type of distribution where the arithmetic mean
would not be a good measure of the typical value of a random variable.

   2.   The following data is taken from Economic Trends Annual Supplement
1999.
           Y          C         RC         TBY
    1995   494,574    454,171   454,171    6.31
    1996   521,281    485,418   470,622    6.26
    1997   554,641    517,032   488,936    7.13
    1998   565,935    545,124   505,367    5.63


                                          14
    Y is gross households disposable income at current prices, C is households
…nal consumption expenditure at current prices, RC is consumption expenditure
at 1995 prices, TBY is the Treasury Bill Yield in percent.
    (a) Calculate a price index for consumption 1995 to 1998, 1995=100.
    (b) Calculate the rate of in‡ation for 1996, 1997 and 1998.
    (c) Calculate the ex post real interest rate for 1995, 1996 and 1997.
    (d) Calculate the savings rate for 1995 to 1997.
    (e) Does there seem to be any relationship between the savings rate and the
real interest rate? What relationship would you expect?

     3. Data are available for the quantity of a good consumed Qt ; real income
Yt ; the price of the good Pt ; and the average of all other prices Pt for years
t = 1; 2; :::; T: The demand function is assumed to take the form

                                  Qt = AYt Pt 1 P    2   eut

where ut is a random error term.
    (a) How would you estimate the parameters by least squares?
    (b) How would you interpret the parameters and what signs would you expect
for them?
    (c) How would you test the hypothesis 1 + 2 = 0?
    (d) How would you interpret this hypothesis?


2.11. Answers to selected exercises
2.11.1. Week 2, question 1.
Note
                                 x)2 = x2i + x2 + 2xxi
                                (xi
                                                   P 2
and that x is a constant, does not vary with i; so   x = N x2


                  X
                  N                       X                                   X
              1
          N             (xi   x)2 = N 1       x2i + N 1 N x2         N 1 2x       xi
                  i=1
                                          X
                                  = N 1       x2i + x2         2x2
                                          X
                                  = N 1       x2i   x2


                                           15
2.11.2. Week 3, question 1.
This is the St Petersburg paradox. The expected value is in…nite, but few would
pay an in…nite amount of money to play it. The usual explanation is in terms
of the diminishing marginal utility of money, which makes the expected utility of
the game less than in…nity..

2.11.3. Week 3, question 2.
Suppose you chose A to start with. Consider the two strategies, stick S; or change
C: If the prize is in A, the host can open either box B or C and show it is empty.
You win with S; sticking with box A and lose with C, changing to the box the
host left unopened: If the prize is in B, the host has to open box C. You lose with
S; win with C; because you have to change to box B; box C is open. If the prize
is in C, the host has to open box B. You lose with S; win with C because you
change to box C, box B is open: Changing is the optimal strategy since you win
2 times out of three and the probability that the prize is in the other box is 2/3.
    It can also be shown by Bayes theorem. Let WA be the event that the prize
is in box A, etc. Let HA be the event that the host opens box A, etc. Suppose
you choose box A. The probability that you win the prize if you switch is the
probability that the prize is in B and the host opened C plus the probability that
the prize is in C and the host opened B

                     P (WB \ HC ) + P (WC \ HB )
                   = P (WB )P (HC j WB ) + P (WC )P (HB j WC )
                     1       1       2
                   =     1+      1=
                     3       3       3
The second line folows from the de…nition of conditional probabilities. This for-
mula might seem complicated, but it appears in a very popular work of teenage
…ction: The curious incident of the dog in the night-time, by Mark Haddon, Ran-
dom House, 2003.

2.11.4. Week 7.
(a)  is the income elasticity of demand for energy,
                                              qP is the price elasticity.
                 P        P
   (b) R2 = 1        "2t = (qt q)2 ; SER =
                     b                              "2t =T k where k = 3 here.
                                                    b
R2 measures the …t relative to the variance of the dependent variable, the SER


                                        16
just measures the …t. The rankings would only necessarily be the same if all the
dependent variables had the same variance.
    (e) Include a time trend
                           qt =   + y t + p t + t + "t ;

2.11.5. Week 10
(a) Intercept of the linear equation has t ratio 0.011/0.009=1.22 not signi…cantly
di¤erent from zero. Intercept in log equation has t ratio -0.136/0.015=-9.06 sig-
ni…cantly di¤erent from zero. The intercepts measure di¤erent things in the two
equations. See (c) below.
    (b) No, the R2 cannot be compared because the dependent variables are dif-
ferent.
    (c) The lagged dependent variable captures the e¤ect that …rms smooth divi-
dends and only adjust them slowly in response to earnings changes. The long run
relations are
                                    0:011        0:088
                          D =               +           E
                                  1 0:863 1 0:863
                              = 0:080 + 0:642E

                                 0:136        0:312
                       ln D =           +           ln E
                               1 0:656 1 0:656
                             =  0:395 + 0:91 ln E
In the case of the linear model the long-run intercept should be zero, dividends
should be zero when earnings are zero, the answer in (a) indicates that the inter-
cept is not signi…cantly di¤erent from zero. In the logarithmic case it is a constant
of proportionality exp( 0:395) = 0:67 so the long-run is
                                  D = 0:67E 0:91 :
   (d) Second order serial correlation is a relation between the residuals of the
form
                           ut = 1 ut 1 + 2 ut 2 + et
It is a problem because it indicates the model is likely to be misspeci…ed. The
linear model p value indicates that there is serial correlation p<0.05, the logarith-
mic model p value indicates that there is probably not serial correlation, p>0.05,
at the 5% level.

                                         17
2.11.6. Answers to Extra questions

1.a (40-50)/10=-1, P(Z<-1)=P(Z>1)=1-P(Z<1)=1-0.8413=0.1587
    1.b (30-50)/10=-2, P(Z<-2)=1-P(Z<2)=1-0.9772=0.0228
                                p
    1.c Test statistic for N=16, N = 4
                                    54 50
                                          = 1:6
                                     10=4
This is not signi…cantly di¤erent from zero at the 5% level. For N=36
                                    54 50
                                          = 2:4
                                     10=6
This is signi…cantly di¤erent from zero at the 5% level.
   1d Suppose E(X) = then Xi = + ui with E(ui ) = 0
                         X
                         N                 X
                                           N                           X
                                                                       N
               X=N 1            Xi = N 1     ( + ui ) =         +N 1         ui
                          i=1              i=1                         i=1

so
                                                     X
                                                     N
                                                 1
                          E(X) =      + E(N                ui ) = :
                                                     i=1
   1e In any very skewed distribution, such as income, the average can be very
di¤erent from the typical, so the mode<median<mean.
    2.a The price index for consumption is Pt = 100 Ct =RCt ; In‡ation is It =
100 (Pt Pt 1 )=Pt 1 ; the ex post real interest rate is RIR = T BRt It+1 the
Savings Rate is SR = 100(1 C=Y ): Thus
     Y ear    Pt     It RIR SR
     1995 100            3:21 8:16
     1996 103:1 3:1 3:76 6:88
     1997 105:7 2:5 5:03 6:78
     1998 107:9 2:1
    The real interest rate is rising, while the savings rate is falling, the opposite of
what one might expect.
    3. (a) First take logarithms then estimate by LS.
    (b) The income elasticity of demand > 0 (for a normal good); the own price
elasticity 1 < 0 (not a Gi¤en good); the cross price elasticity with all other goods
  2 > 0 (it cannot be a complement with all other goods).


                                            18
   (c) Reparameterise the estimated equation as

           ln Qt = a +   ln Yt +   1 (ln Pt        ln Pt ) + ( 2 +   1 ) ln Pt   + ut

and conduct a t test on the hypothesis that the coe¢ cient of ln Pt is zero.
   (d) Only relative prices matter.



3. Assessment and specimen exam.
3.1. Assessment
Assessment is 70% on the exam, 30% on the empirical project submitted in mid
May.
    You should read the advice in section 4 on doing the project fairly early in the
course to get the general idea of what we are looking for and then refer back to it
regularly as you do your project.
    The exam will have six questions. Section A has questions 1-3; Section B
questions 4-6.
    You must do three questions: at least one from each section and one other.
    Section A will contain questions covering:
    Interpretation of statistics associated with regression, e.g. R2 ; standard error
of regression, diagnostic tests like the Durbin-Watson statistics and the e¤ects of
the failures of the various assumptions.
    Economic and …nancial data, this will involve calculations, e.g. of index num-
bers, growth rates, ratios, derived measures and some interpretation.
    Probability and distributions, e.g. being able to use the basic rules of proba-
bility; given the mean and variance for a normal distribution, calculate the prob-
ability of various events happening, etc.
    Section B will contain more technical regression questions, including deriva-
tions using matrix algebra.
    Some specimen questions with answers are given below.


3.2. Specimen Questions

SECTION A



                                              19
    1. US data 1971-1999 were used to estimate a relationship between the rate
of interest Rt and the rate of in‡ation t ;

                                 Rt =   +    t + ut :


The least squares estimates (with standard errors in parenthesese) were

                          Rt =     6:37 +0:33 t +b
                                                 ut
                                                    :
                                  (0:66) (0:10)

The standard error of regression, s = 2:75, the coe¢ cient of determination R2 =
0:29; and the Durbin Watson Statistic DW = 0:63:
    (a) Explain what u bt measures.
    (b) Explain what R2 ; Standard Error of the Regression and Durbin Watson
statistic measure and what they tell you about this regression.
    (c) Interpret the estimates of and : What do they tell you about the rela-
tionship between in‡ation and interest rates?
    (d) What assumptions are required for least squares to give good estimates.

    2. Suppose that you have a machine for …lling 1 kilogram bags of sugar. The
machine is set so that the weight of a bag should be a normally distributed random
variable with an expected value of 1005g and a standard deviation of 2g. For a
random variable Z with a standard normal, the cumulative probabilities are:
         z        0    0:33     0:5       1      1:5      2       2:5
     P (Z < z) 0:5 0:6293 0:6915 0:8413 0:9332 0:9772 0:9938
    (a) Expain what P (Z < z) tells you.
    (b) What is the probability that a bag of sugar will weight (i) less than 1000g
(ii) between 1004g and 1006g?
    (c) You take a sample of 16 bags of sugar, which have a mean of 1004g: What
is (i) the standard error of the mean and (ii) the probability of getting a sample
mean of 1004g or less?
    (d) On the basis of this estimate of the mean would you conclude that the
machine was still working correctly?
    (e) How would you investigate whether the variance of the machine might have
increased?




                                        20
   3. The following data were taken from Economic Trends, February 2004.

                    N DY     RDY     RP I        CP I HP T BY
              2000 654; 649 654; 649 170:3       105:6 87:7 5:69
              2001 700; 538 685; 263 173:3       106:9 95:1 3:87
              2002 721; 044 696; 224 176:2       108:3 111:2 3:92

N DY is nominal household disposable income in current prices; RDY is real
household disposable income in constant 2000 prices; RP I is the retail price index,
1987=100; CP I is the consumer price index, 1996=100; HP is a house-price index;
T BY is the Treasury Bill Yield a short term interest rate expressed as percent
per annum.
   (a) Calculate the price index (implicit de‡ator) for disposable income.
   (b) Calculate the rate of in‡ation for 2001-2 for disposable income, RP I; CP I;
and HP: Comment on the relation between them.
   (c) Suppose that you owned a house, whose price increased at the average rate,
and had a 100% mortgage paying the Treasury Bill Rate on the mortgage, what
would be the real return on owning the house over 2001-2.
   (d) The RPI includes housing prices in its measure of in‡ation, the CPI does
not. Should house prices be included in in‡ation measures?
   (e) What other di¤erences are there between the RPI and CPI?
    SECTION B
    4. Using information in question 1, and assuming that the 95% critical value
for a t test is 2 :
    (a) Test the hypothesis = 1 at the 5% level and explain why this might be
an interesting hypothesis.
    (b) Explain what Type I and Type II errors are. What is the probability of
Type I error in your test in part (a).
    (c) Give a 95% con…dence interval for b. Explain what a con…dence interval
is.
    (d) What indicates that the estimated equation is clearly misspeci…ed? How
would you remedy this problem?
    (e) An alternative model is suggested:

                     Rt =   0+    1 Rt 1 +   0 t+   1 t 1 + ut :

How would you test whether the lagged values of Rt 1 and           t 1 are signi…cant (i)
individually and (ii) jointly?

                                        21
    (f) Using this model in section (e) how would you estimate the long-run e¤ect
of in‡ation on interest rates and test that this long-run e¤ect is equal to one?
      5. Consider the model:

                                yt =    1+     2 x2t + ut

t = 1; 2; :::; T: where yt are observations on a dependent variable and x2t observa-
tions on a non-stochastic independent variable, ut is an unobserved disturbance,
with E(ut ) = 0; 1 and 2 are unknown parameters.
    (a) Set out the system of T equations in matrix form y = X + u where y and
u are T 1 vectors, X is a T 2 matrix, and is a 2 1 vector.       P
    (b) How would you express the sum of squared residuals Tt=1 u2t in matrix
form. Show that this is a function of :
    (c) Derive the least squares estimator of ; say b show that it is unbiased, i.e.
E(b) = and derive its variance covariance matrix.
    (d) De…ne u   b = y X b; show that X 0 u  b = 0 and that u
                                                             b = M y = M u where
                   0    1
M = (I X(X X) X):
    6. You have data on average earnings by age and education in the US in 1991
for 30 groups of men, i = 1; 2; :::; N: De…ne wi the logarithm of earnings, Ai age
in years (divided by 100), Ei years (divided by 100) of education. It is suggested
that an appropriate model is:
                                                    2
                    wi =   +   1 Ai +   2 Ei +   1 Ai +     2 Ai Ei + ui :

The estimated coe¢ cients, with their standard errors in parentheses are:
    bi = 7:46 +6:6Ai +9:0Ei
    w                                   6:7A2i +4:1Ai Ei
           (0:19) (0:62) (1:01) (0:56)           (1:95)

      R2 = 0:99; SER = 0:05:
      (a) What is the stochastic component in this model? How would you interpret
it?
   (b) Explain the role of the A2i term?
   (c) Comment on these results. Are the signs what you would expect?
   (d) Given these estimates of the parameters at what age do men with zero
and twenty years of education earn the maximum amount? Are these sensible
numbers?



                                          22
3.3.   Answers
Question 1
    (a) In Rt = b + b t + u    bt ; u
                                    bt is the estimated residual, the di¤erence between
the actual and predicted
                      P 2 P   value of Rt :
           2
    (b) R = 1           bt = (Rt R)2 gives the proportion of the variation in the
                        u
dependentpP  variable explained by the regression, 29% in this case so quite low.
    s=         b2t =T 2 is a measure of the average error, 2.75 percentage points in
               u
this case, quite
             P a 2large P error    in predicting the interest rate;
                            2
    DW =            bt = u
                    u     bt is a test for serial correlation, it should be close to two,
so at 0.63 this regression su¤ers from severe positive serial correlation.
    (c) is the value the interest rate would take if in‡ation were zero, interest
rates would be 6.37%; is the e¤ect of in‡ation on interest rates: a 1 percentage
point increase in in‡ation raises interest rates by 0.33 percentage points.
    (d) In the model;
    the regressors should be exogenous, uncorrelated with the errors, E( t ut ) = 0,
    the regressors should not be linearly dependent, the variance of t not equal
zero, in the case of a single regressor.
    The disturbances should have
    expected value (mean) zero, E(ut ) = 0;
    be serially uncorrelated, E(ut ut s ) = 0; s 6= 0
    with constant variance, E (u2t ) = 2 .
    Question 2
    (a) The probability that a random variable Z takes a value less than a particular
value z.
    (b)
    (i) z=(1000-1005)/2=2.5. P(z<2.5)=1-P(z<2.5)=1-0.9938=0.0062=, 0.6%, roughly
one chance in 200
    (ii) z=(1004-1005)/2=0.5. P(-0.5<Z<0.5)=2x(0.6915-0.5)=0.383=38%.
                                                  p
    (c) (i) standard error of the mean is 2= 16 = 2=4 = 0:5;
    (ii) P (Z < 1004) : z=(1004-1005)/0.5=-2. P(z<-2)=1-P(z<2)=1-0.9772=0.0228,
2.28%.
    (d) From c(ii) the probability of getting this value or less is 2.28%, which is a
small number, so it is probably not working correctly. This is not needed for the
answer but if you wanted to test at the 5% level the null hypothesis that it was
working properly ( = 1005), you would need to be careful whether the alternative
was 6= 1005; in which case there would be 2.5% in each tail; or < 1005; in


                                        23
which case there would be 5% in the lower tail. Since the probability is less than
2.5%, you would reject either on a two tailed or one tail test.            P
    (e) Estimate the sample variance from your sample of 16 s2 = (16 1) 1 (xi
x)2 ; to check whether the variance seemed to have increased from 4. This is not
needed for the answer but you would use a variance ratio F test.

    Question 3
    (a) De‡ator is the ratio N DY =RDY
             N DY      RDY      Ratio 100
     2000 654; 649 654; 649          100
     2001 700; 538 685; 263         102:2
     2002 721; 044 696; 224         103:6
    (b) In‡ation, 2001-2:
    DY=1.27%, RPI=1.67%; CPI=1.31; HP=16.92.
    Massive house price boom, RPI slightly higher than CPI or DY.
    (c). Real return is capital gain on house prices, less interest cost, less rate of
in‡ation. Using CPI (others are acceptable)= 16.92-3.92-1.31=11.69%.
    (d) Yes even if you own your own home and have paid o¤ your mortgage there
is an implicit rental cost of home ownership and this will increase when house
prices increase.
    (e) CPI uses a geometric mean, RPI an arithmetic mean which means that
CPI tends to be about 0.5% lower.
    Question 4
    (a) t( = 1) = (0:33 1)=0:10 = 6:7 reject the hypothesis that equals one.
If the real interest rate (It = Rt      t ) is constant plus a random error (Fisher
Hypothesis) It = I + ut then Rt = I + t + ut then in the regression = I and
   = 1:
    (b) Type I error is rejecting the null when it is true, Type II error is accepting
the null when it is false. The probability of type I error in (a) is 5%.
    (c) The 95% con…dence interval is 0:33 2 0:10 i.e. the range 0:13 to 0:53:
We are 95% con…dent that this range covers the true value of :
    (d) The very low DW indicates massive serial correlation, respecify by includ-
ing lags as in the model in (e).
    (e) Individually: use the t statistics on the estimated coe¢ cients 1 and 1 :
Jointly: …rst take the restricted residual sum of squares from the equation in
question 1, RRSS and the unrestricted residual sum of squares from the equation



                                         24
in question 4(e), U RSS and calculate the F statistic
                                                (RRSS U RSS)=2
                          F (2; T     4) =                     :
                                                  U RSS=(T 4)
If this was greater than the relevant critical value reject the joint hypothesis that
the coe¢ cients of both the lagged values are zero.
    (f)The long run e¤ect is measured as = ( 0 + 1 )=(1             1 ): If = 1; then
(1     1 ) = ( 0 + 1 ) or 0 + 1 + 1     1 = 0: We can reparameterise the equation
as
    Rt =      0+( 1       1)Rt 1 +        0      t+( 0+            1 ) t 1 + ut
    Rt =      0+( 1       1)(Rt 1             t 1) +   0        t+( 0+        1+    1   1) t 1 + ut :
So if we estimate this and test that the coe¢ cient on t 1 equals zero, this is a
test of a long-run unit e¤ect. You could also do an F test using the restricted
model where t 1 is excluded.
   Question 5.
   (a).               2    3 2         3                               2     3
                        y1       1 x21                                    u1
                      4 :: 5 = 4 :: :: 5                       1
                                                                      + 4 :: 5
                                                               2
                        yT       1 x2T                                    uT
                                                           0
   (b). u0 u = (y    X )0 (y        X ) = y0y +                X 0X        2 0 X 0 y, which is clearly a
function of :
   (c).
                             @u0 u
                                   = 2X 0 X     2X 0 y = 0
                              @
                              0
                            XX     = X 0y
                                 b = (X 0 X) 1 X 0 y


                                    b = (X 0 X) 1 X 0 (X + u)
                                      =   + (X 0 X) 1 X 0 u
                           E b        =         + (X 0 X) 1 X 0 E(u)

                           E b        =

                                                  25
since E(u) = 0 and X is non-stochastic:

                   V (b) =    E(b       )(b     )0
                         =    E((X 0 X) 1 X 0 u)((X 0 X) 1 X 0 u)0
                         =    E((X 0 X) 1 X 0 uu0 X(X 0 X) 1 )
                         =    (X 0 X) 1 X 0 E(uu0 )X(X 0 X) 1
                               2
                         =       (X 0 X) 1 X 0 X(X 0 X) 1
                               2
                         =       (X 0 X) 1

   (d)

                        X 0u
                           b =    X 0 (y X b)
                             =    X 0 (y X(X 0 X) 1 X 0 y)
                             =    X 0 y X 0 X(X 0 X) 1 X 0 y
                             =    X 0y X 0y = 0


                  b = (y X b) = (y X(X 0 X) 1 X 0 y) = M y
                  u
                M y = M (X + u) = M X + M u = M u


                     MX      = (I     X(X 0 X) 1 X 0 )X
                             = X       X(X 0 X) 1 X 0 X = 0


    Question 6.
    (a) The stochastic component is ui it is the part of log earnings not explained
by the regressors, will re‡ect unmeasured ability and other factors in‡uencing
eartnings.
    (b) We would expect earnings to rise and then fall with age, the quadratic
terms captures this feature.
    (c) Yes. For earnings to rise and fall with age, we need 1 > 0 and 1 < 0:
You earn more with better education so 2 > 0: The positive coe¢ cient on the
interaction term 2 makes peak earnings later for more highly educated men,
which is likely.



                                        26
   (d) To get the maximum

                         @w
                            = 1 + 2 1A + 2E = 0
                         @A
                          A =   (2 1 ) 1 ( 1 + 2 E)
                            = 0:0746(6:6 + 4:1E)
                            = 0:49 + 0:31E

note Ai and Ei are divided by 100.
   For Ei = 0 max w =100x0.49=49 years, .
   For Ei = 0:2 w=100x(0.49+0.31x0.2)=55 years.
   Although the idea of somebody with zero years of education is unlikely, these
are plausible values for peak earning age.




                                      27
4. Doing Your Project
To do your project you need to choose a topic and collect some data; do some
statistical analysis (e.g. graphs, summary statistics); draw some conclusions and
write up your results clearly in a standard academic style in less than 3,000 words.
It often helps if the topic is posed as a question, which can be answered in the
project, as is done in sub-section 7.5. The project is designed to test your ability
to collect and interpret data, not a test of the material covered in this course, so
you do not need to do regressions or repeat text-book material in the project. It
does not have to be on a economic or …nancial topic and will count for 30% of the
total marks for the module.

4.1. BASIC RULES
Email a project project proposal to Ron Smith by March 4. Your proposal
should be less than 100 words. It should have (1) your name; (2) your course (3)
an indicative title (4) a brief description of the data you are going to use and where
you will get it and (5) a short indication of the questions you might investigate.
You must check that the data are actually available, you cannot do your project
without data. You can change your topic subsequently if you run into di¢ culties.
    Submit your project to the Department O¢ ce by the deadline of May 13.
Refer to the College rules on late submission of work.
    You must submit a hard-copy version of the project, which must be typed,
securely stapled and have page numbers. Do not put it in a binder or folder.
    You must attach an electronic copy of the data (e.g. on disk, CD or USB
stick) in an envelope labelled with your name and course, …rmly attached to your
report (eg by stapling to the last page). The data must be in a form that allows
us to replicate what you have done, e.g. in a …le from a standard program.
    Maximum length: 3,000 words (excluding graphs, tables, appendices, title page
and abstract, but including everything else).
    Do not exceed this upper limit: part of the exercise is to write up your results
brie‡y.
    We will not return your project, which we keep on …le for writing references,
etc. Make a copy for your own use. We do not show projects to anyone but the
examiners. This is to allow students to use con…dential data from work.
    Keep safe backup copies of your data and drafts of your text as you
work (college computers are a safe place). We are very unsympathetic
if you lose work because it was not backed up properly.

                                         28
4.2. TITLE PAGE MUST CONTAIN
     Programme and year (eg GDE ASE Project 2012)

     Title of project

     Your name

     An abstract: maximum length 100 words

     The number of words in the project

     The programs you used

4.3. YOU MUST
     Graph the data (line graphs, histograms or scatter diagrams)

     Number all graphs and tables, give them titles and specify units and source.

     Have a bibliography

     Detail the sources of the data and provide the data

     Be sure it is your own work. You can discuss it with friends or colleagues
     and it is a good idea for students to read and comment on each others work
     but it must be your work which you submit. Plagiarism is a serious o¤ence
     (see the section in the course handbook).

4.4. HOW WE WILL ASSESS YOUR WORK
The criteria are listed below. We do not assign …xed weights to them, you can
trade them o¤, but be aware of diminishing returns.
    Writing. You will not get any credit unless we can understand what you have
done. We look for clear organisation of the piece as a whole; clear writing of in-
dividual paragraphs and sentences; logical arguments and careful use of evidence.
Check your spelling and grammar. We have set a short word limit so make every
word count.
    Scholarly conventions. Are sources of ideas and quotations properly ac-
knowledged? Is there a list of references? Are data sources properly documented?
Is the project written in an academic (as opposed to, say, journalistic) style? If


                                       29
you do it on a topic related to your work, remember the style may have to di¤er
from that appropriate at work. Copy the styles of articles in economics journals.
    Originality/interest. Most topics can be made interesting if presented su¢ -
ciently well, but it is harder to …nd something interesting to say about a standard
topic, than about a slightly more unusual topic. We can get bored reading over
100 projects, try to make yours memorable.
    Analysis. Does your work indicate a good understanding of the relevant
context? Have you used appropriate concepts. This would include economic or
…nance theory, if relevant. Can you develop a logical argument and use evidence
e¤ectively to support your argument? Did you answer the question you posed?
Have you considered the direction of causality?
    Data collection/limitations. Have you collected appropriate data (given
time limitations)? Have you taken reasonable care to check the raw data and
derived variables? Do you understand what your data actually measure? Are you
aware of the limitations of your data? You will receive some credit for any unusual
amount of work you have put into collecting data, indicate if the data collection
required a lot of time. Unless you have experience in designing surveys, do not
conduct a survey to collect data.
    Data summary and presentation. Have you computed appropriate de-
rived variables? Have you noticed apparently anomalous observations? Do you
demonstrate the ability to summarize and present data in a clear and e¤ective
way?
    Statistical Methods. Have you used appropriate statistical methods? Use
the simplest technique that will answer your question. Have you quali…ed any
conclusions that you have drawn? e.g. pointed out that the sample size is small
or that you have been unable to control for certain factors, etc. Beware of using
advanced statistical techniques that you do not understand; you will be penalised
for any mistakes you make in their use.
    Interpretation. How well have you interpreted your data? Have you borne
its limitations in mind when interpreting it? Have you answered the question you
posed?

4.5. CHOOSING A TOPIC
You can do your project on anything that involves interpreting data, it does not
have to be narrowly economic or …nancial.1 The topic may come from your work,
  1
      Projects predicting Olympic medal numbers were popular in 2011-12.


                                             30
issues that have come up in the programme, items in the news, or anything that
interests you. Often choice of topic is prompted by the data available.

4.6. DATA
Barrow Ch. 9 discusses data. You must give us a copy of the data you have
used. If you need to use con…dential work-related data, we can provide a letter
to your employer explaining that it will be kept con…dential. You should choose
a topic on which you can …nd data without too much e¤ort. If you cannot make
substantial progress in …nding data in 2-3 hours systematic search, either in the
library or over the internet, you should probably change your topic. There is a
vast amount of statistics available on the Web from governments, central banks,
international organisations (IMF, OECD or World Bank). Also check Birkbeck
eLibrary, statistical databases; datastream is available in the library. The main
UK source is the O¢ ce of National Statistics, US Data is available on the Federal
Reserve Economic Database and the Bureau of Economic Analysis. Try Google
or other search engines: just type the topic you are interested in and then data,
e.g. “Road Tra¢ c Deaths Data”got various sites with international data on road
tra¢ c deaths.
    Check your data, no matter where it comes from. Errors, such as a decimal
point in the wrong place, can cause havoc if you miss them. Check for units,
discontinuities and changes in de…nitions of series, such as from the uni…cation
of Germany. Check derived variables as well as the raw data. Calculating the
minimum, maximum and mean can help to spot errors. Carry out checks again if
you move data from one type of …le to another.

4.7. WHAT YOUR REPORT SHOULD LOOK LIKE
Your project report should tell a story, with a beginning, a middle and an end. It
is a story about your investigation not part of your autobiography. The following
structure is a suggestion, adapt it to suit your question. Look at the structure
used in section 7.5, which describes UK growth and in‡ation.

4.7.1. ABSTRACT
Here you must summarize your project in 100 words or less. Many journals print
abstracts at the start of each paper, copy their form



                                       31
4.7.2. INTRODUCTION.
Explain what you are going to investigate, the question you are going to answer,
and why it is interesting. Say brie‡y what sort of data you will be using (eg.
quarterly UK time-series in section 7.5). Finish this section with a paragraph
which explains the organization of the rest of your project.

4.7.3. BACKGROUND
Provide context for the analysis to follow, discuss any relevant literature, theory
or other background, explain specialist terms. Do not give standard textbook
material; you have to tell us about what we do not know, not what we do know.
On some topics there is a large literature on others there will be very little. The
library and a search engine, like Google Scholar, can help you to …nd literature.
    In many cases, this section will describe features of the market or industry
you are analyzing. In particular, if you are writing about the industry in which
you work, you should make sure you explain features of the industry, or technical
terms used in it, which may be very well known to everyone in it, but not to
outsiders.

4.7.4. DATA
Here you should aim to provide the reader with enough information to follow the
rest of the report, without holding up the story line. Details can be provided in
an appendix. You should discuss any peculiarities of the data, or measurement
di¢ culties. You may need to discuss changes in the de…nition of a variable over
time.

4.7.5. ANALYSIS
The background should guide you in suggesting features of the data to look at,
hypotheses to test, questions to ask. You must have tables and graphs describing
the broad features of the data. In the case of time series data these features might
include trends, cycles, seasonal patterns and shifts in the mean or variance of the
series. In the case of cross-section data they might include tables of means and
standard deviations, histograms or cross-tabulations. In interpreting the data, be
careful not to draw conclusions beyond those that are warranted by it. Often
the conclusions you can draw will be more tentative than you would like; data


                                        32
limitations alone may ensure this. Do not allow your emotional or ethical responses
to cloud your interpretation of what you …nd in the data.
    If you run regressions, report: the names of variables (including the depen-
dent variable); number of observations and de…nition of the sample; coe¢ cents
and either t-ratios, standard errors or p values; R-squared (or R-bar-squared);
standard error of the regression; and any other appropriate test statistics such as
Durbin-Watson for time-series.

4.7.6. SUMMARY AND CONCLUSIONS.
What are the main …ndings of your work, the answers to the questions you posed in
the introduction? How must your …ndings be quali…ed because of the limitations
of the data or the methods of analysis you have employed? Do they have policy
implications (public or private)? Do you have suggestions for further work?

4.7.7. BIBLIOGRAPHY
You must give a bibliographic citation for any work referred to in the text, follow
the Harvard system, used in section 1.5.

4.7.8. APPENDICES
You must have a data appendix, giving precise de…nitions of variables, and details
of the sources. The guiding principle is that you should provide enough detail
to enable the reader to reproduce your data. Give the data in electronic form
attached to the project.

4.8. Good luck
You can learn a lot by doing your project. The skills you can develop in data
analysis, interpretation and presentation are valuable in the labour market; and
having a project to show a potential employer can be useful in getting a job.
Doing your project can also be a very enjoyable experience. The more care you
take with it, the more you will learn, and the more fun you will have.




                                        33
5. PART II: NOTES
The word Statistics has at least three meanings. Firstly, it is the data themselves,
e.g. the numbers that the O¢ ce of National Statistics collects. Secondly, it has a
technical meaning as measures calculated from the data, e.g. an average. Thirdly,
it is the academic subject which studies how we make inferences from the data.
     Descriptive statistics provide informative summaries (e.g. averages) or presen-
tations (e.g. graphs) of the data. We will consider this type of statistics …rst.
Whether a particular summary of the data is useful or not depends on what you
want it for. You will have to judge the quality of the summary in terms of the
purpose for it is used, di¤erent summaries are useful for di¤erent purposes.
     Statistical inference starts from an explicit probability model of how the data
were generated. For instance, an empirical demand curve says quantity demanded
depends on income, price and random factors, which we model using probability
theory. The model often involves some unknown parameters, such as the price
elasticity of demand for a product. We then ask how to get an estimate of this
unknown parameter from a sample of observations on price charged and quantity
sold of this product. There are usually lots of di¤erent ways to estimate the
parameter and thus lots of di¤erent estimators: rules for calculating an estimate
from the data. Some ways will tend to give good estimates some bad, so we need
to study the properties of di¤erent estimators. Whether a particular estimator is
good or bad depends on the purpose.
     For instance, there are three common measures (estimators) of the typical value
(central tendency) of a set of observations: the arithmetic mean or average; the
median, the value for which half the observations lie above and half below; and the
mode, the most commonly occurring value. These measure di¤erent aspects of the
distribution and are useful for di¤erent purposes. For many economic measures,
like income, these measures can be very di¤erent. Be careful with averages. If we
have a group of 100 people, one of whom has had a leg amputated, the average
number of legs is 1.99. Thus 99 out of 100 people have an above average number
of legs. Notice, in this case the median and modal number of legs is two.
     We often want to know how dispersed the data are, the extent to which it
can di¤er from the typical value. A simple measure is the range, the di¤erence
between the maximum and minimum value, but this is very sensitive to extreme
values and we will consider other measures below.
     Sometimes we are interested in a single variable, e.g. height, and consider its
average in a group and how it varies in the group? This is univariate statistics,


                                        34
to do with one variable. Sometimes, we are interested in the association between
variables: how does weight vary with height? or how does quantity vary with
price? This is multivariate statistics, more than one variable is involved and
the most common models of association between variables are correlation and
regression, covered below.
    A model is a simpli…ed representation of reality. It may be a physical model,
like a model airplane. In economics, a famous physical model is the Phillips
Machine, now in the Science Museum, which represented the ‡ow of national
income by water going through transparent pipes. Most economic models are just
sets of equations. There are lots of possible models and we use theory (interpreted
widely to include institutional and historical information) and statistical methods
to help us choose the best model of the available data for our particular purpose.
The theory also helps us interpret the estimates or other summary statistics that
we calculate.
    Doing applied quantitative economics or …nance, usually called econometrics,
thus involves a synthesis of various elements. We must be clear about why we are
doing it: the purpose of the exercise. We must understand the characteristics of
the data and appreciate their weaknesses. We must use theory to provide a model
of the process that may have generated the data. We must know the statistical
methods which can be used to summarise the data, e.g. in estimates. We must
be able to use the computer software that helps us calculate the summaries. We
must be able to interpret the summaries in terms of our original purpose and the
theory.

5.1. Example: the purpose of AA guns
The booklet contains a lot of examples, a number of which are not from economics
or …nance, because the issues are often simpler in other areas. This example
is to illustrate the importance of interpreting statistical summaries in terms of
purpose. At the beginning of World War II, Britain …tted some merchant ships
with anti-aircraft (AA) guns. A subsequent statistical analysis showed that no
German planes had ever been hit by merchant AA guns and it was decided to
remove them. However, before this was done another statistical analysis showed
that almost none of the AA equipped ships had been hit by bombs from German
aircraft, whereas large numbers of those without AA had been hit. This was the
relevant statistic and the AA guns were kept on merchant ships. Although the
guns did not hit the bombers, but they kept the bombers further away from the


                                        35
ships, reducing the probability of them damaging the ships. Other examples of
this sort of use of statistics in World War II can be found in The Pleasures of
Counting, T.W. Korner, Cambridge University Press, 1996.

5.2. Example: the E¢ cient Market model.
A simple and very powerful model in economics and …nance is the random walk

                                  yt = yt 1 + "t :

This says that the value a variable takes today, time t; is the value that it had
yesterday, time t 1; plus a random shock, "t . The shock can be positive or
negative, averages zero and cannot be predicted in advance. Such random shocks
are often called ‘white noise’. To a …rst approximation, this is a very good de-
scription of the logarithm of many asset prices such as stock market prices and
foreign exchange rates, because markets are quite e¢ cient: the change in log price
(the growth rate) yt = yt yt 1 = "t is random, unpredictable. Suppose that
people knew something that will raise the price of a stock tomorrow, they would
buy today and that will raise the price of the stock today. Any information about
the future that can be predicted will be re‡ected in the price of the stock now.
So your best estimate of tomorrow’s price is today’s price. What will move the
price of the stock will be new, unpredicted, information represented by "t . Most
of our models will involve random shocks like "t : Sometimes a …rm will report
a large loss and its stock price will go up. This is because the market had been
expecting even worse losses, which had been re‡ected in the price. When reported
losses were not as bad as expected the price goes up. Whether the e¢ cient market
hypothesis is strictly true is a subject of controversy, but the random walk model
is an illuminating …rst approximation.
    If the variable has a trend, this can be allowed for in a random walk with drift

                                yt =   + yt 1 + "t :

Then the variable increases on average by every period. If the variable is a
logarithm, is the average growth rate. This is a parameter of the model, which
we we will want to estimate from data on yt : Parameters like and random errors
or shocks like "t will play a big role in our analysis.




                                        36
5.3. Notation
It is very convenient to express models in mathematical notation, but notation
is not consistent between books and the same symbols means di¤erent things
in di¤erent disciplines. For instance, Y often denotes the dependent variable
but since it is the standard economic symbol for income, it often appears as an
independent variable. It is common to use lower case letters to indicate deviations
from the mean, but it is also common to use lower case letters to denote logarithms.
Thus yt could indicate Yt Y or it could indicate ln(Yt ): The logarithm may be
written ln(Yt ) or log(Yt ); but in empirical work natural logarithms, to the base
e, are almost always used. The number of observations in a sample is sometimes
denoted T for time series and sometimes N or n for cross sections.
    In statistics we often assume that there is some true unobserved parameter
and wish to use data to obtain an estimate of it. Thus we need to distinguish the
true parameter from the estimate. This is commonly done in two ways. The true
parameter, say the standard deviation, is denoted by a Greek letter, say ; and
the estimate is denoted either by putting a hat over it, b; said ‘sigma hat’or by
using the equivalent latin letter, s. In many cases we have more than one possible
estimator (a formula for generating an estimate from the sample) and we have
to distinguish them. This is the case with the standard deviation, there are two
formulae for calulating it, denoted in these notes by b and s. However, books are
not consistent about which symbol they use for which formula, so you have to be
careful. Since we use it a lot, the Greek alphabet is given below.

5.4. The Greek alphabet.
A alpha; often used for intercept in regression and a measure of performance
in …nance.
    B beta; often used for regression coe¢ cients and a measure of the risk of
a stock in …nance.
        gamma.
        delta; used for changes, yt = yt yt 1 ; often rate of depreciation.
    E or " epsilon; " often error term.
    Z zeta.
    H eta; often elasticity.
        theta; sometimes parameter space; often a general parameter.
    I iota.
    K kappa.

                                        37
        lambda; often a speed of adjustment.
   M mu; often denotes expected value or mean.
   N nu.
        xi.
   O o omicron.
        pi; (ratio Y
                   of circumference to diameter) often used for in‡ation. is the
product symbol:       yi = y1 y2 ::: yn .
   P rho; often denotes autocorrelation coe¢ cient.
        sigma; 2 usually a variance, a standard deviation, is the summation
operator, also sometimes used for a variance covariance matrix.
   T tau.
        upsilon.
        ' phi; (y) sometimes normal distribution function; (y) normal density
function.
   X chi; 2 distribution.
         psi.
      ! omega; often a variance covariance matrix.




                                      38
6. Descriptive statistics
Data tend to come in three main forms:
    -time-series, such as. observations on annual in‡ation in the UK over a number
of years denoted yt , t = 1; 2; :::; T: This indicates we have a sequence of observa-
tions on in‡ation running from t = 1 (say 1961) to t = T (say 1997) so the number
of observations T = 37.
    -cross-section, e.g. observations on annual in‡ation in di¤erent countries in
a particular year, denoted by yi , i = 1; 2; :::; N . Where, if they were arranged
alphabetically, i = 1 might correspond to Albania and i = N to Zambia. Whereas
time-series data has a natural ordering, 1996 comes after 1995, cross-section does
not.
    -panels e.g. observations on in‡ation in a number of countries in a number of
years denoted yit ; with a typical observation being in‡ation in a particular country
i; say the UK, in a particular year, t; say 1995. This gives T N observations in
total.
    We will use both T and N to denote the number of observations in a sample.
    Graphs are generally the best way to describe data. There are three types of
graph economists commonly use.
    (1) For time-series data, we use a line graph, plotting the series against time.
We can then look for trends (general tendency to go up or down); regular seasonal
or cyclical patterns; outliers (unusual events like wars or crises).
    (2) We can plot a histogram, which gives the number (or proportion) of ob-
servations which fall in a particular range.
    (3) We can plot one variable against another to see if they are associated, this
is a scatter diagram or X-Y Plot. Barrow Chapter 1 has lots of examples.

6.1. Summary Statistics
We will use algebra, particularly the summation operator, to describe operations
on data. The formulae may look complicated, but they are just a set of instruc-
tions. Suppose we have a series of numbers: 2,4,6,8, which we denote, x1 ; x2 ; x3 ; x4 ;
xi ; i = 1; 2; :::; N , where N = 4: The sum of these is 20; which we denote

                             X
                             N
                                   xi = 2 + 4 + 6 + 8 = 20
                             i=1




                                           39
this simply says add together the N elements of x. If we multiply each number
by a constant and add a constant to each number to create yi = a + bxi , then

                       X
                       N            X
                                    N                            X
                                                                 N
                             yi =         (a + bxi ) = N a + b         xi :     (6.1)
                       i=1          i=1                          i=1

In the example above for a = 1; b = 2, then yi = 5; 9; 13; 17, with sum 44, which
is the same as 4 1 + 2 20.

6.1.1. The mean, a measure of central tendency or typical value
The arithmetic mean (average) of xi ; usually denoted by a bar over the variable,
said ‘x bar’, is de…ned as
                                      XN
                                x=       xi =N:
                                                  i=1

In this example, it is 20/4=5. The formula just says add up all the values and
divide by the number of observations. There are other sorts of mean. For instance,
the geometric mean is the N th root of the product of the numbers
                                    p
                         GM (x) = N x1 x2 ::: xN

and can be calculated as the exponential (anti-log) of the arithmetic mean of the
logarithms of the numbers, see Barrow P54.

6.1.2. The variance and standard deviation, measures of dispersion
The variance, often denoted 2 ; and standard deviation (square root of the vari-
ance, ) measure how dispersed or spread out the observations are. The variance
is more convenient for mathematical derivations, but in applied work we use the
standard deviation because it is in the same units as the original variable. If a
variable is normally distributed two thirds of the observations will fall in the range
of the mean plus and minus one standard deviation and 95% of the observations
will lie in the range the mean plus or minus two standard deviations.
    One estimator of the variance of xi , (sometimes called the population variance)
is
                                2
                                     XN
                               b =        (xi x)2 =N:
                                            i=1


                                                   40
Notice here we distinguish between the true value 2 and our estimate of it b2 :
This formula gives a set of instructions. It says take each of the observations and
subtract the mean, (xi x); P square the deviations from the mean (xi x)2 ; add the
squared deviations together N            2
                               i=1 (xi x) and divide  the sum of squared deviations
                                                PN
by the number of observations, 4 in this case: i=1 (xi x)2 =N = 20=4 = 5:
      i      xi    xi     x (xi    x)2
      1      2     -3       9
      2      4     -1       1
      3      6     1        1
      4      8     3        9
      Sum    20    0        20

   In this case both the Mean and the Variance happen to be 5. The standard
deviation, SD(x) = b is the square root of the variance: 2.24 in this case. Notice
that the sum of the deviations from the mean is always zero:

                  X
                  N               X
                                  N                       X
                                                          N                PN
                                                                            i=1 xi
                    (xi    x) =         xi     Nx =             xi   N               = 0:   (6.2)
                  i=1             i=1                     i=1
                                                                            N

     Notice we use (6:1) in deriving the second term.
     Another estimator of the variance of xi , (sometimes called the sample variance)
is
                                        X
                                        N
                               s2 =       (xi         x)2 =(N        1):
                                        i=1

We discuss the di¤erence between b2 and s2 below.
   If x has standard deviation ; then for constants a and b; the new variable
y = a + bx has standard deviation b and thus variance b2 x2 :

6.1.3. Covariance and correlation, measures of association
The covariance, which is used to measure association between variables is

                                             X
                                             N
                           Cov(x; y) =              (xi   x) (yi      y) =N:
                                              i=1

The Covariance will be positive if high values of x are associated with high values
of y; negative if high values of x are associated with low values of y: It will be zero

                                                    41
is there is no linear relationship between the variables. The covariance can be
di¢ cult to interpret, so it is often standardised to give the correlation coe¢ cient,
by dividing the covariance by the product of the standard deviations of the two
variables.
                                          Cov(x; y)
                                   r=
                                        SD(x)SD(y)
    The correlation coe¢ cient lies between plus and minus one, 1 r 1: A cor-
relation coe¢ cient of 1 means that there is an exact negative linear relation be-
tween the variables, +1 an exact positive linear relation, and 0 no linear relation.
To prove this note that if y = x; Cov(x; y) = V ar(x); and SD(x)SD(y) = V ar(x);
so r = 1:
    Correlation measures linear relationships, there may be a strong non-linear
relationship and zero correlation. Correlation does not imply causation. Two
variables may be correlated because they are both caused by a third variable.

6.1.4. Standardised data
Data are often standardised by subtracting the mean and dividing by the standard
deviation (the square root of the sample variance),
                                           xi       x
                                    zi =                :

This new variable, zi; has mean zero (from 6.2) and variance (and standard devi-
ation) of one, since if x has standard deviation ; z = 1 x      1
                                                                  x has standard
                1
deviation         = 1. This follows from our rule above that if x has standard
                                                                              1
deviation ; then y = a + bx has standard deviation b : In this case a =         x
            1
and b =       :
    Notice the correlation coe¢ cient is the covariance between the standardised
measures of x and y:

6.1.5. Moments
A distribution is often described by:
                                   PN         k
                                                                                    P
      its moments, m; which are      i=1 xi       =N; k = 1; 2; :::. The mean x =       xi =N
      is the …rst moment, k = 1.



                                           42
                                P                                         P
     its centred moments, cm; N    i=1 (xi    x)k =N: The variance, 2 = N    i=1 (xi
        2
     x) =N is the second centred moment, k = 2: The …rst centred moment,
     P  N
        i=1 (xi  x)=N = 0.
                                        P k
     its standardised moments, sm;         zi =N; where zi = (xi x)= : The third
     standardised moment, k = 3; is a measure of whether the distribution is
     symmetrical or skewed. The fourth standardised moment, k = 4; is a mea-
     sure of kurtosis (how fat the tails of the  P distribution  are). For a normal
                                                     3
     distribution,Pthe coe¢ cient of skewness       zi =N is zero, and the coe¢ cient
                     4
     of kurtosis    zi =N is 3.


   Moments
   k      m             cm          sm
   1       x              0          0
     PN      2             2
   2   i=1 xi =N P                   1
     PN      3    N            3
                                   P 3
   3       xi =N      (xi x) =N     z =N
     Pi=1
       N     4
                 Pi=1
                  N            4
                                   P i4
   4   i=1 xi =N  i=1 (xi    x) =N  zi =N

   Some distributions do not have moments. The average (mean) time to get a
PhD is not de…ned since some students never …nish, though the median is de…ned,
the time it takes 50% to …nish.

6.2. Example, averages and reversals
Suppose a …rm has two factories one in the low wage north, where it employs
mainly male sta¤, and the other in the high wage south, where it employs mainly
females. In both it pays males more than females. The Table below gives the
number of male sta¤, N M; the male wage, W M; the number of females, N F and
the female wage W F:
         NM WM NF WF
     N 200 350 50 300
     S 50      500 200 450
   The average male wage is (200 350 + 50 500)=(200 + 50) = 380: The average
female wage is (50 300 + 200 450)=(50 + 200) = 420: Despite paying men more
than women at both factories, the average female wage is higher than the average
male wage, because it is employing more women in the high wage south. This
reversal is know as Simpson’s paradox, though he was not the …rst to note it.


                                        43
6.3. Example, Do Economists agree?
It is said that when you get two economists together, you will get three opinions;
because one will say ‘on the one hand ..., on the other hand ...,’. In June 2004
the BBC sponsored a survey of the views of the Society of Business Economists
(www.sbe.co.uk) on the trend in UK house prices over the next three years. 225
members replied. They had to choose from various ranges, so they could not say
‘on the one hand they might go up, but on the other hand they might go down’.
    The percentages f (xi ) choosing each range, xi ; for expected growth in house
prices were
                                     xi      f (xi )
                                   > 15%     15%
                                  5 15% 25%
                                   0 5%      18%
                                   10 0% 24%
                                  < 10% 18%
    There are two modes: roughly a quarter think prices will go up by between 5
and 15% and a quarter think prices will fall by up to 10%. The median (half above
and half below) falls in the range 0 to 5%. The distribution is broadly symmetric.
To calculate means and variances, we need to assign values to the ranges, which
is inevitably arbitrary to some extent. We will use mid-points of closed ranges,
e.g. the mid point of 5-15% is 10%; and for the open ranges treat more than 15%
as 20%, and less than -10% as -15%. This gives the values Xi below. We also give
pi the proportions in each range, percentages divided by 100.
    We cannot use our standard formula for the mean, so we need to adjust it. See
Barrow p27. Call the total number of respondents, N = 225: Call the number who
responded in each range Ni : So the number in the lowest range (who reponded
that they would fall by more than 10%), N1 = 0:18 225 = 40:5: The percentages
are rounded, which is why it is not an integer. We could calculate the mean by
multiplying the the value of each answer by the number who gave that value,
adding those up over the 5 ranges and dividing by the total number, but it is
easier to calculate, if we rewrite that formula in terms of the proportions.

                    X5             X
                                   5
                                             Ni          X
                                                         5
                 X=(   Ni Xi )=N =                Xi =         pi X i :
                       i=1             i=1
                                             N           i=1




                                       44
We can do the same thing for calculating the variance, giving
                                        X
                                        5
                                2
                                    =         pi (Xi   X)2 :
                                        i=1

So in the table, we give the values Xi ; the proportions pi (note they sum to one);
calculate the product pi Xi ; then sum these to get X = 2:05: Then we calculate
(Xi X) and pi (Xi X) (note these sum to zero). Then multiply pi (Xi X) by
(Xi X) to get pi (Xi X)2 : We sum these to get the variance. The calculations
are given below.
     Xi     pi pi Xi (Xi X) pi (Xi X) pi (Xi X)2
     20    0:15   3    17:95    2:6925  48:330375
     10    0:25 2:5    7:95     1:9875  15:800625
     2:5   0:18 0:45   0:45     0:081     0:03645
       5   0:24   1:2    7:05     1:692   11:9286
      15   0:18   2:7   17:05     3:069 52:32645
    Sum      1  2:05   2:25        0    128:4225
    Since the variance 2 = 128:4225 the standard deviation, its square root is
  = 11:33:
    To summarise the mean forecast of SBE respondents was for house price growth
of 2.05, with a standard deviation of 11.33, which indicates the large range of dis-
agreement. The mean falls in the same range as the median, which also indicates
that the distribution is fairly symmetric, but it is bimodal with about a quarter
thinking prices will rise between 5 and 15%, and a quarter thinking that they
would fall by up to 10%.
    In June 2004 when the survey was conducted, the average house price in the
UK according to the Nationwide Building Society was £ 151,254. In June 2007,
three years later, it was £ 184,074; a rise of 22%. That was the peak and prices
prices subsequently fell to just below £ 150,000 in the …rst quarter of 2009 before
recovering to about £ 165,000 in summer 2012.


7. Economic and Financial Data I: numbers and graphs
7.1. Tables and Calculations
Data will typically come in a Table, either electronic or hard-copy. When con-
structing your own tables, make sure the table has: a title, full def-

                                              45
initions of the variables, the units of measurement and the source of
the data. Be clear on the units of measurement and get a feel for the orders
of magnitudes: what are typical values, what are the maximum and minimum
values? When comparing series or graphing them together make sure they are in
comparable units.
     Be careful about units. Variables are all measured in di¤erent units and ratios
will depend on the units of the numerator and denominator. Expressing the units
as powers of 10 is often useful, as in done in scienti…c notation. 1 = 100 ; 10 = 101 ;
100 = 102 ; 1; 000; 000 = 106 : The power gives you the number of zeros after the
one. Millions are 106 ; billions 109 ; trillions 1012 : UK GDP in 2009 was about £ 1.4
trillion (1012 ) and its population was about 61 million (106 ) so its per-capita GDP
was about £ (1.4 1012 /61 106 ) = 0:0229 106 = £ 22,900
     Be careful about coverage. In the UK statistics are sometimes for England
and Wales, sometimes Great Britain (England, Wales & Scotland) and sometimes
UK (England, Wales, Scotland and Northern Ireland). Team GB at the Olympics
should have been Team UK.

7.2. Transformations
In many cases, we remove the e¤ects of trends, changes in price levels etc. by
working with either growth rates, or with ratios. In economics and …nance certain
ratios tend to be reasonably stable (not trended). An example is the Average
Propensity to Consume (the ratio of Consumption to Income) or the Savings
Ratio. In …nance, ratios like the Price-Earnings Ratio or the Dividend Yield are
used. Notice these ratios can be compared across countries, because the units of
currency in the numerator and denominator cancel. These can be expressed either
as proportions or multiplied by 100 to give percent.
    Theory will often tell you what variables to construct, e.g.
    -Real Interest Rates equal to the nominal ordinary interest rate minus the
(expected) rate of in‡ation;
    -real exchange rate, the nominal exchange rate times the ratio of foreign to
domestic price indexes;
    -the velocity of circulation, the ratio of nominal GDP to the money supply.
    Very often we work with the logarithms of the variables, for reasons discussed
elsewhere in these notes.




                                          46
7.3. National Accounts
The output of an economy is usually measured by Gross Domestic Product, GDP.
This measure is part of a system of National Accounts, which start from the iden-
tity that output equals expenditure equals income. Anything produced, output,
is sold to somebody, and is then their expenditure, and the money generated by
the sale is paid to somebody, it is their income. Expenditure is made up of con-
sumption Ct ; plus investment It , plus government spending on goods and services
(i.e. excluding government expenditure on transfer payments) Gt ; plus exports
Xt ; minus imports Mt : Income is made up of wages Wt plus pro…ts Pt : In any
period:
                      Yt = Ct + It + Gt + Xt Mt = Wt + Pt :
Output produced but not sold, left in the warehouse is treated as a change in in-
ventories part of investment by …rms. Investment includes Gross Domestic Fixed
Capital Formation and acquisition of inventories. Although, in principle, output,
expenditure and income are identically equal, in practice because of measurement
errors, they are not and ‘balancing items’are added to make them match. Cov-
erage can be national (by the citizens of the country) or domestic (within the
boundaries of the country). The di¤erence between Gross National Product and
Gross Domestic Product is net income (recipts less payments) from the rest of the
world. The measures can be gross of the depreciation of capital stock or net of
it. Be careful about Gross and Net measures, since it is often not clear from the
name what is being netted out. The measure can be at the prices actually paid
(market prices) or what the producers actually receive (factor cost) the di¤erence
is indirect taxes less subsidies. The UK national accounts conventions are based
on the European System of Accounts 1995 and are published in the Blue Book.
    GDP or other national income aggregates measure marketed outputs and there
are lots of activities that are left out. These include domestic activities (household
production), environmental impacts, illegal activities, etc. If there is an increase in
crime which leads to more security guards being hired and more locks …tted, this
increases GDP. There are various attempts to adjust the totals for these e¤ects
although, so far, they have not been widely adopted. You should be aware of the
limitations of GDP etc as measures. There is a good discussion of the issues and
alternatives in the Report by the Commission on the Measurement of Economic
and Social Progress (2009) available on www.stiglitz-sen-…toussi.fr.
    The accounts are divided by sector. The private sector covers …rms (the cor-
porate sector usually divided into …nancial and non-…nancial) and households;


                                          47
the public sector covers general government (which may be national or local)
and sometimes state owned enterprises, though they may be included with the
corporate sector; the overseas sector covers trade. Corresponding to the output,
expenditure and income ‡ows, there are …nancial ‡ows between sectors. De…ne
Tt as taxes less transfer payments. The total Yt Tt factor income minus taxes
plus transfer payments (e.g. state pensions or unemployment bene…t) is known as
disposable income. Subtract Tt from both sides of the income-expenditure identity
                      Yt     Tt = Ct + It + Gt         Tt + Xt      Mt
note that savings St = Yt        Tt    Ct : Move Ct and It to the left hand side to give:
                           (St     It ) = (Gt     Tt ) + (Xt     Mt )
                      (St        It ) + (Tt     Gt ) + (Mt     Xt ) = 0
the three terms in brackets represent what each sector - private, public, overseas -
needs to borrow or lend and total borrowing must equal total lending. If savings
is greater than investment, the private sector has a surplus of cash which it can
lend to the public or overseas sector. They sum to zero because for every borrower
there must be a lender.

7.4. Unemployment
We often have a theoretical concept and need to provide an ‘operational’de…ni-
tion, a precise set of procedures which can be used by statistical o¢ ces, to obtain
measures. This raises questions like what is the best operational measure and
how well does it correspond to the particular theoretical concept. Unemploy-
ment is a case in point. There are a number of di¤erent theoretical concepts of
unemployment and a number of di¤erent ways of measuring it.
    One method is the ‘Claimant count’, i.e. the number who are registered unem-
ployed and recieving bene…t. But this is obviously very sensitive to exact political
and administrative decisions as to who is entitled to receive bene…t.
    An alternative is a survey, which asks people of working age such questions as
    (i) are you currently employed; if not
    (ii) are you waiting to start a job; if not
    (iii) have you looked for work in the last four weeks.
    Those in category (iii) will be counted as unemployed. The unemployment
rate is the number unemployed divided by the number in the labour force (em-
ployed plus unemployed). Youth unemployment rates are high partly because the
denominator, the labour force, is reduced by the number of people studying.

                                                48
7.5. Example: Were the nineties and noughties NICE?
7.5.1. Introduction
Mervyn King, the Governor of the Bank of England, described the UK economic
environment at the end of the 20th century and the beginning of the 21st century
as NICE: non-in‡ationary, consistently expanding. Subsequently it became VILE:
volatile in‡ation, less expansion. This example uses descriptive statistics and
graphs to compare UK growth and in‡ation over the period 1992-2007, with their
earlier and later behaviour to see how nice this period was.

7.5.2. Data
The original series, from the O¢ ce of National Statistics, are for 1955Q1-2012Q1,
Qt = Gross Domestic Product, chained volume measure, constant 2009 prices,
seasonally adjusted (ABMI) Et = Gross Domestic Product at current price: Sea-
sonally adjusted (YBHA). Ut is the ILO unemployment rate: UK: All: Aged
16-64: %, seasonally adjusted: (LF2Q), which is only available from 1971. The
price index, the GDP de‡ator, is Pt = Et =Qt : Growth (the percentage change
in output), gt ; and in‡ation (the percentage change in prices), t ; are measured
over the same quarter in the previous year as gt = 100 (ln(Qt ) ln(Qt 4 )) and
  t = 100 (ln(Pt ) ln(Pt 4 )); which are very close to the percentage changes. Such
annual di¤erences smooth the series and would remove seasonality if they were
not already seasonally adjusted. Whereas the data for ouput and prices starts
in 1955Q1, the data for growth and in‡ation only starts in 1956Q1, because of
taking the 4 quarter change. The most recent …gures are very likely to get revised
and during 2012 many have questioned the accuracy of the …gures.

7.5.3. Line graphs
The broad pattern of UK economic events can be seen from the from the line
graphs of the time series of growth, G, in‡ation, INF and unemployment, UNEM.
UK economic policy since World War II can be described as a search for targets.
Initially the target was the balance of payments to support a …xed exchange rate.
Then with the end of the Bretton Woods system of …xed exchange rates in the
early 1970s, there was a shift to monetary targets to control in‡ation, a shift which
became more pronounced with the election of Mrs Thatcher in 1979. However, the
monetary aggregates proved very unstable and there was a switch to exchange rate
targets in the middle 1980s, culminating in joining the European Exchange Rate

                                         49
Mechanism, ERM. With the ejection of sterling from the ERM in September 1992,
in‡ation targets were adopted. In 1997, the newly elected Labour government
gave the Bank of England independent responsibility for monetary policy, setting
interest rates to target in‡ation. This history is re‡ected in the graphs for growth
and in‡ation below. The "stop-go" pattern of the 1950s and 1960s is obvious, then
there is a peak when growth reached almost 10% during the ‘Barber Boom’of the
early 1970s following the collapse of the Bretton Woods system of …xed exchange
rates. Anthony Barber was the conservative Chancellor at the time. The …rst
oil price shock of 1973 following the Arab-Israeli war sent the economy into deep
recession, with growth negative in most quarters between 1974Q1 and 1975Q4.
During 1976 the UK had to borrow from the IMF. Growth recovered in the later
1970s, before a further recession in the early 1980s following the second oil price
shock after the Iranian revolution and Mrs Thatcher’s monetarist policies. Growth
recovered in the later 1980s with the boom under Nigel Lawson, the Conservative
Chancellor, then sank into recession again in the early 1990s, possibly worsened
by the …xed exchange rate required by membership of the ERM. The UK left the
ERM in September 1992 and there followed a long period of relative stability,
before the e¤ects of the 2007 Credit Crunch began to impact on the economy.
Output fell by 6.31% in the year up to 2009Q1, the lowest observed in this sample
and while the economy bounced back, subsequent growth was slow.
    In‡ation was below 10%, though volatile during the 1960s and 1970s. In the
mid 1970s it shot up to almost 25%, before falling back to almost 10%, then rising
again over 20% following the election of Mrs Thatcher in 1979. It then came down
below 5%, with a burst in the late 1980s and early 1990s, before stabilising at a
low level subsequently. There are a number of di¤erent measures of in‡ation, CPI,
RPI etc., and they show slightly di¤erent patterns from the GDP de‡ator used
here. The unemployment rate, which is only available on a consistent basis since
1971, shows the e¤ects of the recessions of the mid 70s, early 80s, early 90s and
late 00s. The combination of high unemployment and high in‡ation is sometimes
called stag‡ation.




7.5.4. Frequency distributions.
The histograms and summary statistics which describe the distribution of growth
and in‡ation for the whole period are next shown. An average growth rate of

                                        50
                                                G
   12


     8


     4


     0


    -4


    -8
      1955   1960   1965   1970   1975   1980   1985   1990   1995   2000   2005   2010



                      Figure 7.1: Fig 1: UK growth 1956-2012

just over 2%, seems to be a long-term feature of the British economy, the mode
is between 1.5-3%. The distribution is not normal, with a slight negative skew
and fatter tails than a normal distribution. If a random variable is normally dis-
tributed, the coe¢ cient of skewness should be zero and the coe¢ cient of kurtosis
3. The Jarque-Bera statistic, which is distributed as 2 (2); tests whether the
skewness and kurtosis are signi…cantly di¤erent from these values: The p value,
probability of the null hypothesis of normality being true, indicate that the hy-
pothesis that growth is normal is rejected. If growth was normally distributed
one would expect roughly two thirds (68%) of the observations to lie in the range
mean plus or minus one standard deviation, roughly: 0:2 4:8: In fact around
77% rather than 68% lie in the range mean plus or minus one standard deviation.
This is because of the fat tails, if the data were normal one would be very unlikely
to observe a value of -6.31%, which is 3.81 standard deviations from the mean
(-6.31-2.52)/2.32. In‡ation is even less normal than growth as the larger value of
the J-B statistic indicates and is strongly positively skewed as both the di¤erence
between the mean and the median and the coe¢ cient of skewness show. The
average in‡ation of around 5% is not really typical of the whole period, the mode


                                           51
                                             INF
30

25

20

15

10

 5

 0

-5
  1955   1960    1965   1970   1975   1980    1985   1990   1995   2000   2005   2010



                  Figure 7.2: Fig 2: UK in‡ation 1956-2012


                                             U
14

12

10

 8

 6

 4

 2
 1955    1960    1965   1970   1975   1980    1985   1990   1995   2000   2005   2010


                Figure 7.3: Fig 3: UK unemployment 1970-2012

                                        52
is between 2% and 3%.



   32
                                                                 Series: G
   28                                                            Sample 1955Q1 2012Q1
                                                                 Observations 225
   24
                                                                 M ean       2.525127
   20                                                            M edian     2.726973
                                                                 M axim um   9.743082
   16                                                            M inim um   -6.310785
                                                                 Std. Dev.   2.320195
   12
                                                                 Skewness    -0.807459
                                                                 Kurtosis    5.230604
    8

                                                                 Jarque-Bera 71.09581
    4
                                                                 Probabil ity 0.000000
    0
        -6    -4     -2      0     2     4     6      8     10



                          Fig 4: Histogram of UK growth



7.5.5. The relationship between growth and the change in unemploy-
       ment
Growth is a major factor determining the change in unemployment: if growth is
high unemployment falls, if growth is low, unemployment rises. The relationship
between the change in unemployment and growth is known as Okun’s Law, after
the US economist Arthur Okun. The scatter diagram plots the quarterly change
in the unemployment rate, DU against the growth rate over the year, G for the
period 1971-2011. The relationship is clearly negative, the correlation is -0.73.
One can …t a line to the data which takes the form: DUt = 0:2 0:084Gt +"t ; with
a standard error of regression of 0:18: Okun estimated the relationship the other
way round with growth a function of the change in unemployment. Unemployment
increased less in the recent recession than one would expect from the historical
pattern, though there is dispute about the reason for this.



                                       53
60
                                                                                   Series: INF
                                                                                   Sample 1955Q1 2012Q1
50                                                                                 Observations 225

40                                                                                 Mean          5.223799
                                                                                   Median        3.574835
                                                                                   Maximum       24.85100
30                                                                                 Minimum        -0.157032
                                                                                   Std. Dev.     4.694682
20                                                                                 Skewness      1.960943
                                                                                   Kurtosis      7.141044
10                                                                                 Jarque-Bera   304.9634
                                                                                   Probability   0.000000
 0
     0     2        4          6     8   10    12   14   16   18   20   22   24


                                   Fig 5: Histogram of UK in‡ation



                        1.0

                        0.8

                        0.6

                        0.4
               DU




                        0.2

                        0.0

                        -0.2

                        -0.4

                        -0.6
                               -8         -4         0         4         8        12
                                                          G

         Fig 6: Scatter diagram change in unemployment and growth



                                                    54
7.5.6. Conclusion
Compared to previous (and subsequent) history, the period 1993-2007 was nice.
In‡ation became low and stable rather than high and volatile, as it was before.
Growth was slightly higher and much less volatile. Although there was an eco-
nomic cycle 1997-2007, it was less pronounced than in earlier years, hence Gordon
Brown’s claim to have abolished boom and bust. Whether this was good luck or
good policy remains a matter of debate, as does whether the easy-money policy
of these years contributed to the subsequent …nancial crisis. This ‘Great Moder-
ation’was not con…ned to the UK, but seems to have been a general feature of
many advanced economies. There were global economics shocks over this period:
the Asian crisis of 1997-8; the Russian default and the LTCM crisis of 1998; the
dot.com boom and bust of 2001; the gyrations in the oil price, which went from
around $10 in 1998 to $147 in 2008; 9/11 and the wars in Iraq and Afghanistan.
But despite these shocks, there was smooth non-in‡ationary growth in the UK,
as in many economies. Whether the Great Moderation was merely a transitory
interlude of stability in a crisis-prone system remains to be seen. As the warning
on …nancial products says: past performance is not necessarily a guide to the
future.


8. Applied exercise I: Ratios and descriptive statistics
This exercise is to be done on your own. We will assume that you have done this
exercise and are familiar with this material, so we can set exam questions using it.
It will be started in the spreadsheet class. The data are available on the ASE web
page. They were constructed by Robert J. Shiller, updating the series in Robert J
Shiller, Market Volatility, MIT Press 1989. His later book, Irrational Exhuberance,
Princeton University Press 2000 is a good description of the stock market bubble
at the end of the twentieth century. At the end of this data, January 2000, the
S&P was 1425, it peaked in March 2000 at 1527 He got timing of his publication
right, since it then fell sharply and was around 1000 in late August 2003, with
a 2003 low as of then of 800 (taken from FT World Markets at a glance table).
Check what it has done since; bubbles (when prices shoot up to unsustainable
levels) and …nancial crises (when they return to normal) are recurrent features of
the system.




                                        55
8.1. Data
The data is in an Excel …le called Shiller.xls, on the ASE and Ron’s web pages.
Copy this …le to your own directory and when you have …nished the exercise copy
the new …le to your own space using a new name.
   In the …le, rows 2 to 131, contain US data from 1871 to 2000; row 1 contains
headings:
   A-YEAR
   B-NSP: Stock Price Index (Standard & Poors composite S&P) in current prices
(Nominal terms), January …gure.
   C-ND: Dividends per share in current prices, average for the year.
   D-NE: Earnings per share in current prices, average for the year.
   E-R: Interest rate, average for the year.
   F-PPI: The producer price index, January …gure, 1967 average=100.
   The letters A to F indicate the columns in the spreadsheet. Note 2000 data
are missing for ND, NE, R.

8.2. Transformations: ratios, growth rates, correcting for in‡ation, etc
In column G construct the (backwards) Price Earnings Ratio. Type PER in cell
G1 as a heading. Put =B3/D2 in cell G3. Copy this down for the rest of the
years ending in G131. The price earnings ratio is a measure of the underlying
value of a share, how much you have to pay to buy a stream of earnings.
    Highlight the data for PER over G3:G131. Use Chart wizard (on toolbar) and
choose a line graph, top left sub-type, choose next and go to next. Comment
on the picture. Can you identify the Stock Market Booms of the late 1920s and
1990s. What happened next in both cases? What other features of the data can
you see?
    In the same way, create the following new variables for the period 1872 to
1999, i.e. rows 3 to 130, with the variable name at the top:
    H- Dividend Yield: DY (Type DY in cell H1 and type the formula =C3/B3
in cell H3 and copy down)
    I-Capital Gain: CG (type CG in I1) type the formula =(B4-B3)/B3 in
I3 and copy down
    J-In‡ation:INF=(F4-F3)/F3 type formula in J3
    K-Real Return on equities: RRE=H3+I3-J3
    L- Real Interest Rate RIR=(E3/100)-J3.



                                      56
   Notice that these are proportions, e.g. numbers like 0.05. This corresponds to
5%. Why do we subtract the rate of in‡ation to get the real return, whereas we
would divide the stock price index by the price level to get the real stock price
index? Why do we divide the interest rate by 100? Plot in‡ation. Notice how we
have matched the dates, e.g. in de…ning in‡ation, we have had to take account of
the fact that the price index is a January …gure.

8.3. Graphing Real Returns on Equities
We now want to analyse real return on equities (i.e. dividends plus capital gains
less in‡ation) over the period 1872-1999 and compare it with the real interest rate.
First we will do it graphically. Highlight K3:L130, click chart wizard, choose line
graph and view real returns and the real interest rate. There is a lot of volatility
from year to year in the RRE and the range is large: from about -0.5 to +0.5.
Over this period, you could have made or lost almost 50% of your investment in
exceptional years. The real interest rate is much less volatile. Go to cell J132
type in mean, then K132 and type in =AVERAGE(K3:K130). Go to J 133
type in SD, then K133 and type in =STDEV(K3:K130). Copy these two cells
to L132 and 133. You now have the mean (average) and the (unbiased estimate
of) the standard deviation for the real return on equities and the real interest
rate. The mean real return on equities is much higher than that from the interest
rate. This is known as the equity premium. But the risk on equities, measured
by the standard deviation, is also much higher. Calculate the average real return
on equities, 1872-1990 and 1991-1999.

8.4. More Descriptive Statistics
We want to calculate descriptive statistics for the array K3:J130. Following the
principles above construct the following table for RRE and RIR. Only the …gures
for RRE are given below.




                                        57
    line J             K                             RRE
    132 Mean           =AVERAGE(RR)                  0.088
    133 SD             =STDEV(RR)                    0.184
    134 MIN            =QUARTILE(k3:k130,0) -0.448
    135 25%            =QUARTILE(k3:k130,1) -0.021
    136 MEDIAN         =QUARTILE(k3:k130,2) 0.091
    137 75%            =QUARTILE(k3:k130,3) 0.219
    138 MAX            =QUARTILE(k3:k130,4) 0.514
    139 SKEW           =SKEW(k3:k130)                -0.389
    140 KURTOSIS =KURT(k3:k130)                      0.296
  You can also use the descriptive statistics command in data analysis to get
most of these.

8.5. Interpretation of spreadsheet summary statistics
Call the series yt ; t = 1; 2; :::; T: Above we calculate the mean:

                                          X
                                          T
                                    y=          yt =T
                                          i=1

the unbiased ‘sample’standard deviation, SD:
                             v
                             u T
                             uX
                         s = t (yt y)2 =(T                       1)
                                    i=1


The amount T 1 is known as the degrees of freedom.
    Then we calculate the minimum value; the value which 25% of the observations
lie below; the median, the value which 50% of the observations lie below; the value
which 75% of the observations lie below; and the maximum. These are known as
Quartiles. Excel also allows you to calculate percentiles: the value for which x%
lie below, for any x: Returns were negative in over 25% of the years. The median
is very similar to the mean which suggests that the distribution is symmetric. The
range of real returns is very large, between minus 50% and plus 50%.
    The measure of skewness is roughly

                                 1X
                                    T                    3
                                          (yt       y)
                                                             :
                                 n i=1          s

                                          58
the standarised third moment. In fact Excel makes degrees of freedom adjust-
ments, similar to the sample standard deviation above. If the distribution is
symmetrical, the measure of skewness should be zero. In this case, it is pretty
near zero.
   The measure of (excess) kurtosis is roughly
                              1X
                                  T                   4
                                       (yt       y)
                                                          3:
                              n i=1          s
if the distribution is normal the expected value of the …rst term (the fourth stan-
dardised centred moment) is three, so values around zero indicate a roughly normal
distribution. You can get exact de…nitions from HELP, STATISTICAL FUNC-
TIONS, SKEW & KURT.


9. Index Numbers
9.1. Introduction
In‡ation, the growth rate of the price level, is measured by percentage change in
a price index:
   t = 100   (Pt    Pt 1 )=Pt 1 = 100 f(Pt =Pt 1 )         1g   100 (ln Pt   ln Pt 1 )
where Pt is a price index. Distinguish between the price level, Pt and the rate
of in‡ation, t . When the in‡ation rate falls, but is still positive, prices are still
going up, just at a slower rate. If in‡ation is negative, prices are falling. Suppose
the Price Index was 157 in 1995 and 163 in 1996, then the rate of in‡ation is
3.82%. Notice that this can also be expressed as a proportion, 0.0382. In many
cases, we will calculate the growth rate by the change in the logarithm, which is
very close to the proportionate change for small changes, e.g. < 0:1, i.e.10%. We
usually work with natural logs to the base e, often denoted by LN rather than
LOG, sometimes used just for base 10. Price indexes are arbitrarily set at 100,
or 1, in some base year, so the indexes themselves cannot be compared across
countries. The index can be used to compare growth relative to the base year if
they all have the same base year, e.g. 1990=100 for all countries. If the in‡ation
rate rises from 3% to 6% it has risen by three percentage points. It has not risen
by three percent, in fact it has risen by 100%. If something falls by 50% and then
rises by 50%, it does not get back to where it started. If you started at 100, it
would fall to 50, then rise by 50% of 50, 25, to get to 75.

                                         59
9.2. Example: de‡ation after WWI
World War I ended in November 1918. The table below gives data on the per-
centage unemployment rate U ; the Retail Price Index 1963=100, RP I; the yield
on 3 month Treasury Bills, R; (these were not issued during the war); GDP per
capita in 1913 prices Y ; and the dollar-sterling exchange rate, $=$ (sterling was
not convertible during the war); for 1918-1922. From these we can calculate: the
growth rate of per capita income, Growth% = 100(Yt =Yt 1 1); the in‡ation rate,
IN F %; and and the real interest rate, RIR; (the nominal interest rate less the
rate of in‡ation) for 1919-1922.
     Y ear U RP I R Y S=$ Growth% IN F % RIR
      1918 0:8       42        54
      1919 2:1       56 3:5 48 4:42           11       33:3      29:5
      1920 2:0       52 6:2 47 3:66            2        7:1     13:3
      1921 12:9 47 4:6 42 3:85                11        9:6     14:2
      1922 14:3 38 2:6 44 4:43                5         19:1 21:7
    In 1919 per capita income fell by over 10%, and continued falling till 1921.
This fall produced rising unemployment. In‡ation is calculated as the percentage
change in the RPI. Prices were rising between 1918 and 1919, but then fell giving
negative in‡ation, de‡ation. Between 1919 and 1922 prices fell by almost a third.If
you lend £ 1 at 15% for a year you get £ 1.15 at the end of the year, but if prices
rise at 10%, over the year what you can buy with your £ 1.15 has fallen, the real
rate of return is only 5%=15%-10%. When you lend the money you do not know
what the rate of in‡ation will be. In many cases the expected rate of in‡ation
can be approximated by the current rate of in‡ation, which you know, so the
real interest rate is often measured as the nominal interest rate minus the current
rate of in‡ation. In 1919 the real interest rate was negative because in‡ation was
higher than the nominal interest rate, subsequently with quite high nominal rates
and de‡ation (negative in‡ation) real interest rates became very high.
    The combination of sharply reduced military spending and high real interests
rate caused de‡ation (falling prices), falling output, rising unemployment and
after 1920 a strengthening of the exchange rate. The Chancellor of the Exchequer,
Winston Churchill returned sterling to the gold standard at its pre-war parity in
1925. Keynes blamed this policy for the depression of the early 1920s.




                                        60
9.3. Prices and Quantities, Real and nominal variables
Suppose that a …rm buys 2 million barrels of oil in 2003 at $35 a barrel and one
million in 2004 at $40 a barrel, we can denote the price in 2003 as Pt , and the
price in 2004 as Pt+1 both measured in dollars: Similarly the quantities are Qt and
Qt+1 , both measured in million barrels. Total expenditure on oil in each year is
Et = Pt Qt and Et+1 = Pt+1 Qt+1 , both measured in million dollars:

                                      P Q E
                                  t   35 2 70
                                t + 1 40 1 40

The change in expenditure from $70m to $40m, re‡ects both a 14.3% increase
in price and a 50% fall in quantity. Notice that we need only two of the three
pieces of information in the table for each year. Above knowing price and quantity
we could work out expenditure. If we knew expenditure and quantity we could
always work out price as Pt = Et =Qt : If we knew expenditure and price, we could
work out quantity as Qt = Et =Pt :
    Often we work with logarithms, where the proportionate change in expenditure
can be decomposed into the sum of proportionate changes in price and quantity

                   ln Et = ln Et ln Et 1
                         = (ln Pt + ln Qt ) (ln Pt 1 + ln Qt 1 )
                         = (ln Pt ln Pt 1 ) + (ln Qt ln Qt 1 )
                         =    ln Pt + ln Qt

Notice that the formulae would be more complicated if we worked with the original
values

     Et =     Pt Qt Pt 1 Qt 1
        =     (Pt 1 + Pt )(Qt 1 + Qt ) Pt 1 Qt 1
        =     Pt 1 Qt 1 + Pt 1 Qt 1 + Qt 1 Pt 1 + Pt 1 Qt 1           P t 1 Qt 1
        =     Pt 1 Qt 1 + Qt 1 Pt 1 + Pt 1 Qt 1 :

The change in quantity measured at last years prices, plus the change in prices
measured at last years quantities plus an interaction term. The easiest way to
present this is on a graph with price and quantity on the two axes. Revenue is
then the area of the rectangle, price times quantity. Draw the two rectangles for

                                        61
years t and t 1: The di¤erence between their areas will be made up of the three
components of the …nal equation.
    Most of the time, we are not dealing with a single good, but with aggregates
of goods, so that total expenditure is the sum of the prices times the quantities of
the di¤erent goods, i = 1; 2; :::; N whose prices and quantities change over time.
                                           X
                                           n
                                    Et =         pit qit :
                                           i=1

This is like your supermarket receipt for one week, it lists how much of each item
bought at each price and the total spent. To provide a measure of quantity, we
hold prices constant at some base year, 0; say 2000 and then our quantity or
constant price measure is
                                        Xn
                                 Qt =      pi0 qit :
                                           i=1

    Monetary series can be either in nominal terms (in the current prices of the
time, like expenditures) or in real terms (in the constant prices of some base year
to correct for in‡ation, to measure quantities). To convert a nominal series into
a real series it is divided by a price index. So if we call nominal GDP Et and
real GDP Qt , and the price index Pt then Et = Pt Qt : So given data on nominal
(current price) GDP and a price index we can calculate real (constant price) GDP
as Qt = Et =Pt ; where Pt is the value of a price index. Alternatively if we have
data on current price (nominal) and constant price (real) GDP, we can calculate
the price index (usually called the implicit de‡ator) as the ratio of the current to
constant price series: Pt = Et =Qt :
    Most statistical sources only give two of the three of the possible series, nom-
inal, real, price, assuming (somewhat implausibly) that users will know how to
calculate the third from the other two.

9.4. Price Indexes
Suppose we wish to measure how the prices of a set of goods, i = 1; 2; :::; N have
moved over time, t = 0; 1; 2; :::; T; (e.g. 1990,1991,1992). We observe the prices,
pit and quantities, qit of each good in eachP  year. Total expenditure on all goods
in year t, e.g. current price GDP, is Et = N    i=1 pit qit : We could also express this




                                           62
as an index, relative to its value in some base year:
                                        PN
                                    I         pit qit
                                  Et = PNi=1
                                          i=1 pi0 qi0

here the index would be 1 in the base year, usually they are all multiplied by 100
to make them 100 in the base year. If the base is 100, then EtI 100 gives the
percentage change between the base year and year t. Index numbers are ‘unit
free’. This is an expenditure index.
    A constant price series would measure quantities all evaluated in the same
base year prices. Suppose we used year zero, then the constant price measure of
quantity would be
                                       X
                                       N
                                  Qt =    pi0 qit :
                                         i=1

Constant price GDP was a measure of this form, where the base year was changed
every …ve years or so. Recently this …xed base approach has been relaced by a
moving base called a chain-weighted measure.
   We can construct a price index as the ratio of the expenditure series to the
constant price series (in the case of GDP, this would be called the GDP de‡ator)
                                          PN
                                1    Et     i=1 pit qit
                              Pt =      = PN            :
                                     Qt     i=1 pi0 qit

It measures prices in year t relative to prices in year zero, using quantities in year
t as weights. Where t = 0, Pt1 = 1. The index always equals 1 (or 100) in its base
year. This is a price index.
    We could also use quantities in year zero as weights, and this would give a
di¤erent price index.                   PN
                                    2      i=1 pit qi0
                                 Pt = PN                 :                       (9.1)
                                          i=1  p i0 q i0

Notice that these will give di¤erent measures of the price change over the period
0 to t. In particular, for goods that go up (down) in price, quantities in year
t are likely to be lower (higher) than in year 0. Indexes that use beginning of
the period values as weights are called Laspeyres indexes, those that use end of
period values are called Paasche indexes. There are a range of other ways we could
calculate price indexes; chain indexes use moving weights. Apart from the problem
of choosing an appropriate formula, there are also problems of measurement; in

                                         63
particular, measuring the quantities of services supplied, accounting for quality
change and the introduction of new goods. Barrow Chapter 10 discusses index
numbers.
    You will often …nd that you have overlapping data. For instance, one edition
of your source gives a current price series and a constant price series in 1980
prices for 1980 to 1990; the second gives you a current price series and a constant
price series in 1985 prices for 1985 to 1995. This raises two problems. Firstly the
current price series may have been revised. Use the later data where it is available
and the earlier data where it is not. Secondly, you have to convert the data to
a common price basis. To convert them, calculate the ratio in 1985 (the earliest
year of the later source) of the 1985 constant price series to the 1980 constant
price series; then multiply the earlier 1980 price series by this ratio to convert
the 1980 constant price series to 1985 constant prices. If the two estimates of the
current price series for 1985 were very di¤erent, you would also have to adjust for
the ratio of the current price series.

9.4.1. Example Substitution
In 2000 a company bought 10 computers at £ 2000 each and 20 software licenses
at £ 1000 each. In 2001 it bought 20 computers at £ 1000 each and 10 software
licenses at £ 2000 each.
    (a) What were its total computing costs in each year?
    (b) What would have been its total computing costs in each year (i) if it had
bought the 2000 quantities (ii) if it had bought the 2001 quantities?
    (c) Use the estimates in (b) to calculate two measures of in‡ation (i) using
2000 quantities as weights and (ii) using 2001 quantities as weights.
    (d) Comment on your results.
    Answer
    This example is a little extreme to indicate the e¤ects substitution can have
on the measurement of in‡ation.
    (a) Total expenditure was £ 40,000 in both years: 2000=(10 2000+20 1000);
2001=(20 1000 + 10 2000).
    (b) (i) Using 2000 quantitities and 2000 prices, expenditure in 2000 would have
been £ 40,000, which it was. Using 2000 quantities and 2001 prices expenditures
in 2001 would have been (10 1000 + 20 2000)= 50,000 (ii) Similarly using 2001
quantities, 2000=50,000 and 2001=40,000
    (c) Using 2000 quantities as weights in‡ation is 25%=100(50,000/40,000-1) ,


                                        64
using 2001 quantities as weights in‡ation is –20% =100(40,000/50,000-1).
   (d) Because of demand responses to price (the …rm bought more hardware
which had fallen in price and less software which had risen in price), base weighted
measures tend to overestimate in‡ation (+25%) and terminal weighted measures
tend to underestimate it (-20%). The truth lies somewhere in between.

9.4.2. CPI and RPI
There are a lot of di¤erent price indexes. In the past the Bank of England had a
target for in‡ation in the Retail Price Index excluding mortgage interest payments
(which go up when interest rates are raised) RPIX of 2.5%. In 2004 this was
replaced by a 2% target for in‡ation in the Consumer Price Index, CPI. This
was previously known as the Harmonised Index of Consumer Prices HICP, the
standard European index. In August 2003 RPIX was 2.9%, CPI 1.3%, most
of the di¤erence accounted by the high rate of UK housing in‡ation, while in
May 2009 the CPI was at +2.2% and the RPI at -1.1%, de‡ation, not in‡ation,
because of falling house prices. The RPI and CPI measure consumer prices, the
GDP de‡ator, another price index used in section 7.7, measures prices in the whole
economy.
    There are three main di¤erences between the CPI and RPI: CPI excludes
owner occupied housing, RPI includes it; they use di¤erent formulae and their
target populations are slightly di¤erent, the RPI excludes the very rich and very
poor. The formula e¤ect was thought to contribute about 0.5% to the di¤erence
though this has increased to almost 1% recently. Consider the Laspeyres price
index, Pt2 above (9.1)
      PN                                                           !
                       XN                 XN                           XN
         i=1 pit qi0         pit qi0          pit       pi0 qi0            pit
Pt = PN              =     PN           =            PN              =         wi0 :
         i=1 pi0 qi0   i=1  i=1 pi0 qi0   i=1
                                              pi0      i=1 pi0 qi0     i=1
                                                                           pi0

The term pit =pi0 is called a price relative and wi0 is the share of good i in total
expenditure in year zero. So the price index is a weighted average of price relatives.
Here pit would be a category like clothing, wi0 the share of expenditure on clothing.
But one needs to average the prices of all the di¤erent items of clothing, where you
do not have expenditure weights, to get what are called elementary aggregates,
EAs. There are 3 widely used methods of averaging: (a) arithmetic mean of price
relatives (Carli) used for 35% of EAs in the RPI (b) ratio of arithmetic means of
prices (Dutot) used for 55% of EAs in the RPI and 30% of EAs in the CPI (c)
the geometric mean of price relatives (Jevons) which is identical to the ratio of

                                         65
geometric mean prices, used for 70% of the EAs in the CPI. The names are of
people who developed them. The formulae are
                                    X
                                    n
                                          pjt
                        Ia =                      =n
                                    j=1
                                          pj0
                                   P
                             b        pjt =n
                         I       = P
                                     pj0 =n
                                   v                    qY
                                   u n                  n
                                   uY pjt                     pjt
                         I   c
                                 = t
                                   n
                                                       = qY
                                     i=1
                                            pj0         n
                                                              p0t

Methods (b) and (c) tend to give quite similar results, method (a) can give very
di¤erent ones particularly when the variance of prices is large. Method (a) is
prohibited by the EU regulations that govern construction of the CPI and most
of the formula di¤erence between RPI and CPI comes from the use of method (a)
in the RPI. Method (c) tends to deal with substitution, of the sort seen in the
previous example rather better.
    The government is trying to shift indexing to the CPI from the RPI and the
ONS is consulting during 2012-3 on revising the construction of the RPI. Index
linked government debt is linked to the RPI, which raises contractual issues.

9.4.3. Example House Prices
There are a number of di¤erent indexes of house-prices, which can show very
di¤erent trends. A major di¤erence is the stage of the transaction at which they
measure the price. Some measure the asking price of houses put on the market.
This provides early information, but they may sell for more or less than the initial
asking price. The Building Society series are based on mortgage approvals, again
this may not re‡ect the …nal price and about 25% of houses are paid for in cash and
are not captured in these series since their purchase does not require a mortgage.
Other series use surveys of completions (when the sale is completed). The Land
Registry …gure is based on when the transaction is registered, and covers the …nal
price for all housing transactions. The gap between the house being put on the
market and the transaction registered can be over six months. The indexes also
di¤er in (a) whether they adjust for the mix of transactions; in unadjusted series
average price will jump if there is the sale of a very expensive house (b) how often
they are published and how long it takes to publish the data (c) whether they

                                           66
are seasonally adjusted. House prices are usually compared to average earnings,
with a normal 20th century UK ratio about 3.5. In the 21st century the ratio rose
higher than any previous peak, before dropping back.

9.4.4. Example Stock market indexes
See section 8 for the measurement of the returns on equities using the Standard
& Poors (S&P) index. Here we will consider the measurement of average market
return.
    The most obvious de…nition of the value of the stock market is the total value
of all the stocks quoted (the sum
                                PNover …rms of the price per share times the number
of shares issued by the …rm) i=1 Vit , where there are N …rms, with values Vit .
This is scaled by the value in some base year to construct an index. This is
how the S&P 500 is calculated. On this measure between t = 0; (31/3/00) and
t = T; (31/7/03) the S&P index fell 30.5%:
                             PN           PN
                               i=1 ViT        i=1 Vi0
                      R1 =         PN                 =   0:305:
                                      i=1 V i0

   An alternative measure is to take the average of the returns on the individual
stocks:
                              XN
                                    ViT Vi0
                       R2 =       (         )=N = 0:12:
                              i=1
                                       Vi0

Over the same period this measure shows an increase of 12%. A third measure,
using a geometric average shows a fall of 18% (New York Times 31/8/03 B6).
   R2 is an equally weighted average of the individual stock’s returns, R1 is
weighted by their size. To see this note that
                              PN               "          #
                                     ViT
                                           XN
                                                  V iO      ViT
                    1 + R1 = Pi=1N
                                         =       PN
                                 i=1 Vi0   i=1    i=1 Vi0
                                                            Vi0

where the terms in [::] are the weights, the share of the market accounted for by
…rm i, in the base year. In 1 + R2 each of the weights is just 1=N:
    Most indexes are weighted by market capitalisation, but other forms of weight-
ing are becoming more widespread, e.g. ‘fundamental indices’, which use measures
like the …rms revenues.


                                         67
9.4.5. Example Index linked weapons contracts
Weapons procurement contracts often cover long periods, because it takes many
years to develop and get them into production. Euro…ghter/Typhoon, which
only entered service in 2004, was started in the early 1980s. In such contracts
it is common to link the agreed price to in‡ation, the issue then becomes which
index to use. On the EH101 helicopter, the prime contractor, IBM at the time
proposed a simple materials and fuels index (essentially an output price index).
The UK Ministry of Defence insisted on the use of a combined costs index re‡ecting
input costs including labour. Because of productivity growth output price indexes
grow more slowly than input cost indexes. The National Audit O¢ ce, in its
report Accounting for In‡ation in Defence Procurement, para 2.25, December
1993, calculated that had the MOD used the index suggested by IBM, rather
than the one it had insisted on, it could have saved itself £ 95 million or about 6%
of the contract price over the lifetime of the contract. This particular over-spend
got very little publicity because most journalists and MPs, like ASE students,
tend to fall asleep once index numbers are mentioned.
    To see the relation between prices and wages, write the total value of sales
(price times quantity) as a markup on labour costs, wages times number employed
                               Pt Qt = (1 + )Wt Et
prices are then a mark-up on unit labour costs
                              Pt = (1 + )Wt Et =Qt
and noting that productivity is output per worker Qt =Et
                      ln Pt = ln(1 + ) + ln Wt     ln(Qt =Et )
so if mark-ups are constant, output price in‡ation is the rate of growth of wages
minus the rate of growth of productivity:
                           ln Pt =   ln Wt       ln(Qt =Et )



10. Probability
10.1. Introduction
We need to analyse cases where we do not know what is going to happen: where
there are risks, randomness, chances, hazards, gambles, etc. Probabilities provide

                                        68
a way of doing this. Some distinguish between (a) risk: the future is unknown
but you can assign probabilities to the set of possible events that may happen;
(b) uncertainty: you know the set of possible events but cannot assign proba-
bilities to them; and (c) unawareness where you cannot even describe the set of
possible events, what US Defense Secretary Donald Rumsfeld called the unknown
unknowns, the things you do not even know that you do not know about. People
seem to have di¢ culty with probabilities2 and it is a relatively recent branch of
mathematics, nobody seems to have regarded probabilities as things that could
be calculated before about 1650 (after calculus) and the axiomatic foundations of
probability theory were only provided in the 1930s by the Russian m athematician
Kolmogorov.
    Probabilities are numbers between zero and one, which represent the chance
of an event happening. Barrow chapter 2 discusses them. If an event is certain
to happen, it has probability one; if an event is certain not to happen, it has
probability zero. It is said that only death and taxes are certain, everything
else is uncertain. Probabilities can either represent degrees of belief, or be based
on relative frequency, the proportion of times an event happens. So if in past
horse races the favourite (the horse with the highest probability, the shortest odds
o¤ered by bookmakers) won a quarter of the time, you might say the probability of
the favourite winning was 0.25; this is a relative frequency estimate. Alternatively
you could look at a particular future race, study the history (form) of the horses
and guess the probability of the favourite in that race winning, this is a degree of
belief estimate. You bet on the favourite if your estimate of the probability of the
favourite winning is greater than the bookmakers estimate, expressed in the odds
o¤ered; the odds are the ratio of the probability to one minus the probability.
There is a large literature on the economics and statistics of betting. Notice that
although the probabilities of the possible events should add up to one (it is certain
that some horse will win the race), the implied probabilities in the odds o¤ered
by bookmakers do not. That is how they make money on average. There are also
systematic biases. For instance, the probability of the favourite winning is usually
slightly better than the bookmaker’s odds suggest and the the probability of an
outsider slightly worse. This favourite-longshot bias has been noted for over 60
years in a variety of horse-races, but its explanation is still subject to dispute.
    If you throw a dice (one dice is sometimes known as a die) there are six possible
outcomes, 1 to 6, and if the die is fair each outcome has an equal chance; so the
probability of any particular number is 1/6. On one throw you can only get one
  2
      D. Kahneman, Thinking, fast & slow, Penguin 2011, discusses these di¢ culties.


                                               69
number, so the probability of getting both a 3 and a 4 on a single throw is zero,
it cannot happen. Events which cannot both happen (where the probability of
both happening is zero) are said to be mutually exclusive. For mutually exclusive
events, the probability of one or the other happening is just the sum of their
probabilities, so the probability of getting either a 3 or a 4 on one throw of a dice
is 1/6+1/6=2/6=1/3.
    Suppose two people, say A and B, each throw a dice the number B gets is
independent of the number A gets. The result of A’s throw does not in‡uence B’s
throw. The probability of two independent events happening is the product of
their probabilities. So the probability of both A and B getting a 3 is 1=6 1=6 =
1=36. There are 36 (62 ) possible outcomes and each are equally likely. The 36
outcomes are shown in the grid below, with the six cases where A and B get an
equal score shown in bold. So there is a probability of 6=36 = 1=6 of a draw. We
can also use the grid to estimate the probability of A getting a higher score than
B. These events correspond to the 15 events above the diagonal, so the probability
of A winning is 15=36 = 5=12; the probability of B winning is also 5=12 and the
probability of them getting an equal score, is 1=6 = 2=12: Notice the 3 events (A
wins, B wins, a draw) are mutually exclusive and their probabilities sum to one,
12=12.
                   A
            1 2 3 4 5 6
         1 x x x x x x
         2 x x x x x x
     B 3 x x x x x x
         4 x x x x x x
         5 x x x x x x
         6 x x x x x x
    When events are not mutually exclusive, one has to allow for the probability of
both events happening. This seems to have been …rst pointed out by Bernouilli in
his Ars cojectandi in 1713, with a gruesome example. "If two persons sentenced
to death are ordered to throw dice under the condition that the one who gets the
smaller number of points will be executed, while he who gets the larger number
will be spared, and both will be spared if the number of points are the same,
we …nd that the expectation of one of them is 7/12. It does not follow that the
other has an expectation of 5/12, for clearly each of them has the same chance,
so the second man has an expectation of 7/12, which would give the two of them
of them an expectation of 7/6 of life, i.e. more than the whole life. The reason


                                         70
is that there is no outcome such that at least one of them is not spared, while
there are several in which both are spared."3 A will win 5=12 times, draw 2=12
times, so survives 7=12 times. Similarly for B. The probability of at least one
surviving is the sum of the probability of each surviving minus the probability of
both surviving: 5=6+5=6 1=6 = 1. The probability of both has to be substracted
to stop double counting. Check that the probability of getting either a 3 or a 4
on two throws of a dice is 1=3 + 1=3 1=9 = 20=36: Notice this is di¤erent from
the probability of getting either a 3 or a 4 on both throws of the dice, which
is (1=3)2 = 1=9: You must be careful about exactly how probability events are
described.

10.2. Some rules
Denote the probability of event A happening as P (A): Then the probability of
event A not happening is 1 P (A): This is called the complement of A, sometime
written A. If event A is certain to happen P (A) = 1: If event A cannot happen
P (A) = 0: Denote both events A AND B happening as P (A \ B) (the inter-
section); this is often known as the joint probability. If the events are mutually
exclusive they cannot happen together so P (A \ B) = 0: Denote the probability of
event A OR event B happening as P (A [ B) (the union). Then as we saw above
with the dice:
                      P (A [ B) = P (A) + P (B) P (A \ B):
The probability of A or B equals the probability of A plus the probability of B
minus the probability of both A and B happening. Notice that if the events are
mutually exclusive, P (A \ B) = 0 so P (A [ B) = P (A) + P (B): If the events are
independent the joint probability, i.e. the probability of both happening; is

                                P (A \ B) = P (A)      P (B):

   The probability of A happening given that event B has happened is called a
conditional probability and is given by:
                                                P (A \ B)
                                  P (A j B) =             :                  (10.1)
                                                  P (B)
Below we will calculate the probability of winning the jackpot in the lottery.
Strictly this is a conditional probability: the probability of an event A (winning
  3
      Quoted by Ian Hacking, The emergence of probability, p144, CUP 1975.


                                             71
the jackpot), given event B (buying a lottery ticket). Winning the jackpot and
not buying a ticket are mutually exclusive events. Conditional probabilities play
a very important role in decision making. They tell you how the information that
B happened changes your estimate of the probability of A happening. If A and
B are independent P (A j B) = P (A); knowing that B happened does not change
the probability of A happening: Similarly, the probability of B happening given
that A happens is:
                                          P (A \ B)
                              P (B j A) =           :                      (10.2)
                                            P (A)
   Multiply both sides of (10.1) by P (B) and both sides of (10.2) by P (A); and
rearrange to give

                   P (A \ B) = P (A j B)P (B) = P (B j A)P (A)

the joint probability is the product of the conditional probability and the marginal
probability in each case. Using the two right hand side relations gives Bayes
Theorem:
                                          P (B j A)P (A)
                             P (A j B) =                 :
                                              P (B)
This formula is widely used to update probabilities of an event A, in the light of
new information, B: In this context P (A) is called the prior probability of A,
P (B j A) is called the likelihood, and P (A j B) is called the posterior probability.
    Statistics tends to divide into the approach this course emphasises, called
classical or frequentist, and Bayesian statistics. A very readable account of the
development of Bayesian statistics is Sharon Bertsch McGrayne, The theory that
would not die: how Bayes rule cracked the enigma code, hunted down Russion
submarines & emerged triumphant from two centruries of controversy, Yale Uni-
versity Press 2011.

10.2.1. Example: Screening
There is considerable controversy about the value of screening for diseases like
breast cancer, prostate cancer or HIV. These are cases where the disease is not
apparent but may be revealed by a test, which may not always give the correct
answer. Call D having the disease, N not having the disease, with probabilities
P (D) and P (N ) where P (D) + P (N ) = 1. Call T P the test showing positive
(suggesting that you have the disease), T N the test showing negative (suggesting
that you do not have the disease). In medical terminology the probability of the

                                         72
test showing positive given that you have the disease P (T P j D) is called the
sensitivity of the test. The probability of the test showing negative given that you
do not have the disease P (T N j N ) is called the speci…city of the test. Both are
about 0.9 for a mamogram for breast cancer, and the higher they are the better.
The probability of testing positive when you do not have the disease P (T P j N ) =
1 P (T N j N ) is called the probability of a false positive. The probability of
testing negative when you do have the disease, P (T N j D) = 1 P (T P j D) is
the probability of a false negative. The fact that a decision can lead to two sorts
of error, false positives and false negatives in this case, appears under a variety of
di¤erent names in many areas.
    Question
    Suppose there is a disease which 1% of the population su¤er from P (D) = 0:01:
There is a test which is 99% accurate, i.e. 99% of those with the disease test
positive and 99% of those without the disease test negative: P (T P j D) = P (T N j
N ) = 0:99: Suppose you test positive, what is the probability that you do have
the disease?
    Answer
    It is often simpler and clearer to work with numbers rather than probabilities
and present the results as numbers. This is also often more useful for non-specialist
audiences. Imagine a population of one hundred thousand: 100,000. Then a
thousand (1000 = 0:01 100; 000) have the disease and 99,000 are healthy. Of
those with the disease, 990 (0:99 1000) test positive, 10 test negative. Of those
without the disease, 990 (0:01 99; 000) also test positive, 98010 test negative.
Of the 2 990 = 1980 people who test positive, half have the disease, so the
probability of having the disease given that you tested positive is 50%. Thus you
should not worry too much about a positive result. A negative result is reassuring
since only 10 out of 98020, who test negative have the disease. Positive results
are usually followed up with other tests, biopsies, etc.
    We could represent the joint and marginal frequencies as a table.
             D      N
     T P 990        990      1,980
     T N 10         98,010 98020
             1,000 99,000 100,000
    We could also calculate the conditional probability directly using Bayes The-
orem and noting that P (T P ) = P (T P j D)P (D) + P (T P j N D)P (N D);
                         P (T P j D)P (D)           0:99 0:01
        P (D j T P ) =                    =                              = 0:5
                              P (T P )      0:99    0:01 + 0:01   0:99

                                         73
In practice screening is con…ned to groups where P (D) is high to avoid this prob-
lem. The decision to establish a screening program depends on a judgement of
the balance between (a) the bene…ts of detecting the disease, for instance if early
treatment saves lives, (b) the costs of false positives such as inappropriate treat-
ment, worry etc. and (c) the cost of testing, including time o¤ work to take
the test. Since people disagree about these costs and bene…ts, screening is con-
troversial. For instance, there is a test for an indicator of prostate cancer, PSA.
The British Medical Association say "two-thirds of men with high PSA do not
have prostate cancer, some men with prostate cancer do not have high PSA and
no evidence exists to show whether treating localised prostate cancer does more
harm than good". There is a pro…table private industry in screening tests.

10.2.2. Example Innovation
Suppose that there is a survey of 1; 000 …rms. Of these 500 report introducing
a new product in the previous year, 400 report introducing a new production
process and 350 report having introduced both a new product and a new process.
    (a) What is the probability that a …rm has done no innovation: neither intro-
duced a new product nor a new process?
    (b) Are the probabilities of introducing a new product and a new process
independent?
    (c) What is the conditional probability of introducing a new product given
that the …rm introduced a new process?
    (d) What is the conditional probability of introducing a new process given that
the …rm introduced a new product?
    Answers
    (a) There were 550 innovators: 350 did both, 150 just product, 50 just process.
Thus 450 did not innovate so the probability of not innovating was 0:45 = 1
(0:5 + 0:4 0:35): Formally if event A; is make a product innovation, P (A) = 0:5;
event B; make a process innovation, P (B) = 0:4: and the probability of doing
both, P (A \ B) = 0:35: For the event not making an innovation, P (N )
            P (N ) = 1   P (A [ B) = 1    (P (A) + P (B)    P (A \ B))
Notice the categories innovator, 550; and non-innovator 450 are mutually exclu-
sive, the probability of being both an innovator and a non-innovator is zero by
de…nition.
    (b) If they were independent the product of the probability of product inno-
vation times the probability of process innovation would give the probability of

                                         74
doing both: P (A)P (B) = P (A \ B). In this case 0:5 0:4 = 0:2 which is much
less than 0:35, so they are not independent. You are more likely to do a second
type of innovation if you have already done one type.
    (c) The probability of doing product innovation conditional on process inno-
vation is the probability of doing both divided by the probability of doing process
                                   P (A \ B)   0:35
                     P (A j B) =             =      = 0:875
                                     P (B)     0:4
87.5% of process innovators also introduce a new product.
    (d) The probability of doing process conditional on doing product is the prob-
ability of doing both divided by the probability of doing product:
                                     P (A \ B)   0:35
                       P (B j A) =             =      = 0:7
                                       P (A)     0:5
70% of product innovators also introduce a new process. Notice that the answers
to (c) and (d) are di¤erent.

10.2.3. Background Example: Hit and Run
Two cab companies operate in a city, 85% are green, 15% are blue. A cab hit
a pedestrian at night and drove away. The person who had been hit said they
thought the cab was blue. Subsequent tests showed that the person could correctly
identify the color of a cab at night 80% of the time. What is the probability that
the person was hit by a blue cab?
    Answer.
    We know the proportion of blue B and green G cabs are P (B) = 0:15; P (G) =
0:85: We know that the probability of the person reporting that it is blue RB
given that it is blue is P (RB j B) = 0:8 and from this the probability of wrongly
reporting that it is blue P (RB j G) = 0:2: What we need to know is the probability
that it was blue given that they report it is blue P (B j RB): The probability of
the person reporting a blue cab is the probability of them seeing a blue cab times
the probability of reporting it as blue plus the probability of seeing a green cab
times the probability of wrongly reporting the cab as blue:
    P (RB) = P (B) P (RB j B)+P (G) P (RB j G) = 0:15 0:8+0:85 0:2 = 0:29:
    We have all the terms needed to apply Bayes Theorem
                            P (RB j B) P (B)   0:8 0:15
             P (B j RB) =                    =          = 0:41
                                 P (RB)           0:29

                                         75
The report that the cab was blue increases the probability that the cab was
blue from the unconditional prior probability of 0:15 to the conditional posterior
probability of 0:41; but it is still a lot less than 0:8:
   In this case we knew the prior probabilities, the proportion of blue and green
cabs, that we used to adjust the report. In other cases where people report events
we do not know the prior probabilities, e.g. when 15% of people in California
report having being abducted by aliens.

10.2.4. Background Example: Lost H bomb
In 1966 a B52 crashed with an air-tanker while refueling at 30,000 feet o¤ the
coast of Palomares Spain, losing its four H bombs. Three were recovered quickly,
the fourth was somewhere on the seabed. The US Navy constructed a map of the
seabed, then got a group of various experts to bet on di¤erent scenarios that might
have happened, (e.g. the bomb had two parachutes, the scenarios might be (i)
both opened, (ii) one opened, (iii) none opened). Each scenario left the weapon
in a di¤erent location. They then used Bayes theorem to combine the experts
di¤erent subjective estimates of the probability (derived from the bets) to work
out the (posterior) probability of the bomb being at each location. The highest
probability location was far from where the other three bombs or the wreckage of
the B52 were found. Fortunately the bomb was there. This account comes from
Blind Man’s Bu¤ S. Sontag and C. Drew, Harper Paperbacks, 1999, which gives
various other examples of the use of Bayes theorem in submarine warfare, though
some of the details are disputed by McGrayne cited above.



11. Discrete Random Variables
Above we dealt with events where the outcomes are uncertain, now we want to
consider how we apply probability to variables where we are uncertain what values
they will take. These are called random variables. Forecasting involves estimating
future values of random variables and should provide not only an estimate “our
central forecast of CPI in‡ation in two years is 2.0%”, but also an indication of
the likely uncertainty “and we are 90% certain that it will lie between 1.0% and
3.0%”. In‡ation is a continuous random variable, it can take any value. We will
begin with discrete random variables. Barrow discusses Random variables at the
beginning of chapter 3.


                                        76
    A discrete random variable, X can take a number of distinct possible values,
say x1 ; x2 ; ::; xN : with probabilities p1 ; p2 ; :::; pN : The observed values are called
the realisations of the random variable. For instance, X the total obtained from
throwing two dice is a discrete random variable. It can take the values 2 to 12.
After you throw the dice, you observe the outcome, the realisation, a particular
number, xi . Associated with the random variable is a probability distribution,
pi = f (xi ); which gives the probability of obtaining each of the possible outcomes
the random variable can take. The cumulative probability distribution,
                                       j
                                       X
                           F (xj ) =         f (xi ) = P (X   xj )
                                       i=1

gives the probability of getting a value less than or equal to xj : So in the dice
case:
     xi f (xi ) F (xj )
      1    0        0
      2 1=36 1=36
      3 2=36 3=36
      4 3=36 6=36
      5 4=36 10=36
      6 5=36 15=36
      7 6=36 21=36
      8 5=36 26=36
      9 4=36 30=36
     10 3=36 33=36
     11 2=36 35=36
     12 1=36 36=36
    Make sure that you can calculate all the probabilities, use the 6x6 grid in
section 10.1 if necessary. Notice f (1) = 0; it is impossible to get 1; and F (12) = 1;
you are certain to get a value less than or equal to 12. f (7) = 6=36, because there
are six di¤erent ways of getting a 7: (1,6), (6,1), (2,5), (5,2), (3,4), (4,3). These
are the diagonal elements
                  P           (running from bottom left to top right) in the grid above
in section 10.1.      f (xi ) = 1: This is always true for a probability distribution.
This probability distribution is symmetric with mean=median=mode=7.
    The mathematical expectation or expected value of a random variable (often
denoted by the Greek letter mu) is the sum of each value it can take, xi ; multiplied



                                               77
by the probability of it taking that value pi = f (xi ) :

                                          X
                                          N
                               E(X) =            f (xi )xi = :                             (11.1)
                                           i=1

The expected value of the score from two throws of a dice is seven; calculated as
                             1           2                  3               1
                    7=2         +3          +4                ::::: + 12       :
                             36          36                36               36
If all the values are equally likely, f (xi ) = 1=N , so the expected value is the
arithmetic mean.
    The variance of a random variable is de…ned as
                                                     X
                                                     N
                                            2
                V (X) = E(X        E(X)) =                 f (xi )(xi      )2 =    2
                                                                                       :   (11.2)
                                                     i=1

If f (xi ) = 1=N this is just the same as the population variance we encountered
in descriptive statistics, section 6.1.2: This is the same formula that we used in
section 6.2 with f (xi ) = pi : In the dice example, the variance is 5.8 and the
standard deviation 2.4.
    Suppose that there are two random variables X and Y with individual (mar-
ginal) probabilities of f (xi ) and f (yi ) and joint probabilities f (xi ; yi ): The joint
probability indicates the probability of both X taking a particular value, xi ; and
Y taking a particular value, yi ; and corresponds to P (A \ B) above. So if X is
the number on the …rst dice and Y is the number on the second dice

                         f (6; 6) = P (X = 6 \ Y = 6) = 1=36

If the random variables are independent, then the joint probability is just the
product of the individual probabilities as we saw above

                                 f (xi ; yi ) = f (xi )f (yi )

and if they are independent, the expected value of the product is the product of
the expected values
                             E(XY ) = E(X)E(Y ):
                                 P
Expected values behave like N 1 : So if a is a constant E(a) = a: If a and b are
constants E(a + bxi ) = a + bE(xi ):

                                                78
   The Covariance between two random variables is

                     Cov(X; Y ) = E[(X          E(X))(Y      E(Y ))]:

If f (xi ) = 1=N this is

                                        1 X
                                            N
                           Cov(X; Y ) =       (xi    x)(yi     y):
                                        N i=1

as we saw in section 6.1.3. If the random variables are independent the covariance
is zero. However, a covariance of zero does not imply that they are independent,
independence is a stronger property.

11.0.5. Background Example The Lottery
In the UK lottery six numbers are randomly chosen from 49 possible numbers.
Over the long-run the expected value of playing the lottery is 55p : you pay
them £ 1 and they pay out 45p in prizes for every pound they take in. The 55p
you lose, on average, goes on tax, good causes and their costs and pro…ts. You
win the jackpot if you match all six numbers, though not necessarily in the order
drawn. Order the numbers from the smallest to the largest. For the …rst number
you chose there are six chances of getting it (six draws). So the probability of
your …rst number coming up is 6=49: To get your second number, you only have
…ve chances (your …rst number has been drawn leaving 48 remaining numbers),
so it is 5=48: Similarly the third is 4=47; fourth is 3=46; …fth is 2=45; sixth is 1=44:
The probability of getting all 6 is the product of these probabilities
                 6      5       4     3       2      1            720
                                                          =
                49     48       47    46     45     44        10068347520
this is a 1 in 13; 983; 816 chance, 1 in 14 million. Notice that low probability events
are not necessarily rare, it depends on the population exposed to them. Winning
the jackpot is a low probability event for any particular person, but it happens to
someone almost every week. Always check the time horizon that the probability
applies to. Someone shouting “we are all going to die”is not very worrying, since
that is certainly true eventually, though if they mean in the next …ve minutes, it
may be more worrying.
    The usual formula for calculating the lottery is the number of ways in which a
group of r objects (in this case 6) can be selected from a larger group of n objects

                                           79
(in this case 49) where the order of selection is not important. It is just the inverse
of the formula above.

                 n              n!     49 48 47              46 45 44
                     Cr =            =
                            r!(n r)!     6 5 4               3 2 1

    The expected value of any particular game depends on whether the jackpot
has been increased by being rolled over from previous games where it was not
won. Even if the jackpot is over £ 14m, the expected value may not be positive,
because you may have to share the jackpot with other winners who chose the
same number, (unless you are a member of a gang that bought all the available
tickets and made sure nobody else could buy any tickets). Choosing an unpopular
number, that others would not choose, will not change the probability of winning
but may increase the probability of not having to share the jackpot. For instance,
people sometimes use birthdays to select numbers, so do not choose numbers over
31. You can choose to buy random numbers to avoid this problem. Optimal
design of lotteries raises interesting economic questions.

11.0.6. Background Example: churn
On average a customer is worth £ 20 a month to a mobile phone company. But
the churn rate (the probability of a customer ceasing to subscribe) is 5% a month.
The company’s discount rate is 2% a month. The company wants to know how
much it can subsidise handsets, while keeping the present value of a customer
positive. What is a customer worth to the company?
   Answer
   Call the value per month V; the churn rate p; and the discount rate r: Every
month a proportion of (1 p) continue to the next month. The present value is

                                X
                                1
                                  V (1      p)t    X1
                                                             (1 p)
                                                                       t
                     PV     =                   =V
                                t=0
                                      (1 + r)t     t=0
                                                             (1 + r)
                                                     1
                                          (1 p)
                            = V       1
                                          (1 + r)
                                                         1
                                  1 + r (1          p)
                            = V
                                       1+r
                              (1 + r)V
                            =
                                r+p

                                             80
since this is the sum of a geometric progression in (1   p)=(1 + r) : On these num-
bers
                                      1:02 20
                              PV =              = 291
                                         0:07
a customer is worth £ 291.

12. Continuous random variables
Whereas a discrete random variable can only take speci…ed values, continuous
random variables (e.g. in‡ation) can take an in…nite number of values. Corre-
sponding to the probabilities f (xi ) for discrete random variables there is a prob-
ability density function, pdf; also denoted f (xi ) for continuous random variables
and a distribution function F (xi ) = Pr(X xi ) which gives the probability that
the random variable will take a value less than or equal to a speci…ed value xi :
The Bank of England publishes its estimate of the probability density function
for in‡ation as a fan chart. Since there are an in…nite number of points on the
real line, the probability of any one of those points is zero, although the pdf will
be de…ned for it. But we can always calculate the probability of falling into a
particular interval, e.g. that in‡ation will fall into the range 1.5% to 2.5%. In the
de…nitions of expected value and variance for a continuous random variable we
replace the summation signs in (11:1) and (11:2) for the discrete case by integrals
so
                           Z
               E(X) =         xf (x)dx =
                                               Z
                                          2
               V (X) = E(X E(X)) = (x                    )2 f (x)dx = 2 :

12.1. Uniform Distribution
 The simplest continuous distribution is the uniform The probability density func-
 tion takes equal values over some range (support) a to b: It is zero, f (xi ) = 0
 outside the range and f (xi ) = 1=(b a) within the range. By doing the inte-
 gration you can show the mean of a uniform random variable, E(x) = (a + b)=2
 and its variance is V ar(x) = (b a)2 =12: Thus if the range was a = 0 to b = 1
 E(x) = 0:5; V ar(x) = 1=12; and the standard deviation of x is 0.29. Notice
Rin this case f (x) = 1 over the range of x, but the probabilities sum to unity
   f (x)dx = 1; since the graph of f (x): has height 1; and length 1; so area 1: The
uniform distribution is used in section 14.

                                         81
12.2. The normal distribution
The most common distribution assumed for continuous random variables is the
normal or Gaussian distribution. This has a bell shape.
    One source of normality comes from the central limit theorem. This says that
the distribution of the sample mean will be approximately normal, whatever the
distribution of the original variable and that this approximation to normality will
get better the larger the sample size. This is demonstrated numerically in section
14, where random numbers are drawn from a uniform distribution, but the mean
of many samples is normally distributed.
    The normal distribution is completely de…ned by a mean (…rst moment) and
variance (second centred moment), it has a coe¢ cient of skewness (third standard-
ised moment) of zero and a coe¢ cient of kurtosis (fourth standardised moment)
of three. see section 6. The standard deviation is the square root of the variance.
For a normal distribution roughly two thirds of the observations lie within one
standard deviation of the mean and 95% lie within two standard deviations of the
means.
    Many economic variables, such as income or …rm size, are not normally dis-
tributed but are very skewed and not symmetrical. However, the logarithm of
the variable is often roughly normal. This is another reason we often work with
logarithms of variables in economics.
    Suppose that we have a random variable Y which is normally distributed with
expected value E(Y ) = and variance
                    V (Y ) = E(Y     E(Y ))2 = E(Y        )2 =   2


We write this Y         N ( ; 2 ): If we have an independent sample from this distribu-
tion, Yi ; i = 1; 2; :::; N we write this Yi IN ( ; 2 ): This is said Yi is independent
normal with expected value and variance 2 : Although the expected value of a
normal distribution is often denoted ; we use to establish a link with regression
below.
    If one variable Y is normally distributed with mean ; and variance 2 . Then
any linear function of Y is also normally distributed.
                         Y   N ; 2
                         X = a + bY N a + b ; b2 2
It is b2 because the variance is a squared concept, X has standard deviation
b . So if temperature over a year measured in centigrade is normally distributed,
temperature in Farenheit (which is a linear transformation) is also normal.

                                          82
   Using this we can write
                                     Yi =        + ui
where ui = Yi E(Yi ) = Yi     , and from the rules ui N (0; 2 ) : Decomposing
an observed random variable into its expected value and an error, ui ; is very
convenient for many purposes.
   An important linear function of Y is
                                     Yi
                              zi =                 N (0; 1)

This is called the standard normal, has expected value zero and variance (and
standard deviation) of one (like any standardised variable) and is tabulated in
most statistics and econometrics books. Barrow Table A2 gives the table of 1
F (z) = P (Z > z) for values of z > 0: So from the table in Barrow P (Z > 0:44) =
0:33: Read down the …rst column till 0:4 and then go across the row to the 0:04
column. Since the normal distribution is symmetric P (Z > z) = P (Z < z): So
P (Z < 0:44) = 0:33 also.
    The standard normal is useful because we can always convert from Y to z
using the formula above and convert from z back to Y using

                                     Yi = zi + :

  The distribution has a bell shape and is symmetric with mean=median=mode.
The formula for the normal distribution is
                                  1          1 yi
                      f (yi ) = p              (
                                            expf              )2 g
                                 2    2      2
                                             z2
                      f (zi ) = (2 ) 1=2 exp i
                                              2
where zi = (yi    )= is N (0; 1) standard normal. The normal distribution is the
                                          1=2
exponential of a quadratic. The (2 2 )        makes it integrate (add up) to unity,
which all probability distributions should.

12.2.1. Areas under a normal distribution
For a standard normal distribution, with mean zero and standard deviation one,
the probability that the random variable Z is less than a speci…c value z is given
below for various values of z: Note we give P (Z < z) for values of z > 0 whereas

                                            83
Barrow Table A2 gives P (Z > z) for values of z > 0: There is no standard way to
present areas under the normal distribution, so check how the table you are using
presents it.
      z P (Z < z)
      0       0:5
     0:5    0:6915
      1     0:8413
     1:5    0:9332
      2     0:9772
    Since the normal distribution is symmetric, the probability of being less than
the mean, (corresponding to z = 0) is 0.5, the same as the probability of being
greater than the mean. There is an 84% chance, of getting a value less than
the mean plus one standard deviation, z = 1. The chance of being within one
standard deviation of the mean is P ( 1 < Z < +1) = 0.6826=0.8413-(1-0.8413).
There is a 16% (1-0.84) chance of being less than one standard deviation below
the mean, and a 16% chance or more than one standard deviation above the
mean. The chance of being more than two standard deviations from the mean
is 0.0456=2(1-0.9772), roughly 5%. Strictly 95% of the normal distribution lies
within 1.96 standard deviations from the mean, but 2 is close enough for most
practical purposes.

12.2.2. Example; test scores
Suppose that a maths class is made up of an equal number of Blue and Green
Students. Within each group marks are distributed normally, but blues are better
at maths with a mean of 60 compared to a mean of 55 for green students. Blue
students are also less erratic with a standard deviation of 5 compared to a standard
deviation of 10 for green students.
   (a)What proportion of blue students get more than 70?
   (b) What proportion of green students get more than 70?
   (c) Of those who get over 70 what proportion are green and what proportion
are blue?
   Answer
   We have B N (60; 52 ); G N (55; 102 )
   (a) We want to …nd the probability that the mark is over 70. For Blue students
                                      70        60
                                 z=                  =2
                                           5

                                           84
so the probability of a mark over 70 is P (Z > 2) = 1 P (Z < 2) = 1 0:9772 =
0:0228 or 2.28%. The 0.9772 came from the table of areas under a normal
distribution.
    (b) For Green Students
                                     70 55
                                 z=           = 1:5
                                        10
so the probability of a mark over 70 is P (Z > 1:5) = 1 P (Z < 1:5) = 1
0:9332 = 0:0668 or 6.68%. The 0.9332 came from the table of areas under a
normal distribution.
    (c) In a large class with equal number of blue and green students, 4.48%
of all students, (2.28+6.68)/2, would get over 70. The proportion of those
that are blue is 25% (=2.28/(2.28+6.68)), the proportion that are green is 75%
(=6.68/(2.28+6.68)).
    Even though the question says blues are better at maths and it is true that
their average is higher, three quarters of the top group in maths are green (as
are three quarters of the bottom group). The lesson is to think about the whole
distribution, not just the averages or parts of the distribution (e.g. the top of the
class), and try not to be in‡uenced by value-laden descriptions: ‘better’or ‘less
erratic’.

12.3. Distributions related to the normal
We also use distributions which are functions of normally distributed variables.

12.3.1. Chi-squared
Suppose zi is IN (0; 1), independently distributed, standard normal and we form

                                     X
                                     n
                                A=         zi2   2
                                                     (n)
                                     i=1

Then A is said to have a Chi squared distribution with n degrees of freedom.
Notice the Chi squared is only de…ned over positive values. As well as being
the number of observations less the number of parameters estimated, degrees of
freedom are a parameter of the distribution. The normal distribution has two
parameters, which determine its shape, the mean and the variance. The mean
determined its centre and the variance determined its spread. The Chi-squared
distribution has one parameter, its degrees of freedom, that determines its shape.

                                           85
Its expected value equals its degrees of freedom; its variance equals twice its de-
grees of freedom. For small degrees of freedom the Chi squared distribution is
skewed, for large degrees of freedom it approaches the normal. It arises natu-
rally because we calculate estimates of the variance and (n 1)s2 = 2 has a 2
distribution with n 1 degrees of freedom, where

                                X
                                N
                             2
                            s =   (xi         x)2 =(n    1)
                                  i=1


12.3.2. t distribution
A standard normal divided by the square root of a Chi-squared distribution, di-
vided by its degrees of freedom, say n, is called the t distribution with n degrees
of freedom                                 r
                                               2 (n)
                                 t(n) = z=
                                                n
We often divide an estimate of the mean or a regression coe¢ cient (which are nor-
mally distributed from the central limit theorem) by their standard errors (which
are the square root of a 2 divided by its degrees of freedom) and this is the for-
mula for doing this. The t distribution has fatter tails than the normal, but as the
sample size gets larger, about 30 is big enough, the uncertainty due to estimating
the standard error becomes small and the distribution is indistinguishable from
a normal. It is sometimes called the Student’s t distribution. W.S. Gosset, who
discovered it, worked for Guiness and because of a company regulation had to
publish it under a pseudonym, and he chose Student.

12.3.3. F distribution
Fisher’s F distribution is the ratio of two independent Chi-squared divided by
their degrees of freedom.
                                               2
                                                 (n1 )=n1
                             F (n1 ; n2 ) =    2 (n )=n
                                                          :
                                                   2    2

   It arises as the ratio of two variances.
   Barrow chapter 6 discusses the 2 t and F distributions.




                                         86
13. Economic and Financial Data II: interest rates, growth
    rates, exchange rates, etc
13.1. Interest rates
There are a set of basic rules that apply to a series of di¤erent rates: the rate
of interest, the rate of return, the rate of in‡ation, the rate of growth of GDP
or other variables. We will use rates of interest or return as an example, but the
same rules apply to the others. Suppose we invest £ 100, in 2000, the value of the
asset rises to £ 110 in 2001, £ 121 in 2001, 133.1 in 2002, etc. We can write this
     V0 = 100 V1 = 110 V2 = 121 V3 = 133:1 .
    For other examples, V might be GDP (growth rates), a price index (in‡ation),
etc. The gross rate of return in the …rst year is (1 + r1 ) = V1 =V0 = 1:1: The
(net) rate of return in the …rst year is r1 = (V1 V0 )=V0 = V0 =V1 1 = 0:1;
the percentage rate of return is 100r1 = 10%: Be aware of the di¤erence between
proportionate, 0:1 and percentage, 10%; rates of interest and return. Interest rates
are also often expressed in basis points, 100 basis points is one percentage point.
    From the de…nition of the gross return, (1 + r1 ) = V1 =V0 ; we can write V1 =
(1 + r)V0 : The rate of return in this example is constant at 10%, ri = r = 0:1:
Check this by calculating r2 and r3 : The value of the investment in year 2 is
                            V2 = (1 + r)V1 = (1 + r)2 V0
and for year t
                                  Vt = (1 + r)t V0 :                         (13.1)
Notice how interest compounds, you get interest paid on your interest. Interest
rates are often expressed at annual rates, per annum, p.a., even when they are for
shorter or longer periods. If interest at 10% p.a. was paid out quarterly during
the year, you would get 2:5% a quarter, not 10% a quarter. However it would be
paid out four times as often so the formula would be
                                 Vt = (1 + r=4)4t V0
or if it is paid out n times a year
                                Vt = (1 + r=n)nt V0 :
As n ! 1; continuous compounding, this converges to
                                      Vt = ert V0 :                          (13.2)

                                           87
The irrational number e 2:718 seems to have been discovered by Italian bankers
doing compound interest in the late middle ages. Since ln Vt = rt + ln V0 the
continuously compounded return is
                                d ln V   1 dV
                                       =      = r:
                                  dt     V dt
For discrete data this can be calculated as

                               r = (ln Vt      ln V0 ) =t:

   The return in any period is often calculated as rt = ln Vt           ln Vt 1 :
   Notice that the discrete version (13.1) is strictly

                           r = exp(fln Vt      ln V0 g=t)    1

In addition
                                           Vt
                   ln Vt   ln Vt 1 = ln            = ln(1 + rt )   rt
                                          Vt 1
if r is small, another justi…cation for using the di¤erence of the logarithms. Growth
rates and in‡ation rates are also calculated as di¤erences in the logarithms. Mul-
tiply them by 100 if you want percentage rates.
     There are also interest rates at various maturities, depending on how long the
money is being borrowed or lent. The pattern of interest rates with respect to
maturity is called the term structure of interest rates or yield curve. Typically
the term structure slopes upwards. Long-rates, interest rates on money borrowed
for a long period of time, such as 10 year government bonds, are higher than
short rates, money borrowed for a short period of time, such as 3 month Treasury
Bills. Interest rates are usually expressed at annual rates, whatever the length
of the investment. When monetary policy is tight, the term structure may slope
downwards, the yield curve is inverted: short-rates are higher than long-rates.
This is often interpreted as a predictor of a forthcoming recession. Monetary
policy is operated by the Central Bank through the control of a short overnight
interest rate called the policy rate, Repo rate, Bank Rate or in the US Federal
Funds Rate. Usually other short rates such as LIBOR (London Inter-Bank O¤er
Rate, the rate at which banks lend to each other) are very close to the policy rate.
However, during the credit runch starting in August 2007 policy rates and LIBOR
diverged: Banks required a risk premium to lend to other banks and LIBOR was
described as the rate at which bamks were unwilling to lend to each other.

                                          88
13.2. Exchange Rates
13.2.1. Spot and forward
The spot exchange rate is the rate for delivery now: the exchange takes place
immediately. The spot exchange rate is usually quoted as domestic currency per
unit of foreign currency, with the dollar being treated as the foreign currency:
Swiss Francs per Dollar for instance. A rise indicates a depreciation in the Swiss
Franc: more Swiss Francs are needed to buy a dollar. Some are quoted as foreign
currency per unit domestic, in particular Sterling, which is quoted Dollars per
Pound. In this case a rise indicates an appreciation of the Pound, a pound buys
more dollars. Forward rates are for delivery at some time in the future. The one
year forward rate is for delivery in a years time when the exchange takes place at
a rate quoted and agreed upon today.

13.2.2. Covered interest parity
Suppose that you have a $1 million and know that you are going to need Sterling in
a years time. You can either convert the Dollars into Sterling now giving you £ 1/S
m, where S is the spot rate, (£ 0.548 m at the spot rate on 27/7/4 of 1.8245$/£ ).
You can invest this for a year at UK interest rates R£ , 5.3375% (one year £ Libor
(London Inter Bank O¤er Rate) on the same day). Thus in a years time you will
have £ (1+R)/S m (£ 0.577m). Alternatively you could invest the Dollars in the
US getting rate R$, 2.43% ($ Libor) so you will have $(1+R$) m ($1.0243m) in
a years time. You can sell these dollars for delivery in a year at forward rate F,
(1.7752). This means that in a years time you will have £ (1+R$)/F m (£ 0.577m).
These are both risk free (assuming the bank repays your deposit, i.e. no default
or counterparty risk) so the returns must be equal, as they are. You get £ 577,000
by either route. These rates are given every day in the FT. Expressing it as a
formula
                              1 + R$   1 + R$
                                     =
                                 S       F
                                   F   1 + R$
                                     =
                                   S   1 + R$
Or approximately (F S)=S          ln F ln S     R$ R$; where the approxima-
tions are fairly good for small di¤erentials. The term on the left is the forward
premium, when positive or discount when negative and the term on the right


                                        89
the interest di¤erential. This relation is called covered interest parity and fol-
lows from arbitrage. If it did not hold, banks could make a riskless return by
exploiting the di¤erence. Notice that the forward rate on 27/7/4 indicated that
the market expected sterling to fall in value over the next year. In fact because
it is determined by the interest rate di¤erential, the forward rate tends to be a
poor predictor of the future spot rate. In this case the rate on 29/7/5 was $1.759,
so the forward rate was quite a good predictor. Verbeek section 4.11 gives some
empirical examples of the use of these relationships.

13.2.3. Real and e¤ective rates
Suppose a Big Mac costs $X in the US and £ Y in the UK and the spot rate is S,
e.g. 1.6$/£ . Then the relative price of Big Macs in the UK and US is dollars
                              QM = ($Y       S)=$X
this is the Big Mac real exchange rate, which the Economist publishes. Similar
calculations are done for the whole economy using price indexes, to calculate the
real exchange rate for the country: Q = P S=P; where P is a foreign price index
and P a domestic price index. Purchasing Power Parity (PPP) says that trade
will equalise prices between countries and the real exchange rate will be constant,
in the long run. As Keynes said ‘In the long run, we are all dead’and deviations
from PPP can be very persistent.
    Any currency has a large number of exchange rates with all the other curren-
cies, so ‘trade weighted averages’or e¤ective exchange rates are often calculated,
which give an average exchange rate with all the other currencies, the weights
re‡ecting their relative importance in trade. Suppose that we denote the base
year as year zero, e.g. 2000, then the index in year t is
                                       X      Sit
                                  It =    wi ( )
                                              Si0
                                                                       P
where the wi are the percentage shares of trade with country i so that wi = 100;
Sio is the exchange rate with country i in the base year and Sit is the exchange
rate in year t: The value of the index in year zero, I0 = 100:

14. Applied Exercise II: Sampling distributions
The remainder of the notes are concerned with estimation and hypothesis testing.
These rest on the idea of a sampling distribution, the particular sample we take

                                        90
is just one of a large number of possible samples that we might have taken. This
exercise is designed to illustrate the idea of a sampling distribution. You do not
need any data for this exercise, you create it yourself.
    Go into Excel and in cell A1 type =RAND( ). This generates a random number
uniformly distributed over the interval zero-one. Each number over that interval
has an equal chance of being drawn. Copy this cell right to all the cells till O1.
In P1 type =AVERAGE(A1:O1). In Q1 type =STDEVP(A1:O1). In R1 type
=STDEV(A1:O1). Copy this row down to line 100.
    You now have 100 samples of 15 observations from a uniform distribution and
100 estimates of the mean and 100 estimates for each of two estimators of the
standard deviation. An estimator is a formula which tells you how to calculate an
estimate from a particular sample; an estimate is the number that results from
applying the estimator to a sample.
    We can then look at the sampling distribution of the mean and standard
deviation. Calculate and draw the histogram for the 100 estimates of the mean.
Do the same for the two estimators of the standard deviation. What do you think
of their shapes? Are they close to a normal distribution? Go to P101, type in
=AVERAGE(P1:P100). Go to P102 type in =STDEV(P1:P100). Go to P103
type in =SKEW(P1:P100). Go to P104 type in KURT(p1:p100). Copy these to
the Q and R columns to give the descriptive statistics for the two estimates of the
standard deviation.
    If x is uniformly distributed over [a; b] then E(x) = (a + b)=2 and V ar(x) =
(b a)2 =12: In this case a = 0; b = 1, so the theoretical mean should be 0.5
(compare this with the number
                           p       in cell P101) and the theoretical variance 1/12,
with standard deviation 1=12 = 0.288675 (compare this with the number in
Q101, which should be biased downwards and with the number in R101, which
should be closer). The standard deviation of the mean from a sample of size N
(in this case 15) is                      p
                               SD(x) = V ar(x)=N
so we would expect the standard deviation of our distribution of means to be
0.07453 (compare this with the number in P102). As N becomes large (the num-
ber of observations in each sample, 15 in this case which is not very large), the
distribution of the mean tends to normality (the central limit theorem). Do the
measures of skewness and excess kurtosis given in P103 and P104 suggest that
these means are normal? The values should be close to zero for normality. Is the
mean more normally distributed than the standard deviation?
    What we have done here is called a ‘Monte Carlo’ simulation. We have ex-

                                        91
amined the properties of the estimators by generating lots of data randomly and
looking at the distributions of the estimates from lots of samples. In practice, 100
replications of the sample is rather small, in Monte Carlo studies many thousands
of replications are typically used. Because 100 is quite small, you will get rather
di¤erent answers (e.g. for the overall mean) from me. However, by making the
number of replications su¢ ciently large, we could make the di¤erence between
you and me as small as we like (law of large numbers).
    In this case, we did not need to do a Monte Carlo because we can derive the
properties of the estimators theoretically. But for more complicated problems this
is not the case and we must do it numerically like here. However, doing the Monte
Carlo gives you a feel for what we mean when we discuss the distribution of an
estimator.


15. Estimation
15.1. Introduction
In the …rst part of the course we looked at methods of describing data, e.g. using
measures like the mean (average) to summarise the typical values the variable
took. In the second part of the course, we learned how to make probability
statements. Now we want to put the two together and use probability theory to
judge how much con…dence we have in our summary statistics. The framework
that we will use to do this is mathematical, we will make some assumptions and
derive some results by deduction. Chapter 4 and 5 of Barrow covers these issues.
There are a number of steps.

  1. We start with a model of the process that generates the data. For instance,
     the e¢ cient market theory says that the return on a stock in any period t,
     Yt = + ut Where Yt is the return, which we can observe from historical
     data, is the expected return, an unknown parameter, and ut is an unpre-
     dictable random error that re‡ects all the new information in period t: We
     make assumptions about the properties of the errors ut : We say that the
     error ut is ‘well behaved’when it averages zero, E(ut ) = 0; is uncorrelated
     through time E(ut ut 1 ) = 0; and has constant variance, E(u2t ) = 2 :

  2. We then ask how we can obtain an estimator of the unknown parameter :
     An estimator is a formula for calculating an estimate from any particular
     sample. We will use two procedures to choose an estimator b , (said alpha

                                        92
     hat) of ; that gives Yt = b + u
                                   bt : (1) method of moments, which chooses the
     estimator that makesP our population assumptions, e.g. E(ut ) = 0; hold in
     the sample so N 1 u    bt = 0 (2) least squares,Pwhich chooses the estimator
     that has the smallest variance and minimises       b2t . We will use these two
                                                        u
     procedures in three cases: (1) expected values (2) bivariate regression (3)
     multiple regression. In these three cases the two procedures happen to give
     identi…cal estimators, but this is not generally true.

  3. We then ask how good the estimator is. To do this we need to determine
     what the expected value of the estimator is and the variance of the esti-
     mator, or its square root: the standard error. We then need to estimate
     this standard error. Given our assumptions, we can derive all these things
     mathematically and they allow us to determine how con…dent we are in our
     estimates. Notice the square root of the variance of a variable is called its
     standard deviation, the square root of the variance of an estimator is called
     its standard error.

  4. We then often want to test hypotheses. For instance, from Applied Exer-
     cise I, we could …nd that the mean real return on equities over the period
     1991-1999 was much higher and less volatile than the historical return over
     1872-1990. In the year 2000, you might have wanted to ask whether there
     really was a New Economy, with signi…cantly higher returns (over twice the
     historical average) and lower risk (a lower standard deviation); or whether
     you might just get the numbers observed during the 1990s, purely by chance.
     See section 16.1.

  5. Since our mathematical derivations depend on our assumptions, we need to
     check whether our assumptions are true. Once we have estimated b we can
              bt = Yt b : Then we can ask whether our estimates of the errors
     estimate u
     are uncorrelated and have constant variance.

   We will go through this procedure three times, …rst for estimating the sample
mean or expected value and testing hypotheses about it; then for the bivariate
regression model, where the expected value is not a constant, but depends on
another variable, then for multiple regression, where it depends on many variables.




                                        93
15.1.1. A warning
The procedures we are going to cover are called classical statistical inference and
the Neyman-Pearson approach to testing. When …rst encountered they may seem
counter-intuitive, complicated and dependent on a lot of conventions. But once
you get used to them they are quite easy to use. The motivation for learning these
procedures is that they provide the standard approach to dealing with quantitative
evidence in science and other areas of life, where they have been found useful.
However, because they are counter-intuitive and complicated it is easy to make
mistakes. It is claimed that quite a large proportion of scienti…c articles using
statistics contain mistakes of calculation or interpretation.
    A common mistake is to confuse statistical signi…cance with substantive im-
portance. Signi…cance just measures whether a di¤erence could have arisen by
chance it does not measure whether the size of the di¤erence is important.
    There is another approach to statistics based on Bayes Theorem. In many ways
Bayesian statistics is more intuitive, since it does not involve imagining lots of
hypothetical samples as classical statistics does. It is conceptually more coherent,
since it just involves using your new data to update your prior probabilities in the
way we did in section 10.2.2. However, it is often mathematically more complex,
usually involving integrals, though computers now make this integration easier.
Gary Koop, Bayesian Econometrics, Wiley 2003 provides a good introduction.
    It is important to distinguish two di¤erent things that we are doing. First, in
theoretical statistics we are making mathematical deductions: e.g. proving that
an estimator has minimum variance in the class of linear unbiased estimators.
Second, in applied statistics, we making inductions, drawing general conclusions
from a particular set of observations. Induction is fraught with philosophical
di¢ culties. Even if every swan we see is white, we are not entitled to claim ‘all
swans are white’, we have not seen all swans. But seeing one black swan does
prove that the claim ‘all swans are white’is false. Given this, it is not surprising
that there are heated methodological debates about the right way to do applied
statistics and no ‘correct’rules. What is sensible depends on the purpose of the
exercise. Kennedy, A Guide to Econometrics, chapter 21 discusses these issues.

15.2. Estimating the expected value.
Suppose we have an independent sample of data over time Y1 ; Y2 ; :::; YT ;

                                    Yt =        + ut


                                           94
where ut is a random variable with mean zero and variance 2 and the observa-
tions are uncorrelated or independent through time; i.e. E(ut ) = 0, E(u2t ) = 2 ,
E(ut ut i ) = 0: Notice the number of observations here is T , earlier we used N or
n for the number of observations. We wish to choose a procedure for estimating
the unknown parameter from this sample. We will call the estimator b (said
alpha hat). We get an estimate by putting in the values for a particular sample
into the formula. We derive the estimator b in two ways: method of moments
which matches the sample data to our population assumptions and least squares
which mimimises the variance.

15.2.1. Method of moments 1
We assumed that E(Yt ) = ; which implies E(ut ) = E(Yt           ) = 0: Let us
choose an estimator b such that the sample equivalent of the expected value,
(the mean) of (Yt b ) also equals zero.n That is we replace
                                                      o     E(Yt    ) = 0 with
    P  T                                P  T                       P
T 1 t=1 (Yt b ) = 0: This imples T 1       t=1 Yt  T b = 0 or T 1 Tt=1 Yt = b :
So the estimator which makes the sample equivalent of E(YPt T ) = 0 hold is the
mean, so b = Y . Notice this derivation also implies that t=1 (Yt b ) = 0, the
sum of deviations from the mean are always zero

15.2.2. Least squares 1
Alternatively suppose,
                 P we choose    the estimator, b that makes the sum of squared
deviations, S =         b )2 as small as possible. This will also minimise the
                    (Yt P
estimated variance, b2 = (Yt b )2 =T:
           X
           T                 X                                  X                      X
      S=     (Yt    b )2 =       (Yt2 + b 2         2b Yt ) =       Yt2 + T b 2   2b       Yt
           t=1

To …nd the b that minimises this, we take the …rst derivative of S with respect
to b and set it equal to zero:
                             @S           X
                                = 2T b 2      Yt = 0:
                             @b
                                      PT
    Divide through
            P        by 2, move the     t=1 Yt to the other side of the equality,
gives T b =    Yt or
                                      X
                                      T
                                  b=     Yt =T:
                                              t=1


                                              95
so again b = Y :

15.3. Properties of the estimator
We distinguish,
      P           between the true (or population) parameter and the estimator
b=      Yi =n; the formula telling you how to calculate an estimate from a partic-
ular sample. A di¤erent sample would give a di¤erent estimate, so b is a random
variable. When di¤erent estimators are available, in this case the median might be
an alternative estimator, we need criteria to choose between di¤erent estimators.
One criterion is that the estimator is unbiased, on average (over lots of hypothet-
ical samples) it is equal to the true value. The expected value of the estimator is
equal to the true value of the parameter. Another property that is often desirable
is that the estimates tends to be close to the true value; for unbiased estimators
this implies that the estimator has a small variance.

15.3.1. The expected value of b
To …nd out whether the mean is unbiased we need to calculate the expected value
of b : This is
                     X          X                          X
                b =     Yt =T =     ( + ut )=T = T =T + (      ut =T )
                            X
             E(b ) =  + E(     ut =T ) =
Since E(ut ) = 0: So b is unbiased under our assumptions. From this derivation
we see that:                            X
                                b     =     ut =T
                                                    P
while on average over lots of hypothetical samples,     ut =T may be zero, it will
not be zero in any particular sample, so our estimate will di¤er from the true
value. Now let us calculate how large the di¤erence is likely to be.

15.3.2. The variance and standard error of the mean b
                                         2
        P of b ; say V (b ) = E(b E(b )) = E(b
The variance                                             )2 since E(b ) = . Since
b     = ut =T                            X
                          E(b    )2 = E(   ut =T )2
The right hand side can be written
                      u1 u2           uT     u1 u2         uT
               =E        +    + ::: +          +   + ::: +
                      T    T          T      T   T         T

                                        96
This product will have T 2 terms. There are T terms with squares like u21 , and
T 2 T terms with cross-products like u1 u2 . The expectation of the squares are
E(u2t )=T 2 = 2 =T 2 , since the variance of the ut , E (u2t ) = 2 ; is assumed constant
for all t. There are T terms like this, so the sum is T ( 2 =T 2 ) = 2 =T: The
expectations of the cross products are of the form E(ut ut j )=T 2 : But since the
errors are assumed independent E(ut ut i ) = 0; for i 6= 0, so the expectation of
all the cross-product terms equals zero. Thus we have derived the variance of the
mean, which is:
                                                                     2
                            V (b ) = E(b           E(b ))2 =
                                                                     T
where T is the number of observations. p
    The square root of the variance = T is called the standard error of the
mean. It is used to provide an indication of how accurate our estimate is. Notice
when we take the square root of the variance of a variable we call it a standard
deviation; when we take the square root of a variance of an estimator, we call
it a standard error. They are both just square roots of variances.

15.3.3. Estimating the variance
There are two common estimators of the variance of Y :
                                    P
                             2         (Yt b )2
                           b =
                                    P T
                                       (Yt b )2
                           s2 =
                                        T 1

the …rst estimator, b2 ; sometimes called the population variance, which divides
by T is a biased estimator of 2 ;
                                          T        1 2
                               E(b2 ) =                  <   2
                                                                 :
                                              T
The proof of this is simple, but long, so we do not give it. The second estimator,
s2 ; sometimes called the sample variance, is an unbiased estimator. The bias
arises because we use an estimate of the mean and the dispersion around the
estimate is going to be smaller than the dispersion around the true value because
the estimated mean is designed to make the dispersion as small as possible. If we
used the true value of there would be no bias. The correction T 1 is called the


                                              97
degrees of freedom: the number of observations minus the number of parameters
estimated, one in this case, b . We estimate the standard error of the mean by
                                            s
                                  SE(b ) = p
                                             T
On the assumptions that we have made it can be shown that the mean is the
minimum variance estimator of the expected value among all estimators which
are linear functions of the Yi and are unbiased. This is described as the mean
being the Best (minimum variance) Linear Unbiased Estimator (BLUE) of the
expected value of Y: This is proved later in a more general context, but it is a
natural result because we chose this estimator to minimise the variance.

15.3.4. Asymptotic properties
In many cases we are interested in what happens to the properties of the estimator
when T gets large. So although b2 which divides by T is a biased estimator of 2 ;
                                           T       1 2
                                E(b2 ) =
                                               T
as T ! 1; (T 1)=T ! 1 and      p the bias goes away. In addition as T ! 1 the
standard error of the mean = T ! 0, the distribution of estimates get closer and
closer to the true value so with T = 1 there is no dispersion at all, the estimator
converges to its true value, we can estimate it exactly. Estimators which have
this property are said to be consistent. Verbeek section 2.6 discusses asymptotic
properties.

15.3.5. Summary
So far we have (1) found out how to estimate the expected value of Y = E (Y )
by the mean; (2) shown that if the expected value of the errors is zero the mean
is an unbiased estimator, (3) shown that if the errors also have constant variance
  2
    and are independent, the variance of the mean is 2 =T where T is the number
of observations
      p         (4) shown that the standard error of the mean can be estimated
by s= T ; where s2 is the unbiased estimator of the variance and claimed (5) that
the mean had the minimum variance possible among linear unbiased estimators
(the Gauss-Markov theorem) and (6) that for large T the distribution of b ; will
be normal whatever the distribution of Y; (the central limit theorem).


                                        98
15.3.6. Background Example: proportions
We also often use sample proportions to estimate probabilities. Barrow Chapter 4
covers proportions. For instance in 10.2.2 we found from a sample of n =1000 …rms
that 450 reported doing neither product and process innovations, so we estimated
P (N ) = p = 0:45. Had we sampled di¤erent …rms we would have got a di¤erent
estimate and only if we had sampled all …rms in the economy, the population,
would we be sure that we got the true proportion of non-innovators. We want to
know how accurate our estimate is, what is its standard error? In the case of a
proportion the standard error is
                           r              r
                              p(1 p)        0:45 0:55
                 SE(p) =               =                = 0:0157
                                 n              1000
So with a sample of 1000 our standard error on the estimated proportion of 45%
is 1.57%. Often the formula is given using q = 1 p:
    In designing surveys it is important to check that: your sample is represen-
tative, random samples are best; not biased by non-response (innovators may be
more likely to …ll out the form); the questions are clear, in this case …rms may
di¤er on what they think an innovation is; and the sample is large enough. Barrow
chapter 9 discusses these issues. Suppose that you thought that a standard error
of 1.5% was too large and wanted to reduce it to 1%, how large would the survey
need to be. Call our desired SE(p) x: Then we need
                                       r
                                          p(1 p)
                                 x =
                                             n
                                x2 = p(1 p)=n
                                 n = p(1 p)=x2

to get x = 1% we need n = (0:45    0:55)=(0:01)2 = 2475: You would need to more
than double the sample.


16. Con…dence intervals and Hypothesis Tests
Earlier we noted that if a variable was normally distributed, the mean plus or
minus two standard deviations would be expected to cover about 95% of the
observations. This range, plus or minus two standard deviations is called a 95%
con…dence interval. In addition to constructing con…dence intervals for a variable

                                       99
we also construct con…dence intervals for our estimate of the mean, where we use
the standard error of the mean instead of the standard deviation. Barow Chapter
4 discusses these issues.

16.1. Example: was the New Economy di¤erent?
We often want to compare our estimate, b ; with some hypothesised value 0 :
To illustrate the procedures, suppose the average real return on equities 1991-
1999 was 18%, and the average 1872-1990 was 8%. Check the actual numbers
from Applied Exercise I. At the end of the 1990s many people believed that there
had been a structural change and the arrival of the ‘New Economy’ produced
much higher expected returns than the historical average. In this case 0 = 8%;
our hypothesis is that the true expected return during the 1990s is the long-
run historical average. Our estimate is the mean during the 1990s, b = 18%;
estimated on T = 9 observations. As our estimate of the standard deviation
(square root of variance) of returns, we will use the estimate over the whole
period,    = 18:4%; :assuming that the variance has not changed and that we
know it exactly. This simpli…es the calculation a lot, if we used the estimated
variance 1991-99 we would have a larger sampling error and have to use the t
distribution rather than the normal. Using the formula above, the standard error
of our mean for the 1990s is thus
                                  p           p
                        se(b ) = = T = 18:4= 9 = 6:13:
Notice
p       that we are using the mean calculated over 9 years, 1991-99, so we divide by
   9; not by the number of years that we used to calculated the standard deviation.
If our estimate of the mean is normally distributed, with a true expected value
  0 = 8% we would expect there to be a 95% chance of the estimate falling into
the range
                          1:96se(b ) = 8 1:96 (6:13) = 8 12:
Thus we would be 95% con…dent that the range 4 to+20 would cover the true
value: There is a 2:5% chance that a 9 year average would be above 20% and a
2:5% chance it would be below -4%. The historical estimate falls in this range
so even if the true expected return is equal to its historical value, 8%; we would
expect to see 9 year average returns of 18% just by chance, more than 5% of the
time. Suppose the true expected value is 8%, what is the probability of observing
18% or more? We can form
                            b        18 8       10
                       z=          =        =        = 1:63
                            se(b )     6:13    6:13

                                        100
Using the tables of the normal distribution we …nd P (Z        1:63) = 0:0516: Just
over 5% of the time, we will observe periods of 9 years with mean returns of 18%
or greater, if expected return is constant at 8%.
    This assumes everything is normally distributed, if the distribution had heavier
tails than a normal, these probabilities would be a little larger. We could also
centre our con…dence interval on b rather than 0 and report b 1:96se(b ): This
would be 18 12 the range, 6 to 30: Notice this con…dence interval covers the
historical mean.
    We would conclude that, assuming normality, at the 95% level, the 1990s
return is not statistically signi…cantly di¤erent from the historical mean.

16.2. Con…dence intervals
Suppose Yt = + ut : We can get an estimate, b ; of from our sample of T
observations : If ut is normally distributed, b will also be normally distributed,
because b is just a linear function of u: If the sample is large enough b will also
be normally distributed, even if ut is not normal. We saw that
                                          X
                                 b= +         ut =T
                                           t

So
                                               2
                                 b    N( ;      =T )
              p                                                                 p
s(b ) = = T is the standard error of b and can be estimated by, s(    d) = s= T ;
where                                 rP
                                           (Yt b )2
                                  s=
                                            T 1
      From tables of the normal distributions, we know that it is 95% certain that b
will be within 1.96 standard errors of its true value : The range b 1:96s(b ) is
called the 95% con…dence interval. The 68% con…dence interval is b s(b ) : the
range covered by the estimate plus and minus one standard error will cover the
true value just over two thirds of the time. If that con…dence interval covers some
hypothesised value 0 ; then we might be con…dent that the true value could be
  0 : If b is more than about 2 standard errors from the hypothesised value, 0 ; we
think it unlikely that the di¤erence could have occurred by chance (there is less
than a 5% chance) and we say the di¤erence is statistically signi…cant. That is
we calculate the test statistic
                                          b     0
                                       =
                                            d
                                           s( )

                                        101
and reject the null hypothesis that = 0 at the 5% level if the absolute value
of the test statistic is greater than 1.96. We can also calculate the ‘p value’, the
probability of getting the observed value of if the hypothesis was true and reject
the hypothesis if the p value is less than 0.05.

16.3. Small samples
Suppose that we have a sample of T observations. pIf we knew the true standard
deviations, the standard error would be s(b ) = = T then (b              0 )=s(b ) would
                                                                       2
have a normal distribution. But when we estimate the variance by s our estimated
                             p
                   d) = s= T : This adds extra uncertainty, from not knowing ;
standard error is s(
and (b         d
           0 )=s( ) follows another distribution called the t distribution, introduced
above, which is more spread out. How much more spread out depends on the
degrees of freedom: T 1: As the number of observations, T; becomes large the
e¤ect of estimating the variance becomes smaller and the t distribution becomes
closer to a normal distribution. For a normal distribution 95% of the distribution
lies within the range 1:96 standard errors. For a t distribution with 3 degrees
of freedom (n = 4) 95% lies within 3:182 standard errors; with 10 degrees
of freedom it is 2:228;with 30 degrees of freedom it is 2:042: Tables of the
t distribution are given at the back of statistics textbooks, e.g. Barrow Table
A3. The practice in economics is to use 2 as the critical value and not use very
small samples. Most computer programs give p values, the probability of the null
hypothesis being true, and they may be more convenient to use. At the 5% level
you reject the null hypothesis if the p value is < 0:05: You have to know what the
null hypothesis is.
    In testing the new economy above we used the estimate of the standard de-
viation from the whole sample, so the number of observations used in estimating
the variance was large and we could use the normal distribution. If we had used
the estimate of the standard deviation from the 1990s the number of observations
would have been small, 9, and we would have had to use the t distribution.

16.4. Testing
In testing we start with what is called the null hypothesis, H0 : = 0 : It is called
null because in many cases our hypothesised value is zero, i.e. 0 = 0: We reject
it in favour of what is called the alternative hypothesis, H1 : 6= 0 ; if there is
very strong evidence against the null hypothesis. This is a two sided alternative,


                                          102
we reject if our estimate is signi…cantly bigger or smaller. We could also have one
sided alternatives < 0 or > 0 : The convention in economics is to use two
sided alternatives.
    The problem is how do we decide whether to reject the null hypothesis. In
criminal trials, the null hypothesis is that the defendant is innocent. The jury can
only reject this null hypothesis if the evidence indicates guilt ‘beyond reasonable
doubt’. Even if you think the defendant is probably guilty (better than 50%
chance) you have to acquit, this is not enough. In civil trials juries decide ‘on
the balance of the evidence’, there is no reason to favour one decision rather
than another. So when OJ Simpson was tried for murder, a criminal charge,
the jury decided that the evidence was not beyond reasonable doubt and he was
acquitted. But when the victims family brought a civil case against him, to claim
compensation for the death, the jury decided on the balance of the evidence that
he did it. This di¤erence re‡ects the fact that losing a criminal case and losing a
civil case have quite di¤erent consequences.
    Essentially the same issues are involved in hypothesis testing. We have a
null hypothesis, H0 : defendant is innocent. We have an alternative hypothesis,
H1 : the defendant is guilty. We can never know which is true. There are two
possible decisions. Either accept the null hypothesis (acquit the defendant) or
reject the Null hypothesis (…nd the defendant guilty). In Scotland the jury has
a third possible verdict: not proven. Call the null hypothesis, H0 ; this could be
defendant innocent or = 0 . Then the possibilities are
                  H0 true      H0 false
    Accept H0     Correct      Type II error
    Reject H0     Type I error Correct
    In the criminal trial Type I error is convicting an innocent person. Type II error
is acquitting a guilty person. Of course, we can avoid Type I error completely:
always accept the null hypothesis: acquit everybody. But we would make a lot
of type II errors, letting villains go. Alternatively we could make type II errors
zero, convict everybody. Since we do not know whether the null hypothesis is true
(whether OJ is really innocent), we have to trade o¤ the two risks. Accepting the
null hypothesis can only be tentative, this evidence may not reject it, but future
evidence may.
    Statistical tests design the test procedure so that there is a …xed risk of Type
I error: rejecting the null hypothesis when it is true. This probability is usually
…xed at 5%, though this is just a convention.
    So the procedure in testing is

                                         103
   1. Specify the null hypothesis, = 0 :
   2. Specify the alternative hypothesis 6= 0 :
   3. Design a test statistic, which is only a function of the observed data and
the null hyposthesis, not a function of unknown parameters
                                          b     0
                                      =
                                           d)
                                           s(

    4. Find the distribution of the the test statistic if the null hypothesis is true.
In this case the test statistic, , has a t distribution in small samples (less than
about 30), a normal distribution in large samples.
    5. Use the distribution to specify the critical values, so that the probability of
b being outside the critical values is small, typically 5%.
    6. Reject the null if it is outside the critical values, (in this case outside the
range 2); do not reject the null otherwise.
    7. Consider the power of the test. The power is the probability of rejecting
the null hypothesis when it is false (1 P (typeIIerror)), which depends on the
true value of the parameters.
    In the medical example, of screening for a disease, that we used in section 11,
we also had two types of errors (false positives and false negatives), and we had
to balance the two types of error in a similar way. There we did it on the basis
of costs and bene…ts. When the costs and bene…ts can be calculated that is the
best way to do it. In cases where the costs and bene…ts are not known we use
signi…cance tests.
    Statistical signi…cance and substantive signi…cance can be very di¤erent. An
e¤ect may be very small of no importance, but statistically very signi…cant, be-
cause we have a very large sample and a small standard error. Alternatively,
an e¤ect may be large, but not statistically signi…cant because we have a small
sample and it is imprecisely estimated. Statistical signi…cance asks: ‘could the
di¤erence have arisen by chance in a sample of this size?’ not ‘is the di¤erence
important?’
    When we discussed con…dence intervals we said that the 68% con…dence inter-
val is b s(b ) : the range covered by the estimate plus and minus one standard
error will cover the true value, ; just over two thirds of the time. There is a
strong temptation to say that the probability that lies within this range is two
thirds. Strictly this is wrong, is …xed not a random variable, so there are no
probabilities attached to : The probabilities are attached to the random variable


                                          104
b ; which di¤er in di¤erent samples. Bayesian statistics does treat the parame-
ters as random variables, with some prior probability distribution; uses the data
to update the probabilities; and does not use the Neyman-Pearson approach to
testing set out above.

16.4.1. Example equities
Suppose the average real return on equities over T = 100 years was b = 10%;
the standard deviation of real returns s = 20% and they appeared normally
distributed (in reality equity returns are not quite normally distributed). For
a Random Variable Z following a standard normal distribution
        z       0:5     1     1:5     2     2:5     3
    P (Z < z) 0:6915 0:8413 0:9332 0:9772 0:9938 0:9987
   (a) Explain what P (Z < z) means. What is P (Z < 0)?
   (b) What is the standard error of the mean?
   (c) Is the mean return signi…cantly di¤erent from zero?
   (d) What is the probability of a return less than –50%?
   (e) What is the probability of a positive return.
    Answer.
    (a) P (Z < z) is the probability that the random variable Z takes a value less
than a speci…ed value, z. P (Z < 0) = 0:5 since the standard normal distribution
is symmetric around zero, there is 50% p below zero
                                                p and 50% above.
    (b) Standard error of mean is s= T = 20= 100 = 2.
    (c) To test the hypothesis, we use the formula = (b      0 )=s(b ); b = 10; 0 =
0; s(b ) = 2: :    = (10 0)=2 = 5 is greater than 2. So the mean return is
signi…cantly di¤erent from zero. We reject the null hypothesis that the expected
return is zero at (better than) the 5% level.
    (d) Probability of a return less than -50%? z=(–50-10)/20=-3. Distribution is
symmetrical so P (Z < 3) = P (Z > 3) = 1 P (Z < 3) : Prob=1-0.9987=0.0013
or 0.13%
    (e) Probability of a positive return:
    z=(0-10)/20=-0.5; P(Z>-0.5)=P(Z <0.5)=0.6915 or 69%.
    Notice the importance of whether we are p  using the standard deviation of re-
turns or the standard error of the mean = T :




                                       105
16.4.2. Background Example: clinical trials
Clinical trials tend to be done in three phases. Phase I is a small trial to determine
toxicity and e¤ective dosage. Phase II is a larger trial to determine e¤ectiveness.
Phase III is an even larger trial to compare e¤ectiveness with alternative treat-
ments, if any. If there is no alternative treatment, patients are randomly assigned
to a treatment group who are given the drug and to a control group who are given
a placebo, made to look as much like the drug as possible. The placebo e¤ect is the
fact that any treatment, however ine¤ective, tends to make patients get better, if
they believe in it. Randomisation is important because otherwise the two groups
of patients may di¤er in ways that in‡uence the e¤ect of the drug. The trials
are double blind in that neither the patient not the physician knows whether the
patient is getting the drug or the placebo. This is to stop the physician selecting
those treated, e.g. giving it to the ones who were more ill, which would bias the
result of the trial. Giving some people an ine¤ective placebo raises ethical issues,
but so does giving the others an untried and potentially dangerous drug. Again
we are trying to balance two sorts of errors.
    Suppose we have 100 patients, 50 in the treatment group, 50 in the control
group; 18 of the treatment group die within a time-period, 22 of the control group
die; is this di¤erence signi…cant?
    Answer
p As we saw above, the standard error for an estimate of a proportion is se (p) =
  pq=n where n is the number of observations on which it is based, and q =
1 p: We estimate pb = N=n; where N is the number who die. The number of
observations in the treatment group n1 = 50; as is the number in the control
group, n2 : The estimated proportions who die are pb1 = 0:36; pb2 = 0:44: If the
number of observations n1 and n2 are su¢ ciently large, the di¤erence of the sample
proportions pb1 and pb1 will be approximately normal with mean p1 p2 and variance
                                              p1 q1 p2 q2
                             V (p1   p2 ) =        +
                                               n1    n2
where qi = 1 pi : Our null hypothesis is p1 p2 = 0: If the null hypothesis is true
there is no di¤erence, then our best estimate of p = p1 = p2 is (18+22)/100=0.4.
and the standard error is
                              r
                                 0:4 0:6 0:4 0:6
                      se(b
                         p) =             +              0:1
                                    50          50


                                         106
our test statistic is then
                             pb1 pb2    0:36 0:44
                             =       =               = 0:8
                               se(b
                                  p)        0:1
This is less than two in absolute value, so we would not reject the null hypothesis
that the proportion who died was the same in the treatment and control group.
The di¤erences could have easily arisen by chance. To check this we would need
to do a larger trial. Barrow chapter 7 discusses these issues.
    It should not make a di¤erence, but in practice how you frame the probabilities,
e.g. in terms of proportion who die or proportion who survive, can in‡uence how
people respond.

17. Bivariate Regression
A large part of the use of statistics in economics and …nance (econometrics) in-
volves measuring the e¤ect of one variable (e.g. price) on another variable (e.g.
quantity demanded). Regression is the statistical tool used to measure the e¤ects.
In this case price would be the independent variable or regressor and quantity de-
manded the dependent variable. Barrow Chapters 7 and 8 discusses this material.

17.1. Example: CAPM.
Suppose the risk free interest rate over a period is Rt ; the return on a particular
stock is Rti and the return on the stock market (e.g. the FTSE or S&P index) was
Rtm : These returns would usually be measured as the changes in the logarithms of
the stock prices. The Capital Asset Pricing Model (CAPM) can be written as a
regression
                          Rti Rt = + (Rtm Rt ) + ut
the excess return on stock i is equal to a constant (which should be zero) plus
a coe¢ cient times the excess return on the market, plus a random error or
disturbance, which re‡ects the factors that shift the return on stock i other than
movements of the whole market. The riskiness of a stock is measured by ; if
  = 1 it is as volatile as the market; if > 1; it is more volatile than the market;
if < 1; it is less volatile than the market. The riskier the stock, the higher
the return required relative to the market return. Given data on Rti ; Rt and Rtm ;
for time periods t = 1; 2; :::; T we want to estimate and for the stock and
determine how much of the variation of the stock’s returns can be explained by
variation in the market. Verbeek, section 2.7 discusses this example in more detail.

                                        107
17.2. Example: Fisher Relation
The real interest rate, It is the nominal interest rate Rt less the rate of in‡ation
 t
                                    It = Rt       t

suppose the real interest rate is roughly constant, equal to a constant plus a
random error
                                   It = I + ut
then we can write
                            Rt = It +   t = I +       t + ut :

Then if we ran a regression

                                Rt =     +      t + ut


the theory says = I and = 1; the hypothesis = 1 can be tested. The
interpretation of is that it is the rate of interest that would be expected on
average when the rate of in‡ation is zero. tells you how much the interest rate
rises in response to a rise in in‡ation by a percentage point.

17.3. Deriving the Least Squares Estimator
In both the examples above, there is data, t = 1; 2; :::; T; and a model of the form

                                Yt =    + Xt + ut ;

and we will continue to assume that ut is a random variable with expected value
zero and variance 2 and the observations are uncorrelated or independent through
time; i.e. E(ut ) = 0, E(u2t ) = 2 , E(ut ut i ) = 0: We will further assume that the
independent variable varies, V ar(Xt ) 6= 0; and is independent of the error so that
the covariance between them is zero Ef(Xt E(Xt ))ut g = 0: If we can estimate
  and ; by b and b; then we can predict Yt for any particular value of X:

                                    Ybt = b + bXt

these are called the …tted or predicted values of the dependent variable. We can
also estimate the error:

                          bt = Yt
                          u          Ybt = Yt    (b + bXt )

                                        108
these are called the residuals. Notice we distinguish between the true unobserved
                                bt the estimates of the errors.
errors, ut ; and the residuals, u
    As with the expected value above there are two procedures that we will use to
derive the estimates, method of moments and least squares.

17.3.1. Method of Moments 2
Our two population assumptions (moment-conditions) are that the expected val-
ues of the errors are zero, E(ut ) = 0 and the covariance of the independent vari-
ables and the errors are zero: Ef(Xt E(Xt )ut g = 0: We choose our estimates so
that the sample equivalents of these equations are true. The sample equivalent of
E(ut ) = 0 is that the mean of the estimated errors is zero
                                               (                   )
                             X                  X
                        T 1f      bt g = T 1
                                  u                 (Yt b bXt ) = 0
                                    t                          t
          (                                  )
           X                   X                          X                     X
    T 1         Yt   Tb    b            Xt       = T 1         Yt   b   b(T 1       Xt ) = 0
            t                  t                           t                    t

                                             b = Y        bX

   Our …rst moment-condition implies that the estimate of b is the mean of Y
minus b times the mean of X: We do not yet know what b is, but as long as we
de…ne b this way, the errors will sum to zero, whatever the value of b: We can
substitute this estimate of b into the estimated equation

                     Yt = b + b X t + u
                                      bt = Y              b X + b Xt + u
                                                                       bt

which we can write
                               Yt        Y = b(Xt              bt
                                                          X) + u
using lower case letters to denote deviations from the mean, this is.

                                             yt = b x t + u
                                                          bt                              (17.1)

We use this to …nd b: The sample equivalent of our second moment-condition:




                                                  109
Ef(Xt      E(Xt )ut g = 0 is
              X
          T 1       bt = 0
                 xt u
                   t
                                                                       (                          )
      X                                      X                                  X
T 1       xt (yt       b xt ) = T 1                     xt yt      b T 1                    x2t         =0
      t                                           t                                 t
                                     (                             ) (                                )       (          ) (     )
                                                  X                                 X                          X            X
                          b =            T 1              xt y t       = T 1                    x2t       =        xt y t =   x2t :
                                                      t                                 t                      t                  t


This says that our estimate of b is the ratio of the (population) covariance of Xt
and Yt to the variance of Xt ; (remember lower case letters denote deviations from
the means).

17.3.2. Least squares 2
                                                                                                                       P
As with the expected value we can also …nd the b that minimises                                                             b2t ; where
                                                                                                                            u
from (17:1)
              X                X                          2       X                 2X                         X
                       b2t =
                       u            yt           b xt         =         yt2 + b                   x2t     2b       xt y t
               t                t                                  t                        t                  t

                         P
the derivative of              b2t with respect to b is
                               u
                                    P 2         X                              X
                                   @ u  bt
                                           = 2b     x2t                    2        xt y t = 0                                  (17.2)
                                     @ b
                                                  t                             t


Writing this 2 b P x2 = 2 P xt yt and dividing both sides by 2 P x2 ; gives b =
P        P 2        t t      t                                  t t
   x y
 t t t =     x
           t t ; as  before:
   The second order condition is

                                                                                                                                (17.3)
                                             2
                                                 P                      X
                                         @             b2t
                                                       u
                                                      2         = 2            x2t > 0                                          (17.4)
                                             @b
since squares are positive, so this is a minimum.



                                                                  110
   Our estimates

                            b = Y bX
                                P
                            b =  (Xt X)(Yt Y )
                                  P
                                    (Xt X)2

(i) make the sum of the estimated residuals zero and the estimated residuals
uncorrelated with the explanatory variable and (ii) minimise the sum of squared
residuals.

17.4. Properties of the estimates
Since                 P           P                       P
                   b= P x t y t     xt ( x t + u t )        xt ut
                            2
                                =      P 2           =   + P 2
                         xt              xt                  xt
then E(b) = ; and it is unbiased; since because of independence
                          P                P
                             xt ut           xt
                      E P 2         = E P 2 E(ut )
                              xt             xt

and E(ut ) = 0: To derive the variance of b; note since b is unbiased
                                             P              2
                      b        b               xt ut
                   V ( ) = E(       ) = E( P 2 )2 = P 2
                                     2
                                                                               (17.5)
                                                xt           xt

using the same sort of argument as in deriving the standard error of the mean
above.

17.5. Measuring how well the regression …ts
                                                       P
Note if we de…ne the covariance between X and Y : Sxy = (Xt X)(Yt Y )=T ,
                         P
and the variance Sxx = (Xt X)2 =T , then b = Sxy =Sxx as we saw above and
the correlation coe¢ cient is:
                                        Sxy
                                 r=p
                                       Sxx Syy
as we saw in section 6. The correlation coe¢ cient lies between -1 (perfect negative
relation) and +1 (perfect positive relation) with 0 indicating no linear relationship.
Notice that covariance and correlation only measure linear relationships. You

                                         111
could have an exact non-linear relationship (e.g. a circle) and the correlation
would be zero. In regression we use the square of the correlation coe¢ cient, r2 ,
usually written R2 and called the coe¢ cient of determination. This gives you the
proportion of the variation in Y that has been explained by the regression.
   We measure the dispersion around the line in exactly the same way that we
measured the dispersion around the mean, either using the biased estimator
                                       X
                                  b2 =     b2t =T
                                           u

or the unbiased estimator             X
                               s2 =       b2t =(T
                                          u         2)

where ubt = Yt b bXt : Now there are T 2 degrees of freedom because we
estimated two parameters b and b: The estimate s2 is called the variance of the
regression and its square root s, the Standard Error of The Regression (SER),
which gives you an idea of the average size of the errors. The SER is measured in
the same units as the dependent variable. If the dependent variable is a logarithm,
the SER can be multiplied by 100 and interpretedp    asPa percentage error. We can
                                   b        b
then measure the standard error of as se( ) = s=         x2t by putting the estimate
in (17:5) and taking square roots.
    The coe¢ cient of determination; or R squared, the proportion of the variation
of Y that has been explained, or 1 minus the proportion of the variation in Y that
has not been explained. is de…ned as
                                            P 2
                                2              bt
                                               u
                              R =1 P
                                           (Yt Y )2

Show this is the same as r2 de…ned above. If b = 0; then nothing has been
           bt = Yt b , where b is just the mean and R2 = 0:
explained: u
                                                             2
   Computer packages also often calculate adjusted R2 or R (R bar squared).
This corrects the numerator and denominator for degrees of freedom:
                                      P 2
                          2              bt =(T k)
                                         u
                        R =1 P
                                     (Yt Y )2 =(T 1)
where k is the number of explanatory variables, including the intercept. This can
be negative.
    From our estimates we can also calculate the predicted value of Y for a par-
ticular X:
                                 Ybt = b + bXt

                                        112
and the residual or unexplained part of Y for a particular observation is:

                          bt = Yt
                          u         Ybt = Yt   (b + bXt )

17.6. Assumptions for Least Squares to give good estimates
We are assuming:

     That we have the correct model for the process, e.g. that it is linear and we
     have not left any relevant variables out.

     That the expected values of the errors is zero: E(ut ) = 0, on average the
     true errorsP are zero. Notice that the average of our residuals is always
     zero, (T 1 u   bt = 0 by construction), as long as we have an intercept in
     the equation (which will pick up the average of the error) or work with
     deviations from the mean.

     That E(u2t ) = 2 , errors have constant variance. This assumption is some-
     times expressed the errors are homoskedastic (same variances), its failure is
     that the errors are heteroskedastic (di¤erent variances).

     That E(ut ut i ) = 0; for i 6= 0. Errors are independent, with no serial
     correlation or no autocorrelation.
           P
     That     (Xt X)2 6= 0;the X’s must vary over the sample. We cannot
     calculate b if this is not the case. This would also fail if there were not
     enough observations to estimate the parameters. We need T > 2. If T = 2;
     we can …t the observations exactly by a line through the two points.

     That Ef(Xt E(Xt )ut g = 0. This assumption is usually described as the
     X’s being P exogenous: not related to the errors. Notice that for our esti-
               1
     mates T       t (Xt  X)but = 0 by construction. For exogeneity, the X’s may
     either be non stochastic, …xed numbers, though this is rare in economics
     where our X variables are usually random or random variables distributed
     independently of the errors. Independence implies that X and the errors are
     not correlated, but is a stronger assumption than being uncorrelated.

    Properties of estimators were discussed in section 15.3. With all these assump-
tions we can show that among all estimators of and that are linear functions
of Y and are unbiased; the least squares estimator has the smallest variance. This

                                       113
is the Gauss-Markov theorem: under these assumptions the least squares estima-
tor is the Best (minimum variance) Linear Unbiased Estimator, it is BLUE. If in
addition we add another assumption to the model, that the errors are normally
distributed, then our estimates will also be normally distributed and we can use
this to construct test statistics to test hypotheses about the regression coe¢ cients.
Even if the errors are not normally distributed, by the central limit theorem our
estimates will be normally distributed in large samples; in the same way that the
mean is normally distributed whatever the distribution of the variable in large
samples.
     We need the assumption that X is exogenous, to make causal statements about
the e¤ect of X on Y: When we are only interested in predicting Y , we do not need
the exogeneity assumption and have the result that the least squares prediction
Ybt is the Best (minimum variance) Linear Unbiased Predictor of Yt :

17.7. Predicted values and residuals.
We assume that there is a true model or ‘data generating process’as its sometimes
called: Yt = + Xt + ut . We estimate Yt = b + bXt + u      bt or Yt = Ybt + u
                                                                            bt . Thus
the least squares procedure splits Yt into two bits, the explained bit, the expected
or predicted value, and the unexplained bit, the residual, u  bt : the part of Yt left
over after we have explained all we can. The predicted value is an estimate of the
conditional expectation for Y conditional on X: Ybt = E(Yt j Xt ) = b + bXt :
    Notice that the predicted values and the residuals are uncorrelated, their co-
variance is exactly zero:
                X
                T                X                      X            X
                      Ybt u
                          bt =       (b + bXt )b
                                               ut = b       bt + b
                                                            u               bt
                                                                         Xt u
                t=1
                                   P               P
But our moment-conditions made        bt = 0 and
                                      u                 bt = 0, so both terms are
                                                     Xt u
zero. One of the main uses of the predicted values is in forecasting, we make an
assumption about how X will change in the future, use the equation to forecast
Y and calculate a standard error for the forecast.
    By construction the residuals have mean zero (if there is an intercept, i.e.
  ; in the equation, and you should always include an intercept) and they are
uncorrelated with the explanatory variables. But we can check whether other
assumptions we made about the errors hold for the estimated residuals. We can
test whether our assumption that E(u2t ) = 2 a constant, holds in the data. We
can also test whether E(ut ut i ) = 0; for i not equal 0. This is the assumption

                                             114
of independence, no serial correlation or no autocorrelation. We might also have
assumed that ut is normally distributed and we can test whether the skewness
and kurtosis of the residuals are those of a normally distributed variable. We will
discuss how we test these assumptions later, but in many cases the best way to
check them is to look at the pictures of the actual and predicted values and the
residuals. The residuals should look random, with no obvious pattern in them
and the histogram should look roughly normal.
    If you have unhealthy residuals, that show serial correlation or heteroskedas-
ticity, some text books tend to suggest that you model the disturbances, typically
by a procedure called Generalised Least Squares. However, in most cases the
problem is not that the true disturbances are heteroskedastic or serially corre-
lated. The problem is that you have got the wrong model, and the error in the
way you speci…ed the model shows up in the estimated residuals. Modelling the
disturbances may just treat the symptoms, it may be better to cure the disease:
specify the model correctly.


18. Multiple Regression
18.1. Example: logarithmic models
Most of the time we have more than one right hand side variable, so our regression
may be a demand function like

                  ln Qt =   1+   2 ln Yt +   3 ln Pt +   4 ln Pt   + ut       (18.1)

where Qt is quantity demanded, Yt real income and Pt the price of the good, Pt a
measure of the price of all other goods, and ln denotes natural logarithms. Given
the log equation then 2 is the income elasticity of demand (the percentage change
in demand in response to a one percent change in income), which we would expect
to be positive, and 3 the own price elasticity, which we expect to be negative
and 4 is the cross-price elasticity, which for all other goods should be positive.
    It is standard to use logarithms of economic variables since (a) prices and quan-
tities are non-negative so the logs are de…ned (b) the coe¢ cients can be interpreted
as elasticities, so the units of measurement of the variables do not matter (c) in
many cases errors are proportional to the variable, so the variance is more likely
to be constant in logs, (d) the logarithms of economic variables are often closer
to being normally distributed (e) the change in the logarithm is approximately
equal to the growth rate and (f) lots of interesting hypotheses can be tested in

                                        115
logarithmic models. For instance in this case if 3 =     4 (homogeneity of degree
zero)only relative prices matter. Notice the original model is non-linear

                             Qt = BYt 2 Pt 3 Pt 4 exp(ut )

where B = exp( 1 ); but can be made linear by taking logs.
   Another common logarithmic model is the Cobb-Douglas production function
explaining output at time t Qt ; by capital Kt and labour Lt and an error

                                   Qt = AKtb Lct edt+ut

Notice output will be zero if either capital or labour are zero. We can make this
linear by taking logarithms

                     ln Qt = ln A + b ln Kt + c ln Lt + dt + ut :                 (18.2)

The rate of growth of technical progress is measured by d; it is the amount log
output changes between periods if all inputs are constant: The residual ut is often
treated as a measure of e¢ ciency, how much higher or lower output is than you
would expect.
    If b + c = 1 there is constant returns to scale, CRS, if both inputs go up by
10%, output goes up by 10%. We can test this by rewriting (reparameterising)
the equation as

     ln Qt   ln Lt = ln A + b [ln Kt     ln Lt ] + (b + c    1) ln Lt + dt + ut   (18.3)

and do a t test on the coe¢ cient of ln Lt ; which should be not signi…cantly dif-
ferent from zero if there is CRS. Notice (18:2) and (18:3) are identical statistical
equations, e.g. the estimates of the residuals would be identical. The restricted
version, which imposes CRS so reduces the number of parameters estimated by
one is
                 ln Qt ln Lt = ln A0 + b0 [ln Kt ln Lt ] + d0 t + u0t        (18.4)
where the primes indicate that the estimates will be di¤erent. Another way to
test CRS is to use an F test to compare the …t of (18:4) with (18:3) :

18.2. Matrix form of the Linear Regression Model
We could write (18:1)

                      Yt =    1+    2 X2t +   3 X3t +     4 X4t + ut


                                           116
where the dependent variable Yt corresponds to ln Qt ; X1t is a variable that always
takes the value one so we do not need to write it in, X2t corresponds to ln Yt , and
X3t to ln Pt ; X4t to ln Pt : The problem is the same as before. We want to P
                                                                            …nd the
estimates of i ; i = 1; 2; 3; 4 that minimise the sum of squared residuals,    ub2t :
                   X          X
                       b2t =
                       u         (yt b1 b2 X2t b3 X3t b4 X4t )2

we have to multiply out the terms in the brackets and take the summation inside
and derive the …rst order conditions, the derivatives with respect to the four
parameters. These say that the residuals should sum to zero and be uncorrelated
with all Xit : The formulae, expressed as summations are complicated. It is
much easier to express them in matrix form. Verbeek Appendix A reviews matrix
algebra.
    We can write this is vector form
                                               0
                                      Yt =         Xt + u i

where and Xi are 4 1 vectors, so the product 0 Xi is (1 4) (4 1) = 1 1
a scalar, just like Yi .
    We can also write this in matrix form in terms of y a T 1 vector and X a
T 4 matrix
                2      3 2                     32     3 2      3
                   Y1      1 X21 X31 X41            1       u1
                6 Y2 7 6 1 X22 X32 X42 7 6 3 7 6 u2 7
                6      7 6                     76     7+6      7
                4 : 5=4 :      :      :    : 54 3 5 4 : 5
                  YT       1 X2T X3T X4T            4       uT

                        y                 X                            u
                                 =                            +                 :
                   (T       1)       (T       4) (4      1)       (T       1)
This gives us a set of T equations. Notice, in writing Xit ; we have departed from
the usual matrix algebra convention of having the subscripts go row column. This
generalises to the case where X is a T k matrix and a k 1 vector, whatever
k: Notice that for matrix products, the inside numbers have to match for them to
be conformable and the dimension of the product is given by the outside numbers.

18.3. Assumptions
We now want to express our assumptions about the errors in matrix form. The
assumptions were: (a) that E(ut ) = 0, on average the true errors are zero; (b)

                                               117
that E(u2t ) = 2 , errors have constant variance; and (c) E(ut ut i ) = 0; for i 6= 0;
di¤erent errors are independent. The …rst is just that the expected value of
the random T 1 vector u is zero E(u) = 0: To capture the second and third
assumptions, we need to specify the variance covariance matrix of the errors,
E(uu0 ) a T T matrix. u0 is the transpose of u; a 1 T vector. The transpose
operation turns columns into rows and vice versa. Note u0 u is a scalar, 1 1 the
sum of squared errors. Writing out E(uu0 )and putting our assumptions in:
                2                                   3 2 2                    3
                     E(u21 ) E(u1 u2 ) :: E(u1 uT )              0 :: 0
                6 E(u1 u2 ) E(u22 ) :: E(u2 uT ) 7 6 0            2
                                                                      :: 0 7
      E(uu0 ) = 6
                4
                                                    7=6
                                                    5 4 :: :: :: :: 5
                                                                             7
                       ::        ::     ::     ::
                   E(u1 uT ) E(u2 uT ) :: E(u2T )           0 0 :: 2

So our assumptions say that E(uu0 ) = 2 IT : Where IT is a T T identity matrix
with ones on the diagonal and zeros on the o¤ diagonal.
    The assumption that X is exogenous, distributed independently of the errors,
u; implies E(X 0 u) = 0; which corresponds to our earlier assumption E(Xt X)ut =
0: We also assume that X has full rank k: This implies that the di¤erent regressors
vary independently, are not perfectly correlated, and corresponds to our earlier
assumption that Xt varies.

18.4. Estimating b
As before we will consider two methods for deriving the estimators method of
moments and least squares. This time for the model y = X + u; where y and u
are T 1 vectors, is a k 1 vector and X a T k matrix.

18.4.1. Method of moments 3
Our exogeneity assumption is E(X 0 u) = 0; the sample equivalent is X 0 u
                                                                        b = 0, a
k 1 set of equations, which for the case k = 4 above, gives
                                  X
                                      bt = 0;
                                      u
                              X
                                      bt = 0;
                                  X2t u
                              X
                                      bt = 0;
                                  X3t u
                              X
                                      bt = 0:
                                  X4t u


                                         118
So
                    X 0u
                       b = X 0 (y   X b) = X 0 y   X 0 X b = 0:
Since X is of rank k; (X 0 X) 1 exists (X 0 X is non-singular, its determinant is
non-zero) so
                               b = (X 0 X) 1 X 0 y:

18.4.2. Least Squares 3
The sum of squared residuals is

                        b0 u
                        u  b = (y     X b)0 (y X b)
                                        0           0
                             = y 0 y + b X 0 X b 2b X 0 y

To derive the least square estimator, we take derivatives, and set them equal to
zero. If is a k 1 vector we get k derivatives, the …rst order conditions are the
k 1 set of equations,
                            u0 u
                           @b  b
                                 = 2X 0 X b   2X 0 y = 0
                            @ b

 Compare this to (17:2) : So the least squares estimator is b = (X 0 X) 1 X 0 y as
before. Again our assumptions ensures that (X 0 X) 1 exists The second order
condition is
                                 @ 2u
                                    b0 u
                                       b      0
                                        0 = 2X X
                                  b
                                @ @   b
which is a positive de…nite matrix, ensuring a minimum. Compare this to (17:3) :

19. Properties of Least Squares
We can derive the expected value of b.
            b = (X 0 X) 1 X 0 y = (X 0 X) 1 X 0 (X + u)
              = (X 0 X) 1 X 0 X + (X 0 X) 1 X 0 u = + (X 0 X) 1 X 0 u

     So
                              b=     + (X 0 X) 1 X 0 u                      (19.1)
                          E(b) =     + E((X 0 X) 1 X 0 u)

                                       119
since is not a random variable, and if X and u are independent E((X 0 X) 1 X 0 u) =
E((X 0 X) 1 X 0 )E(u) = 0 since E(u) = 0: Thus E(b) = and b is an ubiased es-
timator of :
    From (19.1) we have
                               b     = (X 0 X) 1 X 0 u
     The variance-covariance matrix of b is

                    E(b      E(b))(b   E(b))0 = E(b        )(b    )0

since b is unbiased. But from (19.1) we have
                                 b     = (X 0 X) 1 X 0 u

so

              E(b      )(b      )0 = E((X 0 X) 1 X 0 u)((X 0 X) 1 X 0 u)0
                                   = E((X 0 X) 1 X 0 u u0 X(X 0 X) 1
                                   = (X 0 X) 1 X 0 E(u u0 )X(X 0 X) 1
                                   = 2 (X 0 X) 1 X 0 X(X 0 X) 1
                                   = 2 (X 0 X) 1

since E(uu0 ) = 2 I; 2 is a scalar, and (X 0 X) 1 X 0 X = I: Compare this to (17:5)
above.
    If we also assume normality then we can write that u        N (0; 2 I): Linear
functions of normally distributed variables are also normal. We saw that if one
variable Y is normally distributed with mean ; and variance 2 . Then any linear
function of Y is also normally distributed.

                          Y   N ; 2
                          X = a + bY N a + b ; b2 2

where a and b are scalars. The matrix equivalent of this is that, for k 1 vectors,
Y and M and k k matrix (not the summation sign) Y              N (M; ) ; then for
h 1 vectors X and A; and h k matrix B

                          X = A + BY      N (A + BM; B B 0 )

Notice the variance covariance matrix of X say V (X) = B B 0 is (h          k)   (k
k) (k h) = h h:

                                          120
    Since y is a linear function of u it follows that y is also normally distributed:
y N (X ; 2 I): In this case B is the identity matrix. Since b = (X 0 X) 1 X 0 y is
a linear function of y, it is also normally distributed.
              b       N ((X 0 X) 1 X 0 X ; (X 0 X) 1 X 0   2
                                                               I X(X 0 X) 1
                      N ( ; 2 (X 0 X) 1 )

in this case A is zero, B = (X 0 X) 1 X 0 : (X 0 X) 1 is equal to its transpose because
it is a symmetric matrix. (X 0 X) 1 X 0 X = I:
     This says that b is normally distributed with expected value (and is therefore
unbiased) and variance covariance matrix 2 (X 0 X) 1 :
     The variance covariance matrix is a k k matrix and we estimate it by

                                  V (b) = s2 (X 0 X) 1

where s2 = ub0 u
               b=(T k): The square roots of the diagonal elements of s2 (X 0 X) 1
give the standard errors of the estimates of the individual elements of ; which
are reported by computer programs:
   The predicted values are yb = X b; the residuals

    b=y
    u        yb = y   Xb = y      X(X 0 X) 1 X 0 y = (I    X(X 0 X) 1 X 0 )y = M y;

where M = I Px ; and Px = X(X 0 X) 1 X 0 where Px is called a projection matrix.
Both M and Px are idempotent, equal to their product Px Px = Px and M Px = 0:
So
               b = M y = M (X + u) = M X + M u = M u;
               u
since M X = (I        Px )X = X        X(X 0 X) 1 X 0 X = X           X = 0:

19.1. Ommitted variables
When you add another variable, the estimate of the coe¢ cient of X will generally
change.
   Express the data in deviations from mean, to get rid of all the constant terms.
Suppose the model is
                               yt = xt + zt + ut                            (19.2)
but we leave out zt and estimate:

                                     yt = bxt + vt :                             (19.3)

                                          121
We get two estimates of the coe¢ cient on xt : b and . What is the relation
between them? To understand this we need to look at the relationship between
xt and zt ; which we can summarise by another regression equation:

                                    zt = dxt + wt                              (19.4)
wt is just the part of zt that is not correlated with xt . d may be zero, if there is
no relationship. Put (19:4) into (19:2)and we get (19:3):

                            yt = xt + (dxt + wt ) + ut

                           yt = ( + d)xt + ( wt + ut )
So b = ( + d); the coe…cient of xt picks up the part of zt that is correlated with
xt : Parts of zt that are not correlated with xt end up in the error term ( wt + ut ).
This is why looking for patterns in the error term is important, it may suggest a
variable you have left out. If you add a variable that is not correlated with xt , the
coe¢ cient of xt will not change. If you add a variable that is highly correlated
with xt , the coe¢ cient of xt will change a lot.


20. Tests in regression
20.1. Tests for a single hypothesis on individual coe¢ cients
Suppose we have the model

                             Yt =    + X t + Z t + ut

we can test the signi…cance of the individual coe¢ cients using t ratios exactly as
we did for the mean
                                              b
                                t( = 0) =
                                           se b

where se b is the estimated standard error of b: This tests the null hypothesis
H0 : = 0: If this t ratio is greater than two in absolute value we conclude that
b is signi…cant: signi…cantly di¤erent from zero at the 5% level. Computers often
print out this t ratio automatically. They usually give the coe¢ cient, the standard
error, the t ratio and the p value. The p value gives you the probability that the


                                         122
null hypothesis is true. If it was less than 0:05, we would reject the hypothesis at
the 5% level.
   We could test against other values than zero. Suppose economic theory sug-
gested that = 1 the t statistic for testing this would be
                                              b 1
                                 t( = 1) =
                                              se (b)
and if this t statistic is greater than two in absolute value we conclude that b is
signi…cantly di¤erent from unity at the 5% level.

20.2. Tests on joint hypotheses
Suppose that we wanted to test the hypothesis that none of the independent
variables had any e¤ect on the dependent variable in

                     Yt =   1+    2 X2t +   3 X3t +    4 X4t + ut :

The hypothesis is H0 : 2 = 3 = 4 = 0: The test statistics used to test joint
hypotheses follows a F distribution, introduced in section 12.2. Just as the t
distribution is described by its degrees of freedom, the F distribution is described
by its degrees of freedom, though it has two of them. The …rst is the number
of hypotheses being tested, three in this case, and the second is the degrees of
freedom, T      4 in this case. This would be written F (3; T        4) and critical
values are given in statistics books: The F statistic for this hypothesis (that all
the slope coe¢ cients are equal to zero) is often printed out by computers, they
also usually give a p value. With the p value you do not have to look up tables,
just reject the null hypothesis if p < 0:05: Notice that the joint hypothesis that
both coe¢ cients are equal to zero can give di¤erent conclusions from a sequence
of individual hypotheses that each are equal to zero, they are testing di¤erent
hypotheses. If there is a single hypothesis, the F and t tests are related by the
fact that: F (1; T k) = t2 (T k): This follows from the de…nitions in 12.3.
    In general we would estimate an unrestricted regression with k coe¢ cients
(4 above) and calculate the unrestricted residual sum of squares U RSS and a
restricted regression with k m coe¢ cients, (1 above) where m is the number
of restrictions and calculate the restricted residual sum of squares RRSS: Then
under H0
                       (RRSS U RSS)=m
                                               ~ F (m; T k):
                          U RSS=(T k)

                                        123
20.3. Diagnostic Tests for our assumptions about the errors.
If our assumptions about the errors are valid, the estimated residuals should be
normally distributed and random: without any pattern in them, so our null hy-
pothesis is that the model is well speci…ed and there is no pattern in the residuals,
e.g. other variables should not be able to explain them. Our alternative hypoth-
esis is that the model is misspeci…ed in a particular way, and since there are lots
of ways that the model could be misspeci…ed (the errrors could be serially cor-
related, heteroskedastic, non-normal or the model could be non-linear) there are
lots of these tests, each testing the same null, the model is well speci…ed, against
a particular alternative that the misspeci…cation takes a particular form. This
is like the fact that there are lots of di¤erent diagnostic tests that doctors use.
There are many di¤erent ways that a person, or a regression, can be sick.
     The Durbin-Watson test for serial correlation is a diagnostic test for serial
correlation. It is given by
                                      PT
                                           (b
                                            ut u  bt 1 )2
                               DW = t=2PT
                                                 b2t
                                             t=1 u

it should be around 2; say 1:5 to 2:5: If it is below 1:5 there is positive serial
correlation, residuals are positively correlated with their previous (lagged) values,
above 2:5 negative serial correlation. It is only appropriate if (a) you are interested
in …rst order serial correlation; (b) there is an intercept in the equation, so the
residuals sum to zero and (c) there is no lagged dependent variable in the equation.
First order (one lag) serial correlation assumes that errors are related to their
values in the previous period

                                      ut = ut 1 + "t

but there may be higher order serial correlation. For instance,. in quarterly data,
the errors may be related to errors up to a year ago: the size of the error in the
alcohol equation at Christmas (Q4) is related not just to the previous quarters
error but to the size of the error last Christmas:

                    ut =   1 ut 1 +    2 ut 2 +     3 ut 3 +   4 ut 4 + "t

this is fourth order (four lags) serial correlation. Suppose you ran a regression
                                              0
                                      yt =        xt + ut

                                             124
The test involves running a regression of the residuals on the variables included
in the original regression and the lagged residuals
                bt = b0 xt +
                u               bt 1 +
                               1u         bt 2 +
                                         2u         bt 3 +
                                                   3u         bt 4 + "t
                                                             4u

then testing the joint hypothesis H0 : 1 = 2 = 3 = 4 : You reject the null,
no serial correlation up to fourth order if the test statistic (Chi-squared or F) is
above the critical value for the required size, say 5%, or the p value is below 0.05.
    There are many diagnostic tests which involve regressing the estimated residu-
als or powers of the residuals on particular variables. A test for heteroskedasticity
may run squared residuals on the regressors:
                                  b2t = a + b0 xt + ut
                                  u
to check whether the variance of the residuals is correlatd with the regressors. The
null hypothesis is b = 0: Technically, most of these tests are known as Lagrange
Multiplier Tests. It is important that you check your equation for various diseases
before you regard it as healthy enough to be used. Statistical packages like EViews
(section 22.2), Micro…t, Stata, etc. have built in tests of the assumptions that are
required for Least Squares estimates to be reliable. If the assumptions do not
hold the estimated standard errors are likely to be wrong and corrected standard
errors that are ‘robust’to the failure of the assumptions are available.

21. Economic and Financial Data III: Variables and Rela-
    tionships
Linear regression is very ‡exible because we can rede…ne the variables by some
transformation, which allows the underlying relationship to be non-linear, but the
relationship we estimate to be linear, as in 18.1. We can also construct variables,
like the trend in 18.1.

21.1. Dummy variables.
Suppose that we had UK annual data on consumption and income for 1930 to 1960
and wanted to estimate a consumption function. This period includes the second
world war, 1939-1945, when there was rationing and consumption was restricted.
This would shift the consumption function and could be allowed for by estimating
an equation
                           Ct = + Yt + Dt + ut

                                          125
where Dt is a ‘dummy’ variable which takes the value one 1939-45 and zero in
other years. The intercept during the War is then + and we would expect
  < 0: We could also write this

                        Ct =     1 Dt +   2 (1     Dt ) + Y t + ut                 (21.1)

we would get an identical estimate b; in both equations, b1 is the estimated
intercept 1939-45, b2 = b is the intercept for other years and b = b1 b2 , the
di¤erence in the intercept between the two periods. Notice that had you included
a constant in (21:1) the computer would have refused to estimate it and told you
that the data matrix (X 0 X) was singular. This is known as ‘the dummy variable
trap’.
    A similar technique allows for seasonal e¤ects. Suppose that we had quarterly
data on consumption and income, and wanted to allow for consumption to di¤er
by quarters (e.g. spending more at Christmas). De…ne Q1t as a dummy variable
that is one in quarter one and zero otherwise; Q2t is one in quarter two zero
otherwise, etc. Then estimate

                Ct =   1 Q1t +    2 Q2t +        3 Q3t +     4 Q4t +   Yt + ut

then the intercept in Q1 is    1 in Q2 is         2 ; etc.   We could also drop one dummy
and include a constant.

21.2. Non-linearities
21.2.1. Powers
We can easily allow for non-linearities by transformations of the data as we saw
with logarithms above. As another example imagine y (say earnings) …rst rose
with x (say age) then fell. We could model this by

                               yi = a + bxi + cx2i + ui

where we would expect b > 0; c < 0: Although the relationship between y and x
is non-linear, the model is linear in parameters, so ordinary least squares can be
used, we just include another variable which is the square of the …rst. Notice that
the e¤ect of x on y is given by
                                    @y
                                       = b + 2cxi
                                    @x

                                            126
thus is di¤erent at di¤erent values of xi ; and has a maximum (or minimum) which
can be calculated as the value of x that makes the …rst derivative zero. On average
earnings rise with age to a maximum then fall, while self reported happiness
tends to fall with age to a minimum then rise: the middle-aged are wealthy but
miserable. We can extend this approach by including the product of two variables
as an additional regressor. There is an example of this in the specimen exam,
section 3.2 question 5. Verbeek section 3.5 has an extensive discussion.

21.2.2. Regressions using Proportions
Suppose our dependent variable is a proportion, pt = Nt =K; where Nt is a number
a¤ected and K is the population, or a maximum number or saturation level. Then
pt lies between zero and one and the logistic transformation (ln(pt =(1 pt )) is often
used to ensure this: If the proportion is a function of time this gives,

                                      pt
                             ln                  = a + bt + ut                 (21.2)
                                  1        pt

which is an S shaped curve for pt over time. This often gives a good description of
the spread of a disease (e.g. the proportion of the population that have a mobile
phone) and can be estimated by least squares. Although this is a non linear
relationship in the variable pt it is linear in parameters when transformed so can
be estimated by least squares. The form of the non-linear relationship is
                                  Nt          1
                           pt =      =                                         (21.3)
                                  K    1 + exp (a + bt)

   We could estimate this directly, treating K as an unknown parameters in a
programs like EViews which does non-linear least squares. So if Nt is the number
of mobile phone owners we would enter this in Eviews as

                   N = C(1)=(1 + exp(C(2) + C(3) @trend)):                     (21.4)

@trend in EViews provides a trend, t. C(1) would be an estimate of K; C(2)
of a and C(3) of b. In practice, unless there is data very close to saturation it
is di¢ cult to estimate K precisely: Notice that (21:2) and (21:4) imply di¤erent
assumptions about how the error term enters (21:3) so are not equivalent:




                                                127
22. Applied Exercise III: Running regressions
You can run regressions in Excel but in most cases it is easier to use a specialised
package. There are many of them and if you are familiar with a particular package
use that. EViews is an easy package to use and is installed on our machines. gretl
is a free open-source program similar to EViews. Micro…t is another econometrics
package that is easy to use. EViews, Gretl and Micro…t are menu driven programs,
other programs like Stata are command driven (which ensures an audit trail of
what you have done). R in a popular open source statistics program. For your
projects you can use any program you wish.
    This example uses the Shiller.xls …le that was used in Applied Exercise I and
is on the ASE home page. It has data 1871-2000 (130 observations) on 5 vari-
ables NSP (nominal stock prices), ND (nominal dividends) NE (nominal earnings,
pro…ts) and R (interest rates) and PPI (producer price index). Note that there is
no 2000 data on three of the variables. Figures are given on NSP and PPI which
are January …gures, the other three are averages for the year. Even if you are
not using EViews read the explanation and carry out the exercise on the software
you are using. The example below regresses dividends on earnings for the period
1871-1986. First we describe some of the output the computer produces.

22.1. Regression Output
Computer programs will print out a range of information, which may include

     the estimates of the regression coe¢ cients bi , i = 1; :::; k including the con-
     stant

     the standard error of each coe¢ cient SE(bi ) which measures how precisely
     it is estimated;

     the t ratio t( i = 0) = bi =SE(bi ) which tests the null hypothesis that that
     particular coe¢ cient is really zero (the variable should not appear in the
     regression): If the t ratio is greater than 2 in absolute value, we can reject
     the null hypothesis that i = 0 at about the 5% level. In this case the
     coe¢ cient is said to be signi…cantly di¤erent from zero or signi…cant.

     the p value for the hypothesis that i = 0: This gives the probability that
     the null hypothesis is true. If this is less than 0:05 again we can reject the
     hypothesis that i = 0:

                                        128
                                P
The Sum of Squared residuals        b2t : This is what least squares minimises.
                                    u

The standard error of regression
                               qX
                           s=     b2t =(T
                                  u              k)

where k is the number of regression coe¢ cients estimated and T the number
of observations. This is an estimate of the square root of the error variance
 2
   and gives you an idea of the average size of the errors: If the dependent
variable is a logarithm, multiply s by 100 and interpret it as the average
percent error.

R squared, which tells you the proportion of the variation in the dependent
variable that the equation explains
                                 P        P b
                     2             b2t
                                   u       ( Yt        Y )2
                   R =1       P        2
                                         =P
                                (Yt Y )    (Yt         Y )2

R bar squared, which corrects R squared for degrees of freedom
                                   P 2
                       2             bt =(T k)
                                     u
                     R =1 P
                                  (Yt Y )2 =(T 1)

where k is the number of regression coe¢ cients estimated and T is the num-
ber of observations. Whereas R2 is always positive and increases when you
                 2
add variables, R can be negative and only increases if the added variables
have t ratios greater than unity.

Durbin Watson Statistic is a measure of serial correlation of the residuals
                                PT
                                     (b
                                      ut u  bt 1 )2
                        DW = t=2PT
                                           b2t
                                       t=1 u

it measures whether the residuals are correlated. It should be around 2, say
1.5-2.5. It tests the hypothesis = 0 in the autoregression ut = ut 1 + "t :
Roughly DW = 2(1         ): This statistic depends on the ordering of the data,
since it calculates ut ut 1 : In time-series there is a natural ordering of the
data, in cross-section there is not. So in cross-section the DW should be
interpreted with caution.

                                  129
      An F statistic which tests the hypothesis that none of the slope variables
      (i.e. the right hand side variables other than the constant b ) is signi…cant.
      Notice that in the case of a single slope variable, this will be the square of
      its t statistic. Usually it also gives the probability of getting that value of
      the F-statistic if the slope variables all had no e¤ect.

22.2. Excel
Go into Excel, Load the Shiller.xls …le. Click Tools; Data Analysis; Choose Re-
gression from the list of techniques. You may have to add-in the data-analysis
module. Where it asks you Y range enter C2:C117. Where it asks you X range
enter D2:D117. Click Output Range and enter in the output range box G1. Al-
ternatively you can leave it at the default putting the results in a separate sheet.
Click OK. It gives you in the …rst box, Multiple R, which you can ignore, R
squared and Adjusted R Squared and Standard Error of the Regression. Then it
gives you an ANOVA box which you can ignore. Then it gives you estimates of
the coe¢ cients (intercept, X Variable 1, etc), their standard errors, t statistics,
and P values, etc. shown in the summary output.
    In this case we have run a regression of dividends on earnings and the results
for the sample 1871 1986 are:
     N Dt = 0:169+ 0:456N Et +b        ut
               (0:036)     (0:007)
                [4:67]     [61:65]
               f0:000g f0:000g
      2
    R = 0:971; s = 0:31:
    Standard errors of coe¢ cients are given in parentheses, t statistics in brackets,
and p values in braces. You would normally report only one of the three, usually
just standard errors. The interpretation is that if earnings go up by $10, then
dividends will go up by $4.56. If earnings were zero, dividends would be 16.9
cents. Earnings explain 97% of the variation in dividends over this period and
the average error in predicting dividends is 0.31. We would expect our predictions
to be within two standard errors of the true value 95% of the time. Both the
intercept and the coe¢ cient of earnings are signi…cantly di¤erent from zero at the
5% level: their t statistics are greater than 2 in absolute values and their p values
are less than 0.05.
    In Excel, if you click the residuals box it will also give you the predicted
values and residuals for every observation. If you use Excel you must graph these


                                         130
residuals to judge how well the least squares assumptions hold. You can have more
right hand side, X, variables but they must be contiguous in the spreadsheet, side
by side. So for instance we could have estimated

                         N Dt =    + N Et + N SPt + ut

by giving the X range as D2:E117.

22.3. EViews
22.3.1. Entering Data
Open the EViews program, di¤erent versions may di¤er slightly. Click on File,
New, Work…le, accept the default annual data and enter the length of the time
series 1871 2000 in the box. OK. You will now get a box telling you that you have
a …le with two variables C (which takes the value unity for each observation) and
RESID which is the variable where estimates of the residuals will be stored.
    Click on File, Import, Read Text-Lotus-Excel, then click on the Shiller …le. It
will open a box. Tell it, in the relevant box, that there are 5 variables. Note the
other options, but use the defaults, note that B2 is the right place to start reading
this data …le. Click Read. You should now also have PPI, ND, NE and NSP R
in your work…le. Double click on NSP and you will see the data and have various
other options including graph.
    Highlight NE and ND. Click on Quick, then Graph, OK line graph, and you
will see the graphs of these two series. Close the graph. Always graph your
data.
    Use Save As command to save the Work…le under a new name and keep saving
it when you add new data, transformations etc.

22.3.2. Estimating a Regression
Click on Quick, Estimate Equation and you will get a box. Enter ND C NE; set the
sample as 1871 1986. OK and you will get a box with equation estimates. Notice
that you have menu buttons both on the equation box and the main window. The
estimates are the same as given above for Excel.
    Dependent Variable: ND
    Method: Least Squares
    Date: 07/29/04 Time: 14:00
    Sample: 1871 1986

                                        131
   Included observations: 116
   Variable      Coe¢ cient      Std. Error      t-Statistic     Prob.
   C            0.168391      0.035869      4.694672       0.0000
   NE            0.456537      0.007328      62.2974      1 0.0000
   R-squared 0.971464                   Mean dependent var 1.445948
   Adjusted R-squared 0.971214          S.D. dependent var 1.868085
   S.E. of regression 0.316949          Akaike info criterion 0.556937
   Sum squared resid 11.45203           Schwarz criterion 0.604413
   Log likelihood -30.30234             F-statistic 3880.968
   Durbin-Watson stat 0.659872          Prob(F-statistic) 0.000000

   Suppose the equation is

                         Yt =    + Xt + ut ; t = 1; 2; :::; T:

The program gives you the dependent variable Yt ; in this case ND; the method
of estimation, in this case least squares; the date and time; the sample you used,
in this case 1871 1986; and the number of observations, 116. Then for each right
hand side variable, it gives you the estimate of the coe¢ cient, b and b; its standard
error, its t statistic and p value (Prob).
    Reading down the …rst column it gives: R-squared; Adjusted R-squared, usu-
ally called R bar squared; the Standard Error of the Regression, which measures
                                                                              P
the average size of the error in predicting Yt ; Sum of Squared Residuals Tt=1 u   b2t ;
Ignore Log-likelihood; Durbin Watson Statistic In this regression, the DW of 0.662
shows that there is something badly wrong. The second column gives the mean
and standard deviation of the dependent variable, two criteria which you can ig-
nore for now and the F-statistic and p value for the hypothesis that all of the
slope coe¢ cients are zero.
    In Eviews when you have the equation box on the screen, click View on the box
toolbar and you will see a range of options. Actual Fitted Residuals allows you to
graph the actual and …tted (predicted values) for the dependent variable and the
residuals. Always look at the graph of predicted values and residuals.
Under Residual you can test for normality, serial correlation, heteroskedasticity
and under stability you can test for non-linearity RESET or structural change
in the parameters at some point. Use Chow Break point if you know when the
relationship shifted, or Cusum graphs if you do not. If the graphs go outside the
con…dence bands there is a problem. In each case the null hypothesis is that the
model is well speci…ed (does not have the problem) so small p values (p<0.05)

                                          132
lead you to reject the hypothesis that this is a healthy equation. Verbeek section
3.3 and 4.4 and 4.7 discusses many of these tests.

22.3.3. A di¤erent speci…cation.
Close the equation box. Click on Quick, Generate, enter in the box the equation

                              LRD = log(N D=P P I)

and click OK. You will see that a new variable, log of real dividends, has been
added to the work…le.
   Do the same to generate log of real earnings: LRE=log(NE/PPI). Graph LRD
and LRE. Click on Quick, Estimate equation, and enter LRD C LRE LRD(-1) in
the box. This estimates an equation of the form

                            Yt =   + X t + Y t 1 + ut

where the dependent variable is in‡uenced by its value in the previous period.
The estimates are:
    LRDt =      0:517+ 0:248LREt + 0:657LRDt 1 R2 = 0:94
                (0:107)    (0:034)       (0:046)      s = 0:108
    Although this has a R2 of 0.94, it does not mean that it is worse than the
previous equation, which had an R2 of 0.97, because the two equations have dif-
ferent dependent variables. Above the dependent variable was nominal dividends,
here it is log real dividends. The Durbin Watson statistic for this equation is 1.72
which is much better, though it is not strictly appropriate in a dynamic equation
which includes the lagged dependent variable. The long-run elasticity of dividends
to earnings is 0:248=(1 0:657) = 0:72: A 1% increase in earnings is associated
with a 0.72% increase in dividends in the long-run.


23. Dynamics
With cross-section data a major issue tends to be getting the functional form
correct; with time-series data a major issues tends to be getting the dependence
over time, the dynamics, correct.




                                        133
23.1. Autoregressions
We have already come across autoregressions (AR), regressions of a variable on
lagged values of itself when discussing serial correlation in error terms. They
can also used for variables just as above we ran a regression of dividends on a
constant, earnings and the lagged value of dividends. A …rst order autoregression
would take the form
                              yt = 0 + 1 yt 1 + ut
the parameters can be estimated by least squares. The random walk with drift,
our …rst example of a model in section 5.2, is the special case where 1 = 1: If
  1 < 1 < 1 the process is stable, it will converge back to a long-run equilibrium
after shocks. The long run equilibrium can be got from assuming yt = yt 1 = y
(as would be true in equilibrium with no shocks) so

                                 y =          0+         1y
                                y =           0 =(1           1 ):


Using the star to indicate the long-run equilibrium value. A random walk does
not have a long-run equilibrium it can wander anywhere.
   A second order (two lags) autoregression takes the form

                         yt =       0+    1 yt 1 +        2 y t 2 + ut :


This is stable if   1<   1+    2 < 1; in which case its long run expected value is

                                                     0
                                    y =
                                          1         1         2

   We may also get slow responses from the e¤ects of the independent variables,
these are called distributed lags (DL). A …rst order distributed lag takes the form

                             yt =    +    0 xt +         1 xt 1 + ut

and we could have higher order versions.
   We can put the …rst order AR1 and DL1 together to get an ARDL(1,1)

                      yt =    0+     1 yt 1 +       0 xt +        1 xt 1 + u t   (23.1)

Again it can be estimated by least squares. There are often strong theoretical
reasons for such forms. We can reparameterise this to an error correction model,

                                              134
ECM form,

     yt   yt 1 =      0+( 1     1)yt 1 +    0 xt       0 xt 1 +    0 xt 1 +   1 xt 1 + u t
            yt =      0+( 1     1)yt 1 +    0      xt + ( 0 +     1 )xt 1 + ut

                        yt = a0 + a1 yt 1 + b0 xt + b1 xt 1 + ut                        (23.2)
    These dynamic forms can be interpreted in terms of a long-run equilibrium
relationship,
                              yt = 0 + 1 xt                             (23.3)
and slow adjustment. The simplest form of adjustment is the partial adjustment
model (PAM)
                            yt = (yt yt 1 ) + ut :                       (23.4)
  yt = yt yt 1 ; is the change. For instance, people change their consumption, yt ;
to remove part of the di¤erence between the equilibrium consumption and con-
sumption in the previous period. The coe¢ cient is an adjustment coe¢ cient, it
measures the proportion of the deviation from the equilibrium level of consump-
tion as a function of income, xt ; made up in a period. We would expect 0 <     1;
with = 1 indicating instantaneous adjustment and = 0 no adjustment. We
can write this
                            y t = 0 + 1 xt        yt 1 + ut
or
                        yt =    0+      1 xt + (1       )yt 1 + ut
we would just run a regression of yt on a constant, xt and lagged yt ; i.e. yt 1 consumption,

                            yt =   0+     xt +      1 yt 1 + ut


We can recover the theoretical parameters ; 0 , 1 from the estimated parameters
given by the computer 0 ; 1 ; : So we estimate the speed of adjustment as
b = (1 b 1 ); and the long run e¤ect as b1 = b=b = b=(1 b 1 ): This is a dynamic
equation it includes lagged values of the dependent variable. Whether we estimate
it using the …rst di¤erence yt or level yt as the dependent variable does not
matter, we would get identical estimates of the intercept and the coe¢ cient of
income, xt . The coe¢ cient of lagged consumption in the levels equation will be
exactly equal to the coe¢ cient in the …rst di¤erence equation plus one. Sums of
squared residuals will be identical, though R2 will not be, because the dependent
variable is di¤erent. This is one reason R2 is not a good measure of …t.

                                           135
    For more complex adjustment processes, we can keep the long-run relation-
ship given by (23:3) and replace the partial adjutment model (23:4) by the error
correction model (ECM), which assumes that people respond to both the change
in the target and the lagged error

                    yt = 1 yt + 2 (yt 1 yt 1 ) + ut
                    yt = 1 1 xt + 2 ( 0 + 1 xt 1 yt 1 ) + ut
                    yt = a0 + b0 xt + b1 xt 1 + a1 yt 1 + ut :

This is the same as (23:2)above and the estimated parameters are functions of the
theoretical parameters, (a0 = 2 0 ; b0 = 1 1 ; b1 = 2 1 ; a1 =      2 ); so we can
solve for the theoretical parameters from our estimates, e.g. the long run e¤ect
is, b1 = bb1 =ab1 :
    We can …nd the equilibrium solution for (23:1) if the model is stable, 1 <
a1 < 1 by setting yt = yt 1 = y; xt = xt 1 = x so that in long-run equilibrium

                            y =      0+       1y +
                                          0x + 1x
                                  0       +
                            y =       + 0     1
                                                x
                                1   1   1    1
                           y = 0 + 1x

Economic theory usually makes predictions about the long-run relations rather
than the short-run relations. Notice our estimate of 1 will be identical whether
we get it from the ECM (23:2) or ARDL (23:1) equation or from estimating a
non-linear version.
   A common restriction on dynamic models in logarithms is that the long-run
coe¢ cient is unity. This can be tested by estimating

               yt = a0 + b0 xt + b1 (xt 1          yt 1 ) + (a1 + b1 )yt 1 + ut :

If b1 =   b1 =a1 = 1; then (a1 + b1 ) = 0:

23.2. ARCH
Asset prices tend to show volatility clustering, periods of high volatility followed
by periods of low volatility. This is often captured by assuming that the variance
of the asset price is positively serially correlated, so a high variance in one period


                                             136
makes it more likely that there will be a high variance in the next period. Suppose
the logarithm of the asset price is a random walk
                                     p t = p t 1 + "t
                                     p t = "t
Usually we assume that E("t ) = 0 and E("2t ) = 2 ; it has constant variance,
is homoskedastic. Here we shall assume that the variance changes through time
so E("2t ) = 2t ; it is heteroskedastic, and that the variance follows a …rst order
autoregression:
                                  2
                                  t =    + 2t 1 + vt :
This is Auto-Regressive Conditional Heteroskedasticity, ARCH. If we can esti-
mate this equation, we can use it to predict the variance in the future. This is
straightforward, our best estimate of 2t = "2t and since "2t = ( pt )2 we can just
run a regression of
                          ( pt )2 = + ( pt 1 )2 + vt :
The unconditional variance of returns is =(1    ) assuming the process is stable
  1 < < 1:
    Above we could estimate the variance directly, usually we assume that the
error from an estimated regression equation exhibits ARCH. Suppose that we
estimate
                                 yt = 0 xt + "t
where E("t ) = 0 and E("2t ) =    2
                                  t : The GARCH(1,1) …rst order Generalised ARCH
model is then
                                 2             2         2
                                 t = a0 + a1 " t i + b 2 t i

more lags could be added. Eviews can estimate GARCH models of various forms.

23.3. Final thought
Modern statistics and econometrics programs are very powerful, you can easily
estimate almost anything you want. The di¢ cult task is interpreting what the
program output is telling you. You have a better chance of interpreting the output
if you have: (a) graphed the data and know what it really measures; (b) inves-
tigated the historical or institutional context of the data; (c) thought about the
economics or other theoretical context; (d) understood the statistical technique
being used and (e) know the purpose of doing the statistical analysis. Try to let
the data speak for themselves rather than beating a confession out of them.

                                           137
24. Additional matrix results
24.1. The bivariate case in matrix algebra
Consider our earlier model

                                Yt =     1+   2 Xt + ut

for t = 1; 2; :::; T , that is a set of T equations.
                                             P 2 The errors, are ut = Yt     1       2 Xt :
Least squares chooses i to minimise             ut :
    In matrix form the model is

                                  y =X +u
                      2    3 2         3                   2    3
                        Y1       1 X1                        u1
                      6 Y2 7 6 1 X2 7                      6 u2 7
                      6    7 6         7  1
                                                          +6    7
                      4 :: 5 = 4 :: :: 5  2
                                                           4 :: 5
                        YT       1 XT                        uT
and we will use X 0 X where X 0 is the 2    T transpose of X; so X 0 X is 2      2
                                                P
                             (X 0 X) =    PT    P X2t
                                            Xt    Xt

X 0 X is a symmetric matrix so (X 0 X)0 = (X 0 X): We will also use the inverse of
X 0X                                             P 2        P
                     1            1                 Xt         Xt
                0
              (X X) = P 2            P     2
                                                   P
                         T    Xt ( Xt )              Xt      T
For the inverse to exist the matrix mustP    be non-singular,
                                                      P        with a non-zero deter-
minant. The determinant of X 0 X is T          Xt2 ( Xt )2 : Use class exercise (1)
week 2 to show this is also the variance of Xt :
    The sum of squared residuals is a scalar (a 1 1 matrix), u      b0 u
                                                                       b the product of
                     0
a (1 T ) vector u   b and a (T 1) vector u   b: If A is a n m matrix, and B is an
m k matrix, the product AB is an n k matrix. The transpose of the product
(AB)0 is B 0 A0 the product of a k m matrix B 0 with a m n matrix A0 : A0 B 0 is
not conformable, you cannot multiply a m n matrix by a k m matrix. Below
                  0
we set y 0 X b = b X 0 y: In general a matrix is not equal to its transpose, but these
are both scalars, so are equal to their transposes. Check this. We expand the sum



                                          138
of squared residuals as we did above:

                b0 u
                u  b = (y         X b)0 (y X b)
                                     0           0
                         = y 0 y + b X 0 X b 2b X 0 y
             X
             T             X              2     2X                X
                   b2t
                   u     =       Yt2 + (b1 T + b2    Xt2 + 2b1 b2   Xt )
             t=1
                                     X               X
                              2(b1       Xt + b 2          Xt Yt )
               0                                                          2
The scalar b X 0 X b is a quadratic form, i.e. of the form x0 Ax and the bi appear
in it: Quadratic forms play a big role in econometrics. A matrix, A; is positive
de…nite if for any a; a0 Aa > 0: Matrices with the structure X 0 X are always
positive de…nite, since they can be written as a sum of squares. De…ne z = Xa;
then z 0 z = a0 X 0 Xa is the sum of the squared elements of z.

24.2. Di¤erentiation with vectors and matrices


Consider the linear relation:
                                         P = x0a
                                                1xn nx1

   Then the di¤erential of P with respect to x or x0 is de…ned as :
                                  dP        dP
                                     = a and 0 = a0
                                  dx        dx
   In the case n= 2, we can write:
                                                   a1
                                 P = [x1 ; x2 ]
                                                   a2
                                     = x 1 a1 + x 2 a2

   Then
                                dP           dP
                                    = a1 and     = a2
                                dx1          dx2
   So
                                         dP
                              dP         dx1              a1
                                 =       dP      =             =a
                              dx         dx2
                                                          a2
   and

                                               139
                        dP    dP dP
                          0
                            =    ;    = [a1 ; a2 ] = a0
                        dx    dx1 dx2
Consider the quadratic form:

                                     Q= x0 A          x
                                          1xn (nxn)(nx1)


Then the derivative of Q with respect to x or x0 is de…ned as :
                             dQ          dQ
                                = 2Ax and 0 = 2x0 A
                             dx          dx
In the case n= 2, we can write:
                                            a11 a12         x1
                        Q = [x1 ; x2 ]
                                            a12 a22         x2
where for simplicity A is assumed to be symmetric. Expanding this gives:
                                              a11 x1 + a12 x2
                        Q = [x1 ; x2 ]
                                              a12 x1 + a22 x2
                                = a11 x21 + 2a12 x1 x2 + a22 x22

So:
             dQ                          dQ
                 = 2a11 x1 + 2a12 x2 and     = 2a12 x1 + 2a22 x2
             dx1                         dx2
Then
              "         #
                  dQ
      dQ          dx1             2a11 x1 + 2a12 x2              a11 a12   x1
         =        dQ        =                              =2
      dx          dx2
                                  2a12 x1 + 2a22 x2              a12 a22   x2
          = 2 A x
                (2x2)(2x1)

and
        dQ        dQ dQ
            =          ;      = [2a11 x1 + 2a12 x2 ; 2a12 x1 + 2a22 x2 ]
        dx0       dx1 dx2
                             a11 a12
              = 2 [x1 ; x2 ]
                             a12 a22
                    0
              = 2x A
                    1x2 2x2


                                            140
24.3. Gauss-Markov Theorem
We can derive many results without assuming normality. We have often claimed
that the mean or regression coe¢ cients are the minimum variance estimators in
the class of linear unbiased estimators. We now prove it for the general case.
Verbeek section 2.3 covers this. It applies to the mean when contains a single
element and X is just a column of ones.
   Consider another linear estimator of the form e = Cy and we assume that X
and C are …xed (non-stochastic) matrices
                          e = Cy = C(X + u) = CX + Cu
                       E(e) = CX + CE(u)

so e will be unbiased as long as CX = I: Write e = Cy = ((X 0 X) 1 X 0 + W )y;
that is W = C (X 0 X) 1 X: Then CX = I implies ((X 0 X) 1 X 0 + W )X = I or
(X 0 X) 1 X 0 X + W X = I or I + W X = I: This can only be true if W X = 0:
This also implies that X 0 W 0 = 0: Assume that this is the case to ensure that e is
unbiased. Let us look at the variance covariance matrix of e:This is

                       E(e      (e))(e    (e))0 = E(e          )(e       )0

since e is unbiased by assumption. From above
                          e =       + Cu =     + ((X 0 X) 1 X 0 + W )u
                   e          = (X 0 X) 1 X 0 u + W u

        E(e      )(e         )0 = E((X 0 X) 1 X 0 u + W u)((X 0 X) 1 X 0 u + W u)0
When we multiply out the brackets we have four terms, the …rst is

                       E((X 0 X) 1 X 0 uu0 X(X 0 X) 1 ) =      2
                                                                   (X 0 X) 1

the variance-covariance matrix of the least squares estimator. The second is

                                 E(W u u0 W 0 ) =       2
                                                            WW0

the third is
                   E((X 0 X) 1 X 0 uu0 W 0 ) =     2
                                                       (X 0 X) 1 X 0 W 0 = 0
since X 0 W 0 = 0: Similarly

                       E(W uu0 X(X 0 X) 1 ) =      2
                                                       W X(X 0 X) 1 = 0

                                             141
since XW = 0: So the Variance of any other linear unbiased estimator is

            V (e) = E(e (e))(e (e))0 =          2
                                                    [(X 0 X) 1 + W W 0 ]
                  = V (b) + 2 W W 0

since W W 0 is a positive de…nite matrix for W 6= 0, we have shown that in the
class of linear unbiased estimators the OLS estimator has the smallest variance.
An n n matrix, A is positive de…nite if the scalar quadratic form b0 Ab > 0 for
                                             0   0                   0
any T 1 vector b: In this casePwe2 requires b W W b > 0: De…ne z = W b an n 1
              0    0     0
vector then b W W b = z z =     zt a sum of squares which must be positive.




                                      142
25. Index

AR (autoregressive) 129, 134-7
  ARDL (autoregressive distributed lag) 134
  Asymptotic 98
  Average (arithmetic mean) 34, 40, 43, 96
  Bayes theorem/Bayesian statistics 16, 72-3,75-6, 96,105
  CAPM (capital asset pricing model) 107
  Central limit theorem 82, 86, 91, 98, 114
  Cobb Douglas production function 116
  Con…dence intervals 101
  Consistent 98
  Correlation coe¢ cient 42, 111
  Covariance 41, 79, 108-111
  Demand function 15,115
  Dummy variables 125-6
  Durbin Watson statistic 129,
  Dynamics 133-6
  ECM (error correction model) 136
  e¢ cient market hypothesis 36
  Exchange rates 89
  F distribution & tests 86, 123
  GARCH 136
  GDP/GNP, Gross Domestic/National Product 47, 62,
  Geometric mean 40, 65,
  Growth rates 51-3, 56, 88
  Hypothesis tests 99-105
  Index numbers 59-68
  In‡ation rates 51-4, 59,
  Interest rates 46, 87-8
  Kurtosis 43, 51-4, 82,
  Law of large numbers 92
  Least squares 95, 108-115, 119
  Logarithms 61, 82, 88, 115,
  Logistic 127
  Mean see average and geometric mean
  Median 34

                                     143
   Mode 34
   Moments 42-3, Method of moments 93, 95, 109, 118
   Monte Carlo 91-2
   Neyman-Pearson 94
   Normal distribution 82-5
   Partial Adjustment 135
   Predicted values 108, 114, 121
   Probability 68-76
   Production function, 116
   Proportions 99, 106, 127
   Random variables 77-87
   Regression, section 17 onwards
   Residuals 108-9, 111-4, 121, 124-5
   R squared and R bar squared 129
   Seasonality 126
   Signi…cance 104
   Skewness 43, 51
   Standard Deviation 40-1, 82,
   Standard Error 93 of mean 96-98, 102 of regression coe¢ cients 111-2, of re-
gression 112
   Standardised data 42, standard normal 83
   t distribution and test 86, 102, 104
   Time trend 17
   Unemployment 48, 52
   Variance 40, 78, 81, 96-7
   Variance-covariance matrix 120, 141




                                     144



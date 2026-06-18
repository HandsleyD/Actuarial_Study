---
normalized_id: shared-epub-reference-big-data-new-tricks-for-econom-hal-r
exam_code: SHARED
material_scope: big_data_new_tricks_for_econom_-_hal_r.epub
material_group: shared
document_type: epub-reference
source_repo_path: resources/source-material/shared/Big_Data_New_Tricks_for_Econom_-_Hal_R.epub
conversion_method: pandoc
qa_status: pending
---
# shared-epub-reference-big-data-new-tricks-for-econom-hal-r

<span id="index_split_000.html"></span>

*Journal of Economic Perspectives—Volume 28, Number 2—Spring 2014—Pages
3–28*

**Big Data: New Tricks for Econometrics**[†](#index_split_000.html_1)

Hal R. Varian

**C**omputers are now involved in many economic transactions and can
capture

omputers are now involved in many economic transactions and can capture

data associated with these transactions, which can then be manipulated

data associated with these transactions, which can then be manipulated

and analyzed. Conventional statistical and econometric techniques such

and analyzed. Conventional statistical and econometric techniques such

as regression often work well, but there are issues unique to big
datasets that may

as regression often work well, but there are issues unique to big
datasets that may

require different tools.

require different tools.

First, the sheer size of the data involved may require more power

First, the sheer size of the data involved may require more powerful
data

ful data

manipulation tools. Second, we may have more potential predictors than
appro-

manipulation tools. Second, we may have more potential predictors than
appro-

priate for estimation, so we need to do some kind of variable selection.
Third,

priate for estimation, so we need to do some kind of variable selection.
Third,

large datasets may allow for more fl e

large datasets may allow for more fl xible relationships than simple
linear models.

exible relationships than simple linear models.

Machine learning techniques such as decision trees, support vector
machines,

Machine learning techniques such as decision trees, support vector
machines,

neural nets, deep learning, and so on may allow for more effective ways
to model

neural nets, deep learning, and so on may allow for more effective ways
to model

complex relationships.

complex relationships.

In this essay,

In this essay I will describe a few of these tools for manipulating and
analyzing

, I will describe a few of these tools for manipulating and analyzing

big data. I believe that these methods have a lot to offer and should be
more widely

big data. I believe that these methods have a lot to offer and should be
more widely

known and used by economists. In fact, my standard advice to graduate
students

known and used by economists. In fact, my standard advice to graduate
students

these days is go to the computer science department and take a class in
machine

these days is go to the computer science department and take a class in
machine

learning. There have been ver

learning. There have been very fruitful collaborations between computer
scien-

y fruitful collaborations between computer scien-

tists and statisticians in the last decade or so, and I expect
collaborations between

tists and statisticians in the last decade or so, and I expect
collaborations between

computer scientists and econometricians will also be productive in the
future.

computer scientists and econometricians will also be productive in the
future.

■

■ *Hal Varian is Chief Economist, Google Inc., Mountain View,
California, and Emeritus*

*Professor of Economics, University of California, Berkeley, California.
His email address is*

[*hal@ischool.berkeley.edu.*](mailto:hal@ischool.berkeley.edu)

† To access the Appendix and disclosure statements, visit

[http://dx.doi.org/10.1257/jep.28.2.3
doi=10.1257/jep.28.2.3](http://dx.doi.org/10.1257/jep.28.2.3)

*4 Journal of Economic Perspectives*

**Tools to Manipulate Big Data**

Economists have historically dealt with data that fi

Economists have historically dealt with data that fits in a spreadsheet,
but that

ts in a spreadsheet, but that

is changing as new more-detailed data becomes available (see Einav and
Levin 2013,

is changing as new more-detailed data becomes available (see Einav and
Levin 2013,

for several examples and discussion). If you have more than a million or
so rows

for several examples and discussion). If you have more than a million or
so rows

in a spreadsheet, you probably want to store it in a relational
database, such as

in a spreadsheet, you probably want to store it in a relational
database, such as

MySQL. Relational databases offer a fl

MySQL. Relational databases offer a flexible way to store, manipulate,
and retrieve

exible way to store, manipulate, and retrieve

data using a Structured Quer

data using a Structured Query Language (SQL), which is easy to learn and
ver

y Language (SQL), which is easy to learn and very

y

useful for dealing with medium-sized datasets.

useful for dealing with medium-sized datasets.

However,

However if you have several gigabytes of data or several million obser

, if you have several gigabytes of data or several million observations,

vations,

standard relational databases become unwieldy.

standard relational databases become unwieldy Databases to manage data
of this

. Databases to manage data of this

size are generically known as “NoSQL” databases. The term is used rather
loosely,

size are generically known as “NoSQL” databases. The term is used rather
loosely

,

but is sometimes interpreted as meaning “not only SQL.” NoSQL databases
are

but is sometimes interpreted as meaning “not only SQL.” NoSQL databases
are

more primitive than SQL databases in terms of data manipulation
capabilities but

more primitive than SQL databases in terms of data manipulation
capabilities but

can handle larger amounts of data.

can handle larger amounts of data.

Due to the rise of computer-

Due to the rise of computer mediated transactions, many companies have

-mediated transactions, many companies have

found it necessar

found it necessary to develop systems to process billions of
transactions per day.

y to develop systems to process billions of transactions per day For

. For

example, according to Sullivan (2012), Google has seen 30 t

example, according to Sullivan (2012), Google has seen 30 rillion URLs,
crawls over

trillion URLs, crawls over

20 b

20 illion of those a day,

billion of those a day and answers 100 b

, and answers 100 illion search queries a month. Analyzing

billion search queries a month. Analyzing

even one

even one day’s

day’ worth of data of this size is virtually impossible with
conventional

s worth of data of this size is virtually impossible with conventional

databases. The challenge of dealing with datasets of this size led to
the development

databases. The challenge of dealing with datasets of this size led to
the development

of several tools to manage and analyze big data.

of several tools to manage and analyze big data.

A number of these tools are proprietar

A number of these tools are proprietary to Google, but have been
described in

y to Google, but have been described in

academic publications in suffi

academic publications in suffic

ient detail that open-source implementations have

cient detail that open-source implementations have

been developed. [Ta](#index_split_000.html_3)

[been developed. T ble](#index_split_000.html_3)

[able 1](#index_split_000.html_3) contains both the Google name and the
name of related

[1 contains both the Google name and the name of
related](#index_split_000.html_3)

open-source tools. Further details can be found in the Wikipedia entries
associated

open-source tools. Further details can be found in the Wikipedia entries
associated

with the tool names.

with the tool names.

Though these tools can be run on a single computer for learning
purposes, real

Though these tools can be run on a single computer for learning
purposes, real

applications use large clusters of computers such as those provided by
Amazon, Google,

applications use large clusters of computers such as those provided by
Amazon, Google,

Microsoft, and other cloud-computing providers. The ability to rent
rather than buy

Microsoft, and other cloud-computing providers. The ability to rent
rather than buy

data storage and processing has turned what was previously a fi x

data storage and processing has turned what was previously a fi ed cost
of computing

xed cost of computing

into a variable cost and has lowered the barriers to entr

into a variable cost and has lowered the barriers to entry for working
with big data.

y for working with big data.

**Tools to Analyze Data**

The outcome of the big-data processing described above is often a
“small” table

The outcome of the big-data processing described above is often a
“small” table

of data that may be directly human readable or can be loaded into an SQL
database,

of data that may be directly human readable or can be loaded into an SQL
database,

a statistics package, or a spreadsheet. If the extracted data is still
inconveniently

a statistics package, or a spreadsheet. If the extracted data is still
inconveniently

large, it is often possible to select a subsample for statistical
analysis. At Google, for

large, it is often possible to select a subsample for statistical
analysis. At Google, for

example, I

example, I have found that random samples on the order of 0.1

have found that random samples on the order of 0.1 percent work fi

percent work fine

ne

for analysis of business data.

for analysis of business data.

Once a dataset has been extracted, it is often necessar

Once a dataset has been extracted, it is often necessary to do some
explor-

y to do some explor

ator

atory data analysis along with consistency and data-cleaning tasks. This
is something

y data analysis along with consistency and data-cleaning tasks. This is
something

*Hal R. Varian 5*

*Table 1*

**Tools for Manipulating Big Data**

*Google name*

*Analog*

*Description*

Google File System

Hadoop File System

This system supports fi les so large that they must be

distributed across hundreds or even thousands of

computers.

Bigtable

Cassandra

This is a table of data that lives in the Google File

System. It too can stretch over many computers.

MapReduce

Hadoop

This is a system for accessing and manipulating

data in large data structures such as Bigtables.

MapReduce allows you to access the data in parallel,

using hundreds or thousands of machines to extract

the data you are interested in. The query is “mapped”

to the machines and is then applied in parallel to

different shards of the data. The partial calculations

are then combined (“reduced”) to create the

summary table you are interested in.

Sawzall

Pig

This is a language for creating MapReduce jobs.

Go

None

Go is fl exible open-source, general-purpose

computer language that makes it easier to do

parallel data processing.

Dremel, BigQuery

Hive, Drill, Impala

This is a tool that allows data queries to be written in

a simplifi ed form of of Structured Query Language

(SQL). With Dremel it is possible to run an SQL

query on a petabtye of data (1,000 terabytes) in a

few seconds.

of an art, which can be learned only by practice, but data-cleaning
tools such as

of an art, which can be learned only by practice, but data-cleaning
tools such as

OpenRefi

OpenRefine and DataWr

ne and DataW angler can be used to assist in data cleansing.

rangler can be used to assist in data cleansing.

Data analysis in statistics and econometrics can be broken down into
four c

Data analysis in statistics and econometrics can be broken down into
four ate-

cate-

gories: 1)

gories: 1) prediction, 2)

prediction, 2) summarization, 3)

summarization, 3) estimation, and 4)

estimation, and 4) hypothesis testing.

hypothesis testing.

Machine learning is concerned primarily with prediction; the closely
related

Machine learning is concerned primarily with prediction; the closely
related

fi e

fi ld of data mining is also concerned with summarization, and
particularly with

eld of data mining is also concerned with summarization, and
particularly with

fi n

fi ding interesting patterns in the data. Econometricians,
statisticians, and data

nding interesting patterns in the data. Econometricians, statisticians,
and data

mining specialists are generally looking for insights that can be
extracted from

mining specialists are generally looking for insights that can be
extracted from

the data. Machine learning specialists are often primarily concerned
with devel-

the data. Machine learning specialists are often primarily concerned
with devel-

oping high-per

oping high-performance computer systems that can provide useful
predictions in

formance computer systems that can provide useful predictions in

the presence of challenging computational constraints. Data science, a
somewhat

the presence of challenging computational constraints. Data science, a
somewhat

newer term, is concerned with both prediction and summarization, but
also with

newer term, is concerned with both prediction and summarization, but
also with

data manipulation, visualization, and other similar tasks. Note that
terminology is

data manipulation, visualization, and other similar tasks. Note that
terminology is

not standardized in these areas, so these descriptions refl

not standardized in these areas, so these descriptions refle

ct general usage, not

ect general usage, not

hard-and-fast defi

hard-and-fast definitions. Other terms used to describe computer-

nitions. Other terms used to describe computer assisted data anal-

-assisted data anal-

ysis include knowledge extraction, information discover

ysis include knowledge extraction, information discovery,

y information har

information harvesting,

vesting,

data archaeology,

data archaeology data pattern processing, and explorator

, data pattern processing, and exploratory data analysis.

y data analysis.

*6 Journal of Economic Perspectives*

Much of applied econometrics is concerned with detecting and summarizing

Much of applied econometrics is concerned with detecting and summarizing

relationships in the data. The most common tool used for summarization
is

relationships in the data. The most common tool used for summarization
is

(linear) regression analysis. As we shall see, machine learning offers a
set of tools

(linear) regression analysis. As we shall see, machine learning offers a
set of tools

that can usefully summarize various sorts of nonlinear relationships in
the data.

that can usefully summarize various sorts of nonlinear relationships in
the data.

We

W

e will focus on these regression-like tools because they are the most
natural for

will focus on these regression-like tools because they are the most
natural for

economic applications.

economic applications.

In the most general formulation of a statistical prediction problem, we
are

In the most general formulation of a statistical prediction problem, we
are

interested in understanding the conditional distribution of some
variable

interested in understanding the conditional distribution of some
variable *y* given

given

some other variables

some other variables *x* = (

( *x* 1 ,

, … ,

… , *x P* ). If we want a point prediction, we can use the

). If we want a point prediction, we can use the

mean or median of the conditional distribution.

mean or median of the conditional distribution.

In machine learning, the

In machine learning, the *x*-variables are usually called “predictors”
or

-variables are usually called “predictors” or

“features.” The focus of machine learning is to fi

“features.” The focus of machine learning is to find some function that
provides a

nd some function that provides a

good prediction of

good prediction of *y* as a function of

as a function of *x*. Historically,

. Historically most work in machine learning

, most work in machine learning

has involved cross-section data where it is natural to think of the data
being inde-

has involved cross-section data where it is natural to think of the data
being inde-

pendent and identically distributed (IID) or at least independently
distributed.

pendent and identically distributed (IID) or at least independently
distributed.

The data may be “fat,” which means lots of predictors relative to the
number of

The data may be “fat,” which means lots of predictors relative to the
number of

obser

observations, or “tall” which means lots of obser

vations, or “tall” which means lots of observations relative to the
number

vations relative to the number

of predictors.

of predictors.

We

W

e typically have some obser

typically have some observed data on

ved data on *y* and

and *x*, and we want to compute a

, and we want to compute a

“good” prediction of

“good” prediction of *y* given new values of

given new values of *x*. Usually “good” means it minimizes

. Usually “good” means it minimizes

some loss function such as the sum of squared residuals, mean of
absolute value

some loss function such as the sum of squared residuals, mean of
absolute value

of residuals, and so on. Of course, the relevant loss is that associated
with

of residuals, and so on. Of course, the relevant loss is that associated
with *new*

out-of-sample obser

out-of-sample observations of

vations of *x*, not the obser

, not the observations used to fi

vations used to fit the model.

t the model.

When confronted with a prediction problem of this sort an economist
would

When confronted with a prediction problem of this sort an economist
would

think immediately of a linear or logistic regression. However,

think immediately of a linear or logistic regression. However there may
be better

, there may be better

choices, particularly if a lot of data is available. These include
nonlinear methods

choices, particularly if a lot of data is available. These include
nonlinear methods

such as 1)

such as 1) classifi

classific

ation and regression trees (C

cation and regression trees (CART

AR ); 2)

T); 2) random forests; and

random forests; and

3\)

3\) penalized regression such as LASSO, LARS, and elastic nets. (There
are also

penalized regression such as LASSO, LARS, and elastic nets. (There are
also

other techniques, such as neural nets, deep learning, and support vector
machines,

other techniques, such as neural nets, deep learning, and support vector
machines,

which I

which I do not cover in this review.

do not cover in this review ) Much more detail about these methods can

.) Much more detail about these methods can

be found in machine learning texts; an excellent treatment is available
in Hastie,

be found in machine learning texts; an excellent treatment is available
in Hastie,

Tibshirani, and Friedman (2009), which can be freely downloaded.
Additional

Tibshirani, and Friedman (2009), which can be freely downloaded.
Additional

suggestions for further reading are given at the end of this article.

suggestions for further reading are given at the end of this article.

**General Considerations for Prediction**

Our goal with prediction is typically to get good

Our goal with prediction is typically to get good *out-of-sample
predictions.* Most

Most

of us know from experience that it is all too easy to construct a
predictor that

of us know from experience that it is all too easy to construct a
predictor that

works well in-sample but fails miserably out-of-sample. To

works well in-sample but fails miserably out-of-sample. T take a trivial
example,

take a trivial example,

*n* linearly independent regressors will fi

linearly independent regressors will fit

t *n* obser

observations per

vations perfectly but will usually

fectly but will usually

have poor out-of-sample per

have poor out-of-sample performance. Machine learning specialists refer
to this

formance. Machine learning specialists refer to this

phenomenon as the “overfi

phenomenon as the “overfitting problem” and have come up with several
ways to

tting problem” and have come up with several ways to

deal with it.

deal with it.

*Big Data: New Tricks for Econometrics 7*

First, since simpler models tend to work better for out-of-sample
forecasts,

First, since simpler models tend to work better for out-of-sample
forecasts,

machine learning experts have come up with various ways to penalize
models

machine learning experts have come up with various ways to penalize
models

for excessive complexity.

for excessive complexity In the machine learning world, this is known as

. In the machine learning world, this is known as

“regularization,” and we will describe some examples below.

“regularization,” and we will describe some examples below Economists
tend to

. Economists tend to

prefer simpler models for the same reason, but have not been as explicit
about

prefer simpler models for the same reason, but have not been as explicit
about

quantifying complexity costs.

quantifying complexity costs.

Second, it is conventional to divide the data into separate sets for the
purpose

Second, it is conventional to divide the data into separate sets for the
purpose

of training, testing, and validation. Yo

of training, testing, and validation. Y u use the training data to
estimate a model,

ou use the training data to estimate a model,

the validation data to choose your model, and the testing data to
evaluate how well

the validation data to choose your model, and the testing data to
evaluate how well

your chosen model per

your chosen model performs. (Often validation and testing sets are
combined.)

forms. (Often validation and testing sets are combined.)

Third, if we have an explicit numeric measure of model complexity,

Third, if we have an explicit numeric measure of model complexity we can

, we can

view it as a parameter that can be “tuned” to produce the best out of
sample predic-

view it as a parameter that can be “tuned” to produce the best out of
sample predic-

tions. The standard way to choose a good value for such a tuning
parameter is to

tions. The standard way to choose a good value for such a tuning
parameter is to

use

use *k-fold cross-validation*.

1\. Divide the data into *k* roughly equal subsets (folds) and label
them by

*s* = 1, … , *k*. Start with subset *s* = 1.

2\. Pick a value for the tuning parameter.

3\. Fit your model using the *k* − 1 subsets other than subset *s*.

4\. Predict for subset *s* and measure the associated loss.

5\.

Stop

if

*s* = *k*, otherwise increment *s* by 1 and go to step 2.

Common choices for *k* are 10, 5, and the sample size minus 1 (“leave
one out”).

After cross-validation, you end up with *k* values of the tuning
parameter and the

associated loss which you can then examine to choose an appropriate
value for

the tuning parameter. Even if there is no tuning parameter, it is
prudent to use

cross-validation to report goodness-of-fi t measures since it measures
out-of-sample

performance, which is generally more meaningful than in-sample
performance.

The test-train cycle and cross-validation are ver

The test-train cycle and cross-validation are very commonly used in
machine

y commonly used in machine

learning and, in my view,

learning and, in my view should be used much more in economics,
particularly

, should be used much more in economics, particularly

when working with large datasets. For many years, economists have
reported

when working with large datasets. For many years, economists have
reported

in-sample goodness-of-fi

in-sample goodness-of-fit

measures using the excuse that we had small datasets.

t measures using the excuse that we had small datasets.

But now that larger datasets have become available, there is no reason
not to use

But now that larger datasets have become available, there is no reason
not to use

separate training and testing sets. Cross-validation also turns out to
be a ver

separate training and testing sets. Cross-validation also turns out to
be a very useful

y useful

technique, particularly when working with reasonably large data. It is
also a much

technique, particularly when working with reasonably large data. It is
also a much

more realistic measure of prediction per

more realistic measure of prediction performance than measures commonly
used

formance than measures commonly used

in economics.

in economics.

**Classifi cation and Regression Trees**

Let us start by considering a discrete variable regression where our
goal is

Let us start by considering a discrete variable regression where our
goal is

to predict a 0 –

to predict a 0 1 outcome based on some set of features (what economists
would

–1 outcome based on some set of features (what economists would

call explanator

call explanatory variables or predictors). In machine learning, this is
known as a

y variables or predictors). In machine learning, this is known as a

*8 Journal of Economic Perspectives*

*Figure 1*

**A Classifi cation Tree for Survivors of the *Titanic***

class \>= 2.5

yes

no

died

age \>= 16

370 / 501

lived

class \>= 1.5

34 / 36

died

lived

145 / 233

174 / 276

*Note:* See text for interpretation.

*classifi cation problem*. A common example would be classifying email
into “spam” or

. A common example would be classifying email into “spam” or

“not spam” based on characteristics of the email. Economists would
typically use a

“not spam” based on characteristics of the email. Economists would
typically use a

generalized linear model like a logit or probit for a classifi

generalized linear model like a logit or probit for a classification p

cation roblem.

problem.

A quite different way to build a classifi

A quite different way to build a classifier is to use a decision tree.
Most econo-

er is to use a decision tree. Most econo-

mists are familiar with decision trees that describe a sequence of
decisions that results

mists are familiar with decision trees that describe a sequence of
decisions that results

in some outcome. A tree classifi e

in some outcome. A tree classifi r has the same general form, but the
decision at the

er has the same general form, but the decision at the

end of the process is a choice about how to classify the obser

end of the process is a choice about how to classify the observation.
The goal is to

vation. The goal is to

construct (or “grow”) a decision tree that leads to good out-of-sample
predictions.

construct (or “grow”) a decision tree that leads to good out-of-sample
predictions.

Ironically,

Ironically one of the earliest papers on the automatic construction of
deci-

, one of the earliest papers on the automatic construction of deci-

sion trees (Morgan and Sonquist 1963) was coauthored by an economist.
However,

sion trees (Morgan and Sonquist 1963) was coauthored by an economist.
However

,

the technique did not really gain much traction until 20

the technique did not really gain much traction until 20 years later in
the work of

years later in the work of

Breiman, Friedman, Olshen, and Stone (1984). Nowadays this prediction
technique

Breiman, Friedman, Olshen, and Stone (1984). Nowadays this prediction
technique

is known as “classifi

is known as “classification and regression trees,” or “C

cation and regression trees,” or “CART

AR .

T ”

To

T

o illustrate the use of tree models, I

illustrate the use of tree models, I used the

used the **R** package

package **rpart** to fi n

to fi d a tree

nd a tree

that predicts

that predicts *Titanic* sur

survivors using just two

vivors using just two variables: age and class of travel.

variables: age and class of travel. [1](#index_split_000.html_6) The

The

resulting tree is shown in [Figure](#index_split_000.html_6)

[resulting tree is shown in Figure 1,](#index_split_000.html_6) and the
rules depicted in the tree are shown in

[1, and the rules depicted in the tree are shown
in](#index_split_000.html_6)

[Ta](#index_split_000.html_7)

[T ble 2](#index_split_000.html_7)

[able .](#index_split_000.html_7) The rules fi

[2. The rules fi](#index_split_000.html_7)t the data reasonably well,
misclassifying about 30 p

t the data reasonably well, misclassifying about 30 ercent of the

percent of the

obser

observations in the testing set.

vations in the testing set.

This classifi

This classification can also be depicted in the “partition plot”
[(Figure 2](#index_split_000.html_7)

[cation can also be depicted in the “partition plot” (Figure
)](#index_split_000.html_7), which

[2), which](#index_split_000.html_7)

shows how the tree divides up the space of age and class pairs into
rectangular

shows how the tree divides up the space of age and class pairs into
rectangular

1 [All data and code used in this paper can be found in the online
Appendix available at http://e-jep.org.](http://e-jep.org)

*Hal R. Varian 9*

*Table 2*

**Tree Model in Rule Form**

*Features*

*Predicted*

*Actual/Total*

Class 3

Died

370/501

Class 1–2, younger than 16

Lived

34/36

Class 2, older than 16

Died

145/233

Class 1, older than 16

Lived

174/276

*Figure 2*

**The Simple Tree Model Predicts Death in Shaded Region**

*(empty circles indicate survival; circles with* x *’s indicate death)*

80

60

40

Age

20

0

1st

2nd

3rd

Class

regions. Of course, the partition plot can only be used for two v

regions. Of course, the partition plot can only be used for two
ariables, while a tree

variables, while a tree

representation can handle an arbitrarily large number.

representation can handle an arbitrarily large number

It turns out that there are computationally effi c

It turns out that there are computationally effi ient ways to construct
classifi c

cient ways to construct classifi ation

cation

trees of this sort. These methods generally are restricted to binar

trees of this sort. These methods generally are restricted to binary
trees (two b

y trees (two ranches

branches

*10 Journal of Economic Perspectives*

*Table 3*

**Logistic Regression of Survival versus Age**

*Coeffi cient*

*Estimate*

*Standard error*

*t value*

*p value*

Intercept

0.465

0.0350

13.291

0.000

Age

− 0.002

0.001

− 1.796

0.072

*Note:* Logistic regression relating survival (0 or 1) to age in years.

at each node). They can be used for classifi c

at each node). They can be used for classifi ation with multiple
outcomes (“classifi c

cation with multiple outcomes (“classifi a-

ca-

tion trees”) or with continuous dependent variables (“regression
trees”).

tion trees”) or with continuous dependent variables (“regression
trees”).

Tr

T ees tend to work well for problems where there are important
nonlinearities

rees tend to work well for problems where there are important
nonlinearities

and interactions. As an example, let us continue with the

and interactions. As an example, let us continue with the *Titanic* data
and create a

data and create a

tree that relates sur

tree that relates survival to age. In this case, the rule generated by
the tree is ver

vival to age. In this case, the rule generated by the tree is very

y

simple: predict “sur

simple: predict “survive” if age

vive” if age \< 8

.5

8.5 years. We

years. W can examine the same data with a

can examine the same data with a

logistic regression to estimate the probability of sur

logistic regression to estimate the probability of survival as a
function of age, with

vival as a function of age, with

results reported i[n Ta](#index_split_000.html_8)

[results reported in T ble 3.](#index_split_000.html_8)

[able 3.](#index_split_000.html_8)

The tree model suggests that age is an important predictor of sur

The tree model suggests that age is an important predictor of survival,
while the

vival, while the

logistic model says it is barely important. This discrepancy is
explained in [Figure](#index_split_000.html_9)

[logistic model says it is barely important. This discrepancy is
explained in Figure 3](#index_split_000.html_9)

[3](#index_split_000.html_9)

where we plot sur

where we plot survival rates by age bins. Here we see that sur

vival rates by age bins. Here we see that survival rates for the

vival rates for the

youngest passengers were relatively high, and sur

youngest passengers were relatively high, and survival rates for older
passengers

vival rates for older passengers

were relatively low.

were relatively low For passengers between these two extremes, age
didn’t

. For passengers between these two extremes, age didn’ matter

t matter

ver

very much. So what mattered for sur

y much. So what mattered for survival is not so much age, but whether
the

vival is not so much age, but whether the

passenger was a child or elderly.

passenger was a child or elderly It would be diffi c

. It would be diffi ult to discover this pattern from a

cult to discover this pattern from a

logistic regression alone.

logistic regression alone. [2](#index_split_000.html_8)

Tr

T ees also handle missing data well. Perlich, Provost, and Simonoff
(2003)

rees also handle missing data well. Perlich, Provost, and Simonoff
(2003)

examined several standard datasets and found that “logistic regression
is better for

examined several standard datasets and found that “logistic regression
is better for

smaller data sets and tree induction for larger data sets.”
Interestingly enough, trees

smaller data sets and tree induction for larger data sets.”
Interestingly enough, trees

tend

tend *not* to work ver

to work very well if the underlying relationship really is linear,

y well if the underlying relationship really is linear but there are

, but there are

hybrid models such as RuleFit (Friedman and Popescu 2005) that can
incorporate

hybrid models such as RuleFit (Friedman and Popescu 2005) that can
incorporate

both tree and linear relationships among variables. However,

both tree and linear relationships among variables. However even if
trees may not

, even if trees may not

improve on predictive accuracy compared to linear models, the age
example shows

improve on predictive accuracy compared to linear models, the age
example shows

that they may reveal aspects of the data that are not apparent from a
traditional

that they may reveal aspects of the data that are not apparent from a
traditional

linear modeling approach.

linear modeling approach.

**Pruning Trees**

One problem with trees is that they tend to overfi t

One problem with trees is that they tend to overfi the data. Just as a
regression

t the data. Just as a regression

with

with *n* obser

observations and

vations and *n* variables will give you a good fi

variables will give you a good fit

in-sample, a tree with

t in-sample, a tree with

many branches will also fi t

many branches will also fi the training data well. In either case,
predictions using

t the training data well. In either case, predictions using

new data, such as the test set, could be ver

new data, such as the test set, could be very poor.

y poor

2 It is true that if you *knew* that there was a nonlinearity in age,
you could use age dummies in the logit model to capture this effect.
However the tree formulation made this nonlinearity immediately
apparent.

*Big Data: New Tricks for Econometrics 11*

*Figure 3*

***Titanic*** **Survival Rates by Age Group**

0.7

0.6

ed 0.5

viv

0.4

action surFr

0.3

0.2

0.1

10

20

30

40

50

60

70

80

Age bin

*Notes:* The fi gure shows the mean survival rates for different age
groups along with confi dence intervals. The age bin 10 means “10 and
younger,” the next age bin is “older than 10 through 20,” and so on.

The most common solution to this problem is to “prune” the tree by

The most common solution to this problem is to “prune” the tree by

imposing a cost for complexity.

imposing a cost for complexity There are various measures of complexity,

. There are various measures of complexity but a

, but a

common one is the number of terminal nodes (also known as “leafs”). The
cost of

common one is the number of terminal nodes (also known as “leafs”). The
cost of

complexity is a tuning parameter that is chosen to provide the best
out-of-sample

complexity is a tuning parameter that is chosen to provide the best
out-of-sample

predictions, which is typically measured using the 10-fold

predictions, which is typically measured using the 10-fold
cross-validation proce-

cross-validation proce-

dure mentioned earlier.

dure mentioned earlier

A typical tree estimation session might involve dividing your data into
ten f

A typical tree estimation session might involve dividing your data into
ten olds,

folds,

using nine of the folds to grow a tree with a particular complexity,

using nine of the folds to grow a tree with a particular complexity and
then predict

, and then predict

on the excluded fold. Repeat the estimation with different values of the
complexity

on the excluded fold. Repeat the estimation with different values of the
complexity

parameter using other folds and choose the value of the complexity
parameter that

parameter using other folds and choose the value of the complexity
parameter that

minimizes the out-of-sample classifi c

minimizes the out-of-sample classifi ation error.

cation error (Some researchers recommend

. (Some researchers recommend

being a bit more aggressive and advocate choosing the complexity
parameter that is

being a bit more aggressive and advocate choosing the complexity
parameter that is

one standard deviation lower than the loss-minimizing value.)

one standard deviation lower than the loss-minimizing value.)

Of course, in practice, the computer program handles most of these
details

Of course, in practice, the computer program handles most of these
details

for you. In the examples in this paper,

for you. In the examples in this paper I

, I mostly use default choices to keep things

mostly use default choices to keep things

simple, but in practice these defaults will often be adjusted by the
analyst. As with any

simple, but in practice these defaults will often be adjusted by the
analyst. As with any

other statistical procedure, skill, experience, and intuition are
helpful in coming up

other statistical procedure, skill, experience, and intuition are
helpful in coming up

with a

with good answer.

a good answer Diagnostics, exploration, and experimentation are just as
useful

. Diagnostics, exploration, and experimentation are just as useful

with these methods as with regression techniques.

with these methods as with regression techniques.

*12 Journal of Economic Perspectives*

*Figure 4*

**A ctree for Survivors of the *Titanic***

*(black bars indicate fraction of the group that survived)*

1

sex

*p* \< 0.001

female

male

2

5

pclass

pclass

*p* \< 0.001

*p* \< 0.001

≤ 1

\>1

6

9

age

age

*p* = 0.01

*p* \< 0.001

≤ 2

\> 2

≤ 9

\> 9

10

≤

sibsp

54

\> 54

*p* \< 0.001

≤ 2

\> 2

Node 3 ( *n* = 236)

Node 4 ( *n* = 152) Node 7 ( *n* = 123)

Node 8 ( *n* = 28)

Node 11 ( *n* = 24) Node 12 ( *n* = 16) Node 13 ( *n* = 467)

0

1

0

1

0

1

0

1

0

1

0

1

0

1

0.8

0.8

0.8

0.8

0.8

0.8

0.8

0.6

0.6

0.6

0.6

0.6

0.6

0.6

0.4

0.4

0.4

0.4

0.4

0.4

0.4

0.2

0.2

0.2

0.2

0.2

0.2

0.2

1

0

1

0

1

0

1

0

1

0

1

0

1

0

*Note:* See text for interpretation.

There are many other approaches to creating trees, including some that
are

There are many other approaches to creating trees, including some that
are

explicitly statistical in nature. For example, a “conditional inference
tree,” or ctree

explicitly statistical in nature. For example, a “conditional inference
tree,” or ctree

for short, chooses the structure of the tree using a sequence of
hypothesis tests.

for short, chooses the structure of the tree using a sequence of
hypothesis tests.

The resulting trees tend to need ver

The resulting trees tend to need very little pruning (Hothorn, Hornik,
and Zeileis

y little pruning (Hothorn, Hornik, and Zeileis

2006). An example for the

2006). An example for the *Titanic* data is shown in [Figure
4.](#index_split_000.html_10)

[data is shown in Figure 4.](#index_split_000.html_10)

The fi

The fir

st node divides by gender.

rst node divides by gender The second node then divides by class. In

. The second node then divides by class. In

the right-hand branches, the third node divides by age, and a fourth
node divides

the right-hand branches, the third node divides by age, and a fourth
node divides

by the number of siblings plus spouse aboard. The bins at the bottom of
the fi

by the number of siblings plus spouse aboard. The bins at the bottom of
the figure

gure

show the total number of people in that leaf and a graphical depiction
of their

show the total number of people in that leaf and a graphical depiction
of their

sur

survival rate. One might summarize this tree by the following principle:
“women

vival rate. One might summarize this tree by the following principle:
“women

and children fi

and children fir

st . .

rst . .

. particularly if they were traveling fi

. particularly if they were traveling fir

st class.” This simple

rst class.” This simple

example again illustrates that classifi

example again illustrates that classific

ation trees can be helpful in summarizing

cation trees can be helpful in summarizing

relationships in data, as well as predicting
outcomes[.](#index_split_000.html_10)

[relationships in data, as well as predicting
outcomes.3](#index_split_000.html_10)

**An Economic Example Using Home Mortgage Disclosure Act Data**

Munnell, To

Munnell, T otell, Browne, and McEneaney (1996) examined mortgage lending

ootell, Browne, and McEneaney (1996) examined mortgage lending

in Boston to see if race played a signifi

in Boston to see if race played a significant role in determining who
was approved

cant role in determining who was approved

for a mortgage. The primar

for a mortgage. The primary econometric technique was a logistic
regression where

y econometric technique was a logistic regression where

3 For two excellent tutorials on tree methods that use the *Titanic*
data, see Stephens and Wehrley (2014).

*Hal R. Varian 13*

*Figure 5*

**Home Mortgage Disclosure Act (HMDA) Data Tree**

1

dmi

dmi

*p*

*p* \<

0.001

\< 0.001

no

yes

yes

2

ccs

*p*

*p* \<

0.001

\< 0.001

≤3

\> 3

\> 3

3

12

dir

pbcr

pbcr

*p*

*p* \<

0.001

\< 0.001

*p*

*p* \<

0.001

\< 0.001

≤ 0.431

≤ 0.431

\> 0.431

\> 0.431

no

yes

yes

4

9

13

ccs

mcs

mcs

lvr

*p*

*p* \<

0.001

\< 0.001

*p*

*p* =

0.011

= 0.011

*p*

*p* =

0.001

= 0.001

≤1

\>1

≤ 0.953

≤ 0.953 \> 0.953

\> 0.953

6

14

pbcr

pbcr

dir

*p*

*p* \<

0.001

\< 0.001

*p* \< 0.001

*p* \< 0.001

≤ 1

\> 1

≤ 0.415

≤ 0.415

\> 0.415

\> 0.415

15

black

black

yes

yes

no

*p* = 0.021

*p* = 0.021

no

yes

yes

Node 5 ( *n* = 1,272) Node 7 ( *n* = 37) Node 8 ( *n* = 479) Node 10 (
*n* = 48) Node 11 ( *n* = 50) Node 16 ( *n* = 246) Node 17 ( *n* = 71)
Node 18 ( *n* = 36) Node 19 ( *n* *n* =

10\) Node 20 ( *n*

*n* =

83\) Node 21 ( *n*

*n* =

48\)

=

o

1

o

1

o

1

o

1

o

1

o

1

o

1

o

1

o

1

o

1

o

1

nno

nno

nno

nno

nno

nno

nno

nno

nno

nno

nno

0.8

0.8

0.8

0.8

0.8

0.8

0.8

0.8

0.8

0.8

0.8

0.6

0.6

0.6

0.6

0.6

0.6

0.6

0.6

0.6

0.6

0.6

0.4

0.4

0.4

0.4

0.4

0.4

0.4

0.4

0.4

0.4

0.4

s

0.2

s

0.2

s

0.2

s

0.2

s

0.2

s

0.2

s

0.2

s

0.2

s

0.2

s

0.2

s

0.2

yeyes

0

ye

0

yes

0

ye

0

yes

0

ye

0

yes

0

ye

0

yes

0

ye

0

yes

0

ye

0

yes

0

ye

0

yes

0

ye

0

yes

0

ye

0

yes

0

ye

0

yes

0

*Notes:* Figure 5 shows a conditional tree estimated using the **R**
package **party**. The black bars indicate the fraction of each group
who were denied mortgages. The most important determinant of this is

the variable “dmi,” or “denied mortgage insurance.” Other variables are:
“dir,” debt payments to total income ratio; “hir,” housing expenses to
income ratio; “lvr,” ratio of size of loan to assessed value of
property; “ccs,” consumer credit score; “mcs,” mortgage credit score;
“pbcr,” public bad credit record;

“dmi,” denied mortgage insurance; “self,” self-employed; “single,”
applicant is single; “uria,” 1989

Massachusetts unemployment rate applicant’s industry; “condominium,”
unit is condominium; “black,”

race of applicant black; and “deny,” mortgage application denied.

race was included as one of the predictors. The coeffi

race was included as one of the predictors. The coefficient on race
showed a statis-

cient on race showed a statis-

tically signifi

tically signific

ant negative impact on probability of getting a mortgage for black

cant negative impact on probability of getting a mortgage for black

applicants. This fi

applicants. This finding prompted considerable subsequent debate and
discussion;

nding prompted considerable subsequent debate and discussion;

see Ladd (1998) for an over

see Ladd (1998) for an overview.

view

Here I

Here I examine this question using the tree-based estimators described
in

examine this question using the tree-based estimators described in

the previous section. The data consists of 2,380

the previous section. The data consists of 2,380 obser

observations of 12

vations of 12 predictors,

predictors,

one of which was race. [Figure](#index_split_000.html_11)

[one of which was race. Figure 5](#index_split_000.html_11) shows a
conditional tree estimated using the

[5 shows a conditional tree estimated using
the](#index_split_000.html_11)

**R** package

package **party**.

The tree fi t

The tree fi s pretty well, misclassifying 228 of the 2,380

ts pretty well, misclassifying 228 of the 2,380 obser

observations for

vations for

an error rate of 9.6

an error rate of 9.6 percent. By comparison, a simple logistic
regression does

percent. By comparison, a simple logistic regression does

slightly better,

slightly better misclassifying 225 of the 2,380

, misclassifying 225 of the 2,380 obser

observations, leading to an error

vations, leading to an error

rate of 9.5

rate of 9.5 percent. As you can see in Figure

percent. As you can see in Figure 5, the most important variable is

5, the most important variable is

“dmi”

“dmi” = “

denied mortgage insurance.” This variable alone explains much of the

“denied mortgage insurance.” This variable alone explains much of the

variation in the data. The race variable (“black”) shows up far down the
tree and

variation in the data. The race variable (“black”) shows up far down the
tree and

seems to be relatively unimportant.

seems to be relatively unimportant.

One way to gauge whether a variable is important is to exclude it from
the

One way to gauge whether a variable is important is to exclude it from
the

prediction and see what happens. When this is done, it turns out that
the accu-

prediction and see what happens. When this is done, it turns out that
the accu-

racy of the tree-based model doesn’t

racy of the tree-based model doesn’ change at all: exactly the same
cases are

t change at all: exactly the same cases are

misclassifi

misclassified. Of course, it is per

ed. Of course, it is perfectly possible that there was racial
discrimination

fectly possible that there was racial discrimination

*14 Journal of Economic Perspectives*

elsewhere in the mortgage process, or that some of the variables
included are

elsewhere in the mortgage process, or that some of the variables
included are

highly correlated with race. But it is noteworthy that the tree model
produced by

highly correlated with race. But it is noteworthy that the tree model
produced by

standard procedures that omits race fi

standard procedures that omits race fits the obser

ts the observed data just as well as a model

ved data just as well as a model

that includes race.

that includes race.

**Boosting, Bagging, Bootstrap**

There are several useful ways to improve classifi

There are several useful ways to improve classifie

r per

er performance. Interestingly

formance. Interestingly

enough, some of these methods work by

enough, some of these methods work by *adding* randomness to the data.
This seems

randomness to the data. This seems

paradoxical at fi r

paradoxical at fi st, but adding randomness turns out to be a helpful
way of dealing

rst, but adding randomness turns out to be a helpful way of dealing

with the overfi

with the overfitting p

tting roblem.

problem.

*Bootstrap* involves choosing (with replacement) a sample of size

involves choosing (with replacement) a sample of size *n* from a dataset

from a dataset

of size

of size *n* to estimate the sampling distribution of some statistic. A
variation is the

to estimate the sampling distribution of some statistic. A variation is
the

“*m* out of

out of *n* bootstrap” which draws a sample of size

bootstrap” which draws a sample of size *m* from a dataset of size

from a dataset of size *n* \> *m*.

.

*Bagging* involves averaging across models estimated with several
different boot-

involves averaging across models estimated with several different boot-

strap samples in order to improve the per

strap samples in order to improve the performance of an estimator.

formance of an estimator

*Boosting* involves repeated estimation where misclassifi e

involves repeated estimation where misclassifi d obser

ed observations are given

vations are given

increasing weight in each repetition. The fi

increasing weight in each repetition. The final estimate is then a vote
or an average

nal estimate is then a vote or an average

across the repeated estimates.

across the repeated estimates. [4](#index_split_000.html_12)

Econometricians are well-acquainted with the bootstrap but rarely use
the

Econometricians are well-acquainted with the bootstrap but rarely use
the

other two

other two methods. Bagging is primarily useful for nonlinear models such
as trees

methods. Bagging is primarily useful for nonlinear models such as trees

(Friedman and Hall 2007). Boosting tends to improve predictive per

(Friedman and Hall 2007). Boosting tends to improve predictive
performance of

formance of

an estimator signifi

an estimator significantly and can be used for pretty much any kind of
classifi

cantly and can be used for pretty much any kind of classifier o

er r

or

regression model, including logits, probits, trees, and so on.

regression model, including logits, probits, trees, and so on.

It is also possible to combine these techniques and create a “forest” of
trees that

It is also possible to combine these techniques and create a “forest” of
trees that

can often signifi

can often significantly improve on single-tree methods. Here is a rough
description

cantly improve on single-tree methods. Here is a rough description

of how such “random forests” work.

of how such “random forests” work.

**Random Forests**

*Random forests* is a technique that uses multiple trees. A typical
procedure uses

is a technique that uses multiple trees. A typical procedure uses

the following steps.

the following steps.

1\. Choose a bootstrap sample of the observations and start to grow a
tree.

2\. At each node of the tree, choose a random sample of the predictors
to make

the next decision. Do not prune the trees.

3\. Repeat this process many times to grow a forest of trees.

4\. In order to determine the classifi cation of a new observation, have
each tree

make a classifi cation and use a majority vote for the fi nal
prediction.

This method produces surprisingly good out-of-sample fi ts, particularly
with

highly nonlinear data. In fact, Howard and Bowles (2012) claim
“ensembles of

decision trees (often known as ‘Random Forests’) have been the most
successful

general-purpose algorithm in modern times.” They go on to indicate that

4 Boosting is often used with decision trees, where it can dramatically
improve their predictive performance.

*Big Data: New Tricks for Econometrics 15*

“the algorithm is very simple to understand, and is fast and easy to
apply.” See

also Caruana and Niculescu-Mitzil (2006) who compare several different
machine

learning algorithms and fi nd that ensembles of trees perform quite
well. There are

a number of variations and extensions of the basic “ensemble of trees”
model such

as Friedman’s “Stochastic Gradient Boosting” (Friedman 2002).

One defect of random forests is that they are a bit of a black box—they
don’t

One defect of random forests is that they are a bit of a black box—they
don’

t

offer simple summaries of relationships in the data. As we have seen
earlier,

offer simple summaries of relationships in the data. As we have seen
earlier a s

, a ingle

single

tree can offer some insight about how predictors interact. But a forest
of a thou-

tree can offer some insight about how predictors interact. But a forest
of a thou-

sand trees cannot be easily interpreted. However,

sand trees cannot be easily interpreted. However random forests can
determine

, random forests can determine

which variables are “important” in predictions in the sense of
contributing the

which variables are “important” in predictions in the sense of
contributing the

biggest improvements in prediction accuracy.

biggest improvements in prediction accuracy

Note that random forests involves quite a bit of randomization; if you
want to

Note that random forests involves quite a bit of randomization; if you
want to

tr

try them out on some data, I

y them out on some data, I strongly suggest choosing a particular seed
for the

strongly suggest choosing a particular seed for the

random number generator so that your results can be reproduced. (See the
online

random number generator so that your results can be reproduced. (See the
online

supplement for examples.)

supplement for examples.)

I r

I an the random forest method on the HMDA

ran the random forest method on the HMD data and found that it
misclassi-

A data and found that it misclassi-

fi e

fi d 223 of the 2,380

ed 223 of the 2,380 cases, a small improvement over the logit and the
ctree. I

cases, a small improvement over the logit and the ctree. I also

also

used the importance option in random forests to see how the predictors
compared.

used the importance option in random forests to see how the predictors
compared.

It turned out that “dmi

It turned out that “dmi**”** was the most important predictor and race
was second

was the most important predictor and race was second

from the bottom, which is consistent with the ctree analysis.

from the bottom, which is consistent with the ctree analysis.

**Variable Selection**

Let us return to the familiar world of linear regression and consider
the

Let us return to the familiar world of linear regression and consider
the

problem of variable selection. There are many such methods available,
including

problem of variable selection. There are many such methods available,
including

stepwise regression, principal component regression, partial least
squares,

stepwise regression, principal component regression, partial least
squares, Akaike

Akaike

information criterion (AIC) and Bayesian information criterion (BIC)

information criterion (AIC) and Bayesian information criterion (BIC)
complexity

complexity

measures, and so on. Castle, Qin, and Reed (2009) describe and compare

measures, and so on. Castle, Qin, and Reed (2009) describe and compare

21 different methods.

21 different methods.

**LASSO and Friends**

Here we consider a class of estimators that involves penalized
regression.

Here we consider a class of estimators that involves penalized
regression.

Consider a standard multivariate regression model where we predict

Consider a standard multivariate regression model where we predict *y t*
as a linear

as a linear

function of a constant,

function of a constant, *b* 0 ,

, and

and *P* predictor variables. We

predictor variables. W suppose that we have stan-

suppose that we have stan-

dardized all the (nonconstant) predictors so they have mean zero and
variance o

dardized all the (nonconstant) predictors so they have mean zero and
variance ne.

one.

Consider choosing the coeffi

Consider choosing the coefficients

cients (

( *b* 1 , … ,

, … , *b P* ) for these predictor variables by

) for these predictor variables by

minimizing the sum of squared residuals plus a penalty term of the form

minimizing the sum of squared residuals plus a penalty term of the form

*P*

λ ∑ \[(1 − α) \| *b p* \| + α \| *b p* \| 2 \].

*p* =1

This estimation method is called *elastic net regression*; it contains
three other

methods as special cases. If there is no penalty term (λ = 0), this is
*ordinary least*

*squares.* If α = 1, so that there is only the quadratic constraint,
this is *ridge regression.*

*16 Journal of Economic Perspectives*

If α = 0, this is called the *LASSO*, an acronym for “least absolute
shrinkage and

selection operator.”

These penalized regressions are classic examples of regularization. In
this

These penalized regressions are classic examples of regularization. In
this

case, the complexity is the number and size of predictors in the model.
All of these

case, the complexity is the number and size of predictors in the model.
All of these

methods tend to shrink the least squares regression coeffi

methods tend to shrink the least squares regression coefficients towards
zero. The

cients towards zero. The

LASSO and elastic net typically produces regressions where some of the
variables

LASSO and elastic net typically produces regressions where some of the
variables

are set to be exactly zero. Hence this is a relatively straightfor

are set to be exactly zero. Hence this is a relatively straightforward
way to do

ward way to do

variable selection.

variable selection.

It turns out that these estimators can be computed quite effi

It turns out that these estimators can be computed quite effic

iently,

ciently so doing

, so doing

variable selection on reasonably large problems is computationally
feasible. They

variable selection on reasonably large problems is computationally
feasible. They

also seem to provide good predictions in practice .

also seem to provide good predictions in practice

**Spike-and-Slab Regression**

Another approach to variable selection that is novel to most economists
is

Another approach to variable selection that is novel to most economists
is

spike-and-slab regression, a Bayesian technique. Suppose that you have

spike-and-slab regression, a Bayesian technique. Suppose that you have
*P* possible

possible

predictors in some linear model. Let

predictors in some linear model. Let γ be a vector of length

be a vector of length *P* composed of

composed of

zeros and ones that indicate whether or not a particular variable is
included in

zeros and ones that indicate whether or not a particular variable is
included in

the regression.

the regression.

We

W start with a Bernoulli prior distribution on

start with a Bernoulli prior distribution on γ; for example, initially
we might

; for example, initially we might

think that all variables have an equally likely chance of being in the
regression.

think that all variables have an equally likely chance of being in the
regression.

Conditional on a variable being in the regression, we specify a prior
distribution

Conditional on a variable being in the regression, we specify a prior
distribution

for the regression coeffi

for the regression coefficient associated with that variable. For
example, we might

cient associated with that variable. For example, we might

use a Normal prior with mean

use a Normal prior with mean 0 and a large variance. These two

0 and a large variance. These two priors are the

priors are the

source of the method’s

source of the method’ name: the “spike’” is the probability of a coeffi

s name: the “spike’” is the probability of a coefficient b

cient eing

being

nonzero; the “slab” is the (diffuse) prior describing the values that
the coeffi

nonzero; the “slab” is the (diffuse) prior describing the values that
the coefficient

cient

can take on.

can take on.

Now we take a draw of

Now we take a draw of γ from its prior distribution, which will just be
a list of vari-

from its prior distribution, which will just be a list of vari-

ables in the regression. Conditional on this list of included variables,
we take a draw

ables in the regression. Conditional on this list of included variables,
we take a draw

from the prior distribution for the coeffi

from the prior distribution for the coeffic

ients. We

cients. W combine these two

combine these two draws with

draws with

the likelihood in the usual way,

the likelihood in the usual way which gives us a draw from posterior
distribution on

, which gives us a draw from posterior distribution on

both probability of inclusion and the coeffi c

both probability of inclusion and the coeffi ients. We

cients. W repeat this process thousands

repeat this process thousands

of times using a Markov Chain Monte Carlo (MCMC) technique which gives
us a

of times using a Markov Chain Monte Carlo (MCMC) technique which gives
us a

table summarizing the posterior distribution for

table summarizing the posterior distribution for γ (indicating variable
inclusion),

(indicating variable inclusion),

β (

the coeffi

(the coefficients), and the associated prediction of

cients), and the associated prediction of *y*. We

. W

e can summarize this table

can summarize this table

in a variety of ways. For example, we can compute the average value of

in a variety of ways. For example, we can compute the average value of γ
*p* which

which

shows the posterior probability that the variable

shows the posterior probability that the variable *p* is included in the
regressio n

is included in the regressio s.

ns.

**An Economic Example: Growth Regressions**

We

W

e illustrate these different methods of variable selection using data
from

illustrate these different methods of variable selection using data from

Sala-i-Martín (1997). This exercise involved examining a dataset of 72
counties and

Sala-i-Martín (1997). This exercise involved examining a dataset of 72
counties and

42

42 variables in order to see which variables appeared to be important
predictors of

variables in order to see which variables appeared to be important
predictors of

economic growth. Sala-i-Martín (1997) computed at all possible subsets
of regres-

economic growth. Sala-i-Martín (1997) computed at all possible subsets
of regres-

sors of manageable size and used the results to construct an importance
measure he

sors of manageable size and used the results to construct an importance
measure he

called CDF(0). Ley and Steel (2009) investigated the same question using
Bayesian

called CDF(0). Ley and Steel (2009) investigated the same question using
Bayesian

*Hal R. Varian 17*

*Table 4*

**Comparing Variable Selection Algorithms: Which Variables Appeared as
Important**

**Predictors of Economic Growth?**

*Predictor*

*Bayesian model averaging*

*CDF(0)*

*LASSO*

*Spike-and-Slab*

GDP level 1960

1.000

1.000

\-

0.9992

Fraction Confucian

0.995

1.000

2

0.9730

Life expectancy

0.946

0.942

\-

0.9610

Equipment investment

0.757

0.997

1

0.9532

Sub-Saharan dummy

0.656

1.000

7

0.5834

Fraction Muslim

0.656

1.000

8

0.6590

Rule of law

0.516

1.000

\-

0.4532

Open economy

0.502

1.000

6

0.5736

Degree of capitalism

0.471

0.987

9

0.4230

Fraction Protestant

0.461

0.966

5

0.3798

*Source:* The table is based on that in Ley and Steel (2009); the data
analyzed is from Sala-i-Martín (1997).

*Notes:* We illustrate different methods of variable selection. This
exercise involved examining a dataset of 72 counties and 42 variables in
order to see which variables appeared to be important predictors of
economic growth. The table shows ten predictors that were chosen by
Sala-i-Martín (1997) using

a CDF(0) measure defi ned in the 1997 paper; Ley and Steel (2009) using
Bayesian model averaging,

LASSO, and spike-and-slab regressions. Metrics used are not strictly
comparable across the various models. The “Bayesian model averaging” and
“Spike-and-Slab” columns are posterior probabilities

of inclusion; the “LASSO” column just shows the ordinal importance of
the variable or a dash

indicating that it was not included in the chosen model; and the CDF(0)
measure is defi ned in

Sala-i-Martín (1997).

model averaging, a technique related to, but not identical with,
spike-and-slab.

model averaging, a technique related to, but not identical with,
spike-and-slab.

Hendr

Hendry and Krolzig (2004) examined an iterative signifi

y and Krolzig (2004) examined an iterative significance test selection
method.

cance test selection method.

[Ta](#index_split_000.html_15)

[T ble](#index_split_000.html_15)

[able 4](#index_split_000.html_15) shows ten

[4 shows ten](#index_split_000.html_15) predictors that were chosen by
Sala-i-Martín (1997) using predictors that were chosen by Sala-i-Martín
(1997) using

his two

his two million regressions, Ley and Steel (2009) using Bayesian model
averaging,

million regressions, Ley and Steel (2009) using Bayesian model
averaging,

LASSO, and spike-and-slab. The table is based on that in Ley and Steel
(2009) but

LASSO, and spike-and-slab. The table is based on that in Ley and Steel
(2009) but

metrics used are not strictly comparable across the various models. The
“Bayesian

metrics used are not strictly comparable across the various models. The
“Bayesian

model averaging” and “spike-slab” columns show posterior probabilities
of inclu-

model averaging” and “spike-slab” columns show posterior probabilities
of inclu-

sion; the “LASSO” column just shows the ordinal importance of the
variable or

sion; the “LASSO” column just shows the ordinal importance of the
variable or

a dash indicating that it was not included in the chosen model; and the
CDF(0)

a dash indicating that it was not included in the chosen model; and the
CDF(0)

measure is defi

measure is defined in Sala-i-Martín (199 7

ned in Sala-i-Martín (199 ).

7).

The LASSO and the Bayesian techniques are ver

The LASSO and the Bayesian techniques are very computationally effi

y computationally efficient

cient

and would likely be preferred to exhaustive search. All four of these
variable selec-

and would likely be preferred to exhaustive search. All four of these
variable selec-

tion methods give similar results for the fi r

tion methods give similar results for the fi st four or fi

rst four or five

ve variables, after which they

variables, after which they

diverge. In this particular case, the dataset appears to be too small to
resolve the

diverge. In this particular case, the dataset appears to be too small to
resolve the

question of what is “important” for economic growt h

question of what is “important” for economic growt .

h\.

**Variable Selection in Time Series Applications**

The machine learning techniques described up until now are generally

The machine learning techniques described up until now are generally

applied to cross-sectional data where independently distributed data is
a plausible

applied to cross-sectional data where independently distributed data is
a plausible

assumption. However,

assumption. However there are also techniques that work with time
series. Here we

, there are also techniques that work with time series. Here we

*18 Journal of Economic Perspectives*

describe an estimation method that we call Bayesian Structural Time
Series (BSTS)

describe an estimation method that we call Bayesian Structural Time
Series (BSTS)

that seems to work well for variable selection problems in time series
applications.

that seems to work well for variable selection problems in time series
applications.

Our research in this area was motivated by Google Tr

Our research in this area was motivated by Google T ends data, which
provides

rends data, which provides

an index of the volume of Google queries on specifi

an index of the volume of Google queries on specific

terms. One might expect

c terms. One might expect

that queries on “fi

that queries on “fil

e for unemployment” might be predictive of the actual rate of

le for unemployment” might be predictive of the actual rate of

fi l

fi ings for initial claims, or that queries on “Orlando vacation” might
be predictive

lings for initial claims, or that queries on “Orlando vacation” might be
predictive

of actual visits to Orlando. Indeed, in Choi and Va

of actual visits to Orlando. Indeed, in Choi and V rian (2009, 2012),
Goel, Hofman,

arian (2009, 2012), Goel, Hofman,

Lahaie, Pennock, and Wa

Lahaie, Pennock, and W tts (2010), Carrière-Swallow and Labbé (2011),
McLaren

atts (2010), Carrière-Swallow and Labbé (2011), McLaren

and Shanbhoge (2011), Artola and Galan (2012), Hellerstein and
Middeldorp

and Shanbhoge (2011), Artola and Galan (2012), Hellerstein and
Middeldorp

(2012), and other papers, many researchers have shown that Google
queries do

(2012), and other papers, many researchers have shown that Google
queries do

have signifi

have significant short-term predictive power for various economic
metrics.

cant short-term predictive power for various economic metrics.

The challenge is that there are billions of queries so it is hard to
determine

The challenge is that there are billions of queries so it is hard to
determine

exactly which queries are the most predictive for a particular purpose.
Google

exactly which queries are the most predictive for a particular purpose.
Google

Tr

T ends classifi

rends classifie

s the queries into categories, which helps a little, but even then we

es the queries into categories, which helps a little, but even then we

have hundreds of categories as possible predictors so that overfi

have hundreds of categories as possible predictors so that overfitting
and spurious

tting and spurious

correlation are a serious concern. Bayesian Structural Time Series is
designed to

correlation are a serious concern. Bayesian Structural Time Series is
designed to

address these issues. We

address these issues. W offer a ver

offer a very brief description here; more details are avail-

y brief description here; more details are avail-

able in Scott and Va

able in Scott and V rian (2013a, 2013b).

arian (2013a, 2013b).

Consider a classic time series model with

Consider a classic time series model with *constant* level, linear time
trend, and

level, linear time trend, and

regressor components:

regressor components:

*y t* = + *bt* + β *x t* +

*e t* .

The “local linear trend” is a stochastic generalization of this model
where the

level and time trend can vary through time.

Observation:

*y t* = *t* + *z t* + *e* 1 *t* = level + regression

State variable 1: *t* = *t*−1 + *b t*−1 + *e* 2 *t* = random walk +
trend State variable 2: *z t* = β *x* *t* = regression

State variable 3: *b t* = *b t*−1 + *e* 3 *t* = random walk for trend It
is easy to add an additional state variable for seasonality if that is
appropriate.

The parameters to estimate are the regression coeffi cients β and the
variances of

( *e it* ) for *i* = 1, … 3. We can then use these estimates to
construct the optimal forecast based on techniques drawn from the
literature on Kalman fi lters.

For the regression, we use the spike-and-slab variable choice mechanism

For the regression, we use the spike-and-slab variable choice mechanism

described above. A draw from the posterior distribution now involves a
draw of

described above. A draw from the posterior distribution now involves a
draw of

variances of (

variances of ( *e* 1 *t* ,

, *e* 2 *t* ,

, *e* 3 *t* ) a draw of the vector

) a draw of the vector γ that indicates which variables are in

that indicates which variables are in

the regression, and a draw of the regression coeffi c

the regression, and a draw of the regression coeffi ients

cients β for the included variables.

for the included variables.

The draws of

The draws of *t*,

, *b t* , and

, and β can be used to construct estimates of

can be used to construct estimates of *y t* and forecasts for

and forecasts for

*y t*+1 .

We

. W

e end up with an (estimated) posterior distribution for each parameter
of

end up with an (estimated) posterior distribution for each parameter of

*Big Data: New Tricks for Econometrics 19*

*Figure 6*

**An Example Using Bayesian Structural Time Series (BSTS)**

*(fi nding Google queries that are predictors of new home sales)*

A: Initial Predictors

B: Final Predictors

appreciation rate

appreciation rate

irs 1031

oldies lyrics

century 21 realtors

real estate purchase

real estate purchase

irs 1031

estate appraisal

X80 20 mortgage

[www.mail2web.com](http://www.mail2web.com)

real estate appraisal

real estate appraisal

selling real estate

0.0

0.2

0.4

0.6

0.8

1.0

0.0

0.2

0.4

0.6

0.8

1.0

Inclusion probability

Inclusion probability

*Source:* Author using HSN1FNSA data from the St. Louis Federal Reserve
Economic Data.

*Notes:* Consider the nonseasonally adjusted data for new homes sold in
the United States, which is (HSN1FNSA) from the St. Louis Federal
Reserve Economic Data. This time series can be submitted

to Google Correlate, which then returns the 100 queries that are the
most highly correlated with the series. We feed that data into the BSTS
system, which identifi es the predictors with the largest posterior
probabilities of appearing in the housing regression; these are shown in
Figure 6A. In these fi gures, black bars indicate a negative
relationship, and white bars indicate a positive relationship. Two
predictors,

“oldies lyrics” and “www.mail2web” appear to be spurious so we remove
them and re-estimate, yielding the results in Figure 6B.

interest. If we seek a point prediction, we can average over these
draws, which is

interest. If we seek a point prediction, we can average over these
draws, which is

essentially a form of Bayesian model averaging.

essentially a form of Bayesian model averaging.

As an example, consider the nonseasonally adjusted data for new homes
sold

As an example, consider the nonseasonally adjusted data for new homes
sold

in the United States, which is (HSN1FNSA) from the St. Louis Federal
Reser

in the United States, which is (HSN1FNSA) from the St. Louis Federal
Reserve

ve

Economic Data. This time series can be submitted to Google Correlate,
which

Economic Data. This time series can be submitted to Google Correlate,
which

then returns the 100

then returns the 100 queries that are the most highly correlated with
the series.

queries that are the most highly correlated with the series.

We

W

e feed that data into the BSTS system, which identifi

feed that data into the BSTS system, which identifie

s the predictors with the

es the predictors with the

largest posterior probabilities of appearing in the housing regression;
these are

largest posterior probabilities of appearing in the housing regression;
these are

shown in [Figure](#index_split_000.html_17)

[shown in Figure 6A.](#index_split_000.html_17) In these fi

[6A.In these fi](#index_split_000.html_17)g

ures, black

gures, black bars indicate a negative relationship

bars indicate a negative relationship

and white

and white bars indicate a positive relationship. Tw

bars indicate a positive relationship. T o predictors, “oldies lyrics”
and

wo predictors, “oldies lyrics” and

“www.

“www mail2web” appear to be spurious so we remove them and re-estimate,
yielding

.mail2web” appear to be spurious so we remove them and re-estimate,
yielding

the results in Figure 6B.

the results in Figure 6B.

The fi

The fit is shown in [Figure 7](#index_split_000.html_18)

[t is shown in Figure ,](#index_split_000.html_18) which shows the
incremental contribution of the

[7, which shows the incremental contribution of
the](#index_split_000.html_18)

trend, seasonal, and two of the regressors. Even with only two p

trend, seasonal, and two of the regressors. Even with only two
redictors, queries on

predictors, queries on

“appreciation rate” and queries on “irs 1031,” we get a pretty go o

“appreciation rate” and queries on “irs 1031,” we get a pretty go d

o fi

d fit[.](#index_split_000.html_17)

[t.5](#index_split_000.html_17)

5 IRS section 1031 has to do with deferring capital gains on certain
sorts of property exchange.

<img src="index-18_1.jpg" class="calibre4" />

<img src="index-18_2.jpg" class="calibre4" />

<img src="index-18_3.jpg" class="calibre4" />

<img src="index-18_4.jpg" class="calibre4" />

*20 Journal of Economic Perspectives*

*Figure 7*

**Fit for the Housing Regression: Incremental Contribution of Trend,
Seasonal, and**

**Two Regressors**

1\) Trend (mae = 0.51911)

2\) Add seasonal (mae = 0.5168)

3\) Add appreciation.rate (mae = 0.24805)

4\) Add irs.1031 (mae = 0.1529)

*Source:* Author using (HSN1FNSA) data from the St. Louis Federal
Reserve.

*Notes:* The plots show the impact of the trend, seasonal, and a few
individual regressors. Data has been standardized to have mean zero and
variance 1. The residuals are shown on the bottom. The abbreviation

“mae” stands for “mean absolute error.”

**Econometrics and Machine Learning**

There are a number of areas where there would be opportunities for
fruitful

There are a number of areas where there would be opportunities for
fruitful

collaboration between econometrics and machine learning. I m

collaboration between econometrics and machine learning. I entioned
above that

mentioned above that

most machine learning uses independent and identically distributed data.
However,

most machine learning uses independent and identically distributed data.
However

,

the Bayesian Structural Time Series model shows that some of these
techniques

the Bayesian Structural Time Series model shows that some of these
techniques

can be adopted for time series models. It is also possible to use
machine learning

can be adopted for time series models. It is also possible to use
machine learning

techniques to look at panel data, and there has been some work in this
direction.

techniques to look at panel data, and there has been some work in this
direction.

However,

However the most important area for collaboration involves causal infer-

, the most important area for collaboration involves causal infer

ence. Econometricians have developed several tools for causal inference
such as

ence. Econometricians have developed several tools for causal inference
such as

*Hal R. Varian 21*

instrumental variables, regression discontinuity,

instrumental variables, regression discontinuity
difference-in-differences, and

, difference-in-differences, and

various forms of natural and designed experiments (Angrist and Krueger
2001).

various forms of natural and designed experiments (Angrist and Krueger
2001).

Machine learning work has, for the most part, dealt with pure
prediction. In a way,

Machine learning work has, for the most part, dealt with pure
prediction. In a way

,

this is ironic, since theoretical computer scientists, such as Pearl
(2009a, b) have

this is ironic, since theoretical computer scientists, such as Pearl
(2009a, b) have

made signifi c

made signifi ant contributions to causal modeling. However,

cant contributions to causal modeling. However it appears that these

, it appears that these

theoretical advances have not as yet been incorporated into machine
learning prac-

theoretical advances have not as yet been incorporated into machine
learning prac-

tice to a signifi

tice to a significa n

ca t degree.

nt degree.

**Causality and Prediction**

As economists know well, there is a big difference between correlation
and

As economists know well, there is a big difference between correlation
and

causation. A classic example: there are often more police in precincts
with high

causation. A classic example: there are often more police in precincts
with high

crime, but that does not imply that increasing the number of police in a
precinct

crime, but that does not imply that increasing the number of police in a
precinct

would increase crime.

would increase crime.

The machine learning models we have described so far have been entirely

The machine learning models we have described so far have been entirely

about prediction. If our data were generated by policymakers who
assigned police

about prediction. If our data were generated by policymakers who
assigned police

to areas with high crime, then the obser

to areas with high crime, then the observed relationship between police
and crime

ved relationship between police and crime

rates could be highly predictive for the

rates could be highly predictive for the *historical* data but not
useful in predicting

data but not useful in predicting

the causal impact of explicitly

the causal impact of explicitly *assigning* additional police to a
precinct.

additional police to a precinct.

To

T

o enlarge on this point, let us consider an experiment (natural or
designed)

enlarge on this point, let us consider an experiment (natural or
designed)

that attempts to estimate the impact of some policy,

that attempts to estimate the impact of some policy such as adding
police to

, such as adding police to

precincts. There are two critical questions.

precincts. There are two critical questions.

1\) How will police be assigned to precincts in both the experiment and
the pol-

icy implementation? Possible assignment rules could be 1) random, 2)
based

on perceived need, 3) based on cost of providing service, 4) based on
resi-

dent requests, 5) based on a formula or set of rules, 6) based on asking
for

volunteers, and so on. Ideally the assignment procedure in the
experiment

will be similar to that used in the policy. Developing accurate
predictions

about which precincts will receive additional police under the proposed

policy based on the experimental data can clearly be helpful in
predicting

the expected impact of the policy.

2\) What will be the impact of these additional police in both the
experiment

and the policy? As Rubin (1974) and many subsequent authors have empha-

sized, when we want to estimate the *causal* impact of some treatment we
need

to compare the outcome with the intervention to what *would have
happened*

without the intervention. But this counterfactual cannot be observed, so
it

must be predicted by some model. The better predictive model you have
for

the counterfactual, the better you will be able to estimate the causal
effect, a

rule that is true for both pure experiments and natural experiments.

So even though a predictive model will not necessarily allow one to
conclude

anything about causality by itself, such models may help in estimating
the causal

impact of an intervention when it occurs.

*22 Journal of Economic Perspectives*

To

T

o state this in a slightly more formal way,

state this in a slightly more formal way consider the identity from
Angrist

, consider the identity from Angrist

and Pischke (2009, p. 11):

and Pischke (2009, p. 11):

observed difference in outcome = average treatment effect on the treated

\+ selection bias.

If you want to model the average treatment effect as a function of other
vari-

ables, you will usually need to model both the observed difference in
outcome and

the selection bias. The better your predictive model for those
components, the

better your estimate of the average treatment effect will be. Of course,
if you have a

true randomized treatment–control experiment, selection bias goes away
and those

treated are an unbiased random sample of the population.

To

T

o illustrate these points, let us consider the thorny problem of
estimating the

illustrate these points, let us consider the thorny problem of
estimating the

causal effect of advertising on sales (Lewis and Rao 2013). The diffi

causal effect of advertising on sales (Lewis and Rao 2013). The diffic

ulty is that

culty is that

there are many confounding variables, such as seasonality or weather,

there are many confounding variables, such as seasonality or weather
that cause

, that cause

both increased ad exposures and increased purchases by consumers. For
example,

both increased ad exposures and increased purchases by consumers. For
example,

consider the (probably apocr

consider the (probably apocryphal) stor

yphal) story about an advertising manager who was

y about an advertising manager who was

asked why he thought his ads were effective. “Look at this chart,” he
said. “Ever

asked why he thought his ads were effective. “Look at this chart,” he
said. “Every

y

December I i

December I ncrease my ad spend and, sure enough, purchases go up.” Of
course, in

increase my ad spend and, sure enough, purchases go up.” Of course, in

this case, seasonality can be included in the model. However,

this case, seasonality can be included in the model. However generally
there will be

, generally there will be

other confounding variables that affect both exposure to ads and the
propensity of

other confounding variables that affect both exposure to ads and the
propensity of

purchase, which make causal interpretations of obser

purchase, which make causal interpretations of observed relationships
problematic.

ved relationships problematic.

The ideal way to estimate advertising effectiveness is, of course, to
run a

The ideal way to estimate advertising effectiveness is, of course, to
run a

controlled experiment. In this case the control group provides an
estimate of the

controlled experiment. In this case the control group provides an
estimate of the

counter

counterfactual: what would have happened without ad exposures. But this
ideal

factual: what would have happened without ad exposures. But this ideal

approach can be quite expensive, so it is worth looking for alternative
ways to predict

approach can be quite expensive, so it is worth looking for alternative
ways to predict

the counter

the counterfactual. One way to do this is to use the Bayesian Structural
Time Series

factual. One way to do this is to use the Bayesian Structural Time
Series

(BSTS) method described earlier.

(BSTS) method described earlier

Suppose a given company wants to determine the impact of an advertising

Suppose a given company wants to determine the impact of an advertising

campaign on visits to its website. It fi r

campaign on visits to its website. It fi st uses BSTS (or some other
technique) to build

rst uses BSTS (or some other technique) to build

a model predicting the time series of visits as a function of its past
histor

a model predicting the time series of visits as a function of its past
history,

y seasonal

seasonal

effects, and other possible predictors such as Google queries on its
company name,

effects, and other possible predictors such as Google queries on its
company name,

its competitors’ names, or products that it produces. Since there are
many possible

its competitors’ names, or products that it produces. Since there are
many possible

choices for predictors, it is important to use some variable selection
mechanism

choices for predictors, it is important to use some variable selection
mechanism

such as those described earlier.

such as those described earlier

It next runs an ad campaign for a few weeks and records visits during
this

It next runs an ad campaign for a few weeks and records visits during
this

period. Finally,

period. Finally it makes a forecast of what visits

, it makes a forecast of what visits *would have been* in the absence

in the absence

of the ad campaign using the model developed in the fi

of the ad campaign using the model developed in the first stage.
Comparing the

rst stage. Comparing the

actual visits to the counter

actual visits to the counterfactual visits gives us an estimate of the
causal effect

factual visits gives us an estimate of the causal effect

of advertising.

of advertising.

[Figure](#index_split_000.html_21)

[Figure 8,](#index_split_000.html_21) shows the outcome of such a
procedure. It is based on the approach

[8, shows the outcome of such a procedure. It is based on the
approach](#index_split_000.html_21)

proposed in Brodersen, Gallusser,

proposed in Brodersen, Gallusser Koehler,

, Koehler Remy,

, Remy and Scott (2013), but the covari-

, and Scott (2013), but the covari-

ates are chosen automatically from Google Tr

ates are chosen automatically from Google T ends categories using
Bayesian

rends categories using Bayesian

Structural Time Series (BSTS). Panel

Structural Time Series (BSTS). Panel A shows the actual visits and the
prediction

A shows the actual visits and the prediction

*Big Data: New Tricks for Econometrics 23*

*Figure 8*

**Actual and Predicted Website Visits**

**Cumulative uplift over 55 days: 107.1K (88K...126K) Relative uplift:
27% (23%...32%)**

US clicks

Model fit

Prediction

8000

4000

PRLQWïZLVHLPSDFW

4000

0

ï

CuPXODWLvHLPSDFW

100000

40000

0

eek 0

eek 1

HHN

HHN

eek 4

HHN

eek 6

eek 7

eek 8

HHNï

HHNï

HHNï

HHNï

HHNï

Z

Z

Z

Z

Z

Z

Z

Z

Z

Z

Z

Z

Z

Z

*Source:* This example is based on the approach proposed in Brodersen,
Gallusser, Koehler, Remy, and Scott (2013), but the covariates are
chosen automatically from Google Trends categories using Bayesian
Structural Time Series (BSTS).

*Notes:* Suppose a given company wants to determine the impact of an
advertising campaign on its website visits. Panel A shows the actual
visits and the prediction of what the visits would have been without the
campaign based on the BSTS forecasting model. Panel B shows the
difference between actual and

predicted visits, and Panel C shows the cumulative difference.

of what the visits would have been without the campaign based on the
BSTS fore-

of what the visits would have been without the campaign based on the
BSTS fore-

casting model. Panel

casting model. Panel B shows the difference between actual and predicted
visits,

B shows the difference between actual and predicted visits,

and Panel

and Panel C shows the cumulative difference. It is clear from this fi

C shows the cumulative difference. It is clear from this figure that
there

gure that there

was a signifi c

was a signifi ant causal impact of advertising, which can then be
compared to the

cant causal impact of advertising, which can then be compared to the

cost of the advertising to evaluate the campaign.

cost of the advertising to evaluate the campaign.

This procedure does not use a control group in the conventional sense.
Rather it

This procedure does not use a control group in the conventional sense.
Rather it

uses a general time series model based on trend extrapolation, seasonal
effects, and

uses a general time series model based on trend extrapolation, seasonal
effects, and

relevant covariates to forecast what would have happened without the ad
c

relevant covariates to forecast what would have happened without the ad
ampaign.

campaign.

A good predictive model can be better than a randomly chosen control
group,

A good predictive model can be better than a randomly chosen control
group,

which is usually thought to be the gold standard. To

which is usually thought to be the gold standard. T see this, suppose
that you run

see this, suppose that you run

*24 Journal of Economic Perspectives*

an ad campaign in 100 c

an ad campaign in 100 ities and retain 100 c

cities and retain 100 ities as a control. After the experiment

cities as a control. After the experiment

is over,

is over you discover the weather was dramatically different across the
cities in the

, you discover the weather was dramatically different across the cities
in the

study.

study Should you add weather as a predictor of the counter

. Should you add weather as a predictor of the counterfactual? Of
course! If

factual? Of course! If

weather affects sales (which it does), then you will get a more accurate
prediction

weather affects sales (which it does), then you will get a more accurate
prediction

of the counter

of the counterfactual and thus a better estimate of the causal effect of
ad v

factual and thus a better estimate of the causal effect of ad ertising.

vertising.

**Model Uncertainty**

An important insight from machine learning is that averaging over many
small

An important insight from machine learning is that averaging over many
small

models tends to give better out-of-sample prediction than choosing a
single model.

models tends to give better out-of-sample prediction than choosing a
single model.

In 2006, Netfl

In 2006, Netflix offered a million dollar prize to researchers who could
provide

ix offered a million dollar prize to researchers who could provide

the largest improvement to their existing movie recommendation system.
The

the largest improvement to their existing movie recommendation system.
The

winning submission involved a “complex blending of no fewer than 800

winning submission involved a “complex blending of no fewer than 800
models,”

models,”

though they also point out that “predictions of good quality can usually
be obtained

though they also point out that “predictions of good quality can usually
be obtained

by combining a small number of judiciously chosen methods” (Feuer

by combining a small number of judiciously chosen methods” (Feuerverger,

verger He,

, He,

and Khatri 2012). It also turned out that a blend of the best- and
second-best submis-

and Khatri 2012). It also turned out that a blend of the best- and
second-best submis-

sions outper

sions outperformed either of them.

formed either of them.

Ironically,

Ironically it was recognized many years ago that averages of
macroeconomic

, it was recognized many years ago that averages of macroeconomic

model forecasts outper

model forecasts outperformed individual models, but somehow this idea
was rarely

formed individual models, but somehow this idea was rarely

exploited in traditional econometrics. The exception is the literature
on Bayesian

exploited in traditional econometrics. The exception is the literature
on Bayesian

model averaging, which has seen a steady fl o

model averaging, which has seen a steady fl w of work; see Steel (2011)
for a sur

ow of work; see Steel (2011) for a survey.

vey

.

However,

However I think that model uncertainty has crept into applied
econometrics

, I think that model uncertainty has crept into applied econometrics

through the back door.

through the back door Many papers in applied econometrics present
regression

. Many papers in applied econometrics present regression

results in a table with several different specifi

results in a table with several different specifications: which
variables are included in

cations: which variables are included in

the controls, which variables are used as instruments, and so on. The
goal is usually

the controls, which variables are used as instruments, and so on. The
goal is usually

to show that the estimate of some interesting parameter is not ver

to show that the estimate of some interesting parameter is not very
sensitive to the

y sensitive to the

exact specifi

exact specification u

cation sed.

used.

One way to think about it is that these tables illustrate a simple form
of model

One way to think about it is that these tables illustrate a simple form
of model

uncertainty: how an estimated parameter varies as different models are
used. In

uncertainty: how an estimated parameter varies as different models are
used. In

these papers, the authors tend to examine only a few representative
specifi

these papers, the authors tend to examine only a few representative
specifica-

ca-

tions, but there is no reason why they couldn’t

tions, but there is no reason why they couldn’ examine many more if the
data

t examine many more if the data

were available.

were available.

In this period of “big data,” it seems strange to focus on

In this period of “big data,” it seems strange to focus on *sampling
uncertainty,*

which tends to be small with large datasets, while completely ignoring

which tends to be small with large datasets, while completely ignoring
*model uncer-*

*tainty,* which may be quite large. One way to address this is to be
explicit about which may be quite large. One way to address this is to
be explicit about

examining how parameter estimates var

examining how parameter estimates vary with respect to choices of
control variables

y with respect to choices of control variables

and in s

and in truments.

struments.

**Summary and Further Reading**

Since computers are now involved in many economic transactions, big data

Since computers are now involved in many economic transactions, big data

will only get bigger.

will only get bigger Data manipulation tools and techniques developed
for small

. Data manipulation tools and techniques developed for small

datasets will become increasingly inadequate to deal with new problems.
Researchers

datasets will become increasingly inadequate to deal with new problems.
Researchers

in machine learning have developed ways to deal with large datasets and
economists

in machine learning have developed ways to deal with large datasets and
economists

*Hal R. Varian 25*

interested in dealing with such data would be well advised to invest in
learning

interested in dealing with such data would be well advised to invest in
learning

these techniques.

these techniques.

I have already mentioned Hastie, Tibshirani, and Friedman (2009), who

I have already mentioned Hastie, Tibshirani, and Friedman (2009), who

provide detailed descriptions of all the methods discussed here but at a
relatively

provide detailed descriptions of all the methods discussed here but at a
relatively

advanced level. James, Witten, Hastie, and Tibshirani (2013) describe
many of the

advanced level. James, Witten, Hastie, and Tibshirani (2013) describe
many of the

same topics at an undergraduate-level, along with

same topics at an undergraduate-level, along with **R** code and many
examples.

code and many examples.

(There are several economic examples in the book where the tension
between

(There are several economic examples in the book where the tension
between

predictive modeling and causal inference is apparent.) Murphy (2012)
examines

predictive modeling and causal inference is apparent.) Murphy (2012)
examines

machine learning from a Bayesian point of view.

machine learning from a Bayesian point of view

Ve

V nables and Ripley (2002) offer good discussions of these topics with
emphasis

enables and Ripley (2002) offer good discussions of these topics with
emphasis

on applied examples. Leek (2013) presents a number of Yo

on applied examples. Leek (2013) presents a number of Y uTu

ouT be videos with gentle

ube videos with gentle

and accessible introductions to several tools of data analysis. Howe
(2013) provides a

and accessible introductions to several tools of data analysis. Howe
(2013) provides a

somewhat more advanced introduction to data science that also includes
discussions

somewhat more advanced introduction to data science that also includes
discussions

of SQL and NoSQL databases. Wu

of SQL and NoSQL databases. W and Kumar (2009) give detailed
descriptions and

and Kumar (2009) give detailed descriptions and

examples of the major algorithms in data mining, while Williams (2011)
provides

examples of the major algorithms in data mining, while Williams (2011)
provides

a unifi

a unifie

d toolkit. Domingos (2012) summarizes some important lessons including

ed toolkit. Domingos (2012) summarizes some important lessons including

“pitfalls to avoid, important issues to focus on and answers to common
questions.”

“pitfalls to avoid, important issues to focus on and answers to common
questions.”

■

■ *Thanks to Jeffrey Oldham, Tom Zhang, Rob On, Pierre Grinspan, Jerry
Friedman, Art Owen,*

*Steve Scott, Bo Cowgill, Brock Noland, Daniel Stonehill, Robert
Snedegar, Gary King, Fabien*

*Curto-Millet, and the editors of this journal for helpful comments on
earlier versions of this paper.*

*The author works for Google, and Google had the right to review this
paper before publication.*

**References**

**Angrist, Joshua D., and Alan B. Krueger.** 2001.

**Breiman, Leo, Jerome H. Friedman, R. A.**

“Instrumental Variables and the Search for Iden-

**Olshen, and Charles J. Stone.** 1984. *Classifi cation*

tifi cation: From Supply and Demand to Natural

*and Regression Trees*. Wadsworth and Brooks/Cole,

Experiments.” *Journal of Economic Perspectives*

Monterey.

5(4): 69 – 85.

**Brodersen, Kay H., Fabian Gallusser, Jim**

**Angrist, Joshua D., and Jörn-Steffen Pischke.**

**Koehler, Nicolas Remy, and Steven L. Scott.**

2009\. *Mostly Harmless Econometrics: An Empiricist’s*

2013\. “Inferring Causal Impact Using Bayesian

*Companion*. Princeton University Press.

[Structural Time-Series Models.”
http://research](http://research.google.com/pubs/pub41854.html)

**Artola, Concha, and Enrique Galan.** 2012.

[.google.com/pubs/pub41854.html.](http://research.google.com/pubs/pub41854.html)

“Tracking the Future on the Web: Construction

**Carrière-Swallow, Yan, and Felipe Labbé.** 2011.

of Leading Indicators Using Internet Searches.”

“Nowcasting with Google Trends in an Emerging

Documentos Ocasionales 1203T, Bank of Spain.

Market.” *Journal of Forecasting* 32(4): 289 – 98.

[http://www.bde.es/webbde/SES/Secciones](http://www.bde.es/webbde/SES/Secciones/Publicaciones/PublicacionesSeriadas/DocumentosOcasionales/12/Fich/do1203e.pdf)

**Caruana, Rich, and Alexandru Niculescu-Mizil.**

[/ P u b l i c a c i o n e s / P u b l i c a c i o n e s S e r i a d a
s](http://www.bde.es/webbde/SES/Secciones/Publicaciones/PublicacionesSeriadas/DocumentosOcasionales/12/Fich/do1203e.pdf)

2006\. “An Empirical Comparison of Supervised

[/DocumentosOcasionales/12/Fich/do1203e.pdf.](http://www.bde.es/webbde/SES/Secciones/Publicaciones/PublicacionesSeriadas/DocumentosOcasionales/12/Fich/do1203e.pdf)

Learning Algorithms.” In *Proceedings of the 23rd*

*26 Journal of Economic Perspectives*

*International Conference on Machine Learning*, Pitts-

Conditional Inference Framework.” *Journal of*

burgh, PA. A[vailable at:
http://www.autonlab.org](http://www.autonlab.org/icml2006/technical/accepted.html)

*Computational and Graphical Statistics* 15(3): 651–74.

[/icml2006/technical/accepted.html.](http://www.autonlab.org/icml2006/technical/accepted.html)

**Howard, Jeremy, and Mike Bowles.** 2012. “The

**Castle, Jennifer L., Xiaochuan Qin, and**

Two Most Important Algorithms in Predictive

**W. Robert Reed.** 2009. “How to Pick the Best

Modeling Today.” Strata Conference presentation,

Regression Equation: A Review and Comparison

Februar[y 28.
http://strataconf.com/strata2012](http://strataconf.com/strata2012/public/schedule/detail/22658)

of Model Selection Algorithms.” Working

[/public/schedule/detail/22658.](http://strataconf.com/strata2012/public/schedule/detail/22658)

Paper 13/2009, Department of Economics, Univer-

**Howe, Bill.** 2013. Introduction to Data Science. A

sity of Canterbury.
[http://www.econ.canterbury](http://www.econ.canterbury.ac.nz/RePEc/cbt/econwp/0913.pdf)

course from the University of W[ashington.
https://](https://class.coursera.org/datasci-001/lecture/index)

[.ac.nz/RePEc/cbt/econwp/0913.pdf.](http://www.econ.canterbury.ac.nz/RePEc/cbt/econwp/0913.pdf)

[class.coursera.org/datasci-001/lecture/index.](https://class.coursera.org/datasci-001/lecture/index)

**Choi, Hyunyoung, and Hal Varian.** 2009.

**James, Gareth, Daniela Witten, Trevor Hastie,**

“Predicting the Present with Google Trends.”

**and Robert Tibshirani.** 2013. *An Introduction to*

[http://google.com/googleblogs/pdfs/google](http://google.com/googleblogs/pdfs/google_predicting_the_present.pdf)

*Statistical Learning: With Applications in R*. New

[\_predicting_the_present.pdf.](http://google.com/googleblogs/pdfs/google_predicting_the_present.pdf)

York: Springer.

**Choi, Hyunyoung, and Hal Varian.** 2012.

**Ladd, Helen F.** 1998. “Evidence on Discrimina-

“Predicting the Present with Google Trends.”

tion in Mortgage Lending.” *Journal of Economic*

*Economic Record* 88(1): 2– 9.

*Perspectives* 12(2): 41– 62.

**Domingos, Pedro.** 2012. “A Few Useful Things

**Leek, Jeff.** 2013. Data Analysis *.* Videos from the

to Know about Machine Learning.” *Communica-*

[course.
http://blog.revolutionanalytics.com/2013](http://blog.revolutionanalytics.com/2013/04/coursera-data-analysis-course-videos.html)

*tions of the ACM* 55(10): 78 – 87.

[/04/coursera-data-analysis-course-videos.html.](http://blog.revolutionanalytics.com/2013/04/coursera-data-analysis-course-videos.html)

**Einav, Liran, and Jonathan D. Levin.** 2013.

**Lewis, Randall A., and Justin M. Rao.** 2013. “On

“The Data Revolution and Economic Analysis.”

the Near Impossibility of Measuring the Returns

Technical report, NBER Innovation Policy and

to Advertising.” Unpublished paper, Google, Inc.

the Economy Conference, 2013. NBER Working

[and Microsoft Research.
http://justinmrao.com](http://justinmrao.com/lewis_rao_nearimpossibility.pdf)

Paper 19035.

[/lewis_rao_nearimpossibility.pdf.](http://justinmrao.com/lewis_rao_nearimpossibility.pdf)

**Feuerverger, Andrey, Yu He, and Shashi Khatri.**

**Ley, Eduardo, and Mark F. J. Steel.** 2009. “On

2012\. “Statistical Signifi cance of the Netfl ix Chal-

the Effect of Prior Assumptions in Bayesian Model

lenge.” *Statistical Science* 27(2): 202–231.

Averaging with Applications to Growth Regres-

**Friedman, Jerome.** 2002. “Stochastic Gradient

sion.” *Journal of Applied Econometrics* 24(4): 651–74.

Boosting.” *Computational Statistics & Data Analysis*

**McLaren, Nick, and Rachana Shanbhoge.**

38(4): 367–78.

2011\. “Using Internet Search Data as Economic

**Friedman, Jerome, and Peter Hall.** 2007. “On

Indicators.” *Bank of England Quarterly Bulletin*

Bagging and Nonlinear Estimation.” *Journal of*

51(2): 134 – 40.

*Statistical Planning and Inference* 137(3): 669– 83.

**Morgan, James N., and John A. Sonquist.** 1963.

**Friedman, Jerome H., and Bogdan E. Popescu.**

“Problems in the Analysis of Survey Data, and a

2005\. “Predictive Learning via Rule Ensembles.”

Proposal.” *Journal of the American Statistical Associa-*

Technical report, Stanford University[.
http://](http://www-stat.stanford.edu/~jhf/ftp/RuleFit.pdf)

*tion* 58(302): 415 – 34.

[www-stat.stanford.edu/~jhf/ftp/RuleFit.pdf](http://www-stat.stanford.edu/~jhf/ftp/RuleFit.pdf)

**Munnell, Alicia H., Geoffrey M. B. Tootell,**

**Goel, Sharad, Jake M. Hofman, Sébastien**

**Lynne E. Browne, and James McEneaney.** 1996.

**Lahaie, David M. Pennock, and Duncan J. Watts.**

“Mortgage Lending in Boston: Interpreting

2010\. “Predicting Consumer Behavior with Web

HMDA Data.” *American Economic Review* 86(1):

Search.” *PNAS* 107(41).

25 – 53.

**Hastie, Trevor, Robert Tibshirani, and Jerome**

**Murphy, Kevin P.** 2012. *Machine Learning: A*

**Friedman.** 2009. *The Elements of Statistical Learning:*

*Probabilistic Perspective*. MIT Press.

*Data Mining, Inference, and Prediction*, 2nd edition.

**Pearl, Judea.** 2009a.

*Causality: Models,*

Springer-Verlag.

*Reasoning, and Inference*, 2nd edition. Cambridge

**Hellerstein, Rebecca, and Menno Middel-**

University Press.

**dorp.** 2012. “Forecasting with Internet Search

**Pearl, Judea.** 2009b. “Causal Inference in Statis-

Data.” *Liberty Street Economics* Blog of the Federal

tics: An Overview.” *Statistics Surveys* 3: 96 –146.

Reserve Bank of New York, Januar[y 4.
http://](http://libertystreeteconomics.newyorkfed.org/2012/01/forecasting-with-internet-search-data.html)

**Perlich, Claudia, Foster Provost, and Jeffrey S.**

[libertystreeteconomics.newyorkfed.org/2012/01](http://libertystreeteconomics.newyorkfed.org/2012/01/forecasting-with-internet-search-data.html)

**Simonoff.** 2003. “Tree Induction vs. Logistic

[/forecasting-with-internet-search-data.html.](http://libertystreeteconomics.newyorkfed.org/2012/01/forecasting-with-internet-search-data.html)

Regression: A Learning-Curve Analysis.” *Journal of*

**Hendry, David F., and Hans-Martin Krolzig.**

*Machine Learning Research* 4: 211–55.

2004\. “We Ran One Regression.” *Oxford Bulletin of*

**Rubin, Donald B.** 1974. “Estimating Causal

*Economics and Statistics* 66(5): 799 – 810.

Effects of Treatments in Randomized and Nonran-

**Hothorn, Torsten, Kurt Hornik, and Achim**

domized Studies.” *Journal of Educational Psychology*

**Zeileis.** 2006. “Unbiased Recursive Partitioning: A

66(5): 689–701.

*Big Data: New Tricks for Econometrics 27*

**Sala-i-Martín, Xavier.** 1997. “I Just Ran Two

[https://www.kaggle.com/c/titanic-gettingStarted](https://www.kaggle.com/c/titanic-gettingStarted/details/new-getting-started-with-r)

Million Regressions.” *American Economic Review*

[/details/new-getting-started-with-r.](https://www.kaggle.com/c/titanic-gettingStarted/details/new-getting-started-with-r)

87(2): 178 – 83.

**Sullivan, Danny.** 2012. “Google: 100 Billion

**Scott, Steve, and Hal Varian.** 2013a. “Bayesian

Searches per Month, Search to Integrate Gmail,

Variable Selection for Nowcasting Economic Time

Launching Enhanced Search App for iOS.” Search

Series.” NBER Working Paper 19567.

[Engine Land.
http://searchengineland.com](http://searchengineland.com/google-search-press-129925)

**Scott, Steve, and Hal Varian.** 2013b. “Predicting

[/google-search-press-129925.](http://searchengineland.com/google-search-press-129925)

the Present with Bayesian Structural Time Series.”

**Venables, W. N., and B. D. Ripley.** 2002. *Modern*

NBER Working Paper 19567.

*Applied Statistics with S,* 4th edition. New York:

**Steel, Mark F. J.** 2011. “Bayesian Model Aver-

Springer.

aging and Forecasting.” *Bulletin of E.U. and U.S.*

**Williams, Graham.** 2011. *Data Mining with Rattle*

*Infl ation and Macroeconomic Analysis*, 200: 30 – 41.

*and R*. New York: Springer.

**Stephens, Revor, and Curt Wehrley.** 2014.

**Wu, Xindong, and Vipin Kumar, eds.** 2009. *The*

“Getting Started with R.” *Kaggle*, September 28.

*Top Ten Algorithms in Data Mining*. CRC Press.

*28 Journal of Economic Perspectives*

<span id="index_split_000.html_outline"></span>

<span id="index_split_001.html"></span>

# Document Outline

- [Big Data: New Tricks for Econometrics](#index_split_000.html_1)
  - [Tools to Manipulate Big Data](#index_split_000.html_2)
  - [Tools to Analyze Data](#index_split_000.html_2)
  - [General Considerations for Prediction](#index_split_000.html_4)
  - [Classification and Regression Trees](#index_split_000.html_5)
    - [Pruning Trees](#index_split_000.html_8)
    - [An Economic Example Using Home Mortgage Disclosure Act
      Data](#index_split_000.html_10)
    - [Boosting, Bagging, Bootstrap](#index_split_000.html_12)
    - [Random Forests](#index_split_000.html_12)
  - [Variable Selection](#index_split_000.html_13)
    - [LASSO and Friends](#index_split_000.html_13)
    - [Spike-and-Slab Regression](#index_split_000.html_14)
    - [An Economic Example: Growth
      Regressions](#index_split_000.html_14)
    - [Variable Selection in Time Series
      Applications](#index_split_000.html_15)
  - [Econometrics and Machine Learning](#index_split_000.html_18)
    - [Causality and Prediction](#index_split_000.html_19)
    - [Model Uncertainty](#index_split_000.html_22)
  - [Summary and Further Reading](#index_split_000.html_22)
  - [REFERENCES](#index_split_000.html_23)



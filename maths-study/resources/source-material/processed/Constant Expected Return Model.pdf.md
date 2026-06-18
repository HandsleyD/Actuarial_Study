---
normalized_id: shared-pdf-reference-constant-expected-return-model
exam_code: SHARED
material_scope: constant expected return model.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Constant Expected Return Model.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-constant-expected-return-model

Chapter 1
The Constant Expected Return
Model

The first model of asset returns we consider is the very simple constant ex-
pected return (CER) model. This model assumes that an asset’s return over
time is normally distributed with a constant (time invariant) mean and vari-
ance The model also assumes that the correlations between asset returns
are constant over time. Although this model is very simple, it allows us to
discuss and develop several important econometric topics such as estimation,
hypothesis testing, forecasting and model evaluation.

1.0.1     Constant Expected Return Model Assumptions
Let Rit denote the continuously compounded return on an asset i at time t.
We make the following assumptions regarding the probability distribution of
Rit for i = 1, . . . , N assets over the time horizon t = 1, . . . , T.
  1. Normality of returns: Rit ∼ N(µi , σ 2i ) for i = 1, . . . , N and t = 1, . . . , T.
  2. Constant variances and covariances: cov(Rit , Rjt ) = σ ij for i = 1, . . . , N
     and t = 1, . . . , T.
  3. No serial correlation across assets over time: cov(Rit , Rjs ) = 0 for t 6= s
     and i, j = 1, . . . , N.
    Assumption 1 states that in every time period asset returns are normally
distributed and that the mean and the variance of each asset return is con-
stant over time. In particular, we have for each asset i and every time period

                                           1
2CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

t
                                     E[Rit ] = µi
                                   var(Rit ) = σ 2i
The second assumption states that the contemporaneous covariances between
assets are constant over time. Given assumption 1, assumption 2 implies that
the contemporaneous correlations between assets are constant over time as
well. That is, for all assets and time periods
                                 corr(Rit , Rjt ) = ρij
The third assumption stipulates that all of the asset returns are uncorrelated
over time1 . In particular, for a given asset i the returns on the asset are
serially uncorrelated which implies that
                 corr(Rit , Ris ) = cov(Rit , Ris ) = 0 for all t 6= s.
Additionally, the returns on all possible pairs of assets i and j are serially
uncorrelated which implies that
           corr(Rit , Rjs ) = cov(Rit , Rjs ) = 0 for all i 6= j and t 6= s.
    Assumptions 1-3 indicate that all asset returns at a given point in time
are jointly (multivariate) normally distributed and that this joint distribution
stays constant over time. Clearly these are very strong assumptions. How-
ever, they allow us to development a straightforward probabilistic model for
asset returns as well as statistical tools for estimating the parameters of the
model and testing hypotheses about the parameter values and assumptions.

1.0.2      Regression Model Representation
A convenient mathematical representation or model of asset returns can be
given based on assumptions 1-3. This is the constant expected return (CER)
regression model. For assets i = 1, . . . , N and time periods t = 1, . . . , T the
CER model is represented as
                                     Rit = µi + εit                                (1.1)
                                     εit ∼ iid. N(0, σ 2i )
                           cov(εit , εjt ) = σ ij                                  (1.2)
    1
    Since all assets are assumed to be normally distributed (assumption 1), uncorrelated-
ness implies the stronger condition of independence.
                                                                                     3

where µi is a constant and εit is a normally distributed random variable
with mean zero and variance σ 2i . Notice that the random error term εit is
independent of εjs for all time periods t 6= s. The notation εit ∼ iid. N(0, σ 2i )
stipulates that the random variable εit is serially independent and identically
distributed as a normal random variable with mean zero and variance σ 2i .
This implies that, E[εit ] = 0, var(εit ) = σ 2i and cov(εit , εjs ) = 0 for i 6= j and
t 6= s.
    Using the basic properties of expectation, variance and covariance dis-
cussed in chapter 2, we can derive the following properties of returns. For
expected returns we have

                     E[Rit ] = E[µi + εit ] = µi + E[εit ] = µi ,
since µi is constant and E[εit ] = 0. Regarding the variance of returns, we
have

                    var(Rit ) = var(µi + εit ) = var(εit ) = σ 2i
which uses the fact that the variance of a constant (µi ) is zero. For covari-
ances of returns, we have

           cov(Rit , Rjt ) = cov(µi + εit , µj + εjt ) = cov(εit , εjt ) = σ ij
and

       cov(Rit , Rjs ) = cov(µi + εit , µj + εjs ) = cov(εit , εjs ) = 0, t 6= s,

 which use the fact that adding constants to two random variables does not
aﬀect the covariance between them. Given that covariances and variances
of returns are constant over time gives the result that correlations between
returns over time are also constant:
                            cov(Rit , Rjt )      σ ij
       corr(Rit , Rjt ) = p                   =       = ρij ,
                           var(Rit )var(Rjt )   σiσj
                            cov(Rit , Rjs )       0
       corr(Rit , Rjs ) = p                   =       = 0, i 6= j, t 6= s.
                           var(Rit )var(Rjs )   σiσj

Finally, since the random variable εit is independent and identically distrib-
uted (i.i.d.) normal the asset return Rit will also be i.i.d. normal:

                               Rit ∼ i.i.d. N (µi , σ 2i ).
4CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

Hence, the CER model (1.1) for Rit is equivalent to the model implied by
assumptions 1-3.

1.0.3     Interpretation of the CER Regression Model
The CER model has a very simple form and is identical to the measurement
error model in the statistics literature. In words, the model states that each
asset return is equal to a constant µi (the expected return) plus a normally
distributed random variable εit with mean zero and constant variance. The
random variable εit can be interpreted as representing the unexpected news
concerning the value of the asset that arrives between times t − 1 and time
t. To see this, note that using (1.1) we can write εit as
                              εit = Rit − µi
                                  = Rit − E[Rit ]
so that εit is defined to be the deviation of the random return from its
expected value. If the news between times t − 1 and time t is good, then the
realized value of εit is positive and the observed return is above its expected
value µi . If the news is bad, then εjt is negative and the observed return is
less than expected. The assumption that E[εit ] = 0 means that news, on
average, is neutral; neither good nor bad. The assumption that var(εit ) =
σ 2i can be interpreted as saying that volatility of news arrival is constant
over time. The random news variable aﬀecting asset i, εit , is allowed to
be contemporaneously correlated with the random news variable aﬀecting
asset j, εjt , to capture the idea that news about one asset may spill over
and aﬀect another asset. For example, let asset i be Microsoft and asset
j be Apple Computer. Then one interpretation of news in this context is
general news about the computer industry and technology. Good news should
lead to positive values of εit and εjt . Hence these variables will be positively
correlated.

Time Aggregation and the CER Model
The CER model with continuously compounded returns has the following
nice property with respect to the interpretation of εit as news. Consider
the default case where Rit is interpreted as the continuously compounded
monthly return on asset i. Suppose we are interested in the annual contin-
uously compounded return RitA = Rit (12)?˙ Since multiperiod continuously
                                                                                          5

compounded returns are additive, Rit (12) is the sum of 12 monthly continu-
ously compounded returns2 :

                                  11
                                  X
             RitA = Rit (12) =          Rit−k = Rit + Rit−1 + · · · + Rit−11
                                  t=0


Using the CER model representation (1.1) for the monthly return Rit we may
express the annual return Rit (12) as

                                                11
                                                X
                               Rit (12) =          (µi + εit )
                                                 t=0
                                                           11
                                                           X
                                           = 12 · µi +           εit
                                                           t=0
                                           =    µA    A
                                                 i + εit


where µA
P        i = 12 · µi is the annual expected return on asset i and εit =
                                                                          A
  11
  k=0 εit−k is the annual random news component. Hence, the annual ex-
pected return, µAi , is simply 12 times the monthly expected return, µi . The
annual random news component, εA     it , is the accumulation of news over the
year. Using the results from chapter 2 about the variance of a sum of ran-
dom variables, the variance of the annual news component is just 12 time
the variance of the monthly new component:
                              Ã 11           !
                               X
         var(εA
              it ) = var              εit−k )
                                k=0
                        11
                        X
                    =         var(εit−k ) since εit is uncorrelated over time
                        k=0
                        X11
                    =         σ 2i since var(εit ) is constant over time
                        k=0
                    = 12 · σ 2i
                    = var(RitA )
   2
    For simplicity of exposition, we will ignore the fact that some assets do not trade over
the weekend.
6CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

Similarly, using results from chapter 2 about the additivity of covariances
we have that covariance between εA               A
                                         it and εjt is just 12 times the monthly
covariance:
                      Ã 11                  !
                       X           11
                                   X
cov(εA     A
     it , εjt ) = cov      εit−k ,    εjt−k
                        k=0        k=0
                11
                X
            =         cov(εit−k , εjt−k ) since εit and εjt are uncorrelated over time
                k=0
                X11
            =         σ ij since cov(εit , εjt ) is constant over time
                k=0
            = 12 · σ ij
            = cov(RitA , Rjt
                          A
                             )
The above results imply that the correlation between εA       A
                                                      it and εjt is the same
as the correlation between εit and εjt :
                                                 cov(εA     A
                                                      it , εjt )
                       corr(εA     A
                             it , εjt ) = q
                                               var(εA           A
                                                    it ) · var(εjt )

                                                12 · σ ij
                                         = q
                                               12σ 2i · 12σ 2j
                                            σ ij
                                         =       = ρij
                                           σi σj
                                         = corr(εit , εjt )

1.0.4     The CER Model of Asset Returns and the Ran-
          dom Walk Model of Asset Prices
The CER model of asset returns (1.1) gives rise to the so-called random walk
(RW) model of the logarithm of asset prices. To see this, recall that the
continuously compounded return, Rit , is defined from asset prices via
                                 µ       ¶
                                    Pit
                              ln           = Rit .
                                   Pit−1
Since the log of the ratio of prices is equal to the diﬀerence in the logs of
prices we may rewrite the above as
                              ln(Pit ) − ln(Pit−1 ) = Rit .
                                                                                      7

Letting pit = ln(Pit ) and using the representation of Rit in the CER model
(1.1), we may further rewrite the above as

                                pit − pit−1 = µi + εit .                          (1.3)

The representation in (1.3) is know as the RW model for the log of asset
prices.
    In the RW model, µi represents the expected change in the log of asset
prices (continuously compounded return) between months t − 1 and t and εit
represents the unexpected change in prices. That is,

                   E[pit − pit−1 ] = E[Rit ] = µi ,
                              εit = pit − pit−1 − E[pit − pit−1 ].

Further, in the RW model, the unexpected changes in asset prices, εit , are
uncorrelated over time (cov(εit , εis ) = 0 for t 6= s) so that future changes in
asset prices cannot be predicted from past changes in asset prices3 .
    The RW model gives the following interpretation for the evolution of asset
prices. Let pi0 denote the initial log price of asset i. The RW model says
that the price at time t = 1 is

                                 pi1 = pi0 + µi + εi1

where εi1 is the value of random news that arrives between times 0 and 1.
Notice that at time t = 0 the expected price at time t = 1 is

                       E[pi1 ] = pi0 + µi + E[εi1 ] = pi0 + µi

which is the initial price plus the expected return between time 0 and 1.
Similarly, the price at time t = 2 is

                          pi2 = pi1 + µi + εi2
                              = pi0 + µi + µi + εi1 + εi2
                                               2
                                               X
                              = pi0 + 2 · µi +    εit
                                                  t=1
   3
    The notion that future changes in asset prices cannot be predicted from past changes
in asset prices is often referred to as the weak form of the eﬃcient markets hypothesis.
8CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

which is equal to the initial price, pi0 , plus the two period expected
                                                                   P2 return,
2 · µi , plus the accumulated random news over the two periods, t=1 εit . By
recursive substitution, the price at time t = T is
                                                     T
                                                     X
                              piT = pi0 + T · µi +         εit .
                                                     t=1

At time t = 0 the expected price at time t = T is

                                  E[piT ] = pi0 + T · µi

The actual price, piT , deviates from the expected price by the accumulated
random news
                                            X
                                            T
                            piT − E[piT ] =   εit .
                                                  t=1

    Figure 1.1 illustrates the random walk model of asset prices based on the
CER model with µ = 0.05, σ = 0.10 and p0 = 1. The plot shows the log
price, P
       pt , the expected price E[pt ] = p0 + 0.05t and the accumulated random
news tt=1 εt .
    The term random walk was originally used to describe the unpredictable
movements of a drunken sailor staggering down the street. The sailor starts
at an initial position, p0 , outside the bar. The sailor generally moves in the
direction described by µ but randomly deviates from this direction after each
step t by an amount PTequal to εt . After T steps the sailor ends up at position
pT = p0 + µ · T + t=1 εt .


1.1        Monte Carlo Simulation of the CER Model
A good way to understand the probabilistic behavior of a model is to use
computer simulation methods to create pseudo data from the model. The
process of creating such pseudo data is often called Monte Carlo simulation4 .
To illustrate the use of Monte Carlo simulation, consider the problem of
creating pseudo return data from the CER model (1.1) for one asset. The
steps to create a Monte Carlo simulation from the CER model are:

      • Fix values for the CER model parameters µ and σ (or σ 2 )
  4
      Monte Carlo referrs to the fameous city in Monaco where gambling is legal.
1.1 MONTE CARLO SIMULATION OF THE CER MODEL                                      9



              6


                                p(t)
                                E[p(t)]
                                p(t)-E[p(t)]
              4
              2
              0




                  0        20                  40   60      80   100




          Figure 1.1: Simulated random walk model for log prices.

   • Determine the number of simulated values, T, to create.
   • Use a computer random number generator to simulate T iid values
     of εt from N(0, σ 2 ) distribution. Denote these simulated values are
     ε∗1 , . . . , ε∗T .
   • Create simulated return data Rt∗ = µ + ε∗t for t = 1, . . . , T

   To mimic the monthly return data on Microsoft, the values µ = 0.05 and
σ = 0.10 are used as the model’s parameters and T = 100 is the number of
simulated values (sample size). The key to simulating data from the above
model is to simulate T = 100 observations of the random news variable εt
~iid N(0, (0.10)2 ). Computer algorithms exist which can easily create such
observations..Let {ε∗1 , . . . , ε∗100 } denote the 100 simulated values of εt .The
simulated returns are then computed as

                         Rt∗ = 0.05 + ε∗t , t = 1, . . . , 100

   A time plot and histogram of the simulated Rt∗ values are given in figure
.The simulated return data fluctuates randomly about the expected return
10CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

                              Simulated returns from CER model                           Histogram of simulated returns




                                                                                   30
                   0.3




                                                                                   25
                   0.2




                                                                                   20
                   0.1




                                                                       frequency
          return




                                                                                   15
                   0.0




                                                                                   10
                   -0.1




                                                                                   5
                   -0.2




                                                                                   0
                          0        20    40            60   80   100                    -0.2   -0.1   0.0    0.1   0.2   0.3

                                              months                                                    return




Figure 1.2: Simulated returns from the CER model Rt = 0.05 + εt , εt ~iid
N(0, (0.10)2 )


value E[Rt ] = µ = 0.05. The typical size of the fluctuation is approximately
equal to SD(εt ) = 0.10. Notice that the simulated return data looks remark-
ably like the actual monthly return data for Microsoft.
                                                      1
                                                        P100 ∗
   The sample average of the simulated
                                 q P returns is 100 t=1 Rt = 0.0522 and
                                    1    100   ∗            2
the sample standard deviation is 99      t=1 (Rt − (0.0522)) = 0.0914. These
values are very close to the population values E[Rt ] = 0.05 and SD(Rt ) =
0.10, respectively.
   Monte Carlo simulation of a model can be used as a first pass reality
check of the model. If simulated data from the model does not look like the
data that the model is supposed to describe then serious doubt is cast on the
model. However, if simulated data looks reasonably close to the data that
the model is suppose to describe then confidence is instilled on the model.


1.1.1    Simulating End of Period Wealth
To be completed
1.2 ESTIMATING THE PARAMETERS OF THE CER MODEL11

   • insert example showing how to use Monte Carlo simulation to com-
     pute expected end of period wealth. compare computations where end
     of period wealth is based on the expected return over the period ver-
     sus computations based on simulating diﬀerent sample
                                                       PN paths and then
     taking the average. Essentially, compute E[W0 exp( t=1 Rt )] where Rt
     behaves according to the CER model and compare this to W0 exp(Nµ).


1.1.2      Simulating Returns on More than One Asset
To be completed


1.2      Estimating the Parameters of the CER
         Model
1.2.1      The Random Sampling Environment
The CER model of asset returns gives us a rigorous way of interpreting the
time series behavior of asset returns. At the beginning of every month t, Rit
is a random variable representing the return to be realized at the end of the
month. The CER model states that Rit ∼ i.i.d. N (µi , σ 2i ). Our best guess for
the return at the end of the month is E[Ritp        ] = µi , our measure of uncertainty
about our best guess is captured by σ i = var(Rit ) and our measure of the
direction of linear association between Rit and Rjt is σ ij = cov(Rit , Rjt ). The
CER model assumes that the economic environment is constant over time
so that the normal distribution characterizing monthly returns is the same
every month.
    Our life would be very easy if we knew the exact values of µi , σ 2i and σ ij ,
the parameters of the CER model. In actuality, however, we do not know
these values with certainty. A key task in financial econometrics is estimating
the values of µi , σ 2i and σ ij from a history of observed data.
    Suppose we observe monthly returns on N diﬀerent assets over the horizon
t = 1, . . . , T. Let {ri1 , . . . , riT } denote the observed history of T monthly
returns on asset i for i = 1, . . . , N. It is assumed that the observed returns
are realizations of the time series of random variables {Ri1 , . . . , RiT } , where
Rit is described by the CER model (1.1). We call {Ri1 , . . . , RiT } a random
sample from the CER model (1.1) and we call {ri1 , . . . , riT } the realized values
12CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

from the random sample. Under these assumptions, we can use the observed
returns to estimate the unknown parameters of the CER model

1.2.2      Statistical Estimation Theory
Before we describe the estimation of the CER model, it is useful to summarize
some concepts in the statistical theory of estimation. Let θ denote some
characteristic of the CER model (1.1) we are interested in estimating. For
example, if we are interested in the expected return then θ = µi ; if we are
interested in the variance of returns then θ = σ 2i . The goal is to estimate θ
based on the observed data {ri1 , . . . , riT }.

Definition 1 An estimator of θ is a rule or algorithm for forming an esti-
mate for θ based on the random sample {Ri1 , . . . , RiT }

Definition 2 An estimate of θ is simply the value of an estimator based on
the realized sample values {ri1 , . . . , riT }.
                                           P
Example 3 The sample average T1 Tt=1 Rit is an algorithm for computing
an estimate of the expected return µi . Before the sample is observed, the sam-
ple average is a simple linear function of the random variables {Ri1 , . . . , RiT }
and so is itself a random variable. After the sample
                                                 P    {ri1 , . . . , riT } is observed,
the sample average can be evaluated giving T1 Tt=1 rit , which is just a number.
For example, if the observed sample is {0.05, 0.03, −0.10} then the sample av-
erage estimate is 13 (0.05 + 0.03 − 0.10) = −0.02.

    To discuss the properties of estimators it is necessary to establish some
notation. Let θ̂(Ri1 , . . . , RiT ) denote an estimator of θ treated as a function
of the random variables {Ri1 , . . . , RiT }. Clearly, θ̂(Ri1 , . . . , RiT ) is a random
variable. Let θ̂(ri1 , . . . , riT ) denote an estimate of θ based on the realized
values {ri1 , . . . , riT }. θ̂(ri1 , . . . , riT ) is simply an number. We will often use θ̂
as shorthand notation to represent either an estimator of θ or an estimate of
θ. The context will determine how to interpret θ̂.

Example 4 Let R1 , . . . , RT denote a random sample of returns. An estima-
tor of the expected return, µ, is the sample average

                                                     1X
                                                       T
                              µ̂(R1 , . . . , RT ) =       Rt
                                                     T t=1
1.2 ESTIMATING THE PARAMETERS OF THE CER MODEL13

Suppose T = 5 and the realized values of the returns are r1 = 0.1, r2 =
0.05, r3 = 0.025, r4 = −0.1, r5 = −0.05. Then the estimate of the expected
return using the sample average is
                               1
       µ̂(0.1, . . . , −0.05) = (0.1 + 0.05 + 0.025 + −0.1 + −0.05) = 0.005
                               5

1.2.3      Properties of Estimators
Consider θ̂ = θ̂(Ri1 , . . . , RiT ) as a random variable. In general, the pdf
of θ̂, p(θ̂), depends on the pdf’s of the random variables Ri1 , . . . , RiT . The
exact form of p(θ̂) may be very complicated. For analysis purposes, we
often focus on certain characteristics of p(θ̂) like its expected value (center),
variance and standard deviation (spread about expected value). The expected
value of an estimator is related to the concept of estimator bias and the
variance/standard deviation of an estimator is related estimator precision.
Intuitively, a good estimator of θ is one that will produce an estimate θ̂ that
is close θ all of the time. That is, a good estimator will have small bias and
high precision.

Bias
Bias concerns the location or center of p(θ̂). If p(θ̂) is centered away from θ
then we say θ̂ is biased. If p(θ̂) is centered at θ then we say that θ̂ is unbiased.
Formally we have the following definitions:

Definition 5 The estimation error is diﬀerence between the estimator and
the parameter being estimated

                                  error = θ̂ − θ.

Definition 6 The bias of an estimator θ̂ of θ is given by

                              bias(θ̂, θ) = E[θ̂] − θ.

Definition 7 An estimator θ̂ of θ is unbiased if bias(θ̂, θ) = 0; i.e., if E[θ̂] =
θ or E[error] = 0.

    Unbiasedness is a desirable property of an estimator. It means that the
estimator produces the correct answer “on average”, where “on average”
14CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL


                              Pdfs of competing estimators

                  0.8

                  0.7

                  0.6

                  0.5
                                                                  pdf 1
            pdf




                  0.4
                                                                  pdf 2
                  0.3

                  0.2

                  0.1

                   0
                        -10    -5          0          5      10
                                    estimator value




          Figure 1.3: Pdf values for competing estimators of θ = 0.

means over many hypothetical samples. It is important to keep in mind that
an unbiased estimator for θ may not be very close to θ for a particular sample
and that a biased estimator may be actually be quite close to θ. For example,
consider the pdf of θ̂1 in figure 1.3. The center of the distribution is at the
true value θ = 0, E[θ̂ 1 ] = 0, but the distribution is very widely spread out
about θ = 0. That is, var(θ̂1 ) is large. On average (over many hypothetical
samples) the value of θ̂1 will be close to θ but in any given sample the value
of θ̂1 can be quite a bit above or below θ. Hence, unbiasedness by itself does
not guarantee a good estimator of θ. Now consider the pdf for θ̂2 . The center
of the pdf is slightly higher than θ = 0, bias(θ̂2 , θ) = 0.25, but the spread
of the distribution is small. Although the value of θ̂2 is not equal to 0 on
average we might prefer the estimator θ̂2 over θ̂1 because it is generally closer
to θ = 0 on average than θ̂1 .

Precision
An estimate is, hopefully, our best guess of the true (but unknown) value of
θ. Our guess most certainly will be wrong but we hope it will not be too far
1.2 ESTIMATING THE PARAMETERS OF THE CER MODEL15

oﬀ. A precise estimate, loosely speaking, is one that has a small estimation
error. The magnitude of the estimation error is usually captured by the mean
squared error:

Definition 8 The mean squared error of an estimator θ̂ of θ is given by

                     mse(θ̂, θ) = E[(θ̂ − θ)2 ] = E[error2 ]

    The mean squared error measures the expected squared deviation of θ̂
from θ. If this expected deviation is small, then we know that θ̂ will almost
always be close to θ. Alternatively, if the mean squared is large then it is pos-
sible to see samples for which θ̂ to be quite far from θ. A useful decomposition
of mse(θ̂, θ) is given in the following proposition
                                          ³         ´2
Proposition 9 mse(θ̂, θ) = E[(θ̂−E[θ̂]) ]+ E[θ̂] − θ = var(θ̂)+bias(θ̂, θ)2
                                            2



    The proof of this proposition is straightforward and is given in the appen-
dix. The proposition states that for any estimator θ̂ of θ, mse(θ̂, θ) can be
split into a variance component, var(θ̂), and a bias component, bias(θ̂, θ)2 .
Clearly, mse(θ̂, θ) will be small only if both components are small. If an es-
timator is unbiased then mse(θ̂, θ) = var(θ̂) = E[(θ̂ − θ)2 ] is just the squared
deviation of θ̂ about θ. Hence, an unbiased estimator θ̂ of θ is good if it has
a small variance.


1.2.4     Method of Moment Estimators for the Parame-
          ters of the CER Model
Let {Ri1 , . . . , RiT } denote a random sample from the CER model and let
{ri1 , . . . , riT } denote the realized values from the random sample. Consider
the problem of estimating the parameter µi in the CER model (1.1). As an
example, consider the observed monthly continuously compounded returns,
{r1 , . . . , r100 }, for Microsoft stock over the period July 1992 through October
2000. These data are illustrated in figure 1.4.Notice that the data seem to
fluctuate up and down about some central value near 0.03. The typical size of
a deviation about 0.03 is roughly 0.10. Intuitively, the parameter µi = E[Rit ]
in the CER model represents this central value and σ i represents the typical
size of a deviation about µi .
16CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL




                        0.2
                        0.1
                        0.0
              returns
                        -0.1
                        -0.2
                        -0.3
                        -0.4




                               Q3 Q1 Q3    Q1     Q3   Q1     Q3   Q1     Q3   Q1     Q3   Q1     Q3   Q1     Q3   Q1     Q3
                               1992 1993        1994        1995        1996        1997        1998        1999        2000




Figure 1.4: Monthly continuously compounded returns on Microsoft stock.

The method of moments estimate of µi
Let µ̂i denote a prospective estimate of µi 5 . The sample error or residual at
time t associated with this estimate is defined as

                                           ε̂it = rit − µ̂i , t = 1, . . . , T.

This is the estimated news component for month t based on the estimate µ̂i .
Now the CER model imposes the condition that the expected value of the
true error is zero
                               E[εit ] = 0
The method of moments estimator of µi is the value of µ̂i that makes the
average of the sample errors equal to the expected value of the population
errors. That is, the method of moments estimator solves

                                  1X
                                     T
                                               1X
                                                  T
                                        ε̂it =       (rit − µ̂i ) = E[εit ] = 0                                                (1.4)
                                  T t=1        T t=1
  5
      In this book, quantities with a “ˆ” denote an estimate.
1.2 ESTIMATING THE PARAMETERS OF THE CER MODEL17


                                                                       Returns on Microsoft


                    0.0
          returns

                    -0.4




                            Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4
                            1992     1993        1994        1995        1996            1997    1998        1999        2000


                                                                       Returns on Starbucks
                    0.0
          returns

                    -0.4




                            Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4
                            1992     1993        1994        1995        1996            1997    1998        1999        2000


                                                                       Returns on S&P 500
                    0.05
          returns

                    -0.15




                            Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4 Q1 Q2 Q3 Q4
                            1992     1993        1994        1995        1996            1997    1998        1999        2000




Figure 1.5: Monthly continuously compounded returns on Microsoft, Star-
bucks and the S&P 500 Index.


Solving (1.4) for µ̂i gives the method of moments estimate of µi :


                                                                     1X
                                                                             T
                                                         µ̂i =             rit = r̄.                                                (1.5)
                                                                     T t=1


Hence, the method of moments estimate of µi (i = 1, . . . , N) in the CER
model is simply the sample average of the observed returns for asset i.




Example 10 Consider the monthly continuously compounded returns on Mi-
crosoft, Starbucks and the S&P 500 index over the period July 1992 through
October 2000. The returns are shown in figure For the T = 100 monthly
18CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

continuously returns the estimates of E[Rit ] = µi are

                                  1 X
                                           100
                       µ̂msf t =         rmsf t,t = 0.0276
                                 100 t=1
                                  1 X
                                           100
                        µ̂sbux =         rsbux,t = 0.0278
                                 100 t=1
                                  1 X
                                           100
                       µ̂sp500 =         rsp500,t = 0.0125
                                 100 t=1

The mean returns for MSFT and SBUX are very similar at about 2.8%
per month whereas the mean return for SP500 is smaller at only 1.25% per
month.

The method of moments estimates of σ 2i , σ i , σ ij and ρij
The method of moments estimates of σ 2i , σ i , σ ij and ρij are defined analo-
gously to the method of moments estimator for µi . Without going into the
details, the method of moments estimates of σ 2i , σ i , σ ij and ρij are given by
the sample descriptive statistics

                               1 X
                                     T
                      σ̂ 2i=           (rit − r̄i )2 ,                      (1.6)
                             T − 1 t=1
                             q
                      σ̂ i = σ̂ 2i ,                                        (1.7)
                                 1 X
                                      T
                     σ̂ ij =             (rit − r̄i )(rjt − r̄j ),          (1.8)
                               T − 1 t=1
                                σ̂ ij
                      ρ̂ij =                                                (1.9)
                               σ̂ i σ̂ j
                P
where r̄i = T1 Tt=1 rit = µ̂i is the sample average of the returns on asset.i.
Notice that (1.6) is simply the sample variance of the observed returns for
asset i, (1.7) is the sample standard deviation, (1.8) is the sample covariance
of the observed returns on assets i and j and (1.9) is the sample correlation
of returns on assets i and j.
Example 11 Consider again the monthly continuously compounded returns
on Microsoft, Starbucks and the S&P 500 index over the period July 1992
1.2 ESTIMATING THE PARAMETERS OF THE CER MODEL19

                                                 -0.5   -0.3   -0.1    0.1   0.3

                                                                                                                            0.3


                                                                                                                            0.1


                                sbux                                                                                        -0.1


                                                                                                                            -0.3


                                                                                                                            -0.5

            0.3


            0.1

                                                                msft
           -0.1


           -0.3


           -0.5
                                                                                                                            0.10

                                                                                                                            0.05

                                                                                                                            0.00
                                                                                                 sp500
                                                                                                                            -0.05

                                                                                                                            -0.10

                                                                                                                            -0.15

                                                                                                                            -0.20
                  -0.5   -0.3   -0.1     0.1   0.3                             -0.20 -0.15 -0.10 -0.05 0.00   0.05   0.10




Figure 1.6: Scatterplot matrix of monthly returns on Microsoft, Starbucks
and S&P 500 index.

through October 2000. The estimates of the parameters σ 2i , σ i , using (1.6)
and (1.7) are

                                       σ̂ 2msf t = 0.0114, σ̂ msf t = 0.1068
                                    σ̂ 2sbux = 0.0185, σ̂ sbux = 0.1359
                                   σ̂ 2sp500 = 0.0014, σ̂ sp500 = 0.0379

SBUX has the most variable monthly returns and SP500 has the smallest.
The scatterplots of the returns are illustrated in figure 1.6. All returns appear
to be positively related. The pairs (MSFT,SP500) and (SBUX,SP500) appear
to be the most correlated.The estimates of σ ij and ρij using (1.8) and (1.9)
are

        σ̂ msf t,sbux = 0.0040, σ̂ msf t,sp500 = 0.0022, σ̂ sbux,sp500 = 0.0022
        ρ̂msf t,sbux = 0.2777, ρ̂msf t,sp500 = 0.5551, ρ̂sbux,sp500 = 0.4197

These estimates confirm the visual results from the scatterplot matrix.
20CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

1.3     Statistical Properties of Estimates
1.3.1     Statistical Properties of µ̂i
To determine the statistical properties of µ̂i in the CER model, we treat it
as a function of the random sample Ri1 , . . . , RiT :

                                                         1X
                                                            T
                      µ̂i = µ̂i (Ri1 , . . . , RiT ) =         Rit       (1.10)
                                                         T t=1

where Rit is assumed to be generated by the CER model (1.1).

Bias
In the CER model, the random variables Rit (t = 1, . . . , T ) are iid normal
with mean µi and variance σ 2i . Since the method of moments estimator
(1.10) is an average of these normal random variables it is also normally
distributed. That is, p(µ̂i ) is a normal density. ToPdetermine the mean of
                                                   −1  T
this distribution we must compute E[µ̂i ] = E[T        t=1 Rit ]. Using results
from chapter 2 about the expectation of a linear combination of random
variables it is straightforward to show (details are given in the appendix)
that
                                   E[µ̂i ] = µi
Hence, the mean of the distribution of µ̂i is equal to µi . In other words, µ̂i
an unbiased estimator for µi .

Precision
                                                                        P
To determine the variance of µ̂i we must compute var(µ̂i ) = var(T −1 Tt=1 Rit ).
Using the results from chapter 2 about the variance of a linear combination
of uncorrelated random variables it is easy to show (details in the appendix)
that
                                            σ2
                                 var(µ̂i ) = .                            (1.11)
                                            T
Notice that the variance of µ̂i is equal to the variance of Rit divided by the
sample size and is therefore much smaller than the variance of Rit .
    The standard deviation of µ̂i is just the square root of var(µ̂it )
                                    p             σi
                        SD(µ̂i ) = var(µ̂i ) = √ .                        (1.12)
                                                   T
1.3 STATISTICAL PROPERTIES OF ESTIMATES                                            21



                 0.8



                                                                       pdf 1
                                                                       pdf 2
                 0.6
                 0.4
           pdf
                 0.2
                 0.0




                       -3   -2           -1         0          1   2           3
                                              estimate value




Figure 1.7: Pdfs for µ̂i with small and large values of SE(µ̂i ). True value of
µi = 0.

The standard deviation of µ̂i is most often referred to as the standard error
of the estimate µ̂i :
                                                   σi
                           SE(µ̂i ) = SD(µ̂i ) = √ .                       (1.13)
                                                    T
SE(µ̂i ) is in the same units as µ̂i and measures the precision of µ̂i as an
estimate. If SE(µ̂i ) is small relative to µ̂i then µ̂i is a relatively precise of
µi because p(µ̂i ) will be tightly concentrated around µi ; if SE(µ̂i ) is large
relative to µi then µ̂i is a relatively imprecise estimate of µi because p(µ̂i )
will be spread out about µi . Figure 1.7 illustrates these relationships
    Unfortunately, SE(µ̂i ) is not a practically useful measure of the precision
of µ̂i because it depends on the unknown value of σ i . To get a practically
useful measure of precision for µ̂i we compute the estimated standard error
                                      p             bi
                                                    σ
                           c i ) = vd
                          SE(µ̂          ar(µ̂i ) = √                      (1.14)
                                                      T
which is just (1.13) withq
                         the unknown value of σ i replaced by the method of
                 bi =
moments estimate σ               b2i .
                                 σ
22CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

Example 12 For the Microsoft, Starbucks and S&P 500 return data, the
          c i ) are
values of SE(µ̂

                        c msf t ) = 0.1068
                       SE(µ̂        √      = 0.01068
                                       100
                        c sbux ) = 0.1359
                       SE(µ̂        √      = 0.01359
                                       100
                       c sp500 ) = 0.0379
                       SE(µ̂        √      = 0.003785
                                       100
Clearly, the mean return µi is estimated more precisely for the S&P 500 index
than it is for Microsoft and Starbucks.

Interpreting E[µ̂i ] and SE(µ̂i ) using Monte Carlo simulation
The statistical concepts E[µi ] = µi and SE(µi ) are a bit hard to grasp at first.
Strictly speaking, E[µ̂i ] = µi means that over an infinite number of repeated
samples the average of the µ̂i values computed over the infinite samples is
equal to the true value µi . Similarly, SE(µ̂i ) represents the standard deviation
of these µ̂i values. We may think of these hypothetical samples as Monte
Carlo simulations of the CER model. In this way we can approximate the
computations involved in evaluating E[µ̂i ] and SE(µ̂i ).
    To illustrate, consider the CER model

                          Rt = 0.05 + εit , t = 1, . . . , 50                 (1.15)
                               εit ~iid N (0, (0.10)2 )

and simulate N = 1000 samples of size T = 50 values from the above model
using the technique of Monte Carlo simulation. This gives j = 1, . . . , 1000
sample realizations {r1j∗ , . . . , r50
                                     j∗
                                        }. The first 10 of these sample realizations
are illustrated in figure 1.8.Notice that there is considerable variation in the
simulated samples but that all of the simulated samples fluctuates about
the true mean value of µ = 0.05. For each of the 1000 simulated samples the
estimate µ̂ is formed giving 1000 mean estimates {µ̂1 , . . . , µ̂1000 }. A histogram
of these 1000 mean values is illustrated in figure 1.9.The histogram of the
estimated means, µ̂j , can be thought of as an estimate of the underlying pdf,
p(µ̂), of the estimator µ̂ which we know is a Normal pdf centered at µ = 0.05
                   0.10
with SE(µ̂i ) = √    50
                        = 0.01414. Notice that the center of the histogram is
very close to the true mean value µ = 0.05. That is, on average over the
1.3 STATISTICAL PROPERTIES OF ESTIMATES                                            23



                      0.3
                      0.2
                      0.1
            returns
                      0.0
                      -0.1
                      -0.2




                             0   10         20      30        40    50




Figure 1.8: Ten simulated samples of size T = 50 from the CER model
Rt = 0.05 + εt , εt ~iid N(0.(0.10)2 )

1000 Monte Carlo samples the value of µ̂ is about 0.05. In some samples,
the estimate is too big and in some samples the estimate is too small but on
average the estimate is correct. In fact, the average value of {µ̂1 , . . . , µ̂1000 }
from the 1000 simulated samples is

                                       1 X j
                                           1000
                                               µ̂ = 0.05045
                                      1000 j=1

which is very close to the true value. If the number of simulated samples is
allowed to go to infinity then the sample average of µ̂j will be exactly equal
to µ :
                                    1 X j
                                       N
                               lim        µ̂ = µ
                              N→∞ N
                                      j=1

   The typical size of the spread about the center of the histogram represents
SE(µ̂i ) and gives an indication of the precision of µ̂i .The value of SE(µ̂i ) may
be approximated by computing the sample standard deviation of the 1000
24CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL




             250
             200
             150
             100
             50
             0




                   0.0       0.02     0.04            0.06   0.08   0.10
                                        Estimate of mean




Figure 1.9: Histogram of 1000 values of µ̂ from Monte Carlo simulation of
CER model.

µ̂j values               v
                         u
                         u 1 X 1000
                         t          (µ̂j − 0.05045)2 = 0.01383
                           999 j=1
                                                   0.10
Notice that this value is very close to SE(µ̂i ) = √ 50
                                                        = 0.01414. If the number
of simulated sample goes to infinity then
                      v
                      u
                      u 1 X       N
                                          1 X j 2
                                               N
                 lim  t                j
                                    (µ̂ −         µ̂ ) = SE(µ̂i )
                N →∞     N − 1 j=1        N j=1


The Sampling Distribution of µ̂i
                                                                              σ2
Using the results that pdf of µ̂i is normal with E[µ̂i ] = µi and var(µ̂i ) = Ti
we may write                           µ         ¶
                                            σ 2i
                            µ̂i ∼ N µi ,           .                       (1.16)
                                            T
1.3 STATISTICAL PROPERTIES OF ESTIMATES                                          25



                 2.5


                                                                  pdf T=1
                                                                  pdf T=10
                                                                  pdf T=50
                 2.0
                 1.5
           pdf
                 1.0
                 0.5
                 0.0




                       -3    -2     -1         0          1   2              3
                                         estimate value




                 Figure 1.10: N (0, √1T ) density for T = 1, 10 and 50.




The distribution for µ̂i is centered at the true value µi and the spread about
the average depends on the magnitude of σ 2i , the variability of Rit , and the
sample size. For a fixed sample size, T , the uncertainty in µ̂i is larger for
larger values of σ 2i . Notice that the variance of µ̂i is inversely related to
the sample size T. Given σ 2i , var(µ̂i ) is smaller for larger sample sizes than
for smaller sample sizes. This makes sense since we expect to have a more
precise estimator when we have more data. If the sample size is very large (as
T → ∞) then var(µ̂i ) will be approximately zero and the normal distribution
of µ̂i given by (1.16) will be essentially a spike at µi . In other words, if the
sample size is very large then we essentially know the true value of µi . In the
statistics language we say that µ̂i is a consistent estimator of µi .

    The distribution of µ̂i , with µi = 0 and σ 2i = 1 for various sample sizes is
illustrated in figure 1.10. Notice how fast the distribution collapses at µi = 0
as T increases. .
26CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

Confidence intervals for µi
The precision of µ̂i is best communicated by computing a confidence interval
for the unknown value of µi . A confidence interval is an interval estimate of
µi such that we can put an explicit probability statement about the likeli-
hood that the confidence interval covers µi . The construction of a confidence
interval for µi is based on the following statistical result (see the appendix
for details).
    Result: Let Ri1 , . . . , RiT denote a random sample from the CER model.
Then
                                   µ̂i − µi
                                            ∼ tT −1 ,
                                    c i)
                                   SE(µ̂
where tT −1 denotes a Student-t random variable with T − 1 degrees of free-
dom.
    The above result states that the standardized value of µ̂i has a Student-t
distribution with T −1 degrees of freedom6 . To compute a (1 −α)· 100% con-
fidence interval for µi we use (??) and the quantile (critical value) tT −1 (α/2)
to give         Ã                                       !
                                  µ̂i − µi
             Pr −tT −1 (α/2) ≤             ≤ tT −1 (α/2) = 1 − α,
                                   c i)
                                  SE(µ̂
which can be rearranged as
        ³                                                     ´
                             c i ) ≤ µi ≤ µ̂i + tT −1 · SE(µ̂
      Pr µ̂i − tT −1 (α/2) · SE(µ̂                      c i ) = 0.95.

Hence, the interval
                       c i ), µ̂i + tT −1 · SE(µ̂
  [µ̂i − tT −1 (α/2) · SE(µ̂                c i )] = µ̂i ± tT −1 (α/2) · SE(µ̂
                                                                         c i)

covers the true unknown value of µi with probability 1 − α.
     For example, suppose we want to compute 95% confidence intervals for
µi . In this case α = 0.05 and 1 − α = 0.95. Suppose further that T − 1 = 60
(five years of monthly return data) so that tT −1 (α/2) = t60 (0.025) = 2 and
t60 (0.005) = . Then the 95% confidence for µi is given by

                                            c i ).
                                  µ̂i ± 2 · SE(µ̂                                (1.17)
   6                                                                      d i ) is equal
    This resut follows from the fact that µ̂i is normally distributed and SE(µ̂
to the square root of a chi-square random variable divided by its degrees of freedom.
1.3 STATISTICAL PROPERTIES OF ESTIMATES                                          27

The above formula for a 95% confidence interval is often used as a rule of
thumb for computing an approximate 95% confidence interval for moderate
sample sizes. It is easy to remember and does not require the computation
of quantile tT −1 (α/2) from the Student-t distribution.


Example 13 Consider computing approximate 95% confidence intervals for
µi using (1.17) based on the estimated results for the Microsoft, Starbucks
and S&P 500 data. These confidence intervals are

             M SF T : 0.02756 ± 2 · 0.01068 = [0.0062, 0.0489]
             SBU X : 0.02777 ± 2 · 0.01359 = [0.0006, 0.0549]
             SP 500 : 0.01253 ± 2 · 0.003785 = [0.0050, 0.0201]

With probability .95, the above intervals will contain the true mean values
assuming the CER model is valid. The approximate 95% confidence inter-
vals for MSFT and SBUX are fairly wide. The widths are almost 5% with
lower limits near 0 and upper limits near 5%. In contrast, the 95% con-
fidence interval for SP500 is about half the width of the MSFT or SBUX
confidence interval. The lower limit is near .5% and the upper limit is near
2%. This clearly shows that the mean return for SP500 is estimated much
more precisely than the mean return for MSFT or SBUX.


1.3.2     Statistical properties of the method of moments
          estimators of σ 2i , σ i, σ ij and ρij .
To determine the statistical properties of σ̂ 2i and σ̂ 2i we need to treat them
as a functions of the random sample Ri1 , . . . , RiT :

                                                  1 X
                                                          T
               σ̂ 2i =  σ̂ 2i (Ri1 , . . . RiT ) =             (Rit − µ̂i )2 ,
                                                T − 1 t=1
                                                q
                σ̂ i = σ̂ i (Ri1 , . . . RiT ) = σ̂ 2i (Ri1 , . . . RiT ).

Note also that µ̂i is to be treated as a random variable. Similarly, to de-
termine the statistical properties of σ̂ ij and ρ̂ij we need to treat them as a
28CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

functions of Ri1 , . . . , RiT and Ri1 , . . . , RjT :

                                                               1 X
                                                                    T
  σ̂ ij = σ̂ ij (Ri1 , . . . , RiT ; Rj1 , . . . , RjT ) =             (Rit − µ̂i )(Rjt − µ̂j ),
                                                             T − 1 t=1
                                                              σ̂ ij (Ri1 , . . . , RiT ; Rj1 , . . . , RjT )
  ρ̂ij = σ̂ ij (Ri1 , . . . , RiT ; Rj1 , . . . , RjT ) =                                                      .
                                                             σ̂ i (Ri1 , . . . RiT ) · σ̂ j (Rj1 , . . . RjT )

Bias
Assuming that returns are generated by the CER model (1.1), the sample
variances and covariances are unbiased estimators,

                                            E[σ̂ 2i ] = σ 2i ,
                                            E[σ̂ ij ] = σ ij ,

but the sample standard deviations and correlations are biased estimators,

                                            E[σ̂ i ] 6= σ i ,
                                            E[ρ̂ij ] 6= ρij .

The proofs of these results are beyond the scope of this book. However, they
may be easily be evaluated using Monte Carlo methods.

Precision
The derivations of the variances of σ̂ 2i , σ̂ i , σ̂ ij and ρ̂ij are complicated and the
exact results are extremely messy and hard to work with. However, there are
simple approximate formulas for the variances of σ̂ 2i , σ̂ i and ρ̂ij that are valid
if the sample size, T, is reasonably large 7 . These large sample approximate
formulas are given by
                                                     σ2
                                      SE(σ̂ 2i ) ≈ p i ,                                                 (1.18)
                                                      T /2
                                                    σi
                                      SE(σ̂ i ) ≈ √ ,                                                    (1.19)
                                                     2T
                                                   (1 − ρ2ij )
                                      SE(ρij ) ≈      √        ,                                         (1.20)
                                                        T
   7
    The large sample approximate formula for the variance of σ̂ ij is too messy to work
with so we omit it here.
1.3 STATISTICAL PROPERTIES OF ESTIMATES                                            29

where “≈” denotes approximately equal. The approximations are such that
the approximation error goes to zero as the sample size T gets very large.
As with the formula for the standard error of the sample mean, the formulas
for the standard errors above are inversely related to the square root of the
sample size. Interestingly, SE(σ̂ i ) goes to zero the fastest and SE(σ̂ 2i ) goes to
zero the slowest. Hence, for a fixed sample size, it appears that σ i is generally
estimated more precisely than σ 2i and ρij , and ρij is estimated generally more
precisely than σ 2i .
    The above formulas are not practically useful, however, because they
depend on the unknown quantities σ 2i , σ i and ρij . Practically useful formulas
replace σ 2i , σ i and ρij by the estimates σ̂ 2i , σ̂ i and ρ̂ij and give rise to the
estimated standard errors
                                            2
                               c 2i ) ≈ pσ̂ i ,
                              SE(σ̂                                            (1.21)
                                           T /2
                               c i ) ≈ √σ̂ i ,
                              SE(σ̂                                            (1.22)
                                          2T
                                        (1 − ρ̂2ij )
                              c ij ) ≈
                              SE(ρ         √         .                         (1.23)
                                              T
Example 14 To be completed

Sampling distribution
To be completed

Confidence Intervals for σ 2i , σ i and ρij
Approximate 95% confidence intervals for σ 2i , σ i and ρij are give by
                                                            2
                                  c 2i ) = σ̂ 2i ± 2 · pσ̂ i ,
                      σ̂ 2i ± 2 · SE(σ̂
                                                         T /2
                                   c i ) = σ̂ i ± 2 · √σ̂ i
                       σ̂ i ± 2 · SE(σ̂
                                                        2T
                                                       (1 − ρ̂2 )
                                  c ij ) = ρ̂ij ± 2 · √ ij
                     ρ̂ij ± 2 · SE(ρ̂
                                                              T
Example 15 To be completed
30CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL




                                                                             200
              200




                                                                             150
              150




                                                                             100
              100




                                                                             50
              50
              0




                                                                             0
                    0.004   0.006   0.008   0.010   0.012    0.014   0.016         0.08             0.10               0.12

                                      Estimate of variance                                Estimate of std. deviation




Figure 1.11: Histograms of σ̂ 2 and σ̂ computed from N = 1000 Monte Carlo
samples from CER model.




Evaluating the Statistical Properties of σ̂ 2i , σ̂ i , σ̂ ij and ρ̂ij by Monte
Carlo simulation




We may evaluate the statistical properties of σ̂ 2i , σ̂ i , σ̂ ij and ρ̂ij by Monte
Carlo simulation in the same way that we evaluated the statistical properties
of µ̂i . Consider first the variability estimates σ̂ 2i and σ̂ i . We use the simulation
model (1.15) and N = 1000 simulated samples of size T = 50 to compute the
             ¡ ¢1         ¡ ¢1000
estimates { σ̂ 2 , . . . , σ̂ 2   } and {σ̂ 1 , . . . , σ̂ 1000 }. The histograms of these
values are displayed in figure 1.11.The histogram for the σ̂ 2 values is bell-
shaped and slightly right skewed but is centered very close to 0.010 = σ 2 . The
histogram for the σ̂ values is more symmetric and is centered near 0.10 = σ.
1.4 FURTHER READING                                                      31

The average values of σ 2 and σ from the 1000 simulations are


                           1 X 2
                                 1000
                                   σ̂ = 0.009952
                          1000 j=1

                            1 X
                                  1000
                                    σ̂ = 0.09928
                           1000 j=1



   The sample standard deviation values of the Monte Carlo estimates of σ 2
and σ give approximations to SE(σ̂ 2 ) and SE(σ̂). Using the formulas (1.18)
and (1.19) these values are


                             2    (0.10)2
                        SE(σ̂ ) = p        = 0.002
                                    50/2
                                   0.10
                         SE(σ̂) = √        = 0.010
                                    2 · 50




1.4     Further Reading

To be completed




1.5     Appendix

1.5.1     Proofs of Some Technical Results

Result: E[µ̂i ] = µi
32CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL
                                                   PT
  Proof. Using the fact that µ̂i = T −1               t=1 Rit and Rit = µi + εit we have
                  "           #
                    1X
                       T
      E[µ̂i ] = E         Rit
                    T t=1
                  "                 #
                    1X
                       T
              = E         (µ + εit )
                    T t=1 i

                1X
                   T
                         1X
                           T
              =      µ +      E[εit ] (by the linearity of E[·])
                T t=1 i T t=1

                1X
                        T
              =      µ (since E[εit ] = 0, t = 1, . . . , T )
                T t=1 i
                 1
              =      T · µi
                 T
              = µi .

                            σ2
 Result: var(µi ) = Ti .
                                        P
 Proof. Using the fact that µ̂i = T −1 Tt=1 Rit and Rit = µi + εit we have
                 Ã           !
                   1X
                      T
 var(µ̂i ) = var         Rit
                   T t=1
                 Ã                  !
                   1 XT
           = var         (µ + εit )   (in the CER model Rit = µi + εit )
                   T t=1 i
                 Ã           !
                   1X
                      T
           = var         εit   (since µi is a constant)
                   T t=1

            1 X
                  T
          = 2    var(εit ) (since εit is independent over time)
           T t=1

            1 X 2
                  T
          = 2   σ                (since var(εit ) = σ 2i , t = 1, . . . , T )
           T t=1 i
            1
          =  2
               T σ 2i
           T
           σ2
          = i.
            T
1.5 APPENDIX                                                                              33

1.5.2        Some Special Probability Distributions Used in
             Statistical Inference
The Chi-Square distribution with T degrees of freedom
Let Z1 , Z2 , . . . , ZT be independent standard normal random variables. That
is,
                           Zi ∼ i.i.d. N(0, 1), i = 1, . . . , T.
Define a new random variable X such that
                                                         T
                                                         X
                           X = Z12 + Z22 + · · · ZT2 =         Zi2 .
                                                         i=1

Then X is a chi-square random variable with T degrees of freedom. Such a
random variable is often denoted χ2T and we use the notation X ∼ χ2T . The
pdf of X is illustrated in Figure xxx for various values of T. Notice that X
is only allowed to take non-negative values. The pdf is highly right skewed
for small values of T and becomes symmetric as T gets large. Furthermore,
it can be shown that
                                  E[X] = T.
    The chi-square distribution is used often in statistical inference and prob-
abilities associated with chi-square random variables are needed. Critical
values, which are just quantiles of the chi-square distribution, are used in
typical calculations. To illustrate, suppose we wish to find the critical value
of the chi-square distribution with T degrees of freedom such that the prob-
ability to the right of the critical value is α. Let χ2T (α) denote this critical
value8 . Then
                             Pr(X > χ2T (α)) = α.
For example, if T = 5 and α = 0.05 then χ25 (0.05) = 11.07; if T = 100 then
χ2100 (0.05) = 124.34.

1.5.3        Student’s t distribution with T degrees of free-
             dom
Let Z be a standard normal random variable, Z ∼ N(0, 1), and let X be
a chi-square random variable with T degrees of freedom, X ∼ χ2T . Assume
  8
      Excel has functions for computing probabilities from the chi-square distribution.
34CHAPTER 1 THE CONSTANT EXPECTED RETURN MODEL

that Z and X are independent. Define a new random variable t such that
                                      Z
                                t= p      .
                                      X/T

Then t is a Student’s t random variable with T degrees of freedom and we
use the notation t ∼ tT to indicate that t is distributed Student-t. Figure
xxx shows the pdf of t for various values of the degrees of freedom T. Notice
that the pdf is symmetric about zero and has a bell shape like the normal.
The tail thickness of the pdf is determined by the degrees of freedom. For
small values of T , the tails are quite spread out and are thicker than the
tails of the normal. As T gets large the tails shrink and become close to the
normal. In fact, as T → ∞ the pdf of the Student t converges to the pdf of
the normal.
    The Student-t distribution is used heavily in statistical inference and
critical values from the distribution are often needed. Let tT (α) denote the
critical value such that
                              Pr(t > tT (α)) = α.
For example, if T = 10 and α = 0.025 then t10 (0.025) = 2.228; if T = 100
then t60 (0.025) = 2.00. Since the Student-t distribution is symmetric about
zero, we have that

                     Pr(−tT (α) ≤ t ≤ tT (α)) = 1 − 2α.

For example, if T = 60 and α = 2 then t60 (0.025) = 2 and

 Pr(−t60 (0.025) ≤ t ≤ t60 (0.025)) = Pr(−2 ≤ t ≤ 2) = 1 − 2(0.025) = 0.95.


1.6     Problems
To be completed
Bibliography

[1] Campbell, Lo and MacKinley (1998). The Econometrics of Financial
    Markets, Princeton University Press, Princeton, NJ.




                                35



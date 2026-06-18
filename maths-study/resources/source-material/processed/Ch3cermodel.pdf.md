---
normalized_id: shared-pdf-reference-ch3cermodel
exam_code: SHARED
material_scope: ch3cermodel.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Ch3cermodel.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-ch3cermodel

    Introduction to Financial Econometrics
Chapter 3 The Constant Expected Return Model
                                      Eric Zivot
                               Department of Economics
                               University of Washington
                                   January 6, 2000
                            This version: January 23, 2001


1      The Constant Expected Return Model of Asset
       Returns
1.1      Assumptions

Let Rit denote the continuously compounded return on an asset i at time t. We
make the following assumptions regarding the probability distribution of Rit for i =
1, . . . , N assets over the time horizon t = 1, . . . , T.

    1. Normality of returns: Rit ∼ N (µi , σ 2i ) for i = 1, . . . , N and t = 1, . . . , T.
    2. Constant variances and covariances: cov(Rit , Rjt ) = σ ij for i = 1, . . . , N and
       t = 1, . . . , T.
    3. No serial correlation across assets over time: cov(Rit , Rjs ) = 0 for t 6= s and
       i, j = 1, . . . , N.

    Assumption 1 states that in every time period asset returns are normally dis-
tributed and that the mean and the variance of each asset return is constant over
time. In particular, we have for each asset i

                                E[Rit ] = µi for all values of t
                              var(Rit ) = σ 2i for all values of t

The second assumption states that the contemporaneous covariances between assets
are constant over time. Given assumption 1, assumption 2 implies that the contem-
poraneous correlations between assets are constant over time as well. That is, for all

                                                 1
assets
                           corr(Rit , Rjt ) = ρij for all values of t.
The third assumption stipulates that all of the asset returns are uncorrelated over
time1 . In particular, for a given asset i the returns on the asset are serially uncorre-
lated which implies that

                      corr(Rit , Ris ) = cov(Rit , Ris ) = 0 for all t 6= s.

Additionally, the returns on all possible pairs of assets i and j are serially uncorrelated
which implies that

                corr(Rit , Rjs ) = cov(Rit , Rjs ) = 0 for all i 6= j and t 6= s.

    Assumptions 1-3 indicate that all asset returns at a given point in time are jointly
(multivariate) normally distributed and that this joint distribution stays constant
over time. Clearly these are very strong assumptions. However, they allow us to de-
velopment a straightforward probabilistic model for asset returns as well as statistical
tools for estimating the parameters of the model and testing hypotheses about the
parameter values and assumptions.

1.2      Constant Expected Return Model Representation
A convenient mathematical representation or model of asset returns can be given
based on assumptions 1-3. This is the constant expected return (CER) model. For
assets i = 1, . . . , N and time periods t = 1, . . . , T the CER model is represented as

                                         Rit = µi + εit                                         (1)
                                         εit ∼ i.i.d. N(0, σ 2i )
                               cov(εit , εjt ) = σ ij                                           (2)

where µi is a constant and we assume that εit is independent of εjs for all time periods
t 6= s. The notation εit ∼ i.i.d. N (0, σ 2i ) stipulates that the random variable εit is
serially independent and identically distributed as a normal random variable with
mean zero and variance σ 2i . In particular, note that, E[εit ] = 0, var(εit ) = σ 2i and
cov(εit , εjs ) = 0 for i 6= j and t 6= s.
    Using the basic properties of expectation, variance and covariance discussed in
chapter 2, we can derive the following properties of returns. For expected returns we
have

                           E[Rit ] = E[µi + εit ] = µi + E[εit ] = µi ,
   1
    Since all assets are assumed to be normally distributed (assumption 1), uncorrelatedness implies
the stronger condition of independence.


                                                 2
since µi is constant and E[εit ] = 0. Regarding the variance of returns, we have

                        var(Rit ) = var(µi + εit ) = var(εit ) = σ 2i

which uses the fact that the variance of a constant (µi ) is zero. For covariances of
returns, we have

               cov(Rit , Rjt ) = cov(µi + εit , µj + εjt ) = cov(εit , εjt ) = σ ij

and
           cov(Rit , Rjs ) = cov(µi + εit , µj + εjs ) = cov(εit , εjs ) = 0, t 6= s,
 which use the fact that adding constants to two random variables does not aﬀect
the covariance between them. Given that covariances and variances of returns are
constant over time gives the result that correlations between returns over time are
also constant:
                                cov(Rit , Rjt )      σ ij
           corr(Rit , Rjt ) = q                   =       = ρij ,
                               var(Rit )var(Rjt )   σiσj
                                cov(Rit , Rjs )      0
           corr(Rit , Rjs ) = q                   =      = 0, i 6= j, t 6= s.
                               var(Rit )var(Rjs )   σiσj

Finally, since the random variable εit is independent and identically distributed (i.i.d.)
normal the asset return Rit will also be i.i.d. normal:

                                   Rit ∼ i.i.d. N (µi , σ 2i ).

Hence, the CER model (1) for Rit is equivalent to the model implied by assumptions
1-3.

1.3    Interpretation of the CER Model
The CER model has a very simple form and is identical to the measurement error
model in the statistics literature. In words, the model states that each asset return
is equal to a constant µi (the expected return) plus a normally distributed random
variable εit with mean zero and constant variance. The random variable εit can be
interpreted as representing the unexpected news concerning the value of the asset
that arrives between times t − 1 and time t. To see this, note that using (1) we can
write εit as

                                    εit = Rit − µi
                                        = Rit − E[Rit ]

so that εit is de&ned to be the deviation of the random return from its expected value.
If the news is good, then the realized value of εit is positive and the observed return is

                                                3
above its expected value µi . If the news is bad, then εjt is negative and the observed
return is less than expected. The assumption that E[εit ] = 0 means that news, on
average, is neutral; neither good nor bad. The assumption that var(εit ) = σ 2i can be
interpreted as saying that volatility of news arrival is constant over time. The random
news variable aﬀecting asset i, eit , is allowed to be contemporaneously correlated with
the random news variable aﬀecting asset j, εjt , to capture the idea that news about
one asset may spill over and aﬀect another asset. For example, let asset i be Microsoft
and asset j be Apple Computer. Then one interpretation of news in this context is
general news about the computer industry and technology. Good news should lead
to positive values of εit and εjt . Hence these variables will be positively correlated.
    The CER model with continuously compounded returns has the following nice
property with respect to the interpretation of εit as news. Consider the default case
where Rit is interpreted as the continuously compounded monthly return. Since mul-
tiperiod continuously compounded returns are additive we can interpret, for example,
Rit as the sum of 30 daily continuously compounded returns2 :
                                                 29
                                                 X
                                       Rit =          Rdit−k
                                               k=0

where Ritd denotes the continuously compounded daily return on asset i. If we assume
that daily returns are described by the CER model then

                                       Ritd = µdi + εdit ,
                                       εdit ∼ i.i.d N(0, (σ di )2 ),
                            cov(εdit , εdjt ) = σ dij ,
                            cov(εdit , εdjs ) = 0, i 6= j, t 6= s

and the monthly return may then be expressed as
                                           29
                                           X
                                 Rit =          (µdi + εdit−k )
                                           k=0
                                                         29
                                                         X
                                       = 30 · µdi +               εdit−k
                                                         k=0
                                       = µi + εit ,

where

                                       µi = 30 · µdi ,
                                                 29
                                                 X
                                      εit =            εdit−k .
                                                 k=0
  2
   For simplicity of exposition, we will ignore the fact that some assets do not trade over the
weekend.

                                                 4
Hence, the monthly expected return, µi , is simply 30 times the daily expected re-
turn. The interpretation of εit in the CER model when returns are continuously
compounded is the accumulation of news between months t − 1 and t. Notice that
                                              Ã 29                              !
                                               X
                         var(Rit ) = var                  (µdi + εdit−k )
                                                   k=0
                                        29
                                        X
                                   =          var(εdit−k )
                                        k=0
                                        X29 ³            ´2
                                   =              σ di
                                        k=0
                                              ³          ´2
                                   = 30 · σ di
and
                                               Ã 29                      29
                                                                                        !
                                                X                        X
                     cov(Rit , Rjt ) = cov                    εdit−k ,         εdjt−k
                                                    k=0                  k=0
                                        29
                                        X
                                    =          cov(εdit−k , εdjt−k )
                                        k=0
                                        X29
                                    =          σ dij
                                        k=0
                                    = 30 · σ dij ,
so that the monthly variance, σ 2i , is equal to 30 times the daily variance and the
monthly covariance, σ ij , is equal to 30 times the daily covariance.

1.4    The CER Model of Asset Returns and the Random Walk
       Model of Asset Prices
The CER model of asset returns (1) gives rise to the so-called random walk (RW)
model of the logarithm of asset prices. To see this, recall that the continuously
compounded return, Rit , is de&ned from asset prices via
                                    Ã          !
                                      Pit
                                  ln                 = Rit .
                                     Pit−1
Since the log of the ratio of prices is equal to the diﬀerence in the logs of prices we
may rewrite the above as
                               ln(Pit ) − ln(Pit−1 ) = Rit .
Letting pit = ln(Pit ) and using the representation of Rit in the CER model (1), we
may further rewrite the above as
                                pit − pit−1 = µi + εit .                                    (3)

                                              5
The representation in (3) is know as the RW model for the log of asset prices.
   In the RW model, µi represents the expected change in the log of asset prices
(continuously compounded return) between months t − 1 and t and εit represents the
unexpected change in prices. That is,
                       E[pit − pit−1 ] = E[Rit ] = µi ,
                                  εit = pit − pit−1 − E[pit − pit−1 ].
Further, in the RW model, the unexpected changes in asset prices, εit , are uncorrelated
over time (cov(εit , εis ) = 0 for t 6= s) so that future changes in asset prices cannot be
predicted from past changes in asset prices3 .
   The RW model gives the following interpretation for the evolution of asset prices.
Let pi0 denote the initial log price of asset i. The RW model says that the price at
time t = 1 is
                                       pi1 = pi0 + µi + εi1
where εi1 is the value of random news that arrives between times 0 and 1. Notice that
at time t = 0 the expected price at time t = 1 is
                            E[pi1 ] = pi0 + µi + E[εi1 ] = pi0 + µi
which is the initial price plus the expected return between time 0 and 1. Similarly,
the price at time t = 2 is
                              pi2 = pi1 + µi + εi2
                                  = pi0 + µi + µi + εi1 + εi2
                                                       2
                                                       X
                                   = pi0 + 2 · µi +           εit
                                                       t=1

which is equal to the initial price, pi0 , plus the two period expected return, 2 · µi , plus
                                                           P
the accumulated random news over the two periods, 2t=1 εit . By recursive substitu-
tion, the price at time t = T is
                                                        T
                                                        X
                                 piT = pi0 + T · µi +          εit .
                                                        t=1

At time t = 0 the expected price at time t = T is
                                    E[piT ] = pi0 + T · µi
The actual price, piT , deviates from the expected price by the accumulated random
news
                                                      T
                                                      X
                                    piT − E[piT ] =         εit .
                                                      t=1
       Figure xxx illustrates the random walk model of asset prices.
   3
    The notion that future changes in asset prices cannot be predicted from past changes in asset
prices is often referred to as the weak form of the eﬃcient markets hypothesis.

                                               6
                                                                     Simulated Random Walk


         12
                           E[p(t)]
                           p(t) - E[p(t)]
                           p(t)
         10


                                                                                      p(t)
         8




         6
                                                                                             E[p(t)]
    pt




         4




         2


                                                                                    p(t) - E[p(t)]

         0




                                                                                                                                               101
              1

                  5

                      9

                          13

                               17

                                    21

                                            25

                                                 29

                                                      33

                                                           37

                                                                41

                                                                     45

                                                                          49

                                                                               53

                                                                                     57

                                                                                          61

                                                                                                 65

                                                                                                       69

                                                                                                            73

                                                                                                                 77

                                                                                                                      81

                                                                                                                           85

                                                                                                                                89

                                                                                                                                     93

                                                                                                                                          97
         -2
                                                                          time, t




    The term random walk was originally used to describe the unpredictable move-
ments of a drunken sailor staggering down the street. The sailor starts at an initial
position, p0 , outside the bar. The sailor generally moves in the direction described
by µ but randomly deviates from this direction after each step t by an amount equal
                                                                      P
to εt . After T steps the sailor ends up at position pT = p0 + µ · T + Tt=1 εt .


2         Monte Carlo Simulation of the CER Model
A good way to understand the probabilistic behavior of a model is to use computer
simulation methods to create pseudo data from the model. The process of creating
such pseudo data is often called Monte Carlo simulation4 . To illustrate the use of
Monte Carlo simulation, consider the problem of creating pseudo return data from
the CER model (1) for one asset. In order to simulate pseudo return data, values for
the model parameters µ and σ must be selected. To mimic the monthly return data
on Microsoft, the values µ = 0.05 and σ = 0.10 are used. Also, the number N of
    4
        Monte Carlo referrs to the fameous city in Monaco where gambling is legal.


                                                                          7
simulated data points must be determined. Here, N = 100. Hence, the model to be
simulated is

                                                  Rt = 0.05 + εt , t = 1, . . . , 100
                                                       εt ~iid N (0, (0.10)2 )

The key to simulating data from the above model is to simulate N = 100 observations
of the random news variable εt ~iid N(0, (0.10)2 ). Computer algorithms exist which
can easily create such observations. Let {ε1 , . . . , ε100 } denote the 100 simulated values
of εt . The histogram of these values are given in &gure xxx below


                                                                 Histogram of Simulated Errors

              16.00%



              14.00%



              12.00%



              10.00%
  Frequency




              8.00%



              6.00%



              4.00%



              2.00%



              0.00%
                       -0.241



                                -0.208



                                         -0.175



                                                    -0.142



                                                             -0.109



                                                                      -0.076



                                                                                   -0.043



                                                                                            -0.010



                                                                                                     0.023



                                                                                                             0.056



                                                                                                                     0.089



                                                                                                                             0.122



                                                                                                                                     0.155



                                                                                                                                             0.188



                                                                                                                                                     0.221
                                                                                            e(t)



                                                       1   100                                  P
    The sample averageqof the simulated errors is 100      t=1 εt = −0.004 and the sample
                        1 P 100                     2
standard deviation is 99    t=1 (εt − (−0.004)) = 0.109. These values are very close
to the population values E[εt ] = 0 and SD(εt ) = 0.10, respectively.
    Once the simulated values of εt have been created, the simulated values of Rt are
constructed as Rt = 0.05 + εt , t = 1, . . . , 100. A time plot of the simulated values of
Rt is given in &gure xxx below


                                                                               8
                                                                Monte Carlo Simulation of CER Model
                                                                R(t) = 0.05 + e(t), e(t) ~ iid N(0, (0.10)^2)

             0.400



             0.300



             0.200



             0.100
    Return




             0.000



             -0.100



             -0.200



             -0.300




                                                                                                                                                                                        100
                      1
                          4
                              7
                                  10
                                       13
                                            16
                                                 19
                                                      22
                                                           25
                                                                28
                                                                     31
                                                                          34
                                                                               37
                                                                                    40
                                                                                         43
                                                                                              46
                                                                                                   49
                                                                                                        52
                                                                                                             55
                                                                                                                  58
                                                                                                                       61
                                                                                                                            64
                                                                                                                                 67
                                                                                                                                      70
                                                                                                                                           73
                                                                                                                                                76
                                                                                                                                                     79
                                                                                                                                                          82
                                                                                                                                                               85
                                                                                                                                                                    88
                                                                                                                                                                         91
                                                                                                                                                                              94
                                                                                                                                                                                   97
                                                                                                   time




   The simulated return data ! uctuates randomly about the expected return value
E[Rt ] = µ = 0.05. The typical size of the ! uctuation is approximately equal to
SE(εt ) = 0.10. Notice that the simulated return data looks remarkably like the
actual return data of Microsoft.
   Monte Carlo simulation of a model can be used as a &rst pass reality check of the
model. If simulated data from the model does not look like the data that the model is
supposed to describe then serious doubt is cast on the model. However, if simulated
data looks reasonably close to the data that the model is suppose to describe then
con&dence is instilled on the model.


3              Estimating the CER Model
3.1              The Random Sampling Environment

The CER model of asset returns gives us a rigorous way of interpreting the time
series behavior of asset returns. At the beginning of every month t, Rit is a random


                                                                                    9
variable representing the return to be realized at the end of the month. The CER
model states that Rit ∼ i.i.d. N (µi , σ 2i ). Our best guess for the return at the end of the
month    qis E[Rit ] = µi , our measure of uncertainty about our best guess is captured by
σ i = var(Rit ) and our measure of the direction of linear association between Rit and
Rjt is σ ij = cov(Rit , Rjt ). The CER model assumes that the economic environment
is constant over time so that the normal distribution characterizing monthly returns
is the same every month.
     Our life would be very easy if we knew the exact values of µi , σ 2i and σ ij , the
parameters of the CER model. In actuality, however, we do not know these values
with certainty. A key task in &nancial econometrics is estimating the values of µi , σ 2i
and σ ij from a history of observed data.
     Suppose we observe monthly returns on N diﬀerent assets over the horizon t =
1, . . . , T. Let ri1 , . . . , riT denote the observed history of T monthly returns on asset
i for i = 1, . . . , N. It is assumed that the observed returns are realizations of the
random variables Ri1 , . . . , RiT , where Rit is described by the CER model (1). We
call Ri1 , . . . , RiT a random sample from the CER model (1) and we call ri1 , . . . , riT
the realized values from the random sample. In this case, we can use the observed
returns to estimate the unknown parameters of the CER model

3.2     Estimation Theory
Before we describe the estimation of the CER model, it is useful to summarize some
concepts in estimation theory. Let θ denote some characteristic of the CER model
(1) we are interested in estimating. For example, if we are interested in the expected
return then θ = µi ; if we are interested in the variance of returns then θ = σ 2i . The
goal is to estimate θ based on the observed data ri1 , . . . , riT .
De&nition 1 An estimator of θ is a rule or algorithm for forming an estimate for
θ.
De&nition 2 An estimate of θ is simply the value of an estimator based on the
observed data.
      To establish some notation, let θ̂(Ri1 , . . . , RiT ) denote an estimator of θ treated as
a function of the random variables Ri1 , . . . , RiT . Clearly, θ̂(Ri1 , . . . , RiT ) is a random
variable. Let θ̂(ri1 , . . . , riT ) denote an estimate of θ based on the realized values
ri1 , . . . , riT . θ̂(ri1 , . . . , riT ) is simply an number. We will often use θ̂ as shorthand
notation to represent either an estimator of θ or an estimate of θ. The context will
determine how to interpret θ̂.

3.2.1    Properties of Estimators
Consider θ̂ = θ̂(Ri1 , . . . , RiT ) as a random variable. In general, the pdf of θ̂, p(θ̂),
depends on the pdf s of the random variables Ri1 , . . . , RiT . The exact form of p(θ̂) may

                                               10



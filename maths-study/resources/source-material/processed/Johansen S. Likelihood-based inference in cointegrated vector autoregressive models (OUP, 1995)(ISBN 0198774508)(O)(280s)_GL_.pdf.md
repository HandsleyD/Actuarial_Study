---
normalized_id: shared-pdf-reference-johansen-s-likelihood-based-inference-in-cointegrated-vector-autoregressive-models-oup-1995-isbn-0198774508-o-280s-gl
exam_code: SHARED
material_scope: johansen s. likelihood-based inference in cointegrated vector autoregressive models (oup, 1995)(isbn 0198774508)(o)(280s)_gl_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Johansen S. Likelihood-based inference in cointegrated vector autoregressive models (OUP, 1995)(ISBN 0198774508)(O)(280s)_GL_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-johansen-s-likelihood-based-inference-in-cointegrated-vector-autoregressive-models-oup-1995-isbn-0198774508-o-280s-gl

Advanced Texts in Econometrics

                General Editors
         C.W. J. Granger G. E. Mizon
This page intentionally left blank
Likelihood-Based Inference in Cointegrated Vector
             Autoregressive Models




                     Søren Johansen
                    Great Clarendon Street, Oxford OX2 6DP
    Oxford University Press is a department of the University of Oxford
 It furthers the University's objective of excellence in research, scholarship,
                   and education by publishing worldwide in
                               Oxford New York
            Auckland Bangkok Buenos Aires Cape Town Chennai
         Dar es Salaam Delhi Hong Kong Istanbul Karachi Kolkata
      Kuala Lumpur Madrid Melbourne Mexico City Mumbai Nairobi
                   São Paulo Shanghai Taipei Tokyo Toronto
        Oxford is a registered trade mark of Oxford University Press
                    in the UK and in certain other countries
                        Published in the United States by
                    Oxford University Press Inc., New York
                             © Søren Johansen 1995
              The moral rights of the authors have been asserted
                Database right Oxford University Press (maker)
            Hardback and paperback editions ﬁrst published 1995
     All rights reserved. No part of this publication may be reproduced,
 stored in a retrieval system, or transmitted, in any form or by any means,
     without the prior permission in writing of Oxford University Press,
or as expressly permitted by law, or under terms agreed with the appropriate
    reprographics rights organization. Enquiries concerning reproduction
  outside the scope of the above should be sent to the Rights Department,
                 Oxford University Press, at the address above
       You must not circulate this book in any other binding or cover
          and you must impose this same condition on any acquirer
                British Library Cataloguing in Publication Data
                                 Data available
              Library of Congress Cataloging in Publication Data
                                 Data available
                           ISBN 0-19-877450-8 (Pbk)
                                                    Preface
Throughout the period of preparing this monograph I have had the pleasure of collaborating with Katarina Juselius,
who introduced me to the topic of cointegration by asking me to give some lectures on the basic paper by Clive
Granger (1983). Since then we have worked on developing the theory in close contact with the applications, and the
results we have obtained have been driven by the need to understand the variation of economic data. Thus the theory
has been forced upon us by the applications, and the theory has suggested new questions that could be asked in
practice. I feel fortunate in having had the opportunity for this type of collaboration, and would like to use this
opportunity to thank Katarina for being so inspiring.
The monograph is on the mathematical statistical analysis of models that have turned out to be helpful in the analysis
of economic data. I have used two economic examples that have been analysed in the literature, so that the statistical
concepts can be illustrated by some economic concepts, but the main emphasis is on the statistical analysis. If the
reader is more interested in the applications of the techniques, I must refer to the many publications on the modelling
of economic data using cointegration that have been published.
It is my hope that there is still room for a thorough exposition of the details of this theory even if the method has
already found its way into textbooks in econometrics, see for instance Reinsel (1991), Banerjee et al. (1993), Hamilton
(1994), and Lütkepohl (1991). There are a number of collections of papers that deal almost exclusively with
cointegration, see Engle and Granger (1991), and special issues of Oxford Bulletin of Economics and Statistics (1990, 1992)
and Journal of Policy Modelling (1993).
The monograph does not cover all aspects of cointegration but it is my hope that by studying some topics in detail one
can understand the further developments. Thus I have left out the important work by Phillips (1991), Park (1992),
Stock (1987) Stock and Watson (1988, 1993) to mention a few. These papers deal with cointegration from a different
perspective which one can summarize as cointegrating regressions, that is, they study how the usual regression
estimator can be improved in view of the underlying stochastic model. Phillips (1991) also gives a statistical theory for
a semi-parametric model for cointegration, but the approach taken here is entirely parametric.
In 1989 we were invited by Domenico Sartore to present the theory and application of cointegration at a summer
school in Bagni di Lucca organized by Centro Interuniversitario di Econometria.
vi                                                      Preface


I would like to thank Domenico Sartore for inviting us, thereby creating the need for the preparation of lecture notes,
Johansen (1989). Since then the theory has expanded and the notes have been used for teaching in Copenhagen at an
advanced course in mathematical statistics in the Institute of Mathematical Statistics, as well as an advanced course on
econometrics at the Economics Institute. We usually managed to go through Part I, that is, Chapters 1–9 in a course of
two to four lectures plus two hours of exercises per week for ﬁfteen weeks. The rest of the material, that is, the
asymptotic theory would require a similar amount of time. A good background in statistics is recommended, although
strictly speaking what is being used in the ﬁrst part of the monograph is only the idea of analysing the likelihood
function and a few mathematical techniques, which are explained in some detail. The second part requires some
familiarity with probability theory and the theory of weak convergence. The program CATS in RATS was developed
by Henrik Hansen in collaboration with Katarina Juselius and myself at the same time as the book was in preparation
and the program is a great help in analysing economic data. The calculations in this book are performed using this
package.
Many have helped me with the notes at various stages. They were originally written in T3 and later translated into
Scientiﬁc Word, and I would like to thank Vivi Arp for helping me with this task, and Jurgen Doornik for an excellent
ﬁle T3TEXTEX, which saves a lot of work in the translation.
I would also like to thank my many students for reading the various versions of the notes and listening and
commenting carefully.
In particular I would like to thank Henrik Hansen, Bent Nielsen, Lene Pedersen, Anders Rahbek, Peter Reinhard
Hansen, and Dennis Nilsson. Bent Nielsen performed the simulations, Henrik Hansen helped with the layout of the
tables in Chapter 14, and Peter Reinhard Hansen helped me with the graphs. Dennis Nilsson read the entire
manuscript very carefully and found numerous unfortunate formulations and many misprints.
Peter Boswijk and David Hendry have given me many very useful comments that have led to improvements in the
presentation.
During the period of time in which the notes have been prepared I have enjoyed continual support from the Danish
Social Science Research Foundation, which has made it possible for me to travel and discuss the ideas with many
econometricians.
                                                                                                                   S. J.
                                                                                                             Copenhagen
                                                                                                              June 1995
                          Preface to Second Printing

Many misprints have been found and I would like to thank Peter Boswijk, Peter Reinhard Hansen, Katarina Juselius,
Hans Christian Kongsted, Paolo Paruolo, Anders Rahbek and my students in Copenhagen for carefully reading the
book and communicating the misprints and some improvements to the formulations.
                                                                                                             S. J.
                                                                                                       Copenhagen
                                                                                                       June 1996
viii                                                   Preface


Models are, for the most part, caricatures of reality, but if they are good, then, like good caricatures, they portray,
though perhaps in a distorted manner, some of the features of the real world. The main role of models is not so much
to explain and to predict– though ultimately these are the main functions of science– as to polarize thinking and to
pose sharp questions.
Mark Kac, Some mathematical models in science.
                                              Contents
PART I THE STATISTICAL ANALYSIS OF COINTEGRATION
  1 Introduction                                                3
      1.1 The vector autoregressive model                       4
      1.2 Building statistical models                           5
      1.3 Illustrative examples                                 7
      1.4 An outline of the contents                            8
      1.5 Some further problems                                10
  2 The Vector Autoregressive Model                            11
      2.1The vector autoregressive process                     11
      2.2 The statistical analysis of the VAR                  17
      2.3 Misspeciﬁcation tests                                20
      2.4 The illustrative examples                            23
  3 Basic Deﬁnitions and Concepts                              34
      3.1 Cointegration and common trends                      34
      3.2 Exercises                                            42
  4 Cointegration and Representation of Integrated Variables   45
      4.1 From AR to MA representation for I(1) variables      45
      4.2 From MA to AR representation for I(1) variables      55
      4.3 The MA representation of I(2) variables              57
      4.4 Exercises                                            62
  5 The I(1) Models and their Interpretation                   70
      5.1 The I(1) models for cointegration                    70
      5.2 The parametrization of the I(1) model                71
      5.3 Hypotheses on the long-run coefﬁcients β             72
      5.4 Hypotheses on the adjustment coefﬁcients α           77
      5.5 The structural error correction model                78
      5.6 General hypotheses                                   79
      5.7 Models for deterministic terms                       80
x                                                 Contents


     5.8 Intervention and seasonal dummies                             84
     5.9 Exercises                                                     85
  6 The Statistical Analysis of I(1) Models                            89
     6.1 Likelihood analysis of H(r)                                   89
     6.2 Models for the deterministic terms                            95
     6.3 Determination of cointegrating rank                           98
     6.4 Exercises                                                    100
  7 Hypothesis Testing for the Long-Run Coefﬁcients β                 104
     7.1 Degrees of freedom                                           104
     7.2 Linear restrictions on β                                     106
     7.3 Illustrative examples                                        112
     7.4 Exercises                                                    120
  8 Partial Systems and Hypotheses on α                               121
     8.1 Partial systems                                              121
     8.2 Test of restrictions on α                                    124
     8.3 The duality between and                                      128
     8.4 Exercises                                                    131
  9 The I(2) Model and a Test for I(2)                                132
     9.1 A statistical model for I(2)                                 132
     9.2 A misspeciﬁcation test for the presence of I(2)              134
     9.3 A test for I(2) in the Australian data                       137
PART II THE PROBABILITY ANALYSIS OF COINTEGRATION
  10 Probability Properties of I(1) Processes                         141
     10.1 Finite sample results                                       141
     10.2 Asymptotic results                                          143
     10.3 Exercises                                                   149
  11 The Asymptotic Distribution of the Test for Cointegrating Rank   151
     11.1 Testing Π = 0 in the basic model                            151
     11.2 The limit distribution of the test for cointegrating rank   156
     11.3 Asymptotic properties of the test for I(2)                  163
     11.4 Exercises                                                   164
                                                  Contents                             xi


  12 Determination of Cointegrating Rank                                              167
     12.1 Model without constant term                                                 168
     12.2 Model with a constant term                                                  170
     12.3 Models with a linear term                                                   175
     12.4 Exercises                                                                   176
  13 Asymptotic Properties of the Estimators                                          177
     13.1 The mixed Gaussian distribution                                             177
     13.2 A convenient normalization of β                                             179
      13.3 Consistency of the estimators                                              180
      13.4 Asymptotic distribution of and                                             181
      13.5 More asymptotic distributions                                              187
      13.6 Likelihood ratio test for hypotheses on the long-run coefﬁcients β         192
      13.7 Exercises                                                                  196
  14 The Power Function of the Test for Cointegrating Rank under Local Alternatives   201
     14.1 Local alternatives                                                          201
     14.2 Properties of the process under local alternatives                          202
     14.3 The local power of the trace test                                           206
     14.4 Exercises                                                                   209
  15 Simulations and Tables                                                           211
     15.1 Simulation of the limit distributions                                       211
     15.2 Simulations of the power function                                           212
     15.3 Tables                                                                      214
PART III APPENDICES
  A Some Mathematical Results                                                         219
      A.1 Eigenvalues and eigenvectors                                                219
      A.2 The binomial formula for matrices                                           228
      A.3 The multivariate Gaussian distribution                                      233
      A.4 Principal components and canonical correlations                             237
  B Weak Convergence of Probability Measures on Rp and C[0,1]                         239
      B.1 Weak convergence on Rp                                                      239
xii                                                            Contents


         B.2 Weak convergence on C[0, 1]                                  241
         B.3 Construction of measures on C[0, 1]                          244
         B.4 Tightness and Prohorov's theorem                             245
         B.5 Construction of Brownian motion                              247
         B.6 Stochastic integrals with respect to Brownian motion         248
         B.7 Some useful results for linear processes                     250
      References                                                          255
      Subject Index                                                       261
      Author Index                                                        266
Part I The Statistical Analysis of Cointegration
This page intentionally left blank
                                            1 Introduction
THIS monograph is concerned with the statistical analysis of multivariate systems of a special class of non-stationary
time series using the concepts of cointegration and common trends in the framework of the autoregressive model with
Gaussian errors. The methodology is to formulate economic hypotheses as parametric restrictions on the Gaussian
vector autoregressive model and analyse these submodels using the likelihood function.
A statistical model is a parametrized family of probability measures. The main emphasis will be put on the analysis of
the statistical model. The reason for this is that by carefully constructing a statistical model where the economic
concepts can be deﬁned precisely, and the hypotheses of interest can be tested, one would hope that the analysis of the
model would lead to relevant methods that have better properties than methods that are suggested on more intuitive
grounds. Although some authors emphasize models and others emphasize methods, the two concepts complement
one another, in the sense that a prime goal of the analysis of a model is to produce a method, and the properties of a
method can only be discussed with some sort of model in the background.
Once the method has been derived by an analysis of a statistical model one can of course use it under all sorts of
different circumstances, provided one can prove that it has reasonable properties under these other circumstances, that
is, under some other probability model. Thus one can think of the statistical model as a method-generating tool, but
my conviction is that it is much more than that, and I hope to demonstrate this claim in the following.
From my experience with economic data I ﬁnd that formulating the interrelations between economic variables as a
system is a useful activity. Certainly the ideal is to have a serious economic theory for the variables actually observed.
Since opinions on what a serious economic theory is seem to diverge, it would be good to have some way of checking
which of two rival economic theories is better. Statistics offers such a possibility using the ideas of hypothesis testing,
and in econometrics this is developed as the concept of encompassing, see Mizon and Richard (1986). Unfortunately
all tests rest on precise assumptions on the underlying statistical model and it is therefore important to have methods
that can check if such assumptions are satisﬁed.
4                                                    Introduction


Thus the methodology is to build a statistical model that describes the ﬂuctuations of the data, and express the
economic theory in terms of the parameters of the statistical model as hypotheses on these parameters or submodels.
Once this has been done an analysis of the models will reveal how the interesting economic parameters can be
estimated, and how the hypotheses of economic interest can be tested.


1.1 The Vector Autoregressive Model
The basic model considered here is a vector autoregressive model (VAR) possibly including constant and linear terms
or seasonal dummies, and with independent Gaussian errors. We formulate the hypothesis of reduced rank, or the
hypothesis of the existence of cointegration vectors, in a simple parametric form which allows the application of the
method of maximum likelihood and likelihood ratio tests. In this way we can derive estimators and test statistics for
the hypothesis of a given number of cointegration vectors, as well as estimators and tests for a number of hypotheses
about the cointegration vectors and their adjustment coefﬁcients.
The VAR model formulation has been applied in econometrics in the last decade, and many of the estimation
problems in the unrestricted VAR have been solved by Sims et al. (1990). The reduced rank regression technique,
which originally was proposed by an analysis of the likelihood function for regression analysis by Anderson (1951) was
applied by Velu and Reinsel (1987) for stationary processes, and by Johansen (1988b) for non-stationary processes. The
corresponding asymptotic theory was given in Johansen (1988b) and was also developed by Ahn and Reinsel (1990)
and Reinsel and Ahn (1992), and the results are generalized by Phillips (1991).
In my opinion the ﬂexibility of the autoregressive formulation allows not only the statistical description of a large
number of real data sets, but it also allows the embedding of interesting economic hypotheses in a general statistical
framework, in which one can deﬁne the concepts of interest and actually prove results about them. In particular we can
deﬁne the notions of integration, cointegration and common trends, see Chapter 3.
Such models do not represent the truth about economic phenomena, but should be considered a useful tool in
describing the statistical variation of the data, such that insight can be gained on the interrelations between economic
variables.
Our experience with analysing macro economic data is that the models quite often provide an adequate ﬁt of the data,
especially after we have been thinking hard about which variables we should include in the analysis. It is an empirical
ﬁnding that we have usually been able to do so with two lags for seasonally unadjusted data.
                                                       Introduction                                                       5


1.2 Building Statistical Models
First of all it must be emphasized that the purpose of constructing a statistical model is not to replace serious
economic models with arbitrary statistical descriptions, but rather to provide a framework in which one can compare
the economic theories with reality, as measured by the data series. It seems that a proper statistical treatment of systems
of economic variables should include the formulation of a statistical model where one can
  •   describe the stochastic variation of the data, such that inferences concerning the various economic questions are
      valid;
  •   deﬁne the economic concepts in terms of the statistical concepts, like long-run relations which become
      cointegrating relations;
  •   formulate the interesting economic theories and questions in terms of the parameters of the model;
  •   derive estimators and test statistics as well as their (asymptotic) distribution such that useful inferences can be
      drawn.
If we have such a statistical model describing a relevant set of economic variables, the ﬁrst task is to check for model
speciﬁcation, to make sure that the ﬁrst point is satisﬁed, or at least not completely false. If it turns out that the model
is a valid description from a statistical point of view, one can proceed to test that the formulated economic theory is
consistent with the data. The reason that this point is important is that often the economic theory is developed for
rather abstract concepts, whereas when it comes to the observations, one has to put up with actual data series that are
not observations of the abstract concepts, but carefully selected proxies. Thus although one's economic theory may be
ﬁne, the data chosen may not illustrate this. Hence a careful statistical analysis helps to support the economic
conclusions.
In the case of cointegration and common trends there are a number of questions that need a statistical formulation and
treatment. First of all, the number of the cointegrating relations or common trends has to be determined and
compared with the number prescribed by the theory. Next, economic hypotheses about the cointegrating relations or
common trends have to be formulated and tested, and here the interpretation of the concepts becomes very
important.
An economic theory is often formulated as a set of behavioural relations or structural equations between the levels of
the variables, possibly allowing for lags as well. If the variables are I(1), that is, non-stationary with stationary
differences, it is convenient to reformulate them in terms of levels and differences, such that if a structural relation is
modelled by a stationary relation then we are led to considering stationary relations between levels, that is, cointegrating
relations.
6                                                      Introduction


It is well known that structural results are difﬁcult to extract from the reduced form equations, but the property of
stationarity and non-stationarity can be deduced from the reduced form since they are basically statistical concepts,
rather than economic notions, see section 5.5.
Thus the reason that cointegration is interesting is that the cointegrating relation captures the economic notion of a
long-run economic relation. And the reason that a statistical theory for the estimation and testing of cointegrating
relations can be constructed rests on the fact that the reduced form sufﬁces for the determination of the basic
cointegrating relations. On the other hand a mindless attempt at ﬁnding cointegrating relations without knowing what
they mean is not going to be fruitful, so I believe that the econometrician has to carefully choose the variables that
should enter the study, and carefully discuss the economic theory that motivates this.
The reason for this discussion of the statistical model is that one often ﬁnds the opinion expressed that the purpose of
a statistical analysis is to ﬁnd the estimates of the parameters that one knows are the interesting ones. What I want to
point out is that the statistical model offers a much richer basis for discussion of the relation between economic theory
and economic reality.
In the above discussion we have focused entirely on statistical models that describe full systems, that is, the joint
stochastic behaviour of all the processes observed. In situations where one has twenty-ﬁve, or even 100, variables, this
may not be feasible, since the interrelations between so many variables are extremely difﬁcult to understand. It is
customary to ﬁx certain variables, which it is felt inﬂuence the main variables without being inﬂuenced by the variables
of main concern. Thus assuming some sort of exogeneity one can construct a partial model. It is obvious that if we do
not specify the stochastic properties of the exogenous variables it is impossible to make statistical inference for the
parameters that we have been estimating. A compromise is to model some variables carefully and some variables less
carefully, that is, one can try to develop methods for the parameters of interest that are valid under a wide range of
assumptions on the exogenous variables.
A main point of view in the development of the likelihood-based theory of cointegration has been to ﬁnd models that
can be handled analytically.
A very general procedure for the analysis of statistical data is to formulate a family of densities {f(x, θ), θ ∈ Θ} for the
data X = x, and then postulate the existence of the maximum likelihood estimator , which is then calculated by some
general optimizing algorithm. The theory of weak convergence of probability measures gives the possibility to make
asymptotic inference.
This general scheme can always be followed but it is worthwhile to pay special attention to situations where models
exist, like the general linear regression model with Gaussian errors, where can be proved to exist, and
                                                     Introduction                                                    7


conditions are known for it to be unique. The algorithms for solving linear equations are well understood, and we even
have the possibility to make exact inference.
In the autoregressive model with Gaussian errors one is immediately led to ordinary regression as the maximum
likelihood estimator of the unrestricted VAR and, as will be shown below, to reduced rank regression for the
cointegrated VAR. We then describe a number of models by parametric restrictions and for each model analyse the
likelihood function to see how the maximum likelihood estimator has to be modiﬁed in view of the imposed
restrictions. The models chosen have the property that reduced rank regression, or some simple modiﬁcation of it, can
be used for the analysis since these models are also models where the existence and uniqueness of the maximum
likelihood estimator can be checked.
One can of course impose all sorts of restrictions on the parameters, for instance different lag lengths in different
equations, non-linear restrictions on the long-run parameters, identities between long-run and short-run parameters,
but it is hard to obtain any exact results for such models.
The models we have chosen to discuss in this book have the property that one can discuss existence and uniqueness of
maximum likelihood estimators and describe algorithms for their calculation. This is not possible for general
hypotheses, but of course general optimization algorithms can be used if the model formulated is very complex. Thus
the models we are discussing are relatively simple, not because all models are but because those are the models for
which we have results. It is my basic conviction that in order to analyse statistical data one has to understand simple
models well.


1.3 Illustrative Examples
As illustrative examples to serve as motivation for the analysis given here we have chosen two sets of data, which
illustrate different types of economic questions. The ﬁrst example is chosen with the purpose of ﬁnding a money
relation expressing a relation between real money, real income, and the cost of holding money as proxied by the
difference between the long and short interest rate. Since multiplicative effects are assumed we use logs of money and
income. Thus the data consist of observations from 1974: 1 to 1987: 3 of log real money (m2), log real income (y) the
bank deposit rate id for interest-bearing deposits, and the bond rate ib which plays an important role in the Danish
economy.
The data are analysed in detail in Johansen and Juselius (1990) and Juselius (1994).
The other example is an investigation of the purchasing power parity and uncovered interest parity between Australia
and the United States. The data were supplied by Tony Hall and analysed in Johansen (1992c) and consist of quarterly
observations for the period 1972: 1 to 1991: 1.
8                                                     Introduction


The variables measured are the consumer price index in logarithms for Australia, pau, the United States, pus, the
exchange rate, exch, measured as the log of the price of US dollars in Australian dollars, and the ﬁve-year treasury bond
rate in both countries iau and ius.
The reason for choosing these examples is that we can illustrate the procedures for ﬁnding cointegrating relations and
formulate simple economic hypotheses in terms of the parameters.
It must be emphasized that a cointegration analysis cannot be the ﬁnal aim of an econometric investigation, but it is
our impression that as an intermediate step a cointegration analysis is a useful tool in the process of gaining
understanding of the relation between data and theory, which should help in building a relevant econometric model.


1.4 An Outline of the Contents
I have chosen to split the book into two parts and two appendices.
Part I consists of the ﬁrst nine chapters, and gives the basic results around Granger's theorem, the model formulation,
and the derivation of estimators and test statistics. We brieﬂy indicate the asymptotic theory for the test statistics and
the estimators.
In Part II, which consists of Chapters 10 to 15, I then give the theory for the asymptotic analysis using the weak
convergence of probability measures. Whereas Part I mainly assumes the Gaussian error distribution in order to work
with the likelihood methods, I relax this assumption in Part II, since the asymptotic analysis is valid under more
general circumstances. One can prove very general results, but I have chosen to assume independent identically
distributed errors with ﬁnite second moments. Then the solution of the autoregressive model is a linear process, and
the theory for such processes is quite simple. I have collected some algebraic and analytic results in Appendix A, and in
Appendix B a brief introduction to weak convergence on C[0, 1] is given. This is by no means a crash course in weak
convergence, but a gentle reminder of some of the basic concepts.
The contents of the chapters are as follows.
In Chapter 2 the statistical analysis of the unrestricted vector autoregressive model is discussed in some detail. These
results are of course classical and can be found in Anderson (1971). For completeness and to establish the notation
they are given here. Chapter 3 gives the deﬁnitions of integrated variables, cointegration and common trends.
Examples are given and it is shown that moving average models in terms of common trends and the autoregressive
error correction model give rise to integrated and cointegrated variables.
In Chapter 4 the representation theorems for integrated variables are given. The basic idea throughout is to give
necessary and sufﬁcient conditions for a process to be I(0), I(1), and I(2) respectively. These conditions,
                                                      Introduction                                                      9


see Theorems 2.3, 4.2, and 4.4, are rather complicated but are necessary for a full understanding of the statistical
models as well as the probability results that follow in later chapters.
In Chapter 5 we spend most of the space on a discussion of what the I(1) model for cointegration can be used for, that
is, which economic hypotheses can be conveniently investigated in the framework described. The question of
identiﬁcation is discussed, and various models described by restrictions on the deterministic terms are considered.
Chapter 6 contains the statistical analysis of the I(1) model, where it is shown that estimation of the unrestricted
cointegrating space can be performed using reduced rank regression, and that the same analysis can be used for
models with restrictions on the deterministic terms. Estimators and likelihood ratio tests are derived and the
asymptotic distribution is given. Finally it is shown how the asymptotic distributions can be applied to determine the
rank of the cointegrating space.
In Chapter 7 hypotheses on β are discussed, and it is shown how to estimate β under various linear restrictions. The
theory is illustrated by some examples. The partial models and hypothesis testing on the adjustment parameters α are
discussed and analysed in Chapter 8. Finally Chapter 9 contains a brief analysis of the I(2) model with the purpose of
deriving a misspeciﬁcation test for the I(1) model.
In Chapter 10 the properties of the process and the sample moments are given and the asymptotic properties of the
test statistic for cointegration rank are given in Chapter 11. Chapter 12 then applies these results to test hypotheses on
the cointegrating rank and to estimate it in case it is not known a priori. In Chapter 13 the asymptotic distribution of
the estimator for the cointegrating vector is shown to be mixed Gaussian. Only the estimator in the unrestricted model
is discussed in detail, but results are also given for the case of identiﬁed vectors. The asymptotic properties of the
estimators for the other parameters are also given and the asymptotic distributions of test statistics for hypotheses on β
are given. In Chapter 14 we derive some results for the power function of the test for cointegrating rank for local
alternatives and in Chapter 15 tables are given of the asymptotic distributions derived in previous chapters. In
Appendix A, I have collected some useful results about eigenvalues and eigenvectors and some general results from
multivariate statistics and regression that are needed in the analysis of the statistical models.
The main emphasis in this monograph is on the derivation of test statistics and estimators, but for the derivation of the
asymptotic properties, knowledge of the Brownian motion is necessary, and Appendix B contains a brief reminder of
the theory of weak convergence and the construction of Brownian motion as given in Billingsley (1968).
10                                                   Introduction


1.5 Some Further Problems
The theory presented in the monograph is the beginning of a systematic investigation of the structure of autoregressive
models for non-stationary processes. Many problems remain open, even in this simple framework.
In my opinion the most important is the development of improved ﬁnite sample approximations to the distributions of
the test statistics, which can supplement the asymptotic results presented here. It is important to develop Bartlett
corrections or Edgeworth expansions, as is known from the theory of stationary processes.
The analysis of models for I(2) processes is mentioned in Chapter 9, but much needs to be worked out in detail, and
the methods need the constant input from applications to make sure that the theory is kept on the right track.
There is one topic that is not mentioned in this monograph, and that is seasonal cointegration. Seasonal cointegration
seems to be a useful concept for the analysis of some time series, and the mathematical and statistical analysis has been
worked out, see Hylleberg, et al. (1990), Lee (1992), and Johansen and Schaumburg (1996). Since seasonal cointegration
can occur at different frequencies and with different ranks and cointegrating vectors, the theory becomes somewhat
more complicated, and I have chosen only to give the basic version of the representation theorem as exercise 4.8.
                  2 The Vector Autoregressive Model
THIS chapter deals with the statistical analysis of the unrestricted vector autoregressive model (VAR) but ﬁrst a result is
given which is a necessary and sufﬁcient condition that the autoregressive process deﬁned by the equations is
stationary. This condition is an important diagnostic tool in the applications of the models and should routinely be
checked in the applications. We ﬁrst formulate a general expression for the solution of the equation deﬁning the
process and then give conditions on the parameters such that the initial values can be chosen such that the process
becomes stationary. In section 2.2 we derive the ordinary least squares estimators as the maximum likelihood
estimators and deal brieﬂy with the asymptotic properties of the estimators in case the process is stationary. This is of
course standard knowledge, see Anderson (1971), but the results are given here in order to contrast them with the
results that are valid for non-stationary processes. Finally in section 2.3 we give a brief description of some
misspeciﬁcation tests for the VAR.


2.1 The Vector Autoregressive Process
Consider the p-dimensional autoregressive process Xt deﬁned by the equations



                                                                                                                      (2.1)
for ﬁxed values of X−k+1, . . . , X0, and independent identically distributed errors ∈t that are Np(0, Ω).
The deterministic terms Dt can contain a constant, a linear term, seasonal dummies, intervention dummies, or other
regressors that we consider ﬁxed and non-stochastic. The results and conditions are conveniently expressed in terms
of the characteristic polynomial:




with determinant |A(z)|.
The ﬁrst result gives the solution Xt of equation (2.1) as a function of the initial values and the ∈ and hence determines
the properties of Xt given
12                                            The Vector Autoregressive Model


its initial values. Note that the result does not impose any conditions on the parameters.
THEOREM 2.1 The solution of equation (2.1) as a function of initial values and ∈ is given by




                                                                                                                               (2.2)
where C0 = I and Cnis deﬁned recursively by




                                                                                                                               (2.3)
The generating function                 is convergent for |z| < δ for some δ > 0. For these values of z it satisﬁes C(z)A(z) = I such
that C(z) = A(z)−1.
PROOF There is no loss of generality in setting Φ = 0, since the result is a purely algebraic result which does not
depend on the nature of the ∈. Consider ﬁrst the case k = 2, where the equations deﬁning Cn give



The equations deﬁning Xt can be written as




If these equations are multiplied by C0, C1, . . . , Ct−1 respectively, and then summed it is seen that the recursive deﬁnition
of Cn implies that Xt−1, Xt−2, . . . , X1 are eliminated and that what remains is




This is a special case (k = 2) of the general result (2.2).
                                           The Vector Autoregressive Model                                              13


The general case is proved as follows. We multiply by Cn in (2.1) with t replaced by t − n and sum from 0 to t − 1




Introducing m = n + i we get




The recursive deﬁnition of Cm shows that Xt−m, m = 1, . . . , t − 1 has the same coefﬁcient on both sides such that Xt−m
cancels. What is left is




Introducing s = m t we ﬁnd




which proves the representation (2.2).
If we deﬁne Π0 = −I, then we can write the recursion for Cn as




where δn0 is zero for n = 1, 2, . . . , and I for n = 0. This implies a relation for the generating functions




Note that the determinant |A(z)| is a polynomial such that it has only ﬁnitely many roots z1, . . . , zp, say. Let δ = mini
|zi| then since A(0) = I it is seen that δ > 0 and A(z)−1 is convergent for |z| < δ.
□
As a simple special case consider k = 1, where the representation (2.2) reduces to



In this case A(z) = I − zΠ1 and                                     .
14                                              The Vector Autoregressive Model


The solution given in Theorem 2.1 is valid for any set of parameters. In the following we show how the parameters
must be restricted in order for equation (2.1) to deﬁne a stationary process. By a stationary process we mean a process
for which the distribution of               is the same as the distribution of                   for any h = 1, 2, . . .
The only stationary processes that we need here are the linear processes generated by i.i.d. errors, as discussed in
Appendix B.
The basic assumption which will be used throughout is
ASSUMPTION 1 The characteristic polynomial satisﬁes the condition that if |A(z)| = 0, then either |z| > 1 or z = 1.
The assumption excludes explosive roots with |z| < 1, and seasonal roots, with |z| = 1, other than z = 1. If z = 1 is a
root we say that the process has a unit root. The following result is well known, see Anderson (1971).
THEOREM 2.2 Under Assumption 1 and if Dtis bounded by a polynomial in t, a necessary and sufﬁcient condition that the initial values
of Xtcan be given a distribution such that the process Xt − E(Xt) becomes stationary, is that |A(1)| ≠ 0. In this case the process has the
representation




                                                                                                                                    (2.4)
where                               is convergent for |z| < 1 + δ for some δ > 0.
PROOF We will give the proof for k = 1 ﬁrst and then apply the usual trick of writing the process in companion form,
that is, consider the process Xt, . . . , Xt−k as an AR(1) process. In case k = 1, where A(z) = I − zΠ1, the roots of |A(z)|
are just the reciprocal of the non-zero eigenvalues of Π1. In this case the solution of equation (2.1) is given by




                                                                                                                                    (2.5)
Since the roots of |A(z)| = |I − zΠ1| are assumed to be outside the unit disk, the eigenvalues of Π1 are all inside the
unit disk, which means that the coefﬁcients    tend to zero exponentially fast, and hence that the linear process




is well deﬁned as a stationary and ergodic process. In order to see this we use Kolmogorov's three series criterion or
Breiman (1992, Corollary 3.22).
                                           The Vector Autoregressive Model                                               15


It follows from these results that since the variance




is ﬁnite, see (A.4), the series deﬁning     is convergent almost surely.
Similarly it is seen that




is convergent for all t by the assumption on Dt. If in (2.5) we choose the initial values as ﬁxed quantities, that is,
condition on the initial values, then clearly the process Xt − E(Xt) is not stationary, although in some sense it is
asymptotically stationary. In order to make the process stationary we need to choose the initial values to have the
invariant distribution which in this case is Gaussian with mean zero and variance given by           . We can also obtain
a representation of the process as expressed by the inﬁnite past, by choosing the initial values to have the
representation given by . Thus the condition on the eigenvalues is not enough to make the process stationary but
enough to make the process stationary for a suitable choice of the initial values. We therefore choose the initial value X0
to have the invariant distribution given by                                      and ﬁnd the representation




such that Xt − E(Xt) is a stationary process. Note that                    is related to the polynomial A(z) = I − zΠ1 by
the relation A(z)C0(z) = I.
Next consider the general case, k > 1, and deﬁne the companion form




such that




We can recover Xt as a function of the initial values X0 and ∈1, . . . , ∈t by multiplying by the matrix (I, 0, . . . , 0).
16                                           The Vector Autoregressive Model


The process            is an AR(1) process with a singular variance matrix for the errors     which by the above result
for k = 1 is stationary if the roots of  are inside the unit disk.
We now want to show that the conditions on the roots of the matrix polynomial A(z) can be converted to a condition
on the non-zero eigenvalues of .
Consider therefore an eigenvector v = (v′1, . . . , v′k)′ for   which satisﬁes the equation        for λ ≠ 0, or




                                                                                                                   (2.6)

Thus vi has the form



Inserting this into (2.6) we ﬁnd that (λ, v1) satisﬁes



or



which shows that λ−1 is a root of |A(z)| = |I − zΠ1 − ⋯ − zkΠk| = 0. This gives a convenient way to calculate the
roots of a matrix polynomial A(z) as the eigenvalues of a square but non-symmetric matrix .
The condition that the roots of A(z) are greater than 1 in modulus implies that the reciprocal values, which are the
eigenvalues of , are all less than 1 in absolute value, hence inside the unit circle. Thus under Assumption 1 and
|A(1)| ≠ 0 we can deﬁne the process




as above and we ﬁnd that               becomes stationary if we choose the initial values                      to have
the distribution of  , and then             .
The representation for Xt is found by premultiplying by (I, 0, . . . , 0) and we ﬁnd




This proves that the condition that A(1) has full rank is sufﬁcient.
To prove that it is necessary assume that A(1) has reduced rank. Since all entries of A(z) − A(1) have a root at z = 1
they can each be factorized into (1 − z) times a polynomial. Hence we can deﬁne a polynomial
                                            The Vector Autoregressive Model                                                17




such that



See Lemma 4.1 for a general formulation of this result. We deﬁne the lag operator L by the property that LXt = Xt − 1,
and the difference operator Δ = 1 − L or Δ Xt = Xt − Xt − 1. In this notation we write equation (2.1) as



                                                                                                                         (2.7)
Now the reduced rank of A(1) implies that there exists a vector ξ ∈ Rp such that ξ′ A(1) = 0 and ξ ≠ 0. Multiplying in
(2.7) by ξ′ and summing over s from 1 to t we ﬁnd that




We shall now argue that Xt − E(Xt) is non-stationary. This follows since if it were stationary, then clearly the left-hand
side would be stationary, which contradicts that there is a non-stationary random walk on the right-hand side. This
proves the necessity.
That C(z) is convergent for |z| < 1 + δ for some δ > 0 follows from the fact that if the roots of |A(z)|, z1, . . . , zp, say,
satisfy the condition that mini |zi| = 1 + δ > 1, then the power series for A(z)−1 will be convergent for |z| < 1 + δ.
                                                                                                                            □


2.2 The Statistical Analysis of the VAR
The unrestricted autoregressive model (VAR) with Gaussian errors and deterministic terms Dt is deﬁned by



                                                                                                                         (2.8)
where the errors ∈t are independent Gaussian with mean zero and variance Ω. The initial values X−k+1, . . . , X0 are ﬁxed
and the parameters are



which are unrestricted.
We introduce the notation Z′t = (X′t−1, . . . , X′t−k, D′t), for the stacked vector and B′ = (Π1, . . . , Πk, Φ) for the
corresponding parameters. Thus
18                                      The Vector Autoregressive Model


Zt is a vector of dimension pk + m and B′ is a matrix of dimension p × (pk + m).
The model expressed in these variables becomes



The Gaussian errors allow us to analyse the log likelihood function                                         (2.9)




which leads to the equations for estimating B




and the usual regression estimators




                                                                                                           (2.10)



                                                                                                           (2.11)
The maximal value is apart from a constant given by



Here we use for any two processes Xt and Zt the notation




The next result describes the asymptotic properties of the estimators in the VAR model under the assumption of
stationarity for the case where Dt = 1. The asymptotic distributions are formulated by means of the Kronecker
product.
If U and V are independent multivariate Gaussian with variances Σu and Σv respectively we let M = UV′ and use the
notation



such that for any two vectors ξ and η we have
                                                The Vector Autoregressive Model                                                      19




This formula allows us to calculate the variances and covariances of the elements of M by choosing ξ and η as suitable
combinations of unit vectors. Then



One can think of Σu ⊗ Σv as a matrix of a large dimension, but that requires that the matrix M is vectorized ﬁrst. This
will not be done here. I prefer the notation as above rather than the notation Σv ⊗ Σu, as is usually applied, but this
should cause no confusion.
THEOREM 2.3 Under the assumptions that the ∈ are independent and identically distributed with mean zero and variance Ω, that Xtis
stationary, and that Φ Dt = μ it holds that the asymptotic distribution of the maximum likelihood estimators of the parameters B′ = (Π1,
Π2, . . . , Πk, μ) is Gaussian and given by



where




Here Z′t = (X′t−1, . . . , X′t−k, 1). Thus for any vectors ξ and η it holds that




PROOF From the expressions for the estimators (2.10) and (2.11) we ﬁnd




We ﬁrst prove that all quantities on the right-hand side tend to zero. Under the assumption that the errors are
independent identically distributed with mean zero and ﬁnite variance, the processes ∈t∈′t, ∈tZ′t, and ZtZ′t are ergodic with
ﬁnite mean, such that
20                                         The Vector Autoregressive Model


This shows the consistency of      and hence     . To ﬁnd the asymptotic distribution we normalize as follows:




Thus we only have to ﬁnd the asymptotic distribution of                         . But this is given in Theorem B.13 as
Gaussian with mean zero and variance Σ ⊗ Ω.
We have here used the familiar concepts of weak convergence of probability measures and convergence in probability
of random variables. These concepts are discussed in more detail in Appendix B. The notation oP(1) denotes a term
that tends to zero in probability.
                                                                                                                          □
The above is the analysis of the unrestricted vector autoregressive model, where the statistical calculations are given by
ordinary least squares. Before we ﬁnish this section we just note that the same type of analysis can be made of a
number of different models given by restrictions on the parameters. Thus for instance we can leave out certain lags: if
we have quarterly data, we may want to ﬁt only lags 1, 2, 4, and 5. The maximum likelihood estimation of such a
model is again ordinary least squares. The same holds for any model where the variation of the coefﬁcients is restricted
as Πi = ξiH′i, since then the variable Zt in the above analysis should contain the transformed variables H′iXt−i. Still more
complicated models are possible, like the model deﬁned by (Π1, . . . , Πk) = ξ H′. It is also easily seen how the analysis
can be modiﬁed if other variables are included as regressors. Thus the statistical calculations are easily modiﬁed if for
instance time or the world oil price is included as a regressor. The simplicity gained by leaving the parameters
unrestricted should be clear, but one can of course estimate the parameters under any restriction one wishes, at the
price of a more complicated numerical technique, but then the existence and uniqueness of the likelihood estimators
are no longer easy to discuss. In fact the remaining part of this monograph deals with a very special non-linear
restriction where many results can be obtained.


2.3 Misspecication Tests
Fitting the unrestricted VAR model with k lags can easily be accomplished by usual regression programs, but it is of
course important to check that the assumptions underlying the model are satisﬁed, since otherwise the procedures
derived may not be valid. In particular we have to determine the lag length k and check that the estimated residuals
have no serial correlation, no conditional heteroscedasticity, and do not deviate too much from Gaussian white noise.
                                            The Vector Autoregressive Model                                                 21


We give here a brief discussion of a few of the many misspeciﬁcation tests that are being applied in practice. We do not
give proofs of these results but refer to Doornik and Hendry (1994) for a discussion of how these test are
implemented in PcFiml, and to the manual for CATS in RATS by Hansen and Juselius (1995). References and a more
thorough discussion can be found in these texts, see also Godfrey (1988). There are two types of results that one can
prove. One can ﬁnd asymptotic distributions of the test statistics and in some cases give improved approximations to
these.
Many of the asymptotic distributions are derived only for stationary processes even if the results are probably valid also
for the non-stationary processes that we are interested in. The small sample approximations are most often given by
analogy with the i.i.d. case and are therefore less satisfactory.


2.3.1 Lag Length Determination
The lag length can be determined by some of the many information criteria procedures, see Lütkepohl (1991) for an
excellent comparison of the criteria. It is important to avoid too many lags, since the number of parameters grows very
fast with the lag length and the information criteria strike a compromise between lag length and number of parameters
by minimizing a linear combination of the residual sum of squares and the number of parameters.
It is our experience that if a long lag length is required to get white noise residuals then it often pays to reconsider the
choice of variables, and look around for another important explanatory variable to include in the information set. That
is, rather than automatically increase the lag length, it is more fruitful in a multivariate context to increase the
information set.
The methods that will be derived in the subsequent chapters are based upon the time independence of the residuals,
hence an important criterion for the choice of lag length is that the residuals are uncorrelated. The ﬁrst thing to do is to
plot the autocorrelation and cross-correlation functions for the individual residual series to see if there is any obvious
autocorrelation left in the residuals. This graphical inspection can then be followed by summary test statistics.
Another strategy for determining the lag length is to start with a sufﬁciently large lag length and test successively that
the coefﬁcient to the largest lag is zero. It is a good idea to use a rather small size of these tests since the type one error
cumulates, see Teräsvirta and Mellin (1986) for a comparison of procedures based on information criteria and
sequences of tests. As a test statistic one can apply the likelihood ratio test in model (2.1) for the hypothesis Πk = 0,
which is asymptotically distributed as χ2 with p2 degrees of freedom.
A summary test statistic that measures the magnitude of the residual autocorrelations is given by the Portmanteau test
22                                         The Vector Autoregressive Model




where




Under the assumptions of the model the asymptotic distribution of this test statistic can be approximated for large T
and large s by a χ2 distribution with f = p2(s − k) where k is the lag length of the model.
A test that gives the proper weighting to the residual autocorrelations is a Lagrange multiplier test for residual
autocorrelation. This is calculated by regressing the estimated residuals from (2.1) on the residual lagged s as well as the
regressors in model (2.1). The corresponding test statistic




is asymptotically distributed as χ2 with degrees of freedom given by f = p2. Here      is the variance estimate from (2.1)
and     is the estimate from the auxiliary regression.


2.3.2 Autoregressive Conditional Heteroscedasticity
For each of the individual series a test for ARCH effects can be calculated by regressing the squared residuals      on a
constant and lagged values of the squared residuals. The asymptotic distribution of such a test is also χ2 with f equal to
the number of lags in the auxiliary regression.


2.3.3 Test for Gaussian Distribution
The marginal distribution of the residuals should be checked by histograms, and by calculating skewness and kurtosis.
A test can be based on the central moments




through skewness and kurtosis




The test statistic is
                                          The Vector Autoregressive Model                                            23


which is asymptotically χ2(2) if the underlying distribution of the errors is Gaussian. This test is known as the
Jarque—Bera test, but is given by Shenton and Bowman (1977) in a version that has better small sample properties for
i.i.d. variables. We have chosen here a simple correction for degrees of freedom. A multivariate version of this test is
developed in Doornik and Hansen (1994).
Autoregressive models do not necessarily always describe the data, but they provide a ﬂexible statistical tool. It often
happens that if a VAR model does not ﬁt the data, it is because of the information set, that is, the choice of variables
should be reconsidered. Thus it is important to extend the information set to contain the right explanatory variables
for the relation that one is really interested in. Another technique for constructing a modiﬁed VAR model is to
consider a partial or conditional model. This will be discussed in Chapter 8. The choice of the correct economic
variables to investigate is an art which requires economic insight, and no ﬁnal answers can be given on how to do it.


2.4 The Illustrative Examples

2.4.1 The Danish Data
As a ﬁrst example of an analysis of a data set consider the Danish data discussed in section 1.3 consisting of
                              , 1987: 3. We use two lags and let k = 2 and keep the ﬁrst two observations from 1974: 1
and 1974: 2 for initial values. This leaves T = 53 observations, and p = 4 dimensions ﬁtted with 2 lags (k = 2) and
seasonal dummies (m = 4). The seasonal dummies are orthogonalized to the constant term. The data are plotted in
levels and differences in Fig. 2.1. All four variables appear non-stationary with stationary differences. We write the
model in the error correction form as




Thus we have 4 × 53 observations and condition on the initial values corresponding to the data for 1974: 1 and 1974:
2. Each equation is ﬁtted with kp + m = 12 parameters, leaving 41 = 53 − 12 degrees of freedom for the variance. The
estimated coefﬁcient matrices are given in Tables 2.1, 2.2, and 2.3, and the correlation matrix and standard deviations
of the errors are given in Table 2.4.
In Fig. 2.2 the standardized residuals and their histograms are given for each of the four series.
We ﬁrst investigate the residual autocorrelations in order to check that we have found a description of the data
consistent with the assumption of white noise errors. The residual correlations and cross-correlations are given in
Fig. 2.3. The large correlations        are indicated with vertical bars.
24                                        The Vector Autoregressive Model


Table 2.1 The Estimates of Π For the Danish Data
                          m                       y                      ib                     id
     Δm                   −0.181                  0.110                  −1.042                 0.638
     Δy                   0.186                   −0.309                 0.658                  −0.648
     Δ ib                 0.014                   −0.018                 0.082                  −0.167
     Δ id                 −0.004                  0.020                  0.143                  −0.314

Table 2.2 The Estimates of Γ1 for the Danish Data
                          Δm                      Δy                     Δ ib                   Δ id
     Δm                   0.195                   −0.096                 −0.138                 −0.462
     Δy                   0.504                   −0.045                 −0.377                 0.060
     Δ ib                 0.051                   0.136                  0.301                  0.253
     Δ id                 0.069                   −0.022                 0.227                  0.265

Table 2.3 The Estimates of the Constant and Seasonal Dummies for the Danish Data
                          season(1)               season(2)              season(3)              constant
     Δm                   −0.023                  0.016                  −0.039                 1.583
     Δy                   −0.019                  −0.007                 −0.032                 −0.390
     Δ ib                 −0.003                  −0.007                 −0.007                 −0.064
     Δ id                 −0.002                  0.001                  −0.003                 −0.071

Table 2.4 Standard Deviations (σii) and Correlations (ρij) for the Danish Data
     102σii               1.90                    1.95                   0.76                   0.48
     ρij                  1.00
                          0.53                    1.00
                          −0.45                   −0.08                  1.00
                          −0.31                   −0.24                  0.25                   1.00

We calculated LM(1) = 18.62, which is distributed as χ2 with 16 degrees of freedom (p−value = 0.29), and LM(4) =
17.55 which gives a p-value of 0.35. An overall evaluation of correlations up to thirteenth order is given by the
multivariate Ljung–Box test LB(13) = 197.63 with p2(s − k) = 16 × (13 − 2) = 176 degrees of freedom corresponding
to a p-value of 0.13. Finally we test the hypothesis k = 2 in the model with k = 3 lags and ﬁnd the likelihood ratio test
                                            . This is again asymptotically distributed as χ2 with 16 degrees of freedom
and does
                                            The Vector Autoregressive Model                                                 25


Table 2.5 The Univariate Diagnostic Statistics for the Danish Data
                            ARCH(2)                 Skewness                 Kurtosis                JB
   m                        0.655                   0.552                    −0.075                  2.09
   y                        0.875                   0.524                    −0.087                  1.89
   ib                       0.148                   −0.297                   0.576                   1.17
   id                       1.292                   0.415                    0.562                   1.72

not give any hint of misspeciﬁcation. Next we investigate the individual series by the ARCH test for residual
conditional heteroscedasticity (of order 2). We calculate the Jarque–Bera test which is asymptotically χ2 with 2 degrees
of freedom. The results are given in Table 2.5. None of these tests seems to indicate that there are serious deviations
from the assumptions underlying the model. For an AR(2) model the properties are given by the roots of the
characteristic polynomial, or equivalently the eigenvalues of the coefﬁcient matrix in companion form, which we next
calculate, and the results are given in Table 2.6. It is seen that the eigenvalues are all inside the unit circle but that some
are very close to the unit root z = 1. Note also that there is no indication that the roots are close to any other value on
the unit circle indicating that the type of non-stationarity is the one that can be removed by differencing. That is, an
inspection of the roots indicates that we can focus on integrated variables and the subsequent chapters deal with how
to handle this issue in the framework that has been established, that is, the vector autoregressive model.
Table 2.6 The Eigenvalues (ρi) of the Companion Matrix for the Danish Data
   Root                           Real                          Complex                        Modulus
   ρ1                             0.9725                        0.0000                         0.9725
   ρ2                             0.7552                        −0.1571                        0.7713
   ρ3                             0.7552                        0.1571                         0.7713
   ρ4                             0.6051                        −0.0000                        0.6051
   ρ5                             0.5955                        −0.3143                        0.6734
   ρ6                             0.5955                        0.3143                         0.6734
   ρ7                             −0.1425                       0.2312                         0.2716
   ρ8                             −0.1425                       0.2312                         0.2716
26                                       The Vector Autoregressive Model


Fig. 2.1. The Danish data in levels and differences
                                        The Vector Autoregressive Model   27


Fig. 2.2. Standardized residuals and histograms for the Danish data
28                                         The Vector Autoregressive Model


Fig. 2.3. Autocorrelation and cross-correlation functions for the residuals of a VAR(2) for the Danish data




2.4.2 The Australian Data
As the other example consider the Australian data. We have here chosen the ﬁve-variable system discussed in Section
1.3 consisting of log prices in Australia and United States, the exchange rate, and a bond rate from each country. This
time we have data from 1972: 1 to 1991: 1 giving a total of T = 75 observations, if we ﬁx the ﬁrst two for initial values.
Subtracting 2 × 5 + 4 = 14 we get 61 effective observations for the variance.
The data are plotted in Fig. 2.4 in levels and differences. It is seen that the prices are clearly non-stationary due to the
trend, but that the differences look more stationary. One notices that the interest rates move in much the same way for
the ﬁrst part of the period, but then the US interest rate decreases while the Australian interest rate stays up. Notice
also the sudden ﬂuctuation in the US interest rate around 1980. This ﬂuctuation will show up in the test statistic for the
individual series below, see Table 2.11.
The estimates of the autoregressive model with two lags written in error correction form are given in Tables 2.7–2.10.
The graphs of the standardized residuals and their histograms are given in Fig. 2.5, and Fig. 2.6 gives the
autocorrelation function and cross-correlation functions.
                                          The Vector Autoregressive Model                                             29


Table 2.7 Estimated Coefﬁcient Matrix Π For the Australian Data
                      pau                 pus                  exch              iau                ius
   Δ pau              −0.056              0.061                −0.008            0.308              −0.280
   Δ pus              0.004               0.011                −0.022            −0.142             −0.016
   Δ exch             −0.020              0.093                −0.210            0.814              −0.257
   Δ iau              −0.036              0.084                −0.016            −0.462             0.073
   Δ ius              −0.069              0.137                −0.052            −0.080             −0.388

Table 2.8 Estimated Coefﬁcient Matrix Γ1 for the Australian Data
                      Δ pau               Δ pus                Δ exch            Δ iau              Δ ius
   Δ pau              −0.007              0.418                0.017             0.030              0.040
   Δ pus              0.113               0.307                0.005             0.126              0.241
   Δ exch             0.896               −1.457               0.038             −0.256             −0.181
   Δ iau              0.294               −0.318               −0.014            0.250              0.031
   Δ ius              −0.110              −0.210               −0.011            0.050              −0.017

The test for residual autocorrelation of order 1 is LM(1) = 29.26 and for order 4 LM(4) = 16.86, each with p2 = 25
degrees of freedom. These correspond to the p-values 0.25 and 0.89 respectively. The Ljung–Box statistic becomes
LB(18) = 442.197 with f = 25 × (18 − 2) = 400 degrees of freedom corresponding to a p-value of 0.07. The univariate
diagnostic statistics are given in Table 2.11.
It is seen that the US interest rate has a very strong ARCH effect probably due to the very large residual around 1980,
see Baba et al. (1992). The normality tests and the histograms indicate that there are some very large observations
especially in the Australian prices and the US interest rate, whereas the exchange rate has a slightly skew distribution.
The methods derived are based upon the Gaussian likelihood but the asymptotic properties of the methods only
depend on the i.i.d. assumption of the errors. Thus the normality assumption is not so serious for the conclusion, but
the ARCH effect may be. Fortunately it turns out the US interest is weakly
Table 2.9 The Estimates of the Constant and Seasonal Dummies for the Australian Data
                          season(1)                season(2)             season(3)              constant
   Δp au
                          −0.001                   0.006                 −0.003                 0.001
   Δ pus                  −0.000                   −0.001                0.002                  −0.041
   Δ exch                 0.004                    −0.007                0.009                  −0.329
   Δ iau                  −0.002                   −0.003                −0.003                 −0.154
   Δ ius                  0.003                    −0.003                0.003                  −0.221
30                                         The Vector Autoregressive Model


Table 2.10 Standard Deviations (σii) and Correlations (ρij) for the Australian Data
     102σii            0.73                0.57               4.44                0.66                0.88
     ρij               1.00
                       −0.14               1.00
                       0.33                0.01               1.00
                       0.26                0.26               0.21                1.00
                       −0.41               0.50               −0.14               0.17                1.00

Table 2.11 Univariate Diagnostic Statistics for the Australian Data
                           ARCH(2)                Skewness                Kurtosis                JB
     pau
                           1.134                  0.214                   1.470                   5.96
     pus                   0.850                  0.322                   0.499                   1.69
     exch                  0.528                  0.755                   0.969                   8.18
     iau                   5.279                  0.359                   0.351                   1.62
     ius                   18.357                 0.200                   1.439                   5.67

exogenous for the cointegrating relations and in Chapter 7 we analyse the conditional model, where we have
conditioned on the US interest rate as well as the past of all the variables. Obviously for a serious modelling of the data
we need to ﬁnd out what happens to the US interest rate around the period with the large deviation. This will not be
attempted here.
We proceed to calculate the eigenvalues in Table 2.12, and see that there are roots very close to 1, but that none of
them is close to other points on the unit circle. Thus we conclude that we can continue with the analysis of the VAR
with two lags, as the starting-point of a cointegration analysis.
Table 2.12 The Eigenvalues (ρi) of the Companion Matrix for the Australian Data
     Root                        Real                         Complex                       Modulus
     ρ1                          0.9894                       −0.0000                       0.9894
     ρ2                          0.9128                       0.1192                        0.9205
     ρ3                          0.9128                       −0.1192                       0.9205
     ρ4                          0.7303                       0.0529                        0.7322
     ρ5                          0.7303                       −0.0529                       0.7322
     ρ6                          0.1975                       0.0000                        0.1975
     ρ7                          0.1295                       0.0000                        0.1295
     ρ8                          0.0600                       0.3718                        0.3767
     ρ9                          0.0600                       −0.3718                       0.3767
     ρ10                         −0.2561                      0.0000                        0.2561
                                          The Vector Autoregressive Model   31


Fig. 2.4. The Australian data in levels and differences
32                                       The Vector Autoregressive Model


Fig. 2.5. Standardized residuals and histograms for the Australian data
                                         The Vector Autoregressive Model                                          33


Fig. 2.6. Autocorrelation and cross-correlation functions for the residuals of a VAR(2) for the Australian data
                     3 Basic Denitions and Concepts
IN this chapter we give the basic deﬁnitions of integration, cointegration and common trends, which will be applied in
the following. The deﬁnitions are essentially those given in Engle and Granger (1987) but have been modiﬁed slightly
to accommodate the simpler framework that we are working in. It is important that we allow the components of a
vector process to be integrated of different orders. The reason for this is that when analysing economic data the
variables are chosen for their economic importance and not for their statistical properties. Hence we should be able to
analyse for instance stationary as well as non-stationary variables in the same model, in order to be able to describe the
long-run relations as well as the short-term adjustments.


3.1 Cointegration and Common Trends
Many economic variables are not stationary, and we consider the type of non-stationarity that can be removed by
differencing. When modelling this phenomenon one can focus on two aspects of the economy, either the ‘stable’
economic relations between variables that show less variability than the original variables, or the cumulated
disturbances, which create the non-stationarity. The purpose of this section is to give these concepts a precise statistical
deﬁnition in order to be able to discuss them in detail in a statistical model.
It turns out that it is difﬁcult to give a general deﬁnition of the concept of an integrated process without including
processes with unwanted properties, and we therefore give a deﬁnition that is not so general but which covers exactly
the processes that we want. Let in the following ∈t be a sequence of independent identically distributed p-dimensional
random variables with mean zero and variance matrix Ω.
DEFINITION 3.1 A linear process is deﬁned by                       where              is convergent for |z| ≤ 1 + δ for some δ
> 0.
Note that the coefﬁcients decrease exponentially fast. In Appendix B some results are given for linear processes, which
we need for the probability analysis in Part II.
                                               Basic Deﬁnitions and Concepts                                                   35


DEFINITION 3.2 A stochastic process Ytwhich satisﬁes that                        is called I(0) if           .
Note that the matrix C can be singular, and in fact it is this property that gives rise to cointegration in the following. As
a simple example of a univariate linear process consider the AR(1) process for |ρ| < 1,




The sum of the coefﬁcients is                  , such that the process is I(0). The process



is stationary for all θ, but for θ ≠ 1 it is an I(0) process. The process Xt = (X1t, X2t)′ is called an I(0) process even if θ = 1
since the C-matrix is




The process Xt given in the representation (2.4) has the property that Xt − E(Xt) is an I(0) process, since C(1) = A(1)−1
is non-zero and in fact has full rank.
DEFINITION 3.3 A stochastic process Xtis called integrated of order d, I(d), d = 0, 1, 2, . . . if Δd(Xt − E(Xt)) is I(0).
We only deal with integrated processes that are I(0), I(1), and I(2) in the following. Note that the property of being
integrated is related to the stochastic part of the process since we have subtracted the expectation in the deﬁnition. The
concept of I(0) is deﬁned without regard to deterministic terms like a mean or a trend. Note also that there are no
restrictions on the levels of an integrated process, only the differences.
Another aspect of the deﬁnition is that we want to describe the two-dimensional process consisting of a random walk
and a stationary sequence as an I(1) process thus allowing the component processes to be integrated of different
orders. Deﬁnition 3.3 has the property that it is invariant to non-singular linear transformations of the process. That is,
if Xt is I(1) and A is a p × p matrix of full rank then AXt is also I(1).
A consequence of the deﬁnition is that the stochastic part of an I(1) process Xt is non-stationary, since if
36                                          Basic Deﬁnitions and Concepts


for some I(0) process            , we can show that              implies that Xt is non-stationary. Let              . We
deﬁne the function C*(z) by the expression




It is shown in Lemma 4.1 that the power series for C*(z) is convergent for |z| < 1 + δ. Thus we have the
representation




with                . Next we deﬁne the stationary process                    and interpret the relation as a relation for
the lag operator L and replace zi by Li and ﬁnd




Hence




This process is non-stationary since Yt = Δ Xt is an I(0) process, such that C ≠ 0. We next discuss stationary linear
combinations of the process Xt. Let therefore β be any vector in Rp, then we have




which shows that if we want β′ Xt to be stationary we must have β′ C = 0, and then



This is stationary only if we choose the initial values of the process β′ Xt properly, that is, if we take            , in
which case we get




The deﬁnition of I(1) gives no condition on the initial values or the levels of the process, thus if we want to consider
the stationarity of linear combinations of levels we need the extra condition that the initial values can be chosen as
indicated.
We apply this idea in the deﬁnition of cointegration.
                                                   Basic Deﬁnitions and Concepts                                                           37


DEFINITION 3.4 Let Xtbe integrated of order 1. We call Xtcointegrated with cointegrating vector β ≠ 0 if β′ Xtcan be made stationary
by a suitable choice of its initial distribution. The cointegrating rank is the number of linearly independent cointegrating relations, and the
space spanned by the cointegrating relations is the cointegrating space.
Note that β′ Xt need not be I(0), but for AR processes the cointegrating relations we ﬁnd are in fact I(0), as we shall see
in Theorem 4.2. We give some elementary examples which illustrate the notion of integration and cointegration.
EXAMPLE 3.1 We deﬁne the two-dimensional process Xt, t = 1, . . . , T by




Clearly X1t, X2t, and also Xt are I(1) processes. They cointegrate with cointegrating vector β′ = (a, −1) since the linear
combination β′ Xt = aX1t − X2t = aε2t − ε3t is stationary. If further



then clearly X3t is I(0) but the vector process X′t = (X1t, X2t, X3t) is an I(1) process now with two cointegrating vectors
given by (a, −1, 0) and (0, 0, 1). Thus we allow, with a slight abuse of language, for unit vectors as cointegrating
vectors, and see that by including a stationary variable in the process we increase the dimension of the cointegrating
space by one.
EXAMPLE 3.2 Let us deﬁne the three-dimensional process




In this case X1 and X2 are I(2) processes, whereas X3 is an I(1) process. Hence the process X′ = (X1, X2, X3) is I(2), and
cointegrates since




is I(1), and
38                                                Basic Deﬁnitions and Concepts


is I(0). Thus (a, −1, 0) is a cointegrating vector that changes the order of the process from two to one, whereas
[ac, −c, −(a − b)] changes the order from two to zero. Another possibility is to deﬁne the process as follows




In this case a different phenomenon appears since while aX1t − X2t is still I(1), stationarity can be achieved by
calculating




Thus differences of X3t are needed to remove the non-stationarity from the process aX1t − X2t. This phenomenon is
called polynomial cointegration and will be discussed brieﬂy below.
Consider the following general process that illustrates the various possibilities in p dimensions for d = 2:




                                                                                                                                    (3.1)
Here εt are as above and Yt is a linear process. Clearly Xt is I(2) if C2 ≠ 0, since it is non-stationary and differencing it
twice makes it I(0). Note, however, that if C2 = 0, then the presence of the quadratic trend implies that we still need to
difference it twice to make it I(0). We prefer to call such a process an I(1) process with a quadratic trend, since the
stochastic trend needs only one differencing.
The moving average representation (3.1) is a useful way of modelling the variation of the economic data through the
matrices C1 and C2 as the results of the inﬂuence of its unobserved common trends given by the cumulated sums of ε.
It is furthermore very convenient for describing the properties of the process, the mean and covariance functions can
be calculated and the cointegration properties are easily illustrated, as will now be discussed. The asymptotic properties
too are simple consequences of (3.1).
Granger (1981) used this representation to note that if we take linear combinations β, such that β′ C2 = 0, then the
order of integration of the process is reduced from 2 to 1. He coined the phrase cointegration and denoted it CI(2, 1)
in this case. The idea is to describe the ‘stable’ relations in the economy by linear relations that are more stationary than
the original variables.
DEFINITION 3.5 The I(d) process Xtis called cointegrated CI (d, b) with cointegrating vector β ≠ 0 if β′ Xtis I (d − b), b = 1, . . . , d,
d = 1, . . .
                                                Basic Deﬁnitions and Concepts                                                     39


Thus the class CI(1, 1) are the integrated processes that are I(1) and which cointegrate to I(0). In general we can have
cointegration to stationarity but we mainly meet processes that are CI(1, 1) when working with auto-regressive
processes. If in (3.1) we can ﬁnd β such that β′ C1 = β′ C2 = 0, then clearly β′ Xt is stationary apart from its quadratic
trend. Thus the stochastic variation has been reduced to stationarity. We call β′ Xt trend stationary (with a quadratic
trend). Thus cointegration is a consequence of reduced rank of the matrices C1 and C2. If we ﬁnd two vectors β0 and β1,
such that β′0C2 = 0, and such that β′0C1 + β′1C2 = 0, then, disregarding the deterministic terms,




which is stationary by the choice of β0 and β1. Thus the levels Xt are reduced to I(1) by the coefﬁcients β0, and these
linear combinations then cointegrate with the differences through the linear combinations β′1 Δ Xt which also form an
I(1) process. This phenomenon is called polynomial cointegration, see Engle and Yoo (1991), Granger and Lee (1989),
Gregoir and Laroque (1993), and Johansen (1988a, 1992a). This will be exempliﬁed for I(2) processes in Chapter 4.
DEFINITION 3.6 The I(2) process Xtis called polynomially cointegrated if there exist β0 ≠ 0, and β1 ≠ 0, such that β′0Xt + β′1 Δ Xtis
stationary.
The representation (3.1) models the variables by common trends, and the reduced rank of the coefﬁcient matrices C1
and C2 ensures that the variables cointegrate, since by suitable linear combinations the common trends can be
eliminated, thereby creating the ‘stable’ economic relations. Another way of modelling cointegrating variables is
through the error correction models.
An example of a reduced form error correction model is given by the equations



                                                                                                                               (3.2)
with initial value X0, where α and β are p × r matrices. One motivation for this model is to consider the relation β′Xt =
E(β′ Xt) = c as deﬁning the underlying economic relations, and assume that the agents react to the disequilibrium error
β′ Xt−1 − c through the adjustment coefﬁcient α, to bring back the variables on the right track, that is, such that they
satisfy the economic relations.
Together with a matrix α of dimension p × r and full rank we consider another matrix α⊥ of full rank and dimension
p × (p − r) such that α′ α⊥ = 0. Then rank(α, α⊥) = p. The matrix α⊥ is not uniquely deﬁned, but
40                                           Basic Deﬁnitions and Concepts


whenever we use it the conclusions do not depend on which version we choose. Note the beautiful relation



which expresses that if β′ α has full rank then any vector v in Rp can be decomposed into a vector in v1 ∈ sp(β⊥) and a
vector in v2 ∈ sp(α):




It is not difﬁcult to show, see also Theorem 4.2, that if α′⊥β⊥ has full rank then one can solve (3.2) and ﬁnd a
representation of the form (3.1):




where



                                                                                                                       (3.3)
whereas the value of τ0 depends on initial conditions. To see this multiply equation (3.2) by β′ and let Ut = β′ Xt. Then
we get the equation



such that the r-dimensional process Ut is stationary if the matrix (I + β′ α) has its eigenvalues inside the unit circle. In
this case we ﬁnd the stationary representation from Theorem 2.2




Multiplying (3.2) by α′⊥ we get the equation



which has solution                                . Combining these results we ﬁnd




This is an instance of the celebrated representation theorem by Granger, see Engle and Granger (1987), which is just a
way of ﬁnding the moving average representation from the autoregressive representation, and vice versa, when there
are I(1) variables in the system.
                                            Basic Deﬁnitions and Concepts                                               41


Fig. 3.1. The process Xt is pushed along the attractor set by the common trends and pulled towards it by the
adjustment coefﬁcients




It is seen from this representation that the non-stationarity in the process Xt is created by the cumulative sum of the ε,
but from the expression for C it is seen that only the combinations             enter the processes. This gives rise to the
following deﬁnition:
DEFINITION 3.7 The common trends in (3.2) are the variables         .
The error correction model (3.2), which is constructed around the disequilibrium errors as error correction terms, and
the moving average model (3.1) that is constructed in terms of unobserved common trends, are of course
complementary, in the sense that the two approaches are mathematically equivalent, but they may appeal to different
types of intuition.
The picture that one should have in mind is that the cumulated disturbances,               , push the economic variables
around in the space spanned by β⊥, the attractor set. The agents react to these forces and create economic variables that
move around the common trends following the economic ‘laws’ or structural relations β′ Xt = E(β′ Xt) in the sense that
the variables react to the disequilibrium errors β′ Xt − E(β′ Xt) through the adjustment coefﬁcients α and are forced
back towards the attractor set.
Thus the long-run relations β′ Xt = E(β′ Xt) are not relations that are satisﬁed in the limit as t → ∞, or relations
between levels of variables in equilibrium, but they are relations between the variables in the economy, as described by
the statistical model, which show themselves in the adjustment behaviour of the agents in the sense that the agents try
to force the variables back towards the attractor set deﬁned by the relations.
There are many ways of interpreting the attractor set. It is a consequence of the equations, that the system, if left to
itself by letting εt+h = 0, h = 1, 2, . . . ,
42                                           Basic Deﬁnitions and Concepts


will converge to a point on the attractor set. Another way of thinking about the attractor set is that again if the noise is
shot off and we place Xt in the attractor set, then Xt+h stays there, hence there is no inherent tendency to move away
once the attractor is reached.
It must be emphasized that the picture above is only valid for model (3.2) where the short-term dynamics have been
left out. See Example 4.3 for an example where none of the variables reacts with a coefﬁcient with a reasonable sign,
despite the fact that the process is actually cointegrating, and exercise 4.3 for an example where α′⊥Xt is stationary,
which shows that we cannot replace the common trends               by α′⊥Xt. We return to the problem of how to choose
linear combinations of the levels to represent common trends after the representation given in Theorem 4.2.
The notion of common trend and cointegrating relation appear side by side and are of course two sides of the same
coin. This will be apparent in the following, where β and α⊥ can always be treated in a similar manner. There is,
however, one aspect in which the two concepts are radically different. The cointegrating relations enjoy the property
that if the information set is increased by adding new variables, then the cointegrating relations that we found for the
smaller information set correspond naturally to cointegrating relations in the larger set where the new variables have a
zero coefﬁcient. An unanticipated shock in a small system which forms the basis of the common trend need not be
unanticipated in a larger system, since the unobserved shock in the small system could depend on the added variable,
in which case it would not be an unanticipated shock anymore, and hence the deﬁnition of the common trend has
changed, see Hendry (1995).


3.2 Exercises

3.1
Let




Show that (1, −2, 0) and (0, 0, 1) are cointegrating vectors for the I(1) process Xt.
                                               Basic Deﬁnitions and Concepts                                                    43


3.2
Let




Show that Xt is I(2) and that X1t − X2t is I(1), X1t − X2t − 2X3t is I(1) while X1t − X2t − 2X3t + 2Δ X1t is stationary.


3.3
Consider the simple process Xt = εt.
  1. Show that Xt is I(0).
     Deﬁne Yt = Δ Xt.
  2. Show that Yt is stationary but that it is not I(0).
  3. Show now in general that if Xt is I(0), then Δ Xt is not I(0), and neither is ΔdXt, d = 1, 2, . . .
One could in this case call ΔdXt an I(−d) process.
Note that we have shown that if Xt is I(d1) and I(d2) then d1 = d2, and further that I(0) does not include all the stationary
processes. The processes in the union of I(−d), d = 1, 2, . . . are also stationary.


3.4
Let             , and Z2t = ε2t.
  1. Show that Z2t is I(0), and that Z1t and Zt = Z1t + Z2t are I(1).
  2. Show now in general that if Xt is I(d1) and Yt is I(d2), where d1 = 0, 1, . . . , d2 = 0, 1, . . . , and d1 ≠ d2, then Xt + Yt
     is I(d) where




3.5
Consider the autoregressive process Xt deﬁned by




Find an expression for Xt as a function of X0, ε1, . . . , εt. Show that X1t − X2t can be given an initial distribution such that
it becomes stationary.
44                                               Basic Deﬁnitions and Concepts


3.6
Consider the equations




Solve the equations for X1t and X2t, and show by direct calculation that X1t − X2t is stationary, while the processes X1t
and X2t are non-stationary. (Hint: ﬁnd an equation for X1t − X2t and another for X1t + 2X2t.)
What happens if you replace         by       ?


3.7
Under the assumption that β′ α has full rank show that
     1. (α, β⊥) and (β, α⊥) has full rank.
     2. α′⊥ β⊥ has full rank.
        Let x = α x1 + β⊥x2.
     3. Show that




and hence




3.8
Consider the model



                                                                                                                        (3.4)
Show that if |eig(I + β′ α) | < 1, then Xt has the representation




where Yt is a stationary process. [Hint: multiply (3.4) by β′ and solve for β′ Xt, then insert it into (3.4) and sum over t.]
  4 Cointegration and Representation of Integrated
                     Variables
THIS chapter contains the mathematical and algebraic results needed to understand the properties of I(1) and I(2)
processes generated by autoregressive and moving average models. The basic result which is applied throughout is
Theorem 4.2, which solves the problem of giving necessary and sufﬁcient conditions on the coefﬁcients of the
autoregressive model for the process to be integrated of order 1. For this purpose we reparametrize the VAR model as
an error correction model and introduce the matrices (Π, Γ, C) which will be important for the subsequent discussion
of the models. In section 4.1 we give the conditions for the solution of the autoregressive equations to be an I(1)
process and derive its moving average representation. In section 4.2 we show the opposite result that a process deﬁned
by its moving average representation as an I(1) process with cointegration can be represented as the solution of an
(inﬁnite order) autoregressive set of equations. In section 4.3 we give the representation theorem for I(2) variables.


4.1 From AR to MA Representation for I(1) Variables
We consider again the p-dimensional autoregressive process Xt deﬁned by the equations (2.1) but written in error
correction form




                                                                                                                 (4.1)
for ﬁxed values of X−k+1, . . . , X0, and independent identically distributed errors εt. Here      and
and for later use we deﬁne                   .
This way of reparametrizing the model is convenient for the following. For a process with two lags the explicit
calculation is
46                                         Cointegration and Representation


This is a special case of the general form (4.1). From now on only the form (4.1) will be applied for the analysis of I(1)
processes.
Before formulating the main result we consider two examples.
EXAMPLE 4.1 Let the process Xt, t = 1, . . . , T, be deﬁned by the error correction model




Subtracting these equations we ﬁnd



and hence by Theorem 2.1 it follows that




and




If −2 < α1 < 0 we can choose X1t − X2t to be stationary by choosing the initial values X10 − X20 to have their invariant
distribution. If this is expressed as




we ﬁnd




Thus X1t and X2t and hence Xt are I(1) with cointegrating vector (1, −1) if and only if −2 < α1 < 0. If α1 = 0 we get an
I(1) process consisting of two random walks that do not cointegrate, and if |1 + α1| > 1 then the process becomes
explosive. If α1 = −2 we get a non-stationary process which is not I(1). Thus the properties of the process depend on
the choice of parameter values.
EXAMPLE 4.2 Let Xt, t = 1, . . . , T, be deﬁned by
                                         Cointegration and Representation                                                    47


These equations can be solved for




and




Thus this simple autoregressive model with only one lag can generate an I(2) process. Note that the initial value X10
generates a linear trend in the process.
The conclusion that can be drawn from these examples is that some conditions are needed on the coefﬁcients to
determine what are the properties of a process generated by an autoregressive model.
In the following we apply an expansion of a power series at the point 1 given in
LEMMA 4.1 Let                     be convergent for |z| < 1 + δ for some δ > 0, and deﬁn-
e             and                      . Then C* (z) is convergent for |z| < 1 + δ and



                                                                                                                           (4.2)
Further it holds that                        . If C(z) is a polynomial, then so is C*(z).
PROOF Since the coefﬁcients Ci are exponentially decreasing the same holds for              , such that C*(z) has (at least) the
same radius of convergence. Identifying coefﬁcients in (4.2) we ﬁnd




which has solution                . It follows from (4.2) that




Note that if C(z) is a polynomial then the entries in the matrix polynomial C(z) − C(1) are polynomials too, with the
property that they have a zero at z = 1. Hence each can be factorized as (1 − z) times a polynomial. Thus if C(z) is a
polynomial then so is C*(z), see (2.7).
□
48                                          Cointegration and Representation


Below we formulate the main result in this chapter, but ﬁrst we need some notation. The characteristic polynomial for
the process Xt given in (4.1) is




Note that A(1) = −Π and that




Expanding the polynomial around z = 1, we apply Lemma 4.1 twice and ﬁnd that we can deﬁne




such that



where A**(z) is a polynomial. If in this expression we replace zi by Li and 1 − z by Δ = 1 − L we can write the
equation for Xt as



                                                                                                                        (4.3)
The conditions of Theorem 4.2 below (known as Granger's representation theorem), are expressed in terms of the
parameters Π and Γ, that is, the value of A(·) at z = 1 and the derivative of A(·) at z = 1.
If A(z) has no roots with modulus ≤ 1 the process Xt becomes stationary, and since we here want to describe I(1)
processes, we allow roots at the point z = 1, see Assumption 1, p. 14.
If we allow for unit roots, then Π = − A(1) has to be singular. A singular matrix of rank r, say, has the representation
Π = α β′ for some p × r matrices α and β. To see this let β′ denote r linearly independent rows of Π and let α denote the
coefﬁcients that are needed to write the rows of Π as linear combinations of the rows β′, then Π = α β′. Recall that if β
is any p × r matrix of full rank, we deﬁne β⊥ as a p × (p − r) matrix of full rank, such that β′ β⊥ = 0. An explicit
construction of β⊥ can be given as follows: let c be the p × r matrix c = (Ir, 0)′, where Ir is an r × r identity matrix, and
choose c⊥ = (0, Ip−r)′. Then one can take




This deﬁnition works for any matrix c for which β′ c has full rank. For mathematical convenience we deﬁne β⊥ = 0 if β
has full rank p, and deﬁne
                                                 Cointegration and Representation                                                      49


β⊥ = Ip if β has rank 0. Further we deﬁne β = β (β′ β)−1, such that the projection on the space spanned by the columns of
β is Pβ = β(β′ β)−1 β′ = β β′ = ββ′, and β′ β = β′ β = Ir. These normalizations will be discussed in more detail in section
13.2.
THEOREM 4.2 If |A(z)| = 0 implies that |z| > 1 or z = 1, and rank(Π) = r < p, then there exist p × r matrices α and β of rank
r such that


                                                                                                                                    (4.4)
A necessary and sufﬁcient condition that Δ Xt − E(Δ Xt) and β′ Xt − E(β′ Xt) can be given initial distributions such that they become
I(0) is that




                                                                                                                                    (4.5)
In this case the solution of (4.1), Xt, has the representation




                                                                                                                                    (4.6)
where A depends on initial values, such that β′ A = 0, and where C = β⊥ (α′⊥ Γ β⊥)−1 α′⊥. It follows that Xtis a cointegrated I(1) process
with cointegrating vectors β. The function C1(z) satisﬁes



                                                                                                                                    (4.7)
where the power series for C1(z) is convergent for |z| < 1 + δ for some δ > 0.
The solution of equation (4.1) contains contributions from the ε and from the initial values. Since some linear
combinations of the Xt as well as Δ Xt can be made stationary by suitable choices of the initial distribution the
representation (4.6) only contains part of the initial values. Thus for instance if the process has one random walk
component and one stationary component, then the representation (4.6) only contains the initial value of the random
walk. Instead of all the initial values X−k+1, . . . , X0 only X0 is present because Δ Xt has been represented as a stationary
process. Thus it is not a representation of the process given the initial value X0, but a representation that includes as
little as possible of the initial values.
It is an immediate consequence of the representation (4.6) that β′ Xt − E(β′ Xt) is stationary, since β′ C = 0, and in fact
β′ C1 (L) (εt + Φ Dt) is a representation of the disequilibrium error β′ Xt. The matrix C plays an important role for the
understanding of the I(1) models. For large t the random walk dominates the stochastic component of Xt and the
variance is given by the so-called long-run variance CΩ C′. This matrix is singular,
50                                          Cointegration and Representation


and in fact the null space is the directions determined by β, the stationary components. One can interpret the matrix C
as indicating how the common trends                 contribute to the various variables through the matrix β⊥. Another
interpretation is that a random shock to the ﬁrst equation, say, at time t = 1 gives rise to short-run random effects as
represented by the coefﬁcients of C1(L) which die out over time, and a long-run effect given by Cε11. This permanent
effect is orthogonal to β such that the process is shifted to another position on the attractor. Thus the coefﬁcients of
the cointegrating relation cannot usually be interpreted as elasticities, even if the variables are in logs, since a shock to
one variable implies a shock to all variables in the long run, and hence the coefﬁcients do not in general allow a ceteris
paribus interpretation, see Lütkepohl (1994).
PROOF There is no loss of generality in setting Φ = 0. The idea of the proof is to apply Theorem 2.2 for stationary
processes to Zt = β′ Xt and Ut = β′⊥ Δ Xt, which, if the theorem is correct, will be stationary. We ﬁnd the expressions



Summing from i = 1, . . . , t we get




                                                                                                                        (4.8)
This shows that if the process                is stationary the results will follow. Note that Zt is r-dimensional and Ut is
(p − r)-dimensional, and that



We want to show that is an autoregressive process and therefore want to show how (4.1) or (4.3) can be rewritten in
terms of . We multiply equation (4.3) by α′ and α′⊥ and get



                                                                                                                        (4.9)


                                                                                                                      (4.10)
These equations deﬁne the process Xt, t = 1, . . . , T, as function of the initial values and ε1, . . . , εt. Note that
multiplication by α′⊥ cancels the term involving the levels.
Next inserting the expression for β′ Xt and Δ Xt in terms of Zt and Ut we obtain equations for the new variables



                                                                                                                      (4.11)


                                                                                                                      (4.12)
                                          Cointegration and Representation                                          51


Since Δ2Xt is a function of     and      , equations (4.11) and (4.12) can be written




Here A**(L) is a polynomial in the lag operator L which collects the remaining terms. Thus the process            is an
autoregressive process with a lag polynomial Ã(z) that satisﬁes the relation




It follows that                                                                                                  (4.13)




has the same roots as |A(z)| except for z = 1. Note also that




has full rank if and only if assumption (4.5) holds since                                                        (4.14)




                                                                                                                 (4.15)
Thus Ã(z) has no unit roots and all other roots are outside the unit circle by Assumption 1. Hence the processes Zt and
Ut are given by the autoregressive equations




                                                                                                                 (4.16)
which are invertible if and only if condition (4.5) holds, as we have removed the unit roots from the process by the
transformation from Xt to the process .
Thus Ut and Zt can, by Theorem 2.2, be given initial distributions such that they become stationary and in fact I(0).
This proves the main results of Theorem 4.2, but we want to get an explicit expression for the leading term in the
representation of Xt in terms of the εi, that is, the matrix C. From (4.16) we ﬁnd
52                                          Cointegration and Representation


where                                   , see (4.2), since             , such that



which implies that



where                           . Summing we ﬁnd




The coefﬁcient to the random walk is found to be:




Next insert these results into (4.8) and we get




We let                    , which shows that β′ A = 0. Finally we deﬁne C1(L) by



The representation (4.6) implies, for Φ = 0, that



or equivalently



which shows (4.7).
□
COROLLARY 4.3 Under the assumption that |A(z)| = 0 implies |z| > 1 or z = 1, the number of unit roots is greater than or equal
to p − r where r = rank(Π). Equality holds if and only if Xtis I(0), (r = p), or I(1), (r < p).
                                            Cointegration and Representation                                               53


PROOF The ﬁrst statement follows from the representation (4.13) which shows that the number of unit roots is at least
p − r since the matrix (β, β⊥ (1 − z)) has p − r unit roots. Equality holds if and only if Ã(L) has no unit roots, that is, if
and only if the process      is I(0). If this is the case then Xt is also I(0) if r = p, otherwise Xt is I(1).
                                                                                                                            □
The corollary shows that the number of unit roots of a system cannot be decided by inspection of the matrix Π alone,
that is, the value of the polynomial at z = 1. Just like for univariate polynomials a condition on the derivative is needed,
see (4.5). The result is a special case of a general result for higher order integrated systems, see Johansen (1988a) or
Boswijk (1993).
This result gives a useful diagnostic tool to see if a ﬁtted I(1) model contains processes that are I(2), since if the
processes are I(2) then the unit roots of the polynomial A(z) cannot be removed by changing the rank of Π, that is, by
changing the cointegrating rank.
COROLLARY 4.4 The process β′⊥Xtis not cointegrating, and the same holds for α′⊥Γ Xtand they can both be used as common trends.
PROOF It follows from the expression for the matrix C = β⊥ (α′⊥Γ β⊥)−1α′⊥ that if β⊥ has full rank p − r then so does β′⊥β⊥
and hence β′⊥C has full rank p − r which shows that β′⊥Xt does not cointegrate. Next note that



such that



Thus the linear combinations α′⊥ Γ Xt almost capture the common trends as deﬁned in Deﬁnition 3.7.
                                                                                                                            □
The representation in Theorem 4.2 is known as Granger's representation theorem, see Engle and Granger (1987), even
though they state a slightly different version, see Theorem 4.5. Thus they arrive at cointegration from an assumption
that Xt is at most I(1), and an assumption that the moving average representation is of reduced rank. We have chosen
in Theorem 4.2 to go the other way and start with the autoregressive model since that is what is usually ﬁtted to the
data, and then express in terms of conditions on the parameters when we get I(1) variables and cointegration. The
importance of this result is ﬁrst of all that it shows the equivalence between the notion of error correction models and
cointegration. Thus the process that satisﬁes an error correction model must exhibit cointegration and a cointegrated
process can be considered a solution of an error correction model. Another important aspect of the representation
(4.6) is that it immediately gives
54                                          Cointegration and Representation


the asymptotic properties of the process Xt deﬁned by the error correction model.
Perhaps the most important consequence of condition (4.5) is that it allows to formulate a corresponding result for
I(2) processes, see Theorem 4.6.
EXAMPLE 4.1 continued. For this case we ﬁnd




such that β = (1, −1)′, α = (α1, 0)′, β⊥ = (1, 1)′, α⊥ = (0, 1)′ and ﬁnally condition (4.5) becomes




which has full rank consistent with the solution being I(1).
EXAMPLE 4.2 continued. We ﬁnd




giving |A(z)| = (1 − z)2, such that Assumption 1 is satisﬁed. We also ﬁnd that α = (0, 1)′, β = (1, 0)′, α⊥ = (1, 0)′ β⊥ = (0,
1)′ and α′⊥Γ β⊥ = 0. Thus in this situation condition (4.5) is not satisﬁed, corresponding to the process being I(2). Note
that Γ has full rank despite the property that α′⊥Γ β⊥ = 0.
EXAMPLE 4.3 We deﬁne the process Xt by the equations




If γ = 0 these equations are easily solved to give



which shows that X1t − X2t, and hence also X1t and X2t are explosive, simply because the error correction coefﬁcients
have the wrong sign, such that Xt is pushed away from the relation X1 − X2 = 0. We now want to show that if we
choose γ = 9/4 then the process becomes I(1). For γ = 9/4 we ﬁnd




This gives
                                                  Cointegration and Representation                                                        55




which has roots 1 and 4/3 which are outside the unit disk or at 1. Further



This shows that the process is I(1) since condition (4.5) holds with (1, −1)′ as a cointegrating vector despite the fact
that the adjustment coefﬁcients have the wrong sign. Thus the effect of the adjustment coefﬁcients is not so easy to
assess without taking into account all the parameters of the model.


4.2 From MA to AR Representation for I(1) Variables
In this section we want to ﬁnd out when an I(1) process given by its moving average representation can be shown to
satisfy an autoregressive equation.
Thus let              be convergent for |z| < 1 + δ, C(1) ≠ 0, and assume that Assumption 1 is satisﬁed for C(z). We
further assume that the I(1) process Xt satisﬁes



                                                                                                                                      (4.17)
such that Δ Xt is an I(0) process. We let C = C(1) and introduce C* = −dC(z)/dz|z=1, then the following result holds
THEOREM 4.5 If rank (C) = p−r < p, then C = ξ η′ for ξ and η (p × (p − r)) of full rank. If furthermore ξ′⊥C*η⊥has full rank then
ξ′⊥ (Xt − E(Xt)) can be given an initial distribution such that it is stationary, and Xtsatisﬁes an (inﬁnite order) error correction model of
the form



                                                                                                                                      (4.18)
PROOF We assume again without loss of generality that Φ = 0. The proof runs roughly as that for Theorem 4.2. We
write (4.17) as



and multiply by ξ′ and ξ′⊥ and introduce the variables ut = η′ εt and vt = η′⊥ εt such that εt = ηut + η⊥vt. Then




                                                                                                                                      (4.19)
56                                          Cointegration and Representation


and



Summing (4.20) we ﬁnd                                                                                               (4.20)



                                                                                                                    (4.21)
This shows that if we choose ξ′⊥Xt to have initial distribution ξ′⊥C* (L) ε0, then ξ′⊥Xt has the representation



                                                                                                                    (4.22)
such that ξ′⊥Xt is stationary. We then ﬁnd from (4.19) and (4.22), since C*(1) = C*, that in terms of the errors ut and vt
we ﬁnd




                                                                                                                    (4.23)
for suitable functions      and C**. The matrix         given by




has full rank by the assumptions made. Thus z = 1 is not a root in     . Just as before we can check that the remaining
roots of C(z) are outside the unit disk, such that   can be inverted. Let              . Then (4.23) can be solved for ut
and vt:




The only term that involves the levels is




all remaining terms involve only Δ Xt and can be collected in a term Ã**(L)Δ Xt. Thus




Hence
                                            Cointegration and Representation                                             57


which can be written



which is the required result if we deﬁne A*(z) = (η, η⊥) Ã**(z).
                                                                                                                          □


4.3 The MA Representation of I(2) Variables
We consider again the equation




                                                                                                                     (4.24)
The result of Theorem 4.2 shows that in order to ﬁnd solutions of (4.24) that are I(1) we need condition (4.5) that α′⊥Γ
β⊥ has full rank. If this matrix has reduced rank we get the possibility of ﬁnding processes that are integrated of order
higher than one. We here focus on I(2) since it seems that higher orders of integration than two are not so important
for the type of macro economic data that we have in mind. The result is taken from Johansen (1992a).
We have seen that for I(2) processes we can have vectors that reduce the order of integration of the process from two
to one, and linear combinations that cointegrate with the differences of the process. These linear combinations can be
expressed in terms of the parameters α, β, and Γ, but in order to do so we need some notation. If α′⊥ Γ β⊥ has reduced
rank s it holds that


for some ξ and η of dimension (p − r) × s, and rank s, with s < p − r. We then decompose α⊥ and β⊥ as follows




Thus (α, α1, α2) is of full rank p and α, α1, and α2 are mutually orthogonal. The same holds for (β, β1, β2). The directions
given by (β, β1, β2) express the different types of cointegration that are possible for I(2) variables. The following
relations can easily be veriﬁed since α′⊥α⊥ = (α′⊥ α⊥)−1
58                                               Cointegration and Representation


We also ﬁnd



We need a special notation for the matrix




since it will appear in the conditions below. With this notation we then formulate a representation theorem for I(2)
variables which is an analogue of Theorem 4.2 for I(1) variables.
THEOREM 4.6 Assume that |A(z)| = 0 implies that |z| > 1 or z = 1, and that



                                                                                                                                   (4.25)



                                                                                                                                   (4.26)
Then a necessary and sufﬁcient condition that the processes Δ2Xt, β′1 Δ Xtand β′ Xt − α′ Γ β2β′2Δ Xtcorrected for their means can be
made I(0) is that




                                                                                                                                   (4.27)
has full rank. In this case the process Xthas the representation




                                                                                                                                   (4.28)
where




The coefﬁcients A and B depend on the initial conditions and satisﬁes (β, β1)′ B = 0 and β′ A − α′ Γ β2β′2B = 0.
Thus Xtis an I(2) process and the vectors (β, β1) are cointegrating vectors that reduce the order from 2 to 1. Finally Xtallows polynomial
cointegration since β′ Xt − α′ Γ β2β′2 Δ Xtcorrected for its mean can be made I(0). The function C2(z) satisﬁes
                                            Cointegration and Representation                                       59




                                                                                                                (4.29)
and has a convergent power series for |z| < 1 + δ for some δ > 0.
PROOF We set Φ = 0 without loss of generality. The idea is to apply Theorem 4.2 to the variables


                                                                                                                (4.30)
which, if the theorem is correct, will be I(1). Thus we want to show that the process               is an I(1) process
under the conditions stated, and we therefore want to derive the autoregressive representation for this process from
(4.24). Just as for the proof of Theorem 4.2 we expand the polynomial A(z) around the point z = 1 and ﬁnd the
derivatives




Then



where A*(z) is a suitable polynomial. From (4.30) we ﬁnd




Equation (4.24) can be expressed as



If we multiply by (α, α1, α2)′ and insert the expressions for Δ Xt and Δ2Xt in terms of Zt, Vt, and Ut we ﬁnd




                                                                                                                (4.31)
60                                         Cointegration and Representation


Here A**(L) is a polynomial which collects the remaining terms. In a different notation this is written



Notice that the coefﬁcient α′Γ β2 now appears as a coefﬁcient to levels, and α′Ψ β2 is a coefﬁcient to differences since Ut
is deﬁned in terms of differences of Xt. In order to discuss as an I(1) system we note that the levels matrix, , is of
reduced rank and hence can be written as             , where




Next we want to check the conditions for the application of Theorem 4.2. The transformation from Xt to involves
a matrix of the form (β, β1, (1 − L)β2), which has only unit roots. Thus  has the same roots outside the unit circle as
the process Xt. What remains is to see that condition (4.5) is satisﬁed for . We ﬁnd




This has full rank if and only if the matrix α′2θ β2 = α′2Γ βα′Γ β2 + α′2Ψ β2 has full rank. Thus condition (4.27) is a
necessary and sufﬁcient condition for       to be I(1) and hence Xt to be I(2). Note that a consequence of applying
Theorem 4.2 is that     cointegrates in the sense that Zt − α′Γ β2Ut = β′Xt − α′Γ β2β′2Δ Xt is stationary. That is, what is
polynomial cointegration for Xt is usual cointegration for . The process         has a representation of the form (4.6)




with




Thus we ﬁnd the representations
                                                Cointegration and Representation                                                      61


where Ãz, Ãv, and Ãu depend on the initial conditions, such that                    . Notice that the expression for Xt in
terms of (Zt, Vt, Ut) involves the cumulated values of Ut. This means that the initial value Ãu is multiplied by t, and we
ﬁnd B = β2Ãu and                        such that (β, β1)′ B = 0 and



We now want to ﬁnd the properties of the matrices C1 and C2 as indicated in the theorem. The matrix C2 is found as the
coefﬁcient to     in Ut, that is,



The matrix C1 is more complicated. In the direction β2 the process is dominated by the cumulated random walk from
the ε and the next term involving C1 times a random walk plays little role. In the directions β, and β1, however, the term
involving the cumulated random walk cancels since (β, β1)′C2 = 0, and the process is dominated by the next term,
which is found from the expressions for Zt and Vt. We ﬁnd




From the representation (4.28) we ﬁnd that, for Φ = 0,



and hence



which implies (4.29).
                                                                                                                                       □
COROLLARY 4.7 Under the assumption that |A(z)| = 0 implies that |z| > 1 or z = 1, the number of unit roots is greater than or
equal to 2(p − r) − s where r = rank(Π), which deﬁnes α and β, and s = rank(α′⊥ Γ β⊥). Equality holds if and only if the process is
I(0), I(1), or I(2). If equality holds then Xtis I(0) if r = p, I(1) if r < p and s = p − r, and ﬁnally Xtis I(2) if r < p and s < p − r.
PROOF The construction of                       removes p − r − s unit roots from Xt. The AR process              has by
Corollary 4.5 at least p−rank( ) = p − r unit roots. Thus the total number of unit roots of Xt is p − r − s + p − r = 2(p
− r) − s.
62                                          Cointegration and Representation


If equality holds then has p − r unit roots and hence is an I(0) process if r = p, in which case s ≤ p − r = 0, such that
β1 = β2 = 0 and also         is I(0). If r < p then     is an I(1) process and so is Xt if s = p − r which implies β2 = 0.
Finally if r < p and s < p − r then       is I(1) and Xt is I(2).
                                                                                                                        □


4.4 Exercises
4.1
Consider the system



                                                                                                                    (4.32)


                                                                                                                    (4.33)
     1. Find the matrices α, β, Π, C, and Γ expressed in terms of the new parameters α1, β2, and μ. Note the two cases,
        α1 = 0 and α1 ≠ 0.
     2. Find the representation of Xt in terms of εi, i = 1, . . . , t and ﬁnd E(Xt|X0) and Var(Xt|X0).
     3. Calculate the roots of the characteristic polynomial. Under what condition on the parameters is the process Xt
        an I(1) process? If the process is not I(1) what is it then?
     4. Show explicitly from (4.32) and (4.33) without using Granger's representation that β′Xt is stationary if −2 < α1 <
        0.
     5. Under what condition on the parameters is there no linear trend.
     6. If we add a linear term η1t and η2t to (4.32) and (4.33) respectively, show that Xt has a quadratic trend.
     7. Under what condition does the quadratic trend disappear?


4.2
Granger's theorem is formulated for a characteristic polynomial A(z) with A(0) = I.
Find the conditions for the process to be I(1) as expressed by A(0), A(1), and A(1) when A(0) has full rank even if
A(0) ≠ I.


4.3
Under the assumptions of Theorem 4.2 show that for the model



the matrix β′α has full rank, and has eigenvalues in {z : |z + 1| < 1. Show that α′⊥Xt is non-stationary. Next consider
the example
                                           Cointegration and Representation                                    63


Show that in this case α⊥ = β, such that α′⊥Xt is stationary.

4.4
Consider the equations




  1. Deﬁne in this case the characteristic polynomial A(z) as




      and note that A(0) is not the identity (see exercise 4.2), and show that




  2. Show that Π = − A (1) has reduced rank and ﬁnd α and β such that Π = α β′. Find the matrix Γ.
  3. Show that α′⊥ Γ β⊥ = 0, such that the process Xt is not I(1).
  4. Show that if we deﬁne




     then Yt is I(1).
  5. Find the cointegrating relations between Y1 and Y2. What are they expressed in terms of X1t and X2t?

4.5
  1. In the context of Granger's theorem show that for the process




      the stationary process β′ Xt has mean given by



                                                                                                            (4.34)
     where C = β⊥ (α′⊥ Γ β⊥)−1 α′⊥ and α = α (α′ α)−1.
  2. Calculate E(β′ Xt) in the case where Γ1 = Γ2 = ⋯ = Γk − 1 = 0. Consider in the following the process




  3. Find E(β′ Xt) as a function of μ1 and μ2.
64                                          Cointegration and Representation


     4. Draw in a two-dimensional coordinate system (X1t, X2t) a typical example of the behaviour of the process in each
        of the cases μ′ = (0, 0), μ′ = (−1, 1) and μ′ = (1, 1).
          Comment: the decomposition



          decomposes μ into two components, the ﬁrst can be given the following interpretation: the agents react to a
          disequilibrium as measured by the deviation of



          from zero. One could call the relation



          the revealed target. The strength of the reaction is measured by the coefﬁcients α. The actual process β′ Xt
          ﬂuctuates around its mean as given above in (4.34). Thus the actual behaviour results in a path that deviates
          from the target relation. The difference is given by α′ Γ C μ.

4.6
Consider the processes deﬁned by the equations




     1.   Find the characteristic polynomial and its roots.
     2.   Find the matrices Π, Γ, α, β, α⊥, and β⊥.
     3.   Check that Π has reduced rank and ﬁnd the condition for α′⊥ Γ β⊥ to have reduced rank.
     4.   Find in this case (α, α1, α2) and (β, β1, β2) and show that




          What is C1? When does the quadratic trend disappear?


4.7
Consider the model




     1. Show that the conditions from Granger's Theorem, (4.4) and (4.5), are given by
                                             Cointegration and Representation                                                65




                                                                                                                         (4.35)
  2. Consider next the model



       and deﬁne Π = − I + Π1 + Π2 and Γ = I + Π2. The conditions are now




                                                                                                                         (4.36)
       Now rewrite the model as




       Show that the matrix        has reduced rank             and that




       such that condition (4.36) reduces to condition (4.35) for the companion matrix.

4.8
An extension of Granger's Theorem.
Let                 be the characteristic polynomial of the p-dimensional autoregressive process Xt. We assume that
|A (z)| = 0 implies that |z| > 1 except for s distinct points z = (z1, . . . , zs), where |zi| ≤ 1, i = 1, . . . , s and want to
ﬁnd an expression for A−1 (z). We deﬁne z0 = 0 and the polynomials




  1. Show that




  EXERCISE 4.1 2. Prove the representation




                                                                                                                         (4.37)
66                                              Cointegration and Representation


         where A* (z) is a polynomial, and show how this representation gives rise to an error correction formulation of
         the model for Xt. [Hint: consider the polynomial




        and check the values for z = z0, z1, . . . , zs.]
     3. Show that for m = 0, . . . , s




     4. Consider the special case where z = 1 is the only root with absolute value ≤ 1, and deﬁne z0 = 0, z1 = 1 and let
        A(1) = α β′, and note that A (0) = I. Find the error correction model for this case.
     5. Consider next the case where z = 1 and z = −1 are roots and choose z0 = 0, z1 = 1, z2 = −1 and deﬁne
        A (1) = −α1β′1, A (z2) = −α2β′2 and ﬁnd the corresponding error correction model, and Granger's representation.
        Consider again the general situation. Since z1, . . . , zs are roots of the equation |A(z)| = 0 it follows that
        A(zi) = −αiβ′i for some p × ri matrices of full rank, 0 ≤ ri < p, i = 1, . . . , s. Assume further that for i = 1, . . . , s,
        α′i ⊥ Γi βi ⊥ has full rank and deﬁne




     6. Show that




         where                     , can be chosen such that C (z) A (z) = I.
         [Hint: the function A−1(z) is well deﬁned for all points |z| ≤ 1, apart from the points in z1, . . . , zs}. Show that in
         a neighbourhood of zi




         has no pole at z = zi, and hence that
                                        Cointegration and Representation                          67


      has a convergent power series.] (Hylleberg et al.(1990), Johansen and Schaumburg (1996).)

4.9
Let the univariate process be deﬁned by the equations



for some π in the interval −2 < π < 0, and deﬁne the correlation



Show that

4.10
Consider the usual model



where εt have variance Ω, and deﬁne the matrices




  1. Show that




      such that




  2. Use these results to show that
68                                          Cointegration and Representation


4.11
Consider the equation



                                                                                                                    (4.38)
     1. Introduce             and use Σ00 = α Σβ β α′ + Ω to reduce (4.38) to




     2. Show that if ρ solves



        then




4.12
Consider the model



     1. Show that




     2. Show that if the roots of the characteristic polynomial are either greater than 1 in absolute value or equal to 1,
        and if α′⊥β⊥ has full rank then I + β′α has eigenvalues in the unit circle and we can deﬁne




        which makes β′Xt a stationary process.
     3. Show that this relation implies that Δ Xt = C (L) εt, where



        and show that



     4. Deﬁne Σβ β = Var (β′ Xt) and show that
                                         Cointegration and Representation                                           69



      Show that



      and that




      and




  5. Next show that



      [Hint: it pays to show that




4.13
Let




  1. Find the characteristic polynomial and its roots. Find Π, Γ, α, β, α⊥, β⊥ and check the rank condition for I(2).
  2. Find (α, α1, α2) and (β, β1, β2) and the representation of (Yt, Xt) as a function of the initial values and the ε.
            5 The I(1) Models and Their Interpretation
In this chapter we consider model (4.1) with deterministic terms Dt




                                                                                                                      (5.1)
We deﬁne in section 5.1 the basic reduced form error correction model for cointegration in terms of a reduced rank
hypothesis on the matrix Π = α β′ which deﬁnes the cointegrating vectors β and adjustment coefﬁcients α. The
parameters α and β are not identiﬁed and this is discussed in section 5.2, where a convenient normalization is
suggested. In section 5.3 we discuss the hypotheses that can be formulated in terms of linear restrictions on β and
formulate the identiﬁcation problem for cointegrating relations. In section 5.4 similar hypotheses are formulated in
terms of the adjustment coefﬁcients. One can formulate quite general hypotheses about the coefﬁcients, and we give in
section 5.6 a formulation of the hypothesis of Granger non-causality. In section 5.7 we show how the deterministic
terms can give rise to a number of different models describing different properties of the process, depending on
restrictions on the deterministic terms like constant and linear drift terms. Finally the role of intervention dummies is
discussed in section 5.8.


5.1 The I(1) Models for Cointegration
DEFINITION 5.1 The I(1) model H (r) is deﬁned as the submodel of the VAR we obtain under the reduced rank condition


where α and β are p× r matrices. The reduced form error correction model is




                                                                                                                      (5.2)
where the parameters (α, β, Γ1, . . . , Γk − 1, Φ, Ω) vary freely.
                                       The I(1) Models and Their Interpretation                                          71


Note that the parameter space allows for all kinds of non-stationarity, and that the full rank condition (4.5) for I(1) is
satisﬁed for all but a set of Lebesgue measure zero. Thus in this sense ‘most’ of the parameter values in the I(1) model
correspond to I(1) variables. This means that the estimates derived without the restrictions (4.5) will automatically
satisfy the condition. We also leave out the assumption that the roots should be outside the unit circle or at 1, since this
condition is difﬁcult to handle analytically. Fortunately it happens most often that the estimates of the roots have the
proper position, and if they do not it is an important piece of information to get.
The I(1) model H(r) can be formulated as the condition that the rank of Π is less than or equal to r. This formulation
shows that I(1) models form a nested sequence of models



where H (p) is the unrestricted VAR model or the I(0) model, and H (0) corresponds to the restriction Π = 0, which is
just the VAR model for the process in differences. The models in between, H (1), . . . , H (p − 1), ensure cointegration
and are the models of primary interest to us here. Note that a different formulation would be to deﬁne H0 (r) as the
hypothesis that rank (Π) = r. In this way the models H0 (r), r = 0, 1, . . . , p are no longer nested. We prefer the
formulation in terms of nested hypotheses but the problem reappears in Chapter 12, where the rank is being
determined.
The formulation allows us to derive likelihood ratio tests for the hypothesis H (r) in H (r + 1) and H (r) in the
unrestricted model H (p). These procedures can then be applied to check if ones prior knowledge of the number of
cointegrating relations is consistent with the data, or alternatively to construct an estimator of the cointegrating rank.
Vector autoregressive models in levels have been applied to describe stationary processes and for I(1) variables the
VAR model in differences was often applied. The cointegration models give a nested sequence of models between the
VAR in levels and the VAR in differences and give the possibility to investigate the coefﬁcient matrix Π as to the
information it may convey concerning long-run information in the data.


5.2 The Parametrization of the I(1) Model
The β vectors are the cointegrating vectors and β′Xt is the disequilibrium error. The coefﬁcients α measure the
adjustment to past equilibrium errors once these have been uniquely deﬁned.
The parameters α and β in (5.2) are not uniquely identiﬁed in the sense that given any choice of α and β and any non-
singular matrix ξ (r × r) the choice α ξ and β (ξ′)−1 will give the same matrix Π and hence determine
72                                       The I(1) Models and Their Interpretation


the same probability distribution for the variables. One way of expressing this is to say that what the data can
determine is the space spanned by the columns in β, the cointegrating space, and the space spanned by α, the
adjustment space.
In general the only functions of α and β that can be estimated are those that can be expressed as functions of the
matrix Π. If Π has rank r, then the space spanned by the rows, the cointegrating space, is r-dimensional. Any two
coordinate systems in this space, i.e. any two choices of β are related by a non-singular transformation ξ (r × r), i.e. β1 =
β2 ξ. In order that f(β) be estimable it must take the same value for all choices of the coordinate system in the row space
spanned by Π. Hence the functions that can be estimated must satisfy



If we choose a matrix c (p × r) and assume that c′ β has full rank we deﬁne βc = β (c′ β)−1 such that β has been
normalized by c, i.e. c′ βc = I. It is easily checked that



such that the function f(β) = βc is estimable. Hence βc is one way of identifying the coefﬁcients using zero
restrictions and normalizations as speciﬁed by the columns of c. If in particular Xt = (X′1t, X′2t)′, c = (I, 0)′ and β = (−β′1,
β′2)′, then βc = (I, − (β′1)−1 β′2)′ = (I, − B)′ corresponding to solving the relations β′ Xt for the ﬁrst r components of Xt,
that is, X1t = B X2t. Another way of uniquely identifying β would be to impose different restrictions on the individual
relations, see (5.6), or even cross-equation restrictions.
It is important to emphasize that one cannot estimate the individual coefﬁcients of β unless one speciﬁes a
normalization or identiﬁcation. This is obvious for r = 1, where estimation of a single coefﬁcient has no meaning, but
where the estimation of the ratio of two coefﬁcients is what one is interested in. For r > 1 the situation is somewhat
more difﬁcult. It must be emphasized too that even though one cannot estimate individual coefﬁcients without
identifying the system, it is nevertheless possible to test some hypotheses on the parameters without necessarily
identifying the system ﬁrst. This is discussed in the next section.


5.3 Hypotheses on the Long-Run Coefcients β
We here formulate some natural questions concerning the cointegrating vectors β, and show how they can be
formulated in terms of linear restrictions on β.
                                       The I(1) Models and Their Interpretation                                         73


In order to formulate the relevant questions it is useful to have an example and we consider the ﬁrst illustrative
example with the variables: mt, log real money, yt, log real income, and two interest rates: a deposit rate and a bond
rate .
It seems a natural hypothesis that in the long-run relation the velocity of money is a function of the interest rates. This
can be formulated as the hypothesis that the cointegrating relation only contains mt and yt through mt − yt, or in other
words that the coefﬁcients to money and income add to zero. For R′ = (1, 1, 0, 0) the restriction that the coefﬁcients to
m and y are equal with opposite sign can be expressed as the indirect parameterization R′β = 0. For the analysis that
follows in later sections it is convenient to express these restrictions in the direct parametrization in terms of H = R⊥:



                                                                                                                      (5.3)
where H(p × s) is known and ϕ(s × r) is the parameter to be estimated. For R = (1, 1, 0, 0)′ the matrix H is given by




such that Hϕ = (ϕ1, −ϕ1, ϕ2, ϕ3)′. The condition can also be expressed geometrically as a restriction on the
cointegrating space sp(β):



In other words, whereas the restriction Π = α β′ gives rise to estimation of an r-dimensional subspace chosen in Rp,
then the restriction (5.3) restricts the subspace to lie in the given subspace sp(H) of Rp.
Note that this hypothesis about the coefﬁcients can be formulated without ﬁrst identifying the cointegrating relations,
since it is formulated as a restriction that holds for all vectors in sp(β).
The hypothesis that only the interest differential        enters the longrun relation can be expressed as (5.3) with the
choice




If our hypothesis is that, say, the long bond rate is excluded from the cointegrating relations this can be formulated as
(5.3) using
74                                        The I(1) Models and Their Interpretation




Another question of interest is whether velocity, as measured by mt − yt is stationary, that is, if the vector b′ = (1, −1,
0, 0) is a cointegrating vector. More generally one can consider a given set of s vectors b (p × s) and ask if they belong to
the cointegrating space. This can be expressed as



                                                                                                                              (5.4)
where the p × (r − s) matrix φ, containing the remaining r − s cointegrating vectors, is to be estimated.
This hypothesis can also be expressed as



Thus natural economic questions can be formulated as simple linear restrictions on the cointegrating space.
Note that (5.4) can be used to formulate the hypothesis that one of the components of the vector Xt is in fact
stationary. If for instance we take b′ = (0, 0, 1, 0), then hypothesis (5.4) speciﬁes that the short-term interest rate is
stationary. Thus the question of stationarity of individual series can be formulated in a natural way in terms of
parameters in the multivariate system, and is a hypothesis that is conveniently checked inside the model rather than a
question that has to be determined before the analysis starts. Thus one can include in the cointegration analysis the
variables that are considered economically meaningful as long as they are I(1) or I(0). By including a stationary variable
in the vector Xt we add an extra cointegrating vector, that is, an extra dimension to the cointegrating space. It is this
possibility to have unit vectors as cointegrating vectors that forces us to have a deﬁnition of I(1) that allows both I(1)
and I(0) components.
Finally we consider a general hypothesis of the form



                                                                                                                              (5.5)
where for i = 1, 2, Hi is p × si, and ϕi is si × ri, with ri ≤ si ≤ p and r1 + r2 = r. In other words we impose p − s1 restrictions
on one set of cointegrating vectors and p − s2 on the remaining vectors.
This hypothesis contains the previous ones as special cases. First let r2 = s2 = 0, and H1 = H, then (5.5) reduces to (5.3).
Next let H1 = b, and choose s1 = r1 = s, and s2 = p, and H2 = I. Then the ﬁrst set of vectors, H1ϕ1, will just give the vectors
in b, and the second set is unrestricted.
The geometric formulation of the hypothesis is that
                                         The I(1) Models and Their Interpretation                                               75


is of dimension at least ri, i = 1, 2, or in other words that there are at least ri of the cointegrating relations that satisfy the
restrictions expressed by Hi or rather (Hi)⊥. As an example of such a hypothesis consider the case r = 2, and the
hypotheses that mt and yt cointegrate. This hypothesis can be formulated as the existence of a cointegrating vector of
the form (ϕ1, ϕ2, 0, 0) for some ϕ1 and ϕ2. For this case we would take




such that r1 = 1, s1 = 2, r2 = 1, and s2 = 4.
Note that (5.5) can be used to formulate linear restrictions on the various cointegrating relations, and is thus a
formulation of the general problem of specifying identifying and over-identifying restrictions in structural equations.
To be speciﬁc let r = 2 and deﬁne the identifying restrictions on the cointegrating vectors by the restrictions R′1β1 = 0
and R′2β2 = 0. Then we deﬁne Hi = Ri⊥, i = 1, 2, and formulate the estimation problem as that of estimating β1 and β2
under the constraint (5.5). This then is the estimation problem for structural long-run relations with individual linear
restrictions.
In the second illustrative example we can consider the hypothesis that the real exchange rate                       is a
stationary relation. This can clearly be formulated as (5.4) with sp(1, −1, −1, 0, 0) ∈ sp (β). If this fails we can ask
another question, namely whether there is a cointegrating relation between        , and excht, and another between the
interest rates. This can be formulated as (5.5) with




One can of course generalize the above hypothesis to involve more than two types of restrictions, see (5.6). If we have
r cointegrating relations we naturally want to identify them as economically meaningful relations. This is usually
formulated by restricting the coefﬁcients in each relation by linear restrictions. Thus let Ri be the restrictions on the ith
cointegrating relation, i.e. R′iβi = 0. With Hi = Ri⊥ one can write this hypothesis as



                                                                                                                             (5.6)
where each ϕi is si × 1.
The rank condition applied to this problem states that as long as there
76                                       The I(1) Models and Their Interpretation


are no further identifying conditions on the parameters of the model then βi is identiﬁed if and only if the parameters
satisfy the conditions



Since the true parameter value is unknown this condition is usually interpreted as follows, see Fisher (1966): for each i
we deﬁne a polynomial, which for i = 1, say, becomes



A polynomial is either identically equal to zero, in which case the rank condition fails for any parameter value, or is
zero on a very small set (of Lebesgue measure zero). In this case ‘most’ parameter values are identiﬁed. One can say
that in this case the cointegrating relations are generically identiﬁed. Note that the property of being generically
identifying is a property of the restrictions, not the parameter value, and is hence a property of the statistical model, as
speciﬁed by (5.1) with the restrictions imposed. An algebraic condition for generic identiﬁcation is given in Johansen
(1995b), expressed as a set of necessary and sufﬁcient conditions for the restrictions R1, . . . , Rr to be identifying. The
conditions involve checking the rank of certain matrices, depending on R and H. Thus in particular for r = 3 the
conditions become



The parametrization (5.6) only determines the parameters ϕ1, . . . , ϕr up to a constant factor, and it is customary to
normalize βi as follows:



where ψi is now (si − 1) × 1, hi is a vector in sp(Hi), and sp(hi, Hi) = sp(Hi). Usually hi is a unit vector and Hi has zeroes in
the corresponding row, such that βi is normalized on one of the coefﬁcients. Thus for instance if we consider the above
example with prices, exchange rate and interest rates, and we want to normalize on the coefﬁcient to pau and iau then we
choose




Even though the classical rank condition solves the problem of identiﬁcation there still remains the empirical problem
of testing that the true parameter
                                        The I(1) Models and Their Interpretation                                            77


does not actually correspond to one of the exceptional points where the rank condition fails to hold. As an example
consider the following situation, where p = 4 and r = 2 and β is given by




The rank condition is satisﬁed if R′1β2 = (ϕ4, ϕ5)′ ≠ (0, 0)′ and R′2β1 = ϕ2 ≠ 0. This condition holds in general, that is, in
the ﬁve-dimensional parameter space for (ϕ1, ϕ2, . . . , ϕ5). The set where ϕ4 = ϕ5 = 0 or ϕ2 = 0 is a very small subset.
But in an analysis of a given data set it may hold that, say, ϕ2 is not signiﬁcantly different from zero, and hence a test
that ϕ2 = 0 will reveal that the identiﬁcation rests on an assumption that is not sustained by the data. A general
formulation of this is that if a submodel, given by further restrictions, is accepted by the data, and if this submodel is
not identiﬁed, then the true parameter corresponds to one of the exceptional points where the rank condition fails.
Such a general problem is difﬁcult to formulate and solve, and we shall instead give another formulation that allows a
simple answer, but still solves the basic problem, see Boswijk (1995).
In order to formulate this solution consider the situation where we assume that rank(R′1β) < r − 1, such that a linear
combination of β2, . . . , βr satisﬁes the restrictions given by R1 and hence is contained in the space spanned by H1. This
situation can be formulated as the hypothesis



                                                                                                                          (5.7)
where ϕ1 is s1 × 2 and ϕ2 is p × (r − 2). If this hypothesis is rejected then clearly it will also be rejected if further
identifying restrictions are enforced upon β3, . . . , βr, and hence the relation deﬁned by R′1β1 = 0 is identiﬁed. This
hypothesis, however, is of the form (5.5), and will be analysed in Chapter 6.
If it is accepted one can achieve two cointegrating relations which satisfy R′1β1 = 0 and R′1β2 = 0. This shows that R1
does not identify a relation if the remaining cointegrating vectors vary freely. This type of restrictions is treated in detail
in Johansen and Juselius (1990), (1992), and (1994).


5.4 Hypotheses on the Adjustment Coefcients α
The natural question to ask about the adjustment vectors is whether the coefﬁcients in α are zero for a certain subset
of equations. This hypothesis means that the subset of variables is weakly exogenous, for the long-run parameters and
the remaining adjustment parameters, see Chapter 8. Thus if
78                                    The I(1) Models and Their Interpretation


for instance r = 1 one can ask if the equations for income and interest rates contain any information on the
cointegrating vector. If not the analysis can proceed conditional on current values of , and . The hypothesis can
be formulated as a linear restriction on the columns of α as follows



                                                                                                                  (5.8)
where A is (p × m) and known and ψ is the (m × r) parameter to be estimated.
If r = 1, we formulate the weak exogeneity of       , and    as




The geometric formulation is




Note that zeros in a row of α means that disturbances from this equation cumulate to a common trend since α⊥
contains the corresponding unit vector. In view of the interpretation of α⊥ as the coefﬁcients of the common trends it
seems natural to impose also linear restrictions on the common trends. Such a hypothesis can be formulated as



                                                                                                                  (5.9)
or geometrically




This statement, however, is equivalent to



Thus we are back in the formulation of the type (5.4), namely that certain vectors of α are assumed known.
Hypotheses on α and in particular the coefﬁcients of α⊥ have been studied by Warne (1993), with the purpose of
identifying structural shocks. Such hypotheses as well as hypotheses on weak exogeneity are in general not invariant to
an extension of the information set and should thus be interpreted within a given information set.


5.5 The Structural Error Correction Model
Even though the purpose of an econometric analysis is to ﬁnd a good structural model we discuss this rather brieﬂy
and refer to the book by
                                       The I(1) Models and Their Interpretation                                         79


Banerjee et al. (1993) for a more comprehensive treatment.
Multiplying equation (5.2) by a matrix      gives the structural error correction model




                                                                                                                    (5.10)
where           is Gaussian                        .
Note that the parameter β is the same as in (5.2) but that all the other coefﬁcients have changed. In order that the
parameters



be identiﬁed one can impose restrictions on the coefﬁcients



                                                                                                                    (5.11)
Such restrictions are of course well known from econometric textbooks, see Fisher (1966), and the usual rank
condition again applies, as well as the formulations in connection with the identiﬁcation of β.
Note that if Π* = α*β′ then the hypothesis of cointegration is a cross-equation restriction on the coefﬁcients of Π* and
a linear hypothesis on β is in general a non-linear restriction on Π*.
The conclusion of this is that the presence of non-stationary variables allows two distinct identiﬁcation problems to be
formulated. First the long-run relations must be identiﬁed uniquely in order that one can estimate and interpret them
and then the short-run parameters ϑ must be identiﬁed uniquely in the usual way. See Johansen and Juselius (1992) for
an empirical investigation involving both identiﬁcation problems, and Hendry (1995) for a discussion of many aspects
of the identiﬁcation problem.
The cointegration analysis allows us to formulate long-run relations between variables, but the structural error correction
model formulates equations for the variables in the system. Thus if r = 1 in the example with money, income, and interest
rates we can think of the cointegrating relation as a money relation if we solve it for money, but the equation for Δ mt in
the structural model is a money equation and models the dynamic adjustment of money to the past and the other
simultaneous variables in the system.


5.6 General Hypotheses
It is easy to formulate simultaneous linear restrictions on α and β of the type considered above. This allows for
instance an estimation of β under linear restrictions when weak exogeneity is imposed. This has been formulated in
Johansen (1991b).
80                                    The I(1) Models and Their Interpretation


As an example of a complicated model, where something still can be said, consider the hypothesis of neutrality as
formulated by Mosconi and Giannini (1992). The hypothesis can be deﬁned by splitting Xt into X1t and X2t of
dimensions p1 and p2 respectively. The hypothesis of neutrality then says that Π21 = 0. In the presence of cointegration
this can be formulated as




This can be satisﬁed if either α2 = 0, or β1 = 0 or if the rows of α2 are orthogonal to those of β1. A direct
parametrization is given by




or




Another example is given in Johansen and Swensen (1994) where some simple rational expectation models are treated.
Let the expectation equation be formulated as



for some ﬁxed and known matrices d and c, and let the process be governed by the equations



For the expectation equation to be consistent with the model for the data the parameters have to be restricted as



This submodel allows an explicit solution, see exercise 6.3.


5.7 Models for Deterministic Terms
In this section we consider various choices of the deterministic terms Dt, and discuss the interpretation of restrictions
on the coefﬁcients.
It follows from Granger's theorem (Theorem 4.2) that the solution Xt to (5.1) under condition (4.5), has the
representation




                                                                                                                   (5.12)
where C = β⊥ (α′⊥ Γ β⊥)−1 α′⊥. This shows that the process Xt in general has a deterministic trend of the form
               . We use
                                       The I(1) Models and Their Interpretation                                          81


Table 5.1 The Relation Between the I(1) Models Deﬁned by Restrictions on the Constant and the Linear Drift Terms



   ∪                                               ∪                                               ∪

   ∥                                               ∪                                               ∪

   ∪                                               ∪                                               ∪


   ∥                                               ∪                                               ∪




the following notation: the deterministic term Dt is called a drift term whereas the deterministic term in the expression
for Xt is called a trend. Thus a constant drift term in the equation will generate a linear trend term in the process, and a
linear drift term in the equation will generate a quadratic trend term in the process via Granger's representation
theorem, see Johansen (1994).
We consider for illustrative purpose in detail the situation where Φ Dt = μ0 + μ1t. It follows from the representation
(5.12) that the quadratic trend has a coefﬁcient       , that is, μ1 enters into Xt only through Cμ1, that is, through the
combination α′⊥μ1. If μ1 = 0 then μ0 enters the linear trend only through Cμ0. Thus the behaviour of the deterministic
trend of the process Xt depends on the relation between C and μi, or whether α′⊥μi is zero or not. In order to discuss
this we decompose the parameters μi in the directions of α and α⊥ as follows:



and let μt = μ0 + μ1t denote the deterministic part of the model. Thus ρi = (α′α)−1 α′μi and γi = (α′⊥ α⊥)−1 α′⊥μi. We then
deﬁne a number of nested sub-models of the general model derived from (5.1) under the assumption of cointegration,
and with successive restrictions on the deterministic part of the process:



                                                                                                                     (5.13)

                                                                                                                     (5.14)

                                                                                                                     (5.15)


                                                                                                                     (5.16)

                                                                                                                     (5.17)
Model H(r): the model is given by μt = μ0 + μ1t, and Xt has the representation
82                                      The I(1) Models and Their Interpretation




                                                                                                                       (5.18)
where Yt = C (L) εt, and C = β⊥ (α′⊥Γ β⊥)−1 α′⊥. Thus the process allows for a quadratic trend determined by



                                                                                                                       (5.19)
Note, however, that the linear combinations β′ Xt have no quadratic trend, since β′C = 0. Thus the quadratic trend can
be eliminated by the linear combinations β, but β′ Xt still has a linear trend.
Model H*(r): this model is given by μt = μ0+α ρ1t, and is characterized by the absence of the quadratic trend since α′⊥
μ1 = 0 or γ1 = 0 and hence τ2 = 0. It still allows the possibility of a linear trend in all components of the process, a trend
which cannot be eliminated by the cointegrating relations β. Thus a linear trend is allowed even in the cointegrating
relations, each of which therefore represents a stationary process plus a linear trend or a trend stationary process. In
particular if a unit vector is cointegrating then the corresponding component of Xt is trend stationary. The expression
for the linear trend τ1 when μ1 = α ρ1 can be found to be




                                                                                                                       (5.20)
see exercise 6.1.
Here β = β (β′β)−1, and                  , and Xt has in this case the representation




                                                                                                                       (5.21)
For the present purpose we deﬁne a trend stationary process as a process that can be decomposed into a stationary
process plus a linear deterministic trend. A problem that often faces the econometrician is to make a choice between
describing a given time series as a trend stationary process or an I(1) process plus a linear trend. Since the sample paths
of two such processes observed over a short interval can easily be mistaken, one will expect that the real decision to
choose between the two descriptions should be based on economic insight. In some cases, however, it is of interest to
conduct a statistical test to see if one can make the distinction on the basis of the data.
Model H*(r) allows for r trend stationary variables, and p − r variables that are composed of I(1) variables and a linear
trend. Thus if one wants to test that X1t is trend stationary, one has to check that the unit vector
                                          The I(1) Models and Their Interpretation                                              83


(1, 0, . . . , 0) is contained in the β space, see (5.4). If the hypothesis is rejected, a better description of the variable is as
an I(1) variable plus a trend. For a different formulation of H*(r), see exercise 5.2.
Model H1(r): in this model μt = μ0, such that the process Xt has the form (5.21), that is, it still has a linear trend given by
the coefﬁcients τ1 = Cμ0, but this can be eliminated by the cointegrating relations β, and the process contains no trend
stationary components. Thus the model allows for a linear trend in each variable but not in the cointegrating relations.
Model      : in model       there are no trends whatsoever, since α′⊥μ0 = 0, such that μt = α ρ0, but a constant term is
allowed in the cointegrating relations, and




Another way of formulating model                is as




                                                                                                                            (5.22)
It follows that the equation for Xt is given by



that is, (5.1) with μ1 = 0 and μ0 = −α β′ κ which satisﬁes the condition α′⊥μ0 = 0. Such a formulation gives an easy
interpretation of κ as the level of Xt, but note that the parameter κ is not identiﬁed, since only β′κ enters the model.
This is reasonable since for the non-stationary component, β′⊥Xt, say, the role of the level of the process is taken over
by the initial value β′⊥X0.
Model H2(r): this model does not allow for a constant term which means that all stationary linear combinations will have
mean zero.
In summary we have seen that the role of the deterministic part depends on the relation between α and the coefﬁcients
μ0 and μ1. By restricting the deterministic terms suitably we can use equation (5.1) to generate processes with different
trending behaviour. Not only can we get variables that are integrated of order 0 and 1, but we can also get deterministic
trends of order 0, 1, and 2. The formulation of the different hypotheses as restrictions will allow us to derive likelihood
ratio tests in the next section.
84                                     The I(1) Models and Their Interpretation


5.8 Intervention and Seasonal Dummies
Often the deterministic component Dt in (5.1) contains dummies, either seasonal dummies or intervention dummies.
By applying Granger's representation theorem we can see that the drift term Dt will imply a trend term of the form




                                                                                                                (5.23)
Consider as an example an intervention dummy of the form




In this case       is a broken trend




and




That is, the trend in the process has a broken linear component, as well as a smoothed version of the intervention
dummy. If Dt is a seasonal dummy, then the cumulated seasonal dummy will grow linearly with a slope , whereas the
term C (L) Φ Dt will give rise to a seasonally varying mean.
Thus the inclusion of seasonal dummies is a simple way of allowing for a seasonally varying mean, but one should note
the implications for the linear trend in the process. In practice it is more convenient to orthogonalize the seasonal
dummies on the constant term such that the seasonal dummies sum to zero over a year. In this way the linear term
from the dummies disappears and is taken over completely by the constant term, and only the seasonally varying
means remain.
The expression (5.23) for the deterministic trend can be subtracted from the process Xt and would correspond, in the
present framework, to seasonal correction if Dt are seasonal dummies and detrending if Dt contain a constant.
A systematic theory of dummies is attempted in Johansen and Nielsen (1994), since the presence of dummies
inﬂuences the asymptotic theory as explained in more detail in the following chapters. Mosconi (1993) has investigated
hypotheses about the trend coefﬁcients in CΦ in order to check the presence of a deterministic trend in the individual
series.
                                      The I(1) Models and Their Interpretation                                       85


5.9 Exercises

5.1
A statistical model for a p-dimensional autoregressive process with an intercept can be formulated as the solution of
the equations:



where α and β are (p × r) and m is (p × 1).
  1. Show that this model is a submodel of



     where α and β are (p × r) and μ is (p × 1), with the constraint α′⊥μ = 0, and ﬁnd μ as a function of m.
  2. Show that m is not identiﬁed unless α and β are of rank p.


5.2
A model for a p-dimensional autoregressive process with an intercept and trend can be formulated as the solution of
the equations



where α and β are (p × r) and m0 and m1 are (p × 1).
  1. Show that this model is a submodel of



     where α and β are (p × r) and μ0 and μ1 are (p × 1) with the constraint α′⊥μ1 = 0, and express μ0 and μ1 as
     functions of m0 and m1.
  2. Show that m0 is not identiﬁed unless α and β are of rank p, but that m1 is always identiﬁed.


5.3
Consider the four variables mt, yt, i1t, and i2t, that is, money, income, and two interests rates. We think of the money
equation



and the interest equation



as describing stable economic relations.
86                                     The I(1) Models and Their Interpretation


This hypothesis is formulated in a vector autoregressive model as the statement that the vectors




are cointegrating vectors.
Let us assume that the cointegrating rank is r = 2, and that we, in order to check the restrictions implicit in the above
relations, ﬁrst formulate the hypothesis




     1. Formulate this hypothesis in the form



        and check whether this hypothesis is a restriction on the cointegrating space. Are the equations identiﬁed?
     2. Consider the same questions for




     3. Consider the same questions for




     4. Consider the same questions for




5.4
Consider the model



and assume that all parameters vary freely except for α = Aψ. Show that A′⊥Xt is weakly exogenous for (ψ, β).
The combinations              are the common trends. The hypothesis that the shocks from a given equation, a price
equation say, cumulate to a common trend can be formulated as α⊥ = (a0, ψ), for a suitable unit vector a0. Show that in
this case a′0Xt is weakly exogenous for (ψ, β), see Chapter 8.
                                         The I(1) Models and Their Interpretation                                             87


5.5
In the cointegration model



where ε1, . . . , εT are independent Gaussian Np (0, Ω), we split Xt in X1t and X2t of dimensions p1 and p2 respectively
corresponding to two sub-systems. We want to test if the cointegration in the full system can be expressed by requiring
that the subsystems cointegrate. This is called separate cointegration. The precise deﬁnition is that there exist matrices
β1 (p1 × r1) and β2 (p2 × r2) with r1 + r2 = r, such that the cointegrating relations β′ Xt are linear combinations of β′1X1t and
β′2X2t, that is, that there exist matrices A1 (r × r1) and A2 (r × r2), such that β′ Xt = A1β′1X1t + A2β′2X2t.
  1. Show that this hypotheses can be formulated as one of the hypotheses which is treated in Chapter 5 and discuss
     an algorithm for calculating the maximum likelihood estimator.
  We call the system strongly separated if it is separated and it holds that the equations for Δ X1t contain only β′1X1t−1 and
     the equations for Δ X2t contain only β′2X2t−1.
  2. Formulate this hypothesis as a hypothesis about α and show that even if the system is strongly separated it does
     not hold that X2t is weakly exogenous for β1 (Granger and Konishi 1993).


5.6
Consider the cointegration model




where ε1, . . . , εT are independent Gaussian Np (0, Ω).
  1. Show how the hypothesis that X2 is weakly exogenous for β can be formulated as a hypothesis on α.
     We deﬁne the stochastic trends




  2. Show that the hypothesis that the ﬁrst component of                 is a common stochastic trend can be formulated in
     the form



       and ﬁnd a0.
       Assume that Xt = (pau, pus, exch, iau, ius)t, that is, prices and interest rates in Australia and United States together
       with the exchange rate. We
88                                      The I(1) Models and Their Interpretation


        assume that the cointegrating rank is three, that is, that there are two common trends. We want to investigate if
        there is a stochastic trend that comes from the price variables and the exchange rate (the goods sector) and
        another from the interest variables (the ﬁnancial sector).
     3. Formulate this hypothesis as a hypothesis on α⊥.
            6 The Statistical Analysis of I (1) Models
THIS chapter contains an analysis of the likelihood function of the I(1) models discussed in Chapter 5. The main result
in section 6.1 is the derivation of the method of reduced rank regression which solves the estimation problem for the
unrestricted cointegration vectors, and which solves the problem of deriving a test statistic for the hypothesis of
cointegrating rank. The asymptotic distribution of this test statistic is discussed in Chapter 12, and the way it should be
applied is discussed in Chapter 13.
It turns out that the method of reduced rank regression solves a number of different models deﬁned by various
restrictions on the parameters. We give here the estimator of the unrestricted cointegrating vectors, and show in section
6.2 how it should be modiﬁed if restrictions are imposed on the deterministic terms. In Chapter 7 we discuss the
modiﬁcation needed for the estimation of cointegrating relations, when they are restricted by linear restrictions, and in
Chapter 8 how it should be modiﬁed when α is restricted.


6.1 Likelihood Analysis of H(r)
We deﬁne the reduced from error correction model as given by




                                                                                                                           (6.1)
where εt are independent Np(0, Ω) and (α, β, Γ1, . . . , Γk−1, Φ, Ω) are freely varying parameters.
The advantage of this parametrization is in the interpretation of the coefﬁcients, where the effect of the levels is
isolated in the matrix αβ′ and where Γ1, . . . , Γk−1 describe the short-term dynamics of the process. Sometimes the form




is given, where                      . This reparametrization leads to the same statistical analysis.
In (6.1) we introduce the notation Z0t = Δ Xt, Z1t = Xt−1 and let Z2t be the stacked variables Δ Xt−1, . . . , Δ Xt−k+1, and Dt.
We let Ψ be the matrix of parameters corresponding to Z2t, that is, the matrix consisting of Γ1, . . . , Γk−1, and Φ. Thus Z2t
is a vector of dimension p(k − 1) + m and Ψ is a matrix of dimension p × (p(k − 1) + m).
90                                      The Statistical Analysis of I (1) Models


The model expressed in these variables becomes



                                                                                                                    (6.2)
This is clearly a non-linear regression model where the parameters Ψ are unrestricted and the coefﬁcient matrix to the
levels Z1t is of reduced rank. The analysis of the likelihood function leads to the technique developed by Anderson
(1951) of reduced rank regression. We give the details here since the notation is needed for the asymptotic analysis. The
log likelihood function is given apart from a constant by




The ﬁrst order conditions for estimating Ψ are given by




                                                                                                                    (6.3)
We introduce the notation for the product moment matrices




                                                                                                                    (6.4)
and note that



We write (6.3) as



such that



                                                                                                                    (6.5)
This leads to the deﬁnition of the residuals



                                                                                                                    (6.6)


                                                                                                                    (6.7)
                                           The Statistical Analysis of I (1) Models                                            91


i.e. the residuals we would obtain by regressing Δ Xt and Xt − 1 on the lagged differences Δ Xt − 1, . . . , Δ Xt − k+1, and Dt or
Z0t and Z1t on Z2t. The concentrated likelihood function is




                                                                                                                             (6.8)
see also (A.29). Another way of writing this is as a regression equation in the residuals



                                                                                                                             (6.9)
which would give the same likelihood as (6.8). Thus the parameters Ψ can be eliminated by regression and what
remains in (6.9) is a reduced rank regression as investigated by Anderson (1951).
As a ﬁnal piece of notation consider




                                                                                                                           (6.10)
For ﬁxed β it is easy to estimate α and Ω by regressing R0t on β′ R1t and obtain



                                                                                                                           (6.11)


                                                                                                                           (6.12)
and apart from the constant (2π e)p, which disappears when forming ratios, we ﬁnd



We next rewrite this expression, using the identity




which is discussed in (A.26). Applying the identity to the matrix




we ﬁnd that
92                                     The Statistical Analysis of I (1) Models




                                                                                                               (6.13)
Thus the maximization of the likelihood function is equivalent to the minimization of the last factor of (6.13). This
factor is minimized among all p × r matrices β, by applying Lemma A.8, that is, by solving the eigenvalue problem



or, for λ = 1 − ρ, the eigenvalue problem



for eigenvalues λi and eigenvectors υi, such that



and υj′S11υi = 1 if i = j and 0 otherwise, see Lemma A.8. Note that the eigenvectors diagonalize the matrix    since
                        if i = j and zero otherwise. Thus by simultaneously diagonalizing the matrices S11 and   we
can estimate the r-dimensional cointegrating space as the space spanned by the eigenvectors corresponding to the r
largest eigenvalues. With this choice of we ﬁnd from Lemma A.8, that




                                                                                                               (6.14)
since by the choice of    we have            , as well as                            .
For r = 0 we choose             , and ﬁnd             , and for r = p we can take          , and the estimate of Π is
           . Note that we have solved all the models H(r), r = 0, . . . , p by the same eigenvalue calculation. The
maximized likelihood is given for each r by (6.14) and by dividing the maximized likelihood function for r with the
corresponding expression for r = p we get the likelihood ratio test




The factor |S00| cancels and we ﬁnd the so-called trace statistic
                                              The Statistical Analysis of I (1) Models                                                    93


Under hypothesis H(r) the estimates of β and α are related to the canonical variates between R0t and R1t, and the
eigenvalues are the squared canonical correlations, see Appendix A or Anderson (1984). The estimate of β is given as
the eigenvectors of (6.15), see below, corresponding to the r largest eigenvalues, that is, the choice of is the choice of
the r linear combinations of Xt−1 which have the largest squared partial correlations with the stationary process Δ Xt
after correcting for lags and deterministic terms. We call such an analysis a reduced rank regression of Δ Xt on Xt−1
corrected for (Δ Xt−1, . . . , Δ Xt−k+1, Dt). The results are formulated in Theorem 6.1, where we also give the asymptotic
distributions of the test statistics even though they will be derived in Chapter 12. Note that the estimate of β given here
is the unrestricted estimator, which is relevant if we do not want to impose any restrictions.
THEOREM 6.1 Under hypothesis



the maximum likelihood estimator of β is found by the following procedure: ﬁrst solve the equation



                                                                                                                                       (6.15)
for the eigenvalues                         and eigenvectors                 which we normalize by          .The cointegrating relations are
estimated by



                                                                                                                                       (6.16)
and the maximized likelihood function is found from




                                                                                                                                       (6.17)
The estimates of the other parameters are found by inserting into the above equations, i.e. by ordinary least squares for          .
The likelihood ratio test statistic Q(H(r)|H(p)) for H(r) in H(p), is found by comparing two expressions like (6.17). This gives the result




                                                                                                                                       (6.18)
The likelihood ratio test statistic for testing H(r) in H(r+1) is given by



                                                                                                                                       (6.19)
94                                            The Statistical Analysis of I (1) Models


The asymptotic distribution of (6.18) depends on the deterministic terms present in the model, and is derived in Chapter11. We assume here
that rank (Π) = r.
If μ = 0 we ﬁnd




                                                                                                                                      (6.20)
where F = B is a p − r dimensional Brownian motion. The distribution is tabulated in Chapter15, Table15.1.
If μt = μ0and α′ ⊥ μ0 ≠ 0, the asymptotic distribution is given by (6.20) with F deﬁned by




                                                                                                                                      (6.21)
The distribution is tabulated in Chapter15, Table15.3.
If μt = μ0 + μ1t, and α′ ⊥ μ1 ≠ 0 then F is given by




                                                                                                                                      (6.22)
where the random coefﬁcients a, b, ai, and biare found by regressing u, respectively Bi, on a constant and a linear term. The distribution is
tabulated in Chapter15, Table15.5.
Another way of formulating this basic estimation result is that we have performed a singular value decomposition of
the unrestricted regression estimator          with respect to its ‘covariance matrix’         , that is, of the matrix
            since




which is zero if



which gives λ = ρ/(1 + ρ), where we have used the notation



The normalization                  is convenient from a mathematical point of view but may not be economically
meaningful. It has the advantage that such normalizations can be made without assuming anything about which
variables cointegrate, that is, without normalizing β.
                                         The Statistical Analysis of I (1) Models                                          95


Note that since             we have



Thus the eigenvalues measure the size of the coefﬁcients to the cointegrating relations, and the test statistics can be
interpreted as measuring the ‘length’ of the coefﬁcients measured by   of the supposedly nonstationary components
of Xt.
The calculation of the eigenvalues of equation (6.15) is performed as follows: ﬁrst the matrix S11 is diagonalized by
solving the eigenvalue problem



for eigenvalues ρ1, . . . , ρp and eigenvectors W = (w1, . . . , wp), that is, we have the decomposition



Then we deﬁne                                and solve the eigenvalue problem




for eigenvalues            and eigenvectors U = (u1, . . . , up). Finally we deﬁne the eigenvectors       . Thus we
diagonalize the matrices S11 and           simultaneously by the transformation V. The matrix S11 is reduced to the
identity and          is reduced to              . One could also just say that we ﬁnd the eigenvalues of         ,
but this matrix is not symmetric, hence a different numerical algorithm should be used.
It is sometimes necessary to estimate the orthogonal complements of α and β. This can easily be done by the above
results since




satisfy the relation              . These relations follow from the fact that the eigenvectors υ1, . . . , υp diagonalize both
S11 and           .
Note that the asymptotic distribution of the test statistic λmax in (6.19) is not given here but left as an exercise 11.5 in
Chapter 11. The properties of the test are posed as a problem in Chapter 12.


6.2 Models for the Deterministic Terms
In this section we analyse the hypotheses given by (5.13), . . . , (5.17). The analysis of (5.13), (5.15), and (5.17) is given
in section 6.1 where the analysis
96                                      The Statistical Analysis of I (1) Models


is for a general form of the deterministic term Dt. If we take Φ Dt = μ0 + μ1t we get the analysis of H(r), for Φ Dt = μ0
we get the analysis of H1(r) and ﬁnally H2(r) is analysed with Φ Dt = 0. What remains is to discuss the models with a
restriction on the deterministic terms: H*(r) where α⊥′μ1 = 0 and       where μ1 = 0 and α⊥′μ0 = 0. The analysis is very
similar to the one given in section 6.1 and the new models will not be treated in so much detail.
Consider ﬁrst H*(r) given by (5.14), that is, Π = αβ′, Φ Dt = μ0 + μ1t, and α⊥′μ1 = 0. We note the following relation



                                                                                                                   (6.23)
where we deﬁne β* = (β′, ρ1)′ and            and let    be the stacked variables Δ Xt − 1, .. . , Δ Xt−k+1, 1 whereas
                    . Further we deﬁne Ψ* as the matrix {Γ1, . . . , Γk−1, μ0}. The regression model then becomes



                                                                                                                   (6.24)
It is seen that by this reformulation we can we estimate model H*(r) by reduced rank regression of     on    corrected
for . This deﬁnes residuals            , and product moment matrices . Note in particular that     is p1 × p1, whereas
     is p1 × p and       is p × p as before, with p1 = p + 1.
Thus we solve the eigenvalue problem



for eigenvalues            . Note that          since the matrix            is of dimension p1 × p1, but has rank p, such
that                . The likelihood ratio test of H*(r) in H(r) is calculated from




The hypotheses H*(p) and H(p) are so close that the likelihood function attains the same maximal value, see p.161.
Hence we ﬁnd for r = p that




which shows that




The results are formulated in
                                              The Statistical Analysis of I (1) Models                                                    97


THEOREM 6.2 Under the restrictions Π = αβ′, Φ Dt = μ0 + μ1t, and α⊥′μ1 = 0 the cointegrating vectors are estimated by reduced rank
regression of Δ Xton (Xt − 1, t) corrected for lagged differences and the constant. The likelihood ratio test for the rank of Π, is given by




                                                                                                                                      (6.25)
where solves the eigenvalue problem



                                                                                                                                      (6.26)
for eigenvalues                                    , and eigenvectors            . The estimator for β* is given by                         .
The likelihood ratio test of the restriction α⊥′ μ1 = 0 when there are r cointegrating vectors, that is, of H*(r) in H(r), is given by




                                                                                                                                      (6.27)
where solves (6.15).
The asymptotic distribution of the likelihood ratio test statistic (6.25) is derived in Theorem 11.1, and is given by (6.20) with F deﬁned by




                                                                                                                                      (6.28)
The distribution is tabulated by simulation in Chapter15, Table15.4. The asymptotic distribution of the likelihood ratio test statistic
(6.27) is shown in Corollary 11.2 to be χ2(p − r).
In a completely analogous way we can estimate in the model                     where Φ Dt = μ0 and α⊥′ μ0 = 0. In this case we note
that



                                                                                                                                      (6.29)
For                                      we ﬁnd the reduced rank regression (6.24) again giving rise to new residuals and
product moment matrices            . We formulate the results in
THEOREM 6.3 Under the restrictions Π = α β′ and Φ Dt = μ0and α⊥′ μ0 = 0 the cointegration vectors are estimated by reduced rank
regression of Δ Xton (Xt − 1, 1) corrected for lagged differences. The likelihood ratio test for the rank of Π, when α⊥′ μ0 = 0 is given by
98                                            The Statistical Analysis of I (1) Models




                                                                                                                                    (6.30)
where solves the eigenvalue problem (6.26). The likelihood ratio test of the restriction α⊥′ μ0 = 0 when there are r cointegration vectors,
that is, of H1(r)* in H1(r) is given by




                                                                                                                                    (6.31)
where solves (6.15).
The asymptotic distribution of the likelihood ratio test (6.30) is derived from Theorem 11.1 and is given by (6.20) with F deﬁned by




                                                                                                                                    (6.32)
The distribution is tabulated by simulation in Chapter15, Table15.2.
The asymptotic distribution of the likelihood ratio test statistic (6.31) is shown in Corollary 11.2 to be χ2(p − r).


6.3 Determination of Cointegrating Rank
The problem of determining the cointegrating rank will be discussed in detail in Chapter 12, but we give here some
rules for the application of the results in Theorem 6.1, 6.2, and 6.3.
Consider for simplicity ﬁrst the situation where Φ Dt = 0, that is, there are no deterministic terms in the model. In this
case the test statistic is given by (6.18) where the preliminary regression does not involve correction for any
deterministic terms, since they are not present in the model. The limit distribution of the likelihood ratio test statistic is
given by (6.20) with F = B, and is tabulated in Chapter 15, Table 15.1. The tables are then used as follows.
If r represents a priori knowledge we simply calculate the test statistic Qr = −2log Q(H(r)|H(p)) and compare it with
the relevant quantile in Table 15.1. Note that the tables give the asymptotic distribution only, and that the actual
distribution depends not only on the ﬁnite value of T but also on all the short-term parameters as well as on α and β. If
one wants to be absolutely sure that the quantiles reported are at all reasonable, one would have to supplement the
comparison with the asymptotic tables with a simulation investigation. This will not be attempted here.
A small sample correction has been suggested by Reinsel and Ahn (1992). It consists of using the factor (T − kp)
instead of the sample size T
                                         The Statistical Analysis of I (1) Models                                        99


in the calculation of the test statistic for cointegrating rank. This idea has been investigated by Reimers (1992) and it
seems that the approximation to the limit distribution is better with the corrected sample size. The theoretical
justiﬁcation for this result presents a very difﬁcult mathematical problem, which it would be extremely useful to solve.
A common situation is that one has no or very little prior information about r, and in this case it seems more
reasonable to estimate r from the data. This is done as follows. First compare Q0 with its quantile c0, say, from Table
15.1. If Q0 < c0, then we let   , if Q0 ≥ c0 we calculate Q1 and compare it with c1. If now Q1 < c1 we deﬁne       , and if
not we compare Q2 with its quantile c2, etc. This deﬁnes an estimator which takes on the values 0, 1, . . . , p and which
converges in probability to the true value in a sense discussed in Chapter 12.
Next consider the case Φ Dt = μ0, where μ0 is allowed to vary freely. We see from Theorem 6.1 that the limit
distribution depends on the assumption that α⊥′μ0 ≠ 0.
Sometimes inspection of the graphs shows that the trend is present and we proceed as above and calculate Q0, . . . ,
Qp−1, and compare them with the relevant quantiles from Table 15.3, since now the limit distribution is given by (6.21).
We start comparing Q0 with its quantile and proceed to Q1, etc. This gives the possibility of estimating the value of r.
If it is clear that there is no deterministic trend it seems more reasonable to analyse the model       , and calculate the
relevant test statistic                        . That is, we take the consequence of the assumption that α⊥′μ0 = 0 and
analyse the model thus speciﬁed instead of applying another limit distribution to the previous statistic. That is, we
change the test statistic to reﬂect the hypothesis we are interested in, rather than changing the limit distribution of the
previous statistic.
If we are in the situation that we do not know whether there is a trend or not, we have to determine the presence of
the trend as well as the cointegrating rank at the same time, since the tests are not similar, not even asymptotically, that
is, the distribution and the limit distribution depends on which parameter point is considered under the null
hypothesis. We then have a non-nested set of hypotheses, see Table 5.1




It holds that H1(p) is almost the same hypothesis as                                         , in the sense that
                             .
Thus we test all hypotheses against H1(p). The simultaneous determination of trend and cointegrating rank is now
performed as follows:
We calculate                              . We accept rank r and the presence of a trend if H1(0), . . . , H1(r − 1) are
rejected and if also the
100                                    The Statistical Analysis of I (1) Models


models                         as well as       are rejected but H1(r) is accepted.
We accept cointegrating rank r and the absence of a trend if        is accepted and H1(0), . . . , H1(r − 1) as well as
                      are rejected. This solution represents a choice and reﬂects a priority in the ordering of the
hypotheses.
If instead we assume no quadratic trend in the process but allow a linear trend in all directions, we can analyse
model H*(r). These models are nested and the rank is determined as above by calculating the −2log Q(H(r)*|H(p)*)
for r = 0, . . . , p − 1, and compare them with their quantiles from Table 15.4, starting with r = 0.


6.4 Exercises

6.1
Consider the model



We deﬁne the parameters




  1. Show by Granger's representation theorem that Xt in general has a quadratic trend and show how this model
     can be estimated by reduced rank regression.
  2. Show that if α⊥′μ1 = 0 then the quadratic trend disappears, but the process still has a linear trend given by



     see Chapter 5, formula (5.20).
  3. Show how one can estimate the parameters of the model by reduced rank regression under the constraint α⊥
     ′μ1 = 0.
  4. What happens under the constraint α⊥′μ0 = 0, and μ1 unrestricted?
  5. Under the restriction α⊥′μ1 = 0, the hypothesis of trend stationarity of X1t, say, can be formulated as the
     hypothesis that the unit vector (1, 0, . . . , 0) is one of the cointegrating vectors. Discuss how the parameters can
     be estimated by reduced rank regression in this case.
                                      The Statistical Analysis of I (1) Models                                       101


6.2
A normalization or identiﬁcation of the cointegrating vectors. Consider the model



The equation



has solutions λ1 > ⋯ > λr and V = (v1, . . . , vr) such that V′ΣββV = I. Now deﬁne        , that is,     , and deﬁne
        , such that        .
  1. Show that




  2. Show that similar relations hold for the estimated values of α and β.


6.3
An example of a model based on rational expectations can be formulated as



                                                                                                                   (6.33)
for a process Xt which we assume is generated by the equation



                                                                                                                   (6.34)
Here Xt is p-dimensional and the matrix c is (q × 1) and c0 and c1 are (p × q) known matrices. As an example of this
situation consider the variables                     . The hypothesis of uncovered interest parity is formulated as



                                                                                                                   (6.35)
and the hypothesis of equal expected real interest rates is formulated as



                                                                                                                   (6.36)
  1. Show that (6.35) and (6.36) taken together are a special case of (6.33) and ﬁnd the matrices c, c0, and c1.
102                                    The Statistical Analysis of I (1) Models


  2. Show that in order for (6.33) to be consistent with (6.34) it must hold that



                                                                                                          (6.37)
      In the presence of cointegration these restrictions give more restrictions on the matrix Π and it is these
      restrictions that we want to test in the following. We deﬁne



     and assume that the matrix b has full rank.
  3. Show that under the assumption that Π has reduced rank r (0 < r < p) and the restrictions (6.37) hold, we have
     that a has full rank and that




     for matrices ξ and η of dimension (p − q) × (r − q) and rank (r − q) and a matrix Θ of dimension (p − q) × q.
     Find Π as a function of Θ, ξ, and η and show that this expression implies that Π has reduced rank and satisﬁes
     the restrictions (6.37).
  4. Find the dimension of the parameter space spanned by Π and μ under the restrictions (6.37), and ﬁnd an
     expression for the cointegrating vectors β expressed in terms of η, and an expression for α.
  5. Show by multiplying the equations for Xt by a and a⊥ respectively that the estimators for η, ξ, Θ, and μ can be
     determined by reduced rank regression.
  6. Find an expression for the likelihood ratio test for the hypothesis (6.37). The asymptotic distribution is χ2. Find
     the degrees of freedom.


6.4
Discuss the estimation problem for the statistical models discussed in the exercises given in Chapter 5.


6.5
Consider the model



                                                                                                                  (6.38)
Let H be a p × s matrix.
  1. Show that the hypothesis


      can be formulated as Γ1 = ξ H′ for some ξ (p × s) and derive the likelihood ratio test for this hypothesis. The
      asymptotic distribution of the test statistic is χ2. Determine the degrees of freedom.
                                      The Statistical Analysis of I (1) Models                                        103


2. Show that if β = Hϕ and Γ1 = ξ H′ then Yt = H′Xt is an autoregressive process. Find the parameters and give the
   condition for the process Yt to be an I(1) process.
3. Consider now the following special case



                                                                                                                   (6.39)



                                                                                                                   (6.40)
    Find the characteristic polynomial and its roots and show that if




   then the process Xt = (Yt, Zt)′ is an I(1) process and Yt + β2Zt is stationary.
4. For H = (1, 0)′ the hypothesis β = Hϕ reduces to β2 = 0. Find the autoregressive representation of Yt given by
   (6.39) and (6.40) under the assumption that β = Hϕ and Γ1 = ξ H′ and determine the properties of the process
   depending on the parameters.
   The problem is inspired by the following situation. In an investigation of money mt, income yt price pt and
   interest rates i1t and i2t, both money and income are in nominal values. The variables mt, yt, and pt are in
   logarithms. An analysis of the data shows that a model with r = 3 and k = 2 describes the data. We now want to
   investigate if we could have analysed the variables in real terms, that is, the variables (mt − pt, yt − pt, i1t, i2t).
5. Determine in this case the matrix H and determine explicitly the condition that Γ1 has to satisfy in order that the
   real variables are described by an AR(2) model.
              7 Hypothesis Testing for the Long-Run
                         Coefcients β
This chapter contains a derivation of the estimator and test statistics under hypotheses expressed as linear restrictions
of the long-run coefﬁcients β. We saw in Chapter 6 how a number of hypotheses can be analysed by various versions
of the reduced rank regression algorithm. In this chapter we show that a number of the models deﬁned by restrictions
on β in Chapter 5 can be solved by reduced rank regression or slight modiﬁcations of it. For each of the hypotheses we
give an algorithm for estimation of the parameters and the maximized likelihood function, and hence the likelihood
ratio statistics. All the asymptotic distributions for hypotheses on either β or α turn out to be χ2 distributions by the
results in Chapter 13. We give here the calculation of the degrees of freedom for the various hypotheses. The last
section 7.3 shows how some of the results are applied to an analysis of the Purchasing Power Parity between Australia
and United States as well as an analysis of demand for money in Denmark.


7.1 Degrees of Freedom
The tests on β all turn out to be asymptotically distributed as χ2. The reason for this is that the asymptotic distribution
of β, suitably normalized, will be mixed Gaussian, see Chapter 13, with a dimension determined by the dimension of
the tangent space of the statistical model.
In order to understand the determination of the degrees of freedom the following should be kept in mind. In the usual
linear regression model yt = θ′xt + εt or Y = Xθ + ε with ﬁxed regressors and Gaussian errors, the space spanned by the
columns of the design matrix X, gives the dimension of the model or the number of free parameters. If linear
restrictions are imposed on the parameters: θ = Hϕ, a submodel is deﬁned, and the space spanned by XH forms a
subspace, the dimension of which determines the number of free parameters of the hypothesis. The decrease in
number of parameters gives the degrees of freedom for the test of the restrictions on the parameter. For non-linear
models yt = θ(η)′xt + εt one applies a Taylor expansion to ﬁnd that locally we have linearity:
                                                          Hypothesis Testing                                                          105




Using the consistency of we can in the asymptotic analysis replace the non-linear model by the linear model with
regressors (Dθ)′xt, such that the number of parameters is given by the dimension of the space spanned by XDθ. Thus
the tangent space of the non-linear function takes the role of the linear space in usual linear regressions and the
dimension of the tangent space gives the number of free parameters. Similarly the information matrix is proportional
to the matrix (Dθ)′X′XDθ and the inverse if it exists is proportional to the asymptotic variance.
A non-linear restriction then gives a subspace with a new tangent space, which is a subspace of the old tangent space
and the difference in dimension is the degrees of freedom for the test of the non-linear restrictions. In a cointegration
model, which is a non-linear restriction on Π expressed as Π = αβ′, we will ﬁrst determine the dimension of the
tangent space at a point where α and β are of full rank, and then use this result to determine the degrees of freedom for
some of the tests for restrictions on β discussed in Chapter 5.
LEMMA 7.1 The function f(x, y) = xy′, where x is p × r (r ≤ p) and y is m × r (r ≤ m), is differentiable at all points, with a differential
given by



If x and y have full rank then the tangent space has dimension



PROOF From the expansion



the ﬁrst result follows, and the tangent space consists of the matrices




It is easier to determine the dimension of the normal space, that is, the space orthogonal to the tangent space at the
point (x, y). This space must satisfy the conditions




We next want to determine the number of free parameters in a matrix with these restrictions.
106                                                  Hypothesis Testing


We assume without loss of generality, since x and y have full rank, that x, y, and M have the form




The condition Mx = 0 implies that M11 = M21 = 0 and y′ M = 0 implies that M11 = M12 = 0, such that the only parameters
remaining in M are the parameters of M22, that is, a total of (p − r) (m − r). Thus has dimension (p − r) (m − r) and
hence the tangent space has dimension pm − (p − r) (m − r).
Another way of determining the dimension of the space of matrices deﬁned by xy′ of full rank is the following. Since x
and y have full rank there is no loss of generality in assuming that y′ = (y1′, y2′), where y1 (r × r) has full rank, such that



say. Now and can be recovered from the value of f(x, y) by the identifying restrictions imposed and the dimension
of the space of matrices of the form xy′ must be equal to the number of parameters in the arguments and , that is,
pr + r (m − r) which is equal to pm − (p − r) (m − r).


7.2 Linear Restrictions on β
We analyse some of the models discussed in Chapter 5 deﬁned by linear restrictions on β and show that some can be
estimated by reduced rank regression, whereas others need an iteration which can be performed conveniently by a
switching algorithm. For each such hypothesis the degrees of freedom are calculated by the above result.


7.2.1 The same restriction on all β
The basic I(1) model is given by the equations




where the parameters (α, β, Γ1, . . . , Γk − 1, Φ, Ω) vary freely. Consider ﬁrst the restriction H0: β = Hϕ for some known
matrix H of dimension p × s which corresponds to imposing the same restriction on all cointegrating vectors.
                                                         Hypothesis Testing                                            107


THEOREM 7.2 Under hypothesis H0 : β = Hϕ, we ﬁnd the maximum likelihood estimator of β by reduced rank regression of Δ Xton
H′Xt − 1corrected for lagged differences and dummies, that is, ﬁrst we solve



                                                                                                                       (7.1)
for                  and V = (υ1, . . . , υs) which we normalize by V′ H′ S11HV = I. Then choose



and ﬁnd the estimates of the remaining parameters by ordinary least squares for   . The maximized likelihood becomes




and the likelihood ratio test Q (H0|H (r)) of the hypothesis H0in H(r) is




                                                                                                                       (7.2)
which is asymptotically distributed as χ2with r (p − s) degrees of freedom.
PROOF For ﬁxed β we get the concentrated likelihood function as before and the regression equation



see (6.8) and (6.9), which shows that α and ϕ can be found by reduced rank regression of R0t on H′ R1t, that is, ϕ now
has to be chosen to minimize




                                                                                                                       (7.3)
over the set of all s × r matrices. This shows most of the results of Theorem 7.2, it only remains to discuss the degrees
of freedom for the test.
From Lemma 7.1 it follows that the number of parameters in the matrix Π = αβ′ with unrestricted α and β is p2 − (p −
r)2 = pr + r (p − r). If β = Hϕ, then Π = αϕ′H′ which according to Lemma 7.1 has pr + r (s − r) parameters since H is
p × s. The difference is r (p − r) −r (s − r) = r (p − s), which determines the degrees of freedom for the test of the
hypothesis β = Hϕ.
                                                                                                                          □
108                                               Hypothesis Testing


7.2.2 Some β assumed known
Next consider the hypothesis (5.4) H0 : β = (b, ϕ) where b is p × s and ϕ is p × (r − s). Thus of the r cointegrating
relations the ﬁrst b are assumed known, and the remaining r − s are to be estimated unrestrictedly. Before formulating
the result we introduce some notation. We decompose the adjustment parameter α = (α1, α2) correspondingly into α1
(p × s) and α2 (p × (r − s)) and ﬁnd that under H0 it holds that



and equation (6.9) becomes



                                                                                                                    (7.4)

The analysis of these equations can be performed by ﬁrst concentrating out α1, that is, regressing R0t and R1t on b′ R1t.
This gives new residuals




and new product moment matrices



The concentrated likelihood function now has the form




Note that if ϕ is chosen to lie in sp(b) then both the numerator and denominator are zero. This problem is treated in
Lemma A.10, where it is shown that we need only consider vectors which are orthogonal to b. We therefore restrict
attention to vectors in the space sp (b⊥), and solve the eigenvalue problem.




for eigenvalues                   .
It is convenient also to solve the eigenvalue problem




for eigenvalues                            . We then get the representation
                                                         Hypothesis Testing                                              109




From this we ﬁnd the maximized likelihood function




The degrees of freedom for this model can also be determined by Lemma 7.1. Since ϕ can be chosen in sp(b⊥), that is,
ϕ = b⊥ψ, equation (7.4) can be written as




It is seen from Lemma 7.1 that the number of parameters is


since α1 is (p × s), α2 is (p × (r − s)), and ψ is (p − s) × (r − s). The number of parameters in the model with unrestricted
α and β of dimension p × r is p2 − (p − r)2. The difference gives s(p − r) degrees of freedom for the test. The results are
formulated in
THEOREM 7.3 Under hypothesis H0 : β = (b, ϕ) the estimate of ϕ is found by solving the eigenvalue problem




for eigenvalues                and eigenvectors w, and the eigenvalue problem




                                                                                                                        (7.5)
for eigenvalues                             . The maximum likelihood estimator for β is



and the maximized likelihood function is



                                                                                                                        (7.6)
Hence the likelihood ratio test of the hypothesis H0in H (r) is given by




                                                                                                                        (7.7)
which is asymptotically distributed as χ2with s (p − r) degrees of freedom.
110                                                  Hypothesis Testing


We can compare the eigenvalue problem (7.3) corresponding to restrictions on β and (7.5) corresponding to assuming
some known cointegrating relations.
The problem of estimating β subject to the restrictions β = Hϕ leads to a transformation of the levels of the process by H′ and
the problem of estimating β when some of the vectors are known leads to conditioning on the levels transformed by b.
Thus if we imposed both sets of restrictions we should solve the eigenvalue problem where we have conditioned on b′
R1t and transformed by H′ R1t. That is, we should solve the eigenvalue problem



                                                                                                                          (7.8)



7.2.3 Individual restrictions on β
We ﬁrst consider the model deﬁned by the restrictions



where Hi is p × si, and ϕi is si × ri, see (5.5). Note that the relations are not necessarily identiﬁed in the above
model, since in particular we allow the matrices Hi to be the same, in which case we are in the situation considered in
Theorem 7.2.
We decompose the α matrix similarly, that is, α = (α1, α2) where αi is p × ri, and the basic equation (6.9) becomes



                                                                                                                          (7.9)
This is evidently a reduced rank problem but with two reduced rank conditions. The solution is not given by an
eigenvalue problem, but the following algorithm is easy to implement and is found to converge. Moreover it has the
property that the likelihood function is increasing in each step. The algorithm is based on the observation that for
known ϕ1, the analysis of (7.9) is just a reduced rank regression of R0t on H2′R1t corrected for β1′R1t = ϕ1′H1′R1t, that is,
the solution given in Theorem 7.3.
As starting values it is not a good idea to use the unrestricted estimates of the vectors in β since the ordering of the
vectors need not correspond to the ordering given in the model. Instead one can ﬁnd among the r vectors in the
unrestricted estimator a total of r1 linear combinations that are as close to sp(H1) as possible. This is done by solving
the eigenvalue problem
                                                      Hypothesis Testing                                                  111


for eigenvalues and eigenvectors (v1, . . . , vr) and choose as initial value for the iteration the vectors                   .
Thus the algorithm consists of the following steps:
  1. Estimate β1 and β2 unrestricted as described in Theorem 6.1 and construct an initial estimate       as described
     above.
  2. For ﬁxed value of        estimate α2 and ϕ2 by reduced rank regression of R0t on H2′R1t corrected for β1′R1t. This
     deﬁnes         .
  3. For ﬁxed value of        estimate α1 and ϕ1 by reduced rank regression of R0t on H1′R1t corrected for β1′R1t. This
     deﬁnes         .
  4. Continue with 2. and 3. until convergence.
We do not know that a unique maximum exists, and hence cannot prove that the algorithm always converges to the
correct value but the algorithm has the property that the likelihood function is maximized in each step. The maximum
value of the likelihood function is given by expressions like (7.6). We summarize the results in
THEOREM 7.4 The model H0 : β = (H1ϕ1, H2ϕ2) is estimated by the switching algorithm described above. The maximized value of the
likelihood function is given by




where               are deﬁned as the solutions to the eigenvalue problem for   :



and              are deﬁned by the eigenvalue problem for       :



Theorem 7.4 can immediately be applied to calculate likelihood ratio tests for further restrictions on the variation of
the cointegrating relations. Thus in particular this is the test of over-identifying restrictions and also the test for the
identiﬁcation as given by (5.7). There is no general simple formula for calculating the degrees of freedom for models of
this type, since it depends on how the matrices H1 and H2 are related and on their dimensions. We give without proof a
result for identiﬁed models with individual restrictions on the cointegrating relations.
112                                                        Hypothesis Testing


THEOREM 7.5 The model H0 : β = (H1ϕ1, . . . , Hrϕr) where Hiis p × siand ϕiis si × 1 is estimated by the above switching algorithm, and
the asymptotic distribution of the likelihood ratio test statistic for this model, in the general model of β unrestricted, is χ2with degrees of
freedom given by                     , provided that β is identiﬁed.
The degrees of freedom can be calculated from Lemma 7.1 and are simply the sum of the number of restrictions in
each equation, that is p − si + 1 less the number of restrictions r needed to just identify the parameters.


7.2.4 Structural error correction model
The structural error correction model is given by (5.10). Instead of estimating the restricted short-run and long-run
parameters simultaneously it seems reasonable, in view of the super-consistency of the estimated long-run parameters,
see Chapter 13, to estimate ﬁrst the restricted long-run parameters from the reduced form error correction model with
no restrictions on the short-run parameters. Next for ﬁxed values of the long-run parameters apply the usual
maximum likelihood procedure (FIML) to estimate the restricted structural error correction model since all regressors
entering the error correction model are now stationary. An algorithm for performing the FIML estimation can be
constructed as the algorithm for estimating the identiﬁed long-run parameters, see Johansen (1995b), but of course a
general optimizing algorithm can be used if more complicated hypotheses are considered, see Doornik and Hendry
(1994) and Boswijk (1995). In Johansen and Juselius (1994) an analysis of the IS-LM model is given from this point of
view using Australian money data.


7.3 Illustrative Examples

7.3.1 The Danish data
In this section we analyse the Danish data using model      , since inspection of the plots indicates that the data have
no deterministic trend, which means that the constant term should be restricted by α⊥′μ = 0. A formal test of this can
be performed using the result of Corollary 11.2.
In this model, the value 1 is appended to the data vector and a set of coefﬁcients to the β matrix, see (6.29), and then a
reduced rank regression is performed. Hence p = 4 and p1 = p + 1 = 5. The result of the analysis is given in Table 7.1.
From Table 7.1 we ﬁnd that there is no clear evidence for cointegration. The hypothesis r = 0 gives a test statistic of
49.14, which corresponds roughly to the 90 per cent quantile from Table 15.2. We choose to maintain the hypothesis
that r = 1, that is, that there is one cointegrating relation.
                                                  Hypothesis Testing                                             113


Fig. 7.1. The unrestricted cointegrating relation for the Danish data




Table 7.2 contains the estimated long-run coefﬁcients and Table 7.3 the adjustment coefﬁcients.
From these tables we see the cointegrating relation as the ﬁrst column. In this case it seems natural to normalize on
m2.




This makes it straightforward to interpret the cointegrating vector in terms of an error correction mechanism
measuring the excess demand for money, where the equilibrium relation is given by



The corresponding α is
Table 7.1 The Eigenvalues, Trace Statistic, and 95% Quantiles for the Danish Data
   r                            λr+1                        Trace                       95%
   0                            0.433                       49.14                       53.42
   1                            0.178                       19.06                       34.80
   2                            0.113                       8.89                        19.99
   3                            0.043                       2.35                        9.13

Table 7.2 The Estimates of the Long-Run Parameters β For the Danish Data



   m2                 −21.97             14.66              7.95              1.02                11.36
   y                  22.70              −20.05             −25.64            −1.93               −7.20
   ib                 −114.42            3.56               4.28              25.00               19.20
   id                 92.64              100.26             −44.88            −14.65              −21.53
   1                  133.16             −62.59             62.75             −2.32               −91.28
114                                               Hypothesis Testing


Table 7.3 The Estimates of the Adjustment Parameters α (× 103) for the Danish Data


   Δ m2                   9.69                    −0.33                   4.41                   1.98
   Δy                     −5.23                   1.35                    6.28                   1.08
   Δ ib                   −1.05                   −0.72                   0.44                   −1.53
   Δ id                   −1.34                   −2.06                   −0.35                  −0.05




The normalized coefﬁcients of α can now be interpreted as adjustment coefﬁcients with which excess demand for
money enters the four equations of our system. A low coefﬁcient indicates slow adjustment and a high coefﬁcient
indicates rapid adjustment. It is seen that in the ﬁrst equation which measures the changes in money balances, the
adjustment coefﬁcient is approximately 0.213, whereas in the last two equations the adjustment coefﬁcients are lower.
Note, however, that the interpretation of the coefﬁcient α is the effect of a change in the disequilibrium error corrected
for the lagged differences, and hence involves all parameters in the model. The cointegrating linear combination β′Xt is
plotted in Fig. 7.1, together with β′R1t. It is seen that the processes appear considerably more stationary than the
original variables, and that there is little difference in the behaviour of the two processes in this case.
The hypothesis of weak exogeneity is tested below, but ﬁrst we test the hypothesis that money and income have equal
coefﬁcients with opposite sign.
With the notation β*′ = (β1, β2, β3, β4, β5) the hypothesis becomes:




In matrix formulation this hypothesis is expressed as




The test of β1 + β2 = 0 is determined by the ﬁrst eigenvalue with and without the restriction, see (7.2), and we ﬁnd
under this hypothesis the eigenvalues




The eigenvector is
                                                  Hypothesis Testing                                                 115


with the adjustment coefﬁcients




The test statistic becomes



The asymptotic distribution of this quantity is given by the χ2 distribution with degrees of freedom r(p1 − s) = 1(5 − 4)
= 1. Note that β is (p + 1) × s since the constant is adjoined to the process Xt when we analyse the model with the
constant term restricted such that no trend can appear. It is clearly not signiﬁcant, and we thus accept the hypothesis
that for the Danish data the coefﬁcients to m2 and y are equal with opposite sign.
The second hypothesis is that the coefﬁcients for bond rate and deposit rate are equal with opposite sign. This
hypothesis implies that the cost of holding money can be measured as the difference between the bond yield and
the yield from holding money in bank deposits. Since β1 + β2 = 0 was strongly supported by the data, we will test β3 +
β4 = 0 within the hypothesis that β1 + β2 = 0. We then impose the restrictions on β given by the matrix




where ϕ is a        vector. Solving the eigenvalue problem we get the largest eigenvalue 0.4231. The test for the
hypothesis is given by



which should be compared with the χ2 quantiles with r(s1 − s2) = 1(4−3) = 1 degree of freedom. Again this is not
signiﬁcant and we conclude the analysis of the cointegration vectors for the Danish demand for money by the
restricted estimate



The corresponding estimate of α is




If we want to test that we can restrict further the coefﬁcients α3 = α4 = 0, that is, test the weak exogeneity of the two
interest rates, we can
116                                                  Hypothesis Testing


calculate the likelihood ratio test and ﬁnd that the largest eigenvalue is λ1 = 0.356, such that the test statistic is given by




which compared with the quantiles in the χ2(2) distribution gives a p-value of 5 per cent.


7.3.2 The Australian data
We ﬁrst determine the cointegrating rank, and then test some hypotheses as discussed above. The eigenvalues and the
related test statistics and quantiles are given in Table 7.4. The asymptotic distributions of the test statistics given in
Theorem 6.1 are derived in Chapter 11, and the relevant tables are given in Chapter 15. Here we shall just use the
results without comments on how they are obtained. The asymptotic distribution of




depends on the fact that the linear trend is present, hence Table 15.3 is chosen and the quantiles also depend on the
number of common trends p − r in the model being tested.
It appears that r = 0 is rejected, r = 1 is rejected, and that r = 2 can be accepted by the data. See Chapter 12 for a
discussion of the rank determination. This is of course a rather formal test, since we only have the asymptotic
distribution and not the actual distribution of the test statistic. Furthermore if we choose a 90 per cent quantile we can
reject r = 2 but accept r = 3. Thus there is no clear-cut decision to make about whether r = 2 or 3. We started out
looking for two cointegrating relations: the real exchange rate and the interest differential. These combinations are
probably not stationary themselves, but we seem to have found two other combinations that are stationary.
Table 7.4 The Eigenvalues, Trace Statistic and 95% Quantile from Table 15.3 for the Australian Data
   r                              λr+1                          Trace                          95%
   0                              0.484                         101.38                         68.91
   1                              0.268                         51.78                          47.18
   2                              0.215                         28.43                          29.51
   3                              0.074                         10.24                          15.20
   4                              0.058                         4.45                           3.96
                                                   Hypothesis Testing                                                   117


Fig. 7.2. The unrestricted cointegrating relations for the Australian data




We continue with the model H(2) which assumes r = 2, and now illustrate some of the test procedures for hypotheses
on β and α. Note that the calculated eigenvectors are normalized by                      diagonal matrix. The chosen
normalization from Theorem 6.1 is supplemented by choosing the coefﬁcient to pau to 1.00, and the adjustment
coefﬁcients are normalized similarly. If r = 1 the maximum likelihood estimator is the ﬁrst column of the long-run
coefﬁcients β, and the ﬁrst column of the adjustment coefﬁcients then gives the estimator of the corresponding
adjustment coefﬁcients in model H(1). If r = 2, then the maximum likelihood estimator for the two cointegrating
relations is given as the space spanned by the ﬁrst two β-vectors etc. Thus the estimation problem for all the models is
solved simultaneously. It must be emphasized that the estimates in Table 7.5 are the unrestricted estimates, because we
have analysed the general cointegration model. If we have prior assumptions on the cointegrating vectors we must
incorporate this in the estimation method as discussed in this chapter.
The two cointegrating linear combinations β1′Xt and β2′Xt together with β1′R1t and β2′R2t are plotted in Fig. 7.2. Note that
the latter which are corrected for short-term dynamics and seasonals appear more stationary.
Since we can only estimate the cointegrating space and not the individual vectors (without further restrictions) we
should be prepared to take linear combinations of the vectors into account before we interpret them,
118                                                Hypothesis Testing


Table 7.5 Estimates of the Long-Run Parameters β For the Australian Data



   pau                1.00                1.00                1.00               1.00                1.00
   pus                −0.95               −1.98               −1.12              −1.65               −1.01
   exch               0.38                0.76                −0.81              0.14                −0.35
   i au               −11.75              2.77                4.16               0.42                −0.98
   j us               9.34                3.88                2.03               3.28                −1.39

Table 7.6 Estimates of the Adjustment Parameters α For the Australian Data


   Δ pau              −0.030              −0.013              −0.007             0.012               −0.018
   Δ pus              0.004               −0.034              −0.001             0.028               0.008
   Δ exch             −0.035              −0.124              0.159              0.043               −0.064
   Δ i au             0.028               −0.043              0.005              −0.007              −0.009
   Δ i us             −0.008              −0.052              −0.000             −0.027              0.018

or rather formulate the questions in terms of the cointegrating space. Note that it does not look possible to take linear
combinations of the ﬁrst two vectors and obtain the vector (1, −1, −1, 0, 0), but that it seems that the two prices enter
with equal coefﬁcient with opposite sign. If they do so in the chosen representation they will do so for any linear
combination, hence such a question is a question that involves the whole cointegrating space. Thus we would expect
that the hypothesis that the coefﬁcients to the prices sum to zero is accepted, but it looks as if the hypothesis that the
real exchange rate is stationary is not satisﬁed.
Similarly with the interest differential which seems to enter the ﬁrst relation but not the second. Note that we can
always ﬁnd a linear combination of the ﬁrst two vectors that have exactly the coefﬁcient 1 and −1 to the interest rates,
hence this hypothesis is not testable. The hypothesis that the interest differential enters both relations, however, is
testable. Next note that the third vector seems to contain the real exchange rate together with a linear combination of
the interest rates. The proper formulation of this observation is that a vector of the form (1, −1, −1, ϕ, ψ) seems to lie
in the space spanned by the ﬁrst three cointegration vectors. Thus rather than becoming a question about the third
vector, which is identiﬁed in a peculiar way, we formulate it as a question about the cointegrating space, which is
identiﬁed.
First note that the interest rate in US has some very strange behaviour around 1980 which has resulted in an ARCH(2)
which is far too big. Somehow the US interest rate is not well modelled by the chosen set of data, and it is tempting to
check if some of the variables can be assumed weakly
                                                    Hypothesis Testing                                                   119


Table 7.7 The Estimates of α and β For the Australian Data When R = 2 and Ius and Pus Are Weakly Exogenous



   pau                     1.000                   1.000                   −0.027                   −0.005
   pus                     −0.776                  −1.055                  0.000                    −0.000
   exch                    0.399                   −0.968                  −0.036                   0.153
   iau                     −14.444                 4.296                   0.022                    −0.004
   ius                     10.541                  1.878                   0.000                    0.000

exogenous, in particular the US interest, as it is not modelled so well by the chosen information set, and pus which also
needs a different information set to get a relevant model. We formulate this as a hypothesis on α, namely the
hypothesis of weak exogeneity of ius and pus or in matrix formulation that rows 2 and 5 of α are zero, see (5.8). The
likelihood ratio test for this hypothesis is 7.34, and should be evaluated in a χ2 (4) corresponding to a p-value of 12 per
cent. Thus it is not against the data to assume that ius and pus are weakly exogenous, and we continue the analysis under
this assumption. The interpretation of the weak exogeneity is that some rows of α are zero, but that means that the
corresponding unit vectors are contained in α⊥, which again means that the cumulated ε from these equations are
common trends. Thus we ﬁnd that the cumulated unexplained variation from the interest and price equation for US
are two of the common trends. This question will be treated in detail in Chapter 8.
Table 7.7 gives the restricted estimates for r = 2 and under the assumption that ius and pus are weakly exogenous.
Note how the new estimates contain the real exchange rates in the second vector, or more precisely the cointegrating
space now seems to contain a vector with coefﬁcients corresponding to the real exchange rate together with a
combination of the interest rates. The ﬁrst relation is quite close to the interest differential, which means that we can
now formulate a hypothesis about restrictions on both the cointegrating vectors in the form (5.5).
Strictly speaking the previous cointegration analysis where r was determined and the test for weak exogeneity rested on
the assumption that the model actually ﬁtted the data, that is, that even the US interest rate could be described by the
model. We shall continue the analysis in the conditional model given current values of pus and ius, that is, under the
assumption that the corresponding rows of α are zero.
We can then test various hypotheses about the cointegrating vectors. First consider the hypothesis that the interest rate
differential is stationary. We formulate this as the hypothesis that (0, 0, 0, 1, −1) is a cointegrating vector. The
likelihood ratio test, assuming the restriction on α, is calculated to be 11.61 which is signiﬁcant in a χ2 (3) distribution.
Theorem 7.3
120                                                 Hypothesis Testing


contains the limit result and the degrees of freedom s(p−r) = 1(5−2) = 3.
Note that the degrees of freedom can also be found as follows. We can easily ﬁnd a cointegrating relation with
coefﬁcients to the interest rates summing to zero, just by taking a suitable linear combination. This is no restriction, but
the moment we require the ﬁrst three coefﬁcients to be zero as well we get genuine restrictions, that is, we get three
degrees of freedom.
Another hypothesis that can be tested is that one equation contains the interest rate differential and the other the real
exchange rate. This is formulated as a hypothesis on the individual cointegrating vectors see (5.5). One vector is
restricted by the requirement that the coefﬁcients to the interest rates sum to zero, and the other is restricted by
requiring that the real exchange rate enters. The ﬁrst restriction is given by the matrix R1′ = (0, 0, 0, 1, 1) and R2′ has
two rows (1, 1, 0, 0, 0) and (1, 0, 1, 0, 0). Thus β = (H1ϕ1, H2ϕ2) where




In other words




The likelihood ratio test is 0.1 which is not signiﬁcant in a χ2 (1) distribution.


7.4 Exercises

7.1
Consider the model




where εt, t = 1, . . . , T are i.i.d. N2 (0, Ω). Find the maximum likelihood estimator of β1 and β2 and derive the likelihood
ratio test of the hypothesis β1 = β2. Discuss the properties of the process Xt when β1 = β2, and when β1 ≠ β2.
             8 Partial Systems and Hypotheses on α
This chapter contains a brief discussion of partial systems, that is, systems which are formulated as conditional models
of some variables, the endogenous, given others, the exogenous. We discuss such models in the framework of the full
VAR model and focus on the notion of weak exogeneity in section 8.1, and use that in section 8.2 as an example of
hypothesis testing on α. There is an interesting similarity, or duality, between the interpretation as well as the estimation
procedure for β and that of α⊥. This is explained in section 8.3.


8.1 Partial Systems
When choosing the information set or the variables for an econometric investigation there are often some variables of
primary interest, the endogenous that we want to describe by means of others, the exogenous variables. Sometimes it is
easier to model satisfactorily the conditional model of the endogenous variables given the exogenous variables, and the
marginal distribution of the exogenous variables show an irregular behaviour which is difﬁcult to model using a VAR.
It is tempting in such a situation to make inference from the conditional or partial model (8.3) and leave the exogenous
variables unspeciﬁed or at least modelled less carefully. Thus one would like to make inference on the cointegrating
rank in the partial system, to estimate β in the partial system and ﬁnally to test hypotheses on β.
It turns out that such an analysis can only be valid if the assumption of weak exogeneity is satisﬁed, see Engle et al.
(1983). The reason for this is that the asymptotic distribution theory for the estimate of β becomes very difﬁcult, not to
say impossible, without the assumption of weak exogeneity. This problem is discussed in some detail in Johansen
(1992c), Boswijk (1992), and Urbain (1992). The assumption of weak exogeneity, however, is an assumption about the
full system.
The problem of rank determination in partial systems is discussed in Harboe et al. (1995) where it is shown that even if
weak exogeneity is assumed the deterministic term makes it difﬁcult to determine the rank without modelling the full
system. Thus in the following we work in the full system, and assume weak exogeneity and that the value of the
cointegrating rank is known.
122                                           Partial Systems and Hypotheses


Let the process be decomposed as Xt = (X1t′, X2t′)′ and the matrices decomposed similarly, that is,




The basic model equations can be rewritten as




                                                                                                                            (8.1)




                                                                                                                            (8.2)
Here the ε are i.i.d. Gaussian with mean zero and variance matrix




The conditional model for Δ X1t given the past and Δ X2t is found from these equations:




                                                                                                                            (8.3)
where                                    , and             with variance                       . It is seen that β enters
both equations (8.2) and (8.3) and there can be a considerable problem, as well as a loss of information, in the analysis
of the conditional equation (8.3) without taking into account the second equation (8.2).
We formulate a simple result about a condition for when the analysis of the conditional model is efﬁcient.
THEOREM 8.1 If α2 = 0, then X2tis weakly exogenous for the parameter (β, α1), and the maximum likelihood estimator of β and α1can
be calculated from the conditional model.
PROOF Under the assumption that α2 = 0, equations (8.2) and (8.3) become




                                                                                                                            (8.4)




                                                                                                                            (8.5)
                                            Partial Systems and Hypotheses                                             123


It is seen that the parameters in the marginal model (8.4) are



and the parameters in the conditional model (8.5) are




It is clear that the parameter space with parameters



is decomposed into a product space of the parameters in the marginal model θm and the parameters in the conditional
model θc. This is seen by selecting arbitrary values for θm and θc (satisfying that Ω22 and Ω11.2 are positive deﬁnite) and
then constructing θ which satisﬁes that Ω is positive deﬁnite. We have here used the fact that for the multivariate
Gaussian distribution the parameter Ω22 is variation independent of the parameters (ω, Ω11.2), see Barndorff-Nielsen
(1978). Since ﬁnally the parameters of interest, (α1, β), are functions of the parameters of the conditional model we
have proved that X2t is weakly exogenous.
This shows that the likelihood function factors as




which shows that the maximum likelihood estimator         , and hence        , can be calculated from the second factor,
the partial likelihood.
                                                                                                                         □
Another interpretation of the hypothesis of weak exogeneity is the following: if α2 = 0 then sp((0, I)′) is contained in
sp(α⊥) which means that        is a common trend in the sense that the errors in the equations for X2t cumulate in the
system and give rise to the non-stationarity. This does not mean that the process X2t cannot cointegrate, in fact it can be
stationary, see exercise 4.3.
If in particular X1t is univariate then (8.5) consists of a single equation which is an error correction model for the
changes in X1t as explained by simultaneous values of Δ X2t, the lags of Δ Xt and the error correction term β′ Xt−1 as well
as the dummies. What the theorem states is a condition which guarantees that for inference concerning β and α1 we
only need to do a single equation analysis, which is easier since usual regression analysis will provide estimates for the
parameters. It therefore becomes important to have a test for the adequacy of single equation analysis, and this is
treated in the next section. See also Corollary 8.3.
124                                        Partial Systems and Hypotheses


8.2 Test of Restrictions on α
This section discusses estimation of β when α is restricted by hypotheses like (5.8) and (5.9).


8.2.1 The Same Restriction on All α
Consider the hypothesis (5.8) where α is restricted by H0 : α = Aψ in model H (r). Here A is a (p × m) matrix with
m ≥ r. As a special case we get the situation considered above where A = (I, 0), that is, weak exogeneity of X2t for the
parameters of interest (α1, β). The hypothesis H0 can be expressed in indirect form as A⊥′α = 0.
The concentrated likelihood function will be expressed in the form of two regression equations derived from (6.9).
Recall the notation Ā = A(A′A)−1, with the property that A′Ā = I. We then get from



the equations



                                                                                                                   (8.6)



                                                                                                                   (8.7)
In the following we apply the same trick as above of analysing ﬁrst equation (8.7) and then equation (8.6) given (8.7).
That is, we ﬁrst factor out that part of the likelihood function which depends on A⊥′ R0t, since it does not contain the
parameters ψ and β. To save notation we deﬁne                                                                 and ﬁnally



We then get the two equations



                                                                                                                   (8.8)



                                                                                                                   (8.9)
which have independent error terms. Note that the properties of the multivariate Gaussian distribution imply that
(ψ, β, ω, Ω11.2), the parameters of (8.8), are variation independent of the parameters from (8.9) given by Ω22. Thus the
two equations can be analysed separately. Strictly speaking these calculations should be performed in equation (6.2)
before correcting for the variable Z2t. That is, ﬁrst one should derive the conditional and marginal models and then
eliminate the regression parameters Ψ. The result is the same, however. We next ﬁnd the two factors corresponding to
the marginal and the conditional distribution.
                                            Partial Systems and Hypotheses                                            125


The factor of the likelihood function corresponding to the marginal distribution of A′R0t in (8.9) is given by




                                                                                                                    (8.10)
which gives the estimate



                                                                                                                    (8.11)
and the maximized likelihood function from the marginal distribution



                                                                                                                    (8.12)
The other factor of the likelihood function corresponds to the conditional distribution of Ā′R0t conditional on A⊥′R0t
and R1t, and is given by




                                                                                                                    (8.13)
The analysis of (8.13) or (8.8) is seen to be performed by reduced rank regression of Ā′ R0t on R1t corrected for A⊥′ R0t.
Hence the estimator of                is found by regression for ﬁxed ψ and β giving



                                                                                                                    (8.14)
and new residuals deﬁned by




In terms of     and     the concentrated likelihood function has the form (6.8) which means that estimation of β
follows as before by reduced rank regression. It is convenient to calculate the relevant product moment matrices as




The results are formulated in Theorem 8.2, where we also state the asymptotic distribution of the test statistic.
126                                               Partial Systems and Hypotheses


THEOREM 8.2 Under hypothesis H0 : α = Aψ, the maximum likelihood estimator of β is found as follows: ﬁrst solve the equation




                                                                                                                            (8.15)
for                                   and              normalized by            .
The estimator of the cointegrating relations is



                                                                                                                            (8.16)

The estimators of the other parameters can be found by regression from (8.8) and (8.9) for   . The maximized likelihood function is




                                                                                                                            (8.17)

The likelihood ratio test statistic of H0in H (r) is




which is asymptotically distributed as χ2with r(p − m) degrees of freedom.
Notice that equation (8.9) does not contain cointegrating terms, such that inference on β can be conducted from
equation (8.8) given (8.9), as explained in Chapter 7. If further m = r then the restriction α = Aψ corresponds to
choosing sp(α) = sp(A), that is, the space of the adjustment coefﬁcients is known. The degrees of freedom are found
from Lemma 7.1, since evidently Π = Aψβ′ or rather ψβ′ contains mp − (m − r)(p − r) parameters, which compared to
p2 − (p − r)2 gives r(p − m) degrees of freedom.
COROLLARY 8.3 If m = r, that is, the adjustment coefﬁcients are known up to normalization, then the maximum likelihood estimate of
β is found as the coefﬁcients of Xt − 1in the regression of Ā′ Δ Xton Xt − 1, A⊥′ Δ Xt, Δ Xt − 1, . . . , Δ Xt−k+1and Dt.
PROOF The estimator for β is found from (8.8). If m = r we absorb the r × r matrix ψ into β and it is seen that the
coefﬁcients β can be found by regressing Ā′R0t on R1t corrected for A⊥′R0t. Thus in particular if α is proportional to
(1, 0, . . . , 0) and r = 1 then ordinary least squares analysis of the ﬁrst equation will give the maximum likelihood
estimator of the cointegrating vector.
                                                  Partial Systems and Hypotheses                                                     127


8.2.2 Some Adjustment Coefcients Assumed Known
Next we consider the situation where the restrictions on α are given by α = (a, τ), where a (p × s) is known s ≤ r and the
remaining vectors τ are to be estimated. It is not so easy to give an interpretation of this model as it stands but
            is equivalent to sp(a⊥) ⊃ sp(α⊥), that is, α⊥ = a⊥ ξ for some matrix ξ. Thus these hypotheses are
concerned with testing the same restriction on all common trends. Again we only need to consider vectors τ in sp (a⊥),
and deﬁne τ = a⊥ψ.
We concentrate the likelihood function, see (6.8), and obtain the equation



where β = (β1, β2). Now multiply by ā′ and ā⊥′ to obtain



                                                                                                                                   (8.18)


                                                                                                                                   (8.19)
The conditional equation for ā′ R0t given ā⊥′ R0t and the past is given by



                                                                                                                                   (8.20)
where              , such that the errors are independent in (8.19) and (8.20). Moreover the parameters
                     from (8.20) are variation independent of the parameters                   from (8.19). Hence the
marginal distribution (8.19) gives rise to estimation of the parameters ψ and β2 by a reduced rank regression. We ﬁnd
the regression estimate for ψ, see (8.19),



and then                   solves the eigenvalue problem




Finally (8.20) gives a solution for β1 by regressing ā′R0t on R1t and ā⊥′ R0t. We formulate the results in a theorem.
THEOREM 8.4 Under hypothesis H0 : α = (a, a⊥ ψ) the estimate of β is found as the eigenvectors corresponding to the largest r − s
solutions of the equations




The remaining parameters are found by regression from equation (8.19) and (8.20). The asymptotic distribution of the likelihood ratio test
is χ2with s(p − r) degrees of freedom.
128                                              Partial Systems and Hypotheses


8.3 The Duality between                               and
The two hypotheses considered above are both solved by an eigenvalue problem. The restriction                  gives rise
to conditioning on A⊥′ R0t, whereas the assumption that sp(α) contains sp(a) implies that one should transform by ā⊥′ R0t.
This is the opposite of the corresponding result for β, see section 7.2, and we add some remarks to explain this,
thereby gaining some insight into the estimation procedure considered in (8.19) and (8.20).
The duality in the estimation of α⊥ and β is really a consequence of Lemma A.9 but we formulate it as a theorem:
THEOREM 8.5 The estimator of the unrestricted β is found as the eigenvectors corresponding to the largest r eigenvalues of the problem



and the estimator of the unrestricted α⊥is found as the eigenvectors corresponding to the p − r smallest eigenvalues of the problem



PROOF The statement about β is contained in Theorem 6.2. The dual problem, see Lemma A.9, is



which has the same eigenvalues but eigenvectors Ŵ which can be chosen as                                                     . But for
                 , such that          , and




Note that the vectors (ŵr+1, . . . , ŵp) are orthogonal to , since




by the normalization of Ŵ. Thus              is directly estimated by (ŵr+1, . . . , ŵp).
With this formulation one can see that the analysis of the hypothesis



which consists in conditioning on b′ R1t and transforming by H′ R1t, is mathematically the same as the analysis of the
hypothesis
                                           Partial Systems and Hypotheses                                            129




since this can be formulated as




Now       is found as the solution to an eigenvalue problem just as , hence in this dual problem one conditions on A⊥′
R0t and transforms by ā⊥′ R0t and hence solve




which again shows that     should be found as eigenvectors of the dual problem




One can interpret β as determining the variables that are cointegrating whereas α⊥ determine the coefﬁcients of the
common trends. Thus the two concepts of cointegration and common trends that have been created as economic
concepts, and deﬁned precisely in the VAR model, are estimated in this dual manner, see also Gonzalo and Granger
(1995).
It is now clear how in principle one should analyse the rather complicated model where both restrictions on α and β
are imposed.
One conditions the levels on the known cointegrating relations (b′ R1t) and conditions on the equations which are
known to contain no cointegrating relations, i.e. A⊥′ R0t. Similarly one transforms the levels to the linear combinations
which are postulated as the only possible cointegrating relations (H′ R1t) and restricts attention to the equations that
contain the cointegrating relation, i.e. transforms to ā⊥′ R0t.
Finally one can get a different formulation by calculating the likelihood function concentrated to be a function of α
alone. We go back to (6.9) and derive the two equations



                                                                                                                   (8.21)


                                                                                                                   (8.22)
and then condition (8.21) on (8.22) and get



                                                                                                                   (8.23)
for               .
For ﬁxed α the analysis of (8.22) and (8.23) is performed by regression leading to two contributions to the likelihood
function. Equation (8.22) gives the contribution
130                                        Partial Systems and Hypotheses




and equation (8.23) leads to a regression of α′ R0t on R1t and α⊥′ R0t which gives the contribution



and β is, for ﬁxed α, given by the regression estimate




The maximized likelihood function is found from




From the identity




it follows that




Hence




Thus L is maximized by maximizing



i.e. by choosing α⊥ to be the eigenvectors corresponding to the p − r smallest eigenvalues of




This explains explicitly why    is found as the solution to an eigenvalue problem.
                                             Partial Systems and Hypotheses                                              131


8.4 Exercises

8.1
Consider the model




where ∈t, t = 1, . . . , T are i.i.d. N2 (0, Ω). Find the maximum likelihood estimator of α1 and α2 and derive the likelihood
ratio test of the hypothesis α1 = α2. Discuss the properties of the process Xt when α1 = α2, and when α1 ≠ α2.
                 9 The I(2) Model and a Test for I(2)
We consider again equation (4.1) with deterministic term Dt




                                                                                                                 (9.1)
The I(2) model is deﬁned by two reduced rank conditions, see (4.4) and (4.5), and it is therefore convenient to
reparametrize the model such that the matrices involved in the reduced rank conditions are displayed directly. We
rewrite (9.1) as




                                                                                                                 (9.2)
where             , as before and                          .
In this chapter we deﬁne in section 9.1 the I(2) model as a submodel of the general VAR and discuss various
modiﬁcations of the model by restricting the deterministic terms. In section 9.2 we derive a misspeciﬁcation test for
the presence of I(2) components, in order to check the validity of the I(1) model and in section 9.3 we analyse the
Australian data in order to see if the data indicates the presence of an I(2) component.
The statistical theory of the I(2) model is much less developed than the theory for the I(1) model, and we do not
attempt to give a genuine statistical analysis of the I(2) model here. The discussion given is only sufﬁcient for an
introduction to the problems. We refer to Johansen (1992c, d) for illustrative examples and to Juselius (1992), (1995)
for applications of the I(2) analysis.


9.1 A Statistical Model for I(2)
The I(2) model Hr, s is deﬁned as the submodel of the VAR (9.2). We shall not analyse the model in detail, since the
theory is quite involved. Instead we shall give a simple two step procedure for estimating the model and deriving test
statistics for the presence of I(2) components in the data.
                                            The I(2) Model and a Test for I(2)                                              133


DEFINITION 9.1 For s = 0, 1, . . . , p−r, r = 0, 1, . . . , p−1 the I(2) models Hrsare deﬁned as submodels of the VAR by the two
reduced rank conditions



                                                                                                                           (9.3)
where α and β are p × r matrices of full rank with r < p, and



                                                                                                                           (9.4)
where ξ and η are (p − r) × s matrices, with s ≤ p − r.
Thus the model is deﬁned by two reduced rank conditions but the remaining parameters vary freely, that is, the
parameter space is described by the parameters



where the only restriction is (9.4). It is convenient to have a notation for the submodels      of H(r) deﬁned by α and β
having full rank r. Similarly we deﬁne        as the submodel of Hr, s, where also ξ and η have full rank. In Table 9.1 it is
shown how the I(1) and I(2) models are nested.
Many other models can be deﬁned by specializing the variable Dt. In particular if Φ Dt = μ, it is seen from (4.28) that μ
gives rise to a quadratic trend with a coefﬁcient      . Thus a submodel of Hr, s can be deﬁned by the restriction α2′μ =
0, which corresponds to assuming that there is no quadratic trend in the process. Similarly a further submodel is
obtained by assuming that α1′μ = 0 too. We shall use the notation Hr, s* for the submodel of Hr, s with Φ Dt = μ and α2′μ
= 0, such that no quadratic trend is present. The likelihood analysis of these models is given in Johansen (1995a, 1996)
and Paruolo (1995b, 1996). The likelihood analysis is not easy in the sense that there are no simple algorithms for the
calculation of the maximum likelihood estimator, and we do not have any information about uniqueness and existence,
see, however, Johansen (1996) for an algorithm. The asymptotic distributions are derived in the above references and
they are more complicated than those that are valid for the I(1) analysis.
The next section contains a simple analysis of the likelihood function that leads to manageable calculations consisting
of repeated applications or reduced rank regression and a test for the presence of I(2) components, that can be
analysed using the tables given in Chapter 15.
Table 9.1 The Relation Between the I(2) Models and the I(1) Models for P = 3
   r         The                                                           The
             I(2)                                                          I(1)
             models                                                        models
   0         H0,0   ⊂             H0,1      ⊂          H0,2      ⊂         H0,3   =                       ⊂         H(0)

   1                              H1,0      ⊂          H1,1      ⊂         H1,2       =                   ⊂         H(1)

   2                                                   H2,0      ⊂         H2,1       =         H2        ⊂         H(2)
134                                       The I(2) Model and a Test for I(2)


9.2 A Misspecication Test for the Presence of I(2)
In (9.2) only Π and Γ enter the reduced rank conditions and the remaining parameters Ψ = (Ψ1, . . . , Ψk−2, Φ) are
unrestricted. It is therefore convenient to introduce the short-hand notation



such that the equations are written as



                                                                                                                      (9.5)
Let us now assume that we have performed an I(1) analysis which in view of (9.5) is a reduced rank analysis of Δ2Xt on
Xt−1 corrected for lagged differences and second differences and the dummies as collected in Zt. We want to guard
ourselves against the presence of I(2) components which will invalidate the conclusions from the I(1) analysis.
Before performing the I(1) analysis we have calculated the roots of the characteristic polynomial, and noted that some
of them are close to z = 1. We can also calculate the roots using the coefﬁcients estimated under the I(1) model, that is,
after having imposed p − r unit roots. It may turn out that there are still roots close to z = 1. This can now have two
explanations, the ﬁrst is that we have not imposed enough unit roots and have determined the rank incorrectly. The
rank determination tests should have taken care of this possibility. The other possibility is that there are I(2)
components in the system, since we know, see Corollary 4.5, that for an I(1) process the number of unit roots plus the
cointegrating rank should be the dimension.
Since it is difﬁcult to assess the uncertainty of the roots of the characteristic polynomial we propose here a test derived
from the likelihood function.
The test is based upon an analysis of the I(2) model as deﬁned in section 9.1, in particular the reduced rank condition
(9.4) under the assumption that (α, β, r) are known.
If (α, β, r) are known we can reformulate model (9.5) by multiplying by (α, α⊥)′ and we ﬁnd the equations



                                                                                                                      (9.6)




                                                                                                                      (9.7)

Next deﬁne                                                                      , and                and subtract ω times
(9.6) from (9.7) to obtain
                                            The I(2) Model and a Test for I(2)                                              135


The equations (9.6) and (9.2) have independent error terms and parameters (α⊥′ Γ, α⊥′ Ψ, Ωα⊥ α⊥) and (ω, (α′ − ω α⊥)Γ,
(α′ − ωα⊥′) Ψ, Ωαα.α⊥) respectively, and it is seen that the two sets of parameters are variation free, in the sense that for any
value of the respective sets of parameters one can reconstruct the original parameters (Γ, Ψ1, . . . , Ψk − 2, Φ, Ω) still for
known values of α, β, and r. Thus the equations can be analysed independently as long as no cross-equation restrictions
are imposed. It is furthermore seen that the reduced rank condition (9.4) is a restriction of the parameters for (9.6)
only, and that the maximum likelihood estimator of equation (9.2) is found by a regression analysis of α′ Δ2Xt − β′ Xt − 1
on α⊥′ Δ2Xt, Δ Xt − 1, and Zt.
In order to analyse (9.6) we introduce the new variables β′ Δ Xt − 1 and β⊥′ Δ Xt − 1 through the usual trick of writing I =
ββ′ + β⊥β⊥′, such that



From (9.4) it follows that



                                                                                                                            (9.8)
Equation (9.8) is an equation for the differences of the process which explicitly contains the parameters ξ and η. This
shows that the likelihood analysis of (9.6) or (9.8) can be performed by reduced rank regression of α⊥′ Δ2Xt on β⊥     ′
Δ Xt − 1 corrected for β′ Δ Xt − 1 and lagged second differences and dummies as collected in Zt.
What is achieved here by the analysis of (9.8) and (9.7) is to derive an equation in differences (9.8) using the
information in the levels matrix Π = αβ′. Thus model Hr, s is analysed by reduced rank regression if (α, β, r) were
known.
The likelihood ratio test                        of Hr, s in   (or H(r)) is found by analysing (9.8) for the value s as well as
for the value s = p − r and comparing the achieved values of the maximum. Note that the contribution from equation
(9.2) is the same for the analysis of Hr, s as for the analysis of            , since the parameters in the two equations are
variation free. Hence the contribution from (9.2) to the maximized likelihood function cancels when calculating the
likelihood ratio statistic.
This shows that the likelihood ratio test has the form (6.18) where the coefﬁcients λi are calculated from an eigenvalue
problem like (6.15) where S11 equals the product moments of β⊥′ Δ Xt − 1, S00 equals the product moments of α⊥′ Δ2Xt,
and S01 the mixed moments all corrected for β′ Δ Xt − 1 and lagged second differences and dummies.
Notice that this analysis can easily be modiﬁed if we want to restrict the constant term in the analysis of the differences,
thereby ruling out the possibility of a quadratic trend. The modiﬁcation is described in Chapter 6, section 6.2.
136                                            The I(2) Model and a Test for I(2)


Thus for instance if Φ Dt = μ, the analysis of (9.8) will involve correcting for the constant term. If we want to restrict
this we assume that ξ⊥′ α⊥′ μ = 0 and perform a reduced rank regression of ⊥′ Δ2Xt on the stacked variable (Δ Xt − 1′ β⊥, 1)
corrected for lagged second differences, see (6.29).
We now give a misspeciﬁcation test for the presence of I(2) variables in the system. We give it in the case where we are
willing to assume that there is a trend in the system but no quadratic trend. Thus the analysis, which is illustrated in the
next section, runs as follows: ﬁrst we perform an I(1) analysis as described in Chapter 7 and determine            using the
test statistics Qr = −2log Q(H(r)|H(p)). Next we analyse equation (9.8) using                       but this time with a
restricted constant in order to avoid the presence of a quadratic trend. This gives the test statistics
                                     .
THEOREM 9.2 Consider model (9.2) with Φ Dt = μ. Let Qrdenote the likelihood ratio test (6.18) of H(r) in H(p), and let cp−r(δ)
denote the 1 − δ quantiles as derived from (6.20) with F given by (6.21).
Let denote the likelihood ratio test statistic of in of the form (6.18) calculated with the estimated values of (α, β, r) from the I(1)
analysis, and let       denote the quantiles as derived from (6.20) with F given by (6.32).
We choose to accept r cointegrating relations and no I(2) components on the set Ardeﬁned by




This procedure has the properties



                                                                                                                                 (9.9)
and



                                                                                                                                (9.10)
and



                                                                                                                                (9.11)

Thus if the rank of Π is r and there are no I(2) components the procedure picks out the true value of r with a high
probability (1 − δ) in the limit. It picks out a too low value with limiting probability zero. Finally if there are I(2)
components the procedure will under          accept no I(2) components with a small probability. A discussion of the
proof of this result will be given in Chapter 12.
                                           The I(2) Model and a Test for I(2)                                             137


9.3 A Test for I(2) in the Australian Data
The I(1) analysis from Chapter 7 gives the estimated values of (α, β, r). The transformed equations leading to (9.8) can
then be solved and we do this for each value of r = 0, 1, . . . , 5. The likelihood ratio test statistics are calculated as in
(6.30).
Note that we choose in the initial I(1) analysis to have the constant unrestricted, but prefer to restrict it in the second
analysis in order to avoid the possibility of a quadratic trend. The test statistics are given in Table 9.2.
Based upon the I(1) analysis from Chapter 7 we have chosen r = 2 and then proceed by comparing                 with the
quantiles          (5%) from Table 15.2. It is seen that there seems to be evidence of I(2) in the data, since s = 0 is
rejected, as is s = 1, but the hypothesis that s = 2 gives a test statistic of             which should be compared
with the (asymptotic) 95 per cent quantile of 9.09.
The evidence for I(2) that we ﬁnd is the following: the test statistics seem to indicate that s = 2, and the plot of     in
Fig 2.4 suggests that the inﬂation rate is non-stationary and drifts like a random walk. There is of course the possibility
that the shift in inﬂation rate after 1980 is better described as a deterministic shift. But for now we shall continue with
the idea that the shift is random and indicates a persistent shift corresponding to the I(1) nature of the inﬂation rate.
It is noteworthy that the graph of       looks more non-stationary than the graph of        see Fig. 7.2. This is also
evidence of I(2) since the result of Theorem 4.6 shows that β′ Xt corrected for Δ Xt is stationary even if Xt is I(2),
whereas β′ Xt is not in general stationary by itself.
The ﬁnal piece of evidence is that when calculating the roots of the characteristic polynomial for the estimated values
we see from Table 9.3 that apart from the three imposed unit roots there is a root close to one with the value 0.83. If
this corresponds to a unit root we seem to have a case where the number of unit roots cannot be calculated from the Π
matrix alone.
Table 9.2 The Likelihood Ratio Statistics        and Qr Together With the Critical Values Cp−r (5%) and               (5%).
   r                                                                                          Qr              cp−r

   p−r−s          5              4               3              2              1
   0              261.50         157.44          95.96          45.86          10.91          101.38          68.91
   1                             178.48          84.48          32.61           9.18           51.78          47.18
   2                                             82.26          28.10           4.21           28.43          29.51
   3                                                            28.82          10.04           10.24          15.20
   4                                                                            8.84           4.45            3.96
                   75.33          53.35          35.07          20.17           9.09
138                                        The I(2) Model and a Test for I(2)


Table 9.3 The Eigenvalues of the Companion Matrix for the Australian Data. the Cointegrating Rank Is R = 2 and β Is
Unrestricted and α Restricted as in Table 7.7.
   Root                          Real                          Complex                       Modulus
   ρ1                            1.00                          0.00                          1.00
   ρ2                            1.00                          0.00                          1.00
   ρ3                            1.00                          0.00                          1.00
   ρ4                            0.83                          0.00                          0.83
   ρ5                            0.72                          0.06                          0.72
   ρ6                            0.72                          -0.06                         0.72
   ρ7                            0.11                          0.00                          0.11
   ρ8                            -0.02                         -0.21                         0.21
   ρ9                            -0.02                         0.21                          0.21
   ρ10                           -0.29                         0.00                          0.29

Taken by themselves these pieces of evidence are perhaps not very convincing, but taken together they seem to point
towards the conclusion that there is I(2) in the data.
The question then arises to what extent this invalidates the I(1) analysis and the conclusions reached.
It is somewhat surprising that hypothesis tests on α and β remain valid in the sense that inference is still asymptotically
χ2. What is no longer valid is the interpretation of these hypotheses, since β′ Xt is no longer stationary, and α2 = 0 is no
longer a hypothesis about weak exogeneity.
Thus there is a need for the analysis of the data from the point of view of I(2).
Part II The Probability Analysis of Cointegration
This page intentionally left blank
         10 Probability Properties of I (1) Processes
In this chapter we discuss basic properties of I (1) processes given by the autoregressive model (4.1) allowing for a
constant term, that is, Φ Dt = μ. The process is by (4.6) given as a mixture of a trend, a random walk, and a stationary
process:




                                                                                                                    (10.1)
where C = β⊥ (α⊥′ Γβ⊥)−1 α⊥′. We discuss the behaviour of the process in different directions, and apply these results to
ﬁnd asymptotic properties of various product moment matrices needed to derive properties of likelihood ratio tests
and estimators in Chapters 11 and 13.
All estimators and test statistics are derived under the assumption of Gaussian errors, but we prove limit results for the
process under the slightly more general assumption that the errors are independent with the same distribution with
mean zero and variance Ω, such that Δ Xt becomes a linear process.
First, however, we discuss some useful identities between variances and covariances of the various stationary
processes. The results are taken from Johansen (1991b).


10.1 Finite Sample Results
There are very few exact results in the theory of autoregressive processes. The main ones that we use here are relations
between the second order moments conditional on the past values of the process. Under the assumptions of I (1) and
cointegration we have that β′Xt is stationary and that Δ Xt is stationary, see Theorem 4.2. We deﬁne




and the ﬁrst result concerns relations between these variance-covariance matrices and the parameters α and β in model
H1 (r).
142                                                 Probability Properties


LEMMA 10.1 Under the I(1) assumptions and the assumption of i.i.d. errors the following relations hold



                                                                                                                     (10.2)

and hence                                                                                                            (10.3)



                                                                                                                     (10.4)
Theses relations imply that



                                                                                                                     (10.5)




                                                                                                                     (10.6)


                                                                                                                     (10.7)


                                                                                                                     (10.8)


                                                                                                                     (10.9)
PROOF From the model equation



one ﬁnds immediately the results (10.2), (10.3), and (10.4) by calculating the conditional variances given lagged
differences Δ Xt−1, . . . , Δ Xt−k+1. To prove (10.5) multiply ﬁrst by α from the right, and both sides become the identity,
then multiply by Σ00α⊥ = Ωα⊥, see (10.4), and both sides reduce to zero. Since the p × p matrix (α, Ωα⊥) has full rank the
relation (10.5) has been proved.
The relation (10.6) is proved by applying the identity α⊥′ Σ00 = α⊥′Ω, see (10.4), and by multiplying by the matrix (α,
Σ00α⊥) = (α, Ωα⊥).
The relation (10.7) is proved by inserting                such that (10.7) becomes



This relation can be proved by multiplying (10.5) by



The proof of (10.8) follows by noting that the p × p matrix K = (Ω−1α, α⊥) has full rank, such that we can write,
see (10.4),
                                                 Probability Properties                                             143




Finally (10.9) is proved as follows: ﬁrst note that




Then we ﬁnd




This completes the proof of Lemma 9.1.
                                                                                                                       □


10.2 Asymptotic Results
The process generated by the autoregressive equations has the property that ▵ Xt is a linear process, see Chapter 2. We
have given in Theorem B.13 some basic limit results for such processes, and here we apply them to the process Xt. The
asymptotic properties of the non-stationary process Xt are described by a Brownian motion W in p dimensions on the
unit interval. This Brownian motion is the weak limit of the random walk        , which appears in the representation
(10.1) and can be found by rescaling the time axis and the variables as follows:




We apply the results in Theorem B.13 in order to ﬁnd the asymptotic properties of the test statistics and estimators
derived from the cointegration model. We have only given the results in Appendix B for C[0, 1] but here we apply the
results for D[0, 1], since the normalization above leaves ST(u) a piecewise constant function rather than a continuous
function.
From the representation (10.1) it follows that Xt is composed of a random walk           , a linear trend (τ t = Cμ t), a
stationary process which
144                                               Probability Properties


is a linear process with exponentially decreasing coefﬁcients and the initial values       . The asymptotic properties of
the process therefore depend on which linear combination of the process we consider. If we consider τ′ Xt it is clear
that the process is dominated by the linear trend, whereas if we take vectors γ which are orthogonal to τ and linearly
independent of β then the dominating term is the random walk                 since γ′ τ t = 0. Finally if we take the linear
combinations β′Xt then both the trend and the random walk are multiplied by β′C = 0, and β′Xt is stationary since the
initial values cancel. Thus let γ(p × (p − r − 1)) be chosen orthogonal to τ and β, such that (β, γ, τ) span all of Rp. We
give some examples which illustrate the choice of τ and γ.
EXAMPLE 10.1 We consider the two-dimensional process given by the equations




The equations are solved to give




Thus both processes are random walks with a trend, and the processes do not cointegrate. It is, however, easily seen
that the linear combination




is a random walk with no trend. Thus the trend can be eliminated by multiplying by τ⊥ = (μ2, − μ1)′. In this case there is
no cointegration and we can take β = 0 and γ = τ⊥.
EXAMPLE 10.2 We next consider the three-dimensional process given by the equations




where −2 < α1 < 0. These equations are solved to give
                                                     Probability Properties                                                    145


It is seen that X1t, X2t, and X3t have a linear trend, which in this case is eliminated by the cointegrating vector β = (1,
−1, 0)′. This is an instance of a general result that β′ C = 0, which annihilates both the stochastic and the deterministic
trends. We ﬁnd that τ = (μ2, μ2, μ3)′ and γ = (μ3, μ3, −2μ2)′ which together with β span the whole space.
We next give the asymptotic behaviour of the process in the directions τ and γ. Recall the deﬁnition γ = γ(γ′ gamma)−1.
LEMMA 10.2 Let the process Xtbe given by (10.1), let τ = C μ and choose γ orthogonal to β and τ such that (β, τ, γ) has full rank p.
Then as T → ∞ and u ∈ [0, 1]



                                                                                                                            (10.10)




                                                                                                                            (10.11)

We deﬁne the normalization matrix                and combine the results into




It then follows for               that




                                                                                                                            (10.12)
where                 .
PROOF We apply Theorem B.13. From the representation (10.1) we see that Xt is decomposed into a random walk, a
linear trend, and a stationary process. Weak convergence of                now follows from (10.1). The random walk
term gives γ′ CW (u) in the limit, the trend term vanishes since γ′ τ = 0, and the stationary term disappears by (B.17).
Weak convergence of T−1τ′ X[Tu] follows from (10.1). The random walk part tends to zero by the factor T−1, the linear
term converges to u, and the stationary part vanishes by (B.17).
Finally weak convergence of the average




follows from the continuous mapping theorem, Theorem B.5, since the mapping                                  is continuous.
Note that the limiting behaviour of the non-stationary part of the process is completely described by the matrix C, see
(10.1), the direction τ = C μ, and the variance matrix of the errors Ω.
146                                               Probability Properties


Using these results one can describe asymptotic properties of the product moment matrices and Sij deﬁned in
Chapter 6, which are basic for the properties of the estimators and tests. Recall that the residuals R0t and R1t are deﬁned
by regressing Δ Xt and Xt−1 respectively on lagged differences and a constant, and that




LEMMA 10.3 Under the assumptions of Lemma 10.2



                                                                                                                   (10.13)


                                                                                                                   (10.14)


                                                                                                                   (10.15)



                                                                                                                   (10.16)



                                                                                                                   (10.17)


                                                                                                                   (10.18)
PROOF We apply repeatedly the results of Theorem B.13 about the proper normalization of product moments. In the
following we use [ ] to indicate that a product moment has been normalized such that it converges in distribution. The
basic rules are that if Yjt is a process that is I(j), j = 0, 1, then



are all normalized to converge weakly.
We apply the notation Z2t = (Δ Xt−1′, . . . , Δ Xt−k+1′)′ from Chapter 6, and let       . Since the process Δ Xt is a
stationary and ergodic process it follows from the law of large numbers that the different product moments in the
expression



where
                                                    Probability Properties                                                  147


and




converge in probability to the corresponding population values. Thus




EXERCISE 10.1 This proves (10.13). In order to prove (10.14) we use the notation




and write with an obvious notation



Since the process β′ Xt is stationary and ergodic it follows again from the law of large numbers that β′ S11β converges in
probability towards its population value




The proof of (10.15) is similar.
For the proof of (10.16) we investigate the matrix S11 in the directions given by γ = γ(γ′γ)−1 and τ = τ(τ′τ)−1. We ﬁnd



                                                                                                                        (10.19)
The convergence of the ﬁrst term follows from (10.12) together with the continuous mapping theorem applied to the
mapping                 .
We ﬁnd




It next follows from Theorem B.13 that                 is of the order of 1, since Z2t is I(0) and γ′ Xt is I(1). Thus the extra
factor of T−1 ensures that the ﬁrst term in (10.19) is dominating and gives the required limit. In the direction τ we ﬁnd
148                                             Probability Properties


The terms in brackets have been normalized to converge in distribution, see Theorem B.13, and the extra factor of T−1
makes sure that the ﬁrst term is dominating, giving the limit




The term T−3/2τ′ S11γ is treated in the same way and the results are collected to prove (10.16).
The result (10.18) follows from Theorem B.13 in a similar way.
The proof of (10.17) follows from




The extra factor      in the second term makes sure that in the limit the ﬁrst term is dominating and we ﬁnd from
(10.12)




In the direction τ we ﬁnd




As before the ﬁrst term is dominating and we ﬁnd the limit




Combining these results we have ﬁnally proved Lemma 10.3.
□
EXAMPLE 10.3 As an application of the above results consider the test for no cointegration Π = 0 in the model



Under the null hypothesis Xt is a random walk               . In this case there is no trend and no cointegration under
the null hypothesis, hence we can take β = τ = 0 and γ = I in the above results. Thus we ﬁnd from (10.10) that in this
very special case we have
                                                 Probability Properties                                                 149


From (B.13) we ﬁnd




and ﬁnally from (B.14) we get




These are the three basic results needed for the asymptotic behaviour of the test statistic for the hypothesis that Π = 0.
The general problem will be taken up in Chapter 11.

10.3 Exercises
10.1
Consider the model



In Chapter 2 it is mentioned that the likelihood ratio test for Γ1 = 0 in the unrestricted VAR model is asymptotically
distributed as χ2 with p2 degrees of freedom.
With the notation



we deﬁne




  1. Show that the estimator of Ω in the unrestricted VAR is given by




      whereas the estimator under the null hypothesis that Γ1 = 0 is given by




  2. Find an expression for the likelihood ratio test statistic for the null that Γ1 = 0 expressed in terms of    and     .
150                                            Probability Properties


  3. Show that if also Π = 0 such that the process Xt is a random walk, then         has the same limit distribution
     as             , which implies that                        . Hence the asymptotic distribution does not depend
     on the presence of I(1) variables in this case.


10.2
Let the I(2) process Xt be given as a cumulated random walk:




where as usual the ∈ are i.i.d. with mean zero and ﬁnite variance. Consider the mapping from C[0, 1] to C[0, 1] given
by associating to every continuous function f its integral               .
  1. Prove by the continuous mapping theorem applied to this functional that




  2. Use the result in 1. to show that




10.3
Consider the regression



where {εt} is as before, and Xt a random walk with ﬁnite variance, which is independent of the ∈. 1. Find the limit
distribution of the regression estimator for β




  2. Solve the same problem if Xt is an I(2) process given as a cumulated random walk, but still independent of the ∈.
      11 The Asymptotic Distribution of the Test for
                 Cointegrating Rank
In this chapter we give various forms for the limit distribution of the likelihood ratio test for cointegrating rank. The
limit distribution depends on the model for the deterministic terms, and we give the different formulae that can be
obtained for a constant and a linear term in the equation even when there are restrictions as discussed in Chapter 6.
The proofs and concepts are rather technical, and we therefore ﬁrst give some special cases which introduce the basic
notation and illustrate the type of analysis that is necessary for understanding the limit theory of test statistics in the
presence of unit roots and cointegration.


11.1 Testing ∏ = 0 in the Basic Model
We assume here that εt are independent identically distributed with mean zero and variance Ω in p dimensions.
Consider ﬁrst the situation from Example 10.3, where



and we want to test that Π = 0, that is, we are testing model H2 (0) in model H2(p), see (5.15), where the hypothesis
without deterministic terms is deﬁned. The test statistic is given by




                                                                                                                    (11.1)
see (6.18), where           solve the equation



                                                                                                                    (11.2)

These Product moments were investigated in Example 10.3, where it was found that




                                                                                                                    (11.3)
152                                      Asymptotic Distribution of Rank Test




                                                                                                                      (11.4)



                                                                                                                      (11.5)
With these results we can now discuss the limit behaviour of the test statistic (11.1). We ﬁrst note that S11 is OP (T)
whereas S01 and S00 are Op (1) such that the roots of equation (11.2) converge to zero like T−1. This on the other hand
implies that




The sum of the eigenvalues can be found as follows:



which shows that




From (11.3), (11.4), and (11.5), we ﬁnd that the limit of the likelihood ratio test statistic is given by




If we deﬁne the standard Brownian motion                 , we get the result




                                                                                                                      (11.6)
If the null hypothesis is not valid, and we have cointegration, then one of the eigenvalues will be positive in the limit. In
this case



which shows that the asymptotic power of the test is 1.
Note that the limit distribution does not depend on the parameter Ω, but only on the dimension p or the number of
random walks.
                                        Asymptotic Distribution of Rank Test                                          153


If p = 1 the limit distribution is the squared Dickey–Fuller distribution see Fuller (1976) and we shall call the
distribution (11.6) the Dickey–Fuller distribution with p degrees of freedom, DFp. The reason that we get the squared
DF distribution is that we test the hypothesis Π = 0 against Π ≠ 0, whereas the univariate problem is usually
formulated as Π = 0 against Π < 0, which is a one-side test. One should be aware that a signiﬁcantly large value of the
test statistic (11.6) which rejects Π = 0, could mean that the process is stationary, but of course also that the process
has explosive roots.
It turns out in the following that we get various versions of this fundamental distribution, and we illustrate this in the
next case that we consider, namely the modiﬁcation of the basic model with a constant term added in the equation. In
this case the process is a random walk with a trend under the null hypothesis Π = 0:




The test statistic is calculated in the usual way with the product moments corrected for a constant term. In order to
ﬁnd the limit distribution we assume ﬁrst that μ ≠ 0, such that there is actually a linear trend in the process. The
component Xit of the process Xt grows linearly if μi ≠ 0. If, however, we consider Xt in the p − 1 directions μ⊥ then the
process has no trend since




Thus the directions applied in Chapter 10 become β = 0, γ = μ⊥, and τ = μ. In the direction μ we have




The asymptotic behaviour of the process is given by




since the trend dominates the random walk. Lemma 10.2 implies that



and that
154                                      Asymptotic Distribution of Rank Test




Applying these results to the product moment matrices we ﬁnd from Lemma 10.3 that the asymptotic behaviour is
different in different directions. Thus




and ﬁnally




Using the same arguments we ﬁnd




and




and ﬁnally        .
We combine these results by introducing the matrix                    and the process G = (G1′, G2′)′ with components




We then get the results from Lemma 10.3




It is seen that again S11 tends to inﬁnity which implies that the eigenvalues   of equation (11.2) tend to zero, and that
the test statistic has the same limit distribution as
                                        Asymptotic Distribution of Rank Test                                          155


This quantity is invariant under linear transformations of G and W. We therefore deﬁne the standard Brownian motion
B = (B′1, B′2)′ as follows




such that B is a linear transformation of W and has variance I. Similarly we deﬁne the process F = (F′1, F′2)′ by




Note that F is a linear transformation of G. Applying these transformations and using the invariance of the test statistic
under linear transformations we ﬁnd that the limit distribution of the trace test statistic where we correct for the
intercept has the form




                                                                                                                    (11.7)

This limit distribution is the most general form we get in the context of testing for cointegration and it depends on the
degrees of freedom but also on the choice of F. The distribution is non-standard and has to be tabulated by simulation,
see Chapter 15.
The process F reﬂects the properties of the process Xt, in the sense that in one direction it behaves like a trend and
orthogonal to this it behaves like a random walk. The process is corrected for its mean as is Xt in the statistical
calculation. Thus the presence of the linear term in the model changes the statistical calculations by correcting the
processes Xt and Δ Xt for their mean and it changes the limit process F by making it linear in one component.
In the univariate case only the linear part of the process F is present and we ﬁnd an expression which is just a χ2 (1).




Note that if we investigate the limit distribution of the test statistic (11.1) with the parameter value μ = 0, then the
process Xt has no linear trend and the above argument has to be modiﬁed. The limit distribution is given by (11.7) but
now with          , since Xt is corrected for an
156                                            Asymptotic Distribution of Rank Test


intercept. This limit distribution has broader tails than (11.7), which is unfortunate since it means that under the
hypothesis Π = 0, there are two different limit distributions, which means that not even in the limit the test is similar.
This leads to complications in the procedure for testing for cointegrating rank which will be dealt with in Chapter 12.
Next we turn to the formulation of the general result for the test for cointegration.


11.2 The Limit Distribution of the Test for Cointegrating Rank
In this section we consider the full model




                                                                                                                                      (11.8)
and the hypothesis Π = α β′ for α and β of dimension p × r as well as the submodels discussed in Chapter 5 deﬁned by
restrictions on μ0 and μ1. We ﬁnd the limit distribution under various assumptions on the process Xt, the main one
being that there are no I(2) processes present, see Theorem 4.2, that is, that α′⊥Γ β⊥ is of full rank. The limit distribution
is independent of the choice of Γ1, . . . , Γk−1 as long as the assumptions of Theorem 4.2 are satisﬁed, but depends on
the rank of α and β and to some extent on the value of μ0 and μ1. We apply the notation from Chapter 6 for the various
models deﬁned by restrictions on the deterministic terms. In order not to overburden the notation we assume
throughout that α and β have full rank r and that the process Xt is I(1). We can then prove
THEOREM 11.1 The limit distribution of the likelihood ratio test statistic for the hypothesis Π = α β′ where α and β are p × r is in
general given by the DF distribution with p − r degrees of freedom




                                                                                                                                      (11.9)
where B is a p − r dimensional Brownian motion on the unit interval and F depends on B and on the model in which the hypothesis is
being tested. If the deterministic term is μt = μ0 + μ1t, and if α′⊥ μ1 ≠ 0 then




                                                                                                                                    (11.10)
where the random coefﬁcients (a, b, ai, bi, i = 1, . . . , p − r − 1) are found by correcting u2and Bi (u) for a linear trend and a constant.
The distribution
                                                Asymptotic Distribution of Rank Test                                                       157


is tabulated by simulation in Chapter15, Table15.5. If α′⊥ μ1 = 0, there is no quadratic trend and we deﬁne Fi = Bi − ai − biu, i =
1, . . . , p − r.
If the deterministic term is μt = μ0 + α ρ1t then




                                                                                                                                       (11.11)
where the random coefﬁcients (a, ai, i = 1, . . . , p − r) are found by correcting u and Bi (u) for a constant. The distribution is tabulated by
simulation in Chapter15, Table15.4.
If the deterministic term is μt = μ0, and α′⊥ μ0 ≠ 0,




                                                                                                                                       (11.12)
where the random coefﬁcients (a, ai, i = 1, . . . , p − r − 1) are found by correcting u respectively Bi (u) for a constant. The distribution is
tabulated by simulation in Chapter15, Table15.3. If α′⊥ μ0 = 0 there is no trend in the process and we can take Fi = Bi − ai, i = 1, . . . ,
p − r.
If the deterministic term is μt = α ρ0then




                                                                                                                                       (11.13)
The distribution is tabulated by simulation in Chapter15, Table15.2.
If the deterministic term is μt = 0, then



                                                                                                                                       (11.14)
The distribution is tabulated by simulation in Chapter15, Table15.1.
Finally all tests are consistent, in the sense that if the parameter is a point in the alternative then the power tends to 1.
The proof will be given below, but some comments will be given here. Note that the limit distribution has the same
form (11.9) in all cases. Note that the statistical model H (r), say, has freely varying parameters but that the limit
distribution of the test statistic depends not only on the number of common trends but also on whether α′⊥μ1 = 0 or
not. We have chosen to simulate the asymptotic distribution only in the generic case of full rank of α and β and such
that α′⊥μ1 ≠ 0, and α′⊥μ0 ≠ 0. Take for instance the test for H (r) in H (p). The test statistic is calculated by ﬁrst correcting
for a constant and a linear term, and it is deﬁned as the sum of the smallest p − r eigenvalues of a suitable eigenvalue
problem. If in fact α or β has rank
158                                       Asymptotic Distribution of Rank Test


s < r, then the limit distribution is not given by (11.9) but rather as the sum of the smallest p − r eigenvalues of an
eigenvalue problem




where F consists of a p − s dimensional Brownian motion and where the last component is u2, all corrected for a
constant and a linear term, see exercise 11.3 for an example. Similarly if in fact α′⊥μ1 = 0, such that no quadratic trend
appears, the limit distribution again has to be modiﬁed, since the quadratic trend does not appear. These exceptional
cases form a small subset of the parameter set deﬁned by the model, and we discuss in Chapter 12 how they inﬂuence
the determination of the cointegrating rank. Basically we assert that if there is any doubt in practice if, say, α′⊥μ1 = 0 or
not this should be tested and included in the determination of the cointegrating rank.
PROOF We next turn to the proof of Theorem 11.1, that is, we want to focus on the proof of (11.9) in the case where F
is given by (11.12) since the other cases are entirely similar. The likelihood ratio test statistic of H1 (r) in H1 (p) is given
in the form




                                                                                                                        (11.15)
where the eigenvalues               are the smallest solutions to the equation



                                                                                                                        (11.16)
see (6.15). Let                   . We apply Lemma 10.3 to investigate the asymptotic properties of S (λ) and use the
fact that the ordered solutions of (11.2) are continuous functions of the coefﬁcient matrices.
We then ﬁnd from Lemma 10.3, that for                       and                 we get




                                                                                                                        (11.17)
This equation has p−r zero roots and r positive roots given by the solutions of



                                                                                                                        (11.17)

This shows that the r largest solutions of (11.2) converge to the roots of (11.17) and that the rest converge to zero.
                                       Asymptotic Distribution of Rank Test                                       159


Next consider the decomposition




                                                                                                               (11.18)
and let T → ∞ and λ → 0, such that ρ = Tλ is ﬁxed. From Lemma 10.3 it follows that



                                                                                                               (11.19)
since the ﬁrst term tends to zero, which shows that in the limit the ﬁrst factor in (11.18) has no roots. In order to
investigate the next factor we note the following consequence of Lemma 10.3:




                                                                                                               (11.20)
Inserting (11.19) and (11.20) into the second factor in (11.18) we ﬁnd




where N is a notation for the matrix



By Lemma 10.1 this matrix equals



which shows that the limit distribution of B′TS10 α⊥ = B′T (S10 − S11 β α′) α⊥ can be found from Lemma 10.3, that is,




Finally Lemma 10.3 implies that




The above results imply that the p − r smallest solutions of (11.2) normalized by T converge to those of the equation
160                                     Asymptotic Distribution of Rank Test




                                                                                                                 (11.20)
In order to simplify this expression note that the roots are invariant to linear transformations of G and of α′⊥W. Deﬁne
therefore the standard Brownian motions




It is seen that B = (B′1, B′2)′ is a standard Brownian motion since the covariance between B1 and B2 contains the factor



where the last equality follows by the choice of γ. The process B = (B′1, B2)′ is a linear function of α′⊥W, and can be
inserted instead of this process into (11.20). We also see that with the deﬁnition          and F2 = G2, we can express
the equation (11.20) as




                                                                                                                 (11.21)
where F is given by (11.12). This equation has p − r roots. Thus we have seen that the p − r smallest roots of (11.2)
decrease to zero at the rate T−1 and that  converges to the roots of (11.21). From the expression for the likelihood
ratio test statistic (11.15) we ﬁnd that




which is the desired result.
Next note that if α′⊥μ = 0 there is no trend in the process and we need not take it into account in the discussion of the
derivation of the limit result. Thus we can take γ = β⊥ in the proof above and ﬁnd the same result but with             .
The proof of the results for H (r) where F is given by (11.10) is similar. The same holds for the proof of the result
about H2 (r) where the constant term is absent. As a ﬁnal remark note that if the parameter is a point in the alternative
then we have more than r cointegrating relations, and         is positive in the limit. Hence
                                              Asymptotic Distribution of Rank Test                                     161


This shows that any test based upon {−2 log Q (H1 (r) | H1 (p)) ≥ c} will have asymptotic power 1.
                                                                                                                         □
COROLLARY 11.2 The likelihood ratio test in H(r) that the quadratic trend is absent: α′⊥ μ1 = 0 satisﬁes



The likelihood ratio test in H1 (r) that the linear trend is absent: α′⊥ μ0 = 0 satisﬁes




PROOF We prove the result for H1 (r). We ﬁrst note that the parameter space of               is dense in that of H1 (p). In
order to see that, take any parameter value μ0 and Π in H1 (p). If Π has full rank then α⊥ = 0 such that the condition α′⊥
μ0 = 0 is satisﬁed. Hence (μ0, Π) is a point in     . If Π has reduced rank, we can ﬁnd a full rank matrix      as close to
Π as we wish, but then (         ) is a parameter point in        which is close to (μ0, Π). Thus maximizing over H1 (p)
will lead to the same maximum, since the parameter points which are in H1 (p) but not in            comprise a very small
set.
This proves that




Next consider




This shows that




By the results in the proof of Theorem 11.1 we ﬁnd that the limit distribution can be expressed by the p − r
dimensional Brownian motion B as
162                                         Asymptotic Distribution of Rank Test




                                                                                                                              (11.22)
We have here used the identity




Taking the trace of (11.22) the right hand side is χ2 (p − r). The proof for H (r) is similar.
                                                                                                                                      □
THEOREM 11.3 The likelihood ratio test of H1 (r) in H* (r), that is α′ μ1 = 0, or that the trend stationary linear combinations are in
fact stationary, satisﬁes




The likelihood ratio test of H2 (r) in     , that is α′ μ0 = 0, or that all stationary linear combinations have mean zero, satisﬁes




PROOF The model H* (r) is given by the equations




where β*′ = (β′, ρ1) and             . Thus the test of H1 (r) is the test that ρ1 = 0 and is really a test β* of the form β*
= H ϕ. Thus the test statistic is given by




where solves (6.15) and    the corresponding eigenvalue problem based upon      . The asymptotic distribution is
then found by the same methods as explained in Chapter 13 in the proof of Theorem 13.9.
                                                                                                                                      □
The difﬁculty in understanding and applying these results is in keeping the distinction between the statistical model as
deﬁned by its parameter space and the data-generating process as speciﬁed by the parameter value.
                                         Asymptotic Distribution of Rank Test                                          163


In constructing a statistical test we apply the maximum of the likelihood function over the parameter space with and
without parameter constraints, but when calculating the distribution of the test we need to specify the actual parameter
value. Unfortunately it turns out that the same statistic can have not only different distributions under the null
hypothesis, but also different limit distributions. Thus the statistic derived allowing for a linear trend has a different
limit distribution if the trend is actually absent. This should not be confused with the fact that if the statistical model
speciﬁes the absence of the trend then clearly a different statistic is derived.


11.3 Asymptotic Properties of the Test for I(2)
We want to give an indication of the properties of the test for I(2) as derived in Chapter 9, by discussing the proof of
Theorem 9.2. Let us ﬁrst consider the situation where (α, β, r) are known, just as in the derivation of the test statistic.
In this case       will have the limit distribution given by (11.13) since the analysis of (9.3) is an I(1) analysis with
restricted constant term. It turns out that this result holds even if (α, β) are estimated by an I(1) analysis disregarding
the possibility of I(2). We shall not give the proof of this result which requires that we go into the asymptotics of I(2)
processes, but refer to Johansen (1995a) and Paruolo (1995b) for a more complete discussion.
In the proof of Theorem 9.2 given now we thus assume that       has the limit distribution as given by (11.13) if model
     holds. The set Ar on which we choose r cointegrating relations and no I(2) components is given by




PROOF of Theorem 9.2. Under          we have rank(α) = rank(β) = r and that α′⊥ Γ β⊥ has full rank such that no I(2)
components are present. It then follows from Lemma 12.1 that




Hence



by the choice of the quantile.
If H(p)\ H(r) holds then the cointegrating rank is larger than r and in this case           which shows that



Finally assume that      and that there is no quadratic trend. Then        holds for some s = 0, . . . , p − r − 1, and



This completes the proof of Theorem 9.2.
                                                                                                                         □
164                                        Asymptotic Distribution of Rank Test


11.4 Exercises
11.1
Consider the model


and the test statistic of the hypothesis H1 (r) in H1 (p), see Chapter 5. In Chapters 10 and 11 the asymptotic properties
of Xt, Sij, and the test statistic −2log Q(H1(r)|H1(p)) were discussed under the assumption that rank(α) = rank(β) = r
and that α′⊥ μ ≠ 0. In the following assume that α′⊥ μ = 0.
  1. Show that



  2. Show that




  3. Finally show that




where          .

11.2
Consider instead the model


and the test statistic of the hypothesis        in       , see Chapter 5.
Assume again that rank(α) = rank(β) = r.
  1. Show that




  2. Show that if                   and                  , then
                                        Asymptotic Distribution of Rank Test                                      165



Hence




  3. Finally show that




where F′ = (B′, 1).

11.3
Consider the model



and the test statistic of the hypothesis H2 (r) in H2 (p), see Chapter 5.
In Chapters 10 and 11 the asymptotic properties of the test statistic −2log Q(H1(r)|H1(p)), Xt, and Sij were discussed
under the assumption that rank(α) = rank(β) = r. In the following assume that rank(α) = rank(β) = 0.
  1. Show that




  2. Show that




  3. Finally show that
166                                      Asymptotic Distribution of Rank Test




that is, the sum of the p − r smallest solutions of the equation




      where B is p-dimensional Brownian motion.

11.4
Consider next the model


where Dt are three quarterly dummies, which have been orthogonalized to the constant term, that is, they sum to zero
over a year. Consider again the test statistic of the hypothesis H1 (r) in H1 (p), see Chapter 5, and assume that α and β
have full rank r, and that α′⊥μ ≠ 0. Granger's theorem shows that



for C = β⊥ (α′⊥ β⊥)−1 α′⊥. Let τ = Cμ ≠ 0 and deﬁne the coordinate system (β, γ, τ) which spans Rp. The purpose of this
exercise is to show that the seasonal dummies do not matter for the asymptotics, once they have been orthogonalized
to the constant.
  1. Show that (10.10) and (10.11) hold.
  2. Use this to show that Lemma 10.3 holds.
  3. Finally show that




      where F is given by (11.12), such that the conclusions of Theorem 11.1 hold.

11.5
Consider model H2(r), where Φ Dt = 0. Show that the asymptotic distribution of the test statistic λmax, see (6.19), is given
as the smallest eigenvalue of the matrix




where B is a p − r dimensional standard Brownian motion.
             12 Determination of Cointegrating Rank
This chapter contains a procedure for determining the cointegrating rank in the vector autoregressive model. In some
cases there may be strong a priori beliefs about the value of the rank. In this case it is of course important to test this
assumption against the data. Another situation is when little is known a priori, and the rank has to be determined
mainly by the data. This situation can also be formulated as an estimation problem, see Theorems 12.3, 12.7, and 12.9.
In the presence of deterministic terms we meet the problem that the limit distribution under the null of cointegrating
rank r depends on nuisance parameters, namely the presence or absence of the trend and the value of the actual
cointegrating rank, see Theorem 11.1. In this case we suggest a procedure, based on an idea of Pantula (1989), which,
brieﬂy explained, says that if the distribution of the test statistic for a given hypothesis depends on the parameter under
the null hypothesis, then subhypotheses should be identiﬁed where the distribution is constant and has broader tails,
and each of these should be tested. The hypothesis should then only be rejected if all the subhypotheses are also
rejected. This idea is known from statistical literature, see Berger and Sinclair (1984). The results are taken from
Johansen (1994b).
Another problem that we meet is that the hypothesis H (r) is formulated as rank (Π) ≤ r, which makes the hypotheses
nested, but having found that H (r) is consistent with the data we still want to know what the rank is. We therefore test
successively the hypotheses H(0), H(1), . . . , and this gives a consistent way of determining the rank.
In section 12.1 we treat the simplest case where there is no linear term in the model, since then the hypotheses are
nested linearly. In section 12.2 we then give the general case of a constant term in the equation, and in section 12.3 we
deal brieﬂy with the case of a linear term in the equation.
The inference conducted here is asymptotic and simulations show that one can easily ﬁnd situations in practice where
the number of observations is not sufﬁcient to apply the asymptotic results. One should also note that in testing for
cointegrating rank r, one is testing for the number of common trends p − r as well. Thus the ﬁnal acceptance of the
number r should allow an interpretation of the number of cointegrating relations, but also be consistent with an
interpretation of the number of common trends.
168                                       Determination of Cointegrating Rank


12.1 Model Without Constant Term
The model




                                                                                                                     (12.1)
allows one to test H2 (r) in H2 (p) as described in Chapter 5. In Chapter 11 the asymptotic properties of the test statistic
are derived under the assumption that the rank of α and β is r. If in fact α and β have lower rank s < r, then one can
show, see exercise 11.3, that the limit distribution is different, that is, one can show the general result that




where trp−r is the sum of the p − r smallest solutions of the equation




                                                                                                                     (12.2)
and B is p − s dimensional Brownian motion, since under the assumption that α and β have rank s there are p − s
common trends.
The hypothesis H2 (r) assumes that the rank is less than or equal to r. Thus when calculating the p–value



we also have to take into account the case where the rank is less than r. Simulations show that the distributions we ﬁnd
for rank of α and β less than r are shifted towards smaller values, and are hence not relevant for for calculating the
p–value, and we therefore only give the tables for the situation of full rank of α and β.
Still if the test Qr is not rejected we only know that the cointegrating rank is ≤ r. Therefore we suggest here a procedure
which consists of ﬁrst testing if the hypotheses H2 (0), . . . , H2 (r − 1) give reasonable descriptions of the data. We
deﬁne the critical value cp−r = cp−r (δ) from Table 15.1 by



when ϑ ε H2 (r) and α and β have rank r. Thus cp−r is the 1 − δ quantile in the limit distribution given in Theorem 11.1,
see (11.14).
All the calculations in the following depend on the result in
LEMMA 12.1 If the cointegrating rank is r then      if s < r.
                                           Determination of Cointegrating Rank                                    169


PROOF For s < r we have




                                                                                                                (12.3)
which shows that            since           have positive limits, see (11.17).
                                                                                                                     □
THEOREM 12.2 The test that rejects H2 (r) on the set



has asymptotic size δ:



where equality holds if rank (Π) = r. The asymptotic power is 1:




PROOF If ϑ ∈ H2 (r) then the corresponding Π-matrix has rank s ≤ r. It then holds that



which converges towards δ by the constructions of cp−s. If rank (Π) = r, it follows from Lemma 12.1, that            .
Thus



This shows that the size is δ. Finally if ϑ ∉ H2(r) then rank(Π) > r and, by Lemma 12.1,            , which shows that



which shows that the asymptotic power for a ﬁxed alternative is 1.
                                                                                                                     □
Another way of stating these results is that one can construct an estimator for the cointegrating rank as follows:
THEOREM 12.3 The estimator of the cointegrating rank deﬁned by



has the property that for ϑ ∈ H2 (r)\ H2 (r − 1), that is, rank(Π) = r,
170                                       Determination of Cointegrating Rank




PROOF If rank (Π) = r it follows from Lemma 12.1 that                       , such that for i = 0, . . . , r − 1,



whereas



must have the same limit as Pϑ{Qr ≤ cp−r} which converges towards 1 − δ by the choice of cp−r. Finally for i = r + 1, . . . ,
p we ﬁnd



which converges to δ. This completes the proof of Theorem 12.3.
                                                                                                                           □
Thus in order to avoid the problem that the hypotheses of a given cointegrating rank are not nested, we suggest to
formulate the hypotheses of interest as rank(Π) ≤ r, and to test H2 (r) by ﬁrst checking if H2 (0), . . . , H2 (r − 1) are
acceptable as descriptions of the data. Only if none of these can be used do we accept or reject H2 (r) on the basis of
the test statistic Qr.


12.2 Model With a Constant Term
If we consider the model with unrestricted constant term




                                                                                                                      (12.4)
we need to discuss the test for cointegrating rank and the hypothesis about the absence of the trend (α′⊥ μ = 0) at the
same time, since the limit distribution of the test of cointegrating rank in (12.4), see (11.12), depends on the actual
cointegrating rank and on the presence or absence of the trend, that is, on the condition α′⊥ μ ≠ 0. Hence we have to
discuss the hypotheses H1 (r) and         simultaneously. These hypotheses are no longer linearly ordered in a natural
way, see Table 5.1, where we have
                                           Determination of Cointegrating Rank                                             171


Another situation occurs if we consider the model with restricted constant term                     , that is, if we are willing
to assume that there is no linear trend in the data. In this case the distributions of the test statistics do not depend on
ρ0, and the hypotheses are nested as in the discussion in Section 12.1.
We ﬁrst consider the case of the unrestricted constant and deﬁne the test statistics




We let cp−r = cp−r(δ) denote the 1 − δ quantile in the limit distribution of Qr under the assumption that the rank of Π is r
and that the trend is present. That is, cp−r is taken from Table 15.3.
Similarly we let               denote the 1 − δ quantile in the limit distribution of        when the rank of Π is r and the
trend is absent, that is, taken from Table 15.2.
As stated in Theorem 11.1 the limit distribution of Qr depends on the presence or absence of the trend. Simulations
show that the distribution of Qr, if the trend is absent, has heavier right tails than the distribution given in Theorem
11.1 when the trend is present. In order to test the hypothesis H1 (r) we need to bound the size of the test, that is, we
want



                                                                                                                         (12.5)
to be 5 per cent, say. This way we make sure that for any parameter value in the null hypothesis H1 (r), the probability
of rejecting the null is at most 5 per cent. Since the parameter values corresponding to α′⊥μ = 0 give the largest
probability we thus have to calculate the probability distribution of −2log Q (H1 (r)|H1 (p)) when in fact α′⊥μ = 0, that
is, the trend is absent. This is clearly unreasonable since it leads to too high critical values and hence very low power
against the alternative of more than r cointegrating relations.
In the following we denote by Pr the probability measure under the assumption that the cointegrating rank is r and that
α′⊥ μ ≠ 0, such that the process has a trend. If α′⊥ μ = 0, however, we denote the measure by .
LEMMA 12.4 With respect to Prit holds that



and with respect to   it holds that
172                                       Determination of Cointegrating Rank


PROOF In the ﬁrst case where the trend is present, (12.3) shows that Q0, . . . , Qr−1 contain a contribution from a root
that is positive in the limit and hence that they all tend to ∞ in probability. Since               the same holds for
              .
From the relation



we ﬁnd the result that         since the last term is the test statistic for the hypothesis of the absence of the trend. This
shows the ﬁrst statement.
In the second case, that is, under    we ﬁnd from (11.16) that even though τ = 0, it still holds that the r largest roots of
(11.16) converge to those of



such that Q0, . . . , Qr−1 tend to ∞ in probability. Since         the same holds for                 .
                                                                                                                           □
We propose only to reject H1 (r) if it and all hypotheses contained in it are rejected, that is, H1 (r) is rejected if the
observation belongs to the set



and only accept H1 (r) if the observation belongs to




THEOREM 12.5 The test that rejects H1 (r) on Rrand accepts H1 (r) on Arhas asymptotic size δ and asymptotic power 1.
PROOF First consider the size of the test for ϑ ∈ H1(r). Then             for some s ≤ r with α′⊥ μ = 0 or ϑ ∈ H1(s) with α′⊥
μ ≠ 0. In the ﬁrst case,          , we ﬁnd



which converges to δ by the choice of         . In the second case, ϑ ∈ H1(s) and α′⊥ μ ≠ 0, we ﬁnd



which converges to δ by the choice of cp−s.
Finally if ϑ ∈ H1(r)\ H1(r − 1), α′⊥ μ ≠ 0 then by Lemma 12.4



such that


Thus the size of the test is δ.
                                       Determination of Cointegrating Rank                                             173


Next consider the power for ϑ ∉ H1 (r). In this case we must have the cointegrating rank s > r but then from Lemma
12.4        , as well as Q0, . . . , Qr converge to inﬁnity in probability for both Ps and , which shows that




                                                                                                                         □
We next deﬁne the acceptance region for



The rejection region then becomes



THEOREM 12.6 The test that rejects    on   and accepts      on   has asymptotic size δ and asymptotic power 1.
PROOF First consider the size of the test for            which means that              for some s ≤ r.
If s < r,




If s = r we get                      , with respect to     such that



which show that the test has the asymptotic size δ.
Next consider the power. If         then either           for some s > r, or ϑ ∈ H1 (s) for some s ≥ r, where α′⊥ μ ≠ 0,
that is,             for some s ≥ r.
If s > r then it follows from Lemma 12.4 that with respect to       as well as Ps it holds that in particular



such that




If s = r and α′⊥ μ ≠ 0 then from Lemma 12.4 we see that not only do we have that                                 , but also
       , such that




This completes the proof of Theorem 12.6.
                                                                                                                         □
174                                             Determination of Cointegrating Rank


The results can also be formulated as an estimation problem. We deﬁne the parameter κ as 1 or zero depending on the
presence or absence of the trend.
THEOREM 12.7 The estimator deﬁned by



and



is consistent in the sense that if r is the cointegrating rank then



                                                                                                                    (12.6)
If κ = 1, that is, α′⊥μ ≠ 0, then




If κ = 0, that is, α′⊥μ = 0, then




PROOF Let the cointegrating rank be r. If i = 0, 1, . . . , r − 1 then             with respect to both Pr and   , and




Similarly with respect to          we have             and               , such that




which proves (12.6). If we take i = r, and κ = 1, then from Lemma 12.4



and
                                         Determination of Cointegrating Rank                                           175




since        . Finally we let κ = 0 and investigate the measure      , where we ﬁnd



and




                                                                                                                         □
Next consider the situation where the constant is assumed to be restricted. In this case the hypotheses       are nested
and the distribution is invariant to the value of ρ0. Thus the results of Theorem 12.3 hold for the statistic    and the
quantiles     .
As a ﬁnal comment, note that the above procedures are of course rather formal, and that in practice it is sometimes
quite clear that the trend is present, such that we need not worry about , or that the trend cannot be present such
that we can disregard H1(r).


12.3 Models with a Linear Term
Models with linear term can be treated along the same lines, see Johansen (1994b). Thus if the possibility of a quadratic
trend is allowed one should consider simultaneously the models H(r) and H*(r) and determine the presence or absence
of the quadratic trend at the same time as the cointegrating rank, since the limit distribution in this case depends on the
presence of the quadratic trend.
If, however, one is willing to assume that the quadratic trend is absent, as one would normally do, one can see that the
distribution of the test statistic does not depend on ρ1 and we can apply results like Theorem 12.2 and Theorem 12.3.
Thus if



the limit distribution is given by (11.11), which only depends on the number of common trends p − r. In particular it
does not depend on the values of μ0 and ρ1. If                denotes the 1 − δ quantile as tabulated in Table 15.4 we
ﬁnd
176                                        Determination of Cointegrating Rank


THEOREM 12.8 The test that rejects H*(r) on



has asymptotic size δ and asymptotic power 1.
THEOREM 12.9 The estimator of the cointegrating rank deﬁned by



has the property




Thus by allowing for a linear trend in the process even in the stationary directions one can avoid the joint
determination of the cointegrating rank and the presence of the trend as in section 12.2. Having determined the rank
one can then proceed to test for the absence of the trend in the stationary linear combinations by testing model H(r) in
H*(r) as described in Theorem 11.3. See also Perron and Campbell (1993) for a different discussion of the problem of
determining the rank.
Finally it should be emphasized again that all the results are asymptotic and that the amount of data in macro economic
series are not always enough to apply the results without a detailed simulation study of small sample properties. I do
not know how to improve the approximation, and see this as the most important problem for further work in this
area.


12.4 Exercises
12.1
In (6.19) the test of H(r) in H(r + 1) is given. This test statistic is sometimes called the λmax statistic. Discuss its
properties with respect to size and power as a procedure for selecting the cointegrating rank using λmax.


12.2
  1. Show that the distribution of the likelihood ratio test statistic



     does not depend on the parameter ρ0, see (5.15).
  2. Show that the distribution of the likelihood ratio test statistic



       does not depend on the parameters μ0 and ρ1, see (5.13).
         13 Asymptotic Properties of the Estimators
We treat in detail the model H1 (r) where the deterministic term is given by Φ Dt = μt = μ. We assume throughout that
the trend is present, that is, α′⊥ μ ≠ 0. We also assume that the process is I(1), that is, that the conditions of Theorem
4.2 are satisﬁed.
One of the problems in the estimation of α and β is that they are not identiﬁed, as discussed in Chapter 5. We derive in
section 13.4 the asymptotic properties of the estimators for α and β under the assumption that they have been
estimated unrestricted, and that they are normalized or uniquely identiﬁed by a p × r matrix c, that is, we ﬁnd
properties of the estimators            , which is normalized by c′ βc = I, and           . We also state the asymptotic
distribution of when it is estimated under identifying restrictions. We then ﬁnd in section 13.5 the asymptotic
distribution of the remaining parameter estimators as well as some relevant parametric functions. In section 13.6 we
discuss the asymptotic distribution of the likelihood ratio test statistic for hypotheses on β and derive the limit
distribution in some cases. Since the asymptotic distribution of is mixed Gaussian we start in section 13.1 with a
brief discussion of this distribution.


13.1 The Mixed Gaussian Distribution
The Gaussian distribution plays two important roles in statistics, namely as error distribution and as limit distribution.
In the ﬁrst role it provides an error distribution for which, in some simple cases, the maximum likelihood estimator
equals ordinary least squares. We apply the Gaussian distribution in this role in this presentation, since we use the
Gaussian distribution to formulate a likelihood function and it is the analysis of the likelihood function that tells us
how to modify the estimators and test statistics when new information is incorporated in the model in the form of
restrictions on the parameters.
Most of the models we work with here are so complicated that no exact inference can be conducted, and we have to
do with asymptotic inference. Hence the emphasis in the following is on asymptotic distributions and asymptotic
Gaussian distributions which by transformation implies that some test statistics are asymptotically χ2 distributed. The
mixed Gaussian
178                                    Asymptotic Properties of the Estimators


distribution appears in the present work as a limit distribution. By a mixed Gaussian distribution we understand the
following: let there be given two stochastic variables: X which is p-dimensional and Y which is a positive semi-deﬁnite
matrix of dimension p × p. We assume that the distribution of X given Y is Gaussian Np (ξ, Y), and call the marginal
distribution of X a mixed Gaussian distribution with centre ξ and mixing parameter Y. Note that if Y is degenerate
then X is actually Gaussian such that the Gaussian distribution is a special case of the mixed Gaussian distribution.
Typically the mixed Gaussian distribution has thicker tails than the Gaussian distribution. Thus the Student
distribution and the Cauchy distribution are mixed Gaussian distributions.
It is a property of the mixed Gaussian distribution that the statistic constructed by (X − ξ)′ Y−1 (X − ξ) is χ2 with p2
degrees of freedom, since for ﬁxed Y the distribution clearly has this property, and since this conditional distribution
does not depend on Y it also holds marginally. This argument will be used many times in the derivation of the limit
distribution of test statistics in the following.
If one observed only X one would have to make inference in the marginal distribution of X, and take into account
the fat tails. Thus for instance for a univariate variable X one could construct a conﬁdence set for ξ of the form (X − c,
X + c) where c was determined by Pξ (|X − ξ| > c) = 0.05. This would require a tabulation of the mixed Gaussian
distribution of X. If, however, one has measurements of both X and Y then inference is a lot easier, since we can
construct a conﬁdence set of the form                        , and determine c such that



This last calculation only requires the Gaussian distribution or the χ2 distribution. Thus despite the heavy tails in the
distribution of X we can make inference using the usual Gaussian distribution by conditioning on Y. It is not difﬁcult
to see that if the parameters in the distribution of Y are free of ξ, then the information about ξ in the sample as
measured by minus the second derivative of the likelihood function is given by Y−1, such that if the data X and the
information Y are measured then inference can most easily be conducted conditional on the observed information or
equivalently the observed common trends. The conditioning argument is discussed in more detail in Johansen (1995c).
We shall meet p × r matrices X with a mixed Gaussian distribution, and they all have the form that given Y (p × p) the
distribution of X is Gaussian with mean zero and variance Y ⊗ Ω, meaning that ν′ X μ given Y is univariate Gaussian
with mean zero and variance ν′ Y ν μ′ Ω μ, for any ν ∈ Rp and μ ∈ Rr.
                                       Asymptotic Properties of the Estimators                                        179


13.2 A Convenient Normalization of β
The estimator derived in Chapter 6 is found as the eigenvectors of equation (6.15) and are normalized in the natural
way for eigenvectors:           . This normalization is convenient for the calculations and clearly determines the
estimates uniquely but is often not the most natural way of interpreting the results.
We here discuss a different normalization which is convenient for the mathematical analysis and which is also not
natural for interpretation since it depends on the unknown parameters. We choose the coordinate system (β, γ, τ), see
Lemma 10.2, and expand



where β = β (β′ β)−1 etc. and deﬁne the estimator




                                                                                                                   (13.1)
where



                                                                                                                   (13.2)
This way of normalizing is convenient for the analysis, since it has the property that      is contained in the space
spanned by γ and τ, and hence orthogonal to β. Note that since is just a linear transformation of the columns of it
also maximizes the likelihood function and hence satisﬁes the likelihood equations. The normalization depends on β,
so for practice it is not so useful, but it is convenient in the analysis. We deﬁne      so that          .
The normalization by c denoted by βc = β(c′ β)−1, has the advantage that it can be used in practice and that a measure
can be given of the (asymptotic) variation of the individual estimated coefﬁcients which can be used for Wald tests for
hypotheses on the coefﬁcients. If in particular we take c′ = (I, 0) and decompose X = (X′1, X′2)′ and β = (β′1, β′2)′ then
              . Whether this normalization is useful for applications is of course an empirical question. In general
structural equations look different and are not just solved for some of the variables. The estimation of coefﬁcients
identiﬁed by restrictions within each equation will be treated in section 13.4.
We ﬁrst derive the properties of     and then derive those of      by the expansion
180                                      Asymptotic Properties of the Estimators


Hence if β and      are normalized by             , we have



                                                                                                                   (13.3)

Note that I − β c′ = c⊥ (β′⊥c⊥)−1 β′⊥.


13.3 Consistency of the Estimators
We prove here that the estimators of α, β, and Ω in model H1 (r) are consistent and ﬁnd some auxiliary results on the
order of magnitude of various product moments.
LEMMA 13.1 The estimators                      , and are consistent. Moreover          such that



                                                                                                                   (13.4)




                                                                                                                   (13.5)

PROOF The estimator is determined by the eigenvectors corresponding to the r largest eigenvalues of (6.15). We
multiply the equation by the matrix            and A′T, see (11.17), and ﬁnd



                                                                                                                   (13.6)

This equation has the same eigenvalues as (6.15) and eigenvectors  , where V are the eigenvectors of (6.15). For T
→ ∞ the ordered eigenvalues of (13.6) converge to those of the equation,




see (11.17), and the space spanned by the r ﬁrst eigenvectors of (13.6) converges to the space spanned by the ﬁrst r unit
vectors or equivalently the space spanned by vectors with zeros in the last p − r coordinates. The space spanned by the
ﬁrst r eigenvectors of (13.6) is                  , where



                                                                                                                   (13.7)
see (13.2). Thus we ﬁnd that             . This shows consistency of       and moreover that
                                            Asymptotic Properties of the Estimators                                   181




Next consider the expression




From Lemma 10.3 it follows that B′TS11BT is OP (T) and that B′TS11β is OP (1), and since             , see (13.7), we ﬁnd
(13.4). The proof of (13.5) is similar. Finally (13.4) and (13.5) imply the consistency of                          which
converges towards          , see (10.3). The estimator of Ω is



which by (13.4) and (13.5) converges towards



see (10.4).
                                                                                                                        □
If instead of an unrestricted β we estimate β under restrictions, the proof of consistency is not so simple, see Saikkonen
(1995) and Johansen (1996). We shall not go into this problem, but whenever needed we assume that the estimator of
β is superconsistent in the sense above, that is,                .


13.4 Asymptotic Distribution of                                    and
We next give the asymptotic distribution of the estimator       and the corresponding . We give the details for the
proof of the normalized unrestricted estimator and quote the result for β when estimated under identifying linear
restrictions. But ﬁrst we give a result for the normalized estimators and ᾶ.
LEMMA 13.2 The asymptotic distribution of is mixed Gaussian and given by




hence               . The conditional variance of the limit distribution is given by




The asymptotic distribution of ᾶ is given by
182                                    Asymptotic Properties of the Estimators


Here




and Vα (u) = (α′ Ω−1 α)−1 α′Ω−1W (u), see Lemma 10.2, are independent.
Note that the speed of convergence is different in the directions τ and γ corresponding to different behaviour of the
process Xt in these directions as given in Lemma 10.2.
PROOF The estimators ᾶ and satisfy the likelihood equations, and we therefore derive expressions for the derivative
of log L (α, β, Ω), the concentrated likelihood function, see (6.8), with respect to β and α in the directions b and a
respectively:




From these results we can derive the ﬁrst order conditions that are satisﬁed at a maximum point. At the point (ᾶ, )
the derivatives are zero in all directions hence the likelihood equations are



                                                                                                                (13.8)



                                                                                                                (13.9)
Deﬁne




Consider ﬁrst equation (13.8) and insert S01 = α β′ S11 + Sε 1 to get




We next multiply by                from the right and insert             . We then get
                                           Asymptotic Properties of the Estimators                                            183


By Lemma 10.3 and the consistency of ᾶ the last term tends to zero and the consistency of                    then implies that



which by (10.16) and (10.17) converges towards




as was to be shown. This result implies that                        ). Next consider (13.9) and insert S01 = α β′ S11 + Sε 1. Then




Multiplying by       we ﬁnd




It was shown above that       is OP (T−1) such that it follows that the last two terms tend to zero, and the ﬁrst converges
weakly by the central limit theorem to Np × r (0, Ω ⊗ Σβ β). Since also                 the result about ᾶ follows.
We next give the result for        normalized by c.
THEOREM 13.3 Let and β be normalized by                    , then




                                                                                                                          (13.10)
where




that is, γ′CW corrected for intercept and trend, and



Hence the asymptotic distribution is mixed Gaussian with conditional variance
184                                       Asymptotic Properties of the Estimators




                                                                                                                 (13.11)
which is consistently estimated by



                                                                                                                 (13.12)
The asymptotic distribution of when is normalized by c is given by




Note that if we consider the linear combination        then the limit distribution is singular since τ′γ = 0 and τ′β = 0.
Thus a different normalization is needed. The results can be derived from Lemma 13.2 but will not be given here.
PROOF The expansion (13.3) implies that if          and β are normalized by c, then




From (13.1) we then get that




Since         is OP(T−2) and TUT is convergent it follows that      has the same limit distribution as (I − β c′)γTU1T,
that is, the marginal distribution of the ﬁrst components as given by Lemma 13.2.
From the deﬁnition



it follows that



which is seen to have the same limit distribution as                 , since   is OP(T−1). The result then follows from
Lemma 13.2.
                                                                                                                       □
The asymptotic results on the estimator should be interpreted carefully. The asymptotic distribution of is mixed
Gaussian, that is, for ﬁxed value of the mixing process G, the distribution is Gaussian. This means that the distribution
of the estimator has much broader tails than the Gaussian, with the result that once in a while an extreme value of the
estimator appears. Note, however, that when testing hypotheses one does not normalize by the variance of , but by
the asymptotic conditional variance, or the limit of the inverse information, which even in the limit is random. This
                                         Asymptotic Properties of the Estimators                                            185


means that one does not apply the distribution of for testing, hence the values of have to be interpreted with a
‘variance’ given by (13.12) not by its population variance. Another way of saying this is that whereas one normally
applies the asymptotic distribution of the estimator for testing, in the case of β we need the joint limit distribution of
and the information in the sample.
A general result about a smooth parametrization β (ϑ), ϑ ∈ Θ is proved in Johansen (1991b), Phillips (1991), and
Reinsel and Ahn (1992). This result implies that for any linear or non-linear restriction on the coefﬁcients of the
cointegrating relations one can apply the usual result that is asymptotically mixed Gaussian with an estimator of the
asymptotic conditional variance as would be found from the second derivative of the likelihood function. What
remains in such a general situation is to ﬁnd conditions for the existence and uniqueness of the maximum likelihood
estimator and to ﬁnd an efﬁcient algorithm for the calculation of the estimators.
We give here a result from Johansen (1995b) on the asymptotic distribution of when it is estimated under identifying
restrictions. Let R1, . . . , Rr be the restrictions, such that R′iβi = 0, see Chapter 5.
We let Hi = Ri⊥ and use the formulation




We also want to normalize the vectors, and a general version of this is given by



where sp (hi, Hi) = sp (Hi).
The limit distribution is most conveniently expressed in terms of the following notation. The block diagonal matrix
with blocks Ai, i = 1, . . . , s is denoted by {Ai}, and the block matrix with blocks Aij is denoted by {Aij}.
THEOREM 13.4 The maximum likelihood estimator of the identiﬁed β is consistent and the asymptotic distribution is mixed Gaussian.
An estimator of the asymptotic conditional variance of is given by




The difﬁculty in the proof is the discussion of consistency. Since the maximum likelihood estimator is not explicitly
deﬁned one will have to derive the consistency from the asymptotic behaviour of the likelihood function. This will not
be attempted here, but exercise 13.8 is a guided tour through the easy part of the proof, which involves the asymptotic
distribution under the assumption that the estimator is consistent. Here we illustrate the result by an example.
186                                    Asymptotic Properties of the Estimators


EXAMPLE 13.1 Consider the basic model



with p = 4, r = 2, and β of the form




It is seen that the rank condition is satisﬁed for β if ϕ ≠ 0, in which case β is just identiﬁed. We deﬁne the matrices




Then the identifying restrictions can be expressed as




The asymptotic distribution of the estimators of (ϕ, ψ, χ, η) is mixed Gaussian around the true values with an
asymptotic quadratic variation process for                    estimated by




Thus asymptotic inference concerning the parameters can be conducted as if they are Gaussian with the above
variance matrix, provided parameters are estimated by the maximum likelihood procedure.
Perhaps an even better way of writing the result is as follows:




If we would rather specify the asymptotic distribution of the estimated cointegrating vectors themselves we see that
                                         Asymptotic Properties of the Estimators                                           187


which accounts for the extra factors {Hi} and {Hi′}, with




in the result of Theorem 13.4.


13.5 More Asymptotic Distributions
The results obtained in section 13.4 can be applied to ﬁnd the asymptotic distribution of the remaining parameter
estimates. We ﬁrst discuss the distribution of the estimator for the parameters ϑ = (α, Γ1, . . . , Γk−1) and then ﬁnd the
asymptotic distribution of . In deriving the asymptotic distribution of we use the fact that they are all coefﬁcients to
stationary variables, since both β′ Xt and Δ Xt are stationary. We deﬁne



and                        . Note that E (Δ Xt) = C μ and that the expectation of β′ Xt can be found from the model
equation (4.1),




Multiplying by α′, gives




with               , see Theorem 4.2. Thus



say. We denote Σ = Var (Zt (β)). Clearly this can be calculated in terms of α, β, Γ1, . . . , Γk−1 and Ω, but this will not be
needed here, since we shall estimate it consistently from        .
THEOREM 13.5 If β is normalized by c′ β = I then the asymptotic distribution of the estimator                is given by



where Σ is consistently estimated by
188                                     Asymptotic Properties of the Estimators


PROOF The model can be written as




For ﬁxed β this is just a regression equation which determines the maximum likelihood estimator          by the equation




By Theorem B.13 this is weakly convergent to a Gaussian distribution with mean zero and variance Ω ⊗ Σ, such that




Here Σ is the probability limit of




It is not difﬁcult to see that we can replace β by   due to the relations (13.4) and (13.5), which shows Theorem 13.5 for
         .
                                                                                                                       □
THEOREM 13.6 The asymptotic distribution of           is found from




                                                                                                                  (13.13)
where ξ μ = E (Zt (β)), Σ = Var (Zt (β)),




and G(u) = G0(u) − Ḡ0, see Lemma 10.2. The ﬁrst term in (13.13) is independent of the last two terms.
                                            Asymptotic Properties of the Estimators                       189


Thus



that is, asymptotically Gaussian, whereas




is asymptotically mixed Gaussian with conditional variance given by




PROOF The likelihood equation for μ is




and the model equation implies




From this we ﬁnd since




which we write




                                                                                                       (13.14)
From this expression we derive the limit distribution of               . From Lemma 10.2 we ﬁnd that   . From
Theorem 13.5 we see that                                         . Finally Lemma 13.2 shows that
190                                        Asymptotic Properties of the Estimators




Combining the results we ﬁnd (13.13). It only remains to see that the contribution from the limit of           is
independent of the other terms. It is seen from the proof of Theorem 13.5 that the limit of      is derived from




This process converges towards a Brownian motion with covariance matrix Ω ⊗ Σ, but the covariance with the
process           is zero, implying that the two limit processes are independent. Since the contributions from
         and            in (13.14) only depend on W the result is proved. Multiplication by α′⊥ and α′ Ω−1 gives the
ﬁnal formulation.
                                                                                                                            □
The reason for the ﬁnal formulation with α⊥ and α′ Ω−1 is that the asymptotic distribution of               is not mixed
Gaussian in the sense that if in (13.13) we condition on G the expectation is not zero. If, however, we consider the
components in the direction α′⊥ and α′ Ω−1, then we get mixed Gaussian distributions with conditional expectation zero.
The result implies that inference in the form of Wald tests is not so simple, but the hypothesis about the absence of the
trend α′⊥μ = 0 is easily tested, see Corollary 11.2.
THEOREM 13.7 The asymptotic distribution of the estimators of Π = α β′, C = β⊥ (α′⊥ Γ β⊥)−1 α′⊥, and τ = C μ are given by




with ξ′ = ((C′Γ′ − I)α, C′, . . . , C′). An efﬁcient estimator of τ is T−1XT.
PROOF We let β be normalized by a matrix c and apply Theorem 13.3. We ﬁnd



since the superconsistency of implies that              . Thus the result about follows from that of               and the
asymptotic variation of plays no role in the asymptotic variance of due to the superconsistency
                                          Asymptotic Properties of the Estimators                                        191


of . Note that the asymptotic variance matrix is singular, and that hypotheses on β require investigation of this
singularity as indicated by the asymptotic distribution of .
If we choose                           then            and



The superconsistency of implies that we can replace             by β⊥ in the expression for Ĉ with an error of OP(T−1) and we
then get, apart from terms of OP(T−1),




Now insert                                        and use the deﬁnition of C, and we ﬁnd



with ξ′ = ((C′ Γ′ − I)α, C′, . . . , C′), since              , and ϑ = (α, Γ1, . . . , Γk−1)
Thus the asymptotic distribution can be found from Theorem 13.5. This result can also be found in Paruolo (1995a).
Next consider the estimation of τ. From the likelihood equation for             we ﬁnd by multiplying by Ĉ that




since            . From Granger's representation theorem we ﬁnd




and hence that
192                                       Asymptotic Properties of the Estimators




In the expression for          we can insert                    and ﬁnd apart from terms of the order OP(T−1)




                                                                                                                       □


13.6 The Likelihood Ratio Test for Hypotheses on the Long-Run
Coefcients β
In this section we will exploit the mixed Gaussian distribution as obtained in section 13.4 to show that the likelihood
ratio test statistics of hypotheses on β are asymptotically χ2 distributed. This follows since a Taylor expansion of the
likelihood function around the maximum value gives a quadratic approximation, and by conditioning on the mixing
parameter one obtains an asymptotic χ2 distribution.
We ﬁrst derive a second order approximation to the likelihood function and then apply this to give the asymptotic
distribution of the test statistic for a simple hypothesis on β, as well as the test statistic for β = Hϕ and for general
identifying restrictions on β.
LEMMA 13.8 The likelihood ratio test for a simple hypothesis on β has the representation




                                                                                                                 (13.15)
which is asymptotically distributed as




                                                                                                                 (13.16)
where G is given in Lemma 13.2. The distribution of (13.16) is χ2with r (p − r) degrees of freedom.
PROOF The likelihood ratio test has the form



where
                                      Asymptotic Properties of the Estimators                                      193




                                                                                                               (13.17)
see (6.14).
In the following it is useful to evaluate the order of magnitude of various terms. From (13.2) we have           , and
the result of Lemma 13.2 is that TUT converges in distribution. Hence




The remainder terms of the expansion (A.11) is given as O(‖h‖3), but in the expression for −2 log Lmax(β) the remainder
terms contains apart from the factor T a product of terms like                   and             which shows that the
remainder term is of the order of T in probability.
                                    −1



We now expand the logarithm of the expression for      around the value using the expansion (A.11). We ﬁnd
that −2 log Q (β |H (r)) equals the difference between two terms: the ﬁrst we get for                  and
               and the other with N = S11. The second term is




In a similar way we ﬁnd the ﬁrst term can be reduced since




Combining these results we ﬁnd that −2 log Q (β |H (r)) equals




From (10.8) the ﬁrst factor equals α′ Ω−1α, which shows (13.15). Since              , see Lemma 13.2, we ﬁnd



apart from terms of the order of T−1 in probability. By Lemma 13.2 this converges towards
194                                       Asymptotic Properties of the Estimators




which shows (13.16). Now notice that conditionally on G the r × (p − r) matrix           is Gaussian with mean zero
and conditional variance                  , such that conditionally on G the distribution of the statistic (13.16) is χ2
with r (p − r) degrees of freedom. Hence this result also holds marginally, as was to be proved.
                                                                                                                                □
Another way of expressing this result is as follows: conditioning on G, the integral                     is Gaussian




such that the variable




                                                                                                                          (13.18)
is Nr × (p−r) (0, I). Expressed in terms of this variable the limit is just tr{ZZ′} which is χ2 with r × (p − r) degrees of
freedom.
The results of Lemma 13.8 is of course not enough for applications where one typically wants to test a composite
hypothesis on β as for instance β = Hϕ, β = (b, ψ), β = (H1 ϕ1, H2 ϕ2) etc. For each of these hypotheses, however, the
method is the same. One obtains an expansion of the log-likelihood function around the maximum point with and
without restrictions, and by subtracting the expressions one ﬁnds an expression for the asymptotic distribution, which
turns out to be a χ2 distribution.
In order to illustrate the technique consider the simple situation where we want to test β = H ϕ.
THEOREM 13.9 The asymptotic distribution of the likelihood ratio test for the hypothesis β = H ϕ, see (7.2), is χ2(r(p − s)).
PROOF For ﬁxed β = H ϕ we found the maximized likelihood function in (13.17). The asymptotic properties of the
sample moments now depend on the asymptotic properties of the process




where Yt is a stationary process, see (4.2).
Let PH = H(H′ H)−1H′ denote the projection onto the space sp(H), and deﬁne                                 . Then β = H ϕ is
orthogonal to τH since
                                         Asymptotic Properties of the Estimators                                            195


β′ τH = β′ PH τ = β′ τ = 0. Let γH (p × (s − r − 1)) be chosen orthogonal to β and τH such that (β, τH, γH) span sp(H). Then
γH is also orthogonal to τ, since γ′Hτ = γ′HPHτ = γ′HτH = 0, and this shows that γH = γ ξH for some matrix ξH, where γ is p ×
(p + r − 1) is orthogonal to (β, τ). Thus PHXt will be stationary in the direction β, dominated by a linear trends in the
direction τH, and ﬁnally behave like a random walk without trend in the direction γH. Thus in particular we ﬁnd




From these results we can ﬁnd the asymptotic behaviour of the product moment matrices and derive an asymptotic
expression for the log likelihood function of the form (13.16) except that G is now replace by




The likelihood ratio test of β = H ϕ is now the difference of the two expressions like (13.16) with G and GH. We want
to simplify this by conditioning on G (and hence GH), and introduce the r × (p − r) Gaussian variable Z (13.18) and the
(s − r) × p matrix




We then get the representation




which is distributed as χ2 with r(p − s) degrees of freedom.
                                                                                                                               □
Finally we give the result for the case where the individual cointegrating vectors are identiﬁed by linear restrictions.
THEOREM 13.10 The asymptotic distribution of the likelihood ratio test for the identifying restrictions β = (H1 ϕ1, . . . , Hrϕr)
normalized by βi = hi + Hi ψiis χ2with degrees of freedom              , where Hiis p × si, provided β is identiﬁed.
PROOF We can write the hypothesis as
196                                  Asymptotic Properties of the Estimators


where we have used the notation of Theorem 13.4, that is, {ψi} is block diagonal with ψi, in the diagonal. By the
expansion of the log likelihood function around the maximum point we ﬁnd that the ﬁrst order condition is




for all k of the form k = (H1, . . . , Hr){ki}. Thus at the maximum point we have



and the expansion to the second order around the maximum point has the same form as in the proof of Lemma 13.8
and we get an expansion of the test statistic. We ﬁnd




where ρij = αiΩ−1 αj. As in Theorem 13.4 we use the notation {Aij} for a block matrix with blocks Aij.
From Theorem 13.4 we now see that the asymptotic distribution of this quantity is χ2, and the degrees of freedom is
the number of parameters in a just identiﬁed system r (p − r) minus the number of parameters in the identiﬁed model
which is          which gives the result.
                                                                                                                 □


13.7 Exercises

13.1
Consider the cointegration model


where a and b are known p × r matrices, Ω is a known variance matrix, whereas τ is the unknown parameter which
varies freely in the space of r × r matrices.
  1. Find the maximum likelihood estimator of τ.
  2. Find the likelihood ratio test for the hypothesis τ = 0.
                                       Asymptotic Properties of the Estimators                                       197


      Under the null hypothesis Xt is a random walk and we deﬁne the Brownian motion W by




  3. Show that under the null hypothesis, will converge weakly towards a stochastic variable Z, and determine Z
     expressed in terms of W. Find the distribution of Z given b′W.
  4. Find also the distribution of the likelihood ratio test for τ = 0. Show that when a′b = 0, then the likelihood ratio
     test is asymptotically χ2 distributed with r2 degrees of freedom, and when b = Ω−1a, then the likelihood ratio test
     is asymptotically distributed as




      where B is an r-dimensional standard Brownian motion.


13.2
Let as before



Let Xt = (X′1t, X′2t)′ where the dimension of X1t is m and that of X2t is p − m. Let α and Ω be decomposed similarly.
  1. Find the distribution fα, β, Ω (Δ X1t|Δ X2t, Xt−1) and ﬁnd the partial likelihood function




                                                                                                                 (13.19)

  2. Show that the partial maximum likelihood estimator of β based on (13.19) is given by reduced rank regression if
     r ≤ m, and ﬁnd those functions of α and Ω that can be estimated. Show that if α2 = 0 one can estimate α1 and β
     and then the estimator of β is the maximum likelihood estimator.
  3. In the model with rank(Π) = rank(α β′) ≤ p ﬁnd the likelihood ratio test for the hypothesis Π = 0 based upon
     the conditional likelihood function and sketch the proof that the asymptotic distribution of the likelihood ratio
     test is given by




      where B is a p-dimensional Brownian motion decomposed as B = (B′1, B′2)′ of dimension m and p − m
      respectively.
198                                    Asymptotic Properties of the Estimators


     In the above situation inference about β is difﬁcult, and the next questions are attempts to ﬁnd conditions for
     inference to be easier.
  4. Assume again that α and Ω are known. Show that β can be estimated by regression and ﬁnd the expression for
     the estimator of β based upon the partial likelihood function.
  5. Show that the asymptotic distribution for             is mixed Gaussian, but that the Brownian motions entering
     the asymptotic expression for the limit distribution are not independent.
  6. Show that they are independent if α2 = 0, that is, if X2t is weakly exogenous for β, and that this gives a possibility
     for conducting inference on β.


13.3
Consider the usual model




  1. Find the estimator of α for ﬁxed β and Ω, and ﬁnd the asymptotic distribution of




  2. Find the estimator of β for ﬁxed α and Ω, and ﬁnd the asymptotic distribution of




13.4
In the univariate case the model is given by




  1. Show that



     is asymptotically Gaussian when −2 < π < 0.
  2. Find the asymptotic distribution of



     for π = 0.
  3. Discuss the above problems for the model
                                      Asymptotic Properties of the Estimators                                   199


13.5
 1. Show that in the model



    the likelihood equations for the parameters α, β, and μ when Ω is known are given by




    Here                    and                 .
    We next introduce the notation Uα, Uβ, and Uμ for the limit distributions, that is




 2. Show that in the limit we then have the equations to determine the distributions Uα, Uβ, and Uμ:




    Here W (u) is the weak limit of            and W0 (u) is the weak limit of the process
    and




 3. Show by eliminating Uμ that Uα and Uβ are given by the results from Lemma 13.2. Note that although the
    equations determining the limit distributions have to be solved simultaneously, the equations we get by
    eliminating Uμ are block diagonal, indicating that inference concerning α and β can be conducted as if the other
    were known.
200                                   Asymptotic Properties of the Estimators


13.6
  1. Find in the model described by (4.1) the maximum likelihood estimator of




  2. Find its asymptotic distribution.
  3. Show that an efﬁcient estimator is        .


13.7
Consider the model



                                                                                                                (13.20)
where β is identiﬁed by the restrictions



This means that rank (H′i⊥β) = r − 1, since H′i⊥βi = 0 and the remaining columns are linearly independent. We normalize
βi as βi = hi + Hiψi.
  1. Show that the identiﬁcation condition implies that there is no vector η ≠ 0, such that Hiη ∈ sp(β).
  2. Show that




  3. Show that the likelihood equation for ψi is given by




  4. Show by going through the proof of Lemma 13.2 that Theorem 13.4 holds.
     Next consider model (13.20) with a constant term μ in the equation. From Granger's representation theorem
     we have




     This gives rise to the directions τi = Hi′ Cμ and γi = τi⊥, such that in the directions τi the processes Hi′ Xt are
     dominated by the linear trends and in the directions γi the trends are eliminated, and the processes converge
     towards Brownian motions.
  5. Find the proper normalization of the matrix Hi′S11Hi and determine the limit.
  6. Show that the results of Theorem 13.4 hold in this case.
14 The Power Function of the Test for Cointegrating
         Rank Under Local Alternatives
This chapter contains a discussion of the power of the test for cointegrating rank for local alternatives, see Johansen
(1991a). The results use the formulation of local alternatives and near integrated processes as formulated by Phillips
(1988). In the next section we deﬁne a local alternative, and study in section 14.2 the properties of the process under
the local alternative. It turns out that the limit process is an Ornstein–Uhlenbeck process, and this means that product
moments involving the near integrated processes will have a limit different from the one under the null hypothesis. In
section 14.3 we then discuss the limit distribution for the likelihood ratio test under suitable assumptions on the
cointegrating ranks. Throughout we treat the model without short-terms dynamics and constant term. The model with
the constant term is treated by Rahbek (1994). The limit results do not depend on the short-term dynamics, and this
result is formulated as an exercise.
Finally the results are illustrated by a simulation in Chapter 15 of the local power.


14.1 Local Alternatives
We consider the model



                                                                                                                     (14.1)
where Π is p × p and unrestricted and ε1, . . . , εT are independent identically distributed with mean zero and variance Ω.
We assume that the initial value is zero. We then consider the null hypothesis



where α and β are p × r such that Xt is cointegrated with cointegrating rank ≤ r. A parameter point in the alternative
must then correspond to a process with more that r cointegrating relations, and thus has the representation
202                                                The Power Function




Here Π has rank r + s, s > 0. We deﬁne a local alternative by



                                                                                                                      (14.2)

The interpretation of this is that under the local alternative the process has s extra cointegrating vectors, β1, which enter
in the process with very small adjustment coefﬁcients, T−1α1, and are hence difﬁcult to ﬁnd. These extra components
are near integrated in the sense of Phillips (1988). We want to investigate the power of the test for cointegrating rank
under the local alternative and hence we ﬁrst ﬁnd the properties of the process under the local alternative.
Since the parameter depends on T we use the notation      for the process generated by equation (14.1) with Π = ΠT,
and apply the notation Xt for the process generated by the equation



                                                                                                                      (14.3)
with initial value X0 = 0.


14.2 Properties of the Process Under Local Alternatives
In order to derive properties of test statistics under local alternatives we have to assume that the process is I(1) under
the null hypothesis, that is, that the eigenvalues of I + β′α are bounded in absolute value by a number less than 1. See
exercise 4.12, and Theorem 4.2. Since we need this condition in the formulation we write it as



A number of evaluations needed in this chapter are derived using the binomial formula for matrices. These have been
collected in the mathematical results in Appendix A, section 2.
THEOREM 14.1 If |eig (I + β′α)| < 1 then under the local alternative it holds that                satisﬁes



                                                                                                                      (14.4)
Furthermore                   , where K(u) is an Ornstein–Uhlenbeck process deﬁned by




                                                                                                                      (14.5)
                                                       The Power Function                                                   203


and W is p-dimensional Brownian motion with variance matrix Ω and C = β⊥ (α′⊥ β⊥)−1 α⊥. The process K(u) satisﬁes the stochastic
integral equation




If further |eig(I + (β, β1)′ (α, α1)) | < 1 then α′⊥ α1 β′1 β⊥has rank s.                                                (14.6)
PROOF The process            is given as solution to equation (14.1) by




                                                                                                                         (14.7)
In the direction β we ﬁnd




with A = I + α β′ and BT = T−1α1β′1. This has variance




In order to evaluate the norm we apply (A.22) which assumes that T ‖BT ‖ is bounded, and that |eig(I + β′ α)| < 1, and
ﬁnd



which shows the result (14.4) about the process                   in the direction β.
We next investigate the process               . We ﬁnd from (14.7)




which by (B.15) converges towards




This follows from Theorem A.14 where it is shown that if |eig(I + β′ α)| < 1, then
204                                               The Power Function




The limit process K(u) satisﬁes the stochastic integral equation




or equivalently the stochastic differential equation



If further |eig(I + (β, β1)′ (α, α1))| < 1 then




has full rank, and since also β′α has full rank it implies that



has full rank, which again implies that α′⊥ α1β′1β⊥, has rank s.
                                                                                                                   □
From the asymptotic behaviour of the process Xt we can derive asymptotic properties of the product moment matrices
needed in the treatment of the likelihood ratio statistic. Under the null hypothesis these results are given in Lemma
10.3. The only new result that is needed under the local alternative is formulated in the next lemma. We apply the
notation




for any stochastic process Yt.
LEMMA 14.2 If



and




then



PROOF From the identity
                                                    The Power Function                                                   205


and the inequality



it is seen that it is enough to prove that        . Since the matrix       is positive semi-deﬁnite it is enough to show that
            , but




which is bounded in norm by                       which is assumed to tend to zero.
                                                                                                                           □
In the next result we use the usual notation



and let      be the corresponding quantities calculated from           .
LEMMA 14.3 If |eig(I + α′ β)| < 1 then under the local alternative it holds that



                                                                                                                       (14.8)


                                                                                                                       (14.9)


                                                                                                                     (14.10)


                                                                                                                     (14.11)


                                                                                                                     (14.12)


                                                                                                                     (14.13)
PROOF From equations (14.1), (14.2), and (14.3), we have the relations



and
206                                              The Power Function


which show that for




To prove (14.8) we want to apply Lemma 14.2 with Y(T) = Δ X(T) and Z(T) = Δ X. Since                   , we have
             . Hence it is enough to check that                      , and hence enough to show that Var(Rβ t) and
                tend to zero uniformly in t.
By Theorem 14.1, maxt≤ T ‖Var(Rβ t)‖ → 0. To investigate the second condition we evaluate the variance of            as
follows




which by (A.21) is bounded in norm by a constant times T. This shows that also                        tends to zero
uniformly in t, and hence the conditions of Lemma 14.2 are satisﬁed and (14.8) follows from (10.13) in Lemma 10.3
combined with Lemma 14.2.
To prove (14.9) we apply Lemma 14.2 with                and           and use the result (14.4) about the variance of Rβ
t. Finally (14.10) is proved in a similar way.


The result (14.11) follows from the result about the process         in the direction α⊥ and the continuous mapping
theorem applied to the functional           . The result (14.12) follows from (14.1) with Π = ΠT and X = X(T) since



which converges as stated in Theorem B.13.
Finally the result (14.13) follows by applying Lemma 14.2 together with the results in Theorem B.13.
                                                                                                                      □


14.3 The Local Power of the Trace Test
If we consider a ﬁxed alternative Π = α β′ + α1 β′1 (rank(Π) = r + s) then it follows from the proof of the asymptotic
properties of the eigenvalues of



that the largest r + s of these converge to positive limits. Hence the likelihood ratio statistic                which
contains s of these will tend to ∞. This shows that for ﬁxed alternative the power of the cointegrating test tends to 1.
                                                          The Power Function                                                             207


THEOREM 14.4 The asymptotic distribution of the likelihood ratio test statistic −2log Q (H (r) | H (p)) for the hypothesis H(r) : Π =
α β′ is investigated under the local alternative HT(r, s) : Π = α β′ + T−1α1β′1. If |eig(I + α′ β| < 1 the asymptotic distribution is given by




                                                                                                                                     (14.14)

Here K* is the p − r dimensional Ornstein–Uhlenbeck process given by




B(u) is standard Brownian motion in p − r dimensions, and the coefﬁcients a and b are deﬁned by



                                                                                                                                     (14.15)

PROOF The proof here mimics the proof in Chapter 11 for the distribution when Π = α β′ applying the results about
the product moment matrices derived in Lemma 14.3. We deﬁne as in Chapter 11,                       , but choose
            , and ﬁnd from Lemma 14.3 that




This polynomial has r positive roots and p − r zero roots. Thus the r largest eigenvalues converge towards the positive
roots, and the p − r smallest converge to zero. We next consider the decomposition




and let T → ∞, λ → 0 such that ρ = Tλ is ﬁxed. From Lemma 14.3 we ﬁnd



such that the roots have to be in the second factor. We ﬁnd



and
208                                             The Power Function




where N is given in Chapter 11 as the matrix α⊥ (α′⊥ Ω α⊥)−1 α′⊥. This shows that we need the limit distribution of




where the convergence follows from Lemma 14.3. Combining these results we ﬁnd that in the limit the roots ρ have to
satisfy the equation




As in Chapter 11 the asymptotic distribution of the test statistic is now given as the sum of the roots times T which
shows the result:




If we deﬁne the process                    , we ﬁnd the result of the Theorem.
                                                                                                                      □
It is seen that the asymptotic power only depends on the parameters a and b, but due to the invariance of the Brownian
motion and the test statistic under orthogonal transformations one can show that in fact it only depends on the
matrices a′a, b′b, and b′a. In order to see this consider the orthogonal transformation O = (O1, O2, O3) deﬁned by




and choose O3 to be orthogonal to O1 and O2, and such that O is an orthogonal transformation. Further deﬁne
         , and Bi = O′iB, then the equations for are given by
                                                     The Power Function                                                      209




                                                                                                                          (14.16)



                                                                                                                          (14.17)


                                                                                                                          (14.18)
It is seen that only the matrices a′a, b′b, and a′b enter in the equations. If s = 1 this result simpliﬁes further, and will be
applied in the simulation study of the power function in Chapter 15.
COROLLARY 14.5 Under the local alternative ΠT = α β′ + T−1α1β1, where α1and β1are p × 1 vectors, the asymptotic power depends only
on the parameters through the numbers



and




where C = β⊥ (α′⊥β⊥)− 1 α′⊥.
PROOF This follows from (14.16) and (14.17) since b′b cancels in (14.16) and (14.17) only depends on g2. The
expressions for f and g are found by inserting the expressions for a and b.
                                                                                                                                □


14.4 Exercises
14.1
In the model




                                                                                                                          (14.19)
deﬁne                      , and             .
  1. Show that         satisﬁes the equation



        and ﬁnd an expression for          in terms of the other parameters.
210                                              The Power Function


  2. Show that                  , and ᾶ′⊥ = α′⊥ (I, −Γ1, . . . , −Γk−1), and hence that




     where               . Find expressions for ᾶ, , ᾶ1, and .
  3. Next apply Theorem 14.1 to the process        , and express the results for the process             and
     in terms of the original parameters and processes. Find the equation for the process Kt, and show that the results
     of Theorem 14.4 still hold with the same deﬁnition of a provided b is deﬁned as                                  .
     Thus the limit result for the power function only depends on the short-term dynamics through the matrix Γ.
                              15 Simulations and Tables
The stochastic integrals that appear in the expressions for the limiting distributions really only serve the purpose of
showing that we have normalized the statistics correctly.
The functionals obtained are so complicated as functions of the Brownian motion that no explicit results seem to be
available. It turns out that for the limiting distribution of the test statistics, the main dependence is on the dimension of
the problem, more precisely the number of non-stationary components. The only point where the parameters appear is
through conditions like α′⊥ μ0 = 0, or α′⊥ μ1 = 0, which were shown to inﬂuence the limiting distribution, see Theorem
6.1 and Theorem 6.2.


15.1 Simulation of the Limit Distributions
The conclusion of the limit results is that the asymptotic distributions of the test statistics of H (r) in H (p) are the same
as those of H (0) in H(p−r) in a p − r dimensional system, that is, a test of Π = 0 in the model



where Π is (p − r) × (p − r). Thus when one wants to simulate the limit distribution under the null Π = 0 one simply
simulates the (p − r)-dimensional system



                                                                                                                       (15.1)
where εt are independent Np−r (0, I). Summing over t we ﬁnd the solution                             . In the simulations we
take T = 400, and X0 = 0.
The limit distribution (6.20) given by




                                                                                                                       (15.2)
is approximated by




                                                                                                                       (15.3)
212                                                 Simulations and Tables


for suitable choices of S. If Dt = 0, then F is given by Brownian motion in p − r dimensions and St is chosen as the
random walk Xt−1.
In case Dt = 1, and α′⊥ μ0 ≠ 0 then F is given by (6.21) and we deﬁne                 , where              for a
p − r − 1 dimensional random walk. Finally if Dt = 1 and α′⊥ μ0 = 0, then F is given by (6.32) and we deﬁne St =
(X′t−1, 1)′ for a p − r dimensional random walk.
The modiﬁcations needed to obtain the limit distribution where F is given by any of the other formulae in Theorem
6.1 and Theorem 6.2 should now be obvious. This section contains ﬁve tables for the asymptotic distribution of the
trace test for the cointegration rank, and one table for the power of the cointegration test in a simple situation. The
tables for the asymptotic distributions have been calculated by Bent Nielsen using the program Disco, see Johansen
and Nielsen (1993), based on 100,000 replications of (15.2) in which B is replaced by a random walk with 400
observations and F is described below. With the notation from Chapter 5, see (5.11) – (5.15), an overview of the tables
is given as follows:
   Model                        F′                                                         Table
   μt = 0                       (B1, . . . , Bp−r)                                         15.1
   μt = α ρ0                    (B1, . . . , Bp−r, 1)                                      15.2
   μt = μ 0                     (B1, . . . , Bp−r−1, u)         corrected for a constant   15.3
   μt = μ0 + α ρ1t              (B1, . . . , Bp−r, u)           corrected for a constant   15.4
   μt = μ 0 + μ 1 t             (B1, . . . , Bp−r−1, u2)        corrected for (1, u).      15.5



15.2 Simulations of the Power Function
In this section we shall simulate the asymptotic power function in the case when only one cointegrating relation is
missing, that is for s = 1. In this special case the equations (14.18), (14.19), and (14.20) are of the form




                                                                                                                 (15.4)




                                                                                                                 (15.5)



                                                                                                                 (15.6)
The functional (14.14) gives the asymptotic power of the trace test. The distribution of this functional is too
complicated to ﬁnd analytically but it can be found by simulation.
                                                 Simulations and Tables                                                 213


In order to simulate the processes we apply the discrete version of these equations



                                                                                                                     (15.7)




                                                                                                                     (15.8)




                                                                                                                     (15.9)
t = 1, . . . , T, starting with     .
Note that the actual expression for the limit distribution is not so important. What is being used here is only the fact
that the parameters of the original model (14.2) with ΠT = α β′ + T− 1 α1 β′1 only enter through the dimension p − r
and through the parameters f and g. Thus the system we simulate consists of the last p − r equations of model (14.2)
with α = β = (I, 0)′ and



where both vectors start with r zeros. Thus in order to simulate the system we choose the simplest possible system
compatible with the given f and g.
We then easily solve the equations (15.7), (15.8), and (15.9) recursively and form the T × (p − r) matrix M with
elements        . Then we calculate Δ M and M−1, i.e. the differences and lagged variables respectively and ﬁnd the test
statistic



The number of observations T has to be chosen so large that the approximation of the random walk to the Brownian
motion is sufﬁciently good. We have chosen T = 400.
We ﬁnd the results for stationary alternatives and p − r = 1, 2, and 3 in Table 15.6. It is seen that, not surprisingly, the
power decreases as the dimension increases, i.e. if there are many dimensions to hide in. This means that it is difﬁcult
to ﬁnd the cointegrating vector, if it has a small loading. It was found that the non-stationary alternatives (not shown)
are readily picked up by the test with large power. The test appears unbiased when considering f and g close to zero.
The table gives the limit distribution of (14.14) for the process deﬁned by (15.4)–(15.6). If we apply the results for the
approximation deﬁned by (15.7)–(15.9) one can for a large value of T interpret the coefﬁcient 1 + T−1f = 1 + T−1 α′1β1
as the autoregressive parameter, see (15.7), in the stationary (or near-integrated) relation we are trying to ﬁnd. Hence
we can apply Table 15.6 as follows: assume we have T = 100 observations and an autoregressive coefﬁcient of 0.79
say. Then the relation 0.79 = 1 − 21/100 = 1 + T−1f shows that we can use Table 15.6 with f = −21. Now the power of
ﬁnding such a process depends on the relation between the adjustment
214                                              Simulations and Tables


coefﬁcients and the cointegration vector. If α1 and β1 are proportional, so that g = 0, then, if the number of non-
stationary components is p − r = 1, we have a probability of 0.998 of rejecting the hypothesis of non-stationarity, and
hence of ﬁnding a stationary relation. If, however, the system has p − r = 3 non-stationary components, then the
probability of rejecting the non-stationarity hypothesis is only 0.346. For a given angle, that is, for ﬁxed f/g, it is seen
from the table that the larger the vectors the easier it is to ﬁnd them.
The asymptotic power of the likelihood ratio test at 5 per cent for r cointegration vectors among p variables under the
local alternative of one extra cointegrating vector is given in Table 15.6. The quantities f and g are deﬁned in Corollary
14.5. The number of simulations is 5,000 for p − r = 1 and 2,000 for p − r = 2, 3, and T = 400.


15.3 Tables
Table 15.1 Quantiles of the Likelihood Ratio Test for Cointegrating Rank (6.20) With Constant Term Zero and F = B
   p−r          50.0%         75.0%        80.0%        85.0%        90.0%         95.0%        97.5%        99.0%
   1            0.60          1.56         1.89         2.32         2.98          4.14         5.30         7.02
   2            5.47          7.77         8.41         9.22         10.35         12.21        13.94        16.16
   3            14.31         17.85        18.83        20.00        21.58         24.08        26.42        29.19
   4            27.14         31.86        33.10        34.62        36.58         39.71        42.59        46.00
   5            43.75         49.71        51.25        53.11        55.54         59.24        62.68        66.71
   6            64.37         71.44        73.27        75.48        78.30         82.61        86.36        91.12
   7            88.73         97.02        99.12        101.67       104.93        109.93       114.24       119.58
   8            116.81        126.20       128.61       131.49       135.16        140.74       145.80       151.70
   9            148.76        159.27       161.98       165.22       169.30        175.47       181.20       187.82
   10           184.44        196.13       199.11       202.65       207.21        214.07       220.00       226.95
   11           223.98        236.82       240.09       243.88       248.77        256.23       262.69       270.47
   12           266.92        280.71       284.36       288.47       293.83        301.95       309.08       318.14
                                                Simulations and Tables                                              215


Table 15.2 Quantiles of the Likelihood Ratio Test for Cointegration (6.32) With Restricted Constant and F = (B1, . . . ,
Bp−r, 1)′
   p−r          50.0%        75.0%       80.0%        85.0%        90.0%        95.0%        97.5%        99.0%
   1            3.43         5.28        5.85         6.54         7.50         9.13         10.73        12.73
   2            11.34        14.45       15.31        16.39        17.79        19.99        22.07        24.74
   3            23.15        27.50       28.65        30.05        31.88        34.80        37.56        40.84
   4            38.90        44.39       45.86        47.60        49.92        53.42        56.57        60.42
   5            58.47        65.19       66.92        69.01        71.66        75.74        79.60        83.93
   6            81.85        89.71       91.75        94.13        97.17        101.84       106.07       111.38
   7            109.11       118.12      120.52       123.26       126.71       132.00       136.69       142.34
   8            140.01       150.10      152.75       155.86       159.74       165.73       171.18       177.42
   9            174.65       185.99      188.92       192.27       196.66       203.34       209.28       216.08
   10           213.14       225.67      228.81       232.63       237.35       244.56       250.86       258.31
   11           255.33       269.01      272.44       276.46       281.63       289.71       296.70       304.89
   12           315.69       319.50      323.90       329.51       333.26       338.10       345.77       354.32

Table 15.3 Quantiles of the Likelihood Ratio Test for Unrestricted Constant (6.21) and


   p−r          50.0%        75.0%       80.0%        85.0%        90.0%        95.0%        97.5%        99.0%
   1            0.46         1.32        1.64         2.07         2.71         3.84         5.02         6.64
   2            7.59         10.29       11.06        12.03        13.31        15.34        17.24        19.69
   3            18.65        22.63       23.72        25.03        26.70        29.38        31.76        34.87
   4            33.52        38.68       40.08        41.73        43.84        47.21        50.19        53.91
   5            52.21        58.55       60.23        62.25        64.74        68.68        72.21        76.37
   6            74.62        82.14       84.10        86.41        89.37        93.92        97.97        102.95
   7            100.93       109.61      111.79       114.40       117.73       123.04       127.59       133.04
   8            130.89       140.66      143.19       146.17       149.99       155.75       160.87       166.95
   9            164.61       175.58      178.33       181.66       185.83       192.30       198.19       204.64
   10           214.07       217.18      220.86       225.49       228.55       232.60       238.69       246.17
   11           256.44       259.80      263.79       268.72       272.03       276.37       283.24       291.58
   12           302.23       305.85      310.17       315.53       319.21       323.93       331.22       339.64
216                                           Simulations and Tables


Table 15.4 Quantiles of the Likelihood Ratio Test for Cointegrating Rank With the Linear Term Restricted (6.28) and
Hence No Quadratic Trend in the Process, and
   p−r            50.0%      75.0%       80.0%        85.0%        90.0%       95.0%      97.5%       99.0%
   1              5.62       7.92        8.59         9.43         10.56       12.39      14.13       16.39
   2              15.68      19.24       20.22        21.40        22.95       25.47      27.87       30.65
   3              29.56      34.30       35.58        37.11        39.08       42.20      45.04       48.59
   4              47.19      53.16       54.73        56.56        58.96       62.61      66.04       70.22
   5              68.70      75.87       77.65        79.85        82.68       86.96      90.87       95.38
   6              93.88      102.16      104.29       106.79       110.00      114.96     119.43      124.61
   7              122.99     132.35      134.77       137.55       141.31      146.75     151.70      157.53
   8              155.60     166.08      168.85       172.10       176.13      182.45     187.80      194.12
   9              192.11     203.70      206.64       210.21       214.72      221.56     227.61      234.65
   10             232.31     245.06      248.24       252.18       257.08      264.23     270.90      278.80
   11             290.06     293.60      297.73       302.88       306.47      311.13     318.03      326.73
   12             338.46     342.33      346.88       352.61       356.39      361.07     368.75      377.54

Table 15.5 Quantiles of the Likelihood Ratio Test for Cointegrating Rank With the Linear Term Unrestricted Allowing
for a Quadratic Trend and F = (B1 − A1 − B1u, . . . , Bp−r−1 − Apr−1 − Bp−r−1 U, U2 − A − Bu)′
   p−r            50.0%      75.0%       80.0%        85.0%        90.0%       95.0%      97.5%       99.0%
   1              0.46       1.32        1.64         2.07         2.71        3.84       5.02        6.64
   2              9.65       12.69       13.53        14.56        15.94       18.15      20.26       22.78
   3              22.75      27.10       28.28        29.69        31.57       34.56      37.21       40.61
   4              39.57      45.14       46.61        48.36        50.67       54.11      57.41       61.28
   5              60.19      66.96       68.76        70.90        73.62       77.79      81.57       86.11
   6              84.56      92.41       94.43        96.83        99.97       104.76     109.04      114.23
   7              112.66     121.65      123.95       126.81       130.39      135.66     140.49      146.05
   8              144.47     154.66      157.25       160.32       164.24      170.15     175.38      181.62
   9              179.93     191.21      194.07       197.53       201.83      208.53     214.51      221.47
   10             219.25     231.72      234.82       238.55       243.29      250.53     256.96      264.52
   11             275.58     279.01      282.96       288.17       291.51      296.02     302.86      311.41
   12             323.14     326.82      331.22       336.81       340.54      345.27     352.98      361.69

Table 15.6 The Power Function
   p−r        g            f =0       −3          −6       −9          −12        −15       −18        −21
   1                       0.052      0.141       0.350    0.620       0.820      0.945     0.987      0.998
   2          0            0.060      0.069       0.105    0.175       0.272      0.416     0.565      0.714
   2          6            0.615      0.335       0.269    0.298       0.390      0.513     0.642      0.772
   2          12           0.944      0.850       0.760    0.716       0.717      0.760     0.830      0.874
   3          0            0.054      0.059       0.073    0.105       0.136      0.187     0.266      0.346
   3          6            0.510      0.211       0.143    0.142       0.188      0.233     0.305      0.383
   3          12           0.834      0.694       0.536    0.424       0.407      0.429     0.476      0.543
Part III Appendices
This page intentionally left blank
                            Some Mathematical Results
THIS appendix contains some results from various branches of mathematics, that I consider useful for the analysis of
the autoregressive models. Most are concerned with classical results about eigenvalues and eigenvectors, see Magnus
and Neudecker (1988) but some are more specialized, like the results on the binomial and exponential functions in
section A.2, which are used in the discussion of the local power of the cointegration test. Finally I have collected a few
results about regression and multivariate statistics in section A.3, see Anderson (1984).


A.1 Eigenvalues and Eigenvectors
Let M be a p× p matrix. We let |M| be the absolute value of the determinant of M, and let I be an identity matrix. The
norm of M is denoted




Note that ‖M + N‖ ≤ ‖M‖ + ‖N‖ and that ‖MN‖ ≤ ‖M‖‖N‖. The trace of M is denoted tr{M}. The eigenvalues of M are
the solutions to the equation



It is well known that the equation has p solutions λ1, . . . , λp, which may be complex. There are not necessarily p linearly
independent eigenvectors. As an example the matrix




has two eigenvalues of 1 but only 1 eigenvector. The Jordan canonical form represents the matrix as



where A is p× p of full rank and J is p× p and block diagonal with a typical block of the form




where λ is an eigenvalue of M. If M is symmetric then the eigenvalues are real, all the blocks are 1 × 1, and the columns
of A are the eigenvectors. Moreover A is orthonormal such that A−1 = A′, see Lemma A.3.
220                                              Some Mathematical Results


LEMMA A.1 Let M be p× p with eigenvalues λ1, . . . , λp. Then there exists a polynomial Pp−1 (.) of degree at most p − 1, such that



                                                                                                                             (A.1)
PROOF The Jordan representation is



which implies


For a typical Jordan block of size 3 × 3, say, we ﬁnd




for which the norm is bounded by |λ|n times a polynomial of degree at most 2. A similar argument can be given for a
Jordan block of any size, hence the result holds for Mn.
                                                                                                                                 □
COROLLARY A.2 If the eigenvalues of M are inside the unit disk then, for |λ| = maxi |λi|, it holds for some c > 0



                                                                                                                             (A.2)
Moreover




                                                                                                                             (A.3)
and for any p × p matrix Ω




                                                                                                                             (A.4)
PROOF From the inequality



we ﬁnd the ﬁrst statement. It follows, since λi ≠ 1, that we have
                                                       Some Mathematical Results                                                     221


which converges towards



since Mn → 0. Finally we evaluate the sum (A.4) by




                                                                                                                                        □
Now let M be symmetric and positive semi-deﬁnite, that is, M = M′ and x′ Mx ≥ 0. In this case the following well-
known spectral decomposition of a symmetric matrix holds.
LEMMA A.3 The equation



has p solutions λ1 ≥ λ2 ≥ ⋯ ≥ λp ≥ 0, the eigenvalues, with corresponding eigenvectors v1, . . . , vpsatisfying



and



In matrix notation we let




then VΛ = MV, VΛ V′ = M, V′ MV = Λ, V′ V = I = VV′.
If the eigenvalues are different and positive then any invariant subspace   (i.e. such that y ∈ L implies My ∈ L) has the property that it
is spanned by a subset of the eigenvectors.
PROOF The proofs of these results will not be given, since they can be found in most textbooks on matrices. The last
result deserves a comment, however. If L is invariant, then also L⊥, the orthogonal complement, is invariant. To see
this take y ∈ L⊥, such that y′x = 0 for all x ∈ L. Then also y′Mx = 0, since Mx ∈ L. But y′Mx = (My)′ x = 0, shows that
My ∈ L⊥, and hence that L⊥ is invariant.
Next we show that if L1 is a one-dimensional linear subspace, then either    , or       . Thus take x ∈ L1 and
decompose x = x1 + x2, where x1 ∈ L and x2 ∈ L⊥. Then Mx = Mx1 + Mx2, but Mx = λ x for some λ > 0, which shows
that Mx1 + Mx2 = Mx = λ x = λ x1 + λ x2.
222                                               Some Mathematical Results


Since the decomposition of λ x is unique, it follows that Mx1 = λ x1, and Mx2 = λ x2. This shows that x1 and x2 are both
in L1, since the eigenvalues are different, and hence that one of them must be zero, which proves that either         or
       . If L and L⊥ have dimensions m and p − m respectively, then if       we have L = L1 + L ∩ L1⊥, where L ∩ L1⊥
has dimension m − 1, or else a similar decomposition is possible for L⊥. In both cases we can peel away a linear
subspace, a process that will terminate after p steps.
                                                                                                                          □
DEFINITION A.4 We deﬁne                   , and if M is positive deﬁnite then              .
LEMMA A.5 Let M and N be symmetric such that M is positive semi-deﬁnite and N is positive deﬁnite, then the equation



                                                                                                                       (A.5)
has p eigenvalues λ1 ≥ λ2 ≥ ⋯ ≥ λp ≥ 0, with corresponding eigenvectors v1, . . . , vp, such that



                                                                                                                       (A.6)
or in matrix notation



                                                                                                                       (A.7)


                                                                                                                       (A.8)


                                                                                                                       (A.9)
PROOF Deﬁne                     , then A is positive semi-deﬁnite and symmetric, and



has solutions λ1 ≥ λ2 ≥ ⋯ ≥ λp ≥ 0 with corresponding eigenvectors E = (e1, . . . ep), such that EΛ = AE and E′ E = I,
see Lemma A.3. Now deﬁne              , then NV Λ = MV, V′ MV = Λ and V′ NV = I.
                                                                                                                          □
Note that V is not orthogonal, and that N−1M is not symmetric, so that although λ is a solution to |λ I − N−1M| = 0,
this formulation does not guarantee that λ is real. We shall refer to the problem solved in Lemma A. 5 as the basic
eigenvalue problem. These eigenvalue results solve a number of extremum problems, of which we shall now give a few.
LEMMA A.6 Let M be symmetric and positive semi-deﬁnite and N symmetric and positive deﬁnite. The function



is minimized by M = N, and the minimum value is p.
                                               Some Mathematical Results                                                 223


PROOF We decompose M with respect to N by solving (A.5) and ﬁnd from (A.7) and (A.8)




such that




Hence




which is minimized by the choice                   , and therefore by N−1M = VV−1 = I or M = N.
                                                                                                                            □
LEMMA A.7 Let M be symmetric and positive semi-deﬁnite and N symmetric and positive deﬁnite. The function



is maximized among all vectors x ∈ Rpby     and the maximal value of f is λ1, where λ1and v1are the maximal eigenvalue and the
corresponding eigenvector in the equation




PROOF We apply Lemma A.5 and deﬁne y by x = Vy, then




which is clearly bounded above by the maximal eigenvalue λ1, and equality holds if y1 = 1, y2 = ⋯ = yp = 0. This choice
of y implies that      the ﬁrst column of V. Note that the maximizing value of x is not uniquely deﬁned. One can
always multiply by a constant different from zero and, if λ1 = λ2, one can even choose       or some linear combination
of v1 and v2.
                                                                                                                            □
224                                            Some Mathematical Results


This result is now generalized:
LEMMA A.8 Let M be symmetric and positive deﬁnite and N symmetric and positive deﬁnite. The function



is maximized among all p × r matrices by            , and the maximal value is       , where again λiand viare solutions to the
eigenvalue problem



                                                                                                                       (A.10)
where we assume that λ1 > ⋯ > λp > 0. We can also choose times any non-singular r × r matrix as the maximizing argument.
An expansion of log f(x + h) around is given by




                                                                                                                       (A.11)

PROOF We ﬁrst expand the determinant




Here                  . Taking logarithms we ﬁnd



Next we expand the function
                                                Some Mathematical Results                                                225




                                                                                                                       (A.12)
where the last term simpliﬁes to




The function log f(x) has a stationary point      if the derivative at   in the direction h is zero for all h, hence the ﬁrst
order condition



                                                                                                                       (A.13)
This is easier to interpret if we let        and                , since then the result is that Ay (y′ Ay)−1 = y (y′y)−1. This
means that Ay is in the space spanned by y, and hence that the space sp (y) is invariant under the linear mapping A and
therefore a union of invariant one-dimensional subspaces spanned by the eigenvectors ei of A, see Lemma A.3. Thus
                     for some choice of i1, . . . , ir. This gives                          and the value of the function
             , which is clearly maximal if we choose i1 = 1, . . . , ir = r, corresponding to the largest r eigenvalues of A,
which gives the ﬁrst result, since the eigenvalues of A can be found from (A.10).
From (A.12) we ﬁnd the expansion of                  . Note that when considering



the ﬁrst order terms vanish, but so do the second order terms involving



which holds at the maximum point, see (A.13). The non-vanishing second order term is
226                                               Some Mathematical Results


which gives the required result, see (A.10).
                                                                                                                                □
LEMMA A.9 Let the symmetric matrices M (p1 × p1) and N (p2 × p2) be positive deﬁnite and let A (p1 × p2) be such that the matrix




is positive semi-deﬁnite. Assume that p1 ≥ p2 ≥ r. Then the function



is maximized among p1 × r matrices x and p2 × r matrices y as follows:
First solve



                                                                                                                          (A.14)
giving              and eigenvectors              normalized as V′ MV = I. Next solve



                                                                                                                          (A.15)
giving              and eigenvectors               normalized as W′ NW = I. Note that (A.14) and (A.15) have the same positive
eigenvalues.
Then the maximum of f(x, y) is attained for             and ŷ = (w1, . . . , wr) and the maximal value is   . The solutions can be
chosen such that                        .
PROOF Let us ﬁrst maximize for ﬁxed value of y. The function



is maximized by Lemma A.8. The corresponding eigenvalue problem is



Now the rank of the matrix Ayy′ A′ is at most r, which shows that at most r eigenvalues Λ = diag (λ1, . . . , λr) are
positive. The corresponding eigenvectors Vr = (v1, . . . , vr) satisfy



which shows that Vr has the form M−1Ayϕ for some r × r matrix ϕ = y′A′VrΛ−1. Inserting this we ﬁnd
                                                  Some Mathematical Results                                                    227




Again this is maximized by Lemma A.8 by solving (A.15). Note that if yi is an eigenvector for the problem (A.15) with
λi > 0, then              is an eigenvector, properly normalized, for the same eigenvalue but for the dual problem
(A.14). Thus we really only have to solve one of the eigenvalue problems. The maximum value is found by inserting
the normalized eigenvalues               in the expression for f(x, y).
That (A.14) and (A.15) have the same positive solutions follows from the matrix relation, see (A.26)




                                                                                                                                  □
LEMMA A.10 Let now both M and N be positive semi-deﬁnite symmetric matrices of dimension p × p such that Nx = 0 implies Mx =
0. Let rank(M) = m and rank(N) = n. Let x be p × r, r ≤ n. The function



is maximized as follows: ﬁrst solve |ρ I − N| = 0 for ρ1 ≥ ⋯ ≥ ρn > ρn+1 = ⋯ = ρp = 0 and eigenvectors w1, . . . , wp, and deﬁne the
matrix




such that C′ NC = I (n × n). Next solve the eigenvalue problem |λ I − C′ MC| = 0 for eigenvalues λ1 ≥ ⋯ ≥ λn ≥ 0 and eigenvectors
v1, . . . , vn. The solution of the maximization problem is              and the maximum value is             . The solution is
orthogonal to the null space for N.
PROOF Since




it is seen that the null space of N is spanned by (wn+1, . . . , wp), and that



only depends on x through the projection onto the orthogonal complement to the null space of N as spanned by Wn =
(w1, . . . , wn). Since x′N = 0
228                                           Some Mathematical Results


implies that x′M = 0 it is seen that in order to maximize f(x) it is enough to consider f(x) only on the space spanned by
Wn or C. For x = Cy we ﬁnd



which is maximized as indicated by Lemma A.8.
                                                                                                                       □

A.2 The Binomial Formula for Matrices
Let A and B be p × p matrices. The binomial formula states that




The number of terms in the rth summand is          , and if A and B commute then




The exponential function is given by the expansion




The basic relation between the binomial formula and the exponential function is given in the classical result.
THEOREM A.11 Let A be a square matrix, then for T → ∞ it holds that




PROOF The binomial formula gives




The norm of the last term is bounded by                    , independently of T. Hence we can ﬁrst choose N such that
the last term is small, and then T so large that the ﬁrst term is close to exp(A) and the second term is small, since it
only has ﬁnitely many terms.
                                                                                                                       □
                                                Some Mathematical Results                                          229


In the following we shall give various reﬁnements of this result using the binomial formula. These results resemble the
well-known inequalities for the exponential function




PROPOSITION A.12 If T‖BT‖ is bounded then for some constant c the following inequalities hold



                                                                                                                (A.16)


                                                                                                                (A.17)



                                                                                                                (A.18)
PROOF The binomial formula gives




which is bounded by the assumption on ‖BT ‖. Next we get




by the inequality ex − 1 ≤ xex and the boundedness of T‖BT ‖. Finally we ﬁnd




by the inequality                 .
                                                                                                                     □
In the following we consider equations of the form


where the solution is given by




                                                                                                                (A.19)
230                                              Some Mathematical Results


LEMMA A.13 Let A = I + α β′, α and β (p × r), and assume that the eigenvalues of I + β′ α are less than 1 in absolute value, such
that ‖ (I + β′ α)t ‖ ≤ cλtfor some λ < 1 and all t, see (A.2). Assume also that ‖T BT‖ is bounded. Then



                                                                                                                          (A.20)
and for t = 0, . . . , T and some constant c



                                                                                                                          (A.21)


                                                                                                                          (A.22)


                                                                                                                          (A.23)
PROOF of (A.20): the binomial formula gives




by (A.2).
                                                                                                                               □
PROOF of (A.21): again the binomial formula gives




and hence from (A.20), we have ‖Ai‖ ≤ cA




which is assumed bounded.
                                                                                                                               □
PROOF of (A.22): from the identity



                                                                                                                          (A.24)
we ﬁnd since β′ (I + α β′) = (I + β′ α) β′, that
                                               Some Mathematical Results                    231




which by (A.19) has the solution




hence




since λi is summable.
PROOF of (A.23): from (A.24) we also ﬁnd, since



that




which by (A.19) can be solved as




and hence




Now by (A.16) we have ‖(I + α′⊥BT β⊥ (α′⊥ β⊥)−1)i‖ ≤ c3, and since



we only have to show that                        is bounded. We then apply the identities
232                                           Some Mathematical Results


From these results we ﬁnd




The ﬁrst term is by (A.22) bounded by cT‖Bt ‖ and hence bounded, and the second term is bounded by   ,
which completes the proof.
                                                                                                     □
THEOREM A.14 If the eigenvalues of I + β′ α are less than 1 then



where C = β⊥ (α′⊥ β⊥)−1 β′⊥.
PROOF First note that from (A.22) it follows that



hence β′ (I + α β′ + T−1B)T = β′ (A + BT)T has the same limit as



which tends to zero by the assumption on the eigenvalues. Next consider



which by (A.22) has the same limit as




Combining the results we ﬁnd




                                                                                                     □
                                              Some Mathematical Results                                               233


A.3 The Multivariate Gaussian Distribution
We let X denote a p-dimensional Gaussian random variable with mean ξ and non-singular variance matrix Ω. The
distribution is denoted by Np(ξ, Ω), and the density is given by




                                                                                                                   (A.25)

If X is decomposed into X1 and X2 of dimension p1 and p2 (p1 + p2 = p) and if ξ and Ω are decomposed similarly




then the distribution of X1 is Gaussian in p1 dimensions with mean ξ1 and variance Ω11, whereas the distribution of X2
given X1 is Gaussian with mean                       and variance                   .
It is an important result of the multivariate Gaussian distribution, see Barndorff-Nielsen (1978), that we can
parametrize the statistical model deﬁned by letting (ξ, Ω) vary freely, either by (ξ, Ω) or by the parameters of the
marginal distribution



and the parameters of the conditional distribution



when these two sets of parameters vary freely in their respective domains



This is seen by solving for ξ = ξ (φ, ψ) and Ω = Ω (φ, ψ) for any value of (φ, ψ) in the domain of deﬁnition.
The important relation



                                                                                                                   (A.26)
is most easily interpreted by noting that the left hand side is the normalizing constant in the density of X, whereas the
right hand side is the product of the normalizing constants in the marginal distribution of X1 and the conditional
distribution of X2 given X1 respectively.
The interpretation of Ω as the variance of X is paralleled by the interpretation of Ω−1 as the precision or information in
X. The basic ‘duality’
234                                                 Some Mathematical Results


between marginal distributions and conditional distributions is nicely displayed in the result that the variance in the
marginal distribution is found by restricting the variance matrix Ω to Ω11, whereas the precision in the conditional
distribution of X2 given X1 is found by restricting the precision Ω−1 to (Ω−1)22 = Ω22. This is seen from the well-known
result




The basic estimation problem is that of ﬁnding estimates of ξ and Ω when we have T independent identically
distributed observations from (A.25).
LEMMA A.15 Let X1, . . . , XTbe independent identically distributed Gaussian variables with mean ξ and variance Ω then




and the maximized likelihood function is given by


                                                                                                                         (A.27)
PROOF The likelihood function is



                                                                                                                         (A.28)
or, with c = Tp log(2π),



                                                                                                                         (A.29)
The parameter ξ enters only in the last expression which can be simpliﬁed as follows




                                                                                                                         (A.30)

The last quantity is non-negative and only zero if         , which shows that the maximum likelihood estimator of ξ is .
Inserting this and applying the notation                         we ﬁnd
                                                  Some Mathematical Results                                                    235




By Lemma A.6 this is minimized by           . This shows that the maximum likelihood estimators are as indicated.
Inserting these in the likelihood function we ﬁnd



which shows (A.27).
                                                                                                                                  □
The basic regression problem is solved similarly.
LEMMA A.16 Let Xt = β′ vt + εt, t = 1, . . . , T, where vtare deterministic regressors and εtare independent Gaussian variables with
mean zero and variance Ω. The estimates of β and Ω are given by




with


PROOF The likelihood function is found from (A.28)



                                                                                                                            (A.31)
We apply the same trick as in (A.30) and ﬁnd




The last expression is non-negative and equal to zero only if          . Thus the maximum likelihood estimator is , and the
estimate of Ω is found as before.
                                                                                                                                  □
In regression it is often convenient to perform the estimation in a two-step procedure, and we show here how this is
done.
236                                                    Some Mathematical Results


LEMMA A.17 Let Xt = α′ ut + β′ vt + εt, where utand vtare deterministic regressors, and εtare independent Gaussian variables with mean
zero and variance Ω. The estimator of α can be calculated in two steps as follows:
     1. First regress Xtand uton vtgiving residuals Rxtand Rut, that is, correct Xtand utfor vt.
     2. The maximum likelihood estimator of α can be found by regressing Rxton Rut.
PROOF The likelihood function is found from (A.29) and is given by




Minimizing with respect to β gives the equation



or


Inserting the solution for β we ﬁnd




with                  and                . Thus the concentrated likelihood function is



                                                                                                                              (A.32)
which shows, see (A.31), that the estimate of α is found by regression of Rxt on Rut.
                                                                                                                                    □
This result is of course closely related to the interpretation of α as the effect of ut on Xt corrected for vt, which is the
ceteris paribus assumption usually made in econometrics.
LEMMA A.18 Let



where (ε1t, ε2t) are independent Gaussian variables with mean zero and variance matrix
                                                     Some Mathematical Results                                                     237




Here utand vtare deterministic regressors. Then




The parameters                          vary independently of the parameters (β, Ω11). This shows that estimates of α and β can be found
as follows
   1. Regress X2ton utto determine and .
   2. Regress X1ton vt, ut, and X2tgiving regression estimates    , and    .
   3. Calculate                                    .
PROOF This follows from the properties of the Gaussian distribution.
                                                                                                                                      □
The reason that the simple regression solution exists to this problem is that although the two equations do not have the
same regressors, it still holds that the regressors for X2t are a subset of the regressors for X1t. This is the structure that
allows a simple solution.


A.4 Principal Components and Canonical Correlations
Let again X be Gaussian Np (ξ, Ω). Let (Λ, V) solve the eigenvalue problem


such that V′Ω V = Λ. The variables Y = V′X are distributed as


which shows that the components of Y are independent and that the variance of Yi is λi. These linear combinations are
called the principal components of X. By the results about eigenvectors and eigenvalues they can be characterized as
follows.
Let μ ∈ Rp and consider the function
238                                               Some Mathematical Results


From Lemma A.7 it follows that the direction μ which maximizes the variance of μ′X is given by the eigenvector v1 and
the maximal variance obtainable is λ1.
Similarly it is seen that the function f (μ) is maximized among all directions μ orthogonal to v1 by the eigenvector v2, and
that this restricted maximum value is λ2. To see this note that if μ′Ω v1 = 0, then μ ∈ sp(v2, . . . , vp) such that μ = (v2, . . . ,
vp)ξ. Then




which is maximized by ξ′ = (1, 0, . . . , 0), giving the maximal value λ2.
Next let X1 and X2 be p-dimensional Gaussian variables with mean zero and variance matrix




We can, as before, ﬁnd the principal components of X1 and X2 by solving the eigenvalue problems |λ I − Ω11| = 0 and
|λ I − Ω22| = 0 respectively, but we shall here consider the relations between the variables and consider the function


We want to ﬁnd directions μ and ν in which this (squared) correlation is maximal. Lemma A.9 shows how one can
solve this maximization problem, by solving the ‘dual’ eigenvalue problems



                                                                                                                             (A.33)



                                                                                                                             (A.34)

Let the eigenvectors for (A.33) be V1 and the eigenvectors for (A.34) be V2. The eigenvectors v1i and v2i are called the
canonical variates, and ρ is the canonical correlation. Note that if we deﬁne new variables Ui = V′iXi then Ui is
Gaussian Np (0, I), and the covariance is given by
 Weak Convergence of Probability Measures on R                                                                           p




                 and C[0,1]
The purpose of this appendix is to explain the concept of weak convergence on C[0, 1], the space of continuous
functions on the unit interval [0, 1], and hence explain what is behind the formulae involving Brownian motion, which
appear in the discussion of the limit distributions in cointegration theory. The principal reference is Billingsley (1968).
The main conclusion is that apart from weak convergence of ﬁnite-dimensional distributions, which can be proved by
applying the central limit theorem on Rp, we need to be able to bound the oscillations of the stochastic process. Hence
apart from some general arguments involving compactness, separability, and other notions from functional analysis we
need to make a genuine probabilistic argument in order to prove an inequality for the maximal ﬂuctuation of the
stochastic process in question.
Once weak convergence is understood, we can use it for two purposes, ﬁrst to show the existence of stochastic
processes on C[0, 1] like Brownian motion, and next to ﬁnd distributions of suitable functionals of Brownian motion.
The continuous mapping theorem immediately gives the limit distribution of functionals that are continuous on C[0,
1], and Donsker's invariance principle then shows that we can calculate limit distributions by choosing a suitable
measure that converges weakly. This is also what is used for simulating the limit distributions. In many ways a more
convenient tool is convergence on D[0, 1], that is, the space of functions that are right continuous and have left limits.
It is, however, a bit more complicated to explain, so we focus on C[0, 1], even though some of the results are more
naturally formulated for D[0, 1].


B.1 Weak Convergence on R                            p



It will be assumed that the reader is familiar with the notion of weak convergence on R and Rp, and that the central
limit theorem is well known, but for the sake of completeness let us just state the basic deﬁnitions and results in the
following form:
Let P and Pn, n = 1, 2, . . . be probability measures on the Borel sets of Rp.
240                                       Weak Convergence of Probability Measures


DEFINITION B.1 The sequence Pnconverges weakly to P if



for all bounded real valued continuous functions on Rp.
This deﬁnition is easy to formulate but is difﬁcult to work with in speciﬁc examples, and it is convenient to have
criteria for convergence which do not involve so many functions. It is enough to consider functions that are not only
continuous, but also continuously differentiable with a bounded derivative. It is also enough to consider the special
functions




This gives rise to a discussion of the characteristic function. If instead of the continuous functions we consider
functions of the form


we get the well-known deﬁnition of weak convergence that states that we have weak convergence if the distribution
functions converge in points of continuity for the limit distribution. All these results are proved by showing that the
particular class of functions, that we restrict attention to, can be used to approximate continuous functions. All
deﬁnitions and results about weak convergence of probability measures can be given an equivalent formulation in
terms of random variables. Thus the basic deﬁnition of weak convergence can be formulated as follows.
The sequence of p-dimensional random variables Xn converge weakly with P as their limit distribution if the
distribution Pn of Xn converges weakly towards P. Convergence in probability of Xn to X requires that both variables are
deﬁned on the same probability space and is deﬁned by                    for all δ > 0.
The basic result that we need in all asymptotic analysis is the central limit theorem which in a simple form states
THEOREM B.2 (The central limit theorem.) Let Xnbe a sequence of independent identically distributed p-dimensional random variables
with mean ξ and variance ∑, and let Sn = X1 + ⋯ + Xn, then



The central limit theorem for martingales generalizes this result to hold for a much larger class of random variables
allowing different distributions and dependence between the variables, and we give this below.
Let XT.t, t = 1, . . . , T and T = 1, 2, . . . be an array of vector valued stochastic variables. Let    be an array of σ-ﬁelds
such that             , and such that XT.t is measurable with respect to .
                                        Weak Convergence of Probability Measures                                              241


THEOREM B.3 Under the assumptions that


                                                                                                                             (B.1)


                                                                                                                             (B.2)


it holds that              .                                                                                                 (B.3)
The ﬁrst condition states that the ﬁnite sequence XT.1, . . . , XT.T is a martingale difference sequence with respect to the
increasing sequence of σ-ﬁelds          . The second condition is the analogue of the classical Lindeberg condition,
which can be replaced by



The last condition requires that we have normalized the variables properly. This version of the central limit theorem is
taken from Helland (1982), see also Hall and Heyde (1980).


B.2 Weak Convergence on C[0, 1]
We now turn to weak convergence for measures deﬁned on the space of continuous functions on the unit interval:
C[0, 1]. The basic stochastic process, Brownian motion, is deﬁned as follows:
DEFINITION B.4 The Brownian motion W(t), t ∈ [0, 1] with variance Ω is deﬁned as a stochastic process with the following properties


                                                                                                                             (B.4)

                                                                                                                             (B.5)

                                                                                                                             (B.6)



                                                                                                                             (B.7)

If Ω = I the process is called standard Brownian motion.
If W is a Brownian motion deﬁned on some probability space we can ﬁnd the distribution of the process by mapping
the probability measure into the space C[0, 1] by the mapping
242                                   Weak Convergence of Probability Measures


That is, to each ω we consider the sample path t → W(t) which by deﬁnition is a continuous function. For this to make
sense one must of course ﬁrst deﬁne a σ-ﬁeld on C[0, 1]. We therefore deﬁne the σ-ﬁeld C generated by the open balls




Here B(x0, δ) is the ball around the function x0 with radius δ, that is, the set of all functions which deviate less than δ
from the given function x0, or in other words, all functions lying in a 2δ band around the function x0. Thus we consider
the uniform norm on C[0, 1].
On C[0, 1] there is also a notion of convergence that is important



that is, convergence of a sequence of functions xn means uniform convergence on the unit interval.
Various functionals deﬁned on C[0, 1] are continuous with respect to this notion of convergence. Consider for instance
the evaluation functional Ls which to any function x associates the value of x at the point s, that is




It is clear that if xn → x (uniformly) then it also converges at any given point, and hence that Ls is continuous and hence
measurable with respect to the σ-ﬁeld C. This shows that sets of the form


are measurable, and hence that we can discuss the distribution of the process at a ﬁnite number of points, the so-called
ﬁnite-dimensional distributions.
Another continuous function that will be considered is the functional



which to any continuous function associates the integral of the function. To see that this is continuous, let xn → x, and
evaluate




Since convergence of xn to x is deﬁned such that xn converges uniformly to x, we see that also the integrals converge.
The functional
                                        Weak Convergence of Probability Measures                                               243


is also continuous by the above since the mapping from C[0, 1] to C[0, 1] : x → x2 is continuous. Consider ﬁnally the
functional from C[0, 1] to C[0, 1] deﬁned by




This is also continuous, since




The deﬁnition of weak convergence on C[0, 1] is then given by Deﬁnition B.1, which has to hold for all bounded real
continuous functionals deﬁned on C[0, 1].
Theorem B.5 (The continuous mapping theorem) If          on C[0, 1], and if L is any continuous functional on C[0, 1] with values in
Rpor C[0, 1], then      .
PROOF This is one of the results where the deﬁnition used for weak convergence is easily applied, since what we want
to prove is that for any bounded continuous function f : Rp → R, or C[0, 1] → R it holds that


This is obvious since the mapping


is a composition of continuous mappings and hence continuous, and bounded because f is bounded.
                                                                                                                                  □
Corollary B.6 If     then also              on R and




Proof This follows since the mappings                 and            are continuous.
                                                                                                                                  □
Corollary B.7 If     , then also the ﬁnite-dimensional distributions converge.
Proof This follows since the mappings


of C[0, 1] into Rk are continuous.
                                                                                                                                  □
244                                   Weak Convergence of Probability Measures


Thus if we have weak convergence to, for instance, Brownian motion, we can immediately get weak convergence of a
number of interesting functionals like the integral, which is the one we need.


B.3 Construction of Measures on C[0, 1]
How then do we construct measures on the space C[0, 1], and how can we prove weak convergence? There is a simple
way of constructing a sequence of measures on C[0, 1] which will now be discussed.
Consider the random variables Y1, . . . , Yn with values in R. We form the partial sums Sn = Y1 + ⋯ + Yn and construct
the continuous random function Xn(t) by the deﬁnition



                                                                                                                     (B.8)
Note that if nt = k, k an integer, then


The continuous function t → Xn(t) interpolates linearly between the values at the points k/n. Thus Xn(t) is a continuous
function which is 0 at t = 0. The mapping from the probability space of the random variables Xn into C[0, 1] given by
(B.8) induces a probability measure Pn on C[0, 1]. One should of course check that this mapping is measurable. Thus
we can construct measures on C[0, 1] which have all their mass on some rather simple functions, namely the piecewise
linear functions. As n → ∞ these functions become very jagged, and under suitable conditions on the random variables
one can show that Pn converges weakly. In this way one can actually construct the Brownian motion as a limit of
random walks.
Let us therefore start by assuming that Yn is a sequence of independent identically distributed binary variables taking
the values 1 and −1 with equal probability, such that Sn is a random walk. Note that E(Yn) = 0, and Var(Yn) = 1, and
denote the probability measure on Rn induced by Y1, . . . , Yn by Qn.
From the central limits theorem it follows that for any ﬁxed t, the limit distribution of Xn(t) is Gaussian with mean zero
and variance t. This is seen since



and the extra term from the expression for Xn(t), see (B.8), is bounded in norm by



                                                                                                                     (B.9)
which tends to zero in probability by Chebychev's inequality:
                                        Weak Convergence of Probability Measures                                              245




Similarly we can see that for any ﬁnite number of points t1, . . . , tk the joint distribution of Xn(t1), . . . , Xn (tk) converges
to the joint distribution derived from standard Brownian motion. This joint distribution is most easily expressed by
saying that the increments are independent and Gaussian with a variance equal to the length of the time interval.
We saw above that if there is weak convergence we must necessarily have that the ﬁnite-dimensional distributions
converge, but unfortunately this condition is not enough to ensure weak convergence, and this chapter is an attempt to
explain the nature of the extra argument that is needed to prove weak convergence.


B.4 Tightness and Prohorov's Theorem
In order to discuss this we must deﬁne and discuss the notion of tightness of a family of probability measures.
On Rp it is well known that for any probability measure P it holds that for all δ > 0 there exists a compact set


such that P[−a, a] ≥ 1 − δ.
Similarly for any sequence of probability measures that converges weakly on Rp there exists a compact set [−a, a] such
that for all n it holds that Pn[−a, a] ≥ 1 − ε. The general deﬁnition on C[0, 1] is
DEFINITION B.8 A family of probability measures on C[0, 1] is called tight if for all δ > 0 there exists a compact set K for which




Informally one can say that if there is weak convergence the probability mass cannot ‘escape to inﬁnity’, and it is this
property that is called tightness. This property is what is needed apart from the convergence of the ﬁnite-dimensional
distributions to ensure weak convergence on function spaces.
We now formulate Prohorov's theorem for C[0, 1]
THEOREM B.9 (Prohorov's theorem.) Let be the family of probability measures on C[0, 1]. Then is tight if and only if any sequence
in has a convergent subsequence.
246                                  Weak Convergence of Probability Measures


In order to apply this result to the random walk considered above, assume for a moment that we have proved that the
sequence of probability measures Pn induced by the functions Xn(t) given in (B.8) were indeed tight. Then we could
extract a convergent subsequence P(n′), say. Let the limit probability measure be denoted P∞, such that   . Since weak
convergence implies that ﬁnite-dimensional distributions converge we must have that P∞ has the ﬁnite-dimensional
distribution of the standard Brownian motion. It is not difﬁcult to see that two probability measures are equal if they
have the same ﬁnite-dimensional distributions. The basic argument behind this is that we can approximate the ball
B(x0, δ) by the ﬁnite dimensional sets




Thus the ﬁnite dimensional sets are a determining class since they determine the probability measure uniquely, but not
a convergence-determining class since an extra condition is needed to ensure convergence. It follows that P∞ is
standard Brownian motion, and since the limit is the same for any convergent subsequence the sequence itself must be
convergent to standard Brownian motion. Note that the result actually deﬁnes the Brownian motion as the process on
C[0, 1] with ﬁnite-dimensional distributions as deﬁned by the properties (B.4), (B.5), (B.6), and (B.7). Thus if we can
prove that Pn is tight then we can use Prohorov's theorem to show the existence of Brownian motion. The following
quote is from Billingsley (1968:20).

   The ﬁnite-dimensional sets are thus a determining class in C[0, 1] but not a convergence-determining class. The
   difﬁculty, interest, and usefulness of weak convergence in C[0, 1] all spring from the fact that it involves
   considerations going beyond those of ﬁnite-dimensional sets.

The proof of Prohorov's theorem involves general arguments from topology and functional analysis, and will not be
discussed here. The main importance is to link the notion of weak convergence of probability measures with the
notion of compactness in the space C[0, 1]. This raises the important issue what such sets look like. For a function in
C[0, 1] we deﬁne the modulus of continuity as follows




A function x is uniformly continuous if wx(δ) → 0 for δ → 0, and a set of functions A is equi-continuous if
for δ → 0.
THEOREM B.10 (Arzéla–Ascoli) The set A in C[0, 1] has compact closure if
                                          Weak Convergence of Probability Measures                                      247


Thus a compact subset of C[0, 1] is a closed set of functions which is equi-continuous.


B.5 Construction of Brownian Motion
We can now give the basic theorem that can be applied to prove tightness of a sequence of probability measures for the
situations that we consider.
THEOREM B.11 The sequence Pnis tight if the following two conditions are satisﬁed:
For each positive η, there exists an a such that




For each positive ε and η, there exists a δ, with 0 < δ < 1 and an integer n0such that



                                                                                                                     (B.10)
for all 0 ≤ t ≤ 1 − δ and all n ≥ n0.
The reason for giving this theorem and the story behind it is to see that the type of condition that is needed to prove
weak convergence is a condition that bounds the local oscillation of the stochastic process, and it is useful to collect the
important inequalities in probability that allow one to evaluate the ﬂuctuations of stochastic processes, like the maximal
ergodic lemma, the martingale inequality, Kolmogorov's inequality etc., see Billingsley (1979). In the present context we
need to show that a suitable compact set has large measure. For the space C[0, 1] the compact sets are deﬁned by the
property that the modulus of continuity should be uniformly small, and condition (B.10) above shows that if the
stochastic process allows a suitable bound upon its ﬂuctuations as measured by the modulus of continuity, then the
probability measures are tight and allow weak convergence.
As an example of the type of calculation that is needed to prove (B.10) consider the random walk Sn and the
continuous process Xn(t) deﬁned in (B.8). Let Qn denote the probability on the space where Y1, . . . , Yn are deﬁned and
let Pn denote the distribution of Xn(·) on C[0, 1].
In order to show that for the random walk Sn condition (B.10) is satisﬁed we note that


for large values of n, is roughly the same as
248                                  Weak Convergence of Probability Measures




The probability of this can be evaluated by




In order to bound this we apply the basic reﬂection principle, see Feller (1971), to the symmetric random walk and ﬁnd
for x ≤ a



such that




Hence we can evaluate for ε > 0



By the central limit theorem this can be approximated by the tail of a Gaussian distribution                   which by
Chebychev's inequality for the fourth moment is bounded by 6δ2ε−4, hence




This shows that for any ε and η we can choose a δ such that condition (B.10) is satisﬁed for n sufﬁciently large and
hence that the process Xn is tight.
This completes our ‘proof ’ that the measures Pn constructed on C[0, 1] from the random walks converge weakly to
Brownian motion. Using Prohorov's theorem we have actually proved the existence of Brownian motion.


B.6 Stochastic Integrals with Respect to Brownian Motion
If F is a distribution function on [0, 1] and f is a continuous bounded function, we deﬁne the integral of f with respect
to F by the limit
                                        Weak Convergence of Probability Measures                                       249


where the limit is taken over all partitions of the unit interval


as max0≤ i≤ n−1 |ui+1 − ui| → 0.
This deﬁnes the Riemann–Stieltjes integral. We can replace F by a function of bounded variation, that is, a function for
which




If we replace F by Brownian motion then in order for the limit to make sense we need another deﬁnition of the limit
since Brownian motion does not have bounded variation.
Let therefore X(u) be a stochastic process with continuous sample paths and W(u) Brownian motion. Assume that they
are both measurable with respect to an increasing family of σ–ﬁelds         .
We then deﬁne the stochastic integral           as the L2 limit of




                                                                                                                  (B.11)
where the limit is taken over all partitions as max0≤ i≤ n−1 |ui+1 − ui| → 0.
Thus it is part of the deﬁnition that




The existence of this limit is not at all obvious and requires a detailed study, see Karatzas and Shreve (1988). If F has
bounded variation, then it holds that



such that in this special case the stochastic integral can be calculated as a Lebesgue–Stieltjes integral. Note that




is distributed as
250                                       Weak Convergence of Probability Measures


which converges weakly to



Hence         is distributed as          . The main application of the theory of stochastic integrals is in stochastic
calculus, but this is not what we need it for. What we need to observe is that various product moments like (B.11)
converge, and we apply this fact to express various limit distributions in terms of stochastic integrals.
Once these expressions are found the distribution is simulated using expressions similar to (B.11) for a sufﬁciently ﬁne
partition.


B.7 Some Useful Results for Linear Processes
We summarize some useful results about sums and product moments for multivariate i.i.d. processes εt with mean zero
and variance matrix Ω, and apply them to linear processes.
THEOREM B.12 For a sequence of p-dimensional independent identically distributed variables with mean zero and variance Ω it holds
that




                                                                                                                                  (B.12)




                                                                                                                                  (B.13)




                                                                                                                                  (B.14)
If FT(t) is a sequence of deterministic functions deﬁned for t = 1, . . . , T, which converge to a function F deﬁned on [0, 1], such that
FT([Tu]) → F(u), then



                                                                                                                                  (B.15)




                                                                                                                                  (B.16)

The result (B.12) is Donsker's invariance principle for convergence in the space C[0, 1] (or D[0, 1]), see Billingsley
(1968), and the second follows
                                      Weak Convergence of Probability Measures                                  251


from the continuous mapping theorem applied to the continuous functional              . The result (B.14) and (B.15)
are proved in the paper by Chan and Wei (1988) applying the Skorohod representation that replaces weak convergence
by almost sure convergence. Finally (B.16) can be proved like (B.13) by applying the joint weak convergence of the
processes            and            , and the continuous mapping               .
In the analysis of the autoregressive model we meet many processes generated by linear combinations of the ε and we
need the results from Theorem B.12 for such linear processes, see Phillips and Solo (1992). We therefore deﬁne the
linear processes




where we assume that the coefﬁcients ϑi and ψi decrease exponentially fast such that             and            are
convergent for |z| ≤ 1 + δ for some δ > 0. This guarantees the existence of the processes Ut and Vt in the sense of
almost sure convergence and gives the formula




THEOREM B.13 Under the above assumptions on the processes Utand Vtit holds that



                                                                                                              (B.17)




                                                                                                              (B.18)
where W(u) is Brownian motion. Further we have



                                                                                                              (B.19)




                                                                                                              (B.20)




                                                                                                              (B.21)
252                                       Weak Convergence of Probability Measures


If FT([Tu]) is a sequence of deterministic functions that converges to a function F(u) then



                                                                                                              (B.22)
and



                                                                                                              (B.23)

PROOF The result (B.17) follows from the inequality




This result shows that the continuous process we ﬁnd by interpolating linearly between the values of    converges in
probability, and hence weakly, to zero on C[0, 1].
The proof of the remaining relations consists in reducing the results to the corresponding results given for i.i.d.
variables in Theorem B.12. We expand the function ϑ(z) at the point z = 1, see Lemma 4.1, and ﬁnd


where for z ≠ 1 and |z − 1| < δ we have the expansion




This gives the representations


where




such that



                                                                                                              (B.24)
Normalizing by         we ﬁnd from (B.17) that (B.18) follows from (B.12). The continuous mapping theorem applied to
the process            and the functional           shows (B.19).
                                     Weak Convergence of Probability Measures                            253


We next insert (B.24) and a similar expression for Vt into (B.20) and get




From (B.14) it follows that the ﬁrst term converges towards



and we next ﬁnd the limit of the remaining terms. From the partial summation




we ﬁnd by dividing by T that the law of large numbers implies




Finally the third term gives the limit




It remains to check that




To prove (B.21) we apply the central limit theorem for martingales (Theorem B.3) and deﬁne the σ-ﬁelds
and
254                                  Weak Convergence of Probability Measures


Since Vt−1 is measurable with respect to     it follows that XT.t is a martingale difference sequence, that is, condition
(B.1) is satisﬁed. We calculate the sum of the conditional covariances in (B.3).




Finally we apply the stationarity of the processes to see that the Lindeberg condition is satisﬁed



This clearly implies condition (B.2). Thus the central limit theorem applies and the proof of (B.21) is complete. Finally
(B.22) and (B.23) are proved from (B.15) and (B.16) using the representation (B.24).
                                                                                                                       □
                                                References
Ahn, S. K., and Reinsel, G. C. (1990), ‘Estimation for partially non-stationary multivariate autoregressive models’,
     Journal of the American Statistical Association, 85: 813–23.
Anderson, T. W. (1951), ‘Estimating linear restrictions on regression coefﬁcients for multivariate normal distributions’,
     Annals of Mathematical Statistics, 22: 327–51.
—— (1971), The Statistical Analysis of Time Series. John Wiley: New York.
—— (1984), An Introduction to Multivariate Statistical Analysis, John Wiley: New York.
Baba, Y., Hendry, D. F., and Starr, R. M. (1922), ‘The demand for M1 in the U.S.A., 1960–1988’, Review of Economic
     Studies, 59: 25–61.
Banerjee, A., Dolado, J. J., Galbraith, J. W., and Hendry, D. F. (1993), Co-Integration, Error Correction and the Econometric
     Analysis of Non-stationary Data, Oxford University Press: Oxford.
—— and Hendry, D. F. (eds.) (1992), ‘Testing integration and cointegration’, Oxford Bulletin of Economics and Statistics,
     54: 225–480.
Barndorff-Nielsen, O. E. (1978), Information and Exponential Families in Statistical Theory, John Wiley: New York.
Berger, R. L., and Sinclair, D. F. (1984), ‘Testing hypotheses concerning unions of linear subspaces’, Journal of the
     American Statistical Association, 79: 158–63.
Billingsley, P. (1968), Convergence of Probability Measures, John Wiley: New York.
—— (1979), Probability and Measures, John Wiley: New York.
Boswijk, H. P. (1992), Cointegration, Identiﬁcation and Exogeneity: Inference in Structural Error Correction Models, Thesis
     Publisher Tinbergen Institute: Amsterdam.
—— (1993), ‘Testing for an unstable root in conditional and structural error correction models’, Journal of Econometrics,
     63: 37–60.
—— (1995), ‘Testing identiﬁability of cointegration vectors’, forthcoming in Journal of Business and Economic Statistics.
Breiman, L. (1992), Probability. Addison Wesley Pub. Co: Reading, Mass.
Chan, N. H., and Wei, C. Z. (1988), ‘Limiting distributions of least squares estimates of unstable autoregressive
     processes’, Annals of Mathematical Statistics, 16: 367–410.
Doornik, J. A., and Hansen, H. (1994), ‘A practical test for univariate and multivariate normality’, Discussion paper,
     Nufﬁeld College.
—— and Hendry, D. F. (1994), PcFiml 8.0. Interactive Econometric Modelling of Dynamic Systems, International Thomson
     Publishing: London.
256                                                      References


Engle, R. F., Hendry D. F., and Richard J. -F. (1983), ‘Exogeneity’, Econometrica, 51: 277–304.
—— and Granger, C. W. J. (1987), ‘Co-integration and Error Correction: Representation, Estimation and Testing’,
    Econometrica, 55: 251–76.
—— —— (1991), Long-run Economic Relations: Readings in Cointegration, Oxford University Press: Oxford.
—— and Yoo, S. B. (1991), ‘Cointegrated economic time series: an overview with new results’, in Engle and Granger
    (eds.), Long-run Economic Relations: Readings in Cointegration, 237–66, Oxford University Press, Oxford.
Ericsson, N. R. (ed.) (1992), ‘Cointegration, exogeneity and policy analysis, Part I and Part II’, Journal of Policy Modelling,
    14: 251–560.
Feller, W. (1971), An Introduction to Probability Theory and its Applications, John Wiley: New York.
Fisher, F. M. (1966), The Identiﬁcation Problem in Econometrics, McGraw-Hill: New York.
Fuller W. (1976), Introduction to Statistical Time Series, John Wiley: New York.
Godfrey, L. G. (1988), Misspeciﬁcation tests in Econometrics, Cambridge University Press: Cambridge.
Gonzalo, J., and Granger, C. W. J. (1995), ‘Estimation of common long memory components in cointegrated systems’,
    Journal of Business and Economic Statistics, 13: 27–36.
Granger, C. W. J. (1981), ‘Some Properties of Time Series Data and their use in Econometric Model Speciﬁcation’,
    Journal of Econometrics, 16: 121–30.
—— (1983), ‘Cointegrated Variables and Error Correction Models’, Discussion paper, University of California, San
    Diego.
—— and Konishi, T. (1993), ‘Separation in cointegrating systems’, Discussion paper, University of California, San
    Diego.
—— and Lee, T. -H. (1989), ‘Multicointegration’, Advances in Econometrics, 8: 71–84.
Gregoir, S., and Laroque, G. (1993), ‘Multivariate integrated time series: A polynomial error correction representation
    theorem’, Econometric Theory, 9: 329–42.
Hall, P., and Heyde, C. C. (1980), Martingale Limit Theory and its Applications, Academic Press: New York.
Hamilton, J. D. (1994), Time Series Analysis, Princeton University Press: Princeton.
Hansen, H., and Juselius, K. (1995), CATS in RATS: Cointegration Analysis of Time Series', Estima, Evanston.
Harbo, I., Johansen, S., Nielsen, B. G., and Rahbek, A. C. (1995), ‘Test for cointegrating rank in partial systems’
    Submitted to Journal of Business Economics and Statistics.
                                                       References                                                      257


Helland, I. (1982), ‘Central limit theorems for martingales with discrete or continuous time’, Scandinavian Journal of
    Statistics, 9: 79–94.
Hendry, D. F. (1995), Dynamic Econometrics, Oxford University Press: Oxford.
Hylleberg, S., Engle R. F., Granger, C. W. J., and Yoo, S. B. (1990), ‘Seasonal integration and cointegration’, Journal of
    Econometrics, 44: 215–38.
Johansen, S. (1988a), ‘The mathematical structure of error correction models’, Contemporary Mathematics, 80: 359–86.
—— (1988b), ‘Statistical analysis of cointegration vectors’, Journal of Economic Dynamics and Control, 12: 231–54.
—— (1989), ‘Likelihood Based Inference on Cointegration. Theory and Applications’, Lecture notes, Centro Interuniversitario
    di Econometria, Bologna.
—— (1991a), ‘The power function of the likelihood ratio test for cointegration’, in J. Gruber (ed.), Econometric Decision
   Models: New Methods of Modelling and Applications, 323–35. Springer Verlag, New York.
—— (1991b), ‘Estimation and hypothesis testing of cointegration vectors in Gaussian vector autoregressive models’,
   Econometrica, 59: 1551–80.
—— (1992a), ‘A representation of vector autoregressive processes integrated of order 2’, Econometric Theory, 8:
   188–202.
—— (1992b), ‘Determination of cointegration rank in the presence of a linear trend’, Oxford Bulletin of Economics and
   Statistics, 54: 383–97.
—— (1992c), ‘An I(2) cointegration analysis of the purchasing power parity between Australia and USA’, in C.
    Hargreaves (ed.), Macroeconomic Modelling of the Long Run, 229–48. Edward Elgar, London.
—— (1992d), ‘Testing weak exogeneity and the order of cointegration in UK money demand data’, Journal of Policy
    Modelling, 14: 313–35.
—— (1992e), ‘Cointegration in partial systems and the efﬁciency of single equation analysis’, Journal of Econometrics, 52:
    389–402.
—— (1994), ‘The role of the constant and linear terms in cointegration analysis of non-stationary variables’,
   Econometric Reviews, 13: 205–29.
—— (1995a), ‘A statistical analysis of cointegration for I(2) variables’, Econometric Theory, 11: 25–59.
—— (1995b), ‘Identifying restrictions of linear equations: with applications to simultaneous equations and
   cointegration’, Journal of Econometrics, 69: 111–32.
—— (1995c), ‘The role of ancillarity in inference for non-stationary variables’, Economic Journal, 105: 302–20.
—— (1996), ‘A likelihood analysis of the I(2) model’, Submitted to Scandinavian Journal of Statistics.
—— and Juselius, K. (1990), ‘Maximum likelihood estimation and inference on cointegration: with applications to the
    demand for money’, Oxford Bulletin of Economics and Statistics, 52: 169–210.
258                                                    References


—— —— (1992), ‘Testing structural hypotheses in a multivariate cointegration analysis of the PPP and UIP for UK’,
    Journal of Econometrics, 53: 211–44.
—— —— (1994), ‘Identiﬁcation of the long-run and the short-run structure: an application to the ISLM model’,
    Journal of Econometrics, 63: 7–36.
—— and Nielsen, B. G. (1994), ‘Asymptotics for tests for cointegrating rank in the presence of intervention dummies:
    manual for the simulation program DisCo’, Program and manual at http://www.math.ku.dk/∼sjo
—— and Schaumburg, E. (1996), ‘Inference for seasonally cointegrated autoregressive processes’, Discussion paper,
    University of Copenhagen
—— and Swensen, A. R. (1994), ‘Testing rational expectations in vector autoregressive models’, Discussion Paper,
    University of Copenhagen.
Juselius, K. (1992), ‘Domestic and foreign effects on prices in an open economy: the case of Denmark’, Journal of Policy
    Modelling, 14: 401–28.
—— (1994), ‘On the duality between long-run relations and common trends in the I(1) versus I(2) model. An
    application to aggregate money holdings’, Econometric Reviews, 13: 157–78.
—— (1995), ‘Do purchasing power parity and uncovered interest rate parity hold in the long run? An example of
    likelihood inference in a multivariate time series model’, Journal of Econometrics, 69: 211–40.
Kac, M. (1969), ‘Some mathematical models in science’, Science, 166: 695–9.
Karatzas, I., and Shreve, S. E. (1988), Brownian Motion and Stochastic Calculus, Springer Verlag: New York.
Lee, H. S. (1992), ‘Maximum likelihood inferences on cointegration and seasonal cointegration’, Journal of Econometrics,
    54: 1–47.
Lütkepohl, H. (1991), Introduction to Multiple Time Series Analysis, Springer-Verlag: New York.
—— (1994), ‘Interpretation of cointegrating relations’, Econometric Reviews, 13: 391–4.
Magnus, J. R. and Neudecker H. (1988), Matrix Differential Calculus with Applications in Statistics and Econometrics, John
    Wiley: New York.
Mizon, G. E., and Richard, J. -F. (1986), ‘The encompassing principle and its application to non-nested hypothesis
    tests’, Econometrica, 54: 657–78.
Mosconi, R. (1993), ‘Analysis of deterministic trends in cointegrated systems’, Discussion Paper, Dep. Econ. e Prod.
    Politecnico di Milano.
—— and Giannini, C. (1992), ‘Non-causality in cointegrated systems: representation, estimation and testing’, Oxford
    Bulletin of Economics and Statistics, 54: 399–417.
Pantula, S. G. (1989), ‘Testing for unit roots in time series data’, Econometric Theory, 5: 256–71.
Park, J. Y. (1992), ‘Canonical cointegrating regressions’, Econometrica, 60: 119–43.
Paruolo, P. (1995a), ‘Asymptotic inference on the moving average impact
                                                      References                                                     259


matrix in cointegrated I(1) VAR systems’, forthcoming in Econometric Theory.
—— (1995b), ‘Asymptotic efﬁciency of the 2 step estimator in I(2) VAR systems’, forthcoming in Econometric Theory
—— (1996), ‘On the determination of integration indices in I(2) systems’, Journal of Econometrics, 72: 313–56.
Perron, P. and Campbell, J. Y. (1993), ‘A note on Johansen's cointegration procedure when trends are present’,
    Empirical Economics, 18: 777–89.
Phillips, P. C. B. (1988), ‘Regression theory for near integrated time series’, Econometrica, 56: 1021–44.
—— (1991), ‘Optimal inference in cointegrated systems’, Econometrica, 59: 283–306.
—— and Solo, V. (1992), ‘Asymptotics of linear processes’, Annals of Statistics, 20: 971–1001.
Rahbek, A. C. (1994), ‘The power of some multivariate cointegration tests’, forthcoming in Econometric Theory.
Reimars, H. -E. (1992), ‘Comparisons of tests for multivariate cointegration’, Statistical Papers, 33: 335–59.
Reinsel, G. C. (1991), Elements of Multivariate Time Series Analysis, Springer-Verlag: New York.
Reinsel, G. C., and Ahn, S. K. (1992), ‘Vector autoregressive models with unit roots and reduced rank structure:
    estimation, likelihood ratio test, and forecasting’, Journal of Time Series Analysis, 13: 353–75.
Saikkonen, P. (1995), ‘Problems with the asymptotic theory of maximum likelihood estimation in integrated and
    cointegrated systems’, Econometric Theory, 11: 888–911.
Shenton, L. R., and Bowman, K. O. (1977), ‘A bivariate model for the distribution of √b1 and b2’, Journal of the American
    Statistical Association, 72: 206–11.
Sims, C. A., Stock, J. H., and Watson, M. W. (1990), ‘Inference in linear time series models with some unit roots’,
    Econometrica, 58: 113–44.
Stock, J. H. (1987), ‘Asymptotic properties of least squares estimates of cointegration vectors’, Econometrica, 55:
    1035–56.
—— and Watson, M. W. (1988), ‘Testing for common trends’, Journal of the American Statistical Association, 83:
    1097–107.
—— —— (1993), ‘A simple estimator of cointegrating vectors in higher order integrated systems’, Econometrica, 61:
    783–820.
Strang, G. (1976), Linear Algebra and its Applications, Academic Press: New York.
Teräsvirta, T., and Mellin, I. (1986), ‘Model selection criteria and model selection tests in regression models’,
    Scandinavian Journal of Statistics, 13: 159–71.
Urbain, J. P. (1992), ‘On weak exogeneity in error correction models’, Oxford Bulletin of Economics and Statistics, 52:
    187–202.
260                                                    References


Warne, A. (1993), ‘A common trends model: identiﬁcation, estimation and inference’, Discussion Paper, University of
   Stockholm.
Velu, R. P., and Reinsel, G. C. (1987), ‘Reduced rank regression with autoregressive errors’, Journal of Econometrics, 35:
   317–35.
              Subject Index
adjustment coefﬁcients; asymptotic distribution, 184, 187;
     deﬁnition, 41; hypothesis testing, 121; interpretation, 41,
     55
ARCH test, 25, 29
Arzéla-Ascoli's theorem, 247
Assumption1, 14
asymptotic distribution; , 181; , 181; , 188; , 190; Ĉ,
     190; , 190
asymptotic distribution of; estimators in the VAR, 19
asymptotic distribution; identiﬁed β, 185; , 187; , 183; ,
     187; trace test, 151
asymptotic properties; estimators, 177; I(1) process, 145;
     product moments, 146; random walk, 144; test for
     Π=0, 148; process with a trend, 144
asymptotic results, 143
attractor set, 41
Australian data; cointegration analysis, 116; deﬁnition, 7;
     description, 28; test for I(2), 137
autoregressive model, 45
Bartlett correction, 10
binomial formula for matrices, 228
Brownian motion, 143; construction, 247; deﬁnition, 241
C[0, 1]; deﬁnition, 239; probability measures on, 241
canonical correlation, 93, 238
canonical variates, 93, 238
CATS in RATS, 21
central limit theorem; for i.i.d. variables, 240; for martingales,
     240
characteristic polynomial; companion form, 15; deﬁnition,
     11; roots, 14
Chebychev's inequality, 244, 248
cointegrating rank; deﬁnition, 37; determination, 98, 167;
     example, 37; power of test, 201; test for, 151
cointegrating relation; deﬁnition, 37; example, 37; interpre-
     tation, 41, 50; invariance to information set, 42
cointegrating space; deﬁnition, 37
cointegrating vector; deﬁnition, 37, 39; example, 37
cointegration, 34; deﬁnition, 37, 39; example, 37
cointegration rank
common trends, 34; choice of, 53; conditioning on, 178;
     deﬁnition, 41; estimation, 95, 128; non-invariance to
     information set, 42
compactness in C[0, 1], 246
companion form, 14–15
condition for; I(0), 14; I(1), 49; I(2), 58
262                                                        Subject Index


conditional model, 122; deﬁnition, 122
consistency; of estimators, 180; of identiﬁed β, 185
constant drift; interpretation, 81; model, 170
continuous mapping theorem, 243
convergence of probability, 20
D[0, 1], 239
Danish data; cointegration analysis, 112; deﬁnition, 7;
     description, 23
degrees of freedom; calculation, 104; correction for, 23
deterministic terms, 11, 151; analysis of models, 95; in model,
     70; interpretation, 81; models for, 80; restrictions on, 70
Dickey-Fuller distribution, 94, 153, 156
disequilibrium error, 39
Donsker's invariance principle, 239, 250
drift, 81
duality; between α⊥ and β, 121
dummies, 84
Edgeworth expansion, 10
eigenvalue, 15, 93, 219, 221–222
eigenvalue problem, 92, 221–222
eigenvector, 92, 219, 221–222
Engle, R. F., v, 10, 34, 39–40, 53, 66, 121
equations for variables, 79
error correction model; example, 39, 46; structural, 78, 112
estimator of α; asymptotic distribution, 181; consistency, 180
estimator of β; asymptotic distribution, 181, 185; consistency,
     180
estimator of β; normalization, 177, 179
exponential function, 228; as limit, 228, 232; for matrices,
     228; inequalities, 229
extremum problem for eigenvalues, 222–227
FIML, 112
ﬁnite dimensional distributions, 239
ﬁnite sample results, 10, 141
Gaussian distribution; conditional, 233; estimation, 234;
     interpretation of regression, 236; marginal, 233; multi-
     variate, 233; precision, 233; regression, 235; role in
     statistics, 177; test for, 22; two step regression, 235;
     variance, 233; variation free parameters, 233
generating function, 12
Granger's representation theorem, 8, 40, 48, 53, 59, 65, 80, 141
hypothesis; H(r), 81; H*(r), 82; H1(r), 83; (r), 83; H2(r),
     83; of neutrality, 80; of rational expectation, 80; on α, 77,
     124; on β, 73, 106; on deterministic terms, 80
I(0); deﬁnition, 35
I(1); deﬁnition, 35, 70; diagnostic tool, 53; example, 37;
     model, 70
I(2); condition for, 58; example, 37, 46; model, 132;
     representation, 38, 56; test for, 163
                                                          Subject Index                                                      263

                                                                        restrictions, 107; β under restrictions on α, 126; β⊥, 95
identiﬁcation; generic, 76; of α, 72; of β, 72; of β, 76; of        misspeciﬁcation test; I(2), 132; ARCH, 22; Gaussian
      sp(α), 72; of sp(β), 72                                           distribution, 22; lag length, 21
identifying restrictions, 76; on β, 185                             mixed Gaussian distribution; of ,
information, 233; conditioning on, 178
initial value, 12, 15, 49
integrated process; deﬁnition, 35
integration; deﬁnition, 35; example, 37
intervention dummies, 84
invariant distribution, 15
Jarque-Bera test, 23, 25
Jordan canonical form, 219
Jordan representation, 220
Kolmogorov's inequality, 247
Kolmogorov's three series criterion, 14
Kronecker product, 18
lag length determination, 21
Lagrange multiplier test, 22
λmax, 95
likelihood equations, 182; I(0) model, 18; I(1) model, 182; I(2)
      model, 134; vector autoregressive model, 18
Likelihood function, 90
likelihood function; for vector autoregressive model, 18
likelihood ratio test; Hr, s in , 135; H(r) in H(p), 93;
      cointegrating rank, 156; individual restrictions on β, 112;
      rank determination, 92; restrictions on α, 126; restric-
      tions on β, 107; limit distribution, 151; local power, 204;
      some β known, 109
likelihood ratio test for β, 192; asymptotic properties, 192; for
      identiﬁed β, 195; simple hypothesis, 192
linear drift; interpretation, 81; model, 175
linear process, 14, 250; deﬁnition, 34
linear restriction; on α, 124; on β, 104; on individual β
      vectors, 110; same on all β, 106; some β known, 108; the
      same restriction on all α, 124; some adjustment
      coefﬁcients known, 127
Ljung–Box test, 24, 29
local alternative, 201; asymptotic properties of process, 202;
      deﬁnition, 202; for cointegration test, 206
local oscillation, 247
local power of trace test, 201
long-run coefﬁcients, 72
long-run relations, 5–6
long-run variance, 49
marginal model, 123
martingale inequality, 247
maximal ergodic lemma, 247
maximized likelihood function; I(1) model, 93; restrictions on
      β, 107, 111; VAR model, 18; Gaussian distribution, 234;
      in marginal model, 125; some β known, 109
maximum likelihood estimator; existence and uniqueness, 20;
      in partial model, 122; α⊥, 95; β, 93; β under linear
264                                                     Subject Index

      185; conditional variance, 181, 183; conﬁdence interval,    stable economic relations, 34
     178; deﬁnition, 177; inference, 178                          stationary process; deﬁnition, 13
models with deterministic terms; deﬁnition, 81; statistical       stationary variable; in system, 74; test for, 74
     analysis, 95                                                 statistical model, 3, 5
modulus of continuity, 246                                        stochastic integrals; deﬁnition, 248
money equation, 79                                                structural models, 78
money relation, 7, 79                                             structural relations, 5
moving average; model, 38, 45; representation, 38, 40             test for; H(r) in H(p), 93; H(r) in H(r+1), 93; H*(r) in H(r),
near integrated process, 201; deﬁnition, 202; properties of,           97; H*(r) in H*(p), 97; H1*(r) in H1(r),
     202
neutrality, 79
non-linear restriction, 185
normalization; of α, 180; of β, 72, 179
Ornstein–Uhlenbeck process, 201
parametrization; of the I(1) model, 70, 71; direct, 73;
     indirect, 73; I(2) model, 133; error correction model, 79
partial correlations, 93
partial model, 6; efﬁciency, 122; statistical analysis, 122
partial systems, 121; deﬁnition, 122
polynomial cointegration, 58, 60; deﬁnition, 39; example, 37
portmanteau test, 21
positive semi-deﬁnite, 221
power function; table, 216; trace test, 201
power of test for cointegrating rank, 157
precision, 233
principal components, 237
product moment matrices, 90
product moments; under local alternatives, 205
Prohorov's theorem, 245
purchasing power parity, 7
random walk, 247
rank condition; for identiﬁcation, 76; test for, 77
rational expectation, 80, 101
reduced form error correction model, 70
reduced rank regression, 7, 91, 104, 125
reﬂection principle, 248
regression, 235
regression estimator, 18
relations between variables, 79
representation of; I(0) process, 14; I(1) process, 45; I(2)
     process, 45, 56, 58; I(1) as autoregressive processes, 55;
     integrated variables, 45; moving average process as
     autoregressive processes, 55; vector autoregressive proc-
     ess, 12
seasonal cointegration, 10
seasonal dummies, 84
simulations, 211
tables, 211
single equation, 123
Skorohod representation, 251
small sample correction, 98
spectral decomposition, 221
                                                         Subject Index   265

      98; H1*(r) in H1*(p), 98; I(2), 132; hypotheses on β, 104;
     hypotheses on α, 124; presence of I(2), 163
test for cointegrating rank; asymptotic results, 156
tightness, 245
trace statistic; asymptotic distribution, 93; deﬁnition, 92; for
     H(r) in H(p), 93
trace test; asymptotic distribution, 97–98; for H*(r), 97; for
     H1*(r), 97; general form, 155–156; local power, 201;
     tables, 214
trend; deﬁnition, 81; test for, 161
trend stationarity, 39
unanticipated shock, 42
uncovered interest parity, 7
unit root; for I(1) processes, 52; for I(2) processes, 61
variance, 233
vector autoregressive model, 4, 11, 23; error correction form,
     45; example, 46; parameter space, 17; partial model, 23;
     regression estimator, 18; statistical analysis, 17
vector autoregressive process, 11; characteristic polynomial,
     11; companion form, 15; condition for non explosion,
     14; condition for stationarity, 14; initial conditions, 15;
     representation of, 12
weak convergence, 20, 239; deﬁnition, 240; on C[0, 1], 241;
     on Rp, 239
weak exogeneity, 77, 121; in Australian data, 30; interpreta-
     tion, 123
                                                                     Pantula, S. G., 167
                Author Index                                         Park, J. Y., v
                                                                     Paruolo, P., 133, 163, 191
                                                                     Perron, P., 176
                                                                     Phillips, P. C. B., v, 4, 185, 201–202, 251
Ahn, S. K., 4, 98, 185                                               Rahbek, A., 201, 121
Anderson, T. W., 4, 8, 11, 14, 90–91, 93, 219                        Reimers, H. -E., 99
Baba, Y., 29                                                         Reinsel, G. C., v, 4, 98, 185
Banerjee, A., v, 79                                                  Richard, J. -F., 3, 121
Barndorff-Nielsen, O. E., 123, 233                                   Saikkonen, P., 181
Berger, R. L., 167                                                   Schaumburg, E., 10, 67
Billingsley, P., 9, 239, 246–247, 250                                Shenton, L. R., 23
Boswijk, P., 53, 77, 112, 121                                        Shreve, S. E., 249
Bowman, K. O., 23                                                    Sims, C. A., 4
Breiman, L., 14                                                      Sinclair, D. F., 167
Campbell, J. Y., 176                                                 Solo, V., 251
Chan, N. H., 251                                                     Starr, R. M., 29
Dolado, J. J., v, 79                                                 Stock, J. H., v, 4
Doornik, J. A., 21, 23, 112                                          Swensen, A.R., 80
Engle, R. F., v, 10, 34, 39–40, 53, 66, 121
Feller, W., 248
Fisher, F. M., 76, 79
Fuller, W., 153
Galbraith, J. W., v, 79
Giannini, C., 79
Godfrey, L. G., 21
Gonzalo, J., 129
Granger, C. W. J., v, 10, 34, 38–40, 53, 66, 87, 129
Gregoir, S., 39
Hall, P., 241
Hamilton, J. D., v
Hansen, H., 21, 23
Harbo, I., 121
Helland, I., 241
Hendry, D. F., 21, 29, 42, 79, 112, 121
Heyde, C. C., 241
Hylleberg, S., 10, 67
Johansen, S., vi, 4, 7, 10, 39, 53, 57, 67, 76–77, 79–80, 84, 112,
     121, 132–133, 141, 163, 167, 175, 178, 181, 185, 201, 212
Juselius, K., 7, 21, 77, 79, 112, 132
Karatzas, I., 249
Konishi, T., 87
Laroque, G., 39
Lee, H. S., 10
Lee, T. -H., 39
Lütkepohl, H., 21, 50
Magnus, J. R., 219
Mellin, I., 21
Mizon, G. E., 3
Mosconi, R., 79, 84
Neudecker, H., 219
Nielsen, B. G., 84, 121, 212
                         Author Index   267


Teräsvirta, T., 21
Urbain, J. P., 121
Velu, R. P., 4
Warne, A., 78
Watson, M. W., v, 4
Wei, C. Z., 251
Yoo, S. B., 10, 39, 67



---
normalized_id: shared-pdf-reference-creel-m-econometrics-ln-barcelona-2006-o-490s-gl
exam_code: SHARED
material_scope: creel m. econometrics (ln, barcelona, 2006)(o)(490s)_gl_.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Creel M. Econometrics (LN, Barcelona, 2006)(O)(490s)_GL_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-creel-m-econometrics-ln-barcelona-2006-o-490s-gl

                                      Econometrics


                                             c Michael Creel




                                     Version 0.80, February, 2006




    D EPT. OF E CONOMICS AND E CONOMIC H ISTORY, U NIVERSITAT AUTÒNOMA DE BARCELONA ,

MICHAEL . CREEL @ UAB . ES , H T T P :// P A R E T O . U A B . E S / M C R E E L
                                      Contents

List of Figures                                                             14

List of Tables                                                              17

Chapter 1.   About this document                                            18
  1.1. License                                                              19
  1.2. Obtaining the materials                                              19
  1.3. An easy way to use LYX and Octave today                              20
  1.4. Known Bugs                                                           22

Chapter 2.   Introduction: Economic and econometric models                  23

Chapter 3.   Ordinary Least Squares                                         26
  3.1. The Linear Model                                                     26
  3.2. Estimation by least squares                                          27
  3.3. Geometric interpretation of least squares estimation                 30
  3.3.1. In X ,Y Space                                                      30
  3.3.2. In Observation Space                                               30
  3.3.3. Projection Matrices                                                32
  3.4. Influential observations and outliers                                33
  3.5. Goodness of fit                                                      35
  3.6. The classical linear regression model                                38
  3.7. Small sample statistical properties of the least squares estimator   40
  3.7.1. Unbiasedness                                                       40
                                          3
                                       CONTENTS                            4

  3.7.2. Normality                                                        41
  3.7.3. The variance of the OLS estimator and the Gauss-Markov theorem   42
  3.8. Example: The Nerlove model                                         47
  3.8.1. Theoretical background                                           47
  3.8.2. Cobb-Douglas functional form                                     48
  3.8.3. The Nerlove data and OLS                                         49
  Exercises                                                               53

Chapter 4.    Maximum likelihood estimation                               54
  4.1. The likelihood function                                            54
  4.1.1. Example: Bernoulli trial                                         56
  4.2. Consistency of MLE                                                 58
  4.3. The score function                                                 60
  4.4. Asymptotic normality of MLE                                        62
  4.6. The information matrix equality                                    66
  4.7. The Cramér-Rao lower bound                                         68
  Exercises                                                               71

Chapter 5.    Asymptotic properties of the least squares estimator        73
  5.1. Consistency                                                        73
  5.2. Asymptotic normality                                               74
  5.3. Asymptotic efficiency                                              75

Chapter 6.    Restrictions and hypothesis tests                           77
  6.1. Exact linear restrictions                                          77
  6.1.1. Imposition                                                       78
  6.1.2. Properties of the restricted estimator                           82
  6.2. Testing                                                            83
                                       CONTENTS                                 5

  6.2.1. t-test                                                               83
  6.2.2. F test                                                               86
  6.2.3. Wald-type tests                                                      87
  6.2.4. Score-type tests (Rao tests, Lagrange multiplier tests)              88
  6.2.5. Likelihood ratio-type tests                                          90
  6.3. The asymptotic equivalence of the LR, Wald and score tests             92
  6.4. Interpretation of test statistics                                      96
  6.5. Confidence intervals                                                   96
  6.6. Bootstrapping                                                          97
  6.7. Testing nonlinear restrictions, and the Delta Method                  100
  6.8. Example: the Nerlove data                                             104

Chapter 7.   Generalized least squares                                       111
  7.1. Effects of nonspherical disturbances on the OLS estimator             112
  7.2. The GLS estimator                                                     113
  7.3. Feasible GLS                                                          116
  7.4. Heteroscedasticity                                                    118
  7.4.1. OLS with heteroscedastic consistent varcov estimation               119
  7.4.2. Detection                                                           119
  7.4.3. Correction                                                          122
  7.4.4. Example: the Nerlove model (again!)                                 125
  7.5. Autocorrelation                                                       130
  7.5.1. Causes                                                              130
  7.5.2. Effects on the OLS estimator                                        132
  7.5.3. AR(1)                                                               132
  7.5.4. MA(1)                                                               136
  7.5.5. Asymptotically valid inferences with autocorrelation of unknown form 138
                                       CONTENTS             6

  7.5.6. Testing for autocorrelation                      142
  7.5.7. Lagged dependent variables and autocorrelation   144
  7.5.8. Examples                                         145
  Exercises                                               150
  Exercises                                               152


Chapter 8.    Stochastic regressors                       153
  8.1. Case 1                                             154
  8.2. Case 2                                             155
  8.3. Case 3                                             157
  8.4. When are the assumptions reasonable?               157
  Exercises                                               160


Chapter 9.    Data problems                               161
  9.1. Collinearity                                       161
  9.1.1. A brief aside on dummy variables                 162
  9.1.2. Back to collinearity                             163
  9.1.3. Detection of collinearity                        166
  9.1.4. Dealing with collinearity                        166
  9.2. Measurement error                                  170
  9.2.1. Error of measurement of the dependent variable   170
  9.2.2. Error of measurement of the regressors           171
  9.3. Missing observations                               173
  9.3.1. Missing observations on the dependent variable   173
  9.3.2. The sample selection problem                     176
  9.3.3. Missing observations on the regressors           177
  Exercises                                               179
                                     CONTENTS        7

  Exercises                                        179
  Exercises                                        179


Chapter 10. Functional form and nonnested tests    180
  10.1. Flexible functional forms                  181
  10.1.1. The translog form                        183
  10.1.2. FGLS estimation of a translog model      188
  10.2. Testing nonnested hypotheses               192


Chapter 11. Exogeneity and simultaneity            196
  11.1. Simultaneous equations                     196
  11.2. Exogeneity                                 199
  11.3. Reduced form                               202
  11.4. IV estimation                              204
  11.5. Identification by exclusion restrictions   210
  11.5.1. Necessary conditions                     210
  11.5.2. Sufficient conditions                    213
  11.5.3. Example: Klein’s Model 1                 219
  11.6. 2SLS                                       222
  11.7. Testing the overidentifying restrictions   225
  11.8. System methods of estimation               230
  11.8.1. 3SLS                                     232
  11.8.2. FIML                                     237
  11.9. Example: 2SLS and Klein’s Model 1          239


Chapter 12. Introduction to the second half        242


Chapter 13. Numeric optimization methods           251
                                     CONTENTS                8

  13.1. Search                                             252
  13.2. Derivative-based methods                           252
  13.2.1. Introduction                                     252
  13.2.2. Steepest descent                                 254
  13.2.3. Newton-Raphson                                   255
  13.3. Simulated Annealing                                261
  13.4. Examples                                           261
  13.4.1. Discrete Choice: The logit model                 261
  13.4.2. Count Data: The Poisson model                    263
  13.4.3. Duration data and the Weibull model              266
  13.5. Numeric optimization: pitfalls                     270
  13.5.1. Poor scaling of the data                         270
  13.5.2. Multiple optima                                  271
  Exercises                                                275


Chapter 14. Asymptotic properties of extremum estimators   276
  14.1. Extremum estimators                                276
  14.2. Consistency                                        277
  14.3. Example: Consistency of Least Squares              282
  14.4. Asymptotic Normality                               283
  14.5. Examples                                           286
  14.5.1. Binary response models                           286
  14.5.2. Example: Linearization of a nonlinear model      290


Chapter 15. Generalized method of moments (GMM)            295
  15.1. Definition                                         295
  15.2. Consistency                                        298
                                      CONTENTS                         9

  15.3. Asymptotic normality                                         299
  15.4. Choosing the weighting matrix                                301
  15.5. Estimation of the variance-covariance matrix                 304
  15.5.1. Newey-West covariance estimator                            306
  15.6. Estimation using conditional moments                         307
  15.7. Estimation using dynamic moment conditions                   312
  15.8. A specification test                                         312
  15.9. Other estimators interpreted as GMM estimators               315
  15.9.1. OLS with heteroscedasticity of unknown form                315
  15.9.2. Weighted Least Squares                                     317
  15.9.3. 2SLS                                                       318
  15.9.4. Nonlinear simultaneous equations                           319
  15.9.5. Maximum likelihood                                         320
  15.10. Example: The Hausman Test                                   323
  15.11. Application: Nonlinear rational expectations                330
  15.12. Empirical example: a portfolio model                        335


Chapter 16. Quasi-ML                                                 338
  16.1. Consistent Estimation of Variance Components                 340
  16.2. Example: the MEPS Data                                       342
  16.2.1. Infinite mixture models: the negative binomial model       343
  16.2.2. Finite mixture models: the mixed negative binomial model   348
  16.2.3. Information criteria                                       350
  Exercises                                                          353


Chapter 17. Nonlinear least squares (NLS)                            355
  17.1. Introduction and definition                                  355
                                     CONTENTS                            10

  17.2. Identification                                                  357
  17.3. Consistency                                                     359
  17.4. Asymptotic normality                                            359
  17.5. Example: The Poisson model for count data                       361
  17.6. The Gauss-Newton algorithm                                      362
  17.7. Application: Limited dependent variables and sample selection   365
  17.7.1. Example: Labor Supply                                         365

Chapter 18. Nonparametric inference                                     369
  18.1. Possible pitfalls of parametric inference: estimation           369
  18.2. Possible pitfalls of parametric inference: hypothesis testing   374
  18.3. The Fourier functional form                                     376
  18.3.1. Sobolev norm                                                  380
  18.3.2. Compactness                                                   381
  18.3.3. The estimation space and the estimation subspace              381
  18.3.4. Denseness                                                     382
  18.3.5. Uniform convergence                                           383
  18.3.6. Identification                                                384
  18.3.7. Review of concepts                                            384
  18.3.8. Discussion                                                    385
  18.4. Kernel regression estimators                                    386
  18.4.1. Estimation of the denominator                                 387
  18.4.2. Estimation of the numerator                                   390
  18.4.3. Discussion                                                    391
  18.4.4. Choice of the window width: Cross-validation                  392
  18.5. Kernel density estimation                                       392
  18.6. Semi-nonparametric maximum likelihood                           393
                                     CONTENTS                                   11

  18.7. Examples                                                               397
  18.7.1. Kernel regression estimation                                         397
  18.7.2. Seminonparametric ML estimation and the MEPS data                    398


Chapter 19. Simulation-based estimation                                        401
  19.1. Motivation                                                             401
  19.1.1. Example: Multinomial and/or dynamic discrete response models         401
  19.1.2. Example: Marginalization of latent variables                         404
  19.1.3. Estimation of models specified in terms of stochastic differential
              equations                                                        405
  19.2. Simulated maximum likelihood (SML)                                     407
  19.2.1. Example: multinomial probit                                          408
  19.2.2. Properties                                                           410
  19.3. Method of simulated moments (MSM)                                      411
  19.3.1. Properties                                                           412
  19.3.2. Comments                                                             413
  19.4. Efficient method of moments (EMM)                                      414
  19.4.1. Optimal weighting matrix                                             416
  19.4.2. Asymptotic distribution                                              419
  19.4.3. Diagnotic testing                                                    419
  19.5. Examples                                                               420
  19.5.1. Estimation of stochastic differential equations                      420
  19.5.2. EMM estimation of a discrete choice model                            422


Chapter 20. Parallel programming for econometrics                              426
  20.1. Example problems                                                       427
  20.1.1. Monte Carlo                                                          427
                                        CONTENTS                    12

  20.1.2. ML                                                       428
  20.1.3. GMM                                                      429
  20.1.4. Kernel regression                                        431

Bibliography                                                       433

Chapter 21. Final project: econometric estimation of a RBC model   434
  21.1. Data                                                       434
  21.2. An RBC Model                                               436
  21.3. A reduced form model                                       437
  21.4. Results (I): The score generator                           439
  21.5. Solving the structural model                               439

Bibliography                                                       441

Chapter 22. Introduction to Octave                                 442
  22.1. Getting started                                            442
  22.2. A short introduction                                       442
  22.3. If you’re running a Linux installation...                  444

Chapter 23. Notation and Review                                    446
  23.1. Notation for differentiation of vectors and matrices       446
  23.2. Convergenge modes                                          447
  Real-valued sequences:                                           448
  Deterministic real-valued functions                              448
  Stochastic sequences                                             448
  Stochastic functions                                             450
  23.3. Rates of convergence and asymptotic equality               451
  Exercises                                                        453
                                      CONTENTS    13

Chapter 24. The GPL                              454

Chapter 25. The attic                            464
  25.1. Hurdle models                            464
  25.1.1. Finite mixture models                  469
  25.2. Models for time series data              473
  25.2.1. Basic concepts                         473
  25.2.2. ARMA models                            476

Bibliography                                     489

Index                                            490
                           List of Figures

1.2.1   LYX                                               20

1.2.2   Octave                                            21

3.2.1   Typical data, Classical Model                     28

3.3.1   Example OLS Fit                                   31

3.3.2   The fit in observation space                      31

3.4.1   Detection of influential observations             35

3.5.1   Uncentered R2                                     37

3.7.1   Unbiasedness of OLS under classical assumptions   41

3.7.2   Biasedness of OLS when an assumption fails        42

3.7.3   Gauss-Markov Result: The OLS estimator            45

3.7.4   Gauss-Markov Result: The split sample estimator   46

6.5.1   Joint and Individual Confidence Regions           98

6.8.1   RTS as a function of firm size                    109

7.4.1   Residuals, Nerlove model, sorted by firm size     126

7.5.1   Autocorrelation induced by misspecification       131

7.5.2   Durbin-Watson critical values                     144

7.6.1   Residuals of simple Nerlove model                 146

7.6.2   OLS residuals, Klein consumption equation         148
                                       14
                               LIST OF FIGURES                 15

9.1.1     s(β) when there is no collinearity                  163

9.1.2     s(β) when there is collinearity                     164

9.3.1     Sample selection bias                               177

13.1.1    The search method                                   253

13.2.1    Increasing directions of search                     255

13.2.2    Newton-Raphson method                               257

13.2.3    Using MuPAD to get analytic derivatives             260

13.4.1    Life expectancy of mongooses, Weibull model         268

13.4.2    Life expectancy of mongooses, mixed Weibull model   270

13.5.1    A foggy mountain                                    272

15.10.1   OLS                                                 325

15.10.2   IV                                                  325

18.1.1    True and simple approximating functions             371

18.1.2    True and approximating elasticities                 372

18.1.3    True function and more flexible approximation       373

18.1.4    True elasticity and more flexible approximation     374

18.6.1    Negative binomial raw moments                       396

18.7.1    Kernel fitted OBDV usage versus AGE                 398

20.1.1    Speedups from parallelization                       432

21.1.1    Consumption and Investment, Levels                  434

21.1.2    Consumption and Investment, Growth Rates            435

21.1.3    Consumption and Investment, Bandpass Filtered       435
                           LIST OF FIGURES    16

22.2.1   Running an Octave program           443
                        List of Tables

1   Marginal Variances, Sample and Estimated (Poisson)   342

2   Marginal Variances, Sample and Estimated (NB-II)     348

3   Information Criteria, OBDV                           351

1   Actual and Poisson fitted frequencies                464

2   Actual and Hurdle Poisson fitted frequencies         469




                               17
                                          CHAPTER 1


                                   About this document

    This document integrates lecture notes for a one year graduate level course with
computer programs that illustrate and apply the methods that are studied. The im-
mediate availability of executable (and modifiable) example programs when using the
PDF1 version of the document is one of the advantages of the system that has been
used. On the other hand, when viewed in printed form, the document is a somewhat
terse approximation to a textbook. These notes are not intended to be a perfect substi-
tute for a printed textbook. If you are a student of mine, please note that last sentence
carefully. There are many good textbooks available. A few of my favorites are listed
in the bibliography.
    With respect to contents, the emphasis is on estimation and inference within the
world of stationary data, with a bias toward microeconometrics. The second half is
somewhat more polished than the first half, since I have taught that course more often.
If you take a moment to read the licensing information in the next section, you’ll see
that you are free to copy and modify the document. If anyone would like to contribute
material that expands the contents, it would be very welcome. Error corrections and
other additions are also welcome. As an example of a project that has made use of
these notes, see these very nice lecture slides.




1It is possible to have the program links open up in an editor, ready to run using keyboard macros. To
do this with the PDF version you need to do some setup work. See the bootable CD described below.
                                                 18
                                  1.2. OBTAINING THE MATERIALS                        19

                                            1.1. License

    All materials are copyrighted by Michael Creel with the date that appears above.
They are provided under the terms of the GNU General Public License, which forms
Section 24 of the notes. The main thing you need to know is that you are free to modify
and distribute these materials in any way you like, as long as you do so under the terms
of the GPL. In particular, you must make available the source files, in editable form,
for your modified version of the materials.


                                 1.2. Obtaining the materials

    The materials are available on my web page, in a variety of forms including PDF
and the editable sources, at pareto.uab.es/mcreel/Econometrics/. In addition to the
final product, which you’re looking at in some form now, you can obtain the ed-
itable sources, which will allow you to create your own version, if you like, or send
error corrections and contributions. The main document was prepared using LYX
(www.lyx.org) and Octave (www.octave.org). LYX is a free2 “what you see is what
you mean” word processor, basically working as a graphical frontend to LATEX. It
(with help from other applications) can export your work in LATEX, HTML, PDF and
several other forms. It will run on Linux, Windows, and MacOS systems. Figure 1.2.1
shows LYX editing this document.
    GNU Octave has been used for the example programs, which are scattered though
the document. This choice is motivated by two factors. The first is the high quality of
the Octave environment for doing applied econometrics. The fundamental tools exist
and are implemented in a way that make extending them fairly easy. The example
programs included here may convince you of this point. Secondly, Octave’s licensing
philosophy fits in with the goals of this project. Thirdly, it runs on Linux, Windows
2”Free” is used in the sense of ”freedom”, but L X is also free of charge.
                                                Y
                    1.3. AN EASY WAY TO USE LYX AND OCTAVE TODAY                      20


                                 F IGURE 1.2.1. LYX




and MacOS. Figure 1.2.2 shows an Octave program being edited by NEdit, and the
result of running the program in a shell window.


                  1.3. An easy way to use LYX and Octave today

   The example programs are available as links to files on my web page in the PDF
version, and here. Support files needed to run these are available here. The files won’t
run properly from your browser, since there are dependencies between files - they are
only illustrative when browsing. To see how to use these files (edit and run them),
you should go to the home page of this document, since you will probably want to
download the pdf version together with all the support files and examples. Then set
                    1.3. AN EASY WAY TO USE LYX AND OCTAVE TODAY                      21


                                F IGURE 1.2.2. Octave




the base URL of the PDF file to point to wherever the Octave files are installed. All of
this may sound a bit complicated, because it is. An easier solution is available:
   The file pareto.uab.es/mcreel/Econometrics/econometrics.iso distribution of Linux
is an ISO image file that may be burnt to CDROM. It contains a bootable-from-CD
Gnu/Linux system that has all of the tools needed to edit this document, run the Octave
example programs, etcetera. In particular, it will allow you to cut out small portions
of the notes and edit them, and send them to me as LYX (or TEX) files for inclusion in
future versions. Think error corrections, additions, etc.! The CD automatically detects
the hardware of your computer, and will not touch your hard disk unless you explicitly
tell it to do so. It is based upon the ParallelKnoppix GNU/Linux distribution. The
                                   1.4. KNOWN BUGS                                  22

reason why these notes are integrated into a Linux distribution for parallel computing
will be apparent if you get to Chapter 20.

                                  1.4. Known Bugs

   This section is a reminder to myself to try to fix a few things.

      • The PDF version has hyperlinks to figures that jump to the wrong figure. The
         numbers are correct, but the links are not. ps2pdf bugs?
                                       CHAPTER 2


            Introduction: Economic and econometric models

    Economic theory tells us that the demand function for a good is something like:


                                       x = x(p, m, z)


       • x is the quantity demanded
       • p is G × 1 vector of prices of the good and its substitutes and complements
       • m is income
       • z is a vector of other variables such as individual characteristics that affect
         preferences


Suppose we have a sample consisting of one observation on n individuals’ demands at
time period t (this is a cross section, where i = 1, 2, ..., n indexes the individuals in the
sample). The individual demand functions are


                                     xi = xi (pi , mi , zi )


The model is not estimable as it stands, since:


       • The form of the demand function is different for all i.
       • Some components of zi may not be observable to an outside modeler. For
         example, people don’t eat the same lunch every day, and you can’t tell what
         they will order just by looking at them. Suppose we can break zi into the
         observable components wi and a single unobservable component εi .
                                               23
                 2. INTRODUCTION: ECONOMIC AND ECONOMETRIC MODELS                       24

A step toward an estimable econometric model is to suppose that the model may be
written as
                            xi = β1 + p0i β p + mi βm + w0i βw + εi

We have imposed a number of restrictions on the theoretical model:

       • The functions xi (·) which in principle may differ for all i have been restricted
         to all belong to the same parametric family.
       • Of all parametric families of functions, we have restricted the model to the
         class of linear in the variables functions.
       • The parameters are constant across individuals.
       • There is a single unobservable component, and we assume it is additive.

If we assume nothing about the error term ε, we can always write the last equation.
But in order for the β coefficients to have an economic meaning, and in order to be
able to estimate them from sample data, we need to make additional assumptions.
These additional assumptions have no theoretical basis, they are assumptions on top
of those needed to prove the existence of a demand function. The validity of any results
we obtain using this model will be contingent on these additional restrictions being at
least approximately correct. For this reason, specification testing will be needed, to
check that the model seems to be reasonable. Only when we are convinced that the
model is at least approximately correct should we use it for economic analysis.
    When testing a hypothesis using an econometric model, three factors can cause a
statistical test to reject the null hypothesis:

     (1) the hypothesis is false
     (2) a type I error has occured
     (3) the econometric model is not correctly specified so the test does not have the
         assumed distribution
                  2. INTRODUCTION: ECONOMIC AND ECONOMETRIC MODELS                    25

We would like to ensure that the third reason is not contributing to rejections, so that
rejection will be due to either the first or second reasons. Hopefully the above example
makes it clear that there are many possible sources of misspecification of econometric
models. In the next few sections we will obtain results supposing that the economet-
ric model is entirely correctly specified. Later we will examine the consequences of
misspecification and see some methods for determining if a model is correctly spec-
ified. Later on, econometric methods that seek to minimize maintained assumptions
are introduced.
                                         CHAPTER 3


                               Ordinary Least Squares

                                   3.1. The Linear Model

    Consider approximating a variable y using the variables x1 , x2 , ..., xk . We can con-
sider a model that is a linear approximation:
    Linearity: the model is a linear function of the parameter vector β0 :


                             y = β01 x1 + β02 x2 + ... + β0k xk + ε


or, using vector notation:
                                          y = x 0 β0 + ε

The dependent variable y is a scalar random variable, x = ( x1 x2 · · · xk )0 is a k-

vector of explanatory variables, and β0 = ( β01 β02 · · · β0k ) . The superscript “0” in
                                                                      0



β0 means this is the ”true value” of the unknown parameter. It will be defined more
precisely later, and usually suppressed when it’s not necessary for clarity.
    Suppose that we want to use data to try to determine the best linear approximation
to y using the variables x. The data {(yt , xt )} ,t = 1, 2, ..., n are obtained by some form
of sampling1. An individual observation is thus


                                         yt = xt0 β + εt




1For example, cross-sectional data may be obtained by random sampling. Time series data accumulate
historically.
                                               26
                            3.2. ESTIMATION BY LEAST SQUARES                              27

The n observations can be written in matrix form as


(3.1.1)                                      y = Xβ + ε,
                                   0                                          0
where y =       y1 y2 · · · yn           is n × 1 and X =       x1 x2 · · · xn        .
    Linear models are more general than they might first appear, since one can employ
nonlinear transformations of the variables:
                                h                                     i
                     ϕ0 (z) =       ϕ1 (w) ϕ2 (w) · · · ϕ p (w)           β+ε


where the φi () are known functions. Defining y = ϕ0 (z), x1 = ϕ1 (w), etc. leads to a
model in the form of equation 3.6.1. For example, the Cobb-Douglas model

                                                β   β
                                         z = Aw2 2 w3 3 exp(ε)


can be transformed logarithmically to obtain


                           ln z = ln A + β2 ln w2 + β3 ln w3 + ε.


If we define y = ln z, β1 = ln A,etc., we can put the model in the form needed. The
approximation is linear in the parameters, but not necessarily linear in the variables.



                           3.2. Estimation by least squares

    Figure 3.2.1, obtained by running TypicalData.m shows some data that follows the
linear model yt = β1 +β2 xt2 +εt . The green line is the ”true” regression line β1 +β2 xt2 ,
and the red crosses are the data points (xt2 , yt ), where εt is a random error that has mean
zero and is independent of xt2 . Exactly how the green line is defined will become clear
later. In practice, we only have the data, and we don’t know where the green line lies.
We need to gain information about the straight line that best fits the data points.
                             3.2. ESTIMATION BY LEAST SQUARES                                   28


                      F IGURE 3.2.1. Typical data, Classical Model
        10
                                                                                  data
                                                                   true regression line



         5




         0




         -5




        -10




        -15
              0   2      4       6       8     10        12   14           16         18   20
                                               X




   The ordinary least squares (OLS) estimator is defined as the value that minimizes
the sum of the squared errors:


                                     β̂ = arg min s(β)


where


                                         n              2
                             s(β) =      ∑ yt − xt0 β
                                        t=1

                                     = (y − Xβ)0 (y − Xβ)

                                     = y0 y − 2y0 Xβ + β0 X0 Xβ

                                     = k y − Xβ k2
                           3.2. ESTIMATION BY LEAST SQUARES                              29

This last expression makes it clear how the OLS estimator is defined: it minimizes the
Euclidean distance between y and X β. The fitted OLS coefficients will define the best
linear approximation to y using x as basis functions, where ”best” means minimum
Euclidean distance. One could think of other estimators based upon other metrics. For
                                                        n
example, the minimum absolute distance (MAD) minimizes ∑t=1 |yt − xt0 β|. Later, we
will see that which estimator is best in terms of their statistical properties, rather than
in terms of the metrics that define them, depends upon the properties of ε, about which
we have as yet made no assumptions.


       • To minimize the criterion s(β), find the derivative with respect to β and it to
         zero:


                           Dβ s(β̂) = −2X0 y + 2X0 Xβ̂ = 0


         so
                                    β̂ = (X0 X)−1 X0 y.

       • To verify that this is a minimum, check the s.o.s.c.:


                                     D2β s(β̂) = 2X0 X


         Since ρ(X) = K, this matrix is positive definite, since it’s a quadratic form in
         a p.d. matrix (identity matrix of order n), so β̂ is in fact a minimizer.
       • The fitted values are in the vector ŷ = Xβ̂.
       • The residuals are in the vector ε̂ = y − Xβ̂
       • Note that


                                     y = Xβ + ε

                                         = Xβ̂ + ε̂
              3.3. GEOMETRIC INTERPRETATION OF LEAST SQUARES ESTIMATION                  30

      • Also, the first order conditions can be written as


                                  X0 y − X0 Xβ̂ = 0
                                            
                                  X y − Xβ̂ = 0
                                   0


                                            X0 ε̂ = 0


         which is to say, the OLS residuals are orthogonal to X. Let’s look at this more
         carefully.



              3.3. Geometric interpretation of least squares estimation

   3.3.1. In X ,Y Space. Figure 3.3.1 shows a typical fit to data, along with the true
regression line. Note that the true line and the estimated line are different. This fig-
ure was created by running the Octave program OlsFit.m . You can experiment with
changing the parameter values to see how this affects the fit, and to see how the fitted
line will sometimes be close to the true line, and sometimes rather far away.


   3.3.2. In Observation Space. If we want to plot in observation space, we’ll need
to use only two or three observations, or we’ll encounter some limitations of the black-
board. Let’s use two. With only two observations, we can’t have K > 1.

      • We can decompose y into two components: the orthogonal projection onto
         the K−dimensional space spanned by X , X β̂, and the component that is the
         orthogonal projection onto the n − K subpace that is orthogonal to the span of
         X , ε̂.
      • Since β̂ is chosen to make ε̂ as short as possible, ε̂ will be orthogonal to the
         space spanned by X . Since X is in this space, X 0ε̂ = 0. Note that the f.o.c. that
         define the least squares estimator imply that this is so.
                     3.3. GEOMETRIC INTERPRETATION OF LEAST SQUARES ESTIMATION                             31


                                   F IGURE 3.3.1. Example OLS Fit
           15
                                                                               data points
                                                                                 fitted line
                                                                                   true line

           10




            5




            0




            -5




           -10




           -15
                 0       2     4       6       8   10      12         14       16         18          20
                                                   X



                             F IGURE 3.3.2. The fit in observation space


Observation 2




                                           y



                                                    e = M_xY                                   S(x)




                                                                           x


                                                        x*beta=P_xY




                                                                               Observation 1
            3.3. GEOMETRIC INTERPRETATION OF LEAST SQUARES ESTIMATION                32

   3.3.3. Projection Matrices. X β̂ is the projection of y onto the span of X , or

                                                   −1
                                 X β̂ = X X 0 X          X 0y


Therefore, the matrix that projects y onto the span of X is


                                  PX = X (X 0X )−1 X 0


since
                                         X β̂ = PX y.

   ε̂ is the projection of y onto the N − K dimensional space that is orthogonal to the
span of X . We have that


                             ε̂ = y − X β̂

                                = y − X (X 0X )−1 X 0 y
                                                            
                                =        In − X (X 0X )−1 X 0 y.


So the matrix that projects y onto the space orthogonal to the span of X is


                              MX = In − X (X 0X )−1 X 0

                                    = In − PX .


We have
                                          ε̂ = MX y.

   Therefore


                                  y = PX y + MX y

                                         = X β̂ + ε̂.
                     3.4. INFLUENTIAL OBSERVATIONS AND OUTLIERS                    33

These two projection matrices decompose the n dimensional vector y into two orthog-
onal components - the portion that lies in the K dimensional space defined by X , and
the portion that lies in the orthogonal n − K dimensional space.


      • Note that both PX and MX are symmetric and idempotent.
           – A symmetric matrix A is one such that A = A0 .
           – An idempotent matrix A is one such that A = AA.
           – The only nonsingular idempotent matrix is the identity matrix.




                     3.4. Influential observations and outliers

   The OLS estimator of the ith element of the vector β0 is simply

                                                        
                               β̂i =        (X 0X )−1 X 0 i· y

                                   = c0i y


   This is how we define a linear estimator - it’s a linear function of the dependent
variable. Since it’s a linear combination of the observations on the dependent vari-
able, where the weights are detemined by the observations on the regressors, some
observations may have more influence than others. Define


                                  ht = (PX )tt

                                       = et0 PX et

                                       = k PX et k2

                                       ≤ k et k2 = 1
                       3.4. INFLUENTIAL OBSERVATIONS AND OUTLIERS                         34

ht is the tth element on the main diagonal of PX ( et is a n vector of zeros with a 1 in
the tth position). So 0 < ht < 1, and


                                        TrPX = K ⇒ h = K/n.


So, on average, the weight on the yt ’s is K/n. If the weight is much higher, then the
observation has the potential to affect the fit importantly. The weight, ht is referred to
as the leverage of the observation. However, an observation may also be influential
due to the value of yt , rather than the weight it is multiplied by, which only depends on
the xt ’s.
    To account for this, consider estimation of β without using the t th observation
(designate this estimator as β̂(t) ). One can show (see Davidson and MacKinnon, pp.
32-5 for proof) that
                                                            
                                                1
                            β̂   (t)
                                       = β̂ −                    (X 0 X )−1 Xt0 ε̂t
                                              1 − ht
so the change in the t th observations fitted value is
                                                                         
                                                                   ht
                                   Xt β̂ − Xt β̂   (t)
                                                         =                    ε̂t
                                                                 1 − ht

While an observation may be influential if it doesn’t affect its own fitted value, it
certainly is influential if it does. A fast means of identifying influential observations
                  
              ht
is to plot 1−h   t
                     ε̂t (which I will refer to as the own influence of the observation) as a
function of t. Figure 3.4.1 gives an example plot of data, fit, leverage and influence.
The Octave program is InfluentialObservation.m . If you re-run the program you will
see that the leverage of the last observation (an outlying value of x) is always high, and
the influence is sometimes high.
    After influential observations are detected, one needs to determine why they are
influential. Possible causes include:
                                 3.5. GOODNESS OF FIT                                 35


                 F IGURE 3.4.1. Detection of influential observations
       14
                                                                 Data points
                                                                        fitted
                                                                  Leverage
       12                                                          Influence



       10


        8


        6


        4


        2


        0


        -2
             0       0.5         1           1.5        2           2.5          3
                                             X




      • data entry error, which can easily be corrected once detected. Data entry
         errors are very common.
      • special economic factors that affect some observations. These would need to
         be identified and incorporated in the model. This is the idea behind structural
         change: the parameters may not be constant across all observations.
      • pure randomness may have caused us to sample a low-probability observa-
         tion.

There exist robust estimation methods that downweight outliers.




                                 3.5. Goodness of fit

   The fitted model is
                                      y = X β̂ + ε̂
                                       3.5. GOODNESS OF FIT                                 36

Take the inner product:
                                 y0 y = β̂0 X 0 X β̂ + 2β̂0 X 0 ε̂ + ε̂0 ε̂

But the middle term of the RHS is zero since X 0 ε̂ = 0, so


(3.5.1)                                y0 y = β̂0 X 0X β̂ + ε̂0 ε̂


The uncentered R2u is defined as

                                                 ε̂0 ε̂
                                        R2u = 1 − 0
                                                 yy
                                                      β̂0 X 0 X β̂
                                               =
                                                          y0 y
                                                      k PX y k2
                                               =
                                                       k y k2
                                               = cos2 (φ),


where φ is the angle between y and the span of X .



          • The uncentered R2 changes if we add a constant to y, since this changes φ
            (see Figure 3.5.1, the yellow vector is a constant, since it’s on the 45 degree
            line in observation space). Another, more common definition measures the
            contribution of the variables, other than the constant term, to explaining the
            variation in y. Thus it measures the ability of the model to explain the variation
            of y about its unconditional sample mean.



Let ι = (1, 1, ..., 1)0, a n -vector. So


                                     Mι = In − ι(ι0 ι)−1 ι0

                                            = In − ιι0 /n
                                     3.5. GOODNESS OF FIT                          37



                              F IGURE 3.5.1. Uncentered R2




Mι y just returns the vector of deviations from the mean. In terms of deviations from
the mean, equation 3.5.1 becomes


                                y0 Mι y = β̂0 X 0 Mι X β̂ + ε̂0 Mι ε̂


    The centered R2c is defined as

                                           ε̂0 ε̂      ESS
                                R2c = 1 − 0       = 1−
                                         y Mι y        T SS
                                       n
where ESS = ε̂0 ε̂ and T SS = y0 Mι y=∑t=1 (yt − ȳ)2 .
    Supposing that X contains a column of ones (i.e., there is a constant term),


                                    X 0 ε̂ = 0 ⇒ ∑ ε̂t = 0
                                                     t
                       3.6. THE CLASSICAL LINEAR REGRESSION MODEL                       38

so Mι ε̂ = ε̂. In this case
                                 y0 Mι y = β̂0 X 0Mι X β̂ + ε̂0 ε̂

So
                                                  RSS
                                          R2c =
                                                  T SS
where RSS = β̂0 X 0 Mι X β̂

        • Supposing that a column of ones is in the space spanned by X (PX ι = ι), then
          one can show that 0 ≤ R2c ≤ 1.



                       3.6. The classical linear regression model

     Up to this point the model is empty of content beyond the definition of a best linear
approximation to y and some geometrical properties. There is no economic content
to the model, and the regression parameters have no economic interpretation. For
example, what is the partial derivative of y with respect to x j ? The linear approximation
is
                              y = β1 x1 + β2 x2 + ... + βk xk + ε

The partial derivative is
                                       ∂y          ∂ε
                                            = βj +
                                       ∂x j        ∂x j
                                     ∂ε
Up to now, there’s no guarantee that ∂x j
                                          =0. For the β to have an economic meaning, we
need to make additional assumptions. The assumptions that are appropriate to make
depend on the data under consideration. We’ll start with the classical linear regression
model, which incorporates some assumptions that are clearly not realistic for economic
data. This is to be able to explain some concepts with a minimum of confusion and
notational clutter. Later we’ll adapt the results to what we can get with more realistic
assumptions.
                     3.6. THE CLASSICAL LINEAR REGRESSION MODEL                       39

   Linearity: the model is a linear function of the parameter vector β0 :


(3.6.1)                      y = β01 x1 + β02 x2 + ... + β0k xk + ε


or, using vector notation:
                                         y = x 0 β0 + ε

   Nonstochastic linearly independent regressors: X is a fixed matrix of constants,
it has rank K, its number of columns, and 3.6.2

                                          1
(3.6.2)                                lim X0 X = QX
                                          n

where QX is a finite positive definite matrix. This is needed to be able to identify the
individual effects of the explanatory variables.
   Independently and identically distributed errors:


(3.6.3)                               ε ∼ IID(0, σ2In )


ε is jointly distributed IIN. This implies the following two properties:
   Homoscedastic errors:


(3.6.4)                                 V (εt ) = σ20 , ∀t


   Nonautocorrelated errors:



(3.6.5)                              E (εt εs ) = 0, ∀t 6= s


   Optionally, we will sometimes assume that the errors are normally distributed.
     3.7. SMALL SAMPLE STATISTICAL PROPERTIES OF THE LEAST SQUARES ESTIMATOR         40

   Normally distributed errors:


(3.6.6)                             ε ∼ N(0, σ2 In )


      3.7. Small sample statistical properties of the least squares estimator

   Up to now, we have only examined numeric properties of the OLS estimator, that
always hold. Now we will examine statistical properties. The statistical properties
depend upon the assumptions we can make.


   3.7.1. Unbiasedness. We have β̂ = (X 0 X )−1 X 0 y. By linearity,


                             β̂ = (X 0 X )−1 X 0 (X β + ε)

                                = β + (X 0X )−1 X 0 ε


By 3.6.2 and 3.6.3


                          E(X 0 X )−1 X 0 ε = E(X 0X )−1 X 0 ε

                                          = (X 0X )−1 X 0 Eε

                                          = 0


so the OLS estimator is unbiased under the assumptions of the classical model.
   Figure 3.7.1 shows the results of a small Monte Carlo experiment where the OLS
estimator was calculated for 10000 samples from the classical model with y = 1 + 2x +
ε, where n = 20, σ2ε = 9, and x is fixed across samples. We can see that the β2 appears
to be estimated without bias. The program that generates the plot is Unbiased.m , if
you would like to experiment with this.
   With time series data, the OLS estimator will often be biased. Figure 3.7.2 shows
the results of a small Monte Carlo experiment where the OLS estimator was calculated
     3.7. SMALL SAMPLE STATISTICAL PROPERTIES OF THE LEAST SQUARES ESTIMATOR          41


             F IGURE 3.7.1. Unbiasedness of OLS under classical assumptions
                                         Beta hat - Beta true
         0.12




          0.1




         0.08




         0.06




         0.04




         0.02




             0
                 -3     -2         -1             0                 1   2      3



for 1000 samples from the AR(1) model with yt = 0 + 0.9yt−1 + εt , where n = 20 and
σ2ε = 1. In this case, assumption 3.6.2 does not hold: the regressors are stochastic. We
can see that the bias in the estimation of β2 is about -0.2.
    The program that generates the plot is Biased.m , if you would like to experiment
with this.

    3.7.2. Normality. With the linearity assumption, we have β̂ = β + (X 0X )−1 X 0 ε.
This is a linear function of ε. Adding the assumption of normality (3.6.6, which implies
strong exogeneity), then


                                                                
                                 β̂ ∼ N β, (X 0X )−1 σ20

since a linear function of a normal random vector is also normally distributed. In Fig-
ure 3.7.1 you can see that the estimator appears to be normally distributed. It in fact
is normally distributed, since the DGP (see the Octave program) has normal errors.
      3.7. SMALL SAMPLE STATISTICAL PROPERTIES OF THE LEAST SQUARES ESTIMATOR                      42


                 F IGURE 3.7.2. Biasedness of OLS when an assumption fails
                                                 Beta hat - Beta true
          0.14



          0.12



           0.1



          0.08



          0.06



          0.04



          0.02



            0
             -1.2       -1      -0.8      -0.6           -0.4           -0.2   0   0.2     0.4




Even when the data may be taken to be IID, the assumption of normality is often ques-
tionable or simply untenable. For example, if the dependent variable is the number of
automobile trips per week, it is a count variable with a discrete distribution, and is thus
not normally distributed. Many variables in economics can take on only nonnegative
values, which, strictly speaking, rules out normality.2




    3.7.3. The variance of the OLS estimator and the Gauss-Markov theorem.
Now let’s make all the classical assumptions except the assumption of normality. We




2Normality may be a good model nonetheless, as long as the probability of a negative value occuring is
negligable under the model. This depends upon the mean being large enough in relation to the variance.
     3.7. SMALL SAMPLE STATISTICAL PROPERTIES OF THE LEAST SQUARES ESTIMATOR            43

have β̂ = β + (X 0X )−1 X 0 ε and we know that E(β̂) = β. So
                                                                0 
                        Var(β̂) = E         β̂ − β         β̂ − β
                                   
                                = E (X 0 X )−1 X 0 εε0 X (X 0X )−1

                                = (X 0 X )−1 σ20


   The OLS estimator is a linear estimator, which means that it is a linear function of
the dependent variable, y.

                                                             
                                 β̂ =           (X 0 X )−1 X 0 y

                                      = Cy


where C is a function of the explanatory variables only, not the dependent variable. It is
also unbiased under the present assumptions, as we proved above. One could consider
other weights W that are a function of X that define some other linear estimator. We’ll
still insist upon unbiasedness. Consider β̃ = Wy, where W = W (X ) is some k × n
matrix function of X . Note that since W is a function of X , it is nonstochastic, too. If
the estimator is unbiased, then we must have W X = IK :


                             E (Wy)     =        E (W X β0 +W ε)

                                        =        W X β0

                                        =        β0

                                       ⇒

                                WX      =        IK


The variance of β̃ is
                                     V (β̃) = WW 0 σ20 .
     3.7. SMALL SAMPLE STATISTICAL PROPERTIES OF THE LEAST SQUARES ESTIMATOR           44

Define
                                  D = W − (X 0 X )−1 X 0

so
                                  W = D + (X 0 X )−1 X 0

Since W X = IK , DX = 0, so

                                                                  0
                   V (β̃) =   D + (X 0 X )−1 X 0 D + (X 0 X )−1 X 0 σ20
                                           −1  2
                           = DD0 + X 0 X          σ0


So
                                      V (β̃) ≥ V (β̂)

The inequality is a shorthand means of expressing, more formally, that V ( β̃) − V (β̂)
is a positive semi-definite matrix. This is a proof of the Gauss-Markov Theorem. The
OLS estimator is the ”best linear unbiased estimator” (BLUE).


         • It is worth emphasizing again that we have not used the normality assumption
           in any way to prove the Gauss-Markov theorem, so it is valid if the errors are
           not normally distributed, as long as the other assumptions hold.


To illustrate the Gauss-Markov result, consider the estimator that results from splitting
the sample into p equally-sized parts, estimating using each part of the data separately
by OLS, then averaging the p resulting estimators. You should be able to show that this
estimator is unbiased, but inefficient with respect to the OLS estimator. The program
Efficiency.m illustrates this using a small Monte Carlo experiment, which compares
the OLS estimator and a 3-way split sample estimator. The data generating process
follows the classical model, with n = 21. The true parameter value is β = 2. In Figures
     3.7. SMALL SAMPLE STATISTICAL PROPERTIES OF THE LEAST SQUARES ESTIMATOR             45


                   F IGURE 3.7.3. Gauss-Markov Result: The OLS estimator
                                             Beta 2 hat, OLS
         0.1


        0.09


        0.08


        0.07


        0.06


        0.05


        0.04


        0.03


        0.02


        0.01


           0
               0        0.5     1      1.5          2          2.5   3   3.5      4




3.7.3 and 3.7.4 we can see that the OLS estimator is more efficient, since the tails of
its histogram are more narrow.
                                        0 −1
   We have that E(β̂) = β and Var(β̂) = X X    σ20 , but we still need to estimate
the variance of ε, σ20 , in order to have an idea of the precision of the estimates of β. A
commonly used estimator of σ20 is

                                      c2 =      1 0
                                      σ 0          ε̂ ε̂
                                               n−K

This estimator is unbiased:
3.7. SMALL SAMPLE STATISTICAL PROPERTIES OF THE LEAST SQUARES ESTIMATOR       46


    F IGURE 3.7.4. Gauss-Markov Result: The split sample estimator
                           Beta 2 hat, Split Sample Estimator
  0.12




   0.1




  0.08




  0.06




  0.04




  0.02




    0
         0   0.5     1         1.5         2           2.5      3   3.5   4




                      c2 =        1 0
                      σ 0            ε̂ ε̂
                                 n−K
                                  1 0
                          =          ε Mε
                                 n−K
                      c2 ) =      1
                   E (σ 0            E(Trε0 Mε)
                                 n−K
                                  1
                          =          E(TrMεε0)
                                 n−K
                                  1
                          =          TrEX Eε|X (Mεε0 )
                                 n−K
                                  1
                          =          σ20 EX TrM
                                 n−K
                                  1
                          =          σ2 (n − k)
                                 n−K 0
                          = σ20
                             3.8. EXAMPLE: THE NERLOVE MODEL                           47

where we use the fact that Tr(AB) = Tr(BA) when both products are conformable.
Thus, this estimator is also unbiased under these assumptions.




                             3.8. Example: The Nerlove model

    3.8.1. Theoretical background. For a firm that takes input prices w and the out-
put level q as given, the cost minimization problem is to choose the quantities of inputs
x to solve the problem


                                          min w0 x
                                           x

subject to the restriction


                                         f (x) = q.

The solution is the vector of factor demands x(w, q). The cost function is obtained by
substituting the factor demands into the criterion function:


                                    Cw, q) = w0 x(w, q).




       • Monotonicity Increasing factor prices cannot decrease cost, so

                                       ∂C(w, q)
                                                ≥0
                                         ∂w

         Remember that these derivatives give the conditional factor demands (Shep-
         hard’s Lemma).
       • Homogeneity The cost function is homogeneous of degree 1 in input prices:
         C(tw, q) = tC(w, q) where t is a scalar constant. This is because the factor
                               3.8. EXAMPLE: THE NERLOVE MODEL                               48

         demands are homogeneous of degree zero in factor prices - they only depend
         upon relative prices.
       • Returns to scale The returns to scale parameter γ is defined as the inverse of
         the elasticity of cost with respect to output:
                                                                     −1
                                              ∂C(w, q) q
                                    γ=
                                                ∂q C(w, q)

         Constant returns to scale is the case where increasing production q implies
         that cost increases in the proportion 1:1. If this is the case, then γ = 1.




    3.8.2. Cobb-Douglas functional form. The Cobb-Douglas functional form is lin-
ear in the logarithms of the regressors and the dependent variable. For a cost function,
if there are g factors, the Cobb-Douglas cost function has the form


                                                  β          β
                                      C = Aw1 1 ...wg g qβq eε

What is the elasticity of C with respect to w j ?
                                         
                                    ∂C         wj 
                   eCw j   =
                                    ∂WJ        C
                                          β    β −1      β                    wj
                           = β j Aw1 1 .w j j         ..wg g qβq eε              β
                                                                         β
                                                                      Aw1 1 ...wg g qβq eε
                           = βj


This is one of the reasons the Cobb-Douglas form is popular - the coefficients are easy
to interpret, since they are the elasticities of the dependent variable with respect to the
                           3.8. EXAMPLE: THE NERLOVE MODEL                               49

explanatory variable. Not that in this case,
                                                          
                                                     ∂C         wj 
                                 eCw j   =
                                                     ∂WJ        C
                                                            wj
                                         = x j (w, q)
                                                            C
                                         ≡ s j (w, q)


the cost share of the jth input. So with a Cobb-Douglas cost function, β j = s j (w, q).
The cost shares are constants.
   Note that after a logarithmic transformation we obtain


                    lnC = α + β1 ln w1 + ... + βg ln wg + βq ln q + ε


where α = ln A . So we see that the transformed model is linear in the logs of the data.
   One can verify that the property of HOD1 implies that
                                             g
                                          ∑ βg = 1
                                          i=1

In other words, the cost shares add up to 1.
   The hypothesis that the technology exhibits CRTS implies that

                                                 1
                                         γ=         =1
                                                 βq

so βq = 1. Likewise, monotonicity implies that the coefficients βi ≥ 0, i = 1, ..., g.




   3.8.3. The Nerlove data and OLS. The file nerlove.data contains data on 145
electric utility companies’ cost of production, output and input prices. The data are
for the U.S., and were collected by M. Nerlove. The observations are by row, and
the columns are COMPANY, COST (C), OUTPUT (Q), PRICE OF LABOR (PL ),
                               3.8. EXAMPLE: THE NERLOVE MODEL                          50

PRICE OF FUEL (PF ) and PRICE OF CAPITAL (PK ). Note that the data are sorted
by output level (the third column).
    We will estimate the Cobb-Douglas model


(3.8.1)             lnC = β1 + β2 ln Q + β3 ln PL + β4 ln PF + β5 ln PK + ε


using OLS. To do this yourself, you need the data file mentioned above, as well as
Nerlove.m (the estimation program) , and the library of Octave functions mentioned
in the introduction to Octave that forms section 22 of this document.3
    The results are

*********************************************************
OLS estimation results
Observations 145
R-squared 0.925955
Sigma-squared 0.153943

Results (Ordinary var-cov estimator)

                  estimate             st.err.           t-stat.            p-value
constant            -3.527               1.774            -1.987              0.049
output               0.720               0.017            41.244              0.000
labor                0.436               0.291             1.499              0.136
fuel                 0.427               0.100             4.249              0.000
capital             -0.220               0.339            -0.648              0.518

*********************************************************


          • Do the theoretical restrictions hold?
          • Does the model fit well?
          • What do you think about RTS?

While we will use Octave programs as examples in this document, since following the
programming statements is a useful way of learning how theory is put into practice,
3If you are running the bootable CD, you have all of this installed and ready to run.
                          3.8. EXAMPLE: THE NERLOVE MODEL                            51

you may be interested in a more ”user-friendly” environment for doing econometrics.
I heartily recommend Gretl, the Gnu Regression, Econometrics, and Time-Series Li-
brary. This is an easy to use program, available in English, French, and Spanish, and
it comes with a lot of data ready to use. It even has an option to save output as LATEX
fragments, so that I can just include the results into this document, no muss, no fuss.
Here the results of the Nerlove model from GRETL:




             Model 2: OLS estimates using the 145 observations 1–145
                              Dependent variable: l_cost

Variable        Coefficient              Std. Error            t-statistic    p-value

const              −3.5265                   1.77437            −1.9875       0.0488
l_output             0.720394                0.0174664           41.2445      0.0000
l_labor              0.436341                0.291048              1.4992     0.1361
l_fuel               0.426517                0.100369              4.2495     0.0000
l_capita           −0.219888                 0.339429           −0.6478       0.5182


                  Mean of dependent variable                1.72466
                  S.D. of dependent variable                1.42172
                  Sum of squared residuals                 21.5520
                  Standard error of residuals (σ̂)          0.392356
                  Unadjusted R2                             0.925955
                  Adjusted R̄2                              0.923840
                  F(4, 140)                              437.686
                  Akaike information criterion           145.084
                  Schwarz Bayesian criterion             159.967
                         3.8. EXAMPLE: THE NERLOVE MODEL                         52

Fortunately, Gretl and my OLS program agree upon the results. Gretl is included in
the bootable CD mentioned in the introduction. I recommend using GRETL to repeat
the examples that are done using Octave.
   The previous properties hold for finite sample sizes. Before considering the as-
ymptotic properties of the OLS estimator it is useful to review the MLE estimator,
since under the assumption of normal errors the two estimators coincide.
                                        EXERCISES                                       53

Exercises
(1) Prove that the split sample estimator used to generate figure 3.7.4 is unbiased.
(2) Calculate the OLS estimates of the Nerlove model using Octave and GRETL, and
    provide printouts of the results. Interpret the results.
(3) Do an analysis of whether or not there are influential observations for OLS esti-
    mation of the Nerlove model. Discuss.
(4) Using GRETL, examine the residuals after OLS estimation and tell me whether or
    not you believe that the assumption of independent identically distributed normal
    errors is warranted. No need to do formal tests, just look at the plots. Print out any
    that you think are relevant, and interpret them.
(5) For a random vector X ∼ N(µx , Σ), what is the distribution of AX + b, where A and
    b are conformable matrices of contants?
(6) Using Octave, write a little program that verifies that Tr(AB) = Tr(BA) for A and
    B 4x4 matrices of random numbers. Note: there is an Octave function trace.
(7) For the model with a constant and a single regressor, yt = β1 + β2 xt + εt , which
    satisfies the classical assumptions, prove that the variance of the OLS estimator
    declines to zero as the sample size increases.
                                       CHAPTER 4


                        Maximum likelihood estimation

   The maximum likelihood estimator is important since it is asymptotically efficient,
as is shown below. For the classical linear model with normal errors, the ML and OLS
estimators of β are the same, so the following theory is presented without examples. In
the second half of the course, nonlinear models with nonnormal errors are introduced,
and examples may be found there.



                             4.1. The likelihood function

    Suppose we have a sample of size n of the random vectors y and z. Suppose the
                                                        
joint density of Y = y1 . . . yn and Z = z1 . . . zn is characterized by a
parameter vector ψ0 :
                                        fY Z (Y, Z, ψ0 ).

This is the joint density of the sample. This density can be factored as


                         fY Z (Y, Z, ψ0 ) = fY |Z (Y |Z, θ0 ) fZ (Z, ρ0 )


   The likelihood function is just this density evaluated at other values ψ


                             L(Y, Z, ψ) = f (Y, Z, ψ), ψ ∈ Ψ,


where Ψ is a parameter space.
   The maximum likelihood estimator of ψ0 is the value of ψ that maximizes the
likelihood function.
                                               54
                                      4.1. THE LIKELIHOOD FUNCTION                                                    55

    Note that if θ0 and ρ0 share no elements, then the maximizer of the conditional
likelihood function fY |Z (Y |Z, θ) with respect to θ is the same as the maximizer of
the overall likelihood function fY Z (Y, Z, ψ) = fY |Z (Y |Z, θ) fZ (Z, ρ), for the elements
of ψ that correspond to θ. In this case, the variables Z are said to be exogenous for
estimation of θ, and we may more conveniently work with the conditional likelihood
function fY |Z (Y |Z, θ) for the purposes of estimating θ0 .



    D EFINITION 4.1.1. The maximum likelihood estimator of θ0 = arg max fY |Z (Y |Z, θ)



       • If the n observations are independent, the likelihood function can be written
          as
                                                              n
                                        L(Y |Z, θ) = ∏ f (yt |zt , θ)
                                                          t=1
          where the ft are possibly of different form.
       • If this is not possible, we can always factor the likelihood into contributions
          of observations, by using the fact that a joint density can be factored into the
          product of a marginal and conditional (doing this iteratively)


   L(Y, θ) = f (y1 |z1 , θ) f (y2 |y1 , z2 , θ) f (y3 |y1 , y2 , z3 , θ) · · · f (yn |y1, y2 , . . . yt−n , zn , θ)


To simplify notation, define


                                        xt = {y1 , y2 , ..., yt−1 , zt }


so x1 = z1 , x2 = {y1 , z2 }, etc. - it contains exogenous and predetermined endogeous
variables. Now the likelihood function can be written as
                                                          n
                                          L(Y, θ) = ∏ f (yt |xt , θ)
                                                        t=1
                             4.1. THE LIKELIHOOD FUNCTION                             56

The criterion function can be defined as the average log-likelihood function:

                               1            1 n
                       sn (θ) = ln L(Y, θ) = ∑ ln f (yt |xt , θ)
                               n            n t=1

The maximum likelihood estimator may thus be defined equivalently as


                                   θ̂ = arg max sn (θ),


where the set maximized over is defined below. Since ln(·) is a monotonic increasing
function, ln L and L maximize at the same value of θ. Dividing by n has no effect on θ̂.




      4.1.1. Example: Bernoulli trial. Suppose that we are flipping a coin that may
be biased, so that the probability of a heads may not be 0.5. Maybe we’re interested
in estimating the probability of a heads. Let y = 1(heads) be a binary variable that
indicates whether or not a heads is observed. The outcome of a toss is a Bernoulli
random variable:

                                         y
                        fY (y, p0 ) = p0 (1 − p0 )1−y , y ∈ {0, 1}

                                   = 0, y ∈
                                          / {0, 1}


So a representative term that enters the likelihood function is


                                fY (y, p) = py (1 − p)1−y


and
                         ln fY (y, p) = y ln p + (1 − y) ln (1 − p)
                             4.1. THE LIKELIHOOD FUNCTION                        57

The derivative of this is

                             ∂ ln fY (y, p)          y (1 − y)
                                            =          −
                                  ∂p                 p (1 − p)
                                                       y− p
                                            =
                                                     p (1 − p)

Averaging this over a sample of size n gives

                                ∂sn (p) 1 n yi − p
                                       = ∑
                                  ∂p    n i=1 p (1 − p)

Setting to zero and solving gives
                                           p̂ = ȳ

So it’s easy to calculate the MLE of p0 in this case.
     Now imagine that we had a bag full of bent coins, each bent around a sphere of
a different radius (with the head pointing to the outside of the sphere). We might
suspect that the probability of a heads could depend upon the radius. Suppose that
                                               h      i0
                                 −1
pi ≡ p(xi , β) = (1 + exp(−xi β)) where xi = 1 ri , so that β is a 2×1 vector.
                             0


Now
                                 ∂pi (β)
                                         = pi (1 − pi ) xi
                                  ∂β
so




                        ∂ ln fY (y, β)        y − pi
                                       =                pi (1 − pi ) xi
                             ∂β            pi (1 − pi )
                                      = (yi − p(xi , β)) xi
                                   4.2. CONSISTENCY OF MLE                             58

So the derivative of the average log lihelihood function is now

                            ∂sn (β) ∑ni=1 (yi − p(xi , β)) xi
                                   =
                              ∂β               n

This is a set of 2 nolinear equations in the two unknown elements in β. There is no
explicit solution for the two elements that set the equations to zero. This is common
with ML estimators, they are often nonlinear, and finding their values often require use
of numeric methods to find solutions to the first order conditions.


                               4.2. Consistency of MLE

   To show consistency of the MLE, we need to make explicit some assumptions.

      Compact parameter space: θ ∈ Θ, an open bounded subset of ℜK . Maximix-
         ation is over Θ, which is compact.

This implies that θ is an interior point of the parameter space Θ.

      Uniform convergence:

                           u.a.s
                     sn (θ) → lim Eθ0 sn (θ) ≡ s∞ (θ, θ0 ), ∀θ ∈ Θ.
                                   n→∞


We have suppressed Y here for simplicity. This requires that almost sure convergence
holds for all possible parameter values. For a given parameter value, an ordinary Law
of Large Numbers will usually imply almost sure convergence to the limit of the ex-
pectation. Convergence for a single element of the parameter space, combined with
the assumption of a compact parameter space, ensures uniform convergence.

      Continuity: sn (θ) is continuous in θ, θ ∈ Θ. This implies that s∞ (θ, θ0 ) is con-
         tinuous in θ.
      Identification: s∞ (θ, θ0 ) has a unique maximum in its first argument.
                                               a.s.
We will use these assumptions to show that θˆn → θ0 .
                                          4.2. CONSISTENCY OF MLE                          59

       First, θ̂n certainly exists, since a continuous function has a maximum on a compact
set.
       Second, for any θ 6= θ0
                                                    
                                 L(θ)              L(θ)
                            E ln           ≤ ln E
                                 L(θ0 )            L(θ0 )

by Jensen’s inequality ( ln (·) is a concave function).
       Now, the expectation on the RHS is
                                                
                                        L(θ)                 L(θ)
                                                         Z
                                E                    =              L(θ0 )dy = 1,
                                        L(θ0 )               L(θ0 )

since L(θ0 ) is the density function of the observations, and since the integral of any
density is 1. Therefore, since ln(1) = 0,
                                                    
                                               L(θ)
                                          E ln           ≤ 0,
                                               L(θ0 )

or
                                        E (sn (θ)) − E (sn (θ0 )) ≤ 0.

       Taking limits, this is
                                         s∞ (θ, θ0 ) − s∞ (θ0 , θ0 ) ≤ 0

except on a set of zero probability (by the uniform convergence assumption).
       By the identification assumption there is a unique maximizer, the inequality is strict
if θ 6= θ0 :
                            s∞ (θ, θ0 ) − s∞ (θ0 , θ0 ) < 0, ∀θ 6= θ0 , a.s.

       Suppose that θ∗ is a limit point of θˆn (any sequence from a compact set has at least
one limit point). Since θ̂n is a maximizer, independent of n, we must have
                                 4.3. THE SCORE FUNCTION                            60




                               s∞ (θ∗ , θ0 ) − s∞ (θ0 , θ0 ) ≥ 0.

These last two inequalities imply that


                                        θ∗ = θ0 , a.s.


Thus there is only one limit point, and it is equal to the true parameter value with
probability one. In other words,


                                      lim θ̂ = θ0 , a.s.
                                      n→∞


This completes the proof of strong consistency of the MLE. One can use weaker as-
sumptions to prove weak consistency (convergence in probability to θ 0 ) of the MLE.
This is omitted here. Note that almost sure convergence implies convergence in prob-
ability.




                                4.3. The score function

       Differentiability: Assume that sn (θ) is twice continuously differentiable in a
           neighborhood N(θ0 ) of θ0 , at least when n is large enough.


To maximize the log-likelihood function, take derivatives:


                           gn (Y, θ) = Dθ sn (θ)
                                            1 n
                                      =       ∑ Dθ ln f (yt |xx, θ)
                                            n t=1
                                        1 n
                                      ≡   ∑ gt (θ).
                                        n t=1
                                  4.3. THE SCORE FUNCTION                                    61

This is the score vector (with dim K × 1). Note that the score function has Y as an
argument, which implies that it is a random function. Y (and any exogeneous variables)
will often be suppressed for clarity, but one should not forget that they are still there.
    The ML estimator θ̂ sets the derivatives to zero:

                                              1 n
                                  gn (θ̂) =     ∑ gt (θ̂) ≡ 0.
                                              n t=1

    We will show that Eθ [gt (θ)] = 0, ∀t. This is the expectation taken with respect to
the density f (θ), not necessarily f (θ0 ) .
                                 Z
               Eθ [gt (θ)] =         [Dθ ln f (yt |xt , θ)] f (yt |x, θ)dyt
                                            1
                                 Z
                            =                        [Dθ f (yt |xt , θ)] f (yt |xt , θ)dyt
                                      f (yt |xt , θ)
                                 Z
                            =        Dθ f (yt |xt , θ)dyt .


Given some regularity conditions on boundedness of Dθ f , we can switch the order of
integration and differentiation, by the dominated convergence theorem. This gives
                                                     Z
                            Eθ [gt (θ)] = Dθ             f (yt |xt , θ)dyt

                                           = Dθ 1

                                           = 0


where we use the fact that the integral of the density is 1.




       • So Eθ (gt (θ) = 0 : the expectation of the score vector is zero.
       • This hold for all t, so it implies that Eθ gn (Y, θ) = 0.
                          4.4. ASYMPTOTIC NORMALITY OF MLE                             62

                         4.4. Asymptotic normality of MLE

   Recall that we assume that sn (θ) is twice continuously differentiable. Take a first
order Taylor’s series expansion of g(Y, θ̂) about the true value θ0 :

                                                                  
                      0 ≡ g(θ̂) = g(θ0 ) + (Dθ0 g(θ∗ )) θ̂ − θ0


or with appropriate definitions

                                             
                               H(θ∗ ) θ̂ − θ0 = −g(θ0 ),


where θ∗ = λθ̂ + (1 − λ)θ0 , 0 < λ < 1. Assume H(θ∗ ) is invertible (we’ll justify this
in a minute). So
                          √                    √
                           n θ̂ − θ0 = −H(θ∗ )−1 ng(θ0 )

   Now consider H(θ∗ ). This is


                             H(θ∗ ) = Dθ0 g(θ∗ )

                                      = D2θ sn (θ∗ )
                                           1 n 2
                                      =      ∑ Dθ ln ft (θ∗)
                                           n t=1

where the notation
                                                 ∂2 sn (θ)
                                  D2θ sn (θ) ≡             .
                                                  ∂θ∂θ0
Given that this is an average of terms, it should usually be the case that this satisfies
a strong law of large numbers (SLLN). Regularity conditions are a set of assumptions
that guarantee that this will happen. There are different sets of assumptions that can
be used to justify appeal to different SLLN’s. For example, the D2θ ln ft (θ∗ ) must not
be too strongly dependent over time, and their variances must not become infinite. We
                            4.4. ASYMPTOTIC NORMALITY OF MLE                            63

don’t assume any particular set here, since the appropriate assumptions will depend
upon the particularities of a given model. However, we assume that a SLLN applies.
   Also, since we know that θ̂ is consistent, and since θ∗ = λθ̂ + (1 − λ)θ0 , we have
          a.s.
that θ∗ → θ0 . Also, by the above differentiability assumtion, H(θ) is continuous in θ.
Given this, H(θ∗ ) converges to the limit of it’s expectation:

                             a.s.                
                      H(θ∗ ) → lim E D2θ sn (θ0 ) = H∞ (θ0 ) < ∞
                                    n→∞


This matrix converges to a finite limit.
   Re-arranging orders of limits and differentiation, which is legitimate given regu-
larity conditions, we get


                                H∞ (θ0 ) = D2θ lim E (sn (θ0 ))
                                                   n→∞

                                          = D2θ s∞ (θ0 , θ0 )


   We’ve already seen that


                                     s∞ (θ, θ0 ) < s∞ (θ0 , θ0 )


i.e., θ0 maximizes the limiting objective function. Since there is a unique maximizer,
and by the assumption that sn (θ) is twice continuously differentiable (which holds in
the limit), then H∞ (θ0 ) must be negative definite, and therefore of full rank. Therefore
the previous inversion is justified, asymptotically, and we have

                            √             a.s.        √
(4.4.1)                         n θ̂ − θ0 → −H∞ (θ0 )−1 ng(θ0 ).
                              4.4. ASYMPTOTIC NORMALITY OF MLE                           64
                   √
    Now consider       ng(θ0 ). This is

                           √            √
                            ngn (θ0 ) =   nDθ sn (θ)
                                        √ n
                                          n
                                      =     ∑ Dθ ln ft (yt |xt , θ0)
                                         n t=1
                                          1 n
                                       = √ ∑ gt (θ0 )
                                           n t=1

We’ve already seen that Eθ [gt (θ)] = 0. As such, it is reasonable to assume that a CLT
applies.
                       a.s.
   Note that gn (θ0 ) → 0, by consistency. To avoid this collapse to a degenerate r.v. (a
                                      √
constant vector) we need to scale by n. A generic CLT states that, for Xn a random
vector that satisfies certain conditions,

                                              d
                               Xn − E(Xn ) → N(0, limV (Xn ))


The “certain conditions” that Xn must satisfy depend on the case at hand. Usually, Xn
                                            √
will be of the form of an average, scaled by n:
                                                 n
                                              √ ∑t=1 Xt
                                      Xn =     n
                                                   n
                       √
This is the case for       ng(θ0 ) for example. Then the properties of Xn depend on the
properties of the Xt . For example, if the Xt have finite variances and are not too strongly
dependent, then a CLT for dependent processes will apply. Supposing that a CLT
                           √
applies, and noting that E( ngn (θ0 ) = 0, we get

                                          √          d
                              I∞ (θ0 )−1/2 ngn (θ0 ) → N [0, IK ]
                              4.4. ASYMPTOTIC NORMALITY OF MLE                                 65

where

                                                                            
                          I∞ (θ0 ) =     lim Eθ0 n [gn (θ0 )] [gn (θ0 )]0
                                         n→∞
                                                    √               
                                   =     lim Vθ0        ngn (θ0 )
                                         n→∞


This can also be written as

                                  √             d
(4.4.2)                               ngn (θ0 ) → N [0, I∞ (θ0 )]


          • I∞ (θ0 ) is known as the information matrix.
          • Combining [4.4.1] and [4.4.2], we get

                     √             a                                 
                         n θ̂ − θ0 ∼ N 0, H∞ (θ0 )−1 I∞ (θ0 )H∞ (θ0 )−1 .


            The MLE estimator is asymptotically normally distributed.

                                                                                √
   D EFINITION 1 (CAN). An estimator θ̂ of a parameter θ0 is                     n-consistent and
asymptotically normally distributed if

                                   √             d
(4.4.3)                                n θ̂ − θ0 → N (0,V∞ )


where V∞ is a finite positive definite matrix.

                                                                              √          p
    There do exist, in special cases, estimators that are consistent such that n θ̂ − θ0 →
                                                                         √
0. These are known as superconsistent estimators, since normally, n is the highest
factor that we can multiply by an still get convergence to a stable limiting distribution.

   D EFINITION 2 (Asymptotic unbiasedness). An estimator θ̂ of a parameter θ0 is
asymptotically unbiased if


(4.4.4)                                   lim Eθ (θ̂) = θ.
                                         n→∞
                            4.6. THE INFORMATION MATRIX EQUALITY                             66

     Estimators that are CAN are asymptotically unbiased, though not all consistent
estimators are asymptotically unbiased. Such cases are unusual, though. An example
is




     E XERCISE 4.5. Consider an estimator θ̂ with density

                                                    1 − n1 , θ̂ = θ0
                                    f (θ̂) =
                                                        1
                                                        n, θ̂ = n

Show that this estimator is consistent but asymptotically biased. Also ask yourself how
you could define an estimator that would have this density.




                         4.6. The information matrix equality

     We will show that H∞ (θ) = −I∞ (θ). Let ft (θ) be short for f (yt |xt , θ)
                                              Z
                               1 =                ft (θ)dy, so
                                              Z
                               0 =                Dθ ft (θ)dy
                                              Z
                                   =              (Dθ ln ft (θ)) ft (θ)dy


Now differentiate again:
                      Z                                  Z
              0 =         D2θ ln ft (θ)       ft (θ)dy +       [Dθ ln ft (θ)] Dθ0 ft (θ)dy
                       2           Z
                  = Eθ Dθ ln ft (θ) + [Dθ ln ft (θ)] [Dθ0 ln ft (θ)] ft (θ)dy
                                   
                  = Eθ D2θ ln ft (θ) + Eθ [Dθ ln ft (θ)] [Dθ0 ln ft (θ)]

(4.6.1)           = Eθ [Ht (θ)] + Eθ [gt (θ)] [gt (θ)]0
                           4.6. THE INFORMATION MATRIX EQUALITY                                67

Now sum over n and multiply by n1
                                                  "                        #
                              n                         n
                           1                    1
                      Eθ     ∑
                           n t=1
                                 [Ht (θ)] = −Eθ   ∑
                                                n t=1
                                                      [gt (θ)] [gt (θ)]0


The scores gt and gs are uncorrelated for t 6= s, since for t > s, ft (yt |y1 , ..., yt−1 , θ) has
conditioned on prior information, so what was random in s is fixed in t. (This forms the
basis for a specification test proposed by White: if the scores appear to be correlated
one may question the specification of the model). This allows us to write

                                                                     
                             Eθ [H(θ)] = −Eθ n [g(θ)][g(θ)]0


since all cross products between different periods expect to zero. Finally take limits,
we get


(4.6.2)                                 H∞ (θ) = −I∞ (θ).


This holds for all θ, in particular, for θ0 . Using this,

                    √             a.s.                               
                        n θ̂ − θ0 → N 0, H∞ (θ0 )−1 I∞ (θ0 )H∞ (θ0 )−1


simplifies to

                                  √          a.s.            
(4.6.3)                            n θ̂ − θ0 → N 0, I∞ (θ0 )−1


To estimate the asymptotic variance, we need estimators of H∞ (θ0 ) and I∞ (θ0 ). We
can use
                                                   n
                                    ∞ (θ0 ) = n ∑ gt (θ̂)gt (θ̂)
                                   I\                            0
                                                  t=1

                                   H\
                                    ∞ (θ0 ) = H(θ̂).
                           4.7. THE CRAMÉR-RAO LOWER BOUND                              68

Note, one can’t use
                                                         0
                               I\
                                ∞ (θ0 ) = n gn (θ̂) gn (θ̂)


to estimate the information matrix. Why not?
    From this we see that there are alternative ways to estimate V∞ (θ0 ) that are all
valid. These include

                                                    −1
                         V\          \
                          ∞ (θ0 ) = −H∞ (θ0 )
                                               −1
                         V\         \
                          ∞ (θ0 ) = I∞ (θ0 )
                                                   −1             −1
                         V\         \        \ \
                          ∞ (θ0 ) = H∞ (θ0 ) I∞ (θ0 )H∞ (θ0 )


These are known as the inverse Hessian, outer product of the gradient (OPG) and
sandwich estimators, respectively. The sandwich form is the most robust, since it
coincides with the covariance estimator of the quasi-ML estimator.



                          4.7. The Cramér-Rao lower bound

    T HEOREM 3. [Cramer-Rao Lower Bound] The limiting variance of a CAN estima-
tor of θ0 , say θ̃, minus the inverse of the information matrix is a positive semidefinite
matrix.


    Proof: Since the estimator is CAN, it is asymptotically unbiased, so


                                    lim Eθ (θ̃ − θ) = 0
                                   n→∞


Differentiate wrt θ0 :
                                               Z                     
              Dθ0 lim Eθ (θ̃ − θ) =      lim       Dθ0 f (Y, θ) θ̃ − θ dy
                  n→∞                   n→∞

                                   = 0 (this is a K × K matrix of zeros).
                                4.7. THE CRAMÉR-RAO LOWER BOUND                                     69

Noting that Dθ0 f (Y, θ) = f (θ)Dθ0 ln f (θ), we can write
                 Z                                               Z                     
          lim        θ̃ − θ f (θ)Dθ0 ln f (θ)dy + lim                 f (Y, θ)Dθ0 θ̃ − θ dy = 0.
          n→∞                                               n→∞

                        
Now note that Dθ0 θ̃ − θ = −IK , and f (Y, θ)(−IK )dy = −IK . With this we have
                                    R

                                     Z         
                               lim       θ̃ − θ f (θ)Dθ0 ln f (θ)dy = IK .
                               n→∞


Playing with powers of n we get
                           Z
                               √                 √ 1
                     lim           n θ̃ − θ        n [Dθ0 ln f (θ)] f (θ)dy = IK
                     n→∞
                                                    |n   {z       }

Note that the bracketed part is just the transpose of the score vector, g(θ), so we can
write
                                             √              √      
                                lim Eθ            n θ̃ − θ     ng(θ)0 = IK
                                n→∞
                                                           √         
This means that the covariance of the score function with    n θ̃ − θ , for θ̃ any CAN
                                                                      √          
estimator, is an identity matrix. Using this, suppose the variance of n θ̃ − θ tends
to V∞ (θ̃). Therefore,
                                √                             
                                     n θ̃ − θ       V (θ̃)   IK
(4.7.1)                    V∞                  = ∞             .
                                     √
                                      ng(θ)          IK    I∞ (θ)

Since this is a covariance matrix, it is positive semi-definite. Therefore, for any K
-vector α,
                                                                                        
             h                           i       V∞ (θ̃)     IK                  α
                 α0 −α0 I∞−1 (θ)                                                         ≥ 0.
                                                   IK      I∞ (θ)          −I∞   (θ)−1 α

This simplifies to
                                                           
                                      α0 V∞ (θ̃) − I∞−1 (θ) α ≥ 0.
                              4.7. THE CRAMÉR-RAO LOWER BOUND                                 70

Since α is arbitrary, V∞ (θ̃) − I∞ (θ) is positive semidefinite. This conludes the proof.
    This means that I∞−1 (θ) is a lower bound for the asymptotic variance of a CAN
estimator.

    D EFINITION 4.7.1. (Asymptotic efficiency) Given two CAN estimators of a param-
eter θ0 , say θ̃ and θ̂, θ̂ is asymptotically efficient with respect to θ̃ if V∞ (θ̃) −V∞ (θ̂) is
a positive semidefinite matrix.

    A direct proof of asymptotic efficiency of an estimator is infeasible, but if one can
show that the asymptotic variance is equal to the inverse of the information matrix,
then the estimator is asymptotically efficient. In particular, the MLE is asymptotically
efficient.
    Summary of MLE

       • Consistent
       • Asymptotically normal (CAN)
       • Asymptotically efficient
       • Asymptotically unbiased
       • This is for general MLE: we haven’t specified the distribution or the lineari-
             ty/nonlinearity of the estimator
                                         EXERCISES                                  71

Exercises
(1) Consider coin tossing with a single possibly biased coin. The density function for
   the random variable y = 1(heads) is

                                          y
                       fY (y, p0 ) = p0 (1 − p0 )1−y , y ∈ {0, 1}

                                  = 0, y ∈
                                         / {0, 1}


   Suppose that we have a sample of size n. We know from above that the ML esti-
   mator is pb0 = ȳ. We also know from the theory above that

                  √             a                                   
                   n (ȳ − p0 ) ∼ N 0, H∞ (p0 )−1 I∞ (p0 )H∞ (p0 )−1


   a) find the analytical expressions for H∞ (p0 ) and I∞ (p0 ) for this problem
                                                                                √
   b) Write an Octave program that does a Monte Carlo study that shows that n (ȳ − p0 )
   is approximately normally distributed when n is large. Please give me histograms
                                       √
   that show the sampling frequency of n (ȳ − p0 ) for several values of n.
(2) Consider the model yt = xt0 β + αεt where the errors follow the Cauchy (Student-t
   with 1 degree of freedom) density. So

                                          1
                          f (εt ) =              , −∞ < εt < ∞
                                      π 1 + εt2

   The Cauchy density has a shape similar to a normal density, but with much thicker
   tails. Thus, extremely small and large errors occur much more frequently with this
   density than would happen if the errors were normally distributed. Find the score
                                     0
   function gn (θ) where θ = β0 α .
(3) Consider the model classical linear regression model yt = xt0 β + εt where εt ∼
                                                              0
    IIN(0, σ2). Find the score function gn (θ) where θ = β0 σ .
                                      EXERCISES                                     72

(4) Compare the first order conditional that define the ML estimators of problems 2
   and 3 and interpret the differences. Why are the first order conditions that define
   an efficient estimator different in the two cases?
                                       CHAPTER 5


          Asymptotic properties of the least squares estimator

   The OLS estimator under the classical assumptions is unbiased and BLUE, for all
sample sizes. Now let’s see what happens when the sample size tends to infinity.




                                      5.1. Consistency




                              β̂ = (X 0 X )−1 X 0 y

                                   = (X 0 X )−1 X 0 (X β + ε)

                                   = β0 + (X 0 X )−1 X 0 ε
                                           0 −1 0
                                            XX           Xε
                                   = β0 +
                                               n           n
                                                                0                     0 −1
                                                                XX                      XX
Consider the last two terms. By assumption limn→∞                n     = QX ⇒ limn→∞     n       =
Q−1
 X , since the inverse of a nonsingular matrix is a continuous function of the elements

of the matrix. Considering Xnε ,
                             0




                                       X 0ε 1 n
                                           = ∑ xt εt
                                        n   n t=1

Each xt εt has expectation zero, so
                                                     
                                               X 0ε
                                       E                  =0
                                                n
                                                 73
                                    5.2. ASYMPTOTIC NORMALITY                                            74

The variance of each term is


                                        V (xt εt ) = xt xt0 σ2 .


As long as these are finite, and given a technical condition1, the Kolmogorov SLLN
applies, so
                                             1 n       a.s.
                                               ∑ xt εt → 0.
                                             n t=1
This implies that
                                                   a.s.
                                                β̂ → β0 .

This is the property of strong consistency: the estimator converges in almost surely to
the true value.

        • The consistency proof does not use the normality assumption.
        • Remember that almost sure convergence implies convergence in probability.


                                    5.2. Asymptotic normality

    We’ve seen that the OLS estimator is normally distributed under the assumption
of normal errors. If the error distribution is unknown, we of course don’t know the
distribution of the estimator. However, we can get asymptotic results. Assuming the
distribution of ε is unknown, but the the other classical assumptions hold:



                                             β̂ = β0 + (X 0 X )−1 X 0 ε

                                    β̂ − β0 = (X 0 X )−1 X 0 ε
                                               0 −1 0
                               √              XX           Xε
                                n β̂ − β0 =                  √
                                                   n           n
1For application of LLN’s and CLT’s, of which there are very many to choose from, I’m going to avoid
the technicalities. Basically, as long as terms of an average have finite variances and are not too strongly
dependent, one will be able to find a LLN or CLT to apply.
                                 5.3. ASYMPTOTIC EFFICIENCY                         75
                            0 −1
                            XX
      • Now as before,       n           → Q−1
                                            X .

      • Considering X√nε , the limit of the variance is
                       0



                                                                           
                                       X 0ε                       X 0 εε0 X
                           lim V       √          = lim E
                           n→∞            n             n→∞           n
                                                  = σ20 QX


         The mean is of course zero. To get asymptotic normality, we need to apply a
         CLT. We assume one (for instance, the Lindeberg-Feller CLT) holds, so

                                       X 0ε d          
                                       √ → N 0, σ20 QX
                                          n

         Therefore,
                             √        
                                         d
                                           
                                                2 −1
                                                     
                              n β̂ − β0 → N 0, σ0 QX

      • In summary, the OLS estimator is normally distributed in small and large
         samples if ε is normally distributed. If ε is not normally distributed, β̂ is
         asymptotically normally distributed when a CLT can be applied.




                                 5.3. Asymptotic efficiency

   The least squares objective function is


                                                   n              2
                                   s(β) =         ∑ yt − xt0 β
                                                  t=1

Supposing that ε is normally distributed, the model is


                                              y = X β0 + ε,
                                  5.3. ASYMPTOTIC EFFICIENCY                             76

                                ε ∼ N(0, σ20 In ), so
                                            n                  
                                                1    ε2
                             f (ε) = ∏ √       exp − t 2
                                     t=1 2πσ
                                             2      2σ

The joint density for y can be constructed using a change of variables. We have ε =
            ∂ε              ∂ε
y − X β, so ∂y 0 = In and | ∂y0 | = 1, so


                                    n                          
                                            1     (yt − xt0 β)2
                          f (y) = ∏ √       exp −                 .
                                  t=1 2πσ
                                          2           2σ2

Taking logs,
                                            √             (yt − xt0 β)2
                                                            n
                     ln L(β, σ) = −n ln 2π − n ln σ − ∑                 .
                                                      t=1     2σ2
It’s clear that the fonc for the MLE of β0 are the same as the fonc for OLS (up to multi-
plication by a constant), so the estimators are the same, under the present assumptions.
Therefore, their properties are the same. In particular, under the classical assumptions
with normality, the OLS estimator β̂ is asymptotically efficient.
    As we’ll see later, it will be possible to use (iterated) linear estimation methods and
still achieve asymptotic efficiency even if the assumption that Var(ε) 6= σ 2 In , as long
as ε is still normally distributed. This is not the case if ε is nonnormal. In general with
nonnormal errors it will be necessary to use nonlinear estimation methods to achieve
asymptotically efficient estimation.
                                      CHAPTER 6


                       Restrictions and hypothesis tests

                             6.1. Exact linear restrictions

     In many cases, economic theory suggests restrictions on the parameters of a model.
For example, a demand function is supposed to be homogeneous of degree zero in
prices and income. If we have a Cobb-Douglas (log-linear) model,


                       ln q = β0 + β1 ln p1 + β2 ln p2 + β3 ln m + ε,


then we need that


                    k0 ln q = β0 + β1 ln kp1 + β2 ln kp2 + β3 ln km + ε,


so


 β1 ln p1 + β2 ln p2 + β3 ln m = β1 ln kp1 + β2 ln kp2 + β3 ln km

                                = (ln k) (β1 + β2 + β3 ) + β1 ln p1 + β2 ln p2 + β3 ln m.


The only way to guarantee this for arbitrary k is to set


                                    β1 + β2 + β3 = 0,


which is a parameter restriction. In particular, this is a linear equality restriction,
which is probably the most commonly encountered case.




                                             77
                               6.1. EXACT LINEAR RESTRICTIONS                           78

      6.1.1. Imposition. The general formulation of linear equality restrictions is the
model


                                                y = Xβ + ε

                                            Rβ = r


where R is a Q × K matrix, Q < K and r is a Q × 1 vector of constants.

        • We assume R is of rank Q, so that there are no redundant restrictions.
        • We also assume that ∃β that satisfies the restrictions: they aren’t infeasible.

Let’s consider how to estimate β subject to the restrictions Rβ = r. The most obvious
approach is to set up the Lagrangean

                                        1
                     min s(β) =           (y − X β)0 (y − X β) + 2λ0 (Rβ − r).
                      β                 n

The Lagrange multipliers are scaled by 2, which makes things less messy. The fonc
are


                      Dβ s(β̂, λ̂) = −2X 0 y + 2X 0 X β̂R + 2R0 λ̂ ≡ 0

                      Dλ s(β̂, λ̂) = Rβ̂R − r ≡ 0,


which can be written as
                                                                          
                               X 0X        R0        β̂R              X 0y
                                                        =                 .
                                    R      0         λ̂                r

We get
                                                           −1             
                              β̂R               X 0 X R0               X 0y
                                   =                                      .
                               λ̂                R        0                r
For the masochists: Stepwise Inversion
                                  6.1. EXACT LINEAR RESTRICTIONS                                     79

      Note that
                                                      
                  (X 0 X )−1     0         X 0 X R0
                                                       ≡ AB
               −R (X 0 X )−1     IQ         R       0
                                                                                                
                                                                       IK        (X 0 X )−1 R0
                                                              =                                 
                                                                       0     −R (X 0 X )−1 R0
                                                                                            
                                                                       IK    (X 0 X )−1 R0
                                                              ≡                             
                                                                       0           −P
                                                              ≡ C,


and
                                                                          
                      IK   (X 0 X )−1 R0 P−1        IK       (X 0 X )−1 R0
                                                                           ≡ DC
                      0         −P−1                0            −P
                                                                                  = IK+Q ,


so


         DAB = IK+Q

           DA = B−1
                                                               
                                                          −1
                  IK (X X ) R P
                           0  −1   0  −1         (X X )
                                                    0           0
          B−1 =                                                
                                                            −1
                   0         −P −1             −R (X X )0      IQ
                                                                              
                  (X 0 X )−1 − (X 0 X )−1 R0 P−1 R (X 0 X )−1 (X 0X )−1 R0 P−1
              =                                                               ,
                                −1       0    −1                      −1
                              P R (X X )                           −P
                                 6.1. EXACT LINEAR RESTRICTIONS                                          80

so (everyone should start paying attention again)
                                                                                                
     β̂R               (X 0 X )−1 − (X 0 X )−1 R0 P−1 R (X 0 X )−1   (X 0 X )−1 R0 P−1        X 0y
           =                                                                                    
      λ̂                            P−1 R (X 0 X )−1                      −P−1                 r
                                                        
                  β̂ − (X 0 X )−1 R0 P−1 Rβ̂ − r
                                                      
               =                                   
                             P−1 Rβ̂ − r
                                                                        
                     IK − (X 0 X )−1 R0 P−1 R            (X 0X )−1 R0 P−1 r
               =                                β̂ +                     
                              P R
                                −1                            −P r
                                                                 −1



The fact that β̂R and λ̂ are linear functions of β̂ makes it easy to determine their dis-
tributions, since the distribution of β̂ is already known. Recall that for x a random
vector, and for A and b a matrix and vector of constants, respectively, Var (Ax + b) =
AVar(x)A0.
     Though this is the obvious way to go about finding the restricted estimator, an
easier way, if the number of restrictions is small, is to impose them by substitution.
Write


                                                    y = X1 β1 + X2 β2 + ε
                                                   
                          h            i       β1
                              R1 R2                 = r
                                               β2

where R1 is Q × Q nonsingular. Supposing the Q restrictions are linearly independent,
one can always make R1 nonsingular by reorganizing the columns of X . Then


                                            1 r − R 1 R 2 β2 .
                                      β1 = R−1      −1
                              6.1. EXACT LINEAR RESTRICTIONS                              81

Substitute this into the model


                                      1 r − X1 R1 R2 β2 + X2 β2 + ε
                              y = X1 R−1        −1

                                  h              i
                   y − X1 R1 r = X2 − X1 R1 R2 β2 + ε
                           −1               −1



or with the appropriate definitions,


                                          yR = XR β2 + ε.


This model satisfies the classical assumptions, supposing the restriction is true. One
can estimate by OLS. The variance of β̂2 is as before

                                                          −1
                                     V (β̂2 ) = XR0 XR            σ20


and the estimator is
                                                          −1
                                     V̂ (β̂2 ) = XR0 XR           σ̂2

where one estimates σ20 in the normal way, using the restricted model, i.e.,
                                                      0                  
                                         yR − XR βb2          yR − XR βb2
                              c2 =
                              σ 0
                                               n − (K − Q)

To recover β̂1 , use the restriction. To find the variance of β̂1 , use the fact that it is a
linear function of β̂2 , so
                                                               0
                        V (β̂1 ) = R−1
                                    1  R 2 V ( β̂ 2 )R 0
                                                       2   R −1
                                                             1
                                                     −1 0  −1 0 2
                                 = R−1
                                    1  R 2   X  0
                                               2 2X       R2 R1    σ0
                              6.1. EXACT LINEAR RESTRICTIONS                                  82

   6.1.2. Properties of the restricted estimator. We have that
                                                
    β̂R = β̂ − (X X ) R P
                     0   −1 0 −1
                                       Rβ̂ − r

         = β̂ + (X 0 X )−1 R0 P−1 r − (X 0X )−1 R0 P−1 R(X 0X )−1 X 0 y

         = β + (X 0X )−1 X 0ε + (X 0 X )−1 R0 P−1 [r − Rβ] − (X 0 X )−1 R0 P−1 R(X 0 X )−1 X 0 ε

β̂R − β = (X 0X )−1 X 0 ε

         + (X 0X )−1 R0 P−1 [r − Rβ]

         − (X 0X )−1 R0 P−1 R(X 0X )−1 X 0 ε


Mean squared error is


                             MSE(β̂R ) = E (β̂R − β)(β̂R − β)0


Noting that the crosses between the second term and the other terms expect to zero,
and that the cross of the first and third has a cancellation with the square of the third,
we obtain


            MSE(β̂R ) = (X 0 X )−1 σ2

                         + (X 0 X )−1 R0 P−1 [r − Rβ] [r − Rβ]0 P−1 R(X 0 X )−1

                         − (X 0 X )−1 R0 P−1 R(X 0X )−1 σ2


So, the first term is the OLS covariance. The second term is PSD, and the third term is
NSD.

       • If the restriction is true, the second term is 0, so we are better off. True
         restrictions improve efficiency of estimation.
       • If the restriction is false, we may be better or worse off, in terms of MSE,
         depending on the magnitudes of r − Rβ and σ2 .
                                       6.2. TESTING                                 83

                                       6.2. Testing

     In many cases, one wishes to test economic theories. If theory suggests parame-
ter restrictions, as in the above homogeneity example, one can test theory by testing
parameter restrictions. A number of tests are available.

     6.2.1. t-test. Suppose one has the model


                                       y = Xβ + ε

and one wishes to test the single restriction H0 :Rβ = r vs. HA :Rβ 6= r . Under H0 ,
with normality of the errors,

                                                                
                             Rβ̂ − r ∼ N 0, R(X 0X )−1 R0 σ20


so
                      Rβ̂ − r             Rβ̂ − r
                   q                  = p              ∼ N (0, 1) .
                    R(X 0 X )−1 R0 σ20 σ0 R(X X ) R
                                              0   −1 0


                                                                           c2 in place
The problem is that σ20 is unknown. One could use the consistent estimator σ 0

of σ20 , but the test would only be valid asymptotically in this case.

     P ROPOSITION 4.

                                      N(0, 1)
(6.2.1)                               q 2 ∼ t(q)
                                         χ (q)
                                           q


as long as the N(0, 1) and the χ2 (q) are independent.

     We need a few results on the χ2 distribution.

     P ROPOSITION 5. If x ∼ N(µ, In ) is a vector of n independent r.v.’s., then


(6.2.2)                               x0 x ∼ χ2 (n, λ)
                                         6.2. TESTING                                   84

where λ = ∑i µ2i = µ0 µ is the noncentrality parameter.

      When a χ2 r.v. has the noncentrality parameter equal to zero, it is referred to as a
central χ2 r.v., and it’s distribution is written as χ2 (n), suppressing the noncentrality
parameter.

      P ROPOSITION 6. If the n dimensional random vector x ∼ N(0,V ), then x 0V −1 x ∼
χ2 (n).

      We’ll prove this one as an indication of how the following unproven propositions
could be proved.
      Proof: Factor V −1 as PP0 (this is the Cholesky factorization). Then consider y =
P0 x. We have
                                      y ∼ N(0, P0V P)

but


                                        V PP0 = In

                                      P0V PP0 = P0


so PV P0 = In and thus y ∼ N(0, In ). Thus y0 y ∼ χ2 (n) but


                                   y0 y = x0 PP0 x = xV −1 x


and we get the result we wanted.
      A more general proposition which implies this result is

      P ROPOSITION 7. If the n dimensional random vector x ∼ N(0,V ), then


(6.2.3)                               x0 Bx ∼ χ2 (ρ(B))


if and only if BV is idempotent.
                                            6.2. TESTING                             85

     An immediate consequence is




     P ROPOSITION 8. If the random vector (of dimension n) x ∼ N(0, I), and B is idem-
potent with rank r, then


(6.2.4)                                 x0 Bx ∼ χ2 (r).


     Consider the random variable

                                ε̂0 ε̂   ε 0 MX ε
                                       =
                                σ20          σ20
                                          0         
                                             ε        ε
                                       =          MX
                                             σ0       σ0
                                      ∼ χ2 (n − K)


     P ROPOSITION 9. If the random vector (of dimension n) x ∼ N(0, I), then Ax and
x0 Bx are independent if AB = 0.




     Now consider (remember that we have only one restriction in this case)


                               √ Rβ̂−r
                             σ0 R(X 0 X)−1 R0         Rβ̂ − r
                               q 0            =     p
                                    ε̂ ε̂         σ
                                                  c0 R(X 0 X )−1 R0
                                 (n−K)σ20

This will have the t(n − K) distribution if β̂ and ε̂0 ε̂ are independent. But β̂ = β +
(X 0 X )−1 X 0 ε and
                                     (X 0 X )−1 X 0 MX = 0,

so
                               Rβ̂ − r        Rβ̂ − r
                             p              =         ∼ t(n − K)
                           σ
                           c0 R(X 0X )−1 R0    σ̂Rβ̂
                                                   6.2. TESTING                                     86

In particular, for the commonly encountered test of significance of an individual coef-
ficient, for which H0 : βi = 0 vs. H0 : βi 6= 0 , the test statistic is

                                                  β̂i
                                                       ∼ t(n − K)
                                                 σ̂β̂i

          • Note: the t− test is strictly valid only if the errors are actually normally
            distributed. If one has nonnormal errors, one could use the above asymptotic
            result to justify taking critical values from the N(0, 1) distribution, since t(n −
                d
            K) → N(0, 1) as n → ∞. In practice, a conservative procedure is to take critical
            values from the t distribution if nonnormality is suspected. This will reject
            H0 less often since the t distribution is fatter-tailed than is the normal.


    6.2.2. F test. The F test allows testing multiple restrictions jointly.


    P ROPOSITION 10. If x ∼ χ2 (r) and y ∼ χ2 (s), then

                                                  x/r
(6.2.5)                                               ∼ F(r, s)
                                                  y/s

provided that x and y are independent.


    P ROPOSITION 11. If the random vector (of dimension n) x ∼ N(0, I), then x 0 Ax
and x0 Bx are independent if AB = 0.


    Using these results, and previous results on the χ2 distribution, it is simple to show
that the following statistic has the F distribution:

                                   0                      −1              
                          Rβ̂ − r          R (X 0 X )−1 R0           Rβ̂ − r
                F=                                                                 ∼ F(q, n − K).
                                                 qσ̂2
A numerically equivalent expression is
                                                6.2. TESTING                           87



                              (ESSR − ESSU ) /q
                                                ∼ F(q, n − K).
                                ESSU /(n − K)
       • Note: The F test is strictly valid only if the errors are truly normally dis-
          tributed. The following tests will be appropriate when one cannot assume
          normally distributed errors.

    6.2.3. Wald-type tests. The Wald principle is based on the idea that if a restriction
is true, the unrestricted model should “approximately” satisfy the restriction. Given
that the least squares estimator is asymptotically normally distributed:

                                   √        
                                               d
                                                            
                                    n β̂ − β0 → N 0, σ20 Q−1
                                                          X


then under H0 : Rβ0 = r, we have

                              √        
                                          d
                                            
                                                 2
                                                          
                               n Rβ̂ − r → N 0, σ0 RQX R
                                                     −1 0



so by Proposition [6]
                                    0                  −1          
                                                                            d
                     n Rβ̂ − r              σ20 RQ−1
                                                  X R
                                                      0
                                                                  Rβ̂ − r → χ2 (q)

                 2
           X or σ0 are not observable. The test statistic we use substitutes the con-
Note that Q−1
sistent estimators. Use (X 0 X /n)−1 as the consistent estimator of Q−1
                                                                     X . With this, there

is a cancellation of n0 s, and the statistic to use is
                                 0                              
                        Rβ̂ − r          c2 R(X 0 X )−1 R0 −1 Rβ̂ − r →
                                         σ
                                                                       d 2
                                                                         χ (q)
                                           0


       • The Wald test is a simple way to test restrictions without having to estimate
          the restricted model.
       • Note that this formula is similar to one of the formulae provided for the F
          test.
                                        6.2. TESTING                                 88

     6.2.4. Score-type tests (Rao tests, Lagrange multiplier tests). In some cases,
an unrestricted model may be nonlinear in the parameters, but the model is linear in
the parameters under the null hypothesis. For example, the model


                                      y = (X β)γ + ε


is nonlinear in β and γ, but is linear in β under H0 : γ = 1. Estimation of nonlinear
models is a bit more complicated, so one might prefer to have a test based upon the
restricted, linear model. The score test is useful in this situation.


       • Score-type tests are based upon the general principle that the gradient vec-
         tor of the unrestricted model, evaluated at the restricted estimate, should be
         asymptotically normally distributed with mean zero, if the restrictions are
         true. The original development was for ML estimation, but the principle is
         valid for a wide variety of estimation methods.


We have seen that

                                                 −1          
                           λ̂ =   R(X 0X )−1 R0        Rβ̂ − r
                                               
                               = P −1
                                        Rβ̂ − r


Given that
                           √        
                                       d
                                         
                                              2
                                                       
                            n Rβ̂ − r → N 0, σ0 RQX R
                                                  −1 0


under the null hypothesis,

                           √                              
                                d
                            nλ̂ → N 0, σ20 P−1 RQ−1
                                                 X  R 0 −1
                                                       P


or
                       √                                       
                            d
                        nλ̂ → N 0, σ20 lim n (nP)−1 RQ−1
                                                      X  R 0 −1
                                                            P
                                                  6.2. TESTING                           89

since the n’s cancel and inserting the limit of a matrix of constants changes nothing.
    However,


                             lim nP = lim nR(X 0X )−1 R0
                                             0 −1
                                             XX
                                    = lim R            R0
                                              n
                                               = RQ−1
                                                   X R
                                                       0



So there is a cancellation and we get


                                   √          d                         
                                       nλ̂ → N 0, σ20 lim nP−1

In this case,
                                                         
                                           R(X 0 X )−1 R0      d
                              λ̂   0
                                                  2
                                                            λ̂ → χ2 (q)
                                                 σ0
since the powers of n cancel. To get a usable test statistic substitute a consistent esti-
mator of σ20 .




       • This makes it clear why the test is sometimes referred to as a Lagrange mul-
          tiplier test. It may seem that one needs the actual Lagrange multipliers to
          calculate this. If we impose the restrictions by substitution, these are not
          available. Note that the test can be written as
                               0
                                R0 λ̂ (X 0X )−1 R0 λ̂ d
                                          2
                                                      → χ2 (q)
                                        σ0

          However, we can use the fonc for the restricted estimator:


                                           −X 0 y + X 0 X β̂R + R0 λ̂
                                             6.2. TESTING                               90

          to get that


                                    R0 λ̂ = X 0 (y − X β̂R)

                                             = X 0 ε̂R


          Substituting this into the above, we get

                                ε̂0R X (X 0X )−1 X 0 ε̂R d 2
                                                         → χ (q)
                                           σ20

          but this is simply
                                             PX     d
                                      ε̂0R    2
                                                ε̂R → χ2 (q).
                                             σ0
To see why the test is also known as a score test, note that the fonc for restricted least
squares
                                    −X 0 y + X 0 X β̂R + R0 λ̂

give us
                                     R0 λ̂ = X 0 y − X 0 X β̂R

and the rhs is simply the gradient (score) of the unrestricted model, evaluated at the
restricted estimator. The scores evaluated at the unrestricted estimate are identically
zero. The logic behind the score test is that the scores evaluated at the restricted esti-
mate should be approximately zero, if the restriction is true. The test is also known as
a Rao test, since P. Rao first proposed it in 1948.

    6.2.5. Likelihood ratio-type tests. The Wald test can be calculated using the un-
restricted model. The score test can be calculated using only the restricted model. The
likelihood ratio test, on the other hand, uses both the restricted and the unrestricted
estimators. The test statistic is

                                                                 
                                LR = 2 ln L(θ̂) − ln L(θ̃)
                                           6.2. TESTING                                    91

where θ̂ is the unrestricted estimate and θ̃ is the restricted estimate. To show that it is
asymptotically χ2 , take a second order Taylor’s series expansion of ln L(θ̃) about θ̂ :

                                               n        0             
                      ln L(θ̃) ≃ ln L(θ̂) +      θ̃ − θ̂ H(θ̂) θ̃ − θ̂
                                               2

(note, the first order term drops out since Dθ ln L(θ̂) ≡ 0 by the fonc and we need to
multiply the second-order term by n since H(θ) is defined in terms of n1 ln L(θ)) so

                                            0             
                             LR ≃ −n θ̃ − θ̂ H(θ̂) θ̃ − θ̂


As n → ∞, H(θ̂) → H∞ (θ0 ) = −I (θ0 ), by the information matrix equality. So

                                    a          0                
                                 LR = n θ̃ − θ̂ I∞ (θ0 ) θ̃ − θ̂


We also have that, from [??] that

                             √             a
                                 n θ̂ − θ0 = I∞ (θ0 )−1 n1/2 g(θ0 ).


An analogous result for the restricted estimator is (this is unproven here, to prove
this set up the Lagrangean for MLE subject to Rβ = r, and manipulate the first order
conditions) :

      √          a                                 −1            
       n θ̃ − θ0 = I∞ (θ0 )−1 In − R0 RI∞ (θ0 )−1 R0     RI∞ (θ0 )−1 n1/2 g(θ0 ).


Combining the last two equations

          √          a                                   −1
           n θ̃ − θ̂ = −n1/2 I∞ (θ0 )−1 R0 RI∞ (θ0 )−1 R0     RI∞ (θ0 )−1 g(θ0 )


so, substituting into [??]
            h                         i              −1 h                         i
          a
       LR = n1/2 g(θ0 )0 I∞ (θ0 )−1 R0 RI∞ (θ0 )−1 R0       RI∞ (θ0 )−1 n1/2 g(θ0 )
           6.3. THE ASYMPTOTIC EQUIVALENCE OF THE LR, WALD AND SCORE TESTS              92

But since
                                            d
                                n1/2 g(θ0 ) → N (0, I∞ (θ0 ))

the linear function

                                                d
                      RI∞ (θ0 )−1 n1/2 g(θ0 ) → N(0, RI∞ (θ0 )−1 R0 ).


We can see that LR is a quadratic form of this rv, with the inverse of its variance in the
middle, so
                                            d
                                       LR → χ2 (q).




          6.3. The asymptotic equivalence of the LR, Wald and score tests

      We have seen that the three tests all converge to χ2 random variables. In fact,
they all converge to the same χ2 rv, under the null hypothesis. We’ll show that the
Wald and LR tests are asymptotically equivalent. We have seen that the Wald test is
asymptotically equivalent to
                               0               −1           
                    a                                              d
                  W = n Rβ̂ − r      σ20 RQ−1
                                           X  R 0
                                                        R β̂ − r   → χ2 (q)


Using
                                  β̂ − β0 = (X 0 X )−1 X 0ε

and
                                   Rβ̂ − r = R(β̂ − β0 )

we get

                        √               √
                         nR(β̂ − β0 ) =   nR(X 0 X )−1 X 0 ε
                                           0 −1
                                           XX
                                      = R             n−1/2 X 0 ε
                                             n
         6.3. THE ASYMPTOTIC EQUIVALENCE OF THE LR, WALD AND SCORE TESTS                      93

Substitute this into [??] to get
                                                             −1
                       a
                 W = n         ε X Q−1
                            −1 0
                                    X R
                                        0
                                                σ20 RQ−1
                                                      X R
                                                          0
                                                                      X X ε
                                                                    RQ−1 0


                       a                                            −1
                      = ε0 X (X 0X )−1 R0 σ20 R(X 0X )−1 R0               R(X 0X )−1 X 0 ε
                       a   ε0 A(A0 A)−1 A0 ε
                      =
                                  σ20
                       a   ε0 PR ε
                      =
                             σ20

where PR is the projection matrix formed by the matrix X (X 0X )−1 R0 .




       • Note that this matrix is idempotent and has q columns, so the projection ma-
         trix has rank q.




Now consider the likelihood ratio statistic

                  a                                            −1
              LR = n1/2 g(θ0 )0 I (θ0 )−1 R0 RI (θ0 )−1 R0           RI (θ0 )−1 n1/2 g(θ0 )


Under normality, we have seen that the likelihood function is

                                    √              1 (y − X β)0 (y − X β)
                  ln L(β, σ) = −n ln 2π − n ln σ −                        .
                                                   2         σ2

Using this,

                                                 1
                                     g(β0 ) ≡ Dβ ln L(β, σ)
                                                 n
                                              X (y − X β0 )
                                               0
                                            =
                                                   nσ2
                                              X 0ε
                                            =
                                              nσ2
         6.3. THE ASYMPTOTIC EQUIVALENCE OF THE LR, WALD AND SCORE TESTS                 94

Also, by the information matrix equality:


                           I (θ0 ) = −H∞ (θ0 )

                                   = lim −Dβ0 g(β0 )
                                                       X 0 (y − X β0 )
                                   = lim −Dβ0
                                                             nσ2
                                                X 0X
                                   = lim
                                                nσ2
                                           QX
                                   =
                                           σ2

so
                                   I (θ0 )−1 = σ2 Q−1
                                                   X

Substituting these last expressions into [??], we get

                    a                                          −1
              LR = ε0 X 0 (X 0X )−1 R0 σ20 R(X 0 X )−1 R0            R(X 0 X )−1 X 0 ε
                    a   ε0 PR ε
                   =
                          σ20
                    a
                   = W


This completes the proof that the Wald and LR tests are asymptotically equivalent.
Similarly, one can show that, under the null hypothesis,

                                       a        a       a
                                  qF = W = LM = LR


      • The proof for the statistics except for LR does not depend upon normality of
         the errors, as can be verified by examining the expressions for the statistics.
      • The LR statistic is based upon distributional assumptions, since one can’t
         write the likelihood function without them.
          6.3. THE ASYMPTOTIC EQUIVALENCE OF THE LR, WALD AND SCORE TESTS                   95

        • However, due to the close relationship between the statistics qF and LR, sup-
          posing normality, the qF statistic can be thought of as a pseudo-LR statistic,
          in that it’s like a LR statistic in that it uses the value of the objective functions
          of the restricted and unrestricted models, but it doesn’t require distributional
          assumptions.
        • The presentation of the score and Wald tests has been done in the context
          of the linear model. This is readily generalizable to nonlinear models and/or
          other estimation methods.




Though the four statistics are asymptotically equivalent, they are numerically different
in small samples. The numeric values of the tests also depend upon how σ 2 is esti-
mated, and we’ve already seen than there are several ways to do this. For example all
of the following are consistent for σ2 under H0



                                              ε̂0 ε̂
                                             n−k

                                              ε̂0 ε̂
                                               n

                                             ε̂0R ε̂R
                                            n−k+q

                                             ε̂0R ε̂R
                                                 n


and in general the denominator call be replaced with any quantity a such that lim a/n =
1.
     It can be shown, for linear regression models subject to linear restrictions, and if
ε̂0 ε̂                                   ε̂R ε̂R
                                              0
 n is used to calculate the Wald test and n is used for the score test, that


                                      W > LR > LM.
                                6.5. CONFIDENCE INTERVALS                                  96

For this reason, the Wald test will always reject if the LR test rejects, and in turn the
LR test rejects if the LM test rejects. This is a bit problematic: there is the possibility
that by careful choice of the statistic used, one can manipulate reported results to favor
or disfavor a hypothesis. A conservative/honest approach would be to report all three
test statistics when they are available. In the case of linear models with normal errors
the F test is to be preferred, since asymptotic approximations are not an issue.
    The small sample behavior of the tests can be quite different. The true size (proba-
bility of rejection of the null when the null is true) of the Wald test is often dramatically
higher than the nominal size associated with the asymptotic distribution. Likewise, the
true size of the score test is often smaller than the nominal size.



                          6.4. Interpretation of test statistics

    Now that we have a menu of test statistics, we need to know how to use them.



                                6.5. Confidence intervals

    Confidence intervals for single coefficients are generated in the normal manner.
Given the t statistic
                                                β̂ − β
                                       t(β) =
                                                  σ
                                                  cβ̂
a 100 (1 − α) % confidence interval for β0 is defined by the bounds of the set of β such
that t(β) does not reject H0 : β0 = β, using a α significance level:

                                                   β̂ − β
                          C(α) = {β : −cα/2 <             < cα/2 }
                                                     σ
                                                     cβ̂

The set of such β is the interval
                                        β̂ ± σ
                                             cβ̂ cα/2
                                    6.6. BOOTSTRAPPING                                     97

   A confidence ellipse for two coefficients jointly would be, analogously, the set of
{β1 , β2 } such that the F (or some other test statistic) doesn’t reject at the specified
critical value. This generates an ellipse, if the estimators are correlated.


        • The region is an ellipse, since the CI for an individual coefficient defines a (in-
          finitely long) rectangle with total prob. mass 1 − α, since the other coefficient
          is marginalized (e.g., can take on any value). Since the ellipse is bounded
          in both dimensions but also contains mass 1 − α, it must extend beyond the
          bounds of the individual CI.
        • From the pictue we can see that:
            – Rejection of hypotheses individually does not imply that the joint test
               will reject.
            – Joint rejection does not imply individal tests will reject.




                                    6.6. Bootstrapping

   When we rely on asymptotic theory to use the normal distribution-based tests and
confidence intervals, we’re often at serious risk of making important errors. If the
sample size is small and errors are highly nonnormal, the small sample distribution
  √          
of n β̂ − β0 may be very different than its large sample distribution. Also, the
distributions of test statistics may not resemble their limiting distributions at all. A
means of trying to gain information on the small sample distribution of test statistics
and estimators is the bootstrap. We’ll consider a simple example, just to get the main
idea.
                  6.6. BOOTSTRAPPING                     98


F IGURE 6.5.1. Joint and Individual Confidence Regions
                                    6.6. BOOTSTRAPPING                                  99

   Suppose that


                            y            =               X β0 + ε

                            ε            ∼               IID(0, σ20)

                                X is nonstochastic


Given that the distribution of ε is unknown, the distribution of β̂ will be unknown in
small samples. However, since we have random sampling, we could generate artificial
data. The steps are:

     (1) Draw n observations from ε̂ with replacement. Call this vector ε̃ j (it’s a
         n × 1).
     (2) Then generate the data by ỹ j = X β̂ + ε̃ j
     (3) Now take this and estimate


                                    β̃ j = (X 0X )−1 X 0ỹ j .


     (4) Save β̃ j
     (5) Repeat steps 1-4, until we have a large number, J, of β̃ j .

With this, we can use the replications to calculate the empirical distribution of β̃ j .
One way to form a 100(1-α)% confidence interval for β0 would be to order the β̃ j
from smallest to largest, and drop the first and last Jα/2 of the replications, and use
the remaining endpoints as the limits of the CI. Note that this will not give the shortest
CI if the empirical distribution is skewed.

       • Suppose one was interested in the distribution of some function of β̂, for
         example a test statistic. Simple: just calculate the transformation for each j,
         and work with the empirical distribution of the transformation.
               6.7. TESTING NONLINEAR RESTRICTIONS, AND THE DELTA METHOD                100

       • If the assumption of iid errors is too strong (for example if there is het-
         eroscedasticity or autocorrelation, see below) one can work with a bootstrap
         defined by sampling from (y, x) with replacement.
       • How to choose J: J should be large enough that the results don’t change with
         repetition of the entire bootstrap. This is easy to check. If you find the results
         change a lot, increase J and try again.
       • The bootstrap is based fundamentally on the idea that the empirical distri-
         bution of the sample data converges to the actual sampling distribution as n
         becomes large, so statistics based on sampling from the empirical distribution
         should converge in distribution to statistics based on sampling from the actual
         sampling distribution.
       • In finite samples, this doesn’t hold. At a minimum, the bootstrap is a good
         way to check if asymptotic theory results offer a decent approximation to the
         small sample distribution.


               6.7. Testing nonlinear restrictions, and the Delta Method

   Testing nonlinear restrictions of a linear model is not much more difficult, at least
when the model is linear. Since estimation subject to nonlinear restrictions requires
nonlinear estimation methods, which are beyond the score of this course, we’ll just
consider the Wald test for nonlinear restrictions on a linear model.
   Consider the q nonlinear restrictions


                                       r(β0 ) = 0.


where r(·) is a q-vector valued function. Write the derivative of the restriction evalu-
ated at β as
                                   Dβ0 r(β) β = R(β)
              6.7. TESTING NONLINEAR RESTRICTIONS, AND THE DELTA METHOD                 101

We suppose that the restrictions are not redundant in a neighborhood of β 0 , so that


                                         ρ(R(β)) = q


in a neighborhood of β0 . Take a first order Taylor’s series expansion of r(β̂) about β0 :


                                r(β̂) = r(β0 ) + R(β∗ )(β̂ − β0 )


where β∗ is a convex combination of β̂ and β0 . Under the null hypothesis we have


                                    r(β̂) = R(β∗ )(β̂ − β0 )


Due to consistency of β̂ we can replace β∗ by β0 , asymptotically, so

                                 √       a √
                                  nr(β̂) = nR(β0 )(β̂ − β0 )

                                           √
We’ve already seen the distribution of         n(β̂ − β0 ). Using this we get

                           √                                
                                   d                     0 2
                            nr(β̂) → N 0, R(β0 )QX R(β0 ) σ0 .
                                                 −1



Considering the quadratic form
                                                     −1
                         nr(β̂)0 R(β0 )Q−1
                                        X   R(β 0 ) 0     r(β̂) d
                                                                → χ2 (q)
                                        σ20

under the null hypothesis. Substituting consistent estimators for β0, QX and σ20 , the
resulting statistic is
                                                     −1
                         r(β̂)0 R(β̂)(X 0X )−1 R(β̂)0     r(β̂) d
                                                                → χ2 (q)
                                          c2
                                          σ

under the null hypothesis.
              6.7. TESTING NONLINEAR RESTRICTIONS, AND THE DELTA METHOD                 102

        • This is known in the literature as the Delta method, or as Klein’s approxima-
           tion.
        • Since this is a Wald test, it will tend to over-reject in finite samples. The
           score and LR tests are also possibilities, but they require estimation methods
           for nonlinear models, which aren’t in the scope of this course.

Note that this also gives a convenient way to estimate nonlinear functions and associ-
ated asymptotic confidence intervals. If the nonlinear function r(β 0 ) is not hypothe-
sized to be zero, we just have

                    √               
                                       d
                                         
                                                            0 2
                                                                
                     n r(β̂) − r(β0 ) → N 0, R(β0 )QX R(β0 ) σ0
                                                    −1



so an approximation to the distribution of the function of the estimator is


                        r(β̂) ≈ N(r(β0 ), R(β0 )(X 0 X )−1 R(β0 )0 σ20 )


For example, the vector of elasticities of a function f (x) is

                                              ∂ f (x)      x
                                     η(x) =
                                                ∂x       f (x)

where       means element-by-element multiplication. Suppose we estimate a linear
function
                                         y = x0 β + ε.

The elasticities of y w.r.t. x are

                                                  β
                                       η(x) =            x
                                                 x0 β

(note that this is the entire vector of elasticities). The estimated elasticities are

                                                   β̂
                                       η
                                       b(x) =            x
                                                 x0 β̂
             6.7. TESTING NONLINEAR RESTRICTIONS, AND THE DELTA METHOD                  103

To calculate the estimated standard errors of all five elasticites, use

                        ∂η(x)
          R(β) =
                         ∂β0
                                                                       
                                                         2
                         x1 0 · · · 0            β1 x 1  0   ··· 0 
                                         
                                       ..                          .. 
                         0 x2          .          0 β 2 x2          . 
                                          0                2           
                         .                x β −  .                     
                         ..      ..                            .
                                                   ..            ..
                                     . 0                          0 
                                                                         
                                                                       
                          0 · · · 0 xk               0     ···   0 βk x2k
                 =                                                              .
                                                     (x0 β)2

To get a consistent estimator just substitute in β̂. Note that the elasticity and the stan-
dard error are functions of x. The program ExampleDeltaMethod.m shows how this
can be done.
     In many cases, nonlinear restrictions can also involve the data, not just the param-
eters. For example, consider a model of expenditure shares. Let x(p, m) be a demand
funcion, where p is prices and m is income. An expenditure share system for G goods
is
                                          pi xi (p, m)
                            si (p, m) =                , i = 1, 2, ..., G.
                                                m
Now demand must be positive, and we assume that expenditures sum to income, so we
have the restrictions


                                          0 ≤ si (p, m) ≤ 1, ∀i
                              G
                              ∑ si(p, m)               =            1
                             i=1

Suppose we postulate a linear model for the expenditure shares:


                              si (p, m) = βi1 + p0 βip + mβim + εi
                             6.8. EXAMPLE: THE NERLOVE DATA                              104

It is fairly easy to write restrictions such that the shares sum to one, but the restriction
that the shares lie in the [0, 1] interval depends on both parameters and the values of p
and m. It is impossible to impose the restriction that 0 ≤ si (p, m) ≤ 1 for all possible p
and m. In such cases, one might consider whether or not a linear model is a reasonable
specification.


                            6.8. Example: the Nerlove data

    Remember that we in a previous example (section 3.8.3) that the OLS results for
the Nerlove model are



*********************************************************
OLS estimation results
Observations 145
R-squared 0.925955
Sigma-squared 0.153943

Results (Ordinary var-cov estimator)

                 estimate         st.err.         t-stat.          p-value
constant           -3.527           1.774          -1.987            0.049
output              0.720           0.017          41.244            0.000
labor               0.436           0.291           1.499            0.136
fuel                0.427           0.100           4.249            0.000
capital            -0.220           0.339          -0.648            0.518

*********************************************************


    Note that sK = βK < 0, and that βL + βF + βK 6= 1.
    Remember that if we have constant returns to scale, then βQ = 1, and if there is
homogeneity of degree 1 thenβL + βF + βK = 1. We can test these hypotheses either
separately or jointly. NerloveRestrictions.m imposes and tests CRTS and then HOD1.
From it we obtain the results that follow:
                       6.8. EXAMPLE: THE NERLOVE DATA             105




Imposing and testing HOD1


*******************************************************
Restricted LS estimation results
Observations 145
R-squared 0.925652
Sigma-squared 0.155686


            estimate       st.err.        t-stat.       p-value
constant     -4.691          0.891         -5.263        0.000
output        0.721          0.018         41.040        0.000
labor         0.593          0.206          2.878        0.005
fuel          0.414          0.100          4.159        0.000
capital      -0.007          0.192         -0.038        0.969


*******************************************************
            Value      p-value
F           0.574         0.450
Wald        0.594         0.441
LR          0.593         0.441
Score       0.592         0.442


Imposing and testing CRTS


*******************************************************
                           6.8. EXAMPLE: THE NERLOVE DATA                            106

Restricted LS estimation results
Observations 145
R-squared 0.790420
Sigma-squared 0.438861


                estimate        st.err.         t-stat.         p-value
constant          -7.530           2.966         -2.539           0.012
output             1.000           0.000             Inf          0.000
labor              0.020           0.489           0.040          0.968
fuel               0.715           0.167           4.289          0.000
capital            0.076           0.572           0.132          0.895


*******************************************************
                Value       p-value
F            256.262           0.000
Wald         265.414           0.000
LR           150.863           0.000
Score         93.771           0.000




     Notice that the input price coefficients in fact sum to 1 when HOD1 is imposed.
HOD1 is not rejected at usual significance levels (e.g., α = 0.10). Also, R 2 does not
drop much when the restriction is imposed, compared to the unrestricted results. For
CRTS, you should note that βQ = 1, so the restriction is satisfied. Also note that the
hypothesis that βQ = 1 is rejected by the test statistics at all reasonable significance
                             6.8. EXAMPLE: THE NERLOVE DATA                              107

levels. Note that R2 drops quite a bit when imposing CRTS. If you look at the unre-
stricted estimation results, you can see that a t-test for βQ = 1 also rejects, and that a
confidence interval for βQ does not overlap 1.
    From the point of view of neoclassical economic theory, these results are not
anomalous: HOD1 is an implication of the theory, but CRTS is not.



    E XERCISE 12. Modify the NerloveRestrictions.m program to impose and test the
restrictions jointly.



    The Chow test. Since CRTS is rejected, let’s examine the possibilities more care-
fully. Recall that the data is sorted by output (the third column). Define 5 subsamples
of firms, with the first group being the 29 firms with the lowest output levels, then the
next 29 firms, etc. The five subsamples can be indexed by j = 1, 2, ..., 5, where j = 1
for t = 1, 2, ...29, j = 2 for t = 30, 31, ...58, etc. Define a piecewise linear model

                         j     j          j          j           j
(6.8.1)         lnCt = β1 + β2 ln Qt + β3 ln PLt + β4 ln PFt + β5 ln PKt + εt


where j is a superscript (not a power) that inicates that the coefficients may be different
according to the subsample in which the observation falls. That is, the coefficients
depend upon j which in turn depends upon t. Note that the first column of nerlove.data
indicates this way of breaking up the sample. The new model may be written as
                                                            
                                                       1
                                               0  β   ε     1
                 y1   X1 0 · · ·
                                                2   2 
                 y2   0 X2                      β   ε 
                                                            
                 .   .                                . 
(6.8.2)          ..  =  ..         X3                +  .. 
                                                            
                                                            
                                                            
                                       X 4  0               
                                                            
                   y5        0                 X5     β5        ε5
                              6.8. EXAMPLE: THE NERLOVE DATA                            108

where y1 is 29×1, X1 is 29×5, β j is the 5×1 vector of coefficient for the jth subsample,
and ε j is the 29 × 1 vector of errors for the jth subsample.
   The Octave program Restrictions/ChowTest.m estimates the above model. It also
tests the hypothesis that the five subsamples share the same parameter vector, or in
other words, that there is coefficient stability across the five subsamples. The null to
test is that the parameter vectors for the separate groups are all the same, that is,


                                 β1 = β 2 = β 3 = β 4 = β 5


This type of test, that parameters are constant across different sets of data, is sometimes
referred to as a Chow test.

       • There are 20 restrictions. If that’s not clear to you, look at the Octave pro-
         gram.
       • The restrictions are rejected at all conventional significance levels.

Since the restrictions are rejected, we should probably use the unrestricted model for
analysis. What is the pattern of RTS as a function of the output group (small to large)?
Figure 6.8.1 plots RTS. We can see that there is increasing RTS for small firms, but
that RTS is approximately constant for large firms.
                                   6.8. EXAMPLE: THE NERLOVE DATA                             109


                          F IGURE 6.8.1. RTS as a function of firm size
          2.6
                                                                               RTS

          2.4


          2.2


           2


          1.8


          1.6


          1.4


          1.2


           1


          0.8
                1        1.5       2        2.5        3         3.5   4       4.5       5
                                                  Output group




     (1) Using the Chow test on the Nerlove model, we reject that there is coefficient
          stability across the 5 groups. But perhaps we could restrict the input price
          coefficients to be the same but let the constant and output coefficients vary by
          group size. This new model is

                               j       j
(6.8.3)              lnCi = β1 + β2 ln Qi + β3 ln PLi + β4 ln PFi + β5 ln PKi + εi


            (a) estimate this model by OLS, giving R, estimated standard errors for coef-
                    ficients, t-statistics for tests of significance, and the associated p-values.
                    Interpret the results in detail.
           (b) Test the restrictions implied by this model using the F, Wald, score and
                    likelihood ratio tests. Comment on the results.
                      6.8. EXAMPLE: THE NERLOVE DATA                             110

    (c) Plot the estimated RTS parameters as a function of firm size. Compare
        the plot to that given in the notes for the unrestricted model. Comment
        on the results.
                                                                dS = 1 . Apply
(2) For the simple Nerlove model, estimated returns to scale is RT   b   βq
   the delta method to calculate the estimated standard error for estimated RTS.
   Directly test H0 : RT S = 1 versus HA : RT S 6= 1 rather than testing H0 : βQ = 1
   versus HA : βQ 6= 1. Comment on the results.
(3) Perform a Monte Carlo study that generates data from the model


                          y = −2 + 1x2 + 1x3 + ε


   where the sample size is 30, x2 and x3 are independently uniformly distributed
   on [0, 1] and ε ∼ IIN(0, 1)
    (a) Compare the means and standard errors of the estimated coefficients us-
        ing OLS and restricted OLS, imposing the restriction that β2 + β3 = 2.
    (b) Compare the means and standard errors of the estimated coefficients us-
        ing OLS and restricted OLS, imposing the restriction that β2 + β3 = 1.
    (c) Discuss the results.
(4) Get the Octave scripts bootstrap_example1.m , bootstrap.m , bootstrap_resample_iid.m
   and myols.m figure out what they do, run them, and interpret the results.
                                        CHAPTER 7


                           Generalized least squares

   One of the assumptions we’ve made up to now is that


                                       εt ∼ IID(0, σ2),


or occasionally
                                       εt ∼ IIN(0, σ2).

Now we’ll investigate the consequences of nonidentically and/or dependently dis-
tributed errors. We’ll assume fixed regressors for now, relaxing this admittedly un-
realistic assumption later. The model is


                                         y = Xβ + ε

                                   E (ε) = 0

                                   V (ε) = Σ


where Σ is a general symmetric positive definite matrix (we’ll write β in place of β 0 to
simplify the typing of these notes).

      • The case where Σ is a diagonal matrix gives uncorrelated, nonidentically dis-
         tributed errors. This is known as heteroscedasticity.
      • The case where Σ has the same number on the main diagonal but nonzero
         elements off the main diagonal gives identically (assuming higher moments
         are also the same) dependently distributed errors. This is known as autocor-
         relation.
                                             111
             7.1. EFFECTS OF NONSPHERICAL DISTURBANCES ON THE OLS ESTIMATOR                112

          • The general case combines heteroscedasticity and autocorrelation. This is
            known as “nonspherical” disturbances, though why this term is used, I have
            no idea. Perhaps it’s because under the classical assumptions, a joint confi-
            dence region for ε would be an n− dimensional hypersphere.




            7.1. Effects of nonspherical disturbances on the OLS estimator

   The least square estimator is


                                    β̂ = (X 0X )−1 X 0 y

                                            = β + (X 0X )−1 X 0 ε


          • We have unbiasedness, as before.
          • The variance of β̂ is
                     h                      i                                     
                   E (β̂ − β)(β̂ − β)   0
                                                = E (X 0 X )−1 X 0 εε0 X (X 0X )−1

(7.1.1)                                         = (X 0 X )−1 X 0 ΣX (X 0X )−1

                                                               c2 or the probability limit σ
            Due to this, any test statistic that is based upon σ                           c2

            of is invalid. In particular, the formulas for the t, F, χ2 based tests given above
            do not lead to statistics with these distributions.
          • β̂ is still consistent, following exactly the same argument given before.
          • If ε is normally distributed, then

                                                                       
                              β̂ ∼ N β, (X 0X )−1 X 0ΣX (X 0X )−1


            The problem is that Σ is unknown in general, so this distribution won’t be
            useful for testing hypotheses.
                                7.2. THE GLS ESTIMATOR                                 113

      • Without normality, and unconditional on X we still have

                         √          √
                          n β̂ − β =   n(X 0X )−1 X 0 ε
                                       0 −1
                                        XX
                                    =           n−1/2 X 0 ε
                                         n

        Define the limiting variance of n−1/2 X 0 ε (supposing a CLT applies) as
                                                       
                                            X 0 εε0 X
                                lim E                       =Ω
                                n→∞             n
                        √       
                                   d
                                                  
        so we obtain     n β̂ − β → N 0, Q−1
                                          X  ΩQ −1
                                                X


Summary: OLS with heteroscedasticity and/or autocorrelation is:

      • unbiased in the same circumstances in which the estimator is unbiased with
        iid errors
      • has a different variance than before, so the previous test statistics aren’t valid
      • is consistent
      • is asymptotically normally distributed, but with a different limiting covari-
        ance matrix. Previous test statistics aren’t valid in this case for this reason.
      • is inefficient, as is shown below.




                              7.2. The GLS estimator

   Suppose Σ were known. Then one could form the Cholesky decomposition


                                      P0 P = Σ−1


Here, P is an upper triangular matrix. We have


                                        P0 PΣ = In
                                  7.2. THE GLS ESTIMATOR                        114

so
                                       P0 PΣP0 = P0 ,

which implies that
                                         PΣP0 = In

     Consider the model
                                    P0 y = P0 X β + P0 ε,

or, making the obvious definitions,


                                      y∗ = X ∗ β + ε ∗ .


This variance of ε∗ = Pε is


                                   E (Pεε0 P0 ) = PΣP0

                                                 = In


Therefore, the model


                                       y∗ = X ∗ β + ε ∗

                                   E (ε∗ ) = 0

                                   V (ε∗ ) = In


satisfies the classical assumptions. The GLS estimator is simply OLS applied to the
transformed model:


                              β̂GLS = (X ∗0 X ∗ )−1 X ∗0 y∗

                                     = (X 0PP0 X )−1 X 0 PP0 y

                                     = (X 0Σ−1 X )−1 X 0 Σ−1 y
                                         7.2. THE GLS ESTIMATOR                                           115

     The GLS estimator is unbiased in the same circumstances under which the OLS
estimator is unbiased. For example, assuming X is nonstochastic

                                                    
                        E (β̂GLS ) = E (X 0Σ−1 X )−1 X 0 Σ−1 y
                                          
                                       = E (X 0Σ−1 X )−1 X 0 Σ−1 (X β + ε

                                       = β.


The variance of the estimator, conditional on X can be calculated using


                                  β̂GLS = (X ∗0 X ∗ )−1 X ∗0 y∗

                                         = (X ∗0 X ∗ )−1 X ∗0 (X ∗ β + ε∗ )

                                         = β + (X ∗0 X ∗ )−1 X ∗0 ε∗


so
                                         0           
       E        β̂GLS − β        β̂GLS − β              = E (X ∗0 X ∗ )−1 X ∗0 ε∗ ε∗0 X ∗ (X ∗0 X ∗ )−1

                                                        = (X ∗0X ∗ )−1 X ∗0 X ∗ (X ∗0 X ∗ )−1

                                                        = (X ∗0X ∗ )−1

                                                        = (X 0Σ−1 X )−1


     Either of these last formulas can be used.

        • All the previous results regarding the desirable properties of the least squares
           estimator hold, when dealing with the transformed model, since the trans-
           formed model satisfies the classical assumptions..
        • Tests are valid, using the previous formulas, as long as we substitute X ∗ in
           place of X . Furthermore, any test that involves σ2 can set it to 1. This is
           preferable to re-deriving the appropriate formulas.
                                7.3. FEASIBLE GLS                                   116

   • The GLS estimator is more efficient than the OLS estimator. This is a con-
     sequence of the Gauss-Markov theorem, since the GLS estimator is based on
     a model that satisfies the classical assumptions but the OLS estimator is not.
     To see this directly, not that (the following needs to be completed)


       Var(β̂) −Var(β̂GLS ) = (X 0X )−1 X 0 ΣX (X 0X )−1 − (X 0Σ−1 X )−1
                                       0
                              = AΣA
              h                                       i
     where A = (X 0 X )−1 X 0 − (X 0 Σ−1 X )−1 X 0 Σ−1 . This may not seem obvious,
                                                                                0
     but it is true, as you can verify for yourself. Then noting that AΣA is a
                                                                         0
     quadratic form in a positive definite matrix, we conclude that AΣA is positive
     semi-definite, and that GLS is efficient relative to OLS.
   • As one can verify by calculating fonc, the GLS estimator is the solution to the
     minimization problem


                     β̂GLS = arg min(y − X β)0Σ−1 (y − X β)


     so the metric Σ−1 is used to weight the residuals.




                              7.3. Feasible GLS

The problem is that Σ isn’t known usually, so this estimator isn’t available.
                                                                   
   • Consider the dimension of Σ : it’s an n × n matrix with n2 − n /2 + n =
            
      n2 + n /2 unique elements.
   • The number of parameters to estimate is larger than n and increases faster
     than n. There’s no way to devise an estimator that satisfies a LLN without
     adding restrictions.
                                    7.3. FEASIBLE GLS                                117

       • The feasible GLS estimator is based upon making sufficient assumptions re-
         garding the form of Σ so that a consistent estimator can be devised.

Suppose that we parameterize Σ as a function of X and θ, where θ may include β as
well as other parameters, so that


                                       Σ = Σ(X , θ)


where θ is of fixed dimension. If we can consistently estimate θ, we can consistently
estimate Σ, as long as Σ(X , θ) is a continuous function of θ (by the Slutsky theorem).
In this case,
                                              p
                                b = Σ(X , θ̂) →
                                Σ               Σ(X , θ)

                                                           b we obtain the FGLS
If we replace Σ in the formulas for the GLS estimator with Σ,
estimator. The FGLS estimator shares the same asymptotic properties as GLS.
These are

     (1) Consistency
     (2) Asymptotic normality
     (3) Asymptotic efficiency if the errors are normally distributed. (Cramer-Rao).
     (4) Test procedures are asymptotically valid.

In practice, the usual way to proceed is

     (1) Define a consistent estimator of θ. This is a case-by-case proposition, depend-
         ing on the parameterization Σ(θ). We’ll see examples below.
     (2) Form Σ
              b = Σ(X , θ̂)

     (3) Calculate the Cholesky factorization Pb = Chol(Σ̂−1 ).
     (4) Transform the model using


                                    P̂0 y = P̂0 X β + P̂0ε
                                 7.4. HETEROSCEDASTICITY                                 118

     (5) Estimate using OLS on the transformed model.


                                 7.4. Heteroscedasticity

    Heteroscedasticity is the case where


                                        E (εε0 ) = Σ


is a diagonal matrix, so that the errors are uncorrelated, but have different variances.
Heteroscedasticity is usually thought of as associated with cross sectional data, though
there is absolutely no reason why time series data cannot also be heteroscedastic. Ac-
tually, the popular ARCH (autoregressive conditionally heteroscedastic) models ex-
plicitly assume that a time series is heteroscedastic.
    Consider a supply function


                                qi = β1 + β p Pi + βs Si + εi


where Pi is price and Si is some measure of size of the ith firm. One might suppose
that unobservable factors (e.g., talent of managers, degree of coordination between
production units, etc.) account for the error term εi . If there is more variability in these
factors for large firms than for small firms, then εi may have a higher variance when Si
is high than when it is low.
    Another example, individual demand.


                               qi = β1 + β p Pi + βm Mi + εi


where P is price and M is income. In this case, εi can reflect variations in preferences.
There are more possibilities for expression of preferences when one is rich, so it is
possible that the variance of εi could be higher when M is high.
    Add example of group means.
                                  7.4. HETEROSCEDASTICITY                                             119

      7.4.1. OLS with heteroscedastic consistent varcov estimation. Eicker (1967)
and White (1980) showed how to modify test statistics to account for heteroscedasticity
of unknown form. The OLS estimator has asymptotic distribution

                              √       
                                         d
                                                        
                               n β̂ − β → N 0, Q−1
                                                X  ΩQ −1
                                                      X


as we’ve already seen. Recall that we defined
                                                               
                                                    X 0 εε0 X
                                   lim E                            =Ω
                                   n→∞                  n

This matrix has dimension K × K and can be consistently estimated, even if we can’t
estimate Σ consistently. The consistent estimator, under heteroscedasticity but no au-
tocorrelation is
                                                       n
                                       b = 1 ∑ x0 xt ε̂2
                                       Ω
                                           n t=1 t t
One can then modify the previous test statistics to obtain tests that are valid when there
is heteroscedasticity of unknown form. For example, the Wald test for H0 : Rβ − r = 0
would be
                                     −1                 −1           !−1
                       0     X 0X            X 0X                                      
                                                                                            a
            n Rβ̂ − r        R              Ω̂                      R0             Rβ̂ − r ∼ χ2 (q)
                                n               n

      7.4.2. Detection. There exist many tests for the presence of heteroscedasticity.
We’ll discuss three methods.
      Goldfeld-Quandt. The sample is divided in to three parts, with n1 , n2 and n3 obser-
vations, where n1 + n2 + n3 = n. The model is estimated using the first and third parts
of the sample, separately, so that β̂1 and β̂3 will be independent. Then we have
                                            0
                               ε̂10 ε̂1 ε1 M 1 ε1 d 2
                                       =          → χ (n1 − K)
                                 σ2        σ2

and
                                 7.4. HETEROSCEDASTICITY                                  120


                                         0
                              ε̂30 ε̂3 ε3 M 3 ε3 d 2
                                      =          → χ (n3 − K)
                                σ2        σ2
so
                          ε̂10 ε̂1 /(n1 − K) d
                                             → F(n1 − K, n3 − K).
                          ε̂30 ε̂3 /(n3 − K)
The distributional result is exact if the errors are normally distributed. This test is a
two-tailed test. Alternatively, and probably more conventionally, if one has prior ideas
about the possible magnitudes of the variances of the observations, one could order
the observations accordingly, from largest to smallest. In this case, one would use a
conventional one-tailed F-test. Draw picture.

        • Ordering the observations is an important step if the test is to have any power.
        • The motive for dropping the middle observations is to increase the difference
          between the average variance in the subsamples, supposing that there exists
          heteroscedasticity. This can increase the power of the test. On the other hand,
          dropping too many observations will substantially increase the variance of the
          statistics ε̂10 ε̂1 and ε̂30 ε̂3 . A rule of thumb, based on Monte Carlo experiments
          is to drop around 25% of the observations.
        • If one doesn’t have any ideas about the form of the het. the test will probably
          have low power since a sensible data ordering isn’t available.

     White’s test. When one has little idea if there exists heteroscedasticity, and no idea
of its potential form, the White test is a possibility. The idea is that if there is ho-
moscedasticity, then
                                     E (εt2 |xt ) = σ2 , ∀t

so that xt or functions of xt shouldn’t help to explain E (εt2 ). The test works as follows:

      (1) Since εt isn’t available, use the consistent estimator ε̂t instead.
                                  7.4. HETEROSCEDASTICITY                                121

     (2) Regress
                                     ε̂t2 = σ2 + zt0 γ + vt

         where zt is a P-vector. zt may include some or all of the variables in xt , as
         well as other variables. White’s original suggestion was to use xt , plus the set
         of all unique squares and cross products of variables in xt .
     (3) Test the hypothesis that γ = 0. The qF statistic in this case is

                                       P (ESSR − ESSU ) /P
                               qF =
                                        ESSU / (n − P − 1)

         Note that ESSR = T SSU , so dividing both numerator and denominator by this
         we get
                                                         R2
                                  qF = (n − P − 1)
                                                       1 − R2
         Note that this is the R2 or the artificial regression used to test for heteroscedas-
         ticity, not the R2 of the original model.


An asymptotically equivalent statistic, under the null of no heteroscedasticity (so that
R2 should tend to zero), is


                                             a
                                       nR2 ∼ χ2 (P).

This doesn’t require normality of the errors, though it does assume that the fourth
moment of εt is constant, under the null. Question: why is this necessary?


      • The White test has the disadvantage that it may not be very powerful unless
         the zt vector is chosen well, and this is hard to do without knowledge of the
         form of heteroscedasticity.
      • It also has the problem that specification errors other than heteroscedasticity
         may lead to rejection.
                                 7.4. HETEROSCEDASTICITY                                 122

       • Note: the null hypothesis of this test may be interpreted as θ = 0 for the
         variance model V (εt2 ) = h(α + zt0 θ), where h(·) is an arbitrary function of un-
         known form. The test is more general than is may appear from the regression
         that is used.

    Plotting the residuals. A very simple method is to simply plot the residuals (or
their squares). Draw pictures here. Like the Goldfeld-Quandt test, this will be more
informative if the observations are ordered according to the suspected form of the
heteroscedasticity.



    7.4.3. Correction. Correcting for heteroscedasticity requires that a parametric
form for Σ(θ) be supplied, and that a means for estimating θ consistently be deter-
mined. The estimation method will be specific to the for supplied for Σ(θ). We’ll
consider two examples. Before this, let’s consider the general nature of GLS when
there is heteroscedasticity.
    Multiplicative heteroscedasticity
    Suppose the model is


                                  yt = xt0 β + εt
                                                                δ
                                 σt2 = E (εt2 ) = zt0 γ


but the other classical assumptions hold. In this case

                                                    δ
                                      εt2 = zt0 γ        + vt


and vt has mean zero. Nonlinear least squares could be used to estimate γ and δ con-
sistently, were εt observable. The solution is to substitute the squared OLS residuals
ε̂t2 in place of εt2 , since it is consistent by the Slutsky theorem. Once we have γ̂ and δ̂,
                                7.4. HETEROSCEDASTICITY                                   123

we can estimate σt2 consistently using

                                                    p
                                               0 δ̂
                                     σ̂t2 =   zt γ̂ → σt2 .


In the second step, we transform the model by dividing by the standard deviation:

                                       yt   x0 β εt
                                           = t +
                                       σ̂t   σ̂t σ̂t

or
                                       yt∗ = xt∗0 β + εt∗ .

Asymptotically, this model satisfies the classical assumptions.


      • This model is a bit complex in that NLS is required to estimate the model of
         the variance. A simpler version would be


                                yt            =        xt0 β + εt

                               σt2 = E (εt2 ) = σ2 ztδ


         where zt is a single variable. There are still two parameters to be estimated,
         and the model of the variance is still nonlinear in the parameters. However,
         the search method can be used in this case to reduce the estimation problem
         to repeated applications of OLS.
      • First, we define an interval of reasonable values for δ, e.g., δ ∈ [0, 3].
      • Partition this interval into M equally spaced values, e.g., {0, .1, .2, ..., 2.9, 3}.
      • For each of these values, calculate the variable ztδm .
      • The regression
                                       ε̂t2 = σ2 ztδm + vt

         is linear in the parameters, conditional on δm , so one can estimate σ2 by OLS.
                                  7.4. HETEROSCEDASTICITY                                  124

       • Save the pairs (σ2m , δm ), and the corresponding ESSm . Choose the pair with
         the minimum ESSm as the estimate.
       • Next, divide the model by the estimated standard deviations.
       • Can refine. Draw picture.
       • Works well when the parameter to be searched over is low dimensional, as in
         this case.

Groupwise heteroscedasticity
    A common case is where we have repeated observations on each of a number of
economic agents: e.g., 10 years of macroeconomic data on each of a set of countries or
regions, or daily observations of transactions of 200 banks. This sort of data is a pooled
cross-section time-series model. It may be reasonable to presume that the variance is
constant over time within the cross-sectional units, but that it differs across them (e.g.,
firms or countries of different sizes...). The model is


                                        yit = x0it β + εit

                                   E (ε2it ) = σ2i , ∀t


where i = 1, 2, ..., G are the agents, and t = 1, 2, ..., n are the observations on each agent.

       • The other classical assumptions are presumed to hold.
       • In this case, the variance σ2i is specific to each agent, but constant over the n
         observations for that agent.
       • In this model, we assume that E (εit εis ) = 0. This is a strong assumption that
         we’ll relax later.

To correct for heteroscedasticity, just estimate each σ2i using the natural estimator:
                                                    n
                                               1
                                        σ̂2i =
                                              n ∑ ε̂2it
                                                   t=1
                                 7.4. HETEROSCEDASTICITY                                  125

         • Note that we use 1/n here since it’s possible that there are more than n re-
           gressors, so n − K could be negative. Asymptotically the difference is unim-
           portant.
         • With each of these, transform the model as usual:

                                      yit  x0 β εit
                                          = it +
                                      σ̂i   σ̂i  σ̂i

           Do this for each cross-sectional group. This transformed model satisfies the
           classical assumptions, asymptotically.


    7.4.4. Example: the Nerlove model (again!) Let’s check the Nerlove data for
evidence of heteroscedasticity. In what follows, we’re going to use the model with
the constant and output coefficient varying across 5 groups, but with the input price
coefficients fixed (see Equation 6.8.3 for the rationale behind this). Figure 7.4.1, which
is generated by the Octave program GLS/NerloveResiduals.m plots the residuals. We
can see pretty clearly that the error variance is larger for small firms than for larger
firms.
    Now let’s try out some tests to formally check for heteroscedasticity. The Octave
program GLS/HetTests.m performs the White and Goldfeld-Quandt tests, using the
above model. The results are

                      Value       p-value
White’s test          61.903      0.000
                      Value       p-value
GQ test               10.886      0.000



All in all, it is very clear that the data are heteroscedastic. That means that OLS
estimation is not efficient, and tests of restrictions that ignore heteroscedasticity are not
                                         7.4. HETEROSCEDASTICITY                                       126


                    F IGURE 7.4.1. Residuals, Nerlove model, sorted by firm size
                                                  Regression residuals
         1.5
                                                                                     Residuals



           1




         0.5




           0




         -0.5




          -1




         -1.5
                0         20        40       60            80            100   120        140    160




valid. The previous tests (CRTS, HOD1 and the Chow test) were calculated assuming
homoscedasticity. The Octave program GLS/NerloveRestrictions-Het.m uses the Wald
test to check for CRTS and HOD1, but using a heteroscedastic-consistent covariance
estimator.1 The results are

Testing HOD1
                            Value          p-value
Wald test                   6.161            0.013


Testing CRTS
                            Value          p-value

1By the way, notice that GLS/NerloveResiduals.m and GLS/HetTests.m use the restricted LS estimator
directly to restrict the fully general model with all coefficients varying to the model with only the
constant and the output coefficient varying. But GLS/NerloveRestrictions-Het.m estimates the model
by substituting the restrictions into the model. The methods are equivalent, but the second is more
convenient and easier to understand.
                               7.4. HETEROSCEDASTICITY                              127

Wald test          20.169           0.001



We see that the previous conclusions are altered - both CRTS is and HOD1 are rejected
at the 5% level. Maybe the rejection of HOD1 is due to to Wald test’s tendency to over-
reject?
   From the previous plot, it seems that the variance of ε is a decreasing function of
output. Suppose that the 5 size groups have different error variances (heteroscedastic-
ity by groups):
                                    Var(εi ) = σ2j ,

where j = 1 if i = 1, 2, ..., 29, etc., as before. The Octave program GLS/NerloveGLS.m
estimates the model using GLS (through a transformation of the model so that OLS
can be applied). The estimation results are

*********************************************************
OLS estimation results
Observations 145
R-squared 0.958822
Sigma-squared 0.090800


Results (Het. consistent var-cov estimator)


                  estimate       st.err.          t-stat.       p-value
constant1          -1.046           1.276          -0.820          0.414
constant2          -1.977           1.364          -1.450          0.149
constant3          -3.616           1.656          -2.184          0.031
constant4          -4.052           1.462          -2.771          0.006
                         7.4. HETEROSCEDASTICITY              128

constant5     -5.308         1.586        -3.346     0.001
output1        0.391         0.090          4.363     0.000
output2        0.649         0.090          7.184     0.000
output3        0.897         0.134          6.688     0.000
output4        0.962         0.112          8.612     0.000
output5        1.101         0.090        12.237      0.000
labor          0.007         0.208          0.032     0.975
fuel           0.498         0.081          6.149     0.000
capital       -0.460         0.253        -1.818      0.071


*********************************************************


*********************************************************
OLS estimation results
Observations 145
R-squared 0.987429
Sigma-squared 1.092393


Results (Het. consistent var-cov estimator)


             estimate      st.err.       t-stat.    p-value
constant1     -1.580         0.917        -1.723     0.087
constant2     -2.497         0.988        -2.528     0.013
constant3     -4.108         1.327        -3.097     0.002
constant4     -4.494         1.180        -3.808     0.000
constant5     -5.765         1.274        -4.525     0.000
                                7.4. HETEROSCEDASTICITY                              129

output1              0.392           0.090          4.346           0.000
output2              0.648           0.094          6.917           0.000
output3              0.892           0.138          6.474           0.000
output4              0.951           0.109          8.755           0.000
output5              1.093           0.086         12.684           0.000
labor                0.103           0.141          0.733           0.465
fuel                 0.492           0.044         11.294           0.000
capital             -0.366           0.165         -2.217           0.028


*********************************************************


Testing HOD1
                     Value        p-value
Wald test            9.312           0.002




The first panel of output are the OLS estimation results, which are used to consistently
estimate the σ2j . The second panel of results are the GLS estimation results. Some
comments:


        • The R2 measures are not comparable - the dependent variables are not the
          same. The measure for the GLS results uses the transformed dependent vari-
          able. One could calculate a comparable R2 measure, but I have not done so.
        • The differences in estimated standard errors (smaller in general for GLS) can
          be interpreted as evidence of improved efficiency of GLS, since the OLS stan-
          dard errors are calculated using the Huber-White estimator. They would not
          be comparable if the ordinary (inconsistent) estimator had been used.
                                 7.5. AUTOCORRELATION                                  130

       • Note that the previously noted pattern in the output coefficients persists. The
         nonconstant CRTS result is robust.
       • The coefficient on capital is now negative and significant at the 3% level.
         That seems to indicate some kind of problem with the model or the data, or
         economic theory.
       • Note that HOD1 is now rejected. Problem of Wald test over-rejecting? Spec-
         ification error in model?


                                 7.5. Autocorrelation

   Autocorrelation, which is the serial correlation of the error term, is a problem that
is usually associated with time series data, but also can affect cross-sectional data. For
example, a shock to oil prices will simultaneously affect all countries, so one could
expect contemporaneous correlation of macroeconomic variables across countries.


   7.5.1. Causes. Autocorrelation is the existence of correlation across the error term:


                                     E (εt εs ) 6= 0,t 6= s.


Why might this occur? Plausible explanations include

     (1) Lags in adjustment to shocks. In a model such as


                                        yt = xt0 β + εt ,


         one could interpret xt0 β as the equilibrium value. Suppose xt is constant over
         a number of observations. One can interpret εt as a shock that moves the
         system away from equilibrium. If the time needed to return to equilibrium is
         long with respect to the observation frequency, one could expect εt+1 to be
         positive, conditional on εt positive, which induces a correlation.
                           7.5. AUTOCORRELATION                                131


       F IGURE 7.5.1. Autocorrelation induced by misspecification




(2) Unobserved factors that are correlated over time. The error term is often
   assumed to correspond to unobservable factors. If these factors are correlated,
   there will be autocorrelation.
(3) Misspecification of the model. Suppose that the DGP is


                         yt = β0 + β1 xt + β2 xt2 + εt


   but we estimate
                             yt = β0 + β1 xt + εt

   The effects are illustrated in Figure 7.5.1.
                                7.5. AUTOCORRELATION                              132

   7.5.2. Effects on the OLS estimator. The variance of the OLS estimator is the
same as in the case of heteroscedasticity - the standard formula does not apply. The
correct formula is given in equation 7.1.1. Next we discuss two GLS corrections for
OLS. These will potentially induce inconsistency when the regressors are nonstochas-
tic (see Chapter8) and should either not be used in that case (which is usually the
relevant case) or used with caution. The more recommended procedure is discussed in
section 7.5.5.


   7.5.3. AR(1). There are many types of autocorrelation. We’ll consider two exam-
ples. The first is the most commonly encountered case: autoregressive order 1 (AR(1)
errors. The model is


                                     yt = xt0 β + εt

                                     εt = ρεt−1 + ut

                                     ut ∼ iid(0, σ2u )

                               E (εt us ) = 0,t < s


We assume that the model satisfies the other classical assumptions.

       • We need a stationarity assumption: |ρ| < 1. Otherwise the variance of εt ex-
         plodes as t increases, so standard asymptotics will not apply.
       • By recursive substitution we obtain


                        εt = ρεt−1 + ut

                            = ρ (ρεt−2 + ut−1 ) + ut

                            = ρ2 εt−2 + ρut−1 + ut

                            = ρ2 (ρεt−3 + ut−2 ) + ρut−1 + ut
                                   7.5. AUTOCORRELATION                             133

         In the limit the lagged ε drops out, since ρm → 0 as m → ∞, so we obtain
                                             ∞
                                      εt = ∑ ρm ut−m
                                           m=0

         With this, the variance of εt is found as
                                                     ∞
                                  E (εt2 ) = σ2u ∑ ρ2m
                                                    m=0

                                               σ2u
                                           =
                                             1 − ρ2

      • If we had directly assumed that εt were covariance stationary, we could obtain
         this using


                      V (εt ) = ρ2 E (εt−1
                                       2
                                           ) + 2ρE (εt−1 ut ) + E (ut2 )

                              = ρ2V (εt ) + σ2u ,


         so
                                                    σ2u
                                      V (εt ) =
                                                  1 − ρ2
      • The variance is the 0th order autocovariance: γ0 = V (εt )
      • Note that the variance does not depend on t

Likewise, the first order autocovariance γ1 is


                       Cov(εt , εt−1 ) = γs = E ((ρεt−1 + ut ) εt−1 )

                                         =        ρV (εt )
                                                   ρσ2u
                                         =
                                                  1 − ρ2

      • Using the same method, we find that for s < t

                                                          ρs σ2u
                                Cov(εt , εt−s ) = γs =
                                                         1 − ρ2
                                  7.5. AUTOCORRELATION                                 134

       • The autocovariances don’t depend on t: the process {εt } is covariance sta-
         tionary


The correlation (in general, for r.v.’s x and y) is defined as

                                                  cov(x, y)
                                  corr(x, y) =
                                                 se(x)se(y)

but in this case, the two standard errors are the same, so the s-order autocorrelation ρ s
is
                                          ρs = ρ s

       • All this means that the overall matrix Σ has the form
                                                                        
                                                          2
                                                    ρ ρ ··· ρ        n−1
                                            1                           
                                                                    n−2
                                                                         
                                            ρ      1   ρ    · · · ρ     
                                 2
                                                                        
                               σu          
                                               ..     . .            .. 
                  Σ=                        .             .           . 
                                                                         
                            1 − ρ2                                      
                            | {z }                          . ..        
                      this is the variance                          ρ 
                                                                        
                                             ρ n−1 ···               1
                                           |           {z                }
                                             this is the correlation matrix

         So we have homoscedasticity, but elements off the main diagonal are not zero.
         All of this depends only on two parameters, ρ and σ2u . If we can estimate these
         consistently, we can apply FGLS.


It turns out that it’s easy to estimate these consistently. The steps are


     (1) Estimate the model yt = xt0 β + εt by OLS.
     (2) Take the residuals, and estimate the model


                                      ε̂t = ρε̂t−1 + ut∗
                             7.5. AUTOCORRELATION                                   135

              p
    Since ε̂t → εt , this regression is asymptotically equivalent to the regression


                                 εt = ρεt−1 + ut


    which satisfies the classical assumptions. Therefore, ρ̂ obtained by applying
                                                                  p
    OLS to ε̂t = ρε̂t−1 + ut∗ is consistent. Also, since ut∗ → ut , the estimator

                                      1 n ∗ 2 p 2
                             σ̂2u =     ∑ (ût ) → σu
                                      n t=2

(3) With the consistent estimators σ̂2u and ρ̂, form Σ̂ = Σ(σ̂2u , ρ̂) using the previ-
    ous structure of Σ, and estimate by FGLS. Actually, one can omit the factor
    σ̂2u /(1 − ρ2 ), since it cancels out in the formula

                                             −1
                       β̂FGLS = X 0 Σ̂−1 X         (X 0Σ̂−1 y).


 • One can iterate the process, by taking the first FGLS estimator of β, re-
    estimating ρ and σ2u , etc. If one iterates to convergences it’s equivalent to
    MLE (supposing normal errors).
 • An asymptotically equivalent approach is to simply estimate the transformed
    model
                       yt − ρ̂yt−1 = (xt − ρ̂xt−1 )0 β + ut∗

    using n − 1 observations (since y0 and x0 aren’t available). This is the method
    of Cochrane and Orcutt. Dropping the first observation is asymptotically ir-
    relevant, but it can be very important in small samples. One can recuperate
    the first observation by putting
                                           q
                              y∗1 = y1      1 − ρ̂2
                                           q
                              x∗1 = x1      1 − ρ̂2
                                    7.5. AUTOCORRELATION                                136

           This somewhat odd-looking result is related to the Cholesky factorization of
           Σ−1 . See Davidson and MacKinnon, pg. 348-49 for more discussion. Note
           that the variance of y∗1 is σ2u , asymptotically, so we see that the transformed
           model will be homoscedastic (and nonautocorrelated, since the u 0 s are uncor-
           related with the y0 s, in different time periods.


      7.5.4. MA(1). The linear regression model with moving average order 1 errors is


                                         yt = xt0 β + εt

                                         εt = ut + φut−1

                                         ut ∼ iid(0, σ2u )

                                  E (εt us ) = 0,t < s


In this case,
                                                 h                 i
                                                               2
                            V (εt ) = γ0 = E (ut + φut−1 )

                                        =      σ2u + φ2 σ2u

                                        =      σ2u (1 + φ2 )


Similarly


                          γ1 = E [(ut + φut−1 ) (ut−1 + φut−2 )]

                               = φσ2u


and


                           γ2 = [(ut + φut−1 ) (ut−2 + φut−3 )]

                                = 0
                                   7.5. AUTOCORRELATION                            137

so in this case                                                               
                                1 + φ2          φ    0      ···        0      
                                                                              
                            
                                   φ       1 + φ2     φ                       
                                                                               
                          2
                                                     ..                ..     
                     Σ = σu        0            φ       .               .     
                                                                               
                                   ..                                         
                                                            ..                
                                    .                            .     φ      
                                                                              
                                    0           ···          φ        1 + φ2
Note that the first order autocorrelation is

                                                φσ2      γ1
                                 ρ1 = σ2 (1+φ
                                            u
                                              2) =
                                            u            γ0
                                                          φ
                                            =
                                                      (1 + φ2 )

       • This achieves a maximum at φ = 1 and a minimum at φ = −1, and the maxi-
         mal and minimal autocorrelations are 1/2 and -1/2. Therefore, series that are
         more strongly autocorrelated can’t be MA(1) processes.

Again the covariance matrix has a simple structure that depends on only two parame-
ters. The problem in this case is that one can’t estimate φ using OLS on


                                         ε̂t = ut + φut−1


because the ut are unobservable and they can’t be estimated consistently. However,
there is a simple way to estimate the parameters.

       • Since the model is homoscedastic, we can estimate


                                 V (εt ) = σ2ε = σ2u (1 + φ2 )


         using the typical estimator:
                                                             n
                                                    1
                                 c2 = σ2\
                                 σ ε   u (1 + φ ) =
                                               2
                                                      ∑
                                                    n t=1
                                                          ε̂t2
                                   7.5. AUTOCORRELATION                               138

      • By the Slutsky theorem, we can interpret this as defining an (unidentified)
        estimator of both σ2u and φ, e.g., use this as
                                                      n
                                                 1
                                   σ       φ2 ) = ∑ ε̂t2
                                   c2 (1 + b
                                     u
                                                 n t=1

        However, this isn’t sufficient to define consistent estimators of the parameters,
        since it’s unidentified.
      • To solve this problem, estimate the covariance of εt and εt−1 using
                                                          n
                                         d2 = 1
                          d t , εt−1 ) = φσ
                          Cov(ε             u   ∑ ε̂t ε̂t−1
                                              n t=2

        This is a consistent estimator, following a LLN (and given that the epsilon
        hats are consistent for the epsilons). As above, this can be interpreted as
        defining an unidentified estimator:

                                             1 n
                                      c2 =
                                    φ̂σ u      ∑ ε̂t ε̂t−1
                                             n t=2

      • Now solve these two equations to obtain identified (and therefore consistent)
        estimators of both φ and σ2u . Define the consistent estimator

                                                  c2 )
                                       Σ̂ = Σ(φ̂, σ u


        following the form we’ve seen above, and transform the model using the
        Cholesky decomposition. The transformed model satisfies the classical as-
        sumptions asymptotically.




   7.5.5. Asymptotically valid inferences with autocorrelation of unknown form.
See Hamilton Ch. 10, pp. 261-2 and 280-84.
                                    7.5. AUTOCORRELATION                              139

   When the form of autocorrelation is unknown, one may decide to use the OLS es-
timator, without correction. We’ve seen that this estimator has the limiting distribution

                            √       
                                       d
                                                      
                             n β̂ − β → N 0, Q−1
                                              X  ΩQ −1
                                                    X


where, as before, Ω is
                                                                 
                                                      X 0 εε0 X
                                Ω = lim E
                                          n→∞             n
We need a consistent estimate of Ω. Define mt = xt εt (recall that xt is defined as a
K × 1 vector). Note that
                                                                          
                                                                 ε1 
                                                                    
                                     h                        i  ε2 
                                                                    
                           X 0ε =         x1 x2       · · · xn  . 
                                                                 .. 
                                                                    
                                                                    
                                                                  εn
                                      n
                               =     ∑ xt εt
                                     t=1
                                      n
                               =     ∑ mt
                                     t=1

so that                                    "            !                 !#
                                                  n               n
                                   1
                           Ω = lim E
                               n→∞ n
                                                ∑ mt          ∑ mt0
                                                t=1           t=1

We assume that mt is covariance stationary (so that the covariance between mt and
mt−s does not depend on t).
   Define the v − th autocovariance of mt as


                                     Γv = E (mt mt−v
                                                 0
                                                     ).

                 0 ) = Γ0 . (show this with an example). In general, we expect that:
Note that E (mt mt+v    v
                                  7.5. AUTOCORRELATION                                140

        • mt will be autocorrelated, since εt is potentially autocorrelated:


                                  Γv = E (mt mt−v
                                              0
                                                  ) 6= 0


          Note that this autocovariance does not depend on t, due to covariance station-
          arity.
        • contemporaneously correlated ( E (mit m jt ) 6= 0 ), since the regressors in xt
          will in general be correlated (more on this later).
        • and heteroscedastic (E (m2it ) = σ2i , which depends upon i ), again since the
          regressors will have different variances.




While one could estimate Ω parametrically, we in general have little information upon
which to base a parametric specification. Recent research has focused on consistent
nonparametric estimators of Ω.
   Now define                          "              !           !#
                                              n            n
                                   1
                            Ωn = E
                                   n         ∑ mt         ∑ mt0
                                             t=1          t=1

We have (show that the following is true, by expanding sum and shifting rows to left)

                      n−1          n−2                1             
          Ωn = Γ0 +       Γ1 + Γ01 +    Γ2 + Γ02 · · · + Γn−1 + Γ0n−1
                       n             n                  n

The natural, consistent estimator of Γv is
                                                  n
                                        1
                                  Γbv =     ∑ m̂t m̂t−v
                                        n t=v+1
                                                    0
                                                        .


where
                                           m̂t = xt ε̂t
                                 7.5. AUTOCORRELATION                                141

(note: one could put 1/(n − v) instead of 1/n here). So, a natural, but inconsistent,
estimator of Ωn would be
                                                                      
           c0 + n − 1 Γ
     Ω̂n = Γ                c0 + n − 2 Γ
                       c1 + Γ                 c0 + · · · + 1 Γd
                                         c2 + Γ                n−1 + d
                                                                     Γ 0
                  n           1      n          2          n           n−1

                n−1              
           c0 + ∑ n − v Γbv + Γb0v .
         = Γ
                v=1 n

This estimator is inconsistent in general, since the number of parameters to estimate is
more than the number of observations, and increases more rapidly than n, so informa-
tion does not build up as n → ∞.
   On the other hand, supposing that Γv tends to zero sufficiently rapidly as v tends to
∞, a modified estimator
                                        q(n)       
                              Ω̂n = Γ0 + ∑ Γv + Γv ,
                                    c          b b0
                                            v=1
            p
where q(n) → ∞ as n → ∞ will be consistent, provided q(n) grows sufficiently slowly.




      • The assumption that autocorrelations die off is reasonable in many cases. For
         example, the AR(1) model with |ρ| < 1 has autocorrelations that die off.
      • The term n−v
                  n can be dropped because it tends to one for v < q(n), given that

         q(n) increases slowly relative to n.
      • A disadvantage of this estimator is that is may not be positive definite. This
         could cause one to calculate a negative χ2 statistic, for example!
      • Newey and West proposed and estimator (Econometrica, 1987) that solves
         the problem of possible nonpositive definiteness of the above estimator. Their
         estimator is
                                   q(n)              
                                          v
                        Ω̂n = Γ0 + ∑ 1 −
                              c                 b    b
                                                Γv + Γv .
                                                      0
                                   v=1   q+1
                                    7.5. AUTOCORRELATION                                142

         This estimator is p.d. by construction. The condition for consistency is that
         n−1/4 q(n) → 0. Note that this is a very slow rate of growth for q. This esti-
         mator is nonparametric - we’ve placed no parametric restrictions on the form
         of Ω. It is an example of a kernel estimator.
                                          p
                                                                      cX = 1 X 0 X to
Finally, since Ωn has Ω as its limit, Ω̂n → Ω. We can now use Ω̂n and Q    n

consistently estimate the limiting distribution of the OLS estimator under heteroscedas-
ticity and autocorrelation of unknown form. With this, asymptotically valid tests are
constructed in the usual way.



   7.5.6. Testing for autocorrelation. Durbin-Watson test
   The Durbin-Watson test statistic is
                                   n                    2
                                  ∑t=2 (ε̂t − ε̂t−1 )
                             DW =        n
                                      ∑t=1   ε̂t2
                                     n
                                                                     
                                    ∑t=2 ε̂t2 − 2ε̂t ε̂t−1 + ε̂t−1
                                                               2
                                  =             n
                                              ∑t=1    ε̂t2

      • The null hypothesis is that the first order autocorrelation of the errors is zero:
         H0 : ρ1 = 0. The alternative is of course HA : ρ1 6= 0. Note that the alternative
         is not that the errors are AR(1), since many general patterns of autocorrelation
         will have the first order autocorrelation different than zero. For this reason the
         test is useful for detecting autocorrelation in general. For the same reason, one
         shouldn’t just assume that an AR(1) model is appropriate when the DW test
         rejects the null.
      • Under the null, the middle term tends to zero, and the other two tend to one,
                  p
         so DW → 2.
      • Supposing that we had an AR(1) error process with ρ = 1. In this case the
                                               p
         middle term tends to −2, so DW → 0
                                    7.5. AUTOCORRELATION                                 143

       • Supposing that we had an AR(1) error process with ρ = −1. In this case the
                                                p
         middle term tends to 2, so DW → 4
       • These are the extremes: DW always lies between 0 and 4.
       • The distribution of the test statistic depends on the matrix of regressors, X ,
         so tables can’t give exact critical values. The give upper and lower bounds,
         which correspond to the extremes that are possible. See Figure 7.5.2. There
         are means of determining exact critical values conditional on X .
       • Note that DW can be used to test for nonlinearity (add discussion).
       • The DW test is based upon the assumption that the matrix X is fixed in re-
         peated samples. This is often unreasonable in the context of economic time
         series, which is precisely the context where the test would have application. It
         is possible to relate the DW test to other test statistics which are valid without
         strict exogeneity.



    Breusch-Godfrey test
    This test uses an auxiliary regression, as does the White test for heteroscedasticity.
The regression is


                      ε̂t = xt0 δ + γ1 ε̂t−1 + γ2 ε̂t−2 + · · · + γP ε̂t−P + vt


and the test statistic is the nR2 statistic, just as in the White test. There are P restric-
tions, so the test statistic is asymptotically distributed as a χ2 (P).



       • The intuition is that the lagged errors shouldn’t contribute to explaining the
         current error if there is no autocorrelation.
       • xt is included as a regressor to account for the fact that the ε̂t are not indepen-
         dent even if the εt are. This is a technicality that we won’t go into here.
                                  7.5. AUTOCORRELATION                                 144


                    F IGURE 7.5.2. Durbin-Watson critical values




      • This test is valid even if the regressors are stochastic and contain lagged de-
         pendent variables, so it is considerably more useful than the DW test for typ-
         ical time series data.
      • The alternative is not that the model is an AR(P), following the argument
         above. The alternative is simply that some or all of the first P autocorrelations
         are different from zero. This is compatible with many specific forms of auto-
         correlation.

   7.5.7. Lagged dependent variables and autocorrelation. We’ve seen that the
OLS estimator is consistent under autocorrelation, as long as plim Xnε = 0. This will
                                                                        0



be the case when E (X 0 ε) = 0, following a LLN. An important exception is the case
where X contains lagged y0 s and the errors are autocorrelated. A simple example is the
                                     7.5. AUTOCORRELATION                             145

case of a single lag of the dependent variable with AR(1) errors. The model is


                                    yt = xt0 β + yt−1 γ + εt

                                    εt = ρεt−1 + ut


Now we can write

                                      
               E (yt−1 εt ) = E (xt−1
                                  0
                                      β + yt−2 γ + εt−1 )(ρεt−1 + ut )

                              6= 0

                               2 ) which is clearly nonzero. In this case E (X 0 ε) 6= 0,
since one of the terms is E (ρεt−1
and therefore plim Xnε 6= 0. Since
                     0




                                                        X 0ε
                                    plimβ̂ = β + plim
                                                         n
the OLS estimator is inconsistent in this case. One needs to estimate by instrumental
variables (IV), which we’ll get to later.




   7.5.8. Examples.
   Nerlove model, yet again. The Nerlove model uses cross-sectional data, so one
may not think of performing tests for autocorrelation. However, specification error
can induce autocorrelated errors. Consider the simple Nerlove model


                 lnC = β1 + β2 ln Q + β3 ln PL + β4 ln PF + β5 ln PK + ε


and the extended Nerlove model

                          j     j
                 lnC = β1 + β2 ln Q + β3 ln PL + β4 ln PF + β5 ln PK + ε.
                                     7.5. AUTOCORRELATION                                     146


                   F IGURE 7.6.1. Residuals of simple Nerlove model
          2
                                                                             Residuals
                                                            Quadratic fit to Residuals


         1.5




          1




         0.5




          0




        -0.5




          -1
               0   1      2      3        4     5      6        7          8         9   10



We have seen evidence that the extended model is preferred. So if it is in fact the
proper model, the simple model is misspecified. Let’s check if this misspecification
might induce autocorrelated errors.
    The Octave program GLS/NerloveAR.m estimates the simple Nerlove model, and
plots the residuals as a function of ln Q, and it calculates a Breusch-Godfrey test statis-
tic. The residual plot is in Figure 7.6.1 , and the test results are:

                                       Value        p-value
Breusch-Godfrey test                 34.930           0.000



Clearly, there is a problem of autocorrelated residuals.


    E XERCISE 7.6. Repeat the autocorrelation tests using the extended Nerlove model
(Equation ??) to see the problem is solved.
                                    7.5. AUTOCORRELATION                            147

    Klein model. Klein’s Model I is a simple macroeconometric model. One of the
equations in the model explains consumption (C) as a function of profits (P), both
current and lagged, as well as the sum of wages in the private sector (W p ) and wages
in the government sector (W g ). Have a look at the README file for this data set. This
gives the variable names and other information.
    Consider the model

                                                         p      g
                        Ct = α0 + α1 Pt + α2 Pt−1 + α3 (Wt +Wt ) + ε1t


The Octave program GLS/Klein.m estimates this model by OLS, plots the residuals,
and performs the Breusch-Godfrey test, using 1 lag of the residuals. The estimation
and test results are:



*********************************************************
OLS estimation results
Observations 21
R-squared 0.981008
Sigma-squared 1.051732


Results (Ordinary var-cov estimator)


                           estimate        st.err.           t-stat.     p-value
Constant                     16.237           1.303          12.464       0.000
Profits                        0.193          0.091           2.115       0.049
Lagged Profits                 0.090          0.091           0.992       0.335
Wages                          0.796          0.040           19.933      0.000
                                     7.5. AUTOCORRELATION                              148


                   F IGURE 7.6.2. OLS residuals, Klein consumption equation
                                          Regression residuals
          2
                                                                    Residuals

        1.5


          1


        0.5


          0


        -0.5


         -1


        -1.5


         -2


        -2.5
               0             5           10                 15     20            25




*********************************************************
                                       Value           p-value
Breusch-Godfrey test                   1.539               0.215



and the residual plot is in Figure 7.6.2. The test does not reject the null of nonautocor-
relatetd errors, but we should remember that we have only 21 observations, so power
is likely to be fairly low. The residual plot leads me to suspect that there may be auto-
correlation - there are some significant runs below and above the x-axis. Your opinion
may differ.
   Since it seems that there may be autocorrelation, lets’s try an AR(1) correction.
The Octave program GLS/KleinAR1.m estimates the Klein consumption equation as-
suming that the errors follow the AR(1) pattern. The results, with the Breusch-Godfrey
test for remaining autocorrelation are:
                                   7.5. AUTOCORRELATION                                149




*********************************************************
OLS estimation results
Observations 21
R-squared 0.967090
Sigma-squared 0.983171


Results (Ordinary var-cov estimator)


                        estimate          st.err.         t-stat.        p-value
Constant                   16.992            1.492         11.388           0.000
Profits                     0.215            0.096           2.232          0.039
Lagged Profits              0.076            0.094           0.806          0.431
Wages                       0.774            0.048         16.234           0.000


*********************************************************
                                     Value       p-value
Breusch-Godfrey test                 2.129           0.345



        • The test is farther away from the rejection region than before, and the residual
          plot is a bit more favorable for the hypothesis of nonautocorrelated residuals,
          IMHO. For this reason, it seems that the AR(1) correction might have im-
          proved the estimation.
        • Nevertheless, there has not been much of an effect on the estimated coeffi-
          cients nor on their estimated standard errors. This is probably because the
          estimated AR(1) coefficient is not very large (around 0.2)
                                     EXERCISES                                     150

      • The existence or not of autocorrelation in this model will be important later,
        in the section on simultaneous equations.


Exercises
                                                EXERCISES                         151

(1) Comparing the variances of the OLS and GLS estimators, I claimed that the fol-
      lowing holds:
(2)

                                                                         0
                                  Var(β̂) −Var(β̂GLS ) = AΣA


      Verify that this is true.
(3) Show that the GLS estimator can be defined as


                            β̂GLS = arg min(y − X β)0Σ−1 (y − X β)


(4) The limiting distribution of the OLS estimator with heteroscedasticity of unknown
      form is
                                 √       
                                            d
                                                         
                                  n β̂ − β → N 0, QX ΩQX ,
                                                   −1  −1


      where
                                                               
                                                    X 0 εε0 X
                                        lim E                       =Ω
                                        n→∞             n
      Explain why
                                                       n
                                          b = 1 ∑ x0 xt ε̂2
                                          Ω
                                              n t=1 t t
      is a consistent estimator of this matrix.
(5) Define the v − th autocovariance of a covariance stationary process mt , where
      E(mt = 0) as
                                         Γv = E (mt mt−v
                                                     0
                                                         ).

                       0 ) = Γ0 .
      Show that E (mt mt+v    v

(6) For the Nerlove model

                             j      j
                    lnC = β1 + β2 ln Q + β3 ln PL + β4 ln PF + β5 ln PK + ε
                                    EXERCISES                                 152

assume that V (εt |xt ) = α + αQ ln Q.


Exercises
(a) Calculate the FGLS estimator and interpret the estimation results.
(b) Test the transformed model to check whether it appears to satisfy homoscedas-
    ticity.
                                       CHAPTER 8


                               Stochastic regressors

   Up to now we have treated the regressors as fixed, which is clearly unrealistic.
Now we will assume they are random. There are several ways to think of the problem.
First, if we are interested in an analysis conditional on the explanatory variables, then
it is irrelevant if they are stochastic or not, since conditional on the values of they
regressors take on, they are nonstochastic, which is the case already considered.

      • In cross-sectional analysis it is usually reasonable to make the analysis con-
         ditional on the regressors.
      • In dynamic models, where yt may depend on yt−1 , a conditional analysis is
         not sufficiently general, since we may want to predict into the future many
         periods out, so we need to consider the behavior of β̂ and the relevant test
         statistics unconditional on X .

The model we’ll deal will involve a combination of the following assumptions
   Linearity: the model is a linear function of the parameter vector β0 :


                                       yt = xt0 β0 + εt ,


or in matrix form,
                                         y = X β0 + ε,
                                            0
where y is n × 1, X =       x1 x2   · · · xn , where xt is K × 1, and β0 and ε are con-
formable.
   Stochastic, linearly independent regressors
                                              153
                                         8.1. CASE 1                                  154

   X has rank K with probability 1
   X is stochastic
                          
   limn→∞ Pr 1n X 0 X = QX = 1, where QX is a finite positive definite matrix.
   Central limit theorem
              d
   n−1/2 X 0ε → N(0, QX σ20 )
   Normality (Optional): ε|X ∼ N(0, σ2 In ): ε is normally distributed
   Strongly exogenous regressors:


(8.0.1)                             E (εt |X) = 0, ∀t


   Weakly exogenous regressors:


(8.0.2)                             E(εt |xt ) = 0, ∀t


   In both cases, xt0 β is the conditional mean of yt given xt : E(yt |xt ) = xt0 β




                                        8.1. Case 1

   Normality of ε, strongly exogenous regressors
   In this case,
                                  β̂ = β0 + (X 0 X )−1 X 0ε


                         E (β̂|X ) = β0 + (X 0 X )−1 X 0 E (ε|X )

                                     = β0


and since this holds for all X , E(β̂) = β, unconditional on X . Likewise,

                                                              
                                 β̂|X ∼ N β, (X 0X )−1 σ20
                                             8.2. CASE 2                             155

       • If the density of X is dµ(X ), the marginal density of β̂ is obtained by mul-
         tiplying the conditional density by dµ(X ) and integrating over X . Doing this
         leads to a nonnormal density for β̂, in small samples.
       • However, conditional on X , the usual test statistics have the t, F and χ 2
         distributions. Importantly, these distributions don’t depend on X , so when
         marginalizing to obtain the unconditional distribution, nothing changes. The
         tests are valid in small samples.
       • Summary: When X is stochastic but strongly exogenous and ε is normally
         distributed:
          (1) β̂ is unbiased
          (2) β̂ is nonnormally distributed
          (3) The usual test statistics have the same distribution as with nonstochastic
              X.
          (4) The Gauss-Markov theorem still holds, since it holds conditionally on X ,
              and this is true for all X .
          (5) Asymptotic properties are treated in the next section.




                                        8.2. Case 2

   ε nonnormally distributed, strongly exogenous regressors
   The unbiasedness of β̂ carries through as before. However, the argument regarding
test statistics doesn’t hold, due to nonnormality of ε. Still, we have


                               β̂ = β0 + (X 0 X )−1 X 0 ε
                                          0 −1 0
                                           XX           Xε
                                  = β0 +
                                              n           n
                                          8.2. CASE 2                               156

Now
                                              −1
                                        X 0X         p
                                                     → Q−1
                                                        X
                                         n
by assumption, and
                                   X 0 ε n−1/2 X 0 ε p
                                        = √         →0
                                    n        n
since the numerator converges to a N(0, QX σ2 ) r.v. and the denominator still goes
to infinity. We have unbiasedness and the variance disappearing, so, the estimator is
consistent:
                                                p
                                           β̂ → β0 .

     Considering the asymptotic distribution
                                             
                         √           √ X 0 X −1 X 0 ε
                          n β̂ − β0 =   n
                                            n      n
                                        0 −1
                                        XX
                                     =         n−1/2 X 0 ε
                                          n

so
                              √        
                                          d         2
                               n β̂ − β0 → N(0, Q−1
                                                 X σ0 )

directly following the assumptions. Asymptotic normality of the estimator still holds.
Since the asymptotic results on all test statistics only require this, all the previous
asymptotic results on test statistics are also valid in this case.

       • Summary: Under strongly exogenous regressors, with ε normal or nonnor-
          mal, β̂ has the properties:
          (1) Unbiasedness
          (2) Consistency
          (3) Gauss-Markov theorem holds, since it holds in the previous case and
              doesn’t depend on normality.
          (4) Asymptotic normality
                        8.4. WHEN ARE THE ASSUMPTIONS REASONABLE?                   157

          (5) Tests are asymptotically valid, but are not valid in small samples.

                                        8.3. Case 3

   Weakly exogenous regressors
   An important class of models are dynamic models, where lagged dependent vari-
ables have an impact on the current value. A simple version of these models that
captures the important points is
                                                   p
                               yt =     zt0 α +   ∑ γsyt−s + εt
                                                  s=1
                                   = xt0 β + εt


where now xt contains lagged dependent variables. Clearly, even with E(εt |xt ) = 0, X
and ε are not uncorrelated, so one can’t show unbiasedness. For example,


                                       E (εt−1 xt ) 6= 0


since xt contains yt−1 (which is a function of εt−1 ) as an element.

      • This fact implies that all of the small sample properties such as unbiasedness,
         Gauss-Markov theorem, and small sample validity of test statistics do not
         hold in this case. Recall Figure 3.7.2. This is a case of weakly exogenous
         regressors, and we see that the OLS estimator is biased in this case.
      • Nevertheless, under the above assumptions, all asymptotic properties con-
         tinue to hold, using the same arguments as before.

                    8.4. When are the assumptions reasonable?

   The two assumptions we’ve added are
                               
    (1) limn→∞ Pr 1n X 0 X = QX = 1, a QX finite positive definite matrix.
                    d
     (2) n−1/2 X 0 ε → N(0, QX σ20 )
                     8.4. WHEN ARE THE ASSUMPTIONS REASONABLE?                          158

The most complicated case is that of dynamic models, since the other cases can be
treated as nested in this case. There exist a number of central limit theorems for de-
pendent processes, many of which are fairly technical. We won’t enter into details
(see Hamilton, Chapter 7 if you’re interested). A main requirement for use of standard
asymptotics for a dependent sequence

                                              1 n
                                     {st } = { ∑ zt }
                                              n t=1

to converge in probability to a finite limit is that zt be stationary, in some sense.

       • Strong stationarity requires that the joint distribution of the set


                                     {zt , zt+s , zt−q , ...}


         not depend on t.
       • Covariance (weak) stationarity requires that the first and second moments of
         this set not depend on t.
       • An example of a sequence that doesn’t satisfy this is an AR(1) process with a
         unit root (a random walk):


                                     xt = xt−1 + εt

                                     εt ∼ IIN(0, σ2)


         One can show that the variance of xt depends upon t in this case.

Stationarity prevents the process from trending off to plus or minus infinity, and pre-
vents cyclical behavior which would allow correlations between far removed zt znd zs
to be high. Draw a picture here.

       • In summary, the assumptions are reasonable when the stochastic conditioning
         variables have variances that are finite, and are not too strongly dependent.
              8.4. WHEN ARE THE ASSUMPTIONS REASONABLE?                    159

  The AR(1) model with unit root is an example of a case where the dependence
  is too strong for standard asymptotics to apply.
• The econometrics of nonstationary processes has been an active area of re-
  search in the last two decades. The standard asymptotics don’t apply in this
  case. This isn’t in the scope of this course.
                                      EXERCISES                                     160

Exercises
(1) Show that for two random variables A and B, if E(A|B) = 0, then E (A f (B)) = 0.
    How is this used in the Gauss-Markov theorem?
(2) If it possible for an AR(1) model for time series data, e.g., yt = 0 + 0.9yt−1 + εt
    satisfy weak exogeneity? Strong exogeneity? Discuss.
                                        CHAPTER 9


                                      Data problems

    In this section well consider problems associated with the regressor matrix: collinear-
ity, missing observation and measurement error.




                                      9.1. Collinearity

    Collinearity is the existence of linear relationships amongst the regressors. We can
always write
                            λ1 x 1 + λ 2 x 2 + · · · + λ K x K + v = 0

where xi is the ith column of the regressor matrix X , and v is an n × 1 vector. In the
case that there exists collinearity, the variation in v is relatively small, so that there is
an approximately exact linear relation between the regressors.

       • “relative” and “approximate” are imprecise, so it’s difficult to define when
         collinearilty exists.

In the extreme, if there are exact linear relationships (every element of v equal) then
ρ(X ) < K, so ρ(X 0X ) < K, so X 0 X is not invertible and the OLS estimator is not
uniquely defined. For example, if the model is


                                 yt = β1 + β2 x2t + β3 x3t + εt

                             x2t = α1 + α2 x3t
                                               161
                                     9.1. COLLINEARITY                                   162

then we can write


                       yt = β1 + β2 (α1 + α2 x3t ) + β3 x3t + εt

                            = β1 + β2 α1 + β2 α2 x3t + β3 x3t + εt

                            = (β1 + β2 α1 ) + (β2 α2 + β3 ) x3t

                            = γ1 + γ2 x3t + εt


       • The γ0 s can be consistently estimated, but since the γ0 s define two equations in
         three β0 s, the β0 s can’t be consistently estimated (there are multiple values of β
         that solve the fonc). The β0 s are unidentified in the case of perfect collinearity.
       • Perfect collinearity is unusual, except in the case of an error in construction
         of the regressor matrix, such as including the same regressor twice.

Another case where perfect collinearity may be encountered is with models with dummy
variables, if one is not careful. Consider a model of rental price (y i ) of an apartment.
This could depend factors such as size, quality etc., collected in x i , as well as on the
location of the apartment. Let Bi = 1 if the ith apartment is in Barcelona, Bi = 0 other-
wise. Similarly, define Gi , Ti and Li for Girona, Tarragona and Lleida. One could use
a model such as


                     yi = β1 + β2 Bi + β3 Gi + β4 Ti + β5 Li + x0i γ + εi


In this model, Bi + Gi + Ti + Li = 1, ∀i, so there is an exact relationship between these
variables and the column of ones corresponding to the constant. One must either drop
the constant, or one of the qualitative variables.


   9.1.1. A brief aside on dummy variables. Introduce a brief discussion of dummy
variables here.
                                   9.1. COLLINEARITY                                   163


                  F IGURE 9.1.1. s(β) when there is no collinearity

                                                                          60
                                                                          55
                                                                          50
                                                                          45
                                                                          40
                                                                     6    35
                                                                          30
                                                                          25
                                                                     4    20
                                                                          15

                                                                     2


                                                                     0


                                                                     -2


                                                                     -4


                                                                     -6
                      -6     -4     -2         0     2    4      6




   9.1.2. Back to collinearity. The more common case, if one doesn’t make mis-
takes such as these, is the existence of inexact linear relationships, i.e., correlations
between the regressors that are less than one in absolute value, but not zero. The basic
problem is that when two (or more) variables move together, it is difficult to deter-
mine their separate influences. This is reflected in imprecise estimates, i.e., estimates
with high variances. With economic data, collinearity is commonly encountered, and
is often a severe problem.
   When there is collinearity, the minimizing point of the objective function that de-
fines the OLS estimator (s(β), the sum of squared errors) is relatively poorly defined.
This is seen in Figures 9.1.1 and 9.1.2.
   To see the effect of collinearity on variances, partition the regressor matrix as
                                           h         i
                                    X=         x W
                                         9.1. COLLINEARITY                                     164


                       F IGURE 9.1.2. s(β) when there is collinearity

                                                                                         100
                                                                                          90
                                                                                          80
                                                                                          70
                                                                                          60
                                                                                    6     50
                                                                                          40
                                                                                          30
                                                                                    4     20


                                                                                    2


                                                                                    0


                                                                                    -2


                                                                                    -4


                                                                                    -6
                         -6     -4        -2        0          2            4   6




where x is the first column of X (note: we can interchange the columns of X isf we like,
so there’s no loss of generality in considering the first column). Now, the variance of
β̂, under the classical assumptions, is

                                                          −1
                                      V (β̂) = X 0 X               σ2


Using the partition,                                                   
                                                   x0 x       x0W
                                     X 0X =                            
                                                   W 0x   W 0W
and following a rule for partitioned inversion,

                             −1                                  −1
                        X 0 X 1,1 =     x0 x − x0W (W 0W )−1W 0 x
                                                         01
                                                                 −1
                                          0            0      0
                                     = x In −W (W W ) W x
                                                        −1
                                     =     ESSx|W
                                      9.1. COLLINEARITY                                 165

where by ESSx|W we mean the error sum of squares obtained from the regression


                                        x = W λ + v.


Since
                                    R2 = 1 − ESS/T SS,

we have
                                    ESS = T SS(1 − R2 )

so the variance of the coefficient corresponding to x is

                                                     σ2
                                 V (β̂x ) =
                                              T SSx (1 − R2x|W )

We see three factors influence the variance of this coefficient. It will be high if



     (1) σ2 is large
     (2) There is little variation in x. Draw a picture here.
     (3) There is a strong linear relationship between x and the other regressors, so
            that W can explain the movement in x well. In this case, R2x|W will be close to
            1. As R2x|W → 1,V (β̂x ) → ∞.



The last of these cases is collinearity.
    Intuitively, when there are strong linear relations between the regressors, it is dif-
ficult to determine the separate influence of the regressors on the dependent variable.
This can be seen by comparing the OLS objective function in the case of no correlation
between regressors with the objective function with correlation between the regressors.
See the figures nocollin.ps (no correlation) and collin.ps (correlation), available on the
web site.
                                     9.1. COLLINEARITY                                  166

   9.1.3. Detection of collinearity. The best way is simply to regress each explana-
tory variable in turn on the remaining regressors. If any of these auxiliary regressions
has a high R2 , there is a problem of collinearity. Furthermore, this procedure identifies
which parameters are affected.

       • Sometimes, we’re only interested in certain parameters. Collinearity isn’t a
           problem if it doesn’t affect what we’re interested in estimating.

An alternative is to examine the matrix of correlations between the regressors. High
correlations are sufficient but not necessary for severe collinearity.
   Also indicative of collinearity is that the model fits well (high R2 ), but none of the
variables is significantly different from zero (e.g., their separate influences aren’t well
determined).
   In summary, the artificial regressions are the best approach if one wants to be
careful.



   9.1.4. Dealing with collinearity. More information
   Collinearity is a problem of an uninformative sample. The first question is: is all
the available information being used? Is more data available? Are there coefficient
restrictions that have been neglected? Picture illustrating how a restriction can solve
problem of perfect collinearity.
   Stochastic restrictions and ridge regression
   Supposing that there is no more data or neglected restrictions, one possibility is to
change perspectives, to Bayesian econometrics. One can express prior beliefs regard-
ing the coefficients using stochastic restrictions. A stochastic linear restriction would
be something of the form
                                        Rβ = r + v
                                     9.1. COLLINEARITY                                167

where R and r are as in the case of exact linear restrictions, but v is a random vector.
For example, the model could be


                                y = Xβ + ε

                               Rβ = r + v
                                                                 
                           ε             0   σ2 I            0n×q
                               ∼ N       ε n,                    
                           v                0         0q×n   σ2v Iq

This sort of model isn’t in line with the classical interpretation of parameters as con-
stants: according to this interpretation the left hand side of Rβ = r + v is constant
but the right is random. This model does fit the Bayesian perspective: we combine
information coming from the model and the data, summarized in


                                     y = Xβ + ε

                                     ε ∼ N(0, σ2ε In )


with prior beliefs regarding the distribution of the parameter, summarized in


                                      Rβ ∼ N(r, σ2v Iq )

Since the sample is random it is reasonable to suppose that E (εv0 ) = 0, which is the
last piece of information in the specification. How can you estimate using this model?
The solution is to treat the restrictions as artificial data. Write
                                                     
                                   y         X             ε
                                =             β+ 
                                   r         R             v

This model is heteroscedastic, since σ2ε 6= σ2v . Define the prior precision k = σε /σv .
This expresses the degree of belief in the restriction relative to the variability of the
                                                   9.1. COLLINEARITY                       168

data. Supposing that we specify k, then the model
                                                                                 
                                            y                  X                 ε
                                                =               β+               
                                            kr                kR                 kv

is homoscedastic and can be estimated by OLS. Note that this estimator is biased. It
is consistent, however, given that k is a fixed constant, even if the restriction is false
(this is in contrast to the case of false exact restrictions). To see this, note that there
are Q restrictions, where Q is the number of rows of R. As n → ∞, these Q artificial
observations have no weight in the objective function, so the estimator has the same
limiting objective function as the OLS estimator, and is therefore consistent.
     To motivate the use of stochastic restrictions, consider the expectation of the squared
length of β̂:
                                                     0                            
                                        −1                                −1
E (β̂ β̂) = E
     0
                         β+ X X     0
                                                Xε 0
                                                              β+ X X   0
                                                                                 Xε
                                                                                  0

                                                                       
          = β0 β + E ε0 X (X 0X )−1 (X 0 X )−1 X 0 ε
                                        −1
          = β0 β + Tr X 0 X                   σ2
                              K
          = β β + σ ∑ λi (the trace is the sum of eigenvalues)
                0         2
                              i=1

          > β β + λmax(X 0 X −1 ) σ2 (the eigenvalues are all positive, sinceX 0 X is p.d.
                0



so
                                                                           σ2
                                            E (β̂0 β̂) > β0 β +
                                                                       λmin(X 0 X)
where λmin(X 0 X) is the minimum eigenvalue of X 0 X (which is the inverse of the maxi-
mum eigenvalue of (X 0 X )−1 ). As collinearity becomes worse and worse, X 0 X becomes
more nearly singular, so λmin(X 0 X) tends to zero (recall that the determinant is the prod-
uct of the eigenvalues) and E (β̂0 β̂) tends to infinite. On the other hand, β0 β is finite.
                                            9.1. COLLINEARITY                                     169

    Now considering the restriction IK β = 0 + v. With this restriction the model be-
comes                                                               
                                    y               X                ε
                                       =               β+           
                                    0               kIK             kv
and the estimator is
                                                            −1                           
                                h               i         X          h            i       y
               β̂ridge =  X 0 kIK                                    X 0 IK              
                                                        kIK                               0
                                               −1
                       =     X 0 X + k2 IK           X 0y


This is the ordinary ridge regression estimator. The ridge regression estimator can be
seen to add k2 IK , which is nonsingular, to X 0 X , which is more and more nearly singular
as collinearity becomes worse and worse. As k → ∞, the restrictions tend to β = 0,
that is, the coefficients are shrunken toward zero. Also, the estimator tends to

                                             −1                   −1            X 0y
                β̂ridge = X 0 X + k2 IK            X 0 y → k2 IK         X 0y =        →0
                                                                                  k2

so β̂0ridge β̂ridge → 0. This is clearly a false restriction in the limit, if our original model
is at al sensible.
    There should be some amount of shrinkage that is in fact a true restriction. The
problem is to determine the k such that the restriction is correct. The interest in
ridge regression centers on the fact that it can be shown that there exists a k such
that MSE(β̂ridge ) < β̂OLS . The problem is that this k depends on β and σ2 , which are
unknown.
    The ridge trace method plots β̂0ridge β̂ridge as a function of k, and chooses the value
of k that “artistically” seems appropriate (e.g., where the effect of increasing k dies
off). Draw picture here. This means of choosing k is obviously subjective. This is not
                                9.2. MEASUREMENT ERROR                                 170

a problem from the Bayesian perspective: the choice of k reflects prior beliefs about
the length of β.
   In summary, the ridge estimator offers some hope, but it is impossible to guarantee
that it will outperform the OLS estimator. Collinearity is a fact of life in econometrics,
and there is no clear solution to the problem.



                               9.2. Measurement error

   Measurement error is exactly what it says, either the dependent variable or the re-
gressors are measured with error. Thinking about the way economic data are reported,
measurement error is probably quite prevalent. For example, estimates of growth of
GDP, inflation, etc. are commonly revised several times. Why should the last revision
necessarily be correct?


   9.2.1. Error of measurement of the dependent variable. Measurement errors
in the dependent variable and the regressors have important differences. First con-
sider error in measurement of the dependent variable. The data generating process is
presumed to be


                                   y∗ = X β + ε

                                    y = y∗ + v

                                    vt ∼ iid(0, σ2v )


where y∗ is the unobservable true dependent variable, and y is what is observed. We
assume that ε and v are independent and that y∗ = X β + ε satisfies the classical as-
sumptions. Given this, we have


                                     y + v = Xβ + ε
                               9.2. MEASUREMENT ERROR                                 171

so


                                 y = Xβ + ε − v

                                     = Xβ + ω

                                ωt ∼ iid(0, σ2ε + σ2v )


       • As long as v is uncorrelated with X , this model satisfies the classical assump-
         tions and can be estimated by OLS. This type of measurement error isn’t a
         problem, then.




     9.2.2. Error of measurement of the regressors. The situation isn’t so good in
this case. The DGP is


                                   yt = xt∗0 β + εt

                                   xt = xt∗ + vt

                                   vt ∼ iid(0, Σv)


where Σv is a K × K matrix. Now X ∗ contains the true, unobserved regressors, and
X is what is observed. Again assume that v is independent of ε, and that the model
y = X ∗ β + ε satisfies the classical assumptions. Now we have


                                yt = (xt − vt )0 β + εt

                                    = xt0 β − vt0 β + εt

                                    = xt0 β + ωt
                                9.2. MEASUREMENT ERROR                             172

The problem is that now there is a correlation between xt and ωt , since

                                                                        
                       E (xt ωt ) = E (xt∗ + vt ) −vt0 β + εt

                                     = −Σv β


where
                                                     
                                        Σv = E vt vt0 .

Because of this correlation, the OLS estimator is biased and inconsistent, just as in
the case of autocorrelated errors with lagged dependent variables. In matrix notation,
write the estimated model as
                                            y = Xβ + ω

We have that
                                                  −1           
                                            X 0X           X 0y
                                 β̂ =
                                             n              n
and
                               −1
                         X 0X                         (X ∗0 +V 0 ) (X ∗ +V )
                    plim                    = plim
                          n                                     n
                                            = (QX ∗ + Σv )−1


since X ∗ and V are independent, and

                                     V 0V                  1 n
                              plim
                                      n
                                             = lim E         ∑ vt vt0
                                                           n t=1
                                             = Σv


      Likewise,
                                
                          X 0y                      (X ∗0 +V 0 ) (X ∗ β + ε)
                     plim               = plim
                           n                                   n
                                        = QX ∗ β
                                 9.3. MISSING OBSERVATIONS                           173

so
                                plimβ̂ = (QX ∗ + Σv )−1 QX ∗ β

So we see that the least squares estimator is inconsistent when the regressors are mea-
sured with error.

       • A potential solution to this problem is the instrumental variables (IV) estima-
         tor, which we’ll discuss shortly.



                                9.3. Missing observations

     Missing observations occur quite frequently: time series data may not be gath-
ered in a certain year, or respondents to a survey may not answer all questions. We’ll
consider two cases: missing observations on the dependent variable and missing ob-
servations on the regressors.


     9.3.1. Missing observations on the dependent variable. In this case, we have


                                           y = Xβ + ε


or                                                             
                                 y1             X1             ε1
                                     =            β+           
                                 y2             X2             ε2
where y2 is not observed. Otherwise, we assume the classical assumptions hold.

       • A clear alternative is to simply estimate using the compete observations


                                          y1 = X1 β + ε1


         Since these observations satisfy the classical assumptions, one could estimate
         by OLS.
                                    9.3. MISSING OBSERVATIONS                                 174

        • The question remains whether or not one could somehow replace the unob-
          served y2 by a predictor, and improve over OLS in some sense. Let ŷ2 be the
          predictor of y2 . Now




                             0    −1     0      
                          
                           X1         
                                       
                                    X        X       y
                     β̂ =      1        1  1 
                          
                           X2      X2 
                                            X2      ŷ2
                                0             −1  0              
                           =    X1 X1 + X20 X2      X1 y1 + X20 ŷ2


Recall that the OLS fonc are
                                                X 0 X β̂ = X 0 y

so if we regressed using only the first (complete) observations, we would have


                                            X10 X1 β̂1 = X10 y1.


Likewise, an OLS regression using only the second (filled in) observations would give


                                            X20 X2 β̂2 = X20 ŷ2 .


Substituting these into the equation for the overall combined estimator gives

                                                h                             i
                                          −1
              β̂ =        X10 X1 + X20 X2             X10 X1 β̂1 + X20 X2 β̂2
                                           −1                               −1 0
                 =        X10 X1 + X20 X2         X10 X1 β̂1 + X10 X1 + X20 X2    X2 X2 β̂2

                 ≡ Aβ̂1 + (IK − A)β̂2


where
                                                      −1 0
                                   A ≡ X10 X1 + X20 X2    X1 X1
                                9.3. MISSING OBSERVATIONS                              175

and we use

        0             −1 0                     −1  0                     
        X1 X1 + X20 X2    X2 X2 = X10 X1 + X20 X2      X1 X1 + X20 X2 − X10 X1
                                                       −1 0
                                 = IK − X10 X1 + X20 X2    X1 X1

                                 = IK − A.


   Now,
                                                          
                              E (β̂) = Aβ + (IK − A)E β̂2
                                    
and this will be unbiased only if E β̂2 = β.


      • The conclusion is the this filled in observations alone would need to define an
        unbiased estimator. This will be the case only if


                                     ŷ2 = X2 β + ε̂2


        where ε̂2 has mean zero. Clearly, it is difficult to satisfy this condition without
        knowledge of β.
      • Note that putting ŷ2 = ȳ1 does not satisfy the condition and therefore leads to
        a biased estimator.




   E XERCISE 13. Formally prove this last statement.




      • One possibility that has been suggested (see Greene, page 275) is to estimate
        β using a first round estimation using only the complete observations


                                  β̂1 = (X10 X1 )−1 X10 y1
                                9.3. MISSING OBSERVATIONS                            176

         then use this estimate, β̂1 ,to predict y2 :


                                 ŷ2 = X2 β̂1

                                     = X2 (X10 X1 )−1 X10 y1


         Now, the overall estimate is a weighted average of β̂1 and β̂2 , just as above,
         but we have


                                β̂2 = (X20 X2 )−1 X20 ŷ2

                                     = (X20 X2 )−1 X20 X2 β̂1

                                     = β̂1


         This shows that this suggestion is completely empty of content: the final esti-
         mator is the same as the OLS estimator using only the complete observations.




   9.3.2. The sample selection problem. In the above discussion we assumed that
the missing observations are random. The sample selection problem is a case where
the missing observations are not random. Consider the model


                                       yt∗ = xt0 β + εt


which is assumed to satisfy the classical assumptions. However, yt∗ is not always
observed. What is observed is yt defined as


                                     yt = yt∗ if yt∗ ≥ 0


Or, in other words, yt∗ is missing when it is less than zero.
                                 9.3. MISSING OBSERVATIONS                                 177


                         F IGURE 9.3.1. Sample selection bias
        25
                                                                              Data
                                                                         True Line
                                                                        Fitted Line
        20



        15



        10



         5



         0



        -5



       -10
             0          2                 4                6            8             10




   The difference in this case is that the missing values are not random: they are
correlated with the xt . Consider the case


                                          y∗ = x + ε


with V (ε) = 25, but using only the observations for which y∗ > 0 to estimate. Figure
9.3.1 illustrates the bias. The Octave program is sampsel.m


   9.3.3. Missing observations on the regressors. Again the model is
                                                               
                                 y1               X1           ε1
                                     =              β+         
                                 y2               X2           ε2

but we assume now that each row of X2 has an unobserved component(s). Again,
one could just estimate using the complete observations, but it may seem frustrating
to have to drop observations simply because of a single missing variable. In general,
                              9.3. MISSING OBSERVATIONS                                 178

if the unobserved X2 is replaced by some prediction, X2∗ , then we are in the case of
errors of observation. As before, this means that the OLS estimator is biased when
X2∗ is used instead of X2 . Consistency is salvaged, however, as long as the number of
missing observations doesn’t increase with n.

      • Including observations that have missing values replaced by ad hoc values
        can be interpreted as introducing false stochastic restrictions. In general, this
        introduces bias. It is difficult to determine whether MSE increases or de-
        creases. Monte Carlo studies suggest that it is dangerous to simply substitute
        the mean, for example.
      • In the case that there is only one regressor other than the constant, subtitution
        of x̄ for the missing xt does not lead to bias. This is a special case that doesn’t
        hold for K > 2.

   E XERCISE 14. Prove this last statement.

      • In summary, if one is strongly concerned with bias, it is best to drop observa-
        tions that have missing components. There is potential for reduction of MSE
        through filling in missing elements with intelligent guesses, but this could
        also increase MSE.
                                        EXERCISES                                  179

Exercises
(1) Consider the Nerlove model

                          j     j
                  lnC = β1 + β2 ln Q + β3 ln PL + β4 ln PF + β5 ln PK + ε


   When this model is estimated by OLS, some coefficients are not significant. This
   may be due to collinearity.


   Exercises
   (a) Calculate the correlation matrix of the regressors.
   (b) Perform artificial regressions to see if collinearity is a problem.
   (c) Apply the ridge regression estimator.


       Exercises
            (i) Plot the ridge trace diagram
         (ii) Check what happens as k goes to zero, and as k becomes very large.
                                    CHAPTER 10


                   Functional form and nonnested tests

   Though theory often suggests which conditioning variables should be included,
and suggests the signs of certain derivatives, it is usually silent regarding the func-
tional form of the relationship between the dependent variable and the regressors. For
example, considering a cost function, one could have a Cobb-Douglas model

                                            β     β
                                  c = Aw1 1 w2 2 qβq eε


This model, after taking logarithms, gives


                      ln c = β0 + β1 ln w1 + β2 ln w2 + βq ln q + ε


where β0 = ln A. Theory suggests that A > 0, β1 > 0, β2 > 0, β3 > 0. This model isn’t
compatible with a fixed cost of production since c = 0 when q = 0. Homogeneity of
degree one in input prices suggests that β1 + β2 = 1, while constant returns to scale
implies βq = 1.
   While this model may be reasonable in some cases, an alternative

                        √             √        √        √
                         c = β 0 + β 1 w1 + β 2 w2 + β q q + ε

                                      √
may be just as plausible. Note that       x and ln(x) look quite alike, for certain values
of the regressors, and up to a linear transformation, so it may be difficult to choose
between these models.




                                            180
                            10.1. FLEXIBLE FUNCTIONAL FORMS                                 181

    The basic point is that many functional forms are compatible with the linear-in-
parameters model, since this model can incorporate a wide variety of nonlinear trans-
formations of the dependent variable and the regressors. For example, suppose that
g(·) is a real valued function and that x(·) is a K− vector-valued function. The follow-
ing model is linear in the parameters but nonlinear in the variables:


                                     xt = x(zt )

                                     yt = xt0 β + εt


There may be P fundamental conditioning variables zt , but there may be K regressors,
where K may be smaller than, equal to or larger than P. For example, xt could include
squares and cross products of the conditioning variables in zt .




                            10.1. Flexible functional forms

    Given that the functional form of the relationship between the dependent variable
and the regressors is in general unknown, one might wonder if there exist parametric
models that can closely approximate a wide variety of functional relationships. A
“Diewert-Flexible” functional form is defined as one such that the function, the vector
of first derivatives and the matrix of second derivatives can take on an arbitrary value
at a single data point. Flexibility in this sense clearly requires that there be at least

                                                
                              K = 1 + P + P2 − P /2 + P


free parameters: one for each independent effect that we wish to model.
    Suppose that the model is
                                       y = g(x) + ε
                              10.1. FLEXIBLE FUNCTIONAL FORMS                            182

A second-order Taylor’s series expansion (with remainder term) of the function g(x)
about the point x = 0 is

                                                       x0 D2x g(0)x
                          g(x) = g(0) + x0 Dx g(0) +                +R
                                                             2

Use the approximation, which simply drops the remainder term, as an approximation
to g(x) :
                                                              x0 D2x g(0)x
                        g(x) ≃ gK (x) = g(0) + x0 Dx g(0) +
                                                                    2
As x → 0, the approximation becomes more and more exact, in the sense that g K (x) →
g(x), Dx gK (x) → Dx g(x) and D2x gK (x) → D2x g(x). For x = 0, the approximation is
exact, up to the second order. The idea behind many flexible functional forms is to
note that g(0), Dx g(0) and D2x g(0) are all constants. If we treat them as parameters, the
approximation will have exactly enough free parameters to approximate the function
g(x), which is of unknown form, exactly, up to second order, at the point x = 0. The
model is
                                 gK (x) = α + x0 β + 1/2x0 Γx

so the regression model to fit is


                                  y = α + x0 β + 1/2x0 Γx + ε


       • While the regression model has enough free parameters to be Diewert-flexible,
            the question remains: is plimα̂ = g(0)? Is plimβ̂ = Dx g(0)? Is plimΓ̂ =
            D2x g(0)?
       • The answer is no, in general. The reason is that if we treat the true values
            of the parameters as these derivatives, then ε is forced to play the part of the
            remainder term, which is a function of x, so that x and ε are correlated in this
            case. As before, the estimator is biased in this case.
                            10.1. FLEXIBLE FUNCTIONAL FORMS                               183

      • A simpler example would be to consider a first-order T.S. approximation to a
         quadratic function. Draw picture.
      • The conclusion is that “flexible functional forms” aren’t really flexible in a
         useful statistical sense, in that neither the function itself nor its derivatives are
         consistently estimated, unless the function belongs to the parametric family
         of the specified functional form. In order to lead to consistent inferences, the
         regression model must be correctly specified.




   10.1.1. The translog form. In spite of the fact that FFF’s aren’t really flexible for
the purposes of econometric estimation and inference, they are useful, and they are
certainly subject to less bias due to misspecification of the functional form than are
many popular forms, such as the Cobb-Douglas or the simple linear in the variables
model. The translog model is probably the most widely used FFF. This model is as
above, except that the variables are subjected to a logarithmic tranformation. Also, the
expansion point is usually taken to be the sample mean of the data, after the logarithmic
transformation. The model is defined by


                              y = ln(c)
                                      
                                      z
                              x = ln
                                      z̄
                                  = ln(z) − ln(z̄)

                              y = α + x0 β + 1/2x0 Γx + ε
                             10.1. FLEXIBLE FUNCTIONAL FORMS                             184

In this presentation, the t subscript that distinguishes observations is suppressed for
simplicity. Note that

                    ∂y
                       = β + Γx
                    ∂x
                         ∂ ln(c)
                       =         (the other part of x is constant)
                         ∂ ln(z)
                              ∂c z
                         =
                              ∂z c

which is the elasticity of c with respect to z. This is a convenient feature of the translog
model. Note that at the means of the conditioning variables, z̄, x = 0, so

                                          ∂y
                                                  =β
                                          ∂x z=z̄

so the β are the first-order elasticities, at the means of the data.
    To illustrate, consider that y is cost of production:


                                          y = c(w, q)


where w is a vector of input prices and q is output. We could add other variables by
extending q in the obvious manner, but this is supressed for simplicity. By Shephard’s
lemma, the conditional factor demands are

                                               ∂c(w, q)
                                          x=
                                                 ∂w

and the cost shares of the factors are therefore

                                          wx ∂c(w, q) w
                                     s=      =
                                           c   ∂w c
                            10.1. FLEXIBLE FUNCTIONAL FORMS                                     185

which is simply the vector of elasticities of cost with respect to input prices. If the cost
function is modeled using a translog function, we have
                                                                                         
                                                 h            i       Γ11 Γ12           x
            ln(c) = α + x0 β + z0 δ + 1/2 x0 z                                           
                                                                      Γ012   Γ22        z

                    = α + x0 β + z0 δ + 1/2x0 Γ11 x + x0 Γ12 z + 1/2z2 γ22


where x = ln(w/w̄) (element-by-element division) and z = ln(q/q̄), and
                                                                 
                                                 γ11 γ12
                                 Γ11 =                           
                                            γ12 γ22
                                               
                                            γ13
                                 Γ12    =      
                                            γ23
                                 Γ22 = γ33 .


Note that symmetry of the second derivatives has been imposed.
    Then the share equations are just
                                                                     
                                        h                 i       x
                              s = β+        Γ11 Γ12                  
                                                                  z

Therefore, the share equations and the cost equation have parameters in common. By
pooling the equations together and imposing the (true) restriction that the parameters
of the equations be the same, we can gain efficiency.
    To illustrate in more detail, consider the case of two inputs, so
                                                     
                                                 x1
                                       x=            .
                                                 x2
                            10.1. FLEXIBLE FUNCTIONAL FORMS                                   186

In this case the translog model of the logarithmic cost function is

                                     γ11 2 γ22 2 γ33 2
   ln c = α + β1 x1 + β2 x2 + δz +      x +   x +   z + γ12 x1 x2 + γ13 x1 z + γ23 x2 z
                                      2 1   2 2   2

The two cost shares of the inputs are the derivatives of ln c with respect to x 1 and x2 :


                            s1 = β1 + γ11 x1 + γ12 x2 + γ13 z

                            s2 = β2 + γ12 x1 + γ22 x2 + γ13 z


    Note that the share equations and the cost equation have parameters in common.
One can do a pooled estimation of the three equations at once, imposing that the pa-
rameters are the same. In this way we’re using more observations and therefore more
information, which will lead to imporved efficiency. Note that this does assume that
the cost equation is correctly specified (i.e., not an approximation), since otherwise the
derivatives would not be the true derivatives of the log cost function, and would then
be misspecified for the shares. To pool the equations, write the model in matrix form
(adding in error terms)
                                                                              
                                                                            α
                                                                               
                                                                               
                                                                           β1 
                                                                               
                                                                               
                                                                           β 
                                                                           2 
                                                                               
                                                                           
                                                                           δ           
                                     x21   x22   z2                            
       ln c           1 x 1 x2 z                      x1 x2   x1 z x 2 z             ε 1
                                  2     2     2                        γ11 
                                                                                        
                                                                                   
    s1       = 0 1      0   0 x1 0            0    x2      z    0            +  ε2 
                                                                      γ           
                                                                           22 
     s2           0 0      1   0 0         x2 0       x1      0    z                ε3
                                                                           γ33 
                                                                               
                                                                               
                                                                           γ 
                                                                           12 
                                                                               
                                                                               
                                                                           γ13 
                                                                               
                                                                            γ23
                           10.1. FLEXIBLE FUNCTIONAL FORMS                          187

   This is one observation on the three equations. With the appropriate notation, a
single observation can be written as


                                       yt = Xt θ + εt


The overall model would stack n observations on the three equations for a total of 3n
observations:                                               
                             y1   X1    ε1 
                                            
                             y2   X2    ε2 
                                            
                             .  =  . θ+ . 
                             ..   ..    .. 
                                            
                                            
                               yn     Xn      εn
Next we need to consider the errors. For observation t the errors can be placed in a
vector                                                
                                                 ε1t
                                                 
                                                 
                                       εt =  ε2t 
                                                 
                                              ε3t
   First consider the covariance matrix of this vector: the shares are certainly corre-
lated since they must sum to one. (In fact, with 2 shares the variances are equal and
the covariance is -1 times the variance. General notation is used to allow easy exten-
sion to the case of more than 2 inputs). Also, it’s likely that the shares and the cost
equation have different variances. Supposing that the model is covariance stationary,
the variance of εt won0 t depend upon t:
                                                                    
                                               σ11 σ12 σ13
                                                                  
                                                                  
                          Varεt = Σ0 =  ·             σ22     σ23 
                                                                  
                                         ·             ·       σ33

Note that this matrix is singular, since the shares sum to 1. Assuming that there is no
autocorrelation, the overall covariance matrix has the seemingly unrelated regressions
                          10.1. FLEXIBLE FUNCTIONAL FORMS                         188

(SUR) structure.
                               
                           ε1 
                               
                           ε2 
                               
                      Var  .  = Σ
                           .. 
                               
                               
                             εn
                                                                  
                                       Σ0      0      ···    0  
                                                      ..     .. 
                                       0       Σ0        .    . 
                                                                
                                    =  .                        
                                       ..      ..
                                                  .          0 
                                                                
                                         0      ··· 0         Σ0
                                    = In ⊗ Σ0


where the symbol ⊗ indicates the Kronecker product. The Kronecker product of two
matrices A and B is
                                                                  
                              a11 B a12 B · · ·        a1q B 
                                                       ..     
                              a21 B . . .               .     
                                                              
                       A⊗B =  .                               .
                              ..                              
                                                              
                                                              
                                a pq B · · ·            a pq B

   10.1.2. FGLS estimation of a translog model. So, this model has heteroscedas-
ticity and autocorrelation, so OLS won’t be efficient. The next question is: how do
we estimate efficiently using FGLS? FGLS is based upon inverting the estimated error
covariance Σ̂. So we need to estimate Σ.
   An asymptotically efficient procedure is (supposing normality of the errors)




    (1) Estimate each equation by OLS
                           10.1. FLEXIBLE FUNCTIONAL FORMS                                189

(2) Estimate Σ0 using
                                                1 n
                                        Σ̂0 =     ∑ ε̂t ε̂t0
                                                n t=1
(3) Next we need to account for the singularity of Σ0 . It can be shown that Σ̂0 will
         be singular when the shares sum to one, so FGLS won’t work. The solution
         is to drop one of the share equations, for example the second. The model
         becomes
                                                                            
                                                                           α
                                                                              
                                                                              
                                                                          β1 
                                                                              
                                                                              
                                                                          β 
                                                                            2 
                                                                              
                                                                          δ 
                                                                              
                                                                               
                                  x21     x22   z2                            
    ln c           1 x 1 x2 z     2       2     2     x1 x2    x1 z x2 z  γ11    ε1
          =                                                               +    
                                                                              
    s1             0 1    0   0 x1 0            0     x2       z    0     γ22    ε2
                                                                              
                                                                              
                                                                          γ33 
                                                                              
                                                                              
                                                                          γ 
                                                                          12 
                                                                              
                                                                              
                                                                           γ
                                                                          13 
                                                                              
                                                                           γ23

         or in matrix notation for the observation:


                                        yt∗ = Xt∗ θ + εt∗


         and in stacked notation for all observations we have the 2n observations:
                                                     
                            y1   X1              ε1 
                                ∗           ∗           ∗
                                                     
                            y∗   X ∗             ε∗ 
                            2   2                2 
                            .  =  . θ+ . 
                            ..   ..              .. 
                                                     
                                                     
                               yn
                                ∗         Xn∗          εn
                                                        ∗
                     10.1. FLEXIBLE FUNCTIONAL FORMS                           190

   or, finally in matrix notation for all observations:


                               y∗ = X ∗ θ + ε ∗


   Considering the error covariance, we can define
                                                   
                                               ε1
                            Σ∗0 = Var              
                                               ε2
                            Σ∗ = In ⊗ Σ∗0


   Define Σ̂∗0 as the leading 2 × 2 block of Σ̂0 , and form


                                Σ̂∗ = In ⊗ Σ̂∗0 .


   This is a consistent estimator, following the consistency of OLS and applying
   a LLN.
(4) Next compute the Cholesky factorization

                                               −1
                             P̂0 = Chol Σ̂∗0


   (I am assuming this is defined as an upper triangular matrix, which is consis-
   tent with the way Octave does it) and the Cholesky factorization of the overall
   covariance matrix of the 2 equation model, which can be calculated as


                           P̂ = Chol Σ̂∗ = In ⊗ P̂0


(5) Finally the FGLS estimator can be calculated by applying OLS to the trans-
   formed model
                                                  ˆ0
                            P̂0 y∗ = P̂0 X ∗ θ + ˆPε∗
                           10.1. FLEXIBLE FUNCTIONAL FORMS                         191

        or by directly using the GLS formula
                                                     −1                −1 ∗
                                                −1 ∗
                       θ̂FGLS = X     ∗0
                                           Σ̂∗0   X           X ∗0 Σ̂∗0      y


            It is equivalent to transform each observation individually:


                                   P̂00 y∗y = P̂00 Xt∗ θ + P̂00 ε∗


        and then apply OLS. This is probably the simplest approach.

A few last comments.

    (1) We have assumed no autocorrelation across time. This is clearly restrictive.
        It is relatively simple to relax this, but we won’t go into it here.
    (2) Also, we have only imposed symmetry of the second derivatives. Another
        restriction that the model should satisfy is that the estimated shares should
        sum to 1. This can be accomplished by imposing


                              β1 + β 2 = 1
                                 3
                                ∑ γi j = 0, j = 1, 2, 3.
                                i=1

        These are linear parameter restrictions, so they are easy to impose and will
        improve efficiency if they are true.
    (3) The estimation procedure outlined above can be iterated. That is, estimate
        θ̂FGLS as above, then re-estimate Σ∗0 using errors calculated as


                                       ε̂ = y − X θ̂FGLS


            These might be expected to lead to a better estimate than the estimator
        based on θ̂OLS , since FGLS is asymptotically more efficient. Then re-estimate
        θ using the new estimated error covariance. It can be shown that if this is
                         10.2. TESTING NONNESTED HYPOTHESES                         192

         repeated until the estimates don’t change (i.e., iterated to convergence) then
         the resulting estimator is the MLE. At any rate, the asymptotic properties of
         the iterated and uniterated estimators are the same, since both are based upon
         a consistent estimator of the error covariance.



                        10.2. Testing nonnested hypotheses

   Given that the choice of functional form isn’t perfectly clear, in that many pos-
sibilities exist, how can one choose between forms? When one form is a parametric
restriction of another, the previously studied tests such as Wald, LR, score or qF are
all possibilities. For example, the Cobb-Douglas model is a parametric restriction of
the translog: The translog is


                                yt = α + xt0 β + 1/2xt0 Γxt + ε


where the variables are in logarithms, while the Cobb-Douglas is


                                      yt = α + xt0 β + ε


so a test of the Cobb-Douglas versus the translog is simply a test that Γ = 0.
   The situation is more complicated when we want to test non-nested hypotheses. If
the two functional forms are linear in the parameters, and use the same transformation
of the dependent variable, then they may be written as


                                   M1 : y = X β + ε

                                       εt ∼ iid(0, σ2ε )

                                   M2 : y = Zγ + η

                                        η ∼ iid(0, σ2η )
                          10.2. TESTING NONNESTED HYPOTHESES                          193

We wish to test hypotheses of the form: H0 : Mi is correctly specified versus HA : Mi is
misspecified, for i = 1, 2.


       • One could account for non-iid errors, but we’ll suppress this for simplicity.
       • There are a number of ways to proceed. We’ll consider the J test, proposed
         by Davidson and MacKinnon, Econometrica (1981). The idea is to artificially
         nest the two models, e.g.,


                                 y = (1 − α)X β + α(Zγ) + ω


         If the first model is correctly specified, then the true value of α is zero. On
         the other hand, if the second model is correctly specified then α = 1.
            – The problem is that this model is not identified in general. For example,
              if the models share some regressors, as in



                              M1 : yt = β1 + β2 x2t + β3 x3t + εt

                              M2 : yt = γ1 + γ2 x2t + γ3 x4t + ηt


then the composite model is


      yt = (1 − α)β1 + (1 − α)β2 x2t + (1 − α)β3 x3t + αγ1 + αγ2 x2t + αγ3 x4t + ωt


Combining terms we get


   yt = ((1 − α)β1 + αγ1 ) + ((1 − α)β2 + αγ2 ) x2t + (1 − α)β3 x3t + αγ3 x4t + ωt

       = δ1 + δ2 x2t + δ3 x3t + δ4 x4t + ωt


The four δ0 s are consistently estimable, but α is not, since we have four equations in 7
unknowns, so one can’t test the hypothesis that α = 0.
                         10.2. TESTING NONNESTED HYPOTHESES                             194

   The idea of the J test is to substitute γ̂ in place of γ. This is a consistent estimator
supposing that the second model is correctly specified. It will tend to a finite probabil-
ity limit even if the second model is misspecified. Then estimate the model


                            y = (1 − α)X β + α(Zγ̂) + ω

                                       = X θ + αŷ + ω


where ŷ = Z(Z 0 Z)−1 Z 0 y = PZ y. In this model, α is consistently estimable, and one
                                                                          p
can show that, under the hypothesis that the first model is correct, α → 0 and that the
ordinary t -statistic for α = 0 is asymptotically normal:

                                          α̂ a
                                   t=         ∼ N(0, 1)
                                         σ̂α̂
                                                              p
       • If the second model is correctly specified, then t → ∞, since α̂ tends in prob-
         ability to 1, while it’s estimated standard error tends to zero. Thus the test
         will always reject the false null model, asymptotically, since the statistic will
         eventually exceed any critical value with probability one.
       • We can reverse the roles of the models, testing the second against the first.
       • It may be the case that neither model is correctly specified. In this case,
         the test will still reject the null hypothesis, asymptotically, if we use critical
         values from the N(0, 1) distribution, since as long as α̂ tends to something
                                   p
         different from zero, |t| → ∞. Of course, when we switch the roles of the
         models the other will also be rejected asymptotically.
       • In summary, there are 4 possible outcomes when we test two models, each
         against the other. Both may be rejected, neither may be rejected, or one of the
         two may be rejected.
                 10.2. TESTING NONNESTED HYPOTHESES                          195

• There are other tests available for non-nested models. The J− test is simple
  to apply when both models are linear in the parameters. The P-test is similar,
  but easier to apply when M1 is nonlinear.
• The above presentation assumes that the same transformation of the depen-
  dent variable is used by both models. MacKinnon, White and Davidson,
  Journal of Econometrics, (1983) shows how to deal with the case of different
  transformations.
• Monte-Carlo evidence shows that these tests often over-reject a correctly
  specified model. Can use bootstrap critical values to get better-performing
  tests.
                                         CHAPTER 11


                          Exogeneity and simultaneity

    Several times we’ve encountered cases where correlation between regressors and
the error term lead to biasedness and inconsistency of the OLS estimator. Cases in-
clude autocorrelation with lagged dependent variables and measurement error in the
regressors. Another important case is that of simultaneous equations. The cause is
different, but the effect is the same.




                             11.1. Simultaneous equations

    Up until now our model is
                                          y = Xβ + ε

where, for purposes of estimation we can treat X as fixed. This means that when esti-
mating β we condition on X . When analyzing dynamic models, we’re not interested in
conditioning on X , as we saw in the section on stochastic regressors. Nevertheless, the
OLS estimator obtained by treating X as fixed continues to have desirable asymptotic
properties even in that case.
                                             196
                               11.1. SIMULTANEOUS EQUATIONS                          197

    Simultaneous equations is a different prospect. An example of a simultaneous
equation system is a simple supply-demand system:


                                Demand: qt = α1 + α2 pt + α3 yt + ε1t

                            Supply: qt = β1 + β2 pt + ε2t
                                                  
                     ε1t  h        i        σ     σ
                E       ε ε        =  11 12 
                            1t  2t
                     ε2t                    ·     σ22
                                              ≡ Σ, ∀t


The presumption is that qt and pt are jointly determined at the same time by the in-
tersection of these equations. We’ll assume that yt is determined by some unrelated
process. It’s easy to see that we have correlation between regressors and errors. Solv-
ing for pt :


               α1 + α2 pt + α3 yt + ε1t = β1 + β2 pt + ε2t

                         β2 pt − α2 pt = α1 − β1 + α3 yt + ε1t − ε2t
                                            α1 − β 1   α3 yt   ε1t − ε2t
                                    pt =             +       +
                                            β2 − α 2 β2 − α 2 β2 − α 2

    Now consider whether pt is uncorrelated with ε1t :
                                                                         
                                   α1 − β 1   α3 yt   ε1t − ε2t
               E (pt ε1t ) = E              +       +                 ε1t
                                   β2 − α 2 β2 − α 2 β2 − α 2
                             σ11 − σ12
                           =
                              β2 − α 2

Because of this correlation, OLS estimation of the demand equation will be biased and
inconsistent. The same applies to the supply equation, for the same reason.
    In this model, qt and pt are the endogenous varibles (endogs), that are determined
within the system. yt is an exogenous variable (exogs). These concepts are a bit tricky,
                             11.1. SIMULTANEOUS EQUATIONS                             198

and we’ll return to it in a minute. First, some notation. Suppose we group together
current endogs in the vector Yt . If there are G endogs, Yt is G × 1. Group current and
lagged exogs, as well as lagged endogs in the vector Xt , which is K ×1. Stack the errors
of the G equations into the error vector Et . The model, with additional assumtions, can
be written as


                                    Yt0 Γ = Xt0 B + Et0

                                       Et ∼ N(0, Σ), ∀t

                                E (Et Es0 ) = 0,t 6= s


We can stack all n observations and write the model as


                                       Y Γ = XB + E

                                 E (X 0 E) = 0(K×G)

                                  vec(E) ∼ N(0, Ψ)


where                                                     
                             Y1 
                               0
                                           X1 
                                             0
                                                           E1 
                                                             0
                                                
                            Y0      X0      E0 
                            2       2       2 
                       Y =  . ,X =  . ,E =  . 
                            ..      ..      .. 
                                                
                                                
                             Yn0        Xn
                                         0        En
                                                   0


Y is n × G, X is n × K, and E is n × G.




        • This system is complete, in that there are as many equations as endogs.
        • There is a normality assumption. This isn’t necessary, but allows us to con-
          sider the relationship between least squares and ML estimators.
                                     11.2. EXOGENEITY                                  199

       • Since there is no autocorrelation of the Et ’s, and since the columns of E are
         individually homoscedastic, then
                                                            
                               σ11 In σ12 In · · · σ1G In 
                                                     ..     
                                        σ22 In        .     
                                                            
                       Ψ =                            .     
                                               . .    .     
                                                   .  .     
                                                            
                                ·                     σGG In
                            = In ⊗ Σ


       • X may contain lagged endogenous and exogenous variables. These variables
         are predetermined.
       • We need to define what is meant by “endogenous” and “exogenous” when
         classifying the current period variables.




                                    11.2. Exogeneity

   The model defines a data generating process. The model involves two sets of
variables, Yt and Xt , as well as a parameter vector
                              h                                           i0
                         θ=       vec(Γ)0    vec(B)0          vec∗ (Σ)0

                                                                             
       • In general, without additional restrictions, θ is a G2 + GK + G2 − G /2 +
         G dimensional vector. This is the parameter vector that were interested in
         estimating.
       • In principle, there exists a joint density function for Yt and Xt , which depends
         on a parameter vector φ. Write this density as


                                       ft (Yt , Xt |φ, It )
                                        11.2. EXOGENEITY                                 200

        where It is the information set in period t. This includes lagged Yt0 s and lagged
        Xt ’s of course. This can be factored into the density of Yt conditional on Xt
        times the marginal density of Xt :


                      ft (Yt , Xt |φ, It ) = ft (Yt |Xt , φ, It ) ft (Xt |φ, It )


        This is a general factorization, but is may very well be the case that not all
        parameters in φ affect both factors. So use φ1 to indicate elements of φ that
        enter into the conditional density and write φ2 for parameters that enter into
        the marginal. In general, φ1 and φ2 may share elements, of course. We have


                     ft (Yt , Xt |φ, It ) = ft (Yt |Xt , φ1 , It ) ft (Xt |φ2 , It )


      • Recall that the model is


                                        Yt0 Γ = Xt0 B + Et0

                                          Et ∼ N(0, Σ), ∀t

                                 E (Et Es0 ) = 0,t 6= s


Normality and lack of correlation over time imply that the observations are indepen-
dent of one another, so we can write the log-likelihood function as the sum of likeli-
hood contributions of each observation:
                                   n
            ln L(Y |θ, It ) =     ∑ ln ft (Yt , Xt |φ, It )
                                  t=1
                                   n
                            =     ∑ ln ( ft (Yt |Xt , φ1, It ) ft (Xt |φ2, It ))
                                  t=1
                                   n                                 n
                            =     ∑ ln ft (Yt |Xt , φ1, It ) + ∑ ln ft (Xt |φ2, It ) =
                                  t=1                              t=1
                                       11.2. EXOGENEITY                                  201

    D EFINITION 15 (Weak Exogeneity). Xt is weakly exogeneous for θ (the original
parameter vector) if there is a mapping from φ to θ that is invariant to φ 2 . More for-
mally, for an arbitrary (φ1 , φ2 ), θ(φ) = θ(φ1 ).


    This implies that φ1 and φ2 cannot share elements if Xt is weakly exogenous, since
φ1 would change as φ2 changes, which prevents consideration of arbitrary combina-
tions of (φ1 , φ2 ).
    Supposing that Xt is weakly exogenous, then the MLE of φ1 using the joint density
is the same as the MLE using only the conditional density
                                                  n
                          ln L(Y |X , θ, It ) = ∑ ln ft (Yt |Xt , φ1 , It )
                                                t=1

since the conditional likelihood doesn’t depend on φ2 . In other words, the joint and
conditional log-likelihoods maximize at the same value of φ1 .

        • With weak exogeneity, knowledge of the DGP of Xt is irrelevant for inference
          on φ1 , and knowledge of φ1 is sufficient to recover the parameter of interest,
          θ. Since the DGP of Xt is irrelevant, we can treat Xt as fixed in inference.
        • By the invariance property of MLE, the MLE of θ is θ(φ̂1 ),and this mapping
          is assumed to exist in the definition of weak exogeneity.
        • Of course, we’ll need to figure out just what this mapping is to recover θ̂ from
          φ̂1 . This is the famous identification problem.
        • With lack of weak exogeneity, the joint and conditional likelihood functions
          maximize in different places. For this reason, we can’t treat Xt as fixed in
          inference. The joint MLE is valid, but the conditional MLE is not.
        • In resume, we require the variables in Xt to be weakly exogenous if we are to
          be able to treat them as fixed in estimation. Lagged Yt satisfy the definition,
          since they are in the conditioning information set, e.g., Yt−1 ∈ It . Lagged
                                    11.3. REDUCED FORM                              202

         Yt aren’t exogenous in the normal usage of the word, since their values are
         determined within the model, just earlier on. Weakly exogenous variables
         include exogenous (in the normal sense) variables as well as all predetermined
         variables.


                                  11.3. Reduced form

   Recall that the model is



                                     Yt0 Γ = Xt0 B + Et0

                                   V (Et ) = Σ


This is the model in structural form.


   D EFINITION 16 (Structural form). An equation is in structural form when more
than one current period endogenous variable is included.


   The solution for the current period endogs is easy to find. It is


                                 Yt0 = Xt0 BΓ−1 + Et0 Γ−1

                                     = Xt0 Π +Vt0 =


Now only one current period endog appears in each equation. This is the reduced form.


   D EFINITION 17 (Reduced form). An equation is in reduced form if only one cur-
rent period endog is included.


   An example is our supply/demand system. The reduced form for quantity is ob-
tained by solving the supply equation for price and substituting into demand:
                                       11.3. REDUCED FORM                                 203



                                                                     
                                                      qt − β1 − ε2t
                          qt = α1 + α2                                    + α3 yt + ε1t
                                                           β2
               β2 qt − α2 qt = β2 α1 − α2 (β1 + ε2t ) + β2 α3 yt + β2 ε1t
                                      β2 α1 − α2 β1 β2 α3 yt    β2 ε1t − α2 ε2t
                          qt =                     +          +
                                         β2 − α 2    β2 − α 2      β2 − α 2
                                 = π11 + π21 yt +V1t


Similarly, the rf for price is


                   β1 + β2 pt + ε2t = α1 + α2 pt + α3 yt + ε1t

                      β2 pt − α2 pt = α1 − β1 + α3 yt + ε1t − ε2t
                                                 α1 − β 1   α3 yt   ε1t − ε2t
                                   pt =                   +       +
                                                 β2 − α 2 β2 − α 2 β2 − α 2
                                        = π12 + π22 yt +V2t


The interesting thing about the rf is that the equations individually satisfy the classical
assumptions, since yt is uncorrelated with ε1t and ε2t by assumption, and therefore
E (yt Vit ) = 0, i=1,2, ∀t. The errors of the rf are
                                                                   
                                             β2 ε1t −α2 ε2t
                                      V1t
                                        =  β2 −α2                  
                                             ε1t −ε2t
                                    V2t      β2 −α2

    The variance of V1t is
                                                                                 
                                            β2 ε1t − α2 ε2t        β2 ε1t − α2 ε2t
                  V (V1t ) = E
                                               β2 − α 2               β2 − α 2
                                  β22 σ11 − 2β2 α2 σ12 + α2 σ22
                            =
                                               (β2 − α2 )2

       • This is constant over time, so the first rf equation is homoscedastic.
       • Likewise, since the εt are independent over time, so are the Vt .
                                     11.4. IV ESTIMATION                            204

The variance of the second rf error is
                                                           
                                        ε1t − ε2t    ε1t − ε2t
                        V (V2t ) = E
                                        β2 − α 2     β2 − α 2
                                   σ11 − 2σ12 + σ22
                                 =
                                      (β2 − α2 )2

and the contemporaneous covariance of the errors across equations is
                                                                          
                                           β2 ε1t − α2 ε2t        ε1t − ε2t
                  E (V1t V2t ) = E
                                              β2 − α 2            β2 − α 2
                                    β2 σ11 − (β2 + α2 ) σ12 + σ22
                                =
                                              (β2 − α2 )2

        • In summary the rf equations individually satisfy the classical assumptions,
          under the assumtions we’ve made, but they are contemporaneously correlated.

The general form of the rf is


                                Yt0 = Xt0 BΓ−1 + Et0 Γ−1

                                     = Xt0 Π +Vt0


so we have that
                                0           0   
                        Vt = Γ−1 Et ∼ N 0, Γ−1 ΣΓ−1 , ∀t

and that the Vt are timewise independent (note that this wouldn’t be the case if the Et
were autocorrelated).




                                    11.4. IV estimation

   The IV estimator may appear a bit unusual at first, but it will grow on you over
time.
                                    11.4. IV ESTIMATION                             205

   The simultaneous equations model is


                                         Y Γ = XB + E


Considering the first equation (this is without loss of generality, since we can always
reorder the equations) we can partition the Y matrix as
                                           h                   i
                                   Y=          y Y1 Y2

       • y is the first column
       • Y1 are the other endogenous variables that enter the first equation
       • Y2 are endogs that are excluded from this equation




Similarly, partition X as
                                               h           i
                                     X=            X1 X2

       • X1 are the included exogs, and X2 are the excluded exogs.




Finally, partition the error matrix as
                                               h           i
                                     E=            ε E12

   Assume that Γ has ones on the main diagonal. These are normalization restrictions
that simply scale the remaining coefficients on each equation, and which scale the
variances of the error terms.
                                  11.4. IV ESTIMATION                                206

   Given this scaling and our partitioning, the coefficient matrices can be written as
                                                       
                                      1   Γ12
                                             
                                             
                                Γ =  −γ1 Γ22 
                                             
                                      0   Γ32
                                            
                                      β1 B12
                                B =         
                                      0 B22

   With this, the first equation can be written as


                                y = Y1 γ1 + X1 β1 + ε

                                   = Zδ + ε


The problem, as we’ve seen is that Z is correlated with ε, since Y1 is formed of endogs.
   Now, let’s consider the general problem of a linear regression model with correla-
tion between regressors and the error term:


                                     y = Xβ + ε

                                     ε ∼ iid(0, In σ2 )

                               E (X 0 ε) 6= 0.


The present case of a structural equation from a system of equations fits into this no-
tation, but so do other problems, such as measurement error or lagged dependent vari-
ables with autocorrelated errors. Consider some matrix W which is formed of variables
uncorrelated with ε. This matrix defines a projection matrix


                                 PW = W (W 0W )−1W 0
                                  11.4. IV ESTIMATION                               207

so that anything that is projected onto the space spanned by W will be uncorrelated
with ε, by the definition of W. Transforming the model with this projection matrix we
get
                                 PW y = PW X β + PW ε

or
                                    y∗ = X ∗ β + ε ∗

Now we have that ε∗ and X ∗ are uncorrelated, since this is simply


                            E (X ∗0 ε∗ ) = E (X 0 PW
                                                   0
                                                     PW ε)

                                        = E (X 0 PW ε)


and
                               PW X = W (W 0W )−1W 0 X

is the fitted value from a regression of X on W. This is a linear combination of the
columns of W, so it must be uncorrelated with ε. This implies that applying OLS to the
model
                                    y∗ = X ∗ β + ε ∗

will lead to a consistent estimator, given a few more assumptions. This is the general-
ized instrumental variables estimator. W is known as the matrix of instruments. The
estimator is
                              β̂IV = (X 0 PW X )−1 X 0 PW y

from which we obtain


                         β̂IV = (X 0 PW X )−1 X 0 PW (X β + ε)

                               = β + (X 0 PW X )−1 X 0 PW ε
                                              11.4. IV ESTIMATION                                               208

so


                    β̂IV − β = (X 0PW X )−1 X 0 PW ε
                                                                   −1
                                   =     X 0W (W 0W )−1W 0 X             X 0W (W 0W )−1W 0 ε


Now we can introduce factors of n to get
                                                !          !−1                        −1           
                            X 0W        W 0W −1        W 0X               X 0W        W 0W           W 0ε
     β̂IV − β =
                              n          n              n                   n          n              n

Assuming that each of the terms with a n in the denominator satisfies a LLN, so that
            0       p
        • WnW → QWW , a finite pd matrix
            0     p
        • X nW → QXW , a finite matrix with rank K (= cols(X ) )
                p
        • Wn ε → 0
            0



then the plim of the rhs is zero. This last term has plim 0 since we assume that W and
ε are uncorrelated, e.g.,
                                                  E (Wt0 εt ) = 0,

Given these assumtions the IV estimator is consistent

                                                          p
                                                     β̂IV → β.

                                   √
Furthermore, scaling by                n, we have

                                                 −1           !−1                      −1            
 √                             X 0W        W 0W           W 0X             X 0W        W 0W           W 0ε
  n β̂IV − β =                                                                                          √
                                   n          n              n                 n          n               n

     Assuming that the far right term satifies a CLT, so that
                d
        • W√nε → N(0, QWW σ2 )
            0



then we get
                            √         
                                         d
                                                                   
                             n β̂IV − β → N 0, (QXW QWW
                                                     −1
                                                        Q0XW )−1 σ2
                                         11.4. IV ESTIMATION                          209

The estimators for QXW and QWW are the obvious ones. An estimator for σ2 is

                           d2    1            0            
                           σIV =    y − X β̂IV      y − X β̂IV .
                                 n

This estimator is consistent following the proof of consistency of the OLS estimator of
σ2 , when the classical assumptions hold.
   The formula used to estimate the variance of β̂IV is
                                                         −1          −1 d
                      V̂ (β̂IV ) =       X 0W       W 0W         W 0X        σ2IV


   The IV estimator is


     (1) Consistent
     (2) Asymptotically normally distributed
     (3) Biased in general, since even though E (X 0 PW ε) = 0, E (X 0 PW X )−1 X 0 PW ε
         may not be zero, since (X 0 PW X )−1 and X 0 PW ε are not independent.


An important point is that the asymptotic distribution of β̂IV depends upon QXW and
QWW , and these depend upon the choice of W. The choice of instruments influences
the efficiency of the estimator.


       • When we have two sets of instruments, W1 and W2 such that W1 ⊂ W2 , then
         the IV estimator using W2 is at least as efficiently asymptotically as the esti-
         mator that used W1 . More instruments leads to more asymptotically efficient
         estimation, in general.
       • There are special cases where there is no gain (simultaneous equations is an
         example of this, as we’ll see).
       • The penalty for indiscriminant use of instruments is that the small sample bias
         of the IV estimator rises as the number of instruments increases. The reason
                      11.5. IDENTIFICATION BY EXCLUSION RESTRICTIONS                    210

            for this is that PW X becomes closer and closer to X itself as the number of
            instruments increases.
       • IV estimation can clearly be used in the case of simultaneous equations. The
            only issue is which instruments to use.




                      11.5. Identification by exclusion restrictions

    The identification problem in simultaneous equations is in fact of the same na-
ture as the identification problem in any estimation setting: does the limiting objective
function have the proper curvature so that there is a unique global minimum or max-
imum at the true parameter value? In the context of IV estimation, this is the case if
the limiting covariance of the IV estimator is positive definite and plim 1n W 0 ε = 0. This
matrix is
                             V∞ (β̂IV ) = (QXW QWW
                                                −1
                                                   Q0XW )−1 σ2

       • The necessary and sufficient condition for identification is simply that this
            matrix be positive definite, and that the instruments be (asymptotically) un-
            correlated with ε.
       • For this matrix to be positive definite, we need that the conditions noted above
            hold: QWW must be positive definite and QXW must be of full rank ( K ).
       • These identification conditions are not that intuitive nor is it very obvious how
            to check them.



    11.5.1. Necessary conditions. If we use IV estimation for a single equation of
the system, the equation can be written as


                                         y = Zδ + ε
                     11.5. IDENTIFICATION BY EXCLUSION RESTRICTIONS                      211

where
                                           h           i
                                      Z=       Y1 X1

   Notation:


        • Let K be the total numer of weakly exogenous variables.
        • Let K ∗ = cols(X1 ) be the number of included exogs, and let K ∗∗ = K − K ∗ be
          the number of excluded exogs (in this equation).
        • Let G∗ = cols(Y1 ) + 1 be the total number of included endogs, and let G∗∗ =
          G − G∗ be the number of excluded endogs.


Using this notation, consider the selection of instruments.


        • Now the X1 are weakly exogenous and can serve as their own instruments.
        • It turns out that X exhausts the set of possible instruments, in that if the vari-
          ables in X don’t lead to an identified model then no other instruments will
          identify the model either. Assuming this is true (we’ll prove it in a moment),
          then a necessary condition for identification is that cols(X2 ) ≥ cols(Y1 ) since
          if not then at least one instrument must be used twice, so W will not have full
          column rank:


                     ρ(W ) < K ∗ + G∗ − 1 ⇒ ρ(QZW ) < K ∗ + G∗ − 1


          This is the order condition for identification in a set of simultaneous equa-
          tions. When the only identifying information is exclusion restrictions on the
          variables that enter an equation, then the number of excluded exogs must be
          greater than or equal to the number of included endogs, minus 1 (the normal-
          ized lhs endog), e.g.,
                                       K ∗∗ ≥ G∗ − 1
                   11.5. IDENTIFICATION BY EXCLUSION RESTRICTIONS                            212

       • To show that this is in fact a necessary condition consider some arbitrary set
         of instruments W. A necessary condition for identification is that
                                                    
                                      1
                                ρ plim W 0 Z             = K ∗ + G∗ − 1
                                      n

         where
                                                 h            i
                                        Z=           Y1 X1

         Recall that we’ve partitioned the model


                                         Y Γ = XB + E


         as
                                             h                    i
                                        Y=  y Y1 Y2
                                           h       i
                                        X = X1 X2

     Given the reduced form
                                            Y = X Π +V

we can write the reduced form using the same partition
                                                                     
          h             i       h           i        π11 Π12 Π13           h             i
              y Y1 Y2       =       X1 X2                            +       v V1 V2
                                                     π21 Π22 Π23

so we have
                                    Y1 = X1 Π12 + X2 Π22 +V1

so
                        1 0    1 h                         i
                          W Z = W 0 X1 Π12 + X2 Π22 +V1 X1
                        n      n
                    11.5. IDENTIFICATION BY EXCLUSION RESTRICTIONS                    213

Because the W ’s are uncorrelated with the V1 ’s, by assumption, the cross between W
and V1 converges in probability to zero, so

                        1            1 h                     i
                    plim W 0 Z = plim W 0 X1 Π12 + X2 Π22 X1
                        n            n

Since the far rhs term is formed only of linear combinations of columns of X , the rank
of this matrix can never be greater than K, regardless of the choice of instruments. If
Z has more than K columns, then it is not of full column rank. When Z has more than
K columns we have
                                   G∗ − 1 + K ∗ > K

or noting that K ∗∗ = K − K ∗ ,
                                     G∗ − 1 > K ∗∗

In this case, the limiting matrix is not of full column rank, and the identification con-
dition fails.




    11.5.2. Sufficient conditions. Identification essentially requires that the struc-
tural parameters be recoverable from the data. This won’t be the case, in general,
unless the structural model is subject to some restrictions. We’ve already identified
necessary conditions. Turning to sufficient conditions (again, we’re only considering
identification through zero restricitions on the parameters, for the moment).
    The model is


                                   Yt0 Γ = Xt0 B + Et

                                  V (Et ) = Σ
                     11.5. IDENTIFICATION BY EXCLUSION RESTRICTIONS                214

This leads to the reduced form


                                 Yt0 = Xt0 BΓ−1 + Et Γ−1

                                     = Xt0 Π +Vt
                                               0
                              V (Vt ) =     Γ−1 ΣΓ−1

                                     = Ω


The reduced form parameters are consistently estimable, but none of them are known
a priori, and there are no restrictions on their values. The problem is that more than
one structural form has the same reduced form, so knowledge of the reduced form
parameters alone isn’t enough to determine the structural parameters. To see this,
consider the model


                                 Yt0 ΓF = Xt0 BF + Et F

                               V (Et F) = F 0 ΣF


where F is some arbirary nonsingular G × G matrix. The rf of this new model is


                         Yt0 = Xt0 BF (ΓF)−1 + Et F (ΓF)−1

                              = Xt0 BFF −1 Γ−1 + Et FF −1 Γ−1

                              = Xt0 BΓ−1 + Et Γ−1

                              = Xt0 Π +Vt


Likewise, the covariance of the rf of the transformed model is


                            V (Et F (ΓF)−1 ) = V (Et Γ−1 )

                                              = Ω
                      11.5. IDENTIFICATION BY EXCLUSION RESTRICTIONS                   215

Since the two structural forms lead to the same rf, and the rf is all that is directly
estimable, the models are said to be observationally equivalent. What we need for
identification are restrictions on Γ and B such that the only admissible F is an identity
matrix (if all of the equations are to be identified). Take the coefficient matrices as
partitioned before:

                                                        
                                     1               Γ12 
                                                         
                                   −γ1             Γ22 
                                                         
                                 Γ                       
                                 = 0               Γ32 
                                                         
                                 B  
                                    
                                                          
                                                          
                                     β1              B12 
                                                         
                                      0               B22
The coefficients of the first equation of the transformed model are simply these coeffi-
cients multiplied by the first column of F. This gives
                                                      
                                           1     Γ 12 
                                                      
                                     −γ1 Γ22          
                                                      
                         Γ        f11                  f11
                                   = 0       Γ32      
                                                      
                         B        F2      
                                                       F2
                                                       
                                           β1    B12 
                                                      
                                            0     B22

For identification of the first equation we need that there be enough restrictions so that
the only admissible                              
                                            f11
                                                 
                                            F2
                   11.5. IDENTIFICATION BY EXCLUSION RESTRICTIONS                    216

be the leading column of an identity matrix, so that
                                                       
                         1      Γ12                 1  
                                                       
                         −γ1 Γ22              −γ1 
                                                       
                                      f11              
                         0      Γ             =   0  
                                  32                   
                                      F2               
                                                       
                         β1     B12                 β1 
                                                       
                           0     B22                   0

Note that the third and fifth rows are
                                             
                                     Γ         0
                                   32  F2 =  
                                     B22       0

Supposing that the leading matrix is of full column rank, e.g.,
                                                             
                             Γ32                             Γ32
                     ρ            = cols                      = G − 1
                             B22                             B22

then the only way this can hold, without additional restrictions on the model’s param-
eters, is if F2 is a vector of zeros. Given that F2 is a vector of zeros, then the first
equation                                            
                         h             i       f11
                             1 Γ12                   = 1 ⇒ f11 = 1
                                               F2
Therefore, as long as                             
                                             Γ32
                                   ρ               = G − 1
                                             B22
then                                                            
                                       f11               1
                                              =                 
                                       F2                0G−1
                    11.5. IDENTIFICATION BY EXCLUSION RESTRICTIONS                        217

The first equation is identified in this case, so the condition is sufficient for identifica-
tion. It is also necessary, since the condition implies that this submatrix must have at
least G − 1 rows. Since this matrix has


                               G∗∗ + K ∗∗ = G − G∗ + K ∗∗


rows, we obtain
                                  G − G∗ + K ∗∗ ≥ G − 1

or
                                       K ∗∗ ≥ G∗ − 1

which is the previously derived necessary condition.
     The above result is fairly intuitive (draw picture here). The necessary condition
ensures that there are enough variables not in the equation of interest to potentially
move the other equations, so as to trace out the equation of interest. The sufficient
condition ensures that those other equations in fact do move around as the variables
change their values. Some points:


       • When an equation has K ∗∗ = G∗ − 1, is is exactly identified, in that omission
          of an identifiying restriction is not possible without loosing consistency.
       • When K ∗∗ > G∗ − 1, the equation is overidentified, since one could drop a
          restriction and still retain consistency. Overidentifying restrictions are there-
          fore testable. When an equation is overidentified we have more instruments
          than are strictly necessary for consistent estimation. Since estimation by IV
          with more instruments is more efficient asymptotically, one should employ
          overidentifying restrictions if one is confident that they’re true.
       • We can repeat this partition for each equation in the system, to see which
          equations are identified and which aren’t.
                    11.5. IDENTIFICATION BY EXCLUSION RESTRICTIONS                   218

       • These results are valid assuming that the only identifying information comes
         from knowing which variables appear in which equations, e.g., by exclusion
         restrictions, and through the use of a normalization. There are other sorts of
         identifying information that can be used. These include
          (1) Cross equation restrictions
          (2) Additional restrictions on parameters within equations (as in the Klein
              model discussed below)
          (3) Restrictions on the covariance matrix of the errors
          (4) Nonlinearities in variables
       • When these sorts of information are available, the above conditions aren’t
         necessary for identification, though they are of course still sufficient.




To give an example of how other information can be used, consider the model


                                      Y Γ = XB + E


where Γ is an upper triangular matrix with 1’s on the main diagonal. This is a triangu-
lar system of equations. In this case, the first equation is


                                     y1 = X B·1 + E·1


Since only exogs appear on the rhs, this equation is identified.
    The second equation is


                                y2 = −γ21 y1 + X B·2 + E·2

This equation has K ∗∗ = 0 excluded exogs, and G∗ = 2 included endogs, so it fails the
order (necessary) condition for identification.
                   11.5. IDENTIFICATION BY EXCLUSION RESTRICTIONS                      219

      • However, suppose that we have the restriction Σ21 = 0, so that the first and
         second structural errors are uncorrelated. In this case

                                          
                        E (y1t ε2t ) = E (Xt0B·1 + ε1t )ε2t = 0


         so there’s no problem of simultaneity. If the entire Σ matrix is diagonal, then
         following the same logic, all of the equations are identified. This is known as
         a fully recursive model.



   11.5.3. Example: Klein’s Model 1. To give an example of determining identifi-
cation status, consider the following macro model (this is the widely known Klein’s
Model 1)

                                                                    p    g
           Consumption: Ct = α0 + α1 Pt + α2 Pt−1 + α3 (Wt +Wt ) + ε1t

               Investment: It = β0 + β1 Pt + β2 Pt−1 + β3 Kt−1 + ε2t
                             p
         Private Wages: Wt        = γ0 + γ1 Xt + γ2 Xt−1 + γ3 At + ε3t

                  Output: Xt = Ct + It + Gt
                                                     p
                   Profits: Pt = Xt − Tt −Wt

           Capital Stock: Kt = Kt−1 + It
                                                   
                       ε1t               0   σ11 σ12 σ13
                                                   
                                                   
                     ε2t  ∼ IID  0  ,      σ22 σ23 
                                                   
                       ε3t               0           σ33

                                                         g
The other variables are the government wage bill, Wt , taxes, Tt , government nonwage
spending, Gt ,and a time trend, At . The endogenous variables are the lhs variables,
                                  h                             i
                          Yt0 =                  p
                                      Ct It Wt       Xt Pt Kt
                   11.5. IDENTIFICATION BY EXCLUSION RESTRICTIONS                     220

and the predetermined variables are all others:
                          h                                          i
                  Xt0 =             g
                              1   Wt    Gt Tt At Pt−1 Kt−1 Xt−1          .


The model assumes that the errors of the equations are contemporaneously correlated,
by nonautocorrelated. The model written as Y Γ = X B + E gives
                                                                
                          1             0       0     −1 0   0
                                                              
                                                              
                         0             1       0     −1 0  −1 
                                                              
                                                              
                         −α3           0       1     0  1  0 
                                                              
                      Γ=                                      
                         0             0       −γ1   1  −1 0 
                                                              
                                                              
                                                              
                         −α1           −β1 0         0  1  0 
                                                              
                          0             0       0     0  0  1
                                                            
                                 α0        β0 γ 0 0 0     0 
                                                            
                                 α         0   0     0 0  0 
                                 3                          
                                                            
                                 0         0   0     1 0  0 
                                                            
                                                            
                                                            
                                 0         0   0     0 −1 0 
                              B=
                                
                                                             
                                                             
                                 0
                                           0   γ3    0 0  0 
                                                             
                                                            
                                 α2        β2 0      0 0  0 
                                                            
                                                            
                                 0         β3 0      0 0  1 
                                                            
                                                            
                                  0         0   γ2    0 0  0
To check this identification of the consumption equation, we need to extract Γ 32 and
B22 , the submatrices of coefficients of endogs and exogs that don’t appear in this equa-
tion. These are the rows that have zeros in the first column, and we need to drop the
                    11.5. IDENTIFICATION BY EXCLUSION RESTRICTIONS                       221

first column. We get
                                                                 
                                1           0     −1 0     −1 
                                                              
                                0           −γ1 1       −1 0 
                                                              
                                                              
                                0           0     0     0  1 
                                                              
                                                            
                                                              
                         Γ32    0           0     1     0  0 
                            =                               
                                                              
                         B22    0
                                            0     0     −1 0 
                                                              
                                0           γ3    0     0  0 
                                                              
                                                              
                                β           0     0     0  1 
                                3                             
                                                              
                                 0           γ2    0     0  0

We need to find a set of 5 rows of this matrix gives a full-rank 5×5 matrix. For
example, selecting rows 3,4,5,6, and 7 we obtain the matrix
                                                      
                                  0 0 0 0           1 
                                                      
                                  0 0 1 0           0 
                                                      
                                                      
                            A =  0 0 0 −1 0 
                                 
                                                       
                                                      
                                                      
                                   0   γ 3 0  0     0 
                                                      
                                    β3 0 0 0         1

This matrix is of full rank, so the sufficient condition for identification is met. Counting
included endogs, G∗ = 3, and counting excluded exogs, K ∗∗ = 5, so


                                  K ∗∗ − L = G∗ − 1

                                     5−L         = 3−1

                                         L        =3


       • The equation is over-identified by three restrictions, according to the count-
         ing rules, which are correct when the only identifying information are the
                                        11.6. 2SLS                                     222

         exclusion restrictions. However, there is additional information in this case.
                 p        g
         Both Wt and Wt enter the consumption equation, and their coefficients are
         restricted to be the same. For this reason the consumption equation is in fact
         overidentified by four restrictions.


                                      11.6. 2SLS

   When we have no information regarding cross-equation restrictions or the structure
of the error covariance matrix, one can estimate the parameters of a single equation of
the system without regard to the other equations.

      • This isn’t always efficient, as we’ll see, but it has the advantage that misspec-
         ifications in other equations will not affect the consistency of the estimator of
         the parameters of the equation of interest.
      • Also, estimation of the equation won’t be affected by identification problems
         in other equations.

The 2SLS estimator is very simple: in the first stage, each column of Y1 is regressed on
all the weakly exogenous variables in the system, e.g., the entire X matrix. The fitted
values are


                                Ŷ1 = X (X 0X )−1 X 0Y1

                                     = PX Y1

                                     = X Π̂1


Since these fitted values are the projection of Y1 on the space spanned by X , and since
any vector in this space is uncorrelated with ε by assumption, Ŷ1 is uncorrelated with
ε. Since Ŷ1 is simply the reduced-form prediction, it is correlated with Y1 , The only
other requirement is that the instruments be linearly independent. This should be the
                                        11.6. 2SLS                                    223

case when the order condition is satisfied, since there are more columns in X2 than in
Y1 in this case.
    The second stage substitutes Ŷ1 in place of Y1 , and estimates by OLS. This original
model is


                                y = Y1 γ1 + X1 β1 + ε

                                    = Zδ + ε


and the second stage model is


                                  y = Yˆ1 γ1 + X1 β1 + ε.


Since X1 is in the space spanned by X , PX X1 = X1 , so we can write the second stage
model as


                             y = PX Y1 γ1 + PX X1 β1 + ε

                                 ≡ PX Zδ + ε


The OLS estimator applied to this model is


                                 δ̂ = (Z 0 PX Z)−1 Z 0 PX y


which is exactly what we get if we estimate using IV, with the reduced form predictions
of the endogs used as instruments. Note that if we define


                                  Ẑ = PX Z
                                       h        i
                                     =   Ŷ1 X1
                                                  11.6. 2SLS                                                   224

so that Ẑ are the instruments for Z, then we can write


                                             δ̂ = (Ẑ 0 Z)−1 Ẑ 0 y


      • Important note: OLS on the transformed model can be used to calculate the
         2SLS estimate of δ, since we see that it’s equivalent to IV using a particular
         set of instruments. However the OLS covariance formula is not valid. We
         need to apply the IV covariance formula already seen above.




Actually, there is also a simplification of the general IV variance formula. Define


                                             Ẑ = PX Z
                                                  h      i
                                                =   Ŷ X

The IV covariance estimator would ordinarily be

                                                 −1                           −1
                              V̂ (δ̂) = Z 0 Ẑ           Ẑ 0 Ẑ       Ẑ 0 Z         σ̂2IV


However, looking at the last term in brackets

                                                                                                          
                        h             i0 h             i          Y 0 (P )Y                   Y10 (PX )X1
             Ẑ 0 Z =       Ŷ1 X1           Y1 X1         =      1 X 1                                  
                                                                       X10 Y1                 X10 X1
but since PX is idempotent and since PX X = X , we can write
                                                                                                      
                h              i0 h             i             Y 0P P Y                    Y10 PX X1
                    Ŷ1 X1            Y1 X1          =        1 X X 1                              
                                                                   X10 PX Y1              X10 X1
                                                             h                   i0 h                  i
                                                     =             Ŷ1 X1                Ŷ1 X1

                                                     = Ẑ 0 Ẑ
                    11.7. TESTING THE OVERIDENTIFYING RESTRICTIONS                      225

Therefore, the second and last term in the variance formula cancel, so the 2SLS varcov
estimator simplifies to
                                                       −1
                                   V̂ (δ̂) = Z 0 Ẑ          σ̂2IV

which, following some algebra similar to the above, can also be written as

                                                       −1
                                   V̂ (δ̂) = Ẑ 0 Ẑ         σ̂2IV


Finally, recall that though this is presented in terms of the first equation, it is general
since any equation can be placed first.
   Properties of 2SLS:

     (1) Consistent
     (2) Asymptotically normal
     (3) Biased when the mean esists (the existence of moments is a technical issue
         we won’t go into here).
     (4) Asymptotically inefficient, except in special circumstances (more on this later).




                    11.7. Testing the overidentifying restrictions

   The selection of which variables are endogs and which are exogs is part of the
specification of the model. As such, there is room for error here: one might erroneously
classify a variable as exog when it is in fact correlated with the error term. A general
test for the specification on the model can be formulated as follows:
   The IV estimator can be calculated by applying OLS to the transformed model, so
the IV objective function at the minimized value is
                                              0           
                          s(β̂IV ) = y − X β̂IV PW y − X β̂IV ,
                    11.7. TESTING THE OVERIDENTIFYING RESTRICTIONS                            226

but


                      ε̂IV = y − X β̂IV

                           = y − X (X 0 PW X )−1 X 0 PW y
                                                          
                           =     I − X (X 0PW X )−1 X 0 PW y
                                                          
                           =     I − X (X 0PW X )−1 X 0 PW (X β + ε)

                           = A (X β + ε)


where
                               A ≡ I − X (X 0PW X )−1 X 0 PW

so
                                               
                         s(β̂IV ) = ε0 + β0 X 0 A0 PW A (X β + ε)

Moreover, A0 PW A is idempotent, as can be verified by multiplication:

                                                                           
        A0 PW A =    I − PW X (X 0PW X )−1 X 0 PW I − X (X 0PW X )−1 X 0 PW
                                                                                         
               =     PW − PW X (X 0PW X )−1 X 0 PW        PW − PW X (X 0PW X )−1 X 0 PW
                                              
               =     I − PW X (X 0PW X )−1 X 0 PW .


Furthermore, A is orthogonal to X

                                                              
                         AX =        I − X (X 0PW X )−1 X 0 PW X

                               = X −X

                               = 0


so
                                   s(β̂IV ) = ε0 A0 PW Aε
                   11.7. TESTING THE OVERIDENTIFYING RESTRICTIONS                     227

Supposing the ε are normally distributed, with variance σ2 , then the random variable

                                  s(β̂IV ) ε0 A0 PW Aε
                                          =
                                    σ2          σ2

is a quadratic form of a N(0, 1) random variable with an idempotent matrix in the
middle, so
                                s(β̂IV )
                                         ∼ χ2 (ρ(A0 PW A))
                                  σ2
This isn’t available, since we need to estimate σ2 . Substituting a consistent estimator,

                                s(β̂IV ) a 2
                                         ∼ χ (ρ(A0 PW A))
                                  c
                                  σ 2


      • Even if the ε aren’t normally distributed, the asymptotic result still holds. The
         last thing we need to determine is the rank of the idempotent matrix. We have

                                                                  
                        A0 PW A = PW − PW X (X 0PW X )−1 X 0 PW


         so

                                                                      
                   ρ(A0PW A) = Tr PW − PW X (X 0PW X )−1 X 0 PW

                               = TrPW − TrX 0 PW PW X (X 0PW X )−1

                               = TrW (W 0W )−1W 0 − KX

                               = TrW 0W (W 0W )−1 − KX

                               = KW − KX


         where KW is the number of columns of W and KX is the number of columns of
         X . The degrees of freedom of the test is simply the number of overidentifying
         restrictions: the number of instruments we have beyond the number that is
         strictly necessary for consistent estimation.
                     11.7. TESTING THE OVERIDENTIFYING RESTRICTIONS                        228

         • This test is an overall specification test: the joint null hypothesis is that the
           model is correctly specified and that the W form valid instruments (e.g., that
           the variables classified as exogs really are uncorrelated with ε. Rejection can
           mean that either the model y = Zδ + ε is misspecified, or that there is correla-
           tion between X and ε.
         • This is a particular case of the GMM criterion test, which is covered in the
           second half of the course. See Section 15.8.
         • Note that since
                                          ε̂IV = Aε

           and
                                     s(β̂IV ) = ε0 A0 PW Aε

           we can write
                                                                      
                    s(β̂IV )       ε̂0W (W 0W )−1W 0 W (W 0W )−1W 0 ε̂
                             =
                      c2
                      σ                           ε̂0 ε̂/n
                             = n(RSSε̂IV |W /T SSε̂IV )

                             = nR2u


           where R2u is the uncentered R2 from a regression of the IV residuals on all of
           the instruments W . This is a convenient way to calculate the test statistic.




On an aside, consider IV estimation of a just-identified model, using the standard no-
tation


                                         y = Xβ + ε
                    11.7. TESTING THE OVERIDENTIFYING RESTRICTIONS                 229

and W is the matrix of instruments. If we have exact identification then cols(W ) =
              0
cols(X ), so W X is a square matrix. The transformed model is


                                       PW y = PW X β + PW ε


and the fonc are
                                       X 0PW (y − X β̂IV ) = 0

The IV estimator is
                                                    −1
                                  β̂IV = X 0 PW X         X 0 PW y

Considering the inverse here

                                 −1                                 −1
                      X 0 PW X          =    X 0W (W 0W )−1W 0 X
                                                                           −1
                                        = (W 0 X )−1 X 0W (W 0W )−1
                                                                        −1
                                        = (W 0 X )−1 (W 0W ) X 0W


Now multiplying this by X 0 PW y, we obtain

                                                       −1
                  β̂IV = (W 0 X )−1 (W 0W ) X 0W             X 0 PW y
                                                       −1
                       = (W 0 X )−1 (W 0W ) X 0W             X 0W (W 0W )−1W 0 y

                       = (W 0 X )−1W 0 y
                           11.8. SYSTEM METHODS OF ESTIMATION                            230

The objective function for the generalized IV estimator is
                                       0                
              s(β̂IV ) =      y − X β̂IV PW y − X β̂IV
                                                                        
                       =    y PW y − X β̂IV − β̂IV X PW y − X β̂IV
                             0                   0     0

                                            
                       =    y0 PW y − X β̂IV − β̂0IV X 0 PW y + β̂0IV X 0 PW X β̂IV
                                                                               
                       =    y0 PW y − X β̂IV − β̂0IV X 0 PW y + X 0 PW X β̂IV
                                            
                       =    y0 PW y − X β̂IV


by the fonc for generalized IV. However, when we’re in the just indentified case, this
is

                                                      
           s(β̂IV ) = y0 PW y − X (W 0 X )−1W 0 y
                                               
                    = y0 PW I − X (W 0 X )−1W 0 y
                                                                       
                    = y0 W (W 0W )−1W 0 −W (W 0W )−1W 0 X (W 0 X )−1W 0 y

                    = 0


The value of the objective function of the IV estimator is zero in the just identified case.
This makes sense, since we’ve already shown that the objective function after dividing
by σ2 is asymptotically χ2 with degrees of freedom equal to the number of overidenti-
fying restrictions. In the present case, there are no overidentifying restrictions, so we
have a χ2 (0) rv, which has mean 0 and variance 0, e.g., it’s simply 0. This means we’re
not able to test the identifying restrictions in the case of exact identification.


                           11.8. System methods of estimation

     2SLS is a single equation method of estimation, as noted above. The advantage of
a single equation method is that it’s unaffected by the other equations of the system,
                         11.8. SYSTEM METHODS OF ESTIMATION                           231

so they don’t need to be specified (except for defining what are the exogs, so 2SLS can
use the complete set of instruments). The disadvantage of 2SLS is that it’s inefficient,
in general.


      • Recall that overidentification improves efficiency of estimation, since an overi-
         dentified equation can use more instruments than are necessary for consistent
         estimation.
      • Secondly, the assumption is that



                                     Y Γ = XB + E

                                E (X 0 E) = 0(K×G)

                                 vec(E) ∼ N(0, Ψ)


      • Since there is no autocorrelation of the Et ’s, and since the columns of E are
         individually homoscedastic, then
                                                            
                               σ11 In σ12 In · · · σ1G In 
                                                     ..     
                                        σ 22 In       .     
                                                            
                       Ψ =                                  
                                                . . ..      
                                                   .  .     
                                                            
                                ·                     σGG In
                            = Σ ⊗ In


         This means that the structural equations are heteroscedastic and correlated
         with one another
      • In general, ignoring this will lead to inefficient estimation, following the sec-
         tion on GLS. When equations are correlated with one another estimation
         should account for the correlation in order to obtain efficiency.
                           11.8. SYSTEM METHODS OF ESTIMATION                         232

       • Also, since the equations are correlated, information about one equation is
          implicitly information about all equations. Therefore, overidentification re-
          strictions in any equation improve efficiency for all equations, even the just
          identified equations.
       • Single equation methods can’t use these types of information, and are there-
          fore inefficient (in general).




     11.8.1. 3SLS. Note: It is easier and more practical to treat the 3SLS estimator
as a generalized method of moments estimator (see Chapter 15). I no longer teach
the following section, but it is retained for its possible historical interest. Another
alternative is to use FIML (Subsection 11.8.2), if you are willing to make distributional
assumptions on the errors. This is computationally feasible with modern computers.
     Following our above notation, each structural equation can be written as


                                  yi = Yi γ1 + Xi β1 + εi

                                      = Zi δi + ε i


     Grouping the G equations together we get
                                                      
                  y 1   Z1 0 · · · 0   δ 1   ε 1 
                                         ..           
                  y2   0 Z 2              .   δ2   ε2 
                                                      
                  . = .             ..       . + . 
                  ..   ..              . 0   ..   .. 
                                                     
                                                          
                                                      
                    yG        0 · · · 0 ZG         δG     εG

or
                                           y = Zδ + ε
                         11.8. SYSTEM METHODS OF ESTIMATION                          233

where we already have that


                                  E (εε0 ) = Ψ

                                              = Σ ⊗ In


The 3SLS estimator is just 2SLS combined with a GLS correction that takes advantage
of the structure of Ψ. Define Ẑ as
                                                                         
                   X (X X ) X Z1 0
                        0   −1   0                       ··· 0            
                                                               ..        
                   0                     0     −1
                                      X (X X ) X Z2   0          .        
                                                                         
          Ẑ =  .                                                        
                   ..                                    . .. 0          
                                                                         
                                                                         
                     0                ···                0 X (X X ) X ZG
                                                                   0 −1 0

                                                             
                               0                 0
                   Ŷ1 X1
                                          · · ·
                                                              
                                                .            
                   0            Ŷ  X           ..           
                                  2  2                       
             =                                               
                   ..                     ..
                                              .               
                   .                             0           
                                                             
                     0         ···        0         ŶG XG

   These instruments are simply the unrestricted rf predicitions of the endogs, com-
bined with the exogs. The distinction is that if the model is overidentified, then


                                       Π = BΓ−1


may be subject to some zero restrictions, depending on the restrictions on Γ and B,
and Π̂ does not impose these restrictions. Also, note that Π̂ is calculated using OLS
equation by equation. More on this later.
   The 2SLS estimator would be


                                    δ̂ = (Ẑ 0 Z)−1 Ẑ 0 y
                          11.8. SYSTEM METHODS OF ESTIMATION                             234

as can be verified by simple multiplication, and noting that the inverse of a block-
diagonal matrix is just the matrix with the inverses of the blocks on the main diagonal.
This IV estimator still ignores the covariance information. The natural extension is
to add the GLS transformation, putting the inverse of the error covariance into the
formula, which gives the 3SLS estimator
                                                             −1
                                                     −1
                      δ̂3SLS =         0
                                      Ẑ (Σ ⊗ In )        Z         Ẑ 0 (Σ ⊗ In )−1 y
                                                −1 0 −1    
                            =     Ẑ 0 Σ−1 ⊗ In Z   Ẑ Σ ⊗ In y


This estimator requires knowledge of Σ. The solution is to define a feasible estimator
using a consistent estimator of Σ. The obvious solution is to use an estimator based on
the 2SLS residuals:
                                       ε̂i = yi − Zi δ̂i,2SLS

(IMPORTANT NOTE: this is calculated using Zi , not Ẑi ). Then the element i, j of Σ
is estimated by
                                                     ε̂0i ε̂ j
                                           σ̂i j =
                                                        n
Substitute Σ̂ into the formula above to get the feasible 3SLS estimator.
   Analogously to what we did in the case of 2SLS, the asymptotic distribution of the
3SLS estimator can be shown to be
                                                        !−1 
           √                                       −1
                                          Ẑ (Σ ⊗ In ) Ẑ
                                            0                 
                           a
             n δ̂3SLS − δ ∼ N 0, lim E                        
                                  n→∞           n            

A formula for estimating the variance of the 3SLS estimator in finite samples (can-
celling out the powers of n) is
                                                    −1
                           V̂ δ̂3SLS = Ẑ 0 Σ̂−1 ⊗ In Ẑ
                           11.8. SYSTEM METHODS OF ESTIMATION                         235

        • This is analogous to the 2SLS formula in equation (??), combined with the
           GLS correction.
        • In the case that all equations are just identified, 3SLS is numerically equiva-
           lent to 2SLS. Proving this is easiest if we use a GMM interpretation of 2SLS
           and 3SLS. GMM is presented in the next econometrics course. For now, take
           it on faith.




The 3SLS estimator is based upon the rf parameter estimator Π̂, calculated equation
by equation using OLS:
                                     Π̂ = (X 0 X )−1 X 0Y

which is simply
                                                h                    i
                           Π̂ = (X 0X )−1 X 0       y1 y2 · · · yG

that is, OLS equation by equation using all the exogs in the estimation of each column
of Π.
      It may seem odd that we use OLS on the reduced form, since the rf equations are
correlated:


                                 Yt0 = Xt0 BΓ−1 + Et0 Γ−1

                                      = Xt0 Π +Vt0


and
                                  0           0   
                          Vt = Γ−1 Et ∼ N 0, Γ−1 ΣΓ−1 , ∀t

Let this var-cov matrix be indicated by

                                            0
                                     Ξ = Γ−1 ΣΓ−1
                          11.8. SYSTEM METHODS OF ESTIMATION                            236

OLS equation by equation to get the rf is equivalent to
                                                        
                 y 1   X 0 · · · 0   π1   v 1 
                                          ..            
                 y2   0 X                  .   π2   v 2 
                                                        
                 . = .               ..       . + . 
                 ..   ..                        .   
                                           . 0  .   .  .
                                                            
                                                        
                   yG         0 ··· 0 X              πG     vG

where yi is the n × 1 vector of observations of the ith endog, X is the entire n × K matrix
of exogs, πi is the ith column of Π, and vi is the ith column of V. Use the notation


                                       y = Xπ + v


to indicate the pooled model. Following this notation, the error covariance matrix is


                                      V (v) = Ξ ⊗ In


       • This is a special case of a type of model known as a set of seemingly unrelated
         equations (SUR) since the parameter vector of each equation is different. The
         equations are contemporanously correlated, however. The general case would
         have a different Xi for each equation.
       • Note that each equation of the system individually satisfies the classical as-
         sumptions.
       • However, pooled estimation using the GLS correction is more efficient, since
         equation-by-equation estimation is equivalent to pooled estimation, since X
         is block diagonal, but ignoring the covariance information.
       • The model is estimated by GLS, where Ξ is estimated using the OLS residuals
         from equation-by-equation estimation, which are consistent.
                            11.8. SYSTEM METHODS OF ESTIMATION                                237

       • In the special case that all the Xi are the same, which is true in the present
         case of estimation of the rf parameters, SUR ≡OLS. To show this note that in
         this case X = In ⊗ X . Using the rules
          (1) (A ⊗ B)−1 = (A−1 ⊗ B−1 )
          (2) (A ⊗ B)0 = (A0 ⊗ B0 ) and
          (3) (A ⊗ B)(C ⊗ D) = (AC ⊗ BD), we get
                                                            −1
          π̂SUR =         (In ⊗ X )0 (Ξ ⊗ In )−1 (In ⊗ X )         (In ⊗ X )0 (Ξ ⊗ In )−1 y
                                             −1 −1   
                 =         Ξ−1 ⊗ X 0 (In ⊗ X )   Ξ ⊗ X0 y
                                                       
                 =        Ξ ⊗ (X 0 X )−1       Ξ−1 ⊗ X 0 y
                                      
                 =  IG ⊗ (X 0 X )−1 X 0 y
                         
                    π̂1 
                         
                    π̂2 
                         
                 =  . 
                    .. 
                         
                         
                      π̂G

       • So the unrestricted rf coefficients can be estimated efficiently (assuming nor-
         mality) by OLS, even if the equations are correlated.
       • We have ignored any potential zeros in the matrix Π, which if they exist could
         potentially increase the efficiency of estimation of the rf.
       • Another example where SUR≡OLS is in estimation of vector autoregres-
         sions. See two sections ahead.


   11.8.2. FIML. Full information maximum likelihood is an alternative estimation
method. FIML will be asymptotically efficient, since ML estimators based on a given
information set are asymptotically efficient w.r.t. all other estimators that use the same
information set, and in the case of the full-information ML estimator we use the entire
                              11.8. SYSTEM METHODS OF ESTIMATION                                238

information set. The 2SLS and 3SLS estimators don’t require distributional assump-
tions, while FIML of course does. Our model is, recall


                                              Yt0 Γ = Xt0 B + Et0

                                                 Et ∼ N(0, Σ), ∀t

                                        E (Et Es0 ) = 0,t 6= s


The joint normality of Et means that the density for Et is the multivariate normal,
which is
                                                                               
                                                     
                                                 −1 −1/2          1
                          (2π)   −g/2
                                         det Σ               exp − Et0 Σ−1 Et
                                                                  2
The transformation from Et to Yt requires the Jacobian

                                                     dEt
                                             | det        | = | det Γ|
                                                     dYt0

so the density for Yt is
                                                                                           
                                         
                                      −1 −1/2         1                               0
       (2π)   −G/2
                     | det Γ| det Σ              exp − Yt0 Γ − Xt0 B Σ−1 Yt0 Γ − Xt0 B
                                                      2

Given the assumption of independence over time, the joint log-likelihood function is

                     nG                       n            1 n                               0
ln L(B, Γ, Σ) = −       ln(2π)+n ln(| det Γ|)− ln det Σ−1 − ∑ Yt0 Γ − Xt0 B Σ−1 Yt0 Γ − Xt0 B
                      2                       2            2 t=1

       • This is a nonlinear in the parameters objective function. Maximixation of this
           can be done using iterative numeric methods. We’ll see how to do this in the
           next section.
       • It turns out that the asymptotic distribution of 3SLS and FIML are the same,
           assuming normality of the errors.
                       11.9. EXAMPLE: 2SLS AND KLEIN’S MODEL 1                        239

      • One can calculate the FIML estimator by iterating the 3SLS estimator, thus
         avoiding the use of a nonlinear optimizer. The steps are
         (1) Calculate Γ̂3SLS and B̂3SLS as normal.
         (2) Calculate Π̂ = B̂3SLS Γ̂−1
                                     3SLS . This is new, we didn’t estimate Π in this way

             before. This estimator may have some zeros in it. When Greene says
             iterated 3SLS doesn’t lead to FIML, he means this for a procedure that
             doesn’t update Π̂, but only updates Σ̂ and B̂ and Γ̂. If you update Π̂ you
             do converge to FIML.
         (3) Calculate the instruments Ŷ = X Π̂ and calculate Σ̂ using Γ̂ and B̂ to get
             the estimated errors, applying the usual estimator.
         (4) Apply 3SLS using these new instruments and the estimate of Σ.
         (5) Repeat steps 2-4 until there is no change in the parameters.
      • FIML is fully efficient, since it’s an ML estimator that uses all information.
         This implies that 3SLS is fully efficient when the errors are normally dis-
         tributed. Also, if each equation is just identified and the errors are normal,
         then 2SLS will be fully efficient, since in this case 2SLS≡3SLS.
      • When the errors aren’t normally distributed, the likelihood function is of
         course different than what’s written above.


                    11.9. Example: 2SLS and Klein’s Model 1

   The Octave program Simeq/Klein.m performs 2SLS estimation for the 3 equations
of Klein’s model 1, assuming nonautocorrelated errors, so that lagged endogenous
variables can be used as instruments. The results are:

CONSUMPTION EQUATION


*******************************************************
                  11.9. EXAMPLE: 2SLS AND KLEIN’S MODEL 1             240

2SLS estimation results
Observations 21
R-squared 0.976711
Sigma-squared 1.044059


                  estimate        st.err.        t-stat.    p-value
Constant              16.555        1.321         12.534     0.000
Profits                0.017        0.118          0.147     0.885
Lagged Profits         0.216        0.107          2.016     0.060
Wages                  0.810        0.040         20.129     0.000


*******************************************************
INVESTMENT EQUATION


*******************************************************
2SLS estimation results
Observations 21
R-squared 0.884884
Sigma-squared 1.383184


                  estimate        st.err.        t-stat.    p-value
Constant              20.278        7.543          2.688     0.016
Profits                0.150        0.173          0.867     0.398
Lagged Profits         0.616        0.163          3.784     0.001
Lagged Capital        -0.158        0.036         -4.368     0.000
                       11.9. EXAMPLE: 2SLS AND KLEIN’S MODEL 1                      241

*******************************************************
WAGES EQUATION


*******************************************************
2SLS estimation results
Observations 21
R-squared 0.987414
Sigma-squared 0.476427


                      estimate        st.err.         t-stat.        p-value
Constant                 1.500           1.148          1.307           0.209
Output                   0.439           0.036         12.316           0.000
Lagged Output            0.147           0.039          3.777           0.002
Trend                    0.130           0.029          4.475           0.000


*******************************************************



   The above results are not valid (specifically, they are inconsistent) if the errors
are autocorrelated, since lagged endogenous variables will not be valid instruments
in that case. You might consider eliminating the lagged endogenous variables as in-
struments, and re-estimating by 2SLS, to obtain consistent parameter estimates in this
more complex case. Standard errors will still be estimated inconsistently, unless use a
Newey-West type covariance estimator. Food for thought...
                                       CHAPTER 12


                         Introduction to the second half

    We’ll begin with study of extremum estimators in general. Let Zn be the available
data, based on a sample of size n.




    D EFINITION 12.0.1. [Extremum estimator] An extremum estimator θ̂ is the opti-
mizing element of an objective function sn (Zn , θ) over a set Θ.




    We’ll usually write the objective function suppressing the dependence on Z n .
    Example: Least squares, linear model
    Let the d.g.p. be yt = xt0 θ0 + εt , t = 1, 2, ..., n, θ0 ∈ Θ. Stacking observations verti-
                                                               0
                0
cally, yn = Xn θ + εn , where Xn = x1 x2 · · · xn . The least squares estimator
is defined as
                    θ̂ ≡ arg min sn (θ) = (1/n) [yn − Xn θ]0 [yn − Xn θ]
                              Θ

We readily find that θ̂ = (X0 X)−1 X0 y.
    Example: Maximum likelihood
    Suppose that the continuous random variable yt ∼ IIN(θ0 , 1). The maximum like-
lihood estimator is defined as
                                                                           !
                                           n
                                                        (yt − θ)2
                 θ̂ ≡ arg max Ln (θ) = ∏ (2π)−1/2 exp −
                           Θ           t=1                  2
                                               242
                           12. INTRODUCTION TO THE SECOND HALF                           243

Because the logarithmic function is strictly increasing on (0, ∞), maximization of the
average logarithm of the likelihood function is achieved at the same θ̂ as for the likeli-
hood function:
                                                                         n
                                                                           (yt − θ)2
        θ̂ ≡ arg max sn (θ) = (1/n) ln Ln (θ) = −1/2 ln 2π − (1/n) ∑
                   Θ                                                   t=1     2

Solution of the f.o.c. leads to the familiar result that θ̂ = ȳ.

       • MLE estimators are asymptotically efficient (Cramér-Rao lower bound, The-
         orem3), supposing the strong distributional assumptions upon which they are
         based are true.
       • One can investigate the properties of an “ML” estimator supposing that the
         distributional assumptions are incorrect. This gives a quasi-ML estimator,
         which we’ll study later.
       • The strong distributional assumptions of MLE may be questionable in many
         cases. It is possible to estimate using weaker distributional assumptions based
         only on some of the moments of a random variable(s).

Example: Method of moments
    Suppose we draw a random sample of yt from the χ2 (θ0 ) distribution. Here, θ0 is
the parameter of interest. The first moment (expectation), µ1 , of a random variable will
in general be a function of the parameters of the distribution, i.e., µ 1 (θ0 ) .

       • µ1 = µ1 (θ0 ) is a moment-parameter equation.
       • In this example, the relationship is the identity function µ1 (θ0 ) = θ0 , though in
         general the relationship may be more complicated. The sample first moment
         is
                                               n
                                       µb1 = ∑ yt /n.
                                             t=1
                        12. INTRODUCTION TO THE SECOND HALF                         244

       • Define
                                   m1 (θ) = µ1 (θ) − µb1

       • The method of moments principle is to choose the estimator of the parameter
         to set the estimate of the population moment equal to the sample moment,
         i.e., m1 (θ̂) ≡ 0. Then the moment-parameter equation is inverted to solve for
         the parameter estimate.

In this case,
                                                n
                               m1 (θ̂) = θ̂ − ∑ yt /n = 0.
                                               t=1
       n            p
Since ∑t=1 yt /n → θ0 by the LLN, the estimator is consistent.
    More on the method of moments
    Continuing with the above example, the variance of a χ2 (θ0 ) r.v. is

                                                     2
                             V (yt ) = E yt − θ0          = 2θ0 .


       • Define
                                                n                 2
                                               ∑t=1 (yt − ȳ)
                             m2 (θ) = 2θ −
                                                     n
       • The MM estimator would set
                                            n                 2
                                           ∑t=1 (yt − ȳ)
                           m2 (θ̂) = 2θ̂ −                ≡ 0.
                                                 n

         Again, by the LLN, the sample variance is consistent for the true variance,
         that is,
                                  n              2
                                 ∑t=1 (yt − ȳ) p
                                                → 2θ0 .
                                       n
         So,
                                           n              2
                                          ∑t=1 (yt − ȳ)
                                   θ̂ =                  ,
                                               2n
         which is obtained by inverting the moment-parameter equation, is consistent.
                         12. INTRODUCTION TO THE SECOND HALF                           245

Example: Generalized method of moments (GMM)
      The previous two examples give two estimators of θ0 which are both consistent.
With a given sample, the estimators will be different in general.

        • With two moment-parameter equations and only one parameter, we have
          overidentification, which means that we have more information than is strictly
          necessary for consistent estimation of the parameter.
        • The GMM combines information from the two moment-parameter equations
          to form a new estimator which will be more efficient, in general (proof of this
          below).

From the first example, define m1t (θ) = θ − yt . We already have that m1 (θ) is the
sample average of m1t (θ), i.e.,
                                                       n
                               m1 (θ) = 1/n ∑ m1t (θ)
                                                   t=1
                                                    n
                                          = θ − ∑ yt /n.
                                                   t=1
                                                                        
Clearly, when evaluated at the true parameter value θ0 , both E m1t (θ0 ) = 0 and
         
E m1 (θ0 ) = 0.
      From the second example we define additional moment conditions


                                   m2t (θ) = 2θ − (yt − ȳ)2


and
                                                n              2
                                               ∑t=1 (yt − ȳ)
                             m2 (θ) = 2θ −                    .
                                                     n
                                                a.s.
Again, it is clear from the LLN that m2 (θ0 ) → 0. The MM estimator would chose θ̂ to
set either m1 (θ̂) = 0 or m2 (θ̂) = 0. In general, no single value of θ will solve the two
equations simultaneously.
                         12. INTRODUCTION TO THE SECOND HALF                          246

      • The GMM estimator is based on defining a measure of distance d(m(θ)),
         where m(θ) = (m1 (θ), m2 (θ))0 , and choosing


                                θ̂ = arg min sn (θ) = d (m(θ)) .
                                           Θ


An example would be to choose d(m) = m0 Am, where A is a positive definite ma-
trix. While it’s clear that the MM gives consistent estimates if there is a one-to-one
relationship between parameters and moments, it’s not immediately obvious that the
GMM estimator is consistent. (We’ll see later that it is.)
   These examples show that these widely used estimators may all be interpreted as
the solution of an optimization problem. For this reason, the study of extremum esti-
mators is useful for its generality. We will see that the general results extend smoothly
to the more specialized results available for specific estimators. After studying ex-
tremum estimators in general, we will study the GMM estimator, then QML and NLS.
The reason we study GMM first is that LS, IV, NLS, MLE, QML and other well-known
parametric estimators may all be interpreted as special cases of the GMM estimator,
so the general results on GMM can simplify and unify the treatment of these other
estimators. Nevertheless, there are some special results on QML and NLS, and both
are important in empirical research, which makes focus on them useful.


   One of the focal points of the course will be nonlinear models. This is not to
suggest that linear models aren’t useful. Linear models are more general than they
might first appear, since one can employ nonlinear transformations of the variables:

                                h                                  i
                                                                       0
                   ϕ0 (yt ) =       ϕ1 (xt ) ϕ2 (xt ) · · · ϕ p (xt ) θ + εt

For example,
                          ln yt = α + βx1t + γx21t + δx1t x2t + εt
                          12. INTRODUCTION TO THE SECOND HALF                           247

fits this form.


       • The important point is that the model is linear in the parameters but not nec-
          essarily linear in the variables.


In spite of this generality, situations often arise which simply can not be convincingly
represented by linear in the parameters models. Also, theory that applies to nonlinear
models also applies to linear models, so one may as well start off with the general case.
Example: Expenditure shares
    Roy’s Identity states that the quantity demanded of the ith of G goods is

                                          −∂v(p, y)/∂pi
                                   xi =                 .
                                           ∂v(p, y)/∂y

An expenditure share is
                                          si ≡ pi xi /y,

so necessarily si ∈ [0, 1], and ∑G
                                 i=1 si = 1. No linear in the parameters model for xi or si

with a parameter space that is defined independent of the data can guarantee that either
of these conditions holds. These constraints will often be violated by estimated linear
models, which calls into question their appropriateness in cases of this sort.
Example: Binary limited dependent variable
    The referendum contingent valuation (CV) method of infering the social value of
a project provides a simple example. This example is a special case of more general
discrete choice (or binary response) models. Individuals are asked if they would pay
an amount A for provision of a project. Indirect utility in the base case (no project) is
v0 (m, z) + ε0 , where m is income and z is a vector of other variables such as prices,
personal characteristics, etc. After provision, utility is v1 (m, z) + ε1 . The random terms
εi , i = 1, 2, reflect variations of preferences in the population. With this, an individual
                              12. INTRODUCTION TO THE SECOND HALF                                   248

agrees1 to pay A if

                              ε|0 {z
                                  − ε}1          v1 (m − A, z) − v0 (m, z)
                                           <     |          {z           }
                                  ε                       ∆v(w, A)

Define ε = ε0 − ε1 , let w collect m and z, and let ∆v(w, A) = v1 (m − A, z) − v0(m, z).
Define y = 1 if the consumer agrees to pay A for the change, y = 0 otherwise. The
probability of agreement is


(12.0.1)                              Pr(y = 1) = Fε [∆v(w, A)].


To simplify notation, define p(w, A) ≡ Fε [∆v(w, A)]. To make the example specific,
suppose that


                                          v1 (m, z) = α − βm

                                          v0 (m, z) = −βm


and ε0 and ε1 are i.i.d. extreme value random variables. That is, utility depends only
on income, preferences in both states are homothetic, and a specific distributional as-
sumption is made on the distribution of preferences in the population. With these
assumptions (the details are unimportant here, see articles by D. McFadden if you’re
interested) it can be shown that


                                      p(A, θ) = Λ (α + βA) ,


where Λ(z) is the logistic distribution function


                                      Λ(z) = (1 + exp(−z))−1 .

1We assume here that responses are truthful, that is there is no strategic behavior and that individuals
are able to order their preferences in this hypothetical situation.
                         12. INTRODUCTION TO THE SECOND HALF                            249

This is the simple logit model: the choice probability is the logit function of a linear in
parameters function.
Now, y is either 0 or 1, and the expected value of y is Λ (α + βA) . Thus, we can write


                                    y = Λ (α + βA) + η

                                E (η) = 0.


One could estimate this by (nonlinear) least squares
                                         1
                            α̂,β̂ = arg min ∑ (y − Λ (α + βA))2
                                           n t

The main point is that it is impossible that Λ (α + βA) can be written as a linear in the
parameters model, in the sense that, for arbitrary A, there are no θ, ϕ(A) such that


                                 Λ (α + βA) = ϕ(A)0 θ, ∀A


where ϕ(A) is a p-vector valued function of A and θ is a p dimensional parameter.
This is because for any θ, we can always find a A such that ϕ(A)0 θ will be negative
or greater than 1, which is illogical, since it is the expectation of a 0/1 binary random
variable. Since this sort of problem occurs often in empirical work, it is useful to study
NLS and other nonlinear models.
   After discussing these estimation methods for parametric models we’ll briefly in-
troduce nonparametric estimation methods. These methods allow one, for example, to
estimate f (xt ) consistently when we are not willing to assume that a model of the form


                                      yt = f (xt ) + εt
                         12. INTRODUCTION TO THE SECOND HALF                      250

can be restricted to a parametric form


                                       yt = f (xt , θ) + εt

                              Pr(εt < z) = Fε (z|φ, xt )

                                         θ ∈ Θ, φ ∈ Φ


where f (·) and perhaps Fε (z|φ, xt ) are of known functional form. This is important
since economic theory gives us general information about functions and the signs of
their derivatives, but not about their specific form.
   Then we’ll look at simulation-based methods in econometrics. These methods
allow us to substitute computer power for mental power. Since computer power is
becoming relatively cheap compared to mental effort, any econometrician who lives
by the principles of economic theory should be interested in these techniques.
   Finally, we’ll look at how econometric computations can be done in parallel on a
cluster of computers. This allows us to harness more computational power to work
with more complex models that can be dealt with using a desktop computer.
                                     CHAPTER 13


                        Numeric optimization methods

   Readings: Hamilton, ch. 5, section 7 (pp. 133-139)∗ ; Gourieroux and Monfort,
Vol. 1, ch. 13, pp. 443-60∗ ; Goffe, et. al. (1994).
   If we’re going to be applying extremum estimators, we’ll need to know how to find
an extremum. This section gives a very brief introduction to what is a large literature
on numeric optimization methods. We’ll consider a few well-known techniques, and
one fairly new technique that may allow one to solve difficult problems. The main
objective is to become familiar with the issues, and to learn how to use the BFGS
algorithm at the practical level.
   The general problem we consider is how to find the maximizing element θ̂ (a K
-vector) of a function s(θ). This function may not be continuous, and it may not be
differentiable. Even if it is twice continuously differentiable, it may not be globally
concave, so local maxima, minima and saddlepoints may all exist. Supposing s(θ)
were a quadratic function of θ, e.g.,

                                                 1
                                s(θ) = a + b0 θ + θ0Cθ,
                                                 2

the first order conditions would be linear:


                                    Dθ s(θ) = b +Cθ

so the maximizing (minimizing) element would be θ̂ = −C −1 b. This is the sort of prob-
lem we have with linear models estimated by OLS. It’s also the case for feasible GLS,


                                              251
                            13.2. DERIVATIVE-BASED METHODS                            252

since conditional on the estimate of the varcov matrix, we have a quadratic objective
function in the remaining parameters.
   More general problems will not have linear f.o.c., and we will not be able to solve
for the maximizer analytically. This is when we need a numeric optimization method.



                                     13.1. Search

   The idea is to create a grid over the parameter space and evaluate the function at
each point on the grid. Select the best point. Then refine the grid in the neighborhood
of the best point, and continue until the accuracy is ”good enough”. See Figure 13.1.1.
One has to be careful that the grid is fine enough in relationship to the irregularity of
the function to ensure that sharp peaks are not missed entirely.
   To check q values in each dimension of a K dimensional parameter space, we need
to check qK points. For example, if q = 100 and K = 10, there would be 100 10 points
to check. If 1000 points can be checked in a second, it would take 3. 171 × 10 9 years
to perform the calculations, which is approximately the age of the earth. The search
method is a very reasonable choice if K is small, but it quickly becomes infeasible if
K is moderate or large.



                          13.2. Derivative-based methods

   13.2.1. Introduction. Derivative-based methods are defined by

     (1) the method for choosing the initial value, θ1
     (2) the iteration method for choosing θk+1 given θk (based upon derivatives)
     (3) the stopping criterion.

The iteration method can be broken into two problems: choosing the stepsize a k (a
scalar) and choosing the direction of movement, d k , which is of the same dimension
                             13.2. DERIVATIVE-BASED METHODS                          253


                          F IGURE 13.1.1. The search method




of θ, so that
                                  θ(k+1) = θ(k) + ak d k .

    A locally increasing direction of search d is a direction such that

                                          ∂s(θ + ad)
                                   ∃a :              >0
                                              ∂a

for a positive but small. That is, if we go in direction d, we will improve on the
objective function, at least if we don’t go too far in that direction.

       • As long as the gradient at θ is not zero there exist increasing directions, and
         they can all be represented as Qk g(θk ) where Qk is a symmetric pd matrix and
                             13.2. DERIVATIVE-BASED METHODS                          254

         g (θ) = Dθ s(θ) is the gradient at θ. To see this, take a T.S. expansion around
         a0 = 0


                  s(θ + ad) = s(θ + 0d) + (a − 0) g(θ + 0d)0 d + o(1)

                             = s(θ) + ag(θ)0d + o(1)


         For small enough a the o(1) term can be ignored. If d is to be an increas-
         ing direction, we need g(θ)0d > 0. Defining d = Qg(θ), where Q is positive
         definite, we guarantee that


                                g(θ)0d = g(θ)0 Qg(θ) > 0


         unless g(θ) = 0. Every increasing direction can be represented in this way
         (p.d. matrices are those such that the angle between g and Qg(θ) is less that
         90 degrees). See Figure 13.2.1.
      • With this, the iteration rule becomes


                                θ(k+1) = θ(k) + ak Qk g(θk )


and we keep going until the gradient becomes zero, so that there is no increasing
direction. The problem is how to choose a and Q.

      • Conditional on Q, choosing a is fairly straightforward. A simple line search
         is an attractive possibility, since a is a scalar.
      • The remaining problem is how to choose Q.
      • Note also that this gives no guarantees to find a global maximum.

   13.2.2. Steepest descent. Steepest descent (ascent if we’re maximizing) just sets
Q to and identity matrix, since the gradient provides the direction of maximum rate of
change of the objective function.
                             13.2. DERIVATIVE-BASED METHODS                         255


                   F IGURE 13.2.1. Increasing directions of search




      • Advantages: fast - doesn’t require anything more than first derivatives.
      • Disadvantages: This doesn’t always work too well however (draw picture of
         banana function).


   13.2.3. Newton-Raphson. The Newton-Raphson method uses information about
the slope and curvature of the objective function to determine which direction and how
far to move from an initial point. Supposing we’re trying to maximize s n (θ). Take a
second order Taylor’s series approximation of sn (θ) about θk (an initial guess).
                                                      0            
          sn (θ) ≈ sn (θk ) + g(θk )0 θ − θk + 1/2 θ − θk H(θk ) θ − θk
                             13.2. DERIVATIVE-BASED METHODS                          256

To attempt to maximize sn (θ), we can maximize the portion of the right-hand side that
depends on θ, i.e., we can maximize
                                                 0            
                    s̃(θ) = g(θk )0 θ + 1/2 θ − θk H(θk ) θ − θk


with respect to θ. This is a much easier problem, since it is a quadratic function in θ,
so it has linear first order conditions. These are

                                                                  
                                          k          k         k
                           Dθ s̃(θ) = g(θ ) + H(θ ) θ − θ

So the solution for the next round estimate is


                               θk+1 = θk − H(θk )−1 g(θk )


This is illustrated in Figure 13.2.2.
    However, it’s good to include a stepsize, since the approximation to s n (θ) may be
bad far away from the maximizer θ̂, so the actual iteration formula is


                              θk+1 = θk − ak H(θk )−1 g(θk )


       • A potential problem is that the Hessian may not be negative definite when
         we’re far from the maximizing point. So −H(θk )−1 may not be positive def-
         inite, and −H(θk )−1 g(θk ) may not define an increasing direction of search.
         This can happen when the objective function has flat regions, in which case
         the Hessian matrix is very ill-conditioned (e.g., is nearly singular), or when
         we’re in the vicinity of a local minimum, H(θk ) is positive definite, and our
         direction is a decreasing direction of search. Matrix inverses by comput-
         ers are subject to large errors when the matrix is ill-conditioned. Also, we
                    13.2. DERIVATIVE-BASED METHODS                            257


              F IGURE 13.2.2. Newton-Raphson method




  certainly don’t want to go in the direction of a minimum when we’re maxi-
  mizing. To solve this problem, Quasi-Newton methods simply add a positive
  definite component to H(θ) to ensure that the resulting matrix is positive def-
  inite, e.g., Q = −H(θ) + bI, where b is chosen large enough so that Q is
  well-conditioned and positive definite. This has the benefit that improvement
  in the objective function is guaranteed.
• Another variation of quasi-Newton methods is to approximate the Hessian by
  using successive gradient evaluations. This avoids actual calculation of the
  Hessian, which is an order of magnitude (in the dimension of the parameter
  vector) more costly than calculation of the gradient. They can be done to
                           13.2. DERIVATIVE-BASED METHODS                         258

         ensure that the approximation is p.d. DFP and BFGS are two well-known
         examples.

Stopping criteria
   The last thing we need is to decide when to stop. A digital computer is subject to
limited machine precision and round-off errors. For these reasons, it is unreasonable
to hope that a program can exactly find the point that maximizes a function. We need
to define acceptable tolerances. Some stopping criteria are:

      • Negligable change in parameters:


                                 |θkj − θk−1
                                         j | < ε1 , ∀ j


      • Negligable relative change:

                                     θkj − θk−1
                                            j
                                 |                | < ε2 , ∀ j
                                       θk−1
                                        j

      • Negligable change of function:


                                |s(θk ) − s(θk−1 )| < ε3


      • Gradient negligibly different from zero:


                                     |g j (θk )| < ε4 , ∀ j


      • Or, even better, check all of these.
      • Also, if we’re maximizing, it’s good to check that the last round (real, not
         approximate) Hessian is negative definite.

Starting values
   The Newton-Raphson and related algorithms work well if the objective function
is concave (when maximizing), but not so well if there are convex regions and local
                             13.2. DERIVATIVE-BASED METHODS                              259

minima or multiple local maxima. The algorithm may converge to a local minimum
or to a local maximum that is not optimal. The algorithm may also have difficulties
converging at all.

       • The usual way to “ensure” that a global maximum has been found is to use
         many different starting values, and choose the solution that returns the highest
         objective function value. THIS IS IMPORTANT in practice. More on this
         later.

Calculating derivatives
    The Newton-Raphson algorithm requires first and second derivatives. It is often
difficult to calculate derivatives (especially the Hessian) analytically if the function
sn (·) is complicated. Possible solutions are to calculate derivatives numerically, or to
use programs such as MuPAD or Mathematica to calculate analytic derivatives. For
example, Figure 13.2.3 shows MuPAD1 calculating a derivative that I didn’t know off
the top of my head, and one that I did know.

       • Numeric derivatives are less accurate than analytic derivatives, and are usu-
         ally more costly to evaluate. Both factors usually cause optimization pro-
         grams to be less successful when numeric derivatives are used.
       • One advantage of numeric derivatives is that you don’t have to worry about
         having made an error in calculating the analytic derivative. When program-
         ming analytic derivatives it’s a good idea to check that they are correct by
         using numeric derivatives. This is a lesson I learned the hard way when writ-
         ing my thesis.



1MuPAD is not a freely distributable program, so it’s not on the CD. You can download it from
http://www.mupad.de/download.shtml
                     13.2. DERIVATIVE-BASED METHODS                            260


      F IGURE 13.2.3. Using MuPAD to get analytic derivatives




• Numeric second derivatives are much more accurate if the data are scaled so
  that the elements of the gradient are of the same order of magnitude. Exam-
  ple: if the model is yt = h(αxt + βzt ) + εt , and estimation is by NLS, suppose
  that Dα sn (·) = 1000 and Dβ sn (·) = 0.001. One could define α∗ = α/1000;
  xt∗ = 1000xt ;β∗ = 1000β; zt∗ = zt /1000. In this case, the gradients Dα∗ sn (·)
  and Dβ sn (·) will both be 1.
      In general, estimation programs always work better if data is scaled in
  this way, since roundoff errors are less likely to become important. This is
  important in practice.
                                     13.4. EXAMPLES                                   261

      • There are algorithms (such as BFGS and DFP) that use the sequential gradi-
         ent evaluations to build up an approximation to the Hessian. The iterations
         are faster for this reason since the actual Hessian isn’t calculated, but more
         iterations usually are required for convergence.
      • Switching between algorithms during iterations is sometimes useful.


                             13.3. Simulated Annealing

   Simulated annealing is an algorithm which can find an optimum in the presence
of nonconcavities, discontinuities and multiple local minima/maxima. Basically, the
algorithm randomly selects evaluation points, accepts all points that yield an increase
in the objective function, but also accepts some points that decrease the objective func-
tion. This allows the algorithm to escape from local minima. As more and more points
are tried, periodically the algorithm focuses on the best point so far, and reduces the
range over which random points are generated. Also, the probability that a negative
move is accepted reduces. The algorithm relies on many evaluations, as in the search
method, but focuses in on promising areas, which reduces function evaluations with
respect to the search method. It does not require derivatives to be evaluated. I have a
program to do this if you’re interested.


                                   13.4. Examples

   This section gives a few examples of how some nonlinear models may be estimated
using maximum likelihood.


   13.4.1. Discrete Choice: The logit model. In this section we will consider max-
imum likelihood estimation of the logit model for binary 0/1 dependent variables. We
will use the BFGS algotithm to find the MLE.
                                         13.4. EXAMPLES                             262

   We saw an example of a binary choice model in equation 12.0.1. A more general
representation is


                                           y∗ = g(x) − ε

                                            y = 1(y∗ > 0)

                                   Pr(y = 1) = Fε [g(x)]

                                                ≡ p(x, θ)


   The log-likelihood function is


                            1 n
                    sn (θ) = ∑ (yi ln p(xi , θ) + (1 − yi ) ln [1 − p(xi , θ)])
                            n i=1
   For the logit model (see the contingent valuation example above), the probability
has the specific form


                                                     1
                                   p(x, θ) =
                                               1 + exp(−x0θ)
   You should download and examine LogitDGP.m , which generates data according
to the logit model, logit.m , which calculates the loglikelihood, and EstimateLogit.m ,
which sets things up and calls the estimation routine, which uses the BFGS algorithm.
   Here are some estimation results with n = 100, and the true θ = (0, 1) 0.


***********************************************
Trial of MLE estimation of Logit model

MLE Estimation Results
BFGS convergence: Normal convergence

Average Log-L: 0.607063
Observations: 100
                                      13.4. EXAMPLES                                  263

             estimate       st. err       t-stat       p-value
constant       0.5400        0.2229       2.4224        0.0154
slope          0.7566        0.2374       3.1863        0.0014

Information Criteria
CAIC : 132.6230
 BIC : 130.6230
 AIC : 125.4127
***********************************************



   The estimation program is calling mle_results(), which in turn calls a number
of other routines. These functions are part of the octave-forge repository.


   13.4.2. Count Data: The Poisson model. Demand for health care is usually
thought of a a derived demand: health care is an input to a home production func-
tion that produces health, and health is an argument of the utility function. Grossman
(1972), for example, models health as a capital stock that is subject to depreciation
(e.g., the effects of ageing). Health care visits restore the stock. Under the home pro-
duction framework, individuals decide when to make health care visits to maintain
their health stock, or to deal with negative shocks to the stock in the form of accidents
or illnesses. As such, individual demand will be a function of the parameters of the
individuals’ utility functions.
   The MEPS health data file , meps1996.data, contains 4564 observations on six
measures of health care usage. The data is from the 1996 Medical Expenditure Panel
Survey (MEPS). You can get more information at http://www.meps.ahrq.gov/.
The six measures of use are are office-based visits (OBDV), outpatient visits (OPV),
inpatient visits (IPV), emergency room visits (ERV), dental visits (VDV), and number
of prescription drugs taken (PRESCR). These form columns 1 - 6 of meps1996.data.
The conditioning variables are public insurance (PUBLIC), private insurance (PRIV),
                                       13.4. EXAMPLES                                     264

sex (SEX), age (AGE), years of education (EDUC), and income (INCOME). These
form columns 7 - 12 of the file, in the order given here. PRIV and PUBLIC are 0/1
binary variables, where a 1 indicates that the person has access to public or private
insurance coverage. SEX is also 0/1, where 1 indicates that the person is female. This
data will be used in examples fairly extensively in what follows.
     The program ExploreMEPS.m shows how the data may be read in, and gives some
descriptive information about variables, which follows:
     All of the measures of use are count data, which means that they take on the values
0, 1, 2, .... It might be reasonable to try to use this information by specifying the density
as a count data density. One of the simplest count data densities is the Poisson density,
which is

                                              exp(−λ)λy
                                  fY (y) =              .
                                                  y!

The Poisson average log-likelihood function is

                                    1 n
                            sn (θ) = ∑ (−λi + yi ln λi − ln yi !)
                                    n i=1

We will parameterize the model as


                  λi = exp(x0i β)

                  xi = [1 PU BLIC PRIV SEX AGE EDUC INC]0.


This ensures that the mean is positive, as is required for the Poisson model. Note that
for this parameterization
                                              ∂λ/∂β j
                                       βj =
                                                λ
so
                                     13.4. EXAMPLES                                    265




                                       β j x j = ηλx j ,

the elasticity of the conditional mean of y with respect to the jth conditioning variable.
   The program EstimatePoisson.m estimates a Poisson model using the full data set.
The results of the estimation, using OBDV as the dependent variable are here:



MPITB extensions found


OBDV




******************************************************
Poisson model, MEPS 1996 full data set


MLE Estimation Results
BFGS convergence: Normal convergence


Average Log-L: -3.671090
Observations: 4564


                  estimate          st. err                t-stat   p-value
constant             -0.791           0.149                -5.290     0.000
pub. ins.             0.848           0.076                11.093     0.000
priv. ins.            0.294           0.071                 4.137     0.000
sex                   0.487           0.055                 8.797     0.000
age                   0.024           0.002                11.471     0.000
                                      13.4. EXAMPLES                                   266

edu                    0.029           0.010            3.061          0.002
inc                  -0.000            0.000           -0.978          0.328


Information Criteria
CAIC : 33575.6881              Avg. CAIC:       7.3566
 BIC : 33568.6881               Avg. BIC:       7.3551
 AIC : 33523.7064               Avg. AIC:       7.3452
******************************************************




    13.4.3. Duration data and the Weibull model. In some cases the dependent vari-
able may be the time that passes between the occurence of two events. For example,
it may be the duration of a strike, or the time needed to find a job once one is unem-
ployed. Such variables take on values on the positive real line, and are referred to as
duration data.
    A spell is the period of time between the occurence of initial event and the con-
cluding event. For example, the initial event could be the loss of a job, and the final
event is the finding of a new job. The spell is the period of unemployment.
    Let t0 be the time the initial event occurs, and t1 be the time the concluding event
occurs. For simplicity, assume that time is measured in years. The random variable D
is the duration of the spell, D = t1 − t0 . Define the density function of D, f D (t), with
distribution function FD (t) = Pr(D < t).
    Several questions may be of interest. For example, one might wish to know the
expected time one has to wait to find a job given that one has already waited s years.
The probability that a spell lasts s years is


                        Pr(D > s) = 1 − Pr(D ≤ s) = 1 − FD (s).
                                     13.4. EXAMPLES                                   267

The density of D conditional on the spell already having lasted s years is


                                                  fD (t)
                               fD (t|D > s) =              .
                                                1 − FD (s)
The expectanced additional time required for the spell to end given that is has already
lasted s years is the expectation of D with respect to this density, minus s.
                                            Z ∞                   
                                                        fD (z)
                   E = E (D|D > s) − s =            z            dz − s
                                                t     1 − FD (s)

   To estimate this function, one needs to specify the density f D (t) as a parametric
density, then estimate by maximum likelihood. There are a number of possibilities
including the exponential density, the lognormal, etc. A reasonably flexible model that
is a generalization of the exponential density is the Weibull density


                                                γ
                               fD (t|θ) = e−(λt) λγ(λt)γ−1.

According to this model, E (D) = λ−γ . The log-likelihood is just the product of the log
densities.
   To illustrate application of this model, 402 observations on the lifespan of mon-
gooses in Serengeti National Park (Tanzania) were used to fit a Weibull model. The
”spell” in this case is the lifetime of an individual mongoose. The parameter estimates
and standard errors are λ̂ = 0.559 (0.034) and γ̂ = 0.867 (0.033) and the log-likelihood
value is -659.3. Figure 13.4.1 presents fitted life expectancy (expected additional years
of life) as a function of age, with 95% confidence bands. The plot is accompanied by a
nonparametric Kaplan-Meier estimate of life-expectancy. This nonparametric estima-
tor simply averages all spell lengths greater than age, and then subtracts age. This is
consistent by the LLN.
                                    13.4. EXAMPLES                                   268


           F IGURE 13.4.1. Life expectancy of mongooses, Weibull model




   In the figure one can see that the model doesn’t fit the data well, in that it pre-
dicts life expectancy quite differently than does the nonparametric model. For ages
4-6, the nonparametric estimate is outside the confidence interval that results from the
parametric model, which casts doubt upon the parametric model. Mongooses that are
between 2-6 years old seem to have a lower life expectancy than is predicted by the
Weibull model, whereas young mongooses that survive beyond infancy have a higher
life expectancy, up to a bit beyond 2 years. Due to the dramatic change in the death
                                           13.4. EXAMPLES                                                           269

rate as a function of t, one might specify f D (t) as a mixture of two Weibull densities,
                                                                                                         
                        −(λ1t)γ1                 γ1 −1                     −(λ2t)γ2                 γ2 −1
       fD (t|θ) = δ e              λ1 γ1 (λ1t)               + (1 − δ) e              λ2 γ2 (λ2t)               .


The parameters γi and λi , i = 1, 2 are the parameters of the two Weibull densities, and
δ is the parameter that mixes the two.
   With the same data, θ can be estimated using the mixed model. The results are
a log-likelihood = -623.17. Note that a standard likelihood ratio test cannot be used
to chose between the two models, since under the null that δ = 1 (single density), the
two parameters λ2 and γ2 are not identified. It is possible to take this into account,
but this topic is out of the scope of this course. Nevertheless, the improvement in the
likelihood function is considerable. The parameter estimates are


                               Parameter Estimate St. Error
                               λ1                 0.233           0.016
                               γ1                 1.722           0.166
                               λ2                 1.731           0.101
                               γ2                 1.522           0.096
                               δ                  0.428           0.035

Note that the mixture parameter is highly significant. This model leads to the fit in
Figure 13.4.2. Note that the parametric and nonparametric fits are quite close to one
another, up to around 6 years. The disagreement after this point is not too important,
since less than 5% of mongooses live more than 6 years, which implies that the Kaplan-
Meier nonparametric estimate has a high variance (since it’s an average of a small
number of observations).
   Mixture models are often an effective way to model complex responses, though
they can suffer from overparameterization. Alternatives will be discussed later.
                          13.5. NUMERIC OPTIMIZATION: PITFALLS                          270


       F IGURE 13.4.2. Life expectancy of mongooses, mixed Weibull model




                         13.5. Numeric optimization: pitfalls

   In this section we’ll examine two common problems that can be encountered when
doing numeric optimization of nonlinear models, and some solutions.

   13.5.1. Poor scaling of the data. When the data is scaled so that the magnitudes
of the first and second derivatives are of different orders, problems can easily result. If
we uncomment the appropriate line in EstimatePoisson.m, the data will not be scaled,
and the estimation program will have difficulty converging (it seems to take an infinite
amount of time). With unscaled data, the elements of the score vector have very differ-
ent magnitudes at the initial value of θ (all zeros). To see this run CheckScore.m. With
                         13.5. NUMERIC OPTIMIZATION: PITFALLS                       271

unscaled data, one element of the gradient is very large, and the maximum and mini-
mum elements are 5 orders of magnitude apart. This causes convergence problems due
to serious numerical inaccuracy when doing inversions to calculate the BFGS direction
of search. With scaled data, none of the elements of the gradient are very large, and
the maximum difference in orders of magnitude is 3. Convergence is quick.



   13.5.2. Multiple optima. Multiple optima (one global, others local) can compli-
cate life, since we have limited means of determining if there is a higher maximum the
the one we’re at. Think of climbing a mountain in an unknown range, in a very foggy
place (Figure 13.5.1). You can go up until there’s nowhere else to go up, but since
you’re in the fog you don’t know if the true summit is across the gap that’s at your
feet. Do you claim victory and go home, or do you trudge down the gap and explore
the other side?
   The best way to avoid stopping at a local maximum is to use many starting values,
for example on a grid, or randomly generated. Or perhaps one might have priors about
possible values for the parameters (e.g., from previous studies of similar data).
   Let’s try to find the true minimizer of minus 1 times the foggy mountain function
(since the algoritms are set up to minimize). From the picture, you can see it’s close
to (0, 0), but let’s pretend there is fog, and that we don’t know that. The program
FoggyMountain.m shows that poor start values can lead to problems. It uses SA, which
finds the true global minimum, and it shows that BFGS using a battery of random start
values can also find the global minimum help. The output of one run is here:

MPITB extensions found


======================================================
BFGSMIN final results
                     13.5. NUMERIC OPTIMIZATION: PITFALLS   272


                     F IGURE 13.5.1. A foggy mountain




Used numeric gradient


------------------------------------------------------
STRONG CONVERGENCE
Function conv 1   Param conv 1     Gradient conv 1
------------------------------------------------------
Objective function value -0.0130329
Stepsize 0.102833
43 iterations
                      13.5. NUMERIC OPTIMIZATION: PITFALLS   273

------------------------------------------------------


 param     gradient   change
 15.9999   -0.0000    0.0000
-28.8119    0.0000    0.0000
The result with poor start values
ans =


  16.000    -28.812




================================================
SAMIN final results
NORMAL CONVERGENCE


Func. tol. 1.000000e-10 Param. tol. 1.000000e-03
Obj. fn. value -0.100023


  parameter      search width
             0.037419                0.000018
            -0.000000                0.000051
================================================
Now try a battery of random start values and
a short BFGS on each, then iterate to convergence
The result using 20 randoms start values
ans =
                         13.5. NUMERIC OPTIMIZATION: PITFALLS                        274




   3.7417e-02       2.7628e-07


The true maximizer is near (0.037,0)



In that run, the single BFGS run with bad start values converged to a point far from the
true minimizer, which simulated annealing and BFGS using a battery of random start
values both found the true maximizaer. battery of random start values managed to find
the global max. The moral of the story is be cautious and don’t publish your results
too quickly.
                                      EXERCISES                                      275

Exercises
(1) In octave, type ”help bfgsmin_example”, to find out the location of the file.
   Edit the file to examine it and learn how to call bfgsmin. Run it, and examine the
   output.
(2) In octave, type ”help samin_example”, to find out the location of the file. Edit
   the file to examine it and learn how to call samin. Run it, and examine the output.
(3) Using logit.m and EstimateLogit.m as templates, write a function to calculate the
   probit loglikelihood, and a script to estimate a probit model. Run it using data that
   actually follows a logit model (you can generate it in the same way that is done in
   the logit example).
(4) Study mle_results.m to see what it does. Examine the functions that mle_results.m
   calls, and in turn the functions that those functions call. Write a complete descrip-
   tion of how the whole chain works.
(5) Look at the Poisson estimation results for the OBDV measure of health care use
   and give an economic interpretation. Estimate Poisson models for the other 5
   measures of health care usage.
                                      CHAPTER 14


               Asymptotic properties of extremum estimators

    Readings: Gourieroux and Monfort (1995), Vol. 2, Ch. 24∗ ; Amemiya, Ch. 4
section 4.1∗ ; Davidson and MacKinnon, pp. 591-96; Gallant, Ch. 3; Newey and
McFadden (1994), “Large Sample Estimation and Hypothesis Testing,” in Handbook
of Econometrics, Vol. 4, Ch. 36.




                              14.1. Extremum estimators

    In Definition 12.0.1 we defined an extremum estimator θ̂ as the optimizing element
of an objective function sn (θ) over a set Θ. Let the objective function sn (Zn , θ) depend
                                     h                  i0
upon a n × p random matrix Zn = z1 z2 · · · zn where the zt are p-vectors and
p is finite.




    E XAMPLE 18. Given the model yi = x0i θ + εi , with n observations, define zi =
(yi , x0i )0 . The OLS estimator minimizes
                                                    n        2
                            sn (Zn , θ) = 1/n ∑ yi − x0i θ
                                                   i=1

                                        = 1/n k Y − X θ k2


where Y and X are defined similarly to Z.
                                             276
                                      14.2. CONSISTENCY                                  277

                                     14.2. Consistency

    The following theorem is patterned on a proof in Gallant (1987) (the article, ref.
later), which we’ll see in its original form later in the course. It is interesting to com-
pare the following proof with Amemiya’s Theorem 4.1.1, which is done in terms of
convergence in probability.


    T HEOREM 19. [Consistency of e.e.] Suppose that θ̂n is obtained by maximizing
sn (θ) over Θ.
    Assume

     (1) Compactness: The parameter space Θ is an open bounded subset of Euclidean
         space ℜK . So the closure of Θ, Θ, is compact.
     (2) Uniform Convergence: There is a nonstochastic function s∞ (θ) that is contin-
         uous in θ on Θ such that


                              lim sup |sn (θ) − s∞ (θ)| = 0, a.s.
                            n→∞
                                    θ∈Θ

     (3) Identification: s∞ (·) has a unique global maximum at θ0 ∈ Θ, i.e., s∞ (θ0 ) >
         s∞ (θ), ∀θ 6= θ0 , θ ∈ Θ

         a.s.
Then θ̂n → θ0 .


    Proof: Select a ω ∈ Ω and hold it fixed. Then {sn (ω, θ)} is a fixed sequence of
functions. Suppose that ω is such that sn (θ) converges uniformly to s∞ (θ). This hap-
pens with probability one by assumption (b). The sequence { θ̂n } lies in the compact
set Θ, by assumption (1) and the fact that maximixation is over Θ. Since every se-
quence from a compact set has at least one limit point (Davidson, Thm. 2.12), say that
θ̂ is a limit point of {θ̂n }. There is a subsequence {θ̂nm } ({nm } is simply a sequence of
                                      14.2. CONSISTENCY                                 278

increasing integers) with limm→∞ θ̂nm = θ̂. By uniform convergence and continuity


                                    lim snm (θ̂nm ) = s∞ (θ̂).
                                 m→∞

                                                                  
To see this, first of all, select an element θ̂t from the sequence θ̂nm . Then uniform
convergence implies
                                    lim snm (θ̂t ) = s∞ (θ̂t ).
                                    m→∞

Continuity of s∞ (·) implies that


                                     lim s∞ (θ̂t ) = s∞ (θ̂)
                                     t→∞

                           
since the limit as t → ∞ of θ̂t is θ̂. So the above claim is true.
   Next, by maximization
                                     snm (θ̂nm ) ≥ snm (θ0 )

which holds in the limit, so


                               lim snm (θ̂nm ) ≥ lim snm (θ0 ).
                               m→∞                 m→∞


However,
                                    lim snm (θ̂nm ) = s∞ (θ̂),
                                  m→∞

as seen above, and
                                    lim snm (θ0 ) = s∞ (θ0 )
                                    m→∞

by uniform convergence, so
                                       s∞ (θ̂) ≥ s∞ (θ0 ).

But by assumption (3), there is a unique global maximum of s∞ (θ) at θ0 , so we must
have s∞ (θ̂) = s∞ (θ0 ), and θ̂ = θ0 . Finally, all of the above limits hold almost surely,
                                    14.2. CONSISTENCY                                   279

since so far we have held ω fixed, but now we need to consider all ω ∈ Ω. Therefore
{θ̂n } has only one limit point, θ0 , except on a set C ⊂ Ω with P(C) = 0.
   Discussion of the proof:

      • This proof relies on the identification assumption of a unique global maxi-
         mum at θ0 . An equivalent way to state this is

(2) Identification: Any point θ in Θ with s∞ (θ) ≥ s∞ (θ0 ) must be such that k θ − θ0 k=
0, which matches the way we will write the assumption in the section on nonparametric
inference.

      • We assume that θ̂n is in fact a global maximum of sn (θ) . It is not required to
         be unique for n finite, though the identification assumption requires that the
         limiting objective function have a unique maximizing argument. The previous
         section on numeric optimization methods showed that actually finding the
         global maximum of sn (θ) may be a non-trivial problem.
      • See Amemiya’s Example 4.1.4 for a case where discontinuity leads to break-
         down of consistency.
      • The assumption that θ0 is in the interior of Θ (part of the identification as-
         sumption) has not been used to prove consistency, so we could directly as-
         sume that θ0 is simply an element of a compact set Θ. The reason that we
         assume it’s in the interior here is that this is necessary for subsequent proof
         of asymptotic normality, and I’d like to maintain a minimal set of simple as-
         sumptions, for clarity. Parameters on the boundary of the parameter set cause
         theoretical difficulties that we will not deal with in this course. Just note that
         conventional hypothesis testing methods do not apply in this case.
      • Note that sn (θ) is not required to be continuous, though s∞ (θ) is.
      • The following figures illustrate why uniform convergence is important. In the
         second figure, if the function is not converging around the lower of the two
                           14.2. CONSISTENCY                             280

maxima, there is no guarantee that the maximizer will be in the neighborhood
of the global maximizer.




       With uniform convergence, the maximum of the sample
       objective function eventually must be in the neighborhood
       of the maximum of the limiting objective function




        With pointwise convergence, the sample objective function
        may have its maximum far away from that of the limiting
        objective function
                                     14.2. CONSISTENCY                              281

    We need a uniform strong law of large numbers in order to verify assumption (2)
of Theorem 19. The following theorem is from Davidson, pg. 337.


    T HEOREM 20. [Uniform Strong LLN] Let {Gn (θ)} be a sequence of stochastic
real-valued functions on a totally-bounded metric space (Θ, ρ). Then

                                                 a.s.
                                      sup |Gn (θ)| → 0
                                     θ∈Θ

if and only if
                 a.s.
    (a) Gn (θ) → 0 for each θ ∈ Θ0 , where Θ0 is a dense subset of Θ and
    (b) {Gn (θ)} is strongly stochastically equicontinuous..


       • The metric space we are interested in now is simply Θ ⊂ ℜK , using the Eu-
         clidean norm.
       • The pointwise almost sure convergence needed for assuption (a) comes from
         one of the usual SLLN’s.
       • Stronger assumptions that imply those of the theorem are:
            – the parameter space is compact (this has already been assumed)
            – the objective function is continuous and bounded with probability one on
                 the entire parameter space
            – a standard SLLN can be shown to apply to some point in the parameter
                 space
       • These are reasonable conditions in many cases, and henceforth when deal-
         ing with specific estimators we’ll simply assume that pointwise almost sure
         convergence can be extended to uniform almost sure convergence in this way.
       • The more general theorem is useful in the case that the limiting objective
         function can be continuous in θ even if sn (θ) is discontinuous. This can hap-
         pen because discontinuities may be smoothed out as we take expectations
                          14.3. EXAMPLE: CONSISTENCY OF LEAST SQUARES                                                      282

           over the data. In the section on simlation-based estimation we will se a case
           of a discontinuous objective function.




                         14.3. Example: Consistency of Least Squares

   We suppose that data is generated by random sampling of (y, w), where yt =
α0 + β0 wt +εt . (wt , εt ) has the common distribution function µw µε (w and ε are in-
dependent) with support W × E . Suppose that the variances σ2w and σ2ε are finite.
Let θ0 = (α0 , β0 )0 ∈ Θ, for which Θ is compact. Let xt = (1, wt )0 , so we can write
yt = xt0 θ0 + εt . The sample objective function for a sample size n is
                                   n                  2                   n                          2
           sn (θ) = 1/n ∑ yt − xt0 θ                         = 1/n ∑ xt0 θ0 + εt − xt0 θ
                                  t=1                                     i=1
                                   n                         2         n                    n
                    = 1/n ∑ xt0 θ0 − θ                             + 2/n ∑ xt0 θ0 − θ εt + 1/n ∑ εt2
                                  t=1                                          t=1                               t=1

       • Considering the last term, by the SLLN,
                                         n
                                                  a.s.
                                                         Z       Z
                                  1/n ∑       εt2 →                      ε2 dµW dµE = σ2ε .
                                        t=1                  W       E


       • Considering the second term, since E(ε) = 0 and w and ε are independent,
           the SLLN implies that it converges to zero.
       • Finally, for the first term, for a given θ, we assume that a SLLN applies so
           that
                     n                 2 a.s. Z                                    2
(14.3.1)       1/n ∑       xt0     0
                                  θ −θ     →                         x0 θ 0 − θ            dµW
                    t=1                                      W
                           2                                        Z                               2 Z
           =      α0 − α         + 2 α0 − α              β0 − β                 wdµW + β0 − β                     w2 dµW
                                                                           W                                  W
                           2                                                                  2          
           =      α0 − α         + 2 α0 − α              β0 − β E(w) + β0 − β E w                          2
                                   14.4. ASYMPTOTIC NORMALITY                           283

Finally, the objective function is clearly continuous, and the parameter space is as-
sumed to be compact, so the convergence is also uniform. Thus,

                            2                                      2   
          s∞ (θ) = α0 − α        + 2 α0 − α       β0 − β E(w) + β0 − β E w2 + σ2ε


A minimizer of this is clearly α = α0 , β = β0 .

       E XERCISE 21. Show that in order for the above solution to be unique it is necessary
that E(w2 ) 6= 0. Discuss the relationship between this condition and the problem of
colinearity of regressors.

       This example shows that Theorem 19 can be used to prove strong consistency of
the OLS estimator. There are easier ways to show this, of course - this is only an
example of application of the theorem.

                                  14.4. Asymptotic Normality

       A consistent estimator is oftentimes not very useful unless we know how fast it is
likely to be converging to the true value, and the probability that it is far away from the
true value. Establishment of asymptotic normality with a known scaling factor solves
these two problems. The following theorem is similar to Amemiya’s Theorem 4.1.3
(pg. 111).

       T HEOREM 22. [Asymptotic normality of e.e.] In addition to the assumptions of
Theorem 19, assume
       (a) Jn (θ) ≡ D2θ sn (θ) exists and is continuous in an open, convex neighborhood of
θ0 .
                    a.s.
       (b) {Jn (θn )} → J∞ (θ0 ), a finite negative definite matrix, for any sequence {θn }
that converges almost surely to θ0 .
       √             d                                          √
    (c) nDθ sn (θ0 ) → N 0, I∞ (θ0 ) , where I∞ (θ0 ) = limn→∞ Var nDθ sn (θ0 )
                                   14.4. ASYMPTOTIC NORMALITY                          284

            √             d                                  
     Then       n θ̂ − θ0 → N 0, J∞ (θ0 )−1 I∞ (θ0 )J∞ (θ0 )−1




     Proof: By Taylor expansion:

                                                                              
                          Dθ sn (θ̂n ) = Dθ sn (θ0 ) + D2θ sn (θ∗ ) θ̂ − θ0


where θ∗ = λθ̂ + (1 − λ)θ0 , 0 ≤ λ ≤ 1.


       • Note that θ̂ will be in the neighborhood where D2θ sn (θ) exists with probability
            one as n becomes large, by consistency.
       • Now the l.h.s. of this equation is zero, at least asymptotically, since θ̂n is
            a maximizer and the f.o.c. must hold exactly since the limiting objective
            function is strictly concave in a neighborhood of θ0 .
                                                                     a.s.
       • Also, since θ∗ is between θ̂n and θ0 , and since θ̂n → θ0 , assumption (b) gives

                                                   a.s.
                                       D2θ sn (θ∗ ) → J∞ (θ0 )


So
                                                                     
                          0 = Dθ sn (θ0 ) + J∞ (θ0 ) + o p (1) θ̂ − θ0

     And
                            √                                √         
                       0=    nDθ sn (θ0 ) + J∞ (θ0 ) + o p (1) n θ̂ − θ0

Now J∞ (θ0 ) is a finite negative definite matrix, so the o p (1) term is asymptotically
irrelevant next to J∞ (θ0 ), so we can write

                                a √                        √          
                             0=     nDθ sn (θ0 ) + J∞ (θ0 ) n θ̂ − θ0

                            √             a           √
                                n θ̂ − θ0 = −J∞ (θ0 )−1 nDθ sn (θ0 )
                                     14.4. ASYMPTOTIC NORMALITY                           285

Because of assumption (c), and the formula for the variance of a linear combination of
r.v.’s,
                      √             d                                  
                          n θ̂ − θ0 → N 0, J∞ (θ0 )−1 I∞ (θ0 )J∞ (θ0 )−1

          • Assumption (b) is not implied by the Slutsky theorem. The Slutsky theorem
                             a.s.
            says that g(xn ) → g(x) if xn → x and g(·) is continuous at x. However, the
            function g(·) can’t depend on n to use this theorem. In our case J n (θn ) is a
            function of n. A theorem which applies (Amemiya, Ch. 4) is


     T HEOREM 23. If gn (θ) converges uniformly almost surely to a nonstochastic func-
                                                                        a.s.
tion g∞ (θ) uniformly on an open neighborhood of θ0 , then gn (θ̂) → g∞ (θ0 ) if g∞ (θ0 )
                              a.s.
is continuous at θ0 and θ̂ → θ0 .


          • To apply this to the second derivatives, sufficient conditions would be that the
            second derivatives be strongly stochastically equicontinuous on a neighbor-
            hood of θ0 , and that an ordinary LLN applies to the derivatives when evalu-
            ated at θ ∈ N(θ0 ).
          • Stronger conditions that imply this are as above: continuous and bounded
            second derivatives in a neighborhood of θ0 .


          • Skip this in lecture. A note on the order of these matrices: Supposing that
            sn (θ) is representable as an average of n terms, which is the case for all es-
            timators we consider, D2θ sn (θ) is also an average of n matrices, the elements
            of which are not centered (they do not have zero expectation). Supposing a
            SLLN applies, the almost sure limit of D2θ sn (θ0 ), J∞ (θ0 ) = O(1), as we saw in
                                                               √              d             
            Example 51. On the other hand, assumption (c): nDθ sn (θ0 ) → N 0, I∞ (θ0 )
            means that
                                       √
                                        nDθ sn (θ0 ) = O p ()
                                      14.5. EXAMPLES                                      286
                                                                             √
         where we use the result of Example 49. If we were to omit the           n, we’d have

                                                    1
                                Dθ sn (θ0 ) = n− 2 O p (1)
                                                  1
                                            = O p n− 2


         where we use the fact that O p (nr )O p (nq ) = O p (nr+q ). The sequence Dθ sn (θ0 )
                                               √
         is centered, so we need to scale by n to avoid convergence to zero.



                                     14.5. Examples

   14.5.1. Binary response models. Binary response models arise in a variety of
contexts. We’ve already seen a logit model. Another simple example is a probit
threshold-crossing model. Assume that


                                    y∗ = x 0 β − ε

                                     y = 1(y∗ > 0)

                                     ε ∼ N(0, 1)


Here, y∗ is an unobserved (latent) continuous variable, and y is a binary variable that
indicates whether y∗ is negative or positive. Then Pr(y = 1) = Pr(ε < xβ) = Φ(xβ),
where
                                                            ε2
                                    Z xβ
                           Φ(•) =          (2π)−1/2 exp(−      )dε
                                      −∞                    2
is the standard normal distribution function.
   In general, a binary response model will require that the choice probability be
parameterized in some form. For a vector of explanatory variables x, the response
probability will be parameterized in some manner


                                  Pr(y = 1|x) = p(x, θ)
                                         14.5. EXAMPLES                                      287

If p(x, θ) = Λ(x0 θ), we have a logit model. If p(x, θ) = Φ(x0 θ), where Φ(·) is the
standard normal distribution function, then we have a probit model.
    Regardless of the parameterization, we are dealing with a Bernoulli density,


                            fYi (yi |xi ) = p(xi , θ)yi (1 − p(x, θ))1−yi


so as long as the observations are independent, the maximum likelihood (ML) estima-
tor, θ̂, is the maximizer of

                               1 n
                sn (θ) =         ∑ (yi ln p(xi, θ) + (1 − yi) ln [1 − p(xi, θ)])
                               n i=1
                               1 n
(14.5.1)                ≡        ∑ s(yi, xi, θ).
                               n i=1

Following the above theoretical results, θ̂ tends in probability to the θ0 that maximizes
the uniform almost sure limit of sn (θ). Noting that E yi = p(xi , θ0 ), and following
a SLLN for i.i.d. processes, sn (θ) converges almost surely to the expectation of a
representative term s(y, x, θ). First one can take the expectation conditional on x to get

                                                                                  
Ey|x {y ln p(x, θ) + (1 − y) ln[1 − p(x, θ)]} = p(x, θ0 ) ln p(x, θ)+ 1 − p(x, θ0 ) ln [1 − p(x, θ)] .


Next taking expectation over x we get the limiting objective function
                       Z                                       
(14.5.2)    s∞ (θ) =         p(x, θ0 ) ln p(x, θ) + 1 − p(x, θ0 ) ln [1 − p(x, θ)] µ(x)dx,
                       X


where µ(x) is the (joint - the integral is understood to be multiple, and X is the support
of x) density function of the explanatory variables x. This is clearly continuous in θ,
as long as p(x, θ) is continuous, and if the parameter space is compact we therefore
have uniform almost sure convergence. Note that p(x, θ) is continous for the logit and
probit models, for example. The maximizing element of s∞ (θ), θ∗ , solves the first
                                        14.5. EXAMPLES                              288

order conditions
            Z                                                      
                   p(x, θ0 ) ∂             1 − p(x, θ0 ) ∂
                                p(x, θ ) −
                                      ∗
                                                            p(x, θ ) µ(x)dx = 0
                                                                  ∗
             X     p(x, θ∗ ) ∂θ            1 − p(x, θ∗ ) ∂θ

This is clearly solved by θ∗ = θ0 . Provided the solution is unique, θ̂ is consistent.
Question: what’s needed to ensure that the solution is unique?
   The asymptotic normality theorem tells us that


                    √          d                                 
                     n θ̂ − θ0 → N 0, J∞ (θ0 )−1 I∞ (θ0 )J∞ (θ0 )−1 .
                                                        √
In the case of i.i.d. observations I∞ (θ0 ) = limn→∞ Var nDθ sn (θ0 ) is simply the ex-
pectation of a typical element of the outer product of the gradient.


      • There’s no need to subtract the mean, since it’s zero, following the f.o.c. in
         the consistency proof above and the fact that observations are i.i.d.
      • The terms in n also drop out by the same argument:

                          √                               √   1
                   lim Var nDθ sn (θ0 ) =          lim Var nDθ ∑ s(θ0 )
                   n→∞                             n→∞        n t
                                                           1
                                               =   lim Var √ Dθ ∑ s(θ0 )
                                                   n→∞      n   t
                                                       1
                                               =   lim Var ∑ Dθ s(θ0 )
                                                   n→∞ n   t

                                               =    lim VarDθ s(θ0 )
                                                   n→∞

                                               = VarDθ s(θ0 )


So we get
                                                                      
                             0              ∂          0 ∂           0
                         I∞ (θ ) = E          s(y, x, θ ) 0 s(y, x, θ ) .
                                           ∂θ            ∂θ
Likewise,
                                                 ∂2
                                 J∞ (θ0 ) = E         s(y, x, θ0 ).
                                                ∂θ∂θ0
                                         14.5. EXAMPLES                                 289

Expectations are jointly over y and x, or equivalently, first over y conditional on x, then
over x. From above, a typical element of the objective function is

                                                                           
                    s(y, x, θ0 ) = y ln p(x, θ0 ) + (1 − y) ln 1 − p(x, θ0 ) .


Now suppose that we are dealing with a correctly specified logit model:

                                                               −1
                                 p(x, θ) = 1 + exp(−x0 θ)            .


We can simplify the above results in this case. We have that



                     ∂                                   −2
                       p(x, θ) =        1 + exp(−x0 θ)         exp(−x0 θ)x
                    ∂θ
                                                         −1     exp(−x0 θ)
                                  =     1 + exp(−x0 θ)                        x
                                                               1 + exp(−x0 θ)
                                  = p(x, θ) (1 − p(x, θ)) x
                                                          
                                  =     p(x, θ) − p(x, θ)2 x.


So

                       ∂                               
(14.5.3)                 s(y, x, θ0 ) = y − p(x, θ0 ) x
                      ∂θ
                         ∂2       0
                                                  0             0 2
                                                                      0
                              s(θ   ) = −   p(x, θ   ) −  p(x, θ  )   xx .
                       ∂θ∂θ0

Taking expectations over y then x gives

                0
                           Z                                          
(14.5.4)   I∞ (θ ) =           EY y2 − 2p(x, θ0 )p(x, θ0 ) + p(x, θ0 )2 xx0 µ(x)dx
                           Z                          
(14.5.5)              =          p(x, θ0 ) − p(x, θ0 )2 xx0 µ(x)dx.
                                          14.5. EXAMPLES                               290

where we use the fact that EY (y) = EY (y2 ) = p(x, θ0 ). Likewise,
                                    Z                          
                          0
(14.5.6)             J∞ (θ ) = −          p(x, θ0 ) − p(x, θ0 )2 xx0 µ(x)dx.


Note that we arrive at the expected result: the information matrix equality holds (that
is, J∞ (θ0 ) = −I∞ (θ0 )). With this,

                    √          d                                  
                     n θ̂ − θ0 → N 0, J∞ (θ0 )−1 I∞ (θ0 )J∞ (θ0 )−1


simplifies to
                              √          d                
                               n θ̂ − θ0 → N 0, −J∞ (θ0 )−1

which can also be expressed as

                              √             d              
                                  n θ̂ − θ0 → N 0, I∞ (θ0 )−1 .


    On a final note, the logit and standard normal CDF’s are very similar - the logit dis-
tribution is a bit more fat-tailed. While coefficients will vary slightly between the two
models, functions of interest such as estimated probabilities p(x, θ̂) will be virtually
identical for the two models.




    14.5.2. Example: Linearization of a nonlinear model. Ref. Gourieroux and
Monfort, section 8.3.4. White, Intn’l Econ. Rev. 1980 is an earlier reference.
    Suppose we have a nonlinear model


                                        yi = h(xi , θ0 ) + εi


where
                                          εi ∼ iid(0, σ2 )
                                        14.5. EXAMPLES                                 291

The nonlinear least squares estimator solves

                                         1 n
                            θ̂n = arg min ∑ (yi − h(xi , θ))2
                                         n i=1

We’ll study this more later, but for now it is clear that the foc for minimization will
require solving a set of nonlinear equations. A common approach to the problem seeks
to avoid this difficulty by linearizing the model. A first order Taylor’s series expansion
about the point x0 with remainder gives

                                                         ∂h(x0 , θ0 )
                        yi = h(x0 , θ0 ) + (xi − x0 )0                + νi
                                                            ∂x

where νi encompasses both εi and the Taylor’s series remainder. Note that νi is no
longer a classical error - its mean is not zero. We should expect problems.
   Define

                                                         ∂h(x0 , θ0 )
                            α∗ = h(x0 , θ0 ) − x00
                                                            ∂x
                                        ∂h(x0 , θ0 )
                             β∗ =
                                           ∂x

   Given this, one might try to estimate α∗ and β∗ by applying OLS to


                                       yi = α + βxi + νi


       • Question, will α̂ and β̂ be consistent for α∗ and β∗ ?
       • The answer is no, as one can see by interpreting α̂ and β̂ as extremum esti-
         mators. Let γ = (α, β0 )0 .
                                                 1 n
                        γ̂ = arg min sn (γ) =      ∑ (yi − α − βxi)2
                                                 n i=1
The objective function converges to its expectation

                              u.a.s.
                        sn (γ) → s∞ (γ) = EX EY |X (y − α − βx)2
                                            14.5. EXAMPLES                                      292

and γ̂ converges a.s. to the γ0 that minimizes s∞ (γ):


                                γ0 = arg min EX EY |X (y − α − βx)2


Noting that

                                       2                                                  2
              EX EY |X y − α − x0 β             = EX EY |X h(x, θ0 ) + ε − α − βx
                                                                                      2
                                                = σ2 + EX h(x, θ0 ) − α − βx


since cross products involving ε drop out. α0 and β0 correspond to the hyperplane
that is closest to the true regression function h(x, θ0 ) according to the mean squared
error criterion. This depends on both the shape of h(·) and the density function of the
conditioning variables.


                      Inconsistency of the linear approximation, even at
                      the approximation point
                                                                                 x
                                                               h(x,θ)

                                                                           x
                      Tangent line                  x
                                                              β

                α                           x                              x
                            x                                 x
                                                        x                      Fitted line

                                   x

                      x



                                            x_0




       • It is clear that the tangent line does not minimize MSE, since, for example, if
         h(x, θ0 ) is concave, all errors between the tangent line and the true function
         are negative.
                              14.5. EXAMPLES                                    293

• Note that the true underlying parameter θ0 is not estimated consistently, either
  (it may be of a different dimension than the dimension of the parameter of the
  approximating model, which is 2 in this example).
• Second order and higher-order approximations suffer from exactly the same
  problem, though to a less severe degree, of course. For this reason, translog,
  Generalized Leontiev and other “flexible functional forms” based upon second-
  order approximations in general suffer from bias and inconsistency. The bias
  may not be too important for analysis of conditional means, but it can be very
  important for analyzing first and second derivatives. In production and con-
  sumer analysis, first and second derivatives (e.g., elasticities of substitution)
  are often of interest, so in this case, one should be cautious of unthinking
  application of models that impose stong restrictions on second derivatives.
• This sort of linearization about a long run equilibrium is a common practice in
  dynamic macroeconomic models. It is justified for the purposes of theoretical
  analysis of a model given the model’s parameters, but it is not justifiable for
  the estimation of the parameters of the model using data. The section on
  simulation-based methods offers a means of obtaining consistent estimators
  of the parameters of dynamic macro models that are too complex for standard
  methods of analysis.
                                    14.5. EXAMPLES                                        294

Chapter Exercises

    (1) Suppose that xi ∼ uniform(0,1), and yi = 1 − x2i + εi , where εi is iid(0,σ2 ).
        Suppose we estimate the misspecified model yi = α + βxi + ηi by OLS. Find
        the numeric values of α0 and β0 that are the probability limits of α̂ and β̂
    (2) Verify your results using Octave by generating data that follows the above
        model, and calculating the OLS estimator. When the sample size is very large
        the estimator should be very close to the analytical results you obtained in
        question 1.
    (3) Use the asymptotic normality theorem to find the asymptotic distribution of
        the ML estimator of β0 for the model y = xβ0 + ε, where ε ∼ N(0, 1) and is
                                              ∂      2
                                                                0     ∂sn (β)
        independent of x. This means finding ∂β∂β 0 sn (β), J (β ),     ∂β      , and I (β0 ).
        The expressions may involve the unspecified density of x.
                                                                                        −1
    (4) Assume a d.g.p. follows the logit model: Pr(y = 1|x) = 1 + exp(−β0 x)                 .
        (a) Assume that x ∼ uniform(-a,a). Find the asymptotic distribution of the
            ML estimator of β0 (this is a scalar parameter).
        (b) Now assume that x ∼ uniform(-2a,2a). Again find the asymptotic distri-
            bution of the ML estimator of β0 .
        (c) Comment on the results
                                              CHAPTER 15


                  Generalized method of moments (GMM)

    Readings: Hamilton Ch. 14∗ ; Davidson and MacKinnon, Ch. 17 (see pg. 587 for
refs. to applications); Newey and McFadden (1994), “Large Sample Estimation and
Hypothesis Testing,” in Handbook of Econometrics, Vol. 4, Ch. 36.




                                             15.1. Definition

    We’ve already seen one example of GMM in the introduction, based upon the
χ2 distribution. Consider the following example based upon the t-distribution. The
density function of a t-distributed r.v. Yt is
                                             
                           0         Γ θ0 + 1 /2                            −(θ0 +1)/2
                  fYt (yt , θ ) =            1/2
                                                               1 + yt2 /θ0
                                    (πθ0 )         Γ (θ0 /2)

Given an iid sample of size n, one could estimate θ0 by maximizing the log-likelihood
function

                                                                n
                            θ̂ ≡ arg max ln Ln (θ) = ∑ ln fYt (yt , θ)
                                        Θ                      t=1
       • This approach is attractive since ML estimators are asymptotically efficient.
           This is because the ML estimator uses all of the available information (e.g.,
           the distribution is fully specified up to a parameter). Recalling that a dis-
           tribution is completely characterized by its moments, the ML estimator is
           interpretable as a GMM estimator that uses all of the moments. The method
           of moments estimator uses only K moments to estimate a K− dimensional
                                                       295
                                       15.1. DEFINITION                                   296

           parameter. Since information is discarded, in general, by the MM estimator,
           efficiency is lost relative to the ML estimator.
       • Continuing with the example, a t-distributed r.v. with density fYt (yt , θ0 ) has
                                                     
         mean zero and variance V (yt ) = θ0 / θ0 − 2 (for θ0 > 2).
       • Using the notation introduced previously, define a moment condition m 1t (θ) =
                                               n                               n
           θ/ (θ − 2) − yt2 and m1 (θ) = 1/n ∑t=1 m1t (θ) = θ/ (θ − 2) − 1/n ∑t=1  yt2 . As
                                                                                    
           before, when evaluated at the true parameter value θ0 , both Eθ0 m1t (θ0 ) = 0
                            
           and Eθ0 m1 (θ0 ) = 0.
       • Choosing θ̂ to set m1 (θ̂) ≡ 0 yields a MM estimator:

                                                  2
(15.1.1)                                θ̂ =
                                               1 − ny2
                                                  ∑i i

This estimator is based on only one moment of the distribution - it uses less information
than the ML estimator, so it is intuitively clear that the MM estimator will be inefficient
relative to the ML estimator.

       • An alternative MM estimator could be based upon the fourth moment of the
           t-distribution. The fourth moment of a t-distributed r.v. is
                                                      2
                                       4        3 θ0
                              µ4 ≡ E(yt ) = 0                ,
                                           (θ − 2) (θ0 − 4)

           provided θ0 > 4. We can define a second moment condition

                                           3 (θ)2      1 n
                            m2 (θ) =                  − ∑ yt4
                                       (θ − 2) (θ − 4) n t=1

       • A second, different MM estimator chooses θ̂ to set m2 (θ̂) ≡ 0. If you solve
           this you’ll see that the estimate is different from that in equation 15.1.1.

This estimator isn’t efficient either, since it uses only one moment. A GMM estimator
would use the two moment conditions together to estimate the single parameter. The
                                     15.1. DEFINITION                                    297

GMM estimator is overidentified, which leads to an estimator which is efficient relative
to the just identified MM estimators (more on efficiency later).

       • As before, set mn (θ) = (m1 (θ), m2 (θ))0 . The n subscript is used to indicate the
         sample size. Note that m(θ0 ) = O p (n−1/2 ), since it is an average of centered
         random variables, whereas m(θ) = O p (1), θ 6= θ0 , where expectations are
         taken using the true distribution with parameter θ0 . This is the fundamental
         reason that GMM is consistent.
       • A GMM estimator requires defining a measure of distance, d (m(θ)). A pop-
         ular choice (for reasons noted below) is to set d (m(θ)) = m0Wn m, and we
         minimize sn (θ) = m(θ)0Wn m(θ). We assume Wn converges to a finite positive
         definite matrix.
       • In general, assume we have g moment conditions, so m(θ) is a g -vector and
         W is a g × g matrix.

For the purposes of this course, the following definition of the GMM estimator is
sufficiently general:

    D EFINITION 24. The GMM estimator of the K -dimensional parameter vector
θ0 , θ̂ ≡ arg minΘ sn (θ) ≡ mn (θ)0Wn mn (θ), where mn (θ) = n1 ∑t=1
                                                                 n
                                                                     mt (θ) is a g-vector,
g ≥ K, with Eθ m(θ) = 0, and Wn converges almost surely to a finite g × g symmetric
positive definite matrix W∞ .

   What’s the reason for using GMM if MLE is asymptotically efficient?

       • Robustness: GMM is based upon a limited set of moment conditions. For
         consistency, only these moment conditions need to be correctly specified,
         whereas MLE in effect requires correct specification of every conceivable
         moment condition. GMM is robust with respect to distributional misspecifi-
         cation. The price for robustness is loss of efficiency with respect to the MLE
                                    15.2. CONSISTENCY                                   298

         estimator. Keep in mind that the true distribution is not known so if we er-
         roneously specify a distribution and estimate by MLE, the estimator will be
         inconsistent in general (not always).
           – Feasibility: in some cases the MLE estimator is not available, because
              we are not able to deduce the likelihood function. More on this in the
              section on simulation-based estimation. The GMM estimator may still
              be feasible even though MLE is not possible.




                                   15.2. Consistency

   We simply assume that the assumptions of Theorem 19 hold, so the GMM estima-
tor is strongly consistent. The only assumption that warrants additional comments is
that of identification. In Theorem 19, the third assumption reads: (c) Identification:
s∞ (·) has a unique global maximum at θ0 , i.e., s∞ (θ0 ) > s∞ (θ), ∀θ 6= θ0 . Taking the
case of a quadratic objective function sn (θ) = mn (θ)0Wn mn (θ), first consider mn (θ).

                                                                     a.s.
       • Applying a uniform law of large numbers, we get mn (θ) → m∞ (θ).
       • Since Eθ0 mn (θ0 ) = 0 by assumption, m∞ (θ0 ) = 0.
       • Since s∞ (θ0 ) = m∞ (θ0 )0W∞ m∞ (θ0 ) = 0, in order for asymptotic identification,
         we need that m∞ (θ) 6= 0 for θ 6= θ0 , for at least some element of the vector.
                                            a.s.
         This and the assumption that Wn → W∞ , a finite positive g × g definite g × g
         matrix guarantee that θ0 is asymptotically identified.
       • Note that asymptotic identification does not rule out the possibility of lack of
         identification for a given data set - there may be multiple minimizing solutions
         in finite samples.
                                 15.3. ASYMPTOTIC NORMALITY                              299

                                15.3. Asymptotic normality

      We also simply assume that the conditions of Theorem 22 hold, so we will have
asymptotic normality. However, we do need to find the structure of the asymptotic
variance-covariance matrix of the estimator. From Theorem 22, we have

                     √             d                                  
                         n θ̂ − θ0 → N 0, J∞ (θ0 )−1 I∞ (θ0 )J∞ (θ0 )−1

                                            ∂2                                   √ ∂
where J∞ (θ0 ) is the almost sure limit of ∂θ∂θ                   0                         0
                                                0 sn (θ) and I∞ (θ ) = limn→∞ Var n ∂θ sn (θ ).


We need to determine the form of these matrices given the objective function s n (θ) =
mn (θ)0Wn mn (θ).
      Now using the product rule from the introduction,
                                                    
                               ∂               ∂ 0
                                 sn (θ) = 2     m (θ) Wn mn (θ)
                              ∂θ              ∂θ n

Define the K × g matrix
                                                 ∂ 0
                                     Dn (θ) ≡     m (θ) ,
                                                ∂θ n
so:

                                   ∂
(15.3.1)                             s(θ) = 2D(θ)W m (θ) .
                                  ∂θ

(Note that sn (θ), Dn (θ), Wn and mn (θ) all depend on the sample size n, but it is omitted
to unclutter the notation).
      To take second derivatives, let Di be the i− th row of D(θ). Using the product rule,

                           ∂2            ∂
                                 s(θ) =     2Di (θ)Wn m (θ)
                         ∂θ0 ∂θi        ∂θ0
                                                                 
                                                0     0      ∂ 0
                                      = 2DiW D + 2m W          D
                                                            ∂θ0 i
                                    15.3. ASYMPTOTIC NORMALITY                              300

When evaluating the term
                                                                 
                                               0∂
                                       2m(θ) W     D(θ)0i
                                               ∂θ0
at θ0 , assume that ∂θ∂ 0 D(θ)0i satisfies a LLN, so that it converges almost surely to a finite
limit. In this case, we have
                                                     
                                        0 0  ∂     0 0 a.s.
                                   2m(θ ) W     D(θ )i → 0,
                                            ∂θ0
                            a.s.
since m(θ0 ) = o p (1), W → W∞ .
    Stacking these results over the K rows of D, we get

                             ∂2
                      lim         sn (θ0 ) = J∞ (θ0 ) = 2D∞W∞ D0∞ , a.s.,
                            ∂θ∂θ0

where we define lim D = D∞ , a.s., and limW = W∞ , a.s. (we assume a LLN holds).
    With regard to I∞ (θ0 ), following equation 15.3.1, and noting that the scores have
mean zero at θ0 (since E m(θ0 ) = 0 by assumption), we have

                                      √ ∂
                I∞ (θ0 ) =     lim Var n sn (θ0 )
                               n→∞      ∂θ
                          =        lim E 4nDnWn m(θ0 )m(θ)0Wn D0n
                               n→∞
                                                   √             √
                          =        lim E 4DnWn          nm(θ0 )     nm(θ)0 Wn D0n
                               n→∞


Now, given that m(θ0 ) is an average of centered (mean-zero) quantities, it is reasonable
                                                  √
to expect a CLT to apply, after multiplication by n. Assuming this,

                                      √        d
                                       nm(θ0 ) → N(0, Ω∞ ),


where
                                                           
                                   Ω∞ = lim E nm(θ0 )m(θ0 )0 .
                                         n→∞
                         15.4. CHOOSING THE WEIGHTING MATRIX                        301

Using this, and the last equation, we get


                              I∞ (θ0 ) = 4D∞W∞ Ω∞W∞ D0∞


Using these results, the asymptotic normality theorem gives us

        √             d h            −1                        −1 i
            n θ̂ − θ0 → N 0, D∞W∞ D0∞     D∞W∞ Ω∞W∞ D0∞ D∞W∞ D0∞       ,


the asymptotic distribution of the GMM estimator for arbitrary weighting matrix Wn .
Note that for J∞ to be positive definite, D∞ must have full row rank, ρ(D∞ ) = k.




                        15.4. Choosing the weighting matrix

   W is a weighting matrix, which determines the relative importance of violations
of the individual moment conditions. For example, if we are much more sure of the
first moment condition, which is based upon the variance, than of the second, which is
based upon the fourth moment, we could set
                                                     
                                                a 0
                                    W =              
                                                0 b

with a much larger than b. In this case, errors in the second moment condition have
less weight in the objective function.


      • Since moments are not independent, in general, we should expect that there
         be a correlation between the moment conditions, so it may not be desirable
         to set the off-diagonal elements to 0. W may be a random, data dependent
         matrix.
                       15.4. CHOOSING THE WEIGHTING MATRIX                          302

      • We have already seen that the choice of W will influence the asymptotic dis-
        tribution of the GMM estimator. Since the GMM estimator is already ineffi-
        cient w.r.t. MLE, we might like to choose the W matrix to make the GMM
        estimator efficient within the class of GMM estimators defined by mn (θ).
      • To provide a little intuition, consider the linear model y = x0 β + ε, where
        ε ∼ N(0, Ω). That is, he have heteroscedasticity and autocorrelation.
      • Let P be the Cholesky factorization of Ω−1 , e.g, P0 P = Ω−1 .
      • Then the model Py = PXβ + Pε satisfies the classical assumptions of ho-
        moscedasticity and nonautocorrelation, since V (Pε) = PV (ε)P0 = PΩP0 =
        P(P0 P)−1 P0 = PP−1 (P0 )−1 P0 = In . (Note: we use (AB)−1 = B−1 A−1 for A,
        B both nonsingular). This means that the transformed model is efficient.
      • The OLS estimator of the model Py = PXβ + Pε minimizes the objective
        function (y−Xβ)0 Ω−1 (y−Xβ). Interpreting (y − Xβ) = ε(β) as moment con-
        ditions (note that they do have zero expectation when evaluated at β 0 ), the
        optimal weighting matrix is seen to be the inverse of the covariance matrix of
        the moment conditions. This result carries over to GMM estimation. (Note:
        this presentation of GLS is not a GMM estimator, because the number of mo-
        ment conditions here is equal to the sample size, n. Later we’ll see that GLS
        can be put into the GMM framework defined above).


   T HEOREM 25. If θ̂ is a GMM estimator that minimizes mn (θ)0Wn mn (θ), the as-
                                                                         a.s
ymptotic variance of θ̂ will be minimized by choosing Wn so that Wn → W∞ = Ω−1
                                                                            ∞ ,
                                    
where Ω∞ = limn→∞ E nm(θ0 )m(θ0 )0 .


   Proof: For W∞ = Ω−1
                    ∞ , the asymptotic variance

                               −1                            −1
                    D∞W∞ D0∞         D∞W∞ Ω∞W∞ D0∞ D∞W∞ D0∞
                          15.4. CHOOSING THE WEIGHTING MATRIX                          303
                           −1
simplifies to D∞ Ω−1
                  ∞ D∞
                     0           . Now, for any choice such that W∞ 6= Ω−1
                                                                        ∞ , consider the

difference of the inverses of the variances when W = Ω−1 versus when W is some
arbitrary positive definite matrix:

                                                    
                                                     0 −1
                                                                       
         D∞ Ω−1
              ∞ D  0
                   ∞   −  D ∞W ∞ D 0
                                   ∞   D ∞W∞ Ω ∞W∞ D ∞      D ∞ W∞ D 0
                                                                     ∞
                  h                                   −1             i
                         1/2
      = D ∞ Ω∞
             −1/2
                    I − Ω∞    W∞ D0∞ D∞W∞ Ω∞W∞ D0∞          D∞W∞ Ω1/2
                                                                    ∞     Ω−1/2
                                                                           ∞    D0∞


as can be verified by multiplication. The term in brackets is idempotent, which is also
easy to check by multiplication, and is therefore positive semidefinite. A quadratic
form in a positive semidefinite matrix is also positive semidefinite. The difference of
the inverses of the variances is positive semidefinite, which implies that the difference
of the variances is negative semidefinite, which proves the theorem.
   The result



                          √             d h               i
                                                        0 −1
(15.4.1)                      n θ̂ − θ0 → N 0, D∞ Ω−1
                                                   ∞  D ∞


allows us to treat                                    −1 !
                                           D∞ Ω−1
                                               ∞ D∞
                                                  0
                               θ̂ ≈ N θ0 ,                    ,
                                                n
where the ≈ means ”approximately distributed as.” To operationalize this we need
estimators of D∞ and Ω∞ .




                                                       
                                  c∞ is simply ∂ m0n θ̂ , which is consistent by the
       • The obvious estimator of D            ∂θ
                                             ∂ 0
           consistency of θ̂, assuming that ∂θ mn is continuous in θ. Stochastic equicon-
                                                            ∂ 0
           tinuity results can give us this result even if ∂θ mn is not continuous. We now
           turn to estimation of Ω∞ .
                 15.5. ESTIMATION OF THE VARIANCE-COVARIANCE MATRIX                    304

                15.5. Estimation of the variance-covariance matrix

   (See Hamilton Ch. 10, pp. 261-2 and 280-84)∗ .
   In the case that we wish to use the optimal weighting matrix, we need an estimate
                                                   √
of Ω∞ , the limiting variance-covariance matrix of nmn (θ0 ). While one could esti-
mate Ω∞ parametrically, we in general have little information upon which to base a
parametric specification. In general, we expect that:


       • mt will be autocorrelated (Γts = E (mt mt−s
                                                 0 ) 6= 0). Note that this autocovari-


         ance will not depend on t if the moment conditions are covariance stationary.
       • contemporaneously correlated, since the individual moment conditions will
         not in general be independent of one another (E (mit m jt ) 6= 0).
       • and have different variances (E (m2it ) = σ2it ).


Since we need to estimate so many components if we are to take the parametric ap-
proach, it is unlikely that we would arrive at a correct parametric specification. For
this reason, research has focused on consistent nonparametric estimators of Ω ∞ .
   Henceforth we assume that mt is covariance stationary (the covariance between mt
and mt−s does not depend on t). Define the v −th autocovariance of the moment condi-
tions Γv = E (mt mt−s
                  0 ). Note that E (m m0 ) = Γ0 . Recall that m and m are functions of
                                     t t+s    v                t

θ, so for now assume that we have some consistent estimator of θ 0 , so that m̂t = mt (θ̂).
Now
                                   "           !           !#
                                        n          n
       Ωn    = E nm(θ0 )m(θ0 )0 = E n 1/n ∑ mt   1/n ∑ mt0
                                                     t=1          t=1
                    "              !           !#
                             n          n
             = E 1/n        ∑ mt       ∑ mt0
                            t=1        t=1
                        n−1          n−2                1             
             = Γ0 +         Γ1 + Γ01 +    Γ2 + Γ02 · · · + Γn−1 + Γ0n−1
                         n             n                  n
                 15.5. ESTIMATION OF THE VARIANCE-COVARIANCE MATRIX                   305

A natural, consistent estimator of Γv is
                                             n
                                Γbv = 1/n ∑ m̂t m̂t−v
                                                  0
                                                      .
                                           t=v+1

(you might use n − v in the denominator instead). So, a natural, but inconsistent,
estimator of Ω∞ would be

           c    n − 1 c c0  n − 2 c c0              
                                                          d     d
                                                                     
      Ω̂ = Γ0 +        Γ1 + Γ1 +       Γ2 + Γ2 + · · · + Γn−1 + Γn−1
                                                                 0
                  n                  n
                n−1              
           c0 + ∑ n − v Γbv + Γb0v .
         = Γ
                v=1 n

This estimator is inconsistent in general, since the number of parameters to estimate is
more than the number of observations, and increases more rapidly than n, so informa-
tion does not build up as n → ∞.
   On the other hand, supposing that Γv tends to zero sufficiently rapidly as v tends to
∞, a modified estimator
                                        q(n)        
                               Ω̂ = Γ0 + ∑ Γbv + Γb0v ,
                                    c
                                           v=1
             p
where q(n) → ∞ as n → ∞ will be consistent, provided q(n) grows sufficiently slowly.
The term n−v
          n can be dropped because q(n) must be o p (n). This allows information

to accumulate at a rate that satisfies a LLN. A disadvantage of this estimator is that it
may not be positive definite. This could cause one to calculate a negative χ 2 statistic,
for example!




      • Note: the formula for Ω̂ requires an estimate of m(θ0 ), which in turn requires
         an estimate of θ, which is based upon an estimate of Ω! The solution to this
         circularity is to set the weighting matrix W arbitrarily (for example to an
         identity matrix), obtain a first consistent but inefficient estimate of θ0 , then
                 15.5. ESTIMATION OF THE VARIANCE-COVARIANCE MATRIX                   306

         use this estimate to form Ω̂, then re-estimate θ0 . The process can be iterated
         until neither Ω̂ nor θ̂ change appreciably between iterations.

   15.5.1. Newey-West covariance estimator. The Newey-West estimator (Econo-
metrica, 1987) solves the problem of possible nonpositive definiteness of the above
estimator. Their estimator is
                                  q(n)                        
                                                 v
                         Ω̂ = Γ0 + ∑ 1 −
                              c                        Γbv + Γb0v .
                                      v=1       q+1

This estimator is p.d. by construction. The condition for consistency is that n −1/4 q →
0. Note that this is a very slow rate of growth for q. This estimator is nonparametric -
we’ve placed no parametric restrictions on the form of Ω. It is an example of a kernel
estimator.
   In a more recent paper, Newey and West (Review of Economic Studies, 1994) use
pre-whitening before applying the kernel estimator. The idea is to fit a VAR model
to the moment conditions. It is expected that the residuals of the VAR model will be
more nearly white noise, so that the Newey-West covariance estimator might perform
better with short lag lengths..
   The VAR model is


                           m̂t = Θ1 m̂t−1 + · · · + Θ p m̂t−p + ut


This is estimated, giving the residuals ût . Then the Newey-West covariance estimator is
applied to these pre-whitened residuals, and the covariance Ω is estimated combining
the fitted VAR
                                m     c1 m̂t−1 + · · · + Θ
                                ĉt = Θ                  cp m̂t−p

with the kernel estimate of the covariance of the ut . See Newey-West for details.

       • I have a program that does this if you’re interested.
                       15.6. ESTIMATION USING CONDITIONAL MOMENTS                    307

                       15.6. Estimation using conditional moments

   So far, the moment conditions have been presented as unconditional expectations.
One common way of defining unconditional moment conditions is based upon condi-
tional moment conditions.
   Suppose that a random variable Y has zero expectation conditional on the random
variable X
                                              Z
                               EY |X Y =          Y f (Y |X )dY = 0

Then the unconditional expectation of the product of Y and a function g(X ) of X is
also zero. The unconditional expectation is
                                      Z Z                              
                        E Y g(X ) =               Y g(X ) f (Y, X )dY dX .
                                      X       Y


This can be factored into a conditional expectation and an expectation w.r.t. the mar-
ginal density of X :
                                 Z Z                               
                   E Y g(X ) =                Y g(X ) f (Y |X )dY       f (X )dX .
                                  X       Y


Since g(X ) doesn’t depend on Y it can be pulled out of the integral
                                 Z Z                       
                   E Y g(X ) =                Y f (Y |X )dY g(X ) f (X )dX .
                                  X       Y


But the term in parentheses on the rhs is zero by assumption, so


                                          E Y g(X ) = 0


as claimed.
   This is important econometrically, since models often imply restrictions on condi-
tional moments. Suppose a model tells us that the function K(yt , xt ) has expectation,
                        15.6. ESTIMATION USING CONDITIONAL MOMENTS                       308

conditional on the information set It , equal to k(xt , θ),


                                     Eθ K(yt , xt )|It = k(xt , θ).


         • For example, in the context of the classical linear model yt = xt0 β + εt , we can
           set K(yt , xt ) = yt so that k(xt , θ) = xt0 β.




With this, the function
                                    ht (θ) = K(yt , xt ) − k(xt , θ)

has conditional expectation equal to zero


                                           Eθ ht (θ)|It = 0.


This is a scalar moment condition, which isn’t sufficient to identify a K -dimensional
parameter θ (K > 1). However, the above result allows us to form various uncondi-
tional expectations
                                        mt (θ) = Z(wt )ht (θ)

where Z(wt ) is a g × 1-vector valued function of wt and wt is a set of variables drawn
from the information set It . The Z(wt ) are instrumental variables. We now have g
moment conditions, so as long as g > K the necessary condition for identification
holds.
                     15.6. ESTIMATION USING CONDITIONAL MOMENTS                         309

   One can form the n × g matrix
                                                                 
                            Z1 (w1 ) Z2 (w1 ) · · ·      Zg (w1 ) 
                                                                  
                            Z1 (w2 ) Z2 (w2 )            Zg (w2 ) 
                                                                  
                   Zn =  .                               ..       
                            ..                            .       
                                                                  
                                                                  
                              Z1 (wn ) Z2 (wn ) · · ·     Zg (wn )
                                 
                            Z1 
                                0
                                 
                            Z0 
                            2 
                       =         
                                 
                                 
                                 
                              Zn0

With this we can form the g moment conditions
                                                         
                                            h1 (θ) 
                                                    
                                       1 0 h 2 (θ) 
                                                     
                              mn (θ) =  Zn  .       
                                       n  ..        
                                                    
                                                    
                                             hn (θ)
                                         1 0
                                       =   Z hn (θ)
                                         n n
                                         1 n
                                       =   ∑ Zt ht (θ)
                                         n t=1
                                         1 n
                                       =   ∑ mt (θ)
                                         n t=1

where Z(t,·) is the t th row of Zn . This fits the previous treatment. An interesting ques-
tion that arises is how one should choose the instrumental variables Z(wt ) to achieve
maximum efficiency.
                    15.6. ESTIMATION USING CONDITIONAL MOMENTS                      310

                                                                       ∂ 0
   Note that with this choice of moment conditions, we have that Dn ≡ ∂θ m (θ) (a
K × g matrix) is

                                         ∂ 1 0         0
                            Dn (θ) =         Zn hn (θ)
                                        ∂θ n
                                                    
                                        1 ∂ 0
                                      =       h (θ) Zn
                                        n ∂θ n

which we can define to be
                                            1
                                    Dn (θ) = Hn Zn .
                                            n
where Hn is a K × n matrix that has the derivatives of the individual moment conditions
as its columns. Likewise, define the var-cov. of the moment conditions

                                                    
                         Ωn = E nmn (θ0 )mn (θ0 )0
                                                          
                                   1 0       0      0 0
                            = E Zn hn (θ )hn (θ ) Zn
                                   n
                                                        
                               0      1       0      0 0
                            = Zn E      hn (θ )hn (θ ) Zn
                                      n
                                      Φn
                              ≡ Zn0      Zn
                                      n

where we have defined Φn = Varhn (θ0 ). Note that the dimension of this matrix is
growing with the sample size, so it is not consistently estimable without additional
assumptions.
   The asymptotic normality theorem above says that the GMM estimator using the
optimal weighting matrix is distributed as

                               √             d
                                   n θ̂ − θ0 → N(0,V∞ )
                      15.6. ESTIMATION USING CONDITIONAL MOMENTS                          311

where
                                                          −1              !−1
                                   Hn Zn         Zn0 Φn Zn           Zn0 Hn0
(15.6.1)            V∞ = lim                                                          .
                         n→∞        n                n                  n

Using an argument similar to that used to prove that Ω−1
                                                      ∞ is the efficient weighting

matrix, we can show that putting


                                           Zn = Φ−1 0
                                                 n Hn


causes the above var-cov matrix to simplify to
                                                             −1
                                                 Hn Φ−1
                                                     n Hn
                                                        0
(15.6.2)                       V∞ = lim                              .
                                      n→∞            n

and furthermore, this matrix is smaller that the limiting var-cov for any other choice
of instrumental variables. (To prove this, examine the difference of the inverses of the
var-cov matrices with the optimal intruments and with non-optimal instruments. As
above, you can show that the difference is positive semi-definite).

        • Note that both Hn , which we should write more properly as Hn (θ0 ), since it
           depends on θ0 , and Φ must be consistently estimated to apply this.
        • Usually, estimation of Hn is straightforward - one just uses

                                      b = ∂ h0n θ̃ ,
                                                  
                                      H
                                          ∂θ

           where θ̃ is some initial consistent estimator based on non-optimal instru-
           ments.
        • Estimation of Φn may not be possible. It is an n × n matrix, so it has more
           unique elements than n, the sample size, so without restrictions on the pa-
           rameters it can’t be estimated consistently. Basically, you need to provide
           a parametric specification of the covariances of the ht (θ) in order to be able
                                 15.8. A SPECIFICATION TEST                            312

           to use optimal instruments. A solution is to approximate this matrix para-
           metrically to define the instruments. Note that the simplified var-cov matrix
           in equation 15.6.2 will not apply if approximately optimal instruments are
           used - it will be necessary to use an estimator based upon equation 15.6.1,
                            Zn0 Φn Zn
           where the term       n     must be estimated consistently apart, for example by
           the Newey-West procedure.




                 15.7. Estimation using dynamic moment conditions

     Note that dynamic moment conditions simplify the var-cov matrix, but are often
harder to formulate. The will be added in future editions. For now, the Hansen appli-
cation below is enough.




                                 15.8. A specification test

     The first order conditions for minimization, using the an estimate of the optimal
weighting matrix, are
                                               
                          ∂              ∂ 0  −1        
                            s(θ̂) = 2      mn θ̂ Ω̂ mn θ̂ ≡ 0
                         ∂θ             ∂θ

or


                                    D(θ̂)Ω̂−1 mn (θ̂) ≡ 0

     Consider a Taylor expansion of m(θ̂):



                                                            
(15.8.1)                m(θ̂) = mn (θ0 ) + D0n (θ0 ) θ̂ − θ0 + o p (1).
                                 15.8. A SPECIFICATION TEST                           313

Multiplying by D(θ̂)Ω̂−1 we obtain

                                                                         
         D(θ̂)Ω̂−1 m(θ̂) = D(θ̂)Ω̂−1 mn (θ0 ) + D(θ̂)Ω̂−1 D(θ0 )0 θ̂ − θ0 + o p (1)


The lhs is zero, and since θ̂ tends to θ0 and Ω̂ tends to Ω∞ , we can write

                                      0  a                  0
                                                                 
                           D∞ Ω−1
                               ∞ mn (θ ) = −D∞ Ω∞ D∞ θ̂ − θ
                                                −1 0



or


                   √             a √           
                                              0 −1
                       n θ̂ − θ0 = − n D∞ Ω−1
                                           ∞ D∞    D∞ Ω−1     0
                                                       ∞ mn (θ )

     With this, and taking into account the original expansion (equation 15.8.1), we get

            √           a √            √              
                                                    0 −1
                nm(θ̂) =    nmn (θ0 ) − nD0∞ D∞ Ω−1
                                                 ∞ D∞    D∞ Ω−1     0
                                                             ∞ mn (θ ).


This last can be written as

          √                                             
                  a √   1/2                0 −1
           nm(θ̂) = n Ω∞    − D0∞ D∞ Ω−1
                                      ∞  D ∞    D  Ω
                                                  ∞ ∞
                                                     −1/2
                                                            Ω−1/2
                                                             ∞    mn (θ0 )


Or

     √ −1/2                                       
                a √                −1 0 −1
      nΩ∞ m(θ̂) = n Ig − Ω∞ D∞ D∞ Ω∞ D∞
                          −1/2 0
                                           D∞ Ω∞
                                               −1/2
                                                      Ω−1/2
                                                       ∞    mn (θ0 )


Now
                                √ −1/2        d
                                 nΩ∞ mn (θ0 ) → N(0, Ig )

and one can easily verify that
                                                              
                                                 0 −1
                       P = Ig − Ω∞   D∞ D∞ Ω−1
                                 −1/2 0
                                            ∞  D ∞    D  Ω
                                                        ∞ ∞
                                                           −1/2
                                    15.8. A SPECIFICATION TEST                         314

is idempotent of rank g − K, (recall that the rank of an idempotent matrix is equal to
its trace) so
         √                    0  √            
                                                                      d
                  −1/2
                nΩ∞    m(θ̂)           −1/2
                                     nΩ∞    m(θ̂) = nm(θ̂)0 Ω∞
                                                             −1
                                                                m(θ̂) → χ2 (g − K)


Since Ω̂ converges to Ω∞ , we also have

                                                    d
                                  nm(θ̂)0 Ω̂−1 m(θ̂) → χ2 (g − K)


or
                                                d
                                      n · sn (θ̂) → χ2 (g − K)

supposing the model is correctly specified. This is a convenient test since we just
multiply the optimized value of the objective function by n, and compare with a χ 2 (g −
K) critical value. The test is a general test of whether or not the moments used to
estimate are correctly specified.

       • This won’t work when the estimator is just identified. The f.o.c. are


                                   Dθ sn (θ) = DΩ̂−1 m(θ̂) ≡ 0.


          But with exact identification, both D and Ω̂ are square and invertible (at least
          asymptotically, assuming that asymptotic normality hold), so


                                            m(θ̂) ≡ 0.


          So the moment conditions are zero regardless of the weighting matrix used.
          As such, we might as well use an identity matrix and save trouble. Also
          sn (θ̂) = 0, so the test breaks down.
       • A note: this sort of test often over-rejects in finite samples. One should be
          cautious in rejecting a model when this test rejects.
                15.9. OTHER ESTIMATORS INTERPRETED AS GMM ESTIMATORS                 315

              15.9. Other estimators interpreted as GMM estimators

   15.9.1. OLS with heteroscedasticity of unknown form.


   E XAMPLE 26. White’s heteroscedastic consistent varcov estimator for OLS.


   Suppose y = Xβ0 + ε, where ε ∼ N(0, Σ), Σ a diagonal matrix.

      • The typical approach is to parameterize Σ = Σ(σ), where σ is a finite dimen-
          sional parameter vector, and to estimate β and σ jointly (feasible GLS). This
          will work well if the parameterization of Σ is correct.
      • If we’re not confident about parameterizing Σ, we can still estimate β consis-
          tently by OLS. However, the typical covariance estimator V (β̂) = (X0 X)−1 σ̂2
          will be biased and inconsistent, and will lead to invalid inferences.

By exogeneity of the regressors xt (a K × 1 column vector) we have E(xt εt ) = 0,which
suggests the moment condition

                                                             
                                       mt (β) = xt yt − xt0 β .


In this case, we have exact identification ( K parameters and K moment conditions).
We have
                     m(β) = 1/n ∑ mt = 1/n ∑ xt yt − 1/n ∑ xt xt0 β.
                                        t                 t           t

For any choice of W, m(β) will be identically zero at the minimum, due to exact iden-
tification. That is, since the number of moment conditions is identical to the number
of parameters, the foc imply that m(β̂) ≡ 0 regardless of W. There is no need to use the
“optimal” weighting matrix in this case, an identity matrix works just as well for the
purpose of estimation. Therefore
                                               −1
                        β̂ =       ∑   xt xt0         ∑ xt yt = (X0X)−1X0y,
                                   t                  t
               15.9. OTHER ESTIMATORS INTERPRETED AS GMM ESTIMATORS                    316

which is the usual OLS estimator.
                                                                      −1
    The GMM estimator of the asymptotic varcov matrix is Dc∞ Ω    c∞ 0
                                                             b −1 D        . Recall
                         
     c∞ is simply ∂ m0 θ̂ . In this case
that D            ∂θ


                             c∞ = −1/n ∑ xt xt0 = −X0 X/n.
                             D
                                             t

Recall that a possible estimator of Ω is

                                         n−1       
                                Ω̂ = Γ0 + ∑ Γv + Γv .
                                     c         b b0
                                             v=1

This is in general inconsistent, but in the present case of nonautocorrelation, it simpli-
fies to
                                                c0
                                           Ω̂ = Γ

which has a constant number of elements to estimate, so information will accumulate,
and consistency obtains. In the present case
                                                                 !
                                                      n
                           b = Γ
                           Ω   c0 = 1/n             ∑ m̂t m̂t0
                                                    t=1
                                        "                                 #
                                             n                      2
                               = 1/n        ∑ xt xt0 yt − xt0 β̂
                                           t=1
                                        "                   #
                                             n
                               = 1/n        ∑ xt xt0 ε̂t2
                                           t=1

                                    X0 ÊX
                               =
                                      n

where Ê is an n × n diagonal matrix with ε̂t2 in the position t,t.
               15.9. OTHER ESTIMATORS INTERPRETED AS GMM ESTIMATORS                   317

   Therefore, the GMM varcov. estimator, which is consistent, is
                                   (                 !
                                                     −1         )−1
              √                   X0 X    X0 ÊX        X0 X
           V̂   n β̂ − β    =       −                     −
                                       n         n           n
                                   0 −1  0        0 −1
                                   XX        X ÊX     XX
                                =
                                    n          n        n

This is the varcov estimator that White (1980) arrived at in an influential article. This
estimator is consistent under heteroscedasticity of an unknown form. If there is au-
tocorrelation, the Newey-West estimator can be used to estimate Ω - the rest is the
same.

   15.9.2. Weighted Least Squares. Consider the previous example of a linear model
with heteroscedasticity of unknown form:


                                     y = Xβ0 + ε

                                     ε ∼ N(0, Σ)


where Σ is a diagonal matrix.
   Now, suppose that the form of Σ is known, so that Σ(θ0 ) is a correct parametric
specification (which may also depend upon X). In this case, the GLS estimator is

                                                −1
                                β̃ = X0 Σ−1 X         X0 Σ−1 y)


This estimator can be interpreted as the solution to the K moment conditions

                                      xt yt           xt xt0
                     m(β̃) = 1/n ∑           − 1/n ∑ σt (θ0) β̃ ≡ 0.
                                   t σt (θ )
                                          0
                                                   t

That is, the GLS estimator in this case has an obvious representation as a GMM estima-
tor. With autocorrelation, the representation exists but it is a little more complicated.
Nevertheless, the idea is the same. There are a few points:
                15.9. OTHER ESTIMATORS INTERPRETED AS GMM ESTIMATORS                   318

       • The (feasible) GLS estimator is known to be asymptotically efficient in the
         class of linear asymptotically unbiased estimators (Gauss-Markov).
       • This means that it is more efficient than the above example of OLS with
         White’s heteroscedastic consistent covariance, which is an alternative GMM
         estimator.
       • This means that the choice of the moment conditions is important to achieve
         efficiency.



     15.9.3. 2SLS. Consider the linear model


                                          yt = zt0 β + εt ,


or
                                           y = Zβ + ε

using the usual construction, where β is K × 1 and εt is i.i.d. Suppose that this equation
is one of a system of simultaneous equations, so that zt contains both endogenous and
exogenous variables. Suppose that xt is the vector of all exogenous and predetermined
variables that are uncorrelated with εt (suppose that xt is r × 1).

       • Define Ẑ as the vector of predictions of Z when regressed upon X, e.g., Ẑ =
         X (X0 X)−1 X0 Z
                                                     −1
                                       Ẑ = X X0 X         X0 Z

       • Since Ẑ is a linear combination of the exogenous variables x, ẑt must be un-
         correlated with ε. This suggests the K-dimensional moment condition mt (β) =
         ẑt (yt − zt0 β) and so

                                                              
                                   m(β) = 1/n ∑ ẑt yt − zt0 β .
                                                 t
                15.9. OTHER ESTIMATORS INTERPRETED AS GMM ESTIMATORS                       319

       • Since we have K parameters and K moment conditions, the GMM estimator
         will set m identically equal to zero, regardless of W, so we have
                                                 −1
                                                                             −1
                        β̂ =       ∑    ẑt zt0         ∑ (ẑt yt ) = Ẑ0Z         Ẑ0 y
                                   t                         t

This is the standard formula for 2SLS. We use the exogenous variables and the reduced
form predictions of the endogenous variables as instruments, and apply IV estimation.
See Hamilton pp. 420-21 for the varcov formula (which is the standard formula for
2SLS), and for how to deal with εt heterogeneous and dependent (basically, just use the
Newey-West or some other consistent estimator of Ω, and apply the usual formula).
Note that εt dependent causes lagged endogenous variables to loose their status as
legitimate instruments.




    15.9.4. Nonlinear simultaneous equations. GMM provides a convenient way to
estimate nonlinear systems of simultaneous equations. We have a system of equations
of the form


                                       y1t = f1 (zt , θ01 ) + ε1t

                                       y2t = f2 (zt , θ02 ) + ε2t
                                                        ..
                                                         .

                                       yGt = fG (zt , θ0G ) + εGt ,


or in compact notation
                                            yt = f (zt , θ0 ) + εt ,

where f (·) is a G -vector valued function, and θ0 = (θ00   00           00 0
                                                       1 , θ2 , · · · , θG ) .
               15.9. OTHER ESTIMATORS INTERPRETED AS GMM ESTIMATORS                            320

   We need to find an Ai × 1 vector of instruments xit , for each equation, that are
uncorrelated with εit . Typical instruments would be low order monomials in the ex-
                                                                                  
ogenous variables in zt , with their lagged values. Then we can define the ∑G
                                                                            i=1 Ai × 1

orthogonality conditions
                                                                  
                                     (y1t − f1 (zt , θ1 )) x1t 
                                                               
                                     (y2t − f2 (zt , θ2 )) x2t 
                                                               
                           mt (θ) =             ..             .
                                                 .             
                                                               
                                                               
                                      (yGt − fG (zt , θG )) xGt

      • A note on identification: selection of instruments that ensure identification is
         a non-trivial problem.
      • A note on efficiency: the selected set of instruments has important effects
         on the efficiency of estimation. Unfortunately there is little theory offering
         guidance on what is the optimal set. More on this later.




   15.9.5. Maximum likelihood. In the introduction we argued that ML will in gen-
eral be more efficient than GMM since ML implicitly uses all of the moments of the
distribution while GMM uses a limited number of moments. Actually, a distribution
with P parameters can be uniquely characterized by P moment conditions. However,
some sets of P moment conditions may contain more information than others, since
the moment conditions could be highly correlated. A GMM estimator that chose an
optimal set of P moment conditions would be fully efficient. Here we’ll see that the
optimal moment conditions are simply the scores of the ML estimator.
   Let yt be a G -vector of variables, and let Yt = (y01 , y02 , ..., yt0 )0 . Then at time t, Yt−1
has been observed (refer to it as the information set, since we assume the conditioning
                 15.9. OTHER ESTIMATORS INTERPRETED AS GMM ESTIMATORS               321

variables have been selected to take advantage of all useful information). The likeli-
hood function is the joint density of the sample:


                                   L (θ) = f (y1 , y2 , ..., yn, θ)


which can be factored as


                               L (θ) = f (yn |Yn−1 , θ) · f (Yn−1 , θ)


and we can repeat this to get


                    L (θ) = f (yn |Yn−1 , θ) · f (yn−1 |Yn−2 , θ) · ... · f (y1).


The log-likelihood function is therefore
                                               n
                                 ln L (θ) = ∑ ln f (yt |Yt−1 , θ).
                                             t=1

Define
                                 mt (Yt , θ) ≡ Dθ ln f (yt |Yt−1 , θ)

as the score of the t th observation. It can be shown that, under the regularity condi-
tions, that the scores have conditional mean zero when evaluated at θ 0 (see notes to
Introduction to Econometrics):


                                    E {mt (Yt , θ0 )|Yt−1 } = 0


so one could interpret these as moment conditions to use to define a just-identified
GMM estimator ( if there are K parameters there are K score equations). The GMM
estimator sets
                          n                         n
                    1/n ∑ mt (Yt , θ̂) = 1/n ∑ Dθ ln f (yt |Yt−1 , θ̂) = 0,
                         t=1                       t=1
                    15.9. OTHER ESTIMATORS INTERPRETED AS GMM ESTIMATORS                            322

which are precisely the first order conditions of MLE. Therefore, MLE can be inter-
                                                                         −1
preted as a GMM estimator. The GMM varcov formula is V∞ = D∞ Ω−1 D0∞ .
    Consistent estimates of variance components are as follows




        • D∞
                                                n
                        c∞ = ∂ m(Yt , θ̂) = 1/n ∑ D2θ ln f (yt |Yt−1 , θ̂)
                        D
                            ∂θ0                t=1
        • Ω
               It is important to note that mt and mt−s , s > 0 are both conditionally and
           unconditionally uncorrelated. Conditional uncorrelation follows from the fact
           that mt−s is a function of Yt−s , which is in the information set at time t. Un-
           conditional uncorrelation follows from the fact that conditional uncorrelation
           hold regardless of the realization of Yt−1 , so marginalizing with respect to
           Yt−1 preserves uncorrelation (see the section on ML estimation, above). The
           fact that the scores are serially uncorrelated implies that Ω can be estimated
           by the estimator of the 0th autocovariance of the moment conditions:
          n                                 n                                             
  b = 1/n ∑ mt (Yt , θ̂)mt (Yt , θ̂)0 = 1/n ∑ Dθ ln f (yt |Yt−1 , θ̂) Dθ ln f (yt |Yt−1 , θ̂) 0
  Ω
              t=1                              t=1

Recall from study of ML estimation that the information matrix equality (equation ??)
states that
        n                                                0 o     
    E     Dθ ln f (yt |Yt−1 , θ0 ) Dθ ln f (yt |Yt−1 , θ0 )      = −E D2θ ln f (yt |Yt−1 , θ0 ) .


This result implies the well known (and already seeen) result that we can estimate V∞
in any of three ways:
                            15.10. EXAMPLE: THE HAUSMAN TEST                             323

       • The sandwich version:
                                                                                 −1
                              n       2                                         
               
               
                              ∑t=1 Dθ ln f (yt |Yt−1 , θ̂) ×                     
                                                                                  
                                                                                  
                n                                                     o −1
                                                                                  
        c           n                                                    0
        V∞ = n     ∑t=1 Dθ ln f (yt |Yt−1 , θ̂) Dθ ln f (yt |Yt−1 , θ̂)         ×
               
                                                                                 
                                                                                  
               
                                 n      2
                                                                                  
                                                                                  
                                ∑t=1 Dθ ln f (yt |Yt−1 , θ̂)                     

       • or the inverse of the negative of the Hessian (since the middle and last term
         cancel, except for a minus sign):
                              "                             #−1
                                      n
                         ∞ = −1/n ∑ Dθ ln f (yt |Yt−1 , θ̂)
                        c                  2
                       V                                        ,
                                       t=1

       • or the inverse of the outer product of the gradient (since the middle and last
         cancel except for a minus sign, and the first term converges to minus the
         inverse of the middle term, which is still inside the overall inverse)
                  (                                                        )−1
                         n                                           0
            c
            V ∞ = 1/n ∑ Dθ ln f (yt |Yt−1 , θ̂) Dθ ln f (yt |Yt−1 , θ̂)        .
                          t=1

This simplification is a special result for the MLE estimator - it doesn’t apply to GMM
estimators in general.
    Asymptotically, if the model is correctly specified, all of these forms converge to
the same limit. In small samples they will differ. In particular, there is evidence that the
outer product of the gradient formula does not perform very well in small samples (see
Davidson and MacKinnon, pg. 477). White’s Information matrix test (Econometrica,
1982) is based upon comparing the two ways to estimate the information matrix: outer
product of gradient or negative of the Hessian. If they differ by too much, this is
evidence of misspecification of the model.


                         15.10. Example: The Hausman Test

    This section discusses the Hausman test, which was originally presented in Haus-
man, J.A. (1978), Specification tests in econometrics, Econometrica, 46, 1251-71.
                           15.10. EXAMPLE: THE HAUSMAN TEST                           324

   Consider the simple linear regression model yt = xt0 β + εt . We assume that the func-
tional form and the choice of regressors is correct, but that the some of the regressors
may be correlated with the error term, which as you know will produce inconsistency
of β̂. For example, this will be a problem if

      • if some regressors are endogeneous
      • some regressors are measured with error
      • lagged values of the dependent variable are used as regressors and εt is auto-
         correlated.

To illustrate, the Octave program biased.m performs a Monte Carlo experiment where
errors are correlated with regressors, and estimation is by OLS and IV. Figure 15.10.1
shows that the OLS estimator is quite biased, while Figure 15.10.2 shows that the IV
estimator is on average much closer to the true value. If you play with the program,
increasing the sample size, you can see evidence that the OLS estimator is asymptoti-
cally biased, while the IV estimator is consistent.
   We have seen that inconsistent and the consistent estimators converge to different
probability limits. This is the idea behind the Hausman test - a pair of consistent esti-
mators converge to the same probability limit, while if one is consistent and the other
is not they converge to different limits. If we accept that one is consistent (e.g., the
IV estimator), but we are doubting if the other is consistent (e.g., the OLS estimator),
we might try to check if the difference between the estimators is significantly different
from zero.

      • If we’re doubting about the consistency of OLS (or QML, etc.), why should
         we be interested in testing - why not just use the IV estimator? Because the
         OLS estimator is more efficient when the regressors are exogenous and the
         other classical assumptions (including normality of the errors) hold. When
         we have a more efficient estimator that relies on stronger assumptions (such
                  15.10. EXAMPLE: THE HAUSMAN TEST                                    325


                      F IGURE 15.10.1. OLS
                                   OLS estimates
0.14
                                                                      line 1


0.12



 0.1



0.08



0.06



0.04



0.02



  0
   2.26   2.28       2.3          2.32         2.34          2.36    2.38      2.4



                       F IGURE 15.10.2. IV
                                    IV estimates
0.16
                                                                      line 1

0.14


0.12


 0.1


0.08


0.06


0.04


0.02


  0
   1.85     1.9            1.95          2            2.05          2.1        2.15
                            15.10. EXAMPLE: THE HAUSMAN TEST                        326

        as exogeneity) than the IV estimator, we might prefer to use it, unless we have
        evidence that the assumptions are false.




So, let’s consider the covariance between the MLE estimator θ̂ (or any other fully
efficient estimator) and some other CAN estimator, say θ̃. Now, let’s recall some
results from MLE. Equation 4.4.1 is:


                           √             a.s.        √
                               n θ̂ − θ0 → −H∞ (θ0 )−1 ng(θ0 ).

Equation 4.6.2 is
                                     H∞ (θ) = −I∞ (θ).

Combining these two equations, we get

                            √             a.s.       √
                                n θ̂ − θ0 → I∞ (θ0 )−1 ng(θ0 ).


   Also, equation 4.7.1 tells us that the asymptotic covariance between any CAN
estimator and the MLE score vector is

                             √                          
                               n θ̃ − θ       V (θ̃)   IK
                         V∞  √           = ∞             .
                                ng(θ)          IK    I∞ (θ)

Now, consider
                                   √                 √          
                    IK     0K          n θ̃ − θ             n θ̃ − θ
                                                a.s.
                                                    → √               
                                       √                              .
                    0K   I∞ (θ) −1      ng(θ)               n θ̂ − θ
                                 15.10. EXAMPLE: THE HAUSMAN TEST                     327

The asymptotic covariance of this is
          √                                                             
            n θ̃ − θ         I        0K          V (θ̃)   IK      I     0K
      V∞  √            =  K               ∞                 K            
                     
            n θ̂ − θ         0K I∞ (θ)   −1         IK   I∞ (θ)    0K I∞ (θ) −1

                                                    
                               V∞ (θ̃) I∞ (θ)−1
                         =                          ,
                              I∞ (θ) −1   I∞ (θ) −1


which, for clarity in what follows, we might write as
                         √                              
                           n θ̃ − θ        V∞ (θ̃) I∞ (θ)−1
                     V∞  √            
                                     =
                                                            .
                           n θ̂ − θ       I∞ (θ) −1 V∞ (θ̂)

So, the asymptotic covariance between the MLE and any other CAN estimator is equal
to the MLE asymptotic variance (the inverse of the information matrix).
      Now, suppose we with to test whether the the two estimators are in fact both con-
verging to θ0 , versus the alternative hypothesis that the ”MLE” estimator is not in fact
consistent (the consistency of θ̃ is a maintained hypothesis). Under the null hypothesis
that they are, we have
                                      √           
                       h               in θ̃ − θ0     √        
                                 −IK  √           = n θ̃ − θ̂ ,
                           IK                       
                                        n θ̂ − θ0

will be asymptotically normally distributed as


                                √          d                    
                                 n θ̃ − θ̂ → N 0,V∞ (θ̃) −V∞ (θ̂) .

So,
                                  0                      −1           d
                     n θ̃ − θ̂         V∞ (θ̃) −V∞ (θ̂)         θ̃ − θ̂ → χ2 (ρ),
                             15.10. EXAMPLE: THE HAUSMAN TEST                            328

where ρ is the rank of the difference of the asymptotic variances. A statistic that has
the same asymptotic distribution is

                                   0                       −1           d
                         θ̃ − θ̂        V̂ (θ̃) − V̂ (θ̂)         θ̃ − θ̂ → χ2 (ρ).


This is the Hausman test statistic, in its original form. The reason that this test has
power under the alternative hypothesis is that in that case the ”MLE” estimator will
not be consistent, and will converge to θA , say, where θA 6= θ0 . Then the mean of the
                                 √           
asymptotic distribution of vector n θ̃ − θ̂ will be θ0 − θA , a non-zero vector, so the
test statistic will eventually reject, regardless of how small a significance level is used.


       • Note: if the test is based on a sub-vector of the entire parameter vector of the
         MLE, it is possible that the inconsistency of the MLE will not show up in the
         portion of the vector that has been used. If this is the case, the test may not
         have power to detect the inconsistency. This may occur, for example, when
         the consistent but inefficient estimator is not identified for all the parameters
         of the model.


Some things to note:


       • The rank, ρ, of the difference of the asymptotic variances is often less than
         the dimension of the matrices, and it may be difficult to determine what the
         true rank is. If the true rank is lower than what is taken to be true, the test will
         be biased against rejection of the null hypothesis. The contrary holds if we
         underestimate the rank.
       • A solution to this problem is to use a rank 1 test, by comparing only a single
         coefficient. For example, if a variable is suspected of possibly being endoge-
         nous, that variable’s coefficients may be compared.
                                15.10. EXAMPLE: THE HAUSMAN TEST                                              329

       • This simple formula only holds when the estimator that is being tested for
         consistency is fully efficient under the null hypothesis. This means that it
         must be a ML estimator or a fully efficient estimator that has the same asymp-
         totic distribution as the ML estimator. This is quite restrictive since modern
         estimators such as GMM and QML are not in general fully efficient.



Following up on this last point, let’s think of two not necessarily efficient estimators,
θ̂1 and θ̂2 , where one is assumed to be consistent, but the other may not be. We assume
for expositional simplicity that both θ̂1 and θ̂2 belong to the same parameter space, and
that they can be expressed as generalized method of moments (GMM) estimators. The
estimators are defined (suppressing the dependence upon data) by


                                θ̂i = arg min mi (θi )0 Wi mi (θi )
                                               θi ∈Θ


where mi (θi ) is a gi ×1 vector of moment conditions, and Wi is a gi ×gi positive definite
weighting matrix, i = 1, 2. Consider the omnibus GMM estimator
(15.10.1)                                                                                             
                          h                           i          W1        0(g1 ×g2 )        m1 (θ1 )
     θ̂1 , θ̂2 = arg min       m1 (θ1 )0 m2 (θ2 )0                                                    .
                   Θ×Θ
                                                               0(g2 ×g1 )      W2             m2 (θ2 )

Suppose that the asymptotic covariance of the omnibus moment vector is
                                                      
                                           √   m1 (θ1 ) 
(15.10.2)                      Σ = lim Var   n         
                                   n→∞         m (θ )           2    2
                                                      
                                          Σ1 Σ12
                                  ≡                   .
                                           ·     Σ2

The standard Hausman test is equivalent to a Wald test of the equality of θ 1 and θ2 (or
subvectors of the two) applied to the omnibus GMM estimator, but with the covariance
                15.11. APPLICATION: NONLINEAR RATIONAL EXPECTATIONS                      330

of the moment conditions estimated as
                                                       
                                     c
                                     Σ1      0(g1 ×g2 )
                           b=
                           Σ                            .
                                  0(g2 ×g1 )    Σ2
                                                c

While this is clearly an inconsistent estimator in general, the omitted Σ12 term cancels
out of the test statistic when one of the estimators is asymptotically efficient, as we
have seen above, and thus it need not be estimated.
   The general solution when neither of the estimators is efficient is clear: the entire Σ
matrix must be estimated consistently, since the Σ12 term will not cancel out. Methods
for consistently estimating the asymptotic covariance of a vector of moment conditions
are well-known, e.g., the Newey-West estimator discussed previously. The Hausman
test using a proper estimator of the overall covariance matrix will now have an asymp-
totic χ2 distribution when neither estimator is efficient. However, the test suffers from
a loss of power due to the fact that the omnibus GMM estimator of equation 15.10.1
is defined using an inefficient weight matrix. A new test can be defined by using an
alternative omnibus GMM estimator
                                                                                   
                                       h                         i  −1 m1 (θ1 )
(15.10.3)         θ̂1 , θ̂2 = arg min       m1 (θ1 )0   m2 (θ2 )0    Σ
                                                                     e             ,
                                Θ×Θ
                                                                           m2 (θ2 )

      e is a consistent estimator of the overall covariance matrix Σ of equation 15.10.2.
where Σ
By standard arguments, this is a more efficient estimator than that defined by equation
15.10.1, so the Wald test using this alternative is more powerful. See my article in
Applied Economics, 2004, for more details, including simulation results.




               15.11. Application: Nonlinear rational expectations

   Readings: Hansen and Singleton, 1982∗ ; Tauchen, 1986
                 15.11. APPLICATION: NONLINEAR RATIONAL EXPECTATIONS                  331

   Though GMM estimation has many applications, application to rational expecta-
tions models is elegant, since theory directly suggests the moment conditions. Hansen
and Singleton’s 1982 paper is also a classic worth studying in itself. Though I strongly
recommend reading the paper, I’ll use a simplified model with similar notation to
Hamilton’s.
   We assume a representative consumer maximizes expected discounted utility over
an infinite horizon. Utility is temporally additive, and the expected utility hypothesis
                                                                     ∞
holds. The future consumption stream is the stochastic sequence {ct }t=0 . The objec-
tive function at time t is the discounted expected utility
                                   ∞
(15.11.1)                         ∑ βsE (u(ct+s)|It ) .
                                  s=0

       • The parameter β is between 0 and 1, and reflects discounting.
       • It is the information set at time t, and includes the all realizations of random
         variables indexed t and earlier.
       • The choice variable is ct - current consumption, which is constained to be less
         than or equal to current wealth wt .
       • Suppose the consumer can invest in a risky asset. A dollar invested in the
         asset yields a gross return

                                                pt+1 + dt+1
                                (1 + rt+1 ) =
                                                     pt

         where pt is the price and dt is the dividend in period t. The price of ct is
         normalized to 1.
       • Current wealth wt = (1 + rt )it−1 , where it−1 is investment in period t − 1. So
         the problem is to allocate current wealth between current consumption and
         investment to finance future consumption: wt = ct + it .
                  15.11. APPLICATION: NONLINEAR RATIONAL EXPECTATIONS                    332

       • Future net rates of return rt+s , s > 0 are not known in period t: the asset is
         risky.


A partial set of necessary conditions for utility maximization have the form:

                                       
(15.11.2)                 u0 (ct ) = βE (1 + rt+1 ) u0 (ct+1 )|It .


To see that the condition is necessary, suppose that the lhs < rhs. Then by reducing
current consumption marginally would cause equation 15.11.1 to drop by u0 (ct ), since
there is no discounting of the current period. At the same time, the marginal reduc-
tion in consumption finances investment, which has gross return (1 + rt+1 ) , which
could finance consumption in period t + 1. This increase in consumption would cause
the objective function to increase by βE {(1 + rt+1 ) u0 (ct+1 )|It } . Therefore, unless the
condition holds, the expected discounted utility function is not maximized.


       • To use this we need to choose the functional form of utility. A constant rela-
         tive risk aversion form is
                                                  1−γ
                                                 ct     −1
                                      u(ct ) =
                                                      1−γ

where γ is the coefficient of relative risk aversion. With this form,

                                                       −γ
                                        u0 (ct ) = ct


so the foc are
                                     n                     o
                               −γ                  −γ
                              ct = βE (1 + rt+1 ) ct+1 |It

While it is true that
                                      n                     o
                                −γ                      −γ
                          E ct − β (1 + rt+1 ) ct+1               |It = 0
                   15.11. APPLICATION: NONLINEAR RATIONAL EXPECTATIONS                   333

so that we could use this to define moment conditions, it is unlikely that ct is stationary,
even though it is in real terms, and our theory requires stationarity. To solve this, divide
              −γ
though by ct                       (                          −γ )!
                                          ct+1
                        E 1-β (1 + rt+1 )                                 |It = 0
                                           ct
(note that ct can be passed though the conditional expectation since ct is chosen based
only upon information available in time t).
    Now                                (                        −γ )
                                                 ct+1
                                 1-β (1 + rt+1 )
                                                  ct
is analogous to ht (θ) defined above: it’s a scalar moment condition. To get a vector of
moment conditions we need some instruments. Suppose that zt is a vector of variables
drawn from the information set It . We can use the necessary conditions to form the
expressions
                                                           −γ 
                                                      ct+1
                              1 − β (1 + rt+1 )        ct            zt ≡ mt (θ)

       • θ represents β and γ.
       • Therefore, the above expression may be interpreted as a moment condition
          which can be used for GMM estimation of the parameters θ0 .




Note that at time t, mt−s has been observed, and is therefore an element of the infor-
mation set. By rational expectations, the autocovariances of the moment conditions
other than Γ0 should be zero. The optimal weighting matrix is therefore the inverse of
the variance of the moment conditions:


                                                           
                                  Ω∞ = lim E nm(θ0 )m(θ0 )0
                15.11. APPLICATION: NONLINEAR RATIONAL EXPECTATIONS                      334

which can be consistently estimated by
                                           n
                                Ω̂ = 1/n ∑ mt (θ̂)mt (θ̂)0
                                          t=1

As before, this estimate depends on an initial consistent estimate of θ, which can be
obtained by setting the weighting matrix W arbitrarily (to an identity matrix, for ex-
ample). After obtaining θ̂, we then minimize


                                 s(θ) = m(θ)0 Ω̂−1 m(θ).


This process can be iterated, e.g., use the new estimate to re-estimate Ω, use this to
estimate θ0 , and repeat until the estimates don’t change.




      • In principle, we could use a very large number of moment conditions in es-
         timation, since any current or lagged variable could be used in xt . Since use
         of more moment conditions will lead to a more (asymptotically) efficient es-
         timator, one might be tempted to use many instrumental variables. We will
         do a computer lab that will show that this may not be a good idea with finite
         samples. This issue has been studied using Monte Carlos (Tauchen, JBES,
         1986). The reason for poor performance when using many instruments is that
         the estimate of Ω becomes very imprecise.
      • Empirical papers that use this approach often have serious problems in obtain-
         ing precise estimates of the parameters. Note that we are basing everything
         on a single parial first order condition. Probably this f.o.c. is simply not infor-
         mative enough. Simulation-based estimation methods (discussed below) are
         one means of trying to use more informative moment conditions to estimate
         this sort of model.
                     15.12. EMPIRICAL EXAMPLE: A PORTFOLIO MODEL                          335

                    15.12. Empirical example: a portfolio model

   The Octave program portfolio.m performs GMM estimation of a portfolio model,
using the data file tauchen.data. The columns of this data file are c, p, and d in that
order. There are 95 observations (source: Tauchen, JBES, 1986). As instruments we
use lags of c and r, as well as a constant. For a single lag the estimation results are



MPITB extensions found




******************************************************
Example of GMM estimation of rational expectations model


GMM Estimation Results
BFGS convergence: Normal convergence


Objective function value: 0.000014
Observations: 94


                    Value               df       p-value
X^2 test            0.001           1.000           0.971


            estimate         st. err           t-stat         p-value
beta            0.915           0.009          97.271           0.000
gamma           0.569           0.319           1.783           0.075
******************************************************
                    15.12. EMPIRICAL EXAMPLE: A PORTFOLIO MODEL                    336

For two lags the estimation results are

MPITB extensions found




******************************************************
Example of GMM estimation of rational expectations model


GMM Estimation Results
BFGS convergence: Normal convergence


Objective function value: 0.037882
Observations: 93


                    Value                 df     p-value
X^2 test            3.523          3.000           0.318


           estimate         st. err            t-stat      p-value
beta           0.857           0.024           35.636        0.000
gamma         -2.351           0.315           -7.462        0.000
******************************************************



   Pretty clearly, the results are sensitive to the choice of instruments. Maybe there
is some problem here: poor instruments, or possibly a conditional moment that is not
very informative.
                 15.12. EMPIRICAL EXAMPLE: A PORTFOLIO MODEL                      337

Exercises

 (1) Show how to cast the generalized IV estimator presented in section 11.4 as
     a GMM estimator. Identify what are the moment conditions, mt (θ), what is
     the form of the the matrix Dn , what is the efficient weight matrix, and show
     that the covariance matrix formula given previously corresponds to the GMM
     covariance matrix formula.
 (2) Using Octave, generate data from the logit dgp . Recall that E(yt |xt ) =
     p(xt , θ) = [1 + exp(−xt 0θ)]−1 . Consider the moment condtions (exactly iden-
     tified) mt (θ) = [yt − p(xt , θ)]xt
     (a) Estimate by GMM, using these moments.
     (b) Estimate by MLE.
     (c) The two estimators should coincide. Prove analytically that the estima-
          tors coicide.
 (3) Verify the missing steps needed to show that n · m(θ̂)0 Ω̂−1 m(θ̂) has a χ2 (g −
     K) distribution. That is, show that the monster matrix is idempotent and has
     trace equal to g − K.
 (4) For the portfolio example, experiment with the program using lags of 3 and 4
     periods to define instruments
     (a) Iterate the estimation of θ = (β, γ) and Ω to convergence.
     (b) Comment on the results. Are the results sensitive to the set of instruments
          used? (Look at Ω̂ as well as θ̂. Are these good instruments? Are the
          instruments highly correlated with one another?
                                      CHAPTER 16


                                      Quasi-ML

   Quasi-ML is the estimator one obtains when a misspecified probability model is
used to calculate an ”ML” estimator.
    Given a sample of size n of a random vector y and a vector of conditioning variables
                                                                                     
x, suppose the joint density of Y = y1 . . . yn conditional on X = x1 . . . xn
is a member of the parametric family pY (Y|X, ρ), ρ ∈ Ξ. The true joint density is as-
sociated with the vector ρ0 :
                                      pY (Y|X, ρ0 ).



As long as the marginal density of X doesn’t depend on ρ0 , this conditional density
fully characterizes the random characteristics of samples: i.e., it fully describes the
probabilistically important features of the d.g.p. The likelihood function is just this
density evaluated at other values ρ


                             L(Y|X, ρ) = pY (Y|X, ρ), ρ ∈ Ξ.
                                                                                        
      • Let Yt−1 =        y1 . . . yt−1        , Y0 = 0, and let Xt =        x1 . . . xt       The
         likelihood function, taking into account possible dependence of observations,
         can be written as
                                                n
                          L(Y|X, ρ) =          ∏ pt (yt |Yt−1, Xt , ρ)
                                               t=1
                                                n
                                       ≡       ∏ pt (ρ)
                                               t=1

                                                338
                                          16. QUASI-ML                                     339

      • The average log-likelihood function is:

                                 1              1 n
                         sn (ρ) = ln L(Y|X, ρ) = ∑ ln pt (ρ)
                                 n              n t=1

      • Suppose that we do not have knowledge of the family of densities pt (ρ).
         Mistakenly, we may assume that the conditional density of yt is a mem-
         ber of the family ft (yt |Yt−1 , Xt , θ), θ ∈ Θ, where there is no θ0 such that
         ft (yt |Yt−1 , Xt , θ0 ) = pt (yt |Yt−1 , Xt , ρ0 ), ∀t (this is what we mean by “mis-
         specified”).
      • This setup allows for heterogeneous time series data, with dynamic misspec-
         ification.




The QML estimator is the argument that maximizes the misspecified average log like-
lihood, which we refer to as the quasi-log likelihood function. This objective function
is

                                         1 n
                         sn (θ) =          ∑
                                         n t=1
                                               ln ft (yt |Yt−1 , Xt , θ0 )

                                         1 n
                                  ≡        ∑ ln ft (θ)
                                         n t=1

and the QML is
                                       θ̂n = arg max sn (θ)
                                                   Θ

A SLLN for dependent sequences applies (we assume), so that

                                a.s.    1 n
                          sn (θ) → lim E ∑ ln ft (θ) ≡ s∞ (θ)
                                   n→∞ n
                                         t=1
                 16.1. CONSISTENT ESTIMATION OF VARIANCE COMPONENTS                340

We assume that this can be strengthened to uniform convergence, a.s., following the
previous arguments. The “pseudo-true” value of θ is the value that maximizes s̄(θ):


                                     θ0 = arg max s∞ (θ)
                                                 Θ


Given assumptions so that theorem 19 is applicable, we obtain


                                       lim θ̂n = θ0 , a.s.
                                       n→∞


       • Applying the asymptotic normality theorem,

                     √             d                                  
                         n θ̂ − θ0 → N 0, J∞ (θ0 )−1 I∞ (θ0 )J∞ (θ0 )−1


         where
                                  J∞ (θ0 ) = lim E D2θ sn (θ0 )
                                             n→∞

         and
                                                     √
                               I∞ (θ0 ) = lim Var nDθ sn (θ0 ).
                                         n→∞

       • Note that asymptotic normality only requires that the additional assumptions
         regarding J and I hold in a neighborhood of θ0 for J and at θ0 , for I , not
         throughout Θ. In this sense, asymptotic normality is a local property.


               16.1. Consistent Estimation of Variance Components

    Consistent estimation of J∞ (θ0 ) is straightforward. Assumption (b) of Theorem 22
implies that

                         1 n 2               a.s.       1 n 2
           Jn (θ̂n ) =     ∑ θ t n n→∞ n ∑ Dθ ln ft (θ0) = J∞(θ0).
                         n t=1
                               D ln f ( θ̂ ) →    lim E
                                                         t=1

That is, just calculate the Hessian using the estimate θ̂n in place of θ0 .
    Consistent estimation of I∞ (θ0 ) is more difficult, and may be impossible.
                16.1. CONSISTENT ESTIMATION OF VARIANCE COMPONENTS                        341

      • Notation: Let gt ≡ Dθ ft (θ0 )

We need to estimate

                                  √
            I∞ (θ0 ) =     lim Var nDθ sn (θ0 )
                           n→∞
                               √ 1 n
                      = lim Var n ∑ Dθ ln ft (θ0 )
                        n→∞      n t=1
                                 n
                            1
                      = lim Var ∑ gt
                        n→∞ n
                                t=1
                              (                   !                        !0 )
                                    n                          n
                            1
                      = lim E
                        n→∞ n
                                   ∑ (gt − E gt )             ∑ (gt − E gt )
                                   t=1                        t=1

This is going to contain a term

                                      1 n
                                   lim
                                  n→∞ n
                                        ∑ (E gt ) (E gt )0
                                        t=1

which will not tend to zero, in general. This term is not consistently estimable in
general, since it requires calculating an expectation using the true density under the
d.g.p., which is unknown.

      • There are important cases where I∞ (θ0 ) is consistently estimable. For exam-
         ple, suppose that the data come from a random sample (i.e., they are iid). This
         would be the case with cross sectional data, for example. (Note: under i.i.d.
         sampling, the joint distribution of (yt , xt ) is identical. This does not imply that
         the conditional density f (yt |xt ) is identical).
      • With random sampling, the limiting objective function is simply


                               s∞ (θ0 ) = EX E0 ln f (y|x, θ0 )


         where E0 means expectation of y|x and EX means expectation respect to the
         marginal density of x.
                              16.2. EXAMPLE: THE MEPS DATA                              342

      • By the requirement that the limiting objective function be maximized at θ 0
         we have
                         Dθ EX E0 ln f (y|x, θ0 ) = Dθ s∞ (θ0 ) = 0

      • The dominated convergence theorem allows switching the order of expecta-
         tion and differentiation, so


                   Dθ EX E0 ln f (y|x, θ0 ) = EX E0 Dθ ln f (y|x, θ0 ) = 0


         The CLT implies that

                        1 n                    d
                        √ ∑ Dθ ln f (y|x, θ0 ) → N(0, I∞ (θ0 )).
                         n t=1

         That is, it’s not necessary to subtract the individual means, since they are zero.
         Given this, and due to independent observations, a consistent estimator is
                                     n
                                 1
                             Ib = ∑ Dθ ln ft (θ̂)Dθ0 ln ft (θ̂)
                                 n t=1

This is an important case where consistent estimation of the covariance matrix is pos-
sible. Other cases exist, even for dynamically misspecified time series models.

                           16.2. Example: the MEPS Data

   To check the plausibility of the Poisson model for the MEPS data, we can compare
the sample unconditional variance with the estimated unconditional variance accord-
                                      λ̂tn
                           (y) = ∑t=1
ing to the Poisson model: Vd       n . Using the program PoissonVariance.m, for

OBDV and ERV, we get We see that even after conditioning, the overdispersion is not
          TABLE 1. Marginal Variances, Sample and Estimated (Poisson)

                                         OBDV ERV
                                Sample   38.09 0.151
                               Estimated 3.28 0.086
                             16.2. EXAMPLE: THE MEPS DATA                            343

captured in either case. There is huge problem with OBDV, and a significant problem
with ERV. In both cases the Poisson model does not appear to be plausible. You can
check this for the other use measures if you like.


   16.2.1. Infinite mixture models: the negative binomial model. Reference: Cameron
and Trivedi (1998) Regression analysis of count data, chapter 4.
   The two measures seem to exhibit extra-Poisson variation. To capture unobserved
heterogeneity, a possibility is the random parameters approach. Consider the possibil-
ity that the constant term in a Poisson model were random:

                                          exp(−θ)θy
                            fY (y|x, ε) =
                                              y!
                                    θ = exp(x0β + ε)

                                         = exp(x0β) exp(ε)

                                         = λν


where λ = exp(x0β) and ν = exp(ε). Now ν captures the randomness in the constant.
The problem is that we don’t observe ν, so we will need to marginalize it to get a
usable density
                                            exp[−θ]θy
                                        Z ∞
                           fY (y|x) =                 fv (z)dz
                                         −∞     y!
This density can be used directly, perhaps using numerical integration to evaluate the
likelihood function. In some cases, though, the integral will have an analytic solution.
For example, if ν follows a certain one parameter gamma density, then
                                                         ψ          y
                                   Γ(y + ψ)          ψ            λ
(16.2.1)           fY (y|x, φ) =
                                 Γ(y + 1)Γ(ψ)       ψ+λ          ψ+λ

where φ = (λ, ψ). ψ appears since it is the parameter of the gamma density.

      • For this density, E(y|x) = λ, which we have parameterized λ = exp(x 0 β)
                               16.2. EXAMPLE: THE MEPS DATA                           344

       • The variance depends upon how ψ is parameterized.
           – If ψ = λ/α, where α > 0, then V (y|x) = λ + αλ. Note that λ is a function
              of x, so that the variance is too. This is referred to as the NB-I model.
           – If ψ = 1/α, where α > 0, then V (y|x) = λ + αλ2 . This is referred to as
              the NB-II model.

So both forms of the NB model allow for overdispersion, with the NB-II model allow-
ing for a more radical form.
   Testing reduction of a NB model to a Poisson model cannot be done by testing
α = 0 using standard Wald or LR procedures. The critical values need to be adjusted to
account for the fact that α = 0 is on the boundary of the parameter space. Without get-
ting into details, suppose that the data were in fact Poisson, so there is equidispersion
and the true α = 0. Then about half the time the sample data will be underdispersed,
and about half the time overdispersed. When the data is underdispersed, the MLE of α
will be α̂ = 0. Thus, under the null, there will be a probability spike in the asymptotic
                p             √
distribution of n(α̂ − α) = nα̂ at 0, so standard testing methods will not be valid.
   This program will do estimation using the NB model. Note how modelargs is used
to select a NB-I or NB-II density. Here are NB-I estimation results for OBDV:


MPITB extensions found

OBDV

======================================================
BFGSMIN final results

Used analytic gradient

------------------------------------------------------
STRONG CONVERGENCE
Function conv 1 Param conv 1 Gradient conv 1
------------------------------------------------------
                         16.2. EXAMPLE: THE MEPS DATA             345

Objective function value 2.18573
Stepsize 0.0007
17 iterations
------------------------------------------------------

 param     gradient change
  1.0965    0.0000 -0.0000
  0.2551   -0.0000  0.0000
  0.2024   -0.0000  0.0000
  0.2289    0.0000 -0.0000
  0.1969    0.0000 -0.0000
  0.0769    0.0000 -0.0000
  0.0000   -0.0000  0.0000
  1.7146   -0.0000  0.0000


******************************************************
Negative Binomial model, MEPS 1996 full data set

MLE Estimation Results
BFGS convergence: Normal convergence

Average Log-L: -2.185730
Observations: 4564

              estimate        st. err         t-stat    p-value
constant        -0.523          0.104         -5.005      0.000
pub. ins.        0.765          0.054         14.198      0.000
priv. ins.       0.451          0.049          9.196      0.000
sex              0.458          0.034         13.512      0.000
age              0.016          0.001         11.869      0.000
edu              0.027          0.007          3.979      0.000
inc              0.000          0.000          0.000      1.000
alpha            5.555          0.296         18.752      0.000

Information Criteria
CAIC : 20026.7513      Avg. CAIC:   4.3880
 BIC : 20018.7513       Avg. BIC:   4.3862
 AIC : 19967.3437       Avg. AIC:   4.3750
******************************************************
                             16.2. EXAMPLE: THE MEPS DATA                             346

   Note that the parameter values of the last BFGS iteration are different that those
reported in the final results. This reflects two things - first, the data were scaled be-
fore doing the BFGS minimization, but the mle_results script takes this into ac-
count and reports the results using the original scaling. But also, the parameterization
α = exp(α∗ ) is used to enforce the restriction that α > 0. The unrestricted parameter
α∗ = log α is used to define the log-likelihood function, since the BFGS minimiza-
tion algorithm does not do contrained minimization. To get the standard error and
t-statistic of the estimate of α, we need to use the delta method. This is done inside
mle_results, making use of the function parameterize.m .
   Likewise, here are NB-II results:


MPITB extensions found

OBDV

======================================================
BFGSMIN final results

Used analytic gradient

------------------------------------------------------
STRONG CONVERGENCE
Function conv 1 Param conv 1 Gradient conv 1
------------------------------------------------------
Objective function value 2.18496
Stepsize 0.0104394
13 iterations
------------------------------------------------------

 param       gradient change
  1.0375      0.0000 -0.0000
  0.3673     -0.0000  0.0000
  0.2136      0.0000 -0.0000
  0.2816      0.0000 -0.0000
  0.3027      0.0000  0.0000
  0.0843     -0.0000  0.0000
                              16.2. EXAMPLE: THE MEPS DATA                        347

 -0.0048     0.0000    -0.0000
  0.4780    -0.0000     0.0000


******************************************************
Negative Binomial model, MEPS 1996 full data set

MLE Estimation Results
BFGS convergence: Normal convergence

Average Log-L: -2.184962
Observations: 4564

                 estimate          st. err          t-stat      p-value
constant           -1.068            0.161          -6.622        0.000
pub. ins.           1.101            0.095          11.611        0.000
priv. ins.          0.476            0.081           5.880        0.000
sex                 0.564            0.050          11.166        0.000
age                 0.025            0.002          12.240        0.000
edu                 0.029            0.009           3.106        0.002
inc                -0.000            0.000          -0.176        0.861
alpha               1.613            0.055          29.099        0.000

Information Criteria
CAIC : 20019.7439      Avg. CAIC:   4.3864
 BIC : 20011.7439       Avg. BIC:   4.3847
 AIC : 19960.3362       Avg. AIC:   4.3734
******************************************************


      • For the OBDV usage measurel, the NB-II model does a slightly better job than
        the NB-I model, in terms of the average log-likelihood and the information
        criteria (more on this last in a moment).
      • Note that both versions of the NB model fit much better than does the Poisson
        model (see 13.4.2).
      • The estimated α is highly significant.

To check the plausibility of the NB-II model, we can compare the sample uncon-
ditional variance with the estimated unconditional variance according to the NB-II
                                 16.2. EXAMPLE: THE MEPS DATA                                 348

                   n             2
             ∑ λ̂t +α̂(λ̂t )
model: Vd
        (y) = t=1 n          . For OBDV and ERV (estimation results not reported),
we get For OBDV, the overdispersion problem is significantly better than in the Pois-

            TABLE 2. Marginal Variances, Sample and Estimated (NB-II)

                                               OBDV ERV
                                      Sample   38.09 0.151
                                     Estimated 30.58 0.182


son case, but there is still some that is not captured. For ERV, the negative binomial
model seems to capture the overdispersion adequately.

    16.2.2. Finite mixture models: the mixed negative binomial model. The finite
mixture approach to fitting health care demand was introduced by Deb and Trivedi
(1997). The mixture approach has the intuitive appeal of allowing for subgroups of
the population with different health status. If individuals are classified as healthy or
unhealthy then two subgroups are defined. A finer classification scheme would lead to
more subgroups. Many studies have incorporated objective and/or subjective indica-
tors of health status in an effort to capture this heterogeneity. The available objective
measures, such as limitations on activity, are not necessarily very informative about a
person’s overall health status. Subjective, self-reported measures may suffer from the
same problem, and may also not be exogenous
    Finite mixture models are conceptually simple. The density is

                                                     p−1
              fY (y, φ1 , ..., φ p, π1 , ..., π p−1) = ∑ πi fY (y, φi ) + π p fY (y, φ p ),
                                                             (i)                p

                                                     i=1

                                               p−1                 p
where πi > 0, i = 1, 2, ..., p, π p = 1 − ∑i=1 πi , and ∑i=1 πi = 1. Identification requires
that the πi are ordered in some way, for example, π1 ≥ π2 ≥ · · · ≥ π p and φi 6= φ j , i 6= j.
This is simple to accomplish post-estimation by rearrangement and possible elimina-
tion of redundant component densities.
                              16.2. EXAMPLE: THE MEPS DATA                          349

       • The properties of the mixture density follow in a straightforward way from
         those of the components. In particular, the moment generating function is the
         same mixture of the moment generating functions of the component densities,
                                         p
         so, for example, E(Y |x) = ∑i=1 πi µi (x), where µi (x) is the mean of the ith
         component density.
       • Mixture densities may suffer from overparameterization, since the total num-
         ber of parameters grows rapidly with the number of component densities. It
         is possible to constrained parameters across the mixtures.
       • Testing for the number of component densities is a tricky issue. For example,
         testing for p = 1 (a single component, which is to say, no mixture) versus
         p = 2 (a mixture of two components) involves the restriction π1 = 1, which is
         on the boundary of the parameter space. Not that when π1 = 1, the parameters
         of the second component can take on any value without affecting the density.
         Usual methods such as the likelihood ratio test are not applicable when pa-
         rameters are on the boundary under the null hypothesis. Information criteria
         means of choosing the model (see below) are valid.

The following results are for a mixture of 2 NB-II models, for the OBDV data, which
you can replicate using this program .


OBDV


******************************************************
Mixed Negative Binomial model, MEPS 1996 full data set

MLE Estimation Results
BFGS convergence: Normal convergence

Average Log-L: -2.164783
Observations: 4564
                             16.2. EXAMPLE: THE MEPS DATA                              350



                  estimate         st. err           t-stat         p-value
constant             0.127           0.512            0.247           0.805
pub. ins.            0.861           0.174            4.962           0.000
priv. ins.           0.146           0.193            0.755           0.450
sex                  0.346           0.115            3.017           0.003
age                  0.024           0.004            6.117           0.000
edu                  0.025           0.016            1.590           0.112
inc                 -0.000           0.000           -0.214           0.831
alpha                1.351           0.168            8.061           0.000
constant             0.525           0.196            2.678           0.007
pub. ins.            0.422           0.048            8.752           0.000
priv. ins.           0.377           0.087            4.349           0.000
sex                  0.400           0.059            6.773           0.000
age                  0.296           0.036            8.178           0.000
edu                  0.111           0.042            2.634           0.008
inc                  0.014           0.051            0.274           0.784
alpha                1.034           0.187            5.518           0.000
Mix                  0.257           0.162            1.582           0.114

Information Criteria
CAIC : 19920.3807      Avg. CAIC:   4.3647
 BIC : 19903.3807       Avg. BIC:   4.3610
 AIC : 19794.1395       Avg. AIC:   4.3370
******************************************************



   It is worth noting that the mixture parameter is not significantly different from zero,
but also not that the coefficients of public insurance and age, for example, differ quite
a bit between the two latent classes.




   16.2.3. Information criteria. As seen above, a Poisson model can’t be tested (us-
ing standard methods) as a restriction of a negative binomial model. But it seems,
based upon the values of the likelihood functions and the fact that the NB model fits
the variance much better, that the NB model is more appropriate. How can we deter-
mine which of a set of competing models is the best?
                              16.2. EXAMPLE: THE MEPS DATA                          351

   The information criteria approach is one possibility. Information criteria are func-
tions of the log-likelihood, with a penalty for the number of parameters used. Three
popular information criteria are the Akaike (AIC), Bayes (BIC) and consistent Akaike
(CAIC). The formulae are


                          CAIC = −2 ln L(θ̂) + k(ln n + 1)

                            BIC = −2 ln L(θ̂) + k ln n

                            AIC = −2 ln L(θ̂) + 2k


It can be shown that the CAIC and BIC will select the correctly specified model from a
group of models, asymptotically. This doesn’t mean, of course, that the correct model
is necesarily in the group. The AIC is not consistent, and will asymptotically favor
an over-parameterized model over the correctly specified model. Here are information
criteria values for the models we’ve seen, for OBDV. Pretty clearly, the NB models


                        TABLE 3. Information Criteria, OBDV

                            Model       AIC        BIC    CAIC
                            Poisson    7.345      7.355   7.357
                             NB-I      4.375      4.386   4.388
                             NB-II     4.373      4.385   4.386
                            MNB-II     4.337      4.361   4.365



are better than the Poisson. The one additional parameter gives a very significant
improvement in the likelihood function value. Between the NB-I and NB-II models,
the NB-II is slightly favored. But one should remember that information criteria values
are statistics, with variances. With another sample, it may well be that the NB-I model
would be favored, since the differences are so small. The MNB-II model is favored
over the others, by all 3 information criteria.
                             16.2. EXAMPLE: THE MEPS DATA                            352

   Why is all of this in the chapter on QML? Let’s suppose that the correct model for
OBDV is in fact the NB-II model. It turns out in this case that the Poisson model will
give consistent estimates of the slope parameters (if a model is a member of the linear-
exponential family and the conditional mean is correctly specified, then the parame-
ters of the conditional mean will be consistently estimated). So the Poisson estimator
would be a QML estimator that is consistent for some parameters of the true model.
The ordinary OPG or inverse Hessinan ”ML” covariance estimators are however biased
and inconsistent, since the information matrix equality does not hold for QML estima-
tors. But for i.i.d. data (which is the case for the MEPS data) the QML asymptotic
covariance can be consistently estimated, as discussed above, using the sandwich form
for the ML estimator. mle_results in fact reports sandwich results, so the Poisson
estimation results would be reliable for inference even if the true model is the NB-I or
NB-II. Not that they are in fact similar to the results for the NB models.
   However, if we assume that the correct model is the MNB-II model, as is favored by
the information criteria, then both the Poisson and NB-x models will have misspecified
mean functions, so the parameters that influence the means would be estimated with
bias and inconsistently.
                                                  EXERCISES                                          353

    Exercises


Exercises
(1) Considering the MEPS data (the description is in Section 13.4.2), for the OBDV
     (y) measure, let η be a latent index of health status that has expectation equal to
     unity.1 We suspect that η and PRIV may be correlated, but we assume that η is
     uncorrelated with the other regressors. We assume that


                              E(y|PU B, PRIV, AGE, EDUC, INC, η)

             = exp(β1 + β2 PU B + β3 PRIV + β4 AGE + β5 EDUC + β6 INC)η.


     We use the Poisson QML estimator of the model


                               y ∼ Poisson(λ)

(16.2.2)                      λ = exp(β1 + β2 PU B + β3 PRIV +

                                        β4 AGE + β5 EDUC + β6 INC).


     Since much previous evidence indicates that health care services usage is overdis-
     persed2, this is almost certainly not an ML estimator, and thus is not efficient.
     However, when η and PRIV are uncorrelated, this estimator is consistent for the β i
     parameters, since the conditional mean is correctly specified in that case. When η
     and PRIV are correlated, Mullahy’s (1997) NLIV estimator that uses the residual
     function
                                                       y
                                                  ε=     − 1,
                                                       λ


1A restriction of this sort is necessary for identification.
2Overdispersion exists when the conditional variance is greater than the conditional mean. If this is the
case, the Poisson specification is not correct.
                                  EXERCISES                                     354

where λ is defined in equation 16.2.2, with appropriate instruments, is consistent.
As instruments we use all the exogenous regressors, as well as the cross products
of PU B with the variables in Z = {AGE, EDUC, INC}. That is, the full set of
instruments is
                      W = {1 PU B Z PU B × Z }.

(a) Calculate the Poisson QML estimates.
(b) Calculate the generalized IV estimates (do it using a GMM formulation - see
   the portfolio example for hints how to do this).
(c) Calculate the Hausman test statistic to test the exogeneity of PRIV.
(d) comment on the results
                                         CHAPTER 17


                          Nonlinear least squares (NLS)

      Readings: Davidson and MacKinnon, Ch. 2∗ and 5∗ ; Gallant, Ch. 1



                            17.1. Introduction and definition

      Nonlinear least squares (NLS) is a means of estimating the parameter of the model


                                      yt = f (xt , θ0 ) + εt .


        • In general, εt will be heteroscedastic and autocorrelated, and possibly non-
           normally distributed. However, dealing with this is exactly as in the case of
           linear models, so we’ll just treat the iid case here,


                                         εt ∼ iid(0, σ2 )


If we stack the observations vertically, defining


                                      y = (y1 , y2 , ..., yn)0


                            f = ( f (x1 , θ), f (x1 , θ), ..., f (x1, θ))0

and
                                       ε = (ε1 , ε2 , ..., εn )0

we can write the n observations as


                                           y = f(θ) + ε
                                                 355
                            17.1. INTRODUCTION AND DEFINITION                            356

Using this notation, the NLS estimator can be defined as

                                      1                         1
              θ̂ ≡ arg min sn (θ) =     [y − f(θ)]0 [y − f(θ)] = k y − f(θ) k2
                       Θ              n                         n

       • The estimator minimizes the weighted sum of squared errors, which is the
           same as minimizing the Euclidean distance between y and f(θ).

The objective function can be written as


                                      1 0                         
                           sn (θ) =     y y − 2y0 f(θ) + f(θ)0 f(θ) ,
                                      n
which gives the first order conditions

                                                   
                              ∂              ∂
                           −    f(θ̂) y +
                                     0
                                               f(θ̂) f(θ̂) ≡ 0.
                                                    0
                             ∂θ             ∂θ
Define the n × K matrix


(17.1.1)                                F(θ̂) ≡ Dθ0 f(θ̂).


In shorthand, use F̂ in place of F(θ̂). Using this, the first order conditions can be written
as
                                      −F̂0 y + F̂0 f(θ̂) ≡ 0,

or

                                                   
(17.1.2)                               F̂0 y − f(θ̂) ≡ 0.


This bears a good deal of similarity to the f.o.c. for the linear model - the derivative of
the prediction is orthogonal to the prediction error. If f(θ) = Xθ, then F̂ is simply X,
so the f.o.c. (with spherical errors) simplify to


                                       X0 y − X0 Xβ = 0,
                                    17.2. IDENTIFICATION                                357

the usual 0LS f.o.c.
    We can interpret this geometrically: INSERT drawings of geometrical depiction of
OLS and NLS (see Davidson and MacKinnon, pgs. 8,13 and 46).

       • Note that the nonlinearity of the manifold leads to potential multiple local
         maxima, minima and saddlepoints: the objective function sn (θ) is not neces-
         sarily well-behaved and may be difficult to minimize.




                                   17.2. Identification

    As before, identification can be considered conditional on the sample, and asymp-
totically. The condition for asymptotic identification is that sn (θ) tend to a limiting
function s∞ (θ) such that s∞ (θ0 ) < s∞ (θ), ∀θ 6= θ0 . This will be the case if s∞ (θ0 ) is
strictly convex at θ0 , which requires that D2θ s∞ (θ0 ) be positive definite. Consider the
objective function:

                                  1 n
                       sn (θ) =     ∑ [yt − f (xt , θ)]2
                                  n t=1
                               1 n                                  2
                             =   ∑
                               n t=1
                                     f (xt , θ0 ) + εt − ft (xt , θ)

                                  1 n                     2 1 n
                             =      ∑ t
                                  n t=1
                                        f (θ 0
                                               ) − f t (θ)   + ∑ (εt )2
                                                              n t=1
                                  2 n                   
                             −      ∑
                                  n t=1
                                        ft (θ0 ) − ft (θ) εt


       • As in example 14.3, which illustrated the consistency of extremum estimators
         using OLS, we conclude that the second term will converge to a constant
         which does not depend upon θ.
       • A LLN can be applied to the third term to conclude that it converges pointwise
         to 0, as long as f(θ) and ε are uncorrelated.
                                          17.2. IDENTIFICATION                                        358

       • Next, pointwise convergence needs to be stregnthened to uniform almost sure
           convergence. There are a number of possible assumptions one could use.
           Here, we’ll just assume it holds.
       • Turning to the first term, we’ll assume a pointwise law of large numbers ap-
           plies, so

                        1 n                   2 a.s.   Z                         2
(17.2.1)                  ∑
                        n t=1
                              ft (θ0 ) − ft (θ) →              f (z, θ0 ) − f (z, θ) dµ(z),


           where µ(x) is the distribution function of x. In many cases, f (x, θ) will be
           bounded and continuous, for all θ ∈ Θ, so strengthening to uniform almost
           sure convergence is immediate. For example if f (x, θ) = [1 + exp(−xθ)] −1 ,
           f : ℜK → (0, 1) , a bounded range, and the function is continuous in θ.


Given these results, it is clear that a minimizer is θ0 . When considering identification
(asymptotic), the question is whether or not there may be some other minimizer. A
local condition for identification is that

                        ∂2              ∂2
                                                Z                         2
                             s ∞ (θ) =                f (x, θ0 ) − f (x, θ) dµ(x)
                       ∂θ∂θ0           ∂θ∂θ0

be positive definite at θ0 . Evaluating this derivative, we obtain (after a little work)



     ∂2
            Z                       2                   Z                               0
                        0
                  f (x, θ ) − f (x, θ) dµ(x)         =2         Dθ f (z, θ0 )0 Dθ0 f (z, θ0 ) dµ(z)
    ∂θ∂θ0                                       θ0

the expectation of the outer product of the gradient of the regression function evaluated
at θ0 . (Note: the uniform boundedness we have already assumed allows passing the
derivative through the integral, by the dominated convergence theorem.) This matrix
will be positive definite (wp1) as long as the gradient vector is of full rank (wp1). The
tangent space to the regression manifold must span a K -dimensional space if we are
                                17.4. ASYMPTOTIC NORMALITY                          359

to consistently estimate a K -dimensional parameter vector. This is analogous to the
requirement that there be no perfect colinearity in a linear model. This is a necessary
condition for identification. Note that the LLN implies that the above expectation is
equal to
                                        0            F0 F
                                   J∞ (θ ) = 2 lim E
                                                      n


                                     17.3. Consistency

    We simply assume that the conditions of Theorem 19 hold, so the estimator is con-
sistent. Given that the strong stochastic equicontinuity conditions hold, as discussed
above, and given the above identification conditions an a compact estimation space (the
closure of the parameter space Θ), the consistency proof’s assumptions are satisfied.



                               17.4. Asymptotic normality

    As in the case of GMM, we also simply assume that the conditions for asymptotic
normality as in Theorem 22 hold. The only remaining problem is to determine the form
of the asymptotic variance-covariance matrix. Recall that the result of the asymptotic
normality theorem is

                    √             d                                 
                        n θ̂ − θ0 → N 0, J∞ (θ0 )−1 I∞ (θ0 )J∞ (θ0 )−1 ,

                                            ∂ 2
where J∞ (θ0 ) is the almost sure limit of ∂θ∂θ                        0
                                                0 sn (θ) evaluated at θ , and


                                                  √
                               I∞ (θ0 ) = limVar nDθ sn (θ0 )


The objective function is

                                        1 n
                                sn (θ) = ∑ [yt − f (xt , θ)]2
                                        n t=1
                                17.4. ASYMPTOTIC NORMALITY                             360

So
                                      2 n
                      Dθ sn (θ) = −     ∑ [yt − f (xt , θ)] Dθ f (xt , θ).
                                      n t=1
Evaluating at θ0 ,
                                             2 n
                           Dθ sn (θ0 ) = −     ∑ εt Dθ f (xt , θ0).
                                             n t=1
Note that the expectation of this is zero, since εt and xt are assumed to be uncorrelated.
So to calculate the variance, we can simply calculate the second moment about zero.
Also note that
                           n
                                                        ∂       0
                          ∑ εt Dθ f (xt , θ0) = ∂θ f(θ0) ε
                          t=1
                                                 = F0 ε


With this we obtain

                                                    √
                           I∞ (θ0 ) = limVar nDθ sn (θ0 )
                                                4 0 ’
                                      = limnE     F εε F
                                               n2
                                                  F0 F
                                      = 4σ2 lim E
                                                   n

We’ve already seen that
                                                        F0 F
                                  J∞ (θ0 ) = 2 lim E         ,
                                                         n
where the expectation is with respect to the joint density of x and ε. Combining these
expressions for J∞ (θ0 ) and I∞ (θ0 ), and the result of the asymptotic normality theorem,
we get                                                    !
                                               0 F −1
                      √          d           F
                       n θ̂ − θ0 → N 0, lim E           σ2 .
                                               n
                  17.5. EXAMPLE: THE POISSON MODEL FOR COUNT DATA                      361

We can consistently estimate the variance covariance matrix using
                                                     −1
                                             F̂0 F̂
(17.4.1)                                                    σ̂2 ,
                                               n

where F̂ is defined as in equation 17.1.1 and
                                             0        
                                 2   y − f(θ̂) y − f(θ̂)
                               σ̂ =                        ,
                                               n

the obvious estimator. Note the close correspondence to the results for the linear
model.




                 17.5. Example: The Poisson model for count data

   Suppose that yt conditional on xt is independently distributed Poisson. A Poisson
random variable is a count data variable, which means it can take the values {0,1,2,...}.
This sort of model has been used to study visits to doctors per year, number of patents
registered by businesses per year, etc.
   The Poisson density is
                                                      y
                                     exp(−λt )λt t
                         f (yt ) =                 , yt ∈ {0, 1, 2, ...}.
                                         yt !

The mean of yt is λt , as is the variance. Note that λt must be positive. Suppose that the
true mean is
                                        λt0 = exp(xt0 β0 ),

which enforces the positivity of λt . Suppose we estimate β0 by nonlinear least squares:

                                           1 n                2
                      β̂ = arg min sn (β) = ∑ yt − exp(xt0 β)
                                           T t=1
                           17.6. THE GAUSS-NEWTON ALGORITHM                                  362

    We can write

         1 n                                2
sn (β) =   ∑
         T t=1
               exp(xt0 β0 + εt − exp(xt0 β)

            1 n                          2 1 n 2         1 n                              
       =      ∑
            T t=1
                  exp(xt
                        0 0
                         β  − exp(xt
                                    0
                                      β)   +   ∑
                                             T t=1
                                                   εt + 2   ∑
                                                          T t=1
                                                                εt exp(xt0 β0 − exp(xt0 β)


The last term has expectation zero since the assumption that E (yt |xt ) = exp(xt0 β0 )
implies that E (εt |xt ) = 0, which in turn implies that functions of xt are uncorrelated
with εt . Applying a strong LLN, and noting that the objective function is continuous
on a compact parameter space, we get

                                                        2
                   s∞ (β) = Ex exp(x0 β0 − exp(x0 β)         + Ex exp(x0 β0 )


where the last term comes from the fact that the conditional variance of ε is the same
as the variance of y. This function is clearly minimized at β = β0 , so the NLS estimator
is consistent as long as identification holds.



                                                                     √        
    E XERCISE 27. Determine the limiting distribution of              n β̂ − β0 . This means
                                   ∂  2
                                                     0     ∂sn (β)
finding the the specific forms of ∂β∂β 0 sn (β), J (β ),     ∂β      , and I (β0 ). Again, use a
CLT as needed, no need to verify that it can be applied.



                         17.6. The Gauss-Newton algorithm

    Readings: Davidson and MacKinnon, Chapter 6, pgs. 201-207 ∗ .
    The Gauss-Newton optimization technique is specifically designed for nonlinear
least squares. The idea is to linearize the nonlinear model, rather than the objective
function. The model is
                                      y = f(θ0 ) + ε.
                           17.6. THE GAUSS-NEWTON ALGORITHM                             363

At some θ in the parameter space, not equal to θ0 , we have


                                       y = f(θ) + ν


where ν is a combination of the fundamental error term ε and the error due to evaluat-
ing the regression function at θ rather than the true value θ0 . Take a first order Taylor’s
series approximation around a point θ1 :

                                       
              y = f(θ1 ) + Dθ0 f θ1 θ − θ1 + ν + approximation error.


Define z ≡ y − f(θ1 ) and b ≡ (θ − θ1 ). Then the last equation can be written as


                                     z = F(θ1 )b + ω,


where, as above, F(θ1 ) ≡ Dθ0 f(θ1 ) is the n × K matrix of derivatives of the regres-
sion function, evaluated at θ1 , and ω is ν plus approximation error from the truncated
Taylor’s series.



       • Note that F is known, given θ1 .
       • Note that one could estimate b simply by performing OLS on the above equa-
         tion.
       • Given b̂, we calculate a new round estimate of θ0 as θ2 = b̂ + θ1 . With this,
         take a new Taylor’s series expansion around θ2 and repeat the process. Stop
         when b̂ = 0 (to within a specified tolerance).



To see why this might work, consider the above approximation, but evaluated at the
NLS estimator:
                                                       
                               y = f(θ̂) + F(θ̂) θ − θ̂ + ω
                           17.6. THE GAUSS-NEWTON ALGORITHM                            364

The OLS estimate of b ≡ θ − θ̂ is

                                            −1               
                              b̂ = F̂0 F̂         F̂0 y − f(θ̂) .


This must be zero, since
                                               
                                 F̂0 θ̂ y − f(θ̂) ≡ 0

by definition of the NLS estimator (these are the normal equations as in equation
17.1.2, Since b̂ ≡ 0 when we evaluate at θ̂, updating would stop.




      • The Gauss-Newton method doesn’t require second derivatives, as does the
         Newton-Raphson method, so it’s faster.
      • The varcov estimator, as in equation 17.4.1 is simple to calculate, since we
         have F̂ as a by-product of the estimation process (i.e., it’s just the last round
         “regressor matrix”). In fact, a normal OLS program will give the NLS var-
         cov estimator directly, since it’s just the OLS varcov estimator from the last
         iteration.
      • The method can suffer from convergence problems since F(θ) 0 F(θ), may be
         very nearly singular, even with an asymptotically identified model, especially
         if θ is very far from θ̂. Consider the example


                                  y = β1 + β2 xt β3 + εt


         When evaluated at β2 ≈ 0, β3 has virtually no effect on the NLS objective
         function, so F will have rank that is “essentially” 2, rather than 3. In this
         case, F0 F will be nearly singular, so (F0 F)−1 will be subject to large roundoff
         errors.
       17.7. APPLICATION: LIMITED DEPENDENT VARIABLES AND SAMPLE SELECTION             365

      17.7. Application: Limited dependent variables and sample selection

   Readings: Davidson and MacKinnon, Ch. 15∗ (a quick reading is sufficient), J.
Heckman, “Sample Selection Bias as a Specification Error”, Econometrica, 1979 (This
is a classic article, not required for reading, and which is a bit out-dated. Nevertheless
it’s a good place to start if you encounter sample selection problems in your research).
   Sample selection is a common problem in applied research. The problem occurs
when observations used in estimation are sampled non-randomly, according to some
selection scheme.



   17.7.1. Example: Labor Supply. Labor supply of a person is a positive number
of hours per unit time supposing the offer wage is higher than the reservation wage,
which is the wage at which the person prefers not to work. The model (very simple,
with t subscripts suppressed):

       • Characteristics of individual: x
       • Latent labor supply: s∗ = x0 β + ω
       • Offer wage: wo = z0 γ + ν
       • Reservation wage: wr = q0 δ + η

Write the wage differential as

                                                           
                             w∗ =      z 0 γ + ν − q0 δ + η

                                  ≡ r0 θ + ε


We have the set of equations


                                     s∗ = x 0 β + ω

                                     w∗ = r0 θ + ε.
       17.7. APPLICATION: LIMITED DEPENDENT VARIABLES AND SAMPLE SELECTION            366

Assume that                                                        
                              ω                  0             σ2   ρσ
                                  ∼ N            ,                  .
                              ε                  0         ρσ       1
We assume that the offer wage and the reservation wage, as well as the latent variable
s∗ are unobservable. What is observed is


                                       w = 1 [w∗ > 0]

                                        s = ws∗ .


In other words, we observe whether or not a person is working. If the person is work-
ing, we observe labor supply, which is equal to latent labor supply, s ∗ . Otherwise,
s = 0 6= s∗ . Note that we are using a simplifying assumption that individuals can freely
choose their weekly hours of work.
   Suppose we estimated the model


                                       s∗ = x0 β + residual


using only observations for which s > 0. The problem is that these observations are
those for which w∗ > 0, or equivalently, −ε < r0 θ and

                                                          
                                      E ω| − ε < r0 θ 6= 0,


since ε and ω are dependent. Furthermore, this expectation will in general depend on x
since elements of x can enter in r. Because of these two facts, least squares estimation
is biased and inconsistent.
   Consider more carefully E [ω| − ε < r0 θ] . Given the joint normality of ω and ε, we
can write (see for example Spanos Statistical Foundations of Econometric Modelling,
       17.7. APPLICATION: LIMITED DEPENDENT VARIABLES AND SAMPLE SELECTION             367

pg. 122)
                                      ω = ρσε + η,

where η has mean zero and is independent of ε. With this we can write


                                   s∗ = x0 β + ρσε + η.


If we condition this equation on −ε < r0 θ we get


                             s = x0 β + ρσE (ε| − ε < r0 θ) + η


which may be written as


                             s = x0 β + ρσE (ε|ε > −r0 θ) + η


      • A useful result is that for


                                        z ∼ N(0, 1)

                                                   φ(z∗ )
                                 E(z|z > z∗ ) =           ,
                                                  Φ(−z∗ )
           where φ (·) and Φ (·) are the standard normal density and distribution func-
           tion, respectively. The quantity on the RHS above is known as the inverse
           Mill’s ratio:
                                                 φ(z∗ )
                                   IMR(z∗ ) =
                                                Φ(−z∗ )
           With this we can write (making use of the fact that the standard normal density
           is symmetric about zero, so that φ(−a) = φ(a)):
       17.7. APPLICATION: LIMITED DEPENDENT VARIABLES AND SAMPLE SELECTION               368

                                                 φ (r0 θ)
(17.7.1)                     s = x0 β + ρσ                +η
                                                 Φ (r0 θ)
                                                         
                                     h                i   β
(17.7.2)                                      φ(r0 θ)     + η.
                                ≡        x0   Φ(r θ)
                                                  0
                                                          ζ

where ζ = ρσ. The error term η has conditional mean zero, and is uncorrelated with
the regressors x0     φ(r0 θ) . At this point, we can estimate the equation by NLS.
                      Φ(r0 θ)

      • Heckman showed how one can estimate this in a two step procedure where
           first θ is estimated, then equation 17.7.2 is estimated by least squares using the
           estimated value of θ to form the regressors. This is inefficient and estimation
           of the covariance is a tricky issue. It is probably easier (and more efficient)
           just to do MLE.
      • The model presented above depends strongly on joint normality. There exist
           many alternative models which weaken the maintained assumptions. It is
           possible to estimate consistently without distributional assumptions. See Ahn
           and Powell, Journal of Econometrics, 1994.
                                     CHAPTER 18


                            Nonparametric inference

             18.1. Possible pitfalls of parametric inference: estimation

    Readings: H. White (1980) “Using Least Squares to Approximate Unknown Re-
gression Functions,” International Economic Review, pp. 149-70.
    In this section we consider a simple example, which illustrates both why nonpara-
metric methods may in some cases be preferred to parametric methods.
    We suppose that data is generated by random sampling of (y, x), where y = f (x)
+ε, x is uniformly distributed on (0, 2π), and ε is a classical error. Suppose that

                                               3x  x 2
                                 f (x) = 1 +      −
                                               2π   2π

The problem of interest is to estimate the elasticity of f (x) with respect to x, throughout
the range of x.
    In general, the functional form of f (x) is unknown. One idea is to take a Taylor’s
series approximation to f (x) about some point x0 . Flexible functional forms such as the
transcendental logarithmic (usually know as the translog) can be interpreted as second
order Taylor’s series approximations. We’ll work with a first order approximation, for
simplicity. Approximating about x0 :


                            h(x) = f (x0 ) + Dx f (x0 ) (x − x0 )


If the approximation point is x0 = 0, we can write


                                      h(x) = a + bx
                                            369
             18.1. POSSIBLE PITFALLS OF PARAMETRIC INFERENCE: ESTIMATION                   370

The coefficient a is the value of the function at x = 0, and the slope is the value of
the derivative at x = 0. These are of course not known. One might try estimation by
ordinary least squares. The objective function is
                                                  n
                              s(a, b) = 1/n ∑ (yt − h(xt ))2 .
                                                t=1

The limiting objective function, following the argument we used to get equations
14.3.1 and 17.2.1 is
                                           Z 2π
                             s∞ (a, b) =          ( f (x) − h(x))2 dx.
                                            0

The theorem regarding the consistency of extremum estimators (Theorem 19) tells
us that â and b̂ will converge almost surely to the values that minimize the limiting
objective function. Solving the first order conditions1 reveals that s∞ (a, b) obtains its
             
minimum at a0 = 67 , b0 = π1 . The estimated approximating function ĥ(x) therefore
tends almost surely to


                                     h∞ (x) = 7/6 + x/π

In Figure 18.1.1 we see the true function and the limit of the approximation to see the
asymptotic bias as a function of x.
    (The approximating model is the straight line, the true model has curvature.) Note
that the approximating model is in general inconsistent, even at the approximation
point. This shows that “flexible functional forms” based upon Taylor’s series approxi-
mations do not in general lead to consistent estimation of functions.
    The approximating model seems to fit the true model fairly well, asymptotically.
However, we are interested in the elasticity of the function. Recall that an elasticity is


1The following results were obtained using the command maxima -b fff.mac You can get the source
file at http://pareto.uab.es/mcreel/Econometrics/Include/Nonparametric/fff.mac.
             18.1. POSSIBLE PITFALLS OF PARAMETRIC INFERENCE: ESTIMATION                371


              F IGURE 18.1.1. True and simple approximating functions
                3.5
                                                                       Fun1
                                                                   x/%PI+7/6


                  3




                2.5




                  2




                1.5




                  1
                      0    1         2       3        4        5         6     7




the marginal function divided by the average function:


                                      ε(x) = xφ0 (x)/φ(x)


Good approximation of the elasticity over the range of x will require a good approxi-
mation of both f (x) and f 0 (x) over the range of x. The approximating elasticity is


                                      η(x) = xh0 (x)/h(x)


In Figure 18.1.2 we see the true elasticity and the elasticity obtained from the limiting
approximating model.
    The true elasticity is the line that has negative slope for large x. Visually we see
that the elasticity is not approximated so well. Root mean squared error in the approx-
imation of the elasticity is
                          Z 2π                       1/2
                                                 2
                                   (ε(x) − η(x)) dx          = . 31546
                               0
             18.1. POSSIBLE PITFALLS OF PARAMETRIC INFERENCE: ESTIMATION                   372


                 F IGURE 18.1.2. True and approximating elasticities
                0.7
                                                                       Fun1
                                                         x/(%PI*(x/%PI+7/6))

                0.6



                0.5



                0.4



                0.3



                0.2



                0.1



                 0
                      0       1    2        3      4         5           6             7




   Now suppose we use the leading terms of a trigonometric series as the approxi-
mating model. The reason for using a trigonometric series as an approximating model
is motivated by the asymptotic properties of the Fourier flexible functional form (Gal-
lant, 1981, 1982), which we will study in more detail below. Normally with this type
of model the number of basis functions is an increasing function of the sample size.
Here we hold the set of basis function fixed. We will consider the asymptotic behavior
of a fixed model, which we interpret as an approximation to the estimator’s behavior
in finite samples. Consider the set of basis functions:

                          h                                                    i
                 Z(x) =       1 x cos(x) sin(x) cos(2x) sin(2x)                    .

The approximating model is
                                       gK (x) = Z(x)α.
            18.1. POSSIBLE PITFALLS OF PARAMETRIC INFERENCE: ESTIMATION                     373


           F IGURE 18.1.3. True function and more flexible approximation
                  3.5
                                                                Fun1
                                                                Fun2


                   3




                  2.5




                   2




                  1.5




                   1
                        0   1     2        3     4       5       6       7




Maintaining these basis functions as the sample size increases, we find that the limiting
objective function is minimized at
                                                                   
                      7      1         1                  1
                  a1 = , a2 = , a3 = − 2 , a4 = 0, a5 = − 2 , a6 = 0 .
                      6      π        π                  4π

Substituting these values into gK (x) we obtain the almost sure limit of the approxima-
tion
(18.1.1)
                                                                     
                                  1                                 1
   g∞ (x) = 7/6 + x/π + (cos x) − 2        + (sin x) 0 + (cos 2x) − 2        + (sin 2x) 0
                                 π                                 4π

In Figure 18.1.3 we have the approximation and the true function: Clearly the trun-
cated trigonometric series model offers a better approximation, asymptotically, than
does the linear model. In Figure 18.1.4 we have the more flexible approximation’s
elasticity and that of the true function: On average, the fit is better, though there is
        18.2. POSSIBLE PITFALLS OF PARAMETRIC INFERENCE: HYPOTHESIS TESTING           374


          F IGURE 18.1.4. True elasticity and more flexible approximation
                0.7
                                                                          Fun1
                                                                          Fun2

                0.6



                0.5



                0.4



                0.3



                0.2



                0.1



                 0
                      0        1      2      3           4          5       6    7




some implausible wavyness in the estimate. Root mean squared error in the approxi-
mation of the elasticity is

                          Z 2π                    2        !1/2
                                         g0 (x)x
                                   ε(x) − ∞             dx          = . 16213,
                           0              g∞ (x)

about half that of the RMSE when the first order approximation is used. If the trigono-
metric series contained infinite terms, this error measure would be driven to zero, as
we shall see.



        18.2. Possible pitfalls of parametric inference: hypothesis testing

   What do we mean by the term “nonparametric inference”? Simply, this means
inferences that are possible without restricting the functions of interest to belong to a
parametric family.

       • Consider means of testing for the hypothesis that consumers maximize utility.
         A consequence of utility maximization is that the Slutsky matrix D2p h(p,U ),
 18.2. POSSIBLE PITFALLS OF PARAMETRIC INFERENCE: HYPOTHESIS TESTING           375

  where h(p,U ) are the a set of compensated demand functions, must be neg-
  ative semi-definite. One approach to testing for utility maximization would
  estimate a set of normal demand functions x(p, m).
• Estimation of these functions by normal parametric methods requires specifi-
  cation of the functional form of demand, for example


                   x(p, m) = x(p, m, θ0 ) + ε, θ0 ∈ Θ0 ,


  where x(p, m, θ0 ) is a function of known form and Θ0 is a finite dimensional
  parameter.
• After estimation, we could use x̂ = x(p, m, θ̂) to calculate (by solving the in-
                                             b 2p h(p,U ). If we can statistically
  tegrability problem, which is non-trivial) D
  reject that the matrix is negative semi-definite, we might conclude that con-
  sumers don’t maximize utility.
• The problem with this is that the reason for rejection of the theoretical propo-
  sition may be that our choice of functional form is incorrect. In the introduc-
  tory section we saw that functional form misspecification leads to inconsistent
  estimation of the function and its derivatives.
• Testing using parametric models always means we are testing a compound
  hypothesis. The hypothesis that is tested is 1) the economic proposition we
  wish to test, and 2) the model is correctly specified. Failure of either 1) or
  2) can lead to rejection. This is known as the “model-induced augmenting
  hypothesis.”
• Varian’s WARP allows one to test for utility maximization without specifying
  the form of the demand functions. The only assumptions used in the test
  are those directly implied by theory, so rejection of the hypothesis calls into
  question the theory.
                              18.3. THE FOURIER FUNCTIONAL FORM                       376

      • Nonparametric inference allows direct testing of economic propositions, with-
           out the “model-induced augmenting hypothesis”.




                             18.3. The Fourier functional form

   Readings: Gallant, 1987, “Identification and consistency in semi-nonparametric
regression,” in Advances in Econometrics, Fifth World Congress, V. 1, Truman Bewley,
ed., Cambridge.

      • Suppose we have a multivariate model


                                            y = f (x) + ε,


           where f (x) is of unknown form and x is a P−dimensional vector. For sim-
           plicity, assume that ε is a classical error. Let us take the estimation of the
           vector of elasticities with typical element

                                                    xi ∂ f (x)
                                        ξ xi =                    ,
                                                  f (x) ∂xi f (x)

           at an arbitrary point xi .

The Fourier form, following Gallant (1982), but with a somewhat different parameter-
ization, may be written as


                                                         A    J                      
(18.3.1) gK (x | θK ) = α + x β + 1/2x Cx + ∑ ∑ u jα cos( jk0α x) − v jα sin( jk0α x) .
                                 0            0
                                                       α=1 j=1

where the K-dimensional parameter vector


(18.3.2)                θK = {α, β0 , vec∗ (C)0, u11 , v11 , . . . , uJA , vJA }0 .
                   18.3. THE FOURIER FUNCTIONAL FORM                              377

• We assume that the conditioning variables x have each been transformed to
  lie in an interval that is shorter than 2π. This is required to avoid periodic
  behavior of the approximation, which is desirable since economic functions
  aren’t periodic. For example, subtract sample means, divide by the maxima
  of the conditioning variables, and multiply by 2π − eps, where eps is some
  positive number less than 2π in value.
• The kα are ”elementary multi-indices” which are simply P− vectors formed
  of integers (negative, positive and zero). The kα , α = 1, 2, ..., A are required to
  be linearly independent, and we follow the convention that the first non-zero
  element be positive. For example
                           h                    i0
                               0 1 −1 0 1

  is a potential multi-index to be used, but
                          h                       i0
                               0 −1 −1 0 1

  is not since its first nonzero element is negative. Nor is
                           h                    i0
                               0 2 −2 0 2

  a multi-index we would use, since it is a scalar multiple of the original multi-
  index.
• We parameterize the matrix C differently than does Gallant because it simpli-
  fies things in practice. The cost of this is that we are no longer able to test a
  quadratic specification using nested testing.
                              18.3. THE FOURIER FUNCTIONAL FORM                                               378

The vector of first partial derivatives is


                                                 A       J                                                
(18.3.3) Dx gK (x | θK ) = β + Cx + ∑ ∑                          −u jα sin( jk0α x) − v jα cos( jk0α x) jkα
                                             α=1 j=1

and the matrix of second partial derivatives is


                                        A    J                                                          
(18.3.4)     D2x gK (x|θK ) = C + ∑ ∑                    −u jα cos( jk0α x) + v jα sin( jk0α x) j2 kα k0α
                                       α=1 j=1

    To define a compact notation for partial derivatives, let λ be an N-dimensional
multi-index with no negative elements. Define | λ |∗ as the sum of the elements of λ.
If we have N arguments x of the (arbitrary) function h(x), use Dλ h(x) to indicate a
certain partial derivative:
                                                                    ∗
                                   λ                         ∂|λ|
                               D h(x) ≡                                      h(x)
                                                 ∂xλ1 1 ∂xλ2 2 · · · ∂xλNN

When λ is the zero vector, Dλ h(x) ≡ h(x). Taking this definition and the last few
equations into account, we see that it is possible to define (1 × K) vector Z λ (x) so that


(18.3.5)                               Dλ gK (x|θK ) = zλ (x)0 θK .


       • Both the approximating model and the derivatives of the approximating model
           are linear in the parameters.
       • For the approximating model to the function (not derivatives), write g K (x|θK ) =
           z0 θK for simplicity.

The following theorem can be used to prove the consistency of the Fourier form.

    T HEOREM 28. [Gallant and Nychka, 1987] Suppose that ĥn is obtained by max-
imizing a sample objective function sn (h) over HKn where HK is a subset of some
                           18.3. THE FOURIER FUNCTIONAL FORM                             379

function space H on which is defined a norm k h k. Consider the following condi-
tions:
    (a) Compactness: The closure of H with respect to k h k is compact in the relative
topology defined by k h k.
    (b) Denseness: ∪K HK , K = 1, 2, 3, ... is a dense subset of the closure of H with
respect to k h k and HK ⊂ HK+1 .
    (c) Uniform convergence: There is a point h∗ in H and there is a function s∞ (h, h∗ )
that is continuous in h with respect to k h k such that


                             lim sup | sn (h) − s∞ (h, h∗ ) |= 0
                             n→∞
                                   H

almost surely.
    (d) Identification: Any point h in the closure of H with s∞ (h, h∗ ) ≥ s∞ (h∗ , h∗ ) must
have k h − h∗ k= 0.
    Under these conditions limn→∞ k h∗ − ĥn k= 0 almost surely, provided that limn→∞ Kn =
∞ almost surely.



    The modification of the original statement of the theorem that has been made is to
set the parameter space Θ in Gallant and Nychka’s (1987) Theorem 0 to a single point
and to state the theorem in terms of maximization rather than minimization.
    This theorem is very similar in form to Theorem 19. The main differences are:


     (1) A generic norm k h k is used in place of the Euclidean norm. This norm
         may be stronger than the Euclidean norm, so that convergence with respect
         to k h k implies convergence w.r.t the Euclidean norm. Typically we will
         want to make sure that the norm is strong enough to imply convergence of all
         functions of interest.
                               18.3. THE FOURIER FUNCTIONAL FORM                          380

     (2) The “estimation space” H is a function space. It plays the role of the parame-
         ter space Θ in our discussion of parametric estimators. There is no restriction
         to a parametric family, only a restriction to a space of functions that satisfy
         certain conditions. This formulation is much less restrictive than the restric-
         tion to a parametric family.
     (3) There is a denseness assumption that was not present in the other theorem.

We will not prove this theorem (the proof is quite similar to the proof of theorem [19],
see Gallant, 1987) but we will discuss its assumptions, in relation to the Fourier form
as the approximating model.


    18.3.1. Sobolev norm. Since all of the assumptions involve the norm k h k , we
need to make explicit what norm we wish to use. We need a norm that guarantees
that the errors in approximation of the functions we are interested in are accounted
for. Since we are interested in first-order elasticities in the present case, we need close
approximation of both the function f (x) and its first derivative f 0 (x), throughout the
range of x. Let X be an open set that contains all values of x that we’re interested in.
The Sobolev norm is appropriate in this case. It is defined, making use of our notation
for partial derivatives, as:


                                 k h km,X = max sup Dλ h(x)
                                             |λ∗ |≤m X


To see whether or not the function f (x) is well approximated by an approximating
model gK (x | θK ), we would evaluate


                                   k f (x) − gK (x | θK ) km,X .

We see that this norm takes into account errors in approximating the function and
partial derivatives up to order m. If we want to estimate first order elasticities, as is the
                          18.3. THE FOURIER FUNCTIONAL FORM                             381

case in this example, the relevant m would be m = 1. Furthermore, since we examine
the sup over X , convergence w.r.t. the Sobolev means uniform convergence, so that we
obtain consistent estimates for all values of x.

   18.3.2. Compactness. Verifying compactness with respect to this norm is quite
technical and unenlightening. It is proven by Elbadawi, Gallant and Souza, Econo-
metrica, 1983. The basic requirement is that if we need consistency w.r.t. k h k m,X ,
then the functions of interest must belong to a Sobolev space which takes into account
derivatives of order m + 1. A Sobolev space is the set of functions


                         Wm,X (D) = {h(x) :k h(x) km,X < D},


where D is a finite constant. In plain words, the functions must have bounded partial
derivatives of one order higher than the derivatives we seek to estimate.

   18.3.3. The estimation space and the estimation subspace. Since in our case
we’re interested in consistent estimation of first-order elasticities, we’ll define the es-
timation space as follows:


    D EFINITION 29. [Estimation space] The estimation space H = W2,X (D). The es-
timation space is an open set, and we presume that h∗ ∈ H .


   So we are assuming that the function to be estimated has bounded second deriva-
tives throughout X .
   With seminonparametric estimators, we don’t actually optimize over the estimation
space. Rather, we optimize over a subspace, HKn , defined as:


    D EFINITION 30. [Estimation subspace] The estimation subspace H K is defined as


                 HK = {gK (x|θK ) : gK (x|θK ) ∈ W2,Z (D), θK ∈ ℜK },
                            18.3. THE FOURIER FUNCTIONAL FORM                                382

where gK (x, θK ) is the Fourier form approximation as defined in Equation 18.3.1.

    18.3.4. Denseness. The important point here is that HK is a space of functions
that is indexed by a finite dimensional parameter (θK has K elements, as in equation
18.3.2). With n observations, n > K, this parameter is estimable. Note that the true
function h∗ is not necessarily an element of HK , so optimization over HK may not
lead to a consistent estimator. In order for optimization over HK to be equivalent to
optimization over H , at least asymptotically, we need that:

     (1) The dimension of the parameter vector, dim θKn → ∞ as n → ∞. This is achieved
          by making A and J in equation 18.3.1 increasing functions of n, the sample
          size. It is clear that K will have to grow more slowly than n. The second
          requirement is:
     (2) We need that the HK be dense subsets of H .

The estimation subspace HK , defined above, is a subset of the closure of the estimation
space, H . A set of subsets Aa of a set A is “dense” if the closure of the countable
union of the subsets is equal to the closure of A :


                                         ∪∞
                                          a=1 Aa = A


Use a picture here. The rest of the discussion of denseness is provided just for com-
pleteness: there’s no need to study it in detail. To show that HK is a dense subset of
H with respect to k h k1,X , it is useful to apply Theorem 1 of Gallant (1982), who in

turn cites Edmunds and Moscatelli (1977). We reproduce the theorem as presented by
Gallant, with minor notational changes, for convenience of reference:

    T HEOREM 31. [Edmunds and Moscatelli, 1977] Let the real-valued function h ∗ (x)
be continuously differentiable up to order m on an open set containing the closure of
X . Then it is possible to choose a triangular array of coefficients θ 1 , θ2 , . . . θK , . . .,
                           18.3. THE FOURIER FUNCTIONAL FORM                          383

such that for every q with 0 ≤ q < m, and every ε > 0, k h∗ (x) − hK (x|θK ) kq,X =
o(K −m+q+ε ) as K → ∞.



     In the present application, q = 1, and m = 2. By definition of the estimation space,
the elements of H are once continuously differentiable on X , which is open and con-
tains the closure of X , so the theorem is applicable. Closely following Gallant and
Nychka (1987), ∪∞ HK is the countable union of the HK . The implication of Theorem
31 is that there is a sequence of {hK } from ∪∞ HK such that


                                 lim k h∗ − hK k1,X = 0,
                                K→∞


for all h∗ ∈ H . Therefore,
                                      H ⊂ ∪ ∞ HK .

However,
                                      ∪∞ HK ⊂ H ,

so
                                      ∪∞ HK ⊂ H .

Therefore
                                      H = ∪ ∞ HK ,

so ∪∞ HK is a dense subset of H , with respect to the norm k h k1,X .



     18.3.5. Uniform convergence. We now turn to the limiting objective function.
We estimate by OLS. The sample objective function stated in terms of maximization
is
                                      1 n
                          sn (θK ) = − ∑ (yt − gK (xt | θK ))2
                                      n t=1
                              18.3. THE FOURIER FUNCTIONAL FORM                                      384

With random sampling, as in the case of Equations 14.3.1 and 17.2.1, the limiting
objective function is


                                             Z
(18.3.6)                 s∞ (g, f ) = −              ( f (x) − g(x))2 dµx − σ2ε .
                                                 X


where the true function f (x) takes the place of the generic function h ∗ in the presenta-
tion of the theorem. Both g(x) and f (x) are elements of ∪∞ HK .
    The pointwise convergence of the objective function needs to be strengthened to
uniform convergence. We will simply assume that this holds, since the way to verify
this depends upon the specific application. We also have continuity of the objective
function in g, with respect to the norm k h k1,X since

                                                                   
                        lim             s∞ g 1 , f ) − s ∞ g 0 , f )
                  kg1 −g0 k1,X →0
                                    Z h                        2                      2 i
              =         lim                  g1 (x) − f (x)         − g0 (x) − f (x)          dµx.
                  kg1 −g0 k1,X →0 X


By the dominated convergence theorem (which applies since the finite bound D used
to define W2,Z (D) is dominated by an integrable function), the limit and the integral
can be interchanged, so by inspection, the limit is zero.



    18.3.6. Identification. The identification condition requires that for any point (g, f )
in H × H , s∞ (g, f ) ≥ s∞ ( f , f ) ⇒ k g − f k1,X = 0. This condition is clearly satisfied
given that g and f are once continuously differentiable (by the assumption that defines
the estimation space).



    18.3.7. Review of concepts. For the example of estimation of first-order elastici-
ties, the relevant concepts are:
                          18.3. THE FOURIER FUNCTIONAL FORM                          385

      • Estimation space H = W2,X (D): the function space in the closure of which
         the true function must lie.
      • Consistency norm k h k1,X . The closure of H is compact with respect to this
         norm.
      • Estimation subspace HK . The estimation subspace is the subset of H that is
         representable by a Fourier form with parameter θK . These are dense subsets
         of H .
      • Sample objective function sn (θK ), the negative of the sum of squares. By
         standard arguments this converges uniformly to the
      • Limiting objective function s∞ ( g, f ), which is continuous in g and has a
         global maximum in its first argument, over the closure of the infinite union of
         the estimation subpaces, at g = f .
      • As a result of this, first order elasticities

                                         xi ∂ f (x)
                                       f (x) ∂xi f (x)

         are consistently estimated for all x ∈ X .

   18.3.8. Discussion. Consistency requires that the number of parameters used in
the expansion increase with the sample size, tending to infinity. If parameters are
added at a high rate, the bias tends relatively rapidly to zero. A basic problem is
that a high rate of inclusion of additional parameters causes the variance to tend more
slowly to zero. The issue of how to chose the rate at which parameters are added
and which to add first is fairly complex. A problem is that the allowable rates for
asymptotic normality to obtain (Andrews 1991; Gallant and Souza, 1991) are very
strict. Supposing we stick to these rates, our approximating model is:


                                    gK (x|θK ) = z0 θK .
                         18.4. KERNEL REGRESSION ESTIMATORS                          386

       • Define ZK as the n × K matrix of regressors obtained by stacking observa-
         tions. The LS estimator is

                                                   +
                                    θ̂K = Z0K ZK        Z0K y,


         where (·)+ is the Moore-Penrose generalized inverse.
           – This is used since Z0K ZK may be singular, as would be the case for K(n)
              large enough when some dummy variables are included.
       • . The prediction, z0 θ̂K , of the unknown function f (x) is asymptotically nor-
         mally distributed:

                              √                    d
                                  n z0 θ̂K − f (x) → N(0, AV ),


         where                      "               #
                                              +
                                        ZK ZK
                                         0
                          AV = lim E z0          zσ̂2 .
                               n→∞         n
         Formally, this is exactly the same as if we were dealing with a parametric lin-
         ear model. I emphasize, though, that this is only valid if K grows very slowly
         as n grows. If we can’t stick to acceptable rates, we should probably use some
         other method of approximating the small sample distribution. Bootstrapping
         is a possibility. We’ll discuss this in the section on simulation.

                         18.4. Kernel regression estimators

   Readings: Bierens, 1987, “Kernel estimators of regression functions,” in Advances
in Econometrics, Fifth World Congress, V. 1, Truman Bewley, ed., Cambridge.
   An alternative method to the semi-nonparametric method is a fully nonparametric
method of estimation. Kernel regression estimation is an example (others are splines,
nearest neighbor, etc.). We’ll consider the Nadaraya-Watson kernel regression estima-
tor in a simple case.
                         18.4. KERNEL REGRESSION ESTIMATORS                        387

      • Suppose we have an iid sample from the joint density f (x, y), where x is k
         -dimensional. The model is


                                    yt = g(xt ) + εt ,


         where
                                       E(εt |xt ) = 0.

      • The conditional expectation of y given x is g(x). By definition of the condi-
         tional expectation, we have

                                                  f (x, y)
                                          Z
                             g(x) =           y            dy
                                                   h(x)
                                      1
                                                  Z
                                   =                  y f (x, y)dy,
                                     h(x)

         where h(x) is the marginal density of x :
                                              Z
                                 h(x) =           f (x, y)dy.


      • This suggests that we could estimate g(x) by estimating h(x) and y f (x, y)dy.
                                                                         R




   18.4.1. Estimation of the denominator. A kernel estimator for h(x) has the form

                                       1 n K [(x − xt ) /γn ]
                             ĥ(x) =     ∑
                                       n t=1      γkn
                                                              ,


where n is the sample size and k is the dimension of x.


      • The function K(·) (the kernel) is absolutely integrable:
                                   Z
                                       |K(x)|dx < ∞,
                    18.4. KERNEL REGRESSION ESTIMATORS                               388

  and K(·) integrates to 1 :
                               Z
                                    K(x)dx = 1.


  In this respect, K(·) is like a density function, but we do not necessarily re-
  strict K(·) to be nonnegative.
• The window width parameter, γn is a sequence of positive numbers that satis-
  fies


                                   lim γn = 0
                                   n→∞

                                lim nγkn = ∞
                               n→∞


  So, the window width must tend to zero, but not too quickly.
• To show pointwise consistency of ĥ(x) for h(x), first consider the expectation
  of the estimator (since the estimator is an average of iid terms we only need
  to consider the expectation of a representative term):

                             Z
                  E ĥ(x) =         γ−k
                                     n K [(x − z) /γn ] h(z)dz.


  Change variables as z∗ = (x − z)/γn , so z = x − γn z∗ and | dzdz∗0 | = γkn , we obtain

                       Z
                                               ∗ k ∗
               E ĥ(x) =   γ−k
                            n K (z ) h(x − γn z )γn dz
                                  ∗

                                Z
                           =        K (z∗ ) h(x − γn z∗ )dz∗ .
                           18.4. KERNEL REGRESSION ESTIMATORS                         389

       Now, asymptotically,

                                               Z
                    lim E ĥ(x) =          lim        K (z∗ ) h(x − γn z∗ )dz∗
                    n→∞                    n→∞
                                           Z
                                      =         lim K (z∗ ) h(x − γn z∗ )dz∗
                                               n→∞
                                           Z
                                      =        K (z∗ ) h(x)dz∗
                                                  Z
                                      = h(x)          K (z∗ ) dz∗

                                      = h(x),


       since γn → 0 and K (z∗ ) dz∗ = 1 by assumption. (Note: that we can pass the
                             R

       limit through the integral is a result of the dominated convergence theorem..
       For this to hold we need that h(·) be dominated by an absolutely integrable
       function.
     • Next, considering the variance of ĥ(x), we have, due to the iid assumption
                                                                                 
                                       1 n                 K [(x − xt ) /γn ]
                   nγknV    ĥ(x) = nγkn 2 ∑ V
                                        n t=1                       γkn
                                               1 n
                                    = γ−k
                                       n         ∑ V {K [(x − xt ) /γn]}
                                               n t=1

     • By the representative term argument, this is


                                     
                           nγknV ĥ(x) = γ−k
                                          n V {K [(x − z) /γn ]}

     • Also, since V (x) = E(x2 ) − E(x)2 we have

                   n                       o
                                           2                               2
nγknV ĥ(x) = γ−k
                n  E   (K [(x − z) /γ n ])     − γ−k
                                                  n {E (K [(x − z) /γn ])}
               Z                                      Z                            2
                                     2              k
             =    γn K [(x − z) /γn ] h(z)dz − γn
                   −k
                                                         γn K [(x − z) /γn ] h(z)dz
                                                          −k

                    Z                                         h      i2
                                             2            k    b
              =         γ−k
                         n  K [(x − z) /γ n ]  h(z)dz − γ n E   h(x)
                             18.4. KERNEL REGRESSION ESTIMATORS                                    390

         The second term converges to zero:
                                                   h     i2
                                           γkn E    bh(x) → 0,


         by the previous result regarding the expectation and the fact that γ n → 0.
         Therefore,

                                         Z
                                                               2
                 lim nγk V      ĥ(x) = lim γ−k
                                             n K [(x − z) /γn ] h(z)dz.
                 n→∞ n                       n→∞


         Using exactly the same change of variables as before, this can be shown to be

                                                        Z
                           lim nγk V       ĥ(x) = h(x)       [K(z∗ )]2 dz∗ .
                           n→∞ n


         Since both       [K(z∗ )]2 dz∗ and h(x) are bounded, this is bounded, and since
                      R

         nγkn → ∞ by assumption, we have that

                                                   
                                             V ĥ(x) → 0.


      • Since the bias and the variance both go to zero, we have pointwise consistency
         (convergence in quadratic mean implies convergence in probability).




   18.4.2. Estimation of the numerator. To estimate                      y f (x, y)dy, we need an esti-
                                                                     R

mator of f (x, y). The estimator has the same form as the estimator for h(x), only with
one dimension more:
                                        n
                                    1     K∗ [(y − yt ) /γn , (x − xt ) /γn ]
                          fˆ(x, y) = ∑
                                    n t=1               γk+1
                                                         n

The kernel K∗ (·) is required to have mean zero:
                                        Z
                                             yK∗ (y, x) dy = 0
                          18.4. KERNEL REGRESSION ESTIMATORS                            391

and to marginalize to the previous kernel for h(x) :
                                   Z
                                       K∗ (y, x) dy = K(x).


With this kernel, we have

                                              1 n K [(x − xt ) /γn ]
                         Z
                             y fˆ(y, x)dy =     ∑ yt
                                              n t=1      γkn

by marginalization of the kernel, so we obtain

                                       1
                                               Z
                             ĝ(x) =               y fˆ(y, x)dy
                                     ĥ(x)
                                         1 n        K[(x−xt )/γn ]
                                         n ∑t=1 yt        γkn
                                   =               K[(x−x
                                          1 n              t )/γn ]
                                          n ∑t=1        γkn
                                           n
                                         ∑t=1  yt K [(x − xt ) /γn ]
                                   =         n                       .
                                          ∑t=1 K [(x − xt ) /γn ]

This is the Nadaraya-Watson kernel regression estimator.


   18.4.3. Discussion.

      • The kernel regression estimator for g(xt ) is a weighted average of the y j , j =
         1, 2, ..., n, where higher weights are associated with points that are closer to
         xt . The weights sum to 1.
      • The window width parameter γn imposes smoothness. The estimator is in-
         creasingly flat as γn → ∞, since in this case each weight tends to 1/n.
      • A large window width reduces the variance (strong imposition of flatness),
         but increases the bias.
      • A small window width reduces the bias, but makes very little use of informa-
         tion except points that are in a small neighborhood of xt . Since relatively little
         information is used, the variance is large when the window width is small.
                                18.5. KERNEL DENSITY ESTIMATION                            392

         • The standard normal density is a popular choice for K(.) and K∗ (y, x), though
            there are possibly better alternatives.


       18.4.4. Choice of the window width: Cross-validation. The selection of an ap-
propriate window width is important. One popular method is cross validation. This
consists of splitting the sample into two parts (e.g., 50%-50%). The first part is the “in
sample” data, which is used for estimation, and the second part is the “out of sample”
data, used for evaluation of the fit though RMSE or some other criterion. The steps
are:

        (1) Split the data. The out of sample data is yout and xout .
        (2) Choose a window width γ.
        (3) With the in sample data, fit ŷtout corresponding to each xtout . This fitted value
            is a function of the in sample data, as well as the evaluation point xtout , but it
            does not involve ytout .
        (4) Repeat for all out of sample points.
        (5) Calculate RMSE(γ)
        (6) Go to step 2, or to the next step if enough window widths have been tried.
        (7) Select the γ that minimizes RMSE(γ) (Verify that a minimum has been found,
            for example by plotting RMSE as a function of γ).
        (8) Re-estimate using the best γ and all of the data.

This same principle can be used to choose A and J in a Fourier form model.


                               18.5. Kernel density estimation

       The previous discussion suggests that a kernel density estimator may easily be
constructed. We have already seen how joint densities may be estimated. If were
interested in a conditional density, for example of y conditional on x, then the kernel
                    18.6. SEMI-NONPARAMETRIC MAXIMUM LIKELIHOOD                     393

estimate of the conditional density is simply

                                fˆ(x, y)
                     fby|x =
                                  ĥ(x)
                               1 n K∗ [(y−yt )/γn ,(x−xt )/γn ]
                               n ∑t=1         γnk+1
                           =
                                     1 n K[(x−xt )/γn ]
                                     n ∑t=1   γkn
                                  n
                               1 ∑t=1 K∗ [(y − yt ) /γn , (x − xt ) /γn ]
                           =             n
                               γn      ∑t=1  K [(x − xt ) /γn ]

where we obtain the expressions for the joint and marginal densities from the section
on kernel regression.



                  18.6. Semi-nonparametric maximum likelihood

   Readings: Gallant and Nychka, Econometrica, 1987. For a Fortran program to do
this and a useful discussion in the user’s guide, see
   this link . See also Cameron and Johansson, Journal of Applied Econometrics, V.
12, 1997.
   MLE is the estimation method of choice when we are confident about specifying
the density. Is is possible to obtain the benefits of MLE when we’re not so confident
about the specification? In part, yes.
   Suppose we’re interested in the density of y conditional on x (both may be vectors).
Suppose that the density f (y|x, φ) is a reasonable starting approximation to the true
density. This density can be reshaped by multiplying it by a squared polynomial. The
new density is
                                                h2p (y|γ) f (y|x, φ)
                            g p (y|x, φ, γ) =
                                                    η p (x, φ, γ)
where
                                                   p
                                    h p (y|γ) = ∑ γk yk
                                                  k=0
                      18.6. SEMI-NONPARAMETRIC MAXIMUM LIKELIHOOD                      394

and η p (x, φ, γ) is a normalizing factor to make the density integrate (sum) to one. Be-
cause h2p (y|γ)/η p (x, φ, γ) is a homogenous function of θ it is necessary to impose a
normalization: γ0 is set to 1. The normalization factor η p (φ, γ) is calculated (following
Cameron and Johansson) using
                               ∞
                 E(Y r ) =    ∑ yr fY (y|φ, γ)
                              y=0
                               ∞        [h p (y|γ)]2
                          =   ∑ yr       η p (φ, γ)
                                                     fY (y|φ)
                              y=0
                               ∞    p     p
                          =   ∑ ∑ ∑ yr fY (y|φ)γk γl yk yl /η p(φ, γ)
                              y=0 k=0 l=0
                                              (                 )
                               p    p             ∞
                          =   ∑ ∑ γk γl ∑ yr+k+l fY (y|φ) /η p(φ, γ)
                              k=0 l=0           y=0
                               p    p
                          =   ∑ ∑ γk γl mk+l+r /η p(φ, γ).
                              k=0 l=0

By setting r = 0 we get that the normalizing factor is
    18.6.1
                                                  p   p
(18.6.1)                       η p (φ, γ) = ∑ ∑ γk γl mk+l
                                                k=0 l=0

Recall that γ0 is set to 1 to achieve identification. The mr in equation 18.6.1 are the
raw moments of the baseline density. Gallant and Nychka (1987) give conditions under
which such a density may be treated as correctly specified, asymptotically. Basically,
the order of the polynomial must increase as the sample size increases. However, there
are technicalities.
    Similarly to Cameron and Johannson (1997), we may develop a negative binomial
polynomial (NBP) density for count data. The negative binomial baseline density may
                   18.6. SEMI-NONPARAMETRIC MAXIMUM LIKELIHOOD                             395

be written (see equation as
                                                         ψ          y
                                 Γ(y + ψ)            ψ            λ
                    fY (y|φ) =
                               Γ(y + 1)Γ(ψ)         ψ+λ          ψ+λ

where φ = {λ, ψ}, λ > 0 and ψ > 0. The usual means of incorporating conditioning
variables x is the parameterization λ = ex β . When ψ = λ/α we have the negative
                                            0



binomial-I model (NB-I). When ψ = 1/α we have the negative binomial-II (NP-II)
model. For the NB-I density, V (Y ) = λ + αλ. In the case of the NB-II model, we have
V (Y ) = λ + αλ2 . For both forms, E(Y ) = λ.
   The reshaped density, with normalization to sum to one, is
                                                                    ψ          y
                               [h p (y|γ)]2 Γ(y + ψ)            ψ            λ
(18.6.2)         fY (y|φ, γ) =                                                         .
                                η p (φ, γ) Γ(y + 1)Γ(ψ)        ψ+λ          ψ+λ

To get the normalization factor, we need the moment generating function:

                                                          −ψ
(18.6.3)                      MY (t) = ψψ λ − et λ + ψ          .


To illustrate, Figure 18.6.1 shows calculation of the first four raw moments of the NB
density, calculated using MuPAD, which is a Computer Algebra System that (use to
be?) free for personal use. These are the moments you would need to use a second
order polynomial (p = 2). MuPAD will output these results in the form of C code,
which is relatively easy to edit to write the likelihood function for the model. This has
been done in NegBinSNP.cc, which is a C++ version of this model that can be compiled
to use with octave using the mkoctfile command. Note the impressive length of the
expressions when the degree of the expansion is 4 or 5! This is an example of a model
that would be difficult to formulate without the help of a program like MuPAD.
                   18.6. SEMI-NONPARAMETRIC MAXIMUM LIKELIHOOD                      396


                 F IGURE 18.6.1. Negative binomial raw moments




   It is possible that there is conditional heterogeneity such that the appropriate re-
shaping should be more local. This can be accomodated by allowing the γ k parameters
to depend upon the conditioning variables, for example using polynomials.
   Gallant and Nychka, Econometrica, 1987 prove that this sort of density can ap-
proximate a wide variety of densities arbitrarily well as the degree of the polynomial
increases with the sample size. This approach is not without its drawbacks: the sample
objective function can have an extremely large number of local maxima that can lead
to numeric difficulties. If someone could figure out how to do in a way such that the
sample objective function was nice and smooth, they would probably get the paper
published in a good journal. Any ideas?
   Here’s a plot of true and the limiting SNP approximations (with the order of the
polynomial fixed) to four different count data densities, which variously exhibit over
                                                 18.7. EXAMPLES                                                   397

and underdispersion, as well as excess zeros. The baseline model is a negative bino-
mial density.




             Case 1                                                     Case 2
   .5

   .4                                                          .1

   .3

   .2                                                         .05

   .1


     0                    5       10       15        20             0            5       10         15    20     25
             Case 3                                                     Case 4
  .25                                                          .2

   .2                                                         .15

  .15
                                                               .1
   .1
                                                              .05
  .05

         1            2       3        4   5     6        7               2.5        5        7.5    10   12.5   15




                                                18.7. Examples

    We’ll use the MEPS OBDV data to illustrate kernel regression and semi-nonparametric
maximum likelihood.


    18.7.1. Kernel regression estimation. Let’s try a kernel regression fit for the
OBDV data. The program OBDVkernel.m loads the MEPS OBDV data, scans over a
range of window widths and calculates leave-one-out CV scores, and plots the fitted
OBDV usage versus AGE, using the best window width. The plot is in Figure 18.7.1.
                                         18.7. EXAMPLES                                        398


                   F IGURE 18.7.1. Kernel fitted OBDV usage versus AGE
                                      Kernel fit, OBDV visits versus AGE
         5




        4.5




         4




        3.5




         3




        2.5




         2
              15     20    25    30         35        40        45         50   55   60   65



Note that usage increases with age, just as we’ve seen with the parametric models.
Once could use bootstrapping to generate a confidence interval to the fit.


   18.7.2. Seminonparametric ML estimation and the MEPS data. Now let’s es-
timate a seminonparametric density for the OBDV data. We’ll reshape a negative bi-
nomial density, as discussed above. The program EstimateNBSNP.m loads the MEPS
OBDV data and estimates the model, using a NB-I baseline density and a 2nd order
polynomial expansion. The output is:



OBDV

======================================================
BFGSMIN final results

Used numeric gradient
                              18.7. EXAMPLES                   399

------------------------------------------------------
STRONG CONVERGENCE
Function conv 1 Param conv 1 Gradient conv 1
------------------------------------------------------
Objective function value 2.17061
Stepsize 0.0065
24 iterations
------------------------------------------------------

 param     gradient change
  1.3826    0.0000 -0.0000
  0.2317   -0.0000  0.0000
  0.1839    0.0000  0.0000
  0.2214    0.0000 -0.0000
  0.1898    0.0000 -0.0000
  0.0722    0.0000 -0.0000
 -0.0002    0.0000 -0.0000
  1.7853   -0.0000 -0.0000
 -0.4358    0.0000 -0.0000
  0.1129    0.0000  0.0000


******************************************************
NegBin SNP model, MEPS full data set

MLE Estimation Results
BFGS convergence: Normal convergence

Average Log-L: -2.170614
Observations: 4564

              estimate       st. err        t-stat   p-value
constant        -0.147         0.126        -1.173     0.241
pub. ins.        0.695         0.050        13.936     0.000
priv. ins.       0.409         0.046         8.833     0.000
sex              0.443         0.034        13.148     0.000
age              0.016         0.001        11.880     0.000
edu              0.025         0.006         3.903     0.000
inc             -0.000         0.000        -0.011     0.991
gam1             1.785         0.141        12.629     0.000
gam2            -0.436         0.029       -14.786     0.000
lnalpha          0.113         0.027         4.166     0.000
                                    18.7. EXAMPLES                                 400

Information Criteria
CAIC : 19907.6244      Avg. CAIC:   4.3619
 BIC : 19897.6244       Avg. BIC:   4.3597
 AIC : 19833.3649       Avg. AIC:   4.3456
******************************************************


Note that the CAIC and BIC are lower for this model than for the models presented
in Table 3. This model fits well, still being parsimonious. You can play around trying
other use measures, using a NP-II baseline density, and using other orders of expan-
sions. Density functions formed in this way may have MANY local maxima, so you
need to be careful before accepting the results of a casual run. To guard against hav-
ing converged to a local maximum, one can try using multiple starting values, or one
could try simulated annealing as an optimization method. If you uncomment the rel-
evant lines in the program, you can use SA to do the minimization. This will take
a lot of time, compared to the default BFGS minimization. The chapter on parallel
computations might be interesting to read before trying this.
                                    CHAPTER 19


                         Simulation-based estimation

   Readings: In addition to the book mentioned previously, articles include Gallant
and Tauchen (1996), “Which Moments to Match?”, ECONOMETRIC THEORY, Vol.
12, 1996, pages 657-681;ă Gourieroux, Monfort and Renault (1993), “Indirect In-
ference,” J. Apl. Econometrics; Pakes and Pollard (1989) Econometrica; McFadden
(1989) Econometrica.


                                  19.1. Motivation

   Simulation methods are of interest when the DGP is fully characterized by a pa-
rameter vector, but the likelihood function is not calculable. If it were available, we
would simply estimate by MLE, which is asymptotically fully efficient.

   19.1.1. Example: Multinomial and/or dynamic discrete response models. Let
y∗i be a latent random vector of dimension m. Suppose that


                                     y∗i = Xi β + εi


where Xi is m × K. Suppose that


(19.1.1)                             εi ∼ N(0, Ω)


Henceforth drop the i subscript when it is not needed for clarity.

      • y∗ is not observed. Rather, we observe a many-to-one mapping


                                       y = τ(y∗ )
                                          401
                               19.1. MOTIVATION                                402

  This mapping is such that each element of y is either zero or one (in some
  cases only one element will be one).
• Define
                       Ai = A(yi ) = {y∗ |yi = τ(y∗ )}

  Suppose random sampling of (yi , Xi ). In this case the elements of yi may
  not be independent of one another (and clearly are not if Ω is not diagonal).
  However, yi is independent of y j , i 6= j.
• Let θ = (β0 , (vec∗ Ω)0 )0 be the vector of parameters of the model. The contri-
  bution of the ith observation to the likelihood function is
                                  Z
                       pi (θ) =            n(y∗i − Xi β, Ω)dy∗i
                                      Ai


  where
                                                                        
                                                  −1/2       −ε0 Ω−1 ε
              n(ε, Ω) = (2π)   −M/2
                                            |Ω|          exp
                                                                 2
  is the multivariate normal density of an M -dimensional random vector. The
  log-likelihood function is

                                     1 n
                           ln L (θ) = ∑ ln pi (θ)
                                     n i=1

  and the MLE θ̂ solves the score equations

                     1 n             1 n Dθ pi (θ̂)
                       ∑ i
                     n i=1
                           g ( θ̂) =   ∑ p (θ̂) ≡ 0.
                                     n i=1 i

• The problem is that evaluation of Li (θ) and its derivative w.r.t. θ by standard
  methods of numeric integration such as quadrature is computationally infea-
  sible when m (the dimension of y) is higher than 3 or 4 (as long as there are
  no restrictions on Ω).
                                19.1. MOTIVATION                             403

• The mapping τ(y∗ ) has not been made specific so far. This setup is quite
  general: for different choices of τ(y∗ ) it nests the case of dynamic binary
  discrete choice models as well as the case of multinomial discrete choice (the
  choice of one out of a finite set of alternatives).
    – Multinomial discrete choice is illustrated by a (very simple) job search
       model. We have cross sectional data on individuals’ matching to a set of
       m jobs that are available (one of which is unemployment). The utility of
       alternative j is
                                 u j = X jβ + ε j

       Utilities of jobs, stacked in the vector ui are not observed. Rather, we
       observe the vector formed of elements

                                                       
                      y j = 1 u j > uk , ∀k ∈ m, k 6= j


       Only one of these elements is different than zero.
    – Dynamic discrete choice is illustrated by repeated choices over time be-
       tween two alternatives. Let alternative j have utility


                              u jt = W jt β − ε jt ,

                                j ∈ {1, 2}

                                t ∈ {1, 2, ..., m}


       Then


                          y∗ = u 2 − u 1

                             = (W2 −W1 )β + ε2 − ε1

                             ≡ Xβ + ε
                                     19.1. MOTIVATION                                   404

              Now the mapping is (element-by-element)


                                     y = 1 [y∗ > 0] ,


              that is yit = 1 if individual i chooses the second alternative in period t,
              zero otherwise.




   19.1.2. Example: Marginalization of latent variables. Economic data often presents
substantial heterogeneity that may be difficult to model. A possibility is to introduce
latent random variables. This can cause the problem that there may be no known closed
form for the distribution of observable variables after marginalizing out the unobserv-
able latent variables. For example, count data (that takes values 0, 1, 2, 3, ...) is often
modeled using the Poisson distribution

                                               exp(−λ)λi
                                 Pr(y = i) =
                                                   i!

The mean and variance of the Poisson distribution are both equal to λ :


                                    E (y) = V (y) = λ.


Often, one parameterizes the conditional mean as


                                     λi = exp(Xi β).


This ensures that the mean is positive (as it must be). Estimation by ML is straightfor-
ward.
   Often, count data exhibits “overdispersion” which simply means that


                                      V (y) > E (y).
                                      19.1. MOTIVATION                                   405

If this is the case, a solution is to use the negative binomial distribution rather than the
Poisson. An alternative is to introduce a latent variable that reflects heterogeneity into
the specification:
                                    λi = exp(Xi β + ηi )

where ηi has some specified density with support S (this density may depend on addi-
tional parameters). Let dµ(ηi ) be the density of ηi . In some cases, the marginal density
of y
                              exp [− exp(Xiβ + ηi )] [exp(Xiβ + ηi )]yi
                           Z
              Pr(y = yi ) =                                             dµ(ηi )
                            S                  yi !
will have a closed-form solution (one can derive the negative binomial distribution in
the way if η has an exponential distribution), but often this will not be possible. In
this case, simulation is a means of calculating Pr(y = i), which is then used to do ML
estimation. This would be an example of the Simulated Maximum Likelihood (SML)
estimation.

       • In this case, since there is only one latent variable, quadrature is probably
         a better choice. However, a more flexible model with heterogeneity would
         allow all parameters (not just the constant) to vary. For example

                                  exp [− exp(Xi βi )] [exp(Xi βi )]yi
                                Z
                  Pr(y = yi ) =                                       dµ(βi )
                                S               yi !

         entails a K = dim βi -dimensional integral, which will not be evaluable by
         quadrature when K gets large.



    19.1.3. Estimation of models specified in terms of stochastic differential equa-
tions. It is often convenient to formulate models in terms of continuous time using
differential equations. A realistic model should account for exogenous shocks to the
system, which can be done by assuming a random component. This leads to a model
                                       19.1. MOTIVATION                                     406

that is expressed as a system of stochastic differential equations. Consider the process


                                dyt = g(θ, yt )dt + h(θ, yt )dWt


which is assumed to be stationary. {Wt } is a standard Brownian motion (Weiner pro-
cess), such that
                                           Z T
                                W (T ) =         dWt ∼ N(0, T )
                                            0

Brownian motion is a continuous-time stochastic process such that

       • W (0) = 0
       • [W (s) −W (t)] ∼ N(0, s − t)
       • [W (s) −W (t)] and [W ( j) −W (k)] are independent for s > t > j > k. That is,
          non-overlapping segments are independent.

One can think of Brownian motion the accumulation of independent normally dis-
tributed shocks with infinitesimal variance.

       • The function g(θ, yt ) is the deterministic part.
       • h(θ, yt ) determines the variance of the shocks.

To estimate a model of this sort, we typically have data that are assumed to be obser-
vations of yt in discrete points y1 , y2 , ...yT . That is, though yt is a continuous process it
is observed in discrete time.
    To perform inference on θ, direct ML or GMM estimation is not usually feasible,
because one cannot, in general, deduce the transition density f (yt |yt−1 , θ). This den-
sity is necessary to evaluate the likelihood function or to evaluate moment conditions
(which are based upon expectations with respect to this density).

       • A typical solution is to “discretize” the model, by which we mean to find
          a discrete time approximation to the model. The discretized version of the
                      19.2. SIMULATED MAXIMUM LIKELIHOOD (SML)                          407

         model is


                         yt − yt−1 = g(φ, yt−1 ) + h(φ, yt−1 )εt

                                εt ∼ N(0, 1)


         The discretization induces a new parameter, φ (that is, the φ0 which defines
         the best approximation of the discretization to the actual (unknown) discrete
         time version of the model is not equal to θ0 which is the true parameter value).
         This is an approximation, and as such “ML” estimation of φ (which is actu-
         ally quasi-maximum likelihood, QML) based upon this equation is in general
         biased and inconsistent for the original parameter, θ. Nevertheless, the ap-
         proximation shouldn’t be too bad, which will be useful, as we will see.
       • The important point about these three examples is that computational diffi-
         culties prevent direct application of ML, GMM, etc. Nevertheless the model
         is fully specified in probabilistic terms up to a parameter vector. This means
         that the model is simulable, conditional on the parameter vector.




                    19.2. Simulated maximum likelihood (SML)

    For simplicity, consider cross-sectional data. An ML estimator solves

                                              1 n
                       θ̂ML = arg max sn (θ) = ∑ ln p(yt |Xt , θ)
                                              n t=1

where p(yt |Xt , θ) is the density function of the t th observation. When p(yt |Xt , θ) does
not have a known closed form, θ̂ML is an infeasible estimator. However, it may be
possible to define a random function such that


                              Eν f (ν, yt , Xt , θ) = p(yt |Xt , θ)
                         19.2. SIMULATED MAXIMUM LIKELIHOOD (SML)                       408

where the density of ν is known. If this is the case, the simulator

                                                1 H
                              p̃ (yt , Xt , θ) = ∑ f (νts , yt , Xt , θ)
                                                H s=1

is unbiased for p(yt |Xt , θ).

       • The SML simply substitutes p̃ (yt , Xt , θ) in place of p(yt |Xt , θ) in the log-
          likelihood function, that is

                                                       1 n
                         θ̂SML = arg max sn (θ) =        ∑ ln p̃ (yt , Xt , θ)
                                                       n i=1

    19.2.1. Example: multinomial probit. Recall that the utility of alternative j is


                                          u j = X jβ + ε j


and the vector y is formed of elements

                                                                 
                                 y j = 1 u j > uk , k ∈ m, k 6= j


The problem is that Pr(y j = 1|θ) can’t be calculated when m is larger than 4 or 5.
However, it is easy to simulate this probability.

       • Draw ε̃i from the distribution N(0, Ω)
       • Calculate ũi = Xi β + ε̃i (where Xi is the matrix formed by stacking the Xi j )
                                                     
       • Define ỹi j = 1 ui j > uik , ∀k ∈ m, k 6= j
       • Repeat this H times and define

                                                  ∑H
                                                   h=1 ỹi jh
                                         πi j =
                                         e
                                                     H

                πi as the m-vector formed of the e
       • Define e                                πi j . Each element of e
                                                                        πi is between 0
          and 1, and the elements sum to one.
                                    πi
       • Now p̃ (yi , Xi , θ) = y0i e
                     19.2. SIMULATED MAXIMUM LIKELIHOOD (SML)                            409

      • The SML multinomial probit log-likelihood function is

                                        1 n 0
                           ln L (β, Ω) = ∑ yi ln p̃ (yi , Xi , θ)
                                        n i=1

This is to be maximized w.r.t. β and Ω.
   Notes:



      • The H draws of ε̃i are draw only once and are used repeatedly during the
        iterations used to find β̂ and Ω̂. The draws are different for each i. If the ε̃i are
        re-drawn at every iteration the estimator will not converge.
      • The log-likelihood function with this simulator is a discontinuous function of
        β and Ω. This does not cause problems from a theoretical point of view since
        it can be shown that ln L (β, Ω) is stochastically equicontinuous. However,
        it does cause problems if one attempts to use a gradient-based optimization
        method such as Newton-Raphson.
      • It may be the case, particularly if few simulations, H, are used, that some
                    πi are zero. If the corresponding element of yi is equal to 1, there
        elements of e
        will be a log(0) problem.
      • Solutions to discontinuity:
            – 1) use an estimation method that doesn’t require a continuous and dif-
              ferentiable objective function, for example, simulated annealing. This is
              computationally costly.
            – 2) Smooth the simulated probabilities so that they are continuous func-
              tions of the parameters. For example, apply a kernel transformation such
              as
                                                               
                                     m                       m
               ỹi j = Φ A × ui j − max uik + .5 × 1 ui j = max uik
                                      k=1                           k=1
                         19.2. SIMULATED MAXIMUM LIKELIHOOD (SML)                         410

                where A is a large positive number. This approximates a step function
                such that ỹi j is very close to zero if ui j is not the maximum, and ui j = 1
                if it is the maximum. This makes ỹi j a continuous function of β and Ω,
                so that p̃i j and therefore ln L (β, Ω) will be continuous and differentiable.
                                                  p
                Consistency requires that A(n) → ∞, so that the approximation to a step
                function becomes arbitrarily close as the sample size increases. There
                are alternative methods (e.g., Gibbs sampling) that may work better, but
                this is too technical to discuss here.
         • To solve to log(0) problem, one possibility is to search the web for the slog
           function. Also, increase H if this is a serious problem.



      19.2.2. Properties. The properties of the SML estimator depend on how H is set.
The following is taken from Lee (1995) “Asymptotic Bias in Simulated Maximum
Likelihood Estimation of Discrete Choice Models,” Econometric Theory, 11, pp. 437-
83.


      T HEOREM 32. [Lee] 1) if limn→∞ n1/2 /H = 0, then

                                √             d
                                 n θ̂SML − θ0 → N(0, I −1 (θ0 ))


      2) if limn→∞ n1/2 /H = λ, λ a finite constant, then

                                √             d
                                 n θ̂SML − θ0 → N(B, I −1 (θ0 ))


where B is a finite vector of constants.


         • This means that the SML estimator is asymptotically biased if H doesn’t grow
           faster than n1/2 .
                         19.3. METHOD OF SIMULATED MOMENTS (MSM)                       411

        • The varcov is the typical inverse of the information matrix, so that as long
           as H grows fast enough the estimator is consistent and fully asymptotically
           efficient.



                        19.3. Method of simulated moments (MSM)

   Suppose we have a DGP(y|x, θ) which is simulable given θ, but is such that the
density of y is not calculable.
   Once could, in principle, base a GMM estimator upon the moment conditions


                              mt (θ) = [K(yt , xt ) − k(xt , θ)] zt


where
                                           Z
                             k(xt , θ) =       K(yt , xt )p(y|xt , θ)dy,

zt is a vector of instruments in the information set and p(y|xt , θ) is the density of y
conditional on xt . The problem is that this density is not available.

        • However k(xt , θ) is readily simulated using

                                                     H
                                              1
                                  k (xt , θ) = ∑ K(e
                                  e                 yth , xt )
                                              H h=1

                                                  a.s.
        • By the law of large numbers, e
                                       k (xt , θ) → k (xt , θ) , as H → ∞, which provides
           a clear intuitive basis for the estimator, though in fact we obtain consistency
           even for H finite, since a law of large numbers is also operating across the
           n observations of real data, so errors introduced by simulation cancel them-
           selves out.
        • This allows us to form the moment conditions
                                      h                        i
(19.3.1)                      ft (θ) = K(yt , xt ) − e
                              m                      k (xt , θ) zt
                          19.3. METHOD OF SIMULATED MOMENTS (MSM)                      412

           where zt is drawn from the information set. As before, form

                             1 n
                      m(θ)
                      e    =   ∑m
                             n i=1
                                   ft (θ)
                                   "                           #
                             1 n               1 H
(19.3.2)                   =   ∑ K(yt , xt ) − H ∑ k(eyth, xt ) zt
                             n i=1               h=1

           with which we form the GMM criterion and estimate as usual. Note that the
                                yth , xt ) appears linearly within the sums.
           unbiased simulator k(e


   19.3.1. Properties. Suppose that the optimal weighting matrix is used. McFad-
den (ref. above) and Pakes and Pollard (refs. above) show that the asymptotic distri-
bution of the MSM estimator is very similar to that of the infeasible GMM estimator.
In particular, assuming that the optimal weighting matrix is used, and for H finite,
                                                          
                  √               d
                                   0         1           
                                                     −1 0 −1
(19.3.3)              n θ̂MSM − θ → N 0, 1 +     D∞ Ω D∞
                                             H
                      −1
where D∞ Ω−1 D0∞            is the asymptotic variance of the infeasible GMM estimator.

      • That is, the asymptotic variance is inflated by a factor 1 + 1/H. For this rea-
           son the MSM estimator is not fully asymptotically efficient relative to the
           infeasible GMM estimator, for H finite, but the efficiency loss is small and
           controllable, by setting H reasonably large.
      • The estimator is asymptotically unbiased even for H = 1. This is an advantage
           relative to SML.
      • If one doesn’t use the optimal weighting matrix, the asymptotic varcov is just
           the ordinary GMM varcov, inflated by 1 + 1/H.
      • The above presentation is in terms of a specific moment condition based upon
           the conditional mean. Simulated GMM can be applied to moment conditions
           of any form.
                        19.3. METHOD OF SIMULATED MOMENTS (MSM)                      413

    19.3.2. Comments. Why is SML inconsistent if H is finite, while MSM is? The
reason is that SML is based upon an average of logarithms of an unbiased simulator
(the densities of the observations). To use the multinomial probit model as an example,
the log-likelihood function is

                                              1 n 0
                              ln L (β, Ω) =     ∑ yi ln pi(β, Ω)
                                              n i=1

The SML version is
                                              1 n 0
                              ln L (β, Ω) =     ∑ yi ln p̃i(β, Ω)
                                              n i=1
The problem is that
                              E ln( p̃i (β, Ω)) 6= ln(E p̃i (β, Ω))

in spite of the fact that
                                    E p̃i (β, Ω) = pi (β, Ω)

due to the fact that ln(·) is a nonlinear transformation. The only way for the two to be
equal (in the limit) is if H tends to infinite so that p̃ (·) tends to p (·).
    The reason that MSM does not suffer from this problem is that in this case the
unbiased simulator appears linearly within every sum of terms, and it appears within
a sum over n (see equation [19.3.2]). Therefore the SLLN applies to cancel out sim-
ulation errors, from which we get consistency. That is, using simple notation for the
random sampling case, the moment conditions
                              "                            #
                        1 n               1 H
(19.3.4)    m̃(θ) =       ∑ K(yt , xt ) − H ∑ k(eyth , xt ) zt
                        n i=1               h=1
                              "                                      #
                        1 n                   1  H
(19.3.5)           =      ∑ k(xt , θ0) + εt − H ∑ [k(xt , θ) + ε̃ht ] zt
                        n i=1                   h=1
                        19.4. EFFICIENT METHOD OF MOMENTS (EMM)                      414

converge almost surely to
                                    Z                     
                        m̃∞ (θ) =       k(x, θ0 ) − k(x, θ) z(x)dµ(x).


(note: zt is assume to be made up of functions of xt ). The objective function converges
to
                                s∞ (θ) = m̃∞ (θ)0 Ω−1
                                                   ∞ m̃∞ (θ)

which obviously has a minimum at θ0 , henceforth consistency.

       • If you look at equation 19.3.5 a bit, you will see why the variance inflation
         factor is (1 + H1 ).




                     19.4. Efficient method of moments (EMM)

     The choice of which moments upon which to base a GMM estimator can have very
pronounced effects upon the efficiency of the estimator.

       • A poor choice of moment conditions may lead to very inefficient estimators,
         and can even cause identification problems (as we’ve seen with the GMM
         problem set).
       • The drawback of the above approach MSM is that the moment conditions
         used in estimation are selected arbitrarily. The asymptotic efficiency of the
         estimator may be low.
       • The asymptotically optimal choice of moments would be the score vector of
         the likelihood function,


                                    mt (θ) = Dθ ln pt (θ | It )


         As before, this choice is unavailable.
                        19.4. EFFICIENT METHOD OF MOMENTS (EMM)                                  415

The efficient method of moments (EMM) (see Gallant and Tauchen (1996), “Which
Moments to Match?”, ECONOMETRIC THEORY, Vol. 12, 1996, pages 657-681)
seeks to provide moment conditions that closely mimic the score vector. If the approx-
imation is very good, the resulting estimator will be very nearly fully efficient.
   The DGP is characterized by random sampling from the density


                                      p(yt |xt , θ0 ) ≡ pt (θ0 )


   We can define an auxiliary model, called the “score generator”, which simply pro-
vides a (misspecified) parametric density


                                        f (y|xt , λ) ≡ ft (λ)


      • This density is known up to a parameter λ. We assume that this density func-
           tion is calculable. Therefore quasi-ML estimation is possible. Specifically,

                                                 1 n
                            λ̂ = arg max sn (λ) = ∑ ln ft (λ).
                                      Λ          n t=1

      • After determining λ̂ we can calculate the score functions Dλ ln f (yt |xt , λ̂).
      • The important point is that even if the density is misspecified, there is a
           pseudo-true λ0 for which the true expectation, taken with respect to the true
           but unknown density of y, p(y|xt , θ0 ), and then marginalized over x is zero:

      0
                                 0
                                           Z Z
   ∃λ : EX EY |X Dλ ln f (y|x, λ ) =                  Dλ ln f (y|x, λ0 )p(y|x, θ0 )dydµ(x) = 0
                                             X Y |X

                                                                   p
      • We have seen in the section on QML that λ̂ → λ0 ; this suggests using the
           moment conditions

                                      1 n
                                                Z
(19.4.1)                  mn (θ, λ̂) = ∑            Dλ ln ft (λ̂)pt (θ)dy
                                      n t=1
                       19.4. EFFICIENT METHOD OF MOMENTS (EMM)                         416

      • These moment conditions are not calculable, since pt (θ) is not available, but
         they are simulable using

                                        1 n 1 H
                         fn (θ, λ̂) =
                         m                ∑     ∑
                                        n t=1 H h=1
                                                             yth |xt , λ̂)
                                                    Dλ ln f (e


         where ỹth is a draw from DGP(θ), holding xt fixed. By the LLN and the fact
         that λ̂ converges to λ0 ,


                                        e ∞ (θ0 , λ0 ) = 0.
                                        m


         This is not the case for other values of θ, assuming that λ0 is identified.
      • The advantage of this procedure is that if f (yt |xt , λ) closely approximates
         p(y|xt , θ), then m
                           e n (θ, λ̂) will closely approximate the optimal moment con-
         ditions which characterize maximum likelihood estimation, which is fully
         efficient.
      • If one has prior information that a certain density approximates the data well,
         it would be a good choice for f (·).
      • If one has no density in mind, there exist good ways of approximating un-
         known distributions parametrically: Philips’ ERA’s (Econometrica, 1983)
         and Gallant and Nychka’s (Econometrica, 1987) SNP density estimator which
         we saw before. Since the SNP density is consistent, the efficiency of the in-
         direct estimator is the same as the infeasible ML estimator.




   19.4.1. Optimal weighting matrix. I will present the theory for H finite, and
possibly small. This is done because it is sometimes impractical to estimate with H
very large. Gallant and Tauchen give the theory for the case of H so large that it may
be treated as infinite (the difference being irrelevant given the numerical precision of
                        19.4. EFFICIENT METHOD OF MOMENTS (EMM)                           417

a computer). The theory for the case of H infinite follows directly from the results
presented here.
                         e λ̂) depends on the pseudo-ML estimate λ̂. We can
    The moment condition m(θ,
apply Theorem 22 to conclude that

                      √        
                                  d                               
(19.4.2)               n λ̂ − λ0 → N 0, J (λ0 )−1 I (λ0 )J (λ0 )−1


If the density f (yt |xt , λ̂) were in fact the true density p(y|xt , θ), then λ̂ would be the
maximum likelihood estimator, and J (λ0 )−1 I (λ0 ) would be an identity matrix, due
to the information matrix equality. However, in the present case we assume that
f (yt |xt , λ̂) is only an approximation to p(y|xt , θ), so there is no cancellation.
                                    2            
                                      ∂
     Recall that J (λ0 ) ≡ p lim ∂λ∂λ    s
                                        0 n (λ 0 ) . Comparing the definition of s (λ) with
                                                                                      n

the definition of the moment condition in Equation 19.4.1, we see that


                                  J (λ0 ) = Dλ0 m(θ0 , λ0 ).


As in Theorem 22,
                                                        
                            0            ∂sn (λ) ∂sn (λ)
                        I (λ ) = lim E n                   .
                                 n→∞       ∂λ λ0 ∂λ0 λ0

In this case, this is simply the asymptotic variance covariance matrix of the moment
                                                                         √
conditions, Ω. Now take a first order Taylor’s series approximation to nmn (θ0 , λ̂)
about λ0 :


           √                √                 √                        
            nm̃n (θ0 , λ̂) = nm̃n (θ0 , λ0 ) + nDλ0 m̃(θ0 , λ0 ) λ̂ − λ0 + o p (1)
                     √
    First consider    nm̃n (θ0 , λ0 ). It is straightforward but somewhat tedious to show
that the asymptotic variance of this term is H1 I∞ (λ0 ).
                       19.4. EFFICIENT METHOD OF MOMENTS (EMM)                                    418

                                          √                                  
                                                                                                     a.s.
   Next consider the second term              nDλ0 m̃(θ0 , λ0 ) λ̂ − λ0 . Note that Dλ0 m̃n (θ0 , λ0 ) →
J (λ0 ), so we have

                 √                         √               
                  nDλ0 m̃(θ0 , λ0 ) λ̂ − λ0 = nJ (λ0 ) λ̂ − λ0 , a.s.


But noting equation 19.4.2

                             √                                             
                                      0                 0       a
                                 nJ (λ ) λ̂ − λ                 ∼ N 0, I (λ0)


Now, combining the results for the first and second terms,
                                                          
                        √       0      a          1       0
                         nm̃n (θ , λ̂) ∼ N 0, 1 +     I (λ )
                                                  H

Suppose that I[
              (λ0 ) is a consistent estimator of the asymptotic variance-covariance
matrix of the moment conditions. This may be complicated if the score generator is
a poor approximator, since the individual score contributions may not have mean zero
in this case (see the section on QML) . Even if this is the case, the individuals means
can be calculated by simulation, so it is always possible to consistently estimate I (λ 0 )
when the model is simulable. On the other hand, if the score generator is taken to
be correctly specified, the ordinary estimator of the information matrix is consistent.
Combining this with the result on the efficient GMM weighting matrix in Theorem 25,
we see that defining θ̂ as
                                                                         −1
                                                           1          [
                  θ̂ = arg min mn (θ, λ̂)      0
                                                        1+                0
                                                                      I (λ )    mn (θ, λ̂)
                             Θ                             H

is the GMM estimator with the efficient choice of weighting matrix.

       • If one has used the Gallant-Nychka ML estimator as the auxiliary model, the
         appropriate weighting matrix is simply the information matrix of the auxil-
         iary model, since the scores are uncorrelated. (e.g., it really is ML estimation
                         19.4. EFFICIENT METHOD OF MOMENTS (EMM)                              419

          asymptotically, since the score generator can approximate the unknown den-
          sity arbitrarily well).

   19.4.2. Asymptotic distribution. Since we use the optimal weighting matrix, the
asymptotic distribution is as in Equation 15.4.1, so we have (using the result in Equa-
tion 19.4.2):
                                                              
                                                    −1 !−1
                √           d             1
                  n θ̂ − θ0 → N 0, D∞ 1 +     I (λ0 )    D0∞  ,
                                           H

where
                                                            
                                 D∞ = lim E Dθ m0n (θ0 , λ0 ) .
                                              n→∞

This can be consistently estimated using


                                              D̂ = Dθ m0n (θ̂, λ̂)


   19.4.3. Diagnotic testing. The fact that
                                                           
                          √      0      a          1       0
                           nmn (θ , λ̂) ∼ N 0, 1 +     I (λ )
                                                   H

implies that
                                                              −1
                                                1                                  a
                     nmn (θ̂, λ̂)   0
                                             1+         I (λ̂)         mn (θ̂, λ̂) ∼ χ2 (q)
                                                H
where q is dim(λ) − dim(θ), since without dim(θ) moment conditions the model is
not identified, so testing is impossible. One test of the model is simply based on this
statistic: if it exceeds the χ2 (q) critical point, something may be wrong (the small
sample performance of this sort of test would be a topic worth investigating).

        • Information about what is wrong can be gotten from the pseudo-t-statistics:
                                                          1/2 !−1
                                           1                              √
                          diag          1+          I (λ̂)                    nmn (θ̂, λ̂)
                                           H
                                     19.5. EXAMPLES                                  420

         can be used to test which moments are not well modeled. Since these mo-
         ments are related to parameters of the score generator, which are usually re-
         lated to certain features of the model, this information can be used to revise
                                                                            √
         the model. These aren’t actually distributed as N(0, 1), since nmn (θ0 , λ̂)
              √                                                √
         and nmn (θ̂, λ̂) have different distributions (that of nmn (θ̂, λ̂) is somewhat
         more complicated). It can be shown that the pseudo-t statistics are biased
         toward nonrejection. See Gourieroux et. al. or Gallant and Long, 1995, for
         more details.



                                    19.5. Examples

   19.5.1. Estimation of stochastic differential equations. It is often convenient to
formulate theoretical models in terms of differential equations, and when the observa-
tion frequency is high (e.g., weekly, daily, hourly or real-time) it may be more natural
to adopt this framework for econometric models of time series.
   The most common approach to estimation of stochastic differential equations is to
“discretize” the model, as above, and estimate using the discretized version. However,
since the discretization is only an approximation to the true discrete-time version of
the model (which is not calculable), the resulting estimator is in general biased and
inconsistent.
   An alternative is to use indirect inference: The discretized model is used as the
score generator. That is, one estimates by QML to obtain the scores of the discretized
approximation:



                         yt − yt−1 = g(φ, yt−1 ) + h(φ, yt−1 )εt

                               εt ∼ N(0, 1)
                                      19.5. EXAMPLES                                  421

Indicate these scores by mn (θ, φ̂). Then the system of stochastic differential equations


                             dyt = g(θ, yt )dt + h(θ, yt )dWt


is simulated over θ, and the scores are calculated and averaged over the simulations

                                               1 N
                               m̃n (θ, φ̂) =     ∑ min(θ, φ̂)
                                               N i=1

θ̂ is chosen to set the simulated scores to zero


                                       m̃n (θ̂, φ̂) ≡ 0


(since θ and φ are of the same dimension).
    This method requires simulating the stochastic differential equation. There are
many ways of doing this. Basically, they involve doing very fine discretizations:


                           yt+τ = yt + g(θ, yt ) + h(θ, yt )ηt

                             ηt ∼ N(0, τ)


By setting τ very small, the sequence of ηt approximates a Brownian motion fairly
well.
    This is only one method of using indirect inference for estimation of differential
equations. There are others (see Gallant and Long, 1995 and Gourieroux et. al.).
Use of a series approximation to the transitional density as in Gallant and Long is
an interesting possibility since the score generator may have a higher dimensional
parameter than the model, which allows for diagnostic testing. In the method described
above the score generator’s parameter φ is of the same dimension as is θ, so diagnostic
testing is not possible.
                                             19.5. EXAMPLES                               422

        19.5.2. EMM estimation of a discrete choice model. In this section consider
     EMM estimation. There is a sophisticated package by Gallant and Tauchen for this,
     but here we’ll look at some simple, but hopefully didactic code. The file probitdgp.m
     generates data that follows the probit model. The file emm_moments.m defines EMM
     moment conditions, where the DGP and score generator can be passed as arguments.
     Thus, it is a general purpose moment condition for EMM estimation. This file is
     interesting enough to warrant some discussion. A listing appears in Listing 19.1. Line
     3 defines the DGP, and the arguments needed to evaluate it are defined in line 4. The
     score generator is defined in line 5, and its arguments are defined in line 6. The QML
     estimate of the parameter of the score generator is read in line 7. Note in line 10 how
     the random draws needed to simulate data are passed with the data, and are thus fixed
     during estimation, to avoid ”chattering”. The simulated data is generated in line 16,
     and the derivative of the score generator using the simulated data is calculated in line
     18. In line 20 we average the scores of the score generator, which are the moment
     conditions that the function returns.


 1   function scores = emm_moments(theta, data, momentargs)
 2     k = momentargs{1};
 3     dgp = momentargs{2}; # the data generating process (DGP)
 4     dgpargs = momentargs{3}; # its arguments (cell array)
 5     sg = momentargs{4}; # the score generator (SG)
 6     sgargs = momentargs{5}; # SG arguments (cell array)
 7     phi = momentargs{6}; # QML estimate of SG parameter
 8     y = data(:,1);
 9     x = data(:,2:k+1);
10     rand_draws = data(:,k+2:columns(data)); # passed with data to ensure
           fixed across iterations
                                         19.5. EXAMPLES                         423


11     n = rows(y);
12     scores = zeros(n,rows(phi)); # container for moment contributions
13     reps = columns(rand_draws); # how many simulations?
14     for i = 1:reps
15       e = rand_draws(:,i);
16       y = feval(dgp, theta, x, e, dgpargs); # simulated data
17       sgdata = [y x]; # simulated data for SG
18       scores = scores + numgradient(sg, {phi, sgdata, sgargs}); # gradient
              of SG
19     endfor
20     scores = scores / reps; # average over number of simulations
21   endfunction


                                         L ISTING 19.1

        The file emm_example.m performs EMM estimation of the probit model, using a
     logit model as the score generator. The results we obtain are


     Score generator results:
     =====================================================
     BFGSMIN final results

     Used analytic gradient

     ------------------------------------------------------
     STRONG CONVERGENCE
     Function conv 1 Param conv 1 Gradient conv 1
     ------------------------------------------------------
     Objective function value 0.281571
     Stepsize 0.0279
     15 iterations
     ------------------------------------------------------

      param        gradient   change
                                  19.5. EXAMPLES                               424

  1.8979        0.0000   0.0000
  1.6648       -0.0000   0.0000
  1.9125       -0.0000   0.0000
  1.8875       -0.0000   0.0000
  1.7433       -0.0000   0.0000

======================================================

Model results:
******************************************************
EMM example

GMM Estimation Results
BFGS convergence: Normal convergence

Objective function value: 0.000000
Observations: 1000

Exactly identified, no spec. test

      estimate     st. err      t-stat     p-value
p1       1.069       0.022      47.618       0.000
p2       0.935       0.022      42.240       0.000
p3       1.085       0.022      49.630       0.000
p4       1.080       0.022      49.047       0.000
p5       0.978       0.023      41.643       0.000
******************************************************


   It might be interesting to compare the standard errors with those obtained from
ML estimation, to check efficiency of the EMM estimator. One could even do a Monte
Carlo study.
                              19.5. EXAMPLES                               425

Exercises

 (1) Do SML estimation of the probit model.
 (2) Do a little Monte Carlo study to compare ML, SML and EMM estimation of
    the probit model. Investigate how the number of simulations affect the two
    simulation-based estimators.
                                     CHAPTER 20


                  Parallel programming for econometrics

   The following borrows heavily from Creel (2005).
   Parallel computing can offer an important reduction in the time to complete com-
putations. This is well-known, but it bears emphasis since it is the main reason that
parallel computing may be attractive to users. To illustrate, the Intel Pentium IV
(Willamette) processor, running at 1.5GHz, was introduced in November of 2000. The
Pentium IV (Northwood-HT) processor, running at 3.06GHz, was introduced in No-
vember of 2002. An approximate doubling of the performance of a commodity CPU
took place in two years. Extrapolating this admittedly rough snapshot of the evolution
of the performance of commodity processors, one would need to wait more than 6.6
years and then purchase a new computer to obtain a 10-fold improvement in compu-
tational performance. The examples in this chapter show that a 10-fold improvement
in performance can be achieved immediately, using distributed parallel computing on
available computers.
   Recent (this is written in 2005) developments that may make parallel computing at-
tractive to a broader spectrum of researchers who do computations. The first is the fact
that setting up a cluster of computers for distributed parallel computing is not difficult.
If you are using the ParallelKnoppix bootable CD that accompanies these notes, you
could create a cluster in less that 10 minutes, given a few easily satisfied conditions.
See the Tutorial, on the Desktop if you’re running the bootable CD, or available at the
preceeding link. The second development is the existence of extensions to some of



                                            426
                                  20.1. EXAMPLE PROBLEMS                                  427

the high-level matrix programming (HLMP) languages1 that allow the incorporation
of parallelism into programs written in these languages.
    Following are examples of parallel implementations of several mainstream prob-
lems in econometrics. A focus of the examples is on the possibility of hiding paral-
lelization from end users of programs. If programs that run in parallel have an interface
that is nearly identical to the interface of equivalent serial versions, end users will find
it easy to take advantage of parallel computing’s performance. We continue to use
Octave, taking advantage of the MPI Toolbox (MPITB) for Octave, by by Fernández
Baldomero et al. (2004). There are also parallel packages for Ox, R, and Python which
may be of interest to econometricians, but as of this writing, the following examples
are the most accessible introduction to parallel programming for econometricians.

                                20.1. Example problems

    This section introduces example problems from econometrics, and shows how they
can be parallelized in a natural way.

    20.1.1. Monte Carlo. A Monte Carlo study involves repeating a random exper-
iment many times under identical conditions. Several authors have noted that Monte
Carlo studies are obvious candidates for parallelization (Doornik et al. 2002; Bruche,
2003) since blocks of replications can be done independently on different computers.
To illustrate the parallelization of a Monte Carlo study, we use same trace test example
as do Doornik, et. al. (2002). tracetest.m is a function that calculates the trace test
statistic for the lack of cointegration of integrated time series. This function is illustra-
tive of the format that we adopt for Monte Carlo simulation of a function: it receives
a single argument of cell type, and it returns a row vector that holds the results of
1By ”high-level matrix programming language” I mean languages such as MATLAB (TM the Math-
works, Inc.), Ox (TM OxMetrics Technologies, Ltd.), and GNU Octave (www.octave.org), for exam-
ple.
                                 20.1. EXAMPLE PROBLEMS                                  428

one random simulation. The single argument in this case is a cell array that holds the
length of the series in its first position, and the number of series in the second position.
It generates a random result though a process that is internal to the function, and it
reports some output in a row vector (in this case the result is a scalar).
    mc_example1.m is an Octave script that executes a Monte Carlo study of the trace
test by repeatedly evaluating the tracetest.m function. The main thing to notice
about this script is that lines 7 and 10 call the function montecarlo.m. When called
with 3 arguments, as in line 7, montecarlo.m executes serially on the computer it is
called from. In line 10, there is a fourth argument. When called with four arguments,
the last argument is the number of slave hosts to use. We see that running the Monte
Carlo study on one or more processors is transparent to the user - he or she must only
indicate the number of slave computers to be used.

    20.1.2. ML. For a sample {(yt , xt )}n of n observations of a set of dependent and
explanatory variables, the maximum likelihood estimator of the parameter θ can be
defined as
                                    θ̂ = arg max sn (θ)

where
                                           1 n
                                sn (θ) =     ∑ ln f (yt |xt , θ)
                                           n t=1
Here, yt may be a vector of random variables, and the model may be dynamic since xt
may contain lags of yt . As Swann (2002) points out, this can be broken into sums over
blocks of observations, for example two blocks:
                        (                       !                               !)
                             n1                            n
                      1
             sn (θ) =
                      n      ∑ ln f (yt |xt , θ) +        ∑ ln f (yt |xt , θ)
                            t=1                         t=n1 +1

Analogously, we can define up to n blocks. Again following Swann, parallelization
can be done by calculating each block on separate computers.
                                20.1. EXAMPLE PROBLEMS                                429

    mle_example1.m is an Octave script that calculates the maximum likelihood esti-
mator of the parameter vector of a model that assumes that the dependent variable is
distributed as a Poisson random variable, conditional on some explanatory variables.
In lines 1-3 the data is read, the name of the density function is provided in the vari-
able model, and the initial value of the parameter vector is set. In line 5, the function
mle_estimate performs ordinary serial calculation of the ML estimator, while in line
7 the same function is called with 6 arguments. The fourth and fifth arguments are
empty placeholders where options to mle_estimate may be set, while the sixth argu-
ment is the number of slave computers to use for parallel execution, 1 in this case. A
person who runs the program sees no parallel programming code - the parallelization
is transparent to the end user, beyond having to select the number of slave computers.
When executed, this script prints out the estimates theta_s and theta_p, which are
identical.
    It is worth noting that a different likelihood function may be used by making the
model variable point to a different function. The likelihood function itself is an ordi-
nary Octave function that is not parallelized. The mle_estimate function is a generic
function that can call any likelihood function that has the appropriate input/output syn-
tax for evaluation either serially or in parallel. Users need only learn how to write the
likelihood function using the Octave language.




    20.1.3. GMM. For a sample as above, the GMM estimator of the parameter θ can
be defined as
                                   θ̂ ≡ arg min sn (θ)
                                            Θ

where
                                sn (θ) = mn (θ)0Wn mn (θ)
                               20.1. EXAMPLE PROBLEMS                                    430

and
                                          1 n
                               mn (θ) =     ∑ mt (yt |xt , θ)
                                          n t=1
Since mn (θ) is an average, it can obviously be computed blockwise, using for example
2 blocks:
                               (                   !                                !)
                                   n1                           n
                           1
(20.1.1)          mn (θ) =
                           n       ∑ mt (yt |xt , θ) +          ∑ mt (yt |xt , θ)
                                   t=1                     t=n1 +1

Likewise, we may define up to n blocks, each of which could potentially be computed
on a different machine.
      gmm_example1.m is a script that illustrates how GMM estimation may be done
serially or in parallel. When this is run, theta_s and theta_p are identical up to
the tolerance for convergence of the minimization routine. The point to notice here is
that an end user can perform the estimation in parallel in virtually the same way as it
is done serially. Again, gmm_estimate, used in lines 8 and 10, is a generic function
that will estimate any model specified by the moments variable - a different model
can be estimated by changing the value of the moments variable. The function that
moments points to is an ordinary Octave function that uses no parallel programming,
so users can write their models using the simple and intuitive HLMP syntax of Octave.
Whether estimation is done in parallel or serially depends only the seventh argument
to gmm_estimate - when it is missing or zero, estimation is by default done serially
with one processor. When it is positive, it specifies the number of slave nodes to use.
                                  20.1. EXAMPLE PROBLEMS                                  431

    20.1.4. Kernel regression. The Nadaraya-Watson kernel regression estimator of
a function g(x) at a point x is
                                          n
                                        ∑t=1 yt K [(x − xt ) /γn ]
                            ĝ(x) =        n
                                         ∑t=1 K [(x − xt ) /γn ]
                                         n
                                   ≡    ∑ wt yy
                                        t=1

We see that the weight depends upon every data point in the sample. To calculate the
fit at every point in a sample of size n, on the order of n2 k calculations must be done,
where k is the dimension of the vector of explanatory variables, x. Racine (2002)
demonstrates that MPI parallelization can be used to speed up calculation of the kernel
regression estimator by calculating the fits for portions of the sample on different com-
puters. We follow this implementation here. kernel_example1.m is a script for serial
and parallel kernel regression. Serial execution is obtained by setting the number of
slaves equal to zero, in line 15. In line 17, a single slave is specified, so execution is in
parallel on the master and slave nodes.
    The example programs show that parallelization may be mostly hidden from end
users. Users can benefit from parallelization without having to write or understand
parallel code. The speedups one can obtain are highly dependent upon the specific
problem at hand, as well as the size of the cluster, the efficiency of the network, etc.
Some examples of speedups are presented in Creel (2005). Figure 20.1.1 reproduces
speedups for some econometric problems on a cluster of 12 desktop computers. The
speedup for k nodes is the time to finish the problem on a single node divided by the
time to finish the problem on k nodes. Note that you can get 10X speedups, as claimed
in the introduction. It’s pretty obvious that much greater speedups could be obtained
using a larger cluster, for the ”embarrassingly parallel” problems.
                          20.1. EXAMPLE PROBLEMS               432


          F IGURE 20.1.1. Speedups from parallelization
11


10       MONTECARLO
          BOOTSTRAP
                MLE
 9             GMM
             KERNEL

 8


 7


 6


 5


 4


 3


 2


 1
     2                4            6           8     10   12
                                       nodes
                                       Bibliography

[1] Bruche, M. (2003) A note on embarassingly parallel computation using OpenMosix and Ox, work-
    ing paper, Financial Markets Group, London School of Economics.
[2] Creel, M. (2005) User-friendly parallel computations with econometric examples, Computational
    Economics, V. 26, pp. 107-128.
[3] Doornik, J.A., D.F. Hendry and N. Shephard (2002) Computationally-intensive econometrics us-
    ing a distributed matrix-programming language, Philosophical Transactions of the Royal Society
    of London, Series A, 360, 1245-1266.
[4] Fernández Baldomero, J. (2004) LAM/MPI parallel computing under GNU Octave,
    atc.ugr.es/javier-bin/mpitb.
[5] Racine, Jeff (2002) Parallel distributed kernel estimation, Computational Statistics & Data Anal-
    ysis, 40, 293-302.
[6] Swann, C.A. (2002) Maximum likelihood estimation using parallel computing: an introduction to
    MPI, Computational Economics, 19, 145-178.




                                                433
                                        CHAPTER 21


        Final project: econometric estimation of a RBC model

    THIS IS NOT FINISHED - IGNORE IT FOR NOW
    In this last chapter we’ll go through a worked example that combines a number
of the topics we’ve seen. We’ll do simulated method of moments estimation of a real
business cycle model, similar to what Valderrama (2002) does.


                                         21.1. Data

    We’ll develop a model for private consumption and real gross private investment.
The data are obtained from the US Bureau of Economic Analysis (BEA) National
Income and Product Accounts (NIPA), Table 11.1.5, Lines 2 and 6 (you can download
quarterly data from 1947-I to the present). The data we use are in the file rbc_data.m.
This data is real (constant dollars).
    The program plots.m will make a few plots, including Figures 21.1.1 though 21.1.3.
First looking at the plot for levels, we can see that real consumption and investment are
clearly nonstationary (surprise, surprise). There appears to be somewhat of a structural
change in the mid-1970’s.


                F IGURE 21.1.1. Consumption and Investment, Levels



                        Include/RBC/levels.eps not found!




                                            434
                                       21.1. DATA                                    435


            F IGURE 21.1.2. Consumption and Investment, Growth Rates



                       Include/RBC/growth.eps not found!




          F IGURE 21.1.3. Consumption and Investment, Bandpass Filtered



                       Include/RBC/filtered.eps not found!




Looking at growth rates, the series for consumption has an extended period of high
growth in the 1970’s, becoming more moderate in the 90’s. The volatility of growth of
consumption has declined somewhat, over time. Looking at investment, there are some
notable periods of high volatility in the mid-1970’s and early 1980’s, for example.
Since 1990 or so, volatility seems to have declined.
   Economic models for growth often imply that there is no long term growth (!) - the
data that the models generate is stationary and ergodic. Or, the data that the models
generate needs to be passed through the inverse of a filter. We’ll follow this, and
generate stationary business cycle data by applying the bandpass filter of Christiano
and Fitzgerald (1999). The filtered data is in Figure 21.1.3. We’ll try to specify an
economic model that can generate similar data. To get data that look like the levels for
consumption and investment, we’d need to apply the inverse of the bandpass filter.
                                   21.2. AN RBC MODEL                                             436

                                 21.2. An RBC Model

   Consider a very simple stochastic growth model (the same used by Maliar and
Maliar (2003), with minor notational difference):

                                   ∞ E0 ∑∞ βt U (ct )
                       max{ct ,kt }t=0   t=0

                                                                                 α
             ct + kt                  =                       (1 − δ) kt−1 + φt kt−1

              log φt                  =                       ρ log φt−1 + εt

                  εt                  ∼                       IIN(0, σ2ε )


Assume that the utility function is
                                                   1−γ
                                                  ct     −1
                                      U (ct ) =
                                                       1−γ

      • β is the discount rate
      • δ is the depreciation rate of capital
      • α is the elasticity of output with respect to capital
      • φ is a technology shock that is positive. φt is observed in period t.
      • γ is the coefficient of relative risk aversion. When γ = 1, the utility function
         is logarithmic.
      • gross investment, it , is the change in the capital stock:


                                  it = kt − (1 − δ) kt−1


      • we assume that the initial condition (k0 , θ0 ) is given.

                                                                             0
We would like to estimate the parameters θ = β, γ, δ, α, ρ, σ2ε                   using the data that
we have on consumption and investment. This problem is very similar to the GMM
estimation of the portfolio model discussed in Sections 15.11 and 15.12. Once can
                                21.3. A REDUCED FORM MODEL                                  437

derive the Euler condition in the same way we did there, and use it to define a GMM
estimator. That approach was not very successful, recall. Now we’ll try to use some
more informative moment conditions to see if we get better results.


                               21.3. A reduced form model

    Macroeconomic time series data are often modeled using vector autoregressions.
A vector autogression is just the vector version of an autoregressive model. Let yt be a
G-vector of jointly dependent variables. A VAR(p) model is


                       yt = c + A1 yt−1 + A2 yt−2 + ... + A p yt−p + vt


where c is a G-vector of parameters, and A j , j=1,2,...,p, are G × G matrices of parame-
ters. Let vt = Rt ηt , where ηt ∼ IIN(0, I2), and Rt is upper triangular. So V (vt |yt−1 , ...yt−p ) =
    0
Rt Rt . You can think of a VAR model as the reduced form of a dynamic linear simulta-
neous equations model where all of the variables are treated as endogenous. Clearly, if
all of the variables are endogenous, one would need some form of additional informa-
tion to identify a structural model. But we already have a structural model, and we’re
only going to use the VAR to help us estimate the parameters. A well-fitting reduced
form model will be adequate for the purpose.
    We’re seen that our data seems to have episodes where the variance of growth
rates and filtered data is non-constant. This brings us to the general area of stochastic
volatility. Without going into details, we’ll just consider the exponential GARCH
model of Nelson (1991) as presented in Hamilton (1994, pg. 668-669).
    Define ht = vec∗ (Rt ), the vector of elements in the upper triangle of Rt (in our case
this is a 3 × 1 vector). We assume that the elements follow

                                   n         p                  o
           log h jt = κ j + P( j,.) |vt−1 | − 2/π + ℵ( j,.) vt−1 + G( j,.) log ht−1
                              21.3. A REDUCED FORM MODEL                           438

The variance of the VAR error depends upon its own past, as well as upon the past
realizations of the shocks.




      • This is an EGARCH(1,1) specification. The obvious generalization is the
         EGARCH(r, m) specification, with longer lags (r for lags of v, m for lags of
         h).
      • The advantage of the EGARCH formulation is that the variance is assuredly
         positive without parameter restrictions
      • The matrix P has dimension 3 × 2.
      • The matrix G has dimension 3 × 3.
      • The matrix ℵ (reminder to self: this is an ”aleph”) has dimension 2 × 2.
      • The parameter matrix ℵ allows for leverage, so that positive and negative
         shocks can have asymmetric effects upon volatility.
      • We will probably want to restrict these parameter matrices in some way. For
         instance, G could plausibly be diagonal.




With the above specification, we have


                                  ηt ∼ IIN (0, I2 )

                                  ηt = Rt−1 vt


and we know how to calculate Rt and vt , given the data and the parameters. Thus,
it is straighforward to do estimation by maximum likelihood. This will be the score
generator.
                          21.5. SOLVING THE STRUCTURAL MODEL                                439

                        21.4. Results (I): The score generator

                          21.5. Solving the structural model

     The first order condition for the structural model is
                                                                         
                                                    1 − δ + αφt+1 ktα−1
                          −γ                  −γ
                         ct = βEt            ct+1


or
                              n      h                                io −1γ
                                                1 − δ + αφt+1 ktα−1
                                       −γ
                       ct =       βEt ct+1

The problem is that we cannot solve for ct since we do not know the solution for the
expectation in the previous equation.
     The parameterized expectations algorithm (PEA: den Haan and Marcet, 1990), is
a means of solving the problem. The expectations term is replaced by a parametric
function. As long as the parametric function is a flexible enough function of variables
that have been realized in period t, there exist parameter values that make the approx-
imation as close to the true expectation as is desired. We will write the approximation
              h                                i
                     1 − δ + αφt+1 ktα−1
               −γ
           Et ct+1                                  ≃ exp (ρ0 + ρ1 log φt + ρ2 log kt−1 )


For given values of the parameters of this approximating function, we can solve for ct ,
and then for kt using the restriction that

                                                           α
                              ct + kt = (1 − δ) kt−1 + φt kt−1


This allows us to generate a series {(ct , kt )}. Then the expectations approximation is
updated by fitting

                                   
           ct+1 1 − δ + αφt+1 ktα−1 = exp (ρ0 + ρ1 log φt + ρ2 log kt−1 ) + ηt
            −γ
                          21.5. SOLVING THE STRUCTURAL MODEL                            440

by nonlinear least squares. The 2 step procedure of generating data and updating the
parameters of the approximation to expectations is iterated until the parameters no
longer change. When this is the case, the expectations function is the best fit to the
generated data. As long it is a rich enough parametric model to encompass the true
expectations function, it can be made to be equal to the true expectations function by
using a long enough simulation.
                                                                              0
    Thus, given the parameters of the structural model, θ = β, γ, δ, α, ρ, σ2ε , we can
generate data {(ct , kt )} using the PEA. From this we can get the series {(ct , it )} using
it = kt − (1 − δ) kt−1 . This can be used to do EMM estimation using the scores of the
reduced form model to define moments, using the simulated data from the structural
model.
                                        Bibliography

[1] Creel. M (2005) A Note on Parallelizing the Parameterized Expectations Algorithm.
[2] den Haan, W. and Marcet, A. (1990) Solving the stochastic growth model by parameterized ex-
    pectations, Journal of Business and Economics Statistics, 8, 31-34.
[3] Hamilton, J. (1994) Time Series Analysis, Princeton Univ. Press
[4] Maliar, L. and Maliar, S. (2003) Matlab code for Solving a Neoclassical Growh Model with a Parametrized Expectations A
[5] Nelson, D. (1991) Conditional heteroscedasticity is asset returns: a new approach, Econometrica,
    59, 347-70.
[6] Valderrama, D. (2002) Statistical nonlinearities in the business cycle:        a challenge for
    the canonical RBC model, Economic Research, Federal Reserve Bank of San Francisco.
    http://ideas.repec.org/p/fip/fedfap/2002-13.html




                                                441
                                     CHAPTER 22


                             Introduction to Octave

   Why is Octave being used here, since it’s not that well-known by econometricians?
Well, because it is a high quality environment that is easily extensible, uses well-tested
and high performance numerical libraries, it is licensed under the GNU GPL, so you
can get it for free and modify it if you like, and it runs on both GNU/Linux, Mac OSX
and Windows systems. It’s also quite easy to learn.


                                 22.1. Getting started

   Get the bootable CD, as was described in Section 1.3. Then burn the image, and
boot your computer with it. This will give you this same PDF file, but with all of the
example programs ready to run. The editor is configure with a macro to execute the
programs using Octave, which is of course installed. From this point, I assume you
are running the CD (or sitting in the computer room across the hall from my office),
or that you have configured your computer to be able to run the *.m files mentioned
below.


                              22.2. A short introduction

   The objective of this introduction is to learn just the basics of Octave. There are
other ways to use Octave, which I encourage you to explore. These are just some
rudiments. After this, you can look at the example programs scattered throughout the
document (and edit them, and run them) to learn more about how Octave can be used
to do econometrics. Students of mine: your problem sets will include exercises that
                                           442
                              22.2. A SHORT INTRODUCTION                             443


                    F IGURE 22.2.1. Running an Octave program




can be done by modifying the example programs in relatively minor ways. So study
the examples!
   Octave can be used interactively, or it can be used to run programs that are written
using a text editor. We’ll use this second method, preparing programs with NEdit, and
calling Octave from within the editor. The program first.m gets us started. To run this,
open it up with NEdit (by finding the correct file inside the /home/knoppix/Desktop/Econometrics
folder and clicking on the icon) and then type CTRL-ALT-o, or use the Octave item in
the Shell menu (see Figure 22.2.1).
                    22.3. IF YOU’RE RUNNING A LINUX INSTALLATION...                  444

   Note that the output is not formatted in a pleasing way. That’s because printf()
doesn’t automatically start a new line. Edit first.m so that the 8th line reads ”printf(”hello
world\n”);” and re-run the program.
   We need to know how to load and save data. The program second.m shows how.
Once you have run this, you will find the file ”x” in the directory Econometrics/Include/OctaveIntro/
You might have a look at it with NEdit to see Octave’s default format for saving data.
Basically, if you have data in an ASCII text file, named for example ”myfile.data”,
formed of numbers separated by spaces, just use the command ”load myfile.data”.
After having done so, the matrix ”myfile” (without extension) will contain the data.
   Please have a look at CommonOperations.m for examples of how to do some basic
things in Octave. Now that we’re done with the basics, have a look at the Octave
programs that are included as examples. If you are looking at the browsable PDF
version of this document, then you should be able to click on links to open them.
If not, the example programs are available here and the support files needed to run
these are available here. Those pages will allow you to examine individual files, out of
context. To actually use these files (edit and run them), you should go to the home page
of this document, since you will probably want to download the pdf version together
with all the support files and examples. Or get the bootable CD.
   There are some other resources for doing econometrics with Octave. You might
like to check the article Econometrics with Octave and the Econometrics Toolbox ,
which is for Matlab, but much of which could be easily used with Octave.


                   22.3. If you’re running a Linux installation...

   Then to get the same behavior as found on the CD, you need to:

      • Get the collection of support programs and the examples, from the document
         home page.
             22.3. IF YOU’RE RUNNING A LINUX INSTALLATION...                445

• Put them somewhere, and tell Octave how to find them, e.g., by putting a link
  to the MyOctaveFiles directory in /usr/local/share/octave/site-m
• Make sure nedit is installed and configured to run Octave and use syntax
  highlighting. Copy the file /home/econometrics/.nedit from the CD to do
  this. Or, get the file NeditConfiguration and save it in your $HOME directory
  with the name ”.nedit”. Not to put too fine a point on it, please note that
  there is a period in that name.
• Associate *.m files with NEdit so that they open up in the editor when you
  click on them. That should do it.
                                    CHAPTER 23


                              Notation and Review

      • All vectors will be column vectors, unless they have a transpose symbol (or
         I forget to apply this rule - your help catching typos and er0rors is much
         appreciated). For example, if xt is a p × 1 vector, xt0 is a 1 × p vector. When I
         refer to a p-vector, I mean a column vector.




            23.1. Notation for differentiation of vectors and matrices

   [3, Chapter 1]
                                                                               ∂s(θ)
   Let s(·) : ℜ p → ℜ be a real valued function of the p-vector θ. Then         ∂θ is orga-

nized as a p-vector,                                      
                                               ∂s(θ)
                                              ∂θ1 
                                              ∂s(θ) 
                                   ∂s(θ)            
                                              ∂θ2 
                                         =           ..   
                                    ∂θ                .   
                                                          
                                                          
                                                   ∂s(θ)
                                                    ∂θ p
                                                               2
Following this convention, ∂s(θ)                       ∂ s(θ)
                            ∂θ0 is a 1 × p vector, and ∂θ∂θ0 is a p × p matrix. Also,
                                                                      
                       ∂2 s(θ)    ∂       ∂s(θ)         ∂          ∂s(θ)
                               =                      = 0                  .
                       ∂θ∂θ  0   ∂θ        ∂θ0         ∂θ           ∂θ

   E XERCISE 33. For a and x both p-vectors, show that ∂a∂xx = a.
                                                                        0




    Let f (θ):ℜ p → ℜn be a n-vector valued function of the p-vector θ. Let f (θ)0 be
                                               0
                                        ∂
the 1 × n valued transpose of f . Then ∂θ f (θ)0 = ∂θ∂ 0 f (θ).
                                             446
                              23.2. CONVERGENGE MODES                                 447

      • Product rule: Let f (θ):ℜ p → ℜn and h(θ):ℜ p → ℜn be n-vector valued func-
         tions of the p-vector θ. Then
                                                              
                        ∂      0          0    ∂       0    ∂
                           h(θ) f (θ) = h         f +f         h
                       ∂θ0                    ∂θ0          ∂θ0

         has dimension 1 × p. Applying the transposition rule we get
                                                       
                       ∂      0          ∂ 0          ∂ 0
                         h(θ) f (θ) =      f h+         h f
                      ∂θ                ∂θ           ∂θ
which has dimension p × 1.

   E XERCISE 34. For A a p × p matrix and x a p × 1 vector, show that ∂x∂xAx = A + A0 .
                                                                          0




      • Chain rule: Let f (·):ℜ p → ℜn a n-vector valued function of a p-vector ar-
         gument, and let g():ℜr → ℜ p be a p-vector valued function of an r-vector
         valued argument ρ. Then

                         ∂               ∂               ∂
                             f [g (ρ)] = 0 f (θ)             g(ρ)
                        ∂ρ 0            ∂θ       θ=g(ρ) ∂ρ
                                                           0


has dimension n × r.

   E XERCISE 35. For x and β both p × 1 vectors, show that ∂ exp(x β)0
                                                               ∂β     = exp(x0 β)x.

                             23.2. Convergenge modes

   Readings: [1, Chapter 4];[4, Chapter 4].
   We will consider several modes of convergence. The first three modes discussed
are simply for background. The stochastic modes are those which will be used later in
the course.

   D EFINITION 36. A sequence is a mapping from the natural numbers {1, 2, ...} =
{n}∞
   n=1 = {n} to some other set, so that the set is ordered according to the natural

numbers associated with its elements.
                                23.2. CONVERGENGE MODES                               448

    Real-valued sequences:

    D EFINITION 37. [Convergence] A real-valued sequence of vectors {a n } converges
to the vector a if for any ε > 0 there exists an integer Nε such that for all n > Nε , k
an − a k< ε . a is the limit of an , written an → a.

    Deterministic real-valued functions. Consider a sequence of functions { f n (ω)}
where
                                     fn : Ω → T ⊆ ℜ.

Ω may be an arbitrary set.

    D EFINITION 38. [Pointwise convergence] A sequence of functions { f n (ω)} con-
verges pointwise on Ω to the function f (ω) if for all ε > 0 and ω ∈ Ω there exists an
integer Nεω such that
                             | fn (ω) − f (ω)| < ε, ∀n > Nεω .

    It’s important to note that Nεω depends upon ω, so that converge may be much
more rapid for certain ω than for others. Uniform convergence requires a similar rate
of convergence throughout Ω.

    D EFINITION 39. [Uniform convergence] A sequence of functions { f n (ω)} con-
verges uniformly on Ω to the function f (ω) if for any ε > 0 there exists an integer N
such that
                             sup | fn (ω) − f (ω)| < ε, ∀n > N.
                             ω∈Ω

(insert a diagram here showing the envelope around f (ω) in which f n (ω) must lie)

    Stochastic sequences. In econometrics, we typically deal with stochastic sequences.
Given a probability space (Ω, F , P) , recall that a random variable maps the sample
space to the real line, i.e., X (ω) : Ω → ℜ. A sequence of random variables {Xn (ω)} is
                               23.2. CONVERGENGE MODES                                    449

a collection of such mappings, i.e., each Xn (ω) is a random variable with respect to the
probability space (Ω, F , P) . For example, given the model Y = X β0 + ε, the OLS es-
timator β̂n = (X 0 X )−1 X 0Y, where n is the sample size, can be used to form a sequence
of random vectors {β̂n }. A number of modes of convergence are in use when deal-
ing with sequences of random variables. Several such modes of convergence should
already be familiar:

   D EFINITION 40. [Convergence in probability] Let Xn (ω) be a sequence of random
variables, and let X (ω) be a random variable. Let An = {ω : |Xn (ω)−X (ω)| > ε}. Then
{Xn (ω)} converges in probability to X (ω) if


                                 lim P (An ) = 0, ∀ε > 0.
                                n→∞

                                                p
Convergence in probability is written as Xn → X , or plim Xn = X .

   D EFINITION 41. [Almost sure convergence] Let Xn (ω) be a sequence of random
variables, and let X (ω) be a random variable. Let A = {ω : limn→∞ Xn (ω) = X (ω)}.
Then {Xn (ω)} converges almost surely to X (ω) if


                                        P (A ) = 1.


In other words, Xn (ω) → X (ω) (ordinary convergence of the two functions) except on
                                                                                   a.s.
a set C = Ω − A such that P(C) = 0. Almost sure convergence is written as Xn → X ,
or Xn → X , a.s. One can show that

                                      a.s.            p
                                  Xn → X ⇒ Xn → X .


   D EFINITION 42. [Convergence in distribution] Let the r.v. Xn have distribution
function Fn and the r.v. Xn have distribution function F. If Fn → F at every continuity
point of F, then Xn converges in distribution to X .
                                       23.2. CONVERGENGE MODES                           450

                                                         d
Convergence in distribution is written as Xn → X . It can be shown that convergence in
probability implies convergence in distribution.

   Stochastic functions. Simple laws of large numbers (LLN’s) allow us to directly
                    a.s.
conclude that β̂n → β0 in the OLS example, since
                                                        −1         
                                              0X 0X              X 0ε
                                     β̂n = β +                          ,
                                                n                 n
            a.s.
and Xnε → 0 by a SLLN. Note that this term is not a function of the parameter β.
      0



This easy proof is a result of the linearity of the model, which allows us to express
the estimator in a way that separates parameters from random functions. In general,
this is not possible. We often deal with the more complicated situation where the
stochastic sequence depends on parameters in a manner that is not reducible to a simple
sequence of random variables. In this case, we have a sequence of random functions
that depend on θ: {Xn (ω, θ)}, where each Xn (ω, θ) is a random variable with respect to
a probability space (Ω, F , P) and the parameter θ belongs to a parameter space θ ∈ Θ.

   D EFINITION 43. [Uniform almost sure convergence] {Xn (ω, θ)} converges uni-
formly almost surely in Θ to X (ω, θ) if


                                lim sup |Xn (ω, θ) − X (ω, θ)| = 0, (a.s.)
                                n→∞ θ∈Θ


   Implicit is the assumption that all Xn (ω, θ) and X (ω, θ) are random variables w.r.t.
                                                                                u.a.s.
(Ω, F , P) for all θ ∈ Θ. We’ll indicate uniform almost sure convergence by → and
                                                  u.p.
uniform convergence in probability by → .

          • An equivalent definition, based on the fact that “almost sure” means “with
            probability one” is
                                                                           
                           Pr       lim sup |Xn (ω, θ) − X (ω, θ)| = 0 = 1
                                    n→∞ θ∈Θ
                23.3. RATES OF CONVERGENCE AND ASYMPTOTIC EQUALITY                        451

         This has a form similar to that of the definition of a.s. convergence - the
         essential difference is the addition of the sup.


                23.3. Rates of convergence and asymptotic equality

    It’s often useful to have notation for the relative magnitudes of quantities. Quanti-
ties that are small relative to others can often be ignored, which simplifies analysis.

    D EFINITION 44. [Little-o] Let f (n) and g(n) be two real-valued functions. The
                                                 f (n)
notation f (n) = o(g(n)) means limn→∞ g(n) = 0.

    D EFINITION 45. [Big-O] Let f (n) and g(n) be two real-valued functions. The
                                                                        f (n)
notation f (n) = O(g(n)) means there exists some N such that for n > N, g(n)  < K,
where K is a finite constant.

                                                 f (n)
    This definition doesn’t require that g(n) have a limit (it may fluctuate boundedly).
    If { fn } and {gn } are sequences of random variables analogous definitions are

                                                                f (n) p
    D EFINITION 46. The notation f (n) = o p (g(n)) means g(n) → 0.

                                                                                           
    E XAMPLE 47. The least squares estimator θ̂ = (X 0 X )−1 X 0Y = (X 0 X )−1 X 0 X θ0 + ε =
θ0 + (X 0 X )−1 X 0 ε. Since plim (X X)1 X ε = 0, we can write (X 0X )−1 X 0 ε = o p (1) and
                                      0   −1 0



θ̂ = θ0 + o p (1). Asymptotically, the term o p (1) is negligible. This is just a way of
indicating that the LS estimator is consistent.

    D EFINITION 48. The notation f (n) = O p (g(n)) means there exists some Nε such
that for ε > 0 and all n > Nε ,
                                                   
                                          f (n)
                                  P             < Kε > 1 − ε,
                                          g(n)

where Kε is a finite constant.
                   23.3. RATES OF CONVERGENCE AND ASYMPTOTIC EQUALITY                         452

    E XAMPLE 49. If Xn ∼ N(0, 1) then Xn = O p (1), since, given ε, there is always
some Kε such that P (|Xn | < Kε ) > 1 − ε.

    Useful rules:

        • O p (n p )O p (nq ) = O p (n p+q )
        • o p (n p )o p (nq ) = o p (n p+q )

    E XAMPLE 50. Consider a random sample of iid r.v.’s with mean 0 and variance
σ2 . The estimator of the mean θ̂ = 1/n ∑ni=1 xi is asymptotically normally distributed,
             A
e.g., n1/2 θ̂ ∼ N(0, σ2 ). So n1/2 θ̂ = O p (1), so θ̂ = O p (n−1/2 ). Before we had θ̂ = o p (1),
now we have have the stronger result that relates the rate of convergence to the sample
size.

    E XAMPLE 51. Now consider a random sample of iid r.v.’s with mean µ and vari-
ance σ2 . The estimator of the mean θ̂ = 1/n ∑ni=1 xi is asymptotically normally dis-
                           A                          
tributed, e.g., n1/2 θ̂ − µ ∼ N(0, σ2 ). So n1/2 θ̂ − µ = O p (1), so θ̂ − µ = O p (n−1/2 ),
so θ̂ = O p (1).

    These two examples show that averages of centered (mean zero) quantities typi-
cally have plim 0, while averages of uncentered quantities have finite nonzero plims.
Note that the definition of O p does not mean that f (n) and g(n) are of the same order.
Asymptotic equality ensures that this is the case.

    D EFINITION 52. Two sequences of random variables { f n } and {gn } are asymptot-
                              a
ically equal (written fn = gn ) if
                                                       
                                                f (n)
                                           plim             =1
                                                g(n)

    Finally, analogous almost sure versions of o p and O p are defined in the obvious
way.
                                        EXERCISES                                     453

Exercises
(1) For a and x both p × 1 vectors, show that ∂a∂xx = a.
                                                  0



(2) For A a p × p matrix and x a p × 1 vector, show that ∂x∂xAx = A + A0 .
                                                              0



(3) For x and β both p × 1 vectors, show that Dβ exp x0 β = exp(x0 β)x.
(4) For x and β both p × 1 vectors, find the analytic expression for D 2β exp x0 β.
(5) Write an Octave program that verifies each of the previous results by taking nu-
    meric derivatives. For a hint, type help numgradient and help numhessian
    inside octave.
                                     CHAPTER 24


                                      The GPL

   This document and the associated examples and materials are copyright Michael
Creel, under the terms of the GNU General Public License. This license follows:
   GNU GENERAL PUBLIC LICENSE Version 2, June 1991
   Copyright (C) 1989, 1991 Free Software Foundation, Inc. 59 Temple Place, Suite
330, Boston, MA 02111-1307 USA Everyone is permitted to copy and distribute ver-
batim copies of this license document, but changing it is not allowed.
   Preamble
   The licenses for most software are designed to take away your freedom to share and
change it. By contrast, the GNU General Public License is intended to guarantee your
freedom to share and change free software–to make sure the software is free for all its
users. This General Public License applies to most of the Free Software Foundation’s
software and to any other program whose authors commit to using it. (Some other Free
Software Foundation software is covered by the GNU Library General Public License
instead.) You can apply it to your programs, too.
   When we speak of free software, we are referring to freedom, not price. Our Gen-
eral Public Licenses are designed to make sure that you have the freedom to distribute
copies of free software (and charge for this service if you wish), that you receive source
code or can get it if you want it, that you can change the software or use pieces of it in
new free programs; and that you know you can do these things.




                                           454
                                       24. THE GPL                                        455

   To protect your rights, we need to make restrictions that forbid anyone to deny you
these rights or to ask you to surrender the rights. These restrictions translate to certain
responsibilities for you if you distribute copies of the software, or if you modify it.
   For example, if you distribute copies of such a program, whether gratis or for a fee,
you must give the recipients all the rights that you have. You must make sure that they,
too, receive or can get the source code. And you must show them these terms so they
know their rights.
   We protect your rights with two steps: (1) copyright the software, and (2) offer
you this license which gives you legal permission to copy, distribute and/or modify the
software.
   Also, for each author’s protection and ours, we want to make certain that everyone
understands that there is no warranty for this free software. If the software is modified
by someone else and passed on, we want its recipients to know that what they have
is not the original, so that any problems introduced by others will not reflect on the
original authors’ reputations.
   Finally, any free program is threatened constantly by software patents. We wish to
avoid the danger that redistributors of a free program will individually obtain patent
licenses, in effect making the program proprietary. To prevent this, we have made it
clear that any patent must be licensed for everyone’s free use or not licensed at all.
   The precise terms and conditions for copying, distribution and modification follow.
   GNU GENERAL PUBLIC LICENSE TERMS AND CONDITIONS FOR COPY-
ING, DISTRIBUTION AND MODIFICATION
   0. This License applies to any program or other work which contains a notice
placed by the copyright holder saying it may be distributed under the terms of this
General Public License. The "Program", below, refers to any such program or work,
and a "work based on the Program" means either the Program or any derivative work
                                       24. THE GPL                                    456

under copyright law: that is to say, a work containing the Program or a portion of it,
either verbatim or with modifications and/or translated into another language. (Here-
inafter, translation is included without limitation in the term "modification".) Each
licensee is addressed as "you".
   Activities other than copying, distribution and modification are not covered by this
License; they are outside its scope. The act of running the Program is not restricted,
and the output from the Program is covered only if its contents constitute a work based
on the Program (independent of having been made by running the Program). Whether
that is true depends on what the Program does.
   1. You may copy and distribute verbatim copies of the Program’s source code
as you receive it, in any medium, provided that you conspicuously and appropriately
publish on each copy an appropriate copyright notice and disclaimer of warranty; keep
intact all the notices that refer to this License and to the absence of any warranty; and
give any other recipients of the Program a copy of this License along with the Program.
   You may charge a fee for the physical act of transferring a copy, and you may at
your option offer warranty protection in exchange for a fee.
   2. You may modify your copy or copies of the Program or any portion of it, thus
forming a work based on the Program, and copy and distribute such modifications or
work under the terms of Section 1 above, provided that you also meet all of these
conditions:
   a) You must cause the modified files to carry prominent notices stating that you
changed the files and the date of any change.
   b) You must cause any work that you distribute or publish, that in whole or in part
contains or is derived from the Program or any part thereof, to be licensed as a whole
at no charge to all third parties under the terms of this License.
                                         24. THE GPL                                   457

   c) If the modified program normally reads commands interactively when run, you
must cause it, when started running for such interactive use in the most ordinary way,
to print or display an announcement including an appropriate copyright notice and a
notice that there is no warranty (or else, saying that you provide a warranty) and that
users may redistribute the program under these conditions, and telling the user how to
view a copy of this License. (Exception: if the Program itself is interactive but does not
normally print such an announcement, your work based on the Program is not required
to print an announcement.)
   These requirements apply to the modified work as a whole. If identifiable sections
of that work are not derived from the Program, and can be reasonably considered
independent and separate works in themselves, then this License, and its terms, do not
apply to those sections when you distribute them as separate works. But when you
distribute the same sections as part of a whole which is a work based on the Program,
the distribution of the whole must be on the terms of this License, whose permissions
for other licensees extend to the entire whole, and thus to each and every part regardless
of who wrote it.
   Thus, it is not the intent of this section to claim rights or contest your rights to
work written entirely by you; rather, the intent is to exercise the right to control the
distribution of derivative or collective works based on the Program.
   In addition, mere aggregation of another work not based on the Program with the
Program (or with a work based on the Program) on a volume of a storage or distribution
medium does not bring the other work under the scope of this License.
   3. You may copy and distribute the Program (or a work based on it, under Section
2) in object code or executable form under the terms of Sections 1 and 2 above provided
that you also do one of the following:
                                       24. THE GPL                                     458

   a) Accompany it with the complete corresponding machine-readable source code,
which must be distributed under the terms of Sections 1 and 2 above on a medium
customarily used for software interchange; or,
   b) Accompany it with a written offer, valid for at least three years, to give any third
party, for a charge no more than your cost of physically performing source distribution,
a complete machine-readable copy of the corresponding source code, to be distributed
under the terms of Sections 1 and 2 above on a medium customarily used for software
interchange; or,
   c) Accompany it with the information you received as to the offer to distribute
corresponding source code. (This alternative is allowed only for noncommercial dis-
tribution and only if you received the program in object code or executable form with
such an offer, in accord with Subsection b above.)
   The source code for a work means the preferred form of the work for making mod-
ifications to it. For an executable work, complete source code means all the source
code for all modules it contains, plus any associated interface definition files, plus the
scripts used to control compilation and installation of the executable. However, as a
special exception, the source code distributed need not include anything that is nor-
mally distributed (in either source or binary form) with the major components (com-
piler, kernel, and so on) of the operating system on which the executable runs, unless
that component itself accompanies the executable.
   If distribution of executable or object code is made by offering access to copy from
a designated place, then offering equivalent access to copy the source code from the
same place counts as distribution of the source code, even though third parties are not
compelled to copy the source along with the object code.
                                       24. THE GPL                                     459

   4. You may not copy, modify, sublicense, or distribute the Program except as
expressly provided under this License. Any attempt otherwise to copy, modify, sub-
license or distribute the Program is void, and will automatically terminate your rights
under this License. However, parties who have received copies, or rights, from you un-
der this License will not have their licenses terminated so long as such parties remain
in full compliance.
   5. You are not required to accept this License, since you have not signed it. How-
ever, nothing else grants you permission to modify or distribute the Program or its
derivative works. These actions are prohibited by law if you do not accept this Li-
cense. Therefore, by modifying or distributing the Program (or any work based on the
Program), you indicate your acceptance of this License to do so, and all its terms and
conditions for copying, distributing or modifying the Program or works based on it.
   6. Each time you redistribute the Program (or any work based on the Program), the
recipient automatically receives a license from the original licensor to copy, distribute
or modify the Program subject to these terms and conditions. You may not impose any
further restrictions on the recipients’ exercise of the rights granted herein. You are not
responsible for enforcing compliance by third parties to this License.
   7. If, as a consequence of a court judgment or allegation of patent infringement
or for any other reason (not limited to patent issues), conditions are imposed on you
(whether by court order, agreement or otherwise) that contradict the conditions of this
License, they do not excuse you from the conditions of this License. If you cannot
distribute so as to satisfy simultaneously your obligations under this License and any
other pertinent obligations, then as a consequence you may not distribute the Program
at all. For example, if a patent license would not permit royalty-free redistribution of
the Program by all those who receive copies directly or indirectly through you, then
                                       24. THE GPL                                     460

the only way you could satisfy both it and this License would be to refrain entirely
from distribution of the Program.
   If any portion of this section is held invalid or unenforceable under any particular
circumstance, the balance of the section is intended to apply and the section as a whole
is intended to apply in other circumstances.
   It is not the purpose of this section to induce you to infringe any patents or other
property right claims or to contest validity of any such claims; this section has the sole
purpose of protecting the integrity of the free software distribution system, which is
implemented by public license practices. Many people have made generous contri-
butions to the wide range of software distributed through that system in reliance on
consistent application of that system; it is up to the author/donor to decide if he or she
is willing to distribute software through any other system and a licensee cannot impose
that choice.
   This section is intended to make thoroughly clear what is believed to be a conse-
quence of the rest of this License. 8. If the distribution and/or use of the Program is
restricted in certain countries either by patents or by copyrighted interfaces, the orig-
inal copyright holder who places the Program under this License may add an explicit
geographical distribution limitation excluding those countries, so that distribution is
permitted only in or among countries not thus excluded. In such case, this License
incorporates the limitation as if written in the body of this License.
   9. The Free Software Foundation may publish revised and/or new versions of the
General Public License from time to time. Such new versions will be similar in spirit
to the present version, but may differ in detail to address new problems or concerns.
   Each version is given a distinguishing version number. If the Program specifies a
version number of this License which applies to it and "any later version", you have
the option of following the terms and conditions either of that version or of any later
                                     24. THE GPL                                  461

version published by the Free Software Foundation. If the Program does not specify
a version number of this License, you may choose any version ever published by the
Free Software Foundation.
   10. If you wish to incorporate parts of the Program into other free programs whose
distribution conditions are different, write to the author to ask for permission. For
software which is copyrighted by the Free Software Foundation, write to the Free
Software Foundation; we sometimes make exceptions for this. Our decision will be
guided by the two goals of preserving the free status of all derivatives of our free
software and of promoting the sharing and reuse of software generally.
   NO WARRANTY
   11. BECAUSE THE PROGRAM IS LICENSED FREE OF CHARGE, THERE
IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE
COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM
"AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IM-
PLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE EN-
TIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME
THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
   12. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED
TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY
WHO MAY MODIFY AND/OR REDISTRIBUTE THE PROGRAM AS PERMIT-
TED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GEN-
ERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING
OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT
                                       24. THE GPL                                     462

NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE
OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE
PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH
HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.
   END OF TERMS AND CONDITIONS
   How to Apply These Terms to Your New Programs
   If you develop a new program, and you want it to be of the greatest possible use to
the public, the best way to achieve this is to make it free software which everyone can
redistribute and change under these terms.
   To do so, attach the following notices to the program. It is safest to attach them to
the start of each source file to most effectively convey the exclusion of warranty; and
each file should have at least the "copyright" line and a pointer to where the full notice
is found.
   <one line to give the program’s name and a brief idea of what it does.> Copyright
(C) 19yy <name of author>
   This program is free software; you can redistribute it and/or modify it under the
terms of the GNU General Public License as published by the Free Software Founda-
tion; either version 2 of the License, or (at your option) any later version.
   This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FIT-
NESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
more details.
   You should have received a copy of the GNU General Public License along with
this program; if not, write to the Free Software Foundation, Inc., 59 Temple Place,
Suite 330, Boston, MA 02111-1307 USA
                                        24. THE GPL                                      463

    Also add information on how to contact you by electronic and paper mail.
    If the program is interactive, make it output a short notice like this when it starts in
an interactive mode:
    Gnomovision version 69, Copyright (C) 19yy name of author Gnomovision comes
with ABSOLUTELY NO WARRANTY; for details type ‘show w’. This is free soft-
ware, and you are welcome to redistribute it under certain conditions; type ‘show c’
for details.
    The hypothetical commands ‘show w’ and ‘show c’ should show the appropriate
parts of the General Public License. Of course, the commands you use may be called
something other than ‘show w’ and ‘show c’; they could even be mouse-clicks or menu
items–whatever suits your program.
    You should also get your employer (if you work as a programmer) or your school,
if any, to sign a "copyright disclaimer" for the program, if necessary. Here is a sample;
alter the names:
    Yoyodyne, Inc., hereby disclaims all copyright interest in the program ‘Gnomovi-
sion’ (which makes passes at compilers) written by James Hacker.
    <signature of Ty Coon>, 1 April 1989 Ty Coon, President of Vice
    This General Public License does not permit incorporating your program into pro-
prietary programs. If your program is a subroutine library, you may consider it more
useful to permit linking proprietary applications with the library. If this is what you
want to do, use the GNU Library General Public License instead of this License.
                                     CHAPTER 25


                                       The attic

    This holds material that is not really ready to be incorporated into the main body,
but that I don’t want to lose. Basically, ignore it, unless you’d like to help get it ready
for inclusion.


                                  25.1. Hurdle models

    Returning to the Poisson model, lets look at actual and fitted count probabilities.
Actual relative frequencies are f (y = j) = ∑i 1(yi = j)/n and fitted frequencies are
fˆ(y = j) = ∑ni=1 fY ( j|xi , θ̂)/n We see that for the OBDV measure, there are many

                    TABLE 1. Actual and Poisson fitted frequencies

                        Count     OBDV           ERV
                        Count Actual Fitted Actual Fitted
                          0    0.32   0.06   0.86   0.83
                          1    0.18   0.15   0.10   0.14
                          2    0.11   0.19   0.02   0.02
                          3    0.10   0.18 0.004 0.002
                          4   0.052 0.15 0.002 0.0002
                          5   0.032 0.10      0    2.4e-5


more actual zeros than predicted. For ERV, there are somewhat more actual zeros than
fitted, but the difference is not too important.
    Why might OBDV not fit the zeros well? What if people made the decision to
contact the doctor for a first visit, they are sick, then the doctor decides on whether or
not follow-up visits are needed. This is a principal/agent type situation, where the total
number of visits depends upon the decision of both the patient and the doctor. Since
                                            464
                                  25.1. HURDLE MODELS                                  465

different parameters may govern the two decision-makers choices, we might expect
that different parameters govern the probability of zeros versus the other counts. Let
λ p be the parameters of the patient’s demand for visits, and let λd be the paramter of
the doctor’s “demand” for visits. The patient will initiate visits according to a discrete
choice model, for example, a logit model:



                  Pr(Y = 0) = fY (0, λ p ) = 1 − 1/ [1 + exp(−λ p )]

                  Pr(Y > 0)          =           1/ [1 + exp(−λ p )] ,


The above probabilities are used to estimate the binary 0/1 hurdle process. Then, for
the observations where visits are positive, a truncated Poisson density is estimated.
This density is

                                                  fY (y, λd )
                          fY (y, λd |y > 0) =
                                                 Pr(y > 0)
                                                    fY (y, λd )
                                             =
                                                 1 − exp(−λd )

since according to the Poisson model with the doctor’s paramaters,

                                             exp(−λd )λ0d
                               Pr(y = 0) =                .
                                                 0!

Since the hurdle and truncated components of the overall density for Y share no pa-
rameters, they may be estimated separately, which is computationally more efficient
than estimating the overall model. (Recall that the BFGS algorithm, for example, will
have to invert the approximated Hessian. The computational overhead is of order K 2
                                25.1. HURDLE MODELS                              466

where K is the number of parameters to be estimated) . The expectation of Y is


                 E(Y |x) = Pr(Y > 0|x)E(Y |Y > 0, x)
                                                          
                                   1                 λd
                         =
                             1 + exp(−λ p )    1 − exp(−λd )
                            25.1. HURDLE MODELS                               467

Here are hurdle Poisson estimation results for OBDV, obtained from this estimation program
**************************************************************************
MEPS data, OBDV
logit results
Strong convergence
Observations = 500
Function value           -0.58939
t-Stats
                         params          t(OPG)        t(Sand.)           t(Hess)
constant               -1.5502          -2.5709         -2.5269         -2.5560
pub_ins                  1.0519          3.0520          3.0027           3.0384
priv_ins               0.45867           1.7289          1.6924           1.7166
sex                    0.63570           3.0873          3.1677           3.1366
age                   0.018614           2.1547          2.1969           2.1807
educ                  0.039606           1.0467         0.98710           1.0222
inc                   0.077446           1.7655          2.1672           1.9601
Information Criteria
Consistent Akaike
         639.89
Schwartz
         632.89
Hannan-Quinn
         614.96
Akaike
         603.39
**************************************************************************
                              25.1. HURDLE MODELS                   468

The results for the truncated part:
**************************************************************************
MEPS data, OBDV
tpoisson results
Strong convergence
Observations = 500
Function value              -2.7042
t-Stats
                          params          t(OPG)    t(Sand.)    t(Hess)
constant                 0.54254          7.4291      1.1747    3.2323
pub_ins                  0.31001          6.5708      1.7573    3.7183
priv_ins                0.014382         0.29433    0.10438    0.18112
sex                      0.19075          10.293      1.1890    3.6942
age                     0.016683          16.148      3.5262    7.9814
educ                    0.016286          4.2144     0.56547    1.6353
inc                  -0.0079016          -2.3186    -0.35309   -0.96078
Information Criteria
Consistent Akaike
         2754.7
Schwartz
         2747.7
Hannan-Quinn
         2729.8
Akaike
         2718.2
**************************************************************************
                                 25.1. HURDLE MODELS                                 469

   Fitted and actual probabilites (NB-II fits are provided as well) are:
               TABLE 2. Actual and Hurdle Poisson fitted frequencies

    Count             OBDV                           ERV
    Count Actual Fitted HP Fitted NB-II Actual Fitted HP Fitted NB-II
      0    0.32     0.32        0.34     0.86     0.86        0.86
      1    0.18    0.035        0.16     0.10     0.10        0.10
      2    0.11    0.071        0.11     0.02     0.02        0.02
      3    0.10     0.10        0.08    0.004    0.006       0.006
      4   0.052     0.11        0.06    0.002    0.002       0.002
      5   0.032     0.10        0.05      0     0.0005       0.001


   For the Hurdle Poisson models, the ERV fit is very accurate. The OBDV fit is not
so good. Zeros are exact, but 1’s and 2’s are underestimated, and higher counts are
overestimated. For the NB-II fits, performance is at least as good as the hurdle Poisson
model, and one should recall that many fewer parameters are used. Hurdle version of
the negative binomial model are also widely used.

   25.1.1. Finite mixture models. The following are results for a mixture of 2 neg-
ative binomial (NB-I) models, for the OBDV data, which you can replicate using
this estimation program
                        25.1. HURDLE MODELS                   470

**************************************************************************
MEPS data, OBDV
mixnegbin results
Strong convergence
Observations = 500
Function value       -2.2312
t-Stats
                      params        t(OPG)    t(Sand.)    t(Hess)
constant             0.64852        1.3851      1.3226    1.4358
pub_ins           -0.062139      -0.23188     -0.13802   -0.18729
priv_ins            0.093396       0.46948     0.33046   0.40854
sex                  0.39785        2.6121      2.2148    2.4882
age                 0.015969        2.5173      2.5475    2.7151
educ              -0.049175        -1.8013     -1.7061   -1.8036
inc                 0.015880       0.58386     0.76782   0.73281
ln_alpha             0.69961        2.3456      2.0396    2.4029
constant             -3.6130       -1.6126     -1.7365   -1.8411
pub_ins               2.3456        1.7527      3.7677    2.6519
priv_ins             0.77431       0.73854      1.1366   0.97338
sex                  0.34886       0.80035     0.74016   0.81892
age                 0.021425        1.1354      1.3032    1.3387
educ                 0.22461        2.0922      1.7826    2.1470
inc                 0.019227       0.20453     0.40854   0.36313
ln_alpha              2.8419        6.2497      6.8702    7.6182
logit_inv_mix        0.85186        1.7096      1.4827    1.7883
Information Criteria
                                  25.1. HURDLE MODELS                                   471

   Consistent Akaike
            2353.8
   Schwartz
            2336.8
   Hannan-Quinn
            2293.3
   Akaike
            2265.2
   **************************************************************************
   Delta method for mix parameter st.               err.
                 mix          se_mix
           0.70096           0.12043

      • The 95% confidence interval for the mix parameter is perilously close to 1,
         which suggests that there may really be only one component density, rather
         than a mixture. Again, this is not the way to test this - it is merely suggestive.
      • Education is interesting. For the subpopulation that is “healthy”, i.e., that
         makes relatively few visits, education seems to have a positive effect on visits.
         For the “unhealthy” group, education has a negative effect on visits. The other
         results are more mixed. A larger sample could help clarify things.

The following are results for a 2 component constrained mixture negative binomial
model where all the slope parameters in λ j = exβ j are the same across the two compo-
nents. The constants and the overdispersion parameters α j are allowed to differ for the
two components.
                        25.1. HURDLE MODELS                   472

**************************************************************************
MEPS data, OBDV
cmixnegbin results
Strong convergence
Observations = 500
Function value       -2.2441
t-Stats
                      params        t(OPG)    t(Sand.)    t(Hess)
constant            -0.34153     -0.94203     -0.91456   -0.97943
pub_ins              0.45320        2.6206      2.5088    2.7067
priv_ins             0.20663        1.4258      1.3105    1.3895
sex                  0.37714        3.1948      3.4929    3.5319
age                 0.015822        3.1212      3.7806    3.7042
educ                0.011784       0.65887     0.50362   0.58331
inc                 0.014088       0.69088     0.96831   0.83408
ln_alpha              1.1798        4.6140      7.2462    6.4293
const_2               1.2621       0.47525      2.5219    1.5060
lnalpha_2             2.7769        1.5539      6.4918    4.2243
logit_inv_mix        2.4888        0.60073      3.7224    1.9693


Information Criteria
Consistent Akaike
       2323.5
Schwartz
       2312.5
Hannan-Quinn
                            25.2. MODELS FOR TIME SERIES DATA                            473

             2284.3
    Akaike
             2266.1
    **************************************************************************
    Delta method for mix parameter st.               err.
                  mix          se_mix
            0.92335         0.047318

       • Now the mixture parameter is even closer to 1.
       • The slope parameter estimates are pretty close to what we got with the NB-I
         model.

                           25.2. Models for time series data

    This section can be ignored in its present form. Just left in to form a basis for
completion (by someone else ?!) at some point.
    Hamilton, Time Series Analysis is a good reference for this section. This is very
incomplete and contributions would be very welcome.
    Up to now we’ve considered the behavior of the dependent variable yt as a function
of other variables xt . These variables can of course contain lagged dependent variables,
e.g., xt = (wt , yt−1 , ..., yt− j ). Pure time series methods consider the behavior of yt as
a function only of its own lagged values, unconditional on other observable variables.
One can think of this as modeling the behavior of yt after marginalizing out all other
variables. While it’s not immediately clear why a model that has other explanatory
variables should marginalize to a linear in the parameters time series model, most time
series work is done with linear models, though nonlinear time series is also a large and
growing field. We’ll stick with linear time series models.

    25.2.1. Basic concepts.
                            25.2. MODELS FOR TIME SERIES DATA                          474

     D EFINITION 53 (Stochastic process). A stochastic process is a sequence of random
variables, indexed by time:

                                                 ∞
(25.2.1)                                    {Yt }t=−∞


     D EFINITION 54 (Time series). A time series is one observation of a stochastic
process, over a specific interval:

                                                 n
(25.2.2)                                    {yt }t=1


     So a time series is a sample of size n from a stochastic process. It’s important to
keep in mind that conceptually, one could draw another sample, and that the values
would be different.



     D EFINITION 55 (Autocovariance). The jth autocovariance of a stochastic process
is


(25.2.3)                      γ jt = E (yt − µt )(yt− j − µt− j )


where µt = E (yt ) .



     D EFINITION 56 (Covariance (weak) stationarity). A stochastic process is covari-
ance stationary if it has time constant mean and autocovariances of all orders:


                                       µt     = µ, ∀t

                                      γ jt = γ j , ∀t


     As we’ve seen, this implies that γ j = γ− j : the autocovariances depend only one the
interval between observations, but not the time of the observations.
                           25.2. MODELS FOR TIME SERIES DATA                          475

    D EFINITION 57 (Strong stationarity). A stochastic process is strongly stationary if
the joint distribution of an arbitrary collection of the {Yt } doesn’t depend on t.

    Since moments are determined by the distribution, strong stationarity⇒weak sta-
tionarity.
    What is the mean of Yt ? The time series is one sample from the stochastic process.
One could think of M repeated samples from the stoch. proc., e.g., {ytm } By a LLN,
we would expect that
                                    1 M       p
                                 lim
                                M→∞ M
                                      ∑   ytm → E (Yt )
                                      m=1
The problem is, we have only one sample to work with, since we can’t go back in time
and collect another. How can E (Yt ) be estimated then? It turns out that ergodicity is
the needed property.

    D EFINITION 58 (Ergodicity). A stationary stochastic process is ergodic (for the
mean) if the time average converges to the mean

                                       1 n    p
(25.2.4)                                 ∑ yt → µ
                                       n t=1

    A sufficient condition for ergodicity is that the autocovariances be absolutely sum-
mable:
                                        ∞
                                       ∑ |γ j | < ∞
                                       j=0

This implies that the autocovariances die off, so that the yt are not so strongly depen-
dent that they don’t satisfy a LLN.

    D EFINITION 59 (Autocorrelation). The jth autocorrelation, ρ j is just the jth auto-
covariance divided by the variance:

                                                γj
(25.2.5)                                 ρj =
                                                γ0
                              25.2. MODELS FOR TIME SERIES DATA                                476

    D EFINITION 60 (White noise). White noise is just the time series literature term
for a classical error. εt is white noise if i) E (εt ) = 0, ∀t, ii) V (εt ) = σ2 , ∀t, and iii) εt
and εs are independent, t 6= s. Gaussian white noise just adds a normality assumption.




    25.2.2. ARMA models. With these concepts, we can discuss ARMA models.
These are closely related to the AR and MA error processes that we’ve already dis-
cussed. The main difference is that the lhs variable is observed directly now.
    MA(q) processes. A qth order moving average (MA) process is


                         yt = µ + εt + θ1 εt−1 + θ2 εt−2 + · · · + θq εt−q


where εt is white noise. The variance is


                    γ0                     = E (yt − µ)2
                                                                         2
                          = E εt + θ1 εt−1 + θ2 εt−2 + · · · + θq εt−q
                                                                     
                                  = σ2 1 + θ21 + θ22 + · · · + θ2q


Similarly, the autocovariances are


                   γ j = θ j + θ j+1 θ1 + θ j+2 θ2 + · · · + θq θq− j , j ≤ q

                         = 0, j > q


Therefore an MA(q) process is necessarily covariance stationary and ergodic, as long
as σ2 and all of the θ j are finite.
    AR(p) processes. An AR(p) process can be represented as


                         yt = c + φ1 yt−1 + φ2 yt−2 + · · · + φ p yt−p + εt
                                25.2. MODELS FOR TIME SERIES DATA                        477

The dynamic behavior of an AR(p) process can be studied by writing this pth order
difference equation as a vector first order difference equation:
                                                           
                    φ φ ···                        φp                
                                  1    2
         yt        c                                     yt−1   εt 
                            1 0 0                0    
                                                                         
         yt−1   0                                        yt−2    0 
                                             . .. 0                 
         .        =  .  0 1 0                              .    + . 
         ..        ..  
                                                               ..
                                                                      .. 
                     ..           .. .. ..                           
                    .               .    .      . 0···              
           yt−p+1         0                                    yt−p      0
                                  0 ··· 0 1 0

or
                                      Yt = C + FYt−1 + Et

With this, we can recursively work forward in time:


                         Yt+1            = C + FYt + Et+1

                                  = C + F (C + FYt−1 + Et ) + Et+1

                                  = C + FC + F 2Yt−1 + FEt + Et+1


and


                Yt+2                    = C + FYt+1 + Et+2
                                                            
                       = C + F C + FC + F 2Yt−1 + FEt + Et+1 + Et+2

                       = C + FC + F 2C + F 3Yt−1 + F 2 Et + FEt+1 + Et+2


or in general


 Yt+ j = C + FC + · · · + F jC + F j+1Yt−1 + F j Et + F j−1 Et+1 + · · · + FEt+ j−1 + Et+ j
                             25.2. MODELS FOR TIME SERIES DATA                  478

Consider the impact of a shock in period t on yt+ j . This is simply

                                    ∂Yt+ j         j
                                               = F(1,1)
                                     ∂Et (1,1)
                                        0


If the system is to be stationary, then as we move forward in time this impact must
die off. Otherwise a shock causes a permanent change in the mean of yt . Therefore,
stationarity requires that
                                             j
                                       lim F     =0
                                       j→∞ (1,1)

       • Save this result, we’ll need it in a minute.



Consider the eigenvalues of the matrix F. These are the for λ such that


                                      |F − λIP | = 0


The determinant here can be expressed as a polynomial. for example, for p = 1, the
matrix F is simply
                                          F = φ1

so
                                       |φ1 − λ| = 0

can be written as
                                        φ1 − λ = 0

When p = 2, the matrix F is                           
                                              φ1 φ2
                                     F=               
                                              1   0
so                                                          
                                              φ1 − λ φ 2
                               F − λIP =                    
                                              1         −λ
                           25.2. MODELS FOR TIME SERIES DATA                          479

and
                               |F − λIP | = λ2 − λφ1 − φ2

So the eigenvalues are the roots of the polynomial


                                      λ2 − λφ1 − φ2


which can be found using the quadratic equation. This generalizes. For a pth order AR
process, the eigenvalues are the roots of


                    λ p − λ p−1 φ1 − λ p−2 φ2 − · · · − λφ p−1 − φ p = 0


Supposing that all of the roots of this polynomial are distinct, then the matrix F can be
factored as
                                        F = T ΛT −1

where T is the matrix which has as its columns the eigenvectors of F, and Λ is a
diagonal matrix with the eigenvalues on the main diagonal. Using this decomposition,
we can write
                                                                 
                        F j = T ΛT −1        T ΛT −1 · · · T ΛT −1

where T ΛT −1 is repeated j times. This gives


                                     F j = T Λ j T −1


and                                                         
                                       j
                                     λ1      0            0 
                                                 j
                                                              
                                  0          λ2              
                               j                             
                              Λ =                            
                                                     ..      
                                                        .    
                                                             
                                                            j
                                   0                       λp
                             25.2. MODELS FOR TIME SERIES DATA                        480

Supposing that the λi i = 1, 2, ..., p are all real valued, it is clear that

                                                j
                                         lim F(1,1) = 0
                                         j→∞


requires that
                                    |λi | < 1, i = 1, 2, ..., p

e.g., the eigenvalues must be less than one in absolute value.



       • It may be the case that some eigenvalues are complex-valued. The previous
          result generalizes to the requirement that the eigenvalues be less than one in
          modulus, where the modulus of a complex number a + bi is

                                                    p
                                  mod(a + bi) =      a2 + b2


          This leads to the famous statement that “stationarity requires the roots of the
          determinantal polynomial to lie inside the complex unit circle.” draw picture
          here.
       • When there are roots on the unit circle (unit roots) or outside the unit circle,
          we leave the world of stationary processes.
                                                    j
       • Dynamic multipliers: ∂yt+ j /∂εt = F(1,1) is a dynamic multiplier or an impulse-
          response function. Real eigenvalues lead to steady movements, whereas comlpex
          eigenvalue lead to ocillatory behavior. Of course, when there are multiple
          eigenvalues the overall effect can be a mixture. pictures



Invertibility of AR process
    To begin with, define the lag operator L


                                          Lyt = yt−1
                             25.2. MODELS FOR TIME SERIES DATA                            481

The lag operator is defined to behave just as an algebraic quantity, e.g.,


                                       L2 yt = L(Lyt )

                                               = Lyt−1

                                                = yt−2


or


                        (1 − L)(1 + L)yt = 1 − Lyt + Lyt − L2 yt

                                              = 1 − yt−2


     A mean-zero AR(p) process can be written as


                         yt − φ1 yt−1 − φ2 yt−2 − · · · − φ p yt−p = εt


or
                           yt (1 − φ1 L − φ2 L2 − · · · − φ p L p ) = εt

Factor this polynomial as


            1 − φ1 L − φ2 L2 − · · · − φ p L p = (1 − λ1 L)(1 − λ2 L) · · · (1 − λ p L)


For the moment, just assume that the λi are coefficients to be determined. Since L is
defined to operate as an algebraic quantitiy, determination of the λ i is the same as
determination of the λi such that the following two expressions are the same for all z :


             1 − φ1 z − φ2 z2 − · · · − φ p z p = (1 − λ1 z)(1 − λ2 z) · · ·(1 − λ p z)
                               25.2. MODELS FOR TIME SERIES DATA                                   482

Multiply both sides by z−p


     z−p − φ1 z1−p − φ2 z2−p − · · · φ p−1 z−1 − φ p = (z−1 − λ1 )(z−1 − λ2 ) · · · (z−1 − λ p )


and now define λ = z−1 so we get


        λ p − φ1 λ p−1 − φ2 λ p−2 − · · · − φ p−1 λ − φ p = (λ − λ1 )(λ − λ2 ) · · · (λ − λ p )


The LHS is precisely the determinantal polynomial that gives the eigenvalues of F.
Therefore, the λi that are the coefficients of the factorization are simply the eigenvalues
of the matrix F.
     Now consider a different stationary process


                                          (1 − φL)yt = εt


        • Stationarity, as above, implies that |φ| < 1.

Multiply both sides by 1 + φL + φ2 L2 + ... + φ j L j to get

                                                                                   
          1 + φL + φ2 L2 + ... + φ j L j (1 − φL)yt = 1 + φL + φ2 L2 + ... + φ j L j εt


or, multiplying the polynomials on th LHS, we get

                                                                                      
             1 + φL + φ2 L2 + ... + φ j L j − φL − φ2 L2 − ... − φ j L j − φ j+1 L j+1 yt
                                                               
                              == 1 + φL + φ2 L2 + ... + φ j L j εt


and with cancellations we have

                                                                        
                      1 − φ j+1 L j+1 yt = 1 + φL + φ2 L2 + ... + φ j L j εt


so
                                                                          
                      yt = φ j+1 L j+1 yt + 1 + φL + φ2 L2 + ... + φ j L j εt
                              25.2. MODELS FOR TIME SERIES DATA                         483

Now as j → ∞, φ j+1 L j+1 yt → 0, since |φ| < 1, so

                                                                
                                = 1 + φL + φ2 L2 + ... + φ j L j εt
                             yt ∼


and the approximation becomes better and better as j increases. However, we started
with
                                            (1 − φL)yt = εt

Substituting this into the above equation we have

                                                          
                          = 1 + φL + φ2 L2 + ... + φ j L j (1 − φL)yt
                       yt ∼


so
                                                       
                         1 + φL + φ2 L2 + ... + φ j L j (1 − φL) ∼
                                                                 =1

and the approximation becomes arbitrarily good as j increases arbitrarily. Therefore,
for |φ| < 1, define
                                                          ∞
                                         (1 − φL)−1 = ∑ φ j L j
                                                          j=0

Recall that our mean zero AR(p) process


                             yt (1 − φ1 L − φ2 L2 − · · · − φ p L p ) = εt


can be written using the factorization


                         yt (1 − λ1 L)(1 − λ2 L) · · · (1 − λ p L) = εt


where the λ are the eigenvalues of F, and given stationarity, all the |λi | < 1. Therefore,
we can invert each first order polynomial on the LHS to get
                                   !           !                             !
                                ∞               ∞                 ∞
                               ∑ λ1 L j         ∑ λ2L j · · · ∑ λ pj L j εt
                                     j                j
                      yt =
                               j=0              j=0               j=0
                             25.2. MODELS FOR TIME SERIES DATA                           484

The RHS is a product of infinite-order polynomials in L, which can be represented as


                              yt = (1 + ψ1 L + ψ2 L2 + · · · )εt


where the ψi are real-valued and absolutely summable.

      • The ψi are formed of products of powers of the λi , which are in turn functions
         of the φi .
      • The ψi are real-valued because any complex-valued λi always occur in con-
         jugate pairs. This means that if a + bi is an eigenvalue of F, then so is a − bi.
         In multiplication


                       (a + bi) (a − bi) = a2 − abi + abi − b2 i2

                                                  = a2 + b2


         which is real-valued.
      • This shows that an AR(p) process is representable as an infinite-order MA(q)
         process.
      • Recall before that by recursive substitution, an AR(p) process can be written
         as


 Yt+ j = C + FC + · · · + F jC + F j+1Yt−1 + F j Et + F j−1 Et+1 + · · · + FEt+ j−1 + Et+ j


         If the process is mean zero, then everything with a C drops out. Take this and
         lag it by j periods to get


              Yt = F j+1Yt− j−1 + F j Et− j + F j−1 Et− j+1 + · · · + FEt−1 + Et


         As j → ∞, the lagged Y on the RHS drops out. The Et−s are vectors of zeros
         except for their first element, so we see that the first equation here, in the
                                25.2. MODELS FOR TIME SERIES DATA                         485

          limit, is just
                                             ∞    
                                        yt = ∑ F j 1,1 εt− j
                                              j=0

          which makes explicit the relationship between the ψi and the φi (and the λi as
          well, recalling the previous factorization of F j ).




      Moments of AR(p) process. The AR(p) process is


                           yt = c + φ1 yt−1 + φ2 yt−2 + · · · + φ p yt−p + εt


Assuming stationarity, E (yt ) = µ, ∀t, so


                                   µ = c + φ1 µ + φ2 µ + ... + φ p µ


so
                                                    c
                                     µ=
                                          1 − φ1 − φ2 − ... − φ p
and
                                       c = µ − φ1 µ − ... − φ p µ

so


        yt − µ = µ − φ1 µ − ... − φ p µ + φ1 yt−1 + φ2 yt−2 + · · · + φ p yt−p + εt − µ

                     = φ1 (yt−1 − µ) + φ2 (yt−2 − µ) + ... + φ p (yt−p − µ) + εt


With this, the second moments are easy to find: The variance is


                                γ0 = φ1 γ1 + φ2 γ2 + ... + φ p γ p + σ2
                            25.2. MODELS FOR TIME SERIES DATA                              486

The autocovariances of orders j ≥ 1 follow the rule

                                                        
    γj                           = E (yt − µ) yt− j − µ)
                                                                                   
         = E (φ1 (yt−1 − µ) + φ2 (yt−2 − µ) + ... + φ p (yt−p − µ) + εt ) yt− j − µ

                              = φ1 γ j−1 + φ2 γ j−2 + ... + φ p γ j−p


Using the fact that γ− j = γ j , one can take the p + 1 equations for j = 0, 1, ..., p, which
have p + 1 unknowns (σ2 , γ0 , γ1 , ..., γ p ) and solve for the unknowns. With these, the γ j
for j > p can be solved for recursively.
    Invertibility of MA(q) process. An MA(q) can be written as


                             yt − µ = (1 + θ1 L + ... + θq Lq )εt


As before, the polynomial on the RHS can be factored as


                (1 + θ1 L + ... + θq Lq ) = (1 − η1 L)(1 − η2 L)...(1 − ηq L)


and each of the (1 − ηi L) can be inverted as long as |ηi | < 1. If this is the case, then
we can write
                          (1 + θ1 L + ... + θq Lq )−1 (yt − µ) = εt

where
                                  (1 + θ1 L + ... + θq Lq )−1

will be an infinite-order polynomial in L, so we get
                                  ∞
                                  ∑ −δ j L j (yt− j − µ) = εt
                                 j=0
                            25.2. MODELS FOR TIME SERIES DATA                     487

with δ0 = −1, or


                     (yt − µ) − δ1 (yt−1 − µ) − δ2 (yt−2 − µ) + ... = εt


or
                            yt = c + δ1 yt−1 + δ2 yt−2 + ... + εt

where
                                  c = µ + δ1 µ + δ2 µ + ...

So we see that an MA(q) has an infinite AR representation, as long as the |η i | < 1,
i = 1, 2, ..., q.



        • It turns out that one can always manipulate the parameters of an MA(q) pro-
           cess to find an invertible representation. For example, the two MA(1) pro-
           cesses
                                    yt − µ = (1 − θL)εt

           and
                                  yt∗ − µ = (1 − θ−1 L)εt∗

           have exactly the same moments if


                                        σ2ε∗ = σ2ε θ2


           For example, we’ve seen that


                                     γ0 = σ2 (1 + θ2 ).


           Given the above relationships amongst the parameters,


                            γ∗0 = σ2ε θ2 (1 + θ−2 ) = σ2 (1 + θ2 )
                           25.2. MODELS FOR TIME SERIES DATA                            488

         so the variances are the same. It turns out that all the autocovariances will
         be the same, as is easily checked. This means that the two MA processes are
         observationally equivalent. As before, it’s impossible to distinguish between
         observationally equivalent processes on the basis of data.
      • For a given MA(q) process, it’s always possible to manipulate the parameters
         to find an invertible representation (which is unique).
      • It’s important to find an invertible representation, since it’s the only repre-
         sentation that allows one to represent εt as a function of past y0 s. The other
         representations express
      • Why is invertibility important? The most important reason is that it provides
         a justification for the use of parsimonious models. Since an AR(1) process
         has an MA(∞) representation, one can reverse the argument and note that at
         least some MA(∞) processes have an AR(1) representation. At the time of
         estimation, it’s a lot easier to estimate the single AR(1) coefficient rather than
         the infinite number of coefficients associated with the MA representation.
      • This is the reason that ARMA models are popular. Combining low-order AR
         and MA models can usually offer a satisfactory representation of univariate
         time series data with a reasonable number of parameters.
      • Stationarity and invertibility of ARMA models is similar to what we’ve seen
         - we won’t go into the details. Likewise, calculating moments is similar.

   E XERCISE 61. Calculate the autocovariances of an ARMA(1,1) model: (1+φL)yt =
c + (1 + θL)εt
                                       Bibliography

[1] Davidson, R. and J.G. MacKinnon (1993) Estimation and Inference in Econometrics, Oxford Univ.
    Press.
[2] Davidson, R. and J.G. MacKinnon (2004) Econometric Theory and Methods, Oxford Univ. Press.
[3] Gallant, A.R. (1985) Nonlinear Statistical Models, Wiley.
[4] Gallant, A.R. (1997) An Introduction to Econometric Theory, Princeton Univ. Press.
[5] Hamilton, J. (1994) Time Series Analysis, Princeton Univ. Press
[6] Hayashi, F. (2000) Econometrics, Princeton Univ. Press.
[7] Wooldridge (2003), Introductory Econometrics, Thomson. (undergraduate level, for supplemen-
    tary use only).




                                                489
                                        Index



asymptotic equality, 452                       observations, influential, 33
                                               outliers, 33

Chain rule, 447                                own influence, 34

Cobb-Douglas model, 27
                                               parameter space, 54
convergence, almost sure, 449
                                               Product rule, 447
convergence, in distribution, 449
convergence, in probability, 449
                                               R- squared, uncentered, 36
Convergence, ordinary, 448
                                               R-squared, centered, 37
convergence, pointwise, 448
convergence, uniform, 448
convergence, uniform almost sure, 450
cross section, 23



estimator, linear, 33, 43
estimator, OLS, 29
extremum estimator, 242



leverage, 34
likelihood function, 54



matrix, idempotent, 33
matrix, projection, 32
matrix, symmetric, 33
                                         490


